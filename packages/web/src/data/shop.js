import { getSiteSettings } from './global';

const config = {
  storeId: process.env.ETSY_STORE_ID,
  token: process.env.ETSY_API_TOKEN,
};

const endpoint = `https://openapi.etsy.com/v3/application/shops/${config.storeId}/listings`;

export const slugify = (input) => {
  const slug = input
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-'); // separator
  return slug;
};

const toSentenceCase = (str) => {
  const newString = str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
  return newString;
};

const processProductPath = (slug) => {
  return `/shop/product/${slug}/`;
};

const proccessProduct = async (product, images) => {
  const siteSettings = await getSiteSettings();
  const { state, listing_id, title, price, currency_code, url, description } = product;
  const cleanTitle = toSentenceCase(title.split(' - ')[0] || title);
  const slug = slugify(cleanTitle);
  const trimmedDescription = toSentenceCase(description.split('About me:')[0]);
  const descriptionParts = trimmedDescription.replace(/\r/g, '').split(/\n/);
  const htmlDescription = '<p>' + trimmedDescription.replace(/\n{2,}/g, '</p><p>').replace(/\n/g, '<br />') + '</p>';
  let image = images[1] ? images[1] : images[0];
  image = {
    src: image.url_570xN,
    width: image.full_width,
    height: image.full_height,
    alt: cleanTitle,
    backgroundColor: `#${image.hex_code}`
  };
  return {
    title: cleanTitle || title,
    price: `£${(price.amount / price.divisor).toFixed(2)}`,
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
};

const getProductImages = async (listingId) => {
  const imagesResponse = await fetch(
    `${endpoint}/${listingId}/images?client_id=${config.token}`
  );
  let images = await imagesResponse.json();
  return images;
};

export async function getProducts(fetch) {
  const productsResponse = await fetch(
    `${endpoint}/active?client_id=${config.token}&limit=100&includes=MainImage`
  );
  const productsResponseData = await productsResponse.json();
  console.log(productsResponseData);
  let products = [];
  // const concurrency = 2;
  // while (productsResponseData.results.length) {
  //   await Promise.all(
  //     productsResponseData.results.splice(0, concurrency).map(async (product) => {
  //       const { listing_id } = product;
  //       const images = await getProductImages(listing_id);
  //       const processedProduct = await proccessProduct(product, images.results);
  //       const newProduct = {
  //         params: {
  //           id: processedProduct.slug,
  //         },
  //         props: processedProduct,
  //       };
  //       products.push(newProduct);
  //     })
  //   );
  // }
  for await (product of productsResponseData.results) {
    const { listing_id } = product;
    const images = await getProductImages(listing_id);
    const processedProduct = await proccessProduct(product, images.results);
    const newProduct = {
      params: {
        id: processedProduct.slug,
      },
      props: processedProduct,
    };
    products.push(newProduct);
  }
  return products;
}

export async function getPaginatedProducts(fetch, paginate) {
  const proccessedProducts = await getProducts(fetch);
  const pageSize = 20;
  return paginate(proccessedProducts, {
    pageSize,
  });
}
