import { etsyConfig } from './config';
import { hashCode, slugify } from './helpers';

const ENDPOINT = 'https://openapi.etsy.com/v3/application';
const MAX_RETRIES = 3;

function buildApiKey(
  token: string | undefined,
  sharedSecret: string | undefined,
): string | undefined {
  if (!token) {
    return undefined;
  }
  return sharedSecret ? `${token}:${sharedSecret}` : token;
}

async function fetchWithRetry(
  url: string,
  apiKey: string | undefined,
): Promise<Response> {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const response = await fetch(url, {
      method: 'GET',
      headers: apiKey ? { 'x-api-key': apiKey } : undefined,
    });

    if (response.status === 429) {
      const retryAfter = Number(response.headers.get('retry-after')) || 1;
      console.warn(
        `Etsy rate limited, retrying in ${retryAfter}s (attempt ${attempt + 1}/${MAX_RETRIES})`,
      );
      await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
      continue;
    }

    return response;
  }

  throw new Error('Etsy Client - max retries exceeded');
}

const etsyClient = (
  apiKey: string | undefined,
  useMemoryCache = false,
  verboseLogging = false,
) => {
  const cache = new Map();
  let cacheHits = 0;

  return {
    fetch: async (path: string) => {
      const url = new URL([ENDPOINT, path].join('')).toString();
      const cacheKey = hashCode(slugify(url));

      if (useMemoryCache && cache.has(cacheKey)) {
        cacheHits++;
        if (verboseLogging) {
          console.info(`Etsy cache hit: ${cacheHits} x${cacheKey}`);
        }
        return cache.get(cacheKey);
      }

      const response = await fetchWithRetry(url, apiKey);

      if (response.status >= 400) {
        throw new Error(
          `Etsy Client - ${response.status} ${response.statusText}`,
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

export const client = etsyClient(
  buildApiKey(etsyConfig.token, etsyConfig.sharedSecret),
  true,
  false,
);
