if(!self.define){let i,e={};const l=(l,s)=>(l=new URL(l+".js",s).href,e[l]||new Promise((e=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=e,document.head.appendChild(i)}else i=l,importScripts(l),e()})).then((()=>{let i=e[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(s,n)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const u=i=>l(i,o),t={module:{uri:o},exports:r,require:u};e[o]=Promise.all(s.map((i=>t[i]||u(i)))).then((i=>(n(...i),r)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"test"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.08e07b0b.css",revision:null},{url:"/fonts/NotoSansEthiopic-Bold.9be733a6.ttf",revision:null},{url:"/fonts/NotoSansEthiopic-Regular.064d7674.ttf",revision:null},{url:"/fonts/NotoSansEthiopic-SemiBold.3171ea1c.ttf",revision:null},{url:"/img/burger-menu.bf64f7d5.svg",revision:null},{url:"/img/camera-roll.7a8d8c7a.svg",revision:null},{url:"/img/close.6238a5f8.svg",revision:null},{url:"/img/colored-logo.a0b5f87d.svg",revision:null},{url:"/img/dropdown.aaa5e12a.svg",revision:null},{url:"/img/edit-photo.b1ec7c6b.svg",revision:null},{url:"/img/minus-sign.9f3ca138.svg",revision:null},{url:"/img/plus-button-challenge.af6f304d.svg",revision:null},{url:"/img/plus-sign.9bb567cb.svg",revision:null},{url:"/img/profile.4d1bc86d.svg",revision:null},{url:"/img/whitelogo.68123ec6.svg",revision:null},{url:"/index.html",revision:"e5baf80cdd3205c1c57667f4ff727e64"},{url:"/js/app.98032bc2.js",revision:null},{url:"/js/chunk-vendors.09ba6c30.js",revision:null},{url:"/manifest.json",revision:"4dd2751dfa44c648270334e74aa5aa10"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
