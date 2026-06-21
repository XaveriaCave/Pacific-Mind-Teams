(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ad={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function Uy(){if(dx)return el;dx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return el.Fragment=e,el.jsx=i,el.jsxs=i,el}var hx;function Ly(){return hx||(hx=1,Ad.exports=Uy()),Ad.exports}var E=Ly(),wd={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function Oy(){if(px)return bt;px=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=g&&R[g]||R["@@iterator"],typeof R=="function"?R:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,y={};function x(R,K,be){this.props=R,this.context=K,this.refs=y,this.updater=be||T}x.prototype.isReactComponent={},x.prototype.setState=function(R,K){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,K,"setState")},x.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function D(){}D.prototype=x.prototype;function O(R,K,be){this.props=R,this.context=K,this.refs=y,this.updater=be||T}var z=O.prototype=new D;z.constructor=O,L(z,x.prototype),z.isPureReactComponent=!0;var W=Array.isArray;function I(){}var H={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function G(R,K,be){var Re=be.ref;return{$$typeof:r,type:R,key:K,ref:Re!==void 0?Re:null,props:be}}function ne(R,K){return G(R.type,K,R.props)}function k(R){return typeof R=="object"&&R!==null&&R.$$typeof===r}function Q(R){var K={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(be){return K[be]})}var me=/\/+/g;function ue(R,K){return typeof R=="object"&&R!==null&&R.key!=null?Q(""+R.key):K.toString(36)}function X(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(I,I):(R.status="pending",R.then(function(K){R.status==="pending"&&(R.status="fulfilled",R.value=K)},function(K){R.status==="pending"&&(R.status="rejected",R.reason=K)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function w(R,K,be,Re,Oe){var ce=typeof R;(ce==="undefined"||ce==="boolean")&&(R=null);var Ee=!1;if(R===null)Ee=!0;else switch(ce){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(R.$$typeof){case r:case e:Ee=!0;break;case b:return Ee=R._init,w(Ee(R._payload),K,be,Re,Oe)}}if(Ee)return Oe=Oe(R),Ee=Re===""?"."+ue(R,0):Re,W(Oe)?(be="",Ee!=null&&(be=Ee.replace(me,"$&/")+"/"),w(Oe,K,be,"",function(Ve){return Ve})):Oe!=null&&(k(Oe)&&(Oe=ne(Oe,be+(Oe.key==null||R&&R.key===Oe.key?"":(""+Oe.key).replace(me,"$&/")+"/")+Ee)),K.push(Oe)),1;Ee=0;var _e=Re===""?".":Re+":";if(W(R))for(var Pe=0;Pe<R.length;Pe++)Re=R[Pe],ce=_e+ue(Re,Pe),Ee+=w(Re,K,be,ce,Oe);else if(Pe=S(R),typeof Pe=="function")for(R=Pe.call(R),Pe=0;!(Re=R.next()).done;)Re=Re.value,ce=_e+ue(Re,Pe++),Ee+=w(Re,K,be,ce,Oe);else if(ce==="object"){if(typeof R.then=="function")return w(X(R),K,be,Re,Oe);throw K=String(R),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function P(R,K,be){if(R==null)return R;var Re=[],Oe=0;return w(R,Re,"","",function(ce){return K.call(be,ce,Oe++)}),Re}function B(R){if(R._status===-1){var K=R._result;K=K(),K.then(function(be){(R._status===0||R._status===-1)&&(R._status=1,R._result=be)},function(be){(R._status===0||R._status===-1)&&(R._status=2,R._result=be)}),R._status===-1&&(R._status=0,R._result=K)}if(R._status===1)return R._result.default;throw R._result}var $=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},ee={map:P,forEach:function(R,K,be){P(R,function(){K.apply(this,arguments)},be)},count:function(R){var K=0;return P(R,function(){K++}),K},toArray:function(R){return P(R,function(K){return K})||[]},only:function(R){if(!k(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return bt.Activity=v,bt.Children=ee,bt.Component=x,bt.Fragment=i,bt.Profiler=l,bt.PureComponent=O,bt.StrictMode=s,bt.Suspense=m,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,bt.__COMPILER_RUNTIME={__proto__:null,c:function(R){return H.H.useMemoCache(R)}},bt.cache=function(R){return function(){return R.apply(null,arguments)}},bt.cacheSignal=function(){return null},bt.cloneElement=function(R,K,be){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var Re=L({},R.props),Oe=R.key;if(K!=null)for(ce in K.key!==void 0&&(Oe=""+K.key),K)!A.call(K,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&K.ref===void 0||(Re[ce]=K[ce]);var ce=arguments.length-2;if(ce===1)Re.children=be;else if(1<ce){for(var Ee=Array(ce),_e=0;_e<ce;_e++)Ee[_e]=arguments[_e+2];Re.children=Ee}return G(R.type,Oe,Re)},bt.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},bt.createElement=function(R,K,be){var Re,Oe={},ce=null;if(K!=null)for(Re in K.key!==void 0&&(ce=""+K.key),K)A.call(K,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Oe[Re]=K[Re]);var Ee=arguments.length-2;if(Ee===1)Oe.children=be;else if(1<Ee){for(var _e=Array(Ee),Pe=0;Pe<Ee;Pe++)_e[Pe]=arguments[Pe+2];Oe.children=_e}if(R&&R.defaultProps)for(Re in Ee=R.defaultProps,Ee)Oe[Re]===void 0&&(Oe[Re]=Ee[Re]);return G(R,ce,Oe)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(R){return{$$typeof:p,render:R}},bt.isValidElement=k,bt.lazy=function(R){return{$$typeof:b,_payload:{_status:-1,_result:R},_init:B}},bt.memo=function(R,K){return{$$typeof:h,type:R,compare:K===void 0?null:K}},bt.startTransition=function(R){var K=H.T,be={};H.T=be;try{var Re=R(),Oe=H.S;Oe!==null&&Oe(be,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(I,$)}catch(ce){$(ce)}finally{K!==null&&be.types!==null&&(K.types=be.types),H.T=K}},bt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},bt.use=function(R){return H.H.use(R)},bt.useActionState=function(R,K,be){return H.H.useActionState(R,K,be)},bt.useCallback=function(R,K){return H.H.useCallback(R,K)},bt.useContext=function(R){return H.H.useContext(R)},bt.useDebugValue=function(){},bt.useDeferredValue=function(R,K){return H.H.useDeferredValue(R,K)},bt.useEffect=function(R,K){return H.H.useEffect(R,K)},bt.useEffectEvent=function(R){return H.H.useEffectEvent(R)},bt.useId=function(){return H.H.useId()},bt.useImperativeHandle=function(R,K,be){return H.H.useImperativeHandle(R,K,be)},bt.useInsertionEffect=function(R,K){return H.H.useInsertionEffect(R,K)},bt.useLayoutEffect=function(R,K){return H.H.useLayoutEffect(R,K)},bt.useMemo=function(R,K){return H.H.useMemo(R,K)},bt.useOptimistic=function(R,K){return H.H.useOptimistic(R,K)},bt.useReducer=function(R,K,be){return H.H.useReducer(R,K,be)},bt.useRef=function(R){return H.H.useRef(R)},bt.useState=function(R){return H.H.useState(R)},bt.useSyncExternalStore=function(R,K,be){return H.H.useSyncExternalStore(R,K,be)},bt.useTransition=function(){return H.H.useTransition()},bt.version="19.2.7",bt}var mx;function cp(){return mx||(mx=1,wd.exports=Oy()),wd.exports}var ke=cp(),Rd={exports:{}},tl={},Cd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function Py(){return gx||(gx=1,(function(r){function e(w,P){var B=w.length;w.push(P);e:for(;0<B;){var $=B-1>>>1,ee=w[$];if(0<l(ee,P))w[$]=P,w[B]=ee,B=$;else break e}}function i(w){return w.length===0?null:w[0]}function s(w){if(w.length===0)return null;var P=w[0],B=w.pop();if(B!==P){w[0]=B;e:for(var $=0,ee=w.length,R=ee>>>1;$<R;){var K=2*($+1)-1,be=w[K],Re=K+1,Oe=w[Re];if(0>l(be,B))Re<ee&&0>l(Oe,be)?(w[$]=Oe,w[Re]=B,$=Re):(w[$]=be,w[K]=B,$=K);else if(Re<ee&&0>l(Oe,B))w[$]=Oe,w[Re]=B,$=Re;else break e}}return P}function l(w,P){var B=w.sortIndex-P.sortIndex;return B!==0?B:w.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],b=1,v=null,g=3,S=!1,T=!1,L=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function z(w){for(var P=i(h);P!==null;){if(P.callback===null)s(h);else if(P.startTime<=w)s(h),P.sortIndex=P.expirationTime,e(m,P);else break;P=i(h)}}function W(w){if(L=!1,z(w),!T)if(i(m)!==null)T=!0,I||(I=!0,Q());else{var P=i(h);P!==null&&X(W,P.startTime-w)}}var I=!1,H=-1,A=5,G=-1;function ne(){return y?!0:!(r.unstable_now()-G<A)}function k(){if(y=!1,I){var w=r.unstable_now();G=w;var P=!0;try{e:{T=!1,L&&(L=!1,D(H),H=-1),S=!0;var B=g;try{t:{for(z(w),v=i(m);v!==null&&!(v.expirationTime>w&&ne());){var $=v.callback;if(typeof $=="function"){v.callback=null,g=v.priorityLevel;var ee=$(v.expirationTime<=w);if(w=r.unstable_now(),typeof ee=="function"){v.callback=ee,z(w),P=!0;break t}v===i(m)&&s(m),z(w)}else s(m);v=i(m)}if(v!==null)P=!0;else{var R=i(h);R!==null&&X(W,R.startTime-w),P=!1}}break e}finally{v=null,g=B,S=!1}P=void 0}}finally{P?Q():I=!1}}}var Q;if(typeof O=="function")Q=function(){O(k)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ue=me.port2;me.port1.onmessage=k,Q=function(){ue.postMessage(null)}}else Q=function(){x(k,0)};function X(w,P){H=x(function(){w(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(w){w.callback=null},r.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<w?Math.floor(1e3/w):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(w){switch(g){case 1:case 2:case 3:var P=3;break;default:P=g}var B=g;g=P;try{return w()}finally{g=B}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(w,P){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var B=g;g=w;try{return P()}finally{g=B}},r.unstable_scheduleCallback=function(w,P,B){var $=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,w){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=B+ee,w={id:b++,callback:P,priorityLevel:w,startTime:B,expirationTime:ee,sortIndex:-1},B>$?(w.sortIndex=B,e(h,w),i(m)===null&&w===i(h)&&(L?(D(H),H=-1):L=!0,X(W,B-$))):(w.sortIndex=ee,e(m,w),T||S||(T=!0,I||(I=!0,Q()))),w},r.unstable_shouldYield=ne,r.unstable_wrapCallback=function(w){var P=g;return function(){var B=g;g=P;try{return w.apply(this,arguments)}finally{g=B}}}})(Dd)),Dd}var xx;function Iy(){return xx||(xx=1,Cd.exports=Py()),Cd.exports}var Nd={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function zy(){if(_x)return Yn;_x=1;var r=cp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)h+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,b){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:b}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.createPortal=function(m,h){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,b)},Yn.flushSync=function(m){var h=d.T,b=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=b,s.d.f()}},Yn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Yn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Yn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var b=h.as,v=p(b,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;b==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):b==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Yn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var b=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Yn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var b=h.as,v=p(b,h.crossOrigin);s.d.L(m,b,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Yn.preloadModule=function(m,h){if(typeof m=="string")if(h){var b=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Yn.requestFormReset=function(m){s.d.r(m)},Yn.unstable_batchedUpdates=function(m,h){return m(h)},Yn.useFormState=function(m,h,b){return d.H.useFormState(m,h,b)},Yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var vx;function By(){if(vx)return Nd.exports;vx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nd.exports=zy(),Nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx;function Fy(){if(bx)return tl;bx=1;var r=Iy(),e=cp(),i=By();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var _=!1,N=u.child;N;){if(N===a){_=!0,a=u,o=f;break}if(N===o){_=!0,o=u,a=f;break}N=N.sibling}if(!_){for(N=f.child;N;){if(N===a){_=!0,a=f,o=u;break}if(N===o){_=!0,o=f,a=u;break}N=N.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function b(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=b(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),O=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),G=Symbol.for("react.activity"),ne=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case W:return"Suspense";case I:return"SuspenseList";case G:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case O:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case z:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case H:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case A:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var X=Array.isArray,w=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},$=[],ee=-1;function R(t){return{current:t}}function K(t){0>ee||(t.current=$[ee],$[ee]=null,ee--)}function be(t,n){ee++,$[ee]=t.current,t.current=n}var Re=R(null),Oe=R(null),ce=R(null),Ee=R(null);function _e(t,n){switch(be(ce,n),be(Oe,t),be(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}K(Re),be(Re,t)}function Pe(){K(Re),K(Oe),K(ce)}function Ve(t){t.memoizedState!==null&&be(Ee,t);var n=Re.current,a=Ig(n,t.type);n!==a&&(be(Oe,t),be(Re,a))}function qe(t){Oe.current===t&&(K(Re),K(Oe)),Ee.current===t&&(K(Ee),Ko._currentValue=B)}var Ke,lt;function st(t){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",lt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+t+lt}var vt=!1;function pt(t,n){if(!t||vt)return"";vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ue=function(){throw Error()};if(Object.defineProperty(Ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ue,[])}catch(ye){var xe=ye}Reflect.construct(t,[],Ue)}else{try{Ue.call()}catch(ye){xe=ye}t.call(Ue.prototype)}}else{try{throw Error()}catch(ye){xe=ye}(Ue=t())&&typeof Ue.catch=="function"&&Ue.catch(function(){})}}catch(ye){if(ye&&xe&&typeof ye.stack=="string")return[ye.stack,xe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),_=f[0],N=f[1];if(_&&N){var q=_.split(`
`),de=N.split(`
`);for(u=o=0;o<q.length&&!q[o].includes("DetermineComponentFrameRoot");)o++;for(;u<de.length&&!de[u].includes("DetermineComponentFrameRoot");)u++;if(o===q.length||u===de.length)for(o=q.length-1,u=de.length-1;1<=o&&0<=u&&q[o]!==de[u];)u--;for(;1<=o&&0<=u;o--,u--)if(q[o]!==de[u]){if(o!==1||u!==1)do if(o--,u--,0>u||q[o]!==de[u]){var Ae=`
`+q[o].replace(" at new "," at ");return t.displayName&&Ae.includes("<anonymous>")&&(Ae=Ae.replace("<anonymous>",t.displayName)),Ae}while(1<=o&&0<=u);break}}}finally{vt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?st(a):""}function qt(t,n){switch(t.tag){case 26:case 27:case 5:return st(t.type);case 16:return st("Lazy");case 13:return t.child!==n&&n!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return st("Activity");default:return""}}function Be(t){try{var n="",a=null;do n+=qt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var _t=Object.prototype.hasOwnProperty,j=r.unstable_scheduleCallback,Ye=r.unstable_cancelCallback,rt=r.unstable_shouldYield,Qe=r.unstable_requestPaint,we=r.unstable_now,nt=r.unstable_getCurrentPriorityLevel,U=r.unstable_ImmediatePriority,M=r.unstable_UserBlockingPriority,F=r.unstable_NormalPriority,ie=r.unstable_LowPriority,V=r.unstable_IdlePriority,te=r.log,oe=r.unstable_setDisableYieldValue,Z=null,re=null;function Ce(t){if(typeof te=="function"&&oe(t),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(Z,t)}catch{}}var Se=Math.clz32?Math.clz32:Je,Me=Math.log,Ne=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(Me(t)/Ne|0)|0}var Fe=256,$e=262144,Y=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var N=o&134217727;return N!==0?(o=N&~f,o!==0?u=Te(o):(_&=N,_!==0?u=Te(_):a||(a=N&~t,a!==0&&(u=Te(a))))):(N=o&~f,N!==0?u=Te(N):_!==0?u=Te(_):a||(a=o&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ge(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function He(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function dt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Gt(t,n,a,o,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var N=t.entanglements,q=t.expirationTimes,de=t.hiddenUpdates;for(a=_&~a;0<a;){var Ae=31-Se(a),Ue=1<<Ae;N[Ae]=0,q[Ae]=-1;var xe=de[Ae];if(xe!==null)for(de[Ae]=null,Ae=0;Ae<xe.length;Ae++){var ye=xe[Ae];ye!==null&&(ye.lane&=-536870913)}a&=~Ue}o!==0&&Ut(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Se(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Bn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Se(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function un(t,n){var a=n&-n;return a=(a&42)!==0?1:ai(a),(a&(t.suspendedLanes|n))!==0?0:a}function ai(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function _n(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function zi(){var t=P.p;return t!==0?t:(t=window.event,t===void 0?32:sx(t.type))}function fa(t,n){var a=P.p;try{return P.p=t,n()}finally{P.p=a}}var fn=Math.random().toString(36).slice(2),Lt="__reactFiber$"+fn,xt="__reactProps$"+fn,Rt="__reactContainer$"+fn,Ht="__reactEvents$"+fn,da="__reactListeners$"+fn,ar="__reactHandles$"+fn,uo="__reactResources$"+fn,Ha="__reactMarker$"+fn;function fo(t){delete t[Lt],delete t[xt],delete t[Ht],delete t[da],delete t[ar]}function ka(t){var n=t[Lt];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Rt]||a[Lt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[Lt])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function Va(t){if(t=t[Lt]||t[Rt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Cs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function ja(t){var n=t[uo];return n||(n=t[uo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Tn(t){t[Ha]=!0}var _l=new Set,C={};function se(t,n){ge(t,n),ge(t+"Capture",n)}function ge(t,n){for(C[t]=n,t=0;t<n.length;t++)_l.add(n[t])}var he=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),pe={},Xe={};function et(t){return _t.call(Xe,t)?!0:_t.call(pe,t)?!1:he.test(t)?Xe[t]=!0:(pe[t]=!0,!1)}function je(t,n,a){if(et(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function it(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function tt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ut(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function St(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ct(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function kt(t){if(!t._valueTracker){var n=St(t)?"checked":"value";t._valueTracker=ct(t,n,""+t[n])}}function pn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=St(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function ln(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yt=/[\n"\\]/g;function Zt(t){return t.replace(Yt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ze(t,n,a,o,u,f,_,N){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ut(n)):t.value!==""+ut(n)&&(t.value=""+ut(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Ct(t,_,ut(n)):a!=null?Ct(t,_,ut(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+ut(N):t.removeAttribute("name")}function qn(t,n,a,o,u,f,_,N){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){kt(t);return}a=a!=null?""+ut(a):"",n=n!=null?""+ut(n):a,N||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=N?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),kt(t)}function Ct(t,n,a){n==="number"&&ln(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Un(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ut(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function hi(t,n,a){if(n!=null&&(n=""+ut(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ut(a):""}function Bi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(X(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ut(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),kt(t)}function pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Kt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&mn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&mn(t,f,n[f])}function Wt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ds(t){return Xa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ha(){}var Su=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sr=null,rr=null;function Op(t){var n=Va(t);if(n&&(t=n.stateNode)){var a=t[xt]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ze(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Zt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[xt]||null;if(!u)throw Error(s(90));Ze(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&pn(o)}break e;case"textarea":hi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Un(t,!!a.multiple,n,!1)}}}var Eu=!1;function Pp(t,n,a){if(Eu)return t(n,a);Eu=!0;try{var o=t(n);return o}finally{if(Eu=!1,(sr!==null||rr!==null)&&(sc(),sr&&(n=sr,t=rr,rr=sr=null,Op(n),t)))for(n=0;n<t.length;n++)Op(t[n])}}function ho(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xt]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(pa)try{var po={};Object.defineProperty(po,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Tu=!1}var Wa=null,Au=null,vl=null;function Ip(){if(vl)return vl;var t,n=Au,a=n.length,o,u="value"in Wa?Wa.value:Wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(o=1;o<=_&&n[a-o]===u[f-o];o++);return vl=u.slice(t,1<o?1-o:void 0)}function bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function zp(){return!1}function si(t){function n(a,o,u,f,_){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(f):f[N]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?yl:zp,this.isPropagationStopped=zp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=si(Ns),mo=v({},Ns,{view:0,detail:0}),Dv=si(mo),wu,Ru,go,Ml=v({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(wu=t.screenX-go.screenX,Ru=t.screenY-go.screenY):Ru=wu=0,go=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Bp=si(Ml),Nv=v({},Ml,{dataTransfer:0}),Uv=si(Nv),Lv=v({},mo,{relatedTarget:0}),Cu=si(Lv),Ov=v({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=si(Ov),Iv=v({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zv=si(Iv),Bv=v({},Ns,{data:0}),Fp=si(Bv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hv[t])?!!n[t]:!1}function Du(){return kv}var Vv=v({},mo,{key:function(t){if(t.key){var n=Fv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=si(Vv),Xv=v({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=si(Xv),Wv=v({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),qv=si(Wv),Yv=v({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=si(Yv),Kv=v({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=si(Kv),Jv=v({},Ns,{newState:0,oldState:0}),$v=si(Jv),eb=[9,13,27,32],Nu=pa&&"CompositionEvent"in window,xo=null;pa&&"documentMode"in document&&(xo=document.documentMode);var tb=pa&&"TextEvent"in window&&!xo,Hp=pa&&(!Nu||xo&&8<xo&&11>=xo),kp=" ",Vp=!1;function jp(t,n){switch(t){case"keyup":return eb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function nb(t,n){switch(t){case"compositionend":return Xp(n);case"keypress":return n.which!==32?null:(Vp=!0,kp);case"textInput":return t=n.data,t===kp&&Vp?null:t;default:return null}}function ib(t,n){if(or)return t==="compositionend"||!Nu&&jp(t,n)?(t=Ip(),vl=Au=Wa=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hp&&n.locale!=="ko"?null:n.data;default:return null}}var ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ab[t.type]:n==="textarea"}function qp(t,n,a,o){sr?rr?rr.push(o):rr=[o]:sr=o,n=dc(n,"onChange"),0<n.length&&(a=new Sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var _o=null,vo=null;function sb(t){Cg(t,0)}function El(t){var n=Cs(t);if(pn(n))return t}function Yp(t,n){if(t==="change")return n}var Zp=!1;if(pa){var Uu;if(pa){var Lu="oninput"in document;if(!Lu){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Lu=typeof Kp.oninput=="function"}Uu=Lu}else Uu=!1;Zp=Uu&&(!document.documentMode||9<document.documentMode)}function Qp(){_o&&(_o.detachEvent("onpropertychange",Jp),vo=_o=null)}function Jp(t){if(t.propertyName==="value"&&El(vo)){var n=[];qp(n,vo,t,Mu(t)),Pp(sb,n)}}function rb(t,n,a){t==="focusin"?(Qp(),_o=n,vo=a,_o.attachEvent("onpropertychange",Jp)):t==="focusout"&&Qp()}function ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(vo)}function lb(t,n){if(t==="click")return El(n)}function cb(t,n){if(t==="input"||t==="change")return El(n)}function ub(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var mi=typeof Object.is=="function"?Object.is:ub;function bo(t,n){if(mi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!_t.call(n,u)||!mi(t[u],n[u]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,n){var a=$p(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$p(a)}}function tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function nm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ln(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ln(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fb=pa&&"documentMode"in document&&11>=document.documentMode,lr=null,Pu=null,yo=null,Iu=!1;function im(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||lr==null||lr!==ln(o)||(o=lr,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),yo&&bo(yo,o)||(yo=o,o=dc(Pu,"onSelect"),0<o.length&&(n=new Sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=lr)))}function Us(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var cr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},zu={},am={};pa&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function Ls(t){if(zu[t])return zu[t];if(!cr[t])return t;var n=cr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in am)return zu[t]=n[a];return t}var sm=Ls("animationend"),rm=Ls("animationiteration"),om=Ls("animationstart"),db=Ls("transitionrun"),hb=Ls("transitionstart"),pb=Ls("transitioncancel"),lm=Ls("transitionend"),cm=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Gi(t,n){cm.set(t,n),se(n,[t])}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ai=[],ur=0,Fu=0;function Al(){for(var t=ur,n=Fu=ur=0;n<t;){var a=Ai[n];Ai[n++]=null;var o=Ai[n];Ai[n++]=null;var u=Ai[n];Ai[n++]=null;var f=Ai[n];if(Ai[n++]=null,o!==null&&u!==null){var _=o.pending;_===null?u.next=u:(u.next=_.next,_.next=u),o.pending=u}f!==0&&um(a,u,f)}}function wl(t,n,a,o){Ai[ur++]=t,Ai[ur++]=n,Ai[ur++]=a,Ai[ur++]=o,Fu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Gu(t,n,a,o){return wl(t,n,a,o),Rl(t)}function Os(t,n){return wl(t,null,null,n),Rl(t)}function um(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Se(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Rl(t){if(50<Vo)throw Vo=0,Kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fr={};function mb(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(t,n,a,o){return new mb(t,n,a,o)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=gi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function fm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,f){var _=0;if(o=t,typeof t=="function")Hu(t)&&(_=1);else if(typeof t=="string")_=by(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case G:return t=gi(31,a,n,u),t.elementType=G,t.lanes=f,t;case L:return Ps(a.children,u,f,n);case y:_=8,u|=24;break;case x:return t=gi(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case W:return t=gi(13,a,n,u),t.elementType=W,t.lanes=f,t;case I:return t=gi(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:_=10;break e;case D:_=9;break e;case z:_=11;break e;case H:_=14;break e;case A:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=gi(_,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Ps(t,n,a,o){return t=gi(7,t,o,n),t.lanes=a,t}function ku(t,n,a){return t=gi(6,t,null,n),t.lanes=a,t}function dm(t){var n=gi(18,null,null,0);return n.stateNode=t,n}function Vu(t,n,a){return n=gi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hm=new WeakMap;function wi(t,n){if(typeof t=="object"&&t!==null){var a=hm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Be(n)},hm.set(t,n),n)}return{value:t,source:n,stack:Be(n)}}var dr=[],hr=0,Dl=null,So=0,Ri=[],Ci=0,qa=null,Zi=1,Ki="";function ga(t,n){dr[hr++]=So,dr[hr++]=Dl,Dl=t,So=n}function pm(t,n,a){Ri[Ci++]=Zi,Ri[Ci++]=Ki,Ri[Ci++]=qa,qa=t;var o=Zi;t=Ki;var u=32-Se(o)-1;o&=~(1<<u),a+=1;var f=32-Se(n)+u;if(30<f){var _=u-u%5;f=(o&(1<<_)-1).toString(32),o>>=_,u-=_,Zi=1<<32-Se(n)+u|a<<u|o,Ki=f+t}else Zi=1<<f|a<<u|o,Ki=t}function ju(t){t.return!==null&&(ga(t,1),pm(t,1,0))}function Xu(t){for(;t===Dl;)Dl=dr[--hr],dr[hr]=null,So=dr[--hr],dr[hr]=null;for(;t===qa;)qa=Ri[--Ci],Ri[Ci]=null,Ki=Ri[--Ci],Ri[Ci]=null,Zi=Ri[--Ci],Ri[Ci]=null}function mm(t,n){Ri[Ci++]=Zi,Ri[Ci++]=Ki,Ri[Ci++]=qa,Zi=n.id,Ki=n.overflow,qa=t}var kn=null,dn=null,zt=!1,Ya=null,Di=!1,Wu=Error(s(519));function Za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mo(wi(n,t)),Wu}function gm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[Lt]=t,n[xt]=o,a){case"dialog":Nt("cancel",n),Nt("close",n);break;case"iframe":case"object":case"embed":Nt("load",n);break;case"video":case"audio":for(a=0;a<Xo.length;a++)Nt(Xo[a],n);break;case"source":Nt("error",n);break;case"img":case"image":case"link":Nt("error",n),Nt("load",n);break;case"details":Nt("toggle",n);break;case"input":Nt("invalid",n),qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Nt("invalid",n);break;case"textarea":Nt("invalid",n),Bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Lg(n.textContent,a)?(o.popover!=null&&(Nt("beforetoggle",n),Nt("toggle",n)),o.onScroll!=null&&Nt("scroll",n),o.onScrollEnd!=null&&Nt("scrollend",n),o.onClick!=null&&(n.onclick=ha),n=!0):n=!1,n||Za(t,!0)}function xm(t){for(kn=t.return;kn;)switch(kn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:kn=kn.return}}function pr(t){if(t!==kn)return!1;if(!zt)return xm(t),zt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||fd(t.type,t.memoizedProps)),a=!a),a&&dn&&Za(t),xm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));dn=kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));dn=kg(t)}else n===27?(n=dn,cs(t.type)?(t=gd,gd=null,dn=t):dn=n):dn=kn?Ui(t.stateNode.nextSibling):null;return!0}function Is(){dn=kn=null,zt=!1}function qu(){var t=Ya;return t!==null&&(ci===null?ci=t:ci.push.apply(ci,t),Ya=null),t}function Mo(t){Ya===null?Ya=[t]:Ya.push(t)}var Yu=R(null),zs=null,xa=null;function Ka(t,n,a){be(Yu,n._currentValue),n._currentValue=a}function _a(t){t._currentValue=Yu.current,K(Yu)}function Zu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var N=f;f=u;for(var q=0;q<n.length;q++)if(N.context===n[q]){f.lanes|=a,N=f.alternate,N!==null&&(N.lanes|=a),Zu(f.return,a,t),o||(_=null);break e}f=N.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Zu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function mr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var N=u.type;mi(u.pendingProps.value,_.value)||(t!==null?t.push(N):t=[N])}}else if(u===Ee.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Ko):t=[Ko])}u=u.return}t!==null&&Ku(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Bs(t){zs=t,xa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Vn(t){return _m(zs,t)}function Ul(t,n){return zs===null&&Bs(t),_m(t,n)}function _m(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(t===null)throw Error(s(308));xa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else xa=xa.next=n;return a}var gb=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xb=r.unstable_scheduleCallback,_b=r.unstable_NormalPriority,An={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new gb,data:new Map,refCount:0}}function Eo(t){t.refCount--,t.refCount===0&&xb(_b,function(){t.controller.abort()})}var To=null,Ju=0,gr=0,xr=null;function vb(t,n){if(To===null){var a=To=[];Ju=0,gr=nd(),xr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ju++,n.then(vm,vm),n}function vm(){if(--Ju===0&&To!==null){xr!==null&&(xr.status="fulfilled");var t=To;To=null,gr=0,xr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function bb(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var bm=w.S;w.S=function(t,n){ig=we(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vb(t,n),bm!==null&&bm(t,n)};var Fs=R(null);function $u(){var t=Fs.current;return t!==null?t:cn.pooledCache}function Ll(t,n){n===null?be(Fs,Fs.current):be(Fs,n.pool)}function ym(){var t=$u();return t===null?null:{parent:An._currentValue,pool:t}}var _r=Error(s(460)),ef=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function Sm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ha,ha),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tm(t),t;default:if(typeof n.status=="string")n.then(ha,ha);else{if(t=cn,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tm(t),t}throw Hs=n,_r}}function Gs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hs=a,_r):a}}var Hs=null;function Em(){if(Hs===null)throw Error(s(459));var t=Hs;return Hs=null,t}function Tm(t){if(t===_r||t===Ol)throw Error(s(483))}var vr=null,Ao=0;function Il(t){var n=Ao;return Ao+=1,vr===null&&(vr=[]),Mm(vr,t,n)}function wo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Am(t){function n(le,J){if(t){var fe=le.deletions;fe===null?(le.deletions=[J],le.flags|=16):fe.push(J)}}function a(le,J){if(!t)return null;for(;J!==null;)n(le,J),J=J.sibling;return null}function o(le){for(var J=new Map;le!==null;)le.key!==null?J.set(le.key,le):J.set(le.index,le),le=le.sibling;return J}function u(le,J){return le=ma(le,J),le.index=0,le.sibling=null,le}function f(le,J,fe){return le.index=fe,t?(fe=le.alternate,fe!==null?(fe=fe.index,fe<J?(le.flags|=67108866,J):fe):(le.flags|=67108866,J)):(le.flags|=1048576,J)}function _(le){return t&&le.alternate===null&&(le.flags|=67108866),le}function N(le,J,fe,De){return J===null||J.tag!==6?(J=ku(fe,le.mode,De),J.return=le,J):(J=u(J,fe),J.return=le,J)}function q(le,J,fe,De){var ft=fe.type;return ft===L?Ae(le,J,fe.props.children,De,fe.key):J!==null&&(J.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===A&&Gs(ft)===J.type)?(J=u(J,fe.props),wo(J,fe),J.return=le,J):(J=Cl(fe.type,fe.key,fe.props,null,le.mode,De),wo(J,fe),J.return=le,J)}function de(le,J,fe,De){return J===null||J.tag!==4||J.stateNode.containerInfo!==fe.containerInfo||J.stateNode.implementation!==fe.implementation?(J=Vu(fe,le.mode,De),J.return=le,J):(J=u(J,fe.children||[]),J.return=le,J)}function Ae(le,J,fe,De,ft){return J===null||J.tag!==7?(J=Ps(fe,le.mode,De,ft),J.return=le,J):(J=u(J,fe),J.return=le,J)}function Ue(le,J,fe){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=ku(""+J,le.mode,fe),J.return=le,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case S:return fe=Cl(J.type,J.key,J.props,null,le.mode,fe),wo(fe,J),fe.return=le,fe;case T:return J=Vu(J,le.mode,fe),J.return=le,J;case A:return J=Gs(J),Ue(le,J,fe)}if(X(J)||Q(J))return J=Ps(J,le.mode,fe,null),J.return=le,J;if(typeof J.then=="function")return Ue(le,Il(J),fe);if(J.$$typeof===O)return Ue(le,Ul(le,J),fe);zl(le,J)}return null}function xe(le,J,fe,De){var ft=J!==null?J.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint")return ft!==null?null:N(le,J,""+fe,De);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case S:return fe.key===ft?q(le,J,fe,De):null;case T:return fe.key===ft?de(le,J,fe,De):null;case A:return fe=Gs(fe),xe(le,J,fe,De)}if(X(fe)||Q(fe))return ft!==null?null:Ae(le,J,fe,De,null);if(typeof fe.then=="function")return xe(le,J,Il(fe),De);if(fe.$$typeof===O)return xe(le,J,Ul(le,fe),De);zl(le,fe)}return null}function ye(le,J,fe,De,ft){if(typeof De=="string"&&De!==""||typeof De=="number"||typeof De=="bigint")return le=le.get(fe)||null,N(J,le,""+De,ft);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case S:return le=le.get(De.key===null?fe:De.key)||null,q(J,le,De,ft);case T:return le=le.get(De.key===null?fe:De.key)||null,de(J,le,De,ft);case A:return De=Gs(De),ye(le,J,fe,De,ft)}if(X(De)||Q(De))return le=le.get(fe)||null,Ae(J,le,De,ft,null);if(typeof De.then=="function")return ye(le,J,fe,Il(De),ft);if(De.$$typeof===O)return ye(le,J,fe,Ul(J,De),ft);zl(J,De)}return null}function at(le,J,fe,De){for(var ft=null,Vt=null,ot=J,Et=J=0,Pt=null;ot!==null&&Et<fe.length;Et++){ot.index>Et?(Pt=ot,ot=null):Pt=ot.sibling;var jt=xe(le,ot,fe[Et],De);if(jt===null){ot===null&&(ot=Pt);break}t&&ot&&jt.alternate===null&&n(le,ot),J=f(jt,J,Et),Vt===null?ft=jt:Vt.sibling=jt,Vt=jt,ot=Pt}if(Et===fe.length)return a(le,ot),zt&&ga(le,Et),ft;if(ot===null){for(;Et<fe.length;Et++)ot=Ue(le,fe[Et],De),ot!==null&&(J=f(ot,J,Et),Vt===null?ft=ot:Vt.sibling=ot,Vt=ot);return zt&&ga(le,Et),ft}for(ot=o(ot);Et<fe.length;Et++)Pt=ye(ot,le,Et,fe[Et],De),Pt!==null&&(t&&Pt.alternate!==null&&ot.delete(Pt.key===null?Et:Pt.key),J=f(Pt,J,Et),Vt===null?ft=Pt:Vt.sibling=Pt,Vt=Pt);return t&&ot.forEach(function(ps){return n(le,ps)}),zt&&ga(le,Et),ft}function gt(le,J,fe,De){if(fe==null)throw Error(s(151));for(var ft=null,Vt=null,ot=J,Et=J=0,Pt=null,jt=fe.next();ot!==null&&!jt.done;Et++,jt=fe.next()){ot.index>Et?(Pt=ot,ot=null):Pt=ot.sibling;var ps=xe(le,ot,jt.value,De);if(ps===null){ot===null&&(ot=Pt);break}t&&ot&&ps.alternate===null&&n(le,ot),J=f(ps,J,Et),Vt===null?ft=ps:Vt.sibling=ps,Vt=ps,ot=Pt}if(jt.done)return a(le,ot),zt&&ga(le,Et),ft;if(ot===null){for(;!jt.done;Et++,jt=fe.next())jt=Ue(le,jt.value,De),jt!==null&&(J=f(jt,J,Et),Vt===null?ft=jt:Vt.sibling=jt,Vt=jt);return zt&&ga(le,Et),ft}for(ot=o(ot);!jt.done;Et++,jt=fe.next())jt=ye(ot,le,Et,jt.value,De),jt!==null&&(t&&jt.alternate!==null&&ot.delete(jt.key===null?Et:jt.key),J=f(jt,J,Et),Vt===null?ft=jt:Vt.sibling=jt,Vt=jt);return t&&ot.forEach(function(Ny){return n(le,Ny)}),zt&&ga(le,Et),ft}function an(le,J,fe,De){if(typeof fe=="object"&&fe!==null&&fe.type===L&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case S:e:{for(var ft=fe.key;J!==null;){if(J.key===ft){if(ft=fe.type,ft===L){if(J.tag===7){a(le,J.sibling),De=u(J,fe.props.children),De.return=le,le=De;break e}}else if(J.elementType===ft||typeof ft=="object"&&ft!==null&&ft.$$typeof===A&&Gs(ft)===J.type){a(le,J.sibling),De=u(J,fe.props),wo(De,fe),De.return=le,le=De;break e}a(le,J);break}else n(le,J);J=J.sibling}fe.type===L?(De=Ps(fe.props.children,le.mode,De,fe.key),De.return=le,le=De):(De=Cl(fe.type,fe.key,fe.props,null,le.mode,De),wo(De,fe),De.return=le,le=De)}return _(le);case T:e:{for(ft=fe.key;J!==null;){if(J.key===ft)if(J.tag===4&&J.stateNode.containerInfo===fe.containerInfo&&J.stateNode.implementation===fe.implementation){a(le,J.sibling),De=u(J,fe.children||[]),De.return=le,le=De;break e}else{a(le,J);break}else n(le,J);J=J.sibling}De=Vu(fe,le.mode,De),De.return=le,le=De}return _(le);case A:return fe=Gs(fe),an(le,J,fe,De)}if(X(fe))return at(le,J,fe,De);if(Q(fe)){if(ft=Q(fe),typeof ft!="function")throw Error(s(150));return fe=ft.call(fe),gt(le,J,fe,De)}if(typeof fe.then=="function")return an(le,J,Il(fe),De);if(fe.$$typeof===O)return an(le,J,Ul(le,fe),De);zl(le,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"||typeof fe=="bigint"?(fe=""+fe,J!==null&&J.tag===6?(a(le,J.sibling),De=u(J,fe),De.return=le,le=De):(a(le,J),De=ku(fe,le.mode,De),De.return=le,le=De),_(le)):a(le,J)}return function(le,J,fe,De){try{Ao=0;var ft=an(le,J,fe,De);return vr=null,ft}catch(ot){if(ot===_r||ot===Ol)throw ot;var Vt=gi(29,ot,null,le.mode);return Vt.lanes=De,Vt.return=le,Vt}finally{}}}var ks=Am(!0),wm=Am(!1),Qa=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Xt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(t),um(t,null,a),n}return wl(t,o,n,a),Rl(t)}function Ro(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Bn(t,a)}}function af(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var sf=!1;function Co(){if(sf){var t=xr;if(t!==null)throw t}}function Do(t,n,a,o){sf=!1;var u=t.updateQueue;Qa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var q=N,de=q.next;q.next=null,_===null?f=de:_.next=de,_=q;var Ae=t.alternate;Ae!==null&&(Ae=Ae.updateQueue,N=Ae.lastBaseUpdate,N!==_&&(N===null?Ae.firstBaseUpdate=de:N.next=de,Ae.lastBaseUpdate=q))}if(f!==null){var Ue=u.baseState;_=0,Ae=de=q=null,N=f;do{var xe=N.lane&-536870913,ye=xe!==N.lane;if(ye?(Ot&xe)===xe:(o&xe)===xe){xe!==0&&xe===gr&&(sf=!0),Ae!==null&&(Ae=Ae.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var at=t,gt=N;xe=n;var an=a;switch(gt.tag){case 1:if(at=gt.payload,typeof at=="function"){Ue=at.call(an,Ue,xe);break e}Ue=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=gt.payload,xe=typeof at=="function"?at.call(an,Ue,xe):at,xe==null)break e;Ue=v({},Ue,xe);break e;case 2:Qa=!0}}xe=N.callback,xe!==null&&(t.flags|=64,ye&&(t.flags|=8192),ye=u.callbacks,ye===null?u.callbacks=[xe]:ye.push(xe))}else ye={lane:xe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Ae===null?(de=Ae=ye,q=Ue):Ae=Ae.next=ye,_|=xe;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;ye=N,N=ye.next,ye.next=null,u.lastBaseUpdate=ye,u.shared.pending=null}}while(!0);Ae===null&&(q=Ue),u.baseState=q,u.firstBaseUpdate=de,u.lastBaseUpdate=Ae,f===null&&(u.shared.lanes=0),as|=_,t.lanes=_,t.memoizedState=Ue}}function Rm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Rm(a[t],n)}var br=R(null),Bl=R(0);function Dm(t,n){t=wa,be(Bl,t),be(br,n),wa=t|n.baseLanes}function rf(){be(Bl,wa),be(br,br.current)}function of(){wa=Bl.current,K(br),K(Bl)}var xi=R(null),Ni=null;function es(t){var n=t.alternate;be(Mn,Mn.current&1),be(xi,t),Ni===null&&(n===null||br.current!==null||n.memoizedState!==null)&&(Ni=t)}function lf(t){be(Mn,Mn.current),be(xi,t),Ni===null&&(Ni=t)}function Nm(t){t.tag===22?(be(Mn,Mn.current),be(xi,t),Ni===null&&(Ni=t)):ts()}function ts(){be(Mn,Mn.current),be(xi,xi.current)}function _i(t){K(xi),Ni===t&&(Ni=null),K(Mn)}var Mn=R(0);function Fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pd(a)||md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,Mt=null,tn=null,wn=null,Gl=!1,yr=!1,Vs=!1,Hl=0,No=0,Sr=null,yb=0;function vn(){throw Error(s(321))}function cf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!mi(t[a],n[a]))return!1;return!0}function uf(t,n,a,o,u,f){return va=f,Mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=t===null||t.memoizedState===null?p0:Tf,Vs=!1,f=a(o,u),Vs=!1,yr&&(f=Lm(n,a,o,u)),Um(t),f}function Um(t){w.H=Oo;var n=tn!==null&&tn.next!==null;if(va=0,wn=tn=Mt=null,Gl=!1,No=0,Sr=null,n)throw Error(s(300));t===null||Rn||(t=t.dependencies,t!==null&&Nl(t)&&(Rn=!0))}function Lm(t,n,a,o){Mt=t;var u=0;do{if(yr&&(Sr=null),No=0,yr=!1,25<=u)throw Error(s(301));if(u+=1,wn=tn=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}w.H=m0,f=n(a,o)}while(yr);return f}function Sb(){var t=w.H,n=t.useState()[0];return n=typeof n.then=="function"?Uo(n):n,t=t.useState()[0],(tn!==null?tn.memoizedState:null)!==t&&(Mt.flags|=1024),n}function ff(){var t=Hl!==0;return Hl=0,t}function df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function hf(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}va=0,wn=tn=Mt=null,yr=!1,No=Hl=0,Sr=null}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?Mt.memoizedState=wn=t:wn=wn.next=t,wn}function En(){if(tn===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var n=wn===null?Mt.memoizedState:wn.next;if(n!==null)wn=n,tn=t;else{if(t===null)throw Mt.alternate===null?Error(s(467)):Error(s(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},wn===null?Mt.memoizedState=wn=t:wn=wn.next=t}return wn}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Uo(t){var n=No;return No+=1,Sr===null&&(Sr=[]),t=Mm(Sr,t,n),n=Mt,(wn===null?n.memoizedState:wn.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?p0:Tf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Uo(t);if(t.$$typeof===O)return Vn(t)}throw Error(s(438,String(t)))}function pf(t){var n=null,a=Mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=kl(),Mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=ne;return n.index++,a}function ba(t,n){return typeof n=="function"?n(t):n}function jl(t){var n=En();return mf(n,tn,t)}function mf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var N=_=null,q=null,de=n,Ae=!1;do{var Ue=de.lane&-536870913;if(Ue!==de.lane?(Ot&Ue)===Ue:(va&Ue)===Ue){var xe=de.revertLane;if(xe===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),Ue===gr&&(Ae=!0);else if((va&xe)===xe){de=de.next,xe===gr&&(Ae=!0);continue}else Ue={lane:0,revertLane:de.revertLane,gesture:null,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},q===null?(N=q=Ue,_=f):q=q.next=Ue,Mt.lanes|=xe,as|=xe;Ue=de.action,Vs&&a(f,Ue),f=de.hasEagerState?de.eagerState:a(f,Ue)}else xe={lane:Ue,revertLane:de.revertLane,gesture:de.gesture,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null},q===null?(N=q=xe,_=f):q=q.next=xe,Mt.lanes|=Ue,as|=Ue;de=de.next}while(de!==null&&de!==n);if(q===null?_=f:q.next=N,!mi(f,t.memoizedState)&&(Rn=!0,Ae&&(a=xr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=q,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function gf(t){var n=En(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);mi(f,n.memoizedState)||(Rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Om(t,n,a){var o=Mt,u=En(),f=zt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!mi((tn||u).memoizedState,a);if(_&&(u.memoizedState=a,Rn=!0),u=u.queue,vf(zm.bind(null,o,u,t),[t]),u.getSnapshot!==n||_||wn!==null&&wn.memoizedState.tag&1){if(o.flags|=2048,Mr(9,{destroy:void 0},Im.bind(null,o,u,a,n),null),cn===null)throw Error(s(349));f||(va&127)!==0||Pm(o,n,a)}return a}function Pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Mt.updateQueue,n===null?(n=kl(),Mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Im(t,n,a,o){n.value=a,n.getSnapshot=o,Bm(n)&&Fm(t)}function zm(t,n,a){return a(function(){Bm(n)&&Fm(t)})}function Bm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!mi(t,a)}catch{return!0}}function Fm(t){var n=Os(t,2);n!==null&&ui(n,t,2)}function xf(t){var n=ei();if(typeof t=="function"){var a=t;if(t=a(),Vs){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},n}function Gm(t,n,a,o){return t.baseState=a,mf(t,tn,typeof o=="function"?o:ba)}function Mb(t,n,a,o,u){if(ql(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};w.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=w.T,_={};w.T=_;try{var N=a(u,o),q=w.S;q!==null&&q(_,N),km(t,n,N)}catch(de){_f(t,n,de)}finally{f!==null&&_.types!==null&&(f.types=_.types),w.T=f}}else try{f=a(u,o),km(t,n,f)}catch(de){_f(t,n,de)}}function km(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Vm(t,n,o)},function(o){return _f(t,n,o)}):Vm(t,n,a)}function Vm(t,n,a){n.status="fulfilled",n.value=a,jm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Hm(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jm(n),n=n.next;while(n!==o)}t.action=null}function jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xm(t,n){return n}function Wm(t,n){if(zt){var a=cn.formState;if(a!==null){e:{var o=Mt;if(zt){if(dn){t:{for(var u=dn,f=Di;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ui(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){dn=Ui(u.nextSibling),o=u.data==="F!";break e}}Za(o)}o=!1}o&&(n=a[0])}}return a=ei(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},a.queue=o,a=f0.bind(null,Mt,o),o.dispatch=a,o=xf(!1),f=Ef.bind(null,Mt,!1,o.queue),o=ei(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Mb.bind(null,Mt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function qm(t){var n=En();return Ym(n,tn,t)}function Ym(t,n,a){if(n=mf(t,n,Xm)[0],t=jl(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Uo(n)}catch(_){throw _===_r?Ol:_}else o=n;n=En();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Mt.flags|=2048,Mr(9,{destroy:void 0},Eb.bind(null,u,a),null)),[o,f,t]}function Eb(t,n){t.action=n}function Zm(t){var n=En(),a=tn;if(a!==null)return Ym(n,a,t);En(),n=n.memoizedState,a=En();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Mr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=Mt.updateQueue,n===null&&(n=kl(),Mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Km(){return En().memoizedState}function Xl(t,n,a,o){var u=ei();Mt.flags|=t,u.memoizedState=Mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(t,n,a,o){var u=En();o=o===void 0?null:o;var f=u.memoizedState.inst;tn!==null&&o!==null&&cf(o,tn.memoizedState.deps)?u.memoizedState=Mr(n,f,a,o):(Mt.flags|=t,u.memoizedState=Mr(1|n,f,a,o))}function Qm(t,n){Xl(8390656,8,t,n)}function vf(t,n){Wl(2048,8,t,n)}function Tb(t){Mt.flags|=4;var n=Mt.updateQueue;if(n===null)n=kl(),Mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Jm(t){var n=En().memoizedState;return Tb({ref:n,nextImpl:t}),function(){if((Xt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $m(t,n){return Wl(4,2,t,n)}function e0(t,n){return Wl(4,4,t,n)}function t0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function n0(t,n,a){a=a!=null?a.concat([t]):null,Wl(4,4,t0.bind(null,n,t),a)}function bf(){}function i0(t,n){var a=En();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&cf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function a0(t,n){var a=En();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&cf(n,o[1]))return o[0];if(o=t(),Vs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o}function yf(t,n,a){return a===void 0||(va&1073741824)!==0&&(Ot&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sg(),Mt.lanes|=t,as|=t,a)}function s0(t,n,a,o){return mi(a,n)?a:br.current!==null?(t=yf(t,a,o),mi(t,n)||(Rn=!0),t):(va&42)===0||(va&1073741824)!==0&&(Ot&261930)===0?(Rn=!0,t.memoizedState=a):(t=sg(),Mt.lanes|=t,as|=t,n)}function r0(t,n,a,o,u){var f=P.p;P.p=f!==0&&8>f?f:8;var _=w.T,N={};w.T=N,Ef(t,!1,n,a);try{var q=u(),de=w.S;if(de!==null&&de(N,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var Ae=bb(q,o);Lo(t,n,Ae,yi(t))}else Lo(t,n,o,yi(t))}catch(Ue){Lo(t,n,{then:function(){},status:"rejected",reason:Ue},yi())}finally{P.p=f,_!==null&&N.types!==null&&(_.types=N.types),w.T=_}}function Ab(){}function Sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=o0(t).queue;r0(t,u,n,B,a===null?Ab:function(){return l0(t),a(o)})}function o0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function l0(t){var n=o0(t);n.next===null&&(n=t.alternate.memoizedState),Lo(t,n.next.queue,{},yi())}function Mf(){return Vn(Ko)}function c0(){return En().memoizedState}function u0(){return En().memoizedState}function wb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=yi();t=Ja(a);var o=$a(n,t,a);o!==null&&(ui(o,n,a),Ro(o,n,a)),n={cache:Qu()},t.payload=n;return}n=n.return}}function Rb(t,n,a){var o=yi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?d0(n,a):(a=Gu(t,n,a,o),a!==null&&(ui(a,t,o),h0(a,n,o)))}function f0(t,n,a){var o=yi();Lo(t,n,a,o)}function Lo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))d0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,N=f(_,a);if(u.hasEagerState=!0,u.eagerState=N,mi(N,_))return wl(t,n,u,0),cn===null&&Al(),!1}catch{}finally{}if(a=Gu(t,n,u,o),a!==null)return ui(a,t,o),h0(a,n,o),!0}return!1}function Ef(t,n,a,o){if(o={lane:2,revertLane:nd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(s(479))}else n=Gu(t,a,o,2),n!==null&&ui(n,t,2)}function ql(t){var n=t.alternate;return t===Mt||n!==null&&n===Mt}function d0(t,n){yr=Gl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function h0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Bn(t,a)}}var Oo={readContext:Vn,use:Vl,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useLayoutEffect:vn,useInsertionEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useSyncExternalStore:vn,useId:vn,useHostTransitionStatus:vn,useFormState:vn,useActionState:vn,useOptimistic:vn,useMemoCache:vn,useCacheRefresh:vn};Oo.useEffectEvent=vn;var p0={readContext:Vn,use:Vl,useCallback:function(t,n){return ei().memoizedState=[t,n===void 0?null:n],t},useContext:Vn,useEffect:Qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,t0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=ei();n=n===void 0?null:n;var o=t();if(Vs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=ei();if(a!==void 0){var u=a(n);if(Vs){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Rb.bind(null,Mt,t),[o.memoizedState,t]},useRef:function(t){var n=ei();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,a=f0.bind(null,Mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(t,n){var a=ei();return yf(a,t,n)},useTransition:function(){var t=xf(!1);return t=r0.bind(null,Mt,t.queue,!0,!1),ei().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=Mt,u=ei();if(zt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),cn===null)throw Error(s(349));(Ot&127)!==0||Pm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Qm(zm.bind(null,o,f,t),[t]),o.flags|=2048,Mr(9,{destroy:void 0},Im.bind(null,o,f,a,n),null),a},useId:function(){var t=ei(),n=cn.identifierPrefix;if(zt){var a=Ki,o=Zi;a=(o&~(1<<32-Se(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yb++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Mf,useFormState:Wm,useActionState:Wm,useOptimistic:function(t){var n=ei();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ef.bind(null,Mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:pf,useCacheRefresh:function(){return ei().memoizedState=wb.bind(null,Mt)},useEffectEvent:function(t){var n=ei(),a={impl:t};return n.memoizedState=a,function(){if((Xt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Tf={readContext:Vn,use:Vl,useCallback:i0,useContext:Vn,useEffect:vf,useImperativeHandle:n0,useInsertionEffect:$m,useLayoutEffect:e0,useMemo:a0,useReducer:jl,useRef:Km,useState:function(){return jl(ba)},useDebugValue:bf,useDeferredValue:function(t,n){var a=En();return s0(a,tn.memoizedState,t,n)},useTransition:function(){var t=jl(ba)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:Om,useId:c0,useHostTransitionStatus:Mf,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var a=En();return Gm(a,tn,t,n)},useMemoCache:pf,useCacheRefresh:u0};Tf.useEffectEvent=Jm;var m0={readContext:Vn,use:Vl,useCallback:i0,useContext:Vn,useEffect:vf,useImperativeHandle:n0,useInsertionEffect:$m,useLayoutEffect:e0,useMemo:a0,useReducer:gf,useRef:Km,useState:function(){return gf(ba)},useDebugValue:bf,useDeferredValue:function(t,n){var a=En();return tn===null?yf(a,t,n):s0(a,tn.memoizedState,t,n)},useTransition:function(){var t=gf(ba)[0],n=En().memoizedState;return[typeof t=="boolean"?t:Uo(t),n]},useSyncExternalStore:Om,useId:c0,useHostTransitionStatus:Mf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,n){var a=En();return tn!==null?Gm(a,tn,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:pf,useCacheRefresh:u0};m0.useEffectEvent=Jm;function Af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=yi(),u=Ja(o);u.payload=n,a!=null&&(u.callback=a),n=$a(t,u,o),n!==null&&(ui(n,t,o),Ro(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=yi(),u=Ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=$a(t,u,o),n!==null&&(ui(n,t,o),Ro(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=yi(),o=Ja(a);o.tag=2,n!=null&&(o.callback=n),n=$a(t,o,a),n!==null&&(ui(n,t,a),Ro(n,t,a))}};function g0(t,n,a,o,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,_):n.prototype&&n.prototype.isPureReactComponent?!bo(a,o)||!bo(u,f):!0}function x0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function js(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function _0(t){Tl(t)}function v0(t){console.error(t)}function b0(t){Tl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(t,n,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function S0(t){return t=Ja(t),t.tag=3,t}function M0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){y0(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){y0(n,a,o),typeof u!="function"&&(ss===null?ss=new Set([this]):ss.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function Cb(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&mr(n,a,u,!0),a=xi.current,a!==null){switch(a.tag){case 31:case 13:return Ni===null?rc():a.alternate===null&&bn===0&&(bn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),$f(t,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),$f(t,o,u)),!1}throw Error(s(435,a.tag))}return $f(t,o,u),rc(),!1}if(zt)return n=xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wu&&(t=Error(s(422),{cause:o}),Mo(wi(t,a)))):(o!==Wu&&(n=Error(s(423),{cause:o}),Mo(wi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=wi(o,a),u=Rf(t.stateNode,o,u),af(t,u),bn!==4&&(bn=2)),!1;var f=Error(s(520),{cause:o});if(f=wi(f,a),ko===null?ko=[f]:ko.push(f),bn!==4&&(bn=2),n===null)return!0;o=wi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Rf(a.stateNode,o,t),af(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ss===null||!ss.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=S0(u),M0(u,t,a,o),af(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),Rn=!1;function jn(t,n,a,o){n.child=t===null?wm(n,null,a,o):ks(n,t.child,a,o)}function E0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var _={};for(var N in o)N!=="ref"&&(_[N]=o[N])}else _=o;return Bs(n),o=uf(t,n,a,_,f,u),N=ff(),t!==null&&!Rn?(df(t,n,u),ya(t,n,u)):(zt&&N&&ju(n),n.flags|=1,jn(t,n,o,u),n.child)}function T0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,A0(t,n,f,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!zf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(_,o)&&t.ref===n.ref)return ya(t,n,u)}return n.flags|=1,t=ma(f,o),t.ref=n.ref,t.return=n,n.child=t}function A0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(bo(f,o)&&t.ref===n.ref)if(Rn=!1,n.pendingProps=o=f,zf(t,u))(t.flags&131072)!==0&&(Rn=!0);else return n.lanes=t.lanes,ya(t,n,u)}return Df(t,n,a,o,u)}function w0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return R0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?Dm(n,f):rf(),Nm(n);else return o=n.lanes=536870912,R0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ll(n,f.cachePool),Dm(n,f),ts(),n.memoizedState=null):(t!==null&&Ll(n,null),rf(),ts());return jn(t,n,u,a),n.child}function Po(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function R0(t,n,a,o,u){var f=$u();return f=f===null?null:{parent:An._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ll(n,null),rf(),Nm(n),t!==null&&mr(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function C0(t,n,a){return ks(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,_i(n),n.memoizedState=null,t}function Db(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(zt){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,Po(null,t);if(lf(n),(t=dn)?(t=Hg(t,Di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=dm(t),a.return=n,n.child=a,kn=n,dn=null)):t=null,t===null)throw Za(n);return n.lanes=536870912,null}return Zl(n,o)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(lf(n),u)if(n.flags&256)n.flags&=-257,n=C0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Rn||mr(t,n,a,!1),u=(a&t.childLanes)!==0,Rn||u){if(o=cn,o!==null&&(_=un(o,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,Os(t,_),ui(o,t,_),Cf;rc(),n=C0(t,n,a)}else t=f.treeContext,dn=Ui(_.nextSibling),kn=n,zt=!0,Ya=null,Di=!1,t!==null&&mm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=ma(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,u){return Bs(n),a=uf(t,n,a,o,void 0,u),o=ff(),t!==null&&!Rn?(df(t,n,u),ya(t,n,u)):(zt&&o&&ju(n),n.flags|=1,jn(t,n,a,u),n.child)}function D0(t,n,a,o,u,f){return Bs(n),n.updateQueue=null,a=Lm(n,o,a,u),Um(t),o=ff(),t!==null&&!Rn?(df(t,n,f),ya(t,n,f)):(zt&&o&&ju(n),n.flags|=1,jn(t,n,a,f),n.child)}function N0(t,n,a,o,u){if(Bs(n),n.stateNode===null){var f=fr,_=a.contextType;typeof _=="object"&&_!==null&&(f=Vn(_)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},tf(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Vn(_):fr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Af(n,a,_,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&wf.enqueueReplaceState(f,f.state,null),Do(n,o,f,u),Co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var N=n.memoizedProps,q=js(a,N);f.props=q;var de=f.context,Ae=a.contextType;_=fr,typeof Ae=="object"&&Ae!==null&&(_=Vn(Ae));var Ue=a.getDerivedStateFromProps;Ae=typeof Ue=="function"||typeof f.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,Ae||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(N||de!==_)&&x0(n,f,o,_),Qa=!1;var xe=n.memoizedState;f.state=xe,Do(n,o,f,u),Co(),de=n.memoizedState,N||xe!==de||Qa?(typeof Ue=="function"&&(Af(n,a,Ue,o),de=n.memoizedState),(q=Qa||g0(n,a,q,o,xe,de,_))?(Ae||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=de),f.props=o,f.state=de,f.context=_,o=q):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,nf(t,n),_=n.memoizedProps,Ae=js(a,_),f.props=Ae,Ue=n.pendingProps,xe=f.context,de=a.contextType,q=fr,typeof de=="object"&&de!==null&&(q=Vn(de)),N=a.getDerivedStateFromProps,(de=typeof N=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==Ue||xe!==q)&&x0(n,f,o,q),Qa=!1,xe=n.memoizedState,f.state=xe,Do(n,o,f,u),Co();var ye=n.memoizedState;_!==Ue||xe!==ye||Qa||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof N=="function"&&(Af(n,a,N,o),ye=n.memoizedState),(Ae=Qa||g0(n,a,Ae,o,xe,ye,q)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(de||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ye,q),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ye,q)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&xe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&xe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ye),f.props=o,f.state=ye,f.context=q,o=Ae):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&xe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&xe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Kl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=ks(n,t.child,null,u),n.child=ks(n,null,a,u)):jn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ya(t,n,u),t}function U0(t,n,a,o){return Is(),n.flags|=256,jn(t,n,a,o),n.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:ym()}}function Lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=bi),t}function L0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(Mn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(zt){if(u?es(n):ts(),(t=dn)?(t=Hg(t,Di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:qa!==null?{id:Zi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=dm(t),a.return=n,n.child=a,kn=n,dn=null)):t=null,t===null)throw Za(n);return md(t)?n.lanes=32:n.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(ts(),u=n.mode,N=Ql({mode:"hidden",children:N},u),o=Ps(o,u,a,null),N.return=n,o.return=n,N.sibling=o,n.child=N,o=n.child,o.memoizedState=Uf(a),o.childLanes=Lf(t,_,a),n.memoizedState=Nf,Po(null,o)):(es(n),Of(n,N))}var q=t.memoizedState;if(q!==null&&(N=q.dehydrated,N!==null)){if(f)n.flags&256?(es(n),n.flags&=-257,n=Pf(t,n,a)):n.memoizedState!==null?(ts(),n.child=t.child,n.flags|=128,n=null):(ts(),N=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),N=Ps(N,u,a,null),N.flags|=2,o.return=n,N.return=n,o.sibling=N,n.child=o,ks(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Lf(t,_,a),n.memoizedState=Nf,n=Po(null,o));else if(es(n),md(N)){if(_=N.nextSibling&&N.nextSibling.dataset,_)var de=_.dgst;_=de,o=Error(s(419)),o.stack="",o.digest=_,Mo({value:o,source:null,stack:null}),n=Pf(t,n,a)}else if(Rn||mr(t,n,a,!1),_=(a&t.childLanes)!==0,Rn||_){if(_=cn,_!==null&&(o=un(_,a),o!==0&&o!==q.retryLane))throw q.retryLane=o,Os(t,o),ui(_,t,o),Cf;pd(N)||rc(),n=Pf(t,n,a)}else pd(N)?(n.flags|=192,n.child=t.child,n=null):(t=q.treeContext,dn=Ui(N.nextSibling),kn=n,zt=!0,Ya=null,Di=!1,t!==null&&mm(n,t),n=Of(n,o.children),n.flags|=4096);return n}return u?(ts(),N=o.fallback,u=n.mode,q=t.child,de=q.sibling,o=ma(q,{mode:"hidden",children:o.children}),o.subtreeFlags=q.subtreeFlags&65011712,de!==null?N=ma(de,N):(N=Ps(N,u,a,null),N.flags|=2),N.return=n,o.return=n,o.sibling=N,n.child=o,Po(null,o),o=n.child,N=t.child.memoizedState,N===null?N=Uf(a):(u=N.cachePool,u!==null?(q=An._currentValue,u=u.parent!==q?{parent:q,pool:q}:u):u=ym(),N={baseLanes:N.baseLanes|a,cachePool:u}),o.memoizedState=N,o.childLanes=Lf(t,_,a),n.memoizedState=Nf,Po(t.child,o)):(es(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Of(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=gi(22,t,null,n),t.lanes=0,t}function Pf(t,n,a){return ks(n,t.child,null,a),t=Of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function O0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Zu(t.return,n,a)}function If(t,n,a,o,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function P0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var _=Mn.current,N=(_&2)!==0;if(N?(_=_&1|2,n.flags|=128):_&=1,be(Mn,_),jn(t,n,o,a),o=zt?So:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O0(t,a,n);else if(t.tag===19)O0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Fl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),If(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Fl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}If(n,!0,a,null,f,o);break;case"together":If(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),as|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(mr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function Nb(t,n,a){switch(n.tag){case 3:_e(n,n.stateNode.containerInfo),Ka(n,An,t.memoizedState.cache),Is();break;case 27:case 5:Ve(n);break;case 4:_e(n,n.stateNode.containerInfo);break;case 10:Ka(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,lf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(es(n),n.flags|=128,null):(a&n.child.childLanes)!==0?L0(t,n,a):(es(n),t=ya(t,n,a),t!==null?t.sibling:null);es(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(mr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return P0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(Mn,Mn.current),o)break;return null;case 22:return n.lanes=0,w0(t,n,a,n.pendingProps);case 24:Ka(n,An,t.memoizedState.cache)}return ya(t,n,a)}function I0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Rn=!0;else{if(!zf(t,a)&&(n.flags&128)===0)return Rn=!1,Nb(t,n,a);Rn=(t.flags&131072)!==0}else Rn=!1,zt&&(n.flags&1048576)!==0&&pm(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Gs(n.elementType),n.type=t,typeof t=="function")Hu(t)?(o=js(t,o),n.tag=1,n=N0(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===z){n.tag=11,n=E0(null,n,t,o,a);break e}else if(u===H){n.tag=14,n=T0(null,n,t,o,a);break e}}throw n=ue(t)||t,Error(s(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=js(o,n.pendingProps),N0(t,n,o,u,a);case 3:e:{if(_e(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,nf(t,n),Do(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ka(n,An,o),o!==f.cache&&Ku(n,[An],a,!0),Co(),o=_.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=U0(t,n,o,a);break e}else if(o!==u){u=wi(Error(s(424)),n),Mo(u),n=U0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(dn=Ui(t.firstChild),kn=n,zt=!0,Ya=null,Di=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Is(),o===u){n=ya(t,n,a);break e}jn(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:zt||(a=n.type,t=n.pendingProps,o=hc(ce.current).createElement(a),o[Lt]=n,o[xt]=t,Xn(o,a,t),Tn(o),n.stateNode=o):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ve(n),t===null&&zt&&(o=n.stateNode=jg(n.type,n.pendingProps,ce.current),kn=n,Di=!0,u=dn,cs(n.type)?(gd=u,dn=Ui(o.firstChild)):dn=u),jn(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&zt&&((u=o=dn)&&(o=oy(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,kn=n,dn=Ui(o.firstChild),Di=!1,u=!0):u=!1),u||Za(n)),Ve(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,o=f.children,fd(u,f)?o=null:_!==null&&fd(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=uf(t,n,Sb,null,null,a),Ko._currentValue=u),Kl(t,n),jn(t,n,o,a),n.child;case 6:return t===null&&zt&&((t=a=dn)&&(a=ly(a,n.pendingProps,Di),a!==null?(n.stateNode=a,kn=n,dn=null,t=!0):t=!1),t||Za(n)),null;case 13:return L0(t,n,a);case 4:return _e(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=ks(n,null,o,a):jn(t,n,o,a),n.child;case 11:return E0(t,n,n.type,n.pendingProps,a);case 7:return jn(t,n,n.pendingProps,a),n.child;case 8:return jn(t,n,n.pendingProps.children,a),n.child;case 12:return jn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ka(n,n.type,o.value),jn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Bs(n),u=Vn(u),o=o(u),n.flags|=1,jn(t,n,o,a),n.child;case 14:return T0(t,n,n.type,n.pendingProps,a);case 15:return A0(t,n,n.type,n.pendingProps,a);case 19:return P0(t,n,a);case 31:return Db(t,n,a);case 22:return w0(t,n,a,n.pendingProps);case 24:return Bs(n),o=Vn(An),t===null?(u=$u(),u===null&&(u=cn,f=Qu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},tf(n),Ka(n,An,u)):((t.lanes&a)!==0&&(nf(t,n),Do(n,null,null,a),Co()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ka(n,An,o)):(o=f.cache,Ka(n,An,o),o!==u.cache&&Ku(n,[An],a,!0))),jn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Sa(t){t.flags|=4}function Bf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(cg())t.flags|=8192;else throw Hs=Pl,ef}else t.flags&=-16777217}function z0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jg(n))if(cg())t.flags|=8192;else throw Hs=Pl,ef}function Jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,wr|=n)}function Io(t,n){if(!zt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function hn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ub(t,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(n),null;case 1:return hn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),_a(An),Pe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pr(n)?Sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qu())),hn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Sa(n),f!==null?(hn(n),z0(n,f)):(hn(n),Bf(n,u,null,o,a))):f?f!==t.memoizedState?(Sa(n),hn(n),z0(n,f)):(hn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Sa(n),hn(n),Bf(n,u,t,o,a)),null;case 27:if(qe(n),a=ce.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return hn(n),null}t=Re.current,pr(n)?gm(n):(t=jg(u,o,a),n.stateNode=t,Sa(n))}return hn(n),null;case 5:if(qe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return hn(n),null}if(f=Re.current,pr(n))gm(n);else{var _=hc(ce.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?_.createElement(u,{is:o.is}):_.createElement(u)}}f[Lt]=n,f[xt]=o;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Xn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Sa(n)}}return hn(n),Bf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ce.current,pr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=kn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[Lt]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||Za(n,!0)}else t=hc(t).createTextNode(o),t[Lt]=n,n.stateNode=t}return hn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=pr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Lt]=n}else Is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),t=!1}else a=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(_i(n),n):(_i(n),null);if((n.flags&128)!==0)throw Error(s(558))}return hn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=pr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Lt]=n}else Is(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;hn(n),u=!1}else u=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(_i(n),n):(_i(n),null)}return _i(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),hn(n),null);case 4:return Pe(),t===null&&rd(n.stateNode.containerInfo),hn(n),null;case 10:return _a(n.type),hn(n),null;case 19:if(K(Mn),o=n.memoizedState,o===null)return hn(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Io(o,!1);else{if(bn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Fl(t),f!==null){for(n.flags|=128,Io(o,!1),t=f.updateQueue,n.updateQueue=t,Jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)fm(a,t),a=a.sibling;return be(Mn,Mn.current&1|2),zt&&ga(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&we()>ic&&(n.flags|=128,u=!0,Io(o,!1),n.lanes=4194304)}else{if(!u)if(t=Fl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Jl(n,t),Io(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!zt)return hn(n),null}else 2*we()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,Io(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=we(),t.sibling=null,a=Mn.current,be(Mn,u?a&1|2:a&1),zt&&ga(n,o.treeForkCount),t):(hn(n),null);case 22:case 23:return _i(n),of(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(hn(n),n.subtreeFlags&6&&(n.flags|=8192)):hn(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&K(Fs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(An),hn(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Lb(t,n){switch(Xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(An),Pe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return qe(n),null;case 31:if(n.memoizedState!==null){if(_i(n),n.alternate===null)throw Error(s(340));Is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(_i(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Is()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return K(Mn),null;case 4:return Pe(),null;case 10:return _a(n.type),null;case 22:case 23:return _i(n),of(),t!==null&&K(Fs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return _a(An),null;case 25:return null;default:return null}}function B0(t,n){switch(Xu(n),n.tag){case 3:_a(An),Pe();break;case 26:case 27:case 5:qe(n);break;case 4:Pe();break;case 31:n.memoizedState!==null&&_i(n);break;case 13:_i(n);break;case 19:K(Mn);break;case 10:_a(n.type);break;case 22:case 23:_i(n),of(),t!==null&&K(Fs);break;case 24:_a(An)}}function zo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,_=a.inst;o=f(),_.destroy=o}a=a.next}while(a!==u)}}catch(N){Jt(n,n.return,N)}}function ns(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var _=o.inst,N=_.destroy;if(N!==void 0){_.destroy=void 0,u=n;var q=a,de=N;try{de()}catch(Ae){Jt(u,q,Ae)}}}o=o.next}while(o!==f)}}catch(Ae){Jt(n,n.return,Ae)}}function F0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cm(n,a)}catch(o){Jt(t,t.return,o)}}}function G0(t,n,a){a.props=js(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Jt(t,n,o)}}function Bo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Jt(t,n,u)}}function Qi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Jt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Jt(t,n,u)}else a.current=null}function H0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Jt(t,t.return,u)}}function Ff(t,n,a){try{var o=t.stateNode;ty(o,t.type,a,n),o[xt]=n}catch(u){Jt(t,t.return,u)}}function k0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&cs(t.type)||t.tag===4}function Gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&cs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ha));else if(o!==4&&(o===27&&cs(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Hf(t,n,a),t=t.sibling;t!==null;)Hf(t,n,a),t=t.sibling}function $l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&cs(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($l(t,n,a),t=t.sibling;t!==null;)$l(t,n,a),t=t.sibling}function V0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Xn(n,o,a),n[Lt]=t,n[xt]=a}catch(f){Jt(t,t.return,f)}}var Ma=!1,Cn=!1,kf=!1,j0=typeof WeakSet=="function"?WeakSet:Set,Fn=null;function Ob(t,n){if(t=t.containerInfo,cd=bc,t=nm(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,N=-1,q=-1,de=0,Ae=0,Ue=t,xe=null;t:for(;;){for(var ye;Ue!==a||u!==0&&Ue.nodeType!==3||(N=_+u),Ue!==f||o!==0&&Ue.nodeType!==3||(q=_+o),Ue.nodeType===3&&(_+=Ue.nodeValue.length),(ye=Ue.firstChild)!==null;)xe=Ue,Ue=ye;for(;;){if(Ue===t)break t;if(xe===a&&++de===u&&(N=_),xe===f&&++Ae===o&&(q=_),(ye=Ue.nextSibling)!==null)break;Ue=xe,xe=Ue.parentNode}Ue=ye}a=N===-1||q===-1?null:{start:N,end:q}}else a=null}a=a||{start:0,end:0}}else a=null;for(ud={focusedElem:t,selectionRange:a},bc=!1,Fn=n;Fn!==null;)if(n=Fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Fn=t;else for(;Fn!==null;){switch(n=Fn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var at=js(a.type,u);t=o.getSnapshotBeforeUpdate(at,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(gt){Jt(a,a.return,gt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)hd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Fn=t;break}Fn=n.return}}function X0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(t,a),o&4&&zo(5,a);break;case 1:if(Ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Jt(a,a.return,_)}else{var u=js(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Jt(a,a.return,_)}}o&64&&F0(a),o&512&&Bo(a,a.return);break;case 3:if(Ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(t,n)}catch(_){Jt(a,a.return,_)}}break;case 27:n===null&&o&4&&V0(a);case 26:case 5:Ta(t,a),n===null&&o&4&&H0(a),o&512&&Bo(a,a.return);break;case 12:Ta(t,a);break;case 31:Ta(t,a),o&4&&Y0(t,a);break;case 13:Ta(t,a),o&4&&Z0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vb.bind(null,a),cy(t,a))));break;case 22:if(o=a.memoizedState!==null||Ma,!o){n=n!==null&&n.memoizedState!==null||Cn,u=Ma;var f=Cn;Ma=o,(Cn=n)&&!f?Aa(t,a,(a.subtreeFlags&8772)!==0):Ta(t,a),Ma=u,Cn=f}break;case 30:break;default:Ta(t,a)}}function W0(t){var n=t.alternate;n!==null&&(t.alternate=null,W0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&fo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gn=null,ri=!1;function Ea(t,n,a){for(a=a.child;a!==null;)q0(t,n,a),a=a.sibling}function q0(t,n,a){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(Z,a)}catch{}switch(a.tag){case 26:Cn||Qi(a,n),Ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Cn||Qi(a,n);var o=gn,u=ri;cs(a.type)&&(gn=a.stateNode,ri=!1),Ea(t,n,a),qo(a.stateNode),gn=o,ri=u;break;case 5:Cn||Qi(a,n);case 6:if(o=gn,u=ri,gn=null,Ea(t,n,a),gn=o,ri=u,gn!==null)if(ri)try{(gn.nodeType===9?gn.body:gn.nodeName==="HTML"?gn.ownerDocument.body:gn).removeChild(a.stateNode)}catch(f){Jt(a,n,f)}else try{gn.removeChild(a.stateNode)}catch(f){Jt(a,n,f)}break;case 18:gn!==null&&(ri?(t=gn,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Pr(t)):Fg(gn,a.stateNode));break;case 4:o=gn,u=ri,gn=a.stateNode.containerInfo,ri=!0,Ea(t,n,a),gn=o,ri=u;break;case 0:case 11:case 14:case 15:ns(2,a,n),Cn||ns(4,a,n),Ea(t,n,a);break;case 1:Cn||(Qi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&G0(a,n,o)),Ea(t,n,a);break;case 21:Ea(t,n,a);break;case 22:Cn=(o=Cn)||a.memoizedState!==null,Ea(t,n,a),Cn=o;break;default:Ea(t,n,a)}}function Y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Pr(t)}catch(a){Jt(n,n.return,a)}}}function Z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Pr(t)}catch(a){Jt(n,n.return,a)}}function Pb(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new j0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new j0),n;default:throw Error(s(435,t.tag))}}function ec(t,n){var a=Pb(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=jb.bind(null,t,o);o.then(u,u)}})}function oi(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,_=n,N=_;e:for(;N!==null;){switch(N.tag){case 27:if(cs(N.type)){gn=N.stateNode,ri=!1;break e}break;case 5:gn=N.stateNode,ri=!1;break e;case 3:case 4:gn=N.stateNode.containerInfo,ri=!0;break e}N=N.return}if(gn===null)throw Error(s(160));q0(f,_,u),gn=null,ri=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)K0(n,t),n=n.sibling}var Hi=null;function K0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:oi(n,t),li(t),o&4&&(ns(3,t,t.return),zo(3,t),ns(5,t,t.return));break;case 1:oi(n,t),li(t),o&512&&(Cn||a===null||Qi(a,a.return)),o&64&&Ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Hi;if(oi(n,t),li(t),o&512&&(Cn||a===null||Qi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ha]||f[Lt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Xn(f,o,a),f[Lt]=t,Tn(f),o=f;break e;case"link":var _=Kg("link","href",u).get(o+(a.href||""));if(_){for(var N=0;N<_.length;N++)if(f=_[N],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(N,1);break t}}f=u.createElement(o),Xn(f,o,a),u.head.appendChild(f);break;case"meta":if(_=Kg("meta","content",u).get(o+(a.content||""))){for(N=0;N<_.length;N++)if(f=_[N],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(N,1);break t}}f=u.createElement(o),Xn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[Lt]=t,Tn(f),o=f}t.stateNode=o}else Qg(u,t.type,t.stateNode);else t.stateNode=Zg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Qg(u,t.type,t.stateNode):Zg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Ff(t,t.memoizedProps,a.memoizedProps)}break;case 27:oi(n,t),li(t),o&512&&(Cn||a===null||Qi(a,a.return)),a!==null&&o&4&&Ff(t,t.memoizedProps,a.memoizedProps);break;case 5:if(oi(n,t),li(t),o&512&&(Cn||a===null||Qi(a,a.return)),t.flags&32){u=t.stateNode;try{pi(u,"")}catch(at){Jt(t,t.return,at)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Ff(t,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(oi(n,t),li(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(at){Jt(t,t.return,at)}}break;case 3:if(gc=null,u=Hi,Hi=pc(n.containerInfo),oi(n,t),Hi=u,li(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Pr(n.containerInfo)}catch(at){Jt(t,t.return,at)}kf&&(kf=!1,Q0(t));break;case 4:o=Hi,Hi=pc(t.stateNode.containerInfo),oi(n,t),li(t),Hi=o;break;case 12:oi(n,t),li(t);break;case 31:oi(n,t),li(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 13:oi(n,t),li(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=we()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 22:u=t.memoizedState!==null;var q=a!==null&&a.memoizedState!==null,de=Ma,Ae=Cn;if(Ma=de||u,Cn=Ae||q,oi(n,t),Cn=Ae,Ma=de,li(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||q||Ma||Cn||Xs(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){q=a=n;try{if(f=q.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{N=q.stateNode;var Ue=q.memoizedProps.style,xe=Ue!=null&&Ue.hasOwnProperty("display")?Ue.display:null;N.style.display=xe==null||typeof xe=="boolean"?"":(""+xe).trim()}}catch(at){Jt(q,q.return,at)}}}else if(n.tag===6){if(a===null){q=n;try{q.stateNode.nodeValue=u?"":q.memoizedProps}catch(at){Jt(q,q.return,at)}}}else if(n.tag===18){if(a===null){q=n;try{var ye=q.stateNode;u?Gg(ye,!0):Gg(q.stateNode,!1)}catch(at){Jt(q,q.return,at)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(t,a))));break;case 19:oi(n,t),li(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 30:break;case 21:break;default:oi(n,t),li(t)}}function li(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(k0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Gf(t);$l(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(pi(_,""),a.flags&=-33);var N=Gf(t);$l(t,N,_);break;case 3:case 4:var q=a.stateNode.containerInfo,de=Gf(t);Hf(t,de,q);break;default:throw Error(s(161))}}catch(Ae){Jt(t,t.return,Ae)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)X0(t,n.alternate,n),n=n.sibling}function Xs(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ns(4,n,n.return),Xs(n);break;case 1:Qi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&G0(n,n.return,a),Xs(n);break;case 27:qo(n.stateNode);case 26:case 5:Qi(n,n.return),Xs(n);break;case 22:n.memoizedState===null&&Xs(n);break;case 30:Xs(n);break;default:Xs(n)}t=t.sibling}}function Aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Aa(u,f,a),zo(4,f);break;case 1:if(Aa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(de){Jt(o,o.return,de)}if(o=f,u=o.updateQueue,u!==null){var N=o.stateNode;try{var q=u.shared.hiddenCallbacks;if(q!==null)for(u.shared.hiddenCallbacks=null,u=0;u<q.length;u++)Rm(q[u],N)}catch(de){Jt(o,o.return,de)}}a&&_&64&&F0(f),Bo(f,f.return);break;case 27:V0(f);case 26:case 5:Aa(u,f,a),a&&o===null&&_&4&&H0(f),Bo(f,f.return);break;case 12:Aa(u,f,a);break;case 31:Aa(u,f,a),a&&_&4&&Y0(u,f);break;case 13:Aa(u,f,a),a&&_&4&&Z0(u,f);break;case 22:f.memoizedState===null&&Aa(u,f,a),Bo(f,f.return);break;case 30:break;default:Aa(u,f,a)}n=n.sibling}}function Vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Eo(a))}function jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Eo(t))}function ki(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)J0(t,n,a,o),n=n.sibling}function J0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:ki(t,n,a,o),u&2048&&zo(9,n);break;case 1:ki(t,n,a,o);break;case 3:ki(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Eo(t)));break;case 12:if(u&2048){ki(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,N=f.onPostCommit;typeof N=="function"&&N(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(q){Jt(n,n.return,q)}}else ki(t,n,a,o);break;case 31:ki(t,n,a,o);break;case 13:ki(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?ki(t,n,a,o):Fo(t,n):f._visibility&2?ki(t,n,a,o):(f._visibility|=2,Er(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(_,n);break;case 24:ki(t,n,a,o),u&2048&&jf(n.alternate,n);break;default:ki(t,n,a,o)}}function Er(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,N=a,q=o,de=_.flags;switch(_.tag){case 0:case 11:case 15:Er(f,_,N,q,u),zo(8,_);break;case 23:break;case 22:var Ae=_.stateNode;_.memoizedState!==null?Ae._visibility&2?Er(f,_,N,q,u):Fo(f,_):(Ae._visibility|=2,Er(f,_,N,q,u)),u&&de&2048&&Vf(_.alternate,_);break;case 24:Er(f,_,N,q,u),u&&de&2048&&jf(_.alternate,_);break;default:Er(f,_,N,q,u)}n=n.sibling}}function Fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Fo(a,o),u&2048&&Vf(o.alternate,o);break;case 24:Fo(a,o),u&2048&&jf(o.alternate,o);break;default:Fo(a,o)}n=n.sibling}}var Go=8192;function Tr(t,n,a){if(t.subtreeFlags&Go)for(t=t.child;t!==null;)$0(t,n,a),t=t.sibling}function $0(t,n,a){switch(t.tag){case 26:Tr(t,n,a),t.flags&Go&&t.memoizedState!==null&&yy(a,Hi,t.memoizedState,t.memoizedProps);break;case 5:Tr(t,n,a);break;case 3:case 4:var o=Hi;Hi=pc(t.stateNode.containerInfo),Tr(t,n,a),Hi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Go,Go=16777216,Tr(t,n,a),Go=o):Tr(t,n,a));break;default:Tr(t,n,a)}}function eg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ho(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fn=o,ng(o,t)}eg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tg(t),t=t.sibling}function tg(t){switch(t.tag){case 0:case 11:case 15:Ho(t),t.flags&2048&&ns(9,t,t.return);break;case 3:Ho(t);break;case 12:Ho(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):Ho(t);break;default:Ho(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Fn=o,ng(o,t)}eg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ns(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function ng(t,n){for(;Fn!==null;){var a=Fn;switch(a.tag){case 0:case 11:case 15:ns(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Eo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Fn=o;else e:for(a=t;Fn!==null;){o=Fn;var u=o.sibling,f=o.return;if(W0(o),o===a){Fn=null;break e}if(u!==null){u.return=f,Fn=u;break e}Fn=f}}}var Ib={getCacheForType:function(t){var n=Vn(An),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Vn(An).controller.signal}},zb=typeof WeakMap=="function"?WeakMap:Map,Xt=0,cn=null,Dt=null,Ot=0,Qt=0,vi=null,is=!1,Ar=!1,Xf=!1,wa=0,bn=0,as=0,Ws=0,Wf=0,bi=0,wr=0,ko=null,ci=null,qf=!1,nc=0,ig=0,ic=1/0,ac=null,ss=null,Ln=0,rs=null,Rr=null,Ra=0,Yf=0,Zf=null,ag=null,Vo=0,Kf=null;function yi(){return(Xt&2)!==0&&Ot!==0?Ot&-Ot:w.T!==null?nd():zi()}function sg(){if(bi===0)if((Ot&536870912)===0||zt){var t=$e;$e<<=1,($e&3932160)===0&&($e=262144),bi=t}else bi=536870912;return t=xi.current,t!==null&&(t.flags|=32),bi}function ui(t,n,a){(t===cn&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)&&(Cr(t,0),os(t,Ot,bi,!1)),dt(t,a),((Xt&2)===0||t!==cn)&&(t===cn&&((Xt&2)===0&&(Ws|=a),bn===4&&os(t,Ot,bi,!1)),Ji(t))}function rg(t,n,a){if((Xt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ge(t,n),u=o?Gb(t,n):Jf(t,n,!0),f=o;do{if(u===0){Ar&&!o&&os(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Bb(a)){u=Jf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var N=t;u=ko;var q=N.current.memoizedState.isDehydrated;if(q&&(Cr(N,_).flags|=256),_=Jf(N,_,!1),_!==2){if(Xf&&!q){N.errorRecoveryDisabledLanes|=f,Ws|=f,u=4;break e}f=ci,ci=u,f!==null&&(ci===null?ci=f:ci.push.apply(ci,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){Cr(t,0),os(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:os(o,n,bi,!is);break e;case 2:ci=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-we(),10<u)){if(os(o,n,bi,!is),ve(o,0,!0)!==0)break e;Ra=n,o.timeoutHandle=zg(og.bind(null,o,a,ci,ac,qf,n,bi,Ws,wr,is,f,"Throttled",-0,0),u);break e}og(o,a,ci,ac,qf,n,bi,Ws,wr,is,f,null,-0,0)}}break}while(!0);Ji(t)}function og(t,n,a,o,u,f,_,N,q,de,Ae,Ue,xe,ye){if(t.timeoutHandle=-1,Ue=n.subtreeFlags,Ue&8192||(Ue&16785408)===16785408){Ue={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},$0(n,f,Ue);var at=(f&62914560)===f?nc-we():(f&4194048)===f?ig-we():0;if(at=Sy(Ue,at),at!==null){Ra=f,t.cancelPendingCommit=at(mg.bind(null,t,n,f,a,o,u,_,N,q,Ae,Ue,null,xe,ye)),os(t,f,_,!de);return}}mg(t,n,f,a,o,u,_,N,q)}function Bb(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!mi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function os(t,n,a,o){n&=~Wf,n&=~Ws,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Se(u),_=1<<f;o[f]=-1,u&=~_}a!==0&&Ut(t,a,n)}function sc(){return(Xt&6)===0?(jo(0),!1):!0}function Qf(){if(Dt!==null){if(Qt===0)var t=Dt.return;else t=Dt,xa=zs=null,hf(t),vr=null,Ao=0,t=Dt;for(;t!==null;)B0(t.alternate,t),t=t.return;Dt=null}}function Cr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ay(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ra=0,Qf(),cn=t,Dt=a=ma(t.current,null),Ot=n,Qt=0,vi=null,is=!1,Ar=Ge(t,n),Xf=!1,wr=bi=Wf=Ws=as=bn=0,ci=ko=null,qf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Se(o),f=1<<u;n|=t[u],o&=~f}return wa=n,Al(),a}function lg(t,n){Mt=null,w.H=Oo,n===_r||n===Ol?(n=Em(),Qt=3):n===ef?(n=Em(),Qt=4):Qt=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vi=n,Dt===null&&(bn=1,Yl(t,wi(n,t.current)))}function cg(){var t=xi.current;return t===null?!0:(Ot&4194048)===Ot?Ni===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?t===Ni:!1}function ug(){var t=w.H;return w.H=Oo,t===null?Oo:t}function fg(){var t=w.A;return w.A=Ib,t}function rc(){bn=4,is||(Ot&4194048)!==Ot&&xi.current!==null||(Ar=!0),(as&134217727)===0&&(Ws&134217727)===0||cn===null||os(cn,Ot,bi,!1)}function Jf(t,n,a){var o=Xt;Xt|=2;var u=ug(),f=fg();(cn!==t||Ot!==n)&&(ac=null,Cr(t,n)),n=!1;var _=bn;e:do try{if(Qt!==0&&Dt!==null){var N=Dt,q=vi;switch(Qt){case 8:Qf(),_=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(n=!0);var de=Qt;if(Qt=0,vi=null,Dr(t,N,q,de),a&&Ar){_=0;break e}break;default:de=Qt,Qt=0,vi=null,Dr(t,N,q,de)}}Fb(),_=bn;break}catch(Ae){lg(t,Ae)}while(!0);return n&&t.shellSuspendCounter++,xa=zs=null,Xt=o,w.H=u,w.A=f,Dt===null&&(cn=null,Ot=0,Al()),_}function Fb(){for(;Dt!==null;)dg(Dt)}function Gb(t,n){var a=Xt;Xt|=2;var o=ug(),u=fg();cn!==t||Ot!==n?(ac=null,ic=we()+500,Cr(t,n)):Ar=Ge(t,n);e:do try{if(Qt!==0&&Dt!==null){n=Dt;var f=vi;t:switch(Qt){case 1:Qt=0,vi=null,Dr(t,n,f,1);break;case 2:case 9:if(Sm(f)){Qt=0,vi=null,hg(n);break}n=function(){Qt!==2&&Qt!==9||cn!==t||(Qt=7),Ji(t)},f.then(n,n);break e;case 3:Qt=7;break e;case 4:Qt=5;break e;case 7:Sm(f)?(Qt=0,vi=null,hg(n)):(Qt=0,vi=null,Dr(t,n,f,7));break;case 5:var _=null;switch(Dt.tag){case 26:_=Dt.memoizedState;case 5:case 27:var N=Dt;if(_?Jg(_):N.stateNode.complete){Qt=0,vi=null;var q=N.sibling;if(q!==null)Dt=q;else{var de=N.return;de!==null?(Dt=de,oc(de)):Dt=null}break t}}Qt=0,vi=null,Dr(t,n,f,5);break;case 6:Qt=0,vi=null,Dr(t,n,f,6);break;case 8:Qf(),bn=6;break e;default:throw Error(s(462))}}Hb();break}catch(Ae){lg(t,Ae)}while(!0);return xa=zs=null,w.H=o,w.A=u,Xt=a,Dt!==null?0:(cn=null,Ot=0,Al(),bn)}function Hb(){for(;Dt!==null&&!rt();)dg(Dt)}function dg(t){var n=I0(t.alternate,t,wa);t.memoizedProps=t.pendingProps,n===null?oc(t):Dt=n}function hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=D0(a,n,n.pendingProps,n.type,void 0,Ot);break;case 11:n=D0(a,n,n.pendingProps,n.type.render,n.ref,Ot);break;case 5:hf(n);default:B0(a,n),n=Dt=fm(n,wa),n=I0(a,n,wa)}t.memoizedProps=t.pendingProps,n===null?oc(t):Dt=n}function Dr(t,n,a,o){xa=zs=null,hf(n),vr=null,Ao=0;var u=n.return;try{if(Cb(t,u,n,a,Ot)){bn=1,Yl(t,wi(a,t.current)),Dt=null;return}}catch(f){if(u!==null)throw Dt=u,f;bn=1,Yl(t,wi(a,t.current)),Dt=null;return}n.flags&32768?(zt||o===1?t=!0:Ar||(Ot&536870912)!==0?t=!1:(is=t=!0,(o===2||o===9||o===3||o===6)&&(o=xi.current,o!==null&&o.tag===13&&(o.flags|=16384))),pg(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){pg(n,is);return}t=n.return;var a=Ub(n.alternate,n,wa);if(a!==null){Dt=a;return}if(n=n.sibling,n!==null){Dt=n;return}Dt=n=t}while(n!==null);bn===0&&(bn=5)}function pg(t,n){do{var a=Lb(t.alternate,t);if(a!==null){a.flags&=32767,Dt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Dt=t;return}Dt=t=a}while(t!==null);bn=6,Dt=null}function mg(t,n,a,o,u,f,_,N,q){t.cancelPendingCommit=null;do lc();while(Ln!==0);if((Xt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Fu,Gt(t,a,f,_,N,q),t===cn&&(Dt=cn=null,Ot=0),Rr=n,rs=t,Ra=a,Yf=f,Zf=u,ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xb(F,function(){return bg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=w.T,w.T=null,u=P.p,P.p=2,_=Xt,Xt|=4;try{Ob(t,n,a)}finally{Xt=_,P.p=u,w.T=o}}Ln=1,gg(),xg(),_g()}}function gg(){if(Ln===1){Ln=0;var t=rs,n=Rr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=w.T,w.T=null;var o=P.p;P.p=2;var u=Xt;Xt|=4;try{K0(n,t);var f=ud,_=nm(t.containerInfo),N=f.focusedElem,q=f.selectionRange;if(_!==N&&N&&N.ownerDocument&&tm(N.ownerDocument.documentElement,N)){if(q!==null&&Ou(N)){var de=q.start,Ae=q.end;if(Ae===void 0&&(Ae=de),"selectionStart"in N)N.selectionStart=de,N.selectionEnd=Math.min(Ae,N.value.length);else{var Ue=N.ownerDocument||document,xe=Ue&&Ue.defaultView||window;if(xe.getSelection){var ye=xe.getSelection(),at=N.textContent.length,gt=Math.min(q.start,at),an=q.end===void 0?gt:Math.min(q.end,at);!ye.extend&&gt>an&&(_=an,an=gt,gt=_);var le=em(N,gt),J=em(N,an);if(le&&J&&(ye.rangeCount!==1||ye.anchorNode!==le.node||ye.anchorOffset!==le.offset||ye.focusNode!==J.node||ye.focusOffset!==J.offset)){var fe=Ue.createRange();fe.setStart(le.node,le.offset),ye.removeAllRanges(),gt>an?(ye.addRange(fe),ye.extend(J.node,J.offset)):(fe.setEnd(J.node,J.offset),ye.addRange(fe))}}}}for(Ue=[],ye=N;ye=ye.parentNode;)ye.nodeType===1&&Ue.push({element:ye,left:ye.scrollLeft,top:ye.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Ue.length;N++){var De=Ue[N];De.element.scrollLeft=De.left,De.element.scrollTop=De.top}}bc=!!cd,ud=cd=null}finally{Xt=u,P.p=o,w.T=a}}t.current=n,Ln=2}}function xg(){if(Ln===2){Ln=0;var t=rs,n=Rr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=w.T,w.T=null;var o=P.p;P.p=2;var u=Xt;Xt|=4;try{X0(t,n.alternate,n)}finally{Xt=u,P.p=o,w.T=a}}Ln=3}}function _g(){if(Ln===4||Ln===3){Ln=0,Qe();var t=rs,n=Rr,a=Ra,o=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ln=5:(Ln=0,Rr=rs=null,vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ss=null),_n(a),n=n.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=w.T,u=P.p,P.p=2,w.T=null;try{for(var f=t.onRecoverableError,_=0;_<o.length;_++){var N=o[_];f(N.value,{componentStack:N.stack})}}finally{w.T=n,P.p=u}}(Ra&3)!==0&&lc(),Ji(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Kf?Vo++:(Vo=0,Kf=t):Vo=0,jo(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Eo(n)))}function lc(){return gg(),xg(),_g(),bg()}function bg(){if(Ln!==5)return!1;var t=rs,n=Yf;Yf=0;var a=_n(Ra),o=w.T,u=P.p;try{P.p=32>a?32:a,w.T=null,a=Zf,Zf=null;var f=rs,_=Ra;if(Ln=0,Rr=rs=null,Ra=0,(Xt&6)!==0)throw Error(s(331));var N=Xt;if(Xt|=4,tg(f.current),J0(f,f.current,_,a),Xt=N,jo(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(Z,f)}catch{}return!0}finally{P.p=u,w.T=o,vg(t,n)}}function yg(t,n,a){n=wi(a,n),n=Rf(t.stateNode,n,2),t=$a(t,n,2),t!==null&&(dt(t,2),Ji(t))}function Jt(t,n,a){if(t.tag===3)yg(t,t,a);else for(;n!==null;){if(n.tag===3){yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ss===null||!ss.has(o))){t=wi(a,t),a=S0(2),o=$a(n,a,2),o!==null&&(M0(a,o,n,t),dt(o,2),Ji(o));break}}n=n.return}}function $f(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new zb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),t=kb.bind(null,t,n,a),n.then(t,t))}function kb(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,cn===t&&(Ot&a)===a&&(bn===4||bn===3&&(Ot&62914560)===Ot&&300>we()-nc?(Xt&2)===0&&Cr(t,0):Wf|=a,wr===Ot&&(wr=0)),Ji(t)}function Sg(t,n){n===0&&(n=Le()),t=Os(t,n),t!==null&&(dt(t,n),Ji(t))}function Vb(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Sg(t,a)}function jb(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Sg(t,a)}function Xb(t,n){return j(t,n)}var cc=null,Nr=null,ed=!1,uc=!1,td=!1,ls=0;function Ji(t){t!==Nr&&t.next===null&&(Nr===null?cc=Nr=t:Nr=Nr.next=t),uc=!0,ed||(ed=!0,qb())}function jo(t,n){if(!td&&uc){td=!0;do for(var a=!1,o=cc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var _=o.suspendedLanes,N=o.pingedLanes;f=(1<<31-Se(42|t)+1)-1,f&=u&~(_&~N),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ag(o,f))}else f=Ot,f=ve(o,o===cn?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ge(o,f)||(a=!0,Ag(o,f));o=o.next}while(a);td=!1}}function Wb(){Mg()}function Mg(){uc=ed=!1;var t=0;ls!==0&&iy()&&(t=ls);for(var n=we(),a=null,o=cc;o!==null;){var u=o.next,f=Eg(o,n);f===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(Nr=a)):(a=o,(t!==0||(f&3)!==0)&&(uc=!0)),o=u}Ln!==0&&Ln!==5||jo(t),ls!==0&&(ls=0)}function Eg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Se(f),N=1<<_,q=u[_];q===-1?((N&a)===0||(N&o)!==0)&&(u[_]=Ie(N,n)):q<=n&&(t.expiredLanes|=N),f&=~N}if(n=cn,a=Ot,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Qt===2||Qt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ye(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ge(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ye(o),_n(a)){case 2:case 8:a=M;break;case 32:a=F;break;case 268435456:a=V;break;default:a=F}return o=Tg.bind(null,t),a=j(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ye(o),t.callbackPriority=2,t.callbackNode=null,2}function Tg(t,n){if(Ln!==0&&Ln!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var o=Ot;return o=ve(t,t===cn?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(rg(t,o,n),Eg(t,we()),t.callbackNode!=null&&t.callbackNode===a?Tg.bind(null,t):null)}function Ag(t,n){if(lc())return null;rg(t,n,!0)}function qb(){sy(function(){(Xt&6)!==0?j(U,Wb):Mg()})}function nd(){if(ls===0){var t=gr;t===0&&(t=Fe,Fe<<=1,(Fe&261888)===0&&(Fe=256)),ls=t}return ls}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ds(""+t)}function Rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yb(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=wg((u[xt]||null).action),_=o.submitter;_&&(n=(n=_[xt]||null)?wg(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var N=new Sl("action","action",null,o,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ls!==0){var q=_?Rg(u,_):new FormData(u);Sf(a,{pending:!0,data:q,method:u.method,action:f},null,q)}}else typeof f=="function"&&(N.preventDefault(),q=_?Rg(u,_):new FormData(u),Sf(a,{pending:!0,data:q,method:u.method,action:f},f,q))},currentTarget:u}]})}}for(var id=0;id<Bu.length;id++){var ad=Bu[id],Zb=ad.toLowerCase(),Kb=ad[0].toUpperCase()+ad.slice(1);Gi(Zb,"on"+Kb)}Gi(sm,"onAnimationEnd"),Gi(rm,"onAnimationIteration"),Gi(om,"onAnimationStart"),Gi("dblclick","onDoubleClick"),Gi("focusin","onFocus"),Gi("focusout","onBlur"),Gi(db,"onTransitionRun"),Gi(hb,"onTransitionStart"),Gi(pb,"onTransitionCancel"),Gi(lm,"onTransitionEnd"),ge("onMouseEnter",["mouseout","mouseover"]),ge("onMouseLeave",["mouseout","mouseover"]),ge("onPointerEnter",["pointerout","pointerover"]),ge("onPointerLeave",["pointerout","pointerover"]),se("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),se("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),se("onBeforeInput",["compositionend","keypress","textInput","paste"]),se("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),se("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xo));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var _=o.length-1;0<=_;_--){var N=o[_],q=N.instance,de=N.currentTarget;if(N=N.listener,q!==f&&u.isPropagationStopped())break e;f=N,u.currentTarget=de;try{f(u)}catch(Ae){Tl(Ae)}u.currentTarget=null,f=q}else for(_=0;_<o.length;_++){if(N=o[_],q=N.instance,de=N.currentTarget,N=N.listener,q!==f&&u.isPropagationStopped())break e;f=N,u.currentTarget=de;try{f(u)}catch(Ae){Tl(Ae)}u.currentTarget=null,f=q}}}}function Nt(t,n){var a=n[Ht];a===void 0&&(a=n[Ht]=new Set);var o=t+"__bubble";a.has(o)||(Dg(n,t,2,!1),a.add(o))}function sd(t,n,a){var o=0;n&&(o|=4),Dg(a,t,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[fc]){t[fc]=!0,_l.forEach(function(a){a!=="selectionchange"&&(Qb.has(a)||sd(a,!1,t),sd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,sd("selectionchange",!1,n))}}function Dg(t,n,a,o){switch(sx(n)){case 2:var u=Ty;break;case 8:u=Ay;break;default:u=yd}a=u.bind(null,n,a,t),u=void 0,!Tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function od(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var N=o.stateNode.containerInfo;if(N===u)break;if(_===4)for(_=o.return;_!==null;){var q=_.tag;if((q===3||q===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;N!==null;){if(_=ka(N),_===null)return;if(q=_.tag,q===5||q===6||q===26||q===27){o=f=_;continue e}N=N.parentNode}}o=o.return}Pp(function(){var de=f,Ae=Mu(a),Ue=[];e:{var xe=cm.get(t);if(xe!==void 0){var ye=Sl,at=t;switch(t){case"keypress":if(bl(a)===0)break e;case"keydown":case"keyup":ye=jv;break;case"focusin":at="focus",ye=Cu;break;case"focusout":at="blur",ye=Cu;break;case"beforeblur":case"afterblur":ye=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=Bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=qv;break;case sm:case rm:case om:ye=Pv;break;case lm:ye=Zv;break;case"scroll":case"scrollend":ye=Dv;break;case"wheel":ye=Qv;break;case"copy":case"cut":case"paste":ye=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Gp;break;case"toggle":case"beforetoggle":ye=$v}var gt=(n&4)!==0,an=!gt&&(t==="scroll"||t==="scrollend"),le=gt?xe!==null?xe+"Capture":null:xe;gt=[];for(var J=de,fe;J!==null;){var De=J;if(fe=De.stateNode,De=De.tag,De!==5&&De!==26&&De!==27||fe===null||le===null||(De=ho(J,le),De!=null&&gt.push(Wo(J,De,fe))),an)break;J=J.return}0<gt.length&&(xe=new ye(xe,at,null,a,Ae),Ue.push({event:xe,listeners:gt}))}}if((n&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",xe&&a!==Su&&(at=a.relatedTarget||a.fromElement)&&(ka(at)||at[Rt]))break e;if((ye||xe)&&(xe=Ae.window===Ae?Ae:(xe=Ae.ownerDocument)?xe.defaultView||xe.parentWindow:window,ye?(at=a.relatedTarget||a.toElement,ye=de,at=at?ka(at):null,at!==null&&(an=c(at),gt=at.tag,at!==an||gt!==5&&gt!==27&&gt!==6)&&(at=null)):(ye=null,at=de),ye!==at)){if(gt=Bp,De="onMouseLeave",le="onMouseEnter",J="mouse",(t==="pointerout"||t==="pointerover")&&(gt=Gp,De="onPointerLeave",le="onPointerEnter",J="pointer"),an=ye==null?xe:Cs(ye),fe=at==null?xe:Cs(at),xe=new gt(De,J+"leave",ye,a,Ae),xe.target=an,xe.relatedTarget=fe,De=null,ka(Ae)===de&&(gt=new gt(le,J+"enter",at,a,Ae),gt.target=fe,gt.relatedTarget=an,De=gt),an=De,ye&&at)t:{for(gt=Jb,le=ye,J=at,fe=0,De=le;De;De=gt(De))fe++;De=0;for(var ft=J;ft;ft=gt(ft))De++;for(;0<fe-De;)le=gt(le),fe--;for(;0<De-fe;)J=gt(J),De--;for(;fe--;){if(le===J||J!==null&&le===J.alternate){gt=le;break t}le=gt(le),J=gt(J)}gt=null}else gt=null;ye!==null&&Ng(Ue,xe,ye,gt,!1),at!==null&&an!==null&&Ng(Ue,an,at,gt,!0)}}e:{if(xe=de?Cs(de):window,ye=xe.nodeName&&xe.nodeName.toLowerCase(),ye==="select"||ye==="input"&&xe.type==="file")var Vt=Yp;else if(Wp(xe))if(Zp)Vt=cb;else{Vt=ob;var ot=rb}else ye=xe.nodeName,!ye||ye.toLowerCase()!=="input"||xe.type!=="checkbox"&&xe.type!=="radio"?de&&Wt(de.elementType)&&(Vt=Yp):Vt=lb;if(Vt&&(Vt=Vt(t,de))){qp(Ue,Vt,a,Ae);break e}ot&&ot(t,xe,de),t==="focusout"&&de&&xe.type==="number"&&de.memoizedProps.value!=null&&Ct(xe,"number",xe.value)}switch(ot=de?Cs(de):window,t){case"focusin":(Wp(ot)||ot.contentEditable==="true")&&(lr=ot,Pu=de,yo=null);break;case"focusout":yo=Pu=lr=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,im(Ue,a,Ae);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":im(Ue,a,Ae)}var Et;if(Nu)e:{switch(t){case"compositionstart":var Pt="onCompositionStart";break e;case"compositionend":Pt="onCompositionEnd";break e;case"compositionupdate":Pt="onCompositionUpdate";break e}Pt=void 0}else or?jp(t,a)&&(Pt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Pt="onCompositionStart");Pt&&(Hp&&a.locale!=="ko"&&(or||Pt!=="onCompositionStart"?Pt==="onCompositionEnd"&&or&&(Et=Ip()):(Wa=Ae,Au="value"in Wa?Wa.value:Wa.textContent,or=!0)),ot=dc(de,Pt),0<ot.length&&(Pt=new Fp(Pt,t,null,a,Ae),Ue.push({event:Pt,listeners:ot}),Et?Pt.data=Et:(Et=Xp(a),Et!==null&&(Pt.data=Et)))),(Et=tb?nb(t,a):ib(t,a))&&(Pt=dc(de,"onBeforeInput"),0<Pt.length&&(ot=new Fp("onBeforeInput","beforeinput",null,a,Ae),Ue.push({event:ot,listeners:Pt}),ot.data=Et)),Yb(Ue,t,de,a,Ae)}Cg(Ue,n)})}function Wo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function dc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ho(t,a),u!=null&&o.unshift(Wo(t,u,f)),u=ho(t,n),u!=null&&o.push(Wo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Jb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ng(t,n,a,o,u){for(var f=n._reactName,_=[];a!==null&&a!==o;){var N=a,q=N.alternate,de=N.stateNode;if(N=N.tag,q!==null&&q===o)break;N!==5&&N!==26&&N!==27||de===null||(q=de,u?(de=ho(a,f),de!=null&&_.unshift(Wo(a,de,q))):u||(de=ho(a,f),de!=null&&_.push(Wo(a,de,q)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var $b=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace($b,`
`).replace(ey,"")}function Lg(t,n){return n=Ug(n),Ug(t)===n}function nn(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pi(t,""+o);break;case"className":it(t,"class",o);break;case"tabIndex":it(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":it(t,a,o);break;case"style":Fi(t,o,f);break;case"data":if(n!=="object"){it(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ds(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&nn(t,n,"name",u.name,u,null),nn(t,n,"formEncType",u.formEncType,u,null),nn(t,n,"formMethod",u.formMethod,u,null),nn(t,n,"formTarget",u.formTarget,u,null)):(nn(t,n,"encType",u.encType,u,null),nn(t,n,"method",u.method,u,null),nn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ds(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ha);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ds(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Nt("beforetoggle",t),Nt("toggle",t),je(t,"popover",o);break;case"xlinkActuate":tt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":tt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":tt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":tt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":tt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":tt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":tt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":tt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":tt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":je(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yi.get(a)||a,je(t,a,o))}}function ld(t,n,a,o,u,f){switch(a){case"style":Fi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pi(t,o):(typeof o=="number"||typeof o=="bigint")&&pi(t,""+o);break;case"onScroll":o!=null&&Nt("scroll",t);break;case"onScrollEnd":o!=null&&Nt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xt]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):je(t,a,o)}}}function Xn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Nt("error",t),Nt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,f,_,a,null)}}u&&nn(t,n,"srcSet",a.srcSet,a,null),o&&nn(t,n,"src",a.src,a,null);return;case"input":Nt("invalid",t);var N=f=_=u=null,q=null,de=null;for(o in a)if(a.hasOwnProperty(o)){var Ae=a[o];if(Ae!=null)switch(o){case"name":u=Ae;break;case"type":_=Ae;break;case"checked":q=Ae;break;case"defaultChecked":de=Ae;break;case"value":f=Ae;break;case"defaultValue":N=Ae;break;case"children":case"dangerouslySetInnerHTML":if(Ae!=null)throw Error(s(137,n));break;default:nn(t,n,o,Ae,a,null)}}qn(t,f,N,q,de,_,u,!1);return;case"select":Nt("invalid",t),o=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":f=N;break;case"defaultValue":_=N;break;case"multiple":o=N;default:nn(t,n,u,N,a,null)}n=f,a=_,t.multiple=!!o,n!=null?Un(t,!!o,n,!1):a!=null&&Un(t,!!o,a,!0);return;case"textarea":Nt("invalid",t),f=u=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(N=a[_],N!=null))switch(_){case"value":o=N;break;case"defaultValue":u=N;break;case"children":f=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:nn(t,n,_,N,a,null)}Bi(t,o,u,f);return;case"option":for(q in a)if(a.hasOwnProperty(q)&&(o=a[q],o!=null))switch(q){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:nn(t,n,q,o,a,null)}return;case"dialog":Nt("beforetoggle",t),Nt("toggle",t),Nt("cancel",t),Nt("close",t);break;case"iframe":case"object":Nt("load",t);break;case"video":case"audio":for(o=0;o<Xo.length;o++)Nt(Xo[o],t);break;case"image":Nt("error",t),Nt("load",t);break;case"details":Nt("toggle",t);break;case"embed":case"source":case"link":Nt("error",t),Nt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(de in a)if(a.hasOwnProperty(de)&&(o=a[de],o!=null))switch(de){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:nn(t,n,de,o,a,null)}return;default:if(Wt(n)){for(Ae in a)a.hasOwnProperty(Ae)&&(o=a[Ae],o!==void 0&&ld(t,n,Ae,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&nn(t,n,N,o,a,null))}function ty(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,N=null,q=null,de=null,Ae=null;for(ye in a){var Ue=a[ye];if(a.hasOwnProperty(ye)&&Ue!=null)switch(ye){case"checked":break;case"value":break;case"defaultValue":q=Ue;default:o.hasOwnProperty(ye)||nn(t,n,ye,null,o,Ue)}}for(var xe in o){var ye=o[xe];if(Ue=a[xe],o.hasOwnProperty(xe)&&(ye!=null||Ue!=null))switch(xe){case"type":f=ye;break;case"name":u=ye;break;case"checked":de=ye;break;case"defaultChecked":Ae=ye;break;case"value":_=ye;break;case"defaultValue":N=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(s(137,n));break;default:ye!==Ue&&nn(t,n,xe,ye,o,Ue)}}Ze(t,_,N,q,de,Ae,f,u);return;case"select":ye=_=N=xe=null;for(f in a)if(q=a[f],a.hasOwnProperty(f)&&q!=null)switch(f){case"value":break;case"multiple":ye=q;default:o.hasOwnProperty(f)||nn(t,n,f,null,o,q)}for(u in o)if(f=o[u],q=a[u],o.hasOwnProperty(u)&&(f!=null||q!=null))switch(u){case"value":xe=f;break;case"defaultValue":N=f;break;case"multiple":_=f;default:f!==q&&nn(t,n,u,f,o,q)}n=N,a=_,o=ye,xe!=null?Un(t,!!a,xe,!1):!!o!=!!a&&(n!=null?Un(t,!!a,n,!0):Un(t,!!a,a?[]:"",!1));return;case"textarea":ye=xe=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:nn(t,n,N,null,o,u)}for(_ in o)if(u=o[_],f=a[_],o.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":xe=u;break;case"defaultValue":ye=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&nn(t,n,_,u,o,f)}hi(t,xe,ye);return;case"option":for(var at in a)if(xe=a[at],a.hasOwnProperty(at)&&xe!=null&&!o.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:nn(t,n,at,null,o,xe)}for(q in o)if(xe=o[q],ye=a[q],o.hasOwnProperty(q)&&xe!==ye&&(xe!=null||ye!=null))switch(q){case"selected":t.selected=xe&&typeof xe!="function"&&typeof xe!="symbol";break;default:nn(t,n,q,xe,o,ye)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in a)xe=a[gt],a.hasOwnProperty(gt)&&xe!=null&&!o.hasOwnProperty(gt)&&nn(t,n,gt,null,o,xe);for(de in o)if(xe=o[de],ye=a[de],o.hasOwnProperty(de)&&xe!==ye&&(xe!=null||ye!=null))switch(de){case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:nn(t,n,de,xe,o,ye)}return;default:if(Wt(n)){for(var an in a)xe=a[an],a.hasOwnProperty(an)&&xe!==void 0&&!o.hasOwnProperty(an)&&ld(t,n,an,void 0,o,xe);for(Ae in o)xe=o[Ae],ye=a[Ae],!o.hasOwnProperty(Ae)||xe===ye||xe===void 0&&ye===void 0||ld(t,n,Ae,xe,o,ye);return}}for(var le in a)xe=a[le],a.hasOwnProperty(le)&&xe!=null&&!o.hasOwnProperty(le)&&nn(t,n,le,null,o,xe);for(Ue in o)xe=o[Ue],ye=a[Ue],!o.hasOwnProperty(Ue)||xe===ye||xe==null&&ye==null||nn(t,n,Ue,xe,o,ye)}function Og(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,_=u.initiatorType,N=u.duration;if(f&&N&&Og(_)){for(_=0,N=u.responseEnd,o+=1;o<a.length;o++){var q=a[o],de=q.startTime;if(de>N)break;var Ae=q.transferSize,Ue=q.initiatorType;Ae&&Og(Ue)&&(q=q.responseEnd,_+=Ae*(q<N?1:(N-de)/(q-de)))}if(--o,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var cd=null,ud=null;function hc(t){return t.nodeType===9?t:t.ownerDocument}function Pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dd=null;function iy(){var t=window.event;return t&&t.type==="popstate"?t===dd?!1:(dd=t,!0):(dd=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(ry)}:zg;function ry(t){setTimeout(function(){throw t})}function cs(t){return t==="head"}function Fg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Pr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")qo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,qo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,N=f.nodeName;f[Ha]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&qo(t.ownerDocument.body);a=u}while(a);Pr(n)}function Gg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function hd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),fo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function oy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ha])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ui(t.nextSibling),t===null)break}return null}function ly(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ui(t.nextSibling),t===null))return null;return t}function Hg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ui(t.nextSibling),t===null))return null;return t}function pd(t){return t.data==="$?"||t.data==="$~"}function md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var gd=null;function kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function jg(t,n,a){switch(n=hc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function qo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);fo(t)}var Li=new Map,Xg=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=P.d;P.d={f:uy,r:fy,D:dy,C:hy,L:py,m:my,X:xy,S:gy,M:_y};function uy(){var t=Ca.f(),n=sc();return t||n}function fy(t){var n=Va(t);n!==null&&n.tag===5&&n.type==="form"?l0(n):Ca.r(t)}var Ur=typeof document>"u"?null:document;function Wg(t,n,a){var o=Ur;if(o&&typeof n=="string"&&n){var u=Zt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Xg.has(u)||(Xg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Xn(n,"link",t),Tn(n),o.head.appendChild(n)))}}function dy(t){Ca.D(t),Wg("dns-prefetch",t,null)}function hy(t,n){Ca.C(t,n),Wg("preconnect",t,n)}function py(t,n,a){Ca.L(t,n,a);var o=Ur;if(o&&t&&n){var u='link[rel="preload"][as="'+Zt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Zt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Zt(a.imageSizes)+'"]')):u+='[href="'+Zt(t)+'"]';var f=u;switch(n){case"style":f=Lr(t);break;case"script":f=Or(t)}Li.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Li.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Yo(f))||n==="script"&&o.querySelector(Zo(f))||(n=o.createElement("link"),Xn(n,"link",t),Tn(n),o.head.appendChild(n)))}}function my(t,n){Ca.m(t,n);var a=Ur;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Zt(o)+'"][href="'+Zt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Or(t)}if(!Li.has(f)&&(t=v({rel:"modulepreload",href:t},n),Li.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Zo(f)))return}o=a.createElement("link"),Xn(o,"link",t),Tn(o),a.head.appendChild(o)}}}function gy(t,n,a){Ca.S(t,n,a);var o=Ur;if(o&&t){var u=ja(o).hoistableStyles,f=Lr(t);n=n||"default";var _=u.get(f);if(!_){var N={loading:0,preload:null};if(_=o.querySelector(Yo(f)))N.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Li.get(f))&&xd(t,a);var q=_=o.createElement("link");Tn(q),Xn(q,"link",t),q._p=new Promise(function(de,Ae){q.onload=de,q.onerror=Ae}),q.addEventListener("load",function(){N.loading|=1}),q.addEventListener("error",function(){N.loading|=2}),N.loading|=4,mc(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:N},u.set(f,_)}}}function xy(t,n){Ca.X(t,n);var a=Ur;if(a&&t){var o=ja(a).hoistableScripts,u=Or(t),f=o.get(u);f||(f=a.querySelector(Zo(u)),f||(t=v({src:t,async:!0},n),(n=Li.get(u))&&_d(t,n),f=a.createElement("script"),Tn(f),Xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(t,n){Ca.M(t,n);var a=Ur;if(a&&t){var o=ja(a).hoistableScripts,u=Or(t),f=o.get(u);f||(f=a.querySelector(Zo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=Li.get(u))&&_d(t,n),f=a.createElement("script"),Tn(f),Xn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function qg(t,n,a,o){var u=(u=ce.current)?pc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Lr(a.href),a=ja(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Lr(a.href);var f=ja(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Yo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Li.set(t,a),f||vy(u,t,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Or(a),a=ja(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Lr(t){return'href="'+Zt(t)+'"'}function Yo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Xn(n,"link",a),Tn(n),t.head.appendChild(n))}function Or(t){return'[src="'+Zt(t)+'"]'}function Zo(t){return"script[async]"+t}function Zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Zt(a.href)+'"]');if(o)return n.instance=o,Tn(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Tn(o),Xn(o,"style",u),mc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Lr(a.href);var f=t.querySelector(Yo(u));if(f)return n.state.loading|=4,n.instance=f,Tn(f),f;o=Yg(a),(u=Li.get(u))&&xd(o,u),f=(t.ownerDocument||t).createElement("link"),Tn(f);var _=f;return _._p=new Promise(function(N,q){_.onload=N,_.onerror=q}),Xn(f,"link",o),n.state.loading|=4,mc(f,a.precedence,t),n.instance=f;case"script":return f=Or(a.src),(u=t.querySelector(Zo(f)))?(n.instance=u,Tn(u),u):(o=a,(u=Li.get(f))&&(o=v({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Tn(u),Xn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,t));return n.instance}function mc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,_=0;_<o.length;_++){var N=o[_];if(N.dataset.precedence===n)f=N;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var gc=null;function Kg(t,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ha]||f[Lt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var N=o.get(_);N?N.push(f):o.set(_,[f])}}return o}function Qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function by(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Lr(o.href),f=n.querySelector(Yo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=xc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Tn(f);return}f=n.ownerDocument||n,o=Yg(o),(u=Li.get(u))&&xd(o,u),f=f.createElement("link"),Tn(f);var _=f;_._p=new Promise(function(N,q){_.onload=N,_.onerror=q}),Xn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=xc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var vd=0;function Sy(t,n){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&vd===0&&(vd=62500*ny());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>vd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,n.forEach(My,t),_c=null,xc.call(t))}function My(t,n){if(!(n.state.loading&4)){var a=_c.get(t);if(a)var o=a.get(null);else{a=new Map,_c.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||o,f===o&&a.set(null,u),a.set(_,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Ko={$$typeof:O,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function Ey(t,n,a,o,u,f,_,N,q){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=He(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=He(0),this.hiddenUpdates=He(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.incompleteTransitions=new Map}function $g(t,n,a,o,u,f,_,N,q,de,Ae,Ue){return t=new Ey(t,n,a,_,q,de,Ae,Ue,N),n=1,f===!0&&(n|=24),f=gi(3,null,null,n),t.current=f,f.stateNode=t,n=Qu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},tf(f),t}function ex(t){return t?(t=fr,t):fr}function tx(t,n,a,o,u,f){u=ex(u),o.context===null?o.context=u:o.pendingContext=u,o=Ja(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=$a(t,o,n),a!==null&&(ui(a,t,n),Ro(a,t,n))}function nx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bd(t,n){nx(t,n),(t=t.alternate)&&nx(t,n)}function ix(t){if(t.tag===13||t.tag===31){var n=Os(t,67108864);n!==null&&ui(n,t,67108864),bd(t,67108864)}}function ax(t){if(t.tag===13||t.tag===31){var n=yi();n=ai(n);var a=Os(t,n);a!==null&&ui(a,t,n),bd(t,n)}}var bc=!0;function Ty(t,n,a,o){var u=w.T;w.T=null;var f=P.p;try{P.p=2,yd(t,n,a,o)}finally{P.p=f,w.T=u}}function Ay(t,n,a,o){var u=w.T;w.T=null;var f=P.p;try{P.p=8,yd(t,n,a,o)}finally{P.p=f,w.T=u}}function yd(t,n,a,o){if(bc){var u=Sd(o);if(u===null)od(t,n,o,yc,a),rx(t,o);else if(Ry(u,t,n,a,o))o.stopPropagation();else if(rx(t,o),n&4&&-1<wy.indexOf(t)){for(;u!==null;){var f=Va(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Te(f.pendingLanes);if(_!==0){var N=f;for(N.pendingLanes|=2,N.entangledLanes|=2;_;){var q=1<<31-Se(_);N.entanglements[1]|=q,_&=~q}Ji(f),(Xt&6)===0&&(ic=we()+500,jo(0))}}break;case 31:case 13:N=Os(f,2),N!==null&&ui(N,f,2),sc(),bd(f,2)}if(f=Sd(o),f===null&&od(t,n,o,yc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else od(t,n,o,null,a)}}function Sd(t){return t=Mu(t),Md(t)}var yc=null;function Md(t){if(yc=null,t=ka(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function sx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(nt()){case U:return 2;case M:return 8;case F:case ie:return 32;case V:return 268435456;default:return 32}default:return 32}}var Ed=!1,us=null,fs=null,ds=null,Qo=new Map,Jo=new Map,hs=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rx(t,n){switch(t){case"focusin":case"focusout":us=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":ds=null;break;case"pointerover":case"pointerout":Qo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(n.pointerId)}}function $o(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Va(n),n!==null&&ix(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ry(t,n,a,o,u){switch(n){case"focusin":return us=$o(us,t,n,a,o,u),!0;case"dragenter":return fs=$o(fs,t,n,a,o,u),!0;case"mouseover":return ds=$o(ds,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Qo.set(f,$o(Qo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Jo.set(f,$o(Jo.get(f)||null,t,n,a,o,u)),!0}return!1}function ox(t){var n=ka(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,fa(t.priority,function(){ax(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,fa(t.priority,function(){ax(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Su=o,a.target.dispatchEvent(o),Su=null}else return n=Va(a),n!==null&&ix(n),t.blockedOn=a,!1;n.shift()}return!0}function lx(t,n,a){Sc(t)&&a.delete(n)}function Cy(){Ed=!1,us!==null&&Sc(us)&&(us=null),fs!==null&&Sc(fs)&&(fs=null),ds!==null&&Sc(ds)&&(ds=null),Qo.forEach(lx),Jo.forEach(lx)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ed||(Ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cy)))}var Ec=null;function cx(t){Ec!==t&&(Ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var f=Va(a);f!==null&&(t.splice(n,3),n-=3,Sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Pr(t){function n(q){return Mc(q,t)}us!==null&&Mc(us,t),fs!==null&&Mc(fs,t),ds!==null&&Mc(ds,t),Qo.forEach(n),Jo.forEach(n);for(var a=0;a<hs.length;a++){var o=hs[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<hs.length&&(a=hs[0],a.blockedOn===null);)ox(a),a.blockedOn===null&&hs.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],_=u[xt]||null;if(typeof f=="function")_||cx(a);else if(_){var N=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[xt]||null)N=_.formAction;else if(Md(u)!==null)continue}else N=_.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),cx(a)}}}function ux(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Td(t){this._internalRoot=t}Tc.prototype.render=Td.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=yi();tx(a,o,t,n,null,null)},Tc.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;tx(t.current,2,null,t,null,null),sc(),n[Rt]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=zi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<hs.length&&n!==0&&n<hs[a].priority;a++);hs.splice(a,0,t),a===0&&ox(t)}};var fx=e.version;if(fx!=="19.2.7")throw Error(s(527,fx,"19.2.7"));P.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var Dy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{Z=Ac.inject(Dy),re=Ac}catch{}}return tl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=_0,f=v0,_=b0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=$g(t,1,!1,null,null,a,o,null,u,f,_,ux),t[Rt]=n.current,rd(t),new Td(n)},tl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=_0,_=v0,N=b0,q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(q=a.formState)),n=$g(t,1,!0,n,a??null,o,u,q,f,_,N,ux),n.context=ex(null),a=n.current,o=yi(),o=ai(o),u=Ja(o),u.callback=null,$a(a,u,o),a=o,n.current.lanes=a,dt(n,a),Ji(n),t[Rt]=n.current,rd(t),new Tc(n)},tl.version="19.2.7",tl}var yx;function Gy(){if(yx)return Rd.exports;yx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rd.exports=Fy(),Rd.exports}var Hy=Gy();const Ud=[{id:"startup-launcher",name:"Startup & Product Launcher",description:"Launch products, analyze competitive markets, and outline architectures with operations and engineering experts.",objective:"Draft a product launch proposal and architecture outline for an eco-friendly mobile battery-swapping service.",agents:[{id:"ops-lead",name:"Sonia (Operations Chief)",designation:"Operations Lead",systemPrompt:"You formulate high-level business logic, operational timelines, supply chain considerations, and project milestones. Coordinate tasks logically.",gridPosition:{x:2,z:2},avatarColor:"#60a5fa",gender:"female",state:"idle"},{id:"market-analyst",name:"Marcus (Market Strategist)",designation:"Market Analyst",systemPrompt:"You specialize in researching competitor lists, pricing strategies, market differentiators, target user demographics, and marketing channels.",gridPosition:{x:5,z:2},avatarColor:"#34d399",gender:"male",state:"idle"},{id:"fin-planner",name:"Fiona (Finance Director)",designation:"Financial Planner",systemPrompt:"You draft expense structures, pricing schemas, lifetime value projections, cost savings calculations, and monetization models.",gridPosition:{x:2,z:6},avatarColor:"#f472b6",gender:"female",state:"idle"},{id:"dev-lead",name:"Devon (Systems Arch)",designation:"Full-Stack Developer",systemPrompt:"You draft detailed database models, API specs, deployment infrastructures (e.g., Docker, Kubernetes), and outline core code snippets.",gridPosition:{x:5,z:6},avatarColor:"#fbbf24",gender:"male",state:"idle"},{id:"qa-tester",name:"Quinn (Quality Guardian)",designation:"Lead QA & Security Tester",systemPrompt:"You review developer architectures for potential leaks, edge-case failure modes, scale constraints, test coverage, and validation schemas.",gridPosition:{x:8,z:4},avatarColor:"#a78bfa",gender:"female",state:"idle"}]},{id:"academic-group",name:"Academic Research Syndicate",description:"Conduct scholarly literature reviews, analyze raw data trends, synthesize summaries, and outline LaTeX document citations.",objective:"Synthesize a structured literature paper on 'Advances and Solid-State Degradation in Automotive Battery Anodes' for publication.",agents:[{id:"lead-investigator",name:"Dr. Arthur (Principal PI)",designation:"Lead Investigator",systemPrompt:"You write formal thesis structures, set rigorous research questions, design academic experimental methods, and critically verify logical conclusions.",gridPosition:{x:4,z:2},avatarColor:"#60a5fa",gender:"male",state:"idle"},{id:"data-aggregator",name:"Danica (Data Systems)",designation:"Data Aggregator",systemPrompt:"You summarize research methodologies, locate mock paper citations, list quantitative data points/material attributes, and list physical constraints.",gridPosition:{x:2,z:5},avatarColor:"#34d399",gender:"female",state:"idle"},{id:"content-summarizer",name:"Sam (Editor-in-Chief)",designation:"Content Summarizer",systemPrompt:"You edit draft summaries, translate dense physical data into readable sections, formulate abstract sections, and refine narrative clarity.",gridPosition:{x:7,z:5},avatarColor:"#fbbf24",gender:"male",state:"idle"},{id:"latex-formatter",name:"Laura (LaTeX Designer)",designation:"LaTeX Formatter",systemPrompt:"You specialize in translating reports into formal LaTeX document layout templates, organizing reference lists, and structural bibtex records.",gridPosition:{x:4,z:8},avatarColor:"#a78bfa",gender:"female",state:"idle"}]}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Sx=r=>{const e=Vy(r);return e.charAt(0).toUpperCase()+e.slice(1)},B_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),jy=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ke.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>ke.createElement("svg",{ref:m,...Xy,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:B_("lucide",l),...!c&&!jy(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,b])=>ke.createElement(h,b)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=(r,e)=>{const i=ke.forwardRef(({className:s,...l},c)=>ke.createElement(Wy,{ref:c,iconNode:e,className:B_(`lucide-${ky(Sx(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Sx(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Mx=en("chevron-right",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],F_=en("circle-question-mark",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ky=en("clock",Zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ex=en("compass",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Tx=en("cpu",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],eS=en("file-down",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],nS=en("file-up",tS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],aS=en("folder-plus",iS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],G_=en("grid-3x3",sS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],eo=en("lock",rS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],lS=en("maximize-2",oS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],uS=en("minimize-2",cS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],dS=en("moon",fS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],H_=en("pen-line",hS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],mS=en("play",pS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xS=en("plus",gS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],vS=en("refresh-cw",_S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],yS=en("rotate-ccw",bS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],MS=en("rotate-cw",SS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],TS=en("settings",ES);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],wS=en("shield-alert",AS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],CS=en("sliders-vertical",RS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],k_=en("sparkles",DS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],US=en("square",NS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],OS=en("sun",LS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Ax=en("terminal",PS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],V_=en("trash-2",IS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],BS=en("triangle-alert",zS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],GS=en("user-minus",FS);function HS({agents:r,decorItems:e,onUpdateAgentPosition:i,onAddDecorItem:s,onRemoveDecorItem:l,gridSize:c,timeMode:d}){const p=ke.useRef(null),m=ke.useRef(null),[h,b]=ke.useState({width:500,height:500}),[v,g]=ke.useState(null),[S,T]=ke.useState(null),[L,y]=ke.useState({x:0,y:0}),[x,D]=ke.useState("none");ke.useLayoutEffect(()=>{if(!p.current)return;const X=new ResizeObserver(w=>{for(const P of w){const{width:B,height:$}=P.contentRect,ee=Math.min(B,$,600);b({width:Math.max(ee,350),height:Math.max(ee,350)})}});return X.observe(p.current),()=>X.disconnect()},[]);const O=Math.min(h.width,h.height)/(c+2),z=O,W=(X,w)=>({x:z+X*O+O/2,y:z+w*O+O/2}),I=(X,w)=>{const P=Math.round((X-z-O/2)/O),B=Math.round((w-z-O/2)/O);return{x:Math.max(0,Math.min(c-1,P)),z:Math.max(0,Math.min(c-1,B))}};ke.useEffect(()=>{const X=m.current;if(!X)return;const w=X.getContext("2d");if(!w)return;const B=d==="matrix"?{bg:"#02040a",grid:"rgba(34, 197, 94, 0.15)",gridActive:"rgba(34, 197, 94, 0.4)",text:"#39ff14",border:"#22c55e",cellActive:"rgba(34, 197, 94, 0.1)"}:d==="night"?{bg:"#0d111d",grid:"rgba(100, 116, 139, 0.2)",gridActive:"rgba(129, 140, 248, 0.4)",text:"#f1f5f9",border:"#4f46e5",cellActive:"rgba(79, 70, 229, 0.15)"}:{bg:"#ffffff",grid:"#e2e8f0",gridActive:"#cbd5e1",text:"#0f172a",border:"#cbd5e1",cellActive:"#f1f5f9"};w.fillStyle=B.bg,w.fillRect(0,0,h.width,h.height);const $=W(0,0);w.strokeStyle=B.border,w.lineWidth=2.5,w.strokeRect($.x-O/2,$.y-O/2,c*O,c*O),w.strokeStyle=B.grid,w.lineWidth=1;for(let ee=0;ee<c;ee++){const R=W(ee,0),K=W(ee,c-1);w.beginPath(),w.moveTo(R.x-O/2,R.y-O/2),w.lineTo(K.x-O/2,K.y+O/2),w.stroke();const be=W(0,ee),Re=W(c-1,ee);w.beginPath(),w.moveTo(be.x-O/2,be.y-O/2),w.lineTo(Re.x+O/2,Re.y-O/2),w.stroke()}if(x!=="none"){const ee=I(L.x,L.y),R=W(ee.x,ee.z);w.fillStyle=B.cellActive,w.fillRect(R.x-O/2,R.y-O/2,O,O),w.strokeStyle="#fbbf24",w.lineWidth=1.5,w.strokeRect(R.x-O/2,R.y-O/2,O,O)}e.forEach(ee=>{var be;const R=W(ee.x,ee.z);w.fillStyle=d==="day"?"#f1f5f9":"#1e293b",w.strokeStyle=B.border,w.lineWidth=1,w.beginPath(),(be=w.roundRect)==null||be.call(w,R.x-O/2.5,R.y-O/2.5,O*.8,O*.8,4),w.fill(),w.stroke(),w.font=`bold ${Math.max(9,O*.35)}px Inter, sans-serif`,w.textAlign="center",w.textBaseline="middle";let K="🛋️";ee.type==="coffee"&&(K="☕"),ee.type==="cooler"&&(K="💧"),ee.type==="plant"&&(K="🪴"),ee.type==="wall"&&(K="🧱"),ee.type==="store"&&(K="🏪"),ee.type==="conference"&&(K="👥"),w.fillText(K,R.x,R.y)}),r.forEach(ee=>{const R=W(ee.gridPosition.x,ee.gridPosition.z),K=O*.4;w.fillStyle=ee.avatarColor||"#2563eb",w.beginPath(),w.arc(R.x,R.y,K,0,Math.PI*2),w.fill(),w.fillStyle="#ffffff",w.font=`${Math.max(8,O*.28)}px monospace`,w.textAlign="center",w.textBaseline="middle";const be=ee.name.substring(0,2).toUpperCase();w.fillText(be,R.x,R.y),w.strokeStyle=B.bg,w.lineWidth=1.5,w.beginPath(),w.arc(R.x,R.y,K,0,Math.PI*2),w.stroke();const Oe=(ee.deskRotation||0)*Math.PI/180,ce=R.x+Math.sin(Oe)*(K-1),Ee=R.y+Math.cos(Oe)*(K-1);w.fillStyle="#ffffff",w.strokeStyle="#1e293b",w.lineWidth=1,w.beginPath(),w.arc(ce,Ee,Math.max(3,O*.08),0,Math.PI*2),w.fill(),w.stroke(),w.fillStyle=B.text,w.font=`bold ${Math.max(8,O*.25)}px Inter, sans-serif`,w.fillText(ee.name.split(" ")[0],R.x,R.y+K+10)})},[h,r,e,c,d,x,L]);const H=X=>{var P;const w=(P=m.current)==null?void 0:P.getBoundingClientRect();return w?{x:X.clientX-w.left,y:X.clientY-w.top}:{x:0,y:0}},A=X=>{var P;const w=(P=m.current)==null?void 0:P.getBoundingClientRect();return!w||X.touches.length===0?{x:0,y:0}:{x:X.touches[0].clientX-w.left,y:X.touches[0].clientY-w.top}},G=X=>{const{x:w,y:P}=H(X),B=I(w,P);if(x!=="none"){const R=e.find(K=>K.x===B.x&&K.z===B.z);R?l(R.id):s({id:`decor-${Date.now()}`,type:x,x:B.x,z:B.z}),D("none");return}const $=r.find(R=>R.gridPosition.x===B.x&&R.gridPosition.z===B.z);if($){g($.id);return}const ee=e.find(R=>R.x===B.x&&R.z===B.z);ee&&l(ee.id)},ne=X=>{const{x:w,y:P}=H(X);if(y({x:w,y:P}),v){const B=I(w,P);i(v,B.x,B.z)}},k=()=>{g(null)},Q=X=>{const{x:w,y:P}=A(X),B=I(w,P);if(x!=="none"){const R=e.find(K=>K.x===B.x&&K.z===B.z);R?l(R.id):s({id:`decor-${Date.now()}`,type:x,x:B.x,z:B.z}),D("none");return}const $=r.find(R=>R.gridPosition.x===B.x&&R.gridPosition.z===B.z);if($){g($.id);return}const ee=e.find(R=>R.x===B.x&&R.z===B.z);ee&&l(ee.id)},me=X=>{const{x:w,y:P}=A(X);if(y({x:w,y:P}),v){const B=I(w,P);i(v,B.x,B.z)}},ue=()=>{g(null)};return E.jsxs("div",{className:"w-full flex flex-col gap-4",children:[E.jsxs("div",{className:`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${d==="matrix"?"border-green-500/20 bg-slate-950 text-green-300":"border-slate-200 bg-white text-slate-800"}`,children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(G_,{className:"w-4 h-4 text-indigo-400"}),E.jsx("h4",{className:"text-xs font-extrabold uppercase tracking-wider",children:"2D Drag & Stamp Architecture tools"})]}),E.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[E.jsx("button",{onClick:()=>D("plant"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${x==="plant"?"bg-emerald-600 text-white border-emerald-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-plant",children:"🪴 Plant"}),E.jsx("button",{onClick:()=>D("coffee"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${x==="coffee"?"bg-amber-600 text-white border-amber-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-coffee",children:"☕ Coffee Station"}),E.jsx("button",{onClick:()=>D("cooler"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${x==="cooler"?"bg-blue-600 text-white border-blue-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-cooler",children:"💧 Water Dispenser"}),E.jsx("button",{onClick:()=>D("couch"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${x==="couch"?"bg-indigo-650 text-white border-indigo-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-couch",children:"🛋️ Lounge Couch"}),E.jsx("button",{onClick:()=>D("wall"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${x==="wall"?"bg-slate-600 text-white border-slate-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-wall",children:"🧱 Wall"}),E.jsx("button",{onClick:()=>D("store"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${x==="store"?"bg-indigo-600 text-white border-indigo-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-store",children:"🏪 Mini Store"}),E.jsx("button",{onClick:()=>D("conference"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${x==="conference"?"bg-cyan-600 text-white border-cyan-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-conference",children:"👥 Conference Desk"}),x!=="none"&&E.jsx("button",{onClick:()=>D("none"),className:"text-[10px] uppercase font-bold text-rose-400 hover:underline px-2",id:"btn-cancel-stamp",children:"Cancel"})]})]}),E.jsxs("div",{ref:p,className:`w-full aspect-square border rounded-xl overflow-hidden shadow-xl flex items-center justify-center relative ${d==="matrix"?"border-green-500/30 bg-[#02040a]":"border-slate-200 bg-slate-50"}`,children:[E.jsxs("div",{className:"absolute top-3 left-3 pointer-events-none flex flex-col gap-1 z-10",children:[E.jsx("span",{className:"text-[10px] uppercase font-mono tracking-widest text-slate-500",children:"BLUEPRINT GRID CONTROLLER"}),E.jsx("span",{className:"text-xs font-bold",children:x!=="none"?`🎯 Stamp Mode: Click any grid tile to drop a ${x}. On mobile, use long press on the grid to drop.`:"Drag agent desks dynamically. Click placed stamps to deconstruct."})]}),E.jsx("canvas",{ref:m,width:h.width,height:h.height,onMouseDown:G,onMouseMove:ne,onMouseUp:k,onTouchStart:Q,onTouchMove:me,onTouchEnd:ue,className:"cursor-crosshair block touch-none",id:"2d-office-custom-canvas"})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="184",no={ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kS=0,wx=1,VS=2,tu=1,j_=2,dl=3,Ts=0,di=1,ia=2,za=0,io=1,Rx=2,Cx=3,Dx=4,jS=5,Qs=100,XS=101,WS=102,qS=103,YS=104,ZS=200,KS=201,QS=202,JS=203,gh=204,xh=205,$S=206,e1=207,t1=208,n1=209,i1=210,a1=211,s1=212,r1=213,o1=214,_h=0,vh=1,bh=2,so=3,yh=4,Sh=5,Mh=6,Eh=7,X_=0,l1=1,c1=2,oa=0,W_=1,q_=2,Y_=3,Z_=4,K_=5,Q_=6,J_=7,$_=300,tr=301,ro=302,Ld=303,Od=304,_u=306,Th=1e3,Ia=1001,Ah=1002,Wn=1003,u1=1004,wc=1005,Qn=1006,Pd=1007,$s=1008,Ti=1009,ev=1010,tv=1011,pl=1012,fp=1013,ca=1014,sa=1015,Fa=1016,dp=1017,hp=1018,ml=1020,nv=35902,iv=35899,av=1021,sv=1022,Wi=1023,Ga=1026,er=1027,rv=1028,pp=1029,nr=1030,mp=1031,gp=1033,nu=33776,iu=33777,au=33778,su=33779,wh=35840,Rh=35841,Ch=35842,Dh=35843,Nh=36196,Uh=37492,Lh=37496,Oh=37488,Ph=37489,lu=37490,Ih=37491,zh=37808,Bh=37809,Fh=37810,Gh=37811,Hh=37812,kh=37813,Vh=37814,jh=37815,Xh=37816,Wh=37817,qh=37818,Yh=37819,Zh=37820,Kh=37821,Qh=36492,Jh=36494,$h=36495,ep=36283,tp=36284,cu=36285,np=36286,f1=3200,ip=0,d1=1,Ss="",Pi="srgb",uu="srgb-linear",fu="linear",$t="srgb",Ir=7680,Nx=519,h1=512,p1=513,m1=514,xp=515,g1=516,x1=517,_p=518,_1=519,ap=35044,Ux="300 es",ra=2e3,gl=2001;function v1(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function b1(){const r=du("canvas");return r.style.display="block",r}const Lx={};function hu(...r){const e="THREE."+r.shift();console.log(e,...r)}function ov(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function mt(...r){r=ov(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Ft(...r){r=ov(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function sp(...r){const e=r.join(" ");e in Lx||(Lx[e]=!0,mt(...r))}function y1(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const S1={[_h]:vh,[bh]:Mh,[yh]:Eh,[so]:Sh,[vh]:_h,[Mh]:bh,[Eh]:yh,[Sh]:so};class Rs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,rp=180/Math.PI;function Es(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]).toLowerCase()}function wt(r,e,i){return Math.max(e,Math.min(i,r))}function M1(r,e){return(r%e+e)%e}function Id(r,e,i){return(1-i)*r+i*e}function aa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const E1={DEG2RAD:ru},Cp=class Cp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cp.prototype.isVector2=!0;let ht=Cp;class As{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],b=s[l+2],v=s[l+3],g=c[d+0],S=c[d+1],T=c[d+2],L=c[d+3];if(v!==L||m!==g||h!==S||b!==T){let y=m*g+h*S+b*T+v*L;y<0&&(g=-g,S=-S,T=-T,L=-L,y=-y);let x=1-p;if(y<.9995){const D=Math.acos(y),O=Math.sin(D);x=Math.sin(x*D)/O,p=Math.sin(p*D)/O,m=m*x+g*p,h=h*x+S*p,b=b*x+T*p,v=v*x+L*p}else{m=m*x+g*p,h=h*x+S*p,b=b*x+T*p,v=v*x+L*p;const D=1/Math.sqrt(m*m+h*h+b*b+v*v);m*=D,h*=D,b*=D,v*=D}}e[i]=m,e[i+1]=h,e[i+2]=b,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],b=s[l+3],v=c[d],g=c[d+1],S=c[d+2],T=c[d+3];return e[i]=p*T+b*v+m*S-h*g,e[i+1]=m*T+b*g+h*v-p*S,e[i+2]=h*T+b*S+p*g-m*v,e[i+3]=b*T-p*v-m*g-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),b=p(l/2),v=p(c/2),g=m(s/2),S=m(l/2),T=m(c/2);switch(d){case"XYZ":this._x=g*b*v+h*S*T,this._y=h*S*v-g*b*T,this._z=h*b*T+g*S*v,this._w=h*b*v-g*S*T;break;case"YXZ":this._x=g*b*v+h*S*T,this._y=h*S*v-g*b*T,this._z=h*b*T-g*S*v,this._w=h*b*v+g*S*T;break;case"ZXY":this._x=g*b*v-h*S*T,this._y=h*S*v+g*b*T,this._z=h*b*T+g*S*v,this._w=h*b*v-g*S*T;break;case"ZYX":this._x=g*b*v-h*S*T,this._y=h*S*v+g*b*T,this._z=h*b*T-g*S*v,this._w=h*b*v+g*S*T;break;case"YZX":this._x=g*b*v+h*S*T,this._y=h*S*v+g*b*T,this._z=h*b*T-g*S*v,this._w=h*b*v-g*S*T;break;case"XZY":this._x=g*b*v-h*S*T,this._y=h*S*v-g*b*T,this._z=h*b*T+g*S*v,this._w=h*b*v+g*S*T;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],b=i[6],v=i[10],g=s+p+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(b-m)*S,this._y=(c-h)*S,this._z=(d-l)*S}else if(s>p&&s>v){const S=2*Math.sqrt(1+s-p-v);this._w=(b-m)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+h)/S}else if(p>v){const S=2*Math.sqrt(1+p-s-v);this._w=(c-h)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(m+b)/S}else{const S=2*Math.sqrt(1+v-s-p);this._w=(d-l)/S,this._x=(c+h)/S,this._y=(m+b)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,b=i._w;return this._x=s*b+d*p+l*h-c*m,this._y=l*b+d*m+c*p-s*h,this._z=c*b+d*h+s*m-l*p,this._w=d*b-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),b=Math.sin(h);m=Math.sin(m*h)/b,i=Math.sin(i*h)/b,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dp=class Dp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ox.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ox.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),b=2*(p*i-c*l),v=2*(c*s-d*i);return this.x=i+m*h+d*v-p*b,this.y=s+m*b+p*h-c*v,this.z=l+m*v+c*b-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(wt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dp.prototype.isVector3=!0;let ae=Dp;const zd=new ae,Ox=new As,Np=class Np{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const b=this.elements;return b[0]=e,b[1]=l,b[2]=p,b[3]=i,b[4]=c,b[5]=m,b[6]=s,b[7]=d,b[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],b=s[4],v=s[7],g=s[2],S=s[5],T=s[8],L=l[0],y=l[3],x=l[6],D=l[1],O=l[4],z=l[7],W=l[2],I=l[5],H=l[8];return c[0]=d*L+p*D+m*W,c[3]=d*y+p*O+m*I,c[6]=d*x+p*z+m*H,c[1]=h*L+b*D+v*W,c[4]=h*y+b*O+v*I,c[7]=h*x+b*z+v*H,c[2]=g*L+S*D+T*W,c[5]=g*y+S*O+T*I,c[8]=g*x+S*z+T*H,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],b=e[8];return i*d*b-i*p*h-s*c*b+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],b=e[8],v=b*d-p*h,g=p*m-b*c,S=h*c-d*m,T=i*v+s*g+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=v*L,e[1]=(l*h-b*s)*L,e[2]=(p*s-l*d)*L,e[3]=g*L,e[4]=(b*i-l*m)*L,e[5]=(l*c-p*i)*L,e[6]=S*L,e[7]=(s*m-h*i)*L,e[8]=(d*i-s*c)*L,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Bd.makeScale(e,i)),this}rotate(e){return this.premultiply(Bd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Bd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Np.prototype.isMatrix3=!0;let yt=Np;const Bd=new yt,Px=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ix=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T1(){const r={enabled:!0,workingColorSpace:uu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===$t&&(l.r=Ba(l.r),l.g=Ba(l.g),l.b=Ba(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===$t&&(l.r=ao(l.r),l.g=ao(l.g),l.b=ao(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ss?fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[uu]:{primaries:e,whitePoint:s,transfer:fu,toXYZ:Px,fromXYZ:Ix,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:s,transfer:$t,toXYZ:Px,fromXYZ:Ix,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),r}const Bt=T1();function Ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ao(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let zr;class A1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{zr===void 0&&(zr=du("canvas")),zr.width=e.width,zr.height=e.height;const l=zr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=zr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=du("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ba(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ba(i[s]/255)*255):i[s]=Ba(i[s]);return{data:i,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w1=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Fd(l[d].image)):c.push(Fd(l[d]))}else c=Fd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Fd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?A1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let R1=0;const Gd=new ae;class Jn extends Rs{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Ia,l=Ia,c=Qn,d=$s,p=Wi,m=Ti,h=Jn.DEFAULT_ANISOTROPY,b=Ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Es(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=b,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){mt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){mt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Ia:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Ia:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=$_;Jn.DEFAULT_ANISOTROPY=1;const Up=class Up{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],b=m[4],v=m[8],g=m[1],S=m[5],T=m[9],L=m[2],y=m[6],x=m[10];if(Math.abs(b-g)<.01&&Math.abs(v-L)<.01&&Math.abs(T-y)<.01){if(Math.abs(b+g)<.1&&Math.abs(v+L)<.1&&Math.abs(T+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(h+1)/2,z=(S+1)/2,W=(x+1)/2,I=(b+g)/4,H=(v+L)/4,A=(T+y)/4;return O>z&&O>W?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=I/s,c=H/s):z>W?z<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(z),s=I/l,c=A/l):W<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(W),s=H/c,l=A/c),this.set(s,l,c,i),this}let D=Math.sqrt((y-T)*(y-T)+(v-L)*(v-L)+(g-b)*(g-b));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(v-L)/D,this.z=(g-b)/D,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(wt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Up.prototype.isVector4=!0;let yn=Up;class C1 extends Rs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new yn(0,0,e,i),this.scissorTest=!1,this.viewport=new yn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Jn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class la extends C1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class lv extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D1 extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Ia,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xu=class xu{constructor(e,i,s,l,c,d,p,m,h,b,v,g,S,T,L,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,b,v,g,S,T,L,y)}set(e,i,s,l,c,d,p,m,h,b,v,g,S,T,L,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=b,x[10]=v,x[14]=g,x[3]=S,x[7]=T,x[11]=L,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Br.setFromMatrixColumn(e,0).length(),c=1/Br.setFromMatrixColumn(e,1).length(),d=1/Br.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),b=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=d*b,S=d*v,T=p*b,L=p*v;i[0]=m*b,i[4]=-m*v,i[8]=h,i[1]=S+T*h,i[5]=g-L*h,i[9]=-p*m,i[2]=L-g*h,i[6]=T+S*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*b,S=m*v,T=h*b,L=h*v;i[0]=g+L*p,i[4]=T*p-S,i[8]=d*h,i[1]=d*v,i[5]=d*b,i[9]=-p,i[2]=S*p-T,i[6]=L+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*b,S=m*v,T=h*b,L=h*v;i[0]=g-L*p,i[4]=-d*v,i[8]=T+S*p,i[1]=S+T*p,i[5]=d*b,i[9]=L-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*b,S=d*v,T=p*b,L=p*v;i[0]=m*b,i[4]=T*h-S,i[8]=g*h+L,i[1]=m*v,i[5]=L*h+g,i[9]=S*h-T,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,S=d*h,T=p*m,L=p*h;i[0]=m*b,i[4]=L-g*v,i[8]=T*v+S,i[1]=v,i[5]=d*b,i[9]=-p*b,i[2]=-h*b,i[6]=S*v+T,i[10]=g-L*v}else if(e.order==="XZY"){const g=d*m,S=d*h,T=p*m,L=p*h;i[0]=m*b,i[4]=-v,i[8]=h*b,i[1]=g*v+L,i[5]=d*b,i[9]=S*v-T,i[2]=T*v-S,i[6]=p*b,i[10]=L*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N1,e,U1)}lookAt(e,i,s){const l=this.elements;return Si.subVectors(e,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),ms.crossVectors(s,Si),ms.lengthSq()===0&&(Math.abs(s.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),ms.crossVectors(s,Si)),ms.normalize(),Rc.crossVectors(Si,ms),l[0]=ms.x,l[4]=Rc.x,l[8]=Si.x,l[1]=ms.y,l[5]=Rc.y,l[9]=Si.y,l[2]=ms.z,l[6]=Rc.z,l[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],b=s[1],v=s[5],g=s[9],S=s[13],T=s[2],L=s[6],y=s[10],x=s[14],D=s[3],O=s[7],z=s[11],W=s[15],I=l[0],H=l[4],A=l[8],G=l[12],ne=l[1],k=l[5],Q=l[9],me=l[13],ue=l[2],X=l[6],w=l[10],P=l[14],B=l[3],$=l[7],ee=l[11],R=l[15];return c[0]=d*I+p*ne+m*ue+h*B,c[4]=d*H+p*k+m*X+h*$,c[8]=d*A+p*Q+m*w+h*ee,c[12]=d*G+p*me+m*P+h*R,c[1]=b*I+v*ne+g*ue+S*B,c[5]=b*H+v*k+g*X+S*$,c[9]=b*A+v*Q+g*w+S*ee,c[13]=b*G+v*me+g*P+S*R,c[2]=T*I+L*ne+y*ue+x*B,c[6]=T*H+L*k+y*X+x*$,c[10]=T*A+L*Q+y*w+x*ee,c[14]=T*G+L*me+y*P+x*R,c[3]=D*I+O*ne+z*ue+W*B,c[7]=D*H+O*k+z*X+W*$,c[11]=D*A+O*Q+z*w+W*ee,c[15]=D*G+O*me+z*P+W*R,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],b=e[2],v=e[6],g=e[10],S=e[14],T=e[3],L=e[7],y=e[11],x=e[15],D=m*S-h*g,O=p*S-h*v,z=p*g-m*v,W=d*S-h*b,I=d*g-m*b,H=d*v-p*b;return i*(L*D-y*O+x*z)-s*(T*D-y*W+x*I)+l*(T*O-L*W+x*H)-c*(T*z-L*I+y*H)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],b=e[8],v=e[9],g=e[10],S=e[11],T=e[12],L=e[13],y=e[14],x=e[15],D=i*p-s*d,O=i*m-l*d,z=i*h-c*d,W=s*m-l*p,I=s*h-c*p,H=l*h-c*m,A=b*L-v*T,G=b*y-g*T,ne=b*x-S*T,k=v*y-g*L,Q=v*x-S*L,me=g*x-S*y,ue=D*me-O*Q+z*k+W*ne-I*G+H*A;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ue;return e[0]=(p*me-m*Q+h*k)*X,e[1]=(l*Q-s*me-c*k)*X,e[2]=(L*H-y*I+x*W)*X,e[3]=(g*I-v*H-S*W)*X,e[4]=(m*ne-d*me-h*G)*X,e[5]=(i*me-l*ne+c*G)*X,e[6]=(y*z-T*H-x*O)*X,e[7]=(b*H-g*z+S*O)*X,e[8]=(d*Q-p*ne+h*A)*X,e[9]=(s*ne-i*Q-c*A)*X,e[10]=(T*I-L*z+x*D)*X,e[11]=(v*z-b*I-S*D)*X,e[12]=(p*G-d*k-m*A)*X,e[13]=(i*k-s*G+l*A)*X,e[14]=(L*O-T*W-y*D)*X,e[15]=(b*W-v*O+g*D)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,b=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,b*p+s,b*m-l*d,0,h*m-l*p,b*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,b=d+d,v=p+p,g=c*h,S=c*b,T=c*v,L=d*b,y=d*v,x=p*v,D=m*h,O=m*b,z=m*v,W=s.x,I=s.y,H=s.z;return l[0]=(1-(L+x))*W,l[1]=(S+z)*W,l[2]=(T-O)*W,l[3]=0,l[4]=(S-z)*I,l[5]=(1-(g+x))*I,l[6]=(y+D)*I,l[7]=0,l[8]=(T+O)*H,l[9]=(y-D)*H,l[10]=(1-(g+L))*H,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Br.set(l[0],l[1],l[2]).length();const p=Br.set(l[4],l[5],l[6]).length(),m=Br.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Vi.copy(this);const h=1/d,b=1/p,v=1/m;return Vi.elements[0]*=h,Vi.elements[1]*=h,Vi.elements[2]*=h,Vi.elements[4]*=b,Vi.elements[5]*=b,Vi.elements[6]*=b,Vi.elements[8]*=v,Vi.elements[9]*=v,Vi.elements[10]*=v,i.setFromRotationMatrix(Vi),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=ra,m=!1){const h=this.elements,b=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),S=(s+l)/(s-l);let T,L;if(m)T=c/(d-c),L=d*c/(d-c);else if(p===ra)T=-(d+c)/(d-c),L=-2*d*c/(d-c);else if(p===gl)T=-d/(d-c),L=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=b,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=L,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=ra,m=!1){const h=this.elements,b=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),S=-(s+l)/(s-l);let T,L;if(m)T=1/(d-c),L=d/(d-c);else if(p===ra)T=-2/(d-c),L=-(d+c)/(d-c);else if(p===gl)T=-1/(d-c),L=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=b,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=T,h[14]=L,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};xu.prototype.isMatrix4=!0;let xn=xu;const Br=new ae,Vi=new xn,N1=new ae(0,0,0),U1=new ae(1,1,1),ms=new ae,Rc=new ae,Si=new ae,zx=new xn,Bx=new As;class ws{constructor(e=0,i=0,s=0,l=ws.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],b=l[9],v=l[2],g=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-b,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(p,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-b,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,S));break;case"XZY":this._z=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-b,S),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return zx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Bx.setFromEuler(this),this.setFromQuaternion(Bx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ws.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L1=0;const Fx=new ae,Fr=new As,Da=new xn,Cc=new ae,nl=new ae,O1=new ae,P1=new As,Gx=new ae(1,0,0),Hx=new ae(0,1,0),kx=new ae(0,0,1),Vx={type:"added"},I1={type:"removed"},Gr={type:"childadded",child:null},Hd={type:"childremoved",child:null};class Hn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new ae,i=new ws,s=new As,l=new ae(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new xn},normalMatrix:{value:new yt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Gx,e)}rotateY(e){return this.rotateOnAxis(Hx,e)}rotateZ(e){return this.rotateOnAxis(kx,e)}translateOnAxis(e,i){return Fx.copy(e).applyQuaternion(this.quaternion),this.position.add(Fx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Gx,e)}translateY(e){return this.translateOnAxis(Hx,e)}translateZ(e){return this.translateOnAxis(kx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Cc.copy(e):Cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(nl,Cc,this.up):Da.lookAt(Cc,nl,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),Fr.setFromRotationMatrix(Da),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vx),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(I1),Hd.child=e,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Da.multiply(e.parent.matrixWorld)),e.applyMatrix4(Da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vx),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,O1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,P1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,b=m.length;h<b;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),b=d(e.images),v=d(e.shapes),g=d(e.skeletons),S=d(e.animations),T=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),b.length>0&&(s.images=b),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function d(p){const m=[];for(const h in p){const b=p[h];delete b.metadata,m.push(b)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new ae(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ii extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z1={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const L of e.hand.values()){const y=i.getJointPose(L,s),x=this._getHandJoint(h,L);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const b=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=b.position.distanceTo(v.position),S=.02,T=.005;h.inputState.pinching&&g>S+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=S-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(z1)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ii;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Vd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class It{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Bt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Bt.workingColorSpace){if(e=M1(e,1),i=wt(i,0,1),s=wt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Vd(d,c,e+1/3),this.g=Vd(d,c,e),this.b=Vd(d,c,e-1/3)}return Bt.colorSpaceToWorking(this,l),this}setStyle(e,i=Pi){function s(c){c!==void 0&&parseFloat(c)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:mt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Pi){const s=uv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ba(e.r),this.g=Ba(e.g),this.b=Ba(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return Bt.workingToColorSpace(Kn.copy(this),e),Math.round(wt(Kn.r*255,0,255))*65536+Math.round(wt(Kn.g*255,0,255))*256+Math.round(wt(Kn.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Bt.workingColorSpace){Bt.workingToColorSpace(Kn.copy(this),i);const s=Kn.r,l=Kn.g,c=Kn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const b=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=b<=.5?v/(d+p):v/(2-d-p),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=b,e}getRGB(e,i=Bt.workingColorSpace){return Bt.workingToColorSpace(Kn.copy(this),i),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Pi){Bt.workingToColorSpace(Kn.copy(this),e);const i=Kn.r,s=Kn.g,l=Kn.b;return e!==Pi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(gs),this.setHSL(gs.h+e,gs.s+i,gs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(gs),e.getHSL(Dc);const s=Id(gs.h,Dc.h,i),l=Id(gs.s,Dc.s,i),c=Id(gs.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new It;It.NAMES=uv;class bp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(e),this.density=i}clone(){return new bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class B1 extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ws,this.environmentIntensity=1,this.environmentRotation=new ws,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ji=new ae,Na=new ae,jd=new ae,Ua=new ae,Hr=new ae,kr=new ae,jx=new ae,Xd=new ae,Wd=new ae,qd=new ae,Yd=new yn,Zd=new yn,Kd=new yn;class Ii{constructor(e=new ae,i=new ae,s=new ae){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),ji.subVectors(e,i),l.cross(ji);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){ji.subVectors(l,i),Na.subVectors(s,i),jd.subVectors(e,i);const d=ji.dot(ji),p=ji.dot(Na),m=ji.dot(jd),h=Na.dot(Na),b=Na.dot(jd),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,S=(h*m-p*b)*g,T=(d*b-p*m)*g;return c.set(1-S-T,T,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,Ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ua.x),m.addScaledVector(d,Ua.y),m.addScaledVector(p,Ua.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Yd.setScalar(0),Zd.setScalar(0),Kd.setScalar(0),Yd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,s),Kd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Yd,c.x),d.addScaledVector(Zd,c.y),d.addScaledVector(Kd,c.z),d}static isFrontFacing(e,i,s,l){return ji.subVectors(s,i),Na.subVectors(e,i),ji.cross(Na).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),ji.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Hr.subVectors(l,s),kr.subVectors(c,s),Xd.subVectors(e,s);const m=Hr.dot(Xd),h=kr.dot(Xd);if(m<=0&&h<=0)return i.copy(s);Wd.subVectors(e,l);const b=Hr.dot(Wd),v=kr.dot(Wd);if(b>=0&&v<=b)return i.copy(l);const g=m*v-b*h;if(g<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(s).addScaledVector(Hr,d);qd.subVectors(e,c);const S=Hr.dot(qd),T=kr.dot(qd);if(T>=0&&S<=T)return i.copy(c);const L=S*h-m*T;if(L<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(kr,p);const y=b*T-S*v;if(y<=0&&v-b>=0&&S-T>=0)return jx.subVectors(c,l),p=(v-b)/(v-b+(S-T)),i.copy(l).addScaledVector(jx,p);const x=1/(y+L+g);return d=L*x,p=g*x,i.copy(s).addScaledVector(Hr,d).addScaledVector(kr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Xi):Xi.fromBufferAttribute(c,d),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),Uc.subVectors(this.max,il),Vr.subVectors(e.a,il),jr.subVectors(e.b,il),Xr.subVectors(e.c,il),xs.subVectors(jr,Vr),_s.subVectors(Xr,jr),qs.subVectors(Vr,Xr);let i=[0,-xs.z,xs.y,0,-_s.z,_s.y,0,-qs.z,qs.y,xs.z,0,-xs.x,_s.z,0,-_s.x,qs.z,0,-qs.x,-xs.y,xs.x,0,-_s.y,_s.x,0,-qs.y,qs.x,0];return!Qd(i,Vr,jr,Xr,Uc)||(i=[1,0,0,0,1,0,0,0,1],!Qd(i,Vr,jr,Xr,Uc))?!1:(Lc.crossVectors(xs,_s),i=[Lc.x,Lc.y,Lc.z],Qd(i,Vr,jr,Xr,Uc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const La=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Xi=new ae,Nc=new xl,Vr=new ae,jr=new ae,Xr=new ae,xs=new ae,_s=new ae,qs=new ae,il=new ae,Uc=new ae,Lc=new ae,Ys=new ae;function Qd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ys.fromArray(r,c);const p=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),m=e.dot(Ys),h=i.dot(Ys),b=s.dot(Ys);if(Math.max(-Math.max(m,h,b),Math.min(m,h,b))>p)return!1}return!0}const Dn=new ae,Oc=new ht;let F1=0;class qi extends Rs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ap,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix3(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyMatrix4(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.applyNormalMatrix(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Dn.fromBufferAttribute(this,i),Dn.transformDirection(e),this.setXYZ(i,Dn.x,Dn.y,Dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=aa(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=rn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=aa(i,this.array)),i}setX(e,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=aa(i,this.array)),i}setY(e,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=aa(i,this.array)),i}setZ(e,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=aa(i,this.array)),i}setW(e,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=rn(i,this.array),s=rn(s,this.array),l=rn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=rn(i,this.array),s=rn(s,this.array),l=rn(l,this.array),c=rn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fv extends qi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class dv extends qi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Sn extends qi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const G1=new xl,al=new ae,Jd=new ae;class vu{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):G1.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const i=al.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(al,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(Jd)),this.expandByPoint(al.copy(e.center).sub(Jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let H1=0;const Oi=new xn,$d=new Hn,Wr=new ae,Mi=new xl,sl=new xl,Gn=new ae;class $n extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v1(e)?dv:fv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new yt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,i,s){return Oi.makeTranslation(e,i,s),this.applyMatrix4(Oi),this}scale(e,i,s){return Oi.makeScale(e,i,s),this.applyMatrix4(Oi),this}lookAt(e){return $d.lookAt(e),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Sn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Mi.setFromBufferAttribute(c),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];sl.setFromBufferAttribute(p),this.morphTargetsRelative?(Gn.addVectors(Mi.min,sl.min),Mi.expandByPoint(Gn),Gn.addVectors(Mi.max,sl.max),Mi.expandByPoint(Gn)):(Mi.expandByPoint(sl.min),Mi.expandByPoint(sl.max))}Mi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Gn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Gn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,b=p.count;h<b;h++)Gn.fromBufferAttribute(p,h),m&&(Wr.fromBufferAttribute(e,h),Gn.add(Wr)),l=Math.max(l,s.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let A=0;A<s.count;A++)p[A]=new ae,m[A]=new ae;const h=new ae,b=new ae,v=new ae,g=new ht,S=new ht,T=new ht,L=new ae,y=new ae;function x(A,G,ne){h.fromBufferAttribute(s,A),b.fromBufferAttribute(s,G),v.fromBufferAttribute(s,ne),g.fromBufferAttribute(c,A),S.fromBufferAttribute(c,G),T.fromBufferAttribute(c,ne),b.sub(h),v.sub(h),S.sub(g),T.sub(g);const k=1/(S.x*T.y-T.x*S.y);isFinite(k)&&(L.copy(b).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(k),y.copy(v).multiplyScalar(S.x).addScaledVector(b,-T.x).multiplyScalar(k),p[A].add(L),p[G].add(L),p[ne].add(L),m[A].add(y),m[G].add(y),m[ne].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let A=0,G=D.length;A<G;++A){const ne=D[A],k=ne.start,Q=ne.count;for(let me=k,ue=k+Q;me<ue;me+=3)x(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const O=new ae,z=new ae,W=new ae,I=new ae;function H(A){W.fromBufferAttribute(l,A),I.copy(W);const G=p[A];O.copy(G),O.sub(W.multiplyScalar(W.dot(G))).normalize(),z.crossVectors(I,G);const k=z.dot(m[A])<0?-1:1;d.setXYZW(A,O.x,O.y,O.z,k)}for(let A=0,G=D.length;A<G;++A){const ne=D[A],k=ne.start,Q=ne.count;for(let me=k,ue=k+Q;me<ue;me+=3)H(e.getX(me+0)),H(e.getX(me+1)),H(e.getX(me+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,S=s.count;g<S;g++)s.setXYZ(g,0,0,0);const l=new ae,c=new ae,d=new ae,p=new ae,m=new ae,h=new ae,b=new ae,v=new ae;if(e)for(let g=0,S=e.count;g<S;g+=3){const T=e.getX(g+0),L=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,y),b.subVectors(d,c),v.subVectors(l,c),b.cross(v),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,L),h.fromBufferAttribute(s,y),p.add(b),m.add(b),h.add(b),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(L,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,S=i.count;g<S;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),b.subVectors(d,c),v.subVectors(l,c),b.cross(v),s.setXYZ(g+0,b.x,b.y,b.z),s.setXYZ(g+1,b.x,b.y,b.z),s.setXYZ(g+2,b.x,b.y,b.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Gn.fromBufferAttribute(e,i),Gn.normalize(),e.setXYZ(i,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(p,m){const h=p.array,b=p.itemSize,v=p.normalized,g=new h.constructor(m.length*b);let S=0,T=0;for(let L=0,y=m.length;L<y;L++){p.isInterleavedBufferAttribute?S=m[L]*p.data.stride+p.offset:S=m[L]*b;for(let x=0;x<b;x++)g[T++]=h[S++]}return new qi(g,b,v)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let b=0,v=h.length;b<v;b++){const g=h[b],S=e(g,s);m.push(S)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],b=[];for(let v=0,g=h.length;v<g;v++){const S=h[v];b.push(S.toJSON(e.data))}b.length>0&&(l[m]=b,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const b=l[h];this.setAttribute(h,b.clone(i))}const c=e.morphAttributes;for(const h in c){const b=[],v=c[h];for(let g=0,S=v.length;g<S;g++)b.push(v[g].clone(i));this.morphAttributes[h]=b}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,b=d.length;h<b;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k1{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=ap,this.updateRanges=[],this.version=0,this.uuid=Es()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Es()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new ae;class pu{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)ti.fromBufferAttribute(this,i),ti.applyMatrix4(e),this.setXYZ(i,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)ti.fromBufferAttribute(this,i),ti.applyNormalMatrix(e),this.setXYZ(i,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)ti.fromBufferAttribute(this,i),ti.transformDirection(e),this.setXYZ(i,ti.x,ti.y,ti.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=aa(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=rn(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=rn(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=rn(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=rn(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=rn(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=aa(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=aa(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=aa(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=aa(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=rn(i,this.array),s=rn(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=rn(i,this.array),s=rn(s,this.array),l=rn(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=rn(i,this.array),s=rn(s,this.array),l=rn(l,this.array),c=rn(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){hu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new qi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){hu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let V1=0;class ir extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=io,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=xh,this.blendEquation=Qs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){mt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){mt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==io&&(s.blending=this.blending),this.side!==Ts&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==xh&&(s.blendDst=this.blendDst),this.blendEquation!==Qs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ir&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ir&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ir&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hv extends ir{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qr;const rl=new ae,Yr=new ae,Zr=new ae,Kr=new ht,ol=new ht,pv=new xn,Pc=new ae,ll=new ae,Ic=new ae,Xx=new ht,eh=new ht,Wx=new ht;class j1 extends Hn{constructor(e=new hv){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new $n;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new k1(i,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new pu(s,3,0,!1)),qr.setAttribute("uv",new pu(s,2,3,!1))}this.geometry=qr,this.material=e,this.center=new ht(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),pv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-Zr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;zc(Pc.set(-.5,-.5,0),Zr,d,Yr,l,c),zc(ll.set(.5,-.5,0),Zr,d,Yr,l,c),zc(Ic.set(.5,.5,0),Zr,d,Yr,l,c),Xx.set(0,0),eh.set(1,0),Wx.set(1,1);let p=e.ray.intersectTriangle(Pc,ll,Ic,!1,rl);if(p===null&&(zc(ll.set(-.5,.5,0),Zr,d,Yr,l,c),eh.set(0,1),p=e.ray.intersectTriangle(Pc,Ic,ll,!1,rl),p===null))return;const m=e.ray.origin.distanceTo(rl);m<e.near||m>e.far||i.push({distance:m,point:rl.clone(),uv:Ii.getInterpolation(rl,Pc,ll,Ic,Xx,eh,Wx,new ht),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zc(r,e,i,s,l,c){Kr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(ol.x=c*Kr.x-l*Kr.y,ol.y=l*Kr.x+c*Kr.y):ol.copy(Kr),r.copy(e),r.x+=ol.x,r.y+=ol.y,r.applyMatrix4(pv)}const Oa=new ae,th=new ae,Bc=new ae,vs=new ae,nh=new ae,Fc=new ae,ih=new ae;class yp{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,i),Oa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){th.copy(e).add(i).multiplyScalar(.5),Bc.copy(i).sub(e).normalize(),vs.copy(this.origin).sub(th);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Bc),p=vs.dot(this.direction),m=-vs.dot(Bc),h=vs.lengthSq(),b=Math.abs(1-d*d);let v,g,S,T;if(b>0)if(v=d*m-p,g=d*p-m,T=c*b,v>=0)if(g>=-T)if(g<=T){const L=1/b;v*=L,g*=L,S=v*(v+d*g+2*p)+g*(d*v+g+2*m)+h}else g=c,v=Math.max(0,-(d*g+p)),S=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(d*g+p)),S=-v*v+g*(g+2*m)+h;else g<=-T?(v=Math.max(0,-(-d*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+h):g<=T?(v=0,g=Math.min(Math.max(-c,-m),c),S=g*(g+2*m)+h):(v=Math.max(0,-(d*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),S=-v*v+g*(g+2*m)+h);else g=d>0?-c:c,v=Math.max(0,-(d*g+p)),S=-v*v+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(th).addScaledVector(Bc,g),S}intersectSphere(e,i){Oa.subVectors(e.center,this.origin);const s=Oa.dot(this.direction),l=Oa.dot(Oa)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,b=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),b>=0?(c=(e.min.y-g.y)*b,d=(e.max.y-g.y)*b):(c=(e.max.y-g.y)*b,d=(e.min.y-g.y)*b),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,i,s,l,c){nh.subVectors(i,e),Fc.subVectors(s,e),ih.crossVectors(nh,Fc);let d=this.direction.dot(ih),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;vs.subVectors(this.origin,e);const m=p*this.direction.dot(Fc.crossVectors(vs,Fc));if(m<0)return null;const h=p*this.direction.dot(nh.cross(vs));if(h<0||m+h>d)return null;const b=-p*vs.dot(ih);return b<0?null:this.at(b/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ta extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qx=new xn,Zs=new yp,Gc=new vu,Yx=new ae,Hc=new ae,kc=new ae,Vc=new ae,ah=new ae,jc=new ae,Zx=new ae,Xc=new ae;class ze extends Hn{constructor(e=new $n,i=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){jc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const b=p[m],v=c[m];b!==0&&(ah.fromBufferAttribute(v,e),d?jc.addScaledVector(ah,b):jc.addScaledVector(ah.sub(i),b))}i.add(jc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(c),Zs.copy(e.ray).recast(e.near),!(Gc.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Gc,Yx)===null||Zs.origin.distanceToSquared(Yx)>(e.far-e.near)**2))&&(qx.copy(c).invert(),Zs.copy(e.ray).applyMatrix4(qx),!(s.boundingBox!==null&&Zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Zs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,b=c.attributes.uv1,v=c.attributes.normal,g=c.groups,S=c.drawRange;if(p!==null)if(Array.isArray(d))for(let T=0,L=g.length;T<L;T++){const y=g[T],x=d[y.materialIndex],D=Math.max(y.start,S.start),O=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let z=D,W=O;z<W;z+=3){const I=p.getX(z),H=p.getX(z+1),A=p.getX(z+2);l=Wc(this,x,e,s,h,b,v,I,H,A),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),L=Math.min(p.count,S.start+S.count);for(let y=T,x=L;y<x;y+=3){const D=p.getX(y),O=p.getX(y+1),z=p.getX(y+2);l=Wc(this,d,e,s,h,b,v,D,O,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,L=g.length;T<L;T++){const y=g[T],x=d[y.materialIndex],D=Math.max(y.start,S.start),O=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let z=D,W=O;z<W;z+=3){const I=z,H=z+1,A=z+2;l=Wc(this,x,e,s,h,b,v,I,H,A),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),L=Math.min(m.count,S.start+S.count);for(let y=T,x=L;y<x;y+=3){const D=y,O=y+1,z=y+2;l=Wc(this,d,e,s,h,b,v,D,O,z),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function X1(r,e,i,s,l,c,d,p){let m;if(e.side===di?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===Ts,p),m===null)return null;Xc.copy(p),Xc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Xc);return h<i.near||h>i.far?null:{distance:h,point:Xc.clone(),object:r}}function Wc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Hc),r.getVertexPosition(m,kc),r.getVertexPosition(h,Vc);const b=X1(r,e,i,s,Hc,kc,Vc,Zx);if(b){const v=new ae;Ii.getBarycoord(Zx,Hc,kc,Vc,v),l&&(b.uv=Ii.getInterpolatedAttribute(l,p,m,h,v,new ht)),c&&(b.uv1=Ii.getInterpolatedAttribute(c,p,m,h,v,new ht)),d&&(b.normal=Ii.getInterpolatedAttribute(d,p,m,h,v,new ae),b.normal.dot(s.direction)>0&&b.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ae,materialIndex:0};Ii.getNormal(Hc,kc,Vc,g.normal),b.face=g,b.barycoord=v}return b}class W1 extends Jn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Wn,b=Wn,v,g){super(null,d,p,m,h,b,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sh=new ae,q1=new ae,Y1=new yt;class ys{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=sh.subVectors(s,i).cross(q1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(sh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Y1.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new vu,Z1=new ht(.5,.5),qc=new ae;class Sp{constructor(e=new ys,i=new ys,s=new ys,l=new ys,c=new ys,d=new ys){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],b=c[4],v=c[5],g=c[6],S=c[7],T=c[8],L=c[9],y=c[10],x=c[11],D=c[12],O=c[13],z=c[14],W=c[15];if(l[0].setComponents(h-d,S-b,x-T,W-D).normalize(),l[1].setComponents(h+d,S+b,x+T,W+D).normalize(),l[2].setComponents(h+p,S+v,x+L,W+O).normalize(),l[3].setComponents(h-p,S-v,x-L,W-O).normalize(),s)l[4].setComponents(m,g,y,z).normalize(),l[5].setComponents(h-m,S-g,x-y,W-z).normalize();else if(l[4].setComponents(h-m,S-g,x-y,W-z).normalize(),i===ra)l[5].setComponents(h+m,S+g,x+y,W+z).normalize();else if(i===gl)l[5].setComponents(m,g,y,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);const i=Z1.distanceTo(e.center);return Ks.radius=.7071067811865476+i,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(qc.x=l.normal.x>0?e.max.x:e.min.x,qc.y=l.normal.y>0?e.max.y:e.min.y,qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mp extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new ae,gu=new ae,Kx=new xn,cl=new yp,Yc=new vu,rh=new ae,Qx=new ae;class mv extends Hn{constructor(e=new $n,i=new Mp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)mu.fromBufferAttribute(i,l-1),gu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new Sn(s,1))}else mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;Kx.copy(l).invert(),cl.copy(e.ray).applyMatrix4(Kx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,b=s.index,g=s.attributes.position;if(b!==null){const S=Math.max(0,d.start),T=Math.min(b.count,d.start+d.count);for(let L=S,y=T-1;L<y;L+=h){const x=b.getX(L),D=b.getX(L+1),O=Zc(this,e,cl,m,x,D,L);O&&i.push(O)}if(this.isLineLoop){const L=b.getX(T-1),y=b.getX(S),x=Zc(this,e,cl,m,L,y,T-1);x&&i.push(x)}}else{const S=Math.max(0,d.start),T=Math.min(g.count,d.start+d.count);for(let L=S,y=T-1;L<y;L+=h){const x=Zc(this,e,cl,m,L,L+1,L);x&&i.push(x)}if(this.isLineLoop){const L=Zc(this,e,cl,m,T-1,S,T-1);L&&i.push(L)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Zc(r,e,i,s,l,c,d){const p=r.geometry.attributes.position;if(mu.fromBufferAttribute(p,l),gu.fromBufferAttribute(p,c),i.distanceSqToSegment(mu,gu,rh,Qx)>s)return;rh.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(rh);if(!(h<e.near||h>e.far))return{distance:h,point:Qx.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const Jx=new ae,$x=new ae;class K1 extends mv{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Jx.fromBufferAttribute(i,l),$x.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Jx.distanceTo($x);e.setAttribute("lineDistance",new Sn(s,1))}else mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gv extends Jn{constructor(e=[],i=tr,s,l,c,d,p,m,h,b){super(e,i,s,l,c,d,p,m,h,b),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q1 extends Jn{constructor(e,i,s,l,c,d,p,m,h){super(e,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends Jn{constructor(e,i,s=ca,l,c,d,p=Wn,m=Wn,h,b=Ga,v=1){if(b!==Ga&&b!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,d,p,m,b,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class J1 extends oo{constructor(e,i=ca,s=tr,l,c,d=Wn,p=Wn,m,h=Ga){const b={width:e,height:e,depth:1},v=[b,b,b,b,b,b];super(e,e,i,s,l,c,d,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xv extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class At extends $n{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],b=[],v=[];let g=0,S=0;T("z","y","x",-1,-1,s,i,e,d,c,0),T("z","y","x",1,-1,s,i,-e,d,c,1),T("x","z","y",1,1,e,s,i,l,d,2),T("x","z","y",1,-1,e,s,-i,l,d,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Sn(h,3)),this.setAttribute("normal",new Sn(b,3)),this.setAttribute("uv",new Sn(v,2));function T(L,y,x,D,O,z,W,I,H,A,G){const ne=z/H,k=W/A,Q=z/2,me=W/2,ue=I/2,X=H+1,w=A+1;let P=0,B=0;const $=new ae;for(let ee=0;ee<w;ee++){const R=ee*k-me;for(let K=0;K<X;K++){const be=K*ne-Q;$[L]=be*D,$[y]=R*O,$[x]=ue,h.push($.x,$.y,$.z),$[L]=0,$[y]=0,$[x]=I>0?1:-1,b.push($.x,$.y,$.z),v.push(K/H),v.push(1-ee/A),P+=1}}for(let ee=0;ee<A;ee++)for(let R=0;R<H;R++){const K=g+R+X*ee,be=g+R+X*(ee+1),Re=g+(R+1)+X*(ee+1),Oe=g+(R+1)+X*ee;m.push(K,be,Oe),m.push(be,Re,Oe),B+=6}p.addGroup(S,B,G),S+=B,g+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new At(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nn extends $n{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const b=[],v=[],g=[],S=[];let T=0;const L=[],y=s/2;let x=0;D(),d===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(b),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(S,2));function D(){const z=new ae,W=new ae;let I=0;const H=(i-e)/s;for(let A=0;A<=c;A++){const G=[],ne=A/c,k=ne*(i-e)+e;for(let Q=0;Q<=l;Q++){const me=Q/l,ue=me*m+p,X=Math.sin(ue),w=Math.cos(ue);W.x=k*X,W.y=-ne*s+y,W.z=k*w,v.push(W.x,W.y,W.z),z.set(X,H,w).normalize(),g.push(z.x,z.y,z.z),S.push(me,1-ne),G.push(T++)}L.push(G)}for(let A=0;A<l;A++)for(let G=0;G<c;G++){const ne=L[G][A],k=L[G+1][A],Q=L[G+1][A+1],me=L[G][A+1];(e>0||G!==0)&&(b.push(ne,k,me),I+=3),(i>0||G!==c-1)&&(b.push(k,Q,me),I+=3)}h.addGroup(x,I,0),x+=I}function O(z){const W=T,I=new ht,H=new ae;let A=0;const G=z===!0?e:i,ne=z===!0?1:-1;for(let Q=1;Q<=l;Q++)v.push(0,y*ne,0),g.push(0,ne,0),S.push(.5,.5),T++;const k=T;for(let Q=0;Q<=l;Q++){const ue=Q/l*m+p,X=Math.cos(ue),w=Math.sin(ue);H.x=G*w,H.y=y*ne,H.z=G*X,v.push(H.x,H.y,H.z),g.push(0,ne,0),I.x=X*.5+.5,I.y=w*.5*ne+.5,S.push(I.x,I.y),T++}for(let Q=0;Q<l;Q++){const me=W+Q,ue=k+Q;z===!0?b.push(ue,ue+1,me):b.push(ue+1,ue,me),A+=3}h.addGroup(x,A,z===!0?1:2),x+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ep extends Nn{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,e,i,s,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(e){return new Ep(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $1{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){mt("Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let d=1;d<=e;d++)s=this.getPoint(d/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const c=s.length;let d;i?d=i:d=e*s[c-1];let p=0,m=c-1,h;for(;p<=m;)if(l=Math.floor(p+(m-p)/2),h=s[l]-d,h<0)p=l+1;else if(h>0)m=l-1;else{m=l;break}if(l=m,s[l]===d)return l/(c-1);const b=s[l],g=s[l+1]-b,S=(d-b)/g;return(l+S)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const d=this.getPoint(l),p=this.getPoint(c),m=i||(d.isVector2?new ht:new ae);return m.copy(p).sub(d).normalize(),m}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new ae,l=[],c=[],d=[],p=new ae,m=new xn;for(let S=0;S<=e;S++){const T=S/e;l[S]=this.getTangentAt(T,new ae)}c[0]=new ae,d[0]=new ae;let h=Number.MAX_VALUE;const b=Math.abs(l[0].x),v=Math.abs(l[0].y),g=Math.abs(l[0].z);b<=h&&(h=b,s.set(1,0,0)),v<=h&&(h=v,s.set(0,1,0)),g<=h&&s.set(0,0,1),p.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],p),d[0].crossVectors(l[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),d[S]=d[S-1].clone(),p.crossVectors(l[S-1],l[S]),p.length()>Number.EPSILON){p.normalize();const T=Math.acos(wt(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(p,T))}d[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(wt(c[0].dot(c[e]),-1,1));S/=e,l[0].dot(p.crossVectors(c[0],c[e]))>0&&(S=-S);for(let T=1;T<=e;T++)c[T].applyMatrix4(m.makeRotationAxis(l[T],S*T)),d[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function eM(r,e){const i=1-r;return i*i*e}function tM(r,e){return 2*(1-r)*r*e}function nM(r,e){return r*r*e}function oh(r,e,i,s){return eM(r,e)+tM(r,i)+nM(r,s)}class iM extends $1{constructor(e=new ae,i=new ae,s=new ae){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new ae){const s=i,l=this.v0,c=this.v1,d=this.v2;return s.set(oh(e,l.x,c.x,d.x),oh(e,l.y,c.y,d.y),oh(e,l.z,c.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pa extends $n{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,b=m+1,v=e/p,g=i/m,S=[],T=[],L=[],y=[];for(let x=0;x<b;x++){const D=x*g-d;for(let O=0;O<h;O++){const z=O*v-c;T.push(z,-D,0),L.push(0,0,1),y.push(O/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<p;D++){const O=D+h*x,z=D+h*(x+1),W=D+1+h*(x+1),I=D+1+h*x;S.push(O,z,I),S.push(z,W,I)}this.setIndex(S),this.setAttribute("position",new Sn(T,3)),this.setAttribute("normal",new Sn(L,3)),this.setAttribute("uv",new Sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tp extends $n{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],h=[],b=[];let v=e;const g=(i-e)/l,S=new ae,T=new ht;for(let L=0;L<=l;L++){for(let y=0;y<=s;y++){const x=c+y/s*d;S.x=v*Math.cos(x),S.y=v*Math.sin(x),m.push(S.x,S.y,S.z),h.push(0,0,1),T.x=(S.x/i+1)/2,T.y=(S.y/i+1)/2,b.push(T.x,T.y)}v+=g}for(let L=0;L<l;L++){const y=L*(s+1);for(let x=0;x<s;x++){const D=x+y,O=D,z=D+s+1,W=D+s+2,I=D+1;p.push(O,z,I),p.push(z,W,I)}}this.setIndex(p),this.setAttribute("position",new Sn(m,3)),this.setAttribute("normal",new Sn(h,3)),this.setAttribute("uv",new Sn(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Pn extends $n{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const b=[],v=new ae,g=new ae,S=[],T=[],L=[],y=[];for(let x=0;x<=s;x++){const D=[],O=x/s;let z=0;x===0&&d===0?z=.5/i:x===s&&m===Math.PI&&(z=-.5/i);for(let W=0;W<=i;W++){const I=W/i;v.x=-e*Math.cos(l+I*c)*Math.sin(d+O*p),v.y=e*Math.cos(d+O*p),v.z=e*Math.sin(l+I*c)*Math.sin(d+O*p),T.push(v.x,v.y,v.z),g.copy(v).normalize(),L.push(g.x,g.y,g.z),y.push(I+z,1-O),D.push(h++)}b.push(D)}for(let x=0;x<s;x++)for(let D=0;D<i;D++){const O=b[x][D+1],z=b[x][D],W=b[x+1][D],I=b[x+1][D+1];(x!==0||d>0)&&S.push(O,z,I),(x!==s-1||m<Math.PI)&&S.push(z,W,I)}this.setIndex(S),this.setAttribute("position",new Sn(T,3)),this.setAttribute("normal",new Sn(L,3)),this.setAttribute("uv",new Sn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function lo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(e_(l))l.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(e_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function ni(r){const e={};for(let i=0;i<r.length;i++){const s=lo(r[i]);for(const l in s)e[l]=s[l]}return e}function e_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function aM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function _v(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const sM={clone:lo,merge:ni};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ua extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class lM extends ua{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends ir{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ip,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ws,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cM extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uM extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ap extends Hn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new It(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const lh=new xn,t_=new ae,n_=new ae;class vv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new xn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sp,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;t_.setFromMatrixPosition(e.matrixWorld),i.position.copy(t_),n_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(n_),i.updateMatrixWorld(),lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===gl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kc=new ae,Qc=new As,$i=new ae;class bv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kc,Qc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,$i.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Kc,Qc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const bs=new ae,i_=new ht,a_=new ht;class Ei extends bv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bs.x,bs.y).multiplyScalar(-e/bs.z),bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(bs.x,bs.y).multiplyScalar(-e/bs.z)}getViewSize(e,i){return this.getViewBounds(e,i_,a_),i.subVectors(a_,i_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ru*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class fM extends vv{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0}}class dM extends Ap{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class wp extends bv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=b*this.view.offsetY,m=p-b*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hM extends vv{constructor(){super(new wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s_ extends Ap{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new hM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class r_ extends Ap{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qr=-90,Jr=1;class pM extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Qr,Jr,e,i);l.layers=this.layers,this.add(l);const c=new Ei(Qr,Jr,e,i);c.layers=this.layers,this.add(c);const d=new Ei(Qr,Jr,e,i);d.layers=this.layers,this.add(d);const p=new Ei(Qr,Jr,e,i);p.layers=this.layers,this.add(p);const m=new Ei(Qr,Jr,e,i);m.layers=this.layers,this.add(m);const h=new Ei(Qr,Jr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===gl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,b]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const L=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=L,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,b),e.setRenderTarget(v,g,S),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class mM extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,mt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class o_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(wt(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lp=class Lp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Lp.prototype.isMatrix2=!0;let l_=Lp;class xM extends K1{constructor(e=10,i=10,s=4473924,l=8947848){s=new It(s),l=new It(l);const c=i/2,d=e/i,p=e/2,m=[],h=[];for(let g=0,S=0,T=-p;g<=i;g++,T+=d){m.push(-p,0,T,p,0,T),m.push(T,0,-p,T,0,p);const L=g===c?s:l;L.toArray(h,S),S+=3,L.toArray(h,S),S+=3,L.toArray(h,S),S+=3,L.toArray(h,S),S+=3}const b=new $n;b.setAttribute("position",new Sn(m,3)),b.setAttribute("color",new Sn(h,3));const v=new Mp({vertexColors:!0,toneMapped:!1});super(b,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _M extends Rs{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){mt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c_(r,e,i,s){const l=vM(s);switch(i){case av:return r*e;case rv:return r*e/l.components*l.byteLength;case pp:return r*e/l.components*l.byteLength;case nr:return r*e*2/l.components*l.byteLength;case mp:return r*e*2/l.components*l.byteLength;case sv:return r*e*3/l.components*l.byteLength;case Wi:return r*e*4/l.components*l.byteLength;case gp:return r*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Dh:return Math.max(r,16)*Math.max(e,8)/4;case wh:case Ch:return Math.max(r,8)*Math.max(e,8)/2;case Nh:case Uh:case Oh:case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lh:case lu:case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cu:case np:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vM(r){switch(r){case Ti:case ev:return{byteLength:1,components:1};case pl:case tv:case Fa:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case ca:case fp:case sa:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function bM(r){const e=new WeakMap;function i(p,m){const h=p.array,b=p.usage,v=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,b),p.onUploadCallback();let S;if(h instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=r.SHORT;else if(h instanceof Uint32Array)S=r.UNSIGNED_INT;else if(h instanceof Int32Array)S=r.INT;else if(h instanceof Int8Array)S=r.BYTE;else if(h instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const b=m.array,v=m.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,b);else{v.sort((S,T)=>S.start-T.start);let g=0;for(let S=1;S<v.length;S++){const T=v[g],L=v[S];L.start<=T.start+T.count+1?T.count=Math.max(T.count,L.start+L.count-T.start):(++g,v[g]=L)}v.length=g+1;for(let S=0,T=v.length;S<T;S++){const L=v[S];r.bufferSubData(h,L.start*b.BYTES_PER_ELEMENT,b,L.start,L.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const b=e.get(p);(!b||b.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,DM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QM="gl_FragColor = linearToOutputTexel( gl_FragColor );",JM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,EE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,QE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ST=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$T=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:yM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:wM,aomap_pars_fragment:RM,batching_pars_vertex:CM,batching_vertex:DM,begin_vertex:NM,beginnormal_vertex:UM,bsdfs:LM,iridescence_fragment:OM,bumpmap_pars_fragment:PM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:FM,color_fragment:GM,color_pars_fragment:HM,color_pars_vertex:kM,color_vertex:VM,common:jM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:WM,displacementmap_pars_vertex:qM,displacementmap_vertex:YM,emissivemap_fragment:ZM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:hE,envmap_vertex:iE,fog_vertex:aE,fog_pars_vertex:sE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:fE,lights_pars_begin:dE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:xE,lights_physical_fragment:_E,lights_physical_pars_fragment:vE,lights_fragment_begin:bE,lights_fragment_maps:yE,lights_fragment_end:SE,lightprobes_pars_fragment:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:wE,map_fragment:RE,map_pars_fragment:CE,map_particle_fragment:DE,map_particle_pars_fragment:NE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:LE,morphinstance_vertex:OE,morphcolor_vertex:PE,morphnormal_vertex:IE,morphtarget_pars_vertex:zE,morphtarget_vertex:BE,normal_fragment_begin:FE,normal_fragment_maps:GE,normal_pars_fragment:HE,normal_pars_vertex:kE,normal_vertex:VE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:ZE,packing:KE,premultiplied_alpha_fragment:QE,project_vertex:JE,dithering_fragment:$E,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:aT,shadowmap_vertex:sT,shadowmask_pars_fragment:rT,skinbase_vertex:oT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:fT,specularmap_pars_fragment:dT,tonemapping_fragment:hT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:xT,uv_pars_vertex:_T,uv_vertex:vT,worldpos_vertex:bT,background_vert:yT,background_frag:ST,backgroundCube_vert:MT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:AT,depth_vert:wT,depth_frag:RT,distance_vert:CT,distance_frag:DT,equirect_vert:NT,equirect_frag:UT,linedashed_vert:LT,linedashed_frag:OT,meshbasic_vert:PT,meshbasic_frag:IT,meshlambert_vert:zT,meshlambert_frag:BT,meshmatcap_vert:FT,meshmatcap_frag:GT,meshnormal_vert:HT,meshnormal_frag:kT,meshphong_vert:VT,meshphong_frag:jT,meshphysical_vert:XT,meshphysical_frag:WT,meshtoon_vert:qT,meshtoon_frag:YT,points_vert:ZT,points_frag:KT,shadow_vert:QT,shadow_frag:JT,sprite_vert:$T,sprite_frag:eA},We={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},na={basic:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ni([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ni([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ni([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new It(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ni([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ni([We.points,We.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ni([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ni([We.common,We.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ni([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:ni([We.sprite,We.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:ni([We.common,We.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:ni([We.lights,We.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};na.physical={uniforms:ni([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Jc={r:0,b:0,g:0},tA=new xn,Sv=new yt;Sv.set(-1,0,0,0,1,0,0,0,1);function nA(r,e,i,s,l,c){const d=new It(0);let p=l===!0?0:1,m,h,b=null,v=0,g=null;function S(D){let O=D.isScene===!0?D.background:null;if(O&&O.isTexture){const z=D.backgroundBlurriness>0;O=e.get(O,z)}return O}function T(D){let O=!1;const z=S(D);z===null?y(d,p):z&&z.isColor&&(y(z,1),O=!0);const W=r.xr.getEnvironmentBlendMode();W==="additive"?i.buffers.color.setClear(0,0,0,1,c):W==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function L(D,O){const z=S(O);z&&(z.isCubeTexture||z.mapping===_u)?(h===void 0&&(h=new ze(new At(1,1,1),new ua({name:"BackgroundCubeMaterial",uniforms:lo(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,I,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=z,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tA.makeRotationFromEuler(O.backgroundRotation)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Sv),h.material.toneMapped=Bt.getTransfer(z.colorSpace)!==$t,(b!==z||v!==z.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,b=z,v=z.version,g=r.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null)):z&&z.isTexture&&(m===void 0&&(m=new ze(new Pa(2,2),new ua({name:"BackgroundMaterial",uniforms:lo(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=z,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Bt.getTransfer(z.colorSpace)!==$t,z.matrixAutoUpdate===!0&&z.updateMatrix(),m.material.uniforms.uvTransform.value.copy(z.matrix),(b!==z||v!==z.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,b=z,v=z.version,g=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,O){D.getRGB(Jc,_v(r)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,O,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,O=1){d.set(D),p=O,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,y(d,p)},render:T,addToRenderList:L,dispose:x}}function iA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(k,Q,me,ue,X){let w=!1;const P=v(k,ue,me,Q);c!==P&&(c=P,h(c.object)),w=S(k,ue,me,X),w&&T(k,ue,me,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(w||d)&&(d=!1,z(k,Q,me,ue),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return r.createVertexArray()}function h(k){return r.bindVertexArray(k)}function b(k){return r.deleteVertexArray(k)}function v(k,Q,me,ue){const X=ue.wireframe===!0;let w=s[Q.id];w===void 0&&(w={},s[Q.id]=w);const P=k.isInstancedMesh===!0?k.id:0;let B=w[P];B===void 0&&(B={},w[P]=B);let $=B[me.id];$===void 0&&($={},B[me.id]=$);let ee=$[X];return ee===void 0&&(ee=g(m()),$[X]=ee),ee}function g(k){const Q=[],me=[],ue=[];for(let X=0;X<i;X++)Q[X]=0,me[X]=0,ue[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:me,attributeDivisors:ue,object:k,attributes:{},index:null}}function S(k,Q,me,ue){const X=c.attributes,w=Q.attributes;let P=0;const B=me.getAttributes();for(const $ in B)if(B[$].location>=0){const R=X[$];let K=w[$];if(K===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),R===void 0||R.attribute!==K||K&&R.data!==K.data)return!0;P++}return c.attributesNum!==P||c.index!==ue}function T(k,Q,me,ue){const X={},w=Q.attributes;let P=0;const B=me.getAttributes();for(const $ in B)if(B[$].location>=0){let R=w[$];R===void 0&&($==="instanceMatrix"&&k.instanceMatrix&&(R=k.instanceMatrix),$==="instanceColor"&&k.instanceColor&&(R=k.instanceColor));const K={};K.attribute=R,R&&R.data&&(K.data=R.data),X[$]=K,P++}c.attributes=X,c.attributesNum=P,c.index=ue}function L(){const k=c.newAttributes;for(let Q=0,me=k.length;Q<me;Q++)k[Q]=0}function y(k){x(k,0)}function x(k,Q){const me=c.newAttributes,ue=c.enabledAttributes,X=c.attributeDivisors;me[k]=1,ue[k]===0&&(r.enableVertexAttribArray(k),ue[k]=1),X[k]!==Q&&(r.vertexAttribDivisor(k,Q),X[k]=Q)}function D(){const k=c.newAttributes,Q=c.enabledAttributes;for(let me=0,ue=Q.length;me<ue;me++)Q[me]!==k[me]&&(r.disableVertexAttribArray(me),Q[me]=0)}function O(k,Q,me,ue,X,w,P){P===!0?r.vertexAttribIPointer(k,Q,me,X,w):r.vertexAttribPointer(k,Q,me,ue,X,w)}function z(k,Q,me,ue){L();const X=ue.attributes,w=me.getAttributes(),P=Q.defaultAttributeValues;for(const B in w){const $=w[B];if($.location>=0){let ee=X[B];if(ee===void 0&&(B==="instanceMatrix"&&k.instanceMatrix&&(ee=k.instanceMatrix),B==="instanceColor"&&k.instanceColor&&(ee=k.instanceColor)),ee!==void 0){const R=ee.normalized,K=ee.itemSize,be=e.get(ee);if(be===void 0)continue;const Re=be.buffer,Oe=be.type,ce=be.bytesPerElement,Ee=Oe===r.INT||Oe===r.UNSIGNED_INT||ee.gpuType===fp;if(ee.isInterleavedBufferAttribute){const _e=ee.data,Pe=_e.stride,Ve=ee.offset;if(_e.isInstancedInterleavedBuffer){for(let qe=0;qe<$.locationSize;qe++)x($.location+qe,_e.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let qe=0;qe<$.locationSize;qe++)y($.location+qe);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let qe=0;qe<$.locationSize;qe++)O($.location+qe,K/$.locationSize,Oe,R,Pe*ce,(Ve+K/$.locationSize*qe)*ce,Ee)}else{if(ee.isInstancedBufferAttribute){for(let _e=0;_e<$.locationSize;_e++)x($.location+_e,ee.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<$.locationSize;_e++)y($.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let _e=0;_e<$.locationSize;_e++)O($.location+_e,K/$.locationSize,Oe,R,K*ce,K/$.locationSize*_e*ce,Ee)}}else if(P!==void 0){const R=P[B];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv($.location,R);break;case 3:r.vertexAttrib3fv($.location,R);break;case 4:r.vertexAttrib4fv($.location,R);break;default:r.vertexAttrib1fv($.location,R)}}}}D()}function W(){G();for(const k in s){const Q=s[k];for(const me in Q){const ue=Q[me];for(const X in ue){const w=ue[X];for(const P in w)b(w[P].object),delete w[P];delete ue[X]}}delete s[k]}}function I(k){if(s[k.id]===void 0)return;const Q=s[k.id];for(const me in Q){const ue=Q[me];for(const X in ue){const w=ue[X];for(const P in w)b(w[P].object),delete w[P];delete ue[X]}}delete s[k.id]}function H(k){for(const Q in s){const me=s[Q];for(const ue in me){const X=me[ue];if(X[k.id]===void 0)continue;const w=X[k.id];for(const P in w)b(w[P].object),delete w[P];delete X[k.id]}}}function A(k){for(const Q in s){const me=s[Q],ue=k.isInstancedMesh===!0?k.id:0,X=me[ue];if(X!==void 0){for(const w in X){const P=X[w];for(const B in P)b(P[B].object),delete P[B];delete X[w]}delete me[ue],Object.keys(me).length===0&&delete s[Q]}}}function G(){ne(),d=!0,c!==l&&(c=l,h(c.object))}function ne(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:G,resetDefaultState:ne,dispose:W,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:H,initAttributes:L,enableAttribute:y,disableUnusedAttributes:D}}function aA(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,b){b!==0&&(r.drawArraysInstanced(s,m,h,b),i.update(h,s,b))}function p(m,h,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,b);let g=0;for(let S=0;S<b;S++)g+=h[S];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function sA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(H){return!(H!==Wi&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(H){const A=H===Fa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(H!==Ti&&s.convert(H)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==sa&&!A)}function m(H){if(H==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const b=m(h);b!==h&&(mt("WebGLRenderer:",h,"not supported, using",b,"instead."),h=b);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),z=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),W=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:T,maxTextureSize:L,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:O,maxFragmentUniforms:z,maxSamples:W,samples:I}}function rA(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new ys,p=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||s!==0||l;return l=g,s=v.length,S},this.beginShadows=function(){c=!0,b(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=b(v,g,0)},this.setState=function(v,g,S){const T=v.clippingPlanes,L=v.clipIntersection,y=v.clipShadows,x=r.get(v);if(!l||T===null||T.length===0||c&&!y)c?b(null):h();else{const D=c?0:s,O=D*4;let z=x.clippingState||null;m.value=z,z=b(T,g,O,S);for(let W=0;W!==O;++W)z[W]=i[W];x.clippingState=z,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=D}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function b(v,g,S,T){const L=v!==null?v.length:0;let y=null;if(L!==0){if(y=m.value,T!==!0||y===null){const x=S+L*4,D=g.matrixWorldInverse;p.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let O=0,z=S;O!==L;++O,z+=4)d.copy(v[O]).applyMatrix4(D,p),d.normal.toArray(y,z),y[z+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=L,e.numIntersection=0,y}}const Ms=4,u_=[.125,.215,.35,.446,.526,.582],Js=20,oA=256,ul=new wp,f_=new It;let ch=null,uh=0,fh=0,dh=!1;const lA=new ae;class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=lA}=c;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===tr||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Fa,format:Wi,colorSpace:uu,depthBuffer:!1},l=h_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cA(c)),this._blurMaterial=fA(c,e,i),this._ggxMaterial=uA(c,e,i)}return l}_compileMaterial(e){const i=new ze(new $n,e);this._renderer.compile(i,ul)}_sceneToCubeUV(e,i,s,l,c){const m=new Ei(90,1,i,s),h=[1,-1,1,1,1,1],b=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(f_),v.toneMapping=oa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new At,new ta({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,y=L.material;let x=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,x=!0):(y.color.copy(f_),x=!0);for(let O=0;O<6;O++){const z=O%3;z===0?(m.up.set(0,h[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+b[O],c.y,c.z)):z===1?(m.up.set(0,0,h[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+b[O],c.z)):(m.up.set(0,h[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+b[O]));const W=this._cubeSize;$r(l,z*W,O>2?W:0,W,W),v.setRenderTarget(l),x&&v.render(L,m),v.render(e,m)}v.toneMapping=S,v.autoClear=g,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===tr||e.mapping===ro;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;$r(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ul)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),b=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-b*b),g=0+h*1.25,S=v*g,{_lodMax:T}=this,L=this._sizeLods[s],y=3*L*(s>T-Ms?s-T+Ms:0),x=4*(this._cubeSize-L);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=T-i,$r(c,y,x,3*L,2*L),l.setRenderTarget(c),l.render(p,ul),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,$r(e,y,x,3*L,2*L),l.setRenderTarget(e),l.render(p,ul)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const b=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Js-1),L=c/T,y=isFinite(c)?1+Math.floor(b*L):Js;y>Js&&mt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Js}`);const x=[];let D=0;for(let H=0;H<Js;++H){const A=H/L,G=Math.exp(-A*A/2);x.push(G),H===0?D+=G:H<y&&(D+=2*G)}for(let H=0;H<x.length;H++)x[H]=x[H]/D;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:O}=this;g.dTheta.value=T,g.mipInt.value=O-s;const z=this._sizeLods[l],W=3*z*(l>O-Ms?l-O+Ms:0),I=4*(this._cubeSize-z);$r(i,W,I,3*z,2*z),m.setRenderTarget(i),m.render(v,ul)}}function cA(r){const e=[],i=[],s=[];let l=r;const c=r-Ms+1+u_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-Ms?m=u_[d-r+Ms-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),b=-h,v=1+h,g=[b,b,v,b,v,v,b,b,v,v,b,v],S=6,T=6,L=3,y=2,x=1,D=new Float32Array(L*T*S),O=new Float32Array(y*T*S),z=new Float32Array(x*T*S);for(let I=0;I<S;I++){const H=I%3*2/3-1,A=I>2?0:-1,G=[H,A,0,H+2/3,A,0,H+2/3,A+1,0,H,A,0,H+2/3,A+1,0,H,A+1,0];D.set(G,L*T*I),O.set(g,y*T*I);const ne=[I,I,I,I,I,I];z.set(ne,x*T*I)}const W=new $n;W.setAttribute("position",new qi(D,L)),W.setAttribute("uv",new qi(O,y)),W.setAttribute("faceIndex",new qi(z,x)),s.push(new ze(W,null)),l>Ms&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function h_(r,e,i){const s=new la(r,e,i);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function $r(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function uA(r,e,i){return new ua({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function fA(r,e,i){const s=new Float32Array(Js),l=new ae(0,1,0);return new ua({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function p_(){return new ua({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function m_(){return new ua({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function bu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mv extends la{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new gv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new At(5,5,5),c=new ua({name:"CubemapFromEquirect",uniforms:lo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:di,blending:za});c.uniforms.tEquirect.value=i;const d=new ze(l,c),p=i.minFilter;return i.minFilter===$s&&(i.minFilter=Qn),new pM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function dA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,S=!1){return g==null?null:S?d(g):c(g)}function c(g){if(g&&g.isTexture){const S=g.mapping;if(S===Ld||S===Od)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const L=new Mv(T.height);return L.fromEquirectangularTexture(r,g),e.set(g,L),g.addEventListener("dispose",h),p(L.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const S=g.mapping,T=S===Ld||S===Od,L=S===tr||S===ro;if(T||L){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new d_(r)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const D=g.image;return T&&D&&D.height>0||L&&D&&m(D)?(s===null&&(s=new d_(r)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",b),y.texture):null}}}return g}function p(g,S){return S===Ld?g.mapping=tr:S===Od&&(g.mapping=ro),g}function m(g){let S=0;const T=6;for(let L=0;L<T;L++)g[L]!==void 0&&S++;return S===T}function h(g){const S=g.target;S.removeEventListener("dispose",h);const T=e.get(S);T!==void 0&&(e.delete(S),T.dispose())}function b(g){const S=g.target;S.removeEventListener("dispose",b);const T=i.get(S);T!==void 0&&(i.delete(S),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function hA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&sp("WebGLRenderer: "+s+" extension not supported."),l}}}function pA(r,e,i,s){const l={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",d),delete l[g.id];const S=c.get(g);S&&(e.remove(S),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const S in g)e.update(g[S],r.ARRAY_BUFFER)}function h(v){const g=[],S=v.index,T=v.attributes.position;let L=0;if(T===void 0)return;if(S!==null){const D=S.array;L=S.version;for(let O=0,z=D.length;O<z;O+=3){const W=D[O+0],I=D[O+1],H=D[O+2];g.push(W,I,I,H,H,W)}}else{const D=T.array;L=T.version;for(let O=0,z=D.length/3-1;O<z;O+=3){const W=O+0,I=O+1,H=O+2;g.push(W,I,I,H,H,W)}}const y=new(T.count>=65535?dv:fv)(g,1);y.version=L;const x=c.get(v);x&&e.remove(x),c.set(v,y)}function b(v){const g=c.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:b}}function mA(r,e,i){let s;function l(v){s=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,g){r.drawElements(s,g,c,v*d),i.update(g,s,1)}function h(v,g,S){S!==0&&(r.drawElementsInstanced(s,g,c,v*d,S),i.update(g,s,S))}function b(v,g,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,S);let L=0;for(let y=0;y<S;y++)L+=g[y];i.update(L,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=b}function gA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ft("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xA(r,e,i){const s=new WeakMap,l=new yn;function c(d,p,m){const h=d.morphTargetInfluences,b=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=b!==void 0?b.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let ne=function(){A.dispose(),s.delete(p),p.removeEventListener("dispose",ne)};var S=ne;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,L=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],D=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let z=0;T===!0&&(z=1),L===!0&&(z=2),y===!0&&(z=3);let W=p.attributes.position.count*z,I=1;W>e.maxTextureSize&&(I=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const H=new Float32Array(W*I*4*v),A=new lv(H,W,I,v);A.type=sa,A.needsUpdate=!0;const G=z*4;for(let k=0;k<v;k++){const Q=x[k],me=D[k],ue=O[k],X=W*I*4*k;for(let w=0;w<Q.count;w++){const P=w*G;T===!0&&(l.fromBufferAttribute(Q,w),H[X+P+0]=l.x,H[X+P+1]=l.y,H[X+P+2]=l.z,H[X+P+3]=0),L===!0&&(l.fromBufferAttribute(me,w),H[X+P+4]=l.x,H[X+P+5]=l.y,H[X+P+6]=l.z,H[X+P+7]=0),y===!0&&(l.fromBufferAttribute(ue,w),H[X+P+8]=l.x,H[X+P+9]=l.y,H[X+P+10]=l.z,H[X+P+11]=ue.itemSize===4?l.w:1)}}g={count:v,texture:A,size:new ht(W,I)},s.set(p,g),p.addEventListener("dispose",ne)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let T=0;for(let y=0;y<h.length;y++)T+=h[y];const L=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",L),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function _A(r,e,i,s,l){let c=new WeakMap;function d(h){const b=l.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==b&&(e.update(g),c.set(g,b)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==b&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,b))),h.isSkinnedMesh){const S=h.skeleton;c.get(S)!==b&&(S.update(),c.set(S,b))}return g}function p(){c=new WeakMap}function m(h){const b=h.target;b.removeEventListener("dispose",m),s.releaseStatesOfObject(b),i.remove(b.instanceMatrix),b.instanceColor!==null&&i.remove(b.instanceColor)}return{update:d,dispose:p}}const vA={[W_]:"LINEAR_TONE_MAPPING",[q_]:"REINHARD_TONE_MAPPING",[Y_]:"CINEON_TONE_MAPPING",[Z_]:"ACES_FILMIC_TONE_MAPPING",[Q_]:"AGX_TONE_MAPPING",[J_]:"NEUTRAL_TONE_MAPPING",[K_]:"CUSTOM_TONE_MAPPING"};function bA(r,e,i,s,l){const c=new la(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new oo(e,i):void 0}),d=new la(e,i,{type:Fa,depthBuffer:!1,stencilBuffer:!1}),p=new $n;p.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Sn([0,2,0,0,2,0],2));const m=new lM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ze(p,m),b=new wp(-1,1,1,-1,0,1);let v=null,g=null,S=!1,T,L=null,y=[],x=!1;this.setSize=function(D,O){c.setSize(D,O),d.setSize(D,O);for(let z=0;z<y.length;z++){const W=y[z];W.setSize&&W.setSize(D,O)}},this.setEffects=function(D){y=D,x=y.length>0&&y[0].isRenderPass===!0;const O=c.width,z=c.height;for(let W=0;W<y.length;W++){const I=y[W];I.setSize&&I.setSize(O,z)}},this.begin=function(D,O){if(S||D.toneMapping===oa&&y.length===0)return!1;if(L=O,O!==null){const z=O.width,W=O.height;(c.width!==z||c.height!==W)&&this.setSize(z,W)}return x===!1&&D.setRenderTarget(c),T=D.toneMapping,D.toneMapping=oa,!0},this.hasRenderPass=function(){return x},this.end=function(D,O){D.toneMapping=T,S=!0;let z=c,W=d;for(let I=0;I<y.length;I++){const H=y[I];if(H.enabled!==!1&&(H.render(D,W,z,O),H.needsSwap!==!1)){const A=z;z=W,W=A}}if(v!==D.outputColorSpace||g!==D.toneMapping){v=D.outputColorSpace,g=D.toneMapping,m.defines={},Bt.getTransfer(v)===$t&&(m.defines.SRGB_TRANSFER="");const I=vA[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=z.texture,D.setRenderTarget(L),D.render(h,b),L=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Ev=new Jn,op=new oo(1,1),Tv=new lv,Av=new D1,wv=new gv,g_=[],x_=[],__=new Float32Array(16),v_=new Float32Array(9),b_=new Float32Array(4);function co(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=g_[l];if(c===void 0&&(c=new Float32Array(l),g_[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function In(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function zn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function yu(r,e){let i=x_[e];i===void 0&&(i=new Int32Array(e),x_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function yA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function SA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(In(i,e))return;r.uniform2fv(this.addr,e),zn(i,e)}}function MA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(In(i,e))return;r.uniform3fv(this.addr,e),zn(i,e)}}function EA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(In(i,e))return;r.uniform4fv(this.addr,e),zn(i,e)}}function TA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(In(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),zn(i,e)}else{if(In(i,s))return;b_.set(s),r.uniformMatrix2fv(this.addr,!1,b_),zn(i,s)}}function AA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(In(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),zn(i,e)}else{if(In(i,s))return;v_.set(s),r.uniformMatrix3fv(this.addr,!1,v_),zn(i,s)}}function wA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(In(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),zn(i,e)}else{if(In(i,s))return;__.set(s),r.uniformMatrix4fv(this.addr,!1,__),zn(i,s)}}function RA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function CA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(In(i,e))return;r.uniform2iv(this.addr,e),zn(i,e)}}function DA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(In(i,e))return;r.uniform3iv(this.addr,e),zn(i,e)}}function NA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(In(i,e))return;r.uniform4iv(this.addr,e),zn(i,e)}}function UA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function LA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(In(i,e))return;r.uniform2uiv(this.addr,e),zn(i,e)}}function OA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(In(i,e))return;r.uniform3uiv(this.addr,e),zn(i,e)}}function PA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(In(i,e))return;r.uniform4uiv(this.addr,e),zn(i,e)}}function IA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(op.compareFunction=i.isReversedDepthBuffer()?_p:xp,c=op):c=Ev,i.setTexture2D(e||c,l)}function zA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Av,l)}function BA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||wv,l)}function FA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Tv,l)}function GA(r){switch(r){case 5126:return yA;case 35664:return SA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return AA;case 35676:return wA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return DA;case 35669:case 35673:return NA;case 5125:return UA;case 36294:return LA;case 36295:return OA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return FA}}function HA(r,e){r.uniform1fv(this.addr,e)}function kA(r,e){const i=co(e,this.size,2);r.uniform2fv(this.addr,i)}function VA(r,e){const i=co(e,this.size,3);r.uniform3fv(this.addr,i)}function jA(r,e){const i=co(e,this.size,4);r.uniform4fv(this.addr,i)}function XA(r,e){const i=co(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function WA(r,e){const i=co(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function qA(r,e){const i=co(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function YA(r,e){r.uniform1iv(this.addr,e)}function ZA(r,e){r.uniform2iv(this.addr,e)}function KA(r,e){r.uniform3iv(this.addr,e)}function QA(r,e){r.uniform4iv(this.addr,e)}function JA(r,e){r.uniform1uiv(this.addr,e)}function $A(r,e){r.uniform2uiv(this.addr,e)}function e2(r,e){r.uniform3uiv(this.addr,e)}function t2(r,e){r.uniform4uiv(this.addr,e)}function n2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=op:d=Ev;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function i2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Av,c[d])}function a2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||wv,c[d])}function s2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);In(s,c)||(r.uniform1iv(this.addr,c),zn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Tv,c[d])}function r2(r){switch(r){case 5126:return HA;case 35664:return kA;case 35665:return VA;case 35666:return jA;case 35674:return XA;case 35675:return WA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return ZA;case 35668:case 35672:return KA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return $A;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return a2;case 36289:case 36303:case 36311:case 36292:return s2}}class o2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=GA(i.type)}}class l2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=r2(i.type)}}class c2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function y_(r,e){r.seq.push(e),r.map[e.id]=e}function u2(r,e,i){const s=r.name,l=s.length;for(hh.lastIndex=0;;){const c=hh.exec(s),d=hh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){y_(i,h===void 0?new o2(p,r,e):new l2(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new c2(p),y_(i,v)),i=v}}}class ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);u2(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function S_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const f2=37297;let d2=0;function h2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const M_=new yt;function p2(r){Bt._getMatrix(M_,Bt.workingColorSpace,r);const e=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(Bt.getTransfer(r)){case fu:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function E_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+h2(r.getShaderSource(e),p)}else return c}function m2(r,e){const i=p2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const g2={[W_]:"Linear",[q_]:"Reinhard",[Y_]:"Cineon",[Z_]:"ACESFilmic",[Q_]:"AgX",[J_]:"Neutral",[K_]:"Custom"};function x2(r,e){const i=g2[e];return i===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new ae;function _2(){Bt.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),e=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function b2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function y2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function hl(r){return r!==""}function T_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(S2,E2)}const M2=new Map;function E2(r,e){let i=Tt[e];if(i===void 0){const s=M2.get(e);if(s!==void 0)i=Tt[s],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lp(i)}const T2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(r){return r.replace(T2,A2)}function A2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function R_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const w2={[tu]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function R2(r){return w2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C2={[tr]:"ENVMAP_TYPE_CUBE",[ro]:"ENVMAP_TYPE_CUBE",[_u]:"ENVMAP_TYPE_CUBE_UV"};function D2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":C2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const N2={[ro]:"ENVMAP_MODE_REFRACTION"};function U2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":N2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L2={[X_]:"ENVMAP_BLENDING_MULTIPLY",[l1]:"ENVMAP_BLENDING_MIX",[c1]:"ENVMAP_BLENDING_ADD"};function O2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":L2[r.combine]||"ENVMAP_BLENDING_NONE"}function P2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function I2(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=R2(i),h=D2(i),b=U2(i),v=O2(i),g=P2(i),S=v2(i),T=b2(c),L=l.createProgram();let y,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(hl).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(hl).join(`
`),x.length>0&&(x+=`
`)):(y=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+b:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),x=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+b:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oa?"#define TONE_MAPPING":"",i.toneMapping!==oa?Tt.tonemapping_pars_fragment:"",i.toneMapping!==oa?x2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,m2("linearToOutputTexel",i.outputColorSpace),_2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),d=lp(d),d=T_(d,i),d=A_(d,i),p=lp(p),p=T_(p,i),p=A_(p,i),d=w_(d),p=w_(p),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===Ux?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ux?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const O=D+y+d,z=D+x+p,W=S_(l,l.VERTEX_SHADER,O),I=S_(l,l.FRAGMENT_SHADER,z);l.attachShader(L,W),l.attachShader(L,I),i.index0AttributeName!==void 0?l.bindAttribLocation(L,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(L,0,"position"),l.linkProgram(L);function H(k){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(L)||"",me=l.getShaderInfoLog(W)||"",ue=l.getShaderInfoLog(I)||"",X=Q.trim(),w=me.trim(),P=ue.trim();let B=!0,$=!0;if(l.getProgramParameter(L,l.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,L,W,I);else{const ee=E_(l,W,"vertex"),R=E_(l,I,"fragment");Ft("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(L,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+X+`
`+ee+`
`+R)}else X!==""?mt("WebGLProgram: Program Info Log:",X):(w===""||P==="")&&($=!1);$&&(k.diagnostics={runnable:B,programLog:X,vertexShader:{log:w,prefix:y},fragmentShader:{log:P,prefix:x}})}l.deleteShader(W),l.deleteShader(I),A=new ou(l,L),G=y2(l,L)}let A;this.getUniforms=function(){return A===void 0&&H(this),A};let G;this.getAttributes=function(){return G===void 0&&H(this),G};let ne=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ne===!1&&(ne=l.getProgramParameter(L,f2)),ne},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(L),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=L,this.vertexShader=W,this.fragmentShader=I,this}let z2=0;class B2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new F2(e),i.set(e,s)),s}}class F2{constructor(e){this.id=z2++,this.code=e,this.usedTimes=0}}function G2(r){return r===nr||r===lu||r===cu}function H2(r,e,i,s,l,c){const d=new cv,p=new B2,m=new Set,h=[],b=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return m.add(A),A===0?"uv":`uv${A}`}function L(A,G,ne,k,Q,me){const ue=k.fog,X=Q.geometry,w=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,P=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,B=e.get(A.envMap||w,P),$=B&&B.mapping===_u?B.image.height:null,ee=S[A.type];A.precision!==null&&(g=s.getMaxPrecision(A.precision),g!==A.precision&&mt("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const R=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,K=R!==void 0?R.length:0;let be=0;X.morphAttributes.position!==void 0&&(be=1),X.morphAttributes.normal!==void 0&&(be=2),X.morphAttributes.color!==void 0&&(be=3);let Re,Oe,ce,Ee;if(ee){const dt=na[ee];Re=dt.vertexShader,Oe=dt.fragmentShader}else Re=A.vertexShader,Oe=A.fragmentShader,p.update(A),ce=p.getVertexShaderID(A),Ee=p.getFragmentShaderID(A);const _e=r.getRenderTarget(),Pe=r.state.buffers.depth.getReversed(),Ve=Q.isInstancedMesh===!0,qe=Q.isBatchedMesh===!0,Ke=!!A.map,lt=!!A.matcap,st=!!B,vt=!!A.aoMap,pt=!!A.lightMap,qt=!!A.bumpMap,Be=!!A.normalMap,_t=!!A.displacementMap,j=!!A.emissiveMap,Ye=!!A.metalnessMap,rt=!!A.roughnessMap,Qe=A.anisotropy>0,we=A.clearcoat>0,nt=A.dispersion>0,U=A.iridescence>0,M=A.sheen>0,F=A.transmission>0,ie=Qe&&!!A.anisotropyMap,V=we&&!!A.clearcoatMap,te=we&&!!A.clearcoatNormalMap,oe=we&&!!A.clearcoatRoughnessMap,Z=U&&!!A.iridescenceMap,re=U&&!!A.iridescenceThicknessMap,Ce=M&&!!A.sheenColorMap,Se=M&&!!A.sheenRoughnessMap,Me=!!A.specularMap,Ne=!!A.specularColorMap,Je=!!A.specularIntensityMap,Fe=F&&!!A.transmissionMap,$e=F&&!!A.thicknessMap,Y=!!A.gradientMap,Te=!!A.alphaMap,ve=A.alphaTest>0,Ge=!!A.alphaHash,Ie=!!A.extensions;let Le=oa;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Le=r.toneMapping);const He={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:Re,fragmentShader:Oe,defines:A.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:qe,batchingColor:qe&&Q._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&Q.instanceColor!==null,instancingMorph:Ve&&Q.morphTexture!==null,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Bt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Ke,matcap:lt,envMap:st,envMapMode:st&&B.mapping,envMapCubeUVHeight:$,aoMap:vt,lightMap:pt,bumpMap:qt,normalMap:Be,displacementMap:_t,emissiveMap:j,normalMapObjectSpace:Be&&A.normalMapType===d1,normalMapTangentSpace:Be&&A.normalMapType===ip,packedNormalMap:Be&&A.normalMapType===ip&&G2(A.normalMap.format),metalnessMap:Ye,roughnessMap:rt,anisotropy:Qe,anisotropyMap:ie,clearcoat:we,clearcoatMap:V,clearcoatNormalMap:te,clearcoatRoughnessMap:oe,dispersion:nt,iridescence:U,iridescenceMap:Z,iridescenceThicknessMap:re,sheen:M,sheenColorMap:Ce,sheenRoughnessMap:Se,specularMap:Me,specularColorMap:Ne,specularIntensityMap:Je,transmission:F,transmissionMap:Fe,thicknessMap:$e,gradientMap:Y,opaque:A.transparent===!1&&A.blending===io&&A.alphaToCoverage===!1,alphaMap:Te,alphaTest:ve,alphaHash:Ge,combine:A.combine,mapUv:Ke&&T(A.map.channel),aoMapUv:vt&&T(A.aoMap.channel),lightMapUv:pt&&T(A.lightMap.channel),bumpMapUv:qt&&T(A.bumpMap.channel),normalMapUv:Be&&T(A.normalMap.channel),displacementMapUv:_t&&T(A.displacementMap.channel),emissiveMapUv:j&&T(A.emissiveMap.channel),metalnessMapUv:Ye&&T(A.metalnessMap.channel),roughnessMapUv:rt&&T(A.roughnessMap.channel),anisotropyMapUv:ie&&T(A.anisotropyMap.channel),clearcoatMapUv:V&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:te&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:re&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Se&&T(A.sheenRoughnessMap.channel),specularMapUv:Me&&T(A.specularMap.channel),specularColorMapUv:Ne&&T(A.specularColorMap.channel),specularIntensityMapUv:Je&&T(A.specularIntensityMap.channel),transmissionMapUv:Fe&&T(A.transmissionMap.channel),thicknessMapUv:$e&&T(A.thicknessMap.channel),alphaMapUv:Te&&T(A.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Be||Qe),vertexNormals:!!X.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!X.attributes.uv&&(Ke||Te),fog:!!ue,useFog:A.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||X.attributes.normal===void 0&&Be===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pe,skinning:Q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:be,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&ne.length>0,shadowMapType:r.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ke&&A.map.isVideoTexture===!0&&Bt.getTransfer(A.map.colorSpace)===$t,decodeVideoTextureEmissive:j&&A.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(A.emissiveMap.colorSpace)===$t,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ia,flipSided:A.side===di,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ie&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&A.extensions.multiDraw===!0||qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function y(A){const G=[];if(A.shaderID?G.push(A.shaderID):(G.push(A.customVertexShaderID),G.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ne in A.defines)G.push(ne),G.push(A.defines[ne]);return A.isRawShaderMaterial===!1&&(x(G,A),D(G,A),G.push(r.outputColorSpace)),G.push(A.customProgramCacheKey),G.join()}function x(A,G){A.push(G.precision),A.push(G.outputColorSpace),A.push(G.envMapMode),A.push(G.envMapCubeUVHeight),A.push(G.mapUv),A.push(G.alphaMapUv),A.push(G.lightMapUv),A.push(G.aoMapUv),A.push(G.bumpMapUv),A.push(G.normalMapUv),A.push(G.displacementMapUv),A.push(G.emissiveMapUv),A.push(G.metalnessMapUv),A.push(G.roughnessMapUv),A.push(G.anisotropyMapUv),A.push(G.clearcoatMapUv),A.push(G.clearcoatNormalMapUv),A.push(G.clearcoatRoughnessMapUv),A.push(G.iridescenceMapUv),A.push(G.iridescenceThicknessMapUv),A.push(G.sheenColorMapUv),A.push(G.sheenRoughnessMapUv),A.push(G.specularMapUv),A.push(G.specularColorMapUv),A.push(G.specularIntensityMapUv),A.push(G.transmissionMapUv),A.push(G.thicknessMapUv),A.push(G.combine),A.push(G.fogExp2),A.push(G.sizeAttenuation),A.push(G.morphTargetsCount),A.push(G.morphAttributeCount),A.push(G.numDirLights),A.push(G.numPointLights),A.push(G.numSpotLights),A.push(G.numSpotLightMaps),A.push(G.numHemiLights),A.push(G.numRectAreaLights),A.push(G.numDirLightShadows),A.push(G.numPointLightShadows),A.push(G.numSpotLightShadows),A.push(G.numSpotLightShadowsWithMaps),A.push(G.numLightProbes),A.push(G.shadowMapType),A.push(G.toneMapping),A.push(G.numClippingPlanes),A.push(G.numClipIntersection),A.push(G.depthPacking)}function D(A,G){d.disableAll(),G.instancing&&d.enable(0),G.instancingColor&&d.enable(1),G.instancingMorph&&d.enable(2),G.matcap&&d.enable(3),G.envMap&&d.enable(4),G.normalMapObjectSpace&&d.enable(5),G.normalMapTangentSpace&&d.enable(6),G.clearcoat&&d.enable(7),G.iridescence&&d.enable(8),G.alphaTest&&d.enable(9),G.vertexColors&&d.enable(10),G.vertexAlphas&&d.enable(11),G.vertexUv1s&&d.enable(12),G.vertexUv2s&&d.enable(13),G.vertexUv3s&&d.enable(14),G.vertexTangents&&d.enable(15),G.anisotropy&&d.enable(16),G.alphaHash&&d.enable(17),G.batching&&d.enable(18),G.dispersion&&d.enable(19),G.batchingColor&&d.enable(20),G.gradientMap&&d.enable(21),G.packedNormalMap&&d.enable(22),G.vertexNormals&&d.enable(23),A.push(d.mask),d.disableAll(),G.fog&&d.enable(0),G.useFog&&d.enable(1),G.flatShading&&d.enable(2),G.logarithmicDepthBuffer&&d.enable(3),G.reversedDepthBuffer&&d.enable(4),G.skinning&&d.enable(5),G.morphTargets&&d.enable(6),G.morphNormals&&d.enable(7),G.morphColors&&d.enable(8),G.premultipliedAlpha&&d.enable(9),G.shadowMapEnabled&&d.enable(10),G.doubleSided&&d.enable(11),G.flipSided&&d.enable(12),G.useDepthPacking&&d.enable(13),G.dithering&&d.enable(14),G.transmission&&d.enable(15),G.sheen&&d.enable(16),G.opaque&&d.enable(17),G.pointsUvs&&d.enable(18),G.decodeVideoTexture&&d.enable(19),G.decodeVideoTextureEmissive&&d.enable(20),G.alphaToCoverage&&d.enable(21),G.numLightProbeGrids>0&&d.enable(22),A.push(d.mask)}function O(A){const G=S[A.type];let ne;if(G){const k=na[G];ne=sM.clone(k.uniforms)}else ne=A.uniforms;return ne}function z(A,G){let ne=b.get(G);return ne!==void 0?++ne.usedTimes:(ne=new I2(r,G,A,l),h.push(ne),b.set(G,ne)),ne}function W(A){if(--A.usedTimes===0){const G=h.indexOf(A);h[G]=h[h.length-1],h.pop(),b.delete(A.cacheKey),A.destroy()}}function I(A){p.remove(A)}function H(){p.dispose()}return{getParameters:L,getProgramCacheKey:y,getUniforms:O,acquireProgram:z,releaseProgram:W,releaseShaderCache:I,programs:h,dispose:H}}function k2(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function V2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function C_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function D_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function p(g,S,T,L,y,x){let D=r[e];return D===void 0?(D={id:g.id,object:g,geometry:S,material:T,materialVariant:d(g),groupOrder:L,renderOrder:g.renderOrder,z:y,group:x},r[e]=D):(D.id=g.id,D.object=g,D.geometry=S,D.material=T,D.materialVariant=d(g),D.groupOrder=L,D.renderOrder=g.renderOrder,D.z=y,D.group=x),e++,D}function m(g,S,T,L,y,x){const D=p(g,S,T,L,y,x);T.transmission>0?s.push(D):T.transparent===!0?l.push(D):i.push(D)}function h(g,S,T,L,y,x){const D=p(g,S,T,L,y,x);T.transmission>0?s.unshift(D):T.transparent===!0?l.unshift(D):i.unshift(D)}function b(g,S){i.length>1&&i.sort(g||V2),s.length>1&&s.sort(S||C_),l.length>1&&l.sort(S||C_)}function v(){for(let g=e,S=r.length;g<S;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:b}}function j2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new D_,r.set(s,[d])):l>=c.length?(d=new D_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function X2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new It};break;case"SpotLight":i={position:new ae,direction:new ae,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new It,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new It,groundColor:new It};break;case"RectAreaLight":i={color:new It,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=i,i}}}function W2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let q2=0;function Y2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Z2(r){const e=new X2,i=W2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ae);const l=new ae,c=new xn,d=new xn;function p(h){let b=0,v=0,g=0;for(let G=0;G<9;G++)s.probe[G].set(0,0,0);let S=0,T=0,L=0,y=0,x=0,D=0,O=0,z=0,W=0,I=0,H=0;h.sort(Y2);for(let G=0,ne=h.length;G<ne;G++){const k=h[G],Q=k.color,me=k.intensity,ue=k.distance;let X=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===nr?X=k.shadow.map.texture:X=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)b+=Q.r*me,v+=Q.g*me,g+=Q.b*me;else if(k.isLightProbe){for(let w=0;w<9;w++)s.probe[w].addScaledVector(k.sh.coefficients[w],me);H++}else if(k.isDirectionalLight){const w=e.get(k);if(w.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const P=k.shadow,B=i.get(k);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,s.directionalShadow[S]=B,s.directionalShadowMap[S]=X,s.directionalShadowMatrix[S]=k.shadow.matrix,D++}s.directional[S]=w,S++}else if(k.isSpotLight){const w=e.get(k);w.position.setFromMatrixPosition(k.matrixWorld),w.color.copy(Q).multiplyScalar(me),w.distance=ue,w.coneCos=Math.cos(k.angle),w.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),w.decay=k.decay,s.spot[L]=w;const P=k.shadow;if(k.map&&(s.spotLightMap[W]=k.map,W++,P.updateMatrices(k),k.castShadow&&I++),s.spotLightMatrix[L]=P.matrix,k.castShadow){const B=i.get(k);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,s.spotShadow[L]=B,s.spotShadowMap[L]=X,z++}L++}else if(k.isRectAreaLight){const w=e.get(k);w.color.copy(Q).multiplyScalar(me),w.halfWidth.set(k.width*.5,0,0),w.halfHeight.set(0,k.height*.5,0),s.rectArea[y]=w,y++}else if(k.isPointLight){const w=e.get(k);if(w.color.copy(k.color).multiplyScalar(k.intensity),w.distance=k.distance,w.decay=k.decay,k.castShadow){const P=k.shadow,B=i.get(k);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,B.shadowCameraNear=P.camera.near,B.shadowCameraFar=P.camera.far,s.pointShadow[T]=B,s.pointShadowMap[T]=X,s.pointShadowMatrix[T]=k.shadow.matrix,O++}s.point[T]=w,T++}else if(k.isHemisphereLight){const w=e.get(k);w.skyColor.copy(k.color).multiplyScalar(me),w.groundColor.copy(k.groundColor).multiplyScalar(me),s.hemi[x]=w,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=We.LTC_FLOAT_1,s.rectAreaLTC2=We.LTC_FLOAT_2):(s.rectAreaLTC1=We.LTC_HALF_1,s.rectAreaLTC2=We.LTC_HALF_2)),s.ambient[0]=b,s.ambient[1]=v,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==S||A.pointLength!==T||A.spotLength!==L||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==D||A.numPointShadows!==O||A.numSpotShadows!==z||A.numSpotMaps!==W||A.numLightProbes!==H)&&(s.directional.length=S,s.spot.length=L,s.rectArea.length=y,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=z,s.spotShadowMap.length=z,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=z+W-I,s.spotLightMap.length=W,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=H,A.directionalLength=S,A.pointLength=T,A.spotLength=L,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=D,A.numPointShadows=O,A.numSpotShadows=z,A.numSpotMaps=W,A.numLightProbes=H,s.version=q2++)}function m(h,b){let v=0,g=0,S=0,T=0,L=0;const y=b.matrixWorldInverse;for(let x=0,D=h.length;x<D;x++){const O=h[x];if(O.isDirectionalLight){const z=s.directional[v];z.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),v++}else if(O.isSpotLight){const z=s.spot[S];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(y),z.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(y),S++}else if(O.isRectAreaLight){const z=s.rectArea[T];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(y),d.identity(),c.copy(O.matrixWorld),c.premultiply(y),d.extractRotation(c),z.halfWidth.set(O.width*.5,0,0),z.halfHeight.set(0,O.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),T++}else if(O.isPointLight){const z=s.point[g];z.position.setFromMatrixPosition(O.matrixWorld),z.position.applyMatrix4(y),g++}else if(O.isHemisphereLight){const z=s.hemi[L];z.direction.setFromMatrixPosition(O.matrixWorld),z.direction.transformDirection(y),L++}}}return{setup:p,setupView:m,state:s}}function N_(r){const e=new Z2(r),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function b(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:b,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function K2(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new N_(r),e.set(l,[p])):c>=d.length?(p=new N_(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const Q2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$2=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],ew=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],U_=new xn,fl=new ae,ph=new ae;function tw(r,e,i){let s=new Sp;const l=new ht,c=new ht,d=new yn,p=new cM,m=new uM,h={},b=i.maxTextureSize,v={[Ts]:di,[di]:Ts,[ia]:ia},g=new ua({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Q2,fragmentShader:J2}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const T=new $n;T.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new ze(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let x=this.type;this.render=function(I,H,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===j_&&(mt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);const G=r.getRenderTarget(),ne=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(za),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const me=x!==this.type;me&&H.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(X=>X.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,X=I.length;ue<X;ue++){const w=I[ue],P=w.shadow;if(P===void 0){mt("WebGLShadowMap:",w,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const B=P.getFrameExtents();l.multiply(B),c.copy(P.mapSize),(l.x>b||l.y>b)&&(l.x>b&&(c.x=Math.floor(b/B.x),l.x=c.x*B.x,P.mapSize.x=c.x),l.y>b&&(c.y=Math.floor(b/B.y),l.y=c.y*B.y,P.mapSize.y=c.y));const $=r.state.buffers.depth.getReversed();if(P.camera._reversedDepth=$,P.map===null||me===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===dl){if(w.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new la(l.x,l.y,{format:nr,type:Fa,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),P.map.texture.name=w.name+".shadowMap",P.map.depthTexture=new oo(l.x,l.y,sa),P.map.depthTexture.name=w.name+".shadowMapDepth",P.map.depthTexture.format=Ga,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Wn,P.map.depthTexture.magFilter=Wn}else w.isPointLight?(P.map=new Mv(l.x),P.map.depthTexture=new J1(l.x,ca)):(P.map=new la(l.x,l.y),P.map.depthTexture=new oo(l.x,l.y,ca)),P.map.depthTexture.name=w.name+".shadowMap",P.map.depthTexture.format=Ga,this.type===tu?(P.map.depthTexture.compareFunction=$?_p:xp,P.map.depthTexture.minFilter=Qn,P.map.depthTexture.magFilter=Qn):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Wn,P.map.depthTexture.magFilter=Wn);P.camera.updateProjectionMatrix()}const ee=P.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<ee;R++){if(P.map.isWebGLCubeRenderTarget)r.setRenderTarget(P.map,R),r.clear();else{R===0&&(r.setRenderTarget(P.map),r.clear());const K=P.getViewport(R);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Q.viewport(d)}if(w.isPointLight){const K=P.camera,be=P.matrix,Re=w.distance||K.far;Re!==K.far&&(K.far=Re,K.updateProjectionMatrix()),fl.setFromMatrixPosition(w.matrixWorld),K.position.copy(fl),ph.copy(K.position),ph.add($2[R]),K.up.copy(ew[R]),K.lookAt(ph),K.updateMatrixWorld(),be.makeTranslation(-fl.x,-fl.y,-fl.z),U_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),P._frustum.setFromProjectionMatrix(U_,K.coordinateSystem,K.reversedDepth)}else P.updateMatrices(w);s=P.getFrustum(),z(H,A,P.camera,w,this.type)}P.isPointLightShadow!==!0&&this.type===dl&&D(P,A),P.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(G,ne,k)};function D(I,H){const A=e.update(L);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new la(l.x,l.y,{format:nr,type:Fa})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(H,null,A,g,L,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(H,null,A,S,L,null)}function O(I,H,A,G){let ne=null;const k=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)ne=k;else if(ne=A.isPointLight===!0?m:p,r.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Q=ne.uuid,me=H.uuid;let ue=h[Q];ue===void 0&&(ue={},h[Q]=ue);let X=ue[me];X===void 0&&(X=ne.clone(),ue[me]=X,H.addEventListener("dispose",W)),ne=X}if(ne.visible=H.visible,ne.wireframe=H.wireframe,G===dl?ne.side=H.shadowSide!==null?H.shadowSide:H.side:ne.side=H.shadowSide!==null?H.shadowSide:v[H.side],ne.alphaMap=H.alphaMap,ne.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,ne.map=H.map,ne.clipShadows=H.clipShadows,ne.clippingPlanes=H.clippingPlanes,ne.clipIntersection=H.clipIntersection,ne.displacementMap=H.displacementMap,ne.displacementScale=H.displacementScale,ne.displacementBias=H.displacementBias,ne.wireframeLinewidth=H.wireframeLinewidth,ne.linewidth=H.linewidth,A.isPointLight===!0&&ne.isMeshDistanceMaterial===!0){const Q=r.properties.get(ne);Q.light=A}return ne}function z(I,H,A,G,ne){if(I.visible===!1)return;if(I.layers.test(H.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ne===dl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);const me=e.update(I),ue=I.material;if(Array.isArray(ue)){const X=me.groups;for(let w=0,P=X.length;w<P;w++){const B=X[w],$=ue[B.materialIndex];if($&&$.visible){const ee=O(I,$,G,ne);I.onBeforeShadow(r,I,H,A,me,ee,B),r.renderBufferDirect(A,null,me,ee,I,B),I.onAfterShadow(r,I,H,A,me,ee,B)}}}else if(ue.visible){const X=O(I,ue,G,ne);I.onBeforeShadow(r,I,H,A,me,X,null),r.renderBufferDirect(A,null,me,X,I,null),I.onAfterShadow(r,I,H,A,me,X,null)}}const Q=I.children;for(let me=0,ue=Q.length;me<ue;me++)z(Q[me],H,A,G,ne)}function W(I){I.target.removeEventListener("dispose",W);for(const A in h){const G=h[A],ne=I.target.uuid;ne in G&&(G[ne].dispose(),delete G[ne])}}}function nw(r,e){function i(){let Y=!1;const Te=new yn;let ve=null;const Ge=new yn(0,0,0,0);return{setMask:function(Ie){ve!==Ie&&!Y&&(r.colorMask(Ie,Ie,Ie,Ie),ve=Ie)},setLocked:function(Ie){Y=Ie},setClear:function(Ie,Le,He,dt,Gt){Gt===!0&&(Ie*=dt,Le*=dt,He*=dt),Te.set(Ie,Le,He,dt),Ge.equals(Te)===!1&&(r.clearColor(Ie,Le,He,dt),Ge.copy(Te))},reset:function(){Y=!1,ve=null,Ge.set(-1,0,0,0)}}}function s(){let Y=!1,Te=!1,ve=null,Ge=null,Ie=null;return{setReversed:function(Le){if(Te!==Le){const He=e.get("EXT_clip_control");Le?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Te=Le;const dt=Ie;Ie=null,this.setClear(dt)}},getReversed:function(){return Te},setTest:function(Le){Le?_e(r.DEPTH_TEST):Pe(r.DEPTH_TEST)},setMask:function(Le){ve!==Le&&!Y&&(r.depthMask(Le),ve=Le)},setFunc:function(Le){if(Te&&(Le=S1[Le]),Ge!==Le){switch(Le){case _h:r.depthFunc(r.NEVER);break;case vh:r.depthFunc(r.ALWAYS);break;case bh:r.depthFunc(r.LESS);break;case so:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Sh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ge=Le}},setLocked:function(Le){Y=Le},setClear:function(Le){Ie!==Le&&(Ie=Le,Te&&(Le=1-Le),r.clearDepth(Le))},reset:function(){Y=!1,ve=null,Ge=null,Ie=null,Te=!1}}}function l(){let Y=!1,Te=null,ve=null,Ge=null,Ie=null,Le=null,He=null,dt=null,Gt=null;return{setTest:function(Ut){Y||(Ut?_e(r.STENCIL_TEST):Pe(r.STENCIL_TEST))},setMask:function(Ut){Te!==Ut&&!Y&&(r.stencilMask(Ut),Te=Ut)},setFunc:function(Ut,Bn,un){(ve!==Ut||Ge!==Bn||Ie!==un)&&(r.stencilFunc(Ut,Bn,un),ve=Ut,Ge=Bn,Ie=un)},setOp:function(Ut,Bn,un){(Le!==Ut||He!==Bn||dt!==un)&&(r.stencilOp(Ut,Bn,un),Le=Ut,He=Bn,dt=un)},setLocked:function(Ut){Y=Ut},setClear:function(Ut){Gt!==Ut&&(r.clearStencil(Ut),Gt=Ut)},reset:function(){Y=!1,Te=null,ve=null,Ge=null,Ie=null,Le=null,He=null,dt=null,Gt=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let b={},v={},g={},S=new WeakMap,T=[],L=null,y=!1,x=null,D=null,O=null,z=null,W=null,I=null,H=null,A=new It(0,0,0),G=0,ne=!1,k=null,Q=null,me=null,ue=null,X=null;const w=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,B=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec($)[1]),P=B>=1):$.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),P=B>=2);let ee=null,R={};const K=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Re=new yn().fromArray(K),Oe=new yn().fromArray(be);function ce(Y,Te,ve,Ge){const Ie=new Uint8Array(4),Le=r.createTexture();r.bindTexture(Y,Le),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ve;He++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Te,0,r.RGBA,1,1,Ge,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Te+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Le}const Ee={};Ee[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),_e(r.DEPTH_TEST),d.setFunc(so),qt(!1),Be(wx),_e(r.CULL_FACE),vt(za);function _e(Y){b[Y]!==!0&&(r.enable(Y),b[Y]=!0)}function Pe(Y){b[Y]!==!1&&(r.disable(Y),b[Y]=!1)}function Ve(Y,Te){return g[Y]!==Te?(r.bindFramebuffer(Y,Te),g[Y]=Te,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Te),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Te),!0):!1}function qe(Y,Te){let ve=T,Ge=!1;if(Y){ve=S.get(Te),ve===void 0&&(ve=[],S.set(Te,ve));const Ie=Y.textures;if(ve.length!==Ie.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,He=Ie.length;Le<He;Le++)ve[Le]=r.COLOR_ATTACHMENT0+Le;ve.length=Ie.length,Ge=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ge=!0);Ge&&r.drawBuffers(ve)}function Ke(Y){return L!==Y?(r.useProgram(Y),L=Y,!0):!1}const lt={[Qs]:r.FUNC_ADD,[XS]:r.FUNC_SUBTRACT,[WS]:r.FUNC_REVERSE_SUBTRACT};lt[qS]=r.MIN,lt[YS]=r.MAX;const st={[ZS]:r.ZERO,[KS]:r.ONE,[QS]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[i1]:r.SRC_ALPHA_SATURATE,[t1]:r.DST_COLOR,[$S]:r.DST_ALPHA,[JS]:r.ONE_MINUS_SRC_COLOR,[xh]:r.ONE_MINUS_SRC_ALPHA,[n1]:r.ONE_MINUS_DST_COLOR,[e1]:r.ONE_MINUS_DST_ALPHA,[a1]:r.CONSTANT_COLOR,[s1]:r.ONE_MINUS_CONSTANT_COLOR,[r1]:r.CONSTANT_ALPHA,[o1]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(Y,Te,ve,Ge,Ie,Le,He,dt,Gt,Ut){if(Y===za){y===!0&&(Pe(r.BLEND),y=!1);return}if(y===!1&&(_e(r.BLEND),y=!0),Y!==jS){if(Y!==x||Ut!==ne){if((D!==Qs||W!==Qs)&&(r.blendEquation(r.FUNC_ADD),D=Qs,W=Qs),Ut)switch(Y){case io:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rx:r.blendFunc(r.ONE,r.ONE);break;case Cx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ft("WebGLState: Invalid blending: ",Y);break}else switch(Y){case io:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cx:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dx:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",Y);break}O=null,z=null,I=null,H=null,A.set(0,0,0),G=0,x=Y,ne=Ut}return}Ie=Ie||Te,Le=Le||ve,He=He||Ge,(Te!==D||Ie!==W)&&(r.blendEquationSeparate(lt[Te],lt[Ie]),D=Te,W=Ie),(ve!==O||Ge!==z||Le!==I||He!==H)&&(r.blendFuncSeparate(st[ve],st[Ge],st[Le],st[He]),O=ve,z=Ge,I=Le,H=He),(dt.equals(A)===!1||Gt!==G)&&(r.blendColor(dt.r,dt.g,dt.b,Gt),A.copy(dt),G=Gt),x=Y,ne=!1}function pt(Y,Te){Y.side===ia?Pe(r.CULL_FACE):_e(r.CULL_FACE);let ve=Y.side===di;Te&&(ve=!ve),qt(ve),Y.blending===io&&Y.transparent===!1?vt(za):vt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ge=Y.stencilWrite;p.setTest(Ge),Ge&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),j(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Pe(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(Y){k!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),k=Y)}function Be(Y){Y!==kS?(_e(r.CULL_FACE),Y!==Q&&(Y===wx?r.cullFace(r.BACK):Y===VS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Pe(r.CULL_FACE),Q=Y}function _t(Y){Y!==me&&(P&&r.lineWidth(Y),me=Y)}function j(Y,Te,ve){Y?(_e(r.POLYGON_OFFSET_FILL),(ue!==Te||X!==ve)&&(ue=Te,X=ve,d.getReversed()&&(Te=-Te),r.polygonOffset(Te,ve))):Pe(r.POLYGON_OFFSET_FILL)}function Ye(Y){Y?_e(r.SCISSOR_TEST):Pe(r.SCISSOR_TEST)}function rt(Y){Y===void 0&&(Y=r.TEXTURE0+w-1),ee!==Y&&(r.activeTexture(Y),ee=Y)}function Qe(Y,Te,ve){ve===void 0&&(ee===null?ve=r.TEXTURE0+w-1:ve=ee);let Ge=R[ve];Ge===void 0&&(Ge={type:void 0,texture:void 0},R[ve]=Ge),(Ge.type!==Y||Ge.texture!==Te)&&(ee!==ve&&(r.activeTexture(ve),ee=ve),r.bindTexture(Y,Te||Ee[Y]),Ge.type=Y,Ge.texture=Te)}function we(){const Y=R[ee];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function nt(){try{r.compressedTexImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function M(){try{r.texSubImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function F(){try{r.texSubImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function ie(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function V(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function te(){try{r.texStorage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function oe(){try{r.texStorage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Z(){try{r.texImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function re(){try{r.texImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Ce(Y){return v[Y]!==void 0?v[Y]:r.getParameter(Y)}function Se(Y,Te){v[Y]!==Te&&(r.pixelStorei(Y,Te),v[Y]=Te)}function Me(Y){Re.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Re.copy(Y))}function Ne(Y){Oe.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Oe.copy(Y))}function Je(Y,Te){let ve=h.get(Te);ve===void 0&&(ve=new WeakMap,h.set(Te,ve));let Ge=ve.get(Y);Ge===void 0&&(Ge=r.getUniformBlockIndex(Te,Y.name),ve.set(Y,Ge))}function Fe(Y,Te){const Ge=h.get(Te).get(Y);m.get(Te)!==Ge&&(r.uniformBlockBinding(Te,Ge,Y.__bindingPointIndex),m.set(Te,Ge))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),b={},v={},ee=null,R={},g={},S=new WeakMap,T=[],L=null,y=!1,x=null,D=null,O=null,z=null,W=null,I=null,H=null,A=new It(0,0,0),G=0,ne=!1,k=null,Q=null,me=null,ue=null,X=null,Re.set(0,0,r.canvas.width,r.canvas.height),Oe.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:_e,disable:Pe,bindFramebuffer:Ve,drawBuffers:qe,useProgram:Ke,setBlending:vt,setMaterial:pt,setFlipSided:qt,setCullFace:Be,setLineWidth:_t,setPolygonOffset:j,setScissorTest:Ye,activeTexture:rt,bindTexture:Qe,unbindTexture:we,compressedTexImage2D:nt,compressedTexImage3D:U,texImage2D:Z,texImage3D:re,pixelStorei:Se,getParameter:Ce,updateUBOMapping:Je,uniformBlockBinding:Fe,texStorage2D:te,texStorage3D:oe,texSubImage2D:M,texSubImage3D:F,compressedTexSubImage2D:ie,compressedTexSubImage3D:V,scissor:Me,viewport:Ne,reset:$e}}function iw(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ht,b=new WeakMap,v=new Set;let g;const S=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(U,M){return T?new OffscreenCanvas(U,M):du("canvas")}function y(U,M,F){let ie=1;const V=nt(U);if((V.width>F||V.height>F)&&(ie=F/Math.max(V.width,V.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const te=Math.floor(ie*V.width),oe=Math.floor(ie*V.height);g===void 0&&(g=L(te,oe));const Z=M?L(te,oe):g;return Z.width=te,Z.height=oe,Z.getContext("2d").drawImage(U,0,0,te,oe),mt("WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+te+"x"+oe+")."),Z}else return"data"in U&&mt("WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),U;return U}function x(U){return U.generateMipmaps}function D(U){r.generateMipmap(U)}function O(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function z(U,M,F,ie,V,te=!1){if(U!==null){if(r[U]!==void 0)return r[U];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let oe;ie&&(oe=e.get("EXT_texture_norm16"),oe||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===r.RED&&(F===r.FLOAT&&(Z=r.R32F),F===r.HALF_FLOAT&&(Z=r.R16F),F===r.UNSIGNED_BYTE&&(Z=r.R8),F===r.UNSIGNED_SHORT&&oe&&(Z=oe.R16_EXT),F===r.SHORT&&oe&&(Z=oe.R16_SNORM_EXT)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.R8UI),F===r.UNSIGNED_SHORT&&(Z=r.R16UI),F===r.UNSIGNED_INT&&(Z=r.R32UI),F===r.BYTE&&(Z=r.R8I),F===r.SHORT&&(Z=r.R16I),F===r.INT&&(Z=r.R32I)),M===r.RG&&(F===r.FLOAT&&(Z=r.RG32F),F===r.HALF_FLOAT&&(Z=r.RG16F),F===r.UNSIGNED_BYTE&&(Z=r.RG8),F===r.UNSIGNED_SHORT&&oe&&(Z=oe.RG16_EXT),F===r.SHORT&&oe&&(Z=oe.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.RG8UI),F===r.UNSIGNED_SHORT&&(Z=r.RG16UI),F===r.UNSIGNED_INT&&(Z=r.RG32UI),F===r.BYTE&&(Z=r.RG8I),F===r.SHORT&&(Z=r.RG16I),F===r.INT&&(Z=r.RG32I)),M===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),F===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),F===r.UNSIGNED_INT&&(Z=r.RGB32UI),F===r.BYTE&&(Z=r.RGB8I),F===r.SHORT&&(Z=r.RGB16I),F===r.INT&&(Z=r.RGB32I)),M===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),F===r.UNSIGNED_INT&&(Z=r.RGBA32UI),F===r.BYTE&&(Z=r.RGBA8I),F===r.SHORT&&(Z=r.RGBA16I),F===r.INT&&(Z=r.RGBA32I)),M===r.RGB&&(F===r.UNSIGNED_SHORT&&oe&&(Z=oe.RGB16_EXT),F===r.SHORT&&oe&&(Z=oe.RGB16_SNORM_EXT),F===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),F===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),M===r.RGBA){const re=te?fu:Bt.getTransfer(V);F===r.FLOAT&&(Z=r.RGBA32F),F===r.HALF_FLOAT&&(Z=r.RGBA16F),F===r.UNSIGNED_BYTE&&(Z=re===$t?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT&&oe&&(Z=oe.RGBA16_EXT),F===r.SHORT&&oe&&(Z=oe.RGBA16_SNORM_EXT),F===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function W(U,M){let F;return U?M===null||M===ca||M===ml?F=r.DEPTH24_STENCIL8:M===sa?F=r.DEPTH32F_STENCIL8:M===pl&&(F=r.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ca||M===ml?F=r.DEPTH_COMPONENT24:M===sa?F=r.DEPTH_COMPONENT32F:M===pl&&(F=r.DEPTH_COMPONENT16),F}function I(U,M){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Wn&&U.minFilter!==Qn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function H(U){const M=U.target;M.removeEventListener("dispose",H),G(M),M.isVideoTexture&&b.delete(M),M.isHTMLTexture&&v.delete(M)}function A(U){const M=U.target;M.removeEventListener("dispose",A),k(M)}function G(U){const M=s.get(U);if(M.__webglInit===void 0)return;const F=U.source,ie=S.get(F);if(ie){const V=ie[M.__cacheKey];V.usedTimes--,V.usedTimes===0&&ne(U),Object.keys(ie).length===0&&S.delete(F)}s.remove(U)}function ne(U){const M=s.get(U);r.deleteTexture(M.__webglTexture);const F=U.source,ie=S.get(F);delete ie[M.__cacheKey],d.memory.textures--}function k(U){const M=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(M.__webglFramebuffer[ie]))for(let V=0;V<M.__webglFramebuffer[ie].length;V++)r.deleteFramebuffer(M.__webglFramebuffer[ie][V]);else r.deleteFramebuffer(M.__webglFramebuffer[ie]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ie])}else{if(Array.isArray(M.__webglFramebuffer))for(let ie=0;ie<M.__webglFramebuffer.length;ie++)r.deleteFramebuffer(M.__webglFramebuffer[ie]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ie=0;ie<M.__webglColorRenderbuffer.length;ie++)M.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ie]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=U.textures;for(let ie=0,V=F.length;ie<V;ie++){const te=s.get(F[ie]);te.__webglTexture&&(r.deleteTexture(te.__webglTexture),d.memory.textures--),s.remove(F[ie])}s.remove(U)}let Q=0;function me(){Q=0}function ue(){return Q}function X(U){Q=U}function w(){const U=Q;return U>=l.maxTextures&&mt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),Q+=1,U}function P(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function B(U,M){const F=s.get(U);if(U.isVideoTexture&&Qe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&F.__version!==U.version){const ie=U.image;if(ie===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(F,U,M);return}}else U.isExternalTexture&&(F.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}function $(U,M){const F=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&F.__version!==U.version){Pe(F,U,M);return}else U.isExternalTexture&&(F.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)}function ee(U,M){const F=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&F.__version!==U.version){Pe(F,U,M);return}i.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)}function R(U,M){const F=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&F.__version!==U.version){Ve(F,U,M);return}i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)}const K={[Th]:r.REPEAT,[Ia]:r.CLAMP_TO_EDGE,[Ah]:r.MIRRORED_REPEAT},be={[Wn]:r.NEAREST,[u1]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[Pd]:r.LINEAR_MIPMAP_NEAREST,[$s]:r.LINEAR_MIPMAP_LINEAR},Re={[h1]:r.NEVER,[_1]:r.ALWAYS,[p1]:r.LESS,[xp]:r.LEQUAL,[m1]:r.EQUAL,[_p]:r.GEQUAL,[g1]:r.GREATER,[x1]:r.NOTEQUAL};function Oe(U,M){if(M.type===sa&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qn||M.magFilter===Pd||M.magFilter===wc||M.magFilter===$s||M.minFilter===Qn||M.minFilter===Pd||M.minFilter===wc||M.minFilter===$s)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,K[M.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,K[M.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,K[M.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,be[M.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,be[M.minFilter]),M.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wn||M.minFilter!==wc&&M.minFilter!==$s||M.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function ce(U,M){let F=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",H));const ie=M.source;let V=S.get(ie);V===void 0&&(V={},S.set(ie,V));const te=P(M);if(te!==U.__cacheKey){V[te]===void 0&&(V[te]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,F=!0),V[te].usedTimes++;const oe=V[U.__cacheKey];oe!==void 0&&(V[U.__cacheKey].usedTimes--,oe.usedTimes===0&&ne(M)),U.__cacheKey=te,U.__webglTexture=V[te].texture}return F}function Ee(U,M,F){return Math.floor(Math.floor(U/F)/M)}function _e(U,M,F,ie){const te=U.updateRanges;if(te.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,F,ie,M.data);else{te.sort((Se,Me)=>Se.start-Me.start);let oe=0;for(let Se=1;Se<te.length;Se++){const Me=te[oe],Ne=te[Se],Je=Me.start+Me.count,Fe=Ee(Ne.start,M.width,4),$e=Ee(Me.start,M.width,4);Ne.start<=Je+1&&Fe===$e&&Ee(Ne.start+Ne.count-1,M.width,4)===Fe?Me.count=Math.max(Me.count,Ne.start+Ne.count-Me.start):(++oe,te[oe]=Ne)}te.length=oe+1;const Z=i.getParameter(r.UNPACK_ROW_LENGTH),re=i.getParameter(r.UNPACK_SKIP_PIXELS),Ce=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Me=te.length;Se<Me;Se++){const Ne=te[Se],Je=Math.floor(Ne.start/4),Fe=Math.ceil(Ne.count/4),$e=Je%M.width,Y=Math.floor(Je/M.width),Te=Fe,ve=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,$e,Y,Te,ve,F,ie,M.data)}U.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,Z),i.pixelStorei(r.UNPACK_SKIP_PIXELS,re),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function Pe(U,M,F){let ie=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=r.TEXTURE_3D);const V=ce(U,M),te=M.source;i.bindTexture(ie,U.__webglTexture,r.TEXTURE0+F);const oe=s.get(te);if(te.version!==oe.__version||V===!0){if(i.activeTexture(r.TEXTURE0+F),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ve=Bt.getPrimaries(Bt.workingColorSpace),Ge=M.colorSpace===Ss?null:Bt.getPrimaries(M.colorSpace),Ie=M.colorSpace===Ss||ve===Ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let re=y(M.image,!1,l.maxTextureSize);re=we(M,re);const Ce=c.convert(M.format,M.colorSpace),Se=c.convert(M.type);let Me=z(M.internalFormat,Ce,Se,M.normalized,M.colorSpace,M.isVideoTexture);Oe(ie,M);let Ne;const Je=M.mipmaps,Fe=M.isVideoTexture!==!0,$e=oe.__version===void 0||V===!0,Y=te.dataReady,Te=I(M,re);if(M.isDepthTexture)Me=W(M.format===er,M.type),$e&&(Fe?i.texStorage2D(r.TEXTURE_2D,1,Me,re.width,re.height):i.texImage2D(r.TEXTURE_2D,0,Me,re.width,re.height,0,Ce,Se,null));else if(M.isDataTexture)if(Je.length>0){Fe&&$e&&i.texStorage2D(r.TEXTURE_2D,Te,Me,Je[0].width,Je[0].height);for(let ve=0,Ge=Je.length;ve<Ge;ve++)Ne=Je[ve],Fe?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ce,Se,Ne.data):i.texImage2D(r.TEXTURE_2D,ve,Me,Ne.width,Ne.height,0,Ce,Se,Ne.data);M.generateMipmaps=!1}else Fe?($e&&i.texStorage2D(r.TEXTURE_2D,Te,Me,re.width,re.height),Y&&_e(M,re,Ce,Se)):i.texImage2D(r.TEXTURE_2D,0,Me,re.width,re.height,0,Ce,Se,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&$e&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Me,Je[0].width,Je[0].height,re.depth);for(let ve=0,Ge=Je.length;ve<Ge;ve++)if(Ne=Je[ve],M.format!==Wi)if(Ce!==null)if(Fe){if(Y)if(M.layerUpdates.size>0){const Ie=c_(Ne.width,Ne.height,M.format,M.type);for(const Le of M.layerUpdates){const He=Ne.data.subarray(Le*Ie/Ne.data.BYTES_PER_ELEMENT,(Le+1)*Ie/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Le,Ne.width,Ne.height,1,Ce,He)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,re.depth,Ce,Ne.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Me,Ne.width,Ne.height,re.depth,0,Ne.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,re.depth,Ce,Se,Ne.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ve,Me,Ne.width,Ne.height,re.depth,0,Ce,Se,Ne.data)}else{Fe&&$e&&i.texStorage2D(r.TEXTURE_2D,Te,Me,Je[0].width,Je[0].height);for(let ve=0,Ge=Je.length;ve<Ge;ve++)Ne=Je[ve],M.format!==Wi?Ce!==null?Fe?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ce,Ne.data):i.compressedTexImage2D(r.TEXTURE_2D,ve,Me,Ne.width,Ne.height,0,Ne.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,Ce,Se,Ne.data):i.texImage2D(r.TEXTURE_2D,ve,Me,Ne.width,Ne.height,0,Ce,Se,Ne.data)}else if(M.isDataArrayTexture)if(Fe){if($e&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Me,re.width,re.height,re.depth),Y)if(M.layerUpdates.size>0){const ve=c_(re.width,re.height,M.format,M.type);for(const Ge of M.layerUpdates){const Ie=re.data.subarray(Ge*ve/re.data.BYTES_PER_ELEMENT,(Ge+1)*ve/re.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ge,re.width,re.height,1,Ce,Se,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Ce,Se,re.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,Ce,Se,re.data);else if(M.isData3DTexture)Fe?($e&&i.texStorage3D(r.TEXTURE_3D,Te,Me,re.width,re.height,re.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Ce,Se,re.data)):i.texImage3D(r.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,Ce,Se,re.data);else if(M.isFramebufferTexture){if($e)if(Fe)i.texStorage2D(r.TEXTURE_2D,Te,Me,re.width,re.height);else{let ve=re.width,Ge=re.height;for(let Ie=0;Ie<Te;Ie++)i.texImage2D(r.TEXTURE_2D,Ie,Me,ve,Ge,0,Ce,Se,null),ve>>=1,Ge>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),re.parentNode!==ve){ve.appendChild(re),v.add(M),ve.onpaint=dt=>{const Gt=dt.changedElements;for(const Ut of v)Gt.includes(Ut.image)&&(Ut.needsUpdate=!0)},ve.requestPaint();return}const Ge=0,Ie=r.RGBA,Le=r.RGBA,He=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ge,Ie,Le,He,re),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if(Fe&&$e){const ve=nt(Je[0]);i.texStorage2D(r.TEXTURE_2D,Te,Me,ve.width,ve.height)}for(let ve=0,Ge=Je.length;ve<Ge;ve++)Ne=Je[ve],Fe?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ce,Se,Ne):i.texImage2D(r.TEXTURE_2D,ve,Me,Ce,Se,Ne);M.generateMipmaps=!1}else if(Fe){if($e){const ve=nt(re);i.texStorage2D(r.TEXTURE_2D,Te,Me,ve.width,ve.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce,Se,re)}else i.texImage2D(r.TEXTURE_2D,0,Me,Ce,Se,re);x(M)&&D(ie),oe.__version=te.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ve(U,M,F){if(M.image.length!==6)return;const ie=ce(U,M),V=M.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+F);const te=s.get(V);if(V.version!==te.__version||ie===!0){i.activeTexture(r.TEXTURE0+F);const oe=Bt.getPrimaries(Bt.workingColorSpace),Z=M.colorSpace===Ss?null:Bt.getPrimaries(M.colorSpace),re=M.colorSpace===Ss||oe===Z?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let Le=0;Le<6;Le++)!Ce&&!Se?Me[Le]=y(M.image[Le],!0,l.maxCubemapSize):Me[Le]=Se?M.image[Le].image:M.image[Le],Me[Le]=we(M,Me[Le]);const Ne=Me[0],Je=c.convert(M.format,M.colorSpace),Fe=c.convert(M.type),$e=z(M.internalFormat,Je,Fe,M.normalized,M.colorSpace),Y=M.isVideoTexture!==!0,Te=te.__version===void 0||ie===!0,ve=V.dataReady;let Ge=I(M,Ne);Oe(r.TEXTURE_CUBE_MAP,M);let Ie;if(Ce){Y&&Te&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,$e,Ne.width,Ne.height);for(let Le=0;Le<6;Le++){Ie=Me[Le].mipmaps;for(let He=0;He<Ie.length;He++){const dt=Ie[He];M.format!==Wi?Je!==null?Y?ve&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He,0,0,dt.width,dt.height,Je,dt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He,$e,dt.width,dt.height,0,dt.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He,0,0,dt.width,dt.height,Je,Fe,dt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He,$e,dt.width,dt.height,0,Je,Fe,dt.data)}}}else{if(Ie=M.mipmaps,Y&&Te){Ie.length>0&&Ge++;const Le=nt(Me[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ge,$e,Le.width,Le.height)}for(let Le=0;Le<6;Le++)if(Se){Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Me[Le].width,Me[Le].height,Je,Fe,Me[Le].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,$e,Me[Le].width,Me[Le].height,0,Je,Fe,Me[Le].data);for(let He=0;He<Ie.length;He++){const Gt=Ie[He].image[Le].image;Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He+1,0,0,Gt.width,Gt.height,Je,Fe,Gt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He+1,$e,Gt.width,Gt.height,0,Je,Fe,Gt.data)}}else{Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,0,0,Je,Fe,Me[Le]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,$e,Je,Fe,Me[Le]);for(let He=0;He<Ie.length;He++){const dt=Ie[He];Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He+1,0,0,Je,Fe,dt.image[Le]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,He+1,$e,Je,Fe,dt.image[Le])}}}x(M)&&D(r.TEXTURE_CUBE_MAP),te.__version=V.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function qe(U,M,F,ie,V,te){const oe=c.convert(F.format,F.colorSpace),Z=c.convert(F.type),re=z(F.internalFormat,oe,Z,F.normalized,F.colorSpace),Ce=s.get(M),Se=s.get(F);if(Se.__renderTarget=M,!Ce.__hasExternalTextures){const Me=Math.max(1,M.width>>te),Ne=Math.max(1,M.height>>te);V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?i.texImage3D(V,te,re,Me,Ne,M.depth,0,oe,Z,null):i.texImage2D(V,te,re,Me,Ne,0,oe,Z,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),rt(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,V,Se.__webglTexture,0,Ye(M)):(V===r.TEXTURE_2D||V>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ie,V,Se.__webglTexture,te),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ke(U,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,U),M.depthBuffer){const ie=M.depthTexture,V=ie&&ie.isDepthTexture?ie.type:null,te=W(M.stencilBuffer,V),oe=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;rt(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(M),te,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(M),te,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,te,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,oe,r.RENDERBUFFER,U)}else{const ie=M.textures;for(let V=0;V<ie.length;V++){const te=ie[V],oe=c.convert(te.format,te.colorSpace),Z=c.convert(te.type),re=z(te.internalFormat,oe,Z,te.normalized,te.colorSpace);rt(M)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye(M),re,M.width,M.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye(M),re,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,re,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function lt(U,M,F){const ie=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=s.get(M.depthTexture);if(V.__renderTarget=M,(!V.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie){if(V.__webglInit===void 0&&(V.__webglInit=!0,M.depthTexture.addEventListener("dispose",H)),V.__webglTexture===void 0){V.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=c.convert(M.depthTexture.format),Se=c.convert(M.depthTexture.type);let Me;M.depthTexture.format===Ga?Me=r.DEPTH_COMPONENT24:M.depthTexture.format===er&&(Me=r.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Me,M.width,M.height,0,Ce,Se,null)}}else B(M.depthTexture,0);const te=V.__webglTexture,oe=Ye(M),Z=ie?r.TEXTURE_CUBE_MAP_POSITIVE_X+F:r.TEXTURE_2D,re=M.depthTexture.format===er?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ga)rt(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,Z,te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,re,Z,te,0);else if(M.depthTexture.format===er)rt(M)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,Z,te,0,oe):r.framebufferTexture2D(r.FRAMEBUFFER,re,Z,te,0);else throw new Error("Unknown depthTexture format")}function st(U){const M=s.get(U),F=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const ie=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ie){const V=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ie.removeEventListener("dispose",V)};ie.addEventListener("dispose",V),M.__depthDisposeCallback=V}M.__boundDepthTexture=ie}if(U.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let ie=0;ie<6;ie++)lt(M.__webglFramebuffer[ie],U,ie);else{const ie=U.texture.mipmaps;ie&&ie.length>0?lt(M.__webglFramebuffer[0],U,0):lt(M.__webglFramebuffer,U,0)}else if(F){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]===void 0)M.__webglDepthbuffer[ie]=r.createRenderbuffer(),Ke(M.__webglDepthbuffer[ie],U,!1);else{const V=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer[ie];r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,V,r.RENDERBUFFER,te)}}else{const ie=U.texture.mipmaps;if(ie&&ie.length>0?i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),Ke(M.__webglDepthbuffer,U,!1);else{const V=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,V,r.RENDERBUFFER,te)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(U,M,F){const ie=s.get(U);M!==void 0&&qe(ie.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&st(U)}function pt(U){const M=U.texture,F=s.get(U),ie=s.get(M);U.addEventListener("dispose",A);const V=U.textures,te=U.isWebGLCubeRenderTarget===!0,oe=V.length>1;if(oe||(ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture()),ie.__version=M.version,d.memory.textures++),te){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let re=0;re<M.mipmaps.length;re++)F.__webglFramebuffer[Z][re]=r.createFramebuffer()}else F.__webglFramebuffer[Z]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)F.__webglFramebuffer[Z]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(oe)for(let Z=0,re=V.length;Z<re;Z++){const Ce=s.get(V[Z]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),d.memory.textures++)}if(U.samples>0&&rt(U)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<V.length;Z++){const re=V[Z];F.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);const Ce=c.convert(re.format,re.colorSpace),Se=c.convert(re.type),Me=z(re.internalFormat,Ce,Se,re.normalized,re.colorSpace,U.isXRRenderTarget===!0),Ne=Ye(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Me,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Z,r.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(F.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(te){i.bindTexture(r.TEXTURE_CUBE_MAP,ie.__webglTexture),Oe(r.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)qe(F.__webglFramebuffer[Z][re],U,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re);else qe(F.__webglFramebuffer[Z],U,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);x(M)&&D(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(oe){for(let Z=0,re=V.length;Z<re;Z++){const Ce=V[Z],Se=s.get(Ce);let Me=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Me=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Me,Se.__webglTexture),Oe(Me,Ce),qe(F.__webglFramebuffer,U,Ce,r.COLOR_ATTACHMENT0+Z,Me,0),x(Ce)&&D(Me)}i.unbindTexture()}else{let Z=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Z=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Z,ie.__webglTexture),Oe(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let re=0;re<M.mipmaps.length;re++)qe(F.__webglFramebuffer[re],U,M,r.COLOR_ATTACHMENT0,Z,re);else qe(F.__webglFramebuffer,U,M,r.COLOR_ATTACHMENT0,Z,0);x(M)&&D(Z),i.unbindTexture()}U.depthBuffer&&st(U)}function qt(U){const M=U.textures;for(let F=0,ie=M.length;F<ie;F++){const V=M[F];if(x(V)){const te=O(U),oe=s.get(V).__webglTexture;i.bindTexture(te,oe),D(te),i.unbindTexture()}}}const Be=[],_t=[];function j(U){if(U.samples>0){if(rt(U)===!1){const M=U.textures,F=U.width,ie=U.height;let V=r.COLOR_BUFFER_BIT;const te=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=s.get(U),Z=M.length>1;if(Z)for(let Ce=0;Ce<M.length;Ce++)i.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);const re=U.texture.mipmaps;re&&re.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(V|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(V|=r.STENCIL_BUFFER_BIT)),Z){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce]);const Se=s.get(M[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,F,ie,0,0,F,ie,V,r.NEAREST),m===!0&&(Be.length=0,_t.length=0,Be.push(r.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Be.push(te),_t.push(te),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Z)for(let Ce=0;Ce<M.length;Ce++){i.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,oe.__webglColorRenderbuffer[Ce]);const Se=s.get(M[Ce]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,Se,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const M=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Ye(U){return Math.min(l.maxSamples,U.samples)}function rt(U){const M=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Qe(U){const M=d.render.frame;b.get(U)!==M&&(b.set(U,M),U.update())}function we(U,M){const F=U.colorSpace,ie=U.format,V=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||F!==uu&&F!==Ss&&(Bt.getTransfer(F)===$t?(ie!==Wi||V!==Ti)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",F)),M}function nt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=w,this.resetTextureUnits=me,this.getTextureUnits=ue,this.setTextureUnits=X,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=R,this.rebindTextures=vt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function aw(r,e){function i(s,l=Ss){let c;const d=Bt.getTransfer(l);if(s===Ti)return r.UNSIGNED_BYTE;if(s===dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===nv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ev)return r.BYTE;if(s===tv)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===fp)return r.INT;if(s===ca)return r.UNSIGNED_INT;if(s===sa)return r.FLOAT;if(s===Fa)return r.HALF_FLOAT;if(s===av)return r.ALPHA;if(s===sv)return r.RGB;if(s===Wi)return r.RGBA;if(s===Ga)return r.DEPTH_COMPONENT;if(s===er)return r.DEPTH_STENCIL;if(s===rv)return r.RED;if(s===pp)return r.RED_INTEGER;if(s===nr)return r.RG;if(s===mp)return r.RG_INTEGER;if(s===gp)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(d===$t)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wh||s===Rh||s===Ch||s===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh||s===Uh||s===Lh||s===Oh||s===Ph||s===lu||s===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nh||s===Uh)return d===$t?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Lh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Oh)return c.COMPRESSED_R11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_R11_EAC;if(s===lu)return c.COMPRESSED_RG11_EAC;if(s===Ih)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zh||s===Bh||s===Fh||s===Gh||s===Hh||s===kh||s===Vh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kh)return d===$t?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qh||s===Jh||s===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Qh)return d===$t?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ep||s===tp||s===cu||s===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const sw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new xv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ua({vertexShader:sw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ze(new Pa(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lw extends Rs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,b=null,v=null,g=null,S=null,T=null;const L=typeof XRWebGLBinding<"u",y=new ow,x={},D=i.getContextAttributes();let O=null,z=null;const W=[],I=[],H=new ht;let A=null;const G=new Ei;G.viewport=new yn;const ne=new Ei;ne.viewport=new yn;const k=[G,ne],Q=new mM;let me=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let Ee=W[ce];return Ee===void 0&&(Ee=new kd,W[ce]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(ce){let Ee=W[ce];return Ee===void 0&&(Ee=new kd,W[ce]=Ee),Ee.getGripSpace()},this.getHand=function(ce){let Ee=W[ce];return Ee===void 0&&(Ee=new kd,W[ce]=Ee),Ee.getHandSpace()};function X(ce){const Ee=I.indexOf(ce.inputSource);if(Ee===-1)return;const _e=W[Ee];_e!==void 0&&(_e.update(ce.inputSource,ce.frame,h||d),_e.dispatchEvent({type:ce.type,data:ce.inputSource}))}function w(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",w),l.removeEventListener("inputsourceschange",P);for(let ce=0;ce<W.length;ce++){const Ee=I[ce];Ee!==null&&(I[ce]=null,W[ce].disconnect(Ee))}me=null,ue=null,y.reset();for(const ce in x)delete x[ce];e.setRenderTarget(O),S=null,g=null,v=null,l=null,z=null,Oe.stop(),s.isPresenting=!1,e.setPixelRatio(A),e.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){c=ce,s.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){p=ce,s.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&L&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(ce){if(l=ce,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",w),l.addEventListener("inputsourceschange",P),D.xrCompatible!==!0&&await i.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(H),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Pe=null,Ve=null;D.depth&&(Ve=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=D.stencil?er:Ga,Pe=D.stencil?ml:ca);const qe={colorFormat:i.RGBA8,depthFormat:Ve,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(qe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),z=new la(g.textureWidth,g.textureHeight,{format:Wi,type:Ti,depthTexture:new oo(g.textureWidth,g.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const _e={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),z=new la(S.framebufferWidth,S.framebufferHeight,{format:Wi,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Oe.setContext(l),Oe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function P(ce){for(let Ee=0;Ee<ce.removed.length;Ee++){const _e=ce.removed[Ee],Pe=I.indexOf(_e);Pe>=0&&(I[Pe]=null,W[Pe].disconnect(_e))}for(let Ee=0;Ee<ce.added.length;Ee++){const _e=ce.added[Ee];let Pe=I.indexOf(_e);if(Pe===-1){for(let qe=0;qe<W.length;qe++)if(qe>=I.length){I.push(_e),Pe=qe;break}else if(I[qe]===null){I[qe]=_e,Pe=qe;break}if(Pe===-1)break}const Ve=W[Pe];Ve&&Ve.connect(_e)}}const B=new ae,$=new ae;function ee(ce,Ee,_e){B.setFromMatrixPosition(Ee.matrixWorld),$.setFromMatrixPosition(_e.matrixWorld);const Pe=B.distanceTo($),Ve=Ee.projectionMatrix.elements,qe=_e.projectionMatrix.elements,Ke=Ve[14]/(Ve[10]-1),lt=Ve[14]/(Ve[10]+1),st=(Ve[9]+1)/Ve[5],vt=(Ve[9]-1)/Ve[5],pt=(Ve[8]-1)/Ve[0],qt=(qe[8]+1)/qe[0],Be=Ke*pt,_t=Ke*qt,j=Pe/(-pt+qt),Ye=j*-pt;if(Ee.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Ye),ce.translateZ(j),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Ve[10]===-1)ce.projectionMatrix.copy(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const rt=Ke+j,Qe=lt+j,we=Be-Ye,nt=_t+(Pe-Ye),U=st*lt/Qe*rt,M=vt*lt/Qe*rt;ce.projectionMatrix.makePerspective(we,nt,U,M,rt,Qe),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function R(ce,Ee){Ee===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(Ee.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(l===null)return;let Ee=ce.near,_e=ce.far;y.texture!==null&&(y.depthNear>0&&(Ee=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),Q.near=ne.near=G.near=Ee,Q.far=ne.far=G.far=_e,(me!==Q.near||ue!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),me=Q.near,ue=Q.far),Q.layers.mask=ce.layers.mask|6,G.layers.mask=Q.layers.mask&-5,ne.layers.mask=Q.layers.mask&-3;const Pe=ce.parent,Ve=Q.cameras;R(Q,Pe);for(let qe=0;qe<Ve.length;qe++)R(Ve[qe],Pe);Ve.length===2?ee(Q,G,ne):Q.projectionMatrix.copy(G.projectionMatrix),K(ce,Q,Pe)};function K(ce,Ee,_e){_e===null?ce.matrix.copy(Ee.matrixWorld):(ce.matrix.copy(_e.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(Ee.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(Ee.projectionMatrix),ce.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=rp*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&S===null))return m},this.setFoveation=function(ce){m=ce,g!==null&&(g.fixedFoveation=ce),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(ce){return x[ce]};let be=null;function Re(ce,Ee){if(b=Ee.getViewerPose(h||d),T=Ee,b!==null){const _e=b.views;S!==null&&(e.setRenderTargetFramebuffer(z,S.framebuffer),e.setRenderTarget(z));let Pe=!1;_e.length!==Q.cameras.length&&(Q.cameras.length=0,Pe=!0);for(let lt=0;lt<_e.length;lt++){const st=_e[lt];let vt=null;if(S!==null)vt=S.getViewport(st);else{const qt=v.getViewSubImage(g,st);vt=qt.viewport,lt===0&&(e.setRenderTargetTextures(z,qt.colorTexture,qt.depthStencilTexture),e.setRenderTarget(z))}let pt=k[lt];pt===void 0&&(pt=new Ei,pt.layers.enable(lt),pt.viewport=new yn,k[lt]=pt),pt.matrix.fromArray(st.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(st.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(vt.x,vt.y,vt.width,vt.height),lt===0&&(Q.matrix.copy(pt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Pe===!0&&Q.cameras.push(pt)}const Ve=l.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&L){v=s.getBinding();const lt=v.getDepthInformation(_e[0]);lt&&lt.isValid&&lt.texture&&y.init(lt,l.renderState)}if(Ve&&Ve.includes("camera-access")&&L){e.state.unbindTexture(),v=s.getBinding();for(let lt=0;lt<_e.length;lt++){const st=_e[lt].camera;if(st){let vt=x[st];vt||(vt=new xv,x[st]=vt);const pt=v.getCameraImage(st);vt.sourceTexture=pt}}}}for(let _e=0;_e<W.length;_e++){const Pe=I[_e],Ve=W[_e];Pe!==null&&Ve!==void 0&&Ve.update(Pe,Ee,h||d)}be&&be(ce,Ee),Ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ee}),T=null}const Oe=new yv;Oe.setAnimationLoop(Re),this.setAnimationLoop=function(ce){be=ce},this.dispose=function(){}}}const cw=new xn,Rv=new yt;Rv.set(-1,0,0,0,1,0,0,0,1);function uw(r,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,_v(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,D,O,z){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),v(y,x)):x.isMeshPhongMaterial?(c(y,x),b(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&S(y,x,z)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),L(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,D,O):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===di&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===di&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),O=D.envMap,z=D.envMapRotation;O&&(y.envMap.value=O,y.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler(z)).transpose(),O.isCubeTexture&&O.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Rv),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,D,O){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=O*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function b(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function v(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===di&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function L(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fw(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,O){const z=O.program;s.uniformBlockBinding(D,z)}function h(D,O){let z=l[D.id];z===void 0&&(T(D),z=b(D),l[D.id]=z,D.addEventListener("dispose",y));const W=O.program;s.updateUBOMapping(D,W);const I=e.render.frame;c[D.id]!==I&&(g(D),c[D.id]=I)}function b(D){const O=v();D.__bindingPointIndex=O;const z=r.createBuffer(),W=D.__size,I=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,z),r.bufferData(r.UNIFORM_BUFFER,W,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,z),z}function v(){for(let D=0;D<p;D++)if(d.indexOf(D)===-1)return d.push(D),D;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(D){const O=l[D.id],z=D.uniforms,W=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let I=0,H=z.length;I<H;I++){const A=Array.isArray(z[I])?z[I]:[z[I]];for(let G=0,ne=A.length;G<ne;G++){const k=A[G];if(S(k,I,G,W)===!0){const Q=k.__offset,me=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let X=0;X<me.length;X++){const w=me[X],P=L(w);typeof w=="number"||typeof w=="boolean"?(k.__data[0]=w,r.bufferSubData(r.UNIFORM_BUFFER,Q+ue,k.__data)):w.isMatrix3?(k.__data[0]=w.elements[0],k.__data[1]=w.elements[1],k.__data[2]=w.elements[2],k.__data[3]=0,k.__data[4]=w.elements[3],k.__data[5]=w.elements[4],k.__data[6]=w.elements[5],k.__data[7]=0,k.__data[8]=w.elements[6],k.__data[9]=w.elements[7],k.__data[10]=w.elements[8],k.__data[11]=0):ArrayBuffer.isView(w)?k.__data.set(new w.constructor(w.buffer,w.byteOffset,k.__data.length)):(w.toArray(k.__data,ue),ue+=P.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,O,z,W){const I=D.value,H=O+"_"+z;if(W[H]===void 0)return typeof I=="number"||typeof I=="boolean"?W[H]=I:ArrayBuffer.isView(I)?W[H]=I.slice():W[H]=I.clone(),!0;{const A=W[H];if(typeof I=="number"||typeof I=="boolean"){if(A!==I)return W[H]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(A.equals(I)===!1)return A.copy(I),!0}}return!1}function T(D){const O=D.uniforms;let z=0;const W=16;for(let H=0,A=O.length;H<A;H++){const G=Array.isArray(O[H])?O[H]:[O[H]];for(let ne=0,k=G.length;ne<k;ne++){const Q=G[ne],me=Array.isArray(Q.value)?Q.value:[Q.value];for(let ue=0,X=me.length;ue<X;ue++){const w=me[ue],P=L(w),B=z%W,$=B%P.boundary,ee=B+$;z+=$,ee!==0&&W-ee<P.storage&&(z+=W-ee),Q.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=z,z+=P.storage}}}const I=z%W;return I>0&&(z+=W-I),D.__size=z,D.__cache={},this}function L(D){const O={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(O.boundary=4,O.storage=4):D.isVector2?(O.boundary=8,O.storage=8):D.isVector3||D.isColor?(O.boundary=16,O.storage=12):D.isVector4?(O.boundary=16,O.storage=16):D.isMatrix3?(O.boundary=48,O.storage=48):D.isMatrix4?(O.boundary=64,O.storage=64):D.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(D)?(O.boundary=16,O.storage=D.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",D),O}function y(D){const O=D.target;O.removeEventListener("dispose",y);const z=d.indexOf(O.__bindingPointIndex);d.splice(z,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function x(){for(const D in l)r.deleteBuffer(l[D]);d=[],l={},c={}}return{bind:m,update:h,dispose:x}}const dw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ea=null;function hw(){return ea===null&&(ea=new W1(dw,16,16,nr,Fa),ea.name="DFG_LUT",ea.minFilter=Qn,ea.magFilter=Qn,ea.wrapS=Ia,ea.wrapT=Ia,ea.generateMipmaps=!1,ea.needsUpdate=!0),ea}class pw{constructor(e={}){const{canvas:i=b1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:b="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Ti}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=d;const L=S,y=new Set([gp,mp,pp]),x=new Set([Ti,ca,pl,ml,dp,hp]),D=new Uint32Array(4),O=new Int32Array(4),z=new ae;let W=null,I=null;const H=[],A=[];let G=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const ne=this;let k=!1,Q=null;this._outputColorSpace=Pi;let me=0,ue=0,X=null,w=-1,P=null;const B=new yn,$=new yn;let ee=null;const R=new It(0);let K=0,be=i.width,Re=i.height,Oe=1,ce=null,Ee=null;const _e=new yn(0,0,be,Re),Pe=new yn(0,0,be,Re);let Ve=!1;const qe=new Sp;let Ke=!1,lt=!1;const st=new xn,vt=new ae,pt=new yn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function _t(){return X===null?Oe:1}let j=s;function Ye(C,se){return i.getContext(C,se)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:b,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${up}`),i.addEventListener("webglcontextlost",Le,!1),i.addEventListener("webglcontextrestored",He,!1),i.addEventListener("webglcontextcreationerror",dt,!1),j===null){const se="webgl2";if(j=Ye(se,C),j===null)throw Ye(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ft("WebGLRenderer: "+C.message),C}let rt,Qe,we,nt,U,M,F,ie,V,te,oe,Z,re,Ce,Se,Me,Ne,Je,Fe,$e,Y,Te,ve;function Ge(){rt=new hA(j),rt.init(),Y=new aw(j,rt),Qe=new sA(j,rt,e,Y),we=new nw(j,rt),Qe.reversedDepthBuffer&&g&&we.buffers.depth.setReversed(!0),nt=new gA(j),U=new k2,M=new iw(j,rt,we,U,Qe,Y,nt),F=new dA(ne),ie=new bM(j),Te=new iA(j,ie),V=new pA(j,ie,nt,Te),te=new _A(j,V,ie,Te,nt),Je=new xA(j,Qe,M),Se=new rA(U),oe=new H2(ne,F,rt,Qe,Te,Se),Z=new uw(ne,U),re=new j2,Ce=new K2(rt),Ne=new nA(ne,F,we,te,T,m),Me=new tw(ne,te,Qe),ve=new fw(j,nt,Qe,we),Fe=new aA(j,rt,nt),$e=new mA(j,rt,nt),nt.programs=oe.programs,ne.capabilities=Qe,ne.extensions=rt,ne.properties=U,ne.renderLists=re,ne.shadowMap=Me,ne.state=we,ne.info=nt}Ge(),L!==Ti&&(G=new bA(L,i.width,i.height,l,c));const Ie=new lw(ne,j);this.xr=Ie,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(C){C!==void 0&&(Oe=C,this.setSize(be,Re,!1))},this.getSize=function(C){return C.set(be,Re)},this.setSize=function(C,se,ge=!0){if(Ie.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}be=C,Re=se,i.width=Math.floor(C*Oe),i.height=Math.floor(se*Oe),ge===!0&&(i.style.width=C+"px",i.style.height=se+"px"),G!==null&&G.setSize(i.width,i.height),this.setViewport(0,0,C,se)},this.getDrawingBufferSize=function(C){return C.set(be*Oe,Re*Oe).floor()},this.setDrawingBufferSize=function(C,se,ge){be=C,Re=se,Oe=ge,i.width=Math.floor(C*ge),i.height=Math.floor(se*ge),this.setViewport(0,0,C,se)},this.setEffects=function(C){if(L===Ti){Ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let se=0;se<C.length;se++)if(C[se].isOutputPass===!0){mt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(_e)},this.setViewport=function(C,se,ge,he){C.isVector4?_e.set(C.x,C.y,C.z,C.w):_e.set(C,se,ge,he),we.viewport(B.copy(_e).multiplyScalar(Oe).round())},this.getScissor=function(C){return C.copy(Pe)},this.setScissor=function(C,se,ge,he){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,se,ge,he),we.scissor($.copy(Pe).multiplyScalar(Oe).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(C){we.setScissorTest(Ve=C)},this.setOpaqueSort=function(C){ce=C},this.setTransparentSort=function(C){Ee=C},this.getClearColor=function(C){return C.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(C=!0,se=!0,ge=!0){let he=0;if(C){let pe=!1;if(X!==null){const Xe=X.texture.format;pe=y.has(Xe)}if(pe){const Xe=X.texture.type,et=x.has(Xe),je=Ne.getClearColor(),it=Ne.getClearAlpha(),tt=je.r,ut=je.g,St=je.b;et?(D[0]=tt,D[1]=ut,D[2]=St,D[3]=it,j.clearBufferuiv(j.COLOR,0,D)):(O[0]=tt,O[1]=ut,O[2]=St,O[3]=it,j.clearBufferiv(j.COLOR,0,O))}else he|=j.COLOR_BUFFER_BIT}se&&(he|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ge&&(he|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&j.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Q=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Le,!1),i.removeEventListener("webglcontextrestored",He,!1),i.removeEventListener("webglcontextcreationerror",dt,!1),Ne.dispose(),re.dispose(),Ce.dispose(),U.dispose(),F.dispose(),te.dispose(),Te.dispose(),ve.dispose(),oe.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",zi),Ie.removeEventListener("sessionend",fa),fn.stop()};function Le(C){C.preventDefault(),hu("WebGLRenderer: Context Lost."),k=!0}function He(){hu("WebGLRenderer: Context Restored."),k=!1;const C=nt.autoReset,se=Me.enabled,ge=Me.autoUpdate,he=Me.needsUpdate,pe=Me.type;Ge(),nt.autoReset=C,Me.enabled=se,Me.autoUpdate=ge,Me.needsUpdate=he,Me.type=pe}function dt(C){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Gt(C){const se=C.target;se.removeEventListener("dispose",Gt),Ut(se)}function Ut(C){Bn(C),U.remove(C)}function Bn(C){const se=U.get(C).programs;se!==void 0&&(se.forEach(function(ge){oe.releaseProgram(ge)}),C.isShaderMaterial&&oe.releaseShaderCache(C))}this.renderBufferDirect=function(C,se,ge,he,pe,Xe){se===null&&(se=qt);const et=pe.isMesh&&pe.matrixWorld.determinant()<0,je=ka(C,se,ge,he,pe);we.setMaterial(he,et);let it=ge.index,tt=1;if(he.wireframe===!0){if(it=V.getWireframeAttribute(ge),it===void 0)return;tt=2}const ut=ge.drawRange,St=ge.attributes.position;let ct=ut.start*tt,kt=(ut.start+ut.count)*tt;Xe!==null&&(ct=Math.max(ct,Xe.start*tt),kt=Math.min(kt,(Xe.start+Xe.count)*tt)),it!==null?(ct=Math.max(ct,0),kt=Math.min(kt,it.count)):St!=null&&(ct=Math.max(ct,0),kt=Math.min(kt,St.count));const pn=kt-ct;if(pn<0||pn===1/0)return;Te.setup(pe,he,je,ge,it);let ln,Yt=Fe;if(it!==null&&(ln=ie.get(it),Yt=$e,Yt.setIndex(ln)),pe.isMesh)he.wireframe===!0?(we.setLineWidth(he.wireframeLinewidth*_t()),Yt.setMode(j.LINES)):Yt.setMode(j.TRIANGLES);else if(pe.isLine){let Zt=he.linewidth;Zt===void 0&&(Zt=1),we.setLineWidth(Zt*_t()),pe.isLineSegments?Yt.setMode(j.LINES):pe.isLineLoop?Yt.setMode(j.LINE_LOOP):Yt.setMode(j.LINE_STRIP)}else pe.isPoints?Yt.setMode(j.POINTS):pe.isSprite&&Yt.setMode(j.TRIANGLES);if(pe.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Yt.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const Zt=pe._multiDrawStarts,Ze=pe._multiDrawCounts,qn=pe._multiDrawCount,Ct=it?ie.get(it).bytesPerElement:1,Un=U.get(he).currentProgram.getUniforms();for(let hi=0;hi<qn;hi++)Un.setValue(j,"_gl_DrawID",hi),Yt.render(Zt[hi]/Ct,Ze[hi])}else if(pe.isInstancedMesh)Yt.renderInstances(ct,pn,pe.count);else if(ge.isInstancedBufferGeometry){const Zt=ge._maxInstanceCount!==void 0?ge._maxInstanceCount:1/0,Ze=Math.min(ge.instanceCount,Zt);Yt.renderInstances(ct,pn,Ze)}else Yt.render(ct,pn)};function un(C,se,ge){C.transparent===!0&&C.side===ia&&C.forceSinglePass===!1?(C.side=di,C.needsUpdate=!0,ar(C,se,ge),C.side=Ts,C.needsUpdate=!0,ar(C,se,ge),C.side=ia):ar(C,se,ge)}this.compile=function(C,se,ge=null){ge===null&&(ge=C),I=Ce.get(ge),I.init(se),A.push(I),ge.traverseVisible(function(pe){pe.isLight&&pe.layers.test(se.layers)&&(I.pushLight(pe),pe.castShadow&&I.pushShadow(pe))}),C!==ge&&C.traverseVisible(function(pe){pe.isLight&&pe.layers.test(se.layers)&&(I.pushLight(pe),pe.castShadow&&I.pushShadow(pe))}),I.setupLights();const he=new Set;return C.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const Xe=pe.material;if(Xe)if(Array.isArray(Xe))for(let et=0;et<Xe.length;et++){const je=Xe[et];un(je,ge,pe),he.add(je)}else un(Xe,ge,pe),he.add(Xe)}),I=A.pop(),he},this.compileAsync=function(C,se,ge=null){const he=this.compile(C,se,ge);return new Promise(pe=>{function Xe(){if(he.forEach(function(et){U.get(et).currentProgram.isReady()&&he.delete(et)}),he.size===0){pe(C);return}setTimeout(Xe,10)}rt.get("KHR_parallel_shader_compile")!==null?Xe():setTimeout(Xe,10)})};let ai=null;function _n(C){ai&&ai(C)}function zi(){fn.stop()}function fa(){fn.start()}const fn=new yv;fn.setAnimationLoop(_n),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(C){ai=C,Ie.setAnimationLoop(C),C===null?fn.stop():fn.start()},Ie.addEventListener("sessionstart",zi),Ie.addEventListener("sessionend",fa),this.render=function(C,se){if(se!==void 0&&se.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;Q!==null&&Q.renderStart(C,se);const ge=Ie.enabled===!0&&Ie.isPresenting===!0,he=G!==null&&(X===null||ge)&&G.begin(ne,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(se),se=Ie.getCamera()),C.isScene===!0&&C.onBeforeRender(ne,C,se,X),I=Ce.get(C,A.length),I.init(se),I.state.textureUnits=M.getTextureUnits(),A.push(I),st.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),qe.setFromProjectionMatrix(st,ra,se.reversedDepth),lt=this.localClippingEnabled,Ke=Se.init(this.clippingPlanes,lt),W=re.get(C,H.length),W.init(),H.push(W),Ie.enabled===!0&&Ie.isPresenting===!0){const et=ne.xr.getDepthSensingMesh();et!==null&&Lt(et,se,-1/0,ne.sortObjects)}Lt(C,se,0,ne.sortObjects),W.finish(),ne.sortObjects===!0&&W.sort(ce,Ee),Be=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,Be&&Ne.addToRenderList(W,C),this.info.render.frame++,Ke===!0&&Se.beginShadows();const pe=I.state.shadowsArray;if(Me.render(pe,C,se),Ke===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(he&&G.hasRenderPass())===!1){const et=W.opaque,je=W.transmissive;if(I.setupLights(),se.isArrayCamera){const it=se.cameras;if(je.length>0)for(let tt=0,ut=it.length;tt<ut;tt++){const St=it[tt];Rt(et,je,C,St)}Be&&Ne.render(C);for(let tt=0,ut=it.length;tt<ut;tt++){const St=it[tt];xt(W,C,St,St.viewport)}}else je.length>0&&Rt(et,je,C,se),Be&&Ne.render(C),xt(W,C,se)}X!==null&&ue===0&&(M.updateMultisampleRenderTarget(X),M.updateRenderTargetMipmap(X)),he&&G.end(ne),C.isScene===!0&&C.onAfterRender(ne,C,se),Te.resetDefaultState(),w=-1,P=null,A.pop(),A.length>0?(I=A[A.length-1],M.setTextureUnits(I.state.textureUnits),Ke===!0&&Se.setGlobalState(ne.clippingPlanes,I.state.camera)):I=null,H.pop(),H.length>0?W=H[H.length-1]:W=null,Q!==null&&Q.renderEnd()};function Lt(C,se,ge,he){if(C.visible===!1)return;if(C.layers.test(se.layers)){if(C.isGroup)ge=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(se);else if(C.isLightProbeGrid)I.pushLightProbeGrid(C);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||qe.intersectsSprite(C)){he&&pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(st);const et=te.update(C),je=C.material;je.visible&&W.push(C,et,je,ge,pt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||qe.intersectsObject(C))){const et=te.update(C),je=C.material;if(he&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pt.copy(C.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),pt.copy(et.boundingSphere.center)),pt.applyMatrix4(C.matrixWorld).applyMatrix4(st)),Array.isArray(je)){const it=et.groups;for(let tt=0,ut=it.length;tt<ut;tt++){const St=it[tt],ct=je[St.materialIndex];ct&&ct.visible&&W.push(C,et,ct,ge,pt.z,St)}}else je.visible&&W.push(C,et,je,ge,pt.z,null)}}const Xe=C.children;for(let et=0,je=Xe.length;et<je;et++)Lt(Xe[et],se,ge,he)}function xt(C,se,ge,he){const{opaque:pe,transmissive:Xe,transparent:et}=C;I.setupLightsView(ge),Ke===!0&&Se.setGlobalState(ne.clippingPlanes,ge),he&&we.viewport(B.copy(he)),pe.length>0&&Ht(pe,se,ge),Xe.length>0&&Ht(Xe,se,ge),et.length>0&&Ht(et,se,ge),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Rt(C,se,ge,he){if((ge.isScene===!0?ge.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[he.id]===void 0){const ct=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[he.id]=new la(1,1,{generateMipmaps:!0,type:ct?Fa:Ti,minFilter:$s,samples:Math.max(4,Qe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const Xe=I.state.transmissionRenderTarget[he.id],et=he.viewport||B;Xe.setSize(et.z*ne.transmissionResolutionScale,et.w*ne.transmissionResolutionScale);const je=ne.getRenderTarget(),it=ne.getActiveCubeFace(),tt=ne.getActiveMipmapLevel();ne.setRenderTarget(Xe),ne.getClearColor(R),K=ne.getClearAlpha(),K<1&&ne.setClearColor(16777215,.5),ne.clear(),Be&&Ne.render(ge);const ut=ne.toneMapping;ne.toneMapping=oa;const St=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),I.setupLightsView(he),Ke===!0&&Se.setGlobalState(ne.clippingPlanes,he),Ht(C,ge,he),M.updateMultisampleRenderTarget(Xe),M.updateRenderTargetMipmap(Xe),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let kt=0,pn=se.length;kt<pn;kt++){const ln=se[kt],{object:Yt,geometry:Zt,material:Ze,group:qn}=ln;if(Ze.side===ia&&Yt.layers.test(he.layers)){const Ct=Ze.side;Ze.side=di,Ze.needsUpdate=!0,da(Yt,ge,he,Zt,Ze,qn),Ze.side=Ct,Ze.needsUpdate=!0,ct=!0}}ct===!0&&(M.updateMultisampleRenderTarget(Xe),M.updateRenderTargetMipmap(Xe))}ne.setRenderTarget(je,it,tt),ne.setClearColor(R,K),St!==void 0&&(he.viewport=St),ne.toneMapping=ut}function Ht(C,se,ge){const he=se.isScene===!0?se.overrideMaterial:null;for(let pe=0,Xe=C.length;pe<Xe;pe++){const et=C[pe],{object:je,geometry:it,group:tt}=et;let ut=et.material;ut.allowOverride===!0&&he!==null&&(ut=he),je.layers.test(ge.layers)&&da(je,se,ge,it,ut,tt)}}function da(C,se,ge,he,pe,Xe){C.onBeforeRender(ne,se,ge,he,pe,Xe),C.modelViewMatrix.multiplyMatrices(ge.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),pe.onBeforeRender(ne,se,ge,he,C,Xe),pe.transparent===!0&&pe.side===ia&&pe.forceSinglePass===!1?(pe.side=di,pe.needsUpdate=!0,ne.renderBufferDirect(ge,se,he,pe,C,Xe),pe.side=Ts,pe.needsUpdate=!0,ne.renderBufferDirect(ge,se,he,pe,C,Xe),pe.side=ia):ne.renderBufferDirect(ge,se,he,pe,C,Xe),C.onAfterRender(ne,se,ge,he,pe,Xe)}function ar(C,se,ge){se.isScene!==!0&&(se=qt);const he=U.get(C),pe=I.state.lights,Xe=I.state.shadowsArray,et=pe.state.version,je=oe.getParameters(C,pe.state,Xe,se,ge,I.state.lightProbeGridArray),it=oe.getProgramCacheKey(je);let tt=he.programs;he.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?se.environment:null,he.fog=se.fog;const ut=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;he.envMap=F.get(C.envMap||he.environment,ut),he.envMapRotation=he.environment!==null&&C.envMap===null?se.environmentRotation:C.envMapRotation,tt===void 0&&(C.addEventListener("dispose",Gt),tt=new Map,he.programs=tt);let St=tt.get(it);if(St!==void 0){if(he.currentProgram===St&&he.lightsStateVersion===et)return Ha(C,je),St}else je.uniforms=oe.getUniforms(C),Q!==null&&C.isNodeMaterial&&Q.build(C,ge,je),C.onBeforeCompile(je,ne),St=oe.acquireProgram(je,it),tt.set(it,St),he.uniforms=je.uniforms;const ct=he.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ct.clippingPlanes=Se.uniform),Ha(C,je),he.needsLights=Cs(C),he.lightsStateVersion=et,he.needsLights&&(ct.ambientLightColor.value=pe.state.ambient,ct.lightProbe.value=pe.state.probe,ct.directionalLights.value=pe.state.directional,ct.directionalLightShadows.value=pe.state.directionalShadow,ct.spotLights.value=pe.state.spot,ct.spotLightShadows.value=pe.state.spotShadow,ct.rectAreaLights.value=pe.state.rectArea,ct.ltc_1.value=pe.state.rectAreaLTC1,ct.ltc_2.value=pe.state.rectAreaLTC2,ct.pointLights.value=pe.state.point,ct.pointLightShadows.value=pe.state.pointShadow,ct.hemisphereLights.value=pe.state.hemi,ct.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,ct.spotLightMatrix.value=pe.state.spotLightMatrix,ct.spotLightMap.value=pe.state.spotLightMap,ct.pointShadowMatrix.value=pe.state.pointShadowMatrix),he.lightProbeGrid=I.state.lightProbeGridArray.length>0,he.currentProgram=St,he.uniformsList=null,St}function uo(C){if(C.uniformsList===null){const se=C.currentProgram.getUniforms();C.uniformsList=ou.seqWithValue(se.seq,C.uniforms)}return C.uniformsList}function Ha(C,se){const ge=U.get(C);ge.outputColorSpace=se.outputColorSpace,ge.batching=se.batching,ge.batchingColor=se.batchingColor,ge.instancing=se.instancing,ge.instancingColor=se.instancingColor,ge.instancingMorph=se.instancingMorph,ge.skinning=se.skinning,ge.morphTargets=se.morphTargets,ge.morphNormals=se.morphNormals,ge.morphColors=se.morphColors,ge.morphTargetsCount=se.morphTargetsCount,ge.numClippingPlanes=se.numClippingPlanes,ge.numIntersection=se.numClipIntersection,ge.vertexAlphas=se.vertexAlphas,ge.vertexTangents=se.vertexTangents,ge.toneMapping=se.toneMapping}function fo(C,se){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;z.setFromMatrixPosition(se.matrixWorld);for(let ge=0,he=C.length;ge<he;ge++){const pe=C[ge];if(pe.texture!==null&&pe.boundingBox.containsPoint(z))return pe}return null}function ka(C,se,ge,he,pe){se.isScene!==!0&&(se=qt),M.resetTextureUnits();const Xe=se.fog,et=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?se.environment:null,je=X===null?ne.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Bt.workingColorSpace,it=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,tt=F.get(he.envMap||et,it),ut=he.vertexColors===!0&&!!ge.attributes.color&&ge.attributes.color.itemSize===4,St=!!ge.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),ct=!!ge.morphAttributes.position,kt=!!ge.morphAttributes.normal,pn=!!ge.morphAttributes.color;let ln=oa;he.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ln=ne.toneMapping);const Yt=ge.morphAttributes.position||ge.morphAttributes.normal||ge.morphAttributes.color,Zt=Yt!==void 0?Yt.length:0,Ze=U.get(he),qn=I.state.lights;if(Ke===!0&&(lt===!0||C!==P)){const Wt=C===P&&he.id===w;Se.setState(he,C,Wt)}let Ct=!1;he.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==qn.state.version||Ze.outputColorSpace!==je||pe.isBatchedMesh&&Ze.batching===!1||!pe.isBatchedMesh&&Ze.batching===!0||pe.isBatchedMesh&&Ze.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Ze.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Ze.instancing===!1||!pe.isInstancedMesh&&Ze.instancing===!0||pe.isSkinnedMesh&&Ze.skinning===!1||!pe.isSkinnedMesh&&Ze.skinning===!0||pe.isInstancedMesh&&Ze.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Ze.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Ze.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Ze.instancingMorph===!1&&pe.morphTexture!==null||Ze.envMap!==tt||he.fog===!0&&Ze.fog!==Xe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Se.numPlanes||Ze.numIntersection!==Se.numIntersection)||Ze.vertexAlphas!==ut||Ze.vertexTangents!==St||Ze.morphTargets!==ct||Ze.morphNormals!==kt||Ze.morphColors!==pn||Ze.toneMapping!==ln||Ze.morphTargetsCount!==Zt||!!Ze.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,Ze.__version=he.version);let Un=Ze.currentProgram;Ct===!0&&(Un=ar(he,se,pe),Q&&he.isNodeMaterial&&Q.onUpdateProgram(he,Un,Ze));let hi=!1,Bi=!1,pi=!1;const Kt=Un.getUniforms(),mn=Ze.uniforms;if(we.useProgram(Un.program)&&(hi=!0,Bi=!0,pi=!0),he.id!==w&&(w=he.id,Bi=!0),Ze.needsLights){const Wt=fo(I.state.lightProbeGridArray,pe);Ze.lightProbeGrid!==Wt&&(Ze.lightProbeGrid=Wt,Bi=!0)}if(hi||P!==C){we.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Kt.setValue(j,"projectionMatrix",C.projectionMatrix),Kt.setValue(j,"viewMatrix",C.matrixWorldInverse);const Yi=Kt.map.cameraPosition;Yi!==void 0&&Yi.setValue(j,vt.setFromMatrixPosition(C.matrixWorld)),Qe.logarithmicDepthBuffer&&Kt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&Kt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,Bi=!0,pi=!0)}if(Ze.needsLights&&(qn.state.directionalShadowMap.length>0&&Kt.setValue(j,"directionalShadowMap",qn.state.directionalShadowMap,M),qn.state.spotShadowMap.length>0&&Kt.setValue(j,"spotShadowMap",qn.state.spotShadowMap,M),qn.state.pointShadowMap.length>0&&Kt.setValue(j,"pointShadowMap",qn.state.pointShadowMap,M)),pe.isSkinnedMesh){Kt.setOptional(j,pe,"bindMatrix"),Kt.setOptional(j,pe,"bindMatrixInverse");const Wt=pe.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),Kt.setValue(j,"boneTexture",Wt.boneTexture,M))}pe.isBatchedMesh&&(Kt.setOptional(j,pe,"batchingTexture"),Kt.setValue(j,"batchingTexture",pe._matricesTexture,M),Kt.setOptional(j,pe,"batchingIdTexture"),Kt.setValue(j,"batchingIdTexture",pe._indirectTexture,M),Kt.setOptional(j,pe,"batchingColorTexture"),pe._colorsTexture!==null&&Kt.setValue(j,"batchingColorTexture",pe._colorsTexture,M));const Fi=ge.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Je.update(pe,ge,Un),(Bi||Ze.receiveShadow!==pe.receiveShadow)&&(Ze.receiveShadow=pe.receiveShadow,Kt.setValue(j,"receiveShadow",pe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&se.environment!==null&&(mn.envMapIntensity.value=se.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=hw()),Bi){if(Kt.setValue(j,"toneMappingExposure",ne.toneMappingExposure),Ze.needsLights&&Va(mn,pi),Xe&&he.fog===!0&&Z.refreshFogUniforms(mn,Xe),Z.refreshMaterialUniforms(mn,he,Oe,Re,I.state.transmissionRenderTarget[C.id]),Ze.needsLights&&Ze.lightProbeGrid){const Wt=Ze.lightProbeGrid;mn.probesSH.value=Wt.texture,mn.probesMin.value.copy(Wt.boundingBox.min),mn.probesMax.value.copy(Wt.boundingBox.max),mn.probesResolution.value.copy(Wt.resolution)}ou.upload(j,uo(Ze),mn,M)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(ou.upload(j,uo(Ze),mn,M),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&Kt.setValue(j,"center",pe.center),Kt.setValue(j,"modelViewMatrix",pe.modelViewMatrix),Kt.setValue(j,"normalMatrix",pe.normalMatrix),Kt.setValue(j,"modelMatrix",pe.matrixWorld),he.uniformsGroups!==void 0){const Wt=he.uniformsGroups;for(let Yi=0,Xa=Wt.length;Yi<Xa;Yi++){const Ds=Wt[Yi];ve.update(Ds,Un),ve.bind(Ds,Un)}}return Un}function Va(C,se){C.ambientLightColor.needsUpdate=se,C.lightProbe.needsUpdate=se,C.directionalLights.needsUpdate=se,C.directionalLightShadows.needsUpdate=se,C.pointLights.needsUpdate=se,C.pointLightShadows.needsUpdate=se,C.spotLights.needsUpdate=se,C.spotLightShadows.needsUpdate=se,C.rectAreaLights.needsUpdate=se,C.hemisphereLights.needsUpdate=se}function Cs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,se,ge){const he=U.get(C);he.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),U.get(C.texture).__webglTexture=se,U.get(C.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ge,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,se){const ge=U.get(C);ge.__webglFramebuffer=se,ge.__useDefaultFramebuffer=se===void 0};const ja=j.createFramebuffer();this.setRenderTarget=function(C,se=0,ge=0){X=C,me=se,ue=ge;let he=null,pe=!1,Xe=!1;if(C){const je=U.get(C);if(je.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(j.FRAMEBUFFER,je.__webglFramebuffer),B.copy(C.viewport),$.copy(C.scissor),ee=C.scissorTest,we.viewport(B),we.scissor($),we.setScissorTest(ee),w=-1;return}else if(je.__webglFramebuffer===void 0)M.setupRenderTarget(C);else if(je.__hasExternalTextures)M.rebindTextures(C,U.get(C.texture).__webglTexture,U.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ut=C.depthTexture;if(je.__boundDepthTexture!==ut){if(ut!==null&&U.has(ut)&&(C.width!==ut.image.width||C.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Xe=!0);const tt=U.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(tt[se])?he=tt[se][ge]:he=tt[se],pe=!0):C.samples>0&&M.useMultisampledRTT(C)===!1?he=U.get(C).__webglMultisampledFramebuffer:Array.isArray(tt)?he=tt[ge]:he=tt,B.copy(C.viewport),$.copy(C.scissor),ee=C.scissorTest}else B.copy(_e).multiplyScalar(Oe).floor(),$.copy(Pe).multiplyScalar(Oe).floor(),ee=Ve;if(ge!==0&&(he=ja),we.bindFramebuffer(j.FRAMEBUFFER,he)&&we.drawBuffers(C,he),we.viewport(B),we.scissor($),we.setScissorTest(ee),pe){const je=U.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+se,je.__webglTexture,ge)}else if(Xe){const je=se;for(let it=0;it<C.textures.length;it++){const tt=U.get(C.textures[it]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+it,tt.__webglTexture,ge,je)}}else if(C!==null&&ge!==0){const je=U.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,je.__webglTexture,ge)}w=-1},this.readRenderTargetPixels=function(C,se,ge,he,pe,Xe,et,je=0){if(!(C&&C.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(it=it[et]),it){we.bindFramebuffer(j.FRAMEBUFFER,it);try{const tt=C.textures[je],ut=tt.format,St=tt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+je),!Qe.textureFormatReadable(ut)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(St)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=C.width-he&&ge>=0&&ge<=C.height-pe&&j.readPixels(se,ge,he,pe,Y.convert(ut),Y.convert(St),Xe)}finally{const tt=X!==null?U.get(X).__webglFramebuffer:null;we.bindFramebuffer(j.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(C,se,ge,he,pe,Xe,et,je=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=U.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&et!==void 0&&(it=it[et]),it)if(se>=0&&se<=C.width-he&&ge>=0&&ge<=C.height-pe){we.bindFramebuffer(j.FRAMEBUFFER,it);const tt=C.textures[je],ut=tt.format,St=tt.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+je),!Qe.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ct),j.bufferData(j.PIXEL_PACK_BUFFER,Xe.byteLength,j.STREAM_READ),j.readPixels(se,ge,he,pe,Y.convert(ut),Y.convert(St),0);const kt=X!==null?U.get(X).__webglFramebuffer:null;we.bindFramebuffer(j.FRAMEBUFFER,kt);const pn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await y1(j,pn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ct),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Xe),j.deleteBuffer(ct),j.deleteSync(pn),Xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,se=null,ge=0){const he=Math.pow(2,-ge),pe=Math.floor(C.image.width*he),Xe=Math.floor(C.image.height*he),et=se!==null?se.x:0,je=se!==null?se.y:0;M.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,ge,0,0,et,je,pe,Xe),we.unbindTexture()};const Tn=j.createFramebuffer(),_l=j.createFramebuffer();this.copyTextureToTexture=function(C,se,ge=null,he=null,pe=0,Xe=0){let et,je,it,tt,ut,St,ct,kt,pn;const ln=C.isCompressedTexture?C.mipmaps[Xe]:C.image;if(ge!==null)et=ge.max.x-ge.min.x,je=ge.max.y-ge.min.y,it=ge.isBox3?ge.max.z-ge.min.z:1,tt=ge.min.x,ut=ge.min.y,St=ge.isBox3?ge.min.z:0;else{const mn=Math.pow(2,-pe);et=Math.floor(ln.width*mn),je=Math.floor(ln.height*mn),C.isDataArrayTexture?it=ln.depth:C.isData3DTexture?it=Math.floor(ln.depth*mn):it=1,tt=0,ut=0,St=0}he!==null?(ct=he.x,kt=he.y,pn=he.z):(ct=0,kt=0,pn=0);const Yt=Y.convert(se.format),Zt=Y.convert(se.type);let Ze;se.isData3DTexture?(M.setTexture3D(se,0),Ze=j.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?(M.setTexture2DArray(se,0),Ze=j.TEXTURE_2D_ARRAY):(M.setTexture2D(se,0),Ze=j.TEXTURE_2D),we.activeTexture(j.TEXTURE0),we.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,se.flipY),we.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),we.pixelStorei(j.UNPACK_ALIGNMENT,se.unpackAlignment);const qn=we.getParameter(j.UNPACK_ROW_LENGTH),Ct=we.getParameter(j.UNPACK_IMAGE_HEIGHT),Un=we.getParameter(j.UNPACK_SKIP_PIXELS),hi=we.getParameter(j.UNPACK_SKIP_ROWS),Bi=we.getParameter(j.UNPACK_SKIP_IMAGES);we.pixelStorei(j.UNPACK_ROW_LENGTH,ln.width),we.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ln.height),we.pixelStorei(j.UNPACK_SKIP_PIXELS,tt),we.pixelStorei(j.UNPACK_SKIP_ROWS,ut),we.pixelStorei(j.UNPACK_SKIP_IMAGES,St);const pi=C.isDataArrayTexture||C.isData3DTexture,Kt=se.isDataArrayTexture||se.isData3DTexture;if(C.isDepthTexture){const mn=U.get(C),Fi=U.get(se),Wt=U.get(mn.__renderTarget),Yi=U.get(Fi.__renderTarget);we.bindFramebuffer(j.READ_FRAMEBUFFER,Wt.__webglFramebuffer),we.bindFramebuffer(j.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let Xa=0;Xa<it;Xa++)pi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,U.get(C).__webglTexture,pe,St+Xa),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,U.get(se).__webglTexture,Xe,pn+Xa)),j.blitFramebuffer(tt,ut,et,je,ct,kt,et,je,j.DEPTH_BUFFER_BIT,j.NEAREST);we.bindFramebuffer(j.READ_FRAMEBUFFER,null),we.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(pe!==0||C.isRenderTargetTexture||U.has(C)){const mn=U.get(C),Fi=U.get(se);we.bindFramebuffer(j.READ_FRAMEBUFFER,Tn),we.bindFramebuffer(j.DRAW_FRAMEBUFFER,_l);for(let Wt=0;Wt<it;Wt++)pi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,mn.__webglTexture,pe,St+Wt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,mn.__webglTexture,pe),Kt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Fi.__webglTexture,Xe,pn+Wt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Fi.__webglTexture,Xe),pe!==0?j.blitFramebuffer(tt,ut,et,je,ct,kt,et,je,j.COLOR_BUFFER_BIT,j.NEAREST):Kt?j.copyTexSubImage3D(Ze,Xe,ct,kt,pn+Wt,tt,ut,et,je):j.copyTexSubImage2D(Ze,Xe,ct,kt,tt,ut,et,je);we.bindFramebuffer(j.READ_FRAMEBUFFER,null),we.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Kt?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(Ze,Xe,ct,kt,pn,et,je,it,Yt,Zt,ln.data):se.isCompressedArrayTexture?j.compressedTexSubImage3D(Ze,Xe,ct,kt,pn,et,je,it,Yt,ln.data):j.texSubImage3D(Ze,Xe,ct,kt,pn,et,je,it,Yt,Zt,ln):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Xe,ct,kt,et,je,Yt,Zt,ln.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Xe,ct,kt,ln.width,ln.height,Yt,ln.data):j.texSubImage2D(j.TEXTURE_2D,Xe,ct,kt,et,je,Yt,Zt,ln);we.pixelStorei(j.UNPACK_ROW_LENGTH,qn),we.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ct),we.pixelStorei(j.UNPACK_SKIP_PIXELS,Un),we.pixelStorei(j.UNPACK_SKIP_ROWS,hi),we.pixelStorei(j.UNPACK_SKIP_IMAGES,Bi),Xe===0&&se.generateMipmaps&&j.generateMipmap(Ze),we.unbindTexture()},this.initRenderTarget=function(C){U.get(C).__webglFramebuffer===void 0&&M.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?M.setTextureCube(C,0):C.isData3DTexture?M.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?M.setTexture2DArray(C,0):M.setTexture2D(C,0),we.unbindTexture()},this.resetState=function(){me=0,ue=0,X=null,we.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Bt._getUnpackColorSpace()}}const L_={type:"change"},Rp={type:"start"},Cv={type:"end"},eu=new yp,O_=new ys,mw=Math.cos(70*E1.DEG2RAD),On=new ae,fi=2*Math.PI,on={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mh=1e-6;class gw extends _M{constructor(e,i=null){super(e,i),this.state=on.NONE,this.target=new ae,this.cursor=new ae,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:no.ROTATE,MIDDLE:no.DOLLY,RIGHT:no.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ae,this._lastQuaternion=new As,this._lastTargetPosition=new ae,this._quat=new As().setFromUnitVectors(e.up,new ae(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new o_,this._sphericalDelta=new o_,this._scale=1,this._panOffset=new ae,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new ae,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_w.bind(this),this._onPointerDown=xw.bind(this),this._onPointerUp=vw.bind(this),this._onContextMenu=Aw.bind(this),this._onMouseWheel=Sw.bind(this),this._onKeyDown=Mw.bind(this),this._onTouchStart=Ew.bind(this),this._onTouchMove=Tw.bind(this),this._onMouseDown=bw.bind(this),this._onMouseMove=yw.bind(this),this._interceptControlDown=ww.bind(this),this._interceptControlUp=Rw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(L_),this.update(),this.state=on.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;On.copy(i).sub(this.target),On.applyQuaternion(this._quat),this._spherical.setFromVector3(On),this.autoRotate&&this.state===on.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=fi:s>Math.PI&&(s-=fi),l<-Math.PI?l+=fi:l>Math.PI&&(l-=fi),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(On.setFromSpherical(this._spherical),On.applyQuaternion(this._quatInverse),i.copy(this.target).add(On),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const p=On.length();d=this._clampDistance(p*this._scale);const m=p-d;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new ae(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const h=new ae(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(p),this.object.updateMatrixWorld(),d=On.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(eu.origin.copy(this.object.position),eu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eu.direction))<mw?this.object.lookAt(this.target):(O_.setFromNormalAndCoplanarPoint(this.object.up,this.target),eu.intersectPlane(O_,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mh||this._lastTargetPosition.distanceToSquared(this.target)>mh?(this.dispatchEvent(L_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?fi/60*this.autoRotateSpeed*e:fi/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){On.setFromMatrixColumn(i,0),On.multiplyScalar(-e),this._panOffset.add(On)}_panUp(e,i){this.screenSpacePanning===!0?On.setFromMatrixColumn(i,1):(On.setFromMatrixColumn(i,0),On.crossVectors(this.object.up,On)),On.multiplyScalar(e),this._panOffset.add(On)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;On.copy(l).sub(this.target);let c=On.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,d=s.width,p=s.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/i.clientHeight),this._rotateUp(fi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-fi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(fi*this._rotateDelta.x/i.clientHeight),this._rotateUp(fi*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(d,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ht,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function xw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _w(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function vw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cv),this.state=on.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function bw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case no.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=on.DOLLY;break;case no.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=on.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=on.ROTATE}break;case no.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=on.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=on.PAN}break;default:this.state=on.NONE}this.state!==on.NONE&&this.dispatchEvent(Rp)}function yw(r){switch(this.state){case on.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case on.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case on.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Sw(r){this.enabled===!1||this.enableZoom===!1||this.state!==on.NONE||(r.preventDefault(),this.dispatchEvent(Rp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Cv))}function Mw(r){this.enabled!==!1&&this._handleKeyDown(r)}function Ew(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case to.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=on.TOUCH_ROTATE;break;case to.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=on.TOUCH_PAN;break;default:this.state=on.NONE}break;case 2:switch(this.touches.TWO){case to.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=on.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=on.TOUCH_DOLLY_ROTATE;break;default:this.state=on.NONE}break;default:this.state=on.NONE}this.state!==on.NONE&&this.dispatchEvent(Rp)}function Tw(r){switch(this._trackPointer(r),this.state){case on.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case on.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case on.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case on.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=on.NONE}}function Aw(r){this.enabled!==!1&&r.preventDefault()}function ww(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P_({agents:r,decorItems:e=[],gridSize:i,timeMode:s,messages:l=[],currentAgentId:c}){const d=ke.useRef(null),p=ke.useRef(null),[m,h]=ke.useState({width:700,height:500}),[b,v]=ke.useState(!0),[g,S]=ke.useState(!1),[T,L]=ke.useState(!0),[y,x]=ke.useState(null),[D,O]=ke.useState({}),z=ke.useRef(D);ke.useEffect(()=>{z.current=D},[D]),ke.useLayoutEffect(()=>{if(!d.current)return;const P=new ResizeObserver(B=>{for(const $ of B){const{width:ee,height:R}=$.contentRect;h({width:Math.max(ee,350),height:Math.max(R,420)})}});return P.observe(d.current),()=>P.disconnect()},[]);const[W,I]=ke.useState(120),H=()=>{r.length!==0&&O(P=>{const B={...P},$=r.filter(be=>!B[be.id]);if($.length===0)return P;const ee=Math.min($.length,Math.floor(Math.random()*3)+1);return[...$].sort(()=>.5-Math.random()).slice(0,ee).forEach(be=>{const Re=[];e&&e.length>0&&e.forEach(_e=>{let Pe="Office Object";_e.type==="coffee"&&(Pe="Coffee Station"),_e.type==="cooler"&&(Pe="Water Dispenser"),_e.type==="plant"&&(Pe="Ficus Plant"),_e.type==="couch"&&(Pe="Lounge Couch"),_e.type==="wall"&&(Pe="Structural Wall"),_e.type==="store"&&(Pe="Convenience Store"),_e.type==="conference"&&(Pe="Conference Desk"),Re.push({type:_e.type,name:Pe,x:_e.x,z:_e.z})});let Oe=Math.floor(Math.random()*i),ce=Math.floor(Math.random()*i),Ee="Pacing around... 🚶";if(Re.length>0){const _e=Re[Math.floor(Math.random()*Re.length)];Oe=_e.x,ce=_e.z,_e.type==="coffee"?Ee="Getting espresso refueled... ☕":_e.type==="cooler"?Ee="Chilled cooler beverage break! 💧":_e.type==="plant"?Ee="Admiring office plant green... 🪴":_e.type==="couch"?Ee="Lounging for creative brainstorming... 🛋️":_e.type==="wall"?Ee="Inspecting wall building partition... 🧱":_e.type==="store"?Ee="Grabbing snack at Mini Store... 🏪":_e.type==="conference"&&(Ee="Attending executive meeting at Conference Table... 👥")}Oe=Math.max(0,Math.min(i-1,Oe)),ce=Math.max(0,Math.min(i-1,ce)),B[be.id]={agentId:be.id,homeX:be.gridPosition.x,homeZ:be.gridPosition.z,targetX:Oe,targetZ:ce,currentX:be.gridPosition.x,currentZ:be.gridPosition.z,progress:0,phase:"to_target",dwellTimeLeft:120,reasonCode:Ee}}),B})};ke.useEffect(()=>{const P=setInterval(()=>{I(B=>B<=1?(T&&H(),120):B-1)},1e3);return()=>clearInterval(P)},[T,r,e,i]),ke.useEffect(()=>{const P=setInterval(()=>{r.length!==0&&O(B=>{const $={...B};return Object.keys($).forEach(ee=>{const R=$[ee];R.phase==="to_target"?(R.progress+=.015,R.progress>=1?(R.progress=1,R.currentX=R.targetX,R.currentZ=R.targetZ,R.phase="dwelling"):(R.currentX=R.homeX+(R.targetX-R.homeX)*R.progress,R.currentZ=R.homeZ+(R.targetZ-R.homeZ)*R.progress)):R.phase==="dwelling"?(R.dwellTimeLeft--,R.dwellTimeLeft<=0&&(R.phase="return",R.progress=0)):R.phase==="return"&&(R.progress+=.015,R.progress>=1?(R.progress=1,R.currentX=R.homeX,R.currentZ=R.homeZ,delete $[ee]):(R.currentX=R.targetX+(R.homeX-R.targetX)*R.progress,R.currentZ=R.targetZ+(R.homeZ-R.targetZ)*R.progress))}),$})},100);return()=>clearInterval(P)},[r,i]),ke.useEffect(()=>{var B;const P=Object.values(D);if(P.length>0){const $=P[0],ee=((B=r.find(R=>R.id===$.agentId))==null?void 0:B.name)||"Agent";x(`🚶 ${ee.split(" ")[0]} is: ${$.reasonCode}`)}else x(null)},[D,r]);const A=(P,B)=>{const $=B.split("").reduce((Re,Oe)=>Re+Oe.charCodeAt(0),0),ee=[16767916,15843965,14724201,13010498,9262372],R=[1709328,2885120,12075781,15057240,5918794],K=[3359061,1013358,12458077,5774471,12730636,223649,1357990,6514417],be=[1976635,3359061,4674921,1120295];return{skin:ee[$%ee.length],hairColor:R[($+2)%R.length],clothesColor:K[($+4)%K.length],trouserColor:be[($+5)%be.length],hairStyle:$%5}},G=ke.useRef(null),ne=ke.useRef(null),k=ke.useRef(null),Q=ke.useRef(null),me=ke.useRef(null),ue=ke.useRef(0);ke.useEffect(()=>{const P=p.current;if(!P)return;const B=new B1;G.current=B;const $=new Ei(45,m.width/m.height,.1,200);$.position.set(12,11,16),k.current=$;const ee=new pw({canvas:P,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});ee.setPixelRatio(Math.min(window.devicePixelRatio,2)),ee.setSize(m.width,m.height),ee.shadowMap.enabled=!0,ee.shadowMap.type=j_,ne.current=ee;const R=new gw($,ee.domElement);R.enableDamping=!0,R.dampingFactor=.06,R.maxPolarAngle=Math.PI/2-.05,R.minDistance=3,R.maxDistance=55,R.target.set(0,0,0),Q.current=R;const K=new ii;B.add(K),me.current=K;const be=new r_(16777215,.45);B.add(be);const Re=new s_(16777215,1.2);Re.position.set(15,24,12),Re.castShadow=!0,Re.shadow.mapSize.width=1024,Re.shadow.mapSize.height=1024,Re.shadow.camera.near=.5,Re.shadow.camera.far=60;const Oe=15;Re.shadow.camera.left=-Oe,Re.shadow.camera.right=Oe,Re.shadow.camera.top=Oe,Re.shadow.camera.bottom=-Oe,Re.shadow.bias=-5e-4,B.add(Re);const ce=new Pa(100,100),Ee=new sn({roughness:.85,metalness:.1}),_e=new ze(ce,Ee);_e.rotation.x=-Math.PI/2,_e.receiveShadow=!0,B.add(_e);let Pe=new gM;const Ve=()=>{const qe=Pe.getElapsedTime();if(Q.current&&Q.current.update(),g&&k.current&&Q.current){const Ke=qe*.04,lt=new ht(k.current.position.x-Q.current.target.x,k.current.position.z-Q.current.target.z).length(),st=11+Math.sin(qe*.1)*.5;k.current.position.x=Q.current.target.x+Math.cos(Ke)*lt*.999,k.current.position.z=Q.current.target.z+Math.sin(Ke)*lt*.999,k.current.position.y+=(st-k.current.position.y)*.05}me.current&&me.current.children.forEach(Ke=>{var lt;if(Ke.name.startsWith("ag-label-")){k.current&&Ke.quaternion.copy(k.current.quaternion);const st=Ke.name.replace("ag-label-",""),vt=(lt=me.current)==null?void 0:lt.getObjectByName(`agent-${st}`);vt&&Ke.position.set(vt.position.x,1.62,vt.position.z)}if(Ke.userData&&Ke.userData.isAgent){const st=Ke.userData.agentId,vt=r.find(Fe=>Fe.id===st),pt=1.6,qt=(i-1)/2;let Be=vt?vt.gridPosition.x:0,_t=vt?vt.gridPosition.z:0;const j=z.current[st];j&&(Be=j.currentX,_t=j.currentZ);const Ye=Math.round(Be),rt=Math.round(_t),Qe=e.find(Fe=>Math.round(Fe.x)===Ye&&Math.round(Fe.z)===rt),we=!j||j.phase==="dwelling";let nt=0,U=0,M=null,F=!1,ie=!1;const V=((vt==null?void 0:vt.deskRotation)||0)*Math.PI/180;if(we)if(Qe){const Fe=r.filter(Y=>{const Te=z.current[Y.id],ve=Te?Te.currentX:Y.gridPosition.x,Ge=Te?Te.currentZ:Y.gridPosition.z;return(!Te||Te.phase==="dwelling")&&Math.round(ve)===Ye&&Math.round(Ge)===rt}).map(Y=>Y.id).sort(),$e=Math.max(0,Fe.indexOf(st));if(Qe.type==="conference"){F=!0;const Te=[{x:-.6,z:0,rotY:Math.PI/2},{x:.6,z:0,rotY:-Math.PI/2},{x:0,z:-.4,rotY:0},{x:0,z:.4,rotY:Math.PI}][$e%4];nt=Te.x,U=Te.z,M=Te.rotY}else if(Qe.type==="couch"){F=!0;const Te=[{x:-.5,z:-.06,rotY:0},{x:0,z:-.06,rotY:0},{x:.5,z:-.06,rotY:0}][$e%3];nt=Te.x,U=Te.z,M=Te.rotY}else{ie=!0;const Y=Fe.length||1,Te=$e*(2*Math.PI)/Y,ve=.35;nt=Math.sin(Te)*ve,U=Math.cos(Te)*ve,M=Te+Math.PI}}else nt=Math.sin(V)*.35,U=Math.cos(V)*.35;let te=!j||j.phase==="dwelling";F&&(te=!0),ie&&(te=!1);const oe=Ke.getObjectByName("left-leg"),Z=Ke.getObjectByName("right-leg"),re=Ke.getObjectByName("left-arm"),Ce=Ke.getObjectByName("right-arm"),Se=Ke.getObjectByName("torso");if(te){const Fe=Math.sin(qe*2.5)*.012;Se&&(Se.position.set(0,.42+Fe,0),Se.rotation.set(.06,0,0)),oe&&(oe.position.set(-.065,.22,.12),oe.rotation.set(Math.PI/2,0,0)),Z&&(Z.position.set(.065,.22,.12),Z.rotation.set(Math.PI/2,0,0));const $e=Math.sin(qe*20)*.02,Y=Math.cos(qe*20+1.2)*.02;re&&(re.position.set(-.16,.6+$e,.08),re.rotation.set(-1.4+$e,.15,.1)),Ce&&(Ce.position.set(.16,.6+Y,.08),Ce.rotation.set(-1.4+Y,-.15,-.1))}else{Se&&(Se.position.set(0,.45,0),Se.rotation.set(0,0,0));const Fe=Math.sin(qe*12)*.25;oe&&(oe.position.set(-.065,.14,0),oe.rotation.set(Fe,0,0)),Z&&(Z.position.set(.065,.14,0),Z.rotation.set(-Fe,0,0)),re&&(re.position.set(-.18,.48,0),re.rotation.set(-Fe*1.5,0,.1)),Ce&&(Ce.position.set(.18,.48,0),Ce.rotation.set(Fe*1.5,0,-.1))}const Me=(Be-qt)*pt+nt,Ne=(_t-qt)*pt+U;if(Ke.position.x+=(Me-Ke.position.x)*.35,Ke.position.z+=(Ne-Ke.position.z)*.35,j&&j.phase!=="dwelling"){const Fe=j.targetX-j.homeX,$e=j.targetZ-j.homeZ;let Te=Math.atan2(Fe,$e)-Ke.rotation.y;for(;Te<-Math.PI;)Te+=Math.PI*2;for(;Te>Math.PI;)Te-=Math.PI*2;Ke.rotation.y+=Te*.2}else{let $e=(M!==null?M:Math.PI+V)-Ke.rotation.y;for(;$e<-Math.PI;)$e+=Math.PI*2;for(;$e>Math.PI;)$e-=Math.PI*2;Ke.rotation.y+=$e*.12}const Je=Ke.getObjectByName("halo-ring");if(Je){Je.rotation.z=qe*3,Je.scale.setScalar(1+Math.sin(qe*5)*.1);const Fe=Je.getObjectByName("halo-light");Fe&&(Fe.intensity=.6+Math.sin(qe*6)*.3)}}if(Ke.userData&&Ke.userData.isCoffeeSteam&&(Ke.position.y+=.015,Ke.scale.multiplyScalar(.975),Ke.position.y>2.2&&(Ke.position.y=1.1,Ke.scale.setScalar(1))),Ke.name==="delegation-pulsar"&&Ke.userData&&Ke.userData.curve){const st=Ke.userData.curve,vt=qe*.45%1,pt=st.getPointAt(vt);Ke.position.copy(pt)}}),ee.render(B,$),ue.current=requestAnimationFrame(Ve)};return Ve(),()=>{cancelAnimationFrame(ue.current),R.dispose(),ee.dispose()}},[r,i]),ke.useEffect(()=>{ne.current&&k.current&&(k.current.aspect=m.width/m.height,k.current.updateProjectionMatrix(),ne.current.setSize(m.width,m.height))},[m]),ke.useEffect(()=>{var qt;const P=G.current,B=me.current;if(!P||!B)return;for(;B.children.length>0;){const Be=B.children[0];B.remove(Be),Be.traverse(_t=>{_t instanceof ze&&(_t.geometry&&_t.geometry.dispose(),_t.material&&(Array.isArray(_t.material)?_t.material.forEach(j=>j.dispose()):_t.material.dispose()))})}const $=P.getObjectByName("office-grid-helper");$&&P.remove($);let ee=15857145,R=9741240,K=3900150,be=10576391,Re=6583435,Oe=13751771;s==="night"?(ee=461075,R=1973067,K=6514417,be=7877903,Re=1976635,Oe=790042):s==="matrix"&&(ee=0,R=339478,K=2278750,be=0,Re=1332013,Oe=142370),(qt=ne.current)==null||qt.setClearColor(ee),P.fog=new bp(ee,.035);const ce=P.children.find(Be=>Be instanceof ze&&Be.geometry instanceof Pa);ce&&ce.material.color.setHex(Oe);const Ee=1.6,_e=(i-1)/2,Pe=i*Ee,Ve=new xM(Pe,i,K,R);Ve.name="office-grid-helper",Ve.position.set(0,.01,0),P.add(Ve);const qe=P.children.find(Be=>Be instanceof r_);qe&&(qe.color.setHex(s==="matrix"?65280:16777215),qe.intensity=s==="day"?.95:s==="night"?.35:.15);const Ke=P.children.find(Be=>Be instanceof s_);Ke&&(Ke.intensity=s==="day"?1.4:s==="night"?.6:.2);const lt=new sn({color:be,roughness:.15,metalness:.05}),st=new sn({color:Re,metalness:.9,roughness:.1});r.forEach(Be=>{const _t=Be.gridPosition.x,j=Be.gridPosition.z,Ye=(_t-_e)*Ee,rt=(j-_e)*Ee,Qe=new ii;Qe.position.set(Ye,0,rt);const we=Be.deskRotation||0;Qe.rotation.y=we*Math.PI/180,B.add(Qe);const nt=new At(1.2,.05,.8),U=new ze(nt,lt);U.position.set(0,.55,0),U.castShadow=!0,U.receiveShadow=!0,Qe.add(U);const M=new Nn(.02,.02,.55);[[-.55,-.4],[.55,-.4],[-.55,.4],[.55,.4]].forEach(Lt=>{const xt=new ze(M,st);xt.position.set(Lt[0],.275,Lt[1]),xt.castShadow=!0,Qe.add(xt)});const ie=new ii;ie.position.set(-.22,.58,-.05),ie.rotation.y=.3,Qe.add(ie);const V=new At(.24,.015,.16),te=new ze(V,st);te.castShadow=!0,ie.add(te);const oe=new At(.24,.16,.01),Z=new ze(oe,st);Z.position.set(0,.07,.08),Z.rotation.x=-.3,Z.castShadow=!0,ie.add(Z);const re=new Pa(.21,.12),Ce=new ta({color:s==="matrix"?2278750:3718648}),Se=new ze(re,Ce);Se.position.set(0,.08,.073),Se.rotation.x=-.3,ie.add(Se);const Me=new ii;Me.position.set(.18,.58,-.15),Me.rotation.y=-.25,Qe.add(Me);const Ne=new At(.16,.01,.1),Je=new ze(Ne,st);Je.castShadow=!0,Je.receiveShadow=!0,Me.add(Je);const Fe=new Nn(.012,.012,.18,8),$e=new ze(Fe,st);$e.position.set(0,.09,-.02),$e.castShadow=!0,Me.add($e);const Y=new sn({color:1976635,roughness:.7}),Te=new At(.42,.25,.02),ve=new ze(Te,Y);ve.position.set(0,.22,-.02),ve.castShadow=!0,Me.add(ve);const Ge=new Pa(.39,.22),Ie=new ta({color:s==="matrix"?1332013:1973067}),Le=new ze(Ge,Ie);Le.position.set(0,.22,-.009),Me.add(Le);const He=5,dt=[2278750,15485081,3900150,15381256,1357990];for(let Lt=0;Lt<He;Lt++){const xt=new Pa(.12+Math.random()*.15,.015),Rt=new ta({color:s==="matrix"?2278750:dt[Lt%dt.length]}),Ht=new ze(xt,Rt);Ht.position.set(-.06+Math.random()*.03,.29-Lt*.04,-.008),Me.add(Ht)}const Gt=new ii;Gt.position.set(0,0,.35),Qe.add(Gt);const Ut=new Nn(.02,.04,.2),Bn=new ze(Ut,st);Bn.position.set(0,.1,0),Gt.add(Bn);const un=new Nn(.01,.01,.22);for(let Lt=0;Lt<5;Lt++){const xt=new ze(un,st);xt.rotation.x=Math.PI/2,xt.rotation.y=Lt*Math.PI*2/5,xt.position.set(0,.01,0),Gt.add(xt)}const ai=new At(.42,.04,.4),_n=new sn({color:Be.avatarColor?parseInt(Be.avatarColor.replace("#","0x")):1976635,roughness:.8}),zi=new ze(ai,_n);zi.position.set(0,.22,0),zi.castShadow=!0,Gt.add(zi);const fa=new At(.38,.35,.04),fn=new ze(fa,_n);fn.position.set(0,.44,.18),fn.castShadow=!0,Gt.add(fn)});const vt=new sn({color:12730636,roughness:.8}),pt=new sn({color:1409085,roughness:.9,flatShading:!0});if(e.forEach(Be=>{const _t=(Be.x-_e)*Ee,j=(Be.z-_e)*Ee,Ye=new ii;if(Ye.position.set(_t,0,j),B.add(Ye),Be.type==="plant"){const rt=new Nn(.2,.13,.28,12),Qe=new ze(rt,vt);Qe.position.set(0,.14,0),Qe.castShadow=!0,Ye.add(Qe);const we=new Pn(.22,8,8),nt=new ze(we,pt);nt.position.set(0,.42,0),nt.scale.set(1.1,1.4,.9),nt.castShadow=!0,Ye.add(nt);const U=new ze(we,pt);U.position.set(-.1,.6,.05),U.scale.set(.8,1.2,.8),U.castShadow=!0,Ye.add(U);const M=new ze(we,pt);M.position.set(.08,.52,-.08),M.scale.set(.8,1.2,.8),M.castShadow=!0,Ye.add(M)}else if(Be.type==="coffee"){const rt=new At(.7,.65,.6),Qe=new sn({color:4674921,metalness:.1}),we=new ze(rt,Qe);we.position.set(0,.325,0),we.castShadow=!0,we.receiveShadow=!0,Ye.add(we);const nt=new At(.42,.42,.38),U=new sn({color:12131356,metalness:.5}),M=new ze(nt,U);M.position.set(0,.86,0),M.castShadow=!0,Ye.add(M);const F=new At(.25,.04,.24),ie=new ze(F,st);ie.position.set(0,.68,.08),ie.castShadow=!0,Ye.add(ie);const V=new Nn(.04,.03,.06),te=new sn({color:16777215}),oe=new ze(V,te);oe.position.set(0,.73,.08),oe.castShadow=!0,Ye.add(oe);for(let Z=0;Z<3;Z++){const re=new Pn(.03+Z*.01,5,5),Ce=new ta({color:16777215,transparent:!0,opacity:.35}),Se=new ze(re,Ce);Se.position.set(0,.82+Z*.15,.08),Se.userData={isCoffeeSteam:!0},Ye.add(Se)}}else if(Be.type==="cooler"){const rt=new Nn(.2,.2,.7,12),Qe=new ze(rt,st);Qe.position.set(0,.35,0),Qe.castShadow=!0,Qe.receiveShadow=!0,Ye.add(Qe);const we=new Nn(.18,.18,.46,12),nt=new sn({color:3718648,transparent:!0,opacity:.65,roughness:0,metalness:.3}),U=new ze(we,nt);U.position.set(0,.93,0),U.castShadow=!0,Ye.add(U)}else if(Be.type==="couch"){const rt=new At(1.6,.12,.72),Qe=new ze(rt,lt);Qe.position.set(0,.08,0),Qe.castShadow=!0,Ye.add(Qe);const we=new At(.1,.1,.1);[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(te=>{const oe=new ze(we,st);oe.position.set(te[0],.01,te[1]),oe.castShadow=!0,Ye.add(oe)});const U=new At(1.5,.22,.65),M=new sn({color:1013358,roughness:.9}),F=new ze(U,M);F.position.set(0,.22,.01),F.castShadow=!0,Ye.add(F);const ie=new At(1.5,.4,.12),V=new ze(ie,M);V.position.set(0,.48,-.27),V.castShadow=!0,Ye.add(V)}else if(Be.type==="wall"){const rt=s==="matrix"?339478:s==="night"?1976635:14870768,Qe=new sn({color:rt,roughness:.6,metalness:.1}),we=new At(1.6,1.4,.25),nt=new ze(we,Qe);nt.position.set(0,.7,0),nt.castShadow=!0,nt.receiveShadow=!0,Ye.add(nt);const U=s==="matrix"?2278750:s==="night"?6514417:5195493,M=new sn({color:U,roughness:.4}),F=new At(1.64,.06,.29),ie=new ze(F,M);ie.position.set(0,1.43,0),ie.castShadow=!0,Ye.add(ie)}else if(Be.type==="store"){const rt=new At(1.4,.6,1),Qe=new sn({color:3223169,roughness:.5}),we=new ze(rt,Qe);we.position.set(0,.3,0),we.castShadow=!0,we.receiveShadow=!0,Ye.add(we);const nt=new At(1.4,1.3,.12),U=new sn({color:5195493,roughness:.7}),M=new ze(nt,U);M.position.set(0,.95,-.44),M.castShadow=!0,Ye.add(M);const F=new At(1.2,.04,.22),ie=new sn({color:14251782,roughness:.3}),V=new ze(F,ie);V.position.set(0,.65,-.25),V.castShadow=!0,Ye.add(V);const te=new ze(F,ie);te.position.set(0,1.05,-.25),te.castShadow=!0,Ye.add(te);const oe=[15680580,1096065,3900150,16096779,15485081];for(let ve=0;ve<4;ve++){const Ge=oe[ve%oe.length],Ie=new At(.12,.16,.1),Le=new sn({color:Ge,roughness:.4}),He=new ze(Ie,Le);He.position.set(-.45+ve*.3,.75,-.15),He.castShadow=!0,Ye.add(He)}const Z=new At(.16,.02,.16),re=new ze(Z,st);re.position.set(-.3,.61,.2),re.castShadow=!0,Ye.add(re);const Ce=new At(.14,.1,.015),Se=new sn({color:1120295,roughness:.1}),Me=new ze(Ce,Se);Me.position.set(-.3,.69,.2),Me.rotation.x=-.4,Me.castShadow=!0,Ye.add(Me);const Ne=new At(1.2,.25,.08),Je=new sn({color:988970,roughness:.8}),Fe=new ze(Ne,Je);Fe.position.set(0,1.7,-.44),Fe.castShadow=!0,Ye.add(Fe);const $e=new At(1,.05,.1),Y=new ta({color:11032055}),Te=new ze($e,Y);Te.position.set(0,1.7,-.38),Ye.add(Te)}else if(Be.type==="conference"){const Qe=new sn({color:423052,roughness:.15,metalness:.1}),we=new At(1.5,.06,.9),nt=new ze(we,Qe);nt.position.set(0,.65,0),nt.castShadow=!0,nt.receiveShadow=!0,Ye.add(nt);const U=new Nn(.06,.08,.62,8),M=new ze(U,st);M.position.set(-.45,.31,0),M.castShadow=!0,Ye.add(M);const F=new ze(U,st);F.position.set(.45,.31,0),F.castShadow=!0,Ye.add(F);const ie=new At(.28,.04,.28),V=new At(.28,.34,.04),te=2042167,oe=new sn({color:te,roughness:.75});[{x:-.6,z:0,rotY:Math.PI/2},{x:.6,z:0,rotY:-Math.PI/2},{x:0,z:-.4,rotY:0},{x:0,z:.4,rotY:Math.PI}].forEach(re=>{const Ce=new ii;Ce.position.set(re.x,0,re.z),Ce.rotation.y=re.rotY;const Se=new Nn(.015,.015,.35,6),Me=new ze(Se,st);Me.position.set(0,.175,0),Me.castShadow=!0,Ce.add(Me);const Ne=new Nn(.1,.12,.03,8),Je=new ze(Ne,st);Je.position.set(0,.015,0),Ce.add(Je);const Fe=new ze(ie,oe);Fe.position.set(0,.36,0),Fe.castShadow=!0,Ce.add(Fe);const $e=new ze(V,oe);$e.position.set(0,.52,-.12),$e.castShadow=!0,Ce.add($e),Ye.add(Ce)})}}),r.forEach(Be=>{var Lt;const _t=A(Be.id,Be.name),j=new ii;j.name=`agent-${Be.id}`,j.userData={isAgent:!0,agentId:Be.id};const Ye=Be.gridPosition.x,rt=Be.gridPosition.z;j.position.set((Ye-_e)*Ee,0,(rt-_e)*Ee),B.add(j);const Qe=new sn({color:_t.trouserColor,roughness:.8}),we=new ze(new At(.08,.28,.08),Qe);we.name="left-leg",we.position.set(-.065,.14,0),we.castShadow=!0,j.add(we);const nt=new ze(new At(.08,.28,.08),Qe);nt.name="right-leg",nt.position.set(.065,.14,0),nt.castShadow=!0,j.add(nt);const U=new sn({color:_t.skin,roughness:.65}),M=new sn({color:_t.clothesColor,roughness:.5}),F=new ii;F.name="torso",F.position.set(0,.45,0),j.add(F);let ie;if(Be.gender==="female"){const xt=new Nn(.14,.08,.32,24);ie=new ze(xt,M),ie.castShadow=!0,ie.receiveShadow=!0,F.add(ie);const Rt=new ze(new Pn(.14,24,12,0,Math.PI*2,0,Math.PI/2),M);Rt.position.y=.16,Rt.castShadow=!0,Rt.receiveShadow=!0,F.add(Rt);const Ht=new ze(new Pn(.08,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),M);Ht.position.y=-.16,Ht.castShadow=!0,Ht.receiveShadow=!0,F.add(Ht)}else{const xt=new Nn(.13,.13,.28,24);ie=new ze(xt,M),ie.castShadow=!0,ie.receiveShadow=!0,F.add(ie);const Rt=new ze(new Pn(.13,24,12,0,Math.PI*2,0,Math.PI/2),M);Rt.position.y=.14,Rt.castShadow=!0,Rt.receiveShadow=!0,F.add(Rt);const Ht=new ze(new Pn(.13,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),M);Ht.position.y=-.14,Ht.castShadow=!0,Ht.receiveShadow=!0,F.add(Ht)}const te=new At(.11,.08,.015),oe=new sn({color:16777215}),Z=new ze(te,oe);Z.position.set(0,.14,.08),F.add(Z);const re=new At(.026,.14,.005),Ce=new sn({color:14251782}),Se=new ze(re,Ce);Se.position.set(0,.07,.09),F.add(Se);const Me=new ii;Me.name="left-arm",Me.position.set(-.18,.48,0),Me.rotation.z=.1,j.add(Me);const Ne=new ze(new Nn(.038,.032,.22,12),M);Ne.position.set(0,-.11,0),Ne.castShadow=!0,Me.add(Ne);const Je=new ze(new Pn(.038,12,12),M);Je.position.set(0,0,0),Je.castShadow=!0,Me.add(Je);const Fe=new ze(new Pn(.038,16,16),U);Fe.position.set(0,-.22,0),Fe.castShadow=!0,Me.add(Fe);const $e=new ii;$e.name="right-arm",$e.position.set(.18,.48,0),$e.rotation.z=-.1,j.add($e);const Y=new ze(new Nn(.038,.032,.22,12),M);Y.position.set(0,-.11,0),Y.castShadow=!0,$e.add(Y);const Te=new ze(new Pn(.038,12,12),M);Te.position.set(0,0,0),Te.castShadow=!0,$e.add(Te);const ve=new ze(new Pn(.038,16,16),U);ve.position.set(0,-.22,0),ve.castShadow=!0,$e.add(ve);const Ge=new Nn(.045,.045,.08,10),Ie=new ze(Ge,U);Ie.position.set(0,.66,0),j.add(Ie);const Le=new Pn(.14,16,16),He=new ze(Le,U);He.position.set(0,.81,0),He.castShadow=!0,j.add(He);const dt=new Pn(.018,8,8),Gt=new ta({color:657930}),Ut=new ze(dt,Gt);Ut.position.set(-.045,.02,.115),He.add(Ut);const Bn=new ze(dt,Gt);Bn.position.set(.045,.02,.115),He.add(Bn);const un=new sn({color:_t.hairColor,roughness:.75});if(_t.hairStyle===0)for(let xt=0;xt<6;xt++){const Rt=new ze(new Ep(.03,.1,4),un);Rt.rotation.x=-.5+Math.random()*.3,Rt.rotation.y=Math.random()*Math.PI,Rt.position.set(-.07+Math.random()*.14,.12,-.05+Math.random()*.1),He.add(Rt)}else if(_t.hairStyle===1){const xt=new ze(new Pn(.15,12,12),un);xt.position.set(0,.04,-.02),xt.scale.set(1.02,.9,1.05),He.add(xt);const Rt=new ze(new Nn(.035,.01,.28,8),un);Rt.position.set(0,-.12,-.155),Rt.rotation.x=.45,He.add(Rt)}else if(_t.hairStyle===2){const xt=new ze(new At(.24,.06,.22),un);xt.position.set(0,.11,-.01),He.add(xt)}else if(_t.hairStyle===3){const xt=new ze(new Pn(.15,10,10),un);xt.position.set(0,.03,-.02),He.add(xt);for(let Rt=0;Rt<10;Rt++){const Ht=new ze(new Pn(.048,8,8),un);Ht.position.set(-.11+Math.random()*.22,.08+Math.random()*.06,-.08+Math.random()*.14),He.add(Ht)}}else{const xt=new ze(new Pn(.152,14,14),un);xt.position.set(0,.02,-.01),He.add(xt);const Rt=new ze(new At(.04,.16,.14),un);Rt.position.set(-.13,-.03,.04),He.add(Rt);const Ht=new ze(new At(.04,.16,.14),un);Ht.position.set(.13,-.03,.04),He.add(Ht)}if(Be.id===c||Be.id===c){const xt=new Tp(.24,.28,16),Rt=new ta({color:Be.id===c?2278750:16096779,side:ia}),Ht=new ze(xt,Rt);Ht.name="halo-ring",Ht.position.set(0,1.15,0),Ht.rotation.x=Math.PI/2,j.add(Ht);const da=new dM(Be.id===c?2278750:16096779,.85,1.5);da.color.setHex(Be.id===c?2278750:16096779),da.name="halo-light",da.position.set(0,1,0),j.add(da)}const ai=document.createElement("canvas");ai.width=160,ai.height=80;const _n=ai.getContext("2d");_n.fillStyle="rgba(11, 15, 30, 0.85)",_n.beginPath(),_n.roundRect(4,4,152,72,8),_n.fill(),_n.strokeStyle=Be.id===c?"#22c55e":Be.id===c?"#ffffff":"#4f46e5",_n.lineWidth=2.5,_n.stroke(),_n.fillStyle="#ffffff",_n.font="bold 15px Arial, sans-serif",_n.textAlign="center",_n.fillText(Be.name.split(" ")[0],80,32),_n.fillStyle=Be.id===c?"#4ade80":"#94a3b8",_n.font="bold 9px monospace",_n.fillText(Be.designation.length>20?((Lt=Be.designation.match(/.{1,14}/g))==null?void 0:Lt[0])+"..":Be.designation,80,55);const zi=new Q1(ai),fa=new hv({map:zi,transparent:!0,depthTest:!1}),fn=new j1(fa);fn.name=`ag-label-${Be.id}`,fn.position.set((Ye-_e)*Ee,1.62,(rt-_e)*Ee),fn.scale.set(1.5,.75,1),B.add(fn)}),l.length>0){const Be=l[l.length-1];if(Be.delegateId&&Be.senderId){const _t=r.find(Ye=>Ye.id===Be.senderId),j=r.find(Ye=>Ye.id===Be.delegateId);if(_t&&j){const Ye=(_t.gridPosition.x-_e)*Ee,rt=(_t.gridPosition.z-_e)*Ee,Qe=(j.gridPosition.x-_e)*Ee,we=(j.gridPosition.z-_e)*Ee,nt=new ae(Ye,.75,rt),U=new ae(Qe,.75,we),M=nt.distanceTo(U),F=Math.max(1.5,M*.45),ie=new ae().addVectors(nt,U).multiplyScalar(.5);ie.y+=F;const V=new iM(nt,ie,U),te=V.getPoints(24),oe=new $n().setFromPoints(te),Z=new Mp({color:s==="matrix"?2278750:8490232,transparent:!0,opacity:.6}),re=new mv(oe,Z);B.add(re);const Ce=new Pn(.1,12,12),Se=new ta({color:s==="matrix"?2278750:16498468,toneMapped:!1}),Me=new ze(Ce,Se);Me.name="delegation-pulsar",Me.userData={curve:V},B.add(Me)}}}},[r,e,i,s,l,c]);const X=()=>{k.current&&Q.current&&(k.current.position.set(12,11,16),Q.current.target.set(0,0,0),Q.current.update())},w=s==="matrix";return E.jsxs("div",{ref:d,className:"relative w-full h-[525px] bg-[#0c0e18] rounded-2xl overflow-hidden border border-slate-900/50 flex flex-col justify-between shadow-inner",children:[E.jsxs("div",{className:"absolute top-3 left-4 z-10 flex items-center gap-1.5 p-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-xl",children:[E.jsx("span",{className:"text-[8px] font-extrabold uppercase text-[#6366f1] px-2 py-0.5 border-r border-white/10 tracking-widest font-mono",children:"WebGL View"}),E.jsxs("p",{className:"text-[10px] text-slate-300 font-mono px-1 flex items-center gap-1",children:[E.jsx(MS,{className:"w-3 h-3 text-emerald-400 shrink-0"}),E.jsx("span",{children:"DRAG LEFT TO ORBIT • DRAG RIGHT TO PAN"})]})]}),y&&E.jsx("div",{className:"absolute bottom-16 right-4 z-10 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-slate-900/90 text-[10px] text-indigo-300 shadow-2xl animate-bounce font-mono",children:y}),E.jsxs("div",{className:"absolute top-3 right-4 z-10 flex items-center gap-1.5 cnvs-top",children:[E.jsx("button",{onClick:()=>L(P=>!P),className:`px-2.5 py-1 text-[8px] font-mono tracking-wider border rounded-lg transition-all uppercase font-bold ${T?"bg-emerald-600/25 text-emerald-300 border-emerald-500/40":"text-slate-500 border-slate-800 hover:text-white"}`,id:"toggle-roaming-agents",title:"Toggle automatic random roaming / walks for office agents",children:T?"Walks: Random pacing":"Walks: Focus at desks"}),E.jsx("button",{onClick:()=>S(P=>!P),className:`px-2.5 py-1 text-[8px] font-mono tracking-wider border rounded-lg transition-all uppercase font-bold ${g?"bg-indigo-600/25 text-indigo-300 border-indigo-500/40":"text-slate-500 border-slate-800 hover:text-white"}`,id:"toggle-cinematic-fx",title:"Toggle soft drifting cinematic rotate camera effect",children:g?"Cinematic: Slow Drift":"Cinematic: Static"}),E.jsx("button",{onClick:()=>v(P=>!P),className:"p-1.5 bg-slate-900/80 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-colors",title:"Toggle guidelines description",id:"toggle-canvas-helpers",children:E.jsx(F_,{className:"w-3.5 h-3.5"})})]}),E.jsx("canvas",{ref:p,className:"w-full h-full block bg-[#0c0e18]",id:"isometric-viewport-canvas"}),E.jsxs("div",{className:"absolute bottom-4 left-4 z-10 flex flex-wrap items-center gap-2",children:[E.jsxs("button",{onClick:X,className:"px-3 py-1.5 bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-slate-700 text-[9px] uppercase font-bold rounded-lg flex items-center gap-1 shadow-lg transition-all",title:"Reset zoom and rotation target",id:"hud-reset-cam",children:[E.jsx(vS,{className:"w-2.5 h-2.5"}),"Center Camera"]}),E.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-indigo-500/35 rounded-lg text-[9px] font-mono tracking-wider font-bold shadow-lg",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping shrink-0"}),E.jsx("span",{className:"text-slate-400 uppercase",children:"Swarm Break:"}),E.jsxs("span",{className:"text-indigo-400",children:[Math.floor(W/60),":",(W%60).toString().padStart(2,"0")]}),T&&E.jsx("span",{className:"text-[7.5px] text-emerald-400 font-sans font-extrabold uppercase ml-1 px-1 bg-emerald-500/10 rounded",children:"Auto"})]}),E.jsx("button",{onClick:()=>{H(),I(120)},className:"px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/40 text-[9px] uppercase font-bold rounded-lg flex items-center gap-1.5 shadow-lg transition-all",title:"Force a random set of 1-3 agents to wander to office settings and come back",id:"btn-manual-break",children:E.jsx("span",{children:"🔔 Trigger Group Break"})})]}),b&&E.jsx("div",{className:`absolute bottom-4 right-4 pt-1 pb-1 p-2 rounded-xl border max-w-xs transition-opacity z-10 shadow-2xl ${w?"border-green-500/20 bg-black/95 text-green-400 font-mono text-[9px]":"border-white/10 bg-slate-950/95 text-slate-300 text-[10px]"}`,children:E.jsxs("div",{className:"flex items-center gap-1 text-white font-extrabold uppercase text-[9px] tracking-wider mb-1",children:[E.jsx(k_,{className:"w-3.5 h-3.5 text-[#fbbf24] animate-pulse"}),E.jsx("span",{children:"Real-Time Workspace"})]})})]})}const I_=[{hex:"#60a5fa",label:"Sky Blue"},{hex:"#34d399",label:"Mint Green"},{hex:"#f472b6",label:"Coral Pink"},{hex:"#fbbf24",label:"Warm Amber"},{hex:"#a78bfa",label:"Soft Purple"},{hex:"#f87171",label:"Vibrant Coral"}];function Cw({agents:r,selectedAgentId:e,onUpdateAgent:i,onAddAgent:s,onDeleteAgent:l,timeMode:c,isBusy:d=!1}){const p=r.find(ee=>ee.id===e),[m,h]=ke.useState(""),[b,v]=ke.useState(""),[g,S]=ke.useState(""),[T,L]=ke.useState("#60a5fa"),[y,x]=ke.useState("male"),[D,O]=ke.useState(0),[z,W]=ke.useState(!1),[I,H]=ke.useState(""),[A,G]=ke.useState(""),[ne,k]=ke.useState(""),[Q,me]=ke.useState("#60a5fa"),[ue,X]=ke.useState("male");ke.useEffect(()=>{p&&(h(p.name),v(p.designation),S(p.systemPrompt),L(p.avatarColor||"#60a5fa"),x(p.gender||"male"),O(p.deskRotation||0))},[p]);const w=ee=>{ee.preventDefault(),p&&i({...p,name:m,designation:b,systemPrompt:g,avatarColor:T,gender:y,deskRotation:D})},P=ee=>{if(ee.preventDefault(),!I||!A)return;const R=Math.floor(Math.random()*5)+1,K=Math.floor(Math.random()*5)+1;s({id:`agent-custom-${Date.now()}`,name:I,designation:A,systemPrompt:ne||"You are an AI specialist focused on high performance delivery.",gridPosition:{x:R,z:K},avatarColor:Q,gender:ue}),H(""),G(""),k(""),me("#60a5fa"),X("male"),W(!1)},B=c==="matrix",$=c==="night";return E.jsxs("div",{className:`p-5 rounded-xl border h-full flex flex-col justify-between transition-all duration-300 ${B?"border-green-500/20 bg-slate-950/95 text-green-300 shadow-green-500/5 shadow-md":$?"border-slate-800 bg-[#0f1322] text-slate-100 shadow-indigo-500/5 shadow-md":"border-slate-200 bg-white text-slate-800 shadow-sm"}`,id:"agent-workspace-pod-builder",children:[E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-dashed border-slate-700/50",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(Tx,{className:`w-4 h-4 ${B?"text-green-400 animate-pulse":"text-indigo-400"}`}),E.jsx("h2",{className:`font-semibold tracking-wide text-xs uppercase ${B?"font-mono":""}`,children:"Pod Construction Studio"})]}),E.jsxs("button",{onClick:()=>!d&&W(!z),disabled:d,className:`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md border tracking-wider transition-colors uppercase ${d?"opacity-50 cursor-not-allowed border-slate-700/40 text-slate-500 bg-transparent":B?"border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono":$?"border-indigo-600 bg-indigo-950/40 text-indigo-200 hover:bg-indigo-900/50":"border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"}`,id:"btn-add-agent-pod",children:[d?E.jsx(eo,{className:"w-3 h-3"}):E.jsx(xS,{className:"w-3.5 h-3.5"}),"New Worker Node"]})]}),z&&!d?E.jsxs("form",{onSubmit:P,className:`space-y-3 mb-4 p-3.5 rounded-lg border border-dashed ${B?"bg-black border-green-500/30 text-green-400":$?"bg-slate-900/40 border-slate-700/50 text-slate-100":"bg-slate-50 border-slate-200 text-slate-900"}`,children:[E.jsx("h3",{className:`text-xs font-bold uppercase tracking-wider ${B?"text-green-400 font-mono":$?"text-indigo-400":"text-indigo-900"}`,children:"Spawn Dynamic Agent"}),E.jsxs("div",{children:[E.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${B?"text-green-500 font-mono":$?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Worker Calling Name"}),E.jsx("input",{type:"text",required:!0,placeholder:"e.g. Liam (Lead Designer)",value:I,onChange:ee=>H(ee.target.value),className:`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 ${B?"bg-black border-green-500/30 text-green-400 font-mono":$?"bg-slate-950/80 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900 font-medium"}`})]}),E.jsxs("div",{children:[E.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${B?"text-green-500 font-mono":$?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Corporate Designation"}),E.jsx("input",{type:"text",required:!0,placeholder:"e.g. UX Architect",value:A,onChange:ee=>G(ee.target.value),className:`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 ${B?"bg-black border-green-500/30 text-green-400 font-mono":$?"bg-slate-950/80 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900 font-medium"}`})]}),E.jsxs("div",{children:[E.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${B?"text-green-500 font-mono":$?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Avatar Color Theme"}),E.jsx("div",{className:"flex gap-2 py-1 items-center",children:I_.map(ee=>E.jsx("button",{type:"button",onClick:()=>me(ee.hex),className:`w-6 h-6 rounded-full border transition-transform ${Q===ee.hex?"scale-125 border-white ring-2 ring-indigo-500":"border-transparent"}`,style:{backgroundColor:ee.hex},title:ee.label},ee.hex))})]}),E.jsxs("div",{children:[E.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${B?"text-green-500 font-mono":$?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Avatar Gender (Body Style)"}),E.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[E.jsx("button",{type:"button",onClick:()=>X("male"),className:`py-1.5 px-2.5 text-[10px] rounded border transition-all font-bold uppercase ${ue==="male"?B?"bg-green-600 border-green-500 text-black font-mono":"bg-indigo-600 border-indigo-500 text-white shadow-sm":B?"bg-black text-green-500 border-green-500/30":$?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`,children:"♂ Male"}),E.jsx("button",{type:"button",onClick:()=>X("female"),className:`py-1.5 px-2.5 text-[10px] rounded border transition-all font-bold uppercase ${ue==="female"?B?"bg-green-600 border-green-500 text-black font-mono":"bg-indigo-600 border-indigo-500 text-white shadow-sm":B?"bg-black text-green-500 border-green-500/30":$?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`,children:"♀ Female"})]})]}),E.jsxs("div",{children:[E.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${B?"text-green-500 font-mono":$?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Core System Directive"}),E.jsx("textarea",{placeholder:"List their operational rules...",rows:3,value:ne,onChange:ee=>k(ee.target.value),className:`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 font-mono ${B?"bg-black border-green-500/30 text-green-400":$?"bg-slate-950/80 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900 font-medium"}`})]}),E.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[E.jsx("button",{type:"button",onClick:()=>W(!1),className:`px-2 py-1 text-[10px] rounded hover:underline ${B?"text-green-400":$?"text-slate-400":"text-slate-600 font-extrabold"}`,children:"Cancel"}),E.jsx("button",{type:"submit",className:"px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600 rounded hover:bg-indigo-500",children:"Instantiate Pod"})]})]}):null,p?E.jsxs("form",{onSubmit:w,className:"space-y-4",children:[d?E.jsxs("div",{className:`p-3 rounded-lg flex items-start gap-2.5 border ${B?"bg-black border-red-500/25 text-red-500":$?"bg-red-950/30 border border-red-500/25 text-red-300":"bg-red-50 border border-red-300 text-slate-950 font-extrabold"}`,children:[E.jsx(eo,{className:`w-4 h-4 shrink-0 mt-0.5 ${B||$?"text-red-400":"text-black"}`}),E.jsxs("div",{className:"text-[11px] leading-relaxed",children:[E.jsx("span",{className:`font-black uppercase tracking-wider text-[10px] block mb-0.5 ${B||$?"text-red-450":"text-black"}`,children:"Neural Link Locked"}),E.jsx("span",{className:`${!B&&!$?"text-black font-extrabold":""}`,children:"Cannot modify or remove employee directives while task is compiling or swarm is actively executing. Stop or wait for loop completion."})]})]}):E.jsxs("div",{className:`p-3.5 rounded-lg flex items-start gap-2.5 border ${B?"bg-green-950/10 border-green-500/20 text-green-400":$?"bg-indigo-500/5 border-indigo-500/10 text-slate-300":"bg-slate-100 border-slate-200 text-slate-955"}`,children:[E.jsx(wS,{className:`w-4 h-4 shrink-0 mt-0.5 ${B?"text-green-500":"text-emerald-600"}`}),E.jsxs("div",{className:"text-[11px] leading-relaxed",children:["You are designing ",E.jsx("span",{className:`font-bold ${B?"text-green-400":$?"text-indigo-400":"text-indigo-900 font-extrabold"}`,children:p.name}),"'s active active pod. Define directives securely below, or drag their terminal desk directly inside the grid view."]})]}),E.jsxs("div",{className:"space-y-3",children:[E.jsxs("div",{children:[E.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${B?"text-green-500":$?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Node Agent Name ",d&&"🔒"]}),E.jsx("input",{type:"text",required:!0,disabled:d,value:m,onChange:ee=>h(ee.target.value),className:`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:border-indigo-500 ${d?"bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed":B?"bg-black border-green-500/30 text-green-400 font-mono":$?"bg-slate-950/90 border-slate-700 text-white":"bg-white border-slate-200 text-slate-950 font-bold"}`,id:"inp-selected-agent-name"})]}),E.jsxs("div",{children:[E.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${B?"text-green-500":$?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Official Role Designation ",d&&"🔒"]}),E.jsx("input",{type:"text",required:!0,disabled:d,value:b,onChange:ee=>v(ee.target.value),className:`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:border-indigo-500 ${d?"bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed":B?"bg-black border-green-500/30 text-green-400 font-mono":$?"bg-slate-950/90 border-slate-700 text-white":"bg-white border-slate-200 text-slate-950 font-bold"}`,id:"inp-selected-agent-desig"})]}),E.jsxs("div",{children:[E.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${B?"text-green-500":$?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Avatar Color ",d&&"🔒"]}),E.jsx("div",{className:"flex gap-2 py-1 items-center",children:I_.map(ee=>E.jsx("button",{type:"button",disabled:d,onClick:()=>L(ee.hex),className:`w-6 h-6 rounded-full border transition-transform ${d?"cursor-not-allowed opacity-50":""} ${T===ee.hex?"scale-125 border-slate-200 ring-2 ring-indigo-500":"border-transparent"}`,style:{backgroundColor:ee.hex},title:ee.label},ee.hex))})]}),E.jsxs("div",{children:[E.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${B?"text-green-500":$?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Avatar Gender (Body Style) ",d&&"🔒"]}),E.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[E.jsx("button",{type:"button",disabled:d,onClick:()=>x("male"),className:`py-1.5 px-3 text-xs rounded border transition-all font-semibold uppercase ${d?"cursor-not-allowed opacity-50":""} ${y==="male"?B?"bg-green-600 text-black border-green-500":"bg-indigo-600 text-white border-indigo-500 shadow":B?"bg-black text-green-500 border-green-500/30 hover:bg-green-500/10":$?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 text-slate-805"}`,children:"♂ Male"}),E.jsx("button",{type:"button",disabled:d,onClick:()=>x("female"),className:`py-1.5 px-3 text-xs rounded border transition-all font-semibold uppercase ${d?"cursor-not-allowed opacity-50":""} ${y==="female"?B?"bg-green-600 text-black border-green-500":"bg-indigo-600 text-white border-indigo-500 shadow":B?"bg-black text-green-500 border-green-500/30 hover:bg-green-500/10":$?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"}`,children:"♀ Female"})]})]}),E.jsxs("div",{children:[E.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${B?"text-green-500":$?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Desk Rotation on Tile ",d&&"🔒"]}),E.jsx("div",{className:"grid grid-cols-4 gap-2",children:[0,90,180,270].map(ee=>E.jsxs("button",{type:"button",disabled:d,onClick:()=>O(ee),className:`py-1.5 px-1 text-xs rounded border transition-all font-semibold uppercase ${d?"cursor-not-allowed opacity-50":""} ${D===ee?B?"bg-green-600 text-black border-green-500":"bg-indigo-600 text-white border-indigo-500 shadow":B?"bg-black text-green-500 border-green-500/30 hover:bg-green-500/10":$?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"}`,children:[ee,"°"]},ee))})]}),E.jsxs("div",{children:[E.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${B?"text-green-500":$?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Core System Directive / Prompts Instructions ",d&&"🔒"]}),E.jsx("textarea",{required:!0,disabled:d,rows:6,value:g,onChange:ee=>S(ee.target.value),className:`w-full p-2.5 text-xs rounded border focus:outline-none focus:border-indigo-500 font-mono leading-relaxed ${d?"bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed":B?"bg-black border-green-500/30 text-green-400":$?"bg-slate-950/90 border-slate-700 text-white":"bg-white border-slate-200 text-slate-950 font-bold"}`,id:"inp-selected-agent-prompt"})]})]}),E.jsxs("div",{className:"flex gap-2 items-center justify-between pt-1",children:[E.jsxs("button",{type:"button",disabled:r.length<=1||d,onClick:()=>l(p.id),className:`flex items-center gap-1.5 px-3 py-2 rounded-md border text-[11px] font-bold uppercase transition-colors ${d||r.length<=1?"opacity-40 cursor-not-allowed border-slate-700 text-slate-550 bg-transparent":B?"border-red-500/30 text-red-400 hover:bg-red-500/10 font-mono":"border-red-600/30 text-red-400 hover:bg-red-600/10 bg-transparent"}`,id:"btn-delete-agent-pod",children:[d?E.jsx(eo,{className:"w-3 h-3"}):E.jsx(V_,{className:"w-3.5 h-3.5"}),"Deconstruct Pod"]}),E.jsxs("button",{type:"submit",disabled:d,className:`flex items-center gap-1.5 px-4 py-2 rounded-md font-bold text-[11px] uppercase transition-all ${d?"opacity-50 cursor-not-allowed bg-slate-800 border-slate-755 text-slate-400":B?"bg-green-600 text-black hover:bg-green-400 font-mono":"bg-indigo-600 text-white hover:bg-indigo-500"}`,id:"btn-save-agent-pod",children:[d?E.jsx(eo,{className:"w-3 h-3"}):E.jsx(H_,{className:"w-3.5 h-3.5"}),"Update Directives"]})]})]}):E.jsxs("div",{className:"text-center py-16 flex flex-col items-center justify-center",children:[E.jsx(Tx,{className:`w-8 h-8 mb-2 animate-bounce ${B?"text-green-500":"text-indigo-500"}`}),E.jsx("p",{className:`text-xs font-black ${B?"text-green-400 font-mono":$?"text-slate-300":"text-black"}`,children:"No worker node is selected."}),E.jsx("p",{className:`text-[11px] max-w-xs mt-1 leading-snug ${B?"text-green-500 font-mono":$?"text-slate-400":"text-slate-950 font-extrabold"}`,children:"Click any holographic terminal desk in the Canvas above to inspect and edit details."})]})]}),E.jsxs("div",{className:"text-[10px] text-slate-500 border-t border-dashed border-slate-800/60 pt-3 mt-4 text-center tracking-wide uppercase font-mono",children:["Active Node Register: ",r.length," Pods Online"]})]})}function Dw({text:r,timeMode:e="day"}){const i=e==="matrix",s=e==="night",l=i?"text-green-400 font-mono text-xs font-bold mt-3 mb-1 uppercase tracking-wide":s?"text-indigo-400 text-xs font-bold mt-3 mb-1 uppercase tracking-wide":"text-indigo-950 font-black text-xs mt-3 mb-1 uppercase tracking-wide",c=i?"text-green-300 font-mono text-sm font-extrabold mt-4 mb-2 uppercase tracking-wider":s?"text-indigo-300 text-sm font-extrabold mt-4 mb-2 uppercase tracking-wider":"text-indigo-900 font-black text-sm mt-4 mb-2 uppercase tracking-wider",d=i?"text-white font-mono text-base font-black mt-5 mb-3 border-b pb-1 border-green-500/20":s?"text-white text-base font-black mt-5 mb-3 border-b pb-1 border-indigo-500/20":"text-slate-950 text-base font-black mt-5 mb-3 border-b pb-1 border-slate-200",p=i?"border-l-4 border-green-500 bg-green-950/20 px-3 py-1.5 rounded text-green-300 italic my-2 font-mono text-[11px]":s?"border-l-4 border-indigo-500 bg-indigo-950/20 px-3 py-1.5 rounded text-slate-300 italic my-2 text-[11px]":"border-l-4 border-indigo-600 bg-indigo-50/60 px-3 py-1.5 rounded text-slate-900 font-medium italic my-2 text-[11px]",m=i?"text-green-500 font-bold":s?"text-indigo-400":"text-indigo-800 font-black",h=r.split(`
`);return E.jsx("div",{className:"space-y-2 text-xs leading-relaxed font-sans",children:h.map((b,v)=>{const g=b.trim();if(g.startsWith("### "))return E.jsx("h4",{className:l,children:g.substring(4)},v);if(g.startsWith("## "))return E.jsx("h3",{className:c,children:g.substring(3)},v);if(g.startsWith("# "))return E.jsx("h2",{className:d,children:g.substring(2)},v);if(g.startsWith("> "))return E.jsx("blockquote",{className:p,children:g.substring(2)},v);if(g.startsWith("```"))return null;if(g.startsWith("- ")||g.startsWith("* ")){const S=g.substring(2);return E.jsxs("div",{className:"flex items-start gap-2 pl-3",children:[E.jsx("span",{className:m,children:"•"}),E.jsx("span",{children:z_(S,e)})]},v)}return g?E.jsx("p",{children:z_(b,e)},v):E.jsx("div",{className:"h-2"},v)})})}function z_(r,e){const i=[];let s="",l=0;const c=e==="matrix",d=e==="night",p=c?"font-bold text-green-400 font-mono":d?"font-bold text-teal-400":"font-black text-indigo-900",m=c?"bg-black border border-green-500/25 px-1 py-0.5 rounded text-[11px] text-green-400 font-mono":d?"bg-slate-950 px-1 py-0.5 rounded text-[11px] text-green-400 font-mono":"bg-slate-200 border border-slate-300 px-1 py-0.5 rounded text-[11px] text-slate-950 font-semibold font-mono";for(;l<r.length;)if(r.substring(l,l+2)==="**"){s&&(i.push(s),s="");const h=r.indexOf("**",l+2);h!==-1?(i.push(E.jsx("strong",{className:p,children:r.substring(l+2,h)},l)),l=h+2):(s+="**",l+=2)}else if(r[l]==="`"){s&&(i.push(s),s="");const h=r.indexOf("`",l+1);h!==-1?(i.push(E.jsx("code",{className:m,children:r.substring(l+1,h)},l)),l=h+1):(s+="`",l+=1)}else s+=r[l],l++;return s&&i.push(s),i}function Nw(){const[r,e]=ke.useState("day"),[i,s]=ke.useState(12),[l,c]=ke.useState("3d"),[d,p]=ke.useState(!1),[m,h]=ke.useState(!1),[b,v]=ke.useState(!1),[g,S]=ke.useState(()=>localStorage.getItem("custom_gemini_api_key")||""),[T,L]=ke.useState(()=>{const V=localStorage.getItem("custom_gemini_model");return V==="gemini-3.5-flash"||V==="gemini-3.1-pro-preview"||V==="gemini-3.1-flash-lite"?V:"gemini-3.5-flash"});ke.useEffect(()=>{localStorage.setItem("custom_gemini_api_key",g)},[g]),ke.useEffect(()=>{localStorage.setItem("custom_gemini_model",T)},[T]);const[y,x]=ke.useState([]),[D,O]=ke.useState("startup-launcher"),[z,W]=ke.useState(!1),[I,H]=ke.useState(""),[A,G]=ke.useState(""),[ne,k]=ke.useState(""),[Q,me]=ke.useState(null),[ue,X]=ke.useState([]),[w,P]=ke.useState(!1),[B,$]=ke.useState(null),[ee,R]=ke.useState(0),[K,be]=ke.useState(null),[Re,Oe]=ke.useState(0),ce=ke.useRef(null),Ee=ke.useRef(!0);ke.useEffect(()=>{const V=localStorage.getItem("agent_workspace_teams_system");if(V)try{const te=JSON.parse(V);if(te.teams&&Array.isArray(te.teams)&&te.teams.length>0){x(te.teams),O(te.activeTeamId||"startup-launcher"),s(te.gridSize||12),e(te.timeMode||"day"),te.history&&X(te.history);return}}catch(te){console.error("Failed to restore teams from localStorage",te)}x(Ud),O(Ud[0].id)},[]);const _e=(V,te,oe,Z,re)=>{const Ce={teams:V,activeTeamId:te,history:oe,gridSize:Z,timeMode:re};localStorage.setItem("agent_workspace_teams_system",JSON.stringify(Ce))},Pe=y.find(V=>V.id===D)||y[0]||Ud[0],Ve=(Pe==null?void 0:Pe.agents)||[],qe=(Pe==null?void 0:Pe.decorItems)||[],Ke=(Pe==null?void 0:Pe.objective)||"",lt=w||Ve.some(V=>V.state!=="idle");ke.useEffect(()=>{Ve.length>0?(me(Ve[0].id),$(Ve[0].id)):(me(null),$(null))},[D]);const st=V=>{x(te=>te.map(oe=>({...oe,agents:oe.agents.map(Z=>({...Z,state:"idle"}))}))),O(V),P(!1),be(null),_e(y,V,ue,i,r)},vt=V=>{if(V.preventDefault(),!I.trim()||!A.trim())return;if(y.length>=10){alert("Operational Cap Reached: Max 10 custom agencies allowed.");return}const te=`team-custom-${Date.now()}`,oe={id:te,name:I,description:ne||"Custom configured multi-agent syndicate.",objective:A,decorItems:[],agents:[{id:`ag-boss-${Date.now()}`,name:"Supervisor Alpha",designation:"Project Coordinator",systemPrompt:"You are the manager coordinator. Delegate tasks and summarize active deliverables cleanly.",gridPosition:{x:Math.floor(i/2),z:Math.floor(i/2)},avatarColor:"#60a5fa",state:"idle"}]},Z=[...y,oe];x(Z),O(te),W(!1),H(""),G(""),k(""),_e(Z,te,ue,i,r)},pt=V=>{if(y.length<=1){alert("Failed operational cleanup: You must preserve at least 1 active team.");return}const te=y.filter(Z=>Z.id!==V);x(te);const oe=te[0].id;O(oe),P(!1),_e(te,oe,ue,i,r)},qt=V=>{const te=Math.max(10,Math.min(30,V));s(te);const oe=y.map(Z=>{const re=Z.agents.map(Se=>{const Me=Math.min(te-1,Se.gridPosition.x),Ne=Math.min(te-1,Se.gridPosition.z);return{...Se,gridPosition:{x:Me,z:Ne}}}),Ce=(Z.decorItems||[]).map(Se=>{const Me=Math.min(te-1,Se.x),Ne=Math.min(te-1,Se.z);return{...Se,x:Me,z:Ne}});return{...Z,agents:re,decorItems:Ce}});x(oe),_e(oe,D,ue,te,r)},Be=(V,te,oe)=>{const Z=y.map(re=>{if(re.id===D){const Ce=re.agents.map(Se=>Se.id===V?{...Se,gridPosition:{x:te,z:oe}}:Se);return{...re,agents:Ce}}return re});x(Z),_e(Z,D,ue,i,r)},_t=V=>{const te=y.map(oe=>{if(oe.id===D){const Z=oe.decorItems||[];return{...oe,decorItems:[...Z,V]}}return oe});x(te),_e(te,D,ue,i,r)},j=V=>{const te=y.map(oe=>{if(oe.id===D){const Z=oe.decorItems||[];return{...oe,decorItems:Z.filter(re=>re.id!==V)}}return oe});x(te),_e(te,D,ue,i,r)},Ye=V=>{if(lt){alert("🔒 Security Lockdown: Cannot modify employee configuration or directives while task execution is active.");return}const te=y.map(oe=>{if(oe.id===D){const Z=oe.agents.map(re=>re.id===V.id?V:re);return{...oe,agents:Z}}return oe});x(te),_e(te,D,ue,i,r)},rt=V=>{if(lt){alert("🔒 Security Lockdown: Cannot instantiate new worker nodes while task execution is active.");return}if(Ve.length>=15){alert("Operational Cap Reached: Max 15 agents allowed per team.");return}const te={...V,state:"idle"},oe=y.map(Z=>Z.id===D?{...Z,agents:[...Z.agents,te]}:Z);x(oe),me(te.id),_e(oe,D,ue,i,r)},Qe=V=>{var re,Ce;if(lt){alert("🔒 Security Lockdown: Cannot deconstruct or remove employees while task execution is active.");return}if(Ve.length<=1){alert("Action Aborted: A team must have at least 1 agent.");return}const te=y.map(Se=>{if(Se.id===D){const Me=Se.agents.filter(Ne=>Ne.id!==V);return{...Se,agents:Me}}return Se});x(te);const oe=te.find(Se=>Se.id===D),Z=(oe==null?void 0:oe.agents)||[];me(((re=Z[0])==null?void 0:re.id)||null),B===V&&$(((Ce=Z[0])==null?void 0:Ce.id)||null),_e(te,D,ue,i,r)},we=V=>{const te=y.map(oe=>oe.id===D?{...oe,objective:V}:oe);x(te),_e(te,D,ue,i,r)};ke.useEffect(()=>{var V;if(Ee.current){const te=setTimeout(()=>{Ee.current=!1},1e3);return()=>clearTimeout(te)}(V=ce.current)==null||V.scrollIntoView({behavior:"smooth"})},[ue,w]);const nt=async()=>{if(Ve.length===0)return;if(Re>=15){be("⚠️ Autonomous Safety Cutoff: Stopped at 15 consecutive simulation steps to prevent infinite loop billing or runaway agent execution. Click 'Run' to resume."),P(!1),x(te=>te.map(oe=>oe.id===D?{...oe,agents:oe.agents.map(Z=>({...Z,state:"idle"}))}:oe));return}const V=B||Ve[0].id;be(null),x(te=>te.map(oe=>{if(oe.id===D){const Z=oe.agents.map(re=>({...re,state:re.id===V?"thinking":"idle"}));return{...oe,agents:Z}}return oe}));try{const te=await fetch("/api/simulate-step",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({objective:Ke,currentAgentId:V,agents:Ve,history:ue,customApiKey:g,customModel:T})}),oe=te.headers.get("content-type")||"";let Z;if(!te.ok)if(oe.includes("application/json")){const Se=await te.json();throw new Error(Se.error||`Server responded with status ${te.status}`)}else{const Me=(await te.text()).match(/<title>([\s\S]*?)<\/title>/i),Ne=Me?Me[1].trim():"";throw new Error(`Server Error (HTTP ${te.status})${Ne?`: "${Ne}"`:""}`)}if(oe.includes("application/json"))Z=await te.json();else{const Se=await te.text();throw new Error(`Expected JSON but got content-type "${oe}": ${Se.substring(0,100)}`)}if(Z.error)throw new Error(Z.error);const re={id:`msg-${Date.now()}`,text:Z.text,senderId:Z.senderId,senderName:Z.senderName,senderDesignation:Z.senderDesignation,delegateId:Z.delegateId,delegationReason:Z.delegationReason,timestamp:new Date().toLocaleTimeString()},Ce=[...ue,re];if(X(Ce),R(Se=>Se+1),Oe(Se=>Se+1),Z.delegateId)if(Ve.some(Me=>Me.id===Z.delegateId))x(Me=>Me.map(Ne=>{if(Ne.id===D){const Je=Ne.agents.map(Fe=>({...Fe,state:Fe.id===Z.delegateId?"walking":"idle"}));return{...Ne,agents:Je}}return Ne})),$(Z.delegateId);else{const Ne=(Ve.findIndex(Je=>Je.id===V)+1)%Ve.length;$(Ve[Ne].id)}else x(Se=>Se.map(Me=>{if(Me.id===D){const Ne=Me.agents.map(Je=>({...Je,state:"idle"}));return{...Me,agents:Ne}}return Me})),P(!1);_e(y,D,Ce,i,r)}catch(te){console.error(te),be((te==null?void 0:te.message)||"Verify your API Key setting and workspace status."),P(!1),x(oe=>oe.map(Z=>{if(Z.id===D){const re=Z.agents.map(Ce=>({...Ce,state:"idle"}));return{...Z,agents:re}}return Z}))}};ke.useEffect(()=>{let V=null;return w&&(V=setTimeout(()=>{nt()},3500)),()=>clearTimeout(V)},[w,B]),ke.useEffect(()=>{w||Oe(0)},[w]);const U=()=>{const V="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"1.0.0",timeMode:r,gridSize:i,teams:y,activeTeamId:D,history:ue},null,2)),te=document.createElement("a");te.setAttribute("href",V),te.setAttribute("download",`teams-blueprint-${Date.now()}.json`),document.body.appendChild(te),te.click(),te.remove()},M=V=>{const te=new FileReader;V.target.files&&V.target.files[0]&&(te.readAsText(V.target.files[0],"UTF-8"),te.onload=oe=>{var Z;try{const re=JSON.parse((Z=oe.target)==null?void 0:Z.result);re.teams&&Array.isArray(re.teams)&&(x(re.teams),O(re.activeTeamId||re.teams[0].id),s(re.gridSize||12),e(re.timeMode||"day"),re.history&&X(re.history),alert("Workspace blueprint imported successfully!"))}catch{alert("Invalid model layout blueprint file. Make sure file structure is valid.")}})},F=r==="matrix",ie=r==="night";return E.jsxs("div",{className:`min-h-screen font-sans flex flex-col justify-between transition-colors duration-300 ${F?"bg-[#040806] text-green-300 selection:bg-green-500/20":ie?"bg-[#0b0d16] text-slate-200 selection:bg-indigo-500/20":"bg-[#f8f9fa] text-slate-800 selection:bg-indigo-100"}`,children:[E.jsxs("header",{className:`px-6 py-4 border-b flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${F?"border-green-500/15 bg-[#040806]/90":ie?"border-slate-900 bg-[#0b0d16]/95":"border-slate-200 bg-white"}`,children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:`p-1.5 rounded-lg ${F?"bg-green-950/40 text-green-400 border border-green-500/20":ie?"bg-slate-900 border border-slate-800 text-indigo-400":"bg-slate-100 text-slate-700"}`,children:E.jsx(Ex,{className:"w-5 h-5"})}),E.jsxs("div",{children:[E.jsx("h1",{className:"text-sm font-bold tracking-tight",children:"Pacific Mind Teams"}),E.jsx("p",{className:"text-[10px] text-slate-500 font-mono",children:"3D ISOMETRIC MULTI-AGENT SWARM BLUEPRINT"})]})]}),E.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[E.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[11px] font-mono ${F?"border-green-500/20 bg-black":"border-slate-800 bg-[#121626]/45"}`,children:[E.jsx(CS,{className:"w-3.5 h-3.5 text-indigo-400"}),E.jsxs("span",{children:["GRID: ",i,"x",i]}),E.jsx("input",{type:"range",min:10,max:30,value:i,onChange:V=>qt(Number(V.target.value)),className:"w-16 accent-indigo-500 cursor-pointer h-1"})]}),E.jsxs("div",{className:"flex items-center p-1 rounded-lg border border-slate-800/40 bg-[#12162a]/40",children:[E.jsx("button",{onClick:()=>e("day"),className:`p-1 text-slate-400 hover:text-white rounded ${r==="day"?"bg-white text-yellow-600 shadow-sm":"text-slate-400"}`,title:"Day Mode Shift",id:"time-day",children:E.jsx(OS,{className:"w-3.5 h-3.5"})}),E.jsx("button",{onClick:()=>e("night"),className:`p-1 text-slate-400 hover:text-white rounded ${r==="night"?"bg-slate-800 text-indigo-400":"text-slate-400"}`,title:"Night Mode Shift",id:"time-night",children:E.jsx(dS,{className:"w-3.5 h-3.5"})}),E.jsx("button",{onClick:()=>e("matrix"),className:`px-1.5 py-0.5 text-[9px] font-bold rounded ${r==="matrix"?"bg-green-950/80 text-green-400":"text-slate-500 font-mono"}`,title:"Cyber matrix mode",id:"time-matrix",children:"MTX"})]}),E.jsxs("div",{className:"flex items-center gap-1",children:[E.jsxs("button",{onClick:()=>h(!0),className:`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${F?"bg-green-500/10 text-green-300 border-green-500/40 hover:bg-green-500/20":"bg-indigo-550/15 border-indigo-500/30 text-indigo-400 hover:bg-indigo-550/25"}`,title:"Get Step-by-Step Info & Team Guide",id:"btn-help-guide",children:[E.jsx(F_,{className:"w-3.5 h-3.5"}),E.jsx("span",{className:"hidden sm:inline text-[10px] tracking-wide uppercase font-mono",children:"Guide"})]}),E.jsxs("button",{onClick:()=>v(!0),className:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${F?"bg-green-500/10 text-green-300 border-green-500/40 hover:bg-green-500/20":"bg-indigo-550/15 border-indigo-500/30 text-indigo-400 hover:bg-indigo-550/25"}`,title:"Configure API Keys & Select Gemini Model",id:"btn-llm-settings",children:[E.jsx(TS,{className:"w-3.5 h-3.5"}),E.jsx("span",{className:"hidden sm:inline text-[10px] tracking-wide uppercase font-mono",children:"Models & API Key"})]}),E.jsx("button",{onClick:U,className:"p-1.5 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors",title:"Export blueprint configuration",id:"btn-export-json",children:E.jsx(eS,{className:"w-3.5 h-3.5"})}),E.jsxs("label",{className:"p-1.5 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer",title:"Import local configuration",id:"lbl-import-json",children:[E.jsx(nS,{className:"w-3.5 h-3.5"}),E.jsx("input",{type:"file",accept:".json",onChange:M,className:"hidden"})]})]})]})]}),E.jsxs("section",{className:`px-6 py-2.5 border-b flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-colors ${F?"bg-black/90 border-green-500/10":ie?"bg-[#101323]/50 border-slate-900":"bg-slate-100 border-slate-200"}`,children:[E.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[E.jsx("span",{className:`text-[9px] font-extrabold tracking-widest uppercase font-mono mr-1 ${F?"text-green-500":ie?"text-slate-500":"text-slate-800 font-extrabold"}`,children:"ACTIVE SYNDICATE:"}),E.jsxs("div",{className:"flex flex-wrap gap-1",children:[y.map(V=>E.jsx("button",{onClick:()=>st(V.id),className:`px-3 py-1 text-[11px] rounded transition-all font-bold ${D===V.id?F?"bg-green-500/20 text-green-400 border border-green-500/40":"bg-[#1d233d] border border-indigo-500/30 text-white shadow":F?"text-green-500 hover:text-green-300 border border-transparent":ie?"text-slate-400 hover:text-white border border-transparent":"text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-transparent"}`,id:`team-${V.id}`,children:V.name},V.id)),y.length<10&&E.jsx("button",{onClick:()=>W(!0),className:`px-2 py-1 text-[10px] rounded font-bold border border-dashed transition-all ${F?"text-green-400 border-green-500/20 hover:text-green-300":ie?"text-teal-400 border-teal-500/20 hover:text-teal-300":"text-teal-800 border-teal-300 bg-teal-50 hover:bg-teal-100 hover:text-teal-900"}`,id:"btn-add-team",children:"+ Create Team"})]})]}),y.length>1&&E.jsxs("button",{onClick:()=>pt(D),className:"text-[9px] uppercase font-bold text-rose-500 hover:text-rose-400 tracking-wider flex items-center gap-1 select-none",id:"btn-decon-team",children:[E.jsx(V_,{className:"w-3 h-3"}),"Delete team"]})]}),z&&E.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4",children:E.jsxs("form",{onSubmit:vt,className:`w-full max-w-sm p-5 rounded-xl border ${F?"border-green-500/30 bg-black text-green-300":"border-slate-800 bg-[#0f111a] text-white"} shadow-2xl`,children:[E.jsxs("h3",{className:"text-xs font-extrabold uppercase tracking-widest mb-4 flex items-center gap-2",children:[E.jsx(aS,{className:"w-4 h-4 text-indigo-400"}),"Configure Custom Agency Team"]}),E.jsxs("div",{className:"space-y-3.5 text-xs",children:[E.jsxs("div",{children:[E.jsx("label",{className:"block text-[9px] uppercase font-bold text-slate-500 mb-1",children:"Agency Name"}),E.jsx("input",{type:"text",required:!0,placeholder:"e.g. BioTech Diagnostics Group",value:I,onChange:V=>H(V.target.value),className:"w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-[9px] uppercase font-bold text-slate-500 mb-1 font-mono",children:"System Objective Goal"}),E.jsx("input",{type:"text",required:!0,placeholder:"e.g. Synthesize chemical breakdown matrices",value:A,onChange:V=>G(V.target.value),className:"w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-[9px] uppercase font-bold text-slate-500 mb-1",children:"Brief Description"}),E.jsx("textarea",{placeholder:"What is this agency group mostly about?",rows:2,value:ne,onChange:V=>k(V.target.value),className:"w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"})]})]}),E.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[E.jsx("button",{type:"button",onClick:()=>W(!1),className:"px-3 py-1.5 text-[10px] font-bold text-slate-400 hover:text-white",children:"Cancel"}),E.jsx("button",{type:"submit",className:"px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600 rounded hover:bg-indigo-500",children:"Spawn Team"})]})]})}),E.jsxs("main",{className:"flex-1 max-w-[1700px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",children:[E.jsxs("section",{className:"lg:col-span-8 flex flex-col gap-5",children:[E.jsxs("div",{className:`p-4 rounded-xl border ${F?"border-green-500/10 bg-black/60":ie?"border-slate-900 bg-[#0c0e18]":"border-slate-200 bg-white"}`,children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("span",{className:"text-[9px] font-extrabold tracking-widest text-[#6366f1] block uppercase font-mono",children:"Active Collective Goal Objective"}),E.jsx("span",{className:"text-[9px] opacity-60 font-mono italic",children:Pe.description})]}),E.jsx("input",{type:"text",placeholder:"State a collective goal for the multi-agent swarm...",value:Ke,onChange:V=>we(V.target.value),className:`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-indigo-500 ${F?"bg-black border-green-500/20 text-green-300 placeholder:text-green-920 font-mono":ie?"bg-[#0b0c14] text-white border-slate-900":"bg-slate-50 border-slate-200 text-slate-800"}`,id:"inp-collective-objective"})]}),E.jsxs("div",{className:"flex-1 flex flex-col gap-3 min-h-[460px] relative",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsxs("div",{className:`flex items-center gap-1 p-1 rounded-lg border ${F?"bg-black border-green-500/20":ie?"bg-[#0b0d16]/30 border-slate-800/40":"bg-slate-100 border-slate-200"}`,children:[E.jsxs("button",{onClick:()=>c("2d"),className:`px-3 py-1 text-[11px] font-bold rounded transition-all duration-150 flex items-center gap-1 ${l==="2d"?"bg-indigo-600 text-white font-extrabold shadow":F?"text-green-500 hover:text-green-300":ie?"text-slate-400 hover:text-white":"text-slate-700 hover:text-slate-950 hover:bg-slate-200/55"}`,id:"tab-2d",children:[E.jsx(G_,{className:"w-3 h-3"}),"2D Placement Planner"]}),E.jsxs("button",{onClick:()=>c("3d"),className:`px-3 py-1 text-[11px] font-bold rounded transition-all duration-150 flex items-center gap-1 ${l==="3d"?"bg-indigo-600 text-white font-extrabold shadow":F?"text-green-500 hover:text-green-300":ie?"text-slate-400 hover:text-white":"text-slate-700 hover:text-slate-950 hover:bg-slate-200/55"}`,id:"tab-3d",children:[E.jsx(Ex,{className:"w-3 h-3"}),"Interactive 3D Simulated Space"]})]}),E.jsxs("div",{className:"flex items-center gap-3",children:[l==="3d"&&E.jsxs("button",{onClick:()=>p(!0),className:`flex items-center gap-1.5 px-3 py-1 text-[10px] rounded border transition-all font-bold uppercase tracking-wider ${F?"bg-green-500/10 text-green-450 border-green-500/35 hover:bg-green-500/20":"bg-teal-500/15 border-teal-500/35 text-teal-400 hover:bg-teal-500/25 shadow-sm"}`,id:"btn-enlarge-3d",children:[E.jsx(lS,{className:"w-3 h-3"}),"Enlarge 3D View"]}),E.jsxs("div",{className:"text-[10px] font-mono text-slate-500 flex items-center gap-1.5",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"}),E.jsxs("span",{children:["GRID SPACE SIZE: ",i,"x",i]})]})]})]}),E.jsx("div",{className:"flex-1 min-h-[415px]",children:l==="2d"?E.jsx(HS,{agents:Ve,decorItems:qe,onUpdateAgentPosition:Be,onAddDecorItem:_t,onRemoveDecorItem:j,gridSize:i,timeMode:r}):E.jsx(P_,{agents:Ve,decorItems:qe,gridSize:i,timeMode:r,messages:ue,currentAgentId:B})})]}),E.jsxs("div",{className:`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${F?"border-green-500/10 bg-black/80":ie?"border-slate-900 bg-[#0c0e18]":"border-slate-200 bg-white"}`,children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("button",{onClick:()=>{const V=!w;P(V),be(null),V||x(te=>te.map(oe=>oe.id===D?{...oe,agents:oe.agents.map(Z=>({...Z,state:"idle"}))}:oe))},disabled:Ve.length===0,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer select-none ${w?"bg-rose-650 hover:bg-rose-700 text-white":F?"bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20":"bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"}`,id:"btn-run-loop",children:w?E.jsxs(E.Fragment,{children:[E.jsx(US,{className:"w-3.5 h-3.5 fill-white"}),"Pause Swarm"]}):E.jsxs(E.Fragment,{children:[E.jsx(mS,{className:"w-3.5 h-3.5 fill-white"}),"Run Autonomous Loop"]})}),E.jsxs("button",{onClick:nt,disabled:w||Ve.length===0,className:`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${w?"opacity-30 cursor-not-allowed":F?"border-green-500/20 text-green-400":"border-slate-850 hover:bg-slate-900 text-slate-300"}`,title:"Force single task handoff step",id:"btn-step",children:[E.jsx(Mx,{className:"w-3.5 h-3.5"}),"Step Turn"]}),E.jsx("button",{onClick:()=>{X([]),R(0),P(!1),be(null),x(V=>V.map(te=>({...te,agents:te.agents.map(oe=>({...oe,state:"idle"}))}))),_e(y,D,[],i,r)},className:"p-2 text-slate-500 hover:text-white rounded border border-slate-800/60 hover:bg-slate-900/40",title:"Clear logs history",id:"btn-reset-logs",children:E.jsx(yS,{className:"w-3.5 h-3.5"})})]}),E.jsxs("div",{className:"flex items-center gap-4 text-[11px] font-mono",children:[E.jsxs("div",{className:"flex items-center gap-1.5 text-slate-400",children:[E.jsx(Ky,{className:"w-3.5 h-3.5 text-indigo-400"}),E.jsxs("span",{children:["TURNS EXECUTED: ",E.jsx("strong",{className:"text-teal-400",children:ee})]})]}),E.jsxs("div",{className:"flex items-center gap-1.5 border-l border-slate-800 pl-4",children:[E.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),E.jsxs("span",{className:"uppercase text-[9px] text-slate-500 tracking-wider",children:["Swarm State: ",w?"Active Pipeline Processing":"Holding at Desks"]})]})]})]}),E.jsxs("div",{className:`p-5 rounded-xl border flex flex-col gap-4 ${F?"border-green-500/15 bg-black text-green-400":ie?"border-slate-800 bg-[#0c0e18]":"border-slate-200 bg-white text-slate-800"}`,id:"employee-roster-console",children:[E.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-dashed border-slate-800/60",children:[E.jsxs("div",{children:[E.jsx("span",{className:`text-[9px] tracking-[0.2em] font-extrabold uppercase block font-mono ${F?"text-green-500":"text-indigo-400"}`,children:"Core Syndicate Personnel"}),E.jsx("h3",{className:"text-sm font-bold tracking-tight",children:"Active Employee directory"})]}),E.jsx("div",{className:`text-[10px] font-mono px-2 py-0.5 rounded border ${lt?"border-rose-500/35 bg-rose-500/10 text-rose-400":"border-teal-500/35 bg-teal-500/10 text-teal-400"}`,children:lt?"🔒 Neural Link Secured":"🔓 Edit/Delete Online"})]}),E.jsxs("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:["Below is the list of active AI workers in the current syndicate. Click ",E.jsx("strong",{className:"text-indigo-400",children:"Configure"})," to select that agent and customize directives in the Construction pod on the right sidebar, or deconstruct their node from the office grid entirely."]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 col-span-full",children:Ve.map(V=>{const te=Q===V.id,oe=(()=>{switch(V.state){case"typing":return{text:"Typing...",color:"bg-indigo-400"};case"thinking":return{text:"Thinking...",color:"bg-cyan-400 animate-pulse"};case"walking":return{text:"Moving...",color:"bg-amber-400 animate-sine"};default:return{text:"Ready",color:"bg-emerald-500"}}})();return E.jsxs("div",{className:`p-3 rounded-xl border flex flex-col justify-between transition-all relative ${te?F?"border-green-500 bg-green-500/5 shadow hover:scale-[1.01]":"border-indigo-500 bg-[#141829]/70 shadow hover:scale-[1.01]":F?"border-green-500/10 bg-slate-950/20 hover:border-green-500/30":ie?"border-slate-800/60 bg-slate-900/10 hover:border-slate-700/60":"border-slate-200 bg-slate-50 hover:border-slate-300"}`,children:[E.jsxs("div",{className:"flex items-start justify-between gap-1 mb-2.5",children:[E.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[E.jsxs("div",{className:"w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold text-slate-950 relative uppercase shrink-0",style:{backgroundColor:V.avatarColor||"#6366f1"},children:[V.name.substring(0,2),E.jsx("span",{className:"absolute -bottom-0.5 -right-0.5 text-[8px] bg-slate-950 text-white rounded-full w-3 h-3 flex items-center justify-center border border-slate-900 leading-none",children:V.gender==="female"?"♀":"♂"})]}),E.jsxs("div",{className:"min-w-0",children:[E.jsx("h4",{className:"font-bold text-xs truncate",title:V.name,children:V.name}),E.jsx("p",{className:"text-[9px] text-slate-500 truncate",title:V.designation,children:V.designation})]})]}),E.jsxs("span",{className:"flex items-center gap-1 text-[8px] font-mono whitespace-nowrap bg-slate-950/70 px-1.5 py-0.5 rounded-full border border-slate-900",children:[E.jsx("span",{className:`w-1 h-1 rounded-full ${oe.color}`}),E.jsx("span",{className:"text-slate-400",children:oe.text})]})]}),E.jsxs("p",{className:"text-[9px] text-slate-500 italic line-clamp-2 leading-relaxed mb-3 pr-1",children:["“",V.systemPrompt,"”"]}),E.jsxs("div",{className:"grid grid-cols-2 gap-1.5 pt-2 mt-auto border-t border-dashed border-slate-900/60 font-sans",children:[E.jsxs("button",{onClick:()=>{me(V.id),$(V.id);const Z=document.getElementById("agent-workspace-pod-builder");Z&&Z.scrollIntoView({behavior:"smooth"})},className:`py-1 px-1.5 rounded text-[9px] font-extrabold uppercase transition-all tracking-wider flex items-center justify-center gap-1 cursor-pointer ${te?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm":F?"border border-green-550/30 text-green-400 hover:bg-green-500/10":"border border-slate-800 bg-[#0f111e]/55 hover:bg-slate-900 text-slate-300"}`,title:"Edit directives on right panel",id:`btn-roster-edit-${V.id}`,children:[E.jsx(H_,{className:"w-2.5 h-2.5 text-indigo-400 shrink-0"}),"Configure"]}),E.jsxs("button",{onClick:()=>Qe(V.id),disabled:lt||Ve.length<=1,className:`py-1 px-1.5 rounded text-[9px] font-extrabold uppercase transition-all tracking-wider flex items-center justify-center gap-1 ${lt||Ve.length<=1?"opacity-30 cursor-not-allowed text-slate-650 border border-slate-900 bg-transparent":"border border-rose-500/20 text-rose-450 hover:bg-rose-500/10 hover:border-rose-500/40 cursor-pointer"}`,title:lt?"Lock active during execution":"Remove from pod",id:`btn-roster-delete-${V.id}`,children:[lt?E.jsx(eo,{className:"w-2.5 h-2.5 text-rose-400 shrink-0"}):E.jsx(GS,{className:"w-2.5 h-2.5 text-rose-400 shrink-0"}),"Deconstruct"]})]})]},V.id)})}),lt&&E.jsxs("div",{className:"text-[10px] text-amber-500/80 font-mono flex items-center gap-1.5 mt-1",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"}),E.jsx("span",{children:"Console lock engaged. Finish actively running turns to make staff additions, adjustments or deconstructions."})]})]}),K&&E.jsxs("div",{className:"p-3.5 rounded-lg border border-red-500/10 bg-red-950/20 text-red-300 text-xs flex items-start gap-2.5",children:[E.jsx(BS,{className:"w-4 h-4 shrink-0 text-red-400 mt-0.5"}),E.jsxs("div",{children:[E.jsx("p",{className:"font-bold text-red-400",children:"Swarm Execution Exception"}),E.jsx("p",{className:"font-mono leading-relaxed mt-0.5",children:K}),E.jsxs("p",{className:"mt-1 text-slate-500 text-[10px]",children:["Requires active ",E.jsx("strong",{children:"GEMINI_API_KEY"})," secret inside your AI Studio Workspace Secrets panel."]})]})]})]}),E.jsxs("section",{className:"lg:col-span-4 flex flex-col gap-5",children:[E.jsx("div",{className:"min-h-[380px]",children:E.jsx(Cw,{agents:Ve,selectedAgentId:Q,onUpdateAgent:Ye,onAddAgent:rt,onDeleteAgent:Qe,timeMode:r,isBusy:lt})}),E.jsxs("div",{className:`p-4 rounded-xl border flex flex-col h-[400px] justify-between ${F?"border-green-500/15 bg-black":ie?"border-slate-900 bg-[#0c0e18]":"border-slate-200 bg-white"}`,id:"global-transcript-console",children:[E.jsxs("div",{className:`flex items-center justify-between pb-2 border-b border-dashed mb-2 ${F?"border-green-500/15":ie?"border-slate-800/60":"border-slate-200"}`,children:[E.jsxs("div",{className:"flex items-center gap-1.5",children:[E.jsx(Ax,{className:`w-3.5 h-3.5 ${F?"text-green-400":ie?"text-indigo-400":"text-indigo-900"}`}),E.jsx("h2",{className:`font-bold text-[10px] tracking-wider uppercase ${F||ie?"":"text-slate-900"}`,children:"Operational logs"})]}),E.jsx("span",{className:`text-[8px] font-mono opacity-50 block uppercase ${F||ie?"":"text-slate-600 font-bold"}`,children:"UTX Pipeline Connected"})]}),E.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1 text-[11px] font-sans",children:[ue.length===0?E.jsxs("div",{className:"text-center py-20 opacity-40 flex flex-col items-center",children:[E.jsx(Ax,{className:"w-7 h-7 mb-1.5 opacity-30 text-teal-400"}),E.jsx("p",{className:"font-bold text-[11px]",children:"Collective Stream Dormant."}),E.jsx("p",{className:"text-[9px] text-slate-500 max-w-[200px] leading-tight mt-1",children:"Set a collective goal, select the active team, and run the pipeline turns loop!"})]}):ue.map(V=>E.jsxs("div",{className:`p-3 rounded-lg border transition-all ${F?"border-green-500/10 bg-black":ie?"border-[#1c223c]/40 bg-[#101323]/40":"border-slate-200 bg-slate-50 shadow-sm"}`,children:[E.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[E.jsxs("div",{className:"flex items-center gap-1.5",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),E.jsx("span",{className:`font-extrabold text-[11.5px] ${F?"text-green-450":ie?"text-white":"text-slate-950 font-black"}`,children:V.senderName}),E.jsx("span",{className:`text-[8px] font-mono px-1.5 py-0.5 rounded outline-none border-none ${F?"bg-green-950/40 text-green-400":ie?"bg-indigo-950/45 text-indigo-305":"bg-indigo-100 text-indigo-900 font-extrabold"}`,children:V.senderDesignation})]}),E.jsx("span",{className:`text-[9px] font-mono ${F||ie?"text-slate-500":"text-slate-700"}`,children:V.timestamp})]}),E.jsx("div",{className:`space-y-3 leading-normal font-mono text-[11px] overflow-x-auto whitespace-pre-wrap ${F?"text-green-300":ie?"text-slate-300":"text-slate-950 font-black"}`,children:E.jsx(Dw,{text:V.text,timeMode:r})}),V.delegateId&&E.jsxs("div",{className:`mt-2.5 pt-2 border-t border-dashed flex items-start gap-1 text-[9px] ${F?"border-green-500/10 text-green-500":ie?"border-slate-800/60 text-slate-400":"border-slate-200 text-slate-700"}`,children:[E.jsx(Mx,{className:`w-3 h-3 shrink-0 mt-0.5 ${F?"text-green-500":ie?"text-indigo-400":"text-indigo-900"}`}),E.jsxs("div",{className:"italic",children:["Handed Turn Context to: ",E.jsx("strong",{className:`font-mono italic ${F?"text-green-450":ie?"text-indigo-400":"text-indigo-900 font-black"}`,children:V.delegationReason})]})]})]},V.id)),w&&E.jsxs("div",{className:"p-3 rounded-lg border border-dashed border-indigo-500/20 bg-indigo-950/5 animate-pulse",children:[E.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[E.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"}),E.jsx("span",{className:"text-[10px] text-amber-400 font-mono tracking-wider uppercase select-none",children:"AI agent thinking step ..."})]}),E.jsx("div",{className:"h-1.5 bg-slate-800/80 rounded w-5/6 mb-1"}),E.jsx("div",{className:"h-1.5 bg-slate-800/80 rounded w-1/3"})]}),E.jsx("div",{ref:ce})]}),E.jsx("div",{className:"pt-2 mt-2 border-t border-dashed border-slate-800/40",children:E.jsx("input",{type:"text",placeholder:"Over-write agent context manually...",onKeyDown:V=>{if(V.key==="Enter"&&V.currentTarget.value){const te=V.currentTarget.value,oe={id:`msg-human-${Date.now()}`,text:`### [Manual Override Directive] 

${te}`,senderId:"commander",senderName:"Director (You)",senderDesignation:"Swarm Director",delegateId:B||(Ve[0]?Ve[0].id:null),delegationReason:"Manual override execution protocol active",timestamp:new Date().toLocaleTimeString()},Z=[...ue,oe];X(Z),V.currentTarget.value="",_e(y,D,Z,i,r)}},className:`w-full px-2.5 py-1.5 text-[10px] rounded border focus:outline-none focus:border-indigo-400 ${F?"bg-black border-green-500/20 text-green-300 font-mono placeholder:text-green-920":ie?"bg-[#0c0d14] text-white border-slate-900 placeholder:text-slate-600 font-mono":"bg-slate-50 border-slate-200 text-slate-800"}`,id:"inp-manual-inject"})})]})]})]}),E.jsxs("footer",{className:`px-6 py-3 border-t text-center text-[9px] tracking-wider transition-colors uppercase ${F?"border-green-500/10 bg-black text-green-650 font-mono":ie?"border-slate-950 bg-slate-950/20 text-slate-650":"border-slate-200 bg-white text-slate-400"}`,children:["TASK ORCHESTRATION GROUNDED CONTROL SYSTEM • STYLIZED ISOMETRIC ENVIRONMENT • ",new Date().getFullYear()," UTC"]}),d&&E.jsxs("div",{className:`fixed inset-0 z-50 flex flex-col p-4 md:p-6 backdrop-blur-md transition-all ${F?"bg-black/95 text-green-300":ie?"bg-[#0b0d16]/95 text-slate-200":"bg-white/95 text-slate-800"}`,children:[E.jsxs("div",{className:`flex items-center justify-between mb-4 pb-3 border-b ${F?"border-green-500/20":ie?"border-slate-900":"border-slate-200"}`,children:[E.jsxs("div",{children:[E.jsx("span",{className:`text-[9px] tracking-[0.25em] font-extrabold uppercase font-mono block ${F?"text-green-500":"text-indigo-400"}`,children:"Swarm Environment Inspection"}),E.jsx("h2",{className:"text-sm font-bold tracking-tight",children:"Grounded 3D Office Workspace Overview"})]}),E.jsxs("button",{onClick:()=>p(!1),className:"flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-rose-500 bg-rose-650 text-white font-bold uppercase tracking-wider hover:bg-rose-700 transition-all shadow-sm",id:"btn-close-enlarge",children:[E.jsx(uS,{className:"w-3.5 h-3.5"}),"Close Fullscreen"]})]}),E.jsx("div",{className:`flex-1 relative rounded-xl overflow-hidden border ${F?"border-green-500/30 bg-black":ie?"border-slate-900 bg-[#0c0e18]":"border-slate-300 bg-slate-50"}`,children:E.jsx(P_,{agents:Ve,decorItems:qe,gridSize:i,timeMode:r,messages:ue,currentAgentId:B})})]}),b&&E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all",children:E.jsxs("div",{className:`w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative ${F?"bg-black text-green-300 border-green-500/30 font-mono":ie?"bg-[#0c0e1a]/95 text-slate-100 border-indigo-500/20":"bg-white text-slate-800 border-slate-200"}`,children:[E.jsxs("div",{className:"flex items-start justify-between border-b pb-4 border-dashed border-slate-705/50",children:[E.jsxs("div",{children:[E.jsx("span",{className:`text-[9px] tracking-[0.25em] font-extrabold uppercase block font-mono ${F?"text-green-500":"text-indigo-400"}`,children:"Core Engine Customizer"}),E.jsx("h2",{className:"text-base font-bold tracking-tight",children:"Gemini Model & API Key Settings"})]}),E.jsx("button",{onClick:()=>v(!1),className:"p-1 px-3 text-[10px] font-bold uppercase tracking-wider text-rose-500 hover:text-white hover:bg-rose-600 rounded border border-rose-500 transition-all cursor-pointer",id:"btn-close-config",children:"Close"})]}),E.jsxs("div",{className:`p-4 rounded-xl text-[11px] leading-relaxed border flex gap-2 items-start ${F?"bg-green-950/10 border-green-500/20 text-green-400":"bg-indigo-500/5 border-indigo-500/10 text-slate-400"}`,children:[E.jsx(eo,{className:"w-4 h-4 text-emerald-500 shrink-0 mt-0.5"}),E.jsxs("div",{children:[E.jsx("strong",{children:"Secure Local Storage:"})," Your private API key is processed client-side, encrypted where needed, routed through server-side proxy requests, and never stored persistently anywhere on logs, keeping your credentials completely safe and private."]})]}),E.jsxs("div",{className:"space-y-4 text-xs font-sans",children:[E.jsxs("div",{children:[E.jsxs("label",{className:"block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 flex items-center justify-between",children:[E.jsx("span",{children:"Your Gemini API Key"}),E.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline flex items-center gap-1 font-semibold",children:"Get Key from Google AI ↗"})]}),E.jsx("div",{className:"relative",children:E.jsx("input",{type:"password",value:g,onChange:V=>S(V.target.value),placeholder:"Enter your private API key here...",className:`w-full px-3.5 py-2 text-xs rounded-lg border focus:outline-none focus:border-indigo-500 ${F?"bg-black border-green-500/30 text-green-400 font-mono placeholder-green-800":ie?"bg-slate-900 border-slate-800 text-white placeholder-slate-600":"bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"}`,id:"inp-custom-api-key"})}),E.jsx("p",{className:"text-[10px] text-slate-500 mt-1.5 leading-relaxed",children:"If left empty, the application will automatically fall back to use the system's pre-configured backend credentials (ideal for instant starts!)."})]}),E.jsxs("div",{children:[E.jsx("label",{className:"block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5",children:"Select Gemini Model Deployment"}),E.jsxs("select",{value:T,onChange:V=>L(V.target.value),className:`w-full px-3.5 py-2 text-xs rounded-lg border focus:outline-none focus:border-indigo-500 tracking-wide ${F?"bg-black border-green-500/30 text-green-400 font-mono":ie?"bg-slate-900 border-slate-800 text-white":"bg-slate-50 border-slate-200 text-slate-800"}`,id:"sel-custom-model",children:[E.jsx("option",{value:"gemini-3.5-flash",children:"Gemini 3.5 Flash (Recommended Default)"}),E.jsx("option",{value:"gemini-3.1-pro-preview",children:"Gemini 3.1 Pro (Deep Reasoning & Multi-turn)"}),E.jsx("option",{value:"gemini-3.1-flash-lite",children:"Gemini 3.1 Flash Lite (Fast responses)"})]}),E.jsx("p",{className:"text-[10px] text-slate-500 mt-1.5 leading-relaxed",children:"Select your target engine. Pro models provide richer, highly professional synthesis but require higher API resource token usage."})]}),E.jsxs("div",{className:`p-3 rounded-xl border flex flex-col gap-1 text-[11px] ${g?"border-emerald-500/25 bg-emerald-950/10":"border-slate-800 bg-slate-900/30"}`,children:[E.jsxs("div",{className:"flex items-center gap-1.5 font-bold",children:[E.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${g?"bg-emerald-500 animate-pulse":"bg-indigo-400 animate-pulse"}`}),E.jsx("span",{className:g?"text-emerald-400":"text-indigo-400",children:g?"Currently Armed: Custom Key":"Currently Defaulted: Environment Configuration"})]}),E.jsx("p",{className:"text-slate-500 text-[10px] leading-relaxed",children:g?`Instructing workers to query via model "${T}" using your personal client-supplied key.`:`Instructing workers to query via model "${T}" using pre-configured system default credentials.`})]})]}),E.jsxs("div",{className:"flex gap-2 items-center justify-end font-sans border-t pt-4 border-dashed border-slate-705/15",children:[E.jsx("button",{type:"button",onClick:()=>{S(""),localStorage.removeItem("custom_gemini_api_key")},disabled:!g,className:`px-4 py-2 rounded text-[11px] font-bold uppercase tracking-wider border transition-colors ${g?"border-rose-500/30 text-rose-450 hover:bg-rose-500/10 cursor-pointer":"opacity-35 cursor-not-allowed border-slate-800 text-slate-500"}`,title:"Clear key to fall back to environment key",id:"btn-reset-custom-config",children:"Clear Custom Key"}),E.jsx("button",{type:"button",onClick:()=>v(!1),className:"px-5 py-2 rounded text-[11px] font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-md cursor-pointer transition-colors animate-pulse",id:"btn-save-custom-config",children:"Save & Activate"})]})]})}),m&&E.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all",children:E.jsxs("div",{className:`w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative ${F?"bg-black text-green-300 border-green-500/30 font-mono":ie?"bg-[#0c0e1a]/95 text-slate-100 border-indigo-500/20":"bg-white text-slate-800 border-slate-200"}`,children:[E.jsxs("div",{className:"flex items-start justify-between border-b pb-4 border-dashed border-slate-700/50",children:[E.jsxs("div",{children:[E.jsx("span",{className:`text-[9px] tracking-[0.25em] font-extrabold uppercase block font-mono ${F?"text-green-500":"text-indigo-400"}`,children:"Interactive User Manual"}),E.jsx("h2",{className:"text-lg font-bold tracking-tight",children:"How to Operate the Swarm Agency"})]}),E.jsx("button",{onClick:()=>h(!1),className:"p-1 px-3 text-[10px] font-bold uppercase tracking-wider text-rose-500 hover:text-white hover:bg-rose-600 rounded border border-rose-500 transition-all cursor-pointer",id:"btn-close-help",children:"Close"})]}),E.jsxs("div",{className:`p-4 rounded-xl text-xs leading-relaxed border ${F?"bg-green-950/10 border-green-500/20 text-green-400":"bg-indigo-500/5 border-indigo-500/10 text-slate-400"}`,children:["This interactive playground simulates a ",E.jsx("strong",{children:"Multi-Agent Swarm Collaborative Team"})," where autonomous AI professionals (e.g. CEO, Competitor Researcher, Financial Analyst, Database Architect) sit together, discuss real sub-tasks, delegate work to specialized team members, and physically collaborate in a styled 3D digital office workspace."]}),E.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[E.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${F?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[E.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[E.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${F?"bg-green-500/20 text-green-400":"bg-indigo-500/20 text-indigo-400"}`,children:"1"}),E.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Define the Mission"})]}),E.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["Start by typing a custom overarching corporate goal in the ",E.jsx("strong",{children:"Active Collective Goal Objective"})," input box (e.g., ",E.jsx("em",{children:'"Design a premium high-volume organic tea brand"'}),"). Pressing the presets on top switches between ready-configured specialized agencies instantly."]})]}),E.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${F?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[E.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[E.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${F?"bg-green-500/20 text-green-400":"bg-indigo-500/20 text-indigo-400"}`,children:"2"}),E.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Instigate Swarm Execution"})]}),E.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["Hit the ",E.jsx("strong",{children:"Delegate & Prompt Swarm"})," action key. Our sequence engine coordinates each agent's active neural network model. Each agent will formulate structured responses, critique existing steps, delegate tasks, and pass progress."]})]}),E.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${F?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[E.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[E.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${F?"bg-green-500/20 text-green-400":"bg-[#f43f5e]/20 text-[#f43f5e]"}`,children:"3"}),E.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Watch 3D Collaboration"})]}),E.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["During computation, agents will stand up, walk across the customized office grid, sit at their task chairs on the cushion, and raise their curvy hands to type on modern ",E.jsx("strong",{children:"Dual-Monitor Workstations"})," featuring glowing desktop displays and laptops!"]})]}),E.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${F?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[E.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[E.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${F?"bg-green-500/20 text-green-400":"bg-teal-500/20 text-teal-400"}`,children:"4"}),E.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Scale & Shape Avatars"})]}),E.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["Select any agent's card to modify system personas. Custom body styles options let you toggle gender models: ",E.jsx("strong",{children:"Male (Smooth curvy cylinder)"})," or ",E.jsx("strong",{children:"Female (Elegant inverted cone)"}),". All feature smooth rounded shoulders and spherical key joints."]})]})]}),E.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${F?"border-green-500/15":"border-slate-800/70"}`,children:[E.jsxs("h4",{className:"font-bold text-[11px] uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 font-mono",children:[E.jsx(k_,{className:"w-3.5 h-3.5"}),"How to customize and make the office your own:"]}),E.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-[11px] text-slate-400 leading-relaxed",children:[E.jsxs("li",{children:["Create brand-new customized agency structures by pressing the ",E.jsx("strong",{children:"+ Create Team"})," option button."]}),E.jsx("li",{children:"Decorate empty grid slots with cozy office green potted foliage, work desks, and accent armchairs by painting objects on the map."}),E.jsxs("li",{children:["Import custom files/layouts by loading custom JSON configurations back into the system using the top-bar ",E.jsx("strong",{children:"File Up icon"}),"."]})]})]}),E.jsx("div",{className:"flex justify-end pt-2",children:E.jsx("button",{onClick:()=>h(!1),className:"px-6 py-2 rounded text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-md cursor-pointer transition-colors",id:"btn-help-close-footer",children:"Let's Get Started!"})})]})})]})}Hy.createRoot(document.getElementById("root")).render(E.jsx(ke.StrictMode,{children:E.jsx(Nw,{})}));
