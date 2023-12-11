const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/css/style.css',  // Ajusta la ruta si la carpeta 'css' está en la raíz del proyecto
    '/img/logo.png',   // Ajusta la ruta si la carpeta 'img' está en la raíz del proyecto
    '/img/img-1.jpg',  // Ajusta la ruta si la carpeta 'img' está en la raíz del proyecto
    '/img/img-2.jpg',  // Ajusta la ruta si la carpeta 'img' está en la raíz del proyecto
    '/img/img-3.jpg',  // Ajusta la ruta si la carpeta 'img' está en la raíz del proyecto
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
