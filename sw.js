const staticCacheName = "site-static-v1";
// const dynamicCacheName = "site-dynamic-v1";
const assests = [
  "/",
  "index.html",
  "js/script.js",
  "js/app.js",
  "css/style.css",
  "images/cbe018152347725.63362f541803f.png",
  "images/Logo.png",
  "images/loader-img.png",
  "images/phone.webp",
  "images/left.png",
  "images/right.png",
  "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
  "https://fonts.cdnfonts.com/css/cabinet-grotesk",
  "https://fonts.cdnfonts.com/s/85514/CabinetGrotesk-Regular.woff",
  " https://fonts.cdnfonts.com/s/85514/CabinetGrotesk-Bold.woff ",
  "https://unpkg.com/boxicons@2.1.4/fonts/boxicons.woff2 ",
  " https://fonts.cdnfonts.com/s/85514/CabinetGrotesk-Medium.woff",
  "https://fonts.cdnfonts.com/s/85514/CabinetGrotesk-Extrabold.woff",
];

// Install Service Worker
self.addEventListener("install", (evt) => {
  // console.log("service worker has been installed");
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assests);
    })
  );
});

// Activate Service Worker Event
self.addEventListener("activate", (evt) => {
  // console.log("service worker has been activated");
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

// Fetch Event
self.addEventListener("fetch", (evt) => {
  // console.log("fetch event", evt);
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
