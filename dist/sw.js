if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>i(e,r),d={module:{uri:r},exports:l,require:o};s[r]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-8bc8eb74"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.4f9cb28e.js",revision:null},{url:"assets/index.9cc29ae9.js",revision:null},{url:"assets/index.a4a2a349.css",revision:null},{url:"assets/index.de3508dc.js",revision:null},{url:"assets/index.e18b3a79.css",revision:null},{url:"index.html",revision:"53947ece826d10db175cdba2b7b04753"},{url:"manifest.webmanifest",revision:"a82ddecbd9a1e00782795b73fa5d5a67"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/storybook/]}))}));
