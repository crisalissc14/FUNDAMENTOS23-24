// service-worker.js

const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '../css/style.css',  // Ruta relativa
    '../Img/logo.png',   // Ruta relativa
    '../Img/img-1.jpg',  // Ruta relativa
    '../Img/img-2.jpg',  // Ruta relativa
    '../Img/img-3.jpg',  // Ruta relativa
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
