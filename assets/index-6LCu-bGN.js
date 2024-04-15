function Gd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Kd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qd={exports:{}},Ml={},Zd={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ji=Symbol.for("react.element"),hh=Symbol.for("react.portal"),mh=Symbol.for("react.fragment"),gh=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),yh=Symbol.for("react.provider"),xh=Symbol.for("react.context"),wh=Symbol.for("react.forward_ref"),Sh=Symbol.for("react.suspense"),Ch=Symbol.for("react.memo"),jh=Symbol.for("react.lazy"),nc=Symbol.iterator;function kh(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var Xd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jd=Object.assign,ef={};function Wr(e,t,n){this.props=e,this.context=t,this.refs=ef,this.updater=n||Xd}Wr.prototype.isReactComponent={};Wr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tf(){}tf.prototype=Wr.prototype;function bs(e,t,n){this.props=e,this.context=t,this.refs=ef,this.updater=n||Xd}var Us=bs.prototype=new tf;Us.constructor=bs;Jd(Us,Wr.prototype);Us.isPureReactComponent=!0;var rc=Array.isArray,nf=Object.prototype.hasOwnProperty,Bs={current:null},rf={key:!0,ref:!0,__self:!0,__source:!0};function of(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)nf.call(t,r)&&!rf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ji,type:e,key:o,ref:l,props:i,_owner:Bs.current}}function Nh(e,t){return{$$typeof:Ji,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ji}function Mh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ic=/\/+/g;function na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Mh(""+e.key):t.toString(36)}function _o(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ji:case hh:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+na(l,0):r,rc(i)?(n="",e!=null&&(n=e.replace(ic,"$&/")+"/"),_o(i,t,n,"",function(c){return c})):i!=null&&(Hs(i)&&(i=Nh(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ic,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",rc(e))for(var a=0;a<e.length;a++){o=e[a];var s=r+na(o,a);l+=_o(o,t,n,s,i)}else if(s=kh(e),typeof s=="function")for(e=s.call(e),a=0;!(o=e.next()).done;)o=o.value,s=r+na(o,a++),l+=_o(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function fo(e,t,n){if(e==null)return e;var r=[],i=0;return _o(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Eh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Ro={transition:null},Lh={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Bs};Z.Children={map:fo,forEach:function(e,t,n){fo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fo(e,function(){t++}),t},toArray:function(e){return fo(e,function(t){return t})||[]},only:function(e){if(!Hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Z.Component=Wr;Z.Fragment=mh;Z.Profiler=vh;Z.PureComponent=bs;Z.StrictMode=gh;Z.Suspense=Sh;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lh;Z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Jd({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Bs.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)nf.call(t,s)&&!rf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ji,type:e.type,key:i,ref:o,props:r,_owner:l}};Z.createContext=function(e){return e={$$typeof:xh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yh,_context:e},e.Consumer=e};Z.createElement=of;Z.createFactory=function(e){var t=of.bind(null,e);return t.type=e,t};Z.createRef=function(){return{current:null}};Z.forwardRef=function(e){return{$$typeof:wh,render:e}};Z.isValidElement=Hs;Z.lazy=function(e){return{$$typeof:jh,_payload:{_status:-1,_result:e},_init:Eh}};Z.memo=function(e,t){return{$$typeof:Ch,type:e,compare:t===void 0?null:t}};Z.startTransition=function(e){var t=Ro.transition;Ro.transition={};try{e()}finally{Ro.transition=t}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(e,t){return Ze.current.useCallback(e,t)};Z.useContext=function(e){return Ze.current.useContext(e)};Z.useDebugValue=function(){};Z.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};Z.useEffect=function(e,t){return Ze.current.useEffect(e,t)};Z.useId=function(){return Ze.current.useId()};Z.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};Z.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};Z.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};Z.useMemo=function(e,t){return Ze.current.useMemo(e,t)};Z.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};Z.useRef=function(e){return Ze.current.useRef(e)};Z.useState=function(e){return Ze.current.useState(e)};Z.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};Z.useTransition=function(){return Ze.current.useTransition()};Z.version="18.2.0";Zd.exports=Z;var E=Zd.exports;const Ke=Kd(E),Dh=Gd({__proto__:null,default:Ke},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ph=E,Th=Symbol.for("react.element"),zh=Symbol.for("react.fragment"),Ih=Object.prototype.hasOwnProperty,_h=Ph.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rh={key:!0,ref:!0,__self:!0,__source:!0};function lf(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Ih.call(t,r)&&!Rh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Th,type:e,key:o,ref:l,props:i,_owner:_h.current}}Ml.Fragment=zh;Ml.jsx=lf;Ml.jsxs=lf;qd.exports=Ml;var u=qd.exports,Ra={},af={exports:{}},mt={},sf={exports:{}},uf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,F){var U=z.length;z.push(F);e:for(;0<U;){var q=U-1>>>1,ee=z[q];if(0<i(ee,F))z[q]=F,z[U]=ee,U=q;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var F=z[0],U=z.pop();if(U!==F){z[0]=U;e:for(var q=0,ee=z.length,at=ee>>>1;q<at;){var je=2*(q+1)-1,He=z[je],ke=je+1,st=z[ke];if(0>i(He,U))ke<ee&&0>i(st,He)?(z[q]=st,z[ke]=U,q=ke):(z[q]=He,z[je]=U,q=je);else if(ke<ee&&0>i(st,U))z[q]=st,z[ke]=U,q=ke;else break e}}return F}function i(z,F){var U=z.sortIndex-F.sortIndex;return U!==0?U:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],c=[],d=1,h=null,m=3,x=!1,S=!1,w=!1,N=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=z)r(c),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(c)}}function k(z){if(w=!1,g(z),!S)if(n(s)!==null)S=!0,Rt(L);else{var F=n(c);F!==null&&le(k,F.startTime-z)}}function L(z,F){S=!1,w&&(w=!1,p(P),P=-1),x=!0;var U=m;try{for(g(F),h=n(s);h!==null&&(!(h.expirationTime>F)||z&&!J());){var q=h.callback;if(typeof q=="function"){h.callback=null,m=h.priorityLevel;var ee=q(h.expirationTime<=F);F=e.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(s)&&r(s),g(F)}else r(s);h=n(s)}if(h!==null)var at=!0;else{var je=n(c);je!==null&&le(k,je.startTime-F),at=!1}return at}finally{h=null,m=U,x=!1}}var v=!1,j=null,P=-1,_=5,$=-1;function J(){return!(e.unstable_now()-$<_)}function Ce(){if(j!==null){var z=e.unstable_now();$=z;var F=!0;try{F=j(!0,z)}finally{F?ye():(v=!1,j=null)}}else v=!1}var ye;if(typeof f=="function")ye=function(){f(Ce)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,sn=Je.port2;Je.port1.onmessage=Ce,ye=function(){sn.postMessage(null)}}else ye=function(){N(Ce,0)};function Rt(z){j=z,v||(v=!0,ye())}function le(z,F){P=N(function(){z(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,Rt(L))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var F=3;break;default:F=m}var U=m;m=F;try{return z()}finally{m=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var U=m;m=z;try{return F()}finally{m=U}},e.unstable_scheduleCallback=function(z,F,U){var q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,z){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=U+ee,z={id:d++,callback:F,priorityLevel:z,startTime:U,expirationTime:ee,sortIndex:-1},U>q?(z.sortIndex=U,t(c,z),n(s)===null&&z===n(c)&&(w?(p(P),P=-1):w=!0,le(k,U-q))):(z.sortIndex=ee,t(s,z),S||x||(S=!0,Rt(L))),z},e.unstable_shouldYield=J,e.unstable_wrapCallback=function(z){var F=m;return function(){var U=m;m=F;try{return z.apply(this,arguments)}finally{m=U}}}})(uf);sf.exports=uf;var Ah=sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf=E,ht=Ah;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var df=new Set,zi={};function rr(e,t){Ir(e,t),Ir(e+"Capture",t)}function Ir(e,t){for(zi[e]=t,e=0;e<t.length;e++)df.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,Fh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},lc={};function Oh(e){return Aa.call(lc,e)?!0:Aa.call(oc,e)?!1:Fh.test(e)?lc[e]=!0:(oc[e]=!0,!1)}function $h(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function bh(e,t,n,r){if(t===null||typeof t>"u"||$h(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vs=/[\-:]([a-z])/g;function Ws(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vs,Ws);Be[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vs,Ws);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vs,Ws);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qs(e,t,n,r){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(bh(t,n,i,r)&&(n=null),r||i===null?Oh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var rn=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),Fa=Symbol.for("react.profiler"),ff=Symbol.for("react.provider"),pf=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),Oa=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),Ks=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),hf=Symbol.for("react.offscreen"),ac=Symbol.iterator;function Jr(e){return e===null||typeof e!="object"?null:(e=ac&&e[ac]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,ra;function pi(e){if(ra===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ra=t&&t[1]||""}return`
`+ra+e}var ia=!1;function oa(e,t){if(!e||ia)return"";ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var s=`
`+i[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{ia=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pi(e):""}function Uh(e){switch(e.tag){case 5:return pi(e.type);case 16:return pi("Lazy");case 13:return pi("Suspense");case 19:return pi("SuspenseList");case 0:case 2:case 15:return e=oa(e.type,!1),e;case 11:return e=oa(e.type.render,!1),e;case 1:return e=oa(e.type,!0),e;default:return""}}function ba(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case dr:return"Portal";case Fa:return"Profiler";case Ys:return"StrictMode";case Oa:return"Suspense";case $a:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case pf:return(e.displayName||"Context")+".Consumer";case ff:return(e._context.displayName||"Context")+".Provider";case Gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ks:return t=e.displayName||null,t!==null?t:ba(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return ba(e(t))}catch{}}return null}function Bh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ba(t);case 8:return t===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hh(e){var t=mf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ho(e){e._valueTracker||(e._valueTracker=Hh(e))}function gf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=mf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ua(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vf(e,t){t=t.checked,t!=null&&Qs(e,"checked",t,!1)}function Ba(e,t){vf(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ha(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ha(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ha(e,t,n){(t!=="number"||Zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hi=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(hi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function yf(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mo,wf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ii(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vh=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(e){Vh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wi[t]=wi[e]})});function Sf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||wi.hasOwnProperty(e)&&wi[e]?(""+t).trim():t+"px"}function Cf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Sf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wh=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qa(e,t){if(t){if(Wh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Lr=null,Dr=null;function fc(e){if(e=no(e)){if(typeof Ka!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Tl(t),Ka(e.stateNode,e.type,t))}}function jf(e){Lr?Dr?Dr.push(e):Dr=[e]:Lr=e}function kf(){if(Lr){var e=Lr,t=Dr;if(Dr=Lr=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function Nf(e,t){return e(t)}function Mf(){}var la=!1;function Ef(e,t,n){if(la)return e(t,n);la=!0;try{return Nf(e,t,n)}finally{la=!1,(Lr!==null||Dr!==null)&&(Mf(),kf())}}function _i(e,t){var n=e.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var qa=!1;if(Jt)try{var ei={};Object.defineProperty(ei,"passive",{get:function(){qa=!0}}),window.addEventListener("test",ei,ei),window.removeEventListener("test",ei,ei)}catch{qa=!1}function Qh(e,t,n,r,i,o,l,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Si=!1,Xo=null,Jo=!1,Za=null,Yh={onError:function(e){Si=!0,Xo=e}};function Gh(e,t,n,r,i,o,l,a,s){Si=!1,Xo=null,Qh.apply(Yh,arguments)}function Kh(e,t,n,r,i,o,l,a,s){if(Gh.apply(this,arguments),Si){if(Si){var c=Xo;Si=!1,Xo=null}else throw Error(D(198));Jo||(Jo=!0,Za=c)}}function ir(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(ir(e)!==e)throw Error(D(188))}function qh(e){var t=e.alternate;if(!t){if(t=ir(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return pc(i),e;if(o===r)return pc(i),t;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function Df(e){return e=qh(e),e!==null?Pf(e):null}function Pf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Pf(e);if(t!==null)return t;e=e.sibling}return null}var Tf=ht.unstable_scheduleCallback,hc=ht.unstable_cancelCallback,Zh=ht.unstable_shouldYield,Xh=ht.unstable_requestPaint,Me=ht.unstable_now,Jh=ht.unstable_getCurrentPriorityLevel,Zs=ht.unstable_ImmediatePriority,zf=ht.unstable_UserBlockingPriority,el=ht.unstable_NormalPriority,e1=ht.unstable_LowPriority,If=ht.unstable_IdlePriority,El=null,Bt=null;function t1(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(El,e,void 0,(e.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:i1,n1=Math.log,r1=Math.LN2;function i1(e){return e>>>=0,e===0?32:31-(n1(e)/r1|0)|0}var go=64,vo=4194304;function mi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=mi(a):(o&=l,o!==0&&(r=mi(o)))}else l=n&~i,l!==0?r=mi(l):o!==0&&(r=mi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Tt(t),i=1<<n,r|=e[n],t&=~i;return r}function o1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Tt(o),a=1<<l,s=i[l];s===-1?(!(a&n)||a&r)&&(i[l]=o1(a,t)):s<=t&&(e.expiredLanes|=a),o&=~a}}function Xa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _f(){var e=go;return go<<=1,!(go&4194240)&&(go=64),e}function aa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function eo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Tt(t),e[t]=n}function a1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Tt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Tt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Rf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Af,Js,Ff,Of,$f,Ja=!1,yo=[],Sn=null,Cn=null,jn=null,Ri=new Map,Ai=new Map,vn=[],s1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(e,t){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Ri.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ai.delete(t.pointerId)}}function ti(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=no(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function u1(e,t,n,r,i){switch(t){case"focusin":return Sn=ti(Sn,e,t,n,r,i),!0;case"dragenter":return Cn=ti(Cn,e,t,n,r,i),!0;case"mouseover":return jn=ti(jn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ri.set(o,ti(Ri.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Ai.set(o,ti(Ai.get(o)||null,e,t,n,r,i)),!0}return!1}function bf(e){var t=bn(e.target);if(t!==null){var n=ir(t);if(n!==null){if(t=n.tag,t===13){if(t=Lf(n),t!==null){e.blockedOn=t,$f(e.priority,function(){Ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=es(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ga=r,n.target.dispatchEvent(r),Ga=null}else return t=no(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function gc(e,t,n){Ao(e)&&n.delete(t)}function c1(){Ja=!1,Sn!==null&&Ao(Sn)&&(Sn=null),Cn!==null&&Ao(Cn)&&(Cn=null),jn!==null&&Ao(jn)&&(jn=null),Ri.forEach(gc),Ai.forEach(gc)}function ni(e,t){e.blockedOn===t&&(e.blockedOn=null,Ja||(Ja=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,c1)))}function Fi(e){function t(i){return ni(i,e)}if(0<yo.length){ni(yo[0],e);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sn!==null&&ni(Sn,e),Cn!==null&&ni(Cn,e),jn!==null&&ni(jn,e),Ri.forEach(t),Ai.forEach(t),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)bf(n),n.blockedOn===null&&vn.shift()}var Pr=rn.ReactCurrentBatchConfig,nl=!0;function d1(e,t,n,r){var i=oe,o=Pr.transition;Pr.transition=null;try{oe=1,eu(e,t,n,r)}finally{oe=i,Pr.transition=o}}function f1(e,t,n,r){var i=oe,o=Pr.transition;Pr.transition=null;try{oe=4,eu(e,t,n,r)}finally{oe=i,Pr.transition=o}}function eu(e,t,n,r){if(nl){var i=es(e,t,n,r);if(i===null)va(e,t,r,rl,n),mc(e,r);else if(u1(i,e,t,n,r))r.stopPropagation();else if(mc(e,r),t&4&&-1<s1.indexOf(e)){for(;i!==null;){var o=no(i);if(o!==null&&Af(o),o=es(e,t,n,r),o===null&&va(e,t,r,rl,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else va(e,t,r,null,n)}}var rl=null;function es(e,t,n,r){if(rl=null,e=qs(r),e=bn(e),e!==null)if(t=ir(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return rl=e,null}function Uf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jh()){case Zs:return 1;case zf:return 4;case el:case e1:return 16;case If:return 536870912;default:return 16}default:return 16}}var xn=null,tu=null,Fo=null;function Bf(){if(Fo)return Fo;var e,t=tu,n=t.length,r,i="value"in xn?xn.value:xn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Fo=i.slice(e,1<r?1-r:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xo(){return!0}function vc(){return!1}function gt(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xo:vc,this.isPropagationStopped=vc,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=gt(Qr),to=ve({},Qr,{view:0,detail:0}),p1=gt(to),sa,ua,ri,Ll=ve({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(sa=e.screenX-ri.screenX,ua=e.screenY-ri.screenY):ua=sa=0,ri=e),sa)},movementY:function(e){return"movementY"in e?e.movementY:ua}}),yc=gt(Ll),h1=ve({},Ll,{dataTransfer:0}),m1=gt(h1),g1=ve({},to,{relatedTarget:0}),ca=gt(g1),v1=ve({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=gt(v1),x1=ve({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),w1=gt(x1),S1=ve({},Qr,{data:0}),xc=gt(S1),C1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k1[e])?!!t[e]:!1}function ru(){return N1}var M1=ve({},to,{key:function(e){if(e.key){var t=C1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E1=gt(M1),L1=ve({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=gt(L1),D1=ve({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),P1=gt(D1),T1=ve({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=gt(T1),I1=ve({},Ll,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_1=gt(I1),R1=[9,13,27,32],iu=Jt&&"CompositionEvent"in window,Ci=null;Jt&&"documentMode"in document&&(Ci=document.documentMode);var A1=Jt&&"TextEvent"in window&&!Ci,Hf=Jt&&(!iu||Ci&&8<Ci&&11>=Ci),Sc=" ",Cc=!1;function Vf(e,t){switch(e){case"keyup":return R1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function F1(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(Cc=!0,Sc);case"textInput":return e=t.data,e===Sc&&Cc?null:e;default:return null}}function O1(e,t){if(pr)return e==="compositionend"||!iu&&Vf(e,t)?(e=Bf(),Fo=tu=xn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hf&&t.locale!=="ko"?null:t.data;default:return null}}var $1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$1[e.type]:t==="textarea"}function Qf(e,t,n,r){jf(r),t=il(t,"onChange"),0<t.length&&(n=new nu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ji=null,Oi=null;function b1(e){r0(e,0)}function Dl(e){var t=gr(e);if(gf(t))return e}function U1(e,t){if(e==="change")return t}var Yf=!1;if(Jt){var da;if(Jt){var fa="oninput"in document;if(!fa){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),fa=typeof kc.oninput=="function"}da=fa}else da=!1;Yf=da&&(!document.documentMode||9<document.documentMode)}function Nc(){ji&&(ji.detachEvent("onpropertychange",Gf),Oi=ji=null)}function Gf(e){if(e.propertyName==="value"&&Dl(Oi)){var t=[];Qf(t,Oi,e,qs(e)),Ef(b1,t)}}function B1(e,t,n){e==="focusin"?(Nc(),ji=t,Oi=n,ji.attachEvent("onpropertychange",Gf)):e==="focusout"&&Nc()}function H1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(Oi)}function V1(e,t){if(e==="click")return Dl(t)}function W1(e,t){if(e==="input"||e==="change")return Dl(t)}function Q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _t=typeof Object.is=="function"?Object.is:Q1;function $i(e,t){if(_t(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!_t(e[i],t[i]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var n=Mc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mc(n)}}function Kf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qf(){for(var e=window,t=Zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zo(e.document)}return t}function ou(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y1(e){var t=qf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Kf(n.ownerDocument.documentElement,n)){if(r!==null&&ou(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Ec(n,o);var l=Ec(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var G1=Jt&&"documentMode"in document&&11>=document.documentMode,hr=null,ts=null,ki=null,ns=!1;function Lc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ns||hr==null||hr!==Zo(r)||(r=hr,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&$i(ki,r)||(ki=r,r=il(ts,"onSelect"),0<r.length&&(t=new nu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function wo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var mr={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},pa={},Zf={};Jt&&(Zf=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Pl(e){if(pa[e])return pa[e];if(!mr[e])return e;var t=mr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zf)return pa[e]=t[n];return e}var Xf=Pl("animationend"),Jf=Pl("animationiteration"),e0=Pl("animationstart"),t0=Pl("transitionend"),n0=new Map,Dc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zn(e,t){n0.set(e,t),rr(t,[e])}for(var ha=0;ha<Dc.length;ha++){var ma=Dc[ha],K1=ma.toLowerCase(),q1=ma[0].toUpperCase()+ma.slice(1);zn(K1,"on"+q1)}zn(Xf,"onAnimationEnd");zn(Jf,"onAnimationIteration");zn(e0,"onAnimationStart");zn("dblclick","onDoubleClick");zn("focusin","onFocus");zn("focusout","onBlur");zn(t0,"onTransitionEnd");Ir("onMouseEnter",["mouseout","mouseover"]);Ir("onMouseLeave",["mouseout","mouseover"]);Ir("onPointerEnter",["pointerout","pointerover"]);Ir("onPointerLeave",["pointerout","pointerover"]);rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(gi));function Pc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Kh(r,t,void 0,e),e.currentTarget=null}function r0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==o&&i.isPropagationStopped())break e;Pc(i,a,c),o=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,c=a.currentTarget,a=a.listener,s!==o&&i.isPropagationStopped())break e;Pc(i,a,c),o=s}}}if(Jo)throw e=Za,Jo=!1,Za=null,e}function ce(e,t){var n=t[as];n===void 0&&(n=t[as]=new Set);var r=e+"__bubble";n.has(r)||(i0(t,e,2,!1),n.add(r))}function ga(e,t,n){var r=0;t&&(r|=4),i0(n,e,r,t)}var So="_reactListening"+Math.random().toString(36).slice(2);function bi(e){if(!e[So]){e[So]=!0,df.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||ga(n,!1,e),ga(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[So]||(t[So]=!0,ga("selectionchange",!1,t))}}function i0(e,t,n,r){switch(Uf(t)){case 1:var i=d1;break;case 4:i=f1;break;default:i=eu}n=i.bind(null,t,n,e),i=void 0,!qa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function va(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;l=l.return}for(;a!==null;){if(l=bn(a),l===null)return;if(s=l.tag,s===5||s===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Ef(function(){var c=o,d=qs(n),h=[];e:{var m=n0.get(e);if(m!==void 0){var x=nu,S=e;switch(e){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":x=E1;break;case"focusin":S="focus",x=ca;break;case"focusout":S="blur",x=ca;break;case"beforeblur":case"afterblur":x=ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=m1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=P1;break;case Xf:case Jf:case e0:x=y1;break;case t0:x=z1;break;case"scroll":x=p1;break;case"wheel":x=_1;break;case"copy":case"cut":case"paste":x=w1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=wc}var w=(t&4)!==0,N=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var f=c,g;f!==null;){g=f;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=_i(f,p),k!=null&&w.push(Ui(f,k,g)))),N)break;f=f.return}0<w.length&&(m=new x(m,S,null,n,d),h.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Ga&&(S=n.relatedTarget||n.fromElement)&&(bn(S)||S[en]))break e;if((x||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,x?(S=n.relatedTarget||n.toElement,x=c,S=S?bn(S):null,S!==null&&(N=ir(S),S!==N||S.tag!==5&&S.tag!==6)&&(S=null)):(x=null,S=c),x!==S)){if(w=yc,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=wc,k="onPointerLeave",p="onPointerEnter",f="pointer"),N=x==null?m:gr(x),g=S==null?m:gr(S),m=new w(k,f+"leave",x,n,d),m.target=N,m.relatedTarget=g,k=null,bn(d)===c&&(w=new w(p,f+"enter",S,n,d),w.target=g,w.relatedTarget=N,k=w),N=k,x&&S)t:{for(w=x,p=S,f=0,g=w;g;g=ur(g))f++;for(g=0,k=p;k;k=ur(k))g++;for(;0<f-g;)w=ur(w),f--;for(;0<g-f;)p=ur(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=ur(w),p=ur(p)}w=null}else w=null;x!==null&&Tc(h,m,x,w,!1),S!==null&&N!==null&&Tc(h,N,S,w,!0)}}e:{if(m=c?gr(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var L=U1;else if(jc(m))if(Yf)L=W1;else{L=H1;var v=B1}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=V1);if(L&&(L=L(e,c))){Qf(h,L,n,d);break e}v&&v(e,m,c),e==="focusout"&&(v=m._wrapperState)&&v.controlled&&m.type==="number"&&Ha(m,"number",m.value)}switch(v=c?gr(c):window,e){case"focusin":(jc(v)||v.contentEditable==="true")&&(hr=v,ts=c,ki=null);break;case"focusout":ki=ts=hr=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,Lc(h,n,d);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Lc(h,n,d)}var j;if(iu)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else pr?Vf(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Hf&&n.locale!=="ko"&&(pr||P!=="onCompositionStart"?P==="onCompositionEnd"&&pr&&(j=Bf()):(xn=d,tu="value"in xn?xn.value:xn.textContent,pr=!0)),v=il(c,P),0<v.length&&(P=new xc(P,e,null,n,d),h.push({event:P,listeners:v}),j?P.data=j:(j=Wf(n),j!==null&&(P.data=j)))),(j=A1?F1(e,n):O1(e,n))&&(c=il(c,"onBeforeInput"),0<c.length&&(d=new xc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=j))}r0(h,t)})}function Ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function il(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=_i(e,n),o!=null&&r.unshift(Ui(e,o,i)),o=_i(e,t),o!=null&&r.push(Ui(e,o,i))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Tc(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,i?(s=_i(n,o),s!=null&&l.unshift(Ui(n,s,a))):i||(s=_i(n,o),s!=null&&l.push(Ui(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var X1=/\r\n?/g,J1=/\u0000|\uFFFD/g;function zc(e){return(typeof e=="string"?e:""+e).replace(X1,`
`).replace(J1,"")}function Co(e,t,n){if(t=zc(t),zc(e)!==t&&n)throw Error(D(425))}function ol(){}var rs=null,is=null;function os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ls=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,Ic=typeof Promise=="function"?Promise:void 0,tm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ic<"u"?function(e){return Ic.resolve(null).then(e).catch(nm)}:ls;function nm(e){setTimeout(function(){throw e})}function ya(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Fi(t)}function kn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Yr,Bi="__reactProps$"+Yr,en="__reactContainer$"+Yr,as="__reactEvents$"+Yr,rm="__reactListeners$"+Yr,im="__reactHandles$"+Yr;function bn(e){var t=e[Ut];if(t)return t;for(var n=e.parentNode;n;){if(t=n[en]||n[Ut]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_c(e);e!==null;){if(n=e[Ut])return n;e=_c(e)}return t}e=n,n=e.parentNode}return null}function no(e){return e=e[Ut]||e[en],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Tl(e){return e[Bi]||null}var ss=[],vr=-1;function In(e){return{current:e}}function fe(e){0>vr||(e.current=ss[vr],ss[vr]=null,vr--)}function ue(e,t){vr++,ss[vr]=e.current,e.current=t}var Tn={},Ye=In(Tn),it=In(!1),qn=Tn;function _r(e,t){var n=e.type.contextTypes;if(!n)return Tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function ll(){fe(it),fe(Ye)}function Rc(e,t,n){if(Ye.current!==Tn)throw Error(D(168));ue(Ye,t),ue(it,n)}function o0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,Bh(e)||"Unknown",i));return ve({},n,r)}function al(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tn,qn=Ye.current,ue(Ye,e),ue(it,it.current),!0}function Ac(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=o0(e,t,qn),r.__reactInternalMemoizedMergedChildContext=e,fe(it),fe(Ye),ue(Ye,e)):fe(it),ue(it,n)}var Gt=null,zl=!1,xa=!1;function l0(e){Gt===null?Gt=[e]:Gt.push(e)}function om(e){zl=!0,l0(e)}function _n(){if(!xa&&Gt!==null){xa=!0;var e=0,t=oe;try{var n=Gt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Gt=null,zl=!1}catch(i){throw Gt!==null&&(Gt=Gt.slice(e+1)),Tf(Zs,_n),i}finally{oe=t,xa=!1}}return null}var yr=[],xr=0,sl=null,ul=0,xt=[],wt=0,Zn=null,Kt=1,qt="";function On(e,t){yr[xr++]=ul,yr[xr++]=sl,sl=e,ul=t}function a0(e,t,n){xt[wt++]=Kt,xt[wt++]=qt,xt[wt++]=Zn,Zn=e;var r=Kt;e=qt;var i=32-Tt(r)-1;r&=~(1<<i),n+=1;var o=32-Tt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Kt=1<<32-Tt(t)+i|n<<i|r,qt=o+e}else Kt=1<<o|n<<i|r,qt=e}function lu(e){e.return!==null&&(On(e,1),a0(e,1,0))}function au(e){for(;e===sl;)sl=yr[--xr],yr[xr]=null,ul=yr[--xr],yr[xr]=null;for(;e===Zn;)Zn=xt[--wt],xt[wt]=null,qt=xt[--wt],xt[wt]=null,Kt=xt[--wt],xt[wt]=null}var pt=null,ft=null,he=!1,Pt=null;function s0(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,pt=e,ft=kn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,pt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Zn!==null?{id:Kt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,pt=e,ft=null,!0):!1;default:return!1}}function us(e){return(e.mode&1)!==0&&(e.flags&128)===0}function cs(e){if(he){var t=ft;if(t){var n=t;if(!Fc(e,t)){if(us(e))throw Error(D(418));t=kn(n.nextSibling);var r=pt;t&&Fc(e,t)?s0(r,n):(e.flags=e.flags&-4097|2,he=!1,pt=e)}}else{if(us(e))throw Error(D(418));e.flags=e.flags&-4097|2,he=!1,pt=e}}}function Oc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pt=e}function jo(e){if(e!==pt)return!1;if(!he)return Oc(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!os(e.type,e.memoizedProps)),t&&(t=ft)){if(us(e))throw u0(),Error(D(418));for(;t;)s0(e,t),t=kn(t.nextSibling)}if(Oc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=kn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=pt?kn(e.stateNode.nextSibling):null;return!0}function u0(){for(var e=ft;e;)e=kn(e.nextSibling)}function Rr(){ft=pt=null,he=!1}function su(e){Pt===null?Pt=[e]:Pt.push(e)}var lm=rn.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var cl=In(null),dl=null,wr=null,uu=null;function cu(){uu=wr=dl=null}function du(e){var t=cl.current;fe(cl),e._currentValue=t}function ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){dl=e,uu=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function jt(e){var t=e._currentValue;if(uu!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(dl===null)throw Error(D(308));wr=e,dl.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var Un=null;function fu(e){Un===null?Un=[e]:Un.push(e)}function c0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fu(t)):(n.next=i.next,i.next=n),t.interleaved=n,tn(e,r)}function tn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,tn(e,n)}return i=r.interleaved,i===null?(t.next=t,fu(r)):(t.next=i.next,i.next=t),r.interleaved=t,tn(e,n)}function $o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}function $c(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fl(e,t,n,r){var i=e.updateQueue;gn=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var s=a,c=s.next;s.next=null,l===null?o=c:l.next=c,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=s))}if(o!==null){var h=i.baseState;l=0,d=c=s=null,a=o;do{var m=a.lane,x=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,w=a;switch(m=t,x=n,w.tag){case 1:if(S=w.payload,typeof S=="function"){h=S.call(x,h,m);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=w.payload,m=typeof S=="function"?S.call(x,h,m):S,m==null)break e;h=ve({},h,m);break e;case 2:gn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=x,s=h):d=d.next=x,l|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(s=h),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Jn|=l,e.lanes=l,e.memoizedState=h}}function bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var f0=new cf.Component().refs;function fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Il={isMounted:function(e){return(e=e._reactInternals)?ir(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=En(e),o=Zt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(zt(t,e,i,r),$o(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=En(e),o=Zt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(zt(t,e,i,r),$o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=En(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(zt(t,e,r,n),$o(t,e,r))}};function Uc(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!$i(n,r)||!$i(i,o):!0}function p0(e,t,n){var r=!1,i=Tn,o=t.contextType;return typeof o=="object"&&o!==null?o=jt(o):(i=ot(t)?qn:Ye.current,r=t.contextTypes,o=(r=r!=null)?_r(e,i):Tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Il.enqueueReplaceState(t,t.state,null)}function ps(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=f0,pu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=jt(o):(o=ot(t)?qn:Ye.current,i.context=_r(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(fs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Il.enqueueReplaceState(i,i.state,null),fl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===f0&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function ko(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Hc(e){var t=e._init;return t(e._payload)}function h0(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Ln(p,f),p.index=0,p.sibling=null,p}function o(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,k){return f===null||f.tag!==6?(f=Ma(g,p.mode,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function s(p,f,g,k){var L=g.type;return L===fr?d(p,f,g.props.children,k,g.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mn&&Hc(L)===f.type)?(k=i(f,g.props),k.ref=ii(p,f,g),k.return=p,k):(k=Wo(g.type,g.key,g.props,null,p.mode,k),k.ref=ii(p,f,g),k.return=p,k)}function c(p,f,g,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Ea(g,p.mode,k),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,k,L){return f===null||f.tag!==7?(f=Yn(g,p.mode,k,L),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ma(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case po:return g=Wo(f.type,f.key,f.props,null,p.mode,g),g.ref=ii(p,null,f),g.return=p,g;case dr:return f=Ea(f,p.mode,g),f.return=p,f;case mn:var k=f._init;return h(p,k(f._payload),g)}if(hi(f)||Jr(f))return f=Yn(f,p.mode,g,null),f.return=p,f;ko(p,f)}return null}function m(p,f,g,k){var L=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:a(p,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case po:return g.key===L?s(p,f,g,k):null;case dr:return g.key===L?c(p,f,g,k):null;case mn:return L=g._init,m(p,f,L(g._payload),k)}if(hi(g)||Jr(g))return L!==null?null:d(p,f,g,k,null);ko(p,g)}return null}function x(p,f,g,k,L){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,a(f,p,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case po:return p=p.get(k.key===null?g:k.key)||null,s(f,p,k,L);case dr:return p=p.get(k.key===null?g:k.key)||null,c(f,p,k,L);case mn:var v=k._init;return x(p,f,g,v(k._payload),L)}if(hi(k)||Jr(k))return p=p.get(g)||null,d(f,p,k,L,null);ko(f,k)}return null}function S(p,f,g,k){for(var L=null,v=null,j=f,P=f=0,_=null;j!==null&&P<g.length;P++){j.index>P?(_=j,j=null):_=j.sibling;var $=m(p,j,g[P],k);if($===null){j===null&&(j=_);break}e&&j&&$.alternate===null&&t(p,j),f=o($,f,P),v===null?L=$:v.sibling=$,v=$,j=_}if(P===g.length)return n(p,j),he&&On(p,P),L;if(j===null){for(;P<g.length;P++)j=h(p,g[P],k),j!==null&&(f=o(j,f,P),v===null?L=j:v.sibling=j,v=j);return he&&On(p,P),L}for(j=r(p,j);P<g.length;P++)_=x(j,p,P,g[P],k),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?P:_.key),f=o(_,f,P),v===null?L=_:v.sibling=_,v=_);return e&&j.forEach(function(J){return t(p,J)}),he&&On(p,P),L}function w(p,f,g,k){var L=Jr(g);if(typeof L!="function")throw Error(D(150));if(g=L.call(g),g==null)throw Error(D(151));for(var v=L=null,j=f,P=f=0,_=null,$=g.next();j!==null&&!$.done;P++,$=g.next()){j.index>P?(_=j,j=null):_=j.sibling;var J=m(p,j,$.value,k);if(J===null){j===null&&(j=_);break}e&&j&&J.alternate===null&&t(p,j),f=o(J,f,P),v===null?L=J:v.sibling=J,v=J,j=_}if($.done)return n(p,j),he&&On(p,P),L;if(j===null){for(;!$.done;P++,$=g.next())$=h(p,$.value,k),$!==null&&(f=o($,f,P),v===null?L=$:v.sibling=$,v=$);return he&&On(p,P),L}for(j=r(p,j);!$.done;P++,$=g.next())$=x(j,p,P,$.value,k),$!==null&&(e&&$.alternate!==null&&j.delete($.key===null?P:$.key),f=o($,f,P),v===null?L=$:v.sibling=$,v=$);return e&&j.forEach(function(Ce){return t(p,Ce)}),he&&On(p,P),L}function N(p,f,g,k){if(typeof g=="object"&&g!==null&&g.type===fr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case po:e:{for(var L=g.key,v=f;v!==null;){if(v.key===L){if(L=g.type,L===fr){if(v.tag===7){n(p,v.sibling),f=i(v,g.props.children),f.return=p,p=f;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mn&&Hc(L)===v.type){n(p,v.sibling),f=i(v,g.props),f.ref=ii(p,v,g),f.return=p,p=f;break e}n(p,v);break}else t(p,v);v=v.sibling}g.type===fr?(f=Yn(g.props.children,p.mode,k,g.key),f.return=p,p=f):(k=Wo(g.type,g.key,g.props,null,p.mode,k),k.ref=ii(p,f,g),k.return=p,p=k)}return l(p);case dr:e:{for(v=g.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=Ea(g,p.mode,k),f.return=p,p=f}return l(p);case mn:return v=g._init,N(p,f,v(g._payload),k)}if(hi(g))return S(p,f,g,k);if(Jr(g))return w(p,f,g,k);ko(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ma(g,p.mode,k),f.return=p,p=f),l(p)):n(p,f)}return N}var Ar=h0(!0),m0=h0(!1),ro={},Ht=In(ro),Hi=In(ro),Vi=In(ro);function Bn(e){if(e===ro)throw Error(D(174));return e}function hu(e,t){switch(ue(Vi,t),ue(Hi,e),ue(Ht,ro),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Wa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Wa(t,e)}fe(Ht),ue(Ht,t)}function Fr(){fe(Ht),fe(Hi),fe(Vi)}function g0(e){Bn(Vi.current);var t=Bn(Ht.current),n=Wa(t,e.type);t!==n&&(ue(Hi,e),ue(Ht,n))}function mu(e){Hi.current===e&&(fe(Ht),fe(Hi))}var me=In(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var wa=[];function gu(){for(var e=0;e<wa.length;e++)wa[e]._workInProgressVersionPrimary=null;wa.length=0}var bo=rn.ReactCurrentDispatcher,Sa=rn.ReactCurrentBatchConfig,Xn=0,ge=null,De=null,Re=null,hl=!1,Ni=!1,Wi=0,am=0;function Ve(){throw Error(D(321))}function vu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_t(e[n],t[n]))return!1;return!0}function yu(e,t,n,r,i,o){if(Xn=o,ge=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bo.current=e===null||e.memoizedState===null?dm:fm,e=n(r,i),Ni){o=0;do{if(Ni=!1,Wi=0,25<=o)throw Error(D(301));o+=1,Re=De=null,t.updateQueue=null,bo.current=pm,e=n(r,i)}while(Ni)}if(bo.current=ml,t=De!==null&&De.next!==null,Xn=0,Re=De=ge=null,hl=!1,t)throw Error(D(300));return e}function xu(){var e=Wi!==0;return Wi=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ge.memoizedState=Re=e:Re=Re.next=e,Re}function kt(){if(De===null){var e=ge.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Re===null?ge.memoizedState:Re.next;if(t!==null)Re=t,De=e;else{if(e===null)throw Error(D(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Re===null?ge.memoizedState=Re=e:Re=Re.next=e}return Re}function Qi(e,t){return typeof t=="function"?t(e):t}function Ca(e){var t=kt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=De,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,s=null,c=o;do{var d=c.lane;if((Xn&d)===d)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=h,l=r):s=s.next=h,ge.lanes|=d,Jn|=d}c=c.next}while(c!==null&&c!==o);s===null?l=r:s.next=a,_t(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ge.lanes|=o,Jn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ja(e){var t=kt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);_t(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function v0(){}function y0(e,t){var n=ge,r=kt(),i=t(),o=!_t(r.memoizedState,i);if(o&&(r.memoizedState=i,nt=!0),r=r.queue,wu(S0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,Yi(9,w0.bind(null,n,r,i,t),void 0,null),Oe===null)throw Error(D(349));Xn&30||x0(n,t,i)}return i}function x0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function w0(e,t,n,r){t.value=n,t.getSnapshot=r,C0(t)&&j0(e)}function S0(e,t,n){return n(function(){C0(t)&&j0(e)})}function C0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_t(e,n)}catch{return!0}}function j0(e){var t=tn(e,1);t!==null&&zt(t,e,1,-1)}function Vc(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=cm.bind(null,ge,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ge.updateQueue,t===null?(t={lastEffect:null,stores:null},ge.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function k0(){return kt().memoizedState}function Uo(e,t,n,r){var i=Ot();ge.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function _l(e,t,n,r){var i=kt();r=r===void 0?null:r;var o=void 0;if(De!==null){var l=De.memoizedState;if(o=l.destroy,r!==null&&vu(r,l.deps)){i.memoizedState=Yi(t,n,o,r);return}}ge.flags|=e,i.memoizedState=Yi(1|t,n,o,r)}function Wc(e,t){return Uo(8390656,8,e,t)}function wu(e,t){return _l(2048,8,e,t)}function N0(e,t){return _l(4,2,e,t)}function M0(e,t){return _l(4,4,e,t)}function E0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function L0(e,t,n){return n=n!=null?n.concat([e]):null,_l(4,4,E0.bind(null,t,e),n)}function Su(){}function D0(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function P0(e,t){var n=kt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function T0(e,t,n){return Xn&21?(_t(n,t)||(n=_f(),ge.lanes|=n,Jn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function sm(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Sa.transition;Sa.transition={};try{e(!1),t()}finally{oe=n,Sa.transition=r}}function z0(){return kt().memoizedState}function um(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},I0(e))_0(t,n);else if(n=c0(e,t,n,r),n!==null){var i=qe();zt(n,e,r,i),R0(n,t,r)}}function cm(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(I0(e))_0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,l)){var s=t.interleaved;s===null?(i.next=i,fu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=c0(e,t,i,r),n!==null&&(i=qe(),zt(n,e,r,i),R0(n,t,r))}}function I0(e){var t=e.alternate;return e===ge||t!==null&&t===ge}function _0(e,t){Ni=hl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function R0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xs(e,n)}}var ml={readContext:jt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},dm={readContext:jt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:jt,useEffect:Wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4194308,4,E0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=um.bind(null,ge,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:Vc,useDebugValue:Su,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=Vc(!1),t=e[0];return e=sm.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ge,i=Ot();if(he){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Oe===null)throw Error(D(349));Xn&30||x0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Wc(S0.bind(null,r,o,e),[e]),r.flags|=2048,Yi(9,w0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ot(),t=Oe.identifierPrefix;if(he){var n=qt,r=Kt;n=(r&~(1<<32-Tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},fm={readContext:jt,useCallback:D0,useContext:jt,useEffect:wu,useImperativeHandle:L0,useInsertionEffect:N0,useLayoutEffect:M0,useMemo:P0,useReducer:Ca,useRef:k0,useState:function(){return Ca(Qi)},useDebugValue:Su,useDeferredValue:function(e){var t=kt();return T0(t,De.memoizedState,e)},useTransition:function(){var e=Ca(Qi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:v0,useSyncExternalStore:y0,useId:z0,unstable_isNewReconciler:!1},pm={readContext:jt,useCallback:D0,useContext:jt,useEffect:wu,useImperativeHandle:L0,useInsertionEffect:N0,useLayoutEffect:M0,useMemo:P0,useReducer:ja,useRef:k0,useState:function(){return ja(Qi)},useDebugValue:Su,useDeferredValue:function(e){var t=kt();return De===null?t.memoizedState=e:T0(t,De.memoizedState,e)},useTransition:function(){var e=ja(Qi)[0],t=kt().memoizedState;return[e,t]},useMutableSource:v0,useSyncExternalStore:y0,useId:z0,unstable_isNewReconciler:!1};function Or(e,t){try{var n="",r=t;do n+=Uh(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ka(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hm=typeof WeakMap=="function"?WeakMap:Map;function A0(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,ks=r),hs(e,t)},n}function F0(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){hs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hs(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new hm;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Lm.bind(null,e,t,n),t.then(e,e))}function Yc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var mm=rn.ReactCurrentOwner,nt=!1;function Ge(e,t,n,r){t.child=e===null?m0(t,null,n,r):Ar(t,e.child,n,r)}function Kc(e,t,n,r,i){n=n.render;var o=t.ref;return Tr(t,i),r=yu(e,t,n,r,o,i),n=xu(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(he&&n&&lu(t),t.flags|=1,Ge(e,t,r,i),t.child)}function qc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Du(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,O0(e,t,o,r,i)):(e=Wo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:$i,n(l,r)&&e.ref===t.ref)return nn(e,t,i)}return t.flags|=1,e=Ln(o,r),e.ref=t.ref,e.return=t,t.child=e}function O0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if($i(o,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,nn(e,t,i)}return ms(e,t,n,r,i)}function $0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Cr,ct),ct|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(Cr,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ue(Cr,ct),ct|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ue(Cr,ct),ct|=r;return Ge(e,t,i,n),t.child}function b0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ms(e,t,n,r,i){var o=ot(n)?qn:Ye.current;return o=_r(t,o),Tr(t,i),n=yu(e,t,n,r,o,i),r=xu(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,nn(e,t,i)):(he&&r&&lu(t),t.flags|=1,Ge(e,t,n,i),t.child)}function Zc(e,t,n,r,i){if(ot(n)){var o=!0;al(t)}else o=!1;if(Tr(t,i),t.stateNode===null)Bo(e,t),p0(t,n,r),ps(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=jt(c):(c=ot(n)?qn:Ye.current,c=_r(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==c)&&Bc(t,l,r,c),gn=!1;var m=t.memoizedState;l.state=m,fl(t,r,l,i),s=t.memoizedState,a!==r||m!==s||it.current||gn?(typeof d=="function"&&(fs(t,n,d,r),s=t.memoizedState),(a=gn||Uc(t,n,a,r,m,s,c))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,d0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Et(t.type,a),l.props=c,h=t.pendingProps,m=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=jt(s):(s=ot(n)?qn:Ye.current,s=_r(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==h||m!==s)&&Bc(t,l,r,s),gn=!1,m=t.memoizedState,l.state=m,fl(t,r,l,i);var S=t.memoizedState;a!==h||m!==S||it.current||gn?(typeof x=="function"&&(fs(t,n,x,r),S=t.memoizedState),(c=gn||Uc(t,n,c,r,m,S,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return gs(e,t,n,r,o,i)}function gs(e,t,n,r,i,o){b0(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Ac(t,n,!1),nn(e,t,o);r=t.stateNode,mm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ar(t,e.child,null,o),t.child=Ar(t,null,a,o)):Ge(e,t,a,o),t.memoizedState=r.state,i&&Ac(t,n,!0),t.child}function U0(e){var t=e.stateNode;t.pendingContext?Rc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rc(e,t.context,!1),hu(e,t.containerInfo)}function Xc(e,t,n,r,i){return Rr(),su(i),t.flags|=256,Ge(e,t,n,r),t.child}var vs={dehydrated:null,treeContext:null,retryLane:0};function ys(e){return{baseLanes:e,cachePool:null,transitions:null}}function B0(e,t,n){var r=t.pendingProps,i=me.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ue(me,i&1),e===null)return cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Fl(l,r,0,null),e=Yn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ys(n),t.memoizedState=vs,e):Cu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return gm(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ln(i,s),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Ln(a,o):(o=Yn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?ys(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=vs,r}return o=e.child,e=o.sibling,r=Ln(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cu(e,t){return t=Fl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function No(e,t,n,r){return r!==null&&su(r),Ar(t,e.child,null,n),e=Cu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gm(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ka(Error(D(422))),No(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Fl({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ar(t,e.child,null,l),t.child.memoizedState=ys(l),t.memoizedState=vs,o);if(!(t.mode&1))return No(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(D(419)),r=ka(o,r,void 0),No(e,t,l,r)}if(a=(l&e.childLanes)!==0,nt||a){if(r=Oe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,tn(e,i),zt(r,e,i,-1))}return Lu(),r=ka(Error(D(421))),No(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dm.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=kn(i.nextSibling),pt=t,he=!0,Pt=null,e!==null&&(xt[wt++]=Kt,xt[wt++]=qt,xt[wt++]=Zn,Kt=e.id,qt=e.overflow,Zn=t),t=Cu(t,r.children),t.flags|=4096,t)}function Jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ds(e.return,t,n)}function Na(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function H0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ge(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jc(e,n,t);else if(e.tag===19)Jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Na(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&pl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Na(t,!0,n,null,o);break;case"together":Na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function nn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vm(e,t,n){switch(t.tag){case 3:U0(t),Rr();break;case 5:g0(t);break;case 1:ot(t.type)&&al(t);break;case 4:hu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ue(cl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?B0(e,t,n):(ue(me,me.current&1),e=nn(e,t,n),e!==null?e.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return H0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,$0(e,t,n)}return nn(e,t,n)}var V0,xs,W0,Q0;V0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xs=function(){};W0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Bn(Ht.current);var o=null;switch(n){case"input":i=Ua(e,i),r=Ua(e,r),o=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),o=[];break;case"textarea":i=Va(e,i),r=Va(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ol)}Qa(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var s=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(o=o||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zi.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ce("scroll",e),o||a===s||(o=[])):(o=o||[]).push(c,s))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Q0=function(e,t,n,r){n!==r&&(t.flags|=4)};function oi(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function We(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ym(e,t,n){var r=t.pendingProps;switch(au(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(t),null;case 1:return ot(t.type)&&ll(),We(t),null;case 3:return r=t.stateNode,Fr(),fe(it),fe(Ye),gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Es(Pt),Pt=null))),xs(e,t),We(t),null;case 5:mu(t);var i=Bn(Vi.current);if(n=t.type,e!==null&&t.stateNode!=null)W0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return We(t),null}if(e=Bn(Ht.current),jo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ut]=t,r[Bi]=o,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(i=0;i<gi.length;i++)ce(gi[i],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":sc(r,o),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ce("invalid",r);break;case"textarea":cc(r,o),ce("invalid",r)}Qa(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Co(r.textContent,a,e),i=["children",""+a]):zi.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ce("scroll",r)}switch(n){case"input":ho(r),uc(r,o,!0);break;case"textarea":ho(r),dc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ol)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ut]=t,e[Bi]=r,V0(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ya(n,r),n){case"dialog":ce("cancel",e),ce("close",e),i=r;break;case"iframe":case"object":case"embed":ce("load",e),i=r;break;case"video":case"audio":for(i=0;i<gi.length;i++)ce(gi[i],e);i=r;break;case"source":ce("error",e),i=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),i=r;break;case"details":ce("toggle",e),i=r;break;case"input":sc(e,r),i=Ua(e,r),ce("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),ce("invalid",e);break;case"textarea":cc(e,r),i=Va(e,r),ce("invalid",e);break;default:i=r}Qa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="style"?Cf(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&wf(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ii(e,s):typeof s=="number"&&Ii(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zi.hasOwnProperty(o)?s!=null&&o==="onScroll"&&ce("scroll",e):s!=null&&Qs(e,o,s,l))}switch(n){case"input":ho(e),uc(e,r,!1);break;case"textarea":ho(e),dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Er(e,!!r.multiple,o,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ol)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return We(t),null;case 6:if(e&&t.stateNode!=null)Q0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=Bn(Vi.current),Bn(Ht.current),jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ut]=t,(o=r.nodeValue!==n)&&(e=pt,e!==null))switch(e.tag){case 3:Co(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Co(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=t,t.stateNode=r}return We(t),null;case 13:if(fe(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&ft!==null&&t.mode&1&&!(t.flags&128))u0(),Rr(),t.flags|=98560,o=!1;else if(o=jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(D(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[Ut]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;We(t),o=!1}else Pt!==null&&(Es(Pt),Pt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Pe===0&&(Pe=3):Lu())),t.updateQueue!==null&&(t.flags|=4),We(t),null);case 4:return Fr(),xs(e,t),e===null&&bi(t.stateNode.containerInfo),We(t),null;case 10:return du(t.type._context),We(t),null;case 17:return ot(t.type)&&ll(),We(t),null;case 19:if(fe(me),o=t.memoizedState,o===null)return We(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)oi(o,!1);else{if(Pe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=pl(e),l!==null){for(t.flags|=128,oi(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(me,me.current&1|2),t.child}e=e.sibling}o.tail!==null&&Me()>$r&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304)}else{if(!r)if(e=pl(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!he)return We(t),null}else 2*Me()-o.renderingStartTime>$r&&n!==1073741824&&(t.flags|=128,r=!0,oi(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Me(),t.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),t):(We(t),null);case 22:case 23:return Eu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ct&1073741824&&(We(t),t.subtreeFlags&6&&(t.flags|=8192)):We(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function xm(e,t){switch(au(t),t.tag){case 1:return ot(t.type)&&ll(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),fe(it),fe(Ye),gu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mu(t),null;case 13:if(fe(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return fe(me),null;case 4:return Fr(),null;case 10:return du(t.type._context),null;case 22:case 23:return Eu(),null;case 24:return null;default:return null}}var Mo=!1,Qe=!1,wm=typeof WeakSet=="function"?WeakSet:Set,I=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function ws(e,t,n){try{n()}catch(r){we(e,t,r)}}var ed=!1;function Sm(e,t){if(rs=nl,e=qf(),ou(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,c=0,d=0,h=e,m=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(a=l+i),h!==o||r!==0&&h.nodeType!==3||(s=l+r),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++c===i&&(a=l),m===o&&++d===r&&(s=l),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(is={focusedElem:e,selectionRange:n},nl=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var w=S.memoizedProps,N=S.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:Et(t.type,w),N);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){we(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return S=ed,ed=!1,S}function Mi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ws(t,n,o)}i=i.next}while(i!==r)}}function Rl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ss(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Y0(e){var t=e.alternate;t!==null&&(e.alternate=null,Y0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[Bi],delete t[as],delete t[rm],delete t[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function G0(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||G0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ol));else if(r!==4&&(e=e.child,e!==null))for(Cs(e,t,n),e=e.sibling;e!==null;)Cs(e,t,n),e=e.sibling}function js(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(js(e,t,n),e=e.sibling;e!==null;)js(e,t,n),e=e.sibling}var be=null,Lt=!1;function fn(e,t,n){for(n=n.child;n!==null;)K0(e,t,n),n=n.sibling}function K0(e,t,n){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(El,n)}catch{}switch(n.tag){case 5:Qe||Sr(n,t);case 6:var r=be,i=Lt;be=null,fn(e,t,n),be=r,Lt=i,be!==null&&(Lt?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Lt?(e=be,n=n.stateNode,e.nodeType===8?ya(e.parentNode,n):e.nodeType===1&&ya(e,n),Fi(e)):ya(be,n.stateNode));break;case 4:r=be,i=Lt,be=n.stateNode.containerInfo,Lt=!0,fn(e,t,n),be=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ws(n,t,l),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Qe&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,fn(e,t,n),Qe=r):fn(e,t,n);break;default:fn(e,t,n)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new wm),t.forEach(function(r){var i=Pm.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:be=a.stateNode,Lt=!1;break e;case 3:be=a.stateNode.containerInfo,Lt=!0;break e;case 4:be=a.stateNode.containerInfo,Lt=!0;break e}a=a.return}if(be===null)throw Error(D(160));K0(o,l,i),be=null,Lt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){we(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)q0(t,e),t=t.sibling}function q0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mt(t,e),Ft(e),r&4){try{Mi(3,e,e.return),Rl(3,e)}catch(w){we(e,e.return,w)}try{Mi(5,e,e.return)}catch(w){we(e,e.return,w)}}break;case 1:Mt(t,e),Ft(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(Mt(t,e),Ft(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var i=e.stateNode;try{Ii(i,"")}catch(w){we(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vf(i,o),Ya(a,l);var c=Ya(a,o);for(l=0;l<s.length;l+=2){var d=s[l],h=s[l+1];d==="style"?Cf(i,h):d==="dangerouslySetInnerHTML"?wf(i,h):d==="children"?Ii(i,h):Qs(i,d,h,c)}switch(a){case"input":Ba(i,o);break;case"textarea":yf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Er(i,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[Bi]=o}catch(w){we(e,e.return,w)}}break;case 6:if(Mt(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){we(e,e.return,w)}}break;case 3:if(Mt(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(w){we(e,e.return,w)}break;case 4:Mt(t,e),Ft(e);break;case 13:Mt(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Nu=Me())),r&4&&nd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Qe=(c=Qe)||d,Mt(t,e),Qe=c):Mt(t,e),Ft(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(h=I=d;I!==null;){switch(m=I,x=m.child,m.tag){case 0:case 11:case 14:case 15:Mi(4,m,m.return);break;case 1:Sr(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(w){we(r,n,w)}}break;case 5:Sr(m,m.return);break;case 22:if(m.memoizedState!==null){id(h);continue}}x!==null?(x.return=m,I=x):id(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,s=h.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Sf("display",l))}catch(w){we(e,e.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){we(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mt(t,e),Ft(e),r&4&&nd(e);break;case 21:break;default:Mt(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(G0(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ii(i,""),r.flags&=-33);var o=td(e);js(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=td(e);Cs(e,a,l);break;default:throw Error(D(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cm(e,t,n){I=e,Z0(e)}function Z0(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Mo;if(!l){var a=i.alternate,s=a!==null&&a.memoizedState!==null||Qe;a=Mo;var c=Qe;if(Mo=l,(Qe=s)&&!c)for(I=i;I!==null;)l=I,s=l.child,l.tag===22&&l.memoizedState!==null?od(i):s!==null?(s.return=l,I=s):od(i);for(;o!==null;)I=o,Z0(o),o=o.sibling;I=i,Mo=a,Qe=c}rd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):rd(e)}}function rd(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Qe||Rl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bc(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Fi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Qe||t.flags&512&&Ss(t)}catch(m){we(t,t.return,m)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function id(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function od(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Rl(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){we(t,i,s)}}var o=t.return;try{Ss(t)}catch(s){we(t,o,s)}break;case 5:var l=t.return;try{Ss(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){I=null;break}var a=t.sibling;if(a!==null){a.return=t.return,I=a;break}I=t.return}}var jm=Math.ceil,gl=rn.ReactCurrentDispatcher,ju=rn.ReactCurrentOwner,Ct=rn.ReactCurrentBatchConfig,te=0,Oe=null,Le=null,Ue=0,ct=0,Cr=In(0),Pe=0,Gi=null,Jn=0,Al=0,ku=0,Ei=null,tt=null,Nu=0,$r=1/0,Qt=null,vl=!1,ks=null,Mn=null,Eo=!1,wn=null,yl=0,Li=0,Ns=null,Ho=-1,Vo=0;function qe(){return te&6?Me():Ho!==-1?Ho:Ho=Me()}function En(e){return e.mode&1?te&2&&Ue!==0?Ue&-Ue:lm.transition!==null?(Vo===0&&(Vo=_f()),Vo):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Uf(e.type)),e):1}function zt(e,t,n,r){if(50<Li)throw Li=0,Ns=null,Error(D(185));eo(e,n,r),(!(te&2)||e!==Oe)&&(e===Oe&&(!(te&2)&&(Al|=n),Pe===4&&yn(e,Ue)),lt(e,r),n===1&&te===0&&!(t.mode&1)&&($r=Me()+500,zl&&_n()))}function lt(e,t){var n=e.callbackNode;l1(e,t);var r=tl(e,e===Oe?Ue:0);if(r===0)n!==null&&hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hc(n),t===1)e.tag===0?om(ld.bind(null,e)):l0(ld.bind(null,e)),tm(function(){!(te&6)&&_n()}),n=null;else{switch(Rf(r)){case 1:n=Zs;break;case 4:n=zf;break;case 16:n=el;break;case 536870912:n=If;break;default:n=el}n=op(n,X0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function X0(e,t){if(Ho=-1,Vo=0,te&6)throw Error(D(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=tl(e,e===Oe?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=xl(e,r);else{t=r;var i=te;te|=2;var o=ep();(Oe!==e||Ue!==t)&&(Qt=null,$r=Me()+500,Qn(e,t));do try{Mm();break}catch(a){J0(e,a)}while(!0);cu(),gl.current=o,te=i,Le!==null?t=0:(Oe=null,Ue=0,t=Pe)}if(t!==0){if(t===2&&(i=Xa(e),i!==0&&(r=i,t=Ms(e,i))),t===1)throw n=Gi,Qn(e,0),yn(e,r),lt(e,Me()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!km(i)&&(t=xl(e,r),t===2&&(o=Xa(e),o!==0&&(r=o,t=Ms(e,o))),t===1))throw n=Gi,Qn(e,0),yn(e,r),lt(e,Me()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:$n(e,tt,Qt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=Nu+500-Me(),10<t)){if(tl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ls($n.bind(null,e,tt,Qt),t);break}$n(e,tt,Qt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-Tt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jm(r/1960))-r,10<r){e.timeoutHandle=ls($n.bind(null,e,tt,Qt),r);break}$n(e,tt,Qt);break;case 5:$n(e,tt,Qt);break;default:throw Error(D(329))}}}return lt(e,Me()),e.callbackNode===n?X0.bind(null,e):null}function Ms(e,t){var n=Ei;return e.current.memoizedState.isDehydrated&&(Qn(e,t).flags|=256),e=xl(e,t),e!==2&&(t=tt,tt=n,t!==null&&Es(t)),e}function Es(e){tt===null?tt=e:tt.push.apply(tt,e)}function km(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!_t(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~ku,t&=~Al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Tt(t),r=1<<n;e[n]=-1,t&=~r}}function ld(e){if(te&6)throw Error(D(327));zr();var t=tl(e,0);if(!(t&1))return lt(e,Me()),null;var n=xl(e,t);if(e.tag!==0&&n===2){var r=Xa(e);r!==0&&(t=r,n=Ms(e,r))}if(n===1)throw n=Gi,Qn(e,0),yn(e,t),lt(e,Me()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,tt,Qt),lt(e,Me()),null}function Mu(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&($r=Me()+500,zl&&_n())}}function er(e){wn!==null&&wn.tag===0&&!(te&6)&&zr();var t=te;te|=1;var n=Ct.transition,r=oe;try{if(Ct.transition=null,oe=1,e)return e()}finally{oe=r,Ct.transition=n,te=t,!(te&6)&&_n()}}function Eu(){ct=Cr.current,fe(Cr)}function Qn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,em(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Fr(),fe(it),fe(Ye),gu();break;case 5:mu(r);break;case 4:Fr();break;case 13:fe(me);break;case 19:fe(me);break;case 10:du(r.type._context);break;case 22:case 23:Eu()}n=n.return}if(Oe=e,Le=e=Ln(e.current,null),Ue=ct=t,Pe=0,Gi=null,ku=Al=Jn=0,tt=Ei=null,Un!==null){for(t=0;t<Un.length;t++)if(n=Un[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}Un=null}return e}function J0(e,t){do{var n=Le;try{if(cu(),bo.current=ml,hl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hl=!1}if(Xn=0,Re=De=ge=null,Ni=!1,Wi=0,ju.current=null,n===null||n.return===null){Pe=1,Gi=t,Le=null;break}e:{var o=e,l=n.return,a=n,s=t;if(t=Ue,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Yc(l);if(x!==null){x.flags&=-257,Gc(x,l,a,o,t),x.mode&1&&Qc(o,c,t),t=x,s=c;var S=t.updateQueue;if(S===null){var w=new Set;w.add(s),t.updateQueue=w}else S.add(s);break e}else{if(!(t&1)){Qc(o,c,t),Lu();break e}s=Error(D(426))}}else if(he&&a.mode&1){var N=Yc(l);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Gc(N,l,a,o,t),su(Or(s,a));break e}}o=s=Or(s,a),Pe!==4&&(Pe=2),Ei===null?Ei=[o]:Ei.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=A0(o,s,t);$c(o,p);break e;case 1:a=s;var f=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Mn===null||!Mn.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var k=F0(o,a,t);$c(o,k);break e}}o=o.return}while(o!==null)}np(n)}catch(L){t=L,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(!0)}function ep(){var e=gl.current;return gl.current=ml,e===null?ml:e}function Lu(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||!(Jn&268435455)&&!(Al&268435455)||yn(Oe,Ue)}function xl(e,t){var n=te;te|=2;var r=ep();(Oe!==e||Ue!==t)&&(Qt=null,Qn(e,t));do try{Nm();break}catch(i){J0(e,i)}while(!0);if(cu(),te=n,gl.current=r,Le!==null)throw Error(D(261));return Oe=null,Ue=0,Pe}function Nm(){for(;Le!==null;)tp(Le)}function Mm(){for(;Le!==null&&!Zh();)tp(Le)}function tp(e){var t=ip(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?np(e):Le=t,ju.current=null}function np(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=xm(n,t),n!==null){n.flags&=32767,Le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,Le=null;return}}else if(n=ym(n,t,ct),n!==null){Le=n;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Pe===0&&(Pe=5)}function $n(e,t,n){var r=oe,i=Ct.transition;try{Ct.transition=null,oe=1,Em(e,t,n,r)}finally{Ct.transition=i,oe=r}return null}function Em(e,t,n,r){do zr();while(wn!==null);if(te&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(a1(e,o),e===Oe&&(Le=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Eo||(Eo=!0,op(el,function(){return zr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ct.transition,Ct.transition=null;var l=oe;oe=1;var a=te;te|=4,ju.current=null,Sm(e,n),q0(n,e),Y1(is),nl=!!rs,is=rs=null,e.current=n,Cm(n),Xh(),te=a,oe=l,Ct.transition=o}else e.current=n;if(Eo&&(Eo=!1,wn=e,yl=i),o=e.pendingLanes,o===0&&(Mn=null),t1(n.stateNode),lt(e,Me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(vl)throw vl=!1,e=ks,ks=null,e;return yl&1&&e.tag!==0&&zr(),o=e.pendingLanes,o&1?e===Ns?Li++:(Li=0,Ns=e):Li=0,_n(),null}function zr(){if(wn!==null){var e=Rf(yl),t=Ct.transition,n=oe;try{if(Ct.transition=null,oe=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,yl=0,te&6)throw Error(D(331));var i=te;for(te|=4,I=e.current;I!==null;){var o=I,l=o.child;if(I.flags&16){var a=o.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(I=c;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Mi(8,d,o)}var h=d.child;if(h!==null)h.return=d,I=h;else for(;I!==null;){d=I;var m=d.sibling,x=d.return;if(Y0(d),d===c){I=null;break}if(m!==null){m.return=x,I=m;break}I=x}}}var S=o.alternate;if(S!==null){var w=S.child;if(w!==null){S.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}I=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,I=l;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,I=p;break e}I=o.return}}var f=e.current;for(I=f;I!==null;){l=I;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,I=g;else e:for(l=f;I!==null;){if(a=I,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(L){we(a,a.return,L)}if(a===l){I=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,I=k;break e}I=a.return}}if(te=i,_n(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(El,e)}catch{}r=!0}return r}finally{oe=n,Ct.transition=t}}return!1}function ad(e,t,n){t=Or(n,t),t=A0(e,t,1),e=Nn(e,t,1),t=qe(),e!==null&&(eo(e,1,t),lt(e,t))}function we(e,t,n){if(e.tag===3)ad(e,e,n);else for(;t!==null;){if(t.tag===3){ad(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=Or(n,e),e=F0(t,e,1),t=Nn(t,e,1),e=qe(),t!==null&&(eo(t,1,e),lt(t,e));break}}t=t.return}}function Lm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Oe===e&&(Ue&n)===n&&(Pe===4||Pe===3&&(Ue&130023424)===Ue&&500>Me()-Nu?Qn(e,0):ku|=n),lt(e,t)}function rp(e,t){t===0&&(e.mode&1?(t=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):t=1);var n=qe();e=tn(e,t),e!==null&&(eo(e,t,n),lt(e,n))}function Dm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rp(e,n)}function Pm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),rp(e,n)}var ip;ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,vm(e,t,n);nt=!!(e.flags&131072)}else nt=!1,he&&t.flags&1048576&&a0(t,ul,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var i=_r(t,Ye.current);Tr(t,n),i=yu(null,t,r,e,i,n);var o=xu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(r)?(o=!0,al(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pu(t),i.updater=Il,t.stateNode=i,i._reactInternals=t,ps(t,r,e,n),t=gs(null,t,r,!0,o,n)):(t.tag=0,he&&o&&lu(t),Ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=zm(r),e=Et(r,e),i){case 0:t=ms(null,t,r,e,n);break e;case 1:t=Zc(null,t,r,e,n);break e;case 11:t=Kc(null,t,r,e,n);break e;case 14:t=qc(null,t,r,Et(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),ms(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Zc(e,t,r,i,n);case 3:e:{if(U0(t),e===null)throw Error(D(387));r=t.pendingProps,o=t.memoizedState,i=o.element,d0(e,t),fl(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Or(Error(D(423)),t),t=Xc(e,t,r,n,i);break e}else if(r!==i){i=Or(Error(D(424)),t),t=Xc(e,t,r,n,i);break e}else for(ft=kn(t.stateNode.containerInfo.firstChild),pt=t,he=!0,Pt=null,n=m0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rr(),r===i){t=nn(e,t,n);break e}Ge(e,t,r,n)}t=t.child}return t;case 5:return g0(t),e===null&&cs(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,os(r,i)?l=null:o!==null&&os(r,o)&&(t.flags|=32),b0(e,t),Ge(e,t,l,n),t.child;case 6:return e===null&&cs(t),null;case 13:return B0(e,t,n);case 4:return hu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ar(t,null,r,n):Ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Kc(e,t,r,i,n);case 7:return Ge(e,t,t.pendingProps,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,ue(cl,r._currentValue),r._currentValue=l,o!==null)if(_t(o.value,l)){if(o.children===i.children&&!it.current){t=nn(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=Zt(-1,n&-n),s.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ds(o.return,n,t),a.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(D(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ds(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Tr(t,n),i=jt(i),r=r(i),t.flags|=1,Ge(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),qc(e,t,r,i,n);case 15:return O0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Bo(e,t),t.tag=1,ot(r)?(e=!0,al(t)):e=!1,Tr(t,n),p0(t,r,i),ps(t,r,i,n),gs(null,t,r,!0,e,n);case 19:return H0(e,t,n);case 22:return $0(e,t,n)}throw Error(D(156,t.tag))};function op(e,t){return Tf(e,t)}function Tm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new Tm(e,t,n,r)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zm(e){if(typeof e=="function")return Du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Ks)return 14}return 2}function Ln(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Wo(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Du(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case fr:return Yn(n.children,i,o,t);case Ys:l=8,i|=8;break;case Fa:return e=St(12,n,t,i|2),e.elementType=Fa,e.lanes=o,e;case Oa:return e=St(13,n,t,i),e.elementType=Oa,e.lanes=o,e;case $a:return e=St(19,n,t,i),e.elementType=$a,e.lanes=o,e;case hf:return Fl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ff:l=10;break e;case pf:l=9;break e;case Gs:l=11;break e;case Ks:l=14;break e;case mn:l=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=St(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Yn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function Fl(e,t,n,r){return e=St(22,e,r,t),e.elementType=hf,e.lanes=n,e.stateNode={isHidden:!1},e}function Ma(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function Ea(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Im(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pu(e,t,n,r,i,o,l,a,s){return e=new Im(e,t,n,a,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=St(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pu(o),e}function _m(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function lp(e){if(!e)return Tn;e=e._reactInternals;e:{if(ir(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ot(n))return o0(e,n,t)}return t}function ap(e,t,n,r,i,o,l,a,s){return e=Pu(n,r,!0,e,i,o,l,a,s),e.context=lp(null),n=e.current,r=qe(),i=En(n),o=Zt(r,i),o.callback=t??null,Nn(n,o,i),e.current.lanes=i,eo(e,i,r),lt(e,r),e}function Ol(e,t,n,r){var i=t.current,o=qe(),l=En(i);return n=lp(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,l),e!==null&&(zt(e,i,l,o),$o(e,i,l)),l}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tu(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function Rm(){return null}var sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function zu(e){this._internalRoot=e}$l.prototype.render=zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Ol(e,t,null,null)};$l.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;er(function(){Ol(null,e,null,null)}),t[en]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Of();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vn.length&&t!==0&&t<vn[n].priority;n++);vn.splice(n,0,e),n===0&&bf(e)}};function Iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function Am(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=wl(l);o.call(c)}}var l=ap(t,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=l,e[en]=l.current,bi(e.nodeType===8?e.parentNode:e),er(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=wl(s);a.call(c)}}var s=Pu(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=s,e[en]=s.current,bi(e.nodeType===8?e.parentNode:e),er(function(){Ol(t,s,n,r)}),s}function Ul(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var s=wl(l);a.call(s)}}Ol(t,l,e,i)}else l=Am(n,t,e,i,r);return wl(l)}Af=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=mi(t.pendingLanes);n!==0&&(Xs(t,n|1),lt(t,Me()),!(te&6)&&($r=Me()+500,_n()))}break;case 13:er(function(){var r=tn(e,1);if(r!==null){var i=qe();zt(r,e,1,i)}}),Tu(e,1)}};Js=function(e){if(e.tag===13){var t=tn(e,134217728);if(t!==null){var n=qe();zt(t,e,134217728,n)}Tu(e,134217728)}};Ff=function(e){if(e.tag===13){var t=En(e),n=tn(e,t);if(n!==null){var r=qe();zt(n,e,t,r)}Tu(e,t)}};Of=function(){return oe};$f=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};Ka=function(e,t,n){switch(t){case"input":if(Ba(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Tl(r);if(!i)throw Error(D(90));gf(r),Ba(r,i)}}}break;case"textarea":yf(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};Nf=Mu;Mf=er;var Fm={usingClientEntryPoint:!1,Events:[no,gr,Tl,jf,kf,Mu]},li={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Om={bundleType:li.bundleType,version:li.version,rendererPackageName:li.rendererPackageName,rendererConfig:li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Df(e),e===null?null:e.stateNode},findFiberByHostInstance:li.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{El=Lo.inject(Om),Bt=Lo}catch{}}mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm;mt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(t))throw Error(D(200));return _m(e,t,null,n)};mt.createRoot=function(e,t){if(!Iu(e))throw Error(D(299));var n=!1,r="",i=sp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Pu(e,1,!1,null,null,n,!1,r,i),e[en]=t.current,bi(e.nodeType===8?e.parentNode:e),new zu(t)};mt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=Df(t),e=e===null?null:e.stateNode,e};mt.flushSync=function(e){return er(e)};mt.hydrate=function(e,t,n){if(!bl(t))throw Error(D(200));return Ul(null,e,t,!0,n)};mt.hydrateRoot=function(e,t,n){if(!Iu(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=sp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ap(t,null,e,1,n??null,i,!1,o,l),e[en]=t.current,bi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $l(t)};mt.render=function(e,t,n){if(!bl(t))throw Error(D(200));return Ul(null,e,t,!1,n)};mt.unmountComponentAtNode=function(e){if(!bl(e))throw Error(D(40));return e._reactRootContainer?(er(function(){Ul(null,null,e,!1,function(){e._reactRootContainer=null,e[en]=null})}),!0):!1};mt.unstable_batchedUpdates=Mu;mt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!bl(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Ul(e,t,n,!1,r)};mt.version="18.2.0-next-9e3b772b8-20220608";function up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(up)}catch(e){console.error(e)}}up(),af.exports=mt;var _u=af.exports;const $m=Kd(_u),bm=Gd({__proto__:null,default:$m},[_u]);var cd=_u;Ra.createRoot=cd.createRoot,Ra.hydrateRoot=cd.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Se(){return Se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Se.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const dd="popstate";function Um(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return Ki("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:nr(i)}return Hm(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function tr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bm(){return Math.random().toString(36).substr(2,8)}function fd(e,t){return{usr:e.state,key:e.key,idx:t}}function Ki(e,t,n,r){return n===void 0&&(n=null),Se({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?on(t):t,{state:n,key:t&&t.key||r||Bm()})}function nr(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function on(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Hm(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Ne.Pop,s=null,c=d();c==null&&(c=0,l.replaceState(Se({},l.state,{idx:c}),""));function d(){return(l.state||{idx:null}).idx}function h(){a=Ne.Pop;let N=d(),p=N==null?null:N-c;c=N,s&&s({action:a,location:w.location,delta:p})}function m(N,p){a=Ne.Push;let f=Ki(w.location,N,p);n&&n(f,N),c=d()+1;let g=fd(f,c),k=w.createHref(f);try{l.pushState(g,"",k)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(k)}o&&s&&s({action:a,location:w.location,delta:1})}function x(N,p){a=Ne.Replace;let f=Ki(w.location,N,p);n&&n(f,N),c=d();let g=fd(f,c),k=w.createHref(f);l.replaceState(g,"",k),o&&s&&s({action:a,location:w.location,delta:0})}function S(N){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof N=="string"?N:nr(N);return G(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return e(i,l)},listen(N){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(dd,h),s=N,()=>{i.removeEventListener(dd,h),s=null}},createHref(N){return t(i,N)},createURL:S,encodeLocation(N){let p=S(N);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:x,go(N){return l.go(N)}};return w}var xe;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xe||(xe={}));const Vm=new Set(["lazy","caseSensitive","path","id","index","children"]);function Wm(e){return e.index===!0}function Ls(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let l=[...n,o],a=typeof i.id=="string"?i.id:l.join("-");if(G(i.index!==!0||!i.children,"Cannot specify children on an index route"),G(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Wm(i)){let s=Se({},i,t(i),{id:a});return r[a]=s,s}else{let s=Se({},i,t(i),{id:a,children:void 0});return r[a]=s,i.children&&(s.children=Ls(i.children,t,l,r)),s}})}function jr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?on(t):t,i=Gr(r.pathname||"/",n);if(i==null)return null;let o=cp(e);Ym(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=n2(o[a],o2(i));return l}function Qm(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function cp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let s={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(G(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let c=Xt([r,s.relativePath]),d=n.concat(s);o.children&&o.children.length>0&&(G(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),cp(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:e2(c,o.index),routesMeta:d})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let s of dp(o.path))i(o,l,s)}),t}function dp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=dp(r.join("/")),a=[];return a.push(...l.map(s=>s===""?o:[o,s].join("/"))),i&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function Ym(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:t2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Gm=/^:[\w-]+$/,Km=3,qm=2,Zm=1,Xm=10,Jm=-2,pd=e=>e==="*";function e2(e,t){let n=e.split("/"),r=n.length;return n.some(pd)&&(r+=Jm),t&&(r+=qm),n.filter(i=>!pd(i)).reduce((i,o)=>i+(Gm.test(o)?Km:o===""?Zm:Xm),r)}function t2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function n2(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=r2({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},c);if(!d)return null;Object.assign(r,d.params);let h=a.route;o.push({params:r,pathname:Xt([i,d.pathname]),pathnameBase:u2(Xt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Xt([i,d.pathnameBase]))}return o}function r2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=i2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:m,isOptional:x}=d;if(m==="*"){let w=a[h]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const S=a[h];return x&&!S?c[m]=void 0:c[m]=l2(S||"",m),c},{}),pathname:o,pathnameBase:l,pattern:e}}function i2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),tr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function o2(e){try{return decodeURI(e)}catch(t){return tr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function l2(e,t){try{return decodeURIComponent(e)}catch(n){return tr(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function a2(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?on(e):e;return{pathname:n?n.startsWith("/")?n:s2(n,t):t,search:c2(r),hash:d2(i)}}function s2(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function La(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function fp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ru(e,t){let n=fp(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Au(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=on(e):(i=Se({},e),G(!i.pathname||!i.pathname.includes("?"),La("?","pathname","search",i)),G(!i.pathname||!i.pathname.includes("#"),La("#","pathname","hash",i)),G(!i.search||!i.search.includes("#"),La("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(l==null)a=n;else{let h=t.length-1;if(!r&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}a=h>=0?t[h]:"/"}let s=a2(i,a),c=l&&l!=="/"&&l.endsWith("/"),d=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||d)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),u2=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),c2=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,d2=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Fu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function pp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hp=["post","put","patch","delete"],f2=new Set(hp),p2=["get",...hp],h2=new Set(p2),m2=new Set([301,302,303,307,308]),g2=new Set([307,308]),Da={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},v2={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ai={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},mp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,y2=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),gp="remix-router-transitions";function x2(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=C=>({hasErrorBoundary:y(C)})}else i=y2;let o={},l=Ls(e.routes,i,void 0,o),a,s=e.basename||"/",c=Se({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),d=null,h=new Set,m=null,x=null,S=null,w=e.hydrationData!=null,N=jr(l,e.history.location,s),p=null;if(N==null){let y=yt(404,{pathname:e.history.location.pathname}),{matches:C,route:M}=Sd(l);N=C,p={[M.id]:y}}let f,g=N.some(y=>y.route.lazy),k=N.some(y=>y.route.loader);if(g)f=!1;else if(!k)f=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,C=e.hydrationData?e.hydrationData.errors:null;f=N.every(M=>M.route.loader&&M.route.loader.hydrate!==!0&&(y&&y[M.route.id]!==void 0||C&&C[M.route.id]!==void 0))}else f=e.hydrationData!=null;let L,v={historyAction:e.history.action,location:e.history.location,matches:N,initialized:f,navigation:Da,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},j=Ne.Pop,P=!1,_,$=!1,J=new Map,Ce=null,ye=!1,Je=!1,sn=[],Rt=[],le=new Map,z=0,F=-1,U=new Map,q=new Set,ee=new Map,at=new Map,je=new Set,He=new Map,ke=new Map,st=!1;function Rn(){if(d=e.history.listen(y=>{let{action:C,location:M,delta:T}=y;if(st){st=!1;return}tr(ke.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let R=Ju({currentLocation:v.location,nextLocation:M,historyAction:C});if(R&&T!=null){st=!0,e.history.go(T*-1),so(R,{state:"blocked",location:M,proceed(){so(R,{state:"proceeding",proceed:void 0,reset:void 0,location:M}),e.history.go(T)},reset(){let K=new Map(v.blockers);K.set(R,ai),Te({blockers:K})}});return}return An(C,M)}),n){P2(t,J);let y=()=>T2(t,J);t.addEventListener("pagehide",y),Ce=()=>t.removeEventListener("pagehide",y)}return v.initialized||An(Ne.Pop,v.location,{initialHydration:!0}),L}function Vt(){d&&d(),Ce&&Ce(),h.clear(),_&&_.abort(),v.fetchers.forEach((y,C)=>ao(C)),v.blockers.forEach((y,C)=>Xu(C))}function qr(y){return h.add(y),()=>h.delete(y)}function Te(y,C){C===void 0&&(C={}),v=Se({},v,y);let M=[],T=[];c.v7_fetcherPersist&&v.fetchers.forEach((R,K)=>{R.state==="idle"&&(je.has(K)?T.push(K):M.push(K))}),[...h].forEach(R=>R(v,{deletedFetchers:T,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),c.v7_fetcherPersist&&(M.forEach(R=>v.fetchers.delete(R)),T.forEach(R=>ao(R)))}function et(y,C,M){var T,R;let{flushSync:K}=M===void 0?{}:M,V=v.actionData!=null&&v.navigation.formMethod!=null&&Dt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((T=y.state)==null?void 0:T._isRedirect)!==!0,H;C.actionData?Object.keys(C.actionData).length>0?H=C.actionData:H=null:V?H=v.actionData:H=null;let O=C.loaderData?wd(v.loaderData,C.loaderData,C.matches||[],C.errors):v.loaderData,X=v.blockers;X.size>0&&(X=new Map(X),X.forEach((se,$e)=>X.set($e,ai)));let ze=P===!0||v.navigation.formMethod!=null&&Dt(v.navigation.formMethod)&&((R=y.state)==null?void 0:R._isRedirect)!==!0;a&&(l=a,a=void 0),ye||j===Ne.Pop||(j===Ne.Push?e.history.push(y,y.state):j===Ne.Replace&&e.history.replace(y,y.state));let Q;if(j===Ne.Pop){let se=J.get(v.location.pathname);se&&se.has(y.pathname)?Q={currentLocation:v.location,nextLocation:y}:J.has(y.pathname)&&(Q={currentLocation:y,nextLocation:v.location})}else if($){let se=J.get(v.location.pathname);se?se.add(y.pathname):(se=new Set([y.pathname]),J.set(v.location.pathname,se)),Q={currentLocation:v.location,nextLocation:y}}Te(Se({},C,{actionData:H,loaderData:O,historyAction:j,location:y,initialized:!0,navigation:Da,revalidation:"idle",restoreScrollPosition:tc(y,C.matches||v.matches),preventScrollReset:ze,blockers:X}),{viewTransitionOpts:Q,flushSync:K===!0}),j=Ne.Pop,P=!1,$=!1,ye=!1,Je=!1,sn=[],Rt=[]}async function Qu(y,C){if(typeof y=="number"){e.history.go(y);return}let M=Ds(v.location,v.matches,s,c.v7_prependBasename,y,c.v7_relativeSplatPath,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:T,submission:R,error:K}=hd(c.v7_normalizeFormMethod,!1,M,C),V=v.location,H=Ki(v.location,T,C&&C.state);H=Se({},H,e.history.encodeLocation(H));let O=C&&C.replace!=null?C.replace:void 0,X=Ne.Push;O===!0?X=Ne.Replace:O===!1||R!=null&&Dt(R.formMethod)&&R.formAction===v.location.pathname+v.location.search&&(X=Ne.Replace);let ze=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,Q=(C&&C.unstable_flushSync)===!0,se=Ju({currentLocation:V,nextLocation:H,historyAction:X});if(se){so(se,{state:"blocked",location:H,proceed(){so(se,{state:"proceeding",proceed:void 0,reset:void 0,location:H}),Qu(y,C)},reset(){let $e=new Map(v.blockers);$e.set(se,ai),Te({blockers:$e})}});return}return await An(X,H,{submission:R,pendingError:K,preventScrollReset:ze,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:Q})}function nh(){if(ql(),Te({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){An(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}An(j||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function An(y,C,M){_&&_.abort(),_=null,j=y,ye=(M&&M.startUninterruptedRevalidation)===!0,dh(v.location,v.matches),P=(M&&M.preventScrollReset)===!0,$=(M&&M.enableViewTransition)===!0;let T=a||l,R=M&&M.overrideNavigation,K=jr(T,C,s),V=(M&&M.flushSync)===!0;if(!K){let $e=yt(404,{pathname:C.pathname}),{matches:vt,route:Ie}=Sd(T);Zl(),et(C,{matches:vt,loaderData:{},errors:{[Ie.id]:$e}},{flushSync:V});return}if(v.initialized&&!Je&&k2(v.location,C)&&!(M&&M.submission&&Dt(M.submission.formMethod))){et(C,{matches:K},{flushSync:V});return}_=new AbortController;let H=ui(e.history,C,_.signal,M&&M.submission),O,X;if(M&&M.pendingError)X={[Di(K).route.id]:M.pendingError};else if(M&&M.submission&&Dt(M.submission.formMethod)){let $e=await rh(H,C,M.submission,K,{replace:M.replace,flushSync:V});if($e.shortCircuited)return;O=$e.pendingActionData,X=$e.pendingActionError,R=Pa(C,M.submission),V=!1,H=new Request(H.url,{signal:H.signal})}let{shortCircuited:ze,loaderData:Q,errors:se}=await ih(H,C,K,R,M&&M.submission,M&&M.fetcherSubmission,M&&M.replace,M&&M.initialHydration===!0,V,O,X);ze||(_=null,et(C,Se({matches:K},O?{actionData:O}:{},{loaderData:Q,errors:se})))}async function rh(y,C,M,T,R){R===void 0&&(R={}),ql();let K=L2(C,M);Te({navigation:K},{flushSync:R.flushSync===!0});let V,H=Ts(T,C);if(!H.route.action&&!H.route.lazy)V={type:xe.error,error:yt(405,{method:y.method,pathname:C.pathname,routeId:H.route.id})};else if(V=await si("action",y,H,T,o,i,s,c.v7_relativeSplatPath),y.signal.aborted)return{shortCircuited:!0};if(Vn(V)){let O;return R&&R.replace!=null?O=R.replace:O=V.location===v.location.pathname+v.location.search,await Zr(v,V,{submission:M,replace:O}),{shortCircuited:!0}}if(kr(V)){let O=Di(T,H.route.id);return(R&&R.replace)!==!0&&(j=Ne.Push),{pendingActionData:{},pendingActionError:{[O.route.id]:V.error}}}if(Hn(V))throw yt(400,{type:"defer-action"});return{pendingActionData:{[H.route.id]:V.data}}}async function ih(y,C,M,T,R,K,V,H,O,X,ze){let Q=T||Pa(C,R),se=R||K||kd(Q),$e=a||l,[vt,Ie]=md(e.history,v,M,se,C,c.v7_partialHydration&&H===!0,Je,sn,Rt,je,ee,q,$e,s,X,ze);if(Zl(ae=>!(M&&M.some(pe=>pe.route.id===ae))||vt&&vt.some(pe=>pe.route.id===ae)),F=++z,vt.length===0&&Ie.length===0){let ae=qu();return et(C,Se({matches:M,loaderData:{},errors:ze||null},X?{actionData:X}:{},ae?{fetchers:new Map(v.fetchers)}:{}),{flushSync:O}),{shortCircuited:!0}}if(!ye&&(!c.v7_partialHydration||!H)){Ie.forEach(pe=>{let At=v.fetchers.get(pe.key),co=ci(void 0,At?At.data:void 0);v.fetchers.set(pe.key,co)});let ae=X||v.actionData;Te(Se({navigation:Q},ae?Object.keys(ae).length===0?{actionData:null}:{actionData:ae}:{},Ie.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:O})}Ie.forEach(ae=>{le.has(ae.key)&&cn(ae.key),ae.controller&&le.set(ae.key,ae.controller)});let lr=()=>Ie.forEach(ae=>cn(ae.key));_&&_.signal.addEventListener("abort",lr);let{results:Xl,loaderResults:ar,fetcherResults:dn}=await Yu(v.matches,M,vt,Ie,y);if(y.signal.aborted)return{shortCircuited:!0};_&&_.signal.removeEventListener("abort",lr),Ie.forEach(ae=>le.delete(ae.key));let Fn=Cd(Xl);if(Fn){if(Fn.idx>=vt.length){let ae=Ie[Fn.idx-vt.length].key;q.add(ae)}return await Zr(v,Fn.result,{replace:V}),{shortCircuited:!0}}let{loaderData:Jl,errors:ea}=xd(v,M,vt,ar,ze,Ie,dn,He);He.forEach((ae,pe)=>{ae.subscribe(At=>{(At||ae.done)&&He.delete(pe)})});let ta=qu(),sr=Zu(F),uo=ta||sr||Ie.length>0;return Se({loaderData:Jl,errors:ea},uo?{fetchers:new Map(v.fetchers)}:{})}function oh(y,C,M,T){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");le.has(y)&&cn(y);let R=(T&&T.unstable_flushSync)===!0,K=a||l,V=Ds(v.location,v.matches,s,c.v7_prependBasename,M,c.v7_relativeSplatPath,C,T==null?void 0:T.relative),H=jr(K,V,s);if(!H){Xr(y,C,yt(404,{pathname:V}),{flushSync:R});return}let{path:O,submission:X,error:ze}=hd(c.v7_normalizeFormMethod,!0,V,T);if(ze){Xr(y,C,ze,{flushSync:R});return}let Q=Ts(H,O);if(P=(T&&T.preventScrollReset)===!0,X&&Dt(X.formMethod)){lh(y,C,O,Q,H,R,X);return}ee.set(y,{routeId:C,path:O}),ah(y,C,O,Q,H,R,X)}async function lh(y,C,M,T,R,K,V){if(ql(),ee.delete(y),!T.route.action&&!T.route.lazy){let pe=yt(405,{method:V.formMethod,pathname:M,routeId:C});Xr(y,C,pe,{flushSync:K});return}let H=v.fetchers.get(y);un(y,D2(V,H),{flushSync:K});let O=new AbortController,X=ui(e.history,M,O.signal,V);le.set(y,O);let ze=z,Q=await si("action",X,T,R,o,i,s,c.v7_relativeSplatPath);if(X.signal.aborted){le.get(y)===O&&le.delete(y);return}if(c.v7_fetcherPersist&&je.has(y)){if(Vn(Q)||kr(Q)){un(y,pn(void 0));return}}else{if(Vn(Q))if(le.delete(y),F>ze){un(y,pn(void 0));return}else return q.add(y),un(y,ci(V)),Zr(v,Q,{fetcherSubmission:V});if(kr(Q)){Xr(y,C,Q.error);return}}if(Hn(Q))throw yt(400,{type:"defer-action"});let se=v.navigation.location||v.location,$e=ui(e.history,se,O.signal),vt=a||l,Ie=v.navigation.state!=="idle"?jr(vt,v.navigation.location,s):v.matches;G(Ie,"Didn't find any matches after fetcher action");let lr=++z;U.set(y,lr);let Xl=ci(V,Q.data);v.fetchers.set(y,Xl);let[ar,dn]=md(e.history,v,Ie,V,se,!1,Je,sn,Rt,je,ee,q,vt,s,{[T.route.id]:Q.data},void 0);dn.filter(pe=>pe.key!==y).forEach(pe=>{let At=pe.key,co=v.fetchers.get(At),ph=ci(void 0,co?co.data:void 0);v.fetchers.set(At,ph),le.has(At)&&cn(At),pe.controller&&le.set(At,pe.controller)}),Te({fetchers:new Map(v.fetchers)});let Fn=()=>dn.forEach(pe=>cn(pe.key));O.signal.addEventListener("abort",Fn);let{results:Jl,loaderResults:ea,fetcherResults:ta}=await Yu(v.matches,Ie,ar,dn,$e);if(O.signal.aborted)return;O.signal.removeEventListener("abort",Fn),U.delete(y),le.delete(y),dn.forEach(pe=>le.delete(pe.key));let sr=Cd(Jl);if(sr){if(sr.idx>=ar.length){let pe=dn[sr.idx-ar.length].key;q.add(pe)}return Zr(v,sr.result)}let{loaderData:uo,errors:ae}=xd(v,v.matches,ar,ea,void 0,dn,ta,He);if(v.fetchers.has(y)){let pe=pn(Q.data);v.fetchers.set(y,pe)}Zu(lr),v.navigation.state==="loading"&&lr>F?(G(j,"Expected pending action"),_&&_.abort(),et(v.navigation.location,{matches:Ie,loaderData:uo,errors:ae,fetchers:new Map(v.fetchers)})):(Te({errors:ae,loaderData:wd(v.loaderData,uo,Ie,ae),fetchers:new Map(v.fetchers)}),Je=!1)}async function ah(y,C,M,T,R,K,V){let H=v.fetchers.get(y);un(y,ci(V,H?H.data:void 0),{flushSync:K});let O=new AbortController,X=ui(e.history,M,O.signal);le.set(y,O);let ze=z,Q=await si("loader",X,T,R,o,i,s,c.v7_relativeSplatPath);if(Hn(Q)&&(Q=await xp(Q,X.signal,!0)||Q),le.get(y)===O&&le.delete(y),!X.signal.aborted){if(je.has(y)){un(y,pn(void 0));return}if(Vn(Q))if(F>ze){un(y,pn(void 0));return}else{q.add(y),await Zr(v,Q);return}if(kr(Q)){Xr(y,C,Q.error);return}G(!Hn(Q),"Unhandled fetcher deferred data"),un(y,pn(Q.data))}}async function Zr(y,C,M){let{submission:T,fetcherSubmission:R,replace:K}=M===void 0?{}:M;C.revalidate&&(Je=!0);let V=Ki(y.location,C.location,{_isRedirect:!0});if(G(V,"Expected a location on the redirect navigation"),n){let se=!1;if(C.reloadDocument)se=!0;else if(mp.test(C.location)){const $e=e.history.createURL(C.location);se=$e.origin!==t.location.origin||Gr($e.pathname,s)==null}if(se){K?t.location.replace(C.location):t.location.assign(C.location);return}}_=null;let H=K===!0?Ne.Replace:Ne.Push,{formMethod:O,formAction:X,formEncType:ze}=y.navigation;!T&&!R&&O&&X&&ze&&(T=kd(y.navigation));let Q=T||R;if(g2.has(C.status)&&Q&&Dt(Q.formMethod))await An(H,V,{submission:Se({},Q,{formAction:C.location}),preventScrollReset:P});else{let se=Pa(V,T);await An(H,V,{overrideNavigation:se,fetcherSubmission:R,preventScrollReset:P})}}async function Yu(y,C,M,T,R){let K=await Promise.all([...M.map(O=>si("loader",R,O,C,o,i,s,c.v7_relativeSplatPath)),...T.map(O=>O.matches&&O.match&&O.controller?si("loader",ui(e.history,O.path,O.controller.signal),O.match,O.matches,o,i,s,c.v7_relativeSplatPath):{type:xe.error,error:yt(404,{pathname:O.path})})]),V=K.slice(0,M.length),H=K.slice(M.length);return await Promise.all([jd(y,M,V,V.map(()=>R.signal),!1,v.loaderData),jd(y,T.map(O=>O.match),H,T.map(O=>O.controller?O.controller.signal:null),!0)]),{results:K,loaderResults:V,fetcherResults:H}}function ql(){Je=!0,sn.push(...Zl()),ee.forEach((y,C)=>{le.has(C)&&(Rt.push(C),cn(C))})}function un(y,C,M){M===void 0&&(M={}),v.fetchers.set(y,C),Te({fetchers:new Map(v.fetchers)},{flushSync:(M&&M.flushSync)===!0})}function Xr(y,C,M,T){T===void 0&&(T={});let R=Di(v.matches,C);ao(y),Te({errors:{[R.route.id]:M},fetchers:new Map(v.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Gu(y){return c.v7_fetcherPersist&&(at.set(y,(at.get(y)||0)+1),je.has(y)&&je.delete(y)),v.fetchers.get(y)||v2}function ao(y){let C=v.fetchers.get(y);le.has(y)&&!(C&&C.state==="loading"&&U.has(y))&&cn(y),ee.delete(y),U.delete(y),q.delete(y),je.delete(y),v.fetchers.delete(y)}function sh(y){if(c.v7_fetcherPersist){let C=(at.get(y)||0)-1;C<=0?(at.delete(y),je.add(y)):at.set(y,C)}else ao(y);Te({fetchers:new Map(v.fetchers)})}function cn(y){let C=le.get(y);G(C,"Expected fetch controller: "+y),C.abort(),le.delete(y)}function Ku(y){for(let C of y){let M=Gu(C),T=pn(M.data);v.fetchers.set(C,T)}}function qu(){let y=[],C=!1;for(let M of q){let T=v.fetchers.get(M);G(T,"Expected fetcher: "+M),T.state==="loading"&&(q.delete(M),y.push(M),C=!0)}return Ku(y),C}function Zu(y){let C=[];for(let[M,T]of U)if(T<y){let R=v.fetchers.get(M);G(R,"Expected fetcher: "+M),R.state==="loading"&&(cn(M),U.delete(M),C.push(M))}return Ku(C),C.length>0}function uh(y,C){let M=v.blockers.get(y)||ai;return ke.get(y)!==C&&ke.set(y,C),M}function Xu(y){v.blockers.delete(y),ke.delete(y)}function so(y,C){let M=v.blockers.get(y)||ai;G(M.state==="unblocked"&&C.state==="blocked"||M.state==="blocked"&&C.state==="blocked"||M.state==="blocked"&&C.state==="proceeding"||M.state==="blocked"&&C.state==="unblocked"||M.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+M.state+" -> "+C.state);let T=new Map(v.blockers);T.set(y,C),Te({blockers:T})}function Ju(y){let{currentLocation:C,nextLocation:M,historyAction:T}=y;if(ke.size===0)return;ke.size>1&&tr(!1,"A router only supports one blocker at a time");let R=Array.from(ke.entries()),[K,V]=R[R.length-1],H=v.blockers.get(K);if(!(H&&H.state==="proceeding")&&V({currentLocation:C,nextLocation:M,historyAction:T}))return K}function Zl(y){let C=[];return He.forEach((M,T)=>{(!y||y(T))&&(M.cancel(),C.push(T),He.delete(T))}),C}function ch(y,C,M){if(m=y,S=C,x=M||null,!w&&v.navigation===Da){w=!0;let T=tc(v.location,v.matches);T!=null&&Te({restoreScrollPosition:T})}return()=>{m=null,S=null,x=null}}function ec(y,C){return x&&x(y,C.map(T=>Qm(T,v.loaderData)))||y.key}function dh(y,C){if(m&&S){let M=ec(y,C);m[M]=S()}}function tc(y,C){if(m){let M=ec(y,C),T=m[M];if(typeof T=="number")return T}return null}function fh(y){o={},a=Ls(y,i,void 0,o)}return L={get basename(){return s},get future(){return c},get state(){return v},get routes(){return l},get window(){return t},initialize:Rn,subscribe:qr,enableScrollRestoration:ch,navigate:Qu,fetch:oh,revalidate:nh,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Gu,deleteFetcher:sh,dispose:Vt,getBlocker:uh,deleteBlocker:Xu,_internalFetchControllers:le,_internalActiveDeferreds:He,_internalSetRoutes:fh},L}function w2(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ds(e,t,n,r,i,o,l,a){let s,c;if(l){s=[];for(let h of t)if(s.push(h),h.route.id===l){c=h;break}}else s=t,c=t[t.length-1];let d=Au(i||".",Ru(s,o),Gr(e.pathname,n)||e.pathname,a==="path");return i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Ou(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Xt([n,d.pathname])),nr(d)}function hd(e,t,n,r){if(!r||!w2(r))return{path:n};if(r.formMethod&&!E2(r.formMethod))return{path:n,error:yt(405,{method:r.formMethod})};let i=()=>({path:n,error:yt(400,{type:"invalid-body"})}),o=r.formMethod||"get",l=e?o.toUpperCase():o.toLowerCase(),a=yp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Dt(l))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,S)=>{let[w,N]=S;return""+x+w+"="+N+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Dt(l))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}G(typeof FormData=="function","FormData is not available in this environment");let s,c;if(r.formData)s=Ps(r.formData),c=r.formData;else if(r.body instanceof FormData)s=Ps(r.body),c=r.body;else if(r.body instanceof URLSearchParams)s=r.body,c=yd(s);else if(r.body==null)s=new URLSearchParams,c=new FormData;else try{s=new URLSearchParams(r.body),c=yd(s)}catch{return i()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Dt(d.formMethod))return{path:n,submission:d};let h=on(n);return t&&h.search&&Ou(h.search)&&s.append("index",""),h.search="?"+s,{path:nr(h),submission:d}}function S2(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function md(e,t,n,r,i,o,l,a,s,c,d,h,m,x,S,w){let N=w?Object.values(w)[0]:S?Object.values(S)[0]:void 0,p=e.createURL(t.location),f=e.createURL(i),g=w?Object.keys(w)[0]:void 0,L=S2(n,g).filter((j,P)=>{let{route:_}=j;if(_.lazy)return!0;if(_.loader==null)return!1;if(o)return _.loader.hydrate?!0:t.loaderData[_.id]===void 0&&(!t.errors||t.errors[_.id]===void 0);if(C2(t.loaderData,t.matches[P],j)||a.some(Ce=>Ce===j.route.id))return!0;let $=t.matches[P],J=j;return gd(j,Se({currentUrl:p,currentParams:$.params,nextUrl:f,nextParams:J.params},r,{actionResult:N,defaultShouldRevalidate:l||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||vp($,J)}))}),v=[];return d.forEach((j,P)=>{if(o||!n.some(ye=>ye.route.id===j.routeId)||c.has(P))return;let _=jr(m,j.path,x);if(!_){v.push({key:P,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let $=t.fetchers.get(P),J=Ts(_,j.path),Ce=!1;h.has(P)?Ce=!1:s.includes(P)?Ce=!0:$&&$.state!=="idle"&&$.data===void 0?Ce=l:Ce=gd(J,Se({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:N,defaultShouldRevalidate:l})),Ce&&v.push({key:P,routeId:j.routeId,path:j.path,matches:_,match:J,controller:new AbortController})}),[L,v]}function C2(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function vp(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function gd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function vd(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];G(i,"No route found in manifest");let o={};for(let l in r){let s=i[l]!==void 0&&l!=="hasErrorBoundary";tr(!s,'Route "'+i.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!Vm.has(l)&&(o[l]=r[l])}Object.assign(i,o),Object.assign(i,Se({},t(i),{lazy:void 0}))}async function si(e,t,n,r,i,o,l,a,s){s===void 0&&(s={});let c,d,h,m=w=>{let N,p=new Promise((f,g)=>N=g);return h=()=>N(),t.signal.addEventListener("abort",h),Promise.race([w({request:t,params:n.params,context:s.requestContext}),p])};try{let w=n.route[e];if(n.route.lazy)if(w){let N,p=await Promise.all([m(w).catch(f=>{N=f}),vd(n.route,o,i)]);if(N)throw N;d=p[0]}else if(await vd(n.route,o,i),w=n.route[e],w)d=await m(w);else if(e==="action"){let N=new URL(t.url),p=N.pathname+N.search;throw yt(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:xe.data,data:void 0};else if(w)d=await m(w);else{let N=new URL(t.url),p=N.pathname+N.search;throw yt(404,{pathname:p})}G(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(w){c=xe.error,d=w}finally{h&&t.signal.removeEventListener("abort",h)}if(M2(d)){let w=d.status;if(m2.has(w)){let p=d.headers.get("Location");if(G(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!mp.test(p))p=Ds(new URL(t.url),r.slice(0,r.indexOf(n)+1),l,!0,p,a);else if(!s.isStaticRequest){let f=new URL(t.url),g=p.startsWith("//")?new URL(f.protocol+p):new URL(p),k=Gr(g.pathname,l)!=null;g.origin===f.origin&&k&&(p=g.pathname+g.search+g.hash)}if(s.isStaticRequest)throw d.headers.set("Location",p),d;return{type:xe.redirect,status:w,location:p,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(s.isRouteRequest)throw{type:c===xe.error?xe.error:xe.data,response:d};let N;try{let p=d.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?d.body==null?N=null:N=await d.json():N=await d.text()}catch(p){return{type:xe.error,error:p}}return c===xe.error?{type:c,error:new Fu(w,d.statusText,N),headers:d.headers}:{type:xe.data,data:N,statusCode:d.status,headers:d.headers}}if(c===xe.error)return{type:c,error:d};if(N2(d)){var x,S;return{type:xe.deferred,deferredData:d,statusCode:(x=d.init)==null?void 0:x.status,headers:((S=d.init)==null?void 0:S.headers)&&new Headers(d.init.headers)}}return{type:xe.data,data:d}}function ui(e,t,n,r){let i=e.createURL(yp(t)).toString(),o={signal:n};if(r&&Dt(r.formMethod)){let{formMethod:l,formEncType:a}=r;o.method=l.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(r.json)):a==="text/plain"?o.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?o.body=Ps(r.formData):o.body=r.formData}return new Request(i,o)}function Ps(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function yd(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function j2(e,t,n,r,i){let o={},l=null,a,s=!1,c={};return n.forEach((d,h)=>{let m=t[h].route.id;if(G(!Vn(d),"Cannot handle redirect results in processLoaderData"),kr(d)){let x=Di(e,m),S=d.error;r&&(S=Object.values(r)[0],r=void 0),l=l||{},l[x.route.id]==null&&(l[x.route.id]=S),o[m]=void 0,s||(s=!0,a=pp(d.error)?d.error.status:500),d.headers&&(c[m]=d.headers)}else Hn(d)?(i.set(m,d.deferredData),o[m]=d.deferredData.data):o[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!s&&(a=d.statusCode),d.headers&&(c[m]=d.headers)}),r&&(l=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:l,statusCode:a||200,loaderHeaders:c}}function xd(e,t,n,r,i,o,l,a){let{loaderData:s,errors:c}=j2(t,n,r,i,a);for(let d=0;d<o.length;d++){let{key:h,match:m,controller:x}=o[d];G(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let S=l[d];if(!(x&&x.signal.aborted))if(kr(S)){let w=Di(e.matches,m==null?void 0:m.route.id);c&&c[w.route.id]||(c=Se({},c,{[w.route.id]:S.error})),e.fetchers.delete(h)}else if(Vn(S))G(!1,"Unhandled fetcher revalidation redirect");else if(Hn(S))G(!1,"Unhandled fetcher deferred data");else{let w=pn(S.data);e.fetchers.set(h,w)}}return{loaderData:s,errors:c}}function wd(e,t,n,r){let i=Se({},t);for(let o of n){let l=o.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(i[l]=t[l]):e[l]!==void 0&&o.route.loader&&(i[l]=e[l]),r&&r.hasOwnProperty(l))break}return i}function Di(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Sd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function yt(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"?a="defer() is not supported in actions":o==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",a='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new Fu(e||500,l,new Error(a),!0)}function Cd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Vn(n))return{result:n,idx:t}}}function yp(e){let t=typeof e=="string"?on(e):e;return nr(Se({},t,{hash:""}))}function k2(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Hn(e){return e.type===xe.deferred}function kr(e){return e.type===xe.error}function Vn(e){return(e&&e.type)===xe.redirect}function N2(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function M2(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function E2(e){return h2.has(e.toLowerCase())}function Dt(e){return f2.has(e.toLowerCase())}async function jd(e,t,n,r,i,o){for(let l=0;l<n.length;l++){let a=n[l],s=t[l];if(!s)continue;let c=e.find(h=>h.route.id===s.route.id),d=c!=null&&!vp(c,s)&&(o&&o[s.route.id])!==void 0;if(Hn(a)&&(i||d)){let h=r[l];G(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await xp(a,h,i).then(m=>{m&&(n[l]=m||n[l])})}}}async function xp(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:xe.data,data:e.deferredData.unwrappedData}}catch(i){return{type:xe.error,error:i}}return{type:xe.data,data:e.deferredData.data}}}function Ou(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Ts(e,t){let n=typeof t=="string"?on(t).search:t.search;if(e[e.length-1].route.index&&Ou(n||""))return e[e.length-1];let r=fp(e);return r[r.length-1]}function kd(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:o,json:l}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:o,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function Pa(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function L2(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ci(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function D2(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function pn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function P2(e,t){try{let n=e.sessionStorage.getItem(gp);if(n){let r=JSON.parse(n);for(let[i,o]of Object.entries(r||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function T2(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(gp,JSON.stringify(n))}catch(r){tr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(this,arguments)}const Bl=E.createContext(null),wp=E.createContext(null),or=E.createContext(null),Hl=E.createContext(null),ln=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Sp=E.createContext(null);function z2(e,t){let{relative:n}=t===void 0?{}:t;io()||G(!1);let{basename:r,navigator:i}=E.useContext(or),{hash:o,pathname:l,search:a}=jp(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:Xt([r,l])),i.createHref({pathname:s,search:a,hash:o})}function io(){return E.useContext(Hl)!=null}function an(){return io()||G(!1),E.useContext(Hl).location}function Cp(e){E.useContext(or).static||E.useLayoutEffect(e)}function I2(){let{isDataRoute:e}=E.useContext(ln);return e?Y2():_2()}function _2(){io()||G(!1);let e=E.useContext(Bl),{basename:t,future:n,navigator:r}=E.useContext(or),{matches:i}=E.useContext(ln),{pathname:o}=an(),l=JSON.stringify(Ru(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return Cp(()=>{a.current=!0}),E.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=Au(c,JSON.parse(l),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Xt([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,l,o,e])}const R2=E.createContext(null);function A2(e){let t=E.useContext(ln).outlet;return t&&E.createElement(R2.Provider,{value:e},t)}function $u(){let{matches:e}=E.useContext(ln),t=e[e.length-1];return t?t.params:{}}function jp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(or),{matches:i}=E.useContext(ln),{pathname:o}=an(),l=JSON.stringify(Ru(i,r.v7_relativeSplatPath));return E.useMemo(()=>Au(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function F2(e,t,n,r){io()||G(!1);let{navigator:i}=E.useContext(or),{matches:o}=E.useContext(ln),l=o[o.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let c=an(),d;if(t){var h;let N=typeof t=="string"?on(t):t;s==="/"||(h=N.pathname)!=null&&h.startsWith(s)||G(!1),d=N}else d=c;let m=d.pathname||"/",x=s==="/"?m:m.slice(s.length)||"/",S=jr(e,{pathname:x}),w=B2(S&&S.map(N=>Object.assign({},N,{params:Object.assign({},a,N.params),pathname:Xt([s,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?s:Xt([s,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),o,n,r);return t&&w?E.createElement(Hl.Provider,{value:{location:qi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ne.Pop}},w):w}function O2(){let e=Q2(),t=pp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:i},n):null,null)}const $2=E.createElement(O2,null);class b2 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(ln.Provider,{value:this.props.routeContext},E.createElement(Sp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function U2(e){let{routeContext:t,match:n,children:r}=e,i=E.useContext(Bl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(ln.Provider,{value:t},r)}function B2(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if((o=n)!=null&&o.errors)e=n.matches;else return null}let l=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=l.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));d>=0||G(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let h=l[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:m,errors:x}=n,S=h.route.loader&&m[h.route.id]===void 0&&(!x||x[h.route.id]===void 0);if(h.route.lazy||S){s=!0,c>=0?l=l.slice(0,c+1):l=[l[0]];break}}}return l.reduceRight((d,h,m)=>{let x,S=!1,w=null,N=null;n&&(x=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||$2,s&&(c<0&&m===0?(G2("route-fallback",!1),S=!0,N=null):c===m&&(S=!0,N=h.route.hydrateFallbackElement||null)));let p=t.concat(l.slice(0,m+1)),f=()=>{let g;return x?g=w:S?g=N:h.route.Component?g=E.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=d,E.createElement(U2,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?E.createElement(b2,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var kp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(kp||{}),Sl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Sl||{});function H2(e){let t=E.useContext(Bl);return t||G(!1),t}function V2(e){let t=E.useContext(wp);return t||G(!1),t}function W2(e){let t=E.useContext(ln);return t||G(!1),t}function Np(e){let t=W2(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function Q2(){var e;let t=E.useContext(Sp),n=V2(Sl.UseRouteError),r=Np(Sl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Y2(){let{router:e}=H2(kp.UseNavigateStable),t=Np(Sl.UseNavigateStable),n=E.useRef(!1);return Cp(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,qi({fromRouteId:t},o)))},[e,t])}const Nd={};function G2(e,t,n){!t&&!Nd[e]&&(Nd[e]=!0)}function K2(e){return A2(e.context)}function Wt(e){G(!1)}function q2(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ne.Pop,navigator:o,static:l=!1,future:a}=e;io()&&G(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:o,static:l,future:qi({v7_relativeSplatPath:!1},a)}),[s,a,o,l]);typeof r=="string"&&(r=on(r));let{pathname:d="/",search:h="",hash:m="",state:x=null,key:S="default"}=r,w=E.useMemo(()=>{let N=Gr(d,s);return N==null?null:{location:{pathname:N,search:h,hash:m,state:x,key:S},navigationType:i}},[s,d,h,m,x,S,i]);return w==null?null:E.createElement(or.Provider,{value:c},E.createElement(Hl.Provider,{children:n,value:w}))}new Promise(()=>{});function zs(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(r,i)=>{if(!E.isValidElement(r))return;let o=[...t,i];if(r.type===E.Fragment){n.push.apply(n,zs(r.props.children,o));return}r.type!==Wt&&G(!1),!r.props.index||!r.props.children||G(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=zs(r.props.children,o)),n.push(l)}),n}function Z2(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zi(){return Zi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zi.apply(this,arguments)}function X2(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function J2(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function eg(e,t){return e.button===0&&(!t||t==="_self")&&!J2(e)}const tg=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function ng(e,t){return x2({basename:t==null?void 0:t.basename,future:Zi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:Um({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||rg(),routes:e,mapRouteProperties:Z2,window:t==null?void 0:t.window}).initialize()}function rg(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Zi({},t,{errors:ig(t.errors)})),t}function ig(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Fu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let l=new o(i.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let o=new Error(i.message);o.stack="",n[r]=o}}else n[r]=i;return n}const og=E.createContext({isTransitioning:!1}),lg=E.createContext(new Map),ag="startTransition",Md=Dh[ag],sg="flushSync",Ed=bm[sg];function ug(e){Md?Md(e):e()}function di(e){Ed?Ed(e):e()}class cg{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function dg(e){let{fallbackElement:t,router:n,future:r}=e,[i,o]=E.useState(n.state),[l,a]=E.useState(),[s,c]=E.useState({isTransitioning:!1}),[d,h]=E.useState(),[m,x]=E.useState(),[S,w]=E.useState(),N=E.useRef(new Map),{v7_startTransition:p}=r||{},f=E.useCallback(j=>{p?ug(j):j()},[p]),g=E.useCallback((j,P)=>{let{deletedFetchers:_,unstable_flushSync:$,unstable_viewTransitionOpts:J}=P;_.forEach(ye=>N.current.delete(ye)),j.fetchers.forEach((ye,Je)=>{ye.data!==void 0&&N.current.set(Je,ye.data)});let Ce=n.window==null||typeof n.window.document.startViewTransition!="function";if(!J||Ce){$?di(()=>o(j)):f(()=>o(j));return}if($){di(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:J.currentLocation,nextLocation:J.nextLocation})});let ye=n.window.document.startViewTransition(()=>{di(()=>o(j))});ye.finished.finally(()=>{di(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})})}),di(()=>x(ye));return}m?(d&&d.resolve(),m.skipTransition(),w({state:j,currentLocation:J.currentLocation,nextLocation:J.nextLocation})):(a(j),c({isTransitioning:!0,flushSync:!1,currentLocation:J.currentLocation,nextLocation:J.nextLocation}))},[n.window,m,d,N,f]);E.useLayoutEffect(()=>n.subscribe(g),[n,g]),E.useEffect(()=>{s.isTransitioning&&!s.flushSync&&h(new cg)},[s]),E.useEffect(()=>{if(d&&l&&n.window){let j=l,P=d.promise,_=n.window.document.startViewTransition(async()=>{f(()=>o(j)),await P});_.finished.finally(()=>{h(void 0),x(void 0),a(void 0),c({isTransitioning:!1})}),x(_)}},[f,l,d,n.window]),E.useEffect(()=>{d&&l&&i.location.key===l.location.key&&d.resolve()},[d,m,i.location,l]),E.useEffect(()=>{!s.isTransitioning&&S&&(a(S.state),c({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),w(void 0))},[s.isTransitioning,S]),E.useEffect(()=>{},[]);let k=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,P,_)=>n.navigate(j,{state:P,preventScrollReset:_==null?void 0:_.preventScrollReset}),replace:(j,P,_)=>n.navigate(j,{replace:!0,state:P,preventScrollReset:_==null?void 0:_.preventScrollReset})}),[n]),L=n.basename||"/",v=E.useMemo(()=>({router:n,navigator:k,static:!1,basename:L}),[n,k,L]);return E.createElement(E.Fragment,null,E.createElement(Bl.Provider,{value:v},E.createElement(wp.Provider,{value:i},E.createElement(lg.Provider,{value:N.current},E.createElement(og.Provider,{value:s},E.createElement(q2,{basename:L,location:i.location,navigationType:i.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?E.createElement(fg,{routes:n.routes,future:n.future,state:i}):t))))),null)}function fg(e){let{routes:t,future:n,state:r}=e;return F2(t,void 0,r,n)}const pg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=E.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:s,to:c,preventScrollReset:d,unstable_viewTransition:h}=t,m=X2(t,tg),{basename:x}=E.useContext(or),S,w=!1;if(typeof c=="string"&&hg.test(c)&&(S=c,pg))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),L=Gr(k.pathname,x);k.origin===g.origin&&L!=null?c=L+k.search+k.hash:w=!0}catch{}let N=z2(c,{relative:i}),p=mg(c,{replace:l,state:a,target:s,preventScrollReset:d,relative:i,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||p(g)}return E.createElement("a",Zi({},m,{href:S||N,onClick:w||o?r:f,ref:n,target:s}))});var Ld;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ld||(Ld={}));var Dd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Dd||(Dd={}));function mg(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=I2(),c=an(),d=jp(e,{relative:l});return E.useCallback(h=>{if(eg(h,n)){h.preventDefault();let m=r!==void 0?r:nr(c)===nr(d);s(e,{replace:m,state:i,preventScrollReset:o,relative:l,unstable_viewTransition:a})}},[c,s,d,r,i,n,e,o,l,a])}const Nr="/reactdeploy4/assets/png_4-pi7uzOjc.png",Mp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Nr,alt:"",style:{width:"100%",aspectRatio:"1/1"},className:"img"})}),gg="/reactdeploy4/assets/img_2-0-A_q4Fj.png",Ep=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:gg,className:"img",alt:""})}),vg="data:image/svg+xml,%3csvg%20width='166'%20height='46'%20viewBox='0%200%20166%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M163.509%202.85256C164.173%202.40385%20164.677%201.99758%20164.993%201.6572C165.309%201.31683%20165.43%201.04907%20165.35%200.869385C165.269%200.6897%20164.989%200.601641%20164.525%200.610286C164.06%200.618932%20163.421%200.724112%20162.644%200.919758L13.3651%2038.2924C12.5937%2038.4844%2011.6985%2038.7633%2010.7312%2039.1131C9.76383%2039.4629%208.74352%2039.8766%207.72908%2040.3304C6.71465%2040.7841%205.72617%2041.269%204.82066%2041.757C3.91515%2042.245%203.11055%2042.7264%202.45325%2043.1735C1.7896%2043.6222%201.28524%2044.0285%200.969306%2044.3689C0.653372%2044.7093%200.532113%2044.977%200.612489%2045.1567C0.692866%2045.3364%200.973288%2045.4245%201.43761%2045.4158C1.90194%2045.4072%202.54098%2045.302%203.31783%2045.1063L152.597%207.73366C153.368%207.54169%20154.264%207.26277%20155.231%206.91299C156.198%206.56322%20157.219%206.14951%20158.233%205.69573C159.248%205.24196%20160.236%204.75709%20161.142%204.26911C162.047%203.78113%20162.852%203.29969%20163.509%202.85256Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",yg="data:image/svg+xml,%3csvg%20width='210'%20height='65'%20viewBox='0%200%20210%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M206.862%203.14189C207.731%202.6015%20208.398%202.12247%20208.825%201.73243C209.252%201.34239%20209.43%201.04907%20209.35%200.869386C209.269%200.689701%20208.932%200.627207%20208.356%200.685511C207.781%200.743816%20206.979%200.921765%20205.998%201.20909L17.3582%2056.1883C16.3835%2056.4712%2015.2465%2056.8583%2014.0127%2057.3272C12.7789%2057.7962%2011.4728%2058.3378%2010.1697%2058.9207C8.86656%2059.5036%207.59227%2060.1163%206.42029%2060.7235C5.24832%2061.3306%204.20187%2061.9203%203.34129%2062.4583C2.47269%2062.9987%201.80566%2063.4778%201.37871%2063.8678C0.951766%2064.2578%200.773341%2064.5511%200.853718%2064.7308C0.934094%2064.9105%201.27168%2064.973%201.84702%2064.9147C2.42236%2064.8564%203.22407%2064.6784%204.20587%2064.3911L192.845%209.41195C193.82%209.12904%20194.957%208.74194%20196.191%208.27297C197.425%207.804%20198.731%207.26244%20200.034%206.67954C201.337%206.09664%20202.611%205.48393%20203.783%204.87675C204.955%204.26958%20206.002%203.67995%20206.862%203.14189Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",xg="data:image/svg+xml,%3csvg%20width='256'%20height='157'%20viewBox='0%200%20256%20157'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M252.625%204.30344C253.587%203.28409%20254.303%202.41526%20254.731%201.74706C255.16%201.07887%20255.292%200.624523%20255.12%200.410247C254.948%200.195973%20254.476%200.226002%20253.731%200.498609C252.985%200.771212%20251.981%201.281%20250.777%201.99855L19.2871%20139.562C18.0906%20140.272%2016.7153%20141.176%2015.2406%20142.222C13.7659%20143.269%2012.221%20144.438%2010.6951%20145.661C9.16906%20146.884%207.69219%20148.138%206.34961%20149.349C5.00703%20150.561%203.82533%20151.706%202.87268%20152.72C1.91018%20153.739%201.19407%20154.608%200.76577%20155.276C0.337465%20155.944%200.205367%20156.399%200.377122%20156.613C0.548876%20156.827%201.02108%20156.797%201.76648%20156.524C2.51187%20156.252%203.51577%20155.742%204.72017%20155.024L236.21%2017.4606C237.407%2016.7514%20238.782%2015.8473%20240.257%2014.8006C241.731%2013.7539%20243.276%2012.5853%20244.802%2011.3621C246.328%2010.139%20247.805%208.88548%20249.148%207.67397C250.49%206.46247%20251.672%205.31693%20252.625%204.30344Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",wg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:vg,alt:"",className:"image1"}),u.jsx("img",{src:yg,alt:"",className:"image2"}),u.jsx("img",{src:xg,s:!0,alt:"",className:"image3"})]}),Sg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.475%205.11776C263.391%204.04007%20264.052%203.10182%20264.419%202.35713C264.786%201.61245%20264.852%201.07606%20264.614%200.778924C264.376%200.481787%20263.838%200.429777%20263.031%200.625893C262.224%200.822009%20261.165%201.26238%20259.913%201.92158L19.3674%20128.187C18.1236%20128.838%2016.7109%20129.695%2015.2107%20130.71C13.7105%20131.725%2012.1524%20132.877%2010.6265%20134.1C9.10046%20135.323%207.63674%20136.593%206.3197%20137.836C5.00267%20139.08%203.85839%20140.272%202.9529%20141.344C2.03717%20142.422%201.37671%20143.36%201.00972%20144.105C0.642721%20144.85%200.576384%20145.386%200.814556%20145.683C1.05273%20145.98%201.5907%20146.032%202.3974%20145.836C3.20411%20145.64%204.26365%20145.2%205.51482%20144.541L246.061%2018.2749C247.305%2017.6245%20248.717%2016.7672%20250.218%2015.7524C251.718%2014.7375%20253.276%2013.5853%20254.802%2012.3621C256.328%2011.139%20257.792%209.86907%20259.109%208.6257C260.426%207.38233%20261.57%206.19009%20262.475%205.11776Z'%20fill='white'/%3e%3c/svg%3e",Cg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.559%205.11776C263.474%204.04007%20264.135%203.10182%20264.502%202.35713C264.869%201.61245%20264.935%201.07606%20264.697%200.778924C264.459%200.481787%20263.921%200.429777%20263.114%200.625893C262.307%200.822009%20261.248%201.26238%20259.997%201.92158L19.4506%20128.187C18.2069%20128.838%2016.7942%20129.695%2015.294%20130.71C13.7937%20131.725%2012.2357%20132.877%2010.7097%20134.1C9.18371%20135.323%207.71999%20136.593%206.40295%20137.836C5.08592%20139.08%203.94164%20140.272%203.03615%20141.344C2.12042%20142.422%201.45996%20143.36%201.09297%20144.105C0.725973%20144.85%200.659636%20145.386%200.897808%20145.683C1.13598%20145.98%201.67395%20146.032%202.48065%20145.836C3.28736%20145.64%204.3469%20145.2%205.59807%20144.541L246.144%2018.2749C247.388%2017.6245%20248.801%2016.7672%20250.301%2015.7524C251.801%2014.7375%20253.359%2013.5853%20254.885%2012.3621C256.411%2011.139%20257.875%209.86907%20259.192%208.6257C260.509%207.38233%20261.653%206.19009%20262.559%205.11776Z'%20fill='white'/%3e%3c/svg%3e",jg="data:image/svg+xml,%3csvg%20width='242'%20height='127'%20viewBox='0%200%20242%20127'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M239.21%204.51512C240.014%203.52722%20240.585%202.66023%20240.892%201.96418C241.198%201.26813%20241.233%200.756786%20240.995%200.459649C240.757%200.162512%20240.25%200.0854627%20239.504%200.232943C238.758%200.380424%20237.787%200.749522%20236.648%201.31894L17.6146%20110.341C16.482%20110.902%2015.2015%20111.654%2013.8469%20112.552C12.4923%20113.45%2011.0905%20114.477%209.72224%20115.574C8.35402%20116.67%207.0465%20117.815%205.8751%20118.942C4.7037%20120.068%203.69163%20121.155%202.89722%20122.138C2.09351%20123.126%201.52199%20123.993%201.21567%20124.689C0.909346%20125.385%200.87425%20125.896%201.11242%20126.193C1.35059%20126.49%201.85732%20126.567%202.60335%20126.42C3.34938%20126.273%204.31999%20125.903%205.45915%20125.334L224.493%2016.3119C225.625%2015.7506%20226.906%2014.9992%20228.26%2014.1011C229.615%2013.2031%20231.017%2012.176%20232.385%2011.0793C233.753%209.98262%20235.061%208.83794%20236.232%207.71131C237.404%206.58467%20238.416%205.49839%20239.21%204.51512Z'%20fill='white'/%3e%3c/svg%3e",kg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:Sg,alt:"",className:"style1"}),u.jsx("img",{src:Cg,alt:"",className:"style2"}),u.jsx("img",{src:jg,alt:"",className:"style3"})]}),Ng="data:image/svg+xml,%3csvg%20width='343'%20height='101'%20viewBox='0%200%20343%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M337.756%202.82053C339.3%202.19061%20340.513%201.65685%20341.327%201.25004C342.14%200.843229%20342.537%200.571418%20342.496%200.450288C342.454%200.329157%20341.973%200.361105%20341.082%200.544288C340.192%200.727471%20338.908%201.05826%20337.305%201.51758L29.4539%2089.5925C27.8637%2090.0466%2025.9836%2090.621%2023.9221%2091.2825C21.8605%2091.944%2019.6583%2092.6795%2017.4424%2093.4466C15.2266%2094.2137%2013.041%2094.9971%2011.0117%2095.7518C8.98235%2096.5064%207.14954%2097.2174%205.61891%2097.8435C4.07519%2098.4735%202.86157%2099.0072%202.04811%2099.414C1.23466%2099.8208%200.837454%20100.093%200.879386%20100.214C0.921318%20100.335%201.40156%20100.303%202.29243%20100.12C3.1833%2099.9366%204.46718%2099.6058%206.06996%2099.1465L313.921%2011.0716C315.511%2010.6174%20317.391%2010.043%20319.453%209.38155C321.514%208.72006%20323.717%207.98456%20325.932%207.21749C328.148%206.45042%20330.334%205.66696%20332.363%204.9123C334.393%204.15763%20336.225%203.44671%20337.756%202.82053Z'%20fill='purple'/%3e%3c/svg%3e",Mg="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.9999%2034H17.9999C17.4759%2034%2017.0399%2034.405%2017.0019%2034.929C16.9829%2035.19%2016.5929%2041.361%2020.6999%2045.77C23.3129%2048.577%2027.1149%2050%2031.9999%2050C36.8849%2050%2040.6869%2048.577%2043.2999%2045.77C47.4059%2041.36%2047.0159%2035.189%2046.9969%2034.929C46.9599%2034.405%2046.5239%2034%2045.9999%2034ZM41.8239%2044.42C39.6039%2046.795%2036.2999%2048%2031.9999%2048C27.7009%2048%2024.3949%2046.795%2022.1759%2044.42C19.5279%2041.586%2019.0639%2037.745%2018.9979%2036H45.0029C44.9369%2037.745%2044.4729%2041.585%2041.8239%2044.42Z'%20fill='purple'/%3e%3cpath%20d='M18.394%2028.919L25.394%2025.919C25.762%2025.762%2026%2025.4%2026%2025C26%2024.6%2025.762%2024.238%2025.394%2024.081L18.394%2021.081L17.606%2022.919L22.461%2025L17.606%2027.081L18.394%2028.919Z'%20fill='purple'/%3e%3cpath%20d='M38.606%2025.919L45.606%2028.919L46.393%2027.081L41.539%2025L46.393%2022.919L45.606%2021.081L38.606%2024.081C38.238%2024.238%2038%2024.6%2038%2025C38%2025.4%2038.238%2025.762%2038.606%2025.919Z'%20fill='purple'/%3e%3cpath%20d='M32%204C16.561%204%204%2016.561%204%2032C4%2047.439%2016.561%2060%2032%2060C47.439%2060%2060%2047.439%2060%2032C60%2016.561%2047.439%204%2032%204ZM32%2058C17.664%2058%206%2046.336%206%2032C6%2017.664%2017.664%206%2032%206C46.337%206%2058%2017.664%2058%2032C58%2046.336%2046.337%2058%2032%2058Z'%20fill='purple'/%3e%3c/svg%3e",Eg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center styleText",children:u.jsxs("h2",{children:[u.jsx("span",{style:{display:"block",color:"purple"},children:"TOUJOURS SATISFAIT !"}),"Acheter vos produits chez nous sans vous deplacer et recever les en toute sécurité dans le plus bref delai !"]})}),u.jsx("div",{children:u.jsx("img",{src:Mg,className:"styleSmile",alt:""})}),u.jsx("div",{children:u.jsx("img",{src:Ng,alt:"",className:"styleLine"})})]});var rt=function(){return rt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},rt.apply(this,arguments)};function Cl(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var de="-ms-",Pi="-moz-",re="-webkit-",Lp="comm",Vl="rule",bu="decl",Lg="@import",Dp="@keyframes",Dg="@layer",Pp=Math.abs,Uu=String.fromCharCode,Is=Object.assign;function Pg(e,t){return Ae(e,0)^45?(((t<<2^Ae(e,0))<<2^Ae(e,1))<<2^Ae(e,2))<<2^Ae(e,3):0}function Tp(e){return e.trim()}function Yt(e,t){return(e=t.exec(e))?e[0]:e}function Y(e,t,n){return e.replace(t,n)}function Qo(e,t,n){return e.indexOf(t,n)}function Ae(e,t){return e.charCodeAt(t)|0}function br(e,t,n){return e.slice(t,n)}function bt(e){return e.length}function zp(e){return e.length}function vi(e,t){return t.push(e),e}function Tg(e,t){return e.map(t).join("")}function Pd(e,t){return e.filter(function(n){return!Yt(n,t)})}var Wl=1,Ur=1,Ip=0,Nt=0,Ee=0,Kr="";function Ql(e,t,n,r,i,o,l,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Wl,column:Ur,length:l,return:"",siblings:a}}function hn(e,t){return Is(Ql("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function cr(e){for(;e.root;)e=hn(e.root,{children:[e]});vi(e,e.siblings)}function zg(){return Ee}function Ig(){return Ee=Nt>0?Ae(Kr,--Nt):0,Ur--,Ee===10&&(Ur=1,Wl--),Ee}function It(){return Ee=Nt<Ip?Ae(Kr,Nt++):0,Ur++,Ee===10&&(Ur=1,Wl++),Ee}function Gn(){return Ae(Kr,Nt)}function Yo(){return Nt}function Yl(e,t){return br(Kr,e,t)}function _s(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _g(e){return Wl=Ur=1,Ip=bt(Kr=e),Nt=0,[]}function Rg(e){return Kr="",e}function Ta(e){return Tp(Yl(Nt-1,Rs(e===91?e+2:e===40?e+1:e)))}function Ag(e){for(;(Ee=Gn())&&Ee<33;)It();return _s(e)>2||_s(Ee)>3?"":" "}function Fg(e,t){for(;--t&&It()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Yl(e,Yo()+(t<6&&Gn()==32&&It()==32))}function Rs(e){for(;It();)switch(Ee){case e:return Nt;case 34:case 39:e!==34&&e!==39&&Rs(Ee);break;case 40:e===41&&Rs(e);break;case 92:It();break}return Nt}function Og(e,t){for(;It()&&e+Ee!==57;)if(e+Ee===84&&Gn()===47)break;return"/*"+Yl(t,Nt-1)+"*"+Uu(e===47?e:It())}function $g(e){for(;!_s(Gn());)It();return Yl(e,Nt)}function bg(e){return Rg(Go("",null,null,null,[""],e=_g(e),0,[0],e))}function Go(e,t,n,r,i,o,l,a,s){for(var c=0,d=0,h=l,m=0,x=0,S=0,w=1,N=1,p=1,f=0,g="",k=i,L=o,v=r,j=g;N;)switch(S=f,f=It()){case 40:if(S!=108&&Ae(j,h-1)==58){Qo(j+=Y(Ta(f),"&","&\f"),"&\f",Pp(c?a[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:j+=Ta(f);break;case 9:case 10:case 13:case 32:j+=Ag(S);break;case 92:j+=Fg(Yo()-1,7);continue;case 47:switch(Gn()){case 42:case 47:vi(Ug(Og(It(),Yo()),t,n,s),s);break;default:j+="/"}break;case 123*w:a[c++]=bt(j)*p;case 125*w:case 59:case 0:switch(f){case 0:case 125:N=0;case 59+d:p==-1&&(j=Y(j,/\f/g,"")),x>0&&bt(j)-h&&vi(x>32?zd(j+";",r,n,h-1,s):zd(Y(j," ","")+";",r,n,h-2,s),s);break;case 59:j+=";";default:if(vi(v=Td(j,t,n,c,d,i,a,g,k=[],L=[],h,o),o),f===123)if(d===0)Go(j,t,v,v,k,o,h,a,L);else switch(m===99&&Ae(j,3)===110?100:m){case 100:case 108:case 109:case 115:Go(e,v,v,r&&vi(Td(e,v,v,0,0,i,a,g,i,k=[],h,L),L),i,L,h,a,r?k:L);break;default:Go(j,v,v,v,[""],L,0,a,L)}}c=d=x=0,w=p=1,g=j="",h=l;break;case 58:h=1+bt(j),x=S;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&Ig()==125)continue}switch(j+=Uu(f),f*w){case 38:p=d>0?1:(j+="\f",-1);break;case 44:a[c++]=(bt(j)-1)*p,p=1;break;case 64:Gn()===45&&(j+=Ta(It())),m=Gn(),d=h=bt(g=j+=$g(Yo())),f++;break;case 45:S===45&&bt(j)==2&&(w=0)}}return o}function Td(e,t,n,r,i,o,l,a,s,c,d,h){for(var m=i-1,x=i===0?o:[""],S=zp(x),w=0,N=0,p=0;w<r;++w)for(var f=0,g=br(e,m+1,m=Pp(N=l[w])),k=e;f<S;++f)(k=Tp(N>0?x[f]+" "+g:Y(g,/&\f/g,x[f])))&&(s[p++]=k);return Ql(e,t,n,i===0?Vl:a,s,c,d,h)}function Ug(e,t,n,r){return Ql(e,t,n,Lp,Uu(zg()),br(e,2,-2),0,r)}function zd(e,t,n,r,i){return Ql(e,t,n,bu,br(e,0,r),br(e,r+1,-1),r,i)}function _p(e,t,n){switch(Pg(e,t)){case 5103:return re+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return re+e+e;case 4789:return Pi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return re+e+Pi+e+de+e+e;case 5936:switch(Ae(e,t+11)){case 114:return re+e+de+Y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return re+e+de+Y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return re+e+de+Y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return re+e+de+e+e;case 6165:return re+e+de+"flex-"+e+e;case 5187:return re+e+Y(e,/(\w+).+(:[^]+)/,re+"box-$1$2"+de+"flex-$1$2")+e;case 5443:return re+e+de+"flex-item-"+Y(e,/flex-|-self/g,"")+(Yt(e,/flex-|baseline/)?"":de+"grid-row-"+Y(e,/flex-|-self/g,""))+e;case 4675:return re+e+de+"flex-line-pack"+Y(e,/align-content|flex-|-self/g,"")+e;case 5548:return re+e+de+Y(e,"shrink","negative")+e;case 5292:return re+e+de+Y(e,"basis","preferred-size")+e;case 6060:return re+"box-"+Y(e,"-grow","")+re+e+de+Y(e,"grow","positive")+e;case 4554:return re+Y(e,/([^-])(transform)/g,"$1"+re+"$2")+e;case 6187:return Y(Y(Y(e,/(zoom-|grab)/,re+"$1"),/(image-set)/,re+"$1"),e,"")+e;case 5495:case 3959:return Y(e,/(image-set\([^]*)/,re+"$1$`$1");case 4968:return Y(Y(e,/(.+:)(flex-)?(.*)/,re+"box-pack:$3"+de+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+re+e+e;case 4200:if(!Yt(e,/flex-|baseline/))return de+"grid-column-align"+br(e,t)+e;break;case 2592:case 3360:return de+Y(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Yt(r.props,/grid-\w+-end/)})?~Qo(e+(n=n[t].value),"span",0)?e:de+Y(e,"-start","")+e+de+"grid-row-span:"+(~Qo(n,"span",0)?Yt(n,/\d+/):+Yt(n,/\d+/)-+Yt(e,/\d+/))+";":de+Y(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Yt(r.props,/grid-\w+-start/)})?e:de+Y(Y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Y(e,/(.+)-inline(.+)/,re+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bt(e)-1-t>6)switch(Ae(e,t+1)){case 109:if(Ae(e,t+4)!==45)break;case 102:return Y(e,/(.+:)(.+)-([^]+)/,"$1"+re+"$2-$3$1"+Pi+(Ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Qo(e,"stretch",0)?_p(Y(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,l,a,s,c){return de+i+":"+o+c+(l?de+i+"-span:"+(a?s:+s-+o)+c:"")+e});case 4949:if(Ae(e,t+6)===121)return Y(e,":",":"+re)+e;break;case 6444:switch(Ae(e,Ae(e,14)===45?18:11)){case 120:return Y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+re+(Ae(e,14)===45?"inline-":"")+"box$3$1"+re+"$2$3$1"+de+"$2box$3")+e;case 100:return Y(e,":",":"+de)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(e,"scroll-","scroll-snap-")+e}return e}function jl(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Bg(e,t,n,r){switch(e.type){case Dg:if(e.children.length)break;case Lg:case bu:return e.return=e.return||e.value;case Lp:return"";case Dp:return e.return=e.value+"{"+jl(e.children,r)+"}";case Vl:if(!bt(e.value=e.props.join(",")))return""}return bt(n=jl(e.children,r))?e.return=e.value+"{"+n+"}":""}function Hg(e){var t=zp(e);return function(n,r,i,o){for(var l="",a=0;a<t;a++)l+=e[a](n,r,i,o)||"";return l}}function Vg(e){return function(t){t.root||(t=t.return)&&e(t)}}function Wg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case bu:e.return=_p(e.value,e.length,n);return;case Dp:return jl([hn(e,{value:Y(e.value,"@","@"+re)})],r);case Vl:if(e.length)return Tg(n=e.props,function(i){switch(Yt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":cr(hn(e,{props:[Y(i,/:(read-\w+)/,":"+Pi+"$1")]})),cr(hn(e,{props:[i]})),Is(e,{props:Pd(n,r)});break;case"::placeholder":cr(hn(e,{props:[Y(i,/:(plac\w+)/,":"+re+"input-$1")]})),cr(hn(e,{props:[Y(i,/:(plac\w+)/,":"+Pi+"$1")]})),cr(hn(e,{props:[Y(i,/:(plac\w+)/,de+"input-$1")]})),cr(hn(e,{props:[i]})),Is(e,{props:Pd(n,r)});break}return""})}}var Qg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ut={},Br=typeof process<"u"&&ut!==void 0&&(ut.REACT_APP_SC_ATTR||ut.SC_ATTR)||"data-styled",Rp="active",Ap="data-styled-version",Gl="6.1.8",Bu=`/*!sc*/
`,Hu=typeof window<"u"&&"HTMLElement"in window,Yg=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ut.REACT_APP_SC_DISABLE_SPEEDY!==""?ut.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ut.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ut!==void 0&&ut.SC_DISABLE_SPEEDY!==void 0&&ut.SC_DISABLE_SPEEDY!==""&&ut.SC_DISABLE_SPEEDY!=="false"&&ut.SC_DISABLE_SPEEDY),Kl=Object.freeze([]),Hr=Object.freeze({});function Gg(e,t,n){return n===void 0&&(n=Hr),e.theme!==n.theme&&e.theme||t||n.theme}var Fp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Kg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qg=/(^-|-$)/g;function Id(e){return e.replace(Kg,"-").replace(qg,"")}var Zg=/(a)(d)/gi,Do=52,_d=function(e){return String.fromCharCode(e+(e>25?39:97))};function As(e){var t,n="";for(t=Math.abs(e);t>Do;t=t/Do|0)n=_d(t%Do)+n;return(_d(t%Do)+n).replace(Zg,"$1-$2")}var za,Op=5381,Mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},$p=function(e){return Mr(Op,e)};function Xg(e){return As($p(e)>>>0)}function Jg(e){return e.displayName||e.name||"Component"}function Ia(e){return typeof e=="string"&&!0}var bp=typeof Symbol=="function"&&Symbol.for,Up=bp?Symbol.for("react.memo"):60115,ev=bp?Symbol.for("react.forward_ref"):60112,tv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rv=((za={})[ev]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},za[Up]=Bp,za);function Rd(e){return("type"in(t=e)&&t.type.$$typeof)===Up?Bp:"$$typeof"in e?rv[e.$$typeof]:tv;var t}var iv=Object.defineProperty,ov=Object.getOwnPropertyNames,Ad=Object.getOwnPropertySymbols,lv=Object.getOwnPropertyDescriptor,av=Object.getPrototypeOf,Fd=Object.prototype;function Hp(e,t,n){if(typeof t!="string"){if(Fd){var r=av(t);r&&r!==Fd&&Hp(e,r,n)}var i=ov(t);Ad&&(i=i.concat(Ad(t)));for(var o=Rd(e),l=Rd(t),a=0;a<i.length;++a){var s=i[a];if(!(s in nv||n&&n[s]||l&&s in l||o&&s in o)){var c=lv(t,s);try{iv(e,s,c)}catch{}}}}return e}function Vr(e){return typeof e=="function"}function Vu(e){return typeof e=="object"&&"styledComponentId"in e}function Wn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Od(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Xi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Fs(e,t,n){if(n===void 0&&(n=!1),!n&&!Xi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Fs(e[r],t[r]);else if(Xi(t))for(var r in t)e[r]=Fs(e[r],t[r]);return e}function Wu(e,t){Object.defineProperty(e,"toString",{value:t})}function oo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var sv=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw oo(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var l=i;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,l=i;l<o;l++)n+="".concat(this.tag.getRule(l)).concat(Bu);return n},e}(),Ko=new Map,kl=new Map,qo=1,Po=function(e){if(Ko.has(e))return Ko.get(e);for(;kl.has(qo);)qo++;var t=qo++;return Ko.set(e,t),kl.set(t,e),t},uv=function(e,t){qo=t+1,Ko.set(e,t),kl.set(t,e)},cv="style[".concat(Br,"][").concat(Ap,'="').concat(Gl,'"]'),dv=new RegExp("^".concat(Br,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fv=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},pv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Bu),i=[],o=0,l=r.length;o<l;o++){var a=r[o].trim();if(a){var s=a.match(dv);if(s){var c=0|parseInt(s[1],10),d=s[2];c!==0&&(uv(d,c),fv(e,d,s[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function hv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var s=Array.from(a.querySelectorAll("style[".concat(Br,"]")));return s[s.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Br,Rp),r.setAttribute(Ap,Gl);var l=hv();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},mv=function(){function e(t){this.element=Vp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var l=r[i];if(l.ownerNode===n)return l}throw oo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),gv=function(){function e(t){this.element=Vp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),vv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),$d=Hu,yv={isServer:!Hu,useCSSOMInjection:!Yg},Wp=function(){function e(t,n,r){t===void 0&&(t=Hr),n===void 0&&(n={});var i=this;this.options=rt(rt({},yv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Hu&&$d&&($d=!1,function(o){for(var l=document.querySelectorAll(cv),a=0,s=l.length;a<s;a++){var c=l[a];c&&c.getAttribute(Br)!==Rp&&(pv(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Wu(this,function(){return function(o){for(var l=o.getTag(),a=l.length,s="",c=function(h){var m=function(p){return kl.get(p)}(h);if(m===void 0)return"continue";var x=o.names.get(m),S=l.getGroup(h);if(x===void 0||S.length===0)return"continue";var w="".concat(Br,".g").concat(h,'[id="').concat(m,'"]'),N="";x!==void 0&&x.forEach(function(p){p.length>0&&(N+="".concat(p,","))}),s+="".concat(S).concat(w,'{content:"').concat(N,'"}').concat(Bu)},d=0;d<a;d++)c(d);return s}(i)})}return e.registerId=function(t){return Po(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(rt(rt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new vv(i):r?new mv(i):new gv(i)}(this.options),new sv(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Po(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Po(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Po(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),xv=/&/g,wv=/^\s*\/\/.*$/gm;function Qp(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Qp(n.children,t)),n})}function Sv(e){var t,n,r,i=e===void 0?Hr:e,o=i.options,l=o===void 0?Hr:o,a=i.plugins,s=a===void 0?Kl:a,c=function(m,x,S){return S.startsWith(n)&&S.endsWith(n)&&S.replaceAll(n,"").length>0?".".concat(t):m},d=s.slice();d.push(function(m){m.type===Vl&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(xv,n).replace(r,c))}),l.prefix&&d.push(Wg),d.push(Bg);var h=function(m,x,S,w){x===void 0&&(x=""),S===void 0&&(S=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var N=m.replace(wv,""),p=bg(S||x?"".concat(S," ").concat(x," { ").concat(N," }"):N);l.namespace&&(p=Qp(p,l.namespace));var f=[];return jl(p,Hg(d.concat(Vg(function(g){return f.push(g)})))),f};return h.hash=s.length?s.reduce(function(m,x){return x.name||oo(15),Mr(m,x.name)},Op).toString():"",h}var Cv=new Wp,Os=Sv(),Yp=Ke.createContext({shouldForwardProp:void 0,styleSheet:Cv,stylis:Os});Yp.Consumer;Ke.createContext(void 0);function bd(){return E.useContext(Yp)}var jv=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Os);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wu(this,function(){throw oo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Os),this.name+t.hash},e}(),kv=function(e){return e>="A"&&e<="Z"};function Ud(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;kv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Gp=function(e){return e==null||e===!1||e===""},Kp=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Gp(o)&&(Array.isArray(o)&&o.isCss||Vr(o)?r.push("".concat(Ud(i),":"),o,";"):Xi(o)?r.push.apply(r,Cl(Cl(["".concat(i," {")],Kp(o),!1),["}"],!1)):r.push("".concat(Ud(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Qg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Kn(e,t,n,r){if(Gp(e))return[];if(Vu(e))return[".".concat(e.styledComponentId)];if(Vr(e)){if(!Vr(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Kn(i,t,n,r)}var o;return e instanceof jv?n?(e.inject(n,r),[e.getName(r)]):[e]:Xi(e)?Kp(e):Array.isArray(e)?Array.prototype.concat.apply(Kl,e.map(function(l){return Kn(l,t,n,r)})):[e.toString()]}function Nv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Vr(n)&&!Vu(n))return!1}return!0}var Mv=$p(Gl),Ev=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Nv(t),this.componentId=n,this.baseHash=Mr(Mv,n),this.baseStyle=r,Wp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Wn(i,this.staticRulesId);else{var o=Od(Kn(this.rules,t,n,r)),l=As(Mr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(o,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}i=Wn(i,l),this.staticRulesId=l}else{for(var s=Mr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var m=Od(Kn(h,t,n,r));s=Mr(s,m+d),c+=m}}if(c){var x=As(s>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(c,".".concat(x),void 0,this.componentId)),i=Wn(i,x)}}return i},e}(),qp=Ke.createContext(void 0);qp.Consumer;var _a={};function Lv(e,t,n){var r=Vu(e),i=e,o=!Ia(e),l=t.attrs,a=l===void 0?Kl:l,s=t.componentId,c=s===void 0?function(k,L){var v=typeof k!="string"?"sc":Id(k);_a[v]=(_a[v]||0)+1;var j="".concat(v,"-").concat(Xg(Gl+v+_a[v]));return L?"".concat(L,"-").concat(j):j}(t.displayName,t.parentComponentId):s,d=t.displayName,h=d===void 0?function(k){return Ia(k)?"styled.".concat(k):"Styled(".concat(Jg(k),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Id(t.displayName),"-").concat(t.componentId):t.componentId||c,x=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,S=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var N=t.shouldForwardProp;S=function(k,L){return w(k,L)&&N(k,L)}}else S=w}var p=new Ev(n,m,r?i.componentStyle:void 0);function f(k,L){return function(v,j,P){var _=v.attrs,$=v.componentStyle,J=v.defaultProps,Ce=v.foldedComponentIds,ye=v.styledComponentId,Je=v.target,sn=Ke.useContext(qp),Rt=bd(),le=v.shouldForwardProp||Rt.shouldForwardProp,z=Gg(j,sn,J)||Hr,F=function(He,ke,st){for(var Rn,Vt=rt(rt({},ke),{className:void 0,theme:st}),qr=0;qr<He.length;qr+=1){var Te=Vr(Rn=He[qr])?Rn(Vt):Rn;for(var et in Te)Vt[et]=et==="className"?Wn(Vt[et],Te[et]):et==="style"?rt(rt({},Vt[et]),Te[et]):Te[et]}return ke.className&&(Vt.className=Wn(Vt.className,ke.className)),Vt}(_,j,z),U=F.as||Je,q={};for(var ee in F)F[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&F.theme===z||(ee==="forwardedAs"?q.as=F.forwardedAs:le&&!le(ee,U)||(q[ee]=F[ee]));var at=function(He,ke){var st=bd(),Rn=He.generateAndInjectStyles(ke,st.styleSheet,st.stylis);return Rn}($,F),je=Wn(Ce,ye);return at&&(je+=" "+at),F.className&&(je+=" "+F.className),q[Ia(U)&&!Fp.has(U)?"class":"className"]=je,q.ref=P,E.createElement(U,q)}(g,k,L)}f.displayName=h;var g=Ke.forwardRef(f);return g.attrs=x,g.componentStyle=p,g.displayName=h,g.shouldForwardProp=S,g.foldedComponentIds=r?Wn(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=m,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(L){for(var v=[],j=1;j<arguments.length;j++)v[j-1]=arguments[j];for(var P=0,_=v;P<_.length;P++)Fs(L,_[P],!0);return L}({},i.defaultProps,k):k}}),Wu(g,function(){return".".concat(g.styledComponentId)}),o&&Hp(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Bd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Hd=function(e){return Object.assign(e,{isCss:!0})};function Dv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Vr(e)||Xi(e))return Hd(Kn(Bd(Kl,Cl([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Kn(r):Hd(Kn(Bd(r,t)))}function $s(e,t,n){if(n===void 0&&(n=Hr),!t)throw oo(1,t);var r=function(i){for(var o=[],l=1;l<arguments.length;l++)o[l-1]=arguments[l];return e(t,n,Dv.apply(void 0,Cl([i],o,!1)))};return r.attrs=function(i){return $s(e,t,rt(rt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $s(e,t,rt(rt({},n),i))},r}var Zp=function(e){return $s(Lv,e)},ne=Zp;Fp.forEach(function(e){ne[e]=Zp(e)});const Pv=ne(Mp)`
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

`,Tv=ne(Mp)`
.img{
    position:absolute;
    top:5rem;
    left:3.7rem;
    display:block;
}
    

`,zv=ne(wg)`

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
`,Iv=ne(Eg)`

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


`,_v=ne(kg)`


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
    `,Rv=ne(Ep)`

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
`,Av=ne(Ep)`

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
`,Fv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsxs("div",{className:"first-container",children:[u.jsx(_v,{}),u.jsx(Rv,{})]})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(Iv,{})})}),u.jsx("div",{className:"third",children:u.jsxs("div",{className:"third-container",children:[u.jsx(Pv,{}),u.jsx(zv,{})]})})]}),Ov=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("h2",{children:u.jsx("span",{children:"chez Ardi"})}),u.jsx("h3",{children:"Commandez vos produits et soyez livrer où que vous soyer en RDC"}),u.jsx("div",{})]}),ie={MAIN:"white",SECOND:"#F9FF00",THIRD:"grey",FOURTH:"#DADAD6",FIFTH:"black",SIXTH:"#b1b8c2"},W={MAIN:"black",SECOND:"black",THIRD:"black",FOURTH:"black",FIFTH:"white"},$v=ne(Ov)`
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
    color:${W.FOURTH};
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

`,bv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"container-first",children:u.jsx($v,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"container-second",children:u.jsx(Av,{})})})]}),Uv="data:image/svg+xml,%3csvg%20width='240'%20height='201'%20viewBox='0%200%20240%20201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_184_251)'%3e%3cpath%20d='M209.83%2083.5349L52.22%2038.9572C47.8199%2037.7127%2043.2414%2037.787%2039.4918%2039.1637C35.7422%2040.5404%2033.1286%2043.1068%2032.2259%2046.2982L20.3139%2088.415C19.4112%2091.6065%2020.2935%2095.1616%2022.7665%2098.2983C25.2396%20101.435%2029.1009%20103.896%2033.501%20105.141L114.795%20128.133L137.936%20147.675L130.307%20132.521L191.111%20149.718C195.511%20150.963%20200.09%20150.889%20203.84%20149.512C207.589%20148.135%20210.203%20145.569%20211.105%20142.377L223.017%20100.261C223.92%2097.0692%20223.038%2093.5141%20220.565%2090.3774C218.092%2087.2407%20214.23%2084.7794%20209.83%2083.5349Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.8166%2050.9906C47.5827%2064.2224%2043.3749%2094.9374%2045.1998%2095.4536C47.0248%2095.9698%2078.2222%2065.8055%2080.296%2066.3921C82.3698%2066.9786%2078.9617%2099.9342%2090.8239%20108.358C93.8019%2097.8285%20103.606%2072.9849%20116.03%2066.7518'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M149.102%20105.347C143.623%20114.584%20132.052%20120.018%20123.259%20117.531C114.466%20115.044%20111.852%20105.598%20117.331%2096.3608C122.81%2087.1239%20134.381%2081.6892%20143.174%2084.1762C151.967%2086.6632%20154.581%2096.1098%20149.102%20105.347Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M198.873%20119.424C193.394%20128.661%20181.823%20134.095%20173.03%20131.608C164.237%20129.121%20161.623%20119.675%20167.102%20110.438C172.582%20101.201%20184.153%2095.7664%20192.946%2098.2534C201.739%20100.74%20204.353%20110.187%20198.873%20119.424Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_184_251'%3e%3crect%20width='206.897'%20height='150.065'%20fill='purple'%20transform='translate(40.8413)%20rotate(15.7927)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Bv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("p",{children:"Une nouvelle expérience ! Nous livrons partout dans la ville de Kinshasa"})}),u.jsx("div",{className:"style3",children:u.jsx("img",{src:Uv,alt:""})})]}),Hv="/reactdeploy4/assets/dots1-wnWSIBb8.svg",Vv="/reactdeploy4/assets/dots2-WthBLMDD.svg",Wv="/reactdeploy4/assets/dots3-BvKBFpC0.svg",Qv="/reactdeploy4/assets/dots4-jerWoYTl.svg",Yv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx(Tv,{}),u.jsx("img",{src:Hv,className:"style2",alt:""}),u.jsx("img",{src:Vv,className:"style3",alt:""}),u.jsx("img",{src:Wv,className:"style4",alt:""}),u.jsx("img",{src:Qv,className:"style5",alt:""})]}),Gv="/reactdeploy4/assets/png_10-OhKyeJ3r.png",Kv=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Gv,alt:"",className:"img",style:{width:"100%",height:"100%"}})}),qv="/reactdeploy4/assets/dots5-wrrVGBo3.svg",Zv="/reactdeploy4/assets/dots6-87oX7T93.svg",Xv="/reactdeploy4/assets/dots7-W2CVIBUv.svg",Jv="/reactdeploy4/assets/dots8-mWlib7R3.svg",ey=ne(Kv)`
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
`,ty=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:qv,className:"style2",alt:""}),u.jsx("img",{src:Zv,className:"style3",alt:""}),u.jsx("img",{src:Jv,className:"style5",alt:""}),u.jsx("img",{src:Xv,className:"style4",alt:""}),u.jsx(ey,{})]}),ny=ne(Yv)`

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
`,ry=ne(ty)`

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

`,iy=ne(Bv)`
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
`,oy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"first-container",children:u.jsx(ny,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(iy,{})})}),u.jsx("div",{className:"third",children:u.jsx("div",{className:"third-container",children:u.jsx(ry,{})})})]}),ly=ne(Fv)`
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

`,ay=ne(bv)`
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
`,sy=ne(oy)`

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
`,uy=({className:e})=>u.jsx("div",{className:e,children:u.jsxs("div",{className:"phoneStyle",children:[u.jsx("div",{className:"img"}),u.jsx("div",{className:"text",children:"Livraison gratuite à partir de 50$"}),u.jsx("div",{className:"forColor"})]})}),cy="/reactdeploy4/assets/forDesign1-wUKU69GG.jpg",dy=ne(uy)`

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
            background-image:url(${cy});
            background-position:0 0;
            background-repeat:no-repeat;
            background-size:cover;

        }
        .phoneStyle>div:nth-child(2){
            position: absolute;
            bottom:88px;
            right: 0;
            font-size:20px;
            line-height:25px;
            font-weight:600;
            letter-spacing:1.5px;
            height:90px;
            padding:0 10px;
            width:150px;
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


`,Xp=()=>{const[e,t]=E.useState(0),n=[u.jsx(sy,{}),u.jsx(ay,{}),u.jsx(ly,{})],r=()=>{t(i=>(i+1)%n.length)};return E.useEffect(()=>{const i=setInterval(()=>{r()},5e3);return()=>{clearInterval(i)}},[]),u.jsxs("div",{className:"section1-1",children:[u.jsx("div",{className:"box-section1-1",children:n[e]}),u.jsx(dy,{})]})},$t="/reactdeploy4/assets/png_1-psFfvH_j.png",yi="/reactdeploy4/assets/png_3-ilcu5yhJ.png",To="/reactdeploy4/assets/png_5-PB77ItoP.png",xi="/reactdeploy4/assets/png_6-IaEkgori.png",b="/reactdeploy4/assets/png_9-HkEXkKWn.png",fy=({className:e,children:t})=>u.jsx("div",{children:u.jsx("button",{className:`btn btn-outline-success  form-control ${e}`,type:"submit",children:t})}),py="data:image/svg+xml,%3csvg%20width='40'%20height='41'%20viewBox='0%200%2040%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_99_272)'%3e%3cpath%20d='M30.4126%2029.25H16.9126C16.0888%2029.2516%2015.2875%2028.9819%2014.6323%2028.4826C13.9771%2027.9833%2013.5045%2027.2822%2013.2876%2026.4875L10.0001%2014.575C9.94953%2014.3896%209.9424%2014.195%209.97926%2014.0064C10.0161%2013.8178%2010.096%2013.6402%2010.2126%2013.4875C10.3341%2013.3294%2010.4917%2013.2026%2010.6722%2013.1178C10.8527%2013.033%2011.0508%2012.9926%2011.2501%2013H35.0001C35.1837%2012.9997%2035.3652%2013.0399%2035.5315%2013.1177C35.6979%2013.1954%2035.8451%2013.3089%2035.9626%2013.45C36.0786%2013.5913%2036.1623%2013.7563%2036.2076%2013.9334C36.253%2014.1105%2036.259%2014.2954%2036.2251%2014.475L34.1001%2026.175C33.9422%2027.0379%2033.4867%2027.8182%2032.813%2028.38C32.1392%2028.9419%2031.2899%2029.2497%2030.4126%2029.25ZM12.9126%2015.5L15.7251%2025.825C15.7983%2026.0977%2015.9618%2026.3376%2016.1887%2026.5055C16.4157%2026.6735%2016.6929%2026.7597%2016.9751%2026.75H30.4751C30.7711%2026.7548%2031.0592%2026.6545%2031.2881%2026.4668C31.517%2026.2791%2031.6718%2026.0162%2031.7251%2025.725L33.5001%2015.5H12.9126Z'%20fill='black'/%3e%3cpath%20d='M11.25%2015.5C10.9694%2015.5104%2010.6936%2015.426%2010.4668%2015.2605C10.24%2015.0949%2010.0756%2014.8579%2010%2014.5875L8.0625%207.6625C7.98689%207.39213%207.82246%207.15508%207.5957%206.98954C7.36894%206.82401%207.09306%206.73963%206.8125%206.75H5C4.66848%206.75%204.35054%206.61831%204.11612%206.38389C3.8817%206.14947%203.75%205.83152%203.75%205.5C3.75%205.16848%203.8817%204.85054%204.11612%204.61612C4.35054%204.3817%204.66848%204.25%205%204.25H6.8625C7.67925%204.24885%208.47404%204.51438%209.12608%205.00623C9.77812%205.49808%2010.2518%206.18936%2010.475%206.975L12.5%2013.9125C12.5508%2014.0766%2012.5672%2014.2495%2012.5482%2014.4203C12.5293%2014.5911%2012.4753%2014.7561%2012.3896%2014.9051C12.304%2015.054%2012.1886%2015.1838%2012.0506%2015.2861C11.9125%2015.3885%2011.7549%2015.4613%2011.5875%2015.5C11.4757%2015.5182%2011.3618%2015.5182%2011.25%2015.5Z'%20fill='black'/%3e%3cpath%20d='M20%2036.75C19.5055%2036.75%2019.0222%2036.6034%2018.6111%2036.3287C18.2%2036.054%2017.8795%2035.6635%2017.6903%2035.2067C17.5011%2034.7499%2017.4516%2034.2472%2017.548%2033.7623C17.6445%2033.2773%2017.8826%2032.8319%2018.2322%2032.4822C18.5819%2032.1326%2019.0273%2031.8945%2019.5123%2031.798C19.9972%2031.7016%2020.4999%2031.7511%2020.9567%2031.9403C21.4135%2032.1295%2021.804%2032.45%2022.0787%2032.8611C22.3534%2033.2722%2022.5%2033.7555%2022.5%2034.25C22.5%2034.913%2022.2366%2035.5489%2021.7678%2036.0178C21.2989%2036.4866%2020.663%2036.75%2020%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2036.75C27.0055%2036.75%2026.5222%2036.6034%2026.1111%2036.3287C25.7%2036.054%2025.3795%2035.6635%2025.1903%2035.2067C25.0011%2034.7499%2024.9516%2034.2472%2025.048%2033.7623C25.1445%2033.2773%2025.3826%2032.8319%2025.7322%2032.4822C26.0819%2032.1326%2026.5273%2031.8945%2027.0123%2031.798C27.4972%2031.7016%2027.9999%2031.7511%2028.4567%2031.9403C28.9135%2032.1295%2029.304%2032.45%2029.5787%2032.8611C29.8534%2033.2722%2030%2033.7555%2030%2034.25C30%2034.913%2029.7366%2035.5489%2029.2678%2036.0178C28.7989%2036.4866%2028.163%2036.75%2027.5%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2021.75H20C19.6685%2021.75%2019.3505%2021.6183%2019.1161%2021.3839C18.8817%2021.1495%2018.75%2020.8315%2018.75%2020.5C18.75%2020.1685%2018.8817%2019.8505%2019.1161%2019.6161C19.3505%2019.3817%2019.6685%2019.25%2020%2019.25H27.5C27.8315%2019.25%2028.1495%2019.3817%2028.3839%2019.6161C28.6183%2019.8505%2028.75%2020.1685%2028.75%2020.5C28.75%2020.8315%2028.6183%2021.1495%2028.3839%2021.3839C28.1495%2021.6183%2027.8315%2021.75%2027.5%2021.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_99_272'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",hy=({className:e})=>u.jsxs("div",{className:` ${e}`,children:[u.jsx("img",{src:py,alt:"",className:"w-100 h-100"}),u.jsx("div",{className:"counter",children:"02"})]}),my="/reactdeploy4/assets/logo-MiIbGZY7.jpg",gy="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjM1cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzVweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IldoYXRzYXBwIj48cGF0aCBkPSJNMTYuMDA0LDMxYy0yLjg2OCwwLTUuNjQ2LTAuODExLTguMDUtMi4zNDdsLTUuMzQ4LDEuNzA5Yy0wLjE3OSwwLjA1Ny0wLjM3NiwwLjAwOS0wLjUwOS0wLjEyNSAgIGMtMC4xMzItMC4xMzQtMC4xNzgtMC4zMzItMC4xMTctMC41MWwxLjcyNS01LjE0NkMxLjkzNSwyMi4wNjEsMSwxOS4xLDEsMTZjMC00LjA3NiwxLjYxMi03Ljg5MSw0LjUzOS0xMC43NDIgICBDNS43MzYsNS4wNjYsNi4wNTMsNS4wNyw2LjI0Niw1LjI2N2MwLjE5MiwwLjE5OCwwLjE4OCwwLjUxNS0wLjAxLDAuNzA3QzMuNTA1LDguNjM2LDIsMTIuMTk2LDIsMTYgICBjMCwyLjk3NCwwLjkyMiw1LjgxMSwyLjY2NSw4LjIwNGMwLjA5NSwwLjEzMSwwLjEyMSwwLjMsMC4wNjksMC40NTRsLTEuNDkyLDQuNDUybDQuNjMzLTEuNDgxICAgYzAuMTQ0LTAuMDQ3LDAuMzAyLTAuMDI0LDAuNDI5LDAuMDU5QzEwLjU4OSwyOS4yLDEzLjI1MiwzMCwxNi4wMDQsMzBDMjMuNzIyLDMwLDMwLDIzLjcyLDMwLDE2YzAtNy43MTktNi4yNzgtMTQtMTMuOTk2LTE0ICAgYy0wLjAwMSwwLTAuMDAyLDAtMC4wMDMsMGMtMi4xNjcsMC00LjIzOCwwLjQ4MS02LjE2NCwxLjQyOUM5LjU4OSwzLjU1LDkuMjksMy40NDksOS4xNjgsMy4yMDJTOS4xNDcsMi42NTQsOS4zOTYsMi41MzIgICBDMTEuNDYsMS41MTYsMTMuNjgyLDEsMTUuOTk2LDFDMjQuMjcyLDEsMzEsNy43MjksMzEsMTZTMjQuMjcyLDMxLDE2LjAwNCwzMXoiIGZpbGw9IiMwMDgwMDAiLz48Zz48cGF0aCBkPSJNMjAuNjAyLDI0LjQ5M0wyMC42MDIsMjQuNDkzYy0xLjAxMSwwLTIuNDIyLTAuMzktNC40MzktMS4yMjZjLTIuNjMzLTEuMDktNS4yNDMtMy4zNzQtNy4zNS02LjQyOSAgICBsLTAuMDc1LTAuMTA3Yy0wLjY5Ni0wLjk1MS0xLjgyMy0yLjc3My0xLjgyMy00LjY3NWMwLTIuMjI5LDEuMTE1LTMuMzYsMS41OTItMy44NDNjMC40NDktMC40NjEsMS4xMi0wLjcwNiwxLjg3NC0wLjcwNiAgICBjMC4xOSwwLDAuMzYsMC4wMDksMC41MTUsMC4wMThjMC42MzUsMC4wMjUsMS4wMDMsMC4xODUsMS4zNTMsMS4wMjJsMC4zNjMsMC44OGMwLjM4NCwwLjkzMSwwLjg1NywyLjA4LDAuOTMxLDIuMjM1ICAgIGMwLjA4MiwwLjE2OSwwLjMzMSwwLjY4OCwwLjA1NCwxLjIyOGMtMC4xNDgsMC4zMTYtMC4yOTMsMC40ODMtMC40OTIsMC43MTNjLTAuMTQsMC4xNjEtMC4yMzMsMC4yNjEtMC4zMjgsMC4zNjEgICAgYy0wLjExLDAuMTE4LTAuMjIyLDAuMjM0LTAuMzM0LDAuMzc1Yy0wLjE5MywwLjIyNi0wLjE5MywwLjIyNi0wLjEyOCwwLjMzOWMwLjM3LDAuNjI1LDEuMTU3LDEuODI1LDIuMjUzLDIuOCAgICBjMS40MjIsMS4yNjUsMi41NzEsMS43MywzLjEyMywxLjk1NGwwLjEzNywwLjA1NmMwLjE0NSwwLjA2LDAuMzI4LDAuMTAzLDAuNDY1LTAuMDQyYzAuMjQ4LTAuMjY3LDAuNTYyLTAuNzA2LDAuODk0LTEuMTcxICAgIGwwLjE5OS0wLjI3OWMwLjM0OS0wLjQ5MywwLjc3OS0wLjU5NywxLjA3OC0wLjU5N2MwLjE3NSwwLDAuMzU3LDAuMDM1LDAuNTQzLDAuMTA1YzAuNDY1LDAuMTYyLDIuOTEyLDEuMzgxLDIuOTM3LDEuMzkzICAgIGwwLjIzNSwwLjExNWMwLjM1LDAuMTY4LDAuNjI2LDAuMzAxLDAuNzg0LDAuNTc5YzAuMjI5LDAuMzk4LDAuMTM5LDEuNDQyLTAuMjA5LDIuNDI3Yy0wLjQxNywxLjE3OS0xLjk2NywyLjEtMy4yMTMsMi4zNjggICAgQzIxLjI5MywyNC40MzgsMjAuOTk4LDI0LjQ5MywyMC42MDIsMjQuNDkzeiBNMTAuMzgsOC41MDdjLTAuNDcyLDAtMC45MDIsMC4xNDItMS4xMjQsMC4zNjljLTAuNDYxLDAuNDY4LTEuMzQyLDEuMzYxLTEuMzQyLDMuMTggICAgYzAsMS4xODEsMC41ODUsMi42NTgsMS42MDUsNC4wNTFsMC4xMTYsMC4xNjVjMS45OTgsMi44OTgsNC40NTIsNS4wNTUsNi45MDksNi4wNzJjMS44OTMsMC43ODUsMy4xODIsMS4xNSw0LjA1NywxLjE1bDAsMCAgICBjMC4zLDAsMC41MjMtMC4wNDIsMC43MjctMC4wODVjMC45NzMtMC4yMSwyLjE5OC0wLjkyOSwyLjQ3OS0xLjcyNGMwLjMwNC0wLjg1NywwLjI5OC0xLjUxNiwwLjI2Mi0xLjY0NyAgICBjLTAuMDAyLDAuMDMxLTAuMTgyLTAuMDU0LTAuMzI3LTAuMTI0bC0wLjI0OS0wLjEyMmMtMC43MDEtMC4zNTEtMi41MTMtMS4yMzYtMi44My0xLjM0N2MtMC4wODQtMC4wMzItMC4xNDgtMC4wNDUtMC4yMDItMC4wNDUgICAgYy0wLjA0NSwwLTAuMTM4LDAtMC4yNjQsMC4xNzhsLTAuMiwwLjI4Yy0wLjM1MSwwLjQ5Mi0wLjY4MiwwLjk1Ni0wLjk3NiwxLjI3MmMtMC4zNzcsMC40MDMtMS4wMjQsMC41MTUtMS41ODEsMC4yODMgICAgbC0wLjEyNy0wLjA1MmMtMC41NTctMC4yMjUtMS44NjItMC43NTMtMy40MTMtMi4xMzNjLTEuMTk2LTEuMDY2LTIuMDQ5LTIuMzYzLTIuNDUxLTMuMDQyYy0wLjQyMy0wLjcyOSwwLjAwNi0xLjIzMSwwLjIxMi0xLjQ3MiAgICBjMC4xMzEtMC4xNjMsMC4yNTktMC4yOTgsMC4zODctMC40MzRjMC4wODQtMC4wODksMC4xNjgtMC4xNzgsMC4yNTQtMC4yNzhjMC4yMjUtMC4yNTksMC4yOTktMC4zNDUsMC4zOTYtMC41NTIgICAgYzAuMDI5LTAuMDU3LDAuMDQ1LTAuMTM4LTAuMDU5LTAuMzU0Yy0wLjA3Ni0wLjE2LTAuNTYyLTEuMzM0LTAuOTUzLTIuMjg2bC0wLjM2Mi0wLjg3N2MtMC4xNjUtMC4zOTYtMC4xNjUtMC4zOTYtMC40NzktMC40MDggICAgQzEwLjcwMSw4LjUxNSwxMC41NDksOC41MDcsMTAuMzgsOC41MDd6IiBmaWxsPSIjMDA4MDAwIi8+PC9nPjxnPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQiIGZpbGw9IiMwMDgwMDAiIHI9IjAuNSIvPjwvZz48L2c+PC9zdmc+";var Jp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Vd=Ke.createContext&&Ke.createContext(Jp),Dn=function(){return Dn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Dn.apply(this,arguments)},vy=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function eh(e){return e&&e.map(function(t,n){return Ke.createElement(t.tag,Dn({key:n},t.attr),eh(t.child))})}function yy(e){return function(t){return Ke.createElement(xy,Dn({attr:Dn({},e.attr)},t),eh(e.child))}}function xy(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=vy(e,["attr","size","title"]),a=i||n.size||"1em",s;return n.className&&(s=n.className),e.className&&(s=(s?s+" ":"")+e.className),Ke.createElement("svg",Dn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:s,style:Dn(Dn({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&Ke.createElement("title",null,o),e.children)};return Vd!==void 0?Ke.createElement(Vd.Consumer,null,function(n){return t(n)}):t(Jp)}function th(e){return yy({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const wy=({className:e})=>{const t={border:"solid 0.5px purple"};return u.jsxs("div",{className:`input-group ${e}`,children:[u.jsx("div",{className:"input-group-prepend",children:u.jsx("button",{className:"btn btn-outline-secondary dropdown-toggle",style:t,type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Catégorie"})}),u.jsx("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button"}),u.jsx("div",{class:"input-group-append",children:u.jsxs("button",{class:"btn btn-outline-secondary ",type:"button",style:t,children:["   ",u.jsx(th,{size:24,color:"#333"})]})})]})},Sy=ne(wy)`
    width:80%;
    min-width:25rem;
    @media screen and (max-width: 767px){
        display:none;
        
    }
`,fi="",Cy="https://magentacardozo.github.io/reactdeploy4",Fe={Home:fi+"/",Products:fi+"/produits",Categorie:fi+"/produits/",Details:fi+"/produit/",Info:fi+"/info/"},jy=({className:e})=>{const{articles:t,categories:n}=E.useContext(lo);E.useState([]);const[r,i]=E.useState(!1),[o,l]=E.useState(""),a=()=>{i(s=>!s)};return u.jsxs("div",{className:e,children:[u.jsx(th,{onClick:()=>a()}),u.jsxs("div",{className:r&&"activated",children:[u.jsxs("div",{className:"head",children:[u.jsx("input",{type:"text",value:o,className:"searchField",onChange:s=>l(s.target.value)}),u.jsxs("div",{className:"cross",onClick:()=>a(),children:[u.jsx("span",{}),u.jsx("span",{})]})]}),u.jsx("div",{className:"result",children:t.filter(s=>s.name.toUpperCase().includes(o.toUpperCase())||s.longName.toUpperCase().includes(o.toUpperCase())).length!=0?t.filter(s=>s.name.toUpperCase().includes(o.toUpperCase())||s.longName.toUpperCase().includes(o.toUpperCase())).map(s=>u.jsx(dt,{className:"link",to:`${Fe.Details}${s.id}`,onClick:()=>a(),children:u.jsxs("div",{className:"article",children:[u.jsx("div",{children:u.jsx("img",{src:s.image[0],alt:""})}),u.jsxs("div",{children:[u.jsx("div",{children:s.name}),u.jsx("div",{children:s.longName})]})]},s.id)})):u.jsx("div",{style:{color:"red",textAlign:"center",fontSize:"20px"},children:"Aucun Article correstondant"})})]})]})},ky=ne(jy)`
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
`,Ny=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:gy,className:"w-100",alt:""})});ne(Ny)`

    width:35px;
    height:35px;
    min-height:15px;
    min-width:15px;
@media screen and (max-width:800px) {
    height:25px;
    width:25px;
        
    }

`;const My=({className:e})=>{const[t,n]=E.useState(!1);function r(){n(i=>!i),console.log(t)}return u.jsx("div",{className:e,children:u.jsxs("div",{className:t&&"menu-down",onClick:()=>r(),children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{}),u.jsx("div",{children:u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(dt,{to:`${Fe.Categorie}cosmetique`,children:"Cosmetique"})}),u.jsx("li",{children:u.jsx(dt,{to:`${Fe.Categorie}telephone`,children:"Télephone"})}),u.jsx("li",{children:u.jsx(dt,{to:`${Fe.Categorie}montre`,children:"Montres"})}),u.jsx("li",{children:u.jsx(dt,{to:`${Fe.Categorie}accessoire`,children:"Accessoires"})}),u.jsx("li",{children:u.jsx(dt,{to:`${Fe.Info}modePaiement`,children:"Mode de paiement"})}),u.jsx("li",{children:u.jsx(dt,{to:`${Fe.Info}commentAcheter`,children:"Comment acheter chez nous ?"})}),u.jsx("li",{children:u.jsx(dt,{to:`${Fe.Info}aPropos`,children:"A propos"})})]})})]})})},Ey=ne(My)`
        display:none;
        

        @media screen and (max-width: 767px) {
        width:17px;
        height:22px;
    
        &>div{
            height:100%;
            width:100%;

        }
        &>div>div{
            background-color:${ie.FIFTH};
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
            color:${W.FIFTH};

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
`;ne(hy)`
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
`;let Ti=!1,Wd;const Ly=()=>{[Ti,Wd]=E.useState(!0);const e=E.useRef(0),t=()=>{const n=window.scrollY;Wd(n<=e.current),e.current=n,console.log("+++++"+Ti)};return E.useEffect(()=>(window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}),[]),Ti},Dy=({className:e})=>u.jsx("div",{children:u.jsx(u.Fragment,{children:u.jsxs("nav",{className:`navbar-css ${e}`,children:[u.jsx("div",{className:(Ti||"hide ")+" navbar  row container-fluid-css-2",children:u.jsxs("div",{className:"first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between",children:[u.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[u.jsx(Ey,{}),u.jsx("div",{style:{marginRight:"6px"}}),u.jsxs(dt,{to:Fe.Home,className:"link-css title-css navbar-brand  d-block",children:[u.jsx("img",{src:my,width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"ChezArdi"]})]}),u.jsx(Sy,{}),u.jsxs("div",{className:"d-flex flex-row flex-row justify-content-between",children:[u.jsx(ky,{}),u.jsx("div",{style:{marginLeft:"12px"}})]})]})}),u.jsxs("div",{className:"moreInfo",children:[u.jsx("div",{children:"Livraison rapide"}),u.jsx("div",{children:"Paiement cash à la livraison à Kinshasa, Lubumbashi et Kolwezi"})]})]})})});ne(fy)`
width:100%;
@media screen and (max-width: 500px) {
    
}
`;const Py=()=>u.jsx("div",{className:"",style:{backgroundColor:"black"},children:u.jsx("div",{class:"",style:{backgroundColor:"black"},children:u.jsxs("footer",{style:{backgroundColor:ie.FIFTH},className:"text-center text-lg-start",children:[u.jsx("div",{className:"container p-4",children:u.jsxs("div",{className:"row",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Nous contacter"}),u.jsxs("ul",{className:"list-unstyled mb-4",children:[u.jsx("li",{style:{color:"white"},children:"+243840199718"}),u.jsx("li",{children:u.jsx("a",{mailTo:"mbuyiarsen095@gmail.com",className:"text-white",children:"mbuyiarsen095@gmail.com"})})]})]})}),u.jsx("div",{class:"text-center p-3 border-top border-black text-white",children:"© 2024 Copyright"})]})})}),Ty=ne(Dy)`
&>div:nth-child(1){
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
        background-color: black;
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
    .hide{
        display:none;
    }
`,zo="/reactdeploy4/assets/png_2-op38kcqj.png",B="/reactdeploy4/assets/png_7-zH4XEwQ0.png",A="/reactdeploy4/assets/png_8-JODtVRir.png",Qd="/reactdeploy4/assets/cosmetique1-Ktv6z-PZ.jpeg",Yd="/reactdeploy4/assets/cosmetique2-902iOIsU.jpeg",zy=[{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[$t,b,B,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[zo,b,B,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[yi,b,B,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Nr,b,B,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[To,b,B,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[xi,b,B,A]},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[b,B,A]},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[$t,b,B,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]},{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[$t,b,B,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[zo,b,B,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[yi,b,B,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Nr,b,B,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[To,b,B,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[xi,b,B,A]},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[b,B,A]},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[$t,b,B,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]},{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[$t,b,B,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[zo,b,B,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[yi,b,B,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Nr,b,B,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[To,b,B,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[xi,b,B,A]},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[b,B,A]},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[$t,b,B,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]},{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[$t,b,B,A]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[zo,b,B,A]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[yi,b,B,A]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[Nr,b,B,A]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[To,b,B,A]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[xi,b,B,A]},{id:777,categorie:"cosmetique",name:"Beure de carité",longName:"beure à huile pour tous",price:20,pricePromo:33,slug:`Disaar à la Vitamine C 🔥🔥🔥💥 Une gamme pour tout type de peau ❌Fini les tampons avec notre crème

 * Elle est très recommandée pour les personnes qui ont une peau fragile due aux produits éclaircissants , élimine les boutons, tâches d'acnés , fards,  rougeurs et enlève également les dégâts laissés par le soleil sur les peaux.
* Elle est Éclaircissante, hydratante et adoucissante. La gamme complète de Disaar éclairci naturellement ta peau et le rend un teint uniforme grâce à la vitamine C.`,image:[Qd,Yd]},{id:888,categorie:"cosmetique",name:"Huile d'olive",longName:"lotion eclairecissante",price:20,pricePromo:25,slug:`Disaar à la Vitamine C 🔥🔥🔥💥 Une gamme pour tout type de peau ❌Fini les tampons avec notre crème

 * Elle est très recommandée pour les personnes qui ont une peau fragile due aux produits éclaircissants , élimine les boutons, tâches d'acnés , fards,  rougeurs et enlève également les dégâts laissés par le soleil sur les peaux.
* Elle est Éclaircissante, hydratante et adoucissante. La gamme complète de Disaar éclairci naturellement ta peau et le rend un teint uniforme grâce à la vitamine C.`,image:[Yd,Qd]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[b,B,A]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[$t,b,B,A]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[b,B,A]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[b,B,A,A]}],Iy=[{category:"cosmetiques",slug:"Produits de beauté, manicure, pédicures, tous est disponible chez nous"},{category:"accessoires",slug:"Les chargeurs et tous type d'accessoires que"},{category:"telephones",slug:"iphone, samsung et tous types de telephone que vous voudrez vous procurer"},{category:"montres",slug:"Gucci, louis vuitton, davinchi, toustes ses marques sont disponibles ice chez nous"}],_y=[{title:"aPropos",title2:"A propos de nous",slug:`VOUS FAIRE VIVRE UNE VIE MEILLEURE ET VOUS DONNER CONFIANCE EN VOUS ! Nous sommes une boutique en ligne basée à Kinshasa, Lubumbashi, Kolwezi et Likasi, et nous nous engageons activement à créer des produits remarquables qui vont vous aider à améliorer la qualité de votre vie, ainsi que celle de vos proches.


    Nous croyons que vous méritez d'avoir accès à des produits de qualité et nous ferons tout pour vous satisfaire. Nos produits sont minutieusement fabriqués avec amour et passion afin de vous offrir ce qu'il y a de mieux. Nous proposons une livraison rapide en moins de 48h, car nous ne voulons pas que vous ayez à attendre trop longtemps après avoir passé votre commande. De plus, nous travaillons chaque jour pour améliorer nos services afin de vous offrir une expérience gratifiante.`},{title:"commentAcheter",title2:"Comment acheter",slug:"Le site est conçu de manière simple pour aider chacun de vous à y accéder facilement et rapidement. Si vous êtes intéressé par l'un de nos produits, il vous suffit de cliquer sur l'icône correspondante, ce qui vous dirigera vers WhatsApp pour discuter ensuite avec nos agents de manière simple et rapide. Ainsi, vous pourrez passer votre commande en toute sécurité."},{title:"modePaiement",title2:"Mode de paiement",slug:"Dans le but de rassurer tout le monde, la boutique n'accepte pas de transfert d'argent ni paiement en ligne, seulement en cas d'urgence. Nous sommes une boutique en cours de développement, le paiement se fait cash à la livraison."}],lo=Ke.createContext(),Ry=()=>{const e={articles:zy,categories:Iy};return Ly(),u.jsx(lo.Provider,{value:e,children:u.jsxs("div",{className:"theApp",children:[u.jsx(Ty,{}),u.jsx("div",{className:Ti&&"space"}),u.jsx("div",{className:"container-fluid-css",children:u.jsx(K2,{})}),u.jsx("div",{children:u.jsx(Py,{})})]})})},Ay=({className:e})=>{const{articles:t,categories:n}=E.useContext(lo),r=t.filter(a=>a.categorie=="accessoire"),i=t.filter(a=>a.categorie=="montre"),o=t.filter(a=>a.categorie=="telephone"),l=t.filter(a=>a.categorie=="cosmetique");return u.jsxs("div",{className:e,style:{backgroundColor:ie.MAIN},children:[u.jsx("div",{className:"nav",children:u.jsx("div",{children:`Cliquez sur les barres en haut à gauche pour ouvrir le menu, cliquez sur l'icône de recherche en haut à droite pour effectuer une recherche rapide parmi tous nos articles, cliquez sur une image pour obtenir plus de détails sur le produit, et enfin, cliquez sur le bouton "Acheter maintenant" pour discuter directement avec nous.`})}),u.jsxs("div",{className:"section2-1",children:[u.jsx(Io,{id:"accessoitre-link",articles:l,categories:n,category:"cosmetiques"}),u.jsx(Io,{id:"accessoitre-link",articles:r,categories:n,category:"accessoires"}),u.jsx(Io,{id:"montre-link",articles:i,categories:n,category:"montres"}),u.jsx(Io,{id:"potable-link",articles:o,categories:n,category:"telephones"}),u.jsxs("div",{className:"box2-1 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:$t,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-2 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:$t,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-3 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Montres connectées"})}),u.jsx("div",{className:"img3 img",children:u.jsx("img",{src:Nr,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-4 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Balladeurs"})}),u.jsx("div",{className:"img4 img",children:u.jsx("img",{src:yi,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-5 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Cables chargeurs"})}),u.jsx("div",{className:"img5 img",children:u.jsx("img",{src:xi,width:"100%",alt:"",className:"w-100 h-100"})})]}),u.jsxs("div",{className:"box2-6 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Chargeurs"})}),u.jsx("div",{className:"img6 img",children:u.jsx("img",{src:b,alt:"",width:"100%",className:"h-100 "})})]})]}),u.jsx("div",{})]})},Io=({id:e,articles:t,category:n,categories:r})=>{const i=t[0],[o,l]=E.useState({...i}),[a,s]=E.useState(i.id);function c(d){const h=t.filter(m=>m.id==d);l(h[0]),s(d)}return u.jsxs("div",{style:{width:"100%"},className:"list-article",children:[u.jsxs("div",{className:"category",style:{},children:[u.jsx("div",{}),u.jsx("div",{children:n}),u.jsx("div",{id:e})]}),u.jsx("div",{className:"articles",children:t.map((d,h)=>u.jsx(Fy,{...d},h))}),u.jsxs("div",{className:"slug",children:[u.jsx("div",{}),u.jsx("div",{children:r.filter(d=>d.category===n)[0].slug})]}),u.jsx("div",{className:"listImg",style:{overflowX:"hidden"},children:u.jsx("div",{children:t.map(d=>u.jsx("div",{className:`${a==d.id?"imgHover":""}`,style:{height:"100%",aspectRatio:"1/1",flexShrink:0},children:u.jsx("img",{src:d.image[0],className:"img-fluid",alt:"",style:{filter:"drop-shadow(10px 10px 5px 4px)",display:"block",height:"100%",width:"100%"},onClick:()=>c(d.id)},d.id)}))})}),u.jsx("div",{className:"articleBox",children:u.jsx(Oy,{...o})}),u.jsx("div",{className:"square",children:t.map(d=>u.jsxs("div",{className:"square-box",children:[u.jsx(dt,{className:"link",to:`${Fe.Details}${d.id}`,children:u.jsx("img",{src:d.image[0],width:"100%",alt:"",className:"w-100"})}),u.jsxs("div",{children:[u.jsx("span",{children:d.name}),u.jsxs("span",{children:[u.jsx("span",{className:"squarePrice",children:d.price})," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d.pricePromo||u.jsxs("span",{className:"promo-1",children:[d.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("p",{}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${d.name}.%20Merci`,children:"Acheter maintenant"})})]})]}))})]})},Fy=({name:e,image:t,price:n,pricePromo:r,longName:i,id:o})=>u.jsxs("div",{className:"singleArticle",children:[u.jsx("div",{children:u.jsx(dt,{className:"link",to:`${Fe.Details}${o}`,children:u.jsx("img",{src:t[0],alt:"",width:"100%",height:"100%"})})}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsx("span",{children:i}),u.jsx("div",{className:"_button",children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${e}.%20Merci`,children:"Acheter maintenant"})})]}),Oy=({name:e,image:t,price:n,pricePromo:r,longName:i,id:o})=>{const[l,a]=E.useState(0);return E.useEffect(()=>{const s=setInterval(()=>{a(c=>c+1)},4e3);return()=>{clearInterval(s)}},[]),u.jsxs("div",{className:"singleArticle2",children:[u.jsx("div",{children:u.jsx(dt,{className:"link",to:`${Fe.Details}${o}`,children:u.jsx("img",{src:t[l%t.length],alt:"",width:"100%",height:"100%"})})}),u.jsx("div",{children:t.map((s,c,d)=>u.jsx("span",{className:`${l%d.length==c&&"imageOn"} circle`,onClick:()=>a(c)}))}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign2",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsxs("span",{children:[" ",i," "]}),u.jsx("div",{}),u.jsx("div",{className:"_button",children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${e}.%20Merci`,children:"Acheter maintenant"})})]})},$y=ne(Ay)`
  Link{
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
    display:flex;
    flex-shrink:0;
    justify-content:center;
    align-items:center;
     width:100% !important;
    height:290px !important;
    margin-bottom:5rem;
  }

      .singleArticle2>div:nth-child(1) img{
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
      color: ${W.MAIN};
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
    text-decoration:line-through ${W.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${W.SECOND};
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${W.MAIN};

  }
  .dollarSign2{
    font-size:30px;
    font-weight:0;
    line-height:14px;
    font-weight:900;
    transform:translate(-100%,-30%);
    color :  ${W.MAIN};

  }
    .singleArticle2>span:nth-child(3){
      font-size:55px;
      color:  ${W.MAIN};
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
      color:  ${W.SECOND};
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
      color: ${W.SECOND};
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
    color: ${W.MAIN}
  }
    ._button:active{
        background-color:${ie.SECOND} ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color:  ${W.MAIN};


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
    .singleArticle>div:nth-child(1) img{
      display:block;
      object-fit:contain;

     
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
    background-color:${ie.MAIN};

  }

  .listImg{
    /* position: absolute;
    top:45rem;
    left:0; */
    height:10rem;
    width:100%;
    margin:2px 0 0 0;
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
    background-color:${ie.MAIN};

  }

  .slug{
    /* position: absolute;
    left:0;
    top:35rem; */
    display:block;
    overflow-x:hidden;
    min-height:0rem;
    width:100%;
    background-color:${ie.MAIN} ;
  }
  .slug>div:nth-child(1){

  }
  .slug>div:nth-child(2){

    background-color: transparent;
    text-align: left;
    font-size:18px;
    padding:8px;
    color :  ${W.MAIN};


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

    background-color:${ie.FOURTH};
    height:80%;
    width:100%;
    transform: scale(1.3);
    background-color:${ie.MAIN};
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
    justify-content:center;
    line-height:25px;
    color :  ${W.FIFTH};
    background-color:${ie.FIFTH};
    padding:0.9% 0;
    font-weight:400;


  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div{
    border-left: double 1px ${W.SECOND};
    margin: 1rem;

    line-height:25px;
    font-size : 16px;
    font-weight:700;
    padding-left:0.5rem;
    text-align:justify;
  display : block;
  color :  ${W.MAIN};
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
  background-color:${ie.MAIN};
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
  background-color:${ie.MAIN};
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
  background-color:grey ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
.square-box img{
  width:100%;
  height:60%;
  display: block;
  margin:4px 0;
}
.square-box>div>span:nth-child(1){

  font-weight:100;
  text-transform: uppercase;
  color :  ${W.SECOND};
}
.square-box>div>span:nth-child(2){

  color :  ${W.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:16px;
  color:${W.MAIN}
}
.square-box>div>div{
  color :  ${W.FOURTH};
  text-decoration:underline;
  font-size:14px;
  color:${W.MAIN};
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
  color: ${W.SECOND};
  background-color:${ie.MAIN};
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
  background-color:${ie.MAIN};
  padding:0;
  margin:0;
}
  .box2-1 {
    grid-area: unset;
    background-color: ${ie.MAIN};
}

.box2-2 {
    grid-area: unset;
    background-color: ${ie.MAIN};
}

.box2-3 {
    grid-area: unset;
    background-color: ${ie.MAIN};
}

.box2-4 {
    grid-area: unset;
    background-color: ${ie.MAIN};
}

.box2-5 {
    grid-area: unset;
    background-color: ${ie.MAIN};
}

.box2-6 {
    grid-area: unset;
    background-color: ${ie.MAIN};
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
`;ne(Xp)`
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
`;const by=()=>{const{pathname:e}=an();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),u.jsxs("div",{className:"home-screen",style:{backgroundColor:ie.MAIN},children:[u.jsx(Xp,{}),u.jsx($y,{})]})},Uy="/reactdeploy4/assets/jpg_1-7lt4SJ85.jpg",By=({className:e})=>u.jsx("div",{className:e,children:u.jsxs("div",{className:"first",children:[u.jsx("div",{className:"img-content",children:u.jsx("img",{src:Uy,width:"100%",alt:"",srcset:""})}),u.jsx("div",{className:"text",children:"Livraison où que vous soyez à Kinshasa"})]})}),Hy=ne(By)`
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

`,Vy="/reactdeploy4/assets/jpg_2-1pXFpQc3.jpg",Wy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("div",{className:"image"})}),_e=ne(Wy)`
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

`,Qy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"image",children:u.jsx("img",{src:Vy,alt:""})})}),u.jsxs("div",{className:"second",children:[u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{}),u.jsx(_e,{})]})]}),Yy=ne(Qy)`
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
`,Gy=()=>u.jsxs("div",{children:[u.jsx(Hy,{}),u.jsx(Yy,{})]}),Ky=()=>{const{pathname:e}=an();return E.useEffect(()=>{window.scrollTo(0,0)},[e]),u.jsx("div",{children:u.jsx(Gy,{})})},Nl=()=>u.jsx("div",{className:"",style:{marginTop:"3rem",height:"60rem"},children:u.jsx("p",{style:{fontSize:"60px",textAlign:"center"},children:"404"})}),qy=({className:e})=>{const{pathname:t}=an();E.useEffect(()=>{window.scrollTo(0,0)},[t]);const{articles:n,categories:r}=E.useContext(lo),{categorie:i}=$u();return n.filter(o=>o.categorie==i).length==0?u.jsx(Nl,{}):u.jsxs("div",{style:{paddingTop:"3.3rem",backgroundColor:ie.MAIN,minHeight:"75vh"},children:[u.jsx("div",{style:{fontSize:"22px",textTransform:"uppercase",fontWeight:"400",textAlign:"center",lineHeight:"35px",marginBottom:"10px",color:`${W.FIFTH}`,padding:"0.9% 0",backgroundColor:ie.FIFTH},children:i}),u.jsx("div",{className:e,children:n.filter(o=>o.categorie==i).map(o=>u.jsxs("div",{className:"square-box",children:[u.jsx(dt,{className:"link",to:`${Fe.Details}${o.id}`,children:u.jsx("img",{src:o.image[0],width:"100%",alt:"",className:"w-100"})}),u.jsxs("div",{children:[u.jsx("span",{children:o.name}),u.jsxs("span",{children:[o.price," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!o.pricePromo||u.jsxs("span",{className:"promo-1",children:[o.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("p",{}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=${Cy+Fe.Details}${o.id}Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${o.name}.%20Merci`,children:"Acheter maintenant"})})]})]}))})]})},Zy=ne(qy)`

  width:100%;

    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2px 2px;

  overflow:hidden;

    background-color:${ie.MAIN};

    a{
        color : ${W.MAIN};
        text-decoration: none;
    }
      .promo-1{
    margin-left:10px;
    text-decoration:line-through ${W.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${W.SECOND};
  }
.square-box{

  position: relative;
  height:  17rem;

  width:100%;
  background-color:${ie.MAIN};
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
  background-color:${ie.FOURTH} ;
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
  color :  ${W.SECOND};
}
.square-box>div>span:nth-child(2){

  color :  ${W.SECOND};
  
    display:inline-block;

}
.squarePrice{
  font-size:16px;
  color:${W.MAIN}
}
.squarePrice{
  font-size:16px;
  color:${W.MAIN}
}
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:100;
    color :  ${W.MAIN};

  }
.square-box>div>div{
  color :  ${W.FOURTH};
  text-decoration:underline;
  font-size:14px;
  color:${W.MAIN};
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
  color: ${W.SECOND};
  background-color:${ie.MAIN};
  flex-direction: column;
  /* align-items:center; */
  justify-content: center;
  width:100%;
  height:25%;
}


`,Xy=({className:e})=>{const{pathname:t}=an(),[n,r]=E.useState(0),{articles:i}=E.useContext(lo),{id:o}=$u(),l=i.filter(x=>x.id===Number(o))[0];if(!l)return u.jsx(Nl,{});const{name:a,image:s,price:c,pricePromo:d,longName:h,slug:m}=l;return E.useEffect(()=>{window.scrollTo(0,0),r(0)},[t]),u.jsxs("div",{className:`${e} `,children:[u.jsxs("div",{className:"",children:[u.jsx("div",{children:l.image.map((x,S,w)=>u.jsx("div",{className:`${S==n&&"activate"} imageBox`,onClick:()=>r(S),children:u.jsx("img",{src:x,alt:"",width:"100%",height:"100%"})},S))}),u.jsxs("div",{className:"grid-center",children:[u.jsx("img",{src:s[n],alt:"",width:"100%",height:"100%"})," "]})]}),u.jsxs("div",{children:[u.jsx("div",{className:"_button",children:u.jsx("a",{target:"_blank",href:`https://wa.me/243840199718?text=Bonjour,%20je%20suis%20interessé%20par%20le%20produit%20${a}.%20Merci`,children:"Acheter maintenant"})}),u.jsxs("span",{className:"price",children:[c," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d||u.jsxs("span",{className:"promo-1",children:[d," ",u.jsx("span",{className:"dollarSign2",children:"$"})]})," "]}),u.jsxs("span",{className:"maincolor",children:[a," "]}),u.jsxs("span",{className:"maincolor",children:[" ",h," "]}),u.jsxs("span",{className:"maincolor",children:[" ",m," "]})]})]})},Jy=ne(Xy)`
background-color :${ie.MAIN};
padding-bottom: 3rem;
padding-top : 3.3rem;

@media screen and (max-width:745px){
        &>div:nth-child(1){
        display:grid;
        grid-template-columns: 20% 80%;
        height: 50vh;
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
        flex-grow:1;
        flex-shrink:0;
        overflow-y: scroll;
        gap:1px;
    }
    .imageBox{
        width:100%;
        aspect-ratio:1/1 !important;

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
    color: ${W.MAIN};

  }
  .dollarSign2{
    font-size:14px;
    font-weight:0;
    line-height:14px;
    transform:translate(-10%,-3%);
    color :  ${W.MAIN};

  }
    .promo-1{
    margin-left:10px;
    text-decoration:line-through ${W.SECOND} 1px;
    font-size:14px;
    font-weight:100;
    color: ${W.SECOND};
  }
  .price{      
    font-size:20px;
      font-family:_salsa !important;
      color: ${W.MAIN};
      text-align:center;
  }
  .maincolor{
    color:${W.MAIN}
  }
  a{
    color : black;
    text-decoration: none;
  }
    ._button{
    text-align:center;
    padding:.3rem;
  border: solid 1px  ${W.MAIN} ;

    border-radius:30px/30px;
    margin:1rem 1rem;

  }
  ._button>a{
    color: ${W.MAIN};
  }
  .price+span{
    font-size : 26px;
  }

    
}


`,e3=({className:e})=>{const{pathname:t}=an();E.useEffect(()=>{window.scrollTo(0,0)},[t]);const{information:n}=$u(),r=_y.filter(i=>i.title===n)[0];return u.jsxs("div",{className:`${e}`,children:[u.jsx("div",{children:r.title2}),u.jsx("div",{children:r.slug})]})},t3=ne(e3)`

    min-height:80vh;
    min-width:100vw;
    padding:5rem .5rem 0 .5rem;
    background-color:${ie.MAIN};
    &>div:nth-child(1){
        font-size:16px;
        text-decoration:underline;
        text-transform:uppercase;
        color:${W.MAIN};
        letter-spacing:1px;
        text-align: center;

    }
    &>div:nth-child(1)+div{
        margin-top:.8rem;
        font-size:17px;
        color:${W.MAIN};
        line-height:25px;
        text-align:center;
        margin:1.5rem;
    }

`,n3=ng(zs(u.jsxs(Wt,{path:"/",element:u.jsx(Ry,{}),children:[u.jsx(Wt,{index:!0,element:u.jsx(by,{})}),u.jsx(Wt,{path:Fe.Products,element:u.jsx(Ky,{})}),u.jsx(Wt,{path:`${Fe.Categorie}:categorie`,element:u.jsx(Zy,{})}),u.jsx(Wt,{path:`${Fe.Details}:id`,element:u.jsx(Jy,{})}),u.jsx(Wt,{path:`${Fe.Info}:information`,element:u.jsx(t3,{})}),u.jsx(Wt,{path:"/error",element:u.jsx(Nl,{})}),u.jsx(Wt,{path:"*",element:u.jsx(Nl,{})})]})));Ra.createRoot(document.getElementById("root")).render(u.jsx(Ke.StrictMode,{children:u.jsx(dg,{router:n3})}));