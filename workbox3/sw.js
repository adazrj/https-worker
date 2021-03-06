// workbox 2.x 是将 workbox 核心内容放在 workbox-sw node_modules 包里维护的
// workbox 3.x 开始是将 workbox 核心 lib 放在 CDN 维护
// 当然也可以挪到自己的 CDN 维护
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded');
  workbox.core.setLogLevel('Yay! Workbox is loaded');
  workbox.routing.registerRoute(
	  new RegExp('.*\.html'),
	  workbox.strategies.staleWhileRevalidate({
	    // Use a custom cache name
	    cacheName: 'html-cache',
	  })
	);
  workbox.routing.registerRoute(
	  new RegExp('.*\.js'),
	  workbox.strategies.staleWhileRevalidate({
	    // Use a custom cache name
	    cacheName: 'js-cache',
	  })
	);
  workbox.routing.registerRoute(
	  // Cache CSS files
	  /.*\.css/,
	  // Use cache but update in the background ASAP
	  workbox.strategies.staleWhileRevalidate({
	    // Use a custom cache name
	    cacheName: 'css-cache',
	  })
	);

	workbox.routing.registerRoute(
	  // Cache image files
	  /.*\.(?:png|jpg|jpeg|svg|gif)/,
	  // Use the cache if it's available
	  workbox.strategies.cacheFirst({
	    // Use a custom cache name
	    cacheName: 'image-cache',
	    plugins: [
	      new workbox.expiration.Plugin({
	        // Cache only 20 images
	        maxEntries: 20,
	        // Cache for a maximum of a week
	        maxAgeSeconds: 7 * 24 * 60 * 60,
	      })
	    ],
	  })
	);
	// 展示所有的 log
	workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

	// 只展示 log, warning 和 error 类型的 log
	workbox.core.setLogLevel(workbox.core.LOG_LEVELS.log);

	// 只展示 warning 和 error 类型的 log
	workbox.core.setLogLevel(workbox.core.LOG_LEVELS.warn);

	// 只展示 error 类型的 log
	workbox.core.setLogLevel(workbox.core.LOG_LEVELS.error);

	// 啥 log 都没有，这个适用于线上生产环境
	workbox.core.setLogLevel(workbox.core.LOG_LEVELS.silent);


} else {
  console.log("Boo! Workbox didn't load");
}











