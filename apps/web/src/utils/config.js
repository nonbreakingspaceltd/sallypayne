import 'dotenv/config';

export const sanityConfig = {
  projectId: process.env.PUBLIC_SANITY_STUDIO_API_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_STUDIO_API_DATASET,
  token: process.env.PRIVATE_SANITY_STUDIO_API_TOKEN,
  apiVersion: process.env.PUBLIC_SANITY_STUDIO_API_VERSION,
  useCdn: process.env.PUBLIC_SANITY_STUDIO_USE_CDN || true,
};

export const etsyConfig = {
  storeId: process.env.PUBLIC_ETSY_STORE_ID,
  token: process.env.PUBLIC_ETSY_API_TOKEN,
};
