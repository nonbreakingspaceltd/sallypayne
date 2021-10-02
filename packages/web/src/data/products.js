import { decode } from 'html-entities';
import { getSiteSettings } from './global';
import { slugify, textToHtml, toSentenceCase } from '../utils/helpers';
import { client } from '../utils/etsyClient';

const storeId = process.env.ETSY_STORE_ID;

function processProductPath(slug) {
  return `/shop/product/${slug}/`;
}

function calculatePrice(amount, divisor) {
  return (amount / divisor).toFixed(2);
}

function processDisplayPrice(price) {
  const currencySymbol = price.currency_code === 'GBP' ? '£' : 'NA';
  const amount = calculatePrice(price.amount, price.divisor);
  return `${currencySymbol}${amount}`;
}

function processImage(image, alt) {
  return {
    src: image.url_570xN,
    width: image.full_width,
    height: image.full_height,
    alt,
    backgroundColor: image.hex_code && `#${image.hex_code}`,
  };
}

function proccessProduct(product, siteSettings) {
  const { state, listing_id, title, price, currency_code, url, description, images } = product;
  const cleanTitle = decode(toSentenceCase(title.split(' - ')[0] || title), { level: 'html5' });
  const slug = slugify(cleanTitle);
  const trimmedDescription = toSentenceCase(description.split('About me:')[0] || description);
  const descriptionParts = trimmedDescription.replace(/\r/g, '').split(/\n/);
  const processedProduct = {
    title: cleanTitle,
    price: processDisplayPrice(price),
    description: textToHtml(trimmedDescription),
    currencyCode: currency_code,
    path: processProductPath(slug),
    slug,
    url,
    listingId: listing_id,
    state,
    image: processImage(images[0], cleanTitle),
    meta: {
      title: `${cleanTitle} | Shop | ${siteSettings.title}`,
      description: descriptionParts[1] || title,
      og: {
        image: images[0].url_570xN
      },
      jsonLd: {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: cleanTitle,
        image: images[0].url_570xN,
        description: trimmedDescription,
        brand: {
          '@type': 'Brand',
          name: 'Sally Payne',
        },
        offers: {
          '@type': 'AggregateOffer',
          price: calculatePrice(price.amount, price.divisor),
          priceCurrency: price.currency_code,
        },
      },
    }
  };
  return processedProduct;
}

export async function getProducts() {
  const siteSettings = await getSiteSettings();
  const activeProducts = await client.fetch(`/shops/${storeId}/listings/active?limit=100`);
  if (!activeProducts) {
    return [];
  }
  const ids = activeProducts.results.map((item) => item.listing_id).join(',');
  const productsData = await client.fetch(`/listings/batch?listing_ids=${ids}&includes=Images`);
  const products = productsData.results.map((product) => {
    const processedProduct = proccessProduct(product, siteSettings);
    return {
      params: {
        id: processedProduct.slug,
      },
      props: processedProduct,
    };
  });
  return products;
}

export async function getPaginatedProducts(paginate) {
  const proccessedProducts = await getProducts();
  const pageSize = 20;
  return paginate(proccessedProducts, {
    pageSize,
  });
}
