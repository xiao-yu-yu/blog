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
    "revision": "09437804dfe3bde5e856cd094717f786"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.73dc42e5.js",
    "revision": "30e828c146c3447f6cbf728cdd82e925"
  },
  {
    "url": "assets/js/10.f90154aa.js",
    "revision": "2d186e0b80e993bf73e697cd6f792bb4"
  },
  {
    "url": "assets/js/11.e8633219.js",
    "revision": "c6b1a8edcabf36b3249cd03c29f993dd"
  },
  {
    "url": "assets/js/12.033db9c6.js",
    "revision": "e47a2d221ec3e6b79cd24b408109446a"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.ea616527.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.fd6a517a.js",
    "revision": "9b90ef0f71190ca8f76b01c7fe6d870f"
  },
  {
    "url": "assets/js/16.172ea8bd.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.85e574f5.js",
    "revision": "679e09d1bee7f18523c034f6c3e7dbed"
  },
  {
    "url": "assets/js/18.e73ba14d.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
  },
  {
    "url": "assets/js/4.d94921b7.js",
    "revision": "6a9061b507f12ee2770b1f19b8e3d4da"
  },
  {
    "url": "assets/js/5.aafec39e.js",
    "revision": "1689296e32236e06547752a56f9265f6"
  },
  {
    "url": "assets/js/6.fcea16c6.js",
    "revision": "4719502381b5c3d6ac6a2e6d590b4322"
  },
  {
    "url": "assets/js/7.7fcc8b8f.js",
    "revision": "c38484adcb3f89dd39a62f70a7b1ea62"
  },
  {
    "url": "assets/js/8.8dfc7fd6.js",
    "revision": "09cca6c7b2202fa0a4d063836f72e2dd"
  },
  {
    "url": "assets/js/9.e8364819.js",
    "revision": "05c8a35278c075892025e2714a299d64"
  },
  {
    "url": "assets/js/app.ea11432a.js",
    "revision": "0ded2ba308cd72e46bc084f19e58eaa1"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.6ecfa24c.js",
    "revision": "0914943e5101085e2068a7393195effe"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "background.jpeg",
    "revision": "8c2c3dd47b043d2257bb2a79a5bf7f8a"
  },
  {
    "url": "categories/index.html",
    "revision": "5197a5e75d67709e129120c57b57fffe"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fec2c2390ec837c5ffccb02bfd6ed88a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "300e8ecec340522d3994d2c38c85787c"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "f474713153d50955550b27fe34b00a36"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "71918075d7ab21b232c6595cad7ff87f"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c0d9810ba85ec44e49da58949b8ed554"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "img/yourname.jpeg",
    "revision": "8c2c3dd47b043d2257bb2a79a5bf7f8a"
  },
  {
    "url": "index.html",
    "revision": "dc3b4ba027ba6fe2cc8e6a9a942434df"
  },
  {
    "url": "js/custom.js",
    "revision": "c7c897793b7e6041b6ed4a0876c4c189"
  },
  {
    "url": "tag/index.html",
    "revision": "63b6cc3e585a8641128c63edf9e2fb67"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2f9678a772d969d1222dc240a6955ea0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "94c0342aae053d20feb872b478d1a802"
  },
  {
    "url": "tags/js/index.html",
    "revision": "94fbe9414db0f146e0f3f1c3acc5ba54"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5c91c02151154d95022feee8dd62559a"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "afd8a10ecd66998b12380668cf919e53"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d7377e03f9815555330f1655cf1defc0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "bbedcfaa40e33b1f8ec0f008cc1b5d83"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "135f64edd612f11bf382231c984b5c90"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0a44ee321691ac376acb642ab717346b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f2a911c36aba9c686da9cd68f88ae631"
  },
  {
    "url": "timeline/index.html",
    "revision": "4299840db6b0a3193f3ba16f77686106"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9d9adc1fca15ecb5357d21be5df5d6a5"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a16f7290d9e921c3ed0db945ce6ebf27"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "890364126a352552f4c05634f34fd26b"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "adc9193bc3d00c3d9800c87ccec86021"
  },
  {
    "url": "生活分享/life.html",
    "revision": "85352e60058f4d2cf2e98a8322aa8ebb"
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
