/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3f500eb98ac5d8ce12f79aa27a644952"
  },
  {
    "url": "api/index.html",
    "revision": "ccf7feb010df2f5775ba5d70650b2f09"
  },
  {
    "url": "api/rules.html",
    "revision": "5eafe51026db836f516bda385cf8929d"
  },
  {
    "url": "assets/css/0.styles.04d4552c.css",
    "revision": "98ed9143b05f0c73b5934e85aa61e9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d2d2c612.js",
    "revision": "6e6e7bfe03d77c548726592e6c9eadef"
  },
  {
    "url": "assets/js/11.4f6fdf40.js",
    "revision": "3c09d920c45846938fdefef6ed4ad3c2"
  },
  {
    "url": "assets/js/12.169b7c3f.js",
    "revision": "239b26bad8488fb5ed549d86a58c5027"
  },
  {
    "url": "assets/js/13.5a19c9e7.js",
    "revision": "4a0a46f4d252a7ca4fac5d6ba3b95d9e"
  },
  {
    "url": "assets/js/14.1078657a.js",
    "revision": "54a78289277dd6755e295da0b8623b9f"
  },
  {
    "url": "assets/js/15.df313b1c.js",
    "revision": "3e8225f346e72d6172767085b9b5d23d"
  },
  {
    "url": "assets/js/16.e89f639f.js",
    "revision": "bc03612c1bdf34046cd84375342d0a3d"
  },
  {
    "url": "assets/js/17.ec764601.js",
    "revision": "9cfdea14498709ad4001d1ad1a65d857"
  },
  {
    "url": "assets/js/18.7bfa21ba.js",
    "revision": "f63b327636e5c9a6ce1a8f8bce508f3b"
  },
  {
    "url": "assets/js/19.0ee3adc7.js",
    "revision": "71163feaf9682e0efe32c1750dfc37d7"
  },
  {
    "url": "assets/js/2.96ca9666.js",
    "revision": "9f21e8b2da35907877e9754422236f2f"
  },
  {
    "url": "assets/js/20.a60eacdd.js",
    "revision": "bfa2e9b4fb95088c6986bfb11da9758c"
  },
  {
    "url": "assets/js/21.e1e0cdf7.js",
    "revision": "4daca80998f397d6fb1d8ded2a5a3c4c"
  },
  {
    "url": "assets/js/22.9965cf65.js",
    "revision": "77efb8c2893c3d66544e3105d140d8fd"
  },
  {
    "url": "assets/js/23.7f20ac97.js",
    "revision": "ceab9b740155a2e07f4dd35c4ddab66a"
  },
  {
    "url": "assets/js/24.14f29cba.js",
    "revision": "b7cadb9ec3cf27d47ec3a53ea4a2ef6a"
  },
  {
    "url": "assets/js/25.0447da9a.js",
    "revision": "0b6a942e6005352915cfd4268e18b469"
  },
  {
    "url": "assets/js/26.ff747c2b.js",
    "revision": "5870b60a8c0d8527364f0012832d21cd"
  },
  {
    "url": "assets/js/27.66247cad.js",
    "revision": "9d83430a28308afeb8539641c0a668d7"
  },
  {
    "url": "assets/js/28.81152090.js",
    "revision": "57d2d0d8c0f45e971bb8f686e6bc1325"
  },
  {
    "url": "assets/js/29.3f4207e1.js",
    "revision": "1a7551bb4f5cfc9abd2d42850c773c8e"
  },
  {
    "url": "assets/js/3.2d7f0220.js",
    "revision": "1ad2b34c62b0a69a4c8e143b5322872e"
  },
  {
    "url": "assets/js/30.a4614375.js",
    "revision": "762ca9c328603d44b9abe3ee9f17835d"
  },
  {
    "url": "assets/js/31.dacfc63f.js",
    "revision": "c835d037fcde41c37d17bc31569dc789"
  },
  {
    "url": "assets/js/32.46e4c323.js",
    "revision": "75fc8b1f7c1d4716f25642d7e3712fb8"
  },
  {
    "url": "assets/js/33.ff6a56d2.js",
    "revision": "0ea9f7109a9858f3da8711e9a7cc37bd"
  },
  {
    "url": "assets/js/4.a20bbc43.js",
    "revision": "e54fd456ed4aeffdf29a4cf31c6450a1"
  },
  {
    "url": "assets/js/5.f2e0fe70.js",
    "revision": "37d1ca18f0411b24c97be66b2ce2a606"
  },
  {
    "url": "assets/js/6.3f385874.js",
    "revision": "a5fc1550dc2f1b883e6e45ac1d8023b2"
  },
  {
    "url": "assets/js/7.8cf753e8.js",
    "revision": "9f2c560f1fe86af4da75d0a26d14d2fa"
  },
  {
    "url": "assets/js/8.6f674d37.js",
    "revision": "873e73c4213aa4dc1e46a1b59a840e1e"
  },
  {
    "url": "assets/js/9.f86284f8.js",
    "revision": "020a6734a13fa0975661b4ed108e7349"
  },
  {
    "url": "assets/js/app.8616bafc.js",
    "revision": "1e71b4e8e400e68b0f1169d00c0cded0"
  },
  {
    "url": "configuration.html",
    "revision": "f5573f87d057f31a93f668a925033546"
  },
  {
    "url": "examples/backend.html",
    "revision": "73a5c50a83494f56a5ec353f1b9cebf1"
  },
  {
    "url": "examples/i18n.html",
    "revision": "4e391649dba8406bf1dff2116b1bf01e"
  },
  {
    "url": "examples/index.html",
    "revision": "6e73d2299d925b9bd94c9b58c1164b2d"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "663f2c95226e1579cb4941831df81ad5"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "f910c7abca398a216547dce102f5ab41"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "37e39a8c2008ff914fa8c9272926354c"
  },
  {
    "url": "guide/a11y.html",
    "revision": "6bed11d73ad36c1889e8a5522b6eaca8"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "b40c5ab073b35798945b649b71c131f1"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "71c40dea5a839e6377f21afccf4e00ad"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "1febacf2d03b4e94b92e136c3bd4c246"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "c3c18fd73a56d0a8f3fef85398d91fd5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1d39759c19e4e689d1ae57d5db0954cb"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "32080768b9c750121231df2379b9932d"
  },
  {
    "url": "guide/index.html",
    "revision": "d06422c573b9bada41fdae5c0ac7e78d"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "d3fd9c58903ac5095a695637d7772748"
  },
  {
    "url": "guide/localization.html",
    "revision": "ba6bb2ea03853fe958cfef400e07903c"
  },
  {
    "url": "guide/styling.html",
    "revision": "1885b98d1073cfb8f858d8a1773104af"
  },
  {
    "url": "guide/testing.html",
    "revision": "5b3f0c665b4d5294f4aa97ddfee8aa5b"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "24e68bb8d1559a92f66ab5a24b6c3a2d"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "533f9cfc2e0d4f511992220425f618a6"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "12c08a609d54c3cc2ef198eca2514ec7"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
