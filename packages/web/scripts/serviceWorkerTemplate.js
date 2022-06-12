/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */

const VERSION = '__VERSION__';
const OUTER_RUNTIME_IGNORED_HOSTS = [];

const CACHE_KEYS = {
  PRE_CACHE: `precache-${VERSION}`,
  RUNTIME: `runtime-${VERSION}`,
};

// Define URLS that we don’t want to end up in the cache, This could have been set
// from outside too, so merge that if set
const EXCLUDED_URLS = [
  ...(typeof OUTER_EXCLUDED_URLS !== 'undefined' ? OUTER_EXCLUDED_URLS : []),
  ...['http://localhost:8080/browser-sync/socket.io/'],
];

// Define URLS that we want to be cached when the worker is installed. This could have been set
// from outside too, so merge that if set
const PRE_CACHE_URLS = [
  ...(typeof OUTER_PRE_CACHE_URLS !== 'undefined' ? OUTER_PRE_CACHE_URLS : []),
  ...['/fonts/sketchysallysans-regular-webfont.woff2'],
];

// Define some ignored hosts. This could have been set
// from outside too, so merge that if set
const IGNORED_HOSTS = [
  ...(typeof OUTER_IGNORED_HOSTS !== 'undefined' ? OUTER_IGNORED_HOSTS : []),
  // e.g.
  // ...['api.piccalil.li', 'usefathom.com'],
];

// Define some hosts to ignore for runtime caching. This could have been set
// from outside too, so merge that if set
const RUNTIME_IGNORED_HOSTS = [
  ...(typeof OUTER_RUNTIME_IGNORED_HOSTS !== 'undefined' ? OUTER_RUNTIME_IGNORED_HOSTS : []),
  ...[],
];

/**
 * Takes an array of strings and puts them in a named cache store
 *
 * @param {String} cacheName
 * @param {Array} items=[]
 */
function addItemsToCache(cacheName, items = []) {
  caches.open(cacheName).then((cache) => cache.addAll(items));
}

self.addEventListener('install', () => {
  self.skipWaiting();

  addItemsToCache(CACHE_KEYS.PRE_CACHE, PRE_CACHE_URLS);
});

self.addEventListener('activate', (evt) => {
  // Look for any old caches that don't match our set and clear them out
  evt.waitUntil(
    caches
      .keys()
      .then((cacheNames) => cacheNames.filter((item) => !Object.values(CACHE_KEYS).includes(item)))
      .then((itemsToDelete) => Promise.all(itemsToDelete.map((item) => caches.delete(item))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (evt) => {
  const { hostname } = new URL(evt.request.url);

  // Check we don't want to ignore this host
  if (IGNORED_HOSTS.indexOf(hostname) >= 0) {
    return;
  }

  // Check we don't want to ignore this URL
  if (EXCLUDED_URLS.some((page) => evt.request.url.indexOf(page) > -1)) {
    return;
  }

  // No posts, ta
  if (evt.request.method === 'POST') {
    return;
  }

  evt.respondWith(
    caches.match(evt.request).then((cachedResponse) => {
      // Item found in cache so return
      if (cachedResponse) {
        return cachedResponse;
      }

      // Nothing found so load up the request from the network
      return caches.open(CACHE_KEYS.RUNTIME).then((cache) =>
        fetch(evt.request)
          .then((response) => {
            // If we're ignoring runtime caching on this host,
            // we only want to return the response
            if (RUNTIME_IGNORED_HOSTS.indexOf(hostname) > -1) {
              return response;
            }

            // Else, put the new response in cache and return it
            return cache.put(evt.request, response.clone()).then(() => response);
          })
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          .catch(() => {})
      );
    })
  );
});
