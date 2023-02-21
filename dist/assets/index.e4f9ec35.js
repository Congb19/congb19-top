import{j as X,k as ie,n as G,l as le,m as se,r as f,p as ue,q as D,s as ce,u as P,t as fe,v as L,e as Y}from"./index.393d7b17.js";function x(e){return le()?(se(e),!0):!1}const M=typeof window<"u",Z=e=>typeof e=="string",j=()=>{};function de(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const ee=e=>e();function ve(e=ee){const t=f(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...o)=>{t.value&&e(...o)}}}function me(e,t=!0){X()?ue(e):t?e():G(e)}function pe(e,t=!0){X()?ie(e):t?e():G(e)}function we(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:a=!1}=n;let o=null;const i=f(!1);function l(){o&&(clearInterval(o),o=null)}function u(){i.value=!1,l()}function d(){t<=0||(i.value=!0,a&&e(),l(),o=setInterval(e,P(t)))}if(r&&M&&d(),ce(t)){const v=D(t,()=>{r&&M&&d()});x(v)}return x(u),{isActive:i,pause:u,resume:d}}var C=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,he=(e,t)=>{var n={};for(var r in e)ye.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&C)for(var r of C(e))t.indexOf(r)<0&&ge.call(e,r)&&(n[r]=e[r]);return n};function _e(e,t,n={}){const r=n,{eventFilter:a=ee}=r,o=he(r,["eventFilter"]);return D(e,de(a,t),o)}var be=Object.defineProperty,Oe=Object.defineProperties,Se=Object.getOwnPropertyDescriptors,R=Object.getOwnPropertySymbols,te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$e=(e,t)=>{for(var n in t||(t={}))te.call(t,n)&&q(e,n,t[n]);if(R)for(var n of R(t))ne.call(t,n)&&q(e,n,t[n]);return e},Ee=(e,t)=>Oe(e,Se(t)),Fe=(e,t)=>{var n={};for(var r in e)te.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&R)for(var r of R(e))t.indexOf(r)<0&&ne.call(e,r)&&(n[r]=e[r]);return n};function Pe(e,t,n={}){const r=n,{eventFilter:a}=r,o=Fe(r,["eventFilter"]),{eventFilter:i,pause:l,resume:u,isActive:d}=ve(a);return{stop:_e(e,t,Ee($e({},o),{eventFilter:i})),pause:l,resume:u,isActive:d}}function T(e){var t;const n=P(e);return(t=n==null?void 0:n.$el)!=null?t:n}const $=M?window:void 0,N=M?window.document:void 0,xe=M?window.navigator:void 0;M&&window.location;function S(...e){let t,n,r,a;if(Z(e[0])?([n,r,a]=e,t=$):[t,n,r,a]=e,!t)return j;let o=j;const i=D(()=>T(t),u=>{o(),u&&(u.addEventListener(n,r,a),o=()=>{u.removeEventListener(n,r,a),o=j})},{immediate:!0,flush:"post"}),l=()=>{i(),o()};return x(l),l}function Ye({navigator:e=xe}={}){const t=["chargingchange","chargingtimechange","dischargingtimechange","levelchange"],n=e&&"getBattery"in e,r=f(!1),a=f(0),o=f(0),i=f(1);let l;function u(){r.value=this.charging,a.value=this.chargingTime||0,o.value=this.dischargingTime||0,i.value=this.level}return n&&e.getBattery().then(d=>{l=d,u.call(l);for(const v of t)S(l,v,u,{passive:!0})}),{isSupported:n,charging:r,chargingTime:a,dischargingTime:o,level:i}}function z(e,t={}){const{window:n=$}=t;let r;const a=f(!1),o=()=>{!n||(r||(r=n.matchMedia(e)),a.value=r.matches)};return me(()=>{o(),r&&("addEventListener"in r?r.addEventListener("change",o):r.addListener(o),x(()=>{"removeEventListener"in r?r.removeEventListener("change",o):r.removeListener(o)}))}),a}const I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A="__vueuse_ssr_handlers__";I[A]=I[A]||{};const Me=I[A];function De(e,t){return Me[e]||t}function je(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Re={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ze(e,t,n,r={}){var a;const{flush:o="pre",deep:i=!0,listenToStorageChanges:l=!0,writeDefaults:u=!0,shallow:d,window:v=$,eventFilter:b,onError:w=m=>{console.error(m)}}=r,s=(d?fe:f)(t);if(!n)try{n=De("getDefaultStorage",()=>{var m;return(m=$)==null?void 0:m.localStorage})()}catch(m){w(m)}if(!n)return s;const c=P(t),y=je(c),p=(a=r.serializer)!=null?a:Re[y],{pause:O,resume:g}=Pe(s,()=>h(s.value),{flush:o,deep:i,eventFilter:b});return v&&l&&S(v,"storage",E),E(),s;function h(m){try{m==null?n.removeItem(e):n.setItem(e,p.write(m))}catch(F){w(F)}}function _(m){if(!(m&&m.key!==e)){O();try{const F=m?m.newValue:n.getItem(e);return F==null?(u&&c!==null&&n.setItem(e,p.write(c)),c):typeof F!="string"?F:p.read(F)}catch(F){w(F)}finally{g()}}}function E(m){m&&m.key!==e||(s.value=_(m))}}const ke=[1,1.325,1.4,1.5,1.8,2,2.4,2.5,2.75,3,3.5,4];function et({window:e=$}={}){if(!e)return{pixelRatio:f(1)};const t=f(e.devicePixelRatio),n=()=>{t.value=e.devicePixelRatio};return S(e,"resize",n,{passive:!0}),ke.forEach(r=>{const a=z(`screen and (min-resolution: ${r}dppx)`),o=z(`screen and (max-resolution: ${r}dppx)`);D([a,o],n)}),{pixelRatio:t}}function re(e,t={}){const{immediate:n=!0,window:r=$}=t,a=f(!1);let o=null;function i(){!a.value||!r||(e(),o=r.requestAnimationFrame(i))}function l(){!a.value&&r&&(a.value=!0,i())}function u(){a.value=!1,o!=null&&r&&(r.cancelAnimationFrame(o),o=null)}return n&&l(),x(u),{isActive:a,pause:u,resume:l}}function tt(e){var t;const n=f(0);if(typeof performance>"u")return n;const r=(t=e==null?void 0:e.every)!=null?t:10;let a=performance.now(),o=0;return re(()=>{if(o+=1,o>=r){const i=performance.now(),l=i-a;n.value=Math.round(1e3/(l/o)),a=i,o=0}}),n}const W=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function nt(e,t={}){const{document:n=N,autoExit:r=!1}=t,a=e||(n==null?void 0:n.querySelector("html")),o=f(!1);let i=!1,l=W[0];if(!n)i=!1;else for(const y of W)if(y[1]in n){l=y,i=!0;break}const[u,d,v,,b]=l;async function w(){!i||(n!=null&&n[v]&&await n[d](),o.value=!1)}async function s(){if(!i)return;await w();const y=T(a);y&&(await y[u](),o.value=!0)}async function c(){o.value?await w():await s()}return n&&S(n,b,()=>{o.value=!!(n!=null&&n[v])},!1),r&&x(w),{isSupported:i,isFullscreen:o,enter:s,exit:w,toggle:c}}const Ie=["mousedown","mouseup","keydown","keyup"];function rt(e,t={}){const{events:n=Ie,document:r=N,initial:a=null}=t,o=f(a);return r&&n.forEach(i=>{S(r,i,l=>{typeof l.getModifierState=="function"&&(o.value=l.getModifierState(e))})}),o}const Ae={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function at(e={}){const{reactive:t=!1,target:n=$,aliasMap:r=Ae,passive:a=!0,onEventFired:o=j}=e,i=L(new Set),l={toJSON(){return{}},current:i},u=t?L(l):l,d=new Set;function v(s,c){s in u&&(t?u[s]=c:u[s].value=c)}function b(s,c){var y,p;const O=(y=s.key)==null?void 0:y.toLowerCase(),g=(p=s.code)==null?void 0:p.toLowerCase(),h=[g,O].filter(Boolean);g&&(c?i.add(s.code):i.delete(s.code));for(const _ of h)v(_,c);O==="meta"&&!c?(d.forEach(_=>{i.delete(_),v(_,!1)}),d.clear()):s.getModifierState("Meta")&&c&&[...i,...h].forEach(_=>d.add(_))}n&&(S(n,"keydown",s=>(b(s,!0),o(s)),{passive:a}),S(n,"keyup",s=>(b(s,!1),o(s)),{passive:a}));const w=new Proxy(u,{get(s,c,y){if(typeof c!="string")return Reflect.get(s,c,y);if(c=c.toLowerCase(),c in r&&(c=r[c]),!(c in u))if(/[+_-]/.test(c)){const O=c.split(/[+_-]/g).map(g=>g.trim());u[c]=Y(()=>O.every(g=>P(w[g])))}else u[c]=f(!1);const p=Reflect.get(s,c,y);return t?P(p):p}});return w}var B=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Ne=Object.prototype.propertyIsEnumerable,Le=(e,t)=>{var n={};for(var r in e)Te.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&B)for(var r of B(e))t.indexOf(r)<0&&Ne.call(e,r)&&(n[r]=e[r]);return n};function Ce(e,t,n={}){const r=n,{window:a=$}=r,o=Le(r,["window"]);let i;const l=a&&"MutationObserver"in a,u=()=>{i&&(i.disconnect(),i=void 0)},d=D(()=>T(e),b=>{u(),l&&a&&b&&(i=new MutationObserver(t),i.observe(b,o))},{immediate:!0}),v=()=>{u(),d()};return x(v),{isSupported:l,stop:v}}function qe(e={}){const{window:t=$}=e,n=t==null?void 0:t.navigator,r=Boolean(n&&"connection"in n),a=f(!0),o=f(!1),i=f(void 0),l=f(void 0),u=f(void 0),d=f(void 0),v=f(void 0),b=f(void 0),w=f("unknown"),s=r&&n.connection;function c(){!n||(a.value=n.onLine,i.value=a.value?void 0:Date.now(),l.value=a.value?Date.now():void 0,s&&(u.value=s.downlink,d.value=s.downlinkMax,b.value=s.effectiveType,v.value=s.rtt,o.value=s.saveData,w.value=s.type))}return t&&(S(t,"offline",()=>{a.value=!1,i.value=Date.now()}),S(t,"online",()=>{a.value=!0,l.value=Date.now()})),s&&S(s,"change",c,!1),c(),{isSupported:r,isOnline:a,saveData:o,offlineAt:i,onlineAt:l,downlink:u,downlinkMax:d,effectiveType:b,rtt:v,type:w}}var ze=Object.defineProperty,J=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Je=(e,t)=>{for(var n in t||(t={}))We.call(t,n)&&V(e,n,t[n]);if(J)for(var n of J(t))Be.call(t,n)&&V(e,n,t[n]);return e};function Ve(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,r=f(new Date),a=()=>r.value=new Date,o=n==="requestAnimationFrame"?re(a,{immediate:!0}):we(a,n,{immediate:!0});return t?Je({now:r},o):r}function ot(e={}){const{isOnline:t}=qe(e);return t}var K,U;M&&(window==null?void 0:window.navigator)&&((K=window==null?void 0:window.navigator)==null?void 0:K.platform)&&/iP(ad|hone|od)/.test((U=window==null?void 0:window.navigator)==null?void 0:U.platform);var Ke=Object.defineProperty,k=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,Q=(e,t,n)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ue=(e,t)=>{for(var n in t||(t={}))ae.call(t,n)&&Q(e,n,t[n]);if(k)for(var n of k(t))oe.call(t,n)&&Q(e,n,t[n]);return e},Qe=(e,t)=>{var n={};for(var r in e)ae.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&k)for(var r of k(e))t.indexOf(r)<0&&oe.call(e,r)&&(n[r]=e[r]);return n};const H=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:1/0,value:31536e6,name:"year"}],He={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`},Xe=e=>e.toISOString().slice(0,10);function it(e,t={}){const{controls:n=!1,max:r,updateInterval:a=3e4,messages:o=He,fullDateFormatter:i=Xe}=t,{abs:l,round:u}=Math,d=Ve({interval:a,controls:!0}),{now:v}=d,b=Qe(d,["now"]);function w(p,O){var g;const h=+O-+p,_=l(h);if(_<6e4)return o.justNow;if(typeof r=="number"&&_>r)return i(new Date(p));if(typeof r=="string"){const E=(g=H.find(m=>m.name===r))==null?void 0:g.max;if(E&&_>E)return i(new Date(p))}for(const E of H)if(_<E.max)return c(h,E)}function s(p,O,g){const h=o[p];return typeof h=="function"?h(O,g):h.replace("{0}",O.toString())}function c(p,O){const g=u(l(p)/O.value),h=p>0,_=s(O.name,g,h);return s(h?"past":"future",_,h)}const y=Y(()=>w(new Date(P(e)),P(v.value)));return n?Ue({timeAgo:y},b):y}function lt(e=null,t={}){var n,r;const{document:a=N,observe:o=!1,titleTemplate:i="%s"}=t,l=f((n=e!=null?e:a==null?void 0:a.title)!=null?n:null);return D(l,(u,d)=>{Z(u)&&u!==d&&a&&(a.title=i.replace("%s",u))},{immediate:!0}),o&&a&&Ce((r=a.head)==null?void 0:r.querySelector("title"),()=>{a&&a.title!==l.value&&(l.value=i.replace("%s",a.title))},{childList:!0}),l}function st({window:e=$,initialWidth:t=1/0,initialHeight:n=1/0}={}){const r=f(t),a=f(n),o=()=>{e&&(r.value=e.innerWidth,a.value=e.innerHeight)};return o(),pe(o),S("resize",o,{passive:!0}),{width:r,height:a}}export{Ze as a,it as b,rt as c,at as d,ot as e,Ye as f,tt as g,st as h,et as i,nt as j,lt as u};
