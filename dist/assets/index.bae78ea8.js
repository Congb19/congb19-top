import{d as e,r as a,a as n,c as t,b as s,F as l,o,w as u,e as c,f as r,g as d,h as p,i,j as m,k as h,l as f,m as v,N as b,B as g,n as _,p as y,q as w,s as k,t as U,u as C,v as M,x as R,y as j,z as L,A as O,C as D,D as $,E as x,G as A,H as E,I as F,J as I,K as q,L as z,M as B,O as H}from"./vendor.b20e80be.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(n){const t=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((n,l)=>{const o=new URL(e,t);if(self[a].moduleMap[o])return n(self[a].moduleMap[o]);const u=new Blob([`import * as m from '${o}';`,`${a}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(u),onerror(){l(new Error(`Failed to import: ${e}`)),s(c)},onload(){n(self[a].moduleMap[o]),s(c)}});document.head.appendChild(c)})),self[a].moduleMap={}}}("/assets/");var P=e({name:"HelloWorld",props:{msg:{type:String,required:!1}},setup:()=>({count:a(0)})});const G=c("你在烦恼什么呢"),J=c("这里是Congb19的小站！大家要天天开心"),K=c("有烦恼请随时联系我："),N=c("linyc@congb19.com"),S=c("Congb19的博客"),T=c("这个网站不知道写点什么了，走过路过来点idea吧~~");P.render=function(e,a,c,r,d,p){const i=n("n-image"),m=n("n-h1"),h=n("n-h2"),f=n("n-h3"),v=n("n-a"),b=n("n-li"),g=n("n-p");return o(),t(l,null,[s(i,{alt:"logo",width:"200",src:"../src/assets/klee.jpeg"}),s(m,null,{default:u((()=>[G])),_:1}),s(h,null,{default:u((()=>[J])),_:1}),s(f,null,{default:u((()=>[K])),_:1}),s(b,null,{default:u((()=>[s(v,{href:"mailto:linyc@congb19.com"},{default:u((()=>[N])),_:1})])),_:1}),s(b,null,{default:u((()=>[s(v,{href:"https://blog.congb19.com"},{default:u((()=>[S])),_:1})])),_:1}),s(g,null,{default:u((()=>[T])),_:1})],64)};const W={},Q=s("div",null,"123",-1),V=s("canvas",{id:"canvas"},null,-1);W.render=function(e,a,n,s,u,c){return o(),t(l,null,[Q,V],64)};var X=e({setup:()=>({count:a(0)})});const Y=r()(((e,a,n,s,l,u)=>(o(),t("div",null,"diary"))));X.render=Y,X.__scopeId="data-v-92e4de12";const Z=[{path:"/",component:P},{path:"/game",component:W},{path:"/diary",component:X},{path:"/about",component:{template:"<div>About page</div>"}}],ee=d({history:p(),routes:Z}),ae=[{label:"你好！",key:"/"},{label:"日记本",key:"/diary"}];var ne=e({name:"App",components:{},setup(){let e=a(null),n=a(!1);i((()=>{})),m((()=>{console.log("updated,",n,e)}));return{menuOptions:ae,darkTheme:h,active:n,theme:e,handleRouteChange:e=>{ee.push(e)},handleDarkModeChange:n=>{e.value=n?h:a(null)}}}});const te=c("Dark: "),se=c(" 浙ICP备2021020364号-1 ");ne.render=function(e,a,l,c,r,d){const p=n("n-menu"),i=n("n-label"),m=n("n-switch"),h=n("n-card"),f=n("router-view"),v=n("n-a"),b=n("n-el"),g=n("n-config-provider");return o(),t(g,{theme:e.theme},{default:u((()=>[s(b,{tag:"div",class:"cb-view"},{default:u((()=>[s(h,{class:"cb-head","content-style":"padding: 5px;"},{default:u((()=>[s(p,{class:"cb-menu","onUpdate:value":e.handleRouteChange,mode:"horizontal",options:e.menuOptions},null,8,["onUpdate:value","options"]),s(h,{class:"cb-darkswitch"},{default:u((()=>[s(i,null,{default:u((()=>[te])),_:1}),s(m,{value:e.active,"onUpdate:value":[a[1]||(a[1]=a=>e.active=a),e.handleDarkModeChange]},null,8,["value","onUpdate:value"])])),_:1})])),_:1}),s(h,{class:"cb-content"},{default:u((()=>[s(f)])),_:1}),s(h,{class:"cb-foot"},{default:u((()=>[s(v,{href:"http://beian.miit.gov.cn"},{default:u((()=>[se])),_:1})])),_:1})])),_:1})])),_:1},8,["theme"])};const le=v({components:[b,g,h,_,y,w,k,U,C,M,R,j,L,O,D,$,x,A,E,F,I,q,z,B,H]}),oe=f(ne);oe.use(ee),oe.use(le),oe.mount("#app");
