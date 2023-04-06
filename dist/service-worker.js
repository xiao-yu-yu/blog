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
    "revision": "f8e5eee4f7b1bc47a78707c60b6b5409"
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
    "url": "assets/js/12.cfdc75b2.js",
    "revision": "1523ab2e9237d015413223374b0b45be"
  },
  {
    "url": "assets/js/13.09880795.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.8de5ed19.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.5a741e9e.js",
    "revision": "116203cd3252e03bc40acb4af122a2dc"
  },
  {
    "url": "assets/js/16.8c417bdc.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.4d1b88c1.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.285cfffd.js",
    "revision": "e5de0936c508067e90878438b7492fa1"
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
    "url": "assets/js/app.c985e971.js",
    "revision": "77144975db85cab358aa3a0c4ffbe013"
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
    "revision": "d773239eb2f5291df552cbc83e0b01c5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "fe1539fa991af8ae39848e84a8bb88ac"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "92b27eb0c9b11403e9f971354b101bc0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ac46c3074ff615ae22934329fcdfe6d7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "9ada22d5efffd9e770fcdb6734dc2214"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "d7fa6007540348e4b0ae30b46d9defcc"
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
    "revision": "f8fc1ad7e1654d8f49bd637432c5ee24"
  },
  {
    "url": "js/custom.js",
    "revision": "c7c897793b7e6041b6ed4a0876c4c189"
  },
  {
    "url": "tag/index.html",
    "revision": "6ff21ccfad632a25d4b567804eeceec3"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4635fe57f5816983107d7575e778ea13"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "878562fbc23340df49303a9044ef4ae7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e33f34e258cd72d850aa759718a4878e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "6ffcaf05b07ce0c579e04e9f2bd627e0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b3fdb4ba7e91f6d5cf1933733f89ea01"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "289084c21c4591501878109428af10c6"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "1c043dae2d096c3f89a927b2dae21b0a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8368a0112c248cbe213f16c81a1aa469"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "26cda6b01a8618432f73bd961f544d1f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "eee360f40d19e9e793891a3823b1cfbe"
  },
  {
    "url": "timeline/index.html",
    "revision": "873aae53f83db1a8fa43a8fed7c51966"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "8c3c25c8b7d39995d3ea4e7f2642be2a"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "05ed620d5c6132cc03e80664f32644f1"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "b42cb22a5c5ec50b29ca95b9ee261514"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "bacc2a56f8953eed074954c2d936a0c2"
  },
  {
    "url": "生活分享/life.html",
    "revision": "28330d58eb868cd01db212242757fb15"
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
