// ==UserScript==
// @name         Hex Course Helper
// @namespace    
// @version      0.01
// @author       Hex Yans
// @description  Hex Course Helper
// @license      MIT
// @icon         https://cdn.nodeimage.com/i/8vygBRNBN0vG9E2aaeShetE6NmQr58UZ.webp
// @match        *://*.chaoxing.com/*
// @match        *://*.edu.cn/*
// @match        *://*.nbdlib.cn/*
// @match         *://*.hnsyu.net/*
// @match        *://*.gdhkmooc.com/*
// @match        *://*.zhihuishu.com/*
// @connect      *
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==


/* ==========================================================================
 * Bundled dependency: Vue 3.4.31 (dist/vue.global.prod.js)
 * Source : npm package vue@3.4.31 (MIT)
 * sha256 : ddcac15cb7f94c59b0ffbe0a2fb40b355ff468b2804c5631ed6214030ef3d2fa
 * This block is byte-for-byte identical to the npm artifact -- verify with:
 *   node -e "..." or any sha256 tool. Do not edit it by hand.
 * ========================================================================== */
/**
* vue v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/var Vue=function(e){"use strict";let t,n,r,i,l,s,o,a,c;/*! #__NO_SIDE_EFFECTS__ */function u(e,t){let n=new Set(e.split(","));return t?e=>n.has(e.toLowerCase()):e=>n.has(e)}let d={},p=[],h=()=>{},f=()=>!1,m=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&(e.charCodeAt(2)>122||97>e.charCodeAt(2)),g=e=>e.startsWith("onUpdate:"),y=Object.assign,b=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},_=Object.prototype.hasOwnProperty,S=(e,t)=>_.call(e,t),x=Array.isArray,C=e=>"[object Map]"===L(e),k=e=>"[object Set]"===L(e),T=e=>"[object Date]"===L(e),w=e=>"[object RegExp]"===L(e),E=e=>"function"==typeof e,A=e=>"string"==typeof e,N=e=>"symbol"==typeof e,I=e=>null!==e&&"object"==typeof e,R=e=>(I(e)||E(e))&&E(e.then)&&E(e.catch),O=Object.prototype.toString,L=e=>O.call(e),$=e=>L(e).slice(8,-1),M=e=>"[object Object]"===L(e),P=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,F=u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),V=u("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),B=e=>{let t=Object.create(null);return n=>t[n]||(t[n]=e(n))},D=/-(\w)/g,U=B(e=>e.replace(D,(e,t)=>t?t.toUpperCase():"")),j=/\B([A-Z])/g,H=B(e=>e.replace(j,"-$1").toLowerCase()),q=B(e=>e.charAt(0).toUpperCase()+e.slice(1)),W=B(e=>e?`on${q(e)}`:""),K=(e,t)=>!Object.is(e,t),z=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},G=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},J=e=>{let t=parseFloat(e);return isNaN(t)?e:t},X=e=>{let t=A(e)?Number(e):NaN;return isNaN(t)?e:t},Q=()=>t||(t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}),Z=u("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error");function Y(e){if(x(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=A(r)?er(r):Y(r);if(i)for(let e in i)t[e]=i[e]}return t}if(A(e)||I(e))return e}let ee=/;(?![^(]*\))/g,et=/:([^]+)/,en=/\/\*[^]*?\*\//g;function er(e){let t={};return e.replace(en,"").split(ee).forEach(e=>{if(e){let n=e.split(et);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function ei(e){let t="";if(A(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){let r=ei(e[n]);r&&(t+=r+" ")}else if(I(e))for(let n in e)e[n]&&(t+=n+" ");return t.trim()}let el=u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot"),es=u("svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view"),eo=u("annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics"),ea=u("area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr"),ec=u("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function eu(e,t){if(e===t)return!0;let n=T(e),r=T(t);if(n||r)return!!n&&!!r&&e.getTime()===t.getTime();if(n=N(e),r=N(t),n||r)return e===t;if(n=x(e),r=x(t),n||r)return!!n&&!!r&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=eu(e[r],t[r]);return n}(e,t);if(n=I(e),r=I(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!eu(e[n],t[n]))return!1}}return String(e)===String(t)}function ed(e,t){return e.findIndex(e=>eu(e,t))}let ep=e=>!!(e&&!0===e.__v_isRef),eh=e=>A(e)?e:null==e?"":x(e)||I(e)&&(e.toString===O||!E(e.toString))?ep(e)?eh(e.value):JSON.stringify(e,ef,2):String(e),ef=(e,t)=>ep(t)?ef(e,t.value):C(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[em(t,r)+" =>"]=n,e),{})}:k(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>em(e))}:N(t)?em(t):!I(t)||x(t)||M(t)?t:String(t),em=(e,t="")=>{var n;return N(e)?`Symbol(${null!=(n=e.description)?n:t})`:e};class eg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=n,!e&&n&&(this.index=(n.scopes||(n.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){let t=n;try{return n=this,e()}finally{n=t}}}on(){n=this}off(){n=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this._active=!1}}}function ey(e,t=n){t&&t.active&&t.effects.push(e)}class ev{constructor(e,t,n,r){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ey(this,r)}get dirty(){if(2===this._dirtyLevel||3===this._dirtyLevel){this._dirtyLevel=1,eT();for(let e=0;e<this._depsLength;e++){let t=this.deps[e];if(t.computed&&(t.computed.value,this._dirtyLevel>=4))break}1===this._dirtyLevel&&(this._dirtyLevel=0),ew()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ex,t=r;try{return ex=!0,r=this,this._runnings++,eb(this),this.fn()}finally{e_(this),this._runnings--,r=t,ex=e}}stop(){this.active&&(eb(this),e_(this),this.onStop&&this.onStop(),this.active=!1)}}function eb(e){e._trackId++,e._depsLength=0}function e_(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)eS(e.deps[t],e);e.deps.length=e._depsLength}}function eS(e,t){let n=e.get(t);void 0!==n&&t._trackId!==n&&(e.delete(t),0===e.size&&e.cleanup())}let ex=!0,eC=0,ek=[];function eT(){ek.push(ex),ex=!1}function ew(){let e=ek.pop();ex=void 0===e||e}function eE(){for(eC--;!eC&&eN.length;)eN.shift()()}function eA(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);let n=e.deps[e._depsLength];n!==t?(n&&eS(n,e),e.deps[e._depsLength++]=t):e._depsLength++}}let eN=[];function eI(e,t,n){for(let n of(eC++,e.keys())){let r;n._dirtyLevel<t&&(null!=r?r:r=e.get(n)===n._trackId)&&(n._shouldSchedule||(n._shouldSchedule=0===n._dirtyLevel),n._dirtyLevel=t),n._shouldSchedule&&(null!=r?r:r=e.get(n)===n._trackId)&&(n.trigger(),(!n._runnings||n.allowRecurse)&&2!==n._dirtyLevel&&(n._shouldSchedule=!1,n.scheduler&&eN.push(n.scheduler)))}eE()}let eR=(e,t)=>{let n=new Map;return n.cleanup=e,n.computed=t,n},eO=new WeakMap,eL=Symbol(""),e$=Symbol("");function eM(e,t,n){if(ex&&r){let t=eO.get(e);t||eO.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=eR(()=>t.delete(n))),eA(r,i)}}function eP(e,t,n,r,i,l){let s=eO.get(e);if(!s)return;let o=[];if("clear"===t)o=[...s.values()];else if("length"===n&&x(e)){let e=Number(r);s.forEach((t,n)=>{("length"===n||!N(n)&&n>=e)&&o.push(t)})}else switch(void 0!==n&&o.push(s.get(n)),t){case"add":x(e)?P(n)&&o.push(s.get("length")):(o.push(s.get(eL)),C(e)&&o.push(s.get(e$)));break;case"delete":!x(e)&&(o.push(s.get(eL)),C(e)&&o.push(s.get(e$)));break;case"set":C(e)&&o.push(s.get(eL))}for(let e of(eC++,o))e&&eI(e,4);eE()}let eF=u("__proto__,__v_isRef,__isVue"),eV=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>"arguments"!==e&&"caller"!==e).map(e=>Symbol[e]).filter(N)),eB=function(){let e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){let n=ty(this);for(let e=0,t=this.length;e<t;e++)eM(n,"get",e+"");let r=n[t](...e);return -1===r||!1===r?n[t](...e.map(ty)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){eT(),eC++;let n=ty(this)[t].apply(this,e);return eE(),ew(),n}}),e}();function eD(e){N(e)||(e=String(e));let t=ty(this);return eM(t,"has",e),t.hasOwnProperty(e)}class eU{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){let r=this._isReadonly,i=this._isShallow;if("__v_isReactive"===t)return!r;if("__v_isReadonly"===t)return r;if("__v_isShallow"===t)return i;if("__v_raw"===t)return n===(r?i?ta:to:i?ts:tl).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let l=x(e);if(!r){if(l&&S(eB,t))return Reflect.get(eB,t,n);if("hasOwnProperty"===t)return eD}let s=Reflect.get(e,t,n);return(N(t)?eV.has(t):eF(t))?s:(r||eM(e,"get",t),i)?s:tk(s)?l&&P(t)?s:s.value:I(s)?r?td(s):tc(s):s}}class ej extends eU{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t];if(!this._isShallow){let t=tf(i);if(tm(n)||tf(n)||(i=ty(i),n=ty(n)),!x(e)&&tk(i)&&!tk(n))return!t&&(i.value=n,!0)}let l=x(e)&&P(t)?Number(t)<e.length:S(e,t),s=Reflect.set(e,t,n,r);return e===ty(r)&&(l?K(n,i)&&eP(e,"set",t,n):eP(e,"add",t,n)),s}deleteProperty(e,t){let n=S(e,t);e[t];let r=Reflect.deleteProperty(e,t);return r&&n&&eP(e,"delete",t,void 0),r}has(e,t){let n=Reflect.has(e,t);return N(t)&&eV.has(t)||eM(e,"has",t),n}ownKeys(e){return eM(e,"iterate",x(e)?"length":eL),Reflect.ownKeys(e)}}class eH extends eU{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}let eq=new ej,eW=new eH,eK=new ej(!0),ez=new eH(!0),eG=e=>e,eJ=e=>Reflect.getPrototypeOf(e);function eX(e,t,n=!1,r=!1){let i=ty(e=e.__v_raw),l=ty(t);n||(K(t,l)&&eM(i,"get",t),eM(i,"get",l));let{has:s}=eJ(i),o=r?eG:n?t_:tb;return s.call(i,t)?o(e.get(t)):s.call(i,l)?o(e.get(l)):void(e!==i&&e.get(t))}function eQ(e,t=!1){let n=this.__v_raw,r=ty(n),i=ty(e);return t||(K(e,i)&&eM(r,"has",e),eM(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function eZ(e,t=!1){return e=e.__v_raw,t||eM(ty(e),"iterate",eL),Reflect.get(e,"size",e)}function eY(e){e=ty(e);let t=ty(this);return eJ(t).has.call(t,e)||(t.add(e),eP(t,"add",e,e)),this}function e0(e,t){t=ty(t);let n=ty(this),{has:r,get:i}=eJ(n),l=r.call(n,e);l||(e=ty(e),l=r.call(n,e));let s=i.call(n,e);return n.set(e,t),l?K(t,s)&&eP(n,"set",e,t):eP(n,"add",e,t),this}function e1(e){let t=ty(this),{has:n,get:r}=eJ(t),i=n.call(t,e);i||(e=ty(e),i=n.call(t,e)),r&&r.call(t,e);let l=t.delete(e);return i&&eP(t,"delete",e,void 0),l}function e2(){let e=ty(this),t=0!==e.size,n=e.clear();return t&&eP(e,"clear",void 0,void 0),n}function e3(e,t){return function(n,r){let i=this,l=i.__v_raw,s=ty(l),o=t?eG:e?t_:tb;return e||eM(s,"iterate",eL),l.forEach((e,t)=>n.call(r,o(e),o(t),i))}}function e6(e,t,n){return function(...r){let i=this.__v_raw,l=ty(i),s=C(l),o="entries"===e||e===Symbol.iterator&&s,a=i[e](...r),c=n?eG:t?t_:tb;return t||eM(l,"iterate","keys"===e&&s?e$:eL),{next(){let{value:e,done:t}=a.next();return t?{value:e,done:t}:{value:o?[c(e[0]),c(e[1])]:c(e),done:t}},[Symbol.iterator](){return this}}}}function e4(e){return function(...t){return"delete"!==e&&("clear"===e?void 0:this)}}let[e8,e5,e9,e7]=function(){let e={get(e){return eX(this,e)},get size(){return eZ(this)},has:eQ,add:eY,set:e0,delete:e1,clear:e2,forEach:e3(!1,!1)},t={get(e){return eX(this,e,!1,!0)},get size(){return eZ(this)},has:eQ,add:eY,set:e0,delete:e1,clear:e2,forEach:e3(!1,!0)},n={get(e){return eX(this,e,!0)},get size(){return eZ(this,!0)},has(e){return eQ.call(this,e,!0)},add:e4("add"),set:e4("set"),delete:e4("delete"),clear:e4("clear"),forEach:e3(!0,!1)},r={get(e){return eX(this,e,!0,!0)},get size(){return eZ(this,!0)},has(e){return eQ.call(this,e,!0)},add:e4("add"),set:e4("set"),delete:e4("delete"),clear:e4("clear"),forEach:e3(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=e6(i,!1,!1),n[i]=e6(i,!0,!1),t[i]=e6(i,!1,!0),r[i]=e6(i,!0,!0)}),[e,n,t,r]}();function te(e,t){let n=t?e?e7:e9:e?e5:e8;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(S(n,r)&&r in t?n:t,r,i)}let tt={get:te(!1,!1)},tn={get:te(!1,!0)},tr={get:te(!0,!1)},ti={get:te(!0,!0)},tl=new WeakMap,ts=new WeakMap,to=new WeakMap,ta=new WeakMap;function tc(e){return tf(e)?e:tp(e,!1,eq,tt,tl)}function tu(e){return tp(e,!1,eK,tn,ts)}function td(e){return tp(e,!0,eW,tr,to)}function tp(e,t,n,r,i){if(!I(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;let l=i.get(e);if(l)return l;let s=e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}($(e));if(0===s)return e;let o=new Proxy(e,2===s?r:n);return i.set(e,o),o}function th(e){return tf(e)?th(e.__v_raw):!!(e&&e.__v_isReactive)}function tf(e){return!!(e&&e.__v_isReadonly)}function tm(e){return!!(e&&e.__v_isShallow)}function tg(e){return!!e&&!!e.__v_raw}function ty(e){let t=e&&e.__v_raw;return t?ty(t):e}function tv(e){return Object.isExtensible(e)&&G(e,"__v_skip",!0),e}let tb=e=>I(e)?tc(e):e,t_=e=>I(e)?td(e):e;class tS{constructor(e,t,n,r){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ev(()=>e(this._value),()=>tC(this,2===this.effect._dirtyLevel?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){let e=ty(this);return(!e._cacheable||e.effect.dirty)&&K(e._value,e._value=e.effect.run())&&tC(e,4),tx(e),e.effect._dirtyLevel>=2&&tC(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function tx(e){var t;ex&&r&&(e=ty(e),eA(r,null!=(t=e.dep)?t:e.dep=eR(()=>e.dep=void 0,e instanceof tS?e:void 0)))}function tC(e,t=4,n,r){let i=(e=ty(e)).dep;i&&eI(i,t)}function tk(e){return!!(e&&!0===e.__v_isRef)}function tT(e){return tw(e,!1)}function tw(e,t){return tk(e)?e:new tE(e,t)}class tE{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ty(e),this._value=t?e:tb(e)}get value(){return tx(this),this._value}set value(e){let t=this.__v_isShallow||tm(e)||tf(e);K(e=t?e:ty(e),this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=t?e:tb(e),tC(this,4))}}function tA(e){return tk(e)?e.value:e}let tN={get:(e,t,n)=>tA(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return tk(i)&&!tk(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function tI(e){return th(e)?e:new Proxy(e,tN)}class tR{constructor(e){this.dep=void 0,this.__v_isRef=!0;let{get:t,set:n}=e(()=>tx(this),()=>tC(this));this._get=t,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function tO(e){return new tR(e)}class tL{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){let e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return function(e,t){let n=eO.get(e);return n&&n.get(t)}(ty(this._object),this._key)}}class t${constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function tM(e,t,n){let r=e[t];return tk(r)?r:new tL(e,t,n)}function tP(e,t,n,r){try{return r?e(...r):e()}catch(e){tV(e,t,n)}}function tF(e,t,n,r){if(E(e)){let i=tP(e,t,n,r);return i&&R(i)&&i.catch(e=>{tV(e,t,n)}),i}if(x(e)){let i=[];for(let l=0;l<e.length;l++)i.push(tF(e[l],t,n,r));return i}}function tV(e,t,n,r=!0){if(t&&t.vnode,t){let r=t.parent,i=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(!1===t[n](e,i,l))return}r=r.parent}let s=t.appContext.config.errorHandler;if(s){eT(),tP(s,null,10,[e,i,l]),ew();return}}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let tB=!1,tD=!1,tU=[],tj=0,tH=[],tq=null,tW=0,tK=Promise.resolve(),tz=null;function tG(e){let t=tz||tK;return e?t.then(this?e.bind(this):e):t}function tJ(e){tU.length&&tU.includes(e,tB&&e.allowRecurse?tj+1:tj)||(null==e.id?tU.push(e):tU.splice(function(e){let t=tj+1,n=tU.length;for(;t<n;){let r=t+n>>>1,i=tU[r],l=t0(i);l<e||l===e&&i.pre?t=r+1:n=r}return t}(e.id),0,e),tX())}function tX(){tB||tD||(tD=!0,tz=tK.then(function e(t){tD=!1,tB=!0,tU.sort(t1);try{for(tj=0;tj<tU.length;tj++){let e=tU[tj];e&&!1!==e.active&&tP(e,null,14)}}finally{tj=0,tU.length=0,tY(),tB=!1,tz=null,(tU.length||tH.length)&&e()}}))}function tQ(e){x(e)?tH.push(...e):tq&&tq.includes(e,e.allowRecurse?tW+1:tW)||tH.push(e),tX()}function tZ(e,t,n=tB?tj+1:0){for(;n<tU.length;n++){let t=tU[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;tU.splice(n,1),n--,t()}}}function tY(e){if(tH.length){let e=[...new Set(tH)].sort((e,t)=>t0(e)-t0(t));if(tH.length=0,tq){tq.push(...e);return}for(tW=0,tq=e;tW<tq.length;tW++){let e=tq[tW];!1!==e.active&&e()}tq=null,tW=0}}let t0=e=>null==e.id?1/0:e.id,t1=(e,t)=>{let n=t0(e)-t0(t);if(0===n){if(e.pre&&!t.pre)return -1;if(t.pre&&!e.pre)return 1}return n};function t2(e,t,...n){let r;if(e.isUnmounted)return;let i=e.vnode.props||d,l=n,s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){let{number:e,trim:t}=i[`${"modelValue"===o?"model":o}Modifiers`]||d;t&&(l=n.map(e=>A(e)?e.trim():e)),e&&(l=n.map(J))}let a=i[r=W(t)]||i[r=W(U(t))];!a&&s&&(a=i[r=W(H(t))]),a&&tF(a,e,6,l);let c=i[r+"Once"];if(c){if(e.emitted){if(e.emitted[r])return}else e.emitted={};e.emitted[r]=!0,tF(c,e,6,l)}}function t3(e,t){return!!(e&&m(t))&&(S(e,(t=t.slice(2).replace(/Once$/,""))[0].toLowerCase()+t.slice(1))||S(e,H(t))||S(e,t))}let t6=null,t4=null;function t8(e){let t=t6;return t6=e,t4=e&&e.type.__scopeId||null,t}function t5(e,t=t6,n){if(!t||e._n)return e;let r=(...n)=>{let i;r._d&&(r9+=-1);let l=t8(t);try{i=e(...n)}finally{t8(l),r._d&&(r9+=1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function t9(e){let t,n;let{type:r,vnode:i,proxy:l,withProxy:s,propsOptions:[o],slots:a,attrs:c,emit:u,render:d,renderCache:p,props:h,data:f,setupState:m,ctx:y,inheritAttrs:b}=e,_=t8(e);try{if(4&i.shapeFlag){let e=s||l;t=id(d.call(e,e,p,h,m,f,y)),n=c}else t=id(r.length>1?r(h,{attrs:c,slots:a,emit:u}):r(h,null)),n=r.props?c:t7(c)}catch(n){r6.length=0,tV(n,e,1),t=io(r2)}let S=t;if(n&&!1!==b){let e=Object.keys(n),{shapeFlag:t}=S;e.length&&7&t&&(o&&e.some(g)&&(n=ne(n,o)),S=ic(S,n,!1,!0))}return i.dirs&&((S=ic(S,null,!1,!0)).dirs=S.dirs?S.dirs.concat(i.dirs):i.dirs),i.transition&&(S.transition=i.transition),t=S,t8(_),t}let t7=e=>{let t;for(let n in e)("class"===n||"style"===n||m(n))&&((t||(t={}))[n]=e[n]);return t},ne=(e,t)=>{let n={};for(let r in e)g(r)&&r.slice(9) in t||(n[r]=e[r]);return n};function nt(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let l=r[i];if(t[l]!==e[l]&&!t3(n,l))return!0}return!1}function nn({vnode:e,parent:t},n){for(;t;){let r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}let nr="components",ni=Symbol.for("v-ndc");function nl(e,t,n=!0,r=!1){let i=t6||ib;if(i){let n=i.type;if(e===nr){let e=iR(n,!1);if(e&&(e===t||e===U(t)||e===q(U(t))))return n}let l=ns(i[e]||n[e],t)||ns(i.appContext[e],t);return!l&&r?n:l}}function ns(e,t){return e&&(e[t]||e[U(t)]||e[q(U(t))])}let no=e=>e.__isSuspense,na=0;function nc(e,t){let n=e.props&&e.props[t];E(n)&&n()}function nu(e,t,n,r,i,l,s,o,a,c,u=!1){let d;let{p:p,m:h,um:f,n:m,o:{parentNode:g,remove:y}}=c,b=function(e){let t=e.props&&e.props.suspensible;return null!=t&&!1!==t}(e);b&&t&&t.pendingBranch&&(d=t.pendingId,t.deps++);let _=e.props?X(e.props.timeout):void 0,S=l,x={vnode:e,parent:t,parentComponent:n,namespace:s,container:r,hiddenContainer:i,deps:0,pendingId:na++,timeout:"number"==typeof _?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(e=!1,n=!1){let{vnode:r,activeBranch:i,pendingBranch:s,pendingId:o,effects:a,parentComponent:c,container:u}=x,p=!1;x.isHydrating?x.isHydrating=!1:e||((p=i&&s.transition&&"out-in"===s.transition.mode)&&(i.transition.afterLeave=()=>{o===x.pendingId&&(h(s,u,l===S?m(i):l,0),tQ(a))}),i&&(g(i.el)!==x.hiddenContainer&&(l=m(i)),f(i,c,x,!0)),p||h(s,u,l,0)),nh(x,s),x.pendingBranch=null,x.isInFallback=!1;let y=x.parent,_=!1;for(;y;){if(y.pendingBranch){y.effects.push(...a),_=!0;break}y=y.parent}_||p||tQ(a),x.effects=[],b&&t&&t.pendingBranch&&d===t.pendingId&&(t.deps--,0!==t.deps||n||t.resolve()),nc(r,"onResolve")},fallback(e){if(!x.pendingBranch)return;let{vnode:t,activeBranch:n,parentComponent:r,container:i,namespace:l}=x;nc(t,"onFallback");let s=m(n),c=()=>{x.isInFallback&&(p(null,e,i,s,r,null,l,o,a),nh(x,e))},u=e.transition&&"out-in"===e.transition.mode;u&&(n.transition.afterLeave=c),x.isInFallback=!0,f(n,r,null,!0),u||c()},move(e,t,n){x.activeBranch&&h(x.activeBranch,e,t,n),x.container=e},next:()=>x.activeBranch&&m(x.activeBranch),registerDep(e,t,n){let r=!!x.pendingBranch;r&&x.deps++;let i=e.vnode.el;e.asyncDep.catch(t=>{tV(t,e,0)}).then(l=>{if(e.isUnmounted||x.isUnmounted||x.pendingId!==e.suspenseId)return;e.asyncResolved=!0;let{vnode:o}=e;iT(e,l,!1),i&&(o.el=i);let a=!i&&e.subTree.el;t(e,o,g(i||e.subTree.el),i?null:m(e.subTree),x,s,n),a&&y(a),nn(e,o.el),r&&0==--x.deps&&x.resolve()})},unmount(e,t){x.isUnmounted=!0,x.activeBranch&&f(x.activeBranch,n,e,t),x.pendingBranch&&f(x.pendingBranch,n,e,t)}};return x}function nd(e){let t;if(E(e)){let n=r9&&e._c;n&&(e._d=!1,r8()),e=e(),n&&(e._d=!0,t=r4,r5())}return x(e)&&(e=function(e,t=!0){let n;for(let t=0;t<e.length;t++){let r=e[t];if(!it(r))return;if(r.type!==r2||"v-if"===r.children){if(n)return;n=r}}return n}(e)),e=id(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(t=>t!==e)),e}function np(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):tQ(e)}function nh(e,t){e.activeBranch=t;let{vnode:n,parentComponent:r}=e,i=t.el;for(;!i&&t.component;)i=(t=t.component.subTree).el;n.el=i,r&&r.subTree===n&&(r.vnode.el=i,nn(r,i))}function nf(e,t,n=ib,r=!1){if(n){let i=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...r)=>{eT();let i=iS(n),l=tF(t,n,e,r);return i(),ew(),l});return r?i.unshift(l):i.push(l),l}}let nm=e=>(t,n=ib)=>{ik&&"sp"!==e||nf(e,(...e)=>t(...e),n)},ng=nm("bm"),ny=nm("m"),nv=nm("bu"),nb=nm("u"),n_=nm("bum"),nS=nm("um"),nx=nm("sp"),nC=nm("rtg"),nk=nm("rtc");function nT(e,t=ib){nf("ec",e,t)}function nw(e,t,n,r){let i=e.dirs,l=t&&t.dirs;for(let s=0;s<i.length;s++){let o=i[s];l&&(o.oldValue=l[s].value);let a=o.dir[r];a&&(eT(),tF(a,n,8,[e.el,o,e,t]),ew())}}/*! #__NO_SIDE_EFFECTS__ */function nE(e,t){return E(e)?y({name:e.name},t,{setup:e}):e}let nA=e=>!!e.type.__asyncLoader;function nN(e,t){let{ref:n,props:r,children:i,ce:l}=t.vnode,s=io(e,r,i);return s.ref=n,s.ce=l,delete t.vnode.ce,s}let nI=e=>e?iC(e)?iI(e):nI(e.parent):null,nR=y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nI(e.parent),$root:e=>nI(e.root),$emit:e=>e.emit,$options:e=>nB(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,tJ(e.update)}),$nextTick:e=>e.n||(e.n=tG.bind(e.proxy)),$watch:e=>rk.bind(e)}),nO=(e,t)=>e!==d&&!e.__isScriptSetup&&S(e,t),nL={get({_:e},t){let n,r,i;if("__v_skip"===t)return!0;let{ctx:l,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:p}=e;if("$"!==t[0]){let r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return l[t];case 3:return a[t]}else{if(nO(s,t))return c[t]=1,s[t];if(o!==d&&S(o,t))return c[t]=2,o[t];if((n=e.propsOptions[0])&&S(n,t))return c[t]=3,a[t];if(l!==d&&S(l,t))return c[t]=4,l[t];nF&&(c[t]=0)}}let h=nR[t];return h?("$attrs"===t&&eM(e.attrs,"get",""),h(e)):(r=u.__cssModules)&&(r=r[t])?r:l!==d&&S(l,t)?(c[t]=4,l[t]):S(i=p.config.globalProperties,t)?i[t]:void 0},set({_:e},t,n){let{data:r,setupState:i,ctx:l}=e;return nO(i,t)?(i[t]=n,!0):r!==d&&S(r,t)?(r[t]=n,!0):!S(e.props,t)&&!("$"===t[0]&&t.slice(1) in e)&&(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:l}},s){let o;return!!n[s]||e!==d&&S(e,s)||nO(t,s)||(o=l[0])&&S(o,s)||S(r,s)||S(nR,s)||S(i.config.globalProperties,s)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:S(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}},n$=y({},nL,{get(e,t){if(t!==Symbol.unscopables)return nL.get(e,t,e)},has:(e,t)=>"_"!==t[0]&&!Z(t)});function nM(){let e=i_();return e.setupContext||(e.setupContext=iN(e))}function nP(e){return x(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}let nF=!0;function nV(e,t,n){tF(x(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function nB(e){let t;let n=e.type,{mixins:r,extends:i}=n,{mixins:l,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(n);return a?t=a:l.length||r||i?(t={},l.length&&l.forEach(e=>nD(t,e,o,!0)),nD(t,n,o)):t=n,I(n)&&s.set(n,t),t}function nD(e,t,n,r=!1){let{mixins:i,extends:l}=t;for(let s in l&&nD(e,l,n,!0),i&&i.forEach(t=>nD(e,t,n,!0)),t)if(r&&"expose"===s);else{let r=nU[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}let nU={data:nj,props:nK,emits:nK,methods:nW,computed:nW,beforeCreate:nq,created:nq,beforeMount:nq,mounted:nq,beforeUpdate:nq,updated:nq,beforeDestroy:nq,beforeUnmount:nq,destroyed:nq,unmounted:nq,activated:nq,deactivated:nq,errorCaptured:nq,serverPrefetch:nq,components:nW,directives:nW,watch:function(e,t){if(!e)return t;if(!t)return e;let n=y(Object.create(null),e);for(let r in t)n[r]=nq(e[r],t[r]);return n},provide:nj,inject:function(e,t){return nW(nH(e),nH(t))}};function nj(e,t){return t?e?function(){return y(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function nH(e){if(x(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function nq(e,t){return e?[...new Set([].concat(e,t))]:t}function nW(e,t){return e?y(Object.create(null),e,t):t}function nK(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:y(Object.create(null),nP(e),nP(null!=t?t:{})):t}function nz(){return{app:null,config:{isNativeTag:f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nG=0,nJ=null;function nX(e,t){if(ib){let n=ib.provides,r=ib.parent&&ib.parent.provides;r===n&&(n=ib.provides=Object.create(r)),n[e]=t}}function nQ(e,t,n=!1){let r=ib||t6;if(r||nJ){let i=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:nJ._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&E(t)?t.call(r&&r.proxy):t}}let nZ={},nY=()=>Object.create(nZ),n0=e=>Object.getPrototypeOf(e)===nZ;function n1(e,t,n,r){let i;let[l,s]=e.propsOptions,o=!1;if(t)for(let a in t){let c;if(F(a))continue;let u=t[a];l&&S(l,c=U(a))?s&&s.includes(c)?(i||(i={}))[c]=u:n[c]=u:t3(e.emitsOptions,a)||a in r&&u===r[a]||(r[a]=u,o=!0)}if(s){let t=ty(n),r=i||d;for(let i=0;i<s.length;i++){let o=s[i];n[o]=n2(l,t,o,r[o],e,!S(r,o))}}return o}function n2(e,t,n,r,i,l){let s=e[n];if(null!=s){let e=S(s,"default");if(e&&void 0===r){let e=s.default;if(s.type!==Function&&!s.skipFactory&&E(e)){let{propsDefaults:l}=i;if(n in l)r=l[n];else{let s=iS(i);r=l[n]=e.call(null,t),s()}}else r=e}s[0]&&(l&&!e?r=!1:s[1]&&(""===r||r===H(n))&&(r=!0))}return r}function n3(e){return!("$"===e[0]||F(e))}function n6(e){return null===e?"null":"function"==typeof e?e.name||"":"object"==typeof e&&e.constructor&&e.constructor.name||""}function n4(e,t){return x(t)?t.findIndex(t=>n6(t)===n6(e)):E(t)?n6(t)===n6(e)?0:-1:-1}let n8=e=>"_"===e[0]||"$stable"===e,n5=e=>x(e)?e.map(id):[id(e)],n9=(e,t,n)=>{if(t._n)return t;let r=t5((...e)=>n5(t(...e)),n);return r._c=!1,r},n7=(e,t,n)=>{let r=e._ctx;for(let n in e){if(n8(n))continue;let i=e[n];if(E(i))t[n]=n9(n,i,r);else if(null!=i){let e=n5(i);t[n]=()=>e}}},re=(e,t)=>{let n=n5(t);e.slots.default=()=>n},rt=(e,t)=>{let n=e.slots=nY();if(32&e.vnode.shapeFlag){let e=t._;e?(y(n,t),G(n,"_",e,!0)):n7(t,n)}else t&&re(e,t)},rn=(e,t,n)=>{let{vnode:r,slots:i}=e,l=!0,s=d;if(32&r.shapeFlag){let e=t._;e?n&&1===e?l=!1:(y(i,t),n||1!==e||delete i._):(l=!t.$stable,n7(t,i)),s=t}else t&&(re(e,t),s={default:1});if(l)for(let e in i)n8(e)||null!=s[e]||delete i[e]};function rr(e,t,n,r,i=!1){if(x(e)){e.forEach((e,l)=>rr(e,t&&(x(t)?t[l]:t),n,r,i));return}if(nA(r)&&!i)return;let l=4&r.shapeFlag?iI(r.component):r.el,s=i?null:l,{i:o,r:a}=e,c=t&&t.r,u=o.refs===d?o.refs={}:o.refs,p=o.setupState;if(null!=c&&c!==a&&(A(c)?(u[c]=null,S(p,c)&&(p[c]=null)):tk(c)&&(c.value=null)),E(a))tP(a,o,12,[s,u]);else{let t=A(a),r=tk(a);if(t||r){let o=()=>{if(e.f){let n=t?S(p,a)?p[a]:u[a]:a.value;i?x(n)&&b(n,l):x(n)?n.includes(l)||n.push(l):t?(u[a]=[l],S(p,a)&&(p[a]=u[a])):(a.value=[l],e.k&&(u[e.k]=a.value))}else t?(u[a]=s,S(p,a)&&(p[a]=s)):r&&(a.value=s,e.k&&(u[e.k]=s))};s?(o.id=-1,rd(o,n)):o()}}}let ri=!1,rl=()=>{ri||(console.error("Hydration completed but contains mismatches."),ri=!0)},rs=e=>e.namespaceURI.includes("svg")&&"foreignObject"!==e.tagName,ro=e=>e.namespaceURI.includes("MathML"),ra=e=>rs(e)?"svg":ro(e)?"mathml":void 0,rc=e=>8===e.nodeType;function ru(e){let{mt:t,p:n,o:{patchProp:r,createText:i,nextSibling:l,parentNode:s,remove:o,insert:a,createComment:c}}=e,u=(n,r,o,c,m,_=!1)=>{_=_||!!r.dynamicChildren;let S=rc(n)&&"["===n.data,x=()=>f(n,r,o,c,m,S),{type:C,ref:k,shapeFlag:T,patchFlag:w}=r,E=n.nodeType;r.el=n,-2===w&&(_=!1,r.dynamicChildren=null);let A=null;switch(C){case r1:3!==E?""===r.children?(a(r.el=i(""),s(n),n),A=n):A=x():(n.data!==r.children&&(rl(),n.data=r.children),A=l(n));break;case r2:b(n)?(A=l(n),y(r.el=n.content.firstChild,n,o)):A=8!==E||S?x():l(n);break;case r3:if(S&&(E=(n=l(n)).nodeType),1===E||3===E){A=n;let e=!r.children.length;for(let t=0;t<r.staticCount;t++)e&&(r.children+=1===A.nodeType?A.outerHTML:A.data),t===r.staticCount-1&&(r.anchor=A),A=l(A);return S?l(A):A}x();break;case r0:A=S?h(n,r,o,c,m,_):x();break;default:if(1&T)A=1===E&&r.type.toLowerCase()===n.tagName.toLowerCase()||b(n)?d(n,r,o,c,m,_):x();else if(6&T){r.slotScopeIds=m;let e=s(n);if(A=S?g(n):rc(n)&&"teleport start"===n.data?g(n,n.data,"teleport end"):l(n),t(r,e,null,o,c,ra(e),_),nA(r)){let t;S?(t=io(r0)).anchor=A?A.previousSibling:e.lastChild:t=3===n.nodeType?iu(""):io("div"),t.el=n,r.component.subTree=t}}else 64&T?A=8!==E?x():r.type.hydrate(n,r,o,c,m,_,e,p):128&T&&(A=r.type.hydrate(n,r,o,c,ra(s(n)),m,_,e,u))}return null!=k&&rr(k,null,c,r),A},d=(e,t,n,i,l,s)=>{s=s||!!t.dynamicChildren;let{type:a,props:c,patchFlag:u,shapeFlag:d,dirs:h,transition:f}=t,g="input"===a||"option"===a;if(g||-1!==u){let a;h&&nw(t,null,n,"created");let _=!1;if(b(e)){_=rg(i,f)&&n&&n.vnode.props&&n.vnode.props.appear;let r=e.content.firstChild;_&&f.beforeEnter(r),y(r,e,n),t.el=e=r}if(16&d&&!(c&&(c.innerHTML||c.textContent))){let r=p(e.firstChild,t,e,n,i,l,s);for(;r;){rl();let e=r;r=r.nextSibling,o(e)}}else 8&d&&e.textContent!==t.children&&(rl(),e.textContent=t.children);if(c){if(g||!s||48&u)for(let t in c)(g&&(t.endsWith("value")||"indeterminate"===t)||m(t)&&!F(t)||"."===t[0])&&r(e,t,null,c[t],void 0,void 0,n);else c.onClick&&r(e,"onClick",null,c.onClick,void 0,void 0,n)}(a=c&&c.onVnodeBeforeMount)&&ig(a,n,t),h&&nw(t,null,n,"beforeMount"),((a=c&&c.onVnodeMounted)||h||_)&&np(()=>{a&&ig(a,n,t),_&&f.enter(e),h&&nw(t,null,n,"mounted")},i)}return e.nextSibling},p=(e,t,r,l,s,o,c)=>{c=c||!!t.dynamicChildren;let d=t.children,p=d.length;for(let t=0;t<p;t++){let p=c?d[t]:d[t]=id(d[t]);e?e=u(e,p,l,s,o,c):p.type!==r1||p.children?(rl(),n(null,p,r,null,l,s,ra(r),o)):a(p.el=i(""),r)}return e},h=(e,t,n,r,i,o)=>{let{slotScopeIds:u}=t;u&&(i=i?i.concat(u):u);let d=s(e),h=p(l(e),t,d,n,r,i,o);return h&&rc(h)&&"]"===h.data?l(t.anchor=h):(rl(),a(t.anchor=c("]"),d,h),h)},f=(e,t,r,i,a,c)=>{if(rl(),t.el=null,c){let t=g(e);for(;;){let n=l(e);if(n&&n!==t)o(n);else break}}let u=l(e),d=s(e);return o(e),n(null,t,d,u,r,i,ra(d),a),u},g=(e,t="[",n="]")=>{let r=0;for(;e;)if((e=l(e))&&rc(e)&&(e.data===t&&r++,e.data===n)){if(0===r)return l(e);r--}return e},y=(e,t,n)=>{let r=t.parentNode;r&&r.replaceChild(e,t);let i=n;for(;i;)i.vnode.el===t&&(i.vnode.el=i.subTree.el=e),i=i.parent},b=e=>1===e.nodeType&&"template"===e.tagName.toLowerCase();return[(e,t)=>{if(!t.hasChildNodes()){n(null,e,t),tY(),t._vnode=e;return}u(t.firstChild,e,null,null,null),tY(),t._vnode=e},u]}let rd=np;function rp(e){return rh(e,ru)}function rh(e,t){var n;let r,i;Q().__VUE__=!0;let{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:f,setText:m,setElementText:g,parentNode:b,nextSibling:_,setScopeId:C=h,insertStaticContent:k}=e,T=(e,t,n,r=null,i=null,l=null,s,o=null,a=!!t.dynamicChildren)=>{if(e===t)return;e&&!ir(e,t)&&(r=eo(e),en(e,i,l,!0),e=null),-2===t.patchFlag&&(a=!1,t.dynamicChildren=null);let{type:c,ref:u,shapeFlag:d}=t;switch(c){case r1:w(e,t,n,r);break;case r2:A(e,t,n,r);break;case r3:null==e&&N(t,n,r,s);break;case r0:q(e,t,n,r,i,l,s,o,a);break;default:1&d?$(e,t,n,r,i,l,s,o,a):6&d?W(e,t,n,r,i,l,s,o,a):64&d?c.process(e,t,n,r,i,l,s,o,a,eu):128&d&&c.process(e,t,n,r,i,l,s,o,a,eu)}null!=u&&i&&rr(u,e&&e.ref,l,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&m(n,t.children)}},A=(e,t,n,r)=>{null==e?s(t.el=f(t.children||""),n,r):t.el=e.el},N=(e,t,n,r)=>{[e.el,e.anchor]=k(e.children,t,n,r,e.el,e.anchor)},O=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=_(e),s(e,n,r),e=i;s(t,n,r)},L=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=_(e),o(e),e=n;o(t)},$=(e,t,n,r,i,l,s,o,a)=>{"svg"===t.type?s="svg":"math"===t.type&&(s="mathml"),null==e?M(t,n,r,i,l,s,o,a):B(e,t,i,l,s,o,a)},M=(e,t,n,r,i,l,o,u)=>{let d,p;let{props:h,shapeFlag:f,transition:m,dirs:y}=e;if(d=e.el=c(e.type,l,h&&h.is,h),8&f?g(d,e.children):16&f&&V(e.children,d,null,r,i,rf(e,l),o,u),y&&nw(e,null,r,"created"),P(d,e,e.scopeId,o,r),h){for(let t in h)"value"===t||F(t)||a(d,t,null,h[t],l,e.children,r,i,es);"value"in h&&a(d,"value",null,h.value,l),(p=h.onVnodeBeforeMount)&&ig(p,r,e)}y&&nw(e,null,r,"beforeMount");let b=rg(i,m);b&&m.beforeEnter(d),s(d,t,n),((p=h&&h.onVnodeMounted)||b||y)&&rd(()=>{p&&ig(p,r,e),b&&m.enter(d),y&&nw(e,null,r,"mounted")},i)},P=(e,t,n,r,i)=>{if(n&&C(e,n),r)for(let t=0;t<r.length;t++)C(e,r[t]);if(i&&t===i.subTree){let t=i.vnode;P(e,t,t.scopeId,t.slotScopeIds,i.parent)}},V=(e,t,n,r,i,l,s,o,a=0)=>{for(let c=a;c<e.length;c++)T(null,e[c]=o?ip(e[c]):id(e[c]),t,n,r,i,l,s,o)},B=(e,t,n,r,i,l,s)=>{let o;let c=t.el=e.el,{patchFlag:u,dynamicChildren:p,dirs:h}=t;u|=16&e.patchFlag;let f=e.props||d,m=t.props||d;if(n&&rm(n,!1),(o=m.onVnodeBeforeUpdate)&&ig(o,n,t,e),h&&nw(t,e,n,"beforeUpdate"),n&&rm(n,!0),p?D(e.dynamicChildren,p,c,n,r,rf(t,i),l):s||Z(e,t,c,null,n,r,rf(t,i),l,!1),u>0){if(16&u)j(c,t,f,m,n,r,i);else if(2&u&&f.class!==m.class&&a(c,"class",null,m.class,i),4&u&&a(c,"style",f.style,m.style,i),8&u){let l=t.dynamicProps;for(let t=0;t<l.length;t++){let s=l[t],o=f[s],u=m[s];(u!==o||"value"===s)&&a(c,s,o,u,i,e.children,n,r,es)}}1&u&&e.children!==t.children&&g(c,t.children)}else s||null!=p||j(c,t,f,m,n,r,i);((o=m.onVnodeUpdated)||h)&&rd(()=>{o&&ig(o,n,t,e),h&&nw(t,e,n,"updated")},r)},D=(e,t,n,r,i,l,s)=>{for(let o=0;o<t.length;o++){let a=e[o],c=t[o],u=a.el&&(a.type===r0||!ir(a,c)||70&a.shapeFlag)?b(a.el):n;T(a,c,u,null,r,i,l,s,!0)}},j=(e,t,n,r,i,l,s)=>{if(n!==r){if(n!==d)for(let o in n)F(o)||o in r||a(e,o,n[o],null,s,t.children,i,l,es);for(let o in r){if(F(o))continue;let c=r[o],u=n[o];c!==u&&"value"!==o&&a(e,o,u,c,s,t.children,i,l,es)}"value"in r&&a(e,"value",n.value,r.value,s)}},q=(e,t,n,r,i,l,o,a,c)=>{let d=t.el=e?e.el:u(""),p=t.anchor=e?e.anchor:u(""),{patchFlag:h,dynamicChildren:f,slotScopeIds:m}=t;m&&(a=a?a.concat(m):m),null==e?(s(d,n,r),s(p,n,r),V(t.children||[],n,p,i,l,o,a,c)):h>0&&64&h&&f&&e.dynamicChildren?(D(e.dynamicChildren,f,n,i,l,o,a),(null!=t.key||i&&t===i.subTree)&&ry(e,t,!0)):Z(e,t,n,p,i,l,o,a,c)},W=(e,t,n,r,i,l,s,o,a)=>{t.slotScopeIds=o,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,a):K(t,n,r,i,l,s,a):G(e,t,a)},K=(e,t,n,r,i,s,o)=>{let a=e.component=function(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||iy,l={uid:iv++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new eg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:function e(t,n,r=!1){let i=n.propsCache,l=i.get(t);if(l)return l;let s=t.props,o={},a=[],c=!1;if(!E(t)){let i=t=>{c=!0;let[r,i]=e(t,n,!0);y(o,r),i&&a.push(...i)};!r&&n.mixins.length&&n.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}if(!s&&!c)return I(t)&&i.set(t,p),p;if(x(s))for(let e=0;e<s.length;e++){let t=U(s[e]);n3(t)&&(o[t]=d)}else if(s)for(let e in s){let t=U(e);if(n3(t)){let n=s[e],r=o[t]=x(n)||E(n)?{type:n}:y({},n);if(r){let e=n4(Boolean,r.type),n=n4(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||S(r,"default"))&&a.push(t)}}}let u=[o,a];return I(t)&&i.set(t,u),u}(r,i),emitsOptions:function e(t,n,r=!1){let i=n.emitsCache,l=i.get(t);if(void 0!==l)return l;let s=t.emits,o={},a=!1;if(!E(t)){let i=t=>{let r=e(t,n,!0);r&&(a=!0,y(o,r))};!r&&n.mixins.length&&n.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return s||a?(x(s)?s.forEach(e=>o[e]=null):y(o,s),I(t)&&i.set(t,o),o):(I(t)&&i.set(t,null),null)}(r,i),emit:null,emitted:null,propsDefaults:d,inheritAttrs:r.inheritAttrs,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=t2.bind(null,l),e.ce&&e.ce(l),l}(e,r,i);rE(e)&&(a.ctx.renderer=eu),function(e,t=!1){t&&l(t);let{props:n,children:r}=e.vnode,i=iC(e);(function(e,t,n,r=!1){let i={},l=nY();for(let n in e.propsDefaults=Object.create(null),n1(e,t,i,l),e.propsOptions[0])n in i||(i[n]=void 0);n?e.props=r?i:tu(i):e.type.props?e.props=i:e.props=l,e.attrs=l})(e,n,i,t),rt(e,r),i&&function(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,nL);let{setup:r}=n;if(r){let n=e.setupContext=r.length>1?iN(e):null,i=iS(e);eT();let l=tP(r,e,0,[e.props,n]);if(ew(),i(),R(l)){if(l.then(ix,ix),t)return l.then(n=>{iT(e,n,t)}).catch(t=>{tV(t,e,0)});e.asyncDep=l}else iT(e,l,t)}else iE(e,t)}(e,t),t&&l(!1)}(a),a.asyncDep?(i&&i.registerDep(a,J,o),e.el||A(null,a.subTree=io(r2),t,n)):J(a,e,t,n,i,s,o)},G=(e,t,n)=>{let r=t.component=e.component;if(function(e,t,n){let{props:r,children:i,component:l}=e,{props:s,children:o,patchFlag:a}=t,c=l.emitsOptions;if(t.dirs||t.transition)return!0;if(!n||!(a>=0))return(!!i||!!o)&&(!o||!o.$stable)||r!==s&&(r?!s||nt(r,s,c):!!s);if(1024&a)return!0;if(16&a)return r?nt(r,s,c):!!s;if(8&a){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(s[n]!==r[n]&&!t3(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved){X(r,t,n);return}r.next=t,function(e){let t=tU.indexOf(e);t>tj&&tU.splice(t,1)}(r.update),r.effect.dirty=!0,r.update()}else t.el=e.el,r.vnode=t},J=(e,t,n,r,l,s,o)=>{let a=()=>{if(e.isMounted){let t,{next:n,bu:r,u:i,parent:c,vnode:u}=e;{let t=function e(t){let n=t.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:e(n)}(e);if(t){n&&(n.el=u.el,X(e,n,o)),t.asyncDep.then(()=>{e.isUnmounted||a()});return}}let d=n;rm(e,!1),n?(n.el=u.el,X(e,n,o)):n=u,r&&z(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&ig(t,c,n,u),rm(e,!0);let p=t9(e),h=e.subTree;e.subTree=p,T(h,p,b(h.el),eo(h),e,l,s),n.el=p.el,null===d&&nn(e,p.el),i&&rd(i,l),(t=n.props&&n.props.onVnodeUpdated)&&rd(()=>ig(t,c,n,u),l)}else{let o;let{el:a,props:c}=t,{bm:u,m:d,parent:p}=e,h=nA(t);if(rm(e,!1),u&&z(u),!h&&(o=c&&c.onVnodeBeforeMount)&&ig(o,p,t),rm(e,!0),a&&i){let n=()=>{e.subTree=t9(e),i(a,e.subTree,e,l,null)};h?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{let i=e.subTree=t9(e);T(null,i,n,r,e,l,s),t.el=i.el}if(d&&rd(d,l),!h&&(o=c&&c.onVnodeMounted)){let e=t;rd(()=>ig(o,p,e),l)}(256&t.shapeFlag||p&&nA(p.vnode)&&256&p.vnode.shapeFlag)&&e.a&&rd(e.a,l),e.isMounted=!0,t=n=r=null}},c=e.effect=new ev(a,h,()=>tJ(u),e.scope),u=e.update=()=>{c.dirty&&c.run()};u.id=e.uid,rm(e,!0),u()},X=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){let{props:i,attrs:l,vnode:{patchFlag:s}}=e,o=ty(i),[a]=e.propsOptions,c=!1;if((r||s>0)&&!(16&s)){if(8&s){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(t3(e.emitsOptions,s))continue;let u=t[s];if(a){if(S(l,s))u!==l[s]&&(l[s]=u,c=!0);else{let t=U(s);i[t]=n2(a,o,t,u,e,!1)}}else u!==l[s]&&(l[s]=u,c=!0)}}}else{let r;for(let s in n1(e,t,i,l)&&(c=!0),o)t&&(S(t,s)||(r=H(s))!==s&&S(t,r))||(a?n&&(void 0!==n[s]||void 0!==n[r])&&(i[s]=n2(a,o,s,void 0,e,!0)):delete i[s]);if(l!==o)for(let e in l)t&&S(t,e)||(delete l[e],c=!0)}c&&eP(e.attrs,"set","")}(e,t.props,r,n),rn(e,t.children,n),eT(),tZ(e),ew()},Z=(e,t,n,r,i,l,s,o,a=!1)=>{let c=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:h}=t;if(p>0){if(128&p){ee(c,d,n,r,i,l,s,o,a);return}if(256&p){Y(c,d,n,r,i,l,s,o,a);return}}8&h?(16&u&&es(c,i,l),d!==c&&g(n,d)):16&u?16&h?ee(c,d,n,r,i,l,s,o,a):es(c,i,l,!0):(8&u&&g(n,""),16&h&&V(d,n,r,i,l,s,o,a))},Y=(e,t,n,r,i,l,s,o,a)=>{let c;e=e||p,t=t||p;let u=e.length,d=t.length,h=Math.min(u,d);for(c=0;c<h;c++){let r=t[c]=a?ip(t[c]):id(t[c]);T(e[c],r,n,null,i,l,s,o,a)}u>d?es(e,i,l,!0,!1,h):V(t,n,r,i,l,s,o,a,h)},ee=(e,t,n,r,i,l,s,o,a)=>{let c=0,u=t.length,d=e.length-1,h=u-1;for(;c<=d&&c<=h;){let r=e[c],u=t[c]=a?ip(t[c]):id(t[c]);if(ir(r,u))T(r,u,n,null,i,l,s,o,a);else break;c++}for(;c<=d&&c<=h;){let r=e[d],c=t[h]=a?ip(t[h]):id(t[h]);if(ir(r,c))T(r,c,n,null,i,l,s,o,a);else break;d--,h--}if(c>d){if(c<=h){let e=h+1,d=e<u?t[e].el:r;for(;c<=h;)T(null,t[c]=a?ip(t[c]):id(t[c]),n,d,i,l,s,o,a),c++}}else if(c>h)for(;c<=d;)en(e[c],i,l,!0),c++;else{let f;let m=c,g=c,y=new Map;for(c=g;c<=h;c++){let e=t[c]=a?ip(t[c]):id(t[c]);null!=e.key&&y.set(e.key,c)}let b=0,_=h-g+1,S=!1,x=0,C=Array(_);for(c=0;c<_;c++)C[c]=0;for(c=m;c<=d;c++){let r;let u=e[c];if(b>=_){en(u,i,l,!0);continue}if(null!=u.key)r=y.get(u.key);else for(f=g;f<=h;f++)if(0===C[f-g]&&ir(u,t[f])){r=f;break}void 0===r?en(u,i,l,!0):(C[r-g]=c+1,r>=x?x=r:S=!0,T(u,t[r],n,null,i,l,s,o,a),b++)}let k=S?function(e){let t,n,r,i,l;let s=e.slice(),o=[0],a=e.length;for(t=0;t<a;t++){let a=e[t];if(0!==a){if(e[n=o[o.length-1]]<a){s[t]=n,o.push(t);continue}for(r=0,i=o.length-1;r<i;)e[o[l=r+i>>1]]<a?r=l+1:i=l;a<e[o[r]]&&(r>0&&(s[t]=o[r-1]),o[r]=t)}}for(r=o.length,i=o[r-1];r-- >0;)o[r]=i,i=s[i];return o}(C):p;for(f=k.length-1,c=_-1;c>=0;c--){let e=g+c,d=t[e],p=e+1<u?t[e+1].el:r;0===C[c]?T(null,d,n,p,i,l,s,o,a):S&&(f<0||c!==k[f]?et(d,n,p,2):f--)}}},et=(e,t,n,r,i=null)=>{let{el:l,type:o,transition:a,children:c,shapeFlag:u}=e;if(6&u){et(e.component.subTree,t,n,r);return}if(128&u){e.suspense.move(t,n,r);return}if(64&u){o.move(e,t,n,eu);return}if(o===r0){s(l,t,n);for(let e=0;e<c.length;e++)et(c[e],t,n,r);s(e.anchor,t,n);return}if(o===r3){O(e,t,n);return}if(2!==r&&1&u&&a){if(0===r)a.beforeEnter(l),s(l,t,n),rd(()=>a.enter(l),i);else{let{leave:e,delayLeave:r,afterLeave:i}=a,o=()=>s(l,t,n),c=()=>{e(l,()=>{o(),i&&i()})};r?r(l,o,c):c()}}else s(l,t,n)},en=(e,t,n,r=!1,i=!1)=>{let l;let{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:d,patchFlag:p,dirs:h,memoIndex:f}=e;if(-2===p&&(i=!1),null!=a&&rr(a,null,n,e,!0),null!=f&&(t.renderCache[f]=void 0),256&d){t.ctx.deactivate(e);return}let m=1&d&&h,g=!nA(e);if(g&&(l=o&&o.onVnodeBeforeUnmount)&&ig(l,t,e),6&d)el(e.component,n,r);else{if(128&d){e.suspense.unmount(n,r);return}m&&nw(e,null,t,"beforeUnmount"),64&d?e.type.remove(e,t,n,eu,r):u&&(s!==r0||p>0&&64&p)?es(u,t,n,!1,!0):(s===r0&&384&p||!i&&16&d)&&es(c,t,n),r&&er(e)}(g&&(l=o&&o.onVnodeUnmounted)||m)&&rd(()=>{l&&ig(l,t,e),m&&nw(e,null,t,"unmounted")},n)},er=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===r0){ei(n,r);return}if(t===r3){L(e);return}let l=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,s=()=>t(n,l);r?r(e.el,l,s):s()}else l()},ei=(e,t)=>{let n;for(;e!==t;)n=_(e),o(e),e=n;o(t)},el=(e,t,n)=>{let{bum:r,scope:i,update:l,subTree:s,um:o,m:a,a:c}=e;rv(a),rv(c),r&&z(r),i.stop(),l&&(l.active=!1,en(s,e,t,n)),o&&rd(o,t),rd(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},es=(e,t,n,r=!1,i=!1,l=0)=>{for(let s=l;s<e.length;s++)en(e[s],t,n,r,i)},eo=e=>6&e.shapeFlag?eo(e.component.subTree):128&e.shapeFlag?e.suspense.next():_(e.anchor||e.el),ea=!1,ec=(e,t,n)=>{null==e?t._vnode&&en(t._vnode,null,null,!0):T(t._vnode||null,e,t,null,null,null,n),ea||(ea=!0,tZ(),tY(),ea=!1),t._vnode=e},eu={p:T,um:en,m:et,r:er,mt:K,mc:V,pc:Z,pbc:D,n:eo,o:e};return t&&([r,i]=t(eu)),{render:ec,hydrate:r,createApp:(n=r,function(e,t=null){E(e)||(e=y({},e)),null==t||I(t)||(t=null);let r=nz(),i=new WeakSet,l=!1,s=r.app={_uid:nG++,_component:e,_props:t,_container:null,_context:r,_instance:null,version:iM,get config(){return r.config},set config(v){},use:(e,...t)=>(i.has(e)||(e&&E(e.install)?(i.add(e),e.install(s,...t)):E(e)&&(i.add(e),e(s,...t))),s),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),s),component:(e,t)=>t?(r.components[e]=t,s):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,s):r.directives[e],mount(i,o,a){if(!l){let c=io(e,t);return c.appContext=r,!0===a?a="svg":!1===a&&(a=void 0),o&&n?n(c,i):ec(c,i,a),l=!0,s._container=i,i.__vue_app__=s,iI(c.component)}},unmount(){l&&(ec(null,s._container),delete s._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,s),runWithContext(e){let t=nJ;nJ=s;try{return e()}finally{nJ=t}}};return s})}}function rf({type:e,props:t},n){return"svg"===n&&"foreignObject"===e||"mathml"===n&&"annotation-xml"===e&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function rm({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rg(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ry(e,t,n=!1){let r=e.children,i=t.children;if(x(r)&&x(i))for(let e=0;e<r.length;e++){let t=r[e],l=i[e];!(1&l.shapeFlag)||l.dynamicChildren||((l.patchFlag<=0||32===l.patchFlag)&&((l=i[e]=ip(i[e])).el=t.el),n||-2===l.patchFlag||ry(t,l)),l.type===r1&&(l.el=t.el)}}function rv(e){if(e)for(let t=0;t<e.length;t++)e[t].active=!1}let rb=Symbol.for("v-scx");function r_(e,t){return rC(e,null,{flush:"post"})}function rS(e,t){return rC(e,null,{flush:"sync"})}let rx={};function rC(e,t,{immediate:r,deep:i,flush:l,once:s,onTrack:o,onTrigger:a}=d){let c,u,p;if(t&&s){let e=t;t=(...t)=>{e(...t),w()}}let f=ib,m=e=>!0===i?e:rw(e,!1===i?1:void 0),g=!1,y=!1;if(tk(e)?(c=()=>e.value,g=tm(e)):th(e)?(c=()=>m(e),g=!0):x(e)?(y=!0,g=e.some(e=>th(e)||tm(e)),c=()=>e.map(e=>tk(e)?e.value:th(e)?m(e):E(e)?tP(e,f,2):void 0)):c=E(e)?t?()=>tP(e,f,2):()=>(u&&u(),tF(e,f,3,[_])):h,t&&i){let e=c;c=()=>rw(e())}let _=e=>{u=k.onStop=()=>{tP(e,f,4),u=k.onStop=void 0}},S=y?Array(e.length).fill(rx):rx,C=()=>{if(k.active&&k.dirty){if(t){let e=k.run();(i||g||(y?e.some((e,t)=>K(e,S[t])):K(e,S)))&&(u&&u(),tF(t,f,3,[e,S===rx?void 0:y&&S[0]===rx?[]:S,_]),S=e)}else k.run()}};C.allowRecurse=!!t,"sync"===l?p=C:"post"===l?p=()=>rd(C,f&&f.suspense):(C.pre=!0,f&&(C.id=f.uid),p=()=>tJ(C));let k=new ev(c,h,p),T=n,w=()=>{k.stop(),T&&b(T.effects,k)};return t?r?C():S=k.run():"post"===l?rd(k.run.bind(k),f&&f.suspense):k.run(),w}function rk(e,t,n){let r;let i=this.proxy,l=A(e)?e.includes(".")?rT(i,e):()=>i[e]:e.bind(i,i);E(t)?r=t:(r=t.handler,n=t);let s=iS(this),o=rC(l,r.bind(i),n);return s(),o}function rT(e,t){let n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function rw(e,t=1/0,n){if(t<=0||!I(e)||e.__v_skip||(n=n||new Set).has(e))return e;if(n.add(e),t--,tk(e))rw(e.value,t,n);else if(x(e))for(let r=0;r<e.length;r++)rw(e[r],t,n);else if(k(e)||C(e))e.forEach(e=>{rw(e,t,n)});else if(M(e)){for(let r in e)rw(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&rw(e[r],t,n)}return e}let rE=e=>e.type.__isKeepAlive;function rA(e,t){return x(e)?e.some(e=>rA(e,t)):A(e)?e.split(",").includes(t):!!w(e)&&e.test(t)}function rN(e,t){rR(e,"a",t)}function rI(e,t){rR(e,"da",t)}function rR(e,t,n=ib){let r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(nf(t,r,n),n){let e=n.parent;for(;e&&e.parent;)rE(e.parent.vnode)&&function(e,t,n,r){let i=nf(t,e,r,!0);nS(()=>{b(r[t],i)},n)}(r,t,n,e),e=e.parent}}function rO(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function rL(e){return 128&e.shapeFlag?e.ssContent:e}let r$=Symbol("_leaveCb"),rM=Symbol("_enterCb");function rP(){let e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ny(()=>{e.isMounted=!0}),n_(()=>{e.isUnmounting=!0}),e}let rF=[Function,Array],rV={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rF,onEnter:rF,onAfterEnter:rF,onEnterCancelled:rF,onBeforeLeave:rF,onLeave:rF,onAfterLeave:rF,onLeaveCancelled:rF,onBeforeAppear:rF,onAppear:rF,onAfterAppear:rF,onAppearCancelled:rF},rB=e=>{let t=e.subTree;return t.component?rB(t.component):t},rD={name:"BaseTransition",props:rV,setup(e,{slots:t}){let n=i_(),r=rP();return()=>{let i=t.default&&rK(t.default(),!0);if(!i||!i.length)return;let l=i[0];if(i.length>1){for(let e of i)if(e.type!==r2){l=e;break}}let s=ty(e),{mode:o}=s;if(r.isLeaving)return rH(l);let a=rq(l);if(!a)return rH(l);let c=rj(a,s,r,n,e=>c=e);rW(a,c);let u=n.subTree,d=u&&rq(u);if(d&&d.type!==r2&&!ir(a,d)&&rB(n).type!==r2){let e=rj(d,s,r,n);if(rW(d,e),"out-in"===o&&a.type!==r2)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},rH(l);"in-out"===o&&a.type!==r2&&(e.delayLeave=(e,t,n)=>{rU(r,d)[String(d.key)]=d,e[r$]=()=>{t(),e[r$]=void 0,delete c.delayedLeave},c.delayedLeave=n})}return l}}};function rU(e,t){let{leavingVNodes:n}=e,r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function rj(e,t,n,r,i){let{appear:l,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:h,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:g,onAppear:y,onAfterAppear:b,onAppearCancelled:_}=t,S=String(e.key),C=rU(n,e),k=(e,t)=>{e&&tF(e,r,9,t)},T=(e,t)=>{let n=t[1];k(e,t),x(e)?e.every(e=>e.length<=1)&&n():e.length<=1&&n()},w={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!l)return;r=g||a}t[r$]&&t[r$](!0);let i=C[S];i&&ir(e,i)&&i.el[r$]&&i.el[r$](),k(r,[t])},enter(e){let t=c,r=u,i=d;if(!n.isMounted){if(!l)return;t=y||c,r=b||u,i=_||d}let s=!1,o=e[rM]=t=>{s||(s=!0,t?k(i,[e]):k(r,[e]),w.delayedLeave&&w.delayedLeave(),e[rM]=void 0)};t?T(t,[e,o]):o()},leave(t,r){let i=String(e.key);if(t[rM]&&t[rM](!0),n.isUnmounting)return r();k(p,[t]);let l=!1,s=t[r$]=n=>{l||(l=!0,r(),n?k(m,[t]):k(f,[t]),t[r$]=void 0,C[i]!==e||delete C[i])};C[i]=e,h?T(h,[t,s]):s()},clone(e){let l=rj(e,t,n,r,i);return i&&i(l),l}};return w}function rH(e){if(rE(e))return(e=ic(e)).children=null,e}function rq(e){if(!rE(e))return e;let{shapeFlag:t,children:n}=e;if(n){if(16&t)return n[0];if(32&t&&E(n.default))return n.default()}}function rW(e,t){6&e.shapeFlag&&e.component?rW(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function rK(e,t=!1,n){let r=[],i=0;for(let l=0;l<e.length;l++){let s=e[l],o=null==n?s.key:String(n)+String(null!=s.key?s.key:l);s.type===r0?(128&s.patchFlag&&i++,r=r.concat(rK(s.children,t,o))):(t||s.type!==r2)&&r.push(null!=o?ic(s,{key:o}):s)}if(i>1)for(let e=0;e<r.length;e++)r[e].patchFlag=-2;return r}let rz=e=>e.__isTeleport,rG=e=>e&&(e.disabled||""===e.disabled),rJ=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,rX=e=>"function"==typeof MathMLElement&&e instanceof MathMLElement,rQ=(e,t)=>{let n=e&&e.to;return A(n)?t?t(n):null:n};function rZ(e,t,n,{o:{insert:r},m:i},l=2){0===l&&r(e.targetAnchor,t,n);let{el:s,anchor:o,shapeFlag:a,children:c,props:u}=e,d=2===l;if(d&&r(s,t,n),(!d||rG(u))&&16&a)for(let e=0;e<c.length;e++)i(c[e],t,n,2);d&&r(o,t,n)}function rY(e){let t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)1===n.nodeType&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}let r0=Symbol.for("v-fgt"),r1=Symbol.for("v-txt"),r2=Symbol.for("v-cmt"),r3=Symbol.for("v-stc"),r6=[],r4=null;function r8(e=!1){r6.push(r4=e?null:[])}function r5(){r6.pop(),r4=r6[r6.length-1]||null}let r9=1;function r7(e){return e.dynamicChildren=r9>0?r4||p:null,r5(),r9>0&&r4&&r4.push(e),e}function ie(e,t,n,r,i){return r7(io(e,t,n,r,i,!0))}function it(e){return!!e&&!0===e.__v_isVNode}function ir(e,t){return e.type===t.type&&e.key===t.key}let ii=({key:e})=>null!=e?e:null,il=({ref:e,ref_key:t,ref_for:n})=>("number"==typeof e&&(e=""+e),null!=e?A(e)||tk(e)||E(e)?{i:t6,r:e,k:t,f:!!n}:e:null);function is(e,t=null,n=null,r=0,i=null,l=e===r0?0:1,s=!1,o=!1){let a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ii(t),ref:t&&il(t),scopeId:t4,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:t6};return o?(ih(a,n),128&l&&e.normalize(a)):n&&(a.shapeFlag|=A(n)?8:16),r9>0&&!s&&r4&&(a.patchFlag>0||6&l)&&32!==a.patchFlag&&r4.push(a),a}let io=function(e,t=null,n=null,r=0,i=null,l=!1){var s;if(e&&e!==ni||(e=r2),it(e)){let r=ic(e,t,!0);return n&&ih(r,n),r9>0&&!l&&r4&&(6&r.shapeFlag?r4[r4.indexOf(e)]=r:r4.push(r)),r.patchFlag=-2,r}if(E(s=e)&&"__vccOpts"in s&&(e=e.__vccOpts),t){let{class:e,style:n}=t=ia(t);e&&!A(e)&&(t.class=ei(e)),I(n)&&(tg(n)&&!x(n)&&(n=y({},n)),t.style=Y(n))}let o=A(e)?1:no(e)?128:rz(e)?64:I(e)?4:E(e)?2:0;return is(e,t,n,r,i,o,l,!0)};function ia(e){return e?tg(e)||n0(e)?y({},e):e:null}function ic(e,t,n=!1,r=!1){let{props:i,ref:l,patchFlag:s,children:o,transition:a}=e,c=t?im(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ii(c),ref:t&&t.ref?n&&l?x(l)?l.concat(il(t)):[l,il(t)]:il(t):l,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==r0?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ic(e.ssContent),ssFallback:e.ssFallback&&ic(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&r&&rW(u,a.clone(u)),u}function iu(e=" ",t=0){return io(r1,null,e,t)}function id(e){return null==e||"boolean"==typeof e?io(r2):x(e)?io(r0,null,e.slice()):"object"==typeof e?ip(e):io(r1,null,String(e))}function ip(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:ic(e)}function ih(e,t){let n=0,{shapeFlag:r}=e;if(null==t)t=null;else if(x(t))n=16;else if("object"==typeof t){if(65&r){let n=t.default;n&&(n._c&&(n._d=!1),ih(e,n()),n._c&&(n._d=!0));return}{n=32;let r=t._;r||n0(t)?3===r&&t6&&(1===t6.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=t6}}else E(t)?(t={default:t,_ctx:t6},n=32):(t=String(t),64&r?(n=16,t=[iu(t)]):n=8);e.children=t,e.shapeFlag|=n}function im(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if("class"===e)t.class!==r.class&&(t.class=ei([t.class,r.class]));else if("style"===e)t.style=Y([t.style,r.style]);else if(m(e)){let n=t[e],i=r[e];i&&n!==i&&!(x(n)&&n.includes(i))&&(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function ig(e,t,n,r=null){tF(e,t,7,[n,r])}let iy=nz(),iv=0,ib=null,i_=()=>ib||t6;i=e=>{ib=e},l=e=>{ik=e};let iS=e=>{let t=ib;return i(e),e.scope.on(),()=>{e.scope.off(),i(t)}},ix=()=>{ib&&ib.scope.off(),i(null)};function iC(e){return 4&e.vnode.shapeFlag}let ik=!1;function iT(e,t,n){E(t)?e.render=t:I(t)&&(e.setupState=tI(t)),iE(e,n)}function iw(e){s=e,o=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,n$))}}function iE(e,t,n){let r=e.type;if(!e.render){if(!t&&s&&!r.render){let t=r.template||nB(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:o}=r,a=y(y({isCustomElement:n,delimiters:l},i),o);r.render=s(t,a)}}e.render=r.render||h,o&&o(e)}{let t=iS(e);eT();try{!function(e){let t=nB(e),n=e.proxy,r=e.ctx;nF=!1,t.beforeCreate&&nV(t.beforeCreate,e,"bc");let{data:i,computed:l,methods:s,watch:o,provide:a,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:m,activated:g,deactivated:y,beforeDestroy:b,beforeUnmount:_,destroyed:S,unmounted:C,render:k,renderTracked:T,renderTriggered:w,errorCaptured:N,serverPrefetch:R,expose:O,inheritAttrs:L,components:$,directives:M,filters:P}=t;if(c&&function(e,t,n=h){for(let n in x(e)&&(e=nH(e)),e){let r;let i=e[n];tk(r=I(i)?"default"in i?nQ(i.from||n,i.default,!0):nQ(i.from||n):nQ(i))?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:e=>r.value=e}):t[n]=r}}(c,r,null),s)for(let e in s){let t=s[e];E(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);I(t)&&(e.data=tc(t))}if(nF=!0,l)for(let e in l){let t=l[e],i=E(t)?t.bind(n,n):E(t.get)?t.get.bind(n,n):h,s=iO({get:i,set:!E(t)&&E(t.set)?t.set.bind(n):h});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e})}if(o)for(let e in o)!function e(t,n,r,i){let l=i.includes(".")?rT(r,i):()=>r[i];if(A(t)){let e=n[t];E(e)&&rC(l,e,void 0)}else if(E(t)){var s;s=t.bind(r),rC(l,s,void 0)}else if(I(t)){if(x(t))t.forEach(t=>e(t,n,r,i));else{let e=E(t.handler)?t.handler.bind(r):n[t.handler];E(e)&&rC(l,e,t)}}}(o[e],r,n,e);if(a){let e=E(a)?a.call(n):a;Reflect.ownKeys(e).forEach(t=>{nX(t,e[t])})}function F(e,t){x(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(u&&nV(u,e,"c"),F(ng,d),F(ny,p),F(nv,f),F(nb,m),F(rN,g),F(rI,y),F(nT,N),F(nk,T),F(nC,w),F(n_,_),F(nS,C),F(nx,R),x(O)){if(O.length){let t=e.exposed||(e.exposed={});O.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={})}k&&e.render===h&&(e.render=k),null!=L&&(e.inheritAttrs=L),$&&(e.components=$),M&&(e.directives=M)}(e)}finally{ew(),t()}}}let iA={get:(e,t)=>(eM(e,"get",""),e[t])};function iN(e){return{attrs:new Proxy(e.attrs,iA),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function iI(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(tI(tv(e.exposed)),{get:(t,n)=>n in t?t[n]:n in nR?nR[n](e):void 0,has:(e,t)=>t in e||t in nR})):e.proxy}function iR(e,t=!0){return E(e)?e.displayName||e.name:e.name||t&&e.__name}let iO=(e,t)=>(function(e,t,n=!1){let r,i;let l=E(e);return l?(r=e,i=h):(r=e.get,i=e.set),new tS(r,i,l||!i,n)})(e,0,ik);function iL(e,t,n){let r=arguments.length;return 2!==r?(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&it(n)&&(n=[n]),io(e,t,n)):!I(t)||x(t)?io(e,null,t):it(t)?io(e,null,[t]):io(e,t)}function i$(e,t){let n=e.memo;if(n.length!=t.length)return!1;for(let e=0;e<n.length;e++)if(K(n[e],t[e]))return!1;return r9>0&&r4&&r4.push(e),!0}let iM="3.4.31",iP="undefined"!=typeof document?document:null,iF=iP&&iP.createElement("template"),iV="transition",iB="animation",iD=Symbol("_vtc"),iU=(e,{slots:t})=>iL(rD,iK(e),t);iU.displayName="Transition";let ij={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},iH=iU.props=y({},rV,ij),iq=(e,t=[])=>{x(e)?e.forEach(e=>e(...t)):e&&e(...t)},iW=e=>!!e&&(x(e)?e.some(e=>e.length>1):e.length>1);function iK(e){let t={};for(let n in e)n in ij||(t[n]=e[n]);if(!1===e.css)return t;let{name:n="v",type:r,duration:i,enterFromClass:l=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:a=l,appearActiveClass:c=s,appearToClass:u=o,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,f=function(e){if(null==e)return null;if(I(e))return[X(e.enter),X(e.leave)];{let t=X(e);return[t,t]}}(i),m=f&&f[0],g=f&&f[1],{onBeforeEnter:b,onEnter:_,onEnterCancelled:S,onLeave:x,onLeaveCancelled:C,onBeforeAppear:k=b,onAppear:T=_,onAppearCancelled:w=S}=t,E=(e,t,n)=>{iG(e,t?u:o),iG(e,t?c:s),n&&n()},A=(e,t)=>{e._isLeaving=!1,iG(e,d),iG(e,h),iG(e,p),t&&t()},N=e=>(t,n)=>{let i=e?T:_,s=()=>E(t,e,n);iq(i,[t,s]),iJ(()=>{iG(t,e?a:l),iz(t,e?u:o),iW(i)||iQ(t,r,m,s)})};return y(t,{onBeforeEnter(e){iq(b,[e]),iz(e,l),iz(e,s)},onBeforeAppear(e){iq(k,[e]),iz(e,a),iz(e,c)},onEnter:N(!1),onAppear:N(!0),onLeave(e,t){e._isLeaving=!0;let n=()=>A(e,t);iz(e,d),iz(e,p),i1(),iJ(()=>{e._isLeaving&&(iG(e,d),iz(e,h),iW(x)||iQ(e,r,g,n))}),iq(x,[e,n])},onEnterCancelled(e){E(e,!1),iq(S,[e])},onAppearCancelled(e){E(e,!0),iq(w,[e])},onLeaveCancelled(e){A(e),iq(C,[e])}})}function iz(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[iD]||(e[iD]=new Set)).add(t)}function iG(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));let n=e[iD];n&&(n.delete(t),n.size||(e[iD]=void 0))}function iJ(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let iX=0;function iQ(e,t,n,r){let i=e._endId=++iX,l=()=>{i===e._endId&&r()};if(n)return setTimeout(l,n);let{type:s,timeout:o,propCount:a}=iZ(e,t);if(!s)return r();let c=s+"end",u=0,d=()=>{e.removeEventListener(c,p),l()},p=t=>{t.target===e&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},o+1),e.addEventListener(c,p)}function iZ(e,t){let n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(`${iV}Delay`),l=r(`${iV}Duration`),s=iY(i,l),o=r(`${iB}Delay`),a=r(`${iB}Duration`),c=iY(o,a),u=null,d=0,p=0;t===iV?s>0&&(u=iV,d=s,p=l.length):t===iB?c>0&&(u=iB,d=c,p=a.length):p=(u=(d=Math.max(s,c))>0?s>c?iV:iB:null)?u===iV?l.length:a.length:0;let h=u===iV&&/\b(transform|all)(,|$)/.test(r(`${iV}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:h}}function iY(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((t,n)=>i0(t)+i0(e[n])))}function i0(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function i1(){return document.body.offsetHeight}let i2=Symbol("_vod"),i3=Symbol("_vsh");function i6(e,t){e.style.display=t?e[i2]:"none",e[i3]=!t}let i4=Symbol("");function i8(e,t){if(1===e.nodeType){let n=e.style,r="";for(let e in t)n.setProperty(`--${e}`,t[e]),r+=`--${e}: ${t[e]};`;n[i4]=r}}let i5=/(^|;)\s*display\s*:/,i9=/\s*!important$/;function i7(e,t,n){if(x(n))n.forEach(n=>i7(e,t,n));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{let r=function(e,t){let n=lt[t];if(n)return n;let r=U(t);if("filter"!==r&&r in e)return lt[t]=r;r=q(r);for(let n=0;n<le.length;n++){let i=le[n]+r;if(i in e)return lt[t]=i}return t}(e,t);i9.test(n)?e.setProperty(H(r),n.replace(i9,""),"important"):e[r]=n}}let le=["Webkit","Moz","ms"],lt={},ln="http://www.w3.org/1999/xlink";function lr(e,t,n,r,i,l=ec(t)){r&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(ln,t.slice(6,t.length)):e.setAttributeNS(ln,t,n):null==n||l&&!(n||""===n)?e.removeAttribute(t):e.setAttribute(t,l?"":N(n)?String(n):n)}function li(e,t,n,r){e.addEventListener(t,n,r)}let ll=Symbol("_vei"),ls=/(?:Once|Passive|Capture)$/,lo=0,la=Promise.resolve(),lc=()=>lo||(la.then(()=>lo=0),lo=Date.now()),lu=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&123>e.charCodeAt(2);/*! #__NO_SIDE_EFFECTS__ */function ld(e,t,n){let r=nE(e,t);class i extends lh{constructor(e){super(r,e,n)}}return i.def=r,i}let lp="undefined"!=typeof HTMLElement?HTMLElement:class{};class lh extends lp{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,tG(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),lU(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver(e=>{for(let t of e)this._setAttr(t.attributeName)}),this._ob.observe(this,{attributes:!0});let e=(e,t=!1)=>{let n;let{props:r,styles:i}=e;if(r&&!x(r))for(let e in r){let t=r[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=X(this._props[e])),(n||(n=Object.create(null)))[U(e)]=!0)}this._numberProps=n,t&&this._resolveProps(e),this._applyStyles(i),this._update()},t=this._def.__asyncLoader;t?t().then(t=>e(t,!0)):e(this._def)}_resolveProps(e){let{props:t}=e,n=x(t)?t:Object.keys(t||{});for(let e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e],!0,!1);for(let e of n.map(U))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t)}})}_setAttr(e){let t=this.hasAttribute(e)?this.getAttribute(e):void 0,n=U(e);this._numberProps&&this._numberProps[n]&&(t=X(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,r=!0){t!==this._props[e]&&(this._props[e]=t,r&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(H(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(H(e),t+""):t||this.removeAttribute(H(e))))}_update(){lU(this._createVNode(),this.shadowRoot)}_createVNode(){let e=io(this._def,y({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;let t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),H(e)!==e&&t(H(e),n)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof lh){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(e=>{let t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)})}}let lf=new WeakMap,lm=new WeakMap,lg=Symbol("_moveCb"),ly=Symbol("_enterCb"),lv={name:"TransitionGroup",props:y({},iH,{tag:String,moveClass:String}),setup(e,{slots:t}){let n,r;let i=i_(),l=rP();return nb(()=>{if(!n.length)return;let t=e.moveClass||`${e.name||"v"}-move`;if(!function(e,t,n){let r=e.cloneNode(),i=e[iD];i&&i.forEach(e=>{e.split(/\s+/).forEach(e=>e&&r.classList.remove(e))}),n.split(/\s+/).forEach(e=>e&&r.classList.add(e)),r.style.display="none";let l=1===t.nodeType?t:t.parentNode;l.appendChild(r);let{hasTransform:s}=iZ(r);return l.removeChild(r),s}(n[0].el,i.vnode.el,t))return;n.forEach(lb),n.forEach(l_);let r=n.filter(lS);i1(),r.forEach(e=>{let n=e.el,r=n.style;iz(n,t),r.transform=r.webkitTransform=r.transitionDuration="";let i=n[lg]=e=>{(!e||e.target===n)&&(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",i),n[lg]=null,iG(n,t))};n.addEventListener("transitionend",i)})}),()=>{let s=ty(e),o=iK(s),a=s.tag||r0;if(n=[],r)for(let e=0;e<r.length;e++){let t=r[e];t.el&&t.el instanceof Element&&(n.push(t),rW(t,rj(t,o,l,i)),lf.set(t,t.el.getBoundingClientRect()))}r=t.default?rK(t.default()):[];for(let e=0;e<r.length;e++){let t=r[e];null!=t.key&&rW(t,rj(t,o,l,i))}return io(a,null,r)}}};function lb(e){let t=e.el;t[lg]&&t[lg](),t[ly]&&t[ly]()}function l_(e){lm.set(e,e.el.getBoundingClientRect())}function lS(e){let t=lf.get(e),n=lm.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){let t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}lv.props;let lx=e=>{let t=e.props["onUpdate:modelValue"]||!1;return x(t)?e=>z(t,e):t};function lC(e){e.target.composing=!0}function lk(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}let lT=Symbol("_assign"),lw={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[lT]=lx(i);let l=r||i.props&&"number"===i.props.type;li(e,t?"change":"input",t=>{if(t.target.composing)return;let r=e.value;n&&(r=r.trim()),l&&(r=J(r)),e[lT](r)}),n&&li(e,"change",()=>{e.value=e.value.trim()}),t||(li(e,"compositionstart",lC),li(e,"compositionend",lk),li(e,"change",lk))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:l}},s){if(e[lT]=lx(s),e.composing)return;let o=(l||"number"===e.type)&&!/^0\d/.test(e.value)?J(e.value):e.value,a=null==t?"":t;o===a||document.activeElement===e&&"range"!==e.type&&(r&&t===n||i&&e.value.trim()===a)||(e.value=a)}},lE={deep:!0,created(e,t,n){e[lT]=lx(n),li(e,"change",()=>{let t=e._modelValue,n=lO(e),r=e.checked,i=e[lT];if(x(t)){let e=ed(t,n),l=-1!==e;if(r&&!l)i(t.concat(n));else if(!r&&l){let n=[...t];n.splice(e,1),i(n)}}else if(k(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(lL(e,r))})},mounted:lA,beforeUpdate(e,t,n){e[lT]=lx(n),lA(e,t,n)}};function lA(e,{value:t,oldValue:n},r){e._modelValue=t,x(t)?e.checked=ed(t,r.props.value)>-1:k(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=eu(t,lL(e,!0)))}let lN={created(e,{value:t},n){e.checked=eu(t,n.props.value),e[lT]=lx(n),li(e,"change",()=>{e[lT](lO(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[lT]=lx(r),t!==n&&(e.checked=eu(t,r.props.value))}},lI={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=k(t);li(e,"change",()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?J(lO(e)):lO(e));e[lT](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,tG(()=>{e._assigning=!1})}),e[lT]=lx(r)},mounted(e,{value:t,modifiers:{number:n}}){lR(e,t)},beforeUpdate(e,t,n){e[lT]=lx(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||lR(e,t)}};function lR(e,t,n){let r=e.multiple,i=x(t);if(!r||i||k(t)){for(let n=0,l=e.options.length;n<l;n++){let l=e.options[n],s=lO(l);if(r){if(i){let e=typeof s;"string"===e||"number"===e?l.selected=t.some(e=>String(e)===String(s)):l.selected=ed(t,s)>-1}else l.selected=t.has(s)}else if(eu(lO(l),t)){e.selectedIndex!==n&&(e.selectedIndex=n);return}}r||-1===e.selectedIndex||(e.selectedIndex=-1)}}function lO(e){return"_value"in e?e._value:e.value}function lL(e,t){let n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}function l$(e,t,n,r,i){let l=function(e,t){switch(e){case"SELECT":return lI;case"TEXTAREA":return lw;default:switch(t){case"checkbox":return lE;case"radio":return lN;default:return lw}}}(e.tagName,n.props&&n.props.type)[i];l&&l(e,t,n,r)}let lM=["ctrl","shift","alt","meta"],lP={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>lM.some(n=>e[`${n}Key`]&&!t.includes(n))},lF={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},lV=y({patchProp:(e,t,n,r,i,l,s,o,a)=>{let c="svg"===i;"class"===t?function(e,t,n){let r=e[iD];r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,r,c):"style"===t?function(e,t,n){let r=e.style,i=A(n),l=!1;if(n&&!i){if(t){if(A(t))for(let e of t.split(";")){let t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&i7(r,t,"")}else for(let e in t)null==n[e]&&i7(r,e,"")}for(let e in n)"display"===e&&(l=!0),i7(r,e,n[e])}else if(i){if(t!==n){let e=r[i4];e&&(n+=";"+e),r.cssText=n,l=i5.test(n)}}else t&&e.removeAttribute("style");i2 in e&&(e[i2]=l?r.display:"",e[i3]&&(r.display="none"))}(e,n,r):m(t)?g(t)||function(e,t,n,r,i=null){let l=e[ll]||(e[ll]={}),s=l[t];if(r&&s)s.value=r;else{let[n,o]=function(e){let t;if(ls.test(e)){let n;for(t={};n=e.match(ls);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):H(e.slice(2)),t]}(t);r?li(e,n,l[t]=function(e,t){let n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();tF(function(e,t){if(!x(t))return t;{let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}}(e,n.value),t,5,[e])};return n.value=e,n.attached=lc(),n}(r,i),o):s&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,s,o),l[t]=void 0)}}(e,t,0,r,s):("."===t[0]?(t=t.slice(1),0):"^"===t[0]?(t=t.slice(1),1):!function(e,t,n,r){if(r)return!!("innerHTML"===t||"textContent"===t||t in e&&lu(t)&&E(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){let t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return!(lu(t)&&A(n))&&t in e}(e,t,r,c))?("true-value"===t?e._trueValue=r:"false-value"===t&&(e._falseValue=r),lr(e,t,r,c)):(!function(e,t,n,r,i,l,s){if("innerHTML"===t||"textContent"===t){r&&s(r,i,l),e[t]=null==n?"":n;return}let o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){let r="OPTION"===o?e.getAttribute("value")||"":e.value,i=null==n?"":String(n);r===i&&"_value"in e||(e.value=i),null==n&&e.removeAttribute(t),e._value=n;return}let a=!1;if(""===n||null==n){let r=typeof e[t];if("boolean"===r){var c;n=!!(c=n)||""===c}else null==n&&"string"===r?(n="",a=!0):"number"===r&&(n=0,a=!0)}try{e[t]=n}catch(e){}a&&e.removeAttribute(t)}(e,t,r,l,s,o,a),e.tagName.includes("-")||"value"!==t&&"checked"!==t&&"selected"!==t||lr(e,t,r,c,s,"value"!==t))}},{insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i="svg"===t?iP.createElementNS("http://www.w3.org/2000/svg",e):"mathml"===t?iP.createElementNS("http://www.w3.org/1998/Math/MathML",e):n?iP.createElement(e,{is:n}):iP.createElement(e);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>iP.createTextNode(e),createComment:e=>iP.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>iP.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,l){let s=n?n.previousSibling:t.lastChild;if(i&&(i===l||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),i!==l&&(i=i.nextSibling););else{iF.innerHTML="svg"===r?`<svg>${e}</svg>`:"mathml"===r?`<math>${e}</math>`:e;let i=iF.content;if("svg"===r||"mathml"===r){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[s?s.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}}),lB=!1;function lD(){return a=lB?a:rp(lV),lB=!0,a}let lU=(...e)=>{(a||(a=rh(lV))).render(...e)},lj=(...e)=>{lD().hydrate(...e)};function lH(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function lq(e){return A(e)?document.querySelector(e):e}let lW=Symbol(""),lK=Symbol(""),lz=Symbol(""),lG=Symbol(""),lJ=Symbol(""),lX=Symbol(""),lQ=Symbol(""),lZ=Symbol(""),lY=Symbol(""),l0=Symbol(""),l1=Symbol(""),l2=Symbol(""),l3=Symbol(""),l6=Symbol(""),l4=Symbol(""),l8=Symbol(""),l5=Symbol(""),l9=Symbol(""),l7=Symbol(""),se=Symbol(""),st=Symbol(""),sn=Symbol(""),sr=Symbol(""),si=Symbol(""),sl=Symbol(""),ss=Symbol(""),so=Symbol(""),sa=Symbol(""),sc=Symbol(""),su=Symbol(""),sd=Symbol(""),sp=Symbol(""),sh=Symbol(""),sf=Symbol(""),sm=Symbol(""),sg=Symbol(""),sy=Symbol(""),sv=Symbol(""),sb=Symbol(""),s_={[lW]:"Fragment",[lK]:"Teleport",[lz]:"Suspense",[lG]:"KeepAlive",[lJ]:"BaseTransition",[lX]:"openBlock",[lQ]:"createBlock",[lZ]:"createElementBlock",[lY]:"createVNode",[l0]:"createElementVNode",[l1]:"createCommentVNode",[l2]:"createTextVNode",[l3]:"createStaticVNode",[l6]:"resolveComponent",[l4]:"resolveDynamicComponent",[l8]:"resolveDirective",[l5]:"resolveFilter",[l9]:"withDirectives",[l7]:"renderList",[se]:"renderSlot",[st]:"createSlots",[sn]:"toDisplayString",[sr]:"mergeProps",[si]:"normalizeClass",[sl]:"normalizeStyle",[ss]:"normalizeProps",[so]:"guardReactiveProps",[sa]:"toHandlers",[sc]:"camelize",[su]:"capitalize",[sd]:"toHandlerKey",[sp]:"setBlockTracking",[sh]:"pushScopeId",[sf]:"popScopeId",[sm]:"withCtx",[sg]:"unref",[sy]:"isRef",[sv]:"withMemo",[sb]:"isMemoSame"},sS={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function sx(e,t,n,r,i,l,s,o=!1,a=!1,c=!1,u=sS){return e&&(o?(e.helper(lX),e.helper(e.inSSR||c?lQ:lZ)):e.helper(e.inSSR||c?lY:l0),s&&e.helper(l9)),{type:13,tag:t,props:n,children:r,patchFlag:i,dynamicProps:l,directives:s,isBlock:o,disableTracking:a,isComponent:c,loc:u}}function sC(e,t=sS){return{type:17,loc:t,elements:e}}function sk(e,t=sS){return{type:15,loc:t,properties:e}}function sT(e,t){return{type:16,loc:sS,key:A(e)?sw(e,!0):e,value:t}}function sw(e,t=!1,n=sS,r=0){return{type:4,loc:n,content:e,isStatic:t,constType:t?3:r}}function sE(e,t=sS){return{type:8,loc:t,children:e}}function sA(e,t=[],n=sS){return{type:14,loc:n,callee:e,arguments:t}}function sN(e,t,n=!1,r=!1,i=sS){return{type:18,params:e,returns:t,newline:n,isSlot:r,loc:i}}function sI(e,t,n,r=!0){return{type:19,test:e,consequent:t,alternate:n,newline:r,loc:sS}}function sR(e,{helper:t,removeHelper:n,inSSR:r}){if(!e.isBlock){var i,l;e.isBlock=!0,n((i=e.isComponent,r||i?lY:l0)),t(lX),t((l=e.isComponent,r||l?lQ:lZ))}}let sO=new Uint8Array([123,123]),sL=new Uint8Array([125,125]);function s$(e){return e>=97&&e<=122||e>=65&&e<=90}function sM(e){return 32===e||10===e||9===e||12===e||13===e}function sP(e){return 47===e||62===e||sM(e)}function sF(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}let sV={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};function sB(e){throw e}function sD(e){}function sU(e,t,n,r){let i=SyntaxError(String(`https://vuejs.org/error-reference/#compiler-${e}`));return i.code=e,i.loc=t,i}let sj=e=>4===e.type&&e.isStatic;function sH(e){switch(e){case"Teleport":case"teleport":return lK;case"Suspense":case"suspense":return lz;case"KeepAlive":case"keep-alive":return lG;case"BaseTransition":case"base-transition":return lJ}}let sq=/^\d|[^\$\w\xA0-\uFFFF]/,sW=e=>!sq.test(e),sK=/[A-Za-z_$\xA0-\uFFFF]/,sz=/[\.\?\w$\xA0-\uFFFF]/,sG=/\s+[.[]\s*|\s*[.[]\s+/g,sJ=e=>{e=e.trim().replace(sG,e=>e.trim());let t=0,n=[],r=0,i=0,l=null;for(let s=0;s<e.length;s++){let o=e.charAt(s);switch(t){case 0:if("["===o)n.push(t),t=1,r++;else if("("===o)n.push(t),t=2,i++;else if(!(0===s?sK:sz).test(o))return!1;break;case 1:"'"===o||'"'===o||"`"===o?(n.push(t),t=3,l=o):"["===o?r++:"]"!==o||--r||(t=n.pop());break;case 2:if("'"===o||'"'===o||"`"===o)n.push(t),t=3,l=o;else if("("===o)i++;else if(")"===o){if(s===e.length-1)return!1;--i||(t=n.pop())}break;case 3:o===l&&(t=n.pop(),l=null)}}return!r&&!i};function sX(e,t,n=!1){for(let r=0;r<e.props.length;r++){let i=e.props[r];if(7===i.type&&(n||i.exp)&&(A(t)?i.name===t:t.test(i.name)))return i}}function sQ(e,t,n=!1,r=!1){for(let i=0;i<e.props.length;i++){let l=e.props[i];if(6===l.type){if(n)continue;if(l.name===t&&(l.value||r))return l}else if("bind"===l.name&&(l.exp||r)&&sZ(l.arg,t))return l}}function sZ(e,t){return!!(e&&sj(e)&&e.content===t)}function sY(e){return 5===e.type||2===e.type}function s0(e){return 7===e.type&&"slot"===e.name}function s1(e){return 1===e.type&&3===e.tagType}function s2(e){return 1===e.type&&2===e.tagType}let s3=new Set([ss,so]);function s6(e,t,n){let r,i;let l=13===e.type?e.props:e.arguments[2],s=[];if(l&&!A(l)&&14===l.type){let e=function e(t,n=[]){if(t&&!A(t)&&14===t.type){let r=t.callee;if(!A(r)&&s3.has(r))return e(t.arguments[0],n.concat(t))}return[t,n]}(l);l=e[0],i=(s=e[1])[s.length-1]}if(null==l||A(l))r=sk([t]);else if(14===l.type){let e=l.arguments[0];A(e)||15!==e.type?l.callee===sa?r=sA(n.helper(sr),[sk([t]),l]):l.arguments.unshift(sk([t])):s4(t,e)||e.properties.unshift(t),r||(r=l)}else 15===l.type?(s4(t,l)||l.properties.unshift(t),r=l):(r=sA(n.helper(sr),[sk([t]),l]),i&&i.callee===so&&(i=s[s.length-2]));13===e.type?i?i.arguments[0]=r:e.props=r:i?i.arguments[0]=r:e.arguments[2]=r}function s4(e,t){let n=!1;if(4===e.key.type){let r=e.key.content;n=t.properties.some(e=>4===e.key.type&&e.key.content===r)}return n}function s8(e,t){return`_${t}_${e.replace(/[^\w]/g,(t,n)=>"-"===t?"_":e.charCodeAt(n).toString())}`}let s5=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,s9={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:f,isPreTag:f,isCustomElement:f,onError:sB,onWarn:sD,comments:!1,prefixIdentifiers:!1},s7=s9,oe=null,ot="",on=null,or=null,oi="",ol=-1,os=-1,oo=0,oa=!1,oc=null,ou=[],od=new class{constructor(e,t){this.stack=e,this.cbs=t,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=sO,this.delimiterClose=sL,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return 2===this.mode&&0===this.stack.length}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=sO,this.delimiterClose=sL}getPos(e){let t=1,n=e+1;for(let r=this.newlines.length-1;r>=0;r--){let i=this.newlines[r];if(e>i){t=r+2,n=e-i;break}}return{column:n,line:t,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){60===e?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):this.inVPre||e!==this.delimiterOpen[0]||(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex]){if(this.delimiterIndex===this.delimiterOpen.length-1){let e=this.index+1-this.delimiterOpen.length;e>this.sectionStart&&this.cbs.ontext(this.sectionStart,e),this.state=3,this.sectionStart=e}else this.delimiterIndex++}else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){let t=this.sequenceIndex===this.currentSequence.length;if(t?sP(e):(32|e)===this.currentSequence[this.sequenceIndex]){if(!t){this.sequenceIndex++;return}}else this.inRCDATA=!1;this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(62===e||sM(e)){let t=this.index-this.currentSequence.length;if(this.sectionStart<t){let e=this.index;this.index=t,this.cbs.ontext(this.sectionStart,t),this.index=e}this.sectionStart=t+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(32|e)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:0===this.sequenceIndex?this.currentSequence!==sV.TitleEnd&&(this.currentSequence!==sV.TextareaEnd||this.inSFCRoot)?this.fastForwardTo(60)&&(this.sequenceIndex=1):e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.sequenceIndex=Number(60===e)}stateCDATASequence(e){e===sV.Cdata[this.sequenceIndex]?++this.sequenceIndex===sV.Cdata.length&&(this.state=28,this.currentSequence=sV.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){let t=this.buffer.charCodeAt(this.index);if(10===t&&this.newlines.push(this.index),t===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===sV.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):0===this.sequenceIndex?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,t){this.enterRCDATA(e,t),this.state=31}enterRCDATA(e,t){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=t}stateBeforeTagName(e){33===e?(this.state=22,this.sectionStart=this.index+1):63===e?(this.state=24,this.sectionStart=this.index+1):s$(e)?(this.sectionStart=this.index,0===this.mode?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:116===e?this.state=30:this.state=115===e?29:6):47===e?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){sP(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(sP(e)){let t=this.buffer.slice(this.sectionStart,this.index);"template"!==t&&this.enterRCDATA(sF("</"+t),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){sM(e)||(62===e?(this.state=1,this.sectionStart=this.index+1):(this.state=s$(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(62===e||sM(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){62===e&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){62===e?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):47===e?this.state=7:60===e&&47===this.peek()?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):sM(e)||this.handleAttrStart(e)}handleAttrStart(e){118===e&&45===this.peek()?(this.state=13,this.sectionStart=this.index):46===e||58===e||64===e||35===e?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){62===e?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):sM(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(61===e||sP(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){61===e||sP(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):58===e?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):46===e&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){61===e||sP(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):91===e?this.state=15:46===e&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){93===e?this.state=14:(61===e||sP(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){61===e||sP(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):46===e&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){61===e?this.state=18:47===e||62===e?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):sM(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){34===e?(this.state=19,this.sectionStart=this.index+1):39===e?(this.state=20,this.sectionStart=this.index+1):sM(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,t){(e===t||this.fastForwardTo(t))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(34===t?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){sM(e)||62===e?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(39===e||60===e||61===e||96===e)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){91===e?(this.state=26,this.sequenceIndex=0):this.state=45===e?25:23}stateInDeclaration(e){(62===e||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(62===e||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){45===e?(this.state=28,this.currentSequence=sV.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(62===e||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===sV.ScriptEnd[3]?this.startSpecial(sV.ScriptEnd,4):e===sV.StyleEnd[3]?this.startSpecial(sV.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===sV.TitleEnd[3]?this.startSpecial(sV.TitleEnd,4):e===sV.TextareaEnd[3]?this.startSpecial(sV.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){let e=this.buffer.charCodeAt(this.index);switch(10===e&&this.newlines.push(this.index),this.state){case 1:this.stateText(e);break;case 2:this.stateInterpolationOpen(e);break;case 3:this.stateInterpolation(e);break;case 4:this.stateInterpolationClose(e);break;case 31:this.stateSpecialStartSequence(e);break;case 32:this.stateInRCDATA(e);break;case 26:this.stateCDATASequence(e);break;case 19:this.stateInAttrValueDoubleQuotes(e);break;case 12:this.stateInAttrName(e);break;case 13:this.stateInDirName(e);break;case 14:this.stateInDirArg(e);break;case 15:this.stateInDynamicDirArg(e);break;case 16:this.stateInDirModifier(e);break;case 28:this.stateInCommentLike(e);break;case 27:this.stateInSpecialComment(e);break;case 11:this.stateBeforeAttrName(e);break;case 6:this.stateInTagName(e);break;case 34:this.stateInSFCRootTagName(e);break;case 9:this.stateInClosingTagName(e);break;case 5:this.stateBeforeTagName(e);break;case 17:this.stateAfterAttrName(e);break;case 20:this.stateInAttrValueSingleQuotes(e);break;case 18:this.stateBeforeAttrValue(e);break;case 8:this.stateBeforeClosingTagName(e);break;case 10:this.stateAfterClosingTagName(e);break;case 29:this.stateBeforeSpecialS(e);break;case 30:this.stateBeforeSpecialT(e);break;case 21:this.stateInAttrValueNoQuotes(e);break;case 7:this.stateInSelfClosingTag(e);break;case 23:this.stateInDeclaration(e);break;case 22:this.stateBeforeDeclaration(e);break;case 25:this.stateBeforeComment(e);break;case 24:this.stateInProcessingInstruction(e);break;case 33:this.stateInEntity()}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(1===this.state||32===this.state&&0===this.sequenceIndex?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(19===this.state||20===this.state||21===this.state)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){let e=this.buffer.length;this.sectionStart>=e||(28===this.state?this.currentSequence===sV.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):6===this.state||11===this.state||18===this.state||17===this.state||12===this.state||13===this.state||14===this.state||15===this.state||16===this.state||20===this.state||19===this.state||21===this.state||9===this.state||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,t){}}(ou,{onerr:oE,ontext(e,t){og(of(e,t),e,t)},ontextentity(e,t,n){og(e,t,n)},oninterpolation(e,t){if(oa)return og(of(e,t),e,t);let n=e+od.delimiterOpen.length,r=t-od.delimiterClose.length;for(;sM(ot.charCodeAt(n));)n++;for(;sM(ot.charCodeAt(r-1));)r--;let i=of(n,r);i.includes("&")&&(i=s7.decodeEntities(i,!1)),oC({type:5,content:ow(i,!1,ok(n,r)),loc:ok(e,t)})},onopentagname(e,t){let n=of(e,t);on={type:1,tag:n,ns:s7.getNamespace(n,ou[0],s7.ns),tagType:0,props:[],children:[],loc:ok(e-1,t),codegenNode:void 0}},onopentagend(e){om(e)},onclosetag(e,t){let n=of(e,t);if(!s7.isVoidTag(n)){let r=!1;for(let e=0;e<ou.length;e++)if(ou[e].tag.toLowerCase()===n.toLowerCase()){r=!0,e>0&&ou[0].loc.start.offset;for(let n=0;n<=e;n++)oy(ou.shift(),t,n<e);break}r||ov(e,60)}},onselfclosingtag(e){let t=on.tag;on.isSelfClosing=!0,om(e),ou[0]&&ou[0].tag===t&&oy(ou.shift(),e)},onattribname(e,t){or={type:6,name:of(e,t),nameLoc:ok(e,t),value:void 0,loc:ok(e)}},ondirname(e,t){let n=of(e,t),r="."===n||":"===n?"bind":"@"===n?"on":"#"===n?"slot":n.slice(2);if(oa||""===r)or={type:6,name:n,nameLoc:ok(e,t),value:void 0,loc:ok(e)};else if(or={type:7,name:r,rawName:n,exp:void 0,arg:void 0,modifiers:"."===n?["prop"]:[],loc:ok(e)},"pre"===r){oa=od.inVPre=!0,oc=on;let e=on.props;for(let t=0;t<e.length;t++)7===e[t].type&&(e[t]=function(e){let t={type:6,name:e.rawName,nameLoc:ok(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){let n=e.exp.loc;n.end.offset<e.loc.end.offset&&(n.start.offset--,n.start.column--,n.end.offset++,n.end.column++),t.value={type:2,content:e.exp.content,loc:n}}return t}(e[t]))}},ondirarg(e,t){if(e===t)return;let n=of(e,t);if(oa)or.name+=n,oT(or.nameLoc,t);else{let r="["!==n[0];or.arg=ow(r?n:n.slice(1,-1),r,ok(e,t),r?3:0)}},ondirmodifier(e,t){let n=of(e,t);if(oa)or.name+="."+n,oT(or.nameLoc,t);else if("slot"===or.name){let e=or.arg;e&&(e.content+="."+n,oT(e.loc,t))}else or.modifiers.push(n)},onattribdata(e,t){oi+=of(e,t),ol<0&&(ol=e),os=t},onattribentity(e,t,n){oi+=e,ol<0&&(ol=t),os=n},onattribnameend(e){let t=of(or.loc.start.offset,e);7===or.type&&(or.rawName=t),on.props.some(e=>(7===e.type?e.rawName:e.name)===t)},onattribend(e,t){on&&or&&(oT(or.loc,t),0!==e&&(oi.includes("&")&&(oi=s7.decodeEntities(oi,!0)),6===or.type?("class"===or.name&&(oi=ox(oi).trim()),or.value={type:2,content:oi,loc:1===e?ok(ol,os):ok(ol-1,os+1)},od.inSFCRoot&&"template"===on.tag&&"lang"===or.name&&oi&&"html"!==oi&&od.enterRCDATA(sF("</template"),0)):(or.exp=ow(oi,!1,ok(ol,os),0,0),"for"===or.name&&(or.forParseResult=function(e){let t=e.loc,n=e.content,r=n.match(s5);if(!r)return;let[,i,l]=r,s=(e,n,r=!1)=>{let i=t.start.offset+n,l=i+e.length;return ow(e,!1,ok(i,l),0,r?1:0)},o={source:s(l.trim(),n.indexOf(l,i.length)),value:void 0,key:void 0,index:void 0,finalized:!1},a=i.trim().replace(oh,"").trim(),c=i.indexOf(a),u=a.match(op);if(u){let e;a=a.replace(op,"").trim();let t=u[1].trim();if(t&&(e=n.indexOf(t,c+a.length),o.key=s(t,e,!0)),u[2]){let r=u[2].trim();r&&(o.index=s(r,n.indexOf(r,o.key?e+t.length:c+a.length),!0))}}return a&&(o.value=s(a,c,!0)),o}(or.exp)))),(7!==or.type||"pre"!==or.name)&&on.props.push(or)),oi="",ol=os=-1},oncomment(e,t){s7.comments&&oC({type:3,content:of(e,t),loc:ok(e-4,t+3)})},onend(){let e=ot.length;for(let t=0;t<ou.length;t++)oy(ou[t],e-1),ou[t].loc.start.offset},oncdata(e,t){0!==ou[0].ns&&og(of(e,t),e,t)},onprocessinginstruction(e){(ou[0]?ou[0].ns:s7.ns)===0&&oE(21,e-1)}}),op=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,oh=/^\(|\)$/g;function of(e,t){return ot.slice(e,t)}function om(e){od.inSFCRoot&&(on.innerLoc=ok(e+1,e+1)),oC(on);let{tag:t,ns:n}=on;0===n&&s7.isPreTag(t)&&oo++,s7.isVoidTag(t)?oy(on,e):(ou.unshift(on),(1===n||2===n)&&(od.inXML=!0)),on=null}function og(e,t,n){{let t=ou[0]&&ou[0].tag;"script"!==t&&"style"!==t&&e.includes("&")&&(e=s7.decodeEntities(e,!1))}let r=ou[0]||oe,i=r.children[r.children.length-1];i&&2===i.type?(i.content+=e,oT(i.loc,n)):r.children.push({type:2,content:e,loc:ok(t,n)})}function oy(e,t,n=!1){n?oT(e.loc,ov(t,60)):oT(e.loc,function(e,t){let n=e;for(;62!==ot.charCodeAt(n)&&n<ot.length-1;)n++;return n}(t,0)+1),od.inSFCRoot&&(e.children.length?e.innerLoc.end=y({},e.children[e.children.length-1].loc.end):e.innerLoc.end=y({},e.innerLoc.start),e.innerLoc.source=of(e.innerLoc.start.offset,e.innerLoc.end.offset));let{tag:r,ns:i}=e;!oa&&("slot"===r?e.tagType=2:function({tag:e,props:t}){if("template"===e){for(let e=0;e<t.length;e++)if(7===t[e].type&&ob.has(t[e].name))return!0}return!1}(e)?e.tagType=3:function({tag:e,props:t}){var n;if(s7.isCustomElement(e))return!1;if("component"===e||(n=e.charCodeAt(0))>64&&n<91||sH(e)||s7.isBuiltInComponent&&s7.isBuiltInComponent(e)||s7.isNativeTag&&!s7.isNativeTag(e))return!0;for(let e=0;e<t.length;e++){let n=t[e];if(6===n.type&&"is"===n.name&&n.value&&n.value.content.startsWith("vue:"))return!0}return!1}(e)&&(e.tagType=1)),od.inRCDATA||(e.children=oS(e.children,e.tag)),0===i&&s7.isPreTag(r)&&oo--,oc===e&&(oa=od.inVPre=!1,oc=null),od.inXML&&(ou[0]?ou[0].ns:s7.ns)===0&&(od.inXML=!1)}function ov(e,t){let n=e;for(;ot.charCodeAt(n)!==t&&n>=0;)n--;return n}let ob=new Set(["if","else","else-if","for","slot"]),o_=/\r\n/g;function oS(e,t){let n="preserve"!==s7.whitespace,r=!1;for(let t=0;t<e.length;t++){let i=e[t];if(2===i.type){if(oo)i.content=i.content.replace(o_,"\n");else if(function(e){for(let t=0;t<e.length;t++)if(!sM(e.charCodeAt(t)))return!1;return!0}(i.content)){let l=e[t-1]&&e[t-1].type,s=e[t+1]&&e[t+1].type;!l||!s||n&&(3===l&&(3===s||1===s)||1===l&&(3===s||1===s&&function(e){for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);if(10===n||13===n)return!0}return!1}(i.content)))?(r=!0,e[t]=null):i.content=" "}else n&&(i.content=ox(i.content))}}if(oo&&t&&s7.isPreTag(t)){let t=e[0];t&&2===t.type&&(t.content=t.content.replace(/^\r?\n/,""))}return r?e.filter(Boolean):e}function ox(e){let t="",n=!1;for(let r=0;r<e.length;r++)sM(e.charCodeAt(r))?n||(t+=" ",n=!0):(t+=e[r],n=!1);return t}function oC(e){(ou[0]||oe).children.push(e)}function ok(e,t){return{start:od.getPos(e),end:null==t?t:od.getPos(t),source:null==t?t:of(e,t)}}function oT(e,t){e.end=od.getPos(t),e.source=of(e.start.offset,t)}function ow(e,t=!1,n,r=0,i=0){return sw(e,t,n,r)}function oE(e,t,n){s7.onError(sU(e,ok(t,t)))}function oA(e,t){let{children:n}=e;return 1===n.length&&1===t.type&&!s2(t)}function oN(e,t){let{constantCache:n}=t;switch(e.type){case 1:if(0!==e.tagType)return 0;let r=n.get(e);if(void 0!==r)return r;let i=e.codegenNode;if(13!==i.type||i.isBlock&&"svg"!==e.tag&&"foreignObject"!==e.tag&&"math"!==e.tag)return 0;if(oL(i))return n.set(e,0),0;{let r=3,c=oR(e,t);if(0===c)return n.set(e,0),0;c<r&&(r=c);for(let i=0;i<e.children.length;i++){let l=oN(e.children[i],t);if(0===l)return n.set(e,0),0;l<r&&(r=l)}if(r>1)for(let i=0;i<e.props.length;i++){let l=e.props[i];if(7===l.type&&"bind"===l.name&&l.exp){let i=oN(l.exp,t);if(0===i)return n.set(e,0),0;i<r&&(r=i)}}if(i.isBlock){var l,s,o,a;for(let t=0;t<e.props.length;t++)if(7===e.props[t].type)return n.set(e,0),0;t.removeHelper(lX),t.removeHelper((l=t.inSSR,s=i.isComponent,l||s?lQ:lZ)),i.isBlock=!1,t.helper((o=t.inSSR,a=i.isComponent,o||a?lY:l0))}return n.set(e,r),r}case 2:case 3:return 3;case 9:case 11:case 10:default:return 0;case 5:case 12:return oN(e.content,t);case 4:return e.constType;case 8:let c=3;for(let n=0;n<e.children.length;n++){let r=e.children[n];if(A(r)||N(r))continue;let i=oN(r,t);if(0===i)return 0;i<c&&(c=i)}return c}}let oI=new Set([si,sl,ss,so]);function oR(e,t){let n=3,r=oO(e);if(r&&15===r.type){let{properties:e}=r;for(let r=0;r<e.length;r++){let i;let{key:l,value:s}=e[r],o=oN(l,t);if(0===o)return o;if(o<n&&(n=o),0===(i=4===s.type?oN(s,t):14===s.type?function e(t,n){if(14===t.type&&!A(t.callee)&&oI.has(t.callee)){let r=t.arguments[0];if(4===r.type)return oN(r,n);if(14===r.type)return e(r,n)}return 0}(s,t):0))return i;i<n&&(n=i)}}return n}function oO(e){let t=e.codegenNode;if(13===t.type)return t.props}function oL(e){let t=e.patchFlag;return t?parseInt(t,10):void 0}function o$(e,t){t.currentNode=e;let{nodeTransforms:n}=t,r=[];for(let i=0;i<n.length;i++){let l=n[i](e,t);if(l&&(x(l)?r.push(...l):r.push(l)),!t.currentNode)return;e=t.currentNode}switch(e.type){case 3:t.ssr||t.helper(l1);break;case 5:t.ssr||t.helper(sn);break;case 9:for(let n=0;n<e.branches.length;n++)o$(e.branches[n],t);break;case 10:case 11:case 1:case 0:!function(e,t){let n=0,r=()=>{n--};for(;n<e.children.length;n++){let i=e.children[n];A(i)||(t.grandParent=t.parent,t.parent=e,t.childIndex=n,t.onNodeRemoved=r,o$(i,t))}}(e,t)}t.currentNode=e;let i=r.length;for(;i--;)r[i]()}function oM(e,t){let n=A(e)?t=>t===e:t=>e.test(t);return(e,r)=>{if(1===e.type){let{props:i}=e;if(3===e.tagType&&i.some(s0))return;let l=[];for(let s=0;s<i.length;s++){let o=i[s];if(7===o.type&&n(o.name)){i.splice(s,1),s--;let n=t(e,o,r);n&&l.push(n)}}return l}}}let oP="/*#__PURE__*/",oF=e=>`${s_[e]}: _${s_[e]}`;function oV(e,t,{helper:n,push:r,newline:i,isTS:l}){let s=n("component"===t?l6:l8);for(let n=0;n<e.length;n++){let o=e[n],a=o.endsWith("__self");a&&(o=o.slice(0,-6)),r(`const ${s8(o,t)} = ${s}(${JSON.stringify(o)}${a?", true":""})${l?"!":""}`),n<e.length-1&&i()}}function oB(e,t){let n=e.length>3;t.push("["),n&&t.indent(),oD(e,t,n),n&&t.deindent(),t.push("]")}function oD(e,t,n=!1,r=!0){let{push:i,newline:l}=t;for(let s=0;s<e.length;s++){let o=e[s];A(o)?i(o,-3):x(o)?oB(o,t):oU(o,t),s<e.length-1&&(n?(r&&i(","),l()):r&&i(", "))}}function oU(e,t){if(A(e)){t.push(e,-3);return}if(N(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:case 12:oU(e.codegenNode,t);break;case 2:!function(e,t){t.push(JSON.stringify(e.content),-3,e)}(e,t);break;case 4:oj(e,t);break;case 5:!function(e,t){let{push:n,helper:r,pure:i}=t;i&&n(oP),n(`${r(sn)}(`),oU(e.content,t),n(")")}(e,t);break;case 8:oH(e,t);break;case 3:!function(e,t){let{push:n,helper:r,pure:i}=t;i&&n(oP),n(`${r(l1)}(${JSON.stringify(e.content)})`,-3,e)}(e,t);break;case 13:!function(e,t){let{push:n,helper:r,pure:i}=t,{tag:l,props:s,children:o,patchFlag:a,dynamicProps:c,directives:u,isBlock:d,disableTracking:p,isComponent:h}=e;u&&n(r(l9)+"("),d&&n(`(${r(lX)}(${p?"true":""}), `),i&&n(oP),n(r(d?t.inSSR||h?lQ:lZ:t.inSSR||h?lY:l0)+"(",-2,e),oD(function(e){let t=e.length;for(;t--&&null==e[t];);return e.slice(0,t+1).map(e=>e||"null")}([l,s,o,a,c]),t),n(")"),d&&n(")"),u&&(n(", "),oU(u,t),n(")"))}(e,t);break;case 14:!function(e,t){let{push:n,helper:r,pure:i}=t,l=A(e.callee)?e.callee:r(e.callee);i&&n(oP),n(l+"(",-2,e),oD(e.arguments,t),n(")")}(e,t);break;case 15:!function(e,t){let{push:n,indent:r,deindent:i,newline:l}=t,{properties:s}=e;if(!s.length){n("{}",-2,e);return}let o=s.length>1;n(o?"{":"{ "),o&&r();for(let e=0;e<s.length;e++){let{key:r,value:i}=s[e];!function(e,t){let{push:n}=t;8===e.type?(n("["),oH(e,t),n("]")):e.isStatic?n(sW(e.content)?e.content:JSON.stringify(e.content),-2,e):n(`[${e.content}]`,-3,e)}(r,t),n(": "),oU(i,t),e<s.length-1&&(n(","),l())}o&&i(),n(o?"}":" }")}(e,t);break;case 17:oB(e.elements,t);break;case 18:!function(e,t){let{push:n,indent:r,deindent:i}=t,{params:l,returns:s,body:o,newline:a,isSlot:c}=e;c&&n(`_${s_[sm]}(`),n("(",-2,e),x(l)?oD(l,t):l&&oU(l,t),n(") => "),(a||o)&&(n("{"),r()),s?(a&&n("return "),x(s)?oB(s,t):oU(s,t)):o&&oU(o,t),(a||o)&&(i(),n("}")),c&&n(")")}(e,t);break;case 19:!function(e,t){let{test:n,consequent:r,alternate:i,newline:l}=e,{push:s,indent:o,deindent:a,newline:c}=t;if(4===n.type){let e=!sW(n.content);e&&s("("),oj(n,t),e&&s(")")}else s("("),oU(n,t),s(")");l&&o(),t.indentLevel++,l||s(" "),s("? "),oU(r,t),t.indentLevel--,l&&c(),l||s(" "),s(": ");let u=19===i.type;!u&&t.indentLevel++,oU(i,t),!u&&t.indentLevel--,l&&a(!0)}(e,t);break;case 20:!function(e,t){let{push:n,helper:r,indent:i,deindent:l,newline:s}=t;n(`_cache[${e.index}] || (`),e.isVNode&&(i(),n(`${r(sp)}(-1),`),s()),n(`_cache[${e.index}] = `),oU(e.value,t),e.isVNode&&(n(","),s(),n(`${r(sp)}(1),`),s(),n(`_cache[${e.index}]`),l()),n(")")}(e,t);break;case 21:oD(e.body,t,!0,!1)}}function oj(e,t){let{content:n,isStatic:r}=e;t.push(r?JSON.stringify(n):n,-3,e)}function oH(e,t){for(let n=0;n<e.children.length;n++){let r=e.children[n];A(r)?t.push(r,-3):oU(r,t)}}let oq=oM(/^(if|else|else-if)$/,(e,t,n)=>(function(e,t,n,r){if("else"!==t.name&&(!t.exp||!t.exp.content.trim())){let r=t.exp?t.exp.loc:e.loc;n.onError(sU(28,t.loc)),t.exp=sw("true",!1,r)}if("if"===t.name){let i=oW(e,t),l={type:9,loc:e.loc,branches:[i]};if(n.replaceNode(l),r)return r(l,i,!0)}else{let i=n.parent.children,l=i.indexOf(e);for(;l-- >=-1;){let s=i[l];if(s&&3===s.type||s&&2===s.type&&!s.content.trim().length){n.removeNode(s);continue}if(s&&9===s.type){"else-if"===t.name&&void 0===s.branches[s.branches.length-1].condition&&n.onError(sU(30,e.loc)),n.removeNode();let i=oW(e,t);s.branches.push(i);let l=r&&r(s,i,!1);o$(i,n),l&&l(),n.currentNode=null}else n.onError(sU(30,e.loc));break}}})(e,t,n,(e,t,r)=>{let i=n.parent.children,l=i.indexOf(e),s=0;for(;l-- >=0;){let e=i[l];e&&9===e.type&&(s+=e.branches.length)}return()=>{r?e.codegenNode=oK(t,s,n):function(e){for(;;)if(19===e.type){if(19!==e.alternate.type)return e;e=e.alternate}else 20===e.type&&(e=e.value)}(e.codegenNode).alternate=oK(t,s+e.branches.length-1,n)}}));function oW(e,t){let n=3===e.tagType;return{type:10,loc:e.loc,condition:"else"===t.name?void 0:t.exp,children:n&&!sX(e,"for")?e.children:[e],userKey:sQ(e,"key"),isTemplateIf:n}}function oK(e,t,n){return e.condition?sI(e.condition,oz(e,t,n),sA(n.helper(l1),['""',"true"])):oz(e,t,n)}function oz(e,t,n){let{helper:r}=n,i=sT("key",sw(`${t}`,!1,sS,2)),{children:l}=e,s=l[0];if(1!==l.length||1!==s.type){if(1!==l.length||11!==s.type)return sx(n,r(lW),sk([i]),l,"64",void 0,void 0,!0,!1,!1,e.loc);{let e=s.codegenNode;return s6(e,i,n),e}}{let e=s.codegenNode,t=14===e.type&&e.callee===sv?e.arguments[1].returns:e;return 13===t.type&&sR(t,n),s6(t,i,n),e}}let oG=(e,t,n)=>{let{modifiers:r,loc:i}=e,l=e.arg,{exp:s}=e;if(s&&4===s.type&&!s.content.trim()&&(s=void 0),!s){if(4!==l.type||!l.isStatic)return n.onError(sU(52,l.loc)),{props:[sT(l,sw("",!0,i))]};oJ(e),s=e.exp}return 4!==l.type?(l.children.unshift("("),l.children.push(') || ""')):l.isStatic||(l.content=`${l.content} || ""`),r.includes("camel")&&(4===l.type?l.isStatic?l.content=U(l.content):l.content=`${n.helperString(sc)}(${l.content})`:(l.children.unshift(`${n.helperString(sc)}(`),l.children.push(")"))),!n.inSSR&&(r.includes("prop")&&oX(l,"."),r.includes("attr")&&oX(l,"^")),{props:[sT(l,s)]}},oJ=(e,t)=>{let n=e.arg,r=U(n.content);e.exp=sw(r,!1,n.loc)},oX=(e,t)=>{4===e.type?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},oQ=oM("for",(e,t,n)=>{let{helper:r,removeHelper:i}=n;return function(e,t,n,r){if(!t.exp){n.onError(sU(31,t.loc));return}let i=t.forParseResult;if(!i){n.onError(sU(32,t.loc));return}oZ(i);let{addIdentifiers:l,removeIdentifiers:s,scopes:o}=n,{source:a,value:c,key:u,index:d}=i,p={type:11,loc:t.loc,source:a,valueAlias:c,keyAlias:u,objectIndexAlias:d,parseResult:i,children:s1(e)?e.children:[e]};n.replaceNode(p),o.vFor++;let h=r&&r(p);return()=>{o.vFor--,h&&h()}}(e,t,n,t=>{let l=sA(r(l7),[t.source]),s=s1(e),o=sX(e,"memo"),a=sQ(e,"key",!1,!0);a&&7===a.type&&!a.exp&&oJ(a);let c=a&&(6===a.type?a.value?sw(a.value.content,!0):void 0:a.exp),u=a&&c?sT("key",c):null,d=4===t.source.type&&t.source.constType>0,p=d?64:a?128:256;return t.codegenNode=sx(n,r(lW),void 0,l,p+"",void 0,void 0,!0,!d,!1,e.loc),()=>{let a;let{children:p}=t,h=1!==p.length||1!==p[0].type,f=s2(e)?e:s&&1===e.children.length&&s2(e.children[0])?e.children[0]:null;if(f)a=f.codegenNode,s&&u&&s6(a,u,n);else if(h)a=sx(n,r(lW),u?sk([u]):void 0,e.children,"64",void 0,void 0,!0,void 0,!1);else{var m,g,y,b,_,S,x,C;a=p[0].codegenNode,s&&u&&s6(a,u,n),!d!==a.isBlock&&(a.isBlock?(i(lX),i((m=n.inSSR,g=a.isComponent,m||g?lQ:lZ))):i((y=n.inSSR,b=a.isComponent,y||b?lY:l0))),(a.isBlock=!d,a.isBlock)?(r(lX),r((_=n.inSSR,S=a.isComponent,_||S?lQ:lZ))):r((x=n.inSSR,C=a.isComponent,x||C?lY:l0))}if(o){let e=sN(oY(t.parseResult,[sw("_cached")]));e.body={type:21,body:[sE(["const _memo = (",o.exp,")"]),sE(["if (_cached",...c?[" && _cached.key === ",c]:[],` && ${n.helperString(sb)}(_cached, _memo)) return _cached`]),sE(["const _item = ",a]),sw("_item.memo = _memo"),sw("return _item")],loc:sS},l.arguments.push(e,sw("_cache"),sw(String(n.cached++)))}else l.arguments.push(sN(oY(t.parseResult),a,!0))}})});function oZ(e,t){e.finalized||(e.finalized=!0)}function oY({value:e,key:t,index:n},r=[]){return function(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((e,t)=>e||sw("_".repeat(t+1),!1))}([e,t,n,...r])}let o0=sw("undefined",!1),o1=(e,t)=>{if(1===e.type&&(1===e.tagType||3===e.tagType)){let n=sX(e,"slot");if(n)return n.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},o2=(e,t,n,r)=>sN(e,n,!1,!0,n.length?n[0].loc:r);function o3(e,t,n){let r=[sT("name",e),sT("fn",t)];return null!=n&&r.push(sT("key",sw(String(n),!0))),sk(r)}let o6=new WeakMap,o4=(e,t)=>function(){let n,r,i,l,s,o;if(!(1===(e=t.currentNode).type&&(0===e.tagType||1===e.tagType)))return;let{tag:a,props:c}=e,u=1===e.tagType,d=u?function(e,t,n=!1){let{tag:r}=e,i=o9(r),l=sQ(e,"is",!1,!0);if(l){if(i){let e;if(6===l.type?e=l.value&&sw(l.value.content,!0):(e=l.exp)||(e=sw("is",!1,l.loc)),e)return sA(t.helper(l4),[e])}else 6===l.type&&l.value.content.startsWith("vue:")&&(r=l.value.content.slice(4))}let s=sH(r)||t.isBuiltInComponent(r);return s?(n||t.helper(s),s):(t.helper(l6),t.components.add(r),s8(r,"component"))}(e,t):`"${a}"`,p=I(d)&&d.callee===l4,h=0,f=p||d===lK||d===lz||!u&&("svg"===a||"foreignObject"===a||"math"===a);if(c.length>0){let r=o8(e,t,void 0,u,p);n=r.props,h=r.patchFlag,s=r.dynamicPropNames;let i=r.directives;o=i&&i.length?sC(i.map(e=>(function(e,t){let n=[],r=o6.get(e);r?n.push(t.helperString(r)):(t.helper(l8),t.directives.add(e.name),n.push(s8(e.name,"directive")));let{loc:i}=e;if(e.exp&&n.push(e.exp),e.arg&&(e.exp||n.push("void 0"),n.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||n.push("void 0"),n.push("void 0"));let t=sw("true",!1,i);n.push(sk(e.modifiers.map(e=>sT(e,t)),i))}return sC(n,e.loc)})(e,t))):void 0,r.shouldUseBlock&&(f=!0)}if(e.children.length>0){if(d===lG&&(f=!0,h|=1024),u&&d!==lK&&d!==lG){let{slots:n,hasDynamicSlots:i}=function(e,t,n=o2){t.helper(sm);let{children:r,loc:i}=e,l=[],s=[],o=t.scopes.vSlot>0||t.scopes.vFor>0,a=sX(e,"slot",!0);if(a){let{arg:e,exp:t}=a;e&&!sj(e)&&(o=!0),l.push(sT(e||sw("default",!0),n(t,void 0,r,i)))}let c=!1,u=!1,d=[],p=new Set,h=0;for(let e=0;e<r.length;e++){let i,f,m,g;let y=r[e];if(!s1(y)||!(i=sX(y,"slot",!0))){3!==y.type&&d.push(y);continue}if(a){t.onError(sU(37,i.loc));break}c=!0;let{children:b,loc:_}=y,{arg:S=sw("default",!0),exp:x,loc:C}=i;sj(S)?f=S?S.content:"default":o=!0;let k=sX(y,"for"),T=n(x,k,b,_);if(m=sX(y,"if"))o=!0,s.push(sI(m.exp,o3(S,T,h++),o0));else if(g=sX(y,/^else(-if)?$/,!0)){let n,i=e;for(;i--&&3===(n=r[i]).type;);if(n&&s1(n)&&sX(n,/^(else-)?if$/)){let e=s[s.length-1];for(;19===e.alternate.type;)e=e.alternate;e.alternate=g.exp?sI(g.exp,o3(S,T,h++),o0):o3(S,T,h++)}else t.onError(sU(30,g.loc))}else if(k){o=!0;let e=k.forParseResult;e?(oZ(e),s.push(sA(t.helper(l7),[e.source,sN(oY(e),o3(S,T),!0)]))):t.onError(sU(32,k.loc))}else{if(f){if(p.has(f)){t.onError(sU(38,C));continue}p.add(f),"default"===f&&(u=!0)}l.push(sT(S,T))}}if(!a){let e=(e,t)=>sT("default",n(e,void 0,t,i));c?d.length&&d.some(e=>(function e(t){return 2!==t.type&&12!==t.type||(2===t.type?!!t.content.trim():e(t.content))})(e))&&(u?t.onError(sU(39,d[0].loc)):l.push(e(void 0,d))):l.push(e(void 0,r))}let f=o?2:!function e(t){for(let n=0;n<t.length;n++){let r=t[n];switch(r.type){case 1:if(2===r.tagType||e(r.children))return!0;break;case 9:if(e(r.branches))return!0;break;case 10:case 11:if(e(r.children))return!0}}return!1}(e.children)?1:3,m=sk(l.concat(sT("_",sw(f+"",!1))),i);return s.length&&(m=sA(t.helper(st),[m,sC(s)])),{slots:m,hasDynamicSlots:o}}(e,t);r=n,i&&(h|=1024)}else if(1===e.children.length&&d!==lK){let n=e.children[0],i=n.type,l=5===i||8===i;l&&0===oN(n,t)&&(h|=1),r=l||2===i?n:e.children}else r=e.children}0!==h&&(i=String(h),s&&s.length&&(l=function(e){let t="[";for(let n=0,r=e.length;n<r;n++)t+=JSON.stringify(e[n]),n<r-1&&(t+=", ");return t+"]"}(s))),e.codegenNode=sx(t,d,n,r,i,l,o,!!f,!1,u,e.loc)};function o8(e,t,n=e.props,r,i,l=!1){let s;let{tag:o,loc:a,children:c}=e,u=[],d=[],p=[],h=c.length>0,f=!1,g=0,y=!1,b=!1,_=!1,S=!1,x=!1,C=!1,k=[],T=e=>{u.length&&(d.push(sk(o5(u),a)),u=[]),e&&d.push(e)},w=()=>{t.scopes.vFor>0&&u.push(sT(sw("ref_for",!0),sw("true")))},E=({key:e,value:n})=>{if(sj(e)){let l=e.content,s=m(l);s&&(!r||i)&&"onclick"!==l.toLowerCase()&&"onUpdate:modelValue"!==l&&!F(l)&&(S=!0),s&&F(l)&&(C=!0),s&&14===n.type&&(n=n.arguments[0]),20===n.type||(4===n.type||8===n.type)&&oN(n,t)>0||("ref"===l?y=!0:"class"===l?b=!0:"style"===l?_=!0:"key"===l||k.includes(l)||k.push(l),r&&("class"===l||"style"===l)&&!k.includes(l)&&k.push(l))}else x=!0};for(let i=0;i<n.length;i++){let s=n[i];if(6===s.type){let{loc:e,name:t,nameLoc:n,value:r}=s;if("ref"===t&&(y=!0,w()),"is"===t&&(o9(o)||r&&r.content.startsWith("vue:")))continue;u.push(sT(sw(t,!0,n),sw(r?r.content:"",!0,r?r.loc:e)))}else{let{name:n,arg:i,exp:c,loc:m,modifiers:y}=s,b="bind"===n,_="on"===n;if("slot"===n){r||t.onError(sU(40,m));continue}if("once"===n||"memo"===n||"is"===n||b&&sZ(i,"is")&&o9(o)||_&&l)continue;if((b&&sZ(i,"key")||_&&h&&sZ(i,"vue:before-update"))&&(f=!0),b&&sZ(i,"ref")&&w(),!i&&(b||_)){x=!0,c?b?(w(),T(),d.push(c)):T({type:14,loc:m,callee:t.helper(sa),arguments:r?[c]:[c,"true"]}):t.onError(sU(b?34:35,m));continue}b&&y.includes("prop")&&(g|=32);let S=t.directiveTransforms[n];if(S){let{props:n,needRuntime:r}=S(s,e,t);l||n.forEach(E),_&&i&&!sj(i)?T(sk(n,a)):u.push(...n),r&&(p.push(s),N(r)&&o6.set(s,r))}else!V(n)&&(p.push(s),h&&(f=!0))}}if(d.length?(T(),s=d.length>1?sA(t.helper(sr),d,a):d[0]):u.length&&(s=sk(o5(u),a)),x?g|=16:(b&&!r&&(g|=2),_&&!r&&(g|=4),k.length&&(g|=8),S&&(g|=32)),!f&&(0===g||32===g)&&(y||C||p.length>0)&&(g|=512),!t.inSSR&&s)switch(s.type){case 15:let A=-1,I=-1,R=!1;for(let e=0;e<s.properties.length;e++){let t=s.properties[e].key;sj(t)?"class"===t.content?A=e:"style"===t.content&&(I=e):t.isHandlerKey||(R=!0)}let O=s.properties[A],L=s.properties[I];R?s=sA(t.helper(ss),[s]):(O&&!sj(O.value)&&(O.value=sA(t.helper(si),[O.value])),L&&(_||4===L.value.type&&"["===L.value.content.trim()[0]||17===L.value.type)&&(L.value=sA(t.helper(sl),[L.value])));break;case 14:break;default:s=sA(t.helper(ss),[sA(t.helper(so),[s])])}return{props:s,directives:p,patchFlag:g,dynamicPropNames:k,shouldUseBlock:f}}function o5(e){let t=new Map,n=[];for(let r=0;r<e.length;r++){let i=e[r];if(8===i.key.type||!i.key.isStatic){n.push(i);continue}let l=i.key.content,s=t.get(l);s?("style"===l||"class"===l||m(l))&&(17===s.value.type?s.value.elements.push(i.value):s.value=sC([s.value,i.value],s.loc)):(t.set(l,i),n.push(i))}return n}function o9(e){return"component"===e||"Component"===e}let o7=(e,t)=>{if(s2(e)){let{children:n,loc:r}=e,{slotName:i,slotProps:l}=function(e,t){let n,r='"default"',i=[];for(let t=0;t<e.props.length;t++){let n=e.props[t];if(6===n.type)n.value&&("name"===n.name?r=JSON.stringify(n.value.content):(n.name=U(n.name),i.push(n)));else if("bind"===n.name&&sZ(n.arg,"name")){if(n.exp)r=n.exp;else if(n.arg&&4===n.arg.type){let e=U(n.arg.content);r=n.exp=sw(e,!1,n.arg.loc)}}else"bind"===n.name&&n.arg&&sj(n.arg)&&(n.arg.content=U(n.arg.content)),i.push(n)}if(i.length>0){let{props:r,directives:l}=o8(e,t,i,!1,!1);n=r,l.length&&t.onError(sU(36,l[0].loc))}return{slotName:r,slotProps:n}}(e,t),s=[t.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"],o=2;l&&(s[2]=l,o=3),n.length&&(s[3]=sN([],n,!1,!1,r),o=4),t.scopeId&&!t.slotted&&(o=5),s.splice(o),e.codegenNode=sA(t.helper(se),s,r)}},ae=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,at=(e,t,n,r)=>{let i;let{loc:l,modifiers:s,arg:o}=e;if(e.exp||s.length,4===o.type){if(o.isStatic){let e=o.content;e.startsWith("vue:")&&(e=`vnode-${e.slice(4)}`),i=sw(0!==t.tagType||e.startsWith("vnode")||!/[A-Z]/.test(e)?W(U(e)):`on:${e}`,!0,o.loc)}else i=sE([`${n.helperString(sd)}(`,o,")"])}else(i=o).children.unshift(`${n.helperString(sd)}(`),i.children.push(")");let a=e.exp;a&&!a.content.trim()&&(a=void 0);let c=n.cacheHandlers&&!a&&!n.inVOnce;if(a){let e=sJ(a.content),t=!(e||ae.test(a.content)),n=a.content.includes(";");(t||c&&e)&&(a=sE([`${t?"$event":"(...args)"} => ${n?"{":"("}`,a,n?"}":")"]))}let u={props:[sT(i,a||sw("() => {}",!1,l))]};return r&&(u=r(u)),c&&(u.props[0].value=n.cache(u.props[0].value)),u.props.forEach(e=>e.key.isHandlerKey=!0),u},an=(e,t)=>{if(0===e.type||1===e.type||11===e.type||10===e.type)return()=>{let n;let r=e.children,i=!1;for(let e=0;e<r.length;e++){let t=r[e];if(sY(t)){i=!0;for(let i=e+1;i<r.length;i++){let l=r[i];if(sY(l))n||(n=r[e]=sE([t],t.loc)),n.children.push(" + ",l),r.splice(i,1),i--;else{n=void 0;break}}}}if(i&&(1!==r.length||0!==e.type&&(1!==e.type||0!==e.tagType||e.props.find(e=>7===e.type&&!t.directiveTransforms[e.name]))))for(let e=0;e<r.length;e++){let n=r[e];if(sY(n)||8===n.type){let i=[];(2!==n.type||" "!==n.content)&&i.push(n),t.ssr||0!==oN(n,t)||i.push("1"),r[e]={type:12,content:n,loc:n.loc,codegenNode:sA(t.helper(l2),i)}}}}},ar=new WeakSet,ai=(e,t)=>{if(1===e.type&&sX(e,"once",!0)&&!ar.has(e)&&!t.inVOnce&&!t.inSSR)return ar.add(e),t.inVOnce=!0,t.helper(sp),()=>{t.inVOnce=!1;let e=t.currentNode;e.codegenNode&&(e.codegenNode=t.cache(e.codegenNode,!0))}},al=(e,t,n)=>{let r;let{exp:i,arg:l}=e;if(!i)return n.onError(sU(41,e.loc)),as();let s=i.loc.source,o=4===i.type?i.content:s,a=n.bindingMetadata[s];if("props"===a||"props-aliased"===a)return i.loc,as();if(!o.trim()||!sJ(o))return n.onError(sU(42,i.loc)),as();let c=l||sw("modelValue",!0),u=l?sj(l)?`onUpdate:${U(l.content)}`:sE(['"onUpdate:" + ',l]):"onUpdate:modelValue",d=n.isTS?"($event: any)":"$event";r=sE([`${d} => ((`,i,") = $event)"]);let p=[sT(c,e.exp),sT(u,r)];if(e.modifiers.length&&1===t.tagType){let t=e.modifiers.map(e=>(sW(e)?e:JSON.stringify(e))+": true").join(", "),n=l?sj(l)?`${l.content}Modifiers`:sE([l,' + "Modifiers"']):"modelModifiers";p.push(sT(n,sw(`{ ${t} }`,!1,e.loc,2)))}return as(p)};function as(e=[]){return{props:e}}let ao=new WeakSet,aa=(e,t)=>{if(1===e.type){let n=sX(e,"memo");if(!(!n||ao.has(e)))return ao.add(e),()=>{let r=e.codegenNode||t.currentNode.codegenNode;r&&13===r.type&&(1!==e.tagType&&sR(r,t),e.codegenNode=sA(t.helper(sv),[n.exp,sN(void 0,r),"_cache",String(t.cached++)]))}}},ac=Symbol(""),au=Symbol(""),ad=Symbol(""),ap=Symbol(""),ah=Symbol(""),af=Symbol(""),am=Symbol(""),ag=Symbol(""),ay=Symbol(""),av=Symbol("");!function(e){Object.getOwnPropertySymbols(e).forEach(t=>{s_[t]=e[t]})}({[ac]:"vModelRadio",[au]:"vModelCheckbox",[ad]:"vModelText",[ap]:"vModelSelect",[ah]:"vModelDynamic",[af]:"withModifiers",[am]:"withKeys",[ag]:"vShow",[ay]:"Transition",[av]:"TransitionGroup"});let ab={parseMode:"html",isVoidTag:ea,isNativeTag:e=>el(e)||es(e)||eo(e),isPreTag:e=>"pre"===e,decodeEntities:function(e,t=!1){return(c||(c=document.createElement("div")),t)?(c.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,c.children[0].getAttribute("foo")):(c.innerHTML=e,c.textContent)},isBuiltInComponent:e=>"Transition"===e||"transition"===e?ay:"TransitionGroup"===e||"transition-group"===e?av:void 0,getNamespace(e,t,n){let r=t?t.ns:n;if(t&&2===r){if("annotation-xml"===t.tag){if("svg"===e)return 1;t.props.some(e=>6===e.type&&"encoding"===e.name&&null!=e.value&&("text/html"===e.value.content||"application/xhtml+xml"===e.value.content))&&(r=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&"mglyph"!==e&&"malignmark"!==e&&(r=0)}else t&&1===r&&("foreignObject"===t.tag||"desc"===t.tag||"title"===t.tag)&&(r=0);if(0===r){if("svg"===e)return 1;if("math"===e)return 2}return r}},a_=(e,t)=>sw(JSON.stringify(er(e)),!1,t,3),aS=u("passive,once,capture"),ax=u("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),aC=u("left,right"),ak=u("onkeyup,onkeydown,onkeypress",!0),aT=(e,t,n,r)=>{let i=[],l=[],s=[];for(let n=0;n<t.length;n++){let r=t[n];aS(r)?s.push(r):aC(r)?sj(e)?ak(e.content)?i.push(r):l.push(r):(i.push(r),l.push(r)):ax(r)?l.push(r):i.push(r)}return{keyModifiers:i,nonKeyModifiers:l,eventOptionModifiers:s}},aw=(e,t)=>sj(e)&&"onclick"===e.content.toLowerCase()?sw(t,!0):4!==e.type?sE(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,aE=(e,t)=>{1===e.type&&0===e.tagType&&("script"===e.tag||"style"===e.tag)&&t.removeNode()},aA=[e=>{1===e.type&&e.props.forEach((t,n)=>{6===t.type&&"style"===t.name&&t.value&&(e.props[n]={type:7,name:"bind",arg:sw("style",!0,t.loc),exp:a_(t.value.content,t.loc),modifiers:[],loc:t.loc})})}],aN={cloak:()=>({props:[]}),html:(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(sU(53,i)),t.children.length&&(n.onError(sU(54,i)),t.children.length=0),{props:[sT(sw("innerHTML",!0,i),r||sw("",!0))]}},text:(e,t,n)=>{let{exp:r,loc:i}=e;return r||n.onError(sU(55,i)),t.children.length&&(n.onError(sU(56,i)),t.children.length=0),{props:[sT(sw("textContent",!0),r?oN(r,n)>0?r:sA(n.helperString(sn),[r],i):sw("",!0))]}},model:(e,t,n)=>{let r=al(e,t,n);if(!r.props.length||1===t.tagType)return r;e.arg&&n.onError(sU(58,e.arg.loc));let{tag:i}=t,l=n.isCustomElement(i);if("input"===i||"textarea"===i||"select"===i||l){let s=ad,o=!1;if("input"===i||l){let r=sQ(t,"type");if(r){if(7===r.type)s=ah;else if(r.value)switch(r.value.content){case"radio":s=ac;break;case"checkbox":s=au;break;case"file":o=!0,n.onError(sU(59,e.loc))}}else t.props.some(e=>7===e.type&&"bind"===e.name&&(!e.arg||4!==e.arg.type||!e.arg.isStatic))&&(s=ah)}else"select"===i&&(s=ap);o||(r.needRuntime=n.helper(s))}else n.onError(sU(57,e.loc));return r.props=r.props.filter(e=>!(4===e.key.type&&"modelValue"===e.key.content)),r},on:(e,t,n)=>at(e,t,n,t=>{let{modifiers:r}=e;if(!r.length)return t;let{key:i,value:l}=t.props[0],{keyModifiers:s,nonKeyModifiers:o,eventOptionModifiers:a}=aT(i,r,n,e.loc);if(o.includes("right")&&(i=aw(i,"onContextmenu")),o.includes("middle")&&(i=aw(i,"onMouseup")),o.length&&(l=sA(n.helper(af),[l,JSON.stringify(o)])),s.length&&(!sj(i)||ak(i.content))&&(l=sA(n.helper(am),[l,JSON.stringify(s)])),a.length){let e=a.map(q).join("");i=sj(i)?sw(`${i.content}${e}`,!0):sE(["(",i,`) + "${e}"`])}return{props:[sT(i,l)]}}),show:(e,t,n)=>{let{exp:r,loc:i}=e;return!r&&n.onError(sU(61,i)),{props:[],needRuntime:n.helper(ag)}}},aI=new WeakMap;function aR(e,t){let n;if(!A(e)){if(!e.nodeType)return h;e=e.innerHTML}let r=e,i=((n=aI.get(null!=t?t:d))||(n=Object.create(null),aI.set(null!=t?t:d,n)),n),l=i[r];if(l)return l;if("#"===e[0]){let t=document.querySelector(e);e=t?t.innerHTML:""}let s=y({hoistStatic:!0,onError:void 0,onWarn:h},t);s.isCustomElement||"undefined"==typeof customElements||(s.isCustomElement=e=>!!customElements.get(e));let{code:o}=function(e,t={}){return function(e,t={}){let n=t.onError||sB,r="module"===t.mode;!0===t.prefixIdentifiers?n(sU(47)):r&&n(sU(48)),t.cacheHandlers&&n(sU(49)),t.scopeId&&!r&&n(sU(50));let i=y({},t,{prefixIdentifiers:!1}),l=A(e)?function(e,t){if(od.reset(),on=null,or=null,oi="",ol=-1,os=-1,ou.length=0,ot=e,s7=y({},s9),t){let e;for(e in t)null!=t[e]&&(s7[e]=t[e])}od.mode="html"===s7.parseMode?1:"sfc"===s7.parseMode?2:0,od.inXML=1===s7.ns||2===s7.ns;let n=t&&t.delimiters;n&&(od.delimiterOpen=sF(n[0]),od.delimiterClose=sF(n[1]));let r=oe=function(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:sS}}([],e);return od.parse(ot),r.loc=ok(0,e.length),r.children=oS(r.children),oe=null,r}(e,i):e,[s,o]=[[ai,oq,aa,oQ,o7,o4,o1,an],{on:at,bind:oG,model:al}];return!function(e,t){let n=function(e,{filename:t="",prefixIdentifiers:n=!1,hoistStatic:r=!1,hmr:i=!1,cacheHandlers:l=!1,nodeTransforms:s=[],directiveTransforms:o={},transformHoist:a=null,isBuiltInComponent:c=h,isCustomElement:u=h,expressionPlugins:p=[],scopeId:f=null,slotted:m=!0,ssr:g=!1,inSSR:y=!1,ssrCssVars:b="",bindingMetadata:_=d,inline:S=!1,isTS:x=!1,onError:C=sB,onWarn:k=sD,compatConfig:T}){let w=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),E={filename:t,selfName:w&&q(U(w[1])),prefixIdentifiers:n,hoistStatic:r,hmr:i,cacheHandlers:l,nodeTransforms:s,directiveTransforms:o,transformHoist:a,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:p,scopeId:f,slotted:m,ssr:g,inSSR:y,ssrCssVars:b,bindingMetadata:_,inline:S,isTS:x,onError:C,onWarn:k,compatConfig:T,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new WeakMap,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(e){let t=E.helpers.get(e)||0;return E.helpers.set(e,t+1),e},removeHelper(e){let t=E.helpers.get(e);if(t){let n=t-1;n?E.helpers.set(e,n):E.helpers.delete(e)}},helperString:e=>`_${s_[E.helper(e)]}`,replaceNode(e){E.parent.children[E.childIndex]=E.currentNode=e},removeNode(e){let t=E.parent.children,n=e?t.indexOf(e):E.currentNode?E.childIndex:-1;e&&e!==E.currentNode?E.childIndex>n&&(E.childIndex--,E.onNodeRemoved()):(E.currentNode=null,E.onNodeRemoved()),E.parent.children.splice(n,1)},onNodeRemoved:h,addIdentifiers(e){},removeIdentifiers(e){},hoist(e){A(e)&&(e=sw(e)),E.hoists.push(e);let t=sw(`_hoisted_${E.hoists.length}`,!1,e.loc,2);return t.hoisted=e,t},cache:(e,t=!1)=>(function(e,t,n=!1){return{type:20,index:e,value:t,isVNode:n,loc:sS}})(E.cached++,e,t)};return E}(e,t);o$(e,n),t.hoistStatic&&function e(t,n,r=!1){let{children:i}=t,l=i.length,s=0;for(let t=0;t<i.length;t++){let l=i[t];if(1===l.type&&0===l.tagType){let e=r?0:oN(l,n);if(e>0){if(e>=2){l.codegenNode.patchFlag="-1",l.codegenNode=n.hoist(l.codegenNode),s++;continue}}else{let e=l.codegenNode;if(13===e.type){let t=oL(e);if((!t||512===t||1===t)&&oR(l,n)>=2){let t=oO(l);t&&(e.props=n.hoist(t))}e.dynamicProps&&(e.dynamicProps=n.hoist(e.dynamicProps))}}}if(1===l.type){let t=1===l.tagType;t&&n.scopes.vSlot++,e(l,n),t&&n.scopes.vSlot--}else if(11===l.type)e(l,n,1===l.children.length);else if(9===l.type)for(let t=0;t<l.branches.length;t++)e(l.branches[t],n,1===l.branches[t].children.length)}if(s&&n.transformHoist&&n.transformHoist(i,n,t),s&&s===l&&1===t.type&&0===t.tagType&&t.codegenNode&&13===t.codegenNode.type&&x(t.codegenNode.children)){let e=n.hoist(sC(t.codegenNode.children));n.hmr&&(e.content=`[...${e.content}]`),t.codegenNode.children=e}}(e,n,oA(e,e.children[0])),t.ssr||function(e,t){let{helper:n}=t,{children:r}=e;if(1===r.length){let n=r[0];if(oA(e,n)&&n.codegenNode){let r=n.codegenNode;13===r.type&&sR(r,t),e.codegenNode=r}else e.codegenNode=n}else r.length>1&&(e.codegenNode=sx(t,n(lW),void 0,e.children,"64",void 0,void 0,!0,void 0,!1))}(e,n),e.helpers=new Set([...n.helpers.keys()]),e.components=[...n.components],e.directives=[...n.directives],e.imports=n.imports,e.hoists=n.hoists,e.temps=n.temps,e.cached=n.cached,e.transformed=!0}(l,y({},i,{nodeTransforms:[...s,...t.nodeTransforms||[]],directiveTransforms:y({},o,t.directiveTransforms||{})})),function(e,t={}){let n=function(e,{mode:t="function",prefixIdentifiers:n="module"===t,sourceMap:r=!1,filename:i="template.vue.html",scopeId:l=null,optimizeImports:s=!1,runtimeGlobalName:o="Vue",runtimeModuleName:a="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:d=!1,inSSR:p=!1}){let h={mode:t,prefixIdentifiers:n,sourceMap:r,filename:i,scopeId:l,optimizeImports:s,runtimeGlobalName:o,runtimeModuleName:a,ssrRuntimeModuleName:c,ssr:u,isTS:d,inSSR:p,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper:e=>`_${s_[e]}`,push(e,t=-2,n){h.code+=e},indent(){f(++h.indentLevel)},deindent(e=!1){e?--h.indentLevel:f(--h.indentLevel)},newline(){f(h.indentLevel)}};function f(e){h.push("\n"+"  ".repeat(e),0)}return h}(e,t);t.onContextCreated&&t.onContextCreated(n);let{mode:r,push:i,prefixIdentifiers:l,indent:s,deindent:o,newline:a,scopeId:c,ssr:u}=n,d=Array.from(e.helpers),p=d.length>0,h=!l&&"module"!==r;(function(e,t){let{ssr:n,prefixIdentifiers:r,push:i,newline:l,runtimeModuleName:s,runtimeGlobalName:o,ssrRuntimeModuleName:a}=t,c=Array.from(e.helpers);if(c.length>0&&(i(`const _Vue = ${o}
`,-1),e.hoists.length)){let e=[lY,l0,l1,l2,l3].filter(e=>c.includes(e)).map(oF).join(", ");i(`const { ${e} } = _Vue
`,-1)}(function(e,t){if(!e.length)return;t.pure=!0;let{push:n,newline:r,helper:i,scopeId:l,mode:s}=t;r();for(let i=0;i<e.length;i++){let l=e[i];l&&(n(`const _hoisted_${i+1} = `),oU(l,t),r())}t.pure=!1})(e.hoists,t),l(),i("return ")})(e,n);let f=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(i(`function ${u?"ssrRender":"render"}(${f}) {`),s(),h&&(i("with (_ctx) {"),s(),p&&(i(`const { ${d.map(oF).join(", ")} } = _Vue
`,-1),a())),e.components.length&&(oV(e.components,"component",n),(e.directives.length||e.temps>0)&&a()),e.directives.length&&(oV(e.directives,"directive",n),e.temps>0&&a()),e.temps>0){i("let ");for(let t=0;t<e.temps;t++)i(`${t>0?", ":""}_temp${t}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`,0),a()),u||i("return "),e.codegenNode?oU(e.codegenNode,n):i("null"),h&&(o(),i("}")),o(),i("}"),{ast:e,code:n.code,preamble:"",map:n.map?n.map.toJSON():void 0}}(l,i)}(e,y({},ab,t,{nodeTransforms:[aE,...aA,...t.nodeTransforms||[]],directiveTransforms:y({},aN,t.directiveTransforms||{}),transformHoist:null}))}(e,s),a=Function(o)();return a._rc=!0,i[r]=a}return iw(aR),e.BaseTransition=rD,e.BaseTransitionPropsValidators=rV,e.Comment=r2,e.DeprecationTypes=null,e.EffectScope=eg,e.ErrorCodes={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",WATCH_GETTER:2,2:"WATCH_GETTER",WATCH_CALLBACK:3,3:"WATCH_CALLBACK",WATCH_CLEANUP:4,4:"WATCH_CLEANUP",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER"},e.ErrorTypeStrings=null,e.Fragment=r0,e.KeepAlive={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){let n=i_(),r=n.ctx,i=new Map,l=new Set,s=null,o=n.suspense,{renderer:{p:a,m:c,um:u,o:{createElement:d}}}=r,p=d("div");function h(e){rO(e),u(e,n,o,!0)}function f(e){i.forEach((t,n)=>{let r=iR(t.type);!r||e&&e(r)||m(n)})}function m(e){let t=i.get(e);s&&ir(t,s)?s&&rO(s):h(t),i.delete(e),l.delete(e)}r.activate=(e,t,n,r,i)=>{let l=e.component;c(e,t,n,0,o),a(l.vnode,e,t,n,l,o,r,e.slotScopeIds,i),rd(()=>{l.isDeactivated=!1,l.a&&z(l.a);let t=e.props&&e.props.onVnodeMounted;t&&ig(t,l.parent,e)},o)},r.deactivate=e=>{let t=e.component;rv(t.m),rv(t.a),c(e,p,null,1,o),rd(()=>{t.da&&z(t.da);let n=e.props&&e.props.onVnodeUnmounted;n&&ig(n,t.parent,e),t.isDeactivated=!0},o)},rC(()=>[e.include,e.exclude],([e,t])=>{e&&f(t=>rA(e,t)),t&&f(e=>!rA(t,e))},{flush:"post",deep:!0});let g=null,y=()=>{null!=g&&(no(n.subTree.type)?rd(()=>{i.set(g,rL(n.subTree))},n.subTree.suspense):i.set(g,rL(n.subTree)))};return ny(y),nb(y),n_(()=>{i.forEach(e=>{let{subTree:t,suspense:r}=n,i=rL(t);if(e.type===i.type&&e.key===i.key){rO(i);let e=i.component.da;e&&rd(e,r);return}h(e)})}),()=>{if(g=null,!t.default)return null;let n=t.default(),r=n[0];if(n.length>1)return s=null,n;if(!it(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return s=null,r;let o=rL(r),a=o.type,c=iR(nA(o)?o.type.__asyncResolved||{}:a),{include:u,exclude:d,max:p}=e;if(u&&(!c||!rA(u,c))||d&&c&&rA(d,c))return s=o,r;let h=null==o.key?a:o.key,f=i.get(h);return o.el&&(o=ic(o),128&r.shapeFlag&&(r.ssContent=o)),g=h,f?(o.el=f.el,o.component=f.component,o.transition&&rW(o,o.transition),o.shapeFlag|=512,l.delete(h),l.add(h)):(l.add(h),p&&l.size>parseInt(p,10)&&m(l.values().next().value)),o.shapeFlag|=256,s=o,no(r.type)?r:o}}},e.ReactiveEffect=ev,e.Static=r3,e.Suspense={name:"Suspense",__isSuspense:!0,process(e,t,n,r,i,l,s,o,a,c){if(null==e)(function(e,t,n,r,i,l,s,o,a){let{p:c,o:{createElement:u}}=a,d=u("div"),p=e.suspense=nu(e,i,r,t,d,n,l,s,o,a);c(null,p.pendingBranch=e.ssContent,d,null,r,p,l,s),p.deps>0?(nc(e,"onPending"),nc(e,"onFallback"),c(null,e.ssFallback,t,n,r,null,l,s),nh(p,e.ssFallback)):p.resolve(!1,!0)})(t,n,r,i,l,s,o,a,c);else{if(l&&l.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}(function(e,t,n,r,i,l,s,o,{p:a,um:c,o:{createElement:u}}){let d=t.suspense=e.suspense;d.vnode=t,t.el=e.el;let p=t.ssContent,h=t.ssFallback,{activeBranch:f,pendingBranch:m,isInFallback:g,isHydrating:y}=d;if(m)d.pendingBranch=p,ir(p,m)?(a(m,p,d.hiddenContainer,null,i,d,l,s,o),d.deps<=0?d.resolve():g&&!y&&(a(f,h,n,r,i,null,l,s,o),nh(d,h))):(d.pendingId=na++,y?(d.isHydrating=!1,d.activeBranch=m):c(m,i,d),d.deps=0,d.effects.length=0,d.hiddenContainer=u("div"),g?(a(null,p,d.hiddenContainer,null,i,d,l,s,o),d.deps<=0?d.resolve():(a(f,h,n,r,i,null,l,s,o),nh(d,h))):f&&ir(p,f)?(a(f,p,n,r,i,d,l,s,o),d.resolve(!0)):(a(null,p,d.hiddenContainer,null,i,d,l,s,o),d.deps<=0&&d.resolve()));else if(f&&ir(p,f))a(f,p,n,r,i,d,l,s,o),nh(d,p);else if(nc(t,"onPending"),d.pendingBranch=p,512&p.shapeFlag?d.pendingId=p.component.suspenseId:d.pendingId=na++,a(null,p,d.hiddenContainer,null,i,d,l,s,o),d.deps<=0)d.resolve();else{let{timeout:e,pendingId:t}=d;e>0?setTimeout(()=>{d.pendingId===t&&d.fallback(h)},e):0===e&&d.fallback(h)}})(e,t,n,r,i,s,o,a,c)}},hydrate:function(e,t,n,r,i,l,s,o,a){let c=t.suspense=nu(t,r,n,e.parentNode,document.createElement("div"),null,i,l,s,o,!0),u=a(e,c.pendingBranch=t.ssContent,n,c,l,s);return 0===c.deps&&c.resolve(!1,!0),u},normalize:function(e){let{shapeFlag:t,children:n}=e,r=32&t;e.ssContent=nd(r?n.default:n),e.ssFallback=r?nd(n.fallback):io(r2)}},e.Teleport={name:"Teleport",__isTeleport:!0,process(e,t,n,r,i,l,s,o,a,c){let{mc:u,pc:d,pbc:p,o:{insert:h,querySelector:f,createText:m,createComment:g}}=c,y=rG(t.props),{shapeFlag:b,children:_,dynamicChildren:S}=t;if(null==e){let e=t.el=m(""),c=t.anchor=m("");h(e,n,r),h(c,n,r);let d=t.target=rQ(t.props,f),p=t.targetAnchor=m("");d&&(h(p,d),"svg"===s||rJ(d)?s="svg":("mathml"===s||rX(d))&&(s="mathml"));let g=(e,t)=>{16&b&&u(_,e,t,i,l,s,o,a)};y?g(n,c):d&&g(d,p)}else{t.el=e.el;let r=t.anchor=e.anchor,u=t.target=e.target,h=t.targetAnchor=e.targetAnchor,m=rG(e.props),g=m?n:u;if("svg"===s||rJ(u)?s="svg":("mathml"===s||rX(u))&&(s="mathml"),S?(p(e.dynamicChildren,S,g,i,l,s,o),ry(e,t,!0)):a||d(e,t,g,m?r:h,i,l,s,o,!1),y)m?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):rZ(t,n,r,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=t.target=rQ(t.props,f);e&&rZ(t,e,null,c,0)}else m&&rZ(t,u,h,c,1)}rY(t)},remove(e,t,n,{um:r,o:{remove:i}},l){let{shapeFlag:s,children:o,anchor:a,targetAnchor:c,target:u,props:d}=e;if(u&&i(c),l&&i(a),16&s){let e=l||!rG(d);for(let i=0;i<o.length;i++){let l=o[i];r(l,t,n,e,!!l.dynamicChildren)}}},move:rZ,hydrate:function(e,t,n,r,i,l,{o:{nextSibling:s,parentNode:o,querySelector:a}},c){let u=t.target=rQ(t.props,a);if(u){let a=u._lpa||u.firstChild;if(16&t.shapeFlag){if(rG(t.props))t.anchor=c(s(e),t,o(e),n,r,i,l),t.targetAnchor=a;else{t.anchor=s(e);let o=a;for(;o;)if((o=s(o))&&8===o.nodeType&&"teleport anchor"===o.data){t.targetAnchor=o,u._lpa=t.targetAnchor&&s(t.targetAnchor);break}c(a,t,u,n,r,i,l)}}rY(t)}return t.anchor&&s(t.anchor)}},e.Text=r1,e.TrackOpTypes={GET:"get",HAS:"has",ITERATE:"iterate"},e.Transition=iU,e.TransitionGroup=lv,e.TriggerOpTypes={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},e.VueElement=lh,e.assertNumber=function(e,t){},e.callWithAsyncErrorHandling=tF,e.callWithErrorHandling=tP,e.camelize=U,e.capitalize=q,e.cloneVNode=ic,e.compatUtils=null,e.compile=aR,e.computed=iO,e.createApp=(...e)=>{let t=(a||(a=rh(lV))).createApp(...e),{mount:n}=t;return t.mount=e=>{let r=lq(e);if(!r)return;let i=t._component;E(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";let l=n(r,!1,lH(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),l},t},e.createBlock=ie,e.createCommentVNode=function(e="",t=!1){return t?(r8(),ie(r2,null,e)):io(r2,null,e)},e.createElementBlock=function(e,t,n,r,i,l){return r7(is(e,t,n,r,i,l,!0))},e.createElementVNode=is,e.createHydrationRenderer=rp,e.createPropsRestProxy=function(e,t){let n={};for(let r in e)t.includes(r)||Object.defineProperty(n,r,{enumerable:!0,get:()=>e[r]});return n},e.createRenderer=function(e){return rh(e)},e.createSSRApp=(...e)=>{let t=lD().createApp(...e),{mount:n}=t;return t.mount=e=>{let t=lq(e);if(t)return n(t,!0,lH(t))},t},e.createSlots=function(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(x(r))for(let t=0;t<r.length;t++)e[r[t].name]=r[t].fn;else r&&(e[r.name]=r.key?(...e)=>{let t=r.fn(...e);return t&&(t.key=r.key),t}:r.fn)}return e},e.createStaticVNode=function(e,t){let n=io(r3,null,e);return n.staticCount=t,n},e.createTextVNode=iu,e.createVNode=io,e.customRef=tO,e.defineAsyncComponent=/*! #__NO_SIDE_EFFECTS__ */function(e){let t;E(e)&&(e={loader:e});let{loader:n,loadingComponent:r,errorComponent:i,delay:l=200,timeout:s,suspensible:o=!0,onError:a}=e,c=null,u=0,d=()=>(u++,c=null,p()),p=()=>{let e;return c||(e=c=n().catch(e=>{if(e=e instanceof Error?e:Error(String(e)),a)return new Promise((t,n)=>{a(e,()=>t(d()),()=>n(e),u+1)});throw e}).then(n=>e!==c&&c?c:(n&&(n.__esModule||"Module"===n[Symbol.toStringTag])&&(n=n.default),t=n,n)))};return nE({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return t},setup(){let e=ib;if(t)return()=>nN(t,e);let n=t=>{c=null,tV(t,e,13,!i)};if(o&&e.suspense)return p().then(t=>()=>nN(t,e)).catch(e=>(n(e),()=>i?io(i,{error:e}):null));let a=tT(!1),u=tT(),d=tT(!!l);return l&&setTimeout(()=>{d.value=!1},l),null!=s&&setTimeout(()=>{if(!a.value&&!u.value){let e=Error(`Async component timed out after ${s}ms.`);n(e),u.value=e}},s),p().then(()=>{a.value=!0,e.parent&&rE(e.parent.vnode)&&(e.parent.effect.dirty=!0,tJ(e.parent.update))}).catch(e=>{n(e),u.value=e}),()=>a.value&&t?nN(t,e):u.value&&i?io(i,{error:u.value}):r&&!d.value?io(r):void 0}})},e.defineComponent=nE,e.defineCustomElement=ld,e.defineEmits=function(){return null},e.defineExpose=function(e){},e.defineModel=function(){},e.defineOptions=function(e){},e.defineProps=function(){return null},e.defineSSRCustomElement=(e,t)=>ld(e,t,lj),e.defineSlots=function(){return null},e.devtools=void 0,e.effect=function(e,t){e.effect instanceof ev&&(e=e.effect.fn);let n=new ev(e,h,()=>{n.dirty&&n.run()});t&&(y(n,t),t.scope&&ey(n,t.scope)),t&&t.lazy||n.run();let r=n.run.bind(n);return r.effect=n,r},e.effectScope=function(e){return new eg(e)},e.getCurrentInstance=i_,e.getCurrentScope=function(){return n},e.getTransitionRawChildren=rK,e.guardReactiveProps=ia,e.h=iL,e.handleError=tV,e.hasInjectionContext=function(){return!!(ib||t6||nJ)},e.hydrate=lj,e.initCustomFormatter=function(){},e.initDirectivesForSSR=h,e.inject=nQ,e.isMemoSame=i$,e.isProxy=tg,e.isReactive=th,e.isReadonly=tf,e.isRef=tk,e.isRuntimeOnly=()=>!s,e.isShallow=tm,e.isVNode=it,e.markRaw=tv,e.mergeDefaults=function(e,t){let n=nP(e);for(let e in t){if(e.startsWith("__skip"))continue;let r=n[e];r?x(r)||E(r)?r=n[e]={type:r,default:t[e]}:r.default=t[e]:null===r&&(r=n[e]={default:t[e]}),r&&t[`__skip_${e}`]&&(r.skipFactory=!0)}return n},e.mergeModels=function(e,t){return e&&t?x(e)&&x(t)?e.concat(t):y({},nP(e),nP(t)):e||t},e.mergeProps=im,e.nextTick=tG,e.normalizeClass=ei,e.normalizeProps=function(e){if(!e)return null;let{class:t,style:n}=e;return t&&!A(t)&&(e.class=ei(t)),n&&(e.style=Y(n)),e},e.normalizeStyle=Y,e.onActivated=rN,e.onBeforeMount=ng,e.onBeforeUnmount=n_,e.onBeforeUpdate=nv,e.onDeactivated=rI,e.onErrorCaptured=nT,e.onMounted=ny,e.onRenderTracked=nk,e.onRenderTriggered=nC,e.onScopeDispose=function(e){n&&n.cleanups.push(e)},e.onServerPrefetch=nx,e.onUnmounted=nS,e.onUpdated=nb,e.openBlock=r8,e.popScopeId=function(){t4=null},e.provide=nX,e.proxyRefs=tI,e.pushScopeId=function(e){t4=e},e.queuePostFlushCb=tQ,e.reactive=tc,e.readonly=td,e.ref=tT,e.registerRuntimeCompiler=iw,e.render=lU,e.renderList=function(e,t,n,r){let i;let l=n&&n[r];if(x(e)||A(e)){i=Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,l&&l[n])}else if("number"==typeof e){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,l&&l[n])}else if(I(e)){if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,l&&l[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,s=n.length;r<s;r++){let s=n[r];i[r]=t(e[s],s,r,l&&l[r])}}}else i=[];return n&&(n[r]=i),i},e.renderSlot=function(e,t,n={},r,i){if(t6.isCE||t6.parent&&nA(t6.parent)&&t6.parent.isCE)return"default"!==t&&(n.name=t),io("slot",n,r&&r());let l=e[t];l&&l._c&&(l._d=!1),r8();let s=l&&function e(t){return t.some(t=>!it(t)||!!(t.type!==r2&&(t.type!==r0||e(t.children))))?t:null}(l(n)),o=ie(r0,{key:n.key||s&&s.key||`_${t}`},s||(r?r():[]),s&&1===e._?64:-2);return!i&&o.scopeId&&(o.slotScopeIds=[o.scopeId+"-s"]),l&&l._c&&(l._d=!0),o},e.resolveComponent=function(e,t){return nl(nr,e,!0,t)||e},e.resolveDirective=function(e){return nl("directives",e)},e.resolveDynamicComponent=function(e){return A(e)?nl(nr,e,!1)||e:e||ni},e.resolveFilter=null,e.resolveTransitionHooks=rj,e.setBlockTracking=function(e){r9+=e},e.setDevtoolsHook=h,e.setTransitionHooks=rW,e.shallowReactive=tu,e.shallowReadonly=function(e){return tp(e,!0,ez,ti,ta)},e.shallowRef=function(e){return tw(e,!0)},e.ssrContextKey=rb,e.ssrUtils=null,e.stop=function(e){e.effect.stop()},e.toDisplayString=eh,e.toHandlerKey=W,e.toHandlers=function(e,t){let n={};for(let r in e)n[t&&/[A-Z]/.test(r)?`on:${r}`:W(r)]=e[r];return n},e.toRaw=ty,e.toRef=function(e,t,n){return tk(e)?e:E(e)?new t$(e):I(e)&&arguments.length>1?tM(e,t,n):tT(e)},e.toRefs=function(e){let t=x(e)?Array(e.length):{};for(let n in e)t[n]=tM(e,n);return t},e.toValue=function(e){return E(e)?e():tA(e)},e.transformVNodeArgs=function(e){},e.triggerRef=function(e){tC(e,4)},e.unref=tA,e.useAttrs=function(){return nM().attrs},e.useCssModule=function(e="$style"){return d},e.useCssVars=function(e){let t=i_();if(!t)return;let n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(e=>i8(e,n))},r=()=>{let r=e(t.proxy);(function e(t,n){if(128&t.shapeFlag){let r=t.suspense;t=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{e(r.activeBranch,n)})}for(;t.component;)t=t.component.subTree;if(1&t.shapeFlag&&t.el)i8(t.el,n);else if(t.type===r0)t.children.forEach(t=>e(t,n));else if(t.type===r3){let{el:e,anchor:r}=t;for(;e&&(i8(e,n),e!==r);)e=e.nextSibling}})(t.subTree,r),n(r)};ny(()=>{r_(r);let e=new MutationObserver(r);e.observe(t.subTree.el.parentNode,{childList:!0}),nS(()=>e.disconnect())})},e.useModel=function(e,t,n=d){let r=i_(),i=U(t),l=H(t),s=tO((s,o)=>{let a;return rS(()=>{let n=e[t];K(a,n)&&(a=n,o())}),{get:()=>(s(),n.get?n.get(a):a),set(e){let s=r.vnode.props;!(s&&(t in s||i in s||l in s)&&(`onUpdate:${t}` in s||`onUpdate:${i}` in s||`onUpdate:${l}` in s))&&K(e,a)&&(a=e,o()),r.emit(`update:${t}`,n.set?n.set(e):e)}}}),o="modelValue"===t?"modelModifiers":`${t}Modifiers`;return s[Symbol.iterator]=()=>{let t=0;return{next:()=>t<2?{value:t++?e[o]||{}:s,done:!1}:{done:!0}}},s},e.useSSRContext=()=>{},e.useSlots=function(){return nM().slots},e.useTransitionState=rP,e.vModelCheckbox=lE,e.vModelDynamic={created(e,t,n){l$(e,t,n,null,"created")},mounted(e,t,n){l$(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){l$(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){l$(e,t,n,r,"updated")}},e.vModelRadio=lN,e.vModelSelect=lI,e.vModelText=lw,e.vShow={beforeMount(e,{value:t},{transition:n}){e[i2]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):i6(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),i6(e,!0),r.enter(e)):r.leave(e,()=>{i6(e,!1)}):i6(e,t))},beforeUnmount(e,{value:t}){i6(e,t)}},e.version=iM,e.warn=h,e.watch=function(e,t,n){return rC(e,t,n)},e.watchEffect=function(e,t){return rC(e,null,t)},e.watchPostEffect=r_,e.watchSyncEffect=rS,e.withAsyncContext=function(e){let t=i_(),n=e();return ix(),R(n)&&(n=n.catch(e=>{throw iS(t),e})),[n,()=>iS(t)]},e.withCtx=t5,e.withDefaults=function(e,t){return null},e.withDirectives=function(e,t){if(null===t6)return e;let n=iI(t6),r=e.dirs||(e.dirs=[]);for(let e=0;e<t.length;e++){let[i,l,s,o=d]=t[e];i&&(E(i)&&(i={mounted:i,updated:i}),i.deep&&rw(l),r.push({dir:i,instance:n,value:l,oldValue:void 0,arg:s,modifiers:o}))}return e},e.withKeys=(e,t)=>{let n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;let r=H(n.key);if(t.some(e=>e===r||lF[e]===r))return e(n)})},e.withMemo=function(e,t,n,r){let i=n[r];if(i&&i$(i,e))return i;let l=t();return l.memo=e.slice(),l.memoIndex=r,n[r]=l},e.withModifiers=(e,t)=>{let n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(n,...r)=>{for(let e=0;e<t.length;e++){let r=lP[t[e]];if(r&&r(n,t))return}return e(n,...r)})},e.withScopeId=e=>t5,e}({});

/* ==========================================================================
 * Bundled dependency: blueimp-md5 2.19.0 (js/md5.min.js)
 * Source : npm package blueimp-md5@2.19.0 (MIT)
 * sha256 : 64d7ded388c562e4bde9e58ce205e5fa01b9734fcd434d496eb7b4fbfe9b927d
 * This block is byte-for-byte identical to the npm artifact -- verify with:
 *   node -e "..." or any sha256 tool. Do not edit it by hand.
 * ========================================================================== */
!function(n){"use strict";function d(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function f(n,t,r,e,o,u){return d((u=d(d(t,n),d(e,u)))<<o|u>>>32-o,r)}function l(n,t,r,e,o,u,c){return f(t&r|~t&e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return f(t&e|r&~e,n,t,o,u,c)}function v(n,t,r,e,o,u,c){return f(t^r^e,n,t,o,u,c)}function m(n,t,r,e,o,u,c){return f(r^(t|~e),n,t,o,u,c)}function c(n,t){var r,e,o,u;n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;for(var c=1732584193,f=-271733879,i=-1732584194,a=271733878,h=0;h<n.length;h+=16)c=l(r=c,e=f,o=i,u=a,n[h],7,-680876936),a=l(a,c,f,i,n[h+1],12,-389564586),i=l(i,a,c,f,n[h+2],17,606105819),f=l(f,i,a,c,n[h+3],22,-1044525330),c=l(c,f,i,a,n[h+4],7,-176418897),a=l(a,c,f,i,n[h+5],12,1200080426),i=l(i,a,c,f,n[h+6],17,-1473231341),f=l(f,i,a,c,n[h+7],22,-45705983),c=l(c,f,i,a,n[h+8],7,1770035416),a=l(a,c,f,i,n[h+9],12,-1958414417),i=l(i,a,c,f,n[h+10],17,-42063),f=l(f,i,a,c,n[h+11],22,-1990404162),c=l(c,f,i,a,n[h+12],7,1804603682),a=l(a,c,f,i,n[h+13],12,-40341101),i=l(i,a,c,f,n[h+14],17,-1502002290),c=g(c,f=l(f,i,a,c,n[h+15],22,1236535329),i,a,n[h+1],5,-165796510),a=g(a,c,f,i,n[h+6],9,-1069501632),i=g(i,a,c,f,n[h+11],14,643717713),f=g(f,i,a,c,n[h],20,-373897302),c=g(c,f,i,a,n[h+5],5,-701558691),a=g(a,c,f,i,n[h+10],9,38016083),i=g(i,a,c,f,n[h+15],14,-660478335),f=g(f,i,a,c,n[h+4],20,-405537848),c=g(c,f,i,a,n[h+9],5,568446438),a=g(a,c,f,i,n[h+14],9,-1019803690),i=g(i,a,c,f,n[h+3],14,-187363961),f=g(f,i,a,c,n[h+8],20,1163531501),c=g(c,f,i,a,n[h+13],5,-1444681467),a=g(a,c,f,i,n[h+2],9,-51403784),i=g(i,a,c,f,n[h+7],14,1735328473),c=v(c,f=g(f,i,a,c,n[h+12],20,-1926607734),i,a,n[h+5],4,-378558),a=v(a,c,f,i,n[h+8],11,-2022574463),i=v(i,a,c,f,n[h+11],16,1839030562),f=v(f,i,a,c,n[h+14],23,-35309556),c=v(c,f,i,a,n[h+1],4,-1530992060),a=v(a,c,f,i,n[h+4],11,1272893353),i=v(i,a,c,f,n[h+7],16,-155497632),f=v(f,i,a,c,n[h+10],23,-1094730640),c=v(c,f,i,a,n[h+13],4,681279174),a=v(a,c,f,i,n[h],11,-358537222),i=v(i,a,c,f,n[h+3],16,-722521979),f=v(f,i,a,c,n[h+6],23,76029189),c=v(c,f,i,a,n[h+9],4,-640364487),a=v(a,c,f,i,n[h+12],11,-421815835),i=v(i,a,c,f,n[h+15],16,530742520),c=m(c,f=v(f,i,a,c,n[h+2],23,-995338651),i,a,n[h],6,-198630844),a=m(a,c,f,i,n[h+7],10,1126891415),i=m(i,a,c,f,n[h+14],15,-1416354905),f=m(f,i,a,c,n[h+5],21,-57434055),c=m(c,f,i,a,n[h+12],6,1700485571),a=m(a,c,f,i,n[h+3],10,-1894986606),i=m(i,a,c,f,n[h+10],15,-1051523),f=m(f,i,a,c,n[h+1],21,-2054922799),c=m(c,f,i,a,n[h+8],6,1873313359),a=m(a,c,f,i,n[h+15],10,-30611744),i=m(i,a,c,f,n[h+6],15,-1560198380),f=m(f,i,a,c,n[h+13],21,1309151649),c=m(c,f,i,a,n[h+4],6,-145523070),a=m(a,c,f,i,n[h+11],10,-1120210379),i=m(i,a,c,f,n[h+2],15,718787259),f=m(f,i,a,c,n[h+9],21,-343485551),c=d(c,r),f=d(f,e),i=d(i,o),a=d(a,u);return[c,f,i,a]}function i(n){for(var t="",r=32*n.length,e=0;e<r;e+=8)t+=String.fromCharCode(n[e>>5]>>>e%32&255);return t}function a(n){var t=[];for(t[(n.length>>2)-1]=void 0,e=0;e<t.length;e+=1)t[e]=0;for(var r=8*n.length,e=0;e<r;e+=8)t[e>>5]|=(255&n.charCodeAt(e/8))<<e%32;return t}function e(n){for(var t,r="0123456789abcdef",e="",o=0;o<n.length;o+=1)t=n.charCodeAt(o),e+=r.charAt(t>>>4&15)+r.charAt(15&t);return e}function r(n){return unescape(encodeURIComponent(n))}function o(n){return i(c(a(n=r(n)),8*n.length))}function u(n,t){return function(n,t){var r,e=a(n),o=[],u=[];for(o[15]=u[15]=void 0,16<e.length&&(e=c(e,8*n.length)),r=0;r<16;r+=1)o[r]=909522486^e[r],u[r]=1549556828^e[r];return t=c(o.concat(a(t)),512+8*t.length),i(c(u.concat(t),640))}(r(n),r(t))}function t(n,t,r){return t?r?u(t,n):e(u(t,n)):r?o(n):e(o(n))}"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:n.md5=t}(this);
//# sourceMappingURL=md5.min.js.map

(function (vue, md5) {
  'use strict';

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  /*! Element Plus Icons Vue v2.3.2 */
  var _sfc_main118 = /* @__PURE__ */ vue.defineComponent({
    name: "FullScreen",
    __name: "full-screen",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
        })
      ]));
    }
  }), full_screen_default = _sfc_main118;
  var _sfc_main169 = /* @__PURE__ */ vue.defineComponent({
    name: "Minus",
    __name: "minus",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
        })
      ]));
    }
  }), minus_default = _sfc_main169;
  var _sfc_main288 = /* @__PURE__ */ vue.defineComponent({
    name: "Warning",
    __name: "warning",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
        })
      ]));
    }
  }), warning_default = _sfc_main288;
  var _GM_getValue = /* @__PURE__ */ (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = /* @__PURE__ */ (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_setValue = /* @__PURE__ */ (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_xmlhttpRequest = /* @__PURE__ */ (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = /* @__PURE__ */ (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
  const getScriptInfo = () => {
    return {
      name: _GM_info.script.name,
      author: _GM_info.script.author,
      namespace: _GM_info.script.namespace,
      version: _GM_info.script.version,
      description: _GM_info.script.description
    };
  };
  const apiError = (message, status) => ({
    success: false,
    data: null,
    error: {
      code: status && status >= 400 ? `HTTP_${status}` : "CLIENT_ERROR",
      message,
      details: null
    },
    meta: null
  });
  const getAnswerValues = (response, question) => {
    var _a;
    if (!response.success || !response.data || !Array.isArray(response.data.items))
      return null;
    const items = response.data.items;
    const stem = ((_a = question.searchText) == null ? void 0 : _a.stem) ?? question.title;
    const matches = items.length === 1 ? items : items.filter((item) => item.stem === stem);
    const answer = matches.length === 1 ? matches[0].answer : null;
    if (!answer || !Array.isArray(answer.values) || answer.values.length === 0)
      return null;
    if (answer.kind === "none" || answer.kind === "missing")
      return null;
    return answer.values;
  };
  const CONFIG_STORAGE_KEY = "config";
  const LEGACY_CONFIG_STORAGE_KEY = "globalConfig";
  const LLM_API_KEY_STORAGE_KEY = "llmApiKey";
  const isPlainObject = (value) => {
    return Object.prototype.toString.call(value) === "[object Object]";
  };
  const cloneLatestValue = (value) => {
    if (Array.isArray(value)) {
      return value.map((item) => cloneLatestValue(item));
    }
    if (isPlainObject(value)) {
      return Object.fromEntries(
        Object.entries(value).map(([key, item]) => [key, cloneLatestValue(item)])
      );
    }
    return value;
  };
  const getItemName = (item) => {
    if (!isPlainObject(item) || typeof item.name !== "string")
      return null;
    return item.name;
  };
  const mergeArrayByLatestFields = (latestArray, storedArray) => {
    const canMergeByName = latestArray.every((item) => getItemName(item) !== null);
    if (!canMergeByName)
      return cloneLatestValue(storedArray.length ? storedArray : latestArray);
    return latestArray.map((latestItem) => {
      const latestName = getItemName(latestItem);
      const storedItem = storedArray.find((item) => getItemName(item) === latestName);
      return mergeByLatestFields(latestItem, storedItem);
    });
  };
  const mergeByLatestFields = (latestValue, storedValue) => {
    if (Array.isArray(latestValue)) {
      return mergeArrayByLatestFields(latestValue, Array.isArray(storedValue) ? storedValue : []);
    }
    if (isPlainObject(latestValue)) {
      const storedObject = isPlainObject(storedValue) ? storedValue : {};
      return Object.fromEntries(
        Object.entries(latestValue).map(([key, latestItem]) => [
          key,
          mergeByLatestFields(latestItem, storedObject[key])
        ])
      );
    }
    return storedValue === void 0 ? cloneLatestValue(latestValue) : storedValue;
  };
  const migrateConfig = (storedConfig, defaultConfig) => {
    const mergedConfig = mergeByLatestFields(defaultConfig, storedConfig);
    mergedConfig.version = defaultConfig.version;
    mergedConfig.otherParams.params[0].min = defaultConfig.otherParams.params[0].min;
    const rateParam = mergedConfig.platformParams.cx.parts[0].params[0];
    const rateDefault = defaultConfig.platformParams.cx.parts[0].params[0];
    rateParam.type = rateDefault.type;
    if (!(rateParam.options || []).some((option) => option.value === rateParam.value))
      rateParam.value = rateDefault.value;
    // The 其他参数 defaults changed (间隔 3->1 秒, 正确率/相似度 85->100). Adopt the new
    // default only while the stored value is still the previous default, so a value
    // that was deliberately changed is never overwritten.
    [3, 85, 85].forEach((previousDefault, index) => {
      const param = mergedConfig.otherParams.params[index];
      const fallback = defaultConfig.otherParams.params[index];
      if (param && fallback && param.value === previousDefault)
        param.value = fallback.value;
    });
    return mergedConfig;
  };
  const getLocalStorageConfig = () => {
    try {
      return localStorage.getItem(CONFIG_STORAGE_KEY) || "";
    } catch (error) {
      console.error(error);
      return "";
    }
  };
  const setLocalStorageConfig = (serializedConfig) => {
    try {
      localStorage.setItem(CONFIG_STORAGE_KEY, serializedConfig);
    } catch (error) {
      console.error(error);
    }
  };
  const getStoredConfigText = () => {
    const gmConfig = _GM_getValue(CONFIG_STORAGE_KEY);
    if (typeof gmConfig === "string" && gmConfig)
      return gmConfig;
    const localConfig = getLocalStorageConfig();
    if (localConfig)
      return localConfig;
    const legacyConfig = _GM_getValue(LEGACY_CONFIG_STORAGE_KEY);
    if (typeof legacyConfig === "string" && legacyConfig)
      return legacyConfig;
    return "";
  };
  const persistConfig = (config2) => {
    // Defensive: unwrap a store-like object, then serialize plain data only.
    const configState = config2 && config2.$state ? config2.$state : config2;
    // Do not put the BYOK key in page localStorage or the legacy config copy.
    _GM_setValue(LLM_API_KEY_STORAGE_KEY, configState.llm.apiKey || "");
    const serializedConfig = JSON.stringify(configState, (key, value) => key === "apiKey" ? void 0 : value);
    _GM_setValue(CONFIG_STORAGE_KEY, serializedConfig);
    _GM_setValue(LEGACY_CONFIG_STORAGE_KEY, serializedConfig);
    setLocalStorageConfig(serializedConfig);
  };
  const createStore = (factory) => {
    let store = null;
    return () => {
      if (!store) {
        const raw = factory();
        store = vue.reactive(raw);
        // Pinia binds actions to the store instance; mirror that, because the code
        // extracts methods (e.g. `this.addLog = logStore.addLog`) and calls them detached.
        for (const key of Object.keys(raw)) {
          if (typeof raw[key] === "function")
            store[key] = raw[key].bind(store);
        }
      }
      return store;
    };
  };
  const useConfigStore = createStore(() => {
      const scriptInfo = getScriptInfo();
      const defaultConfig = {
        version: scriptInfo.version,
        isMinus: false,
        enabled: true,
        position: {
          x: "800px",
          y: "200px"
        },
        menuIndex: "0",
        platformName: "cx",
        llm: {
          endpoint: "https://api.deepseek.com",
          model: "deepseek-v4-flash",
          reasoningEffort: "default",
          reasoningEffortCustom: "",
          apiKey: ""
        },
        platformParams: {
          cx: {
            name: "Huami Course Helper",
            parts: [
              {
                name: "章节设置",
                params: [
                  {
                    name: '视频速率',
                    value: 1,
                    type: 'select',
                    options: [
                      { label: '1 倍速', value: 1 },
                      { label: '1.5 倍速', value: 1.5 },
                      { label: '2 倍速', value: 2 },
                      { label: '2.5 倍速', value: 2.5 },
                      { label: '3 倍速', value: 3 }
                    ]
                  },
                  {
                    name: "章节作业自动提交",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "是否自动下一章节",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "只答题，不做其他",
                    value: false,
                    type: "boolean"
                  }
                ]
              },
              {
                name: "考试设置",
                params: [{
                  name: "是否自动切换",
                  value: true,
                  type: "boolean"
                }]
              }
            ]
          },
          zhs: {
            name: "Huami Course Helper",
            parts: [{
              name: "答题设置",
              params: [{
                name: "是否自动切换",
                value: true,
                type: "boolean"
              }]
            }]
          },
          unknown: {
            name: "Huami Course Helper",
            parts: [{
              name: "答题设置",
              params: [{
                name: "是否自动切换",
                value: true,
                type: "boolean"
              }]
            }]
          }
        },
        // 没答案自动选择
        otherParams: {
          name: "其他参数",
          params: [
            //     {
            //     name: '没答案随机选择',
            //     value: true,
            //     type: 'boolean',
            // },
            {
              name: "切换、答题间隔，单位秒",
              value: 1,
              type: "number",
              min: 1
            },
            {
              name: "正确率达到多少自动提交",
              value: 100,
              type: "number",
              min: 0,
              max: 100,
              step: 1
            },
            {
              name: "答案相似度超过多少选择",
              value: 100,
              type: "number",
              min: 0,
              max: 100,
              step: 1
            }
          ]
        }
      };
      let globalConfig = defaultConfig;
      const storedConfig = getStoredConfigText();
      if (storedConfig) {
        try {
          const parsedStoredConfig = JSON.parse(storedConfig);
          globalConfig = migrateConfig(parsedStoredConfig, defaultConfig);
        } catch (error) {
          console.error(error);
        }
      }
      globalConfig.llm.apiKey = _GM_getValue(LLM_API_KEY_STORAGE_KEY, "") || "";
      persistConfig(globalConfig);
      return globalConfig;
  });
  const getCxParamValue = (name) => {
    const parts = useConfigStore().platformParams.cx.parts;
    for (const part of parts) {
      const param = part.params.find((item) => item.name === name);
      if (param)
        return param.value;
    }
    return false;
  };
  const formatDateTime = (dt) => {
    dt.getFullYear();
    dt.getMonth() + 1;
    dt.getDate();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };
  const pad = (n) => {
    return n < 10 ? "0" + n : n.toString();
  };
  const getDateTime = () => {
    let now = /* @__PURE__ */ new Date();
    return formatDateTime(now);
  };
  const useLogStore = createStore(() => ({
    logList: [],
    addLog(message, type) {
      const log = {
        message,
        time: getDateTime(),
        type
      };
      this.logList.push(log);
    }
  }));
  const useQuestionStore = createStore(() => ({
    questionList: [],
    addQuestion(question) {
      this.questionList.push(question);
    },
    clearQuestion() {
      this.questionList = [];
    }
  }));
  const sleep = (second) => {
    return new Promise((resolve) => setTimeout(resolve, second * 1e3));
  };
  // Page APIs differ between chaoxing versions. Call them defensively so a site
  // change produces a clear message instead of an opaque TypeError.
  const callPageApi = async (target, name, ...args) => {
    let fn = null;
    try {
      fn = target ? target[name] : null;
    } catch (_) {
      fn = null;
    }
    if (typeof fn !== "function") {
      useLogStore().addLog(`页面未提供 ${name}()，可能是学习通改版了，已跳过本次操作`, "danger");
      return false;
    }
    try {
      await fn.apply(target, args);
      return true;
    } catch (error) {
      useLogStore().addLog(`调用 ${name}() 失败：${String(error)}，已跳过本次操作`, "danger");
      return false;
    }
  };

  const getChatCompletionsUrl = (endpoint) => {
    const url2 = new URL(endpoint.trim());
    const isLocal = ["localhost", "127.0.0.1", "[::1]"].includes(url2.hostname);
    if (url2.protocol !== "https:" && !(isLocal && url2.protocol === "http:"))
      throw new Error("模型端点必须使用 HTTPS，本机端点可使用 HTTP");
    if (url2.search || url2.hash)
      throw new Error("模型端点不能包含查询参数或片段");
    const path = url2.pathname.replace(/\/+$/, "");
    url2.pathname = path + (path.endsWith("/chat/completions") ? "" : "/chat/completions");
    return url2.toString();
  };
  const collectQuestionImages = (question) => {
    const urls = [];
    const add = (source) => {
      if (!source)
        return;
      try {
        const url2 = new URL(source, question.refer || location.href);
        if (["https:", "http:", "data:", "blob:"].includes(url2.protocol) && !urls.includes(url2.href))
          urls.push(url2.href);
      } catch (_) {
        // A broken image is not a usable visual input.
      }
    };
    const inspectHtml = (html) => {
      const container = document.createElement("div");
      container.innerHTML = String(html || "");
      container.querySelectorAll("img").forEach((img) => add(img.getAttribute("src") || img.getAttribute("data-src")));
    };
    inspectHtml((question.searchText && question.searchText.stem) || question.title);
    ((question.searchText && question.searchText.options) || question.optionsText || []).forEach(inspectHtml);
    if (question.element)
      question.element.querySelectorAll("img").forEach((img) => add(img.currentSrc || img.getAttribute("src") || img.getAttribute("data-src")));
    return urls;
  };
  const imageToDataUrl = async (source) => {
    if (/^data:image\/(?:png|jpeg|gif|webp);base64,/i.test(source)) {
      if (source.length > 14 * 1024 * 1024)
        throw new Error("单张图片超过 10 MiB");
      return source;
    }
    if (source.startsWith("data:"))
      throw new Error("不支持的图片格式");
    const blob = source.startsWith("blob:") ? await (await fetch(source)).blob() : await new Promise((resolve, reject) => {
      _GM_xmlhttpRequest({
        method: "GET", url: source, responseType: "blob", timeout: 2e4,
        onload: (response) => response.status >= 200 && response.status < 300 && response.response && typeof response.response.arrayBuffer === "function" ? resolve(response.response) : reject(new Error(`图片下载失败 (HTTP ${response.status})`)),
        onerror: () => reject(new Error("图片下载失败")),
        ontimeout: () => reject(new Error("图片下载超时"))
      });
    });
    if (blob.size > 10 * 1024 * 1024)
      throw new Error("单张图片超过 10 MiB");
    const signature = new Uint8Array(await blob.slice(0, 12).arrayBuffer());
    const ascii = (start, end) => String.fromCharCode(...signature.slice(start, end));
    const mime = ascii(0, 4) === "\x89PNG" ? "image/png" : signature[0] === 255 && signature[1] === 216 ? "image/jpeg" : ascii(0, 3) === "GIF" ? "image/gif" : ascii(0, 4) === "RIFF" && ascii(8, 12) === "WEBP" ? "image/webp" : "";
    if (!mime)
      throw new Error("不支持的图片格式；仅支持 PNG、JPEG、GIF、WebP");
    const typedBlob = new Blob([blob], { type: mime });
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("图片读取失败"));
      reader.readAsDataURL(typedBlob);
    });
  };
  const QUESTION_TYPE_NAMES = {
    "0": "单选题",
    "1": "多选题",
    "2": "填空题",
    "3": "判断题",
    "4": "简答题",
    "6": "简答题"
  };
  const getQuestionTypeName = (type) => QUESTION_TYPE_NAMES[String(type)] || "选择题";
  const OPTION_LETTER_ANSWER_RE = /^(?:答案|选项|选择|answer|ans)?\s*[:：]?\s*([A-Za-z](?:\s*[、,，.．/|和及]?\s*[A-Za-z])*)\s*[.．。]?$/;
  const normalizeJudgementAnswer = (value) => {
    const text = String(value == null ? "" : value).replace(/[\s.．、：:，,。；;！!？?"'“”‘’（）()\[\]【】]/g, "").toLowerCase();
    if (!text)
      return "";
    if (/(不正确|不对|错误|错的|错|否|不是|×|✗|✘|false|wrong|^f$|^x$|^no$|^n$)/.test(text))
      return "错误";
    if (/(正确|对的|对|是|√|✓|true|right|^t$|^y$|^yes$)/.test(text))
      return "正确";
    return "";
  };
  const normalizeModelAnswers = (raw, question) => {
    const content = typeof raw === "string" ? raw : Array.isArray(raw) ? raw.filter((part) => part.type === "text").map((part) => part.text).join("") : "";
    const cleaned = content.trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
    const parsed = JSON.parse(cleaned);
    const values = Array.isArray(parsed) ? parsed : parsed.answers;
    if (!Array.isArray(values) || !values.length || values.some((value) => typeof value !== "string" || !value.trim()))
      throw new Error("模型答案不是非空字符串数组");
    const type = String(question.type);
    if (["0", "1", "单选题", "多选题"].includes(type)) {
      const options = (question.searchText && question.searchText.options) || question.optionsText || [];
      const indices = [];
      const leftovers = [];
      for (const value of values) {
        const text = value.trim();
        const letters = text.match(OPTION_LETTER_ANSWER_RE);
        if (letters) {
          for (const letter of letters[1].replace(/[^A-Za-z]/g, ""))
            indices.push(letter.toUpperCase().charCodeAt(0) - 65);
          continue;
        }
        const exact = options.findIndex((option) => String(option).replace(/<[^>]*>/g, "").trim() === text);
        if (exact >= 0)
          indices.push(exact);
        else
          leftovers.push(text);
      }
      const unique = [...new Set(indices)].filter((index) => index >= 0 && index < options.length).sort((a, b) => a - b);
      // Letters map to the canonical option text; everything else is passed to the
      // filler, which fuzzy-matches it against the live options (答案相似度 setting).
      const mapped = unique.map((index) => options[index]).concat(leftovers);
      if (!mapped.length)
        throw new Error("模型答案与题目选项不匹配");
      if (["0", "单选题"].includes(type))
        return [mapped[0]];
      return mapped;
    }
    if (["3", "判断题"].includes(type))
      return values.map((value) => normalizeJudgementAnswer(value) || value.trim());
    return values.map((value) => value.trim());
  };
  const getLlmAnswer = async (question) => {
    const configStore = useConfigStore();
    const settings = configStore.llm;
    if (!settings.apiKey.trim())
      return apiError("大模型 API Key 未配置，请在设置中填写");
    const reasoningEffort = settings.reasoningEffort === "custom" ? String(settings.reasoningEffortCustom || "").trim() : String(settings.reasoningEffort || "default").trim();
    if (settings.reasoningEffort === "custom" && !reasoningEffort)
      return apiError("请填写自定义思考强度");
    let url2;
    try {
      url2 = getChatCompletionsUrl(settings.endpoint);
    } catch (error) {
      return apiError(error.message || "模型端点不正确");
    }
    const images = collectQuestionImages(question);
    if (images.length > 12)
      return apiError("题目图片超过 12 张，请手动处理");
    const stem = (question.searchText && question.searchText.stem) || question.title;
    const options = (question.searchText && question.searchText.options) || question.optionsText || [];
    const plain = (value) => String(value || "").replace(/<img\b[^>]*>/gi, "[图片]").replace(/<[^>]*>/g, "");
    const prompt = `题型：${getQuestionTypeName(question.type)}\n题目：${plain(stem)}\n选项：${options.map((option, index) => `${String.fromCharCode(65 + index)}. ${plain(option)}`).join("\n") || "无"}\n图片按出现顺序另附，共 ${images.length} 张。` +
      `请只返回 JSON：{"answers":["答案"]}，不要输出任何解释或多余文字。` +
      `选择题填选项字母，多选题每个字母单独一项（例如 {"answers":["A","C"]}），选项顺序固定不要改写；` +
      `判断题只填“正确”或“错误”；填空题按空格顺序每空一项；简答题填一段文字。不要猜测看不清的图片。`;
    const parts = [{ type: "text", text: prompt }];
    try {
      for (const source of images)
        parts.push({ type: "image_url", image_url: { url: await imageToDataUrl(source) } });
    } catch (error) {
      return apiError(`图片处理失败：${error.message}`);
    }
    const body = {
      model: settings.model.trim(),
      messages: [
        { role: "system", content: "你是答题助手。严格按用户指定的 JSON 格式回答；不确定时返回 {\"answers\":[]}。" },
        { role: "user", content: images.length ? parts : prompt }
      ],
      // Factual answers are far more consistent with greedy decoding.
      temperature: 0,
      stream: false
    };
    if (!body.model)
      return apiError("模型名称未配置");
    if (reasoningEffort && reasoningEffort !== "default") {
      if (reasoningEffort === "none" && new URL(url2).hostname === "api.deepseek.com")
        body.thinking = { type: "disabled" };
      else
        body.reasoning_effort = reasoningEffort;
    }
    await sleep(configStore.otherParams.params[0].value);
    return new Promise((resolve) => {
      _GM_xmlhttpRequest({
        method: "POST", url: url2, timeout: 9e4,
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${settings.apiKey.trim()}` },
        data: JSON.stringify(body),
        onload: (response) => {
          try {
            const payload = JSON.parse(response.responseText);
            if (response.status < 200 || response.status >= 300)
              return resolve(apiError(`模型请求失败 (HTTP ${response.status})：${String(payload.error && payload.error.message || "请检查端点、密钥和模型").slice(0, 180)}`, response.status));
            const values = normalizeModelAnswers(payload.choices && payload.choices[0] && payload.choices[0].message && payload.choices[0].message.content, question);
            if (!values.length)
              return resolve(apiError("模型未给出确定答案"));
            resolve({ success: true, data: { items: [{ stem, answer: { kind: "text", values } }] }, error: null, meta: { source: "llm" } });
          } catch (error) {
            resolve(apiError(`模型响应解析失败：${error.message}`));
          }
        },
        onerror: () => resolve(apiError("模型请求失败，请检查网络或脚本跨域授权")),
        ontimeout: () => resolve(apiError("模型请求超时")),
        onabort: () => resolve(apiError("模型请求已取消"))
      });
    });
  };
  const _hoisted_1$5 = { class: "script-home" };
  const ANSWER_TAB_NAME$1 = "1";
  const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      logList: {}
    },
    setup(__props) {
      const configStore = useConfigStore();
      const logScrollbar = vue.ref(null);
      const scrollLogToBottom = () => {
        vue.nextTick(() => {
          const bar = logScrollbar.value;
          if (!bar)
            return;
          try {
            if (typeof bar.setScrollTop === "function")
              bar.setScrollTop(1e7);
            else if (bar.wrapRef)
              bar.wrapRef.scrollTop = bar.wrapRef.scrollHeight;
          } catch (_) {
          }
        });
      };
      vue.watch(() => (__props.logList || []).length, scrollLogToBottom);
      vue.onMounted(scrollLogToBottom);
      const handleLogClick = (event) => {
        const target = event.target;
        const actionElement = target == null ? void 0 : target.closest('[data-log-action="show-answer-tab"]');
        if (!actionElement)
          return;
        event.preventDefault();
        configStore.menuIndex = ANSWER_TAB_NAME$1;
      };
      return (_ctx, _cache) => {
        const _component_hc_text = vue.resolveComponent("hc-text");
        const _component_hc_divider = vue.resolveComponent("hc-divider");
        const _component_hc_scrollbar = vue.resolveComponent("hc-scrollbar");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
          vue.createVNode(_component_hc_scrollbar, {
            ref: logScrollbar,
            always: "",
            class: "log",
            "max-height": "230px",
            onClick: handleLogClick
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.logList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("div", { key: index, class: "log-item" }, [
                  vue.createVNode(_component_hc_text, {
                    class: "log-time",
                    size: "small",
                    type: "info"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(item.time), 1)
                    ]),
                    _: 2
                  }, 1024),
                  vue.createVNode(_component_hc_text, null, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" ")
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_hc_text, {
                    type: item.type ? item.type : "primary",
                    size: "small",
                    innerHTML: item.message
                  }, null, 8, ["type", "innerHTML"]),
                  vue.createVNode(_component_hc_divider, {
                    class: "log-divider",
                    "border-style": "dashed"
                  })
                ]);
              }), 128))
            ]),
            _: 1
          })
        ]);
      };
    }
  });
  const _hoisted_1$4 = { class: "setting" };
  const _hoisted_2$4 = { class: "setting-section-title" };
  const _hoisted_3$2 = { class: "setting-section-title" };
  const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
    __name: "index",
    props: {
      globalConfig: {}
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_hc_divider = vue.resolveComponent("hc-divider");
        const _component_hc_checkbox = vue.resolveComponent("hc-checkbox");
        const _component_hc_input_number = vue.resolveComponent("hc-input-number");
        const _component_hc_form_item = vue.resolveComponent("hc-form-item");
        const _component_hc_input = vue.resolveComponent("hc-input");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          vue.createElementVNode("div", { class: "byok-field enable-field" }, [
            vue.createVNode(_component_hc_checkbox, {
              modelValue: _ctx.globalConfig.enabled,
              "onUpdate:modelValue": ($event) => _ctx.globalConfig.enabled = $event,
              label: "启用脚本",
              size: "small"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            vue.createElementVNode("p", { class: "byok-help" }, vue.toDisplayString(_ctx.globalConfig.enabled ? "脚本正在运行：会自动播放视频、自动答题。取消勾选可立即停止，无需刷新。" : "脚本已停用：不会再自动播放或答题。勾选后立即恢复，无需刷新。"), 1)
          ]),
          vue.createElementVNode("section", { class: "byok-settings" }, [
            vue.createElementVNode("h3", { class: "byok-title" }, "大模型"),
            vue.createElementVNode("div", { class: "byok-field" }, [
              vue.createElementVNode("label", { for: "byok-endpoint", class: "byok-label" }, "端点"),
              vue.createVNode(_component_hc_input, {
                id: "byok-endpoint", modelValue: _ctx.globalConfig.llm.endpoint,
                "onUpdate:modelValue": ($event) => _ctx.globalConfig.llm.endpoint = $event,
                placeholder: "https://api.deepseek.com", size: "small"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createElementVNode("div", { class: "byok-field" }, [
              vue.createElementVNode("label", { for: "byok-model", class: "byok-label" }, "模型"),
              vue.createVNode(_component_hc_input, {
                id: "byok-model", modelValue: _ctx.globalConfig.llm.model,
                "onUpdate:modelValue": ($event) => _ctx.globalConfig.llm.model = $event,
                placeholder: "deepseek-flash", size: "small"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createElementVNode("div", { class: "byok-field" }, [
              vue.createElementVNode("label", { for: "byok-api-key", class: "byok-label" }, "API Key"),
              vue.createVNode(_component_hc_input, {
                id: "byok-api-key", modelValue: _ctx.globalConfig.llm.apiKey,
                "onUpdate:modelValue": ($event) => _ctx.globalConfig.llm.apiKey = $event,
                type: "password", "show-password": true, autocomplete: "off",
                placeholder: "保存在脚本管理器中", size: "small"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            vue.createElementVNode("p", { class: "byok-help byok-buy" }, [
              vue.createTextVNode("还没有 API Key？到 "),
              vue.createElementVNode("a", {
                class: "byok-link",
                href: "https://platform.deepseek.com",
                target: "_blank",
                rel: "noopener noreferrer"
              }, "platform.deepseek.com"),
              vue.createTextVNode(" 注册并充值，再把 Key 填到上面。")
            ]),
            vue.createElementVNode("div", { class: "byok-field" }, [
              vue.createElementVNode("label", { for: "byok-reasoning", class: "byok-label" }, "思考强度"),
              vue.createElementVNode("select", {
                id: "byok-reasoning", class: "byok-native-select", value: _ctx.globalConfig.llm.reasoningEffort,
                onChange: ($event) => _ctx.globalConfig.llm.reasoningEffort = $event.target.value
              }, [
                vue.createElementVNode("option", { value: "default" }, "模型默认"),
                vue.createElementVNode("option", { value: "none" }, "关闭"),
                vue.createElementVNode("option", { value: "low" }, "低（low）"),
                vue.createElementVNode("option", { value: "medium" }, "中（medium）"),
                vue.createElementVNode("option", { value: "high" }, "高（high）"),
                vue.createElementVNode("option", { value: "max" }, "最大（max）"),
                vue.createElementVNode("option", { value: "custom" }, "自定义填写…")
              ], 8, ["value"]),
              _ctx.globalConfig.llm.reasoningEffort === "custom" ? (vue.openBlock(), vue.createBlock(_component_hc_input, {
                key: 0, id: "byok-reasoning-custom", class: "byok-custom-input",
                modelValue: _ctx.globalConfig.llm.reasoningEffortCustom,
                "onUpdate:modelValue": ($event) => _ctx.globalConfig.llm.reasoningEffortCustom = $event,
                placeholder: "输入端点支持的值，如 xhigh", size: "small"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : vue.createCommentVNode("", true),
              vue.createElementVNode("p", { class: "byok-help" }, "自定义值会作为 reasoning_effort 发送；请按端点文档填写。")
            ]),
            vue.createElementVNode("p", { class: "byok-help byok-privacy" }, "图片题会将题目图片发给所选模型，模型需支持视觉输入。")
          ]),
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.globalConfig.platformParams[_ctx.globalConfig.platformName].parts, (part) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: part.name
            }, [
              vue.createVNode(_component_hc_divider, { "border-style": "dashed" }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("span", _hoisted_2$4, vue.toDisplayString(part.name), 1)
                ]),
                _: 2
              }, 1024),
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(part.params, (param) => {
                return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                  key: param.name
                }, [
                  param.type === "boolean" ? (vue.openBlock(), vue.createBlock(_component_hc_form_item, {
                    key: 0,
                    label: param.name
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_hc_checkbox, {
                        modelValue: param.value,
                        "onUpdate:modelValue": ($event) => param.value = $event,
                        size: "small"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1032, ["label"])) : param.type === "select" ? (vue.openBlock(), vue.createBlock(_component_hc_form_item, {
                    key: 1,
                    label: param.name,
                    required: ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createElementVNode("select", {
                        class: "hc-select",
                        value: param.value,
                        onChange: ($event) => param.value = Number($event.target.value)
                      }, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(param.options, (rateOption) => {
                          return vue.openBlock(), vue.createElementBlock("option", {
                            key: rateOption.value,
                            value: rateOption.value
                          }, vue.toDisplayString(rateOption.label), 9, ["value"]);
                        }), 128))
                      ], 8, ["value"])
                    ]),
                    _: 2
                  }, 1032, ["label"])) : (vue.openBlock(), vue.createBlock(_component_hc_form_item, {
                    key: 2,
                    label: param.name,
                    required: ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_hc_input_number, {
                        modelValue: param.value,
                        "onUpdate:modelValue": ($event) => param.value = $event,
                        min: param.min ?? 3e3,
                        max: param.max,
                        step: param.step ?? 1e3,
                        "controls-position": "right",
                        size: "small"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "max", "step"])
                    ]),
                    _: 2
                  }, 1032, ["label"]))
                ], 64);
              }), 128))
            ]);
          }), 128)),
          vue.createElementVNode("div", null, [
            vue.createVNode(_component_hc_divider, { "border-style": "dashed" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("span", _hoisted_3$2, vue.toDisplayString(_ctx.globalConfig.otherParams.name), 1)
              ]),
              _: 1
            }),
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.globalConfig.otherParams.params, (item) => {
              return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                key: item.name
              }, [
                item.type === "boolean" ? (vue.openBlock(), vue.createBlock(_component_hc_form_item, {
                  key: 0,
                  class: "setting-number",
                  label: item.name
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_hc_checkbox, {
                      modelValue: item.value,
                      "onUpdate:modelValue": ($event) => item.value = $event,
                      size: "small"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["label"])) : (vue.openBlock(), vue.createBlock(_component_hc_form_item, {
                  key: 1,
                  class: "setting-number",
                  label: item.name,
                  required: "",
                  size: "small"
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_hc_input_number, {
                      modelValue: item.value,
                      "onUpdate:modelValue": ($event) => item.value = $event,
                      min: item.min ?? 3,
                      max: item.max ?? 100,
                      step: item.step ?? 1,
                      size: "small"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "min", "max", "step"])
                  ]),
                  _: 2
                }, 1032, ["label"]))
              ], 64);
            }), 128))
          ])
        ]);
      };
    }
  });
  const _hoisted_1$3 = { class: "question_table" };
  const _hoisted_2$3 = /* @__PURE__ */ vue.createStaticVNode('<div class="answer-legend" aria-label="答案状态说明"><span class="answer-result--success">有答案</span><span class="answer-result--searching">查询中</span><span class="answer-result--pending">等待中</span><span class="answer-result--error">未找到 / 失败</span></div>', 1);
  const _hoisted_3$1 = ["innerHTML"];
  const _hoisted_4$2 = { key: 0 };
  const _hoisted_5 = { key: 1 };
  const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
    __name: "QuestionTable",
    props: {
      questionList: {}
    },
    setup(__props) {
      const getDisplayTitle = (question) => {
        var _a;
        return ((_a = question.searchText) == null ? void 0 : _a.stem) || question.title;
      };
      const getAnswerStatus = (question) => question.answerStatus ?? (question.answer.length ? "success" : "pending");
      return (_ctx, _cache) => {
        const _component_hc_empty = vue.resolveComponent("hc-empty");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.withDirectives(vue.createElementVNode("div", _hoisted_1$3, [
            _hoisted_2$3,
            vue.createElementVNode("div", { class: "hc-table-wrap" }, [
              vue.createElementVNode("table", { class: "hc-table" }, [
                vue.createElementVNode("colgroup", null, [
                  vue.createElementVNode("col", { class: "col-idx" }),
                  vue.createElementVNode("col", { style: "width:370px" }),
                  vue.createElementVNode("col", { style: "width:215px" })
                ]),
                vue.createElementVNode("thead", null, [
                  vue.createElementVNode("tr", null, [
                    vue.createElementVNode("th", null, ""),
                    vue.createElementVNode("th", null, "题目"),
                    vue.createElementVNode("th", null, "答案")
                  ])
                ]),
                vue.createElementVNode("tbody", null, [
                  (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.questionList, (row, index) => {
                    return vue.openBlock(), vue.createElementBlock("tr", { key: index }, [
                      vue.createElementVNode("td", { class: "col-idx" }, vue.toDisplayString(index + 1), 1),
                      vue.createElementVNode("td", { innerHTML: getDisplayTitle(row) }, null, 8, _hoisted_3$1),
                      vue.createElementVNode("td", null, [
                        vue.createElementVNode("div", {
                          class: vue.normalizeClass(["answer-result", "answer-result--" + getAnswerStatus(row)])
                        }, [
                          getAnswerStatus(row) === "pending" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4$2, "等待查询…")) : getAnswerStatus(row) === "searching" ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, "正在查询答案…")) : (vue.openBlock(), vue.createElementBlock("div", {
                            key: 2,
                            textContent: row.answer.join("、")
                          }, null, 8, ["textContent"]))
                        ], 2)
                      ])
                    ]);
                  }), 128))
                ])
              ])
            ])
          ], 512), [
            [vue.vShow, _ctx.questionList.length]
          ]),
          vue.withDirectives(vue.createElementVNode("div", null, [
            vue.createVNode(_component_hc_empty, { description: "该页面无需答题" })
          ], 512), [
            [vue.vShow, !_ctx.questionList.length]
          ])
        ], 64);
      };
    }
  });
  class IframeUtils {
    static getIframes(element) {
      return Array.from(element.querySelectorAll("iframe"));
    }
    // Returns a flat, depth-first array: each iframe followed by its nested iframes.
    static getAllNestedIframes(element) {
      const result = [];
      const walk = (root) => {
        for (const iframe of IframeUtils.getIframes(root)) {
          result.push(iframe);
          let doc = null;
          try {
            doc = iframe.contentDocument;
          } catch (_) {
            doc = null;
          }
          if (doc && doc.documentElement)
            walk(doc.documentElement);
        }
      };
      walk(element);
      return result;
    }
  }
  var Typr$1 = {};
  var Typr = {};
  Typr.parse = function(buff) {
    var bin = Typr._bin;
    var data = new Uint8Array(buff);
    var tag = bin.readASCII(data, 0, 4);
    if (tag == "ttcf") {
      var offset = 4;
      bin.readUshort(data, offset);
      offset += 2;
      bin.readUshort(data, offset);
      offset += 2;
      var numF = bin.readUint(data, offset);
      offset += 4;
      var fnts = [];
      for (var i = 0; i < numF; i++) {
        var foff = bin.readUint(data, offset);
        offset += 4;
        fnts.push(Typr._readFont(data, foff));
      }
      return fnts;
    } else
      return [Typr._readFont(data, 0)];
  };
  Typr._readFont = function(data, offset) {
    var bin = Typr._bin;
    var ooff = offset;
    bin.readFixed(data, offset);
    offset += 4;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var tags = [
      "cmap",
      "head",
      "hhea",
      "maxp",
      "hmtx",
      "name",
      "OS/2",
      "post",
      //"cvt",
      //"fpgm",
      "loca",
      "glyf",
      "kern",
      //"prep"
      //"gasp"
      "CFF ",
      "GPOS",
      "GSUB",
      "SVG "
      //"VORG",
    ];
    var obj = { _data: data, _offset: ooff };
    var tabs = {};
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      var length = bin.readUint(data, offset);
      offset += 4;
      tabs[tag] = { offset: toffset, length };
    }
    for (var i = 0; i < tags.length; i++) {
      var t = tags[i];
      if (tabs[t])
        obj[t.trim()] = Typr[t.trim()].parse(data, tabs[t].offset, tabs[t].length, obj);
    }
    return obj;
  };
  Typr._tabOffset = function(data, tab, foff) {
    var bin = Typr._bin;
    var numTables = bin.readUshort(data, foff + 4);
    var offset = foff + 12;
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      if (tag == tab)
        return toffset;
    }
    return 0;
  };
  Typr._bin = {
    readFixed: function(data, o) {
      return (data[o] << 8 | data[o + 1]) + (data[o + 2] << 8 | data[o + 3]) / (256 * 256 + 4);
    },
    readF2dot14: function(data, o) {
      var num = Typr._bin.readShort(data, o);
      return num / 16384;
    },
    readInt: function(buff, p) {
      return Typr._bin._view(buff).getInt32(p);
    },
    readInt8: function(buff, p) {
      return Typr._bin._view(buff).getInt8(p);
    },
    readShort: function(buff, p) {
      return Typr._bin._view(buff).getInt16(p);
    },
    readUshort: function(buff, p) {
      return Typr._bin._view(buff).getUint16(p);
    },
    readUshorts: function(buff, p, len) {
      var arr = [];
      for (var i = 0; i < len; i++)
        arr.push(Typr._bin.readUshort(buff, p + i * 2));
      return arr;
    },
    readUint: function(buff, p) {
      return Typr._bin._view(buff).getUint32(p);
    },
    readUint64: function(buff, p) {
      return Typr._bin.readUint(buff, p) * (4294967295 + 1) + Typr._bin.readUint(buff, p + 4);
    },
    readASCII: function(buff, p, l) {
      var s = "";
      for (var i = 0; i < l; i++)
        s += String.fromCharCode(buff[p + i]);
      return s;
    },
    readUnicode: function(buff, p, l) {
      var s = "";
      for (var i = 0; i < l; i++) {
        var c = buff[p++] << 8 | buff[p++];
        s += String.fromCharCode(c);
      }
      return s;
    },
    _tdec: typeof window !== "undefined" && window["TextDecoder"] ? new window["TextDecoder"]() : null,
    readUTF8: function(buff, p, l) {
      var tdec = Typr._bin._tdec;
      if (tdec && p == 0 && l == buff.length)
        return tdec["decode"](buff);
      return Typr._bin.readASCII(buff, p, l);
    },
    readBytes: function(buff, p, l) {
      var arr = [];
      for (var i = 0; i < l; i++)
        arr.push(buff[p + i]);
      return arr;
    },
    readASCIIArray: function(buff, p, l) {
      var s = [];
      for (var i = 0; i < l; i++)
        s.push(String.fromCharCode(buff[p + i]));
      return s;
    },
    _view: function(buff) {
      return buff._dataView || (buff._dataView = buff.buffer ? new DataView(buff.buffer, buff.byteOffset, buff.byteLength) : new DataView(new Uint8Array(buff).buffer));
    }
  };
  Typr._lctf = {};
  Typr._lctf.parse = function(data, offset, length, font, subt) {
    var bin = Typr._bin;
    var obj = {};
    var offset0 = offset;
    bin.readFixed(data, offset);
    offset += 4;
    var offScriptList = bin.readUshort(data, offset);
    offset += 2;
    var offFeatureList = bin.readUshort(data, offset);
    offset += 2;
    var offLookupList = bin.readUshort(data, offset);
    offset += 2;
    obj.scriptList = Typr._lctf.readScriptList(data, offset0 + offScriptList);
    obj.featureList = Typr._lctf.readFeatureList(data, offset0 + offFeatureList);
    obj.lookupList = Typr._lctf.readLookupList(data, offset0 + offLookupList, subt);
    return obj;
  };
  Typr._lctf.readLookupList = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var lut = Typr._lctf.readLookupTable(data, offset0 + noff, subt);
      obj.push(lut);
    }
    return obj;
  };
  Typr._lctf.readLookupTable = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = { tabs: [] };
    obj.ltype = bin.readUshort(data, offset);
    offset += 2;
    obj.flag = bin.readUshort(data, offset);
    offset += 2;
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    var ltype = obj.ltype;
    for (var i = 0; i < cnt; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var tab = subt(data, ltype, offset0 + noff, obj);
      obj.tabs.push(tab);
    }
    return obj;
  };
  Typr._lctf.numOfOnes = function(n) {
    var num = 0;
    for (var i = 0; i < 32; i++)
      if ((n >>> i & 1) != 0)
        num++;
    return num;
  };
  Typr._lctf.readClassDef = function(data, offset) {
    var bin = Typr._bin;
    var obj = [];
    var format = bin.readUshort(data, offset);
    offset += 2;
    if (format == 1) {
      var startGlyph = bin.readUshort(data, offset);
      offset += 2;
      var glyphCount = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < glyphCount; i++) {
        obj.push(startGlyph + i);
        obj.push(startGlyph + i);
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    if (format == 2) {
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < count; i++) {
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    return obj;
  };
  Typr._lctf.getInterval = function(tab, val) {
    for (var i = 0; i < tab.length; i += 3) {
      var start = tab[i], end = tab[i + 1];
      tab[i + 2];
      if (start <= val && val <= end)
        return i;
    }
    return -1;
  };
  Typr._lctf.readCoverage = function(data, offset) {
    var bin = Typr._bin;
    var cvg = {};
    cvg.fmt = bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    if (cvg.fmt == 1)
      cvg.tab = bin.readUshorts(data, offset, count);
    if (cvg.fmt == 2)
      cvg.tab = bin.readUshorts(data, offset, count * 3);
    return cvg;
  };
  Typr._lctf.coverageIndex = function(cvg, val) {
    var tab = cvg.tab;
    if (cvg.fmt == 1)
      return tab.indexOf(val);
    if (cvg.fmt == 2) {
      var ind = Typr._lctf.getInterval(tab, val);
      if (ind != -1)
        return tab[ind + 2] + (val - tab[ind]);
    }
    return -1;
  };
  Typr._lctf.readFeatureList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var feat = Typr._lctf.readFeatureTable(data, offset0 + noff);
      feat.tag = tag.trim();
      obj.push(feat);
    }
    return obj;
  };
  Typr._lctf.readFeatureTable = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var feat = {};
    var featureParams = bin.readUshort(data, offset);
    offset += 2;
    if (featureParams > 0) {
      feat.featureParams = offset0 + featureParams;
    }
    var lookupCount = bin.readUshort(data, offset);
    offset += 2;
    feat.tab = [];
    for (var i = 0; i < lookupCount; i++)
      feat.tab.push(bin.readUshort(data, offset + 2 * i));
    return feat;
  };
  Typr._lctf.readScriptList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readScriptTable(data, offset0 + noff);
    }
    return obj;
  };
  Typr._lctf.readScriptTable = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var defLangSysOff = bin.readUshort(data, offset);
    offset += 2;
    if (defLangSysOff > 0) {
      obj["default"] = Typr._lctf.readLangSysTable(data, offset0 + defLangSysOff);
    }
    var langSysCount = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < langSysCount; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var langSysOff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readLangSysTable(data, offset0 + langSysOff);
    }
    return obj;
  };
  Typr._lctf.readLangSysTable = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    obj.reqFeature = bin.readUshort(data, offset);
    offset += 2;
    var featureCount = bin.readUshort(data, offset);
    offset += 2;
    obj.features = bin.readUshorts(data, offset, featureCount);
    return obj;
  };
  Typr.CFF = {};
  Typr.CFF.parse = function(data, offset, length) {
    var bin = Typr._bin;
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    var ninds = [];
    offset = Typr.CFF.readIndex(data, offset, ninds);
    var names = [];
    for (var i = 0; i < ninds.length - 1; i++)
      names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
    offset += ninds[ninds.length - 1];
    var tdinds = [];
    offset = Typr.CFF.readIndex(data, offset, tdinds);
    var topDicts = [];
    for (var i = 0; i < tdinds.length - 1; i++)
      topDicts.push(Typr.CFF.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
    offset += tdinds[tdinds.length - 1];
    var topdict = topDicts[0];
    var sinds = [];
    offset = Typr.CFF.readIndex(data, offset, sinds);
    var strings = [];
    for (var i = 0; i < sinds.length - 1; i++)
      strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
    offset += sinds[sinds.length - 1];
    Typr.CFF.readSubrs(data, offset, topdict);
    if (topdict.CharStrings) {
      offset = topdict.CharStrings;
      var sinds = [];
      offset = Typr.CFF.readIndex(data, offset, sinds);
      var cstr = [];
      for (var i = 0; i < sinds.length - 1; i++)
        cstr.push(bin.readBytes(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
      topdict.CharStrings = cstr;
    }
    if (topdict.ROS) {
      offset = topdict.FDArray;
      var fdind = [];
      offset = Typr.CFF.readIndex(data, offset, fdind);
      topdict.FDArray = [];
      for (var i = 0; i < fdind.length - 1; i++) {
        var dict = Typr.CFF.readDict(data, offset + fdind[i], offset + fdind[i + 1]);
        Typr.CFF._readFDict(data, dict, strings);
        topdict.FDArray.push(dict);
      }
      offset += fdind[fdind.length - 1];
      offset = topdict.FDSelect;
      topdict.FDSelect = [];
      var fmt = data[offset];
      offset++;
      if (fmt == 3) {
        var rns = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < rns + 1; i++) {
          topdict.FDSelect.push(bin.readUshort(data, offset), data[offset + 2]);
          offset += 3;
        }
      } else
        throw fmt;
    }
    if (topdict.Encoding)
      topdict.Encoding = Typr.CFF.readEncoding(data, topdict.Encoding, topdict.CharStrings.length);
    if (topdict.charset)
      topdict.charset = Typr.CFF.readCharset(data, topdict.charset, topdict.CharStrings.length);
    Typr.CFF._readFDict(data, topdict, strings);
    return topdict;
  };
  Typr.CFF._readFDict = function(data, dict, ss) {
    var offset;
    if (dict.Private) {
      offset = dict.Private[1];
      dict.Private = Typr.CFF.readDict(data, offset, offset + dict.Private[0]);
      if (dict.Private.Subrs)
        Typr.CFF.readSubrs(data, offset + dict.Private.Subrs, dict.Private);
    }
    for (var p in dict)
      if (["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(p) != -1)
        dict[p] = ss[dict[p] - 426 + 35];
  };
  Typr.CFF.readSubrs = function(data, offset, obj) {
    var bin = Typr._bin;
    var gsubinds = [];
    offset = Typr.CFF.readIndex(data, offset, gsubinds);
    var bias, nSubrs = gsubinds.length;
    if (nSubrs < 1240)
      bias = 107;
    else if (nSubrs < 33900)
      bias = 1131;
    else
      bias = 32768;
    obj.Bias = bias;
    obj.Subrs = [];
    for (var i = 0; i < gsubinds.length - 1; i++)
      obj.Subrs.push(bin.readBytes(data, offset + gsubinds[i], gsubinds[i + 1] - gsubinds[i]));
  };
  Typr.CFF.tableSE = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    0,
    111,
    112,
    113,
    114,
    0,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    0,
    123,
    0,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    0,
    132,
    133,
    0,
    134,
    135,
    136,
    137,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    138,
    0,
    139,
    0,
    0,
    0,
    0,
    140,
    141,
    142,
    143,
    0,
    0,
    0,
    0,
    0,
    144,
    0,
    0,
    0,
    145,
    0,
    0,
    146,
    147,
    148,
    149,
    0,
    0,
    0,
    0
  ];
  Typr.CFF.glyphByUnicode = function(cff, code) {
    for (var i = 0; i < cff.charset.length; i++)
      if (cff.charset[i] == code)
        return i;
    return -1;
  };
  Typr.CFF.glyphBySE = function(cff, charcode) {
    if (charcode < 0 || charcode > 255)
      return -1;
    return Typr.CFF.glyphByUnicode(cff, Typr.CFF.tableSE[charcode]);
  };
  Typr.CFF.readEncoding = function(data, offset, num) {
    Typr._bin;
    var array = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      var nCodes = data[offset];
      offset++;
      for (var i = 0; i < nCodes; i++)
        array.push(data[offset + i]);
    } else
      throw "error: unknown encoding format: " + format;
    return array;
  };
  Typr.CFF.readCharset = function(data, offset, num) {
    var bin = Typr._bin;
    var charset = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      for (var i = 0; i < num; i++) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        charset.push(first);
      }
    } else if (format == 1 || format == 2) {
      while (charset.length < num) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        var nLeft = 0;
        if (format == 1) {
          nLeft = data[offset];
          offset++;
        } else {
          nLeft = bin.readUshort(data, offset);
          offset += 2;
        }
        for (var i = 0; i <= nLeft; i++) {
          charset.push(first);
          first++;
        }
      }
    } else
      throw "error: format: " + format;
    return charset;
  };
  Typr.CFF.readIndex = function(data, offset, inds) {
    var bin = Typr._bin;
    var count = bin.readUshort(data, offset) + 1;
    offset += 2;
    var offsize = data[offset];
    offset++;
    if (offsize == 1)
      for (var i = 0; i < count; i++)
        inds.push(data[offset + i]);
    else if (offsize == 2)
      for (var i = 0; i < count; i++)
        inds.push(bin.readUshort(data, offset + i * 2));
    else if (offsize == 3)
      for (var i = 0; i < count; i++)
        inds.push(bin.readUint(data, offset + i * 3 - 1) & 16777215);
    else if (count != 1)
      throw "unsupported offset size: " + offsize + ", count: " + count;
    offset += count * offsize;
    return offset - 1;
  };
  Typr.CFF.getCharString = function(data, offset, o) {
    var bin = Typr._bin;
    var b0 = data[offset], b1 = data[offset + 1];
    data[offset + 2];
    data[offset + 3];
    data[offset + 4];
    var vs = 1;
    var op = null, val = null;
    if (b0 <= 20) {
      op = b0;
      vs = 1;
    }
    if (b0 == 12) {
      op = b0 * 100 + b1;
      vs = 2;
    }
    if (21 <= b0 && b0 <= 27) {
      op = b0;
      vs = 1;
    }
    if (b0 == 28) {
      val = bin.readShort(data, offset + 1);
      vs = 3;
    }
    if (29 <= b0 && b0 <= 31) {
      op = b0;
      vs = 1;
    }
    if (32 <= b0 && b0 <= 246) {
      val = b0 - 139;
      vs = 1;
    }
    if (247 <= b0 && b0 <= 250) {
      val = (b0 - 247) * 256 + b1 + 108;
      vs = 2;
    }
    if (251 <= b0 && b0 <= 254) {
      val = -(b0 - 251) * 256 - b1 - 108;
      vs = 2;
    }
    if (b0 == 255) {
      val = bin.readInt(data, offset + 1) / 65535;
      vs = 5;
    }
    o.val = val != null ? val : "o" + op;
    o.size = vs;
  };
  Typr.CFF.readCharString = function(data, offset, length) {
    var end = offset + length;
    var bin = Typr._bin;
    var arr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var op = null, val = null;
      if (b0 <= 20) {
        op = b0;
        vs = 1;
      }
      if (b0 == 12) {
        op = b0 * 100 + b1;
        vs = 2;
      }
      if (b0 == 19 || b0 == 20) {
        op = b0;
        vs = 2;
      }
      if (21 <= b0 && b0 <= 27) {
        op = b0;
        vs = 1;
      }
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (29 <= b0 && b0 <= 31) {
        op = b0;
        vs = 1;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
      }
      arr.push(val != null ? val : "o" + op);
      offset += vs;
    }
    return arr;
  };
  Typr.CFF.readDict = function(data, offset, end) {
    var bin = Typr._bin;
    var dict = {};
    var carr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var key = null, val = null;
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (b0 == 29) {
        val = bin.readInt(data, offset + 1);
        vs = 5;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
        throw "unknown number";
      }
      if (b0 == 30) {
        var nibs = [];
        vs = 1;
        while (true) {
          var b = data[offset + vs];
          vs++;
          var nib0 = b >> 4, nib1 = b & 15;
          if (nib0 != 15)
            nibs.push(nib0);
          if (nib1 != 15)
            nibs.push(nib1);
          if (nib1 == 15)
            break;
        }
        var s = "";
        var chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"];
        for (var i = 0; i < nibs.length; i++)
          s += chars[nibs[i]];
        val = parseFloat(s);
      }
      if (b0 <= 21) {
        var keys = [
          "version",
          "Notice",
          "FullName",
          "FamilyName",
          "Weight",
          "FontBBox",
          "BlueValues",
          "OtherBlues",
          "FamilyBlues",
          "FamilyOtherBlues",
          "StdHW",
          "StdVW",
          "escape",
          "UniqueID",
          "XUID",
          "charset",
          "Encoding",
          "CharStrings",
          "Private",
          "Subrs",
          "defaultWidthX",
          "nominalWidthX"
        ];
        key = keys[b0];
        vs = 1;
        if (b0 == 12) {
          var keys = [
            "Copyright",
            "isFixedPitch",
            "ItalicAngle",
            "UnderlinePosition",
            "UnderlineThickness",
            "PaintType",
            "CharstringType",
            "FontMatrix",
            "StrokeWidth",
            "BlueScale",
            "BlueShift",
            "BlueFuzz",
            "StemSnapH",
            "StemSnapV",
            "ForceBold",
            0,
            0,
            "LanguageGroup",
            "ExpansionFactor",
            "initialRandomSeed",
            "SyntheticBase",
            "PostScript",
            "BaseFontName",
            "BaseFontBlend",
            0,
            0,
            0,
            0,
            0,
            0,
            "ROS",
            "CIDFontVersion",
            "CIDFontRevision",
            "CIDFontType",
            "CIDCount",
            "UIDBase",
            "FDArray",
            "FDSelect",
            "FontName"
          ];
          key = keys[b1];
          vs = 2;
        }
      }
      if (key != null) {
        dict[key] = carr.length == 1 ? carr[0] : carr;
        carr = [];
      } else
        carr.push(val);
      offset += vs;
    }
    return dict;
  };
  Typr.cmap = {};
  Typr.cmap.parse = function(data, offset, length) {
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    var offs = [];
    obj.tables = [];
    for (var i = 0; i < numTables; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUint(data, offset);
      offset += 4;
      var id = "p" + platformID + "e" + encodingID;
      var tind = offs.indexOf(noffset);
      if (tind == -1) {
        tind = obj.tables.length;
        var subt;
        offs.push(noffset);
        var format = bin.readUshort(data, noffset);
        if (format == 0)
          subt = Typr.cmap.parse0(data, noffset);
        else if (format == 4)
          subt = Typr.cmap.parse4(data, noffset);
        else if (format == 6)
          subt = Typr.cmap.parse6(data, noffset);
        else if (format == 12)
          subt = Typr.cmap.parse12(data, noffset);
        else
          console.warn("unknown format: " + format, platformID, encodingID, noffset);
        obj.tables.push(subt);
      }
      if (obj[id] != null)
        throw "multiple tables for one platform+encoding";
      obj[id] = tind;
    }
    return obj;
  };
  Typr.cmap.parse0 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var len = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.map = [];
    for (var i = 0; i < len - 6; i++)
      obj.map.push(data[offset + i]);
    return obj;
  };
  Typr.cmap.parse4 = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var length = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var segCountX2 = bin.readUshort(data, offset);
    offset += 2;
    var segCount = segCountX2 / 2;
    obj.searchRange = bin.readUshort(data, offset);
    offset += 2;
    obj.entrySelector = bin.readUshort(data, offset);
    offset += 2;
    obj.rangeShift = bin.readUshort(data, offset);
    offset += 2;
    obj.endCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    offset += 2;
    obj.startCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.idDelta = [];
    for (var i = 0; i < segCount; i++) {
      obj.idDelta.push(bin.readShort(data, offset));
      offset += 2;
    }
    obj.idRangeOffset = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.glyphIdArray = [];
    while (offset < offset0 + length) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse6 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.firstCode = bin.readUshort(data, offset);
    offset += 2;
    var entryCount = bin.readUshort(data, offset);
    offset += 2;
    obj.glyphIdArray = [];
    for (var i = 0; i < entryCount; i++) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse12 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    offset += 2;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    var nGroups = bin.readUint(data, offset);
    offset += 4;
    obj.groups = [];
    for (var i = 0; i < nGroups; i++) {
      var off = offset + i * 12;
      var startCharCode = bin.readUint(data, off + 0);
      var endCharCode = bin.readUint(data, off + 4);
      var startGlyphID = bin.readUint(data, off + 8);
      obj.groups.push([startCharCode, endCharCode, startGlyphID]);
    }
    return obj;
  };
  Typr.glyf = {};
  Typr.glyf.parse = function(data, offset, length, font) {
    var obj = [];
    for (var g = 0; g < font.maxp.numGlyphs; g++)
      obj.push(null);
    return obj;
  };
  Typr.glyf._parseGlyf = function(font, g) {
    var bin = Typr._bin;
    var data = font._data;
    var offset = Typr._tabOffset(data, "glyf", font._offset) + font.loca[g];
    if (font.loca[g] == font.loca[g + 1])
      return null;
    var gl = {};
    gl.noc = bin.readShort(data, offset);
    offset += 2;
    gl.xMin = bin.readShort(data, offset);
    offset += 2;
    gl.yMin = bin.readShort(data, offset);
    offset += 2;
    gl.xMax = bin.readShort(data, offset);
    offset += 2;
    gl.yMax = bin.readShort(data, offset);
    offset += 2;
    if (gl.xMin >= gl.xMax || gl.yMin >= gl.yMax)
      return null;
    if (gl.noc > 0) {
      gl.endPts = [];
      for (var i = 0; i < gl.noc; i++) {
        gl.endPts.push(bin.readUshort(data, offset));
        offset += 2;
      }
      var instructionLength = bin.readUshort(data, offset);
      offset += 2;
      if (data.length - offset < instructionLength)
        return null;
      gl.instructions = bin.readBytes(data, offset, instructionLength);
      offset += instructionLength;
      var crdnum = gl.endPts[gl.noc - 1] + 1;
      gl.flags = [];
      for (var i = 0; i < crdnum; i++) {
        var flag = data[offset];
        offset++;
        gl.flags.push(flag);
        if ((flag & 8) != 0) {
          var rep = data[offset];
          offset++;
          for (var j = 0; j < rep; j++) {
            gl.flags.push(flag);
            i++;
          }
        }
      }
      gl.xs = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 2) != 0, same = (gl.flags[i] & 16) != 0;
        if (i8) {
          gl.xs.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.xs.push(0);
          else {
            gl.xs.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      gl.ys = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 4) != 0, same = (gl.flags[i] & 32) != 0;
        if (i8) {
          gl.ys.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.ys.push(0);
          else {
            gl.ys.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      var x = 0, y = 0;
      for (var i = 0; i < crdnum; i++) {
        x += gl.xs[i];
        y += gl.ys[i];
        gl.xs[i] = x;
        gl.ys[i] = y;
      }
    } else {
      var ARG_1_AND_2_ARE_WORDS = 1 << 0;
      var ARGS_ARE_XY_VALUES = 1 << 1;
      var WE_HAVE_A_SCALE = 1 << 3;
      var MORE_COMPONENTS = 1 << 5;
      var WE_HAVE_AN_X_AND_Y_SCALE = 1 << 6;
      var WE_HAVE_A_TWO_BY_TWO = 1 << 7;
      var WE_HAVE_INSTRUCTIONS = 1 << 8;
      gl.parts = [];
      var flags;
      do {
        flags = bin.readUshort(data, offset);
        offset += 2;
        var part = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
        gl.parts.push(part);
        part.glyphIndex = bin.readUshort(data, offset);
        offset += 2;
        if (flags & ARG_1_AND_2_ARE_WORDS) {
          var arg1 = bin.readShort(data, offset);
          offset += 2;
          var arg2 = bin.readShort(data, offset);
          offset += 2;
        } else {
          var arg1 = bin.readInt8(data, offset);
          offset++;
          var arg2 = bin.readInt8(data, offset);
          offset++;
        }
        if (flags & ARGS_ARE_XY_VALUES) {
          part.m.tx = arg1;
          part.m.ty = arg2;
        } else {
          part.p1 = arg1;
          part.p2 = arg2;
        }
        if (flags & WE_HAVE_A_SCALE) {
          part.m.a = part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_A_TWO_BY_TWO) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.b = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.c = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        }
      } while (flags & MORE_COMPONENTS);
      if (flags & WE_HAVE_INSTRUCTIONS) {
        var numInstr = bin.readUshort(data, offset);
        offset += 2;
        gl.instr = [];
        for (var i = 0; i < numInstr; i++) {
          gl.instr.push(data[offset]);
          offset++;
        }
      }
    }
    return gl;
  };
  Typr.GPOS = {};
  Typr.GPOS.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GPOS.subt);
  };
  Typr.GPOS.subt = function(data, ltype, offset, ltable) {
    var bin = Typr._bin, offset0 = offset, tab = {};
    tab.fmt = bin.readUshort(data, offset);
    offset += 2;
    if (ltype == 1 || ltype == 2 || ltype == 3 || ltype == 7 || ltype == 8 && tab.fmt <= 2) {
      var covOff = bin.readUshort(data, offset);
      offset += 2;
      tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0);
    }
    if (ltype == 1 && tab.fmt == 1) {
      var valFmt1 = bin.readUshort(data, offset);
      offset += 2;
      var ones1 = Typr._lctf.numOfOnes(valFmt1);
      if (valFmt1 != 0)
        tab.pos = Typr.GPOS.readValueRecord(data, offset, valFmt1);
    } else if (ltype == 2 && tab.fmt >= 1 && tab.fmt <= 2) {
      var valFmt1 = bin.readUshort(data, offset);
      offset += 2;
      var valFmt2 = bin.readUshort(data, offset);
      offset += 2;
      var ones1 = Typr._lctf.numOfOnes(valFmt1);
      var ones2 = Typr._lctf.numOfOnes(valFmt2);
      if (tab.fmt == 1) {
        tab.pairsets = [];
        var psc = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < psc; i++) {
          var psoff = offset0 + bin.readUshort(data, offset);
          offset += 2;
          var pvc = bin.readUshort(data, psoff);
          psoff += 2;
          var arr = [];
          for (var j = 0; j < pvc; j++) {
            var gid2 = bin.readUshort(data, psoff);
            psoff += 2;
            var value1, value2;
            if (valFmt1 != 0) {
              value1 = Typr.GPOS.readValueRecord(data, psoff, valFmt1);
              psoff += ones1 * 2;
            }
            if (valFmt2 != 0) {
              value2 = Typr.GPOS.readValueRecord(data, psoff, valFmt2);
              psoff += ones2 * 2;
            }
            arr.push({ gid2, val1: value1, val2: value2 });
          }
          tab.pairsets.push(arr);
        }
      }
      if (tab.fmt == 2) {
        var classDef1 = bin.readUshort(data, offset);
        offset += 2;
        var classDef2 = bin.readUshort(data, offset);
        offset += 2;
        var class1Count = bin.readUshort(data, offset);
        offset += 2;
        var class2Count = bin.readUshort(data, offset);
        offset += 2;
        tab.classDef1 = Typr._lctf.readClassDef(data, offset0 + classDef1);
        tab.classDef2 = Typr._lctf.readClassDef(data, offset0 + classDef2);
        tab.matrix = [];
        for (var i = 0; i < class1Count; i++) {
          var row = [];
          for (var j = 0; j < class2Count; j++) {
            var value1 = null, value2 = null;
            if (valFmt1 != 0) {
              value1 = Typr.GPOS.readValueRecord(data, offset, valFmt1);
              offset += ones1 * 2;
            }
            if (valFmt2 != 0) {
              value2 = Typr.GPOS.readValueRecord(data, offset, valFmt2);
              offset += ones2 * 2;
            }
            row.push({ val1: value1, val2: value2 });
          }
          tab.matrix.push(row);
        }
      }
    } else if (ltype == 9 && tab.fmt == 1) {
      var extType = bin.readUshort(data, offset);
      offset += 2;
      var extOffset = bin.readUint(data, offset);
      offset += 4;
      if (ltable.ltype == 9) {
        ltable.ltype = extType;
      } else if (ltable.ltype != extType) {
        throw "invalid extension substitution";
      }
      return Typr.GPOS.subt(data, ltable.ltype, offset0 + extOffset);
    } else
      console.warn("unsupported GPOS table LookupType", ltype, "format", tab.fmt);
    return tab;
  };
  Typr.GPOS.readValueRecord = function(data, offset, valFmt) {
    var bin = Typr._bin;
    var arr = [];
    arr.push(valFmt & 1 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 1 ? 2 : 0;
    arr.push(valFmt & 2 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 2 ? 2 : 0;
    arr.push(valFmt & 4 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 4 ? 2 : 0;
    arr.push(valFmt & 8 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 8 ? 2 : 0;
    return arr;
  };
  Typr.GSUB = {};
  Typr.GSUB.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GSUB.subt);
  };
  Typr.GSUB.subt = function(data, ltype, offset, ltable) {
    var bin = Typr._bin, offset0 = offset, tab = {};
    tab.fmt = bin.readUshort(data, offset);
    offset += 2;
    if (ltype != 1 && ltype != 4 && ltype != 5 && ltype != 6)
      return null;
    if (ltype == 1 || ltype == 4 || ltype == 5 && tab.fmt <= 2 || ltype == 6 && tab.fmt <= 2) {
      var covOff = bin.readUshort(data, offset);
      offset += 2;
      tab.coverage = Typr._lctf.readCoverage(data, offset0 + covOff);
    }
    if (ltype == 1 && tab.fmt >= 1 && tab.fmt <= 2) {
      if (tab.fmt == 1) {
        tab.delta = bin.readShort(data, offset);
        offset += 2;
      } else if (tab.fmt == 2) {
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        tab.newg = bin.readUshorts(data, offset, cnt);
        offset += tab.newg.length * 2;
      }
    } else if (ltype == 4) {
      tab.vals = [];
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < cnt; i++) {
        var loff = bin.readUshort(data, offset);
        offset += 2;
        tab.vals.push(Typr.GSUB.readLigatureSet(data, offset0 + loff));
      }
    } else if (ltype == 5 && tab.fmt == 2) {
      if (tab.fmt == 2) {
        var cDefOffset = bin.readUshort(data, offset);
        offset += 2;
        tab.cDef = Typr._lctf.readClassDef(data, offset0 + cDefOffset);
        tab.scset = [];
        var subClassSetCount = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < subClassSetCount; i++) {
          var scsOff = bin.readUshort(data, offset);
          offset += 2;
          tab.scset.push(scsOff == 0 ? null : Typr.GSUB.readSubClassSet(data, offset0 + scsOff));
        }
      }
    } else if (ltype == 6 && tab.fmt == 3) {
      if (tab.fmt == 3) {
        for (var i = 0; i < 3; i++) {
          var cnt = bin.readUshort(data, offset);
          offset += 2;
          var cvgs = [];
          for (var j = 0; j < cnt; j++)
            cvgs.push(Typr._lctf.readCoverage(data, offset0 + bin.readUshort(data, offset + j * 2)));
          offset += cnt * 2;
          if (i == 0)
            tab.backCvg = cvgs;
          if (i == 1)
            tab.inptCvg = cvgs;
          if (i == 2)
            tab.ahedCvg = cvgs;
        }
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        tab.lookupRec = Typr.GSUB.readSubstLookupRecords(data, offset, cnt);
      }
    } else if (ltype == 7 && tab.fmt == 1) {
      var extType = bin.readUshort(data, offset);
      offset += 2;
      var extOffset = bin.readUint(data, offset);
      offset += 4;
      if (ltable.ltype == 9) {
        ltable.ltype = extType;
      } else if (ltable.ltype != extType) {
        throw "invalid extension substitution";
      }
      return Typr.GSUB.subt(data, ltable.ltype, offset0 + extOffset);
    } else
      console.warn("unsupported GSUB table LookupType", ltype, "format", tab.fmt);
    return tab;
  };
  Typr.GSUB.readSubClassSet = function(data, offset) {
    var rUs = Typr._bin.readUshort, offset0 = offset, lset = [];
    var cnt = rUs(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = rUs(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readSubClassRule = function(data, offset) {
    var rUs = Typr._bin.readUshort, rule = {};
    var gcount = rUs(data, offset);
    offset += 2;
    var scount = rUs(data, offset);
    offset += 2;
    rule.input = [];
    for (var i = 0; i < gcount - 1; i++) {
      rule.input.push(rUs(data, offset));
      offset += 2;
    }
    rule.substLookupRecords = Typr.GSUB.readSubstLookupRecords(data, offset, scount);
    return rule;
  };
  Typr.GSUB.readSubstLookupRecords = function(data, offset, cnt) {
    var rUs = Typr._bin.readUshort;
    var out = [];
    for (var i = 0; i < cnt; i++) {
      out.push(rUs(data, offset), rUs(data, offset + 2));
      offset += 4;
    }
    return out;
  };
  Typr.GSUB.readChainSubClassSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readChainSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readChainSubClassRule = function(data, offset) {
    var bin = Typr._bin, rule = {};
    var pps = ["backtrack", "input", "lookahead"];
    for (var pi = 0; pi < pps.length; pi++) {
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      if (pi == 1)
        cnt--;
      rule[pps[pi]] = bin.readUshorts(data, offset, cnt);
      offset += rule[pps[pi]].length * 2;
    }
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    rule.subst = bin.readUshorts(data, offset, cnt * 2);
    offset += rule.subst.length * 2;
    return rule;
  };
  Typr.GSUB.readLigatureSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var lcnt = bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < lcnt; j++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readLigature(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readLigature = function(data, offset) {
    var bin = Typr._bin, lig = { chain: [] };
    lig.nglyph = bin.readUshort(data, offset);
    offset += 2;
    var ccnt = bin.readUshort(data, offset);
    offset += 2;
    for (var k = 0; k < ccnt - 1; k++) {
      lig.chain.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return lig;
  };
  Typr.head = {};
  Typr.head.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.fontRevision = bin.readFixed(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    obj.flags = bin.readUshort(data, offset);
    offset += 2;
    obj.unitsPerEm = bin.readUshort(data, offset);
    offset += 2;
    obj.created = bin.readUint64(data, offset);
    offset += 8;
    obj.modified = bin.readUint64(data, offset);
    offset += 8;
    obj.xMin = bin.readShort(data, offset);
    offset += 2;
    obj.yMin = bin.readShort(data, offset);
    offset += 2;
    obj.xMax = bin.readShort(data, offset);
    offset += 2;
    obj.yMax = bin.readShort(data, offset);
    offset += 2;
    obj.macStyle = bin.readUshort(data, offset);
    offset += 2;
    obj.lowestRecPPEM = bin.readUshort(data, offset);
    offset += 2;
    obj.fontDirectionHint = bin.readShort(data, offset);
    offset += 2;
    obj.indexToLocFormat = bin.readShort(data, offset);
    offset += 2;
    obj.glyphDataFormat = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hhea = {};
  Typr.hhea.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.ascender = bin.readShort(data, offset);
    offset += 2;
    obj.descender = bin.readShort(data, offset);
    offset += 2;
    obj.lineGap = bin.readShort(data, offset);
    offset += 2;
    obj.advanceWidthMax = bin.readUshort(data, offset);
    offset += 2;
    obj.minLeftSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.minRightSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.xMaxExtent = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRise = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRun = bin.readShort(data, offset);
    offset += 2;
    obj.caretOffset = bin.readShort(data, offset);
    offset += 2;
    offset += 4 * 2;
    obj.metricDataFormat = bin.readShort(data, offset);
    offset += 2;
    obj.numberOfHMetrics = bin.readUshort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hmtx = {};
  Typr.hmtx.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = {};
    obj.aWidth = [];
    obj.lsBearing = [];
    var aw = 0, lsb = 0;
    for (var i = 0; i < font.maxp.numGlyphs; i++) {
      if (i < font.hhea.numberOfHMetrics) {
        aw = bin.readUshort(data, offset);
        offset += 2;
        lsb = bin.readShort(data, offset);
        offset += 2;
      }
      obj.aWidth.push(aw);
      obj.lsBearing.push(lsb);
    }
    return obj;
  };
  Typr.kern = {};
  Typr.kern.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var version = bin.readUshort(data, offset);
    offset += 2;
    if (version == 1)
      return Typr.kern.parseV1(data, offset - 2, length, font);
    var nTables = bin.readUshort(data, offset);
    offset += 2;
    var map2 = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      offset += 2;
      var length = bin.readUshort(data, offset);
      offset += 2;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map2);
      else
        throw "unknown kern table format: " + format;
    }
    return map2;
  };
  Typr.kern.parseV1 = function(data, offset, length, font) {
    var bin = Typr._bin;
    bin.readFixed(data, offset);
    offset += 4;
    var nTables = bin.readUint(data, offset);
    offset += 4;
    var map2 = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      bin.readUint(data, offset);
      offset += 4;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map2);
      else
        throw "unknown kern table format: " + format;
    }
    return map2;
  };
  Typr.kern.readFormat0 = function(data, offset, map2) {
    var bin = Typr._bin;
    var pleft = -1;
    var nPairs = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < nPairs; j++) {
      var left = bin.readUshort(data, offset);
      offset += 2;
      var right = bin.readUshort(data, offset);
      offset += 2;
      var value = bin.readShort(data, offset);
      offset += 2;
      if (left != pleft) {
        map2.glyph1.push(left);
        map2.rval.push({ glyph2: [], vals: [] });
      }
      var rval = map2.rval[map2.rval.length - 1];
      rval.glyph2.push(right);
      rval.vals.push(value);
      pleft = left;
    }
    return offset;
  };
  Typr.loca = {};
  Typr.loca.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = [];
    var ver = font.head.indexToLocFormat;
    var len = font.maxp.numGlyphs + 1;
    if (ver == 0)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
    if (ver == 1)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUint(data, offset + (i << 2)));
    return obj;
  };
  Typr.maxp = {};
  Typr.maxp.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    var ver = bin.readUint(data, offset);
    offset += 4;
    obj.numGlyphs = bin.readUshort(data, offset);
    offset += 2;
    if (ver == 65536) {
      obj.maxPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositePoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositeContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxZones = bin.readUshort(data, offset);
      offset += 2;
      obj.maxTwilightPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStorage = bin.readUshort(data, offset);
      offset += 2;
      obj.maxFunctionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxInstructionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStackElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxSizeOfInstructions = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentDepth = bin.readUshort(data, offset);
      offset += 2;
    }
    return obj;
  };
  Typr.name = {};
  Typr.name.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var names = [
      "copyright",
      "fontFamily",
      "fontSubfamily",
      "ID",
      "fullName",
      "version",
      "postScriptName",
      "trademark",
      "manufacturer",
      "designer",
      "description",
      "urlVendor",
      "urlDesigner",
      "licence",
      "licenceURL",
      "---",
      "typoFamilyName",
      "typoSubfamilyName",
      "compatibleFull",
      "sampleText",
      "postScriptCID",
      "wwsFamilyName",
      "wwsSubfamilyName",
      "lightPalette",
      "darkPalette"
    ];
    var offset0 = offset;
    for (var i = 0; i < count; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var languageID = bin.readUshort(data, offset);
      offset += 2;
      var nameID = bin.readUshort(data, offset);
      offset += 2;
      var slen = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUshort(data, offset);
      offset += 2;
      var cname = names[nameID];
      var soff = offset0 + count * 12 + noffset;
      var str;
      if (platformID == 0)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (platformID == 3 && encodingID == 0)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (encodingID == 0)
        str = bin.readASCII(data, soff, slen);
      else if (encodingID == 1)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (encodingID == 3)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (platformID == 1) {
        str = bin.readASCII(data, soff, slen);
        console.warn("reading unknown MAC encoding " + encodingID + " as ASCII");
      } else
        throw "unknown encoding " + encodingID + ", platformID: " + platformID;
      var tid = "p" + platformID + "," + languageID.toString(16);
      if (obj[tid] == null)
        obj[tid] = {};
      obj[tid][cname !== void 0 ? cname : nameID] = str;
      obj[tid]._lang = languageID;
    }
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 1033)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 0)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 3084)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null)
        return obj[p];
    var tname;
    for (var p in obj) {
      tname = p;
      break;
    }
    console.warn("returning name table with languageID " + obj[tname]._lang);
    return obj[tname];
  };
  Typr["OS/2"] = {};
  Typr["OS/2"].parse = function(data, offset, length) {
    var bin = Typr._bin;
    var ver = bin.readUshort(data, offset);
    offset += 2;
    var obj = {};
    if (ver == 0)
      Typr["OS/2"].version0(data, offset, obj);
    else if (ver == 1)
      Typr["OS/2"].version1(data, offset, obj);
    else if (ver == 2 || ver == 3 || ver == 4)
      Typr["OS/2"].version2(data, offset, obj);
    else if (ver == 5)
      Typr["OS/2"].version5(data, offset, obj);
    else
      throw "unknown OS/2 table version: " + ver;
    return obj;
  };
  Typr["OS/2"].version0 = function(data, offset, obj) {
    var bin = Typr._bin;
    obj.xAvgCharWidth = bin.readShort(data, offset);
    offset += 2;
    obj.usWeightClass = bin.readUshort(data, offset);
    offset += 2;
    obj.usWidthClass = bin.readUshort(data, offset);
    offset += 2;
    obj.fsType = bin.readUshort(data, offset);
    offset += 2;
    obj.ySubscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutSize = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutPosition = bin.readShort(data, offset);
    offset += 2;
    obj.sFamilyClass = bin.readShort(data, offset);
    offset += 2;
    obj.panose = bin.readBytes(data, offset, 10);
    offset += 10;
    obj.ulUnicodeRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange2 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange3 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange4 = bin.readUint(data, offset);
    offset += 4;
    obj.achVendID = [bin.readInt8(data, offset), bin.readInt8(data, offset + 1), bin.readInt8(data, offset + 2), bin.readInt8(data, offset + 3)];
    offset += 4;
    obj.fsSelection = bin.readUshort(data, offset);
    offset += 2;
    obj.usFirstCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.usLastCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.sTypoAscender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoDescender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoLineGap = bin.readShort(data, offset);
    offset += 2;
    obj.usWinAscent = bin.readUshort(data, offset);
    offset += 2;
    obj.usWinDescent = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version1 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version0(data, offset, obj);
    obj.ulCodePageRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulCodePageRange2 = bin.readUint(data, offset);
    offset += 4;
    return offset;
  };
  Typr["OS/2"].version2 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version1(data, offset, obj);
    obj.sxHeight = bin.readShort(data, offset);
    offset += 2;
    obj.sCapHeight = bin.readShort(data, offset);
    offset += 2;
    obj.usDefault = bin.readUshort(data, offset);
    offset += 2;
    obj.usBreak = bin.readUshort(data, offset);
    offset += 2;
    obj.usMaxContext = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version5 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version2(data, offset, obj);
    obj.usLowerOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    obj.usUpperOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr.post = {};
  Typr.post.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    obj.version = bin.readFixed(data, offset);
    offset += 4;
    obj.italicAngle = bin.readFixed(data, offset);
    offset += 4;
    obj.underlinePosition = bin.readShort(data, offset);
    offset += 2;
    obj.underlineThickness = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.SVG = {};
  Typr.SVG.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = { entries: [] };
    var offset0 = offset;
    bin.readUshort(data, offset);
    offset += 2;
    var svgDocIndexOffset = bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    offset = svgDocIndexOffset + offset0;
    var numEntries = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < numEntries; i++) {
      var startGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var endGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var svgDocOffset = bin.readUint(data, offset);
      offset += 4;
      var svgDocLength = bin.readUint(data, offset);
      offset += 4;
      var sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength);
      var svg = bin.readUTF8(sbuf, 0, sbuf.length);
      for (var f = startGlyphID; f <= endGlyphID; f++) {
        obj.entries[f] = svg;
      }
    }
    return obj;
  };
  Typr.SVG.toPath = function(str) {
    var pth = { cmds: [], crds: [] };
    if (str == null)
      return pth;
    var prsr = new DOMParser();
    var doc = prsr["parseFromString"](str, "image/svg+xml");
    var svg = doc.firstChild;
    while (svg.tagName != "svg")
      svg = svg.nextSibling;
    var vb = svg.getAttribute("viewBox");
    if (vb)
      vb = vb.trim().split(" ").map(parseFloat);
    else
      vb = [0, 0, 1e3, 1e3];
    Typr.SVG._toPath(svg.children, pth);
    for (var i = 0; i < pth.crds.length; i += 2) {
      var x = pth.crds[i], y = pth.crds[i + 1];
      x -= vb[0];
      y -= vb[1];
      y = -y;
      pth.crds[i] = x;
      pth.crds[i + 1] = y;
    }
    return pth;
  };
  Typr.SVG._toPath = function(nds, pth, fill) {
    for (var ni = 0; ni < nds.length; ni++) {
      var nd = nds[ni], tn = nd.tagName;
      var cfl = nd.getAttribute("fill");
      if (cfl == null)
        cfl = fill;
      if (tn == "g")
        Typr.SVG._toPath(nd.children, pth, cfl);
      else if (tn == "path") {
        pth.cmds.push(cfl ? cfl : "#000000");
        var d = nd.getAttribute("d");
        var toks = Typr.SVG._tokens(d);
        Typr.SVG._toksToPath(toks, pth);
        pth.cmds.push("X");
      } else if (tn == "defs")
        ;
      else
        console.warn(tn, nd);
    }
  };
  Typr.SVG._tokens = function(d) {
    var ts = [], off = 0, rn = false, cn = "";
    while (off < d.length) {
      var cc = d.charCodeAt(off), ch = d.charAt(off);
      off++;
      var isNum = 48 <= cc && cc <= 57 || ch == "." || ch == "-";
      if (rn) {
        if (ch == "-") {
          ts.push(parseFloat(cn));
          cn = ch;
        } else if (isNum)
          cn += ch;
        else {
          ts.push(parseFloat(cn));
          if (ch != "," && ch != " ")
            ts.push(ch);
          rn = false;
        }
      } else {
        if (isNum) {
          cn = ch;
          rn = true;
        } else if (ch != "," && ch != " ")
          ts.push(ch);
      }
    }
    if (rn)
      ts.push(parseFloat(cn));
    return ts;
  };
  Typr.SVG._toksToPath = function(ts, pth) {
    var i = 0, x = 0, y = 0, ox = 0, oy = 0;
    var pc = { "M": 2, "L": 2, "H": 1, "V": 1, "S": 4, "C": 6 };
    var cmds = pth.cmds, crds = pth.crds;
    while (i < ts.length) {
      var cmd = ts[i];
      i++;
      if (cmd == "z") {
        cmds.push("Z");
        x = ox;
        y = oy;
      } else {
        var cmu = cmd.toUpperCase();
        var ps = pc[cmu], reps = Typr.SVG._reps(ts, i, ps);
        for (var j = 0; j < reps; j++) {
          var xi = 0, yi = 0;
          if (cmd != cmu) {
            xi = x;
            yi = y;
          }
          if (cmu == "M") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("M");
            crds.push(x, y);
            ox = x;
            oy = y;
          } else if (cmu == "L") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "H") {
            x = xi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "V") {
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "C") {
            var x1 = xi + ts[i++], y1 = yi + ts[i++], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else if (cmu == "S") {
            var co = Math.max(crds.length - 4, 0);
            var x1 = x + x - crds[co], y1 = y + y - crds[co + 1];
            var x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else
            console.warn("Unknown SVG command " + cmd);
        }
      }
    }
  };
  Typr.SVG._reps = function(ts, off, ps) {
    var i = off;
    while (i < ts.length) {
      if (typeof ts[i] == "string")
        break;
      i += ps;
    }
    return (i - off) / ps;
  };
  if (Typr == null)
    Typr = {};
  if (Typr.U == null)
    Typr.U = {};
  Typr.U.codeToGlyph = function(font, code) {
    var cmap = font.cmap;
    for (var _i = 0, _a = [cmap.p0e4, cmap.p3e1, cmap.p3e10, cmap.p0e3, cmap.p1e0]; _i < _a.length; _i++) {
      var tind = _a[_i];
      if (tind == null)
        continue;
      var tab = cmap.tables[tind];
      if (tab.format == 0) {
        if (code >= tab.map.length)
          continue;
        return tab.map[code];
      } else if (tab.format == 4) {
        var sind = -1;
        for (var i = 0; i < tab.endCount.length; i++) {
          if (code <= tab.endCount[i]) {
            sind = i;
            break;
          }
        }
        if (sind == -1)
          continue;
        if (tab.startCount[sind] > code)
          continue;
        var gli = 0;
        if (tab.idRangeOffset[sind] != 0) {
          gli = tab.glyphIdArray[code - tab.startCount[sind] + (tab.idRangeOffset[sind] >> 1) - (tab.idRangeOffset.length - sind)];
        } else {
          gli = code + tab.idDelta[sind];
        }
        return gli & 65535;
      } else if (tab.format == 12) {
        if (code > tab.groups[tab.groups.length - 1][1])
          continue;
        for (var i = 0; i < tab.groups.length; i++) {
          var grp = tab.groups[i];
          if (grp[0] <= code && code <= grp[1])
            return grp[2] + (code - grp[0]);
        }
        continue;
      } else {
        throw "unknown cmap table format " + tab.format;
      }
    }
    return 0;
  };
  Typr.U.glyphToPath = function(font, gid) {
    var path = { cmds: [], crds: [] };
    if (font.SVG && font.SVG.entries[gid]) {
      var p = font.SVG.entries[gid];
      if (p == null)
        return path;
      if (typeof p == "string") {
        p = Typr.SVG.toPath(p);
        font.SVG.entries[gid] = p;
      }
      return p;
    } else if (font.CFF) {
      var state = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: font.CFF.Private ? font.CFF.Private.defaultWidthX : 0, open: false };
      var cff = font.CFF, pdct = font.CFF.Private;
      if (cff.ROS) {
        var gi = 0;
        while (cff.FDSelect[gi + 2] <= gid)
          gi += 2;
        pdct = cff.FDArray[cff.FDSelect[gi + 1]].Private;
      }
      Typr.U._drawCFF(font.CFF.CharStrings[gid], state, cff, pdct, path);
    } else if (font.glyf) {
      Typr.U._drawGlyf(gid, font, path);
    }
    return path;
  };
  Typr.U._drawGlyf = function(gid, font, path) {
    var gl = font.glyf[gid];
    if (gl == null)
      gl = font.glyf[gid] = Typr.glyf._parseGlyf(font, gid);
    if (gl != null) {
      if (gl.noc > -1) {
        Typr.U._simpleGlyph(gl, path);
      } else {
        Typr.U._compoGlyph(gl, font, path);
      }
    }
  };
  Typr.U._simpleGlyph = function(gl, p) {
    for (var c = 0; c < gl.noc; c++) {
      var i0 = c == 0 ? 0 : gl.endPts[c - 1] + 1;
      var il = gl.endPts[c];
      for (var i = i0; i <= il; i++) {
        var pr = i == i0 ? il : i - 1;
        var nx = i == il ? i0 : i + 1;
        var onCurve = gl.flags[i] & 1;
        var prOnCurve = gl.flags[pr] & 1;
        var nxOnCurve = gl.flags[nx] & 1;
        var x = gl.xs[i], y = gl.ys[i];
        if (i == i0) {
          if (onCurve) {
            if (prOnCurve) {
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            } else {
              Typr.U.P.moveTo(p, x, y);
              continue;
            }
          } else {
            if (prOnCurve) {
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            } else {
              Typr.U.P.moveTo(p, (gl.xs[pr] + x) / 2, (gl.ys[pr] + y) / 2);
            }
          }
        }
        if (onCurve) {
          if (prOnCurve)
            Typr.U.P.lineTo(p, x, y);
        } else {
          if (nxOnCurve) {
            Typr.U.P.qcurveTo(p, x, y, gl.xs[nx], gl.ys[nx]);
          } else {
            Typr.U.P.qcurveTo(p, x, y, (x + gl.xs[nx]) / 2, (y + gl.ys[nx]) / 2);
          }
        }
      }
      Typr.U.P.closePath(p);
    }
  };
  Typr.U._compoGlyph = function(gl, font, p) {
    for (var j = 0; j < gl.parts.length; j++) {
      var path = { cmds: [], crds: [] };
      var prt = gl.parts[j];
      Typr.U._drawGlyf(prt.glyphIndex, font, path);
      var m = prt.m;
      for (var i = 0; i < path.crds.length; i += 2) {
        var x = path.crds[i], y = path.crds[i + 1];
        p.crds.push(x * m.a + y * m.b + m.tx);
        p.crds.push(x * m.c + y * m.d + m.ty);
      }
      for (var i = 0; i < path.cmds.length; i++) {
        p.cmds.push(path.cmds[i]);
      }
    }
  };
  Typr.U._getGlyphClass = function(g, cd) {
    var intr = Typr._lctf.getInterval(cd, g);
    return intr == -1 ? 0 : cd[intr + 2];
  };
  Typr.U.getPairAdjustment = function(font, g1, g2) {
    var hasGPOSkern = false;
    if (font.GPOS) {
      var gpos = font["GPOS"];
      var llist = gpos.lookupList, flist = gpos.featureList;
      var tused = [];
      for (var i = 0; i < flist.length; i++) {
        var fl = flist[i];
        if (fl.tag != "kern")
          continue;
        hasGPOSkern = true;
        for (var ti = 0; ti < fl.tab.length; ti++) {
          if (tused[fl.tab[ti]])
            continue;
          tused[fl.tab[ti]] = true;
          var tab = llist[fl.tab[ti]];
          for (var j = 0; j < tab.tabs.length; j++) {
            if (tab.tabs[j] == null)
              continue;
            var ltab = tab.tabs[j], ind;
            if (ltab.coverage) {
              ind = Typr._lctf.coverageIndex(ltab.coverage, g1);
              if (ind == -1)
                continue;
            }
            if (tab.ltype == 1)
              ;
            else if (tab.ltype == 2) {
              var adj = null;
              if (ltab.fmt == 1) {
                var right = ltab.pairsets[ind];
                for (var i = 0; i < right.length; i++) {
                  if (right[i].gid2 == g2)
                    adj = right[i];
                }
              } else if (ltab.fmt == 2) {
                var c1 = Typr.U._getGlyphClass(g1, ltab.classDef1);
                var c2 = Typr.U._getGlyphClass(g2, ltab.classDef2);
                adj = ltab.matrix[c1][c2];
              }
              if (adj) {
                var offset = 0;
                if (adj.val1 && adj.val1[2])
                  offset += adj.val1[2];
                if (adj.val2 && adj.val2[0])
                  offset += adj.val2[0];
                return offset;
              }
            }
          }
        }
      }
    }
    if (font.kern && !hasGPOSkern) {
      var ind1 = font.kern.glyph1.indexOf(g1);
      if (ind1 != -1) {
        var ind2 = font.kern.rval[ind1].glyph2.indexOf(g2);
        if (ind2 != -1)
          return font.kern.rval[ind1].vals[ind2];
      }
    }
    return 0;
  };
  Typr.U.stringToGlyphs = function(font, str) {
    var gls = [];
    for (var i = 0; i < str.length; i++) {
      var cc = str.codePointAt(i);
      if (cc > 65535)
        i++;
      gls.push(Typr.U.codeToGlyph(font, cc));
    }
    for (var i = 0; i < str.length; i++) {
      var cc = str.codePointAt(i);
      if (cc == 2367) {
        var t = gls[i - 1];
        gls[i - 1] = gls[i];
        gls[i] = t;
      }
      if (cc > 65535)
        i++;
    }
    var gsub = font["GSUB"];
    if (gsub == null)
      return gls;
    var llist = gsub.lookupList, flist = gsub.featureList;
    var cligs = [
      "rlig",
      "liga",
      "mset",
      "isol",
      "init",
      "fina",
      "medi",
      "half",
      "pres",
      "blws"
      /* Tibetan fonts like Himalaya.ttf */
    ];
    var tused = [];
    for (var fi = 0; fi < flist.length; fi++) {
      var fl = flist[fi];
      if (cligs.indexOf(fl.tag) == -1)
        continue;
      for (var ti = 0; ti < fl.tab.length; ti++) {
        if (tused[fl.tab[ti]])
          continue;
        tused[fl.tab[ti]] = true;
        var tab = llist[fl.tab[ti]];
        for (var ci = 0; ci < gls.length; ci++) {
          var feat = Typr.U._getWPfeature(str, ci);
          if ("isol,init,fina,medi".indexOf(fl.tag) != -1 && fl.tag != feat)
            continue;
          Typr.U._applySubs(gls, ci, tab, llist);
        }
      }
    }
    return gls;
  };
  Typr.U._getWPfeature = function(str, ci) {
    var wsep = '\n	" ,.:;!?()  ،';
    var R = "آأؤإاةدذرزوٱٲٳٵٶٷڈډڊڋڌڍڎڏڐڑڒړڔڕږڗژڙۀۃۄۅۆۇۈۉۊۋۍۏےۓەۮۯܐܕܖܗܘܙܞܨܪܬܯݍݙݚݛݫݬݱݳݴݸݹࡀࡆࡇࡉࡔࡧࡩࡪࢪࢫࢬࢮࢱࢲࢹૅેૉ૊૎૏ૐ૑૒૝ૡ૤૯஁ஃ஄அஉ஌எஏ஑னப஫஬";
    var L = "ꡲ્૗";
    var slft = ci == 0 || wsep.indexOf(str[ci - 1]) != -1;
    var srgt = ci == str.length - 1 || wsep.indexOf(str[ci + 1]) != -1;
    if (!slft && R.indexOf(str[ci - 1]) != -1)
      slft = true;
    if (!srgt && R.indexOf(str[ci]) != -1)
      srgt = true;
    if (!srgt && L.indexOf(str[ci + 1]) != -1)
      srgt = true;
    if (!slft && L.indexOf(str[ci]) != -1)
      slft = true;
    var feat = null;
    if (slft) {
      feat = srgt ? "isol" : "init";
    } else {
      feat = srgt ? "fina" : "medi";
    }
    return feat;
  };
  Typr.U._applySubs = function(gls, ci, tab, llist) {
    var rlim = gls.length - ci - 1;
    for (var j = 0; j < tab.tabs.length; j++) {
      if (tab.tabs[j] == null)
        continue;
      var ltab = tab.tabs[j], ind;
      if (ltab.coverage) {
        ind = Typr._lctf.coverageIndex(ltab.coverage, gls[ci]);
        if (ind == -1)
          continue;
      }
      if (tab.ltype == 1) {
        gls[ci];
        if (ltab.fmt == 1)
          gls[ci] = gls[ci] + ltab.delta;
        else
          gls[ci] = ltab.newg[ind];
      } else if (tab.ltype == 4) {
        var vals = ltab.vals[ind];
        for (var k = 0; k < vals.length; k++) {
          var lig = vals[k], rl = lig.chain.length;
          if (rl > rlim)
            continue;
          var good = true, em1 = 0;
          for (var l = 0; l < rl; l++) {
            while (gls[ci + em1 + (1 + l)] == -1)
              em1++;
            if (lig.chain[l] != gls[ci + em1 + (1 + l)])
              good = false;
          }
          if (!good)
            continue;
          gls[ci] = lig.nglyph;
          for (var l = 0; l < rl + em1; l++)
            gls[ci + l + 1] = -1;
          break;
        }
      } else if (tab.ltype == 5 && ltab.fmt == 2) {
        var cind = Typr._lctf.getInterval(ltab.cDef, gls[ci]);
        var cls = ltab.cDef[cind + 2], scs = ltab.scset[cls];
        for (var i = 0; i < scs.length; i++) {
          var sc = scs[i], inp = sc.input;
          if (inp.length > rlim)
            continue;
          var good = true;
          for (var l = 0; l < inp.length; l++) {
            var cind2 = Typr._lctf.getInterval(ltab.cDef, gls[ci + 1 + l]);
            if (cind == -1 && ltab.cDef[cind2 + 2] != inp[l]) {
              good = false;
              break;
            }
          }
          if (!good)
            continue;
          var lrs = sc.substLookupRecords;
          for (var k = 0; k < lrs.length; k += 2) {
            lrs[k];
            lrs[k + 1];
          }
        }
      } else if (tab.ltype == 6 && ltab.fmt == 3) {
        if (!Typr.U._glsCovered(gls, ltab.backCvg, ci - ltab.backCvg.length))
          continue;
        if (!Typr.U._glsCovered(gls, ltab.inptCvg, ci))
          continue;
        if (!Typr.U._glsCovered(gls, ltab.ahedCvg, ci + ltab.inptCvg.length))
          continue;
        var lr = ltab.lookupRec;
        for (var i = 0; i < lr.length; i += 2) {
          var cind = lr[i], tab2 = llist[lr[i + 1]];
          Typr.U._applySubs(gls, ci + cind, tab2, llist);
        }
      }
    }
  };
  Typr.U._glsCovered = function(gls, cvgs, ci) {
    for (var i = 0; i < cvgs.length; i++) {
      var ind = Typr._lctf.coverageIndex(cvgs[i], gls[ci + i]);
      if (ind == -1)
        return false;
    }
    return true;
  };
  Typr.U.glyphsToPath = function(font, gls, clr) {
    var tpath = { cmds: [], crds: [] };
    var x = 0;
    for (var i = 0; i < gls.length; i++) {
      var gid = gls[i];
      if (gid == -1)
        continue;
      var gid2 = i < gls.length - 1 && gls[i + 1] != -1 ? gls[i + 1] : 0;
      var path = Typr.U.glyphToPath(font, gid);
      for (var j = 0; j < path.crds.length; j += 2) {
        tpath.crds.push(path.crds[j] + x);
        tpath.crds.push(path.crds[j + 1]);
      }
      if (clr)
        tpath.cmds.push(clr);
      for (var j = 0; j < path.cmds.length; j++)
        tpath.cmds.push(path.cmds[j]);
      if (clr)
        tpath.cmds.push("X");
      x += font.hmtx.aWidth[gid];
      if (i < gls.length - 1)
        x += Typr.U.getPairAdjustment(font, gid, gid2);
    }
    return tpath;
  };
  Typr.U.pathToSVG = function(path, prec) {
    if (prec == null)
      prec = 5;
    var out = [], co = 0, lmap = { "M": 2, "L": 2, "Q": 4, "C": 6 };
    for (var i = 0; i < path.cmds.length; i++) {
      var cmd = path.cmds[i], cn = co + (lmap[cmd] ? lmap[cmd] : 0);
      out.push(cmd);
      while (co < cn) {
        var c = path.crds[co++];
        out.push(parseFloat(c.toFixed(prec)) + (co == cn ? "" : " "));
      }
    }
    return out.join("");
  };
  Typr.U.pathToContext = function(path, ctx) {
    var c = 0, crds = path.crds;
    for (var j = 0; j < path.cmds.length; j++) {
      var cmd = path.cmds[j];
      if (cmd == "M") {
        ctx.moveTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "L") {
        ctx.lineTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "C") {
        ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]);
        c += 6;
      } else if (cmd == "Q") {
        ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]);
        c += 4;
      } else if (cmd.charAt(0) == "#") {
        ctx.beginPath();
        ctx.fillStyle = cmd;
      } else if (cmd == "Z") {
        ctx.closePath();
      } else if (cmd == "X") {
        ctx.fill();
      }
    }
  };
  Typr.U.P = {};
  Typr.U.P.moveTo = function(p, x, y) {
    p.cmds.push("M");
    p.crds.push(x, y);
  };
  Typr.U.P.lineTo = function(p, x, y) {
    p.cmds.push("L");
    p.crds.push(x, y);
  };
  Typr.U.P.curveTo = function(p, a, b, c, d, e, f) {
    p.cmds.push("C");
    p.crds.push(a, b, c, d, e, f);
  };
  Typr.U.P.qcurveTo = function(p, a, b, c, d) {
    p.cmds.push("Q");
    p.crds.push(a, b, c, d);
  };
  Typr.U.P.closePath = function(p) {
    p.cmds.push("Z");
  };
  Typr.U._drawCFF = function(cmds, state, font, pdct, p) {
    var stack = state.stack;
    var nStems = state.nStems, haveWidth = state.haveWidth, width = state.width, open = state.open;
    var i = 0;
    var x = state.x, y = state.y, c1x = 0, c1y = 0, c2x = 0, c2y = 0, c3x = 0, c3y = 0, c4x = 0, c4y = 0, jpx = 0, jpy = 0;
    var o = { val: 0, size: 0 };
    while (i < cmds.length) {
      Typr.CFF.getCharString(cmds, i, o);
      var v = o.val;
      i += o.size;
      if (v == "o1" || v == "o18") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o3" || v == "o23") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o4") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
          haveWidth = true;
        }
        if (open)
          Typr.U.P.closePath(p);
        y += stack.pop();
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o5") {
        while (stack.length > 0) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o6" || v == "o7") {
        var count = stack.length;
        var isX = v == "o6";
        for (var j = 0; j < count; j++) {
          var sval = stack.shift();
          if (isX) {
            x += sval;
          } else {
            y += sval;
          }
          isX = !isX;
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o8" || v == "o24") {
        var count = stack.length;
        var index = 0;
        while (index + 6 <= count) {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 6;
        }
        if (v == "o24") {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o11") {
        break;
      } else if (v == "o1234" || v == "o1235" || v == "o1236" || v == "o1237") {
        if (v == "o1234") {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = y;
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1235") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          y = c4y + stack.shift();
          stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1236") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1237") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          if (Math.abs(c4x - x) > Math.abs(c4y - y)) {
            x = c4x + stack.shift();
          } else {
            y = c4y + stack.shift();
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
      } else if (v == "o14") {
        if (stack.length > 0 && !haveWidth) {
          width = stack.shift() + font.nominalWidthX;
          haveWidth = true;
        }
        if (stack.length == 4) {
          var adx = stack.shift();
          var ady = stack.shift();
          var bchar = stack.shift();
          var achar = stack.shift();
          var bind2 = Typr.CFF.glyphBySE(font, bchar);
          var aind = Typr.CFF.glyphBySE(font, achar);
          Typr.U._drawCFF(font.CharStrings[bind2], state, font, pdct, p);
          state.x = adx;
          state.y = ady;
          Typr.U._drawCFF(font.CharStrings[aind], state, font, pdct, p);
        }
        if (open) {
          Typr.U.P.closePath(p);
          open = false;
        }
      } else if (v == "o19" || v == "o20") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
        i += nStems + 7 >> 3;
      } else if (v == "o21") {
        if (stack.length > 2 && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
          haveWidth = true;
        }
        y += stack.pop();
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o22") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
          haveWidth = true;
        }
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o25") {
        while (stack.length > 6) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
        c1x = x + stack.shift();
        c1y = y + stack.shift();
        c2x = c1x + stack.shift();
        c2y = c1y + stack.shift();
        x = c2x + stack.shift();
        y = c2y + stack.shift();
        Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
      } else if (v == "o26") {
        if (stack.length % 2) {
          x += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x;
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x;
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o27") {
        if (stack.length % 2) {
          y += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y;
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o10" || v == "o29") {
        var obj = v == "o10" ? pdct : font;
        if (stack.length == 0) {
          console.warn("error: empty stack");
        } else {
          var ind = stack.pop();
          var subr = obj.Subrs[ind + obj.Bias];
          state.x = x;
          state.y = y;
          state.nStems = nStems;
          state.haveWidth = haveWidth;
          state.width = width;
          state.open = open;
          Typr.U._drawCFF(subr, state, font, pdct, p);
          x = state.x;
          y = state.y;
          nStems = state.nStems;
          haveWidth = state.haveWidth;
          width = state.width;
          open = state.open;
        }
      } else if (v == "o30" || v == "o31") {
        var count, count1 = stack.length;
        var index = 0;
        var alternate = v == "o31";
        count = count1 & ~2;
        index += count1 - count;
        while (index < count) {
          if (alternate) {
            c1x = x + stack.shift();
            c1y = y;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y = c2y + stack.shift();
            if (count - index == 5) {
              x = c2x + stack.shift();
              index++;
            } else {
              x = c2x;
            }
            alternate = false;
          } else {
            c1x = x;
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            if (count - index == 5) {
              y = c2y + stack.shift();
              index++;
            } else {
              y = c2y;
            }
            alternate = true;
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 4;
        }
      } else if ((v + "").charAt(0) == "o") {
        console.warn("Unknown operation: " + v, cmds);
        throw v;
      } else
        stack.push(v);
    }
    state.x = x;
    state.y = y;
    state.nStems = nStems;
    state.haveWidth = haveWidth;
    state.width = width;
    state.open = open;
  };
  Typr$1.Typr = Typr;
  var Typr_js_1 = Typr$1;
  var friendlyTags = { "aalt": "Access All Alternates", "abvf": "Above-base Forms", "abvm": "Above - base Mark Positioning", "abvs": "Above - base Substitutions", "afrc": "Alternative Fractions", "akhn": "Akhands", "blwf": "Below - base Forms", "blwm": "Below - base Mark Positioning", "blws": "Below - base Substitutions", "calt": "Contextual Alternates", "case": "Case - Sensitive Forms", "ccmp": "Glyph Composition / Decomposition", "cfar": "Conjunct Form After Ro", "cjct": "Conjunct Forms", "clig": "Contextual Ligatures", "cpct": "Centered CJK Punctuation", "cpsp": "Capital Spacing", "cswh": "Contextual Swash", "curs": "Cursive Positioning", "c2pc": "Petite Capitals From Capitals", "c2sc": "Small Capitals From Capitals", "dist": "Distances", "dlig": "Discretionary Ligatures", "dnom": "Denominators", "dtls": "Dotless Forms", "expt": "Expert Forms", "falt": "Final Glyph on Line Alternates", "fin2": "Terminal Forms #2", "fin3": "Terminal Forms #3", "fina": "Terminal Forms", "flac": "Flattened accent forms", "frac": "Fractions", "fwid": "Full Widths", "half": "Half Forms", "haln": "Halant Forms", "halt": "Alternate Half Widths", "hist": "Historical Forms", "hkna": "Horizontal Kana Alternates", "hlig": "Historical Ligatures", "hngl": "Hangul", "hojo": "Hojo Kanji Forms(JIS X 0212 - 1990 Kanji Forms)", "hwid": "Half Widths", "init": "Initial Forms", "isol": "Isolated Forms", "ital": "Italics", "jalt": "Justification Alternates", "jp78": "JIS78 Forms", "jp83": "JIS83 Forms", "jp90": "JIS90 Forms", "jp04": "JIS2004 Forms", "kern": "Kerning", "lfbd": "Left Bounds", "liga": "Standard Ligatures", "ljmo": "Leading Jamo Forms", "lnum": "Lining Figures", "locl": "Localized Forms", "ltra": "Left - to - right alternates", "ltrm": "Left - to - right mirrored forms", "mark": "Mark Positioning", "med2": "Medial Forms #2", "medi": "Medial Forms", "mgrk": "Mathematical Greek", "mkmk": "Mark to Mark Positioning", "mset": "Mark Positioning via Substitution", "nalt": "Alternate Annotation Forms", "nlck": "NLC Kanji Forms", "nukt": "Nukta Forms", "numr": "Numerators", "onum": "Oldstyle Figures", "opbd": "Optical Bounds", "ordn": "Ordinals", "ornm": "Ornaments", "palt": "Proportional Alternate Widths", "pcap": "Petite Capitals", "pkna": "Proportional Kana", "pnum": "Proportional Figures", "pref": "Pre - Base Forms", "pres": "Pre - base Substitutions", "pstf": "Post - base Forms", "psts": "Post - base Substitutions", "pwid": "Proportional Widths", "qwid": "Quarter Widths", "rand": "Randomize", "rclt": "Required Contextual Alternates", "rkrf": "Rakar Forms", "rlig": "Required Ligatures", "rphf": "Reph Forms", "rtbd": "Right Bounds", "rtla": "Right - to - left alternates", "rtlm": "Right - to - left mirrored forms", "ruby": "Ruby Notation Forms", "rvrn": "Required Variation Alternates", "salt": "Stylistic Alternates", "sinf": "Scientific Inferiors", "size": "Optical size", "smcp": "Small Capitals", "smpl": "Simplified Forms", "ssty": "Math script style alternates", "stch": "Stretching Glyph Decomposition", "subs": "Subscript", "sups": "Superscript", "swsh": "Swash", "titl": "Titling", "tjmo": "Trailing Jamo Forms", "tnam": "Traditional Name Forms", "tnum": "Tabular Figures", "trad": "Traditional Forms", "twid": "Third Widths", "unic": "Unicase", "valt": "Alternate Vertical Metrics", "vatu": "Vattu Variants", "vert": "Vertical Writing", "vhal": "Alternate Vertical Half Metrics", "vjmo": "Vowel Jamo Forms", "vkna": "Vertical Kana Alternates", "vkrn": "Vertical Kerning", "vpal": "Proportional Alternate Vertical Metrics", "vrt2": "Vertical Alternates and Rotation", "vrtr": "Vertical Alternates for Rotation", "zero": "Slashed Zero" };
  var Font = (
    /** @class */
    function() {
      function Font2(data) {
        var obj = Typr_js_1.Typr.parse(data);
        if (!obj.length || typeof obj[0] !== "object" || typeof obj[0].hasOwnProperty !== "function") {
          throw "unable to parse font";
        }
        for (var n in obj[0]) {
          this[n] = obj[0][n];
        }
        this.enabledGSUB = {};
      }
      Font2.prototype.getFamilyName = function() {
        return this.name && (this.name.typoFamilyName || this.name.fontFamily) || "";
      };
      Font2.prototype.getSubFamilyName = function() {
        return this.name && (this.name.typoSubfamilyName || this.name.fontSubfamily) || "";
      };
      Font2.prototype.glyphToPath = function(gid) {
        return Typr_js_1.Typr.U.glyphToPath(this, gid);
      };
      Font2.prototype.getPairAdjustment = function(gid1, gid2) {
        return Typr_js_1.Typr.U.getPairAdjustment(this, gid1, gid2);
      };
      Font2.prototype.stringToGlyphs = function(str) {
        return Typr_js_1.Typr.U.stringToGlyphs(this, str);
      };
      Font2.prototype.glyphsToPath = function(gls) {
        return Typr_js_1.Typr.U.glyphsToPath(this, gls);
      };
      Font2.prototype.pathToSVG = function(path, prec) {
        return Typr_js_1.Typr.U.pathToSVG(path, prec);
      };
      Font2.prototype.pathToContext = function(path, ctx) {
        return Typr_js_1.Typr.U.pathToContext(path, ctx);
      };
      Font2.prototype.lookupFriendlyName = function(table, feature) {
        if (this[table] !== void 0) {
          var tbl = this[table];
          var feat = tbl.featureList[feature];
          return this.featureFriendlyName(feat);
        }
        return "";
      };
      Font2.prototype.featureFriendlyName = function(feature) {
        if (friendlyTags[feature.tag]) {
          return friendlyTags[feature.tag];
        }
        if (feature.tag.match(/ss[0-2][0-9]/)) {
          var name_1 = "Stylistic Set " + Number(feature.tag.substr(2, 2)).toString();
          if (feature.featureParams) {
            var version = Typr_js_1.Typr._bin.readUshort(this._data, feature.featureParams);
            if (version === 0) {
              var nameID = Typr_js_1.Typr._bin.readUshort(this._data, feature.featureParams + 2);
              if (this.name && this.name[nameID] !== void 0) {
                return name_1 + " - " + this.name[nameID];
              }
            }
          }
          return name_1;
        }
        if (feature.tag.match(/cv[0-9][0-9]/)) {
          return "Character Variant " + Number(feature.tag.substr(2, 2)).toString();
        }
        return "";
      };
      Font2.prototype.enableGSUB = function(featureNumber) {
        if (this.GSUB) {
          var feature = this.GSUB.featureList[featureNumber];
          if (feature) {
            for (var i = 0; i < feature.tab.length; ++i) {
              this.enabledGSUB[feature.tab[i]] = (this.enabledGSUB[feature.tab[i]] || 0) + 1;
            }
          }
        }
      };
      Font2.prototype.disableGSUB = function(featureNumber) {
        if (this.GSUB) {
          var feature = this.GSUB.featureList[featureNumber];
          if (feature) {
            for (var i = 0; i < feature.tab.length; ++i) {
              if (this.enabledGSUB[feature.tab[i]] > 1) {
                --this.enabledGSUB[feature.tab[i]];
              } else {
                delete this.enabledGSUB[feature.tab[i]];
              }
            }
          }
        }
      };
      Font2.prototype.codeToGlyph = function(code) {
        var g = Typr_js_1.Typr.U.codeToGlyph(this, code);
        if (this.GSUB) {
          var gls = [g];
          for (var n in this.enabledGSUB) {
            var l = this.GSUB.lookupList[n];
            Typr_js_1.Typr.U._applySubs(gls, 0, l, this.GSUB.lookupList);
          }
          if (gls.length === 1)
            return gls[0];
        }
        return g;
      };
      return Font2;
    }()
  );
  var Font_1 = Font;
  const FONT_TABLE_URL = "https://www.forestpolice.org/ttf/2.0/table.json";
  const FONT_TABLE_STORAGE_KEY = "fontTable";
  let fontTableCache = null;
  let fontTableRequest = null;
  const getFontTable = async () => {
    if (fontTableCache)
      return fontTableCache;
    if (fontTableRequest)
      return fontTableRequest;
    const stored = _GM_getValue(FONT_TABLE_STORAGE_KEY);
    if (typeof stored === "string" && stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object" && Object.keys(parsed).length) {
          fontTableCache = parsed;
          return fontTableCache;
        }
      } catch (_) {
      }
    }
    fontTableRequest = new Promise((resolve) => {
      _GM_xmlhttpRequest({
        method: "GET",
        url: FONT_TABLE_URL,
        timeout: 2e4,
        onload: (response) => {
          try {
            const text = response.responseText || "";
            const parsed = JSON.parse(text);
            if (parsed && typeof parsed === "object" && Object.keys(parsed).length) {
              _GM_setValue(FONT_TABLE_STORAGE_KEY, text);
              resolve(parsed);
              return;
            }
          } catch (_) {
          }
          resolve({});
        },
        onerror: () => resolve({}),
        ontimeout: () => resolve({}),
        onabort: () => resolve({})
      });
    }).then((table) => {
      if (table && Object.keys(table).length)
        fontTableCache = table;
      return table;
    }).finally(() => {
      fontTableRequest = null;
    });
    return fontTableRequest;
  };
  async function decrypt(iframeDocument) {
    // Never let font decoding failures abort the whole task point.
    try {
      await decryptInner(iframeDocument);
    } catch (error) {
      useLogStore().addLog(`字体解密失败：${String(error)}，字体加密题可能显示为乱码`, "warning");
    }
  }
  async function decryptInner(iframeDocument) {
    var _a, _b, _c;
    const styles = iframeDocument.querySelectorAll("style");
    let tip;
    for (let i = 0; i < styles.length; i++) {
      if ((_a = styles[i].textContent) == null ? void 0 : _a.includes("font-cxsecret")) {
        tip = styles[i];
        break;
      }
    }
    if (!tip)
      return;
    const fontData = (_c = (_b = tip.textContent) == null ? void 0 : _b.match(/base64,([\w\W]+?)'/)) == null ? void 0 : _c[1];
    if (!fontData)
      return;
    const fontBuffer = base64ToArrayBuffer(fontData);
    const font = new Font_1(fontBuffer);
    const table = await getFontTable();
    if (!table || !Object.keys(table).length) {
      useLogStore().addLog("字体表未能加载（网络原因），字体加密题会显示为乱码，不影响其他题目", "warning");
      return;
    }
    const match = {};
    for (let i = 19968; i < 40870; i++) {
      const glyph = font.codeToGlyph(i);
      if (!glyph)
        continue;
      const path = font.glyphToPath(glyph);
      const hash = md5(JSON.stringify(path)).slice(24);
      const code = table[hash];
      if (typeof code !== "number")
        continue;
      match[i] = code;
    }
    const elements = iframeDocument.querySelectorAll(".font-cxsecret");
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      let html = el.innerHTML;
      for (const key in match) {
        const value = String.fromCharCode(match[key]);
        const regExp = new RegExp(String.fromCharCode(Number(key)), "g");
        html = html.replace(regExp, value);
      }
      el.innerHTML = html;
      el.classList.remove("font-cxsecret");
    }
    function base64ToArrayBuffer(base64) {
      const data = window.atob(base64);
      const buffer = new ArrayBuffer(data.length);
      const bytes = new Uint8Array(buffer);
      for (let i = 0; i < data.length; ++i) {
        bytes[i] = data.charCodeAt(i);
      }
      return buffer;
    }
  }
  class BaseQuestionHandler {
    constructor() {
      __publicField(this, "_document", document);
      __publicField(this, "_window", _unsafeWindow);
      __publicField(this, "addLog");
      __publicField(this, "addQuestion");
      __publicField(this, "questions", []);
      __publicField(this, "correctNum", 0);
      __publicField(this, "parseHtml", () => {
        throw new Error("请使用继承类的重写方法");
      });
      __publicField(this, "fillQuestion", (question) => {
        throw new Error("请使用继承类的重写方法");
      });
      __publicField(this, "removeHtml", (html) => {
        if (html == null) {
          return "";
        }
        return html.replace(/<((?!img|sub|sup|br)[^>]+)>/g, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").replace(/<br\s*\/?>/g, "\n").replace(/<img.*?src="(.*?)".*?>/g, '<img src="$1"/>').trim();
      });
      __publicField(this, "clean", (str) => {
        return str.replace(/^【*?】\s*/, "").replace(/\s*（\d+\.\d+分）$/, "");
      });
      __publicField(this, "findMatchedOption", (options, answer) => {
        const normalizedAnswer = this.normalizeOptionMatchText(String(answer));
        if (!normalizedAnswer)
          return null;
        let bestElement = null;
        let bestScore = -1;
        for (const [optionText, optionElement] of Object.entries(options)) {
          const score = this.calculateTextSimilarity(
            this.normalizeOptionMatchText(optionText),
            normalizedAnswer
          );
          if (score > bestScore) {
            bestElement = optionElement;
            bestScore = score;
          }
        }
        if (!bestElement)
          return null;
        return bestScore >= this.getAnswerSimilarityThreshold() ? bestElement : null;
      });
      __publicField(this, "inferQuestionTypeByStructure", (questionElement, optionElements, optionTexts) => {
        if (this.hasCheckboxControl(questionElement, optionElements))
          return "1";
        if (this.isJudgementQuestion(questionElement, optionElements, optionTexts))
          return "3";
        if (this.hasRadioControl(questionElement, optionElements))
          return "0";
        if (optionElements.length > 0)
          return "0";
        if (this.hasFillBlankControl(questionElement))
          return "2";
        if (this.hasLongTextControl(questionElement))
          return "4";
        return "8";
      });
      __publicField(this, "hasFillBlankControl", (questionElement) => {
        const textInputs = Array.from(questionElement.querySelectorAll("input")).filter((input) => {
          const type = (input.getAttribute("type") || "text").toLowerCase();
          return ["", "text", "search", "number", "tel", "url", "email"].includes(type) && !input.disabled && !input.hidden;
        });
        const textareas = questionElement.querySelectorAll("textarea");
        const editableElements = questionElement.querySelectorAll('[contenteditable="true"]');
        const inputLikeElements = questionElement.querySelectorAll('input, textarea, [contenteditable="true"]');
        const hasBlankCue = Array.from(inputLikeElements).some((element) => {
          const attrs = [
            element.getAttribute("class") || "",
            element.getAttribute("name") || "",
            element.getAttribute("placeholder") || ""
          ].join(" ").toLowerCase();
          return attrs.includes("blank") || attrs.includes("填空");
        });
        const hasTextCue = /(?:___+|[{（\\[][^）}\\]]*[）}\\]])/.test(questionElement.textContent || "") && /填|空|blank/i.test(questionElement.textContent || "");
        return textInputs.length > 0 || editableElements.length > 0 || textareas.length > 1 || hasBlankCue || textareas.length === 1 && hasTextCue;
      });
      __publicField(this, "hasLongTextControl", (questionElement) => {
        return questionElement.querySelectorAll("textarea").length > 0;
      });
      __publicField(this, "hasCheckboxControl", (questionElement, optionElements) => {
        if (questionElement.querySelector('input[type="checkbox"]'))
          return true;
        return optionElements.some((optionElement) => this.hasControlCue(optionElement, ["checkbox", "multi", "multiple"]));
      });
      __publicField(this, "isJudgementQuestion", (questionElement, optionElements, optionTexts) => {
        if (optionTexts.length !== 2)
          return false;
        const judgementValues = optionTexts.map((optionText) => this.normalizeJudgementText(optionText));
        return judgementValues.includes("true") && judgementValues.includes("false") && this.hasJudgementStructureCue(questionElement, optionElements);
      });
      __publicField(this, "hasJudgementStructureCue", (questionElement, optionElements) => {
        const cueText = [
          this.collectElementCueText(questionElement),
          ...optionElements.map((optionElement) => this.collectElementCueText(optionElement))
        ].join(" ").toLowerCase();
        const judgementCues = [
          "judge",
          "judgement",
          "judgment",
          "truefalse",
          "true-false",
          "true_false",
          "判断",
          "对错"
        ];
        if (judgementCues.some((cue) => cueText.includes(cue)))
          return true;
        const optionAriaLabels = optionElements.map((optionElement) => {
          var _a;
          return [
            optionElement.getAttribute("aria-label"),
            (_a = optionElement.querySelector("[aria-label]")) == null ? void 0 : _a.getAttribute("aria-label")
          ].filter(Boolean).join(" ");
        }).join(" ");
        return optionAriaLabels.includes("对选择") && optionAriaLabels.includes("错选择");
      });
      __publicField(this, "hasRadioControl", (questionElement, optionElements) => {
        if (questionElement.querySelector('input[type="radio"]'))
          return true;
        return optionElements.some((optionElement) => this.hasControlCue(optionElement, ["radio"]));
      });
      __publicField(this, "hasControlCue", (optionElement, cues) => {
        const cueText = this.collectElementCueText(optionElement).toLowerCase();
        return cues.some((cue) => cueText.includes(cue));
      });
      __publicField(this, "collectElementCueText", (element) => {
        const cueAttributes = [
          "aria-label",
          "class",
          "data",
          "data-qtype",
          "data-question-type",
          "data-type",
          "name",
          "role",
          "type",
          "value"
        ];
        const cueElements = [
          element,
          ...Array.from(element.querySelectorAll(
            cueAttributes.map((attribute) => `[${attribute}]`).join(",")
          ))
        ];
        return cueElements.flatMap((cueElement) => cueAttributes.map((attribute) => cueElement.getAttribute(attribute) || "")).filter(Boolean).join(" ");
      });
      __publicField(this, "getAnswerSimilarityThreshold", () => {
        const configStore = useConfigStore();
        const thresholdParam = configStore.otherParams.params.find((param) => param.name.includes("相似"));
        const threshold = Number((thresholdParam == null ? void 0 : thresholdParam.value) ?? 85);
        if (!Number.isFinite(threshold))
          return 85;
        return Math.min(100, Math.max(0, threshold));
      });
      __publicField(this, "normalizeOptionMatchText", (text) => {
        return this.clean(this.removeHtml(text)).replace(/<img\s+src=["']?([^"'>\s]+).*?>/gi, "$1").replace(/&[a-z]+;/gi, "").replace(/^[a-z]\s*[.．、：\]]\s*/i, "").replace(/[\s\u00a0]+/g, "").replace(/[,.，。、：；？！'""''「」【】《》（）()\[\]{}【】<>]/g, "").toLowerCase();
      });
      __publicField(this, "calculateTextSimilarity", (left, right) => {
        if (!left || !right)
          return 0;
        if (left === right)
          return 100;
        const leftChars = Array.from(left);
        const rightChars = Array.from(right);
        const distance = this.getLevenshteinDistance(leftChars, rightChars);
        const maxLength = Math.max(leftChars.length, rightChars.length);
        return Math.round((1 - distance / maxLength) * 100);
      });
      __publicField(this, "getLevenshteinDistance", (left, right) => {
        const distances = Array.from({ length: left.length + 1 }, (_, index) => index);
        right.forEach((rightChar, rightIndex) => {
          let previous = distances[0];
          distances[0] = rightIndex + 1;
          left.forEach((leftChar, leftIndex) => {
            const current = distances[leftIndex + 1];
            distances[leftIndex + 1] = leftChar === rightChar ? previous : Math.min(previous, distances[leftIndex], current) + 1;
            previous = current;
          });
        });
        return distances[left.length];
      });
      __publicField(this, "normalizeJudgementText", (optionText) => {
        const text = this.clean(optionText).replace(/[.．、：\s]/g, "").toLowerCase();
        if (/^(a)?(正确|是|对|√|t|true|right)$/.test(text))
          return "true";
        if (/^(b)?(错误|否|错|×|x|f|false|wrong)$/.test(text))
          return "false";
        return "";
      });
      const logStore = useLogStore();
      const questionStore = useQuestionStore();
      this.addLog = logStore.addLog;
      this.addQuestion = questionStore.addQuestion;
    }
  }
  function extractRawTextFromElement(element) {
    if (!element)
      return "";
    const visit = (node) => {
      if (node.nodeType === 3 || node.nodeType === 4)
        return node.nodeValue || "";
      if (node.nodeType === 11) {
        return Array.from(node.childNodes).map(visit).join("");
      }
      if (node.nodeType !== 1)
        return "";
      const current = node;
      if (current.tagName.toLowerCase() === "img") {
        const src = current.getAttribute("src");
        return src == null ? "<img>" : `<img src="${src}">`;
      }
      if (current.tagName.toLowerCase() === "br")
        return "\n";
      return Array.from(current.childNodes).map(visit).join("");
    };
    return visit(element);
  }
  function extractRawTextFromHtml(html, ownerDocument) {
    if (html == null || html === "")
      return "";
    const documentRef = ownerDocument || (typeof document !== "undefined" ? document : null);
    if (!documentRef)
      return html;
    const container = documentRef.createElement("div");
    container.innerHTML = html;
    return extractRawTextFromElement(container);
  }
  function stripOptionLabel(text) {
    if (text == null)
      return "";
    return text.replace(/^\s*[A-Za-z]\s*[.．、:：\]\)]/, "");
  }
  function stripQuestionTypeLabel(text) {
    if (text == null)
      return "";
    return text.replace(/^\s*[【\[]\s*(?:(?:单选|多选|单项选择|多项选择|选择|判断|填空|简答|问答|论述|计算|分析|阅读理解|完形填空|排序|连线|其它|其他)题|名词解释)\s*[】\]]/u, "");
  }
  function extractJudgementToken(element, text = "") {
    const values = [text];
    if (element) {
      const collect = (candidate) => values.push(
        candidate.getAttribute("aria-label") || "",
        candidate.getAttribute("data") || "",
        candidate.getAttribute("data-value") || "",
        candidate.getAttribute("value") || "",
        candidate.getAttribute("title") || "",
        candidate.textContent || ""
      );
      collect(element);
      if (typeof element.querySelectorAll === "function") {
        element.querySelectorAll("[aria-label],[data],[data-value],[value],[title]").forEach(collect);
      }
    }
    const normalize = (value) => value.trim().toLowerCase().replace(/^[a-z0-9]+[.．、:：\]\)]\s*/i, "").replace(/[\s.．、:：()[\]{}]/g, "");
    for (const value of values) {
      const normalized = normalize(value);
      if (/^(?:正确|是|对|√|t|true|right)$/.test(normalized) || /^(?:正确|是|对)选择$/.test(normalized))
        return "对";
      if (/^(?:错误|否|错|×|x|f|false|wrong)$/.test(normalized) || /^(?:错误|否|错)选择$/.test(normalized))
        return "错";
    }
    return "";
  }
  class CxQuestionHandler extends BaseQuestionHandler {
    constructor(type, iframe) {
      super();
      __publicField(this, "type");
      __publicField(this, "init", async (isCurrent = () => true) => {
        var _a, _b;
        if (!isCurrent())
          return 0;
        this.questions = [];
        this.correctNum = 0;
        this.parseHtml();
        if (this.questions.length) {
          this.addLog(`成功解析到${this.questions.length}个题目`, "primary");
          for (const [index, parsedQuestion] of this.questions.entries()) {
            if (!isCurrent())
              return 0;
            const question = vue.reactive({ ...parsedQuestion, answerStatus: "searching" });
            this.addQuestion(question);
            const answerData = await getLlmAnswer(question);
            if (!isCurrent())
              return 0;
            const values = getAnswerValues(answerData, question);
            if (values == null ? void 0 : values.length) {
              question.answer = values;
              question.answerStatus = "success";
              this.fillQuestion(question);
              this.addLog(`第${index + 1}道题答题成功`, "success");
              this.correctNum += 1;
            } else {
              this.addLog(`第${index + 1}道题答题失败，<a class="log-action-link" href="#" data-log-action="show-answer-tab">点击查看原因</a>`, "danger");
              question.answerStatus = "error";
              question.answer = [((_b = answerData.error) == null ? void 0 : _b.message) || "未查询到答案"];
            }
          }
        } else
          this.addLog("未解析到题目，请进入正确页面", "danger");
        return this.questions.length ? this.correctNum / this.questions.length * 100 : 0;
      });
      __publicField(this, "parseHtml", () => {
        if (!this._document)
          return [];
        if (["zj"].includes(this.type)) {
          const questionElements = this._document.querySelectorAll(".TiMu");
          this.addQuestions(questionElements);
        } else if (["zy", "ks"].includes(this.type)) {
          const questionElements = this._document.querySelectorAll(".questionLi");
          this.addQuestions(questionElements);
        }
      });
      __publicField(this, "fillQuestion", (question) => {
        var _a, _b;
        if (!this._window)
          return;
        if (question.type === "0" || question.type === "1") {
          question.answer.forEach((answer) => {
            const optionElement = this.findMatchedOption(question.options, String(answer));
            if (!optionElement)
              return;
            if (["zj", "zy"].includes(this.type)) {
              if (optionElement.getAttribute("aria-checked") === "true")
                return;
              optionElement == null ? void 0 : optionElement.click();
            } else if (["ks"].includes(this.type)) {
              if (optionElement.querySelector(".check_answer"))
                return;
              if (optionElement.querySelector(".check_answer_dx"))
                return;
              optionElement == null ? void 0 : optionElement.click();
            }
          });
        } else if (question.type === "2") {
          const textareaElements = question.element.querySelectorAll("textarea");
          if (textareaElements.length === 0)
            return;
          textareaElements.forEach((textareaElement, index) => {
            try {
              const ueditor = this._window.UE.getEditor(textareaElement.name);
              ueditor.setContent(String(question.answer[index] ?? ""));
            } catch (e) {
              textareaElement.value = String(question.answer[index] ?? "");
            }
          });
        } else if (question.type === "3") {
          let answer = "true";
          if (String(question.answer[0]).match(/(^|,)(正确|是|对|√|T|ri|right|true)(,|$)/)) {
            answer = "true";
          } else if (String(question.answer[0]).match(/(^|,)(错误|否|错|×|F|wr|wrong|false)(,|$)/)) {
            answer = "false";
          }
          const trueOrFalse = {
            "true": "对",
            "false": "错"
          };
          for (const key in question.options) {
            if (["zj", "zy"].includes(this.type)) {
              if ((_a = question.options[key].getAttribute("aria-label")) == null ? void 0 : _a.includes(`${trueOrFalse[answer]}选择`)) {
                if (question.options[key].getAttribute("aria-checked") === "true")
                  return;
                (_b = question.options[key]) == null ? void 0 : _b.click();
              }
            } else if (["ks"].includes(this.type)) {
              const optionElement = question.options[key].querySelector(`span[data='${answer}']`);
              if (optionElement == null ? void 0 : optionElement.querySelector(".check_answer"))
                return;
              optionElement == null ? void 0 : optionElement.click();
            }
          }
        } else if (question.type === "4" || question.type === "6") {
          const textareaElement = question.element.querySelector("textarea");
          if (!textareaElement)
            return;
          const ueditor = this._window.UE.getEditor(textareaElement.name);
          ueditor.setContent(String(question.answer[0] ?? ""));
        } else
          ;
      });
      this.type = type;
      if (iframe) {
        this._document = iframe.contentDocument;
        this._window = iframe.contentWindow;
      }
    }
    extractOptions(optionElements, optionSelector) {
      const optionsObject = {};
      const optionTexts = [];
      optionElements.forEach((optionElement) => {
        var _a;
        const optionTextContent = this.removeHtml(((_a = optionElement.querySelector(optionSelector)) == null ? void 0 : _a.innerHTML) || "");
        optionsObject[optionTextContent] = optionElement;
        optionTexts.push(optionTextContent);
      });
      return [optionsObject, optionTexts];
    }
    addQuestions(questionElements) {
      questionElements.forEach((questionElement) => {
        var _a, _b, _c;
        let questionTitle = "";
        let optionElements = [];
        let optionsObject = {};
        let optionTexts = [];
        let searchStem = "";
        let searchOptions = [];
        let questionKind;
        if (["zy", "ks"].includes(this.type)) {
          const titleElement = ((_a = questionElement == null ? void 0 : questionElement.querySelector("h3")) == null ? void 0 : _a.innerHTML) || "";
          const colorShallowElement = ((_b = questionElement.querySelector(".colorShallow")) == null ? void 0 : _b.outerHTML) || "";
          const titleSource = titleElement.split(colorShallowElement || "")[1] || "";
          questionTitle = this.removeHtml(titleSource);
          const searchTitleSource = colorShallowElement ? titleSource : titleElement;
          searchStem = stripQuestionTypeLabel(
            extractRawTextFromHtml(searchTitleSource, this._document)
          );
          const matchedOptionElements = questionElement.querySelectorAll(".answerBg");
          optionElements = Array.from(matchedOptionElements);
          [optionsObject, optionTexts] = this.extractOptions(matchedOptionElements, ".answer_p");
          searchOptions = Array.from(matchedOptionElements).map((optionElement) => stripOptionLabel(extractRawTextFromElement(optionElement.querySelector(".answer_p"))));
        } else if (["zj"].includes(this.type)) {
          const titleSource = ((_c = questionElement.querySelector(".fontLabel")) == null ? void 0 : _c.innerHTML) || "";
          questionTitle = this.removeHtml(titleSource);
          searchStem = stripQuestionTypeLabel(
            extractRawTextFromHtml(titleSource, this._document)
          );
          const matchedOptionElements = questionElement.querySelectorAll('[class*="before-after"]');
          optionElements = Array.from(matchedOptionElements);
          [optionsObject, optionTexts] = this.extractOptions(matchedOptionElements, ".fl.after");
          searchOptions = Array.from(matchedOptionElements).map((optionElement) => stripOptionLabel(extractRawTextFromElement(optionElement.querySelector(".fl.after"))));
        }
        questionKind = this.inferQuestionTypeByStructure(questionElement, optionElements, optionTexts);
        if (questionKind === "3") {
          searchOptions = optionElements.map((optionElement, index) => extractJudgementToken(optionElement, searchOptions[index] || optionTexts[index]) || searchOptions[index]);
        }
        this.questions.push({
          element: questionElement,
          type: questionKind,
          title: this.clean(questionTitle),
          optionsText: optionTexts,
          options: optionsObject,
          searchText: { stem: searchStem, options: searchOptions },
          answer: [],
          workType: this.type,
          refer: this._window.location.href
        });
      });
    }
  }
  const useCxChapterLogic = () => {
    const logStore = useLogStore();
    const questionStore = useQuestionStore();
    const init = () => {
      if (!configStore.enabled) {
        logStore.addLog("脚本已停用（可在「设置」中勾选「启用脚本」恢复）", "warning");
        return;
      }
      const currentUrl = window.location.href;
      if (!currentUrl.includes("&mooc2=1")) {
        window.location.href = currentUrl + "&mooc2=1";
      }
      questionStore.clearQuestion();
      logStore.addLog(`检测到用户进入到章节学习页面`, "primary");
      logStore.addLog(`正在解析任务点，请稍等5-10秒（如果长时间没有反应，请刷新页面）`, "warning");
    };
    const configStore = useConfigStore();
    const HOME_TAB_NAME = "0";
    const ANSWER_TAB_NAME2 = "1";
    const PDF_COMPLETION_WAIT_SECONDS = 5;
    let runningIframeDocumentTasks = /* @__PURE__ */ new WeakMap();
    let processedIframeDocuments = /* @__PURE__ */ new WeakSet();
    let currentPage;
    let chapterController = new AbortController();
    let currentWatchIframeTaskId = 0;
    let disposed = false;
    const isFinishedTask = (iframe) => {
      var _a;
      let element = iframe;
      while (element) {
        const className = typeof element.className === "string" ? element.className : "";
        if (className.split(/\s+/).includes("ans-job-finished") || ((_a = element.classList) == null ? void 0 : _a.contains("ans-job-finished")))
          return true;
        element = element.parentElement;
      }
      return false;
    };
    const getChapterPage = () => {
      const iframe = document.documentElement.querySelector("iframe");
      return {
        url: window.location.href,
        iframe,
        src: (iframe == null ? void 0 : iframe.src) || "",
        document: (iframe == null ? void 0 : iframe.contentDocument) || null
      };
    };
    const isSamePage = (left, right) => left.url === right.url && left.iframe === right.iframe && left.src === right.src && left.document === right.document;
    const onRootIframeLoad = () => processIframeTask(true);
    const processIframeTask = (force = false) => {
      var _a, _b;
      if (disposed)
        return;
      if (!configStore.enabled)
        return;
      const page = getChapterPage();
      const changed = !currentPage || !isSamePage(currentPage, page);
      if (!changed && !force)
        return;
      if (changed) {
        (_a = currentPage == null ? void 0 : currentPage.iframe) == null ? void 0 : _a.removeEventListener("load", onRootIframeLoad);
        chapterController.abort();
        chapterController = new AbortController();
        ++currentWatchIframeTaskId;
        runningIframeDocumentTasks = /* @__PURE__ */ new WeakMap();
        processedIframeDocuments = /* @__PURE__ */ new WeakSet();
        questionStore.clearQuestion();
        configStore.menuIndex = HOME_TAB_NAME;
        currentPage = page;
        (_b = page.iframe) == null ? void 0 : _b.addEventListener("load", onRootIframeLoad);
      }
      if (!page.iframe || !page.document || page.document.readyState !== "complete" || page.document.URL === "about:blank")
        return;
      const signal = chapterController.signal;
      watchIframe(document.documentElement, {
        signal,
        // 直接检查页面，避免在轮询发现切换之前，旧请求已返回。
        isCurrent: () => !signal.aborted && isSamePage(page, getChapterPage())
      });
    };
    const watchIframe = (documentElement, context) => {
      const thisTaskId = ++currentWatchIframeTaskId;
      const allIframes = IframeUtils.getAllNestedIframes(documentElement);
      (async () => {
        var _a;
        try {
          for (const iframe of allIframes) {
            if (thisTaskId !== currentWatchIframeTaskId || !context.isCurrent())
              return;
            await processIframe(iframe, context);
          }
        } catch (error) {
          if (context.isCurrent())
            logStore.addLog(`任务处理失败：${String(error)}`, "danger");
          return;
        }
        if (thisTaskId !== currentWatchIframeTaskId || !context.isCurrent())
          return;
        logStore.addLog(`本页任务点已全部完成，正前往下一章节`, "success");
        if (!getCxParamValue("是否自动下一章节")) {
          logStore.addLog(`已经关闭自动下一章节，在设置里可更改`, "danger");
          return;
        }
        const nextBtn = documentElement.querySelector("#prevNextFocusNext");
        if (!nextBtn || nextBtn.style.display === "none") {
          logStore.addLog(`已经到达最后一章节，无法跳转`, "danger");
          return;
        }
        await sleep(configStore.otherParams.params[0].value);
        if (thisTaskId !== currentWatchIframeTaskId || !context.isCurrent())
          return;
        (_a = document.querySelector(".jb_btn.jb_btn_92.fr.fs14.nextChapter")) == null ? void 0 : _a.click();
      })();
    };
    const processMedia = async (mediaType, iframe, iframeDocument, context) => {
      return new Promise((resolve, reject) => {
        logStore.addLog(`发现一个${mediaType}，正在解析`, "warning");
        logStore.addLog(`正在尝试播放${mediaType}，请稍等5s`, "primary");
        let isExecuted = false;
        let settled = false;
        let mediaElement = null;
        const mediaStartedAt = Date.now();
        const MEDIA_MAX_WAIT_MS = 6e4;
        const MEDIA_PLAY_RETRY_LIMIT = 5;
        let playFailures = 0;
        let notifiedWaiting = false;
        let notifiedAutoplay = false;
        let mediaRate = Math.min(16, Math.max(0.25, Number(getCxParamValue("视频速率")) || 1));
        let mediaRateRejected = mediaRate === 1;
        let rateRejectSignals = 0;
        const MEDIA_RATE_REJECT_LIMIT = 2;
        const hasMediaSource = () => !!mediaElement && !!(mediaElement.currentSrc || mediaElement.getAttribute("src") || mediaElement.readyState > 0);
        const armMedia = () => {
          try {
            mediaElement.muted = true;
            mediaElement.setAttribute("muted", "");
            if ("playsInline" in mediaElement)
              mediaElement.playsInline = true;
          } catch (_) {
          }
        };
        const applyRate = () => {
          if (!mediaElement || mediaRateRejected)
            return;
          try {
            if (mediaElement.playbackRate !== mediaRate)
              mediaElement.playbackRate = mediaRate;
            if (mediaElement.defaultPlaybackRate !== mediaRate)
              mediaElement.defaultPlaybackRate = mediaRate;
          } catch (_) {
          }
        };
        // Some players forbid speed-up: they reset playbackRate and/or pause the media.
        // Fighting them makes the video unplayable, so after a couple of signals we give
        // up on the rate and continue at 1x.
        const giveUpOnRate = (reason) => {
          if (mediaRateRejected)
            return;
          mediaRateRejected = true;
          mediaRate = 1;
          try {
            mediaElement.playbackRate = 1;
            mediaElement.defaultPlaybackRate = 1;
          } catch (_) {
          }
          logStore.addLog(`该页面禁止倍速（${reason}），已恢复 1 倍速继续播放`, "danger");
        };
        const noteRateRejected = (reason) => {
          if (mediaRateRejected)
            return;
          rateRejectSignals += 1;
          if (rateRejectSignals >= MEDIA_RATE_REJECT_LIMIT)
            giveUpOnRate(reason);
        };
        const onRateChange = () => {
          if (mediaRateRejected || !mediaElement)
            return;
          if (mediaElement.playbackRate !== mediaRate)
            noteRateRejected("倍速被播放器重置");
        };
        const cleanup = () => {
          clearInterval(intervalId2);
          mediaElement == null ? void 0 : mediaElement.removeEventListener("pause", onPause);
          mediaElement == null ? void 0 : mediaElement.removeEventListener("ended", ended);
          mediaElement == null ? void 0 : mediaElement.removeEventListener("ratechange", onRateChange);
          context.signal.removeEventListener("abort", finish);
        };
        const finish = () => {
          if (settled)
            return;
          settled = true;
          cleanup();
          mediaElement == null ? void 0 : mediaElement.pause();
          resolve();
        };
        const fail = (error) => {
          if (settled)
            return;
          settled = true;
          cleanup();
          reject(error);
        };
        const resume = async () => {
          await sleep(configStore.otherParams.params[0].value);
          if (settled)
            return;
          if (!context.isCurrent())
            return finish();
          if (isFinishedTask(iframe))
            return finish();
          try {
            armMedia();
            applyRate();
            await (mediaElement == null ? void 0 : mediaElement.play());
            applyRate();
          } catch (error) {
            fail(error);
          }
        };
        const onPause = () => {
          if (!settled && !mediaRateRejected && mediaElement && mediaRate !== 1)
            noteRateRejected("播放被播放器暂停");
          resume();
        };
        const ended = () => {
          if (context.isCurrent())
            logStore.addLog(`${mediaType}已播放完成`, "success");
          finish();
        };
        const intervalId2 = setInterval(async () => {
          if (settled)
            return;
          if (!configStore.enabled) {
            logStore.addLog(`脚本已停用，暂停${mediaType}播放`, "warning");
            return finish();
          }
          if (!context.isCurrent())
            return finish();
          if (!isExecuted)
            mediaElement = iframeDocument.documentElement.querySelector(mediaType);
          if (isFinishedTask(iframe)) {
            logStore.addLog(`${mediaType}任务点已完成，跳过`, "success");
            return finish();
          }
          if (mediaElement && !isExecuted) {
            if (Date.now() - mediaStartedAt > MEDIA_MAX_WAIT_MS) {
              logStore.addLog(`${mediaType}播放超时，跳过该任务点`, "danger");
              return finish();
            }
            if (!hasMediaSource()) {
              if (!notifiedWaiting) {
                notifiedWaiting = true;
                logStore.addLog(`等待${mediaType}加载完成…`, "primary");
              }
              return;
            }
            isExecuted = true;
            try {
              mediaElement.pause();
              armMedia();
              await mediaElement.play();
              if (settled)
                return;
              if (!context.isCurrent())
                return finish();
              if (isFinishedTask(iframe))
                return finish();
              logStore.addLog("播放成功", "success");
              applyRate();
              if (mediaRate !== 1)
                logStore.addLog(`${mediaType}已设置为${mediaRate}倍速`, "primary");
              mediaElement.addEventListener("ratechange", onRateChange);
              mediaElement.addEventListener("pause", onPause);
              mediaElement.addEventListener("ended", ended);
              if (mediaElement.ended)
                ended();
            } catch (error) {
              isExecuted = false;
              if ((error == null ? void 0 : error.name) === "NotAllowedError") {
                if (!notifiedAutoplay) {
                  notifiedAutoplay = true;
                  logStore.addLog("浏览器拦截了自动播放：请点击本页面任意位置，脚本会自动重试", "danger");
                }
                return;
              }
              playFailures += 1;
              if (playFailures >= MEDIA_PLAY_RETRY_LIMIT)
                return fail(error);
              logStore.addLog(`${mediaType}播放失败（${(error == null ? void 0 : error.name) || "未知错误"}），正在重试 ${playFailures}/${MEDIA_PLAY_RETRY_LIMIT}`, "warning");
            }
          }
          if (mediaElement && isExecuted && !mediaRateRejected)
            applyRate();
        }, 2500);
        context.signal.addEventListener("abort", finish, { once: true });
        if (!context.isCurrent())
          finish();
      });
    };
    const processWork = async (iframe, iframeDocument, iframeWindow, context) => {
      if (!context.isCurrent())
        return;
      configStore.menuIndex = ANSWER_TAB_NAME2;
      logStore.addLog("发现一个作业，正在解析", "warning");
      if (iframeDocument.documentElement.innerText.includes("已完成") || iframeDocument.documentElement.innerText.includes("待批阅")) {
        logStore.addLog("作业已经完成，跳过", "success");
        return;
      }
      await decrypt(iframeDocument);
      logStore.addLog(`题目列表获取成功`, "primary");
      const correctRate = await new CxQuestionHandler("zj", iframe).init(context.isCurrent);
      if (!context.isCurrent())
        return;
      iframeWindow.alert = () => {
      };
      if (getCxParamValue("章节作业自动提交")) {
        logStore.addLog("自动提交已开启，尝试提交", "primary");
        if (correctRate < Number(configStore.otherParams.params[1].value)) {
          logStore.addLog(`正确率小于${configStore.otherParams.params[1].value}%，暂存`, "danger");
          await callPageApi(iframeWindow, "noSubmit");
        } else {
          logStore.addLog(`正确率大于${configStore.otherParams.params[1].value}%，提交`, "success");
          if (await callPageApi(iframeWindow, "btnBlueSubmit")) {
            if (!context.isCurrent())
              return;
            await sleep(configStore.otherParams.params[0].value / 2);
            if (!context.isCurrent())
              return;
            await callPageApi(iframeWindow, "submitCheckTimes");
            if (!context.isCurrent())
              return;
            logStore.addLog("提交成功", "success");
          }
        }
      } else {
        logStore.addLog("未开启自动提交，暂存", "primary");
        await callPageApi(iframeWindow, "noSubmit");
      }
      if (context.isCurrent())
        logStore.addLog("作业已完成", "success");
    };
    const processPpt = async (iframeWindow, context) => {
      logStore.addLog("发现一个文档，正在解析", "warning");
      const document2 = iframeWindow.document;
      const viewerFrame = document2.querySelector("#panView");
      const scrollViewer = () => {
        var _a, _b, _c;
        const viewerDocument = (viewerFrame == null ? void 0 : viewerFrame.contentDocument) || document2;
        const viewerWindow = (viewerFrame == null ? void 0 : viewerFrame.contentDocument) ? viewerFrame.contentWindow : iframeWindow;
        const top = Math.max(
          ((_a = viewerDocument.body) == null ? void 0 : _a.scrollHeight) || 0,
          ((_b = viewerDocument.documentElement) == null ? void 0 : _b.scrollHeight) || 0,
          ((_c = viewerDocument.scrollingElement) == null ? void 0 : _c.scrollHeight) || 0
        );
        viewerWindow == null ? void 0 : viewerWindow.scrollTo({ top, behavior: "smooth" });
      };
      scrollViewer();
      const configuredInterval = Number(configStore.otherParams.params[0].value);
      await sleep(Math.max(
        PDF_COMPLETION_WAIT_SECONDS,
        Number.isFinite(configuredInterval) ? configuredInterval : 0
      ));
      if (!context.isCurrent())
        return;
      scrollViewer();
      logStore.addLog("阅读完成", "success");
    };
    const processBook = async (iframeWindow) => {
      logStore.addLog("发现一个电子书，正在解析", "warning");
      const endAttr = typeof iframeWindow.getFrameAttr === "function" ? iframeWindow.getFrameAttr("end") : null;
      if (endAttr == null)
        logStore.addLog("页面未提供 getFrameAttr()，可能是学习通改版了，已跳过本次操作", "danger");
      else
        await callPageApi(_unsafeWindow.top, "onchangepage", endAttr);
      logStore.addLog("阅读完成", "success");
      return Promise.resolve();
    };
    const runIframeDocumentTask = (iframeDocument, task) => {
      const processed = processedIframeDocuments;
      const running = runningIframeDocumentTasks;
      if (processed.has(iframeDocument))
        return Promise.resolve();
      const runningTask = running.get(iframeDocument);
      if (runningTask)
        return runningTask;
      const taskPromise = Promise.resolve().then(task).then(() => {
        processed.add(iframeDocument);
      }).finally(() => {
        running.delete(iframeDocument);
      });
      running.set(iframeDocument, taskPromise);
      return taskPromise;
    };
    const waitIframeLoad = async (iframe, context) => {
      return new Promise((resolve) => {
        const finish = () => {
          clearInterval(intervalId2);
          context.signal.removeEventListener("abort", finish);
          resolve();
        };
        const check = () => {
          var _a;
          if (!context.isCurrent() || !iframe.isConnected || ((_a = iframe.contentDocument) == null ? void 0 : _a.readyState) === "complete")
            finish();
        };
        const intervalId2 = setInterval(check, 500);
        context.signal.addEventListener("abort", finish, { once: true });
        check();
      });
    };
    const processIframeBody = async (iframe, iframeSrc, iframeDocument, iframeWindow, context) => {
      var _a, _b;
      if (!context.isCurrent())
        return;
      if (!configStore.enabled)
        return;
      if (iframeSrc.includes("javascript:"))
        return Promise.resolve();
      if (isFinishedTask(iframe)) {
        configStore.menuIndex = iframeSrc.includes("api/work") ? ANSWER_TAB_NAME2 : HOME_TAB_NAME;
        if (iframeSrc.includes("video") || iframeSrc.includes("audio")) {
          (_a = iframeDocument.documentElement.querySelector("video, audio")) == null ? void 0 : _a.pause();
        }
        logStore.addLog("发现一个已完成任务点", "success");
      } else {
        if (iframeSrc.includes("api/work")) {
          return processWork(iframe, iframeDocument, iframeWindow, context);
        }
        if (getCxParamValue("只答题，不做其他")) {
          logStore.addLog("只答题，不做其他已开启，可在设置里调整", "primary");
        } else {
          const ansJobIcon = (_b = iframe.parentElement) == null ? void 0 : _b.querySelector(".ans-job-icon");
          if (ansJobIcon) {
            configStore.menuIndex = HOME_TAB_NAME;
            if (iframeSrc.includes("video")) {
              return processMedia("video", iframe, iframeDocument, context);
            } else if (iframeSrc.includes("audio")) {
              return processMedia("audio", iframe, iframeDocument, context);
            } else if (["ppt", "doc", "pptx", "docx", "pdf"].some((type) => iframeSrc.includes("modules/" + type))) {
              return processPpt(iframeWindow, context);
            } else if (["innerbook"].some((type) => iframeSrc.includes("modules/" + type))) {
              return processBook(iframeWindow);
            }
          }
        }
      }
      return Promise.resolve();
    };
    const processIframe = async (iframe, context) => {
      if (iframe.src.includes("javascript:"))
        return Promise.resolve();
      if (!iframe.contentDocument || !iframe.contentWindow)
        return Promise.resolve();
      await waitIframeLoad(iframe, context);
      if (!context.isCurrent() || !iframe.isConnected)
        return;
      const iframeSrc = iframe.src;
      const iframeDocument = iframe.contentDocument;
      const iframeWindow = iframe.contentWindow;
      if (!iframeDocument || !iframeWindow)
        return Promise.resolve();
      const iframeContext = {
        signal: context.signal,
        isCurrent: () => context.isCurrent() && iframe.isConnected && iframe.contentDocument === iframeDocument && iframe.src === iframeSrc
      };
      return runIframeDocumentTask(iframeDocument, () => processIframeBody(
        iframe,
        iframeSrc,
        iframeDocument,
        iframeWindow,
        iframeContext
      ));
    };
    init();
    processIframeTask();
    const intervalId = setInterval(processIframeTask, 500);
    const observer = new MutationObserver(() => processIframeTask());
    observer.observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["src"] });
    vue.onBeforeUnmount(() => {
      var _a;
      disposed = true;
      clearInterval(intervalId);
      observer.disconnect();
      (_a = currentPage == null ? void 0 : currentPage.iframe) == null ? void 0 : _a.removeEventListener("load", onRootIframeLoad);
      chapterController.abort();
    });
  };
  const useCxWorkLogic = async () => {
    if (!useConfigStore().enabled)
      return;
    const logStore = useLogStore();
    const questionStore = useQuestionStore();
    questionStore.clearQuestion();
    logStore.addLog(`进入新版作业页面，开始准备答题`, "primary");
    logStore.addLog(`正在解析题目, 请等待5s`, "warning");
    await decrypt(document);
    await new CxQuestionHandler("zy").init();
  };
  const NEXT_STEP_TEXT = "下一步";
  const isVisibleElement = (element) => {
    const style2 = window.getComputedStyle(element);
    return style2.display !== "none" && style2.visibility !== "hidden" && style2.opacity !== "0" && element.getClientRects().length > 0;
  };
  const clickNextStepButton = () => {
    const examDocument = _unsafeWindow.document || document;
    const buttons = Array.from(examDocument.querySelectorAll(".nextDiv a"));
    const nextStepButton = buttons.find((button) => {
      var _a, _b;
      return isVisibleElement(button) && (((_a = button.getAttribute("onclick")) == null ? void 0 : _a.includes("topreview")) || ((_b = button.textContent) == null ? void 0 : _b.trim()) === NEXT_STEP_TEXT);
    });
    if (!nextStepButton)
      return false;
    nextStepButton.click();
    return true;
  };
  const useCxExamLogic = async () => {
    if (!useConfigStore().enabled)
      return;
    const logStore = useLogStore();
    const configStore = useConfigStore();
    const questionStore = useQuestionStore();
    questionStore.clearQuestion();
    logStore.addLog("进入新版考试页面，开始准备答题", "primary");
    logStore.addLog("正在解析题目，请稍等", "warning");
    await decrypt(document);
    await new CxQuestionHandler("ks").init();
    if (getCxParamValue("是否自动切换")) {
      logStore.addLog("自动切换已开启，正在前往下一题", "success");
      await sleep(configStore.otherParams.params[0].value);
      if (clickNextStepButton()) {
        logStore.addLog("已经到最后一题，正在点击下一步", "success");
        return;
      }
      await callPageApi(_unsafeWindow, "getTheNextQuestion", 1);
    } else {
      logStore.addLog("已经关闭自动切换，在设置里可更改", "danger");
    }
  };
  class ZhsQuestionHandler extends BaseQuestionHandler {
    constructor() {
      super();
      __publicField(this, "init", async () => {
        var _a, _b, _c, _d;
        this.questions = [];
        this.parseHtml();
        if (this.questions.length) {
          this.addLog(`成功解析到${this.questions.length}个题目`, "primary");
          for (const [index, parsedQuestion] of this.questions.entries()) {
            const question = vue.reactive({ ...parsedQuestion, answerStatus: "searching" });
            this.addQuestion(question);
            const answerData = await getLlmAnswer(question);
            const values = getAnswerValues(answerData, question);
            if (values == null ? void 0 : values.length) {
              question.answer = values;
              question.answerStatus = "success";
              this.fillQuestion(question);
              this.addLog(`第${index + 1}道题答题成功`, "success");
            } else {
              this.addLog(`第${index + 1}道题答题失败，<a class="log-action-link" href="#" data-log-action="show-answer-tab">点击查看原因</a>`, "danger");
              question.answerStatus = "error";
              question.answer = [((_b = answerData.error) == null ? void 0 : _b.message) || "未查询到答案"];
            }
            await ((_d = (_c = this._document) == null ? void 0 : _c.querySelectorAll(".switch-btn-box > button")[1]) == null ? void 0 : _d.click());
          }
        } else
          this.addLog("未解析到题目，请刷新重试或进入答题页面", "danger");
      });
      __publicField(this, "parseHtml", () => {
        if (!this._document)
          return [];
        const questionElements = this._document.querySelectorAll(".examPaper_subject");
        this.addQuestions(questionElements);
      });
      __publicField(this, "fillQuestion", (question) => {
        if (!this._window)
          return;
        if (question.type === "单选题" || question.type === "多选题") {
          question.answer.forEach((answer) => {
            const optionElement = this.findMatchedOption(question.options, String(answer));
            if (optionElement)
              this.clickOptionIfNeeded(optionElement);
          });
        } else if (question.type === "判断题") {
          let answer = "true";
          if (String(question.answer[0]).match(/(^|,)(正确|是|对|√|T|ri|right|true)(,|$)/)) {
            answer = "true";
          } else if (String(question.answer[0]).match(/(^|,)(错误|否|错|×|F|wr|wrong|false)(,|$)/)) {
            answer = "false";
          }
          for (const key in question.options) {
            if (this.normalizeJudgementText(key) === answer) {
              this.clickOptionIfNeeded(question.options[key]);
            }
          }
        } else if (question.type === "填空题" || question.type === "简答题") {
          this.fillTextQuestion(question);
        } else
          ;
      });
    }
    extractOptions(optionElements, optionSelector) {
      const optionsObject = {};
      const optionTexts = [];
      optionElements.forEach((optionElement) => {
        var _a;
        const optionTextContent = this.removeHtml(((_a = optionElement.querySelector(optionSelector)) == null ? void 0 : _a.innerHTML) || "");
        optionsObject[optionTextContent] = optionElement;
        optionTexts.push(optionTextContent);
      });
      return [optionsObject, optionTexts];
    }
    addQuestions(questionElements) {
      questionElements.forEach((questionElement) => {
        var _a, _b;
        const titleElement = questionElement == null ? void 0 : questionElement.querySelector(".subject_describe div,.smallStem_describe p");
        const shadowDom = (_b = (_a = titleElement == null ? void 0 : titleElement.__Ivue__) == null ? void 0 : _a._data) == null ? void 0 : _b.shadowDom;
        const questionTitle = (shadowDom == null ? void 0 : shadowDom.textContent) || (titleElement == null ? void 0 : titleElement.textContent) || "";
        let searchStem = "";
        if (shadowDom && typeof shadowDom === "object" && "nodeType" in shadowDom) {
          searchStem = extractRawTextFromElement(shadowDom);
        } else if (typeof shadowDom === "string") {
          searchStem = extractRawTextFromHtml(shadowDom, this._document);
        } else if (typeof (shadowDom == null ? void 0 : shadowDom.innerHTML) === "string") {
          searchStem = extractRawTextFromHtml(shadowDom.innerHTML, this._document);
        }
        const optionElements = questionElement == null ? void 0 : questionElement.querySelectorAll(".label");
        const [optionsObject, optionTexts] = this.extractOptions(optionElements, ".node_detail");
        const questionKind = this.inferQuestionTypeByStructure(questionElement, Array.from(optionElements), optionTexts);
        let searchOptions = Array.from(optionElements).map((optionElement) => stripOptionLabel(extractRawTextFromElement(optionElement.querySelector(".node_detail"))));
        if (questionKind === "3") {
          searchOptions = Array.from(optionElements).map((optionElement, index) => extractJudgementToken(optionElement, searchOptions[index] || optionTexts[index]) || searchOptions[index]);
        }
        const questionType = this.mapQuestionType(questionKind);
        this.questions.push({
          element: questionElement,
          type: questionType,
          title: questionTitle,
          optionsText: optionTexts,
          options: optionsObject,
          searchText: { stem: searchStem, options: searchOptions },
          answer: [],
          workType: "zhs",
          refer: this._window.location.href
        });
      });
    }
    mapQuestionType(type) {
      const typeMap = {
        "0": "单选题",
        "1": "多选题",
        "2": "填空题",
        "3": "判断题",
        "4": "简答题",
        "8": "其他"
      };
      return typeMap[type] || "其他";
    }
    clickOptionIfNeeded(optionElement) {
      const input = optionElement.querySelector("input");
      const className = optionElement.getAttribute("class") || "";
      if (input == null ? void 0 : input.checked)
        return;
      if (optionElement.getAttribute("aria-checked") === "true")
        return;
      if (/\b(active|checked|selected|is-checked)\b/.test(className))
        return;
      if (optionElement.querySelector(".active, .checked, .selected, .is-checked"))
        return;
      optionElement.click();
    }
    fillTextQuestion(question) {
      const fields = [
        ...Array.from(question.element.querySelectorAll("input")),
        ...Array.from(question.element.querySelectorAll("textarea")),
        ...Array.from(question.element.querySelectorAll('[contenteditable="true"]'))
      ].filter((field) => {
        if (field instanceof HTMLInputElement) {
          const type = (field.getAttribute("type") || "text").toLowerCase();
          return ["", "text", "search", "number", "tel", "url", "email"].includes(type) && !field.disabled && !field.hidden;
        }
        return true;
      });
      fields.forEach((field, index) => {
        const answer = String(question.answer[index] ?? question.answer[0] ?? "");
        if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
          field.value = String(answer);
          field.dispatchEvent(new Event("input", { bubbles: true }));
          field.dispatchEvent(new Event("change", { bubbles: true }));
          return;
        }
        field.textContent = answer;
        field.dispatchEvent(new Event("input", { bubbles: true }));
      });
    }
  }
  const hookError = () => {
    console.log("hookError");
    const oldset = _unsafeWindow.setInterval;
    const oldout = _unsafeWindow.setTimeout;
    _unsafeWindow.setInterval = function(...args) {
      const err = new Error();
      if (err.stack && err.stack.indexOf("checkoutNotTrustScript") !== -1) {
        return -1;
      }
      return oldset.call(this, ...args);
    };
    _unsafeWindow.setTimeout = function(...args) {
      const err = new Error();
      if (err.stack && err.stack.indexOf("checkoutNotTrustScript") !== -1) {
        return -1;
      }
      return oldout.call(this, ...args);
    };
  };
  class XMLHttpRequestInterceptor {
    constructor(urlList, callback) {
      __publicField(this, "xhr");
      __publicField(this, "originalOpen");
      __publicField(this, "originalSend");
      __publicField(this, "callback");
      this.xhr = new XMLHttpRequest();
      this.originalOpen = this.xhr.open;
      this.originalSend = this.xhr.send;
      this.callback = callback;
      this.intercept(urlList);
    }
    intercept(urlList) {
      const self = this;
      XMLHttpRequest.prototype.open = function(method, url2) {
        self.originalOpen.apply(this, [method, url2]);
        const shouldIntercept = urlList.some((urlItem) => url2.includes(urlItem));
        if (shouldIntercept) {
          self.callback(this.responseText);
        }
      };
    }
  }
  const useZhsAnswerLogic = async () => {
    if (!useConfigStore().enabled)
      return;
    hookError();
    const logStore = useLogStore();
    const questionStore = useQuestionStore();
    questionStore.clearQuestion();
    logStore.addLog(`进入答题页面，开始准备答题`, "primary");
    logStore.addLog(`正在解析题目, 请等待5s`, "warning");
    new XMLHttpRequestInterceptor(["gateway/t/v1/answer/hasAnswer"], async () => {
      await sleep(1);
      _unsafeWindow.document.getSelection = function() {
        return {
          removeAllRanges: function() {
          }
        };
      };
      _unsafeWindow.document.onselectstart = true;
      _unsafeWindow.document.oncontextmenu = true;
      _unsafeWindow.document.oncut = true;
      _unsafeWindow.document.oncopy = true;
      _unsafeWindow.document.onpaste = true;
      await new ZhsQuestionHandler().init();
      return true;
    });
  };
  const DEFAULT_CARD_WIDTH = "310px";
  const ANSWER_CARD_WIDTH = "630px";
  const ANSWER_TAB_NAME = "1";
  const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
    __name: "Index",
    emits: ["customEvent"],
    setup(__props, { emit: __emit }) {
      var _a;
      const isShow = vue.ref(false);
      const configStore = useConfigStore();
      const logStore = useLogStore();
      const questionStore = useQuestionStore();
      const SETTINGS_TAB_NAME = "2";
      const saveState = vue.ref("");
      let saveTimer = null;
      const handleSave = () => {
        try {
          persistConfig(configStore);
          saveState.value = "saved";
        } catch (error) {
          saveState.value = "error";
        }
        clearTimeout(saveTimer);
        saveTimer = setTimeout(() => {
          saveState.value = "";
        }, 2500);
      };
      const emit = __emit;
      const url2 = window.location.href;
      const cardWidth = vue.computed(() => configStore.menuIndex === ANSWER_TAB_NAME ? ANSWER_CARD_WIDTH : DEFAULT_CARD_WIDTH);
      (_a = document.querySelector("li>a.experience:not([onclick])")) == null ? void 0 : _a.click();
      logStore.addLog("脚本加载成功，正在解析网页", "primary");
      logStore.addLog("请不要多个脚本同时使用，会有脚本冲突问题", "warning");
      logStore.addLog("如果脚本出现异常，请用谷歌、火狐等浏览器", "warning");
      const urlLogicPairs = [
        { keyword: "/mycourse/studentstudy", logic: useCxChapterLogic },
        { keyword: "/mooc2/work/dowork", logic: useCxWorkLogic },
        { keyword: "/exam-ans/exam", logic: useCxExamLogic },
        {
          keyword: "mycourse/stu?courseid",
          logic: () => {
            logStore.addLog("该页面无任务，请进入章节或答题页面使用", "error");
          }
        },
        { keyword: "/stuExamWeb.html", logic: useZhsAnswerLogic }
      ];
      const updateVisible = (visible) => {
        isShow.value = visible;
        emit("customEvent", visible);
      };
      const executeLogicByUrl = (currentUrl) => {
        const matchedPair = urlLogicPairs.find(({ keyword }) => currentUrl.includes(keyword));
        if (matchedPair) {
          matchedPair.logic();
          updateVisible(true);
          return;
        }
        updateVisible(false);
      };
      executeLogicByUrl(url2);
      const tabs = vue.computed(() => [
        {
          name: "0",
          label: "首页",
          component: _sfc_main$8,
          props: { logList: logStore.logList }
        },
        {
          name: ANSWER_TAB_NAME,
          label: "答题",
          component: _sfc_main$6,
          props: { questionList: questionStore.questionList }
        },
        {
          name: "2",
          label: "设置",
          component: _sfc_main$7,
          props: { globalConfig: configStore }
        }
      ]);
      return (_ctx, _cache) => {
        const _component_hc_tab_pane = vue.resolveComponent("hc-tab-pane");
        const _component_hc_tabs = vue.resolveComponent("hc-tabs");
        const _component_hc_button = vue.resolveComponent("hc-button");
        return vue.openBlock(), vue.createElementBlock("div", {
          style: vue.normalizeStyle({ width: cardWidth.value }),
          class: "card_content"
        }, [
          vue.createVNode(_component_hc_tabs, {
            modelValue: vue.unref(configStore).menuIndex,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).menuIndex = $event),
            class: "demo-tabs"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs.value, (tab) => {
                return vue.openBlock(), vue.createBlock(_component_hc_tab_pane, {
                  key: tab.name,
                  name: tab.name,
                  label: tab.label
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(tab.component), vue.mergeProps({ ref_for: true }, tab.props), null, 16))
                  ]),
                  _: 2
                }, 1032, ["name", "label"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["modelValue"]),
          vue.unref(configStore).menuIndex === SETTINGS_TAB_NAME ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: "card-save"
          }, [
            vue.createVNode(_component_hc_button, {
              type: "primary",
              size: "small",
              onClick: handleSave
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode("保存设置")
              ]),
              _: 1
            }),
            saveState.value === "saved" ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: "save-hint"
            }, "已保存")) : vue.createCommentVNode("", true),
            saveState.value === "error" ? (vue.openBlock(), vue.createElementBlock("span", {
              key: 1,
              class: "save-hint save-hint--error"
            }, "保存失败，请重试")) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true)
        ], 4);
      };
    }
  });
  const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "ZoomButtons",
    emits: ["toggleZoom"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const toggleZoom = (value) => {
        emit("toggleZoom", value);
      };
      return (_ctx, _cache) => {
        const _component_hc_icon = vue.resolveComponent("hc-icon");
        return vue.openBlock(), vue.createElementBlock("div", {
          onMousedown: _cache[2] || (_cache[2] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createVNode(_component_hc_icon, {
            onClick: _cache[0] || (_cache[0] = ($event) => toggleZoom(true)),
            class: "zoom-icon",
            size: "small"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(minus_default))
            ]),
            _: 1
          }),
          vue.createVNode(_component_hc_icon, {
            onClick: _cache[1] || (_cache[1] = ($event) => toggleZoom(false)),
            class: "zoom-icon is-spaced",
            size: "small"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(full_screen_default))
            ]),
            _: 1
          })
        ], 32);
      };
    }
  });
  const _hoisted_1 = { class: "overlay" };
  const _hoisted_2 = { class: "title" };
  const _hoisted_3 = { class: "minus" };
  const WINDOW_EDGE_OFFSET = 11;
  const PANEL_WIDTH = 334;
  const MINIMIZED_PANEL_HEIGHT = 35;
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "layout",
    setup(__props) {
      const isShow = vue.ref(false);
      const configStore = useConfigStore();
      // Title comes from the script metadata, not from the stored config: a stale
      // stored name would otherwise win over the default.
      const currentPlatformName = vue.computed(() => {
        const info = getScriptInfo();
        return info.name || configStore.platformParams[configStore.platformName].name;
      });
      // Persist on any config change. The store is a plain reactive object, so a
      // deep watch is safe and cheap on a plain reactive object.
      vue.watch(configStore, (newVal) => {
        persistConfig(newVal);
      }, { deep: true });
      const isDragging = vue.ref(false);
      const offsetX = vue.ref(0);
      const offsetY = vue.ref(0);
      const moveStyle = vue.ref({
        left: configStore.position.x,
        top: configStore.position.y
      });
      const handleVisibleChange = (visible) => {
        isShow.value = visible;
      };
      const startDrag = (event) => {
        isDragging.value = true;
        const header = event.currentTarget;
        offsetX.value = event.clientX - header.getBoundingClientRect().left;
        offsetY.value = event.clientY - header.getBoundingClientRect().top;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", endDrag);
      };
      const drag = (event) => {
        if (!isDragging.value)
          return;
        const x = event.clientX - offsetX.value;
        const y = event.clientY - offsetY.value;
        const nextLeft = `${x - WINDOW_EDGE_OFFSET}px`;
        const nextTop = `${y - WINDOW_EDGE_OFFSET}px`;
        moveStyle.value = {
          left: nextLeft,
          top: nextTop
        };
        configStore.position.x = nextLeft;
        configStore.position.y = nextTop;
        if (x < 0) {
          moveStyle.value.left = "0px";
          configStore.position.x = "0px";
        }
        if (y < 0) {
          moveStyle.value.top = "0px";
          configStore.position.y = "0px";
        }
        if (x > window.innerWidth - PANEL_WIDTH) {
          const maxLeft = `${window.innerWidth - PANEL_WIDTH}px`;
          moveStyle.value.left = maxLeft;
          configStore.position.x = maxLeft;
        }
        if (y > window.innerHeight - MINIMIZED_PANEL_HEIGHT) {
          const maxTop = `${window.innerHeight - MINIMIZED_PANEL_HEIGHT}px`;
          moveStyle.value.top = maxTop;
          configStore.position.y = maxTop;
        }
      };
      const endDrag = () => {
        isDragging.value = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", endDrag);
      };
      return (_ctx, _cache) => {
        const _component_hc_icon = vue.resolveComponent("hc-icon");
        const _component_hc_tooltip = vue.resolveComponent("hc-tooltip");
        const _component_hc_text = vue.resolveComponent("hc-text");
        const _component_hc_divider = vue.resolveComponent("hc-divider");
        const _component_hc_card = vue.resolveComponent("hc-card");
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          style: vue.normalizeStyle(moveStyle.value),
          class: "main-page"
        }, [
          vue.withDirectives(vue.createElementVNode("div", _hoisted_1, null, 512), [
            [vue.vShow, isDragging.value]
          ]),
          vue.createVNode(_component_hc_card, {
            "close-on-click-modal": false,
            "lock-scroll": false,
            modal: false,
            "show-close": false,
            "modal-class": "modal"
          }, {
            header: vue.withCtx(() => [
              vue.createElementVNode("div", {
                class: "card-header",
                onMousedown: startDrag
              }, [
                vue.createElementVNode("div", _hoisted_2, [
                  vue.createElementVNode("span", null, vue.toDisplayString(currentPlatformName.value), 1),
                  vue.createVNode(_component_hc_tooltip, {
                    teleported: "",
                    effect: "dark",
                    placement: "top-start",
                    content: "<span>注意事项：<br/>请尽量使用新版，不要使用旧版。<br/></span>",
                    "raw-content": ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_hc_icon, {
                        class: "warning-icon",
                        size: "small"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(warning_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode(_sfc_main$2, {
                  onToggleZoom: _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).isMinus = $event)
                })
              ], 32)
            ]),
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createVNode(_sfc_main$3, { onCustomEvent: handleVisibleChange }, null, 512), [
                [vue.vShow, !vue.unref(configStore).isMinus]
              ]),
              vue.withDirectives(vue.createElementVNode("div", _hoisted_3, [
                vue.createVNode(_component_hc_text, {
                  type: "info",
                  size: "small"
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("已最小化，点击上方按钮恢复")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_hc_divider, {
                  class: "compact-divider",
                  "border-style": "dashed"
                })
              ], 512), [
                [vue.vShow, vue.unref(configStore).isMinus]
              ])
            ]),
            _: 1
          })
        ], 4)), [
          [vue.vShow, isShow.value]
        ]);
      };
    }
  });
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      const platformMatchers = [
        { keyword: "chaoxing", platformName: "cx" },
        { keyword: "zhihuishu", platformName: "zhs" }
      ];
      const configStore = useConfigStore();
      const url2 = window.location.href;
      const matchedPlatform = platformMatchers.find(({ keyword }) => url2.includes(keyword));
      if (matchedPlatform) {
        configStore.platformName = matchedPlatform.platformName;
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$1);
      };
    }
  });
  const HC_ACTIVE_TAB = "hcActiveTab";
  const HcText = vue.defineComponent({
    name: "HcText",
    props: { type: { default: "" }, size: { default: "" } },
    setup(__p, { slots }) {
      return () => vue.h("span", { class: __p.type ? "hc-text hc-text--" + __p.type : "hc-text" }, slots.default ? slots.default() : void 0);
    }
  });
  const HcDivider = vue.defineComponent({
    name: "HcDivider",
    props: { borderStyle: { default: "solid" }, contentPosition: { default: "center" } },
    setup(__p, { slots }) {
      return () => slots.default ? vue.h("div", { class: "hc-divider hc-divider--titled" }, slots.default()) : vue.h("div", { class: "hc-divider hc-divider--line" });
    }
  });
  const HcButton = vue.defineComponent({
    name: "HcButton",
    props: { type: { default: "" }, size: { default: "" }, disabled: { default: false }, plain: { default: false }, round: { default: false } },
    setup(__p, { slots, attrs }) {
      return () => vue.h("button", vue.mergeProps({
        type: "button",
        class: __p.type === "primary" ? "hc-btn hc-btn--primary" : "hc-btn"
      }, attrs), slots.default ? slots.default() : void 0);
    }
  });
  const HcIcon = vue.defineComponent({
    name: "HcIcon",
    props: { size: { default: "" }, color: { default: "" } },
    setup(__p, { slots, attrs }) {
      return () => vue.h("span", vue.mergeProps({ class: "hc-icon" }, attrs), slots.default ? slots.default() : void 0);
    }
  });
  const HcScrollbar = vue.defineComponent({
    name: "HcScrollbar",
    props: { maxHeight: { default: "" }, always: { default: false }, minSize: { default: 20 }, native: { default: false } },
    setup(__p, { slots, attrs, expose }) {
      const wrap = vue.ref(null);
      expose({
        wrapRef: wrap,
        setScrollTop: (value) => {
          if (wrap.value)
            wrap.value.scrollTop = value;
        },
        scrollTo: (options) => {
          if (!wrap.value)
            return;
          wrap.value.scrollTop = typeof options === "number" ? options : options && options.top || 0;
        }
      });
      return () => vue.h("div", vue.mergeProps({
        ref: wrap,
        class: "hc-scroll",
        style: __p.maxHeight ? { maxHeight: typeof __p.maxHeight === "number" ? __p.maxHeight + "px" : __p.maxHeight } : null
      }, attrs), slots.default ? slots.default() : void 0);
    }
  });
  const HcCheckbox = vue.defineComponent({
    name: "HcCheckbox",
    props: { modelValue: { default: false }, label: { default: "" }, size: { default: "" }, disabled: { default: false } },
    emits: ["update:modelValue", "change"],
    setup(__p, { emit, slots }) {
      const hasText = !!(slots.default || __p.label);
      return () => vue.h("label", { class: "hc-check" }, [
        vue.h("input", {
          type: "checkbox",
          checked: !!__p.modelValue,
          disabled: !!__p.disabled,
          onChange: (event) => {
            emit("update:modelValue", event.target.checked);
            emit("change", event.target.checked);
          }
        }),
        hasText ? vue.h("span", null, slots.default ? slots.default() : __p.label) : null
      ]);
    }
  });
  const HcInput = vue.defineComponent({
    name: "HcInput",
    props: {
      modelValue: { default: "" },
      type: { default: "text" },
      showPassword: { default: false },
      placeholder: { default: "" },
      size: { default: "" },
      autocomplete: { default: "off" },
      disabled: { default: false }
    },
    emits: ["update:modelValue", "input", "change", "focus", "blur"],
    setup(__p, { emit, attrs }) {
      const revealed = vue.ref(false);
      return () => {
        const realType = __p.type === "password" && __p.showPassword && revealed.value ? "text" : __p.type;
        const control = vue.h("input", vue.mergeProps({
          class: "hc-input",
          type: realType,
          value: __p.modelValue == null ? "" : __p.modelValue,
          placeholder: __p.placeholder,
          autocomplete: __p.autocomplete,
          disabled: !!__p.disabled,
          onInput: (event) => {
            emit("update:modelValue", event.target.value);
            emit("input", event.target.value);
          },
          onChange: (event) => emit("change", event.target.value),
          onFocus: (event) => emit("focus", event),
          onBlur: (event) => emit("blur", event)
        }, attrs));
        if (__p.type !== "password" || !__p.showPassword)
          return control;
        return vue.h("span", { class: "hc-input-wrap" }, [
          control,
          vue.h("span", {
            class: "hc-input-eye",
            onClick: () => {
              revealed.value = !revealed.value;
            }
          }, revealed.value ? "隐藏" : "显示")
        ]);
      };
    }
  });
  const HcInputNumber = vue.defineComponent({
    name: "HcInputNumber",
    props: {
      modelValue: { default: 0 },
      min: { default: void 0 },
      max: { default: void 0 },
      step: { default: 1 },
      controlsPosition: { default: "" },
      size: { default: "" },
      disabled: { default: false }
    },
    emits: ["update:modelValue", "change"],
    setup(__p, { emit }) {
      const clamp = (value) => {
        let next = value;
        if (__p.min != null && next < __p.min)
          next = __p.min;
        if (__p.max != null && next > __p.max)
          next = __p.max;
        return next;
      };
      return () => vue.h("input", {
        class: "hc-input hc-input--num",
        type: "number",
        value: __p.modelValue,
        min: __p.min,
        max: __p.max,
        step: __p.step,
        disabled: !!__p.disabled,
        onInput: (event) => {
          const parsed = Number(event.target.value);
          if (event.target.value === "" || !Number.isFinite(parsed))
            return;
          emit("update:modelValue", parsed);
        },
        onChange: (event) => {
          const parsed = Number(event.target.value);
          const next = Number.isFinite(parsed) ? clamp(parsed) : __p.min != null ? __p.min : 0;
          emit("update:modelValue", next);
          emit("change", next);
        }
      });
    }
  });
  const HcFormItem = vue.defineComponent({
    name: "HcFormItem",
    props: { label: { default: "" }, required: { default: false }, size: { default: "" }, prop: { default: "" } },
    setup(__p, { slots }) {
      // A <label> root means clicking anywhere on the row toggles/focuses the control.
      return () => vue.h("label", { class: "hc-field" }, [
        vue.h("span", { class: "hc-label" }, __p.label),
        vue.h("span", { class: "hc-field-control" }, slots.default ? slots.default() : void 0)
      ]);
    }
  });
  const HcEmpty = vue.defineComponent({
    name: "HcEmpty",
    props: { description: { default: "" }, image: { default: "" }, imageSize: { default: 0 } },
    setup(__p, { slots }) {
      return () => vue.h("div", { class: "hc-empty" }, slots.default ? slots.default() : __p.description);
    }
  });
  const HcTooltip = vue.defineComponent({
    name: "HcTooltip",
    props: {
      content: { default: "" },
      rawContent: { default: false },
      effect: { default: "dark" },
      placement: { default: "top" },
      teleported: { default: false },
      showAfter: { default: 0 },
      disabled: { default: false }
    },
    setup(__p, { slots }) {
      return () => vue.h("span", { class: "hc-tip" }, [
        slots.default ? slots.default() : null,
        vue.h("span", { class: "hc-tip-body", innerHTML: __p.content })
      ]);
    }
  });
  const HcCard = vue.defineComponent({
    name: "HcCard",
    props: {
      closeOnClickModal: { default: false },
      lockScroll: { default: false },
      modal: { default: false },
      showClose: { default: false },
      modalClass: { default: "" },
      shadow: { default: "always" },
      bodyStyle: { default: void 0 }
    },
    setup(__p, { slots }) {
      return () => vue.h("div", { class: "hc-panel" }, [
        vue.h("div", { class: "hc-panel-header" }, slots.header ? slots.header() : null),
        vue.h("div", { class: "hc-panel-body" }, slots.default ? slots.default() : null)
      ]);
    }
  });
  const HcTabPane = vue.defineComponent({
    name: "HcTabPane",
    props: { name: { default: "" }, label: { default: "" }, disabled: { default: false }, lazy: { default: false }, closable: { default: false } },
    setup(__p, { slots }) {
      const active = vue.inject(HC_ACTIVE_TAB, vue.ref(""));
      return () => vue.h("div", {
        class: "hc-pane",
        style: active.value === __p.name ? null : { display: "none" }
      }, slots.default ? slots.default() : void 0);
    }
  });
  const HcTabs = vue.defineComponent({
    name: "HcTabs",
    props: { modelValue: { default: "" }, type: { default: "" }, stretch: { default: false }, closable: { default: false }, editable: { default: false } },
    emits: ["update:modelValue", "tabChange", "tabClick"],
    setup(__p, { slots, emit }) {
      vue.provide(HC_ACTIVE_TAB, vue.computed(() => __p.modelValue));
      const flatten = (nodes, out) => {
        (nodes || []).forEach((node) => {
          if (!node)
            return;
          if (node.type === vue.Fragment)
            flatten(node.children, out);
          else
            out.push(node);
        });
        return out;
      };
      return () => {
        const panes = flatten(slots.default ? slots.default() : [], []);
        const bar = vue.h("div", { class: "hc-tabs" }, panes.map((pane) => {
          const paneProps = pane.props || {};
          const name = paneProps.name;
          return vue.h("button", {
            key: name,
            type: "button",
            class: __p.modelValue === name ? "hc-tab is-active" : "hc-tab",
            onClick: () => {
              emit("update:modelValue", name);
              emit("tabClick", pane);
              emit("tabChange", name);
            }
          }, paneProps.label || "");
        }));
        return vue.h("div", { class: "hc-tabs-root" }, [
          bar,
          vue.h("div", { class: "hc-panes" }, slots.default ? slots.default() : [])
        ]);
      };
    }
  });
  const registerPanelComponents = (app) => {
    app.component("hc-card", HcCard);
    app.component("hc-tabs", HcTabs);
    app.component("hc-tab-pane", HcTabPane);
    app.component("hc-text", HcText);
    app.component("hc-divider", HcDivider);
    app.component("hc-button", HcButton);
    app.component("hc-icon", HcIcon);
    app.component("hc-scrollbar", HcScrollbar);
    app.component("hc-checkbox", HcCheckbox);
    app.component("hc-input", HcInput);
    app.component("hc-input-number", HcInputNumber);
    app.component("hc-form-item", HcFormItem);
    app.component("hc-empty", HcEmpty);
    app.component("hc-tooltip", HcTooltip);
  };

  const byokCss = `
    .main-page .setting{box-sizing:border-box;margin-top:0;max-height:min(440px,calc(100vh - 155px));max-height:min(440px,calc(100dvh - 155px));overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;padding:0 6px 8px 0;scrollbar-width:thin}
    .main-page .byok-settings{box-sizing:border-box;min-width:0;margin:2px 0 12px}
    .main-page .byok-title{margin:0 0 9px;font-size:13px;font-weight:600;line-height:1.5;color:#263a55;white-space:nowrap}
    .main-page .byok-field{min-width:0;margin:0 0 9px}
    .main-page .byok-label{display:block;margin:0 0 3px;font-size:12px;font-weight:500;line-height:1.5;color:#4e5969}
    .main-page .byok-native-select{box-sizing:border-box;display:block;width:100%;height:32px;padding:0 9px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#303133;font:inherit;font-size:12px;line-height:32px}
    .main-page .byok-native-select:focus-visible{outline:2px solid #409eff;outline-offset:1px}
    .main-page .byok-custom-input{margin-top:6px}
    .main-page .byok-help{margin:4px 0 0;color:#697586;font-size:11px;line-height:1.45;overflow-wrap:anywhere}
    .main-page .byok-privacy{margin:8px 0 0}
    .main-page .byok-buy{margin:6px 0 0}
    .main-page .byok-link{color:#176ae5;text-decoration:none}
    .main-page .byok-link:hover{text-decoration:underline}
    .main-page .save-hint{color:#15803d;font-size:12px;line-height:1.5}
    .main-page .save-hint--error{color:#c73e38}
  `;
  const layoutCss = ".main-page{--app-font-family:\"Geist\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";z-index:100003;position:fixed;color:#1f2329;font-family:var(--app-font-family);font-size:14px;line-height:1.5715;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.main-page *{box-sizing:border-box}.main-page input,.main-page button,.main-page select,.main-page textarea{font-family:inherit;font-size:inherit;letter-spacing:0}.main-page .overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1001}.main-page .hc-panel{background:#fff;border-radius:4px;box-shadow:0 12px 32px 4px rgba(0,0,0,.04),0 8px 20px rgba(0,0,0,.08);overflow:hidden}.main-page .hc-panel-header{background-color:#1f71e0;color:#fff;padding:7px 10px 7px 16px;margin:0}.main-page .hc-panel-body{padding:0 16px 20px}.main-page .card-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;margin:0;padding:0;cursor:move;user-select:none}.main-page .card-header .title{font-size:14px;display:flex;align-items:center;justify-content:center;font-weight:500;min-width:0}.main-page .warning-icon{margin-left:5px;display:inline-flex;align-items:center;cursor:help}.main-page .zoom-icon{cursor:pointer;display:inline-flex;align-items:center}.main-page .zoom-icon.is-spaced{margin-left:8px}.main-page .hc-icon{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;font-size:14px;line-height:1}.main-page .hc-icon>svg{width:1em;height:1em;fill:currentColor;overflow:hidden}.main-page .minus{margin:6px 10px -12px 0;color:#909399;font-size:12px}.main-page .hc-tip{position:relative;display:inline-flex;align-items:center}.main-page .hc-tip-body{position:absolute;left:0;top:calc(100% + 6px);z-index:20;display:none;width:max-content;max-width:230px;padding:7px 9px;border-radius:4px;background:#303133;color:#fff;font-size:12px;line-height:1.5;white-space:normal;box-shadow:0 2px 12px rgba(0,0,0,.2)}.main-page .hc-tip:hover .hc-tip-body{display:block}.main-page .card_content{position:relative}.main-page .hc-tabs{display:flex;align-items:center;margin:0 0 14px -12px;border-bottom:1px solid #e4e7ed}.main-page .hc-tab{appearance:none;border:0;background:none;cursor:pointer;position:relative;height:34px;padding:0 12px;color:#4e5969;font-size:13px;font-weight:400;line-height:34px}.main-page .hc-tab:hover{color:#176ae5}.main-page .hc-tab.is-active{color:#176ae5;font-weight:500}.main-page .hc-tab.is-active:after{content:\"\";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;background-color:#176ae5}.main-page .hc-pane{min-width:0}.main-page .card-save{position:absolute;top:7px;right:0;z-index:2;display:flex;align-items:center;gap:6px}.main-page .hc-btn{appearance:none;display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 11px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#606266;font-size:12px;line-height:1;cursor:pointer;transition:background-color .15s,border-color .15s,color .15s}.main-page .hc-btn:hover{border-color:#c6e2ff;background:#ecf5ff;color:#409eff}.main-page .hc-btn--primary{background:#409eff;border-color:#409eff;color:#fff}.main-page .hc-btn--primary:hover{background:#66b1ff;border-color:#66b1ff;color:#fff}.main-page .hc-text{font-size:12px}.main-page .hc-text--primary{color:#409eff}.main-page .hc-text--success{color:#67c23a}.main-page .hc-text--warning{color:#e6a23c}.main-page .hc-text--danger{color:#f56c6c}.main-page .hc-text--error{color:#f56c6c}.main-page .hc-text--info{color:#909399}.main-page .hc-divider{margin:0}.main-page .hc-divider--line{border-top:1px dashed #e4e7ed;margin:6px 0}.main-page .hc-divider--titled{display:flex;align-items:center;gap:8px;margin:14px 0 6px;color:#303133;font-size:13px;font-weight:400}.main-page .hc-divider--titled:before,.main-page .hc-divider--titled:after{content:\"\";flex:1;border-top:1px dashed #e4e7ed}.main-page .hc-input-wrap{position:relative;display:block;width:100%;min-width:0}.main-page .hc-select{display:block;width:100%;min-width:0;height:26px;padding:0 4px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#303133;font-size:12px;outline:none;cursor:pointer;text-align:center;text-align-last:center}.main-page .hc-select:focus{border-color:#409eff}.main-page .hc-input{display:block;width:100%;min-width:0;height:32px;padding:0 11px;border:1px solid #dcdfe6;border-radius:4px;background:#fff;color:#303133;font-size:12px;line-height:32px;outline:none;transition:border-color .15s}.main-page .hc-input:hover{border-color:#c0c4cc}.main-page .hc-input:focus{border-color:#409eff}.main-page .hc-input::placeholder{color:#a8abb2}.main-page .hc-input[type=password]{letter-spacing:1px}.main-page .hc-input--num{padding-right:6px}.main-page .hc-input-eye{position:absolute;right:8px;top:50%;transform:translateY(-50%);cursor:pointer;color:#909399;font-size:11px;user-select:none}.main-page .hc-input-eye:hover{color:#409eff}.main-page .hc-check{display:inline-flex;align-items:center;gap:6px;cursor:pointer;color:#4e5969;font-size:12px;line-height:1.5;user-select:none}.main-page .hc-check input{width:14px;height:14px;margin:0;accent-color:#409eff;cursor:pointer}.main-page .hc-field{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:6px 0 0}.main-page .hc-field>.hc-label{flex:0 0 auto;color:#4e5969;font-size:12px;line-height:1.5}.main-page .hc-field-control{display:flex;align-items:center;justify-content:center;flex:0 0 128px;width:128px;min-width:0}.main-page .hc-field-control .hc-input{height:26px;line-height:26px;text-align:center}.main-page .hc-scroll{overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#c7d7eb transparent}.main-page .script-home{padding-top:2px}.main-page .log{max-height:230px}.main-page .log-item{padding:0 0 2px}.main-page .log-time{color:#909399;font-size:12px}.main-page .log-msg{font-size:12px;white-space:normal;overflow-wrap:anywhere}.main-page .log-divider{border-top:1px dashed #e4e7ed;margin:0}.main-page .log-action-link{color:#176ae5;cursor:pointer;text-decoration:none}.main-page .log-action-link:hover{color:#409eff;text-decoration:underline}.main-page .question_table{width:625px}.main-page .answer-legend{display:flex;flex-wrap:wrap;align-items:center;gap:6px 16px;padding:10px 2px 8px;font-size:11px;line-height:18px}.main-page .answer-legend>span{display:inline-flex;align-items:center;gap:5px}.main-page .answer-legend>span:before{content:\"\";width:6px;height:6px;border-radius:50%;background:currentColor}.main-page .answer-result{line-height:1.7;overflow-wrap:anywhere}.main-page .answer-result--success{color:#15803d}.main-page .answer-result--searching{color:#a15c08}.main-page .answer-result--pending{color:#697586}.main-page .answer-result--error{color:#c73e38}.main-page .hc-table-wrap{max-height:400px;overflow-y:auto;scrollbar-width:thin}.main-page .hc-table{width:100%;table-layout:fixed;border-collapse:collapse;font-size:12px}.main-page .hc-table th{padding:8px 10px;background:#fafafa;color:#909399;font-weight:400;text-align:left;border-bottom:1px solid #ebeef5}.main-page .hc-table td{padding:8px 10px;color:#606266;vertical-align:top;border-bottom:1px solid #ebeef5;overflow-wrap:anywhere}.main-page .hc-table tbody tr:nth-child(even) td{background:#fafafa}.main-page .hc-table .col-idx{width:40px;color:#909399;text-align:center}.main-page .hc-empty{padding:38px 0;color:#909399;font-size:13px;text-align:center}.main-page .setting{box-sizing:border-box;margin-top:0;max-height:min(440px,calc(100vh - 155px));max-height:min(440px,calc(100dvh - 155px));overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;padding:0 6px 8px 0;scrollbar-width:thin}.main-page .setting-section-title{color:#303133;font-size:13px}";
  const hookWebpack = () => {
    let originCall = _unsafeWindow.Function.prototype.call;
    _unsafeWindow.Function.prototype.call = function(...args) {
      var _a, _b;
      const result = originCall.apply(this, args);
      if (((_b = (_a = args[0]) == null ? void 0 : _a.a) == null ? void 0 : _b.version) === "2.5.0") {
        const install = args[1].exports.a.install;
        args[1].exports.a.install = function(...installArgs) {
          installArgs[0].mixin({
            mounted: function() {
              this.$el["__Ivue__"] = this;
            }
          });
          return install.apply(this, installArgs);
        };
        return result;
      }
      return result;
    };
  };
  const BOOTSTRAP_INTERVAL = 100;
  const COMPLETE_READY_STATE = "complete";
  const url = _unsafeWindow.location.href;
  if (url.includes("zhihuishu.com")) {
    hookWebpack();
    hookError();
  }
  const createStyleSheet = (cssText) => {
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssText);
    return sheet;
  };
  const createShadowMountNode = () => {
    const shadowHost = document.createElement("div");
    const mountNode = document.createElement("div");
    const shadowRoot = shadowHost.attachShadow({ mode: "closed" });
    document.body.append(shadowHost);
    shadowRoot.appendChild(mountNode);
    shadowRoot.adoptedStyleSheets = [
      createStyleSheet(layoutCss + byokCss)
    ];
    return mountNode;
  };
  const mountApp = () => {
    const app = vue.createApp(_sfc_main);
    registerPanelComponents(app);
    app.mount(createShadowMountNode());
  };
  const timer = setInterval(() => {
    if (document.readyState !== COMPLETE_READY_STATE)
      return;
    clearInterval(timer);
    mountApp();
  }, BOOTSTRAP_INTERVAL);

})(Vue, md5);
