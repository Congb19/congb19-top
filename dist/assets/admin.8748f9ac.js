import{A as V,d as f,r as v,B as p,N as D,o as k,h as _,C as h,D as H,R as x,E as M,e as B,f as T,F as z,k as U,v as G,a as J,c as b,w as i,u as t,i as a,G as y,H as Q,I as j,J as q,s as K,L as W,M as X,O as Y,P as Z,Q as ee,S as te,K as oe,T as ne,U as re,b as le,_ as se}from"./index.ce1c9435.js";import{a as ae}from"./index.cc1cc868.js";import{u as ie}from"./use-os-theme.036957ad.js";const ce=Object.assign(Object.assign({},V.props),{xScrollable:Boolean,onScroll:Function}),ue=f({name:"Scrollbar",props:ce,setup(){const e=v(null);return Object.assign(Object.assign({},{scrollTo:(...n)=>{var l;(l=e.value)===null||l===void 0||l.scrollTo(n[0],n[1])},scrollBy:(...n)=>{var l;(l=e.value)===null||l===void 0||l.scrollBy(n[0],n[1])}}),{scrollbarInstRef:e})},render(){return p(D,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),de=ue,he={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ke=h("path",{d:"M352 48H160a48 48 0 0 0-48 48v368l144-128l144 128V96a48 48 0 0 0-48-48z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),pe=[ke],fe=f({name:"BookmarkOutline",render:function(c,n){return k(),_("svg",he,pe)}}),_e={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},me=h("rect",{x:"48",y:"96",width:"416",height:"304",rx:"32.14",ry:"32.14",fill:"none",stroke:"currentColor","stroke-linejoin":"round","stroke-width":"32"},null,-1),we=h("path",{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M16 416h480",fill:"currentColor"},null,-1),ve=[me,we],E=f({name:"LaptopOutline",render:function(c,n){return k(),_("svg",_e,ve)}}),ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},xe=h("path",{d:"M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),be=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M368 336l80-80l-80-80"},null,-1),ye=h("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M176 256h256"},null,-1),Ce=[xe,be,ye],Me=f({name:"LogOutOutline",render:function(c,n){return k(),_("svg",ge,Ce)}}),Oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},$e=h("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Ne=[$e],Se=f({name:"MoonOutline",render:function(c,n){return k(),_("svg",Oe,Ne)}}),Be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Te=H('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>',9),je=[Te],Ee=f({name:"SunnyOutline",render:function(c,n){return k(),_("svg",Be,je)}}),P=(e,c)=>{let n=null;if(e)for(let l=0;l<e.length;l++){if(e[l].key==c)return n=e[l],n;if(e[l].children&&(e[l].children.length>0&&(n=P(e[l].children,c)),n))return n}return n},C=e=>()=>p(M,null,{default:()=>p(e)}),O=v(!1),L=[{name:"\u9996\u9875",label:p(x,{to:{path:"/admin"}},{default:()=>"\u9996\u9875\uFF01"}),key:"/admin",icon:C(E)},{name:"\u4EEA\u8868\u76D8",label:p(x,{to:{path:"/admin/dashboard"}},{default:()=>"\u4EEA\u8868\u76D8"}),key:"/admin/dashboard",icon:C(E)},{name:"\u9000\u51FA",label:p(x,{to:{path:"/login"}},{default:()=>"\u9000\u51FA"}),key:"/login",icon:C(Me)}],I=e=>{O.value=e},Le=e=>"href"in e?p("a",{href:e.href,target:"_blank"},e.label):e.label,Ie=e=>e.key==="??"?!0:e.key==="??"?null:p(e.icon?e.icon:p(fe)),Pe={class:"cb-header-admin"},Re=le(" congb19-admin "),Ae=["onClick"],Fe=f({setup(e){const c=v("/admin"),n=ie();let l=B(()=>n.value==="dark"?T:null),m=v(n.value==="dark");l=B(()=>m.value?T:null);const w=z();w.afterEach((r,o,d)=>{if(r.fullPath!==o.fullPath){const s=r.fullPath;c.value=r.fullPath,N(s)}}),U(()=>{const r=w.currentRoute.value.fullPath;c.value=r,N(r)});const R=(r,o)=>{$(r,o),g(r)};let A=G([{name:"\u9996\u9875",key:"/admin",actived:!0,closable:!1}]),u=ae("tags",A).value;const $=(r,o)=>{let d=!1;if(u.forEach((s,S)=>{s.key==r&&(d=!0)}),!d){let s={name:o.name,key:o.key,actived:!0,closable:!0};u.push(s)}},F=r=>{u.forEach((o,d)=>{o.key==r&&(w.currentRoute.value.fullPath==o.key&&(u[0].actived=!0,w.push(u[0].key)),u.splice(d,1))})},g=r=>{u.forEach((o,d)=>{o.key==r?(w.push(o.key),u[d].actived=!0):u[d].actived=!1})},N=r=>{const o=P(L,r);o&&o.key.indexOf("/admin")>=0&&($(r,o),g(r))};return(r,o)=>{const d=J("router-view");return k(),b(t(re),{theme:t(l)},{default:i(()=>[a(t(ne),{vertical:""},{default:i(()=>[a(t(y),null,{default:i(()=>[a(t(Q),{bordered:""},{default:i(()=>[h("div",Pe,[a(t(j),{bordered:!1},{default:i(()=>[Re]),_:1}),a(t(j),{bordered:!1},{default:i(()=>[a(t(q),{value:t(m),"onUpdate:value":o[0]||(o[0]=s=>K(m)?m.value=s:m=s),size:"medium"},{"checked-icon":i(()=>[a(t(M),{component:t(Se)},null,8,["component"])]),"unchecked-icon":i(()=>[a(t(M),{component:t(Ee)},null,8,["component"])]),_:1},8,["value"])]),_:1})])]),_:1}),a(t(y),{"has-sider":"",style:{height:"calc(100vh - 65px)"}},{default:i(()=>[a(t(W),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:t(O),"show-trigger":"",onCollapse:o[1]||(o[1]=s=>t(I)(!0)),onExpand:o[2]||(o[2]=s=>t(I)(!1))},{default:i(()=>[a(t(X),{collapsed:t(O),"collapsed-width":64,"collapsed-icon-size":22,options:t(L),"render-label":t(Le),"render-icon":t(Ie),"onUpdate:value":R,value:c.value},null,8,["collapsed","options","render-label","render-icon","value"])]),_:1},8,["collapsed"]),a(t(y),null,{default:i(()=>[h("div",null,[(k(!0),_(te,null,Y(t(u),s=>(k(),b(t(Z),{closable:s.closable,bordered:!1,key:s.key,onClose:S=>F(s.key),type:s.actived?"success":"default"},{default:i(()=>[h("span",{onClick:S=>g(s.key)},ee(s.name),9,Ae)]),_:2},1032,["closable","onClose","type"]))),128))]),a(t(de),{style:{"max-height":"calc(100vh - 94px)"}},{default:i(()=>[(k(),b(oe,null,[a(d)],1024))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}});const Ue=se(Fe,[["__scopeId","data-v-50ee1bab"]]);export{Ue as default};