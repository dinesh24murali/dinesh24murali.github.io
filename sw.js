if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,t)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return n;default:return e(i)}}))).then((e=>{const i=t(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-22243acd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"https://dinesh24murali.github.io618.c6dd20d2566c56443791.bundle.js",revision:null},{url:"https://dinesh24murali.github.io618.c6dd20d2566c56443791.bundle.js.LICENSE.txt",revision:"6bbb3a8e7360a6a98672414629b231d4"},{url:"https://dinesh24murali.github.io618.c6dd20d2566c56443791.css",revision:null},{url:"https://dinesh24murali.github.iomain.c6dd20d2566c56443791.bundle.js",revision:null},{url:"https://dinesh24murali.github.iomain.c6dd20d2566c56443791.css",revision:null}],{}),e.cleanupOutdatedCaches()}));
