import{d as c,a as m,o as n,c as g,w as i,b as v,_,r as a,v as x,g as y,h as w,af as h,ag as S}from"./index.0f0c22b3.js";const b=v(" wall item "),k=c({setup(l){return(s,t)=>{const o=m("n-card");return n(),g(o,{title:"asd",size:"medium"},{default:i(()=>[b]),_:1})}}});const I=_(k,[["__scopeId","data-v-a054dfcf"]]),B=c({setup(l){const s=a(null);console.log(s);let t=a(!1),o=x({x:0,y:0});const r=e=>{},d=e=>{t.value=!0,o={x:e.x,y:e.y},console.log("dragStart",o)},p=e=>{},u=e=>{t.value=!1,console.log("dragStop")},f=a({mousedown:d,mousemove:t.value?p:r,mouseup:u});return(e,C)=>(n(),y("div",h({ref_key:"self",ref:s,class:"cb-pool"},S(f.value)),[w(I)],16))}});const N=_(B,[["__scopeId","data-v-c263b163"]]);export{N as default};