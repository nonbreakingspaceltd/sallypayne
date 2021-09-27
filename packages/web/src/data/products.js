import { getSiteSettings } from './global';
import { slugify, textToHtml, toSentenceCase } from '../utils/helpers';
import { client } from '../utils/etsyClient';

const storeId = process.env.ETSY_STORE_ID;

const processProductPath = (slug) => {
  return `/shop/product/${slug}/`;
};

const processPrice = (price) => {
  console.log(price);
  const currencySymbol = price.currency_code === 'GBP' ? '£' : 'NA';
  const amount = (price.amount / price.divisor).toFixed(2);
  return `${currencySymbol}${amount}`
}

const processImage = (image, alt) => {
  return {
    src: image.url_570xN,
    width: image.full_width,
    height: image.full_height,
    alt,
    backgroundColor: image.hex_code && `#${image.hex_code}`,
  }
}

const proccessProduct = (product, siteSettings) => {
  const { state, listing_id, title, price, currency_code, url, description, images } = product;
  const cleanTitle = toSentenceCase(title.split(' - ')[0] || title);
  const slug = slugify(cleanTitle);
  const trimmedDescription = toSentenceCase(description.split('About me:')[0] || description);
  const descriptionParts = trimmedDescription.replace(/\r/g, '').split(/\n/);
  const processedProduct = {
    title: cleanTitle || title,
    price: processPrice(price),
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
    },
  };
  return processedProduct;
};

export async function getProducts(fetch) {
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

export async function getPaginatedProducts(fetch, paginate) {
  const proccessedProducts = await getProducts(fetch);
  const pageSize = 20;
  return paginate(proccessedProducts, {
    pageSize,
  });
}
