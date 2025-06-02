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
          'https://www.sketchview.fr/assets/fonts/Michroma-Regular.woff2',
          'https://www.sketchview.fr/assets/fonts/OpenSans-VariableFont_wdth,wght.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-Light.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-Medium.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-Regular.woff2',
          'https://www.sketchview.fr/assets/fonts/Raleway-SemiBold.woff2',
          'https://www.sketchview.fr/assets/fonts/Roboto-ExtraBold.woff2',

          'https://www.sketchview.fr/assets/pictures/cubes.png',
          'https://www.sketchview.fr/assets/pictures/2br-logo-avis.png',
          'https://www.sketchview.fr/assets/pictures/2br-logo.png',
          'https://www.sketchview.fr/assets/pictures/auto-ecole-turbo-avis.png',
          'https://www.sketchview.fr/assets/pictures/auto-ecole-turbo.png',
          'https://www.sketchview.fr/assets/pictures/bcra-logo-avis.png',
          'https://www.sketchview.fr/assets/pictures/bcra-logo.png',
          'https://www.sketchview.fr/assets/pictures/contact.png',
          'https://www.sketchview.fr/assets/pictures/desktop.png',
          'https://www.sketchview.fr/assets/icons/double-arrow-down.png',
          'https://www.sketchview.fr/assets/pictures/footer-people-m1.png',
          'https://www.sketchview.fr/assets/pictures/footer-people.png',
          'https://www.sketchview.fr/assets/pictures/full-star.png',
          'https://www.sketchview.fr/assets/icons/hands.png',
          'https://www.sketchview.fr/assets/pictures/ideo.png',
          'https://www.sketchview.fr/assets/icons/illustration.png',
          'https://www.sketchview.fr/assets/pictures/keyboard0.png',
          'https://www.sketchview.fr/assets/pictures/keyboard1.png',
          'https://www.sketchview.fr/assets/pictures/keyboard2.png',
          'https://www.sketchview.fr/assets/pictures/leon-logo.png',
          'https://www.sketchview.fr/assets/pictures/letsTalk.png',
          'https://www.sketchview.fr/assets/brands/logo-icon.png',
          'https://www.sketchview.fr/assets/brands/logo-sketchview-error.png',
          'https://www.sketchview.fr/assets/brands/logo-sketchview.png',
          'https://www.sketchview.fr/assets/pictures/me.png',
          'https://www.sketchview.fr/assets/pictures/me2.png',
          'https://www.sketchview.fr/assets/pictures/mutuact-logo-avis.png',
          'https://www.sketchview.fr/assets/pictures/mutuact-logo.png',
          'https://www.sketchview.fr/assets/pictures/nature.png',
          'https://www.sketchview.fr/assets/pictures/nature2.png',
          'https://www.sketchview.fr/assets/pictures/next-logo.png',
          'https://www.sketchview.fr/assets/icons/pen.png',
          'https://www.sketchview.fr/assets/pictures/people.png',
          'https://www.sketchview.fr/assets/pictures/people2.png',
          'https://www.sketchview.fr/assets/icons/responsive.png',
          'https://www.sketchview.fr/assets/pictures/sapin.png',
          'https://www.sketchview.fr/assets/pictures/sapin2.png',
          'https://www.sketchview.fr/assets/icons/seo.png',
          'https://www.sketchview.fr/assets/pictures/signature.png',
          'https://www.sketchview.fr/assets/pictures/techno.png',
          'https://www.sketchview.fr/assets/pictures/sketchview-logo.png'
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
