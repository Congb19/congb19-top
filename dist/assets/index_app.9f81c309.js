import{a7 as D,a8 as F,a9 as q,aa as P,ab as K,ac as $,d as H,ad as U,r as y,A,e as z,D as N,ae as X,af as Y,q as J,ag as Q,ah as Z,ai as ee,k as te,aj as S,ak as ae,al as re,z as oe,am as ne,E as _,an as se,ao as ie,g as le,h as ce,u as de,F as B,U as I,o as ue,_ as fe}from"./index.07845d0c.js";import{a as ve}from"./index.83f7d8fe.js";const he=D("n-avatar-group"),ge=F("avatar",`
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
`,[q(P("&","--n-merged-color: var(--n-color-modal);")),K(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),$("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),F("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),$("text","line-height: 1.25")]),be=Object.assign(Object.assign({},N.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),me=H({name:"Avatar",props:be,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:i}=U(t),n=y(!1);let d=null;const g=y(null),c=y(null),T=()=>{const{value:e}=g;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:a}=c;if(a){const{offsetWidth:s,offsetHeight:r}=a,{offsetWidth:l,offsetHeight:j}=e,R=.9,k=Math.min(s/l*R,r/j*R,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${k})`}}},b=A(he,null),m=z(()=>{const{size:e}=t;if(e)return e;const{size:a}=b||{};return a||"medium"}),E=N("Avatar","-avatar",ge,X,t,o),u=A(Y,null),f=z(()=>{if(b)return!0;const{round:e,circle:a}=t;return e!==void 0||a!==void 0?e||a:u?u.roundRef.value:!1}),p=z(()=>b?!0:t.bordered||!1),v=e=>{var a;if(!L.value)return;n.value=!0;const{onError:s,imgProps:r}=t;(a=r==null?void 0:r.onError)===null||a===void 0||a.call(r,e),s&&s(e)};J(()=>t.src,()=>n.value=!1);const w=z(()=>{const e=m.value,a=f.value,s=p.value,{color:r}=t,{self:{borderRadius:l,fontSize:j,color:R,border:k,colorModal:M,colorPopover:V},common:{cubicBezierEaseInOut:W}}=E.value;let O;return typeof e=="number"?O=`${e}px`:O=E.value.self[Q("height",e)],{"--n-font-size":j,"--n-border":s?k:"none","--n-border-radius":a?"50%":l,"--n-color":r||R,"--n-color-modal":r||M,"--n-color-popover":r||V,"--n-bezier":W,"--n-merged-size":`var(--n-avatar-size-override, ${O})`}}),h=i?Z("avatar",z(()=>{const e=m.value,a=f.value,s=p.value,{color:r}=t;let l="";return e&&(typeof e=="number"?l+=`a${e}`:l+=e[0]),a&&(l+="b"),s&&(l+="c"),r&&(l+=ee(r)),l}),w,t):void 0,L=y(!t.lazy);te(()=>{if(S)return;let e;const a=ae(()=>{e==null||e(),e=void 0,t.lazy&&(e=re(c.value,t.intersectionObserverOptions,L))});oe(()=>{a(),e==null||e()})});const C=y(!t.lazy);return{textRef:g,selfRef:c,mergedRoundRef:f,mergedClsPrefix:o,fitTextTransform:T,cssVars:i?void 0:w,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender,hasLoadError:n,handleError:v,shouldStartLoading:L,loaded:C,mergedOnLoad:e=>{var a;const{onLoad:s,imgProps:r}=t;s==null||s(e),(a=r==null?void 0:r.onLoad)===null||a===void 0||a.call(r,e),C.value=!0}}},render(){var t,o;const{$slots:i,src:n,mergedClsPrefix:d,lazy:g,onRender:c,mergedOnLoad:T,shouldStartLoading:b,loaded:m,hasLoadError:E}=this;c==null||c();let u;const f=!m&&!E&&(this.renderPlaceholder?this.renderPlaceholder():(o=(t=this.$slots).placeholder)===null||o===void 0?void 0:o.call(t));return this.hasLoadError?u=this.renderFallback?this.renderFallback():ne(i.fallback,()=>[_("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):u=se(i.default,p=>{if(p)return _(ie,{onResize:this.fitTextTransform},{default:()=>_("span",{ref:"textRef",class:`${d}-avatar__text`},p)});if(n){const{imgProps:v}=this;return _("img",Object.assign(Object.assign({},v),{loading:S&&!this.intersectionObserverOptions&&g?"lazy":"eager",src:S||b||m?n:void 0,onLoad:T,"data-image-src":n,onError:this.handleError,style:[v==null?void 0:v.style,{objectFit:this.objectFit},f?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),_("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},u,g&&f)}}),Te="/assets/klee.9b3e8b2b.jpeg",pe={class:"cbapp-avatar"},ye={class:"avatar__name"},ze={class:"avatar__time"},_e=H({props:{info:{type:Object,required:!0}},setup(t){return(o,i)=>(ue(),le("div",pe,[ce(de(me),{round:"",size:"small",src:t.info.src},null,8,["src"]),B("div",ye,I(t.info.name),1),B("div",ze,I(t.info.time),1)]))}});const Le=fe(_e,[["__scopeId","data-v-cfa869db"]]),xe={baseURL:"http://api.congb19.com:8003/api"},G=ve.create(xe),x=async(t,o,i)=>{let n;switch(t){case"GET":n=await G.get(o);break;case"POST":n=await G.post(o,i);break}return console.log(n),n},je={getClubs:async()=>(await x("GET","/app/getClubs")).data,getTools:async t=>(await x("GET",`/app/getTools?id=${t}`)).data,getPins:async t=>(await x("GET",`/app/getPins?id=${t}`)).data,getArticles:async(t,o)=>(await x("GET",`/app/getArticles?id=${t}&count=${o}`)).data},ke={getArticleDetail:async(t,o)=>(await x("GET",`/app/getArticleDetail?id=${t}&count=${o}`)).data};export{ke as A,je as P,Le as a,Te as k};
