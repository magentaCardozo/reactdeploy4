function Wd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qd={exports:{}},Nl={},Yd={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xi=Symbol.for("react.element"),ch=Symbol.for("react.portal"),dh=Symbol.for("react.fragment"),fh=Symbol.for("react.strict_mode"),ph=Symbol.for("react.profiler"),hh=Symbol.for("react.provider"),mh=Symbol.for("react.context"),gh=Symbol.for("react.forward_ref"),vh=Symbol.for("react.suspense"),yh=Symbol.for("react.memo"),xh=Symbol.for("react.lazy"),tc=Symbol.iterator;function wh(e){return e===null||typeof e!="object"?null:(e=tc&&e[tc]||e["@@iterator"],typeof e=="function"?e:null)}var Gd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kd=Object.assign,Zd={};function Vr(e,t,n){this.props=e,this.context=t,this.refs=Zd,this.updater=n||Gd}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Xd(){}Xd.prototype=Vr.prototype;function $s(e,t,n){this.props=e,this.context=t,this.refs=Zd,this.updater=n||Gd}var Us=$s.prototype=new Xd;Us.constructor=$s;Kd(Us,Vr.prototype);Us.isPureReactComponent=!0;var nc=Array.isArray,qd=Object.prototype.hasOwnProperty,bs={current:null},Jd={key:!0,ref:!0,__self:!0,__source:!0};function ef(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)qd.call(t,r)&&!Jd.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xi,type:e,key:o,ref:l,props:i,_owner:bs.current}}function Sh(e,t){return{$$typeof:Xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xi}function Ch(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var rc=/\/+/g;function ea(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ch(""+e.key):t.toString(36)}function zo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Xi:case ch:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+ea(l,0):r,nc(i)?(n="",e!=null&&(n=e.replace(rc,"$&/")+"/"),zo(i,t,n,"",function(c){return c})):i!=null&&(Bs(i)&&(i=Sh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(rc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",nc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+ea(o,a);l+=zo(o,t,n,s,i)}else if(s=wh(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+ea(o,a++),l+=zo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function uo(e,t,n){if(e==null)return e;var r=[],i=0;return zo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function jh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Io={transition:null},Nh={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Io,ReactCurrentOwner:bs};X.Children={map:uo,forEach:function(e,t,n){uo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return uo(e,function(){t++}),t},toArray:function(e){return uo(e,function(t){return t})||[]},only:function(e){if(!Bs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Vr;X.Fragment=dh;X.Profiler=ph;X.PureComponent=$s;X.StrictMode=fh;X.Suspense=vh;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nh;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=bs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)qd.call(t,s)&&!Jd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Xi,type:e.type,key:i,ref:o,props:r,_owner:l}};X.createContext=function(e){return e={$$typeof:mh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hh,_context:e},e.Consumer=e};X.createElement=ef;X.createFactory=function(e){var t=ef.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:gh,render:e}};X.isValidElement=Bs;X.lazy=function(e){return{$$typeof:xh,_payload:{_status:-1,_result:e},_init:jh}};X.memo=function(e,t){return{$$typeof:yh,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Io.transition;Io.transition={};try{e()}finally{Io.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return Ze.current.useCallback(e,t)};X.useContext=function(e){return Ze.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ze.current.useEffect(e,t)};X.useId=function(){return Ze.current.useId()};X.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ze.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};X.useRef=function(e){return Ze.current.useRef(e)};X.useState=function(e){return Ze.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ze.current.useTransition()};X.version="18.2.0";Yd.exports=X;var E=Yd.exports;const Ge=Vd(E),kh=Wd({__proto__:null,default:Ge},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh=E,Eh=Symbol.for("react.element"),Lh=Symbol.for("react.fragment"),Dh=Object.prototype.hasOwnProperty,Ph=Mh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Th={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Dh.call(t,r)&&!Th.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Eh,type:e,key:o,ref:l,props:i,_owner:Ph.current}}Nl.Fragment=Lh;Nl.jsx=tf;Nl.jsxs=tf;Qd.exports=Nl;var u=Qd.exports,_a={},nf={exports:{}},ht={},rf={exports:{}},of={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,O){var B=z.length;z.push(O);e:for(;0<B;){var Z=B-1>>>1,ee=z[Z];if(0<i(ee,O))z[Z]=O,z[B]=ee,B=Z;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var O=z[0],B=z.pop();if(B!==O){z[0]=B;e:for(var Z=0,ee=z.length,at=ee>>>1;Z<at;){var je=2*(Z+1)-1,Be=z[je],Ne=je+1,st=z[Ne];if(0>i(Be,B))Ne<ee&&0>i(st,Be)?(z[Z]=st,z[Ne]=B,Z=Ne):(z[Z]=Be,z[je]=B,Z=je);else if(Ne<ee&&0>i(st,B))z[Z]=st,z[Ne]=B,Z=Ne;else break e}}return O}function i(z,O){var B=z.sortIndex-O.sortIndex;return B!==0?B:z.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],d=1,h=null,m=3,x=!1,S=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=z)r(c),O.sortIndex=O.expirationTime,t(s,O);else break;O=n(c)}}function N(z){if(w=!1,g(z),!S)if(n(s)!==null)S=!0,_t(L);else{var O=n(c);O!==null&&oe(N,O.startTime-z)}}function L(z,O){S=!1,w&&(w=!1,p(P),P=-1),x=!0;var B=m;try{for(g(O),h=n(s);h!==null&&(!(h.expirationTime>O)||z&&!J());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,m=h.priorityLevel;var ee=Z(h.expirationTime<=O);O=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(s)&&r(s),g(O)}else r(s);h=n(s)}if(h!==null)var at=!0;else{var je=n(c);je!==null&&oe(N,je.startTime-O),at=!1}return at}finally{h=null,m=B,x=!1}}var v=!1,j=null,P=-1,_=5,b=-1;function J(){return!(e.unstable_now()-b<_)}function Ce(){if(j!==null){var z=e.unstable_now();b=z;var O=!0;try{O=j(!0,z)}finally{O?ye():(v=!1,j=null)}}else v=!1}var ye;if(typeof f=="function")ye=function(){f(Ce)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,sn=qe.port2;qe.port1.onmessage=Ce,ye=function(){sn.postMessage(null)}}else ye=function(){k(Ce,0)};function _t(z){j=z,v||(v=!0,ye())}function oe(z,O){P=k(function(){z(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,_t(L))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var B=m;m=O;try{return z()}finally{m=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=m;m=z;try{return O()}finally{m=B}},e.unstable_scheduleCallback=function(z,O,B){var Z=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?Z+B:Z):B=Z,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=B+ee,z={id:d++,callback:O,priorityLevel:z,startTime:B,expirationTime:ee,sortIndex:-1},B>Z?(z.sortIndex=B,t(c,z),n(s)===null&&z===n(c)&&(w?(p(P),P=-1):w=!0,oe(N,B-Z))):(z.sortIndex=ee,t(s,z),S||x||(S=!0,_t(L))),z},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(z){var O=m;return function(){var B=m;m=O;try{return z.apply(this,arguments)}finally{m=B}}}})(of);rf.exports=of;var zh=rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=E,pt=zh;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var af=new Set,Pi={};function rr(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(Pi[e]=t,e=0;e<t.length;e++)af.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,Ih=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},oc={};function _h(e){return Aa.call(oc,e)?!0:Aa.call(ic,e)?!1:Ih.test(e)?oc[e]=!0:(ic[e]=!0,!1)}function Ah(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rh(e,t,n,r){if(t===null||typeof t>"u"||Ah(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){be[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];be[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){be[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){be[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){be[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){be[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){be[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){be[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){be[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hs,Ws);be[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hs,Ws);be[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hs,Ws);be[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});be.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vs(e,t,n,r){var i=be.hasOwnProperty(t)?be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rh(t,n,i,r)&&(n=null),r||i===null?_h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Qs=Symbol.for("react.strict_mode"),Ra=Symbol.for("react.profiler"),sf=Symbol.for("react.provider"),uf=Symbol.for("react.context"),Ys=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Gs=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),cf=Symbol.for("react.offscreen"),lc=Symbol.iterator;function Jr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,ta;function fi(e){if(ta===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ta=t&&t[1]||""}return`
`+ta+e}var na=!1;function ra(e,t){if(!e||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{na=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?fi(e):""}function Oh(e){switch(e.tag){case 5:return fi(e.type);case 16:return fi("Lazy");case 13:return fi("Suspense");case 19:return fi("SuspenseList");case 0:case 2:case 15:return e=ra(e.type,!1),e;case 11:return e=ra(e.type.render,!1),e;case 1:return e=ra(e.type,!0),e;default:return""}}function $a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case dr:return"Portal";case Ra:return"Profiler";case Qs:return"StrictMode";case Oa:return"Suspense";case Fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case uf:return(e.displayName||"Context")+".Consumer";case sf:return(e._context.displayName||"Context")+".Provider";case Ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gs:return t=e.displayName||null,t!==null?t:$a(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return $a(e(t))}catch{}}return null}function Fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $a(t);case 8:return t===Qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function df(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $h(e){var t=df(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=$h(e))}function ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=df(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ac(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function pf(e,t){t=t.checked,t!=null&&Vs(e,"checked",t,!1)}function ba(e,t){pf(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ba(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ba(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ba(e,t,n){(t!=="number"||Ko(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var pi=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function uc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(pi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function hf(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function mf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?mf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,gf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uh=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(e){Uh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xi[t]=xi[e]})});function vf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xi.hasOwnProperty(e)&&xi[e]?(""+t).trim():t+"px"}function yf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bh=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Va(e,t){if(t){if(bh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Qa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ya=null;function Ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ga=null,Lr=null,Dr=null;function dc(e){if(e=eo(e)){if(typeof Ga!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Dl(t),Ga(e.stateNode,e.type,t))}}function xf(e){Lr?Dr?Dr.push(e):Dr=[e]:Lr=e}function wf(){if(Lr){var e=Lr,t=Dr;if(Dr=Lr=null,dc(e),t)for(e=0;e<t.length;e++)dc(t[e])}}function Sf(e,t){return e(t)}function Cf(){}var ia=!1;function jf(e,t,n){if(ia)return e(t,n);ia=!0;try{return Sf(e,t,n)}finally{ia=!1,(Lr!==null||Dr!==null)&&(Cf(),wf())}}function zi(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Ka=!1;if(Jt)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){Ka=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{Ka=!1}function Bh(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var wi=!1,Zo=null,Xo=!1,Za=null,Hh={onError:function(e){wi=!0,Zo=e}};function Wh(e,t,n,r,i,o,l,a,s){wi=!1,Zo=null,Bh.apply(Hh,arguments)}function Vh(e,t,n,r,i,o,l,a,s){if(Wh.apply(this,arguments),wi){if(wi){var c=Zo;wi=!1,Zo=null}else throw Error(D(198));Xo||(Xo=!0,Za=c)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fc(e){if(ir(e)!==e)throw Error(D(188))}function Qh(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return fc(i),e;if(o===r)return fc(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function kf(e){return e=Qh(e),e!==null?Mf(e):null}function Mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mf(e);if(t!==null)return t;e=e.sibling}return null}var Ef=pt.unstable_scheduleCallback,pc=pt.unstable_cancelCallback,Yh=pt.unstable_shouldYield,Gh=pt.unstable_requestPaint,Me=pt.unstable_now,Kh=pt.unstable_getCurrentPriorityLevel,Zs=pt.unstable_ImmediatePriority,Lf=pt.unstable_UserBlockingPriority,qo=pt.unstable_NormalPriority,Zh=pt.unstable_LowPriority,Df=pt.unstable_IdlePriority,kl=null,Bt=null;function Xh(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(kl,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:e1,qh=Math.log,Jh=Math.LN2;function e1(e){return e>>>=0,e===0?32:31-(qh(e)/Jh|0)|0}var ho=64,mo=4194304;function hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=hi(a):(o&=l,o!==0&&(r=hi(o)))}else l=n&~i,l!==0?r=hi(l):o!==0&&(r=hi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function t1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Pt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=t1(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pf(){var e=ho;return ho<<=1,!(ho&4194240)&&(ho=64),e}function oa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function r1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ie=0;function Tf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var zf,qs,If,_f,Af,qa=!1,go=[],Sn=null,Cn=null,jn=null,Ii=new Map,_i=new Map,vn=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hc(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Ii.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(t.pointerId)}}function ti(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=eo(t),t!==null&&qs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function o1(e,t,n,r,i){switch(t){case"focusin":return Sn=ti(Sn,e,t,n,r,i),!0;case"dragenter":return Cn=ti(Cn,e,t,n,r,i),!0;case"mouseover":return jn=ti(jn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ii.set(o,ti(Ii.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,_i.set(o,ti(_i.get(o)||null,e,t,n,r,i)),!0}return!1}function Rf(e){var t=Un(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Nf(n),t!==null){e.blockedOn=t,Af(e.priority,function(){If(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ja(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ya=r,n.target.dispatchEvent(r),Ya=null}else return t=eo(n),t!==null&&qs(t),e.blockedOn=n,!1;t.shift()}return!0}function mc(e,t,n){_o(e)&&n.delete(t)}function l1(){qa=!1,Sn!==null&&_o(Sn)&&(Sn=null),Cn!==null&&_o(Cn)&&(Cn=null),jn!==null&&_o(jn)&&(jn=null),Ii.forEach(mc),_i.forEach(mc)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,qa||(qa=!0,pt.unstable_scheduleCallback(pt.unstable_NormalPriority,l1)))}function Ai(e){function t(i){return ni(i,e)}if(0<go.length){ni(go[0],e);for(var n=1;n<go.length;n++){var r=go[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&ni(Sn,e),Cn!==null&&ni(Cn,e),jn!==null&&ni(jn,e),Ii.forEach(t),_i.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)Rf(n),n.blockedOn===null&&vn.shift()}var Pr=rn.ReactCurrentBatchConfig,el=!0;function a1(e,t,n,r){var i=ie,o=Pr.transition;Pr.transition=null;try{ie=1,Js(e,t,n,r)}finally{ie=i,Pr.transition=o}}function s1(e,t,n,r){var i=ie,o=Pr.transition;Pr.transition=null;try{ie=4,Js(e,t,n,r)}finally{ie=i,Pr.transition=o}}function Js(e,t,n,r){if(el){var i=Ja(e,t,n,r);if(i===null)ma(e,t,r,tl,n),hc(e,r);else if(o1(i,e,t,n,r))r.stopPropagation();else if(hc(e,r),t&4&&-1<i1.indexOf(e)){for(;i!==null;){var o=eo(i);if(o!==null&&zf(o),o=Ja(e,t,n,r),o===null&&ma(e,t,r,tl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ma(e,t,r,null,n)}}var tl=null;function Ja(e,t,n,r){if(tl=null,e=Ks(r),e=Un(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return tl=e,null}function Of(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kh()){case Zs:return 1;case Lf:return 4;case qo:case Zh:return 16;case Df:return 536870912;default:return 16}default:return 16}}var xn=null,eu=null,Ao=null;function Ff(){if(Ao)return Ao;var e,t=eu,n=t.length,r,i="value"in xn?xn.value:xn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ao=i.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function gc(){return!1}function mt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?vo:gc,this.isPropagationStopped=gc,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=mt(Qr),Ji=ve({},Qr,{view:0,detail:0}),u1=mt(Ji),la,aa,ri,Ml=ve({},Ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(la=e.screenX-ri.screenX,aa=e.screenY-ri.screenY):aa=la=0,ri=e),la)},movementY:function(e){return"movementY"in e?e.movementY:aa}}),vc=mt(Ml),c1=ve({},Ml,{dataTransfer:0}),d1=mt(c1),f1=ve({},Ji,{relatedTarget:0}),sa=mt(f1),p1=ve({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),h1=mt(p1),m1=ve({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g1=mt(m1),v1=ve({},Qr,{data:0}),yc=mt(v1),y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=w1[e])?!!t[e]:!1}function nu(){return S1}var C1=ve({},Ji,{key:function(e){if(e.key){var t=y1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?x1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),j1=mt(C1),N1=ve({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=mt(N1),k1=ve({},Ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),M1=mt(k1),E1=ve({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=mt(E1),D1=ve({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=mt(D1),T1=[9,13,27,32],ru=Jt&&"CompositionEvent"in window,Si=null;Jt&&"documentMode"in document&&(Si=document.documentMode);var z1=Jt&&"TextEvent"in window&&!Si,$f=Jt&&(!ru||Si&&8<Si&&11>=Si),wc=" ",Sc=!1;function Uf(e,t){switch(e){case"keyup":return T1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function I1(e,t){switch(e){case"compositionend":return bf(t);case"keypress":return t.which!==32?null:(Sc=!0,wc);case"textInput":return e=t.data,e===wc&&Sc?null:e;default:return null}}function _1(e,t){if(pr)return e==="compositionend"||!ru&&Uf(e,t)?(e=Ff(),Ao=eu=xn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $f&&t.locale!=="ko"?null:t.data;default:return null}}var A1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A1[e.type]:t==="textarea"}function Bf(e,t,n,r){xf(r),t=nl(t,"onChange"),0<t.length&&(n=new tu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ci=null,Ri=null;function R1(e){Jf(e,0)}function El(e){var t=gr(e);if(ff(t))return e}function O1(e,t){if(e==="change")return t}var Hf=!1;if(Jt){var ua;if(Jt){var ca="oninput"in document;if(!ca){var jc=document.createElement("div");jc.setAttribute("oninput","return;"),ca=typeof jc.oninput=="function"}ua=ca}else ua=!1;Hf=ua&&(!document.documentMode||9<document.documentMode)}function Nc(){Ci&&(Ci.detachEvent("onpropertychange",Wf),Ri=Ci=null)}function Wf(e){if(e.propertyName==="value"&&El(Ri)){var t=[];Bf(t,Ri,e,Ks(e)),jf(R1,t)}}function F1(e,t,n){e==="focusin"?(Nc(),Ci=t,Ri=n,Ci.attachEvent("onpropertychange",Wf)):e==="focusout"&&Nc()}function $1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return El(Ri)}function U1(e,t){if(e==="click")return El(t)}function b1(e,t){if(e==="input"||e==="change")return El(t)}function B1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:B1;function Oi(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!It(e[i],t[i]))return!1}return!0}function kc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mc(e,t){var n=kc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kc(n)}}function Vf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qf(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ko(e.document)}return t}function iu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function H1(e){var t=Qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vf(n.ownerDocument.documentElement,n)){if(r!==null&&iu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Mc(n,o);var l=Mc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var W1=Jt&&"documentMode"in document&&11>=document.documentMode,hr=null,es=null,ji=null,ts=!1;function Ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ts||hr==null||hr!==Ko(r)||(r=hr,"selectionStart"in r&&iu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&Oi(ji,r)||(ji=r,r=nl(es,"onSelect"),0<r.length&&(t=new tu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function yo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},da={},Yf={};Jt&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Ll(e){if(da[e])return da[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yf)return da[e]=t[n];return e}var Gf=Ll("animationend"),Kf=Ll("animationiteration"),Zf=Ll("animationstart"),Xf=Ll("transitionend"),qf=new Map,Lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){qf.set(e,t),rr(t,[e])}for(var fa=0;fa<Lc.length;fa++){var pa=Lc[fa],V1=pa.toLowerCase(),Q1=pa[0].toUpperCase()+pa.slice(1);zn(V1,"on"+Q1)}zn(Gf,"onAnimationEnd");zn(Kf,"onAnimationIteration");zn(Zf,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(Xf,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(mi));function Dc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vh(r,t,void 0,e),e.currentTarget=null}function Jf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Dc(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Dc(i,a,c),o=s}}}if(Xo)throw e=Za,Xo=!1,Za=null,e}function ue(e,t){var n=t[ls];n===void 0&&(n=t[ls]=new Set);var r=e+"__bubble";n.has(r)||(e0(t,e,2,!1),n.add(r))}function ha(e,t,n){var r=0;t&&(r|=4),e0(n,e,r,t)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Fi(e){if(!e[xo]){e[xo]=!0,af.forEach(function(n){n!=="selectionchange"&&(Y1.has(n)||ha(n,!1,e),ha(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xo]||(t[xo]=!0,ha("selectionchange",!1,t))}}function e0(e,t,n,r){switch(Of(t)){case 1:var i=a1;break;case 4:i=s1;break;default:i=Js}n=i.bind(null,t,n,e),i=void 0,!Ka||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ma(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Un(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}jf(function(){var c=o,d=Ks(n),h=[];e:{var m=qf.get(e);if(m!==void 0){var x=tu,S=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":x=j1;break;case"focusin":S="focus",x=sa;break;case"focusout":S="blur",x=sa;break;case"beforeblur":case"afterblur":x=sa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=vc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=d1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=M1;break;case Gf:case Kf:case Zf:x=h1;break;case Xf:x=L1;break;case"scroll":x=u1;break;case"wheel":x=P1;break;case"copy":case"cut":case"paste":x=g1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=xc}var w=(t&4)!==0,k=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var f=c,g;f!==null;){g=f;var N=g.stateNode;if(g.tag===5&&N!==null&&(g=N,p!==null&&(N=zi(f,p),N!=null&&w.push($i(f,N,g)))),k)break;f=f.return}0<w.length&&(m=new x(m,S,null,n,d),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Ya&&(S=n.relatedTarget||n.fromElement)&&(Un(S)||S[en]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?Un(S):null,S!==null&&(k=ir(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(w=vc,N="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=xc,N="onPointerLeave",p="onPointerEnter",f="pointer"),k=x==null?m:gr(x),g=S==null?m:gr(S),m=new w(N,f+"leave",x,n,d),m.target=k,m.relatedTarget=g,N=null,Un(d)===c&&(w=new w(p,f+"enter",S,n,d),w.target=g,w.relatedTarget=k,N=w),k=N,x&&S)t:{for(w=x,p=S,f=0,g=w;g;g=ur(g))f++;for(g=0,N=p;N;N=ur(N))g++;for(;0<f-g;)w=ur(w),f--;for(;0<g-f;)p=ur(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=ur(w),p=ur(p)}w=null}else w=null;x!==null&&Pc(h,m,x,w,!1),S!==null&&k!==null&&Pc(h,k,S,w,!0)}}e:{if(m=c?gr(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var L=O1;else if(Cc(m))if(Hf)L=b1;else{L=$1;var v=F1}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=U1);if(L&&(L=L(e,c))){Bf(h,L,n,d);break e}v&&v(e,m,c),e==="focusout"&&(v=m._wrapperState)&&v.controlled&&m.type==="number"&&Ba(m,"number",m.value)}switch(v=c?gr(c):window,e){case"focusin":(Cc(v)||v.contentEditable==="true")&&(hr=v,es=c,ji=null);break;case"focusout":ji=es=hr=null;break;case"mousedown":ts=!0;break;case"contextmenu":case"mouseup":case"dragend":ts=!1,Ec(h,n,d);break;case"selectionchange":if(W1)break;case"keydown":case"keyup":Ec(h,n,d)}var j;if(ru)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pr?Uf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&($f&&n.locale!=="ko"&&(pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&pr&&(j=Ff()):(xn=d,eu="value"in xn?xn.value:xn.textContent,pr=!0)),v=nl(c,P),0<v.length&&(P=new yc(P,e,null,n,d),h.push({event:P,listeners:v}),j?P.data=j:(j=bf(n),j!==null&&(P.data=j)))),(j=z1?I1(e,n):_1(e,n))&&(c=nl(c,"onBeforeInput"),0<c.length&&(d=new yc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=j))}Jf(h,t)})}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=zi(e,n),o!=null&&r.unshift($i(e,o,i)),o=zi(e,t),o!=null&&r.push($i(e,o,i))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=zi(n,o),s!=null&&l.unshift($i(n,s,a))):i||(s=zi(n,o),s!=null&&l.push($i(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var G1=/\r\n?/g,K1=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(G1,`
`).replace(K1,"")}function wo(e,t,n){if(t=Tc(t),Tc(e)!==t&&n)throw Error(D(425))}function rl(){}var ns=null,rs=null;function is(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var os=typeof setTimeout=="function"?setTimeout:void 0,Z1=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,X1=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(e){return zc.resolve(null).then(e).catch(q1)}:os;function q1(e){setTimeout(function(){throw e})}function ga(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ai(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ai(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),bt="__reactFiber$"+Yr,Ui="__reactProps$"+Yr,en="__reactContainer$"+Yr,ls="__reactEvents$"+Yr,J1="__reactListeners$"+Yr,em="__reactHandles$"+Yr;function Un(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ic(e);e!==null;){if(n=e[bt])return n;e=Ic(e)}return t}e=n,n=e.parentNode}return null}function eo(e){return e=e[bt]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Dl(e){return e[Ui]||null}var as=[],vr=-1;function In(e){return{current:e}}function fe(e){0>vr||(e.current=as[vr],as[vr]=null,vr--)}function se(e,t){vr++,as[vr]=e.current,e.current=t}var Tn={},Qe=In(Tn),it=In(!1),Zn=Tn;function _r(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function il(){fe(it),fe(Qe)}function _c(e,t,n){if(Qe.current!==Tn)throw Error(D(168));se(Qe,t),se(it,n)}function t0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,Fh(e)||"Unknown",i));return ve({},n,r)}function ol(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,Zn=Qe.current,se(Qe,e),se(it,it.current),!0}function Ac(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=t0(e,t,Zn),r.__reactInternalMemoizedMergedChildContext=e,fe(it),fe(Qe),se(Qe,e)):fe(it),se(it,n)}var Gt=null,Pl=!1,va=!1;function n0(e){Gt===null?Gt=[e]:Gt.push(e)}function tm(e){Pl=!0,n0(e)}function _n(){if(!va&&Gt!==null){va=!0;var e=0,t=ie;try{var n=Gt;for(ie=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,Pl=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),Ef(Zs,_n),i}finally{ie=t,va=!1}}return null}var yr=[],xr=0,ll=null,al=0,yt=[],xt=0,Xn=null,Kt=1,Zt="";function Fn(e,t){yr[xr++]=al,yr[xr++]=ll,ll=e,al=t}function r0(e,t,n){yt[xt++]=Kt,yt[xt++]=Zt,yt[xt++]=Xn,Xn=e;var r=Kt;e=Zt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var o=32-Pt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Kt=1<<32-Pt(t)+i|n<<i|r,Zt=o+e}else Kt=1<<o|n<<i|r,Zt=e}function ou(e){e.return!==null&&(Fn(e,1),r0(e,1,0))}function lu(e){for(;e===ll;)ll=yr[--xr],yr[xr]=null,al=yr[--xr],yr[xr]=null;for(;e===Xn;)Xn=yt[--xt],yt[xt]=null,Zt=yt[--xt],yt[xt]=null,Kt=yt[--xt],yt[xt]=null}var ft=null,dt=null,he=!1,Dt=null;function i0(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Rc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,dt=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Kt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,dt=null,!0):!1;default:return!1}}function ss(e){return(e.mode&1)!==0&&(e.flags&128)===0}function us(e){if(he){var t=dt;if(t){var n=t;if(!Rc(e,t)){if(ss(e))throw Error(D(418));t=Nn(n.nextSibling);var r=ft;t&&Rc(e,t)?i0(r,n):(e.flags=e.flags&-4097|2,he=!1,ft=e)}}else{if(ss(e))throw Error(D(418));e.flags=e.flags&-4097|2,he=!1,ft=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function So(e){if(e!==ft)return!1;if(!he)return Oc(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!is(e.type,e.memoizedProps)),t&&(t=dt)){if(ss(e))throw o0(),Error(D(418));for(;t;)i0(e,t),t=Nn(t.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){dt=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ft?Nn(e.stateNode.nextSibling):null;return!0}function o0(){for(var e=dt;e;)e=Nn(e.nextSibling)}function Ar(){dt=ft=null,he=!1}function au(e){Dt===null?Dt=[e]:Dt.push(e)}var nm=rn.ReactCurrentBatchConfig;function Mt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var sl=In(null),ul=null,wr=null,su=null;function uu(){su=wr=ul=null}function cu(e){var t=sl.current;fe(sl),e._currentValue=t}function cs(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){ul=e,su=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(su!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(ul===null)throw Error(D(308));wr=e,ul.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var bn=null;function du(e){bn===null?bn=[e]:bn.push(e)}function l0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,du(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,du(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function cl(e,t,n,r){var i=e.updateQueue;gn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,d=c=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(m=t,x=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){h=S.call(x,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(x,h,m):S,m==null)break e;h=ve({},h,m);break e;case 2:gn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,s=h):d=d.next=x,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(s=h),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jn|=l,e.lanes=l,e.memoizedState=h}}function $c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var s0=new lf.Component().refs;function ds(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Tl={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=En(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Tt(t,e,i,r),Oo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=En(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=kn(e,o,i),t!==null&&(Tt(t,e,i,r),Oo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=En(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=kn(e,i,r),t!==null&&(Tt(t,e,r,n),Oo(t,e,r))}};function Uc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Oi(n,r)||!Oi(i,o):!0}function u0(e,t,n){var r=!1,i=Tn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ct(o):(i=ot(t)?Zn:Qe.current,r=t.contextTypes,o=(r=r!=null)?_r(e,i):Tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Tl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Tl.enqueueReplaceState(t,t.state,null)}function fs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=s0,fu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ct(o):(o=ot(t)?Zn:Qe.current,i.context=_r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ds(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Tl.enqueueReplaceState(i,i.state,null),cl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===s0&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function Co(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function c0(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Ln(p,f),p.index=0,p.sibling=null,p}function o(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,N){return f===null||f.tag!==6?(f=Na(g,p.mode,N),f.return=p,f):(f=i(f,g),f.return=p,f)}function s(p,f,g,N){var L=g.type;return L===fr?d(p,f,g.props.children,N,g.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mn&&Bc(L)===f.type)?(N=i(f,g.props),N.ref=ii(p,f,g),N.return=p,N):(N=Ho(g.type,g.key,g.props,null,p.mode,N),N.ref=ii(p,f,g),N.return=p,N)}function c(p,f,g,N){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ka(g,p.mode,N),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,N,L){return f===null||f.tag!==7?(f=Yn(g,p.mode,N,L),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Na(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case co:return g=Ho(f.type,f.key,f.props,null,p.mode,g),g.ref=ii(p,null,f),g.return=p,g;case dr:return f=ka(f,p.mode,g),f.return=p,f;case mn:var N=f._init;return h(p,N(f._payload),g)}if(pi(f)||Jr(f))return f=Yn(f,p.mode,g,null),f.return=p,f;Co(p,f)}return null}function m(p,f,g,N){var L=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(p,f,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return g.key===L?s(p,f,g,N):null;case dr:return g.key===L?c(p,f,g,N):null;case mn:return L=g._init,m(p,f,L(g._payload),N)}if(pi(g)||Jr(g))return L!==null?null:d(p,f,g,N,null);Co(p,g)}return null}function x(p,f,g,N,L){if(typeof N=="string"&&N!==""||typeof N=="number")return p=p.get(g)||null,a(f,p,""+N,L);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case co:return p=p.get(N.key===null?g:N.key)||null,s(f,p,N,L);case dr:return p=p.get(N.key===null?g:N.key)||null,c(f,p,N,L);case mn:var v=N._init;return x(p,f,g,v(N._payload),L)}if(pi(N)||Jr(N))return p=p.get(g)||null,d(f,p,N,L,null);Co(f,N)}return null}function S(p,f,g,N){for(var L=null,v=null,j=f,P=f=0,_=null;j!==null&&P<g.length;P++){j.index>P?(_=j,j=null):_=j.sibling;var b=m(p,j,g[P],N);if(b===null){j===null&&(j=_);break}e&&j&&b.alternate===null&&t(p,j),f=o(b,f,P),v===null?L=b:v.sibling=b,v=b,j=_}if(P===g.length)return n(p,j),he&&Fn(p,P),L;if(j===null){for(;P<g.length;P++)j=h(p,g[P],N),j!==null&&(f=o(j,f,P),v===null?L=j:v.sibling=j,v=j);return he&&Fn(p,P),L}for(j=r(p,j);P<g.length;P++)_=x(j,p,P,g[P],N),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?P:_.key),f=o(_,f,P),v===null?L=_:v.sibling=_,v=_);return e&&j.forEach(function(J){return t(p,J)}),he&&Fn(p,P),L}function w(p,f,g,N){var L=Jr(g);if(typeof L!="function")throw Error(D(150));if(g=L.call(g),g==null)throw Error(D(151));for(var v=L=null,j=f,P=f=0,_=null,b=g.next();j!==null&&!b.done;P++,b=g.next()){j.index>P?(_=j,j=null):_=j.sibling;var J=m(p,j,b.value,N);if(J===null){j===null&&(j=_);break}e&&j&&J.alternate===null&&t(p,j),f=o(J,f,P),v===null?L=J:v.sibling=J,v=J,j=_}if(b.done)return n(p,j),he&&Fn(p,P),L;if(j===null){for(;!b.done;P++,b=g.next())b=h(p,b.value,N),b!==null&&(f=o(b,f,P),v===null?L=b:v.sibling=b,v=b);return he&&Fn(p,P),L}for(j=r(p,j);!b.done;P++,b=g.next())b=x(j,p,P,b.value,N),b!==null&&(e&&b.alternate!==null&&j.delete(b.key===null?P:b.key),f=o(b,f,P),v===null?L=b:v.sibling=b,v=b);return e&&j.forEach(function(Ce){return t(p,Ce)}),he&&Fn(p,P),L}function k(p,f,g,N){if(typeof g=="object"&&g!==null&&g.type===fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case co:e:{for(var L=g.key,v=f;v!==null;){if(v.key===L){if(L=g.type,L===fr){if(v.tag===7){n(p,v.sibling),f=i(v,g.props.children),f.return=p,p=f;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mn&&Bc(L)===v.type){n(p,v.sibling),f=i(v,g.props),f.ref=ii(p,v,g),f.return=p,p=f;break e}n(p,v);break}else t(p,v);v=v.sibling}g.type===fr?(f=Yn(g.props.children,p.mode,N,g.key),f.return=p,p=f):(N=Ho(g.type,g.key,g.props,null,p.mode,N),N.ref=ii(p,f,g),N.return=p,p=N)}return l(p);case dr:e:{for(v=g.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ka(g,p.mode,N),f.return=p,p=f}return l(p);case mn:return v=g._init,k(p,f,v(g._payload),N)}if(pi(g))return S(p,f,g,N);if(Jr(g))return w(p,f,g,N);Co(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Na(g,p.mode,N),f.return=p,p=f),l(p)):n(p,f)}return k}var Rr=c0(!0),d0=c0(!1),to={},Ht=In(to),bi=In(to),Bi=In(to);function Bn(e){if(e===to)throw Error(D(174));return e}function pu(e,t){switch(se(Bi,t),se(bi,e),se(Ht,to),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wa(t,e)}fe(Ht),se(Ht,t)}function Or(){fe(Ht),fe(bi),fe(Bi)}function f0(e){Bn(Bi.current);var t=Bn(Ht.current),n=Wa(t,e.type);t!==n&&(se(bi,e),se(Ht,n))}function hu(e){bi.current===e&&(fe(Ht),fe(bi))}var me=In(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ya=[];function mu(){for(var e=0;e<ya.length;e++)ya[e]._workInProgressVersionPrimary=null;ya.length=0}var Fo=rn.ReactCurrentDispatcher,xa=rn.ReactCurrentBatchConfig,qn=0,ge=null,De=null,Ae=null,fl=!1,Ni=!1,Hi=0,rm=0;function He(){throw Error(D(321))}function gu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function vu(e,t,n,r,i,o){if(qn=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fo.current=e===null||e.memoizedState===null?am:sm,e=n(r,i),Ni){o=0;do{if(Ni=!1,Hi=0,25<=o)throw Error(D(301));o+=1,Ae=De=null,t.updateQueue=null,Fo.current=um,e=n(r,i)}while(Ni)}if(Fo.current=pl,t=De!==null&&De.next!==null,qn=0,Ae=De=ge=null,fl=!1,t)throw Error(D(300));return e}function yu(){var e=Hi!==0;return Hi=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ge.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function jt(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ae===null?ge.memoizedState:Ae.next;if(t!==null)Ae=t,De=e;else{if(e===null)throw Error(D(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ae===null?ge.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function Wi(e,t){return typeof t=="function"?t(e):t}function wa(e){var t=jt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var d=c.lane;if((qn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ge.lanes|=d,Jn|=d}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,It(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,Jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=jt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);It(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function p0(){}function h0(e,t){var n=ge,r=jt(),i=t(),o=!It(r.memoizedState,i);if(o&&(r.memoizedState=i,nt=!0),r=r.queue,xu(v0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,Vi(9,g0.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(D(349));qn&30||m0(n,t,i)}return i}function m0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function g0(e,t,n,r){t.value=n,t.getSnapshot=r,y0(t)&&x0(e)}function v0(e,t,n){return n(function(){y0(t)&&x0(e)})}function y0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function x0(e){var t=tn(e,1);t!==null&&Tt(t,e,1,-1)}function Hc(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=lm.bind(null,ge,e),[t.memoizedState,e]}function Vi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function w0(){return jt().memoizedState}function $o(e,t,n,r){var i=Ot();ge.flags|=e,i.memoizedState=Vi(1|t,n,void 0,r===void 0?null:r)}function zl(e,t,n,r){var i=jt();r=r===void 0?null:r;var o=void 0;if(De!==null){var l=De.memoizedState;if(o=l.destroy,r!==null&&gu(r,l.deps)){i.memoizedState=Vi(t,n,o,r);return}}ge.flags|=e,i.memoizedState=Vi(1|t,n,o,r)}function Wc(e,t){return $o(8390656,8,e,t)}function xu(e,t){return zl(2048,8,e,t)}function S0(e,t){return zl(4,2,e,t)}function C0(e,t){return zl(4,4,e,t)}function j0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function N0(e,t,n){return n=n!=null?n.concat([e]):null,zl(4,4,j0.bind(null,t,e),n)}function wu(){}function k0(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function M0(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function E0(e,t,n){return qn&21?(It(n,t)||(n=Pf(),ge.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function im(e,t){var n=ie;ie=n!==0&&4>n?n:4,e(!0);var r=xa.transition;xa.transition={};try{e(!1),t()}finally{ie=n,xa.transition=r}}function L0(){return jt().memoizedState}function om(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D0(e))P0(t,n);else if(n=l0(e,t,n,r),n!==null){var i=Ke();Tt(n,e,r,i),T0(n,t,r)}}function lm(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D0(e))P0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,It(a,l)){var s=t.interleaved;s===null?(i.next=i,du(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=l0(e,t,i,r),n!==null&&(i=Ke(),Tt(n,e,r,i),T0(n,t,r))}}function D0(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function P0(e,t){Ni=fl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function T0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var pl={readContext:Ct,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},am={readContext:Ct,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$o(4194308,4,j0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=om.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:Hc,useDebugValue:wu,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=Hc(!1),t=e[0];return e=im.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=Ot();if(he){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Oe===null)throw Error(D(349));qn&30||m0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wc(v0.bind(null,r,o,e),[e]),r.flags|=2048,Vi(9,g0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ot(),t=Oe.identifierPrefix;if(he){var n=Zt,r=Kt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=rm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sm={readContext:Ct,useCallback:k0,useContext:Ct,useEffect:xu,useImperativeHandle:N0,useInsertionEffect:S0,useLayoutEffect:C0,useMemo:M0,useReducer:wa,useRef:w0,useState:function(){return wa(Wi)},useDebugValue:wu,useDeferredValue:function(e){var t=jt();return E0(t,De.memoizedState,e)},useTransition:function(){var e=wa(Wi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:h0,useId:L0,unstable_isNewReconciler:!1},um={readContext:Ct,useCallback:k0,useContext:Ct,useEffect:xu,useImperativeHandle:N0,useInsertionEffect:S0,useLayoutEffect:C0,useMemo:M0,useReducer:Sa,useRef:w0,useState:function(){return Sa(Wi)},useDebugValue:wu,useDeferredValue:function(e){var t=jt();return De===null?t.memoizedState=e:E0(t,De.memoizedState,e)},useTransition:function(){var e=Sa(Wi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:h0,useId:L0,unstable_isNewReconciler:!1};function Fr(e,t){try{var n="",r=t;do n+=Oh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ps(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var cm=typeof WeakMap=="function"?WeakMap:Map;function z0(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ml||(ml=!0,js=r),ps(e,t)},n}function I0(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ps(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ps(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Vc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new cm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Nm.bind(null,e,t,n),t.then(e,e))}function Qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,kn(n,t,1))),n.lanes|=1),e)}var dm=rn.ReactCurrentOwner,nt=!1;function Ye(e,t,n,r){t.child=e===null?d0(t,null,n,r):Rr(t,e.child,n,r)}function Gc(e,t,n,r,i){n=n.render;var o=t.ref;return Tr(t,i),r=vu(e,t,n,r,o,i),n=yu(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(he&&n&&ou(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Kc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Lu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_0(e,t,o,r,i)):(e=Ho(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Oi,n(l,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function _0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Oi(o,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return hs(e,t,n,r,i)}function A0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Cr,ct),ct|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Cr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,se(Cr,ct),ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,se(Cr,ct),ct|=r;return Ye(e,t,i,n),t.child}function R0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hs(e,t,n,r,i){var o=ot(n)?Zn:Qe.current;return o=_r(t,o),Tr(t,i),n=vu(e,t,n,r,o,i),r=yu(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(he&&r&&ou(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Zc(e,t,n,r,i){if(ot(n)){var o=!0;ol(t)}else o=!1;if(Tr(t,i),t.stateNode===null)Uo(e,t),u0(t,n,r),fs(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ct(c):(c=ot(n)?Zn:Qe.current,c=_r(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&bc(t,l,r,c),gn=!1;var m=t.memoizedState;l.state=m,cl(t,r,l,i),s=t.memoizedState,a!==r||m!==s||it.current||gn?(typeof d=="function"&&(ds(t,n,d,r),s=t.memoizedState),(a=gn||Uc(t,n,a,r,m,s,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,a0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Mt(t.type,a),l.props=c,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ct(s):(s=ot(n)?Zn:Qe.current,s=_r(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&bc(t,l,r,s),gn=!1,m=t.memoizedState,l.state=m,cl(t,r,l,i);var S=t.memoizedState;a!==h||m!==S||it.current||gn?(typeof x=="function"&&(ds(t,n,x,r),S=t.memoizedState),(c=gn||Uc(t,n,c,r,m,S,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ms(e,t,n,r,o,i)}function ms(e,t,n,r,i,o){R0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ac(t,n,!1),nn(e,t,o);r=t.stateNode,dm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rr(t,e.child,null,o),t.child=Rr(t,null,a,o)):Ye(e,t,a,o),t.memoizedState=r.state,i&&Ac(t,n,!0),t.child}function O0(e){var t=e.stateNode;t.pendingContext?_c(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_c(e,t.context,!1),pu(e,t.containerInfo)}function Xc(e,t,n,r,i){return Ar(),au(i),t.flags|=256,Ye(e,t,n,r),t.child}var gs={dehydrated:null,treeContext:null,retryLane:0};function vs(e){return{baseLanes:e,cachePool:null,transitions:null}}function F0(e,t,n){var r=t.pendingProps,i=me.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(me,i&1),e===null)return us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Al(l,r,0,null),e=Yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=vs(n),t.memoizedState=gs,e):Su(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fm(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ln(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ln(a,o):(o=Yn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?vs(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=gs,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Su(e,t){return t=Al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jo(e,t,n,r){return r!==null&&au(r),Rr(t,e.child,null,n),e=Su(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function fm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ca(Error(D(422))),jo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Al({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Rr(t,e.child,null,l),t.child.memoizedState=vs(l),t.memoizedState=gs,o);if(!(t.mode&1))return jo(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=Ca(o,r,void 0),jo(e,t,l,r)}if(a=(l&e.childLanes)!==0,nt||a){if(r=Oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),Tt(r,e,i,-1))}return Eu(),r=Ca(Error(D(421))),jo(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=km.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,dt=Nn(i.nextSibling),ft=t,he=!0,Dt=null,e!==null&&(yt[xt++]=Kt,yt[xt++]=Zt,yt[xt++]=Xn,Kt=e.id,Zt=e.overflow,Xn=t),t=Su(t,r.children),t.flags|=4096,t)}function qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cs(e.return,t,n)}function ja(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function $0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ye(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qc(e,n,t);else if(e.tag===19)qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&dl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,o);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Uo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function pm(e,t,n){switch(t.tag){case 3:O0(t),Ar();break;case 5:f0(t);break;case 1:ot(t.type)&&ol(t);break;case 4:pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(sl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?F0(e,t,n):(se(me,me.current&1),e=nn(e,t,n),e!==null?e.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,A0(e,t,n)}return nn(e,t,n)}var U0,ys,b0,B0;U0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ys=function(){};b0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(Ht.current);var o=null;switch(n){case"input":i=Ua(e,i),r=Ua(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=Ha(e,i),r=Ha(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rl)}Va(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Pi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Pi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ue("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};B0=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hm(e,t,n){var r=t.pendingProps;switch(lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return ot(t.type)&&il(),We(t),null;case 3:return r=t.stateNode,Or(),fe(it),fe(Qe),mu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(Ms(Dt),Dt=null))),ys(e,t),We(t),null;case 5:hu(t);var i=Bn(Bi.current);if(n=t.type,e!==null&&t.stateNode!=null)b0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return We(t),null}if(e=Bn(Ht.current),So(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[bt]=t,r[Ui]=o,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<mi.length;i++)ue(mi[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":ac(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":uc(r,o),ue("invalid",r)}Va(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&wo(r.textContent,a,e),i=["children",""+a]):Pi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ue("scroll",r)}switch(n){case"input":fo(r),sc(r,o,!0);break;case"textarea":fo(r),cc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=rl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=mf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[bt]=t,e[Ui]=r,U0(e,t,!1,!1),t.stateNode=e;e:{switch(l=Qa(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<mi.length;i++)ue(mi[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":ac(e,r),i=Ua(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ue("invalid",e);break;case"textarea":uc(e,r),i=Ha(e,r),ue("invalid",e);break;default:i=r}Va(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?yf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&gf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ti(e,s):typeof s=="number"&&Ti(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ue("scroll",e):s!=null&&Vs(e,o,s,l))}switch(n){case"input":fo(e),sc(e,r,!1);break;case"textarea":fo(e),cc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Er(e,!!r.multiple,o,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)B0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Bn(Bi.current),Bn(Ht.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[bt]=t,(o=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:wo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=t,t.stateNode=r}return We(t),null;case 13:if(fe(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&dt!==null&&t.mode&1&&!(t.flags&128))o0(),Ar(),t.flags|=98560,o=!1;else if(o=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[bt]=t}else Ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else Dt!==null&&(Ms(Dt),Dt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Pe===0&&(Pe=3):Eu())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Or(),ys(e,t),e===null&&Fi(t.stateNode.containerInfo),We(t),null;case 10:return cu(t.type._context),We(t),null;case 17:return ot(t.type)&&il(),We(t),null;case 19:if(fe(me),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)oi(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=dl(e),l!==null){for(t.flags|=128,oi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>$r&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304)}else{if(!r)if(e=dl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!he)return We(t),null}else 2*Me()-o.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=me.current,se(me,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Mu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function mm(e,t){switch(lu(t),t.tag){case 1:return ot(t.type)&&il(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),fe(it),fe(Qe),mu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hu(t),null;case 13:if(fe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(me),null;case 4:return Or(),null;case 10:return cu(t.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var No=!1,Ve=!1,gm=typeof WeakSet=="function"?WeakSet:Set,I=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function xs(e,t,n){try{n()}catch(r){we(e,t,r)}}var Jc=!1;function vm(e,t){if(ns=el,e=Qf(),iu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,d=0,h=e,m=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===i&&(a=l),m===o&&++d===r&&(s=l),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(rs={focusedElem:e,selectionRange:n},el=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,k=S.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Mt(t.type,w),k);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(N){we(t,t.return,N)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return S=Jc,Jc=!1,S}function ki(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&xs(t,n,o)}i=i.next}while(i!==r)}}function Il(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ws(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function H0(e){var t=e.alternate;t!==null&&(e.alternate=null,H0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[Ui],delete t[ls],delete t[J1],delete t[em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function W0(e){return e.tag===5||e.tag===3||e.tag===4}function ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||W0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ss(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rl));else if(r!==4&&(e=e.child,e!==null))for(Ss(e,t,n),e=e.sibling;e!==null;)Ss(e,t,n),e=e.sibling}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}var $e=null,Et=!1;function fn(e,t,n){for(n=n.child;n!==null;)V0(e,t,n),n=n.sibling}function V0(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Ve||Sr(n,t);case 6:var r=$e,i=Et;$e=null,fn(e,t,n),$e=r,Et=i,$e!==null&&(Et?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Et?(e=$e,n=n.stateNode,e.nodeType===8?ga(e.parentNode,n):e.nodeType===1&&ga(e,n),Ai(e)):ga($e,n.stateNode));break;case 4:r=$e,i=Et,$e=n.stateNode.containerInfo,Et=!0,fn(e,t,n),$e=r,Et=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&xs(n,t,l),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Ve&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,fn(e,t,n),Ve=r):fn(e,t,n);break;default:fn(e,t,n)}}function td(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gm),t.forEach(function(r){var i=Mm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,Et=!1;break e;case 3:$e=a.stateNode.containerInfo,Et=!0;break e;case 4:$e=a.stateNode.containerInfo,Et=!0;break e}a=a.return}if($e===null)throw Error(D(160));V0(o,l,i),$e=null,Et=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){we(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Q0(t,e),t=t.sibling}function Q0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Rt(e),r&4){try{ki(3,e,e.return),Il(3,e)}catch(w){we(e,e.return,w)}try{ki(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:kt(t,e),Rt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(kt(t,e),Rt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Ti(i,"")}catch(w){we(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&pf(i,o),Qa(a,l);var c=Qa(a,o);for(l=0;l<s.length;l+=2){var d=s[l],h=s[l+1];d==="style"?yf(i,h):d==="dangerouslySetInnerHTML"?gf(i,h):d==="children"?Ti(i,h):Vs(i,d,h,c)}switch(a){case"input":ba(i,o);break;case"textarea":hf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Er(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ui]=o}catch(w){we(e,e.return,w)}}break;case 6:if(kt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){we(e,e.return,w)}}break;case 3:if(kt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ai(t.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:kt(t,e),Rt(e);break;case 13:kt(t,e),Rt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nu=Me())),r&4&&td(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(c=Ve)||d,kt(t,e),Ve=c):kt(t,e),Rt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(h=I=d;I!==null;){switch(m=I,x=m.child,m.tag){case 0:case 11:case 14:case 15:ki(4,m,m.return);break;case 1:Sr(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){we(r,n,w)}}break;case 5:Sr(m,m.return);break;case 22:if(m.memoizedState!==null){rd(h);continue}}x!==null?(x.return=m,I=x):rd(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=vf("display",l))}catch(w){we(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){we(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:kt(t,e),Rt(e),r&4&&td(e);break;case 21:break;default:kt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(W0(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ti(i,""),r.flags&=-33);var o=ed(e);Cs(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=ed(e);Ss(e,a,l);break;default:throw Error(D(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ym(e,t,n){I=e,Y0(e)}function Y0(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||No;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Ve;a=No;var c=Ve;if(No=l,(Ve=s)&&!c)for(I=i;I!==null;)l=I,s=l.child,l.tag===22&&l.memoizedState!==null?id(i):s!==null?(s.return=l,I=s):id(i);for(;o!==null;)I=o,Y0(o),o=o.sibling;I=i,No=a,Ve=c}nd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):nd(e)}}function nd(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Il(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Mt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$c(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$c(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ai(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ve||t.flags&512&&ws(t)}catch(m){we(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function rd(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function id(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Il(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){we(t,i,s)}}var o=t.return;try{ws(t)}catch(s){we(t,o,s)}break;case 5:var l=t.return;try{ws(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var xm=Math.ceil,hl=rn.ReactCurrentDispatcher,Cu=rn.ReactCurrentOwner,St=rn.ReactCurrentBatchConfig,te=0,Oe=null,Le=null,Ue=0,ct=0,Cr=In(0),Pe=0,Qi=null,Jn=0,_l=0,ju=0,Mi=null,et=null,Nu=0,$r=1/0,Qt=null,ml=!1,js=null,Mn=null,ko=!1,wn=null,gl=0,Ei=0,Ns=null,bo=-1,Bo=0;function Ke(){return te&6?Me():bo!==-1?bo:bo=Me()}function En(e){return e.mode&1?te&2&&Ue!==0?Ue&-Ue:nm.transition!==null?(Bo===0&&(Bo=Pf()),Bo):(e=ie,e!==0||(e=window.event,e=e===void 0?16:Of(e.type)),e):1}function Tt(e,t,n,r){if(50<Ei)throw Ei=0,Ns=null,Error(D(185));qi(e,n,r),(!(te&2)||e!==Oe)&&(e===Oe&&(!(te&2)&&(_l|=n),Pe===4&&yn(e,Ue)),lt(e,r),n===1&&te===0&&!(t.mode&1)&&($r=Me()+500,Pl&&_n()))}function lt(e,t){var n=e.callbackNode;n1(e,t);var r=Jo(e,e===Oe?Ue:0);if(r===0)n!==null&&pc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pc(n),t===1)e.tag===0?tm(od.bind(null,e)):n0(od.bind(null,e)),X1(function(){!(te&6)&&_n()}),n=null;else{switch(Tf(r)){case 1:n=Zs;break;case 4:n=Lf;break;case 16:n=qo;break;case 536870912:n=Df;break;default:n=qo}n=tp(n,G0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function G0(e,t){if(bo=-1,Bo=0,te&6)throw Error(D(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=Jo(e,e===Oe?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vl(e,r);else{t=r;var i=te;te|=2;var o=Z0();(Oe!==e||Ue!==t)&&(Qt=null,$r=Me()+500,Qn(e,t));do try{Cm();break}catch(a){K0(e,a)}while(!0);uu(),hl.current=o,te=i,Le!==null?t=0:(Oe=null,Ue=0,t=Pe)}if(t!==0){if(t===2&&(i=Xa(e),i!==0&&(r=i,t=ks(e,i))),t===1)throw n=Qi,Qn(e,0),yn(e,r),lt(e,Me()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!wm(i)&&(t=vl(e,r),t===2&&(o=Xa(e),o!==0&&(r=o,t=ks(e,o))),t===1))throw n=Qi,Qn(e,0),yn(e,r),lt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:$n(e,et,Qt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=Nu+500-Me(),10<t)){if(Jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=os($n.bind(null,e,et,Qt),t);break}$n(e,et,Qt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Pt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xm(r/1960))-r,10<r){e.timeoutHandle=os($n.bind(null,e,et,Qt),r);break}$n(e,et,Qt);break;case 5:$n(e,et,Qt);break;default:throw Error(D(329))}}}return lt(e,Me()),e.callbackNode===n?G0.bind(null,e):null}function ks(e,t){var n=Mi;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=vl(e,t),e!==2&&(t=et,et=n,t!==null&&Ms(t)),e}function Ms(e){et===null?et=e:et.push.apply(et,e)}function wm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!It(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~ju,t&=~_l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function od(e){if(te&6)throw Error(D(327));zr();var t=Jo(e,0);if(!(t&1))return lt(e,Me()),null;var n=vl(e,t);if(e.tag!==0&&n===2){var r=Xa(e);r!==0&&(t=r,n=ks(e,r))}if(n===1)throw n=Qi,Qn(e,0),yn(e,t),lt(e,Me()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,et,Qt),lt(e,Me()),null}function ku(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&($r=Me()+500,Pl&&_n())}}function er(e){wn!==null&&wn.tag===0&&!(te&6)&&zr();var t=te;te|=1;var n=St.transition,r=ie;try{if(St.transition=null,ie=1,e)return e()}finally{ie=r,St.transition=n,te=t,!(te&6)&&_n()}}function Mu(){ct=Cr.current,fe(Cr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Z1(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&il();break;case 3:Or(),fe(it),fe(Qe),mu();break;case 5:hu(r);break;case 4:Or();break;case 13:fe(me);break;case 19:fe(me);break;case 10:cu(r.type._context);break;case 22:case 23:Mu()}n=n.return}if(Oe=e,Le=e=Ln(e.current,null),Ue=ct=t,Pe=0,Qi=null,ju=_l=Jn=0,et=Mi=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}bn=null}return e}function K0(e,t){do{var n=Le;try{if(uu(),Fo.current=pl,fl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}fl=!1}if(qn=0,Ae=De=ge=null,Ni=!1,Hi=0,Cu.current=null,n===null||n.return===null){Pe=1,Qi=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Qc(l);if(x!==null){x.flags&=-257,Yc(x,l,a,o,t),x.mode&1&&Vc(o,c,t),t=x,s=c;var S=t.updateQueue;if(S===null){var w=new Set;w.add(s),t.updateQueue=w}else S.add(s);break e}else{if(!(t&1)){Vc(o,c,t),Eu();break e}s=Error(D(426))}}else if(he&&a.mode&1){var k=Qc(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Yc(k,l,a,o,t),au(Fr(s,a));break e}}o=s=Fr(s,a),Pe!==4&&(Pe=2),Mi===null?Mi=[o]:Mi.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=z0(o,s,t);Fc(o,p);break e;case 1:a=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mn===null||!Mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var N=I0(o,a,t);Fc(o,N);break e}}o=o.return}while(o!==null)}q0(n)}catch(L){t=L,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Z0(){var e=hl.current;return hl.current=pl,e===null?pl:e}function Eu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||!(Jn&268435455)&&!(_l&268435455)||yn(Oe,Ue)}function vl(e,t){var n=te;te|=2;var r=Z0();(Oe!==e||Ue!==t)&&(Qt=null,Qn(e,t));do try{Sm();break}catch(i){K0(e,i)}while(!0);if(uu(),te=n,hl.current=r,Le!==null)throw Error(D(261));return Oe=null,Ue=0,Pe}function Sm(){for(;Le!==null;)X0(Le)}function Cm(){for(;Le!==null&&!Yh();)X0(Le)}function X0(e){var t=ep(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?q0(e):Le=t,Cu.current=null}function q0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mm(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Le=null;return}}else if(n=hm(n,t,ct),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Pe===0&&(Pe=5)}function $n(e,t,n){var r=ie,i=St.transition;try{St.transition=null,ie=1,jm(e,t,n,r)}finally{St.transition=i,ie=r}return null}function jm(e,t,n,r){do zr();while(wn!==null);if(te&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(r1(e,o),e===Oe&&(Le=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ko||(ko=!0,tp(qo,function(){return zr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=St.transition,St.transition=null;var l=ie;ie=1;var a=te;te|=4,Cu.current=null,vm(e,n),Q0(n,e),H1(rs),el=!!ns,rs=ns=null,e.current=n,ym(n),Gh(),te=a,ie=l,St.transition=o}else e.current=n;if(ko&&(ko=!1,wn=e,gl=i),o=e.pendingLanes,o===0&&(Mn=null),Xh(n.stateNode),lt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ml)throw ml=!1,e=js,js=null,e;return gl&1&&e.tag!==0&&zr(),o=e.pendingLanes,o&1?e===Ns?Ei++:(Ei=0,Ns=e):Ei=0,_n(),null}function zr(){if(wn!==null){var e=Tf(gl),t=St.transition,n=ie;try{if(St.transition=null,ie=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,gl=0,te&6)throw Error(D(331));var i=te;for(te|=4,I=e.current;I!==null;){var o=I,l=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(I=c;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:ki(8,d,o)}var h=d.child;if(h!==null)h.return=d,I=h;else for(;I!==null;){d=I;var m=d.sibling,x=d.return;if(H0(d),d===c){I=null;break}if(m!==null){m.return=x,I=m;break}I=x}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,I=l;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ki(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var f=e.current;for(I=f;I!==null;){l=I;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,I=g;else e:for(l=f;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Il(9,a)}}catch(L){we(a,a.return,L)}if(a===l){I=null;break e}var N=a.sibling;if(N!==null){N.return=a.return,I=N;break e}I=a.return}}if(te=i,_n(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(kl,e)}catch{}r=!0}return r}finally{ie=n,St.transition=t}}return!1}function ld(e,t,n){t=Fr(n,t),t=z0(e,t,1),e=kn(e,t,1),t=Ke(),e!==null&&(qi(e,1,t),lt(e,t))}function we(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=Fr(n,e),e=I0(t,e,1),t=kn(t,e,1),e=Ke(),t!==null&&(qi(t,1,e),lt(t,e));break}}t=t.return}}function Nm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ue&n)===n&&(Pe===4||Pe===3&&(Ue&130023424)===Ue&&500>Me()-Nu?Qn(e,0):ju|=n),lt(e,t)}function J0(e,t){t===0&&(e.mode&1?(t=mo,mo<<=1,!(mo&130023424)&&(mo=4194304)):t=1);var n=Ke();e=tn(e,t),e!==null&&(qi(e,t,n),lt(e,n))}function km(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),J0(e,n)}function Mm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),J0(e,n)}var ep;ep=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,pm(e,t,n);nt=!!(e.flags&131072)}else nt=!1,he&&t.flags&1048576&&r0(t,al,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Uo(e,t),e=t.pendingProps;var i=_r(t,Qe.current);Tr(t,n),i=vu(null,t,r,e,i,n);var o=yu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,ol(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fu(t),i.updater=Tl,t.stateNode=i,i._reactInternals=t,fs(t,r,e,n),t=ms(null,t,r,!0,o,n)):(t.tag=0,he&&o&&ou(t),Ye(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Uo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lm(r),e=Mt(r,e),i){case 0:t=hs(null,t,r,e,n);break e;case 1:t=Zc(null,t,r,e,n);break e;case 11:t=Gc(null,t,r,e,n);break e;case 14:t=Kc(null,t,r,Mt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),hs(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Zc(e,t,r,i,n);case 3:e:{if(O0(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,a0(e,t),cl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Fr(Error(D(423)),t),t=Xc(e,t,r,n,i);break e}else if(r!==i){i=Fr(Error(D(424)),t),t=Xc(e,t,r,n,i);break e}else for(dt=Nn(t.stateNode.containerInfo.firstChild),ft=t,he=!0,Dt=null,n=d0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ar(),r===i){t=nn(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return f0(t),e===null&&us(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,is(r,i)?l=null:o!==null&&is(r,o)&&(t.flags|=32),R0(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&us(t),null;case 13:return F0(e,t,n);case 4:return pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Gc(e,t,r,i,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,se(sl,r._currentValue),r._currentValue=l,o!==null)if(It(o.value,l)){if(o.children===i.children&&!it.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Xt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),cs(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),cs(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ye(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=Ct(i),r=r(i),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,i=Mt(r,t.pendingProps),i=Mt(r.type,i),Kc(e,t,r,i,n);case 15:return _0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mt(r,i),Uo(e,t),t.tag=1,ot(r)?(e=!0,ol(t)):e=!1,Tr(t,n),u0(t,r,i),fs(t,r,i,n),ms(null,t,r,!0,e,n);case 19:return $0(e,t,n);case 22:return A0(e,t,n)}throw Error(D(156,t.tag))};function tp(e,t){return Ef(e,t)}function Em(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new Em(e,t,n,r)}function Lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return Lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ys)return 11;if(e===Gs)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Lu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fr:return Yn(n.children,i,o,t);case Qs:l=8,i|=8;break;case Ra:return e=wt(12,n,t,i|2),e.elementType=Ra,e.lanes=o,e;case Oa:return e=wt(13,n,t,i),e.elementType=Oa,e.lanes=o,e;case Fa:return e=wt(19,n,t,i),e.elementType=Fa,e.lanes=o,e;case cf:return Al(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sf:l=10;break e;case uf:l=9;break e;case Ys:l=11;break e;case Gs:l=14;break e;case mn:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=wt(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yn(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Al(e,t,n,r){return e=wt(22,e,r,t),e.elementType=cf,e.lanes=n,e.stateNode={isHidden:!1},e}function Na(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ka(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oa(0),this.expirationTimes=oa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Du(e,t,n,r,i,o,l,a,s){return e=new Dm(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=wt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fu(o),e}function Pm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function np(e){if(!e)return Tn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ot(n))return t0(e,n,t)}return t}function rp(e,t,n,r,i,o,l,a,s){return e=Du(n,r,!0,e,i,o,l,a,s),e.context=np(null),n=e.current,r=Ke(),i=En(n),o=Xt(r,i),o.callback=t??null,kn(n,o,i),e.current.lanes=i,qi(e,i,r),lt(e,r),e}function Rl(e,t,n,r){var i=t.current,o=Ke(),l=En(i);return n=np(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=kn(i,t,l),e!==null&&(Tt(e,i,l,o),Oo(e,i,l)),l}function yl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ad(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Pu(e,t){ad(e,t),(e=e.alternate)&&ad(e,t)}function Tm(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Tu(e){this._internalRoot=e}Ol.prototype.render=Tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Rl(e,t,null,null)};Ol.prototype.unmount=Tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Rl(null,e,null,null)}),t[en]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=_f();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&Rf(e)}};function zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function sd(){}function zm(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=yl(l);o.call(c)}}var l=rp(t,r,e,0,null,!1,!1,"",sd);return e._reactRootContainer=l,e[en]=l.current,Fi(e.nodeType===8?e.parentNode:e),er(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=yl(s);a.call(c)}}var s=Du(e,0,!1,null,null,!1,!1,"",sd);return e._reactRootContainer=s,e[en]=s.current,Fi(e.nodeType===8?e.parentNode:e),er(function(){Rl(t,s,n,r)}),s}function $l(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=yl(l);a.call(s)}}Rl(t,l,e,i)}else l=zm(n,t,e,i,r);return yl(l)}zf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=hi(t.pendingLanes);n!==0&&(Xs(t,n|1),lt(t,Me()),!(te&6)&&($r=Me()+500,_n()))}break;case 13:er(function(){var r=tn(e,1);if(r!==null){var i=Ke();Tt(r,e,1,i)}}),Pu(e,1)}};qs=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=Ke();Tt(t,e,134217728,n)}Pu(e,134217728)}};If=function(e){if(e.tag===13){var t=En(e),n=tn(e,t);if(n!==null){var r=Ke();Tt(n,e,t,r)}Pu(e,t)}};_f=function(){return ie};Af=function(e,t){var n=ie;try{return ie=e,t()}finally{ie=n}};Ga=function(e,t,n){switch(t){case"input":if(ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Dl(r);if(!i)throw Error(D(90));ff(r),ba(r,i)}}}break;case"textarea":hf(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};Sf=ku;Cf=er;var Im={usingClientEntryPoint:!1,Events:[eo,gr,Dl,xf,wf,ku]},li={findFiberByHostInstance:Un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_m={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kf(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||Tm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{kl=Mo.inject(_m),Bt=Mo}catch{}}ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Im;ht.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(t))throw Error(D(200));return Pm(e,t,null,n)};ht.createRoot=function(e,t){if(!zu(e))throw Error(D(299));var n=!1,r="",i=ip;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Du(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,Fi(e.nodeType===8?e.parentNode:e),new Tu(t)};ht.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=kf(t),e=e===null?null:e.stateNode,e};ht.flushSync=function(e){return er(e)};ht.hydrate=function(e,t,n){if(!Fl(t))throw Error(D(200));return $l(null,e,t,!0,n)};ht.hydrateRoot=function(e,t,n){if(!zu(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=ip;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=rp(t,null,e,1,n??null,i,!1,o,l),e[en]=t.current,Fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ol(t)};ht.render=function(e,t,n){if(!Fl(t))throw Error(D(200));return $l(null,e,t,!1,n)};ht.unmountComponentAtNode=function(e){if(!Fl(e))throw Error(D(40));return e._reactRootContainer?(er(function(){$l(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};ht.unstable_batchedUpdates=ku;ht.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fl(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return $l(e,t,n,!1,r)};ht.version="18.2.0-next-9e3b772b8-20220608";function op(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(op)}catch(e){console.error(e)}}op(),nf.exports=ht;var Iu=nf.exports;const Am=Vd(Iu),Rm=Wd({__proto__:null,default:Am},[Iu]);var ud=Iu;_a.createRoot=ud.createRoot,_a.hydrateRoot=ud.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var ke;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ke||(ke={}));const cd="popstate";function Om(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Yi("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nr(i)}return $m(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fm(){return Math.random().toString(36).substr(2,8)}function dd(e,t){return{usr:e.state,key:e.key,idx:t}}function Yi(e,t,n,r){return n===void 0&&(n=null),Se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?on(t):t,{state:n,key:t&&t.key||r||Fm()})}function nr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function on(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function $m(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=ke.Pop,s=null,c=d();c==null&&(c=0,l.replaceState(Se({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function h(){a=ke.Pop;let k=d(),p=k==null?null:k-c;c=k,s&&s({action:a,location:w.location,delta:p})}function m(k,p){a=ke.Push;let f=Yi(w.location,k,p);n&&n(f,k),c=d()+1;let g=dd(f,c),N=w.createHref(f);try{l.pushState(g,"",N)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(N)}o&&s&&s({action:a,location:w.location,delta:1})}function x(k,p){a=ke.Replace;let f=Yi(w.location,k,p);n&&n(f,k),c=d();let g=dd(f,c),N=w.createHref(f);l.replaceState(g,"",N),o&&s&&s({action:a,location:w.location,delta:0})}function S(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof k=="string"?k:nr(k);return G(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return e(i,l)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(cd,h),s=k,()=>{i.removeEventListener(cd,h),s=null}},createHref(k){return t(i,k)},createURL:S,encodeLocation(k){let p=S(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(k){return l.go(k)}};return w}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));const Um=new Set(["lazy","caseSensitive","path","id","index","children"]);function bm(e){return e.index===!0}function Es(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let l=[...n,o],a=typeof i.id=="string"?i.id:l.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),bm(i)){let s=Se({},i,t(i),{id:a});return r[a]=s,s}else{let s=Se({},i,t(i),{id:a,children:void 0});return r[a]=s,i.children&&(s.children=Es(i.children,t,l,r)),s}})}function jr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?on(t):t,i=Gr(r.pathname||"/",n);if(i==null)return null;let o=lp(e);Hm(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=qm(o[a],t2(i));return l}function Bm(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function lp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(G(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=qt([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lp(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:Zm(c,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of ap(o.path))i(o,l,s)}),t}function ap(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=ap(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Hm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Xm(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Wm=/^:[\w-]+$/,Vm=3,Qm=2,Ym=1,Gm=10,Km=-2,fd=e=>e==="*";function Zm(e,t){let n=e.split("/"),r=n.length;return n.some(fd)&&(r+=Km),t&&(r+=Qm),n.filter(i=>!fd(i)).reduce((i,o)=>i+(Wm.test(o)?Vm:o===""?Ym:Gm),r)}function Xm(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function qm(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=Jm({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:qt([i,d.pathname]),pathnameBase:o2(qt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=qt([i,d.pathnameBase]))}return o}function Jm(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=e2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let w=a[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const S=a[h];return x&&!S?c[m]=void 0:c[m]=n2(S||"",m),c},{}),pathname:o,pathnameBase:l,pattern:e}}function e2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),tr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function t2(e){try{return decodeURI(e)}catch(t){return tr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function n2(e,t){try{return decodeURIComponent(e)}catch(n){return tr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function r2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?on(e):e;return{pathname:n?n.startsWith("/")?n:i2(n,t):t,search:l2(r),hash:a2(i)}}function i2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ma(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _u(e,t){let n=sp(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Au(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=on(e):(i=Se({},e),G(!i.pathname||!i.pathname.includes("?"),Ma("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),Ma("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),Ma("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let s=r2(i,a),c=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const qt=e=>e.join("/").replace(/\/\/+/g,"/"),o2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),l2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,a2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Ru{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function up(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cp=["post","put","patch","delete"],s2=new Set(cp),u2=["get",...cp],c2=new Set(u2),d2=new Set([301,302,303,307,308]),f2=new Set([307,308]),Ea={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},p2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ai={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},dp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,h2=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),fp="remix-router-transitions";function m2(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=C=>({hasErrorBoundary:y(C)})}else i=h2;let o={},l=Es(e.routes,i,void 0,o),a,s=e.basename||"/",c=Se({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),d=null,h=new Set,m=null,x=null,S=null,w=e.hydrationData!=null,k=jr(l,e.history.location,s),p=null;if(k==null){let y=vt(404,{pathname:e.history.location.pathname}),{matches:C,route:M}=wd(l);k=C,p={[M.id]:y}}let f,g=k.some(y=>y.route.lazy),N=k.some(y=>y.route.loader);if(g)f=!1;else if(!N)f=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,C=e.hydrationData?e.hydrationData.errors:null;f=k.every(M=>M.route.loader&&M.route.loader.hydrate!==!0&&(y&&y[M.route.id]!==void 0||C&&C[M.route.id]!==void 0))}else f=e.hydrationData!=null;let L,v={historyAction:e.history.action,location:e.history.location,matches:k,initialized:f,navigation:Ea,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},j=ke.Pop,P=!1,_,b=!1,J=new Map,Ce=null,ye=!1,qe=!1,sn=[],_t=[],oe=new Map,z=0,O=-1,B=new Map,Z=new Set,ee=new Map,at=new Map,je=new Set,Be=new Map,Ne=new Map,st=!1;function An(){if(d=e.history.listen(y=>{let{action:C,location:M,delta:T}=y;if(st){st=!1;return}tr(Ne.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let R=qu({currentLocation:v.location,nextLocation:M,historyAction:C});if(R&&T!=null){st=!0,e.history.go(T*-1),lo(R,{state:"blocked",location:M,proceed(){lo(R,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),e.history.go(T)},reset(){let K=new Map(v.blockers);K.set(R,ai),Te({blockers:K})}});return}return Rn(C,M)}),n){M2(t,J);let y=()=>E2(t,J);t.addEventListener("pagehide",y),Ce=()=>t.removeEventListener("pagehide",y)}return v.initialized||Rn(ke.Pop,v.location,{initialHydration:!0}),L}function Wt(){d&&d(),Ce&&Ce(),h.clear(),_&&_.abort(),v.fetchers.forEach((y,C)=>oo(C)),v.blockers.forEach((y,C)=>Xu(C))}function Zr(y){return h.add(y),()=>h.delete(y)}function Te(y,C){C===void 0&&(C={}),v=Se({},v,y);let M=[],T=[];c.v7_fetcherPersist&&v.fetchers.forEach((R,K)=>{R.state==="idle"&&(je.has(K)?T.push(K):M.push(K))}),[...h].forEach(R=>R(v,{deletedFetchers:T,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),c.v7_fetcherPersist&&(M.forEach(R=>v.fetchers.delete(R)),T.forEach(R=>oo(R)))}function Je(y,C,M){var T,R;let{flushSync:K}=M===void 0?{}:M,W=v.actionData!=null&&v.navigation.formMethod!=null&&Lt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((T=y.state)==null?void 0:T._isRedirect)!==!0,H;C.actionData?Object.keys(C.actionData).length>0?H=C.actionData:H=null:W?H=v.actionData:H=null;let F=C.loaderData?xd(v.loaderData,C.loaderData,C.matches||[],C.errors):v.loaderData,q=v.blockers;q.size>0&&(q=new Map(q),q.forEach((ae,Fe)=>q.set(Fe,ai)));let ze=P===!0||v.navigation.formMethod!=null&&Lt(v.navigation.formMethod)&&((R=y.state)==null?void 0:R._isRedirect)!==!0;a&&(l=a,a=void 0),ye||j===ke.Pop||(j===ke.Push?e.history.push(y,y.state):j===ke.Replace&&e.history.replace(y,y.state));let Q;if(j===ke.Pop){let ae=J.get(v.location.pathname);ae&&ae.has(y.pathname)?Q={currentLocation:v.location,nextLocation:y}:J.has(y.pathname)&&(Q={currentLocation:y,nextLocation:v.location})}else if(b){let ae=J.get(v.location.pathname);ae?ae.add(y.pathname):(ae=new Set([y.pathname]),J.set(v.location.pathname,ae)),Q={currentLocation:v.location,nextLocation:y}}Te(Se({},C,{actionData:H,loaderData:F,historyAction:j,location:y,initialized:!0,navigation:Ea,revalidation:"idle",restoreScrollPosition:ec(y,C.matches||v.matches),preventScrollReset:ze,blockers:q}),{viewTransitionOpts:Q,flushSync:K===!0}),j=ke.Pop,P=!1,b=!1,ye=!1,qe=!1,sn=[],_t=[]}async function Vu(y,C){if(typeof y=="number"){e.history.go(y);return}let M=Ls(v.location,v.matches,s,c.v7_prependBasename,y,c.v7_relativeSplatPath,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:T,submission:R,error:K}=pd(c.v7_normalizeFormMethod,!1,M,C),W=v.location,H=Yi(v.location,T,C&&C.state);H=Se({},H,e.history.encodeLocation(H));let F=C&&C.replace!=null?C.replace:void 0,q=ke.Push;F===!0?q=ke.Replace:F===!1||R!=null&&Lt(R.formMethod)&&R.formAction===v.location.pathname+v.location.search&&(q=ke.Replace);let ze=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,Q=(C&&C.unstable_flushSync)===!0,ae=qu({currentLocation:W,nextLocation:H,historyAction:q});if(ae){lo(ae,{state:"blocked",location:H,proceed(){lo(ae,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),Vu(y,C)},reset(){let Fe=new Map(v.blockers);Fe.set(ae,ai),Te({blockers:Fe})}});return}return await Rn(q,H,{submission:R,pendingError:K,preventScrollReset:ze,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:Q})}function qp(){if(Gl(),Te({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Rn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Rn(j||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Rn(y,C,M){_&&_.abort(),_=null,j=y,ye=(M&&M.startUninterruptedRevalidation)===!0,ah(v.location,v.matches),P=(M&&M.preventScrollReset)===!0,b=(M&&M.enableViewTransition)===!0;let T=a||l,R=M&&M.overrideNavigation,K=jr(T,C,s),W=(M&&M.flushSync)===!0;if(!K){let Fe=vt(404,{pathname:C.pathname}),{matches:gt,route:Ie}=wd(T);Kl(),Je(C,{matches:gt,loaderData:{},errors:{[Ie.id]:Fe}},{flushSync:W});return}if(v.initialized&&!qe&&w2(v.location,C)&&!(M&&M.submission&&Lt(M.submission.formMethod))){Je(C,{matches:K},{flushSync:W});return}_=new AbortController;let H=ui(e.history,C,_.signal,M&&M.submission),F,q;if(M&&M.pendingError)q={[Li(K).route.id]:M.pendingError};else if(M&&M.submission&&Lt(M.submission.formMethod)){let Fe=await Jp(H,C,M.submission,K,{replace:M.replace,flushSync:W});if(Fe.shortCircuited)return;F=Fe.pendingActionData,q=Fe.pendingActionError,R=La(C,M.submission),W=!1,H=new Request(H.url,{signal:H.signal})}let{shortCircuited:ze,loaderData:Q,errors:ae}=await eh(H,C,K,R,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,W,F,q);ze||(_=null,Je(C,Se({matches:K},F?{actionData:F}:{},{loaderData:Q,errors:ae})))}async function Jp(y,C,M,T,R){R===void 0&&(R={}),Gl();let K=N2(C,M);Te({navigation:K},{flushSync:R.flushSync===!0});let W,H=Ps(T,C);if(!H.route.action&&!H.route.lazy)W={type:xe.error,error:vt(405,{method:y.method,pathname:C.pathname,routeId:H.route.id})};else if(W=await si("action",y,H,T,o,i,s,c.v7_relativeSplatPath),y.signal.aborted)return{shortCircuited:!0};if(Wn(W)){let F;return R&&R.replace!=null?F=R.replace:F=W.location===v.location.pathname+v.location.search,await Xr(v,W,{submission:M,replace:F}),{shortCircuited:!0}}if(Nr(W)){let F=Li(T,H.route.id);return(R&&R.replace)!==!0&&(j=ke.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:W.error}}}if(Hn(W))throw vt(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:W.data}}}async function eh(y,C,M,T,R,K,W,H,F,q,ze){let Q=T||La(C,R),ae=R||K||jd(Q),Fe=a||l,[gt,Ie]=hd(e.history,v,M,ae,C,c.v7_partialHydration&&H===!0,qe,sn,_t,je,ee,Z,Fe,s,q,ze);if(Kl(le=>!(M&&M.some(pe=>pe.route.id===le))||gt&&gt.some(pe=>pe.route.id===le)),O=++z,gt.length===0&&Ie.length===0){let le=Ku();return Je(C,Se({matches:M,loaderData:{},errors:ze||null},q?{actionData:q}:{},le?{fetchers:new Map(v.fetchers)}:{}),{flushSync:F}),{shortCircuited:!0}}if(!ye&&(!c.v7_partialHydration||!H)){Ie.forEach(pe=>{let At=v.fetchers.get(pe.key),so=ci(void 0,At?At.data:void 0);v.fetchers.set(pe.key,so)});let le=q||v.actionData;Te(Se({navigation:Q},le?Object.keys(le).length===0?{actionData:null}:{actionData:le}:{},Ie.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:F})}Ie.forEach(le=>{oe.has(le.key)&&cn(le.key),le.controller&&oe.set(le.key,le.controller)});let lr=()=>Ie.forEach(le=>cn(le.key));_&&_.signal.addEventListener("abort",lr);let{results:Zl,loaderResults:ar,fetcherResults:dn}=await Qu(v.matches,M,gt,Ie,y);if(y.signal.aborted)return{shortCircuited:!0};_&&_.signal.removeEventListener("abort",lr),Ie.forEach(le=>oe.delete(le.key));let On=Sd(Zl);if(On){if(On.idx>=gt.length){let le=Ie[On.idx-gt.length].key;Z.add(le)}return await Xr(v,On.result,{replace:W}),{shortCircuited:!0}}let{loaderData:Xl,errors:ql}=yd(v,M,gt,ar,ze,Ie,dn,Be);Be.forEach((le,pe)=>{le.subscribe(At=>{(At||le.done)&&Be.delete(pe)})});let Jl=Ku(),sr=Zu(O),ao=Jl||sr||Ie.length>0;return Se({loaderData:Xl,errors:ql},ao?{fetchers:new Map(v.fetchers)}:{})}function th(y,C,M,T){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");oe.has(y)&&cn(y);let R=(T&&T.unstable_flushSync)===!0,K=a||l,W=Ls(v.location,v.matches,s,c.v7_prependBasename,M,c.v7_relativeSplatPath,C,T==null?void 0:T.relative),H=jr(K,W,s);if(!H){qr(y,C,vt(404,{pathname:W}),{flushSync:R});return}let{path:F,submission:q,error:ze}=pd(c.v7_normalizeFormMethod,!0,W,T);if(ze){qr(y,C,ze,{flushSync:R});return}let Q=Ps(H,F);if(P=(T&&T.preventScrollReset)===!0,q&&Lt(q.formMethod)){nh(y,C,F,Q,H,R,q);return}ee.set(y,{routeId:C,path:F}),rh(y,C,F,Q,H,R,q)}async function nh(y,C,M,T,R,K,W){if(Gl(),ee.delete(y),!T.route.action&&!T.route.lazy){let pe=vt(405,{method:W.formMethod,pathname:M,routeId:C});qr(y,C,pe,{flushSync:K});return}let H=v.fetchers.get(y);un(y,k2(W,H),{flushSync:K});let F=new AbortController,q=ui(e.history,M,F.signal,W);oe.set(y,F);let ze=z,Q=await si("action",q,T,R,o,i,s,c.v7_relativeSplatPath);if(q.signal.aborted){oe.get(y)===F&&oe.delete(y);return}if(c.v7_fetcherPersist&&je.has(y)){if(Wn(Q)||Nr(Q)){un(y,pn(void 0));return}}else{if(Wn(Q))if(oe.delete(y),O>ze){un(y,pn(void 0));return}else return Z.add(y),un(y,ci(W)),Xr(v,Q,{fetcherSubmission:W});if(Nr(Q)){qr(y,C,Q.error);return}}if(Hn(Q))throw vt(400,{type:"defer-action"});let ae=v.navigation.location||v.location,Fe=ui(e.history,ae,F.signal),gt=a||l,Ie=v.navigation.state!=="idle"?jr(gt,v.navigation.location,s):v.matches;G(Ie,"Didn't find any matches after fetcher action");let lr=++z;B.set(y,lr);let Zl=ci(W,Q.data);v.fetchers.set(y,Zl);let[ar,dn]=hd(e.history,v,Ie,W,ae,!1,qe,sn,_t,je,ee,Z,gt,s,{[T.route.id]:Q.data},void 0);dn.filter(pe=>pe.key!==y).forEach(pe=>{let At=pe.key,so=v.fetchers.get(At),uh=ci(void 0,so?so.data:void 0);v.fetchers.set(At,uh),oe.has(At)&&cn(At),pe.controller&&oe.set(At,pe.controller)}),Te({fetchers:new Map(v.fetchers)});let On=()=>dn.forEach(pe=>cn(pe.key));F.signal.addEventListener("abort",On);let{results:Xl,loaderResults:ql,fetcherResults:Jl}=await Qu(v.matches,Ie,ar,dn,Fe);if(F.signal.aborted)return;F.signal.removeEventListener("abort",On),B.delete(y),oe.delete(y),dn.forEach(pe=>oe.delete(pe.key));let sr=Sd(Xl);if(sr){if(sr.idx>=ar.length){let pe=dn[sr.idx-ar.length].key;Z.add(pe)}return Xr(v,sr.result)}let{loaderData:ao,errors:le}=yd(v,v.matches,ar,ql,void 0,dn,Jl,Be);if(v.fetchers.has(y)){let pe=pn(Q.data);v.fetchers.set(y,pe)}Zu(lr),v.navigation.state==="loading"&&lr>O?(G(j,"Expected pending action"),_&&_.abort(),Je(v.navigation.location,{matches:Ie,loaderData:ao,errors:le,fetchers:new Map(v.fetchers)})):(Te({errors:le,loaderData:xd(v.loaderData,ao,Ie,le),fetchers:new Map(v.fetchers)}),qe=!1)}async function rh(y,C,M,T,R,K,W){let H=v.fetchers.get(y);un(y,ci(W,H?H.data:void 0),{flushSync:K});let F=new AbortController,q=ui(e.history,M,F.signal);oe.set(y,F);let ze=z,Q=await si("loader",q,T,R,o,i,s,c.v7_relativeSplatPath);if(Hn(Q)&&(Q=await mp(Q,q.signal,!0)||Q),oe.get(y)===F&&oe.delete(y),!q.signal.aborted){if(je.has(y)){un(y,pn(void 0));return}if(Wn(Q))if(O>ze){un(y,pn(void 0));return}else{Z.add(y),await Xr(v,Q);return}if(Nr(Q)){qr(y,C,Q.error);return}G(!Hn(Q),"Unhandled fetcher deferred data"),un(y,pn(Q.data))}}async function Xr(y,C,M){let{submission:T,fetcherSubmission:R,replace:K}=M===void 0?{}:M;C.revalidate&&(qe=!0);let W=Yi(y.location,C.location,{_isRedirect:!0});if(G(W,"Expected a location on the redirect navigation"),n){let ae=!1;if(C.reloadDocument)ae=!0;else if(dp.test(C.location)){const Fe=e.history.createURL(C.location);ae=Fe.origin!==t.location.origin||Gr(Fe.pathname,s)==null}if(ae){K?t.location.replace(C.location):t.location.assign(C.location);return}}_=null;let H=K===!0?ke.Replace:ke.Push,{formMethod:F,formAction:q,formEncType:ze}=y.navigation;!T&&!R&&F&&q&&ze&&(T=jd(y.navigation));let Q=T||R;if(f2.has(C.status)&&Q&&Lt(Q.formMethod))await Rn(H,W,{submission:Se({},Q,{formAction:C.location}),preventScrollReset:P});else{let ae=La(W,T);await Rn(H,W,{overrideNavigation:ae,fetcherSubmission:R,preventScrollReset:P})}}async function Qu(y,C,M,T,R){let K=await Promise.all([...M.map(F=>si("loader",R,F,C,o,i,s,c.v7_relativeSplatPath)),...T.map(F=>F.matches&&F.match&&F.controller?si("loader",ui(e.history,F.path,F.controller.signal),F.match,F.matches,o,i,s,c.v7_relativeSplatPath):{type:xe.error,error:vt(404,{pathname:F.path})})]),W=K.slice(0,M.length),H=K.slice(M.length);return await Promise.all([Cd(y,M,W,W.map(()=>R.signal),!1,v.loaderData),Cd(y,T.map(F=>F.match),H,T.map(F=>F.controller?F.controller.signal:null),!0)]),{results:K,loaderResults:W,fetcherResults:H}}function Gl(){qe=!0,sn.push(...Kl()),ee.forEach((y,C)=>{oe.has(C)&&(_t.push(C),cn(C))})}function un(y,C,M){M===void 0&&(M={}),v.fetchers.set(y,C),Te({fetchers:new Map(v.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function qr(y,C,M,T){T===void 0&&(T={});let R=Li(v.matches,C);oo(y),Te({errors:{[R.route.id]:M},fetchers:new Map(v.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Yu(y){return c.v7_fetcherPersist&&(at.set(y,(at.get(y)||0)+1),je.has(y)&&je.delete(y)),v.fetchers.get(y)||p2}function oo(y){let C=v.fetchers.get(y);oe.has(y)&&!(C&&C.state==="loading"&&B.has(y))&&cn(y),ee.delete(y),B.delete(y),Z.delete(y),je.delete(y),v.fetchers.delete(y)}function ih(y){if(c.v7_fetcherPersist){let C=(at.get(y)||0)-1;C<=0?(at.delete(y),je.add(y)):at.set(y,C)}else oo(y);Te({fetchers:new Map(v.fetchers)})}function cn(y){let C=oe.get(y);G(C,"Expected fetch controller: "+y),C.abort(),oe.delete(y)}function Gu(y){for(let C of y){let M=Yu(C),T=pn(M.data);v.fetchers.set(C,T)}}function Ku(){let y=[],C=!1;for(let M of Z){let T=v.fetchers.get(M);G(T,"Expected fetcher: "+M),T.state==="loading"&&(Z.delete(M),y.push(M),C=!0)}return Gu(y),C}function Zu(y){let C=[];for(let[M,T]of B)if(T<y){let R=v.fetchers.get(M);G(R,"Expected fetcher: "+M),R.state==="loading"&&(cn(M),B.delete(M),C.push(M))}return Gu(C),C.length>0}function oh(y,C){let M=v.blockers.get(y)||ai;return Ne.get(y)!==C&&Ne.set(y,C),M}function Xu(y){v.blockers.delete(y),Ne.delete(y)}function lo(y,C){let M=v.blockers.get(y)||ai;G(M.state==="unblocked"&&C.state==="blocked"||M.state==="blocked"&&C.state==="blocked"||M.state==="blocked"&&C.state==="proceeding"||M.state==="blocked"&&C.state==="unblocked"||M.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+C.state);let T=new Map(v.blockers);T.set(y,C),Te({blockers:T})}function qu(y){let{currentLocation:C,nextLocation:M,historyAction:T}=y;if(Ne.size===0)return;Ne.size>1&&tr(!1,"A router only supports one blocker at a time");let R=Array.from(Ne.entries()),[K,W]=R[R.length-1],H=v.blockers.get(K);if(!(H&&H.state==="proceeding")&&W({currentLocation:C,nextLocation:M,historyAction:T}))return K}function Kl(y){let C=[];return Be.forEach((M,T)=>{(!y||y(T))&&(M.cancel(),C.push(T),Be.delete(T))}),C}function lh(y,C,M){if(m=y,S=C,x=M||null,!w&&v.navigation===Ea){w=!0;let T=ec(v.location,v.matches);T!=null&&Te({restoreScrollPosition:T})}return()=>{m=null,S=null,x=null}}function Ju(y,C){return x&&x(y,C.map(T=>Bm(T,v.loaderData)))||y.key}function ah(y,C){if(m&&S){let M=Ju(y,C);m[M]=S()}}function ec(y,C){if(m){let M=Ju(y,C),T=m[M];if(typeof T=="number")return T}return null}function sh(y){o={},a=Es(y,i,void 0,o)}return L={get basename(){return s},get future(){return c},get state(){return v},get routes(){return l},get window(){return t},initialize:An,subscribe:Zr,enableScrollRestoration:lh,navigate:Vu,fetch:th,revalidate:qp,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Yu,deleteFetcher:ih,dispose:Wt,getBlocker:oh,deleteBlocker:Xu,_internalFetchControllers:oe,_internalActiveDeferreds:Be,_internalSetRoutes:sh},L}function g2(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ls(e,t,n,r,i,o,l,a){let s,c;if(l){s=[];for(let h of t)if(s.push(h),h.route.id===l){c=h;break}}else s=t,c=t[t.length-1];let d=Au(i||".",_u(s,o),Gr(e.pathname,n)||e.pathname,a==="path");return i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Ou(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:qt([n,d.pathname])),nr(d)}function pd(e,t,n,r){if(!r||!g2(r))return{path:n};if(r.formMethod&&!j2(r.formMethod))return{path:n,error:vt(405,{method:r.formMethod})};let i=()=>({path:n,error:vt(400,{type:"invalid-body"})}),o=r.formMethod||"get",l=e?o.toUpperCase():o.toLowerCase(),a=hp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Lt(l))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,S)=>{let[w,k]=S;return""+x+w+"="+k+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Lt(l))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let s,c;if(r.formData)s=Ds(r.formData),c=r.formData;else if(r.body instanceof FormData)s=Ds(r.body),c=r.body;else if(r.body instanceof URLSearchParams)s=r.body,c=vd(s);else if(r.body==null)s=new URLSearchParams,c=new FormData;else try{s=new URLSearchParams(r.body),c=vd(s)}catch{return i()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Lt(d.formMethod))return{path:n,submission:d};let h=on(n);return t&&h.search&&Ou(h.search)&&s.append("index",""),h.search="?"+s,{path:nr(h),submission:d}}function v2(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function hd(e,t,n,r,i,o,l,a,s,c,d,h,m,x,S,w){let k=w?Object.values(w)[0]:S?Object.values(S)[0]:void 0,p=e.createURL(t.location),f=e.createURL(i),g=w?Object.keys(w)[0]:void 0,L=v2(n,g).filter((j,P)=>{let{route:_}=j;if(_.lazy)return!0;if(_.loader==null)return!1;if(o)return _.loader.hydrate?!0:t.loaderData[_.id]===void 0&&(!t.errors||t.errors[_.id]===void 0);if(y2(t.loaderData,t.matches[P],j)||a.some(Ce=>Ce===j.route.id))return!0;let b=t.matches[P],J=j;return md(j,Se({currentUrl:p,currentParams:b.params,nextUrl:f,nextParams:J.params},r,{actionResult:k,defaultShouldRevalidate:l||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||pp(b,J)}))}),v=[];return d.forEach((j,P)=>{if(o||!n.some(ye=>ye.route.id===j.routeId)||c.has(P))return;let _=jr(m,j.path,x);if(!_){v.push({key:P,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let b=t.fetchers.get(P),J=Ps(_,j.path),Ce=!1;h.has(P)?Ce=!1:s.includes(P)?Ce=!0:b&&b.state!=="idle"&&b.data===void 0?Ce=l:Ce=md(J,Se({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:k,defaultShouldRevalidate:l})),Ce&&v.push({key:P,routeId:j.routeId,path:j.path,matches:_,match:J,controller:new AbortController})}),[L,v]}function y2(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function pp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function md(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function gd(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let o={};for(let l in r){let s=i[l]!==void 0&&l!=="hasErrorBoundary";tr(!s,'Route "'+i.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!Um.has(l)&&(o[l]=r[l])}Object.assign(i,o),Object.assign(i,Se({},t(i),{lazy:void 0}))}async function si(e,t,n,r,i,o,l,a,s){s===void 0&&(s={});let c,d,h,m=w=>{let k,p=new Promise((f,g)=>k=g);return h=()=>k(),t.signal.addEventListener("abort",h),Promise.race([w({request:t,params:n.params,context:s.requestContext}),p])};try{let w=n.route[e];if(n.route.lazy)if(w){let k,p=await Promise.all([m(w).catch(f=>{k=f}),gd(n.route,o,i)]);if(k)throw k;d=p[0]}else if(await gd(n.route,o,i),w=n.route[e],w)d=await m(w);else if(e==="action"){let k=new URL(t.url),p=k.pathname+k.search;throw vt(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:xe.data,data:void 0};else if(w)d=await m(w);else{let k=new URL(t.url),p=k.pathname+k.search;throw vt(404,{pathname:p})}G(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(w){c=xe.error,d=w}finally{h&&t.signal.removeEventListener("abort",h)}if(C2(d)){let w=d.status;if(d2.has(w)){let p=d.headers.get("Location");if(G(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!dp.test(p))p=Ls(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,p,a);else if(!s.isStaticRequest){let f=new URL(t.url),g=p.startsWith("//")?new URL(f.protocol+p):new URL(p),N=Gr(g.pathname,l)!=null;g.origin===f.origin&&N&&(p=g.pathname+g.search+g.hash)}if(s.isStaticRequest)throw d.headers.set("Location",p),d;return{type:xe.redirect,status:w,location:p,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:c===xe.error?xe.error:xe.data,response:d};let k;try{let p=d.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?d.body==null?k=null:k=await d.json():k=await d.text()}catch(p){return{type:xe.error,error:p}}return c===xe.error?{type:c,error:new Ru(w,d.statusText,k),headers:d.headers}:{type:xe.data,data:k,statusCode:d.status,headers:d.headers}}if(c===xe.error)return{type:c,error:d};if(S2(d)){var x,S;return{type:xe.deferred,deferredData:d,statusCode:(x=d.init)==null?void 0:x.status,headers:((S=d.init)==null?void 0:S.headers)&&new Headers(d.init.headers)}}return{type:xe.data,data:d}}function ui(e,t,n,r){let i=e.createURL(hp(t)).toString(),o={signal:n};if(r&&Lt(r.formMethod)){let{formMethod:l,formEncType:a}=r;o.method=l.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=Ds(r.formData):o.body=r.formData}return new Request(i,o)}function Ds(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function vd(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function x2(e,t,n,r,i){let o={},l=null,a,s=!1,c={};return n.forEach((d,h)=>{let m=t[h].route.id;if(G(!Wn(d),"Cannot handle redirect results in processLoaderData"),Nr(d)){let x=Li(e,m),S=d.error;r&&(S=Object.values(r)[0],r=void 0),l=l||{},l[x.route.id]==null&&(l[x.route.id]=S),o[m]=void 0,s||(s=!0,a=up(d.error)?d.error.status:500),d.headers&&(c[m]=d.headers)}else Hn(d)?(i.set(m,d.deferredData),o[m]=d.deferredData.data):o[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(a=d.statusCode),d.headers&&(c[m]=d.headers)}),r&&(l=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:l,statusCode:a||200,loaderHeaders:c}}function yd(e,t,n,r,i,o,l,a){let{loaderData:s,errors:c}=x2(t,n,r,i,a);for(let d=0;d<o.length;d++){let{key:h,match:m,controller:x}=o[d];G(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let S=l[d];if(!(x&&x.signal.aborted))if(Nr(S)){let w=Li(e.matches,m==null?void 0:m.route.id);c&&c[w.route.id]||(c=Se({},c,{[w.route.id]:S.error})),e.fetchers.delete(h)}else if(Wn(S))G(!1,"Unhandled fetcher revalidation redirect");else if(Hn(S))G(!1,"Unhandled fetcher deferred data");else{let w=pn(S.data);e.fetchers.set(h,w)}}return{loaderData:s,errors:c}}function xd(e,t,n,r){let i=Se({},t);for(let o of n){let l=o.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&o.route.loader&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function Li(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function wd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function vt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",a='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Ru(e||500,l,new Error(a),!0)}function Sd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Wn(n))return{result:n,idx:t}}}function hp(e){let t=typeof e=="string"?on(e):e;return nr(Se({},t,{hash:""}))}function w2(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Hn(e){return e.type===xe.deferred}function Nr(e){return e.type===xe.error}function Wn(e){return(e&&e.type)===xe.redirect}function S2(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function C2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function j2(e){return c2.has(e.toLowerCase())}function Lt(e){return s2.has(e.toLowerCase())}async function Cd(e,t,n,r,i,o){for(let l=0;l<n.length;l++){let a=n[l],s=t[l];if(!s)continue;let c=e.find(h=>h.route.id===s.route.id),d=c!=null&&!pp(c,s)&&(o&&o[s.route.id])!==void 0;if(Hn(a)&&(i||d)){let h=r[l];G(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await mp(a,h,i).then(m=>{m&&(n[l]=m||n[l])})}}}async function mp(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:xe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:xe.error,error:i}}return{type:xe.data,data:e.deferredData.data}}}function Ou(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ps(e,t){let n=typeof t=="string"?on(t).search:t.search;if(e[e.length-1].route.index&&Ou(n||""))return e[e.length-1];let r=sp(e);return r[r.length-1]}function jd(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:l}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function La(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function N2(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ci(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function k2(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function pn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function M2(e,t){try{let n=e.sessionStorage.getItem(fp);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function E2(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(fp,JSON.stringify(n))}catch(r){tr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gi(){return Gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Gi.apply(this,arguments)}const Ul=E.createContext(null),gp=E.createContext(null),or=E.createContext(null),bl=E.createContext(null),ln=E.createContext({outlet:null,matches:[],isDataRoute:!1}),vp=E.createContext(null);function L2(e,t){let{relative:n}=t===void 0?{}:t;no()||G(!1);let{basename:r,navigator:i}=E.useContext(or),{hash:o,pathname:l,search:a}=xp(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:qt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function no(){return E.useContext(bl)!=null}function an(){return no()||G(!1),E.useContext(bl).location}function yp(e){E.useContext(or).static||E.useLayoutEffect(e)}function D2(){let{isDataRoute:e}=E.useContext(ln);return e?H2():P2()}function P2(){no()||G(!1);let e=E.useContext(Ul),{basename:t,future:n,navigator:r}=E.useContext(or),{matches:i}=E.useContext(ln),{pathname:o}=an(),l=JSON.stringify(_u(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return yp(()=>{a.current=!0}),E.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Au(c,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:qt([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,l,o,e])}const T2=E.createContext(null);function z2(e){let t=E.useContext(ln).outlet;return t&&E.createElement(T2.Provider,{value:e},t)}function Fu(){let{matches:e}=E.useContext(ln),t=e[e.length-1];return t?t.params:{}}function xp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(or),{matches:i}=E.useContext(ln),{pathname:o}=an(),l=JSON.stringify(_u(i,r.v7_relativeSplatPath));return E.useMemo(()=>Au(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function I2(e,t,n,r){no()||G(!1);let{navigator:i}=E.useContext(or),{matches:o}=E.useContext(ln),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=an(),d;if(t){var h;let k=typeof t=="string"?on(t):t;s==="/"||(h=k.pathname)!=null&&h.startsWith(s)||G(!1),d=k}else d=c;let m=d.pathname||"/",x=s==="/"?m:m.slice(s.length)||"/",S=jr(e,{pathname:x}),w=F2(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:qt([s,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:qt([s,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),o,n,r);return t&&w?E.createElement(bl.Provider,{value:{location:Gi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ke.Pop}},w):w}function _2(){let e=B2(),t=up(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const A2=E.createElement(_2,null);class R2 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(ln.Provider,{value:this.props.routeContext},E.createElement(vp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function O2(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Ul);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(ln.Provider,{value:t},r)}function F2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||G(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let h=l[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:m,errors:x}=n,S=h.route.loader&&m[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||S){s=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,h,m)=>{let x,S=!1,w=null,k=null;n&&(x=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||A2,s&&(c<0&&m===0?(W2("route-fallback",!1),S=!0,k=null):c===m&&(S=!0,k=h.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,m+1)),f=()=>{let g;return x?g=w:S?g=k:h.route.Component?g=E.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=d,E.createElement(O2,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?E.createElement(R2,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var wp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(wp||{}),xl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(xl||{});function $2(e){let t=E.useContext(Ul);return t||G(!1),t}function U2(e){let t=E.useContext(gp);return t||G(!1),t}function b2(e){let t=E.useContext(ln);return t||G(!1),t}function Sp(e){let t=b2(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function B2(){var e;let t=E.useContext(vp),n=U2(xl.UseRouteError),r=Sp(xl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function H2(){let{router:e}=$2(wp.UseNavigateStable),t=Sp(xl.UseNavigateStable),n=E.useRef(!1);return yp(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Gi({fromRouteId:t},o)))},[e,t])}const Nd={};function W2(e,t,n){!t&&!Nd[e]&&(Nd[e]=!0)}function V2(e){return z2(e.context)}function Vt(e){G(!1)}function Q2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ke.Pop,navigator:o,static:l=!1,future:a}=e;no()&&G(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:o,static:l,future:Gi({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=on(r));let{pathname:d="/",search:h="",hash:m="",state:x=null,key:S="default"}=r,w=E.useMemo(()=>{let k=Gr(d,s);return k==null?null:{location:{pathname:k,search:h,hash:m,state:x,key:S},navigationType:i}},[s,d,h,m,x,S,i]);return w==null?null:E.createElement(or.Provider,{value:c},E.createElement(bl.Provider,{children:n,value:w}))}new Promise(()=>{});function Ts(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Ts(r.props.children,o));return}r.type!==Vt&&G(!1),!r.props.index||!r.props.children||G(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ts(r.props.children,o)),n.push(l)}),n}function Y2(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ki(){return Ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ki.apply(this,arguments)}function G2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function K2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Z2(e,t){return e.button===0&&(!t||t==="_self")&&!K2(e)}const X2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function q2(e,t){return m2({basename:t==null?void 0:t.basename,future:Ki({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Om({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||J2(),routes:e,mapRouteProperties:Y2,window:t==null?void 0:t.window}).initialize()}function J2(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ki({},t,{errors:eg(t.errors)})),t}function eg(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Ru(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let l=new o(i.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const tg=E.createContext({isTransitioning:!1}),ng=E.createContext(new Map),rg="startTransition",kd=kh[rg],ig="flushSync",Md=Rm[ig];function og(e){kd?kd(e):e()}function di(e){Md?Md(e):e()}class lg{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function ag(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=E.useState(n.state),[l,a]=E.useState(),[s,c]=E.useState({isTransitioning:!1}),[d,h]=E.useState(),[m,x]=E.useState(),[S,w]=E.useState(),k=E.useRef(new Map),{v7_startTransition:p}=r||{},f=E.useCallback(j=>{p?og(j):j()},[p]),g=E.useCallback((j,P)=>{let{deletedFetchers:_,unstable_flushSync:b,unstable_viewTransitionOpts:J}=P;_.forEach(ye=>k.current.delete(ye)),j.fetchers.forEach((ye,qe)=>{ye.data!==void 0&&k.current.set(qe,ye.data)});let Ce=n.window==null||typeof n.window.document.startViewTransition!="function";if(!J||Ce){b?di(()=>o(j)):f(()=>o(j));return}if(b){di(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:J.currentLocation,nextLocation:J.nextLocation})});let ye=n.window.document.startViewTransition(()=>{di(()=>o(j))});ye.finished.finally(()=>{di(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})})}),di(()=>x(ye));return}m?(d&&d.resolve(),m.skipTransition(),w({state:j,currentLocation:J.currentLocation,nextLocation:J.nextLocation})):(a(j),c({isTransitioning:!0,flushSync:!1,currentLocation:J.currentLocation,nextLocation:J.nextLocation}))},[n.window,m,d,k,f]);E.useLayoutEffect(()=>n.subscribe(g),[n,g]),E.useEffect(()=>{s.isTransitioning&&!s.flushSync&&h(new lg)},[s]),E.useEffect(()=>{if(d&&l&&n.window){let j=l,P=d.promise,_=n.window.document.startViewTransition(async()=>{f(()=>o(j)),await P});_.finished.finally(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})}),x(_)}},[f,l,d,n.window]),E.useEffect(()=>{d&&l&&i.location.key===l.location.key&&d.resolve()},[d,m,i.location,l]),E.useEffect(()=>{!s.isTransitioning&&S&&(a(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[s.isTransitioning,S]),E.useEffect(()=>{},[]);let N=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,P,_)=>n.navigate(j,{state:P,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(j,P,_)=>n.navigate(j,{replace:!0,state:P,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),L=n.basename||"/",v=E.useMemo(()=>({router:n,navigator:N,static:!1,basename:L}),[n,N,L]);return E.createElement(E.Fragment,null,E.createElement(Ul.Provider,{value:v},E.createElement(gp.Provider,{value:i},E.createElement(ng.Provider,{value:k.current},E.createElement(tg.Provider,{value:s},E.createElement(Q2,{basename:L,location:i.location,navigationType:i.historyAction,navigator:N,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?E.createElement(sg,{routes:n.routes,future:n.future,state:i}):t))))),null)}function sg(e){let{routes:t,future:n,state:r}=e;return I2(t,void 0,r,n)}const ug=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$t=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:c,preventScrollReset:d,unstable_viewTransition:h}=t,m=G2(t,X2),{basename:x}=E.useContext(or),S,w=!1;if(typeof c=="string"&&cg.test(c)&&(S=c,ug))try{let g=new URL(window.location.href),N=c.startsWith("//")?new URL(g.protocol+c):new URL(c),L=Gr(N.pathname,x);N.origin===g.origin&&L!=null?c=L+N.search+N.hash:w=!0}catch{}let k=L2(c,{relative:i}),p=dg(c,{replace:l,state:a,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||p(g)}return E.createElement("a",Ki({},m,{href:S||k,onClick:w||o?r:f,ref:n,target:s}))});var Ed;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ed||(Ed={}));var Ld;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function dg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=D2(),c=an(),d=xp(e,{relative:l});return E.useCallback(h=>{if(Z2(h,n)){h.preventDefault();let m=r!==void 0?r:nr(c)===nr(d);s(e,{replace:m,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[c,s,d,r,i,n,e,o,l,a])}const kr="/reactdeploy4/assets/png_4-pi7uzOjc.png",Cp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:kr,alt:"",style:{width:"100%",aspectRatio:"1/1"},className:"img"})}),fg="/reactdeploy4/assets/img_2-0-A_q4Fj.png",jp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:fg,className:"img",alt:""})}),pg="data:image/svg+xml,%3csvg%20width='166'%20height='46'%20viewBox='0%200%20166%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M163.509%202.85256C164.173%202.40385%20164.677%201.99758%20164.993%201.6572C165.309%201.31683%20165.43%201.04907%20165.35%200.869385C165.269%200.6897%20164.989%200.601641%20164.525%200.610286C164.06%200.618932%20163.421%200.724112%20162.644%200.919758L13.3651%2038.2924C12.5937%2038.4844%2011.6985%2038.7633%2010.7312%2039.1131C9.76383%2039.4629%208.74352%2039.8766%207.72908%2040.3304C6.71465%2040.7841%205.72617%2041.269%204.82066%2041.757C3.91515%2042.245%203.11055%2042.7264%202.45325%2043.1735C1.7896%2043.6222%201.28524%2044.0285%200.969306%2044.3689C0.653372%2044.7093%200.532113%2044.977%200.612489%2045.1567C0.692866%2045.3364%200.973288%2045.4245%201.43761%2045.4158C1.90194%2045.4072%202.54098%2045.302%203.31783%2045.1063L152.597%207.73366C153.368%207.54169%20154.264%207.26277%20155.231%206.91299C156.198%206.56322%20157.219%206.14951%20158.233%205.69573C159.248%205.24196%20160.236%204.75709%20161.142%204.26911C162.047%203.78113%20162.852%203.29969%20163.509%202.85256Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",hg="data:image/svg+xml,%3csvg%20width='210'%20height='65'%20viewBox='0%200%20210%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M206.862%203.14189C207.731%202.6015%20208.398%202.12247%20208.825%201.73243C209.252%201.34239%20209.43%201.04907%20209.35%200.869386C209.269%200.689701%20208.932%200.627207%20208.356%200.685511C207.781%200.743816%20206.979%200.921765%20205.998%201.20909L17.3582%2056.1883C16.3835%2056.4712%2015.2465%2056.8583%2014.0127%2057.3272C12.7789%2057.7962%2011.4728%2058.3378%2010.1697%2058.9207C8.86656%2059.5036%207.59227%2060.1163%206.42029%2060.7235C5.24832%2061.3306%204.20187%2061.9203%203.34129%2062.4583C2.47269%2062.9987%201.80566%2063.4778%201.37871%2063.8678C0.951766%2064.2578%200.773341%2064.5511%200.853718%2064.7308C0.934094%2064.9105%201.27168%2064.973%201.84702%2064.9147C2.42236%2064.8564%203.22407%2064.6784%204.20587%2064.3911L192.845%209.41195C193.82%209.12904%20194.957%208.74194%20196.191%208.27297C197.425%207.804%20198.731%207.26244%20200.034%206.67954C201.337%206.09664%20202.611%205.48393%20203.783%204.87675C204.955%204.26958%20206.002%203.67995%20206.862%203.14189Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",mg="data:image/svg+xml,%3csvg%20width='256'%20height='157'%20viewBox='0%200%20256%20157'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M252.625%204.30344C253.587%203.28409%20254.303%202.41526%20254.731%201.74706C255.16%201.07887%20255.292%200.624523%20255.12%200.410247C254.948%200.195973%20254.476%200.226002%20253.731%200.498609C252.985%200.771212%20251.981%201.281%20250.777%201.99855L19.2871%20139.562C18.0906%20140.272%2016.7153%20141.176%2015.2406%20142.222C13.7659%20143.269%2012.221%20144.438%2010.6951%20145.661C9.16906%20146.884%207.69219%20148.138%206.34961%20149.349C5.00703%20150.561%203.82533%20151.706%202.87268%20152.72C1.91018%20153.739%201.19407%20154.608%200.76577%20155.276C0.337465%20155.944%200.205367%20156.399%200.377122%20156.613C0.548876%20156.827%201.02108%20156.797%201.76648%20156.524C2.51187%20156.252%203.51577%20155.742%204.72017%20155.024L236.21%2017.4606C237.407%2016.7514%20238.782%2015.8473%20240.257%2014.8006C241.731%2013.7539%20243.276%2012.5853%20244.802%2011.3621C246.328%2010.139%20247.805%208.88548%20249.148%207.67397C250.49%206.46247%20251.672%205.31693%20252.625%204.30344Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",gg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:pg,alt:"",className:"image1"}),u.jsx("img",{src:hg,alt:"",className:"image2"}),u.jsx("img",{src:mg,s:!0,alt:"",className:"image3"})]}),vg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.475%205.11776C263.391%204.04007%20264.052%203.10182%20264.419%202.35713C264.786%201.61245%20264.852%201.07606%20264.614%200.778924C264.376%200.481787%20263.838%200.429777%20263.031%200.625893C262.224%200.822009%20261.165%201.26238%20259.913%201.92158L19.3674%20128.187C18.1236%20128.838%2016.7109%20129.695%2015.2107%20130.71C13.7105%20131.725%2012.1524%20132.877%2010.6265%20134.1C9.10046%20135.323%207.63674%20136.593%206.3197%20137.836C5.00267%20139.08%203.85839%20140.272%202.9529%20141.344C2.03717%20142.422%201.37671%20143.36%201.00972%20144.105C0.642721%20144.85%200.576384%20145.386%200.814556%20145.683C1.05273%20145.98%201.5907%20146.032%202.3974%20145.836C3.20411%20145.64%204.26365%20145.2%205.51482%20144.541L246.061%2018.2749C247.305%2017.6245%20248.717%2016.7672%20250.218%2015.7524C251.718%2014.7375%20253.276%2013.5853%20254.802%2012.3621C256.328%2011.139%20257.792%209.86907%20259.109%208.6257C260.426%207.38233%20261.57%206.19009%20262.475%205.11776Z'%20fill='white'/%3e%3c/svg%3e",yg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.559%205.11776C263.474%204.04007%20264.135%203.10182%20264.502%202.35713C264.869%201.61245%20264.935%201.07606%20264.697%200.778924C264.459%200.481787%20263.921%200.429777%20263.114%200.625893C262.307%200.822009%20261.248%201.26238%20259.997%201.92158L19.4506%20128.187C18.2069%20128.838%2016.7942%20129.695%2015.294%20130.71C13.7937%20131.725%2012.2357%20132.877%2010.7097%20134.1C9.18371%20135.323%207.71999%20136.593%206.40295%20137.836C5.08592%20139.08%203.94164%20140.272%203.03615%20141.344C2.12042%20142.422%201.45996%20143.36%201.09297%20144.105C0.725973%20144.85%200.659636%20145.386%200.897808%20145.683C1.13598%20145.98%201.67395%20146.032%202.48065%20145.836C3.28736%20145.64%204.3469%20145.2%205.59807%20144.541L246.144%2018.2749C247.388%2017.6245%20248.801%2016.7672%20250.301%2015.7524C251.801%2014.7375%20253.359%2013.5853%20254.885%2012.3621C256.411%2011.139%20257.875%209.86907%20259.192%208.6257C260.509%207.38233%20261.653%206.19009%20262.559%205.11776Z'%20fill='white'/%3e%3c/svg%3e",xg="data:image/svg+xml,%3csvg%20width='242'%20height='127'%20viewBox='0%200%20242%20127'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M239.21%204.51512C240.014%203.52722%20240.585%202.66023%20240.892%201.96418C241.198%201.26813%20241.233%200.756786%20240.995%200.459649C240.757%200.162512%20240.25%200.0854627%20239.504%200.232943C238.758%200.380424%20237.787%200.749522%20236.648%201.31894L17.6146%20110.341C16.482%20110.902%2015.2015%20111.654%2013.8469%20112.552C12.4923%20113.45%2011.0905%20114.477%209.72224%20115.574C8.35402%20116.67%207.0465%20117.815%205.8751%20118.942C4.7037%20120.068%203.69163%20121.155%202.89722%20122.138C2.09351%20123.126%201.52199%20123.993%201.21567%20124.689C0.909346%20125.385%200.87425%20125.896%201.11242%20126.193C1.35059%20126.49%201.85732%20126.567%202.60335%20126.42C3.34938%20126.273%204.31999%20125.903%205.45915%20125.334L224.493%2016.3119C225.625%2015.7506%20226.906%2014.9992%20228.26%2014.1011C229.615%2013.2031%20231.017%2012.176%20232.385%2011.0793C233.753%209.98262%20235.061%208.83794%20236.232%207.71131C237.404%206.58467%20238.416%205.49839%20239.21%204.51512Z'%20fill='white'/%3e%3c/svg%3e",wg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:vg,alt:"",className:"style1"}),u.jsx("img",{src:yg,alt:"",className:"style2"}),u.jsx("img",{src:xg,alt:"",className:"style3"})]}),Sg="data:image/svg+xml,%3csvg%20width='343'%20height='101'%20viewBox='0%200%20343%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M337.756%202.82053C339.3%202.19061%20340.513%201.65685%20341.327%201.25004C342.14%200.843229%20342.537%200.571418%20342.496%200.450288C342.454%200.329157%20341.973%200.361105%20341.082%200.544288C340.192%200.727471%20338.908%201.05826%20337.305%201.51758L29.4539%2089.5925C27.8637%2090.0466%2025.9836%2090.621%2023.9221%2091.2825C21.8605%2091.944%2019.6583%2092.6795%2017.4424%2093.4466C15.2266%2094.2137%2013.041%2094.9971%2011.0117%2095.7518C8.98235%2096.5064%207.14954%2097.2174%205.61891%2097.8435C4.07519%2098.4735%202.86157%2099.0072%202.04811%2099.414C1.23466%2099.8208%200.837454%20100.093%200.879386%20100.214C0.921318%20100.335%201.40156%20100.303%202.29243%20100.12C3.1833%2099.9366%204.46718%2099.6058%206.06996%2099.1465L313.921%2011.0716C315.511%2010.6174%20317.391%2010.043%20319.453%209.38155C321.514%208.72006%20323.717%207.98456%20325.932%207.21749C328.148%206.45042%20330.334%205.66696%20332.363%204.9123C334.393%204.15763%20336.225%203.44671%20337.756%202.82053Z'%20fill='purple'/%3e%3c/svg%3e",Cg="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.9999%2034H17.9999C17.4759%2034%2017.0399%2034.405%2017.0019%2034.929C16.9829%2035.19%2016.5929%2041.361%2020.6999%2045.77C23.3129%2048.577%2027.1149%2050%2031.9999%2050C36.8849%2050%2040.6869%2048.577%2043.2999%2045.77C47.4059%2041.36%2047.0159%2035.189%2046.9969%2034.929C46.9599%2034.405%2046.5239%2034%2045.9999%2034ZM41.8239%2044.42C39.6039%2046.795%2036.2999%2048%2031.9999%2048C27.7009%2048%2024.3949%2046.795%2022.1759%2044.42C19.5279%2041.586%2019.0639%2037.745%2018.9979%2036H45.0029C44.9369%2037.745%2044.4729%2041.585%2041.8239%2044.42Z'%20fill='purple'/%3e%3cpath%20d='M18.394%2028.919L25.394%2025.919C25.762%2025.762%2026%2025.4%2026%2025C26%2024.6%2025.762%2024.238%2025.394%2024.081L18.394%2021.081L17.606%2022.919L22.461%2025L17.606%2027.081L18.394%2028.919Z'%20fill='purple'/%3e%3cpath%20d='M38.606%2025.919L45.606%2028.919L46.393%2027.081L41.539%2025L46.393%2022.919L45.606%2021.081L38.606%2024.081C38.238%2024.238%2038%2024.6%2038%2025C38%2025.4%2038.238%2025.762%2038.606%2025.919Z'%20fill='purple'/%3e%3cpath%20d='M32%204C16.561%204%204%2016.561%204%2032C4%2047.439%2016.561%2060%2032%2060C47.439%2060%2060%2047.439%2060%2032C60%2016.561%2047.439%204%2032%204ZM32%2058C17.664%2058%206%2046.336%206%2032C6%2017.664%2017.664%206%2032%206C46.337%206%2058%2017.664%2058%2032C58%2046.336%2046.337%2058%2032%2058Z'%20fill='purple'/%3e%3c/svg%3e",jg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center styleText",children:u.jsxs("h2",{children:[u.jsx("span",{style:{display:"block",color:"purple"},children:"TOUJOURS SATISFAIT !"}),"Acheter vos produits chez nous sans vous deplacer et recever les en toute sécurité dans le plus bref delai !"]})}),u.jsx("div",{children:u.jsx("img",{src:Cg,className:"styleSmile",alt:""})}),u.jsx("div",{children:u.jsx("img",{src:Sg,alt:"",className:"styleLine"})})]});var rt=function(){return rt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},rt.apply(this,arguments)};function wl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ce="-ms-",Di="-moz-",re="-webkit-",Np="comm",Bl="rule",$u="decl",Ng="@import",kp="@keyframes",kg="@layer",Mp=Math.abs,Uu=String.fromCharCode,zs=Object.assign;function Mg(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function Ep(e){return e.trim()}function Yt(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Wo(e,t,n){return e.indexOf(t,n)}function Re(e,t){return e.charCodeAt(t)|0}function Ur(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function Lp(e){return e.length}function gi(e,t){return t.push(e),e}function Eg(e,t){return e.map(t).join("")}function Dd(e,t){return e.filter(function(n){return!Yt(n,t)})}var Hl=1,br=1,Dp=0,Nt=0,Ee=0,Kr="";function Wl(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Hl,column:br,length:l,return:"",siblings:a}}function hn(e,t){return zs(Wl("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cr(e){for(;e.root;)e=hn(e.root,{children:[e]});gi(e,e.siblings)}function Lg(){return Ee}function Dg(){return Ee=Nt>0?Re(Kr,--Nt):0,br--,Ee===10&&(br=1,Hl--),Ee}function zt(){return Ee=Nt<Dp?Re(Kr,Nt++):0,br++,Ee===10&&(br=1,Hl++),Ee}function Gn(){return Re(Kr,Nt)}function Vo(){return Nt}function Vl(e,t){return Ur(Kr,e,t)}function Is(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pg(e){return Hl=br=1,Dp=Ut(Kr=e),Nt=0,[]}function Tg(e){return Kr="",e}function Da(e){return Ep(Vl(Nt-1,_s(e===91?e+2:e===40?e+1:e)))}function zg(e){for(;(Ee=Gn())&&Ee<33;)zt();return Is(e)>2||Is(Ee)>3?"":" "}function Ig(e,t){for(;--t&&zt()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Vl(e,Vo()+(t<6&&Gn()==32&&zt()==32))}function _s(e){for(;zt();)switch(Ee){case e:return Nt;case 34:case 39:e!==34&&e!==39&&_s(Ee);break;case 40:e===41&&_s(e);break;case 92:zt();break}return Nt}function _g(e,t){for(;zt()&&e+Ee!==57;)if(e+Ee===84&&Gn()===47)break;return"/*"+Vl(t,Nt-1)+"*"+Uu(e===47?e:zt())}function Ag(e){for(;!Is(Gn());)zt();return Vl(e,Nt)}function Rg(e){return Tg(Qo("",null,null,null,[""],e=Pg(e),0,[0],e))}function Qo(e,t,n,r,i,o,l,a,s){for(var c=0,d=0,h=l,m=0,x=0,S=0,w=1,k=1,p=1,f=0,g="",N=i,L=o,v=r,j=g;k;)switch(S=f,f=zt()){case 40:if(S!=108&&Re(j,h-1)==58){Wo(j+=Y(Da(f),"&","&\f"),"&\f",Mp(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:j+=Da(f);break;case 9:case 10:case 13:case 32:j+=zg(S);break;case 92:j+=Ig(Vo()-1,7);continue;case 47:switch(Gn()){case 42:case 47:gi(Og(_g(zt(),Vo()),t,n,s),s);break;default:j+="/"}break;case 123*w:a[c++]=Ut(j)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:k=0;case 59+d:p==-1&&(j=Y(j,/\f/g,"")),x>0&&Ut(j)-h&&gi(x>32?Td(j+";",r,n,h-1,s):Td(Y(j," ","")+";",r,n,h-2,s),s);break;case 59:j+=";";default:if(gi(v=Pd(j,t,n,c,d,i,a,g,N=[],L=[],h,o),o),f===123)if(d===0)Qo(j,t,v,v,N,o,h,a,L);else switch(m===99&&Re(j,3)===110?100:m){case 100:case 108:case 109:case 115:Qo(e,v,v,r&&gi(Pd(e,v,v,0,0,i,a,g,i,N=[],h,L),L),i,L,h,a,r?N:L);break;default:Qo(j,v,v,v,[""],L,0,a,L)}}c=d=x=0,w=p=1,g=j="",h=l;break;case 58:h=1+Ut(j),x=S;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&Dg()==125)continue}switch(j+=Uu(f),f*w){case 38:p=d>0?1:(j+="\f",-1);break;case 44:a[c++]=(Ut(j)-1)*p,p=1;break;case 64:Gn()===45&&(j+=Da(zt())),m=Gn(),d=h=Ut(g=j+=Ag(Vo())),f++;break;case 45:S===45&&Ut(j)==2&&(w=0)}}return o}function Pd(e,t,n,r,i,o,l,a,s,c,d,h){for(var m=i-1,x=i===0?o:[""],S=Lp(x),w=0,k=0,p=0;w<r;++w)for(var f=0,g=Ur(e,m+1,m=Mp(k=l[w])),N=e;f<S;++f)(N=Ep(k>0?x[f]+" "+g:Y(g,/&\f/g,x[f])))&&(s[p++]=N);return Wl(e,t,n,i===0?Bl:a,s,c,d,h)}function Og(e,t,n,r){return Wl(e,t,n,Np,Uu(Lg()),Ur(e,2,-2),0,r)}function Td(e,t,n,r,i){return Wl(e,t,n,$u,Ur(e,0,r),Ur(e,r+1,-1),r,i)}function Pp(e,t,n){switch(Mg(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Di+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Di+e+ce+e+e;case 5936:switch(Re(e,t+11)){case 114:return re+e+ce+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+ce+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+ce+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+ce+e+e;case 6165:return re+e+ce+"flex-"+e+e;case 5187:return re+e+Y(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return re+e+ce+"flex-item-"+Y(e,/flex-|-self/g,"")+(Yt(e,/flex-|baseline/)?"":ce+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return re+e+ce+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+ce+Y(e,"shrink","negative")+e;case 5292:return re+e+ce+Y(e,"basis","preferred-size")+e;case 6060:return re+"box-"+Y(e,"-grow","")+re+e+ce+Y(e,"grow","positive")+e;case 4554:return re+Y(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Yt(e,/flex-|baseline/))return ce+"grid-column-align"+Ur(e,t)+e;break;case 2592:case 3360:return ce+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Yt(r.props,/grid-\w+-end/)})?~Wo(e+(n=n[t].value),"span",0)?e:ce+Y(e,"-start","")+e+ce+"grid-row-span:"+(~Wo(n,"span",0)?Yt(n,/\d+/):+Yt(n,/\d+/)-+Yt(e,/\d+/))+";":ce+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Yt(r.props,/grid-\w+-start/)})?e:ce+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Di+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Wo(e,"stretch",0)?Pp(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,c){return ce+i+":"+o+c+(l?ce+i+"-span:"+(a?s:+s-+o)+c:"")+e});case 4949:if(Re(e,t+6)===121)return Y(e,":",":"+re)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Re(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+ce+"$2box$3")+e;case 100:return Y(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function Sl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Fg(e,t,n,r){switch(e.type){case kg:if(e.children.length)break;case Ng:case $u:return e.return=e.return||e.value;case Np:return"";case kp:return e.return=e.value+"{"+Sl(e.children,r)+"}";case Bl:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=Sl(e.children,r))?e.return=e.value+"{"+n+"}":""}function $g(e){var t=Lp(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Ug(e){return function(t){t.root||(t=t.return)&&e(t)}}function bg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $u:e.return=Pp(e.value,e.length,n);return;case kp:return Sl([hn(e,{value:Y(e.value,"@","@"+re)})],r);case Bl:if(e.length)return Eg(n=e.props,function(i){switch(Yt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(hn(e,{props:[Y(i,/:(read-\w+)/,":"+Di+"$1")]})),cr(hn(e,{props:[i]})),zs(e,{props:Dd(n,r)});break;case"::placeholder":cr(hn(e,{props:[Y(i,/:(plac\w+)/,":"+re+"input-$1")]})),cr(hn(e,{props:[Y(i,/:(plac\w+)/,":"+Di+"$1")]})),cr(hn(e,{props:[Y(i,/:(plac\w+)/,ce+"input-$1")]})),cr(hn(e,{props:[i]})),zs(e,{props:Dd(n,r)});break}return""})}}var Bg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},Br=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",Tp="active",zp="data-styled-version",Ql="6.1.8",bu=`/*!sc*/
`,Bu=typeof window<"u"&&"HTMLElement"in window,Hg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),Yl=Object.freeze([]),Hr=Object.freeze({});function Wg(e,t,n){return n===void 0&&(n=Hr),e.theme!==n.theme&&e.theme||t||n.theme}var Ip=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Vg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qg=/(^-|-$)/g;function zd(e){return e.replace(Vg,"-").replace(Qg,"")}var Yg=/(a)(d)/gi,Eo=52,Id=function(e){return String.fromCharCode(e+(e>25?39:97))};function As(e){var t,n="";for(t=Math.abs(e);t>Eo;t=t/Eo|0)n=Id(t%Eo)+n;return(Id(t%Eo)+n).replace(Yg,"$1-$2")}var Pa,_p=5381,Mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ap=function(e){return Mr(_p,e)};function Gg(e){return As(Ap(e)>>>0)}function Kg(e){return e.displayName||e.name||"Component"}function Ta(e){return typeof e=="string"&&!0}var Rp=typeof Symbol=="function"&&Symbol.for,Op=Rp?Symbol.for("react.memo"):60115,Zg=Rp?Symbol.for("react.forward_ref"):60112,Xg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jg=((Pa={})[Zg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pa[Op]=Fp,Pa);function _d(e){return("type"in(t=e)&&t.type.$$typeof)===Op?Fp:"$$typeof"in e?Jg[e.$$typeof]:Xg;var t}var ev=Object.defineProperty,tv=Object.getOwnPropertyNames,Ad=Object.getOwnPropertySymbols,nv=Object.getOwnPropertyDescriptor,rv=Object.getPrototypeOf,Rd=Object.prototype;function $p(e,t,n){if(typeof t!="string"){if(Rd){var r=rv(t);r&&r!==Rd&&$p(e,r,n)}var i=tv(t);Ad&&(i=i.concat(Ad(t)));for(var o=_d(e),l=_d(t),a=0;a<i.length;++a){var s=i[a];if(!(s in qg||n&&n[s]||l&&s in l||o&&s in o)){var c=nv(t,s);try{ev(e,s,c)}catch{}}}}return e}function Wr(e){return typeof e=="function"}function Hu(e){return typeof e=="object"&&"styledComponentId"in e}function Vn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Od(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Zi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Rs(e,t,n){if(n===void 0&&(n=!1),!n&&!Zi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Rs(e[r],t[r]);else if(Zi(t))for(var r in t)e[r]=Rs(e[r],t[r]);return e}function Wu(e,t){Object.defineProperty(e,"toString",{value:t})}function ro(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var iv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ro(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(bu);return n},e}(),Yo=new Map,Cl=new Map,Go=1,Lo=function(e){if(Yo.has(e))return Yo.get(e);for(;Cl.has(Go);)Go++;var t=Go++;return Yo.set(e,t),Cl.set(t,e),t},ov=function(e,t){Go=t+1,Yo.set(e,t),Cl.set(t,e)},lv="style[".concat(Br,"][").concat(zp,'="').concat(Ql,'"]'),av=new RegExp("^".concat(Br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sv=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},uv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(bu),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(av);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(ov(d,c),sv(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function cv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Up=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Br,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Br,Tp),r.setAttribute(zp,Ql);var l=cv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},dv=function(){function e(t){this.element=Up(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw ro(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),fv=function(){function e(t){this.element=Up(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),pv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Fd=Bu,hv={isServer:!Bu,useCSSOMInjection:!Hg},bp=function(){function e(t,n,r){t===void 0&&(t=Hr),n===void 0&&(n={});var i=this;this.options=rt(rt({},hv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Bu&&Fd&&(Fd=!1,function(o){for(var l=document.querySelectorAll(lv),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(Br)!==Tp&&(uv(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Wu(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",c=function(h){var m=function(p){return Cl.get(p)}(h);if(m===void 0)return"continue";var x=o.names.get(m),S=l.getGroup(h);if(x===void 0||S.length===0)return"continue";var w="".concat(Br,".g").concat(h,'[id="').concat(m,'"]'),k="";x!==void 0&&x.forEach(function(p){p.length>0&&(k+="".concat(p,","))}),s+="".concat(S).concat(w,'{content:"').concat(k,'"}').concat(bu)},d=0;d<a;d++)c(d);return s}(i)})}return e.registerId=function(t){return Lo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(rt(rt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new pv(i):r?new dv(i):new fv(i)}(this.options),new iv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Lo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Lo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Lo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),mv=/&/g,gv=/^\s*\/\/.*$/gm;function Bp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Bp(n.children,t)),n})}function vv(e){var t,n,r,i=e===void 0?Hr:e,o=i.options,l=o===void 0?Hr:o,a=i.plugins,s=a===void 0?Yl:a,c=function(m,x,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===Bl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(mv,n).replace(r,c))}),l.prefix&&d.push(bg),d.push(Fg);var h=function(m,x,S,w){x===void 0&&(x=""),S===void 0&&(S=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var k=m.replace(gv,""),p=Rg(S||x?"".concat(S," ").concat(x," { ").concat(k," }"):k);l.namespace&&(p=Bp(p,l.namespace));var f=[];return Sl(p,$g(d.concat(Ug(function(g){return f.push(g)})))),f};return h.hash=s.length?s.reduce(function(m,x){return x.name||ro(15),Mr(m,x.name)},_p).toString():"",h}var yv=new bp,Os=vv(),Hp=Ge.createContext({shouldForwardProp:void 0,styleSheet:yv,stylis:Os});Hp.Consumer;Ge.createContext(void 0);function $d(){return E.useContext(Hp)}var xv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Os);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wu(this,function(){throw ro(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Os),this.name+t.hash},e}(),wv=function(e){return e>="A"&&e<="Z"};function Ud(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;wv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Wp=function(e){return e==null||e===!1||e===""},Vp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Wp(o)&&(Array.isArray(o)&&o.isCss||Wr(o)?r.push("".concat(Ud(i),":"),o,";"):Zi(o)?r.push.apply(r,wl(wl(["".concat(i," {")],Vp(o),!1),["}"],!1)):r.push("".concat(Ud(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Bg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kn(e,t,n,r){if(Wp(e))return[];if(Hu(e))return[".".concat(e.styledComponentId)];if(Wr(e)){if(!Wr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Kn(i,t,n,r)}var o;return e instanceof xv?n?(e.inject(n,r),[e.getName(r)]):[e]:Zi(e)?Vp(e):Array.isArray(e)?Array.prototype.concat.apply(Yl,e.map(function(l){return Kn(l,t,n,r)})):[e.toString()]}function Sv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Wr(n)&&!Hu(n))return!1}return!0}var Cv=Ap(Ql),jv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sv(t),this.componentId=n,this.baseHash=Mr(Cv,n),this.baseStyle=r,bp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Vn(i,this.staticRulesId);else{var o=Od(Kn(this.rules,t,n,r)),l=As(Mr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Vn(i,l),this.staticRulesId=l}else{for(var s=Mr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var m=Od(Kn(h,t,n,r));s=Mr(s,m+d),c+=m}}if(c){var x=As(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=Vn(i,x)}}return i},e}(),Qp=Ge.createContext(void 0);Qp.Consumer;var za={};function Nv(e,t,n){var r=Hu(e),i=e,o=!Ta(e),l=t.attrs,a=l===void 0?Yl:l,s=t.componentId,c=s===void 0?function(N,L){var v=typeof N!="string"?"sc":zd(N);za[v]=(za[v]||0)+1;var j="".concat(v,"-").concat(Gg(Ql+v+za[v]));return L?"".concat(L,"-").concat(j):j}(t.displayName,t.parentComponentId):s,d=t.displayName,h=d===void 0?function(N){return Ta(N)?"styled.".concat(N):"Styled(".concat(Kg(N),")")}(e):d,m=t.displayName&&t.componentId?"".concat(zd(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;S=function(N,L){return w(N,L)&&k(N,L)}}else S=w}var p=new jv(n,m,r?i.componentStyle:void 0);function f(N,L){return function(v,j,P){var _=v.attrs,b=v.componentStyle,J=v.defaultProps,Ce=v.foldedComponentIds,ye=v.styledComponentId,qe=v.target,sn=Ge.useContext(Qp),_t=$d(),oe=v.shouldForwardProp||_t.shouldForwardProp,z=Wg(j,sn,J)||Hr,O=function(Be,Ne,st){for(var An,Wt=rt(rt({},Ne),{className:void 0,theme:st}),Zr=0;Zr<Be.length;Zr+=1){var Te=Wr(An=Be[Zr])?An(Wt):An;for(var Je in Te)Wt[Je]=Je==="className"?Vn(Wt[Je],Te[Je]):Je==="style"?rt(rt({},Wt[Je]),Te[Je]):Te[Je]}return Ne.className&&(Wt.className=Vn(Wt.className,Ne.className)),Wt}(_,j,z),B=O.as||qe,Z={};for(var ee in O)O[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&O.theme===z||(ee==="forwardedAs"?Z.as=O.forwardedAs:oe&&!oe(ee,B)||(Z[ee]=O[ee]));var at=function(Be,Ne){var st=$d(),An=Be.generateAndInjectStyles(Ne,st.styleSheet,st.stylis);return An}(b,O),je=Vn(Ce,ye);return at&&(je+=" "+at),O.className&&(je+=" "+O.className),Z[Ta(B)&&!Ip.has(B)?"class":"className"]=je,Z.ref=P,E.createElement(B,Z)}(g,N,L)}f.displayName=h;var g=Ge.forwardRef(f);return g.attrs=x,g.componentStyle=p,g.displayName=h,g.shouldForwardProp=S,g.foldedComponentIds=r?Vn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=m,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=r?function(L){for(var v=[],j=1;j<arguments.length;j++)v[j-1]=arguments[j];for(var P=0,_=v;P<_.length;P++)Rs(L,_[P],!0);return L}({},i.defaultProps,N):N}}),Wu(g,function(){return".".concat(g.styledComponentId)}),o&&$p(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function bd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Bd=function(e){return Object.assign(e,{isCss:!0})};function kv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Wr(e)||Zi(e))return Bd(Kn(bd(Yl,wl([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Kn(r):Bd(Kn(bd(r,t)))}function Fs(e,t,n){if(n===void 0&&(n=Hr),!t)throw ro(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,kv.apply(void 0,wl([i],o,!1)))};return r.attrs=function(i){return Fs(e,t,rt(rt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Fs(e,t,rt(rt({},n),i))},r}var Yp=function(e){return Fs(Nv,e)},ne=Yp;Ip.forEach(function(e){ne[e]=Yp(e)});const Mv=ne(Cp)`
    all:unset;
    position:absolute;
    top:0rem; 
    left:0rem;
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

`,Ev=ne(Cp)`
.img{
    position:absolute;
    top:5rem;
    left:3.7rem;
    display:block;
}
    

`,Lv=ne(gg)`

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
`,Dv=ne(jg)`

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


`,Pv=ne(wg)`


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
    `,Tv=ne(jp)`

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
`,zv=ne(jp)`

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
`,Iv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsxs("div",{className:"first-container",children:[u.jsx(Pv,{}),u.jsx(Tv,{})]})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(Dv,{})})}),u.jsx("div",{className:"third",children:u.jsxs("div",{className:"third-container",children:[u.jsx(Mv,{}),u.jsx(Lv,{})]})})]}),_v=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("h2",{children:u.jsx("span",{children:"chez Ardi"})}),u.jsx("h3",{children:"Commandez vos produits et soyez livrer où que vous soyer en RDC"}),u.jsx("div",{})]}),de={MAIN:"#222E50",SECOND:"#F9FF00",THIRD:"grey",FOURTH:"#DADAD6",FIFTH:"white"},V={MAIN:"white",SECOND:"white",THIRD:"white",FOURTH:"black"},Av=ne(_v)`
    all: unset;
    position:absolute;
    top:-7%;
    left:5%;
    display:block;
    border-top-right-radius:45%;
    border-bottom-left-radius:45%;
    height:70%;
    width:100%;
    margin-top:1rem;
    background-color:rgba(0,0,0,0.1);

h2{
    margin-left:5%;
    margin-top:12%;
    font-size:5rem;
    color : black;
    font-weight:800;
    text-align:left;
    letter-spacing:1px;
    font-weight:100;
}
h2 span{
    color:black;
}
h3{
    margin-top:7%;
    margin-left:5%;
    width:70%;
    font-size:20px;
    text-align:justify;
    letter-spacing:1px;
    color:${V.FOURTH};
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
    font-size:3rem;
    font-weight:500;
    text-transform: uppercase;

    }
        h3{
    font-size:30px;
    width:90%;
    font-weight:400;


    }
}

`,Rv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"container-first",children:u.jsx(Av,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"container-second",children:u.jsx(zv,{})})})]}),Ov="data:image/svg+xml,%3csvg%20width='240'%20height='201'%20viewBox='0%200%20240%20201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_184_251)'%3e%3cpath%20d='M209.83%2083.5349L52.22%2038.9572C47.8199%2037.7127%2043.2414%2037.787%2039.4918%2039.1637C35.7422%2040.5404%2033.1286%2043.1068%2032.2259%2046.2982L20.3139%2088.415C19.4112%2091.6065%2020.2935%2095.1616%2022.7665%2098.2983C25.2396%20101.435%2029.1009%20103.896%2033.501%20105.141L114.795%20128.133L137.936%20147.675L130.307%20132.521L191.111%20149.718C195.511%20150.963%20200.09%20150.889%20203.84%20149.512C207.589%20148.135%20210.203%20145.569%20211.105%20142.377L223.017%20100.261C223.92%2097.0692%20223.038%2093.5141%20220.565%2090.3774C218.092%2087.2407%20214.23%2084.7794%20209.83%2083.5349Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.8166%2050.9906C47.5827%2064.2224%2043.3749%2094.9374%2045.1998%2095.4536C47.0248%2095.9698%2078.2222%2065.8055%2080.296%2066.3921C82.3698%2066.9786%2078.9617%2099.9342%2090.8239%20108.358C93.8019%2097.8285%20103.606%2072.9849%20116.03%2066.7518'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M149.102%20105.347C143.623%20114.584%20132.052%20120.018%20123.259%20117.531C114.466%20115.044%20111.852%20105.598%20117.331%2096.3608C122.81%2087.1239%20134.381%2081.6892%20143.174%2084.1762C151.967%2086.6632%20154.581%2096.1098%20149.102%20105.347Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M198.873%20119.424C193.394%20128.661%20181.823%20134.095%20173.03%20131.608C164.237%20129.121%20161.623%20119.675%20167.102%20110.438C172.582%20101.201%20184.153%2095.7664%20192.946%2098.2534C201.739%20100.74%20204.353%20110.187%20198.873%20119.424Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_184_251'%3e%3crect%20width='206.897'%20height='150.065'%20fill='purple'%20transform='translate(40.8413)%20rotate(15.7927)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Fv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("p",{children:"Une nouvelle expérience ! Nous livrons partout dans la ville de Kinshasa"})}),u.jsx("div",{className:"style3",children:u.jsx("img",{src:Ov,alt:""})})]}),$v="/reactdeploy4/assets/dots1-wnWSIBb8.svg",Uv="/reactdeploy4/assets/dots2-WthBLMDD.svg",bv="/reactdeploy4/assets/dots3-BvKBFpC0.svg",Bv="/reactdeploy4/assets/dots4-jerWoYTl.svg",Hv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx(Ev,{}),u.jsx("img",{src:$v,className:"style2",alt:""}),u.jsx("img",{src:Uv,className:"style3",alt:""}),u.jsx("img",{src:bv,className:"style4",alt:""}),u.jsx("img",{src:Bv,className:"style5",alt:""})]}),Wv="/reactdeploy4/assets/png_10-OhKyeJ3r.png",Vv=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Wv,alt:"",className:"img",style:{width:"100%",height:"100%"}})}),Qv="/reactdeploy4/assets/dots5-wrrVGBo3.svg",Yv="/reactdeploy4/assets/dots6-87oX7T93.svg",Gv="/reactdeploy4/assets/dots7-W2CVIBUv.svg",Kv="/reactdeploy4/assets/dots8-mWlib7R3.svg",Zv=ne(Vv)`
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
@media screen and ((width >=500px) and (width< 755px)) {
    .img{
        left:13%;
        top:20%;

        scale:0.8;
    }
}
@media screen and ((width >=400px) and (width< 500px)) {
    .img{
        left:-1%;
        top:-1%;
        scale:0.8;
    }
}
@media screen and ((width< 400px)) {
    .img{
        left:-3%;
        top:1.2rem;
        scale:0.8;
    }
}
`,Xv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:Qv,className:"style2",alt:""}),u.jsx("img",{src:Yv,className:"style3",alt:""}),u.jsx("img",{src:Kv,className:"style5",alt:""}),u.jsx("img",{src:Gv,className:"style4",alt:""}),u.jsx(Zv,{})]}),qv=ne(Hv)`

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
`,Jv=ne(Xv)`

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

`,ey=ne(Fv)`
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
`,ty=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"first-container",children:u.jsx(qv,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(ey,{})})}),u.jsx("div",{className:"third",children:u.jsx("div",{className:"third-container",children:u.jsx(Jv,{})})})]}),Ia=({image:e,text:t,style:n})=>{const r={position:"Absolute",fontFamily:"audrey",fontSize:"inherit",fontWeight:"bolder",color:"white",textAlign:"center"},i={position:"relative",display:"flex",fontSize:"inherit",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"#DADAD6",boxShadow:"-10px 10px 20px #000000",marginBottom:"3rem"};return u.jsx("div",{style:{...i,...n},children:u.jsx("div",{className:"px-4",style:r,children:e?u.jsx("img",{src:e,alt:""}):u.jsx("div",{className:"spanText",children:t})})})},ny=ne(Iv)`
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

`,ry=ne(Rv)`
    all: unset;
    width: 100%;
    height: 100%;
    display: grid;
        margin-top:3.5rem;
    grid-template-columns : 50% 50%;
    
    /* background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF); */
    background-image: linear-gradient(to bottom, ${()=>{}}, ${()=>{}}, ${()=>{}}, #FFFFFF);
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
`,iy=ne(ty)`

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
    /* background-image: linear-gradient(to bottom, #F9FF00, #F9FF00, #F9FF00, #FFFFFF); */
    background-image: linear-gradient(to bottom, ${()=>{}}, ${()=>{}}, ${()=>{}}, #FFFFFF);
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
`,oy="/reactdeploy4/assets/img_5-R_nZnJim.png",ly="/reactdeploy4/assets/img_6-ej2dVkQl.png",ay=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx(Ia,{image:ly})}),u.jsx("div",{className:"second",children:u.jsx(Ia,{text:"Livraison gratuite à partir de 50$",style:{backgroundColor:"#787373"}})}),u.jsx("div",{className:"third",children:u.jsx(Ia,{image:oy})})]}),sy=ne(ay)`
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
            border-left: double 1px white;
            font-size:unset;
            font-family:unset;
        line-height:25px;
        font-size : 16px;
        font-weight:0;
        padding-left:0.5rem;
        text-align:justify;
        display : block;
        color :  white;
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

`,Gp=()=>{const[e,t]=E.useState(0),n=[u.jsx(iy,{}),u.jsx(ry,{}),u.jsx(ny,{})],r=()=>{t(i=>(i+1)%n.length)};return E.useEffect(()=>{const i=setInterval(()=>{r()},5e3);return()=>{clearInterval(i)}},[]),u.jsxs("div",{className:"section1-1",children:[u.jsx("div",{className:"box-section1-1",children:n[e]}),u.jsx(sy,{})]})},Ft="/reactdeploy4/assets/png_1-psFfvH_j.png",vi="/reactdeploy4/assets/png_3-ilcu5yhJ.png",Do="/reactdeploy4/assets/png_5-PB77ItoP.png",yi="/reactdeploy4/assets/png_6-IaEkgori.png",$="/reactdeploy4/assets/png_9-HkEXkKWn.png",uy=({className:e,children:t})=>u.jsx("div",{children:u.jsx("button",{className:`btn btn-outline-success  form-control ${e}`,type:"submit",children:t})}),cy="data:image/svg+xml,%3csvg%20width='40'%20height='41'%20viewBox='0%200%2040%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_99_272)'%3e%3cpath%20d='M30.4126%2029.25H16.9126C16.0888%2029.2516%2015.2875%2028.9819%2014.6323%2028.4826C13.9771%2027.9833%2013.5045%2027.2822%2013.2876%2026.4875L10.0001%2014.575C9.94953%2014.3896%209.9424%2014.195%209.97926%2014.0064C10.0161%2013.8178%2010.096%2013.6402%2010.2126%2013.4875C10.3341%2013.3294%2010.4917%2013.2026%2010.6722%2013.1178C10.8527%2013.033%2011.0508%2012.9926%2011.2501%2013H35.0001C35.1837%2012.9997%2035.3652%2013.0399%2035.5315%2013.1177C35.6979%2013.1954%2035.8451%2013.3089%2035.9626%2013.45C36.0786%2013.5913%2036.1623%2013.7563%2036.2076%2013.9334C36.253%2014.1105%2036.259%2014.2954%2036.2251%2014.475L34.1001%2026.175C33.9422%2027.0379%2033.4867%2027.8182%2032.813%2028.38C32.1392%2028.9419%2031.2899%2029.2497%2030.4126%2029.25ZM12.9126%2015.5L15.7251%2025.825C15.7983%2026.0977%2015.9618%2026.3376%2016.1887%2026.5055C16.4157%2026.6735%2016.6929%2026.7597%2016.9751%2026.75H30.4751C30.7711%2026.7548%2031.0592%2026.6545%2031.2881%2026.4668C31.517%2026.2791%2031.6718%2026.0162%2031.7251%2025.725L33.5001%2015.5H12.9126Z'%20fill='black'/%3e%3cpath%20d='M11.25%2015.5C10.9694%2015.5104%2010.6936%2015.426%2010.4668%2015.2605C10.24%2015.0949%2010.0756%2014.8579%2010%2014.5875L8.0625%207.6625C7.98689%207.39213%207.82246%207.15508%207.5957%206.98954C7.36894%206.82401%207.09306%206.73963%206.8125%206.75H5C4.66848%206.75%204.35054%206.61831%204.11612%206.38389C3.8817%206.14947%203.75%205.83152%203.75%205.5C3.75%205.16848%203.8817%204.85054%204.11612%204.61612C4.35054%204.3817%204.66848%204.25%205%204.25H6.8625C7.67925%204.24885%208.47404%204.51438%209.12608%205.00623C9.77812%205.49808%2010.2518%206.18936%2010.475%206.975L12.5%2013.9125C12.5508%2014.0766%2012.5672%2014.2495%2012.5482%2014.4203C12.5293%2014.5911%2012.4753%2014.7561%2012.3896%2014.9051C12.304%2015.054%2012.1886%2015.1838%2012.0506%2015.2861C11.9125%2015.3885%2011.7549%2015.4613%2011.5875%2015.5C11.4757%2015.5182%2011.3618%2015.5182%2011.25%2015.5Z'%20fill='black'/%3e%3cpath%20d='M20%2036.75C19.5055%2036.75%2019.0222%2036.6034%2018.6111%2036.3287C18.2%2036.054%2017.8795%2035.6635%2017.6903%2035.2067C17.5011%2034.7499%2017.4516%2034.2472%2017.548%2033.7623C17.6445%2033.2773%2017.8826%2032.8319%2018.2322%2032.4822C18.5819%2032.1326%2019.0273%2031.8945%2019.5123%2031.798C19.9972%2031.7016%2020.4999%2031.7511%2020.9567%2031.9403C21.4135%2032.1295%2021.804%2032.45%2022.0787%2032.8611C22.3534%2033.2722%2022.5%2033.7555%2022.5%2034.25C22.5%2034.913%2022.2366%2035.5489%2021.7678%2036.0178C21.2989%2036.4866%2020.663%2036.75%2020%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2036.75C27.0055%2036.75%2026.5222%2036.6034%2026.1111%2036.3287C25.7%2036.054%2025.3795%2035.6635%2025.1903%2035.2067C25.0011%2034.7499%2024.9516%2034.2472%2025.048%2033.7623C25.1445%2033.2773%2025.3826%2032.8319%2025.7322%2032.4822C26.0819%2032.1326%2026.5273%2031.8945%2027.0123%2031.798C27.4972%2031.7016%2027.9999%2031.7511%2028.4567%2031.9403C28.9135%2032.1295%2029.304%2032.45%2029.5787%2032.8611C29.8534%2033.2722%2030%2033.7555%2030%2034.25C30%2034.913%2029.7366%2035.5489%2029.2678%2036.0178C28.7989%2036.4866%2028.163%2036.75%2027.5%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2021.75H20C19.6685%2021.75%2019.3505%2021.6183%2019.1161%2021.3839C18.8817%2021.1495%2018.75%2020.8315%2018.75%2020.5C18.75%2020.1685%2018.8817%2019.8505%2019.1161%2019.6161C19.3505%2019.3817%2019.6685%2019.25%2020%2019.25H27.5C27.8315%2019.25%2028.1495%2019.3817%2028.3839%2019.6161C28.6183%2019.8505%2028.75%2020.1685%2028.75%2020.5C28.75%2020.8315%2028.6183%2021.1495%2028.3839%2021.3839C28.1495%2021.6183%2027.8315%2021.75%2027.5%2021.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_99_272'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",dy=({className:e})=>u.jsxs("div",{className:` ${e}`,children:[u.jsx("img",{src:cy,alt:"",className:"w-100 h-100"}),u.jsx("div",{className:"counter",children:"02"})]}),fy="/reactdeploy4/assets/logo-MiIbGZY7.jpg",py="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjM1cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzVweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IldoYXRzYXBwIj48cGF0aCBkPSJNMTYuMDA0LDMxYy0yLjg2OCwwLTUuNjQ2LTAuODExLTguMDUtMi4zNDdsLTUuMzQ4LDEuNzA5Yy0wLjE3OSwwLjA1Ny0wLjM3NiwwLjAwOS0wLjUwOS0wLjEyNSAgIGMtMC4xMzItMC4xMzQtMC4xNzgtMC4zMzItMC4xMTctMC41MWwxLjcyNS01LjE0NkMxLjkzNSwyMi4wNjEsMSwxOS4xLDEsMTZjMC00LjA3NiwxLjYxMi03Ljg5MSw0LjUzOS0xMC43NDIgICBDNS43MzYsNS4wNjYsNi4wNTMsNS4wNyw2LjI0Niw1LjI2N2MwLjE5MiwwLjE5OCwwLjE4OCwwLjUxNS0wLjAxLDAuNzA3QzMuNTA1LDguNjM2LDIsMTIuMTk2LDIsMTYgICBjMCwyLjk3NCwwLjkyMiw1LjgxMSwyLjY2NSw4LjIwNGMwLjA5NSwwLjEzMSwwLjEyMSwwLjMsMC4wNjksMC40NTRsLTEuNDkyLDQuNDUybDQuNjMzLTEuNDgxICAgYzAuMTQ0LTAuMDQ3LDAuMzAyLTAuMDI0LDAuNDI5LDAuMDU5QzEwLjU4OSwyOS4yLDEzLjI1MiwzMCwxNi4wMDQsMzBDMjMuNzIyLDMwLDMwLDIzLjcyLDMwLDE2YzAtNy43MTktNi4yNzgtMTQtMTMuOTk2LTE0ICAgYy0wLjAwMSwwLTAuMDAyLDAtMC4wMDMsMGMtMi4xNjcsMC00LjIzOCwwLjQ4MS02LjE2NCwxLjQyOUM5LjU4OSwzLjU1LDkuMjksMy40NDksOS4xNjgsMy4yMDJTOS4xNDcsMi42NTQsOS4zOTYsMi41MzIgICBDMTEuNDYsMS41MTYsMTMuNjgyLDEsMTUuOTk2LDFDMjQuMjcyLDEsMzEsNy43MjksMzEsMTZTMjQuMjcyLDMxLDE2LjAwNCwzMXoiIGZpbGw9IiMwMDgwMDAiLz48Zz48cGF0aCBkPSJNMjAuNjAyLDI0LjQ5M0wyMC42MDIsMjQuNDkzYy0xLjAxMSwwLTIuNDIyLTAuMzktNC40MzktMS4yMjZjLTIuNjMzLTEuMDktNS4yNDMtMy4zNzQtNy4zNS02LjQyOSAgICBsLTAuMDc1LTAuMTA3Yy0wLjY5Ni0wLjk1MS0xLjgyMy0yLjc3My0xLjgyMy00LjY3NWMwLTIuMjI5LDEuMTE1LTMuMzYsMS41OTItMy44NDNjMC40NDktMC40NjEsMS4xMi0wLjcwNiwxLjg3NC0wLjcwNiAgICBjMC4xOSwwLDAuMzYsMC4wMDksMC41MTUsMC4wMThjMC42MzUsMC4wMjUsMS4wMDMsMC4xODUsMS4zNTMsMS4wMjJsMC4zNjMsMC44OGMwLjM4NCwwLjkzMSwwLjg1NywyLjA4LDAuOTMxLDIuMjM1ICAgIGMwLjA4MiwwLjE2OSwwLjMzMSwwLjY4OCwwLjA1NCwxLjIyOGMtMC4xNDgsMC4zMTYtMC4yOTMsMC40ODMtMC40OTIsMC43MTNjLTAuMTQsMC4xNjEtMC4yMzMsMC4yNjEtMC4zMjgsMC4zNjEgICAgYy0wLjExLDAuMTE4LTAuMjIyLDAuMjM0LTAuMzM0LDAuMzc1Yy0wLjE5MywwLjIyNi0wLjE5MywwLjIyNi0wLjEyOCwwLjMzOWMwLjM3LDAuNjI1LDEuMTU3LDEuODI1LDIuMjUzLDIuOCAgICBjMS40MjIsMS4yNjUsMi41NzEsMS43MywzLjEyMywxLjk1NGwwLjEzNywwLjA1NmMwLjE0NSwwLjA2LDAuMzI4LDAuMTAzLDAuNDY1LTAuMDQyYzAuMjQ4LTAuMjY3LDAuNTYyLTAuNzA2LDAuODk0LTEuMTcxICAgIGwwLjE5OS0wLjI3OWMwLjM0OS0wLjQ5MywwLjc3OS0wLjU5NywxLjA3OC0wLjU5N2MwLjE3NSwwLDAuMzU3LDAuMDM1LDAuNTQzLDAuMTA1YzAuNDY1LDAuMTYyLDIuOTEyLDEuMzgxLDIuOTM3LDEuMzkzICAgIGwwLjIzNSwwLjExNWMwLjM1LDAuMTY4LDAuNjI2LDAuMzAxLDAuNzg0LDAuNTc5YzAuMjI5LDAuMzk4LDAuMTM5LDEuNDQyLTAuMjA5LDIuNDI3Yy0wLjQxNywxLjE3OS0xLjk2NywyLjEtMy4yMTMsMi4zNjggICAgQzIxLjI5MywyNC40MzgsMjAuOTk4LDI0LjQ5MywyMC42MDIsMjQuNDkzeiBNMTAuMzgsOC41MDdjLTAuNDcyLDAtMC45MDIsMC4xNDItMS4xMjQsMC4zNjljLTAuNDYxLDAuNDY4LTEuMzQyLDEuMzYxLTEuMzQyLDMuMTggICAgYzAsMS4xODEsMC41ODUsMi42NTgsMS42MDUsNC4wNTFsMC4xMTYsMC4xNjVjMS45OTgsMi44OTgsNC40NTIsNS4wNTUsNi45MDksNi4wNzJjMS44OTMsMC43ODUsMy4xODIsMS4xNSw0LjA1NywxLjE1bDAsMCAgICBjMC4zLDAsMC41MjMtMC4wNDIsMC43MjctMC4wODVjMC45NzMtMC4yMSwyLjE5OC0wLjkyOSwyLjQ3OS0xLjcyNGMwLjMwNC0wLjg1NywwLjI5OC0xLjUxNiwwLjI2Mi0xLjY0NyAgICBjLTAuMDAyLDAuMDMxLTAuMTgyLTAuMDU0LTAuMzI3LTAuMTI0bC0wLjI0OS0wLjEyMmMtMC43MDEtMC4zNTEtMi41MTMtMS4yMzYtMi44My0xLjM0N2MtMC4wODQtMC4wMzItMC4xNDgtMC4wNDUtMC4yMDItMC4wNDUgICAgYy0wLjA0NSwwLTAuMTM4LDAtMC4yNjQsMC4xNzhsLTAuMiwwLjI4Yy0wLjM1MSwwLjQ5Mi0wLjY4MiwwLjk1Ni0wLjk3NiwxLjI3MmMtMC4zNzcsMC40MDMtMS4wMjQsMC41MTUtMS41ODEsMC4yODMgICAgbC0wLjEyNy0wLjA1MmMtMC41NTctMC4yMjUtMS44NjItMC43NTMtMy40MTMtMi4xMzNjLTEuMTk2LTEuMDY2LTIuMDQ5LTIuMzYzLTIuNDUxLTMuMDQyYy0wLjQyMy0wLjcyOSwwLjAwNi0xLjIzMSwwLjIxMi0xLjQ3MiAgICBjMC4xMzEtMC4xNjMsMC4yNTktMC4yOTgsMC4zODctMC40MzRjMC4wODQtMC4wODksMC4xNjgtMC4xNzgsMC4yNTQtMC4yNzhjMC4yMjUtMC4yNTksMC4yOTktMC4zNDUsMC4zOTYtMC41NTIgICAgYzAuMDI5LTAuMDU3LDAuMDQ1LTAuMTM4LTAuMDU5LTAuMzU0Yy0wLjA3Ni0wLjE2LTAuNTYyLTEuMzM0LTAuOTUzLTIuMjg2bC0wLjM2Mi0wLjg3N2MtMC4xNjUtMC4zOTYtMC4xNjUtMC4zOTYtMC40NzktMC40MDggICAgQzEwLjcwMSw4LjUxNSwxMC41NDksOC41MDcsMTAuMzgsOC41MDd6IiBmaWxsPSIjMDA4MDAwIi8+PC9nPjxnPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQiIGZpbGw9IiMwMDgwMDAiIHI9IjAuNSIvPjwvZz48L2c+PC9zdmc+";var Kp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Hd=Ge.createContext&&Ge.createContext(Kp),Dn=function(){return Dn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dn.apply(this,arguments)},hy=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Zp(e){return e&&e.map(function(t,n){return Ge.createElement(t.tag,Dn({key:n},t.attr),Zp(t.child))})}function my(e){return function(t){return Ge.createElement(gy,Dn({attr:Dn({},e.attr)},t),Zp(e.child))}}function gy(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=hy(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Ge.createElement("svg",Dn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Dn(Dn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ge.createElement("title",null,o),e.children)};return Hd!==void 0?Ge.createElement(Hd.Consumer,null,function(n){return t(n)}):t(Kp)}function Xp(e){return my({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const vy=({className:e})=>{const t={border:"solid 0.5px purple"};return u.jsxs("div",{className:`input-group ${e}`,children:[u.jsx("div",{className:"input-group-prepend",children:u.jsx("button",{className:"btn btn-outline-secondary dropdown-toggle",style:t,type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Catégorie"})}),u.jsx("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button"}),u.jsx("div",{class:"input-group-append",children:u.jsxs("button",{class:"btn btn-outline-secondary ",type:"button",style:t,children:["   ",u.jsx(Xp,{size:24,color:"#333"})]})})]})},yy=ne(vy)`
    width:80%;
    min-width:25rem;
    @media screen and (max-width: 767px){
        display:none;
        
    }
`,tt={Home:"/",Products:"/produits",Categorie:"/produits/",Details:"/produit/",Info:"/info/"},xy=({className:e})=>{const{articles:t,categories:n}=E.useContext(io);E.useState([]);const[r,i]=E.useState(!1),[o,l]=E.useState(""),a=()=>{i(s=>!s)};return u.jsxs("div",{className:e,children:[u.jsx(Xp,{onClick:()=>a()}),u.jsxs("div",{className:r&&"activated",children:[u.jsxs("div",{className:"head",children:[u.jsx("input",{type:"text",value:o,className:"searchField",onChange:s=>l(s.target.value)}),u.jsxs("div",{className:"cross",onClick:()=>a(),children:[u.jsx("span",{}),u.jsx("span",{})]})]}),u.jsx("div",{className:"result",children:t.filter(s=>s.name.toUpperCase().includes(o.toUpperCase())||s.longName.toUpperCase().includes(o.toUpperCase())).length!=0?t.filter(s=>s.name.toUpperCase().includes(o.toUpperCase())||s.longName.toUpperCase().includes(o.toUpperCase())).map(s=>u.jsx($t,{className:"link",to:`${tt.Details}${s.id}`,onClick:()=>a(),children:u.jsxs("div",{className:"article",children:[u.jsx("div",{children:u.jsx("img",{src:s.image[0],alt:""})}),u.jsxs("div",{children:[u.jsx("div",{children:s.name}),u.jsx("div",{children:s.longName})]})]},s.id)})):u.jsx("div",{style:{color:"red",textAlign:"center",fontSize:"20px"},children:"Aucun Article correstondant"})})]})]})},wy=ne(xy)`
        display:none;
        

    @media screen and (max-width: 767px) {

        display:block;
        width:20px;
        color:#333;
        position: relative;

        transform:translateY(0%);
        /* &>div{
            display: none;
            border-radius : 5px;
            width: 100px;
            height: 25px;
            position: absolute;
            top :0;
            right: 1.5rem;
            background-color: grey;
        } */
        &>div{
            display: none;
            border-radius : 5px;
            width: 100vw;
            height: 100vh;
            position: absolute;
            top :-13px;
            right: -17px;
            background-color: grey;
            transform: translateX(70%);
            opacity: 0.2;
            flex-direction : column;

        }
        .head{
            display: flex;
            height: 6%;
            width:100%;
            background-color: #F9FF00;
        }
        .result{
            padding-top:1rem;
            height: 94%;
            width:100%;
            display: flex;
            flex-direction: column;
            gap: 4px;
            overflow-y: scroll;
                overflow-x:hidden;
            background-color: #DADAD6;
        }
        .searchField{
            height: 80%;
            width:90%;
            display: block;
            font-size: 18px;
            font-weight: bold;
            padding-left:10px;
            margin : auto .2rem auto .5rem;
            border-radius: 20px/20px;
            border: none;
            background-color: white;
        }
        .searchField:active{
            border: solid 1px black;
        }
        .cross{
            margin: auto 10px auto 0;
            position: relative;
            height:60%;
            width:10%;
        }
        .cross>span{
            display: block;
            width: 60%;
            position: absolute;
            left: 50%;
            top: 50%;
            background-color:black;
            height:2px;
        }
        .cross>span:nth-child(1){

            transform: translate(-50%, -50%) rotate(45deg);
        }
        .cross>span:nth-child(2){

            transform: translate(-50%, -50%) rotate(-45deg);
        }

        .activated{
            display:flex;
            animation: slideRight .5s forwards;

        }
        .article{
            display: flex;
            flex-direction:row;
            justify-content: center;
            align-items: center;
            height: 100px;
            width:100%;
            overflow: hidden;
            background-color: grey;
            flex-shrink:0;
        }
        .article>div:nth-child(1){
            height: 100%;
            aspect-ratio:1/1;
            background-color:grey;

            
        }
        .article>div:nth-child(2){
            height: 100%;
            width: 80%;    
            background-color:#DADAD6;   
            padding: 5px 10px 5px 10px;
        }
        .article>div:nth-child(2)>div:first-child{
            font-family: Arial, Helvetica, sans-serif !important;
            font-size:18px;
            font-weight : 700;
        }
        .article>div:nth-child(2)>div:last-child{
            font-size:16px;
        }
        img{
            width:100%;
            height:100%;
        }
        .link{
            text-decoration:none;
            color : black;
        }
        a{
            color : black;
            text-decoration:none;
        }

        @keyframes slideRight {
            to{
                opacity:1;
                transform: translateX(0%);

            }
            
        }
        
    }
`,Sy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:py,className:"w-100",alt:""})});ne(Sy)`

    width:35px;
    height:35px;
    min-height:15px;
    min-width:15px;
@media screen and (max-width:800px) {
    height:25px;
    width:25px;
        
    }

`;const Cy=({className:e})=>{const[t,n]=E.useState(!1);function r(){n(i=>!i),console.log(t)}return u.jsx("div",{className:e,children:u.jsxs("div",{className:t&&"menu-down",onClick:()=>r(),children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("div",{children:u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx($t,{to:`${tt.Categorie}telephone`,children:"Télephone"})}),u.jsx("li",{children:u.jsx($t,{to:`${tt.Categorie}montre`,children:"Montres"})}),u.jsx("li",{children:u.jsx($t,{to:`${tt.Categorie}accessoire`,children:"Accessoires"})}),u.jsx("li",{children:u.jsx($t,{to:`${tt.Info}modePaiement`,children:"Mode de paiement"})}),u.jsx("li",{children:u.jsx($t,{to:`${tt.Info}commentAcheter`,children:"Comment acheter chez nous ?"})}),u.jsx("li",{children:u.jsx($t,{to:`${tt.Info}aPropos`,children:"A propos"})})]})})]})})},jy=ne(Cy)`
        display:none;


        @media screen and (max-width: 767px) {
        width:17px;
        height:22px;
    
        &>div{
            height:100%;
            width:100%;

        }
        &>div>div{
            background-color:grey;
            border-right: solid .5px #DADAD6;
            position: absolute;
            width:80vw;
            height:100vh;
            position: absolute;
            top:2rem;
            opacity:0.2;
            left :-100%;
            transform: translateX(-100%);
            display: none;
            transition: display 2s ease-in;
            display	: flex;
            justify-content:space-between;
        }
        &>div>div>div{

            display: block;
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
            width:100%;
            background-color: black;   
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
            display: block;
            width:100%;
            height:100%;
            position: relative;
        }
        .menu-down>div{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            animation: right 1.3s;
            animation-fill-mode:forwards;



        }
        .menu-down ul li:nth-child(1){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:.7s;
        }
        .menu-down li:nth-child(2){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:.9s;
        }
        .menu-down li:nth-child(3){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1.1s;
        }
        .menu-down li:nth-child(4){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1.3s;
        }
        .menu-down li:nth-child(5){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1.5s;
        }
        li>*{
            text-decoration: none;
            color:black;

        }
        .menu-down li:nth-child(5){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1.7s;
        }
        .menu-down li:nth-child(5){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1.7s;
        }
        .menu-down li:nth-child(6){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:1.9s;
        }

        @keyframes liSlide {
                                    100%{
                transform : translateX(0%);
                opacity:1;

            }
        }

        display:block;
        transform:translateY(50%);
        ul{
            height:100%;
            list-style-type:none;
        }
        ul>li:last-child{
            float: bottom;
        }
        li{
            font-weight: 400;
            font-size: 19px;
            transform: translateX(-100%);
            opacity: 0.5;
            border-bottom: solid 1px #DADAD6;
            margin: 10px 0;
            margin-right: 1rem;
            color: black;
        }

        @keyframes right {

            
                        100%{
                transform : translateX(0%);
                opacity:1;

            }
            
        }
        
    }
`;ne(dy)`
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
`;const Ny=({className:e})=>u.jsx("div",{children:u.jsx(u.Fragment,{children:u.jsx("nav",{className:`navbar-css ${e}`,children:u.jsx("div",{className:" navbar  row container-fluid-css-2",children:u.jsxs("div",{className:"first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between",children:[u.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[u.jsx(jy,{}),u.jsx("div",{style:{marginRight:"6px"}}),u.jsxs($t,{to:tt.Home,className:"link-css title-css navbar-brand  d-block",children:[u.jsx("img",{src:fy,width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"ChezArdi"]})]}),u.jsx(yy,{}),u.jsxs("div",{className:"d-flex flex-row flex-row justify-content-between",children:[u.jsx(wy,{}),u.jsx("div",{style:{marginLeft:"12px"}})]})]})})})})});ne(uy)`
width:100%;
@media screen and (max-width: 500px) {
    
}
`;const ky=()=>u.jsx("div",{className:"",style:{backgroundColor:"black"},children:u.jsx("div",{class:"",style:{backgroundColor:"black"},children:u.jsxs("footer",{style:{backgroundColor:"grey"},className:"text-center text-lg-start",children:[u.jsx("div",{className:"container p-4",children:u.jsxs("div",{className:"row",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Nous contacter"}),u.jsxs("ul",{className:"list-unstyled mb-4",children:[u.jsx("li",{style:{color:"white"},children:"0810001000"}),u.jsx("li",{children:u.jsx("a",{mailTo:"",className:"text-white",children:"ardi2@gmail.com"})})]})]})}),u.jsx("div",{class:"text-center p-3 border-top border-black text-white",children:"© 2024 Copyright"})]})})}),My=ne(Ny)`
    div .first-col{
        padding-left:1.5rem;
    }
    div .second-col{
        padding-left:1.5rem;
    }
`,Po="/reactdeploy4/assets/png_2-op38kcqj.png",U="/reactdeploy4/assets/png_7-zH4XEwQ0.png",A="/reactdeploy4/assets/png_8-JODtVRir.png",Ey=[{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[Ft,$,U,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Po,$,U,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[vi,$,U,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[kr,$,U,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[Do,$,U,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[yi,$,U,A]},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[$,U,A]},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[$,U,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[Ft,$,U,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[$,U,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]},{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[Ft,$,U,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Po,$,U,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[vi,$,U,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[kr,$,U,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[Do,$,U,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[yi,$,U,A]},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[$,U,A]},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[$,U,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[Ft,$,U,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[$,U,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]},{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[Ft,$,U,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Po,$,U,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[vi,$,U,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[kr,$,U,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[Do,$,U,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[yi,$,U,A]},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[$,U,A]},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[$,U,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[Ft,$,U,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[$,U,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]},{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[Ft,$,U,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Po,$,U,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[vi,$,U,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[kr,$,U,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[Do,$,U,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[yi,$,U,A]},{id:7,categorie:"cosmetique",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[$,U,A]},{id:8,categorie:"cosmetique",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[$,U,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[Ft,$,U,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[$,U,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[$,U,A,A]}],Ly=[{category:"cosmetiques",slug:"Produits de beauté, manicure, pédicures, tous est disponible chez nous"},{category:"accessoires",slug:"Les chargeurs et tous type d'accessoires que"},{category:"telephones",slug:"iphone, samsung et tous types de telephone que vous voudrez vous procurer"},{category:"montres",slug:"Gucci, louis vuitton, davinchi, toustes ses marques sont disponibles ice chez nous"}],Dy=[{title:"aPropos",title2:"A propos de nous",slug:`VOUS FAIRE VIVRE UNE VIE MEILLEURE ET VOUS DONNER CONFIANCE EN VOUS ! Nous sommes une boutique en ligne basée à Kinshasa, Lubumbashi, Kolwezi et Likasi, et nous nous engageons activement à créer des produits remarquables qui vont vous aider à améliorer la qualité de votre vie, ainsi que celle de vos proches.


    Nous croyons que vous méritez d'avoir accès à des produits de qualité et nous ferons tout pour vous satisfaire. Nos produits sont minutieusement fabriqués avec amour et passion afin de vous offrir ce qu'il y a de mieux. Nous proposons une livraison rapide en moins de 48h, car nous ne voulons pas que vous ayez à attendre trop longtemps après avoir passé votre commande. De plus, nous travaillons chaque jour pour améliorer nos services afin de vous offrir une expérience gratifiante.`},{title:"commentAcheter",title2:"Comment acheter",slug:"Le site est conçu de manière simple pour aider chacun de vous à y accéder facilement et rapidement. Si vous êtes intéressé par l'un de nos produits, il vous suffit de cliquer sur l'icône correspondante, ce qui vous dirigera vers WhatsApp pour discuter ensuite avec nos agents de manière simple et rapide. Ainsi, vous pourrez passer votre commande en toute sécurité."},{title:"modePaiement",title2:"Mode de paiement",slug:"Dans le but de rassurer tout le monde, la boutique n'accepte pas de transfert d'argent ni paiement en ligne, seulement en cas d'urgence. Nous sommes une boutique en cours de développement, le paiement se fait cash à la livraison."}],io=Ge.createContext(),Py=()=>{const e={articles:Ey,categories:Ly};return u.jsx(io.Provider,{value:e,children:u.jsxs("div",{className:"theApp",children:[u.jsx(My,{}),u.jsx("div",{className:"container-fluid-css",children:u.jsx(V2,{})}),u.jsx("div",{children:u.jsx(ky,{})})]})})},Ty=({className:e})=>{const{articles:t,categories:n}=E.useContext(io),r=t.filter(a=>a.categorie=="accessoire"),i=t.filter(a=>a.categorie=="montre"),o=t.filter(a=>a.categorie=="telephone"),l=t.filter(a=>a.categorie=="cosmetique");return u.jsxs("div",{className:e,style:{backgroundColor:de.MAIN},children:[u.jsx("div",{className:"nav",children:u.jsx("div",{children:"Cliquer sur les barres  en haut à gauche pour ouvrir le menu, cliquer sur l'icon de recherche en haut à gauche pour rechercher rapidement parmi tous nos articles et enfin, cliquer sur le bouton acheter maintenant pour discuter diretement avec nous"})}),u.jsxs("div",{className:"section2-1",children:[u.jsx(To,{id:"accessoitre-link",articles:l,categories:n,category:"cosmetiques"}),u.jsx(To,{id:"accessoitre-link",articles:r,categories:n,category:"accessoires"}),u.jsx(To,{id:"montre-link",articles:i,categories:n,category:"montres"}),u.jsx(To,{id:"potable-link",articles:o,categories:n,category:"telephones"}),u.jsxs("div",{className:"box2-1 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:Ft,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-2 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:Ft,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-3 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Montres connectées"})}),u.jsx("div",{className:"img3 img",children:u.jsx("img",{src:kr,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-4 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Balladeurs"})}),u.jsx("div",{className:"img4 img",children:u.jsx("img",{src:vi,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-5 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Cables chargeurs"})}),u.jsx("div",{className:"img5 img",children:u.jsx("img",{src:yi,width:"100%",alt:"",className:"w-100 h-100"})})]}),u.jsxs("div",{className:"box2-6 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Chargeurs"})}),u.jsx("div",{className:"img6 img",children:u.jsx("img",{src:$,alt:"",width:"100%",className:"h-100 "})})]})]}),u.jsx("div",{})]})},To=({id:e,articles:t,category:n,categories:r})=>{const i=t[0],[o,l]=E.useState({...i}),[a,s]=E.useState(i.id);function c(d){const h=t.filter(m=>m.id==d);l(h[0]),s(d)}return u.jsxs("div",{style:{width:"100%"},className:"list-article",children:[u.jsxs("div",{className:"category",style:{},children:[u.jsx("div",{}),u.jsx("div",{children:n}),u.jsx("div",{id:e})]}),u.jsx("div",{className:"articles",children:t.map((d,h)=>u.jsx(zy,{...d},h))}),u.jsxs("div",{className:"slug",children:[u.jsx("div",{}),u.jsx("div",{children:r.filter(d=>d.category===n)[0].slug})]}),u.jsx("div",{className:"listImg",style:{overflowX:"hidden"},children:u.jsx("div",{children:t.map(d=>u.jsx("div",{className:`${a==d.id?"imgHover":""}`,style:{height:"100%",aspectRatio:"1/1",flexShrink:0},children:u.jsx("img",{src:d.image[0],className:"img-fluid",alt:"",style:{filter:"drop-shadow(10px 10px 5px 4px)",display:"block",height:"100%",width:"100%"},onClick:()=>c(d.id)},d.id)}))})}),u.jsx("div",{className:"articleBox",children:u.jsx(Iy,{...o})}),u.jsx("div",{className:"square",children:t.map(d=>u.jsxs("div",{className:"square-box",children:[u.jsx($t,{className:"link",to:`${tt.Details}${d.id}`,onClick:()=>active(),children:u.jsx("img",{src:d.image[0],width:"100%",alt:"",className:"w-100"})}),u.jsxs("div",{children:[u.jsx("span",{children:d.name}),u.jsxs("span",{children:[u.jsx("span",{className:"squarePrice",children:d.price})," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d.pricePromo||u.jsxs("span",{className:"promo-1",children:[d.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("p",{}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})]}))})]})},zy=({name:e,image:t,price:n,pricePromo:r,longName:i})=>u.jsxs("div",{className:"singleArticle",children:[u.jsx("div",{children:u.jsx("img",{src:t[0],alt:"",width:"100%",height:"100%"})}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsx("span",{children:i}),u.jsx("div",{className:"_button",children:"Acheter maintenant"})]}),Iy=({name:e,image:t,price:n,pricePromo:r,longName:i})=>{const[o,l]=E.useState(0);return E.useEffect(()=>{const a=setInterval(()=>{l(s=>s+1)},4e3);return()=>{clearInterval(a)}},[]),u.jsxs("div",{className:"singleArticle2",children:[u.jsx("div",{children:u.jsx("img",{src:t[o%t.length],alt:"",width:"100%",height:"100%"})}),u.jsx("div",{children:t.map((a,s,c)=>u.jsx("span",{className:`${o%c.length==s&&"imageOn"} circle`,onClick:()=>l(s)}))}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign2",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsxs("span",{children:[" ",i," "]}),u.jsx("div",{}),u.jsx("div",{className:"_button",children:u.jsx("a",{href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})},_y=ne(Ty)`
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
    background-color:transparent;
    opacity:1;
    margin-bottom:3px;
    border: solid 1px #E5E9EC;
  }
  .nav>div{


  display : none;
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

      .singleArticle2>div:nth-child(1){
    display:flex;
    flex-shrink:0;
    justify-content:center;
    align-items:center;
     width:100% !important;
    height:290px !important;
    margin-bottom:10px;
  }
      .singleArticle2>div:nth-child(1)>img{
      display:block;

     
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

singlearticle>*{
  padding-left:10px;
}

    .singleArticle>span:nth-child(2){
      font-size:40px;
      color: ${V.MAIN};
      padding-bottom:.6rem;
  }
  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-20%);
    font-size:12px;

  }
  
  .singleArticle>span:nth-child(2)>.dollarSign,.singleArticle2>span:nth-child(3)>.dollarSign{
    transform:translate(-50%,-30%);
    

  }
  .promo-1{
    margin-left:10px;
    text-decoration:line-through ${V.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${V.SECOND};
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${V.MAIN};

  }
  .dollarSign2{
    font-size:30px;
    font-weight:0;
    line-height:14px;
    font-weight:900;
    transform:translate(-100%,-30%);
    color :  ${V.MAIN};

  }
    .singleArticle2>span:nth-child(3){
      font-size:55px;
      color:  ${V.MAIN};
      text-align:center;
  }
    .singleArticle>span:nth-child(3){
      font-size:27px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:27px;

  }
    .singleArticle2>span:nth-child(4){
      font-size:40px;
      text-transform:uppercase;
      font-weight:800;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
      padding-bottom:10px;
  }
    .singleArticle>span:nth-child(4){
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color:  ${V.SECOND};
      height:45px;
      overflow-y:scroll;
  }
  .singleArticle2>div:nth-child(2){
    height: 10px;
    width: 100%;
    gap : 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle{
    border : solid .5px grey;
    height: 100%;
    aspect-ratio:1/1;
    border-radius:50%;
    background-color: transparent;
  }
  .imageOn{
    background-color:grey;
  }
    .singleArticle2>span:nth-child(5){
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: ${V.SECOND};
      height:70px;
      text-align:center;
      overflow-y:scroll;
  }
  ._button{
    text-align:center;
    font-weight:100;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:1rem 1rem;
    color: ${V.MAIN}
  }
    ._button:active{
        background-color:${de.SECOND} ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color:  ${V.MAIN};


  }


    .singleArticle>div:nth-child(1){
    display:flex;
    flex-shrink:0;
    justify-content:center;
    align-items:center;
     margin:0;
     width:300px !important;
    height:300px !important;
  }
    .singleArticle>div:nth-child(1)>img{
      display:block;

     
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
    margin:8px 0;
    min-height:0rem;
    width:100%;
    overflow:hidden;
    background-color:${de.MAIN};

  }

  .listImg{
    /* position: absolute;
    top:45rem;
    left:0; */
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
    /* position: absolute;
    top:0;
    right:0; */
    width:100%;
    padding-top:1rem;
    height:35rem;
    background-color:${de.MAIN};

  }

  .slug{
    /* position: absolute;
    left:0;
    top:35rem; */
    display:block;
    overflow-x:hidden;
    min-height:0rem;
    width:100%;
    background-color:${de.MAIN} ;
  }
  .slug>div:nth-child(1){

  }
  .slug>div:nth-child(2){

    background-color: transparent;
    text-align: left;
    font-size:18px;
    padding:8px;
    color :  ${V.MAIN};


  }
  .category{
    margin:0;
    padding:0;
    display:block;
    width:100%;
    /* position: absolute;
    top:0;
    left:0; */
    overflow-x:hidden;
    overflow-y:hidden;
    background-color:transparent;
  }
  .category>div:nth-child(1){

    background-color:grey;
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:${de.MAIN};
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    display:none;
  }
   .category>div:nth-child(3){
    display:none;
   }
    .category>div:nth-child(2){
    font-size:22px;
    text-transform:uppercase;
    width:100%;
    text-align: center;
    line-height:25px;
    text-decoration:underline white 1px;
    color :  ${V.MAIN};
    padding-top:8%;


  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div{
    border-left: double 1px ${V.SECOND};
    margin: 1rem;

    line-height:25px;
    font-size : 16px;
    font-weight:0;
    padding-left:0.5rem;
    text-align:justify;
  display : block;
  color :  ${V.MAIN};
}
 
  .section2-1{
  height: unset;
  min-height:100%;
  width: 100%;
  display: grid;
  margin-top:0px;
  grid-template-columns:repeat(1,100%);
  /* grid-template-rows:130.4rem 130.4rem 130.4rem ; */
  grid-template-rows:unset ;
  
  grid-template-areas:unset;
  gap:0px;
}
.nav{
  margin-top:4rem;

}
.section2-1+div{
  height:1rem;
  width:100%;
  background-color:${de.MAIN};
}
.square{
  /* position: absolute;
  top:90rem;
  left:0; */
  min-height:0rem;
  gap: 0px 1px;
  overflow:hidden;
  display:grid;
  grid-template-columns:50% 50%;
  grid-template-rows:unset;
}
.square-box{

  position: relative;
  height:17rem;
  width:100%;
  background-color:${de.MAIN};
  overflow: hidden;
}
.square-box::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:${de.FOURTH} ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
.square-box img{
  width:100%;
  height:60%;
  display: block;
}
.square-box>div>span:nth-child(1){

  font-weight:100;
  text-transform: uppercase;
  color :  ${V.SECOND};
}
.square-box>div>span:nth-child(2){

  color :  ${V.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:16px;
  color:${V.MAIN}
}
.square-box>div>div{
  color :  ${V.FOURTH};
  text-decoration:underline;
  font-size:14px;
  color:${V.MAIN};
    font-weight:100;
    /* padding:0 5px; */
    /* border: solid 1px grey;
    border-radius:10px/10px; */

}
.square-box>div>span{
  display:block;
}
.square-box>div{
  display:flex;
  line-height:20px;
  padding-left:.4rem;
  color: ${V.SECOND};
  background-color:${de.MAIN};
  flex-direction: column;
  /* align-items:center; */
  justify-content: center;
  width:100%;
  height:25%;
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
  width:100%;
  min-height:100%;
  /* height:100%; */
  overflow-y:hidden;
  background-color:${de.MAIN};
  padding:0;
  margin:0;
}
  .box2-1 {
    grid-area: unset;
    background-color: ${de.MAIN};
}

.box2-2 {
    grid-area: unset;
    background-color: ${de.MAIN};
}

.box2-3 {
    grid-area: unset;
    background-color: ${de.MAIN};
}

.box2-4 {
    grid-area: unset;
    background-color: ${de.MAIN};
}

.box2-5 {
    grid-area: unset;
    background-color: ${de.MAIN};
}

.box2-6 {
    grid-area: unset;
    background-color: ${de.MAIN};
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
`;ne(Gp)`
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
`;const Ay=()=>{const{pathname:e}=an();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),u.jsxs("div",{className:"home-screen",style:{backgroundColor:de.MAIN},children:[u.jsx(Gp,{}),u.jsx(_y,{})]})},Ry="/reactdeploy4/assets/jpg_1-7lt4SJ85.jpg",Oy=({className:e})=>u.jsx("div",{className:e,children:u.jsxs("div",{className:"first",children:[u.jsx("div",{className:"img-content",children:u.jsx("img",{src:Ry,width:"100%",alt:"",srcset:""})}),u.jsx("div",{className:"text",children:"Livraison où que vous soyez à Kinshasa"})]})}),Fy=ne(Oy)`
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

`,$y="/reactdeploy4/assets/jpg_2-1pXFpQc3.jpg",Uy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("div",{className:"image"})}),_e=ne(Uy)`
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

`,by=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"image",children:u.jsx("img",{src:$y,alt:""})})}),u.jsxs("div",{className:"second",children:[u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{})]})]}),By=ne(by)`
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
`,Hy=()=>u.jsxs("div",{children:[u.jsx(Fy,{}),u.jsx(By,{})]}),Wy=()=>{const{pathname:e}=an();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),u.jsx("div",{children:u.jsx(Hy,{})})},jl=()=>u.jsx("div",{className:"",style:{marginTop:"3rem",height:"60rem"},children:u.jsx("p",{style:{fontSize:"60px",textAlign:"center"},children:"404"})}),Vy=({className:e})=>{const{pathname:t}=an();E.useEffect(()=>{window.scrollTo(0,0)},[t]);const{articles:n,categories:r}=E.useContext(io),{categorie:i}=Fu();return n.filter(o=>o.categorie==i).length==0?u.jsx(jl,{}):u.jsxs("div",{style:{paddingTop:"3.4rem",backgroundColor:de.MAIN},children:[u.jsx("div",{style:{fontSize:"22px",textTransform:"uppercase",fontWeight:"500",textAlign:"center",lineHeight:"35px",marginBottom:"10px",color:`${V.SECOND}`,textDecoration:"underline white 1px"},children:i}),u.jsx("div",{className:e,children:n.filter(o=>o.categorie==i).map(o=>u.jsxs("div",{className:"square-box",children:[u.jsx($t,{className:"link",to:`${tt.Details}${o.id}`,onClick:()=>active(),children:u.jsx("img",{src:o.image[0],width:"100%",alt:"",className:"w-100"})}),u.jsxs("div",{children:[u.jsx("span",{children:o.name}),u.jsxs("span",{children:[o.price," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!o.pricePromo||u.jsxs("span",{className:"promo-1",children:[o.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("p",{}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})]}))})]})},Qy=ne(Vy)`

  width:100%;

    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2px 2px;

  overflow:hidden;

    background-color:${de.MAIN};

    a{
        color : ${V.MAIN};
        text-decoration: none;
    }
      .promo-1{
    margin-left:10px;
    text-decoration:line-through ${V.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${V.SECOND};
  }
.square-box{

  position: relative;
  height:  17rem;

  width:100%;
  background-color:${de.MAIN};
  overflow: hidden;
}
.square-box::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:${de.FOURTH} ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
.square-box img{
  width:100%;
  height:60%;
  display: block;
}
.square-box>div>span:nth-child(1){

  font-weight:100;
  text-transform: uppercase;
  color :  ${V.SECOND};
}
.square-box>div>span:nth-child(2){

  color :  ${V.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:16px;
  color:${V.MAIN}
}
.squarePrice{
  font-size:16px;
  color:${V.MAIN}
}
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${V.MAIN};

  }
.square-box>div>div{
  color :  ${V.FOURTH};
  text-decoration:underline;
  font-size:14px;
  color:${V.MAIN};
    font-weight:100;
    /* padding:0 5px; */
    /* border: solid 1px grey;
    border-radius:10px/10px; */

}
.square-box>div>span{
  display:block;
}
.square-box>div{
  display:flex;
  line-height:20px;
  padding-left:.4rem;
  color: ${V.SECOND};
  background-color:${de.MAIN};
  flex-direction: column;
  /* align-items:center; */
  justify-content: center;
  width:100%;
  height:25%;
}


`,Yy=({className:e})=>{const{pathname:t}=an(),[n,r]=E.useState(0),{articles:i}=E.useContext(io),{id:o}=Fu(),l=i.filter(x=>x.id===Number(o))[0];if(!l)return u.jsx(jl,{});const{name:a,image:s,price:c,pricePromo:d,longName:h,slug:m}=l;return E.useEffect(()=>{window.scrollTo(0,0),r(0)},[t]),u.jsxs("div",{className:`${e} `,children:[u.jsxs("div",{className:"",children:[u.jsx("div",{children:l.image.map((x,S,w)=>u.jsx("div",{className:`${S==n&&"activate"} imageBox`,onClick:()=>r(S),children:u.jsx("img",{src:x,alt:""})},S))}),u.jsxs("div",{className:"grid-center",children:[u.jsx("img",{src:s[n],alt:""})," "]})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"price",children:[c," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d||u.jsxs("span",{className:"promo-1",children:[d," ",u.jsx("span",{className:"dollarSign2",children:"$"})]})," "]}),u.jsxs("span",{className:"maincolor",children:[a," "]}),u.jsxs("span",{className:"maincolor",children:[" ",h," "]}),u.jsxs("span",{className:"maincolor",children:[" ",m," "]})]}),u.jsx("div",{className:"_button",children:u.jsx("a",{href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})},Gy=ne(Yy)`
background-color :${de.MAIN};
padding-bottom: 3rem;
margin-top : 3.3rem;

@media screen and (max-width:745px){
        &>div:nth-child(1){
        display:grid;
        grid-template-columns: 20% 80%;
        min-height: 50vh;
        width: 100%;
        overflow: hidden;
    }
    &>div:nth-child(2){
        display:grid;
        place-content: center;
    }
    &>div:nth-child(1)>div:first-child{
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        gap:5px;
    }
    .imageBox{
        width:100%;
        aspect-ratio:1/1;

    }

    img{
      
        width : 100%;
        height: 100%;
    }

    .activate{
        position : relative;
    }
    .activate::after{
        content :"";
        position:absolute;
        width:100%;
        height: 100%;
        top :0;
        left : 0;
        background-color:rgba(0,0,0,0.5);


    }
    .grid-center{
        border : solid 1px white;
    }


    /* -------------------------- */

    &>div:nth-child(2)>span{
        display : block;
        width:100%;
        text-align: center;
    }
    .price span{        
        display:inline-block;
          }
    .price>.dollarSign{    
    transform:translate(-50%,-2%);
    font-size:16px;
    color: ${V.MAIN};

  }
  .dollarSign2{
    font-size:14px;
    font-weight:0;
    line-height:14px;
    transform:translate(-10%,-3%);
    color :  ${V.MAIN};

  }
    .promo-1{
    margin-left:10px;
    text-decoration:line-through ${V.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${V.SECOND};
  }
  .price{      
    font-size:20px;
      font-family:_salsa !important;
      color: ${V.MAIN};
      text-align:center;
  }
  .maincolor{
    color:${V.MAIN}
  }
  a{
    color : black;
    text-decoration: none;
  }
    ._button{
    text-align:center;
    padding:.3rem;
  border: solid 1px  ${V.MAIN} ;

    border-radius:30px/30px;
    margin:1rem 1rem;

  }
  ._button>a{
    color: ${V.MAIN};
  }
  .price+span{
    font-size : 26px;
  }

    
}


`,Ky=({className:e})=>{const{pathname:t}=an();E.useEffect(()=>{window.scrollTo(0,0)},[t]);const{information:n}=Fu(),r=Dy.filter(i=>i.title===n)[0];return u.jsxs("div",{className:`${e}`,children:[u.jsx("div",{children:r.title2}),u.jsx("div",{children:r.slug})]})},Zy=ne(Ky)`

    min-height:80vh;
    min-width:100vw;
    padding:5rem .5rem 0 .5rem;
    background-color:${de.MAIN};
    &>div:nth-child(1){
        font-size:16px;
        text-decoration:underline;
        text-transform:uppercase;
        color:${V.MAIN};
        letter-spacing:1px;
        text-align: center;

    }
    &>div:nth-child(1)+div{
        margin-top:.8rem;
        font-size:16px;
        color:${V.MAIN};
        line-height:25px;
        text-align:justify;
        margin:1.5rem;
    }

`,Xy=q2(Ts(u.jsxs(Vt,{path:"/",element:u.jsx(Py,{}),children:[u.jsx(Vt,{index:!0,element:u.jsx(Ay,{})}),u.jsx(Vt,{path:tt.Products,element:u.jsx(Wy,{})}),u.jsx(Vt,{path:`${tt.Categorie}:categorie`,element:u.jsx(Qy,{})}),u.jsx(Vt,{path:`${tt.Details}:id`,element:u.jsx(Gy,{})}),u.jsx(Vt,{path:`${tt.Info}:information`,element:u.jsx(Zy,{})}),u.jsx(Vt,{path:"/error",element:u.jsx(jl,{})}),u.jsx(Vt,{path:"*",element:u.jsx(jl,{})})]})));_a.createRoot(document.getElementById("root")).render(u.jsx(Ge.StrictMode,{children:u.jsx(ag,{router:Xy})}));
