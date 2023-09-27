self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([...caches.keys().then(names => names.map(name => caches.delete(name))), self.skipWaiting()])
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
})
