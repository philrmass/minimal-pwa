self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("minimal-cache").then(function(cache) {
      return cache.add("/minimal-pwa/index.html");
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
