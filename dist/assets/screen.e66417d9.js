import{d as _t,j as Rt}from"./index.36151d14.js";import{a6 as Pt,a7 as zt,a8 as kt,a9 as Ge,aa as It,A as Dt,C as Nt,ab as Vt,d as J,ac as fe,r as I,ad as Et,E as y,ae as Tt,e as h,k as Je,z as Qe,af as $t,ag as c,ah as T,ai as d,aj as je,ak as At,al as Bt,am as Ft,an as Mt,q as ue,n as Oe,D as et,ao as jt,ap as Ot,aq as Lt,ar as Le,as as Xe,at as Xt,au as Kt,av as Yt,a3 as tt,aw as Ut,ax as Z,ay as H,a as Ke,g as Re,h as q,w as G,u as Pe,V as Ye,F as Wt,o as ze,S as Zt,b as ve}from"./index.fee06a51.js";function Ht(e){return Pt(zt(e).toLowerCase())}var qt=kt(function(e,a,o){return a=a.toLowerCase(),e+(o?Ht(a):a)});const Ue=qt;function Gt(e){const{length:a}=e;return a>1&&(e.push(We(e[0],0,"append")),e.unshift(We(e[a-1],a-1,"prepend"))),e}function We(e,a,o){return Ge(e,{key:`carousel-item-duplicate-${a}-${o}`})}function Ze(e,a,o){return o?e===0?a-3:e===a-1?0:e-1:e}function ke(e,a){return a?e+1:e}function Jt(e,a,o){return e<0?null:e===0?o?a-1:null:e-1}function Qt(e,a,o){return e>a-1?null:e===a-1?o?0:null:e+1}function en(e,a){return a&&e>3?e-2:e}function He(e){return window.TouchEvent&&e instanceof window.TouchEvent}function qe(e,a){let{offsetWidth:o,offsetHeight:r}=e;if(a){const v=getComputedStyle(e);o=o-parseFloat(v.getPropertyValue("padding-left"))-parseFloat(v.getPropertyValue("padding-right")),r=r-parseFloat(v.getPropertyValue("padding-top"))-parseFloat(v.getPropertyValue("padding-bottom"))}return{width:o,height:r}}function ce(e,a,o){return e<a?a:e>o?o:e}function tn(e){if(e===void 0)return 0;if(typeof e=="number")return e;const a=/^((\d+)?\.?\d+?)(ms|s)?$/,o=e.match(a);if(o){const[,r,,v="ms"]=o;return Number(r)*(v==="ms"?1:1e3)}return 0}const nt=Vt("n-carousel-methods"),nn=e=>It(nt,e),De=(e="unknown",a="component")=>{const o=Dt(nt);return o||Nt(e,`\`${a}\` must be placed inside \`n-carousel\`.`),o},on={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},an=J({name:"CarouselDots",props:on,setup(e){const{mergedClsPrefixRef:a}=fe(e),o=I([]),r=De();function v(p,f){switch(p.key){case"Enter":case" ":p.preventDefault(),r.to(f);return}e.keyboard&&S(p)}function m(p){e.trigger==="hover"&&r.to(p)}function x(p){e.trigger==="click"&&r.to(p)}function S(p){var f;if(p.shiftKey||p.altKey||p.ctrlKey||p.metaKey)return;const b=(f=document.activeElement)===null||f===void 0?void 0:f.nodeName.toLowerCase();if(b==="input"||b==="textarea")return;const{code:R}=p,B=R==="PageUp"||R==="ArrowUp",F=R==="PageDown"||R==="ArrowDown",_=R==="PageUp"||R==="ArrowRight",P=R==="PageDown"||R==="ArrowLeft",z=r.isVertical(),$=z?B:_,K=z?F:P;!$&&!K||(p.preventDefault(),$&&!r.isNextDisabled()?(r.next(),C(r.currentIndexRef.value)):K&&!r.isPrevDisabled()&&(r.prev(),C(r.currentIndexRef.value)))}function C(p){var f;(f=o.value[p])===null||f===void 0||f.focus()}return Et(()=>o.value.length=0),{mergedClsPrefix:a,dotEls:o,handleKeydown:v,handleMouseenter:m,handleClick:x}},render(){const{mergedClsPrefix:e,dotEls:a}=this;return y("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Tt(this.total,o=>{const r=o===this.currentIndex;return y("div",{"aria-selected":r,ref:v=>a.push(v),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,r&&`${e}-carousel__dot--active`],key:o,onClick:()=>this.handleClick(o),onMouseenter:()=>this.handleMouseenter(o),onKeydown:v=>this.handleKeydown(v,o)})}))}}),sn=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),ln=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"}))),rn=J({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:a}=fe(e),{isVertical:o,isPrevDisabled:r,isNextDisabled:v,prev:m,next:x}=De();return{mergedClsPrefix:a,isVertical:o,isPrevDisabled:r,isNextDisabled:v,prev:m,next:x}},render(){const{mergedClsPrefix:e}=this;return y("div",{class:`${e}-carousel__arrow-group`},y("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},sn),y("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},ln))}}),de="CarouselItem",un=e=>{var a;return((a=e.type)===null||a===void 0?void 0:a.name)===de},cn=J({name:de,setup(e){const{mergedClsPrefixRef:a}=fe(e),o=De(Ue(de),`n-${Ue(de)}`),r=I(),v=h(()=>{const{value:f}=r;return f?o.getSlideIndex(f):-1}),m=h(()=>o.isPrev(v.value)),x=h(()=>o.isNext(v.value)),S=h(()=>o.isActive(v.value)),C=h(()=>o.getSlideStyle(v.value));Je(()=>o.addSlide(r.value)),Qe(()=>{o.removeSlide(r.value)});function p(f){const{value:b}=v;b!==void 0&&(o==null||o.onCarouselItemClick(b,f))}return{mergedClsPrefix:a,selfElRef:r,isPrev:m,isNext:x,isActive:S,index:v,style:C,handleClick:p}},render(){var e;const{$slots:a,mergedClsPrefix:o,isPrev:r,isNext:v,isActive:m,index:x,style:S}=this,C=[`${o}-carousel__slide`,{[`${o}-carousel__slide--current`]:m,[`${o}-carousel__slide--prev`]:r,[`${o}-carousel__slide--next`]:v}];return y("div",{ref:"selfElRef",class:C,role:"option",tabindex:"-1","data-index":x,"aria-hidden":!m,style:S,onClickCapture:this.handleClick},(e=a.default)===null||e===void 0?void 0:e.call(a,{isPrev:r,isNext:v,isActive:m,index:x}))}}),dn=$t("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[T("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[d("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 background-color: var(--n-dot-color-active);
 `)])]),d("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[T("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),d("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[T("svg",`
 height: 1em;
 width: 1em;
 `),T("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),d("vertical",`
 touch-action: pan-x;
 `,[c("slides",`
 flex-direction: column;
 `),d("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),d("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[d("current",`
 transform: translateY(-50%) translateZ(0);
 `),d("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),d("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),d("usercontrol",[c("slides",[T(">",[T("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),d("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),d("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),d("show-arrow",[d("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),d("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),d("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),d("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[d("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[d("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[T("> *:first-child",`
 margin-bottom: 12px;
 `)])]),d("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),d("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[d("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[T("> *:first-child",`
 margin-right: 12px;
 `)])]),d("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[d("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),d("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[d("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),d("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),d("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]),fn=["transitionDuration","transitionTimingFunction"],vn=Object.assign(Object.assign({},et.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ie=!1;const hn=J({name:"Carousel",props:vn,setup(e){const{mergedClsPrefixRef:a,inlineThemeDisabled:o}=fe(e),r=I(null),v=I(null),m=I([]),x={value:[]},S=h(()=>e.direction==="vertical"),C=h(()=>S.value?"height":"width"),p=h(()=>S.value?"bottom":"right"),f=h(()=>e.effect==="slide"),b=h(()=>e.loop&&e.slidesPerView===1&&f.value),R=h(()=>e.effect==="custom"),B=h(()=>!f.value||e.centeredSlides?1:e.slidesPerView),F=h(()=>R.value?1:e.slidesPerView),_=h(()=>B.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),P=I({width:0,height:0}),z=h(()=>{const{value:t}=m;if(!t.length)return[];const{value:n}=_;if(n)return t.map(w=>qe(w));const{value:s}=F,{value:i}=P,{value:u}=C;let l=i[u];if(s!=="auto"){const{spaceBetween:w}=e,k=l-(s-1)*w,ie=1/Math.max(1,s);l=k*ie}const g=Object.assign(Object.assign({},i),{[u]:l});return t.map(()=>g)}),$=h(()=>{const{value:t}=z;if(!t.length)return[];const{centeredSlides:n,spaceBetween:s}=e,{value:i}=C,{[i]:u}=P.value;let l=0;return t.map(({[i]:g})=>{let w=l;return n&&(w+=(g-u)/2),l+=g+s,w})}),K=I(!1),he=h(()=>{const{transitionStyle:t}=e;return t?je(t,fn):{}}),pe=h(()=>R.value?0:tn(he.value.transitionDuration)),Ne=h(()=>{const{value:t}=m;if(!t.length)return[];const n=!(_.value||F.value===1),s=g=>{if(n){const{value:w}=C;return{[w]:`${z.value[g][w]}px`}}};if(R.value)return t.map((g,w)=>s(w));const{effect:i,spaceBetween:u}=e,{value:l}=p;return t.reduce((g,w,k)=>{const ie=Object.assign(Object.assign({},s(k)),{[`margin-${l}`]:`${u}px`});return g.push(ie),K.value&&(i==="fade"||i==="card")&&Object.assign(ie,he.value),g},[])}),D=h(()=>{const{value:t}=B,{length:n}=m.value;if(t!=="auto")return Math.max(n-t,0)+1;{const{value:s}=z,{length:i}=s;if(!i)return n;const{value:u}=$,{value:l}=C,g=P.value[l];let w=s[s.length-1][l],k=i;for(;k>1&&w<g;)k--,w+=u[k]-u[k-1];return ce(k+1,1,i)}}),Q=h(()=>en(D.value,b.value)),ot=ke(e.defaultIndex,b.value),ge=I(Ze(ot,D.value,b.value)),N=At(Bt(e,"currentIndex"),ge),V=h(()=>ke(N.value,b.value));function Y(t){var n,s;t=ce(t,0,D.value-1);const i=Ze(t,D.value,b.value),{value:u}=N;i!==N.value&&(ge.value=i,(n=e["onUpdate:currentIndex"])===null||n===void 0||n.call(e,i,u),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,i,u))}function ee(t=V.value){return Jt(t,D.value,e.loop)}function te(t=V.value){return Qt(t,D.value,e.loop)}function at(t){const n=j(t);return n!==null&&ee()===n}function st(t){const n=j(t);return n!==null&&te()===n}function Ve(t){return V.value===j(t)}function lt(t){return N.value===t}function Ee(){return ee()===null}function Te(){return te()===null}function xe(t){const n=ce(ke(t,b.value),0,D.value);(t!==N.value||n!==V.value)&&Y(n)}function me(){const t=ee();t!==null&&Y(t)}function ne(){const t=te();t!==null&&Y(t)}function rt(){(!E||!b.value)&&me()}function it(){(!E||!b.value)&&ne()}let E=!1,M=0;const we=I({});function oe(t,n=0){we.value=Object.assign({},he.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${n}ms`})}function U(t=0){f.value?be(V.value,t):M!==0&&(!E&&t>0&&(E=!0),oe(M=0,t))}function be(t,n){const s=$e(t);s!==M&&n>0&&(E=!0),M=$e(V.value),oe(s,n)}function $e(t){let n;return t>=D.value-1?n=Ae():n=$.value[t]||0,n}function Ae(){if(B.value==="auto"){const{value:t}=C,{[t]:n}=P.value,{value:s}=$,i=s[s.length-1];let u;if(i===void 0)u=n;else{const{value:l}=z;u=i+l[l.length-1][t]}return u-n}else{const{value:t}=$;return t[D.value-1]||0}}const W={currentIndexRef:N,to:xe,prev:rt,next:it,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:at,isNext:st,isActive:Ve,isPrevDisabled:Ee,isNextDisabled:Te,getSlideIndex:j,getSlideStyle:dt,addSlide:ut,removeSlide:ct,onCarouselItemClick:ft};nn(W);function ut(t){!t||m.value.push(t)}function ct(t){if(!t)return;const n=j(t);n!==-1&&m.value.splice(n,1)}function j(t){return typeof t=="number"?t:t?m.value.indexOf(t):-1}function dt(t){const n=j(t);if(n!==-1){const s=[Ne.value[n]],i=W.isPrev(n),u=W.isNext(n);return i&&s.push(e.prevSlideStyle||""),u&&s.push(e.nextSlideStyle||""),tt(s)}}function ft(t,n){let s=!E&&!le&&!_e;e.effect==="card"&&s&&!Ve(t)&&(xe(t),s=!1),s||(n.preventDefault(),n.stopPropagation())}let ae=null;function se(){ae&&(clearInterval(ae),ae=null)}function O(){se(),!e.autoplay||Q.value<2||(ae=window.setInterval(ne,e.interval))}let ye=0,Se=0,A=0,Ce=0,le=!1,_e=!1;function Be(t){var n;if(Ie||!(!((n=v.value)===null||n===void 0)&&n.contains(Ut(t))))return;Ie=!0,le=!0,_e=!1,Ce=Date.now(),se(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=He(t)?t.touches[0]:t;S.value?Se=s.clientY:ye=s.clientX,e.touchable&&(Z("touchmove",document,re,{passive:!0}),Z("touchend",document,L),Z("touchcancel",document,L)),e.draggable&&(Z("mousemove",document,re),Z("mouseup",document,L))}function re(t){const{value:n}=S,{value:s}=C,i=He(t)?t.touches[0]:t,u=n?i.clientY-Se:i.clientX-ye,l=P.value[s];A=ce(u,-l,l),t.cancelable&&t.preventDefault(),f.value&&oe(M-A,0)}function L(){const{value:t}=V;let n=t;if(!E&&A!==0&&f.value){const s=M-A,i=[...$.value.slice(0,D.value-1),Ae()];let u=null;for(let l=0;l<i.length;l++){const g=Math.abs(i[l]-s);if(u!==null&&u<g)break;u=g,n=l}}if(n===t){const s=Date.now()-Ce,{value:i}=C,u=P.value[i];A>u/2||A/s>.4?n=ee(t):(A<-u/2||A/s<-.4)&&(n=te(t))}n!==null&&n!==t?(_e=!0,Y(n),Oe(()=>{(!b.value||ge.value!==N.value)&&U(pe.value)})):U(pe.value),Fe(),O()}function Fe(){le&&(Ie=!1),le=!1,ye=0,Se=0,A=0,Ce=0,H("touchmove",document,re),H("touchend",document,L),H("touchcancel",document,L),H("mousemove",document,re),H("mouseup",document,L)}function vt(){if(f.value&&E){const{value:t}=V;be(t,0)}else O();f.value&&(we.value.transitionDuration="0ms"),E=!1}function ht(t){if(t.preventDefault(),E)return;let{deltaX:n,deltaY:s}=t;t.shiftKey&&!n&&(n=s);const i=-1,u=1,l=(n||s)>0?u:i;let g=0,w=0;S.value?w=l:g=l;const k=10;(w*s>=k||g*n>=k)&&(l===u&&!Te()?ne():l===i&&!Ee()&&me())}function pt(){P.value=qe(r.value,!0),O()}function gt(){var t,n;_.value&&((n=(t=z.effect).scheduler)===null||n===void 0||n.call(t),z.effect.run())}function xt(){e.autoplay&&se()}function mt(){e.autoplay&&O()}Je(()=>{Ft(O),requestAnimationFrame(()=>K.value=!0)}),Qe(()=>{Fe(),se()}),Mt(()=>{const{value:t}=m,{value:n}=x,s=new Map,i=l=>s.has(l)?s.get(l):-1;let u=!1;for(let l=0;l<t.length;l++){const g=n.findIndex(w=>w.el===t[l]);g!==l&&(u=!0),s.set(t[l],g)}u&&t.sort((l,g)=>i(l)-i(g))}),ue(V,(t,n)=>{if(t!==n)if(O(),f.value){if(b.value&&Q.value>2){const{value:s}=D;t===s-2&&n===1?t=0:t===1&&n===s-2&&(t=s-1)}be(t,pe.value)}else U()},{immediate:!0}),ue([b,B],()=>void Oe(()=>Y(V.value))),ue($,()=>f.value&&U(),{deep:!0}),ue(f,t=>{t?U():(E=!1,oe(M=0))});const wt=h(()=>({onTouchstartPassive:e.touchable?Be:void 0,onMousedown:e.draggable?Be:void 0,onWheel:e.mousewheel?ht:void 0})),bt=h(()=>Object.assign(Object.assign({},je(W,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:Q.value,currentIndex:N.value})),yt=h(()=>({total:Q.value,currentIndex:N.value,to:W.to})),St={getCurrentIndex:()=>N.value,to:xe,prev:me,next:ne},Ct=et("Carousel","-carousel",dn,jt,e,a),Me=h(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:n,dotColor:s,dotColorActive:i,dotColorFocus:u,dotLineWidth:l,dotLineWidthActive:g,arrowColor:w}}=Ct.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":u,"--n-dot-color-active":i,"--n-dot-size":n,"--n-dot-line-width":l,"--n-dot-line-width-active":g,"--n-arrow-color":w}}),X=o?Ot("carousel",void 0,Me,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:a,selfElRef:r,slidesElRef:v,slideVNodes:x,duplicatedable:b,userWantsControl:R,autoSlideSize:_,displayIndex:N,realIndex:V,slideStyles:Ne,translateStyle:we,slidesControlListeners:wt,handleTransitionEnd:vt,handleResize:pt,handleSlideResize:gt,handleMouseenter:xt,handleMouseleave:mt,isActive:lt,arrowSlotProps:bt,dotSlotProps:yt},St),{cssVars:o?void 0:Me,themeClass:X==null?void 0:X.themeClass,onRender:X==null?void 0:X.onRender})},render(){var e;const{mergedClsPrefix:a,showArrow:o,userWantsControl:r,slideStyles:v,dotType:m,dotPlacement:x,slidesControlListeners:S,transitionProps:C={},arrowSlotProps:p,dotSlotProps:f,$slots:{default:b,dots:R,arrow:B}}=this,F=b&&Lt(b())||[];let _=pn(F);return _.length||(_=F.map(P=>y(cn,null,{default:()=>Ge(P)}))),this.duplicatedable&&(_=Gt(_)),this.slideVNodes.value=_,this.autoSlideSize&&(_=_.map(P=>y(Le,{onResize:this.handleSlideResize},{default:()=>P}))),(e=this.onRender)===null||e===void 0||e.call(this),y("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${a}-carousel`,this.direction==="vertical"&&`${a}-carousel--vertical`,this.showArrow&&`${a}-carousel--show-arrow`,`${a}-carousel--${x}`,`${a}-carousel--${this.direction}`,`${a}-carousel--${this.effect}`,r&&`${a}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),y(Le,{onResize:this.handleResize},{default:()=>y("div",{ref:"slidesElRef",class:`${a}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},r?_.map((P,z)=>y("div",{style:v[z],key:z},Xt(y(Yt,Object.assign({},C),{default:()=>P}),[[Kt,this.isActive(z)]]))):_)}),this.showDots&&f.total>1&&Xe(R,f,()=>[y(an,{key:m+x,total:f.total,currentIndex:f.currentIndex,dotType:m,trigger:this.trigger,keyboard:this.keyboard})]),o&&Xe(B,p,()=>[y(rn,null)]))}});function pn(e){return e.reduce((a,o)=>(un(o)&&a.push(o),a),[])}const gn=ve("\u5F00\u59CB"),xn=Wt("h3",null,"Help:",-1),mn=ve("\u70B9\u51FB\u201C\u5F00\u59CB\u201D\u6309\u94AE\u5F00\u59CB\u5168\u5C4F\u68C0\u6D4B"),wn=ve("\u4F7F\u7528\u2190\u3001\u2192\u65B9\u5411\u952E\u63A7\u5236\u663E\u793A\u989C\u8272"),bn=ve("\u70B9\u51FBesc\u952E\u53EF\u9000\u51FA\u5168\u5C4F"),Cn=J({setup(e){let a=I(null),o=I(0);I(!1);const r=["#FAFAFC","red","blue","green","white","#777777","black","linear-gradient(#e66465, #9198e5)",`linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`],v=h(()=>r.map(x=>({width:"100vw",height:"100vh",background:x})));_t({passive:!1,reactive:!0,onEventFired(x){x.type=="keyup"&&(x.key=="ArrowLeft"&&(o.value--,o.value<0&&(o.value+=r.length)),x.key=="ArrowRight"&&(o.value++,o.value=o.value%r.length))}});const m=async()=>{const{enter:x,isFullscreen:S}=Rt(a);await x()};return(x,S)=>{const C=Ke("n-button"),p=Ke("n-li");return ze(),Re(Ye,null,[q(Pe(hn),{ref_key:"el",ref:a,id:"screen-tester","show-arrow":!1,"show-dots":!1,"current-index":Pe(o)},{default:G(()=>[(ze(!0),Re(Ye,null,Zt(Pe(v),f=>(ze(),Re("div",{style:tt(f)},null,4))),256))]),_:1},8,["current-index"]),q(C,{onClick:m},{default:G(()=>[gn]),_:1}),xn,q(p,null,{default:G(()=>[mn]),_:1}),q(p,null,{default:G(()=>[wn]),_:1}),q(p,null,{default:G(()=>[bn]),_:1})],64)}}});export{Cn as default};
