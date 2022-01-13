import fetch from 'cross-fetch';
import { slugify, hashCode, randomIntFromInterval } from './helpers';

export const config = {
  storeId: import.meta.env.PUBLIC_ETSY_STORE_ID,
  token: import.meta.env.PUBLIC_ETSY_API_TOKEN,
};

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const etsyClient = (token, useMemoryCache = false, verboseLogging = false) => {
  const hasToken = token && token.length > 0;
  const endpoint = 'https://openapi.etsy.com/v3/application';

  const loadingCache = new Map();
  const cache = new Map();
  let cacheHits = 0;

  return {
    fetch: async (path) => {
      const offset = randomIntFromInterval(0, 500);
      const interval = 500;
      const url = new URL([endpoint, path].join('')).toString();
      const cacheKey = hashCode(slugify(url));
      const hasCacheKey = cache.has(cacheKey);
      const hasLoadingCacheKey = loadingCache.has(cacheKey);

      await timeout(offset);

      if (useMemoryCache && cache.has(cacheKey)) {
        cacheHits++;
        if (verboseLogging) {
          console.info(`Etsy cache hit: ${cacheHits} x${cacheKey}`);
        }
        return cache.get(cacheKey);
      }

      const response = await fetch(url, {
        method: 'GET',
        headers: hasToken
          ? {
              'x-api-key': token,
            }
          : undefined,
      });

      if (response.status >= 400) {
        throw new Error(['Etsy Client -', response.status, response.statusText].join(' '));
      }

      const result = await response.json();

      if (useMemoryCache) {
        if (verboseLogging) {
          console.log(`Store ${cacheKey} in cache`);
        }
        cache.set(cacheKey, result);
      }

      return result;
    },
  };
};

export const client = etsyClient(config.token, true, false);
