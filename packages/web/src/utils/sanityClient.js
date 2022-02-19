import sanityImageUrlBuilder from '@sanity/image-url';
import fetch from 'cross-fetch';
import { slugify, hashCode } from './helpers';
import { sanityConfig } from './config';

function customClient(clientConfig, useMemoryCache = false, verboseLogging = false) {
  const { useCdn, projectId, dataset, token, apiVersion } = clientConfig;
  const hasToken = token && token.length > 0;
  const baseHost = useCdn ? 'apicdn.sanity.io' : 'api.sanity.io';
  const endpoint = `https://${projectId}.${baseHost}/v${apiVersion}/data/query/${dataset}`;

  const cache = new Map();
  let cacheHits = 0;

  return {
    fetch: async (query, parameters = {}) => {
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

      if (Object.keys(parameters).length) {
        Object.keys(parameters).forEach((key) => {
          queryUrl.searchParams.set(`$${key}`, JSON.stringify(parameters[key]));
        });
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
        throw new Error(['Sanity Client -', response.status, response.statusText].join(' '));
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
