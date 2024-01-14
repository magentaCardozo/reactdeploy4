function Ad(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Od={exports:{}},ao={},Fd={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),ih=Symbol.for("react.portal"),lh=Symbol.for("react.fragment"),oh=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),sh=Symbol.for("react.provider"),uh=Symbol.for("react.context"),ch=Symbol.for("react.forward_ref"),dh=Symbol.for("react.suspense"),fh=Symbol.for("react.memo"),ph=Symbol.for("react.lazy"),Hu=Symbol.iterator;function hh(e){return e===null||typeof e!="object"?null:(e=Hu&&e[Hu]||e["@@iterator"],typeof e=="function"?e:null)}var $d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ud=Object.assign,Bd={};function Rr(e,t,n){this.props=e,this.context=t,this.refs=Bd,this.updater=n||$d}Rr.prototype.isReactComponent={};Rr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Rr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bd(){}bd.prototype=Rr.prototype;function Ls(e,t,n){this.props=e,this.context=t,this.refs=Bd,this.updater=n||$d}var Ds=Ls.prototype=new bd;Ds.constructor=Ls;Ud(Ds,Rr.prototype);Ds.isPureReactComponent=!0;var Qu=Array.isArray,Hd=Object.prototype.hasOwnProperty,Ts={current:null},Qd={key:!0,ref:!0,__self:!0,__source:!0};function Wd(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Hd.call(t,r)&&!Qd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$i,type:e,key:l,ref:o,props:i,_owner:Ts.current}}function mh(e,t){return{$$typeof:$i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function _s(e){return typeof e=="object"&&e!==null&&e.$$typeof===$i}function gh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wu=/\/+/g;function $o(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gh(""+e.key):t.toString(36)}function ml(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $i:case ih:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$o(o,0):r,Qu(i)?(n="",e!=null&&(n=e.replace(Wu,"$&/")+"/"),ml(i,t,n,"",function(c){return c})):i!=null&&(_s(i)&&(i=mh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Wu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Qu(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+$o(l,a);o+=ml(l,t,n,s,i)}else if(s=hh(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+$o(l,a++),o+=ml(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Zi(e,t,n){if(e==null)return e;var r=[],i=0;return ml(e,r,"","",function(l){return t.call(n,l,i++)}),r}function vh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},gl={transition:null},yh={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:gl,ReactCurrentOwner:Ts};Y.Children={map:Zi,forEach:function(e,t,n){Zi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Zi(e,function(){t++}),t},toArray:function(e){return Zi(e,function(t){return t})||[]},only:function(e){if(!_s(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Rr;Y.Fragment=lh;Y.Profiler=ah;Y.PureComponent=Ls;Y.StrictMode=oh;Y.Suspense=dh;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yh;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ud({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ts.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Hd.call(t,s)&&!Qd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:$i,type:e.type,key:i,ref:l,props:r,_owner:o}};Y.createContext=function(e){return e={$$typeof:uh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:sh,_context:e},e.Consumer=e};Y.createElement=Wd;Y.createFactory=function(e){var t=Wd.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:ch,render:e}};Y.isValidElement=_s;Y.lazy=function(e){return{$$typeof:ph,_payload:{_status:-1,_result:e},_init:vh}};Y.memo=function(e,t){return{$$typeof:fh,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=gl.transition;gl.transition={};try{e()}finally{gl.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Qe.current.useCallback(e,t)};Y.useContext=function(e){return Qe.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Qe.current.useEffect(e,t)};Y.useId=function(){return Qe.current.useId()};Y.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Qe.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};Y.useRef=function(e){return Qe.current.useRef(e)};Y.useState=function(e){return Qe.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Qe.current.useTransition()};Y.version="18.2.0";Fd.exports=Y;var L=Fd.exports;const Xe=Id(L),wh=Ad({__proto__:null,default:Xe},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh=L,Sh=Symbol.for("react.element"),Ch=Symbol.for("react.fragment"),jh=Object.prototype.hasOwnProperty,kh=xh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mh={key:!0,ref:!0,__self:!0,__source:!0};function Vd(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)jh.call(t,r)&&!Mh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Sh,type:e,key:l,ref:o,props:i,_owner:kh.current}}ao.Fragment=Ch;ao.jsx=Vd;ao.jsxs=Vd;Od.exports=ao;var u=Od.exports,Ca={},Yd={exports:{}},st={},Gd={exports:{}},Kd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,I){var $=P.length;P.push(I);e:for(;0<$;){var V=$-1>>>1,Z=P[V];if(0<i(Z,I))P[V]=I,P[$]=Z,$=V;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var I=P[0],$=P.pop();if($!==I){P[0]=$;e:for(var V=0,Z=P.length,tt=Z>>>1;V<tt;){var ye=2*(V+1)-1,Oe=P[ye],we=ye+1,nt=P[we];if(0>i(Oe,$))we<Z&&0>i(nt,Oe)?(P[V]=nt,P[we]=$,V=we):(P[V]=Oe,P[ye]=$,V=ye);else if(we<Z&&0>i(nt,$))P[V]=nt,P[we]=$,V=we;else break e}}return I}function i(P,I){var $=P.sortIndex-I.sortIndex;return $!==0?$:P.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var s=[],c=[],d=1,h=null,g=3,x=!1,S=!1,w=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=P)r(c),I.sortIndex=I.expirationTime,t(s,I);else break;I=n(c)}}function k(P){if(w=!1,m(P),!S)if(n(s)!==null)S=!0,Lt(N);else{var I=n(c);I!==null&&te(k,I.startTime-P)}}function N(P,I){S=!1,w&&(w=!1,p(T),T=-1),x=!0;var $=g;try{for(m(I),h=n(s);h!==null&&(!(h.expirationTime>I)||P&&!K());){var V=h.callback;if(typeof V=="function"){h.callback=null,g=h.priorityLevel;var Z=V(h.expirationTime<=I);I=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(s)&&r(s),m(I)}else r(s);h=n(s)}if(h!==null)var tt=!0;else{var ye=n(c);ye!==null&&te(k,ye.startTime-I),tt=!1}return tt}finally{h=null,g=$,x=!1}}var v=!1,j=null,T=-1,R=5,F=-1;function K(){return!(e.unstable_now()-F<R)}function ve(){if(j!==null){var P=e.unstable_now();F=P;var I=!0;try{I=j(!0,P)}finally{I?pe():(v=!1,j=null)}}else v=!1}var pe;if(typeof f=="function")pe=function(){f(ve)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,Zt=Ve.port2;Ve.port1.onmessage=ve,pe=function(){Zt.postMessage(null)}}else pe=function(){M(ve,0)};function Lt(P){j=P,v||(v=!0,pe())}function te(P,I){T=M(function(){P(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Lt(N))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var $=g;g=I;try{return P()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,I){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=g;g=P;try{return I()}finally{g=$}},e.unstable_scheduleCallback=function(P,I,$){var V=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?V+$:V):$=V,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,P={id:d++,callback:I,priorityLevel:P,startTime:$,expirationTime:Z,sortIndex:-1},$>V?(P.sortIndex=$,t(c,P),n(s)===null&&P===n(c)&&(w?(p(T),T=-1):w=!0,te(k,$-V))):(P.sortIndex=Z,t(s,P),S||x||(S=!0,Lt(N))),P},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(P){var I=g;return function(){var $=g;g=I;try{return P.apply(this,arguments)}finally{g=$}}}})(Kd);Gd.exports=Kd;var Eh=Gd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zd=L,at=Eh;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xd=new Set,yi={};function Yn(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(yi[e]=t,e=0;e<t.length;e++)Xd.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ja=Object.prototype.hasOwnProperty,Nh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vu={},Yu={};function Lh(e){return ja.call(Yu,e)?!0:ja.call(Vu,e)?!1:Nh.test(e)?Yu[e]=!0:(Vu[e]=!0,!1)}function Dh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Th(e,t,n,r){if(t===null||typeof t>"u"||Dh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ps=/[\-:]([a-z])/g;function zs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ps,zs);Ie[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ps,zs);Ie[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ps,zs);Ie[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Rs(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Th(t,n,i,r)&&(n=null),r||i===null?Lh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Gt=Zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xi=Symbol.for("react.element"),tr=Symbol.for("react.portal"),nr=Symbol.for("react.fragment"),As=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),Jd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),Is=Symbol.for("react.forward_ref"),Ma=Symbol.for("react.suspense"),Ea=Symbol.for("react.suspense_list"),Os=Symbol.for("react.memo"),rn=Symbol.for("react.lazy"),ef=Symbol.for("react.offscreen"),Gu=Symbol.iterator;function br(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Uo;function ti(e){if(Uo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Uo=t&&t[1]||""}return`
`+Uo+e}var Bo=!1;function bo(e,t){if(!e||Bo)return"";Bo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,a=l.length-1;1<=o&&0<=a&&i[o]!==l[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==l[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==l[a]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=a);break}}}finally{Bo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ti(e):""}function _h(e){switch(e.tag){case 5:return ti(e.type);case 16:return ti("Lazy");case 13:return ti("Suspense");case 19:return ti("SuspenseList");case 0:case 2:case 15:return e=bo(e.type,!1),e;case 11:return e=bo(e.type.render,!1),e;case 1:return e=bo(e.type,!0),e;default:return""}}function Na(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nr:return"Fragment";case tr:return"Portal";case ka:return"Profiler";case As:return"StrictMode";case Ma:return"Suspense";case Ea:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case qd:return(e.displayName||"Context")+".Consumer";case Jd:return(e._context.displayName||"Context")+".Provider";case Is:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Os:return t=e.displayName||null,t!==null?t:Na(e.type)||"Memo";case rn:t=e._payload,e=e._init;try{return Na(e(t))}catch{}}return null}function Ph(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Na(t);case 8:return t===As?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zh(e){var t=tf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ji(e){e._valueTracker||(e._valueTracker=zh(e))}function nf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=tf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Pl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function La(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ku(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=wn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rf(e,t){t=t.checked,t!=null&&Rs(e,"checked",t,!1)}function Da(e,t){rf(e,t);var n=wn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ta(e,t.type,wn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ta(e,t,n){(t!=="number"||Pl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ni=Array.isArray;function gr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+wn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(ni(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:wn(n)}}function lf(e,t){var n=wn(t.value),r=wn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function of(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?of(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,af=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rh=["Webkit","ms","Moz","O"];Object.keys(ai).forEach(function(e){Rh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ai[t]=ai[e]})});function sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ai.hasOwnProperty(e)&&ai[e]?(""+t).trim():t+"px"}function uf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Ah=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function za(e,t){if(t){if(Ah[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aa=null;function Fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ia=null,vr=null,yr=null;function qu(e){if(e=bi(e)){if(typeof Ia!="function")throw Error(D(280));var t=e.stateNode;t&&(t=po(t),Ia(e.stateNode,e.type,t))}}function cf(e){vr?yr?yr.push(e):yr=[e]:vr=e}function df(){if(vr){var e=vr,t=yr;if(yr=vr=null,qu(e),t)for(e=0;e<t.length;e++)qu(t[e])}}function ff(e,t){return e(t)}function pf(){}var Ho=!1;function hf(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return ff(e,t,n)}finally{Ho=!1,(vr!==null||yr!==null)&&(pf(),df())}}function xi(e,t){var n=e.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Oa=!1;if(Qt)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Oa=!1}function Ih(e,t,n,r,i,l,o,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var si=!1,zl=null,Rl=!1,Fa=null,Oh={onError:function(e){si=!0,zl=e}};function Fh(e,t,n,r,i,l,o,a,s){si=!1,zl=null,Ih.apply(Oh,arguments)}function $h(e,t,n,r,i,l,o,a,s){if(Fh.apply(this,arguments),si){if(si){var c=zl;si=!1,zl=null}else throw Error(D(198));Rl||(Rl=!0,Fa=c)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ec(e){if(Gn(e)!==e)throw Error(D(188))}function Uh(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return ec(i),e;if(l===r)return ec(i),t;l=l.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=l;break}if(a===r){o=!0,r=i,n=l;break}a=a.sibling}if(!o){for(a=l.child;a;){if(a===n){o=!0,n=l,r=i;break}if(a===r){o=!0,r=l,n=i;break}a=a.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function gf(e){return e=Uh(e),e!==null?vf(e):null}function vf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vf(e);if(t!==null)return t;e=e.sibling}return null}var yf=at.unstable_scheduleCallback,tc=at.unstable_cancelCallback,Bh=at.unstable_shouldYield,bh=at.unstable_requestPaint,Se=at.unstable_now,Hh=at.unstable_getCurrentPriorityLevel,$s=at.unstable_ImmediatePriority,wf=at.unstable_UserBlockingPriority,Al=at.unstable_NormalPriority,Qh=at.unstable_LowPriority,xf=at.unstable_IdlePriority,so=null,Rt=null;function Wh(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(so,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Gh,Vh=Math.log,Yh=Math.LN2;function Gh(e){return e>>>=0,e===0?32:31-(Vh(e)/Yh|0)|0}var el=64,tl=4194304;function ri(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Il(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ri(a):(l&=o,l!==0&&(r=ri(l)))}else o=n&~i,o!==0?r=ri(o):l!==0&&(r=ri(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function Kh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-kt(l),a=1<<o,s=i[o];s===-1?(!(a&n)||a&r)&&(i[o]=Kh(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function $a(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Sf(){var e=el;return el<<=1,!(el&4194240)&&(el=64),e}function Qo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ui(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function Xh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Us(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function Cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var jf,Bs,kf,Mf,Ef,Ua=!1,nl=[],cn=null,dn=null,fn=null,Si=new Map,Ci=new Map,on=[],Jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nc(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":dn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ci.delete(t.pointerId)}}function Qr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=bi(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function qh(e,t,n,r,i){switch(t){case"focusin":return cn=Qr(cn,e,t,n,r,i),!0;case"dragenter":return dn=Qr(dn,e,t,n,r,i),!0;case"mouseover":return fn=Qr(fn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Si.set(l,Qr(Si.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ci.set(l,Qr(Ci.get(l)||null,e,t,n,r,i)),!0}return!1}function Nf(e){var t=Tn(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=mf(n),t!==null){e.blockedOn=t,Ef(e.priority,function(){kf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Aa=r,n.target.dispatchEvent(r),Aa=null}else return t=bi(n),t!==null&&Bs(t),e.blockedOn=n,!1;t.shift()}return!0}function rc(e,t,n){vl(e)&&n.delete(t)}function e1(){Ua=!1,cn!==null&&vl(cn)&&(cn=null),dn!==null&&vl(dn)&&(dn=null),fn!==null&&vl(fn)&&(fn=null),Si.forEach(rc),Ci.forEach(rc)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ua||(Ua=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,e1)))}function ji(e){function t(i){return Wr(i,e)}if(0<nl.length){Wr(nl[0],e);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(cn!==null&&Wr(cn,e),dn!==null&&Wr(dn,e),fn!==null&&Wr(fn,e),Si.forEach(t),Ci.forEach(t),n=0;n<on.length;n++)r=on[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<on.length&&(n=on[0],n.blockedOn===null);)Nf(n),n.blockedOn===null&&on.shift()}var wr=Gt.ReactCurrentBatchConfig,Ol=!0;function t1(e,t,n,r){var i=q,l=wr.transition;wr.transition=null;try{q=1,bs(e,t,n,r)}finally{q=i,wr.transition=l}}function n1(e,t,n,r){var i=q,l=wr.transition;wr.transition=null;try{q=4,bs(e,t,n,r)}finally{q=i,wr.transition=l}}function bs(e,t,n,r){if(Ol){var i=Ba(e,t,n,r);if(i===null)ea(e,t,r,Fl,n),nc(e,r);else if(qh(i,e,t,n,r))r.stopPropagation();else if(nc(e,r),t&4&&-1<Jh.indexOf(e)){for(;i!==null;){var l=bi(i);if(l!==null&&jf(l),l=Ba(e,t,n,r),l===null&&ea(e,t,r,Fl,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var Fl=null;function Ba(e,t,n,r){if(Fl=null,e=Fs(r),e=Tn(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fl=e,null}function Lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hh()){case $s:return 1;case wf:return 4;case Al:case Qh:return 16;case xf:return 536870912;default:return 16}default:return 16}}var sn=null,Hs=null,yl=null;function Df(){if(yl)return yl;var e,t=Hs,n=t.length,r,i="value"in sn?sn.value:sn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return yl=i.slice(e,1<r?1-r:void 0)}function wl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function ic(){return!1}function ut(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?rl:ic,this.isPropagationStopped=ic,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=ut(Ar),Bi=fe({},Ar,{view:0,detail:0}),r1=ut(Bi),Wo,Vo,Vr,uo=fe({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Wo=e.screenX-Vr.screenX,Vo=e.screenY-Vr.screenY):Vo=Wo=0,Vr=e),Wo)},movementY:function(e){return"movementY"in e?e.movementY:Vo}}),lc=ut(uo),i1=fe({},uo,{dataTransfer:0}),l1=ut(i1),o1=fe({},Bi,{relatedTarget:0}),Yo=ut(o1),a1=fe({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),s1=ut(a1),u1=fe({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c1=ut(u1),d1=fe({},Ar,{data:0}),oc=ut(d1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function m1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=h1[e])?!!t[e]:!1}function Ws(){return m1}var g1=fe({},Bi,{key:function(e){if(e.key){var t=f1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?wl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),v1=ut(g1),y1=fe({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=ut(y1),w1=fe({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),x1=ut(w1),S1=fe({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),C1=ut(S1),j1=fe({},uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k1=ut(j1),M1=[9,13,27,32],Vs=Qt&&"CompositionEvent"in window,ui=null;Qt&&"documentMode"in document&&(ui=document.documentMode);var E1=Qt&&"TextEvent"in window&&!ui,Tf=Qt&&(!Vs||ui&&8<ui&&11>=ui),sc=" ",uc=!1;function _f(e,t){switch(e){case"keyup":return M1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rr=!1;function N1(e,t){switch(e){case"compositionend":return Pf(t);case"keypress":return t.which!==32?null:(uc=!0,sc);case"textInput":return e=t.data,e===sc&&uc?null:e;default:return null}}function L1(e,t){if(rr)return e==="compositionend"||!Vs&&_f(e,t)?(e=Df(),yl=Hs=sn=null,rr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tf&&t.locale!=="ko"?null:t.data;default:return null}}var D1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!D1[e.type]:t==="textarea"}function zf(e,t,n,r){cf(r),t=$l(t,"onChange"),0<t.length&&(n=new Qs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ci=null,ki=null;function T1(e){Qf(e,0)}function co(e){var t=or(e);if(nf(t))return e}function _1(e,t){if(e==="change")return t}var Rf=!1;if(Qt){var Go;if(Qt){var Ko="oninput"in document;if(!Ko){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),Ko=typeof dc.oninput=="function"}Go=Ko}else Go=!1;Rf=Go&&(!document.documentMode||9<document.documentMode)}function fc(){ci&&(ci.detachEvent("onpropertychange",Af),ki=ci=null)}function Af(e){if(e.propertyName==="value"&&co(ki)){var t=[];zf(t,ki,e,Fs(e)),hf(T1,t)}}function P1(e,t,n){e==="focusin"?(fc(),ci=t,ki=n,ci.attachEvent("onpropertychange",Af)):e==="focusout"&&fc()}function z1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return co(ki)}function R1(e,t){if(e==="click")return co(t)}function A1(e,t){if(e==="input"||e==="change")return co(t)}function I1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:I1;function Mi(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ja.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hc(e,t){var n=pc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pc(n)}}function If(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?If(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(){for(var e=window,t=Pl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Pl(e.document)}return t}function Ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function O1(e){var t=Of(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&If(n.ownerDocument.documentElement,n)){if(r!==null&&Ys(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=hc(n,l);var o=hc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var F1=Qt&&"documentMode"in document&&11>=document.documentMode,ir=null,ba=null,di=null,Ha=!1;function mc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ha||ir==null||ir!==Pl(r)||(r=ir,"selectionStart"in r&&Ys(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),di&&Mi(di,r)||(di=r,r=$l(ba,"onSelect"),0<r.length&&(t=new Qs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ir)))}function il(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var lr={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Zo={},Ff={};Qt&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete lr.animationend.animation,delete lr.animationiteration.animation,delete lr.animationstart.animation),"TransitionEvent"in window||delete lr.transitionend.transition);function fo(e){if(Zo[e])return Zo[e];if(!lr[e])return e;var t=lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ff)return Zo[e]=t[n];return e}var $f=fo("animationend"),Uf=fo("animationiteration"),Bf=fo("animationstart"),bf=fo("transitionend"),Hf=new Map,gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sn(e,t){Hf.set(e,t),Yn(t,[e])}for(var Xo=0;Xo<gc.length;Xo++){var Jo=gc[Xo],$1=Jo.toLowerCase(),U1=Jo[0].toUpperCase()+Jo.slice(1);Sn($1,"on"+U1)}Sn($f,"onAnimationEnd");Sn(Uf,"onAnimationIteration");Sn(Bf,"onAnimationStart");Sn("dblclick","onDoubleClick");Sn("focusin","onFocus");Sn("focusout","onBlur");Sn(bf,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));function vc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,$h(r,t,void 0,e),e.currentTarget=null}function Qf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&i.isPropagationStopped())break e;vc(i,a,c),l=s}else for(o=0;o<r.length;o++){if(a=r[o],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&i.isPropagationStopped())break e;vc(i,a,c),l=s}}}if(Rl)throw e=Fa,Rl=!1,Fa=null,e}function le(e,t){var n=t[Ga];n===void 0&&(n=t[Ga]=new Set);var r=e+"__bubble";n.has(r)||(Wf(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var ll="_reactListening"+Math.random().toString(36).slice(2);function Ei(e){if(!e[ll]){e[ll]=!0,Xd.forEach(function(n){n!=="selectionchange"&&(B1.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ll]||(t[ll]=!0,qo("selectionchange",!1,t))}}function Wf(e,t,n,r){switch(Lf(t)){case 1:var i=t1;break;case 4:i=n1;break;default:i=bs}n=i.bind(null,t,n,e),i=void 0,!Oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Tn(a),o===null)return;if(s=o.tag,s===5||s===6){r=l=o;continue e}a=a.parentNode}}r=r.return}hf(function(){var c=l,d=Fs(n),h=[];e:{var g=Hf.get(e);if(g!==void 0){var x=Qs,S=e;switch(e){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":x=v1;break;case"focusin":S="focus",x=Yo;break;case"focusout":S="blur",x=Yo;break;case"beforeblur":case"afterblur":x=Yo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=l1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=x1;break;case $f:case Uf:case Bf:x=s1;break;case bf:x=C1;break;case"scroll":x=r1;break;case"wheel":x=k1;break;case"copy":case"cut":case"paste":x=c1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ac}var w=(t&4)!==0,M=!w&&e==="scroll",p=w?g!==null?g+"Capture":null:g;w=[];for(var f=c,m;f!==null;){m=f;var k=m.stateNode;if(m.tag===5&&k!==null&&(m=k,p!==null&&(k=xi(f,p),k!=null&&w.push(Ni(f,k,m)))),M)break;f=f.return}0<w.length&&(g=new x(g,S,null,n,d),h.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Aa&&(S=n.relatedTarget||n.fromElement)&&(Tn(S)||S[Wt]))break e;if((x||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?Tn(S):null,S!==null&&(M=Gn(S),S!==M||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(w=lc,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=ac,k="onPointerLeave",p="onPointerEnter",f="pointer"),M=x==null?g:or(x),m=S==null?g:or(S),g=new w(k,f+"leave",x,n,d),g.target=M,g.relatedTarget=m,k=null,Tn(d)===c&&(w=new w(p,f+"enter",S,n,d),w.target=m,w.relatedTarget=M,k=w),M=k,x&&S)t:{for(w=x,p=S,f=0,m=w;m;m=qn(m))f++;for(m=0,k=p;k;k=qn(k))m++;for(;0<f-m;)w=qn(w),f--;for(;0<m-f;)p=qn(p),m--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=qn(w),p=qn(p)}w=null}else w=null;x!==null&&yc(h,g,x,w,!1),S!==null&&M!==null&&yc(h,M,S,w,!0)}}e:{if(g=c?or(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var N=_1;else if(cc(g))if(Rf)N=A1;else{N=z1;var v=P1}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=R1);if(N&&(N=N(e,c))){zf(h,N,n,d);break e}v&&v(e,g,c),e==="focusout"&&(v=g._wrapperState)&&v.controlled&&g.type==="number"&&Ta(g,"number",g.value)}switch(v=c?or(c):window,e){case"focusin":(cc(v)||v.contentEditable==="true")&&(ir=v,ba=c,di=null);break;case"focusout":di=ba=ir=null;break;case"mousedown":Ha=!0;break;case"contextmenu":case"mouseup":case"dragend":Ha=!1,mc(h,n,d);break;case"selectionchange":if(F1)break;case"keydown":case"keyup":mc(h,n,d)}var j;if(Vs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else rr?_f(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Tf&&n.locale!=="ko"&&(rr||T!=="onCompositionStart"?T==="onCompositionEnd"&&rr&&(j=Df()):(sn=d,Hs="value"in sn?sn.value:sn.textContent,rr=!0)),v=$l(c,T),0<v.length&&(T=new oc(T,e,null,n,d),h.push({event:T,listeners:v}),j?T.data=j:(j=Pf(n),j!==null&&(T.data=j)))),(j=E1?N1(e,n):L1(e,n))&&(c=$l(c,"onBeforeInput"),0<c.length&&(d=new oc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=j))}Qf(h,t)})}function Ni(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $l(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=xi(e,n),l!=null&&r.unshift(Ni(e,l,i)),l=xi(e,t),l!=null&&r.push(Ni(e,l,i))),e=e.return}return r}function qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function yc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=xi(n,l),s!=null&&o.unshift(Ni(n,s,a))):i||(s=xi(n,l),s!=null&&o.push(Ni(n,s,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var b1=/\r\n?/g,H1=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(b1,`
`).replace(H1,"")}function ol(e,t,n){if(t=wc(t),wc(e)!==t&&n)throw Error(D(425))}function Ul(){}var Qa=null,Wa=null;function Va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,Q1=typeof clearTimeout=="function"?clearTimeout:void 0,xc=typeof Promise=="function"?Promise:void 0,W1=typeof queueMicrotask=="function"?queueMicrotask:typeof xc<"u"?function(e){return xc.resolve(null).then(e).catch(V1)}:Ya;function V1(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ji(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ji(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ir=Math.random().toString(36).slice(2),zt="__reactFiber$"+Ir,Li="__reactProps$"+Ir,Wt="__reactContainer$"+Ir,Ga="__reactEvents$"+Ir,Y1="__reactListeners$"+Ir,G1="__reactHandles$"+Ir;function Tn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sc(e);e!==null;){if(n=e[zt])return n;e=Sc(e)}return t}e=n,n=e.parentNode}return null}function bi(e){return e=e[zt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function po(e){return e[Li]||null}var Ka=[],ar=-1;function Cn(e){return{current:e}}function ae(e){0>ar||(e.current=Ka[ar],Ka[ar]=null,ar--)}function ie(e,t){ar++,Ka[ar]=e.current,e.current=t}var xn={},Be=Cn(xn),Je=Cn(!1),Un=xn;function jr(e,t){var n=e.type.contextTypes;if(!n)return xn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Bl(){ae(Je),ae(Be)}function Cc(e,t,n){if(Be.current!==xn)throw Error(D(168));ie(Be,t),ie(Je,n)}function Vf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,Ph(e)||"Unknown",i));return fe({},n,r)}function bl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Un=Be.current,ie(Be,e),ie(Je,Je.current),!0}function jc(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Vf(e,t,Un),r.__reactInternalMemoizedMergedChildContext=e,ae(Je),ae(Be),ie(Be,e)):ae(Je),ie(Je,n)}var $t=null,ho=!1,na=!1;function Yf(e){$t===null?$t=[e]:$t.push(e)}function K1(e){ho=!0,Yf(e)}function jn(){if(!na&&$t!==null){na=!0;var e=0,t=q;try{var n=$t;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$t=null,ho=!1}catch(i){throw $t!==null&&($t=$t.slice(e+1)),yf($s,jn),i}finally{q=t,na=!1}}return null}var sr=[],ur=0,Hl=null,Ql=0,ft=[],pt=0,Bn=null,Ut=1,Bt="";function Ln(e,t){sr[ur++]=Ql,sr[ur++]=Hl,Hl=e,Ql=t}function Gf(e,t,n){ft[pt++]=Ut,ft[pt++]=Bt,ft[pt++]=Bn,Bn=e;var r=Ut;e=Bt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var l=32-kt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ut=1<<32-kt(t)+i|n<<i|r,Bt=l+e}else Ut=1<<l|n<<i|r,Bt=e}function Gs(e){e.return!==null&&(Ln(e,1),Gf(e,1,0))}function Ks(e){for(;e===Hl;)Hl=sr[--ur],sr[ur]=null,Ql=sr[--ur],sr[ur]=null;for(;e===Bn;)Bn=ft[--pt],ft[pt]=null,Bt=ft[--pt],ft[pt]=null,Ut=ft[--pt],ft[pt]=null}var ot=null,lt=null,ue=!1,jt=null;function Kf(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function kc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ot=e,lt=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ot=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Ut,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ot=e,lt=null,!0):!1;default:return!1}}function Za(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(ue){var t=lt;if(t){var n=t;if(!kc(e,t)){if(Za(e))throw Error(D(418));t=pn(n.nextSibling);var r=ot;t&&kc(e,t)?Kf(r,n):(e.flags=e.flags&-4097|2,ue=!1,ot=e)}}else{if(Za(e))throw Error(D(418));e.flags=e.flags&-4097|2,ue=!1,ot=e}}}function Mc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ot=e}function al(e){if(e!==ot)return!1;if(!ue)return Mc(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Va(e.type,e.memoizedProps)),t&&(t=lt)){if(Za(e))throw Zf(),Error(D(418));for(;t;)Kf(e,t),t=pn(t.nextSibling)}if(Mc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ot?pn(e.stateNode.nextSibling):null;return!0}function Zf(){for(var e=lt;e;)e=pn(e.nextSibling)}function kr(){lt=ot=null,ue=!1}function Zs(e){jt===null?jt=[e]:jt.push(e)}var Z1=Gt.ReactCurrentBatchConfig;function xt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Wl=Cn(null),Vl=null,cr=null,Xs=null;function Js(){Xs=cr=Vl=null}function qs(e){var t=Wl.current;ae(Wl),e._currentValue=t}function Ja(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xr(e,t){Vl=e,Xs=cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Xs!==e)if(e={context:e,memoizedValue:t,next:null},cr===null){if(Vl===null)throw Error(D(308));cr=e,Vl.dependencies={lanes:0,firstContext:e}}else cr=cr.next=e;return t}var _n=null;function eu(e){_n===null?_n=[e]:_n.push(e)}function Xf(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,eu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Vt(e,r)}function Vt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Vt(e,n)}return i=r.interleaved,i===null?(t.next=t,eu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Vt(e,n)}function xl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Us(e,n)}}function Ec(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yl(e,t,n,r){var i=e.updateQueue;ln=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,o===null?l=c:o.next=c,o=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(l!==null){var h=i.baseState;o=0,d=c=s=null,a=l;do{var g=a.lane,x=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(g=t,x=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){h=S.call(x,h,g);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,g=typeof S=="function"?S.call(x,h,g):S,g==null)break e;h=fe({},h,g);break e;case 2:ln=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,s=h):d=d.next=x,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(s=h),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Hn|=o,e.lanes=o,e.memoizedState=h}}function Nc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var qf=new Zd.Component().refs;function qa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mo={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=He(),i=gn(e),l=bt(r,i);l.payload=t,n!=null&&(l.callback=n),t=hn(e,l,i),t!==null&&(Mt(t,e,i,r),xl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=He(),i=gn(e),l=bt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=hn(e,l,i),t!==null&&(Mt(t,e,i,r),xl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=He(),r=gn(e),i=bt(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(Mt(t,e,r,n),xl(t,e,r))}};function Lc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Mi(n,r)||!Mi(i,l):!0}function e0(e,t,n){var r=!1,i=xn,l=t.contextType;return typeof l=="object"&&l!==null?l=gt(l):(i=qe(t)?Un:Be.current,r=t.contextTypes,l=(r=r!=null)?jr(e,i):xn),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Dc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mo.enqueueReplaceState(t,t.state,null)}function es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=qf,tu(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=gt(l):(l=qe(t)?Un:Be.current,i.context=jr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(qa(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mo.enqueueReplaceState(i,i.state,null),Yl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Yr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var a=i.refs;a===qf&&(a=i.refs={}),o===null?delete a[l]:a[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Tc(e){var t=e._init;return t(e._payload)}function t0(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=vn(p,f),p.index=0,p.sibling=null,p}function l(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,k){return f===null||f.tag!==6?(f=ua(m,p.mode,k),f.return=p,f):(f=i(f,m),f.return=p,f)}function s(p,f,m,k){var N=m.type;return N===nr?d(p,f,m.props.children,k,m.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===rn&&Tc(N)===f.type)?(k=i(f,m.props),k.ref=Yr(p,f,m),k.return=p,k):(k=El(m.type,m.key,m.props,null,p.mode,k),k.ref=Yr(p,f,m),k.return=p,k)}function c(p,f,m,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ca(m,p.mode,k),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,k,N){return f===null||f.tag!==7?(f=On(m,p.mode,k,N),f.return=p,f):(f=i(f,m),f.return=p,f)}function h(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ua(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Xi:return m=El(f.type,f.key,f.props,null,p.mode,m),m.ref=Yr(p,null,f),m.return=p,m;case tr:return f=ca(f,p.mode,m),f.return=p,f;case rn:var k=f._init;return h(p,k(f._payload),m)}if(ni(f)||br(f))return f=On(f,p.mode,m,null),f.return=p,f;sl(p,f)}return null}function g(p,f,m,k){var N=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return N!==null?null:a(p,f,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Xi:return m.key===N?s(p,f,m,k):null;case tr:return m.key===N?c(p,f,m,k):null;case rn:return N=m._init,g(p,f,N(m._payload),k)}if(ni(m)||br(m))return N!==null?null:d(p,f,m,k,null);sl(p,m)}return null}function x(p,f,m,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(m)||null,a(f,p,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Xi:return p=p.get(k.key===null?m:k.key)||null,s(f,p,k,N);case tr:return p=p.get(k.key===null?m:k.key)||null,c(f,p,k,N);case rn:var v=k._init;return x(p,f,m,v(k._payload),N)}if(ni(k)||br(k))return p=p.get(m)||null,d(f,p,k,N,null);sl(f,k)}return null}function S(p,f,m,k){for(var N=null,v=null,j=f,T=f=0,R=null;j!==null&&T<m.length;T++){j.index>T?(R=j,j=null):R=j.sibling;var F=g(p,j,m[T],k);if(F===null){j===null&&(j=R);break}e&&j&&F.alternate===null&&t(p,j),f=l(F,f,T),v===null?N=F:v.sibling=F,v=F,j=R}if(T===m.length)return n(p,j),ue&&Ln(p,T),N;if(j===null){for(;T<m.length;T++)j=h(p,m[T],k),j!==null&&(f=l(j,f,T),v===null?N=j:v.sibling=j,v=j);return ue&&Ln(p,T),N}for(j=r(p,j);T<m.length;T++)R=x(j,p,T,m[T],k),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?T:R.key),f=l(R,f,T),v===null?N=R:v.sibling=R,v=R);return e&&j.forEach(function(K){return t(p,K)}),ue&&Ln(p,T),N}function w(p,f,m,k){var N=br(m);if(typeof N!="function")throw Error(D(150));if(m=N.call(m),m==null)throw Error(D(151));for(var v=N=null,j=f,T=f=0,R=null,F=m.next();j!==null&&!F.done;T++,F=m.next()){j.index>T?(R=j,j=null):R=j.sibling;var K=g(p,j,F.value,k);if(K===null){j===null&&(j=R);break}e&&j&&K.alternate===null&&t(p,j),f=l(K,f,T),v===null?N=K:v.sibling=K,v=K,j=R}if(F.done)return n(p,j),ue&&Ln(p,T),N;if(j===null){for(;!F.done;T++,F=m.next())F=h(p,F.value,k),F!==null&&(f=l(F,f,T),v===null?N=F:v.sibling=F,v=F);return ue&&Ln(p,T),N}for(j=r(p,j);!F.done;T++,F=m.next())F=x(j,p,T,F.value,k),F!==null&&(e&&F.alternate!==null&&j.delete(F.key===null?T:F.key),f=l(F,f,T),v===null?N=F:v.sibling=F,v=F);return e&&j.forEach(function(ve){return t(p,ve)}),ue&&Ln(p,T),N}function M(p,f,m,k){if(typeof m=="object"&&m!==null&&m.type===nr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Xi:e:{for(var N=m.key,v=f;v!==null;){if(v.key===N){if(N=m.type,N===nr){if(v.tag===7){n(p,v.sibling),f=i(v,m.props.children),f.return=p,p=f;break e}}else if(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===rn&&Tc(N)===v.type){n(p,v.sibling),f=i(v,m.props),f.ref=Yr(p,v,m),f.return=p,p=f;break e}n(p,v);break}else t(p,v);v=v.sibling}m.type===nr?(f=On(m.props.children,p.mode,k,m.key),f.return=p,p=f):(k=El(m.type,m.key,m.props,null,p.mode,k),k.ref=Yr(p,f,m),k.return=p,p=k)}return o(p);case tr:e:{for(v=m.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ca(m,p.mode,k),f.return=p,p=f}return o(p);case rn:return v=m._init,M(p,f,v(m._payload),k)}if(ni(m))return S(p,f,m,k);if(br(m))return w(p,f,m,k);sl(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ua(m,p.mode,k),f.return=p,p=f),o(p)):n(p,f)}return M}var Mr=t0(!0),n0=t0(!1),Hi={},At=Cn(Hi),Di=Cn(Hi),Ti=Cn(Hi);function Pn(e){if(e===Hi)throw Error(D(174));return e}function nu(e,t){switch(ie(Ti,t),ie(Di,e),ie(At,Hi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pa(t,e)}ae(At),ie(At,t)}function Er(){ae(At),ae(Di),ae(Ti)}function r0(e){Pn(Ti.current);var t=Pn(At.current),n=Pa(t,e.type);t!==n&&(ie(Di,e),ie(At,n))}function ru(e){Di.current===e&&(ae(At),ae(Di))}var ce=Cn(0);function Gl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function iu(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var Sl=Gt.ReactCurrentDispatcher,ia=Gt.ReactCurrentBatchConfig,bn=0,de=null,ke=null,Te=null,Kl=!1,fi=!1,_i=0,X1=0;function Fe(){throw Error(D(321))}function lu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function ou(e,t,n,r,i,l){if(bn=l,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sl.current=e===null||e.memoizedState===null?t2:n2,e=n(r,i),fi){l=0;do{if(fi=!1,_i=0,25<=l)throw Error(D(301));l+=1,Te=ke=null,t.updateQueue=null,Sl.current=r2,e=n(r,i)}while(fi)}if(Sl.current=Zl,t=ke!==null&&ke.next!==null,bn=0,Te=ke=de=null,Kl=!1,t)throw Error(D(300));return e}function au(){var e=_i!==0;return _i=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?de.memoizedState=Te=e:Te=Te.next=e,Te}function vt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Te===null?de.memoizedState:Te.next;if(t!==null)Te=t,ke=e;else{if(e===null)throw Error(D(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Te===null?de.memoizedState=Te=e:Te=Te.next=e}return Te}function Pi(e,t){return typeof t=="function"?t(e):t}function la(e){var t=vt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var a=o=null,s=null,c=l;do{var d=c.lane;if((bn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,o=r):s=s.next=h,de.lanes|=d,Hn|=d}c=c.next}while(c!==null&&c!==l);s===null?o=r:s.next=a,Nt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,de.lanes|=l,Hn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oa(e){var t=vt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Nt(l,t.memoizedState)||(Ke=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function i0(){}function l0(e,t){var n=de,r=vt(),i=t(),l=!Nt(r.memoizedState,i);if(l&&(r.memoizedState=i,Ke=!0),r=r.queue,su(s0.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,zi(9,a0.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(D(349));bn&30||o0(n,t,i)}return i}function o0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function a0(e,t,n,r){t.value=n,t.getSnapshot=r,u0(t)&&c0(e)}function s0(e,t,n){return n(function(){u0(t)&&c0(e)})}function u0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function c0(e){var t=Vt(e,1);t!==null&&Mt(t,e,1,-1)}function _c(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pi,lastRenderedState:e},t.queue=e,e=e.dispatch=e2.bind(null,de,e),[t.memoizedState,e]}function zi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function d0(){return vt().memoizedState}function Cl(e,t,n,r){var i=_t();de.flags|=e,i.memoizedState=zi(1|t,n,void 0,r===void 0?null:r)}function go(e,t,n,r){var i=vt();r=r===void 0?null:r;var l=void 0;if(ke!==null){var o=ke.memoizedState;if(l=o.destroy,r!==null&&lu(r,o.deps)){i.memoizedState=zi(t,n,l,r);return}}de.flags|=e,i.memoizedState=zi(1|t,n,l,r)}function Pc(e,t){return Cl(8390656,8,e,t)}function su(e,t){return go(2048,8,e,t)}function f0(e,t){return go(4,2,e,t)}function p0(e,t){return go(4,4,e,t)}function h0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function m0(e,t,n){return n=n!=null?n.concat([e]):null,go(4,4,h0.bind(null,t,e),n)}function uu(){}function g0(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function v0(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&lu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function y0(e,t,n){return bn&21?(Nt(n,t)||(n=Sf(),de.lanes|=n,Hn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function J1(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=ia.transition;ia.transition={};try{e(!1),t()}finally{q=n,ia.transition=r}}function w0(){return vt().memoizedState}function q1(e,t,n){var r=gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x0(e))S0(t,n);else if(n=Xf(e,t,n,r),n!==null){var i=He();Mt(n,e,r,i),C0(n,t,r)}}function e2(e,t,n){var r=gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(e))S0(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,a=l(o,n);if(i.hasEagerState=!0,i.eagerState=a,Nt(a,o)){var s=t.interleaved;s===null?(i.next=i,eu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Xf(e,t,i,r),n!==null&&(i=He(),Mt(n,e,r,i),C0(n,t,r))}}function x0(e){var t=e.alternate;return e===de||t!==null&&t===de}function S0(e,t){fi=Kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function C0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Us(e,n)}}var Zl={readContext:gt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},t2={readContext:gt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:Pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cl(4194308,4,h0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cl(4,2,e,t)},useMemo:function(e,t){var n=_t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=_t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q1.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:_c,useDebugValue:uu,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=_c(!1),t=e[0];return e=J1.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=_t();if(ue){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Pe===null)throw Error(D(349));bn&30||o0(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Pc(s0.bind(null,r,l,e),[e]),r.flags|=2048,zi(9,a0.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=_t(),t=Pe.identifierPrefix;if(ue){var n=Bt,r=Ut;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=_i++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},n2={readContext:gt,useCallback:g0,useContext:gt,useEffect:su,useImperativeHandle:m0,useInsertionEffect:f0,useLayoutEffect:p0,useMemo:v0,useReducer:la,useRef:d0,useState:function(){return la(Pi)},useDebugValue:uu,useDeferredValue:function(e){var t=vt();return y0(t,ke.memoizedState,e)},useTransition:function(){var e=la(Pi)[0],t=vt().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:l0,useId:w0,unstable_isNewReconciler:!1},r2={readContext:gt,useCallback:g0,useContext:gt,useEffect:su,useImperativeHandle:m0,useInsertionEffect:f0,useLayoutEffect:p0,useMemo:v0,useReducer:oa,useRef:d0,useState:function(){return oa(Pi)},useDebugValue:uu,useDeferredValue:function(e){var t=vt();return ke===null?t.memoizedState=e:y0(t,ke.memoizedState,e)},useTransition:function(){var e=oa(Pi)[0],t=vt().memoizedState;return[e,t]},useMutableSource:i0,useSyncExternalStore:l0,useId:w0,unstable_isNewReconciler:!1};function Nr(e,t){try{var n="",r=t;do n+=_h(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ts(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var i2=typeof WeakMap=="function"?WeakMap:Map;function j0(e,t,n){n=bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jl||(Jl=!0,ds=r),ts(e,t)},n}function k0(e,t,n){n=bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ts(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ts(e,t),typeof r!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function zc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new i2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=y2.bind(null,e,t,n),t.then(e,e))}function Rc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ac(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=bt(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var l2=Gt.ReactCurrentOwner,Ke=!1;function be(e,t,n,r){t.child=e===null?n0(t,null,n,r):Mr(t,e.child,n,r)}function Ic(e,t,n,r,i){n=n.render;var l=t.ref;return xr(t,i),r=ou(e,t,n,r,l,i),n=au(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ue&&n&&Gs(t),t.flags|=1,be(e,t,r,i),t.child)}function Oc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!vu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,M0(e,t,l,r,i)):(e=El(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Mi,n(o,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=vn(l,r),e.ref=t.ref,e.return=t,t.child=e}function M0(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Mi(l,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return ns(e,t,n,r,i)}function E0(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(fr,it),it|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(fr,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ie(fr,it),it|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ie(fr,it),it|=r;return be(e,t,i,n),t.child}function N0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ns(e,t,n,r,i){var l=qe(n)?Un:Be.current;return l=jr(t,l),xr(t,i),n=ou(e,t,n,r,l,i),r=au(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ue&&r&&Gs(t),t.flags|=1,be(e,t,n,i),t.child)}function Fc(e,t,n,r,i){if(qe(n)){var l=!0;bl(t)}else l=!1;if(xr(t,i),t.stateNode===null)jl(e,t),e0(t,n,r),es(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=gt(c):(c=qe(n)?Un:Be.current,c=jr(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Dc(t,o,r,c),ln=!1;var g=t.memoizedState;o.state=g,Yl(t,r,o,i),s=t.memoizedState,a!==r||g!==s||Je.current||ln?(typeof d=="function"&&(qa(t,n,d,r),s=t.memoizedState),(a=ln||Lc(t,n,a,r,g,s,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Jf(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:xt(t.type,a),o.props=c,h=t.pendingProps,g=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=gt(s):(s=qe(n)?Un:Be.current,s=jr(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||g!==s)&&Dc(t,o,r,s),ln=!1,g=t.memoizedState,o.state=g,Yl(t,r,o,i);var S=t.memoizedState;a!==h||g!==S||Je.current||ln?(typeof x=="function"&&(qa(t,n,x,r),S=t.memoizedState),(c=ln||Lc(t,n,c,r,g,S,s)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),o.props=r,o.state=S,o.context=s,r=c):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return rs(e,t,n,r,l,i)}function rs(e,t,n,r,i,l){N0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&jc(t,n,!1),Yt(e,t,l);r=t.stateNode,l2.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Mr(t,e.child,null,l),t.child=Mr(t,null,a,l)):be(e,t,a,l),t.memoizedState=r.state,i&&jc(t,n,!0),t.child}function L0(e){var t=e.stateNode;t.pendingContext?Cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cc(e,t.context,!1),nu(e,t.containerInfo)}function $c(e,t,n,r,i){return kr(),Zs(i),t.flags|=256,be(e,t,n,r),t.child}var is={dehydrated:null,treeContext:null,retryLane:0};function ls(e){return{baseLanes:e,cachePool:null,transitions:null}}function D0(e,t,n){var r=t.pendingProps,i=ce.current,l=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ce,i&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=wo(o,r,0,null),e=On(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ls(n),t.memoizedState=is,e):cu(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return o2(e,t,o,r,a,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=vn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?l=vn(a,l):(l=On(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?ls(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=is,r}return l=e.child,e=l.sibling,r=vn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cu(e,t){return t=wo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ul(e,t,n,r){return r!==null&&Zs(r),Mr(t,e.child,null,n),e=cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o2(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=aa(Error(D(422))),ul(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=wo({mode:"visible",children:r.children},i,0,null),l=On(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Mr(t,e.child,null,o),t.child.memoizedState=ls(o),t.memoizedState=is,l);if(!(t.mode&1))return ul(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(D(419)),r=aa(l,r,void 0),ul(e,t,o,r)}if(a=(o&e.childLanes)!==0,Ke||a){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Vt(e,i),Mt(r,e,i,-1))}return gu(),r=aa(Error(D(421))),ul(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=w2.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,lt=pn(i.nextSibling),ot=t,ue=!0,jt=null,e!==null&&(ft[pt++]=Ut,ft[pt++]=Bt,ft[pt++]=Bn,Ut=e.id,Bt=e.overflow,Bn=t),t=cu(t,r.children),t.flags|=4096,t)}function Uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ja(e.return,t,n)}function sa(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function T0(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(be(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uc(e,n,t);else if(e.tag===19)Uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Gl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),sa(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Gl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}sa(t,!0,n,null,l);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Hn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a2(e,t,n){switch(t.tag){case 3:L0(t),kr();break;case 5:r0(t);break;case 1:qe(t.type)&&bl(t);break;case 4:nu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?D0(e,t,n):(ie(ce,ce.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return T0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,E0(e,t,n)}return Yt(e,t,n)}var _0,os,P0,z0;_0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};os=function(){};P0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Pn(At.current);var l=null;switch(n){case"input":i=La(e,i),r=La(e,r),l=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),l=[];break;case"textarea":i=_a(e,i),r=_a(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ul)}za(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(yi.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&a[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(yi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&le("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};z0=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function s2(e,t,n){var r=t.pendingProps;switch(Ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return qe(t.type)&&Bl(),$e(t),null;case 3:return r=t.stateNode,Er(),ae(Je),ae(Be),iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,jt!==null&&(hs(jt),jt=null))),os(e,t),$e(t),null;case 5:ru(t);var i=Pn(Ti.current);if(n=t.type,e!==null&&t.stateNode!=null)P0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return $e(t),null}if(e=Pn(At.current),al(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[zt]=t,r[Li]=l,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ii.length;i++)le(ii[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Ku(r,l),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},le("invalid",r);break;case"textarea":Xu(r,l),le("invalid",r)}za(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&ol(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&ol(r.textContent,a,e),i=["children",""+a]):yi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Ji(r),Zu(r,l,!0);break;case"textarea":Ji(r),Ju(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ul)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=of(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[zt]=t,e[Li]=r,_0(e,t,!1,!1),t.stateNode=e;e:{switch(o=Ra(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<ii.length;i++)le(ii[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":Ku(e,r),i=La(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),le("invalid",e);break;case"textarea":Xu(e,r),i=_a(e,r),le("invalid",e);break;default:i=r}za(n,i),a=i;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?uf(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&af(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&wi(e,s):typeof s=="number"&&wi(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(yi.hasOwnProperty(l)?s!=null&&l==="onScroll"&&le("scroll",e):s!=null&&Rs(e,l,s,o))}switch(n){case"input":Ji(e),Zu(e,r,!1);break;case"textarea":Ji(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+wn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?gr(e,!!r.multiple,l,!1):r.defaultValue!=null&&gr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)z0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Pn(Ti.current),Pn(At.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(l=r.nodeValue!==n)&&(e=ot,e!==null))switch(e.tag){case 3:ol(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return $e(t),null;case 13:if(ae(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&lt!==null&&t.mode&1&&!(t.flags&128))Zf(),kr(),t.flags|=98560,l=!1;else if(l=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(D(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(D(317));l[zt]=t}else kr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),l=!1}else jt!==null&&(hs(jt),jt=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Me===0&&(Me=3):gu())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Er(),os(e,t),e===null&&Ei(t.stateNode.containerInfo),$e(t),null;case 10:return qs(t.type._context),$e(t),null;case 17:return qe(t.type)&&Bl(),$e(t),null;case 19:if(ae(ce),l=t.memoizedState,l===null)return $e(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)Gr(l,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Gl(e),o!==null){for(t.flags|=128,Gr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&Se()>Lr&&(t.flags|=128,r=!0,Gr(l,!1),t.lanes=4194304)}else{if(!r)if(e=Gl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ue)return $e(t),null}else 2*Se()-l.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,n=ce.current,ie(ce,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function u2(e,t){switch(Ks(t),t.tag){case 1:return qe(t.type)&&Bl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ae(Je),ae(Be),iu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ru(t),null;case 13:if(ae(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ce),null;case 4:return Er(),null;case 10:return qs(t.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var cl=!1,Ue=!1,c2=typeof WeakSet=="function"?WeakSet:Set,z=null;function dr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function as(e,t,n){try{n()}catch(r){me(e,t,r)}}var Bc=!1;function d2(e,t){if(Qa=Ol,e=Of(),Ys(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,a=-1,s=-1,c=0,d=0,h=e,g=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==l||r!==0&&h.nodeType!==3||(s=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===n&&++c===i&&(a=o),g===l&&++d===r&&(s=o),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wa={focusedElem:e,selectionRange:n},Ol=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,M=S.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:xt(t.type,w),M);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){me(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return S=Bc,Bc=!1,S}function pi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&as(t,n,l)}i=i.next}while(i!==r)}}function vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function R0(e){var t=e.alternate;t!==null&&(e.alternate=null,R0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[Li],delete t[Ga],delete t[Y1],delete t[G1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function A0(e){return e.tag===5||e.tag===3||e.tag===4}function bc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||A0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function us(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ul));else if(r!==4&&(e=e.child,e!==null))for(us(e,t,n),e=e.sibling;e!==null;)us(e,t,n),e=e.sibling}function cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cs(e,t,n),e=e.sibling;e!==null;)cs(e,t,n),e=e.sibling}var Re=null,St=!1;function en(e,t,n){for(n=n.child;n!==null;)I0(e,t,n),n=n.sibling}function I0(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(so,n)}catch{}switch(n.tag){case 5:Ue||dr(n,t);case 6:var r=Re,i=St;Re=null,en(e,t,n),Re=r,St=i,Re!==null&&(St?(e=Re,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(St?(e=Re,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),ji(e)):ta(Re,n.stateNode));break;case 4:r=Re,i=St,Re=n.stateNode.containerInfo,St=!0,en(e,t,n),Re=r,St=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&as(n,t,o),i=i.next}while(i!==r)}en(e,t,n);break;case 1:if(!Ue&&(dr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}en(e,t,n);break;case 21:en(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,en(e,t,n),Ue=r):en(e,t,n);break;default:en(e,t,n)}}function Hc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new c2),t.forEach(function(r){var i=x2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,St=!1;break e;case 3:Re=a.stateNode.containerInfo,St=!0;break e;case 4:Re=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Re===null)throw Error(D(160));I0(l,o,i),Re=null,St=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){me(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)O0(t,e),t=t.sibling}function O0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(wt(t,e),Tt(e),r&4){try{pi(3,e,e.return),vo(3,e)}catch(w){me(e,e.return,w)}try{pi(5,e,e.return)}catch(w){me(e,e.return,w)}}break;case 1:wt(t,e),Tt(e),r&512&&n!==null&&dr(n,n.return);break;case 5:if(wt(t,e),Tt(e),r&512&&n!==null&&dr(n,n.return),e.flags&32){var i=e.stateNode;try{wi(i,"")}catch(w){me(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&rf(i,l),Ra(a,o);var c=Ra(a,l);for(o=0;o<s.length;o+=2){var d=s[o],h=s[o+1];d==="style"?uf(i,h):d==="dangerouslySetInnerHTML"?af(i,h):d==="children"?wi(i,h):Rs(i,d,h,c)}switch(a){case"input":Da(i,l);break;case"textarea":lf(i,l);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?gr(i,!!l.multiple,x,!1):g!==!!l.multiple&&(l.defaultValue!=null?gr(i,!!l.multiple,l.defaultValue,!0):gr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Li]=l}catch(w){me(e,e.return,w)}}break;case 6:if(wt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(w){me(e,e.return,w)}}break;case 3:if(wt(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(t.containerInfo)}catch(w){me(e,e.return,w)}break;case 4:wt(t,e),Tt(e);break;case 13:wt(t,e),Tt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(pu=Se())),r&4&&Hc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(c=Ue)||d,wt(t,e),Ue=c):wt(t,e),Tt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(z=e,d=e.child;d!==null;){for(h=z=d;z!==null;){switch(g=z,x=g.child,g.tag){case 0:case 11:case 14:case 15:pi(4,g,g.return);break;case 1:dr(g,g.return);var S=g.stateNode;if(typeof S.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:dr(g,g.return);break;case 22:if(g.memoizedState!==null){Wc(h);continue}}x!==null?(x.return=g,z=x):Wc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=h.stateNode,s=h.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=sf("display",o))}catch(w){me(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){me(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wt(t,e),Tt(e),r&4&&Hc(e);break;case 21:break;default:wt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(A0(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wi(i,""),r.flags&=-33);var l=bc(e);cs(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=bc(e);us(e,a,o);break;default:throw Error(D(161))}}catch(s){me(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f2(e,t,n){z=e,F0(e)}function F0(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var i=z,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ue;a=cl;var c=Ue;if(cl=o,(Ue=s)&&!c)for(z=i;z!==null;)o=z,s=o.child,o.tag===22&&o.memoizedState!==null?Vc(i):s!==null?(s.return=o,z=s):Vc(i);for(;l!==null;)z=l,F0(l),l=l.sibling;z=i,cl=a,Ue=c}Qc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,z=l):Qc(e)}}function Qc(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:xt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Nc(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Nc(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ji(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ue||t.flags&512&&ss(t)}catch(g){me(t,t.return,g)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function Wc(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function Vc(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vo(4,t)}catch(s){me(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){me(t,i,s)}}var l=t.return;try{ss(t)}catch(s){me(t,l,s)}break;case 5:var o=t.return;try{ss(t)}catch(s){me(t,o,s)}}}catch(s){me(t,t.return,s)}if(t===e){z=null;break}var a=t.sibling;if(a!==null){a.return=t.return,z=a;break}z=t.return}}var p2=Math.ceil,Xl=Gt.ReactCurrentDispatcher,du=Gt.ReactCurrentOwner,mt=Gt.ReactCurrentBatchConfig,X=0,Pe=null,je=null,Ae=0,it=0,fr=Cn(0),Me=0,Ri=null,Hn=0,yo=0,fu=0,hi=null,Ge=null,pu=0,Lr=1/0,Ot=null,Jl=!1,ds=null,mn=null,dl=!1,un=null,ql=0,mi=0,fs=null,kl=-1,Ml=0;function He(){return X&6?Se():kl!==-1?kl:kl=Se()}function gn(e){return e.mode&1?X&2&&Ae!==0?Ae&-Ae:Z1.transition!==null?(Ml===0&&(Ml=Sf()),Ml):(e=q,e!==0||(e=window.event,e=e===void 0?16:Lf(e.type)),e):1}function Mt(e,t,n,r){if(50<mi)throw mi=0,fs=null,Error(D(185));Ui(e,n,r),(!(X&2)||e!==Pe)&&(e===Pe&&(!(X&2)&&(yo|=n),Me===4&&an(e,Ae)),et(e,r),n===1&&X===0&&!(t.mode&1)&&(Lr=Se()+500,ho&&jn()))}function et(e,t){var n=e.callbackNode;Zh(e,t);var r=Il(e,e===Pe?Ae:0);if(r===0)n!==null&&tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tc(n),t===1)e.tag===0?K1(Yc.bind(null,e)):Yf(Yc.bind(null,e)),W1(function(){!(X&6)&&jn()}),n=null;else{switch(Cf(r)){case 1:n=$s;break;case 4:n=wf;break;case 16:n=Al;break;case 536870912:n=xf;break;default:n=Al}n=V0(n,$0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function $0(e,t){if(kl=-1,Ml=0,X&6)throw Error(D(327));var n=e.callbackNode;if(Sr()&&e.callbackNode!==n)return null;var r=Il(e,e===Pe?Ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=eo(e,r);else{t=r;var i=X;X|=2;var l=B0();(Pe!==e||Ae!==t)&&(Ot=null,Lr=Se()+500,In(e,t));do try{g2();break}catch(a){U0(e,a)}while(!0);Js(),Xl.current=l,X=i,je!==null?t=0:(Pe=null,Ae=0,t=Me)}if(t!==0){if(t===2&&(i=$a(e),i!==0&&(r=i,t=ps(e,i))),t===1)throw n=Ri,In(e,0),an(e,r),et(e,Se()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!h2(i)&&(t=eo(e,r),t===2&&(l=$a(e),l!==0&&(r=l,t=ps(e,l))),t===1))throw n=Ri,In(e,0),an(e,r),et(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Dn(e,Ge,Ot);break;case 3:if(an(e,r),(r&130023424)===r&&(t=pu+500-Se(),10<t)){if(Il(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){He(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ya(Dn.bind(null,e,Ge,Ot),t);break}Dn(e,Ge,Ot);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-kt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p2(r/1960))-r,10<r){e.timeoutHandle=Ya(Dn.bind(null,e,Ge,Ot),r);break}Dn(e,Ge,Ot);break;case 5:Dn(e,Ge,Ot);break;default:throw Error(D(329))}}}return et(e,Se()),e.callbackNode===n?$0.bind(null,e):null}function ps(e,t){var n=hi;return e.current.memoizedState.isDehydrated&&(In(e,t).flags|=256),e=eo(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&hs(t)),e}function hs(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function h2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Nt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~fu,t&=~yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function Yc(e){if(X&6)throw Error(D(327));Sr();var t=Il(e,0);if(!(t&1))return et(e,Se()),null;var n=eo(e,t);if(e.tag!==0&&n===2){var r=$a(e);r!==0&&(t=r,n=ps(e,r))}if(n===1)throw n=Ri,In(e,0),an(e,t),et(e,Se()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,Ge,Ot),et(e,Se()),null}function hu(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Lr=Se()+500,ho&&jn())}}function Qn(e){un!==null&&un.tag===0&&!(X&6)&&Sr();var t=X;X|=1;var n=mt.transition,r=q;try{if(mt.transition=null,q=1,e)return e()}finally{q=r,mt.transition=n,X=t,!(X&6)&&jn()}}function mu(){it=fr.current,ae(fr)}function In(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Q1(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Bl();break;case 3:Er(),ae(Je),ae(Be),iu();break;case 5:ru(r);break;case 4:Er();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:qs(r.type._context);break;case 22:case 23:mu()}n=n.return}if(Pe=e,je=e=vn(e.current,null),Ae=it=t,Me=0,Ri=null,fu=yo=Hn=0,Ge=hi=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}_n=null}return e}function U0(e,t){do{var n=je;try{if(Js(),Sl.current=Zl,Kl){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kl=!1}if(bn=0,Te=ke=de=null,fi=!1,_i=0,du.current=null,n===null||n.return===null){Me=1,Ri=t,je=null;break}e:{var l=e,o=n.return,a=n,s=t;if(t=Ae,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Rc(o);if(x!==null){x.flags&=-257,Ac(x,o,a,l,t),x.mode&1&&zc(l,c,t),t=x,s=c;var S=t.updateQueue;if(S===null){var w=new Set;w.add(s),t.updateQueue=w}else S.add(s);break e}else{if(!(t&1)){zc(l,c,t),gu();break e}s=Error(D(426))}}else if(ue&&a.mode&1){var M=Rc(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Ac(M,o,a,l,t),Zs(Nr(s,a));break e}}l=s=Nr(s,a),Me!==4&&(Me=2),hi===null?hi=[l]:hi.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=j0(l,s,t);Ec(l,p);break e;case 1:a=s;var f=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mn===null||!mn.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=k0(l,a,t);Ec(l,k);break e}}l=l.return}while(l!==null)}H0(n)}catch(N){t=N,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function B0(){var e=Xl.current;return Xl.current=Zl,e===null?Zl:e}function gu(){(Me===0||Me===3||Me===2)&&(Me=4),Pe===null||!(Hn&268435455)&&!(yo&268435455)||an(Pe,Ae)}function eo(e,t){var n=X;X|=2;var r=B0();(Pe!==e||Ae!==t)&&(Ot=null,In(e,t));do try{m2();break}catch(i){U0(e,i)}while(!0);if(Js(),X=n,Xl.current=r,je!==null)throw Error(D(261));return Pe=null,Ae=0,Me}function m2(){for(;je!==null;)b0(je)}function g2(){for(;je!==null&&!Bh();)b0(je)}function b0(e){var t=W0(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?H0(e):je=t,du.current=null}function H0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=u2(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,je=null;return}}else if(n=s2(n,t,it),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Me===0&&(Me=5)}function Dn(e,t,n){var r=q,i=mt.transition;try{mt.transition=null,q=1,v2(e,t,n,r)}finally{mt.transition=i,q=r}return null}function v2(e,t,n,r){do Sr();while(un!==null);if(X&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Xh(e,l),e===Pe&&(je=Pe=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,V0(Al,function(){return Sr(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=mt.transition,mt.transition=null;var o=q;q=1;var a=X;X|=4,du.current=null,d2(e,n),O0(n,e),O1(Wa),Ol=!!Qa,Wa=Qa=null,e.current=n,f2(n),bh(),X=a,q=o,mt.transition=l}else e.current=n;if(dl&&(dl=!1,un=e,ql=i),l=e.pendingLanes,l===0&&(mn=null),Wh(n.stateNode),et(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,e=ds,ds=null,e;return ql&1&&e.tag!==0&&Sr(),l=e.pendingLanes,l&1?e===fs?mi++:(mi=0,fs=e):mi=0,jn(),null}function Sr(){if(un!==null){var e=Cf(ql),t=mt.transition,n=q;try{if(mt.transition=null,q=16>e?16:e,un===null)var r=!1;else{if(e=un,un=null,ql=0,X&6)throw Error(D(331));var i=X;for(X|=4,z=e.current;z!==null;){var l=z,o=l.child;if(z.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(z=c;z!==null;){var d=z;switch(d.tag){case 0:case 11:case 15:pi(8,d,l)}var h=d.child;if(h!==null)h.return=d,z=h;else for(;z!==null;){d=z;var g=d.sibling,x=d.return;if(R0(d),d===c){z=null;break}if(g!==null){g.return=x,z=g;break}z=x}}}var S=l.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}z=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,z=o;else e:for(;z!==null;){if(l=z,l.flags&2048)switch(l.tag){case 0:case 11:case 15:pi(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,z=p;break e}z=l.return}}var f=e.current;for(z=f;z!==null;){o=z;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,z=m;else e:for(o=f;z!==null;){if(a=z,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vo(9,a)}}catch(N){me(a,a.return,N)}if(a===o){z=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,z=k;break e}z=a.return}}if(X=i,jn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(so,e)}catch{}r=!0}return r}finally{q=n,mt.transition=t}}return!1}function Gc(e,t,n){t=Nr(n,t),t=j0(e,t,1),e=hn(e,t,1),t=He(),e!==null&&(Ui(e,1,t),et(e,t))}function me(e,t,n){if(e.tag===3)Gc(e,e,n);else for(;t!==null;){if(t.tag===3){Gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mn===null||!mn.has(r))){e=Nr(n,e),e=k0(t,e,1),t=hn(t,e,1),e=He(),t!==null&&(Ui(t,1,e),et(t,e));break}}t=t.return}}function y2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=He(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ae&n)===n&&(Me===4||Me===3&&(Ae&130023424)===Ae&&500>Se()-pu?In(e,0):fu|=n),et(e,t)}function Q0(e,t){t===0&&(e.mode&1?(t=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):t=1);var n=He();e=Vt(e,t),e!==null&&(Ui(e,t,n),et(e,n))}function w2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Q0(e,n)}function x2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Q0(e,n)}var W0;W0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Je.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,a2(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,ue&&t.flags&1048576&&Gf(t,Ql,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jl(e,t),e=t.pendingProps;var i=jr(t,Be.current);xr(t,n),i=ou(null,t,r,e,i,n);var l=au();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(l=!0,bl(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,tu(t),i.updater=mo,t.stateNode=i,i._reactInternals=t,es(t,r,e,n),t=rs(null,t,r,!0,l,n)):(t.tag=0,ue&&l&&Gs(t),be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=C2(r),e=xt(r,e),i){case 0:t=ns(null,t,r,e,n);break e;case 1:t=Fc(null,t,r,e,n);break e;case 11:t=Ic(null,t,r,e,n);break e;case 14:t=Oc(null,t,r,xt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),ns(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Fc(e,t,r,i,n);case 3:e:{if(L0(t),e===null)throw Error(D(387));r=t.pendingProps,l=t.memoizedState,i=l.element,Jf(e,t),Yl(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=Nr(Error(D(423)),t),t=$c(e,t,r,n,i);break e}else if(r!==i){i=Nr(Error(D(424)),t),t=$c(e,t,r,n,i);break e}else for(lt=pn(t.stateNode.containerInfo.firstChild),ot=t,ue=!0,jt=null,n=n0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(kr(),r===i){t=Yt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return r0(t),e===null&&Xa(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Va(r,i)?o=null:l!==null&&Va(r,l)&&(t.flags|=32),N0(e,t),be(e,t,o,n),t.child;case 6:return e===null&&Xa(t),null;case 13:return D0(e,t,n);case 4:return nu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),Ic(e,t,r,i,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,ie(Wl,r._currentValue),r._currentValue=o,l!==null)if(Nt(l.value,o)){if(l.children===i.children&&!Je.current){t=Yt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){o=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=bt(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ja(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(D(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ja(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,xr(t,n),i=gt(i),r=r(i),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,i=xt(r,t.pendingProps),i=xt(r.type,i),Oc(e,t,r,i,n);case 15:return M0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:xt(r,i),jl(e,t),t.tag=1,qe(r)?(e=!0,bl(t)):e=!1,xr(t,n),e0(t,r,i),es(t,r,i,n),rs(null,t,r,!0,e,n);case 19:return T0(e,t,n);case 22:return E0(e,t,n)}throw Error(D(156,t.tag))};function V0(e,t){return yf(e,t)}function S2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new S2(e,t,n,r)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C2(e){if(typeof e=="function")return vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Is)return 11;if(e===Os)return 14}return 2}function vn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function El(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")vu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case nr:return On(n.children,i,l,t);case As:o=8,i|=8;break;case ka:return e=ht(12,n,t,i|2),e.elementType=ka,e.lanes=l,e;case Ma:return e=ht(13,n,t,i),e.elementType=Ma,e.lanes=l,e;case Ea:return e=ht(19,n,t,i),e.elementType=Ea,e.lanes=l,e;case ef:return wo(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Jd:o=10;break e;case qd:o=9;break e;case Is:o=11;break e;case Os:o=14;break e;case rn:o=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=ht(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function On(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function wo(e,t,n,r){return e=ht(22,e,r,t),e.elementType=ef,e.lanes=n,e.stateNode={isHidden:!1},e}function ua(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function j2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qo(0),this.expirationTimes=Qo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yu(e,t,n,r,i,l,o,a,s){return e=new j2(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ht(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(l),e}function k2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Y0(e){if(!e)return xn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(qe(n))return Vf(e,n,t)}return t}function G0(e,t,n,r,i,l,o,a,s){return e=yu(n,r,!0,e,i,l,o,a,s),e.context=Y0(null),n=e.current,r=He(),i=gn(n),l=bt(r,i),l.callback=t??null,hn(n,l,i),e.current.lanes=i,Ui(e,i,r),et(e,r),e}function xo(e,t,n,r){var i=t.current,l=He(),o=gn(i);return n=Y0(n),t.context===null?t.context=n:t.pendingContext=n,t=bt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,o),e!==null&&(Mt(e,i,o,l),xl(e,i,o)),o}function to(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function wu(e,t){Kc(e,t),(e=e.alternate)&&Kc(e,t)}function M2(){return null}var K0=typeof reportError=="function"?reportError:function(e){console.error(e)};function xu(e){this._internalRoot=e}So.prototype.render=xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));xo(e,t,null,null)};So.prototype.unmount=xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qn(function(){xo(null,e,null,null)}),t[Wt]=null}};function So(e){this._internalRoot=e}So.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<on.length&&t!==0&&t<on[n].priority;n++);on.splice(n,0,e),n===0&&Nf(e)}};function Su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zc(){}function E2(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=to(o);l.call(c)}}var o=G0(t,r,e,0,null,!1,!1,"",Zc);return e._reactRootContainer=o,e[Wt]=o.current,Ei(e.nodeType===8?e.parentNode:e),Qn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=to(s);a.call(c)}}var s=yu(e,0,!1,null,null,!1,!1,"",Zc);return e._reactRootContainer=s,e[Wt]=s.current,Ei(e.nodeType===8?e.parentNode:e),Qn(function(){xo(t,s,n,r)}),s}function jo(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var a=i;i=function(){var s=to(o);a.call(s)}}xo(t,o,e,i)}else o=E2(n,t,e,i,r);return to(o)}jf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ri(t.pendingLanes);n!==0&&(Us(t,n|1),et(t,Se()),!(X&6)&&(Lr=Se()+500,jn()))}break;case 13:Qn(function(){var r=Vt(e,1);if(r!==null){var i=He();Mt(r,e,1,i)}}),wu(e,1)}};Bs=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var n=He();Mt(t,e,134217728,n)}wu(e,134217728)}};kf=function(e){if(e.tag===13){var t=gn(e),n=Vt(e,t);if(n!==null){var r=He();Mt(n,e,t,r)}wu(e,t)}};Mf=function(){return q};Ef=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Ia=function(e,t,n){switch(t){case"input":if(Da(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=po(r);if(!i)throw Error(D(90));nf(r),Da(r,i)}}}break;case"textarea":lf(e,n);break;case"select":t=n.value,t!=null&&gr(e,!!n.multiple,t,!1)}};ff=hu;pf=Qn;var N2={usingClientEntryPoint:!1,Events:[bi,or,po,cf,df,hu]},Kr={findFiberByHostInstance:Tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},L2={bundleType:Kr.bundleType,version:Kr.version,rendererPackageName:Kr.rendererPackageName,rendererConfig:Kr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gf(e),e===null?null:e.stateNode},findFiberByHostInstance:Kr.findFiberByHostInstance||M2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fl.isDisabled&&fl.supportsFiber)try{so=fl.inject(L2),Rt=fl}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N2;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(t))throw Error(D(200));return k2(e,t,null,n)};st.createRoot=function(e,t){if(!Su(e))throw Error(D(299));var n=!1,r="",i=K0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yu(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,Ei(e.nodeType===8?e.parentNode:e),new xu(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=gf(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return Qn(e)};st.hydrate=function(e,t,n){if(!Co(t))throw Error(D(200));return jo(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!Su(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=K0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=G0(t,null,e,1,n??null,i,!1,l,o),e[Wt]=t.current,Ei(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new So(t)};st.render=function(e,t,n){if(!Co(t))throw Error(D(200));return jo(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Co(e))throw Error(D(40));return e._reactRootContainer?(Qn(function(){jo(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};st.unstable_batchedUpdates=hu;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Co(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return jo(e,t,n,!1,r)};st.version="18.2.0-next-9e3b772b8-20220608";function Z0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z0)}catch(e){console.error(e)}}Z0(),Yd.exports=st;var Cu=Yd.exports;const D2=Id(Cu),T2=Ad({__proto__:null,default:D2},[Cu]);var Xc=Cu;Ca.createRoot=Xc.createRoot,Ca.hydrateRoot=Xc.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)}var xe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xe||(xe={}));const Jc="popstate";function _2(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:a}=r.location;return Ai("",{pathname:l,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vn(i)}return z2(t,n,null,e)}function Q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function P2(){return Math.random().toString(36).substr(2,8)}function qc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ai(e,t,n,r){return n===void 0&&(n=null),ge({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kt(t):t,{state:n,key:t&&t.key||r||P2()})}function Vn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Kt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,a=xe.Pop,s=null,c=d();c==null&&(c=0,o.replaceState(ge({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=xe.Pop;let M=d(),p=M==null?null:M-c;c=M,s&&s({action:a,location:w.location,delta:p})}function g(M,p){a=xe.Push;let f=Ai(w.location,M,p);n&&n(f,M),c=d()+1;let m=qc(f,c),k=w.createHref(f);try{o.pushState(m,"",k)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(k)}l&&s&&s({action:a,location:w.location,delta:1})}function x(M,p){a=xe.Replace;let f=Ai(w.location,M,p);n&&n(f,M),c=d();let m=qc(f,c),k=w.createHref(f);o.replaceState(m,"",k),l&&s&&s({action:a,location:w.location,delta:0})}function S(M){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof M=="string"?M:Vn(M);return Q(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return e(i,o)},listen(M){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Jc,h),s=M,()=>{i.removeEventListener(Jc,h),s=null}},createHref(M){return t(i,M)},createURL:S,encodeLocation(M){let p=S(M);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:x,go(M){return o.go(M)}};return w}var he;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(he||(he={}));const R2=new Set(["lazy","caseSensitive","path","id","index","children"]);function A2(e){return e.index===!0}function ms(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,l)=>{let o=[...n,l],a=typeof i.id=="string"?i.id:o.join("-");if(Q(i.index!==!0||!i.children,"Cannot specify children on an index route"),Q(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),A2(i)){let s=ge({},i,t(i),{id:a});return r[a]=s,s}else{let s=ge({},i,t(i),{id:a,children:void 0});return r[a]=s,i.children&&(s.children=ms(i.children,t,o,r)),s}})}function pr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Kt(t):t,i=Or(r.pathname||"/",n);if(i==null)return null;let l=X0(e);O2(l);let o=null;for(let a=0;o==null&&a<l.length;++a)o=V2(l[a],K2(i));return o}function I2(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function X0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,a)=>{let s={relativePath:a===void 0?l.path||"":a,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Ht([r,s.relativePath]),d=n.concat(s);l.children&&l.children.length>0&&(Q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),X0(l.children,t,d,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Q2(c,l.index),routesMeta:d})};return e.forEach((l,o)=>{var a;if(l.path===""||!((a=l.path)!=null&&a.includes("?")))i(l,o);else for(let s of J0(l.path))i(l,o,s)}),t}function J0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=J0(r.join("/")),a=[];return a.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&a.push(...o),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function O2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:W2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const F2=/^:[\w-]+$/,$2=3,U2=2,B2=1,b2=10,H2=-2,ed=e=>e==="*";function Q2(e,t){let n=e.split("/"),r=n.length;return n.some(ed)&&(r+=H2),t&&(r+=U2),n.filter(i=>!ed(i)).reduce((i,l)=>i+(F2.test(l)?$2:l===""?B2:b2),r)}function W2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function V2(e,t){let{routesMeta:n}=e,r={},i="/",l=[];for(let o=0;o<n.length;++o){let a=n[o],s=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=Y2({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let h=a.route;l.push({params:r,pathname:Ht([i,d.pathname]),pathnameBase:q2(Ht([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Ht([i,d.pathnameBase]))}return l}function Y2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=G2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:g,isOptional:x}=d;if(g==="*"){let w=a[h]||"";o=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const S=a[h];return x&&!S?c[g]=void 0:c[g]=Z2(S||"",g),c},{}),pathname:l,pathnameBase:o,pattern:e}}function G2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function K2(e){try{return decodeURI(e)}catch(t){return Wn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z2(e,t){try{return decodeURIComponent(e)}catch(n){return Wn(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function X2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Kt(e):e;return{pathname:n?n.startsWith("/")?n:J2(n,t):t,search:em(r),hash:tm(i)}}function J2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function q0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ju(e,t){let n=q0(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ku(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Kt(e):(i=ge({},e),Q(!i.pathname||!i.pathname.includes("?"),da("?","pathname","search",i)),Q(!i.pathname||!i.pathname.includes("#"),da("#","pathname","hash",i)),Q(!i.search||!i.search.includes("#"),da("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,a;if(o==null)a=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),h-=1;i.pathname=g.join("/")}a=h>=0?t[h]:"/"}let s=X2(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const Ht=e=>e.join("/").replace(/\/\/+/g,"/"),q2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),em=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,tm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Mu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function ep(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tp=["post","put","patch","delete"],nm=new Set(tp),rm=["get",...tp],im=new Set(rm),lm=new Set([301,302,303,307,308]),om=new Set([307,308]),fa={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},am={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Zr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},np=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,sm=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),rp="remix-router-transitions";function um(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=C=>({hasErrorBoundary:y(C)})}else i=sm;let l={},o=ms(e.routes,i,void 0,l),a,s=e.basename||"/",c=ge({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),d=null,h=new Set,g=null,x=null,S=null,w=e.hydrationData!=null,M=pr(o,e.history.location,s),p=null;if(M==null){let y=dt(404,{pathname:e.history.location.pathname}),{matches:C,route:E}=sd(o);M=C,p={[E.id]:y}}let f,m=M.some(y=>y.route.lazy),k=M.some(y=>y.route.loader);if(m)f=!1;else if(!k)f=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,C=e.hydrationData?e.hydrationData.errors:null;f=M.every(E=>E.route.loader&&E.route.loader.hydrate!==!0&&(y&&y[E.route.id]!==void 0||C&&C[E.route.id]!==void 0))}else f=e.hydrationData!=null;let N,v={historyAction:e.history.action,location:e.history.location,matches:M,initialized:f,navigation:fa,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},j=xe.Pop,T=!1,R,F=!1,K=new Map,ve=null,pe=!1,Ve=!1,Zt=[],Lt=[],te=new Map,P=0,I=-1,$=new Map,V=new Set,Z=new Map,tt=new Map,ye=new Set,Oe=new Map,we=new Map,nt=!1;function Mn(){if(d=e.history.listen(y=>{let{action:C,location:E,delta:_}=y;if(nt){nt=!1;return}Wn(we.size===0||_!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let A=Uu({currentLocation:v.location,nextLocation:E,historyAction:C});if(A&&_!=null){nt=!0,e.history.go(_*-1),Yi(A,{state:"blocked",location:E,proceed(){Yi(A,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),e.history.go(_)},reset(){let W=new Map(v.blockers);W.set(A,Zr),Ee({blockers:W})}});return}return En(C,E)}),n){xm(t,K);let y=()=>Sm(t,K);t.addEventListener("pagehide",y),ve=()=>t.removeEventListener("pagehide",y)}return v.initialized||En(xe.Pop,v.location,{initialHydration:!0}),N}function It(){d&&d(),ve&&ve(),h.clear(),R&&R.abort(),v.fetchers.forEach((y,C)=>Vi(C)),v.blockers.forEach((y,C)=>$u(C))}function $r(y){return h.add(y),()=>h.delete(y)}function Ee(y,C){C===void 0&&(C={}),v=ge({},v,y);let E=[],_=[];c.v7_fetcherPersist&&v.fetchers.forEach((A,W)=>{A.state==="idle"&&(ye.has(W)?_.push(W):E.push(W))}),[...h].forEach(A=>A(v,{deletedFetchers:_,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),c.v7_fetcherPersist&&(E.forEach(A=>v.fetchers.delete(A)),_.forEach(A=>Vi(A)))}function Ye(y,C,E){var _,A;let{flushSync:W}=E===void 0?{}:E,B=v.actionData!=null&&v.navigation.formMethod!=null&&Ct(v.navigation.formMethod)&&v.navigation.state==="loading"&&((_=y.state)==null?void 0:_._isRedirect)!==!0,U;C.actionData?Object.keys(C.actionData).length>0?U=C.actionData:U=null:B?U=v.actionData:U=null;let O=C.loaderData?ad(v.loaderData,C.loaderData,C.matches||[],C.errors):v.loaderData,G=v.blockers;G.size>0&&(G=new Map(G),G.forEach((re,ze)=>G.set(ze,Zr)));let Ne=T===!0||v.navigation.formMethod!=null&&Ct(v.navigation.formMethod)&&((A=y.state)==null?void 0:A._isRedirect)!==!0;a&&(o=a,a=void 0),pe||j===xe.Pop||(j===xe.Push?e.history.push(y,y.state):j===xe.Replace&&e.history.replace(y,y.state));let b;if(j===xe.Pop){let re=K.get(v.location.pathname);re&&re.has(y.pathname)?b={currentLocation:v.location,nextLocation:y}:K.has(y.pathname)&&(b={currentLocation:y,nextLocation:v.location})}else if(F){let re=K.get(v.location.pathname);re?re.add(y.pathname):(re=new Set([y.pathname]),K.set(v.location.pathname,re)),b={currentLocation:v.location,nextLocation:y}}Ee(ge({},C,{actionData:U,loaderData:O,historyAction:j,location:y,initialized:!0,navigation:fa,revalidation:"idle",restoreScrollPosition:bu(y,C.matches||v.matches),preventScrollReset:Ne,blockers:G}),{viewTransitionOpts:b,flushSync:W===!0}),j=xe.Pop,T=!1,F=!1,pe=!1,Ve=!1,Zt=[],Lt=[]}async function zu(y,C){if(typeof y=="number"){e.history.go(y);return}let E=gs(v.location,v.matches,s,c.v7_prependBasename,y,c.v7_relativeSplatPath,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:_,submission:A,error:W}=td(c.v7_normalizeFormMethod,!1,E,C),B=v.location,U=Ai(v.location,_,C&&C.state);U=ge({},U,e.history.encodeLocation(U));let O=C&&C.replace!=null?C.replace:void 0,G=xe.Push;O===!0?G=xe.Replace:O===!1||A!=null&&Ct(A.formMethod)&&A.formAction===v.location.pathname+v.location.search&&(G=xe.Replace);let Ne=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,b=(C&&C.unstable_flushSync)===!0,re=Uu({currentLocation:B,nextLocation:U,historyAction:G});if(re){Yi(re,{state:"blocked",location:U,proceed(){Yi(re,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),zu(y,C)},reset(){let ze=new Map(v.blockers);ze.set(re,Zr),Ee({blockers:ze})}});return}return await En(G,U,{submission:A,pendingError:W,preventScrollReset:Ne,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:b})}function Vp(){if(zo(),Ee({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){En(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}En(j||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function En(y,C,E){R&&R.abort(),R=null,j=y,pe=(E&&E.startUninterruptedRevalidation)===!0,th(v.location,v.matches),T=(E&&E.preventScrollReset)===!0,F=(E&&E.enableViewTransition)===!0;let _=a||o,A=E&&E.overrideNavigation,W=pr(_,C,s),B=(E&&E.flushSync)===!0;if(!W){let ze=dt(404,{pathname:C.pathname}),{matches:ct,route:Le}=sd(_);Ro(),Ye(C,{matches:ct,loaderData:{},errors:{[Le.id]:ze}},{flushSync:B});return}if(v.initialized&&!Ve&&hm(v.location,C)&&!(E&&E.submission&&Ct(E.submission.formMethod))){Ye(C,{matches:W},{flushSync:B});return}R=new AbortController;let U=Jr(e.history,C,R.signal,E&&E.submission),O,G;if(E&&E.pendingError)G={[gi(W).route.id]:E.pendingError};else if(E&&E.submission&&Ct(E.submission.formMethod)){let ze=await Yp(U,C,E.submission,W,{replace:E.replace,flushSync:B});if(ze.shortCircuited)return;O=ze.pendingActionData,G=ze.pendingActionError,A=pa(C,E.submission),B=!1,U=new Request(U.url,{signal:U.signal})}let{shortCircuited:Ne,loaderData:b,errors:re}=await Gp(U,C,W,A,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,B,O,G);Ne||(R=null,Ye(C,ge({matches:W},O?{actionData:O}:{},{loaderData:b,errors:re})))}async function Yp(y,C,E,_,A){A===void 0&&(A={}),zo();let W=ym(C,E);Ee({navigation:W},{flushSync:A.flushSync===!0});let B,U=ys(_,C);if(!U.route.action&&!U.route.lazy)B={type:he.error,error:dt(405,{method:y.method,pathname:C.pathname,routeId:U.route.id})};else if(B=await Xr("action",y,U,_,l,i,s,c.v7_relativeSplatPath),y.signal.aborted)return{shortCircuited:!0};if(Rn(B)){let O;return A&&A.replace!=null?O=A.replace:O=B.location===v.location.pathname+v.location.search,await Ur(v,B,{submission:E,replace:O}),{shortCircuited:!0}}if(hr(B)){let O=gi(_,U.route.id);return(A&&A.replace)!==!0&&(j=xe.Push),{pendingActionData:{},pendingActionError:{[O.route.id]:B.error}}}if(zn(B))throw dt(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:B.data}}}async function Gp(y,C,E,_,A,W,B,U,O,G,Ne){let b=_||pa(C,A),re=A||W||dd(b),ze=a||o,[ct,Le]=nd(e.history,v,E,re,C,c.v7_partialHydration&&U===!0,Ve,Zt,Lt,ye,Z,V,ze,s,G,Ne);if(Ro(ne=>!(E&&E.some(se=>se.route.id===ne))||ct&&ct.some(se=>se.route.id===ne)),I=++P,ct.length===0&&Le.length===0){let ne=Ou();return Ye(C,ge({matches:E,loaderData:{},errors:Ne||null},G?{actionData:G}:{},ne?{fetchers:new Map(v.fetchers)}:{}),{flushSync:O}),{shortCircuited:!0}}if(!pe&&(!c.v7_partialHydration||!U)){Le.forEach(se=>{let Dt=v.fetchers.get(se.key),Ki=qr(void 0,Dt?Dt.data:void 0);v.fetchers.set(se.key,Ki)});let ne=G||v.actionData;Ee(ge({navigation:b},ne?Object.keys(ne).length===0?{actionData:null}:{actionData:ne}:{},Le.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:O})}Le.forEach(ne=>{te.has(ne.key)&&Jt(ne.key),ne.controller&&te.set(ne.key,ne.controller)});let Zn=()=>Le.forEach(ne=>Jt(ne.key));R&&R.signal.addEventListener("abort",Zn);let{results:Ao,loaderResults:Xn,fetcherResults:qt}=await Ru(v.matches,E,ct,Le,y);if(y.signal.aborted)return{shortCircuited:!0};R&&R.signal.removeEventListener("abort",Zn),Le.forEach(ne=>te.delete(ne.key));let Nn=ud(Ao);if(Nn){if(Nn.idx>=ct.length){let ne=Le[Nn.idx-ct.length].key;V.add(ne)}return await Ur(v,Nn.result,{replace:B}),{shortCircuited:!0}}let{loaderData:Io,errors:Oo}=od(v,E,ct,Xn,Ne,Le,qt,Oe);Oe.forEach((ne,se)=>{ne.subscribe(Dt=>{(Dt||ne.done)&&Oe.delete(se)})});let Fo=Ou(),Jn=Fu(I),Gi=Fo||Jn||Le.length>0;return ge({loaderData:Io,errors:Oo},Gi?{fetchers:new Map(v.fetchers)}:{})}function Kp(y,C,E,_){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");te.has(y)&&Jt(y);let A=(_&&_.unstable_flushSync)===!0,W=a||o,B=gs(v.location,v.matches,s,c.v7_prependBasename,E,c.v7_relativeSplatPath,C,_==null?void 0:_.relative),U=pr(W,B,s);if(!U){Br(y,C,dt(404,{pathname:B}),{flushSync:A});return}let{path:O,submission:G,error:Ne}=td(c.v7_normalizeFormMethod,!0,B,_);if(Ne){Br(y,C,Ne,{flushSync:A});return}let b=ys(U,O);if(T=(_&&_.preventScrollReset)===!0,G&&Ct(G.formMethod)){Zp(y,C,O,b,U,A,G);return}Z.set(y,{routeId:C,path:O}),Xp(y,C,O,b,U,A,G)}async function Zp(y,C,E,_,A,W,B){if(zo(),Z.delete(y),!_.route.action&&!_.route.lazy){let se=dt(405,{method:B.formMethod,pathname:E,routeId:C});Br(y,C,se,{flushSync:W});return}let U=v.fetchers.get(y);Xt(y,wm(B,U),{flushSync:W});let O=new AbortController,G=Jr(e.history,E,O.signal,B);te.set(y,O);let Ne=P,b=await Xr("action",G,_,A,l,i,s,c.v7_relativeSplatPath);if(G.signal.aborted){te.get(y)===O&&te.delete(y);return}if(c.v7_fetcherPersist&&ye.has(y)){if(Rn(b)||hr(b)){Xt(y,tn(void 0));return}}else{if(Rn(b))if(te.delete(y),I>Ne){Xt(y,tn(void 0));return}else return V.add(y),Xt(y,qr(B)),Ur(v,b,{fetcherSubmission:B});if(hr(b)){Br(y,C,b.error);return}}if(zn(b))throw dt(400,{type:"defer-action"});let re=v.navigation.location||v.location,ze=Jr(e.history,re,O.signal),ct=a||o,Le=v.navigation.state!=="idle"?pr(ct,v.navigation.location,s):v.matches;Q(Le,"Didn't find any matches after fetcher action");let Zn=++P;$.set(y,Zn);let Ao=qr(B,b.data);v.fetchers.set(y,Ao);let[Xn,qt]=nd(e.history,v,Le,B,re,!1,Ve,Zt,Lt,ye,Z,V,ct,s,{[_.route.id]:b.data},void 0);qt.filter(se=>se.key!==y).forEach(se=>{let Dt=se.key,Ki=v.fetchers.get(Dt),rh=qr(void 0,Ki?Ki.data:void 0);v.fetchers.set(Dt,rh),te.has(Dt)&&Jt(Dt),se.controller&&te.set(Dt,se.controller)}),Ee({fetchers:new Map(v.fetchers)});let Nn=()=>qt.forEach(se=>Jt(se.key));O.signal.addEventListener("abort",Nn);let{results:Io,loaderResults:Oo,fetcherResults:Fo}=await Ru(v.matches,Le,Xn,qt,ze);if(O.signal.aborted)return;O.signal.removeEventListener("abort",Nn),$.delete(y),te.delete(y),qt.forEach(se=>te.delete(se.key));let Jn=ud(Io);if(Jn){if(Jn.idx>=Xn.length){let se=qt[Jn.idx-Xn.length].key;V.add(se)}return Ur(v,Jn.result)}let{loaderData:Gi,errors:ne}=od(v,v.matches,Xn,Oo,void 0,qt,Fo,Oe);if(v.fetchers.has(y)){let se=tn(b.data);v.fetchers.set(y,se)}Fu(Zn),v.navigation.state==="loading"&&Zn>I?(Q(j,"Expected pending action"),R&&R.abort(),Ye(v.navigation.location,{matches:Le,loaderData:Gi,errors:ne,fetchers:new Map(v.fetchers)})):(Ee({errors:ne,loaderData:ad(v.loaderData,Gi,Le,ne),fetchers:new Map(v.fetchers)}),Ve=!1)}async function Xp(y,C,E,_,A,W,B){let U=v.fetchers.get(y);Xt(y,qr(B,U?U.data:void 0),{flushSync:W});let O=new AbortController,G=Jr(e.history,E,O.signal);te.set(y,O);let Ne=P,b=await Xr("loader",G,_,A,l,i,s,c.v7_relativeSplatPath);if(zn(b)&&(b=await op(b,G.signal,!0)||b),te.get(y)===O&&te.delete(y),!G.signal.aborted){if(ye.has(y)){Xt(y,tn(void 0));return}if(Rn(b))if(I>Ne){Xt(y,tn(void 0));return}else{V.add(y),await Ur(v,b);return}if(hr(b)){Br(y,C,b.error);return}Q(!zn(b),"Unhandled fetcher deferred data"),Xt(y,tn(b.data))}}async function Ur(y,C,E){let{submission:_,fetcherSubmission:A,replace:W}=E===void 0?{}:E;C.revalidate&&(Ve=!0);let B=Ai(y.location,C.location,{_isRedirect:!0});if(Q(B,"Expected a location on the redirect navigation"),n){let re=!1;if(C.reloadDocument)re=!0;else if(np.test(C.location)){const ze=e.history.createURL(C.location);re=ze.origin!==t.location.origin||Or(ze.pathname,s)==null}if(re){W?t.location.replace(C.location):t.location.assign(C.location);return}}R=null;let U=W===!0?xe.Replace:xe.Push,{formMethod:O,formAction:G,formEncType:Ne}=y.navigation;!_&&!A&&O&&G&&Ne&&(_=dd(y.navigation));let b=_||A;if(om.has(C.status)&&b&&Ct(b.formMethod))await En(U,B,{submission:ge({},b,{formAction:C.location}),preventScrollReset:T});else{let re=pa(B,_);await En(U,B,{overrideNavigation:re,fetcherSubmission:A,preventScrollReset:T})}}async function Ru(y,C,E,_,A){let W=await Promise.all([...E.map(O=>Xr("loader",A,O,C,l,i,s,c.v7_relativeSplatPath)),..._.map(O=>O.matches&&O.match&&O.controller?Xr("loader",Jr(e.history,O.path,O.controller.signal),O.match,O.matches,l,i,s,c.v7_relativeSplatPath):{type:he.error,error:dt(404,{pathname:O.path})})]),B=W.slice(0,E.length),U=W.slice(E.length);return await Promise.all([cd(y,E,B,B.map(()=>A.signal),!1,v.loaderData),cd(y,_.map(O=>O.match),U,_.map(O=>O.controller?O.controller.signal:null),!0)]),{results:W,loaderResults:B,fetcherResults:U}}function zo(){Ve=!0,Zt.push(...Ro()),Z.forEach((y,C)=>{te.has(C)&&(Lt.push(C),Jt(C))})}function Xt(y,C,E){E===void 0&&(E={}),v.fetchers.set(y,C),Ee({fetchers:new Map(v.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function Br(y,C,E,_){_===void 0&&(_={});let A=gi(v.matches,C);Vi(y),Ee({errors:{[A.route.id]:E},fetchers:new Map(v.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function Au(y){return c.v7_fetcherPersist&&(tt.set(y,(tt.get(y)||0)+1),ye.has(y)&&ye.delete(y)),v.fetchers.get(y)||am}function Vi(y){let C=v.fetchers.get(y);te.has(y)&&!(C&&C.state==="loading"&&$.has(y))&&Jt(y),Z.delete(y),$.delete(y),V.delete(y),ye.delete(y),v.fetchers.delete(y)}function Jp(y){if(c.v7_fetcherPersist){let C=(tt.get(y)||0)-1;C<=0?(tt.delete(y),ye.add(y)):tt.set(y,C)}else Vi(y);Ee({fetchers:new Map(v.fetchers)})}function Jt(y){let C=te.get(y);Q(C,"Expected fetch controller: "+y),C.abort(),te.delete(y)}function Iu(y){for(let C of y){let E=Au(C),_=tn(E.data);v.fetchers.set(C,_)}}function Ou(){let y=[],C=!1;for(let E of V){let _=v.fetchers.get(E);Q(_,"Expected fetcher: "+E),_.state==="loading"&&(V.delete(E),y.push(E),C=!0)}return Iu(y),C}function Fu(y){let C=[];for(let[E,_]of $)if(_<y){let A=v.fetchers.get(E);Q(A,"Expected fetcher: "+E),A.state==="loading"&&(Jt(E),$.delete(E),C.push(E))}return Iu(C),C.length>0}function qp(y,C){let E=v.blockers.get(y)||Zr;return we.get(y)!==C&&we.set(y,C),E}function $u(y){v.blockers.delete(y),we.delete(y)}function Yi(y,C){let E=v.blockers.get(y)||Zr;Q(E.state==="unblocked"&&C.state==="blocked"||E.state==="blocked"&&C.state==="blocked"||E.state==="blocked"&&C.state==="proceeding"||E.state==="blocked"&&C.state==="unblocked"||E.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+C.state);let _=new Map(v.blockers);_.set(y,C),Ee({blockers:_})}function Uu(y){let{currentLocation:C,nextLocation:E,historyAction:_}=y;if(we.size===0)return;we.size>1&&Wn(!1,"A router only supports one blocker at a time");let A=Array.from(we.entries()),[W,B]=A[A.length-1],U=v.blockers.get(W);if(!(U&&U.state==="proceeding")&&B({currentLocation:C,nextLocation:E,historyAction:_}))return W}function Ro(y){let C=[];return Oe.forEach((E,_)=>{(!y||y(_))&&(E.cancel(),C.push(_),Oe.delete(_))}),C}function eh(y,C,E){if(g=y,S=C,x=E||null,!w&&v.navigation===fa){w=!0;let _=bu(v.location,v.matches);_!=null&&Ee({restoreScrollPosition:_})}return()=>{g=null,S=null,x=null}}function Bu(y,C){return x&&x(y,C.map(_=>I2(_,v.loaderData)))||y.key}function th(y,C){if(g&&S){let E=Bu(y,C);g[E]=S()}}function bu(y,C){if(g){let E=Bu(y,C),_=g[E];if(typeof _=="number")return _}return null}function nh(y){l={},a=ms(y,i,void 0,l)}return N={get basename(){return s},get future(){return c},get state(){return v},get routes(){return o},get window(){return t},initialize:Mn,subscribe:$r,enableScrollRestoration:eh,navigate:zu,fetch:Kp,revalidate:Vp,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Au,deleteFetcher:Jp,dispose:It,getBlocker:qp,deleteBlocker:$u,_internalFetchControllers:te,_internalActiveDeferreds:Oe,_internalSetRoutes:nh},N}function cm(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function gs(e,t,n,r,i,l,o,a){let s,c;if(o){s=[];for(let h of t)if(s.push(h),h.route.id===o){c=h;break}}else s=t,c=t[t.length-1];let d=ku(i||".",ju(s,l),Or(e.pathname,n)||e.pathname,a==="path");return i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Eu(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Ht([n,d.pathname])),Vn(d)}function td(e,t,n,r){if(!r||!cm(r))return{path:n};if(r.formMethod&&!vm(r.formMethod))return{path:n,error:dt(405,{method:r.formMethod})};let i=()=>({path:n,error:dt(400,{type:"invalid-body"})}),l=r.formMethod||"get",o=e?l.toUpperCase():l.toLowerCase(),a=lp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ct(o))return i();let g=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,S)=>{let[w,M]=S;return""+x+w+"="+M+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:g}}}else if(r.formEncType==="application/json"){if(!Ct(o))return i();try{let g=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:g,text:void 0}}}catch{return i()}}}Q(typeof FormData=="function","FormData is not available in this environment");let s,c;if(r.formData)s=vs(r.formData),c=r.formData;else if(r.body instanceof FormData)s=vs(r.body),c=r.body;else if(r.body instanceof URLSearchParams)s=r.body,c=ld(s);else if(r.body==null)s=new URLSearchParams,c=new FormData;else try{s=new URLSearchParams(r.body),c=ld(s)}catch{return i()}let d={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Ct(d.formMethod))return{path:n,submission:d};let h=Kt(n);return t&&h.search&&Eu(h.search)&&s.append("index",""),h.search="?"+s,{path:Vn(h),submission:d}}function dm(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function nd(e,t,n,r,i,l,o,a,s,c,d,h,g,x,S,w){let M=w?Object.values(w)[0]:S?Object.values(S)[0]:void 0,p=e.createURL(t.location),f=e.createURL(i),m=w?Object.keys(w)[0]:void 0,N=dm(n,m).filter((j,T)=>{let{route:R}=j;if(R.lazy)return!0;if(R.loader==null)return!1;if(l)return R.loader.hydrate?!0:t.loaderData[R.id]===void 0&&(!t.errors||t.errors[R.id]===void 0);if(fm(t.loaderData,t.matches[T],j)||a.some(ve=>ve===j.route.id))return!0;let F=t.matches[T],K=j;return rd(j,ge({currentUrl:p,currentParams:F.params,nextUrl:f,nextParams:K.params},r,{actionResult:M,defaultShouldRevalidate:o||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||ip(F,K)}))}),v=[];return d.forEach((j,T)=>{if(l||!n.some(pe=>pe.route.id===j.routeId)||c.has(T))return;let R=pr(g,j.path,x);if(!R){v.push({key:T,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let F=t.fetchers.get(T),K=ys(R,j.path),ve=!1;h.has(T)?ve=!1:s.includes(T)?ve=!0:F&&F.state!=="idle"&&F.data===void 0?ve=o:ve=rd(K,ge({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:M,defaultShouldRevalidate:o})),ve&&v.push({key:T,routeId:j.routeId,path:j.path,matches:R,match:K,controller:new AbortController})}),[N,v]}function fm(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function ip(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function rd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function id(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];Q(i,"No route found in manifest");let l={};for(let o in r){let s=i[o]!==void 0&&o!=="hasErrorBoundary";Wn(!s,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!s&&!R2.has(o)&&(l[o]=r[o])}Object.assign(i,l),Object.assign(i,ge({},t(i),{lazy:void 0}))}async function Xr(e,t,n,r,i,l,o,a,s){s===void 0&&(s={});let c,d,h,g=w=>{let M,p=new Promise((f,m)=>M=m);return h=()=>M(),t.signal.addEventListener("abort",h),Promise.race([w({request:t,params:n.params,context:s.requestContext}),p])};try{let w=n.route[e];if(n.route.lazy)if(w){let M,p=await Promise.all([g(w).catch(f=>{M=f}),id(n.route,l,i)]);if(M)throw M;d=p[0]}else if(await id(n.route,l,i),w=n.route[e],w)d=await g(w);else if(e==="action"){let M=new URL(t.url),p=M.pathname+M.search;throw dt(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:he.data,data:void 0};else if(w)d=await g(w);else{let M=new URL(t.url),p=M.pathname+M.search;throw dt(404,{pathname:p})}Q(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(w){c=he.error,d=w}finally{h&&t.signal.removeEventListener("abort",h)}if(gm(d)){let w=d.status;if(lm.has(w)){let p=d.headers.get("Location");if(Q(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!np.test(p))p=gs(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,p,a);else if(!s.isStaticRequest){let f=new URL(t.url),m=p.startsWith("//")?new URL(f.protocol+p):new URL(p),k=Or(m.pathname,o)!=null;m.origin===f.origin&&k&&(p=m.pathname+m.search+m.hash)}if(s.isStaticRequest)throw d.headers.set("Location",p),d;return{type:he.redirect,status:w,location:p,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:c===he.error?he.error:he.data,response:d};let M;try{let p=d.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?d.body==null?M=null:M=await d.json():M=await d.text()}catch(p){return{type:he.error,error:p}}return c===he.error?{type:c,error:new Mu(w,d.statusText,M),headers:d.headers}:{type:he.data,data:M,statusCode:d.status,headers:d.headers}}if(c===he.error)return{type:c,error:d};if(mm(d)){var x,S;return{type:he.deferred,deferredData:d,statusCode:(x=d.init)==null?void 0:x.status,headers:((S=d.init)==null?void 0:S.headers)&&new Headers(d.init.headers)}}return{type:he.data,data:d}}function Jr(e,t,n,r){let i=e.createURL(lp(t)).toString(),l={signal:n};if(r&&Ct(r.formMethod)){let{formMethod:o,formEncType:a}=r;l.method=o.toUpperCase(),a==="application/json"?(l.headers=new Headers({"Content-Type":a}),l.body=JSON.stringify(r.json)):a==="text/plain"?l.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?l.body=vs(r.formData):l.body=r.formData}return new Request(i,l)}function vs(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function ld(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function pm(e,t,n,r,i){let l={},o=null,a,s=!1,c={};return n.forEach((d,h)=>{let g=t[h].route.id;if(Q(!Rn(d),"Cannot handle redirect results in processLoaderData"),hr(d)){let x=gi(e,g),S=d.error;r&&(S=Object.values(r)[0],r=void 0),o=o||{},o[x.route.id]==null&&(o[x.route.id]=S),l[g]=void 0,s||(s=!0,a=ep(d.error)?d.error.status:500),d.headers&&(c[g]=d.headers)}else zn(d)?(i.set(g,d.deferredData),l[g]=d.deferredData.data):l[g]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(a=d.statusCode),d.headers&&(c[g]=d.headers)}),r&&(o=r,l[Object.keys(r)[0]]=void 0),{loaderData:l,errors:o,statusCode:a||200,loaderHeaders:c}}function od(e,t,n,r,i,l,o,a){let{loaderData:s,errors:c}=pm(t,n,r,i,a);for(let d=0;d<l.length;d++){let{key:h,match:g,controller:x}=l[d];Q(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let S=o[d];if(!(x&&x.signal.aborted))if(hr(S)){let w=gi(e.matches,g==null?void 0:g.route.id);c&&c[w.route.id]||(c=ge({},c,{[w.route.id]:S.error})),e.fetchers.delete(h)}else if(Rn(S))Q(!1,"Unhandled fetcher revalidation redirect");else if(zn(S))Q(!1,"Unhandled fetcher deferred data");else{let w=tn(S.data);e.fetchers.set(h,w)}}return{loaderData:s,errors:c}}function ad(e,t,n,r){let i=ge({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&l.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function gi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function sd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function dt(e,t){let{pathname:n,routeId:r,method:i,type:l}=t===void 0?{}:t,o="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"?a="defer() is not supported in actions":l==="invalid-body"&&(a="Unable to encode submission body")):e===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",a='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Mu(e||500,o,new Error(a),!0)}function ud(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Rn(n))return{result:n,idx:t}}}function lp(e){let t=typeof e=="string"?Kt(e):e;return Vn(ge({},t,{hash:""}))}function hm(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function zn(e){return e.type===he.deferred}function hr(e){return e.type===he.error}function Rn(e){return(e&&e.type)===he.redirect}function mm(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function gm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function vm(e){return im.has(e.toLowerCase())}function Ct(e){return nm.has(e.toLowerCase())}async function cd(e,t,n,r,i,l){for(let o=0;o<n.length;o++){let a=n[o],s=t[o];if(!s)continue;let c=e.find(h=>h.route.id===s.route.id),d=c!=null&&!ip(c,s)&&(l&&l[s.route.id])!==void 0;if(zn(a)&&(i||d)){let h=r[o];Q(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await op(a,h,i).then(g=>{g&&(n[o]=g||n[o])})}}}async function op(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:he.data,data:e.deferredData.unwrappedData}}catch(i){return{type:he.error,error:i}}return{type:he.data,data:e.deferredData.data}}}function Eu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ys(e,t){let n=typeof t=="string"?Kt(t).search:t.search;if(e[e.length-1].route.index&&Eu(n||""))return e[e.length-1];let r=q0(e);return r[r.length-1]}function dd(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:l,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function pa(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ym(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function qr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function wm(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function tn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function xm(e,t){try{let n=e.sessionStorage.getItem(rp);if(n){let r=JSON.parse(n);for(let[i,l]of Object.entries(r||{}))l&&Array.isArray(l)&&t.set(i,new Set(l||[]))}}catch{}}function Sm(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(rp,JSON.stringify(n))}catch(r){Wn(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ii.apply(this,arguments)}const ko=L.createContext(null),ap=L.createContext(null),Kn=L.createContext(null),Mo=L.createContext(null),kn=L.createContext({outlet:null,matches:[],isDataRoute:!1}),sp=L.createContext(null);function Cm(e,t){let{relative:n}=t===void 0?{}:t;Qi()||Q(!1);let{basename:r,navigator:i}=L.useContext(Kn),{hash:l,pathname:o,search:a}=cp(e,{relative:n}),s=o;return r!=="/"&&(s=o==="/"?r:Ht([r,o])),i.createHref({pathname:s,search:a,hash:l})}function Qi(){return L.useContext(Mo)!=null}function Eo(){return Qi()||Q(!1),L.useContext(Mo).location}function up(e){L.useContext(Kn).static||L.useLayoutEffect(e)}function jm(){let{isDataRoute:e}=L.useContext(kn);return e?Om():km()}function km(){Qi()||Q(!1);let e=L.useContext(ko),{basename:t,future:n,navigator:r}=L.useContext(Kn),{matches:i}=L.useContext(kn),{pathname:l}=Eo(),o=JSON.stringify(ju(i,n.v7_relativeSplatPath)),a=L.useRef(!1);return up(()=>{a.current=!0}),L.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=ku(c,JSON.parse(o),l,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ht([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,o,l,e])}const Mm=L.createContext(null);function Em(e){let t=L.useContext(kn).outlet;return t&&L.createElement(Mm.Provider,{value:e},t)}function cp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=L.useContext(Kn),{matches:i}=L.useContext(kn),{pathname:l}=Eo(),o=JSON.stringify(ju(i,r.v7_relativeSplatPath));return L.useMemo(()=>ku(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function Nm(e,t,n,r){Qi()||Q(!1);let{navigator:i}=L.useContext(Kn),{matches:l}=L.useContext(kn),o=l[l.length-1],a=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=Eo(),d;if(t){var h;let M=typeof t=="string"?Kt(t):t;s==="/"||(h=M.pathname)!=null&&h.startsWith(s)||Q(!1),d=M}else d=c;let g=d.pathname||"/",x=s==="/"?g:g.slice(s.length)||"/",S=pr(e,{pathname:x}),w=Pm(S&&S.map(M=>Object.assign({},M,{params:Object.assign({},a,M.params),pathname:Ht([s,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?s:Ht([s,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,n,r);return t&&w?L.createElement(Mo.Provider,{value:{location:Ii({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:xe.Pop}},w):w}function Lm(){let e=Im(),t=ep(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},t),n?L.createElement("pre",{style:i},n):null,null)}const Dm=L.createElement(Lm,null);class Tm extends L.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?L.createElement(kn.Provider,{value:this.props.routeContext},L.createElement(sp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _m(e){let{routeContext:t,match:n,children:r}=e,i=L.useContext(ko);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(kn.Provider,{value:t},r)}function Pm(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||Q(!1),o=o.slice(0,Math.min(o.length,d+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:g,errors:x}=n,S=h.route.loader&&g[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||S){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,g)=>{let x,S=!1,w=null,M=null;n&&(x=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||Dm,s&&(c<0&&g===0?(Fm("route-fallback",!1),S=!0,M=null):c===g&&(S=!0,M=h.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,g+1)),f=()=>{let m;return x?m=w:S?m=M:h.route.Component?m=L.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=d,L.createElement(_m,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?L.createElement(Tm,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var dp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(dp||{}),no=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(no||{});function zm(e){let t=L.useContext(ko);return t||Q(!1),t}function Rm(e){let t=L.useContext(ap);return t||Q(!1),t}function Am(e){let t=L.useContext(kn);return t||Q(!1),t}function fp(e){let t=Am(),n=t.matches[t.matches.length-1];return n.route.id||Q(!1),n.route.id}function Im(){var e;let t=L.useContext(sp),n=Rm(no.UseRouteError),r=fp(no.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Om(){let{router:e}=zm(dp.UseNavigateStable),t=fp(no.UseNavigateStable),n=L.useRef(!1);return up(()=>{n.current=!0}),L.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ii({fromRouteId:t},l)))},[e,t])}const fd={};function Fm(e,t,n){!t&&!fd[e]&&(fd[e]=!0)}function $m(e){return Em(e.context)}function li(e){Q(!1)}function Um(e){let{basename:t="/",children:n=null,location:r,navigationType:i=xe.Pop,navigator:l,static:o=!1,future:a}=e;Qi()&&Q(!1);let s=t.replace(/^\/*/,"/"),c=L.useMemo(()=>({basename:s,navigator:l,static:o,future:Ii({v7_relativeSplatPath:!1},a)}),[s,a,l,o]);typeof r=="string"&&(r=Kt(r));let{pathname:d="/",search:h="",hash:g="",state:x=null,key:S="default"}=r,w=L.useMemo(()=>{let M=Or(d,s);return M==null?null:{location:{pathname:M,search:h,hash:g,state:x,key:S},navigationType:i}},[s,d,h,g,x,S,i]);return w==null?null:L.createElement(Kn.Provider,{value:c},L.createElement(Mo.Provider,{children:n,value:w}))}new Promise(()=>{});function ws(e,t){t===void 0&&(t=[]);let n=[];return L.Children.forEach(e,(r,i)=>{if(!L.isValidElement(r))return;let l=[...t,i];if(r.type===L.Fragment){n.push.apply(n,ws(r.props.children,l));return}r.type!==li&&Q(!1),!r.props.index||!r.props.children||Q(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ws(r.props.children,l)),n.push(o)}),n}function Bm(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:L.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:L.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:L.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oi(){return Oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oi.apply(this,arguments)}function bm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Hm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Qm(e,t){return e.button===0&&(!t||t==="_self")&&!Hm(e)}const Wm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function Vm(e,t){return um({basename:t==null?void 0:t.basename,future:Oi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:_2({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Ym(),routes:e,mapRouteProperties:Bm,window:t==null?void 0:t.window}).initialize()}function Ym(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Oi({},t,{errors:Gm(t.errors)})),t}function Gm(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Mu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let l=window[i.__subType];if(typeof l=="function")try{let o=new l(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let l=new Error(i.message);l.stack="",n[r]=l}}else n[r]=i;return n}const Km=L.createContext({isTransitioning:!1}),Zm=L.createContext(new Map),Xm="startTransition",pd=wh[Xm],Jm="flushSync",hd=T2[Jm];function qm(e){pd?pd(e):e()}function ei(e){hd?hd(e):e()}class eg{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function tg(e){let{fallbackElement:t,router:n,future:r}=e,[i,l]=L.useState(n.state),[o,a]=L.useState(),[s,c]=L.useState({isTransitioning:!1}),[d,h]=L.useState(),[g,x]=L.useState(),[S,w]=L.useState(),M=L.useRef(new Map),{v7_startTransition:p}=r||{},f=L.useCallback(j=>{p?qm(j):j()},[p]),m=L.useCallback((j,T)=>{let{deletedFetchers:R,unstable_flushSync:F,unstable_viewTransitionOpts:K}=T;R.forEach(pe=>M.current.delete(pe)),j.fetchers.forEach((pe,Ve)=>{pe.data!==void 0&&M.current.set(Ve,pe.data)});let ve=n.window==null||typeof n.window.document.startViewTransition!="function";if(!K||ve){F?ei(()=>l(j)):f(()=>l(j));return}if(F){ei(()=>{g&&(d&&d.resolve(),g.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:K.currentLocation,nextLocation:K.nextLocation})});let pe=n.window.document.startViewTransition(()=>{ei(()=>l(j))});pe.finished.finally(()=>{ei(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})})}),ei(()=>x(pe));return}g?(d&&d.resolve(),g.skipTransition(),w({state:j,currentLocation:K.currentLocation,nextLocation:K.nextLocation})):(a(j),c({isTransitioning:!0,flushSync:!1,currentLocation:K.currentLocation,nextLocation:K.nextLocation}))},[n.window,g,d,M,f]);L.useLayoutEffect(()=>n.subscribe(m),[n,m]),L.useEffect(()=>{s.isTransitioning&&!s.flushSync&&h(new eg)},[s]),L.useEffect(()=>{if(d&&o&&n.window){let j=o,T=d.promise,R=n.window.document.startViewTransition(async()=>{f(()=>l(j)),await T});R.finished.finally(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})}),x(R)}},[f,o,d,n.window]),L.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,g,i.location,o]),L.useEffect(()=>{!s.isTransitioning&&S&&(a(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[s.isTransitioning,S]),L.useEffect(()=>{},[]);let k=L.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,T,R)=>n.navigate(j,{state:T,preventScrollReset:R==null?void 0:R.preventScrollReset}),replace:(j,T,R)=>n.navigate(j,{replace:!0,state:T,preventScrollReset:R==null?void 0:R.preventScrollReset})}),[n]),N=n.basename||"/",v=L.useMemo(()=>({router:n,navigator:k,static:!1,basename:N}),[n,k,N]);return L.createElement(L.Fragment,null,L.createElement(ko.Provider,{value:v},L.createElement(ap.Provider,{value:i},L.createElement(Zm.Provider,{value:M.current},L.createElement(Km.Provider,{value:s},L.createElement(Um,{basename:N,location:i.location,navigationType:i.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?L.createElement(ng,{routes:n.routes,future:n.future,state:i}):t))))),null)}function ng(e){let{routes:t,future:n,state:r}=e;return Nm(t,void 0,r,n)}const rg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ig=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,md=L.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:a,target:s,to:c,preventScrollReset:d,unstable_viewTransition:h}=t,g=bm(t,Wm),{basename:x}=L.useContext(Kn),S,w=!1;if(typeof c=="string"&&ig.test(c)&&(S=c,rg))try{let m=new URL(window.location.href),k=c.startsWith("//")?new URL(m.protocol+c):new URL(c),N=Or(k.pathname,x);k.origin===m.origin&&N!=null?c=N+k.search+k.hash:w=!0}catch{}let M=Cm(c,{relative:i}),p=lg(c,{replace:o,state:a,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:h});function f(m){r&&r(m),m.defaultPrevented||p(m)}return L.createElement("a",Oi({},g,{href:S||M,onClick:w||l?r:f,ref:n,target:s}))});var gd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gd||(gd={}));var vd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function lg(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,s=jm(),c=Eo(),d=cp(e,{relative:o});return L.useCallback(h=>{if(Qm(h,n)){h.preventDefault();let g=r!==void 0?r:Vn(c)===Vn(d);s(e,{replace:g,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:a})}},[c,s,d,r,i,n,e,l,o,a])}const og="/reactdeploy4/assets/img_1-hKevZ4J0.png",pp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:og,alt:"",className:"img"})}),ag="/reactdeploy4/assets/img_2-0-A_q4Fj.png",hp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:ag,className:"img",alt:""})}),sg="data:image/svg+xml,%3csvg%20width='166'%20height='46'%20viewBox='0%200%20166%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M163.509%202.85256C164.173%202.40385%20164.677%201.99758%20164.993%201.6572C165.309%201.31683%20165.43%201.04907%20165.35%200.869385C165.269%200.6897%20164.989%200.601641%20164.525%200.610286C164.06%200.618932%20163.421%200.724112%20162.644%200.919758L13.3651%2038.2924C12.5937%2038.4844%2011.6985%2038.7633%2010.7312%2039.1131C9.76383%2039.4629%208.74352%2039.8766%207.72908%2040.3304C6.71465%2040.7841%205.72617%2041.269%204.82066%2041.757C3.91515%2042.245%203.11055%2042.7264%202.45325%2043.1735C1.7896%2043.6222%201.28524%2044.0285%200.969306%2044.3689C0.653372%2044.7093%200.532113%2044.977%200.612489%2045.1567C0.692866%2045.3364%200.973288%2045.4245%201.43761%2045.4158C1.90194%2045.4072%202.54098%2045.302%203.31783%2045.1063L152.597%207.73366C153.368%207.54169%20154.264%207.26277%20155.231%206.91299C156.198%206.56322%20157.219%206.14951%20158.233%205.69573C159.248%205.24196%20160.236%204.75709%20161.142%204.26911C162.047%203.78113%20162.852%203.29969%20163.509%202.85256Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",ug="data:image/svg+xml,%3csvg%20width='210'%20height='65'%20viewBox='0%200%20210%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M206.862%203.14189C207.731%202.6015%20208.398%202.12247%20208.825%201.73243C209.252%201.34239%20209.43%201.04907%20209.35%200.869386C209.269%200.689701%20208.932%200.627207%20208.356%200.685511C207.781%200.743816%20206.979%200.921765%20205.998%201.20909L17.3582%2056.1883C16.3835%2056.4712%2015.2465%2056.8583%2014.0127%2057.3272C12.7789%2057.7962%2011.4728%2058.3378%2010.1697%2058.9207C8.86656%2059.5036%207.59227%2060.1163%206.42029%2060.7235C5.24832%2061.3306%204.20187%2061.9203%203.34129%2062.4583C2.47269%2062.9987%201.80566%2063.4778%201.37871%2063.8678C0.951766%2064.2578%200.773341%2064.5511%200.853718%2064.7308C0.934094%2064.9105%201.27168%2064.973%201.84702%2064.9147C2.42236%2064.8564%203.22407%2064.6784%204.20587%2064.3911L192.845%209.41195C193.82%209.12904%20194.957%208.74194%20196.191%208.27297C197.425%207.804%20198.731%207.26244%20200.034%206.67954C201.337%206.09664%20202.611%205.48393%20203.783%204.87675C204.955%204.26958%20206.002%203.67995%20206.862%203.14189Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",cg="data:image/svg+xml,%3csvg%20width='256'%20height='157'%20viewBox='0%200%20256%20157'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M252.625%204.30344C253.587%203.28409%20254.303%202.41526%20254.731%201.74706C255.16%201.07887%20255.292%200.624523%20255.12%200.410247C254.948%200.195973%20254.476%200.226002%20253.731%200.498609C252.985%200.771212%20251.981%201.281%20250.777%201.99855L19.2871%20139.562C18.0906%20140.272%2016.7153%20141.176%2015.2406%20142.222C13.7659%20143.269%2012.221%20144.438%2010.6951%20145.661C9.16906%20146.884%207.69219%20148.138%206.34961%20149.349C5.00703%20150.561%203.82533%20151.706%202.87268%20152.72C1.91018%20153.739%201.19407%20154.608%200.76577%20155.276C0.337465%20155.944%200.205367%20156.399%200.377122%20156.613C0.548876%20156.827%201.02108%20156.797%201.76648%20156.524C2.51187%20156.252%203.51577%20155.742%204.72017%20155.024L236.21%2017.4606C237.407%2016.7514%20238.782%2015.8473%20240.257%2014.8006C241.731%2013.7539%20243.276%2012.5853%20244.802%2011.3621C246.328%2010.139%20247.805%208.88548%20249.148%207.67397C250.49%206.46247%20251.672%205.31693%20252.625%204.30344Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",dg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:sg,alt:"",className:"image1"}),u.jsx("img",{src:ug,alt:"",className:"image2"}),u.jsx("img",{src:cg,s:!0,alt:"",className:"image3"})]}),fg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.475%205.11776C263.391%204.04007%20264.052%203.10182%20264.419%202.35713C264.786%201.61245%20264.852%201.07606%20264.614%200.778924C264.376%200.481787%20263.838%200.429777%20263.031%200.625893C262.224%200.822009%20261.165%201.26238%20259.913%201.92158L19.3674%20128.187C18.1236%20128.838%2016.7109%20129.695%2015.2107%20130.71C13.7105%20131.725%2012.1524%20132.877%2010.6265%20134.1C9.10046%20135.323%207.63674%20136.593%206.3197%20137.836C5.00267%20139.08%203.85839%20140.272%202.9529%20141.344C2.03717%20142.422%201.37671%20143.36%201.00972%20144.105C0.642721%20144.85%200.576384%20145.386%200.814556%20145.683C1.05273%20145.98%201.5907%20146.032%202.3974%20145.836C3.20411%20145.64%204.26365%20145.2%205.51482%20144.541L246.061%2018.2749C247.305%2017.6245%20248.717%2016.7672%20250.218%2015.7524C251.718%2014.7375%20253.276%2013.5853%20254.802%2012.3621C256.328%2011.139%20257.792%209.86907%20259.109%208.6257C260.426%207.38233%20261.57%206.19009%20262.475%205.11776Z'%20fill='white'/%3e%3c/svg%3e",pg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.559%205.11776C263.474%204.04007%20264.135%203.10182%20264.502%202.35713C264.869%201.61245%20264.935%201.07606%20264.697%200.778924C264.459%200.481787%20263.921%200.429777%20263.114%200.625893C262.307%200.822009%20261.248%201.26238%20259.997%201.92158L19.4506%20128.187C18.2069%20128.838%2016.7942%20129.695%2015.294%20130.71C13.7937%20131.725%2012.2357%20132.877%2010.7097%20134.1C9.18371%20135.323%207.71999%20136.593%206.40295%20137.836C5.08592%20139.08%203.94164%20140.272%203.03615%20141.344C2.12042%20142.422%201.45996%20143.36%201.09297%20144.105C0.725973%20144.85%200.659636%20145.386%200.897808%20145.683C1.13598%20145.98%201.67395%20146.032%202.48065%20145.836C3.28736%20145.64%204.3469%20145.2%205.59807%20144.541L246.144%2018.2749C247.388%2017.6245%20248.801%2016.7672%20250.301%2015.7524C251.801%2014.7375%20253.359%2013.5853%20254.885%2012.3621C256.411%2011.139%20257.875%209.86907%20259.192%208.6257C260.509%207.38233%20261.653%206.19009%20262.559%205.11776Z'%20fill='white'/%3e%3c/svg%3e",hg="data:image/svg+xml,%3csvg%20width='242'%20height='127'%20viewBox='0%200%20242%20127'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M239.21%204.51512C240.014%203.52722%20240.585%202.66023%20240.892%201.96418C241.198%201.26813%20241.233%200.756786%20240.995%200.459649C240.757%200.162512%20240.25%200.0854627%20239.504%200.232943C238.758%200.380424%20237.787%200.749522%20236.648%201.31894L17.6146%20110.341C16.482%20110.902%2015.2015%20111.654%2013.8469%20112.552C12.4923%20113.45%2011.0905%20114.477%209.72224%20115.574C8.35402%20116.67%207.0465%20117.815%205.8751%20118.942C4.7037%20120.068%203.69163%20121.155%202.89722%20122.138C2.09351%20123.126%201.52199%20123.993%201.21567%20124.689C0.909346%20125.385%200.87425%20125.896%201.11242%20126.193C1.35059%20126.49%201.85732%20126.567%202.60335%20126.42C3.34938%20126.273%204.31999%20125.903%205.45915%20125.334L224.493%2016.3119C225.625%2015.7506%20226.906%2014.9992%20228.26%2014.1011C229.615%2013.2031%20231.017%2012.176%20232.385%2011.0793C233.753%209.98262%20235.061%208.83794%20236.232%207.71131C237.404%206.58467%20238.416%205.49839%20239.21%204.51512Z'%20fill='white'/%3e%3c/svg%3e",mg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:fg,alt:"",className:"style1"}),u.jsx("img",{src:pg,alt:"",className:"style2"}),u.jsx("img",{src:hg,alt:"",className:"style3"})]}),gg="data:image/svg+xml,%3csvg%20width='343'%20height='101'%20viewBox='0%200%20343%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M337.756%202.82053C339.3%202.19061%20340.513%201.65685%20341.327%201.25004C342.14%200.843229%20342.537%200.571418%20342.496%200.450288C342.454%200.329157%20341.973%200.361105%20341.082%200.544288C340.192%200.727471%20338.908%201.05826%20337.305%201.51758L29.4539%2089.5925C27.8637%2090.0466%2025.9836%2090.621%2023.9221%2091.2825C21.8605%2091.944%2019.6583%2092.6795%2017.4424%2093.4466C15.2266%2094.2137%2013.041%2094.9971%2011.0117%2095.7518C8.98235%2096.5064%207.14954%2097.2174%205.61891%2097.8435C4.07519%2098.4735%202.86157%2099.0072%202.04811%2099.414C1.23466%2099.8208%200.837454%20100.093%200.879386%20100.214C0.921318%20100.335%201.40156%20100.303%202.29243%20100.12C3.1833%2099.9366%204.46718%2099.6058%206.06996%2099.1465L313.921%2011.0716C315.511%2010.6174%20317.391%2010.043%20319.453%209.38155C321.514%208.72006%20323.717%207.98456%20325.932%207.21749C328.148%206.45042%20330.334%205.66696%20332.363%204.9123C334.393%204.15763%20336.225%203.44671%20337.756%202.82053Z'%20fill='purple'/%3e%3c/svg%3e",vg="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.9999%2034H17.9999C17.4759%2034%2017.0399%2034.405%2017.0019%2034.929C16.9829%2035.19%2016.5929%2041.361%2020.6999%2045.77C23.3129%2048.577%2027.1149%2050%2031.9999%2050C36.8849%2050%2040.6869%2048.577%2043.2999%2045.77C47.4059%2041.36%2047.0159%2035.189%2046.9969%2034.929C46.9599%2034.405%2046.5239%2034%2045.9999%2034ZM41.8239%2044.42C39.6039%2046.795%2036.2999%2048%2031.9999%2048C27.7009%2048%2024.3949%2046.795%2022.1759%2044.42C19.5279%2041.586%2019.0639%2037.745%2018.9979%2036H45.0029C44.9369%2037.745%2044.4729%2041.585%2041.8239%2044.42Z'%20fill='purple'/%3e%3cpath%20d='M18.394%2028.919L25.394%2025.919C25.762%2025.762%2026%2025.4%2026%2025C26%2024.6%2025.762%2024.238%2025.394%2024.081L18.394%2021.081L17.606%2022.919L22.461%2025L17.606%2027.081L18.394%2028.919Z'%20fill='purple'/%3e%3cpath%20d='M38.606%2025.919L45.606%2028.919L46.393%2027.081L41.539%2025L46.393%2022.919L45.606%2021.081L38.606%2024.081C38.238%2024.238%2038%2024.6%2038%2025C38%2025.4%2038.238%2025.762%2038.606%2025.919Z'%20fill='purple'/%3e%3cpath%20d='M32%204C16.561%204%204%2016.561%204%2032C4%2047.439%2016.561%2060%2032%2060C47.439%2060%2060%2047.439%2060%2032C60%2016.561%2047.439%204%2032%204ZM32%2058C17.664%2058%206%2046.336%206%2032C6%2017.664%2017.664%206%2032%206C46.337%206%2058%2017.664%2058%2032C58%2046.336%2046.337%2058%2032%2058Z'%20fill='purple'/%3e%3c/svg%3e",yg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center styleText",children:u.jsxs("h2",{children:[u.jsx("span",{style:{display:"block",color:"purple"},children:"TOUJOURS SATISFAIT !"}),"Acheter vos produits chez nous sans vous deplacer et recever les en toute sécurité dans le plus bref delai !"]})}),u.jsx("div",{children:u.jsx("img",{src:vg,className:"styleSmile",alt:""})}),u.jsx("div",{children:u.jsx("img",{src:gg,alt:"",className:"styleLine"})})]});var Ze=function(){return Ze=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Ze.apply(this,arguments)};function ro(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,l;r<i;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var oe="-ms-",vi="-moz-",J="-webkit-",mp="comm",No="rule",Nu="decl",wg="@import",gp="@keyframes",xg="@layer",vp=Math.abs,Lu=String.fromCharCode,xs=Object.assign;function Sg(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function yp(e){return e.trim()}function Ft(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function Nl(e,t,n){return e.indexOf(t,n)}function _e(e,t){return e.charCodeAt(t)|0}function Dr(e,t,n){return e.slice(t,n)}function Pt(e){return e.length}function wp(e){return e.length}function oi(e,t){return t.push(e),e}function Cg(e,t){return e.map(t).join("")}function yd(e,t){return e.filter(function(n){return!Ft(n,t)})}var Lo=1,Tr=1,xp=0,yt=0,Ce=0,Fr="";function Do(e,t,n,r,i,l,o,a){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Lo,column:Tr,length:o,return:"",siblings:a}}function nn(e,t){return xs(Do("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function er(e){for(;e.root;)e=nn(e.root,{children:[e]});oi(e,e.siblings)}function jg(){return Ce}function kg(){return Ce=yt>0?_e(Fr,--yt):0,Tr--,Ce===10&&(Tr=1,Lo--),Ce}function Et(){return Ce=yt<xp?_e(Fr,yt++):0,Tr++,Ce===10&&(Tr=1,Lo++),Ce}function Fn(){return _e(Fr,yt)}function Ll(){return yt}function To(e,t){return Dr(Fr,e,t)}function Ss(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mg(e){return Lo=Tr=1,xp=Pt(Fr=e),yt=0,[]}function Eg(e){return Fr="",e}function ha(e){return yp(To(yt-1,Cs(e===91?e+2:e===40?e+1:e)))}function Ng(e){for(;(Ce=Fn())&&Ce<33;)Et();return Ss(e)>2||Ss(Ce)>3?"":" "}function Lg(e,t){for(;--t&&Et()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return To(e,Ll()+(t<6&&Fn()==32&&Et()==32))}function Cs(e){for(;Et();)switch(Ce){case e:return yt;case 34:case 39:e!==34&&e!==39&&Cs(Ce);break;case 40:e===41&&Cs(e);break;case 92:Et();break}return yt}function Dg(e,t){for(;Et()&&e+Ce!==57;)if(e+Ce===84&&Fn()===47)break;return"/*"+To(t,yt-1)+"*"+Lu(e===47?e:Et())}function Tg(e){for(;!Ss(Fn());)Et();return To(e,yt)}function _g(e){return Eg(Dl("",null,null,null,[""],e=Mg(e),0,[0],e))}function Dl(e,t,n,r,i,l,o,a,s){for(var c=0,d=0,h=o,g=0,x=0,S=0,w=1,M=1,p=1,f=0,m="",k=i,N=l,v=r,j=m;M;)switch(S=f,f=Et()){case 40:if(S!=108&&_e(j,h-1)==58){Nl(j+=H(ha(f),"&","&\f"),"&\f",vp(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:j+=ha(f);break;case 9:case 10:case 13:case 32:j+=Ng(S);break;case 92:j+=Lg(Ll()-1,7);continue;case 47:switch(Fn()){case 42:case 47:oi(Pg(Dg(Et(),Ll()),t,n,s),s);break;default:j+="/"}break;case 123*w:a[c++]=Pt(j)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+d:p==-1&&(j=H(j,/\f/g,"")),x>0&&Pt(j)-h&&oi(x>32?xd(j+";",r,n,h-1,s):xd(H(j," ","")+";",r,n,h-2,s),s);break;case 59:j+=";";default:if(oi(v=wd(j,t,n,c,d,i,a,m,k=[],N=[],h,l),l),f===123)if(d===0)Dl(j,t,v,v,k,l,h,a,N);else switch(g===99&&_e(j,3)===110?100:g){case 100:case 108:case 109:case 115:Dl(e,v,v,r&&oi(wd(e,v,v,0,0,i,a,m,i,k=[],h,N),N),i,N,h,a,r?k:N);break;default:Dl(j,v,v,v,[""],N,0,a,N)}}c=d=x=0,w=p=1,m=j="",h=o;break;case 58:h=1+Pt(j),x=S;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&kg()==125)continue}switch(j+=Lu(f),f*w){case 38:p=d>0?1:(j+="\f",-1);break;case 44:a[c++]=(Pt(j)-1)*p,p=1;break;case 64:Fn()===45&&(j+=ha(Et())),g=Fn(),d=h=Pt(m=j+=Tg(Ll())),f++;break;case 45:S===45&&Pt(j)==2&&(w=0)}}return l}function wd(e,t,n,r,i,l,o,a,s,c,d,h){for(var g=i-1,x=i===0?l:[""],S=wp(x),w=0,M=0,p=0;w<r;++w)for(var f=0,m=Dr(e,g+1,g=vp(M=o[w])),k=e;f<S;++f)(k=yp(M>0?x[f]+" "+m:H(m,/&\f/g,x[f])))&&(s[p++]=k);return Do(e,t,n,i===0?No:a,s,c,d,h)}function Pg(e,t,n,r){return Do(e,t,n,mp,Lu(jg()),Dr(e,2,-2),0,r)}function xd(e,t,n,r,i){return Do(e,t,n,Nu,Dr(e,0,r),Dr(e,r+1,-1),r,i)}function Sp(e,t,n){switch(Sg(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return vi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+vi+e+oe+e+e;case 5936:switch(_e(e,t+11)){case 114:return J+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+oe+e+e;case 6165:return J+e+oe+"flex-"+e+e;case 5187:return J+e+H(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return J+e+oe+"flex-item-"+H(e,/flex-|-self/g,"")+(Ft(e,/flex-|baseline/)?"":oe+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return J+e+oe+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+oe+H(e,"shrink","negative")+e;case 5292:return J+e+oe+H(e,"basis","preferred-size")+e;case 6060:return J+"box-"+H(e,"-grow","")+J+e+oe+H(e,"grow","positive")+e;case 4554:return J+H(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!Ft(e,/flex-|baseline/))return oe+"grid-column-align"+Dr(e,t)+e;break;case 2592:case 3360:return oe+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ft(r.props,/grid-\w+-end/)})?~Nl(e+(n=n[t].value),"span",0)?e:oe+H(e,"-start","")+e+oe+"grid-row-span:"+(~Nl(n,"span",0)?Ft(n,/\d+/):+Ft(n,/\d+/)-+Ft(e,/\d+/))+";":oe+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ft(r.props,/grid-\w+-start/)})?e:oe+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pt(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+vi+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Nl(e,"stretch",0)?Sp(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,o,a,s,c){return oe+i+":"+l+c+(o?oe+i+"-span:"+(a?s:+s-+l)+c:"")+e});case 4949:if(_e(e,t+6)===121)return H(e,":",":"+J)+e;break;case 6444:switch(_e(e,_e(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(_e(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+oe+"$2box$3")+e;case 100:return H(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function io(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function zg(e,t,n,r){switch(e.type){case xg:if(e.children.length)break;case wg:case Nu:return e.return=e.return||e.value;case mp:return"";case gp:return e.return=e.value+"{"+io(e.children,r)+"}";case No:if(!Pt(e.value=e.props.join(",")))return""}return Pt(n=io(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rg(e){var t=wp(e);return function(n,r,i,l){for(var o="",a=0;a<t;a++)o+=e[a](n,r,i,l)||"";return o}}function Ag(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ig(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nu:e.return=Sp(e.value,e.length,n);return;case gp:return io([nn(e,{value:H(e.value,"@","@"+J)})],r);case No:if(e.length)return Cg(n=e.props,function(i){switch(Ft(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":er(nn(e,{props:[H(i,/:(read-\w+)/,":"+vi+"$1")]})),er(nn(e,{props:[i]})),xs(e,{props:yd(n,r)});break;case"::placeholder":er(nn(e,{props:[H(i,/:(plac\w+)/,":"+J+"input-$1")]})),er(nn(e,{props:[H(i,/:(plac\w+)/,":"+vi+"$1")]})),er(nn(e,{props:[H(i,/:(plac\w+)/,oe+"input-$1")]})),er(nn(e,{props:[i]})),xs(e,{props:yd(n,r)});break}return""})}}var Og={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},rt={},_r=typeof process<"u"&&rt!==void 0&&(rt.REACT_APP_SC_ATTR||rt.SC_ATTR)||"data-styled",Cp="active",jp="data-styled-version",_o="6.1.8",Du=`/*!sc*/
`,Tu=typeof window<"u"&&"HTMLElement"in window,Fg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&rt!==void 0&&rt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&rt.REACT_APP_SC_DISABLE_SPEEDY!==""?rt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&rt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&rt!==void 0&&rt.SC_DISABLE_SPEEDY!==void 0&&rt.SC_DISABLE_SPEEDY!==""&&rt.SC_DISABLE_SPEEDY!=="false"&&rt.SC_DISABLE_SPEEDY),Po=Object.freeze([]),Pr=Object.freeze({});function $g(e,t,n){return n===void 0&&(n=Pr),e.theme!==n.theme&&e.theme||t||n.theme}var kp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ug=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bg=/(^-|-$)/g;function Sd(e){return e.replace(Ug,"-").replace(Bg,"")}var bg=/(a)(d)/gi,pl=52,Cd=function(e){return String.fromCharCode(e+(e>25?39:97))};function js(e){var t,n="";for(t=Math.abs(e);t>pl;t=t/pl|0)n=Cd(t%pl)+n;return(Cd(t%pl)+n).replace(bg,"$1-$2")}var ma,Mp=5381,mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ep=function(e){return mr(Mp,e)};function Hg(e){return js(Ep(e)>>>0)}function Qg(e){return e.displayName||e.name||"Component"}function ga(e){return typeof e=="string"&&!0}var Np=typeof Symbol=="function"&&Symbol.for,Lp=Np?Symbol.for("react.memo"):60115,Wg=Np?Symbol.for("react.forward_ref"):60112,Vg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Yg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Dp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gg=((ma={})[Wg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ma[Lp]=Dp,ma);function jd(e){return("type"in(t=e)&&t.type.$$typeof)===Lp?Dp:"$$typeof"in e?Gg[e.$$typeof]:Vg;var t}var Kg=Object.defineProperty,Zg=Object.getOwnPropertyNames,kd=Object.getOwnPropertySymbols,Xg=Object.getOwnPropertyDescriptor,Jg=Object.getPrototypeOf,Md=Object.prototype;function Tp(e,t,n){if(typeof t!="string"){if(Md){var r=Jg(t);r&&r!==Md&&Tp(e,r,n)}var i=Zg(t);kd&&(i=i.concat(kd(t)));for(var l=jd(e),o=jd(t),a=0;a<i.length;++a){var s=i[a];if(!(s in Yg||n&&n[s]||o&&s in o||l&&s in l)){var c=Xg(t,s);try{Kg(e,s,c)}catch{}}}}return e}function zr(e){return typeof e=="function"}function _u(e){return typeof e=="object"&&"styledComponentId"in e}function An(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Ed(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Fi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ks(e,t,n){if(n===void 0&&(n=!1),!n&&!Fi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ks(e[r],t[r]);else if(Fi(t))for(var r in t)e[r]=ks(e[r],t[r]);return e}function Pu(e,t){Object.defineProperty(e,"toString",{value:t})}function Wi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var qg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,l=i;t>=l;)if((l<<=1)<0)throw Wi(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var o=i;o<l;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(t+1),s=(o=0,n.length);o<s;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var l=r;l<i;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),l=i+r,o=i;o<l;o++)n+="".concat(this.tag.getRule(o)).concat(Du);return n},e}(),Tl=new Map,lo=new Map,_l=1,hl=function(e){if(Tl.has(e))return Tl.get(e);for(;lo.has(_l);)_l++;var t=_l++;return Tl.set(e,t),lo.set(t,e),t},ev=function(e,t){_l=t+1,Tl.set(e,t),lo.set(t,e)},tv="style[".concat(_r,"][").concat(jp,'="').concat(_o,'"]'),nv=new RegExp("^".concat(_r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rv=function(e,t,n){for(var r,i=n.split(","),l=0,o=i.length;l<o;l++)(r=i[l])&&e.registerName(t,r)},iv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Du),i=[],l=0,o=r.length;l<o;l++){var a=r[l].trim();if(a){var s=a.match(nv);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(ev(d,c),rv(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function lv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _p=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(_r,"]")));return s[s.length-1]}(n),l=i!==void 0?i.nextSibling:null;r.setAttribute(_r,Cp),r.setAttribute(jp,_o);var o=lv();return o&&r.setAttribute("nonce",o),n.insertBefore(r,l),r},ov=function(){function e(t){this.element=_p(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,l=r.length;i<l;i++){var o=r[i];if(o.ownerNode===n)return o}throw Wi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),av=function(){function e(t){this.element=_p(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),sv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nd=Tu,uv={isServer:!Tu,useCSSOMInjection:!Fg},Pp=function(){function e(t,n,r){t===void 0&&(t=Pr),n===void 0&&(n={});var i=this;this.options=Ze(Ze({},uv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Tu&&Nd&&(Nd=!1,function(l){for(var o=document.querySelectorAll(tv),a=0,s=o.length;a<s;a++){var c=o[a];c&&c.getAttribute(_r)!==Cp&&(iv(l,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Pu(this,function(){return function(l){for(var o=l.getTag(),a=o.length,s="",c=function(h){var g=function(p){return lo.get(p)}(h);if(g===void 0)return"continue";var x=l.names.get(g),S=o.getGroup(h);if(x===void 0||S.length===0)return"continue";var w="".concat(_r,".g").concat(h,'[id="').concat(g,'"]'),M="";x!==void 0&&x.forEach(function(p){p.length>0&&(M+="".concat(p,","))}),s+="".concat(S).concat(w,'{content:"').concat(M,'"}').concat(Du)},d=0;d<a;d++)c(d);return s}(i)})}return e.registerId=function(t){return hl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ze(Ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new sv(i):r?new ov(i):new av(i)}(this.options),new qg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(hl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(hl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(hl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),cv=/&/g,dv=/^\s*\/\/.*$/gm;function zp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=zp(n.children,t)),n})}function fv(e){var t,n,r,i=e===void 0?Pr:e,l=i.options,o=l===void 0?Pr:l,a=i.plugins,s=a===void 0?Po:a,c=function(g,x,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):g},d=s.slice();d.push(function(g){g.type===No&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(cv,n).replace(r,c))}),o.prefix&&d.push(Ig),d.push(zg);var h=function(g,x,S,w){x===void 0&&(x=""),S===void 0&&(S=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var M=g.replace(dv,""),p=_g(S||x?"".concat(S," ").concat(x," { ").concat(M," }"):M);o.namespace&&(p=zp(p,o.namespace));var f=[];return io(p,Rg(d.concat(Ag(function(m){return f.push(m)})))),f};return h.hash=s.length?s.reduce(function(g,x){return x.name||Wi(15),mr(g,x.name)},Mp).toString():"",h}var pv=new Pp,Ms=fv(),Rp=Xe.createContext({shouldForwardProp:void 0,styleSheet:pv,stylis:Ms});Rp.Consumer;Xe.createContext(void 0);function Ld(){return L.useContext(Rp)}var hv=function(){function e(t,n){var r=this;this.inject=function(i,l){l===void 0&&(l=Ms);var o=r.name+l.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,l(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Pu(this,function(){throw Wi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ms),this.name+t.hash},e}(),mv=function(e){return e>="A"&&e<="Z"};function Dd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;mv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ap=function(e){return e==null||e===!1||e===""},Ip=function(e){var t,n,r=[];for(var i in e){var l=e[i];e.hasOwnProperty(i)&&!Ap(l)&&(Array.isArray(l)&&l.isCss||zr(l)?r.push("".concat(Dd(i),":"),l,";"):Fi(l)?r.push.apply(r,ro(ro(["".concat(i," {")],Ip(l),!1),["}"],!1)):r.push("".concat(Dd(i),": ").concat((t=i,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Og||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $n(e,t,n,r){if(Ap(e))return[];if(_u(e))return[".".concat(e.styledComponentId)];if(zr(e)){if(!zr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var i=e(t);return $n(i,t,n,r)}var l;return e instanceof hv?n?(e.inject(n,r),[e.getName(r)]):[e]:Fi(e)?Ip(e):Array.isArray(e)?Array.prototype.concat.apply(Po,e.map(function(o){return $n(o,t,n,r)})):[e.toString()]}function gv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(zr(n)&&!_u(n))return!1}return!0}var vv=Ep(_o),yv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gv(t),this.componentId=n,this.baseHash=mr(vv,n),this.baseStyle=r,Pp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=An(i,this.staticRulesId);else{var l=Ed($n(this.rules,t,n,r)),o=js(mr(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(l,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=An(i,o),this.staticRulesId=o}else{for(var s=mr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var g=Ed($n(h,t,n,r));s=mr(s,g+d),c+=g}}if(c){var x=js(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=An(i,x)}}return i},e}(),Op=Xe.createContext(void 0);Op.Consumer;var va={};function wv(e,t,n){var r=_u(e),i=e,l=!ga(e),o=t.attrs,a=o===void 0?Po:o,s=t.componentId,c=s===void 0?function(k,N){var v=typeof k!="string"?"sc":Sd(k);va[v]=(va[v]||0)+1;var j="".concat(v,"-").concat(Hg(_o+v+va[v]));return N?"".concat(N,"-").concat(j):j}(t.displayName,t.parentComponentId):s,d=t.displayName,h=d===void 0?function(k){return ga(k)?"styled.".concat(k):"Styled(".concat(Qg(k),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Sd(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var M=t.shouldForwardProp;S=function(k,N){return w(k,N)&&M(k,N)}}else S=w}var p=new yv(n,g,r?i.componentStyle:void 0);function f(k,N){return function(v,j,T){var R=v.attrs,F=v.componentStyle,K=v.defaultProps,ve=v.foldedComponentIds,pe=v.styledComponentId,Ve=v.target,Zt=Xe.useContext(Op),Lt=Ld(),te=v.shouldForwardProp||Lt.shouldForwardProp,P=$g(j,Zt,K)||Pr,I=function(Oe,we,nt){for(var Mn,It=Ze(Ze({},we),{className:void 0,theme:nt}),$r=0;$r<Oe.length;$r+=1){var Ee=zr(Mn=Oe[$r])?Mn(It):Mn;for(var Ye in Ee)It[Ye]=Ye==="className"?An(It[Ye],Ee[Ye]):Ye==="style"?Ze(Ze({},It[Ye]),Ee[Ye]):Ee[Ye]}return we.className&&(It.className=An(It.className,we.className)),It}(R,j,P),$=I.as||Ve,V={};for(var Z in I)I[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&I.theme===P||(Z==="forwardedAs"?V.as=I.forwardedAs:te&&!te(Z,$)||(V[Z]=I[Z]));var tt=function(Oe,we){var nt=Ld(),Mn=Oe.generateAndInjectStyles(we,nt.styleSheet,nt.stylis);return Mn}(F,I),ye=An(ve,pe);return tt&&(ye+=" "+tt),I.className&&(ye+=" "+I.className),V[ga($)&&!kp.has($)?"class":"className"]=ye,V.ref=T,L.createElement($,V)}(m,k,N)}f.displayName=h;var m=Xe.forwardRef(f);return m.attrs=x,m.componentStyle=p,m.displayName=h,m.shouldForwardProp=S,m.foldedComponentIds=r?An(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=g,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(N){for(var v=[],j=1;j<arguments.length;j++)v[j-1]=arguments[j];for(var T=0,R=v;T<R.length;T++)ks(N,R[T],!0);return N}({},i.defaultProps,k):k}}),Pu(m,function(){return".".concat(m.styledComponentId)}),l&&Tp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Td(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var _d=function(e){return Object.assign(e,{isCss:!0})};function xv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(zr(e)||Fi(e))return _d($n(Td(Po,ro([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?$n(r):_d($n(Td(r,t)))}function Es(e,t,n){if(n===void 0&&(n=Pr),!t)throw Wi(1,t);var r=function(i){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return e(t,n,xv.apply(void 0,ro([i],l,!1)))};return r.attrs=function(i){return Es(e,t,Ze(Ze({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Es(e,t,Ze(Ze({},n),i))},r}var Fp=function(e){return Es(wv,e)},ee=Fp;kp.forEach(function(e){ee[e]=Fp(e)});const Sv=ee(pp)`
    all:unset;
    position:absolute;
    top:0rem; 
    left:0rem;width :100%;
    width : 100%;
    height : 100%;
    

.img{
    position:absolute;
    top:5rem; 
    left:4.5rem;
    display:block;

}

@media screen and  ((width>=350px) and (width<500px)){
    .img{
    position:absolute;
    top:-8rem; 
    left:-1rem;
    display:block;

}
}
@media screen and  ((width>=500px) and (width<=800px)){
.img{
    position:absolute;
    top:-4rem; 
    left:-1.5rem;
    display:block;

}

}
@media screen and  ((width>=800px) and (width<1200px)){
    .img{
    position:absolute;
    top:-5rem; 
    left:-1rem;
    display:block;

}

}
@media screen and  (width>=1200px){
    .img{
    position:absolute;
    top:-4rem; 
    left:1.5rem;
    display:block;

}

}

`,Cv=ee(pp)`
.img{
    position:absolute;
    top:5rem;
    left:3.7rem;
    display:block;
}
    

`,jv=ee(dg)`

position: absolute;
left:0rem;
top:0rem;
width:100%;
height:100%;

    .image1{
        position: absolute;
        left :19.5rem;
        top :8rem;
    }
    .image2{
        position: absolute;
        left :-1.6rem;
        top :16.2rem;
    }
    .image3{
        position: absolute;
        left :13rem;
        top :24rem;
    }

@media screen and  ((width>=350px) and (width<500px)){
left:-5.5rem;
top:-12.8rem;
width:100%;
height:100%;
}
@media screen and  ((width>=500px) and (width<=800px)){
left:-6rem;
top:-8.8rem;
width:100%;
height:100%;

}
@media screen and  ((width>=800px) and (width<1200px)){
left:-5.5rem;
top:-9.8rem;
width:100%;
height:100%;
}
@media screen and  (width>=1200px){
left:-3rem;
top:-9.0rem;
width:100%;
height:100%;
}
`,kv=ee(yg)`

    .styleText{
    all:unset;
    position:absolute;
    top:10rem;
    left:2rem;
    display:block;
    height:15rem;
    width:80%;
    text-align:center;
    font-family:audrey;
    }
    .styleSmile{
      position: absolute;
      top:9rem;
      right:3rem;
    }
    .styleLine{
      position: absolute;
      top:22rem;
      right:6rem;
    }

@media screen and  ((width>=800px) and (width<1200px)){
    .styleSmile{
      position: absolute;
      top:6.5rem;
      right:0.8rem;
    }
    .styleLine{
      position: absolute;
      top:23rem;
      right:4rem;
    }
}
@media screen and  ((width>=1200px)){
    .styleSmile{
      position: absolute;
      top:2%;
      right:0.5%;
    }
    .styleLine{
      position: absolute;
      top:55%;
      right:7%;
    }
        .styleText{

    top:10%;
    left:2rem;
    display:block;
    height:15rem;
    width:80%;
    text-align:center;
    font-family:audrey;
    }
}


`,Mv=ee(mg)`


position: absolute;
left:-7rem;
top:-7rem;
width:100%;
height:100%;

    .style1{
        position: absolute;
        left :6rem;
        top :10rem;
    }
    .style2{
        position: absolute;
        left :6rem;
        top :18rem;
    }
    .style3{
        position: absolute;
        left :10.5rem;
        top :21.5rem;
    }
    `,Ev=ee(hp)`

    .img{
    position:absolute;
    top:-4.8rem;
    left:1rem;
    display:block;

    }

@media screen and  ((width>=800px) and (width<1200px)){
    .img{
    position:absolute;
    top:0rem;
    left:0rem;
    display:block;

    }
}
`,Nv=ee(hp)`

    .img{
    position:absolute;
    top:-13%;
    left:10%;
    display:block;

    }

@media screen and  ((width>=800px) and (width<950px)){
    .img{
    position:absolute;
    top:-20%;
    left:2%;
    display:block;

    }
}
`,Lv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsxs("div",{className:"first-container",children:[u.jsx(Mv,{}),u.jsx(Ev,{})]})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(kv,{})})}),u.jsx("div",{className:"third",children:u.jsxs("div",{className:"third-container",children:[u.jsx(Sv,{}),u.jsx(jv,{}),"          "]})})]}),Dv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("h2",{children:u.jsx("span",{children:"chezArdi"})}),u.jsx("h3",{children:"Commandez vos produits et soyez livrer où que vous soyer à Kinshasa"}),u.jsx("div",{})]}),Tv=ee(Dv)`
    all: unset;
    position:absolute;
    top:-7%;
    left:5%;
    display:block;
    border-top-right-radius:45%;
    border-bottom-left-radius:45%;
    height:70%;
    width:100%;
    background-color:rgba(0,0,0,0.1);
    font-family:audrey;

h2{
    margin-left:10%;
    margin-top:10%;
    font-size:5rem;
    text-align:left;
    letter-spacing:1px;
    font-weight:100;
}
h2 span{
    color:purple;
}
h3{
    margin-top:5%;
    margin-left:20%;
    width:70%;
    font-size:30px;
    text-align:justify;
    letter-spacing:1px;
    font-weight:500
}
@media screen and  ((width>=500px) and (width<950px)){
    h3{
    text-align:left;
    font-size:25px;

    }
}

@media screen and  ((width>=950px) and (width<1375px)){
    h3{
    text-align:left;
    font-size:28px;
    }
}
@media screen and  ((width>=800px) and (width<950px)){
    h2{
        font-size:3rem;
    }
}
@media screen and  (max-width:799px){
    left:0%;
        top:-13%;

    h2{
    font-size:4rem;

    }
}

`,_v=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"container-first",children:u.jsx(Tv,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"container-second",children:u.jsx(Nv,{})})})]}),Pv="data:image/svg+xml,%3csvg%20width='240'%20height='201'%20viewBox='0%200%20240%20201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_184_251)'%3e%3cpath%20d='M209.83%2083.5349L52.22%2038.9572C47.8199%2037.7127%2043.2414%2037.787%2039.4918%2039.1637C35.7422%2040.5404%2033.1286%2043.1068%2032.2259%2046.2982L20.3139%2088.415C19.4112%2091.6065%2020.2935%2095.1616%2022.7665%2098.2983C25.2396%20101.435%2029.1009%20103.896%2033.501%20105.141L114.795%20128.133L137.936%20147.675L130.307%20132.521L191.111%20149.718C195.511%20150.963%20200.09%20150.889%20203.84%20149.512C207.589%20148.135%20210.203%20145.569%20211.105%20142.377L223.017%20100.261C223.92%2097.0692%20223.038%2093.5141%20220.565%2090.3774C218.092%2087.2407%20214.23%2084.7794%20209.83%2083.5349Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.8166%2050.9906C47.5827%2064.2224%2043.3749%2094.9374%2045.1998%2095.4536C47.0248%2095.9698%2078.2222%2065.8055%2080.296%2066.3921C82.3698%2066.9786%2078.9617%2099.9342%2090.8239%20108.358C93.8019%2097.8285%20103.606%2072.9849%20116.03%2066.7518'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M149.102%20105.347C143.623%20114.584%20132.052%20120.018%20123.259%20117.531C114.466%20115.044%20111.852%20105.598%20117.331%2096.3608C122.81%2087.1239%20134.381%2081.6892%20143.174%2084.1762C151.967%2086.6632%20154.581%2096.1098%20149.102%20105.347Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M198.873%20119.424C193.394%20128.661%20181.823%20134.095%20173.03%20131.608C164.237%20129.121%20161.623%20119.675%20167.102%20110.438C172.582%20101.201%20184.153%2095.7664%20192.946%2098.2534C201.739%20100.74%20204.353%20110.187%20198.873%20119.424Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_184_251'%3e%3crect%20width='206.897'%20height='150.065'%20fill='purple'%20transform='translate(40.8413)%20rotate(15.7927)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",zv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("p",{children:"Une nouvelle expérience ! Nous livrons partout dans la ville de Kinshasa"})}),u.jsx("div",{className:"style3",children:u.jsx("img",{src:Pv,alt:""})})]}),Rv="/reactdeploy4/assets/dots1-b2Sj8ewq.svg",Av="/reactdeploy4/assets/dots2-xnZsoQ1q.svg",Iv="/reactdeploy4/assets/dots3-AkDKMIjG.svg",Ov="/reactdeploy4/assets/dots4-PsKuw_9x.svg",Fv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx(Cv,{}),u.jsx("img",{src:Rv,className:"style2",alt:""}),u.jsx("img",{src:Av,className:"style3",alt:""}),u.jsx("img",{src:Iv,className:"style4",alt:""}),u.jsx("img",{src:Ov,className:"style5",alt:""})]}),$v="/reactdeploy4/assets/img_3-DTECnV5R.png",Uv=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:$v,alt:"",className:"img"})}),Bv="/reactdeploy4/assets/dots5-OjWdiGOn.svg",bv="/reactdeploy4/assets/dots6-p_drzvwO.svg",Hv="/reactdeploy4/assets/dots7-DmXCMvbn.svg",Qv="/reactdeploy4/assets/dots8-Midirh2A.svg",Wv=ee(Uv)`
.img{
        position:absolute;
        top:3rem;
        scale: 0.9;
        left:1.5rem;
        display:block;
    }
@media screen and ((width >=755px) and (width< 1130px)) {
    .img{
        top:3rem;

        scale:0.8;
    }
}
@media screen and ((width >=400px) and (width< 755px)) {
    .img{
        left:13%;
        top:20%;

        scale:0.8;
    }
}
@media screen and ((width< 400px)) {
    .img{
        left:-3%;
        top:6rem;
        scale:0.8;
    }
}
`,Vv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:Bv,className:"style2",alt:""}),u.jsx("img",{src:bv,className:"style3",alt:""}),u.jsx("img",{src:Qv,className:"style5",alt:""}),u.jsx(Wv,{}),u.jsx("img",{src:Hv,className:"style4",alt:""})]}),Yv=ee(Fv)`

        position:absolute;
        left:-5%;
        top:-30%;
        min-width:350px;
        width:100%;
        height:100%;

    .style2{
        position:absolute;
        left:6rem;
        top:0rem;
        display:block;

    }
    .style3{
        position:absolute;
        left:25rem;
        display:block;
        top:0;

    }
    .style4{
        position:absolute;
        left:-2rem;
        display:block;
        top:25rem;

    }
    .style5{
        position:absolute;
        left:11rem;
        display:block;
        top:28rem;

    }
@media screen and ((width >=755px) and (width< 915px)) {

    .style3{
        left:90%;

    }
    
}
`,Gv=ee(Vv)`

        position:absolute;
        left:4%;
        top:-25%;
        width:100%;
        height:100%;
    
    .style2{
        position:absolute;
        left:22rem;
        top:2rem;
        display:block;

    }
    .style3{
        position:absolute;
        left:28.5rem;
        display:block;
        top:10rem;

    }
    .style4{
        position:absolute;
        left:-5rem;
        display:block;
        top:26.5rem;

    }
    .style5{
        position:absolute;
        left:13rem;
        display:block;
        top:14rem;

    }
@media screen and ((width >=400px) and (width< 1130px)) {
    .style2{
        z-index:10;

    }
    .style3{
        position:absolute;
        left:28.5rem;
        display:block;
        top:10rem;

    }
}

`,Kv=ee(zv)`
    position:absolute;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    display:block;
    height:15rem;
    width:90%;
    text-align:center;
    font-family:audrey;
    
  
    .style3{
        position:absolute;
        left:50%;
        top:-60%;
    }

.first{
    font-size:2rem;
    text-align:center;
    letter-spacing:1.4px;
    font-weight:500;
    }
`,Zv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"first-container",children:u.jsx(Yv,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(Kv,{})})}),u.jsx("div",{className:"third",children:u.jsx("div",{className:"third-container",children:u.jsx(Gv,{})})})]}),ya=({image:e,text:t,style:n})=>{const r={position:"Absolute",fontFamily:"audrey",fontSize:"inherit",fontWeight:"bolder",color:"white",textAlign:"center"},i={position:"relative",display:"flex",fontSize:"inherit",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"#DADAD6",boxShadow:"-10px 10px 20px #000000",marginBottom:"3rem"};return u.jsx("div",{style:{...i,...n},children:u.jsx("div",{className:"px-4",style:r,children:e?u.jsx("img",{src:e,alt:""}):u.jsx("div",{className:"spanText",children:t})})})},Xv=ee(Lv)`
width: 100%;
height: 100%;
    margin-top:3.5rem;
    display: grid;
grid-template-columns: 32% 34% 34%;

.styleImg2{
    position:absolute;
    top:3.8rem;
    left:8rem;
    display:block;
    }


.first{
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;

}
.second{
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;
    display: grid;
    place-items: center;
    overflow-x: hidden;

}
.second-container{
    word-wrap:break-word;
}
.third{
    all:unset;
    position: relative;
    
}

@media screen and  ((width<500px)){
grid-template-columns:100%;
height: 90%;


    .first{
        display: none;
}
.second{
        display: none;
        visibility:hidden;
}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:350px;
    position:inherit;
    top:12%;


}


}
@media screen and  ((width>=500px) and (width<800px)){
grid-template-columns:100%;
height: 90%;

    .first{
        display: none;
}
.second{
        display: none;
        visibility:hidden;
}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:500px;
    position:inherit;

}

}
@media screen and  ((width>=800px) and (width<1200px)){
grid-template-columns:50% 50%;
height: 100%;

    .first{
        display: none;
}
.second{

}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.third-container{
    height:500px;
    max-height:500px;
    width:350px;
    max-width:500px;
    position:inherit;

}

}
@media screen and  ((width>=1200px)){
grid-template-columns:32% 34% 34%;

    .first{
        display: flex;
        justify-content: center;
        align-items: center;
}
.first-container{
    position : inherit;
        width:400px;
        max-width:500px;
        height:500px;
        max-height: 600px;
}
.second{

}
    .third{
        all:unset;
        position: relative;
        width : 100%;
        display: flex;
        justify-content: center;
        align-items:center;
        overflow-x: hidden;
}
.second-container{
    height:500px;
    max-height:600px;
    width:100%;
    min-width:300px;
    position:inherit;
    word-wrap:break-word;

}
.third-container{
    height:500px;
    max-height:600px;
    width:400px;
    max-width:500px;
    position:inherit;

}

}
@media screen and (max-width:767px) {
    margin-top:5rem;
}

`,Jv=ee(_v)`
    all: unset;
    width: 100%;
    height: 100%;
    display: grid;
        margin-top:3.5rem;
    grid-template-columns : 50% 50%;
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;

    .first{
        position : relative;
        display: grid;
        place-items : center;
        overflow-x: hidden;
    }
    .second{
        position : relative;
        display: grid;
        place-items: center;
        overflow-x: hidden;

    }
    .container-first {
        min-width:400px;
        position: inherit;
        width : 70%;
        height : 500px;
    }
    .container-second {
        min-width:400px;
        position: inherit;
        width : 70%;
        height : 500px;
    }
@media screen and  ((width>=800px) and (width<950px)){
        height: 85%;

    .container-first{
            min-width :350px;
            height : 400px;
    }
    .container-second{
            min-width :350px;
            height : 400px;

    }
}
@media screen and  (max-width:799px){
    grid-template-columns:100%;
    height:80%;
    .second{
        display: none;
    }
    .first{
        overflow:hidden;
    }
    .container-first{
            min-width :350px;
            width:90%;
            top: 10%;
    }
}
@media screen and (max-width:767px) {
    margin-top:2rem;
}
`,qv=ee(Zv)`

    width: 100%;
    height: 100%;
    display: grid;
    margin-top:3.5rem;
    grid-template-columns: 32% 34% 34%;
.third,
.first {
    position: relative;
    display: grid;
    place-items:  center;
    overflow-x:  hidden;

    

}
.second {
    background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF);
    position: relative;
    display: grid;
    place-items:center;
    overflow-x: hidden;

}
.first-container, .second-container,.third-container{
    position: inherit;
    min-width:300px;
    width: 95%;
    height:500px
}
@media screen and ((width >=755px) and (width< 1130px)) {
    grid-template-columns: 50% 50%;
    .second{
        display: none;
    }
.first-container, .third-container{
    min-width:350px;
    width: 95%;
    height:500px
}
    
}
@media screen and ((width >=500px)and (width< 755px)) {
        height: 85%;

    grid-template-columns: 100%;
    .second, .first{
        display: none;
    }
.third-container{
    min-width:350px;
    width: 95%;
    height:500px
}
    
}
@media screen and ((width <500px)) {
        height: 85%;

    grid-template-columns: 100%;
    .second, .first{
        display: none;
    }
.third-container{
    min-width:350px;
    width: 95%;
    height:500px;
}
    
}
@media screen and (max-width:767px) {
    margin-top:5rem;
}
`,ey="/reactdeploy4/assets/img_5-R_nZnJim.png",ty="/reactdeploy4/assets/img_6-ej2dVkQl.png",ny=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx(ya,{image:ty})}),u.jsx("div",{className:"second",children:u.jsx(ya,{text:"Livraison gratuite à partir de 50$",style:{backgroundColor:"#787373"}})}),u.jsx("div",{className:"third",children:u.jsx(ya,{image:ey})})]}),ry=ee(ny)`
  --gradient: linear-gradient(
    45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871
  );
    position: absolute;
    width: 100%;
    top: 70vh;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 25rem 25rem 25rem;
    height: 20rem;
    overflow:hidden;
    gap:1rem;

    place-content: center;

            .first,.second,.third{
            font-size:2.5rem;


        }
    @media screen and ((width>=1100px)and (width<1270px)){
        grid-template-columns: 23rem 23rem 23rem;

        gap:0px;
        .first,.second,.third{
            scale: 0.9;
            font-size:2rem;

        }
        
    }
    @media screen and ((width>=845px)and (width<1100px)){
        grid-template-columns: 33% 33% 33%;
        justify-content: center;

        gap:0px;
        .first,.second,.third{
            scale: 0.78;
            min-width:19rem;
            font-size:1.7rem;


        }
        
    }
    @media screen and ((width>=655px)and (width<845px)){
        grid-template-columns: 32% 32% 32%;
        justify-content: center;
                    width:100%;

        .first,.second,.third{
            scale: 0.9;
            font-size:1.4rem;

            min-width:15rem;


        }
        
    }
    @media screen and ((width>=200px)and (width<655px)){
        grid-template-columns: 70% 70%;
        grid-template-rows:100%;
        justify-content: center;
        width:100%;
        gap:0px;

        .first{
            transform:translateX(20%);

        }
        .second{

            animation: animation2 10s infinite;
            animation-delay:4s;
        }
        .third{
            /* animation: animation3 12s infinite;
            animation-delay:6s; */
            display:none;

        }

        .first,.second,.third{
            font-size:1rem;
            min-width:15rem;


        }
        
    }
   
@keyframes animation1 {
    0%{
        z-index:1000;
    }
    10%{
        z-index:1000;
    }
    50%{
        z-index:1000;
        transition: z-index ease-out;
    }

    
}
@keyframes animation2 {
    0%{
        opacity:1;
    }

    50%{
        opacity:1;
        transform: translateX(-30%)
    }
    60%{
        opacity:1;    }

    
}
@keyframes animation3 {
    0%{
        z-index:1000;
    }
    75%{
        z-index:1000;
        opacity:0.8;
    }

    100%{
        z-index:-1000;
        opacity:1;
    }
    
}

`,$p=()=>{const[e,t]=L.useState(0),n=[u.jsx(qv,{}),u.jsx(Jv,{}),u.jsx(Xv,{})],r=()=>{t(i=>(i+1)%n.length)};return L.useEffect(()=>{const i=setInterval(()=>{r()},5e3);return()=>{clearInterval(i)}},[]),u.jsxs("div",{className:"section1-1",children:[u.jsx("div",{className:"box-section1-1",children:n[e]}),u.jsx(ry,{})]})},oo="/reactdeploy4/assets/png_1-psFfvH_j.png",Up="/reactdeploy4/assets/png_3-ilcu5yhJ.png",Bp="/reactdeploy4/assets/png_4-pi7uzOjc.png",iy="/reactdeploy4/assets/png_5-PB77ItoP.png",bp="/reactdeploy4/assets/png_6-IaEkgori.png",Ns="/reactdeploy4/assets/png_9-HkEXkKWn.png",ly="/reactdeploy4/assets/png_2-op38kcqj.png",oy="/reactdeploy4/assets/png_7-zH4XEwQ0.png",Pd="/reactdeploy4/assets/png_8-JODtVRir.png",wa=[{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:oo},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:ly},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:Up},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:Bp},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:iy},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:bp},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:oy},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:Pd},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:Ns},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:oo},{id:11,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:Ns},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:Pd}],xa=[{category:"accessoires",slug:"Les chargeurs et tous type d'accessoires que"},{category:"telephones",slug:"iphone, samsung et tous types de telephone que vous voudrez vous procurer"},{category:"montres",slug:"Gucci, louis vuitton, davinchi, toustes ses marques sont disponibles ice chez nous"}],ay=({className:e})=>{const t=wa.filter(i=>i.categorie=="accessoire"),n=wa.filter(i=>i.categorie=="montre"),r=wa.filter(i=>i.categorie=="telephone");return u.jsxs("div",{className:e,style:{backgroundColor:"#DADAD6"},children:[u.jsx("div",{className:"nav",children:u.jsxs("div",{children:[u.jsx("span",{children:u.jsx("a",{href:"#potable-link",children:"Portable"})}),u.jsx("span",{children:u.jsx("a",{href:"#montre-link",children:"Montre"})}),u.jsx("span",{children:u.jsx("a",{href:"#accessoitre-link",children:"Accessoire"})})]})}),u.jsxs("div",{className:"section2-1",children:[u.jsx(Sa,{id:"accessoitre-link",articles:t,categories:xa,category:"accessoires"}),u.jsx(Sa,{id:"montre-link",articles:n,categories:xa,category:"montres"}),u.jsx(Sa,{id:"potable-link",articles:r,categories:xa,category:"telephones"}),u.jsxs("div",{className:"box2-1 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:oo,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-2 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:oo,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-3 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Montres connectées"})}),u.jsx("div",{className:"img3 img",children:u.jsx("img",{src:Bp,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-4 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Balladeurs"})}),u.jsx("div",{className:"img4 img",children:u.jsx("img",{src:Up,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-5 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Cables chargeurs"})}),u.jsx("div",{className:"img5 img",children:u.jsx("img",{src:bp,width:"100%",alt:"",className:"w-100 h-100"})})]}),u.jsxs("div",{className:"box2-6 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Chargeurs"})}),u.jsx("div",{className:"img6 img",children:u.jsx("img",{src:Ns,alt:"",width:"100%",className:"h-100 "})})]})]}),u.jsx("div",{})]})},Sa=({id:e,articles:t,category:n,categories:r})=>{const i=t[0];console.log("-------",i);const[l,o]=L.useState({...i}),[a,s]=L.useState(i.id);console.log("****",l);function c(d){const h=t.filter(g=>g.id==d);o(h[0]),console.log("%%%%%",l),s(d),console.log("??????",a)}return u.jsxs("div",{style:{width:"100%"},className:"list-article",children:[u.jsxs("div",{className:"category",style:{},children:[u.jsx("div",{}),u.jsx("div",{children:n}),u.jsx("div",{id:e})]}),u.jsx("div",{className:"articles",children:t.map((d,h)=>u.jsx(sy,{...d},h))}),u.jsxs("div",{className:"slug",children:[u.jsx("div",{}),u.jsx("div",{children:r.filter(d=>d.category===n)[0].slug})]}),u.jsx("div",{className:"listImg",style:{overflowX:"hidden"},children:u.jsx("div",{children:t.map(d=>u.jsx("div",{className:`${a==d.id?"imgHover":""}`,style:{height:"100%",aspectRatio:"1/1",flexShrink:0},children:u.jsx("img",{src:d.image,className:"img-fluid",alt:"",style:{filter:"drop-shadow(10px 10px 5px 4px)",display:"block",height:"100%",width:"100%"},onClick:()=>c(d.id)},d.id)}))})}),u.jsx("div",{className:"articleBox",children:u.jsx(uy,{...l})}),u.jsx("div",{className:"square",children:t.filter((d,h)=>h<5).map(d=>u.jsxs("div",{className:"square-box",children:[u.jsx("img",{src:d.image,width:"100%",alt:"",className:"w-100"}),u.jsxs("div",{children:[u.jsx("span",{children:d.name}),u.jsxs("span",{children:[d.price," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d.pricePromo||u.jsxs("span",{className:"promo-1",children:[d.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})]}))})]})},sy=({name:e,image:t,price:n,pricePromo:r,longName:i})=>u.jsxs("div",{className:"singleArticle",children:[u.jsx("img",{src:t,alt:""}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsx("span",{children:i}),u.jsx("div",{className:"_button",children:"Ajouter au panier"})]}),uy=({name:e,image:t,price:n,pricePromo:r,longName:i})=>u.jsxs("div",{className:"singleArticle2",children:[u.jsx("img",{src:t,alt:""}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsxs("span",{children:[" ",i," "]}),u.jsx("div",{}),u.jsx("div",{className:"_button",children:u.jsx("a",{href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]}),cy=ee(ay)`
  a{
    color: inherit;
    text-decoration:none;
  }
  --gradient: linear-gradient(

    45deg,#845ec2,#d65db1,#ff6f91,#ff9671,#ffc75f,#f9f871
  );
position : relative;
.list-article{
  display: none;
}

.square{
  display:none;
}
.nav{
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:10000;
    position: sticky;
    top:11rem;
    margin-top:6rem;
    height:2.4rem;
    background-color:#F9FF00;
    opacity:1;
    margin-bottom:3px;
    border: solid 1px #E5E9EC;
  }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:20rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:20rem;
  }
  .img1{
    width:35rem;
    height:25rem;
  }
  .img2{
    width:15rem;
    height:15rem;
  }
  .img3{
    width:25rem;
    height:25rem;

  }
  .img4{
    width:25rem;
    height:25rem;
  }
  .img5{
    width:15rem;
    height:15rem;
  }
  .img6{
    width:25rem;
    height:20rem;
  }
.section2-1{

    margin-bottom: 1rem;
    height: 170vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 40vh 40vh 1fr  40vh;
    gap: 3px;
}
.textStyle{
  all:unset;
  width:100%;
  text-align:center;
    position:absolute;
    display:block;
    overflow:hidden;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-family:audrey;
    font-size:2.3rem;
    font-weight:bolder;
    color:#787373;
    text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
.box2-1 {
    grid-area: b1;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: b2;
    background-color: #E5E9EC;
}

.box2-3 {
    grid-area: b3;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: b4;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: b5;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: b6;
    background-color: #FDD771;
}
@media screen and  (width<=500px){
  /* rrrrrrrrrrrrrrrrrrrrrrrrr */
  .singleArticle2{
    width:100%;
    height:100%;
    display: flex;

    flex-direction: column;
  }
  .singleArticle2> span{
    display: block;
  }
  .singleArticle2>img{
    display:block;
     margin:0 auto;
     width:300px;
    height:300px
  }
    .singleArticle{
      position:relative;
      box-shadow: 7px 0 5px -5px grey, -7px 0 5px -5px grey;
    width:100%;
    height:100%;
    border-top: transparent;
    display: flex;
    flex-direction: column;
    border-radius:5px;
    padding:5px;
  }



    .singleArticle>span:nth-child(2){
      font-size:25px;
      font-family:_salsa !important;
      color: #302e2e;
      padding-bottom:.6rem;
  }
  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(2) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-20%);
    font-size:12px;

  }
  
  .singleArticle>span:nth-child(2)>.dollarSign,.singleArticle2>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-30%);
    

  }
  .promo-1{
    margin-left:10px;
    text-decoration:line-through black 2px;
    font-size:14px;
    font-weight:900;
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:900;
    color : black;

  }
    .singleArticle2>span:nth-child(2){
      font-size:25px;
      font-family:_salsa !important;
      color: black;
      text-align:center;
  }
    .singleArticle>span:nth-child(3){
      font-size:27px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:27px;

  }
    .singleArticle2>span:nth-child(3){
      font-size:25px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
  }
    .singleArticle>span:nth-child(4){
        font-family:Arial, Helvetica, sans-serif !important;
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: #353333;
      height:45px;
      overflow-y:scroll;
  }
    .singleArticle2>span:nth-child(4){
        font-family:Arial, Helvetica, sans-serif !important;
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: #353333;
      height:70px;
      text-align:center;
      overflow-y:scroll;
  }
  ._button{
    text-align:center;
    font-weight:bold;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:1rem 1rem;
  }
    ._button:active{
        background-color:#DADAD6 ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color: black;
    font-family: Arial, Helvetica, sans-serif !important;


  }


    .singleArticle>img{
    display:block;
     margin:.5rem auto;
     width:300px;
    height:300px;

  }
  
  .imgHover::before{
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:3px;
    background-color:rgba(0,0,0,0.4);
    

  }
  .imgHover{
    position: relative;
  }

  .articleSquare{

  }
  .articleBox{
    position:absolute;
    top : 55rem;
    left:0;
    height:35rem;
    width:100%;
    overflow:hidden;
    background-color:#DADAD6;
    background-size:400%;
    animation:backgroundPosition 20s infinite alternate;

  }
  @keyframes backgroundPosition {
    0%{
        background-position:left;
    }
    100%{
        background-position:right;
    }
    
  }
  .listImg{
    position: absolute;
    top:45rem;
    left:0;
    height:10rem;
    width:100%;
  }
  .listImg>div{
    display:flex;
    overflow-x:scroll;
    height:100%;
    width:100%;
  }
  .articles{
    display:flex;
    gap:0 .7rem;
    overflow-x:scroll;
    position: absolute;
    top:0;
    right:0;
    width:100%;
    padding-top:4rem;
    height:35rem;
    background-color:#DADAD6 ;

  }

  .slug{
    z-index:  3000;;
    position: absolute;
    left:0;
    top:35rem;
    overflow-x:hidden;
    height:10rem;
    width:100%;
    background-color:#DADAD6 ;
  }
  .slug>div:nth-child(1){
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:#DADAD6;
    border-radius: 0 0 50% 50%/0 0 100% 100%;

  }
  .slug>div:nth-child(2){
    position: absolute;
    width:100%;
    background-color: transparent;
    text-align: left;
    font-family:Arial, Helvetica, sans-serif !important;
    font-size:18px;
    padding:8px;
    color : black;
    top:0%;


  }
  .category{
    z-index:  3000;;

    height:4.1rem;
    width:100%;
    position: absolute;
    top:0;
    left:0;
    overflow-x:hidden;
    background-color:transparent;
  }
  .category>div:nth-child(1){

    background-color:grey;
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:#DADAD6;
    border-radius: 0 0 50% 50%/0 0 100% 100%;
  }
   .category>div:nth-child(3){
    position: absolute;
    height: 5rem;
    left:0;
    bottom: 100%;
    width:100%;
    z-index:-100;
   }
    .category>div:nth-child(2){
    position: absolute;
    font-size:22px;
    text-transform:uppercase;
    width:100%;
    background-color: transparent;
    text-align: center;
    font-family:arial !important;
    color : black;
    top:10%;
    left:0;
    background-color: #F9FF00;


  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div>span>*{
      font-size:16px;
      font-family: Arial, Helvetica, sans-serif !important;
      text-decoration:none;
      color: black;
    }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:2rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:2rem;
  }
  .section2-1{
  height: unset;
  width: 100%;
  display: grid;
  margin-top:0px;
  grid-template-columns:repeat(1,100%);
  grid-template-rows:130.4rem 130.4rem 130.4rem ;
  
  grid-template-areas:unset;
  gap:0px;
}
.nav{
  margin-top:4rem;

}
.section2-1+div{
  height:1rem;
  width:100%;
  background-color:#DADAD6 ;
}
.square{
  position: absolute;
  top:90rem;
  left:0;
  height:40rem;
  gap: 0px 2px;
  overflow:hidden;
  display:grid;
  grid-template-columns:50% 50%;
  grid-template-rows:50% 50%;
}
.square-box{
  position: relative;
  height:100%;
  width:100%;
  background-color:grey;
  overflow: hidden;
}
.square-box::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  font-family:Arial, Helvetica, sans-serif !important;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:#DADAD6 ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
@keyframes colorAnimation {
  0%{
    color: rgba(0,0,0,1);
  }
  50%{
    color:rgba(0,0,0,.3);
  }
}
.square-box>img{
  width:100%;
  height:70%;
  display: block;
}
.square-box>div>span:nth-child(1){

  font-weight:900;
  text-transform: uppercase;
  color : #353131;
  text-align:center;
}
.square-box>div>span:nth-child(2){

  color : #353131;
  text-align:center;
  font-family: _salsa !important;
    display:inline-block;

}
.square-box>div>div{
  color : #353131;
  font-family: Arial, Helvetica, sans-serif !important;
  font-size:14px;
    text-align:center;
    font-weight:bold;
    padding:0 5px;
    border: solid 1px grey;
    border-radius:30px/30px;

}
.square-box>div>span{
  display:block;
}
.square-box>div{
  display:flex;
  color:white;
  background-color:#DADAD6;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  width:100%;
  height:30%;
}
.textStyle{
  all: unset;
  display: none;
  }
  .flexDisplay,.flexDisplay::before,.flexDisplay::after{
    all: unset;
    display:block;

  }

.img{
  display:none;
}


.list-article{
  display:block;
  position:relative;
  height:100%;
  overflow-y:hidden;
  background-color:#DADAD6;
}
  .box2-1 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-2 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-3 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-4 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-5 {
    grid-area: unset;
    background-color: #DADAD6;
}

.box2-6 {
    grid-area: unset;
    background-color: #DADAD6;
}
}
@media screen and ((width>500px) and (width<=900px)) {
  .nav{
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .nav>div>span:nth-child(1){
    display:inline-block;
  }
  .nav>div>span:nth-child(2){
    display:inline-block;
    margin-left:8rem;
  }
  .nav>div>span:nth-child(3){
    display:inline-block;
    margin-left:8rem;
  }
  .box2-1 {
    grid-area: unset;
    background-color: #F9FF00;
}

.box2-2 {
    grid-area: unset;
    background-color: #bfccd3;
}

.box2-3 {
    grid-area: unset;
    background-color: #ffff9f;
}

.box2-4 {
    grid-area: unset;
    background-color: #E5E9EC;
}

.box2-5 {
    grid-area: unset;
    background-color: #ffe900;
}

.box2-6 {
    grid-area: unset;
    background-color: #FDD771;
}
.nav{
    width:100%;
    display:flex;
    margin-top:6rem;
    height:2.4rem;
  }
.textStyle{
    position:Absolute;
    font-family:audrey;
    font-size:1.3rem;
    font-weight:bolder;
    color:black;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

  }
    .section2-1{
    margin-bottom: 1rem;
    width: 100%;
    height:unset;
    grid-template-rows: unset;
    display: grid;
    grid-template-areas: unset;
    grid-template-columns: repeat(2, 50%);
    gap: 1px;
}
.flexDisplay{
  height:20rem;
  min-height:15rem;
}

  .img1{
    width:15rem;
    height:10rem;
  }
  .img2{
    width:8rem;
    height:8rem;
  }
  .img3{
    width:9rem;
    height:9rem;

  }
  .img4{
    width:10rem;
    height:10rem;
  }
  .img5{
    width:5rem;
    height:5rem;
  }
  .img6{
    width:15rem;
    height:10rem;
  }
}


@media screen and ((width<=1000px) and (width>900px)) {
    .section2-1{
    margin-bottom: 1rem;
    height: 130vh;
    width: 100%;
    display: grid;
    grid-template-areas: 'b1 b1 b2' 'b1 b1 b3' 'b4 b5 b3' 'b4 b6 b6';
    grid-template-columns: 30% 1fr 37%;
    grid-template-rows: 37vh 30vh 1fr  30vh;
    gap: 2px;
}
.textStyle{
  font-size:1.5rem;
  color : black;
  text-shadow:unset;
}
.nav{
}
  .img1{
    width:20rem;
    height:10rem;
  }
  .img2{
    width:11rem;
    height:11rem;
  }
  .img3{
    width:15rem;
    height:15rem;

  }
  .img4{
    width:15rem;
    height:15rem;
  }
  .img5{
    width:10rem;
    height:10rem;
  }
  .img6{
    width:18rem;
    height:13rem;
  }
    
}
`;ee($p)`
    position: relative;
    width: 100%;
    height: 100vh;


.first{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}
.second{
    position: absolute;
    width: 80%;
    left: 50%;
    top: 70vh;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: 25rem 25rem 25rem;
    justify-content: space-between;
    transform: translateX(-50%);
    height: 20rem;
}
`;const dy=()=>u.jsxs("div",{className:"home-screen",style:{backgroundColor:"#DADAD6"},children:[u.jsx($p,{}),u.jsx(cy,{})]}),fy="/reactdeploy4/assets/jpg_1-7lt4SJ85.jpg",py=({className:e})=>u.jsx("div",{className:e,children:u.jsxs("div",{className:"first",children:[u.jsx("div",{className:"img-content",children:u.jsx("img",{src:fy,width:"100%",alt:"",srcset:""})}),u.jsx("div",{className:"text",children:"Livraison où que vous soyez à Kinshasa"})]})}),hy=ee(py)`
width:100%;
height:40vh;
margin-top:3rem;
position: relative;
display: flex;
position: relative;
align-items:center;
justify-content:center;

margin-top:3.5rem;

.first{
    overflow: hidden;
    background-image: linear-gradient(to left, #F9FF00, #F9FF00, #FFFFFF, #FFFFFF);
    position: relative;
    width:100%;
    height:100%;
    min-width:4rem;
    min-height:4rem;
}
.img-content{
    height:200%;
    position: absolute;
    top:-55%;
    left:-5%;
    aspect-ratio:1/1;
    overflow: hidden;
}
.text{
    position : absolute;
    left : 50%;
    top : 50%;
    transform: translate(-50%, -50%);
        position:Absolute;
    font-family:audrey;
    font-size:2rem;
    font-weight:bolder;
    color:black;
    text-align:center;
}
@media screen and (max-width:767px) {
    margin-top:5rem;
}

`,my="/reactdeploy4/assets/jpg_2-1pXFpQc3.jpg",gy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("div",{className:"image"})}),De=ee(gy)`
width:calc(25%);

aspect-ratio : 1/1;
min-width: 10px;
overflow: hidden;
border: solid;
background-color: red;
.image{
    width : 100%;
    height:70%;
}

`,vy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"image",children:u.jsx("img",{src:my,alt:""})})}),u.jsxs("div",{className:"second",children:[u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{})]})]}),yy=ee(vy)`
width:100%;
min-height:100vh;
margin-bottom:1rem;
height:fit-content;
margin-top:5px;
border-top:solid 1px;
position: relative;
overflow:hidden;
.first{
    width :20%;
height :100vh;
    display: inline-block;
    position: absolute;
    top: 0;
    left : 0;
    overflow: hidden;
}
.image{
    position : absolute;
    left : -30%;
}
.second{
    position: absolute;
    top: 0;
    right:0;
    border: solid red;
    display:flex;
    flex-wrap:wrap;
    width:80%;
    height : fit-content;
}
`,wy=()=>u.jsxs("div",{children:[u.jsx(hy,{}),u.jsx(yy,{})]}),xy=()=>u.jsx("div",{children:u.jsx(wy,{})}),Sy=({className:e,children:t})=>u.jsx("div",{children:u.jsx("button",{className:`btn btn-outline-success  form-control ${e}`,type:"submit",children:t})}),Cy="data:image/svg+xml,%3csvg%20width='40'%20height='41'%20viewBox='0%200%2040%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_99_272)'%3e%3cpath%20d='M30.4126%2029.25H16.9126C16.0888%2029.2516%2015.2875%2028.9819%2014.6323%2028.4826C13.9771%2027.9833%2013.5045%2027.2822%2013.2876%2026.4875L10.0001%2014.575C9.94953%2014.3896%209.9424%2014.195%209.97926%2014.0064C10.0161%2013.8178%2010.096%2013.6402%2010.2126%2013.4875C10.3341%2013.3294%2010.4917%2013.2026%2010.6722%2013.1178C10.8527%2013.033%2011.0508%2012.9926%2011.2501%2013H35.0001C35.1837%2012.9997%2035.3652%2013.0399%2035.5315%2013.1177C35.6979%2013.1954%2035.8451%2013.3089%2035.9626%2013.45C36.0786%2013.5913%2036.1623%2013.7563%2036.2076%2013.9334C36.253%2014.1105%2036.259%2014.2954%2036.2251%2014.475L34.1001%2026.175C33.9422%2027.0379%2033.4867%2027.8182%2032.813%2028.38C32.1392%2028.9419%2031.2899%2029.2497%2030.4126%2029.25ZM12.9126%2015.5L15.7251%2025.825C15.7983%2026.0977%2015.9618%2026.3376%2016.1887%2026.5055C16.4157%2026.6735%2016.6929%2026.7597%2016.9751%2026.75H30.4751C30.7711%2026.7548%2031.0592%2026.6545%2031.2881%2026.4668C31.517%2026.2791%2031.6718%2026.0162%2031.7251%2025.725L33.5001%2015.5H12.9126Z'%20fill='black'/%3e%3cpath%20d='M11.25%2015.5C10.9694%2015.5104%2010.6936%2015.426%2010.4668%2015.2605C10.24%2015.0949%2010.0756%2014.8579%2010%2014.5875L8.0625%207.6625C7.98689%207.39213%207.82246%207.15508%207.5957%206.98954C7.36894%206.82401%207.09306%206.73963%206.8125%206.75H5C4.66848%206.75%204.35054%206.61831%204.11612%206.38389C3.8817%206.14947%203.75%205.83152%203.75%205.5C3.75%205.16848%203.8817%204.85054%204.11612%204.61612C4.35054%204.3817%204.66848%204.25%205%204.25H6.8625C7.67925%204.24885%208.47404%204.51438%209.12608%205.00623C9.77812%205.49808%2010.2518%206.18936%2010.475%206.975L12.5%2013.9125C12.5508%2014.0766%2012.5672%2014.2495%2012.5482%2014.4203C12.5293%2014.5911%2012.4753%2014.7561%2012.3896%2014.9051C12.304%2015.054%2012.1886%2015.1838%2012.0506%2015.2861C11.9125%2015.3885%2011.7549%2015.4613%2011.5875%2015.5C11.4757%2015.5182%2011.3618%2015.5182%2011.25%2015.5Z'%20fill='black'/%3e%3cpath%20d='M20%2036.75C19.5055%2036.75%2019.0222%2036.6034%2018.6111%2036.3287C18.2%2036.054%2017.8795%2035.6635%2017.6903%2035.2067C17.5011%2034.7499%2017.4516%2034.2472%2017.548%2033.7623C17.6445%2033.2773%2017.8826%2032.8319%2018.2322%2032.4822C18.5819%2032.1326%2019.0273%2031.8945%2019.5123%2031.798C19.9972%2031.7016%2020.4999%2031.7511%2020.9567%2031.9403C21.4135%2032.1295%2021.804%2032.45%2022.0787%2032.8611C22.3534%2033.2722%2022.5%2033.7555%2022.5%2034.25C22.5%2034.913%2022.2366%2035.5489%2021.7678%2036.0178C21.2989%2036.4866%2020.663%2036.75%2020%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2036.75C27.0055%2036.75%2026.5222%2036.6034%2026.1111%2036.3287C25.7%2036.054%2025.3795%2035.6635%2025.1903%2035.2067C25.0011%2034.7499%2024.9516%2034.2472%2025.048%2033.7623C25.1445%2033.2773%2025.3826%2032.8319%2025.7322%2032.4822C26.0819%2032.1326%2026.5273%2031.8945%2027.0123%2031.798C27.4972%2031.7016%2027.9999%2031.7511%2028.4567%2031.9403C28.9135%2032.1295%2029.304%2032.45%2029.5787%2032.8611C29.8534%2033.2722%2030%2033.7555%2030%2034.25C30%2034.913%2029.7366%2035.5489%2029.2678%2036.0178C28.7989%2036.4866%2028.163%2036.75%2027.5%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2021.75H20C19.6685%2021.75%2019.3505%2021.6183%2019.1161%2021.3839C18.8817%2021.1495%2018.75%2020.8315%2018.75%2020.5C18.75%2020.1685%2018.8817%2019.8505%2019.1161%2019.6161C19.3505%2019.3817%2019.6685%2019.25%2020%2019.25H27.5C27.8315%2019.25%2028.1495%2019.3817%2028.3839%2019.6161C28.6183%2019.8505%2028.75%2020.1685%2028.75%2020.5C28.75%2020.8315%2028.6183%2021.1495%2028.3839%2021.3839C28.1495%2021.6183%2027.8315%2021.75%2027.5%2021.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_99_272'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",jy=({className:e})=>u.jsxs("div",{className:` ${e}`,children:[u.jsx("img",{src:Cy,alt:"",className:"w-100 h-100"}),u.jsx("div",{className:"counter",children:"02"})]}),ky="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjM1cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzVweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IldoYXRzYXBwIj48cGF0aCBkPSJNMTYuMDA0LDMxYy0yLjg2OCwwLTUuNjQ2LTAuODExLTguMDUtMi4zNDdsLTUuMzQ4LDEuNzA5Yy0wLjE3OSwwLjA1Ny0wLjM3NiwwLjAwOS0wLjUwOS0wLjEyNSAgIGMtMC4xMzItMC4xMzQtMC4xNzgtMC4zMzItMC4xMTctMC41MWwxLjcyNS01LjE0NkMxLjkzNSwyMi4wNjEsMSwxOS4xLDEsMTZjMC00LjA3NiwxLjYxMi03Ljg5MSw0LjUzOS0xMC43NDIgICBDNS43MzYsNS4wNjYsNi4wNTMsNS4wNyw2LjI0Niw1LjI2N2MwLjE5MiwwLjE5OCwwLjE4OCwwLjUxNS0wLjAxLDAuNzA3QzMuNTA1LDguNjM2LDIsMTIuMTk2LDIsMTYgICBjMCwyLjk3NCwwLjkyMiw1LjgxMSwyLjY2NSw4LjIwNGMwLjA5NSwwLjEzMSwwLjEyMSwwLjMsMC4wNjksMC40NTRsLTEuNDkyLDQuNDUybDQuNjMzLTEuNDgxICAgYzAuMTQ0LTAuMDQ3LDAuMzAyLTAuMDI0LDAuNDI5LDAuMDU5QzEwLjU4OSwyOS4yLDEzLjI1MiwzMCwxNi4wMDQsMzBDMjMuNzIyLDMwLDMwLDIzLjcyLDMwLDE2YzAtNy43MTktNi4yNzgtMTQtMTMuOTk2LTE0ICAgYy0wLjAwMSwwLTAuMDAyLDAtMC4wMDMsMGMtMi4xNjcsMC00LjIzOCwwLjQ4MS02LjE2NCwxLjQyOUM5LjU4OSwzLjU1LDkuMjksMy40NDksOS4xNjgsMy4yMDJTOS4xNDcsMi42NTQsOS4zOTYsMi41MzIgICBDMTEuNDYsMS41MTYsMTMuNjgyLDEsMTUuOTk2LDFDMjQuMjcyLDEsMzEsNy43MjksMzEsMTZTMjQuMjcyLDMxLDE2LjAwNCwzMXoiIGZpbGw9IiMwMDgwMDAiLz48Zz48cGF0aCBkPSJNMjAuNjAyLDI0LjQ5M0wyMC42MDIsMjQuNDkzYy0xLjAxMSwwLTIuNDIyLTAuMzktNC40MzktMS4yMjZjLTIuNjMzLTEuMDktNS4yNDMtMy4zNzQtNy4zNS02LjQyOSAgICBsLTAuMDc1LTAuMTA3Yy0wLjY5Ni0wLjk1MS0xLjgyMy0yLjc3My0xLjgyMy00LjY3NWMwLTIuMjI5LDEuMTE1LTMuMzYsMS41OTItMy44NDNjMC40NDktMC40NjEsMS4xMi0wLjcwNiwxLjg3NC0wLjcwNiAgICBjMC4xOSwwLDAuMzYsMC4wMDksMC41MTUsMC4wMThjMC42MzUsMC4wMjUsMS4wMDMsMC4xODUsMS4zNTMsMS4wMjJsMC4zNjMsMC44OGMwLjM4NCwwLjkzMSwwLjg1NywyLjA4LDAuOTMxLDIuMjM1ICAgIGMwLjA4MiwwLjE2OSwwLjMzMSwwLjY4OCwwLjA1NCwxLjIyOGMtMC4xNDgsMC4zMTYtMC4yOTMsMC40ODMtMC40OTIsMC43MTNjLTAuMTQsMC4xNjEtMC4yMzMsMC4yNjEtMC4zMjgsMC4zNjEgICAgYy0wLjExLDAuMTE4LTAuMjIyLDAuMjM0LTAuMzM0LDAuMzc1Yy0wLjE5MywwLjIyNi0wLjE5MywwLjIyNi0wLjEyOCwwLjMzOWMwLjM3LDAuNjI1LDEuMTU3LDEuODI1LDIuMjUzLDIuOCAgICBjMS40MjIsMS4yNjUsMi41NzEsMS43MywzLjEyMywxLjk1NGwwLjEzNywwLjA1NmMwLjE0NSwwLjA2LDAuMzI4LDAuMTAzLDAuNDY1LTAuMDQyYzAuMjQ4LTAuMjY3LDAuNTYyLTAuNzA2LDAuODk0LTEuMTcxICAgIGwwLjE5OS0wLjI3OWMwLjM0OS0wLjQ5MywwLjc3OS0wLjU5NywxLjA3OC0wLjU5N2MwLjE3NSwwLDAuMzU3LDAuMDM1LDAuNTQzLDAuMTA1YzAuNDY1LDAuMTYyLDIuOTEyLDEuMzgxLDIuOTM3LDEuMzkzICAgIGwwLjIzNSwwLjExNWMwLjM1LDAuMTY4LDAuNjI2LDAuMzAxLDAuNzg0LDAuNTc5YzAuMjI5LDAuMzk4LDAuMTM5LDEuNDQyLTAuMjA5LDIuNDI3Yy0wLjQxNywxLjE3OS0xLjk2NywyLjEtMy4yMTMsMi4zNjggICAgQzIxLjI5MywyNC40MzgsMjAuOTk4LDI0LjQ5MywyMC42MDIsMjQuNDkzeiBNMTAuMzgsOC41MDdjLTAuNDcyLDAtMC45MDIsMC4xNDItMS4xMjQsMC4zNjljLTAuNDYxLDAuNDY4LTEuMzQyLDEuMzYxLTEuMzQyLDMuMTggICAgYzAsMS4xODEsMC41ODUsMi42NTgsMS42MDUsNC4wNTFsMC4xMTYsMC4xNjVjMS45OTgsMi44OTgsNC40NTIsNS4wNTUsNi45MDksNi4wNzJjMS44OTMsMC43ODUsMy4xODIsMS4xNSw0LjA1NywxLjE1bDAsMCAgICBjMC4zLDAsMC41MjMtMC4wNDIsMC43MjctMC4wODVjMC45NzMtMC4yMSwyLjE5OC0wLjkyOSwyLjQ3OS0xLjcyNGMwLjMwNC0wLjg1NywwLjI5OC0xLjUxNiwwLjI2Mi0xLjY0NyAgICBjLTAuMDAyLDAuMDMxLTAuMTgyLTAuMDU0LTAuMzI3LTAuMTI0bC0wLjI0OS0wLjEyMmMtMC43MDEtMC4zNTEtMi41MTMtMS4yMzYtMi44My0xLjM0N2MtMC4wODQtMC4wMzItMC4xNDgtMC4wNDUtMC4yMDItMC4wNDUgICAgYy0wLjA0NSwwLTAuMTM4LDAtMC4yNjQsMC4xNzhsLTAuMiwwLjI4Yy0wLjM1MSwwLjQ5Mi0wLjY4MiwwLjk1Ni0wLjk3NiwxLjI3MmMtMC4zNzcsMC40MDMtMS4wMjQsMC41MTUtMS41ODEsMC4yODMgICAgbC0wLjEyNy0wLjA1MmMtMC41NTctMC4yMjUtMS44NjItMC43NTMtMy40MTMtMi4xMzNjLTEuMTk2LTEuMDY2LTIuMDQ5LTIuMzYzLTIuNDUxLTMuMDQyYy0wLjQyMy0wLjcyOSwwLjAwNi0xLjIzMSwwLjIxMi0xLjQ3MiAgICBjMC4xMzEtMC4xNjMsMC4yNTktMC4yOTgsMC4zODctMC40MzRjMC4wODQtMC4wODksMC4xNjgtMC4xNzgsMC4yNTQtMC4yNzhjMC4yMjUtMC4yNTksMC4yOTktMC4zNDUsMC4zOTYtMC41NTIgICAgYzAuMDI5LTAuMDU3LDAuMDQ1LTAuMTM4LTAuMDU5LTAuMzU0Yy0wLjA3Ni0wLjE2LTAuNTYyLTEuMzM0LTAuOTUzLTIuMjg2bC0wLjM2Mi0wLjg3N2MtMC4xNjUtMC4zOTYtMC4xNjUtMC4zOTYtMC40NzktMC40MDggICAgQzEwLjcwMSw4LjUxNSwxMC41NDksOC41MDcsMTAuMzgsOC41MDd6IiBmaWxsPSIjMDA4MDAwIi8+PC9nPjxnPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQiIGZpbGw9IiMwMDgwMDAiIHI9IjAuNSIvPjwvZz48L2c+PC9zdmc+";var Hp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},zd=Xe.createContext&&Xe.createContext(Hp),yn=function(){return yn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},yn.apply(this,arguments)},My=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Qp(e){return e&&e.map(function(t,n){return Xe.createElement(t.tag,yn({key:n},t.attr),Qp(t.child))})}function Ey(e){return function(t){return Xe.createElement(Ny,yn({attr:yn({},e.attr)},t),Qp(e.child))}}function Ny(e){var t=function(n){var r=e.attr,i=e.size,l=e.title,o=My(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Xe.createElement("svg",yn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:s,style:yn(yn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&Xe.createElement("title",null,l),e.children)};return zd!==void 0?Xe.createElement(zd.Consumer,null,function(n){return t(n)}):t(Hp)}function Wp(e){return Ey({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const Ly=({className:e})=>{const t={border:"solid 0.5px purple"};return u.jsxs("div",{className:`input-group ${e}`,children:[u.jsx("div",{className:"input-group-prepend",children:u.jsx("button",{className:"btn btn-outline-secondary dropdown-toggle",style:t,type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Catégorie"})}),u.jsx("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button"}),u.jsx("div",{class:"input-group-append",children:u.jsxs("button",{class:"btn btn-outline-secondary ",type:"button",style:t,children:["   ",u.jsx(Wp,{size:24,color:"#333"})]})})]})},Dy=ee(Ly)`
    width:80%;
    min-width:25rem;
    @media screen and (max-width: 767px){
        display:none;
        
    }
`,Ty=({className:e})=>u.jsx("div",{className:e,children:u.jsx(Wp,{})}),_y=ee(Ty)`
        display:none;

    @media screen and (max-width: 767px) {
        display:block;
        width:20px;
        color:#333;

        transform:translateY(0%);
        
    }
`,Py=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:ky,className:"w-100",alt:""})}),zy=ee(Py)`

    width:35px;
    height:35px;
    min-height:15px;
    min-width:15px;
@media screen and (max-width:800px) {
    height:25px;
    width:25px;
        
    }

`,Ry=({className:e})=>{const[t,n]=L.useState(!0);function r(){n(i=>!i),console.log(t)}return u.jsx("div",{className:e,children:u.jsxs("div",{className:t&&"menu-down",onClick:()=>r(),children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("div",{})]})})},Ay=ee(Ry)`
        display:none;


        @media screen and (max-width: 767px) {
        width:22px;
        height:22px;
    
        &>div{
            height:100%;
            width:100%;
        }
        &>div>div{
            background-color:red;
            position: absolute;
            top:66px;
            right:0;
            width:50px;
            height:300%;

        }
        span{
            transition: all .2s;
            overflow:hidden;

        }
        span:nth-child(1),span:nth-child(3){
            display: block;
            height:2px;
            margin-top:3px;
            width:100%;
            background-color: black;   

        }

        span:nth-child(2){
            display: block;
            height:2px;
            margin-top:3px;
            width:70%;
            background-color: black;   
            transform: translateX(30%);
        }
        .menu-down>span:nth-child(2){
            display:none;
        }
        .menu-down>span:nth-child(1){
            width:80%;
            transform: translateX(20%) translateY(5px) rotate(45deg) ;


        }
        .menu-down>span:nth-child(3){
            width:80%;
            transform:  translateX(20%) translateY(0px) rotate(-45deg);
        }
        .menu-down{
            width:100%;
            height:100%;
            position: relative;
        }


        display:block;
        transform:translateY(18%);

        
    }
`,Iy=ee(jy)`
    width:40px;
    height:40px;
    min-height:15px;
    min-width:15px;
    position:relative;
    transform : translateY(0%);
.counter{
    position: absolute;
    top:-7px;
    right: 8px;
    color: black;
    font-weight: bold;
    color: purple;
}

@media screen and (max-width:800px) {
    transform : translateY(10%);

    height:25px;
    width:25px;
    .counter{
    position: absolute;
    top:-7px;
    font-size:12px;
    right: 4px;
    color: black;
    font-weight: bold;
    color: purple;
}

        
    }
`,Rd={Home:"/",Products:"/produits"},Oy=({className:e})=>u.jsx("div",{children:u.jsx(u.Fragment,{children:u.jsx("nav",{className:`navbar-css ${e}`,children:u.jsxs("div",{className:" navbar  row container-fluid-css-2",children:[u.jsxs("div",{className:"first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between",children:[u.jsxs(md,{to:Rd.Home,className:"link-css title-css navbar-brand  d-block",children:[u.jsx("img",{src:"",width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"ChezArdi"]}),u.jsx(Dy,{}),u.jsxs("div",{className:"d-flex flex-row flex-row justify-content-between",children:[u.jsx(_y,{}),u.jsx("div",{style:{marginLeft:"12px"}}),u.jsx(Ay,{})]})]}),u.jsx("div",{className:"second-col  col-md-4 col-lg-3 col-12 ",children:u.jsxs("ul",{className:"navbar-nav  list-css d-flex flex-row align-items-center justify-content-between",children:[u.jsx(md,{to:Rd.Products,className:"link-css nav-item d-block",children:"Produits"}),u.jsxs("li",{className:"nav-item d-block d-flex flex-row",children:[u.jsx(zy,{}),u.jsx("div",{style:{marginLeft:"7px"}}),u.jsx(Iy,{})]})]})})]})})})}),Fy=ee(Sy)`
width:100%;
@media screen and (max-width: 500px) {
    
}
`,$y=()=>u.jsx("div",{className:"",style:{backgroundColor:"black"},children:u.jsx("div",{class:"",style:{backgroundColor:"black"},children:u.jsxs("footer",{style:{backgroundColor:"grey"},className:"text-center text-lg-start",children:[u.jsx("div",{className:"container p-4",children:u.jsxs("div",{className:"row",children:[u.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Nous contacter"}),u.jsxs("ul",{className:"list-unstyled mb-4",children:[u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"ardi@gmail.com"})}),u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"ardi2@gmail.com"})})]})]}),u.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Information"}),u.jsxs("ul",{className:"list-unstyled",children:[u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"FAQs"})}),u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"Qui sommes nous ?"})}),u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"Politique de confidentialité"})})]})]}),u.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Services"}),u.jsxs("ul",{className:"list-unstyled",children:[u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"Mode de paiement"})}),u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"Signaler un produit"})}),u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"Comment acheter chez nous ?"})}),u.jsx("li",{children:u.jsx("a",{href:"#!",className:"text-white",children:"Retour et remboursement"})})]})]}),u.jsxs("div",{className:"col-lg-3 col-md-6 mb-4 mb-lg-0",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"S'inscrire à notre newsletter"}),u.jsxs("div",{className:"form-outline form-white mb-4",children:[u.jsx("input",{type:"email",id:"form5Example2",className:"form-control"}),u.jsx("label",{className:"form-label text-white",for:"form5Example2",children:"Adresse mail"}),u.jsx(Fy,{children:" sqd"})]})]})]})}),u.jsxs("div",{class:"text-center p-3 border-top border-black text-white",children:["© 2024 Copyright:",u.jsx("a",{class:"text-white",href:"#",children:"patrick mulu"})]})]})})}),Uy=ee(Oy)`
    div .first-col{
        padding-left:1.5rem;
    }
    div .second-col{
        padding-left:1.5rem;
    }
`,By=()=>u.jsx(u.Fragment,{children:u.jsxs("div",{className:"theApp",children:[u.jsx(Uy,{}),u.jsx("div",{className:"container-fluid-css",children:u.jsx($m,{})}),u.jsx($y,{})]})}),by=()=>u.jsx("div",{children:u.jsx("p",{children:"This is error page"})}),Hy=Vm(ws(u.jsxs(li,{path:"/",element:u.jsx(By,{}),children:[u.jsx(li,{index:!0,element:u.jsx(dy,{})}),u.jsx(li,{path:"/produits",element:u.jsx(xy,{})}),u.jsx(li,{path:"*",element:u.jsx(by,{})})]})));Ca.createRoot(document.getElementById("root")).render(u.jsx(Xe.StrictMode,{children:u.jsx(tg,{router:Hy})}));
