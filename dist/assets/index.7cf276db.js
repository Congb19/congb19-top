import{r as i,c as C,a as u,K as W,o as p,d as E,b as F,w as t,e as o,u as V,f as J,g as K,h as O,i as $,j as k,k as w,R as I,N as U,L as X,l as fe,B as me,m as Y,n as Z,p as T,q as Fe,s,t as ee,v as H,x as te,y as M,z as ue,A as ve,M as ye,S as be,C as ne,D as oe,E as P,F as ae,G as S,H as L,I as ge,J as se,O as le,P as Ee,Q as Ce,T as $e,U as Be,V as ke,W as re,X as ce,Y as De,Z as q,_ as Ae,$ as D,a0 as we,a1 as Ne,a2 as xe,a3 as Le,a4 as Se,a5 as Me,a6 as Oe,a7 as Ie,a8 as Te,a9 as He,aa as Pe,ab as Re,ac as Ue,ad as ze,ae as We,af as Ke,ag as qe,ah as je,ai as Qe,aj as Ge,ak as Ve,al as Je,am as Xe,an as Ye,ao as Ze,ap as et,aq as tt,ar as ut,as as nt,at as ot,au as at,av as st,aw as lt}from"./vendor.e429c8a0.js";const rt=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const _ of c.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&l(_)}).observe(document,{childList:!0,subtree:!0});function a(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(r){if(r.ep)return;r.ep=!0;const c=a(r);fetch(r.href,c)}};rt();var N=(e,n)=>{const a=e.__vccOpts||e;for(const[l,r]of n)a[l]=r;return a};const ct={};function dt(e,n){const a=i("router-view");return p(),C(W,null,[u(a)],1024)}var it=N(ct,[["render",dt]]);const _t=o("admin login"),pt=E({setup(e){return F("123"),(n,a)=>{const l=i("n-card");return p(),C(l,null,{default:t(()=>[_t]),_:1})}}});const ht=V();ht.value="\u4F60\u5728\u70E6\u607C\u4EC0\u4E48\u5462";const ft=[{label:"\u{1F3E0}",key:"/top"},{label:"\u{1F3EA}",key:"/top/kbn"}],mt=E({name:"top",components:{},setup(){let e=F(),n=F(!1);const a=J();return K(()=>{a.value=="dark"&&(n.value=!0,e.value=O)}),{menuOptions:ft,active:n,theme:e,handleRouteChange:c=>{he.push(c)},handleDarkModeChange:c=>{e.value=c?O:F(null)}}}}),Ft={class:"cb-layout--top"},vt=o(" \u6D59ICP\u59072021020364\u53F7-1 "),yt=o("Dark");function bt(e,n,a,l,r,c){const _=i("n-card"),f=i("n-menu"),y=i("router-view"),d=i("n-a"),b=i("n-el"),B=i("n-switch"),A=i("n-message-provider"),h=i("n-config-provider");return p(),$("div",Ft,[u(h,{theme:e.theme},{default:t(()=>[u(A,null,{default:t(()=>[u(_,{class:"cb-background"}),u(_,{class:"cb-head","content-style":"padding: 5px;"},{default:t(()=>[u(f,{class:"cb-menu","onUpdate:value":e.handleRouteChange,mode:"horizontal",options:e.menuOptions},null,8,["onUpdate:value","options"])]),_:1}),u(_,{class:"cb-content",bordered:!1,"content-style":"padding-bottom: 70px;"},{default:t(()=>[(p(),C(W,null,[u(y)],1024))]),_:1}),u(_,{class:"cb-foot","content-style":"padding: 0;"},{default:t(()=>[u(d,{class:"cb-beian",href:"http://beian.miit.gov.cn"},{default:t(()=>[vt]),_:1})]),_:1}),u(_,{class:"cb-darkswitch"},{default:t(()=>[u(b,{tag:"div"},{default:t(()=>[yt]),_:1}),u(B,{value:e.active,"onUpdate:value":[n[0]||(n[0]=v=>e.active=v),e.handleDarkModeChange]},null,8,["value","onUpdate:value"])]),_:1})]),_:1})]),_:1},8,["theme"])])}var gt=N(mt,[["render",bt]]);const Et={class:"cb-layout--app"},Ct=E({setup(e){return F("dark"),(n,a)=>{const l=i("router-view"),r=i("van-config-provider");return p(),C(r,null,{default:t(()=>[k("div",Et,[u(l)])]),_:1})}}}),de=(e,n)=>{let a=null;if(e)for(let l=0;l<e.length;l++){if(e[l].key==n)return a=e[l],a;if(e[l].children&&(e[l].children.length>0&&(a=de(e[l].children,n)),a))return a}return a},j=e=>()=>w(U,null,{default:()=>w(e)}),Q=F(!1),ie=[{name:"\u9996\u9875",label:w(I,{to:{path:"/admin"}},{default:()=>"\u9996\u9875\uFF01"}),key:"/admin",icon:j(X)},{name:"\u4EEA\u8868\u76D8",label:w(I,{to:{path:"/admin/dashboard"}},{default:()=>"\u4EEA\u8868\u76D8"}),key:"/admin/dashboard",icon:j(X)},{name:"\u9000\u51FA",label:w(I,{to:{path:"/login"}},{default:()=>"\u9000\u51FA"}),key:"/login",icon:j(fe)}],_e=e=>{Q.value=e},$t=e=>"href"in e?w("a",{href:e.href,target:"_blank"},e.label):e.label,Bt=e=>e.key==="??"?!0:e.key==="??"?null:w(e.icon?e.icon:w(me));const kt={class:"cb-header-admin"},Dt=o(" congb19-admin "),At=["onClick"],wt=E({setup(e){const n=F("/admin"),a=J();let l=Y(()=>a.value==="dark"?O:null),r=F(a.value==="dark");l=Y(()=>r.value?O:null);const c=Z();c.afterEach((v,m,x)=>{if(v.fullPath!==m.fullPath){const g=v.fullPath;n.value=v.fullPath,h(g)}}),K(()=>{const v=c.currentRoute.value.fullPath;n.value=v,h(v)});const _=(v,m)=>{b(v,m),A(v)};let f=T([{name:"\u9996\u9875",key:"/admin",actived:!0,closable:!1}]),d=Fe("tags",f).value;const b=(v,m)=>{let x=!1;if(d.forEach((g,G)=>{g.key==v&&(x=!0)}),!x){let g={name:m.name,key:m.key,actived:!0,closable:!0};d.push(g)}},B=v=>{d.forEach((m,x)=>{m.key==v&&(c.currentRoute.value.fullPath==m.key&&(d[0].actived=!0,c.push(d[0].key)),d.splice(x,1))})},A=v=>{d.forEach((m,x)=>{m.key==v?(c.push(m.key),d[x].actived=!0):d[x].actived=!1})},h=v=>{const m=de(ie,v);m&&m.key.indexOf("/admin")>=0&&(b(v,m),A(v))};return(v,m)=>{const x=i("router-view");return p(),C(s(ee),{theme:s(l)},{default:t(()=>[u(s(se),{vertical:""},{default:t(()=>[u(s(H),null,{default:t(()=>[u(s(te),{bordered:""},{default:t(()=>[k("div",kt,[u(s(M),{bordered:!1},{default:t(()=>[Dt]),_:1}),u(s(M),{bordered:!1},{default:t(()=>[u(s(ue),{value:s(r),"onUpdate:value":m[0]||(m[0]=g=>ve(r)?r.value=g:r=g),size:"medium"},{"checked-icon":t(()=>[u(s(U),{component:s(ye)},null,8,["component"])]),"unchecked-icon":t(()=>[u(s(U),{component:s(be)},null,8,["component"])]),_:1},8,["value"])]),_:1})])]),_:1}),u(s(H),{"has-sider":"",style:{height:"calc(100vh - 65px)"}},{default:t(()=>[u(s(ne),{bordered:"","collapse-mode":"width","collapsed-width":64,width:240,collapsed:s(Q),"show-trigger":"",onCollapse:m[1]||(m[1]=g=>s(_e)(!0)),onExpand:m[2]||(m[2]=g=>s(_e)(!1))},{default:t(()=>[u(s(oe),{collapsed:s(Q),"collapsed-width":64,"collapsed-icon-size":22,options:s(ie),"render-label":s($t),"render-icon":s(Bt),"onUpdate:value":_,value:n.value},null,8,["collapsed","options","render-label","render-icon","value"])]),_:1},8,["collapsed"]),u(s(H),null,{default:t(()=>[k("div",null,[(p(!0),$(L,null,P(s(d),g=>(p(),C(s(ae),{closable:g.closable,bordered:!1,key:g.key,onClose:G=>B(g.key),type:g.actived?"success":"default"},{default:t(()=>[k("span",{onClick:G=>A(g.key)},S(g.name),9,At)]),_:2},1032,["closable","onClose","type"]))),128))]),u(s(ge),{style:{"max-height":"calc(100vh - 94px)"}},{default:t(()=>[(p(),C(W,null,[u(x)],1024))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["theme"])}}}),Nt={};function xt(e,n){const a=i("router-view");return p(),C(a)}var Lt=N(Nt,[["render",xt]]);const St=k("h2",null,"Congb19's Toolbox",-1),Mt=E({setup(e){function n(_){return()=>w(U,null,{default:()=>w(_)})}const a=V();a.value="Congb19's Toolbox";const l=Z(),r=F("/tools/keyboard");r.value=l.currentRoute.value.fullPath;const c=[{label:()=>w(I,{to:{path:"/tools/keyboard"}},{default:()=>"\u952E\u76D8\u68C0\u6D4B\u5DE5\u5177"}),key:"/tools/keyboard",icon:n(Ce)},{label:()=>w(I,{to:{path:"/tools/sysinfo"}},{default:()=>"\u7CFB\u7EDF\u57FA\u672C\u4FE1\u606F"}),key:"/tools/sysinfo",icon:n(Ee)}];return(_,f)=>{const y=i("n-menu"),d=i("router-view");return p(),C(s(le),null,{default:t(()=>[u(s(H),{embedded:"","content-style":"padding: 24px;",class:"cb-background"},{default:t(()=>[u(s(M),null,{default:t(()=>[u(s(M),null,{default:t(()=>[St,u(y,{options:c,value:r.value,"onUpdate:value":f[0]||(f[0]=b=>r.value=b),mode:"horizontal"},null,8,["value"])]),_:1}),u(s(M),null,{default:t(()=>[u(d)]),_:1})]),_:1})]),_:1})]),_:1})}}});var Ot="/assets/sayu.faf5430a.jpg";const It=E({name:"HelloWorld",props:{msg:{type:String,required:!1}},setup:()=>({count:F(0)})}),Tt=k("img",{alt:"logo",width:"200",src:Ot},null,-1),Ht=o("\u4F60\u5728\u70E6\u607C\u4EC0\u4E48\u5462"),Pt=o("\u8FD9\u91CC\u662FCongb19\u7684\u5C0F\u7AD9\uFF01\u5927\u5BB6\u8981\u5929\u5929\u5F00\u5FC3"),Rt=o("\u6709\u70E6\u607C\u8BF7\u968F\u65F6\u8054\u7CFB\u6211\uFF1A"),Ut=o(" \u6084\u6084\u804A \u{1F6EB}: "),zt=o("@Congb19"),Wt=o(" \u8D85\u79C1\u4EBA\u7684 \u{1F4E7} : "),Kt=o("linyc@congb19.com"),qt=o("\u5DF2\u5B9E\u73B0\u7684\u5C0F\u529F\u80FD \uFF1A"),jt=o(" \u5C0F\u5DE5\u5177\u7BB1 \u{1F527}\uFF1A "),Qt=o("Congb19's Toolbox"),Gt=o(" \u6697\u9ED1\u6A21\u5F0F\u81EA\u52A8\u9002\u914D + \u624B\u52A8\u5207\u6362\uFF08\u2198\uFF09 "),Vt=o("\u6211\u7684\u5176\u4ED6\u7AD9\uFF1A"),Jt=o(" \u5199\u5C0F\u4F5C\u6587\u7684\u5730\u65B9\uFF1A "),Xt=o("Congb19\u7684\u535A\u5BA2"),Yt=o("\u788E\u788E\u5FF5\uFF1A"),Zt=o("\u8FD9\u4E2A\u7F51\u7AD9\u4E0D\u77E5\u9053\u5199\u70B9\u4EC0\u4E48\u4E86\u{1F62D}\uFF0C\u8D70\u8FC7\u8DEF\u8FC7\uFF0C\u6765\u70B9 IDEA \u5427~~");function eu(e,n,a,l,r,c){const _=i("n-h1"),f=i("n-h2"),y=i("n-divider"),d=i("n-a"),b=i("n-li"),B=i("router-link"),A=i("n-p");return p(),$(L,null,[Tt,u(_,null,{default:t(()=>[Ht]),_:1}),u(f,null,{default:t(()=>[Pt]),_:1}),u(y,{"title-placement":"center"},{default:t(()=>[Rt]),_:1}),u(b,null,{default:t(()=>[Ut,u(d,{target:"_blank",href:"http://t.me/Congb19"},{default:t(()=>[zt]),_:1})]),_:1}),u(b,null,{default:t(()=>[Wt,u(d,{href:"mailto:linyc@congb19.com"},{default:t(()=>[Kt]),_:1})]),_:1}),u(y,{"title-placement":"center"},{default:t(()=>[qt]),_:1}),u(b,null,{default:t(()=>[jt,u(B,{to:"/tools"},{default:t(()=>[Qt]),_:1})]),_:1}),u(b,null,{default:t(()=>[Gt]),_:1}),u(y,{"title-placement":"center"},{default:t(()=>[Vt]),_:1}),u(b,null,{default:t(()=>[Jt,u(d,{target:"_blank",href:"https://blog.congb19.com"},{default:t(()=>[Xt]),_:1})]),_:1}),u(y,{"title-placement":"center"},{default:t(()=>[Yt]),_:1}),u(A,null,{default:t(()=>[Zt]),_:1})],64)}var tu=N(It,[["render",eu]]);const uu=o(" wall item "),nu=E({setup(e){return(n,a)=>{const l=i("n-card");return p(),C(l,{title:"asd",size:"medium"},{default:t(()=>[uu]),_:1})}}});var ou=N(nu,[["__scopeId","data-v-5f80d8a8"]]);const au=E({setup(e){const n=F(null);console.log(n);let a=F(!1),l=T({x:0,y:0});const r=d=>{},c=d=>{a.value=!0,l={x:d.x,y:d.y},console.log("dragStart",l)},_=d=>{},f=d=>{a.value=!1,console.log("dragStop")},y=F({mousedown:c,mousemove:a.value?_:r,mouseup:f});return(d,b)=>(p(),$("div",$e({ref_key:"self",ref:n,class:"cb-pool"},Be(y.value)),[u(ou)],16))}});var su=N(au,[["__scopeId","data-v-38e369d7"]]);const lu={baseURL:"http://www.congb19.com/api"},pe=ke.create(lu),ru=async(e,n,a)=>{let l;switch(e){case"GET":l=await pe.get(n);break;case"POST":l=await pe.post(n,a);break}return{status:l.status,data:l.data}},cu={auth:{login:"/auth/login"},kbn:{getHappinessList:"/kbn/getHappinessList",postKbn:"/kbn/postKbn"}},du=async e=>await ru("POST",cu.auth.login,e),iu={debug:!0,state_auth:T({message:F("testmsg"),auth:{isAdmin:!0,token:""}}),state_app:T({path:F("/")}),resetAuth(){this.state_auth.auth.token="",this.state_auth.auth.isAdmin=!1},async signIn(e){(await du(e)).status==200}},_u=E({props:{info:{type:Object}},setup:()=>{console.log("kbn-item")}});function pu(e,n,a,l,r,c){return p(),$("div")}var hu=N(_u,[["render",pu]]);const fu=E({components:{KbnItem:hu},setup:()=>{const e=re();let n=F(1),a=F(!1),l=F(!1),r=F({}),c=F({type:0,content:"",contact_info:"",author_name:""}),_=F({type:1,content:"",contact_info:"",author_name:""}),f=F([{floor:1,content:"\u4ECA\u5929\u5403\u4E86\u996D",created_time:"20210924",author_name:"lyc"}]);const y=async()=>{},d=()=>{let h=new Date(2021,8,24);n.value=Math.ceil((Date.now()-h.getTime())/(1e3*60*60*24))},b=()=>{console.log("\u6B22\u8FCE\u5927\u5BB6\u5149\u4E34\uFF01\u5DF2\u8425\u4E1A",n.value,"\u5929")},B=async()=>{console.log("handle happy",c.value),e.warning("dbq\uFF0C\u6211\u8FD8\u6CA1\u5199\u5B8C\uFF0C\u6240\u4EE5\u8FD8\u5206\u4EAB\u4E0D\u4E86QAQ",{duration:4e3}),a.value=!1},A=()=>{e.warning("dbq\uFF0C\u6211\u8FD8\u6CA1\u5199\u5B8C\uFF0C\u6240\u4EE5\u8FD8\u5206\u4EAB\u4E0D\u4E86QAQ",{duration:4e3}),a.value=!1};return K(async()=>{d(),b(),await y()}),{store:iu,openDays:n,modalStyle:r,happyForm:c,worryForm:_,showHappyModal:a,showWorryModal:l,happinessList:f,handleHappy:B,handleWorry:A}}}),mu=o("Congb19 \u7684\u89E3\u5FE7\u6742\u8D27\u94FA "),Fu=o(" \u{1F6EB} "),vu=o(" \u6211\u8981\u5206\u4EAB\u5FEB\u4E50 "),yu=o(" \u{1F4A2} "),bu=o(" \u6211\u6709\u70E6\u607C\u6C42\u52A9 "),gu=o(" \u6635\u79F0 \u{1F600} "),Eu=o(" \u5FEB\u4E50 \u{1F36C} "),Cu=o(" \u8054\u7CFB\u65B9\u5F0F \u{1F4E7} "),$u=o(" \u{1F6EB} "),Bu=o(" \u5206\u4EAB "),ku=o(" \u6635\u79F0 \u{1F36A} "),Du=o(" \u70E6\u607C \u2601 "),Au=o(" \u8054\u7CFB\u65B9\u5F0F \u{1F4E7} "),wu=o(" \u{1F6EB} "),Nu=o(" \u53D1\u9001 ");function xu(e,n,a,l,r,c){const _=i("n-card"),f=i("n-h1"),y=i("n-button"),d=i("n-button-group"),b=i("kbn-item"),B=i("n-input"),A=i("n-modal");return p(),$(L,null,[u(_,{class:"cb-kbn__opendays"},{default:t(()=>[o("\u5DF2\u8425\u4E1A "+S(e.openDays)+" \u5929",1)]),_:1}),u(f,null,{default:t(()=>[mu]),_:1}),u(d,{size:"large"},{default:t(()=>[u(y,{type:"success",round:"",onClick:n[0]||(n[0]=h=>e.showHappyModal=!0)},{icon:t(()=>[Fu]),default:t(()=>[vu]),_:1}),u(y,{type:"error",round:"",onClick:n[1]||(n[1]=h=>e.showWorryModal=!0)},{icon:t(()=>[yu]),default:t(()=>[bu]),_:1})]),_:1}),(p(!0),$(L,null,P(e.happinessList,h=>(p(),C(b,{info:h},null,8,["info"]))),256)),u(A,{class:"cb-modal",show:e.showHappyModal,"onUpdate:show":n[5]||(n[5]=h=>e.showHappyModal=h),preset:"card",style:ce(e.modalStyle),title:"\u5206\u4EAB\u5FEB\u4E50\uFF01",size:"medium",bordered:!1},{footer:t(()=>[u(y,{type:"success",round:"",onClick:e.handleHappy},{icon:t(()=>[$u]),default:t(()=>[Bu]),_:1},8,["onClick"])]),default:t(()=>[u(B,{value:e.happyForm.author_name,"onUpdate:value":n[2]||(n[2]=h=>e.happyForm.author_name=h),placeholder:"\u8BE5\u600E\u4E48\u79F0\u547C\u4F60\uFF1F\u6211\u53EB Congb19"},{prefix:t(()=>[gu]),_:1},8,["value"]),u(B,{value:e.happyForm.content,"onUpdate:value":n[3]||(n[3]=h=>e.happyForm.content=h),type:"textarea",placeholder:"\u4ECA\u5929\u559D\u4E86\u5965\u5965\u6930\u6930\u5496\u5561\uFF0C\u7279\u522B\u597D\u559D"},{prefix:t(()=>[Eu]),_:1},8,["value"]),u(B,{value:e.happyForm.contact_info,"onUpdate:value":n[4]||(n[4]=h=>e.happyForm.contact_info=h),placeholder:"\u5982\u679C\u4F60\u4E0D\u613F\u610F\u5C55\u793A\u51FA\u6765\u88AB\u4EBA\u9A9A\u6270\uFF0C\u53EF\u4EE5\u4E0D\u5199"},{prefix:t(()=>[Cu]),_:1},8,["value"])]),_:1},8,["show","style"]),u(A,{class:"cb-modal",show:e.showWorryModal,"onUpdate:show":n[9]||(n[9]=h=>e.showWorryModal=h),preset:"card",style:ce(e.modalStyle),title:"\u89E3\u51B3\u70E6\u607C\uFF01",size:"medium",bordered:!1},{footer:t(()=>[u(y,{type:"success",round:"",onClick:e.handleWorry},{icon:t(()=>[wu]),default:t(()=>[Nu]),_:1},8,["onClick"])]),default:t(()=>[u(B,{value:e.worryForm.author_name,"onUpdate:value":n[6]||(n[6]=h=>e.worryForm.author_name=h),placeholder:"\u8BE5\u600E\u4E48\u79F0\u547C\u4F60\uFF1F\u6211\u53EB Congb19"},{prefix:t(()=>[ku]),_:1},8,["value"]),u(B,{value:e.worryForm.content,"onUpdate:value":n[7]||(n[7]=h=>e.worryForm.content=h),type:"textarea",placeholder:"\u4ECA\u5929\u8BF7\u5C0F\u59D0\u59D0\u53BB\u770B\u7535\u5F71\uFF0C\u7ED3\u679C\u88AB \u{1F54A} \u4E86"},{prefix:t(()=>[Du]),_:1},8,["value"]),u(B,{value:e.worryForm.contact_info,"onUpdate:value":n[8]||(n[8]=h=>e.worryForm.contact_info=h),placeholder:"\u5982\u679C\u6211\u80FD\u5E2E\u5230\u4F60\uFF0C\u6211\u4F1A\u6765\u627E\u4F60\u7684\uFF01"},{prefix:t(()=>[Au]),_:1},8,["value"])]),_:1},8,["show","style"])],64)}var Lu=N(fu,[["render",xu],["__scopeId","data-v-01bb9298"]]);const Su=E({components:{},setup:()=>{const e=re(),n="404";let a=F({title:"404 \u8D44\u6E90\u4E0D\u5B58\u5728",description:"\u751F\u6D3B\u603B\u5F52\u5E26\u70B9\u8352\u8C2C",btn_content:"\u4E3A\u4EC0\u4E48\uFF1F"});const l=()=>{e.info("\u4E5F\u8BB8\u662F\u6211\u8FD8\u6CA1\u5199\u597D\uFF0C\u522B\u6025\uFF01")},r=De();return console.log(r.meta.status),{status:a,code:n,why:l}}});function Mu(e,n,a,l,r,c){const _=i("n-button"),f=i("n-result");return p(),C(f,{class:"cb-result",status:e.code,title:e.status.title,description:e.status.description},{footer:t(()=>[u(_,{onClick:e.why},{default:t(()=>[o(S(e.status.btn_content),1)]),_:1},8,["onClick"])]),_:1},8,["status","title","description"])}var z=N(Su,[["render",Mu],["__scopeId","data-v-1ae5b851"]]);const Ou=u("button",null,[o("hello")]);var Iu=E({setup(){},render(){return u("div",null,[Ou])}});const Tu=E({}),Hu=o("dashboard");function Pu(e,n,a,l,r,c){const _=i("n-card");return p(),C(_,null,{default:t(()=>[Hu]),_:1})}var Ru=N(Tu,[["render",Pu]]);const Uu={},zu=o("admin index");function Wu(e,n){const a=i("n-card");return p(),C(a,{style:{height:"2000px"}},{default:t(()=>[zu]),_:1})}var Ku=N(Uu,[["render",Wu]]);const qu={};function ju(e,n){return p(),$("div",null,"combo introduce")}var Qu=N(qu,[["render",ju]]);const Gu=E({setup(e){return(n,a)=>(p(),$("div",null,"combo index"))}}),Vu=k("h3",null,"Holding:",-1),Ju=k("span",null,"\xA0",-1),Xu=k("h3",null,"Status:",-1),Yu=k("h3",null,"Help:",-1),Zu=o("\u6309\u952E\u5373\u53EF\u68C0\u6D4B\uFF1B"),en=o("fn\u952E\u4E00\u822C\u4E3A\u952E\u76D8\u5185\u7F6E\u529F\u80FD\u952E\uFF0C\u65E0\u6CD5\u68C0\u6D4B\uFF1B"),tn=o("\u65E0\u6CD5\u963B\u6B62\u7CFB\u7EDF\u884C\u4E3A\u7684\u53D1\u751F\uFF0C\u4F8B\u5982 Alt/Command + Tab \u7B49\uFF1B"),un=o("\u65E0\u6CD5\u963B\u6B62\u90E8\u5206\u6D4F\u89C8\u5668\u884C\u4E3A\u7684\u53D1\u751F\uFF0C\u4F8B\u5982 Control/Command + W \u7B49\uFF1B"),nn=o("Mac\u952E\u4F4D\u5BF9\u5E94\uFF1ACommand->meta, option->alt\u3002"),on=E({setup(e){const n=q("CapsLock"),a=q("NumLock"),l=q("ScrollLock"),r=["F1","F3","F5","F6","F7","F10","F11","F12","Tab"],c=Ae({passive:!1,reactive:!0,onEventFired(f){f.altKey&&f.preventDefault(),f.ctrlKey&&f.preventDefault(),r.indexOf(f.key)>=0&&f.preventDefault()}}),{current:_}=c;return(f,y)=>(p(),$(L,null,[Vu,Ju,(p(!0),$(L,null,P(s(_).values(),d=>(p(),$("span",null,S(d)+", ",1))),256)),Xu,u(s(D),null,{default:t(()=>[o(S(" CapsLock: "+s(n)),1)]),_:1}),u(s(D),null,{default:t(()=>[o(S(" NumLock: "+s(a)),1)]),_:1}),u(s(D),null,{default:t(()=>[o(S(" ScrollLock: "+s(l)),1)]),_:1}),Yu,u(s(D),null,{default:t(()=>[Zu]),_:1}),u(s(D),null,{default:t(()=>[en]),_:1}),u(s(D),null,{default:t(()=>[tn]),_:1}),u(s(D),null,{default:t(()=>[un]),_:1}),u(s(D),null,{default:t(()=>[nn]),_:1})],64))}}),an=k("h3",null,"System:",-1),sn=k("h3",null,"Browser:",-1),ln=k("h3",null,"Help:",-1),rn=o("\u5206\u8FA8\u7387\u4E3A\u903B\u8F91\u50CF\u7D20\uFF0C\u5373 \u5206\u8FA8\u7387=\u5C4F\u5E55\u5206\u8FA8\u7387/\u603B\u7F29\u653E\u500D\u7387\uFF1B"),cn=o("\u603B\u7F29\u653E\u500D\u7387=\u7CFB\u7EDF\u7F29\u653E\u500D\u7387\xD7\u6D4F\u89C8\u5668\u7F29\u653E\u500D\u7387\uFF08\u4F8B\u5982\uFF0C\u7CFB\u7EDF125%\uFF0C\u6D4F\u89C8\u5668100%\uFF0C\u5219\u603B1.25\uFF09\uFF1B"),dn=E({setup(e){const n=we(),a=Ne(),l=xe(),r=Le(),c=Se(),_=T({system:[{label:"\u7F51\u7EDC\u5728\u7EBF",value:n},{label:"\u662F\u5426\u6709\u7535\u6C60",value:a.isSupported},{label:"\u7535\u91CF",value:a.level}],browser:[{label:"\u5237\u65B0\u7387",value:l},{label:"\u5206\u8FA8\u7387(\u5BBD)",value:r.width},{label:"\u5206\u8FA8\u7387(\u9AD8)",value:r.height},{label:"\u603B\u7F29\u653E\u500D\u7387",value:c.pixelRatio}]});return console.log(_),(f,y)=>(p(),$(L,null,[an,(p(!0),$(L,null,P(s(_).system,d=>(p(),C(s(D),null,{default:t(()=>[o(S(d.label+": "+d.value),1)]),_:2},1024))),256)),sn,(p(!0),$(L,null,P(s(_).browser,d=>(p(),C(s(D),null,{default:t(()=>[o(S(d.label+": "+d.value),1)]),_:2},1024))),256)),ln,u(s(D),null,{default:t(()=>[rn]),_:1}),u(s(D),null,{default:t(()=>[cn]),_:1})],64))}}),_n=k("div",null,"app index",-1),pn=o("\u6309\u94AE!"),hn=E({setup(e){return(n,a)=>{const l=i("van-button");return p(),$(L,null,[_n,u(l,{type:"primary"},{default:t(()=>[pn]),_:1})],64)}}}),fn=[{path:"/login",component:pt},{path:"/app",component:Ct,children:[{path:"",component:hn}]},{path:"/admin",component:wt,children:[{path:"dashboard",component:Ru},{path:"",component:Ku},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"/combo",component:Lt,children:[{path:"introduce",component:Qu},{path:"",component:Gu},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"/top",component:gt,children:[{path:"wall",component:su},{path:"kbn",component:Lu},{path:"tsxtest",component:Iu},{path:"",component:tu},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"/tools",component:Mt,children:[{path:"keyboard",component:on},{path:"sysinfo",component:dn},{path:"",redirect:"/tools/keyboard"},{path:":pathMatch(.*)",component:z,meta:{status:"404"}}]},{path:"",redirect:"/top"}],he=Me({history:Oe(),routes:fn});const R=Ie(it);R.use(he);const mn=Te({components:[He,Pe,O,se,H,Re,Ue,te,ne,oe,M,ee,le,ue,ze,We,Ke,qe,je,Qe,D,Ge,Ve,Je,Xe,Ye,Ze,et,tt,ut,nt,ot,at,ae]});R.use(mn);R.use(st);R.use(lt);R.mount("#app");
