import{c,d as m}from"./index.f232d0d2.js";import{d as D,h as F,S as i,O as h,u,i as e,w as t,C as a,o as r,Q as n,b as s,a4 as o}from"./index.9283a24b.js";const k=a("h3",null,"Holding:",-1),L=a("span",null,"\xA0",-1),v=a("h3",null,"Status:",-1),y=a("h3",null,"Help:",-1),x=s("\u6309\u952E\u5373\u53EF\u68C0\u6D4B\uFF1B"),A=s("fn\u952E\u4E00\u822C\u4E3A\u952E\u76D8\u5185\u7F6E\u529F\u80FD\u952E\uFF0C\u65E0\u6CD5\u68C0\u6D4B\uFF1B"),N=s("\u65E0\u6CD5\u963B\u6B62\u7CFB\u7EDF\u884C\u4E3A\u7684\u53D1\u751F\uFF0C\u4F8B\u5982 Alt/Command + Tab \u7B49\uFF1B"),K=s("\u65E0\u6CD5\u963B\u6B62\u90E8\u5206\u6D4F\u89C8\u5668\u884C\u4E3A\u7684\u53D1\u751F\uFF0C\u4F8B\u5982 Control/Command + W \u7B49\uFF1B"),S=s("Mac\u952E\u4F4D\u5BF9\u5E94\uFF1ACommand->meta, option->alt\u3002"),V=D({setup(g){const d=c("CapsLock"),_=c("NumLock"),f=c("ScrollLock"),C=["F1","F3","F5","F6","F7","F10","F11","F12","Tab"],p=m({passive:!1,reactive:!0,onEventFired(l){l.altKey&&l.preventDefault(),l.ctrlKey&&l.preventDefault(),C.indexOf(l.key)>=0&&l.preventDefault()}}),{current:B}=p;return(l,b)=>(r(),F(i,null,[k,L,(r(!0),F(i,null,h(u(B).values(),E=>(r(),F("span",null,n(E)+", ",1))),256)),v,e(u(o),null,{default:t(()=>[s(n(" CapsLock: "+u(d)),1)]),_:1}),e(u(o),null,{default:t(()=>[s(n(" NumLock: "+u(_)),1)]),_:1}),e(u(o),null,{default:t(()=>[s(n(" ScrollLock: "+u(f)),1)]),_:1}),y,e(u(o),null,{default:t(()=>[x]),_:1}),e(u(o),null,{default:t(()=>[A]),_:1}),e(u(o),null,{default:t(()=>[N]),_:1}),e(u(o),null,{default:t(()=>[K]),_:1}),e(u(o),null,{default:t(()=>[S]),_:1})],64))}});export{V as default};
