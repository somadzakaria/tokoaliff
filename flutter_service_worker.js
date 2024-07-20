'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5da26579bbe1a7b06649acb880a0a558",
".git/config": "14f992d815285f4b1927dae7bfec634f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "575f503309807da53e0822b6acb2c302",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7edd35c4d92cbfb373401cd21898ab60",
".git/logs/refs/heads/master": "7edd35c4d92cbfb373401cd21898ab60",
".git/logs/refs/remotes/origin/master": "4c1e2c2909b1d9018007b4ca555b9ace",
".git/objects/00/95b99cc9a632866b0e941e758aa27720d5b3f8": "4047e2d17688a8587c16c7d03163a394",
".git/objects/04/5933951893edb88f7b4fe772d7c914d60016d8": "61d6c20fb0b2c4b6b83969c345b5372a",
".git/objects/04/78a039829f4736e0976e1eaeda28a514bb02fe": "edff2d070e347ec6a7a41ac1e7612659",
".git/objects/06/96e046e03cb6f2b36772d975a4fcba0c7d3b33": "fdb6cff99f4352de05a1a26a38faa8f0",
".git/objects/09/dd4857e9f23fdc5870c4504ba8eb5b633fc449": "2bb3fb13bd1f94447d2eec2c9dce8694",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/19/1861df1ab72b2869856b352c19aa66d9acbd88": "8ed42acea63f57d64b23b9d25f7e94be",
".git/objects/1a/fc72eeefb641c2f020470a89837c2174fcafd5": "95e37c911bb342f128f30e2253ccf53b",
".git/objects/2c/44ac1683364c1833c977a05b2e3487addc3b93": "b5a53bada454ff8d0d2a8039b86fdbed",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/ad00473e8a27259a0348b19747be8c4a8de35f": "6307409be3e4c8c8c8f6460904c2cfc3",
".git/objects/3e/bf174096c170fbd7372dc3119865f9a29e90aa": "c1fd2286d60abf62c824bd413611e9bc",
".git/objects/3f/b093a13fb268c1bc04b869d10757b80ceebf20": "822049ed321dcb201dd74c637c3843d1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/441b791a6d41d082913c985f84b9e102f3c55e": "e9f90c67a669ec5338c657e6dc540b94",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/eb0abfa4bcf7fd28084aed8dc0d29a8e7fb610": "9dad57fcb9d1e4a1e324a42bc8a0254f",
".git/objects/50/8cb42013b3cecf070b21a376b709e5a0477668": "484dacd5e8f1014abcd763ca5141aaba",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/cf5d8fe121ded75182419b54d64c5b811ecfe6": "894473af8decdefb25d0990d49d2b58c",
".git/objects/5f/2b5c58d244e496516758e08610cf6c6f8fd779": "19e3406c7bfebd5dd734de3cfdd6ab18",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/20786e5c81d77e30586875a1e9ac62e8a2c860": "92b5ae945f3ff943d316498b218c1cbd",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/2b19ae7f865d86ef3506d42bd637ac446854b5": "6d1e4a61de5b424968b13244f8893de9",
".git/objects/77/d145bfc239842a853aaa9043bfdb457cc91656": "1d1a3dbef218ca33b118f43d54a010f1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/80/fa704a8a37650487a457034a687eadd4e4087b": "3aba9038111c0dbcd9df6f916f990fc0",
".git/objects/83/62187e3c6cdf3925673022e75bded689f7e89b": "24b073146c306a1b97be0de77f2fdc95",
".git/objects/85/6e64b068daea19abcc77e1f0416c3cbfea96ce": "23a513806856858f172a6993961c7192",
".git/objects/86/88414db7d6e732b006d7294d13c48a596a6590": "b82bef9e5eba0872254a24145f87fcba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ae3c8aeffcedee15859bbcf7d1871374e20431": "d2e302fc3a463cec585cab019a2168d8",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/9e/87233f2b9c49c5135dc3228c4df3e9c025773d": "5dfdf3140bfbcb329176dac483439931",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/9b05e1b9a934f150b234e84aceb1240a4cac82": "b0f98183e5c7cc3160b1d90707251b84",
".git/objects/a9/cc58994c20265099e2bed669f45f2ee802fd20": "e00793eac0b4f79f872bd79ddea30537",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/e8e50fd1bc36136a9918c6613ddfd9bf2aa6e3": "90f7adcde34248818c0c4d25be013635",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/9bf25ab5fb2c516461f993950375d2bf45f6e3": "afee3ce519f47309d076fa94d7671320",
".git/objects/c7/8107ccc768ae7b82b3b4be57b6db3d6fd2bc99": "583fd0d5ce8674ecde67e86e25220e1c",
".git/objects/c7/ef4142b063d34e7e281e98a2737cb48a5a0f40": "f4b4ff473e2458b7dbc5c5fdd694f3b6",
".git/objects/cd/f0db1a53180d666744cada17a2d95022206567": "b3e2b2ffe5bb4a42260c43dda9f2abea",
".git/objects/ce/23f464c1a0f4f116ad442ea9354f55a915cec7": "6d9ab2de9fb98847bd51d3b6e2be6f40",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/84124274ded50502441df049d16b7bc4260c00": "84019f04cb0873495b4d2d73f744e125",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/18cd702411c3c0c34e06dae99fb6068cc1d46d": "19c91b76cc69552df5d8a8f5cdcc8053",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b28cc7e99c00c5711557c01e8d7f1f303216cb": "825bf797065a2e99112f3b2375629d8e",
".git/objects/fb/f975b346b4b4833cccafac27b2501f14bf9f7c": "0a71e80dd512f0e7a2b03ca4b1cfcd97",
".git/objects/ff/cdb941d242ae63b65fb1cbb10cd7add9bd39c3": "e4d0b847c074110104742fc5e5248bfc",
".git/refs/heads/master": "6fe9621de5f211c9f8ddcfc0d0a50900",
".git/refs/remotes/origin/master": "6fe9621de5f211c9f8ddcfc0d0a50900",
"assets/AssetManifest.json": "4474f8c5380a71b7bc583a501c3546cb",
"assets/assets/images/bannerlogo.png": "66c1f098b6a7e71cc6a39f79c4bb457b",
"assets/assets/images/icondrink.png": "fcd1beb31b352b4e2cfa2155e5eceace",
"assets/assets/images/iconfood.png": "a405db52aa1adfe6b443e13a8ef0720b",
"assets/assets/images/iconsnack.png": "88b671b71d8c217603aa3bb043f4f0bc",
"assets/assets/images/instagram.png": "fde0c2901ca7340aad5fe6c4452e1b9c",
"assets/assets/images/logohorizontal.png": "59a4548b3206672fef29878de11adb03",
"assets/assets/images/logoonly.png": "87de710281dd8a09c13bd71d61b6676a",
"assets/assets/images/logotokoalif.png": "df11267e498ec23251b0eeb09ea273ec",
"assets/assets/images/logowhite.png": "a4c2dd501868de590279b4d5308a6884",
"assets/assets/images/onappstore.png": "4518457e2f704b1d6f03238d8232eece",
"assets/assets/images/onplaystore.png": "69ea6879e876b15dce248600dc0ac0d9",
"assets/assets/images/produk.jpg": "740c61a3aa0e22584a0bf7614f61f5e6",
"assets/assets/images/produk.png": "b851b2031b5019d3c1d97b1aee861333",
"assets/assets/images/tiktok.png": "5ed1e70ad6077c4cf9c9c30b03ddb54a",
"assets/assets/images/whatsapp.png": "8b955b008aa9845c138751939e1d24f5",
"assets/assets/images/whatssappicon.png": "bf05f7e1b86458375301b1acfe8df166",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "fdb34c713b99bb83f71d610d42beb68a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8fcc72bdf84d6881c77d6a6960533ef5",
"/": "8fcc72bdf84d6881c77d6a6960533ef5",
"main.dart.js": "5dbe0d5e866154c44a374ec2af2875ad",
"manifest.json": "68a32cff53b23e1930ff334224d4d365",
"version.json": "9ce8b75347a8af0e431dea30455571e0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
