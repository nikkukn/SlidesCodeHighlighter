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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ace.js",
    "revision": "6dfc19417feb43a154f2db8ae82a7013"
  },
  {
    "url": "index.css",
    "revision": "4bcb4d55e8c0e7fcced31ed23e68599f"
  },
  {
    "url": "index.html",
    "revision": "59873639205a35944bf1f813d3cddaf6"
  },
  {
    "url": "index.js",
    "revision": "0ca1f7d3e41c55329ec456fdb3566f75"
  },
  {
    "url": "jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "mode-text.js",
    "revision": "83d2fb76e83e27150c9b1bc87001459f"
  },
  {
    "url": "prettify-languages.js",
    "revision": "4672b108372b541c06bb707bab6c4f44"
  },
  {
    "url": "prettify.js",
    "revision": "c1bdf5dd18d1da399f8df8eee1f5bfd7"
  },
  {
    "url": "theme-chrome.js",
    "revision": "eb6b7b8e5d13d16573b94b69e73a33bc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
