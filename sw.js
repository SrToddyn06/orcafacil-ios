// Service worker do OrçaFácil Pro: guarda o app no aparelho pra abrir sem internet.
// Ao publicar uma versão nova, mude o número abaixo pra forçar a atualização.
const CACHE = 'orcafacil-v1.02';

const ARQUIVOS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/index-Bh-avPuA.js',
  './assets/index-DB9dOJsU.css',
  './assets/html2canvas.esm-QH1iLAAe.js',
  './assets/purify.es-DedTAGkB.js',
  './assets/index.es-CHY1npkq.js',
  './assets/web-kqAaL5_K.js',
  './assets/web-DLB4zVrW.js',
  './assets/web-Cf2EzDSG.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((r) =>
      r || fetch(e.request).catch(() => caches.match('./index.html'))
    )
  );
});
