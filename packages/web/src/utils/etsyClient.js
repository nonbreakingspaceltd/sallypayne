// import Jimp from 'jimp';

const endpoint = `https://openapi.etsy.com/v2`;

const config = {
  storeId: process.env.ETSY_STORE_ID,
  token: process.env.ETSY_API_TOKEN,
  typeName: 'Etsy',
  lqip: false,
};

const slugify = (input) => {
  const slug = input
    .normalize('NFD') // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, '-'); // separator
  return slug;
};

const isPlainObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

const camelCase = (str) => {
  return str
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase())
    .replace(/^\w/, (c) => c.toLowerCase());
};

// Parse JSON and throw on bad responses
const responseHandler = (response) => {
  if (response.status >= 400) {
    throw new Error([response.status, response.statusText].join(' '));
  }
  return response.json();
};

async function fetch(url) {
  console.log(url);
  return (
    fetch(url.toString(), {
      method: 'GET',
    })
      .then(responseHandler)
      // The query results are in the `result` property
      .then((json) => json.result)
  );
}

function normalizeFieldValue(value) {
  if (value === null) return null;
  if (value === undefined) return null;

  if (Array.isArray(value)) {
    return value.map((v) => normalizeFieldValue(v));
  }

  if (isPlainObject(value)) {
    return normalizeFields(value);
  }

  return value;
}

function normalizeFields(fields) {
  const res = {};

  for (const key in fields) {
    if (key.startsWith('_')) continue; // skip links and embeds etc
    res[camelCase(key)] = normalizeFieldValue(fields[key]);
  }

  return res;
}

export async function getEtsyProducts() {
  const { data } = await fetch(
    `${endpoint}/shops/${config.storeId}/listings/active?api_key=${config.token}`
  );
  console.log(data);

  return data;

  // console.log(`Loading image(s) data from Etsy`);
  // for (const [productIndex, product] of data.results.entries()) {
  //   const fields = normalizeFields(product);
  //   const imagesReq = await fetch(
  //     `${endpoint}/private/listings/${fields.listingId}/images?api_key=${config.token}`
  //   );
  //   const images = [...imagesReq.data.results];
  //   // if (config.lqip) {
  //   //   for await (const [imageIndex, image] of imagesReq.data.results.entries()) {
  //   //     for await (let [key, value] of Object.entries(image)) {
  //   //       if (key.startsWith('url_570xN')) {
  //   //         process.stdout.write(
  //   //           `Generating lqip's (Etsy product ${productIndex + 1} of ${
  //   //             data.results.length
  //   //           }, image ${imageIndex + 1} of ${imagesReq.data.results.length})...`
  //   //         );
  //   //         const thumbReq = await Jimp.read(value);
  //   //         const thumbResized = await thumbReq.resize(15, Jimp.AUTO);
  //   //         const base64 = await thumbResized.getBase64Async('image/png');
  //   //         image['lqip'] = base64;
  //   //       }
  //   //     }
  //   //   }
  //   //   if (productIndex + 1 === data.results.length) {
  //   //     process.stdout.write(`\n`);
  //   //   }
  //   // }
  //   products.addNode({
  //     ...fields,
  //     images: images,
  //     slug: slugify(fields.title),
  //   });
  // }
}
