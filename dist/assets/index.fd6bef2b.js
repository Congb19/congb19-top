import{d as k,e as A,k as T,a3 as S,o as p,g as b,H as v,h as e,w as s,c as g,u as l,a4 as M,a5 as f,a6 as N,a7 as z,a8 as V,a9 as E,b as o,X as $,aa as U,ab as j,ac as X,r as I,ad as G,a as m,Y as H,ae as O}from"./index.0f0c22b3.js";const P={class:"c-message-wrapper"},Y={class:"c-message__icon"},q={name:"CMessage"},J=k({...q,props:{type:{default:"info"},msg:null,duration:{default:5e3},destroy:null,closable:{type:Boolean,default:!1}},setup(u){const t=u,n=A(()=>`c-message
    c-message-${t.type}
  `),i=A(()=>`var(--c-color-${t.type=="info"?"primary":t.type}-1)`),a=A(()=>({"--c-message-padding":`0 ${t.closable?"44":"20"}px 0 44px`}));return T(()=>{t.duration&&setTimeout(()=>{t.destroy()},t.duration)}),S(()=>{}),(F,d)=>(p(),b("div",P,[v("div",{class:j(l(n)),style:X(l(a))},[v("div",Y,[e(l(E),{size:20,color:l(i)},{default:s(()=>[u.type=="success"?(p(),g(l(M),{key:0})):f("",!0),u.type=="info"?(p(),g(l(N),{key:1})):f("",!0),u.type=="warning"?(p(),g(l(z),{key:2})):f("",!0),u.type=="error"?(p(),g(l(V),{key:3})):f("",!0)]),_:1},8,["color"])]),o(" "+$(u.msg)+" ",1),u.closable?(p(),b("span",{key:0,class:"c-message__close",onClick:d[0]||(d[0]=()=>u.destroy())},[e(l(E),{size:20,color:l(i)},{default:s(()=>[e(l(U))]),_:1},8,["color"])])):f("",!0)],6)]))}});var K=Object.defineProperty,L=(u,t,n)=>t in u?K(u,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[t]=n,_=(u,t,n)=>(L(u,typeof t!="symbol"?t+"":t,n),n);const x=new Map,B=new Map,w=new Map;let D=1;class Q{info(t,n){new y().create(t,"info",n)}error(t,n){new y().create(t,"error",n)}success(t,n){new y().create(t,"success",n)}warning(t,n){new y().create(t,"warning",n)}}class y{constructor(){_(this,"component",J),_(this,"instance"),_(this,"id",0),_(this,"div",null),_(this,"props",null),_(this,"top",I(68)),_(this,"containerStyle")}create(t,n,i){this.id=D,D++;let a={type:n,position:"mid"};typeof t=="string"?a.msg=t:a={...a,...t,msg:t.msg?t.msg:""},i&&(a.duration=i),this.props=a;let F=document.createElement("div");this.div=document.getElementById("c-message-provider").appendChild(F),this.div.className="c-message-container";let d=a.position=="mid"?x:a.position=="left"?B:w;d.set(this.id,this);let h=a.position=="mid"?"left: 50%; transform: translateX(-50%);":a.position=="left"?"left: 0px":"right: 0px";this.containerStyle=A(()=>{let c=0;return d.forEach((r,C)=>{C<this.id&&(c+=r.top.value)}),h+"; top: "+c+"px"}),this.recalcTop(),this.instance=G(this.component,{...a,destroy:()=>this.destroy.call(this)}),this.instance.mount(this.div)}destroy(){let t=this.props.position=="mid"?x:this.props.position=="left"?B:w;if(t.has(this.id)){this.div.className="c-message-container c-message-container-hide";let n=setInterval(()=>{this.top.value<=0&&clearInterval(n),this.recalcTop(),t.forEach((i,a)=>{a>this.id&&i.recalcTop()}),this.top.value-=2},6);setTimeout(()=>{var i;this.instance.unmount(),(i=document.getElementById("c-message-provider"))==null||i.removeChild(this.div),t.delete(this.id)},400)}}recalcTop(){this.div.style=this.containerStyle.value}}const R=()=>new Q,W="/assets/sayu.faf5430a.jpg",Z=v("img",{alt:"logo",width:"200",src:W},null,-1),tt=o("\u4F60\u5728\u70E6\u607C\u4EC0\u4E48\u5462"),et=o("\u8FD9\u91CC\u662FCongb19\u7684\u5C0F\u7AD9\uFF01\u5927\u5BB6\u8981\u5929\u5929\u5F00\u5FC3"),st=o("\u{1F41F} \u7535\u5B50\u6728\u9C7C"),ot=o("\u6211\u7684\u5176\u4ED6\u7AD9"),nt=o(" Combo UI \u2699\uFF1A "),ut=o("@Combo UI"),at=o(" \u6587\u6863\u548C\u535A\u5BA2\u7AD9 \u{1F4C2}\uFF1A "),lt=o("@blog"),it=o(" Github \u{1F431}\uFF1A "),ct=o("@Congb19"),rt=o(" \u89E3\u5FE7\u6742\u8D27\u94FA \u{1F3EA}\uFF1A "),dt=o("@\u89E3\u5FE7\u6742\u8D27\u94FA"),_t=o("\u6709\u70E6\u607C\u5417\uFF1F"),pt=o(" \u6084\u6084\u804A: "),ht=o("@Congb19"),mt=o(" \u79C1\u4EBA\u90AE\u7BB1 \u{1F4E7} : "),ft=o("linyc@congb19.com"),Ft=o("\u5C0F\u529F\u80FD"),gt=o(" \u5C0F\u5DE5\u5177\u7BB1 \u{1F527}\uFF1A "),yt=o("@Toolbox"),At=o(" \u6697\u9ED1\u6A21\u5F0F\uFF08\u2198\uFF09 "),Ct=o("\u788E\u788E\u5FF5"),bt=o("\u8FD9\u4E2A\u7F51\u7AD9\u4E0D\u77E5\u9053\u5199\u70B9\u4EC0\u4E48\u4E86\u{1F62D}\uFF0C\u8D70\u8FC7\u8DEF\u8FC7\uFF0C\u6765\u70B9 IDEA \u5427~~"),Et=k({setup(u){const t=R(),n=I(0);return(i,a)=>{const F=m("n-h1"),d=m("n-h2"),h=m("n-divider"),c=m("n-a"),r=m("n-li"),C=m("n-p");return p(),b(H,null,[Z,e(F,null,{default:s(()=>[tt]),_:1}),e(d,null,{default:s(()=>[et]),_:1}),e(l(O),{type:"success",clean:"",onC_click:a[0]||(a[0]=()=>{l(t).success("\u529F\u5FB7+1"),n.value++})},{default:s(()=>[st]),_:1}),o("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u529F\u5FB7\uFF1A"+$(n.value)+" ",1),e(h,{"title-placement":"center"},{default:s(()=>[ot]),_:1}),e(r,null,{default:s(()=>[nt,e(c,{target:"_blank",href:"https://combo.congb19.com"},{default:s(()=>[ut]),_:1})]),_:1}),e(r,null,{default:s(()=>[at,e(c,{target:"_blank",href:"https://blog.congb19.com"},{default:s(()=>[lt]),_:1})]),_:1}),e(r,null,{default:s(()=>[it,e(c,{target:"_blank",href:"https://github.com/Congb19"},{default:s(()=>[ct]),_:1})]),_:1}),e(r,null,{default:s(()=>[rt,e(c,{href:"/top/kbn"},{default:s(()=>[dt]),_:1})]),_:1}),e(h,{"title-placement":"center"},{default:s(()=>[_t]),_:1}),e(r,null,{default:s(()=>[pt,e(c,{target:"_blank",href:"http://t.me/Congb19"},{default:s(()=>[ht]),_:1})]),_:1}),e(r,null,{default:s(()=>[mt,e(c,{href:"mailto:linyc@congb19.com"},{default:s(()=>[ft]),_:1})]),_:1}),e(h,{"title-placement":"center"},{default:s(()=>[Ft]),_:1}),e(r,null,{default:s(()=>[gt,e(c,{target:"_blank",href:"/tools"},{default:s(()=>[yt]),_:1})]),_:1}),e(r,null,{default:s(()=>[At]),_:1}),e(h,{"title-placement":"center"},{default:s(()=>[Ct]),_:1}),e(C,null,{default:s(()=>[bt]),_:1})],64)}}});export{Et as default};