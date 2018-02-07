// workbox 2.x 是将 workbox 核心内容放在 workbox-sw node_modules 包里维护的
// workbox 3.x 开始是将 workbox 核心 lib 放在 CDN 维护
// 当然也可以挪到自己的 CDN 维护
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js');

if (workbox) {
    console.log('Hello from sw.js');
   workbox.routing.registerRoute(
      new RegExp('.*\.js'),
      workbox.strategies.networkFirst()
   );
}
else {
    console.log("Workbox didn't loaded ");
}













