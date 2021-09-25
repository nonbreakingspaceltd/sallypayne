import { getSiteSettings } from './global';
import { slugify, textToHtml, toSentenceCase } from '../utils/helpers';

const config = {
  endpoint: `https://openapi.etsy.com/v2`,
  storeId: process.env.ETSY_STORE_ID,
  token: process.env.ETSY_API_TOKEN,
};

const processProductPath = (slug) => {
  return `/shop/product/${slug}/`;
};

const proccessProduct = (product, siteSettings) => {
  const { state, listing_id, title, price, currency_code, url, description, MainImage } = product;
  const currencySymbol = currency_code === 'GBP' ? '£' : 'NA';
  const cleanTitle = toSentenceCase(title.split(' - ')[0] || title);
  const slug = slugify(cleanTitle);
  const trimmedDescription = toSentenceCase(description.split('About me:')[0]);
  const descriptionParts = trimmedDescription.replace(/\r/g, '').split(/\n/);
  const htmlDescription = textToHtml(trimmedDescription);
  const image = {
    src: MainImage.url_570xN,
    width: MainImage.full_width,
    height: MainImage.full_height,
    alt: cleanTitle,
    backgroundColor: MainImage.hex_code && `#${MainImage.hex_code}`,
  };
  const processedProduct = {
    title: cleanTitle || title,
    price: `${currencySymbol}${price}`,
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
  const response = await fetch(
    `${config.endpoint}/shops/${config.storeId}/listings/active?method=GET&api_key=${config.token}&limit=100&includes=MainImage`
  );
  const data = await response.json();
  const products = data.results.map((product) => {
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
