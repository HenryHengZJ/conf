"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","f6a74553ff24997aadcd757d95ea9a4e"],["static/js/main.a7be5bf8.js","c4ac2f9c0815743f7be38c9e5355fa4b"],["static/media/Larissa.06b8acf3.jpg","06b8acf3196e5863a64a5e2ae7c802bd"],["static/media/Marcelo.59e6a45b.jpeg","59e6a45b7f22e4d5e966593f6e744773"],["static/media/Maria.c8fe41f0.jpeg","c8fe41f07ebb3cf80e1c781b5a089503"],["static/media/Nicholas.5b56b883.jpg","5b56b883722daf25b92d778edc87ee91"],["static/media/brunoDahora.583fb237.jpg","583fb2372281c9d5e8a86ce31ca1e4b0"],["static/media/codamos.037a0bf7.jpg","037a0bf79aa76b69adb6306dc59d5776"],["static/media/dne.e321c712.svg","e321c7123077643a52869d5b4b17786b"],["static/media/ebanxLogo.7556fc13.svg","7556fc135ca47a4ac061687c493a42a3"],["static/media/geekhunter.c0604099.jpg","c06040999a28de5ec8545f6c96a67b27"],["static/media/getninjas.d25b4d38.svg","d25b4d388cb6715ad5c27a0506ce4893"],["static/media/globo.176c7bab.jpg","176c7bab4052cfe68f715c0555f4f6ec"],["static/media/greenmile.3b787abb.jpg","3b787abb8cd43996b7c498f9b9d7a5ef"],["static/media/guilhermeJabur.f220d643.jpg","f220d643c19533010b9a99eb64cab081"],["static/media/guilhermeVarandas.8577d230.jpg","8577d2306f98517886a967328b1fe2c5"],["static/media/hugoBessa.c477b9f3.jpg","c477b9f3c5a1aa8bbaded67a09e026e5"],["static/media/iclinic.5658015c.png","5658015cbc9f5e8a10113eb22e77379f"],["static/media/infoqbrasil.a647cb48.png","a647cb48c19b2438d3147802cd5159e4"],["static/media/jsladies.7c3c42c6.png","7c3c42c673ef1d4851c0a4bd7e6a2d3b"],["static/media/luizCamargo.a4aad684.png","a4aad684c016626c762b34440cd7f4d3"],["static/media/luizaLabs.accfa85d.jpg","accfa85d2a26d54de1113851abf49f29"],["static/media/macaco.5ba1cbd2.jpg","5ba1cbd2341460d9ecf7e13425de7665"],["static/media/maxmilhas.6d9c91a1.png","6d9c91a12dc75a3894c38c3695cdce4a"],["static/media/movile.cf1f9acb.jpg","cf1f9acb81c823967ac2924407e5e518"],["static/media/pedroNauck.0d8775b1.jpg","0d8775b111e872fce4cd7af2661a85ce"],["static/media/pipefy.8617bfcc.jpg","8617bfcc364762dd5b203f49000150e9"],["static/media/r7.fda90fd5.png","fda90fd53e3a5a4c009cf513b96d8aed"],["static/media/raphaelAmorim.b918d873.jpg","b918d87328bbb4d48529d5a2a6133323"],["static/media/raphaelPorto.ce135e2d.jpg","ce135e2d06ffde3c966530cf38845c21"],["static/media/reactconfbr2017.495081a1.jpg","495081a172a249fb3634fa5d8f993963"],["static/media/rivendel.3caf8de8.jpg","3caf8de84c15cb80cdce10247eff25c9"],["static/media/rung.5f6883ec.jpg","5f6883eca35d7051860b6dbe67a50a06"],["static/media/telnyx.adc10446.svg","adc104468e7b2f8ee1b1e4240d6305a2"],["static/media/trainingcenter.d503922a.jpg","d503922a5590738c2c2adbe1a7f5bda3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});