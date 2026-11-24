// Kitaplığım moved to /Bitigapp/: retire the old service worker and send open pages to the new address.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({type: 'window'})) c.navigate('/Bitigapp/');
})()));
