import{g as j,p as K}from"./index.1202ae60.js";import{b as H}from"./index.e114e026.js";import{A as O,a2 as P,C as W,d as L,a as i,o as g,g as v,h as e,w as u,b as r,U as E,r as h,v as k,e as I,k as G,V as S,S as J,u as o,s as Q,a3 as X}from"./index.04abfe6d.js";import{u as Y}from"./use-message.20e18402.js";import"./index.83f7d8fe.js";function Z(){const n=O(P,null);return n===null&&W("use-loading-bar","No outer <n-loading-bar-provider /> founded."),n}const uu=n=>n instanceof Date?n:new Date(n),eu=n=>{let m=uu(n);return H(m)},tu=r("\u{1F6EB}"),nu=L({props:{info:null},setup(n){var f;const F=eu((f=n.info)==null?void 0:f.createdAt);return(A,w)=>{const C=i("n-divider"),d=i("n-card");return g(),v("div",null,[e(C,{"title-placement":"center"},{default:u(()=>[tu]),_:1}),e(d,{bordered:!1,title:" "},{"header-extra":u(()=>{var a;return[r(E(F.value)+" #"+E((a=n.info)==null?void 0:a.id),1)]}),action:u(()=>{var a,c;return[r(E((a=n.info)==null?void 0:a.authorName)+"\uFF1A\u201C"+E((c=n.info)==null?void 0:c.content)+"\u201D ",1)]}),_:1})])}}}),ou=r("Congb19 \u7684\u89E3\u5FE7\u6742\u8D27\u94FA "),au=r(" \u{1F6EB} "),lu=r(" \u6211\u8981\u5206\u4EAB\u5FEB\u4E50 "),su=r(" \u{1F4A2} "),ru=r(" \u6211\u6709\u70E6\u607C\u6C42\u52A9 "),iu=r(" \u{1F6EB} "),du=r(" \u53D1\u9001 "),_u=L({setup(n){const m=Y(),F=Z();let f=h(1),A=k([]),w=h(!1),C=h(!1),d=h(1);const a=I(()=>({title:d.value==1?"\u5206\u4EAB\u5FEB\u4E50\uFF01":"\u70E6\u607C\u6C42\u52A9",authorName:"\u8BE5\u600E\u4E48\u79F0\u547C\u4F60\uFF1F\u6211\u53EB Congb19",content:d.value==1?"\u4ECA\u5929\u559D\u4E86\u5965\u5965\u6930\u6930\u5496\u5561\uFF0C\u7279\u522B\u597D\u559D":"\u7EA6\u4EBA\u770B\u7535\u5F71\uFF0C\u7ED3\u679C\u88AB \u{1F54A} \u4E86",contactInfo:d.value==1?"\u53EF\u4EE5\u4E0D\u5199":"\u5982\u679C\u6211\u80FD\u5E2E\u5230\u4F60\uFF0C\u6211\u4F1A\u6765\u627E\u4F60\u7684\uFF01",shareSuccess:d.value==1?"\u5206\u4EAB\u6210\u529F\uFF01\u6211\u5BA1\u6838\u901A\u8FC7\u540E\u5C31\u4F1A\u5C55\u793A\u51FA\u6765\u5566\u3002":"\u5206\u4EAB\u6210\u529F\uFF01\u6211\u4F1A\u627E\u4E2A\u65F6\u95F4\u6765\u8054\u7CFB\u4F60\u7684\u3002",shareFailed:"\u62B1\u6B49\uFF0C\u670D\u52A1\u5668\u597D\u50CF\u51FA\u4E86\u70B9\u95EE\u9898",incomplete:"\u8BF7\u586B\u5199\u5B8C\u6574"}));let c=h(!1);const x=l=>{d.value=l,c.value=!0};let T={width:"600px",borderRadius:"10px"},p=k({content:"",contactInfo:"",authorName:""}),U=I(()=>({authorName:{required:!0,message:"\u8BF7\u8F93\u5165\u6635\u79F0",trigger:["input","blur"]},content:{required:!0,message:"\u8BF7\u8F93\u5165\u5185\u5BB9",trigger:["input","blur"]},contactInfo:{required:d.value==2,message:"\u8BF7\u8F93\u5165\u8054\u7CFB\u65B9\u5F0F",trigger:["input","blur"]}}));const N=h(null),q=async()=>{var l;(l=N.value)==null||l.validate(async t=>{var _;if(t)m.warning(a.value.incomplete);else{const b={type:d,...p};F.start(),((_=(await K(b)).data)==null?void 0:_.code)==200?(F.finish(),m.success(a.value.shareSuccess,{duration:4e3}),c.value=!1):(F.error(),m.error(a.value.shareFailed,{duration:4e3}))}})},M=()=>{let l=new Date(2021,8,24);f.value=Math.ceil((Date.now()-l.getTime())/(1e3*60*60*24))},R=()=>{console.log("\u6B22\u8FCE\u5927\u5BB6\u5149\u4E34\uFF01\u5DF2\u8425\u4E1A",f.value,"\u5929")};return G(async()=>{M(),R(),F.start();let l=await j();l&&(l==null?void 0:l.code)==200?(F.finish(),A.push(...l.data.sort((t,_)=>_.id-t.id))):F.error()}),(l,t)=>{const _=i("n-h1"),b=i("n-h3"),B=i("n-button"),z=i("n-button-group"),D=i("n-input"),y=i("n-form-item"),V=i("n-form"),$=i("n-modal");return g(),v(S,null,[e(_,null,{default:u(()=>[ou]),_:1}),e(b,null,{default:u(()=>[r("\u2014\u2014\u5DF2\u8425\u4E1A "+E(o(f))+" \u5929",1)]),_:1}),e(z,{size:"large"},{default:u(()=>[e(B,{type:"success",round:"",onClick:t[0]||(t[0]=s=>x(1))},{icon:u(()=>[au]),default:u(()=>[lu]),_:1}),e(B,{type:"error",round:"",onClick:t[1]||(t[1]=s=>x(2))},{icon:u(()=>[su]),default:u(()=>[ru]),_:1})]),_:1}),(g(!0),v(S,null,J(o(A),s=>(g(),v("div",{key:s.id},[e(nu,{info:s},null,8,["info"])]))),128)),e($,{class:"cb-modal",show:o(c),"onUpdate:show":t[5]||(t[5]=s=>Q(c)?c.value=s:c=s),preset:"card",style:X(o(T)),title:a.value.title,size:"medium",bordered:!1},{footer:u(()=>[e(B,{type:"success",round:"",onClick:q,loading:o(w),disabled:o(C)},{icon:u(()=>[iu]),default:u(()=>[du]),_:1},8,["loading","disabled"])]),default:u(()=>[e(V,{ref_key:"formRef",ref:N,model:o(p),rules:o(U),"label-placement":"left","label-width":"auto","require-mark-placement":"right-hanging",style:{maxWidth:"600px"}},{default:u(()=>[e(y,{label:"\u6635\u79F0 \u{1F36A}",path:"authorName"},{default:u(()=>[e(D,{value:o(p).authorName,"onUpdate:value":t[2]||(t[2]=s=>o(p).authorName=s),placeholder:a.value.authorName},null,8,["value","placeholder"])]),_:1}),e(y,{label:"\u5185\u5BB9 \u2753",path:"content"},{default:u(()=>[e(D,{value:o(p).content,"onUpdate:value":t[3]||(t[3]=s=>o(p).content=s),type:"textarea",placeholder:a.value.content},null,8,["value","placeholder"])]),_:1}),e(y,{label:"\u8054\u7CFB\u65B9\u5F0F \u{1F4E7}",path:"contactInfo"},{default:u(()=>[e(D,{value:o(p).contactInfo,"onUpdate:value":t[4]||(t[4]=s=>o(p).contactInfo=s),placeholder:a.value.contactInfo},null,8,["value","placeholder"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["show","style","title"])],64)}}});export{_u as default};
