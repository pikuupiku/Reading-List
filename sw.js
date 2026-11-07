self.addEventListener('fetch', function(event) {
    // This allows the app to fetch real-time updates from Firebase smoothly
    event.respondWith(fetch(event.request));
});
