const CACHE = 'cercle-v17';
const ASSETS = [
  '/cercle-parole/',
  '/cercle-parole/index.html',
  '/cercle-parole/manifest.json',
  '/cercle-parole/icons/icon-192.png',
  '/cercle-parole/icons/icon-512.png',
  '/cercle-parole/icons/logo_cgexcel.jpg'
];

self.addEventListener('install', e => {
  // Pre-cache assets but do NOT skipWaiting — wait for page to trigger it
  // This allows the page to detect reg.waiting and show the update banner
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request)));
});

// Page sends SKIP_WAITING when user taps the update banner
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
