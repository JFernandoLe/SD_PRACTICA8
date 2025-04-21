self.addEventListener('install', event => {
    console.log('SW instalado');
    event.waitUntil(
      caches.open('mi-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/js/script.js',
          '/css/normalize.css',
          '/css/styles.css',
          '/img/dados.jpg',
          '/img/dice.jpg',
          '/img/estadistica.png',
          '/img/medico.jpg'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(resp => {
        return resp || fetch(event.request);
      })
    );
  });
  