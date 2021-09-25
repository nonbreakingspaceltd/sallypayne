import { getSiteSettings } from './global';
import { slugify, textToHtml, toSentenceCase } from '../utils/helpers';
import { client } from '../utils/etsyClient';

const storeId = process.env.ETSY_STORE_ID;

const processProductPath = (slug) => {
  return `/shop/product/${slug}/`;
};

const proccessProduct = (product, siteSettings) => {
  const { state, listing_id, title, price, currency_code, url, description, images } = product;
  const currencySymbol = price.currency_code === 'GBP' ? '£' : 'NA';
  const cleanTitle = toSentenceCase(title.split(' - ')[0] || title);
  const slug = slugify(cleanTitle);
  const trimmedDescription = toSentenceCase(description.split('About me:')[0]);
  const descriptionParts = trimmedDescription.replace(/\r/g, '').split(/\n/);
  const htmlDescription = textToHtml(trimmedDescription);
  const image = {
    src: images[0].url_570xN,
    width: images[0].full_width,
    height: images[0].full_height,
    alt: cleanTitle,
    backgroundColor: images[0].hex_code && `#${images[0].hex_code}`,
  };
  const processedProduct = {
    title: cleanTitle || title,
    price: `${currencySymbol}${price.amount / price.divisor}`,
    description: htmlDescription,
    currencyCode: currency_code,
    path: processProductPath(slug),
    slug,
    url,
    listingId: listing_id,
    state,
    image,
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
