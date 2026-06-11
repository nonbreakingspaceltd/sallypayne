import createImageUrlBuilder from '@sanity/image-url';
import fetch from 'cross-fetch';
import type { TODO } from '../../types';
import { sanityConfig } from './config';
import { hashCode, slugify } from './helpers';

// Long enough to dedupe the repeated queries of a static build, short
// enough that published content reaches server-rendered pages quickly
const CACHE_TTL_MS = 60_000;

function customClient(
  clientConfig: TODO,
  useMemoryCache = false,
  verboseLogging = false,
) {
  const { useCdn, projectId, dataset, token, apiVersion } = clientConfig;
  const hasToken = token && token.length > 0;
  const baseHost = useCdn ? 'apicdn.sanity.io' : 'api.sanity.io';
  const endpoint = `https://${projectId}.${baseHost}/v${apiVersion}/data/query/${dataset}`;

  const cache = new Map<number, { value: unknown; expires: number }>();
  let cacheHits = 0;

  return {
    fetch: async <T>(
      query: string,
      parameters?: Record<string, unknown>,
    ): Promise<T> => {
      const cacheKey = hashCode(slugify(query + JSON.stringify(parameters)));

      if (useMemoryCache) {
        const cached = cache.get(cacheKey);
        if (cached && cached.expires > Date.now()) {
          cacheHits++;
          if (verboseLogging) {
            console.info(`Sanity cache hit: ${cacheHits} x${cacheKey}`);
          }
          return cached.value as T;
        }
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
        cache.set(cacheKey, {
          value: result,
          expires: Date.now() + CACHE_TTL_MS,
        });
      }

      return result;
    },
  };
}

// In dev, skip both the memory cache and Sanity's CDN so every request
// fetches fresh content (import.meta.env is undefined outside Vite, e.g. tsx)
const isProd = import.meta.env?.PROD ?? true;

export const client = customClient(
  { ...sanityConfig, useCdn: sanityConfig.useCdn && isProd },
  isProd,
  false,
);

export const imageUrlBuilder = createImageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});
