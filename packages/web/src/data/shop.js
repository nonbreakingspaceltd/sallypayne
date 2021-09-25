import { getSiteSettings } from './global';

const config = {
  storeId: process.env.ETSY_STORE_ID,
  token: process.env.ETSY_API_TOKEN,
};

const endpoint = `https://openapi.etsy.com/v3/application/shops/${config.storeId}/listings`;

const toSentenceCase = (str) => {
  const newString = str.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
    return c.toUpperCase();
  });
  return newString;
};

const processProductPath = (id) => {
  return `/shop/product/${id}/`;
};

const proccessProduct = async (product, images) => {
  const siteSettings = await getSiteSettings();
  const { state, listing_id, title, price, currency_code, url, description } = product;
  const cleanTitle = toSentenceCase(title.split(' - ')[0]);
  let image = images[1] ? images[1] : images[0];
  image = {
    src: image.url_570xN,
    width: image.full_width,
    height: image.full_height,
    alt: cleanTitle,
    backgroundColor: `#${image.hex_code}`
  };
  return {
    title: cleanTitle,
    price: `£${(price.amount / price.divisor).toFixed(2)}`,
    description,
    currencyCode: currency_code,
    path: processProductPath(listing_id),
    url,
    listingId: listing_id,
    state,
    image,
    meta: {
      title: `${cleanTitle} | Shop | ${siteSettings.title}`,
      description: description,
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
    `${endpoint}/active?client_id=${config.token}&limit=100`
  );
  const productsResponseData = await productsResponse.json();
  let products = [];
  // const concurrency = 2;
  // while (productsResponseData.results.length) {
  //   await Promise.all(
  //     productsResponseData.results.splice(0, concurrency).map(async (product) => {
  //       const { listing_id } = product;
  //       const images = await getProductImages(listing_id);
  //       const processedProduct = {
  //         params: {
  //           id: listing_id.toString(),
  //         },
  //         props: proccessProduct(product, images),
  //       };
  //       products.push(processedProduct);
  //       return processedProduct;
  //     })
  //   );
  // }
  for await (product of productsResponseData.results) {
    const { listing_id } = product;
    const images = await getProductImages(listing_id);
    const processedProduct = {
      params: {
        id: listing_id.toString(),
      },
      props: await proccessProduct(product, images.results),
    };
    products.push(processedProduct);
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
