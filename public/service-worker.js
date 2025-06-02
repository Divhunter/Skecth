const CACHE_NAME = 'sketchview-cache-v3';

// Lors de l'installation du service worker, nous allons charger le fichier asset-manifest.json pour récupérer les chemins des fichiers générés avec des hachages.
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install');
  event.waitUntil(
    fetch('/asset-manifest.json')  // Charge le fichier asset-manifest.json généré par le build
      .then((response) => response.json())  // Parse le contenu du fichier JSON
      .then((manifest) => {
        // Utilise les chemins dynamiques récupérés depuis le manifest pour mettre en cache les fichiers nécessaires
        const filesToCache = [
          '/',
          '/index.html',
          manifest.files['main.js'],  // Le fichier JS avec le hachage dynamique
          //manifest.files['main.js.map'],  // Le fichier .map du JS avec le hachage dynamique
          manifest.files['main.css'],  // Le fichier CSS avec le hachage dynamique
          //manifest.files['main.css.map'],  // Le fichier .map du CSS avec le hachage dynamique

          // Ajoutez ici d'autres ressources que vous souhaitez mettre en cache
          'http://localhost:3000/assets/fonts/Michroma-Regular.woff2',
          'http://localhost:3000/assets/fonts/OpenSans-VariableFont_wdth,wght.woff2',
          'http://localhost:3000/assets/fonts/Raleway-Light.woff2',
          'http://localhost:3000/assets/fonts/Raleway-Medium.woff2',
          'http://localhost:3000/assets/fonts/Raleway-Regular.woff2',
          'http://localhost:3000/assets/fonts/Raleway-SemiBold.woff2',
          'http://localhost:3000/assets/fonts/Roboto-ExtraBold.woff2',

          'http://localhost:3000/assets/pictures/contact1.png',
          'http://localhost:3000/assets/pictures/contact2.png',
          'http://localhost:3000/assets/pictures/contact3.png',
          'http://localhost:3000/assets/pictures/Home1.png',
          'http://localhost:3000/assets/pictures/Home2.png',
          'http://localhost:3000/assets/pictures/Home3.png',
          'http://localhost:3000/assets/pictures/projet1.png',
          'http://localhost:3000/assets/pictures/projet2.png',
          'http://localhost:3000/assets/pictures/projet3.png',
          'http://localhost:3000/assets/pictures/plume.png',
          'http://localhost:3000/assets/pictures/appel1.png',
          'http://localhost:3000/assets/pictures/appel2.png',
          'http://localhost:3000/assets/pictures/appel3.png',
          'http://localhost:3000/assets/picturesmail1.png',
          'http://localhost:3000/assets/pictures/mail2.png',
          'http://localhost:3000/assets/pictures/mail3.png',
          'http://localhost:3000/assets/logos/sketchview-logo.png',
          'http://localhost:3000/assets/logos/sketchview-logo-full.png',
          'http://localhost:3000/assets/banners/dessin.jpg',
          'http://localhost:3000/assets/banners/images.jpg',
          'http://localhost:3000/assets/banners/PIC.jpg',
          'http://localhost:3000/assets/banners/Video.jpg'
        ];

        // Mise en cache des fichiers
        return caches.open(CACHE_NAME).then((cache) => {
          console.log('[Service Worker] Caching files');
          return cache.addAll(filesToCache);
        });
      })
  );
});

// Activation & nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activate');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();  // Permet au service worker de prendre immédiatement le contrôle
});

// Gestion des requêtes FETCH
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isDev = self.location.hostname === 'localhost';

  // Évite le cache en mode développement
  if (isDev) return;

  // Gestion des polices Google
  if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        }).catch(() => cache.match(event.request));  // Retourne la ressource du cache si échec du réseau
      })
    );
    return;
  }

  // Mise en cache optimisée
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).then((response) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    }).catch(() => {
      return caches.match('/offline.html');  // Affiche une page d'erreur si tout échoue
    })
  );
});
