(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ad={exports:{}},$o={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dx;function Uy(){if(dx)return $o;dx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return $o.Fragment=e,$o.jsx=i,$o.jsxs=i,$o}var hx;function Ly(){return hx||(hx=1,Ad.exports=Uy()),Ad.exports}var w=Ly(),wd={exports:{}},_t={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var px;function Oy(){if(px)return _t;px=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),g=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,S={};function _(U,Z,be){this.props=U,this.context=Z,this.refs=S,this.updater=be||A}_.prototype.isReactComponent={},_.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function N(){}N.prototype=_.prototype;function P(U,Z,be){this.props=U,this.context=Z,this.refs=S,this.updater=be||A}var F=P.prototype=new N;F.constructor=P,O(F,_.prototype),F.isPureReactComponent=!0;var W=Array.isArray;function z(){}var k={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function B(U,Z,be){var Ce=be.ref;return{$$typeof:r,type:U,key:Z,ref:Ce!==void 0?Ce:null,props:be}}function Q(U,Z){return B(U.type,Z,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function J(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(be){return Z[be]})}var me=/\/+/g;function te(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?J(""+U.key):Z.toString(36)}function H(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(z,z):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function E(U,Z,be,Ce,Te){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(se){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case r:case e:xe=!0;break;case y:return xe=U._init,E(xe(U._payload),Z,be,Ce,Te)}}if(xe)return Te=Te(U),xe=Ce===""?"."+te(U,0):Ce,W(Te)?(be="",xe!=null&&(be=xe.replace(me,"$&/")+"/"),E(Te,Z,be,"",function(Ze){return Ze})):Te!=null&&(V(Te)&&(Te=Q(Te,be+(Te.key==null||U&&U.key===Te.key?"":(""+Te.key).replace(me,"$&/")+"/")+xe)),Z.push(Te)),1;xe=0;var Ee=Ce===""?".":Ce+":";if(W(U))for(var Re=0;Re<U.length;Re++)Ce=U[Re],se=Ee+te(Ce,Re),xe+=E(Ce,Z,be,se,Te);else if(Re=M(U),typeof Re=="function")for(U=Re.call(U),Re=0;!(Ce=U.next()).done;)Ce=Ce.value,se=Ee+te(Ce,Re++),xe+=E(Ce,Z,be,se,Te);else if(se==="object"){if(typeof U.then=="function")return E(H(U),Z,be,Ce,Te);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return xe}function L(U,Z,be){if(U==null)return U;var Ce=[],Te=0;return E(U,Ce,"","",function(se){return Z.call(be,se,Te++)}),Ce}function I(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(be){(U._status===0||U._status===-1)&&(U._status=1,U._result=be)},function(be){(U._status===0||U._status===-1)&&(U._status=2,U._result=be)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var fe=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},de={map:L,forEach:function(U,Z,be){L(U,function(){Z.apply(this,arguments)},be)},count:function(U){var Z=0;return L(U,function(){Z++}),Z},toArray:function(U){return L(U,function(Z){return Z})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return _t.Activity=b,_t.Children=de,_t.Component=_,_t.Fragment=i,_t.Profiler=l,_t.PureComponent=P,_t.StrictMode=s,_t.Suspense=m,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,_t.__COMPILER_RUNTIME={__proto__:null,c:function(U){return k.H.useMemoCache(U)}},_t.cache=function(U){return function(){return U.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(U,Z,be){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Ce=O({},U.props),Te=U.key;if(Z!=null)for(se in Z.key!==void 0&&(Te=""+Z.key),Z)!T.call(Z,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&Z.ref===void 0||(Ce[se]=Z[se]);var se=arguments.length-2;if(se===1)Ce.children=be;else if(1<se){for(var xe=Array(se),Ee=0;Ee<se;Ee++)xe[Ee]=arguments[Ee+2];Ce.children=xe}return B(U.type,Te,Ce)},_t.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},_t.createElement=function(U,Z,be){var Ce,Te={},se=null;if(Z!=null)for(Ce in Z.key!==void 0&&(se=""+Z.key),Z)T.call(Z,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(Te[Ce]=Z[Ce]);var xe=arguments.length-2;if(xe===1)Te.children=be;else if(1<xe){for(var Ee=Array(xe),Re=0;Re<xe;Re++)Ee[Re]=arguments[Re+2];Te.children=Ee}if(U&&U.defaultProps)for(Ce in xe=U.defaultProps,xe)Te[Ce]===void 0&&(Te[Ce]=xe[Ce]);return B(U,se,Te)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(U){return{$$typeof:p,render:U}},_t.isValidElement=V,_t.lazy=function(U){return{$$typeof:y,_payload:{_status:-1,_result:U},_init:I}},_t.memo=function(U,Z){return{$$typeof:h,type:U,compare:Z===void 0?null:Z}},_t.startTransition=function(U){var Z=k.T,be={};k.T=be;try{var Ce=U(),Te=k.S;Te!==null&&Te(be,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(z,fe)}catch(se){fe(se)}finally{Z!==null&&be.types!==null&&(Z.types=be.types),k.T=Z}},_t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},_t.use=function(U){return k.H.use(U)},_t.useActionState=function(U,Z,be){return k.H.useActionState(U,Z,be)},_t.useCallback=function(U,Z){return k.H.useCallback(U,Z)},_t.useContext=function(U){return k.H.useContext(U)},_t.useDebugValue=function(){},_t.useDeferredValue=function(U,Z){return k.H.useDeferredValue(U,Z)},_t.useEffect=function(U,Z){return k.H.useEffect(U,Z)},_t.useEffectEvent=function(U){return k.H.useEffectEvent(U)},_t.useId=function(){return k.H.useId()},_t.useImperativeHandle=function(U,Z,be){return k.H.useImperativeHandle(U,Z,be)},_t.useInsertionEffect=function(U,Z){return k.H.useInsertionEffect(U,Z)},_t.useLayoutEffect=function(U,Z){return k.H.useLayoutEffect(U,Z)},_t.useMemo=function(U,Z){return k.H.useMemo(U,Z)},_t.useOptimistic=function(U,Z){return k.H.useOptimistic(U,Z)},_t.useReducer=function(U,Z,be){return k.H.useReducer(U,Z,be)},_t.useRef=function(U){return k.H.useRef(U)},_t.useState=function(U){return k.H.useState(U)},_t.useSyncExternalStore=function(U,Z,be){return k.H.useSyncExternalStore(U,Z,be)},_t.useTransition=function(){return k.H.useTransition()},_t.version="19.2.7",_t}var mx;function cp(){return mx||(mx=1,wd.exports=Oy()),wd.exports}var je=cp(),Rd={exports:{}},el={},Cd={exports:{}},Dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gx;function Py(){return gx||(gx=1,(function(r){function e(E,L){var I=E.length;E.push(L);e:for(;0<I;){var fe=I-1>>>1,de=E[fe];if(0<l(de,L))E[fe]=L,E[I]=de,I=fe;else break e}}function i(E){return E.length===0?null:E[0]}function s(E){if(E.length===0)return null;var L=E[0],I=E.pop();if(I!==L){E[0]=I;e:for(var fe=0,de=E.length,U=de>>>1;fe<U;){var Z=2*(fe+1)-1,be=E[Z],Ce=Z+1,Te=E[Ce];if(0>l(be,I))Ce<de&&0>l(Te,be)?(E[fe]=Te,E[Ce]=I,fe=Ce):(E[fe]=be,E[Z]=I,fe=Z);else if(Ce<de&&0>l(Te,I))E[fe]=Te,E[Ce]=I,fe=Ce;else break e}}return L}function l(E,L){var I=E.sortIndex-L.sortIndex;return I!==0?I:E.id-L.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],y=1,b=null,g=3,M=!1,A=!1,O=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function F(E){for(var L=i(h);L!==null;){if(L.callback===null)s(h);else if(L.startTime<=E)s(h),L.sortIndex=L.expirationTime,e(m,L);else break;L=i(h)}}function W(E){if(O=!1,F(E),!A)if(i(m)!==null)A=!0,z||(z=!0,J());else{var L=i(h);L!==null&&H(W,L.startTime-E)}}var z=!1,k=-1,T=5,B=-1;function Q(){return S?!0:!(r.unstable_now()-B<T)}function V(){if(S=!1,z){var E=r.unstable_now();B=E;var L=!0;try{e:{A=!1,O&&(O=!1,N(k),k=-1),M=!0;var I=g;try{t:{for(F(E),b=i(m);b!==null&&!(b.expirationTime>E&&Q());){var fe=b.callback;if(typeof fe=="function"){b.callback=null,g=b.priorityLevel;var de=fe(b.expirationTime<=E);if(E=r.unstable_now(),typeof de=="function"){b.callback=de,F(E),L=!0;break t}b===i(m)&&s(m),F(E)}else s(m);b=i(m)}if(b!==null)L=!0;else{var U=i(h);U!==null&&H(W,U.startTime-E),L=!1}}break e}finally{b=null,g=I,M=!1}L=void 0}}finally{L?J():z=!1}}}var J;if(typeof P=="function")J=function(){P(V)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,te=me.port2;me.port1.onmessage=V,J=function(){te.postMessage(null)}}else J=function(){_(V,0)};function H(E,L){k=_(function(){E(r.unstable_now())},L)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(E){E.callback=null},r.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<E?Math.floor(1e3/E):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(E){switch(g){case 1:case 2:case 3:var L=3;break;default:L=g}var I=g;g=L;try{return E()}finally{g=I}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(E,L){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var I=g;g=E;try{return L()}finally{g=I}},r.unstable_scheduleCallback=function(E,L,I){var fe=r.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?fe+I:fe):I=fe,E){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=I+de,E={id:y++,callback:L,priorityLevel:E,startTime:I,expirationTime:de,sortIndex:-1},I>fe?(E.sortIndex=I,e(h,E),i(m)===null&&E===i(h)&&(O?(N(k),k=-1):O=!0,H(W,I-fe))):(E.sortIndex=de,e(m,E),A||M||(A=!0,z||(z=!0,J()))),E},r.unstable_shouldYield=Q,r.unstable_wrapCallback=function(E){var L=g;return function(){var I=g;g=L;try{return E.apply(this,arguments)}finally{g=I}}}})(Dd)),Dd}var xx;function Iy(){return xx||(xx=1,Cd.exports=Py()),Cd.exports}var Nd={exports:{}},Yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x;function zy(){if(_x)return Yn;_x=1;var r=cp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)h+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:h,implementation:y}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Yn.createPortal=function(m,h){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,y)},Yn.flushSync=function(m){var h=d.T,y=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=y,s.d.f()}},Yn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Yn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Yn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;y==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:b,integrity:g,fetchPriority:M}):y==="script"&&s.d.X(m,{crossOrigin:b,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Yn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var y=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Yn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var y=h.as,b=p(y,h.crossOrigin);s.d.L(m,y,{crossOrigin:b,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Yn.preloadModule=function(m,h){if(typeof m=="string")if(h){var y=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Yn.requestFormReset=function(m){s.d.r(m)},Yn.unstable_batchedUpdates=function(m,h){return m(h)},Yn.useFormState=function(m,h,y){return d.H.useFormState(m,h,y)},Yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var vx;function Fy(){if(vx)return Nd.exports;vx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nd.exports=zy(),Nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bx;function By(){if(bx)return el;bx=1;var r=Iy(),e=cp(),i=Fy();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,D=u.child;D;){if(D===a){v=!0,a=u,o=f;break}if(D===o){v=!0,o=u,a=f;break}D=D.sibling}if(!v){for(D=f.child;D;){if(D===a){v=!0,a=f,o=u;break}if(D===o){v=!0,o=f,a=u;break}D=D.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function y(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=y(t),n!==null)return n;t=t.sibling}return null}var b=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),P=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),Q=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function te(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case W:return"Suspense";case z:return"SuspenseList";case B:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case P:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case k:return n=t.displayName||null,n!==null?n:te(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return te(t(n))}catch{}}return null}var H=Array.isArray,E=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},fe=[],de=-1;function U(t){return{current:t}}function Z(t){0>de||(t.current=fe[de],fe[de]=null,de--)}function be(t,n){de++,fe[de]=t.current,t.current=n}var Ce=U(null),Te=U(null),se=U(null),xe=U(null);function Ee(t,n){switch(be(se,n),be(Te,t),be(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Pg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Pg(n),t=Ig(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Ce),be(Ce,t)}function Re(){Z(Ce),Z(Te),Z(se)}function Ze(t){t.memoizedState!==null&&be(xe,t);var n=Ce.current,a=Ig(n,t.type);n!==a&&(be(Te,t),be(Ce,a))}function ke(t){Te.current===t&&(Z(Ce),Z(Te)),xe.current===t&&(Z(xe),Zo._currentValue=I)}var yt,mt;function xt(t){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+mt}var Be=!1;function qe(t,n){if(!t||Be)return"";Be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var we=function(){throw Error()};if(Object.defineProperty(we.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(we,[])}catch(ge){var pe=ge}Reflect.construct(t,[],we)}else{try{we.call()}catch(ge){pe=ge}t.call(we.prototype)}}else{try{throw Error()}catch(ge){pe=ge}(we=t())&&typeof we.catch=="function"&&we.catch(function(){})}}catch(ge){if(ge&&pe&&typeof ge.stack=="string")return[ge.stack,pe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],D=f[1];if(v&&D){var X=v.split(`
`),oe=D.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===oe.length)for(o=X.length-1,u=oe.length-1;1<=o&&0<=u&&X[o]!==oe[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==oe[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==oe[u]){var ye=`
`+X[o].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=o&&0<=u);break}}}finally{Be=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?xt(a):""}function at(t,n){switch(t.tag){case 26:case 27:case 5:return xt(t.type);case 16:return xt("Lazy");case 13:return t.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return qe(t.type,!1);case 11:return qe(t.type.render,!1);case 1:return qe(t.type,!0);case 31:return xt("Activity");default:return""}}function it(t){try{var n="",a=null;do n+=at(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Tt=Object.prototype.hasOwnProperty,j=r.unstable_scheduleCallback,lt=r.unstable_cancelCallback,Xe=r.unstable_shouldYield,tt=r.unstable_requestPaint,Se=r.unstable_now,Ae=r.unstable_getCurrentPriorityLevel,R=r.unstable_ImmediatePriority,x=r.unstable_UserBlockingPriority,G=r.unstable_NormalPriority,q=r.unstable_LowPriority,ae=r.unstable_IdlePriority,_e=r.log,De=r.unstable_setDisableYieldValue,ne=null,le=null;function Ue(t){if(typeof _e=="function"&&De(t),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(ne,t)}catch{}}var Fe=Math.clz32?Math.clz32:dt,ze=Math.log,Oe=Math.LN2;function dt(t){return t>>>=0,t===0?32:31-(ze(t)/Oe|0)|0}var ct=256,vt=262144,Y=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var D=o&134217727;return D!==0?(o=D&~f,o!==0?u=Le(o):(v&=D,v!==0?u=Le(v):a||(a=D&~t,a!==0&&(u=Le(a))))):(D=o&~f,D!==0?u=Le(D):v!==0?u=Le(v):a||(a=o&~t,a!==0&&(u=Le(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pe(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var t=Y;return Y<<=1,(Y&62914560)===0&&(Y=4194304),t}function Ke(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ut(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function It(t,n,a,o,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var D=t.entanglements,X=t.expirationTimes,oe=t.hiddenUpdates;for(a=v&~a;0<a;){var ye=31-Fe(a),we=1<<ye;D[ye]=0,X[ye]=-1;var pe=oe[ye];if(pe!==null)for(oe[ye]=null,ye=0;ye<pe.length;ye++){var ge=pe[ye];ge!==null&&(ge.lane&=-536870913)}a&=~we}o!==0&&Rt(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Rt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Vt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Gn(t,n){var a=n&-n;return a=(a&42)!==0?1:di(a),(a&(t.suspendedLanes|n))!==0?0:a}function di(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function mn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cn(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:sx(t.type))}function Wt(t,n){var a=L.p;try{return L.p=t,n()}finally{L.p=a}}var gt=Math.random().toString(36).slice(2),St="__reactFiber$"+gt,gn="__reactProps$"+gt,ca="__reactContainer$"+gt,Ba="__reactEvents$"+gt,xl="__reactListeners$"+gt,ir="__reactHandles$"+gt,co="__reactResources$"+gt,Ga="__reactMarker$"+gt;function uo(t){delete t[St],delete t[gn],delete t[Ba],delete t[xl],delete t[ir]}function Ha(t){var n=t[St];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ca]||a[St]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vg(t);t!==null;){if(a=t[St])return a;t=Vg(t)}return n}t=a,a=t.parentNode}return null}function ka(t){if(t=t[St]||t[ca]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Rs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Va(t){var n=t[co];return n||(n=t[co]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Mn(t){t[Ga]=!0}var _l=new Set,C={};function ee(t,n){he(t,n),he(t+"Capture",n)}function he(t,n){for(C[t]=n,t=0;t<n.length;t++)_l.add(n[t])}var ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ue={},He={};function Qe(t){return Tt.call(He,t)?!0:Tt.call(ue,t)?!1:ce.test(t)?He[t]=!0:(ue[t]=!0,!1)}function Ge(t,n,a){if(Qe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function rt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function st(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gt(t){if(!t._valueTracker){var n=Mt(t)?"checked":"value";t._valueTracker=st(t,n,""+t[n])}}function fn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Mt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function rn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var qt=/[\n"\\]/g;function Yt(t){return t.replace(qt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ye(t,n,a,o,u,f,v,D){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+rt(n)):t.value!==""+rt(n)&&(t.value=""+rt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Dt(t,v,rt(n)):a!=null?Dt(t,v,rt(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?t.name=""+rt(D):t.removeAttribute("name")}function qn(t,n,a,o,u,f,v,D){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Gt(t);return}a=a!=null?""+rt(a):"",n=n!=null?""+rt(n):a,D||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=D?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Gt(t)}function Dt(t,n,a){n==="number"&&rn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Dn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+rt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function hi(t,n,a){if(n!=null&&(n=""+rt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+rt(a):""}function zi(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(H(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=rt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Gt(t)}function pi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Zt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Zt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Fi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&dn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&dn(t,f,n[f])}function Xt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ja=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Cs(t){return ja.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ua(){}var Su=null;function Mu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ar=null,sr=null;function Op(t){var n=ka(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ye(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[gn]||null;if(!u)throw Error(s(90));Ye(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&fn(o)}break e;case"textarea":hi(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Dn(t,!!a.multiple,n,!1)}}}var Eu=!1;function Pp(t,n,a){if(Eu)return t(n,a);Eu=!0;try{var o=t(n);return o}finally{if(Eu=!1,(ar!==null||sr!==null)&&(sc(),ar&&(n=ar,t=sr,sr=ar=null,Op(n),t)))for(n=0;n<t.length;n++)Op(t[n])}}function fo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var fa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tu=!1;if(fa)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){Tu=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{Tu=!1}var Xa=null,Au=null,vl=null;function Ip(){if(vl)return vl;var t,n=Au,a=n.length,o,u="value"in Xa?Xa.value:Xa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return vl=u.slice(t,1<o?1-o:void 0)}function bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function yl(){return!0}function zp(){return!1}function ii(t){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(f):f[D]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?yl:zp,this.isPropagationStopped=zp,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),n}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=ii(Ds),po=b({},Ds,{view:0,detail:0}),Dv=ii(po),wu,Ru,mo,Ml=b({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mo&&(mo&&t.type==="mousemove"?(wu=t.screenX-mo.screenX,Ru=t.screenY-mo.screenY):Ru=wu=0,mo=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Ru}}),Fp=ii(Ml),Nv=b({},Ml,{dataTransfer:0}),Uv=ii(Nv),Lv=b({},po,{relatedTarget:0}),Cu=ii(Lv),Ov=b({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=ii(Ov),Iv=b({},Ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zv=ii(Iv),Fv=b({},Ds,{data:0}),Bp=ii(Fv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Hv[t])?!!n[t]:!1}function Du(){return kv}var Vv=b({},po,{key:function(t){if(t.key){var n=Bv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Du,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=ii(Vv),Xv=b({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=ii(Xv),Wv=b({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Du}),qv=ii(Wv),Yv=b({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=ii(Yv),Kv=b({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=ii(Kv),Jv=b({},Ds,{newState:0,oldState:0}),$v=ii(Jv),eb=[9,13,27,32],Nu=fa&&"CompositionEvent"in window,go=null;fa&&"documentMode"in document&&(go=document.documentMode);var tb=fa&&"TextEvent"in window&&!go,Hp=fa&&(!Nu||go&&8<go&&11>=go),kp=" ",Vp=!1;function jp(t,n){switch(t){case"keyup":return eb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rr=!1;function nb(t,n){switch(t){case"compositionend":return Xp(n);case"keypress":return n.which!==32?null:(Vp=!0,kp);case"textInput":return t=n.data,t===kp&&Vp?null:t;default:return null}}function ib(t,n){if(rr)return t==="compositionend"||!Nu&&jp(t,n)?(t=Ip(),vl=Au=Xa=null,rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Hp&&n.locale!=="ko"?null:n.data;default:return null}}var ab={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ab[t.type]:n==="textarea"}function qp(t,n,a,o){ar?sr?sr.push(o):sr=[o]:ar=o,n=dc(n,"onChange"),0<n.length&&(a=new Sl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var xo=null,_o=null;function sb(t){Cg(t,0)}function El(t){var n=Rs(t);if(fn(n))return t}function Yp(t,n){if(t==="change")return n}var Zp=!1;if(fa){var Uu;if(fa){var Lu="oninput"in document;if(!Lu){var Kp=document.createElement("div");Kp.setAttribute("oninput","return;"),Lu=typeof Kp.oninput=="function"}Uu=Lu}else Uu=!1;Zp=Uu&&(!document.documentMode||9<document.documentMode)}function Qp(){xo&&(xo.detachEvent("onpropertychange",Jp),_o=xo=null)}function Jp(t){if(t.propertyName==="value"&&El(_o)){var n=[];qp(n,_o,t,Mu(t)),Pp(sb,n)}}function rb(t,n,a){t==="focusin"?(Qp(),xo=n,_o=a,xo.attachEvent("onpropertychange",Jp)):t==="focusout"&&Qp()}function ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(_o)}function lb(t,n){if(t==="click")return El(n)}function cb(t,n){if(t==="input"||t==="change")return El(n)}function ub(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var mi=typeof Object.is=="function"?Object.is:ub;function vo(t,n){if(mi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Tt.call(n,u)||!mi(t[u],n[u]))return!1}return!0}function $p(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,n){var a=$p(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$p(a)}}function tm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?tm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function nm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=rn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=rn(t.document)}return n}function Ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var fb=fa&&"documentMode"in document&&11>=document.documentMode,or=null,Pu=null,bo=null,Iu=!1;function im(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Iu||or==null||or!==rn(o)||(o=or,"selectionStart"in o&&Ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),bo&&vo(bo,o)||(bo=o,o=dc(Pu,"onSelect"),0<o.length&&(n=new Sl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=or)))}function Ns(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var lr={animationend:Ns("Animation","AnimationEnd"),animationiteration:Ns("Animation","AnimationIteration"),animationstart:Ns("Animation","AnimationStart"),transitionrun:Ns("Transition","TransitionRun"),transitionstart:Ns("Transition","TransitionStart"),transitioncancel:Ns("Transition","TransitionCancel"),transitionend:Ns("Transition","TransitionEnd")},zu={},am={};fa&&(am=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function Us(t){if(zu[t])return zu[t];if(!lr[t])return t;var n=lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in am)return zu[t]=n[a];return t}var sm=Us("animationend"),rm=Us("animationiteration"),om=Us("animationstart"),db=Us("transitionrun"),hb=Us("transitionstart"),pb=Us("transitioncancel"),lm=Us("transitionend"),cm=new Map,Fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fu.push("scrollEnd");function Bi(t,n){cm.set(t,n),ee(n,[t])}var Tl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ai=[],cr=0,Bu=0;function Al(){for(var t=cr,n=Bu=cr=0;n<t;){var a=Ai[n];Ai[n++]=null;var o=Ai[n];Ai[n++]=null;var u=Ai[n];Ai[n++]=null;var f=Ai[n];if(Ai[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&um(a,u,f)}}function wl(t,n,a,o){Ai[cr++]=t,Ai[cr++]=n,Ai[cr++]=a,Ai[cr++]=o,Bu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Gu(t,n,a,o){return wl(t,n,a,o),Rl(t)}function Ls(t,n){return wl(t,null,null,n),Rl(t)}function um(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Rl(t){if(50<ko)throw ko=0,Kf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ur={};function mb(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(t,n,a,o){return new mb(t,n,a,o)}function Hu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=gi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function fm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Cl(t,n,a,o,u,f){var v=0;if(o=t,typeof t=="function")Hu(t)&&(v=1);else if(typeof t=="string")v=by(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case B:return t=gi(31,a,n,u),t.elementType=B,t.lanes=f,t;case O:return Os(a.children,u,f,n);case S:v=8,u|=24;break;case _:return t=gi(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case W:return t=gi(13,a,n,u),t.elementType=W,t.lanes=f,t;case z:return t=gi(19,a,n,u),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:v=10;break e;case N:v=9;break e;case F:v=11;break e;case k:v=14;break e;case T:v=16,o=null;break e}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=gi(v,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function Os(t,n,a,o){return t=gi(7,t,o,n),t.lanes=a,t}function ku(t,n,a){return t=gi(6,t,null,n),t.lanes=a,t}function dm(t){var n=gi(18,null,null,0);return n.stateNode=t,n}function Vu(t,n,a){return n=gi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var hm=new WeakMap;function wi(t,n){if(typeof t=="object"&&t!==null){var a=hm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:it(n)},hm.set(t,n),n)}return{value:t,source:n,stack:it(n)}}var fr=[],dr=0,Dl=null,yo=0,Ri=[],Ci=0,Wa=null,Yi=1,Zi="";function ha(t,n){fr[dr++]=yo,fr[dr++]=Dl,Dl=t,yo=n}function pm(t,n,a){Ri[Ci++]=Yi,Ri[Ci++]=Zi,Ri[Ci++]=Wa,Wa=t;var o=Yi;t=Zi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Yi=1<<32-Fe(n)+u|a<<u|o,Zi=f+t}else Yi=1<<f|a<<u|o,Zi=t}function ju(t){t.return!==null&&(ha(t,1),pm(t,1,0))}function Xu(t){for(;t===Dl;)Dl=fr[--dr],fr[dr]=null,yo=fr[--dr],fr[dr]=null;for(;t===Wa;)Wa=Ri[--Ci],Ri[Ci]=null,Zi=Ri[--Ci],Ri[Ci]=null,Yi=Ri[--Ci],Ri[Ci]=null}function mm(t,n){Ri[Ci++]=Yi,Ri[Ci++]=Zi,Ri[Ci++]=Wa,Yi=n.id,Zi=n.overflow,Wa=t}var Hn=null,cn=null,zt=!1,qa=null,Di=!1,Wu=Error(s(519));function Ya(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(wi(n,t)),Wu}function gm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[St]=t,n[gn]=o,a){case"dialog":Ut("cancel",n),Ut("close",n);break;case"iframe":case"object":case"embed":Ut("load",n);break;case"video":case"audio":for(a=0;a<jo.length;a++)Ut(jo[a],n);break;case"source":Ut("error",n);break;case"img":case"image":case"link":Ut("error",n),Ut("load",n);break;case"details":Ut("toggle",n);break;case"input":Ut("invalid",n),qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ut("invalid",n);break;case"textarea":Ut("invalid",n),zi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Lg(n.textContent,a)?(o.popover!=null&&(Ut("beforetoggle",n),Ut("toggle",n)),o.onScroll!=null&&Ut("scroll",n),o.onScrollEnd!=null&&Ut("scrollend",n),o.onClick!=null&&(n.onclick=ua),n=!0):n=!1,n||Ya(t,!0)}function xm(t){for(Hn=t.return;Hn;)switch(Hn.tag){case 5:case 31:case 13:Di=!1;return;case 27:case 3:Di=!0;return;default:Hn=Hn.return}}function hr(t){if(t!==Hn)return!1;if(!zt)return xm(t),zt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||fd(t.type,t.memoizedProps)),a=!a),a&&cn&&Ya(t),xm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=kg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));cn=kg(t)}else n===27?(n=cn,ls(t.type)?(t=gd,gd=null,cn=t):cn=n):cn=Hn?Ui(t.stateNode.nextSibling):null;return!0}function Ps(){cn=Hn=null,zt=!1}function qu(){var t=qa;return t!==null&&(oi===null?oi=t:oi.push.apply(oi,t),qa=null),t}function So(t){qa===null?qa=[t]:qa.push(t)}var Yu=U(null),Is=null,pa=null;function Za(t,n,a){be(Yu,n._currentValue),n._currentValue=a}function ma(t){t._currentValue=Yu.current,Z(Yu)}function Zu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var D=f;f=u;for(var X=0;X<n.length;X++)if(D.context===n[X]){f.lanes|=a,D=f.alternate,D!==null&&(D.lanes|=a),Zu(f.return,a,t),o||(v=null);break e}f=D.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Zu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function pr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var D=u.type;mi(u.pendingProps.value,v.value)||(t!==null?t.push(D):t=[D])}}else if(u===xe.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Zo):t=[Zo])}u=u.return}t!==null&&Ku(n,t,a,o),n.flags|=262144}function Nl(t){for(t=t.firstContext;t!==null;){if(!mi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function zs(t){Is=t,pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function kn(t){return _m(Is,t)}function Ul(t,n){return Is===null&&zs(t),_m(t,n)}function _m(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},pa===null){if(t===null)throw Error(s(308));pa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else pa=pa.next=n;return a}var gb=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},xb=r.unstable_scheduleCallback,_b=r.unstable_NormalPriority,En={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qu(){return{controller:new gb,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&xb(_b,function(){t.controller.abort()})}var Eo=null,Ju=0,mr=0,gr=null;function vb(t,n){if(Eo===null){var a=Eo=[];Ju=0,mr=nd(),gr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Ju++,n.then(vm,vm),n}function vm(){if(--Ju===0&&Eo!==null){gr!==null&&(gr.status="fulfilled");var t=Eo;Eo=null,mr=0,gr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function bb(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var bm=E.S;E.S=function(t,n){ig=Se(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vb(t,n),bm!==null&&bm(t,n)};var Fs=U(null);function $u(){var t=Fs.current;return t!==null?t:on.pooledCache}function Ll(t,n){n===null?be(Fs,Fs.current):be(Fs,n.pool)}function ym(){var t=$u();return t===null?null:{parent:En._currentValue,pool:t}}var xr=Error(s(460)),ef=Error(s(474)),Ol=Error(s(542)),Pl={then:function(){}};function Sm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Mm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ua,ua),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tm(t),t;default:if(typeof n.status=="string")n.then(ua,ua);else{if(t=on,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Tm(t),t}throw Gs=n,xr}}function Bs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Gs=a,xr):a}}var Gs=null;function Em(){if(Gs===null)throw Error(s(459));var t=Gs;return Gs=null,t}function Tm(t){if(t===xr||t===Ol)throw Error(s(483))}var _r=null,To=0;function Il(t){var n=To;return To+=1,_r===null&&(_r=[]),Mm(_r,t,n)}function Ao(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function zl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Am(t){function n(ie,K){if(t){var re=ie.deletions;re===null?(ie.deletions=[K],ie.flags|=16):re.push(K)}}function a(ie,K){if(!t)return null;for(;K!==null;)n(ie,K),K=K.sibling;return null}function o(ie){for(var K=new Map;ie!==null;)ie.key!==null?K.set(ie.key,ie):K.set(ie.index,ie),ie=ie.sibling;return K}function u(ie,K){return ie=da(ie,K),ie.index=0,ie.sibling=null,ie}function f(ie,K,re){return ie.index=re,t?(re=ie.alternate,re!==null?(re=re.index,re<K?(ie.flags|=67108866,K):re):(ie.flags|=67108866,K)):(ie.flags|=1048576,K)}function v(ie){return t&&ie.alternate===null&&(ie.flags|=67108866),ie}function D(ie,K,re,Me){return K===null||K.tag!==6?(K=ku(re,ie.mode,Me),K.return=ie,K):(K=u(K,re),K.return=ie,K)}function X(ie,K,re,Me){var ot=re.type;return ot===O?ye(ie,K,re.props.children,Me,re.key):K!==null&&(K.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Bs(ot)===K.type)?(K=u(K,re.props),Ao(K,re),K.return=ie,K):(K=Cl(re.type,re.key,re.props,null,ie.mode,Me),Ao(K,re),K.return=ie,K)}function oe(ie,K,re,Me){return K===null||K.tag!==4||K.stateNode.containerInfo!==re.containerInfo||K.stateNode.implementation!==re.implementation?(K=Vu(re,ie.mode,Me),K.return=ie,K):(K=u(K,re.children||[]),K.return=ie,K)}function ye(ie,K,re,Me,ot){return K===null||K.tag!==7?(K=Os(re,ie.mode,Me,ot),K.return=ie,K):(K=u(K,re),K.return=ie,K)}function we(ie,K,re){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=ku(""+K,ie.mode,re),K.return=ie,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return re=Cl(K.type,K.key,K.props,null,ie.mode,re),Ao(re,K),re.return=ie,re;case A:return K=Vu(K,ie.mode,re),K.return=ie,K;case T:return K=Bs(K),we(ie,K,re)}if(H(K)||J(K))return K=Os(K,ie.mode,re,null),K.return=ie,K;if(typeof K.then=="function")return we(ie,Il(K),re);if(K.$$typeof===P)return we(ie,Ul(ie,K),re);zl(ie,K)}return null}function pe(ie,K,re,Me){var ot=K!==null?K.key:null;if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return ot!==null?null:D(ie,K,""+re,Me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case M:return re.key===ot?X(ie,K,re,Me):null;case A:return re.key===ot?oe(ie,K,re,Me):null;case T:return re=Bs(re),pe(ie,K,re,Me)}if(H(re)||J(re))return ot!==null?null:ye(ie,K,re,Me,null);if(typeof re.then=="function")return pe(ie,K,Il(re),Me);if(re.$$typeof===P)return pe(ie,K,Ul(ie,re),Me);zl(ie,re)}return null}function ge(ie,K,re,Me,ot){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ie=ie.get(re)||null,D(K,ie,""+Me,ot);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case M:return ie=ie.get(Me.key===null?re:Me.key)||null,X(K,ie,Me,ot);case A:return ie=ie.get(Me.key===null?re:Me.key)||null,oe(K,ie,Me,ot);case T:return Me=Bs(Me),ge(ie,K,re,Me,ot)}if(H(Me)||J(Me))return ie=ie.get(re)||null,ye(K,ie,Me,ot,null);if(typeof Me.then=="function")return ge(ie,K,re,Il(Me),ot);if(Me.$$typeof===P)return ge(ie,K,re,Ul(K,Me),ot);zl(K,Me)}return null}function et(ie,K,re,Me){for(var ot=null,Ht=null,nt=K,At=K=0,Ot=null;nt!==null&&At<re.length;At++){nt.index>At?(Ot=nt,nt=null):Ot=nt.sibling;var kt=pe(ie,nt,re[At],Me);if(kt===null){nt===null&&(nt=Ot);break}t&&nt&&kt.alternate===null&&n(ie,nt),K=f(kt,K,At),Ht===null?ot=kt:Ht.sibling=kt,Ht=kt,nt=Ot}if(At===re.length)return a(ie,nt),zt&&ha(ie,At),ot;if(nt===null){for(;At<re.length;At++)nt=we(ie,re[At],Me),nt!==null&&(K=f(nt,K,At),Ht===null?ot=nt:Ht.sibling=nt,Ht=nt);return zt&&ha(ie,At),ot}for(nt=o(nt);At<re.length;At++)Ot=ge(nt,ie,At,re[At],Me),Ot!==null&&(t&&Ot.alternate!==null&&nt.delete(Ot.key===null?At:Ot.key),K=f(Ot,K,At),Ht===null?ot=Ot:Ht.sibling=Ot,Ht=Ot);return t&&nt.forEach(function(hs){return n(ie,hs)}),zt&&ha(ie,At),ot}function pt(ie,K,re,Me){if(re==null)throw Error(s(151));for(var ot=null,Ht=null,nt=K,At=K=0,Ot=null,kt=re.next();nt!==null&&!kt.done;At++,kt=re.next()){nt.index>At?(Ot=nt,nt=null):Ot=nt.sibling;var hs=pe(ie,nt,kt.value,Me);if(hs===null){nt===null&&(nt=Ot);break}t&&nt&&hs.alternate===null&&n(ie,nt),K=f(hs,K,At),Ht===null?ot=hs:Ht.sibling=hs,Ht=hs,nt=Ot}if(kt.done)return a(ie,nt),zt&&ha(ie,At),ot;if(nt===null){for(;!kt.done;At++,kt=re.next())kt=we(ie,kt.value,Me),kt!==null&&(K=f(kt,K,At),Ht===null?ot=kt:Ht.sibling=kt,Ht=kt);return zt&&ha(ie,At),ot}for(nt=o(nt);!kt.done;At++,kt=re.next())kt=ge(nt,ie,At,kt.value,Me),kt!==null&&(t&&kt.alternate!==null&&nt.delete(kt.key===null?At:kt.key),K=f(kt,K,At),Ht===null?ot=kt:Ht.sibling=kt,Ht=kt);return t&&nt.forEach(function(Ny){return n(ie,Ny)}),zt&&ha(ie,At),ot}function nn(ie,K,re,Me){if(typeof re=="object"&&re!==null&&re.type===O&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case M:e:{for(var ot=re.key;K!==null;){if(K.key===ot){if(ot=re.type,ot===O){if(K.tag===7){a(ie,K.sibling),Me=u(K,re.props.children),Me.return=ie,ie=Me;break e}}else if(K.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===T&&Bs(ot)===K.type){a(ie,K.sibling),Me=u(K,re.props),Ao(Me,re),Me.return=ie,ie=Me;break e}a(ie,K);break}else n(ie,K);K=K.sibling}re.type===O?(Me=Os(re.props.children,ie.mode,Me,re.key),Me.return=ie,ie=Me):(Me=Cl(re.type,re.key,re.props,null,ie.mode,Me),Ao(Me,re),Me.return=ie,ie=Me)}return v(ie);case A:e:{for(ot=re.key;K!==null;){if(K.key===ot)if(K.tag===4&&K.stateNode.containerInfo===re.containerInfo&&K.stateNode.implementation===re.implementation){a(ie,K.sibling),Me=u(K,re.children||[]),Me.return=ie,ie=Me;break e}else{a(ie,K);break}else n(ie,K);K=K.sibling}Me=Vu(re,ie.mode,Me),Me.return=ie,ie=Me}return v(ie);case T:return re=Bs(re),nn(ie,K,re,Me)}if(H(re))return et(ie,K,re,Me);if(J(re)){if(ot=J(re),typeof ot!="function")throw Error(s(150));return re=ot.call(re),pt(ie,K,re,Me)}if(typeof re.then=="function")return nn(ie,K,Il(re),Me);if(re.$$typeof===P)return nn(ie,K,Ul(ie,re),Me);zl(ie,re)}return typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint"?(re=""+re,K!==null&&K.tag===6?(a(ie,K.sibling),Me=u(K,re),Me.return=ie,ie=Me):(a(ie,K),Me=ku(re,ie.mode,Me),Me.return=ie,ie=Me),v(ie)):a(ie,K)}return function(ie,K,re,Me){try{To=0;var ot=nn(ie,K,re,Me);return _r=null,ot}catch(nt){if(nt===xr||nt===Ol)throw nt;var Ht=gi(29,nt,null,ie.mode);return Ht.lanes=Me,Ht.return=ie,Ht}finally{}}}var Hs=Am(!0),wm=Am(!1),Ka=!1;function tf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ja(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(jt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Rl(t),um(t,null,a),n}return wl(t,o,n,a),Rl(t)}function wo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vt(t,a)}}function af(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var sf=!1;function Ro(){if(sf){var t=gr;if(t!==null)throw t}}function Co(t,n,a,o){sf=!1;var u=t.updateQueue;Ka=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var X=D,oe=X.next;X.next=null,v===null?f=oe:v.next=oe,v=X;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,D=ye.lastBaseUpdate,D!==v&&(D===null?ye.firstBaseUpdate=oe:D.next=oe,ye.lastBaseUpdate=X))}if(f!==null){var we=u.baseState;v=0,ye=oe=X=null,D=f;do{var pe=D.lane&-536870913,ge=pe!==D.lane;if(ge?(Lt&pe)===pe:(o&pe)===pe){pe!==0&&pe===mr&&(sf=!0),ye!==null&&(ye=ye.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});e:{var et=t,pt=D;pe=n;var nn=a;switch(pt.tag){case 1:if(et=pt.payload,typeof et=="function"){we=et.call(nn,we,pe);break e}we=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=pt.payload,pe=typeof et=="function"?et.call(nn,we,pe):et,pe==null)break e;we=b({},we,pe);break e;case 2:Ka=!0}}pe=D.callback,pe!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=u.callbacks,ge===null?u.callbacks=[pe]:ge.push(pe))}else ge={lane:pe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ye===null?(oe=ye=ge,X=we):ye=ye.next=ge,v|=pe;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);ye===null&&(X=we),u.baseState=X,u.firstBaseUpdate=oe,u.lastBaseUpdate=ye,f===null&&(u.shared.lanes=0),is|=v,t.lanes=v,t.memoizedState=we}}function Rm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Rm(a[t],n)}var vr=U(null),Fl=U(0);function Dm(t,n){t=Ea,be(Fl,t),be(vr,n),Ea=t|n.baseLanes}function rf(){be(Fl,Ea),be(vr,vr.current)}function of(){Ea=Fl.current,Z(vr),Z(Fl)}var xi=U(null),Ni=null;function $a(t){var n=t.alternate;be(yn,yn.current&1),be(xi,t),Ni===null&&(n===null||vr.current!==null||n.memoizedState!==null)&&(Ni=t)}function lf(t){be(yn,yn.current),be(xi,t),Ni===null&&(Ni=t)}function Nm(t){t.tag===22?(be(yn,yn.current),be(xi,t),Ni===null&&(Ni=t)):es()}function es(){be(yn,yn.current),be(xi,xi.current)}function _i(t){Z(xi),Ni===t&&(Ni=null),Z(yn)}var yn=U(0);function Bl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||pd(a)||md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=0,Et=null,en=null,Tn=null,Gl=!1,br=!1,ks=!1,Hl=0,Do=0,yr=null,yb=0;function xn(){throw Error(s(321))}function cf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!mi(t[a],n[a]))return!1;return!0}function uf(t,n,a,o,u,f){return ga=f,Et=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,E.H=t===null||t.memoizedState===null?p0:Tf,ks=!1,f=a(o,u),ks=!1,br&&(f=Lm(n,a,o,u)),Um(t),f}function Um(t){E.H=Lo;var n=en!==null&&en.next!==null;if(ga=0,Tn=en=Et=null,Gl=!1,Do=0,yr=null,n)throw Error(s(300));t===null||An||(t=t.dependencies,t!==null&&Nl(t)&&(An=!0))}function Lm(t,n,a,o){Et=t;var u=0;do{if(br&&(yr=null),Do=0,br=!1,25<=u)throw Error(s(301));if(u+=1,Tn=en=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}E.H=m0,f=n(a,o)}while(br);return f}function Sb(){var t=E.H,n=t.useState()[0];return n=typeof n.then=="function"?No(n):n,t=t.useState()[0],(en!==null?en.memoizedState:null)!==t&&(Et.flags|=1024),n}function ff(){var t=Hl!==0;return Hl=0,t}function df(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function hf(t){if(Gl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Gl=!1}ga=0,Tn=en=Et=null,br=!1,Do=Hl=0,yr=null}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Et.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function Sn(){if(en===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=en.next;var n=Tn===null?Et.memoizedState:Tn.next;if(n!==null)Tn=n,en=t;else{if(t===null)throw Et.alternate===null?Error(s(467)):Error(s(310));en=t,t={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},Tn===null?Et.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function No(t){var n=Do;return Do+=1,yr===null&&(yr=[]),t=Mm(yr,t,n),n=Et,(Tn===null?n.memoizedState:Tn.next)===null&&(n=n.alternate,E.H=n===null||n.memoizedState===null?p0:Tf),t}function Vl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return No(t);if(t.$$typeof===P)return kn(t)}throw Error(s(438,String(t)))}function pf(t){var n=null,a=Et.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=Et.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=kl(),Et.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=Q;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function jl(t){var n=Sn();return mf(n,en,t)}function mf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var D=v=null,X=null,oe=n,ye=!1;do{var we=oe.lane&-536870913;if(we!==oe.lane?(Lt&we)===we:(ga&we)===we){var pe=oe.revertLane;if(pe===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),we===mr&&(ye=!0);else if((ga&pe)===pe){oe=oe.next,pe===mr&&(ye=!0);continue}else we={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(D=X=we,v=f):X=X.next=we,Et.lanes|=pe,is|=pe;we=oe.action,ks&&a(f,we),f=oe.hasEagerState?oe.eagerState:a(f,we)}else pe={lane:we,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},X===null?(D=X=pe,v=f):X=X.next=pe,Et.lanes|=we,is|=we;oe=oe.next}while(oe!==null&&oe!==n);if(X===null?v=f:X.next=D,!mi(f,t.memoizedState)&&(An=!0,ye&&(a=gr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=X,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function gf(t){var n=Sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);mi(f,n.memoizedState)||(An=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Om(t,n,a){var o=Et,u=Sn(),f=zt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!mi((en||u).memoizedState,a);if(v&&(u.memoizedState=a,An=!0),u=u.queue,vf(zm.bind(null,o,u,t),[t]),u.getSnapshot!==n||v||Tn!==null&&Tn.memoizedState.tag&1){if(o.flags|=2048,Sr(9,{destroy:void 0},Im.bind(null,o,u,a,n),null),on===null)throw Error(s(349));f||(ga&127)!==0||Pm(o,n,a)}return a}function Pm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=Et.updateQueue,n===null?(n=kl(),Et.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Im(t,n,a,o){n.value=a,n.getSnapshot=o,Fm(n)&&Bm(t)}function zm(t,n,a){return a(function(){Fm(n)&&Bm(t)})}function Fm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!mi(t,a)}catch{return!0}}function Bm(t){var n=Ls(t,2);n!==null&&li(n,t,2)}function xf(t){var n=ei();if(typeof t=="function"){var a=t;if(t=a(),ks){Ue(!0);try{a()}finally{Ue(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function Gm(t,n,a,o){return t.baseState=a,mf(t,en,typeof o=="function"?o:xa)}function Mb(t,n,a,o,u){if(ql(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};E.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Hm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Hm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=E.T,v={};E.T=v;try{var D=a(u,o),X=E.S;X!==null&&X(v,D),km(t,n,D)}catch(oe){_f(t,n,oe)}finally{f!==null&&v.types!==null&&(f.types=v.types),E.T=f}}else try{f=a(u,o),km(t,n,f)}catch(oe){_f(t,n,oe)}}function km(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Vm(t,n,o)},function(o){return _f(t,n,o)}):Vm(t,n,a)}function Vm(t,n,a){n.status="fulfilled",n.value=a,jm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Hm(t,a)))}function _f(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,jm(n),n=n.next;while(n!==o)}t.action=null}function jm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Xm(t,n){return n}function Wm(t,n){if(zt){var a=on.formState;if(a!==null){e:{var o=Et;if(zt){if(cn){t:{for(var u=cn,f=Di;u.nodeType!==8;){if(!f){u=null;break t}if(u=Ui(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){cn=Ui(u.nextSibling),o=u.data==="F!";break e}}Ya(o)}o=!1}o&&(n=a[0])}}return a=ei(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xm,lastRenderedState:n},a.queue=o,a=f0.bind(null,Et,o),o.dispatch=a,o=xf(!1),f=Ef.bind(null,Et,!1,o.queue),o=ei(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Mb.bind(null,Et,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function qm(t){var n=Sn();return Ym(n,en,t)}function Ym(t,n,a){if(n=mf(t,n,Xm)[0],t=jl(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=No(n)}catch(v){throw v===xr?Ol:v}else o=n;n=Sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(Et.flags|=2048,Sr(9,{destroy:void 0},Eb.bind(null,u,a),null)),[o,f,t]}function Eb(t,n){t.action=n}function Zm(t){var n=Sn(),a=en;if(a!==null)return Ym(n,a,t);Sn(),n=n.memoizedState,a=Sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Sr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=Et.updateQueue,n===null&&(n=kl(),Et.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Km(){return Sn().memoizedState}function Xl(t,n,a,o){var u=ei();Et.flags|=t,u.memoizedState=Sr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Wl(t,n,a,o){var u=Sn();o=o===void 0?null:o;var f=u.memoizedState.inst;en!==null&&o!==null&&cf(o,en.memoizedState.deps)?u.memoizedState=Sr(n,f,a,o):(Et.flags|=t,u.memoizedState=Sr(1|n,f,a,o))}function Qm(t,n){Xl(8390656,8,t,n)}function vf(t,n){Wl(2048,8,t,n)}function Tb(t){Et.flags|=4;var n=Et.updateQueue;if(n===null)n=kl(),Et.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Jm(t){var n=Sn().memoizedState;return Tb({ref:n,nextImpl:t}),function(){if((jt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function $m(t,n){return Wl(4,2,t,n)}function e0(t,n){return Wl(4,4,t,n)}function t0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function n0(t,n,a){a=a!=null?a.concat([t]):null,Wl(4,4,t0.bind(null,n,t),a)}function bf(){}function i0(t,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&cf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function a0(t,n){var a=Sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&cf(n,o[1]))return o[0];if(o=t(),ks){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o}function yf(t,n,a){return a===void 0||(ga&1073741824)!==0&&(Lt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sg(),Et.lanes|=t,is|=t,a)}function s0(t,n,a,o){return mi(a,n)?a:vr.current!==null?(t=yf(t,a,o),mi(t,n)||(An=!0),t):(ga&42)===0||(ga&1073741824)!==0&&(Lt&261930)===0?(An=!0,t.memoizedState=a):(t=sg(),Et.lanes|=t,is|=t,n)}function r0(t,n,a,o,u){var f=L.p;L.p=f!==0&&8>f?f:8;var v=E.T,D={};E.T=D,Ef(t,!1,n,a);try{var X=u(),oe=E.S;if(oe!==null&&oe(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var ye=bb(X,o);Uo(t,n,ye,yi(t))}else Uo(t,n,o,yi(t))}catch(we){Uo(t,n,{then:function(){},status:"rejected",reason:we},yi())}finally{L.p=f,v!==null&&D.types!==null&&(v.types=D.types),E.T=v}}function Ab(){}function Sf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=o0(t).queue;r0(t,u,n,I,a===null?Ab:function(){return l0(t),a(o)})}function o0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function l0(t){var n=o0(t);n.next===null&&(n=t.alternate.memoizedState),Uo(t,n.next.queue,{},yi())}function Mf(){return kn(Zo)}function c0(){return Sn().memoizedState}function u0(){return Sn().memoizedState}function wb(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=yi();t=Qa(a);var o=Ja(n,t,a);o!==null&&(li(o,n,a),wo(o,n,a)),n={cache:Qu()},t.payload=n;return}n=n.return}}function Rb(t,n,a){var o=yi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(t)?d0(n,a):(a=Gu(t,n,a,o),a!==null&&(li(a,t,o),h0(a,n,o)))}function f0(t,n,a){var o=yi();Uo(t,n,a,o)}function Uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(t))d0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,D=f(v,a);if(u.hasEagerState=!0,u.eagerState=D,mi(D,v))return wl(t,n,u,0),on===null&&Al(),!1}catch{}finally{}if(a=Gu(t,n,u,o),a!==null)return li(a,t,o),h0(a,n,o),!0}return!1}function Ef(t,n,a,o){if(o={lane:2,revertLane:nd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},ql(t)){if(n)throw Error(s(479))}else n=Gu(t,a,o,2),n!==null&&li(n,t,2)}function ql(t){var n=t.alternate;return t===Et||n!==null&&n===Et}function d0(t,n){br=Gl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function h0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Vt(t,a)}}var Lo={readContext:kn,use:Vl,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};Lo.useEffectEvent=xn;var p0={readContext:kn,use:Vl,useCallback:function(t,n){return ei().memoizedState=[t,n===void 0?null:n],t},useContext:kn,useEffect:Qm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Xl(4194308,4,t0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Xl(4194308,4,t,n)},useInsertionEffect:function(t,n){Xl(4,2,t,n)},useMemo:function(t,n){var a=ei();n=n===void 0?null:n;var o=t();if(ks){Ue(!0);try{t()}finally{Ue(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=ei();if(a!==void 0){var u=a(n);if(ks){Ue(!0);try{a(n)}finally{Ue(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Rb.bind(null,Et,t),[o.memoizedState,t]},useRef:function(t){var n=ei();return t={current:t},n.memoizedState=t},useState:function(t){t=xf(t);var n=t.queue,a=f0.bind(null,Et,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:bf,useDeferredValue:function(t,n){var a=ei();return yf(a,t,n)},useTransition:function(){var t=xf(!1);return t=r0.bind(null,Et,t.queue,!0,!1),ei().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=Et,u=ei();if(zt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),on===null)throw Error(s(349));(Lt&127)!==0||Pm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Qm(zm.bind(null,o,f,t),[t]),o.flags|=2048,Sr(9,{destroy:void 0},Im.bind(null,o,f,a,n),null),a},useId:function(){var t=ei(),n=on.identifierPrefix;if(zt){var a=Zi,o=Yi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yb++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Mf,useFormState:Wm,useActionState:Wm,useOptimistic:function(t){var n=ei();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ef.bind(null,Et,!0,a),a.dispatch=n,[t,n]},useMemoCache:pf,useCacheRefresh:function(){return ei().memoizedState=wb.bind(null,Et)},useEffectEvent:function(t){var n=ei(),a={impl:t};return n.memoizedState=a,function(){if((jt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Tf={readContext:kn,use:Vl,useCallback:i0,useContext:kn,useEffect:vf,useImperativeHandle:n0,useInsertionEffect:$m,useLayoutEffect:e0,useMemo:a0,useReducer:jl,useRef:Km,useState:function(){return jl(xa)},useDebugValue:bf,useDeferredValue:function(t,n){var a=Sn();return s0(a,en.memoizedState,t,n)},useTransition:function(){var t=jl(xa)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Om,useId:c0,useHostTransitionStatus:Mf,useFormState:qm,useActionState:qm,useOptimistic:function(t,n){var a=Sn();return Gm(a,en,t,n)},useMemoCache:pf,useCacheRefresh:u0};Tf.useEffectEvent=Jm;var m0={readContext:kn,use:Vl,useCallback:i0,useContext:kn,useEffect:vf,useImperativeHandle:n0,useInsertionEffect:$m,useLayoutEffect:e0,useMemo:a0,useReducer:gf,useRef:Km,useState:function(){return gf(xa)},useDebugValue:bf,useDeferredValue:function(t,n){var a=Sn();return en===null?yf(a,t,n):s0(a,en.memoizedState,t,n)},useTransition:function(){var t=gf(xa)[0],n=Sn().memoizedState;return[typeof t=="boolean"?t:No(t),n]},useSyncExternalStore:Om,useId:c0,useHostTransitionStatus:Mf,useFormState:Zm,useActionState:Zm,useOptimistic:function(t,n){var a=Sn();return en!==null?Gm(a,en,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:pf,useCacheRefresh:u0};m0.useEffectEvent=Jm;function Af(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:b({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var wf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=yi(),u=Qa(o);u.payload=n,a!=null&&(u.callback=a),n=Ja(t,u,o),n!==null&&(li(n,t,o),wo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=yi(),u=Qa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ja(t,u,o),n!==null&&(li(n,t,o),wo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=yi(),o=Qa(a);o.tag=2,n!=null&&(o.callback=n),n=Ja(t,o,a),n!==null&&(li(n,t,a),wo(n,t,a))}};function g0(t,n,a,o,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!vo(a,o)||!vo(u,f):!0}function x0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&wf.enqueueReplaceState(n,n.state,null)}function Vs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=b({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function _0(t){Tl(t)}function v0(t){console.error(t)}function b0(t){Tl(t)}function Yl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(t,n,a){return a=Qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(t,n)},a}function S0(t){return t=Qa(t),t.tag=3,t}function M0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){y0(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){y0(n,a,o),typeof u!="function"&&(as===null?as=new Set([this]):as.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function Cb(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&pr(n,a,u,!0),a=xi.current,a!==null){switch(a.tag){case 31:case 13:return Ni===null?rc():a.alternate===null&&_n===0&&(_n=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),$f(t,o,u)),!1;case 22:return a.flags|=65536,o===Pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),$f(t,o,u)),!1}throw Error(s(435,a.tag))}return $f(t,o,u),rc(),!1}if(zt)return n=xi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wu&&(t=Error(s(422),{cause:o}),So(wi(t,a)))):(o!==Wu&&(n=Error(s(423),{cause:o}),So(wi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=wi(o,a),u=Rf(t.stateNode,o,u),af(t,u),_n!==4&&(_n=2)),!1;var f=Error(s(520),{cause:o});if(f=wi(f,a),Ho===null?Ho=[f]:Ho.push(f),_n!==4&&(_n=2),n===null)return!0;o=wi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Rf(a.stateNode,o,t),af(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(as===null||!as.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=S0(u),M0(u,t,a,o),af(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),An=!1;function Vn(t,n,a,o){n.child=t===null?wm(n,null,a,o):Hs(n,t.child,a,o)}function E0(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var D in o)D!=="ref"&&(v[D]=o[D])}else v=o;return zs(n),o=uf(t,n,a,v,f,u),D=ff(),t!==null&&!An?(df(t,n,u),_a(t,n,u)):(zt&&D&&ju(n),n.flags|=1,Vn(t,n,o,u),n.child)}function T0(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,A0(t,n,f,o,u)):(t=Cl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!zf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(v,o)&&t.ref===n.ref)return _a(t,n,u)}return n.flags|=1,t=da(f,o),t.ref=n.ref,t.return=n,n.child=t}function A0(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(vo(f,o)&&t.ref===n.ref)if(An=!1,n.pendingProps=o=f,zf(t,u))(t.flags&131072)!==0&&(An=!0);else return n.lanes=t.lanes,_a(t,n,u)}return Df(t,n,a,o,u)}function w0(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return R0(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ll(n,f!==null?f.cachePool:null),f!==null?Dm(n,f):rf(),Nm(n);else return o=n.lanes=536870912,R0(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Ll(n,f.cachePool),Dm(n,f),es(),n.memoizedState=null):(t!==null&&Ll(n,null),rf(),es());return Vn(t,n,u,a),n.child}function Oo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function R0(t,n,a,o,u){var f=$u();return f=f===null?null:{parent:En._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ll(n,null),rf(),Nm(n),t!==null&&pr(t,n,o,!0),n.childLanes=u,null}function Zl(t,n){return n=Ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function C0(t,n,a){return Hs(n,t.child,null,a),t=Zl(n,n.pendingProps),t.flags|=2,_i(n),n.memoizedState=null,t}function Db(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(zt){if(o.mode==="hidden")return t=Zl(n,o),n.lanes=536870912,Oo(null,t);if(lf(n),(t=cn)?(t=Hg(t,Di),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=dm(t),a.return=n,n.child=a,Hn=n,cn=null)):t=null,t===null)throw Ya(n);return n.lanes=536870912,null}return Zl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(lf(n),u)if(n.flags&256)n.flags&=-257,n=C0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(An||pr(t,n,a,!1),u=(a&t.childLanes)!==0,An||u){if(o=on,o!==null&&(v=Gn(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ls(t,v),li(o,t,v),Cf;rc(),n=C0(t,n,a)}else t=f.treeContext,cn=Ui(v.nextSibling),Hn=n,zt=!0,qa=null,Di=!1,t!==null&&mm(n,t),n=Zl(n,o),n.flags|=4096;return n}return t=da(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Df(t,n,a,o,u){return zs(n),a=uf(t,n,a,o,void 0,u),o=ff(),t!==null&&!An?(df(t,n,u),_a(t,n,u)):(zt&&o&&ju(n),n.flags|=1,Vn(t,n,a,u),n.child)}function D0(t,n,a,o,u,f){return zs(n),n.updateQueue=null,a=Lm(n,o,a,u),Um(t),o=ff(),t!==null&&!An?(df(t,n,f),_a(t,n,f)):(zt&&o&&ju(n),n.flags|=1,Vn(t,n,a,f),n.child)}function N0(t,n,a,o,u){if(zs(n),n.stateNode===null){var f=ur,v=a.contextType;typeof v=="object"&&v!==null&&(f=kn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},tf(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?kn(v):ur,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Af(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&wf.enqueueReplaceState(f,f.state,null),Co(n,o,f,u),Ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var D=n.memoizedProps,X=Vs(a,D);f.props=X;var oe=f.context,ye=a.contextType;v=ur,typeof ye=="object"&&ye!==null&&(v=kn(ye));var we=a.getDerivedStateFromProps;ye=typeof we=="function"||typeof f.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,ye||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(D||oe!==v)&&x0(n,f,o,v),Ka=!1;var pe=n.memoizedState;f.state=pe,Co(n,o,f,u),Ro(),oe=n.memoizedState,D||pe!==oe||Ka?(typeof we=="function"&&(Af(n,a,we,o),oe=n.memoizedState),(X=Ka||g0(n,a,X,o,pe,oe,v))?(ye||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=oe),f.props=o,f.state=oe,f.context=v,o=X):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,nf(t,n),v=n.memoizedProps,ye=Vs(a,v),f.props=ye,we=n.pendingProps,pe=f.context,oe=a.contextType,X=ur,typeof oe=="object"&&oe!==null&&(X=kn(oe)),D=a.getDerivedStateFromProps,(oe=typeof D=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==we||pe!==X)&&x0(n,f,o,X),Ka=!1,pe=n.memoizedState,f.state=pe,Co(n,o,f,u),Ro();var ge=n.memoizedState;v!==we||pe!==ge||Ka||t!==null&&t.dependencies!==null&&Nl(t.dependencies)?(typeof D=="function"&&(Af(n,a,D,o),ge=n.memoizedState),(ye=Ka||g0(n,a,ye,o,pe,ge,X)||t!==null&&t.dependencies!==null&&Nl(t.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ge,X),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ge,X)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ge),f.props=o,f.state=ge,f.context=X,o=ye):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Kl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Hs(n,t.child,null,u),n.child=Hs(n,null,a,u)):Vn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=_a(t,n,u),t}function U0(t,n,a,o){return Ps(),n.flags|=256,Vn(t,n,a,o),n.child}var Nf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(t){return{baseLanes:t,cachePool:ym()}}function Lf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=bi),t}function L0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(yn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(zt){if(u?$a(n):es(),(t=cn)?(t=Hg(t,Di),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Wa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=dm(t),a.return=n,n.child=a,Hn=n,cn=null)):t=null,t===null)throw Ya(n);return md(t)?n.lanes=32:n.lanes=536870912,null}var D=o.children;return o=o.fallback,u?(es(),u=n.mode,D=Ql({mode:"hidden",children:D},u),o=Os(o,u,a,null),D.return=n,o.return=n,D.sibling=o,n.child=D,o=n.child,o.memoizedState=Uf(a),o.childLanes=Lf(t,v,a),n.memoizedState=Nf,Oo(null,o)):($a(n),Of(n,D))}var X=t.memoizedState;if(X!==null&&(D=X.dehydrated,D!==null)){if(f)n.flags&256?($a(n),n.flags&=-257,n=Pf(t,n,a)):n.memoizedState!==null?(es(),n.child=t.child,n.flags|=128,n=null):(es(),D=o.fallback,u=n.mode,o=Ql({mode:"visible",children:o.children},u),D=Os(D,u,a,null),D.flags|=2,o.return=n,D.return=n,o.sibling=D,n.child=o,Hs(n,t.child,null,a),o=n.child,o.memoizedState=Uf(a),o.childLanes=Lf(t,v,a),n.memoizedState=Nf,n=Oo(null,o));else if($a(n),md(D)){if(v=D.nextSibling&&D.nextSibling.dataset,v)var oe=v.dgst;v=oe,o=Error(s(419)),o.stack="",o.digest=v,So({value:o,source:null,stack:null}),n=Pf(t,n,a)}else if(An||pr(t,n,a,!1),v=(a&t.childLanes)!==0,An||v){if(v=on,v!==null&&(o=Gn(v,a),o!==0&&o!==X.retryLane))throw X.retryLane=o,Ls(t,o),li(v,t,o),Cf;pd(D)||rc(),n=Pf(t,n,a)}else pd(D)?(n.flags|=192,n.child=t.child,n=null):(t=X.treeContext,cn=Ui(D.nextSibling),Hn=n,zt=!0,qa=null,Di=!1,t!==null&&mm(n,t),n=Of(n,o.children),n.flags|=4096);return n}return u?(es(),D=o.fallback,u=n.mode,X=t.child,oe=X.sibling,o=da(X,{mode:"hidden",children:o.children}),o.subtreeFlags=X.subtreeFlags&65011712,oe!==null?D=da(oe,D):(D=Os(D,u,a,null),D.flags|=2),D.return=n,o.return=n,o.sibling=D,n.child=o,Oo(null,o),o=n.child,D=t.child.memoizedState,D===null?D=Uf(a):(u=D.cachePool,u!==null?(X=En._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=ym(),D={baseLanes:D.baseLanes|a,cachePool:u}),o.memoizedState=D,o.childLanes=Lf(t,v,a),n.memoizedState=Nf,Oo(t.child,o)):($a(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Of(t,n){return n=Ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ql(t,n){return t=gi(22,t,null,n),t.lanes=0,t}function Pf(t,n,a){return Hs(n,t.child,null,a),t=Of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function O0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Zu(t.return,n,a)}function If(t,n,a,o,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function P0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=yn.current,D=(v&2)!==0;if(D?(v=v&1|2,n.flags|=128):v&=1,be(yn,v),Vn(t,n,o,a),o=zt?yo:0,!D&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&O0(t,a,n);else if(t.tag===19)O0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Bl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),If(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Bl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}If(n,!0,a,null,f,o);break;case"together":If(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function _a(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),is|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Nl(t)))}function Nb(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Za(n,En,t.memoizedState.cache),Ps();break;case 27:case 5:Ze(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,lf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?($a(n),n.flags|=128,null):(a&n.child.childLanes)!==0?L0(t,n,a):($a(n),t=_a(t,n,a),t!==null?t.sibling:null);$a(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(pr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return P0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),be(yn,yn.current),o)break;return null;case 22:return n.lanes=0,w0(t,n,a,n.pendingProps);case 24:Za(n,En,t.memoizedState.cache)}return _a(t,n,a)}function I0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)An=!0;else{if(!zf(t,a)&&(n.flags&128)===0)return An=!1,Nb(t,n,a);An=(t.flags&131072)!==0}else An=!1,zt&&(n.flags&1048576)!==0&&pm(n,yo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Bs(n.elementType),n.type=t,typeof t=="function")Hu(t)?(o=Vs(t,o),n.tag=1,n=N0(null,n,t,o,a)):(n.tag=0,n=Df(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===F){n.tag=11,n=E0(null,n,t,o,a);break e}else if(u===k){n.tag=14,n=T0(null,n,t,o,a);break e}}throw n=te(t)||t,Error(s(306,n,""))}}return n;case 0:return Df(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Vs(o,n.pendingProps),N0(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,nf(t,n),Co(n,o,null,a);var v=n.memoizedState;if(o=v.cache,Za(n,En,o),o!==f.cache&&Ku(n,[En],a,!0),Ro(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=U0(t,n,o,a);break e}else if(o!==u){u=wi(Error(s(424)),n),So(u),n=U0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(cn=Ui(t.firstChild),Hn=n,zt=!0,qa=null,Di=!0,a=wm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ps(),o===u){n=_a(t,n,a);break e}Vn(t,n,o,a)}n=n.child}return n;case 26:return Kl(t,n),t===null?(a=qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:zt||(a=n.type,t=n.pendingProps,o=hc(se.current).createElement(a),o[St]=n,o[gn]=t,jn(o,a,t),Mn(o),n.stateNode=o):n.memoizedState=qg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ze(n),t===null&&zt&&(o=n.stateNode=jg(n.type,n.pendingProps,se.current),Hn=n,Di=!0,u=cn,ls(n.type)?(gd=u,cn=Ui(o.firstChild)):cn=u),Vn(t,n,n.pendingProps.children,a),Kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&zt&&((u=o=cn)&&(o=oy(o,n.type,n.pendingProps,Di),o!==null?(n.stateNode=o,Hn=n,cn=Ui(o.firstChild),Di=!1,u=!0):u=!1),u||Ya(n)),Ze(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,fd(u,f)?o=null:v!==null&&fd(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=uf(t,n,Sb,null,null,a),Zo._currentValue=u),Kl(t,n),Vn(t,n,o,a),n.child;case 6:return t===null&&zt&&((t=a=cn)&&(a=ly(a,n.pendingProps,Di),a!==null?(n.stateNode=a,Hn=n,cn=null,t=!0):t=!1),t||Ya(n)),null;case 13:return L0(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Hs(n,null,o,a):Vn(t,n,o,a),n.child;case 11:return E0(t,n,n.type,n.pendingProps,a);case 7:return Vn(t,n,n.pendingProps,a),n.child;case 8:return Vn(t,n,n.pendingProps.children,a),n.child;case 12:return Vn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Za(n,n.type,o.value),Vn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,zs(n),u=kn(u),o=o(u),n.flags|=1,Vn(t,n,o,a),n.child;case 14:return T0(t,n,n.type,n.pendingProps,a);case 15:return A0(t,n,n.type,n.pendingProps,a);case 19:return P0(t,n,a);case 31:return Db(t,n,a);case 22:return w0(t,n,a,n.pendingProps);case 24:return zs(n),o=kn(En),t===null?(u=$u(),u===null&&(u=on,f=Qu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},tf(n),Za(n,En,u)):((t.lanes&a)!==0&&(nf(t,n),Co(n,null,null,a),Ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Za(n,En,o)):(o=f.cache,Za(n,En,o),o!==u.cache&&Ku(n,[En],a,!0))),Vn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function va(t){t.flags|=4}function Ff(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(cg())t.flags|=8192;else throw Gs=Pl,ef}else t.flags&=-16777217}function z0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Jg(n))if(cg())t.flags|=8192;else throw Gs=Pl,ef}function Jl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ne():536870912,t.lanes|=n,Ar|=n)}function Po(t,n){if(!zt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function un(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ub(t,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(n),null;case 1:return un(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ma(En),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(hr(n)?va(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,qu())),un(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(va(n),f!==null?(un(n),z0(n,f)):(un(n),Ff(n,u,null,o,a))):f?f!==t.memoizedState?(va(n),un(n),z0(n,f)):(un(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&va(n),un(n),Ff(n,u,t,o,a)),null;case 27:if(ke(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}t=Ce.current,hr(n)?gm(n):(t=jg(u,o,a),n.stateNode=t,va(n))}return un(n),null;case 5:if(ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return un(n),null}if(f=Ce.current,hr(n))gm(n);else{var v=hc(se.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[St]=n,f[gn]=o;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(jn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&va(n)}}return un(n),Ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&va(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,hr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Hn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[St]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||Ya(n,!0)}else t=hc(t).createTextNode(o),t[St]=n,n.stateNode=t}return un(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=hr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[St]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),t=!1}else a=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(_i(n),n):(_i(n),null);if((n.flags&128)!==0)throw Error(s(558))}return un(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=hr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[St]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;un(n),u=!1}else u=qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(_i(n),n):(_i(n),null)}return _i(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Jl(n,n.updateQueue),un(n),null);case 4:return Re(),t===null&&rd(n.stateNode.containerInfo),un(n),null;case 10:return ma(n.type),un(n),null;case 19:if(Z(yn),o=n.memoizedState,o===null)return un(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Po(o,!1);else{if(_n!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Bl(t),f!==null){for(n.flags|=128,Po(o,!1),t=f.updateQueue,n.updateQueue=t,Jl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)fm(a,t),a=a.sibling;return be(yn,yn.current&1|2),zt&&ha(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Se()>ic&&(n.flags|=128,u=!0,Po(o,!1),n.lanes=4194304)}else{if(!u)if(t=Bl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Jl(n,t),Po(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!zt)return un(n),null}else 2*Se()-o.renderingStartTime>ic&&a!==536870912&&(n.flags|=128,u=!0,Po(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,a=yn.current,be(yn,u?a&1|2:a&1),zt&&ha(n,o.treeForkCount),t):(un(n),null);case 22:case 23:return _i(n),of(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(un(n),n.subtreeFlags&6&&(n.flags|=8192)):un(n),a=n.updateQueue,a!==null&&Jl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(Fs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ma(En),un(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Lb(t,n){switch(Xu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ma(En),Re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 31:if(n.memoizedState!==null){if(_i(n),n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(_i(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ps()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(yn),null;case 4:return Re(),null;case 10:return ma(n.type),null;case 22:case 23:return _i(n),of(),t!==null&&Z(Fs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ma(En),null;case 25:return null;default:return null}}function F0(t,n){switch(Xu(n),n.tag){case 3:ma(En),Re();break;case 26:case 27:case 5:ke(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&_i(n);break;case 13:_i(n);break;case 19:Z(yn);break;case 10:ma(n.type);break;case 22:case 23:_i(n),of(),t!==null&&Z(Fs);break;case 24:ma(En)}}function Io(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(D){Qt(n,n.return,D)}}function ts(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var v=o.inst,D=v.destroy;if(D!==void 0){v.destroy=void 0,u=n;var X=a,oe=D;try{oe()}catch(ye){Qt(u,X,ye)}}}o=o.next}while(o!==f)}}catch(ye){Qt(n,n.return,ye)}}function B0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cm(n,a)}catch(o){Qt(t,t.return,o)}}}function G0(t,n,a){a.props=Vs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Qt(t,n,o)}}function zo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Qt(t,n,u)}}function Ki(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Qt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Qt(t,n,u)}else a.current=null}function H0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Qt(t,t.return,u)}}function Bf(t,n,a){try{var o=t.stateNode;ty(o,t.type,a,n),o[gn]=n}catch(u){Qt(t,t.return,u)}}function k0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ls(t.type)||t.tag===4}function Gf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||k0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ls(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Hf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ua));else if(o!==4&&(o===27&&ls(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Hf(t,n,a),t=t.sibling;t!==null;)Hf(t,n,a),t=t.sibling}function $l(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&ls(t.type)&&(a=t.stateNode),t=t.child,t!==null))for($l(t,n,a),t=t.sibling;t!==null;)$l(t,n,a),t=t.sibling}function V0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);jn(n,o,a),n[St]=t,n[gn]=a}catch(f){Qt(t,t.return,f)}}var ba=!1,wn=!1,kf=!1,j0=typeof WeakSet=="function"?WeakSet:Set,In=null;function Ob(t,n){if(t=t.containerInfo,cd=bc,t=nm(t),Ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,D=-1,X=-1,oe=0,ye=0,we=t,pe=null;t:for(;;){for(var ge;we!==a||u!==0&&we.nodeType!==3||(D=v+u),we!==f||o!==0&&we.nodeType!==3||(X=v+o),we.nodeType===3&&(v+=we.nodeValue.length),(ge=we.firstChild)!==null;)pe=we,we=ge;for(;;){if(we===t)break t;if(pe===a&&++oe===u&&(D=v),pe===f&&++ye===o&&(X=v),(ge=we.nextSibling)!==null)break;we=pe,pe=we.parentNode}we=ge}a=D===-1||X===-1?null:{start:D,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(ud={focusedElem:t,selectionRange:a},bc=!1,In=n;In!==null;)if(n=In,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,In=t;else for(;In!==null;){switch(n=In,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var et=Vs(a.type,u);t=o.getSnapshotBeforeUpdate(et,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(pt){Qt(a,a.return,pt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)hd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,In=t;break}In=n.return}}function X0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Sa(t,a),o&4&&Io(5,a);break;case 1:if(Sa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Qt(a,a.return,v)}else{var u=Vs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Qt(a,a.return,v)}}o&64&&B0(a),o&512&&zo(a,a.return);break;case 3:if(Sa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(t,n)}catch(v){Qt(a,a.return,v)}}break;case 27:n===null&&o&4&&V0(a);case 26:case 5:Sa(t,a),n===null&&o&4&&H0(a),o&512&&zo(a,a.return);break;case 12:Sa(t,a);break;case 31:Sa(t,a),o&4&&Y0(t,a);break;case 13:Sa(t,a),o&4&&Z0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Vb.bind(null,a),cy(t,a))));break;case 22:if(o=a.memoizedState!==null||ba,!o){n=n!==null&&n.memoizedState!==null||wn,u=ba;var f=wn;ba=o,(wn=n)&&!f?Ma(t,a,(a.subtreeFlags&8772)!==0):Sa(t,a),ba=u,wn=f}break;case 30:break;default:Sa(t,a)}}function W0(t){var n=t.alternate;n!==null&&(t.alternate=null,W0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&uo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var hn=null,ai=!1;function ya(t,n,a){for(a=a.child;a!==null;)q0(t,n,a),a=a.sibling}function q0(t,n,a){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 26:wn||Ki(a,n),ya(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:wn||Ki(a,n);var o=hn,u=ai;ls(a.type)&&(hn=a.stateNode,ai=!1),ya(t,n,a),Wo(a.stateNode),hn=o,ai=u;break;case 5:wn||Ki(a,n);case 6:if(o=hn,u=ai,hn=null,ya(t,n,a),hn=o,ai=u,hn!==null)if(ai)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(f){Qt(a,n,f)}else try{hn.removeChild(a.stateNode)}catch(f){Qt(a,n,f)}break;case 18:hn!==null&&(ai?(t=hn,Bg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Or(t)):Bg(hn,a.stateNode));break;case 4:o=hn,u=ai,hn=a.stateNode.containerInfo,ai=!0,ya(t,n,a),hn=o,ai=u;break;case 0:case 11:case 14:case 15:ts(2,a,n),wn||ts(4,a,n),ya(t,n,a);break;case 1:wn||(Ki(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&G0(a,n,o)),ya(t,n,a);break;case 21:ya(t,n,a);break;case 22:wn=(o=wn)||a.memoizedState!==null,ya(t,n,a),wn=o;break;default:ya(t,n,a)}}function Y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Or(t)}catch(a){Qt(n,n.return,a)}}}function Z0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Or(t)}catch(a){Qt(n,n.return,a)}}function Pb(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new j0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new j0),n;default:throw Error(s(435,t.tag))}}function ec(t,n){var a=Pb(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=jb.bind(null,t,o);o.then(u,u)}})}function si(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,v=n,D=v;e:for(;D!==null;){switch(D.tag){case 27:if(ls(D.type)){hn=D.stateNode,ai=!1;break e}break;case 5:hn=D.stateNode,ai=!1;break e;case 3:case 4:hn=D.stateNode.containerInfo,ai=!0;break e}D=D.return}if(hn===null)throw Error(s(160));q0(f,v,u),hn=null,ai=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)K0(n,t),n=n.sibling}var Gi=null;function K0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:si(n,t),ri(t),o&4&&(ts(3,t,t.return),Io(3,t),ts(5,t,t.return));break;case 1:si(n,t),ri(t),o&512&&(wn||a===null||Ki(a,a.return)),o&64&&ba&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Gi;if(si(n,t),ri(t),o&512&&(wn||a===null||Ki(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ga]||f[St]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),jn(f,o,a),f[St]=t,Mn(f),o=f;break e;case"link":var v=Kg("link","href",u).get(o+(a.href||""));if(v){for(var D=0;D<v.length;D++)if(f=v[D],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(D,1);break t}}f=u.createElement(o),jn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=Kg("meta","content",u).get(o+(a.content||""))){for(D=0;D<v.length;D++)if(f=v[D],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(D,1);break t}}f=u.createElement(o),jn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[St]=t,Mn(f),o=f}t.stateNode=o}else Qg(u,t.type,t.stateNode);else t.stateNode=Zg(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Qg(u,t.type,t.stateNode):Zg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Bf(t,t.memoizedProps,a.memoizedProps)}break;case 27:si(n,t),ri(t),o&512&&(wn||a===null||Ki(a,a.return)),a!==null&&o&4&&Bf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(si(n,t),ri(t),o&512&&(wn||a===null||Ki(a,a.return)),t.flags&32){u=t.stateNode;try{pi(u,"")}catch(et){Qt(t,t.return,et)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Bf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(si(n,t),ri(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(et){Qt(t,t.return,et)}}break;case 3:if(gc=null,u=Gi,Gi=pc(n.containerInfo),si(n,t),Gi=u,ri(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Or(n.containerInfo)}catch(et){Qt(t,t.return,et)}kf&&(kf=!1,Q0(t));break;case 4:o=Gi,Gi=pc(t.stateNode.containerInfo),si(n,t),ri(t),Gi=o;break;case 12:si(n,t),ri(t);break;case 31:si(n,t),ri(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 13:si(n,t),ri(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(nc=Se()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 22:u=t.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,oe=ba,ye=wn;if(ba=oe||u,wn=ye||X,si(n,t),wn=ye,ba=oe,ri(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||ba||wn||js(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(f=X.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{D=X.stateNode;var we=X.memoizedProps.style,pe=we!=null&&we.hasOwnProperty("display")?we.display:null;D.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(et){Qt(X,X.return,et)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(et){Qt(X,X.return,et)}}}else if(n.tag===18){if(a===null){X=n;try{var ge=X.stateNode;u?Gg(ge,!0):Gg(X.stateNode,!1)}catch(et){Qt(X,X.return,et)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ec(t,a))));break;case 19:si(n,t),ri(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ec(t,o)));break;case 30:break;case 21:break;default:si(n,t),ri(t)}}function ri(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(k0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Gf(t);$l(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(pi(v,""),a.flags&=-33);var D=Gf(t);$l(t,D,v);break;case 3:case 4:var X=a.stateNode.containerInfo,oe=Gf(t);Hf(t,oe,X);break;default:throw Error(s(161))}}catch(ye){Qt(t,t.return,ye)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)X0(t,n.alternate,n),n=n.sibling}function js(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ts(4,n,n.return),js(n);break;case 1:Ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&G0(n,n.return,a),js(n);break;case 27:Wo(n.stateNode);case 26:case 5:Ki(n,n.return),js(n);break;case 22:n.memoizedState===null&&js(n);break;case 30:js(n);break;default:js(n)}t=t.sibling}}function Ma(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ma(u,f,a),Io(4,f);break;case 1:if(Ma(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Qt(o,o.return,oe)}if(o=f,u=o.updateQueue,u!==null){var D=o.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Rm(X[u],D)}catch(oe){Qt(o,o.return,oe)}}a&&v&64&&B0(f),zo(f,f.return);break;case 27:V0(f);case 26:case 5:Ma(u,f,a),a&&o===null&&v&4&&H0(f),zo(f,f.return);break;case 12:Ma(u,f,a);break;case 31:Ma(u,f,a),a&&v&4&&Y0(u,f);break;case 13:Ma(u,f,a),a&&v&4&&Z0(u,f);break;case 22:f.memoizedState===null&&Ma(u,f,a),zo(f,f.return);break;case 30:break;default:Ma(u,f,a)}n=n.sibling}}function Vf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function Hi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)J0(t,n,a,o),n=n.sibling}function J0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Hi(t,n,a,o),u&2048&&Io(9,n);break;case 1:Hi(t,n,a,o);break;case 3:Hi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(u&2048){Hi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,D=f.onPostCommit;typeof D=="function"&&D(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(X){Qt(n,n.return,X)}}else Hi(t,n,a,o);break;case 31:Hi(t,n,a,o);break;case 13:Hi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Hi(t,n,a,o):Fo(t,n):f._visibility&2?Hi(t,n,a,o):(f._visibility|=2,Mr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(v,n);break;case 24:Hi(t,n,a,o),u&2048&&jf(n.alternate,n);break;default:Hi(t,n,a,o)}}function Mr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,D=a,X=o,oe=v.flags;switch(v.tag){case 0:case 11:case 15:Mr(f,v,D,X,u),Io(8,v);break;case 23:break;case 22:var ye=v.stateNode;v.memoizedState!==null?ye._visibility&2?Mr(f,v,D,X,u):Fo(f,v):(ye._visibility|=2,Mr(f,v,D,X,u)),u&&oe&2048&&Vf(v.alternate,v);break;case 24:Mr(f,v,D,X,u),u&&oe&2048&&jf(v.alternate,v);break;default:Mr(f,v,D,X,u)}n=n.sibling}}function Fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Fo(a,o),u&2048&&Vf(o.alternate,o);break;case 24:Fo(a,o),u&2048&&jf(o.alternate,o);break;default:Fo(a,o)}n=n.sibling}}var Bo=8192;function Er(t,n,a){if(t.subtreeFlags&Bo)for(t=t.child;t!==null;)$0(t,n,a),t=t.sibling}function $0(t,n,a){switch(t.tag){case 26:Er(t,n,a),t.flags&Bo&&t.memoizedState!==null&&yy(a,Gi,t.memoizedState,t.memoizedProps);break;case 5:Er(t,n,a);break;case 3:case 4:var o=Gi;Gi=pc(t.stateNode.containerInfo),Er(t,n,a),Gi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,Er(t,n,a),Bo=o):Er(t,n,a));break;default:Er(t,n,a)}}function eg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,ng(o,t)}eg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tg(t),t=t.sibling}function tg(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&ts(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):Go(t);break;default:Go(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];In=o,ng(o,t)}eg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ts(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function ng(t,n){for(;In!==null;){var a=In;switch(a.tag){case 0:case 11:case 15:ts(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,In=o;else e:for(a=t;In!==null;){o=In;var u=o.sibling,f=o.return;if(W0(o),o===a){In=null;break e}if(u!==null){u.return=f,In=u;break e}In=f}}}var Ib={getCacheForType:function(t){var n=kn(En),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return kn(En).controller.signal}},zb=typeof WeakMap=="function"?WeakMap:Map,jt=0,on=null,Nt=null,Lt=0,Kt=0,vi=null,ns=!1,Tr=!1,Xf=!1,Ea=0,_n=0,is=0,Xs=0,Wf=0,bi=0,Ar=0,Ho=null,oi=null,qf=!1,nc=0,ig=0,ic=1/0,ac=null,as=null,Nn=0,ss=null,wr=null,Ta=0,Yf=0,Zf=null,ag=null,ko=0,Kf=null;function yi(){return(jt&2)!==0&&Lt!==0?Lt&-Lt:E.T!==null?nd():Cn()}function sg(){if(bi===0)if((Lt&536870912)===0||zt){var t=vt;vt<<=1,(vt&3932160)===0&&(vt=262144),bi=t}else bi=536870912;return t=xi.current,t!==null&&(t.flags|=32),bi}function li(t,n,a){(t===on&&(Kt===2||Kt===9)||t.cancelPendingCommit!==null)&&(Rr(t,0),rs(t,Lt,bi,!1)),ut(t,a),((jt&2)===0||t!==on)&&(t===on&&((jt&2)===0&&(Xs|=a),_n===4&&rs(t,Lt,bi,!1)),Qi(t))}function rg(t,n,a){if((jt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ie(t,n),u=o?Gb(t,n):Jf(t,n,!0),f=o;do{if(u===0){Tr&&!o&&rs(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Fb(a)){u=Jf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var D=t;u=Ho;var X=D.current.memoizedState.isDehydrated;if(X&&(Rr(D,v).flags|=256),v=Jf(D,v,!1),v!==2){if(Xf&&!X){D.errorRecoveryDisabledLanes|=f,Xs|=f,u=4;break e}f=oi,oi=u,f!==null&&(oi===null?oi=f:oi.push.apply(oi,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){Rr(t,0),rs(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:rs(o,n,bi,!ns);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=nc+300-Se(),10<u)){if(rs(o,n,bi,!ns),ve(o,0,!0)!==0)break e;Ta=n,o.timeoutHandle=zg(og.bind(null,o,a,oi,ac,qf,n,bi,Xs,Ar,ns,f,"Throttled",-0,0),u);break e}og(o,a,oi,ac,qf,n,bi,Xs,Ar,ns,f,null,-0,0)}}break}while(!0);Qi(t)}function og(t,n,a,o,u,f,v,D,X,oe,ye,we,pe,ge){if(t.timeoutHandle=-1,we=n.subtreeFlags,we&8192||(we&16785408)===16785408){we={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ua},$0(n,f,we);var et=(f&62914560)===f?nc-Se():(f&4194048)===f?ig-Se():0;if(et=Sy(we,et),et!==null){Ta=f,t.cancelPendingCommit=et(mg.bind(null,t,n,f,a,o,u,v,D,X,ye,we,null,pe,ge)),rs(t,f,v,!oe);return}}mg(t,n,f,a,o,u,v,D,X)}function Fb(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!mi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function rs(t,n,a,o){n&=~Wf,n&=~Xs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Rt(t,a,n)}function sc(){return(jt&6)===0?(Vo(0),!1):!0}function Qf(){if(Nt!==null){if(Kt===0)var t=Nt.return;else t=Nt,pa=Is=null,hf(t),_r=null,To=0,t=Nt;for(;t!==null;)F0(t.alternate,t),t=t.return;Nt=null}}function Rr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ay(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ta=0,Qf(),on=t,Nt=a=da(t.current,null),Lt=n,Kt=0,vi=null,ns=!1,Tr=Ie(t,n),Xf=!1,Ar=bi=Wf=Xs=is=_n=0,oi=Ho=null,qf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return Ea=n,Al(),a}function lg(t,n){Et=null,E.H=Lo,n===xr||n===Ol?(n=Em(),Kt=3):n===ef?(n=Em(),Kt=4):Kt=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vi=n,Nt===null&&(_n=1,Yl(t,wi(n,t.current)))}function cg(){var t=xi.current;return t===null?!0:(Lt&4194048)===Lt?Ni===null:(Lt&62914560)===Lt||(Lt&536870912)!==0?t===Ni:!1}function ug(){var t=E.H;return E.H=Lo,t===null?Lo:t}function fg(){var t=E.A;return E.A=Ib,t}function rc(){_n=4,ns||(Lt&4194048)!==Lt&&xi.current!==null||(Tr=!0),(is&134217727)===0&&(Xs&134217727)===0||on===null||rs(on,Lt,bi,!1)}function Jf(t,n,a){var o=jt;jt|=2;var u=ug(),f=fg();(on!==t||Lt!==n)&&(ac=null,Rr(t,n)),n=!1;var v=_n;e:do try{if(Kt!==0&&Nt!==null){var D=Nt,X=vi;switch(Kt){case 8:Qf(),v=6;break e;case 3:case 2:case 9:case 6:xi.current===null&&(n=!0);var oe=Kt;if(Kt=0,vi=null,Cr(t,D,X,oe),a&&Tr){v=0;break e}break;default:oe=Kt,Kt=0,vi=null,Cr(t,D,X,oe)}}Bb(),v=_n;break}catch(ye){lg(t,ye)}while(!0);return n&&t.shellSuspendCounter++,pa=Is=null,jt=o,E.H=u,E.A=f,Nt===null&&(on=null,Lt=0,Al()),v}function Bb(){for(;Nt!==null;)dg(Nt)}function Gb(t,n){var a=jt;jt|=2;var o=ug(),u=fg();on!==t||Lt!==n?(ac=null,ic=Se()+500,Rr(t,n)):Tr=Ie(t,n);e:do try{if(Kt!==0&&Nt!==null){n=Nt;var f=vi;t:switch(Kt){case 1:Kt=0,vi=null,Cr(t,n,f,1);break;case 2:case 9:if(Sm(f)){Kt=0,vi=null,hg(n);break}n=function(){Kt!==2&&Kt!==9||on!==t||(Kt=7),Qi(t)},f.then(n,n);break e;case 3:Kt=7;break e;case 4:Kt=5;break e;case 7:Sm(f)?(Kt=0,vi=null,hg(n)):(Kt=0,vi=null,Cr(t,n,f,7));break;case 5:var v=null;switch(Nt.tag){case 26:v=Nt.memoizedState;case 5:case 27:var D=Nt;if(v?Jg(v):D.stateNode.complete){Kt=0,vi=null;var X=D.sibling;if(X!==null)Nt=X;else{var oe=D.return;oe!==null?(Nt=oe,oc(oe)):Nt=null}break t}}Kt=0,vi=null,Cr(t,n,f,5);break;case 6:Kt=0,vi=null,Cr(t,n,f,6);break;case 8:Qf(),_n=6;break e;default:throw Error(s(462))}}Hb();break}catch(ye){lg(t,ye)}while(!0);return pa=Is=null,E.H=o,E.A=u,jt=a,Nt!==null?0:(on=null,Lt=0,Al(),_n)}function Hb(){for(;Nt!==null&&!Xe();)dg(Nt)}function dg(t){var n=I0(t.alternate,t,Ea);t.memoizedProps=t.pendingProps,n===null?oc(t):Nt=n}function hg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=D0(a,n,n.pendingProps,n.type,void 0,Lt);break;case 11:n=D0(a,n,n.pendingProps,n.type.render,n.ref,Lt);break;case 5:hf(n);default:F0(a,n),n=Nt=fm(n,Ea),n=I0(a,n,Ea)}t.memoizedProps=t.pendingProps,n===null?oc(t):Nt=n}function Cr(t,n,a,o){pa=Is=null,hf(n),_r=null,To=0;var u=n.return;try{if(Cb(t,u,n,a,Lt)){_n=1,Yl(t,wi(a,t.current)),Nt=null;return}}catch(f){if(u!==null)throw Nt=u,f;_n=1,Yl(t,wi(a,t.current)),Nt=null;return}n.flags&32768?(zt||o===1?t=!0:Tr||(Lt&536870912)!==0?t=!1:(ns=t=!0,(o===2||o===9||o===3||o===6)&&(o=xi.current,o!==null&&o.tag===13&&(o.flags|=16384))),pg(n,t)):oc(n)}function oc(t){var n=t;do{if((n.flags&32768)!==0){pg(n,ns);return}t=n.return;var a=Ub(n.alternate,n,Ea);if(a!==null){Nt=a;return}if(n=n.sibling,n!==null){Nt=n;return}Nt=n=t}while(n!==null);_n===0&&(_n=5)}function pg(t,n){do{var a=Lb(t.alternate,t);if(a!==null){a.flags&=32767,Nt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Nt=t;return}Nt=t=a}while(t!==null);_n=6,Nt=null}function mg(t,n,a,o,u,f,v,D,X){t.cancelPendingCommit=null;do lc();while(Nn!==0);if((jt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Bu,It(t,a,f,v,D,X),t===on&&(Nt=on=null,Lt=0),wr=n,ss=t,Ta=a,Yf=f,Zf=u,ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xb(G,function(){return bg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=E.T,E.T=null,u=L.p,L.p=2,v=jt,jt|=4;try{Ob(t,n,a)}finally{jt=v,L.p=u,E.T=o}}Nn=1,gg(),xg(),_g()}}function gg(){if(Nn===1){Nn=0;var t=ss,n=wr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=E.T,E.T=null;var o=L.p;L.p=2;var u=jt;jt|=4;try{K0(n,t);var f=ud,v=nm(t.containerInfo),D=f.focusedElem,X=f.selectionRange;if(v!==D&&D&&D.ownerDocument&&tm(D.ownerDocument.documentElement,D)){if(X!==null&&Ou(D)){var oe=X.start,ye=X.end;if(ye===void 0&&(ye=oe),"selectionStart"in D)D.selectionStart=oe,D.selectionEnd=Math.min(ye,D.value.length);else{var we=D.ownerDocument||document,pe=we&&we.defaultView||window;if(pe.getSelection){var ge=pe.getSelection(),et=D.textContent.length,pt=Math.min(X.start,et),nn=X.end===void 0?pt:Math.min(X.end,et);!ge.extend&&pt>nn&&(v=nn,nn=pt,pt=v);var ie=em(D,pt),K=em(D,nn);if(ie&&K&&(ge.rangeCount!==1||ge.anchorNode!==ie.node||ge.anchorOffset!==ie.offset||ge.focusNode!==K.node||ge.focusOffset!==K.offset)){var re=we.createRange();re.setStart(ie.node,ie.offset),ge.removeAllRanges(),pt>nn?(ge.addRange(re),ge.extend(K.node,K.offset)):(re.setEnd(K.node,K.offset),ge.addRange(re))}}}}for(we=[],ge=D;ge=ge.parentNode;)ge.nodeType===1&&we.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<we.length;D++){var Me=we[D];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}bc=!!cd,ud=cd=null}finally{jt=u,L.p=o,E.T=a}}t.current=n,Nn=2}}function xg(){if(Nn===2){Nn=0;var t=ss,n=wr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=E.T,E.T=null;var o=L.p;L.p=2;var u=jt;jt|=4;try{X0(t,n.alternate,n)}finally{jt=u,L.p=o,E.T=a}}Nn=3}}function _g(){if(Nn===4||Nn===3){Nn=0,tt();var t=ss,n=wr,a=Ta,o=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Nn=5:(Nn=0,wr=ss=null,vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(as=null),mn(a),n=n.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=E.T,u=L.p,L.p=2,E.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var D=o[v];f(D.value,{componentStack:D.stack})}}finally{E.T=n,L.p=u}}(Ta&3)!==0&&lc(),Qi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Kf?ko++:(ko=0,Kf=t):ko=0,Vo(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function lc(){return gg(),xg(),_g(),bg()}function bg(){if(Nn!==5)return!1;var t=ss,n=Yf;Yf=0;var a=mn(Ta),o=E.T,u=L.p;try{L.p=32>a?32:a,E.T=null,a=Zf,Zf=null;var f=ss,v=Ta;if(Nn=0,wr=ss=null,Ta=0,(jt&6)!==0)throw Error(s(331));var D=jt;if(jt|=4,tg(f.current),J0(f,f.current,v,a),jt=D,Vo(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(ne,f)}catch{}return!0}finally{L.p=u,E.T=o,vg(t,n)}}function yg(t,n,a){n=wi(a,n),n=Rf(t.stateNode,n,2),t=Ja(t,n,2),t!==null&&(ut(t,2),Qi(t))}function Qt(t,n,a){if(t.tag===3)yg(t,t,a);else for(;n!==null;){if(n.tag===3){yg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(as===null||!as.has(o))){t=wi(a,t),a=S0(2),o=Ja(n,a,2),o!==null&&(M0(a,o,n,t),ut(o,2),Qi(o));break}}n=n.return}}function $f(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new zb;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),t=kb.bind(null,t,n,a),n.then(t,t))}function kb(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,on===t&&(Lt&a)===a&&(_n===4||_n===3&&(Lt&62914560)===Lt&&300>Se()-nc?(jt&2)===0&&Rr(t,0):Wf|=a,Ar===Lt&&(Ar=0)),Qi(t)}function Sg(t,n){n===0&&(n=Ne()),t=Ls(t,n),t!==null&&(ut(t,n),Qi(t))}function Vb(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Sg(t,a)}function jb(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Sg(t,a)}function Xb(t,n){return j(t,n)}var cc=null,Dr=null,ed=!1,uc=!1,td=!1,os=0;function Qi(t){t!==Dr&&t.next===null&&(Dr===null?cc=Dr=t:Dr=Dr.next=t),uc=!0,ed||(ed=!0,qb())}function Vo(t,n){if(!td&&uc){td=!0;do for(var a=!1,o=cc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,D=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(v&~D),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Ag(o,f))}else f=Lt,f=ve(o,o===on?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ie(o,f)||(a=!0,Ag(o,f));o=o.next}while(a);td=!1}}function Wb(){Mg()}function Mg(){uc=ed=!1;var t=0;os!==0&&iy()&&(t=os);for(var n=Se(),a=null,o=cc;o!==null;){var u=o.next,f=Eg(o,n);f===0?(o.next=null,a===null?cc=u:a.next=u,u===null&&(Dr=a)):(a=o,(t!==0||(f&3)!==0)&&(uc=!0)),o=u}Nn!==0&&Nn!==5||Vo(t),os!==0&&(os=0)}function Eg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Fe(f),D=1<<v,X=u[v];X===-1?((D&a)===0||(D&o)!==0)&&(u[v]=Pe(D,n)):X<=n&&(t.expiredLanes|=D),f&=~D}if(n=on,a=Lt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Kt===2||Kt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&lt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ie(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&lt(o),mn(a)){case 2:case 8:a=x;break;case 32:a=G;break;case 268435456:a=ae;break;default:a=G}return o=Tg.bind(null,t),a=j(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&lt(o),t.callbackPriority=2,t.callbackNode=null,2}function Tg(t,n){if(Nn!==0&&Nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(lc()&&t.callbackNode!==a)return null;var o=Lt;return o=ve(t,t===on?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(rg(t,o,n),Eg(t,Se()),t.callbackNode!=null&&t.callbackNode===a?Tg.bind(null,t):null)}function Ag(t,n){if(lc())return null;rg(t,n,!0)}function qb(){sy(function(){(jt&6)!==0?j(R,Wb):Mg()})}function nd(){if(os===0){var t=mr;t===0&&(t=ct,ct<<=1,(ct&261888)===0&&(ct=256)),os=t}return os}function wg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Cs(""+t)}function Rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yb(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=wg((u[gn]||null).action),v=o.submitter;v&&(n=(n=v[gn]||null)?wg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var D=new Sl("action","action",null,o,u);t.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(os!==0){var X=v?Rg(u,v):new FormData(u);Sf(a,{pending:!0,data:X,method:u.method,action:f},null,X)}}else typeof f=="function"&&(D.preventDefault(),X=v?Rg(u,v):new FormData(u),Sf(a,{pending:!0,data:X,method:u.method,action:f},f,X))},currentTarget:u}]})}}for(var id=0;id<Fu.length;id++){var ad=Fu[id],Zb=ad.toLowerCase(),Kb=ad[0].toUpperCase()+ad.slice(1);Bi(Zb,"on"+Kb)}Bi(sm,"onAnimationEnd"),Bi(rm,"onAnimationIteration"),Bi(om,"onAnimationStart"),Bi("dblclick","onDoubleClick"),Bi("focusin","onFocus"),Bi("focusout","onBlur"),Bi(db,"onTransitionRun"),Bi(hb,"onTransitionStart"),Bi(pb,"onTransitionCancel"),Bi(lm,"onTransitionEnd"),he("onMouseEnter",["mouseout","mouseover"]),he("onMouseLeave",["mouseout","mouseover"]),he("onPointerEnter",["pointerout","pointerover"]),he("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var D=o[v],X=D.instance,oe=D.currentTarget;if(D=D.listener,X!==f&&u.isPropagationStopped())break e;f=D,u.currentTarget=oe;try{f(u)}catch(ye){Tl(ye)}u.currentTarget=null,f=X}else for(v=0;v<o.length;v++){if(D=o[v],X=D.instance,oe=D.currentTarget,D=D.listener,X!==f&&u.isPropagationStopped())break e;f=D,u.currentTarget=oe;try{f(u)}catch(ye){Tl(ye)}u.currentTarget=null,f=X}}}}function Ut(t,n){var a=n[Ba];a===void 0&&(a=n[Ba]=new Set);var o=t+"__bubble";a.has(o)||(Dg(n,t,2,!1),a.add(o))}function sd(t,n,a){var o=0;n&&(o|=4),Dg(a,t,o,n)}var fc="_reactListening"+Math.random().toString(36).slice(2);function rd(t){if(!t[fc]){t[fc]=!0,_l.forEach(function(a){a!=="selectionchange"&&(Qb.has(a)||sd(a,!1,t),sd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[fc]||(n[fc]=!0,sd("selectionchange",!1,n))}}function Dg(t,n,a,o){switch(sx(n)){case 2:var u=Ty;break;case 8:u=Ay;break;default:u=yd}a=u.bind(null,n,a,t),u=void 0,!Tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function od(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var D=o.stateNode.containerInfo;if(D===u)break;if(v===4)for(v=o.return;v!==null;){var X=v.tag;if((X===3||X===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;D!==null;){if(v=Ha(D),v===null)return;if(X=v.tag,X===5||X===6||X===26||X===27){o=f=v;continue e}D=D.parentNode}}o=o.return}Pp(function(){var oe=f,ye=Mu(a),we=[];e:{var pe=cm.get(t);if(pe!==void 0){var ge=Sl,et=t;switch(t){case"keypress":if(bl(a)===0)break e;case"keydown":case"keyup":ge=jv;break;case"focusin":et="focus",ge=Cu;break;case"focusout":et="blur",ge=Cu;break;case"beforeblur":case"afterblur":ge=Cu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=qv;break;case sm:case rm:case om:ge=Pv;break;case lm:ge=Zv;break;case"scroll":case"scrollend":ge=Dv;break;case"wheel":ge=Qv;break;case"copy":case"cut":case"paste":ge=zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Gp;break;case"toggle":case"beforetoggle":ge=$v}var pt=(n&4)!==0,nn=!pt&&(t==="scroll"||t==="scrollend"),ie=pt?pe!==null?pe+"Capture":null:pe;pt=[];for(var K=oe,re;K!==null;){var Me=K;if(re=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||re===null||ie===null||(Me=fo(K,ie),Me!=null&&pt.push(Xo(K,Me,re))),nn)break;K=K.return}0<pt.length&&(pe=new ge(pe,et,null,a,ye),we.push({event:pe,listeners:pt}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",pe&&a!==Su&&(et=a.relatedTarget||a.fromElement)&&(Ha(et)||et[ca]))break e;if((ge||pe)&&(pe=ye.window===ye?ye:(pe=ye.ownerDocument)?pe.defaultView||pe.parentWindow:window,ge?(et=a.relatedTarget||a.toElement,ge=oe,et=et?Ha(et):null,et!==null&&(nn=c(et),pt=et.tag,et!==nn||pt!==5&&pt!==27&&pt!==6)&&(et=null)):(ge=null,et=oe),ge!==et)){if(pt=Fp,Me="onMouseLeave",ie="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(pt=Gp,Me="onPointerLeave",ie="onPointerEnter",K="pointer"),nn=ge==null?pe:Rs(ge),re=et==null?pe:Rs(et),pe=new pt(Me,K+"leave",ge,a,ye),pe.target=nn,pe.relatedTarget=re,Me=null,Ha(ye)===oe&&(pt=new pt(ie,K+"enter",et,a,ye),pt.target=re,pt.relatedTarget=nn,Me=pt),nn=Me,ge&&et)t:{for(pt=Jb,ie=ge,K=et,re=0,Me=ie;Me;Me=pt(Me))re++;Me=0;for(var ot=K;ot;ot=pt(ot))Me++;for(;0<re-Me;)ie=pt(ie),re--;for(;0<Me-re;)K=pt(K),Me--;for(;re--;){if(ie===K||K!==null&&ie===K.alternate){pt=ie;break t}ie=pt(ie),K=pt(K)}pt=null}else pt=null;ge!==null&&Ng(we,pe,ge,pt,!1),et!==null&&nn!==null&&Ng(we,nn,et,pt,!0)}}e:{if(pe=oe?Rs(oe):window,ge=pe.nodeName&&pe.nodeName.toLowerCase(),ge==="select"||ge==="input"&&pe.type==="file")var Ht=Yp;else if(Wp(pe))if(Zp)Ht=cb;else{Ht=ob;var nt=rb}else ge=pe.nodeName,!ge||ge.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?oe&&Xt(oe.elementType)&&(Ht=Yp):Ht=lb;if(Ht&&(Ht=Ht(t,oe))){qp(we,Ht,a,ye);break e}nt&&nt(t,pe,oe),t==="focusout"&&oe&&pe.type==="number"&&oe.memoizedProps.value!=null&&Dt(pe,"number",pe.value)}switch(nt=oe?Rs(oe):window,t){case"focusin":(Wp(nt)||nt.contentEditable==="true")&&(or=nt,Pu=oe,bo=null);break;case"focusout":bo=Pu=or=null;break;case"mousedown":Iu=!0;break;case"contextmenu":case"mouseup":case"dragend":Iu=!1,im(we,a,ye);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":im(we,a,ye)}var At;if(Nu)e:{switch(t){case"compositionstart":var Ot="onCompositionStart";break e;case"compositionend":Ot="onCompositionEnd";break e;case"compositionupdate":Ot="onCompositionUpdate";break e}Ot=void 0}else rr?jp(t,a)&&(Ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ot="onCompositionStart");Ot&&(Hp&&a.locale!=="ko"&&(rr||Ot!=="onCompositionStart"?Ot==="onCompositionEnd"&&rr&&(At=Ip()):(Xa=ye,Au="value"in Xa?Xa.value:Xa.textContent,rr=!0)),nt=dc(oe,Ot),0<nt.length&&(Ot=new Bp(Ot,t,null,a,ye),we.push({event:Ot,listeners:nt}),At?Ot.data=At:(At=Xp(a),At!==null&&(Ot.data=At)))),(At=tb?nb(t,a):ib(t,a))&&(Ot=dc(oe,"onBeforeInput"),0<Ot.length&&(nt=new Bp("onBeforeInput","beforeinput",null,a,ye),we.push({event:nt,listeners:Ot}),nt.data=At)),Yb(we,t,oe,a,ye)}Cg(we,n)})}function Xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function dc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=fo(t,a),u!=null&&o.unshift(Xo(t,u,f)),u=fo(t,n),u!=null&&o.push(Xo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Jb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ng(t,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var D=a,X=D.alternate,oe=D.stateNode;if(D=D.tag,X!==null&&X===o)break;D!==5&&D!==26&&D!==27||oe===null||(X=oe,u?(oe=fo(a,f),oe!=null&&v.unshift(Xo(a,oe,X))):u||(oe=fo(a,f),oe!=null&&v.push(Xo(a,oe,X)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var $b=/\r\n?/g,ey=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace($b,`
`).replace(ey,"")}function Lg(t,n){return n=Ug(n),Ug(t)===n}function tn(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pi(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pi(t,""+o);break;case"className":$e(t,"class",o);break;case"tabIndex":$e(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,o);break;case"style":Fi(t,o,f);break;case"data":if(n!=="object"){$e(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Cs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&tn(t,n,"name",u.name,u,null),tn(t,n,"formEncType",u.formEncType,u,null),tn(t,n,"formMethod",u.formMethod,u,null),tn(t,n,"formTarget",u.formTarget,u,null)):(tn(t,n,"encType",u.encType,u,null),tn(t,n,"method",u.method,u,null),tn(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Cs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ua);break;case"onScroll":o!=null&&Ut("scroll",t);break;case"onScrollEnd":o!=null&&Ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Cs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Ut("beforetoggle",t),Ut("toggle",t),Ge(t,"popover",o);break;case"xlinkActuate":Je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qi.get(a)||a,Ge(t,a,o))}}function ld(t,n,a,o,u,f){switch(a){case"style":Fi(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pi(t,o):(typeof o=="number"||typeof o=="bigint")&&pi(t,""+o);break;case"onScroll":o!=null&&Ut("scroll",t);break;case"onScrollEnd":o!=null&&Ut("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ua);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ge(t,a,o)}}}function jn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ut("error",t),Ut("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(t,n,f,v,a,null)}}u&&tn(t,n,"srcSet",a.srcSet,a,null),o&&tn(t,n,"src",a.src,a,null);return;case"input":Ut("invalid",t);var D=f=v=u=null,X=null,oe=null;for(o in a)if(a.hasOwnProperty(o)){var ye=a[o];if(ye!=null)switch(o){case"name":u=ye;break;case"type":v=ye;break;case"checked":X=ye;break;case"defaultChecked":oe=ye;break;case"value":f=ye;break;case"defaultValue":D=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(s(137,n));break;default:tn(t,n,o,ye,a,null)}}qn(t,f,D,X,oe,v,u,!1);return;case"select":Ut("invalid",t),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":f=D;break;case"defaultValue":v=D;break;case"multiple":o=D;default:tn(t,n,u,D,a,null)}n=f,a=v,t.multiple=!!o,n!=null?Dn(t,!!o,n,!1):a!=null&&Dn(t,!!o,a,!0);return;case"textarea":Ut("invalid",t),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(D=a[v],D!=null))switch(v){case"value":o=D;break;case"defaultValue":u=D;break;case"children":f=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:tn(t,n,v,D,a,null)}zi(t,o,u,f);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(o=a[X],o!=null))switch(X){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:tn(t,n,X,o,a,null)}return;case"dialog":Ut("beforetoggle",t),Ut("toggle",t),Ut("cancel",t),Ut("close",t);break;case"iframe":case"object":Ut("load",t);break;case"video":case"audio":for(o=0;o<jo.length;o++)Ut(jo[o],t);break;case"image":Ut("error",t),Ut("load",t);break;case"details":Ut("toggle",t);break;case"embed":case"source":case"link":Ut("error",t),Ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(o=a[oe],o!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:tn(t,n,oe,o,a,null)}return;default:if(Xt(n)){for(ye in a)a.hasOwnProperty(ye)&&(o=a[ye],o!==void 0&&ld(t,n,ye,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&tn(t,n,D,o,a,null))}function ty(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,D=null,X=null,oe=null,ye=null;for(ge in a){var we=a[ge];if(a.hasOwnProperty(ge)&&we!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":X=we;default:o.hasOwnProperty(ge)||tn(t,n,ge,null,o,we)}}for(var pe in o){var ge=o[pe];if(we=a[pe],o.hasOwnProperty(pe)&&(ge!=null||we!=null))switch(pe){case"type":f=ge;break;case"name":u=ge;break;case"checked":oe=ge;break;case"defaultChecked":ye=ge;break;case"value":v=ge;break;case"defaultValue":D=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:ge!==we&&tn(t,n,pe,ge,o,we)}}Ye(t,v,D,X,oe,ye,f,u);return;case"select":ge=v=D=pe=null;for(f in a)if(X=a[f],a.hasOwnProperty(f)&&X!=null)switch(f){case"value":break;case"multiple":ge=X;default:o.hasOwnProperty(f)||tn(t,n,f,null,o,X)}for(u in o)if(f=o[u],X=a[u],o.hasOwnProperty(u)&&(f!=null||X!=null))switch(u){case"value":pe=f;break;case"defaultValue":D=f;break;case"multiple":v=f;default:f!==X&&tn(t,n,u,f,o,X)}n=D,a=v,o=ge,pe!=null?Dn(t,!!a,pe,!1):!!o!=!!a&&(n!=null?Dn(t,!!a,n,!0):Dn(t,!!a,a?[]:"",!1));return;case"textarea":ge=pe=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:tn(t,n,D,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":pe=u;break;case"defaultValue":ge=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&tn(t,n,v,u,o,f)}hi(t,pe,ge);return;case"option":for(var et in a)if(pe=a[et],a.hasOwnProperty(et)&&pe!=null&&!o.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:tn(t,n,et,null,o,pe)}for(X in o)if(pe=o[X],ge=a[X],o.hasOwnProperty(X)&&pe!==ge&&(pe!=null||ge!=null))switch(X){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:tn(t,n,X,pe,o,ge)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var pt in a)pe=a[pt],a.hasOwnProperty(pt)&&pe!=null&&!o.hasOwnProperty(pt)&&tn(t,n,pt,null,o,pe);for(oe in o)if(pe=o[oe],ge=a[oe],o.hasOwnProperty(oe)&&pe!==ge&&(pe!=null||ge!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:tn(t,n,oe,pe,o,ge)}return;default:if(Xt(n)){for(var nn in a)pe=a[nn],a.hasOwnProperty(nn)&&pe!==void 0&&!o.hasOwnProperty(nn)&&ld(t,n,nn,void 0,o,pe);for(ye in o)pe=o[ye],ge=a[ye],!o.hasOwnProperty(ye)||pe===ge||pe===void 0&&ge===void 0||ld(t,n,ye,pe,o,ge);return}}for(var ie in a)pe=a[ie],a.hasOwnProperty(ie)&&pe!=null&&!o.hasOwnProperty(ie)&&tn(t,n,ie,null,o,pe);for(we in o)pe=o[we],ge=a[we],!o.hasOwnProperty(we)||pe===ge||pe==null&&ge==null||tn(t,n,we,pe,o,ge)}function Og(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ny(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,D=u.duration;if(f&&D&&Og(v)){for(v=0,D=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],oe=X.startTime;if(oe>D)break;var ye=X.transferSize,we=X.initiatorType;ye&&Og(we)&&(X=X.responseEnd,v+=ye*(X<D?1:(D-oe)/(X-oe)))}if(--o,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var cd=null,ud=null;function hc(t){return t.nodeType===9?t:t.ownerDocument}function Pg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function fd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dd=null;function iy(){var t=window.event;return t&&t.type==="popstate"?t===dd?!1:(dd=t,!0):(dd=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,ay=typeof clearTimeout=="function"?clearTimeout:void 0,Fg=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Fg<"u"?function(t){return Fg.resolve(null).then(t).catch(ry)}:zg;function ry(t){setTimeout(function(){throw t})}function ls(t){return t==="head"}function Bg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Or(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Wo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,D=f.nodeName;f[Ga]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Wo(t.ownerDocument.body);a=u}while(a);Or(n)}function Gg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function hd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hd(a),uo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function oy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ga])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ui(t.nextSibling),t===null)break}return null}function ly(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ui(t.nextSibling),t===null))return null;return t}function Hg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ui(t.nextSibling),t===null))return null;return t}function pd(t){return t.data==="$?"||t.data==="$~"}function md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function cy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Ui(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var gd=null;function kg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ui(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function jg(t,n,a){switch(n=hc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);uo(t)}var Li=new Map,Xg=new Set;function pc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Aa=L.d;L.d={f:uy,r:fy,D:dy,C:hy,L:py,m:my,X:xy,S:gy,M:_y};function uy(){var t=Aa.f(),n=sc();return t||n}function fy(t){var n=ka(t);n!==null&&n.tag===5&&n.type==="form"?l0(n):Aa.r(t)}var Nr=typeof document>"u"?null:document;function Wg(t,n,a){var o=Nr;if(o&&typeof n=="string"&&n){var u=Yt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Xg.has(u)||(Xg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),jn(n,"link",t),Mn(n),o.head.appendChild(n)))}}function dy(t){Aa.D(t),Wg("dns-prefetch",t,null)}function hy(t,n){Aa.C(t,n),Wg("preconnect",t,n)}function py(t,n,a){Aa.L(t,n,a);var o=Nr;if(o&&t&&n){var u='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Yt(a.imageSizes)+'"]')):u+='[href="'+Yt(t)+'"]';var f=u;switch(n){case"style":f=Ur(t);break;case"script":f=Lr(t)}Li.has(f)||(t=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Li.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(qo(f))||n==="script"&&o.querySelector(Yo(f))||(n=o.createElement("link"),jn(n,"link",t),Mn(n),o.head.appendChild(n)))}}function my(t,n){Aa.m(t,n);var a=Nr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Yt(o)+'"][href="'+Yt(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Lr(t)}if(!Li.has(f)&&(t=b({rel:"modulepreload",href:t},n),Li.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yo(f)))return}o=a.createElement("link"),jn(o,"link",t),Mn(o),a.head.appendChild(o)}}}function gy(t,n,a){Aa.S(t,n,a);var o=Nr;if(o&&t){var u=Va(o).hoistableStyles,f=Ur(t);n=n||"default";var v=u.get(f);if(!v){var D={loading:0,preload:null};if(v=o.querySelector(qo(f)))D.loading=5;else{t=b({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Li.get(f))&&xd(t,a);var X=v=o.createElement("link");Mn(X),jn(X,"link",t),X._p=new Promise(function(oe,ye){X.onload=oe,X.onerror=ye}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,mc(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:D},u.set(f,v)}}}function xy(t,n){Aa.X(t,n);var a=Nr;if(a&&t){var o=Va(a).hoistableScripts,u=Lr(t),f=o.get(u);f||(f=a.querySelector(Yo(u)),f||(t=b({src:t,async:!0},n),(n=Li.get(u))&&_d(t,n),f=a.createElement("script"),Mn(f),jn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(t,n){Aa.M(t,n);var a=Nr;if(a&&t){var o=Va(a).hoistableScripts,u=Lr(t),f=o.get(u);f||(f=a.querySelector(Yo(u)),f||(t=b({src:t,async:!0,type:"module"},n),(n=Li.get(u))&&_d(t,n),f=a.createElement("script"),Mn(f),jn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function qg(t,n,a,o){var u=(u=se.current)?pc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ur(a.href),a=Va(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ur(a.href);var f=Va(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(qo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),Li.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Li.set(t,a),f||vy(u,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Lr(a),a=Va(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ur(t){return'href="'+Yt(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function Yg(t){return b({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),jn(n,"link",a),Mn(n),t.head.appendChild(n))}function Lr(t){return'[src="'+Yt(t)+'"]'}function Yo(t){return"script[async]"+t}function Zg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(o)return n.instance=o,Mn(o),o;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Mn(o),jn(o,"style",u),mc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ur(a.href);var f=t.querySelector(qo(u));if(f)return n.state.loading|=4,n.instance=f,Mn(f),f;o=Yg(a),(u=Li.get(u))&&xd(o,u),f=(t.ownerDocument||t).createElement("link"),Mn(f);var v=f;return v._p=new Promise(function(D,X){v.onload=D,v.onerror=X}),jn(f,"link",o),n.state.loading|=4,mc(f,a.precedence,t),n.instance=f;case"script":return f=Lr(a.src),(u=t.querySelector(Yo(f)))?(n.instance=u,Mn(u),u):(o=a,(u=Li.get(f))&&(o=b({},a),_d(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Mn(u),jn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,mc(o,a.precedence,t));return n.instance}function mc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var D=o[v];if(D.dataset.precedence===n)f=D;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function xd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function _d(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var gc=null;function Kg(t,n,a){if(gc===null){var o=new Map,u=gc=new Map;u.set(a,o)}else u=gc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ga]||f[St]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var D=o.get(v);D?D.push(f):o.set(v,[f])}}return o}function Qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function by(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Jg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function yy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ur(o.href),f=n.querySelector(qo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=xc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Mn(f);return}f=n.ownerDocument||n,o=Yg(o),(u=Li.get(u))&&xd(o,u),f=f.createElement("link"),Mn(f);var v=f;v._p=new Promise(function(D,X){v.onload=D,v.onerror=X}),jn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=xc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var vd=0;function Sy(t,n){return t.stylesheets&&t.count===0&&vc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&vd===0&&(vd=62500*ny());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>vd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function vc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,n.forEach(My,t),_c=null,xc.call(t))}function My(t,n){if(!(n.state.loading&4)){var a=_c.get(t);if(a)var o=a.get(null);else{a=new Map,_c.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Zo={$$typeof:P,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Ey(t,n,a,o,u,f,v,D,X){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ke(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ke(0),this.hiddenUpdates=Ke(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function $g(t,n,a,o,u,f,v,D,X,oe,ye,we){return t=new Ey(t,n,a,v,X,oe,ye,we,D),n=1,f===!0&&(n|=24),f=gi(3,null,null,n),t.current=f,f.stateNode=t,n=Qu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},tf(f),t}function ex(t){return t?(t=ur,t):ur}function tx(t,n,a,o,u,f){u=ex(u),o.context===null?o.context=u:o.pendingContext=u,o=Qa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Ja(t,o,n),a!==null&&(li(a,t,n),wo(a,t,n))}function nx(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function bd(t,n){nx(t,n),(t=t.alternate)&&nx(t,n)}function ix(t){if(t.tag===13||t.tag===31){var n=Ls(t,67108864);n!==null&&li(n,t,67108864),bd(t,67108864)}}function ax(t){if(t.tag===13||t.tag===31){var n=yi();n=di(n);var a=Ls(t,n);a!==null&&li(a,t,n),bd(t,n)}}var bc=!0;function Ty(t,n,a,o){var u=E.T;E.T=null;var f=L.p;try{L.p=2,yd(t,n,a,o)}finally{L.p=f,E.T=u}}function Ay(t,n,a,o){var u=E.T;E.T=null;var f=L.p;try{L.p=8,yd(t,n,a,o)}finally{L.p=f,E.T=u}}function yd(t,n,a,o){if(bc){var u=Sd(o);if(u===null)od(t,n,o,yc,a),rx(t,o);else if(Ry(u,t,n,a,o))o.stopPropagation();else if(rx(t,o),n&4&&-1<wy.indexOf(t)){for(;u!==null;){var f=ka(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Le(f.pendingLanes);if(v!==0){var D=f;for(D.pendingLanes|=2,D.entangledLanes|=2;v;){var X=1<<31-Fe(v);D.entanglements[1]|=X,v&=~X}Qi(f),(jt&6)===0&&(ic=Se()+500,Vo(0))}}break;case 31:case 13:D=Ls(f,2),D!==null&&li(D,f,2),sc(),bd(f,2)}if(f=Sd(o),f===null&&od(t,n,o,yc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else od(t,n,o,null,a)}}function Sd(t){return t=Mu(t),Md(t)}var yc=null;function Md(t){if(yc=null,t=Ha(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return yc=t,null}function sx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ae()){case R:return 2;case x:return 8;case G:case q:return 32;case ae:return 268435456;default:return 32}default:return 32}}var Ed=!1,cs=null,us=null,fs=null,Ko=new Map,Qo=new Map,ds=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rx(t,n){switch(t){case"focusin":case"focusout":cs=null;break;case"dragenter":case"dragleave":us=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":Ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(n.pointerId)}}function Jo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ka(n),n!==null&&ix(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ry(t,n,a,o,u){switch(n){case"focusin":return cs=Jo(cs,t,n,a,o,u),!0;case"dragenter":return us=Jo(us,t,n,a,o,u),!0;case"mouseover":return fs=Jo(fs,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ko.set(f,Jo(Ko.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Qo.set(f,Jo(Qo.get(f)||null,t,n,a,o,u)),!0}return!1}function ox(t){var n=Ha(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Wt(t.priority,function(){ax(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Wt(t.priority,function(){ax(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Su=o,a.target.dispatchEvent(o),Su=null}else return n=ka(a),n!==null&&ix(n),t.blockedOn=a,!1;n.shift()}return!0}function lx(t,n,a){Sc(t)&&a.delete(n)}function Cy(){Ed=!1,cs!==null&&Sc(cs)&&(cs=null),us!==null&&Sc(us)&&(us=null),fs!==null&&Sc(fs)&&(fs=null),Ko.forEach(lx),Qo.forEach(lx)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ed||(Ed=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cy)))}var Ec=null;function cx(t){Ec!==t&&(Ec=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var f=ka(a);f!==null&&(t.splice(n,3),n-=3,Sf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Or(t){function n(X){return Mc(X,t)}cs!==null&&Mc(cs,t),us!==null&&Mc(us,t),fs!==null&&Mc(fs,t),Ko.forEach(n),Qo.forEach(n);for(var a=0;a<ds.length;a++){var o=ds[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ds.length&&(a=ds[0],a.blockedOn===null);)ox(a),a.blockedOn===null&&ds.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[gn]||null;if(typeof f=="function")v||cx(a);else if(v){var D=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[gn]||null)D=v.formAction;else if(Md(u)!==null)continue}else D=v.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),cx(a)}}}function ux(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Td(t){this._internalRoot=t}Tc.prototype.render=Td.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=yi();tx(a,o,t,n,null,null)},Tc.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;tx(t.current,2,null,t,null,null),sc(),n[ca]=null}};function Tc(t){this._internalRoot=t}Tc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Cn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ds.length&&n!==0&&n<ds[a].priority;a++);ds.splice(a,0,t),a===0&&ox(t)}};var fx=e.version;if(fx!=="19.2.7")throw Error(s(527,fx,"19.2.7"));L.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?y(t):null,t=t===null?null:t.stateNode,t};var Dy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ac.isDisabled&&Ac.supportsFiber)try{ne=Ac.inject(Dy),le=Ac}catch{}}return el.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=_0,f=v0,v=b0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=$g(t,1,!1,null,null,a,o,null,u,f,v,ux),t[ca]=n.current,rd(t),new Td(n)},el.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=_0,v=v0,D=b0,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=$g(t,1,!0,n,a??null,o,u,X,f,v,D,ux),n.context=ex(null),a=n.current,o=yi(),o=di(o),u=Qa(o),u.callback=null,Ja(a,u,o),a=o,n.current.lanes=a,ut(n,a),Qi(n),t[ca]=n.current,rd(t),new Tc(n)},el.version="19.2.7",el}var yx;function Gy(){if(yx)return Rd.exports;yx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Rd.exports=By(),Rd.exports}var Hy=Gy();const Ud=[{id:"startup-launcher",name:"Startup & Product Launcher",description:"Launch products, analyze competitive markets, and outline architectures with operations and engineering experts.",objective:"Draft a product launch proposal and architecture outline for an eco-friendly mobile battery-swapping service.",agents:[{id:"ops-lead",name:"Sonia (Operations Chief)",designation:"Operations Lead",systemPrompt:"You formulate high-level business logic, operational timelines, supply chain considerations, and project milestones. Coordinate tasks logically.",gridPosition:{x:2,z:2},avatarColor:"#60a5fa",gender:"female",state:"idle"},{id:"market-analyst",name:"Marcus (Market Strategist)",designation:"Market Analyst",systemPrompt:"You specialize in researching competitor lists, pricing strategies, market differentiators, target user demographics, and marketing channels.",gridPosition:{x:5,z:2},avatarColor:"#34d399",gender:"male",state:"idle"},{id:"fin-planner",name:"Fiona (Finance Director)",designation:"Financial Planner",systemPrompt:"You draft expense structures, pricing schemas, lifetime value projections, cost savings calculations, and monetization models.",gridPosition:{x:2,z:6},avatarColor:"#f472b6",gender:"female",state:"idle"},{id:"dev-lead",name:"Devon (Systems Arch)",designation:"Full-Stack Developer",systemPrompt:"You draft detailed database models, API specs, deployment infrastructures (e.g., Docker, Kubernetes), and outline core code snippets.",gridPosition:{x:5,z:6},avatarColor:"#fbbf24",gender:"male",state:"idle"},{id:"qa-tester",name:"Quinn (Quality Guardian)",designation:"Lead QA & Security Tester",systemPrompt:"You review developer architectures for potential leaks, edge-case failure modes, scale constraints, test coverage, and validation schemas.",gridPosition:{x:8,z:4},avatarColor:"#a78bfa",gender:"female",state:"idle"}]},{id:"academic-group",name:"Academic Research Syndicate",description:"Conduct scholarly literature reviews, analyze raw data trends, synthesize summaries, and outline LaTeX document citations.",objective:"Synthesize a structured literature paper on 'Advances and Solid-State Degradation in Automotive Battery Anodes' for publication.",agents:[{id:"lead-investigator",name:"Dr. Arthur (Principal PI)",designation:"Lead Investigator",systemPrompt:"You write formal thesis structures, set rigorous research questions, design academic experimental methods, and critically verify logical conclusions.",gridPosition:{x:4,z:2},avatarColor:"#60a5fa",gender:"male",state:"idle"},{id:"data-aggregator",name:"Danica (Data Systems)",designation:"Data Aggregator",systemPrompt:"You summarize research methodologies, locate mock paper citations, list quantitative data points/material attributes, and list physical constraints.",gridPosition:{x:2,z:5},avatarColor:"#34d399",gender:"female",state:"idle"},{id:"content-summarizer",name:"Sam (Editor-in-Chief)",designation:"Content Summarizer",systemPrompt:"You edit draft summaries, translate dense physical data into readable sections, formulate abstract sections, and refine narrative clarity.",gridPosition:{x:7,z:5},avatarColor:"#fbbf24",gender:"male",state:"idle"},{id:"latex-formatter",name:"Laura (LaTeX Designer)",designation:"LaTeX Formatter",systemPrompt:"You specialize in translating reports into formal LaTeX document layout templates, organizing reference lists, and structural bibtex records.",gridPosition:{x:4,z:8},avatarColor:"#a78bfa",gender:"female",state:"idle"}]}];/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vy=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),Sx=r=>{const e=Vy(r);return e.charAt(0).toUpperCase()+e.slice(1)},F_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),jy=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=je.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>je.createElement("svg",{ref:m,...Xy,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:F_("lucide",l),...!c&&!jy(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,y])=>je.createElement(h,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=(r,e)=>{const i=je.forwardRef(({className:s,...l},c)=>je.createElement(Wy,{ref:c,iconNode:e,className:F_(`lucide-${ky(Sx(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Sx(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Mx=$t("chevron-right",qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],B_=$t("circle-question-mark",Yy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ky=$t("clock",Zy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ex=$t("compass",Qy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Tx=$t("cpu",Jy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]],eS=$t("file-down",$y);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]],nS=$t("file-up",tS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],aS=$t("folder-plus",iS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],G_=$t("grid-3x3",sS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],$r=$t("lock",rS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],lS=$t("maximize-2",oS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],uS=$t("minimize-2",cS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],dS=$t("moon",fS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M13 21h8",key:"1jsn5i"}],["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],H_=$t("pen-line",hS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],mS=$t("play",pS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xS=$t("plus",gS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],vS=$t("refresh-cw",_S);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],yS=$t("rotate-ccw",bS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],MS=$t("rotate-cw",SS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],TS=$t("settings",ES);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],wS=$t("shield-alert",AS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],CS=$t("sliders-vertical",RS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],k_=$t("sparkles",DS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],US=$t("square",NS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],OS=$t("sun",LS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],Ax=$t("terminal",PS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],V_=$t("trash-2",IS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],FS=$t("triangle-alert",zS);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BS=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],GS=$t("user-minus",BS);function HS({agents:r,decorItems:e,onUpdateAgentPosition:i,onAddDecorItem:s,onRemoveDecorItem:l,gridSize:c,timeMode:d}){const p=je.useRef(null),m=je.useRef(null),[h,y]=je.useState({width:500,height:500}),[b,g]=je.useState(null),[M,A]=je.useState(null),[O,S]=je.useState({x:0,y:0}),[_,N]=je.useState("none");je.useLayoutEffect(()=>{if(!p.current)return;const H=new ResizeObserver(E=>{for(const L of E){const{width:I,height:fe}=L.contentRect,de=Math.min(I,fe,600);y({width:Math.max(de,350),height:Math.max(de,350)})}});return H.observe(p.current),()=>H.disconnect()},[]);const P=Math.min(h.width,h.height)/(c+2),F=P,W=(H,E)=>({x:F+H*P+P/2,y:F+E*P+P/2}),z=(H,E)=>{const L=Math.round((H-F-P/2)/P),I=Math.round((E-F-P/2)/P);return{x:Math.max(0,Math.min(c-1,L)),z:Math.max(0,Math.min(c-1,I))}};je.useEffect(()=>{const H=m.current;if(!H)return;const E=H.getContext("2d");if(!E)return;const I=d==="matrix"?{bg:"#02040a",grid:"rgba(34, 197, 94, 0.15)",gridActive:"rgba(34, 197, 94, 0.4)",text:"#39ff14",border:"#22c55e",cellActive:"rgba(34, 197, 94, 0.1)"}:d==="night"?{bg:"#0d111d",grid:"rgba(100, 116, 139, 0.2)",gridActive:"rgba(129, 140, 248, 0.4)",text:"#f1f5f9",border:"#4f46e5",cellActive:"rgba(79, 70, 229, 0.15)"}:{bg:"#ffffff",grid:"#e2e8f0",gridActive:"#cbd5e1",text:"#0f172a",border:"#cbd5e1",cellActive:"#f1f5f9"};E.fillStyle=I.bg,E.fillRect(0,0,h.width,h.height);const fe=W(0,0);E.strokeStyle=I.border,E.lineWidth=2.5,E.strokeRect(fe.x-P/2,fe.y-P/2,c*P,c*P),E.strokeStyle=I.grid,E.lineWidth=1;for(let de=0;de<c;de++){const U=W(de,0),Z=W(de,c-1);E.beginPath(),E.moveTo(U.x-P/2,U.y-P/2),E.lineTo(Z.x-P/2,Z.y+P/2),E.stroke();const be=W(0,de),Ce=W(c-1,de);E.beginPath(),E.moveTo(be.x-P/2,be.y-P/2),E.lineTo(Ce.x+P/2,Ce.y-P/2),E.stroke()}if(_!=="none"){const de=z(O.x,O.y),U=W(de.x,de.z);E.fillStyle=I.cellActive,E.fillRect(U.x-P/2,U.y-P/2,P,P),E.strokeStyle="#fbbf24",E.lineWidth=1.5,E.strokeRect(U.x-P/2,U.y-P/2,P,P)}e.forEach(de=>{var be;const U=W(de.x,de.z);E.fillStyle=d==="day"?"#f1f5f9":"#1e293b",E.strokeStyle=I.border,E.lineWidth=1,E.beginPath(),(be=E.roundRect)==null||be.call(E,U.x-P/2.5,U.y-P/2.5,P*.8,P*.8,4),E.fill(),E.stroke(),E.font=`bold ${Math.max(9,P*.35)}px Inter, sans-serif`,E.textAlign="center",E.textBaseline="middle";let Z="🛋️";de.type==="coffee"&&(Z="☕"),de.type==="cooler"&&(Z="💧"),de.type==="plant"&&(Z="🪴"),E.fillText(Z,U.x,U.y)}),r.forEach(de=>{const U=W(de.gridPosition.x,de.gridPosition.z),Z=P*.4;E.fillStyle=de.avatarColor||"#2563eb",E.beginPath(),E.arc(U.x,U.y,Z,0,Math.PI*2),E.fill(),E.fillStyle="#ffffff",E.font=`${Math.max(8,P*.28)}px monospace`,E.textAlign="center",E.textBaseline="middle";const be=de.name.substring(0,2).toUpperCase();E.fillText(be,U.x,U.y),E.strokeStyle=I.bg,E.lineWidth=1.5,E.beginPath(),E.arc(U.x,U.y,Z,0,Math.PI*2),E.stroke(),E.fillStyle=I.text,E.font=`bold ${Math.max(8,P*.25)}px Inter, sans-serif`,E.fillText(de.name.split(" ")[0],U.x,U.y+Z+10)})},[h,r,e,c,d,_,O]);const k=H=>{var L;const E=(L=m.current)==null?void 0:L.getBoundingClientRect();return E?{x:H.clientX-E.left,y:H.clientY-E.top}:{x:0,y:0}},T=H=>{var L;const E=(L=m.current)==null?void 0:L.getBoundingClientRect();return!E||H.touches.length===0?{x:0,y:0}:{x:H.touches[0].clientX-E.left,y:H.touches[0].clientY-E.top}},B=H=>{const{x:E,y:L}=k(H),I=z(E,L);if(_!=="none"){const U=e.find(Z=>Z.x===I.x&&Z.z===I.z);U?l(U.id):s({id:`decor-${Date.now()}`,type:_,x:I.x,z:I.z}),N("none");return}const fe=r.find(U=>U.gridPosition.x===I.x&&U.gridPosition.z===I.z);if(fe){g(fe.id);return}const de=e.find(U=>U.x===I.x&&U.z===I.z);de&&l(de.id)},Q=H=>{const{x:E,y:L}=k(H);if(S({x:E,y:L}),b){const I=z(E,L);i(b,I.x,I.z)}},V=()=>{g(null)},J=H=>{const{x:E,y:L}=T(H),I=z(E,L);if(_!=="none"){const U=e.find(Z=>Z.x===I.x&&Z.z===I.z);U?l(U.id):s({id:`decor-${Date.now()}`,type:_,x:I.x,z:I.z}),N("none");return}const fe=r.find(U=>U.gridPosition.x===I.x&&U.gridPosition.z===I.z);if(fe){g(fe.id);return}const de=e.find(U=>U.x===I.x&&U.z===I.z);de&&l(de.id)},me=H=>{const{x:E,y:L}=T(H);if(S({x:E,y:L}),b){const I=z(E,L);i(b,I.x,I.z)}},te=()=>{g(null)};return w.jsxs("div",{className:"w-full flex flex-col gap-4",children:[w.jsxs("div",{className:`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 ${d==="matrix"?"border-green-500/20 bg-slate-950 text-green-300":"border-slate-200 bg-white text-slate-800"}`,children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(G_,{className:"w-4 h-4 text-indigo-400"}),w.jsx("h4",{className:"text-xs font-extrabold uppercase tracking-wider",children:"2D Drag & Stamp Architecture tools"})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[w.jsx("button",{onClick:()=>N("plant"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${_==="plant"?"bg-emerald-600 text-white border-emerald-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-plant",children:"🪴 Plant"}),w.jsx("button",{onClick:()=>N("coffee"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${_==="coffee"?"bg-amber-600 text-white border-amber-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-coffee",children:"☕ Coffee Station"}),w.jsx("button",{onClick:()=>N("cooler"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${_==="cooler"?"bg-blue-600 text-white border-blue-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-cooler",children:"💧 Water Dispenser"}),w.jsx("button",{onClick:()=>N("couch"),className:`px-3 py-1.5 text-xs rounded-md border flex items-center gap-1.5 transition-colors ${_==="couch"?"bg-indigo-650 text-white border-indigo-500":"hover:bg-slate-800 hover:text-white border-slate-700/80"}`,id:"btn-stamp-couch",children:"🛋️ Lounge Couch"}),_!=="none"&&w.jsx("button",{onClick:()=>N("none"),className:"text-[10px] uppercase font-bold text-rose-400 hover:underline px-2",id:"btn-cancel-stamp",children:"Cancel"})]})]}),w.jsxs("div",{ref:p,className:`w-full aspect-square border rounded-xl overflow-hidden shadow-xl flex items-center justify-center relative ${d==="matrix"?"border-green-500/30 bg-[#02040a]":"border-slate-200 bg-slate-50"}`,children:[w.jsxs("div",{className:"absolute top-3 left-3 pointer-events-none flex flex-col gap-1 z-10",children:[w.jsx("span",{className:"text-[10px] uppercase font-mono tracking-widest text-slate-500",children:"BLUEPRINT GRID CONTROLLER"}),w.jsx("span",{className:"text-xs font-bold",children:_!=="none"?`🎯 Stamp Mode: Click any grid tile to drop a ${_}`:"Drag agent desks dynamically. Click placed stamps to deconstruct."})]}),w.jsx("canvas",{ref:m,width:h.width,height:h.height,onMouseDown:B,onMouseMove:Q,onMouseUp:V,onTouchStart:J,onTouchMove:me,onTouchEnd:te,className:"cursor-crosshair block touch-none",id:"2d-office-custom-canvas"})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="184",to={ROTATE:0,DOLLY:1,PAN:2},eo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kS=0,wx=1,VS=2,tu=1,j_=2,fl=3,Es=0,fi=1,ta=2,Pa=0,no=1,Rx=2,Cx=3,Dx=4,jS=5,Ks=100,XS=101,WS=102,qS=103,YS=104,ZS=200,KS=201,QS=202,JS=203,gh=204,xh=205,$S=206,e1=207,t1=208,n1=209,i1=210,a1=211,s1=212,r1=213,o1=214,_h=0,vh=1,bh=2,ao=3,yh=4,Sh=5,Mh=6,Eh=7,X_=0,l1=1,c1=2,sa=0,W_=1,q_=2,Y_=3,Z_=4,K_=5,Q_=6,J_=7,$_=300,er=301,so=302,Ld=303,Od=304,_u=306,Th=1e3,Oa=1001,Ah=1002,Wn=1003,u1=1004,wc=1005,Qn=1006,Pd=1007,Js=1008,Ti=1009,ev=1010,tv=1011,hl=1012,fp=1013,oa=1014,ia=1015,za=1016,dp=1017,hp=1018,pl=1020,nv=35902,iv=35899,av=1021,sv=1022,Xi=1023,Fa=1026,$s=1027,rv=1028,pp=1029,tr=1030,mp=1031,gp=1033,nu=33776,iu=33777,au=33778,su=33779,wh=35840,Rh=35841,Ch=35842,Dh=35843,Nh=36196,Uh=37492,Lh=37496,Oh=37488,Ph=37489,lu=37490,Ih=37491,zh=37808,Fh=37809,Bh=37810,Gh=37811,Hh=37812,kh=37813,Vh=37814,jh=37815,Xh=37816,Wh=37817,qh=37818,Yh=37819,Zh=37820,Kh=37821,Qh=36492,Jh=36494,$h=36495,ep=36283,tp=36284,cu=36285,np=36286,f1=3200,ip=0,d1=1,ys="",Pi="srgb",uu="srgb-linear",fu="linear",Jt="srgb",Pr=7680,Nx=519,h1=512,p1=513,m1=514,xp=515,g1=516,x1=517,_p=518,_1=519,ap=35044,Ux="300 es",aa=2e3,ml=2001;function v1(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function b1(){const r=du("canvas");return r.style.display="block",r}const Lx={};function hu(...r){const e="THREE."+r.shift();console.log(e,...r)}function ov(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ht(...r){r=ov(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Bt(...r){r=ov(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function sp(...r){const e=r.join(" ");e in Lx||(Lx[e]=!0,ht(...r))}function y1(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const S1={[_h]:vh,[bh]:Mh,[yh]:Eh,[ao]:Sh,[vh]:_h,[Mh]:bh,[Eh]:yh,[Sh]:ao};class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ru=Math.PI/180,rp=180/Math.PI;function Ms(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[i&63|128]+Zn[i>>8&255]+"-"+Zn[i>>16&255]+Zn[i>>24&255]+Zn[s&255]+Zn[s>>8&255]+Zn[s>>16&255]+Zn[s>>24&255]).toLowerCase()}function Ct(r,e,i){return Math.max(e,Math.min(i,r))}function M1(r,e){return(r%e+e)%e}function Id(r,e,i){return(1-i)*r+i*e}function na(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function an(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const E1={DEG2RAD:ru},Cp=class Cp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ct(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cp.prototype.isVector2=!0;let ft=Cp;class Ts{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],y=s[l+2],b=s[l+3],g=c[d+0],M=c[d+1],A=c[d+2],O=c[d+3];if(b!==O||m!==g||h!==M||y!==A){let S=m*g+h*M+y*A+b*O;S<0&&(g=-g,M=-M,A=-A,O=-O,S=-S);let _=1-p;if(S<.9995){const N=Math.acos(S),P=Math.sin(N);_=Math.sin(_*N)/P,p=Math.sin(p*N)/P,m=m*_+g*p,h=h*_+M*p,y=y*_+A*p,b=b*_+O*p}else{m=m*_+g*p,h=h*_+M*p,y=y*_+A*p,b=b*_+O*p;const N=1/Math.sqrt(m*m+h*h+y*y+b*b);m*=N,h*=N,y*=N,b*=N}}e[i]=m,e[i+1]=h,e[i+2]=y,e[i+3]=b}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],y=s[l+3],b=c[d],g=c[d+1],M=c[d+2],A=c[d+3];return e[i]=p*A+y*b+m*M-h*g,e[i+1]=m*A+y*g+h*b-p*M,e[i+2]=h*A+y*M+p*g-m*b,e[i+3]=y*A-p*b-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),y=p(l/2),b=p(c/2),g=m(s/2),M=m(l/2),A=m(c/2);switch(d){case"XYZ":this._x=g*y*b+h*M*A,this._y=h*M*b-g*y*A,this._z=h*y*A+g*M*b,this._w=h*y*b-g*M*A;break;case"YXZ":this._x=g*y*b+h*M*A,this._y=h*M*b-g*y*A,this._z=h*y*A-g*M*b,this._w=h*y*b+g*M*A;break;case"ZXY":this._x=g*y*b-h*M*A,this._y=h*M*b+g*y*A,this._z=h*y*A+g*M*b,this._w=h*y*b-g*M*A;break;case"ZYX":this._x=g*y*b-h*M*A,this._y=h*M*b+g*y*A,this._z=h*y*A-g*M*b,this._w=h*y*b+g*M*A;break;case"YZX":this._x=g*y*b+h*M*A,this._y=h*M*b+g*y*A,this._z=h*y*A-g*M*b,this._w=h*y*b-g*M*A;break;case"XZY":this._x=g*y*b-h*M*A,this._y=h*M*b-g*y*A,this._z=h*y*A+g*M*b,this._w=h*y*b+g*M*A;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],y=i[6],b=i[10],g=s+p+b;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(y-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>b){const M=2*Math.sqrt(1+s-p-b);this._w=(y-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>b){const M=2*Math.sqrt(1+p-s-b);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+b-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,y=i._w;return this._x=s*y+d*p+l*h-c*m,this._y=l*y+d*m+c*p-s*h,this._z=c*y+d*h+s*m-l*p,this._w=d*y-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),y=Math.sin(h);m=Math.sin(m*h)/y,i=Math.sin(i*h)/y,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dp=class Dp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ox.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ox.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),y=2*(p*i-c*l),b=2*(c*s-d*i);return this.x=i+m*h+d*b-p*y,this.y=s+m*y+p*h-c*b,this.z=l+m*b+c*y-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ct(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dp.prototype.isVector3=!0;let $=Dp;const zd=new $,Ox=new Ts,Np=class Np{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const y=this.elements;return y[0]=e,y[1]=l,y[2]=p,y[3]=i,y[4]=c,y[5]=m,y[6]=s,y[7]=d,y[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],y=s[4],b=s[7],g=s[2],M=s[5],A=s[8],O=l[0],S=l[3],_=l[6],N=l[1],P=l[4],F=l[7],W=l[2],z=l[5],k=l[8];return c[0]=d*O+p*N+m*W,c[3]=d*S+p*P+m*z,c[6]=d*_+p*F+m*k,c[1]=h*O+y*N+b*W,c[4]=h*S+y*P+b*z,c[7]=h*_+y*F+b*k,c[2]=g*O+M*N+A*W,c[5]=g*S+M*P+A*z,c[8]=g*_+M*F+A*k,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8];return i*d*y-i*p*h-s*c*y+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8],b=y*d-p*h,g=p*m-y*c,M=h*c-d*m,A=i*b+s*g+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/A;return e[0]=b*O,e[1]=(l*h-y*s)*O,e[2]=(p*s-l*d)*O,e[3]=g*O,e[4]=(y*i-l*m)*O,e[5]=(l*c-p*i)*O,e[6]=M*O,e[7]=(s*m-h*i)*O,e[8]=(d*i-s*c)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Fd.makeScale(e,i)),this}rotate(e){return this.premultiply(Fd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Fd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Np.prototype.isMatrix3=!0;let bt=Np;const Fd=new bt,Px=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ix=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function T1(){const r={enabled:!0,workingColorSpace:uu,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Jt&&(l.r=Ia(l.r),l.g=Ia(l.g),l.b=Ia(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Jt&&(l.r=io(l.r),l.g=io(l.g),l.b=io(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ys?fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[uu]:{primaries:e,whitePoint:s,transfer:fu,toXYZ:Px,fromXYZ:Ix,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:s,transfer:Jt,toXYZ:Px,fromXYZ:Ix,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),r}const Ft=T1();function Ia(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function io(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ir;class A1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ir===void 0&&(Ir=du("canvas")),Ir.width=e.width,Ir.height=e.height;const l=Ir.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ir}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=du("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ia(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ia(i[s]/255)*255):i[s]=Ia(i[s]);return{data:i,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let w1=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Bd(l[d].image)):c.push(Bd(l[d]))}else c=Bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?A1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let R1=0;const Gd=new $;class Jn extends ws{constructor(e=Jn.DEFAULT_IMAGE,i=Jn.DEFAULT_MAPPING,s=Oa,l=Oa,c=Qn,d=Js,p=Xi,m=Ti,h=Jn.DEFAULT_ANISOTROPY,y=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Ms(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ht(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=$_;Jn.DEFAULT_ANISOTROPY=1;const Up=class Up{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],y=m[4],b=m[8],g=m[1],M=m[5],A=m[9],O=m[2],S=m[6],_=m[10];if(Math.abs(y-g)<.01&&Math.abs(b-O)<.01&&Math.abs(A-S)<.01){if(Math.abs(y+g)<.1&&Math.abs(b+O)<.1&&Math.abs(A+S)<.1&&Math.abs(h+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(h+1)/2,F=(M+1)/2,W=(_+1)/2,z=(y+g)/4,k=(b+O)/4,T=(A+S)/4;return P>F&&P>W?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=z/s,c=k/s):F>W?F<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(F),s=z/l,c=T/l):W<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(W),s=k/c,l=T/c),this.set(s,l,c,i),this}let N=Math.sqrt((S-A)*(S-A)+(b-O)*(b-O)+(g-y)*(g-y));return Math.abs(N)<.001&&(N=1),this.x=(S-A)/N,this.y=(b-O)/N,this.z=(g-y)/N,this.w=Math.acos((h+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this.w=Ct(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this.w=Ct(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ct(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Up.prototype.isVector4=!0;let vn=Up;class C1 extends ws{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new vn(0,0,e,i),this.scissorTest=!1,this.viewport=new vn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Jn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ra extends C1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class lv extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D1 extends Jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xu=class xu{constructor(e,i,s,l,c,d,p,m,h,y,b,g,M,A,O,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,y,b,g,M,A,O,S)}set(e,i,s,l,c,d,p,m,h,y,b,g,M,A,O,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=y,_[10]=b,_[14]=g,_[3]=M,_[7]=A,_[11]=O,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/zr.setFromMatrixColumn(e,0).length(),c=1/zr.setFromMatrixColumn(e,1).length(),d=1/zr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),y=Math.cos(c),b=Math.sin(c);if(e.order==="XYZ"){const g=d*y,M=d*b,A=p*y,O=p*b;i[0]=m*y,i[4]=-m*b,i[8]=h,i[1]=M+A*h,i[5]=g-O*h,i[9]=-p*m,i[2]=O-g*h,i[6]=A+M*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*y,M=m*b,A=h*y,O=h*b;i[0]=g+O*p,i[4]=A*p-M,i[8]=d*h,i[1]=d*b,i[5]=d*y,i[9]=-p,i[2]=M*p-A,i[6]=O+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*y,M=m*b,A=h*y,O=h*b;i[0]=g-O*p,i[4]=-d*b,i[8]=A+M*p,i[1]=M+A*p,i[5]=d*y,i[9]=O-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*y,M=d*b,A=p*y,O=p*b;i[0]=m*y,i[4]=A*h-M,i[8]=g*h+O,i[1]=m*b,i[5]=O*h+g,i[9]=M*h-A,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*h,A=p*m,O=p*h;i[0]=m*y,i[4]=O-g*b,i[8]=A*b+M,i[1]=b,i[5]=d*y,i[9]=-p*y,i[2]=-h*y,i[6]=M*b+A,i[10]=g-O*b}else if(e.order==="XZY"){const g=d*m,M=d*h,A=p*m,O=p*h;i[0]=m*y,i[4]=-b,i[8]=h*y,i[1]=g*b+O,i[5]=d*y,i[9]=M*b-A,i[2]=A*b-M,i[6]=p*y,i[10]=O*b+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N1,e,U1)}lookAt(e,i,s){const l=this.elements;return Si.subVectors(e,i),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),ps.crossVectors(s,Si),ps.lengthSq()===0&&(Math.abs(s.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),ps.crossVectors(s,Si)),ps.normalize(),Rc.crossVectors(Si,ps),l[0]=ps.x,l[4]=Rc.x,l[8]=Si.x,l[1]=ps.y,l[5]=Rc.y,l[9]=Si.y,l[2]=ps.z,l[6]=Rc.z,l[10]=Si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],y=s[1],b=s[5],g=s[9],M=s[13],A=s[2],O=s[6],S=s[10],_=s[14],N=s[3],P=s[7],F=s[11],W=s[15],z=l[0],k=l[4],T=l[8],B=l[12],Q=l[1],V=l[5],J=l[9],me=l[13],te=l[2],H=l[6],E=l[10],L=l[14],I=l[3],fe=l[7],de=l[11],U=l[15];return c[0]=d*z+p*Q+m*te+h*I,c[4]=d*k+p*V+m*H+h*fe,c[8]=d*T+p*J+m*E+h*de,c[12]=d*B+p*me+m*L+h*U,c[1]=y*z+b*Q+g*te+M*I,c[5]=y*k+b*V+g*H+M*fe,c[9]=y*T+b*J+g*E+M*de,c[13]=y*B+b*me+g*L+M*U,c[2]=A*z+O*Q+S*te+_*I,c[6]=A*k+O*V+S*H+_*fe,c[10]=A*T+O*J+S*E+_*de,c[14]=A*B+O*me+S*L+_*U,c[3]=N*z+P*Q+F*te+W*I,c[7]=N*k+P*V+F*H+W*fe,c[11]=N*T+P*J+F*E+W*de,c[15]=N*B+P*me+F*L+W*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],y=e[2],b=e[6],g=e[10],M=e[14],A=e[3],O=e[7],S=e[11],_=e[15],N=m*M-h*g,P=p*M-h*b,F=p*g-m*b,W=d*M-h*y,z=d*g-m*y,k=d*b-p*y;return i*(O*N-S*P+_*F)-s*(A*N-S*W+_*z)+l*(A*P-O*W+_*k)-c*(A*F-O*z+S*k)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],y=e[8],b=e[9],g=e[10],M=e[11],A=e[12],O=e[13],S=e[14],_=e[15],N=i*p-s*d,P=i*m-l*d,F=i*h-c*d,W=s*m-l*p,z=s*h-c*p,k=l*h-c*m,T=y*O-b*A,B=y*S-g*A,Q=y*_-M*A,V=b*S-g*O,J=b*_-M*O,me=g*_-M*S,te=N*me-P*J+F*V+W*Q-z*B+k*T;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/te;return e[0]=(p*me-m*J+h*V)*H,e[1]=(l*J-s*me-c*V)*H,e[2]=(O*k-S*z+_*W)*H,e[3]=(g*z-b*k-M*W)*H,e[4]=(m*Q-d*me-h*B)*H,e[5]=(i*me-l*Q+c*B)*H,e[6]=(S*F-A*k-_*P)*H,e[7]=(y*k-g*F+M*P)*H,e[8]=(d*J-p*Q+h*T)*H,e[9]=(s*Q-i*J-c*T)*H,e[10]=(A*z-O*F+_*N)*H,e[11]=(b*F-y*z-M*N)*H,e[12]=(p*B-d*V-m*T)*H,e[13]=(i*V-s*B+l*T)*H,e[14]=(O*P-A*W-S*N)*H,e[15]=(y*W-b*P+g*N)*H,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,y=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,y*p+s,y*m-l*d,0,h*m-l*p,y*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,y=d+d,b=p+p,g=c*h,M=c*y,A=c*b,O=d*y,S=d*b,_=p*b,N=m*h,P=m*y,F=m*b,W=s.x,z=s.y,k=s.z;return l[0]=(1-(O+_))*W,l[1]=(M+F)*W,l[2]=(A-P)*W,l[3]=0,l[4]=(M-F)*z,l[5]=(1-(g+_))*z,l[6]=(S+N)*z,l[7]=0,l[8]=(A+P)*k,l[9]=(S-N)*k,l[10]=(1-(g+O))*k,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=zr.set(l[0],l[1],l[2]).length();const p=zr.set(l[4],l[5],l[6]).length(),m=zr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),ki.copy(this);const h=1/d,y=1/p,b=1/m;return ki.elements[0]*=h,ki.elements[1]*=h,ki.elements[2]*=h,ki.elements[4]*=y,ki.elements[5]*=y,ki.elements[6]*=y,ki.elements[8]*=b,ki.elements[9]*=b,ki.elements[10]*=b,i.setFromRotationMatrix(ki),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=aa,m=!1){const h=this.elements,y=2*c/(i-e),b=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let A,O;if(m)A=c/(d-c),O=d*c/(d-c);else if(p===aa)A=-(d+c)/(d-c),O=-2*d*c/(d-c);else if(p===ml)A=-d/(d-c),O=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=y,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=b,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=A,h[14]=O,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=aa,m=!1){const h=this.elements,y=2/(i-e),b=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let A,O;if(m)A=1/(d-c),O=d/(d-c);else if(p===aa)A=-2/(d-c),O=-(d+c)/(d-c);else if(p===ml)A=-1/(d-c),O=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=y,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=b,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=A,h[14]=O,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};xu.prototype.isMatrix4=!0;let pn=xu;const zr=new $,ki=new pn,N1=new $(0,0,0),U1=new $(1,1,1),ps=new $,Rc=new $,Si=new $,zx=new pn,Fx=new Ts;class As{constructor(e=0,i=0,s=0,l=As.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],y=l[9],b=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ct(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-b,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-b,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ct(b,-1,1)),Math.abs(b)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,h),this._y=Math.atan2(-b,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return zx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Fx.setFromEuler(this),this.setFromQuaternion(Fx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L1=0;const Bx=new $,Fr=new Ts,wa=new pn,Cc=new $,tl=new $,O1=new $,P1=new Ts,Gx=new $(1,0,0),Hx=new $(0,1,0),kx=new $(0,0,1),Vx={type:"added"},I1={type:"removed"},Br={type:"childadded",child:null},Hd={type:"childremoved",child:null};class Bn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L1++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new $,i=new As,s=new Ts,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new bt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.multiply(Fr),this}rotateOnWorldAxis(e,i){return Fr.setFromAxisAngle(e,i),this.quaternion.premultiply(Fr),this}rotateX(e){return this.rotateOnAxis(Gx,e)}rotateY(e){return this.rotateOnAxis(Hx,e)}rotateZ(e){return this.rotateOnAxis(kx,e)}translateOnAxis(e,i){return Bx.copy(e).applyQuaternion(this.quaternion),this.position.add(Bx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Gx,e)}translateY(e){return this.translateOnAxis(Hx,e)}translateZ(e){return this.translateOnAxis(kx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Cc.copy(e):Cc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(tl,Cc,this.up):wa.lookAt(Cc,tl,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),Fr.setFromRotationMatrix(wa),this.quaternion.premultiply(Fr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vx),Br.child=e,this.dispatchEvent(Br),Br.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(I1),Hd.child=e,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wa.multiply(e.parent.matrixWorld)),e.applyMatrix4(wa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vx),Br.child=e,this.dispatchEvent(Br),Br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,O1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,P1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,y=m.length;h<y;h++){const b=m[h];c(e.shapes,b)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),y=d(e.images),b=d(e.shapes),g=d(e.skeletons),M=d(e.animations),A=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),y.length>0&&(s.images=y),b.length>0&&(s.shapes=b),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(p){const m=[];for(const h in p){const y=p[h];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new $(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ui extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z1={type:"move"};class kd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const O of e.hand.values()){const S=i.getJointPose(O,s),_=this._getHandJoint(h,O);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const y=h.joints["index-finger-tip"],b=h.joints["thumb-tip"],g=y.position.distanceTo(b.position),M=.02,A=.005;h.inputState.pinching&&g>M+A?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-A&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(z1)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new ui;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const uv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Vd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Pt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ft.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ft.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ft.workingColorSpace){if(e=M1(e,1),i=Ct(i,0,1),s=Ct(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Vd(d,c,e+1/3),this.g=Vd(d,c,e),this.b=Vd(d,c,e-1/3)}return Ft.colorSpaceToWorking(this,l),this}setStyle(e,i=Pi){function s(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ht("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Pi){const s=uv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}copyLinearToSRGB(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return Ft.workingToColorSpace(Kn.copy(this),e),Math.round(Ct(Kn.r*255,0,255))*65536+Math.round(Ct(Kn.g*255,0,255))*256+Math.round(Ct(Kn.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ft.workingColorSpace){Ft.workingToColorSpace(Kn.copy(this),i);const s=Kn.r,l=Kn.g,c=Kn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const y=(p+d)/2;if(p===d)m=0,h=0;else{const b=d-p;switch(h=y<=.5?b/(d+p):b/(2-d-p),d){case s:m=(l-c)/b+(l<c?6:0);break;case l:m=(c-s)/b+2;break;case c:m=(s-l)/b+4;break}m/=6}return e.h=m,e.s=h,e.l=y,e}getRGB(e,i=Ft.workingColorSpace){return Ft.workingToColorSpace(Kn.copy(this),i),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=Pi){Ft.workingToColorSpace(Kn.copy(this),e);const i=Kn.r,s=Kn.g,l=Kn.b;return e!==Pi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ms),this.setHSL(ms.h+e,ms.s+i,ms.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ms),e.getHSL(Dc);const s=Id(ms.h,Dc.h,i),l=Id(ms.s,Dc.s,i),c=Id(ms.l,Dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Pt;Pt.NAMES=uv;class bp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Pt(e),this.density=i}clone(){return new bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class F1 extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new As,this.environmentIntensity=1,this.environmentRotation=new As,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Vi=new $,Ra=new $,jd=new $,Ca=new $,Gr=new $,Hr=new $,jx=new $,Xd=new $,Wd=new $,qd=new $,Yd=new vn,Zd=new vn,Kd=new vn;class Ii{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Vi.subVectors(e,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Vi.subVectors(l,i),Ra.subVectors(s,i),jd.subVectors(e,i);const d=Vi.dot(Vi),p=Vi.dot(Ra),m=Vi.dot(jd),h=Ra.dot(Ra),y=Ra.dot(jd),b=d*h-p*p;if(b===0)return c.set(0,0,0),null;const g=1/b,M=(h*m-p*y)*g,A=(d*y-p*m)*g;return c.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ca)===null?!1:Ca.x>=0&&Ca.y>=0&&Ca.x+Ca.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,Ca)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ca.x),m.addScaledVector(d,Ca.y),m.addScaledVector(p,Ca.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return Yd.setScalar(0),Zd.setScalar(0),Kd.setScalar(0),Yd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,s),Kd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Yd,c.x),d.addScaledVector(Zd,c.y),d.addScaledVector(Kd,c.z),d}static isFrontFacing(e,i,s,l){return Vi.subVectors(s,i),Ra.subVectors(e,i),Vi.cross(Ra).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vi.subVectors(this.c,this.b),Ra.subVectors(this.a,this.b),Vi.cross(Ra).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ii.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Ii.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Gr.subVectors(l,s),Hr.subVectors(c,s),Xd.subVectors(e,s);const m=Gr.dot(Xd),h=Hr.dot(Xd);if(m<=0&&h<=0)return i.copy(s);Wd.subVectors(e,l);const y=Gr.dot(Wd),b=Hr.dot(Wd);if(y>=0&&b<=y)return i.copy(l);const g=m*b-y*h;if(g<=0&&m>=0&&y<=0)return d=m/(m-y),i.copy(s).addScaledVector(Gr,d);qd.subVectors(e,c);const M=Gr.dot(qd),A=Hr.dot(qd);if(A>=0&&M<=A)return i.copy(c);const O=M*h-m*A;if(O<=0&&h>=0&&A<=0)return p=h/(h-A),i.copy(s).addScaledVector(Hr,p);const S=y*A-M*b;if(S<=0&&b-y>=0&&M-A>=0)return jx.subVectors(c,l),p=(b-y)/(b-y+(M-A)),i.copy(l).addScaledVector(jx,p);const _=1/(S+O+g);return d=O*_,p=g*_,i.copy(s).addScaledVector(Gr,d).addScaledVector(Hr,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(ji.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(ji.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=ji.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,ji):ji.fromBufferAttribute(c,d),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Nc.copy(s.boundingBox)),Nc.applyMatrix4(e.matrixWorld),this.union(Nc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Uc.subVectors(this.max,nl),kr.subVectors(e.a,nl),Vr.subVectors(e.b,nl),jr.subVectors(e.c,nl),gs.subVectors(Vr,kr),xs.subVectors(jr,Vr),Ws.subVectors(kr,jr);let i=[0,-gs.z,gs.y,0,-xs.z,xs.y,0,-Ws.z,Ws.y,gs.z,0,-gs.x,xs.z,0,-xs.x,Ws.z,0,-Ws.x,-gs.y,gs.x,0,-xs.y,xs.x,0,-Ws.y,Ws.x,0];return!Qd(i,kr,Vr,jr,Uc)||(i=[1,0,0,0,1,0,0,0,1],!Qd(i,kr,Vr,jr,Uc))?!1:(Lc.crossVectors(gs,xs),i=[Lc.x,Lc.y,Lc.z],Qd(i,kr,Vr,jr,Uc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new $,new $,new $,new $,new $,new $,new $,new $],ji=new $,Nc=new gl,kr=new $,Vr=new $,jr=new $,gs=new $,xs=new $,Ws=new $,nl=new $,Uc=new $,Lc=new $,qs=new $;function Qd(r,e,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){qs.fromArray(r,c);const p=l.x*Math.abs(qs.x)+l.y*Math.abs(qs.y)+l.z*Math.abs(qs.z),m=e.dot(qs),h=i.dot(qs),y=s.dot(qs);if(Math.max(-Math.max(m,h,y),Math.min(m,h,y))>p)return!1}return!0}const Rn=new $,Oc=new ft;let B1=0;class Wi extends ws{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=ap,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix3(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyMatrix4(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.applyNormalMatrix(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Rn.fromBufferAttribute(this,i),Rn.transformDirection(e),this.setXYZ(i,Rn.x,Rn.y,Rn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=an(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=na(i,this.array)),i}setX(e,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=na(i,this.array)),i}setY(e,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=na(i,this.array)),i}setZ(e,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=na(i,this.array)),i}setW(e,i){return this.normalized&&(i=an(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=an(i,this.array),s=an(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=an(i,this.array),s=an(s,this.array),l=an(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=an(i,this.array),s=an(s,this.array),l=an(l,this.array),c=an(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ap&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class fv extends Wi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class dv extends Wi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class bn extends Wi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const G1=new gl,il=new $,Jd=new $;class vu{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):G1.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(Jd)),this.expandByPoint(il.copy(e.center).sub(Jd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let H1=0;const Oi=new pn,$d=new Bn,Xr=new $,Mi=new gl,al=new gl,zn=new $;class $n extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v1(e)?dv:fv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new bt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,i,s){return Oi.makeTranslation(e,i,s),this.applyMatrix4(Oi),this}scale(e,i,s){return Oi.makeScale(e,i,s),this.applyMatrix4(Oi),this}lookAt(e){return $d.lookAt(e),$d.updateMatrix(),this.applyMatrix4($d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new bn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Mi.setFromBufferAttribute(c),this.morphTargetsRelative?(zn.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(zn),zn.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(zn)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(Mi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];al.setFromBufferAttribute(p),this.morphTargetsRelative?(zn.addVectors(Mi.min,al.min),Mi.expandByPoint(zn),zn.addVectors(Mi.max,al.max),Mi.expandByPoint(zn)):(Mi.expandByPoint(al.min),Mi.expandByPoint(al.max))}Mi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)zn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(zn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,y=p.count;h<y;h++)zn.fromBufferAttribute(p,h),m&&(Xr.fromBufferAttribute(e,h),zn.add(Xr)),l=Math.max(l,s.distanceToSquared(zn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new $,m[T]=new $;const h=new $,y=new $,b=new $,g=new ft,M=new ft,A=new ft,O=new $,S=new $;function _(T,B,Q){h.fromBufferAttribute(s,T),y.fromBufferAttribute(s,B),b.fromBufferAttribute(s,Q),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,B),A.fromBufferAttribute(c,Q),y.sub(h),b.sub(h),M.sub(g),A.sub(g);const V=1/(M.x*A.y-A.x*M.y);isFinite(V)&&(O.copy(y).multiplyScalar(A.y).addScaledVector(b,-M.y).multiplyScalar(V),S.copy(b).multiplyScalar(M.x).addScaledVector(y,-A.x).multiplyScalar(V),p[T].add(O),p[B].add(O),p[Q].add(O),m[T].add(S),m[B].add(S),m[Q].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let T=0,B=N.length;T<B;++T){const Q=N[T],V=Q.start,J=Q.count;for(let me=V,te=V+J;me<te;me+=3)_(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const P=new $,F=new $,W=new $,z=new $;function k(T){W.fromBufferAttribute(l,T),z.copy(W);const B=p[T];P.copy(B),P.sub(W.multiplyScalar(W.dot(B))).normalize(),F.crossVectors(z,B);const V=F.dot(m[T])<0?-1:1;d.setXYZW(T,P.x,P.y,P.z,V)}for(let T=0,B=N.length;T<B;++T){const Q=N[T],V=Q.start,J=Q.count;for(let me=V,te=V+J;me<te;me+=3)k(e.getX(me+0)),k(e.getX(me+1)),k(e.getX(me+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,d=new $,p=new $,m=new $,h=new $,y=new $,b=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),O=e.getX(g+1),S=e.getX(g+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,O),d.fromBufferAttribute(i,S),y.subVectors(d,c),b.subVectors(l,c),y.cross(b),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,O),h.fromBufferAttribute(s,S),p.add(y),m.add(y),h.add(y),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(O,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),y.subVectors(d,c),b.subVectors(l,c),y.cross(b),s.setXYZ(g+0,y.x,y.y,y.z),s.setXYZ(g+1,y.x,y.y,y.z),s.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)zn.fromBufferAttribute(e,i),zn.normalize(),e.setXYZ(i,zn.x,zn.y,zn.z)}toNonIndexed(){function e(p,m){const h=p.array,y=p.itemSize,b=p.normalized,g=new h.constructor(m.length*y);let M=0,A=0;for(let O=0,S=m.length;O<S;O++){p.isInterleavedBufferAttribute?M=m[O]*p.data.stride+p.offset:M=m[O]*y;for(let _=0;_<y;_++)g[A++]=h[M++]}return new Wi(g,y,b)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let y=0,b=h.length;y<b;y++){const g=h[y],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],y=[];for(let b=0,g=h.length;b<g;b++){const M=h[b];y.push(M.toJSON(e.data))}y.length>0&&(l[m]=y,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const y=l[h];this.setAttribute(h,y.clone(i))}const c=e.morphAttributes;for(const h in c){const y=[],b=c[h];for(let g=0,M=b.length;g<M;g++)y.push(b[g].clone(i));this.morphAttributes[h]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,y=d.length;h<y;h++){const b=d[h];this.addGroup(b.start,b.count,b.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class k1{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=ap,this.updateRanges=[],this.version=0,this.uuid=Ms()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ms()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ti=new $;class pu{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)ti.fromBufferAttribute(this,i),ti.applyMatrix4(e),this.setXYZ(i,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)ti.fromBufferAttribute(this,i),ti.applyNormalMatrix(e),this.setXYZ(i,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)ti.fromBufferAttribute(this,i),ti.transformDirection(e),this.setXYZ(i,ti.x,ti.y,ti.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=na(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=an(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=an(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=an(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=an(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=an(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=na(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=na(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=na(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=na(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=an(i,this.array),s=an(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=an(i,this.array),s=an(s,this.array),l=an(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=an(i,this.array),s=an(s,this.array),l=an(l,this.array),c=an(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){hu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Wi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new pu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){hu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let V1=0;class nr extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=no,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=xh,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ht(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ht(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(s.blending=this.blending),this.side!==Es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==gh&&(s.blendSrc=this.blendSrc),this.blendDst!==xh&&(s.blendDst=this.blendDst),this.blendEquation!==Ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hv extends nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wr;const sl=new $,qr=new $,Yr=new $,Zr=new ft,rl=new ft,pv=new pn,Pc=new $,ol=new $,Ic=new $,Xx=new ft,eh=new ft,Wx=new ft;class j1 extends Bn{constructor(e=new hv){if(super(),this.isSprite=!0,this.type="Sprite",Wr===void 0){Wr=new $n;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new k1(i,5);Wr.setIndex([0,1,2,0,2,3]),Wr.setAttribute("position",new pu(s,3,0,!1)),Wr.setAttribute("uv",new pu(s,2,3,!1))}this.geometry=Wr,this.material=e,this.center=new ft(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Bt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qr.setFromMatrixScale(this.matrixWorld),pv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Yr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qr.multiplyScalar(-Yr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;zc(Pc.set(-.5,-.5,0),Yr,d,qr,l,c),zc(ol.set(.5,-.5,0),Yr,d,qr,l,c),zc(Ic.set(.5,.5,0),Yr,d,qr,l,c),Xx.set(0,0),eh.set(1,0),Wx.set(1,1);let p=e.ray.intersectTriangle(Pc,ol,Ic,!1,sl);if(p===null&&(zc(ol.set(-.5,.5,0),Yr,d,qr,l,c),eh.set(0,1),p=e.ray.intersectTriangle(Pc,Ic,ol,!1,sl),p===null))return;const m=e.ray.origin.distanceTo(sl);m<e.near||m>e.far||i.push({distance:m,point:sl.clone(),uv:Ii.getInterpolation(sl,Pc,ol,Ic,Xx,eh,Wx,new ft),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function zc(r,e,i,s,l,c){Zr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(rl.x=c*Zr.x-l*Zr.y,rl.y=l*Zr.x+c*Zr.y):rl.copy(Zr),r.copy(e),r.x+=rl.x,r.y+=rl.y,r.applyMatrix4(pv)}const Na=new $,th=new $,Fc=new $,_s=new $,nh=new $,Bc=new $,ih=new $;class yp{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Na)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Na.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Na.copy(this.origin).addScaledVector(this.direction,i),Na.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){th.copy(e).add(i).multiplyScalar(.5),Fc.copy(i).sub(e).normalize(),_s.copy(this.origin).sub(th);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Fc),p=_s.dot(this.direction),m=-_s.dot(Fc),h=_s.lengthSq(),y=Math.abs(1-d*d);let b,g,M,A;if(y>0)if(b=d*m-p,g=d*p-m,A=c*y,b>=0)if(g>=-A)if(g<=A){const O=1/y;b*=O,g*=O,M=b*(b+d*g+2*p)+g*(d*b+g+2*m)+h}else g=c,b=Math.max(0,-(d*g+p)),M=-b*b+g*(g+2*m)+h;else g=-c,b=Math.max(0,-(d*g+p)),M=-b*b+g*(g+2*m)+h;else g<=-A?(b=Math.max(0,-(-d*c+p)),g=b>0?-c:Math.min(Math.max(-c,-m),c),M=-b*b+g*(g+2*m)+h):g<=A?(b=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(b=Math.max(0,-(d*c+p)),g=b>0?c:Math.min(Math.max(-c,-m),c),M=-b*b+g*(g+2*m)+h);else g=d>0?-c:c,b=Math.max(0,-(d*g+p)),M=-b*b+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,b),l&&l.copy(th).addScaledVector(Fc,g),M}intersectSphere(e,i){Na.subVectors(e.center,this.origin);const s=Na.dot(this.direction),l=Na.dot(Na)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,y=1/this.direction.y,b=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),y>=0?(c=(e.min.y-g.y)*y,d=(e.max.y-g.y)*y):(c=(e.max.y-g.y)*y,d=(e.min.y-g.y)*y),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),b>=0?(p=(e.min.z-g.z)*b,m=(e.max.z-g.z)*b):(p=(e.max.z-g.z)*b,m=(e.min.z-g.z)*b),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Na)!==null}intersectTriangle(e,i,s,l,c){nh.subVectors(i,e),Bc.subVectors(s,e),ih.crossVectors(nh,Bc);let d=this.direction.dot(ih),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;_s.subVectors(this.origin,e);const m=p*this.direction.dot(Bc.crossVectors(_s,Bc));if(m<0)return null;const h=p*this.direction.dot(nh.cross(_s));if(h<0||m+h>d)return null;const y=-p*_s.dot(ih);return y<0?null:this.at(y/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ua extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qx=new pn,Ys=new yp,Gc=new vu,Yx=new $,Hc=new $,kc=new $,Vc=new $,ah=new $,jc=new $,Zx=new $,Xc=new $;class We extends Bn{constructor(e=new $n,i=new Ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){jc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const y=p[m],b=c[m];y!==0&&(ah.fromBufferAttribute(b,e),d?jc.addScaledVector(ah,y):jc.addScaledVector(ah.sub(i),y))}i.add(jc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Gc.copy(s.boundingSphere),Gc.applyMatrix4(c),Ys.copy(e.ray).recast(e.near),!(Gc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Gc,Yx)===null||Ys.origin.distanceToSquared(Yx)>(e.far-e.near)**2))&&(qx.copy(c).invert(),Ys.copy(e.ray).applyMatrix4(qx),!(s.boundingBox!==null&&Ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ys)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,y=c.attributes.uv1,b=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let A=0,O=g.length;A<O;A++){const S=g[A],_=d[S.materialIndex],N=Math.max(S.start,M.start),P=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let F=N,W=P;F<W;F+=3){const z=p.getX(F),k=p.getX(F+1),T=p.getX(F+2);l=Wc(this,_,e,s,h,y,b,z,k,T),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),O=Math.min(p.count,M.start+M.count);for(let S=A,_=O;S<_;S+=3){const N=p.getX(S),P=p.getX(S+1),F=p.getX(S+2);l=Wc(this,d,e,s,h,y,b,N,P,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,O=g.length;A<O;A++){const S=g[A],_=d[S.materialIndex],N=Math.max(S.start,M.start),P=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let F=N,W=P;F<W;F+=3){const z=F,k=F+1,T=F+2;l=Wc(this,_,e,s,h,y,b,z,k,T),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),O=Math.min(m.count,M.start+M.count);for(let S=A,_=O;S<_;S+=3){const N=S,P=S+1,F=S+2;l=Wc(this,d,e,s,h,y,b,N,P,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function X1(r,e,i,s,l,c,d,p){let m;if(e.side===fi?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===Es,p),m===null)return null;Xc.copy(p),Xc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Xc);return h<i.near||h>i.far?null:{distance:h,point:Xc.clone(),object:r}}function Wc(r,e,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Hc),r.getVertexPosition(m,kc),r.getVertexPosition(h,Vc);const y=X1(r,e,i,s,Hc,kc,Vc,Zx);if(y){const b=new $;Ii.getBarycoord(Zx,Hc,kc,Vc,b),l&&(y.uv=Ii.getInterpolatedAttribute(l,p,m,h,b,new ft)),c&&(y.uv1=Ii.getInterpolatedAttribute(c,p,m,h,b,new ft)),d&&(y.normal=Ii.getInterpolatedAttribute(d,p,m,h,b,new $),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};Ii.getNormal(Hc,kc,Vc,g.normal),y.face=g,y.barycoord=b}return y}class W1 extends Jn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=Wn,y=Wn,b,g){super(null,d,p,m,h,y,l,c,b,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sh=new $,q1=new $,Y1=new bt;class bs{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=sh.subVectors(s,i).cross(q1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(sh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Y1.getNormalMatrix(e),l=this.coplanarPoint(sh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zs=new vu,Z1=new ft(.5,.5),qc=new $;class Sp{constructor(e=new bs,i=new bs,s=new bs,l=new bs,c=new bs,d=new bs){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=aa,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],y=c[4],b=c[5],g=c[6],M=c[7],A=c[8],O=c[9],S=c[10],_=c[11],N=c[12],P=c[13],F=c[14],W=c[15];if(l[0].setComponents(h-d,M-y,_-A,W-N).normalize(),l[1].setComponents(h+d,M+y,_+A,W+N).normalize(),l[2].setComponents(h+p,M+b,_+O,W+P).normalize(),l[3].setComponents(h-p,M-b,_-O,W-P).normalize(),s)l[4].setComponents(m,g,S,F).normalize(),l[5].setComponents(h-m,M-g,_-S,W-F).normalize();else if(l[4].setComponents(h-m,M-g,_-S,W-F).normalize(),i===aa)l[5].setComponents(h+m,M+g,_+S,W+F).normalize();else if(i===ml)l[5].setComponents(m,g,S,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zs)}intersectsSprite(e){Zs.center.set(0,0,0);const i=Z1.distanceTo(e.center);return Zs.radius=.7071067811865476+i,Zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(qc.x=l.normal.x>0?e.max.x:e.min.x,qc.y=l.normal.y>0?e.max.y:e.min.y,qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mp extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mu=new $,gu=new $,Kx=new pn,ll=new yp,Yc=new vu,rh=new $,Qx=new $;class mv extends Bn{constructor(e=new $n,i=new Mp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)mu.fromBufferAttribute(i,l-1),gu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=mu.distanceTo(gu);e.setAttribute("lineDistance",new bn(s,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,e.ray.intersectsSphere(Yc)===!1)return;Kx.copy(l).invert(),ll.copy(e.ray).applyMatrix4(Kx);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,y=s.index,g=s.attributes.position;if(y!==null){const M=Math.max(0,d.start),A=Math.min(y.count,d.start+d.count);for(let O=M,S=A-1;O<S;O+=h){const _=y.getX(O),N=y.getX(O+1),P=Zc(this,e,ll,m,_,N,O);P&&i.push(P)}if(this.isLineLoop){const O=y.getX(A-1),S=y.getX(M),_=Zc(this,e,ll,m,O,S,A-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),A=Math.min(g.count,d.start+d.count);for(let O=M,S=A-1;O<S;O+=h){const _=Zc(this,e,ll,m,O,O+1,O);_&&i.push(_)}if(this.isLineLoop){const O=Zc(this,e,ll,m,A-1,M,A-1);O&&i.push(O)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Zc(r,e,i,s,l,c,d){const p=r.geometry.attributes.position;if(mu.fromBufferAttribute(p,l),gu.fromBufferAttribute(p,c),i.distanceSqToSegment(mu,gu,rh,Qx)>s)return;rh.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(rh);if(!(h<e.near||h>e.far))return{distance:h,point:Qx.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const Jx=new $,$x=new $;class K1 extends mv{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Jx.fromBufferAttribute(i,l),$x.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Jx.distanceTo($x);e.setAttribute("lineDistance",new bn(s,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gv extends Jn{constructor(e=[],i=er,s,l,c,d,p,m,h,y){super(e,i,s,l,c,d,p,m,h,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q1 extends Jn{constructor(e,i,s,l,c,d,p,m,h){super(e,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends Jn{constructor(e,i,s=oa,l,c,d,p=Wn,m=Wn,h,y=Fa,b=1){if(y!==Fa&&y!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:b};super(g,l,c,d,p,m,y,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class J1 extends ro{constructor(e,i=oa,s=er,l,c,d=Wn,p=Wn,m,h=Fa){const y={width:e,height:e,depth:1},b=[y,y,y,y,y,y];super(e,e,i,s,l,c,d,p,m,h),this.image=b,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xv extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ln extends $n{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],y=[],b=[];let g=0,M=0;A("z","y","x",-1,-1,s,i,e,d,c,0),A("z","y","x",1,-1,s,i,-e,d,c,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,c,4),A("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new bn(h,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(b,2));function A(O,S,_,N,P,F,W,z,k,T,B){const Q=F/k,V=W/T,J=F/2,me=W/2,te=z/2,H=k+1,E=T+1;let L=0,I=0;const fe=new $;for(let de=0;de<E;de++){const U=de*V-me;for(let Z=0;Z<H;Z++){const be=Z*Q-J;fe[O]=be*N,fe[S]=U*P,fe[_]=te,h.push(fe.x,fe.y,fe.z),fe[O]=0,fe[S]=0,fe[_]=z>0?1:-1,y.push(fe.x,fe.y,fe.z),b.push(Z/k),b.push(1-de/T),L+=1}}for(let de=0;de<T;de++)for(let U=0;U<k;U++){const Z=g+U+H*de,be=g+U+H*(de+1),Ce=g+(U+1)+H*(de+1),Te=g+(U+1)+H*de;m.push(Z,be,Te),m.push(be,Ce,Te),I+=6}p.addGroup(M,I,B),M+=I,g+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xn extends $n{constructor(e=1,i=1,s=1,l=32,c=1,d=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:p,thetaLength:m};const h=this;l=Math.floor(l),c=Math.floor(c);const y=[],b=[],g=[],M=[];let A=0;const O=[],S=s/2;let _=0;N(),d===!1&&(e>0&&P(!0),i>0&&P(!1)),this.setIndex(y),this.setAttribute("position",new bn(b,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(M,2));function N(){const F=new $,W=new $;let z=0;const k=(i-e)/s;for(let T=0;T<=c;T++){const B=[],Q=T/c,V=Q*(i-e)+e;for(let J=0;J<=l;J++){const me=J/l,te=me*m+p,H=Math.sin(te),E=Math.cos(te);W.x=V*H,W.y=-Q*s+S,W.z=V*E,b.push(W.x,W.y,W.z),F.set(H,k,E).normalize(),g.push(F.x,F.y,F.z),M.push(me,1-Q),B.push(A++)}O.push(B)}for(let T=0;T<l;T++)for(let B=0;B<c;B++){const Q=O[B][T],V=O[B+1][T],J=O[B+1][T+1],me=O[B][T+1];(e>0||B!==0)&&(y.push(Q,V,me),z+=3),(i>0||B!==c-1)&&(y.push(V,J,me),z+=3)}h.addGroup(_,z,0),_+=z}function P(F){const W=A,z=new ft,k=new $;let T=0;const B=F===!0?e:i,Q=F===!0?1:-1;for(let J=1;J<=l;J++)b.push(0,S*Q,0),g.push(0,Q,0),M.push(.5,.5),A++;const V=A;for(let J=0;J<=l;J++){const te=J/l*m+p,H=Math.cos(te),E=Math.sin(te);k.x=B*E,k.y=S*Q,k.z=B*H,b.push(k.x,k.y,k.z),g.push(0,Q,0),z.x=H*.5+.5,z.y=E*.5*Q+.5,M.push(z.x,z.y),A++}for(let J=0;J<l;J++){const me=W+J,te=V+J;F===!0?y.push(te,te+1,me):y.push(te+1,te,me),T+=3}h.addGroup(_,T,F===!0?1:2),_+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ep extends Xn{constructor(e=1,i=1,s=32,l=1,c=!1,d=0,p=Math.PI*2){super(0,e,i,s,l,c,d,p),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:p}}static fromJSON(e){return new Ep(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $1{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let d=1;d<=e;d++)s=this.getPoint(d/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const c=s.length;let d;i?d=i:d=e*s[c-1];let p=0,m=c-1,h;for(;p<=m;)if(l=Math.floor(p+(m-p)/2),h=s[l]-d,h<0)p=l+1;else if(h>0)m=l-1;else{m=l;break}if(l=m,s[l]===d)return l/(c-1);const y=s[l],g=s[l+1]-y,M=(d-y)/g;return(l+M)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const d=this.getPoint(l),p=this.getPoint(c),m=i||(d.isVector2?new ft:new $);return m.copy(p).sub(d).normalize(),m}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new $,l=[],c=[],d=[],p=new $,m=new pn;for(let M=0;M<=e;M++){const A=M/e;l[M]=this.getTangentAt(A,new $)}c[0]=new $,d[0]=new $;let h=Number.MAX_VALUE;const y=Math.abs(l[0].x),b=Math.abs(l[0].y),g=Math.abs(l[0].z);y<=h&&(h=y,s.set(1,0,0)),b<=h&&(h=b,s.set(0,1,0)),g<=h&&s.set(0,0,1),p.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],p),d[0].crossVectors(l[0],c[0]);for(let M=1;M<=e;M++){if(c[M]=c[M-1].clone(),d[M]=d[M-1].clone(),p.crossVectors(l[M-1],l[M]),p.length()>Number.EPSILON){p.normalize();const A=Math.acos(Ct(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(m.makeRotationAxis(p,A))}d[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(Ct(c[0].dot(c[e]),-1,1));M/=e,l[0].dot(p.crossVectors(c[0],c[e]))>0&&(M=-M);for(let A=1;A<=e;A++)c[A].applyMatrix4(m.makeRotationAxis(l[A],M*A)),d[A].crossVectors(l[A],c[A])}return{tangents:l,normals:c,binormals:d}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function eM(r,e){const i=1-r;return i*i*e}function tM(r,e){return 2*(1-r)*r*e}function nM(r,e){return r*r*e}function oh(r,e,i,s){return eM(r,e)+tM(r,i)+nM(r,s)}class iM extends $1{constructor(e=new $,i=new $,s=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new $){const s=i,l=this.v0,c=this.v1,d=this.v2;return s.set(oh(e,l.x,c.x,d.x),oh(e,l.y,c.y,d.y),oh(e,l.z,c.z,d.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class La extends $n{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,y=m+1,b=e/p,g=i/m,M=[],A=[],O=[],S=[];for(let _=0;_<y;_++){const N=_*g-d;for(let P=0;P<h;P++){const F=P*b-c;A.push(F,-N,0),O.push(0,0,1),S.push(P/p),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<p;N++){const P=N+h*_,F=N+h*(_+1),W=N+1+h*(_+1),z=N+1+h*_;M.push(P,F,z),M.push(F,W,z)}this.setIndex(M),this.setAttribute("position",new bn(A,3)),this.setAttribute("normal",new bn(O,3)),this.setAttribute("uv",new bn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tp extends $n{constructor(e=.5,i=1,s=32,l=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:d},s=Math.max(3,s),l=Math.max(1,l);const p=[],m=[],h=[],y=[];let b=e;const g=(i-e)/l,M=new $,A=new ft;for(let O=0;O<=l;O++){for(let S=0;S<=s;S++){const _=c+S/s*d;M.x=b*Math.cos(_),M.y=b*Math.sin(_),m.push(M.x,M.y,M.z),h.push(0,0,1),A.x=(M.x/i+1)/2,A.y=(M.y/i+1)/2,y.push(A.x,A.y)}b+=g}for(let O=0;O<l;O++){const S=O*(s+1);for(let _=0;_<s;_++){const N=_+S,P=N,F=N+s+1,W=N+s+2,z=N+1;p.push(P,F,z),p.push(F,W,z)}}this.setIndex(p),this.setAttribute("position",new bn(m,3)),this.setAttribute("normal",new bn(h,3)),this.setAttribute("uv",new bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ln extends $n{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const y=[],b=new $,g=new $,M=[],A=[],O=[],S=[];for(let _=0;_<=s;_++){const N=[],P=_/s;let F=0;_===0&&d===0?F=.5/i:_===s&&m===Math.PI&&(F=-.5/i);for(let W=0;W<=i;W++){const z=W/i;b.x=-e*Math.cos(l+z*c)*Math.sin(d+P*p),b.y=e*Math.cos(d+P*p),b.z=e*Math.sin(l+z*c)*Math.sin(d+P*p),A.push(b.x,b.y,b.z),g.copy(b).normalize(),O.push(g.x,g.y,g.z),S.push(z+F,1-P),N.push(h++)}y.push(N)}for(let _=0;_<s;_++)for(let N=0;N<i;N++){const P=y[_][N+1],F=y[_][N],W=y[_+1][N],z=y[_+1][N+1];(_!==0||d>0)&&M.push(P,F,z),(_!==s-1||m<Math.PI)&&M.push(F,W,z)}this.setIndex(M),this.setAttribute("position",new bn(A,3)),this.setAttribute("normal",new bn(O,3)),this.setAttribute("uv",new bn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function oo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(e_(l))l.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(e_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function ni(r){const e={};for(let i=0;i<r.length;i++){const s=oo(r[i]);for(const l in s)e[l]=s[l]}return e}function e_(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function aM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function _v(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const sM={clone:oo,merge:ni};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class la extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class lM extends la{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fn extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ip,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cM extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uM extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ap extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const lh=new pn,t_=new $,n_=new $;class vv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Ti,this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sp,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new vn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;t_.setFromMatrixPosition(e.matrixWorld),i.position.copy(t_),n_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(n_),i.updateMatrixWorld(),lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ml||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kc=new $,Qc=new Ts,Ji=new $;class bv extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=aa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kc,Qc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Kc,Qc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const vs=new $,i_=new ft,a_=new ft;class Ei extends bv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=rp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ru*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rp*2*Math.atan(Math.tan(ru*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-e/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-e/vs.z)}getViewSize(e,i){return this.getViewBounds(e,i_,a_),i.subVectors(a_,i_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ru*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class fM extends vv{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0}}class dM extends Ap{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new fM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class wp extends bv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=y*this.view.offsetY,m=p-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class hM extends vv{constructor(){super(new wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s_ extends Ap{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new hM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class r_ extends Ap{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Kr=-90,Qr=1;class pM extends Bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Kr,Qr,e,i);l.layers=this.layers,this.add(l);const c=new Ei(Kr,Qr,e,i);c.layers=this.layers,this.add(c);const d=new Ei(Kr,Qr,e,i);d.layers=this.layers,this.add(d);const p=new Ei(Kr,Qr,e,i);p.layers=this.layers,this.add(p);const m=new Ei(Kr,Qr,e,i);m.layers=this.layers,this.add(m);const h=new Ei(Kr,Qr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===aa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ml)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,y]=this.children,b=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const O=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=O,e.setRenderTarget(s,5,l),S&&e.autoClear===!1&&e.clearDepth(),e.render(i,y),e.setRenderTarget(b,g,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class mM extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ht("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class o_{constructor(e=1,i=0,s=0){this.radius=e,this.phi=i,this.theta=s}set(e,i,s){return this.radius=e,this.phi=i,this.theta=s,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,i,s){return this.radius=Math.sqrt(e*e+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,s),this.phi=Math.acos(Ct(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Lp=class Lp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Lp.prototype.isMatrix2=!0;let l_=Lp;class xM extends K1{constructor(e=10,i=10,s=4473924,l=8947848){s=new Pt(s),l=new Pt(l);const c=i/2,d=e/i,p=e/2,m=[],h=[];for(let g=0,M=0,A=-p;g<=i;g++,A+=d){m.push(-p,0,A,p,0,A),m.push(A,0,-p,A,0,p);const O=g===c?s:l;O.toArray(h,M),M+=3,O.toArray(h,M),M+=3,O.toArray(h,M),M+=3,O.toArray(h,M),M+=3}const y=new $n;y.setAttribute("position",new bn(m,3)),y.setAttribute("color",new bn(h,3));const b=new Mp({vertexColors:!0,toneMapped:!1});super(y,b),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class _M extends ws{constructor(e,i=null){super(),this.object=e,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){ht("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c_(r,e,i,s){const l=vM(s);switch(i){case av:return r*e;case rv:return r*e/l.components*l.byteLength;case pp:return r*e/l.components*l.byteLength;case tr:return r*e*2/l.components*l.byteLength;case mp:return r*e*2/l.components*l.byteLength;case sv:return r*e*3/l.components*l.byteLength;case Xi:return r*e*4/l.components*l.byteLength;case gp:return r*e*4/l.components*l.byteLength;case nu:case iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case au:case su:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Dh:return Math.max(r,16)*Math.max(e,8)/4;case wh:case Ch:return Math.max(r,8)*Math.max(e,8)/2;case Nh:case Uh:case Oh:case Ph:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Lh:case lu:case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Qh:case Jh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ep:case tp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cu:case np:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function vM(r){switch(r){case Ti:case ev:return{byteLength:1,components:1};case hl:case tv:case za:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case oa:case fp:case ia:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let r=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function bM(r){const e=new WeakMap;function i(p,m){const h=p.array,y=p.usage,b=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,y),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:b}}function s(p,m,h){const y=m.array,b=m.updateRanges;if(r.bindBuffer(h,p),b.length===0)r.bufferSubData(h,0,y);else{b.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<b.length;M++){const A=b[g],O=b[M];O.start<=A.start+A.count+1?A.count=Math.max(A.count,O.start+O.count-A.start):(++g,b[g]=O)}b.length=g+1;for(let M=0,A=b.length;M<A;M++){const O=b[M];r.bufferSubData(h,O.start*y.BYTES_PER_ELEMENT,y,O.start,O.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(r.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const y=e.get(p);(!y||y.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var yM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,FE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
}`,FT=`#define LAMBERT
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
}`,BT=`#define MATCAP
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
}`,wt={alphahash_fragment:yM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:wM,aomap_pars_fragment:RM,batching_pars_vertex:CM,batching_vertex:DM,begin_vertex:NM,beginnormal_vertex:UM,bsdfs:LM,iridescence_fragment:OM,bumpmap_pars_fragment:PM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:BM,color_fragment:GM,color_pars_fragment:HM,color_pars_vertex:kM,color_vertex:VM,common:jM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:WM,displacementmap_pars_vertex:qM,displacementmap_vertex:YM,emissivemap_fragment:ZM,emissivemap_pars_fragment:KM,colorspace_fragment:QM,colorspace_pars_fragment:JM,envmap_fragment:$M,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:hE,envmap_vertex:iE,fog_vertex:aE,fog_pars_vertex:sE,fog_fragment:rE,fog_pars_fragment:oE,gradientmap_pars_fragment:lE,lightmap_pars_fragment:cE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:fE,lights_pars_begin:dE,lights_toon_fragment:pE,lights_toon_pars_fragment:mE,lights_phong_fragment:gE,lights_phong_pars_fragment:xE,lights_physical_fragment:_E,lights_physical_pars_fragment:vE,lights_fragment_begin:bE,lights_fragment_maps:yE,lights_fragment_end:SE,lightprobes_pars_fragment:ME,logdepthbuf_fragment:EE,logdepthbuf_pars_fragment:TE,logdepthbuf_pars_vertex:AE,logdepthbuf_vertex:wE,map_fragment:RE,map_pars_fragment:CE,map_particle_fragment:DE,map_particle_pars_fragment:NE,metalnessmap_fragment:UE,metalnessmap_pars_fragment:LE,morphinstance_vertex:OE,morphcolor_vertex:PE,morphnormal_vertex:IE,morphtarget_pars_vertex:zE,morphtarget_vertex:FE,normal_fragment_begin:BE,normal_fragment_maps:GE,normal_pars_fragment:HE,normal_pars_vertex:kE,normal_vertex:VE,normalmap_pars_fragment:jE,clearcoat_normal_fragment_begin:XE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:qE,iridescence_pars_fragment:YE,opaque_fragment:ZE,packing:KE,premultiplied_alpha_fragment:QE,project_vertex:JE,dithering_fragment:$E,dithering_pars_fragment:eT,roughnessmap_fragment:tT,roughnessmap_pars_fragment:nT,shadowmap_pars_fragment:iT,shadowmap_pars_vertex:aT,shadowmap_vertex:sT,shadowmask_pars_fragment:rT,skinbase_vertex:oT,skinning_pars_vertex:lT,skinning_vertex:cT,skinnormal_vertex:uT,specularmap_fragment:fT,specularmap_pars_fragment:dT,tonemapping_fragment:hT,tonemapping_pars_fragment:pT,transmission_fragment:mT,transmission_pars_fragment:gT,uv_pars_fragment:xT,uv_pars_vertex:_T,uv_vertex:vT,worldpos_vertex:bT,background_vert:yT,background_frag:ST,backgroundCube_vert:MT,backgroundCube_frag:ET,cube_vert:TT,cube_frag:AT,depth_vert:wT,depth_frag:RT,distance_vert:CT,distance_frag:DT,equirect_vert:NT,equirect_frag:UT,linedashed_vert:LT,linedashed_frag:OT,meshbasic_vert:PT,meshbasic_frag:IT,meshlambert_vert:zT,meshlambert_frag:FT,meshmatcap_vert:BT,meshmatcap_frag:GT,meshnormal_vert:HT,meshnormal_frag:kT,meshphong_vert:VT,meshphong_frag:jT,meshphysical_vert:XT,meshphysical_frag:WT,meshtoon_vert:qT,meshtoon_frag:YT,points_vert:ZT,points_frag:KT,shadow_vert:QT,shadow_frag:JT,sprite_vert:$T,sprite_frag:eA},Ve={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},ea={basic:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:ni([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:ni([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Pt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:ni([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:ni([Ve.points,Ve.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:ni([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:ni([Ve.common,Ve.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:ni([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:ni([Ve.sprite,Ve.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:ni([Ve.common,Ve.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:ni([Ve.lights,Ve.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};ea.physical={uniforms:ni([ea.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Jc={r:0,b:0,g:0},tA=new pn,Sv=new bt;Sv.set(-1,0,0,0,1,0,0,0,1);function nA(r,e,i,s,l,c){const d=new Pt(0);let p=l===!0?0:1,m,h,y=null,b=0,g=null;function M(N){let P=N.isScene===!0?N.background:null;if(P&&P.isTexture){const F=N.backgroundBlurriness>0;P=e.get(P,F)}return P}function A(N){let P=!1;const F=M(N);F===null?S(d,p):F&&F.isColor&&(S(F,1),P=!0);const W=r.xr.getEnvironmentBlendMode();W==="additive"?i.buffers.color.setClear(0,0,0,1,c):W==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function O(N,P){const F=M(P);F&&(F.isCubeTexture||F.mapping===_u)?(h===void 0&&(h=new We(new ln(1,1,1),new la({name:"BackgroundCubeMaterial",uniforms:oo(ea.backgroundCube.uniforms),vertexShader:ea.backgroundCube.vertexShader,fragmentShader:ea.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(W,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=F,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(tA.makeRotationFromEuler(P.backgroundRotation)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Sv),h.material.toneMapped=Ft.getTransfer(F.colorSpace)!==Jt,(y!==F||b!==F.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,y=F,b=F.version,g=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new We(new La(2,2),new la({name:"BackgroundMaterial",uniforms:oo(ea.background.uniforms),vertexShader:ea.background.vertexShader,fragmentShader:ea.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Ft.getTransfer(F.colorSpace)!==Jt,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(y!==F||b!==F.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,y=F,b=F.version,g=r.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function S(N,P){N.getRGB(Jc,_v(r)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,P,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),p=P,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,S(d,p)},render:A,addToRenderList:O,dispose:_}}function iA(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(V,J,me,te,H){let E=!1;const L=b(V,te,me,J);c!==L&&(c=L,h(c.object)),E=M(V,te,me,H),E&&A(V,te,me,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(E||d)&&(d=!1,F(V,J,me,te),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function y(V){return r.deleteVertexArray(V)}function b(V,J,me,te){const H=te.wireframe===!0;let E=s[J.id];E===void 0&&(E={},s[J.id]=E);const L=V.isInstancedMesh===!0?V.id:0;let I=E[L];I===void 0&&(I={},E[L]=I);let fe=I[me.id];fe===void 0&&(fe={},I[me.id]=fe);let de=fe[H];return de===void 0&&(de=g(m()),fe[H]=de),de}function g(V){const J=[],me=[],te=[];for(let H=0;H<i;H++)J[H]=0,me[H]=0,te[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:me,attributeDivisors:te,object:V,attributes:{},index:null}}function M(V,J,me,te){const H=c.attributes,E=J.attributes;let L=0;const I=me.getAttributes();for(const fe in I)if(I[fe].location>=0){const U=H[fe];let Z=E[fe];if(Z===void 0&&(fe==="instanceMatrix"&&V.instanceMatrix&&(Z=V.instanceMatrix),fe==="instanceColor"&&V.instanceColor&&(Z=V.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;L++}return c.attributesNum!==L||c.index!==te}function A(V,J,me,te){const H={},E=J.attributes;let L=0;const I=me.getAttributes();for(const fe in I)if(I[fe].location>=0){let U=E[fe];U===void 0&&(fe==="instanceMatrix"&&V.instanceMatrix&&(U=V.instanceMatrix),fe==="instanceColor"&&V.instanceColor&&(U=V.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),H[fe]=Z,L++}c.attributes=H,c.attributesNum=L,c.index=te}function O(){const V=c.newAttributes;for(let J=0,me=V.length;J<me;J++)V[J]=0}function S(V){_(V,0)}function _(V,J){const me=c.newAttributes,te=c.enabledAttributes,H=c.attributeDivisors;me[V]=1,te[V]===0&&(r.enableVertexAttribArray(V),te[V]=1),H[V]!==J&&(r.vertexAttribDivisor(V,J),H[V]=J)}function N(){const V=c.newAttributes,J=c.enabledAttributes;for(let me=0,te=J.length;me<te;me++)J[me]!==V[me]&&(r.disableVertexAttribArray(me),J[me]=0)}function P(V,J,me,te,H,E,L){L===!0?r.vertexAttribIPointer(V,J,me,H,E):r.vertexAttribPointer(V,J,me,te,H,E)}function F(V,J,me,te){O();const H=te.attributes,E=me.getAttributes(),L=J.defaultAttributeValues;for(const I in E){const fe=E[I];if(fe.location>=0){let de=H[I];if(de===void 0&&(I==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),I==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),de!==void 0){const U=de.normalized,Z=de.itemSize,be=e.get(de);if(be===void 0)continue;const Ce=be.buffer,Te=be.type,se=be.bytesPerElement,xe=Te===r.INT||Te===r.UNSIGNED_INT||de.gpuType===fp;if(de.isInterleavedBufferAttribute){const Ee=de.data,Re=Ee.stride,Ze=de.offset;if(Ee.isInstancedInterleavedBuffer){for(let ke=0;ke<fe.locationSize;ke++)_(fe.location+ke,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ke=0;ke<fe.locationSize;ke++)S(fe.location+ke);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let ke=0;ke<fe.locationSize;ke++)P(fe.location+ke,Z/fe.locationSize,Te,U,Re*se,(Ze+Z/fe.locationSize*ke)*se,xe)}else{if(de.isInstancedBufferAttribute){for(let Ee=0;Ee<fe.locationSize;Ee++)_(fe.location+Ee,de.meshPerAttribute);V.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ee=0;Ee<fe.locationSize;Ee++)S(fe.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ee=0;Ee<fe.locationSize;Ee++)P(fe.location+Ee,Z/fe.locationSize,Te,U,Z*se,Z/fe.locationSize*Ee*se,xe)}}else if(L!==void 0){const U=L[I];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(fe.location,U);break;case 3:r.vertexAttrib3fv(fe.location,U);break;case 4:r.vertexAttrib4fv(fe.location,U);break;default:r.vertexAttrib1fv(fe.location,U)}}}}N()}function W(){B();for(const V in s){const J=s[V];for(const me in J){const te=J[me];for(const H in te){const E=te[H];for(const L in E)y(E[L].object),delete E[L];delete te[H]}}delete s[V]}}function z(V){if(s[V.id]===void 0)return;const J=s[V.id];for(const me in J){const te=J[me];for(const H in te){const E=te[H];for(const L in E)y(E[L].object),delete E[L];delete te[H]}}delete s[V.id]}function k(V){for(const J in s){const me=s[J];for(const te in me){const H=me[te];if(H[V.id]===void 0)continue;const E=H[V.id];for(const L in E)y(E[L].object),delete E[L];delete H[V.id]}}}function T(V){for(const J in s){const me=s[J],te=V.isInstancedMesh===!0?V.id:0,H=me[te];if(H!==void 0){for(const E in H){const L=H[E];for(const I in L)y(L[I].object),delete L[I];delete H[E]}delete me[te],Object.keys(me).length===0&&delete s[J]}}}function B(){Q(),d=!0,c!==l&&(c=l,h(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:B,resetDefaultState:Q,dispose:W,releaseStatesOfGeometry:z,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:O,enableAttribute:S,disableUnusedAttributes:N}}function aA(r,e,i){let s;function l(m){s=m}function c(m,h){r.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,y){y!==0&&(r.drawArraysInstanced(s,m,h,y),i.update(h,s,y))}function p(m,h,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,y);let g=0;for(let M=0;M<y;M++)g+=h[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function sA(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(k){return!(k!==Xi&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(k){const T=k===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Ti&&s.convert(k)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ia&&!T)}function m(k){if(k==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const y=m(h);y!==h&&(ht("WebGLRenderer:",h,"not supported, using",y,"instead."),h=y);const b=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),F=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),W=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:b,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:O,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:F,maxSamples:W,samples:z}}function rA(r){const e=this;let i=null,s=0,l=!1,c=!1;const d=new bs,p=new bt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(b,g){const M=b.length!==0||g||s!==0||l;return l=g,s=b.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(b,g){i=y(b,g,0)},this.setState=function(b,g,M){const A=b.clippingPlanes,O=b.clipIntersection,S=b.clipShadows,_=r.get(b);if(!l||A===null||A.length===0||c&&!S)c?y(null):h();else{const N=c?0:s,P=N*4;let F=_.clippingState||null;m.value=F,F=y(A,g,P,M);for(let W=0;W!==P;++W)F[W]=i[W];_.clippingState=F,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=N}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(b,g,M,A){const O=b!==null?b.length:0;let S=null;if(O!==0){if(S=m.value,A!==!0||S===null){const _=M+O*4,N=g.matrixWorldInverse;p.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let P=0,F=M;P!==O;++P,F+=4)d.copy(b[P]).applyMatrix4(N,p),d.normal.toArray(S,F),S[F+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,S}}const Ss=4,u_=[.125,.215,.35,.446,.526,.582],Qs=20,oA=256,cl=new wp,f_=new Pt;let ch=null,uh=0,fh=0,dh=!1;const lA=new $;class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=lA}=c;ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ch,uh,fh),this._renderer.xr.enabled=dh,e.scissorTest=!1,Jr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===er||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ch=this._renderer.getRenderTarget(),uh=this._renderer.getActiveCubeFace(),fh=this._renderer.getActiveMipmapLevel(),dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:za,format:Xi,colorSpace:uu,depthBuffer:!1},l=h_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cA(c)),this._blurMaterial=fA(c,e,i),this._ggxMaterial=uA(c,e,i)}return l}_compileMaterial(e){const i=new We(new $n,e);this._renderer.compile(i,cl)}_sceneToCubeUV(e,i,s,l,c){const m=new Ei(90,1,i,s),h=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],b=this._renderer,g=b.autoClear,M=b.toneMapping;b.getClearColor(f_),b.toneMapping=sa,b.autoClear=!1,b.state.buffers.depth.getReversed()&&(b.setRenderTarget(l),b.clearDepth(),b.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new ln,new Ua({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,S=O.material;let _=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,_=!0):(S.color.copy(f_),_=!0);for(let P=0;P<6;P++){const F=P%3;F===0?(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+y[P],c.y,c.z)):F===1?(m.up.set(0,0,h[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+y[P],c.z)):(m.up.set(0,h[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+y[P]));const W=this._cubeSize;Jr(l,F*W,P>2?W:0,W,W),b.setRenderTarget(l),_&&b.render(O,m),b.render(e,m)}b.toneMapping=M,b.autoClear=g,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===er||e.mapping===so;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Jr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,cl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),y=i/(this._lodMeshes.length-1),b=Math.sqrt(h*h-y*y),g=0+h*1.25,M=b*g,{_lodMax:A}=this,O=this._sizeLods[s],S=3*O*(s>A-Ss?s-A+Ss:0),_=4*(this._cubeSize-O);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=A-i,Jr(c,S,_,3*O,2*O),l.setRenderTarget(c),l.render(p,cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=A-s,Jr(e,S,_,3*O,2*O),l.setRenderTarget(e),l.render(p,cl)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const y=3,b=this._lodMeshes[l];b.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,A=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Qs-1),O=c/A,S=isFinite(c)?1+Math.floor(y*O):Qs;S>Qs&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Qs}`);const _=[];let N=0;for(let k=0;k<Qs;++k){const T=k/O,B=Math.exp(-T*T/2);_.push(B),k===0?N+=B:k<S&&(N+=2*B)}for(let k=0;k<_.length;k++)_[k]=_[k]/N;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=_,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:P}=this;g.dTheta.value=A,g.mipInt.value=P-s;const F=this._sizeLods[l],W=3*F*(l>P-Ss?l-P+Ss:0),z=4*(this._cubeSize-F);Jr(i,W,z,3*F,2*F),m.setRenderTarget(i),m.render(b,cl)}}function cA(r){const e=[],i=[],s=[];let l=r;const c=r-Ss+1+u_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>r-Ss?m=u_[d-r+Ss-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),y=-h,b=1+h,g=[y,y,b,y,b,b,y,y,b,b,y,b],M=6,A=6,O=3,S=2,_=1,N=new Float32Array(O*A*M),P=new Float32Array(S*A*M),F=new Float32Array(_*A*M);for(let z=0;z<M;z++){const k=z%3*2/3-1,T=z>2?0:-1,B=[k,T,0,k+2/3,T,0,k+2/3,T+1,0,k,T,0,k+2/3,T+1,0,k,T+1,0];N.set(B,O*A*z),P.set(g,S*A*z);const Q=[z,z,z,z,z,z];F.set(Q,_*A*z)}const W=new $n;W.setAttribute("position",new Wi(N,O)),W.setAttribute("uv",new Wi(P,S)),W.setAttribute("faceIndex",new Wi(F,_)),s.push(new We(W,null)),l>Ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function h_(r,e,i){const s=new ra(r,e,i);return s.texture.mapping=_u,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Jr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function uA(r,e,i){return new la({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function fA(r,e,i){const s=new Float32Array(Qs),l=new $(0,1,0);return new la({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function p_(){return new la({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bu(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function m_(){return new la({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function bu(){return`

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
	`}class Mv extends ra{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new gv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ln(5,5,5),c=new la({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:Pa});c.uniforms.tEquirect.value=i;const d=new We(l,c),p=i.minFilter;return i.minFilter===Js&&(i.minFilter=Qn),new pM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function dA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ld||M===Od)if(e.has(g)){const A=e.get(g).texture;return p(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const O=new Mv(A.height);return O.fromEquirectangularTexture(r,g),e.set(g,O),g.addEventListener("dispose",h),p(O.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,A=M===Ld||M===Od,O=M===er||M===so;if(A||O){let S=i.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return s===null&&(s=new d_(r)),S=A?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const N=g.image;return A&&N&&N.height>0||O&&N&&m(N)?(s===null&&(s=new d_(r)),S=A?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",y),S.texture):null}}}return g}function p(g,M){return M===Ld?g.mapping=er:M===Od&&(g.mapping=so),g}function m(g){let M=0;const A=6;for(let O=0;O<A;O++)g[O]!==void 0&&M++;return M===A}function h(g){const M=g.target;M.removeEventListener("dispose",h);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function y(g){const M=g.target;M.removeEventListener("dispose",y);const A=i.get(M);A!==void 0&&(i.delete(M),A.dispose())}function b(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:b}}function hA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&sp("WebGLRenderer: "+s+" extension not supported."),l}}}function pA(r,e,i,s){const l={},c=new WeakMap;function d(b){const g=b.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(b,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(b){const g=b.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function h(b){const g=[],M=b.index,A=b.attributes.position;let O=0;if(A===void 0)return;if(M!==null){const N=M.array;O=M.version;for(let P=0,F=N.length;P<F;P+=3){const W=N[P+0],z=N[P+1],k=N[P+2];g.push(W,z,z,k,k,W)}}else{const N=A.array;O=A.version;for(let P=0,F=N.length/3-1;P<F;P+=3){const W=P+0,z=P+1,k=P+2;g.push(W,z,z,k,k,W)}}const S=new(A.count>=65535?dv:fv)(g,1);S.version=O;const _=c.get(b);_&&e.remove(_),c.set(b,S)}function y(b){const g=c.get(b);if(g){const M=b.index;M!==null&&g.version<M.version&&h(b)}else h(b);return c.get(b)}return{get:p,update:m,getWireframeAttribute:y}}function mA(r,e,i){let s;function l(b){s=b}let c,d;function p(b){c=b.type,d=b.bytesPerElement}function m(b,g){r.drawElements(s,g,c,b*d),i.update(g,s,1)}function h(b,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,b*d,M),i.update(g,s,M))}function y(b,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,b,0,M);let O=0;for(let S=0;S<M;S++)O+=g[S];i.update(O,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=y}function gA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xA(r,e,i){const s=new WeakMap,l=new vn;function c(d,p,m){const h=d.morphTargetInfluences,y=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,b=y!==void 0?y.length:0;let g=s.get(p);if(g===void 0||g.count!==b){let Q=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Q)};var M=Q;g!==void 0&&g.texture.dispose();const A=p.morphAttributes.position!==void 0,O=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],N=p.morphAttributes.normal||[],P=p.morphAttributes.color||[];let F=0;A===!0&&(F=1),O===!0&&(F=2),S===!0&&(F=3);let W=p.attributes.position.count*F,z=1;W>e.maxTextureSize&&(z=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const k=new Float32Array(W*z*4*b),T=new lv(k,W,z,b);T.type=ia,T.needsUpdate=!0;const B=F*4;for(let V=0;V<b;V++){const J=_[V],me=N[V],te=P[V],H=W*z*4*V;for(let E=0;E<J.count;E++){const L=E*B;A===!0&&(l.fromBufferAttribute(J,E),k[H+L+0]=l.x,k[H+L+1]=l.y,k[H+L+2]=l.z,k[H+L+3]=0),O===!0&&(l.fromBufferAttribute(me,E),k[H+L+4]=l.x,k[H+L+5]=l.y,k[H+L+6]=l.z,k[H+L+7]=0),S===!0&&(l.fromBufferAttribute(te,E),k[H+L+8]=l.x,k[H+L+9]=l.y,k[H+L+10]=l.z,k[H+L+11]=te.itemSize===4?l.w:1)}}g={count:b,texture:T,size:new ft(W,z)},s.set(p,g),p.addEventListener("dispose",Q)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let A=0;for(let S=0;S<h.length;S++)A+=h[S];const O=p.morphTargetsRelative?1:1-A;m.getUniforms().setValue(r,"morphTargetBaseInfluence",O),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function _A(r,e,i,s,l){let c=new WeakMap;function d(h){const y=l.render.frame,b=h.geometry,g=e.get(h,b);if(c.get(g)!==y&&(e.update(g),c.set(g,y)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==y&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,y))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return g}function p(){c=new WeakMap}function m(h){const y=h.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),i.remove(y.instanceMatrix),y.instanceColor!==null&&i.remove(y.instanceColor)}return{update:d,dispose:p}}const vA={[W_]:"LINEAR_TONE_MAPPING",[q_]:"REINHARD_TONE_MAPPING",[Y_]:"CINEON_TONE_MAPPING",[Z_]:"ACES_FILMIC_TONE_MAPPING",[Q_]:"AGX_TONE_MAPPING",[J_]:"NEUTRAL_TONE_MAPPING",[K_]:"CUSTOM_TONE_MAPPING"};function bA(r,e,i,s,l){const c=new ra(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new ro(e,i):void 0}),d=new ra(e,i,{type:za,depthBuffer:!1,stencilBuffer:!1}),p=new $n;p.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new bn([0,2,0,0,2,0],2));const m=new lM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new We(p,m),y=new wp(-1,1,1,-1,0,1);let b=null,g=null,M=!1,A,O=null,S=[],_=!1;this.setSize=function(N,P){c.setSize(N,P),d.setSize(N,P);for(let F=0;F<S.length;F++){const W=S[F];W.setSize&&W.setSize(N,P)}},this.setEffects=function(N){S=N,_=S.length>0&&S[0].isRenderPass===!0;const P=c.width,F=c.height;for(let W=0;W<S.length;W++){const z=S[W];z.setSize&&z.setSize(P,F)}},this.begin=function(N,P){if(M||N.toneMapping===sa&&S.length===0)return!1;if(O=P,P!==null){const F=P.width,W=P.height;(c.width!==F||c.height!==W)&&this.setSize(F,W)}return _===!1&&N.setRenderTarget(c),A=N.toneMapping,N.toneMapping=sa,!0},this.hasRenderPass=function(){return _},this.end=function(N,P){N.toneMapping=A,M=!0;let F=c,W=d;for(let z=0;z<S.length;z++){const k=S[z];if(k.enabled!==!1&&(k.render(N,W,F,P),k.needsSwap!==!1)){const T=F;F=W,W=T}}if(b!==N.outputColorSpace||g!==N.toneMapping){b=N.outputColorSpace,g=N.toneMapping,m.defines={},Ft.getTransfer(b)===Jt&&(m.defines.SRGB_TRANSFER="");const z=vA[g];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=F.texture,N.setRenderTarget(O),N.render(h,y),O=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Ev=new Jn,op=new ro(1,1),Tv=new lv,Av=new D1,wv=new gv,g_=[],x_=[],__=new Float32Array(16),v_=new Float32Array(9),b_=new Float32Array(4);function lo(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=g_[l];if(c===void 0&&(c=new Float32Array(l),g_[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,r[d].toArray(c,p)}return c}function On(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Pn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function yu(r,e){let i=x_[e];i===void 0&&(i=new Int32Array(e),x_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function yA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function SA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2fv(this.addr,e),Pn(i,e)}}function MA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(On(i,e))return;r.uniform3fv(this.addr,e),Pn(i,e)}}function EA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4fv(this.addr,e),Pn(i,e)}}function TA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;b_.set(s),r.uniformMatrix2fv(this.addr,!1,b_),Pn(i,s)}}function AA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;v_.set(s),r.uniformMatrix3fv(this.addr,!1,v_),Pn(i,s)}}function wA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(On(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pn(i,e)}else{if(On(i,s))return;__.set(s),r.uniformMatrix4fv(this.addr,!1,__),Pn(i,s)}}function RA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function CA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2iv(this.addr,e),Pn(i,e)}}function DA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3iv(this.addr,e),Pn(i,e)}}function NA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4iv(this.addr,e),Pn(i,e)}}function UA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function LA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(On(i,e))return;r.uniform2uiv(this.addr,e),Pn(i,e)}}function OA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(On(i,e))return;r.uniform3uiv(this.addr,e),Pn(i,e)}}function PA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(On(i,e))return;r.uniform4uiv(this.addr,e),Pn(i,e)}}function IA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(op.compareFunction=i.isReversedDepthBuffer()?_p:xp,c=op):c=Ev,i.setTexture2D(e||c,l)}function zA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Av,l)}function FA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||wv,l)}function BA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Tv,l)}function GA(r){switch(r){case 5126:return yA;case 35664:return SA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return AA;case 35676:return wA;case 5124:case 35670:return RA;case 35667:case 35671:return CA;case 35668:case 35672:return DA;case 35669:case 35673:return NA;case 5125:return UA;case 36294:return LA;case 36295:return OA;case 36296:return PA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return zA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return BA}}function HA(r,e){r.uniform1fv(this.addr,e)}function kA(r,e){const i=lo(e,this.size,2);r.uniform2fv(this.addr,i)}function VA(r,e){const i=lo(e,this.size,3);r.uniform3fv(this.addr,i)}function jA(r,e){const i=lo(e,this.size,4);r.uniform4fv(this.addr,i)}function XA(r,e){const i=lo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function WA(r,e){const i=lo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function qA(r,e){const i=lo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function YA(r,e){r.uniform1iv(this.addr,e)}function ZA(r,e){r.uniform2iv(this.addr,e)}function KA(r,e){r.uniform3iv(this.addr,e)}function QA(r,e){r.uniform4iv(this.addr,e)}function JA(r,e){r.uniform1uiv(this.addr,e)}function $A(r,e){r.uniform2uiv(this.addr,e)}function e2(r,e){r.uniform3uiv(this.addr,e)}function t2(r,e){r.uniform4uiv(this.addr,e)}function n2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=op:d=Ev;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function i2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Av,c[d])}function a2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||wv,c[d])}function s2(r,e,i){const s=this.cache,l=e.length,c=yu(i,l);On(s,c)||(r.uniform1iv(this.addr,c),Pn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Tv,c[d])}function r2(r){switch(r){case 5126:return HA;case 35664:return kA;case 35665:return VA;case 35666:return jA;case 35674:return XA;case 35675:return WA;case 35676:return qA;case 5124:case 35670:return YA;case 35667:case 35671:return ZA;case 35668:case 35672:return KA;case 35669:case 35673:return QA;case 5125:return JA;case 36294:return $A;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return a2;case 36289:case 36303:case 36311:case 36292:return s2}}class o2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=GA(i.type)}}class l2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=r2(i.type)}}class c2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const hh=/(\w+)(\])?(\[|\.)?/g;function y_(r,e){r.seq.push(e),r.map[e.id]=e}function u2(r,e,i){const s=r.name,l=s.length;for(hh.lastIndex=0;;){const c=hh.exec(s),d=hh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){y_(i,h===void 0?new o2(p,r,e):new l2(p,r,e));break}else{let b=i.map[p];b===void 0&&(b=new c2(p),y_(i,b)),i=b}}}class ou{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);u2(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function S_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const f2=37297;let d2=0;function h2(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const M_=new bt;function p2(r){Ft._getMatrix(M_,Ft.workingColorSpace,r);const e=`mat3( ${M_.elements.map(i=>i.toFixed(4))} )`;switch(Ft.getTransfer(r)){case fu:return[e,"LinearTransferOETF"];case Jt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function E_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+h2(r.getShaderSource(e),p)}else return c}function m2(r,e){const i=p2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const g2={[W_]:"Linear",[q_]:"Reinhard",[Y_]:"Cineon",[Z_]:"ACESFilmic",[Q_]:"AgX",[J_]:"Neutral",[K_]:"Custom"};function x2(r,e){const i=g2[e];return i===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new $;function _2(){Ft.getLuminanceCoefficients($c);const r=$c.x.toFixed(4),e=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function b2(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function y2(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(e,d),locationSize:p}}return i}function dl(r){return r!==""}function T_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(S2,E2)}const M2=new Map;function E2(r,e){let i=wt[e];if(i===void 0){const s=M2.get(e);if(s!==void 0)i=wt[s],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return lp(i)}const T2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(r){return r.replace(T2,A2)}function A2(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function R_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const w2={[tu]:"SHADOWMAP_TYPE_PCF",[fl]:"SHADOWMAP_TYPE_VSM"};function R2(r){return w2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C2={[er]:"ENVMAP_TYPE_CUBE",[so]:"ENVMAP_TYPE_CUBE",[_u]:"ENVMAP_TYPE_CUBE_UV"};function D2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":C2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const N2={[so]:"ENVMAP_MODE_REFRACTION"};function U2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":N2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const L2={[X_]:"ENVMAP_BLENDING_MULTIPLY",[l1]:"ENVMAP_BLENDING_MIX",[c1]:"ENVMAP_BLENDING_ADD"};function O2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":L2[r.combine]||"ENVMAP_BLENDING_NONE"}function P2(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function I2(r,e,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=R2(i),h=D2(i),y=U2(i),b=O2(i),g=P2(i),M=v2(i),A=b2(c),O=l.createProgram();let S,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(dl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(dl).join(`
`),_.length>0&&(_+=`
`)):(S=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+y:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),_=[R_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+y:"",i.envMap?"#define "+b:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==sa?"#define TONE_MAPPING":"",i.toneMapping!==sa?wt.tonemapping_pars_fragment:"",i.toneMapping!==sa?x2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,m2("linearToOutputTexel",i.outputColorSpace),_2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(dl).join(`
`)),d=lp(d),d=T_(d,i),d=A_(d,i),p=lp(p),p=T_(p,i),p=A_(p,i),d=w_(d),p=w_(p),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Ux?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ux?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=N+S+d,F=N+_+p,W=S_(l,l.VERTEX_SHADER,P),z=S_(l,l.FRAGMENT_SHADER,F);l.attachShader(O,W),l.attachShader(O,z),i.index0AttributeName!==void 0?l.bindAttribLocation(O,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(O,0,"position"),l.linkProgram(O);function k(V){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(O)||"",me=l.getShaderInfoLog(W)||"",te=l.getShaderInfoLog(z)||"",H=J.trim(),E=me.trim(),L=te.trim();let I=!0,fe=!0;if(l.getProgramParameter(O,l.LINK_STATUS)===!1)if(I=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,O,W,z);else{const de=E_(l,W,"vertex"),U=E_(l,z,"fragment");Bt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(O,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+H+`
`+de+`
`+U)}else H!==""?ht("WebGLProgram: Program Info Log:",H):(E===""||L==="")&&(fe=!1);fe&&(V.diagnostics={runnable:I,programLog:H,vertexShader:{log:E,prefix:S},fragmentShader:{log:L,prefix:_}})}l.deleteShader(W),l.deleteShader(z),T=new ou(l,O),B=y2(l,O)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let B;this.getAttributes=function(){return B===void 0&&k(this),B};let Q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=l.getProgramParameter(O,f2)),Q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=W,this.fragmentShader=z,this}let z2=0;class F2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new B2(e),i.set(e,s)),s}}class B2{constructor(e){this.id=z2++,this.code=e,this.usedTimes=0}}function G2(r){return r===tr||r===lu||r===cu}function H2(r,e,i,s,l,c){const d=new cv,p=new F2,m=new Set,h=[],y=new Map,b=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return m.add(T),T===0?"uv":`uv${T}`}function O(T,B,Q,V,J,me){const te=V.fog,H=J.geometry,E=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,I=e.get(T.envMap||E,L),fe=I&&I.mapping===_u?I.image.height:null,de=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&ht("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Z=U!==void 0?U.length:0;let be=0;H.morphAttributes.position!==void 0&&(be=1),H.morphAttributes.normal!==void 0&&(be=2),H.morphAttributes.color!==void 0&&(be=3);let Ce,Te,se,xe;if(de){const ut=ea[de];Ce=ut.vertexShader,Te=ut.fragmentShader}else Ce=T.vertexShader,Te=T.fragmentShader,p.update(T),se=p.getVertexShaderID(T),xe=p.getFragmentShaderID(T);const Ee=r.getRenderTarget(),Re=r.state.buffers.depth.getReversed(),Ze=J.isInstancedMesh===!0,ke=J.isBatchedMesh===!0,yt=!!T.map,mt=!!T.matcap,xt=!!I,Be=!!T.aoMap,qe=!!T.lightMap,at=!!T.bumpMap,it=!!T.normalMap,Tt=!!T.displacementMap,j=!!T.emissiveMap,lt=!!T.metalnessMap,Xe=!!T.roughnessMap,tt=T.anisotropy>0,Se=T.clearcoat>0,Ae=T.dispersion>0,R=T.iridescence>0,x=T.sheen>0,G=T.transmission>0,q=tt&&!!T.anisotropyMap,ae=Se&&!!T.clearcoatMap,_e=Se&&!!T.clearcoatNormalMap,De=Se&&!!T.clearcoatRoughnessMap,ne=R&&!!T.iridescenceMap,le=R&&!!T.iridescenceThicknessMap,Ue=x&&!!T.sheenColorMap,Fe=x&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Oe=!!T.specularColorMap,dt=!!T.specularIntensityMap,ct=G&&!!T.transmissionMap,vt=G&&!!T.thicknessMap,Y=!!T.gradientMap,Le=!!T.alphaMap,ve=T.alphaTest>0,Ie=!!T.alphaHash,Pe=!!T.extensions;let Ne=sa;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const Ke={shaderID:de,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Te,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:ke,batchingColor:ke&&J._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&J.instanceColor!==null,instancingMorph:Ze&&J.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:mt,envMap:xt,envMapMode:xt&&I.mapping,envMapCubeUVHeight:fe,aoMap:Be,lightMap:qe,bumpMap:at,normalMap:it,displacementMap:Tt,emissiveMap:j,normalMapObjectSpace:it&&T.normalMapType===d1,normalMapTangentSpace:it&&T.normalMapType===ip,packedNormalMap:it&&T.normalMapType===ip&&G2(T.normalMap.format),metalnessMap:lt,roughnessMap:Xe,anisotropy:tt,anisotropyMap:q,clearcoat:Se,clearcoatMap:ae,clearcoatNormalMap:_e,clearcoatRoughnessMap:De,dispersion:Ae,iridescence:R,iridescenceMap:ne,iridescenceThicknessMap:le,sheen:x,sheenColorMap:Ue,sheenRoughnessMap:Fe,specularMap:ze,specularColorMap:Oe,specularIntensityMap:dt,transmission:G,transmissionMap:ct,thicknessMap:vt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===no&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:Ie,combine:T.combine,mapUv:yt&&A(T.map.channel),aoMapUv:Be&&A(T.aoMap.channel),lightMapUv:qe&&A(T.lightMap.channel),bumpMapUv:at&&A(T.bumpMap.channel),normalMapUv:it&&A(T.normalMap.channel),displacementMapUv:Tt&&A(T.displacementMap.channel),emissiveMapUv:j&&A(T.emissiveMap.channel),metalnessMapUv:lt&&A(T.metalnessMap.channel),roughnessMapUv:Xe&&A(T.roughnessMap.channel),anisotropyMapUv:q&&A(T.anisotropyMap.channel),clearcoatMapUv:ae&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:_e&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:le&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&A(T.sheenRoughnessMap.channel),specularMapUv:ze&&A(T.specularMap.channel),specularColorMapUv:Oe&&A(T.specularColorMap.channel),specularIntensityMapUv:dt&&A(T.specularIntensityMap.channel),transmissionMapUv:ct&&A(T.transmissionMap.channel),thicknessMapUv:vt&&A(T.thicknessMap.channel),alphaMapUv:Le&&A(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(it||tt),vertexNormals:!!H.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!H.attributes.uv&&(yt||Le),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||H.attributes.normal===void 0&&it===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:b,reversedDepthBuffer:Re,skinning:J.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:be,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numLightProbes:B.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&Ft.getTransfer(T.map.colorSpace)===Jt,decodeVideoTextureEmissive:j&&T.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(T.emissiveMap.colorSpace)===Jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ta,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Pe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&T.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function S(T){const B=[];if(T.shaderID?B.push(T.shaderID):(B.push(T.customVertexShaderID),B.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Q in T.defines)B.push(Q),B.push(T.defines[Q]);return T.isRawShaderMaterial===!1&&(_(B,T),N(B,T),B.push(r.outputColorSpace)),B.push(T.customProgramCacheKey),B.join()}function _(T,B){T.push(B.precision),T.push(B.outputColorSpace),T.push(B.envMapMode),T.push(B.envMapCubeUVHeight),T.push(B.mapUv),T.push(B.alphaMapUv),T.push(B.lightMapUv),T.push(B.aoMapUv),T.push(B.bumpMapUv),T.push(B.normalMapUv),T.push(B.displacementMapUv),T.push(B.emissiveMapUv),T.push(B.metalnessMapUv),T.push(B.roughnessMapUv),T.push(B.anisotropyMapUv),T.push(B.clearcoatMapUv),T.push(B.clearcoatNormalMapUv),T.push(B.clearcoatRoughnessMapUv),T.push(B.iridescenceMapUv),T.push(B.iridescenceThicknessMapUv),T.push(B.sheenColorMapUv),T.push(B.sheenRoughnessMapUv),T.push(B.specularMapUv),T.push(B.specularColorMapUv),T.push(B.specularIntensityMapUv),T.push(B.transmissionMapUv),T.push(B.thicknessMapUv),T.push(B.combine),T.push(B.fogExp2),T.push(B.sizeAttenuation),T.push(B.morphTargetsCount),T.push(B.morphAttributeCount),T.push(B.numDirLights),T.push(B.numPointLights),T.push(B.numSpotLights),T.push(B.numSpotLightMaps),T.push(B.numHemiLights),T.push(B.numRectAreaLights),T.push(B.numDirLightShadows),T.push(B.numPointLightShadows),T.push(B.numSpotLightShadows),T.push(B.numSpotLightShadowsWithMaps),T.push(B.numLightProbes),T.push(B.shadowMapType),T.push(B.toneMapping),T.push(B.numClippingPlanes),T.push(B.numClipIntersection),T.push(B.depthPacking)}function N(T,B){d.disableAll(),B.instancing&&d.enable(0),B.instancingColor&&d.enable(1),B.instancingMorph&&d.enable(2),B.matcap&&d.enable(3),B.envMap&&d.enable(4),B.normalMapObjectSpace&&d.enable(5),B.normalMapTangentSpace&&d.enable(6),B.clearcoat&&d.enable(7),B.iridescence&&d.enable(8),B.alphaTest&&d.enable(9),B.vertexColors&&d.enable(10),B.vertexAlphas&&d.enable(11),B.vertexUv1s&&d.enable(12),B.vertexUv2s&&d.enable(13),B.vertexUv3s&&d.enable(14),B.vertexTangents&&d.enable(15),B.anisotropy&&d.enable(16),B.alphaHash&&d.enable(17),B.batching&&d.enable(18),B.dispersion&&d.enable(19),B.batchingColor&&d.enable(20),B.gradientMap&&d.enable(21),B.packedNormalMap&&d.enable(22),B.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),B.fog&&d.enable(0),B.useFog&&d.enable(1),B.flatShading&&d.enable(2),B.logarithmicDepthBuffer&&d.enable(3),B.reversedDepthBuffer&&d.enable(4),B.skinning&&d.enable(5),B.morphTargets&&d.enable(6),B.morphNormals&&d.enable(7),B.morphColors&&d.enable(8),B.premultipliedAlpha&&d.enable(9),B.shadowMapEnabled&&d.enable(10),B.doubleSided&&d.enable(11),B.flipSided&&d.enable(12),B.useDepthPacking&&d.enable(13),B.dithering&&d.enable(14),B.transmission&&d.enable(15),B.sheen&&d.enable(16),B.opaque&&d.enable(17),B.pointsUvs&&d.enable(18),B.decodeVideoTexture&&d.enable(19),B.decodeVideoTextureEmissive&&d.enable(20),B.alphaToCoverage&&d.enable(21),B.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function P(T){const B=M[T.type];let Q;if(B){const V=ea[B];Q=sM.clone(V.uniforms)}else Q=T.uniforms;return Q}function F(T,B){let Q=y.get(B);return Q!==void 0?++Q.usedTimes:(Q=new I2(r,B,T,l),h.push(Q),y.set(B,Q)),Q}function W(T){if(--T.usedTimes===0){const B=h.indexOf(T);h[B]=h[h.length-1],h.pop(),y.delete(T.cacheKey),T.destroy()}}function z(T){p.remove(T)}function k(){p.dispose()}return{getParameters:O,getProgramCacheKey:S,getUniforms:P,acquireProgram:F,releaseProgram:W,releaseShaderCache:z,programs:h,dispose:k}}function k2(){let r=new WeakMap;function e(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function V2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function C_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function D_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,A,O,S,_){let N=r[e];return N===void 0?(N={id:g.id,object:g,geometry:M,material:A,materialVariant:d(g),groupOrder:O,renderOrder:g.renderOrder,z:S,group:_},r[e]=N):(N.id=g.id,N.object=g,N.geometry=M,N.material=A,N.materialVariant=d(g),N.groupOrder=O,N.renderOrder=g.renderOrder,N.z=S,N.group=_),e++,N}function m(g,M,A,O,S,_){const N=p(g,M,A,O,S,_);A.transmission>0?s.push(N):A.transparent===!0?l.push(N):i.push(N)}function h(g,M,A,O,S,_){const N=p(g,M,A,O,S,_);A.transmission>0?s.unshift(N):A.transparent===!0?l.unshift(N):i.unshift(N)}function y(g,M){i.length>1&&i.sort(g||V2),s.length>1&&s.sort(M||C_),l.length>1&&l.sort(M||C_)}function b(){for(let g=e,M=r.length;g<M;g++){const A=r[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:b,sort:y}}function j2(){let r=new WeakMap;function e(s,l){const c=r.get(s);let d;return c===void 0?(d=new D_,r.set(s,[d])):l>=c.length?(d=new D_,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:e,dispose:i}}function X2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Pt};break;case"SpotLight":i={position:new $,direction:new $,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":i={color:new Pt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=i,i}}}function W2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let q2=0;function Y2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Z2(r){const e=new X2,i=W2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const l=new $,c=new pn,d=new pn;function p(h){let y=0,b=0,g=0;for(let B=0;B<9;B++)s.probe[B].set(0,0,0);let M=0,A=0,O=0,S=0,_=0,N=0,P=0,F=0,W=0,z=0,k=0;h.sort(Y2);for(let B=0,Q=h.length;B<Q;B++){const V=h[B],J=V.color,me=V.intensity,te=V.distance;let H=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===tr?H=V.shadow.map.texture:H=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)y+=J.r*me,b+=J.g*me,g+=J.b*me;else if(V.isLightProbe){for(let E=0;E<9;E++)s.probe[E].addScaledVector(V.sh.coefficients[E],me);k++}else if(V.isDirectionalLight){const E=e.get(V);if(E.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const L=V.shadow,I=i.get(V);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,s.directionalShadow[M]=I,s.directionalShadowMap[M]=H,s.directionalShadowMatrix[M]=V.shadow.matrix,N++}s.directional[M]=E,M++}else if(V.isSpotLight){const E=e.get(V);E.position.setFromMatrixPosition(V.matrixWorld),E.color.copy(J).multiplyScalar(me),E.distance=te,E.coneCos=Math.cos(V.angle),E.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),E.decay=V.decay,s.spot[O]=E;const L=V.shadow;if(V.map&&(s.spotLightMap[W]=V.map,W++,L.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[O]=L.matrix,V.castShadow){const I=i.get(V);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,s.spotShadow[O]=I,s.spotShadowMap[O]=H,F++}O++}else if(V.isRectAreaLight){const E=e.get(V);E.color.copy(J).multiplyScalar(me),E.halfWidth.set(V.width*.5,0,0),E.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=E,S++}else if(V.isPointLight){const E=e.get(V);if(E.color.copy(V.color).multiplyScalar(V.intensity),E.distance=V.distance,E.decay=V.decay,V.castShadow){const L=V.shadow,I=i.get(V);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,I.shadowCameraNear=L.camera.near,I.shadowCameraFar=L.camera.far,s.pointShadow[A]=I,s.pointShadowMap[A]=H,s.pointShadowMatrix[A]=V.shadow.matrix,P++}s.point[A]=E,A++}else if(V.isHemisphereLight){const E=e.get(V);E.skyColor.copy(V.color).multiplyScalar(me),E.groundColor.copy(V.groundColor).multiplyScalar(me),s.hemi[_]=E,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=b,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==A||T.spotLength!==O||T.rectAreaLength!==S||T.hemiLength!==_||T.numDirectionalShadows!==N||T.numPointShadows!==P||T.numSpotShadows!==F||T.numSpotMaps!==W||T.numLightProbes!==k)&&(s.directional.length=M,s.spot.length=O,s.rectArea.length=S,s.point.length=A,s.hemi.length=_,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=F+W-z,s.spotLightMap.length=W,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=k,T.directionalLength=M,T.pointLength=A,T.spotLength=O,T.rectAreaLength=S,T.hemiLength=_,T.numDirectionalShadows=N,T.numPointShadows=P,T.numSpotShadows=F,T.numSpotMaps=W,T.numLightProbes=k,s.version=q2++)}function m(h,y){let b=0,g=0,M=0,A=0,O=0;const S=y.matrixWorldInverse;for(let _=0,N=h.length;_<N;_++){const P=h[_];if(P.isDirectionalLight){const F=s.directional[b];F.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),b++}else if(P.isSpotLight){const F=s.spot[M];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const F=s.rectArea[A];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(S),d.identity(),c.copy(P.matrixWorld),c.premultiply(S),d.extractRotation(c),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(P.isPointLight){const F=s.point[g];F.position.setFromMatrixPosition(P.matrixWorld),F.position.applyMatrix4(S),g++}else if(P.isHemisphereLight){const F=s.hemi[O];F.direction.setFromMatrixPosition(P.matrixWorld),F.direction.transformDirection(S),O++}}}return{setup:p,setupView:m,state:s}}function N_(r){const e=new Z2(r),i=[],s=[],l=[];function c(g){b.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function y(g){e.setupView(i,g)}const b={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:b,setupLights:h,setupLightsView:y,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function K2(r){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new N_(r),e.set(l,[p])):c>=d.length?(p=new N_(r),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const Q2=`void main() {
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
}`,$2=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],ew=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],U_=new pn,ul=new $,ph=new $;function tw(r,e,i){let s=new Sp;const l=new ft,c=new ft,d=new vn,p=new cM,m=new uM,h={},y=i.maxTextureSize,b={[Es]:fi,[fi]:Es,[ta]:ta},g=new la({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:Q2,fragmentShader:J2}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new $n;A.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new We(A,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let _=this.type;this.render=function(z,k,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;this.type===j_&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=tu);const B=r.getRenderTarget(),Q=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Pa),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const me=_!==this.type;me&&k.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(H=>H.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,H=z.length;te<H;te++){const E=z[te],L=E.shadow;if(L===void 0){ht("WebGLShadowMap:",E,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;l.copy(L.mapSize);const I=L.getFrameExtents();l.multiply(I),c.copy(L.mapSize),(l.x>y||l.y>y)&&(l.x>y&&(c.x=Math.floor(y/I.x),l.x=c.x*I.x,L.mapSize.x=c.x),l.y>y&&(c.y=Math.floor(y/I.y),l.y=c.y*I.y,L.mapSize.y=c.y));const fe=r.state.buffers.depth.getReversed();if(L.camera._reversedDepth=fe,L.map===null||me===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===fl){if(E.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new ra(l.x,l.y,{format:tr,type:za,minFilter:Qn,magFilter:Qn,generateMipmaps:!1}),L.map.texture.name=E.name+".shadowMap",L.map.depthTexture=new ro(l.x,l.y,ia),L.map.depthTexture.name=E.name+".shadowMapDepth",L.map.depthTexture.format=Fa,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Wn,L.map.depthTexture.magFilter=Wn}else E.isPointLight?(L.map=new Mv(l.x),L.map.depthTexture=new J1(l.x,oa)):(L.map=new ra(l.x,l.y),L.map.depthTexture=new ro(l.x,l.y,oa)),L.map.depthTexture.name=E.name+".shadowMap",L.map.depthTexture.format=Fa,this.type===tu?(L.map.depthTexture.compareFunction=fe?_p:xp,L.map.depthTexture.minFilter=Qn,L.map.depthTexture.magFilter=Qn):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Wn,L.map.depthTexture.magFilter=Wn);L.camera.updateProjectionMatrix()}const de=L.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<de;U++){if(L.map.isWebGLCubeRenderTarget)r.setRenderTarget(L.map,U),r.clear();else{U===0&&(r.setRenderTarget(L.map),r.clear());const Z=L.getViewport(U);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),J.viewport(d)}if(E.isPointLight){const Z=L.camera,be=L.matrix,Ce=E.distance||Z.far;Ce!==Z.far&&(Z.far=Ce,Z.updateProjectionMatrix()),ul.setFromMatrixPosition(E.matrixWorld),Z.position.copy(ul),ph.copy(Z.position),ph.add($2[U]),Z.up.copy(ew[U]),Z.lookAt(ph),Z.updateMatrixWorld(),be.makeTranslation(-ul.x,-ul.y,-ul.z),U_.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),L._frustum.setFromProjectionMatrix(U_,Z.coordinateSystem,Z.reversedDepth)}else L.updateMatrices(E);s=L.getFrustum(),F(k,T,L.camera,E,this.type)}L.isPointLightShadow!==!0&&this.type===fl&&N(L,T),L.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(B,Q,V)};function N(z,k){const T=e.update(O);g.defines.VSM_SAMPLES!==z.blurSamples&&(g.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ra(l.x,l.y,{format:tr,type:za})),g.uniforms.shadow_pass.value=z.map.depthTexture,g.uniforms.resolution.value=z.mapSize,g.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(k,null,T,g,O,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(k,null,T,M,O,null)}function P(z,k,T,B){let Q=null;const V=T.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)Q=V;else if(Q=T.isPointLight===!0?m:p,r.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const J=Q.uuid,me=k.uuid;let te=h[J];te===void 0&&(te={},h[J]=te);let H=te[me];H===void 0&&(H=Q.clone(),te[me]=H,k.addEventListener("dispose",W)),Q=H}if(Q.visible=k.visible,Q.wireframe=k.wireframe,B===fl?Q.side=k.shadowSide!==null?k.shadowSide:k.side:Q.side=k.shadowSide!==null?k.shadowSide:b[k.side],Q.alphaMap=k.alphaMap,Q.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,Q.map=k.map,Q.clipShadows=k.clipShadows,Q.clippingPlanes=k.clippingPlanes,Q.clipIntersection=k.clipIntersection,Q.displacementMap=k.displacementMap,Q.displacementScale=k.displacementScale,Q.displacementBias=k.displacementBias,Q.wireframeLinewidth=k.wireframeLinewidth,Q.linewidth=k.linewidth,T.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const J=r.properties.get(Q);J.light=T}return Q}function F(z,k,T,B,Q){if(z.visible===!1)return;if(z.layers.test(k.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&Q===fl)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,z.matrixWorld);const me=e.update(z),te=z.material;if(Array.isArray(te)){const H=me.groups;for(let E=0,L=H.length;E<L;E++){const I=H[E],fe=te[I.materialIndex];if(fe&&fe.visible){const de=P(z,fe,B,Q);z.onBeforeShadow(r,z,k,T,me,de,I),r.renderBufferDirect(T,null,me,de,z,I),z.onAfterShadow(r,z,k,T,me,de,I)}}}else if(te.visible){const H=P(z,te,B,Q);z.onBeforeShadow(r,z,k,T,me,H,null),r.renderBufferDirect(T,null,me,H,z,null),z.onAfterShadow(r,z,k,T,me,H,null)}}const J=z.children;for(let me=0,te=J.length;me<te;me++)F(J[me],k,T,B,Q)}function W(z){z.target.removeEventListener("dispose",W);for(const T in h){const B=h[T],Q=z.target.uuid;Q in B&&(B[Q].dispose(),delete B[Q])}}}function nw(r,e){function i(){let Y=!1;const Le=new vn;let ve=null;const Ie=new vn(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!Y&&(r.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){Y=Pe},setClear:function(Pe,Ne,Ke,ut,It){It===!0&&(Pe*=ut,Ne*=ut,Ke*=ut),Le.set(Pe,Ne,Ke,ut),Ie.equals(Le)===!1&&(r.clearColor(Pe,Ne,Ke,ut),Ie.copy(Le))},reset:function(){Y=!1,ve=null,Ie.set(-1,0,0,0)}}}function s(){let Y=!1,Le=!1,ve=null,Ie=null,Pe=null;return{setReversed:function(Ne){if(Le!==Ne){const Ke=e.get("EXT_clip_control");Ne?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Le=Ne;const ut=Pe;Pe=null,this.setClear(ut)}},getReversed:function(){return Le},setTest:function(Ne){Ne?Ee(r.DEPTH_TEST):Re(r.DEPTH_TEST)},setMask:function(Ne){ve!==Ne&&!Y&&(r.depthMask(Ne),ve=Ne)},setFunc:function(Ne){if(Le&&(Ne=S1[Ne]),Ie!==Ne){switch(Ne){case _h:r.depthFunc(r.NEVER);break;case vh:r.depthFunc(r.ALWAYS);break;case bh:r.depthFunc(r.LESS);break;case ao:r.depthFunc(r.LEQUAL);break;case yh:r.depthFunc(r.EQUAL);break;case Sh:r.depthFunc(r.GEQUAL);break;case Mh:r.depthFunc(r.GREATER);break;case Eh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=Ne}},setLocked:function(Ne){Y=Ne},setClear:function(Ne){Pe!==Ne&&(Pe=Ne,Le&&(Ne=1-Ne),r.clearDepth(Ne))},reset:function(){Y=!1,ve=null,Ie=null,Pe=null,Le=!1}}}function l(){let Y=!1,Le=null,ve=null,Ie=null,Pe=null,Ne=null,Ke=null,ut=null,It=null;return{setTest:function(Rt){Y||(Rt?Ee(r.STENCIL_TEST):Re(r.STENCIL_TEST))},setMask:function(Rt){Le!==Rt&&!Y&&(r.stencilMask(Rt),Le=Rt)},setFunc:function(Rt,Vt,Gn){(ve!==Rt||Ie!==Vt||Pe!==Gn)&&(r.stencilFunc(Rt,Vt,Gn),ve=Rt,Ie=Vt,Pe=Gn)},setOp:function(Rt,Vt,Gn){(Ne!==Rt||Ke!==Vt||ut!==Gn)&&(r.stencilOp(Rt,Vt,Gn),Ne=Rt,Ke=Vt,ut=Gn)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){It!==Rt&&(r.clearStencil(Rt),It=Rt)},reset:function(){Y=!1,Le=null,ve=null,Ie=null,Pe=null,Ne=null,Ke=null,ut=null,It=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let y={},b={},g={},M=new WeakMap,A=[],O=null,S=!1,_=null,N=null,P=null,F=null,W=null,z=null,k=null,T=new Pt(0,0,0),B=0,Q=!1,V=null,J=null,me=null,te=null,H=null;const E=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,I=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(fe)[1]),L=I>=1):fe.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),L=I>=2);let de=null,U={};const Z=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Ce=new vn().fromArray(Z),Te=new vn().fromArray(be);function se(Y,Le,ve,Ie){const Pe=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(Y,Ne),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ke=0;Ke<ve;Ke++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Pe):r.texImage2D(Le+Ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pe);return Ne}const xe={};xe[r.TEXTURE_2D]=se(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=se(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=se(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=se(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Ee(r.DEPTH_TEST),d.setFunc(ao),at(!1),it(wx),Ee(r.CULL_FACE),Be(Pa);function Ee(Y){y[Y]!==!0&&(r.enable(Y),y[Y]=!0)}function Re(Y){y[Y]!==!1&&(r.disable(Y),y[Y]=!1)}function Ze(Y,Le){return g[Y]!==Le?(r.bindFramebuffer(Y,Le),g[Y]=Le,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Le),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function ke(Y,Le){let ve=A,Ie=!1;if(Y){ve=M.get(Le),ve===void 0&&(ve=[],M.set(Le,ve));const Pe=Y.textures;if(ve.length!==Pe.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,Ke=Pe.length;Ne<Ke;Ne++)ve[Ne]=r.COLOR_ATTACHMENT0+Ne;ve.length=Pe.length,Ie=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(ve)}function yt(Y){return O!==Y?(r.useProgram(Y),O=Y,!0):!1}const mt={[Ks]:r.FUNC_ADD,[XS]:r.FUNC_SUBTRACT,[WS]:r.FUNC_REVERSE_SUBTRACT};mt[qS]=r.MIN,mt[YS]=r.MAX;const xt={[ZS]:r.ZERO,[KS]:r.ONE,[QS]:r.SRC_COLOR,[gh]:r.SRC_ALPHA,[i1]:r.SRC_ALPHA_SATURATE,[t1]:r.DST_COLOR,[$S]:r.DST_ALPHA,[JS]:r.ONE_MINUS_SRC_COLOR,[xh]:r.ONE_MINUS_SRC_ALPHA,[n1]:r.ONE_MINUS_DST_COLOR,[e1]:r.ONE_MINUS_DST_ALPHA,[a1]:r.CONSTANT_COLOR,[s1]:r.ONE_MINUS_CONSTANT_COLOR,[r1]:r.CONSTANT_ALPHA,[o1]:r.ONE_MINUS_CONSTANT_ALPHA};function Be(Y,Le,ve,Ie,Pe,Ne,Ke,ut,It,Rt){if(Y===Pa){S===!0&&(Re(r.BLEND),S=!1);return}if(S===!1&&(Ee(r.BLEND),S=!0),Y!==jS){if(Y!==_||Rt!==Q){if((N!==Ks||W!==Ks)&&(r.blendEquation(r.FUNC_ADD),N=Ks,W=Ks),Rt)switch(Y){case no:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rx:r.blendFunc(r.ONE,r.ONE);break;case Cx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Bt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Rx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cx:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dx:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",Y);break}P=null,F=null,z=null,k=null,T.set(0,0,0),B=0,_=Y,Q=Rt}return}Pe=Pe||Le,Ne=Ne||ve,Ke=Ke||Ie,(Le!==N||Pe!==W)&&(r.blendEquationSeparate(mt[Le],mt[Pe]),N=Le,W=Pe),(ve!==P||Ie!==F||Ne!==z||Ke!==k)&&(r.blendFuncSeparate(xt[ve],xt[Ie],xt[Ne],xt[Ke]),P=ve,F=Ie,z=Ne,k=Ke),(ut.equals(T)===!1||It!==B)&&(r.blendColor(ut.r,ut.g,ut.b,It),T.copy(ut),B=It),_=Y,Q=!1}function qe(Y,Le){Y.side===ta?Re(r.CULL_FACE):Ee(r.CULL_FACE);let ve=Y.side===fi;Le&&(ve=!ve),at(ve),Y.blending===no&&Y.transparent===!1?Be(Pa):Be(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),d.setFunc(Y.depthFunc),d.setTest(Y.depthTest),d.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const Ie=Y.stencilWrite;p.setTest(Ie),Ie&&(p.setMask(Y.stencilWriteMask),p.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),p.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),j(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Re(r.SAMPLE_ALPHA_TO_COVERAGE)}function at(Y){V!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),V=Y)}function it(Y){Y!==kS?(Ee(r.CULL_FACE),Y!==J&&(Y===wx?r.cullFace(r.BACK):Y===VS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Re(r.CULL_FACE),J=Y}function Tt(Y){Y!==me&&(L&&r.lineWidth(Y),me=Y)}function j(Y,Le,ve){Y?(Ee(r.POLYGON_OFFSET_FILL),(te!==Le||H!==ve)&&(te=Le,H=ve,d.getReversed()&&(Le=-Le),r.polygonOffset(Le,ve))):Re(r.POLYGON_OFFSET_FILL)}function lt(Y){Y?Ee(r.SCISSOR_TEST):Re(r.SCISSOR_TEST)}function Xe(Y){Y===void 0&&(Y=r.TEXTURE0+E-1),de!==Y&&(r.activeTexture(Y),de=Y)}function tt(Y,Le,ve){ve===void 0&&(de===null?ve=r.TEXTURE0+E-1:ve=de);let Ie=U[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},U[ve]=Ie),(Ie.type!==Y||Ie.texture!==Le)&&(de!==ve&&(r.activeTexture(ve),de=ve),r.bindTexture(Y,Le||xe[Y]),Ie.type=Y,Ie.texture=Le)}function Se(){const Y=U[de];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ae(){try{r.compressedTexImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function x(){try{r.texSubImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function G(){try{r.texSubImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ae(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function _e(){try{r.texStorage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function De(){try{r.texStorage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function ne(){try{r.texImage2D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function le(){try{r.texImage3D(...arguments)}catch(Y){Bt("WebGLState:",Y)}}function Ue(Y){return b[Y]!==void 0?b[Y]:r.getParameter(Y)}function Fe(Y,Le){b[Y]!==Le&&(r.pixelStorei(Y,Le),b[Y]=Le)}function ze(Y){Ce.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Oe(Y){Te.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),Te.copy(Y))}function dt(Y,Le){let ve=h.get(Le);ve===void 0&&(ve=new WeakMap,h.set(Le,ve));let Ie=ve.get(Y);Ie===void 0&&(Ie=r.getUniformBlockIndex(Le,Y.name),ve.set(Y,Ie))}function ct(Y,Le){const Ie=h.get(Le).get(Y);m.get(Le)!==Ie&&(r.uniformBlockBinding(Le,Ie,Y.__bindingPointIndex),m.set(Le,Ie))}function vt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},b={},de=null,U={},g={},M=new WeakMap,A=[],O=null,S=!1,_=null,N=null,P=null,F=null,W=null,z=null,k=null,T=new Pt(0,0,0),B=0,Q=!1,V=null,J=null,me=null,te=null,H=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:Ee,disable:Re,bindFramebuffer:Ze,drawBuffers:ke,useProgram:yt,setBlending:Be,setMaterial:qe,setFlipSided:at,setCullFace:it,setLineWidth:Tt,setPolygonOffset:j,setScissorTest:lt,activeTexture:Xe,bindTexture:tt,unbindTexture:Se,compressedTexImage2D:Ae,compressedTexImage3D:R,texImage2D:ne,texImage3D:le,pixelStorei:Fe,getParameter:Ue,updateUBOMapping:dt,uniformBlockBinding:ct,texStorage2D:_e,texStorage3D:De,texSubImage2D:x,texSubImage3D:G,compressedTexSubImage2D:q,compressedTexSubImage3D:ae,scissor:ze,viewport:Oe,reset:vt}}function iw(r,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,y=new WeakMap,b=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(R,x){return A?new OffscreenCanvas(R,x):du("canvas")}function S(R,x,G){let q=1;const ae=Ae(R);if((ae.width>G||ae.height>G)&&(q=G/Math.max(ae.width,ae.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const _e=Math.floor(q*ae.width),De=Math.floor(q*ae.height);g===void 0&&(g=O(_e,De));const ne=x?O(_e,De):g;return ne.width=_e,ne.height=De,ne.getContext("2d").drawImage(R,0,0,_e,De),ht("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+_e+"x"+De+")."),ne}else return"data"in R&&ht("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function _(R){return R.generateMipmaps}function N(R){r.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function F(R,x,G,q,ae,_e=!1){if(R!==null){if(r[R]!==void 0)return r[R];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let De;q&&(De=e.get("EXT_texture_norm16"),De||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=x;if(x===r.RED&&(G===r.FLOAT&&(ne=r.R32F),G===r.HALF_FLOAT&&(ne=r.R16F),G===r.UNSIGNED_BYTE&&(ne=r.R8),G===r.UNSIGNED_SHORT&&De&&(ne=De.R16_EXT),G===r.SHORT&&De&&(ne=De.R16_SNORM_EXT)),x===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.R8UI),G===r.UNSIGNED_SHORT&&(ne=r.R16UI),G===r.UNSIGNED_INT&&(ne=r.R32UI),G===r.BYTE&&(ne=r.R8I),G===r.SHORT&&(ne=r.R16I),G===r.INT&&(ne=r.R32I)),x===r.RG&&(G===r.FLOAT&&(ne=r.RG32F),G===r.HALF_FLOAT&&(ne=r.RG16F),G===r.UNSIGNED_BYTE&&(ne=r.RG8),G===r.UNSIGNED_SHORT&&De&&(ne=De.RG16_EXT),G===r.SHORT&&De&&(ne=De.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.RG8UI),G===r.UNSIGNED_SHORT&&(ne=r.RG16UI),G===r.UNSIGNED_INT&&(ne=r.RG32UI),G===r.BYTE&&(ne=r.RG8I),G===r.SHORT&&(ne=r.RG16I),G===r.INT&&(ne=r.RG32I)),x===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),G===r.UNSIGNED_INT&&(ne=r.RGB32UI),G===r.BYTE&&(ne=r.RGB8I),G===r.SHORT&&(ne=r.RGB16I),G===r.INT&&(ne=r.RGB32I)),x===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),G===r.UNSIGNED_INT&&(ne=r.RGBA32UI),G===r.BYTE&&(ne=r.RGBA8I),G===r.SHORT&&(ne=r.RGBA16I),G===r.INT&&(ne=r.RGBA32I)),x===r.RGB&&(G===r.UNSIGNED_SHORT&&De&&(ne=De.RGB16_EXT),G===r.SHORT&&De&&(ne=De.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),x===r.RGBA){const le=_e?fu:Ft.getTransfer(ae);G===r.FLOAT&&(ne=r.RGBA32F),G===r.HALF_FLOAT&&(ne=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ne=le===Jt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&De&&(ne=De.RGBA16_EXT),G===r.SHORT&&De&&(ne=De.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function W(R,x){let G;return R?x===null||x===oa||x===pl?G=r.DEPTH24_STENCIL8:x===ia?G=r.DEPTH32F_STENCIL8:x===hl&&(G=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===oa||x===pl?G=r.DEPTH_COMPONENT24:x===ia?G=r.DEPTH_COMPONENT32F:x===hl&&(G=r.DEPTH_COMPONENT16),G}function z(R,x){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wn&&R.minFilter!==Qn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function k(R){const x=R.target;x.removeEventListener("dispose",k),B(x),x.isVideoTexture&&y.delete(x),x.isHTMLTexture&&b.delete(x)}function T(R){const x=R.target;x.removeEventListener("dispose",T),V(x)}function B(R){const x=s.get(R);if(x.__webglInit===void 0)return;const G=R.source,q=M.get(G);if(q){const ae=q[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&Q(R),Object.keys(q).length===0&&M.delete(G)}s.remove(R)}function Q(R){const x=s.get(R);r.deleteTexture(x.__webglTexture);const G=R.source,q=M.get(G);delete q[x.__cacheKey],d.memory.textures--}function V(R){const x=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let ae=0;ae<x.__webglFramebuffer[q].length;ae++)r.deleteFramebuffer(x.__webglFramebuffer[q][ae]);else r.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)r.deleteFramebuffer(x.__webglFramebuffer[q]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=R.textures;for(let q=0,ae=G.length;q<ae;q++){const _e=s.get(G[q]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),d.memory.textures--),s.remove(G[q])}s.remove(R)}let J=0;function me(){J=0}function te(){return J}function H(R){J=R}function E(){const R=J;return R>=l.maxTextures&&ht("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),J+=1,R}function L(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function I(R,x){const G=s.get(R);if(R.isVideoTexture&&tt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const q=R.image;if(q===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(G,R,x);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+x)}function fe(R,x){const G=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Re(G,R,x);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+x)}function de(R,x){const G=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){Re(G,R,x);return}i.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+x)}function U(R,x){const G=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Ze(G,R,x);return}i.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+x)}const Z={[Th]:r.REPEAT,[Oa]:r.CLAMP_TO_EDGE,[Ah]:r.MIRRORED_REPEAT},be={[Wn]:r.NEAREST,[u1]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[Pd]:r.LINEAR_MIPMAP_NEAREST,[Js]:r.LINEAR_MIPMAP_LINEAR},Ce={[h1]:r.NEVER,[_1]:r.ALWAYS,[p1]:r.LESS,[xp]:r.LEQUAL,[m1]:r.EQUAL,[_p]:r.GEQUAL,[g1]:r.GREATER,[x1]:r.NOTEQUAL};function Te(R,x){if(x.type===ia&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qn||x.magFilter===Pd||x.magFilter===wc||x.magFilter===Js||x.minFilter===Qn||x.minFilter===Pd||x.minFilter===wc||x.minFilter===Js)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,Z[x.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,Z[x.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,Z[x.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,be[x.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,be[x.minFilter]),x.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Wn||x.minFilter!==wc&&x.minFilter!==Js||x.type===ia&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||s.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,l.getMaxAnisotropy())),s.get(x).__currentAnisotropy=x.anisotropy}}}function se(R,x){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",k));const q=x.source;let ae=M.get(q);ae===void 0&&(ae={},M.set(q,ae));const _e=L(x);if(_e!==R.__cacheKey){ae[_e]===void 0&&(ae[_e]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,G=!0),ae[_e].usedTimes++;const De=ae[R.__cacheKey];De!==void 0&&(ae[R.__cacheKey].usedTimes--,De.usedTimes===0&&Q(x)),R.__cacheKey=_e,R.__webglTexture=ae[_e].texture}return G}function xe(R,x,G){return Math.floor(Math.floor(R/G)/x)}function Ee(R,x,G,q){const _e=R.updateRanges;if(_e.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,G,q,x.data);else{_e.sort((Fe,ze)=>Fe.start-ze.start);let De=0;for(let Fe=1;Fe<_e.length;Fe++){const ze=_e[De],Oe=_e[Fe],dt=ze.start+ze.count,ct=xe(Oe.start,x.width,4),vt=xe(ze.start,x.width,4);Oe.start<=dt+1&&ct===vt&&xe(Oe.start+Oe.count-1,x.width,4)===ct?ze.count=Math.max(ze.count,Oe.start+Oe.count-ze.start):(++De,_e[De]=Oe)}_e.length=De+1;const ne=i.getParameter(r.UNPACK_ROW_LENGTH),le=i.getParameter(r.UNPACK_SKIP_PIXELS),Ue=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Fe=0,ze=_e.length;Fe<ze;Fe++){const Oe=_e[Fe],dt=Math.floor(Oe.start/4),ct=Math.ceil(Oe.count/4),vt=dt%x.width,Y=Math.floor(dt/x.width),Le=ct,ve=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(r.UNPACK_SKIP_ROWS,Y),i.texSubImage2D(r.TEXTURE_2D,0,vt,Y,Le,ve,G,q,x.data)}R.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ne),i.pixelStorei(r.UNPACK_SKIP_PIXELS,le),i.pixelStorei(r.UNPACK_SKIP_ROWS,Ue)}}function Re(R,x,G){let q=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=r.TEXTURE_3D);const ae=se(R,x),_e=x.source;i.bindTexture(q,R.__webglTexture,r.TEXTURE0+G);const De=s.get(_e);if(_e.version!==De.__version||ae===!0){if(i.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ve=Ft.getPrimaries(Ft.workingColorSpace),Ie=x.colorSpace===ys?null:Ft.getPrimaries(x.colorSpace),Pe=x.colorSpace===ys||ve===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}i.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let le=S(x.image,!1,l.maxTextureSize);le=Se(x,le);const Ue=c.convert(x.format,x.colorSpace),Fe=c.convert(x.type);let ze=F(x.internalFormat,Ue,Fe,x.normalized,x.colorSpace,x.isVideoTexture);Te(q,x);let Oe;const dt=x.mipmaps,ct=x.isVideoTexture!==!0,vt=De.__version===void 0||ae===!0,Y=_e.dataReady,Le=z(x,le);if(x.isDepthTexture)ze=W(x.format===$s,x.type),vt&&(ct?i.texStorage2D(r.TEXTURE_2D,1,ze,le.width,le.height):i.texImage2D(r.TEXTURE_2D,0,ze,le.width,le.height,0,Ue,Fe,null));else if(x.isDataTexture)if(dt.length>0){ct&&vt&&i.texStorage2D(r.TEXTURE_2D,Le,ze,dt[0].width,dt[0].height);for(let ve=0,Ie=dt.length;ve<Ie;ve++)Oe=dt[ve],ct?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Oe.width,Oe.height,Ue,Fe,Oe.data):i.texImage2D(r.TEXTURE_2D,ve,ze,Oe.width,Oe.height,0,Ue,Fe,Oe.data);x.generateMipmaps=!1}else ct?(vt&&i.texStorage2D(r.TEXTURE_2D,Le,ze,le.width,le.height),Y&&Ee(x,le,Ue,Fe)):i.texImage2D(r.TEXTURE_2D,0,ze,le.width,le.height,0,Ue,Fe,le.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ct&&vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ze,dt[0].width,dt[0].height,le.depth);for(let ve=0,Ie=dt.length;ve<Ie;ve++)if(Oe=dt[ve],x.format!==Xi)if(Ue!==null)if(ct){if(Y)if(x.layerUpdates.size>0){const Pe=c_(Oe.width,Oe.height,x.format,x.type);for(const Ne of x.layerUpdates){const Ke=Oe.data.subarray(Ne*Pe/Oe.data.BYTES_PER_ELEMENT,(Ne+1)*Pe/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Ne,Oe.width,Oe.height,1,Ue,Ke)}x.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Oe.width,Oe.height,le.depth,Ue,Oe.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,ze,Oe.width,Oe.height,le.depth,0,Oe.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Y&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,Oe.width,Oe.height,le.depth,Ue,Fe,Oe.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ve,ze,Oe.width,Oe.height,le.depth,0,Ue,Fe,Oe.data)}else{ct&&vt&&i.texStorage2D(r.TEXTURE_2D,Le,ze,dt[0].width,dt[0].height);for(let ve=0,Ie=dt.length;ve<Ie;ve++)Oe=dt[ve],x.format!==Xi?Ue!==null?ct?Y&&i.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,Oe.width,Oe.height,Ue,Oe.data):i.compressedTexImage2D(r.TEXTURE_2D,ve,ze,Oe.width,Oe.height,0,Oe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Oe.width,Oe.height,Ue,Fe,Oe.data):i.texImage2D(r.TEXTURE_2D,ve,ze,Oe.width,Oe.height,0,Ue,Fe,Oe.data)}else if(x.isDataArrayTexture)if(ct){if(vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ze,le.width,le.height,le.depth),Y)if(x.layerUpdates.size>0){const ve=c_(le.width,le.height,x.format,x.type);for(const Ie of x.layerUpdates){const Pe=le.data.subarray(Ie*ve/le.data.BYTES_PER_ELEMENT,(Ie+1)*ve/le.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ie,le.width,le.height,1,Ue,Fe,Pe)}x.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,Ue,Fe,le.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,le.width,le.height,le.depth,0,Ue,Fe,le.data);else if(x.isData3DTexture)ct?(vt&&i.texStorage3D(r.TEXTURE_3D,Le,ze,le.width,le.height,le.depth),Y&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,Ue,Fe,le.data)):i.texImage3D(r.TEXTURE_3D,0,ze,le.width,le.height,le.depth,0,Ue,Fe,le.data);else if(x.isFramebufferTexture){if(vt)if(ct)i.texStorage2D(r.TEXTURE_2D,Le,ze,le.width,le.height);else{let ve=le.width,Ie=le.height;for(let Pe=0;Pe<Le;Pe++)i.texImage2D(r.TEXTURE_2D,Pe,ze,ve,Ie,0,Ue,Fe,null),ve>>=1,Ie>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),le.parentNode!==ve){ve.appendChild(le),b.add(x),ve.onpaint=ut=>{const It=ut.changedElements;for(const Rt of b)It.includes(Rt.image)&&(Rt.needsUpdate=!0)},ve.requestPaint();return}const Ie=0,Pe=r.RGBA,Ne=r.RGBA,Ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,Ie,Pe,Ne,Ke,le),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(dt.length>0){if(ct&&vt){const ve=Ae(dt[0]);i.texStorage2D(r.TEXTURE_2D,Le,ze,ve.width,ve.height)}for(let ve=0,Ie=dt.length;ve<Ie;ve++)Oe=dt[ve],ct?Y&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Ue,Fe,Oe):i.texImage2D(r.TEXTURE_2D,ve,ze,Ue,Fe,Oe);x.generateMipmaps=!1}else if(ct){if(vt){const ve=Ae(le);i.texStorage2D(r.TEXTURE_2D,Le,ze,ve.width,ve.height)}Y&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,Fe,le)}else i.texImage2D(r.TEXTURE_2D,0,ze,Ue,Fe,le);_(x)&&N(q),De.__version=_e.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Ze(R,x,G){if(x.image.length!==6)return;const q=se(R,x),ae=x.source;i.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const _e=s.get(ae);if(ae.version!==_e.__version||q===!0){i.activeTexture(r.TEXTURE0+G);const De=Ft.getPrimaries(Ft.workingColorSpace),ne=x.colorSpace===ys?null:Ft.getPrimaries(x.colorSpace),le=x.colorSpace===ys||De===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,Fe=x.image[0]&&x.image[0].isDataTexture,ze=[];for(let Ne=0;Ne<6;Ne++)!Ue&&!Fe?ze[Ne]=S(x.image[Ne],!0,l.maxCubemapSize):ze[Ne]=Fe?x.image[Ne].image:x.image[Ne],ze[Ne]=Se(x,ze[Ne]);const Oe=ze[0],dt=c.convert(x.format,x.colorSpace),ct=c.convert(x.type),vt=F(x.internalFormat,dt,ct,x.normalized,x.colorSpace),Y=x.isVideoTexture!==!0,Le=_e.__version===void 0||q===!0,ve=ae.dataReady;let Ie=z(x,Oe);Te(r.TEXTURE_CUBE_MAP,x);let Pe;if(Ue){Y&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,vt,Oe.width,Oe.height);for(let Ne=0;Ne<6;Ne++){Pe=ze[Ne].mipmaps;for(let Ke=0;Ke<Pe.length;Ke++){const ut=Pe[Ke];x.format!==Xi?dt!==null?Y?ve&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke,0,0,ut.width,ut.height,dt,ut.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke,vt,ut.width,ut.height,0,ut.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke,0,0,ut.width,ut.height,dt,ct,ut.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke,vt,ut.width,ut.height,0,dt,ct,ut.data)}}}else{if(Pe=x.mipmaps,Y&&Le){Pe.length>0&&Ie++;const Ne=Ae(ze[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,vt,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(Fe){Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ze[Ne].width,ze[Ne].height,dt,ct,ze[Ne].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,vt,ze[Ne].width,ze[Ne].height,0,dt,ct,ze[Ne].data);for(let Ke=0;Ke<Pe.length;Ke++){const It=Pe[Ke].image[Ne].image;Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke+1,0,0,It.width,It.height,dt,ct,It.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke+1,vt,It.width,It.height,0,dt,ct,It.data)}}else{Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,dt,ct,ze[Ne]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,vt,dt,ct,ze[Ne]);for(let Ke=0;Ke<Pe.length;Ke++){const ut=Pe[Ke];Y?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke+1,0,0,dt,ct,ut.image[Ne]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke+1,vt,dt,ct,ut.image[Ne])}}}_(x)&&N(r.TEXTURE_CUBE_MAP),_e.__version=ae.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ke(R,x,G,q,ae,_e){const De=c.convert(G.format,G.colorSpace),ne=c.convert(G.type),le=F(G.internalFormat,De,ne,G.normalized,G.colorSpace),Ue=s.get(x),Fe=s.get(G);if(Fe.__renderTarget=x,!Ue.__hasExternalTextures){const ze=Math.max(1,x.width>>_e),Oe=Math.max(1,x.height>>_e);ae===r.TEXTURE_3D||ae===r.TEXTURE_2D_ARRAY?i.texImage3D(ae,_e,le,ze,Oe,x.depth,0,De,ne,null):i.texImage2D(ae,_e,le,ze,Oe,0,De,ne,null)}i.bindFramebuffer(r.FRAMEBUFFER,R),Xe(x)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,ae,Fe.__webglTexture,0,lt(x)):(ae===r.TEXTURE_2D||ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,ae,Fe.__webglTexture,_e),i.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(R,x,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),x.depthBuffer){const q=x.depthTexture,ae=q&&q.isDepthTexture?q.type:null,_e=W(x.stencilBuffer,ae),De=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Xe(x)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt(x),_e,x.width,x.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt(x),_e,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,_e,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,De,r.RENDERBUFFER,R)}else{const q=x.textures;for(let ae=0;ae<q.length;ae++){const _e=q[ae],De=c.convert(_e.format,_e.colorSpace),ne=c.convert(_e.type),le=F(_e.internalFormat,De,ne,_e.normalized,_e.colorSpace);Xe(x)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,lt(x),le,x.width,x.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,lt(x),le,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,le,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(R,x,G){const q=x.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=s.get(x.depthTexture);if(ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,x.depthTexture.addEventListener("dispose",k)),ae.__webglTexture===void 0){ae.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Te(r.TEXTURE_CUBE_MAP,x.depthTexture);const Ue=c.convert(x.depthTexture.format),Fe=c.convert(x.depthTexture.type);let ze;x.depthTexture.format===Fa?ze=r.DEPTH_COMPONENT24:x.depthTexture.format===$s&&(ze=r.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,ze,x.width,x.height,0,Ue,Fe,null)}}else I(x.depthTexture,0);const _e=ae.__webglTexture,De=lt(x),ne=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,le=x.depthTexture.format===$s?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===Fa)Xe(x)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ne,_e,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,le,ne,_e,0);else if(x.depthTexture.format===$s)Xe(x)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,le,ne,_e,0,De):r.framebufferTexture2D(r.FRAMEBUFFER,le,ne,_e,0);else throw new Error("Unknown depthTexture format")}function xt(R){const x=s.get(R),G=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",ae)};q.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=q}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(G)for(let q=0;q<6;q++)mt(x.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?mt(x.__webglFramebuffer[0],R,0):mt(x.__webglFramebuffer,R,0)}else if(G){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(i.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=r.createRenderbuffer(),yt(x.__webglDepthbuffer[q],R,!1);else{const ae=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=x.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,_e)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?i.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),yt(x.__webglDepthbuffer,R,!1);else{const ae=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,_e),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,_e)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(R,x,G){const q=s.get(R);x!==void 0&&ke(q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&xt(R)}function qe(R){const x=R.texture,G=s.get(R),q=s.get(x);R.addEventListener("dispose",T);const ae=R.textures,_e=R.isWebGLCubeRenderTarget===!0,De=ae.length>1;if(De||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=x.version,d.memory.textures++),_e){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let le=0;le<x.mipmaps.length;le++)G.__webglFramebuffer[ne][le]=r.createFramebuffer()}else G.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<x.mipmaps.length;ne++)G.__webglFramebuffer[ne]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(De)for(let ne=0,le=ae.length;ne<le;ne++){const Ue=s.get(ae[ne]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=r.createTexture(),d.memory.textures++)}if(R.samples>0&&Xe(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<ae.length;ne++){const le=ae[ne];G.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);const Ue=c.convert(le.format,le.colorSpace),Fe=c.convert(le.type),ze=F(le.internalFormat,Ue,Fe,le.normalized,le.colorSpace,R.isXRRenderTarget===!0),Oe=lt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Oe,ze,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),yt(G.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_e){i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Te(r.TEXTURE_CUBE_MAP,x);for(let ne=0;ne<6;ne++)if(x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)ke(G.__webglFramebuffer[ne][le],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,le);else ke(G.__webglFramebuffer[ne],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);_(x)&&N(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(De){for(let ne=0,le=ae.length;ne<le;ne++){const Ue=ae[ne],Fe=s.get(Ue);let ze=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ze=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ze,Fe.__webglTexture),Te(ze,Ue),ke(G.__webglFramebuffer,R,Ue,r.COLOR_ATTACHMENT0+ne,ze,0),_(Ue)&&N(ze)}i.unbindTexture()}else{let ne=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ne,q.__webglTexture),Te(ne,x),x.mipmaps&&x.mipmaps.length>0)for(let le=0;le<x.mipmaps.length;le++)ke(G.__webglFramebuffer[le],R,x,r.COLOR_ATTACHMENT0,ne,le);else ke(G.__webglFramebuffer,R,x,r.COLOR_ATTACHMENT0,ne,0);_(x)&&N(ne),i.unbindTexture()}R.depthBuffer&&xt(R)}function at(R){const x=R.textures;for(let G=0,q=x.length;G<q;G++){const ae=x[G];if(_(ae)){const _e=P(R),De=s.get(ae).__webglTexture;i.bindTexture(_e,De),N(_e),i.unbindTexture()}}}const it=[],Tt=[];function j(R){if(R.samples>0){if(Xe(R)===!1){const x=R.textures,G=R.width,q=R.height;let ae=r.COLOR_BUFFER_BIT;const _e=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,De=s.get(R),ne=x.length>1;if(ne)for(let Ue=0;Ue<x.length;Ue++)i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const le=R.texture.mipmaps;le&&le.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);const Fe=s.get(x[Ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,G,q,0,0,G,q,ae,r.NEAREST),m===!0&&(it.length=0,Tt.length=0,it.push(r.COLOR_ATTACHMENT0+Ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(_e),Tt.push(_e),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Tt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let Ue=0;Ue<x.length;Ue++){i.bindFramebuffer(r.FRAMEBUFFER,De.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);const Fe=s.get(x[Ue]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,De.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,Fe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&m){const x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function lt(R){return Math.min(l.maxSamples,R.samples)}function Xe(R){const x=s.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function tt(R){const x=d.render.frame;y.get(R)!==x&&(y.set(R,x),R.update())}function Se(R,x){const G=R.colorSpace,q=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==uu&&G!==ys&&(Ft.getTransfer(G)===Jt?(q!==Xi||ae!==Ti)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",G)),x}function Ae(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=E,this.resetTextureUnits=me,this.getTextureUnits=te,this.setTextureUnits=H,this.setTexture2D=I,this.setTexture2DArray=fe,this.setTexture3D=de,this.setTextureCube=U,this.rebindTextures=Be,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function aw(r,e){function i(s,l=ys){let c;const d=Ft.getTransfer(l);if(s===Ti)return r.UNSIGNED_BYTE;if(s===dp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===hp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===nv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===iv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ev)return r.BYTE;if(s===tv)return r.SHORT;if(s===hl)return r.UNSIGNED_SHORT;if(s===fp)return r.INT;if(s===oa)return r.UNSIGNED_INT;if(s===ia)return r.FLOAT;if(s===za)return r.HALF_FLOAT;if(s===av)return r.ALPHA;if(s===sv)return r.RGB;if(s===Xi)return r.RGBA;if(s===Fa)return r.DEPTH_COMPONENT;if(s===$s)return r.DEPTH_STENCIL;if(s===rv)return r.RED;if(s===pp)return r.RED_INTEGER;if(s===tr)return r.RG;if(s===mp)return r.RG_INTEGER;if(s===gp)return r.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(d===Jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wh||s===Rh||s===Ch||s===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh||s===Uh||s===Lh||s===Oh||s===Ph||s===lu||s===Ih)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nh||s===Uh)return d===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Lh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Oh)return c.COMPRESSED_R11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_R11_EAC;if(s===lu)return c.COMPRESSED_RG11_EAC;if(s===Ih)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===zh||s===Fh||s===Bh||s===Gh||s===Hh||s===kh||s===Vh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===zh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Fh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Gh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===kh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Yh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Kh)return d===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qh||s===Jh||s===$h)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Qh)return d===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$h)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ep||s===tp||s===cu||s===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===ep)return c.COMPRESSED_RED_RGTC1_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const sw=`
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

}`;class ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new xv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new la({vertexShader:sw,fragmentShader:rw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new We(new La(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lw extends ws{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,y=null,b=null,g=null,M=null,A=null;const O=typeof XRWebGLBinding<"u",S=new ow,_={},N=i.getContextAttributes();let P=null,F=null;const W=[],z=[],k=new ft;let T=null;const B=new Ei;B.viewport=new vn;const Q=new Ei;Q.viewport=new vn;const V=[B,Q],J=new mM;let me=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=W[se];return xe===void 0&&(xe=new kd,W[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=W[se];return xe===void 0&&(xe=new kd,W[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=W[se];return xe===void 0&&(xe=new kd,W[se]=xe),xe.getHandSpace()};function H(se){const xe=z.indexOf(se.inputSource);if(xe===-1)return;const Ee=W[xe];Ee!==void 0&&(Ee.update(se.inputSource,se.frame,h||d),Ee.dispatchEvent({type:se.type,data:se.inputSource}))}function E(){l.removeEventListener("select",H),l.removeEventListener("selectstart",H),l.removeEventListener("selectend",H),l.removeEventListener("squeeze",H),l.removeEventListener("squeezestart",H),l.removeEventListener("squeezeend",H),l.removeEventListener("end",E),l.removeEventListener("inputsourceschange",L);for(let se=0;se<W.length;se++){const xe=z[se];xe!==null&&(z[se]=null,W[se].disconnect(xe))}me=null,te=null,S.reset();for(const se in _)delete _[se];e.setRenderTarget(P),M=null,g=null,b=null,l=null,F=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,s.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return b===null&&O&&(b=new XRWebGLBinding(l,i)),b},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",H),l.addEventListener("selectstart",H),l.addEventListener("selectend",H),l.addEventListener("squeeze",H),l.addEventListener("squeezestart",H),l.addEventListener("squeezeend",H),l.addEventListener("end",E),l.addEventListener("inputsourceschange",L),N.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Re=null,Ze=null;N.depth&&(Ze=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=N.stencil?$s:Fa,Re=N.stencil?pl:oa);const ke={colorFormat:i.RGBA8,depthFormat:Ze,scaleFactor:c};b=this.getBinding(),g=b.createProjectionLayer(ke),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),F=new ra(g.textureWidth,g.textureHeight,{format:Xi,type:Ti,depthTexture:new ro(g.textureWidth,g.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Ee={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new ra(M.framebufferWidth,M.framebufferHeight,{format:Xi,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Te.setContext(l),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function L(se){for(let xe=0;xe<se.removed.length;xe++){const Ee=se.removed[xe],Re=z.indexOf(Ee);Re>=0&&(z[Re]=null,W[Re].disconnect(Ee))}for(let xe=0;xe<se.added.length;xe++){const Ee=se.added[xe];let Re=z.indexOf(Ee);if(Re===-1){for(let ke=0;ke<W.length;ke++)if(ke>=z.length){z.push(Ee),Re=ke;break}else if(z[ke]===null){z[ke]=Ee,Re=ke;break}if(Re===-1)break}const Ze=W[Re];Ze&&Ze.connect(Ee)}}const I=new $,fe=new $;function de(se,xe,Ee){I.setFromMatrixPosition(xe.matrixWorld),fe.setFromMatrixPosition(Ee.matrixWorld);const Re=I.distanceTo(fe),Ze=xe.projectionMatrix.elements,ke=Ee.projectionMatrix.elements,yt=Ze[14]/(Ze[10]-1),mt=Ze[14]/(Ze[10]+1),xt=(Ze[9]+1)/Ze[5],Be=(Ze[9]-1)/Ze[5],qe=(Ze[8]-1)/Ze[0],at=(ke[8]+1)/ke[0],it=yt*qe,Tt=yt*at,j=Re/(-qe+at),lt=j*-qe;if(xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(lt),se.translateZ(j),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ze[10]===-1)se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Xe=yt+j,tt=mt+j,Se=it-lt,Ae=Tt+(Re-lt),R=xt*mt/tt*Xe,x=Be*mt/tt*Xe;se.projectionMatrix.makePerspective(Se,Ae,R,x,Xe,tt),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let xe=se.near,Ee=se.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(Ee=S.depthFar)),J.near=Q.near=B.near=xe,J.far=Q.far=B.far=Ee,(me!==J.near||te!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),me=J.near,te=J.far),J.layers.mask=se.layers.mask|6,B.layers.mask=J.layers.mask&-5,Q.layers.mask=J.layers.mask&-3;const Re=se.parent,Ze=J.cameras;U(J,Re);for(let ke=0;ke<Ze.length;ke++)U(Ze[ke],Re);Ze.length===2?de(J,B,Q):J.projectionMatrix.copy(B.projectionMatrix),Z(se,J,Re)};function Z(se,xe,Ee){Ee===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(Ee.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=rp*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(se){return _[se]};let be=null;function Ce(se,xe){if(y=xe.getViewerPose(h||d),A=xe,y!==null){const Ee=y.views;M!==null&&(e.setRenderTargetFramebuffer(F,M.framebuffer),e.setRenderTarget(F));let Re=!1;Ee.length!==J.cameras.length&&(J.cameras.length=0,Re=!0);for(let mt=0;mt<Ee.length;mt++){const xt=Ee[mt];let Be=null;if(M!==null)Be=M.getViewport(xt);else{const at=b.getViewSubImage(g,xt);Be=at.viewport,mt===0&&(e.setRenderTargetTextures(F,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(F))}let qe=V[mt];qe===void 0&&(qe=new Ei,qe.layers.enable(mt),qe.viewport=new vn,V[mt]=qe),qe.matrix.fromArray(xt.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(xt.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Be.x,Be.y,Be.width,Be.height),mt===0&&(J.matrix.copy(qe.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Re===!0&&J.cameras.push(qe)}const Ze=l.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&O){b=s.getBinding();const mt=b.getDepthInformation(Ee[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,l.renderState)}if(Ze&&Ze.includes("camera-access")&&O){e.state.unbindTexture(),b=s.getBinding();for(let mt=0;mt<Ee.length;mt++){const xt=Ee[mt].camera;if(xt){let Be=_[xt];Be||(Be=new xv,_[xt]=Be);const qe=b.getCameraImage(xt);Be.sourceTexture=qe}}}}for(let Ee=0;Ee<W.length;Ee++){const Re=z[Ee],Ze=W[Ee];Re!==null&&Ze!==void 0&&Ze.update(Re,xe,h||d)}be&&be(se,xe),xe.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xe}),A=null}const Te=new yv;Te.setAnimationLoop(Ce),this.setAnimationLoop=function(se){be=se},this.dispose=function(){}}}const cw=new pn,Rv=new bt;Rv.set(-1,0,0,0,1,0,0,0,1);function uw(r,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,_v(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,N,P,F){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),b(S,_)):_.isMeshPhongMaterial?(c(S,_),y(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),g(S,_),_.isMeshPhysicalMaterial&&M(S,_,F)):_.isMeshMatcapMaterial?(c(S,_),A(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),O(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&p(S,_)):_.isPointsMaterial?m(S,_,N,P):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===fi&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===fi&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),P=N.envMap,F=N.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(cw.makeRotationFromEuler(F)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Rv),S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function p(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,N,P){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=P*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function y(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function b(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===fi&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function A(S,_){_.matcap&&(S.matcap.value=_.matcap)}function O(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function fw(r,e,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,P){const F=P.program;s.uniformBlockBinding(N,F)}function h(N,P){let F=l[N.id];F===void 0&&(A(N),F=y(N),l[N.id]=F,N.addEventListener("dispose",S));const W=P.program;s.updateUBOMapping(N,W);const z=e.render.frame;c[N.id]!==z&&(g(N),c[N.id]=z)}function y(N){const P=b();N.__bindingPointIndex=P;const F=r.createBuffer(),W=N.__size,z=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,F),r.bufferData(r.UNIFORM_BUFFER,W,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,P,F),F}function b(){for(let N=0;N<p;N++)if(d.indexOf(N)===-1)return d.push(N),N;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const P=l[N.id],F=N.uniforms,W=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,P);for(let z=0,k=F.length;z<k;z++){const T=Array.isArray(F[z])?F[z]:[F[z]];for(let B=0,Q=T.length;B<Q;B++){const V=T[B];if(M(V,z,B,W)===!0){const J=V.__offset,me=Array.isArray(V.value)?V.value:[V.value];let te=0;for(let H=0;H<me.length;H++){const E=me[H],L=O(E);typeof E=="number"||typeof E=="boolean"?(V.__data[0]=E,r.bufferSubData(r.UNIFORM_BUFFER,J+te,V.__data)):E.isMatrix3?(V.__data[0]=E.elements[0],V.__data[1]=E.elements[1],V.__data[2]=E.elements[2],V.__data[3]=0,V.__data[4]=E.elements[3],V.__data[5]=E.elements[4],V.__data[6]=E.elements[5],V.__data[7]=0,V.__data[8]=E.elements[6],V.__data[9]=E.elements[7],V.__data[10]=E.elements[8],V.__data[11]=0):ArrayBuffer.isView(E)?V.__data.set(new E.constructor(E.buffer,E.byteOffset,V.__data.length)):(E.toArray(V.__data,te),te+=L.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,P,F,W){const z=N.value,k=P+"_"+F;if(W[k]===void 0)return typeof z=="number"||typeof z=="boolean"?W[k]=z:ArrayBuffer.isView(z)?W[k]=z.slice():W[k]=z.clone(),!0;{const T=W[k];if(typeof z=="number"||typeof z=="boolean"){if(T!==z)return W[k]=z,!0}else{if(ArrayBuffer.isView(z))return!0;if(T.equals(z)===!1)return T.copy(z),!0}}return!1}function A(N){const P=N.uniforms;let F=0;const W=16;for(let k=0,T=P.length;k<T;k++){const B=Array.isArray(P[k])?P[k]:[P[k]];for(let Q=0,V=B.length;Q<V;Q++){const J=B[Q],me=Array.isArray(J.value)?J.value:[J.value];for(let te=0,H=me.length;te<H;te++){const E=me[te],L=O(E),I=F%W,fe=I%L.boundary,de=I+fe;F+=fe,de!==0&&W-de<L.storage&&(F+=W-de),J.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=F,F+=L.storage}}}const z=F%W;return z>0&&(F+=W-z),N.__size=F,N.__cache={},this}function O(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(N)?(P.boundary=16,P.storage=N.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",N),P}function S(N){const P=N.target;P.removeEventListener("dispose",S);const F=d.indexOf(P.__bindingPointIndex);d.splice(F,1),r.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function _(){for(const N in l)r.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:h,dispose:_}}const dw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $i=null;function hw(){return $i===null&&($i=new W1(dw,16,16,tr,za),$i.name="DFG_LUT",$i.minFilter=Qn,$i.magFilter=Qn,$i.wrapS=Oa,$i.wrapT=Oa,$i.generateMipmaps=!1,$i.needsUpdate=!0),$i}class pw{constructor(e={}){const{canvas:i=b1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:b=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Ti}=e;this.isWebGLRenderer=!0;let A;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=s.getContextAttributes().alpha}else A=d;const O=M,S=new Set([gp,mp,pp]),_=new Set([Ti,oa,hl,pl,dp,hp]),N=new Uint32Array(4),P=new Int32Array(4),F=new $;let W=null,z=null;const k=[],T=[];let B=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Q=this;let V=!1,J=null;this._outputColorSpace=Pi;let me=0,te=0,H=null,E=-1,L=null;const I=new vn,fe=new vn;let de=null;const U=new Pt(0);let Z=0,be=i.width,Ce=i.height,Te=1,se=null,xe=null;const Ee=new vn(0,0,be,Ce),Re=new vn(0,0,be,Ce);let Ze=!1;const ke=new Sp;let yt=!1,mt=!1;const xt=new pn,Be=new $,qe=new vn,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let it=!1;function Tt(){return H===null?Te:1}let j=s;function lt(C,ee){return i.getContext(C,ee)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:y,failIfMajorPerformanceCaveat:b};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${up}`),i.addEventListener("webglcontextlost",Ne,!1),i.addEventListener("webglcontextrestored",Ke,!1),i.addEventListener("webglcontextcreationerror",ut,!1),j===null){const ee="webgl2";if(j=lt(ee,C),j===null)throw lt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Bt("WebGLRenderer: "+C.message),C}let Xe,tt,Se,Ae,R,x,G,q,ae,_e,De,ne,le,Ue,Fe,ze,Oe,dt,ct,vt,Y,Le,ve;function Ie(){Xe=new hA(j),Xe.init(),Y=new aw(j,Xe),tt=new sA(j,Xe,e,Y),Se=new nw(j,Xe),tt.reversedDepthBuffer&&g&&Se.buffers.depth.setReversed(!0),Ae=new gA(j),R=new k2,x=new iw(j,Xe,Se,R,tt,Y,Ae),G=new dA(Q),q=new bM(j),Le=new iA(j,q),ae=new pA(j,q,Ae,Le),_e=new _A(j,ae,q,Le,Ae),dt=new xA(j,tt,x),Fe=new rA(R),De=new H2(Q,G,Xe,tt,Le,Fe),ne=new uw(Q,R),le=new j2,Ue=new K2(Xe),Oe=new nA(Q,G,Se,_e,A,m),ze=new tw(Q,_e,tt),ve=new fw(j,Ae,tt,Se),ct=new aA(j,Xe,Ae),vt=new mA(j,Xe,Ae),Ae.programs=De.programs,Q.capabilities=tt,Q.extensions=Xe,Q.properties=R,Q.renderLists=le,Q.shadowMap=ze,Q.state=Se,Q.info=Ae}Ie(),O!==Ti&&(B=new bA(O,i.width,i.height,l,c));const Pe=new lw(Q,j);this.xr=Pe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(C){C!==void 0&&(Te=C,this.setSize(be,Ce,!1))},this.getSize=function(C){return C.set(be,Ce)},this.setSize=function(C,ee,he=!0){if(Pe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}be=C,Ce=ee,i.width=Math.floor(C*Te),i.height=Math.floor(ee*Te),he===!0&&(i.style.width=C+"px",i.style.height=ee+"px"),B!==null&&B.setSize(i.width,i.height),this.setViewport(0,0,C,ee)},this.getDrawingBufferSize=function(C){return C.set(be*Te,Ce*Te).floor()},this.setDrawingBufferSize=function(C,ee,he){be=C,Ce=ee,Te=he,i.width=Math.floor(C*he),i.height=Math.floor(ee*he),this.setViewport(0,0,C,ee)},this.setEffects=function(C){if(O===Ti){Bt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let ee=0;ee<C.length;ee++)if(C[ee].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(I)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,ee,he,ce){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,ee,he,ce),Se.viewport(I.copy(Ee).multiplyScalar(Te).round())},this.getScissor=function(C){return C.copy(Re)},this.setScissor=function(C,ee,he,ce){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,ee,he,ce),Se.scissor(fe.copy(Re).multiplyScalar(Te).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(C){Se.setScissorTest(Ze=C)},this.setOpaqueSort=function(C){se=C},this.setTransparentSort=function(C){xe=C},this.getClearColor=function(C){return C.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(C=!0,ee=!0,he=!0){let ce=0;if(C){let ue=!1;if(H!==null){const He=H.texture.format;ue=S.has(He)}if(ue){const He=H.texture.type,Qe=_.has(He),Ge=Oe.getClearColor(),$e=Oe.getClearAlpha(),Je=Ge.r,rt=Ge.g,Mt=Ge.b;Qe?(N[0]=Je,N[1]=rt,N[2]=Mt,N[3]=$e,j.clearBufferuiv(j.COLOR,0,N)):(P[0]=Je,P[1]=rt,P[2]=Mt,P[3]=$e,j.clearBufferiv(j.COLOR,0,P))}else ce|=j.COLOR_BUFFER_BIT}ee&&(ce|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ce|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&j.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),J=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Ne,!1),i.removeEventListener("webglcontextrestored",Ke,!1),i.removeEventListener("webglcontextcreationerror",ut,!1),Oe.dispose(),le.dispose(),Ue.dispose(),R.dispose(),G.dispose(),_e.dispose(),Le.dispose(),ve.dispose(),De.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Cn),Pe.removeEventListener("sessionend",Wt),gt.stop()};function Ne(C){C.preventDefault(),hu("WebGLRenderer: Context Lost."),V=!0}function Ke(){hu("WebGLRenderer: Context Restored."),V=!1;const C=Ae.autoReset,ee=ze.enabled,he=ze.autoUpdate,ce=ze.needsUpdate,ue=ze.type;Ie(),Ae.autoReset=C,ze.enabled=ee,ze.autoUpdate=he,ze.needsUpdate=ce,ze.type=ue}function ut(C){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function It(C){const ee=C.target;ee.removeEventListener("dispose",It),Rt(ee)}function Rt(C){Vt(C),R.remove(C)}function Vt(C){const ee=R.get(C).programs;ee!==void 0&&(ee.forEach(function(he){De.releaseProgram(he)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,ee,he,ce,ue,He){ee===null&&(ee=at);const Qe=ue.isMesh&&ue.matrixWorld.determinant()<0,Ge=Ha(C,ee,he,ce,ue);Se.setMaterial(ce,Qe);let $e=he.index,Je=1;if(ce.wireframe===!0){if($e=ae.getWireframeAttribute(he),$e===void 0)return;Je=2}const rt=he.drawRange,Mt=he.attributes.position;let st=rt.start*Je,Gt=(rt.start+rt.count)*Je;He!==null&&(st=Math.max(st,He.start*Je),Gt=Math.min(Gt,(He.start+He.count)*Je)),$e!==null?(st=Math.max(st,0),Gt=Math.min(Gt,$e.count)):Mt!=null&&(st=Math.max(st,0),Gt=Math.min(Gt,Mt.count));const fn=Gt-st;if(fn<0||fn===1/0)return;Le.setup(ue,ce,Ge,he,$e);let rn,qt=ct;if($e!==null&&(rn=q.get($e),qt=vt,qt.setIndex(rn)),ue.isMesh)ce.wireframe===!0?(Se.setLineWidth(ce.wireframeLinewidth*Tt()),qt.setMode(j.LINES)):qt.setMode(j.TRIANGLES);else if(ue.isLine){let Yt=ce.linewidth;Yt===void 0&&(Yt=1),Se.setLineWidth(Yt*Tt()),ue.isLineSegments?qt.setMode(j.LINES):ue.isLineLoop?qt.setMode(j.LINE_LOOP):qt.setMode(j.LINE_STRIP)}else ue.isPoints?qt.setMode(j.POINTS):ue.isSprite&&qt.setMode(j.TRIANGLES);if(ue.isBatchedMesh)if(Xe.get("WEBGL_multi_draw"))qt.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const Yt=ue._multiDrawStarts,Ye=ue._multiDrawCounts,qn=ue._multiDrawCount,Dt=$e?q.get($e).bytesPerElement:1,Dn=R.get(ce).currentProgram.getUniforms();for(let hi=0;hi<qn;hi++)Dn.setValue(j,"_gl_DrawID",hi),qt.render(Yt[hi]/Dt,Ye[hi])}else if(ue.isInstancedMesh)qt.renderInstances(st,fn,ue.count);else if(he.isInstancedBufferGeometry){const Yt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ye=Math.min(he.instanceCount,Yt);qt.renderInstances(st,fn,Ye)}else qt.render(st,fn)};function Gn(C,ee,he){C.transparent===!0&&C.side===ta&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,ir(C,ee,he),C.side=Es,C.needsUpdate=!0,ir(C,ee,he),C.side=ta):ir(C,ee,he)}this.compile=function(C,ee,he=null){he===null&&(he=C),z=Ue.get(he),z.init(ee),T.push(z),he.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(z.pushLight(ue),ue.castShadow&&z.pushShadow(ue))}),C!==he&&C.traverseVisible(function(ue){ue.isLight&&ue.layers.test(ee.layers)&&(z.pushLight(ue),ue.castShadow&&z.pushShadow(ue))}),z.setupLights();const ce=new Set;return C.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const He=ue.material;if(He)if(Array.isArray(He))for(let Qe=0;Qe<He.length;Qe++){const Ge=He[Qe];Gn(Ge,he,ue),ce.add(Ge)}else Gn(He,he,ue),ce.add(He)}),z=T.pop(),ce},this.compileAsync=function(C,ee,he=null){const ce=this.compile(C,ee,he);return new Promise(ue=>{function He(){if(ce.forEach(function(Qe){R.get(Qe).currentProgram.isReady()&&ce.delete(Qe)}),ce.size===0){ue(C);return}setTimeout(He,10)}Xe.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let di=null;function mn(C){di&&di(C)}function Cn(){gt.stop()}function Wt(){gt.start()}const gt=new yv;gt.setAnimationLoop(mn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(C){di=C,Pe.setAnimationLoop(C),C===null?gt.stop():gt.start()},Pe.addEventListener("sessionstart",Cn),Pe.addEventListener("sessionend",Wt),this.render=function(C,ee){if(ee!==void 0&&ee.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;J!==null&&J.renderStart(C,ee);const he=Pe.enabled===!0&&Pe.isPresenting===!0,ce=B!==null&&(H===null||he)&&B.begin(Q,H);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(ee),ee=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(Q,C,ee,H),z=Ue.get(C,T.length),z.init(ee),z.state.textureUnits=x.getTextureUnits(),T.push(z),xt.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),ke.setFromProjectionMatrix(xt,aa,ee.reversedDepth),mt=this.localClippingEnabled,yt=Fe.init(this.clippingPlanes,mt),W=le.get(C,k.length),W.init(),k.push(W),Pe.enabled===!0&&Pe.isPresenting===!0){const Qe=Q.xr.getDepthSensingMesh();Qe!==null&&St(Qe,ee,-1/0,Q.sortObjects)}St(C,ee,0,Q.sortObjects),W.finish(),Q.sortObjects===!0&&W.sort(se,xe),it=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,it&&Oe.addToRenderList(W,C),this.info.render.frame++,yt===!0&&Fe.beginShadows();const ue=z.state.shadowsArray;if(ze.render(ue,C,ee),yt===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ce&&B.hasRenderPass())===!1){const Qe=W.opaque,Ge=W.transmissive;if(z.setupLights(),ee.isArrayCamera){const $e=ee.cameras;if(Ge.length>0)for(let Je=0,rt=$e.length;Je<rt;Je++){const Mt=$e[Je];ca(Qe,Ge,C,Mt)}it&&Oe.render(C);for(let Je=0,rt=$e.length;Je<rt;Je++){const Mt=$e[Je];gn(W,C,Mt,Mt.viewport)}}else Ge.length>0&&ca(Qe,Ge,C,ee),it&&Oe.render(C),gn(W,C,ee)}H!==null&&te===0&&(x.updateMultisampleRenderTarget(H),x.updateRenderTargetMipmap(H)),ce&&B.end(Q),C.isScene===!0&&C.onAfterRender(Q,C,ee),Le.resetDefaultState(),E=-1,L=null,T.pop(),T.length>0?(z=T[T.length-1],x.setTextureUnits(z.state.textureUnits),yt===!0&&Fe.setGlobalState(Q.clippingPlanes,z.state.camera)):z=null,k.pop(),k.length>0?W=k[k.length-1]:W=null,J!==null&&J.renderEnd()};function St(C,ee,he,ce){if(C.visible===!1)return;if(C.layers.test(ee.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(ee);else if(C.isLightProbeGrid)z.pushLightProbeGrid(C);else if(C.isLight)z.pushLight(C),C.castShadow&&z.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ke.intersectsSprite(C)){ce&&qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(xt);const Qe=_e.update(C),Ge=C.material;Ge.visible&&W.push(C,Qe,Ge,he,qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ke.intersectsObject(C))){const Qe=_e.update(C),Ge=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qe.copy(C.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),qe.copy(Qe.boundingSphere.center)),qe.applyMatrix4(C.matrixWorld).applyMatrix4(xt)),Array.isArray(Ge)){const $e=Qe.groups;for(let Je=0,rt=$e.length;Je<rt;Je++){const Mt=$e[Je],st=Ge[Mt.materialIndex];st&&st.visible&&W.push(C,Qe,st,he,qe.z,Mt)}}else Ge.visible&&W.push(C,Qe,Ge,he,qe.z,null)}}const He=C.children;for(let Qe=0,Ge=He.length;Qe<Ge;Qe++)St(He[Qe],ee,he,ce)}function gn(C,ee,he,ce){const{opaque:ue,transmissive:He,transparent:Qe}=C;z.setupLightsView(he),yt===!0&&Fe.setGlobalState(Q.clippingPlanes,he),ce&&Se.viewport(I.copy(ce)),ue.length>0&&Ba(ue,ee,he),He.length>0&&Ba(He,ee,he),Qe.length>0&&Ba(Qe,ee,he),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ca(C,ee,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ce.id]===void 0){const st=Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ce.id]=new ra(1,1,{generateMipmaps:!0,type:st?za:Ti,minFilter:Js,samples:Math.max(4,tt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const He=z.state.transmissionRenderTarget[ce.id],Qe=ce.viewport||I;He.setSize(Qe.z*Q.transmissionResolutionScale,Qe.w*Q.transmissionResolutionScale);const Ge=Q.getRenderTarget(),$e=Q.getActiveCubeFace(),Je=Q.getActiveMipmapLevel();Q.setRenderTarget(He),Q.getClearColor(U),Z=Q.getClearAlpha(),Z<1&&Q.setClearColor(16777215,.5),Q.clear(),it&&Oe.render(he);const rt=Q.toneMapping;Q.toneMapping=sa;const Mt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),z.setupLightsView(ce),yt===!0&&Fe.setGlobalState(Q.clippingPlanes,ce),Ba(C,he,ce),x.updateMultisampleRenderTarget(He),x.updateRenderTargetMipmap(He),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Gt=0,fn=ee.length;Gt<fn;Gt++){const rn=ee[Gt],{object:qt,geometry:Yt,material:Ye,group:qn}=rn;if(Ye.side===ta&&qt.layers.test(ce.layers)){const Dt=Ye.side;Ye.side=fi,Ye.needsUpdate=!0,xl(qt,he,ce,Yt,Ye,qn),Ye.side=Dt,Ye.needsUpdate=!0,st=!0}}st===!0&&(x.updateMultisampleRenderTarget(He),x.updateRenderTargetMipmap(He))}Q.setRenderTarget(Ge,$e,Je),Q.setClearColor(U,Z),Mt!==void 0&&(ce.viewport=Mt),Q.toneMapping=rt}function Ba(C,ee,he){const ce=ee.isScene===!0?ee.overrideMaterial:null;for(let ue=0,He=C.length;ue<He;ue++){const Qe=C[ue],{object:Ge,geometry:$e,group:Je}=Qe;let rt=Qe.material;rt.allowOverride===!0&&ce!==null&&(rt=ce),Ge.layers.test(he.layers)&&xl(Ge,ee,he,$e,rt,Je)}}function xl(C,ee,he,ce,ue,He){C.onBeforeRender(Q,ee,he,ce,ue,He),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ue.onBeforeRender(Q,ee,he,ce,C,He),ue.transparent===!0&&ue.side===ta&&ue.forceSinglePass===!1?(ue.side=fi,ue.needsUpdate=!0,Q.renderBufferDirect(he,ee,ce,ue,C,He),ue.side=Es,ue.needsUpdate=!0,Q.renderBufferDirect(he,ee,ce,ue,C,He),ue.side=ta):Q.renderBufferDirect(he,ee,ce,ue,C,He),C.onAfterRender(Q,ee,he,ce,ue,He)}function ir(C,ee,he){ee.isScene!==!0&&(ee=at);const ce=R.get(C),ue=z.state.lights,He=z.state.shadowsArray,Qe=ue.state.version,Ge=De.getParameters(C,ue.state,He,ee,he,z.state.lightProbeGridArray),$e=De.getProgramCacheKey(Ge);let Je=ce.programs;ce.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?ee.environment:null,ce.fog=ee.fog;const rt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ce.envMap=G.get(C.envMap||ce.environment,rt),ce.envMapRotation=ce.environment!==null&&C.envMap===null?ee.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",It),Je=new Map,ce.programs=Je);let Mt=Je.get($e);if(Mt!==void 0){if(ce.currentProgram===Mt&&ce.lightsStateVersion===Qe)return Ga(C,Ge),Mt}else Ge.uniforms=De.getUniforms(C),J!==null&&C.isNodeMaterial&&J.build(C,he,Ge),C.onBeforeCompile(Ge,Q),Mt=De.acquireProgram(Ge,$e),Je.set($e,Mt),ce.uniforms=Ge.uniforms;const st=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(st.clippingPlanes=Fe.uniform),Ga(C,Ge),ce.needsLights=Rs(C),ce.lightsStateVersion=Qe,ce.needsLights&&(st.ambientLightColor.value=ue.state.ambient,st.lightProbe.value=ue.state.probe,st.directionalLights.value=ue.state.directional,st.directionalLightShadows.value=ue.state.directionalShadow,st.spotLights.value=ue.state.spot,st.spotLightShadows.value=ue.state.spotShadow,st.rectAreaLights.value=ue.state.rectArea,st.ltc_1.value=ue.state.rectAreaLTC1,st.ltc_2.value=ue.state.rectAreaLTC2,st.pointLights.value=ue.state.point,st.pointLightShadows.value=ue.state.pointShadow,st.hemisphereLights.value=ue.state.hemi,st.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,st.spotLightMatrix.value=ue.state.spotLightMatrix,st.spotLightMap.value=ue.state.spotLightMap,st.pointShadowMatrix.value=ue.state.pointShadowMatrix),ce.lightProbeGrid=z.state.lightProbeGridArray.length>0,ce.currentProgram=Mt,ce.uniformsList=null,Mt}function co(C){if(C.uniformsList===null){const ee=C.currentProgram.getUniforms();C.uniformsList=ou.seqWithValue(ee.seq,C.uniforms)}return C.uniformsList}function Ga(C,ee){const he=R.get(C);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function uo(C,ee){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;F.setFromMatrixPosition(ee.matrixWorld);for(let he=0,ce=C.length;he<ce;he++){const ue=C[he];if(ue.texture!==null&&ue.boundingBox.containsPoint(F))return ue}return null}function Ha(C,ee,he,ce,ue){ee.isScene!==!0&&(ee=at),x.resetTextureUnits();const He=ee.fog,Qe=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?ee.environment:null,Ge=H===null?Q.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Ft.workingColorSpace,$e=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,Je=G.get(ce.envMap||Qe,$e),rt=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Mt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),st=!!he.morphAttributes.position,Gt=!!he.morphAttributes.normal,fn=!!he.morphAttributes.color;let rn=sa;ce.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(rn=Q.toneMapping);const qt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Yt=qt!==void 0?qt.length:0,Ye=R.get(ce),qn=z.state.lights;if(yt===!0&&(mt===!0||C!==L)){const Xt=C===L&&ce.id===E;Fe.setState(ce,C,Xt)}let Dt=!1;ce.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==qn.state.version||Ye.outputColorSpace!==Ge||ue.isBatchedMesh&&Ye.batching===!1||!ue.isBatchedMesh&&Ye.batching===!0||ue.isBatchedMesh&&Ye.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&Ye.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&Ye.instancing===!1||!ue.isInstancedMesh&&Ye.instancing===!0||ue.isSkinnedMesh&&Ye.skinning===!1||!ue.isSkinnedMesh&&Ye.skinning===!0||ue.isInstancedMesh&&Ye.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&Ye.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&Ye.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&Ye.instancingMorph===!1&&ue.morphTexture!==null||Ye.envMap!==Je||ce.fog===!0&&Ye.fog!==He||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Fe.numPlanes||Ye.numIntersection!==Fe.numIntersection)||Ye.vertexAlphas!==rt||Ye.vertexTangents!==Mt||Ye.morphTargets!==st||Ye.morphNormals!==Gt||Ye.morphColors!==fn||Ye.toneMapping!==rn||Ye.morphTargetsCount!==Yt||!!Ye.lightProbeGrid!=z.state.lightProbeGridArray.length>0)&&(Dt=!0):(Dt=!0,Ye.__version=ce.version);let Dn=Ye.currentProgram;Dt===!0&&(Dn=ir(ce,ee,ue),J&&ce.isNodeMaterial&&J.onUpdateProgram(ce,Dn,Ye));let hi=!1,zi=!1,pi=!1;const Zt=Dn.getUniforms(),dn=Ye.uniforms;if(Se.useProgram(Dn.program)&&(hi=!0,zi=!0,pi=!0),ce.id!==E&&(E=ce.id,zi=!0),Ye.needsLights){const Xt=uo(z.state.lightProbeGridArray,ue);Ye.lightProbeGrid!==Xt&&(Ye.lightProbeGrid=Xt,zi=!0)}if(hi||L!==C){Se.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Zt.setValue(j,"projectionMatrix",C.projectionMatrix),Zt.setValue(j,"viewMatrix",C.matrixWorldInverse);const qi=Zt.map.cameraPosition;qi!==void 0&&qi.setValue(j,Be.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&Zt.setValue(j,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Zt.setValue(j,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,zi=!0,pi=!0)}if(Ye.needsLights&&(qn.state.directionalShadowMap.length>0&&Zt.setValue(j,"directionalShadowMap",qn.state.directionalShadowMap,x),qn.state.spotShadowMap.length>0&&Zt.setValue(j,"spotShadowMap",qn.state.spotShadowMap,x),qn.state.pointShadowMap.length>0&&Zt.setValue(j,"pointShadowMap",qn.state.pointShadowMap,x)),ue.isSkinnedMesh){Zt.setOptional(j,ue,"bindMatrix"),Zt.setOptional(j,ue,"bindMatrixInverse");const Xt=ue.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Zt.setValue(j,"boneTexture",Xt.boneTexture,x))}ue.isBatchedMesh&&(Zt.setOptional(j,ue,"batchingTexture"),Zt.setValue(j,"batchingTexture",ue._matricesTexture,x),Zt.setOptional(j,ue,"batchingIdTexture"),Zt.setValue(j,"batchingIdTexture",ue._indirectTexture,x),Zt.setOptional(j,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Zt.setValue(j,"batchingColorTexture",ue._colorsTexture,x));const Fi=he.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&dt.update(ue,he,Dn),(zi||Ye.receiveShadow!==ue.receiveShadow)&&(Ye.receiveShadow=ue.receiveShadow,Zt.setValue(j,"receiveShadow",ue.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&ee.environment!==null&&(dn.envMapIntensity.value=ee.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=hw()),zi){if(Zt.setValue(j,"toneMappingExposure",Q.toneMappingExposure),Ye.needsLights&&ka(dn,pi),He&&ce.fog===!0&&ne.refreshFogUniforms(dn,He),ne.refreshMaterialUniforms(dn,ce,Te,Ce,z.state.transmissionRenderTarget[C.id]),Ye.needsLights&&Ye.lightProbeGrid){const Xt=Ye.lightProbeGrid;dn.probesSH.value=Xt.texture,dn.probesMin.value.copy(Xt.boundingBox.min),dn.probesMax.value.copy(Xt.boundingBox.max),dn.probesResolution.value.copy(Xt.resolution)}ou.upload(j,co(Ye),dn,x)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(ou.upload(j,co(Ye),dn,x),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Zt.setValue(j,"center",ue.center),Zt.setValue(j,"modelViewMatrix",ue.modelViewMatrix),Zt.setValue(j,"normalMatrix",ue.normalMatrix),Zt.setValue(j,"modelMatrix",ue.matrixWorld),ce.uniformsGroups!==void 0){const Xt=ce.uniformsGroups;for(let qi=0,ja=Xt.length;qi<ja;qi++){const Cs=Xt[qi];ve.update(Cs,Dn),ve.bind(Cs,Dn)}}return Dn}function ka(C,ee){C.ambientLightColor.needsUpdate=ee,C.lightProbe.needsUpdate=ee,C.directionalLights.needsUpdate=ee,C.directionalLightShadows.needsUpdate=ee,C.pointLights.needsUpdate=ee,C.pointLightShadows.needsUpdate=ee,C.spotLights.needsUpdate=ee,C.spotLightShadows.needsUpdate=ee,C.rectAreaLights.needsUpdate=ee,C.hemisphereLights.needsUpdate=ee}function Rs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,ee,he){const ce=R.get(C);ce.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),R.get(C.texture).__webglTexture=ee,R.get(C.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,ee){const he=R.get(C);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0};const Va=j.createFramebuffer();this.setRenderTarget=function(C,ee=0,he=0){H=C,me=ee,te=he;let ce=null,ue=!1,He=!1;if(C){const Ge=R.get(C);if(Ge.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(j.FRAMEBUFFER,Ge.__webglFramebuffer),I.copy(C.viewport),fe.copy(C.scissor),de=C.scissorTest,Se.viewport(I),Se.scissor(fe),Se.setScissorTest(de),E=-1;return}else if(Ge.__webglFramebuffer===void 0)x.setupRenderTarget(C);else if(Ge.__hasExternalTextures)x.rebindTextures(C,R.get(C.texture).__webglTexture,R.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const rt=C.depthTexture;if(Ge.__boundDepthTexture!==rt){if(rt!==null&&R.has(rt)&&(C.width!==rt.image.width||C.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(He=!0);const Je=R.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Je[ee])?ce=Je[ee][he]:ce=Je[ee],ue=!0):C.samples>0&&x.useMultisampledRTT(C)===!1?ce=R.get(C).__webglMultisampledFramebuffer:Array.isArray(Je)?ce=Je[he]:ce=Je,I.copy(C.viewport),fe.copy(C.scissor),de=C.scissorTest}else I.copy(Ee).multiplyScalar(Te).floor(),fe.copy(Re).multiplyScalar(Te).floor(),de=Ze;if(he!==0&&(ce=Va),Se.bindFramebuffer(j.FRAMEBUFFER,ce)&&Se.drawBuffers(C,ce),Se.viewport(I),Se.scissor(fe),Se.setScissorTest(de),ue){const Ge=R.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ge.__webglTexture,he)}else if(He){const Ge=ee;for(let $e=0;$e<C.textures.length;$e++){const Je=R.get(C.textures[$e]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$e,Je.__webglTexture,he,Ge)}}else if(C!==null&&he!==0){const Ge=R.get(C.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ge.__webglTexture,he)}E=-1},this.readRenderTargetPixels=function(C,ee,he,ce,ue,He,Qe,Ge=0){if(!(C&&C.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e){Se.bindFramebuffer(j.FRAMEBUFFER,$e);try{const Je=C.textures[Ge],rt=Je.format,Mt=Je.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ge),!tt.textureFormatReadable(rt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Mt)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=C.width-ce&&he>=0&&he<=C.height-ue&&j.readPixels(ee,he,ce,ue,Y.convert(rt),Y.convert(Mt),He)}finally{const Je=H!==null?R.get(H).__webglFramebuffer:null;Se.bindFramebuffer(j.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(C,ee,he,ce,ue,He,Qe,Ge=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Qe!==void 0&&($e=$e[Qe]),$e)if(ee>=0&&ee<=C.width-ce&&he>=0&&he<=C.height-ue){Se.bindFramebuffer(j.FRAMEBUFFER,$e);const Je=C.textures[Ge],rt=Je.format,Mt=Je.type;if(C.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ge),!tt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,st),j.bufferData(j.PIXEL_PACK_BUFFER,He.byteLength,j.STREAM_READ),j.readPixels(ee,he,ce,ue,Y.convert(rt),Y.convert(Mt),0);const Gt=H!==null?R.get(H).__webglFramebuffer:null;Se.bindFramebuffer(j.FRAMEBUFFER,Gt);const fn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await y1(j,fn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,st),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,He),j.deleteBuffer(st),j.deleteSync(fn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,ee=null,he=0){const ce=Math.pow(2,-he),ue=Math.floor(C.image.width*ce),He=Math.floor(C.image.height*ce),Qe=ee!==null?ee.x:0,Ge=ee!==null?ee.y:0;x.setTexture2D(C,0),j.copyTexSubImage2D(j.TEXTURE_2D,he,0,0,Qe,Ge,ue,He),Se.unbindTexture()};const Mn=j.createFramebuffer(),_l=j.createFramebuffer();this.copyTextureToTexture=function(C,ee,he=null,ce=null,ue=0,He=0){let Qe,Ge,$e,Je,rt,Mt,st,Gt,fn;const rn=C.isCompressedTexture?C.mipmaps[He]:C.image;if(he!==null)Qe=he.max.x-he.min.x,Ge=he.max.y-he.min.y,$e=he.isBox3?he.max.z-he.min.z:1,Je=he.min.x,rt=he.min.y,Mt=he.isBox3?he.min.z:0;else{const dn=Math.pow(2,-ue);Qe=Math.floor(rn.width*dn),Ge=Math.floor(rn.height*dn),C.isDataArrayTexture?$e=rn.depth:C.isData3DTexture?$e=Math.floor(rn.depth*dn):$e=1,Je=0,rt=0,Mt=0}ce!==null?(st=ce.x,Gt=ce.y,fn=ce.z):(st=0,Gt=0,fn=0);const qt=Y.convert(ee.format),Yt=Y.convert(ee.type);let Ye;ee.isData3DTexture?(x.setTexture3D(ee,0),Ye=j.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(x.setTexture2DArray(ee,0),Ye=j.TEXTURE_2D_ARRAY):(x.setTexture2D(ee,0),Ye=j.TEXTURE_2D),Se.activeTexture(j.TEXTURE0),Se.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,ee.flipY),Se.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),Se.pixelStorei(j.UNPACK_ALIGNMENT,ee.unpackAlignment);const qn=Se.getParameter(j.UNPACK_ROW_LENGTH),Dt=Se.getParameter(j.UNPACK_IMAGE_HEIGHT),Dn=Se.getParameter(j.UNPACK_SKIP_PIXELS),hi=Se.getParameter(j.UNPACK_SKIP_ROWS),zi=Se.getParameter(j.UNPACK_SKIP_IMAGES);Se.pixelStorei(j.UNPACK_ROW_LENGTH,rn.width),Se.pixelStorei(j.UNPACK_IMAGE_HEIGHT,rn.height),Se.pixelStorei(j.UNPACK_SKIP_PIXELS,Je),Se.pixelStorei(j.UNPACK_SKIP_ROWS,rt),Se.pixelStorei(j.UNPACK_SKIP_IMAGES,Mt);const pi=C.isDataArrayTexture||C.isData3DTexture,Zt=ee.isDataArrayTexture||ee.isData3DTexture;if(C.isDepthTexture){const dn=R.get(C),Fi=R.get(ee),Xt=R.get(dn.__renderTarget),qi=R.get(Fi.__renderTarget);Se.bindFramebuffer(j.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Se.bindFramebuffer(j.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let ja=0;ja<$e;ja++)pi&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,R.get(C).__webglTexture,ue,Mt+ja),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,R.get(ee).__webglTexture,He,fn+ja)),j.blitFramebuffer(Je,rt,Qe,Ge,st,Gt,Qe,Ge,j.DEPTH_BUFFER_BIT,j.NEAREST);Se.bindFramebuffer(j.READ_FRAMEBUFFER,null),Se.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ue!==0||C.isRenderTargetTexture||R.has(C)){const dn=R.get(C),Fi=R.get(ee);Se.bindFramebuffer(j.READ_FRAMEBUFFER,Mn),Se.bindFramebuffer(j.DRAW_FRAMEBUFFER,_l);for(let Xt=0;Xt<$e;Xt++)pi?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,dn.__webglTexture,ue,Mt+Xt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,dn.__webglTexture,ue),Zt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Fi.__webglTexture,He,fn+Xt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Fi.__webglTexture,He),ue!==0?j.blitFramebuffer(Je,rt,Qe,Ge,st,Gt,Qe,Ge,j.COLOR_BUFFER_BIT,j.NEAREST):Zt?j.copyTexSubImage3D(Ye,He,st,Gt,fn+Xt,Je,rt,Qe,Ge):j.copyTexSubImage2D(Ye,He,st,Gt,Je,rt,Qe,Ge);Se.bindFramebuffer(j.READ_FRAMEBUFFER,null),Se.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Zt?C.isDataTexture||C.isData3DTexture?j.texSubImage3D(Ye,He,st,Gt,fn,Qe,Ge,$e,qt,Yt,rn.data):ee.isCompressedArrayTexture?j.compressedTexSubImage3D(Ye,He,st,Gt,fn,Qe,Ge,$e,qt,rn.data):j.texSubImage3D(Ye,He,st,Gt,fn,Qe,Ge,$e,qt,Yt,rn):C.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,He,st,Gt,Qe,Ge,qt,Yt,rn.data):C.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,He,st,Gt,rn.width,rn.height,qt,rn.data):j.texSubImage2D(j.TEXTURE_2D,He,st,Gt,Qe,Ge,qt,Yt,rn);Se.pixelStorei(j.UNPACK_ROW_LENGTH,qn),Se.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Dt),Se.pixelStorei(j.UNPACK_SKIP_PIXELS,Dn),Se.pixelStorei(j.UNPACK_SKIP_ROWS,hi),Se.pixelStorei(j.UNPACK_SKIP_IMAGES,zi),He===0&&ee.generateMipmaps&&j.generateMipmap(Ye),Se.unbindTexture()},this.initRenderTarget=function(C){R.get(C).__webglFramebuffer===void 0&&x.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?x.setTextureCube(C,0):C.isData3DTexture?x.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?x.setTexture2DArray(C,0):x.setTexture2D(C,0),Se.unbindTexture()},this.resetState=function(){me=0,te=0,H=null,Se.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ft._getUnpackColorSpace()}}const L_={type:"change"},Rp={type:"start"},Cv={type:"end"},eu=new yp,O_=new bs,mw=Math.cos(70*E1.DEG2RAD),Un=new $,ci=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mh=1e-6;class gw extends _M{constructor(e,i=null){super(e,i),this.state=sn.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:eo.ROTATE,TWO:eo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Ts,this._lastTargetPosition=new $,this._quat=new Ts().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new o_,this._sphericalDelta=new o_,this._scale=1,this._panOffset=new $,this._rotateStart=new ft,this._rotateEnd=new ft,this._rotateDelta=new ft,this._panStart=new ft,this._panEnd=new ft,this._panDelta=new ft,this._dollyStart=new ft,this._dollyEnd=new ft,this._dollyDelta=new ft,this._dollyDirection=new $,this._mouse=new ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_w.bind(this),this._onPointerDown=xw.bind(this),this._onPointerUp=vw.bind(this),this._onContextMenu=Aw.bind(this),this._onMouseWheel=Sw.bind(this),this._onKeyDown=Mw.bind(this),this._onTouchStart=Ew.bind(this),this._onTouchMove=Tw.bind(this),this._onMouseDown=bw.bind(this),this._onMouseMove=yw.bind(this),this._interceptControlDown=ww.bind(this),this._interceptControlUp=Rw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(L_),this.update(),this.state=sn.NONE}pan(e,i){this._pan(e,i),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const i=this.object.position;Un.copy(i).sub(this.target),Un.applyQuaternion(this._quat),this._spherical.setFromVector3(Un),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ci:s>Math.PI&&(s-=ci),l<-Math.PI?l+=ci:l>Math.PI&&(l-=ci),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=d!=this._spherical.radius}if(Un.setFromSpherical(this._spherical),Un.applyQuaternion(this._quatInverse),i.copy(this.target).add(Un),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const p=Un.length();d=this._clampDistance(p*this._scale);const m=p-d;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const h=new $(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(p),this.object.updateMatrixWorld(),d=Un.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(eu.origin.copy(this.object.position),eu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(eu.direction))<mw?this.object.lookAt(this.target):(O_.setFromNormalAndCoplanarPoint(this.object.up,this.target),eu.intersectPlane(O_,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mh||this._lastTargetPosition.distanceToSquared(this.target)>mh?(this.dispatchEvent(L_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ci/60*this.autoRotateSpeed*e:ci/60/60*this.autoRotateSpeed}_getZoomScale(e){const i=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,i){Un.setFromMatrixColumn(i,0),Un.multiplyScalar(-e),this._panOffset.add(Un)}_panUp(e,i){this.screenSpacePanning===!0?Un.setFromMatrixColumn(i,1):(Un.setFromMatrixColumn(i,0),Un.crossVectors(this.object.up,Un)),Un.multiplyScalar(e),this._panOffset.add(Un)}_pan(e,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;Un.copy(l).sub(this.target);let c=Un.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=e-s.left,c=i-s.top,d=s.width,p=s.height;this._mouse.x=l/d*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/i.clientHeight),this._rotateUp(ci*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let i=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const s=this._getSecondPointerPosition(e),l=.5*(e.pageX+s.x),c=.5*(e.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/i.clientHeight),this._rotateUp(ci*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),l=.5*(e.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const i=this._getSecondPointerPosition(e),s=e.pageX-i.x,l=e.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+i.x)*.5,p=(e.pageY+i.y)*.5;this._updateZoomParameters(d,p)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(e){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==e.pointerId)return!0;return!1}_trackPointer(e){let i=this._pointerPositions[e.pointerId];i===void 0&&(i=new ft,this._pointerPositions[e.pointerId]=i),i.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const i=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(e){const i=e.deltaMode,s={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function xw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function _w(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function vw(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cv),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],i=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:i.x,pageY:i.y});break}}function bw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case to.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=sn.DOLLY;break;case to.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}break;case to.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Rp)}function yw(r){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Sw(r){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(r.preventDefault(),this.dispatchEvent(Rp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Cv))}function Mw(r){this.enabled!==!1&&this._handleKeyDown(r)}function Ew(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case eo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=sn.TOUCH_ROTATE;break;case eo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case eo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=sn.TOUCH_DOLLY_PAN;break;case eo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(Rp)}function Tw(r){switch(this._trackPointer(r),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=sn.NONE}}function Aw(r){this.enabled!==!1&&r.preventDefault()}function ww(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rw(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function P_({agents:r,decorItems:e=[],gridSize:i,timeMode:s,messages:l=[],currentAgentId:c}){const d=je.useRef(null),p=je.useRef(null),[m,h]=je.useState({width:700,height:500}),[y,b]=je.useState(!0),[g,M]=je.useState(!1),[A,O]=je.useState(!1),[S,_]=je.useState(null),[N,P]=je.useState({});je.useLayoutEffect(()=>{if(!d.current)return;const te=new ResizeObserver(H=>{for(const E of H){const{width:L,height:I}=E.contentRect;h({width:Math.max(L,350),height:Math.max(I,420)})}});return te.observe(d.current),()=>te.disconnect()},[]);const F=["Delegating sub-tasks... 📈","Taking a coffee break! ☕","Extruding 3D geometry... 🕸️","Reviewing system performance! 📊","Pacing around... 🚶","Grabbing a glass of water... 💧","Refueling espresso... ☕"];je.useEffect(()=>{const te=setInterval(()=>{r.length!==0&&P(H=>{const E={...H};return A&&r.forEach(L=>{if(L.state==="idle"&&!E[L.id]&&Math.random()<.015){let I=Math.floor(Math.random()*i),fe=Math.floor(Math.random()*i),de="Pacing around... 🚶";if(Math.random()<.5&&r.length>1){const U=r.filter(be=>be.id!==L.id),Z=U[Math.floor(Math.random()*U.length)];I=Z.gridPosition.x,fe=Z.gridPosition.z,de=`Brainstorm with ${Z.name.split(" ")[0]}! 🗣️`}else if(e&&e.length>0){const U=e[Math.floor(Math.random()*e.length)];I=U.x,fe=U.z,U.type==="coffee"&&(de="Refueling espresso... ☕"),U.type==="cooler"&&(de="Water Break! 💧"),U.type==="plant"&&(de="Inspecting office botany... 🪴"),U.type==="couch"&&(de="Creative lounging! 🛋️")}else de=F[Math.floor(Math.random()*F.length)];I=Math.max(1,Math.min(i-2,I)),fe=Math.max(1,Math.min(i-2,fe)),E[L.id]={agentId:L.id,homeX:L.gridPosition.x,homeZ:L.gridPosition.z,targetX:I,targetZ:fe,currentX:L.gridPosition.x,currentZ:L.gridPosition.z,progress:0,phase:"to_target",dwellTimeLeft:120,reasonCode:de}}}),Object.keys(E).forEach(L=>{const I=E[L];I.phase==="to_target"?(I.progress+=.015,I.progress>=1?(I.progress=1,I.currentX=I.targetX,I.currentZ=I.targetZ,I.phase="dwelling"):(I.currentX=I.homeX+(I.targetX-I.homeX)*I.progress,I.currentZ=I.homeZ+(I.targetZ-I.homeZ)*I.progress)):I.phase==="dwelling"?(I.dwellTimeLeft--,I.dwellTimeLeft<=0&&(I.phase="return",I.progress=0)):I.phase==="return"&&(I.progress+=.015,I.progress>=1?(I.progress=1,I.currentX=I.homeX,I.currentZ=I.homeZ,delete E[L]):(I.currentX=I.targetX+(I.homeX-I.targetX)*I.progress,I.currentZ=I.targetZ+(I.homeZ-I.targetZ)*I.progress))}),E})},100);return()=>clearInterval(te)},[r,e,i]),je.useEffect(()=>{var H;const te=Object.values(N);if(te.length>0){const E=te[0],L=((H=r.find(I=>I.id===E.agentId))==null?void 0:H.name)||"Agent";_(`🚶 ${L.split(" ")[0]} is: ${E.reasonCode}`)}else _(null)},[N,r]);const W=(te,H)=>{const E=H.split("").reduce((U,Z)=>U+Z.charCodeAt(0),0),L=[16767916,15843965,14724201,13010498,9262372],I=[1709328,2885120,12075781,15057240,5918794],fe=[3359061,1013358,12458077,5774471,12730636,223649,1357990,6514417],de=[1976635,3359061,4674921,1120295];return{skin:L[E%L.length],hairColor:I[(E+2)%I.length],clothesColor:fe[(E+4)%fe.length],trouserColor:de[(E+5)%de.length],hairStyle:E%5}},z=je.useRef(null),k=je.useRef(null),T=je.useRef(null),B=je.useRef(null),Q=je.useRef(null),V=je.useRef(0);je.useEffect(()=>{const te=p.current;if(!te)return;const H=new F1;z.current=H;const E=new Ei(45,m.width/m.height,.1,200);E.position.set(12,11,16),T.current=E;const L=new pw({canvas:te,antialias:!0,alpha:!1,preserveDrawingBuffer:!0});L.setPixelRatio(Math.min(window.devicePixelRatio,2)),L.setSize(m.width,m.height),L.shadowMap.enabled=!0,L.shadowMap.type=j_,k.current=L;const I=new gw(E,L.domElement);I.enableDamping=!0,I.dampingFactor=.06,I.maxPolarAngle=Math.PI/2-.05,I.minDistance=3,I.maxDistance=55,I.target.set(0,0,0),B.current=I;const fe=new ui;H.add(fe),Q.current=fe;const de=new r_(16777215,.45);H.add(de);const U=new s_(16777215,1.2);U.position.set(15,24,12),U.castShadow=!0,U.shadow.mapSize.width=1024,U.shadow.mapSize.height=1024,U.shadow.camera.near=.5,U.shadow.camera.far=60;const Z=15;U.shadow.camera.left=-Z,U.shadow.camera.right=Z,U.shadow.camera.top=Z,U.shadow.camera.bottom=-Z,U.shadow.bias=-5e-4,H.add(U);const be=new La(100,100),Ce=new Fn({roughness:.85,metalness:.1}),Te=new We(be,Ce);Te.rotation.x=-Math.PI/2,Te.receiveShadow=!0,H.add(Te);let se=new gM;const xe=()=>{const Ee=se.getElapsedTime();if(B.current&&B.current.update(),g&&T.current&&B.current){const Re=Ee*.04,Ze=new ft(T.current.position.x-B.current.target.x,T.current.position.z-B.current.target.z).length(),ke=11+Math.sin(Ee*.1)*.5;T.current.position.x=B.current.target.x+Math.cos(Re)*Ze*.999,T.current.position.z=B.current.target.z+Math.sin(Re)*Ze*.999,T.current.position.y+=(ke-T.current.position.y)*.05}Q.current&&Q.current.children.forEach(Re=>{var Ze;if(Re.name.startsWith("ag-label-")){T.current&&Re.quaternion.copy(T.current.quaternion);const ke=Re.name.replace("ag-label-",""),yt=(Ze=Q.current)==null?void 0:Ze.getObjectByName(`agent-${ke}`);yt&&Re.position.set(yt.position.x,1.62,yt.position.z)}if(Re.userData&&Re.userData.isAgent){const ke=Re.userData.agentId,yt=r.find(x=>x.id===ke),mt=1.6,xt=(i-1)/2;let Be=yt?yt.gridPosition.x:0,qe=yt?yt.gridPosition.z:0;const at=N[ke],it=!at||at.phase==="dwelling";at&&(Be=at.currentX,qe=at.currentZ);const Tt=Re.getObjectByName("left-leg"),j=Re.getObjectByName("right-leg"),lt=Re.getObjectByName("left-arm"),Xe=Re.getObjectByName("right-arm"),tt=Re.getObjectByName("torso");if(it){const x=Math.sin(Ee*2.5)*.012;tt&&(tt.position.set(0,.42+x,0),tt.rotation.set(.06,0,0)),Tt&&(Tt.position.set(-.065,.22,.12),Tt.rotation.set(Math.PI/2,0,0)),j&&(j.position.set(.065,.22,.12),j.rotation.set(Math.PI/2,0,0));const G=Math.sin(Ee*20)*.02,q=Math.cos(Ee*20+1.2)*.02;lt&&(lt.position.set(-.16,.6+G,.08),lt.rotation.set(-1.4+G,.15,.1)),Xe&&(Xe.position.set(.16,.6+q,.08),Xe.rotation.set(-1.4+q,-.15,-.1))}else{tt&&(tt.position.set(0,.45,0),tt.rotation.set(0,0,0));const x=Math.sin(Ee*12)*.25;Tt&&(Tt.position.set(-.065,.14,0),Tt.rotation.set(x,0,0)),j&&(j.position.set(.065,.14,0),j.rotation.set(-x,0,0)),lt&&(lt.position.set(-.18,.48,0),lt.rotation.set(-x*1.5,0,.1)),Xe&&(Xe.position.set(.18,.48,0),Xe.rotation.set(x*1.5,0,-.1))}const Se=(Be-xt)*mt,Ae=(qe-xt)*mt+(it?.35:0);if(Re.position.x+=(Se-Re.position.x)*.35,Re.position.z+=(Ae-Re.position.z)*.35,at&&at.phase!=="dwelling"){const x=at.targetX-at.homeX,G=at.targetZ-at.homeZ;let ae=Math.atan2(x,G)-Re.rotation.y;for(;ae<-Math.PI;)ae+=Math.PI*2;for(;ae>Math.PI;)ae-=Math.PI*2;Re.rotation.y+=ae*.2}else{let x=Math.PI-Re.rotation.y;for(;x<-Math.PI;)x+=Math.PI*2;for(;x>Math.PI;)x-=Math.PI*2;Re.rotation.y+=x*.12}const R=Re.getObjectByName("halo-ring");if(R){R.rotation.z=Ee*3,R.scale.setScalar(1+Math.sin(Ee*5)*.1);const x=R.getObjectByName("halo-light");x&&(x.intensity=.6+Math.sin(Ee*6)*.3)}}if(Re.userData&&Re.userData.isCoffeeSteam&&(Re.position.y+=.015,Re.scale.multiplyScalar(.975),Re.position.y>2.2&&(Re.position.y=1.1,Re.scale.setScalar(1))),Re.name==="delegation-pulsar"&&Re.userData&&Re.userData.curve){const ke=Re.userData.curve,yt=Ee*.45%1,mt=ke.getPointAt(yt);Re.position.copy(mt)}}),L.render(H,E),V.current=requestAnimationFrame(xe)};return xe(),()=>{cancelAnimationFrame(V.current),I.dispose(),L.dispose()}},[r,i]),je.useEffect(()=>{k.current&&T.current&&(T.current.aspect=m.width/m.height,T.current.updateProjectionMatrix(),k.current.setSize(m.width,m.height))},[m]),je.useEffect(()=>{var xt;const te=z.current,H=Q.current;if(!te||!H)return;for(;H.children.length>0;){const Be=H.children[0];H.remove(Be),Be.traverse(qe=>{qe instanceof We&&(qe.geometry&&qe.geometry.dispose(),qe.material&&(Array.isArray(qe.material)?qe.material.forEach(at=>at.dispose()):qe.material.dispose()))})}const E=te.getObjectByName("office-grid-helper");E&&te.remove(E);let L=15857145,I=9741240,fe=3900150,de=10576391,U=6583435,Z=13751771;s==="night"?(L=461075,I=1973067,fe=6514417,de=7877903,U=1976635,Z=790042):s==="matrix"&&(L=0,I=339478,fe=2278750,de=0,U=1332013,Z=142370),(xt=k.current)==null||xt.setClearColor(L),te.fog=new bp(L,.035);const be=te.children.find(Be=>Be instanceof We&&Be.geometry instanceof La);be&&be.material.color.setHex(Z);const Ce=1.6,Te=(i-1)/2,se=i*Ce,xe=new xM(se,i,fe,I);xe.name="office-grid-helper",xe.position.set(0,.01,0),te.add(xe);const Ee=te.children.find(Be=>Be instanceof r_);Ee&&(Ee.color.setHex(s==="matrix"?65280:16777215),Ee.intensity=s==="day"?.95:s==="night"?.35:.15);const Re=te.children.find(Be=>Be instanceof s_);Re&&(Re.intensity=s==="day"?1.4:s==="night"?.6:.2);const Ze=new Fn({color:de,roughness:.15,metalness:.05}),ke=new Fn({color:U,metalness:.9,roughness:.1});r.forEach(Be=>{const qe=Be.gridPosition.x,at=Be.gridPosition.z,it=(qe-Te)*Ce,Tt=(at-Te)*Ce,j=new ui;j.position.set(it,0,Tt),H.add(j);const lt=new ln(1.2,.05,.8),Xe=new We(lt,Ze);Xe.position.set(0,.55,0),Xe.castShadow=!0,Xe.receiveShadow=!0,j.add(Xe);const tt=new Xn(.02,.02,.55);[[-.55,-.4],[.55,-.4],[-.55,.4],[.55,.4]].forEach(mn=>{const Cn=new We(tt,ke);Cn.position.set(mn[0],.275,mn[1]),Cn.castShadow=!0,j.add(Cn)});const Ae=new ui;Ae.position.set(-.22,.58,-.05),Ae.rotation.y=.3,j.add(Ae);const R=new ln(.24,.015,.16),x=new We(R,ke);x.castShadow=!0,Ae.add(x);const G=new ln(.24,.16,.01),q=new We(G,ke);q.position.set(0,.07,.08),q.rotation.x=-.3,q.castShadow=!0,Ae.add(q);const ae=new La(.21,.12),_e=new Ua({color:s==="matrix"?2278750:3718648}),De=new We(ae,_e);De.position.set(0,.08,.073),De.rotation.x=-.3,Ae.add(De);const ne=new ui;ne.position.set(.18,.58,-.15),ne.rotation.y=-.25,j.add(ne);const le=new ln(.16,.01,.1),Ue=new We(le,ke);Ue.castShadow=!0,Ue.receiveShadow=!0,ne.add(Ue);const Fe=new Xn(.012,.012,.18,8),ze=new We(Fe,ke);ze.position.set(0,.09,-.02),ze.castShadow=!0,ne.add(ze);const Oe=new Fn({color:1976635,roughness:.7}),dt=new ln(.42,.25,.02),ct=new We(dt,Oe);ct.position.set(0,.22,-.02),ct.castShadow=!0,ne.add(ct);const vt=new La(.39,.22),Y=new Ua({color:s==="matrix"?1332013:1973067}),Le=new We(vt,Y);Le.position.set(0,.22,-.009),ne.add(Le);const ve=5,Ie=[2278750,15485081,3900150,15381256,1357990];for(let mn=0;mn<ve;mn++){const Cn=new La(.12+Math.random()*.15,.015),Wt=new Ua({color:s==="matrix"?2278750:Ie[mn%Ie.length]}),gt=new We(Cn,Wt);gt.position.set(-.06+Math.random()*.03,.29-mn*.04,-.008),ne.add(gt)}const Pe=new ui;Pe.position.set(0,0,.35),j.add(Pe);const Ne=new Xn(.02,.04,.2),Ke=new We(Ne,ke);Ke.position.set(0,.1,0),Pe.add(Ke);const ut=new Xn(.01,.01,.22);for(let mn=0;mn<5;mn++){const Cn=new We(ut,ke);Cn.rotation.x=Math.PI/2,Cn.rotation.y=mn*Math.PI*2/5,Cn.position.set(0,.01,0),Pe.add(Cn)}const It=new ln(.42,.04,.4),Rt=new Fn({color:Be.avatarColor?parseInt(Be.avatarColor.replace("#","0x")):1976635,roughness:.8}),Vt=new We(It,Rt);Vt.position.set(0,.22,0),Vt.castShadow=!0,Pe.add(Vt);const Gn=new ln(.38,.35,.04),di=new We(Gn,Rt);di.position.set(0,.44,.18),di.castShadow=!0,Pe.add(di)});const yt=new Fn({color:12730636,roughness:.8}),mt=new Fn({color:1409085,roughness:.9,flatShading:!0});if(e.forEach(Be=>{const qe=(Be.x-Te)*Ce,at=(Be.z-Te)*Ce,it=new ui;if(it.position.set(qe,0,at),H.add(it),Be.type==="plant"){const Tt=new Xn(.2,.13,.28,12),j=new We(Tt,yt);j.position.set(0,.14,0),j.castShadow=!0,it.add(j);const lt=new Ln(.22,8,8),Xe=new We(lt,mt);Xe.position.set(0,.42,0),Xe.scale.set(1.1,1.4,.9),Xe.castShadow=!0,it.add(Xe);const tt=new We(lt,mt);tt.position.set(-.1,.6,.05),tt.scale.set(.8,1.2,.8),tt.castShadow=!0,it.add(tt);const Se=new We(lt,mt);Se.position.set(.08,.52,-.08),Se.scale.set(.8,1.2,.8),Se.castShadow=!0,it.add(Se)}else if(Be.type==="coffee"){const Tt=new ln(.7,.65,.6),j=new Fn({color:4674921,metalness:.1}),lt=new We(Tt,j);lt.position.set(0,.325,0),lt.castShadow=!0,lt.receiveShadow=!0,it.add(lt);const Xe=new ln(.42,.42,.38),tt=new Fn({color:12131356,metalness:.5}),Se=new We(Xe,tt);Se.position.set(0,.86,0),Se.castShadow=!0,it.add(Se);const Ae=new ln(.25,.04,.24),R=new We(Ae,ke);R.position.set(0,.68,.08),R.castShadow=!0,it.add(R);const x=new Xn(.04,.03,.06),G=new Fn({color:16777215}),q=new We(x,G);q.position.set(0,.73,.08),q.castShadow=!0,it.add(q);for(let ae=0;ae<3;ae++){const _e=new Ln(.03+ae*.01,5,5),De=new Ua({color:16777215,transparent:!0,opacity:.35}),ne=new We(_e,De);ne.position.set(0,.82+ae*.15,.08),ne.userData={isCoffeeSteam:!0},it.add(ne)}}else if(Be.type==="cooler"){const Tt=new Xn(.2,.2,.7,12),j=new We(Tt,ke);j.position.set(0,.35,0),j.castShadow=!0,j.receiveShadow=!0,it.add(j);const lt=new Xn(.18,.18,.46,12),Xe=new Fn({color:3718648,transparent:!0,opacity:.65,roughness:0,metalness:.3}),tt=new We(lt,Xe);tt.position.set(0,.93,0),tt.castShadow=!0,it.add(tt)}else if(Be.type==="couch"){const Tt=new ln(1.6,.12,.72),j=new We(Tt,Ze);j.position.set(0,.08,0),j.castShadow=!0,it.add(j);const lt=new ln(.1,.1,.1);[[-.7,-.3],[.7,-.3],[-.7,.3],[.7,.3]].forEach(G=>{const q=new We(lt,ke);q.position.set(G[0],.01,G[1]),q.castShadow=!0,it.add(q)});const tt=new ln(1.5,.22,.65),Se=new Fn({color:1013358,roughness:.9}),Ae=new We(tt,Se);Ae.position.set(0,.22,.01),Ae.castShadow=!0,it.add(Ae);const R=new ln(1.5,.4,.12),x=new We(R,Se);x.position.set(0,.48,-.27),x.castShadow=!0,it.add(x)}}),r.forEach(Be=>{var Cn;const qe=W(Be.id,Be.name),at=new ui;at.name=`agent-${Be.id}`,at.userData={isAgent:!0,agentId:Be.id};const it=Be.gridPosition.x,Tt=Be.gridPosition.z;at.position.set((it-Te)*Ce,0,(Tt-Te)*Ce),H.add(at);const j=new Fn({color:qe.trouserColor,roughness:.8}),lt=new We(new ln(.08,.28,.08),j);lt.name="left-leg",lt.position.set(-.065,.14,0),lt.castShadow=!0,at.add(lt);const Xe=new We(new ln(.08,.28,.08),j);Xe.name="right-leg",Xe.position.set(.065,.14,0),Xe.castShadow=!0,at.add(Xe);const tt=new Fn({color:qe.skin,roughness:.65}),Se=new Fn({color:qe.clothesColor,roughness:.5}),Ae=new ui;Ae.name="torso",Ae.position.set(0,.45,0),at.add(Ae);let R;if(Be.gender==="female"){const Wt=new Xn(.14,.08,.32,24);R=new We(Wt,Se),R.castShadow=!0,R.receiveShadow=!0,Ae.add(R);const gt=new We(new Ln(.14,24,12,0,Math.PI*2,0,Math.PI/2),Se);gt.position.y=.16,gt.castShadow=!0,gt.receiveShadow=!0,Ae.add(gt);const St=new We(new Ln(.08,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),Se);St.position.y=-.16,St.castShadow=!0,St.receiveShadow=!0,Ae.add(St)}else{const Wt=new Xn(.13,.13,.28,24);R=new We(Wt,Se),R.castShadow=!0,R.receiveShadow=!0,Ae.add(R);const gt=new We(new Ln(.13,24,12,0,Math.PI*2,0,Math.PI/2),Se);gt.position.y=.14,gt.castShadow=!0,gt.receiveShadow=!0,Ae.add(gt);const St=new We(new Ln(.13,24,12,0,Math.PI*2,Math.PI/2,Math.PI/2),Se);St.position.y=-.14,St.castShadow=!0,St.receiveShadow=!0,Ae.add(St)}const G=new ln(.11,.08,.015),q=new Fn({color:16777215}),ae=new We(G,q);ae.position.set(0,.14,.08),Ae.add(ae);const _e=new ln(.026,.14,.005),De=new Fn({color:14251782}),ne=new We(_e,De);ne.position.set(0,.07,.09),Ae.add(ne);const le=new ui;le.name="left-arm",le.position.set(-.18,.48,0),le.rotation.z=.1,at.add(le);const Ue=new We(new Xn(.038,.032,.22,12),Se);Ue.position.set(0,-.11,0),Ue.castShadow=!0,le.add(Ue);const Fe=new We(new Ln(.038,12,12),Se);Fe.position.set(0,0,0),Fe.castShadow=!0,le.add(Fe);const ze=new We(new Ln(.038,16,16),tt);ze.position.set(0,-.22,0),ze.castShadow=!0,le.add(ze);const Oe=new ui;Oe.name="right-arm",Oe.position.set(.18,.48,0),Oe.rotation.z=-.1,at.add(Oe);const dt=new We(new Xn(.038,.032,.22,12),Se);dt.position.set(0,-.11,0),dt.castShadow=!0,Oe.add(dt);const ct=new We(new Ln(.038,12,12),Se);ct.position.set(0,0,0),ct.castShadow=!0,Oe.add(ct);const vt=new We(new Ln(.038,16,16),tt);vt.position.set(0,-.22,0),vt.castShadow=!0,Oe.add(vt);const Y=new Xn(.045,.045,.08,10),Le=new We(Y,tt);Le.position.set(0,.66,0),at.add(Le);const ve=new Ln(.14,16,16),Ie=new We(ve,tt);Ie.position.set(0,.81,0),Ie.castShadow=!0,at.add(Ie);const Pe=new Ln(.018,8,8),Ne=new Ua({color:657930}),Ke=new We(Pe,Ne);Ke.position.set(-.045,.02,.115),Ie.add(Ke);const ut=new We(Pe,Ne);ut.position.set(.045,.02,.115),Ie.add(ut);const It=new Fn({color:qe.hairColor,roughness:.75});if(qe.hairStyle===0)for(let Wt=0;Wt<6;Wt++){const gt=new We(new Ep(.03,.1,4),It);gt.rotation.x=-.5+Math.random()*.3,gt.rotation.y=Math.random()*Math.PI,gt.position.set(-.07+Math.random()*.14,.12,-.05+Math.random()*.1),Ie.add(gt)}else if(qe.hairStyle===1){const Wt=new We(new Ln(.15,12,12),It);Wt.position.set(0,.04,-.02),Wt.scale.set(1.02,.9,1.05),Ie.add(Wt);const gt=new We(new Xn(.035,.01,.28,8),It);gt.position.set(0,-.12,-.155),gt.rotation.x=.45,Ie.add(gt)}else if(qe.hairStyle===2){const Wt=new We(new ln(.24,.06,.22),It);Wt.position.set(0,.11,-.01),Ie.add(Wt)}else if(qe.hairStyle===3){const Wt=new We(new Ln(.15,10,10),It);Wt.position.set(0,.03,-.02),Ie.add(Wt);for(let gt=0;gt<10;gt++){const St=new We(new Ln(.048,8,8),It);St.position.set(-.11+Math.random()*.22,.08+Math.random()*.06,-.08+Math.random()*.14),Ie.add(St)}}else{const Wt=new We(new Ln(.152,14,14),It);Wt.position.set(0,.02,-.01),Ie.add(Wt);const gt=new We(new ln(.04,.16,.14),It);gt.position.set(-.13,-.03,.04),Ie.add(gt);const St=new We(new ln(.04,.16,.14),It);St.position.set(.13,-.03,.04),Ie.add(St)}if(Be.id===c||Be.id===c){const Wt=new Tp(.24,.28,16),gt=new Ua({color:Be.id===c?2278750:16096779,side:ta}),St=new We(Wt,gt);St.name="halo-ring",St.position.set(0,1.15,0),St.rotation.x=Math.PI/2,at.add(St);const gn=new dM(Be.id===c?2278750:16096779,.85,1.5);gn.color.setHex(Be.id===c?2278750:16096779),gn.name="halo-light",gn.position.set(0,1,0),at.add(gn)}const Rt=document.createElement("canvas");Rt.width=160,Rt.height=80;const Vt=Rt.getContext("2d");Vt.fillStyle="rgba(11, 15, 30, 0.85)",Vt.beginPath(),Vt.roundRect(4,4,152,72,8),Vt.fill(),Vt.strokeStyle=Be.id===c?"#22c55e":Be.id===c?"#ffffff":"#4f46e5",Vt.lineWidth=2.5,Vt.stroke(),Vt.fillStyle="#ffffff",Vt.font="bold 15px Arial, sans-serif",Vt.textAlign="center",Vt.fillText(Be.name.split(" ")[0],80,32),Vt.fillStyle=Be.id===c?"#4ade80":"#94a3b8",Vt.font="bold 9px monospace",Vt.fillText(Be.designation.length>20?((Cn=Be.designation.match(/.{1,14}/g))==null?void 0:Cn[0])+"..":Be.designation,80,55);const Gn=new Q1(Rt),di=new hv({map:Gn,transparent:!0,depthTest:!1}),mn=new j1(di);mn.name=`ag-label-${Be.id}`,mn.position.set((it-Te)*Ce,1.62,(Tt-Te)*Ce),mn.scale.set(1.5,.75,1),H.add(mn)}),l.length>0){const Be=l[l.length-1];if(Be.delegateId&&Be.senderId){const qe=r.find(it=>it.id===Be.senderId),at=r.find(it=>it.id===Be.delegateId);if(qe&&at){const it=(qe.gridPosition.x-Te)*Ce,Tt=(qe.gridPosition.z-Te)*Ce,j=(at.gridPosition.x-Te)*Ce,lt=(at.gridPosition.z-Te)*Ce,Xe=new $(it,.75,Tt),tt=new $(j,.75,lt),Se=Xe.distanceTo(tt),Ae=Math.max(1.5,Se*.45),R=new $().addVectors(Xe,tt).multiplyScalar(.5);R.y+=Ae;const x=new iM(Xe,R,tt),G=x.getPoints(24),q=new $n().setFromPoints(G),ae=new Mp({color:s==="matrix"?2278750:8490232,transparent:!0,opacity:.6}),_e=new mv(q,ae);H.add(_e);const De=new Ln(.1,12,12),ne=new Ua({color:s==="matrix"?2278750:16498468,toneMapped:!1}),le=new We(De,ne);le.name="delegation-pulsar",le.userData={curve:x},H.add(le)}}}},[r,e,i,s,l,c]);const J=()=>{T.current&&B.current&&(T.current.position.set(12,11,16),B.current.target.set(0,0,0),B.current.update())},me=s==="matrix";return w.jsxs("div",{ref:d,className:"relative w-full h-[525px] bg-[#0c0e18] rounded-2xl overflow-hidden border border-slate-900/50 flex flex-col justify-between shadow-inner",children:[w.jsxs("div",{className:"absolute top-3 left-4 z-10 flex items-center gap-1.5 p-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/15 shadow-xl",children:[w.jsx("span",{className:"text-[8px] font-extrabold uppercase text-[#6366f1] px-2 py-0.5 border-r border-white/10 tracking-widest font-mono",children:"WebGL View"}),w.jsxs("p",{className:"text-[10px] text-slate-300 font-mono px-1 flex items-center gap-1",children:[w.jsx(MS,{className:"w-3 h-3 text-emerald-400 shrink-0"}),w.jsx("span",{children:"DRAG LEFT TO ORBIT • DRAG RIGHT TO PAN"})]})]}),S&&w.jsx("div",{className:"absolute bottom-16 right-4 z-10 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-slate-900/90 text-[10px] text-indigo-300 shadow-2xl animate-bounce font-mono",children:S}),w.jsxs("div",{className:"absolute top-3 right-4 z-10 flex items-center gap-1.5",children:[w.jsx("button",{onClick:()=>O(te=>!te),className:`px-2.5 py-1 text-[8px] font-mono tracking-wider border rounded-lg transition-all uppercase font-bold ${A?"bg-emerald-600/25 text-emerald-300 border-emerald-500/40":"text-slate-500 border-slate-800 hover:text-white"}`,id:"toggle-roaming-agents",title:"Toggle automatic random roaming / walks for office agents",children:A?"Walks: Random pacing":"Walks: Focus at desks"}),w.jsx("button",{onClick:()=>M(te=>!te),className:`px-2.5 py-1 text-[8px] font-mono tracking-wider border rounded-lg transition-all uppercase font-bold ${g?"bg-indigo-600/25 text-indigo-300 border-indigo-500/40":"text-slate-500 border-slate-800 hover:text-white"}`,id:"toggle-cinematic-fx",title:"Toggle soft drifting cinematic rotate camera effect",children:g?"Cinematic: Slow Drift":"Cinematic: Static"}),w.jsx("button",{onClick:()=>b(te=>!te),className:"p-1.5 bg-slate-900/80 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-colors",title:"Toggle guidelines description",id:"toggle-canvas-helpers",children:w.jsx(B_,{className:"w-3.5 h-3.5"})})]}),w.jsx("canvas",{ref:p,className:"w-full h-full block bg-[#0c0e18]",id:"isometric-viewport-canvas"}),w.jsx("div",{className:"absolute bottom-4 left-4 z-10 flex items-center gap-1.5",children:w.jsxs("button",{onClick:J,className:"px-3 py-1.5 bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:border-slate-700 text-[9px] uppercase font-bold rounded-lg flex items-center gap-1 shadow-lg transition-all",title:"Reset zoom and rotation target",id:"hud-reset-cam",children:[w.jsx(vS,{className:"w-2.5 h-2.5 animate-spin-slow"}),"Center Camera"]})}),y&&w.jsxs("div",{className:`absolute bottom-4 right-4 p-3 rounded-xl border max-w-xs transition-opacity z-10 shadow-2xl ${me?"border-green-500/20 bg-black/95 text-green-400 font-mono text-[9px]":"border-white/10 bg-slate-950/95 text-slate-300 text-[10px]"}`,children:[w.jsxs("div",{className:"flex items-center gap-1 text-white font-extrabold uppercase text-[9px] tracking-wider mb-1",children:[w.jsx(k_,{className:"w-3.5 h-3.5 text-[#fbbf24] animate-pulse"}),w.jsx("span",{children:"WebGL Real-Time Workspace:"})]}),w.jsx("p",{className:"leading-relaxed opacity-85",children:"Cute 3D avatars on task chairs working dynamically! Every loop, watch golden delegation packets sail along active parabolic curves between coworker nodes!"})]})]})}const I_=[{hex:"#60a5fa",label:"Sky Blue"},{hex:"#34d399",label:"Mint Green"},{hex:"#f472b6",label:"Coral Pink"},{hex:"#fbbf24",label:"Warm Amber"},{hex:"#a78bfa",label:"Soft Purple"},{hex:"#f87171",label:"Vibrant Coral"}];function Cw({agents:r,selectedAgentId:e,onUpdateAgent:i,onAddAgent:s,onDeleteAgent:l,timeMode:c,isBusy:d=!1}){const p=r.find(I=>I.id===e),[m,h]=je.useState(""),[y,b]=je.useState(""),[g,M]=je.useState(""),[A,O]=je.useState("#60a5fa"),[S,_]=je.useState("male"),[N,P]=je.useState(!1),[F,W]=je.useState(""),[z,k]=je.useState(""),[T,B]=je.useState(""),[Q,V]=je.useState("#60a5fa"),[J,me]=je.useState("male");je.useEffect(()=>{p&&(h(p.name),b(p.designation),M(p.systemPrompt),O(p.avatarColor||"#60a5fa"),_(p.gender||"male"))},[p]);const te=I=>{I.preventDefault(),p&&i({...p,name:m,designation:y,systemPrompt:g,avatarColor:A,gender:S})},H=I=>{if(I.preventDefault(),!F||!z)return;const fe=Math.floor(Math.random()*5)+1,de=Math.floor(Math.random()*5)+1;s({id:`agent-custom-${Date.now()}`,name:F,designation:z,systemPrompt:T||"You are an AI specialist focused on high performance delivery.",gridPosition:{x:fe,z:de},avatarColor:Q,gender:J}),W(""),k(""),B(""),V("#60a5fa"),me("male"),P(!1)},E=c==="matrix",L=c==="night";return w.jsxs("div",{className:`p-5 rounded-xl border h-full flex flex-col justify-between transition-all duration-300 ${E?"border-green-500/20 bg-slate-950/95 text-green-300 shadow-green-500/5 shadow-md":L?"border-slate-800 bg-[#0f1322] text-slate-100 shadow-indigo-500/5 shadow-md":"border-slate-200 bg-white text-slate-800 shadow-sm"}`,id:"agent-workspace-pod-builder",children:[w.jsxs("div",{children:[w.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2 border-b border-dashed border-slate-700/50",children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx(Tx,{className:`w-4 h-4 ${E?"text-green-400 animate-pulse":"text-indigo-400"}`}),w.jsx("h2",{className:`font-semibold tracking-wide text-xs uppercase ${E?"font-mono":""}`,children:"Pod Construction Studio"})]}),w.jsxs("button",{onClick:()=>!d&&P(!N),disabled:d,className:`flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium rounded-md border tracking-wider transition-colors uppercase ${d?"opacity-50 cursor-not-allowed border-slate-700/40 text-slate-500 bg-transparent":E?"border-green-500/30 text-green-400 hover:bg-green-500/10 font-mono":L?"border-indigo-600 bg-indigo-950/40 text-indigo-200 hover:bg-indigo-900/50":"border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200"}`,id:"btn-add-agent-pod",children:[d?w.jsx($r,{className:"w-3 h-3"}):w.jsx(xS,{className:"w-3.5 h-3.5"}),"New Worker Node"]})]}),N&&!d?w.jsxs("form",{onSubmit:H,className:`space-y-3 mb-4 p-3.5 rounded-lg border border-dashed ${E?"bg-black border-green-500/30 text-green-400":L?"bg-slate-900/40 border-slate-700/50 text-slate-100":"bg-slate-50 border-slate-200 text-slate-900"}`,children:[w.jsx("h3",{className:`text-xs font-bold uppercase tracking-wider ${E?"text-green-400 font-mono":L?"text-indigo-400":"text-indigo-900"}`,children:"Spawn Dynamic Agent"}),w.jsxs("div",{children:[w.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${E?"text-green-500 font-mono":L?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Worker Calling Name"}),w.jsx("input",{type:"text",required:!0,placeholder:"e.g. Liam (Lead Designer)",value:F,onChange:I=>W(I.target.value),className:`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 ${E?"bg-black border-green-500/30 text-green-400 font-mono":L?"bg-slate-950/80 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900 font-medium"}`})]}),w.jsxs("div",{children:[w.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${E?"text-green-500 font-mono":L?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Corporate Designation"}),w.jsx("input",{type:"text",required:!0,placeholder:"e.g. UX Architect",value:z,onChange:I=>k(I.target.value),className:`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 ${E?"bg-black border-green-500/30 text-green-400 font-mono":L?"bg-slate-950/80 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900 font-medium"}`})]}),w.jsxs("div",{children:[w.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${E?"text-green-500 font-mono":L?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Avatar Color Theme"}),w.jsx("div",{className:"flex gap-2 py-1 items-center",children:I_.map(I=>w.jsx("button",{type:"button",onClick:()=>V(I.hex),className:`w-6 h-6 rounded-full border transition-transform ${Q===I.hex?"scale-125 border-white ring-2 ring-indigo-500":"border-transparent"}`,style:{backgroundColor:I.hex},title:I.label},I.hex))})]}),w.jsxs("div",{children:[w.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${E?"text-green-500 font-mono":L?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Avatar Gender (Body Style)"}),w.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[w.jsx("button",{type:"button",onClick:()=>me("male"),className:`py-1.5 px-2.5 text-[10px] rounded border transition-all font-bold uppercase ${J==="male"?E?"bg-green-600 border-green-500 text-black font-mono":"bg-indigo-600 border-indigo-500 text-white shadow-sm":E?"bg-black text-green-500 border-green-500/30":L?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`,children:"♂ Male"}),w.jsx("button",{type:"button",onClick:()=>me("female"),className:`py-1.5 px-2.5 text-[10px] rounded border transition-all font-bold uppercase ${J==="female"?E?"bg-green-600 border-green-500 text-black font-mono":"bg-indigo-600 border-indigo-500 text-white shadow-sm":E?"bg-black text-green-500 border-green-500/30":L?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-white text-slate-700 border-slate-200 hover:bg-slate-50"}`,children:"♀ Female"})]})]}),w.jsxs("div",{children:[w.jsx("label",{className:`block text-[10px] uppercase font-bold mb-1 ${E?"text-green-500 font-mono":L?"text-slate-400":"text-slate-800 font-extrabold"}`,children:"Core System Directive"}),w.jsx("textarea",{placeholder:"List their operational rules...",rows:3,value:T,onChange:I=>B(I.target.value),className:`w-full px-2.5 py-1.5 text-xs rounded border focus:outline-none focus:border-indigo-500 font-mono ${E?"bg-black border-green-500/30 text-green-400":L?"bg-slate-950/80 border-slate-700 text-white":"bg-white border-slate-200 text-slate-900 font-medium"}`})]}),w.jsxs("div",{className:"flex gap-2 justify-end pt-1",children:[w.jsx("button",{type:"button",onClick:()=>P(!1),className:`px-2 py-1 text-[10px] rounded hover:underline ${E?"text-green-400":L?"text-slate-400":"text-slate-600 font-extrabold"}`,children:"Cancel"}),w.jsx("button",{type:"submit",className:"px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600 rounded hover:bg-indigo-500",children:"Instantiate Pod"})]})]}):null,p?w.jsxs("form",{onSubmit:te,className:"space-y-4",children:[d?w.jsxs("div",{className:`p-3 rounded-lg flex items-start gap-2.5 border ${E?"bg-black border-red-500/25 text-red-500":L?"bg-red-950/30 border border-red-500/25 text-red-300":"bg-red-50 border border-red-300 text-slate-950 font-extrabold"}`,children:[w.jsx($r,{className:`w-4 h-4 shrink-0 mt-0.5 ${E||L?"text-red-400":"text-black"}`}),w.jsxs("div",{className:"text-[11px] leading-relaxed",children:[w.jsx("span",{className:`font-black uppercase tracking-wider text-[10px] block mb-0.5 ${E||L?"text-red-450":"text-black"}`,children:"Neural Link Locked"}),w.jsx("span",{className:`${!E&&!L?"text-black font-extrabold":""}`,children:"Cannot modify or remove employee directives while task is compiling or swarm is actively executing. Stop or wait for loop completion."})]})]}):w.jsxs("div",{className:`p-3.5 rounded-lg flex items-start gap-2.5 border ${E?"bg-green-950/10 border-green-500/20 text-green-400":L?"bg-indigo-500/5 border-indigo-500/10 text-slate-300":"bg-slate-100 border-slate-200 text-slate-955"}`,children:[w.jsx(wS,{className:`w-4 h-4 shrink-0 mt-0.5 ${E?"text-green-500":"text-emerald-600"}`}),w.jsxs("div",{className:"text-[11px] leading-relaxed",children:["You are designing ",w.jsx("span",{className:`font-bold ${E?"text-green-400":L?"text-indigo-400":"text-indigo-900 font-extrabold"}`,children:p.name}),"'s active active pod. Define directives securely below, or drag their terminal desk directly inside the grid view."]})]}),w.jsxs("div",{className:"space-y-3",children:[w.jsxs("div",{children:[w.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${E?"text-green-500":L?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Node Agent Name ",d&&"🔒"]}),w.jsx("input",{type:"text",required:!0,disabled:d,value:m,onChange:I=>h(I.target.value),className:`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:border-indigo-500 ${d?"bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed":E?"bg-black border-green-500/30 text-green-400 font-mono":L?"bg-slate-950/90 border-slate-700 text-white":"bg-white border-slate-200 text-slate-950 font-bold"}`,id:"inp-selected-agent-name"})]}),w.jsxs("div",{children:[w.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${E?"text-green-500":L?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Official Role Designation ",d&&"🔒"]}),w.jsx("input",{type:"text",required:!0,disabled:d,value:y,onChange:I=>b(I.target.value),className:`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:border-indigo-500 ${d?"bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed":E?"bg-black border-green-500/30 text-green-400 font-mono":L?"bg-slate-950/90 border-slate-700 text-white":"bg-white border-slate-200 text-slate-950 font-bold"}`,id:"inp-selected-agent-desig"})]}),w.jsxs("div",{children:[w.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${E?"text-green-500":L?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Avatar Color ",d&&"🔒"]}),w.jsx("div",{className:"flex gap-2 py-1 items-center",children:I_.map(I=>w.jsx("button",{type:"button",disabled:d,onClick:()=>O(I.hex),className:`w-6 h-6 rounded-full border transition-transform ${d?"cursor-not-allowed opacity-50":""} ${A===I.hex?"scale-125 border-slate-200 ring-2 ring-indigo-500":"border-transparent"}`,style:{backgroundColor:I.hex},title:I.label},I.hex))})]}),w.jsxs("div",{children:[w.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${E?"text-green-500":L?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Avatar Gender (Body Style) ",d&&"🔒"]}),w.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[w.jsx("button",{type:"button",disabled:d,onClick:()=>_("male"),className:`py-1.5 px-3 text-xs rounded border transition-all font-semibold uppercase ${d?"cursor-not-allowed opacity-50":""} ${S==="male"?E?"bg-green-600 text-black border-green-500":"bg-indigo-600 text-white border-indigo-500 shadow":E?"bg-black text-green-500 border-green-500/30 hover:bg-green-500/10":L?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 text-slate-805"}`,children:"♂ Male"}),w.jsx("button",{type:"button",disabled:d,onClick:()=>_("female"),className:`py-1.5 px-3 text-xs rounded border transition-all font-semibold uppercase ${d?"cursor-not-allowed opacity-50":""} ${S==="female"?E?"bg-green-600 text-black border-green-500":"bg-indigo-600 text-white border-indigo-500 shadow":E?"bg-black text-green-500 border-green-500/30 hover:bg-green-500/10":L?"bg-slate-950 text-slate-400 border-slate-700 hover:text-white":"bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"}`,children:"♀ Female"})]})]}),w.jsxs("div",{children:[w.jsxs("label",{className:`block text-[10px] uppercase font-extrabold mb-1 ${E?"text-green-500":L?"text-slate-400":"text-slate-900 text-black"} ${d?"opacity-60":""}`,children:["Core System Directive / Prompts Instructions ",d&&"🔒"]}),w.jsx("textarea",{required:!0,disabled:d,rows:6,value:g,onChange:I=>M(I.target.value),className:`w-full p-2.5 text-xs rounded border focus:outline-none focus:border-indigo-500 font-mono leading-relaxed ${d?"bg-slate-900/60 border-slate-800 text-slate-500 cursor-not-allowed":E?"bg-black border-green-500/30 text-green-400":L?"bg-slate-950/90 border-slate-700 text-white":"bg-white border-slate-200 text-slate-950 font-bold"}`,id:"inp-selected-agent-prompt"})]})]}),w.jsxs("div",{className:"flex gap-2 items-center justify-between pt-1",children:[w.jsxs("button",{type:"button",disabled:r.length<=1||d,onClick:()=>l(p.id),className:`flex items-center gap-1.5 px-3 py-2 rounded-md border text-[11px] font-bold uppercase transition-colors ${d||r.length<=1?"opacity-40 cursor-not-allowed border-slate-700 text-slate-550 bg-transparent":E?"border-red-500/30 text-red-400 hover:bg-red-500/10 font-mono":"border-red-600/30 text-red-400 hover:bg-red-600/10 bg-transparent"}`,id:"btn-delete-agent-pod",children:[d?w.jsx($r,{className:"w-3 h-3"}):w.jsx(V_,{className:"w-3.5 h-3.5"}),"Deconstruct Pod"]}),w.jsxs("button",{type:"submit",disabled:d,className:`flex items-center gap-1.5 px-4 py-2 rounded-md font-bold text-[11px] uppercase transition-all ${d?"opacity-50 cursor-not-allowed bg-slate-800 border-slate-755 text-slate-400":E?"bg-green-600 text-black hover:bg-green-400 font-mono":"bg-indigo-600 text-white hover:bg-indigo-500"}`,id:"btn-save-agent-pod",children:[d?w.jsx($r,{className:"w-3 h-3"}):w.jsx(H_,{className:"w-3.5 h-3.5"}),"Update Directives"]})]})]}):w.jsxs("div",{className:"text-center py-16 flex flex-col items-center justify-center",children:[w.jsx(Tx,{className:`w-8 h-8 mb-2 animate-bounce ${E?"text-green-500":"text-indigo-500"}`}),w.jsx("p",{className:`text-xs font-black ${E?"text-green-400 font-mono":L?"text-slate-300":"text-black"}`,children:"No worker node is selected."}),w.jsx("p",{className:`text-[11px] max-w-xs mt-1 leading-snug ${E?"text-green-500 font-mono":L?"text-slate-400":"text-slate-950 font-extrabold"}`,children:"Click any holographic terminal desk in the Canvas above to inspect and edit details."})]})]}),w.jsxs("div",{className:"text-[10px] text-slate-500 border-t border-dashed border-slate-800/60 pt-3 mt-4 text-center tracking-wide uppercase font-mono",children:["Active Node Register: ",r.length," Pods Online"]})]})}function Dw({text:r,timeMode:e="day"}){const i=e==="matrix",s=e==="night",l=i?"text-green-400 font-mono text-xs font-bold mt-3 mb-1 uppercase tracking-wide":s?"text-indigo-400 text-xs font-bold mt-3 mb-1 uppercase tracking-wide":"text-indigo-950 font-black text-xs mt-3 mb-1 uppercase tracking-wide",c=i?"text-green-300 font-mono text-sm font-extrabold mt-4 mb-2 uppercase tracking-wider":s?"text-indigo-300 text-sm font-extrabold mt-4 mb-2 uppercase tracking-wider":"text-indigo-900 font-black text-sm mt-4 mb-2 uppercase tracking-wider",d=i?"text-white font-mono text-base font-black mt-5 mb-3 border-b pb-1 border-green-500/20":s?"text-white text-base font-black mt-5 mb-3 border-b pb-1 border-indigo-500/20":"text-slate-950 text-base font-black mt-5 mb-3 border-b pb-1 border-slate-200",p=i?"border-l-4 border-green-500 bg-green-950/20 px-3 py-1.5 rounded text-green-300 italic my-2 font-mono text-[11px]":s?"border-l-4 border-indigo-500 bg-indigo-950/20 px-3 py-1.5 rounded text-slate-300 italic my-2 text-[11px]":"border-l-4 border-indigo-600 bg-indigo-50/60 px-3 py-1.5 rounded text-slate-900 font-medium italic my-2 text-[11px]",m=i?"text-green-500 font-bold":s?"text-indigo-400":"text-indigo-800 font-black",h=r.split(`
`);return w.jsx("div",{className:"space-y-2 text-xs leading-relaxed font-sans",children:h.map((y,b)=>{const g=y.trim();if(g.startsWith("### "))return w.jsx("h4",{className:l,children:g.substring(4)},b);if(g.startsWith("## "))return w.jsx("h3",{className:c,children:g.substring(3)},b);if(g.startsWith("# "))return w.jsx("h2",{className:d,children:g.substring(2)},b);if(g.startsWith("> "))return w.jsx("blockquote",{className:p,children:g.substring(2)},b);if(g.startsWith("```"))return null;if(g.startsWith("- ")||g.startsWith("* ")){const M=g.substring(2);return w.jsxs("div",{className:"flex items-start gap-2 pl-3",children:[w.jsx("span",{className:m,children:"•"}),w.jsx("span",{children:z_(M,e)})]},b)}return g?w.jsx("p",{children:z_(y,e)},b):w.jsx("div",{className:"h-2"},b)})})}function z_(r,e){const i=[];let s="",l=0;const c=e==="matrix",d=e==="night",p=c?"font-bold text-green-400 font-mono":d?"font-bold text-teal-400":"font-black text-indigo-900",m=c?"bg-black border border-green-500/25 px-1 py-0.5 rounded text-[11px] text-green-400 font-mono":d?"bg-slate-950 px-1 py-0.5 rounded text-[11px] text-green-400 font-mono":"bg-slate-200 border border-slate-300 px-1 py-0.5 rounded text-[11px] text-slate-950 font-semibold font-mono";for(;l<r.length;)if(r.substring(l,l+2)==="**"){s&&(i.push(s),s="");const h=r.indexOf("**",l+2);h!==-1?(i.push(w.jsx("strong",{className:p,children:r.substring(l+2,h)},l)),l=h+2):(s+="**",l+=2)}else if(r[l]==="`"){s&&(i.push(s),s="");const h=r.indexOf("`",l+1);h!==-1?(i.push(w.jsx("code",{className:m,children:r.substring(l+1,h)},l)),l=h+1):(s+="`",l+=1)}else s+=r[l],l++;return s&&i.push(s),i}function Nw(){const[r,e]=je.useState("day"),[i,s]=je.useState(12),[l,c]=je.useState("3d"),[d,p]=je.useState(!1),[m,h]=je.useState(!1),[y,b]=je.useState(!1),[g,M]=je.useState(()=>localStorage.getItem("custom_gemini_api_key")||""),[A,O]=je.useState(()=>{const x=localStorage.getItem("custom_gemini_model");return x==="gemini-3.5-flash"||x==="gemini-3.1-pro-preview"||x==="gemini-3.1-flash-lite"?x:"gemini-3.5-flash"});je.useEffect(()=>{localStorage.setItem("custom_gemini_api_key",g)},[g]),je.useEffect(()=>{localStorage.setItem("custom_gemini_model",A)},[A]);const[S,_]=je.useState([]),[N,P]=je.useState("startup-launcher"),[F,W]=je.useState(!1),[z,k]=je.useState(""),[T,B]=je.useState(""),[Q,V]=je.useState(""),[J,me]=je.useState(null),[te,H]=je.useState([]),[E,L]=je.useState(!1),[I,fe]=je.useState(null),[de,U]=je.useState(0),[Z,be]=je.useState(null),Ce=je.useRef(null);je.useEffect(()=>{const x=localStorage.getItem("agent_workspace_teams_system");if(x)try{const G=JSON.parse(x);if(G.teams&&Array.isArray(G.teams)&&G.teams.length>0){_(G.teams),P(G.activeTeamId||"startup-launcher"),s(G.gridSize||12),e(G.timeMode||"day"),G.history&&H(G.history);return}}catch(G){console.error("Failed to restore teams from localStorage",G)}_(Ud),P(Ud[0].id)},[]);const Te=(x,G,q,ae,_e)=>{const De={teams:x,activeTeamId:G,history:q,gridSize:ae,timeMode:_e};localStorage.setItem("agent_workspace_teams_system",JSON.stringify(De))},se=S.find(x=>x.id===N)||S[0]||Ud[0],xe=(se==null?void 0:se.agents)||[],Ee=(se==null?void 0:se.decorItems)||[],Re=(se==null?void 0:se.objective)||"",Ze=E||xe.some(x=>x.state!=="idle");je.useEffect(()=>{xe.length>0?(me(xe[0].id),fe(xe[0].id)):(me(null),fe(null))},[N]);const ke=x=>{_(G=>G.map(q=>({...q,agents:q.agents.map(ae=>({...ae,state:"idle"}))}))),P(x),L(!1),be(null),Te(S,x,te,i,r)},yt=x=>{if(x.preventDefault(),!z.trim()||!T.trim())return;if(S.length>=10){alert("Operational Cap Reached: Max 10 custom agencies allowed.");return}const G=`team-custom-${Date.now()}`,q={id:G,name:z,description:Q||"Custom configured multi-agent syndicate.",objective:T,decorItems:[],agents:[{id:`ag-boss-${Date.now()}`,name:"Supervisor Alpha",designation:"Project Coordinator",systemPrompt:"You are the manager coordinator. Delegate tasks and summarize active deliverables cleanly.",gridPosition:{x:Math.floor(i/2),z:Math.floor(i/2)},avatarColor:"#60a5fa",state:"idle"}]},ae=[...S,q];_(ae),P(G),W(!1),k(""),B(""),V(""),Te(ae,G,te,i,r)},mt=x=>{if(S.length<=1){alert("Failed operational cleanup: You must preserve at least 1 active team.");return}const G=S.filter(ae=>ae.id!==x);_(G);const q=G[0].id;P(q),L(!1),Te(G,q,te,i,r)},xt=x=>{const G=Math.max(10,Math.min(30,x));s(G);const q=S.map(ae=>{const _e=ae.agents.map(ne=>{const le=Math.min(G-1,ne.gridPosition.x),Ue=Math.min(G-1,ne.gridPosition.z);return{...ne,gridPosition:{x:le,z:Ue}}}),De=(ae.decorItems||[]).map(ne=>{const le=Math.min(G-1,ne.x),Ue=Math.min(G-1,ne.z);return{...ne,x:le,z:Ue}});return{...ae,agents:_e,decorItems:De}});_(q),Te(q,N,te,G,r)},Be=(x,G,q)=>{const ae=S.map(_e=>{if(_e.id===N){const De=_e.agents.map(ne=>ne.id===x?{...ne,gridPosition:{x:G,z:q}}:ne);return{..._e,agents:De}}return _e});_(ae),Te(ae,N,te,i,r)},qe=x=>{const G=S.map(q=>{if(q.id===N){const ae=q.decorItems||[];return{...q,decorItems:[...ae,x]}}return q});_(G),Te(G,N,te,i,r)},at=x=>{const G=S.map(q=>{if(q.id===N){const ae=q.decorItems||[];return{...q,decorItems:ae.filter(_e=>_e.id!==x)}}return q});_(G),Te(G,N,te,i,r)},it=x=>{if(Ze){alert("🔒 Security Lockdown: Cannot modify employee configuration or directives while task execution is active.");return}const G=S.map(q=>{if(q.id===N){const ae=q.agents.map(_e=>_e.id===x.id?x:_e);return{...q,agents:ae}}return q});_(G),Te(G,N,te,i,r)},Tt=x=>{if(Ze){alert("🔒 Security Lockdown: Cannot instantiate new worker nodes while task execution is active.");return}if(xe.length>=15){alert("Operational Cap Reached: Max 15 agents allowed per team.");return}const G={...x,state:"idle"},q=S.map(ae=>ae.id===N?{...ae,agents:[...ae.agents,G]}:ae);_(q),me(G.id),Te(q,N,te,i,r)},j=x=>{var _e,De;if(Ze){alert("🔒 Security Lockdown: Cannot deconstruct or remove employees while task execution is active.");return}if(xe.length<=1){alert("Action Aborted: A team must have at least 1 agent.");return}const G=S.map(ne=>{if(ne.id===N){const le=ne.agents.filter(Ue=>Ue.id!==x);return{...ne,agents:le}}return ne});_(G);const q=G.find(ne=>ne.id===N),ae=(q==null?void 0:q.agents)||[];me(((_e=ae[0])==null?void 0:_e.id)||null),I===x&&fe(((De=ae[0])==null?void 0:De.id)||null),Te(G,N,te,i,r)},lt=x=>{const G=S.map(q=>q.id===N?{...q,objective:x}:q);_(G),Te(G,N,te,i,r)};je.useEffect(()=>{var x;(x=Ce.current)==null||x.scrollIntoView({behavior:"smooth"})},[te,E]);const Xe=async()=>{if(xe.length===0)return;const x=I||xe[0].id;be(null),_(G=>G.map(q=>{if(q.id===N){const ae=q.agents.map(_e=>({..._e,state:_e.id===x?"thinking":"idle"}));return{...q,agents:ae}}return q}));try{const G=await fetch("/api/simulate-step",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({objective:Re,currentAgentId:x,agents:xe,history:te,customApiKey:g,customModel:A})});if(!G.ok){const De=await G.json();throw new Error(De.error||"Workspace connection failure from server.")}const q=await G.json();if(q.error)throw new Error(q.error);const ae={id:`msg-${Date.now()}`,text:q.text,senderId:q.senderId,senderName:q.senderName,senderDesignation:q.senderDesignation,delegateId:q.delegateId,delegationReason:q.delegationReason,timestamp:new Date().toLocaleTimeString()},_e=[...te,ae];if(H(_e),U(De=>De+1),q.delegateId)if(xe.some(ne=>ne.id===q.delegateId))_(ne=>ne.map(le=>{if(le.id===N){const Ue=le.agents.map(Fe=>({...Fe,state:Fe.id===q.delegateId?"walking":"idle"}));return{...le,agents:Ue}}return le})),fe(q.delegateId);else{const le=(xe.findIndex(Ue=>Ue.id===x)+1)%xe.length;fe(xe[le].id)}else _(De=>De.map(ne=>{if(ne.id===N){const le=ne.agents.map(Ue=>({...Ue,state:"idle"}));return{...ne,agents:le}}return ne})),L(!1);Te(S,N,_e,i,r)}catch(G){console.error(G),be((G==null?void 0:G.message)||"Verify your API Key setting and workspace status."),L(!1),_(q=>q.map(ae=>{if(ae.id===N){const _e=ae.agents.map(De=>({...De,state:"idle"}));return{...ae,agents:_e}}return ae}))}};je.useEffect(()=>{let x=null;return E&&(x=setTimeout(()=>{Xe()},3500)),()=>clearTimeout(x)},[E,I]);const tt=()=>{const x="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify({version:"1.0.0",timeMode:r,gridSize:i,teams:S,activeTeamId:N,history:te},null,2)),G=document.createElement("a");G.setAttribute("href",x),G.setAttribute("download",`teams-blueprint-${Date.now()}.json`),document.body.appendChild(G),G.click(),G.remove()},Se=x=>{const G=new FileReader;x.target.files&&x.target.files[0]&&(G.readAsText(x.target.files[0],"UTF-8"),G.onload=q=>{var ae;try{const _e=JSON.parse((ae=q.target)==null?void 0:ae.result);_e.teams&&Array.isArray(_e.teams)&&(_(_e.teams),P(_e.activeTeamId||_e.teams[0].id),s(_e.gridSize||12),e(_e.timeMode||"day"),_e.history&&H(_e.history),alert("Workspace blueprint imported successfully!"))}catch{alert("Invalid model layout blueprint file. Make sure file structure is valid.")}})},Ae=r==="matrix",R=r==="night";return w.jsxs("div",{className:`min-h-screen font-sans flex flex-col justify-between transition-colors duration-300 ${Ae?"bg-[#040806] text-green-300 selection:bg-green-500/20":R?"bg-[#0b0d16] text-slate-200 selection:bg-indigo-500/20":"bg-[#f8f9fa] text-slate-800 selection:bg-indigo-100"}`,children:[w.jsxs("header",{className:`px-6 py-4 border-b flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${Ae?"border-green-500/15 bg-[#040806]/90":R?"border-slate-900 bg-[#0b0d16]/95":"border-slate-200 bg-white"}`,children:[w.jsxs("div",{className:"flex items-center gap-3",children:[w.jsx("div",{className:`p-1.5 rounded-lg ${Ae?"bg-green-950/40 text-green-400 border border-green-500/20":R?"bg-slate-900 border border-slate-800 text-indigo-400":"bg-slate-100 text-slate-700"}`,children:w.jsx(Ex,{className:"w-5 h-5"})}),w.jsxs("div",{children:[w.jsx("h1",{className:"text-sm font-bold tracking-tight",children:"Task Delegation Simulator"}),w.jsx("p",{className:"text-[10px] text-slate-500 font-mono",children:"3D ISOMETRIC MULTI-AGENT SWARM BLUEPRINT"})]})]}),w.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[w.jsxs("div",{className:`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[11px] font-mono ${Ae?"border-green-500/20 bg-black":"border-slate-800 bg-[#121626]/45"}`,children:[w.jsx(CS,{className:"w-3.5 h-3.5 text-indigo-400"}),w.jsxs("span",{children:["GRID: ",i,"x",i]}),w.jsx("input",{type:"range",min:10,max:30,value:i,onChange:x=>xt(Number(x.target.value)),className:"w-16 accent-indigo-500 cursor-pointer h-1"})]}),w.jsxs("div",{className:"flex items-center p-1 rounded-lg border border-slate-800/40 bg-[#12162a]/40",children:[w.jsx("button",{onClick:()=>e("day"),className:`p-1 text-slate-400 hover:text-white rounded ${r==="day"?"bg-white text-yellow-600 shadow-sm":"text-slate-400"}`,title:"Day Mode Shift",id:"time-day",children:w.jsx(OS,{className:"w-3.5 h-3.5"})}),w.jsx("button",{onClick:()=>e("night"),className:`p-1 text-slate-400 hover:text-white rounded ${r==="night"?"bg-slate-800 text-indigo-400":"text-slate-400"}`,title:"Night Mode Shift",id:"time-night",children:w.jsx(dS,{className:"w-3.5 h-3.5"})}),w.jsx("button",{onClick:()=>e("matrix"),className:`px-1.5 py-0.5 text-[9px] font-bold rounded ${r==="matrix"?"bg-green-950/80 text-green-400":"text-slate-500 font-mono"}`,title:"Cyber matrix mode",id:"time-matrix",children:"MTX"})]}),w.jsxs("div",{className:"flex items-center gap-1",children:[w.jsxs("button",{onClick:()=>h(!0),className:`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${Ae?"bg-green-500/10 text-green-300 border-green-500/40 hover:bg-green-500/20":"bg-indigo-550/15 border-indigo-500/30 text-indigo-400 hover:bg-indigo-550/25"}`,title:"Get Step-by-Step Info & Team Guide",id:"btn-help-guide",children:[w.jsx(B_,{className:"w-3.5 h-3.5"}),w.jsx("span",{className:"hidden sm:inline text-[10px] tracking-wide uppercase font-mono",children:"Guide"})]}),w.jsxs("button",{onClick:()=>b(!0),className:`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-all shadow-sm ${Ae?"bg-green-500/10 text-green-300 border-green-500/40 hover:bg-green-500/20":"bg-indigo-550/15 border-indigo-500/30 text-indigo-400 hover:bg-indigo-550/25"}`,title:"Configure API Keys & Select Gemini Model",id:"btn-llm-settings",children:[w.jsx(TS,{className:"w-3.5 h-3.5"}),w.jsx("span",{className:"hidden sm:inline text-[10px] tracking-wide uppercase font-mono",children:"Models & API Key"})]}),w.jsx("button",{onClick:tt,className:"p-1.5 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors",title:"Export blueprint configuration",id:"btn-export-json",children:w.jsx(eS,{className:"w-3.5 h-3.5"})}),w.jsxs("label",{className:"p-1.5 rounded-lg border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer",title:"Import local configuration",id:"lbl-import-json",children:[w.jsx(nS,{className:"w-3.5 h-3.5"}),w.jsx("input",{type:"file",accept:".json",onChange:Se,className:"hidden"})]})]})]})]}),w.jsxs("section",{className:`px-6 py-2.5 border-b flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 transition-colors ${Ae?"bg-black/90 border-green-500/10":R?"bg-[#101323]/50 border-slate-900":"bg-slate-100 border-slate-200"}`,children:[w.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[w.jsx("span",{className:`text-[9px] font-extrabold tracking-widest uppercase font-mono mr-1 ${Ae?"text-green-500":R?"text-slate-500":"text-slate-800 font-extrabold"}`,children:"ACTIVE SYNDICATE:"}),w.jsxs("div",{className:"flex flex-wrap gap-1",children:[S.map(x=>w.jsx("button",{onClick:()=>ke(x.id),className:`px-3 py-1 text-[11px] rounded transition-all font-bold ${N===x.id?Ae?"bg-green-500/20 text-green-400 border border-green-500/40":"bg-[#1d233d] border border-indigo-500/30 text-white shadow":Ae?"text-green-500 hover:text-green-300 border border-transparent":R?"text-slate-400 hover:text-white border border-transparent":"text-slate-700 hover:text-slate-950 hover:bg-slate-200 border border-transparent"}`,id:`team-${x.id}`,children:x.name},x.id)),S.length<10&&w.jsx("button",{onClick:()=>W(!0),className:`px-2 py-1 text-[10px] rounded font-bold border border-dashed transition-all ${Ae?"text-green-400 border-green-500/20 hover:text-green-300":R?"text-teal-400 border-teal-500/20 hover:text-teal-300":"text-teal-800 border-teal-300 bg-teal-50 hover:bg-teal-100 hover:text-teal-900"}`,id:"btn-add-team",children:"+ Create Team"})]})]}),S.length>1&&w.jsxs("button",{onClick:()=>mt(N),className:"text-[9px] uppercase font-bold text-rose-500 hover:text-rose-400 tracking-wider flex items-center gap-1 select-none",id:"btn-decon-team",children:[w.jsx(V_,{className:"w-3 h-3"}),"Delete team"]})]}),F&&w.jsx("div",{className:"fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4",children:w.jsxs("form",{onSubmit:yt,className:`w-full max-w-sm p-5 rounded-xl border ${Ae?"border-green-500/30 bg-black text-green-300":"border-slate-800 bg-[#0f111a] text-white"} shadow-2xl`,children:[w.jsxs("h3",{className:"text-xs font-extrabold uppercase tracking-widest mb-4 flex items-center gap-2",children:[w.jsx(aS,{className:"w-4 h-4 text-indigo-400"}),"Configure Custom Agency Team"]}),w.jsxs("div",{className:"space-y-3.5 text-xs",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-[9px] uppercase font-bold text-slate-500 mb-1",children:"Agency Name"}),w.jsx("input",{type:"text",required:!0,placeholder:"e.g. BioTech Diagnostics Group",value:z,onChange:x=>k(x.target.value),className:"w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[9px] uppercase font-bold text-slate-500 mb-1 font-mono",children:"System Objective Goal"}),w.jsx("input",{type:"text",required:!0,placeholder:"e.g. Synthesize chemical breakdown matrices",value:T,onChange:x=>B(x.target.value),className:"w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[9px] uppercase font-bold text-slate-500 mb-1",children:"Brief Description"}),w.jsx("textarea",{placeholder:"What is this agency group mostly about?",rows:2,value:Q,onChange:x=>V(x.target.value),className:"w-full px-2.5 py-1.5 text-xs rounded bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-indigo-500"})]})]}),w.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[w.jsx("button",{type:"button",onClick:()=>W(!1),className:"px-3 py-1.5 text-[10px] font-bold text-slate-400 hover:text-white",children:"Cancel"}),w.jsx("button",{type:"submit",className:"px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white bg-indigo-600 rounded hover:bg-indigo-500",children:"Spawn Team"})]})]})}),w.jsxs("main",{className:"flex-1 max-w-[1700px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch",children:[w.jsxs("section",{className:"lg:col-span-8 flex flex-col gap-5",children:[w.jsxs("div",{className:`p-4 rounded-xl border ${Ae?"border-green-500/10 bg-black/60":R?"border-slate-900 bg-[#0c0e18]":"border-slate-200 bg-white"}`,children:[w.jsxs("div",{className:"flex items-center justify-between mb-2",children:[w.jsx("span",{className:"text-[9px] font-extrabold tracking-widest text-[#6366f1] block uppercase font-mono",children:"Active Collective Goal Objective"}),w.jsx("span",{className:"text-[9px] opacity-60 font-mono italic",children:se.description})]}),w.jsx("input",{type:"text",placeholder:"State a collective goal for the multi-agent swarm...",value:Re,onChange:x=>lt(x.target.value),className:`w-full px-3 py-2 text-xs rounded border focus:outline-none focus:ring-1 focus:ring-indigo-500 ${Ae?"bg-black border-green-500/20 text-green-300 placeholder:text-green-920 font-mono":R?"bg-[#0b0c14] text-white border-slate-900":"bg-slate-50 border-slate-200 text-slate-800"}`,id:"inp-collective-objective"})]}),w.jsxs("div",{className:"flex-1 flex flex-col gap-3 min-h-[460px] relative",children:[w.jsxs("div",{className:"flex items-center justify-between",children:[w.jsxs("div",{className:`flex items-center gap-1 p-1 rounded-lg border ${Ae?"bg-black border-green-500/20":R?"bg-[#0b0d16]/30 border-slate-800/40":"bg-slate-100 border-slate-200"}`,children:[w.jsxs("button",{onClick:()=>c("2d"),className:`px-3 py-1 text-[11px] font-bold rounded transition-all duration-150 flex items-center gap-1 ${l==="2d"?"bg-indigo-600 text-white font-extrabold shadow":Ae?"text-green-500 hover:text-green-300":R?"text-slate-400 hover:text-white":"text-slate-700 hover:text-slate-950 hover:bg-slate-200/55"}`,id:"tab-2d",children:[w.jsx(G_,{className:"w-3 h-3"}),"2D Placement Planner"]}),w.jsxs("button",{onClick:()=>c("3d"),className:`px-3 py-1 text-[11px] font-bold rounded transition-all duration-150 flex items-center gap-1 ${l==="3d"?"bg-indigo-600 text-white font-extrabold shadow":Ae?"text-green-500 hover:text-green-300":R?"text-slate-400 hover:text-white":"text-slate-700 hover:text-slate-950 hover:bg-slate-200/55"}`,id:"tab-3d",children:[w.jsx(Ex,{className:"w-3 h-3"}),"Interactive 3D Simulated Space"]})]}),w.jsxs("div",{className:"flex items-center gap-3",children:[l==="3d"&&w.jsxs("button",{onClick:()=>p(!0),className:`flex items-center gap-1.5 px-3 py-1 text-[10px] rounded border transition-all font-bold uppercase tracking-wider ${Ae?"bg-green-500/10 text-green-450 border-green-500/35 hover:bg-green-500/20":"bg-teal-500/15 border-teal-500/35 text-teal-400 hover:bg-teal-500/25 shadow-sm"}`,id:"btn-enlarge-3d",children:[w.jsx(lS,{className:"w-3 h-3"}),"Enlarge 3D View"]}),w.jsxs("div",{className:"text-[10px] font-mono text-slate-500 flex items-center gap-1.5",children:[w.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"}),w.jsxs("span",{children:["GRID SPACE SIZE: ",i,"x",i]})]})]})]}),w.jsx("div",{className:"flex-1 min-h-[415px]",children:l==="2d"?w.jsx(HS,{agents:xe,decorItems:Ee,onUpdateAgentPosition:Be,onAddDecorItem:qe,onRemoveDecorItem:at,gridSize:i,timeMode:r}):w.jsx(P_,{agents:xe,decorItems:Ee,gridSize:i,timeMode:r,messages:te,currentAgentId:I})})]}),w.jsxs("div",{className:`p-3 rounded-xl border flex flex-wrap items-center justify-between gap-4 ${Ae?"border-green-500/10 bg-black/80":R?"border-slate-900 bg-[#0c0e18]":"border-slate-200 bg-white"}`,children:[w.jsxs("div",{className:"flex items-center gap-2",children:[w.jsx("button",{onClick:()=>{const x=!E;L(x),be(null),x||_(G=>G.map(q=>q.id===N?{...q,agents:q.agents.map(ae=>({...ae,state:"idle"}))}:q))},disabled:xe.length===0,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer select-none ${E?"bg-rose-650 hover:bg-rose-700 text-white":Ae?"bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20":"bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm"}`,id:"btn-run-loop",children:E?w.jsxs(w.Fragment,{children:[w.jsx(US,{className:"w-3.5 h-3.5 fill-white"}),"Pause Swarm"]}):w.jsxs(w.Fragment,{children:[w.jsx(mS,{className:"w-3.5 h-3.5 fill-white"}),"Run Autonomous Loop"]})}),w.jsxs("button",{onClick:Xe,disabled:E||xe.length===0,className:`flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${E?"opacity-30 cursor-not-allowed":Ae?"border-green-500/20 text-green-400":"border-slate-850 hover:bg-slate-900 text-slate-300"}`,title:"Force single task handoff step",id:"btn-step",children:[w.jsx(Mx,{className:"w-3.5 h-3.5"}),"Step Turn"]}),w.jsx("button",{onClick:()=>{H([]),U(0),L(!1),be(null),_(x=>x.map(G=>({...G,agents:G.agents.map(q=>({...q,state:"idle"}))}))),Te(S,N,[],i,r)},className:"p-2 text-slate-500 hover:text-white rounded border border-slate-800/60 hover:bg-slate-900/40",title:"Clear logs history",id:"btn-reset-logs",children:w.jsx(yS,{className:"w-3.5 h-3.5"})})]}),w.jsxs("div",{className:"flex items-center gap-4 text-[11px] font-mono",children:[w.jsxs("div",{className:"flex items-center gap-1.5 text-slate-400",children:[w.jsx(Ky,{className:"w-3.5 h-3.5 text-indigo-400"}),w.jsxs("span",{children:["TURNS EXECUTED: ",w.jsx("strong",{className:"text-teal-400",children:de})]})]}),w.jsxs("div",{className:"flex items-center gap-1.5 border-l border-slate-800 pl-4",children:[w.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),w.jsxs("span",{className:"uppercase text-[9px] text-slate-500 tracking-wider",children:["Swarm State: ",E?"Active Pipeline Processing":"Holding at Desks"]})]})]})]}),w.jsxs("div",{className:`p-5 rounded-xl border flex flex-col gap-4 ${Ae?"border-green-500/15 bg-black text-green-400":R?"border-slate-800 bg-[#0c0e18]":"border-slate-200 bg-white text-slate-800"}`,id:"employee-roster-console",children:[w.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-dashed border-slate-800/60",children:[w.jsxs("div",{children:[w.jsx("span",{className:`text-[9px] tracking-[0.2em] font-extrabold uppercase block font-mono ${Ae?"text-green-500":"text-indigo-400"}`,children:"Core Syndicate Personnel"}),w.jsx("h3",{className:"text-sm font-bold tracking-tight",children:"Active Employee directory"})]}),w.jsx("div",{className:`text-[10px] font-mono px-2 py-0.5 rounded border ${Ze?"border-rose-500/35 bg-rose-500/10 text-rose-400":"border-teal-500/35 bg-teal-500/10 text-teal-400"}`,children:Ze?"🔒 Neural Link Secured":"🔓 Edit/Delete Online"})]}),w.jsxs("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:["Below is the list of active AI workers in the current syndicate. Click ",w.jsx("strong",{className:"text-indigo-400",children:"Configure"})," to select that agent and customize directives in the Construction pod on the right sidebar, or deconstruct their node from the office grid entirely."]}),w.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 col-span-full",children:xe.map(x=>{const G=J===x.id,q=(()=>{switch(x.state){case"typing":return{text:"Typing...",color:"bg-indigo-400"};case"thinking":return{text:"Thinking...",color:"bg-cyan-400 animate-pulse"};case"walking":return{text:"Moving...",color:"bg-amber-400 animate-sine"};default:return{text:"Ready",color:"bg-emerald-500"}}})();return w.jsxs("div",{className:`p-3 rounded-xl border flex flex-col justify-between transition-all relative ${G?Ae?"border-green-500 bg-green-500/5 shadow hover:scale-[1.01]":"border-indigo-500 bg-[#141829]/70 shadow hover:scale-[1.01]":Ae?"border-green-500/10 bg-slate-950/20 hover:border-green-500/30":R?"border-slate-800/60 bg-slate-900/10 hover:border-slate-700/60":"border-slate-200 bg-slate-50 hover:border-slate-300"}`,children:[w.jsxs("div",{className:"flex items-start justify-between gap-1 mb-2.5",children:[w.jsxs("div",{className:"flex items-center gap-1.5 min-w-0",children:[w.jsxs("div",{className:"w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-extrabold text-slate-950 relative uppercase shrink-0",style:{backgroundColor:x.avatarColor||"#6366f1"},children:[x.name.substring(0,2),w.jsx("span",{className:"absolute -bottom-0.5 -right-0.5 text-[8px] bg-slate-950 text-white rounded-full w-3 h-3 flex items-center justify-center border border-slate-900 leading-none",children:x.gender==="female"?"♀":"♂"})]}),w.jsxs("div",{className:"min-w-0",children:[w.jsx("h4",{className:"font-bold text-xs truncate",title:x.name,children:x.name}),w.jsx("p",{className:"text-[9px] text-slate-500 truncate",title:x.designation,children:x.designation})]})]}),w.jsxs("span",{className:"flex items-center gap-1 text-[8px] font-mono whitespace-nowrap bg-slate-950/70 px-1.5 py-0.5 rounded-full border border-slate-900",children:[w.jsx("span",{className:`w-1 h-1 rounded-full ${q.color}`}),w.jsx("span",{className:"text-slate-400",children:q.text})]})]}),w.jsxs("p",{className:"text-[9px] text-slate-500 italic line-clamp-2 leading-relaxed mb-3 pr-1",children:["“",x.systemPrompt,"”"]}),w.jsxs("div",{className:"grid grid-cols-2 gap-1.5 pt-2 mt-auto border-t border-dashed border-slate-900/60 font-sans",children:[w.jsxs("button",{onClick:()=>{me(x.id),fe(x.id);const ae=document.getElementById("agent-workspace-pod-builder");ae&&ae.scrollIntoView({behavior:"smooth"})},className:`py-1 px-1.5 rounded text-[9px] font-extrabold uppercase transition-all tracking-wider flex items-center justify-center gap-1 cursor-pointer ${G?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm":Ae?"border border-green-550/30 text-green-400 hover:bg-green-500/10":"border border-slate-800 bg-[#0f111e]/55 hover:bg-slate-900 text-slate-300"}`,title:"Edit directives on right panel",id:`btn-roster-edit-${x.id}`,children:[w.jsx(H_,{className:"w-2.5 h-2.5 text-indigo-400 shrink-0"}),"Configure"]}),w.jsxs("button",{onClick:()=>j(x.id),disabled:Ze||xe.length<=1,className:`py-1 px-1.5 rounded text-[9px] font-extrabold uppercase transition-all tracking-wider flex items-center justify-center gap-1 ${Ze||xe.length<=1?"opacity-30 cursor-not-allowed text-slate-650 border border-slate-900 bg-transparent":"border border-rose-500/20 text-rose-450 hover:bg-rose-500/10 hover:border-rose-500/40 cursor-pointer"}`,title:Ze?"Lock active during execution":"Remove from pod",id:`btn-roster-delete-${x.id}`,children:[Ze?w.jsx($r,{className:"w-2.5 h-2.5 text-rose-400 shrink-0"}):w.jsx(GS,{className:"w-2.5 h-2.5 text-rose-400 shrink-0"}),"Deconstruct"]})]})]},x.id)})}),Ze&&w.jsxs("div",{className:"text-[10px] text-amber-500/80 font-mono flex items-center gap-1.5 mt-1",children:[w.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"}),w.jsx("span",{children:"Console lock engaged. Finish actively running turns to make staff additions, adjustments or deconstructions."})]})]}),Z&&w.jsxs("div",{className:"p-3.5 rounded-lg border border-red-500/10 bg-red-950/20 text-red-300 text-xs flex items-start gap-2.5",children:[w.jsx(FS,{className:"w-4 h-4 shrink-0 text-red-400 mt-0.5"}),w.jsxs("div",{children:[w.jsx("p",{className:"font-bold text-red-400",children:"Swarm Execution Exception"}),w.jsx("p",{className:"font-mono leading-relaxed mt-0.5",children:Z}),w.jsxs("p",{className:"mt-1 text-slate-500 text-[10px]",children:["Requires active ",w.jsx("strong",{children:"GEMINI_API_KEY"})," secret inside your AI Studio Workspace Secrets panel."]})]})]})]}),w.jsxs("section",{className:"lg:col-span-4 flex flex-col gap-5",children:[w.jsx("div",{className:"min-h-[380px]",children:w.jsx(Cw,{agents:xe,selectedAgentId:J,onUpdateAgent:it,onAddAgent:Tt,onDeleteAgent:j,timeMode:r,isBusy:Ze})}),w.jsxs("div",{className:`p-4 rounded-xl border flex flex-col h-[400px] justify-between ${Ae?"border-green-500/15 bg-black":R?"border-slate-900 bg-[#0c0e18]":"border-slate-200 bg-white"}`,id:"global-transcript-console",children:[w.jsxs("div",{className:`flex items-center justify-between pb-2 border-b border-dashed mb-2 ${Ae?"border-green-500/15":R?"border-slate-800/60":"border-slate-200"}`,children:[w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx(Ax,{className:`w-3.5 h-3.5 ${Ae?"text-green-400":R?"text-indigo-400":"text-indigo-900"}`}),w.jsx("h2",{className:`font-bold text-[10px] tracking-wider uppercase ${Ae||R?"":"text-slate-900"}`,children:"Operational logs"})]}),w.jsx("span",{className:`text-[8px] font-mono opacity-50 block uppercase ${Ae||R?"":"text-slate-600 font-bold"}`,children:"UTX Pipeline Connected"})]}),w.jsxs("div",{className:"flex-1 overflow-y-auto space-y-3 pr-1 text-[11px] font-sans",children:[te.length===0?w.jsxs("div",{className:"text-center py-20 opacity-40 flex flex-col items-center",children:[w.jsx(Ax,{className:"w-7 h-7 mb-1.5 opacity-30 text-teal-400"}),w.jsx("p",{className:"font-bold text-[11px]",children:"Collective Stream Dormant."}),w.jsx("p",{className:"text-[9px] text-slate-500 max-w-[200px] leading-tight mt-1",children:"Set a collective goal, select the active team, and run the pipeline turns loop!"})]}):te.map(x=>w.jsxs("div",{className:`p-3 rounded-lg border transition-all ${Ae?"border-green-500/10 bg-black":R?"border-[#1c223c]/40 bg-[#101323]/40":"border-slate-200 bg-slate-50 shadow-sm"}`,children:[w.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[w.jsxs("div",{className:"flex items-center gap-1.5",children:[w.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),w.jsx("span",{className:`font-extrabold text-[11.5px] ${Ae?"text-green-450":R?"text-white":"text-slate-950 font-black"}`,children:x.senderName}),w.jsx("span",{className:`text-[8px] font-mono px-1.5 py-0.5 rounded outline-none border-none ${Ae?"bg-green-950/40 text-green-400":R?"bg-indigo-950/45 text-indigo-305":"bg-indigo-100 text-indigo-900 font-extrabold"}`,children:x.senderDesignation})]}),w.jsx("span",{className:`text-[9px] font-mono ${Ae||R?"text-slate-500":"text-slate-700"}`,children:x.timestamp})]}),w.jsx("div",{className:`space-y-3 leading-normal font-mono text-[11px] overflow-x-auto whitespace-pre-wrap ${Ae?"text-green-300":R?"text-slate-300":"text-slate-950 font-black"}`,children:w.jsx(Dw,{text:x.text,timeMode:r})}),x.delegateId&&w.jsxs("div",{className:`mt-2.5 pt-2 border-t border-dashed flex items-start gap-1 text-[9px] ${Ae?"border-green-500/10 text-green-500":R?"border-slate-800/60 text-slate-400":"border-slate-200 text-slate-700"}`,children:[w.jsx(Mx,{className:`w-3 h-3 shrink-0 mt-0.5 ${Ae?"text-green-500":R?"text-indigo-400":"text-indigo-900"}`}),w.jsxs("div",{className:"italic",children:["Handed Turn Context to: ",w.jsx("strong",{className:`font-mono italic ${Ae?"text-green-450":R?"text-indigo-400":"text-indigo-900 font-black"}`,children:x.delegationReason})]})]})]},x.id)),E&&w.jsxs("div",{className:"p-3 rounded-lg border border-dashed border-indigo-500/20 bg-indigo-950/5 animate-pulse",children:[w.jsxs("div",{className:"flex items-center gap-1.5 mb-1",children:[w.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"}),w.jsx("span",{className:"text-[10px] text-amber-400 font-mono tracking-wider uppercase select-none",children:"AI agent thinking step ..."})]}),w.jsx("div",{className:"h-1.5 bg-slate-800/80 rounded w-5/6 mb-1"}),w.jsx("div",{className:"h-1.5 bg-slate-800/80 rounded w-1/3"})]}),w.jsx("div",{ref:Ce})]}),w.jsx("div",{className:"pt-2 mt-2 border-t border-dashed border-slate-800/40",children:w.jsx("input",{type:"text",placeholder:"Over-write agent context manually...",onKeyDown:x=>{if(x.key==="Enter"&&x.currentTarget.value){const G=x.currentTarget.value,q={id:`msg-human-${Date.now()}`,text:`### [Manual Override Directive] 

${G}`,senderId:"commander",senderName:"Director (You)",senderDesignation:"Swarm Director",delegateId:I||(xe[0]?xe[0].id:null),delegationReason:"Manual override execution protocol active",timestamp:new Date().toLocaleTimeString()},ae=[...te,q];H(ae),x.currentTarget.value="",Te(S,N,ae,i,r)}},className:`w-full px-2.5 py-1.5 text-[10px] rounded border focus:outline-none focus:border-indigo-400 ${Ae?"bg-black border-green-500/20 text-green-300 font-mono placeholder:text-green-920":R?"bg-[#0c0d14] text-white border-slate-900 placeholder:text-slate-600 font-mono":"bg-slate-50 border-slate-200 text-slate-800"}`,id:"inp-manual-inject"})})]})]})]}),w.jsxs("footer",{className:`px-6 py-3 border-t text-center text-[9px] tracking-wider transition-colors uppercase ${Ae?"border-green-500/10 bg-black text-green-650 font-mono":R?"border-slate-950 bg-slate-950/20 text-slate-650":"border-slate-200 bg-white text-slate-400"}`,children:["TASK ORCHESTRATION GROUNDED CONTROL SYSTEM • STYLIZED ISOMETRIC ENVIRONMENT • ",new Date().getFullYear()," UTC"]}),d&&w.jsxs("div",{className:`fixed inset-0 z-50 flex flex-col p-4 md:p-6 backdrop-blur-md transition-all ${Ae?"bg-black/95 text-green-300":R?"bg-[#0b0d16]/95 text-slate-200":"bg-white/95 text-slate-800"}`,children:[w.jsxs("div",{className:`flex items-center justify-between mb-4 pb-3 border-b ${Ae?"border-green-500/20":R?"border-slate-900":"border-slate-200"}`,children:[w.jsxs("div",{children:[w.jsx("span",{className:`text-[9px] tracking-[0.25em] font-extrabold uppercase font-mono block ${Ae?"text-green-500":"text-indigo-400"}`,children:"Swarm Environment Inspection"}),w.jsx("h2",{className:"text-sm font-bold tracking-tight",children:"Grounded 3D Office Workspace Overview"})]}),w.jsxs("button",{onClick:()=>p(!1),className:"flex items-center gap-1.5 px-3 py-1.5 text-xs rounded border border-rose-500 bg-rose-650 text-white font-bold uppercase tracking-wider hover:bg-rose-700 transition-all shadow-sm",id:"btn-close-enlarge",children:[w.jsx(uS,{className:"w-3.5 h-3.5"}),"Close Fullscreen"]})]}),w.jsx("div",{className:`flex-1 relative rounded-xl overflow-hidden border ${Ae?"border-green-500/30 bg-black":R?"border-slate-900 bg-[#0c0e18]":"border-slate-300 bg-slate-50"}`,children:w.jsx(P_,{agents:xe,decorItems:Ee,gridSize:i,timeMode:r,messages:te,currentAgentId:I})})]}),y&&w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all",children:w.jsxs("div",{className:`w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl border p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative ${Ae?"bg-black text-green-300 border-green-500/30 font-mono":R?"bg-[#0c0e1a]/95 text-slate-100 border-indigo-500/20":"bg-white text-slate-800 border-slate-200"}`,children:[w.jsxs("div",{className:"flex items-start justify-between border-b pb-4 border-dashed border-slate-705/50",children:[w.jsxs("div",{children:[w.jsx("span",{className:`text-[9px] tracking-[0.25em] font-extrabold uppercase block font-mono ${Ae?"text-green-500":"text-indigo-400"}`,children:"Core Engine Customizer"}),w.jsx("h2",{className:"text-base font-bold tracking-tight",children:"Gemini Model & API Key Settings"})]}),w.jsx("button",{onClick:()=>b(!1),className:"p-1 px-3 text-[10px] font-bold uppercase tracking-wider text-rose-500 hover:text-white hover:bg-rose-600 rounded border border-rose-500 transition-all cursor-pointer",id:"btn-close-config",children:"Close"})]}),w.jsxs("div",{className:`p-4 rounded-xl text-[11px] leading-relaxed border flex gap-2 items-start ${Ae?"bg-green-950/10 border-green-500/20 text-green-400":"bg-indigo-500/5 border-indigo-500/10 text-slate-400"}`,children:[w.jsx($r,{className:"w-4 h-4 text-emerald-500 shrink-0 mt-0.5"}),w.jsxs("div",{children:[w.jsx("strong",{children:"Secure Local Storage:"})," Your private API key is processed client-side, encrypted where needed, routed through server-side proxy requests, and never stored persistently anywhere on logs, keeping your credentials completely safe and private."]})]}),w.jsxs("div",{className:"space-y-4 text-xs font-sans",children:[w.jsxs("div",{children:[w.jsxs("label",{className:"block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5 flex items-center justify-between",children:[w.jsx("span",{children:"Your Gemini API Key"}),w.jsx("a",{href:"https://aistudio.google.com/app/apikey",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-400 hover:underline flex items-center gap-1 font-semibold",children:"Get Key from Google AI Studio ↗"})]}),w.jsx("div",{className:"relative",children:w.jsx("input",{type:"password",value:g,onChange:x=>M(x.target.value),placeholder:"Enter your private API key here...",className:`w-full px-3.5 py-2 text-xs rounded-lg border focus:outline-none focus:border-indigo-500 ${Ae?"bg-black border-green-500/30 text-green-400 font-mono placeholder-green-800":R?"bg-slate-900 border-slate-800 text-white placeholder-slate-600":"bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"}`,id:"inp-custom-api-key"})}),w.jsx("p",{className:"text-[10px] text-slate-500 mt-1.5 leading-relaxed",children:"If left empty, the application will automatically fall back to use the system's pre-configured backend credentials (ideal for instant starts!)."})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1.5",children:"Select Gemini Model Deployment"}),w.jsxs("select",{value:A,onChange:x=>O(x.target.value),className:`w-full px-3.5 py-2 text-xs rounded-lg border focus:outline-none focus:border-indigo-500 tracking-wide ${Ae?"bg-black border-green-500/30 text-green-400 font-mono":R?"bg-slate-900 border-slate-800 text-white":"bg-slate-50 border-slate-200 text-slate-800"}`,id:"sel-custom-model",children:[w.jsx("option",{value:"gemini-3.5-flash",children:"Gemini 3.5 Flash (Recommended Default)"}),w.jsx("option",{value:"gemini-3.1-pro-preview",children:"Gemini 3.1 Pro (Deep Reasoning & Multi-turn)"}),w.jsx("option",{value:"gemini-3.1-flash-lite",children:"Gemini 3.1 Flash Lite (Fast responses)"})]}),w.jsx("p",{className:"text-[10px] text-slate-500 mt-1.5 leading-relaxed",children:"Select your target engine. Pro models provide richer, highly professional synthesis but require higher API resource token usage."})]}),w.jsxs("div",{className:`p-3 rounded-xl border flex flex-col gap-1 text-[11px] ${g?"border-emerald-500/25 bg-emerald-950/10":"border-slate-800 bg-slate-900/30"}`,children:[w.jsxs("div",{className:"flex items-center gap-1.5 font-bold",children:[w.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${g?"bg-emerald-500 animate-pulse":"bg-indigo-400 animate-pulse"}`}),w.jsx("span",{className:g?"text-emerald-400":"text-indigo-400",children:g?"Currently Armed: Custom Key":"Currently Defaulted: Environment Configuration"})]}),w.jsx("p",{className:"text-slate-500 text-[10px] leading-relaxed",children:g?`Instructing workers to query via model "${A}" using your personal client-supplied key.`:`Instructing workers to query via model "${A}" using pre-configured system default credentials.`})]})]}),w.jsxs("div",{className:"flex gap-2 items-center justify-end font-sans border-t pt-4 border-dashed border-slate-705/15",children:[w.jsx("button",{type:"button",onClick:()=>{M(""),localStorage.removeItem("custom_gemini_api_key")},disabled:!g,className:`px-4 py-2 rounded text-[11px] font-bold uppercase tracking-wider border transition-colors ${g?"border-rose-500/30 text-rose-450 hover:bg-rose-500/10 cursor-pointer":"opacity-35 cursor-not-allowed border-slate-800 text-slate-500"}`,title:"Clear key to fall back to environment key",id:"btn-reset-custom-config",children:"Clear Custom Key"}),w.jsx("button",{type:"button",onClick:()=>b(!1),className:"px-5 py-2 rounded text-[11px] font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-md cursor-pointer transition-colors animate-pulse",id:"btn-save-custom-config",children:"Save & Activate"})]})]})}),m&&w.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-md transition-all",children:w.jsxs("div",{className:`w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative ${Ae?"bg-black text-green-300 border-green-500/30 font-mono":R?"bg-[#0c0e1a]/95 text-slate-100 border-indigo-500/20":"bg-white text-slate-800 border-slate-200"}`,children:[w.jsxs("div",{className:"flex items-start justify-between border-b pb-4 border-dashed border-slate-700/50",children:[w.jsxs("div",{children:[w.jsx("span",{className:`text-[9px] tracking-[0.25em] font-extrabold uppercase block font-mono ${Ae?"text-green-500":"text-indigo-400"}`,children:"Interactive User Manual"}),w.jsx("h2",{className:"text-lg font-bold tracking-tight",children:"How to Operate the Swarm Agency"})]}),w.jsx("button",{onClick:()=>h(!1),className:"p-1 px-3 text-[10px] font-bold uppercase tracking-wider text-rose-500 hover:text-white hover:bg-rose-600 rounded border border-rose-500 transition-all cursor-pointer",id:"btn-close-help",children:"Close"})]}),w.jsxs("div",{className:`p-4 rounded-xl text-xs leading-relaxed border ${Ae?"bg-green-950/10 border-green-500/20 text-green-400":"bg-indigo-500/5 border-indigo-500/10 text-slate-400"}`,children:["This interactive playground simulates a ",w.jsx("strong",{children:"Multi-Agent Swarm Collaborative Team"})," where autonomous AI professionals (e.g. CEO, Competitor Researcher, Financial Analyst, Database Architect) sit together, discuss real sub-tasks, delegate work to specialized team members, and physically collaborate in a styled 3D digital office workspace."]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[w.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${Ae?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[w.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[w.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${Ae?"bg-green-500/20 text-green-400":"bg-indigo-500/20 text-indigo-400"}`,children:"1"}),w.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Define the Mission"})]}),w.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["Start by typing a custom overarching corporate goal in the ",w.jsx("strong",{children:"Active Collective Goal Objective"})," input box (e.g., ",w.jsx("em",{children:'"Design a premium high-volume organic tea brand"'}),"). Pressing the presets on top switches between ready-configured specialized agencies instantly."]})]}),w.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${Ae?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[w.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[w.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${Ae?"bg-green-500/20 text-green-400":"bg-indigo-500/20 text-indigo-400"}`,children:"2"}),w.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Instigate Swarm Execution"})]}),w.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["Hit the ",w.jsx("strong",{children:"Delegate & Prompt Swarm"})," action key. Our sequence engine coordinates each agent's active neural network model. Each agent will formulate structured responses, critique existing steps, delegate tasks, and pass progress."]})]}),w.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${Ae?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[w.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[w.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${Ae?"bg-green-500/20 text-green-400":"bg-[#f43f5e]/20 text-[#f43f5e]"}`,children:"3"}),w.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Watch 3D Collaboration"})]}),w.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["During computation, agents will stand up, walk across the customized office grid, sit at their task chairs on the cushion, and raise their curvy hands to type on modern ",w.jsx("strong",{children:"Dual-Monitor Workstations"})," featuring glowing desktop displays and laptops!"]})]}),w.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${Ae?"bg-black border-green-500/10":"bg-slate-900/40 border-slate-800/60"}`,children:[w.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[w.jsx("span",{className:`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-extrabold font-mono ${Ae?"bg-green-500/20 text-green-400":"bg-teal-500/20 text-teal-400"}`,children:"4"}),w.jsx("h3",{className:"font-bold uppercase tracking-wider text-[11px]",children:"Scale & Shape Avatars"})]}),w.jsxs("p",{className:"text-slate-400 text-[11px] leading-relaxed",children:["Select any agent's card to modify system personas. Custom body styles options let you toggle gender models: ",w.jsx("strong",{children:"Male (Smooth curvy cylinder)"})," or ",w.jsx("strong",{children:"Female (Elegant inverted cone)"}),". All feature smooth rounded shoulders and spherical key joints."]})]})]}),w.jsxs("div",{className:`p-4 rounded-xl border flex flex-col gap-2 ${Ae?"border-green-500/15":"border-slate-800/70"}`,children:[w.jsxs("h4",{className:"font-bold text-[11px] uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 font-mono",children:[w.jsx(k_,{className:"w-3.5 h-3.5"}),"How to customize and make the office your own:"]}),w.jsxs("ul",{className:"list-disc pl-4 space-y-1 text-[11px] text-slate-400 leading-relaxed",children:[w.jsxs("li",{children:["Create brand-new customized agency structures by pressing the ",w.jsx("strong",{children:"+ Create Team"})," option button."]}),w.jsx("li",{children:"Decorate empty grid slots with cozy office green potted foliage, work desks, and accent armchairs by painting objects on the map."}),w.jsxs("li",{children:["Import custom files/layouts by loading custom JSON configurations back into the system using the top-bar ",w.jsx("strong",{children:"File Up icon"}),"."]})]})]}),w.jsx("div",{className:"flex justify-end pt-2",children:w.jsx("button",{onClick:()=>h(!1),className:"px-6 py-2 rounded text-xs font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 shadow-md cursor-pointer transition-colors",id:"btn-help-close-footer",children:"Let's Get Started!"})})]})})]})}Hy.createRoot(document.getElementById("root")).render(w.jsx(je.StrictMode,{children:w.jsx(Nw,{})}));
