/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

const VERSION = '__VERSION__';

const CACHE_KEYS = {
  PRE_CACHE: `precache-${VERSION}`,
  RUNTIME: `runtime-${VERSION}`,
};

// Define URLS that we don’t want to end up in the cache, This could have been set
// from outside too, so merge that if set
const EXCLUDED_URLS = [
  ...(typeof OUTER_EXCLUDED_URLS !== 'undefined' ? OUTER_EXCLUDED_URLS : []),
  ...['/service-worker.js'],
];

// Define URLS that we want to be cached when the worker is installed. This could have been set
// from outside too, so merge that if set
const PRE_CACHE_URLS = [
  ...(typeof OUTER_PRE_CACHE_URLS !== 'undefined' ? OUTER_PRE_CACHE_URLS : []),
  // e.g.
  // ...[
  //   '/fonts/my-custom-font.woff2'
  // ],
];

// Define some ignored hosts. This could have been set
// from outside too, so merge that if set
const IGNORED_HOSTS = [
  ...(typeof OUTER_IGNORED_HOSTS !== 'undefined' ? OUTER_IGNORED_HOSTS : []),
  ...[
    'www.googletagmanager.com',
    'www.youtube.com'
  ],
];

// Define some hosts to ignore for runtime caching. This could have been set
// from outside too, so merge that if set
const RUNTIME_IGNORED_HOSTS = [
  ...(typeof OUTER_RUNTIME_IGNORED_HOSTS !== 'undefined' ? OUTER_RUNTIME_IGNORED_HOSTS : []),
  ...['www.googletagmanager.com'],
];

self.addEventListener('install', () => {
  self.skipWaiting();

  // Cache all pre-cache urls
  caches.open(CACHE_KEYS.PRE_CACHE).then(cache => cache.addAll(PRE_CACHE_URLS));
});

self.addEventListener('activate', event => {
  // Look for any old caches that don't match our set and clear them out
  event.waitUntil(
    caches
      .keys()
      .then(cacheNames => cacheNames.filter(item => !Object.values(CACHE_KEYS).includes(item)))
      .then(itemsToDelete => Promise.all(itemsToDelete.map(item => caches.delete(item))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { hostname } = new URL(event.request.url);

  // Check we don't want to ignore this host
  if (IGNORED_HOSTS.indexOf(hostname) >= 0) {
    return;
  }

  // Check we don't want to ignore this URL
  if (EXCLUDED_URLS.some(page => event.request.url.indexOf(page) > -1)) {
    return;
  }

  // Don't cache POST requests or videos
  // TODO: Add support for media (i.e. range) caching
  if (event.request.method === 'POST' || event.request.headers.get('range')) {
    return;
  }

  // HTML files Network-first
  if (event.request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If we're ignoring runtime caching on this host,
          // we only want to return the response
          if (RUNTIME_IGNORED_HOSTS.indexOf(hostname) > -1) {
            return response;
          }

          // Create a copy of the response and save it to the cache
          const copy = response.clone();
          event.waitUntil(
            caches.open(CACHE_KEYS.RUNTIME).then(cache => cache.put(event.request, copy))
          );

          // Return the response
          return response;
        })
        .catch(() =>
          // If there's no item in cache, respond with a fallback
          caches.match(event.request).then(response => response)
        )
    );
    return;
  }

  // Other files Cache-first
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Item found in cache so return
      if (cachedResponse) {
        return cachedResponse;
      }

      // Nothing found so load up the request from the network
      return caches.open(CACHE_KEYS.RUNTIME).then(cache =>
        fetch(event.request)
          .then(response => {
            // If we're ignoring runtime caching on this host,
            // we only want to return the response
            if (RUNTIME_IGNORED_HOSTS.indexOf(hostname) > -1) {
              return response;
            }

            // Else, put the new response in cache and return it
            return cache.put(event.request, response.clone()).then(() => response);
          })
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          .catch(() => {})
      );
    })
  );
});
