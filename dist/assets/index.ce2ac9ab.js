import{r as _,c as E,a as u,K as W,o as p,d as b,b as m,w as t,e as o,u as V,f as q,g as O,h as C,i as B,j as A,R as I,N as U,L as J,k as he,B as fe,l as X,m as Y,n as H,p as me,q as l,s as Z,t as P,v as ee,x as M,y as te,z as Fe,M as ve,S as ye,A as ue,C as ne,D as T,E as oe,F as S,G as L,H as ge,I as ae,J as se,O as be,P as Ee,Q as Ce,T as $e,U as ke,V as le,W as re,X as Be,Y as K,Z as De,_ as w,$ as Ae,a0 as we,a1 as Ne,a2 as xe,a3 as Le,a4 as Se,a5 as Me,a6 as Oe,a7 as Ie,a8 as He,a9 as Pe,aa as Te,ab as Re,ac as Ue,ad as ze,ae as We,af as qe,ag as Ke,ah as je,ai as Qe,aj as Ge,ak as Ve,al as Je,am as Xe,an as Ye,ao as Ze,ap as et,aq as tt,ar as ut,as as nt,at as ot,au as at,av as st}from"./vendor.3f45f96f.js";const lt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const c of d.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerpolicy&&(d.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?d.credentials="include":r.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(r){if(r.ep)return;r.ep=!0;const d=a(r);fetch(r.href,d)}};lt();var N=(e,n)=>{const a=e.__vccOpts||e;for(const[s,r]of n)a[s]=r;return a};const rt={};function ct(e,n){const a=_("router-view");return p(),E(W,null,[u(a)],1024)}var dt=N(rt,[["render",ct]]);const _t=o("admin login"),it=b({setup(e){return m("123"),(n,a)=>{const s=_("n-card");return p(),E(s,null,{default:t(()=>[_t]),_:1})}}});const pt=[{label:"\u{1F3E0}",key:"/top"},{label:"\u{1F3EA}",key:"/top/kbn"}],ht=b({name:"top",components:{},setup(){let e=m(),n=m(!1);const a=V();return q(()=>{a.value=="dark"&&(n.value=!0,e.value=O)}),{menuOptions:pt,active:n,theme:e,handleRouteChange:d=>{pe.push(d)},handleDarkModeChange:d=>{e.value=d?O:m(null)}}}}),ft={class:"cb-layout--top"},mt=o(" \u6D59ICP\u59072021020364\u53F7-1 "),Ft=o("Dark");function vt(e,n,a,s,r,d){const c=_("n-card"),y=_("n-menu"),v=_("router-view"),i=_("n-a"),$=_("n-el"),k=_("n-switch"),D=_("n-message-provider"),h=_("n-config-provider");return p(),C("div",ft,[u(h,{theme:e.theme},{default:t(()=>[u(D,null,{default:t(()=>[u(c,{class:"cb-background"}),u(c,{class:"cb-head","content-style":"padding: 5px;"},{default:t(()=>[u(y,{class:"cb-menu","onUpdate:value":e.handleRouteChange,mode:"horizontal",options:e.menuOptions},null,8,["onUpdate:value","options"])]),_:1}),u(c,{class:"cb-content",bordered:!1,"content-style":"padding-bottom: 70px;"},{default:t(()=>[(p(),E(W,null,[u(v)],1024))]),_:1}),u(c,{class:"cb-foot","content-style":"padding: 0;"},{default:t(()=>[u(i,{class:"cb-beian",href:"http://beian.miit.gov.cn"},{default:t(()=>[mt]),_:1})]),_:1}),u(c,{class:"cb-darkswitch"},{default:t(()=>[u($,{tag:"div"},{default:t(()=>[Ft]),_:1}),u(k,{value:e.active,"onUpdate:value":[n[0]||(n[0]=F=>e.active=F),e.handleDarkModeChange]},null,8,["value","onUpdate:value"])]),_:1})]),_:1})]),_:1},8,["theme"])])}var yt=N(ht,[["render",vt]]);const gt={class:"cb-layout--app"},bt=b({setup(e){return m("dark"),(n,a)=>{const s=_("router-view"),r=_("van-config-provider");return p(),E(r,null,{default:t(()=>[B("div",gt,[u(s)])]),_:1})}}}),ce=(e,n)=>{let a=null;if(e)for(let s=0;s<e.length;s++){if(e[s].key==n)return a=e[s],a;if(e[s].children&&(e[s].children.length>0&&(a=ce(e[s].children,n)),a))return a}return a},j=e=>()=>A(U,null,{default:()=>A(e)}),Q=m(!1),de=[{name:"\u9996\u9875",label:A(I,{to:{path:"/admin"}},{default:()=>"\u9996\u9875\uFF01"}),key:"/admin",icon:j(J)},{name:"\u4EEA\u8868\u76D8",label:A(I,{to:{path:"/admin/dashboard"}},{default:()=>"\u4EEA\u8868\u76D8"}),key:"/admin/dashboard",icon:j(J)},{name:"\u9000\u51FA",label:A(I,{to:{path:"/login"}},{default:()=>"\u9000\u51FA"}),key:"/login",icon:j(he)}],_e=e=>{Q.value=e},Et=e=>"href"in e?A("a",{href:e.href,target:"_blank"},e.label):e.label,Ct=e=>e.key==="??"?!0:e.key==="??"?null:A(e.icon?e.icon:A(fe));const $t={class:"cb-header-admin"},kt=o(" congb19-admin "),Bt=["onClick"],Dt=b({setup(e){const n=m("/admin"),a=V();let s=X(()=>a.value==="dark"?O:null),r=m(a.value==="dark");s=X(()=>r.value?O:null);const d=Y();d.afterEach((F,f,x)=>{if(F.fullPath!==f.fullPath){const g=F.fullPath;n.value=F.fullPath,h(g)}}),q(()=>{const F=d.currentRoute.value.fullPath;n.value=F,h(F)});const c=(F,f)=>{$(F,f),D(F)};let y=H([{name:"\u9996\u9875",key:"/admin",actived:!0,closable:!1}]),i=me("tags",y).value;const $=(F,f)=>{let x=!1;if(i.forEach((g,G)=>{g.key==F&&(x=!0)}),!x){let g={name:f.name,key:f.key,actived:!0,closable:!0};i.push(g)}},k=F=>{i.forEach((f,x)=>{f.key==F&&(d.currentRoute.value.fullPath==f.key&&(i[0].actived=!0,d.push(i[0].key)),i.splice(x,1))})},D=F=>{i.forEach((f,x)=>{f.key==F?(d.push(f.key),i[x].actived=!0):i[x].actived=!1})},h=F=>{const f=ce(de,F);f&&f.key.indexOf("/admin")>=0&&($(F,f),D(F))};return(F,f)=>{const x=_("router-view");return p(),E(l(Z),{theme:l(s)},{default:t(()=>[u(l(ae),{vertical:""},{default:t(()=>[u(l(P),null,{default:t(()=>[u(l(ee),{bordered:""},{default:t(()=>[B("div",$t,[u(l(M),{bordered:!1},{default:t(()=>[kt]),_:1}),u(l(M),{bordered:!1},{default:t(()=>[u(l(te),{value:l(r),"onUpdate:value":f[0]||(f[0]=g=>Fe(r)?r.value=g:r=g),size:"medium"},{"checked-icon":t(()=>[u(l(U),{component:l(ve)},null,8,["component"])]),"unchecked-icon":t(()=>[u(l(U),{component:l(ye)},null,8,["component"])]),_:1},8,["value"])]),_:1})])]),_:1}),u(l(P),{"has-sider":"",style:{height:"calc(100vh - 65px)"}},{default:t(()=>[u(l(ue),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:l(Q),"show-trigger":"",onCollapse:f[1]||(f[1]=g=>l(_e)(!0)),onExpand:f[2]||(f[2]=g=>l(_e)(!1))},{default:t(()=>[u(l(ne),{collapsed:l(Q),"collapsed-width":64,"collapsed-icon-size":22,options:l(de),"render-label":l(Et),"render-icon":l(Ct),"onUpdate:value":c,value:n.value},null,8,["collapsed","options","render-label","render-icon","value"])]),_:1},8,["collapsed"]),u(l(P),null,{default:t(()=>[B("div",null,[(p(!0),C(L,null,T(l(i),g=>(p(),E(l(oe),{closable:g.closable,bordered:!1,key:g.key,onClose:G=>k(g.key),type:g.actived?"success":"default"},{default:t(()=>[B("span",{onClick:G=>D(g.key)},S(g.name),9,Bt)]),_:2},1032,["closable","onClose","type"]))),128))]),u(l(ge),{style:{"max-height":"calc(100vh - 94px)"}},{default:t(()=>[(p(),E(W,null,[u(x)],1024))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}}),At={};function wt(e,n){const a=_("router-view");return p(),E(a)}var Nt=N(At,[["render",wt]]);const xt=B("h2",null,"Congb19's Toolbox",-1),Lt=b({setup(e){function n(d){return()=>A(U,null,{default:()=>A(d)})}const a=Y(),s=m("/tools/keyboard");s.value=a.currentRoute.value.fullPath;const r=[{label:()=>A(I,{to:{path:"/tools/keyboard"}},{default:()=>"\u952E\u76D8\u68C0\u6D4B\u5DE5\u5177"}),key:"/tools/keyboard",icon:n(Ee)},{label:()=>A(I,{to:{path:"/tools/sysinfo"}},{default:()=>"\u7CFB\u7EDF\u57FA\u672C\u4FE1\u606F"}),key:"/tools/sysinfo",icon:n(be)}];return(d,c)=>{const y=_("n-menu"),v=_("router-view");return p(),E(l(se),null,{default:t(()=>[u(l(P),{embedded:"","content-style":"padding: 24px;",class:"cb-background"},{default:t(()=>[u(l(M),null,{default:t(()=>[u(l(M),null,{default:t(()=>[xt]),_:1}),u(y,{options:r,value:s.value,"onUpdate:value":c[0]||(c[0]=i=>s.value=i),mode:"horizontal"},null,8,["value"]),u(l(M),null,{default:t(()=>[u(v)]),_:1})]),_:1})]),_:1})]),_:1})}}});var St="/assets/sayu.faf5430a.jpg";const Mt=b({name:"HelloWorld",props:{msg:{type:String,required:!1}},setup:()=>({count:m(0)})}),Ot=B("img",{alt:"logo",width:"200",src:St},null,-1),It=o("\u4F60\u5728\u70E6\u607C\u4EC0\u4E48\u5462"),Ht=o("\u8FD9\u91CC\u662FCongb19\u7684\u5C0F\u7AD9\uFF01\u5927\u5BB6\u8981\u5929\u5929\u5F00\u5FC3"),Pt=o("\u6709\u70E6\u607C\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\uFF1A"),Tt=o(" \u6084\u6084\u804A \u{1F6EB}: "),Rt=o("@Congb19"),Ut=o(" \u8D85\u79C1\u4EBA\u7684 \u{1F4E7} : "),zt=o("linyc@congb19.com"),Wt=o("\u5DF2\u5B9E\u73B0\u7684\u5C0F\u529F\u80FD \uFF1A"),qt=o(" \u5C0F\u5DE5\u5177\u7BB1 \u{1F527}\uFF1A "),Kt=o("Congb19's Toolbox"),jt=o(" \u6697\u9ED1\u6A21\u5F0F\u81EA\u52A8\u9002\u914D + \u624B\u52A8\u5207\u6362\uFF08\u2198\uFF09 "),Qt=o("\u6211\u7684\u5176\u4ED6\u7AD9\uFF1A"),Gt=o(" \u5199\u5C0F\u4F5C\u6587\u7684\u5730\u65B9\uFF1A "),Vt=o("Congb19\u7684\u535A\u5BA2"),Jt=o("\u788E\u788E\u5FF5\uFF1A"),Xt=o("\u8FD9\u4E2A\u7F51\u7AD9\u4E0D\u77E5\u9053\u5199\u70B9\u4EC0\u4E48\u4E86\u{1F62D}\uFF0C\u8D70\u8FC7\u8DEF\u8FC7\uFF0C\u6765\u70B9 IDEA \u5427~~");function Yt(e,n,a,s,r,d){const c=_("n-h1"),y=_("n-h2"),v=_("n-divider"),i=_("n-a"),$=_("n-li"),k=_("router-link"),D=_("n-p");return p(),C(L,null,[Ot,u(c,null,{default:t(()=>[It]),_:1}),u(y,null,{default:t(()=>[Ht]),_:1}),u(v,{"title-placement":"center"},{default:t(()=>[Pt]),_:1}),u($,null,{default:t(()=>[Tt,u(i,{target:"_blank",href:"http://t.me/Congb19"},{default:t(()=>[Rt]),_:1})]),_:1}),u($,null,{default:t(()=>[Ut,u(i,{href:"mailto:linyc@congb19.com"},{default:t(()=>[zt]),_:1})]),_:1}),u(v,{"title-placement":"center"},{default:t(()=>[Wt]),_:1}),u($,null,{default:t(()=>[qt,u(k,{to:"/tools"},{default:t(()=>[Kt]),_:1})]),_:1}),u($,null,{default:t(()=>[jt]),_:1}),u(v,{"title-placement":"center"},{default:t(()=>[Qt]),_:1}),u($,null,{default:t(()=>[Gt,u(i,{target:"_blank",href:"https://blog.congb19.com"},{default:t(()=>[Vt]),_:1})]),_:1}),u(v,{"title-placement":"center"},{default:t(()=>[Jt]),_:1}),u(D,null,{default:t(()=>[Xt]),_:1})],64)}var Zt=N(Mt,[["render",Yt]]);const eu=o(" wall item "),tu=b({setup(e){return(n,a)=>{const s=_("n-card");return p(),E(s,{title:"asd",size:"medium"},{default:t(()=>[eu]),_:1})}}});var uu=N(tu,[["__scopeId","data-v-5f80d8a8"]]);const nu=b({setup(e){const n=m(null);console.log(n);let a=m(!1),s=H({x:0,y:0});const r=i=>{},d=i=>{a.value=!0,s={x:i.x,y:i.y},console.log("dragStart",s)},c=i=>{},y=i=>{a.value=!1,console.log("dragStop")},v=m({mousedown:d,mousemove:a.value?c:r,mouseup:y});return(i,$)=>(p(),C("div",Ce({ref_key:"self",ref:n,class:"cb-pool"},$e(v.value)),[u(uu)],16))}});var ou=N(nu,[["__scopeId","data-v-38e369d7"]]);const au={baseURL:"http://www.congb19.com/api"},ie=ke.create(au),su=async(e,n,a)=>{let s;switch(e){case"GET":s=await ie.get(n);break;case"POST":s=await ie.post(n,a);break}return{status:s.status,data:s.data}},lu={auth:{login:"/auth/login"},kbn:{getHappinessList:"/kbn/getHappinessList",postKbn:"/kbn/postKbn"}},ru=async e=>await su("POST",lu.auth.login,e),cu={debug:!0,state_auth:H({message:m("testmsg"),auth:{isAdmin:!0,token:""}}),state_app:H({path:m("/")}),resetAuth(){this.state_auth.auth.token="",this.state_auth.auth.isAdmin=!1},async signIn(e){(await ru(e)).status==200}},du=b({props:{info:{type:Object}},setup:()=>{console.log("kbn-item")}});function _u(e,n,a,s,r,d){return p(),C("div")}var iu=N(du,[["render",_u]]);const pu=b({components:{KbnItem:iu},setup:()=>{const e=le();let n=m(1),a=m(!1),s=m(!1),r=m({}),d=m({type:0,content:"",contact_info:"",author_name:""}),c=m({type:1,content:"",contact_info:"",author_name:""}),y=m([{floor:1,content:"\u4ECA\u5929\u5403\u4E86\u996D",created_time:"20210924",author_name:"lyc"}]);const v=async()=>{},i=()=>{let h=new Date(2021,8,24);n.value=Math.ceil((Date.now()-h.getTime())/(1e3*60*60*24))},$=()=>{console.log("\u6B22\u8FCE\u5927\u5BB6\u5149\u4E34\uFF01\u5DF2\u8425\u4E1A",n.value,"\u5929")},k=async()=>{console.log("handle happy",d.value),e.warning("dbq\uFF0C\u6211\u8FD8\u6CA1\u5199\u5B8C\uFF0C\u6240\u4EE5\u8FD8\u5206\u4EAB\u4E0D\u4E86QAQ",{duration:4e3}),a.value=!1},D=()=>{e.warning("dbq\uFF0C\u6211\u8FD8\u6CA1\u5199\u5B8C\uFF0C\u6240\u4EE5\u8FD8\u5206\u4EAB\u4E0D\u4E86QAQ",{duration:4e3}),a.value=!1};return q(async()=>{i(),$(),await v()}),{store:cu,openDays:n,modalStyle:r,happyForm:d,worryForm:c,showHappyModal:a,showWorryModal:s,happinessList:y,handleHappy:k,handleWorry:D}}}),hu=o("Congb19 \u7684\u89E3\u5FE7\u6742\u8D27\u94FA "),fu=o(" \u{1F6EB} "),mu=o(" \u6211\u8981\u5206\u4EAB\u5FEB\u4E50 "),Fu=o(" \u{1F4A2} "),vu=o(" \u6211\u6709\u70E6\u607C\u6C42\u52A9 "),yu=o(" \u6635\u79F0 \u{1F600} "),gu=o(" \u5FEB\u4E50 \u{1F36C} "),bu=o(" \u8054\u7CFB\u65B9\u5F0F \u{1F4E7} "),Eu=o(" \u{1F6EB} "),Cu=o(" \u5206\u4EAB "),$u=o(" \u6635\u79F0 \u{1F36A} "),ku=o(" \u70E6\u607C \u2601 "),Bu=o(" \u8054\u7CFB\u65B9\u5F0F \u{1F4E7} "),Du=o(" \u{1F6EB} "),Au=o(" \u53D1\u9001 ");function wu(e,n,a,s,r,d){const c=_("n-card"),y=_("n-h1"),v=_("n-button"),i=_("n-button-group"),$=_("kbn-item"),k=_("n-input"),D=_("n-modal");return p(),C(L,null,[u(c,{class:"cb-kbn__opendays"},{default:t(()=>[o("\u5DF2\u8425\u4E1A "+S(e.openDays)+" \u5929",1)]),_:1}),u(y,null,{default:t(()=>[hu]),_:1}),u(i,{size:"large"},{default:t(()=>[u(v,{type:"success",round:"",onClick:n[0]||(n[0]=h=>e.showHappyModal=!0)},{icon:t(()=>[fu]),default:t(()=>[mu]),_:1}),u(v,{type:"error",round:"",onClick:n[1]||(n[1]=h=>e.showWorryModal=!0)},{icon:t(()=>[Fu]),default:t(()=>[vu]),_:1})]),_:1}),(p(!0),C(L,null,T(e.happinessList,h=>(p(),E($,{info:h},null,8,["info"]))),256)),u(D,{class:"cb-modal",show:e.showHappyModal,"onUpdate:show":n[5]||(n[5]=h=>e.showHappyModal=h),preset:"card",style:re(e.modalStyle),title:"\u5206\u4EAB\u5FEB\u4E50\uFF01",size:"medium",bordered:!1},{footer:t(()=>[u(v,{type:"success",round:"",onClick:e.handleHappy},{icon:t(()=>[Eu]),default:t(()=>[Cu]),_:1},8,["onClick"])]),default:t(()=>[u(k,{value:e.happyForm.author_name,"onUpdate:value":n[2]||(n[2]=h=>e.happyForm.author_name=h),placeholder:"\u8BE5\u600E\u4E48\u79F0\u547C\u4F60\uFF1F\u6211\u53EB Congb19"},{prefix:t(()=>[yu]),_:1},8,["value"]),u(k,{value:e.happyForm.content,"onUpdate:value":n[3]||(n[3]=h=>e.happyForm.content=h),type:"textarea",placeholder:"\u4ECA\u5929\u559D\u4E86\u5965\u5965\u6930\u6930\u5496\u5561\uFF0C\u7279\u522B\u597D\u559D"},{prefix:t(()=>[gu]),_:1},8,["value"]),u(k,{value:e.happyForm.contact_info,"onUpdate:value":n[4]||(n[4]=h=>e.happyForm.contact_info=h),placeholder:"\u5982\u679C\u4F60\u4E0D\u613F\u610F\u5C55\u793A\u51FA\u6765\u88AB\u4EBA\u9A9A\u6270\uFF0C\u53EF\u4EE5\u4E0D\u5199"},{prefix:t(()=>[bu]),_:1},8,["value"])]),_:1},8,["show","style"]),u(D,{class:"cb-modal",show:e.showWorryModal,"onUpdate:show":n[9]||(n[9]=h=>e.showWorryModal=h),preset:"card",style:re(e.modalStyle),title:"\u89E3\u51B3\u70E6\u607C\uFF01",size:"medium",bordered:!1},{footer:t(()=>[u(v,{type:"success",round:"",onClick:e.handleWorry},{icon:t(()=>[Du]),default:t(()=>[Au]),_:1},8,["onClick"])]),default:t(()=>[u(k,{value:e.worryForm.author_name,"onUpdate:value":n[6]||(n[6]=h=>e.worryForm.author_name=h),placeholder:"\u8BE5\u600E\u4E48\u79F0\u547C\u4F60\uFF1F\u6211\u53EB Congb19"},{prefix:t(()=>[$u]),_:1},8,["value"]),u(k,{value:e.worryForm.content,"onUpdate:value":n[7]||(n[7]=h=>e.worryForm.content=h),type:"textarea",placeholder:"\u4ECA\u5929\u8BF7\u5C0F\u59D0\u59D0\u53BB\u770B\u7535\u5F71\uFF0C\u7ED3\u679C\u88AB \u{1F54A} \u4E86"},{prefix:t(()=>[ku]),_:1},8,["value"]),u(k,{value:e.worryForm.contact_info,"onUpdate:value":n[8]||(n[8]=h=>e.worryForm.contact_info=h),placeholder:"\u5982\u679C\u6211\u80FD\u5E2E\u5230\u4F60\uFF0C\u6211\u4F1A\u6765\u627E\u4F60\u7684\uFF01"},{prefix:t(()=>[Bu]),_:1},8,["value"])]),_:1},8,["show","style"])],64)}var Nu=N(pu,[["render",wu],["__scopeId","data-v-01bb9298"]]);const xu=b({components:{},setup:()=>{const e=le(),n="404";let a=m({title:"404 \u8D44\u6E90\u4E0D\u5B58\u5728",description:"\u751F\u6D3B\u603B\u5F52\u5E26\u70B9\u8352\u8C2C",btn_content:"\u4E3A\u4EC0\u4E48\uFF1F"});const s=()=>{e.info("\u4E5F\u8BB8\u662F\u6211\u8FD8\u6CA1\u5199\u597D\uFF0C\u522B\u6025\uFF01")},r=Be();return console.log(r.meta.status),{status:a,code:n,why:s}}});function Lu(e,n,a,s,r,d){const c=_("n-button"),y=_("n-result");return p(),E(y,{class:"cb-result",status:e.code,title:e.status.title,description:e.status.description},{footer:t(()=>[u(c,{onClick:e.why},{default:t(()=>[o(S(e.status.btn_content),1)]),_:1},8,["onClick"])]),_:1},8,["status","title","description"])}var z=N(xu,[["render",Lu],["__scopeId","data-v-1ae5b851"]]);const Su=u("button",null,[o("hello")]);var Mu=b({setup(){},render(){return u("div",null,[Su])}});const Ou=b({}),Iu=o("dashboard");function Hu(e,n,a,s,r,d){const c=_("n-card");return p(),E(c,null,{default:t(()=>[Iu]),_:1})}var Pu=N(Ou,[["render",Hu]]);const Tu={},Ru=o("admin index");function Uu(e,n){const a=_("n-card");return p(),E(a,{style:{height:"2000px"}},{default:t(()=>[Ru]),_:1})}var zu=N(Tu,[["render",Uu]]);const Wu={};function qu(e,n){return p(),C("div",null,"combo introduce")}var Ku=N(Wu,[["render",qu]]);const ju=b({setup(e){return(n,a)=>(p(),C("div",null,"combo index"))}}),Qu=B("h3",null,"Holding:",-1),Gu=B("span",null,"\xA0",-1),Vu=B("h3",null,"Status:",-1),Ju=B("h3",null,"Help:",-1),Xu=o("\u6309\u952E\u5373\u53EF\u68C0\u6D4B\uFF1B"),Yu=o("fn\u952E\u4E00\u822C\u4E3A\u952E\u76D8\u5185\u7F6E\u529F\u80FD\u952E\uFF0C\u65E0\u6CD5\u68C0\u6D4B\uFF1B"),Zu=o("\u65E0\u6CD5\u963B\u6B62\u7CFB\u7EDF\u884C\u4E3A\u7684\u53D1\u751F\uFF0C\u4F8B\u5982 Alt/Command + Tab\uFF1B"),en=o("Mac\u952E\u4F4D\u5BF9\u5E94\uFF1ACommand->meta, option->alt\u3002"),tn=b({setup(e){const n=K("CapsLock"),a=K("NumLock"),s=K("ScrollLock"),r=De({passive:!1,reactive:!0,onEventFired(c){c.ctrlKey&&c.key==="s"&&c.type==="keydown"&&c.preventDefault(),c.altKey&&c.preventDefault(),c.key==="Tab"&&c.preventDefault()}}),{current:d}=r;return(c,y)=>(p(),C(L,null,[Qu,Gu,(p(!0),C(L,null,T(l(d).values(),v=>(p(),C("span",null,S(v)+", ",1))),256)),Vu,u(l(w),null,{default:t(()=>[o(S(" CapsLock: "+l(n)),1)]),_:1}),u(l(w),null,{default:t(()=>[o(S(" NumLock: "+l(a)),1)]),_:1}),u(l(w),null,{default:t(()=>[o(S(" ScrollLock: "+l(s)),1)]),_:1}),Ju,u(l(w),null,{default:t(()=>[Xu]),_:1}),u(l(w),null,{default:t(()=>[Yu]),_:1}),u(l(w),null,{default:t(()=>[Zu]),_:1}),u(l(w),null,{default:t(()=>[en]),_:1})],64))}}),un=B("h3",null,"System:",-1),nn=B("h3",null,"Browser:",-1),on=B("h3",null,"Help:",-1),an=o("\u5206\u8FA8\u7387\u4E3A\u903B\u8F91\u50CF\u7D20\uFF0C\u5373 \u5206\u8FA8\u7387=\u5C4F\u5E55\u5206\u8FA8\u7387/\u603B\u7F29\u653E\u500D\u7387\uFF1B"),sn=o("\u603B\u7F29\u653E\u500D\u7387=\u7CFB\u7EDF\u7F29\u653E\u500D\u7387\xD7\u6D4F\u89C8\u5668\u7F29\u653E\u500D\u7387\uFF08\u4F8B\u5982\uFF0C\u7CFB\u7EDF125%\uFF0C\u6D4F\u89C8\u5668100%\uFF0C\u5219\u603B1.25\uFF09\uFF1B"),ln=b({setup(e){const n=Ae(),a=we(),s=Ne(),r=xe(),d=Le(),c=H({system:[{label:"\u7F51\u7EDC\u5728\u7EBF",value:n},{label:"\u662F\u5426\u6709\u7535\u6C60",value:a.isSupported},{label:"\u7535\u91CF",value:a.level}],browser:[{label:"\u5237\u65B0\u7387",value:s},{label:"\u5206\u8FA8\u7387(\u5BBD)",value:r.width},{label:"\u5206\u8FA8\u7387(\u9AD8)",value:r.height},{label:"\u603B\u7F29\u653E\u500D\u7387",value:d.pixelRatio}]});return console.log(c),(y,v)=>(p(),C(L,null,[un,(p(!0),C(L,null,T(l(c).system,i=>(p(),E(l(w),null,{default:t(()=>[o(S(i.label+": "+i.value),1)]),_:2},1024))),256)),nn,(p(!0),C(L,null,T(l(c).browser,i=>(p(),E(l(w),null,{default:t(()=>[o(S(i.label+": "+i.value),1)]),_:2},1024))),256)),on,u(l(w),null,{default:t(()=>[an]),_:1}),u(l(w),null,{default:t(()=>[sn]),_:1})],64))}}),rn=B("div",null,"app index",-1),cn=o("\u6309\u94AE!"),dn=b({setup(e){return(n,a)=>{const s=_("van-button");return p(),C(L,null,[rn,u(s,{type:"primary"},{default:t(()=>[cn]),_:1})],64)}}}),_n=[{path:"/login",component:it},{path:"/app",component:bt,children:[{path:"",component:dn}]},{path:"/admin",component:Dt,children:[{path:"dashboard",component:Pu},{path:"",component:zu},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"/combo",component:Nt,children:[{path:"introduce",component:Ku},{path:"",component:ju},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"/top",component:yt,children:[{path:"wall",component:ou},{path:"kbn",component:Nu},{path:"tsxtest",component:Mu},{path:"",component:Zt},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"/tools",component:Lt,children:[{path:"keyboard",component:tn},{path:"sysinfo",component:ln},{path:"",redirect:"/tools/keyboard"},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"",redirect:"/top"}],pe=Se({history:Me(),routes:_n});const R=Oe(dt);R.use(pe);const pn=Ie({components:[He,Pe,O,ae,P,Te,Re,ee,ue,ne,M,Z,se,te,Ue,ze,We,qe,Ke,je,w,Qe,Ge,Ve,Je,Xe,Ye,Ze,et,tt,ut,nt,ot,oe]});R.use(pn);R.use(at);R.use(st);R.mount("#app");
