import{a6 as M,a7 as S,a8 as N,a9 as z,aa as W,ab as $,d as F,ac as q,r as x,a0 as k,e as f,A as G,ad as D,ae as K,q as U,af as Q,ag as X,ah as Y,B as v,ai as J,aj as Z,h as ee,i as te,u as re,C as A,Q as B,o as ae,_ as se}from"./index.ce1c9435.js";import{a as oe}from"./index.83f7d8fe.js";const ne=M("n-avatar-group"),ie=S("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[N(z("&","--n-merged-color: var(--n-color-modal);")),W(z("&","--n-merged-color: var(--n-color-popover);")),z("img",`
 width: 100%;
 height: 100%;
 `),$("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),S("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),$("text","line-height: 1.25")]),le=Object.assign(Object.assign({},G.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String}),ce=F({name:"Avatar",props:le,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:o}=q(e),s=x(!1);let l=null;const d=x(null),R=x(null),L=()=>{const{value:t}=d;if(t&&(l===null||l!==t.innerHTML)){l=t.innerHTML;const{value:a}=R;if(a){const{offsetWidth:u,offsetHeight:i}=a,{offsetWidth:n,offsetHeight:p}=t,m=.9,y=Math.min(u/n*m,i/p*m,1);t.style.transform=`translateX(-50%) translateY(-50%) scale(${y})`}}},h=k(ne,null),T=f(()=>{const{size:t}=e;if(t)return t;const{size:a}=h||{};return a||"medium"}),E=G("Avatar","-avatar",ie,D,e,r),C=k(K,null),b=f(()=>{if(h)return!0;const{round:t,circle:a}=e;return t!==void 0||a!==void 0?t||a:C?C.roundRef.value:!1}),j=f(()=>h?!0:e.bordered||!1),H=t=>{s.value=!0;const{onError:a}=e;a&&a(t)};U(()=>e.src,()=>s.value=!1);const w=f(()=>{const t=T.value,a=b.value,u=j.value,{color:i}=e,{self:{borderRadius:n,fontSize:p,color:m,border:y,colorModal:I,colorPopover:O},common:{cubicBezierEaseInOut:V}}=E.value;let _;return typeof t=="number"?_=`${t}px`:_=E.value.self[Q("height",t)],{"--n-font-size":p,"--n-border":u?y:"none","--n-border-radius":a?"50%":n,"--n-color":i||m,"--n-color-modal":i||I,"--n-color-popover":i||O,"--n-bezier":V,"--n-merged-size":`var(--n-avatar-size-override, ${_})`}}),c=o?X("avatar",f(()=>{const t=T.value,a=b.value,u=j.value,{color:i}=e;let n="";return t&&(typeof t=="number"?n+=`a${t}`:n+=t[0]),a&&(n+="b"),u&&(n+="c"),i&&(n+=Y(i)),n}),w,e):void 0;return{textRef:d,selfRef:R,mergedRoundRef:b,mergedClsPrefix:r,fitTextTransform:L,cssVars:o?void 0:w,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,hasLoadError:s,handleError:H}},render(){const{$slots:e,src:r,mergedClsPrefix:o,onRender:s}=this;s==null||s();let l;return this.hasLoadError?l=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):l=J(e.default,d=>{if(d)return v(Z,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${o}-avatar__text`},d)});if(r)return v("img",{src:r,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${o}-avatar`,this.themeClass],style:this.cssVars},l)}}),be="/assets/klee.9b3e8b2b.jpeg",de={class:"cbapp-avatar"},ue={class:"avatar__name"},fe={class:"avatar__time"},ve=F({props:{info:{type:Object,required:!0}},setup(e){return(r,o)=>(ae(),ee("div",de,[te(re(ce),{round:"",size:"small",src:e.info.src},null,8,["src"]),A("div",ue,B(e.info.name),1),A("div",fe,B(e.info.time),1)]))}});const pe=se(ve,[["__scopeId","data-v-cfa869db"]]),ge={baseURL:"http://api.congb19.com:8003/api"},P=oe.create(ge),g=async(e,r,o)=>{let s;switch(e){case"GET":s=await P.get(r);break;case"POST":s=await P.post(r,o);break}return console.log(s),s},ye={getClubs:async()=>(await g("GET","/app/getClubs")).data,getTools:async e=>(await g("GET",`/app/getTools?id=${e}`)).data,getPins:async e=>(await g("GET",`/app/getPins?id=${e}`)).data,getArticles:async(e,r)=>(await g("GET",`/app/getArticles?id=${e}&count=${r}`)).data},_e={getArticleDetail:async(e,r)=>(await g("GET",`/app/getArticleDetail?id=${e}&count=${r}`)).data};export{_e as A,ye as P,pe as a,be as k};
