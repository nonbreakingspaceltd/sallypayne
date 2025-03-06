import fetch from 'cross-fetch';
import { etsyConfig } from './config';
import { hashCode, randomIntFromInterval, slugify } from './helpers';

function timeout(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const etsyClient = (
  token: string | undefined,
  useMemoryCache = false,
  verboseLogging = false,
) => {
  const hasToken = token && token.length > 0;
  const endpoint = 'https://openapi.etsy.com/v3/application';

  const cache = new Map();
  let cacheHits = 0;

  return {
    fetch: async (path: string) => {
      const offset = randomIntFromInterval(0, 500);
      const url = new URL([endpoint, path].join('')).toString();
      const cacheKey = hashCode(slugify(url));

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
        throw new Error(
          ['Etsy Client -', response.status, response.statusText].join(' '),
        );
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

export const client = etsyClient(etsyConfig.token, true, false);
