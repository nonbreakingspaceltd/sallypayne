import fetch from 'cross-fetch';
import { hashCode, randomIntFromInterval, slugify } from './helpers';

export const config = {
  storeId: import.meta.env.PUBLIC_ETSY_STORE_ID,
  token: import.meta.env.PUBLIC_ETSY_API_TOKEN,
};

function timeout(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const etsyClient = (
  token: string,
  useMemoryCache = false,
  verboseLogging = false,
) => {
  const hasToken = token && token.length > 0;
  const endpoint = 'https://openapi.etsy.com/v3/application';

  const loadingCache = new Map();
  const cache = new Map();
  let cacheHits = 0;

  return {
    fetch: async (path: string) => {
      const offset = randomIntFromInterval(0, 500);
      const interval = 500;
      const url = new URL([endpoint, path].join('')).toString();
      const cacheKey = hashCode(slugify(url));
      const hasCacheKey = cache.has(cacheKey);
      const hasLoadingCacheKey = loadingCache.has(cacheKey);

      await timeout(offset);

      if (verboseLogging) {
        console.log({
          offset,
          useMemoryCache,
          hasCacheKey,
          hasLoadingCacheKey,
        });
      }

      if (!hasLoadingCacheKey) {
        if (verboseLogging) {
          console.log('No cach key for', cacheKey);
        }
        loadingCache.set(cacheKey, cacheKey);
      }

      console.log(
        'Use cache?',
        useMemoryCache && (hasCacheKey || hasLoadingCacheKey),
      );

      if (useMemoryCache && (hasCacheKey || hasLoadingCacheKey)) {
        cacheHits++;

        if (verboseLogging) {
          console.info(`Etsy cache hit: ${cacheKey} x${cacheHits}`);
        }

        if (!hasCacheKey && hasLoadingCacheKey) {
          const wait = setInterval(() => {
            if (cache.has(cacheKey)) {
              if (verboseLogging) {
                console.log(`Returning ${cacheKey} from cache after waiting`);
                console.log('hasCacheKey', hasCacheKey);
              }
              clearInterval(wait);
              return cache.get(cacheKey);
            }
            console.log(
              `Waiting for: ${offset} | ${loadingCache.get(cacheKey)} | ${null} ...`,
            );
          }, interval);
        } else {
          if (verboseLogging) {
            console.log(`Returning ${cacheKey} direct from cache`);
          }

          return cache.get(cacheKey);
        }
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

      console.log(`should only see this twice`, cacheKey);

      return result;
    },
  };
};

export const client = etsyClient(config.token, true, false);
