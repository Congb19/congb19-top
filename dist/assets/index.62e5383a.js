import{d as e,c as t,a as o,w as n,F as a,r as s,o as r,b as l,e as c,f as u,p,g as i,h as m,i as d,j as v}from"./vendor.69f45896.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return o(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),a(c)},onload(){o(self[t].moduleMap[r]),a(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");var f=e({name:"App",components:{}});const b={id:"nav"},h=l(" Home "),g=l(" Game ");f.render=function(e,l,c,u,p,i){const m=s("router-link"),d=s("router-view");return r(),t(a,null,[o("div",b,[o(m,{to:"/"},{default:n((()=>[h])),_:1}),o(m,{to:"/game"},{default:n((()=>[g])),_:1})]),o(d)],64)};var w=e({name:"HelloWorld",props:{msg:{type:String,required:!1}},setup:()=>({count:c(0)})});const _=u();p("data-v-46933669");const j=o("img",{alt:"logo",width:"200",src:"/assets/klee.9b3e8b2b.jpeg"},null,-1),L=o("h1",null,"你在烦恼什么呢",-1),R=o("h2",null,"这里是congb19的小站！大家要天天开心",-1),U=o("div",{class:"beian"},[o("a",{href:"http://beian.miit.gov.cn"},"浙ICP备2021020364号-1")],-1);i();const y=_(((e,o,n,s,l,c)=>(r(),t(a,null,[j,L,R,U],64))));w.render=y,w.__scopeId="data-v-46933669";const M={},$=o("div",null,"123",-1),k=o("canvas",{id:"canvas"},null,-1);M.render=function(e,o,n,s,l,c){return r(),t(a,null,[$,k],64)};const F=[{path:"/",component:w},{path:"/about",component:{template:"<div>About page</div>"}},{path:"/game",component:M}],O=m({history:d(),routes:F}),A=v(f);A.use(O),A.mount("#app");
