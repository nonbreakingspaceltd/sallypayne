const CACHE_KEYS = {
  PRE_CACHE: `precache-dev`,
  RUNTIME: `runtime-dev`,
};

// Define URLS that we don’t want to end up in the cache
const EXCLUDED_URLS = ['/service-worker.js', '/~partytown/'];

// Define URLS that we want to be cached when the worker is installed
const PRE_CACHE_URLS = [];

// Define some ignored hosts
const IGNORED_HOSTS = [
  'www.googletagmanager.com',
  'www.youtube.com',
  'static.cloudflareinsights.com',
];

// Define some hosts to ignore for runtime caching
const RUNTIME_IGNORED_HOSTS = [
  'www.googletagmanager.com',
  'www.youtube.com',
  'static.cloudflareinsights.com',
];

self.addEventListener('install', async () => {
  self.skipWaiting();

  const selfUrl = new URL(self.location);
  const version = selfUrl.searchParams.get('version');

  if (version) {
    CACHE_KEYS.PRE_CACHE = `precache-${version}`;
    CACHE_KEYS.RUNTIME = `runtime-${version}`;
  }

  // Cache all pre-cache urls
  const cache = await caches.open(CACHE_KEYS.PRE_CACHE);
  await cache.addAll(PRE_CACHE_URLS);
});

self.addEventListener('activate', (event) => {
  // Look for any old caches that don't match our set and clear them out
  const pruneCaches = async () => {
    const cacheNames = await caches.keys();
    const itemsToDelete = cacheNames.filter((item) => !Object.values(CACHE_KEYS).includes(item));
    await Promise.all(itemsToDelete.map((item) => caches.delete(item)));
    return self.clients.claim();
  };

  event.waitUntil(pruneCaches());
});

self.addEventListener('fetch', (event) => {
  const { hostname } = new URL(event.request.url);

  // Check we don't want to ignore this host
  if (IGNORED_HOSTS.indexOf(hostname) >= 0) {
    return;
  }

  // Check we don't want to ignore this URL
  if (EXCLUDED_URLS.some((page) => event.request.url.indexOf(page) > -1)) {
    return;
  }

  // Don't cache POST requests or videos
  // TODO: Add support for media (i.e. range) caching
  if (event.request.method === 'POST' || event.request.headers.get('range')) {
    return;
  }

  // HTML files Network-first
  if (event.request.headers.get('Accept').includes('text/html')) {
    const fetchAndCache = async () => {
      try {
        const response = await fetch(event.request);

        // If we're ignoring runtime caching on this host,
        // we only want to return the response
        if (RUNTIME_IGNORED_HOSTS.indexOf(hostname) > -1) {
          return response;
        }

        // Create a copy of the response and save it to the cache
        const copy = response.clone();
        const cache = await caches.open(CACHE_KEYS.RUNTIME);
        await cache.put(event.request, copy);

        // Return the response
        return response;
      } catch (error) {
        // If there's no item in cache, respond with a fallback
        const cacheResponse = await caches.match(event.request);
        return cacheResponse;
      }
    };

    event.respondWith(fetchAndCache());

    return;
  }

  const cacheFirst = async () => {
    // Try to get the response from a cache.
    const cachedResponse = await caches.match(event.request);

    // Item found in cache so return
    if (cachedResponse) {
      return cachedResponse;
    }

    // Nothing found so load up the request from the network
    const cache = await caches.open(CACHE_KEYS.RUNTIME);
    const newResponse = await fetch(event.request);

    // If we're ignoring runtime caching on this host,
    // we only want to return the response
    if (RUNTIME_IGNORED_HOSTS.indexOf(hostname) > -1) {
      return newResponse;
    }

    // Else, put the new response in cache and return it
    await cache.put(event.request, newResponse.clone());
    return newResponse;
  };

  // Other files Cache-first
  event.respondWith(cacheFirst());
});
