import{d as e,c as t,a as n,w as o,F as a,r as s,o as r,b as l,e as c,f as p,p as u,g as i,h as m,i as d,j as v}from"./vendor.69f45896.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const r=new URL(e,o);if(self[t].moduleMap[r])return n(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),a(c)},onload(){n(self[t].moduleMap[r]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");var f=e({name:"App",components:{}});const b={id:"nav"},h=l(" Home");f.render=function(e,l,c,p,u,i){const m=s("router-link"),d=s("router-view");return r(),t(a,null,[n("div",b,[n(m,{to:"/"},{default:o((()=>[h])),_:1})]),n(d)],64)};var g=e({name:"HelloWorld",props:{msg:{type:String,required:!1}},setup:()=>({count:c(0)})});const w=p();u("data-v-911eb2ca");const j=n("img",{alt:"logo",width:"200",src:"/assets/klee.9b3e8b2b.jpeg"},null,-1),_=n("h1",null,"你在烦恼什么呢",-1),L=n("h2",null,"这里是congb19的小站！大家要天天开心",-1),R=n("div",{class:"beian"},[n("a",{href:"http://beian.miit.gov.cn"},"浙ICP备2021020364号-1")],-1);i();const U=w(((e,n,o,s,l,c)=>(r(),t(a,null,[j,_,L,R],64))));g.render=U,g.__scopeId="data-v-911eb2ca";const y={},M=n("div",null,"123",-1),$=n("canvas",{id:"canvas"},null,-1);y.render=function(e,n,o,s,l,c){return r(),t(a,null,[M,$],64)};const k=[{path:"/",component:g},{path:"/about",component:{template:"<div>About page</div>"}},{path:"/game",component:y}],F=m({history:d(),routes:k}),O=v(f);O.use(F),O.mount("#app");
