function gf(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xf={exports:{}},Ol={},wf={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ao=Symbol.for("react.element"),Uh=Symbol.for("react.portal"),Bh=Symbol.for("react.fragment"),Hh=Symbol.for("react.strict_mode"),Wh=Symbol.for("react.profiler"),Yh=Symbol.for("react.provider"),Vh=Symbol.for("react.context"),Qh=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Kh=Symbol.for("react.memo"),qh=Symbol.for("react.lazy"),yc=Symbol.iterator;function Zh(e){return e===null||typeof e!="object"?null:(e=yc&&e[yc]||e["@@iterator"],typeof e=="function"?e:null)}var Sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cf=Object.assign,jf={};function qr(e,t,n){this.props=e,this.context=t,this.refs=jf,this.updater=n||Sf}qr.prototype.isReactComponent={};qr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function kf(){}kf.prototype=qr.prototype;function Js(e,t,n){this.props=e,this.context=t,this.refs=jf,this.updater=n||Sf}var eu=Js.prototype=new kf;eu.constructor=Js;Cf(eu,qr.prototype);eu.isPureReactComponent=!0;var xc=Array.isArray,Nf=Object.prototype.hasOwnProperty,tu={current:null},Mf={key:!0,ref:!0,__self:!0,__source:!0};function Ef(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Nf.call(t,r)&&!Mf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ao,type:e,key:o,ref:l,props:i,_owner:tu.current}}function Xh(e,t){return{$$typeof:ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function nu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ao}function Jh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wc=/\/+/g;function pa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Jh(""+e.key):t.toString(36)}function Wo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ao:case Uh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+pa(l,0):r,xc(i)?(n="",e!=null&&(n=e.replace(wc,"$&/")+"/"),Wo(i,t,n,"",function(c){return c})):i!=null&&(nu(i)&&(i=Xh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(wc,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",xc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+pa(o,a);l+=Wo(o,t,n,s,i)}else if(s=Zh(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+pa(o,a++),l+=Wo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function wo(e,t,n){if(e==null)return e;var r=[],i=0;return Wo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function em(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Xe={current:null},Yo={transition:null},tm={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:tu};Z.Children={map:wo,forEach:function(e,t,n){wo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!nu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=qr;Z.Fragment=Bh;Z.Profiler=Wh;Z.PureComponent=Js;Z.StrictMode=Hh;Z.Suspense=Gh;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tm;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cf({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=tu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Nf.call(t,s)&&!Mf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ao,type:e.type,key:i,ref:o,props:r,_owner:l}};Z.createContext=function(e){return e={$$typeof:Vh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Yh,_context:e},e.Consumer=e};Z.createElement=Ef;Z.createFactory=function(e){var t=Ef.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:Qh,render:e}};Z.isValidElement=nu;Z.lazy=function(e){return{$$typeof:qh,_payload:{_status:-1,_result:e},_init:em}};Z.memo=function(e,t){return{$$typeof:Kh,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Yo.transition;Yo.transition={};try{e()}finally{Yo.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return Xe.current.useCallback(e,t)};Z.useContext=function(e){return Xe.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Xe.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Xe.current.useEffect(e,t)};Z.useId=function(){return Xe.current.useId()};Z.useImperativeHandle=function(e,t,n){return Xe.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Xe.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Xe.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Xe.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Xe.current.useReducer(e,t,n)};Z.useRef=function(e){return Xe.current.useRef(e)};Z.useState=function(e){return Xe.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Xe.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Xe.current.useTransition()};Z.version="18.2.0";wf.exports=Z;var E=wf.exports;const qe=yf(E),nm=gf({__proto__:null,default:qe},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm=E,im=Symbol.for("react.element"),om=Symbol.for("react.fragment"),lm=Object.prototype.hasOwnProperty,am=rm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sm={key:!0,ref:!0,__self:!0,__source:!0};function Lf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)lm.call(t,r)&&!sm.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:im,type:e,key:o,ref:l,props:i,_owner:am.current}}Ol.Fragment=om;Ol.jsx=Lf;Ol.jsxs=Lf;xf.exports=Ol;var u=xf.exports,Ga={},Df={exports:{}},gt={},Tf={exports:{}},Pf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,A){var U=z.length;z.push(A);e:for(;0<U;){var q=U-1>>>1,ee=z[q];if(0<i(ee,A))z[q]=A,z[U]=ee,U=q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var A=z[0],U=z.pop();if(U!==A){z[0]=U;e:for(var q=0,ee=z.length,st=ee>>>1;q<st;){var je=2*(q+1)-1,He=z[je],ke=je+1,ut=z[ke];if(0>i(He,U))ke<ee&&0>i(ut,He)?(z[q]=ut,z[ke]=U,q=ke):(z[q]=He,z[je]=U,q=je);else if(ke<ee&&0>i(ut,U))z[q]=ut,z[ke]=U,q=ke;else break e}}return A}function i(z,A){var U=z.sortIndex-A.sortIndex;return U!==0?U:z.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],d=1,h=null,m=3,x=!1,S=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=z)r(c),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(c)}}function k(z){if(w=!1,g(z),!S)if(n(s)!==null)S=!0,Ot(L);else{var A=n(c);A!==null&&le(k,A.startTime-z)}}function L(z,A){S=!1,w&&(w=!1,p(T),T=-1),x=!0;var U=m;try{for(g(A),h=n(s);h!==null&&(!(h.expirationTime>A)||z&&!J());){var q=h.callback;if(typeof q=="function"){h.callback=null,m=h.priorityLevel;var ee=q(h.expirationTime<=A);A=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(s)&&r(s),g(A)}else r(s);h=n(s)}if(h!==null)var st=!0;else{var je=n(c);je!==null&&le(k,je.startTime-A),st=!1}return st}finally{h=null,m=U,x=!1}}var v=!1,j=null,T=-1,I=5,$=-1;function J(){return!(e.unstable_now()-$<I)}function Ce(){if(j!==null){var z=e.unstable_now();$=z;var A=!0;try{A=j(!0,z)}finally{A?ye():(v=!1,j=null)}}else v=!1}var ye;if(typeof f=="function")ye=function(){f(Ce)};else if(typeof MessageChannel<"u"){var et=new MessageChannel,cn=et.port2;et.port1.onmessage=Ce,ye=function(){cn.postMessage(null)}}else ye=function(){N(Ce,0)};function Ot(z){j=z,v||(v=!0,ye())}function le(z,A){T=N(function(){z(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Ot(L))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var U=m;m=A;try{return z()}finally{m=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,A){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var U=m;m=z;try{return A()}finally{m=U}},e.unstable_scheduleCallback=function(z,A,U){var q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=U+ee,z={id:d++,callback:A,priorityLevel:z,startTime:U,expirationTime:ee,sortIndex:-1},U>q?(z.sortIndex=U,t(c,z),n(s)===null&&z===n(c)&&(w?(p(T),T=-1):w=!0,le(k,U-q))):(z.sortIndex=ee,t(s,z),S||x||(S=!0,Ot(L))),z},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(z){var A=m;return function(){var U=m;m=A;try{return z.apply(this,arguments)}finally{m=U}}}})(Pf);Tf.exports=Pf;var um=Tf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf=E,mt=um;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _f=new Set,$i={};function lr(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for($i[e]=t,e=0;e<t.length;e++)_f.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ka=Object.prototype.hasOwnProperty,cm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sc={},Cc={};function dm(e){return Ka.call(Cc,e)?!0:Ka.call(Sc,e)?!1:cm.test(e)?Cc[e]=!0:(Sc[e]=!0,!1)}function fm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pm(e,t,n,r){if(t===null||typeof t>"u"||fm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var ru=/[\-:]([a-z])/g;function iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ru,iu);Be[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ru,iu);Be[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ru,iu);Be[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ou(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pm(t,n,i,r)&&(n=null),r||i===null?dm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,So=Symbol.for("react.element"),hr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),qa=Symbol.for("react.profiler"),If=Symbol.for("react.provider"),Rf=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Za=Symbol.for("react.suspense"),Xa=Symbol.for("react.suspense_list"),su=Symbol.for("react.memo"),vn=Symbol.for("react.lazy"),Of=Symbol.for("react.offscreen"),jc=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=jc&&e[jc]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,ha;function wi(e){if(ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ha=t&&t[1]||""}return`
`+ha+e}var ma=!1;function ga(e,t){if(!e||ma)return"";ma=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ma=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wi(e):""}function hm(e){switch(e.tag){case 5:return wi(e.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 2:case 15:return e=ga(e.type,!1),e;case 11:return e=ga(e.type.render,!1),e;case 1:return e=ga(e.type,!0),e;default:return""}}function Ja(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case hr:return"Portal";case qa:return"Profiler";case lu:return"StrictMode";case Za:return"Suspense";case Xa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rf:return(e.displayName||"Context")+".Consumer";case If:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case su:return t=e.displayName||null,t!==null?t:Ja(e.type)||"Memo";case vn:t=e._payload,e=e._init;try{return Ja(e(t))}catch{}}return null}function mm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ja(t);case 8:return t===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Af(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gm(e){var t=Af(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Co(e){e._valueTracker||(e._valueTracker=gm(e))}function Ff(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Af(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function es(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $f(e,t){t=t.checked,t!=null&&ou(e,"checked",t,!1)}function ts(e,t){$f(e,t);var n=zn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ns(e,t.type,n):t.hasOwnProperty("defaultValue")&&ns(e,t.type,zn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ns(e,t,n){(t!=="number"||al(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Si=Array.isArray;function Tr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Si(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zn(n)}}function bf(e,t){var n=zn(t.value),r=zn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ec(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function is(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,Bf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Li={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vm=["Webkit","ms","Moz","O"];Object.keys(Li).forEach(function(e){vm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Li[t]=Li[e]})});function Hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Li.hasOwnProperty(e)&&Li[e]?(""+t).trim():t+"px"}function Wf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ym=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(ym[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function ls(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var as=null;function uu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ss=null,Pr=null,zr=null;function Lc(e){if(e=co(e)){if(typeof ss!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Ul(t),ss(e.stateNode,e.type,t))}}function Yf(e){Pr?zr?zr.push(e):zr=[e]:Pr=e}function Vf(){if(Pr){var e=Pr,t=zr;if(zr=Pr=null,Lc(e),t)for(e=0;e<t.length;e++)Lc(t[e])}}function Qf(e,t){return e(t)}function Gf(){}var va=!1;function Kf(e,t,n){if(va)return e(t,n);va=!0;try{return Qf(e,t,n)}finally{va=!1,(Pr!==null||zr!==null)&&(Gf(),Vf())}}function Ui(e,t){var n=e.stateNode;if(n===null)return null;var r=Ul(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var us=!1;if(tn)try{var li={};Object.defineProperty(li,"passive",{get:function(){us=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{us=!1}function xm(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Di=!1,sl=null,ul=!1,cs=null,wm={onError:function(e){Di=!0,sl=e}};function Sm(e,t,n,r,i,o,l,a,s){Di=!1,sl=null,xm.apply(wm,arguments)}function Cm(e,t,n,r,i,o,l,a,s){if(Sm.apply(this,arguments),Di){if(Di){var c=sl;Di=!1,sl=null}else throw Error(D(198));ul||(ul=!0,cs=c)}}function ar(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function qf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dc(e){if(ar(e)!==e)throw Error(D(188))}function jm(e){var t=e.alternate;if(!t){if(t=ar(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Dc(i),e;if(o===r)return Dc(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Zf(e){return e=jm(e),e!==null?Xf(e):null}function Xf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Xf(e);if(t!==null)return t;e=e.sibling}return null}var Jf=mt.unstable_scheduleCallback,Tc=mt.unstable_cancelCallback,km=mt.unstable_shouldYield,Nm=mt.unstable_requestPaint,Me=mt.unstable_now,Mm=mt.unstable_getCurrentPriorityLevel,cu=mt.unstable_ImmediatePriority,e0=mt.unstable_UserBlockingPriority,cl=mt.unstable_NormalPriority,Em=mt.unstable_LowPriority,t0=mt.unstable_IdlePriority,Al=null,Ht=null;function Lm(e){if(Ht&&typeof Ht.onCommitFiberRoot=="function")try{Ht.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:Pm,Dm=Math.log,Tm=Math.LN2;function Pm(e){return e>>>=0,e===0?32:31-(Dm(e)/Tm|0)|0}var ko=64,No=4194304;function Ci(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=Ci(a):(o&=l,o!==0&&(r=Ci(o)))}else l=n&~i,l!==0?r=Ci(l):o!==0&&(r=Ci(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function zm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _m(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-zt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=zm(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function ds(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function n0(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function so(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function Im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function du(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function r0(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var i0,fu,o0,l0,a0,fs=!1,Mo=[],jn=null,kn=null,Nn=null,Bi=new Map,Hi=new Map,xn=[],Rm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pc(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Bi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=co(t),t!==null&&fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Om(e,t,n,r,i){switch(t){case"focusin":return jn=ai(jn,e,t,n,r,i),!0;case"dragenter":return kn=ai(kn,e,t,n,r,i),!0;case"mouseover":return Nn=ai(Nn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Bi.set(o,ai(Bi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Hi.set(o,ai(Hi.get(o)||null,e,t,n,r,i)),!0}return!1}function s0(e){var t=Hn(e.target);if(t!==null){var n=ar(t);if(n!==null){if(t=n.tag,t===13){if(t=qf(n),t!==null){e.blockedOn=t,a0(e.priority,function(){o0(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);as=r,n.target.dispatchEvent(r),as=null}else return t=co(n),t!==null&&fu(t),e.blockedOn=n,!1;t.shift()}return!0}function zc(e,t,n){Vo(e)&&n.delete(t)}function Am(){fs=!1,jn!==null&&Vo(jn)&&(jn=null),kn!==null&&Vo(kn)&&(kn=null),Nn!==null&&Vo(Nn)&&(Nn=null),Bi.forEach(zc),Hi.forEach(zc)}function si(e,t){e.blockedOn===t&&(e.blockedOn=null,fs||(fs=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Am)))}function Wi(e){function t(i){return si(i,e)}if(0<Mo.length){si(Mo[0],e);for(var n=1;n<Mo.length;n++){var r=Mo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jn!==null&&si(jn,e),kn!==null&&si(kn,e),Nn!==null&&si(Nn,e),Bi.forEach(t),Hi.forEach(t),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)s0(n),n.blockedOn===null&&xn.shift()}var _r=ln.ReactCurrentBatchConfig,fl=!0;function Fm(e,t,n,r){var i=oe,o=_r.transition;_r.transition=null;try{oe=1,pu(e,t,n,r)}finally{oe=i,_r.transition=o}}function $m(e,t,n,r){var i=oe,o=_r.transition;_r.transition=null;try{oe=4,pu(e,t,n,r)}finally{oe=i,_r.transition=o}}function pu(e,t,n,r){if(fl){var i=ps(e,t,n,r);if(i===null)La(e,t,r,pl,n),Pc(e,r);else if(Om(i,e,t,n,r))r.stopPropagation();else if(Pc(e,r),t&4&&-1<Rm.indexOf(e)){for(;i!==null;){var o=co(i);if(o!==null&&i0(o),o=ps(e,t,n,r),o===null&&La(e,t,r,pl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else La(e,t,r,null,n)}}var pl=null;function ps(e,t,n,r){if(pl=null,e=uu(r),e=Hn(e),e!==null)if(t=ar(e),t===null)e=null;else if(n=t.tag,n===13){if(e=qf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pl=e,null}function u0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mm()){case cu:return 1;case e0:return 4;case cl:case Em:return 16;case t0:return 536870912;default:return 16}default:return 16}}var Sn=null,hu=null,Qo=null;function c0(){if(Qo)return Qo;var e,t=hu,n=t.length,r,i="value"in Sn?Sn.value:Sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Qo=i.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function _c(){return!1}function vt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Eo:_c,this.isPropagationStopped=_c,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=vt(Zr),uo=ve({},Zr,{view:0,detail:0}),bm=vt(uo),xa,wa,ui,Fl=ve({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(xa=e.screenX-ui.screenX,wa=e.screenY-ui.screenY):wa=xa=0,ui=e),xa)},movementY:function(e){return"movementY"in e?e.movementY:wa}}),Ic=vt(Fl),Um=ve({},Fl,{dataTransfer:0}),Bm=vt(Um),Hm=ve({},uo,{relatedTarget:0}),Sa=vt(Hm),Wm=ve({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ym=vt(Wm),Vm=ve({},Zr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qm=vt(Vm),Gm=ve({},Zr,{data:0}),Rc=vt(Gm),Km={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zm[e])?!!t[e]:!1}function gu(){return Xm}var Jm=ve({},uo,{key:function(e){if(e.key){var t=Km[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),e1=vt(Jm),t1=ve({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=vt(t1),n1=ve({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),r1=vt(n1),i1=ve({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=vt(i1),l1=ve({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=vt(l1),s1=[9,13,27,32],vu=tn&&"CompositionEvent"in window,Ti=null;tn&&"documentMode"in document&&(Ti=document.documentMode);var u1=tn&&"TextEvent"in window&&!Ti,d0=tn&&(!vu||Ti&&8<Ti&&11>=Ti),Ac=" ",Fc=!1;function f0(e,t){switch(e){case"keyup":return s1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function c1(e,t){switch(e){case"compositionend":return p0(t);case"keypress":return t.which!==32?null:(Fc=!0,Ac);case"textInput":return e=t.data,e===Ac&&Fc?null:e;default:return null}}function d1(e,t){if(gr)return e==="compositionend"||!vu&&f0(e,t)?(e=c0(),Qo=hu=Sn=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return d0&&t.locale!=="ko"?null:t.data;default:return null}}var f1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $c(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f1[e.type]:t==="textarea"}function h0(e,t,n,r){Yf(r),t=hl(t,"onChange"),0<t.length&&(n=new mu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pi=null,Yi=null;function p1(e){N0(e,0)}function $l(e){var t=xr(e);if(Ff(t))return e}function h1(e,t){if(e==="change")return t}var m0=!1;if(tn){var Ca;if(tn){var ja="oninput"in document;if(!ja){var bc=document.createElement("div");bc.setAttribute("oninput","return;"),ja=typeof bc.oninput=="function"}Ca=ja}else Ca=!1;m0=Ca&&(!document.documentMode||9<document.documentMode)}function Uc(){Pi&&(Pi.detachEvent("onpropertychange",g0),Yi=Pi=null)}function g0(e){if(e.propertyName==="value"&&$l(Yi)){var t=[];h0(t,Yi,e,uu(e)),Kf(p1,t)}}function m1(e,t,n){e==="focusin"?(Uc(),Pi=t,Yi=n,Pi.attachEvent("onpropertychange",g0)):e==="focusout"&&Uc()}function g1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $l(Yi)}function v1(e,t){if(e==="click")return $l(t)}function y1(e,t){if(e==="input"||e==="change")return $l(t)}function x1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Rt=typeof Object.is=="function"?Object.is:x1;function Vi(e,t){if(Rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ka.call(t,i)||!Rt(e[i],t[i]))return!1}return!0}function Bc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hc(e,t){var n=Bc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bc(n)}}function v0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?v0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function y0(){for(var e=window,t=al();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=al(e.document)}return t}function yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function w1(e){var t=y0(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(r!==null&&yu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Hc(n,o);var l=Hc(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var S1=tn&&"documentMode"in document&&11>=document.documentMode,vr=null,hs=null,zi=null,ms=!1;function Wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ms||vr==null||vr!==al(r)||(r=vr,"selectionStart"in r&&yu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zi&&Vi(zi,r)||(zi=r,r=hl(hs,"onSelect"),0<r.length&&(t=new mu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vr)))}function Lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var yr={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},ka={},x0={};tn&&(x0=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function bl(e){if(ka[e])return ka[e];if(!yr[e])return e;var t=yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in x0)return ka[e]=t[n];return e}var w0=bl("animationend"),S0=bl("animationiteration"),C0=bl("animationstart"),j0=bl("transitionend"),k0=new Map,Yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function In(e,t){k0.set(e,t),lr(t,[e])}for(var Na=0;Na<Yc.length;Na++){var Ma=Yc[Na],C1=Ma.toLowerCase(),j1=Ma[0].toUpperCase()+Ma.slice(1);In(C1,"on"+j1)}In(w0,"onAnimationEnd");In(S0,"onAnimationIteration");In(C0,"onAnimationStart");In("dblclick","onDoubleClick");In("focusin","onFocus");In("focusout","onBlur");In(j0,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),k1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function Vc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cm(r,t,void 0,e),e.currentTarget=null}function N0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Vc(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Vc(i,a,c),o=s}}}if(ul)throw e=cs,ul=!1,cs=null,e}function ce(e,t){var n=t[ws];n===void 0&&(n=t[ws]=new Set);var r=e+"__bubble";n.has(r)||(M0(t,e,2,!1),n.add(r))}function Ea(e,t,n){var r=0;t&&(r|=4),M0(n,e,r,t)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Qi(e){if(!e[Do]){e[Do]=!0,_f.forEach(function(n){n!=="selectionchange"&&(k1.has(n)||Ea(n,!1,e),Ea(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Do]||(t[Do]=!0,Ea("selectionchange",!1,t))}}function M0(e,t,n,r){switch(u0(t)){case 1:var i=Fm;break;case 4:i=$m;break;default:i=pu}n=i.bind(null,t,n,e),i=void 0,!us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function La(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=Hn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Kf(function(){var c=o,d=uu(n),h=[];e:{var m=k0.get(e);if(m!==void 0){var x=mu,S=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":x=e1;break;case"focusin":S="focus",x=Sa;break;case"focusout":S="blur",x=Sa;break;case"beforeblur":case"afterblur":x=Sa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Bm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=r1;break;case w0:case S0:case C0:x=Ym;break;case j0:x=o1;break;case"scroll":x=bm;break;case"wheel":x=a1;break;case"copy":case"cut":case"paste":x=Qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Oc}var w=(t&4)!==0,N=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var f=c,g;f!==null;){g=f;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=Ui(f,p),k!=null&&w.push(Gi(f,k,g)))),N)break;f=f.return}0<w.length&&(m=new x(m,S,null,n,d),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==as&&(S=n.relatedTarget||n.fromElement)&&(Hn(S)||S[nn]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?Hn(S):null,S!==null&&(N=ar(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(w=Ic,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Oc,k="onPointerLeave",p="onPointerEnter",f="pointer"),N=x==null?m:xr(x),g=S==null?m:xr(S),m=new w(k,f+"leave",x,n,d),m.target=N,m.relatedTarget=g,k=null,Hn(d)===c&&(w=new w(p,f+"enter",S,n,d),w.target=g,w.relatedTarget=N,k=w),N=k,x&&S)t:{for(w=x,p=S,f=0,g=w;g;g=fr(g))f++;for(g=0,k=p;k;k=fr(k))g++;for(;0<f-g;)w=fr(w),f--;for(;0<g-f;)p=fr(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=fr(w),p=fr(p)}w=null}else w=null;x!==null&&Qc(h,m,x,w,!1),S!==null&&N!==null&&Qc(h,N,S,w,!0)}}e:{if(m=c?xr(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var L=h1;else if($c(m))if(m0)L=y1;else{L=g1;var v=m1}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=v1);if(L&&(L=L(e,c))){h0(h,L,n,d);break e}v&&v(e,m,c),e==="focusout"&&(v=m._wrapperState)&&v.controlled&&m.type==="number"&&ns(m,"number",m.value)}switch(v=c?xr(c):window,e){case"focusin":($c(v)||v.contentEditable==="true")&&(vr=v,hs=c,zi=null);break;case"focusout":zi=hs=vr=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,Wc(h,n,d);break;case"selectionchange":if(S1)break;case"keydown":case"keyup":Wc(h,n,d)}var j;if(vu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else gr?f0(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(d0&&n.locale!=="ko"&&(gr||T!=="onCompositionStart"?T==="onCompositionEnd"&&gr&&(j=c0()):(Sn=d,hu="value"in Sn?Sn.value:Sn.textContent,gr=!0)),v=hl(c,T),0<v.length&&(T=new Rc(T,e,null,n,d),h.push({event:T,listeners:v}),j?T.data=j:(j=p0(n),j!==null&&(T.data=j)))),(j=u1?c1(e,n):d1(e,n))&&(c=hl(c,"onBeforeInput"),0<c.length&&(d=new Rc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=j))}N0(h,t)})}function Gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Ui(e,n),o!=null&&r.unshift(Gi(e,o,i)),o=Ui(e,t),o!=null&&r.push(Gi(e,o,i))),e=e.return}return r}function fr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=Ui(n,o),s!=null&&l.unshift(Gi(n,s,a))):i||(s=Ui(n,o),s!=null&&l.push(Gi(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var N1=/\r\n?/g,M1=/\u0000|\uFFFD/g;function Gc(e){return(typeof e=="string"?e:""+e).replace(N1,`
`).replace(M1,"")}function To(e,t,n){if(t=Gc(t),Gc(e)!==t&&n)throw Error(D(425))}function ml(){}var gs=null,vs=null;function ys(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xs=typeof setTimeout=="function"?setTimeout:void 0,E1=typeof clearTimeout=="function"?clearTimeout:void 0,Kc=typeof Promise=="function"?Promise:void 0,L1=typeof queueMicrotask=="function"?queueMicrotask:typeof Kc<"u"?function(e){return Kc.resolve(null).then(e).catch(D1)}:xs;function D1(e){setTimeout(function(){throw e})}function Da(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Wi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Wi(t)}function Mn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Xr,Ki="__reactProps$"+Xr,nn="__reactContainer$"+Xr,ws="__reactEvents$"+Xr,T1="__reactListeners$"+Xr,P1="__reactHandles$"+Xr;function Hn(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qc(e);e!==null;){if(n=e[Bt])return n;e=qc(e)}return t}e=n,n=e.parentNode}return null}function co(e){return e=e[Bt]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Ul(e){return e[Ki]||null}var Ss=[],wr=-1;function Rn(e){return{current:e}}function fe(e){0>wr||(e.current=Ss[wr],Ss[wr]=null,wr--)}function ue(e,t){wr++,Ss[wr]=e.current,e.current=t}var _n={},Ge=Rn(_n),ot=Rn(!1),Jn=_n;function Fr(e,t){var n=e.type.contextTypes;if(!n)return _n;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function lt(e){return e=e.childContextTypes,e!=null}function gl(){fe(ot),fe(Ge)}function Zc(e,t,n){if(Ge.current!==_n)throw Error(D(168));ue(Ge,t),ue(ot,n)}function E0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,mm(e)||"Unknown",i));return ve({},n,r)}function vl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_n,Jn=Ge.current,ue(Ge,e),ue(ot,ot.current),!0}function Xc(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=E0(e,t,Jn),r.__reactInternalMemoizedMergedChildContext=e,fe(ot),fe(Ge),ue(Ge,e)):fe(ot),ue(ot,n)}var Kt=null,Bl=!1,Ta=!1;function L0(e){Kt===null?Kt=[e]:Kt.push(e)}function z1(e){Bl=!0,L0(e)}function On(){if(!Ta&&Kt!==null){Ta=!0;var e=0,t=oe;try{var n=Kt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Kt=null,Bl=!1}catch(i){throw Kt!==null&&(Kt=Kt.slice(e+1)),Jf(cu,On),i}finally{oe=t,Ta=!1}}return null}var Sr=[],Cr=0,yl=null,xl=0,wt=[],St=0,er=null,qt=1,Zt="";function Un(e,t){Sr[Cr++]=xl,Sr[Cr++]=yl,yl=e,xl=t}function D0(e,t,n){wt[St++]=qt,wt[St++]=Zt,wt[St++]=er,er=e;var r=qt;e=Zt;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var o=32-zt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,qt=1<<32-zt(t)+i|n<<i|r,Zt=o+e}else qt=1<<o|n<<i|r,Zt=e}function xu(e){e.return!==null&&(Un(e,1),D0(e,1,0))}function wu(e){for(;e===yl;)yl=Sr[--Cr],Sr[Cr]=null,xl=Sr[--Cr],Sr[Cr]=null;for(;e===er;)er=wt[--St],wt[St]=null,Zt=wt[--St],wt[St]=null,qt=wt[--St],wt[St]=null}var ht=null,pt=null,he=!1,Pt=null;function T0(e,t){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,pt=Mn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=er!==null?{id:qt,overflow:Zt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,pt=null,!0):!1;default:return!1}}function Cs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function js(e){if(he){var t=pt;if(t){var n=t;if(!Jc(e,t)){if(Cs(e))throw Error(D(418));t=Mn(n.nextSibling);var r=ht;t&&Jc(e,t)?T0(r,n):(e.flags=e.flags&-4097|2,he=!1,ht=e)}}else{if(Cs(e))throw Error(D(418));e.flags=e.flags&-4097|2,he=!1,ht=e}}}function ed(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function Po(e){if(e!==ht)return!1;if(!he)return ed(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ys(e.type,e.memoizedProps)),t&&(t=pt)){if(Cs(e))throw P0(),Error(D(418));for(;t;)T0(e,t),t=Mn(t.nextSibling)}if(ed(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Mn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=ht?Mn(e.stateNode.nextSibling):null;return!0}function P0(){for(var e=pt;e;)e=Mn(e.nextSibling)}function $r(){pt=ht=null,he=!1}function Su(e){Pt===null?Pt=[e]:Pt.push(e)}var _1=ln.ReactCurrentBatchConfig;function Lt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var wl=Rn(null),Sl=null,jr=null,Cu=null;function ju(){Cu=jr=Sl=null}function ku(e){var t=wl.current;fe(wl),e._currentValue=t}function ks(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ir(e,t){Sl=e,Cu=jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(Cu!==e)if(e={context:e,memoizedValue:t,next:null},jr===null){if(Sl===null)throw Error(D(308));jr=e,Sl.dependencies={lanes:0,firstContext:e}}else jr=jr.next=e;return t}var Wn=null;function Nu(e){Wn===null?Wn=[e]:Wn.push(e)}function z0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Nu(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var yn=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function En(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ne&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,Nu(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function Ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}function td(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Cl(e,t,n,r){var i=e.updateQueue;yn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,d=c=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(m=t,x=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){h=S.call(x,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(x,h,m):S,m==null)break e;h=ve({},h,m);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,s=h):d=d.next=x,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(s=h),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);nr|=l,e.lanes=l,e.memoizedState=h}}function nd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var I0=new zf.Component().refs;function Ns(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hl={isMounted:function(e){return(e=e._reactInternals)?ar(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Dn(e),o=Xt(r,i);o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(_t(t,e,i,r),Ko(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ze(),i=Dn(e),o=Xt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=En(e,o,i),t!==null&&(_t(t,e,i,r),Ko(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ze(),r=Dn(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=En(e,i,r),t!==null&&(_t(t,e,r,n),Ko(t,e,r))}};function rd(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Vi(n,r)||!Vi(i,o):!0}function R0(e,t,n){var r=!1,i=_n,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=lt(t)?Jn:Ge.current,r=t.contextTypes,o=(r=r!=null)?Fr(e,i):_n),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function id(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hl.enqueueReplaceState(t,t.state,null)}function Ms(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=I0,Mu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=lt(t)?Jn:Ge.current,i.context=Fr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ns(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hl.enqueueReplaceState(i,i.state,null),Cl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===I0&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function od(e){var t=e._init;return t(e._payload)}function O0(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Tn(p,f),p.index=0,p.sibling=null,p}function o(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,k){return f===null||f.tag!==6?(f=Aa(g,p.mode,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function s(p,f,g,k){var L=g.type;return L===mr?d(p,f,g.props.children,k,g.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===vn&&od(L)===f.type)?(k=i(f,g.props),k.ref=ci(p,f,g),k.return=p,k):(k=tl(g.type,g.key,g.props,null,p.mode,k),k.ref=ci(p,f,g),k.return=p,k)}function c(p,f,g,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Fa(g,p.mode,k),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,k,L){return f===null||f.tag!==7?(f=qn(g,p.mode,k,L),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Aa(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case So:return g=tl(f.type,f.key,f.props,null,p.mode,g),g.ref=ci(p,null,f),g.return=p,g;case hr:return f=Fa(f,p.mode,g),f.return=p,f;case vn:var k=f._init;return h(p,k(f._payload),g)}if(Si(f)||oi(f))return f=qn(f,p.mode,g,null),f.return=p,f;zo(p,f)}return null}function m(p,f,g,k){var L=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(p,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case So:return g.key===L?s(p,f,g,k):null;case hr:return g.key===L?c(p,f,g,k):null;case vn:return L=g._init,m(p,f,L(g._payload),k)}if(Si(g)||oi(g))return L!==null?null:d(p,f,g,k,null);zo(p,g)}return null}function x(p,f,g,k,L){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,a(f,p,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case So:return p=p.get(k.key===null?g:k.key)||null,s(f,p,k,L);case hr:return p=p.get(k.key===null?g:k.key)||null,c(f,p,k,L);case vn:var v=k._init;return x(p,f,g,v(k._payload),L)}if(Si(k)||oi(k))return p=p.get(g)||null,d(f,p,k,L,null);zo(f,k)}return null}function S(p,f,g,k){for(var L=null,v=null,j=f,T=f=0,I=null;j!==null&&T<g.length;T++){j.index>T?(I=j,j=null):I=j.sibling;var $=m(p,j,g[T],k);if($===null){j===null&&(j=I);break}e&&j&&$.alternate===null&&t(p,j),f=o($,f,T),v===null?L=$:v.sibling=$,v=$,j=I}if(T===g.length)return n(p,j),he&&Un(p,T),L;if(j===null){for(;T<g.length;T++)j=h(p,g[T],k),j!==null&&(f=o(j,f,T),v===null?L=j:v.sibling=j,v=j);return he&&Un(p,T),L}for(j=r(p,j);T<g.length;T++)I=x(j,p,T,g[T],k),I!==null&&(e&&I.alternate!==null&&j.delete(I.key===null?T:I.key),f=o(I,f,T),v===null?L=I:v.sibling=I,v=I);return e&&j.forEach(function(J){return t(p,J)}),he&&Un(p,T),L}function w(p,f,g,k){var L=oi(g);if(typeof L!="function")throw Error(D(150));if(g=L.call(g),g==null)throw Error(D(151));for(var v=L=null,j=f,T=f=0,I=null,$=g.next();j!==null&&!$.done;T++,$=g.next()){j.index>T?(I=j,j=null):I=j.sibling;var J=m(p,j,$.value,k);if(J===null){j===null&&(j=I);break}e&&j&&J.alternate===null&&t(p,j),f=o(J,f,T),v===null?L=J:v.sibling=J,v=J,j=I}if($.done)return n(p,j),he&&Un(p,T),L;if(j===null){for(;!$.done;T++,$=g.next())$=h(p,$.value,k),$!==null&&(f=o($,f,T),v===null?L=$:v.sibling=$,v=$);return he&&Un(p,T),L}for(j=r(p,j);!$.done;T++,$=g.next())$=x(j,p,T,$.value,k),$!==null&&(e&&$.alternate!==null&&j.delete($.key===null?T:$.key),f=o($,f,T),v===null?L=$:v.sibling=$,v=$);return e&&j.forEach(function(Ce){return t(p,Ce)}),he&&Un(p,T),L}function N(p,f,g,k){if(typeof g=="object"&&g!==null&&g.type===mr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case So:e:{for(var L=g.key,v=f;v!==null;){if(v.key===L){if(L=g.type,L===mr){if(v.tag===7){n(p,v.sibling),f=i(v,g.props.children),f.return=p,p=f;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===vn&&od(L)===v.type){n(p,v.sibling),f=i(v,g.props),f.ref=ci(p,v,g),f.return=p,p=f;break e}n(p,v);break}else t(p,v);v=v.sibling}g.type===mr?(f=qn(g.props.children,p.mode,k,g.key),f.return=p,p=f):(k=tl(g.type,g.key,g.props,null,p.mode,k),k.ref=ci(p,f,g),k.return=p,p=k)}return l(p);case hr:e:{for(v=g.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Fa(g,p.mode,k),f.return=p,p=f}return l(p);case vn:return v=g._init,N(p,f,v(g._payload),k)}if(Si(g))return S(p,f,g,k);if(oi(g))return w(p,f,g,k);zo(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Aa(g,p.mode,k),f.return=p,p=f),l(p)):n(p,f)}return N}var br=O0(!0),A0=O0(!1),fo={},Wt=Rn(fo),qi=Rn(fo),Zi=Rn(fo);function Yn(e){if(e===fo)throw Error(D(174));return e}function Eu(e,t){switch(ue(Zi,t),ue(qi,e),ue(Wt,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:is(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=is(t,e)}fe(Wt),ue(Wt,t)}function Ur(){fe(Wt),fe(qi),fe(Zi)}function F0(e){Yn(Zi.current);var t=Yn(Wt.current),n=is(t,e.type);t!==n&&(ue(qi,e),ue(Wt,n))}function Lu(e){qi.current===e&&(fe(Wt),fe(qi))}var me=Rn(0);function jl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pa=[];function Du(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var qo=ln.ReactCurrentDispatcher,za=ln.ReactCurrentBatchConfig,tr=0,ge=null,De=null,Re=null,kl=!1,_i=!1,Xi=0,I1=0;function We(){throw Error(D(321))}function Tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rt(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,i,o){if(tr=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?F1:$1,e=n(r,i),_i){o=0;do{if(_i=!1,Xi=0,25<=o)throw Error(D(301));o+=1,Re=De=null,t.updateQueue=null,qo.current=b1,e=n(r,i)}while(_i)}if(qo.current=Nl,t=De!==null&&De.next!==null,tr=0,Re=De=ge=null,kl=!1,t)throw Error(D(300));return e}function zu(){var e=Xi!==0;return Xi=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ge.memoizedState=Re=e:Re=Re.next=e,Re}function Nt(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Re===null?ge.memoizedState:Re.next;if(t!==null)Re=t,De=e;else{if(e===null)throw Error(D(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Re===null?ge.memoizedState=Re=e:Re=Re.next=e}return Re}function Ji(e,t){return typeof t=="function"?t(e):t}function _a(e){var t=Nt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var d=c.lane;if((tr&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ge.lanes|=d,nr|=d}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,Rt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,nr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ia(e){var t=Nt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);Rt(o,t.memoizedState)||(rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function $0(){}function b0(e,t){var n=ge,r=Nt(),i=t(),o=!Rt(r.memoizedState,i);if(o&&(r.memoizedState=i,rt=!0),r=r.queue,_u(H0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,eo(9,B0.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(D(349));tr&30||U0(n,t,i)}return i}function U0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function B0(e,t,n,r){t.value=n,t.getSnapshot=r,W0(t)&&Y0(e)}function H0(e,t,n){return n(function(){W0(t)&&Y0(e)})}function W0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rt(e,n)}catch{return!0}}function Y0(e){var t=rn(e,1);t!==null&&_t(t,e,1,-1)}function ld(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:e},t.queue=e,e=e.dispatch=A1.bind(null,ge,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function V0(){return Nt().memoizedState}function Zo(e,t,n,r){var i=$t();ge.flags|=e,i.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function Wl(e,t,n,r){var i=Nt();r=r===void 0?null:r;var o=void 0;if(De!==null){var l=De.memoizedState;if(o=l.destroy,r!==null&&Tu(r,l.deps)){i.memoizedState=eo(t,n,o,r);return}}ge.flags|=e,i.memoizedState=eo(1|t,n,o,r)}function ad(e,t){return Zo(8390656,8,e,t)}function _u(e,t){return Wl(2048,8,e,t)}function Q0(e,t){return Wl(4,2,e,t)}function G0(e,t){return Wl(4,4,e,t)}function K0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function q0(e,t,n){return n=n!=null?n.concat([e]):null,Wl(4,4,K0.bind(null,t,e),n)}function Iu(){}function Z0(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function X0(e,t){var n=Nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function J0(e,t,n){return tr&21?(Rt(n,t)||(n=n0(),ge.lanes|=n,nr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function R1(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=za.transition;za.transition={};try{e(!1),t()}finally{oe=n,za.transition=r}}function ep(){return Nt().memoizedState}function O1(e,t,n){var r=Dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tp(e))np(t,n);else if(n=z0(e,t,n,r),n!==null){var i=Ze();_t(n,e,r,i),rp(n,t,r)}}function A1(e,t,n){var r=Dn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tp(e))np(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,Rt(a,l)){var s=t.interleaved;s===null?(i.next=i,Nu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=z0(e,t,i,r),n!==null&&(i=Ze(),_t(n,e,r,i),rp(n,t,r))}}function tp(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function np(e,t){_i=kl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,du(e,n)}}var Nl={readContext:kt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},F1={readContext:kt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:ad,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,K0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=O1.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:ld,useDebugValue:Iu,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=ld(!1),t=e[0];return e=R1.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=$t();if(he){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Ae===null)throw Error(D(349));tr&30||U0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ad(H0.bind(null,r,o,e),[e]),r.flags|=2048,eo(9,B0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ae.identifierPrefix;if(he){var n=Zt,r=qt;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=I1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$1={readContext:kt,useCallback:Z0,useContext:kt,useEffect:_u,useImperativeHandle:q0,useInsertionEffect:Q0,useLayoutEffect:G0,useMemo:X0,useReducer:_a,useRef:V0,useState:function(){return _a(Ji)},useDebugValue:Iu,useDeferredValue:function(e){var t=Nt();return J0(t,De.memoizedState,e)},useTransition:function(){var e=_a(Ji)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:$0,useSyncExternalStore:b0,useId:ep,unstable_isNewReconciler:!1},b1={readContext:kt,useCallback:Z0,useContext:kt,useEffect:_u,useImperativeHandle:q0,useInsertionEffect:Q0,useLayoutEffect:G0,useMemo:X0,useReducer:Ia,useRef:V0,useState:function(){return Ia(Ji)},useDebugValue:Iu,useDeferredValue:function(e){var t=Nt();return De===null?t.memoizedState=e:J0(t,De.memoizedState,e)},useTransition:function(){var e=Ia(Ji)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:$0,useSyncExternalStore:b0,useId:ep,unstable_isNewReconciler:!1};function Br(e,t){try{var n="",r=t;do n+=hm(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Es(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var U1=typeof WeakMap=="function"?WeakMap:Map;function ip(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){El||(El=!0,As=r),Es(e,t)},n}function op(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Es(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Es(e,t),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new U1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=t2.bind(null,e,t,n),t.then(e,e))}function ud(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function cd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,En(n,t,1))),n.lanes|=1),e)}var B1=ln.ReactCurrentOwner,rt=!1;function Ke(e,t,n,r){t.child=e===null?A0(t,null,n,r):br(t,e.child,n,r)}function dd(e,t,n,r,i){n=n.render;var o=t.ref;return Ir(t,i),r=Pu(e,t,n,r,o,i),n=zu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(he&&n&&xu(t),t.flags|=1,Ke(e,t,r,i),t.child)}function fd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Bu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,lp(e,t,o,r,i)):(e=tl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Vi,n(l,r)&&e.ref===t.ref)return on(e,t,i)}return t.flags|=1,e=Tn(o,r),e.ref=t.ref,e.return=t,t.child=e}function lp(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Vi(o,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,on(e,t,i)}return Ls(e,t,n,r,i)}function ap(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Nr,dt),dt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Nr,dt),dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(Nr,dt),dt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(Nr,dt),dt|=r;return Ke(e,t,i,n),t.child}function sp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ls(e,t,n,r,i){var o=lt(n)?Jn:Ge.current;return o=Fr(t,o),Ir(t,i),n=Pu(e,t,n,r,o,i),r=zu(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,on(e,t,i)):(he&&r&&xu(t),t.flags|=1,Ke(e,t,n,i),t.child)}function pd(e,t,n,r,i){if(lt(n)){var o=!0;vl(t)}else o=!1;if(Ir(t,i),t.stateNode===null)Xo(e,t),R0(t,n,r),Ms(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=kt(c):(c=lt(n)?Jn:Ge.current,c=Fr(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&id(t,l,r,c),yn=!1;var m=t.memoizedState;l.state=m,Cl(t,r,l,i),s=t.memoizedState,a!==r||m!==s||ot.current||yn?(typeof d=="function"&&(Ns(t,n,d,r),s=t.memoizedState),(a=yn||rd(t,n,a,r,m,s,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,_0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Lt(t.type,a),l.props=c,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=kt(s):(s=lt(n)?Jn:Ge.current,s=Fr(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&id(t,l,r,s),yn=!1,m=t.memoizedState,l.state=m,Cl(t,r,l,i);var S=t.memoizedState;a!==h||m!==S||ot.current||yn?(typeof x=="function"&&(Ns(t,n,x,r),S=t.memoizedState),(c=yn||rd(t,n,c,r,m,S,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ds(e,t,n,r,o,i)}function Ds(e,t,n,r,i,o){sp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Xc(t,n,!1),on(e,t,o);r=t.stateNode,B1.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=br(t,e.child,null,o),t.child=br(t,null,a,o)):Ke(e,t,a,o),t.memoizedState=r.state,i&&Xc(t,n,!0),t.child}function up(e){var t=e.stateNode;t.pendingContext?Zc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zc(e,t.context,!1),Eu(e,t.containerInfo)}function hd(e,t,n,r,i){return $r(),Su(i),t.flags|=256,Ke(e,t,n,r),t.child}var Ts={dehydrated:null,treeContext:null,retryLane:0};function Ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function cp(e,t,n){var r=t.pendingProps,i=me.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(me,i&1),e===null)return js(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ql(l,r,0,null),e=qn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ps(n),t.memoizedState=Ts,e):Ru(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return H1(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Tn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Tn(a,o):(o=qn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Ps(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Ts,r}return o=e.child,e=o.sibling,r=Tn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ru(e,t){return t=Ql({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _o(e,t,n,r){return r!==null&&Su(r),br(t,e.child,null,n),e=Ru(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function H1(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=Ra(Error(D(422))),_o(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ql({mode:"visible",children:r.children},i,0,null),o=qn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&br(t,e.child,null,l),t.child.memoizedState=Ps(l),t.memoizedState=Ts,o);if(!(t.mode&1))return _o(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=Ra(o,r,void 0),_o(e,t,l,r)}if(a=(l&e.childLanes)!==0,rt||a){if(r=Ae,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,rn(e,i),_t(r,e,i,-1))}return Uu(),r=Ra(Error(D(421))),_o(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=n2.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,pt=Mn(i.nextSibling),ht=t,he=!0,Pt=null,e!==null&&(wt[St++]=qt,wt[St++]=Zt,wt[St++]=er,qt=e.id,Zt=e.overflow,er=t),t=Ru(t,r.children),t.flags|=4096,t)}function md(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ks(e.return,t,n)}function Oa(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function dp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ke(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&md(e,n,t);else if(e.tag===19)md(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&jl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oa(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oa(t,!0,n,null,o);break;case"together":Oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function W1(e,t,n){switch(t.tag){case 3:up(t),$r();break;case 5:F0(t);break;case 1:lt(t.type)&&vl(t);break;case 4:Eu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(wl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?cp(e,t,n):(ue(me,me.current&1),e=on(e,t,n),e!==null?e.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return dp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,ap(e,t,n)}return on(e,t,n)}var fp,zs,pp,hp;fp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zs=function(){};pp=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(Wt.current);var o=null;switch(n){case"input":i=es(e,i),r=es(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=rs(e,i),r=rs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ml)}os(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($i.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($i.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ce("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};hp=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Y1(e,t,n){var r=t.pendingProps;switch(wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return lt(t.type)&&gl(),Ye(t),null;case 3:return r=t.stateNode,Ur(),fe(ot),fe(Ge),Du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(bs(Pt),Pt=null))),zs(e,t),Ye(t),null;case 5:Lu(t);var i=Yn(Zi.current);if(n=t.type,e!==null&&t.stateNode!=null)pp(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ye(t),null}if(e=Yn(Wt.current),Po(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Bt]=t,r[Ki]=o,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<ji.length;i++)ce(ji[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":kc(r,o),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ce("invalid",r);break;case"textarea":Mc(r,o),ce("invalid",r)}os(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&To(r.textContent,a,e),i=["children",""+a]):$i.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ce("scroll",r)}switch(n){case"input":Co(r),Nc(r,o,!0);break;case"textarea":Co(r),Ec(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ml)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Bt]=t,e[Ki]=r,fp(e,t,!1,!1),t.stateNode=e;e:{switch(l=ls(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<ji.length;i++)ce(ji[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":kc(e,r),i=es(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Mc(e,r),i=rs(e,r),ce("invalid",e);break;default:i=r}os(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Wf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Bf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&bi(e,s):typeof s=="number"&&bi(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($i.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ce("scroll",e):s!=null&&ou(e,o,s,l))}switch(n){case"input":Co(e),Nc(e,r,!1);break;case"textarea":Co(e),Ec(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Tr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ml)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)hp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Yn(Zi.current),Yn(Wt.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(o=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:To(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Ye(t),null;case 13:if(fe(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&pt!==null&&t.mode&1&&!(t.flags&128))P0(),$r(),t.flags|=98560,o=!1;else if(o=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Bt]=t}else $r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ye(t),o=!1}else Pt!==null&&(bs(Pt),Pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Te===0&&(Te=3):Uu())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Ur(),zs(e,t),e===null&&Qi(t.stateNode.containerInfo),Ye(t),null;case 10:return ku(t.type._context),Ye(t),null;case 17:return lt(t.type)&&gl(),Ye(t),null;case 19:if(fe(me),o=t.memoizedState,o===null)return Ye(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)di(o,!1);else{if(Te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=jl(e),l!==null){for(t.flags|=128,di(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>Hr&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304)}else{if(!r)if(e=jl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!he)return Ye(t),null}else 2*Me()-o.renderingStartTime>Hr&&n!==1073741824&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return bu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?dt&1073741824&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function V1(e,t){switch(wu(t),t.tag){case 1:return lt(t.type)&&gl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ur(),fe(ot),fe(Ge),Du(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lu(t),null;case 13:if(fe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(me),null;case 4:return Ur(),null;case 10:return ku(t.type._context),null;case 22:case 23:return bu(),null;case 24:return null;default:return null}}var Io=!1,Qe=!1,Q1=typeof WeakSet=="function"?WeakSet:Set,_=null;function kr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function _s(e,t,n){try{n()}catch(r){we(e,t,r)}}var gd=!1;function G1(e,t){if(gs=fl,e=y0(),yu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,d=0,h=e,m=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===i&&(a=l),m===o&&++d===r&&(s=l),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(vs={focusedElem:e,selectionRange:n},fl=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,N=S.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Lt(t.type,w),N);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){we(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return S=gd,gd=!1,S}function Ii(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&_s(t,n,o)}i=i.next}while(i!==r)}}function Yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Is(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function mp(e){var t=e.alternate;t!==null&&(e.alternate=null,mp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[Ki],delete t[ws],delete t[T1],delete t[P1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gp(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ml));else if(r!==4&&(e=e.child,e!==null))for(Rs(e,t,n),e=e.sibling;e!==null;)Rs(e,t,n),e=e.sibling}function Os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}var $e=null,Dt=!1;function hn(e,t,n){for(n=n.child;n!==null;)vp(e,t,n),n=n.sibling}function vp(e,t,n){if(Ht&&typeof Ht.onCommitFiberUnmount=="function")try{Ht.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:Qe||kr(n,t);case 6:var r=$e,i=Dt;$e=null,hn(e,t,n),$e=r,Dt=i,$e!==null&&(Dt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Dt?(e=$e,n=n.stateNode,e.nodeType===8?Da(e.parentNode,n):e.nodeType===1&&Da(e,n),Wi(e)):Da($e,n.stateNode));break;case 4:r=$e,i=Dt,$e=n.stateNode.containerInfo,Dt=!0,hn(e,t,n),$e=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&_s(n,t,l),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!Qe&&(kr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,hn(e,t,n),Qe=r):hn(e,t,n);break;default:hn(e,t,n)}}function yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Q1),t.forEach(function(r){var i=r2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,Dt=!1;break e;case 3:$e=a.stateNode.containerInfo,Dt=!0;break e;case 4:$e=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if($e===null)throw Error(D(160));vp(o,l,i),$e=null,Dt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){we(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)yp(t,e),t=t.sibling}function yp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Ft(e),r&4){try{Ii(3,e,e.return),Yl(3,e)}catch(w){we(e,e.return,w)}try{Ii(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:Et(t,e),Ft(e),r&512&&n!==null&&kr(n,n.return);break;case 5:if(Et(t,e),Ft(e),r&512&&n!==null&&kr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(w){we(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&$f(i,o),ls(a,l);var c=ls(a,o);for(l=0;l<s.length;l+=2){var d=s[l],h=s[l+1];d==="style"?Wf(i,h):d==="dangerouslySetInnerHTML"?Bf(i,h):d==="children"?bi(i,h):ou(i,d,h,c)}switch(a){case"input":ts(i,o);break;case"textarea":bf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Tr(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Tr(i,!!o.multiple,o.defaultValue,!0):Tr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Ki]=o}catch(w){we(e,e.return,w)}}break;case 6:if(Et(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){we(e,e.return,w)}}break;case 3:if(Et(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Wi(t.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:Et(t,e),Ft(e);break;case 13:Et(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=Me())),r&4&&yd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(c=Qe)||d,Et(t,e),Qe=c):Et(t,e),Ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(h=_=d;_!==null;){switch(m=_,x=m.child,m.tag){case 0:case 11:case 14:case 15:Ii(4,m,m.return);break;case 1:kr(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){we(r,n,w)}}break;case 5:kr(m,m.return);break;case 22:if(m.memoizedState!==null){wd(h);continue}}x!==null?(x.return=m,_=x):wd(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Hf("display",l))}catch(w){we(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){we(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Et(t,e),Ft(e),r&4&&yd(e);break;case 21:break;default:Et(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(gp(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var o=vd(e);Os(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=vd(e);Rs(e,a,l);break;default:throw Error(D(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K1(e,t,n){_=e,xp(e)}function xp(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Io;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Qe;a=Io;var c=Qe;if(Io=l,(Qe=s)&&!c)for(_=i;_!==null;)l=_,s=l.child,l.tag===22&&l.memoizedState!==null?Sd(i):s!==null?(s.return=l,_=s):Sd(i);for(;o!==null;)_=o,xp(o),o=o.sibling;_=i,Io=a,Qe=c}xd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):xd(e)}}function xd(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||Yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Lt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&nd(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nd(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Wi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Qe||t.flags&512&&Is(t)}catch(m){we(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function wd(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function Sd(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yl(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){we(t,i,s)}}var o=t.return;try{Is(t)}catch(s){we(t,o,s)}break;case 5:var l=t.return;try{Is(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){_=null;break}var a=t.sibling;if(a!==null){a.return=t.return,_=a;break}_=t.return}}var q1=Math.ceil,Ml=ln.ReactCurrentDispatcher,Ou=ln.ReactCurrentOwner,jt=ln.ReactCurrentBatchConfig,ne=0,Ae=null,Le=null,Ue=0,dt=0,Nr=Rn(0),Te=0,to=null,nr=0,Vl=0,Au=0,Ri=null,nt=null,Fu=0,Hr=1/0,Qt=null,El=!1,As=null,Ln=null,Ro=!1,Cn=null,Ll=0,Oi=0,Fs=null,Jo=-1,el=0;function Ze(){return ne&6?Me():Jo!==-1?Jo:Jo=Me()}function Dn(e){return e.mode&1?ne&2&&Ue!==0?Ue&-Ue:_1.transition!==null?(el===0&&(el=n0()),el):(e=oe,e!==0||(e=window.event,e=e===void 0?16:u0(e.type)),e):1}function _t(e,t,n,r){if(50<Oi)throw Oi=0,Fs=null,Error(D(185));so(e,n,r),(!(ne&2)||e!==Ae)&&(e===Ae&&(!(ne&2)&&(Vl|=n),Te===4&&wn(e,Ue)),at(e,r),n===1&&ne===0&&!(t.mode&1)&&(Hr=Me()+500,Bl&&On()))}function at(e,t){var n=e.callbackNode;_m(e,t);var r=dl(e,e===Ae?Ue:0);if(r===0)n!==null&&Tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tc(n),t===1)e.tag===0?z1(Cd.bind(null,e)):L0(Cd.bind(null,e)),L1(function(){!(ne&6)&&On()}),n=null;else{switch(r0(r)){case 1:n=cu;break;case 4:n=e0;break;case 16:n=cl;break;case 536870912:n=t0;break;default:n=cl}n=Ep(n,wp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wp(e,t){if(Jo=-1,el=0,ne&6)throw Error(D(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=dl(e,e===Ae?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Dl(e,r);else{t=r;var i=ne;ne|=2;var o=Cp();(Ae!==e||Ue!==t)&&(Qt=null,Hr=Me()+500,Kn(e,t));do try{J1();break}catch(a){Sp(e,a)}while(!0);ju(),Ml.current=o,ne=i,Le!==null?t=0:(Ae=null,Ue=0,t=Te)}if(t!==0){if(t===2&&(i=ds(e),i!==0&&(r=i,t=$s(e,i))),t===1)throw n=to,Kn(e,0),wn(e,r),at(e,Me()),n;if(t===6)wn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Z1(i)&&(t=Dl(e,r),t===2&&(o=ds(e),o!==0&&(r=o,t=$s(e,o))),t===1))throw n=to,Kn(e,0),wn(e,r),at(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:Bn(e,nt,Qt);break;case 3:if(wn(e,r),(r&130023424)===r&&(t=Fu+500-Me(),10<t)){if(dl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ze(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=xs(Bn.bind(null,e,nt,Qt),t);break}Bn(e,nt,Qt);break;case 4:if(wn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-zt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*q1(r/1960))-r,10<r){e.timeoutHandle=xs(Bn.bind(null,e,nt,Qt),r);break}Bn(e,nt,Qt);break;case 5:Bn(e,nt,Qt);break;default:throw Error(D(329))}}}return at(e,Me()),e.callbackNode===n?wp.bind(null,e):null}function $s(e,t){var n=Ri;return e.current.memoizedState.isDehydrated&&(Kn(e,t).flags|=256),e=Dl(e,t),e!==2&&(t=nt,nt=n,t!==null&&bs(t)),e}function bs(e){nt===null?nt=e:nt.push.apply(nt,e)}function Z1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Rt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function wn(e,t){for(t&=~Au,t&=~Vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Cd(e){if(ne&6)throw Error(D(327));Rr();var t=dl(e,0);if(!(t&1))return at(e,Me()),null;var n=Dl(e,t);if(e.tag!==0&&n===2){var r=ds(e);r!==0&&(t=r,n=$s(e,r))}if(n===1)throw n=to,Kn(e,0),wn(e,t),at(e,Me()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Bn(e,nt,Qt),at(e,Me()),null}function $u(e,t){var n=ne;ne|=1;try{return e(t)}finally{ne=n,ne===0&&(Hr=Me()+500,Bl&&On())}}function rr(e){Cn!==null&&Cn.tag===0&&!(ne&6)&&Rr();var t=ne;ne|=1;var n=jt.transition,r=oe;try{if(jt.transition=null,oe=1,e)return e()}finally{oe=r,jt.transition=n,ne=t,!(ne&6)&&On()}}function bu(){dt=Nr.current,fe(Nr)}function Kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,E1(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&gl();break;case 3:Ur(),fe(ot),fe(Ge),Du();break;case 5:Lu(r);break;case 4:Ur();break;case 13:fe(me);break;case 19:fe(me);break;case 10:ku(r.type._context);break;case 22:case 23:bu()}n=n.return}if(Ae=e,Le=e=Tn(e.current,null),Ue=dt=t,Te=0,to=null,Au=Vl=nr=0,nt=Ri=null,Wn!==null){for(t=0;t<Wn.length;t++)if(n=Wn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Wn=null}return e}function Sp(e,t){do{var n=Le;try{if(ju(),qo.current=Nl,kl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}kl=!1}if(tr=0,Re=De=ge=null,_i=!1,Xi=0,Ou.current=null,n===null||n.return===null){Te=1,to=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=ud(l);if(x!==null){x.flags&=-257,cd(x,l,a,o,t),x.mode&1&&sd(o,c,t),t=x,s=c;var S=t.updateQueue;if(S===null){var w=new Set;w.add(s),t.updateQueue=w}else S.add(s);break e}else{if(!(t&1)){sd(o,c,t),Uu();break e}s=Error(D(426))}}else if(he&&a.mode&1){var N=ud(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),cd(N,l,a,o,t),Su(Br(s,a));break e}}o=s=Br(s,a),Te!==4&&(Te=2),Ri===null?Ri=[o]:Ri.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=ip(o,s,t);td(o,p);break e;case 1:a=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ln===null||!Ln.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=op(o,a,t);td(o,k);break e}}o=o.return}while(o!==null)}kp(n)}catch(L){t=L,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function Cp(){var e=Ml.current;return Ml.current=Nl,e===null?Nl:e}function Uu(){(Te===0||Te===3||Te===2)&&(Te=4),Ae===null||!(nr&268435455)&&!(Vl&268435455)||wn(Ae,Ue)}function Dl(e,t){var n=ne;ne|=2;var r=Cp();(Ae!==e||Ue!==t)&&(Qt=null,Kn(e,t));do try{X1();break}catch(i){Sp(e,i)}while(!0);if(ju(),ne=n,Ml.current=r,Le!==null)throw Error(D(261));return Ae=null,Ue=0,Te}function X1(){for(;Le!==null;)jp(Le)}function J1(){for(;Le!==null&&!km();)jp(Le)}function jp(e){var t=Mp(e.alternate,e,dt);e.memoizedProps=e.pendingProps,t===null?kp(e):Le=t,Ou.current=null}function kp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=V1(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Te=6,Le=null;return}}else if(n=Y1(n,t,dt),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Te===0&&(Te=5)}function Bn(e,t,n){var r=oe,i=jt.transition;try{jt.transition=null,oe=1,e2(e,t,n,r)}finally{jt.transition=i,oe=r}return null}function e2(e,t,n,r){do Rr();while(Cn!==null);if(ne&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Im(e,o),e===Ae&&(Le=Ae=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,Ep(cl,function(){return Rr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=jt.transition,jt.transition=null;var l=oe;oe=1;var a=ne;ne|=4,Ou.current=null,G1(e,n),yp(n,e),w1(vs),fl=!!gs,vs=gs=null,e.current=n,K1(n),Nm(),ne=a,oe=l,jt.transition=o}else e.current=n;if(Ro&&(Ro=!1,Cn=e,Ll=i),o=e.pendingLanes,o===0&&(Ln=null),Lm(n.stateNode),at(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(El)throw El=!1,e=As,As=null,e;return Ll&1&&e.tag!==0&&Rr(),o=e.pendingLanes,o&1?e===Fs?Oi++:(Oi=0,Fs=e):Oi=0,On(),null}function Rr(){if(Cn!==null){var e=r0(Ll),t=jt.transition,n=oe;try{if(jt.transition=null,oe=16>e?16:e,Cn===null)var r=!1;else{if(e=Cn,Cn=null,Ll=0,ne&6)throw Error(D(331));var i=ne;for(ne|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(_=c;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:Ii(8,d,o)}var h=d.child;if(h!==null)h.return=d,_=h;else for(;_!==null;){d=_;var m=d.sibling,x=d.return;if(mp(d),d===c){_=null;break}if(m!==null){m.return=x,_=m;break}_=x}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ii(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,_=p;break e}_=o.return}}var f=e.current;for(_=f;_!==null;){l=_;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,_=g;else e:for(l=f;_!==null;){if(a=_,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yl(9,a)}}catch(L){we(a,a.return,L)}if(a===l){_=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,_=k;break e}_=a.return}}if(ne=i,On(),Ht&&typeof Ht.onPostCommitFiberRoot=="function")try{Ht.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{oe=n,jt.transition=t}}return!1}function jd(e,t,n){t=Br(n,t),t=ip(e,t,1),e=En(e,t,1),t=Ze(),e!==null&&(so(e,1,t),at(e,t))}function we(e,t,n){if(e.tag===3)jd(e,e,n);else for(;t!==null;){if(t.tag===3){jd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){e=Br(n,e),e=op(t,e,1),t=En(t,e,1),e=Ze(),t!==null&&(so(t,1,e),at(t,e));break}}t=t.return}}function t2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Ue&n)===n&&(Te===4||Te===3&&(Ue&130023424)===Ue&&500>Me()-Fu?Kn(e,0):Au|=n),at(e,t)}function Np(e,t){t===0&&(e.mode&1?(t=No,No<<=1,!(No&130023424)&&(No=4194304)):t=1);var n=Ze();e=rn(e,t),e!==null&&(so(e,t,n),at(e,n))}function n2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Np(e,n)}function r2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Np(e,n)}var Mp;Mp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,W1(e,t,n);rt=!!(e.flags&131072)}else rt=!1,he&&t.flags&1048576&&D0(t,xl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var i=Fr(t,Ge.current);Ir(t,n),i=Pu(null,t,r,e,i,n);var o=zu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,lt(r)?(o=!0,vl(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mu(t),i.updater=Hl,t.stateNode=i,i._reactInternals=t,Ms(t,r,e,n),t=Ds(null,t,r,!0,o,n)):(t.tag=0,he&&o&&xu(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=o2(r),e=Lt(r,e),i){case 0:t=Ls(null,t,r,e,n);break e;case 1:t=pd(null,t,r,e,n);break e;case 11:t=dd(null,t,r,e,n);break e;case 14:t=fd(null,t,r,Lt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Ls(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),pd(e,t,r,i,n);case 3:e:{if(up(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,_0(e,t),Cl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Br(Error(D(423)),t),t=hd(e,t,r,n,i);break e}else if(r!==i){i=Br(Error(D(424)),t),t=hd(e,t,r,n,i);break e}else for(pt=Mn(t.stateNode.containerInfo.firstChild),ht=t,he=!0,Pt=null,n=A0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($r(),r===i){t=on(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return F0(t),e===null&&js(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,ys(r,i)?l=null:o!==null&&ys(r,o)&&(t.flags|=32),sp(e,t),Ke(e,t,l,n),t.child;case 6:return e===null&&js(t),null;case 13:return cp(e,t,n);case 4:return Eu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=br(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),dd(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ue(wl,r._currentValue),r._currentValue=l,o!==null)if(Rt(o.value,l)){if(o.children===i.children&&!ot.current){t=on(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Xt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ks(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ks(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ir(t,n),i=kt(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=Lt(r,t.pendingProps),i=Lt(r.type,i),fd(e,t,r,i,n);case 15:return lp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Lt(r,i),Xo(e,t),t.tag=1,lt(r)?(e=!0,vl(t)):e=!1,Ir(t,n),R0(t,r,i),Ms(t,r,i,n),Ds(null,t,r,!0,e,n);case 19:return dp(e,t,n);case 22:return ap(e,t,n)}throw Error(D(156,t.tag))};function Ep(e,t){return Jf(e,t)}function i2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,t,n,r){return new i2(e,t,n,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function o2(e){if(typeof e=="function")return Bu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===su)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=Ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function tl(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Bu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mr:return qn(n.children,i,o,t);case lu:l=8,i|=8;break;case qa:return e=Ct(12,n,t,i|2),e.elementType=qa,e.lanes=o,e;case Za:return e=Ct(13,n,t,i),e.elementType=Za,e.lanes=o,e;case Xa:return e=Ct(19,n,t,i),e.elementType=Xa,e.lanes=o,e;case Of:return Ql(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case If:l=10;break e;case Rf:l=9;break e;case au:l=11;break e;case su:l=14;break e;case vn:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Ct(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function qn(e,t,n,r){return e=Ct(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Ct(22,e,r,t),e.elementType=Of,e.lanes=n,e.stateNode={isHidden:!1},e}function Aa(e,t,n){return e=Ct(6,e,null,t),e.lanes=n,e}function Fa(e,t,n){return t=Ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function l2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,i,o,l,a,s){return e=new l2(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(o),e}function a2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Lp(e){if(!e)return _n;e=e._reactInternals;e:{if(ar(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(lt(n))return E0(e,n,t)}return t}function Dp(e,t,n,r,i,o,l,a,s){return e=Hu(n,r,!0,e,i,o,l,a,s),e.context=Lp(null),n=e.current,r=Ze(),i=Dn(n),o=Xt(r,i),o.callback=t??null,En(n,o,i),e.current.lanes=i,so(e,i,r),at(e,r),e}function Gl(e,t,n,r){var i=t.current,o=Ze(),l=Dn(i);return n=Lp(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=En(i,t,l),e!==null&&(_t(e,i,l,o),Ko(e,i,l)),l}function Tl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function kd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wu(e,t){kd(e,t),(e=e.alternate)&&kd(e,t)}function s2(){return null}var Tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}Kl.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Gl(e,t,null,null)};Kl.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rr(function(){Gl(null,e,null,null)}),t[nn]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=l0();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xn.length&&t!==0&&t<xn[n].priority;n++);xn.splice(n,0,e),n===0&&s0(e)}};function Vu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Nd(){}function u2(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Tl(l);o.call(c)}}var l=Dp(t,r,e,0,null,!1,!1,"",Nd);return e._reactRootContainer=l,e[nn]=l.current,Qi(e.nodeType===8?e.parentNode:e),rr(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Tl(s);a.call(c)}}var s=Hu(e,0,!1,null,null,!1,!1,"",Nd);return e._reactRootContainer=s,e[nn]=s.current,Qi(e.nodeType===8?e.parentNode:e),rr(function(){Gl(t,s,n,r)}),s}function Zl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=Tl(l);a.call(s)}}Gl(t,l,e,i)}else l=u2(n,t,e,i,r);return Tl(l)}i0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ci(t.pendingLanes);n!==0&&(du(t,n|1),at(t,Me()),!(ne&6)&&(Hr=Me()+500,On()))}break;case 13:rr(function(){var r=rn(e,1);if(r!==null){var i=Ze();_t(r,e,1,i)}}),Wu(e,1)}};fu=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=Ze();_t(t,e,134217728,n)}Wu(e,134217728)}};o0=function(e){if(e.tag===13){var t=Dn(e),n=rn(e,t);if(n!==null){var r=Ze();_t(n,e,t,r)}Wu(e,t)}};l0=function(){return oe};a0=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};ss=function(e,t,n){switch(t){case"input":if(ts(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ul(r);if(!i)throw Error(D(90));Ff(r),ts(r,i)}}}break;case"textarea":bf(e,n);break;case"select":t=n.value,t!=null&&Tr(e,!!n.multiple,t,!1)}};Qf=$u;Gf=rr;var c2={usingClientEntryPoint:!1,Events:[co,xr,Ul,Yf,Vf,$u]},fi={findFiberByHostInstance:Hn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},d2={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zf(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||s2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Al=Oo.inject(d2),Ht=Oo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;gt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(t))throw Error(D(200));return a2(e,t,null,n)};gt.createRoot=function(e,t){if(!Vu(e))throw Error(D(299));var n=!1,r="",i=Tp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,Qi(e.nodeType===8?e.parentNode:e),new Yu(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Zf(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return rr(e)};gt.hydrate=function(e,t,n){if(!ql(t))throw Error(D(200));return Zl(null,e,t,!0,n)};gt.hydrateRoot=function(e,t,n){if(!Vu(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Tp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Dp(t,null,e,1,n??null,i,!1,o,l),e[nn]=t.current,Qi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Kl(t)};gt.render=function(e,t,n){if(!ql(t))throw Error(D(200));return Zl(null,e,t,!1,n)};gt.unmountComponentAtNode=function(e){if(!ql(e))throw Error(D(40));return e._reactRootContainer?(rr(function(){Zl(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};gt.unstable_batchedUpdates=$u;gt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ql(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Zl(e,t,n,!1,r)};gt.version="18.2.0-next-9e3b772b8-20220608";function Pp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pp)}catch(e){console.error(e)}}Pp(),Df.exports=gt;var Qu=Df.exports;const f2=yf(Qu),p2=gf({__proto__:null,default:f2},[Qu]);var Md=Qu;Ga.createRoot=Md.createRoot,Ga.hydrateRoot=Md.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const Ed="popstate";function h2(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return no("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:or(i)}return g2(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ir(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function m2(){return Math.random().toString(36).substr(2,8)}function Ld(e,t){return{usr:e.state,key:e.key,idx:t}}function no(e,t,n,r){return n===void 0&&(n=null),Se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?an(t):t,{state:n,key:t&&t.key||r||m2()})}function or(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function an(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ne.Pop,s=null,c=d();c==null&&(c=0,l.replaceState(Se({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function h(){a=Ne.Pop;let N=d(),p=N==null?null:N-c;c=N,s&&s({action:a,location:w.location,delta:p})}function m(N,p){a=Ne.Push;let f=no(w.location,N,p);n&&n(f,N),c=d()+1;let g=Ld(f,c),k=w.createHref(f);try{l.pushState(g,"",k)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(k)}o&&s&&s({action:a,location:w.location,delta:1})}function x(N,p){a=Ne.Replace;let f=no(w.location,N,p);n&&n(f,N),c=d();let g=Ld(f,c),k=w.createHref(f);l.replaceState(g,"",k),o&&s&&s({action:a,location:w.location,delta:0})}function S(N){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof N=="string"?N:or(N);return G(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return e(i,l)},listen(N){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Ed,h),s=N,()=>{i.removeEventListener(Ed,h),s=null}},createHref(N){return t(i,N)},createURL:S,encodeLocation(N){let p=S(N);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(N){return l.go(N)}};return w}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));const v2=new Set(["lazy","caseSensitive","path","id","index","children"]);function y2(e){return e.index===!0}function Us(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let l=[...n,o],a=typeof i.id=="string"?i.id:l.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),y2(i)){let s=Se({},i,t(i),{id:a});return r[a]=s,s}else{let s=Se({},i,t(i),{id:a,children:void 0});return r[a]=s,i.children&&(s.children=Us(i.children,t,l,r)),s}})}function Mr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?an(t):t,i=Jr(r.pathname||"/",n);if(i==null)return null;let o=zp(e);w2(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=D2(o[a],z2(i));return l}function x2(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function zp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(G(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Jt([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),zp(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:E2(c,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of _p(o.path))i(o,l,s)}),t}function _p(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=_p(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function w2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:L2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const S2=/^:[\w-]+$/,C2=3,j2=2,k2=1,N2=10,M2=-2,Dd=e=>e==="*";function E2(e,t){let n=e.split("/"),r=n.length;return n.some(Dd)&&(r+=M2),t&&(r+=j2),n.filter(i=>!Dd(i)).reduce((i,o)=>i+(S2.test(o)?C2:o===""?k2:N2),r)}function L2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function D2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=T2({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:Jt([i,d.pathname]),pathnameBase:O2(Jt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Jt([i,d.pathnameBase]))}return o}function T2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let w=a[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const S=a[h];return x&&!S?c[m]=void 0:c[m]=_2(S||"",m),c},{}),pathname:o,pathnameBase:l,pattern:e}}function P2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ir(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function z2(e){try{return decodeURI(e)}catch(t){return ir(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _2(e,t){try{return decodeURIComponent(e)}catch(n){return ir(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Jr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function I2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?an(e):e;return{pathname:n?n.startsWith("/")?n:R2(n,t):t,search:A2(r),hash:F2(i)}}function R2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $a(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ip(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gu(e,t){let n=Ip(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ku(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=an(e):(i=Se({},e),G(!i.pathname||!i.pathname.includes("?"),$a("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),$a("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),$a("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let s=I2(i,a),c=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),O2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),A2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,F2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class qu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Rp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Op=["post","put","patch","delete"],$2=new Set(Op),b2=["get",...Op],U2=new Set(b2),B2=new Set([301,302,303,307,308]),H2=new Set([307,308]),ba={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},W2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},pi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ap=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y2=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Fp="remix-router-transitions";function V2(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=C=>({hasErrorBoundary:y(C)})}else i=Y2;let o={},l=Us(e.routes,i,void 0,o),a,s=e.basename||"/",c=Se({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),d=null,h=new Set,m=null,x=null,S=null,w=e.hydrationData!=null,N=Mr(l,e.history.location,s),p=null;if(N==null){let y=xt(404,{pathname:e.history.location.pathname}),{matches:C,route:M}=Ad(l);N=C,p={[M.id]:y}}let f,g=N.some(y=>y.route.lazy),k=N.some(y=>y.route.loader);if(g)f=!1;else if(!k)f=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,C=e.hydrationData?e.hydrationData.errors:null;f=N.every(M=>M.route.loader&&M.route.loader.hydrate!==!0&&(y&&y[M.route.id]!==void 0||C&&C[M.route.id]!==void 0))}else f=e.hydrationData!=null;let L,v={historyAction:e.history.action,location:e.history.location,matches:N,initialized:f,navigation:ba,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},j=Ne.Pop,T=!1,I,$=!1,J=new Map,Ce=null,ye=!1,et=!1,cn=[],Ot=[],le=new Map,z=0,A=-1,U=new Map,q=new Set,ee=new Map,st=new Map,je=new Set,He=new Map,ke=new Map,ut=!1;function An(){if(d=e.history.listen(y=>{let{action:C,location:M,delta:P}=y;if(ut){ut=!1;return}ir(ke.size===0||P!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let R=mc({currentLocation:v.location,nextLocation:M,historyAction:C});if(R&&P!=null){ut=!0,e.history.go(P*-1),vo(R,{state:"blocked",location:M,proceed(){vo(R,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),e.history.go(P)},reset(){let K=new Map(v.blockers);K.set(R,pi),Pe({blockers:K})}});return}return Fn(C,M)}),n){rg(t,J);let y=()=>ig(t,J);t.addEventListener("pagehide",y),Ce=()=>t.removeEventListener("pagehide",y)}return v.initialized||Fn(Ne.Pop,v.location,{initialHydration:!0}),L}function Yt(){d&&d(),Ce&&Ce(),h.clear(),I&&I.abort(),v.fetchers.forEach((y,C)=>go(C)),v.blockers.forEach((y,C)=>hc(C))}function ni(y){return h.add(y),()=>h.delete(y)}function Pe(y,C){C===void 0&&(C={}),v=Se({},v,y);let M=[],P=[];c.v7_fetcherPersist&&v.fetchers.forEach((R,K)=>{R.state==="idle"&&(je.has(K)?P.push(K):M.push(K))}),[...h].forEach(R=>R(v,{deletedFetchers:P,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),c.v7_fetcherPersist&&(M.forEach(R=>v.fetchers.delete(R)),P.forEach(R=>go(R)))}function tt(y,C,M){var P,R;let{flushSync:K}=M===void 0?{}:M,W=v.actionData!=null&&v.navigation.formMethod!=null&&Tt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((P=y.state)==null?void 0:P._isRedirect)!==!0,H;C.actionData?Object.keys(C.actionData).length>0?H=C.actionData:H=null:W?H=v.actionData:H=null;let F=C.loaderData?Od(v.loaderData,C.loaderData,C.matches||[],C.errors):v.loaderData,X=v.blockers;X.size>0&&(X=new Map(X),X.forEach((se,Fe)=>X.set(Fe,pi)));let ze=T===!0||v.navigation.formMethod!=null&&Tt(v.navigation.formMethod)&&((R=y.state)==null?void 0:R._isRedirect)!==!0;a&&(l=a,a=void 0),ye||j===Ne.Pop||(j===Ne.Push?e.history.push(y,y.state):j===Ne.Replace&&e.history.replace(y,y.state));let V;if(j===Ne.Pop){let se=J.get(v.location.pathname);se&&se.has(y.pathname)?V={currentLocation:v.location,nextLocation:y}:J.has(y.pathname)&&(V={currentLocation:y,nextLocation:v.location})}else if($){let se=J.get(v.location.pathname);se?se.add(y.pathname):(se=new Set([y.pathname]),J.set(v.location.pathname,se)),V={currentLocation:v.location,nextLocation:y}}Pe(Se({},C,{actionData:H,loaderData:F,historyAction:j,location:y,initialized:!0,navigation:ba,revalidation:"idle",restoreScrollPosition:vc(y,C.matches||v.matches),preventScrollReset:ze,blockers:X}),{viewTransitionOpts:V,flushSync:K===!0}),j=Ne.Pop,T=!1,$=!1,ye=!1,et=!1,cn=[],Ot=[]}async function sc(y,C){if(typeof y=="number"){e.history.go(y);return}let M=Bs(v.location,v.matches,s,c.v7_prependBasename,y,c.v7_relativeSplatPath,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:P,submission:R,error:K}=Td(c.v7_normalizeFormMethod,!1,M,C),W=v.location,H=no(v.location,P,C&&C.state);H=Se({},H,e.history.encodeLocation(H));let F=C&&C.replace!=null?C.replace:void 0,X=Ne.Push;F===!0?X=Ne.Replace:F===!1||R!=null&&Tt(R.formMethod)&&R.formAction===v.location.pathname+v.location.search&&(X=Ne.Replace);let ze=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,V=(C&&C.unstable_flushSync)===!0,se=mc({currentLocation:W,nextLocation:H,historyAction:X});if(se){vo(se,{state:"blocked",location:H,proceed(){vo(se,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),sc(y,C)},reset(){let Fe=new Map(v.blockers);Fe.set(se,pi),Pe({blockers:Fe})}});return}return await Fn(X,H,{submission:R,pendingError:K,preventScrollReset:ze,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:V})}function Dh(){if(aa(),Pe({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Fn(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}Fn(j||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function Fn(y,C,M){I&&I.abort(),I=null,j=y,ye=(M&&M.startUninterruptedRevalidation)===!0,Fh(v.location,v.matches),T=(M&&M.preventScrollReset)===!0,$=(M&&M.enableViewTransition)===!0;let P=a||l,R=M&&M.overrideNavigation,K=Mr(P,C,s),W=(M&&M.flushSync)===!0;if(!K){let Fe=xt(404,{pathname:C.pathname}),{matches:yt,route:_e}=Ad(P);sa(),tt(C,{matches:yt,loaderData:{},errors:{[_e.id]:Fe}},{flushSync:W});return}if(v.initialized&&!et&&Z2(v.location,C)&&!(M&&M.submission&&Tt(M.submission.formMethod))){tt(C,{matches:K},{flushSync:W});return}I=new AbortController;let H=mi(e.history,C,I.signal,M&&M.submission),F,X;if(M&&M.pendingError)X={[Ai(K).route.id]:M.pendingError};else if(M&&M.submission&&Tt(M.submission.formMethod)){let Fe=await Th(H,C,M.submission,K,{replace:M.replace,flushSync:W});if(Fe.shortCircuited)return;F=Fe.pendingActionData,X=Fe.pendingActionError,R=Ua(C,M.submission),W=!1,H=new Request(H.url,{signal:H.signal})}let{shortCircuited:ze,loaderData:V,errors:se}=await Ph(H,C,K,R,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,W,F,X);ze||(I=null,tt(C,Se({matches:K},F?{actionData:F}:{},{loaderData:V,errors:se})))}async function Th(y,C,M,P,R){R===void 0&&(R={}),aa();let K=tg(C,M);Pe({navigation:K},{flushSync:R.flushSync===!0});let W,H=Ws(P,C);if(!H.route.action&&!H.route.lazy)W={type:xe.error,error:xt(405,{method:y.method,pathname:C.pathname,routeId:H.route.id})};else if(W=await hi("action",y,H,P,o,i,s,c.v7_relativeSplatPath),y.signal.aborted)return{shortCircuited:!0};if(Qn(W)){let F;return R&&R.replace!=null?F=R.replace:F=W.location===v.location.pathname+v.location.search,await ri(v,W,{submission:M,replace:F}),{shortCircuited:!0}}if(Er(W)){let F=Ai(P,H.route.id);return(R&&R.replace)!==!0&&(j=Ne.Push),{pendingActionData:{},pendingActionError:{[F.route.id]:W.error}}}if(Vn(W))throw xt(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:W.data}}}async function Ph(y,C,M,P,R,K,W,H,F,X,ze){let V=P||Ua(C,R),se=R||K||bd(V),Fe=a||l,[yt,_e]=Pd(e.history,v,M,se,C,c.v7_partialHydration&&H===!0,et,cn,Ot,je,ee,q,Fe,s,X,ze);if(sa(ae=>!(M&&M.some(pe=>pe.route.id===ae))||yt&&yt.some(pe=>pe.route.id===ae)),A=++z,yt.length===0&&_e.length===0){let ae=fc();return tt(C,Se({matches:M,loaderData:{},errors:ze||null},X?{actionData:X}:{},ae?{fetchers:new Map(v.fetchers)}:{}),{flushSync:F}),{shortCircuited:!0}}if(!ye&&(!c.v7_partialHydration||!H)){_e.forEach(pe=>{let At=v.fetchers.get(pe.key),xo=gi(void 0,At?At.data:void 0);v.fetchers.set(pe.key,xo)});let ae=X||v.actionData;Pe(Se({navigation:V},ae?Object.keys(ae).length===0?{actionData:null}:{actionData:ae}:{},_e.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:F})}_e.forEach(ae=>{le.has(ae.key)&&fn(ae.key),ae.controller&&le.set(ae.key,ae.controller)});let ur=()=>_e.forEach(ae=>fn(ae.key));I&&I.signal.addEventListener("abort",ur);let{results:ua,loaderResults:cr,fetcherResults:pn}=await uc(v.matches,M,yt,_e,y);if(y.signal.aborted)return{shortCircuited:!0};I&&I.signal.removeEventListener("abort",ur),_e.forEach(ae=>le.delete(ae.key));let $n=Fd(ua);if($n){if($n.idx>=yt.length){let ae=_e[$n.idx-yt.length].key;q.add(ae)}return await ri(v,$n.result,{replace:W}),{shortCircuited:!0}}let{loaderData:ca,errors:da}=Rd(v,M,yt,cr,ze,_e,pn,He);He.forEach((ae,pe)=>{ae.subscribe(At=>{(At||ae.done)&&He.delete(pe)})});let fa=fc(),dr=pc(A),yo=fa||dr||_e.length>0;return Se({loaderData:ca,errors:da},yo?{fetchers:new Map(v.fetchers)}:{})}function zh(y,C,M,P){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");le.has(y)&&fn(y);let R=(P&&P.unstable_flushSync)===!0,K=a||l,W=Bs(v.location,v.matches,s,c.v7_prependBasename,M,c.v7_relativeSplatPath,C,P==null?void 0:P.relative),H=Mr(K,W,s);if(!H){ii(y,C,xt(404,{pathname:W}),{flushSync:R});return}let{path:F,submission:X,error:ze}=Td(c.v7_normalizeFormMethod,!0,W,P);if(ze){ii(y,C,ze,{flushSync:R});return}let V=Ws(H,F);if(T=(P&&P.preventScrollReset)===!0,X&&Tt(X.formMethod)){_h(y,C,F,V,H,R,X);return}ee.set(y,{routeId:C,path:F}),Ih(y,C,F,V,H,R,X)}async function _h(y,C,M,P,R,K,W){if(aa(),ee.delete(y),!P.route.action&&!P.route.lazy){let pe=xt(405,{method:W.formMethod,pathname:M,routeId:C});ii(y,C,pe,{flushSync:K});return}let H=v.fetchers.get(y);dn(y,ng(W,H),{flushSync:K});let F=new AbortController,X=mi(e.history,M,F.signal,W);le.set(y,F);let ze=z,V=await hi("action",X,P,R,o,i,s,c.v7_relativeSplatPath);if(X.signal.aborted){le.get(y)===F&&le.delete(y);return}if(c.v7_fetcherPersist&&je.has(y)){if(Qn(V)||Er(V)){dn(y,mn(void 0));return}}else{if(Qn(V))if(le.delete(y),A>ze){dn(y,mn(void 0));return}else return q.add(y),dn(y,gi(W)),ri(v,V,{fetcherSubmission:W});if(Er(V)){ii(y,C,V.error);return}}if(Vn(V))throw xt(400,{type:"defer-action"});let se=v.navigation.location||v.location,Fe=mi(e.history,se,F.signal),yt=a||l,_e=v.navigation.state!=="idle"?Mr(yt,v.navigation.location,s):v.matches;G(_e,"Didn't find any matches after fetcher action");let ur=++z;U.set(y,ur);let ua=gi(W,V.data);v.fetchers.set(y,ua);let[cr,pn]=Pd(e.history,v,_e,W,se,!1,et,cn,Ot,je,ee,q,yt,s,{[P.route.id]:V.data},void 0);pn.filter(pe=>pe.key!==y).forEach(pe=>{let At=pe.key,xo=v.fetchers.get(At),bh=gi(void 0,xo?xo.data:void 0);v.fetchers.set(At,bh),le.has(At)&&fn(At),pe.controller&&le.set(At,pe.controller)}),Pe({fetchers:new Map(v.fetchers)});let $n=()=>pn.forEach(pe=>fn(pe.key));F.signal.addEventListener("abort",$n);let{results:ca,loaderResults:da,fetcherResults:fa}=await uc(v.matches,_e,cr,pn,Fe);if(F.signal.aborted)return;F.signal.removeEventListener("abort",$n),U.delete(y),le.delete(y),pn.forEach(pe=>le.delete(pe.key));let dr=Fd(ca);if(dr){if(dr.idx>=cr.length){let pe=pn[dr.idx-cr.length].key;q.add(pe)}return ri(v,dr.result)}let{loaderData:yo,errors:ae}=Rd(v,v.matches,cr,da,void 0,pn,fa,He);if(v.fetchers.has(y)){let pe=mn(V.data);v.fetchers.set(y,pe)}pc(ur),v.navigation.state==="loading"&&ur>A?(G(j,"Expected pending action"),I&&I.abort(),tt(v.navigation.location,{matches:_e,loaderData:yo,errors:ae,fetchers:new Map(v.fetchers)})):(Pe({errors:ae,loaderData:Od(v.loaderData,yo,_e,ae),fetchers:new Map(v.fetchers)}),et=!1)}async function Ih(y,C,M,P,R,K,W){let H=v.fetchers.get(y);dn(y,gi(W,H?H.data:void 0),{flushSync:K});let F=new AbortController,X=mi(e.history,M,F.signal);le.set(y,F);let ze=z,V=await hi("loader",X,P,R,o,i,s,c.v7_relativeSplatPath);if(Vn(V)&&(V=await Up(V,X.signal,!0)||V),le.get(y)===F&&le.delete(y),!X.signal.aborted){if(je.has(y)){dn(y,mn(void 0));return}if(Qn(V))if(A>ze){dn(y,mn(void 0));return}else{q.add(y),await ri(v,V);return}if(Er(V)){ii(y,C,V.error);return}G(!Vn(V),"Unhandled fetcher deferred data"),dn(y,mn(V.data))}}async function ri(y,C,M){let{submission:P,fetcherSubmission:R,replace:K}=M===void 0?{}:M;C.revalidate&&(et=!0);let W=no(y.location,C.location,{_isRedirect:!0});if(G(W,"Expected a location on the redirect navigation"),n){let se=!1;if(C.reloadDocument)se=!0;else if(Ap.test(C.location)){const Fe=e.history.createURL(C.location);se=Fe.origin!==t.location.origin||Jr(Fe.pathname,s)==null}if(se){K?t.location.replace(C.location):t.location.assign(C.location);return}}I=null;let H=K===!0?Ne.Replace:Ne.Push,{formMethod:F,formAction:X,formEncType:ze}=y.navigation;!P&&!R&&F&&X&&ze&&(P=bd(y.navigation));let V=P||R;if(H2.has(C.status)&&V&&Tt(V.formMethod))await Fn(H,W,{submission:Se({},V,{formAction:C.location}),preventScrollReset:T});else{let se=Ua(W,P);await Fn(H,W,{overrideNavigation:se,fetcherSubmission:R,preventScrollReset:T})}}async function uc(y,C,M,P,R){let K=await Promise.all([...M.map(F=>hi("loader",R,F,C,o,i,s,c.v7_relativeSplatPath)),...P.map(F=>F.matches&&F.match&&F.controller?hi("loader",mi(e.history,F.path,F.controller.signal),F.match,F.matches,o,i,s,c.v7_relativeSplatPath):{type:xe.error,error:xt(404,{pathname:F.path})})]),W=K.slice(0,M.length),H=K.slice(M.length);return await Promise.all([$d(y,M,W,W.map(()=>R.signal),!1,v.loaderData),$d(y,P.map(F=>F.match),H,P.map(F=>F.controller?F.controller.signal:null),!0)]),{results:K,loaderResults:W,fetcherResults:H}}function aa(){et=!0,cn.push(...sa()),ee.forEach((y,C)=>{le.has(C)&&(Ot.push(C),fn(C))})}function dn(y,C,M){M===void 0&&(M={}),v.fetchers.set(y,C),Pe({fetchers:new Map(v.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function ii(y,C,M,P){P===void 0&&(P={});let R=Ai(v.matches,C);go(y),Pe({errors:{[R.route.id]:M},fetchers:new Map(v.fetchers)},{flushSync:(P&&P.flushSync)===!0})}function cc(y){return c.v7_fetcherPersist&&(st.set(y,(st.get(y)||0)+1),je.has(y)&&je.delete(y)),v.fetchers.get(y)||W2}function go(y){let C=v.fetchers.get(y);le.has(y)&&!(C&&C.state==="loading"&&U.has(y))&&fn(y),ee.delete(y),U.delete(y),q.delete(y),je.delete(y),v.fetchers.delete(y)}function Rh(y){if(c.v7_fetcherPersist){let C=(st.get(y)||0)-1;C<=0?(st.delete(y),je.add(y)):st.set(y,C)}else go(y);Pe({fetchers:new Map(v.fetchers)})}function fn(y){let C=le.get(y);G(C,"Expected fetch controller: "+y),C.abort(),le.delete(y)}function dc(y){for(let C of y){let M=cc(C),P=mn(M.data);v.fetchers.set(C,P)}}function fc(){let y=[],C=!1;for(let M of q){let P=v.fetchers.get(M);G(P,"Expected fetcher: "+M),P.state==="loading"&&(q.delete(M),y.push(M),C=!0)}return dc(y),C}function pc(y){let C=[];for(let[M,P]of U)if(P<y){let R=v.fetchers.get(M);G(R,"Expected fetcher: "+M),R.state==="loading"&&(fn(M),U.delete(M),C.push(M))}return dc(C),C.length>0}function Oh(y,C){let M=v.blockers.get(y)||pi;return ke.get(y)!==C&&ke.set(y,C),M}function hc(y){v.blockers.delete(y),ke.delete(y)}function vo(y,C){let M=v.blockers.get(y)||pi;G(M.state==="unblocked"&&C.state==="blocked"||M.state==="blocked"&&C.state==="blocked"||M.state==="blocked"&&C.state==="proceeding"||M.state==="blocked"&&C.state==="unblocked"||M.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+C.state);let P=new Map(v.blockers);P.set(y,C),Pe({blockers:P})}function mc(y){let{currentLocation:C,nextLocation:M,historyAction:P}=y;if(ke.size===0)return;ke.size>1&&ir(!1,"A router only supports one blocker at a time");let R=Array.from(ke.entries()),[K,W]=R[R.length-1],H=v.blockers.get(K);if(!(H&&H.state==="proceeding")&&W({currentLocation:C,nextLocation:M,historyAction:P}))return K}function sa(y){let C=[];return He.forEach((M,P)=>{(!y||y(P))&&(M.cancel(),C.push(P),He.delete(P))}),C}function Ah(y,C,M){if(m=y,S=C,x=M||null,!w&&v.navigation===ba){w=!0;let P=vc(v.location,v.matches);P!=null&&Pe({restoreScrollPosition:P})}return()=>{m=null,S=null,x=null}}function gc(y,C){return x&&x(y,C.map(P=>x2(P,v.loaderData)))||y.key}function Fh(y,C){if(m&&S){let M=gc(y,C);m[M]=S()}}function vc(y,C){if(m){let M=gc(y,C),P=m[M];if(typeof P=="number")return P}return null}function $h(y){o={},a=Us(y,i,void 0,o)}return L={get basename(){return s},get future(){return c},get state(){return v},get routes(){return l},get window(){return t},initialize:An,subscribe:ni,enableScrollRestoration:Ah,navigate:sc,fetch:zh,revalidate:Dh,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:cc,deleteFetcher:Rh,dispose:Yt,getBlocker:Oh,deleteBlocker:hc,_internalFetchControllers:le,_internalActiveDeferreds:He,_internalSetRoutes:$h},L}function Q2(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Bs(e,t,n,r,i,o,l,a){let s,c;if(l){s=[];for(let h of t)if(s.push(h),h.route.id===l){c=h;break}}else s=t,c=t[t.length-1];let d=Ku(i||".",Gu(s,o),Jr(e.pathname,n)||e.pathname,a==="path");return i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Zu(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Jt([n,d.pathname])),or(d)}function Td(e,t,n,r){if(!r||!Q2(r))return{path:n};if(r.formMethod&&!eg(r.formMethod))return{path:n,error:xt(405,{method:r.formMethod})};let i=()=>({path:n,error:xt(400,{type:"invalid-body"})}),o=r.formMethod||"get",l=e?o.toUpperCase():o.toLowerCase(),a=bp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Tt(l))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,S)=>{let[w,N]=S;return""+x+w+"="+N+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Tt(l))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let s,c;if(r.formData)s=Hs(r.formData),c=r.formData;else if(r.body instanceof FormData)s=Hs(r.body),c=r.body;else if(r.body instanceof URLSearchParams)s=r.body,c=Id(s);else if(r.body==null)s=new URLSearchParams,c=new FormData;else try{s=new URLSearchParams(r.body),c=Id(s)}catch{return i()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Tt(d.formMethod))return{path:n,submission:d};let h=an(n);return t&&h.search&&Zu(h.search)&&s.append("index",""),h.search="?"+s,{path:or(h),submission:d}}function G2(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Pd(e,t,n,r,i,o,l,a,s,c,d,h,m,x,S,w){let N=w?Object.values(w)[0]:S?Object.values(S)[0]:void 0,p=e.createURL(t.location),f=e.createURL(i),g=w?Object.keys(w)[0]:void 0,L=G2(n,g).filter((j,T)=>{let{route:I}=j;if(I.lazy)return!0;if(I.loader==null)return!1;if(o)return I.loader.hydrate?!0:t.loaderData[I.id]===void 0&&(!t.errors||t.errors[I.id]===void 0);if(K2(t.loaderData,t.matches[T],j)||a.some(Ce=>Ce===j.route.id))return!0;let $=t.matches[T],J=j;return zd(j,Se({currentUrl:p,currentParams:$.params,nextUrl:f,nextParams:J.params},r,{actionResult:N,defaultShouldRevalidate:l||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||$p($,J)}))}),v=[];return d.forEach((j,T)=>{if(o||!n.some(ye=>ye.route.id===j.routeId)||c.has(T))return;let I=Mr(m,j.path,x);if(!I){v.push({key:T,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let $=t.fetchers.get(T),J=Ws(I,j.path),Ce=!1;h.has(T)?Ce=!1:s.includes(T)?Ce=!0:$&&$.state!=="idle"&&$.data===void 0?Ce=l:Ce=zd(J,Se({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:N,defaultShouldRevalidate:l})),Ce&&v.push({key:T,routeId:j.routeId,path:j.path,matches:I,match:J,controller:new AbortController})}),[L,v]}function K2(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function $p(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function zd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function _d(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let o={};for(let l in r){let s=i[l]!==void 0&&l!=="hasErrorBoundary";ir(!s,'Route "'+i.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!v2.has(l)&&(o[l]=r[l])}Object.assign(i,o),Object.assign(i,Se({},t(i),{lazy:void 0}))}async function hi(e,t,n,r,i,o,l,a,s){s===void 0&&(s={});let c,d,h,m=w=>{let N,p=new Promise((f,g)=>N=g);return h=()=>N(),t.signal.addEventListener("abort",h),Promise.race([w({request:t,params:n.params,context:s.requestContext}),p])};try{let w=n.route[e];if(n.route.lazy)if(w){let N,p=await Promise.all([m(w).catch(f=>{N=f}),_d(n.route,o,i)]);if(N)throw N;d=p[0]}else if(await _d(n.route,o,i),w=n.route[e],w)d=await m(w);else if(e==="action"){let N=new URL(t.url),p=N.pathname+N.search;throw xt(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:xe.data,data:void 0};else if(w)d=await m(w);else{let N=new URL(t.url),p=N.pathname+N.search;throw xt(404,{pathname:p})}G(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(w){c=xe.error,d=w}finally{h&&t.signal.removeEventListener("abort",h)}if(J2(d)){let w=d.status;if(B2.has(w)){let p=d.headers.get("Location");if(G(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ap.test(p))p=Bs(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,p,a);else if(!s.isStaticRequest){let f=new URL(t.url),g=p.startsWith("//")?new URL(f.protocol+p):new URL(p),k=Jr(g.pathname,l)!=null;g.origin===f.origin&&k&&(p=g.pathname+g.search+g.hash)}if(s.isStaticRequest)throw d.headers.set("Location",p),d;return{type:xe.redirect,status:w,location:p,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:c===xe.error?xe.error:xe.data,response:d};let N;try{let p=d.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?d.body==null?N=null:N=await d.json():N=await d.text()}catch(p){return{type:xe.error,error:p}}return c===xe.error?{type:c,error:new qu(w,d.statusText,N),headers:d.headers}:{type:xe.data,data:N,statusCode:d.status,headers:d.headers}}if(c===xe.error)return{type:c,error:d};if(X2(d)){var x,S;return{type:xe.deferred,deferredData:d,statusCode:(x=d.init)==null?void 0:x.status,headers:((S=d.init)==null?void 0:S.headers)&&new Headers(d.init.headers)}}return{type:xe.data,data:d}}function mi(e,t,n,r){let i=e.createURL(bp(t)).toString(),o={signal:n};if(r&&Tt(r.formMethod)){let{formMethod:l,formEncType:a}=r;o.method=l.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=Hs(r.formData):o.body=r.formData}return new Request(i,o)}function Hs(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Id(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function q2(e,t,n,r,i){let o={},l=null,a,s=!1,c={};return n.forEach((d,h)=>{let m=t[h].route.id;if(G(!Qn(d),"Cannot handle redirect results in processLoaderData"),Er(d)){let x=Ai(e,m),S=d.error;r&&(S=Object.values(r)[0],r=void 0),l=l||{},l[x.route.id]==null&&(l[x.route.id]=S),o[m]=void 0,s||(s=!0,a=Rp(d.error)?d.error.status:500),d.headers&&(c[m]=d.headers)}else Vn(d)?(i.set(m,d.deferredData),o[m]=d.deferredData.data):o[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(a=d.statusCode),d.headers&&(c[m]=d.headers)}),r&&(l=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:l,statusCode:a||200,loaderHeaders:c}}function Rd(e,t,n,r,i,o,l,a){let{loaderData:s,errors:c}=q2(t,n,r,i,a);for(let d=0;d<o.length;d++){let{key:h,match:m,controller:x}=o[d];G(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let S=l[d];if(!(x&&x.signal.aborted))if(Er(S)){let w=Ai(e.matches,m==null?void 0:m.route.id);c&&c[w.route.id]||(c=Se({},c,{[w.route.id]:S.error})),e.fetchers.delete(h)}else if(Qn(S))G(!1,"Unhandled fetcher revalidation redirect");else if(Vn(S))G(!1,"Unhandled fetcher deferred data");else{let w=mn(S.data);e.fetchers.set(h,w)}}return{loaderData:s,errors:c}}function Od(e,t,n,r){let i=Se({},t);for(let o of n){let l=o.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&o.route.loader&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function Ai(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Ad(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function xt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",a='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new qu(e||500,l,new Error(a),!0)}function Fd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Qn(n))return{result:n,idx:t}}}function bp(e){let t=typeof e=="string"?an(e):e;return or(Se({},t,{hash:""}))}function Z2(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Vn(e){return e.type===xe.deferred}function Er(e){return e.type===xe.error}function Qn(e){return(e&&e.type)===xe.redirect}function X2(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function J2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function eg(e){return U2.has(e.toLowerCase())}function Tt(e){return $2.has(e.toLowerCase())}async function $d(e,t,n,r,i,o){for(let l=0;l<n.length;l++){let a=n[l],s=t[l];if(!s)continue;let c=e.find(h=>h.route.id===s.route.id),d=c!=null&&!$p(c,s)&&(o&&o[s.route.id])!==void 0;if(Vn(a)&&(i||d)){let h=r[l];G(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await Up(a,h,i).then(m=>{m&&(n[l]=m||n[l])})}}}async function Up(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:xe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:xe.error,error:i}}return{type:xe.data,data:e.deferredData.data}}}function Zu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ws(e,t){let n=typeof t=="string"?an(t).search:t.search;if(e[e.length-1].route.index&&Zu(n||""))return e[e.length-1];let r=Ip(e);return r[r.length-1]}function bd(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:l}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Ua(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function tg(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function gi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ng(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function mn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function rg(e,t){try{let n=e.sessionStorage.getItem(Fp);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function ig(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(Fp,JSON.stringify(n))}catch(r){ir(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}const Xl=E.createContext(null),Bp=E.createContext(null),sr=E.createContext(null),Jl=E.createContext(null),sn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Hp=E.createContext(null);function og(e,t){let{relative:n}=t===void 0?{}:t;po()||G(!1);let{basename:r,navigator:i}=E.useContext(sr),{hash:o,pathname:l,search:a}=Yp(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Jt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function po(){return E.useContext(Jl)!=null}function un(){return po()||G(!1),E.useContext(Jl).location}function Wp(e){E.useContext(sr).static||E.useLayoutEffect(e)}function lg(){let{isDataRoute:e}=E.useContext(sn);return e?wg():ag()}function ag(){po()||G(!1);let e=E.useContext(Xl),{basename:t,future:n,navigator:r}=E.useContext(sr),{matches:i}=E.useContext(sn),{pathname:o}=un(),l=JSON.stringify(Gu(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return Wp(()=>{a.current=!0}),E.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Ku(c,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Jt([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,l,o,e])}const sg=E.createContext(null);function ug(e){let t=E.useContext(sn).outlet;return t&&E.createElement(sg.Provider,{value:e},t)}function Xu(){let{matches:e}=E.useContext(sn),t=e[e.length-1];return t?t.params:{}}function Yp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(sr),{matches:i}=E.useContext(sn),{pathname:o}=un(),l=JSON.stringify(Gu(i,r.v7_relativeSplatPath));return E.useMemo(()=>Ku(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function cg(e,t,n,r){po()||G(!1);let{navigator:i}=E.useContext(sr),{matches:o}=E.useContext(sn),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=un(),d;if(t){var h;let N=typeof t=="string"?an(t):t;s==="/"||(h=N.pathname)!=null&&h.startsWith(s)||G(!1),d=N}else d=c;let m=d.pathname||"/",x=s==="/"?m:m.slice(s.length)||"/",S=Mr(e,{pathname:x}),w=mg(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Jt([s,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?s:Jt([s,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&w?E.createElement(Jl.Provider,{value:{location:ro({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ne.Pop}},w):w}function dg(){let e=xg(),t=Rp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const fg=E.createElement(dg,null);class pg extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(sn.Provider,{value:this.props.routeContext},E.createElement(Hp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hg(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Xl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(sn.Provider,{value:t},r)}function mg(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||G(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let h=l[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:m,errors:x}=n,S=h.route.loader&&m[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||S){s=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,h,m)=>{let x,S=!1,w=null,N=null;n&&(x=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||fg,s&&(c<0&&m===0?(Sg("route-fallback",!1),S=!0,N=null):c===m&&(S=!0,N=h.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,m+1)),f=()=>{let g;return x?g=w:S?g=N:h.route.Component?g=E.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=d,E.createElement(hg,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?E.createElement(pg,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Vp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vp||{}),Pl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Pl||{});function gg(e){let t=E.useContext(Xl);return t||G(!1),t}function vg(e){let t=E.useContext(Bp);return t||G(!1),t}function yg(e){let t=E.useContext(sn);return t||G(!1),t}function Qp(e){let t=yg(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function xg(){var e;let t=E.useContext(Hp),n=vg(Pl.UseRouteError),r=Qp(Pl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function wg(){let{router:e}=gg(Vp.UseNavigateStable),t=Qp(Pl.UseNavigateStable),n=E.useRef(!1);return Wp(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ro({fromRouteId:t},o)))},[e,t])}const Ud={};function Sg(e,t,n){!t&&!Ud[e]&&(Ud[e]=!0)}function Cg(e){return ug(e.context)}function Vt(e){G(!1)}function jg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ne.Pop,navigator:o,static:l=!1,future:a}=e;po()&&G(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:o,static:l,future:ro({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=an(r));let{pathname:d="/",search:h="",hash:m="",state:x=null,key:S="default"}=r,w=E.useMemo(()=>{let N=Jr(d,s);return N==null?null:{location:{pathname:N,search:h,hash:m,state:x,key:S},navigationType:i}},[s,d,h,m,x,S,i]);return w==null?null:E.createElement(sr.Provider,{value:c},E.createElement(Jl.Provider,{children:n,value:w}))}new Promise(()=>{});function Ys(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,Ys(r.props.children,o));return}r.type!==Vt&&G(!1),!r.props.index||!r.props.children||G(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Ys(r.props.children,o)),n.push(l)}),n}function kg(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}function Ng(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Mg(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Eg(e,t){return e.button===0&&(!t||t==="_self")&&!Mg(e)}const Lg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function Dg(e,t){return V2({basename:t==null?void 0:t.basename,future:io({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:h2({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Tg(),routes:e,mapRouteProperties:kg,window:t==null?void 0:t.window}).initialize()}function Tg(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=io({},t,{errors:Pg(t.errors)})),t}function Pg(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new qu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let l=new o(i.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const zg=E.createContext({isTransitioning:!1}),_g=E.createContext(new Map),Ig="startTransition",Bd=nm[Ig],Rg="flushSync",Hd=p2[Rg];function Og(e){Bd?Bd(e):e()}function vi(e){Hd?Hd(e):e()}class Ag{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Fg(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=E.useState(n.state),[l,a]=E.useState(),[s,c]=E.useState({isTransitioning:!1}),[d,h]=E.useState(),[m,x]=E.useState(),[S,w]=E.useState(),N=E.useRef(new Map),{v7_startTransition:p}=r||{},f=E.useCallback(j=>{p?Og(j):j()},[p]),g=E.useCallback((j,T)=>{let{deletedFetchers:I,unstable_flushSync:$,unstable_viewTransitionOpts:J}=T;I.forEach(ye=>N.current.delete(ye)),j.fetchers.forEach((ye,et)=>{ye.data!==void 0&&N.current.set(et,ye.data)});let Ce=n.window==null||typeof n.window.document.startViewTransition!="function";if(!J||Ce){$?vi(()=>o(j)):f(()=>o(j));return}if($){vi(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:J.currentLocation,nextLocation:J.nextLocation})});let ye=n.window.document.startViewTransition(()=>{vi(()=>o(j))});ye.finished.finally(()=>{vi(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})})}),vi(()=>x(ye));return}m?(d&&d.resolve(),m.skipTransition(),w({state:j,currentLocation:J.currentLocation,nextLocation:J.nextLocation})):(a(j),c({isTransitioning:!0,flushSync:!1,currentLocation:J.currentLocation,nextLocation:J.nextLocation}))},[n.window,m,d,N,f]);E.useLayoutEffect(()=>n.subscribe(g),[n,g]),E.useEffect(()=>{s.isTransitioning&&!s.flushSync&&h(new Ag)},[s]),E.useEffect(()=>{if(d&&l&&n.window){let j=l,T=d.promise,I=n.window.document.startViewTransition(async()=>{f(()=>o(j)),await T});I.finished.finally(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})}),x(I)}},[f,l,d,n.window]),E.useEffect(()=>{d&&l&&i.location.key===l.location.key&&d.resolve()},[d,m,i.location,l]),E.useEffect(()=>{!s.isTransitioning&&S&&(a(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[s.isTransitioning,S]),E.useEffect(()=>{},[]);let k=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,T,I)=>n.navigate(j,{state:T,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(j,T,I)=>n.navigate(j,{replace:!0,state:T,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[n]),L=n.basename||"/",v=E.useMemo(()=>({router:n,navigator:k,static:!1,basename:L}),[n,k,L]);return E.createElement(E.Fragment,null,E.createElement(Xl.Provider,{value:v},E.createElement(Bp.Provider,{value:i},E.createElement(_g.Provider,{value:N.current},E.createElement(zg.Provider,{value:s},E.createElement(jg,{basename:L,location:i.location,navigationType:i.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?E.createElement($g,{routes:n.routes,future:n.future,state:i}):t))))),null)}function $g(e){let{routes:t,future:n,state:r}=e;return cg(t,void 0,r,n)}const bg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ft=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:c,preventScrollReset:d,unstable_viewTransition:h}=t,m=Ng(t,Lg),{basename:x}=E.useContext(sr),S,w=!1;if(typeof c=="string"&&Ug.test(c)&&(S=c,bg))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),L=Jr(k.pathname,x);k.origin===g.origin&&L!=null?c=L+k.search+k.hash:w=!0}catch{}let N=og(c,{relative:i}),p=Bg(c,{replace:l,state:a,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||p(g)}return E.createElement("a",io({},m,{href:S||N,onClick:w||o?r:f,ref:n,target:s}))});var Wd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wd||(Wd={}));var Yd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yd||(Yd={}));function Bg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=lg(),c=un(),d=Yp(e,{relative:l});return E.useCallback(h=>{if(Eg(h,n)){h.preventDefault();let m=r!==void 0?r:or(c)===or(d);s(e,{replace:m,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[c,s,d,r,i,n,e,o,l,a])}const Lr="/assets/png_4-pi7uzOjc.png",Gp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Lr,alt:"",style:{width:"100%",aspectRatio:"1/1"},className:"img"})}),Hg="/assets/img_2-0-A_q4Fj.png",Kp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Hg,className:"img",alt:""})}),Wg="data:image/svg+xml,%3csvg%20width='166'%20height='46'%20viewBox='0%200%20166%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M163.509%202.85256C164.173%202.40385%20164.677%201.99758%20164.993%201.6572C165.309%201.31683%20165.43%201.04907%20165.35%200.869385C165.269%200.6897%20164.989%200.601641%20164.525%200.610286C164.06%200.618932%20163.421%200.724112%20162.644%200.919758L13.3651%2038.2924C12.5937%2038.4844%2011.6985%2038.7633%2010.7312%2039.1131C9.76383%2039.4629%208.74352%2039.8766%207.72908%2040.3304C6.71465%2040.7841%205.72617%2041.269%204.82066%2041.757C3.91515%2042.245%203.11055%2042.7264%202.45325%2043.1735C1.7896%2043.6222%201.28524%2044.0285%200.969306%2044.3689C0.653372%2044.7093%200.532113%2044.977%200.612489%2045.1567C0.692866%2045.3364%200.973288%2045.4245%201.43761%2045.4158C1.90194%2045.4072%202.54098%2045.302%203.31783%2045.1063L152.597%207.73366C153.368%207.54169%20154.264%207.26277%20155.231%206.91299C156.198%206.56322%20157.219%206.14951%20158.233%205.69573C159.248%205.24196%20160.236%204.75709%20161.142%204.26911C162.047%203.78113%20162.852%203.29969%20163.509%202.85256Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",Yg="data:image/svg+xml,%3csvg%20width='210'%20height='65'%20viewBox='0%200%20210%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M206.862%203.14189C207.731%202.6015%20208.398%202.12247%20208.825%201.73243C209.252%201.34239%20209.43%201.04907%20209.35%200.869386C209.269%200.689701%20208.932%200.627207%20208.356%200.685511C207.781%200.743816%20206.979%200.921765%20205.998%201.20909L17.3582%2056.1883C16.3835%2056.4712%2015.2465%2056.8583%2014.0127%2057.3272C12.7789%2057.7962%2011.4728%2058.3378%2010.1697%2058.9207C8.86656%2059.5036%207.59227%2060.1163%206.42029%2060.7235C5.24832%2061.3306%204.20187%2061.9203%203.34129%2062.4583C2.47269%2062.9987%201.80566%2063.4778%201.37871%2063.8678C0.951766%2064.2578%200.773341%2064.5511%200.853718%2064.7308C0.934094%2064.9105%201.27168%2064.973%201.84702%2064.9147C2.42236%2064.8564%203.22407%2064.6784%204.20587%2064.3911L192.845%209.41195C193.82%209.12904%20194.957%208.74194%20196.191%208.27297C197.425%207.804%20198.731%207.26244%20200.034%206.67954C201.337%206.09664%20202.611%205.48393%20203.783%204.87675C204.955%204.26958%20206.002%203.67995%20206.862%203.14189Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",Vg="data:image/svg+xml,%3csvg%20width='256'%20height='157'%20viewBox='0%200%20256%20157'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M252.625%204.30344C253.587%203.28409%20254.303%202.41526%20254.731%201.74706C255.16%201.07887%20255.292%200.624523%20255.12%200.410247C254.948%200.195973%20254.476%200.226002%20253.731%200.498609C252.985%200.771212%20251.981%201.281%20250.777%201.99855L19.2871%20139.562C18.0906%20140.272%2016.7153%20141.176%2015.2406%20142.222C13.7659%20143.269%2012.221%20144.438%2010.6951%20145.661C9.16906%20146.884%207.69219%20148.138%206.34961%20149.349C5.00703%20150.561%203.82533%20151.706%202.87268%20152.72C1.91018%20153.739%201.19407%20154.608%200.76577%20155.276C0.337465%20155.944%200.205367%20156.399%200.377122%20156.613C0.548876%20156.827%201.02108%20156.797%201.76648%20156.524C2.51187%20156.252%203.51577%20155.742%204.72017%20155.024L236.21%2017.4606C237.407%2016.7514%20238.782%2015.8473%20240.257%2014.8006C241.731%2013.7539%20243.276%2012.5853%20244.802%2011.3621C246.328%2010.139%20247.805%208.88548%20249.148%207.67397C250.49%206.46247%20251.672%205.31693%20252.625%204.30344Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",Qg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:Wg,alt:"",className:"image1"}),u.jsx("img",{src:Yg,alt:"",className:"image2"}),u.jsx("img",{src:Vg,s:!0,alt:"",className:"image3"})]}),Gg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.475%205.11776C263.391%204.04007%20264.052%203.10182%20264.419%202.35713C264.786%201.61245%20264.852%201.07606%20264.614%200.778924C264.376%200.481787%20263.838%200.429777%20263.031%200.625893C262.224%200.822009%20261.165%201.26238%20259.913%201.92158L19.3674%20128.187C18.1236%20128.838%2016.7109%20129.695%2015.2107%20130.71C13.7105%20131.725%2012.1524%20132.877%2010.6265%20134.1C9.10046%20135.323%207.63674%20136.593%206.3197%20137.836C5.00267%20139.08%203.85839%20140.272%202.9529%20141.344C2.03717%20142.422%201.37671%20143.36%201.00972%20144.105C0.642721%20144.85%200.576384%20145.386%200.814556%20145.683C1.05273%20145.98%201.5907%20146.032%202.3974%20145.836C3.20411%20145.64%204.26365%20145.2%205.51482%20144.541L246.061%2018.2749C247.305%2017.6245%20248.717%2016.7672%20250.218%2015.7524C251.718%2014.7375%20253.276%2013.5853%20254.802%2012.3621C256.328%2011.139%20257.792%209.86907%20259.109%208.6257C260.426%207.38233%20261.57%206.19009%20262.475%205.11776Z'%20fill='white'/%3e%3c/svg%3e",Kg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.559%205.11776C263.474%204.04007%20264.135%203.10182%20264.502%202.35713C264.869%201.61245%20264.935%201.07606%20264.697%200.778924C264.459%200.481787%20263.921%200.429777%20263.114%200.625893C262.307%200.822009%20261.248%201.26238%20259.997%201.92158L19.4506%20128.187C18.2069%20128.838%2016.7942%20129.695%2015.294%20130.71C13.7937%20131.725%2012.2357%20132.877%2010.7097%20134.1C9.18371%20135.323%207.71999%20136.593%206.40295%20137.836C5.08592%20139.08%203.94164%20140.272%203.03615%20141.344C2.12042%20142.422%201.45996%20143.36%201.09297%20144.105C0.725973%20144.85%200.659636%20145.386%200.897808%20145.683C1.13598%20145.98%201.67395%20146.032%202.48065%20145.836C3.28736%20145.64%204.3469%20145.2%205.59807%20144.541L246.144%2018.2749C247.388%2017.6245%20248.801%2016.7672%20250.301%2015.7524C251.801%2014.7375%20253.359%2013.5853%20254.885%2012.3621C256.411%2011.139%20257.875%209.86907%20259.192%208.6257C260.509%207.38233%20261.653%206.19009%20262.559%205.11776Z'%20fill='white'/%3e%3c/svg%3e",qg="data:image/svg+xml,%3csvg%20width='242'%20height='127'%20viewBox='0%200%20242%20127'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M239.21%204.51512C240.014%203.52722%20240.585%202.66023%20240.892%201.96418C241.198%201.26813%20241.233%200.756786%20240.995%200.459649C240.757%200.162512%20240.25%200.0854627%20239.504%200.232943C238.758%200.380424%20237.787%200.749522%20236.648%201.31894L17.6146%20110.341C16.482%20110.902%2015.2015%20111.654%2013.8469%20112.552C12.4923%20113.45%2011.0905%20114.477%209.72224%20115.574C8.35402%20116.67%207.0465%20117.815%205.8751%20118.942C4.7037%20120.068%203.69163%20121.155%202.89722%20122.138C2.09351%20123.126%201.52199%20123.993%201.21567%20124.689C0.909346%20125.385%200.87425%20125.896%201.11242%20126.193C1.35059%20126.49%201.85732%20126.567%202.60335%20126.42C3.34938%20126.273%204.31999%20125.903%205.45915%20125.334L224.493%2016.3119C225.625%2015.7506%20226.906%2014.9992%20228.26%2014.1011C229.615%2013.2031%20231.017%2012.176%20232.385%2011.0793C233.753%209.98262%20235.061%208.83794%20236.232%207.71131C237.404%206.58467%20238.416%205.49839%20239.21%204.51512Z'%20fill='white'/%3e%3c/svg%3e",Zg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:Gg,alt:"",className:"style1"}),u.jsx("img",{src:Kg,alt:"",className:"style2"}),u.jsx("img",{src:qg,alt:"",className:"style3"})]}),Xg="data:image/svg+xml,%3csvg%20width='343'%20height='101'%20viewBox='0%200%20343%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M337.756%202.82053C339.3%202.19061%20340.513%201.65685%20341.327%201.25004C342.14%200.843229%20342.537%200.571418%20342.496%200.450288C342.454%200.329157%20341.973%200.361105%20341.082%200.544288C340.192%200.727471%20338.908%201.05826%20337.305%201.51758L29.4539%2089.5925C27.8637%2090.0466%2025.9836%2090.621%2023.9221%2091.2825C21.8605%2091.944%2019.6583%2092.6795%2017.4424%2093.4466C15.2266%2094.2137%2013.041%2094.9971%2011.0117%2095.7518C8.98235%2096.5064%207.14954%2097.2174%205.61891%2097.8435C4.07519%2098.4735%202.86157%2099.0072%202.04811%2099.414C1.23466%2099.8208%200.837454%20100.093%200.879386%20100.214C0.921318%20100.335%201.40156%20100.303%202.29243%20100.12C3.1833%2099.9366%204.46718%2099.6058%206.06996%2099.1465L313.921%2011.0716C315.511%2010.6174%20317.391%2010.043%20319.453%209.38155C321.514%208.72006%20323.717%207.98456%20325.932%207.21749C328.148%206.45042%20330.334%205.66696%20332.363%204.9123C334.393%204.15763%20336.225%203.44671%20337.756%202.82053Z'%20fill='purple'/%3e%3c/svg%3e",Jg="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.9999%2034H17.9999C17.4759%2034%2017.0399%2034.405%2017.0019%2034.929C16.9829%2035.19%2016.5929%2041.361%2020.6999%2045.77C23.3129%2048.577%2027.1149%2050%2031.9999%2050C36.8849%2050%2040.6869%2048.577%2043.2999%2045.77C47.4059%2041.36%2047.0159%2035.189%2046.9969%2034.929C46.9599%2034.405%2046.5239%2034%2045.9999%2034ZM41.8239%2044.42C39.6039%2046.795%2036.2999%2048%2031.9999%2048C27.7009%2048%2024.3949%2046.795%2022.1759%2044.42C19.5279%2041.586%2019.0639%2037.745%2018.9979%2036H45.0029C44.9369%2037.745%2044.4729%2041.585%2041.8239%2044.42Z'%20fill='purple'/%3e%3cpath%20d='M18.394%2028.919L25.394%2025.919C25.762%2025.762%2026%2025.4%2026%2025C26%2024.6%2025.762%2024.238%2025.394%2024.081L18.394%2021.081L17.606%2022.919L22.461%2025L17.606%2027.081L18.394%2028.919Z'%20fill='purple'/%3e%3cpath%20d='M38.606%2025.919L45.606%2028.919L46.393%2027.081L41.539%2025L46.393%2022.919L45.606%2021.081L38.606%2024.081C38.238%2024.238%2038%2024.6%2038%2025C38%2025.4%2038.238%2025.762%2038.606%2025.919Z'%20fill='purple'/%3e%3cpath%20d='M32%204C16.561%204%204%2016.561%204%2032C4%2047.439%2016.561%2060%2032%2060C47.439%2060%2060%2047.439%2060%2032C60%2016.561%2047.439%204%2032%204ZM32%2058C17.664%2058%206%2046.336%206%2032C6%2017.664%2017.664%206%2032%206C46.337%206%2058%2017.664%2058%2032C58%2046.336%2046.337%2058%2032%2058Z'%20fill='purple'/%3e%3c/svg%3e",ev=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center styleText",children:u.jsxs("h2",{children:[u.jsx("span",{style:{display:"block",color:"purple"},children:"TOUJOURS SATISFAIT !"}),"Acheter vos produits chez nous sans vous deplacer et recever les en toute sécurité dans le plus bref delai !"]})}),u.jsx("div",{children:u.jsx("img",{src:Jg,className:"styleSmile",alt:""})}),u.jsx("div",{children:u.jsx("img",{src:Xg,alt:"",className:"styleLine"})})]});var it=function(){return it=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},it.apply(this,arguments)};function zl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var tv=function(t,n,r,i){var o=r?r.call(i,t,n):void 0;if(o!==void 0)return!!o;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var l=Object.keys(t),a=Object.keys(n);if(l.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(n),c=0;c<l.length;c++){var d=l[c];if(!s(d))return!1;var h=t[d],m=n[d];if(o=r?r.call(i,h,m,d):void 0,o===!1||o===void 0&&h!==m)return!1}return!0},de="-ms-",Fi="-moz-",ie="-webkit-",qp="comm",ea="rule",Ju="decl",nv="@import",Zp="@keyframes",rv="@layer",Xp=Math.abs,ec=String.fromCharCode,Vs=Object.assign;function iv(e,t){return Oe(e,0)^45?(((t<<2^Oe(e,0))<<2^Oe(e,1))<<2^Oe(e,2))<<2^Oe(e,3):0}function Jp(e){return e.trim()}function Gt(e,t){return(e=t.exec(e))?e[0]:e}function Q(e,t,n){return e.replace(t,n)}function nl(e,t,n){return e.indexOf(t,n)}function Oe(e,t){return e.charCodeAt(t)|0}function Wr(e,t,n){return e.slice(t,n)}function Ut(e){return e.length}function eh(e){return e.length}function ki(e,t){return t.push(e),e}function ov(e,t){return e.map(t).join("")}function Vd(e,t){return e.filter(function(n){return!Gt(n,t)})}var ta=1,Yr=1,th=0,Mt=0,Ee=0,ei="";function na(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ta,column:Yr,length:l,return:"",siblings:a}}function gn(e,t){return Vs(na("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function pr(e){for(;e.root;)e=gn(e.root,{children:[e]});ki(e,e.siblings)}function lv(){return Ee}function av(){return Ee=Mt>0?Oe(ei,--Mt):0,Yr--,Ee===10&&(Yr=1,ta--),Ee}function It(){return Ee=Mt<th?Oe(ei,Mt++):0,Yr++,Ee===10&&(Yr=1,ta++),Ee}function Zn(){return Oe(ei,Mt)}function rl(){return Mt}function ra(e,t){return Wr(ei,e,t)}function Qs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sv(e){return ta=Yr=1,th=Ut(ei=e),Mt=0,[]}function uv(e){return ei="",e}function Ba(e){return Jp(ra(Mt-1,Gs(e===91?e+2:e===40?e+1:e)))}function cv(e){for(;(Ee=Zn())&&Ee<33;)It();return Qs(e)>2||Qs(Ee)>3?"":" "}function dv(e,t){for(;--t&&It()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return ra(e,rl()+(t<6&&Zn()==32&&It()==32))}function Gs(e){for(;It();)switch(Ee){case e:return Mt;case 34:case 39:e!==34&&e!==39&&Gs(Ee);break;case 40:e===41&&Gs(e);break;case 92:It();break}return Mt}function fv(e,t){for(;It()&&e+Ee!==57;)if(e+Ee===84&&Zn()===47)break;return"/*"+ra(t,Mt-1)+"*"+ec(e===47?e:It())}function pv(e){for(;!Qs(Zn());)It();return ra(e,Mt)}function hv(e){return uv(il("",null,null,null,[""],e=sv(e),0,[0],e))}function il(e,t,n,r,i,o,l,a,s){for(var c=0,d=0,h=l,m=0,x=0,S=0,w=1,N=1,p=1,f=0,g="",k=i,L=o,v=r,j=g;N;)switch(S=f,f=It()){case 40:if(S!=108&&Oe(j,h-1)==58){nl(j+=Q(Ba(f),"&","&\f"),"&\f",Xp(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:j+=Ba(f);break;case 9:case 10:case 13:case 32:j+=cv(S);break;case 92:j+=dv(rl()-1,7);continue;case 47:switch(Zn()){case 42:case 47:ki(mv(fv(It(),rl()),t,n,s),s);break;default:j+="/"}break;case 123*w:a[c++]=Ut(j)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:N=0;case 59+d:p==-1&&(j=Q(j,/\f/g,"")),x>0&&Ut(j)-h&&ki(x>32?Gd(j+";",r,n,h-1,s):Gd(Q(j," ","")+";",r,n,h-2,s),s);break;case 59:j+=";";default:if(ki(v=Qd(j,t,n,c,d,i,a,g,k=[],L=[],h,o),o),f===123)if(d===0)il(j,t,v,v,k,o,h,a,L);else switch(m===99&&Oe(j,3)===110?100:m){case 100:case 108:case 109:case 115:il(e,v,v,r&&ki(Qd(e,v,v,0,0,i,a,g,i,k=[],h,L),L),i,L,h,a,r?k:L);break;default:il(j,v,v,v,[""],L,0,a,L)}}c=d=x=0,w=p=1,g=j="",h=l;break;case 58:h=1+Ut(j),x=S;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&av()==125)continue}switch(j+=ec(f),f*w){case 38:p=d>0?1:(j+="\f",-1);break;case 44:a[c++]=(Ut(j)-1)*p,p=1;break;case 64:Zn()===45&&(j+=Ba(It())),m=Zn(),d=h=Ut(g=j+=pv(rl())),f++;break;case 45:S===45&&Ut(j)==2&&(w=0)}}return o}function Qd(e,t,n,r,i,o,l,a,s,c,d,h){for(var m=i-1,x=i===0?o:[""],S=eh(x),w=0,N=0,p=0;w<r;++w)for(var f=0,g=Wr(e,m+1,m=Xp(N=l[w])),k=e;f<S;++f)(k=Jp(N>0?x[f]+" "+g:Q(g,/&\f/g,x[f])))&&(s[p++]=k);return na(e,t,n,i===0?ea:a,s,c,d,h)}function mv(e,t,n,r){return na(e,t,n,qp,ec(lv()),Wr(e,2,-2),0,r)}function Gd(e,t,n,r,i){return na(e,t,n,Ju,Wr(e,0,r),Wr(e,r+1,-1),r,i)}function nh(e,t,n){switch(iv(e,t)){case 5103:return ie+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ie+e+e;case 4789:return Fi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ie+e+Fi+e+de+e+e;case 5936:switch(Oe(e,t+11)){case 114:return ie+e+de+Q(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ie+e+de+Q(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ie+e+de+Q(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ie+e+de+e+e;case 6165:return ie+e+de+"flex-"+e+e;case 5187:return ie+e+Q(e,/(\w+).+(:[^]+)/,ie+"box-$1$2"+de+"flex-$1$2")+e;case 5443:return ie+e+de+"flex-item-"+Q(e,/flex-|-self/g,"")+(Gt(e,/flex-|baseline/)?"":de+"grid-row-"+Q(e,/flex-|-self/g,""))+e;case 4675:return ie+e+de+"flex-line-pack"+Q(e,/align-content|flex-|-self/g,"")+e;case 5548:return ie+e+de+Q(e,"shrink","negative")+e;case 5292:return ie+e+de+Q(e,"basis","preferred-size")+e;case 6060:return ie+"box-"+Q(e,"-grow","")+ie+e+de+Q(e,"grow","positive")+e;case 4554:return ie+Q(e,/([^-])(transform)/g,"$1"+ie+"$2")+e;case 6187:return Q(Q(Q(e,/(zoom-|grab)/,ie+"$1"),/(image-set)/,ie+"$1"),e,"")+e;case 5495:case 3959:return Q(e,/(image-set\([^]*)/,ie+"$1$`$1");case 4968:return Q(Q(e,/(.+:)(flex-)?(.*)/,ie+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ie+e+e;case 4200:if(!Gt(e,/flex-|baseline/))return de+"grid-column-align"+Wr(e,t)+e;break;case 2592:case 3360:return de+Q(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Gt(r.props,/grid-\w+-end/)})?~nl(e+(n=n[t].value),"span",0)?e:de+Q(e,"-start","")+e+de+"grid-row-span:"+(~nl(n,"span",0)?Gt(n,/\d+/):+Gt(n,/\d+/)-+Gt(e,/\d+/))+";":de+Q(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Gt(r.props,/grid-\w+-start/)})?e:de+Q(Q(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Q(e,/(.+)-inline(.+)/,ie+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ut(e)-1-t>6)switch(Oe(e,t+1)){case 109:if(Oe(e,t+4)!==45)break;case 102:return Q(e,/(.+:)(.+)-([^]+)/,"$1"+ie+"$2-$3$1"+Fi+(Oe(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~nl(e,"stretch",0)?nh(Q(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Q(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,c){return de+i+":"+o+c+(l?de+i+"-span:"+(a?s:+s-+o)+c:"")+e});case 4949:if(Oe(e,t+6)===121)return Q(e,":",":"+ie)+e;break;case 6444:switch(Oe(e,Oe(e,14)===45?18:11)){case 120:return Q(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ie+(Oe(e,14)===45?"inline-":"")+"box$3$1"+ie+"$2$3$1"+de+"$2box$3")+e;case 100:return Q(e,":",":"+de)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Q(e,"scroll-","scroll-snap-")+e}return e}function _l(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function gv(e,t,n,r){switch(e.type){case rv:if(e.children.length)break;case nv:case Ju:return e.return=e.return||e.value;case qp:return"";case Zp:return e.return=e.value+"{"+_l(e.children,r)+"}";case ea:if(!Ut(e.value=e.props.join(",")))return""}return Ut(n=_l(e.children,r))?e.return=e.value+"{"+n+"}":""}function vv(e){var t=eh(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function yv(e){return function(t){t.root||(t=t.return)&&e(t)}}function xv(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ju:e.return=nh(e.value,e.length,n);return;case Zp:return _l([gn(e,{value:Q(e.value,"@","@"+ie)})],r);case ea:if(e.length)return ov(n=e.props,function(i){switch(Gt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pr(gn(e,{props:[Q(i,/:(read-\w+)/,":"+Fi+"$1")]})),pr(gn(e,{props:[i]})),Vs(e,{props:Vd(n,r)});break;case"::placeholder":pr(gn(e,{props:[Q(i,/:(plac\w+)/,":"+ie+"input-$1")]})),pr(gn(e,{props:[Q(i,/:(plac\w+)/,":"+Fi+"$1")]})),pr(gn(e,{props:[Q(i,/:(plac\w+)/,de+"input-$1")]})),pr(gn(e,{props:[i]})),Vs(e,{props:Vd(n,r)});break}return""})}}var wv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ct={},Vr=typeof process<"u"&&ct!==void 0&&(ct.REACT_APP_SC_ATTR||ct.SC_ATTR)||"data-styled",rh="active",ih="data-styled-version",ia="6.1.8",tc=`/*!sc*/
`,nc=typeof window<"u"&&"HTMLElement"in window,Sv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ct!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ct.REACT_APP_SC_DISABLE_SPEEDY!==""?ct.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ct.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ct!==void 0&&ct.SC_DISABLE_SPEEDY!==void 0&&ct.SC_DISABLE_SPEEDY!==""&&ct.SC_DISABLE_SPEEDY!=="false"&&ct.SC_DISABLE_SPEEDY),oa=Object.freeze([]),Qr=Object.freeze({});function Cv(e,t,n){return n===void 0&&(n=Qr),e.theme!==n.theme&&e.theme||t||n.theme}var oh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kv=/(^-|-$)/g;function Kd(e){return e.replace(jv,"-").replace(kv,"")}var Nv=/(a)(d)/gi,Ao=52,qd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ks(e){var t,n="";for(t=Math.abs(e);t>Ao;t=t/Ao|0)n=qd(t%Ao)+n;return(qd(t%Ao)+n).replace(Nv,"$1-$2")}var Ha,lh=5381,Dr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ah=function(e){return Dr(lh,e)};function Mv(e){return Ks(ah(e)>>>0)}function Ev(e){return e.displayName||e.name||"Component"}function Wa(e){return typeof e=="string"&&!0}var sh=typeof Symbol=="function"&&Symbol.for,uh=sh?Symbol.for("react.memo"):60115,Lv=sh?Symbol.for("react.forward_ref"):60112,Dv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ch={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Pv=((Ha={})[Lv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ha[uh]=ch,Ha);function Zd(e){return("type"in(t=e)&&t.type.$$typeof)===uh?ch:"$$typeof"in e?Pv[e.$$typeof]:Dv;var t}var zv=Object.defineProperty,_v=Object.getOwnPropertyNames,Xd=Object.getOwnPropertySymbols,Iv=Object.getOwnPropertyDescriptor,Rv=Object.getPrototypeOf,Jd=Object.prototype;function dh(e,t,n){if(typeof t!="string"){if(Jd){var r=Rv(t);r&&r!==Jd&&dh(e,r,n)}var i=_v(t);Xd&&(i=i.concat(Xd(t)));for(var o=Zd(e),l=Zd(t),a=0;a<i.length;++a){var s=i[a];if(!(s in Tv||n&&n[s]||l&&s in l||o&&s in o)){var c=Iv(t,s);try{zv(e,s,c)}catch{}}}}return e}function Gr(e){return typeof e=="function"}function rc(e){return typeof e=="object"&&"styledComponentId"in e}function Gn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ef(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function oo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function qs(e,t,n){if(n===void 0&&(n=!1),!n&&!oo(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=qs(e[r],t[r]);else if(oo(t))for(var r in t)e[r]=qs(e[r],t[r]);return e}function ic(e,t){Object.defineProperty(e,"toString",{value:t})}function ho(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ov=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw ho(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(tc);return n},e}(),ol=new Map,Il=new Map,ll=1,Fo=function(e){if(ol.has(e))return ol.get(e);for(;Il.has(ll);)ll++;var t=ll++;return ol.set(e,t),Il.set(t,e),t},Av=function(e,t){ll=t+1,ol.set(e,t),Il.set(t,e)},Fv="style[".concat(Vr,"][").concat(ih,'="').concat(ia,'"]'),$v=new RegExp("^".concat(Vr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),bv=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},Uv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(tc),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match($v);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(Av(d,c),bv(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function Bv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Vr,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Vr,rh),r.setAttribute(ih,ia);var l=Bv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},Hv=function(){function e(t){this.element=fh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw ho(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Wv=function(){function e(t){this.element=fh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Yv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),tf=nc,Vv={isServer:!nc,useCSSOMInjection:!Sv},ph=function(){function e(t,n,r){t===void 0&&(t=Qr),n===void 0&&(n={});var i=this;this.options=it(it({},Vv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&nc&&tf&&(tf=!1,function(o){for(var l=document.querySelectorAll(Fv),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(Vr)!==rh&&(Uv(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),ic(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",c=function(h){var m=function(p){return Il.get(p)}(h);if(m===void 0)return"continue";var x=o.names.get(m),S=l.getGroup(h);if(x===void 0||S.length===0)return"continue";var w="".concat(Vr,".g").concat(h,'[id="').concat(m,'"]'),N="";x!==void 0&&x.forEach(function(p){p.length>0&&(N+="".concat(p,","))}),s+="".concat(S).concat(w,'{content:"').concat(N,'"}').concat(tc)},d=0;d<a;d++)c(d);return s}(i)})}return e.registerId=function(t){return Fo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(it(it({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new Yv(i):r?new Hv(i):new Wv(i)}(this.options),new Ov(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Fo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Fo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Fo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Qv=/&/g,Gv=/^\s*\/\/.*$/gm;function hh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hh(n.children,t)),n})}function Kv(e){var t,n,r,i=e===void 0?Qr:e,o=i.options,l=o===void 0?Qr:o,a=i.plugins,s=a===void 0?oa:a,c=function(m,x,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===ea&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Qv,n).replace(r,c))}),l.prefix&&d.push(xv),d.push(gv);var h=function(m,x,S,w){x===void 0&&(x=""),S===void 0&&(S=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var N=m.replace(Gv,""),p=hv(S||x?"".concat(S," ").concat(x," { ").concat(N," }"):N);l.namespace&&(p=hh(p,l.namespace));var f=[];return _l(p,vv(d.concat(yv(function(g){return f.push(g)})))),f};return h.hash=s.length?s.reduce(function(m,x){return x.name||ho(15),Dr(m,x.name)},lh).toString():"",h}var qv=new ph,Zs=Kv(),mh=qe.createContext({shouldForwardProp:void 0,styleSheet:qv,stylis:Zs});mh.Consumer;qe.createContext(void 0);function nf(){return E.useContext(mh)}var Zv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Zs);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ic(this,function(){throw ho(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Zs),this.name+t.hash},e}(),Xv=function(e){return e>="A"&&e<="Z"};function rf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Xv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var gh=function(e){return e==null||e===!1||e===""},vh=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!gh(o)&&(Array.isArray(o)&&o.isCss||Gr(o)?r.push("".concat(rf(i),":"),o,";"):oo(o)?r.push.apply(r,zl(zl(["".concat(i," {")],vh(o),!1),["}"],!1)):r.push("".concat(rf(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in wv||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Xn(e,t,n,r){if(gh(e))return[];if(rc(e))return[".".concat(e.styledComponentId)];if(Gr(e)){if(!Gr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Xn(i,t,n,r)}var o;return e instanceof Zv?n?(e.inject(n,r),[e.getName(r)]):[e]:oo(e)?vh(e):Array.isArray(e)?Array.prototype.concat.apply(oa,e.map(function(l){return Xn(l,t,n,r)})):[e.toString()]}function Jv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gr(n)&&!rc(n))return!1}return!0}var ey=ah(ia),ty=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Jv(t),this.componentId=n,this.baseHash=Dr(ey,n),this.baseStyle=r,ph.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gn(i,this.staticRulesId);else{var o=ef(Xn(this.rules,t,n,r)),l=Ks(Dr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Gn(i,l),this.staticRulesId=l}else{for(var s=Dr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var m=ef(Xn(h,t,n,r));s=Dr(s,m+d),c+=m}}if(c){var x=Ks(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=Gn(i,x)}}return i},e}(),yh=qe.createContext(void 0);yh.Consumer;var Ya={};function ny(e,t,n){var r=rc(e),i=e,o=!Wa(e),l=t.attrs,a=l===void 0?oa:l,s=t.componentId,c=s===void 0?function(k,L){var v=typeof k!="string"?"sc":Kd(k);Ya[v]=(Ya[v]||0)+1;var j="".concat(v,"-").concat(Mv(ia+v+Ya[v]));return L?"".concat(L,"-").concat(j):j}(t.displayName,t.parentComponentId):s,d=t.displayName,h=d===void 0?function(k){return Wa(k)?"styled.".concat(k):"Styled(".concat(Ev(k),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Kd(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;S=function(k,L){return w(k,L)&&N(k,L)}}else S=w}var p=new ty(n,m,r?i.componentStyle:void 0);function f(k,L){return function(v,j,T){var I=v.attrs,$=v.componentStyle,J=v.defaultProps,Ce=v.foldedComponentIds,ye=v.styledComponentId,et=v.target,cn=qe.useContext(yh),Ot=nf(),le=v.shouldForwardProp||Ot.shouldForwardProp,z=Cv(j,cn,J)||Qr,A=function(He,ke,ut){for(var An,Yt=it(it({},ke),{className:void 0,theme:ut}),ni=0;ni<He.length;ni+=1){var Pe=Gr(An=He[ni])?An(Yt):An;for(var tt in Pe)Yt[tt]=tt==="className"?Gn(Yt[tt],Pe[tt]):tt==="style"?it(it({},Yt[tt]),Pe[tt]):Pe[tt]}return ke.className&&(Yt.className=Gn(Yt.className,ke.className)),Yt}(I,j,z),U=A.as||et,q={};for(var ee in A)A[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&A.theme===z||(ee==="forwardedAs"?q.as=A.forwardedAs:le&&!le(ee,U)||(q[ee]=A[ee]));var st=function(He,ke){var ut=nf(),An=He.generateAndInjectStyles(ke,ut.styleSheet,ut.stylis);return An}($,A),je=Gn(Ce,ye);return st&&(je+=" "+st),A.className&&(je+=" "+A.className),q[Wa(U)&&!oh.has(U)?"class":"className"]=je,q.ref=T,E.createElement(U,q)}(g,k,L)}f.displayName=h;var g=qe.forwardRef(f);return g.attrs=x,g.componentStyle=p,g.displayName=h,g.shouldForwardProp=S,g.foldedComponentIds=r?Gn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=m,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(L){for(var v=[],j=1;j<arguments.length;j++)v[j-1]=arguments[j];for(var T=0,I=v;T<I.length;T++)qs(L,I[T],!0);return L}({},i.defaultProps,k):k}}),ic(g,function(){return".".concat(g.styledComponentId)}),o&&dh(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function of(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var lf=function(e){return Object.assign(e,{isCss:!0})};function ry(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gr(e)||oo(e))return lf(Xn(of(oa,zl([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Xn(r):lf(Xn(of(r,t)))}function Xs(e,t,n){if(n===void 0&&(n=Qr),!t)throw ho(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,ry.apply(void 0,zl([i],o,!1)))};return r.attrs=function(i){return Xs(e,t,it(it({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Xs(e,t,it(it({},n),i))},r}var xh=function(e){return Xs(ny,e)},re=xh;oh.forEach(function(e){re[e]=xh(e)});const iy=re(Gp)`
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

`,oy=re(Gp)`
.img{
    position:absolute;
    top:5rem;
    left:3.7rem;
    display:block;
}
    

`,ly=re(Qg)`

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
`,ay=re(ev)`

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


`,sy=re(Zg)`


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
    `,uy=re(Kp)`

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
`,cy=re(Kp)`

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
`,dy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsxs("div",{className:"first-container",children:[u.jsx(sy,{}),u.jsx(uy,{})]})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(ay,{})})}),u.jsx("div",{className:"third",children:u.jsxs("div",{className:"third-container",children:[u.jsx(iy,{}),u.jsx(ly,{})]})})]}),fy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("h2",{children:u.jsx("span",{children:"chez Ardi"})}),u.jsx("h3",{children:"Commandez vos produits et soyez livrer où que vous soyer en RDC"}),u.jsx("div",{})]}),te={MAIN:"white",SECOND:"#F9FF00",THIRD:"grey",FOURTH:"#DADAD6",FIFTH:"#636363",SIXTH:"#b1b8c2"},Y={MAIN:"black",SECOND:"black",THIRD:"black",FOURTH:"black",FIFTH:"white"},py=re(fy)`
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
    background-color:${te.FIFTH};

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
    margin-top:12%;
    margin-left:5%;
    width:70%;
    font-size:20px;
    text-align:center;
    letter-spacing:1px;
    color:${Y.FOURTH};
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

`,hy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"container-first",children:u.jsx(py,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"container-second",children:u.jsx(cy,{})})})]}),my="data:image/svg+xml,%3csvg%20width='240'%20height='201'%20viewBox='0%200%20240%20201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_184_251)'%3e%3cpath%20d='M209.83%2083.5349L52.22%2038.9572C47.8199%2037.7127%2043.2414%2037.787%2039.4918%2039.1637C35.7422%2040.5404%2033.1286%2043.1068%2032.2259%2046.2982L20.3139%2088.415C19.4112%2091.6065%2020.2935%2095.1616%2022.7665%2098.2983C25.2396%20101.435%2029.1009%20103.896%2033.501%20105.141L114.795%20128.133L137.936%20147.675L130.307%20132.521L191.111%20149.718C195.511%20150.963%20200.09%20150.889%20203.84%20149.512C207.589%20148.135%20210.203%20145.569%20211.105%20142.377L223.017%20100.261C223.92%2097.0692%20223.038%2093.5141%20220.565%2090.3774C218.092%2087.2407%20214.23%2084.7794%20209.83%2083.5349Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.8166%2050.9906C47.5827%2064.2224%2043.3749%2094.9374%2045.1998%2095.4536C47.0248%2095.9698%2078.2222%2065.8055%2080.296%2066.3921C82.3698%2066.9786%2078.9617%2099.9342%2090.8239%20108.358C93.8019%2097.8285%20103.606%2072.9849%20116.03%2066.7518'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M149.102%20105.347C143.623%20114.584%20132.052%20120.018%20123.259%20117.531C114.466%20115.044%20111.852%20105.598%20117.331%2096.3608C122.81%2087.1239%20134.381%2081.6892%20143.174%2084.1762C151.967%2086.6632%20154.581%2096.1098%20149.102%20105.347Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M198.873%20119.424C193.394%20128.661%20181.823%20134.095%20173.03%20131.608C164.237%20129.121%20161.623%20119.675%20167.102%20110.438C172.582%20101.201%20184.153%2095.7664%20192.946%2098.2534C201.739%20100.74%20204.353%20110.187%20198.873%20119.424Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_184_251'%3e%3crect%20width='206.897'%20height='150.065'%20fill='purple'%20transform='translate(40.8413)%20rotate(15.7927)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",gy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("p",{children:"Une nouvelle expérience ! Nous livrons partout dans la ville de Kinshasa"})}),u.jsx("div",{className:"style3",children:u.jsx("img",{src:my,alt:""})})]}),vy="/assets/dots1-wnWSIBb8.svg",yy="/assets/dots2-WthBLMDD.svg",xy="/assets/dots3-BvKBFpC0.svg",wy="/assets/dots4-jerWoYTl.svg",Sy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx(oy,{}),u.jsx("img",{src:vy,className:"style2",alt:""}),u.jsx("img",{src:yy,className:"style3",alt:""}),u.jsx("img",{src:xy,className:"style4",alt:""}),u.jsx("img",{src:wy,className:"style5",alt:""})]}),Cy="/assets/png_10-OhKyeJ3r.png",jy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Cy,alt:"",className:"img",style:{width:"100%",height:"100%"}})}),ky="/assets/dots5-wrrVGBo3.svg",Ny="/assets/dots6-87oX7T93.svg",My="/assets/dots7-W2CVIBUv.svg",Ey="/assets/dots8-mWlib7R3.svg",Ly=re(jy)`
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
`,Dy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:ky,className:"style2",alt:""}),u.jsx("img",{src:Ny,className:"style3",alt:""}),u.jsx("img",{src:Ey,className:"style5",alt:""}),u.jsx("img",{src:My,className:"style4",alt:""}),u.jsx(Ly,{})]}),Ty=re(Sy)`

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
`,Py=re(Dy)`

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

`,zy=re(gy)`
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
`,_y=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"first-container",children:u.jsx(Ty,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(zy,{})})}),u.jsx("div",{className:"third",children:u.jsx("div",{className:"third-container",children:u.jsx(Py,{})})})]}),Iy=re(dy)`
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

`,Ry=re(hy)`
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
`,Oy=re(_y)`

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
`,Ay=({className:e})=>u.jsx("div",{className:e,children:u.jsxs("div",{className:"phoneStyle",children:[u.jsx("div",{className:"img"}),u.jsx("div",{className:"text",children:"Livraison gratuite à partir de 50$"}),u.jsx("div",{className:"forColor"})]})}),Fy="/assets/forDesign1-wUKU69GG.jpg",$y=re(Ay)`

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

        grid-template-columns: 100%;
        grid-template-rows:100%;
        justify-content: center;
        width:100%;
        gap:0px;



        .phoneStyle>div:nth-child(1){
            height:100%;
            width:100%;
            background-image:url(${Fy});
            background-position:0 0;
            background-repeat:no-repeat;
            background-size:cover;

        }
        .phoneStyle>div:nth-child(2){
            position: absolute;
            bottom:88px;
            right: 0;
            font-size:16px;
            line-height:20px;
            font-weight:600;
            letter-spacing:1.5px;
            height:90px;
            padding:0 10px;
            max-width:150px;
            width:30%;
            display: flex;
            align-items:center;
            background-color:#00CEFD;
        }
        .forColor{
            position: absolute;
            left:0;
            bottom:0;
            height:40px;
            width:60px;
            background-color:#00CEFD;
        }
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


`,wh=()=>{const[e,t]=E.useState(0),n=[u.jsx(Oy,{}),u.jsx(Ry,{}),u.jsx(Iy,{})],r=()=>{t(i=>(i+1)%n.length)};return E.useEffect(()=>{const i=setInterval(()=>{r()},5e3);return()=>{clearInterval(i)}},[]),u.jsxs("div",{className:"section1-1",children:[u.jsx("div",{className:"box-section1-1",children:n[e]}),u.jsx($y,{})]})},bt="/assets/png_1-psFfvH_j.png",Ni="/assets/png_3-ilcu5yhJ.png",$o="/assets/png_5-PB77ItoP.png",Mi="/assets/png_6-IaEkgori.png",b="/assets/png_9-HkEXkKWn.png",by=({className:e,children:t})=>u.jsx("div",{children:u.jsx("button",{className:`btn btn-outline-success  form-control ${e}`,type:"submit",children:t})}),Uy="data:image/svg+xml,%3csvg%20width='40'%20height='41'%20viewBox='0%200%2040%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_99_272)'%3e%3cpath%20d='M30.4126%2029.25H16.9126C16.0888%2029.2516%2015.2875%2028.9819%2014.6323%2028.4826C13.9771%2027.9833%2013.5045%2027.2822%2013.2876%2026.4875L10.0001%2014.575C9.94953%2014.3896%209.9424%2014.195%209.97926%2014.0064C10.0161%2013.8178%2010.096%2013.6402%2010.2126%2013.4875C10.3341%2013.3294%2010.4917%2013.2026%2010.6722%2013.1178C10.8527%2013.033%2011.0508%2012.9926%2011.2501%2013H35.0001C35.1837%2012.9997%2035.3652%2013.0399%2035.5315%2013.1177C35.6979%2013.1954%2035.8451%2013.3089%2035.9626%2013.45C36.0786%2013.5913%2036.1623%2013.7563%2036.2076%2013.9334C36.253%2014.1105%2036.259%2014.2954%2036.2251%2014.475L34.1001%2026.175C33.9422%2027.0379%2033.4867%2027.8182%2032.813%2028.38C32.1392%2028.9419%2031.2899%2029.2497%2030.4126%2029.25ZM12.9126%2015.5L15.7251%2025.825C15.7983%2026.0977%2015.9618%2026.3376%2016.1887%2026.5055C16.4157%2026.6735%2016.6929%2026.7597%2016.9751%2026.75H30.4751C30.7711%2026.7548%2031.0592%2026.6545%2031.2881%2026.4668C31.517%2026.2791%2031.6718%2026.0162%2031.7251%2025.725L33.5001%2015.5H12.9126Z'%20fill='black'/%3e%3cpath%20d='M11.25%2015.5C10.9694%2015.5104%2010.6936%2015.426%2010.4668%2015.2605C10.24%2015.0949%2010.0756%2014.8579%2010%2014.5875L8.0625%207.6625C7.98689%207.39213%207.82246%207.15508%207.5957%206.98954C7.36894%206.82401%207.09306%206.73963%206.8125%206.75H5C4.66848%206.75%204.35054%206.61831%204.11612%206.38389C3.8817%206.14947%203.75%205.83152%203.75%205.5C3.75%205.16848%203.8817%204.85054%204.11612%204.61612C4.35054%204.3817%204.66848%204.25%205%204.25H6.8625C7.67925%204.24885%208.47404%204.51438%209.12608%205.00623C9.77812%205.49808%2010.2518%206.18936%2010.475%206.975L12.5%2013.9125C12.5508%2014.0766%2012.5672%2014.2495%2012.5482%2014.4203C12.5293%2014.5911%2012.4753%2014.7561%2012.3896%2014.9051C12.304%2015.054%2012.1886%2015.1838%2012.0506%2015.2861C11.9125%2015.3885%2011.7549%2015.4613%2011.5875%2015.5C11.4757%2015.5182%2011.3618%2015.5182%2011.25%2015.5Z'%20fill='black'/%3e%3cpath%20d='M20%2036.75C19.5055%2036.75%2019.0222%2036.6034%2018.6111%2036.3287C18.2%2036.054%2017.8795%2035.6635%2017.6903%2035.2067C17.5011%2034.7499%2017.4516%2034.2472%2017.548%2033.7623C17.6445%2033.2773%2017.8826%2032.8319%2018.2322%2032.4822C18.5819%2032.1326%2019.0273%2031.8945%2019.5123%2031.798C19.9972%2031.7016%2020.4999%2031.7511%2020.9567%2031.9403C21.4135%2032.1295%2021.804%2032.45%2022.0787%2032.8611C22.3534%2033.2722%2022.5%2033.7555%2022.5%2034.25C22.5%2034.913%2022.2366%2035.5489%2021.7678%2036.0178C21.2989%2036.4866%2020.663%2036.75%2020%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2036.75C27.0055%2036.75%2026.5222%2036.6034%2026.1111%2036.3287C25.7%2036.054%2025.3795%2035.6635%2025.1903%2035.2067C25.0011%2034.7499%2024.9516%2034.2472%2025.048%2033.7623C25.1445%2033.2773%2025.3826%2032.8319%2025.7322%2032.4822C26.0819%2032.1326%2026.5273%2031.8945%2027.0123%2031.798C27.4972%2031.7016%2027.9999%2031.7511%2028.4567%2031.9403C28.9135%2032.1295%2029.304%2032.45%2029.5787%2032.8611C29.8534%2033.2722%2030%2033.7555%2030%2034.25C30%2034.913%2029.7366%2035.5489%2029.2678%2036.0178C28.7989%2036.4866%2028.163%2036.75%2027.5%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2021.75H20C19.6685%2021.75%2019.3505%2021.6183%2019.1161%2021.3839C18.8817%2021.1495%2018.75%2020.8315%2018.75%2020.5C18.75%2020.1685%2018.8817%2019.8505%2019.1161%2019.6161C19.3505%2019.3817%2019.6685%2019.25%2020%2019.25H27.5C27.8315%2019.25%2028.1495%2019.3817%2028.3839%2019.6161C28.6183%2019.8505%2028.75%2020.1685%2028.75%2020.5C28.75%2020.8315%2028.6183%2021.1495%2028.3839%2021.3839C28.1495%2021.6183%2027.8315%2021.75%2027.5%2021.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_99_272'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",By=({className:e})=>u.jsxs("div",{className:` ${e}`,children:[u.jsx("img",{src:Uy,alt:"",className:"w-100 h-100"}),u.jsx("div",{className:"counter",children:"02"})]}),Hy="/assets/logo-MiIbGZY7.jpg",Wy="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjM1cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzVweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IldoYXRzYXBwIj48cGF0aCBkPSJNMTYuMDA0LDMxYy0yLjg2OCwwLTUuNjQ2LTAuODExLTguMDUtMi4zNDdsLTUuMzQ4LDEuNzA5Yy0wLjE3OSwwLjA1Ny0wLjM3NiwwLjAwOS0wLjUwOS0wLjEyNSAgIGMtMC4xMzItMC4xMzQtMC4xNzgtMC4zMzItMC4xMTctMC41MWwxLjcyNS01LjE0NkMxLjkzNSwyMi4wNjEsMSwxOS4xLDEsMTZjMC00LjA3NiwxLjYxMi03Ljg5MSw0LjUzOS0xMC43NDIgICBDNS43MzYsNS4wNjYsNi4wNTMsNS4wNyw2LjI0Niw1LjI2N2MwLjE5MiwwLjE5OCwwLjE4OCwwLjUxNS0wLjAxLDAuNzA3QzMuNTA1LDguNjM2LDIsMTIuMTk2LDIsMTYgICBjMCwyLjk3NCwwLjkyMiw1LjgxMSwyLjY2NSw4LjIwNGMwLjA5NSwwLjEzMSwwLjEyMSwwLjMsMC4wNjksMC40NTRsLTEuNDkyLDQuNDUybDQuNjMzLTEuNDgxICAgYzAuMTQ0LTAuMDQ3LDAuMzAyLTAuMDI0LDAuNDI5LDAuMDU5QzEwLjU4OSwyOS4yLDEzLjI1MiwzMCwxNi4wMDQsMzBDMjMuNzIyLDMwLDMwLDIzLjcyLDMwLDE2YzAtNy43MTktNi4yNzgtMTQtMTMuOTk2LTE0ICAgYy0wLjAwMSwwLTAuMDAyLDAtMC4wMDMsMGMtMi4xNjcsMC00LjIzOCwwLjQ4MS02LjE2NCwxLjQyOUM5LjU4OSwzLjU1LDkuMjksMy40NDksOS4xNjgsMy4yMDJTOS4xNDcsMi42NTQsOS4zOTYsMi41MzIgICBDMTEuNDYsMS41MTYsMTMuNjgyLDEsMTUuOTk2LDFDMjQuMjcyLDEsMzEsNy43MjksMzEsMTZTMjQuMjcyLDMxLDE2LjAwNCwzMXoiIGZpbGw9IiMwMDgwMDAiLz48Zz48cGF0aCBkPSJNMjAuNjAyLDI0LjQ5M0wyMC42MDIsMjQuNDkzYy0xLjAxMSwwLTIuNDIyLTAuMzktNC40MzktMS4yMjZjLTIuNjMzLTEuMDktNS4yNDMtMy4zNzQtNy4zNS02LjQyOSAgICBsLTAuMDc1LTAuMTA3Yy0wLjY5Ni0wLjk1MS0xLjgyMy0yLjc3My0xLjgyMy00LjY3NWMwLTIuMjI5LDEuMTE1LTMuMzYsMS41OTItMy44NDNjMC40NDktMC40NjEsMS4xMi0wLjcwNiwxLjg3NC0wLjcwNiAgICBjMC4xOSwwLDAuMzYsMC4wMDksMC41MTUsMC4wMThjMC42MzUsMC4wMjUsMS4wMDMsMC4xODUsMS4zNTMsMS4wMjJsMC4zNjMsMC44OGMwLjM4NCwwLjkzMSwwLjg1NywyLjA4LDAuOTMxLDIuMjM1ICAgIGMwLjA4MiwwLjE2OSwwLjMzMSwwLjY4OCwwLjA1NCwxLjIyOGMtMC4xNDgsMC4zMTYtMC4yOTMsMC40ODMtMC40OTIsMC43MTNjLTAuMTQsMC4xNjEtMC4yMzMsMC4yNjEtMC4zMjgsMC4zNjEgICAgYy0wLjExLDAuMTE4LTAuMjIyLDAuMjM0LTAuMzM0LDAuMzc1Yy0wLjE5MywwLjIyNi0wLjE5MywwLjIyNi0wLjEyOCwwLjMzOWMwLjM3LDAuNjI1LDEuMTU3LDEuODI1LDIuMjUzLDIuOCAgICBjMS40MjIsMS4yNjUsMi41NzEsMS43MywzLjEyMywxLjk1NGwwLjEzNywwLjA1NmMwLjE0NSwwLjA2LDAuMzI4LDAuMTAzLDAuNDY1LTAuMDQyYzAuMjQ4LTAuMjY3LDAuNTYyLTAuNzA2LDAuODk0LTEuMTcxICAgIGwwLjE5OS0wLjI3OWMwLjM0OS0wLjQ5MywwLjc3OS0wLjU5NywxLjA3OC0wLjU5N2MwLjE3NSwwLDAuMzU3LDAuMDM1LDAuNTQzLDAuMTA1YzAuNDY1LDAuMTYyLDIuOTEyLDEuMzgxLDIuOTM3LDEuMzkzICAgIGwwLjIzNSwwLjExNWMwLjM1LDAuMTY4LDAuNjI2LDAuMzAxLDAuNzg0LDAuNTc5YzAuMjI5LDAuMzk4LDAuMTM5LDEuNDQyLTAuMjA5LDIuNDI3Yy0wLjQxNywxLjE3OS0xLjk2NywyLjEtMy4yMTMsMi4zNjggICAgQzIxLjI5MywyNC40MzgsMjAuOTk4LDI0LjQ5MywyMC42MDIsMjQuNDkzeiBNMTAuMzgsOC41MDdjLTAuNDcyLDAtMC45MDIsMC4xNDItMS4xMjQsMC4zNjljLTAuNDYxLDAuNDY4LTEuMzQyLDEuMzYxLTEuMzQyLDMuMTggICAgYzAsMS4xODEsMC41ODUsMi42NTgsMS42MDUsNC4wNTFsMC4xMTYsMC4xNjVjMS45OTgsMi44OTgsNC40NTIsNS4wNTUsNi45MDksNi4wNzJjMS44OTMsMC43ODUsMy4xODIsMS4xNSw0LjA1NywxLjE1bDAsMCAgICBjMC4zLDAsMC41MjMtMC4wNDIsMC43MjctMC4wODVjMC45NzMtMC4yMSwyLjE5OC0wLjkyOSwyLjQ3OS0xLjcyNGMwLjMwNC0wLjg1NywwLjI5OC0xLjUxNiwwLjI2Mi0xLjY0NyAgICBjLTAuMDAyLDAuMDMxLTAuMTgyLTAuMDU0LTAuMzI3LTAuMTI0bC0wLjI0OS0wLjEyMmMtMC43MDEtMC4zNTEtMi41MTMtMS4yMzYtMi44My0xLjM0N2MtMC4wODQtMC4wMzItMC4xNDgtMC4wNDUtMC4yMDItMC4wNDUgICAgYy0wLjA0NSwwLTAuMTM4LDAtMC4yNjQsMC4xNzhsLTAuMiwwLjI4Yy0wLjM1MSwwLjQ5Mi0wLjY4MiwwLjk1Ni0wLjk3NiwxLjI3MmMtMC4zNzcsMC40MDMtMS4wMjQsMC41MTUtMS41ODEsMC4yODMgICAgbC0wLjEyNy0wLjA1MmMtMC41NTctMC4yMjUtMS44NjItMC43NTMtMy40MTMtMi4xMzNjLTEuMTk2LTEuMDY2LTIuMDQ5LTIuMzYzLTIuNDUxLTMuMDQyYy0wLjQyMy0wLjcyOSwwLjAwNi0xLjIzMSwwLjIxMi0xLjQ3MiAgICBjMC4xMzEtMC4xNjMsMC4yNTktMC4yOTgsMC4zODctMC40MzRjMC4wODQtMC4wODksMC4xNjgtMC4xNzgsMC4yNTQtMC4yNzhjMC4yMjUtMC4yNTksMC4yOTktMC4zNDUsMC4zOTYtMC41NTIgICAgYzAuMDI5LTAuMDU3LDAuMDQ1LTAuMTM4LTAuMDU5LTAuMzU0Yy0wLjA3Ni0wLjE2LTAuNTYyLTEuMzM0LTAuOTUzLTIuMjg2bC0wLjM2Mi0wLjg3N2MtMC4xNjUtMC4zOTYtMC4xNjUtMC4zOTYtMC40NzktMC40MDggICAgQzEwLjcwMSw4LjUxNSwxMC41NDksOC41MDcsMTAuMzgsOC41MDd6IiBmaWxsPSIjMDA4MDAwIi8+PC9nPjxnPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQiIGZpbGw9IiMwMDgwMDAiIHI9IjAuNSIvPjwvZz48L2c+PC9zdmc+";var Sh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},af=qe.createContext&&qe.createContext(Sh),Pn=function(){return Pn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pn.apply(this,arguments)},Yy=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Ch(e){return e&&e.map(function(t,n){return qe.createElement(t.tag,Pn({key:n},t.attr),Ch(t.child))})}function Vy(e){return function(t){return qe.createElement(Qy,Pn({attr:Pn({},e.attr)},t),Ch(e.child))}}function Qy(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=Yy(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),qe.createElement("svg",Pn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Pn(Pn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&qe.createElement("title",null,o),e.children)};return af!==void 0?qe.createElement(af.Consumer,null,function(n){return t(n)}):t(Sh)}function jh(e){return Vy({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const Gy=({className:e})=>{const t={border:"solid 0.5px purple"};return u.jsxs("div",{className:`input-group ${e}`,children:[u.jsx("div",{className:"input-group-prepend",children:u.jsx("button",{className:"btn btn-outline-secondary dropdown-toggle",style:t,type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Catégorie"})}),u.jsx("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button"}),u.jsx("div",{className:"input-group-append",children:u.jsxs("button",{className:"btn btn-outline-secondary ",type:"button",style:t,children:["   ",u.jsx(jh,{size:24,color:"#333"})]})})]})},Ky=re(Gy)`
    width:80%;
    min-width:25rem;
    @media screen and (max-width: 767px){
        display:none;
        
    }
`,yi="",be={Home:yi+"/",Products:yi+"/produits",Categorie:yi+"/produits/",Details:yi+"/produit/",Info:yi+"/info/"},qy=({className:e})=>{const{articles:t,categories:n}=E.useContext(mo);E.useState([]);const[r,i]=E.useState(!1),[o,l]=E.useState(""),a=()=>{i(s=>!s)};return u.jsxs("div",{className:e,children:[u.jsx(jh,{onClick:()=>a()}),u.jsxs("div",{className:`${r&&"activated"}`,children:[u.jsxs("div",{className:"head",children:[u.jsx("input",{type:"text",value:o,className:"searchField",onChange:s=>l(s.target.value)}),u.jsxs("div",{className:"cross",onClick:()=>a(),children:[u.jsx("span",{}),u.jsx("span",{})]})]}),u.jsx("div",{className:"result",children:t.filter(s=>s.name.toUpperCase().includes(o.toUpperCase())||s.longName.toUpperCase().includes(o.toUpperCase())).length!=0?t.filter(s=>s.name.toUpperCase().includes(o.toUpperCase())||s.longName.toUpperCase().includes(o.toUpperCase())).map(s=>u.jsx(ft,{className:"link",to:`${be.Details}${s.id}`,onClick:()=>a(),children:u.jsxs("div",{className:"article",children:[u.jsx("div",{children:u.jsx("img",{src:s.image[0],alt:""})}),u.jsxs("div",{children:[u.jsx("div",{children:s.name}),u.jsx("div",{children:s.longName})]})]})},s.id+parseInt(Date.now()))):u.jsx("div",{style:{color:"red",textAlign:"center",fontSize:"20px"},children:"Aucun Article correstondant"})})]})]})},Zy=re(qy)`
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
`,Xy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Wy,className:"w-100",alt:""})});re(Xy)`

    width:35px;
    height:35px;
    min-height:15px;
    min-width:15px;
@media screen and (max-width:800px) {
    height:25px;
    width:25px;
        
    }

`;const Jy=({className:e})=>{const[t,n]=E.useState(!1);function r(){n(i=>!i),console.log(t)}return u.jsx("div",{className:e,children:u.jsxs("div",{className:`${t&&"menu-down"}`,onClick:()=>r(),children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("div",{children:u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(ft,{to:`${be.Categorie}cosmetique`,children:"Cosmetique"})}),u.jsx("li",{children:u.jsx(ft,{to:`${be.Categorie}telephone`,children:"Télephone"})}),u.jsx("li",{children:u.jsx(ft,{to:`${be.Categorie}montre`,children:"Montres"})}),u.jsx("li",{children:u.jsx(ft,{to:`${be.Categorie}accessoire`,children:"Accessoires"})}),u.jsx("li",{children:u.jsx(ft,{to:`${be.Info}modePaiement`,children:"Mode de paiement"})}),u.jsx("li",{children:u.jsx(ft,{to:`${be.Info}commentAcheter`,children:"Comment acheter chez nous ?"})}),u.jsx("li",{children:u.jsx(ft,{to:`${be.Info}aPropos`,children:"A propos"})})]})})]})})},ex=re(Jy)`
        display:none;
        

        @media screen and (max-width: 767px) {
        width:17px;
        height:22px;
    
        &>div{
            height:100%;
            width:100%;

        }
        &>div>div{
            background-color:${te.FIFTH};
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
            color:grey;
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
        .menu-down li:nth-child(6){
            animation: liSlide .3s ;
            animation-fill-mode:forwards;
            animation-delay:1.7s;
        }
        .menu-down li:nth-child(7){
            animation: liSlide .4s ;
            animation-fill-mode:forwards;
            animation-delay:2.1s;
        }
        li>*{
            text-decoration: none;
            color:${Y.FIFTH};

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
`;re(By)`
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
`;var kh={},Nh={exports:{}},tx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nx=tx,rx=nx;function Mh(){}function Eh(){}Eh.resetWarningCache=Mh;var ix=function(){function e(r,i,o,l,a,s){if(s!==rx){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Eh,resetWarningCache:Mh};return n.PropTypes=n,n};Nh.exports=ix();var ox=Nh.exports,la={exports:{}},Ei={exports:{}};(function(){var e,t,n,r,i,o;typeof performance<"u"&&performance!==null&&performance.now?Ei.exports=function(){return performance.now()}:typeof process<"u"&&process!==null&&process.hrtime?(Ei.exports=function(){return(e()-i)/1e6},t=process.hrtime,e=function(){var l;return l=t(),l[0]*1e9+l[1]},r=e(),o=process.uptime()*1e9,i=r-o):Date.now?(Ei.exports=function(){return Date.now()-n},n=Date.now()):(Ei.exports=function(){return new Date().getTime()-n},n=new Date().getTime())}).call(vf);var lx=Ei.exports,ax=lx,en=typeof window>"u"?vf:window,bo=["moz","webkit"],Or="AnimationFrame",Kr=en["request"+Or],lo=en["cancel"+Or]||en["cancelRequest"+Or];for(var xi=0;!Kr&&xi<bo.length;xi++)Kr=en[bo[xi]+"Request"+Or],lo=en[bo[xi]+"Cancel"+Or]||en[bo[xi]+"CancelRequest"+Or];if(!Kr||!lo){var Va=0,sf=0,bn=[],sx=1e3/60;Kr=function(e){if(bn.length===0){var t=ax(),n=Math.max(0,sx-(t-Va));Va=n+t,setTimeout(function(){var r=bn.slice(0);bn.length=0;for(var i=0;i<r.length;i++)if(!r[i].cancelled)try{r[i].callback(Va)}catch(o){setTimeout(function(){throw o},0)}},Math.round(n))}return bn.push({handle:++sf,callback:e,cancelled:!1}),sf},lo=function(e){for(var t=0;t<bn.length;t++)bn[t].handle===e&&(bn[t].cancelled=!0)}}la.exports=function(e){return Kr.call(en,e)};la.exports.cancel=function(){lo.apply(en,arguments)};la.exports.polyfill=function(e){e||(e=en),e.requestAnimationFrame=Kr,e.cancelAnimationFrame=lo};var ux=la.exports,oc={};Object.defineProperty(oc,"__esModule",{value:!0});oc.default=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=t>=e?"down":"up",o=Math.abs(t-e);return n.disable?{action:"none",scrollDirection:i,distanceScrolled:o}:n.pin?{action:r.state!=="pinned"?"pin":"none",scrollDirection:i,distanceScrolled:o}:t<=n.pinStart&&r.state!=="unfixed"?{action:"unfix",scrollDirection:i,distanceScrolled:o}:t<=r.height&&i==="down"&&r.state==="unfixed"?{action:"none",scrollDirection:i,distanceScrolled:o}:t>r.height+n.pinStart&&i==="down"&&r.state==="unfixed"?{action:"unpin-snap",scrollDirection:i,distanceScrolled:o}:i==="down"&&["pinned","unfixed"].indexOf(r.state)>=0&&t>r.height+n.pinStart&&o>n.downTolerance?{action:"unpin",scrollDirection:i,distanceScrolled:o}:i==="up"&&o>n.upTolerance&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:i,distanceScrolled:o}:i==="up"&&t<=r.height&&["pinned","unfixed"].indexOf(r.state)<0?{action:"pin",scrollDirection:i,distanceScrolled:o}:{action:"none",scrollDirection:i,distanceScrolled:o}};var lc={};Object.defineProperty(lc,"__esModule",{value:!0});lc.default=cx;function cx(){var e=!1;try{var t={get passive(){return e=!0,!1}};window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{e=!1}return e}Object.defineProperty(kh,"__esModule",{value:!0});var Uo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},uf=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Lh=E,cf=ti(Lh),dx=ox,Ve=ti(dx),fx=tv,df=ti(fx),px=ux,ff=ti(px),hx=oc,mx=ti(hx),gx=lc,vx=ti(gx);function ti(e){return e&&e.__esModule?e:{default:e}}function pf(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function yx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xx(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function wx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Qa=function(){},ac=function(e){wx(t,e),uf(t,null,[{key:"getDerivedStateFromProps",value:function(r,i){return r.disable&&i.state!=="unfixed"?{translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1,state:"unfixed"}:null}}]);function t(n){yx(this,t);var r=xx(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return r.setRef=function(i){return r.inner=i},r.setHeightOffset=function(){r.setState({height:r.inner?r.inner.offsetHeight:""}),r.resizeTicking=!1},r.getScrollY=function(){return r.props.parent().pageYOffset!==void 0?r.props.parent().pageYOffset:r.props.parent().scrollTop!==void 0?r.props.parent().scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},r.getViewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},r.getDocumentHeight=function(){var i=document.body,o=document.documentElement;return Math.max(i.scrollHeight,o.scrollHeight,i.offsetHeight,o.offsetHeight,i.clientHeight,o.clientHeight)},r.getElementPhysicalHeight=function(i){return Math.max(i.offsetHeight,i.clientHeight)},r.getElementHeight=function(i){return Math.max(i.scrollHeight,i.offsetHeight,i.clientHeight)},r.getScrollerPhysicalHeight=function(){var i=r.props.parent();return i===window||i===document.body?r.getViewportHeight():r.getElementPhysicalHeight(i)},r.getScrollerHeight=function(){var i=r.props.parent();return i===window||i===document.body?r.getDocumentHeight():r.getElementHeight(i)},r.isOutOfBound=function(i){var o=i<0,l=r.getScrollerPhysicalHeight(),a=r.getScrollerHeight(),s=i+l>a;return o||s},r.handleScroll=function(){r.scrollTicking||(r.scrollTicking=!0,(0,ff.default)(r.update))},r.handleResize=function(){r.resizeTicking||(r.resizeTicking=!0,(0,ff.default)(r.setHeightOffset))},r.unpin=function(){r.props.onUnpin(),r.setState({translateY:"-100%",className:"headroom headroom--unpinned",animation:!0,state:"unpinned"})},r.unpinSnap=function(){r.props.onUnpin(),r.setState({translateY:"-100%",className:"headroom headroom--unpinned headroom-disable-animation",animation:!1,state:"unpinned"})},r.pin=function(){r.props.onPin(),r.setState({translateY:0,className:"headroom headroom--pinned",animation:!0,state:"pinned"})},r.unfix=function(){r.props.onUnfix(),r.setState({translateY:0,className:"headroom headroom--unfixed headroom-disable-animation",animation:!1},function(){setTimeout(function(){r.setState({state:"unfixed"})},0)})},r.update=function(){if(r.currentScrollY=r.getScrollY(),!r.isOutOfBound(r.currentScrollY)){var i=(0,mx.default)(r.lastKnownScrollY,r.currentScrollY,r.props,r.state),o=i.action;o==="pin"?r.pin():o==="unpin"?r.unpin():o==="unpin-snap"?r.unpinSnap():o==="unfix"&&r.unfix()}r.lastKnownScrollY=r.currentScrollY,r.scrollTicking=!1},r.currentScrollY=0,r.lastKnownScrollY=0,r.scrollTicking=!1,r.resizeTicking=!1,r.eventListenerOptions=!1,r.state={state:"unfixed",translateY:0,className:"headroom headroom--unfixed"},r}return uf(t,[{key:"componentDidMount",value:function(){this.setHeightOffset(),this.eventListenerOptions=(0,vx.default)()?{passive:!0,capture:!1}:!1,this.props.disable||(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions))}},{key:"shouldComponentUpdate",value:function(r,i){return!(0,df.default)(this.props,r)||!(0,df.default)(this.state,i)}},{key:"componentDidUpdate",value:function(r,i){r.children!==this.props.children&&this.setHeightOffset(),!r.disable&&this.props.disable?(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions),i.state!=="unfixed"&&this.state.state==="unfixed"&&this.props.onUnfix()):r.disable&&!this.props.disable&&(this.props.parent().addEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.calcHeightOnResize&&this.props.parent().addEventListener("resize",this.handleResize,this.eventListenerOptions)),r.pin!==this.props.pin&&this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.props.parent()&&(this.props.parent().removeEventListener("scroll",this.handleScroll,this.eventListenerOptions),this.props.parent().removeEventListener("resize",this.handleResize,this.eventListenerOptions)),window.removeEventListener("scroll",this.handleScroll,this.eventListenerOptions)}},{key:"render",value:function(){var r=this.props,i=r.className,o=r.tag,l=pf(r,["className","tag"]);delete l.onUnpin,delete l.onPin,delete l.onUnfix,delete l.disableInlineStyles,delete l.disable,delete l.pin,delete l.parent,delete l.children,delete l.upTolerance,delete l.downTolerance,delete l.pinStart,delete l.calcHeightOnResize;var a=l.style,s=l.wrapperStyle,c=pf(l,["style","wrapperStyle"]),d={position:this.props.disable||this.state.state==="unfixed"?"relative":"fixed",top:0,left:0,right:0,zIndex:1,WebkitTransform:"translate3D(0, "+this.state.translateY+", 0)",MsTransform:"translate3D(0, "+this.state.translateY+", 0)",transform:"translate3D(0, "+this.state.translateY+", 0)"},h=this.state.className;this.state.animation&&(d=Uo({},d,{WebkitTransition:"all .2s ease-in-out",MozTransition:"all .2s ease-in-out",OTransition:"all .2s ease-in-out",transition:"all .2s ease-in-out"}),h+=" headroom--scrolled"),this.props.disableInlineStyles?d=a:d=Uo({},d,a);var m=Uo({},s,{height:this.state.height?this.state.height:null}),x=i?i+" headroom-wrapper":"headroom-wrapper";return cf.default.createElement(o,{style:m,className:x},cf.default.createElement("div",Uo({ref:this.setRef},c,{style:d,className:h}),this.props.children))}}]),t}(Lh.Component);ac.propTypes={className:Ve.default.string,parent:Ve.default.func,children:Ve.default.any.isRequired,disableInlineStyles:Ve.default.bool,disable:Ve.default.bool,pin:Ve.default.bool,upTolerance:Ve.default.number,downTolerance:Ve.default.number,onPin:Ve.default.func,onUnpin:Ve.default.func,onUnfix:Ve.default.func,wrapperStyle:Ve.default.object,pinStart:Ve.default.number,style:Ve.default.object,calcHeightOnResize:Ve.default.bool,tag:Ve.default.string};ac.defaultProps={parent:function(){return window},disableInlineStyles:!1,disable:!1,pin:!1,upTolerance:5,downTolerance:0,onPin:Qa,onUnpin:Qa,onUnfix:Qa,wrapperStyle:{},pinStart:0,calcHeightOnResize:!0,tag:"div"};var Sx=kh.default=ac;const Cx=({className:e})=>u.jsx("div",{children:u.jsx(u.Fragment,{children:u.jsx("nav",{className:`navbar-css ${e}`,children:u.jsxs(Sx,{children:[u.jsx("div",{className:" navbar  row container-fluid-css-2",children:u.jsxs("div",{className:"first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between",children:[u.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[u.jsx(ex,{}),u.jsx("div",{style:{marginRight:"6px"}}),u.jsxs(ft,{to:be.Home,className:"link-css title-css navbar-brand  d-block",children:[u.jsx("img",{src:Hy,width:"30",height:"30",className:"d-inline-block align-top",alt:""}),"ChezArdi"]})]}),u.jsx(Ky,{}),u.jsxs("div",{className:"d-flex flex-row flex-row justify-content-between",children:[u.jsx(Zy,{}),u.jsx("div",{style:{marginLeft:"12px"}})]})]})}),u.jsxs("div",{className:"moreInfo",children:[u.jsx("div",{children:"Livraison rapide"}),u.jsx("div",{children:"Paiement cash à la livraison à Kinshasa, Lubumbashi et Kolwezi"})]})]})})})});re(by)`
width:100%;
@media screen and (max-width: 500px) {
    
}
`;const jx=()=>{const e=()=>{const i=`mailto:mbuyiarsen095@gmail.com?subject=${encodeURIComponent("ChezArdi")}&body=${encodeURIComponent("")}`;window.location.href=i};return u.jsx("div",{style:{backgroundColor:"black"},children:u.jsx("div",{className:"",style:{backgroundColor:"black"},children:u.jsxs("footer",{style:{backgroundColor:te.FIFTH},className:"text-center text-lg-start",children:[u.jsx("div",{className:"container p-4",children:u.jsxs("div",{className:"row",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Nous contacter"}),u.jsxs("ul",{className:"list-unstyled mb-4",children:[u.jsx("li",{style:{color:"white"},children:"+243840199718"}),u.jsx("li",{children:u.jsx("a",{onClick:e,className:"text-white",children:"mbuyiarsen095@gmail.com"})})]})]})}),u.jsx("div",{className:"text-center p-3 border-top border-black text-white",children:"© 2024 Copyright"})]})})})},kx=re(Cx)`
&>div:nth-child(1)>div:nth-child(1){
        background-color: #F9FF00;

}
    div .first-col{
        padding-left:1.5rem;
    }
    div .second-col{
        padding-left:1.5rem;
    }
    .moreInfo{
        min-height: 50px;
        width:100%;
        background-color: ${te.FIFTH};
        position: fixed;
        border-radius:0  0 5px 5px;
    }
    .moreInfo>div:nth-child(1){
        text-align:center;
        font-size:20px;
        color:white;
    }
    .moreInfo>div:nth-child(2){
        text-align:center;
        font-size:14px;
        color:white;

    }



`,Bo="/assets/png_2-op38kcqj.png",B="/assets/png_7-zH4XEwQ0.png",O="/assets/png_8-JODtVRir.png",hf="/assets/cosmetique1-Ktv6z-PZ.jpeg",mf="/assets/cosmetique2-902iOIsU.jpeg";let Nx=[{id:0,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[bt,b,B,O]},{id:1,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Bo,b,B,O]},{id:2,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[Ni,b,B,O]},{id:3,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Lr,b,B,O]},{id:4,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[$o,b,B,O]},{id:5,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[Mi,b,B,O]},{id:6,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[b,B,O]},{id:7,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O]},{id:8,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[bt,b,B,O]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]},{id:14,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[bt,b,B,O]},{id:15,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Bo,b,B,O]},{id:16,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[Ni,b,B,O]},{id:17,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Lr,b,B,O]},{id:18,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[$o,b,B,O]},{id:19,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[Mi,b,B,O]},{id:20,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[b,B,O]},{id:21,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O]},{id:22,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:24,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[bt,b,B,O]},{id:25,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:26,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]},{id:27,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]},{id:28,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[bt,b,B,O]},{id:29,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Bo,b,B,O]},{id:30,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[Ni,b,B,O]},{id:31,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Lr,b,B,O]},{id:32,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[$o,b,B,O]},{id:33,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[Mi,b,B,O]},{id:34,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[b,B,O]},{id:35,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O]},{id:36,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:38,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[bt,b,B,O]},{id:39,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:40,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]},{id:41,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]},{id:42,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[bt,b,B,O]},{id:43,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[Bo,b,B,O]},{id:44,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[Ni,b,B,O]},{id:45,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Lr,b,B,O]},{id:46,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[$o,b,B,O]},{id:47,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[Mi,b,B,O]},{id:48,categorie:"cosmetique",name:"Beure de carité",longName:" beure à huile pour tous beure à huile pour tous beure à huile pour tous",price:20,pricePromo:33,slug:`Disaar à la Vitamine C 🔥🔥🔥💥 Une gamme pour tout type de peau ❌Fini les tampons avec notre crème

 * Elle est très recommandée pour les personnes qui ont une peau fragile due aux produits éclaircissants , élimine les boutons, tâches d'acnés , fards,  rougeurs et enlève également les dégâts laissés par le soleil sur les peaux.
* Elle est Éclaircissante, hydratante et adoucissante. La gamme complète de Disaar éclairci naturellement ta peau et le rend un teint uniforme grâce à la vitamine C.`,image:[hf,mf]},{id:49,categorie:"cosmetique",name:"Huile d'olive",longName:"lotion eclairecissante",price:20,pricePromo:25,slug:`Disaar à la Vitamine C 🔥🔥🔥💥 Une gamme pour tout type de peau ❌Fini les tampons avec notre crème

 * Elle est très recommandée pour les personnes qui ont une peau fragile due aux produits éclaircissants , élimine les boutons, tâches d'acnés , fards,  rougeurs et enlève également les dégâts laissés par le soleil sur les peaux.
* Elle est Éclaircissante, hydratante et adoucissante. La gamme complète de Disaar éclairci naturellement ta peau et le rend un teint uniforme grâce à la vitamine C.`,image:[mf,hf]},{id:50,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:52,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[bt,b,B,O]},{id:53,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,O]},{id:54,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]},{id:55,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,O,O]}];const Mx=[{category:"cosmetiques",slug:"Découvrez notre gamme exceptionnelle de produits cosmétiques conçus pour sublimer votre beauté naturelle et vous offrir une expérience de soin luxueuse. Nos produits sont spécialement formulés avec des ingrédients de haute qualité et des technologies innovantes pour répondre aux besoins de votre peau et de vos cheveux."},{category:"accessoires",slug:"Les chargeurs et tous type d'accessoires que"},{category:"telephones",slug:"iphone, samsung et tous types de telephone que vous voudrez vous procurer"},{category:"montres",slug:"Gucci, louis vuitton, davinchi, toustes ses marques sont disponibles ice chez nous"}],Ex=[{title:"aPropos",title2:"A propos de nous",slug:`VOUS FAIRE VIVRE UNE VIE MEILLEURE ET VOUS DONNER CONFIANCE EN VOUS ! Nous sommes une boutique en ligne basée à Kinshasa, Lubumbashi, Kolwezi et Likasi, et nous nous engageons activement à créer des produits remarquables qui vont vous aider à améliorer la qualité de votre vie, ainsi que celle de vos proches.


    Nous croyons que vous méritez d'avoir accès à des produits de qualité et nous ferons tout pour vous satisfaire. Nos produits sont minutieusement fabriqués avec amour et passion afin de vous offrir ce qu'il y a de mieux. Nous proposons une livraison rapide en moins de 48h, car nous ne voulons pas que vous ayez à attendre trop longtemps après avoir passé votre commande. De plus, nous travaillons chaque jour pour améliorer nos services afin de vous offrir une expérience gratifiante.`},{title:"commentAcheter",title2:"Comment acheter",slug:"Le site est conçu de manière simple pour aider chacun de vous à y accéder facilement et rapidement. Si vous êtes intéressé par l'un de nos produits, il vous suffit de cliquer sur l'icône correspondante, ce qui vous dirigera vers WhatsApp pour discuter ensuite avec nos agents de manière simple et rapide. Ainsi, vous pourrez passer votre commande en toute sécurité."},{title:"modePaiement",title2:"Mode de paiement",slug:"Dans le but de rassurer tout le monde, la boutique n'accepte pas de transfert d'argent ni paiement en ligne, seulement en cas d'urgence. Nous sommes une boutique en cours de développement, le paiement se fait cash à la livraison."}],mo=qe.createContext(),Lx=()=>{const e={articles:Nx,categories:Mx};return u.jsx(mo.Provider,{value:e,children:u.jsxs("div",{className:"theApp",children:[u.jsx(kx,{}),u.jsx("div",{className:"space"}),u.jsx("div",{className:"container-fluid-css",children:u.jsx(Cg,{},Date.now())}),u.jsx("div",{children:u.jsx(jx,{})})]})})},Dx=({className:e})=>{const{articles:t,categories:n}=E.useContext(mo),r=t.filter(a=>a.categorie=="accessoire"),i=t.filter(a=>a.categorie=="montre"),o=t.filter(a=>a.categorie=="telephone"),l=t.filter(a=>a.categorie=="cosmetique");return u.jsxs("div",{className:e,style:{backgroundColor:te.MAIN},children:[u.jsx("div",{className:"nav",children:u.jsx("div",{children:`Cliquez sur les barres en haut à gauche pour ouvrir le menu, cliquez sur l'icône de recherche en haut à droite pour effectuer une recherche rapide parmi tous nos articles, cliquez sur une image pour obtenir plus de détails sur le produit, et enfin, cliquez sur le bouton "Acheter maintenant" pour discuter directement avec nous.`})}),u.jsxs("div",{className:"section2-1",children:[u.jsx(Ho,{id:"accessoitre-link",articles:l,categories:n,category:"cosmetiques"}),u.jsx(Ho,{id:"accessoitre-link",articles:r,categories:n,category:"accessoires"}),u.jsx(Ho,{id:"montre-link",articles:i,categories:n,category:"montres"}),u.jsx(Ho,{id:"potable-link",articles:o,categories:n,category:"telephones"}),u.jsxs("div",{className:"box2-1 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:bt,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-2 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:bt,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-3 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Montres connectées"})}),u.jsx("div",{className:"img3 img",children:u.jsx("img",{src:Lr,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-4 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Balladeurs"})}),u.jsx("div",{className:"img4 img",children:u.jsx("img",{src:Ni,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-5 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Cables chargeurs"})}),u.jsx("div",{className:"img5 img",children:u.jsx("img",{src:Mi,width:"100%",alt:"",className:"w-100 h-100"})})]}),u.jsxs("div",{className:"box2-6 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Chargeurs"})}),u.jsx("div",{className:"img6 img",children:u.jsx("img",{src:b,alt:"",width:"100%",className:"h-100 "})})]})]}),u.jsx("div",{})]})},Ho=({id:e,articles:t,category:n,categories:r})=>{const i=t[0],[o,l]=E.useState({...i}),[a,s]=E.useState(i.id);function c(d){const h=t.filter(m=>m.id==d);l(h[0]),s(d)}return u.jsxs("div",{style:{width:"100%"},className:"list-article",children:[u.jsxs("div",{className:"category",style:{},children:[u.jsx("div",{}),u.jsx("div",{children:n}),u.jsx("div",{id:e})]}),u.jsx("div",{className:"articles",children:t.map((d,h)=>u.jsx(Tx,{...d},h))}),u.jsxs("div",{className:"slug",children:[u.jsx("div",{}),u.jsx("div",{children:r.filter(d=>d.category===n)[0].slug})]}),u.jsx("div",{className:"listImg",style:{overflowX:"hidden"},children:u.jsx("div",{children:t.map(d=>u.jsx("div",{className:`${a==d.id?"imgHover":""}`,style:{height:"100%",aspectRatio:"1/1",flexShrink:0},children:u.jsx("img",{src:d.image[0],className:"img-fluid",alt:"",width:"100%",height:"100%",onClick:()=>c(d.id)})},d.id))})}),u.jsx("div",{className:"articleBox",children:u.jsx(Px,{...o})}),u.jsx("div",{className:"square",children:t.map(d=>u.jsxs("div",{className:"square-box",children:[u.jsx(ft,{className:"link",to:`${be.Details}${d.id}`,children:u.jsx("img",{src:d.image[0],width:"100%",alt:"",className:"w-100"})}),u.jsxs("div",{children:[u.jsxs("span",{children:[u.jsx("span",{className:"squarePrice",children:d.price})," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d.pricePromo||u.jsxs("span",{className:"promo-1",children:[d.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("span",{children:d.name}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${d.name}.%20Merci`,children:"Acheter maintenant"})})]})]},d.id))})]})},Tx=({name:e,image:t,price:n,pricePromo:r,longName:i,id:o})=>u.jsxs("div",{className:"singleArticle",children:[u.jsx("div",{children:u.jsx(ft,{className:"link",to:`${be.Details}${o}`,children:u.jsx("div",{children:u.jsx("img",{src:t[0],alt:"",width:"100%",height:"100%"})})})}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsx("span",{children:i}),u.jsx("div",{className:"_button",children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${e}.%20Merci`,children:"Acheter maintenant"})})]}),Px=({name:e,image:t,price:n,pricePromo:r,longName:i,id:o})=>{const[l,a]=E.useState(0);return E.useEffect(()=>{const s=setInterval(()=>{a(c=>c+1)},6e3);return()=>{clearInterval(s)}},[]),u.jsxs("div",{className:"singleArticle2",children:[u.jsx("div",{children:u.jsx(ft,{className:"link",to:`${be.Details}${o}`,children:u.jsx("img",{src:t[l%t.length],alt:"",width:"100%",height:"100%"})})}),u.jsx("div",{children:t.map((s,c,d)=>u.jsx("span",{className:`${l%d.length==c&&"imageOn"} circle`,onClick:()=>a(c)},c))}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign2",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsxs("span",{children:[" ",i," "]}),u.jsx("div",{}),u.jsx("div",{className:"_button",children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${e}.%20Merci`,children:"Acheter maintenant"})})]})},zx=re(Dx)`
  Link{
    display:block;
    height:100%;
    width:100%;

  }
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

     width:100% !important;
    height:290px !important;
    margin-bottom:1rem;
  }

    .singleArticle{
      position:relative;
      box-shadow: 7px 0 5px -5px grey, -7px 0 5px -5px grey;
    width:100%;
    height:100%;
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
      color: ${Y.MAIN};
      padding-bottom:.1rem;
  }
  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(1) .dollarSign{
    display:inline-block;
    transform: translate(-40%,0%);
    font-size:11px;

  }
  
  .singleArticle>span:nth-child(2)>.dollarSign,.singleArticle2>span:nth-child(3)>.dollarSign{
    display: inline-block;
    transform:translate(-130%,-20%);
    

  }
  .promo-1{
    margin-left:10px;
    text-decoration:line-through ${Y.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${Y.SECOND};
  }
  .square-box .promo-1{
    margin-left:15px;
    text-decoration:line-through ${Y.SECOND} .5px;
    font-size:11px;
    color: ${Y.SECOND};
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${Y.MAIN};

  }
  .dollarSign2{
    font-size:15px;
    font-weight:0;
    transform:translate(-70%,-10%);
    color :  ${Y.MAIN};

  }
    .singleArticle2>span:nth-child(3){
      font-size:30px;
      color:  ${Y.MAIN};
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
      font-size:25px;
      text-transform:uppercase;
      font-weight:600;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
      padding-bottom:5px;
  }
    .singleArticle>span:nth-child(4){
      min-height:40px;
      justify-content:center;
      font-size:14px;
      line-height:15px;
      color:  ${Y.SECOND};
  }
  .singleArticle2>div:nth-child(2){
    height: 10px;
    width: 100%;
    gap : 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:3px;
  }
  .circle{
    border : solid .5px ${te.FIFTH};
    height: 100%;
    aspect-ratio:1/1;
    border-radius:50%;
    background-color: transparent;
  }
  .imageOn{
    background-color:${te.FIFTH};
  }
    .singleArticle2>span:nth-child(5){
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: ${Y.SECOND};
      min-height:40px;
      text-align:center;
      margin-bottom:10px;
  }
  ._button{
    text-align:center;
    font-weight:100;
    padding:.3rem;
    border: solid 1px ${te.FIFTH};
    border-radius:30px/30px;
    margin:0 .1rem;
    color: ${Y.MAIN}
  }
    ._button:active{
        background-color:${te.SECOND} ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color:  ${Y.MAIN};


  }


    .singleArticle>div:nth-child(1){
     margin:0;
     width:300px !important;
    height:300px !important;
  }
    .singleArticle>div:nth-child(1) div{
      height:100%;
      width:100%;

  }
    .singleArticle>div:nth-child(1) div img{
      height:100%;
      width:100%;
      object-fit:fill;
      
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
    margin-bottom:10px;
    min-height:0rem;
    width:100%;
    overflow:hidden;
    background-color:${te.MAIN};

  }

  .listImg{
    /* position: absolute;
    top:45rem;
    left:0; */
    height:10rem;
    width:100%;
    margin:1px 0;
  }
  .listImg>div{
    display:flex;
    overflow-x:scroll;
    gap:2px;
    height:100%;
    width:100%;
  }
  .listImg>div>div{
    flex-shrink:0;
    height:100%;
    aspect-ratio:1/1;
  }
  .listImg>div>div img{
    width:100%;
    height:100%;
    object-fit:fill;
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
    min-height:33rem;
    background-color:${te.MAIN};

  }

  .slug{
    /* position: absolute;
    left:0;
    top:35rem; */
    display:block;
    min-height:0rem;
    width:100%;
    background-color:${te.MAIN} ;
  }
  .slug>div:nth-child(1){

  }
  .slug>div:nth-child(2){

    background-color: transparent;
    text-align: left;
    font-size:16px;
    padding:10px 15px;
    color :  ${Y.MAIN};
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

    background-color:${te.FOURTH};
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:${te.MAIN};
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    display:none;
  }
   .category>div:nth-child(3){
    display:none;
   }
    .category>div:nth-child(2){
    font-size:20px;
    text-transform:uppercase;
    width:100%;
    text-align: center;
    justify-content:center;
    line-height:25px;
    color :  ${Y.FIFTH};
    background-color:${te.FIFTH};
    padding:0.9% 0;
    font-weight:0;


  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div{
    border-left: double 1px ${Y.SECOND};
    margin: 1rem;

    line-height:25px;
    font-size : 16px;
    font-weight:700;
    padding-left:0.5rem;
    text-align:justify;
  display : block;
  color :  ${Y.MAIN};
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
  background-color:${te.MAIN};
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
  min-height:0rem;
  width:100%;
  background-color:${te.MAIN};
  overflow: hidden;
}
.promotion::after{
  content:'Promotion';
  font-size:16px;
  text-align: center;
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:grey ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
.square-box img{
  display:block;
  width:100%;
  aspect-ratio:1/1;
  display: block;
  margin:4px 0;
}
.square-box>div>span:nth-child(2){

  font-weight:600;
  text-transform: uppercase;
  font-size:11px;
  line-height:11px;
  color :  ${Y.SECOND};
}
.square-box>div>span:nth-child(1){
  margin-top:10px;
  color :  ${Y.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:14px;
  line-height:14px;
  color:${Y.MAIN}
}
.square-box>div>div{
  color :  ${Y.FOURTH};
  margin-top: 10px;
  text-decoration:underline;
  font-size:14px;
  color:${Y.MAIN};
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
  color: ${Y.SECOND};
  background-color:${te.MAIN};
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
  background-color:${te.MAIN};
  padding:0;
  margin:0;
}
  .box2-1 {
    grid-area: unset;
    background-color: ${te.MAIN};
}

.box2-2 {
    grid-area: unset;
    background-color: ${te.MAIN};
}

.box2-3 {
    grid-area: unset;
    background-color: ${te.MAIN};
}

.box2-4 {
    grid-area: unset;
    background-color: ${te.MAIN};
}

.box2-5 {
    grid-area: unset;
    background-color: ${te.MAIN};
}

.box2-6 {
    grid-area: unset;
    background-color: ${te.MAIN};
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
`;re(wh)`
    position: relative;
    width: 100%;
    height: 100vh;

    .moreInfo{
        width:100%;
        height:100%;
        background-color : powderblue;
    }

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
`;const _x=()=>{const{pathname:e}=un();return E.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),u.jsxs("div",{className:"home-screen",style:{backgroundColor:te.MAIN},children:[u.jsx(wh,{}),u.jsx(zx,{})]})},Ix="/assets/jpg_1-7lt4SJ85.jpg",Rx=({className:e})=>u.jsx("div",{className:e,children:u.jsxs("div",{className:"first",children:[u.jsx("div",{className:"img-content",children:u.jsx("img",{src:Ix,width:"100%",alt:"",srcset:""})}),u.jsx("div",{className:"text",children:"Livraison où que vous soyez à Kinshasa"})]})}),Ox=re(Rx)`
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

`,Ax="/assets/jpg_2-1pXFpQc3.jpg",Fx=({className:e})=>u.jsx("div",{className:e,children:u.jsx("div",{className:"image"})}),Ie=re(Fx)`
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

`,$x=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"image",children:u.jsx("img",{src:Ax,alt:""})})}),u.jsxs("div",{className:"second",children:[u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{}),u.jsx(Ie,{})]})]}),bx=re($x)`
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
`,Ux=()=>u.jsxs("div",{children:[u.jsx(Ox,{}),u.jsx(bx,{})]}),Bx=()=>{const{pathname:e}=un();return E.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),u.jsx("div",{children:u.jsx(Ux,{})})},Rl=()=>u.jsx("div",{className:"",style:{marginTop:"3rem",height:"60rem"},children:u.jsx("p",{style:{fontSize:"60px",textAlign:"center"},children:"404"})}),Hx=({className:e})=>{const{pathname:t}=un();E.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t]);const{articles:n,categories:r}=E.useContext(mo),{categorie:i}=Xu();return n.filter(o=>o.categorie==i).length==0?u.jsx(Rl,{}):u.jsxs("div",{style:{paddingTop:"3.3rem",backgroundColor:te.MAIN,minHeight:"75vh"},children:[u.jsx("div",{style:{fontSize:"22px",textTransform:"uppercase",fontWeight:"400",textAlign:"center",lineHeight:"35px",marginBottom:"10px",color:`${Y.FIFTH}`,padding:"0.9% 0",backgroundColor:te.FIFTH},children:i}),u.jsx("div",{className:e,children:n.filter(o=>o.categorie==i).map(o=>u.jsxs("div",{className:"square-box",children:[u.jsx(ft,{className:"link",to:`${be.Details}${o.id}`,children:u.jsx("img",{src:o.image[0],width:"100%",alt:"",className:"w-100"})}),u.jsxs("div",{children:[u.jsxs("span",{children:[u.jsx("span",{className:"squarePrice",children:o.price})," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!o.pricePromo||u.jsxs("span",{className:"promo-1",children:[o.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("span",{children:o.name}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${o.name}.%20Merci`,children:"Acheter maintenant"})})]})]},o.id))})]})},Wx=re(Hx)`

  width:100%;

    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2px 2px;

  overflow:hidden;

    background-color:${te.MAIN};

    a{
        color : ${Y.MAIN};
        text-decoration: none;
    }
      .promo-1{
    margin-left:10px;
    text-decoration:line-through ${Y.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${Y.SECOND};
  }


  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(1) .dollarSign{
    display:inline-block;
    transform: translate(-40%,0%);
    font-size:11px;

  }
  .square-box .promo-1{
    margin-left:15px;
    text-decoration:line-through ${Y.SECOND} .5px;
    font-size:11px;
    color: ${Y.SECOND};
  }
  .square-box{

  position: relative;
  min-height:0rem;
  width:100%;
  background-color:${te.MAIN};
  overflow: hidden;
}
.square-box img{
  display:block;
  width:100%;
  aspect-ratio:1/1;
  display: block;
  margin:4px 0;
  object-fit:fill;
  border: solid;
}
.square-box>div>span:nth-child(2){

  font-weight:600;
  text-transform: uppercase;
  font-size:11px;
  line-height:11px;
  color :  ${Y.SECOND};
}
.square-box>div>span:nth-child(1){
  margin-top:10px;
  color :  ${Y.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:14px;
  line-height:14px;
  color:${Y.MAIN}
}
.square-box>div>div{
  color :  ${Y.FOURTH};
  margin-top: 10px;
  text-decoration:underline;
  font-size:14px;
  color:${Y.MAIN};
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
  color: ${Y.SECOND};
  background-color:${te.MAIN};
  flex-direction: column;
  /* align-items:center; */
  justify-content: center;
  width:100%;
  height:25%;
}

`,Yx=({className:e})=>{const{pathname:t}=un(),[n,r]=E.useState(0),{articles:i}=E.useContext(mo),{id:o}=Xu(),l=i.filter(x=>x.id===Number(o))[0];if(!l)return u.jsx(Rl,{});const{name:a,image:s,price:c,pricePromo:d,longName:h,slug:m}=l;return E.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"}),r(0)},[t]),u.jsxs("div",{className:`${e} `,children:[u.jsx("div",{children:l.image.map((x,S,w)=>u.jsx("div",{className:`${S==n&&"activate"} imageBox`,onClick:()=>r(S),children:u.jsx("img",{src:x,alt:"",width:"100%",height:"100%"})},S))}),u.jsxs("div",{children:[u.jsx("div",{className:"_button",children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${a}.%20Merci`,children:"Acheter maintenant"})}),u.jsxs("span",{className:"price",children:[c," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d||u.jsxs("span",{className:"promo-1",children:[d," ",u.jsx("span",{className:"dollarSign2",children:"$"})]})," "]}),u.jsxs("span",{className:"maincolor",children:[a," "]}),u.jsxs("span",{className:"maincolor",children:[" ",h," "]}),u.jsxs("span",{className:"maincolor slug",children:[" ",m," "]})]})]})},Vx=re(Yx)`
background-color :${te.MAIN};
padding-bottom: 3rem;
padding-top : 3.4rem;

@media screen and (max-width:745px){
        &>div:nth-child(1){
        height: 60vh;
        width: 100%;
        flex-direction:row;
        display:flex;
        flex-wrap:nowrap;
          overflow-x: scroll;
        align-items:center;
        gap:5px;
        padding: 30px 20px;


    }


    .imageBox{
      flex-shrink:0 ;
      flex-grow:1;
      display: block;
        width:80% ;
        height:100% ;
        border: solid ${te.FIFTH} 1px;
    }

    img{
      
        width : 100%;
        height: 100%;
        object-fit:fill;
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
        padding:0 1rem;
    }


    .price span{        
        display:inline-block;
          }
    .price>.dollarSign{    
    transform:translate(-50%,-2%);
    font-size:16px;
    color: ${Y.MAIN};

  }
  .dollarSign2{
    font-size:14px;
    font-weight:0;
    line-height:14px;
    transform:translate(-10%,-3%);
    color :  ${Y.MAIN};

  }
    .promo-1{
    margin-left:10px;
    text-decoration:line-through ${Y.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${Y.SECOND};
  }
  .price{      
    font-size:20px;
      font-family:_salsa !important;
      color: ${Y.MAIN};
      text-align:center;
  }
  .maincolor{
    color:${Y.MAIN}
  }
  a{
    color : black;
    text-decoration: none;
  }
    ._button{
    text-align:center;
    padding:.3rem;
  border: solid 1px  ${Y.MAIN} ;

    border-radius:30px/30px;
    margin:1rem 1rem;

  }
  ._button>a{
    color: ${Y.MAIN};
  }
  .price+span{
    font-size : 26px;
  }


    
}


`,Qx=({className:e})=>{const{pathname:t}=un();E.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t]);const{information:n}=Xu(),r=Ex.filter(i=>i.title===n)[0];return u.jsxs("div",{className:`${e}`,children:[u.jsx("div",{children:r.title2}),u.jsx("div",{children:r.slug})]})},Gx=re(Qx)`

    min-height:80vh;
    min-width:100vw;
    padding:5rem .5rem 0 .5rem;
    background-color:${te.MAIN};
    &>div:nth-child(1){
        font-size:16px;
        text-decoration:underline;
        text-transform:uppercase;
        color:${Y.MAIN};
        letter-spacing:1px;
        text-align: center;

    }
    &>div:nth-child(1)+div{
        margin-top:.8rem;
        font-size:17px;
        color:${Y.MAIN};
        line-height:25px;
        text-align:center;
        margin:1.5rem;
    }

`,Kx=Dg(Ys(u.jsxs(Vt,{path:"/",element:u.jsx(Lx,{}),children:[u.jsx(Vt,{index:!0,element:u.jsx(_x,{})}),u.jsx(Vt,{path:be.Products,element:u.jsx(Bx,{})}),u.jsx(Vt,{path:`${be.Categorie}:categorie`,element:u.jsx(Wx,{})}),u.jsx(Vt,{path:`${be.Details}:id`,element:u.jsx(Vx,{})}),u.jsx(Vt,{path:`${be.Info}:information`,element:u.jsx(Gx,{})}),u.jsx(Vt,{path:"/error",element:u.jsx(Rl,{})}),u.jsx(Vt,{path:"*",element:u.jsx(Rl,{})})]})));Ga.createRoot(document.getElementById("root")).render(u.jsx(qe.StrictMode,{children:u.jsx(Fg,{router:Kx})}));
