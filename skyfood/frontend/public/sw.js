var doCache = false;
var CACHE_NAME = 'my-site-cache-v12';

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('opened cashe')
        fetch('asset-manifest.json')
          .then(response => response.json())
          .then(assets => {
            const urlsToCache = [
              '/',
              assets['main.js'],
              assets['static\\media\\logo.svg'],
              'https://fonts.googleapis.com/css?family=Roboto:300,400,500',]
            return cache.addAll(urlsToCache)
          })
          .then(() => console.log('cache succeeded!'))
      })
  )
  console.log('I\'am installed! ')
});

self.addEventListener('fetch', (event) => {
  console.log(event.request)
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        console.log(event.request)
        return response || fetch(event.request, {
          mode: 'no-cors',
          headers: { 'Access-Control-Allow-Origin': '*' }
        });
      })
    );
  }
});