function Fd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(r,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function $d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ud={exports:{}},ho={},bd={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wi=Symbol.for("react.element"),ah=Symbol.for("react.portal"),sh=Symbol.for("react.fragment"),uh=Symbol.for("react.strict_mode"),ch=Symbol.for("react.profiler"),dh=Symbol.for("react.provider"),fh=Symbol.for("react.context"),ph=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),mh=Symbol.for("react.memo"),gh=Symbol.for("react.lazy"),Ku=Symbol.iterator;function vh(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var Bd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hd=Object.assign,Wd={};function $r(e,t,n){this.props=e,this.context=t,this.refs=Wd,this.updater=n||Bd}$r.prototype.isReactComponent={};$r.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};$r.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qd(){}Qd.prototype=$r.prototype;function _s(e,t,n){this.props=e,this.context=t,this.refs=Wd,this.updater=n||Bd}var zs=_s.prototype=new Qd;zs.constructor=_s;Hd(zs,$r.prototype);zs.isPureReactComponent=!0;var Gu=Array.isArray,Vd=Object.prototype.hasOwnProperty,Ps={current:null},Yd={key:!0,ref:!0,__self:!0,__source:!0};function Kd(e,t,n){var r,i={},l=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Vd.call(t,r)&&!Yd.hasOwnProperty(r)&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),c=0;c<s;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return{$$typeof:Wi,type:e,key:l,ref:o,props:i,_owner:Ps.current}}function yh(e,t){return{$$typeof:Wi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function As(e){return typeof e=="object"&&e!==null&&e.$$typeof===Wi}function xh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zu=/\/+/g;function Qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?xh(""+e.key):t.toString(36)}function Sl(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Wi:case ah:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Qo(o,0):r,Gu(i)?(n="",e!=null&&(n=e.replace(Zu,"$&/")+"/"),Sl(i,t,n,"",function(c){return c})):i!=null&&(As(i)&&(i=yh(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zu,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Gu(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+Qo(l,s);o+=Sl(l,t,n,a,i)}else if(a=vh(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+Qo(l,s++),o+=Sl(l,t,n,a,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function nl(e,t,n){if(e==null)return e;var r=[],i=0;return Sl(e,r,"","",function(l){return t.call(n,l,i++)}),r}function wh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ve={current:null},Cl={transition:null},Sh={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Ps};Y.Children={map:nl,forEach:function(e,t,n){nl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nl(e,function(){t++}),t},toArray:function(e){return nl(e,function(t){return t})||[]},only:function(e){if(!As(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=$r;Y.Fragment=sh;Y.Profiler=ch;Y.PureComponent=_s;Y.StrictMode=uh;Y.Suspense=hh;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sh;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hd({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=Ps.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Vd.call(t,a)&&!Yd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var c=0;c<a;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Wi,type:e.type,key:i,ref:l,props:r,_owner:o}};Y.createContext=function(e){return e={$$typeof:fh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dh,_context:e},e.Consumer=e};Y.createElement=Kd;Y.createFactory=function(e){var t=Kd.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:ph,render:e}};Y.isValidElement=As;Y.lazy=function(e){return{$$typeof:gh,_payload:{_status:-1,_result:e},_init:wh}};Y.memo=function(e,t){return{$$typeof:mh,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Cl.transition;Cl.transition={};try{e()}finally{Cl.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return Ve.current.useCallback(e,t)};Y.useContext=function(e){return Ve.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ve.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ve.current.useEffect(e,t)};Y.useId=function(){return Ve.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ve.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ve.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ve.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ve.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ve.current.useReducer(e,t,n)};Y.useRef=function(e){return Ve.current.useRef(e)};Y.useState=function(e){return Ve.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ve.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ve.current.useTransition()};Y.version="18.2.0";bd.exports=Y;var N=bd.exports;const We=$d(N),Ch=Fd({__proto__:null,default:We},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jh=N,kh=Symbol.for("react.element"),Mh=Symbol.for("react.fragment"),Eh=Object.prototype.hasOwnProperty,Nh=jh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lh={key:!0,ref:!0,__self:!0,__source:!0};function Gd(e,t,n){var r,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Eh.call(t,r)&&!Lh.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:kh,type:e,key:l,ref:o,props:i,_owner:Nh.current}}ho.Fragment=Mh;ho.jsx=Gd;ho.jsxs=Gd;Ud.exports=ho;var u=Ud.exports,Ea={},Zd={exports:{}},dt={},Xd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,I){var $=z.length;z.push(I);e:for(;0<$;){var V=$-1>>>1,Z=z[V];if(0<i(Z,I))z[V]=I,z[$]=Z,$=V;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var I=z[0],$=z.pop();if($!==I){z[0]=$;e:for(var V=0,Z=z.length,rt=Z>>>1;V<rt;){var ye=2*(V+1)-1,Oe=z[ye],xe=ye+1,it=z[xe];if(0>i(Oe,$))xe<Z&&0>i(it,Oe)?(z[V]=it,z[xe]=$,V=xe):(z[V]=Oe,z[ye]=$,V=ye);else if(xe<Z&&0>i(it,$))z[V]=it,z[xe]=$,V=xe;else break e}}return I}function i(z,I){var $=z.sortIndex-I.sortIndex;return $!==0?$:z.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var a=[],c=[],d=1,h=null,m=3,S=!1,w=!1,x=!1,M=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(z){for(var I=n(c);I!==null;){if(I.callback===null)r(c);else if(I.startTime<=z)r(c),I.sortIndex=I.expirationTime,t(a,I);else break;I=n(c)}}function k(z){if(x=!1,g(z),!w)if(n(a)!==null)w=!0,_t(L);else{var I=n(c);I!==null&&te(k,I.startTime-z)}}function L(z,I){w=!1,x&&(x=!1,p(T),T=-1),S=!0;var $=m;try{for(g(I),h=n(a);h!==null&&(!(h.expirationTime>I)||z&&!G());){var V=h.callback;if(typeof V=="function"){h.callback=null,m=h.priorityLevel;var Z=V(h.expirationTime<=I);I=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(a)&&r(a),g(I)}else r(a);h=n(a)}if(h!==null)var rt=!0;else{var ye=n(c);ye!==null&&te(k,ye.startTime-I),rt=!1}return rt}finally{h=null,m=$,S=!1}}var v=!1,j=null,T=-1,A=5,F=-1;function G(){return!(e.unstable_now()-F<A)}function ve(){if(j!==null){var z=e.unstable_now();F=z;var I=!0;try{I=j(!0,z)}finally{I?pe():(v=!1,j=null)}}else v=!1}var pe;if(typeof f=="function")pe=function(){f(ve)};else if(typeof MessageChannel<"u"){var Ke=new MessageChannel,en=Ke.port2;Ke.port1.onmessage=ve,pe=function(){en.postMessage(null)}}else pe=function(){M(ve,0)};function _t(z){j=z,v||(v=!0,pe())}function te(z,I){T=M(function(){z(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||S||(w=!0,_t(L))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(z){switch(m){case 1:case 2:case 3:var I=3;break;default:I=m}var $=m;m=I;try{return z()}finally{m=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,I){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var $=m;m=z;try{return I()}finally{m=$}},e.unstable_scheduleCallback=function(z,I,$){var V=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?V+$:V):$=V,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=$+Z,z={id:d++,callback:I,priorityLevel:z,startTime:$,expirationTime:Z,sortIndex:-1},$>V?(z.sortIndex=$,t(c,z),n(a)===null&&z===n(c)&&(x?(p(T),T=-1):x=!0,te(k,$-V))):(z.sortIndex=Z,t(a,z),w||S||(w=!0,_t(L))),z},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(z){var I=m;return function(){var $=m;m=I;try{return z.apply(this,arguments)}finally{m=$}}}})(Jd);Xd.exports=Jd;var Dh=Xd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd=N,ct=Dh;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ef=new Set,ji={};function Jn(e,t){Nr(e,t),Nr(e+"Capture",t)}function Nr(e,t){for(ji[e]=t,e=0;e<t.length;e++)ef.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Na=Object.prototype.hasOwnProperty,Th=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xu={},Ju={};function _h(e){return Na.call(Ju,e)?!0:Na.call(Xu,e)?!1:Th.test(e)?Ju[e]=!0:(Xu[e]=!0,!1)}function zh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ph(e,t,n,r){if(t===null||typeof t>"u"||zh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ye(e,t,n,r,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Ye(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Ye(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Ye(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Ye(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Ye(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Ye(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Ye(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Ye(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Ye(e,5,!1,e.toLowerCase(),null,!1,!1)});var Rs=/[\-:]([a-z])/g;function Is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Rs,Is);Ie[t]=new Ye(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Rs,Is);Ie[t]=new Ye(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Rs,Is);Ie[t]=new Ye(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Ye(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Ye(e,1,!1,e.toLowerCase(),null,!0,!0)});function Os(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ph(t,n,i,r)&&(n=null),r||i===null?_h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Xt=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),or=Symbol.for("react.portal"),ar=Symbol.for("react.fragment"),Fs=Symbol.for("react.strict_mode"),La=Symbol.for("react.profiler"),tf=Symbol.for("react.provider"),nf=Symbol.for("react.context"),$s=Symbol.for("react.forward_ref"),Da=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),Us=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),rf=Symbol.for("react.offscreen"),qu=Symbol.iterator;function Yr(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Vo;function oi(e){if(Vo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vo=t&&t[1]||""}return`
`+Vo+e}var Yo=!1;function Ko(e,t){if(!e||Yo)return"";Yo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),l=r.stack.split(`
`),o=i.length-1,s=l.length-1;1<=o&&0<=s&&i[o]!==l[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==l[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==l[s]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{Yo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?oi(e):""}function Ah(e){switch(e.tag){case 5:return oi(e.type);case 16:return oi("Lazy");case 13:return oi("Suspense");case 19:return oi("SuspenseList");case 0:case 2:case 15:return e=Ko(e.type,!1),e;case 11:return e=Ko(e.type.render,!1),e;case 1:return e=Ko(e.type,!0),e;default:return""}}function _a(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ar:return"Fragment";case or:return"Portal";case La:return"Profiler";case Fs:return"StrictMode";case Da:return"Suspense";case Ta:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nf:return(e.displayName||"Context")+".Consumer";case tf:return(e._context.displayName||"Context")+".Provider";case $s:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Us:return t=e.displayName||null,t!==null?t:_a(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return _a(e(t))}catch{}}return null}function Rh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _a(t);case 8:return t===Fs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ih(e){var t=lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function il(e){e._valueTracker||(e._valueTracker=Ih(e))}function of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function za(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ec(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function af(e,t){t=t.checked,t!=null&&Os(e,"checked",t,!1)}function Pa(e,t){af(e,t);var n=Mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Aa(e,t.type,n):t.hasOwnProperty("defaultValue")&&Aa(e,t.type,Mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Aa(e,t,n){(t!=="number"||Fl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ai=Array.isArray;function Sr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(ai(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mn(n)}}function sf(e,t){var n=Mn(t.value),r=Mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function rc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ia(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ll,cf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ll.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ki(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oh=["Webkit","ms","Moz","O"];Object.keys(di).forEach(function(e){Oh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),di[t]=di[e]})});function df(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||di.hasOwnProperty(e)&&di[e]?(""+t).trim():t+"px"}function ff(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=df(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Fh=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(e,t){if(t){if(Fh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function Fa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $a=null;function bs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ua=null,Cr=null,jr=null;function ic(e){if(e=Yi(e)){if(typeof Ua!="function")throw Error(D(280));var t=e.stateNode;t&&(t=xo(t),Ua(e.stateNode,e.type,t))}}function pf(e){Cr?jr?jr.push(e):jr=[e]:Cr=e}function hf(){if(Cr){var e=Cr,t=jr;if(jr=Cr=null,ic(e),t)for(e=0;e<t.length;e++)ic(t[e])}}function mf(e,t){return e(t)}function gf(){}var Go=!1;function vf(e,t,n){if(Go)return e(t,n);Go=!0;try{return mf(e,t,n)}finally{Go=!1,(Cr!==null||jr!==null)&&(gf(),hf())}}function Mi(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ba=!1;if(Yt)try{var Kr={};Object.defineProperty(Kr,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Kr,Kr),window.removeEventListener("test",Kr,Kr)}catch{ba=!1}function $h(e,t,n,r,i,l,o,s,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var fi=!1,$l=null,Ul=!1,Ba=null,Uh={onError:function(e){fi=!0,$l=e}};function bh(e,t,n,r,i,l,o,s,a){fi=!1,$l=null,$h.apply(Uh,arguments)}function Bh(e,t,n,r,i,l,o,s,a){if(bh.apply(this,arguments),fi){if(fi){var c=$l;fi=!1,$l=null}else throw Error(D(198));Ul||(Ul=!0,Ba=c)}}function qn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function yf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function lc(e){if(qn(e)!==e)throw Error(D(188))}function Hh(e){var t=e.alternate;if(!t){if(t=qn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return lc(i),e;if(l===r)return lc(i),t;l=l.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=l;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function xf(e){return e=Hh(e),e!==null?wf(e):null}function wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wf(e);if(t!==null)return t;e=e.sibling}return null}var Sf=ct.unstable_scheduleCallback,oc=ct.unstable_cancelCallback,Wh=ct.unstable_shouldYield,Qh=ct.unstable_requestPaint,Se=ct.unstable_now,Vh=ct.unstable_getCurrentPriorityLevel,Bs=ct.unstable_ImmediatePriority,Cf=ct.unstable_UserBlockingPriority,bl=ct.unstable_NormalPriority,Yh=ct.unstable_LowPriority,jf=ct.unstable_IdlePriority,mo=null,Ot=null;function Kh(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(mo,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Xh,Gh=Math.log,Zh=Math.LN2;function Xh(e){return e>>>=0,e===0?32:31-(Gh(e)/Zh|0)|0}var ol=64,al=4194304;function si(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s!==0?r=si(s):(l&=o,l!==0&&(r=si(l)))}else o=n&~i,o!==0?r=si(o):l!==0&&(r=si(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Nt(t),i=1<<n,r|=e[n],t&=~i;return r}function Jh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-Nt(l),s=1<<o,a=i[o];a===-1?(!(s&n)||s&r)&&(i[o]=Jh(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function Ha(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function kf(){var e=ol;return ol<<=1,!(ol&4194240)&&(ol=64),e}function Zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=n}function e1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Nt(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function Hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Nt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function Mf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ef,Ws,Nf,Lf,Df,Wa=!1,sl=[],mn=null,gn=null,vn=null,Ei=new Map,Ni=new Map,dn=[],t1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ac(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ni.delete(t.pointerId)}}function Gr(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Yi(t),t!==null&&Ws(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function n1(e,t,n,r,i){switch(t){case"focusin":return mn=Gr(mn,e,t,n,r,i),!0;case"dragenter":return gn=Gr(gn,e,t,n,r,i),!0;case"mouseover":return vn=Gr(vn,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Ei.set(l,Gr(Ei.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,Ni.set(l,Gr(Ni.get(l)||null,e,t,n,r,i)),!0}return!1}function Tf(e){var t=Rn(e.target);if(t!==null){var n=qn(t);if(n!==null){if(t=n.tag,t===13){if(t=yf(n),t!==null){e.blockedOn=t,Df(e.priority,function(){Nf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$a=r,n.target.dispatchEvent(r),$a=null}else return t=Yi(n),t!==null&&Ws(t),e.blockedOn=n,!1;t.shift()}return!0}function sc(e,t,n){jl(e)&&n.delete(t)}function r1(){Wa=!1,mn!==null&&jl(mn)&&(mn=null),gn!==null&&jl(gn)&&(gn=null),vn!==null&&jl(vn)&&(vn=null),Ei.forEach(sc),Ni.forEach(sc)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Wa||(Wa=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,r1)))}function Li(e){function t(i){return Zr(i,e)}if(0<sl.length){Zr(sl[0],e);for(var n=1;n<sl.length;n++){var r=sl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Zr(mn,e),gn!==null&&Zr(gn,e),vn!==null&&Zr(vn,e),Ei.forEach(t),Ni.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)Tf(n),n.blockedOn===null&&dn.shift()}var kr=Xt.ReactCurrentBatchConfig,Hl=!0;function i1(e,t,n,r){var i=ee,l=kr.transition;kr.transition=null;try{ee=1,Qs(e,t,n,r)}finally{ee=i,kr.transition=l}}function l1(e,t,n,r){var i=ee,l=kr.transition;kr.transition=null;try{ee=4,Qs(e,t,n,r)}finally{ee=i,kr.transition=l}}function Qs(e,t,n,r){if(Hl){var i=Qa(e,t,n,r);if(i===null)oa(e,t,r,Wl,n),ac(e,r);else if(n1(i,e,t,n,r))r.stopPropagation();else if(ac(e,r),t&4&&-1<t1.indexOf(e)){for(;i!==null;){var l=Yi(i);if(l!==null&&Ef(l),l=Qa(e,t,n,r),l===null&&oa(e,t,r,Wl,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else oa(e,t,r,null,n)}}var Wl=null;function Qa(e,t,n,r){if(Wl=null,e=bs(r),e=Rn(e),e!==null)if(t=qn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=yf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wl=e,null}function _f(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vh()){case Bs:return 1;case Cf:return 4;case bl:case Yh:return 16;case jf:return 536870912;default:return 16}default:return 16}}var pn=null,Vs=null,kl=null;function zf(){if(kl)return kl;var e,t=Vs,n=t.length,r,i="value"in pn?pn.value:pn.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[l-r];r++);return kl=i.slice(e,1<r?1-r:void 0)}function Ml(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function uc(){return!1}function ft(e){function t(n,r,i,l,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ul:uc,this.isPropagationStopped=uc,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=ft(Ur),Vi=fe({},Ur,{view:0,detail:0}),o1=ft(Vi),Xo,Jo,Xr,go=fe({},Vi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(Xo=e.screenX-Xr.screenX,Jo=e.screenY-Xr.screenY):Jo=Xo=0,Xr=e),Xo)},movementY:function(e){return"movementY"in e?e.movementY:Jo}}),cc=ft(go),a1=fe({},go,{dataTransfer:0}),s1=ft(a1),u1=fe({},Vi,{relatedTarget:0}),qo=ft(u1),c1=fe({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),d1=ft(c1),f1=fe({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p1=ft(f1),h1=fe({},Ur,{data:0}),dc=ft(h1),m1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},v1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=v1[e])?!!t[e]:!1}function Ks(){return y1}var x1=fe({},Vi,{key:function(e){if(e.key){var t=m1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w1=ft(x1),S1=fe({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fc=ft(S1),C1=fe({},Vi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),j1=ft(C1),k1=fe({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=ft(k1),E1=fe({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),N1=ft(E1),L1=[9,13,27,32],Gs=Yt&&"CompositionEvent"in window,pi=null;Yt&&"documentMode"in document&&(pi=document.documentMode);var D1=Yt&&"TextEvent"in window&&!pi,Pf=Yt&&(!Gs||pi&&8<pi&&11>=pi),pc=" ",hc=!1;function Af(e,t){switch(e){case"keyup":return L1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sr=!1;function T1(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(hc=!0,pc);case"textInput":return e=t.data,e===pc&&hc?null:e;default:return null}}function _1(e,t){if(sr)return e==="compositionend"||!Gs&&Af(e,t)?(e=zf(),kl=Vs=pn=null,sr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pf&&t.locale!=="ko"?null:t.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!z1[e.type]:t==="textarea"}function If(e,t,n,r){pf(r),t=Ql(t,"onChange"),0<t.length&&(n=new Ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hi=null,Di=null;function P1(e){Yf(e,0)}function vo(e){var t=dr(e);if(of(t))return e}function A1(e,t){if(e==="change")return t}var Of=!1;if(Yt){var ea;if(Yt){var ta="oninput"in document;if(!ta){var gc=document.createElement("div");gc.setAttribute("oninput","return;"),ta=typeof gc.oninput=="function"}ea=ta}else ea=!1;Of=ea&&(!document.documentMode||9<document.documentMode)}function vc(){hi&&(hi.detachEvent("onpropertychange",Ff),Di=hi=null)}function Ff(e){if(e.propertyName==="value"&&vo(Di)){var t=[];If(t,Di,e,bs(e)),vf(P1,t)}}function R1(e,t,n){e==="focusin"?(vc(),hi=t,Di=n,hi.attachEvent("onpropertychange",Ff)):e==="focusout"&&vc()}function I1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(Di)}function O1(e,t){if(e==="click")return vo(t)}function F1(e,t){if(e==="input"||e==="change")return vo(t)}function $1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:$1;function Ti(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Na.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xc(e,t){var n=yc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yc(n)}}function $f(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$f(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uf(){for(var e=window,t=Fl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fl(e.document)}return t}function Zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function U1(e){var t=Uf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$f(n.ownerDocument.documentElement,n)){if(r!==null&&Zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=xc(n,l);var o=xc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var b1=Yt&&"documentMode"in document&&11>=document.documentMode,ur=null,Va=null,mi=null,Ya=!1;function wc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ya||ur==null||ur!==Fl(r)||(r=ur,"selectionStart"in r&&Zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mi&&Ti(mi,r)||(mi=r,r=Ql(Va,"onSelect"),0<r.length&&(t=new Ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ur)))}function cl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},na={},bf={};Yt&&(bf=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);function yo(e){if(na[e])return na[e];if(!cr[e])return e;var t=cr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bf)return na[e]=t[n];return e}var Bf=yo("animationend"),Hf=yo("animationiteration"),Wf=yo("animationstart"),Qf=yo("transitionend"),Vf=new Map,Sc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){Vf.set(e,t),Jn(t,[e])}for(var ra=0;ra<Sc.length;ra++){var ia=Sc[ra],B1=ia.toLowerCase(),H1=ia[0].toUpperCase()+ia.slice(1);Nn(B1,"on"+H1)}Nn(Bf,"onAnimationEnd");Nn(Hf,"onAnimationIteration");Nn(Wf,"onAnimationStart");Nn("dblclick","onDoubleClick");Nn("focusin","onFocus");Nn("focusout","onBlur");Nn(Qf,"onTransitionEnd");Nr("onMouseEnter",["mouseout","mouseover"]);Nr("onMouseLeave",["mouseout","mouseover"]);Nr("onPointerEnter",["pointerout","pointerover"]);Nr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ui));function Cc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Bh(r,t,void 0,e),e.currentTarget=null}function Yf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,c=s.currentTarget;if(s=s.listener,a!==l&&i.isPropagationStopped())break e;Cc(i,s,c),l=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,c=s.currentTarget,s=s.listener,a!==l&&i.isPropagationStopped())break e;Cc(i,s,c),l=a}}}if(Ul)throw e=Ba,Ul=!1,Ba=null,e}function le(e,t){var n=t[Ja];n===void 0&&(n=t[Ja]=new Set);var r=e+"__bubble";n.has(r)||(Kf(t,e,2,!1),n.add(r))}function la(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var dl="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[dl]){e[dl]=!0,ef.forEach(function(n){n!=="selectionchange"&&(W1.has(n)||la(n,!1,e),la(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dl]||(t[dl]=!0,la("selectionchange",!1,t))}}function Kf(e,t,n,r){switch(_f(t)){case 1:var i=i1;break;case 4:i=l1;break;default:i=Qs}n=i.bind(null,t,n,e),i=void 0,!ba||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function oa(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Rn(s),o===null)return;if(a=o.tag,a===5||a===6){r=l=o;continue e}s=s.parentNode}}r=r.return}vf(function(){var c=l,d=bs(n),h=[];e:{var m=Vf.get(e);if(m!==void 0){var S=Ys,w=e;switch(e){case"keypress":if(Ml(n)===0)break e;case"keydown":case"keyup":S=w1;break;case"focusin":w="focus",S=qo;break;case"focusout":w="blur",S=qo;break;case"beforeblur":case"afterblur":S=qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=s1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=j1;break;case Bf:case Hf:case Wf:S=d1;break;case Qf:S=M1;break;case"scroll":S=o1;break;case"wheel":S=N1;break;case"copy":case"cut":case"paste":S=p1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=fc}var x=(t&4)!==0,M=!x&&e==="scroll",p=x?m!==null?m+"Capture":null:m;x=[];for(var f=c,g;f!==null;){g=f;var k=g.stateNode;if(g.tag===5&&k!==null&&(g=k,p!==null&&(k=Mi(f,p),k!=null&&x.push(zi(f,k,g)))),M)break;f=f.return}0<x.length&&(m=new S(m,w,null,n,d),h.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",m&&n!==$a&&(w=n.relatedTarget||n.fromElement)&&(Rn(w)||w[Kt]))break e;if((S||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,S?(w=n.relatedTarget||n.toElement,S=c,w=w?Rn(w):null,w!==null&&(M=qn(w),w!==M||w.tag!==5&&w.tag!==6)&&(w=null)):(S=null,w=c),S!==w)){if(x=cc,k="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=fc,k="onPointerLeave",p="onPointerEnter",f="pointer"),M=S==null?m:dr(S),g=w==null?m:dr(w),m=new x(k,f+"leave",S,n,d),m.target=M,m.relatedTarget=g,k=null,Rn(d)===c&&(x=new x(p,f+"enter",w,n,d),x.target=g,x.relatedTarget=M,k=x),M=k,S&&w)t:{for(x=S,p=w,f=0,g=x;g;g=ir(g))f++;for(g=0,k=p;k;k=ir(k))g++;for(;0<f-g;)x=ir(x),f--;for(;0<g-f;)p=ir(p),g--;for(;f--;){if(x===p||p!==null&&x===p.alternate)break t;x=ir(x),p=ir(p)}x=null}else x=null;S!==null&&jc(h,m,S,x,!1),w!==null&&M!==null&&jc(h,M,w,x,!0)}}e:{if(m=c?dr(c):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var L=A1;else if(mc(m))if(Of)L=F1;else{L=I1;var v=R1}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=O1);if(L&&(L=L(e,c))){If(h,L,n,d);break e}v&&v(e,m,c),e==="focusout"&&(v=m._wrapperState)&&v.controlled&&m.type==="number"&&Aa(m,"number",m.value)}switch(v=c?dr(c):window,e){case"focusin":(mc(v)||v.contentEditable==="true")&&(ur=v,Va=c,mi=null);break;case"focusout":mi=Va=ur=null;break;case"mousedown":Ya=!0;break;case"contextmenu":case"mouseup":case"dragend":Ya=!1,wc(h,n,d);break;case"selectionchange":if(b1)break;case"keydown":case"keyup":wc(h,n,d)}var j;if(Gs)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else sr?Af(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Pf&&n.locale!=="ko"&&(sr||T!=="onCompositionStart"?T==="onCompositionEnd"&&sr&&(j=zf()):(pn=d,Vs="value"in pn?pn.value:pn.textContent,sr=!0)),v=Ql(c,T),0<v.length&&(T=new dc(T,e,null,n,d),h.push({event:T,listeners:v}),j?T.data=j:(j=Rf(n),j!==null&&(T.data=j)))),(j=D1?T1(e,n):_1(e,n))&&(c=Ql(c,"onBeforeInput"),0<c.length&&(d=new dc("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=j))}Yf(h,t)})}function zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ql(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Mi(e,n),l!=null&&r.unshift(zi(e,l,i)),l=Mi(e,t),l!=null&&r.push(zi(e,l,i))),e=e.return}return r}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,t,n,r,i){for(var l=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,c=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&c!==null&&(s=c,i?(a=Mi(n,l),a!=null&&o.unshift(zi(n,a,s))):i||(a=Mi(n,l),a!=null&&o.push(zi(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Q1=/\r\n?/g,V1=/\u0000|\uFFFD/g;function kc(e){return(typeof e=="string"?e:""+e).replace(Q1,`
`).replace(V1,"")}function fl(e,t,n){if(t=kc(t),kc(e)!==t&&n)throw Error(D(425))}function Vl(){}var Ka=null,Ga=null;function Za(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xa=typeof setTimeout=="function"?setTimeout:void 0,Y1=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc<"u"?function(e){return Mc.resolve(null).then(e).catch(G1)}:Xa;function G1(e){setTimeout(function(){throw e})}function aa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Li(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),It="__reactFiber$"+br,Pi="__reactProps$"+br,Kt="__reactContainer$"+br,Ja="__reactEvents$"+br,Z1="__reactListeners$"+br,X1="__reactHandles$"+br;function Rn(e){var t=e[It];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Kt]||n[It]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ec(e);e!==null;){if(n=e[It])return n;e=Ec(e)}return t}e=n,n=e.parentNode}return null}function Yi(e){return e=e[It]||e[Kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function dr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function xo(e){return e[Pi]||null}var qa=[],fr=-1;function Ln(e){return{current:e}}function ae(e){0>fr||(e.current=qa[fr],qa[fr]=null,fr--)}function ie(e,t){fr++,qa[fr]=e.current,e.current=t}var En={},be=Ln(En),et=Ln(!1),Qn=En;function Lr(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function Yl(){ae(et),ae(be)}function Nc(e,t,n){if(be.current!==En)throw Error(D(168));ie(be,t),ie(et,n)}function Gf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,Rh(e)||"Unknown",i));return fe({},n,r)}function Kl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,Qn=be.current,ie(be,e),ie(et,et.current),!0}function Lc(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=Gf(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,ae(et),ae(be),ie(be,e)):ae(et),ie(et,n)}var Bt=null,wo=!1,sa=!1;function Zf(e){Bt===null?Bt=[e]:Bt.push(e)}function J1(e){wo=!0,Zf(e)}function Dn(){if(!sa&&Bt!==null){sa=!0;var e=0,t=ee;try{var n=Bt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Bt=null,wo=!1}catch(i){throw Bt!==null&&(Bt=Bt.slice(e+1)),Sf(Bs,Dn),i}finally{ee=t,sa=!1}}return null}var pr=[],hr=0,Gl=null,Zl=0,mt=[],gt=0,Vn=null,Ht=1,Wt="";function Pn(e,t){pr[hr++]=Zl,pr[hr++]=Gl,Gl=e,Zl=t}function Xf(e,t,n){mt[gt++]=Ht,mt[gt++]=Wt,mt[gt++]=Vn,Vn=e;var r=Ht;e=Wt;var i=32-Nt(r)-1;r&=~(1<<i),n+=1;var l=32-Nt(t)+i;if(30<l){var o=i-i%5;l=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ht=1<<32-Nt(t)+i|n<<i|r,Wt=l+e}else Ht=1<<l|n<<i|r,Wt=e}function Xs(e){e.return!==null&&(Pn(e,1),Xf(e,1,0))}function Js(e){for(;e===Gl;)Gl=pr[--hr],pr[hr]=null,Zl=pr[--hr],pr[hr]=null;for(;e===Vn;)Vn=mt[--gt],mt[gt]=null,Wt=mt[--gt],mt[gt]=null,Ht=mt[--gt],mt[gt]=null}var ut=null,st=null,ue=!1,Et=null;function Jf(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Dc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,st=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,st=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Vn!==null?{id:Ht,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,st=null,!0):!1;default:return!1}}function es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ts(e){if(ue){var t=st;if(t){var n=t;if(!Dc(e,t)){if(es(e))throw Error(D(418));t=yn(n.nextSibling);var r=ut;t&&Dc(e,t)?Jf(r,n):(e.flags=e.flags&-4097|2,ue=!1,ut=e)}}else{if(es(e))throw Error(D(418));e.flags=e.flags&-4097|2,ue=!1,ut=e}}}function Tc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function pl(e){if(e!==ut)return!1;if(!ue)return Tc(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Za(e.type,e.memoizedProps)),t&&(t=st)){if(es(e))throw qf(),Error(D(418));for(;t;)Jf(e,t),t=yn(t.nextSibling)}if(Tc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){st=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}st=null}}else st=ut?yn(e.stateNode.nextSibling):null;return!0}function qf(){for(var e=st;e;)e=yn(e.nextSibling)}function Dr(){st=ut=null,ue=!1}function qs(e){Et===null?Et=[e]:Et.push(e)}var q1=Xt.ReactCurrentBatchConfig;function jt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xl=Ln(null),Jl=null,mr=null,eu=null;function tu(){eu=mr=Jl=null}function nu(e){var t=Xl.current;ae(Xl),e._currentValue=t}function ns(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mr(e,t){Jl=e,eu=mr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Je=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(eu!==e)if(e={context:e,memoizedValue:t,next:null},mr===null){if(Jl===null)throw Error(D(308));mr=e,Jl.dependencies={lanes:0,firstContext:e}}else mr=mr.next=e;return t}var In=null;function ru(e){In===null?In=[e]:In.push(e)}function e0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ru(t)):(n.next=i.next,i.next=n),t.interleaved=n,Gt(e,r)}function Gt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function iu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function t0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Gt(e,n)}return i=r.interleaved,i===null?(t.next=t,ru(r)):(t.next=i.next,i.next=t),r.interleaved=t,Gt(e,n)}function El(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hs(e,n)}}function _c(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ql(e,t,n,r){var i=e.updateQueue;cn=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var a=s,c=a.next;a.next=null,o===null?l=c:o.next=c,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==o&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=a))}if(l!==null){var h=i.baseState;o=0,d=c=a=null,s=l;do{var m=s.lane,S=s.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:S,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,x=s;switch(m=t,S=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){h=w.call(S,h,m);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,m=typeof w=="function"?w.call(S,h,m):w,m==null)break e;h=fe({},h,m);break e;case 2:cn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[s]:m.push(s))}else S={eventTime:S,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=S,a=h):d=d.next=S,o|=m;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;m=s,s=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(a=h),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);Kn|=o,e.lanes=o,e.memoizedState=h}}function zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var n0=new qd.Component().refs;function rs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?qn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Sn(e),l=Qt(r,i);l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,i),t!==null&&(Lt(t,e,i,r),El(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qe(),i=Sn(e),l=Qt(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=xn(e,l,i),t!==null&&(Lt(t,e,i,r),El(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qe(),r=Sn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Lt(t,e,r,n),El(t,e,r))}};function Pc(e,t,n,r,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,o):t.prototype&&t.prototype.isPureReactComponent?!Ti(n,r)||!Ti(i,l):!0}function r0(e,t,n){var r=!1,i=En,l=t.contextType;return typeof l=="object"&&l!==null?l=xt(l):(i=tt(t)?Qn:be.current,r=t.contextTypes,l=(r=r!=null)?Lr(e,i):En),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Ac(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=n0,iu(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=xt(l):(l=tt(t)?Qn:be.current,i.context=Lr(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(rs(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&So.enqueueReplaceState(i,i.state,null),ql(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Jr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var s=i.refs;s===n0&&(s=i.refs={}),o===null?delete s[l]:s[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function hl(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Rc(e){var t=e._init;return t(e._payload)}function i0(e){function t(p,f){if(e){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Cn(p,f),p.index=0,p.sibling=null,p}function l(p,f,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,f,g,k){return f===null||f.tag!==6?(f=ma(g,p.mode,k),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,k){var L=g.type;return L===ar?d(p,f,g.props.children,k,g.key):f!==null&&(f.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===un&&Rc(L)===f.type)?(k=i(f,g.props),k.ref=Jr(p,f,g),k.return=p,k):(k=zl(g.type,g.key,g.props,null,p.mode,k),k.ref=Jr(p,f,g),k.return=p,k)}function c(p,f,g,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=ga(g,p.mode,k),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function d(p,f,g,k,L){return f===null||f.tag!==7?(f=Bn(g,p.mode,k,L),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ma(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case rl:return g=zl(f.type,f.key,f.props,null,p.mode,g),g.ref=Jr(p,null,f),g.return=p,g;case or:return f=ga(f,p.mode,g),f.return=p,f;case un:var k=f._init;return h(p,k(f._payload),g)}if(ai(f)||Yr(f))return f=Bn(f,p.mode,g,null),f.return=p,f;hl(p,f)}return null}function m(p,f,g,k){var L=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return L!==null?null:s(p,f,""+g,k);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:return g.key===L?a(p,f,g,k):null;case or:return g.key===L?c(p,f,g,k):null;case un:return L=g._init,m(p,f,L(g._payload),k)}if(ai(g)||Yr(g))return L!==null?null:d(p,f,g,k,null);hl(p,g)}return null}function S(p,f,g,k,L){if(typeof k=="string"&&k!==""||typeof k=="number")return p=p.get(g)||null,s(f,p,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case rl:return p=p.get(k.key===null?g:k.key)||null,a(f,p,k,L);case or:return p=p.get(k.key===null?g:k.key)||null,c(f,p,k,L);case un:var v=k._init;return S(p,f,g,v(k._payload),L)}if(ai(k)||Yr(k))return p=p.get(g)||null,d(f,p,k,L,null);hl(f,k)}return null}function w(p,f,g,k){for(var L=null,v=null,j=f,T=f=0,A=null;j!==null&&T<g.length;T++){j.index>T?(A=j,j=null):A=j.sibling;var F=m(p,j,g[T],k);if(F===null){j===null&&(j=A);break}e&&j&&F.alternate===null&&t(p,j),f=l(F,f,T),v===null?L=F:v.sibling=F,v=F,j=A}if(T===g.length)return n(p,j),ue&&Pn(p,T),L;if(j===null){for(;T<g.length;T++)j=h(p,g[T],k),j!==null&&(f=l(j,f,T),v===null?L=j:v.sibling=j,v=j);return ue&&Pn(p,T),L}for(j=r(p,j);T<g.length;T++)A=S(j,p,T,g[T],k),A!==null&&(e&&A.alternate!==null&&j.delete(A.key===null?T:A.key),f=l(A,f,T),v===null?L=A:v.sibling=A,v=A);return e&&j.forEach(function(G){return t(p,G)}),ue&&Pn(p,T),L}function x(p,f,g,k){var L=Yr(g);if(typeof L!="function")throw Error(D(150));if(g=L.call(g),g==null)throw Error(D(151));for(var v=L=null,j=f,T=f=0,A=null,F=g.next();j!==null&&!F.done;T++,F=g.next()){j.index>T?(A=j,j=null):A=j.sibling;var G=m(p,j,F.value,k);if(G===null){j===null&&(j=A);break}e&&j&&G.alternate===null&&t(p,j),f=l(G,f,T),v===null?L=G:v.sibling=G,v=G,j=A}if(F.done)return n(p,j),ue&&Pn(p,T),L;if(j===null){for(;!F.done;T++,F=g.next())F=h(p,F.value,k),F!==null&&(f=l(F,f,T),v===null?L=F:v.sibling=F,v=F);return ue&&Pn(p,T),L}for(j=r(p,j);!F.done;T++,F=g.next())F=S(j,p,T,F.value,k),F!==null&&(e&&F.alternate!==null&&j.delete(F.key===null?T:F.key),f=l(F,f,T),v===null?L=F:v.sibling=F,v=F);return e&&j.forEach(function(ve){return t(p,ve)}),ue&&Pn(p,T),L}function M(p,f,g,k){if(typeof g=="object"&&g!==null&&g.type===ar&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case rl:e:{for(var L=g.key,v=f;v!==null;){if(v.key===L){if(L=g.type,L===ar){if(v.tag===7){n(p,v.sibling),f=i(v,g.props.children),f.return=p,p=f;break e}}else if(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===un&&Rc(L)===v.type){n(p,v.sibling),f=i(v,g.props),f.ref=Jr(p,v,g),f.return=p,p=f;break e}n(p,v);break}else t(p,v);v=v.sibling}g.type===ar?(f=Bn(g.props.children,p.mode,k,g.key),f.return=p,p=f):(k=zl(g.type,g.key,g.props,null,p.mode,k),k.ref=Jr(p,f,g),k.return=p,p=k)}return o(p);case or:e:{for(v=g.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ga(g,p.mode,k),f.return=p,p=f}return o(p);case un:return v=g._init,M(p,f,v(g._payload),k)}if(ai(g))return w(p,f,g,k);if(Yr(g))return x(p,f,g,k);hl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ma(g,p.mode,k),f.return=p,p=f),o(p)):n(p,f)}return M}var Tr=i0(!0),l0=i0(!1),Ki={},Ft=Ln(Ki),Ai=Ln(Ki),Ri=Ln(Ki);function On(e){if(e===Ki)throw Error(D(174));return e}function lu(e,t){switch(ie(Ri,t),ie(Ai,e),ie(Ft,Ki),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ia(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ia(t,e)}ae(Ft),ie(Ft,t)}function _r(){ae(Ft),ae(Ai),ae(Ri)}function o0(e){On(Ri.current);var t=On(Ft.current),n=Ia(t,e.type);t!==n&&(ie(Ai,e),ie(Ft,n))}function ou(e){Ai.current===e&&(ae(Ft),ae(Ai))}var ce=Ln(0);function eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=[];function au(){for(var e=0;e<ua.length;e++)ua[e]._workInProgressVersionPrimary=null;ua.length=0}var Nl=Xt.ReactCurrentDispatcher,ca=Xt.ReactCurrentBatchConfig,Yn=0,de=null,ke=null,Te=null,to=!1,gi=!1,Ii=0,e2=0;function Fe(){throw Error(D(321))}function su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function uu(e,t,n,r,i,l){if(Yn=l,de=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nl.current=e===null||e.memoizedState===null?i2:l2,e=n(r,i),gi){l=0;do{if(gi=!1,Ii=0,25<=l)throw Error(D(301));l+=1,Te=ke=null,t.updateQueue=null,Nl.current=o2,e=n(r,i)}while(gi)}if(Nl.current=no,t=ke!==null&&ke.next!==null,Yn=0,Te=ke=de=null,to=!1,t)throw Error(D(300));return e}function cu(){var e=Ii!==0;return Ii=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?de.memoizedState=Te=e:Te=Te.next=e,Te}function wt(){if(ke===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Te===null?de.memoizedState:Te.next;if(t!==null)Te=t,ke=e;else{if(e===null)throw Error(D(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Te===null?de.memoizedState=Te=e:Te=Te.next=e}return Te}function Oi(e,t){return typeof t=="function"?t(e):t}function da(e){var t=wt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var s=o=null,a=null,c=l;do{var d=c.lane;if((Yn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(s=a=h,o=r):a=a.next=h,de.lanes|=d,Kn|=d}c=c.next}while(c!==null&&c!==l);a===null?o=r:a.next=s,Tt(r,t.memoizedState)||(Je=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,de.lanes|=l,Kn|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function fa(e){var t=wt(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);Tt(l,t.memoizedState)||(Je=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function a0(){}function s0(e,t){var n=de,r=wt(),i=t(),l=!Tt(r.memoizedState,i);if(l&&(r.memoizedState=i,Je=!0),r=r.queue,du(d0.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Fi(9,c0.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(D(349));Yn&30||u0(n,t,i)}return i}function u0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function c0(e,t,n,r){t.value=n,t.getSnapshot=r,f0(t)&&p0(e)}function d0(e,t,n){return n(function(){f0(t)&&p0(e)})}function f0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function p0(e){var t=Gt(e,1);t!==null&&Lt(t,e,1,-1)}function Ic(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oi,lastRenderedState:e},t.queue=e,e=e.dispatch=r2.bind(null,de,e),[t.memoizedState,e]}function Fi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=de.updateQueue,t===null?(t={lastEffect:null,stores:null},de.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function h0(){return wt().memoizedState}function Ll(e,t,n,r){var i=At();de.flags|=e,i.memoizedState=Fi(1|t,n,void 0,r===void 0?null:r)}function Co(e,t,n,r){var i=wt();r=r===void 0?null:r;var l=void 0;if(ke!==null){var o=ke.memoizedState;if(l=o.destroy,r!==null&&su(r,o.deps)){i.memoizedState=Fi(t,n,l,r);return}}de.flags|=e,i.memoizedState=Fi(1|t,n,l,r)}function Oc(e,t){return Ll(8390656,8,e,t)}function du(e,t){return Co(2048,8,e,t)}function m0(e,t){return Co(4,2,e,t)}function g0(e,t){return Co(4,4,e,t)}function v0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function y0(e,t,n){return n=n!=null?n.concat([e]):null,Co(4,4,v0.bind(null,t,e),n)}function fu(){}function x0(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function w0(e,t){var n=wt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&su(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function S0(e,t,n){return Yn&21?(Tt(n,t)||(n=kf(),de.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=n)}function t2(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=ca.transition;ca.transition={};try{e(!1),t()}finally{ee=n,ca.transition=r}}function C0(){return wt().memoizedState}function n2(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},j0(e))k0(t,n);else if(n=e0(e,t,n,r),n!==null){var i=Qe();Lt(n,e,r,i),M0(n,t,r)}}function r2(e,t,n){var r=Sn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(j0(e))k0(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,n);if(i.hasEagerState=!0,i.eagerState=s,Tt(s,o)){var a=t.interleaved;a===null?(i.next=i,ru(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=e0(e,t,i,r),n!==null&&(i=Qe(),Lt(n,e,r,i),M0(n,t,r))}}function j0(e){var t=e.alternate;return e===de||t!==null&&t===de}function k0(e,t){gi=to=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function M0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hs(e,n)}}var no={readContext:xt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},i2={readContext:xt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4194308,4,v0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ll(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=n2.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:Ic,useDebugValue:fu,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=Ic(!1),t=e[0];return e=t2.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=de,i=At();if(ue){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),ze===null)throw Error(D(349));Yn&30||u0(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Oc(d0.bind(null,r,l,e),[e]),r.flags|=2048,Fi(9,c0.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=At(),t=ze.identifierPrefix;if(ue){var n=Wt,r=Ht;n=(r&~(1<<32-Nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ii++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=e2++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l2={readContext:xt,useCallback:x0,useContext:xt,useEffect:du,useImperativeHandle:y0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:da,useRef:h0,useState:function(){return da(Oi)},useDebugValue:fu,useDeferredValue:function(e){var t=wt();return S0(t,ke.memoizedState,e)},useTransition:function(){var e=da(Oi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:a0,useSyncExternalStore:s0,useId:C0,unstable_isNewReconciler:!1},o2={readContext:xt,useCallback:x0,useContext:xt,useEffect:du,useImperativeHandle:y0,useInsertionEffect:m0,useLayoutEffect:g0,useMemo:w0,useReducer:fa,useRef:h0,useState:function(){return fa(Oi)},useDebugValue:fu,useDeferredValue:function(e){var t=wt();return ke===null?t.memoizedState=e:S0(t,ke.memoizedState,e)},useTransition:function(){var e=fa(Oi)[0],t=wt().memoizedState;return[e,t]},useMutableSource:a0,useSyncExternalStore:s0,useId:C0,unstable_isNewReconciler:!1};function zr(e,t){try{var n="",r=t;do n+=Ah(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ls(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var a2=typeof WeakMap=="function"?WeakMap:Map;function E0(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,ms=r),ls(e,t)},n}function N0(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ls(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ls(e,t),typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Fc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new a2;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=S2.bind(null,e,t,n),t.then(e,e))}function $c(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var s2=Xt.ReactCurrentOwner,Je=!1;function He(e,t,n,r){t.child=e===null?l0(t,null,n,r):Tr(t,e.child,n,r)}function bc(e,t,n,r,i){n=n.render;var l=t.ref;return Mr(t,i),r=uu(e,t,n,r,l,i),n=cu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ue&&n&&Xs(t),t.flags|=1,He(e,t,r,i),t.child)}function Bc(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!wu(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,L0(e,t,l,r,i)):(e=zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Ti,n(o,r)&&e.ref===t.ref)return Zt(e,t,i)}return t.flags|=1,e=Cn(l,r),e.ref=t.ref,e.return=t,t.child=e}function L0(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Ti(l,r)&&e.ref===t.ref)if(Je=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(Je=!0);else return t.lanes=e.lanes,Zt(e,t,i)}return os(e,t,n,r,i)}function D0(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(vr,at),at|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(vr,at),at|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,ie(vr,at),at|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,ie(vr,at),at|=r;return He(e,t,i,n),t.child}function T0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function os(e,t,n,r,i){var l=tt(n)?Qn:be.current;return l=Lr(t,l),Mr(t,i),n=uu(e,t,n,r,l,i),r=cu(),e!==null&&!Je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Zt(e,t,i)):(ue&&r&&Xs(t),t.flags|=1,He(e,t,n,i),t.child)}function Hc(e,t,n,r,i){if(tt(n)){var l=!0;Kl(t)}else l=!1;if(Mr(t,i),t.stateNode===null)Dl(e,t),r0(t,n,r),is(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=xt(c):(c=tt(n)?Qn:be.current,c=Lr(t,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==c)&&Ac(t,o,r,c),cn=!1;var m=t.memoizedState;o.state=m,ql(t,r,o,i),a=t.memoizedState,s!==r||m!==a||et.current||cn?(typeof d=="function"&&(rs(t,n,d,r),a=t.memoizedState),(s=cn||Pc(t,n,s,r,m,a,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,t0(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:jt(t.type,s),o.props=c,h=t.pendingProps,m=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=xt(a):(a=tt(n)?Qn:be.current,a=Lr(t,a));var S=n.getDerivedStateFromProps;(d=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==h||m!==a)&&Ac(t,o,r,a),cn=!1,m=t.memoizedState,o.state=m,ql(t,r,o,i);var w=t.memoizedState;s!==h||m!==w||et.current||cn?(typeof S=="function"&&(rs(t,n,S,r),w=t.memoizedState),(c=cn||Pc(t,n,c,r,m,w,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return as(e,t,n,r,l,i)}function as(e,t,n,r,i,l){T0(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Lc(t,n,!1),Zt(e,t,l);r=t.stateNode,s2.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Tr(t,e.child,null,l),t.child=Tr(t,null,s,l)):He(e,t,s,l),t.memoizedState=r.state,i&&Lc(t,n,!0),t.child}function _0(e){var t=e.stateNode;t.pendingContext?Nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nc(e,t.context,!1),lu(e,t.containerInfo)}function Wc(e,t,n,r,i){return Dr(),qs(i),t.flags|=256,He(e,t,n,r),t.child}var ss={dehydrated:null,treeContext:null,retryLane:0};function us(e){return{baseLanes:e,cachePool:null,transitions:null}}function z0(e,t,n){var r=t.pendingProps,i=ce.current,l=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ce,i&1),e===null)return ts(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,l?(r=t.mode,l=t.child,o={mode:"hidden",children:o},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Mo(o,r,0,null),e=Bn(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=us(n),t.memoizedState=ss,e):pu(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return u2(e,t,o,r,s,i,n);if(l){l=r.fallback,o=t.mode,i=e.child,s=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Cn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),s!==null?l=Cn(s,l):(l=Bn(l,o,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,o=e.child.memoizedState,o=o===null?us(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=ss,r}return l=e.child,e=l.sibling,r=Cn(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pu(e,t){return t=Mo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ml(e,t,n,r){return r!==null&&qs(r),Tr(t,e.child,null,n),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function u2(e,t,n,r,i,l,o){if(n)return t.flags&256?(t.flags&=-257,r=pa(Error(D(422))),ml(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=Mo({mode:"visible",children:r.children},i,0,null),l=Bn(l,i,o,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Tr(t,e.child,null,o),t.child.memoizedState=us(o),t.memoizedState=ss,l);if(!(t.mode&1))return ml(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(D(419)),r=pa(l,r,void 0),ml(e,t,o,r)}if(s=(o&e.childLanes)!==0,Je||s){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Gt(e,i),Lt(r,e,i,-1))}return xu(),r=pa(Error(D(421))),ml(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C2.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,st=yn(i.nextSibling),ut=t,ue=!0,Et=null,e!==null&&(mt[gt++]=Ht,mt[gt++]=Wt,mt[gt++]=Vn,Ht=e.id,Wt=e.overflow,Vn=t),t=pu(t,r.children),t.flags|=4096,t)}function Qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ns(e.return,t,n)}function ha(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function P0(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(He(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n,t);else if(e.tag===19)Qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ha(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ha(t,!0,n,null,l);break;case"together":ha(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Cn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Cn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function c2(e,t,n){switch(t.tag){case 3:_0(t),Dr();break;case 5:o0(t);break;case 1:tt(t.type)&&Kl(t);break;case 4:lu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(Xl,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?z0(e,t,n):(ie(ce,ce.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return P0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,D0(e,t,n)}return Zt(e,t,n)}var A0,cs,R0,I0;A0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cs=function(){};R0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,On(Ft.current);var l=null;switch(n){case"input":i=za(e,i),r=za(e,r),l=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),l=[];break;case"textarea":i=Ra(e,i),r=Ra(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vl)}Oa(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var s=i[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ji.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var a=r[c];if(s=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==s&&(a!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(l||(l=[]),l.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ji.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&le("scroll",e),l||s===a||(l=[])):(l=l||[]).push(c,a))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};I0=function(e,t,n,r){n!==r&&(t.flags|=4)};function qr(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function d2(e,t,n){var r=t.pendingProps;switch(Js(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return tt(t.type)&&Yl(),$e(t),null;case 3:return r=t.stateNode,_r(),ae(et),ae(be),au(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(ys(Et),Et=null))),cs(e,t),$e(t),null;case 5:ou(t);var i=On(Ri.current);if(n=t.type,e!==null&&t.stateNode!=null)R0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return $e(t),null}if(e=On(Ft.current),pl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[It]=t,r[Pi]=l,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ui.length;i++)le(ui[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":ec(r,l),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},le("invalid",r);break;case"textarea":nc(r,l),le("invalid",r)}Oa(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&fl(r.textContent,s,e),i=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&fl(r.textContent,s,e),i=["children",""+s]):ji.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":il(r),tc(r,l,!0);break;case"textarea":il(r),rc(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Vl)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[It]=t,e[Pi]=r,A0(e,t,!1,!1),t.stateNode=e;e:{switch(o=Fa(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<ui.length;i++)le(ui[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":ec(e,r),i=za(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),le("invalid",e);break;case"textarea":nc(e,r),i=Ra(e,r),le("invalid",e);break;default:i=r}Oa(n,i),s=i;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?ff(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&cf(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ki(e,a):typeof a=="number"&&ki(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ji.hasOwnProperty(l)?a!=null&&l==="onScroll"&&le("scroll",e):a!=null&&Os(e,l,a,o))}switch(n){case"input":il(e),tc(e,r,!1);break;case"textarea":il(e),rc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Sr(e,!!r.multiple,l,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)I0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=On(Ri.current),On(Ft.current),pl(t)){if(r=t.stateNode,n=t.memoizedProps,r[It]=t,(l=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:fl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return $e(t),null;case 13:if(ae(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&st!==null&&t.mode&1&&!(t.flags&128))qf(),Dr(),t.flags|=98560,l=!1;else if(l=pl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(D(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(D(317));l[It]=t}else Dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),l=!1}else Et!==null&&(ys(Et),Et=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?Me===0&&(Me=3):xu())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return _r(),cs(e,t),e===null&&_i(t.stateNode.containerInfo),$e(t),null;case 10:return nu(t.type._context),$e(t),null;case 17:return tt(t.type)&&Yl(),$e(t),null;case 19:if(ae(ce),l=t.memoizedState,l===null)return $e(t),null;if(r=(t.flags&128)!==0,o=l.rendering,o===null)if(r)qr(l,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=eo(e),o!==null){for(t.flags|=128,qr(l,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}l.tail!==null&&Se()>Pr&&(t.flags|=128,r=!0,qr(l,!1),t.lanes=4194304)}else{if(!r)if(e=eo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),qr(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!ue)return $e(t),null}else 2*Se()-l.renderingStartTime>Pr&&n!==1073741824&&(t.flags|=128,r=!0,qr(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Se(),t.sibling=null,n=ce.current,ie(ce,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return yu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?at&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function f2(e,t){switch(Js(t),t.tag){case 1:return tt(t.type)&&Yl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),ae(et),ae(be),au(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ou(t),null;case 13:if(ae(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(ce),null;case 4:return _r(),null;case 10:return nu(t.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var gl=!1,Ue=!1,p2=typeof WeakSet=="function"?WeakSet:Set,P=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function ds(e,t,n){try{n()}catch(r){me(e,t,r)}}var Vc=!1;function h2(e,t){if(Ka=Hl,e=Uf(),Zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,c=0,d=0,h=e,m=null;t:for(;;){for(var S;h!==n||i!==0&&h.nodeType!==3||(s=o+i),h!==l||r!==0&&h.nodeType!==3||(a=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(S=h.firstChild)!==null;)m=h,h=S;for(;;){if(h===e)break t;if(m===n&&++c===i&&(s=o),m===l&&++d===r&&(a=o),(S=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=S}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ga={focusedElem:e,selectionRange:n},Hl=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,M=w.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:jt(t.type,x),M);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(k){me(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=Vc,Vc=!1,w}function vi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&ds(t,n,l)}i=i.next}while(i!==r)}}function jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function O0(e){var t=e.alternate;t!==null&&(e.alternate=null,O0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[Pi],delete t[Ja],delete t[Z1],delete t[X1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function F0(e){return e.tag===5||e.tag===3||e.tag===4}function Yc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||F0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vl));else if(r!==4&&(e=e.child,e!==null))for(ps(e,t,n),e=e.sibling;e!==null;)ps(e,t,n),e=e.sibling}function hs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hs(e,t,n),e=e.sibling;e!==null;)hs(e,t,n),e=e.sibling}var Ae=null,kt=!1;function ln(e,t,n){for(n=n.child;n!==null;)$0(e,t,n),n=n.sibling}function $0(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(mo,n)}catch{}switch(n.tag){case 5:Ue||gr(n,t);case 6:var r=Ae,i=kt;Ae=null,ln(e,t,n),Ae=r,kt=i,Ae!==null&&(kt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(kt?(e=Ae,n=n.stateNode,e.nodeType===8?aa(e.parentNode,n):e.nodeType===1&&aa(e,n),Li(e)):aa(Ae,n.stateNode));break;case 4:r=Ae,i=kt,Ae=n.stateNode.containerInfo,kt=!0,ln(e,t,n),Ae=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&ds(n,t,o),i=i.next}while(i!==r)}ln(e,t,n);break;case 1:if(!Ue&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){me(n,t,s)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,ln(e,t,n),Ue=r):ln(e,t,n);break;default:ln(e,t,n)}}function Kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new p2),t.forEach(function(r){var i=j2.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ae=s.stateNode,kt=!1;break e;case 3:Ae=s.stateNode.containerInfo,kt=!0;break e;case 4:Ae=s.stateNode.containerInfo,kt=!0;break e}s=s.return}if(Ae===null)throw Error(D(160));$0(l,o,i),Ae=null,kt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){me(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)U0(t,e),t=t.sibling}function U0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Pt(e),r&4){try{vi(3,e,e.return),jo(3,e)}catch(x){me(e,e.return,x)}try{vi(5,e,e.return)}catch(x){me(e,e.return,x)}}break;case 1:Ct(t,e),Pt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(Ct(t,e),Pt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var i=e.stateNode;try{ki(i,"")}catch(x){me(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&af(i,l),Fa(s,o);var c=Fa(s,l);for(o=0;o<a.length;o+=2){var d=a[o],h=a[o+1];d==="style"?ff(i,h):d==="dangerouslySetInnerHTML"?cf(i,h):d==="children"?ki(i,h):Os(i,d,h,c)}switch(s){case"input":Pa(i,l);break;case"textarea":sf(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var S=l.value;S!=null?Sr(i,!!l.multiple,S,!1):m!==!!l.multiple&&(l.defaultValue!=null?Sr(i,!!l.multiple,l.defaultValue,!0):Sr(i,!!l.multiple,l.multiple?[]:"",!1))}i[Pi]=l}catch(x){me(e,e.return,x)}}break;case 6:if(Ct(t,e),Pt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(x){me(e,e.return,x)}}break;case 3:if(Ct(t,e),Pt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Li(t.containerInfo)}catch(x){me(e,e.return,x)}break;case 4:Ct(t,e),Pt(e);break;case 13:Ct(t,e),Pt(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(gu=Se())),r&4&&Kc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(c=Ue)||d,Ct(t,e),Ue=c):Ct(t,e),Pt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(P=e,d=e.child;d!==null;){for(h=P=d;P!==null;){switch(m=P,S=m.child,m.tag){case 0:case 11:case 14:case 15:vi(4,m,m.return);break;case 1:gr(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){me(r,n,x)}}break;case 5:gr(m,m.return);break;case 22:if(m.memoizedState!==null){Zc(h);continue}}S!==null?(S.return=m,P=S):Zc(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,c?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=h.stateNode,a=h.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=df("display",o))}catch(x){me(e,e.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){me(e,e.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ct(t,e),Pt(e),r&4&&Kc(e);break;case 21:break;default:Ct(t,e),Pt(e)}}function Pt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(F0(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ki(i,""),r.flags&=-33);var l=Yc(e);hs(e,l,i);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Yc(e);ps(e,s,o);break;default:throw Error(D(161))}}catch(a){me(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function m2(e,t,n){P=e,b0(e)}function b0(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var i=P,l=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gl;if(!o){var s=i.alternate,a=s!==null&&s.memoizedState!==null||Ue;s=gl;var c=Ue;if(gl=o,(Ue=a)&&!c)for(P=i;P!==null;)o=P,a=o.child,o.tag===22&&o.memoizedState!==null?Xc(i):a!==null?(a.return=o,P=a):Xc(i);for(;l!==null;)P=l,b0(l),l=l.sibling;P=i,gl=s,Ue=c}Gc(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,P=l):Gc(e)}}function Gc(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:jt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&zc(t,l,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Li(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ue||t.flags&512&&fs(t)}catch(m){me(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Zc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Xc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jo(4,t)}catch(a){me(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){me(t,i,a)}}var l=t.return;try{fs(t)}catch(a){me(t,l,a)}break;case 5:var o=t.return;try{fs(t)}catch(a){me(t,o,a)}}}catch(a){me(t,t.return,a)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var g2=Math.ceil,ro=Xt.ReactCurrentDispatcher,hu=Xt.ReactCurrentOwner,yt=Xt.ReactCurrentBatchConfig,X=0,ze=null,je=null,Re=0,at=0,vr=Ln(0),Me=0,$i=null,Kn=0,ko=0,mu=0,yi=null,Xe=null,gu=0,Pr=1/0,Ut=null,io=!1,ms=null,wn=null,vl=!1,hn=null,lo=0,xi=0,gs=null,Tl=-1,_l=0;function Qe(){return X&6?Se():Tl!==-1?Tl:Tl=Se()}function Sn(e){return e.mode&1?X&2&&Re!==0?Re&-Re:q1.transition!==null?(_l===0&&(_l=kf()),_l):(e=ee,e!==0||(e=window.event,e=e===void 0?16:_f(e.type)),e):1}function Lt(e,t,n,r){if(50<xi)throw xi=0,gs=null,Error(D(185));Qi(e,n,r),(!(X&2)||e!==ze)&&(e===ze&&(!(X&2)&&(ko|=n),Me===4&&fn(e,Re)),nt(e,r),n===1&&X===0&&!(t.mode&1)&&(Pr=Se()+500,wo&&Dn()))}function nt(e,t){var n=e.callbackNode;qh(e,t);var r=Bl(e,e===ze?Re:0);if(r===0)n!==null&&oc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&oc(n),t===1)e.tag===0?J1(Jc.bind(null,e)):Zf(Jc.bind(null,e)),K1(function(){!(X&6)&&Dn()}),n=null;else{switch(Mf(r)){case 1:n=Bs;break;case 4:n=Cf;break;case 16:n=bl;break;case 536870912:n=jf;break;default:n=bl}n=G0(n,B0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function B0(e,t){if(Tl=-1,_l=0,X&6)throw Error(D(327));var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var r=Bl(e,e===ze?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oo(e,r);else{t=r;var i=X;X|=2;var l=W0();(ze!==e||Re!==t)&&(Ut=null,Pr=Se()+500,bn(e,t));do try{x2();break}catch(s){H0(e,s)}while(!0);tu(),ro.current=l,X=i,je!==null?t=0:(ze=null,Re=0,t=Me)}if(t!==0){if(t===2&&(i=Ha(e),i!==0&&(r=i,t=vs(e,i))),t===1)throw n=$i,bn(e,0),fn(e,r),nt(e,Se()),n;if(t===6)fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!v2(i)&&(t=oo(e,r),t===2&&(l=Ha(e),l!==0&&(r=l,t=vs(e,l))),t===1))throw n=$i,bn(e,0),fn(e,r),nt(e,Se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:An(e,Xe,Ut);break;case 3:if(fn(e,r),(r&130023424)===r&&(t=gu+500-Se(),10<t)){if(Bl(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Xa(An.bind(null,e,Xe,Ut),t);break}An(e,Xe,Ut);break;case 4:if(fn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Nt(r);l=1<<o,o=t[o],o>i&&(i=o),r&=~l}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*g2(r/1960))-r,10<r){e.timeoutHandle=Xa(An.bind(null,e,Xe,Ut),r);break}An(e,Xe,Ut);break;case 5:An(e,Xe,Ut);break;default:throw Error(D(329))}}}return nt(e,Se()),e.callbackNode===n?B0.bind(null,e):null}function vs(e,t){var n=yi;return e.current.memoizedState.isDehydrated&&(bn(e,t).flags|=256),e=oo(e,t),e!==2&&(t=Xe,Xe=n,t!==null&&ys(t)),e}function ys(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function v2(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Tt(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fn(e,t){for(t&=~mu,t&=~ko,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nt(t),r=1<<n;e[n]=-1,t&=~r}}function Jc(e){if(X&6)throw Error(D(327));Er();var t=Bl(e,0);if(!(t&1))return nt(e,Se()),null;var n=oo(e,t);if(e.tag!==0&&n===2){var r=Ha(e);r!==0&&(t=r,n=vs(e,r))}if(n===1)throw n=$i,bn(e,0),fn(e,t),nt(e,Se()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,An(e,Xe,Ut),nt(e,Se()),null}function vu(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Pr=Se()+500,wo&&Dn())}}function Gn(e){hn!==null&&hn.tag===0&&!(X&6)&&Er();var t=X;X|=1;var n=yt.transition,r=ee;try{if(yt.transition=null,ee=1,e)return e()}finally{ee=r,yt.transition=n,X=t,!(X&6)&&Dn()}}function yu(){at=vr.current,ae(vr)}function bn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Y1(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Js(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:_r(),ae(et),ae(be),au();break;case 5:ou(r);break;case 4:_r();break;case 13:ae(ce);break;case 19:ae(ce);break;case 10:nu(r.type._context);break;case 22:case 23:yu()}n=n.return}if(ze=e,je=e=Cn(e.current,null),Re=at=t,Me=0,$i=null,mu=ko=Kn=0,Xe=yi=null,In!==null){for(t=0;t<In.length;t++)if(n=In[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,r.next=o}n.pending=r}In=null}return e}function H0(e,t){do{var n=je;try{if(tu(),Nl.current=no,to){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}to=!1}if(Yn=0,Te=ke=de=null,gi=!1,Ii=0,hu.current=null,n===null||n.return===null){Me=1,$i=t,je=null;break}e:{var l=e,o=n.return,s=n,a=t;if(t=Re,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=s,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var S=$c(o);if(S!==null){S.flags&=-257,Uc(S,o,s,l,t),S.mode&1&&Fc(l,c,t),t=S,a=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(a),t.updateQueue=x}else w.add(a);break e}else{if(!(t&1)){Fc(l,c,t),xu();break e}a=Error(D(426))}}else if(ue&&s.mode&1){var M=$c(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Uc(M,o,s,l,t),qs(zr(a,s));break e}}l=a=zr(a,s),Me!==4&&(Me=2),yi===null?yi=[l]:yi.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=E0(l,a,t);_c(l,p);break e;case 1:s=a;var f=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(wn===null||!wn.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var k=N0(l,s,t);_c(l,k);break e}}l=l.return}while(l!==null)}V0(n)}catch(L){t=L,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function W0(){var e=ro.current;return ro.current=no,e===null?no:e}function xu(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(Kn&268435455)&&!(ko&268435455)||fn(ze,Re)}function oo(e,t){var n=X;X|=2;var r=W0();(ze!==e||Re!==t)&&(Ut=null,bn(e,t));do try{y2();break}catch(i){H0(e,i)}while(!0);if(tu(),X=n,ro.current=r,je!==null)throw Error(D(261));return ze=null,Re=0,Me}function y2(){for(;je!==null;)Q0(je)}function x2(){for(;je!==null&&!Wh();)Q0(je)}function Q0(e){var t=K0(e.alternate,e,at);e.memoizedProps=e.pendingProps,t===null?V0(e):je=t,hu.current=null}function V0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=f2(n,t),n!==null){n.flags&=32767,je=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,je=null;return}}else if(n=d2(n,t,at),n!==null){je=n;return}if(t=t.sibling,t!==null){je=t;return}je=t=e}while(t!==null);Me===0&&(Me=5)}function An(e,t,n){var r=ee,i=yt.transition;try{yt.transition=null,ee=1,w2(e,t,n,r)}finally{yt.transition=i,ee=r}return null}function w2(e,t,n,r){do Er();while(hn!==null);if(X&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(e1(e,l),e===ze&&(je=ze=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vl||(vl=!0,G0(bl,function(){return Er(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=yt.transition,yt.transition=null;var o=ee;ee=1;var s=X;X|=4,hu.current=null,h2(e,n),U0(n,e),U1(Ga),Hl=!!Ka,Ga=Ka=null,e.current=n,m2(n),Qh(),X=s,ee=o,yt.transition=l}else e.current=n;if(vl&&(vl=!1,hn=e,lo=i),l=e.pendingLanes,l===0&&(wn=null),Kh(n.stateNode),nt(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(io)throw io=!1,e=ms,ms=null,e;return lo&1&&e.tag!==0&&Er(),l=e.pendingLanes,l&1?e===gs?xi++:(xi=0,gs=e):xi=0,Dn(),null}function Er(){if(hn!==null){var e=Mf(lo),t=yt.transition,n=ee;try{if(yt.transition=null,ee=16>e?16:e,hn===null)var r=!1;else{if(e=hn,hn=null,lo=0,X&6)throw Error(D(331));var i=X;for(X|=4,P=e.current;P!==null;){var l=P,o=l.child;if(P.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var c=s[a];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:vi(8,d,l)}var h=d.child;if(h!==null)h.return=d,P=h;else for(;P!==null;){d=P;var m=d.sibling,S=d.return;if(O0(d),d===c){P=null;break}if(m!==null){m.return=S,P=m;break}P=S}}}var w=l.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var M=x.sibling;x.sibling=null,x=M}while(x!==null)}}P=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,P=o;else e:for(;P!==null;){if(l=P,l.flags&2048)switch(l.tag){case 0:case 11:case 15:vi(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,P=p;break e}P=l.return}}var f=e.current;for(P=f;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=f;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:jo(9,s)}}catch(L){me(s,s.return,L)}if(s===o){P=null;break e}var k=s.sibling;if(k!==null){k.return=s.return,P=k;break e}P=s.return}}if(X=i,Dn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(mo,e)}catch{}r=!0}return r}finally{ee=n,yt.transition=t}}return!1}function qc(e,t,n){t=zr(n,t),t=E0(e,t,1),e=xn(e,t,1),t=Qe(),e!==null&&(Qi(e,1,t),nt(e,t))}function me(e,t,n){if(e.tag===3)qc(e,e,n);else for(;t!==null;){if(t.tag===3){qc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){e=zr(n,e),e=N0(t,e,1),t=xn(t,e,1),e=Qe(),t!==null&&(Qi(t,1,e),nt(t,e));break}}t=t.return}}function S2(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Re&n)===n&&(Me===4||Me===3&&(Re&130023424)===Re&&500>Se()-gu?bn(e,0):mu|=n),nt(e,t)}function Y0(e,t){t===0&&(e.mode&1?(t=al,al<<=1,!(al&130023424)&&(al=4194304)):t=1);var n=Qe();e=Gt(e,t),e!==null&&(Qi(e,t,n),nt(e,n))}function C2(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Y0(e,n)}function j2(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Y0(e,n)}var K0;K0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Je=!1,c2(e,t,n);Je=!!(e.flags&131072)}else Je=!1,ue&&t.flags&1048576&&Xf(t,Zl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Dl(e,t),e=t.pendingProps;var i=Lr(t,be.current);Mr(t,n),i=uu(null,t,r,e,i,n);var l=cu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(l=!0,Kl(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,iu(t),i.updater=So,t.stateNode=i,i._reactInternals=t,is(t,r,e,n),t=as(null,t,r,!0,l,n)):(t.tag=0,ue&&l&&Xs(t),He(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Dl(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=M2(r),e=jt(r,e),i){case 0:t=os(null,t,r,e,n);break e;case 1:t=Hc(null,t,r,e,n);break e;case 11:t=bc(null,t,r,e,n);break e;case 14:t=Bc(null,t,r,jt(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),os(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Hc(e,t,r,i,n);case 3:e:{if(_0(t),e===null)throw Error(D(387));r=t.pendingProps,l=t.memoizedState,i=l.element,t0(e,t),ql(t,r,null,n);var o=t.memoizedState;if(r=o.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=zr(Error(D(423)),t),t=Wc(e,t,r,n,i);break e}else if(r!==i){i=zr(Error(D(424)),t),t=Wc(e,t,r,n,i);break e}else for(st=yn(t.stateNode.containerInfo.firstChild),ut=t,ue=!0,Et=null,n=l0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dr(),r===i){t=Zt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return o0(t),e===null&&ts(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Za(r,i)?o=null:l!==null&&Za(r,l)&&(t.flags|=32),T0(e,t),He(e,t,o,n),t.child;case 6:return e===null&&ts(t),null;case 13:return z0(e,t,n);case 4:return lu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),bc(e,t,r,i,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,ie(Xl,r._currentValue),r._currentValue=o,l!==null)if(Tt(l.value,o)){if(l.children===i.children&&!et.current){t=Zt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){o=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=Qt(-1,n&-n),a.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),ns(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(D(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ns(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}He(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Mr(t,n),i=xt(i),r=r(i),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,i=jt(r,t.pendingProps),i=jt(r.type,i),Bc(e,t,r,i,n);case 15:return L0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:jt(r,i),Dl(e,t),t.tag=1,tt(r)?(e=!0,Kl(t)):e=!1,Mr(t,n),r0(t,r,i),is(t,r,i,n),as(null,t,r,!0,e,n);case 19:return P0(e,t,n);case 22:return D0(e,t,n)}throw Error(D(156,t.tag))};function G0(e,t){return Sf(e,t)}function k2(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new k2(e,t,n,r)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M2(e){if(typeof e=="function")return wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===$s)return 11;if(e===Us)return 14}return 2}function Cn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zl(e,t,n,r,i,l){var o=2;if(r=e,typeof e=="function")wu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case ar:return Bn(n.children,i,l,t);case Fs:o=8,i|=8;break;case La:return e=vt(12,n,t,i|2),e.elementType=La,e.lanes=l,e;case Da:return e=vt(13,n,t,i),e.elementType=Da,e.lanes=l,e;case Ta:return e=vt(19,n,t,i),e.elementType=Ta,e.lanes=l,e;case rf:return Mo(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case tf:o=10;break e;case nf:o=9;break e;case $s:o=11;break e;case Us:o=14;break e;case un:o=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=vt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Bn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Mo(e,t,n,r){return e=vt(22,e,r,t),e.elementType=rf,e.lanes=n,e.stateNode={isHidden:!1},e}function ma(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function ga(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function E2(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Su(e,t,n,r,i,l,o,s,a){return e=new E2(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=vt(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},iu(l),e}function N2(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:or,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Z0(e){if(!e)return En;e=e._reactInternals;e:{if(qn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(tt(n))return Gf(e,n,t)}return t}function X0(e,t,n,r,i,l,o,s,a){return e=Su(n,r,!0,e,i,l,o,s,a),e.context=Z0(null),n=e.current,r=Qe(),i=Sn(n),l=Qt(r,i),l.callback=t??null,xn(n,l,i),e.current.lanes=i,Qi(e,i,r),nt(e,r),e}function Eo(e,t,n,r){var i=t.current,l=Qe(),o=Sn(i);return n=Z0(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(l,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,o),e!==null&&(Lt(e,i,o,l),El(e,i,o)),o}function ao(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ed(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){ed(e,t),(e=e.alternate)&&ed(e,t)}function L2(){return null}var J0=typeof reportError=="function"?reportError:function(e){console.error(e)};function ju(e){this._internalRoot=e}No.prototype.render=ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));Eo(e,t,null,null)};No.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){Eo(null,e,null,null)}),t[Kt]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&Tf(e)}};function ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Lo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function td(){}function D2(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var c=ao(o);l.call(c)}}var o=X0(t,r,e,0,null,!1,!1,"",td);return e._reactRootContainer=o,e[Kt]=o.current,_i(e.nodeType===8?e.parentNode:e),Gn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var s=r;r=function(){var c=ao(a);s.call(c)}}var a=Su(e,0,!1,null,null,!1,!1,"",td);return e._reactRootContainer=a,e[Kt]=a.current,_i(e.nodeType===8?e.parentNode:e),Gn(function(){Eo(t,a,n,r)}),a}function Do(e,t,n,r,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var s=i;i=function(){var a=ao(o);s.call(a)}}Eo(t,o,e,i)}else o=D2(n,t,e,i,r);return ao(o)}Ef=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=si(t.pendingLanes);n!==0&&(Hs(t,n|1),nt(t,Se()),!(X&6)&&(Pr=Se()+500,Dn()))}break;case 13:Gn(function(){var r=Gt(e,1);if(r!==null){var i=Qe();Lt(r,e,1,i)}}),Cu(e,1)}};Ws=function(e){if(e.tag===13){var t=Gt(e,134217728);if(t!==null){var n=Qe();Lt(t,e,134217728,n)}Cu(e,134217728)}};Nf=function(e){if(e.tag===13){var t=Sn(e),n=Gt(e,t);if(n!==null){var r=Qe();Lt(n,e,t,r)}Cu(e,t)}};Lf=function(){return ee};Df=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Ua=function(e,t,n){switch(t){case"input":if(Pa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xo(r);if(!i)throw Error(D(90));of(r),Pa(r,i)}}}break;case"textarea":sf(e,n);break;case"select":t=n.value,t!=null&&Sr(e,!!n.multiple,t,!1)}};mf=vu;gf=Gn;var T2={usingClientEntryPoint:!1,Events:[Yi,dr,xo,pf,hf,vu]},ei={findFiberByHostInstance:Rn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_2={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xf(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance||L2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{mo=yl.inject(_2),Ot=yl}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T2;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(t))throw Error(D(200));return N2(e,t,null,n)};dt.createRoot=function(e,t){if(!ku(e))throw Error(D(299));var n=!1,r="",i=J0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Su(e,1,!1,null,null,n,!1,r,i),e[Kt]=t.current,_i(e.nodeType===8?e.parentNode:e),new ju(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=xf(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Gn(e)};dt.hydrate=function(e,t,n){if(!Lo(t))throw Error(D(200));return Do(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!ku(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",o=J0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=X0(t,null,e,1,n??null,i,!1,l,o),e[Kt]=t.current,_i(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new No(t)};dt.render=function(e,t,n){if(!Lo(t))throw Error(D(200));return Do(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Lo(e))throw Error(D(40));return e._reactRootContainer?(Gn(function(){Do(null,null,e,!1,function(){e._reactRootContainer=null,e[Kt]=null})}),!0):!1};dt.unstable_batchedUpdates=vu;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Lo(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return Do(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";function q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q0)}catch(e){console.error(e)}}q0(),Zd.exports=dt;var Mu=Zd.exports;const z2=$d(Mu),P2=Fd({__proto__:null,default:z2},[Mu]);var nd=Mu;Ea.createRoot=nd.createRoot,Ea.hydrateRoot=nd.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ge.apply(this,arguments)}var we;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(we||(we={}));const rd="popstate";function A2(e){e===void 0&&(e={});function t(r,i){let{pathname:l,search:o,hash:s}=r.location;return Ui("",{pathname:l,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Xn(i)}return I2(t,n,null,e)}function W(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Zn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function R2(){return Math.random().toString(36).substr(2,8)}function id(e,t){return{usr:e.state,key:e.key,idx:t}}function Ui(e,t,n,r){return n===void 0&&(n=null),ge({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Jt(t):t,{state:n,key:t&&t.key||r||R2()})}function Xn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Jt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function I2(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:l=!1}=r,o=i.history,s=we.Pop,a=null,c=d();c==null&&(c=0,o.replaceState(ge({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){s=we.Pop;let M=d(),p=M==null?null:M-c;c=M,a&&a({action:s,location:x.location,delta:p})}function m(M,p){s=we.Push;let f=Ui(x.location,M,p);n&&n(f,M),c=d()+1;let g=id(f,c),k=x.createHref(f);try{o.pushState(g,"",k)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(k)}l&&a&&a({action:s,location:x.location,delta:1})}function S(M,p){s=we.Replace;let f=Ui(x.location,M,p);n&&n(f,M),c=d();let g=id(f,c),k=x.createHref(f);o.replaceState(g,"",k),l&&a&&a({action:s,location:x.location,delta:0})}function w(M){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof M=="string"?M:Xn(M);return W(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let x={get action(){return s},get location(){return e(i,o)},listen(M){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(rd,h),a=M,()=>{i.removeEventListener(rd,h),a=null}},createHref(M){return t(i,M)},createURL:w,encodeLocation(M){let p=w(M);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:m,replace:S,go(M){return o.go(M)}};return x}var he;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(he||(he={}));const O2=new Set(["lazy","caseSensitive","path","id","index","children"]);function F2(e){return e.index===!0}function xs(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,l)=>{let o=[...n,l],s=typeof i.id=="string"?i.id:o.join("-");if(W(i.index!==!0||!i.children,"Cannot specify children on an index route"),W(!r[s],'Found a route id collision on id "'+s+`".  Route id's must be globally unique within Data Router usages`),F2(i)){let a=ge({},i,t(i),{id:s});return r[s]=a,a}else{let a=ge({},i,t(i),{id:s,children:void 0});return r[s]=a,i.children&&(a.children=xs(i.children,t,o,r)),a}})}function yr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Jt(t):t,i=Br(r.pathname||"/",n);if(i==null)return null;let l=ep(e);U2(l);let o=null;for(let s=0;o==null&&s<l.length;++s)o=G2(l[s],J2(i));return o}function $2(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function ep(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(l,o,s)=>{let a={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};a.relativePath.startsWith("/")&&(W(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Vt([r,a.relativePath]),d=n.concat(a);l.children&&l.children.length>0&&(W(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ep(l.children,t,d,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Y2(c,l.index),routesMeta:d})};return e.forEach((l,o)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))i(l,o);else for(let a of tp(l.path))i(l,o,a)}),t}function tp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return i?[l,""]:[l];let o=tp(r.join("/")),s=[];return s.push(...o.map(a=>a===""?l:[l,a].join("/"))),i&&s.push(...o),s.map(a=>e.startsWith("/")&&a===""?"/":a)}function U2(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K2(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const b2=/^:[\w-]+$/,B2=3,H2=2,W2=1,Q2=10,V2=-2,ld=e=>e==="*";function Y2(e,t){let n=e.split("/"),r=n.length;return n.some(ld)&&(r+=V2),t&&(r+=H2),n.filter(i=>!ld(i)).reduce((i,l)=>i+(b2.test(l)?B2:l===""?W2:Q2),r)}function K2(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function G2(e,t){let{routesMeta:n}=e,r={},i="/",l=[];for(let o=0;o<n.length;++o){let s=n[o],a=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=Z2({path:s.relativePath,caseSensitive:s.caseSensitive,end:a},c);if(!d)return null;Object.assign(r,d.params);let h=s.route;l.push({params:r,pathname:Vt([i,d.pathname]),pathnameBase:nm(Vt([i,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(i=Vt([i,d.pathnameBase]))}return l}function Z2(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X2(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:m,isOptional:S}=d;if(m==="*"){let x=s[h]||"";o=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const w=s[h];return S&&!w?c[m]=void 0:c[m]=q2(w||"",m),c},{}),pathname:l,pathnameBase:o,pattern:e}}function X2(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Zn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,a)=>(r.push({paramName:s,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function J2(e){try{return decodeURI(e)}catch(t){return Zn(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function q2(e,t){try{return decodeURIComponent(e)}catch(n){return Zn(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Br(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function em(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Jt(e):e;return{pathname:n?n.startsWith("/")?n:tm(n,t):t,search:rm(r),hash:im(i)}}function tm(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function va(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function np(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Eu(e,t){let n=np(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nu(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Jt(e):(i=ge({},e),W(!i.pathname||!i.pathname.includes("?"),va("?","pathname","search",i)),W(!i.pathname||!i.pathname.includes("#"),va("#","pathname","hash",i)),W(!i.search||!i.search.includes("#"),va("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,s;if(o==null)s=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),h-=1;i.pathname=m.join("/")}s=h>=0?t[h]:"/"}let a=em(i,s),c=o&&o!=="/"&&o.endsWith("/"),d=(l||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||d)&&(a.pathname+="/"),a}const Vt=e=>e.join("/").replace(/\/\/+/g,"/"),nm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),rm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,im=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Lu{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function rp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ip=["post","put","patch","delete"],lm=new Set(ip),om=["get",...ip],am=new Set(om),sm=new Set([301,302,303,307,308]),um=new Set([307,308]),ya={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},cm={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ti={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},lp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dm=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),op="remix-router-transitions";function fm(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;W(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;i=C=>({hasErrorBoundary:y(C)})}else i=dm;let l={},o=xs(e.routes,i,void 0,l),s,a=e.basename||"/",c=ge({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},e.future),d=null,h=new Set,m=null,S=null,w=null,x=e.hydrationData!=null,M=yr(o,e.history.location,a),p=null;if(M==null){let y=ht(404,{pathname:e.history.location.pathname}),{matches:C,route:E}=pd(o);M=C,p={[E.id]:y}}let f,g=M.some(y=>y.route.lazy),k=M.some(y=>y.route.loader);if(g)f=!1;else if(!k)f=!0;else if(c.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,C=e.hydrationData?e.hydrationData.errors:null;f=M.every(E=>E.route.loader&&E.route.loader.hydrate!==!0&&(y&&y[E.route.id]!==void 0||C&&C[E.route.id]!==void 0))}else f=e.hydrationData!=null;let L,v={historyAction:e.history.action,location:e.history.location,matches:M,initialized:f,navigation:ya,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},j=we.Pop,T=!1,A,F=!1,G=new Map,ve=null,pe=!1,Ke=!1,en=[],_t=[],te=new Map,z=0,I=-1,$=new Map,V=new Set,Z=new Map,rt=new Map,ye=new Set,Oe=new Map,xe=new Map,it=!1;function Tn(){if(d=e.history.listen(y=>{let{action:C,location:E,delta:_}=y;if(it){it=!1;return}Zn(xe.size===0||_!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let R=Qu({currentLocation:v.location,nextLocation:E,historyAction:C});if(R&&_!=null){it=!0,e.history.go(_*-1),qi(R,{state:"blocked",location:E,proceed(){qi(R,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),e.history.go(_)},reset(){let Q=new Map(v.blockers);Q.set(R,ti),Ee({blockers:Q})}});return}return _n(C,E)}),n){jm(t,G);let y=()=>km(t,G);t.addEventListener("pagehide",y),ve=()=>t.removeEventListener("pagehide",y)}return v.initialized||_n(we.Pop,v.location,{initialHydration:!0}),L}function $t(){d&&d(),ve&&ve(),h.clear(),A&&A.abort(),v.fetchers.forEach((y,C)=>Ji(C)),v.blockers.forEach((y,C)=>Wu(C))}function Wr(y){return h.add(y),()=>h.delete(y)}function Ee(y,C){C===void 0&&(C={}),v=ge({},v,y);let E=[],_=[];c.v7_fetcherPersist&&v.fetchers.forEach((R,Q)=>{R.state==="idle"&&(ye.has(Q)?_.push(Q):E.push(Q))}),[...h].forEach(R=>R(v,{deletedFetchers:_,unstable_viewTransitionOpts:C.viewTransitionOpts,unstable_flushSync:C.flushSync===!0})),c.v7_fetcherPersist&&(E.forEach(R=>v.fetchers.delete(R)),_.forEach(R=>Ji(R)))}function Ge(y,C,E){var _,R;let{flushSync:Q}=E===void 0?{}:E,b=v.actionData!=null&&v.navigation.formMethod!=null&&Mt(v.navigation.formMethod)&&v.navigation.state==="loading"&&((_=y.state)==null?void 0:_._isRedirect)!==!0,U;C.actionData?Object.keys(C.actionData).length>0?U=C.actionData:U=null:b?U=v.actionData:U=null;let O=C.loaderData?fd(v.loaderData,C.loaderData,C.matches||[],C.errors):v.loaderData,K=v.blockers;K.size>0&&(K=new Map(K),K.forEach((re,Pe)=>K.set(Pe,ti)));let Ne=T===!0||v.navigation.formMethod!=null&&Mt(v.navigation.formMethod)&&((R=y.state)==null?void 0:R._isRedirect)!==!0;s&&(o=s,s=void 0),pe||j===we.Pop||(j===we.Push?e.history.push(y,y.state):j===we.Replace&&e.history.replace(y,y.state));let B;if(j===we.Pop){let re=G.get(v.location.pathname);re&&re.has(y.pathname)?B={currentLocation:v.location,nextLocation:y}:G.has(y.pathname)&&(B={currentLocation:y,nextLocation:v.location})}else if(F){let re=G.get(v.location.pathname);re?re.add(y.pathname):(re=new Set([y.pathname]),G.set(v.location.pathname,re)),B={currentLocation:v.location,nextLocation:y}}Ee(ge({},C,{actionData:U,loaderData:O,historyAction:j,location:y,initialized:!0,navigation:ya,revalidation:"idle",restoreScrollPosition:Yu(y,C.matches||v.matches),preventScrollReset:Ne,blockers:K}),{viewTransitionOpts:B,flushSync:Q===!0}),j=we.Pop,T=!1,F=!1,pe=!1,Ke=!1,en=[],_t=[]}async function Fu(y,C){if(typeof y=="number"){e.history.go(y);return}let E=ws(v.location,v.matches,a,c.v7_prependBasename,y,c.v7_relativeSplatPath,C==null?void 0:C.fromRouteId,C==null?void 0:C.relative),{path:_,submission:R,error:Q}=od(c.v7_normalizeFormMethod,!1,E,C),b=v.location,U=Ui(v.location,_,C&&C.state);U=ge({},U,e.history.encodeLocation(U));let O=C&&C.replace!=null?C.replace:void 0,K=we.Push;O===!0?K=we.Replace:O===!1||R!=null&&Mt(R.formMethod)&&R.formAction===v.location.pathname+v.location.search&&(K=we.Replace);let Ne=C&&"preventScrollReset"in C?C.preventScrollReset===!0:void 0,B=(C&&C.unstable_flushSync)===!0,re=Qu({currentLocation:b,nextLocation:U,historyAction:K});if(re){qi(re,{state:"blocked",location:U,proceed(){qi(re,{state:"proceeding",proceed:void 0,reset:void 0,location:U}),Fu(y,C)},reset(){let Pe=new Map(v.blockers);Pe.set(re,ti),Ee({blockers:Pe})}});return}return await _n(K,U,{submission:R,pendingError:Q,preventScrollReset:Ne,replace:C&&C.replace,enableViewTransition:C&&C.unstable_viewTransition,flushSync:B})}function Gp(){if($o(),Ee({revalidation:"loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){_n(v.historyAction,v.location,{startUninterruptedRevalidation:!0});return}_n(j||v.historyAction,v.navigation.location,{overrideNavigation:v.navigation})}}async function _n(y,C,E){A&&A.abort(),A=null,j=y,pe=(E&&E.startUninterruptedRevalidation)===!0,ih(v.location,v.matches),T=(E&&E.preventScrollReset)===!0,F=(E&&E.enableViewTransition)===!0;let _=s||o,R=E&&E.overrideNavigation,Q=yr(_,C,a),b=(E&&E.flushSync)===!0;if(!Q){let Pe=ht(404,{pathname:C.pathname}),{matches:pt,route:Le}=pd(_);Uo(),Ge(C,{matches:pt,loaderData:{},errors:{[Le.id]:Pe}},{flushSync:b});return}if(v.initialized&&!Ke&&vm(v.location,C)&&!(E&&E.submission&&Mt(E.submission.formMethod))){Ge(C,{matches:Q},{flushSync:b});return}A=new AbortController;let U=ri(e.history,C,A.signal,E&&E.submission),O,K;if(E&&E.pendingError)K={[wi(Q).route.id]:E.pendingError};else if(E&&E.submission&&Mt(E.submission.formMethod)){let Pe=await Zp(U,C,E.submission,Q,{replace:E.replace,flushSync:b});if(Pe.shortCircuited)return;O=Pe.pendingActionData,K=Pe.pendingActionError,R=xa(C,E.submission),b=!1,U=new Request(U.url,{signal:U.signal})}let{shortCircuited:Ne,loaderData:B,errors:re}=await Xp(U,C,Q,R,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,b,O,K);Ne||(A=null,Ge(C,ge({matches:Q},O?{actionData:O}:{},{loaderData:B,errors:re})))}async function Zp(y,C,E,_,R){R===void 0&&(R={}),$o();let Q=Sm(C,E);Ee({navigation:Q},{flushSync:R.flushSync===!0});let b,U=Cs(_,C);if(!U.route.action&&!U.route.lazy)b={type:he.error,error:ht(405,{method:y.method,pathname:C.pathname,routeId:U.route.id})};else if(b=await ni("action",y,U,_,l,i,a,c.v7_relativeSplatPath),y.signal.aborted)return{shortCircuited:!0};if($n(b)){let O;return R&&R.replace!=null?O=R.replace:O=b.location===v.location.pathname+v.location.search,await Qr(v,b,{submission:E,replace:O}),{shortCircuited:!0}}if(xr(b)){let O=wi(_,U.route.id);return(R&&R.replace)!==!0&&(j=we.Push),{pendingActionData:{},pendingActionError:{[O.route.id]:b.error}}}if(Fn(b))throw ht(400,{type:"defer-action"});return{pendingActionData:{[U.route.id]:b.data}}}async function Xp(y,C,E,_,R,Q,b,U,O,K,Ne){let B=_||xa(C,R),re=R||Q||gd(B),Pe=s||o,[pt,Le]=ad(e.history,v,E,re,C,c.v7_partialHydration&&U===!0,Ke,en,_t,ye,Z,V,Pe,a,K,Ne);if(Uo(ne=>!(E&&E.some(se=>se.route.id===ne))||pt&&pt.some(se=>se.route.id===ne)),I=++z,pt.length===0&&Le.length===0){let ne=Bu();return Ge(C,ge({matches:E,loaderData:{},errors:Ne||null},K?{actionData:K}:{},ne?{fetchers:new Map(v.fetchers)}:{}),{flushSync:O}),{shortCircuited:!0}}if(!pe&&(!c.v7_partialHydration||!U)){Le.forEach(se=>{let zt=v.fetchers.get(se.key),tl=ii(void 0,zt?zt.data:void 0);v.fetchers.set(se.key,tl)});let ne=K||v.actionData;Ee(ge({navigation:B},ne?Object.keys(ne).length===0?{actionData:null}:{actionData:ne}:{},Le.length>0?{fetchers:new Map(v.fetchers)}:{}),{flushSync:O})}Le.forEach(ne=>{te.has(ne.key)&&nn(ne.key),ne.controller&&te.set(ne.key,ne.controller)});let tr=()=>Le.forEach(ne=>nn(ne.key));A&&A.signal.addEventListener("abort",tr);let{results:bo,loaderResults:nr,fetcherResults:rn}=await $u(v.matches,E,pt,Le,y);if(y.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",tr),Le.forEach(ne=>te.delete(ne.key));let zn=hd(bo);if(zn){if(zn.idx>=pt.length){let ne=Le[zn.idx-pt.length].key;V.add(ne)}return await Qr(v,zn.result,{replace:b}),{shortCircuited:!0}}let{loaderData:Bo,errors:Ho}=dd(v,E,pt,nr,Ne,Le,rn,Oe);Oe.forEach((ne,se)=>{ne.subscribe(zt=>{(zt||ne.done)&&Oe.delete(se)})});let Wo=Bu(),rr=Hu(I),el=Wo||rr||Le.length>0;return ge({loaderData:Bo,errors:Ho},el?{fetchers:new Map(v.fetchers)}:{})}function Jp(y,C,E,_){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");te.has(y)&&nn(y);let R=(_&&_.unstable_flushSync)===!0,Q=s||o,b=ws(v.location,v.matches,a,c.v7_prependBasename,E,c.v7_relativeSplatPath,C,_==null?void 0:_.relative),U=yr(Q,b,a);if(!U){Vr(y,C,ht(404,{pathname:b}),{flushSync:R});return}let{path:O,submission:K,error:Ne}=od(c.v7_normalizeFormMethod,!0,b,_);if(Ne){Vr(y,C,Ne,{flushSync:R});return}let B=Cs(U,O);if(T=(_&&_.preventScrollReset)===!0,K&&Mt(K.formMethod)){qp(y,C,O,B,U,R,K);return}Z.set(y,{routeId:C,path:O}),eh(y,C,O,B,U,R,K)}async function qp(y,C,E,_,R,Q,b){if($o(),Z.delete(y),!_.route.action&&!_.route.lazy){let se=ht(405,{method:b.formMethod,pathname:E,routeId:C});Vr(y,C,se,{flushSync:Q});return}let U=v.fetchers.get(y);tn(y,Cm(b,U),{flushSync:Q});let O=new AbortController,K=ri(e.history,E,O.signal,b);te.set(y,O);let Ne=z,B=await ni("action",K,_,R,l,i,a,c.v7_relativeSplatPath);if(K.signal.aborted){te.get(y)===O&&te.delete(y);return}if(c.v7_fetcherPersist&&ye.has(y)){if($n(B)||xr(B)){tn(y,on(void 0));return}}else{if($n(B))if(te.delete(y),I>Ne){tn(y,on(void 0));return}else return V.add(y),tn(y,ii(b)),Qr(v,B,{fetcherSubmission:b});if(xr(B)){Vr(y,C,B.error);return}}if(Fn(B))throw ht(400,{type:"defer-action"});let re=v.navigation.location||v.location,Pe=ri(e.history,re,O.signal),pt=s||o,Le=v.navigation.state!=="idle"?yr(pt,v.navigation.location,a):v.matches;W(Le,"Didn't find any matches after fetcher action");let tr=++z;$.set(y,tr);let bo=ii(b,B.data);v.fetchers.set(y,bo);let[nr,rn]=ad(e.history,v,Le,b,re,!1,Ke,en,_t,ye,Z,V,pt,a,{[_.route.id]:B.data},void 0);rn.filter(se=>se.key!==y).forEach(se=>{let zt=se.key,tl=v.fetchers.get(zt),oh=ii(void 0,tl?tl.data:void 0);v.fetchers.set(zt,oh),te.has(zt)&&nn(zt),se.controller&&te.set(zt,se.controller)}),Ee({fetchers:new Map(v.fetchers)});let zn=()=>rn.forEach(se=>nn(se.key));O.signal.addEventListener("abort",zn);let{results:Bo,loaderResults:Ho,fetcherResults:Wo}=await $u(v.matches,Le,nr,rn,Pe);if(O.signal.aborted)return;O.signal.removeEventListener("abort",zn),$.delete(y),te.delete(y),rn.forEach(se=>te.delete(se.key));let rr=hd(Bo);if(rr){if(rr.idx>=nr.length){let se=rn[rr.idx-nr.length].key;V.add(se)}return Qr(v,rr.result)}let{loaderData:el,errors:ne}=dd(v,v.matches,nr,Ho,void 0,rn,Wo,Oe);if(v.fetchers.has(y)){let se=on(B.data);v.fetchers.set(y,se)}Hu(tr),v.navigation.state==="loading"&&tr>I?(W(j,"Expected pending action"),A&&A.abort(),Ge(v.navigation.location,{matches:Le,loaderData:el,errors:ne,fetchers:new Map(v.fetchers)})):(Ee({errors:ne,loaderData:fd(v.loaderData,el,Le,ne),fetchers:new Map(v.fetchers)}),Ke=!1)}async function eh(y,C,E,_,R,Q,b){let U=v.fetchers.get(y);tn(y,ii(b,U?U.data:void 0),{flushSync:Q});let O=new AbortController,K=ri(e.history,E,O.signal);te.set(y,O);let Ne=z,B=await ni("loader",K,_,R,l,i,a,c.v7_relativeSplatPath);if(Fn(B)&&(B=await up(B,K.signal,!0)||B),te.get(y)===O&&te.delete(y),!K.signal.aborted){if(ye.has(y)){tn(y,on(void 0));return}if($n(B))if(I>Ne){tn(y,on(void 0));return}else{V.add(y),await Qr(v,B);return}if(xr(B)){Vr(y,C,B.error);return}W(!Fn(B),"Unhandled fetcher deferred data"),tn(y,on(B.data))}}async function Qr(y,C,E){let{submission:_,fetcherSubmission:R,replace:Q}=E===void 0?{}:E;C.revalidate&&(Ke=!0);let b=Ui(y.location,C.location,{_isRedirect:!0});if(W(b,"Expected a location on the redirect navigation"),n){let re=!1;if(C.reloadDocument)re=!0;else if(lp.test(C.location)){const Pe=e.history.createURL(C.location);re=Pe.origin!==t.location.origin||Br(Pe.pathname,a)==null}if(re){Q?t.location.replace(C.location):t.location.assign(C.location);return}}A=null;let U=Q===!0?we.Replace:we.Push,{formMethod:O,formAction:K,formEncType:Ne}=y.navigation;!_&&!R&&O&&K&&Ne&&(_=gd(y.navigation));let B=_||R;if(um.has(C.status)&&B&&Mt(B.formMethod))await _n(U,b,{submission:ge({},B,{formAction:C.location}),preventScrollReset:T});else{let re=xa(b,_);await _n(U,b,{overrideNavigation:re,fetcherSubmission:R,preventScrollReset:T})}}async function $u(y,C,E,_,R){let Q=await Promise.all([...E.map(O=>ni("loader",R,O,C,l,i,a,c.v7_relativeSplatPath)),..._.map(O=>O.matches&&O.match&&O.controller?ni("loader",ri(e.history,O.path,O.controller.signal),O.match,O.matches,l,i,a,c.v7_relativeSplatPath):{type:he.error,error:ht(404,{pathname:O.path})})]),b=Q.slice(0,E.length),U=Q.slice(E.length);return await Promise.all([md(y,E,b,b.map(()=>R.signal),!1,v.loaderData),md(y,_.map(O=>O.match),U,_.map(O=>O.controller?O.controller.signal:null),!0)]),{results:Q,loaderResults:b,fetcherResults:U}}function $o(){Ke=!0,en.push(...Uo()),Z.forEach((y,C)=>{te.has(C)&&(_t.push(C),nn(C))})}function tn(y,C,E){E===void 0&&(E={}),v.fetchers.set(y,C),Ee({fetchers:new Map(v.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function Vr(y,C,E,_){_===void 0&&(_={});let R=wi(v.matches,C);Ji(y),Ee({errors:{[R.route.id]:E},fetchers:new Map(v.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function Uu(y){return c.v7_fetcherPersist&&(rt.set(y,(rt.get(y)||0)+1),ye.has(y)&&ye.delete(y)),v.fetchers.get(y)||cm}function Ji(y){let C=v.fetchers.get(y);te.has(y)&&!(C&&C.state==="loading"&&$.has(y))&&nn(y),Z.delete(y),$.delete(y),V.delete(y),ye.delete(y),v.fetchers.delete(y)}function th(y){if(c.v7_fetcherPersist){let C=(rt.get(y)||0)-1;C<=0?(rt.delete(y),ye.add(y)):rt.set(y,C)}else Ji(y);Ee({fetchers:new Map(v.fetchers)})}function nn(y){let C=te.get(y);W(C,"Expected fetch controller: "+y),C.abort(),te.delete(y)}function bu(y){for(let C of y){let E=Uu(C),_=on(E.data);v.fetchers.set(C,_)}}function Bu(){let y=[],C=!1;for(let E of V){let _=v.fetchers.get(E);W(_,"Expected fetcher: "+E),_.state==="loading"&&(V.delete(E),y.push(E),C=!0)}return bu(y),C}function Hu(y){let C=[];for(let[E,_]of $)if(_<y){let R=v.fetchers.get(E);W(R,"Expected fetcher: "+E),R.state==="loading"&&(nn(E),$.delete(E),C.push(E))}return bu(C),C.length>0}function nh(y,C){let E=v.blockers.get(y)||ti;return xe.get(y)!==C&&xe.set(y,C),E}function Wu(y){v.blockers.delete(y),xe.delete(y)}function qi(y,C){let E=v.blockers.get(y)||ti;W(E.state==="unblocked"&&C.state==="blocked"||E.state==="blocked"&&C.state==="blocked"||E.state==="blocked"&&C.state==="proceeding"||E.state==="blocked"&&C.state==="unblocked"||E.state==="proceeding"&&C.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+C.state);let _=new Map(v.blockers);_.set(y,C),Ee({blockers:_})}function Qu(y){let{currentLocation:C,nextLocation:E,historyAction:_}=y;if(xe.size===0)return;xe.size>1&&Zn(!1,"A router only supports one blocker at a time");let R=Array.from(xe.entries()),[Q,b]=R[R.length-1],U=v.blockers.get(Q);if(!(U&&U.state==="proceeding")&&b({currentLocation:C,nextLocation:E,historyAction:_}))return Q}function Uo(y){let C=[];return Oe.forEach((E,_)=>{(!y||y(_))&&(E.cancel(),C.push(_),Oe.delete(_))}),C}function rh(y,C,E){if(m=y,w=C,S=E||null,!x&&v.navigation===ya){x=!0;let _=Yu(v.location,v.matches);_!=null&&Ee({restoreScrollPosition:_})}return()=>{m=null,w=null,S=null}}function Vu(y,C){return S&&S(y,C.map(_=>$2(_,v.loaderData)))||y.key}function ih(y,C){if(m&&w){let E=Vu(y,C);m[E]=w()}}function Yu(y,C){if(m){let E=Vu(y,C),_=m[E];if(typeof _=="number")return _}return null}function lh(y){l={},s=xs(y,i,void 0,l)}return L={get basename(){return a},get future(){return c},get state(){return v},get routes(){return o},get window(){return t},initialize:Tn,subscribe:Wr,enableScrollRestoration:rh,navigate:Fu,fetch:Jp,revalidate:Gp,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Uu,deleteFetcher:th,dispose:$t,getBlocker:nh,deleteBlocker:Wu,_internalFetchControllers:te,_internalActiveDeferreds:Oe,_internalSetRoutes:lh},L}function pm(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ws(e,t,n,r,i,l,o,s){let a,c;if(o){a=[];for(let h of t)if(a.push(h),h.route.id===o){c=h;break}}else a=t,c=t[t.length-1];let d=Nu(i||".",Eu(a,l),Br(e.pathname,n)||e.pathname,s==="path");return i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&c&&c.route.index&&!Du(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:Vt([n,d.pathname])),Xn(d)}function od(e,t,n,r){if(!r||!pm(r))return{path:n};if(r.formMethod&&!wm(r.formMethod))return{path:n,error:ht(405,{method:r.formMethod})};let i=()=>({path:n,error:ht(400,{type:"invalid-body"})}),l=r.formMethod||"get",o=e?l.toUpperCase():l.toLowerCase(),s=sp(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Mt(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((S,w)=>{let[x,M]=w;return""+S+x+"="+M+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!Mt(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}W(typeof FormData=="function","FormData is not available in this environment");let a,c;if(r.formData)a=Ss(r.formData),c=r.formData;else if(r.body instanceof FormData)a=Ss(r.body),c=r.body;else if(r.body instanceof URLSearchParams)a=r.body,c=cd(a);else if(r.body==null)a=new URLSearchParams,c=new FormData;else try{a=new URLSearchParams(r.body),c=cd(a)}catch{return i()}let d={formMethod:o,formAction:s,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Mt(d.formMethod))return{path:n,submission:d};let h=Jt(n);return t&&h.search&&Du(h.search)&&a.append("index",""),h.search="?"+a,{path:Xn(h),submission:d}}function hm(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function ad(e,t,n,r,i,l,o,s,a,c,d,h,m,S,w,x){let M=x?Object.values(x)[0]:w?Object.values(w)[0]:void 0,p=e.createURL(t.location),f=e.createURL(i),g=x?Object.keys(x)[0]:void 0,L=hm(n,g).filter((j,T)=>{let{route:A}=j;if(A.lazy)return!0;if(A.loader==null)return!1;if(l)return A.loader.hydrate?!0:t.loaderData[A.id]===void 0&&(!t.errors||t.errors[A.id]===void 0);if(mm(t.loaderData,t.matches[T],j)||s.some(ve=>ve===j.route.id))return!0;let F=t.matches[T],G=j;return sd(j,ge({currentUrl:p,currentParams:F.params,nextUrl:f,nextParams:G.params},r,{actionResult:M,defaultShouldRevalidate:o||p.pathname+p.search===f.pathname+f.search||p.search!==f.search||ap(F,G)}))}),v=[];return d.forEach((j,T)=>{if(l||!n.some(pe=>pe.route.id===j.routeId)||c.has(T))return;let A=yr(m,j.path,S);if(!A){v.push({key:T,routeId:j.routeId,path:j.path,matches:null,match:null,controller:null});return}let F=t.fetchers.get(T),G=Cs(A,j.path),ve=!1;h.has(T)?ve=!1:a.includes(T)?ve=!0:F&&F.state!=="idle"&&F.data===void 0?ve=o:ve=sd(G,ge({currentUrl:p,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:M,defaultShouldRevalidate:o})),ve&&v.push({key:T,routeId:j.routeId,path:j.path,matches:A,match:G,controller:new AbortController})}),[L,v]}function mm(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function ap(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function sd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function ud(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];W(i,"No route found in manifest");let l={};for(let o in r){let a=i[o]!==void 0&&o!=="hasErrorBoundary";Zn(!a,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!a&&!O2.has(o)&&(l[o]=r[o])}Object.assign(i,l),Object.assign(i,ge({},t(i),{lazy:void 0}))}async function ni(e,t,n,r,i,l,o,s,a){a===void 0&&(a={});let c,d,h,m=x=>{let M,p=new Promise((f,g)=>M=g);return h=()=>M(),t.signal.addEventListener("abort",h),Promise.race([x({request:t,params:n.params,context:a.requestContext}),p])};try{let x=n.route[e];if(n.route.lazy)if(x){let M,p=await Promise.all([m(x).catch(f=>{M=f}),ud(n.route,l,i)]);if(M)throw M;d=p[0]}else if(await ud(n.route,l,i),x=n.route[e],x)d=await m(x);else if(e==="action"){let M=new URL(t.url),p=M.pathname+M.search;throw ht(405,{method:t.method,pathname:p,routeId:n.route.id})}else return{type:he.data,data:void 0};else if(x)d=await m(x);else{let M=new URL(t.url),p=M.pathname+M.search;throw ht(404,{pathname:p})}W(d!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(x){c=he.error,d=x}finally{h&&t.signal.removeEventListener("abort",h)}if(xm(d)){let x=d.status;if(sm.has(x)){let p=d.headers.get("Location");if(W(p,"Redirects returned/thrown from loaders/actions must have a Location header"),!lp.test(p))p=ws(new URL(t.url),r.slice(0,r.indexOf(n)+1),o,!0,p,s);else if(!a.isStaticRequest){let f=new URL(t.url),g=p.startsWith("//")?new URL(f.protocol+p):new URL(p),k=Br(g.pathname,o)!=null;g.origin===f.origin&&k&&(p=g.pathname+g.search+g.hash)}if(a.isStaticRequest)throw d.headers.set("Location",p),d;return{type:he.redirect,status:x,location:p,revalidate:d.headers.get("X-Remix-Revalidate")!==null,reloadDocument:d.headers.get("X-Remix-Reload-Document")!==null}}if(a.isRouteRequest)throw{type:c===he.error?he.error:he.data,response:d};let M;try{let p=d.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?d.body==null?M=null:M=await d.json():M=await d.text()}catch(p){return{type:he.error,error:p}}return c===he.error?{type:c,error:new Lu(x,d.statusText,M),headers:d.headers}:{type:he.data,data:M,statusCode:d.status,headers:d.headers}}if(c===he.error)return{type:c,error:d};if(ym(d)){var S,w;return{type:he.deferred,deferredData:d,statusCode:(S=d.init)==null?void 0:S.status,headers:((w=d.init)==null?void 0:w.headers)&&new Headers(d.init.headers)}}return{type:he.data,data:d}}function ri(e,t,n,r){let i=e.createURL(sp(t)).toString(),l={signal:n};if(r&&Mt(r.formMethod)){let{formMethod:o,formEncType:s}=r;l.method=o.toUpperCase(),s==="application/json"?(l.headers=new Headers({"Content-Type":s}),l.body=JSON.stringify(r.json)):s==="text/plain"?l.body=r.text:s==="application/x-www-form-urlencoded"&&r.formData?l.body=Ss(r.formData):l.body=r.formData}return new Request(i,l)}function Ss(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function cd(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function gm(e,t,n,r,i){let l={},o=null,s,a=!1,c={};return n.forEach((d,h)=>{let m=t[h].route.id;if(W(!$n(d),"Cannot handle redirect results in processLoaderData"),xr(d)){let S=wi(e,m),w=d.error;r&&(w=Object.values(r)[0],r=void 0),o=o||{},o[S.route.id]==null&&(o[S.route.id]=w),l[m]=void 0,a||(a=!0,s=rp(d.error)?d.error.status:500),d.headers&&(c[m]=d.headers)}else Fn(d)?(i.set(m,d.deferredData),l[m]=d.deferredData.data):l[m]=d.data,d.statusCode!=null&&d.statusCode!==200&&!a&&(s=d.statusCode),d.headers&&(c[m]=d.headers)}),r&&(o=r,l[Object.keys(r)[0]]=void 0),{loaderData:l,errors:o,statusCode:s||200,loaderHeaders:c}}function dd(e,t,n,r,i,l,o,s){let{loaderData:a,errors:c}=gm(t,n,r,i,s);for(let d=0;d<l.length;d++){let{key:h,match:m,controller:S}=l[d];W(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let w=o[d];if(!(S&&S.signal.aborted))if(xr(w)){let x=wi(e.matches,m==null?void 0:m.route.id);c&&c[x.route.id]||(c=ge({},c,{[x.route.id]:w.error})),e.fetchers.delete(h)}else if($n(w))W(!1,"Unhandled fetcher revalidation redirect");else if(Fn(w))W(!1,"Unhandled fetcher deferred data");else{let x=on(w.data);e.fetchers.set(h,x)}}return{loaderData:a,errors:c}}function fd(e,t,n,r){let i=ge({},t);for(let l of n){let o=l.route.id;if(t.hasOwnProperty(o)?t[o]!==void 0&&(i[o]=t[o]):e[o]!==void 0&&l.route.loader&&(i[o]=e[o]),r&&r.hasOwnProperty(o))break}return i}function wi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function pd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function ht(e,t){let{pathname:n,routeId:r,method:i,type:l}=t===void 0?{}:t,o="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(o="Bad Request",i&&n&&r?s="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":l==="defer-action"?s="defer() is not supported in actions":l==="invalid-body"&&(s="Unable to encode submission body")):e===403?(o="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(o="Not Found",s='No route matches URL "'+n+'"'):e===405&&(o="Method Not Allowed",i&&n&&r?s="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Lu(e||500,o,new Error(s),!0)}function hd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if($n(n))return{result:n,idx:t}}}function sp(e){let t=typeof e=="string"?Jt(e):e;return Xn(ge({},t,{hash:""}))}function vm(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Fn(e){return e.type===he.deferred}function xr(e){return e.type===he.error}function $n(e){return(e&&e.type)===he.redirect}function ym(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function xm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function wm(e){return am.has(e.toLowerCase())}function Mt(e){return lm.has(e.toLowerCase())}async function md(e,t,n,r,i,l){for(let o=0;o<n.length;o++){let s=n[o],a=t[o];if(!a)continue;let c=e.find(h=>h.route.id===a.route.id),d=c!=null&&!ap(c,a)&&(l&&l[a.route.id])!==void 0;if(Fn(s)&&(i||d)){let h=r[o];W(h,"Expected an AbortSignal for revalidating fetcher deferred result"),await up(s,h,i).then(m=>{m&&(n[o]=m||n[o])})}}}async function up(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:he.data,data:e.deferredData.unwrappedData}}catch(i){return{type:he.error,error:i}}return{type:he.data,data:e.deferredData.data}}}function Du(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Cs(e,t){let n=typeof t=="string"?Jt(t).search:t.search;if(e[e.length-1].route.index&&Du(n||""))return e[e.length-1];let r=np(e);return r[r.length-1]}function gd(e){let{formMethod:t,formAction:n,formEncType:r,text:i,formData:l,json:o}=e;if(!(!t||!n||!r)){if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(l!=null)return{formMethod:t,formAction:n,formEncType:r,formData:l,json:void 0,text:void 0};if(o!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function xa(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Sm(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ii(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Cm(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function on(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function jm(e,t){try{let n=e.sessionStorage.getItem(op);if(n){let r=JSON.parse(n);for(let[i,l]of Object.entries(r||{}))l&&Array.isArray(l)&&t.set(i,new Set(l||[]))}}catch{}}function km(e,t){if(t.size>0){let n={};for(let[r,i]of t)n[r]=[...i];try{e.sessionStorage.setItem(op,JSON.stringify(n))}catch(r){Zn(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}const To=N.createContext(null),cp=N.createContext(null),er=N.createContext(null),_o=N.createContext(null),qt=N.createContext({outlet:null,matches:[],isDataRoute:!1}),dp=N.createContext(null);function Mm(e,t){let{relative:n}=t===void 0?{}:t;Gi()||W(!1);let{basename:r,navigator:i}=N.useContext(er),{hash:l,pathname:o,search:s}=hp(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Vt([r,o])),i.createHref({pathname:a,search:s,hash:l})}function Gi(){return N.useContext(_o)!=null}function zo(){return Gi()||W(!1),N.useContext(_o).location}function fp(e){N.useContext(er).static||N.useLayoutEffect(e)}function Tu(){let{isDataRoute:e}=N.useContext(qt);return e?$m():Em()}function Em(){Gi()||W(!1);let e=N.useContext(To),{basename:t,future:n,navigator:r}=N.useContext(er),{matches:i}=N.useContext(qt),{pathname:l}=zo(),o=JSON.stringify(Eu(i,n.v7_relativeSplatPath)),s=N.useRef(!1);return fp(()=>{s.current=!0}),N.useCallback(function(c,d){if(d===void 0&&(d={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let h=Nu(c,JSON.parse(o),l,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Vt([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,o,l,e])}const Nm=N.createContext(null);function Lm(e){let t=N.useContext(qt).outlet;return t&&N.createElement(Nm.Provider,{value:e},t)}function pp(){let{matches:e}=N.useContext(qt),t=e[e.length-1];return t?t.params:{}}function hp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=N.useContext(er),{matches:i}=N.useContext(qt),{pathname:l}=zo(),o=JSON.stringify(Eu(i,r.v7_relativeSplatPath));return N.useMemo(()=>Nu(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function Dm(e,t,n,r){Gi()||W(!1);let{navigator:i}=N.useContext(er),{matches:l}=N.useContext(qt),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let c=zo(),d;if(t){var h;let M=typeof t=="string"?Jt(t):t;a==="/"||(h=M.pathname)!=null&&h.startsWith(a)||W(!1),d=M}else d=c;let m=d.pathname||"/",S=a==="/"?m:m.slice(a.length)||"/",w=yr(e,{pathname:S}),x=Am(w&&w.map(M=>Object.assign({},M,{params:Object.assign({},s,M.params),pathname:Vt([a,i.encodeLocation?i.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?a:Vt([a,i.encodeLocation?i.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),l,n,r);return t&&x?N.createElement(_o.Provider,{value:{location:bi({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:we.Pop}},x):x}function Tm(){let e=Fm(),t=rp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},t),n?N.createElement("pre",{style:i},n):null,null)}const _m=N.createElement(Tm,null);class zm extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?N.createElement(qt.Provider,{value:this.props.routeContext},N.createElement(dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Pm(e){let{routeContext:t,match:n,children:r}=e,i=N.useContext(To);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(qt.Provider,{value:t},r)}function Am(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let o=e,s=(i=n)==null?void 0:i.errors;if(s!=null){let d=o.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id]));d>=0||W(!1),o=o.slice(0,Math.min(o.length,d+1))}let a=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:m,errors:S}=n,w=h.route.loader&&m[h.route.id]===void 0&&(!S||S[h.route.id]===void 0);if(h.route.lazy||w){a=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,m)=>{let S,w=!1,x=null,M=null;n&&(S=s&&h.route.id?s[h.route.id]:void 0,x=h.route.errorElement||_m,a&&(c<0&&m===0?(Um("route-fallback",!1),w=!0,M=null):c===m&&(w=!0,M=h.route.hydrateFallbackElement||null)));let p=t.concat(o.slice(0,m+1)),f=()=>{let g;return S?g=x:w?g=M:h.route.Component?g=N.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=d,N.createElement(Pm,{match:h,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||m===0)?N.createElement(zm,{location:n.location,revalidation:n.revalidation,component:x,error:S,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var mp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(mp||{}),so=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(so||{});function Rm(e){let t=N.useContext(To);return t||W(!1),t}function Im(e){let t=N.useContext(cp);return t||W(!1),t}function Om(e){let t=N.useContext(qt);return t||W(!1),t}function gp(e){let t=Om(),n=t.matches[t.matches.length-1];return n.route.id||W(!1),n.route.id}function Fm(){var e;let t=N.useContext(dp),n=Im(so.UseRouteError),r=gp(so.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $m(){let{router:e}=Rm(mp.UseNavigateStable),t=gp(so.UseNavigateStable),n=N.useRef(!1);return fp(()=>{n.current=!0}),N.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,bi({fromRouteId:t},l)))},[e,t])}const vd={};function Um(e,t,n){!t&&!vd[e]&&(vd[e]=!0)}function bm(e){return Lm(e.context)}function an(e){W(!1)}function Bm(e){let{basename:t="/",children:n=null,location:r,navigationType:i=we.Pop,navigator:l,static:o=!1,future:s}=e;Gi()&&W(!1);let a=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:a,navigator:l,static:o,future:bi({v7_relativeSplatPath:!1},s)}),[a,s,l,o]);typeof r=="string"&&(r=Jt(r));let{pathname:d="/",search:h="",hash:m="",state:S=null,key:w="default"}=r,x=N.useMemo(()=>{let M=Br(d,a);return M==null?null:{location:{pathname:M,search:h,hash:m,state:S,key:w},navigationType:i}},[a,d,h,m,S,w,i]);return x==null?null:N.createElement(er.Provider,{value:c},N.createElement(_o.Provider,{children:n,value:x}))}new Promise(()=>{});function js(e,t){t===void 0&&(t=[]);let n=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let l=[...t,i];if(r.type===N.Fragment){n.push.apply(n,js(r.props.children,l));return}r.type!==an&&W(!1),!r.props.index||!r.props.children||W(!1);let o={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=js(r.props.children,l)),n.push(o)}),n}function Hm(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:N.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:N.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:N.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bi(){return Bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Bi.apply(this,arguments)}function Wm(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,l;for(l=0;l<r.length;l++)i=r[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vm(e,t){return e.button===0&&(!t||t==="_self")&&!Qm(e)}const Ym=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];function Km(e,t){return fm({basename:t==null?void 0:t.basename,future:Bi({},t==null?void 0:t.future,{v7_prependBasename:!0}),history:A2({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||Gm(),routes:e,mapRouteProperties:Hm,window:t==null?void 0:t.window}).initialize()}function Gm(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Bi({},t,{errors:Zm(t.errors)})),t}function Zm(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new Lu(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let l=window[i.__subType];if(typeof l=="function")try{let o=new l(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let l=new Error(i.message);l.stack="",n[r]=l}}else n[r]=i;return n}const Xm=N.createContext({isTransitioning:!1}),Jm=N.createContext(new Map),qm="startTransition",yd=Ch[qm],eg="flushSync",xd=P2[eg];function tg(e){yd?yd(e):e()}function li(e){xd?xd(e):e()}class ng{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function rg(e){let{fallbackElement:t,router:n,future:r}=e,[i,l]=N.useState(n.state),[o,s]=N.useState(),[a,c]=N.useState({isTransitioning:!1}),[d,h]=N.useState(),[m,S]=N.useState(),[w,x]=N.useState(),M=N.useRef(new Map),{v7_startTransition:p}=r||{},f=N.useCallback(j=>{p?tg(j):j()},[p]),g=N.useCallback((j,T)=>{let{deletedFetchers:A,unstable_flushSync:F,unstable_viewTransitionOpts:G}=T;A.forEach(pe=>M.current.delete(pe)),j.fetchers.forEach((pe,Ke)=>{pe.data!==void 0&&M.current.set(Ke,pe.data)});let ve=n.window==null||typeof n.window.document.startViewTransition!="function";if(!G||ve){F?li(()=>l(j)):f(()=>l(j));return}if(F){li(()=>{m&&(d&&d.resolve(),m.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:G.currentLocation,nextLocation:G.nextLocation})});let pe=n.window.document.startViewTransition(()=>{li(()=>l(j))});pe.finished.finally(()=>{li(()=>{h(void 0),S(void 0),s(void 0),c({isTransitioning:!1})})}),li(()=>S(pe));return}m?(d&&d.resolve(),m.skipTransition(),x({state:j,currentLocation:G.currentLocation,nextLocation:G.nextLocation})):(s(j),c({isTransitioning:!0,flushSync:!1,currentLocation:G.currentLocation,nextLocation:G.nextLocation}))},[n.window,m,d,M,f]);N.useLayoutEffect(()=>n.subscribe(g),[n,g]),N.useEffect(()=>{a.isTransitioning&&!a.flushSync&&h(new ng)},[a]),N.useEffect(()=>{if(d&&o&&n.window){let j=o,T=d.promise,A=n.window.document.startViewTransition(async()=>{f(()=>l(j)),await T});A.finished.finally(()=>{h(void 0),S(void 0),s(void 0),c({isTransitioning:!1})}),S(A)}},[f,o,d,n.window]),N.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),N.useEffect(()=>{!a.isTransitioning&&w&&(s(w.state),c({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),x(void 0))},[a.isTransitioning,w]),N.useEffect(()=>{},[]);let k=N.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:j=>n.navigate(j),push:(j,T,A)=>n.navigate(j,{state:T,preventScrollReset:A==null?void 0:A.preventScrollReset}),replace:(j,T,A)=>n.navigate(j,{replace:!0,state:T,preventScrollReset:A==null?void 0:A.preventScrollReset})}),[n]),L=n.basename||"/",v=N.useMemo(()=>({router:n,navigator:k,static:!1,basename:L}),[n,k,L]);return N.createElement(N.Fragment,null,N.createElement(To.Provider,{value:v},N.createElement(cp.Provider,{value:i},N.createElement(Jm.Provider,{value:M.current},N.createElement(Xm.Provider,{value:a},N.createElement(Bm,{basename:L,location:i.location,navigationType:i.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?N.createElement(ig,{routes:n.routes,future:n.future,state:i}):t))))),null)}function ig(e){let{routes:t,future:n,state:r}=e;return Dm(t,void 0,r,n)}const lg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",og=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Si=N.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:l,replace:o,state:s,target:a,to:c,preventScrollReset:d,unstable_viewTransition:h}=t,m=Wm(t,Ym),{basename:S}=N.useContext(er),w,x=!1;if(typeof c=="string"&&og.test(c)&&(w=c,lg))try{let g=new URL(window.location.href),k=c.startsWith("//")?new URL(g.protocol+c):new URL(c),L=Br(k.pathname,S);k.origin===g.origin&&L!=null?c=L+k.search+k.hash:x=!0}catch{}let M=Mm(c,{relative:i}),p=ag(c,{replace:o,state:s,target:a,preventScrollReset:d,relative:i,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||p(g)}return N.createElement("a",Bi({},m,{href:w||M,onClick:x||l?r:f,ref:n,target:a}))});var wd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wd||(wd={}));var Sd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sd||(Sd={}));function ag(e,t){let{target:n,replace:r,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:s}=t===void 0?{}:t,a=Tu(),c=zo(),d=hp(e,{relative:o});return N.useCallback(h=>{if(Vm(h,n)){h.preventDefault();let m=r!==void 0?r:Xn(c)===Xn(d);a(e,{replace:m,state:i,preventScrollReset:l,relative:o,unstable_viewTransition:s})}},[c,a,d,r,i,n,e,l,o,s])}const _u="/reactdeploy4/assets/png_4-pi7uzOjc.png",vp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:_u,alt:"",style:{width:"100%",aspectRatio:"1/1"},className:"img"})}),sg="/reactdeploy4/assets/img_2-0-A_q4Fj.png",yp=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:sg,className:"img",alt:""})}),ug="data:image/svg+xml,%3csvg%20width='166'%20height='46'%20viewBox='0%200%20166%2046'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M163.509%202.85256C164.173%202.40385%20164.677%201.99758%20164.993%201.6572C165.309%201.31683%20165.43%201.04907%20165.35%200.869385C165.269%200.6897%20164.989%200.601641%20164.525%200.610286C164.06%200.618932%20163.421%200.724112%20162.644%200.919758L13.3651%2038.2924C12.5937%2038.4844%2011.6985%2038.7633%2010.7312%2039.1131C9.76383%2039.4629%208.74352%2039.8766%207.72908%2040.3304C6.71465%2040.7841%205.72617%2041.269%204.82066%2041.757C3.91515%2042.245%203.11055%2042.7264%202.45325%2043.1735C1.7896%2043.6222%201.28524%2044.0285%200.969306%2044.3689C0.653372%2044.7093%200.532113%2044.977%200.612489%2045.1567C0.692866%2045.3364%200.973288%2045.4245%201.43761%2045.4158C1.90194%2045.4072%202.54098%2045.302%203.31783%2045.1063L152.597%207.73366C153.368%207.54169%20154.264%207.26277%20155.231%206.91299C156.198%206.56322%20157.219%206.14951%20158.233%205.69573C159.248%205.24196%20160.236%204.75709%20161.142%204.26911C162.047%203.78113%20162.852%203.29969%20163.509%202.85256Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",cg="data:image/svg+xml,%3csvg%20width='210'%20height='65'%20viewBox='0%200%20210%2065'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M206.862%203.14189C207.731%202.6015%20208.398%202.12247%20208.825%201.73243C209.252%201.34239%20209.43%201.04907%20209.35%200.869386C209.269%200.689701%20208.932%200.627207%20208.356%200.685511C207.781%200.743816%20206.979%200.921765%20205.998%201.20909L17.3582%2056.1883C16.3835%2056.4712%2015.2465%2056.8583%2014.0127%2057.3272C12.7789%2057.7962%2011.4728%2058.3378%2010.1697%2058.9207C8.86656%2059.5036%207.59227%2060.1163%206.42029%2060.7235C5.24832%2061.3306%204.20187%2061.9203%203.34129%2062.4583C2.47269%2062.9987%201.80566%2063.4778%201.37871%2063.8678C0.951766%2064.2578%200.773341%2064.5511%200.853718%2064.7308C0.934094%2064.9105%201.27168%2064.973%201.84702%2064.9147C2.42236%2064.8564%203.22407%2064.6784%204.20587%2064.3911L192.845%209.41195C193.82%209.12904%20194.957%208.74194%20196.191%208.27297C197.425%207.804%20198.731%207.26244%20200.034%206.67954C201.337%206.09664%20202.611%205.48393%20203.783%204.87675C204.955%204.26958%20206.002%203.67995%20206.862%203.14189Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",dg="data:image/svg+xml,%3csvg%20width='256'%20height='157'%20viewBox='0%200%20256%20157'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M252.625%204.30344C253.587%203.28409%20254.303%202.41526%20254.731%201.74706C255.16%201.07887%20255.292%200.624523%20255.12%200.410247C254.948%200.195973%20254.476%200.226002%20253.731%200.498609C252.985%200.771212%20251.981%201.281%20250.777%201.99855L19.2871%20139.562C18.0906%20140.272%2016.7153%20141.176%2015.2406%20142.222C13.7659%20143.269%2012.221%20144.438%2010.6951%20145.661C9.16906%20146.884%207.69219%20148.138%206.34961%20149.349C5.00703%20150.561%203.82533%20151.706%202.87268%20152.72C1.91018%20153.739%201.19407%20154.608%200.76577%20155.276C0.337465%20155.944%200.205367%20156.399%200.377122%20156.613C0.548876%20156.827%201.02108%20156.797%201.76648%20156.524C2.51187%20156.252%203.51577%20155.742%204.72017%20155.024L236.21%2017.4606C237.407%2016.7514%20238.782%2015.8473%20240.257%2014.8006C241.731%2013.7539%20243.276%2012.5853%20244.802%2011.3621C246.328%2010.139%20247.805%208.88548%20249.148%207.67397C250.49%206.46247%20251.672%205.31693%20252.625%204.30344Z'%20fill='%23FAFF00'/%3e%3c/svg%3e",fg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:ug,alt:"",className:"image1"}),u.jsx("img",{src:cg,alt:"",className:"image2"}),u.jsx("img",{src:dg,s:!0,alt:"",className:"image3"})]}),pg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.475%205.11776C263.391%204.04007%20264.052%203.10182%20264.419%202.35713C264.786%201.61245%20264.852%201.07606%20264.614%200.778924C264.376%200.481787%20263.838%200.429777%20263.031%200.625893C262.224%200.822009%20261.165%201.26238%20259.913%201.92158L19.3674%20128.187C18.1236%20128.838%2016.7109%20129.695%2015.2107%20130.71C13.7105%20131.725%2012.1524%20132.877%2010.6265%20134.1C9.10046%20135.323%207.63674%20136.593%206.3197%20137.836C5.00267%20139.08%203.85839%20140.272%202.9529%20141.344C2.03717%20142.422%201.37671%20143.36%201.00972%20144.105C0.642721%20144.85%200.576384%20145.386%200.814556%20145.683C1.05273%20145.98%201.5907%20146.032%202.3974%20145.836C3.20411%20145.64%204.26365%20145.2%205.51482%20144.541L246.061%2018.2749C247.305%2017.6245%20248.717%2016.7672%20250.218%2015.7524C251.718%2014.7375%20253.276%2013.5853%20254.802%2012.3621C256.328%2011.139%20257.792%209.86907%20259.109%208.6257C260.426%207.38233%20261.57%206.19009%20262.475%205.11776Z'%20fill='white'/%3e%3c/svg%3e",hg="data:image/svg+xml,%3csvg%20width='265'%20height='146'%20viewBox='0%200%20265%20146'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M262.559%205.11776C263.474%204.04007%20264.135%203.10182%20264.502%202.35713C264.869%201.61245%20264.935%201.07606%20264.697%200.778924C264.459%200.481787%20263.921%200.429777%20263.114%200.625893C262.307%200.822009%20261.248%201.26238%20259.997%201.92158L19.4506%20128.187C18.2069%20128.838%2016.7942%20129.695%2015.294%20130.71C13.7937%20131.725%2012.2357%20132.877%2010.7097%20134.1C9.18371%20135.323%207.71999%20136.593%206.40295%20137.836C5.08592%20139.08%203.94164%20140.272%203.03615%20141.344C2.12042%20142.422%201.45996%20143.36%201.09297%20144.105C0.725973%20144.85%200.659636%20145.386%200.897808%20145.683C1.13598%20145.98%201.67395%20146.032%202.48065%20145.836C3.28736%20145.64%204.3469%20145.2%205.59807%20144.541L246.144%2018.2749C247.388%2017.6245%20248.801%2016.7672%20250.301%2015.7524C251.801%2014.7375%20253.359%2013.5853%20254.885%2012.3621C256.411%2011.139%20257.875%209.86907%20259.192%208.6257C260.509%207.38233%20261.653%206.19009%20262.559%205.11776Z'%20fill='white'/%3e%3c/svg%3e",mg="data:image/svg+xml,%3csvg%20width='242'%20height='127'%20viewBox='0%200%20242%20127'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M239.21%204.51512C240.014%203.52722%20240.585%202.66023%20240.892%201.96418C241.198%201.26813%20241.233%200.756786%20240.995%200.459649C240.757%200.162512%20240.25%200.0854627%20239.504%200.232943C238.758%200.380424%20237.787%200.749522%20236.648%201.31894L17.6146%20110.341C16.482%20110.902%2015.2015%20111.654%2013.8469%20112.552C12.4923%20113.45%2011.0905%20114.477%209.72224%20115.574C8.35402%20116.67%207.0465%20117.815%205.8751%20118.942C4.7037%20120.068%203.69163%20121.155%202.89722%20122.138C2.09351%20123.126%201.52199%20123.993%201.21567%20124.689C0.909346%20125.385%200.87425%20125.896%201.11242%20126.193C1.35059%20126.49%201.85732%20126.567%202.60335%20126.42C3.34938%20126.273%204.31999%20125.903%205.45915%20125.334L224.493%2016.3119C225.625%2015.7506%20226.906%2014.9992%20228.26%2014.1011C229.615%2013.2031%20231.017%2012.176%20232.385%2011.0793C233.753%209.98262%20235.061%208.83794%20236.232%207.71131C237.404%206.58467%20238.416%205.49839%20239.21%204.51512Z'%20fill='white'/%3e%3c/svg%3e",gg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:pg,alt:"",className:"style1"}),u.jsx("img",{src:hg,alt:"",className:"style2"}),u.jsx("img",{src:mg,alt:"",className:"style3"})]}),vg="data:image/svg+xml,%3csvg%20width='343'%20height='101'%20viewBox='0%200%20343%20101'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M337.756%202.82053C339.3%202.19061%20340.513%201.65685%20341.327%201.25004C342.14%200.843229%20342.537%200.571418%20342.496%200.450288C342.454%200.329157%20341.973%200.361105%20341.082%200.544288C340.192%200.727471%20338.908%201.05826%20337.305%201.51758L29.4539%2089.5925C27.8637%2090.0466%2025.9836%2090.621%2023.9221%2091.2825C21.8605%2091.944%2019.6583%2092.6795%2017.4424%2093.4466C15.2266%2094.2137%2013.041%2094.9971%2011.0117%2095.7518C8.98235%2096.5064%207.14954%2097.2174%205.61891%2097.8435C4.07519%2098.4735%202.86157%2099.0072%202.04811%2099.414C1.23466%2099.8208%200.837454%20100.093%200.879386%20100.214C0.921318%20100.335%201.40156%20100.303%202.29243%20100.12C3.1833%2099.9366%204.46718%2099.6058%206.06996%2099.1465L313.921%2011.0716C315.511%2010.6174%20317.391%2010.043%20319.453%209.38155C321.514%208.72006%20323.717%207.98456%20325.932%207.21749C328.148%206.45042%20330.334%205.66696%20332.363%204.9123C334.393%204.15763%20336.225%203.44671%20337.756%202.82053Z'%20fill='purple'/%3e%3c/svg%3e",yg="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M45.9999%2034H17.9999C17.4759%2034%2017.0399%2034.405%2017.0019%2034.929C16.9829%2035.19%2016.5929%2041.361%2020.6999%2045.77C23.3129%2048.577%2027.1149%2050%2031.9999%2050C36.8849%2050%2040.6869%2048.577%2043.2999%2045.77C47.4059%2041.36%2047.0159%2035.189%2046.9969%2034.929C46.9599%2034.405%2046.5239%2034%2045.9999%2034ZM41.8239%2044.42C39.6039%2046.795%2036.2999%2048%2031.9999%2048C27.7009%2048%2024.3949%2046.795%2022.1759%2044.42C19.5279%2041.586%2019.0639%2037.745%2018.9979%2036H45.0029C44.9369%2037.745%2044.4729%2041.585%2041.8239%2044.42Z'%20fill='purple'/%3e%3cpath%20d='M18.394%2028.919L25.394%2025.919C25.762%2025.762%2026%2025.4%2026%2025C26%2024.6%2025.762%2024.238%2025.394%2024.081L18.394%2021.081L17.606%2022.919L22.461%2025L17.606%2027.081L18.394%2028.919Z'%20fill='purple'/%3e%3cpath%20d='M38.606%2025.919L45.606%2028.919L46.393%2027.081L41.539%2025L46.393%2022.919L45.606%2021.081L38.606%2024.081C38.238%2024.238%2038%2024.6%2038%2025C38%2025.4%2038.238%2025.762%2038.606%2025.919Z'%20fill='purple'/%3e%3cpath%20d='M32%204C16.561%204%204%2016.561%204%2032C4%2047.439%2016.561%2060%2032%2060C47.439%2060%2060%2047.439%2060%2032C60%2016.561%2047.439%204%2032%204ZM32%2058C17.664%2058%206%2046.336%206%2032C6%2017.664%2017.664%206%2032%206C46.337%206%2058%2017.664%2058%2032C58%2046.336%2046.337%2058%2032%2058Z'%20fill='purple'/%3e%3c/svg%3e",xg=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"d-flex flex-column justify-content-center align-items-center styleText",children:u.jsxs("h2",{children:[u.jsx("span",{style:{display:"block",color:"purple"},children:"TOUJOURS SATISFAIT !"}),"Acheter vos produits chez nous sans vous deplacer et recever les en toute sécurité dans le plus bref delai !"]})}),u.jsx("div",{children:u.jsx("img",{src:yg,className:"styleSmile",alt:""})}),u.jsx("div",{children:u.jsx("img",{src:vg,alt:"",className:"styleLine"})})]});var qe=function(){return qe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},qe.apply(this,arguments)};function uo(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,l;r<i;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var oe="-ms-",Ci="-moz-",q="-webkit-",xp="comm",Po="rule",zu="decl",wg="@import",wp="@keyframes",Sg="@layer",Sp=Math.abs,Pu=String.fromCharCode,ks=Object.assign;function Cg(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function Cp(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function Pl(e,t,n){return e.indexOf(t,n)}function _e(e,t){return e.charCodeAt(t)|0}function Ar(e,t,n){return e.slice(t,n)}function Rt(e){return e.length}function jp(e){return e.length}function ci(e,t){return t.push(e),e}function jg(e,t){return e.map(t).join("")}function Cd(e,t){return e.filter(function(n){return!bt(n,t)})}var Ao=1,Rr=1,kp=0,St=0,Ce=0,Hr="";function Ro(e,t,n,r,i,l,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:l,line:Ao,column:Rr,length:o,return:"",siblings:s}}function sn(e,t){return ks(Ro("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lr(e){for(;e.root;)e=sn(e.root,{children:[e]});ci(e,e.siblings)}function kg(){return Ce}function Mg(){return Ce=St>0?_e(Hr,--St):0,Rr--,Ce===10&&(Rr=1,Ao--),Ce}function Dt(){return Ce=St<kp?_e(Hr,St++):0,Rr++,Ce===10&&(Rr=1,Ao++),Ce}function Hn(){return _e(Hr,St)}function Al(){return St}function Io(e,t){return Ar(Hr,e,t)}function Ms(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Eg(e){return Ao=Rr=1,kp=Rt(Hr=e),St=0,[]}function Ng(e){return Hr="",e}function wa(e){return Cp(Io(St-1,Es(e===91?e+2:e===40?e+1:e)))}function Lg(e){for(;(Ce=Hn())&&Ce<33;)Dt();return Ms(e)>2||Ms(Ce)>3?"":" "}function Dg(e,t){for(;--t&&Dt()&&!(Ce<48||Ce>102||Ce>57&&Ce<65||Ce>70&&Ce<97););return Io(e,Al()+(t<6&&Hn()==32&&Dt()==32))}function Es(e){for(;Dt();)switch(Ce){case e:return St;case 34:case 39:e!==34&&e!==39&&Es(Ce);break;case 40:e===41&&Es(e);break;case 92:Dt();break}return St}function Tg(e,t){for(;Dt()&&e+Ce!==57;)if(e+Ce===84&&Hn()===47)break;return"/*"+Io(t,St-1)+"*"+Pu(e===47?e:Dt())}function _g(e){for(;!Ms(Hn());)Dt();return Io(e,St)}function zg(e){return Ng(Rl("",null,null,null,[""],e=Eg(e),0,[0],e))}function Rl(e,t,n,r,i,l,o,s,a){for(var c=0,d=0,h=o,m=0,S=0,w=0,x=1,M=1,p=1,f=0,g="",k=i,L=l,v=r,j=g;M;)switch(w=f,f=Dt()){case 40:if(w!=108&&_e(j,h-1)==58){Pl(j+=H(wa(f),"&","&\f"),"&\f",Sp(c?s[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:j+=wa(f);break;case 9:case 10:case 13:case 32:j+=Lg(w);break;case 92:j+=Dg(Al()-1,7);continue;case 47:switch(Hn()){case 42:case 47:ci(Pg(Tg(Dt(),Al()),t,n,a),a);break;default:j+="/"}break;case 123*x:s[c++]=Rt(j)*p;case 125*x:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+d:p==-1&&(j=H(j,/\f/g,"")),S>0&&Rt(j)-h&&ci(S>32?kd(j+";",r,n,h-1,a):kd(H(j," ","")+";",r,n,h-2,a),a);break;case 59:j+=";";default:if(ci(v=jd(j,t,n,c,d,i,s,g,k=[],L=[],h,l),l),f===123)if(d===0)Rl(j,t,v,v,k,l,h,s,L);else switch(m===99&&_e(j,3)===110?100:m){case 100:case 108:case 109:case 115:Rl(e,v,v,r&&ci(jd(e,v,v,0,0,i,s,g,i,k=[],h,L),L),i,L,h,s,r?k:L);break;default:Rl(j,v,v,v,[""],L,0,s,L)}}c=d=S=0,x=p=1,g=j="",h=o;break;case 58:h=1+Rt(j),S=w;default:if(x<1){if(f==123)--x;else if(f==125&&x++==0&&Mg()==125)continue}switch(j+=Pu(f),f*x){case 38:p=d>0?1:(j+="\f",-1);break;case 44:s[c++]=(Rt(j)-1)*p,p=1;break;case 64:Hn()===45&&(j+=wa(Dt())),m=Hn(),d=h=Rt(g=j+=_g(Al())),f++;break;case 45:w===45&&Rt(j)==2&&(x=0)}}return l}function jd(e,t,n,r,i,l,o,s,a,c,d,h){for(var m=i-1,S=i===0?l:[""],w=jp(S),x=0,M=0,p=0;x<r;++x)for(var f=0,g=Ar(e,m+1,m=Sp(M=o[x])),k=e;f<w;++f)(k=Cp(M>0?S[f]+" "+g:H(g,/&\f/g,S[f])))&&(a[p++]=k);return Ro(e,t,n,i===0?Po:s,a,c,d,h)}function Pg(e,t,n,r){return Ro(e,t,n,xp,Pu(kg()),Ar(e,2,-2),0,r)}function kd(e,t,n,r,i){return Ro(e,t,n,zu,Ar(e,0,r),Ar(e,r+1,-1),r,i)}function Mp(e,t,n){switch(Cg(e,t)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 4789:return Ci+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+Ci+e+oe+e+e;case 5936:switch(_e(e,t+11)){case 114:return q+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return q+e+oe+e+e;case 6165:return q+e+oe+"flex-"+e+e;case 5187:return q+e+H(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return q+e+oe+"flex-item-"+H(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":oe+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return q+e+oe+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return q+e+oe+H(e,"shrink","negative")+e;case 5292:return q+e+oe+H(e,"basis","preferred-size")+e;case 6060:return q+"box-"+H(e,"-grow","")+q+e+oe+H(e,"grow","positive")+e;case 4554:return q+H(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4200:if(!bt(e,/flex-|baseline/))return oe+"grid-column-align"+Ar(e,t)+e;break;case 2592:case 3360:return oe+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,bt(r.props,/grid-\w+-end/)})?~Pl(e+(n=n[t].value),"span",0)?e:oe+H(e,"-start","")+e+oe+"grid-row-span:"+(~Pl(n,"span",0)?bt(n,/\d+/):+bt(n,/\d+/)-+bt(e,/\d+/))+";":oe+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return bt(r.props,/grid-\w+-start/)})?e:oe+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rt(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+Ci+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pl(e,"stretch",0)?Mp(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,l,o,s,a,c){return oe+i+":"+l+c+(o?oe+i+"-span:"+(s?a:+a-+l)+c:"")+e});case 4949:if(_e(e,t+6)===121)return H(e,":",":"+q)+e;break;case 6444:switch(_e(e,_e(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+q+(_e(e,14)===45?"inline-":"")+"box$3$1"+q+"$2$3$1"+oe+"$2box$3")+e;case 100:return H(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function co(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ag(e,t,n,r){switch(e.type){case Sg:if(e.children.length)break;case wg:case zu:return e.return=e.return||e.value;case xp:return"";case wp:return e.return=e.value+"{"+co(e.children,r)+"}";case Po:if(!Rt(e.value=e.props.join(",")))return""}return Rt(n=co(e.children,r))?e.return=e.value+"{"+n+"}":""}function Rg(e){var t=jp(e);return function(n,r,i,l){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,l)||"";return o}}function Ig(e){return function(t){t.root||(t=t.return)&&e(t)}}function Og(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zu:e.return=Mp(e.value,e.length,n);return;case wp:return co([sn(e,{value:H(e.value,"@","@"+q)})],r);case Po:if(e.length)return jg(n=e.props,function(i){switch(bt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(sn(e,{props:[H(i,/:(read-\w+)/,":"+Ci+"$1")]})),lr(sn(e,{props:[i]})),ks(e,{props:Cd(n,r)});break;case"::placeholder":lr(sn(e,{props:[H(i,/:(plac\w+)/,":"+q+"input-$1")]})),lr(sn(e,{props:[H(i,/:(plac\w+)/,":"+Ci+"$1")]})),lr(sn(e,{props:[H(i,/:(plac\w+)/,oe+"input-$1")]})),lr(sn(e,{props:[i]})),ks(e,{props:Cd(n,r)});break}return""})}}var Fg={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ot={},Ir=typeof process<"u"&&ot!==void 0&&(ot.REACT_APP_SC_ATTR||ot.SC_ATTR)||"data-styled",Ep="active",Np="data-styled-version",Oo="6.1.8",Au=`/*!sc*/
`,Ru=typeof window<"u"&&"HTMLElement"in window,$g=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ot!==void 0&&ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ot.REACT_APP_SC_DISABLE_SPEEDY!==""?ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ot!==void 0&&ot.SC_DISABLE_SPEEDY!==void 0&&ot.SC_DISABLE_SPEEDY!==""&&ot.SC_DISABLE_SPEEDY!=="false"&&ot.SC_DISABLE_SPEEDY),Fo=Object.freeze([]),Or=Object.freeze({});function Ug(e,t,n){return n===void 0&&(n=Or),e.theme!==n.theme&&e.theme||t||n.theme}var Lp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),bg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Bg=/(^-|-$)/g;function Md(e){return e.replace(bg,"-").replace(Bg,"")}var Hg=/(a)(d)/gi,xl=52,Ed=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ns(e){var t,n="";for(t=Math.abs(e);t>xl;t=t/xl|0)n=Ed(t%xl)+n;return(Ed(t%xl)+n).replace(Hg,"$1-$2")}var Sa,Dp=5381,wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Tp=function(e){return wr(Dp,e)};function Wg(e){return Ns(Tp(e)>>>0)}function Qg(e){return e.displayName||e.name||"Component"}function Ca(e){return typeof e=="string"&&!0}var _p=typeof Symbol=="function"&&Symbol.for,zp=_p?Symbol.for("react.memo"):60115,Vg=_p?Symbol.for("react.forward_ref"):60112,Yg={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Kg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gg=((Sa={})[Vg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sa[zp]=Pp,Sa);function Nd(e){return("type"in(t=e)&&t.type.$$typeof)===zp?Pp:"$$typeof"in e?Gg[e.$$typeof]:Yg;var t}var Zg=Object.defineProperty,Xg=Object.getOwnPropertyNames,Ld=Object.getOwnPropertySymbols,Jg=Object.getOwnPropertyDescriptor,qg=Object.getPrototypeOf,Dd=Object.prototype;function Ap(e,t,n){if(typeof t!="string"){if(Dd){var r=qg(t);r&&r!==Dd&&Ap(e,r,n)}var i=Xg(t);Ld&&(i=i.concat(Ld(t)));for(var l=Nd(e),o=Nd(t),s=0;s<i.length;++s){var a=i[s];if(!(a in Kg||n&&n[a]||o&&a in o||l&&a in l)){var c=Jg(t,a);try{Zg(e,a,c)}catch{}}}}return e}function Fr(e){return typeof e=="function"}function Iu(e){return typeof e=="object"&&"styledComponentId"in e}function Un(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Td(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Hi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ls(e,t,n){if(n===void 0&&(n=!1),!n&&!Hi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ls(e[r],t[r]);else if(Hi(t))for(var r in t)e[r]=Ls(e[r],t[r]);return e}function Ou(e,t){Object.defineProperty(e,"toString",{value:t})}function Zi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ev=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,l=i;t>=l;)if((l<<=1)<0)throw Zi(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var o=i;o<l;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),a=(o=0,n.length);o<a;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var l=r;l<i;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),l=i+r,o=i;o<l;o++)n+="".concat(this.tag.getRule(o)).concat(Au);return n},e}(),Il=new Map,fo=new Map,Ol=1,wl=function(e){if(Il.has(e))return Il.get(e);for(;fo.has(Ol);)Ol++;var t=Ol++;return Il.set(e,t),fo.set(t,e),t},tv=function(e,t){Ol=t+1,Il.set(e,t),fo.set(t,e)},nv="style[".concat(Ir,"][").concat(Np,'="').concat(Oo,'"]'),rv=new RegExp("^".concat(Ir,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),iv=function(e,t,n){for(var r,i=n.split(","),l=0,o=i.length;l<o;l++)(r=i[l])&&e.registerName(t,r)},lv=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Au),i=[],l=0,o=r.length;l<o;l++){var s=r[l].trim();if(s){var a=s.match(rv);if(a){var c=0|parseInt(a[1],10),d=a[2];c!==0&&(tv(d,c),iv(e,d,a[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}};function ov(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Rp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Ir,"]")));return a[a.length-1]}(n),l=i!==void 0?i.nextSibling:null;r.setAttribute(Ir,Ep),r.setAttribute(Np,Oo);var o=ov();return o&&r.setAttribute("nonce",o),n.insertBefore(r,l),r},av=function(){function e(t){this.element=Rp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,l=r.length;i<l;i++){var o=r[i];if(o.ownerNode===n)return o}throw Zi(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),sv=function(){function e(t){this.element=Rp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),uv=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),_d=Ru,cv={isServer:!Ru,useCSSOMInjection:!$g},Ip=function(){function e(t,n,r){t===void 0&&(t=Or),n===void 0&&(n={});var i=this;this.options=qe(qe({},cv),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ru&&_d&&(_d=!1,function(l){for(var o=document.querySelectorAll(nv),s=0,a=o.length;s<a;s++){var c=o[s];c&&c.getAttribute(Ir)!==Ep&&(lv(l,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Ou(this,function(){return function(l){for(var o=l.getTag(),s=o.length,a="",c=function(h){var m=function(p){return fo.get(p)}(h);if(m===void 0)return"continue";var S=l.names.get(m),w=o.getGroup(h);if(S===void 0||w.length===0)return"continue";var x="".concat(Ir,".g").concat(h,'[id="').concat(m,'"]'),M="";S!==void 0&&S.forEach(function(p){p.length>0&&(M+="".concat(p,","))}),a+="".concat(w).concat(x,'{content:"').concat(M,'"}').concat(Au)},d=0;d<s;d++)c(d);return a}(i)})}return e.registerId=function(t){return wl(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(qe(qe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new uv(i):r?new av(i):new sv(i)}(this.options),new ev(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(wl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(wl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(wl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),dv=/&/g,fv=/^\s*\/\/.*$/gm;function Op(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Op(n.children,t)),n})}function pv(e){var t,n,r,i=e===void 0?Or:e,l=i.options,o=l===void 0?Or:l,s=i.plugins,a=s===void 0?Fo:s,c=function(m,S,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},d=a.slice();d.push(function(m){m.type===Po&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(dv,n).replace(r,c))}),o.prefix&&d.push(Og),d.push(Ag);var h=function(m,S,w,x){S===void 0&&(S=""),w===void 0&&(w=""),x===void 0&&(x="&"),t=x,n=S,r=new RegExp("\\".concat(n,"\\b"),"g");var M=m.replace(fv,""),p=zg(w||S?"".concat(w," ").concat(S," { ").concat(M," }"):M);o.namespace&&(p=Op(p,o.namespace));var f=[];return co(p,Rg(d.concat(Ig(function(g){return f.push(g)})))),f};return h.hash=a.length?a.reduce(function(m,S){return S.name||Zi(15),wr(m,S.name)},Dp).toString():"",h}var hv=new Ip,Ds=pv(),Fp=We.createContext({shouldForwardProp:void 0,styleSheet:hv,stylis:Ds});Fp.Consumer;We.createContext(void 0);function zd(){return N.useContext(Fp)}var mv=function(){function e(t,n){var r=this;this.inject=function(i,l){l===void 0&&(l=Ds);var o=r.name+l.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,l(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ou(this,function(){throw Zi(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ds),this.name+t.hash},e}(),gv=function(e){return e>="A"&&e<="Z"};function Pd(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;gv(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var $p=function(e){return e==null||e===!1||e===""},Up=function(e){var t,n,r=[];for(var i in e){var l=e[i];e.hasOwnProperty(i)&&!$p(l)&&(Array.isArray(l)&&l.isCss||Fr(l)?r.push("".concat(Pd(i),":"),l,";"):Hi(l)?r.push.apply(r,uo(uo(["".concat(i," {")],Up(l),!1),["}"],!1)):r.push("".concat(Pd(i),": ").concat((t=i,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Fg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wn(e,t,n,r){if($p(e))return[];if(Iu(e))return[".".concat(e.styledComponentId)];if(Fr(e)){if(!Fr(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var i=e(t);return Wn(i,t,n,r)}var l;return e instanceof mv?n?(e.inject(n,r),[e.getName(r)]):[e]:Hi(e)?Up(e):Array.isArray(e)?Array.prototype.concat.apply(Fo,e.map(function(o){return Wn(o,t,n,r)})):[e.toString()]}function vv(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Fr(n)&&!Iu(n))return!1}return!0}var yv=Tp(Oo),xv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&vv(t),this.componentId=n,this.baseHash=wr(yv,n),this.baseStyle=r,Ip.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Un(i,this.staticRulesId);else{var l=Td(Wn(this.rules,t,n,r)),o=Ns(wr(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(l,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}i=Un(i,o),this.staticRulesId=o}else{for(var a=wr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var h=this.rules[d];if(typeof h=="string")c+=h;else if(h){var m=Td(Wn(h,t,n,r));a=wr(a,m+d),c+=m}}if(c){var S=Ns(a>>>0);n.hasNameForId(this.componentId,S)||n.insertRules(this.componentId,S,r(c,".".concat(S),void 0,this.componentId)),i=Un(i,S)}}return i},e}(),bp=We.createContext(void 0);bp.Consumer;var ja={};function wv(e,t,n){var r=Iu(e),i=e,l=!Ca(e),o=t.attrs,s=o===void 0?Fo:o,a=t.componentId,c=a===void 0?function(k,L){var v=typeof k!="string"?"sc":Md(k);ja[v]=(ja[v]||0)+1;var j="".concat(v,"-").concat(Wg(Oo+v+ja[v]));return L?"".concat(L,"-").concat(j):j}(t.displayName,t.parentComponentId):a,d=t.displayName,h=d===void 0?function(k){return Ca(k)?"styled.".concat(k):"Styled(".concat(Qg(k),")")}(e):d,m=t.displayName&&t.componentId?"".concat(Md(t.displayName),"-").concat(t.componentId):t.componentId||c,S=r&&i.attrs?i.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var M=t.shouldForwardProp;w=function(k,L){return x(k,L)&&M(k,L)}}else w=x}var p=new xv(n,m,r?i.componentStyle:void 0);function f(k,L){return function(v,j,T){var A=v.attrs,F=v.componentStyle,G=v.defaultProps,ve=v.foldedComponentIds,pe=v.styledComponentId,Ke=v.target,en=We.useContext(bp),_t=zd(),te=v.shouldForwardProp||_t.shouldForwardProp,z=Ug(j,en,G)||Or,I=function(Oe,xe,it){for(var Tn,$t=qe(qe({},xe),{className:void 0,theme:it}),Wr=0;Wr<Oe.length;Wr+=1){var Ee=Fr(Tn=Oe[Wr])?Tn($t):Tn;for(var Ge in Ee)$t[Ge]=Ge==="className"?Un($t[Ge],Ee[Ge]):Ge==="style"?qe(qe({},$t[Ge]),Ee[Ge]):Ee[Ge]}return xe.className&&($t.className=Un($t.className,xe.className)),$t}(A,j,z),$=I.as||Ke,V={};for(var Z in I)I[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"&&I.theme===z||(Z==="forwardedAs"?V.as=I.forwardedAs:te&&!te(Z,$)||(V[Z]=I[Z]));var rt=function(Oe,xe){var it=zd(),Tn=Oe.generateAndInjectStyles(xe,it.styleSheet,it.stylis);return Tn}(F,I),ye=Un(ve,pe);return rt&&(ye+=" "+rt),I.className&&(ye+=" "+I.className),V[Ca($)&&!Lp.has($)?"class":"className"]=ye,V.ref=T,N.createElement($,V)}(g,k,L)}f.displayName=h;var g=We.forwardRef(f);return g.attrs=S,g.componentStyle=p,g.displayName=h,g.shouldForwardProp=w,g.foldedComponentIds=r?Un(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=m,g.target=r?i.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(k){this._foldedDefaultProps=r?function(L){for(var v=[],j=1;j<arguments.length;j++)v[j-1]=arguments[j];for(var T=0,A=v;T<A.length;T++)Ls(L,A[T],!0);return L}({},i.defaultProps,k):k}}),Ou(g,function(){return".".concat(g.styledComponentId)}),l&&Ap(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Ad(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Rd=function(e){return Object.assign(e,{isCss:!0})};function Sv(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Fr(e)||Hi(e))return Rd(Wn(Ad(Fo,uo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Wn(r):Rd(Wn(Ad(r,t)))}function Ts(e,t,n){if(n===void 0&&(n=Or),!t)throw Zi(1,t);var r=function(i){for(var l=[],o=1;o<arguments.length;o++)l[o-1]=arguments[o];return e(t,n,Sv.apply(void 0,uo([i],l,!1)))};return r.attrs=function(i){return Ts(e,t,qe(qe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ts(e,t,qe(qe({},n),i))},r}var Bp=function(e){return Ts(wv,e)},J=Bp;Lp.forEach(function(e){J[e]=Bp(e)});const Cv=J(vp)`
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

`,jv=J(vp)`
.img{
    position:absolute;
    top:5rem;
    left:3.7rem;
    display:block;
}
    

`,kv=J(fg)`

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
`,Mv=J(xg)`

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


`,Ev=J(gg)`


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
    `,Nv=J(yp)`

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
`,Lv=J(yp)`

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
`,Dv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsxs("div",{className:"first-container",children:[u.jsx(Ev,{}),u.jsx(Nv,{})]})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(Mv,{})})}),u.jsx("div",{className:"third",children:u.jsxs("div",{className:"third-container",children:[u.jsx(Cv,{}),u.jsx(kv,{})]})})]}),Tv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("h2",{children:u.jsx("span",{children:"chez Ardi"})}),u.jsx("h3",{children:"Commandez vos produits et soyez livrer où que vous soyer à Kinshasa"}),u.jsx("div",{})]}),_v=J(Tv)`
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

h2{
    margin-left:5%;
    margin-top:15%;
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
    margin-top:10%;
    margin-left:5%;
    width:70%;
    font-size:30px;
    text-align:center;
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

`,zv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"container-first",children:u.jsx(_v,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"container-second",children:u.jsx(Lv,{})})})]}),Pv="data:image/svg+xml,%3csvg%20width='240'%20height='201'%20viewBox='0%200%20240%20201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_184_251)'%3e%3cpath%20d='M209.83%2083.5349L52.22%2038.9572C47.8199%2037.7127%2043.2414%2037.787%2039.4918%2039.1637C35.7422%2040.5404%2033.1286%2043.1068%2032.2259%2046.2982L20.3139%2088.415C19.4112%2091.6065%2020.2935%2095.1616%2022.7665%2098.2983C25.2396%20101.435%2029.1009%20103.896%2033.501%20105.141L114.795%20128.133L137.936%20147.675L130.307%20132.521L191.111%20149.718C195.511%20150.963%20200.09%20150.889%20203.84%20149.512C207.589%20148.135%20210.203%20145.569%20211.105%20142.377L223.017%20100.261C223.92%2097.0692%20223.038%2093.5141%20220.565%2090.3774C218.092%2087.2407%20214.23%2084.7794%20209.83%2083.5349Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M48.8166%2050.9906C47.5827%2064.2224%2043.3749%2094.9374%2045.1998%2095.4536C47.0248%2095.9698%2078.2222%2065.8055%2080.296%2066.3921C82.3698%2066.9786%2078.9617%2099.9342%2090.8239%20108.358C93.8019%2097.8285%20103.606%2072.9849%20116.03%2066.7518'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M149.102%20105.347C143.623%20114.584%20132.052%20120.018%20123.259%20117.531C114.466%20115.044%20111.852%20105.598%20117.331%2096.3608C122.81%2087.1239%20134.381%2081.6892%20143.174%2084.1762C151.967%2086.6632%20154.581%2096.1098%20149.102%20105.347Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M198.873%20119.424C193.394%20128.661%20181.823%20134.095%20173.03%20131.608C164.237%20129.121%20161.623%20119.675%20167.102%20110.438C172.582%20101.201%20184.153%2095.7664%20192.946%2098.2534C201.739%20100.74%20204.353%20110.187%20198.873%20119.424Z'%20stroke='purple'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_184_251'%3e%3crect%20width='206.897'%20height='150.065'%20fill='purple'%20transform='translate(40.8413)%20rotate(15.7927)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Av=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("p",{children:"Une nouvelle expérience ! Nous livrons partout dans la ville de Kinshasa"})}),u.jsx("div",{className:"style3",children:u.jsx("img",{src:Pv,alt:""})})]}),Rv="/reactdeploy4/assets/dots1-b2Sj8ewq.svg",Iv="/reactdeploy4/assets/dots2-xnZsoQ1q.svg",Ov="/reactdeploy4/assets/dots3-AkDKMIjG.svg",Fv="/reactdeploy4/assets/dots4-PsKuw_9x.svg",$v=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx(jv,{}),u.jsx("img",{src:Rv,className:"style2",alt:""}),u.jsx("img",{src:Iv,className:"style3",alt:""}),u.jsx("img",{src:Ov,className:"style4",alt:""}),u.jsx("img",{src:Fv,className:"style5",alt:""})]}),Uv="/reactdeploy4/assets/png_10-OhKyeJ3r.png",bv=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:Uv,alt:"",className:"img",style:{width:"100%",height:"100%"}})}),Bv="/reactdeploy4/assets/dots5-OjWdiGOn.svg",Hv="/reactdeploy4/assets/dots6-p_drzvwO.svg",Wv="/reactdeploy4/assets/dots7-DmXCMvbn.svg",Qv="/reactdeploy4/assets/dots8-Midirh2A.svg",Vv=J(bv)`
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
        top:1.2rem;
        scale:0.8;
    }
}
`,Yv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("img",{src:Bv,className:"style2",alt:""}),u.jsx("img",{src:Hv,className:"style3",alt:""}),u.jsx("img",{src:Qv,className:"style5",alt:""}),u.jsx("img",{src:Wv,className:"style4",alt:""}),u.jsx(Vv,{})]}),Kv=J($v)`

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
`,Gv=J(Yv)`

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

`,Zv=J(Av)`
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
`,Xv=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"first-container",children:u.jsx(Kv,{})})}),u.jsx("div",{className:"second",children:u.jsx("div",{className:"second-container",children:u.jsx(Zv,{})})}),u.jsx("div",{className:"third",children:u.jsx("div",{className:"third-container",children:u.jsx(Gv,{})})})]}),ka=({image:e,text:t,style:n})=>{const r={position:"Absolute",fontFamily:"audrey",fontSize:"inherit",fontWeight:"bolder",color:"white",textAlign:"center"},i={position:"relative",display:"flex",fontSize:"inherit",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",backgroundColor:"#DADAD6",boxShadow:"-10px 10px 20px #000000",marginBottom:"3rem"};return u.jsx("div",{style:{...i,...n},children:u.jsx("div",{className:"px-4",style:r,children:e?u.jsx("img",{src:e,alt:""}):u.jsx("div",{className:"spanText",children:t})})})},Jv=J(Dv)`
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

`,qv=J(zv)`
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
`,ey=J(Xv)`

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
`,ty="/reactdeploy4/assets/img_5-R_nZnJim.png",ny="/reactdeploy4/assets/img_6-ej2dVkQl.png",ry=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx(ka,{image:ny})}),u.jsx("div",{className:"second",children:u.jsx(ka,{text:"Livraison gratuite à partir de 50$",style:{backgroundColor:"#787373"}})}),u.jsx("div",{className:"third",children:u.jsx(ka,{image:ty})})]}),iy=J(ry)`
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

`,Hp=()=>{const[e,t]=N.useState(0),n=[u.jsx(ey,{}),u.jsx(qv,{}),u.jsx(Jv,{})],r=()=>{t(i=>(i+1)%n.length)};return N.useEffect(()=>{const i=setInterval(()=>{r()},5e3);return()=>{clearInterval(i)}},[]),u.jsxs("div",{className:"section1-1",children:[u.jsx("div",{className:"box-section1-1",children:n[e]}),u.jsx(iy,{})]})},po="/reactdeploy4/assets/png_1-psFfvH_j.png",Wp="/reactdeploy4/assets/png_3-ilcu5yhJ.png",ly="/reactdeploy4/assets/png_5-PB77ItoP.png",Qp="/reactdeploy4/assets/png_6-IaEkgori.png",Ze="/reactdeploy4/assets/png_9-HkEXkKWn.png",oy=({className:e,children:t})=>u.jsx("div",{children:u.jsx("button",{className:`btn btn-outline-success  form-control ${e}`,type:"submit",children:t})}),ay="data:image/svg+xml,%3csvg%20width='40'%20height='41'%20viewBox='0%200%2040%2041'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_99_272)'%3e%3cpath%20d='M30.4126%2029.25H16.9126C16.0888%2029.2516%2015.2875%2028.9819%2014.6323%2028.4826C13.9771%2027.9833%2013.5045%2027.2822%2013.2876%2026.4875L10.0001%2014.575C9.94953%2014.3896%209.9424%2014.195%209.97926%2014.0064C10.0161%2013.8178%2010.096%2013.6402%2010.2126%2013.4875C10.3341%2013.3294%2010.4917%2013.2026%2010.6722%2013.1178C10.8527%2013.033%2011.0508%2012.9926%2011.2501%2013H35.0001C35.1837%2012.9997%2035.3652%2013.0399%2035.5315%2013.1177C35.6979%2013.1954%2035.8451%2013.3089%2035.9626%2013.45C36.0786%2013.5913%2036.1623%2013.7563%2036.2076%2013.9334C36.253%2014.1105%2036.259%2014.2954%2036.2251%2014.475L34.1001%2026.175C33.9422%2027.0379%2033.4867%2027.8182%2032.813%2028.38C32.1392%2028.9419%2031.2899%2029.2497%2030.4126%2029.25ZM12.9126%2015.5L15.7251%2025.825C15.7983%2026.0977%2015.9618%2026.3376%2016.1887%2026.5055C16.4157%2026.6735%2016.6929%2026.7597%2016.9751%2026.75H30.4751C30.7711%2026.7548%2031.0592%2026.6545%2031.2881%2026.4668C31.517%2026.2791%2031.6718%2026.0162%2031.7251%2025.725L33.5001%2015.5H12.9126Z'%20fill='black'/%3e%3cpath%20d='M11.25%2015.5C10.9694%2015.5104%2010.6936%2015.426%2010.4668%2015.2605C10.24%2015.0949%2010.0756%2014.8579%2010%2014.5875L8.0625%207.6625C7.98689%207.39213%207.82246%207.15508%207.5957%206.98954C7.36894%206.82401%207.09306%206.73963%206.8125%206.75H5C4.66848%206.75%204.35054%206.61831%204.11612%206.38389C3.8817%206.14947%203.75%205.83152%203.75%205.5C3.75%205.16848%203.8817%204.85054%204.11612%204.61612C4.35054%204.3817%204.66848%204.25%205%204.25H6.8625C7.67925%204.24885%208.47404%204.51438%209.12608%205.00623C9.77812%205.49808%2010.2518%206.18936%2010.475%206.975L12.5%2013.9125C12.5508%2014.0766%2012.5672%2014.2495%2012.5482%2014.4203C12.5293%2014.5911%2012.4753%2014.7561%2012.3896%2014.9051C12.304%2015.054%2012.1886%2015.1838%2012.0506%2015.2861C11.9125%2015.3885%2011.7549%2015.4613%2011.5875%2015.5C11.4757%2015.5182%2011.3618%2015.5182%2011.25%2015.5Z'%20fill='black'/%3e%3cpath%20d='M20%2036.75C19.5055%2036.75%2019.0222%2036.6034%2018.6111%2036.3287C18.2%2036.054%2017.8795%2035.6635%2017.6903%2035.2067C17.5011%2034.7499%2017.4516%2034.2472%2017.548%2033.7623C17.6445%2033.2773%2017.8826%2032.8319%2018.2322%2032.4822C18.5819%2032.1326%2019.0273%2031.8945%2019.5123%2031.798C19.9972%2031.7016%2020.4999%2031.7511%2020.9567%2031.9403C21.4135%2032.1295%2021.804%2032.45%2022.0787%2032.8611C22.3534%2033.2722%2022.5%2033.7555%2022.5%2034.25C22.5%2034.913%2022.2366%2035.5489%2021.7678%2036.0178C21.2989%2036.4866%2020.663%2036.75%2020%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2036.75C27.0055%2036.75%2026.5222%2036.6034%2026.1111%2036.3287C25.7%2036.054%2025.3795%2035.6635%2025.1903%2035.2067C25.0011%2034.7499%2024.9516%2034.2472%2025.048%2033.7623C25.1445%2033.2773%2025.3826%2032.8319%2025.7322%2032.4822C26.0819%2032.1326%2026.5273%2031.8945%2027.0123%2031.798C27.4972%2031.7016%2027.9999%2031.7511%2028.4567%2031.9403C28.9135%2032.1295%2029.304%2032.45%2029.5787%2032.8611C29.8534%2033.2722%2030%2033.7555%2030%2034.25C30%2034.913%2029.7366%2035.5489%2029.2678%2036.0178C28.7989%2036.4866%2028.163%2036.75%2027.5%2036.75Z'%20fill='black'/%3e%3cpath%20d='M27.5%2021.75H20C19.6685%2021.75%2019.3505%2021.6183%2019.1161%2021.3839C18.8817%2021.1495%2018.75%2020.8315%2018.75%2020.5C18.75%2020.1685%2018.8817%2019.8505%2019.1161%2019.6161C19.3505%2019.3817%2019.6685%2019.25%2020%2019.25H27.5C27.8315%2019.25%2028.1495%2019.3817%2028.3839%2019.6161C28.6183%2019.8505%2028.75%2020.1685%2028.75%2020.5C28.75%2020.8315%2028.6183%2021.1495%2028.3839%2021.3839C28.1495%2021.6183%2027.8315%2021.75%2027.5%2021.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_99_272'%3e%3crect%20width='40'%20height='40'%20fill='white'%20transform='translate(0%200.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",sy=({className:e})=>u.jsxs("div",{className:` ${e}`,children:[u.jsx("img",{src:ay,alt:"",className:"w-100 h-100"}),u.jsx("div",{className:"counter",children:"02"})]}),uy="/reactdeploy4/assets/logo-MiIbGZY7.jpg",cy="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjM1cHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzVweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGcgaWQ9IldoYXRzYXBwIj48cGF0aCBkPSJNMTYuMDA0LDMxYy0yLjg2OCwwLTUuNjQ2LTAuODExLTguMDUtMi4zNDdsLTUuMzQ4LDEuNzA5Yy0wLjE3OSwwLjA1Ny0wLjM3NiwwLjAwOS0wLjUwOS0wLjEyNSAgIGMtMC4xMzItMC4xMzQtMC4xNzgtMC4zMzItMC4xMTctMC41MWwxLjcyNS01LjE0NkMxLjkzNSwyMi4wNjEsMSwxOS4xLDEsMTZjMC00LjA3NiwxLjYxMi03Ljg5MSw0LjUzOS0xMC43NDIgICBDNS43MzYsNS4wNjYsNi4wNTMsNS4wNyw2LjI0Niw1LjI2N2MwLjE5MiwwLjE5OCwwLjE4OCwwLjUxNS0wLjAxLDAuNzA3QzMuNTA1LDguNjM2LDIsMTIuMTk2LDIsMTYgICBjMCwyLjk3NCwwLjkyMiw1LjgxMSwyLjY2NSw4LjIwNGMwLjA5NSwwLjEzMSwwLjEyMSwwLjMsMC4wNjksMC40NTRsLTEuNDkyLDQuNDUybDQuNjMzLTEuNDgxICAgYzAuMTQ0LTAuMDQ3LDAuMzAyLTAuMDI0LDAuNDI5LDAuMDU5QzEwLjU4OSwyOS4yLDEzLjI1MiwzMCwxNi4wMDQsMzBDMjMuNzIyLDMwLDMwLDIzLjcyLDMwLDE2YzAtNy43MTktNi4yNzgtMTQtMTMuOTk2LTE0ICAgYy0wLjAwMSwwLTAuMDAyLDAtMC4wMDMsMGMtMi4xNjcsMC00LjIzOCwwLjQ4MS02LjE2NCwxLjQyOUM5LjU4OSwzLjU1LDkuMjksMy40NDksOS4xNjgsMy4yMDJTOS4xNDcsMi42NTQsOS4zOTYsMi41MzIgICBDMTEuNDYsMS41MTYsMTMuNjgyLDEsMTUuOTk2LDFDMjQuMjcyLDEsMzEsNy43MjksMzEsMTZTMjQuMjcyLDMxLDE2LjAwNCwzMXoiIGZpbGw9IiMwMDgwMDAiLz48Zz48cGF0aCBkPSJNMjAuNjAyLDI0LjQ5M0wyMC42MDIsMjQuNDkzYy0xLjAxMSwwLTIuNDIyLTAuMzktNC40MzktMS4yMjZjLTIuNjMzLTEuMDktNS4yNDMtMy4zNzQtNy4zNS02LjQyOSAgICBsLTAuMDc1LTAuMTA3Yy0wLjY5Ni0wLjk1MS0xLjgyMy0yLjc3My0xLjgyMy00LjY3NWMwLTIuMjI5LDEuMTE1LTMuMzYsMS41OTItMy44NDNjMC40NDktMC40NjEsMS4xMi0wLjcwNiwxLjg3NC0wLjcwNiAgICBjMC4xOSwwLDAuMzYsMC4wMDksMC41MTUsMC4wMThjMC42MzUsMC4wMjUsMS4wMDMsMC4xODUsMS4zNTMsMS4wMjJsMC4zNjMsMC44OGMwLjM4NCwwLjkzMSwwLjg1NywyLjA4LDAuOTMxLDIuMjM1ICAgIGMwLjA4MiwwLjE2OSwwLjMzMSwwLjY4OCwwLjA1NCwxLjIyOGMtMC4xNDgsMC4zMTYtMC4yOTMsMC40ODMtMC40OTIsMC43MTNjLTAuMTQsMC4xNjEtMC4yMzMsMC4yNjEtMC4zMjgsMC4zNjEgICAgYy0wLjExLDAuMTE4LTAuMjIyLDAuMjM0LTAuMzM0LDAuMzc1Yy0wLjE5MywwLjIyNi0wLjE5MywwLjIyNi0wLjEyOCwwLjMzOWMwLjM3LDAuNjI1LDEuMTU3LDEuODI1LDIuMjUzLDIuOCAgICBjMS40MjIsMS4yNjUsMi41NzEsMS43MywzLjEyMywxLjk1NGwwLjEzNywwLjA1NmMwLjE0NSwwLjA2LDAuMzI4LDAuMTAzLDAuNDY1LTAuMDQyYzAuMjQ4LTAuMjY3LDAuNTYyLTAuNzA2LDAuODk0LTEuMTcxICAgIGwwLjE5OS0wLjI3OWMwLjM0OS0wLjQ5MywwLjc3OS0wLjU5NywxLjA3OC0wLjU5N2MwLjE3NSwwLDAuMzU3LDAuMDM1LDAuNTQzLDAuMTA1YzAuNDY1LDAuMTYyLDIuOTEyLDEuMzgxLDIuOTM3LDEuMzkzICAgIGwwLjIzNSwwLjExNWMwLjM1LDAuMTY4LDAuNjI2LDAuMzAxLDAuNzg0LDAuNTc5YzAuMjI5LDAuMzk4LDAuMTM5LDEuNDQyLTAuMjA5LDIuNDI3Yy0wLjQxNywxLjE3OS0xLjk2NywyLjEtMy4yMTMsMi4zNjggICAgQzIxLjI5MywyNC40MzgsMjAuOTk4LDI0LjQ5MywyMC42MDIsMjQuNDkzeiBNMTAuMzgsOC41MDdjLTAuNDcyLDAtMC45MDIsMC4xNDItMS4xMjQsMC4zNjljLTAuNDYxLDAuNDY4LTEuMzQyLDEuMzYxLTEuMzQyLDMuMTggICAgYzAsMS4xODEsMC41ODUsMi42NTgsMS42MDUsNC4wNTFsMC4xMTYsMC4xNjVjMS45OTgsMi44OTgsNC40NTIsNS4wNTUsNi45MDksNi4wNzJjMS44OTMsMC43ODUsMy4xODIsMS4xNSw0LjA1NywxLjE1bDAsMCAgICBjMC4zLDAsMC41MjMtMC4wNDIsMC43MjctMC4wODVjMC45NzMtMC4yMSwyLjE5OC0wLjkyOSwyLjQ3OS0xLjcyNGMwLjMwNC0wLjg1NywwLjI5OC0xLjUxNiwwLjI2Mi0xLjY0NyAgICBjLTAuMDAyLDAuMDMxLTAuMTgyLTAuMDU0LTAuMzI3LTAuMTI0bC0wLjI0OS0wLjEyMmMtMC43MDEtMC4zNTEtMi41MTMtMS4yMzYtMi44My0xLjM0N2MtMC4wODQtMC4wMzItMC4xNDgtMC4wNDUtMC4yMDItMC4wNDUgICAgYy0wLjA0NSwwLTAuMTM4LDAtMC4yNjQsMC4xNzhsLTAuMiwwLjI4Yy0wLjM1MSwwLjQ5Mi0wLjY4MiwwLjk1Ni0wLjk3NiwxLjI3MmMtMC4zNzcsMC40MDMtMS4wMjQsMC41MTUtMS41ODEsMC4yODMgICAgbC0wLjEyNy0wLjA1MmMtMC41NTctMC4yMjUtMS44NjItMC43NTMtMy40MTMtMi4xMzNjLTEuMTk2LTEuMDY2LTIuMDQ5LTIuMzYzLTIuNDUxLTMuMDQyYy0wLjQyMy0wLjcyOSwwLjAwNi0xLjIzMSwwLjIxMi0xLjQ3MiAgICBjMC4xMzEtMC4xNjMsMC4yNTktMC4yOTgsMC4zODctMC40MzRjMC4wODQtMC4wODksMC4xNjgtMC4xNzgsMC4yNTQtMC4yNzhjMC4yMjUtMC4yNTksMC4yOTktMC4zNDUsMC4zOTYtMC41NTIgICAgYzAuMDI5LTAuMDU3LDAuMDQ1LTAuMTM4LTAuMDU5LTAuMzU0Yy0wLjA3Ni0wLjE2LTAuNTYyLTEuMzM0LTAuOTUzLTIuMjg2bC0wLjM2Mi0wLjg3N2MtMC4xNjUtMC4zOTYtMC4xNjUtMC4zOTYtMC40NzktMC40MDggICAgQzEwLjcwMSw4LjUxNSwxMC41NDksOC41MDcsMTAuMzgsOC41MDd6IiBmaWxsPSIjMDA4MDAwIi8+PC9nPjxnPjxjaXJjbGUgY3g9IjcuNSIgY3k9IjQiIGZpbGw9IiMwMDgwMDAiIHI9IjAuNSIvPjwvZz48L2c+PC9zdmc+";var Vp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Id=We.createContext&&We.createContext(Vp),jn=function(){return jn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},jn.apply(this,arguments)},dy=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Yp(e){return e&&e.map(function(t,n){return We.createElement(t.tag,jn({key:n},t.attr),Yp(t.child))})}function fy(e){return function(t){return We.createElement(py,jn({attr:jn({},e.attr)},t),Yp(e.child))}}function py(e){var t=function(n){var r=e.attr,i=e.size,l=e.title,o=dy(e,["attr","size","title"]),s=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),We.createElement("svg",jn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:jn(jn({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&We.createElement("title",null,l),e.children)};return Id!==void 0?We.createElement(Id.Consumer,null,function(n){return t(n)}):t(Vp)}function Kp(e){return fy({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}const hy=({className:e})=>{const t={border:"solid 0.5px purple"};return u.jsxs("div",{className:`input-group ${e}`,children:[u.jsx("div",{className:"input-group-prepend",children:u.jsx("button",{className:"btn btn-outline-secondary dropdown-toggle",style:t,type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Catégorie"})}),u.jsx("input",{type:"text",className:"form-control","aria-label":"Text input with dropdown button"}),u.jsx("div",{class:"input-group-append",children:u.jsxs("button",{class:"btn btn-outline-secondary ",type:"button",style:t,children:["   ",u.jsx(Kp,{size:24,color:"#333"})]})})]})},my=J(hy)`
    width:80%;
    min-width:25rem;
    @media screen and (max-width: 767px){
        display:none;
        
    }
`,kn={Home:"/",Products:"/produits",Categorie:"/produits/",Details:"/produit/"},gy=({className:e})=>{const{articles:t,categories:n}=N.useContext(Xi);N.useState([]);const[r,i]=N.useState(!1),[l,o]=N.useState(""),s=()=>{i(a=>!a)};return u.jsxs("div",{className:e,children:[u.jsx(Kp,{onClick:()=>s()}),u.jsxs("div",{className:r&&"activated",children:[u.jsxs("div",{className:"head",children:[u.jsx("input",{type:"text",value:l,className:"searchField",onChange:a=>o(a.target.value)}),u.jsxs("div",{className:"cross",onClick:()=>s(),children:[u.jsx("span",{}),u.jsx("span",{})]})]}),u.jsx("div",{className:"result",children:t.filter(a=>a.name.includes(l)||a.longName.includes(l)).length!=0?t.filter(a=>a.name.includes(l)||a.longName.includes(l)).map(a=>u.jsx(Si,{className:"link",to:`${kn.Details}${a.id}`,onClick:()=>s(),children:u.jsxs("div",{className:"article",children:[u.jsx("div",{children:u.jsx("img",{src:a.image[0],alt:""})}),u.jsxs("div",{children:[u.jsx("div",{children:a.name}),u.jsx("div",{children:a.longName})]})]},a.id)})):u.jsx("div",{style:{color:"red",textAlign:"center",fontSize:"20px"},children:"Aucun Article correstondant"})})]})]})},vy=J(gy)`
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
            animation: slideRight 1s forwards;

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
`,yy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("img",{src:cy,className:"w-100",alt:""})});J(yy)`

    width:35px;
    height:35px;
    min-height:15px;
    min-width:15px;
@media screen and (max-width:800px) {
    height:25px;
    width:25px;
        
    }

`;const xy=({className:e})=>{const[t,n]=N.useState(!1);function r(){n(i=>!i),console.log(t)}return u.jsx("div",{className:e,children:u.jsxs("div",{className:t&&"menu-down",onClick:()=>r(),children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{}),u.jsxs("div",{children:[u.jsxs("ul",{children:[u.jsx("li",{children:u.jsx(Si,{to:`${kn.Categorie}telephone`,children:"Télephone"})}),u.jsx("li",{children:u.jsx(Si,{to:`${kn.Categorie}montre`,children:"Montres"})}),u.jsx("li",{children:u.jsx(Si,{to:`${kn.Categorie}accessoire`,children:"Accessoires"})}),u.jsx("li",{children:"Mode de paiement"}),u.jsx("li",{children:"Comment acheter chez nous ?"}),u.jsx("li",{children:"FAQs"})]}),u.jsx("p",{children:"chezArdi,,,,,"})]})]})})},wy=J(xy)`
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
`;J(sy)`
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
`;const Sy=({className:e})=>u.jsx("div",{children:u.jsx(u.Fragment,{children:u.jsx("nav",{className:`navbar-css ${e}`,children:u.jsx("div",{className:" navbar  row container-fluid-css-2",children:u.jsxs("div",{className:"first-col col-md-8 col-lg-9 col-12 d-flex align-items-center flex-row justify-content-between",children:[u.jsxs("div",{style:{display:"flex",flexDirection:"row"},children:[u.jsx(wy,{}),u.jsx("div",{style:{marginRight:"6px"}}),u.jsxs(Si,{to:kn.Home,className:"link-css title-css navbar-brand  d-block",children:[u.jsx("img",{src:uy,width:"30",height:"30",class:"d-inline-block align-top",alt:""}),"ChezArdi"]})]}),u.jsx(my,{}),u.jsxs("div",{className:"d-flex flex-row flex-row justify-content-between",children:[u.jsx(vy,{}),u.jsx("div",{style:{marginLeft:"12px"}})]})]})})})})});J(oy)`
width:100%;
@media screen and (max-width: 500px) {
    
}
`;const Cy=()=>u.jsx("div",{className:"",style:{backgroundColor:"black"},children:u.jsx("div",{class:"",style:{backgroundColor:"black"},children:u.jsxs("footer",{style:{backgroundColor:"grey"},className:"text-center text-lg-start",children:[u.jsx("div",{className:"container p-4",children:u.jsxs("div",{className:"row",children:[u.jsx("h5",{className:"text-uppercase mb-4 text-white",children:"Nous contacter"}),u.jsxs("ul",{className:"list-unstyled mb-4",children:[u.jsx("li",{style:{color:"white"},children:"0810001000"}),u.jsx("li",{children:u.jsx("a",{mailTo:"",className:"text-white",children:"ardi2@gmail.com"})})]})]})}),u.jsx("div",{class:"text-center p-3 border-top border-black text-white",children:"© 2024 Copyright"})]})})}),jy=J(Sy)`
    div .first-col{
        padding-left:1.5rem;
    }
    div .second-col{
        padding-left:1.5rem;
    }
`,ky="/reactdeploy4/assets/png_2-op38kcqj.png",lt="/reactdeploy4/assets/png_7-zH4XEwQ0.png",Be="/reactdeploy4/assets/png_8-JODtVRir.png",My=[{id:1,categorie:"accessoire",name:"ecouteur1-1",longName:"accessoire pour tous type de marque de telephone",price:2344,pricePromo:"",slug:"",image:[po,Ze,lt,Be]},{id:2,categorie:"montre",name:"Gucci-2",longName:"cable samsung Iphone 4, 5",price:288,pricePromo:119,slug:"",image:[ky,Ze,lt,Be]},{id:3,categorie:"montre",name:"Rolex-3",longName:"china whash",price:288,pricePromo:119,slug:"",image:[Wp,Ze,lt,Be]},{id:4,categorie:"accessoire",name:"ecouteur1-4",longName:"Pros like that",price:23,pricePromo:"",slug:"",image:[_u,Ze,lt,Be]},{id:5,categorie:"accessoire",name:"Baladeur-5",longName:"Baladeur pro max",price:23,pricePromo:179,slug:"",image:[ly,Ze,lt,Be]},{id:6,categorie:"telephone",name:"camon-6",longName:"pour les petit et les grand",price:23,pricePromo:129,slug:"",image:[Qp,Ze,lt,Be]},{id:7,categorie:"telephone",name:"techno-7",longName:"pour tous",price:23,pricePromo:19,slug:"",image:[Ze,lt,Be]},{id:8,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[Ze,lt,Be]},{id:9,categorie:"montre",name:"versace-9",longName:"sdsdsd",price:23,pricePromo:15,slug:"",image:[Ze,lt,Be]},,{id:10,categorie:"accessoire",name:"flash-10",price:23,longName:"grfgdf",pricePromo:19,slug:"",image:[po,Ze,lt,Be]},{id:11,categorie:"montre",name:"versace-9",longName:"fsdfdsfdsf",price:23,pricePromo:15,slug:"",image:[Ze,lt,Be]},{id:12,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[Ze,lt,Be,Be]},{id:13,categorie:"telephone",name:"samsung-8",longName:"lefsd",price:23,pricePromo:139,slug:"",image:[Ze,lt,Be,Be]}],Ey=[{category:"accessoires",slug:"Les chargeurs et tous type d'accessoires que"},{category:"telephones",slug:"iphone, samsung et tous types de telephone que vous voudrez vous procurer"},{category:"montres",slug:"Gucci, louis vuitton, davinchi, toustes ses marques sont disponibles ice chez nous"}],Xi=We.createContext(),Ny=()=>{const e={articles:My,categories:Ey};return u.jsx(Xi.Provider,{value:e,children:u.jsxs("div",{className:"theApp",children:[u.jsx(jy,{}),u.jsx("div",{className:"container-fluid-css",children:u.jsx(bm,{})}),u.jsx("div",{children:u.jsx(Cy,{})})]})})},Ly=({className:e})=>{const{articles:t,categories:n}=N.useContext(Xi),r=t.filter(o=>o.categorie=="accessoire"),i=t.filter(o=>o.categorie=="montre"),l=t.filter(o=>o.categorie=="telephone");return u.jsxs("div",{className:e,style:{backgroundColor:"#DADAD6"},children:[u.jsx("div",{className:"nav",children:u.jsx("div",{children:"Cliquer sur les barres  en haut à gauche pour ouvrir le menu, cliquer sur l'icon de recherche en haut à gauche pour rechercher rapidement parmi tous nos articles et enfin, cliquer sur le bouton acheter maintenant pour discuter diretement avec nous"})}),u.jsxs("div",{className:"section2-1",children:[u.jsx(Ma,{id:"accessoitre-link",articles:r,categories:n,category:"accessoires"}),u.jsx(Ma,{id:"montre-link",articles:i,categories:n,category:"montres"}),u.jsx(Ma,{id:"potable-link",articles:l,categories:n,category:"telephones"}),u.jsxs("div",{className:"box2-1 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:po,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-2 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Ecouteurs Bluetooth"})}),u.jsx("div",{className:"img1 img",children:u.jsx("img",{src:po,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-3 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Montres connectées"})}),u.jsx("div",{className:"img3 img",children:u.jsx("img",{src:_u,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-4 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Balladeurs"})}),u.jsx("div",{className:"img4 img",children:u.jsx("img",{src:Wp,width:"100%",alt:"",className:"w-100"})})]}),u.jsxs("div",{className:"box2-5 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Cables chargeurs"})}),u.jsx("div",{className:"img5 img",children:u.jsx("img",{src:Qp,width:"100%",alt:"",className:"w-100 h-100"})})]}),u.jsxs("div",{className:"box2-6 flexDisplay hoverEffect",children:[u.jsx("div",{className:"textStyle",children:u.jsx("p",{children:"Chargeurs"})}),u.jsx("div",{className:"img6 img",children:u.jsx("img",{src:Ze,alt:"",width:"100%",className:"h-100 "})})]})]}),u.jsx("div",{})]})},Ma=({id:e,articles:t,category:n,categories:r})=>{const i=t[0],[l,o]=N.useState({...i}),[s,a]=N.useState(i.id);function c(d){const h=t.filter(m=>m.id==d);o(h[0]),a(d)}return u.jsxs("div",{style:{width:"100%"},className:"list-article",children:[u.jsxs("div",{className:"category",style:{},children:[u.jsx("div",{}),u.jsx("div",{children:n}),u.jsx("div",{id:e})]}),u.jsx("div",{className:"articles",children:t.map((d,h)=>u.jsx(Dy,{...d},h))}),u.jsxs("div",{className:"slug",children:[u.jsx("div",{}),u.jsx("div",{children:r.filter(d=>d.category===n)[0].slug})]}),u.jsx("div",{className:"listImg",style:{overflowX:"hidden"},children:u.jsx("div",{children:t.map(d=>u.jsx("div",{className:`${s==d.id?"imgHover":""}`,style:{height:"100%",aspectRatio:"1/1",flexShrink:0},children:u.jsx("img",{src:d.image[0],className:"img-fluid",alt:"",style:{filter:"drop-shadow(10px 10px 5px 4px)",display:"block",height:"100%",width:"100%"},onClick:()=>c(d.id)},d.id)}))})}),u.jsx("div",{className:"articleBox",children:u.jsx(Ty,{...l})}),u.jsx("div",{className:"square",children:t.filter((d,h)=>h<5).map(d=>u.jsxs("div",{className:"square-box",children:[u.jsx("img",{src:d.image[0],width:"100%",alt:"",className:"w-100"}),u.jsxs("div",{children:[u.jsx("span",{children:d.name}),u.jsxs("span",{children:[d.price," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!d.pricePromo||u.jsxs("span",{className:"promo-1",children:[d.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("p",{}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})]}))})]})},Dy=({name:e,image:t,price:n,pricePromo:r,longName:i})=>u.jsxs("div",{className:"singleArticle",children:[u.jsx("img",{src:t[0],alt:""}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsx("span",{children:i}),u.jsx("div",{className:"_button",children:"Ajouter au panier"})]}),Ty=({name:e,image:t,price:n,pricePromo:r,longName:i})=>{const[l,o]=N.useState(0);return N.useEffect(()=>{const s=setInterval(()=>{o(a=>a+1)},4e3);return()=>{clearInterval(s)}},[]),u.jsxs("div",{className:"singleArticle2",children:[u.jsx("img",{src:t[l%t.length],alt:""}),u.jsx("div",{children:t.map((s,a,c)=>u.jsx("span",{className:`${l%c.length==a&&"imageOn"} circle`,onClick:()=>o(a)}))}),u.jsxs("span",{children:[n," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!r||u.jsxs("span",{className:"promo-1",children:[r," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[e," "]}),u.jsxs("span",{children:[" ",i," "]}),u.jsx("div",{}),u.jsx("div",{className:"_button",children:u.jsx("a",{href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})},_y=J(Ly)`
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
    text-decoration:line-through black 1px;
    font-size:14px;
    font-weight:900;
  }
  .dollarSign{
    font-size:13px;
    line-height:14px;
    font-weight:900;
    color : black;

  }
    .singleArticle2>span:nth-child(3){
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
    .singleArticle2>span:nth-child(4){
      font-size:25px;
      text-transform:uppercase;
      font-weight:900;
      letter-spacing:1px;
      line-height:25px;
      text-align:center;
  }
    .singleArticle>span:nth-child(4){
        padding-top:2px;
        padding-right: 5px;
      font-size:14px;
      line-height:15px;
      color: #353333;
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
    border : solid .5px blue;
    height: 100%;
    aspect-ratio:1/1;
    border-radius:50%;
    background-color: transparent;
  }
  .imageOn{
    background-color:blue;
  }
    .singleArticle2>span:nth-child(5){
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
        background-color:#F9FF00 ;
  }
  .singleArticle2>a{
    display: block;
    margin:0px auto;
    color: black;


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
    color : black;
    top:10%;
    left:0;
    background-color: #F9FF00;


  }

  /* rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */
  .nav>div{
    margin: 1rem;
    line-height:20px;
    font-size : 18px;
    font-weight:500;
  display : block;
  color : black;
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
  gap: 0px 1px;
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
  padding-bottom:2px 0px;
  width:100%;
  height: 25px;
  top:0;
  position: absolute;
  left:0;
  background-color:#F9FF00 ;
  transform: rotate(-45deg) translateX(-30%) translateY(-2rem);
}
.square-box>img{
  width:100%;
  height:60%;
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
  font-size:14px;
    text-align:center;
    font-weight:bold;
    padding:0 5px;
    border: solid 1px grey;
    border-radius:10px/10px;

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
  height:40%;
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
`;J(Hp)`
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
`;const zy=()=>u.jsxs("div",{className:"home-screen",style:{backgroundColor:"#DADAD6"},children:[u.jsx(Hp,{}),u.jsx(_y,{})]}),Py="/reactdeploy4/assets/jpg_1-7lt4SJ85.jpg",Ay=({className:e})=>u.jsx("div",{className:e,children:u.jsxs("div",{className:"first",children:[u.jsx("div",{className:"img-content",children:u.jsx("img",{src:Py,width:"100%",alt:"",srcset:""})}),u.jsx("div",{className:"text",children:"Livraison où que vous soyez à Kinshasa"})]})}),Ry=J(Ay)`
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

`,Iy="/reactdeploy4/assets/jpg_2-1pXFpQc3.jpg",Oy=({className:e})=>u.jsx("div",{className:e,children:u.jsx("div",{className:"image"})}),De=J(Oy)`
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

`,Fy=({className:e})=>u.jsxs("div",{className:e,children:[u.jsx("div",{className:"first",children:u.jsx("div",{className:"image",children:u.jsx("img",{src:Iy,alt:""})})}),u.jsxs("div",{className:"second",children:[u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{}),u.jsx(De,{})]})]}),$y=J(Fy)`
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
`,Uy=()=>u.jsxs("div",{children:[u.jsx(Ry,{}),u.jsx($y,{})]}),by=()=>u.jsx("div",{children:u.jsx(Uy,{})}),By=({className:e})=>{const{articles:t,categories:n}=N.useContext(Xi),{categorie:r}=pp(),i=Tu(),l=()=>{i("/error")};return t.filter(o=>o.categorie==r).length==0?l:u.jsxs("div",{style:{paddingTop:"3.4rem"},children:[u.jsx("div",{style:{fontSize:"22px",textTransform:"uppercase",fontWeight:"400",backgroundColor:"yellow",textAlign:"center"},children:r}),u.jsx("div",{className:e,children:t.filter(o=>o.categorie==r).map(o=>u.jsxs("div",{className:"square-box",children:[u.jsx("img",{src:o.image[0],width:"100%",alt:"",className:"w-100"}),u.jsxs("div",{children:[u.jsx("span",{children:o.name}),u.jsxs("span",{children:[o.price," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!o.pricePromo||u.jsxs("span",{className:"promo-1",children:[o.pricePromo," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsx("p",{}),u.jsx("div",{children:u.jsx("a",{target:"_blank",href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})]}))})]})},Hy=J(By)`

    display: grid;
    grid-template-columns: 50% 50%;
    gap: 2px 2px;
    flex-wrap: wrap;
    margin-top:1rem;
    a{
        color : black;
        text-decoration: none;
    }

  .square-box>div>span:nth-child(2) span,.singleArticle>span:nth-child(2) span,.singleArticle2>span:nth-child(3) span{
        display:inline-block;

  }
  .square-box>div>span:nth-child(2)>.dollarSign{
    transform:translate(-50%,-20%);
    font-size:12px;

  }
  .square-box{
    flex-shrink:0;
  position: relative;
  height:20rem;
  width:100%;
  display: inline-block;
  background-color:grey;
  overflow: hidden;
}
.square-box>img{
  width:100%;
  height:60%;
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
  font-size:14px;
    text-align:center;
    font-weight:bold;
    padding:0 5px;
    border: solid 1px grey;
    border-radius:10px/10px;

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
  height:40%;
}
`,Wy=({className:e})=>{const[t,n]=N.useState(0),{articles:r}=N.useContext(Xi),{id:i}=pp();console.log("°°°°°°"+i);const l=r.filter(w=>w.id===Number(i))[0],o=Tu(),s=()=>{o("/error")};if(!l)return s;const{name:a,image:c,price:d,pricePromo:h,longName:m,slug:S}=l;return u.jsxs("div",{className:`${e} `,children:[u.jsxs("div",{className:"",children:[u.jsx("div",{children:l.image.map((w,x,M)=>u.jsx("div",{className:`${x==t%M.length&&"activate"} imageBox`,onClick:()=>n(x),children:u.jsx("img",{src:w,alt:""})},x))}),u.jsxs("div",{className:"grid-center",children:[u.jsx("img",{src:c[t%c.length],alt:""})," "]})]}),u.jsxs("div",{children:[u.jsxs("span",{className:"price",children:[d," ",u.jsx("span",{className:"dollarSign",children:"$"})," ",!h||u.jsxs("span",{className:"promo-1",children:[h," ",u.jsx("span",{className:"dollarSign",children:"$"})]})," "]}),u.jsxs("span",{children:[a," "]}),u.jsxs("span",{children:[" ",m," "]}),u.jsxs("span",{children:[" ",S," "]})]}),u.jsx("div",{className:"_button",children:u.jsx("a",{href:"https://wa.me/message/UNKT6MU5OODWI1",children:"Acheter maintenant"})})]})},Qy=J(Wy)`
background-color :#DADAD6;
padding-bottom: 3rem;
margin-top : 3.3rem;

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
        overflow-y: scroll;
        gap:5px;
    }
    .imageBox{
        width:100%;
        aspect-ratio:1/1;

    }

    img{
        width : 100%;
        aspect-ratio:1/1;
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
        display: grid;
        place-content: center;
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
    transform:translate(-50%,-30%);
  }
  .price{      
    font-size:25px;
      font-family:_salsa !important;
      color: black;
      text-align:center;
  }
  a{
    color : black;
    text-decoration: none;
  }
    ._button{
    text-align:center;
    font-weight:bold;
    padding:.3rem;
    border: solid 1px grey;
    border-radius:30px/30px;
    margin:1rem 1rem;
  }
  .price+span{
    font-size : 26px;
  }

    
}


`,Od=()=>u.jsx("div",{className:"",style:{marginTop:"3rem",height:"60rem"},children:u.jsx("p",{style:{fontSize:"60px",textAlign:"center"},children:"404"})}),Vy=Km(js(u.jsxs(an,{path:"/",element:u.jsx(Ny,{}),children:[u.jsx(an,{index:!0,element:u.jsx(zy,{})}),u.jsx(an,{path:kn.Products,element:u.jsx(by,{})}),u.jsx(an,{path:`${kn.Categorie}:categorie`,element:u.jsx(Hy,{})}),u.jsx(an,{path:`${kn.Details}:id`,element:u.jsx(Qy,{})}),u.jsx(an,{path:"/error",element:u.jsx(Od,{})}),u.jsx(an,{path:"*",element:u.jsx(Od,{})})]})));Ea.createRoot(document.getElementById("root")).render(u.jsx(We.StrictMode,{children:u.jsx(rg,{router:Vy})}));
