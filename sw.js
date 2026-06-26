const CACHE = 'cercle-v10';
const ASSETS = [
  '/cercle-parole/',
  '/cercle-parole/index.html',
  '/cercle-parole/manifest.json',
  '/cercle-parole/icons/icon-192.png',
  '/cercle-parole/icons/icon-512.png',
  '/cercle-parole/icons/logo_cgexcel.jpg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});
