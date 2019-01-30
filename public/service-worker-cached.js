/* eslint-disable no-restricted-globals */
const cacheName = 'v1';

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        // Clearing old cache
        cacheNames.map(cache => cache !== cacheName && caches.delete(cache)),
      )),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(e.request)
        .then(res => res
          || fetch(e.request)
            .then((response) => {
              cache.put(e.request, response.clone());
              return response;
            }))),
  );
});
