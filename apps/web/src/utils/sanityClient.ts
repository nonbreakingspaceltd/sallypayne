import sanityImageUrlBuilder from '@sanity/image-url';
import fetch from 'cross-fetch';
import type { TODO } from '../../types';
import { sanityConfig } from './config';
import { hashCode, slugify } from './helpers';

function customClient(
  clientConfig: TODO,
  useMemoryCache = false,
  verboseLogging = false,
) {
  const { useCdn, projectId, dataset, token, apiVersion } = clientConfig;
  const hasToken = token && token.length > 0;
  const baseHost = useCdn ? 'apicdn.sanity.io' : 'api.sanity.io';
  const endpoint = `https://${projectId}.${baseHost}/v${apiVersion}/data/query/${dataset}`;

  const cache = new Map();
  let cacheHits = 0;

  return {
    fetch: async <T>(
      query: string,
      parameters?: Record<string, unknown>,
    ): Promise<T> => {
      const cacheKey = hashCode(slugify(query + JSON.stringify(parameters)));

      if (useMemoryCache && cache.has(cacheKey)) {
        cacheHits++;
        if (verboseLogging) {
          console.info(`Sanity cache hit: ${cacheHits} x${cacheKey}`);
        }
        return cache.get(cacheKey);
      }

      const queryUrl = new URL(endpoint);

      queryUrl.searchParams.set(`query`, query);

      if (parameters && Object.keys(parameters).length) {
        for (const key of Object.keys(parameters)) {
          queryUrl.searchParams.set(`$${key}`, JSON.stringify(parameters[key]));
        }
      }

      const response = await fetch(queryUrl.toString(), {
        method: 'GET',
        headers: hasToken
          ? {
              Authorization: `Bearer ${token}`,
            }
          : undefined,
      });

      if (response.status >= 400) {
        throw new Error(
          ['Sanity Client -', response.status, response.statusText].join(' '),
        );
      }

      const { result } = await response.json();

      if (useMemoryCache) {
        cache.set(cacheKey, result);
      }

      return result;
    },
  };
}

export const client = customClient(sanityConfig, true, false);

export const imageUrlBuilder = sanityImageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});
