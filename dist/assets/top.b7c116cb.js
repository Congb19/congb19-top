import{d as y,r as u,e as d,f as _,g as E,_ as T,a as t,h as F,i as e,w as n,o as l,c as R,K as $,b as p}from"./index.8c29382c.js";import{u as x}from"./index.fa8b2a20.js";import{u as B}from"./use-os-theme.e0cc81f8.js";const O=x();O.value="\u4F60\u5728\u70E6\u607C\u4EC0\u4E48\u5462";const r=B();let i=d(()=>r.value==="dark"?_:null),m=u(r.value==="dark");i=d(()=>m.value?_:null);const S=[{label:"\u{1F3E0}",key:"/top"},{label:"\u{1F3EA}",key:"/top/kbn"}],U=y({name:"top",components:{},setup(){let o=u(!1);return{menuOptions:S,active:o,theme:i,themeSwitch:m,handleRouteChange:c=>{E.push(c)}}}});const A={class:"cb-layout--top"},D=p(" \u6D59ICP\u59072021020364\u53F7-1 "),I=p("Dark");function K(o,s,c,N,V,z){const a=t("n-card"),h=t("n-menu"),f=t("router-view"),v=t("n-a"),b=t("n-el"),g=t("n-switch"),k=t("n-message-provider"),w=t("n-config-provider");return l(),F("div",A,[e(w,{theme:o.theme},{default:n(()=>[e(k,null,{default:n(()=>[e(a,{class:"cb-background"}),e(a,{class:"cb-head","content-style":"padding: 5px;"},{default:n(()=>[e(h,{class:"cb-menu","onUpdate:value":o.handleRouteChange,mode:"horizontal",options:o.menuOptions},null,8,["onUpdate:value","options"])]),_:1}),e(a,{class:"cb-content",bordered:!1,"content-style":"padding-bottom: 70px;"},{default:n(()=>[(l(),R($,null,[e(f)],1024))]),_:1}),e(a,{class:"cb-foot","content-style":"padding: 0;"},{default:n(()=>[e(v,{class:"cb-beian",href:"http://beian.miit.gov.cn"},{default:n(()=>[D]),_:1})]),_:1}),e(a,{class:"cb-darkswitch"},{default:n(()=>[e(b,{tag:"div"},{default:n(()=>[I]),_:1}),e(g,{value:o.themeSwitch,"onUpdate:value":s[0]||(s[0]=C=>o.themeSwitch=C)},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["theme"])])}const G=T(U,[["render",K],["__scopeId","data-v-6341c4b1"]]);export{G as default};
