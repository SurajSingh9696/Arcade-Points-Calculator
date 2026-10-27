var _v=Object.defineProperty;var yv=(s,e,t)=>e in s?_v(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Iu=(s,e,t)=>yv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Dg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uu={exports:{}},Bo={},ku={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Sv(){if(lm)return _t;lm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function g(w){return w===null||typeof w!="object"?null:(w=v&&w[v]||w["@@iterator"],typeof w=="function"?w:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function E(w,W,ye){this.props=w,this.context=W,this.refs=b,this.updater=ye||S}E.prototype.isReactComponent={},E.prototype.setState=function(w,W){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,W,"setState")},E.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function y(){}y.prototype=E.prototype;function B(w,W,ye){this.props=w,this.context=W,this.refs=b,this.updater=ye||S}var F=B.prototype=new y;F.constructor=B,M(F,E.prototype),F.isPureReactComponent=!0;var C=Array.isArray,U=Object.prototype.hasOwnProperty,O={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function H(w,W,ye){var X,re={},fe=null,ie=null;if(W!=null)for(X in W.ref!==void 0&&(ie=W.ref),W.key!==void 0&&(fe=""+W.key),W)U.call(W,X)&&!V.hasOwnProperty(X)&&(re[X]=W[X]);var xe=arguments.length-2;if(xe===1)re.children=ye;else if(1<xe){for(var Le=Array(xe),Ae=0;Ae<xe;Ae++)Le[Ae]=arguments[Ae+2];re.children=Le}if(w&&w.defaultProps)for(X in xe=w.defaultProps,xe)re[X]===void 0&&(re[X]=xe[X]);return{$$typeof:s,type:w,key:fe,ref:ie,props:re,_owner:O.current}}function P(w,W){return{$$typeof:s,type:w.type,key:W,ref:w.ref,props:w.props,_owner:w._owner}}function R(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function k(w){var W={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ye){return W[ye]})}var J=/\/+/g;function Z(w,W){return typeof w=="object"&&w!==null&&w.key!=null?k(""+w.key):W.toString(36)}function oe(w,W,ye,X,re){var fe=typeof w;(fe==="undefined"||fe==="boolean")&&(w=null);var ie=!1;if(w===null)ie=!0;else switch(fe){case"string":case"number":ie=!0;break;case"object":switch(w.$$typeof){case s:case e:ie=!0}}if(ie)return ie=w,re=re(ie),w=X===""?"."+Z(ie,0):X,C(re)?(ye="",w!=null&&(ye=w.replace(J,"$&/")+"/"),oe(re,W,ye,"",function(Ae){return Ae})):re!=null&&(R(re)&&(re=P(re,ye+(!re.key||ie&&ie.key===re.key?"":(""+re.key).replace(J,"$&/")+"/")+w)),W.push(re)),1;if(ie=0,X=X===""?".":X+":",C(w))for(var xe=0;xe<w.length;xe++){fe=w[xe];var Le=X+Z(fe,xe);ie+=oe(fe,W,ye,Le,re)}else if(Le=g(w),typeof Le=="function")for(w=Le.call(w),xe=0;!(fe=w.next()).done;)fe=fe.value,Le=X+Z(fe,xe++),ie+=oe(fe,W,ye,Le,re);else if(fe==="object")throw W=String(w),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ie}function ue(w,W,ye){if(w==null)return w;var X=[],re=0;return oe(w,X,"","",function(fe){return W.call(ye,fe,re++)}),X}function ae(w){if(w._status===-1){var W=w._result;W=W(),W.then(function(ye){(w._status===0||w._status===-1)&&(w._status=1,w._result=ye)},function(ye){(w._status===0||w._status===-1)&&(w._status=2,w._result=ye)}),w._status===-1&&(w._status=0,w._result=W)}if(w._status===1)return w._result.default;throw w._result}var pe={current:null},j={transition:null},de={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:j,ReactCurrentOwner:O};function I(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:ue,forEach:function(w,W,ye){ue(w,function(){W.apply(this,arguments)},ye)},count:function(w){var W=0;return ue(w,function(){W++}),W},toArray:function(w){return ue(w,function(W){return W})||[]},only:function(w){if(!R(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},_t.Component=E,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=B,_t.StrictMode=r,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,_t.act=I,_t.cloneElement=function(w,W,ye){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=M({},w.props),re=w.key,fe=w.ref,ie=w._owner;if(W!=null){if(W.ref!==void 0&&(fe=W.ref,ie=O.current),W.key!==void 0&&(re=""+W.key),w.type&&w.type.defaultProps)var xe=w.type.defaultProps;for(Le in W)U.call(W,Le)&&!V.hasOwnProperty(Le)&&(X[Le]=W[Le]===void 0&&xe!==void 0?xe[Le]:W[Le])}var Le=arguments.length-2;if(Le===1)X.children=ye;else if(1<Le){xe=Array(Le);for(var Ae=0;Ae<Le;Ae++)xe[Ae]=arguments[Ae+2];X.children=xe}return{$$typeof:s,type:w.type,key:re,ref:fe,props:X,_owner:ie}},_t.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},_t.createElement=H,_t.createFactory=function(w){var W=H.bind(null,w);return W.type=w,W},_t.createRef=function(){return{current:null}},_t.forwardRef=function(w){return{$$typeof:d,render:w}},_t.isValidElement=R,_t.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:ae}},_t.memo=function(w,W){return{$$typeof:p,type:w,compare:W===void 0?null:W}},_t.startTransition=function(w){var W=j.transition;j.transition={};try{w()}finally{j.transition=W}},_t.unstable_act=I,_t.useCallback=function(w,W){return pe.current.useCallback(w,W)},_t.useContext=function(w){return pe.current.useContext(w)},_t.useDebugValue=function(){},_t.useDeferredValue=function(w){return pe.current.useDeferredValue(w)},_t.useEffect=function(w,W){return pe.current.useEffect(w,W)},_t.useId=function(){return pe.current.useId()},_t.useImperativeHandle=function(w,W,ye){return pe.current.useImperativeHandle(w,W,ye)},_t.useInsertionEffect=function(w,W){return pe.current.useInsertionEffect(w,W)},_t.useLayoutEffect=function(w,W){return pe.current.useLayoutEffect(w,W)},_t.useMemo=function(w,W){return pe.current.useMemo(w,W)},_t.useReducer=function(w,W,ye){return pe.current.useReducer(w,W,ye)},_t.useRef=function(w){return pe.current.useRef(w)},_t.useState=function(w){return pe.current.useState(w)},_t.useSyncExternalStore=function(w,W,ye){return pe.current.useSyncExternalStore(w,W,ye)},_t.useTransition=function(){return pe.current.useTransition()},_t.version="18.3.1",_t}var cm;function Sf(){return cm||(cm=1,ku.exports=Sv()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Ev(){if(um)return Bo;um=1;var s=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var x,v={},g=null,S=null;p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(S=f.ref);for(x in f)r.call(f,x)&&!l.hasOwnProperty(x)&&(v[x]=f[x]);if(d&&d.defaultProps)for(x in f=d.defaultProps,f)v[x]===void 0&&(v[x]=f[x]);return{$$typeof:e,type:d,key:g,ref:S,props:v,_owner:o.current}}return Bo.Fragment=t,Bo.jsx=u,Bo.jsxs=u,Bo}var dm;function Mv(){return dm||(dm=1,Uu.exports=Ev()),Uu.exports}var _=Mv(),at=Sf();const wv=Dg(at);var pl={},Ou={exports:{}},Ln={},Bu={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function bv(){return fm||(fm=1,(function(s){function e(j,de){var I=j.length;j.push(de);e:for(;0<I;){var w=I-1>>>1,W=j[w];if(0<o(W,de))j[w]=de,j[I]=W,I=w;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var de=j[0],I=j.pop();if(I!==de){j[0]=I;e:for(var w=0,W=j.length,ye=W>>>1;w<ye;){var X=2*(w+1)-1,re=j[X],fe=X+1,ie=j[fe];if(0>o(re,I))fe<W&&0>o(ie,re)?(j[w]=ie,j[fe]=I,w=fe):(j[w]=re,j[X]=I,w=X);else if(fe<W&&0>o(ie,I))j[w]=ie,j[fe]=I,w=fe;else break e}}return de}function o(j,de){var I=j.sortIndex-de.sortIndex;return I!==0?I:j.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],x=1,v=null,g=3,S=!1,M=!1,b=!1,E=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var de=t(p);de!==null;){if(de.callback===null)r(p);else if(de.startTime<=j)r(p),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(p)}}function C(j){if(b=!1,F(j),!M)if(t(f)!==null)M=!0,ae(U);else{var de=t(p);de!==null&&pe(C,de.startTime-j)}}function U(j,de){M=!1,b&&(b=!1,y(H),H=-1),S=!0;var I=g;try{for(F(de),v=t(f);v!==null&&(!(v.expirationTime>de)||j&&!k());){var w=v.callback;if(typeof w=="function"){v.callback=null,g=v.priorityLevel;var W=w(v.expirationTime<=de);de=s.unstable_now(),typeof W=="function"?v.callback=W:v===t(f)&&r(f),F(de)}else r(f);v=t(f)}if(v!==null)var ye=!0;else{var X=t(p);X!==null&&pe(C,X.startTime-de),ye=!1}return ye}finally{v=null,g=I,S=!1}}var O=!1,V=null,H=-1,P=5,R=-1;function k(){return!(s.unstable_now()-R<P)}function J(){if(V!==null){var j=s.unstable_now();R=j;var de=!0;try{de=V(!0,j)}finally{de?Z():(O=!1,V=null)}}else O=!1}var Z;if(typeof B=="function")Z=function(){B(J)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=J,Z=function(){ue.postMessage(null)}}else Z=function(){E(J,0)};function ae(j){V=j,O||(O=!0,Z())}function pe(j,de){H=E(function(){j(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,ae(U))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(j){switch(g){case 1:case 2:case 3:var de=3;break;default:de=g}var I=g;g=de;try{return j()}finally{g=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,de){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var I=g;g=j;try{return de()}finally{g=I}},s.unstable_scheduleCallback=function(j,de,I){var w=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?w+I:w):I=w,j){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=I+W,j={id:x++,callback:de,priorityLevel:j,startTime:I,expirationTime:W,sortIndex:-1},I>w?(j.sortIndex=I,e(p,j),t(f)===null&&j===t(p)&&(b?(y(H),H=-1):b=!0,pe(C,I-w))):(j.sortIndex=W,e(f,j),M||S||(M=!0,ae(U))),j},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(j){var de=g;return function(){var I=g;g=de;try{return j.apply(this,arguments)}finally{g=I}}}})(zu)),zu}var hm;function Tv(){return hm||(hm=1,Bu.exports=bv()),Bu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function Cv(){if(pm)return Ln;pm=1;var s=Sf(),e=Tv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function g(n){return f.call(v,n)?!0:f.call(x,n)?!1:p.test(n)?v[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,h,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){E[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];E[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){E[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){E[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){E[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){E[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){E[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){E[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){E[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function B(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,B);E[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,B);E[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,B);E[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){E[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),E.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){E[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var h=E.hasOwnProperty(i)?E[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,h,c)&&(a=null),c||h===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),O=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),j=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var I=Object.assign,w;function W(n){if(w===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+n}var ye=!1;function X(n,i){if(!n||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),m=c.stack.split(`
`),T=h.length-1,z=m.length-1;1<=T&&0<=z&&h[T]!==m[z];)z--;for(;1<=T&&0<=z;T--,z--)if(h[T]!==m[z]){if(T!==1||z!==1)do if(T--,z--,0>z||h[T]!==m[z]){var G=`
`+h[T].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=T&&0<=z);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function re(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=X(n.type,!1),n;case 11:return n=X(n.type.render,!1),n;case 1:return n=X(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case O:return"Portal";case P:return"Profiler";case H:return"StrictMode";case Z:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function ie(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ae(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=Ae(n))}function ve(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ge(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function D(n,i){var a=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ue(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=xe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ee(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Fe(n,i){Ee(n,i);var a=xe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(n,i.type,a):i.hasOwnProperty("defaultValue")&&Qe(n,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ce(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Qe(n,i,a){(i!=="number"||ge(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ne=Array.isArray;function L(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ne(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:xe(a)}}function me(n,i){var a=xe(i.value),c=xe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Me(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function _e(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?_e(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Xe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function rt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function ct(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=rt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ze=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vt(n,i){if(i){if(Ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ht(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function $(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ke=null,he=null,Se=null;function Ge(n){if(n=wo(n)){if(typeof ke!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),ke(n.stateNode,n.type,i))}}function ze(n){he?Se?Se.push(n):Se=[n]:he=n}function pt(){if(he){var n=he,i=Se;if(Se=he=null,Ge(n),i)for(n=0;n<i.length;n++)Ge(i[n])}}function Ut(n,i){return n(i)}function Kt(){}var bt=!1;function Cn(n,i,a){if(bt)return n(i,a);bt=!0;try{return Ut(n,i,a)}finally{bt=!1,(he!==null||Se!==null)&&(Kt(),pt())}}function Sn(n,i){var a=n.stateNode;if(a===null)return null;var c=Ra(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var is=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){is=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{is=!1}function bi(n,i,a,c,h,m,T,z,G){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(be){this.onError(be)}}var Ti=!1,Cr=null,Ar=!1,$i=null,aa={onError:function(n){Ti=!0,Cr=n}};function rs(n,i,a,c,h,m,T,z,G){Ti=!1,Cr=null,bi.apply(aa,arguments)}function la(n,i,a,c,h,m,T,z,G){if(rs.apply(this,arguments),Ti){if(Ti){var ce=Cr;Ti=!1,Cr=null}else throw Error(t(198));Ar||(Ar=!0,$i=ce)}}function mi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ca(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ua(n){if(mi(n)!==n)throw Error(t(188))}function rc(n){var i=n.alternate;if(!i){if(i=mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return ua(h),n;if(m===c)return ua(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var T=!1,z=h.child;z;){if(z===a){T=!0,a=h,c=m;break}if(z===c){T=!0,c=h,a=m;break}z=z.sibling}if(!T){for(z=m.child;z;){if(z===a){T=!0,a=m,c=h;break}if(z===c){T=!0,c=m,a=h;break}z=z.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function da(n){return n=rc(n),n!==null?fa(n):null}function fa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fa(n);if(i!==null)return i;n=n.sibling}return null}var ha=e.unstable_scheduleCallback,N=e.unstable_cancelCallback,K=e.unstable_shouldYield,le=e.unstable_requestPaint,ne=e.unstable_now,Q=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Oe=e.unstable_UserBlockingPriority,je=e.unstable_NormalPriority,Ke=e.unstable_LowPriority,ut=e.unstable_IdlePriority,lt=null,et=null;function Mt(n){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:wt,Wt=Math.log,zt=Math.LN2;function wt(n){return n>>>=0,n===0?32:31-(Wt(n)/zt|0)|0}var it=64,Xt=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hn(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var z=T&~h;z!==0?c=Et(z):(m&=T,m!==0&&(c=Et(m)))}else T=a&~h,T!==0?c=Et(T):m!==0&&(c=Et(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-mt(i),h=1<<a,c|=n[a],i&=~h;return c}function Yi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-mt(m),z=1<<T,G=h[T];G===-1?((z&a)===0||(z&c)!==0)&&(h[T]=Yi(z,i)):G<=i&&(n.expiredLanes|=z),m&=~z}}function Ci(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ft(){var n=it;return it<<=1,(it&4194240)===0&&(it=64),n}function pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-mt(i),n[i]=a}function cn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-mt(a),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~m}}function rn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-mt(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Tt=0;function gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Vf,sc,Hf,Gf,jf,oc=!1,pa=[],Zi=null,Ki=null,Ji=null,ao=new Map,lo=new Map,Qi=[],Vx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wf(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function co(n,i,a,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=wo(i),i!==null&&sc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Hx(n,i,a,c,h){switch(i){case"focusin":return Zi=co(Zi,n,i,a,c,h),!0;case"dragenter":return Ki=co(Ki,n,i,a,c,h),!0;case"mouseover":return Ji=co(Ji,n,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return ao.set(m,co(ao.get(m)||null,n,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,lo.set(m,co(lo.get(m)||null,n,i,a,c,h)),!0}return!1}function Xf(n){var i=Rr(n.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=ca(a),i!==null){n.blockedOn=i,jf(n.priority,function(){Hf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=lc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Nt=c,a.target.dispatchEvent(c),Nt=null}else return i=wo(a),i!==null&&sc(i),n.blockedOn=a,!1;i.shift()}return!0}function qf(n,i,a){ma(n)&&a.delete(i)}function Gx(){oc=!1,Zi!==null&&ma(Zi)&&(Zi=null),Ki!==null&&ma(Ki)&&(Ki=null),Ji!==null&&ma(Ji)&&(Ji=null),ao.forEach(qf),lo.forEach(qf)}function uo(n,i){n.blockedOn===i&&(n.blockedOn=null,oc||(oc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gx)))}function fo(n){function i(h){return uo(h,n)}if(0<pa.length){uo(pa[0],n);for(var a=1;a<pa.length;a++){var c=pa[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Zi!==null&&uo(Zi,n),Ki!==null&&uo(Ki,n),Ji!==null&&uo(Ji,n),ao.forEach(i),lo.forEach(i),a=0;a<Qi.length;a++)c=Qi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Xf(a),a.blockedOn===null&&Qi.shift()}var ss=C.ReactCurrentBatchConfig,ga=!0;function jx(n,i,a,c){var h=Tt,m=ss.transition;ss.transition=null;try{Tt=1,ac(n,i,a,c)}finally{Tt=h,ss.transition=m}}function Wx(n,i,a,c){var h=Tt,m=ss.transition;ss.transition=null;try{Tt=4,ac(n,i,a,c)}finally{Tt=h,ss.transition=m}}function ac(n,i,a,c){if(ga){var h=lc(n,i,a,c);if(h===null)bc(n,i,c,xa,a),Wf(n,c);else if(Hx(h,n,i,a,c))c.stopPropagation();else if(Wf(n,c),i&4&&-1<Vx.indexOf(n)){for(;h!==null;){var m=wo(h);if(m!==null&&Vf(m),m=lc(n,i,a,c),m===null&&bc(n,i,c,xa,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else bc(n,i,c,null,a)}}var xa=null;function lc(n,i,a,c){if(xa=null,n=$(c),n=Rr(n),n!==null)if(i=mi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ca(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xa=n,null}function $f(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case Pe:return 1;case Oe:return 4;case je:case Ke:return 16;case ut:return 536870912;default:return 16}default:return 16}}var er=null,cc=null,va=null;function Yf(){if(va)return va;var n,i=cc,a=i.length,c,h="value"in er?er.value:er.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===h[m-c];c++);return va=h.slice(n,1<c?1-c:void 0)}function _a(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function Zf(){return!1}function On(n){function i(a,c,h,m,T){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(m):m[z]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ya:Zf,this.isPropagationStopped=Zf,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=On(os),ho=I({},os,{view:0,detail:0}),Xx=On(ho),dc,fc,po,Sa=I({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(dc=n.screenX-po.screenX,fc=n.screenY-po.screenY):fc=dc=0,po=n),dc)},movementY:function(n){return"movementY"in n?n.movementY:fc}}),Kf=On(Sa),qx=I({},Sa,{dataTransfer:0}),$x=On(qx),Yx=I({},ho,{relatedTarget:0}),hc=On(Yx),Zx=I({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=On(Zx),Jx=I({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Qx=On(Jx),e0=I({},os,{data:0}),Jf=On(e0),t0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=i0[n])?!!i[n]:!1}function pc(){return r0}var s0=I({},ho,{key:function(n){if(n.key){var i=t0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?n0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(n){return n.type==="keypress"?_a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),o0=On(s0),a0=I({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qf=On(a0),l0=I({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),c0=On(l0),u0=I({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=On(u0),f0=I({},Sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=On(f0),p0=[9,13,27,32],mc=d&&"CompositionEvent"in window,mo=null;d&&"documentMode"in document&&(mo=document.documentMode);var m0=d&&"TextEvent"in window&&!mo,eh=d&&(!mc||mo&&8<mo&&11>=mo),th=" ",nh=!1;function ih(n,i){switch(n){case"keyup":return p0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function g0(n,i){switch(n){case"compositionend":return rh(i);case"keypress":return i.which!==32?null:(nh=!0,th);case"textInput":return n=i.data,n===th&&nh?null:n;default:return null}}function x0(n,i){if(as)return n==="compositionend"||!mc&&ih(n,i)?(n=Yf(),va=cc=er=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return eh&&i.locale!=="ko"?null:i.data;default:return null}}var v0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!v0[n.type]:i==="textarea"}function oh(n,i,a,c){ze(c),i=Ta(i,"onChange"),0<i.length&&(a=new uc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var go=null,xo=null;function _0(n){wh(n,0)}function Ea(n){var i=fs(n);if(ve(i))return n}function y0(n,i){if(n==="change")return i}var ah=!1;if(d){var gc;if(d){var xc="oninput"in document;if(!xc){var lh=document.createElement("div");lh.setAttribute("oninput","return;"),xc=typeof lh.oninput=="function"}gc=xc}else gc=!1;ah=gc&&(!document.documentMode||9<document.documentMode)}function ch(){go&&(go.detachEvent("onpropertychange",uh),xo=go=null)}function uh(n){if(n.propertyName==="value"&&Ea(xo)){var i=[];oh(i,xo,n,$(n)),Cn(_0,i)}}function S0(n,i,a){n==="focusin"?(ch(),go=i,xo=a,go.attachEvent("onpropertychange",uh)):n==="focusout"&&ch()}function E0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ea(xo)}function M0(n,i){if(n==="click")return Ea(i)}function w0(n,i){if(n==="input"||n==="change")return Ea(i)}function b0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:b0;function vo(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!ni(n[h],i[h]))return!1}return!0}function dh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fh(n,i){var a=dh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dh(a)}}function hh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?hh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function ph(){for(var n=window,i=ge();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ge(n.document)}return i}function vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function T0(n){var i=ph(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&hh(a.ownerDocument.documentElement,a)){if(c!==null&&vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=fh(a,m);var T=fh(a,c);h&&T&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var C0=d&&"documentMode"in document&&11>=document.documentMode,ls=null,_c=null,_o=null,yc=!1;function mh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||ls==null||ls!==ge(c)||(c=ls,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),_o&&vo(_o,c)||(_o=c,c=Ta(_c,"onSelect"),0<c.length&&(i=new uc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ls)))}function Ma(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var cs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Sc={},gh={};d&&(gh=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function wa(n){if(Sc[n])return Sc[n];if(!cs[n])return n;var i=cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in gh)return Sc[n]=i[a];return n}var xh=wa("animationend"),vh=wa("animationiteration"),_h=wa("animationstart"),yh=wa("transitionend"),Sh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){Sh.set(n,i),l(i,[n])}for(var Ec=0;Ec<Eh.length;Ec++){var Mc=Eh[Ec],A0=Mc.toLowerCase(),R0=Mc[0].toUpperCase()+Mc.slice(1);tr(A0,"on"+R0)}tr(xh,"onAnimationEnd"),tr(vh,"onAnimationIteration"),tr(_h,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(yh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P0=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function Mh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,la(c,i,void 0,n),n.currentTarget=null}function wh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var z=c[T],G=z.instance,ce=z.currentTarget;if(z=z.listener,G!==m&&h.isPropagationStopped())break e;Mh(h,z,ce),m=G}else for(T=0;T<c.length;T++){if(z=c[T],G=z.instance,ce=z.currentTarget,z=z.listener,G!==m&&h.isPropagationStopped())break e;Mh(h,z,ce),m=G}}}if(Ar)throw n=$i,Ar=!1,$i=null,n}function kt(n,i){var a=i[Nc];a===void 0&&(a=i[Nc]=new Set);var c=n+"__bubble";a.has(c)||(bh(i,n,2,!1),a.add(c))}function wc(n,i,a){var c=0;i&&(c|=4),bh(a,n,c,i)}var ba="_reactListening"+Math.random().toString(36).slice(2);function So(n){if(!n[ba]){n[ba]=!0,r.forEach(function(a){a!=="selectionchange"&&(P0.has(a)||wc(a,!1,n),wc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ba]||(i[ba]=!0,wc("selectionchange",!1,i))}}function bh(n,i,a,c){switch($f(i)){case 1:var h=jx;break;case 4:h=Wx;break;default:h=ac}a=h.bind(null,i,a,n),h=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function bc(n,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var z=c.stateNode.containerInfo;if(z===h||z.nodeType===8&&z.parentNode===h)break;if(T===4)for(T=c.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;T=T.return}for(;z!==null;){if(T=Rr(z),T===null)return;if(G=T.tag,G===5||G===6){c=m=T;continue e}z=z.parentNode}}c=c.return}Cn(function(){var ce=m,be=$(a),Re=[];e:{var we=Sh.get(n);if(we!==void 0){var We=uc,Je=n;switch(n){case"keypress":if(_a(a)===0)break e;case"keydown":case"keyup":We=o0;break;case"focusin":Je="focus",We=hc;break;case"focusout":Je="blur",We=hc;break;case"beforeblur":case"afterblur":We=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=c0;break;case xh:case vh:case _h:We=Kx;break;case yh:We=d0;break;case"scroll":We=Xx;break;case"wheel":We=h0;break;case"copy":case"cut":case"paste":We=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Qf}var tt=(i&4)!==0,$t=!tt&&n==="scroll",te=tt?we!==null?we+"Capture":null:we;tt=[];for(var q=ce,se;q!==null;){se=q;var De=se.stateNode;if(se.tag===5&&De!==null&&(se=De,te!==null&&(De=Sn(q,te),De!=null&&tt.push(Eo(q,De,se)))),$t)break;q=q.return}0<tt.length&&(we=new We(we,Je,null,a,be),Re.push({event:we,listeners:tt}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",we&&a!==Nt&&(Je=a.relatedTarget||a.fromElement)&&(Rr(Je)||Je[Ai]))break e;if((We||we)&&(we=be.window===be?be:(we=be.ownerDocument)?we.defaultView||we.parentWindow:window,We?(Je=a.relatedTarget||a.toElement,We=ce,Je=Je?Rr(Je):null,Je!==null&&($t=mi(Je),Je!==$t||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(We=null,Je=ce),We!==Je)){if(tt=Kf,De="onMouseLeave",te="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(tt=Qf,De="onPointerLeave",te="onPointerEnter",q="pointer"),$t=We==null?we:fs(We),se=Je==null?we:fs(Je),we=new tt(De,q+"leave",We,a,be),we.target=$t,we.relatedTarget=se,De=null,Rr(be)===ce&&(tt=new tt(te,q+"enter",Je,a,be),tt.target=se,tt.relatedTarget=$t,De=tt),$t=De,We&&Je)t:{for(tt=We,te=Je,q=0,se=tt;se;se=us(se))q++;for(se=0,De=te;De;De=us(De))se++;for(;0<q-se;)tt=us(tt),q--;for(;0<se-q;)te=us(te),se--;for(;q--;){if(tt===te||te!==null&&tt===te.alternate)break t;tt=us(tt),te=us(te)}tt=null}else tt=null;We!==null&&Th(Re,we,We,tt,!1),Je!==null&&$t!==null&&Th(Re,$t,Je,tt,!0)}}e:{if(we=ce?fs(ce):window,We=we.nodeName&&we.nodeName.toLowerCase(),We==="select"||We==="input"&&we.type==="file")var nt=y0;else if(sh(we))if(ah)nt=w0;else{nt=E0;var st=S0}else(We=we.nodeName)&&We.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(nt=M0);if(nt&&(nt=nt(n,ce))){oh(Re,nt,a,be);break e}st&&st(n,we,ce),n==="focusout"&&(st=we._wrapperState)&&st.controlled&&we.type==="number"&&Qe(we,"number",we.value)}switch(st=ce?fs(ce):window,n){case"focusin":(sh(st)||st.contentEditable==="true")&&(ls=st,_c=ce,_o=null);break;case"focusout":_o=_c=ls=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,mh(Re,a,be);break;case"selectionchange":if(C0)break;case"keydown":case"keyup":mh(Re,a,be)}var ot;if(mc)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else as?ih(n,a)&&(dt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(eh&&a.locale!=="ko"&&(as||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&as&&(ot=Yf()):(er=be,cc="value"in er?er.value:er.textContent,as=!0)),st=Ta(ce,dt),0<st.length&&(dt=new Jf(dt,n,null,a,be),Re.push({event:dt,listeners:st}),ot?dt.data=ot:(ot=rh(a),ot!==null&&(dt.data=ot)))),(ot=m0?g0(n,a):x0(n,a))&&(ce=Ta(ce,"onBeforeInput"),0<ce.length&&(be=new Jf("onBeforeInput","beforeinput",null,a,be),Re.push({event:be,listeners:ce}),be.data=ot))}wh(Re,i)})}function Eo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ta(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Sn(n,a),m!=null&&c.unshift(Eo(n,m,h)),m=Sn(n,i),m!=null&&c.push(Eo(n,m,h))),n=n.return}return c}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Th(n,i,a,c,h){for(var m=i._reactName,T=[];a!==null&&a!==c;){var z=a,G=z.alternate,ce=z.stateNode;if(G!==null&&G===c)break;z.tag===5&&ce!==null&&(z=ce,h?(G=Sn(a,m),G!=null&&T.unshift(Eo(a,G,z))):h||(G=Sn(a,m),G!=null&&T.push(Eo(a,G,z)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var N0=/\r\n?/g,D0=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(N0,`
`).replace(D0,"")}function Ca(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Aa(){}var Tc=null,Cc=null;function Ac(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,L0=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,F0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(n){return Ah.resolve(null).then(n).catch(I0)}:Rc;function I0(n){setTimeout(function(){throw n})}function Pc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),fo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);fo(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Rh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),xi="__reactFiber$"+ds,Mo="__reactProps$"+ds,Ai="__reactContainer$"+ds,Nc="__reactEvents$"+ds,U0="__reactListeners$"+ds,k0="__reactHandles$"+ds;function Rr(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ai]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Rh(n);n!==null;){if(a=n[xi])return a;n=Rh(n)}return i}n=a,a=n.parentNode}return null}function wo(n){return n=n[xi]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[Mo]||null}var Dc=[],hs=-1;function ir(n){return{current:n}}function Ot(n){0>hs||(n.current=Dc[hs],Dc[hs]=null,hs--)}function It(n,i){hs++,Dc[hs]=n.current,n.current=i}var rr={},mn=ir(rr),An=ir(!1),Pr=rr;function ps(n,i){var a=n.type.contextTypes;if(!a)return rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Rn(n){return n=n.childContextTypes,n!=null}function Pa(){Ot(An),Ot(mn)}function Ph(n,i,a){if(mn.current!==rr)throw Error(t(168));It(mn,i),It(An,a)}function Nh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ie(n)||"Unknown",h));return I({},a,c)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Pr=mn.current,It(mn,n),It(An,An.current),!0}function Dh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Nh(n,i,Pr),c.__reactInternalMemoizedMergedChildContext=n,Ot(An),Ot(mn),It(mn,n)):Ot(An),It(An,a)}var Ri=null,Da=!1,Lc=!1;function Lh(n){Ri===null?Ri=[n]:Ri.push(n)}function O0(n){Da=!0,Lh(n)}function sr(){if(!Lc&&Ri!==null){Lc=!0;var n=0,i=Tt;try{var a=Ri;for(Tt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ri=null,Da=!1}catch(h){throw Ri!==null&&(Ri=Ri.slice(n+1)),ha(Pe,sr),h}finally{Tt=i,Lc=!1}}return null}var ms=[],gs=0,La=null,Fa=0,Wn=[],Xn=0,Nr=null,Pi=1,Ni="";function Dr(n,i){ms[gs++]=Fa,ms[gs++]=La,La=n,Fa=i}function Fh(n,i,a){Wn[Xn++]=Pi,Wn[Xn++]=Ni,Wn[Xn++]=Nr,Nr=n;var c=Pi;n=Ni;var h=32-mt(c)-1;c&=~(1<<h),a+=1;var m=32-mt(i)+h;if(30<m){var T=h-h%5;m=(c&(1<<T)-1).toString(32),c>>=T,h-=T,Pi=1<<32-mt(i)+h|a<<h|c,Ni=m+n}else Pi=1<<m|a<<h|c,Ni=n}function Fc(n){n.return!==null&&(Dr(n,1),Fh(n,1,0))}function Ic(n){for(;n===La;)La=ms[--gs],ms[gs]=null,Fa=ms[--gs],ms[gs]=null;for(;n===Nr;)Nr=Wn[--Xn],Wn[Xn]=null,Ni=Wn[--Xn],Wn[Xn]=null,Pi=Wn[--Xn],Wn[Xn]=null}var Bn=null,zn=null,Vt=!1,ii=null;function Ih(n,i){var a=Zn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Uh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,zn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Nr!==null?{id:Pi,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Zn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,zn=null,!0):!1;default:return!1}}function Uc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kc(n){if(Vt){var i=zn;if(i){var a=i;if(!Uh(n,i)){if(Uc(n))throw Error(t(418));i=nr(a.nextSibling);var c=Bn;i&&Uh(n,i)?Ih(c,a):(n.flags=n.flags&-4097|2,Vt=!1,Bn=n)}}else{if(Uc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Bn=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Ia(n){if(n!==Bn)return!1;if(!Vt)return kh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ac(n.type,n.memoizedProps)),i&&(i=zn)){if(Uc(n))throw Oh(),Error(t(418));for(;i;)Ih(n,i),i=nr(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){zn=nr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=Bn?nr(n.stateNode.nextSibling):null;return!0}function Oh(){for(var n=zn;n;)n=nr(n.nextSibling)}function xs(){zn=Bn=null,Vt=!1}function Oc(n){ii===null?ii=[n]:ii.push(n)}var B0=C.ReactCurrentBatchConfig;function bo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var z=h.refs;T===null?delete z[m]:z[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ua(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Bh(n){var i=n._init;return i(n._payload)}function zh(n){function i(te,q){if(n){var se=te.deletions;se===null?(te.deletions=[q],te.flags|=16):se.push(q)}}function a(te,q){if(!n)return null;for(;q!==null;)i(te,q),q=q.sibling;return null}function c(te,q){for(te=new Map;q!==null;)q.key!==null?te.set(q.key,q):te.set(q.index,q),q=q.sibling;return te}function h(te,q){return te=hr(te,q),te.index=0,te.sibling=null,te}function m(te,q,se){return te.index=se,n?(se=te.alternate,se!==null?(se=se.index,se<q?(te.flags|=2,q):se):(te.flags|=2,q)):(te.flags|=1048576,q)}function T(te){return n&&te.alternate===null&&(te.flags|=2),te}function z(te,q,se,De){return q===null||q.tag!==6?(q=Ru(se,te.mode,De),q.return=te,q):(q=h(q,se),q.return=te,q)}function G(te,q,se,De){var nt=se.type;return nt===V?be(te,q,se.props.children,De,se.key):q!==null&&(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ae&&Bh(nt)===q.type)?(De=h(q,se.props),De.ref=bo(te,q,se),De.return=te,De):(De=ol(se.type,se.key,se.props,null,te.mode,De),De.ref=bo(te,q,se),De.return=te,De)}function ce(te,q,se,De){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=Pu(se,te.mode,De),q.return=te,q):(q=h(q,se.children||[]),q.return=te,q)}function be(te,q,se,De,nt){return q===null||q.tag!==7?(q=zr(se,te.mode,De,nt),q.return=te,q):(q=h(q,se),q.return=te,q)}function Re(te,q,se){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Ru(""+q,te.mode,se),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case U:return se=ol(q.type,q.key,q.props,null,te.mode,se),se.ref=bo(te,null,q),se.return=te,se;case O:return q=Pu(q,te.mode,se),q.return=te,q;case ae:var De=q._init;return Re(te,De(q._payload),se)}if(Ne(q)||de(q))return q=zr(q,te.mode,se,null),q.return=te,q;Ua(te,q)}return null}function we(te,q,se,De){var nt=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return nt!==null?null:z(te,q,""+se,De);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case U:return se.key===nt?G(te,q,se,De):null;case O:return se.key===nt?ce(te,q,se,De):null;case ae:return nt=se._init,we(te,q,nt(se._payload),De)}if(Ne(se)||de(se))return nt!==null?null:be(te,q,se,De,null);Ua(te,se)}return null}function We(te,q,se,De,nt){if(typeof De=="string"&&De!==""||typeof De=="number")return te=te.get(se)||null,z(q,te,""+De,nt);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case U:return te=te.get(De.key===null?se:De.key)||null,G(q,te,De,nt);case O:return te=te.get(De.key===null?se:De.key)||null,ce(q,te,De,nt);case ae:var st=De._init;return We(te,q,se,st(De._payload),nt)}if(Ne(De)||de(De))return te=te.get(se)||null,be(q,te,De,nt,null);Ua(q,De)}return null}function Je(te,q,se,De){for(var nt=null,st=null,ot=q,dt=q=0,an=null;ot!==null&&dt<se.length;dt++){ot.index>dt?(an=ot,ot=null):an=ot.sibling;var Rt=we(te,ot,se[dt],De);if(Rt===null){ot===null&&(ot=an);break}n&&ot&&Rt.alternate===null&&i(te,ot),q=m(Rt,q,dt),st===null?nt=Rt:st.sibling=Rt,st=Rt,ot=an}if(dt===se.length)return a(te,ot),Vt&&Dr(te,dt),nt;if(ot===null){for(;dt<se.length;dt++)ot=Re(te,se[dt],De),ot!==null&&(q=m(ot,q,dt),st===null?nt=ot:st.sibling=ot,st=ot);return Vt&&Dr(te,dt),nt}for(ot=c(te,ot);dt<se.length;dt++)an=We(ot,te,dt,se[dt],De),an!==null&&(n&&an.alternate!==null&&ot.delete(an.key===null?dt:an.key),q=m(an,q,dt),st===null?nt=an:st.sibling=an,st=an);return n&&ot.forEach(function(pr){return i(te,pr)}),Vt&&Dr(te,dt),nt}function tt(te,q,se,De){var nt=de(se);if(typeof nt!="function")throw Error(t(150));if(se=nt.call(se),se==null)throw Error(t(151));for(var st=nt=null,ot=q,dt=q=0,an=null,Rt=se.next();ot!==null&&!Rt.done;dt++,Rt=se.next()){ot.index>dt?(an=ot,ot=null):an=ot.sibling;var pr=we(te,ot,Rt.value,De);if(pr===null){ot===null&&(ot=an);break}n&&ot&&pr.alternate===null&&i(te,ot),q=m(pr,q,dt),st===null?nt=pr:st.sibling=pr,st=pr,ot=an}if(Rt.done)return a(te,ot),Vt&&Dr(te,dt),nt;if(ot===null){for(;!Rt.done;dt++,Rt=se.next())Rt=Re(te,Rt.value,De),Rt!==null&&(q=m(Rt,q,dt),st===null?nt=Rt:st.sibling=Rt,st=Rt);return Vt&&Dr(te,dt),nt}for(ot=c(te,ot);!Rt.done;dt++,Rt=se.next())Rt=We(ot,te,dt,Rt.value,De),Rt!==null&&(n&&Rt.alternate!==null&&ot.delete(Rt.key===null?dt:Rt.key),q=m(Rt,q,dt),st===null?nt=Rt:st.sibling=Rt,st=Rt);return n&&ot.forEach(function(vv){return i(te,vv)}),Vt&&Dr(te,dt),nt}function $t(te,q,se,De){if(typeof se=="object"&&se!==null&&se.type===V&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case U:e:{for(var nt=se.key,st=q;st!==null;){if(st.key===nt){if(nt=se.type,nt===V){if(st.tag===7){a(te,st.sibling),q=h(st,se.props.children),q.return=te,te=q;break e}}else if(st.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ae&&Bh(nt)===st.type){a(te,st.sibling),q=h(st,se.props),q.ref=bo(te,st,se),q.return=te,te=q;break e}a(te,st);break}else i(te,st);st=st.sibling}se.type===V?(q=zr(se.props.children,te.mode,De,se.key),q.return=te,te=q):(De=ol(se.type,se.key,se.props,null,te.mode,De),De.ref=bo(te,q,se),De.return=te,te=De)}return T(te);case O:e:{for(st=se.key;q!==null;){if(q.key===st)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){a(te,q.sibling),q=h(q,se.children||[]),q.return=te,te=q;break e}else{a(te,q);break}else i(te,q);q=q.sibling}q=Pu(se,te.mode,De),q.return=te,te=q}return T(te);case ae:return st=se._init,$t(te,q,st(se._payload),De)}if(Ne(se))return Je(te,q,se,De);if(de(se))return tt(te,q,se,De);Ua(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,q!==null&&q.tag===6?(a(te,q.sibling),q=h(q,se),q.return=te,te=q):(a(te,q),q=Ru(se,te.mode,De),q.return=te,te=q),T(te)):a(te,q)}return $t}var vs=zh(!0),Vh=zh(!1),ka=ir(null),Oa=null,_s=null,Bc=null;function zc(){Bc=_s=Oa=null}function Vc(n){var i=ka.current;Ot(ka),n._currentValue=i}function Hc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ys(n,i){Oa=n,Bc=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(Bc!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Oa===null)throw Error(t(308));_s=n,Oa.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Lr=null;function Gc(n){Lr===null?Lr=[n]:Lr.push(n)}function Hh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Gc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Di(n,c)}function Di(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var or=!1;function jc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Di(n,a)}return h=c.interleaved,h===null?(i.next=i,Gc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Di(n,a)}function Ba(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rn(n,a)}}function jh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function za(n,i,a,c){var h=n.updateQueue;or=!1;var m=h.firstBaseUpdate,T=h.lastBaseUpdate,z=h.shared.pending;if(z!==null){h.shared.pending=null;var G=z,ce=G.next;G.next=null,T===null?m=ce:T.next=ce,T=G;var be=n.alternate;be!==null&&(be=be.updateQueue,z=be.lastBaseUpdate,z!==T&&(z===null?be.firstBaseUpdate=ce:z.next=ce,be.lastBaseUpdate=G))}if(m!==null){var Re=h.baseState;T=0,be=ce=G=null,z=m;do{var we=z.lane,We=z.eventTime;if((c&we)===we){be!==null&&(be=be.next={eventTime:We,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Je=n,tt=z;switch(we=i,We=a,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){Re=Je.call(We,Re,we);break e}Re=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,we=typeof Je=="function"?Je.call(We,Re,we):Je,we==null)break e;Re=I({},Re,we);break e;case 2:or=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,we=h.effects,we===null?h.effects=[z]:we.push(z))}else We={eventTime:We,lane:we,tag:z.tag,payload:z.payload,callback:z.callback,next:null},be===null?(ce=be=We,G=Re):be=be.next=We,T|=we;if(z=z.next,z===null){if(z=h.shared.pending,z===null)break;we=z,z=we.next,we.next=null,h.lastBaseUpdate=we,h.shared.pending=null}}while(!0);if(be===null&&(G=Re),h.baseState=G,h.firstBaseUpdate=ce,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do T|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);Ur|=T,n.lanes=T,n.memoizedState=Re}}function Wh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var To={},vi=ir(To),Co=ir(To),Ao=ir(To);function Fr(n){if(n===To)throw Error(t(174));return n}function Wc(n,i){switch(It(Ao,i),It(Co,n),It(vi,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ye(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ye(i,n)}Ot(vi),It(vi,i)}function Ss(){Ot(vi),Ot(Co),Ot(Ao)}function Xh(n){Fr(Ao.current);var i=Fr(vi.current),a=Ye(i,n.type);i!==a&&(It(Co,n),It(vi,a))}function Xc(n){Co.current===n&&(Ot(vi),Ot(Co))}var Ht=ir(0);function Va(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qc=[];function $c(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var Ha=C.ReactCurrentDispatcher,Yc=C.ReactCurrentBatchConfig,Ir=0,Gt=null,Jt=null,sn=null,Ga=!1,Ro=!1,Po=0,z0=0;function gn(){throw Error(t(321))}function Zc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ni(n[a],i[a]))return!1;return!0}function Kc(n,i,a,c,h,m){if(Ir=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ha.current=n===null||n.memoizedState===null?j0:W0,n=a(c,h),Ro){m=0;do{if(Ro=!1,Po=0,25<=m)throw Error(t(301));m+=1,sn=Jt=null,i.updateQueue=null,Ha.current=X0,n=a(c,h)}while(Ro)}if(Ha.current=Xa,i=Jt!==null&&Jt.next!==null,Ir=0,sn=Jt=Gt=null,Ga=!1,i)throw Error(t(300));return n}function Jc(){var n=Po!==0;return Po=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function $n(){if(Jt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function No(n,i){return typeof i=="function"?i(n):i}function Qc(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Jt,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var T=h.next;h.next=m.next,m.next=T}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var z=T=null,G=null,ce=m;do{var be=ce.lane;if((Ir&be)===be)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Re={lane:be,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(z=G=Re,T=c):G=G.next=Re,Gt.lanes|=be,Ur|=be}ce=ce.next}while(ce!==null&&ce!==m);G===null?T=c:G.next=z,ni(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do m=h.lane,Gt.lanes|=m,Ur|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function eu(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do m=n(m,T.action),T=T.next;while(T!==h);ni(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function qh(){}function $h(n,i){var a=Gt,c=$n(),h=i(),m=!ni(c.memoizedState,h);if(m&&(c.memoizedState=h,Pn=!0),c=c.queue,tu(Kh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Do(9,Zh.bind(null,a,c,h,i),void 0,null),on===null)throw Error(t(349));(Ir&30)!==0||Yh(a,i,h)}return h}function Yh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Jh(i)&&Qh(n)}function Kh(n,i,a){return a(function(){Jh(i)&&Qh(n)})}function Jh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ni(n,a)}catch{return!0}}function Qh(n){var i=Di(n,1);i!==null&&ai(i,n,1,-1)}function ep(n){var i=_i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:n},i.queue=n,n=n.dispatch=G0.bind(null,Gt,n),[i.memoizedState,n]}function Do(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function tp(){return $n().memoizedState}function ja(n,i,a,c){var h=_i();Gt.flags|=n,h.memoizedState=Do(1|i,a,void 0,c===void 0?null:c)}function Wa(n,i,a,c){var h=$n();c=c===void 0?null:c;var m=void 0;if(Jt!==null){var T=Jt.memoizedState;if(m=T.destroy,c!==null&&Zc(c,T.deps)){h.memoizedState=Do(i,a,m,c);return}}Gt.flags|=n,h.memoizedState=Do(1|i,a,m,c)}function np(n,i){return ja(8390656,8,n,i)}function tu(n,i){return Wa(2048,8,n,i)}function ip(n,i){return Wa(4,2,n,i)}function rp(n,i){return Wa(4,4,n,i)}function sp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,Wa(4,4,sp.bind(null,i,n),a)}function nu(){}function ap(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function lp(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function cp(n,i,a){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(ni(a,i)||(a=Ft(),Gt.lanes|=a,Ur|=a,n.baseState=!0),i)}function V0(n,i){var a=Tt;Tt=a!==0&&4>a?a:4,n(!0);var c=Yc.transition;Yc.transition={};try{n(!1),i()}finally{Tt=a,Yc.transition=c}}function up(){return $n().memoizedState}function H0(n,i,a){var c=dr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},dp(n))fp(i,a);else if(a=Hh(n,i,a,c),a!==null){var h=wn();ai(a,n,c,h),hp(a,i,c)}}function G0(n,i,a){var c=dr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(dp(n))fp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,z=m(T,a);if(h.hasEagerState=!0,h.eagerState=z,ni(z,T)){var G=i.interleaved;G===null?(h.next=h,Gc(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=Hh(n,i,h,c),a!==null&&(h=wn(),ai(a,n,c,h),hp(a,i,c))}}function dp(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function fp(n,i){Ro=Ga=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function hp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rn(n,a)}}var Xa={readContext:qn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},j0={readContext:qn,useCallback:function(n,i){return _i().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:np,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ja(4194308,4,sp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return ja(4,2,n,i)},useMemo:function(n,i){var a=_i();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=_i();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=H0.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=_i();return n={current:n},i.memoizedState=n},useState:ep,useDebugValue:nu,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=ep(!1),i=n[0];return n=V0.bind(null,n[1]),_i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,h=_i();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));(Ir&30)!==0||Yh(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,np(Kh.bind(null,c,m,n),[n]),c.flags|=2048,Do(9,Zh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=_i(),i=on.identifierPrefix;if(Vt){var a=Ni,c=Pi;a=(c&~(1<<32-mt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Po++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=z0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},W0={readContext:qn,useCallback:ap,useContext:qn,useEffect:tu,useImperativeHandle:op,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:Qc,useRef:tp,useState:function(){return Qc(No)},useDebugValue:nu,useDeferredValue:function(n){var i=$n();return cp(i,Jt.memoizedState,n)},useTransition:function(){var n=Qc(No)[0],i=$n().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:$h,useId:up,unstable_isNewReconciler:!1},X0={readContext:qn,useCallback:ap,useContext:qn,useEffect:tu,useImperativeHandle:op,useInsertionEffect:ip,useLayoutEffect:rp,useMemo:lp,useReducer:eu,useRef:tp,useState:function(){return eu(No)},useDebugValue:nu,useDeferredValue:function(n){var i=$n();return Jt===null?i.memoizedState=n:cp(i,Jt.memoizedState,n)},useTransition:function(){var n=eu(No)[0],i=$n().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:$h,useId:up,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=I({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function iu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:I({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qa={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=wn(),h=dr(n),m=Li(c,h);m.payload=i,a!=null&&(m.callback=a),i=ar(n,m,h),i!==null&&(ai(i,n,h,c),Ba(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=wn(),h=dr(n),m=Li(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ar(n,m,h),i!==null&&(ai(i,n,h,c),Ba(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),c=dr(n),h=Li(a,c);h.tag=2,i!=null&&(h.callback=i),i=ar(n,h,c),i!==null&&(ai(i,n,c,a),Ba(i,n,c))}};function pp(n,i,a,c,h,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!vo(a,c)||!vo(h,m):!0}function mp(n,i,a){var c=!1,h=rr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(h=Rn(i)?Pr:mn.current,c=i.contextTypes,m=(c=c!=null)?ps(n,h):rr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function gp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&qa.enqueueReplaceState(i,i.state,null)}function ru(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},jc(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=qn(m):(m=Rn(i)?Pr:mn.current,h.context=ps(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(iu(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&qa.enqueueReplaceState(h,h.state,null),za(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var a="",c=i;do a+=re(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function su(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ou(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var q0=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,Su=c),ou(n,i)},a}function vp(n,i,a){a=Li(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){ou(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){ou(n,i),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function _p(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new q0;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=av.bind(null,n,i,a),i.then(n,n))}function yp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Sp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Li(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var $0=C.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,c){i.child=n===null?Vh(i,null,a,c):vs(i,n.child,a,c)}function Ep(n,i,a,c,h){a=a.render;var m=i.ref;return ys(i,h),c=Kc(n,i,a,c,m,h),a=Jc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Fi(n,i,h)):(Vt&&a&&Fc(i),i.flags|=1,Mn(n,i,c,h),i.child)}function Mp(n,i,a,c,h){if(n===null){var m=a.type;return typeof m=="function"&&!Au(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,wp(n,i,m,c,h)):(n=ol(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(T,c)&&n.ref===i.ref)return Fi(n,i,h)}return i.flags|=1,n=hr(m,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,a,c,h){if(n!==null){var m=n.memoizedProps;if(vo(m,c)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,Fi(n,i,h)}return au(n,i,a,c,h)}function bp(n,i,a){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(ws,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(ws,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,It(ws,Vn),Vn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,It(ws,Vn),Vn|=c;return Mn(n,i,h,a),i.child}function Tp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function au(n,i,a,c,h){var m=Rn(a)?Pr:mn.current;return m=ps(i,m),ys(i,h),a=Kc(n,i,a,c,m,h),c=Jc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Fi(n,i,h)):(Vt&&c&&Fc(i),i.flags|=1,Mn(n,i,a,h),i.child)}function Cp(n,i,a,c,h){if(Rn(a)){var m=!0;Na(i)}else m=!1;if(ys(i,h),i.stateNode===null)Ya(n,i),mp(i,a,c),ru(i,a,c,h),c=!0;else if(n===null){var T=i.stateNode,z=i.memoizedProps;T.props=z;var G=T.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=qn(ce):(ce=Rn(a)?Pr:mn.current,ce=ps(i,ce));var be=a.getDerivedStateFromProps,Re=typeof be=="function"||typeof T.getSnapshotBeforeUpdate=="function";Re||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==c||G!==ce)&&gp(i,T,c,ce),or=!1;var we=i.memoizedState;T.state=we,za(i,c,T,h),G=i.memoizedState,z!==c||we!==G||An.current||or?(typeof be=="function"&&(iu(i,a,be,c),G=i.memoizedState),(z=or||pp(i,a,z,c,we,G,ce))?(Re||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),T.props=c,T.state=G,T.context=ce,c=z):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Gh(n,i),z=i.memoizedProps,ce=i.type===i.elementType?z:ri(i.type,z),T.props=ce,Re=i.pendingProps,we=T.context,G=a.contextType,typeof G=="object"&&G!==null?G=qn(G):(G=Rn(a)?Pr:mn.current,G=ps(i,G));var We=a.getDerivedStateFromProps;(be=typeof We=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Re||we!==G)&&gp(i,T,c,G),or=!1,we=i.memoizedState,T.state=we,za(i,c,T,h);var Je=i.memoizedState;z!==Re||we!==Je||An.current||or?(typeof We=="function"&&(iu(i,a,We,c),Je=i.memoizedState),(ce=or||pp(i,a,ce,c,we,Je,G)||!1)?(be||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Je,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Je,G)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),T.props=c,T.state=Je,T.context=G,c=ce):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return lu(n,i,a,c,m,h)}function lu(n,i,a,c,h,m){Tp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return h&&Dh(i,a,!1),Fi(n,i,m);c=i.stateNode,$0.current=i;var z=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=vs(i,n.child,null,m),i.child=vs(i,null,z,m)):Mn(n,i,z,m),i.memoizedState=c.state,h&&Dh(i,a,!0),i.child}function Ap(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),Wc(n,i.containerInfo)}function Rp(n,i,a,c,h){return xs(),Oc(h),i.flags|=256,Mn(n,i,a,c),i.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function uu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,h=Ht.current,m=!1,T=(i.flags&128)!==0,z;if((z=T)||(z=n!==null&&n.memoizedState===null?!1:(h&2)!==0),z?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),It(Ht,h&1),n===null)return kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=al(T,c,0,null),n=zr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=uu(a),i.memoizedState=cu,n):du(i,T));if(h=n.memoizedState,h!==null&&(z=h.dehydrated,z!==null))return Y0(n,i,T,c,z,h,a);if(m){m=c.fallback,T=i.mode,h=n.child,z=h.sibling;var G={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=hr(h,G),c.subtreeFlags=h.subtreeFlags&14680064),z!==null?m=hr(z,m):(m=zr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?uu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=cu,c}return m=n.child,n=m.sibling,c=hr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function du(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $a(n,i,a,c){return c!==null&&Oc(c),vs(i,n.child,null,a),n=du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Y0(n,i,a,c,h,m,T){if(a)return i.flags&256?(i.flags&=-257,c=su(Error(t(422))),$a(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=al({mode:"visible",children:c.children},h,0,null),m=zr(m,h,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&vs(i,n.child,null,T),i.child.memoizedState=uu(T),i.memoizedState=cu,m);if((i.mode&1)===0)return $a(n,i,T,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var z=c.dgst;return c=z,m=Error(t(419)),c=su(m,c,void 0),$a(n,i,T,c)}if(z=(T&n.childLanes)!==0,Pn||z){if(c=on,c!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|T))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Di(n,h),ai(c,n,h,-1))}return Cu(),c=su(Error(t(421))),$a(n,i,T,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=lv.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,zn=nr(h.nextSibling),Bn=i,Vt=!0,ii=null,n!==null&&(Wn[Xn++]=Pi,Wn[Xn++]=Ni,Wn[Xn++]=Nr,Pi=n.id,Ni=n.overflow,Nr=i),i=du(i,c.children),i.flags|=4096,i)}function Np(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Hc(n.return,i,a)}function fu(n,i,a,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function Dp(n,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,a,i);else if(n.tag===19)Np(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(It(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Va(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),fu(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Va(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}fu(i,!0,a,null,m);break;case"together":fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ya(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=hr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=hr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Z0(n,i,a){switch(i.tag){case 3:Ap(i),xs();break;case 5:Xh(i);break;case 1:Rn(i.type)&&Na(i);break;case 4:Wc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;It(ka,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(It(Ht,Ht.current&1),n=Fi(n,i,a),n!==null?n.sibling:null);It(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Dp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),It(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,bp(n,i,a)}return Fi(n,i,a)}var Lp,hu,Fp,Ip;Lp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hu=function(){},Fp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Fr(vi.current);var m=null;switch(a){case"input":h=D(n,h),c=D(n,c),m=[];break;case"select":h=I({},h,{value:void 0}),c=I({},c,{value:void 0}),m=[];break;case"textarea":h=A(n,h),c=A(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Aa)}vt(a,c);var T;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var z=h[ce];for(T in z)z.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?m||(m=[]):(m=m||[]).push(ce,null));for(ce in c){var G=c[ce];if(z=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&G!==z&&(G!=null||z!=null))if(ce==="style")if(z){for(T in z)!z.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in G)G.hasOwnProperty(T)&&z[T]!==G[T]&&(a||(a={}),a[T]=G[T])}else a||(m||(m=[]),m.push(ce,a)),a=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,z=z?z.__html:void 0,G!=null&&z!==G&&(m=m||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(m=m||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&kt("scroll",n),m||z===G||(m=[])):(m=m||[]).push(ce,G))}a&&(m=m||[]).push("style",a);var ce=m;(i.updateQueue=ce)&&(i.flags|=4)}},Ip=function(n,i,a,c){a!==c&&(i.flags|=4)};function Lo(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function K0(n,i,a){var c=i.pendingProps;switch(Ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Rn(i.type)&&Pa(),xn(i),null;case 3:return c=i.stateNode,Ss(),Ot(An),Ot(mn),$c(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ia(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(wu(ii),ii=null))),hu(n,i),xn(i),null;case 5:Xc(i);var h=Fr(Ao.current);if(a=i.type,n!==null&&i.stateNode!=null)Fp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return xn(i),null}if(n=Fr(vi.current),Ia(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[xi]=i,c[Mo]=m,n=(i.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(h=0;h<yo.length;h++)kt(yo[h],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":Ue(c,m),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},kt("invalid",c);break;case"textarea":ee(c,m),kt("invalid",c)}vt(a,m),h=null;for(var T in m)if(m.hasOwnProperty(T)){var z=m[T];T==="children"?typeof z=="string"?c.textContent!==z&&(m.suppressHydrationWarning!==!0&&Ca(c.textContent,z,n),h=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(m.suppressHydrationWarning!==!0&&Ca(c.textContent,z,n),h=["children",""+z]):o.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&kt("scroll",c)}switch(a){case"input":$e(c),Ce(c,m,!0);break;case"textarea":$e(c),Me(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Aa)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_e(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[xi]=i,n[Mo]=c,Lp(n,i,!1,!1),i.stateNode=n;e:{switch(T=ht(a,c),a){case"dialog":kt("cancel",n),kt("close",n),h=c;break;case"iframe":case"object":case"embed":kt("load",n),h=c;break;case"video":case"audio":for(h=0;h<yo.length;h++)kt(yo[h],n);h=c;break;case"source":kt("error",n),h=c;break;case"img":case"image":case"link":kt("error",n),kt("load",n),h=c;break;case"details":kt("toggle",n),h=c;break;case"input":Ue(n,c),h=D(n,c),kt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=I({},c,{value:void 0}),kt("invalid",n);break;case"textarea":ee(n,c),h=A(n,c),kt("invalid",n);break;default:h=c}vt(a,h),z=h;for(m in z)if(z.hasOwnProperty(m)){var G=z[m];m==="style"?ct(n,G):m==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&He(n,G)):m==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&ft(n,G):typeof G=="number"&&ft(n,""+G):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?G!=null&&m==="onScroll"&&kt("scroll",n):G!=null&&F(n,m,G,T))}switch(a){case"input":$e(n),Ce(n,c,!1);break;case"textarea":$e(n),Me(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?L(n,!!c.multiple,m,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Aa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(n&&i.stateNode!=null)Ip(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(Ao.current),Fr(vi.current),Ia(i)){if(c=i.stateNode,a=i.memoizedProps,c[xi]=i,(m=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:Ca(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ca(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return xn(i),null;case 13:if(Ot(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Oh(),xs(),i.flags|=98560,m=!1;else if(m=Ia(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[xi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),m=!1}else ii!==null&&(wu(ii),ii=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):Cu())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Ss(),hu(n,i),n===null&&So(i.stateNode.containerInfo),xn(i),null;case 10:return Vc(i.type._context),xn(i),null;case 17:return Rn(i.type)&&Pa(),xn(i),null;case 19:if(Ot(Ht),m=i.memoizedState,m===null)return xn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Lo(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Va(n),T!==null){for(i.flags|=128,Lo(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&ne()>bs&&(i.flags|=128,c=!0,Lo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Va(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Vt)return xn(i),null}else 2*ne()-m.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,c=!0,Lo(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=ne(),i.sibling=null,a=Ht.current,It(Ht,c?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return Tu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function J0(n,i){switch(Ic(i),i.tag){case 1:return Rn(i.type)&&Pa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),Ot(An),Ot(mn),$c(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xc(i),null;case 13:if(Ot(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return Ss(),null;case 10:return Vc(i.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Za=!1,vn=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Ms(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){qt(n,i,c)}else a.current=null}function pu(n,i,a){try{a()}catch(c){qt(n,i,c)}}var Up=!1;function ev(n,i){if(Tc=ga,n=ph(),vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,z=-1,G=-1,ce=0,be=0,Re=n,we=null;t:for(;;){for(var We;Re!==a||h!==0&&Re.nodeType!==3||(z=T+h),Re!==m||c!==0&&Re.nodeType!==3||(G=T+c),Re.nodeType===3&&(T+=Re.nodeValue.length),(We=Re.firstChild)!==null;)we=Re,Re=We;for(;;){if(Re===n)break t;if(we===a&&++ce===h&&(z=T),we===m&&++be===c&&(G=T),(We=Re.nextSibling)!==null)break;Re=we,we=Re.parentNode}Re=We}a=z===-1||G===-1?null:{start:z,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cc={focusedElem:n,selectionRange:a},ga=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,$t=Je.memoizedState,te=i.stateNode,q=te.getSnapshotBeforeUpdate(i.elementType===i.type?tt:ri(i.type,tt),$t);te.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){qt(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return Je=Up,Up=!1,Je}function Fo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&pu(i,a,m)}h=h.next}while(h!==c)}}function Ka(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function mu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[Mo],delete i[Nc],delete i[U0],delete i[k0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Op(n){return n.tag===5||n.tag===3||n.tag===4}function Bp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Op(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Aa));else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,a),n=n.sibling;n!==null;)gu(n,i,a),n=n.sibling}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}var un=null,si=!1;function lr(n,i,a){for(a=a.child;a!==null;)zp(n,i,a),a=a.sibling}function zp(n,i,a){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 5:vn||Ms(a,i);case 6:var c=un,h=si;un=null,lr(n,i,a),un=c,si=h,un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?Pc(n.parentNode,a):n.nodeType===1&&Pc(n,a),fo(n)):Pc(un,a.stateNode));break;case 4:c=un,h=si,un=a.stateNode.containerInfo,si=!0,lr(n,i,a),un=c,si=h;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&pu(a,i,T),h=h.next}while(h!==c)}lr(n,i,a);break;case 1:if(!vn&&(Ms(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){qt(a,i,z)}lr(n,i,a);break;case 21:lr(n,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,lr(n,i,a),vn=c):lr(n,i,a);break;default:lr(n,i,a)}}function Vp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Q0),i.forEach(function(c){var h=cv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=n,T=i,z=T;e:for(;z!==null;){switch(z.tag){case 5:un=z.stateNode,si=!1;break e;case 3:un=z.stateNode.containerInfo,si=!0;break e;case 4:un=z.stateNode.containerInfo,si=!0;break e}z=z.return}if(un===null)throw Error(t(160));zp(m,T,h),un=null,si=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ce){qt(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,n),i=i.sibling}function Hp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),yi(n),c&4){try{Fo(3,n,n.return),Ka(3,n)}catch(tt){qt(n,n.return,tt)}try{Fo(5,n,n.return)}catch(tt){qt(n,n.return,tt)}}break;case 1:oi(i,n),yi(n),c&512&&a!==null&&Ms(a,a.return);break;case 5:if(oi(i,n),yi(n),c&512&&a!==null&&Ms(a,a.return),n.flags&32){var h=n.stateNode;try{ft(h,"")}catch(tt){qt(n,n.return,tt)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,z=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{z==="input"&&m.type==="radio"&&m.name!=null&&Ee(h,m),ht(z,T);var ce=ht(z,m);for(T=0;T<G.length;T+=2){var be=G[T],Re=G[T+1];be==="style"?ct(h,Re):be==="dangerouslySetInnerHTML"?He(h,Re):be==="children"?ft(h,Re):F(h,be,Re,ce)}switch(z){case"input":Fe(h,m);break;case"textarea":me(h,m);break;case"select":var we=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var We=m.value;We!=null?L(h,!!m.multiple,We,!1):we!==!!m.multiple&&(m.defaultValue!=null?L(h,!!m.multiple,m.defaultValue,!0):L(h,!!m.multiple,m.multiple?[]:"",!1))}h[Mo]=m}catch(tt){qt(n,n.return,tt)}}break;case 6:if(oi(i,n),yi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(tt){qt(n,n.return,tt)}}break;case 3:if(oi(i,n),yi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(tt){qt(n,n.return,tt)}break;case 4:oi(i,n),yi(n);break;case 13:oi(i,n),yi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(yu=ne())),c&4&&Vp(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(ce=vn)||be,oi(i,n),vn=ce):oi(i,n),yi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!be&&(n.mode&1)!==0)for(qe=n,be=n.child;be!==null;){for(Re=qe=be;qe!==null;){switch(we=qe,We=we.child,we.tag){case 0:case 11:case 14:case 15:Fo(4,we,we.return);break;case 1:Ms(we,we.return);var Je=we.stateNode;if(typeof Je.componentWillUnmount=="function"){c=we,a=we.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(tt){qt(c,a,tt)}}break;case 5:Ms(we,we.return);break;case 22:if(we.memoizedState!==null){Wp(Re);continue}}We!==null?(We.return=we,qe=We):Wp(Re)}be=be.sibling}e:for(be=null,Re=n;;){if(Re.tag===5){if(be===null){be=Re;try{h=Re.stateNode,ce?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(z=Re.stateNode,G=Re.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,z.style.display=rt("display",T))}catch(tt){qt(n,n.return,tt)}}}else if(Re.tag===6){if(be===null)try{Re.stateNode.nodeValue=ce?"":Re.memoizedProps}catch(tt){qt(n,n.return,tt)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;be===Re&&(be=null),Re=Re.return}be===Re&&(be=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:oi(i,n),yi(n),c&4&&Vp(n);break;case 21:break;default:oi(i,n),yi(n)}}function yi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Op(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ft(h,""),c.flags&=-33);var m=Bp(n);xu(n,m,h);break;case 3:case 4:var T=c.stateNode.containerInfo,z=Bp(n);gu(n,z,T);break;default:throw Error(t(161))}}catch(G){qt(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function tv(n,i,a){qe=n,Gp(n)}function Gp(n,i,a){for(var c=(n.mode&1)!==0;qe!==null;){var h=qe,m=h.child;if(h.tag===22&&c){var T=h.memoizedState!==null||Za;if(!T){var z=h.alternate,G=z!==null&&z.memoizedState!==null||vn;z=Za;var ce=vn;if(Za=T,(vn=G)&&!ce)for(qe=h;qe!==null;)T=qe,G=T.child,T.tag===22&&T.memoizedState!==null?Xp(h):G!==null?(G.return=T,qe=G):Xp(h);for(;m!==null;)qe=m,Gp(m),m=m.sibling;qe=h,Za=z,vn=ce}jp(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,qe=m):jp(n)}}function jp(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Ka(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Wh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Wh(i,T,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var be=ce.memoizedState;if(be!==null){var Re=be.dehydrated;Re!==null&&fo(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&mu(i)}catch(we){qt(i,i.return,we)}}if(i===n){qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Wp(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Xp(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ka(4,i)}catch(G){qt(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){qt(i,h,G)}}var m=i.return;try{mu(i)}catch(G){qt(i,m,G)}break;case 5:var T=i.return;try{mu(i)}catch(G){qt(i,T,G)}}}catch(G){qt(i,i.return,G)}if(i===n){qe=null;break}var z=i.sibling;if(z!==null){z.return=i.return,qe=z;break}qe=i.return}}var nv=Math.ceil,Ja=C.ReactCurrentDispatcher,vu=C.ReactCurrentOwner,Yn=C.ReactCurrentBatchConfig,Ct=0,on=null,Yt=null,dn=0,Vn=0,ws=ir(0),Qt=0,Io=null,Ur=0,Qa=0,_u=0,Uo=null,Nn=null,yu=0,bs=1/0,Ii=null,el=!1,Su=null,cr=null,tl=!1,ur=null,nl=0,ko=0,Eu=null,il=-1,rl=0;function wn(){return(Ct&6)!==0?ne():il!==-1?il:il=ne()}function dr(n){return(n.mode&1)===0?1:(Ct&2)!==0&&dn!==0?dn&-dn:B0.transition!==null?(rl===0&&(rl=Ft()),rl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:$f(n.type)),n)}function ai(n,i,a,c){if(50<ko)throw ko=0,Eu=null,Error(t(185));nn(n,a,c),((Ct&2)===0||n!==on)&&(n===on&&((Ct&2)===0&&(Qa|=a),Qt===4&&fr(n,dn)),Dn(n,c),a===1&&Ct===0&&(i.mode&1)===0&&(bs=ne()+500,Da&&sr()))}function Dn(n,i){var a=n.callbackNode;En(n,i);var c=hn(n,n===on?dn:0);if(c===0)a!==null&&N(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&N(a),i===1)n.tag===0?O0($p.bind(null,n)):Lh($p.bind(null,n)),F0(function(){(Ct&6)===0&&sr()}),a=null;else{switch(gi(c)){case 1:a=Pe;break;case 4:a=Oe;break;case 16:a=je;break;case 536870912:a=ut;break;default:a=je}a=nm(a,qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function qp(n,i){if(il=-1,rl=0,(Ct&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ts()&&n.callbackNode!==a)return null;var c=hn(n,n===on?dn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var h=Ct;Ct|=2;var m=Zp();(on!==n||dn!==i)&&(Ii=null,bs=ne()+500,Or(n,i));do try{sv();break}catch(z){Yp(n,z)}while(!0);zc(),Ja.current=m,Ct=h,Yt!==null?i=0:(on=null,dn=0,i=Qt)}if(i!==0){if(i===2&&(h=Ci(n),h!==0&&(c=h,i=Mu(n,h))),i===1)throw a=Io,Or(n,0),fr(n,c),Dn(n,ne()),a;if(i===6)fr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!iv(h)&&(i=sl(n,c),i===2&&(m=Ci(n),m!==0&&(c=m,i=Mu(n,m))),i===1))throw a=Io,Or(n,0),fr(n,c),Dn(n,ne()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Nn,Ii);break;case 3:if(fr(n,c),(c&130023424)===c&&(i=yu+500-ne(),10<i)){if(hn(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){wn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Rc(Br.bind(null,n,Nn,Ii),i);break}Br(n,Nn,Ii);break;case 4:if(fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var T=31-mt(c);m=1<<T,T=i[T],T>h&&(h=T),c&=~m}if(c=h,c=ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*nv(c/1960))-c,10<c){n.timeoutHandle=Rc(Br.bind(null,n,Nn,Ii),c);break}Br(n,Nn,Ii);break;case 5:Br(n,Nn,Ii);break;default:throw Error(t(329))}}}return Dn(n,ne()),n.callbackNode===a?qp.bind(null,n):null}function Mu(n,i){var a=Uo;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Nn,Nn=a,i!==null&&wu(i)),n}function wu(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function iv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!ni(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~_u,i&=~Qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-mt(i),c=1<<a;n[a]=-1,i&=~c}}function $p(n){if((Ct&6)!==0)throw Error(t(327));Ts();var i=hn(n,0);if((i&1)===0)return Dn(n,ne()),null;var a=sl(n,i);if(n.tag!==0&&a===2){var c=Ci(n);c!==0&&(i=c,a=Mu(n,c))}if(a===1)throw a=Io,Or(n,0),fr(n,i),Dn(n,ne()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Nn,Ii),Dn(n,ne()),null}function bu(n,i){var a=Ct;Ct|=1;try{return n(i)}finally{Ct=a,Ct===0&&(bs=ne()+500,Da&&sr())}}function kr(n){ur!==null&&ur.tag===0&&(Ct&6)===0&&Ts();var i=Ct;Ct|=1;var a=Yn.transition,c=Tt;try{if(Yn.transition=null,Tt=1,n)return n()}finally{Tt=c,Yn.transition=a,Ct=i,(Ct&6)===0&&sr()}}function Tu(){Vn=ws.current,Ot(ws)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,L0(a)),Yt!==null)for(a=Yt.return;a!==null;){var c=a;switch(Ic(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pa();break;case 3:Ss(),Ot(An),Ot(mn),$c();break;case 5:Xc(c);break;case 4:Ss();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:Vc(c.type._context);break;case 22:case 23:Tu()}a=a.return}if(on=n,Yt=n=hr(n.current,null),dn=Vn=i,Qt=0,Io=null,_u=Qa=Ur=0,Nn=Uo=null,Lr!==null){for(i=0;i<Lr.length;i++)if(a=Lr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=h,c.next=T}a.pending=c}Lr=null}return n}function Yp(n,i){do{var a=Yt;try{if(zc(),Ha.current=Xa,Ga){for(var c=Gt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Ga=!1}if(Ir=0,sn=Jt=Gt=null,Ro=!1,Po=0,vu.current=null,a===null||a.return===null){Qt=1,Io=i,Yt=null;break}e:{var m=n,T=a.return,z=a,G=i;if(i=dn,z.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,be=z,Re=be.tag;if((be.mode&1)===0&&(Re===0||Re===11||Re===15)){var we=be.alternate;we?(be.updateQueue=we.updateQueue,be.memoizedState=we.memoizedState,be.lanes=we.lanes):(be.updateQueue=null,be.memoizedState=null)}var We=yp(T);if(We!==null){We.flags&=-257,Sp(We,T,z,m,i),We.mode&1&&_p(m,ce,i),i=We,G=ce;var Je=i.updateQueue;if(Je===null){var tt=new Set;tt.add(G),i.updateQueue=tt}else Je.add(G);break e}else{if((i&1)===0){_p(m,ce,i),Cu();break e}G=Error(t(426))}}else if(Vt&&z.mode&1){var $t=yp(T);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),Sp($t,T,z,m,i),Oc(Es(G,z));break e}}m=G=Es(G,z),Qt!==4&&(Qt=2),Uo===null?Uo=[m]:Uo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var te=xp(m,G,i);jh(m,te);break e;case 1:z=G;var q=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(cr===null||!cr.has(se)))){m.flags|=65536,i&=-i,m.lanes|=i;var De=vp(m,z,i);jh(m,De);break e}}m=m.return}while(m!==null)}Jp(a)}catch(nt){i=nt,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Zp(){var n=Ja.current;return Ja.current=Xa,n===null?Xa:n}function Cu(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Ur&268435455)===0&&(Qa&268435455)===0||fr(on,dn)}function sl(n,i){var a=Ct;Ct|=2;var c=Zp();(on!==n||dn!==i)&&(Ii=null,Or(n,i));do try{rv();break}catch(h){Yp(n,h)}while(!0);if(zc(),Ct=a,Ja.current=c,Yt!==null)throw Error(t(261));return on=null,dn=0,Qt}function rv(){for(;Yt!==null;)Kp(Yt)}function sv(){for(;Yt!==null&&!K();)Kp(Yt)}function Kp(n){var i=tm(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?Jp(n):Yt=i,vu.current=null}function Jp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=K0(a,i,Vn),a!==null){Yt=a;return}}else{if(a=J0(a,i),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Br(n,i,a){var c=Tt,h=Yn.transition;try{Yn.transition=null,Tt=1,ov(n,i,a,c)}finally{Yn.transition=h,Tt=c}return null}function ov(n,i,a,c){do Ts();while(ur!==null);if((Ct&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(cn(n,m),n===on&&(Yt=on=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tl||(tl=!0,nm(je,function(){return Ts(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var T=Tt;Tt=1;var z=Ct;Ct|=4,vu.current=null,ev(n,a),Hp(a,n),T0(Cc),ga=!!Tc,Cc=Tc=null,n.current=a,tv(a),le(),Ct=z,Tt=T,Yn.transition=m}else n.current=a;if(tl&&(tl=!1,ur=n,nl=h),m=n.pendingLanes,m===0&&(cr=null),Mt(a.stateNode),Dn(n,ne()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(el)throw el=!1,n=Su,Su=null,n;return(nl&1)!==0&&n.tag!==0&&Ts(),m=n.pendingLanes,(m&1)!==0?n===Eu?ko++:(ko=0,Eu=n):ko=0,sr(),null}function Ts(){if(ur!==null){var n=gi(nl),i=Yn.transition,a=Tt;try{if(Yn.transition=null,Tt=16>n?16:n,ur===null)var c=!1;else{if(n=ur,ur=null,nl=0,(Ct&6)!==0)throw Error(t(331));var h=Ct;for(Ct|=4,qe=n.current;qe!==null;){var m=qe,T=m.child;if((qe.flags&16)!==0){var z=m.deletions;if(z!==null){for(var G=0;G<z.length;G++){var ce=z[G];for(qe=ce;qe!==null;){var be=qe;switch(be.tag){case 0:case 11:case 15:Fo(8,be,m)}var Re=be.child;if(Re!==null)Re.return=be,qe=Re;else for(;qe!==null;){be=qe;var we=be.sibling,We=be.return;if(kp(be),be===ce){qe=null;break}if(we!==null){we.return=We,qe=we;break}qe=We}}}var Je=m.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var $t=tt.sibling;tt.sibling=null,tt=$t}while(tt!==null)}}qe=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,qe=T;else e:for(;qe!==null;){if(m=qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Fo(9,m,m.return)}var te=m.sibling;if(te!==null){te.return=m.return,qe=te;break e}qe=m.return}}var q=n.current;for(qe=q;qe!==null;){T=qe;var se=T.child;if((T.subtreeFlags&2064)!==0&&se!==null)se.return=T,qe=se;else e:for(T=q;qe!==null;){if(z=qe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Ka(9,z)}}catch(nt){qt(z,z.return,nt)}if(z===T){qe=null;break e}var De=z.sibling;if(De!==null){De.return=z.return,qe=De;break e}qe=z.return}}if(Ct=h,sr(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(lt,n)}catch{}c=!0}return c}finally{Tt=a,Yn.transition=i}}return!1}function Qp(n,i,a){i=Es(a,i),i=xp(n,i,1),n=ar(n,i,1),i=wn(),n!==null&&(nn(n,1,i),Dn(n,i))}function qt(n,i,a){if(n.tag===3)Qp(n,n,a);else for(;i!==null;){if(i.tag===3){Qp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cr===null||!cr.has(c))){n=Es(a,n),n=vp(i,n,1),i=ar(i,n,1),n=wn(),i!==null&&(nn(i,1,n),Dn(i,n));break}}i=i.return}}function av(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(dn&a)===a&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>ne()-yu?Or(n,0):_u|=a),Dn(n,i)}function em(n,i){i===0&&((n.mode&1)===0?i=1:(i=Xt,Xt<<=1,(Xt&130023424)===0&&(Xt=4194304)));var a=wn();n=Di(n,i),n!==null&&(nn(n,i,a),Dn(n,a))}function lv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),em(n,a)}function cv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),em(n,a)}var tm;tm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||An.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,Z0(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,Vt&&(i.flags&1048576)!==0&&Fh(i,Fa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ya(n,i),n=i.pendingProps;var h=ps(i,mn.current);ys(i,a),h=Kc(null,i,c,n,h,a);var m=Jc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(m=!0,Na(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,jc(i),h.updater=qa,i.stateNode=h,h._reactInternals=i,ru(i,c,n,a),i=lu(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&Fc(i),Mn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ya(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=dv(c),n=ri(c,n),h){case 0:i=au(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=Mp(null,i,c,ri(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),au(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),Cp(n,i,c,h,a);case 3:e:{if(Ap(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,Gh(n,i),za(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Es(Error(t(423)),i),i=Rp(n,i,c,a,h);break e}else if(c!==h){h=Es(Error(t(424)),i),i=Rp(n,i,c,a,h);break e}else for(zn=nr(i.stateNode.containerInfo.firstChild),Bn=i,Vt=!0,ii=null,a=Vh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===h){i=Fi(n,i,a);break e}Mn(n,i,c,a)}i=i.child}return i;case 5:return Xh(i),n===null&&kc(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,T=h.children,Ac(c,h)?T=null:m!==null&&Ac(c,m)&&(i.flags|=32),Tp(n,i),Mn(n,i,T,a),i.child;case 6:return n===null&&kc(i),null;case 13:return Pp(n,i,a);case 4:return Wc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=vs(i,null,c,a):Mn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),Ep(n,i,c,h,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,T=h.value,It(ka,c._currentValue),c._currentValue=T,m!==null)if(ni(m.value,T)){if(m.children===h.children&&!An.current){i=Fi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var z=m.dependencies;if(z!==null){T=m.child;for(var G=z.firstContext;G!==null;){if(G.context===c){if(m.tag===1){G=Li(-1,a&-a),G.tag=2;var ce=m.updateQueue;if(ce!==null){ce=ce.shared;var be=ce.pending;be===null?G.next=G:(G.next=be.next,be.next=G),ce.pending=G}}m.lanes|=a,G=m.alternate,G!==null&&(G.lanes|=a),Hc(m.return,a,i),z.lanes|=a;break}G=G.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,z=T.alternate,z!==null&&(z.lanes|=a),Hc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Mn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ys(i,a),h=qn(h),c=c(h),i.flags|=1,Mn(n,i,c,a),i.child;case 14:return c=i.type,h=ri(c,i.pendingProps),h=ri(c.type,h),Mp(n,i,c,h,a);case 15:return wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),Ya(n,i),i.tag=1,Rn(c)?(n=!0,Na(i)):n=!1,ys(i,a),mp(i,c,h),ru(i,c,h,a),lu(null,i,c,!0,n,a);case 19:return Dp(n,i,a);case 22:return bp(n,i,a)}throw Error(t(156,i.tag))};function nm(n,i){return ha(n,i)}function uv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,i,a,c){return new uv(n,i,a,c)}function Au(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dv(n){if(typeof n=="function")return Au(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===ue)return 14}return 2}function hr(n,i){var a=n.alternate;return a===null?(a=Zn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ol(n,i,a,c,h,m){var T=2;if(c=n,typeof n=="function")Au(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case V:return zr(a.children,h,m,i);case H:T=8,h|=8;break;case P:return n=Zn(12,a,i,h|2),n.elementType=P,n.lanes=m,n;case Z:return n=Zn(13,a,i,h),n.elementType=Z,n.lanes=m,n;case oe:return n=Zn(19,a,i,h),n.elementType=oe,n.lanes=m,n;case pe:return al(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case k:T=9;break e;case J:T=11;break e;case ue:T=14;break e;case ae:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Zn(T,a,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function zr(n,i,a,c){return n=Zn(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=Zn(22,n,c,i),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function Ru(n,i,a){return n=Zn(6,n,null,i),n.lanes=a,n}function Pu(n,i,a){return i=Zn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function fv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Nu(n,i,a,c,h,m,T,z,G){return n=new fv(n,i,a,z,G),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Zn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jc(m),n}function hv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function im(n){if(!n)return rr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return Nh(n,a,i)}return i}function rm(n,i,a,c,h,m,T,z,G){return n=Nu(a,c,!0,n,h,m,T,z,G),n.context=im(null),a=n.current,c=wn(),h=dr(a),m=Li(c,h),m.callback=i??null,ar(a,m,h),n.current.lanes=h,nn(n,h,c),Dn(n,c),n}function ll(n,i,a,c){var h=i.current,m=wn(),T=dr(h);return a=im(a),i.context===null?i.context=a:i.pendingContext=a,i=Li(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ar(h,i,T),n!==null&&(ai(n,h,T,m),Ba(n,h,T)),T}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Du(n,i){sm(n,i),(n=n.alternate)&&sm(n,i)}function pv(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Lu(n){this._internalRoot=n}ul.prototype.render=Lu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=Lu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){ll(null,n,null,null)}),i[Ai]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Gf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&Xf(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function am(){}function mv(n,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var ce=cl(T);m.call(ce)}}var T=rm(i,c,n,0,null,!1,!1,"",am);return n._reactRootContainer=T,n[Ai]=T.current,So(n.nodeType===8?n.parentNode:n),kr(),T}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var z=c;c=function(){var ce=cl(G);z.call(ce)}}var G=Nu(n,0,!1,null,null,!1,!1,"",am);return n._reactRootContainer=G,n[Ai]=G.current,So(n.nodeType===8?n.parentNode:n),kr(function(){ll(i,G,a,c)}),G}function fl(n,i,a,c,h){var m=a._reactRootContainer;if(m){var T=m;if(typeof h=="function"){var z=h;h=function(){var G=cl(T);z.call(G)}}ll(i,T,n,h)}else T=mv(a,i,n,h,c);return cl(T)}Vf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Et(i.pendingLanes);a!==0&&(rn(i,a|1),Dn(i,ne()),(Ct&6)===0&&(bs=ne()+500,sr()))}break;case 13:kr(function(){var c=Di(n,1);if(c!==null){var h=wn();ai(c,n,1,h)}}),Du(n,1)}},sc=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var a=wn();ai(i,n,134217728,a)}Du(n,134217728)}},Hf=function(n){if(n.tag===13){var i=dr(n),a=Di(n,i);if(a!==null){var c=wn();ai(a,n,i,c)}Du(n,i)}},Gf=function(){return Tt},jf=function(n,i){var a=Tt;try{return Tt=n,i()}finally{Tt=a}},ke=function(n,i,a){switch(i){case"input":if(Fe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Ra(c);if(!h)throw Error(t(90));ve(c),Fe(c,h)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&L(n,!!a.multiple,i,!1)}},Ut=bu,Kt=kr;var gv={usingClientEntryPoint:!1,Events:[wo,fs,Ra,ze,pt,bu]},Oo={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xv={bundleType:Oo.bundleType,version:Oo.version,rendererPackageName:Oo.rendererPackageName,rendererConfig:Oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=da(n),n===null?null:n.stateNode},findFiberByHostInstance:Oo.findFiberByHostInstance||pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{lt=hl.inject(xv),et=hl}catch{}}return Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv,Ln.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return hv(n,i,null,a)},Ln.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",h=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Nu(n,1,!1,null,null,a,!1,c,h),n[Ai]=i.current,So(n.nodeType===8?n.parentNode:n),new Lu(i)},Ln.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=da(i),n=n===null?null:n.stateNode,n},Ln.flushSync=function(n){return kr(n)},Ln.hydrate=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,a)},Ln.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",T=om;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=rm(i,null,n,1,a??null,h,!1,m,T),n[Ai]=i.current,So(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new ul(i)},Ln.render=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,a)},Ln.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1},Ln.unstable_batchedUpdates=bu,Ln.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,a,!1,c)},Ln.version="18.3.1-next-f1338f8080-20240426",Ln}var mm;function Av(){if(mm)return Ou.exports;mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ou.exports=Cv(),Ou.exports}var gm;function Rv(){if(gm)return pl;gm=1;var s=Av();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var Pv=Rv();const Nv=Dg(Pv),ei=[{id:"profile-primary",name:"Suraj Singh",avatarSeed:"SurajSingh",profileUrl:"https://www.skills.google/public_profiles/a88e0c09-8768-4e28-bc35-685f35bfdb5b",lastUpdated:"2026-10-26",isCurrent:!0,notes:"Google Cloud Skills Profile",seasonTarget:"Season 2026",badges:[{id:"badge-suraj-1",name:"Configure Service Accounts and IAM Roles for Google Cloud",category:"skill",dateEarned:"2026-10-26",pointsContribution:.5,isVerified:!0,season:"Season 2026",description:"Google Cloud Skill Badge: IAM Roles and Service Account administration"},{id:"badge-suraj-2",name:"Create Your First Gemini Enterprise Application",category:"skill",dateEarned:"2026-10-20",pointsContribution:.5,isVerified:!0,season:"Season 2026",description:"Google Cloud Skill Badge: Enterprise Gemini multimodal AI application development"},{id:"badge-suraj-3",name:"Build a Website on Google Cloud",category:"skill",dateEarned:"2026-10-20",pointsContribution:.5,isVerified:!0,season:"Season 2026",description:"Google Cloud Skill Badge: Deploying web apps on Compute Engine and Cloud Storage"},{id:"badge-suraj-4",name:"Analyze Images with the Cloud Vision API",category:"skill",dateEarned:"2026-10-17",pointsContribution:.5,isVerified:!0,season:"Season 2026",description:"Google Cloud Skill Badge: Machine learning vision API image labels and OCR"},{id:"badge-suraj-5",name:"Implement Speech and Language Solutions with Pre-trained APIs",category:"skill",dateEarned:"2026-10-17",pointsContribution:.5,isVerified:!0,season:"Season 2026",description:"Google Cloud Skill Badge: Natural Language, Speech-to-Text and Translation APIs"},{id:"badge-suraj-6",name:"The Basics of Google Cloud Compute",category:"skill",dateEarned:"2026-10-15",pointsContribution:.5,isVerified:!0,season:"Season 2026",description:"Google Cloud Skill Badge: Compute Engine, networking, and load balancer basics"}]}],Yr=ei;function Lg(s){if(!s)return"";try{let e=s.trim();if(!e)return"";!e.startsWith("http://")&&!e.startsWith("https://")&&(e=`https://${e}`);const t=new URL(e);return t.protocol!=="http:"&&t.protocol!=="https:"?"":t.toString()}catch{return""}}function $l(s,e=200){return s?s.replace(/[<>'"&]/g,t=>{switch(t){case"<":return"&lt;";case">":return"&gt;";case"'":return"&#39;";case'"':return"&quot;";case"&":return"&amp;";default:return t}}).replace(/[\u0000-\u001F\u007F-\u009F]/g,"").trim().slice(0,e):""}function xm(s){if(!s)return;const e=s.trim();if(e.startsWith("https://")||e.startsWith("http://"))return e.slice(0,500)}function Sr(s){const e=new Date().toISOString().split("T")[0];if(!s)return e;try{const t=new Date(s);if(isNaN(t.getTime()))return e;const r=t.getFullYear();return r<2020||r>2035?e:t.toISOString().split("T")[0]}catch{return e}}function Vu(s){const e=s.toLowerCase();return e.includes("trivia")?{category:"trivia",pointsContribution:1}:e.includes("level ")||e.includes("diabolical")||e.includes("arcade game")||e.includes("arcade challenge")?{category:"game",pointsContribution:1}:e.includes("milestone")?e.includes("tier 3")||e.includes("24")?{category:"milestone",pointsContribution:6}:e.includes("tier 2")||e.includes("16")?{category:"milestone",pointsContribution:4}:{category:"milestone",pointsContribution:2}:e.includes("certification")||e.includes("hackathon")||e.includes("cloud hero")||e.includes("special")?{category:"special",pointsContribution:2}:{category:"skill",pointsContribution:.5}}function vm(s){var p,x,v;if(!s||typeof s!="string")return{name:"Suraj Singh",badges:[]};let e=s;if(e.trim().startsWith("{")&&e.includes('"contents"'))try{const g=JSON.parse(e);typeof g.contents=="string"&&(e=g.contents)}catch{}const r=new DOMParser().parseFromString(e,"text/html");let o="";const l=(x=(p=r.querySelector("title"))==null?void 0:p.textContent)==null?void 0:x.trim();if(l&&l.includes("|")&&(o=l.split("|")[0].trim()),!o){const g=r.querySelector("h1.ql-headline-medium, h1.ql-title-large, h1, .profile-name");g&&((v=g.textContent)!=null&&v.trim())&&(o=g.textContent.trim().replace(/^Profile of\s+/i,""))}(!o||o==="Google Skills"||o==="Google Cloud Skills Boost")&&(o="Suraj Singh");const u=[],d=new Set,f=r.querySelectorAll('.profile-badge, .profile-badges-item, .public-profile-badge, [class*="profile-badge"]');if(f.length>0&&f.forEach((g,S)=>{var V;const M=g.querySelector(".ql-title-medium, .profile-badge__title, h3, .badge-title"),b=g.querySelector(".ql-body-medium, .profile-badge__date, .badge-date"),E=g.querySelector("img"),y=(V=M==null?void 0:M.textContent)==null?void 0:V.trim();if(!y)return;const B=y.slice(0,150);let F=Sr();if(b&&b.textContent){const H=b.textContent.match(/(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);H&&H[1]&&(F=Sr(H[1]))}const{category:C,pointsContribution:U}=Vu(B),O=`badge-${Date.now()}-${S}`;d.has(B)||(d.add(B),u.push({id:O,name:B,category:C,dateEarned:F,imageUrl:xm(E==null?void 0:E.src),pointsContribution:U,isVerified:!0,season:"Season 2026"}))}),u.length===0&&r.querySelectorAll('.ql-title-medium, [class*="ql-title-medium"]').forEach((S,M)=>{var V;const b=(V=S.textContent)==null?void 0:V.trim();if(!b||b.length<3)return;const E=b.toLowerCase();if(E==="badges"||E==="public profile"||E==="skills boost"||E==="google cloud")return;const y=S.closest("div")||S.parentElement,B=y==null?void 0:y.querySelector('.ql-body-medium, [class*="ql-body-medium"]'),F=y==null?void 0:y.querySelector("img");let C=Sr();if(B&&B.textContent){const H=B.textContent.match(/(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);H&&H[1]&&(C=Sr(H[1]))}const{category:U,pointsContribution:O}=Vu(b);d.has(b)||(d.add(b),u.push({id:`badge-dom-${Date.now()}-${M}`,name:b,category:U,dateEarned:C,imageUrl:xm(F==null?void 0:F.src),pointsContribution:O,isVerified:!0,season:"Season 2026"}))}),u.length===0){const g=/<span class=['"][^'"]*ql-title-medium[^'"]*['"]>\s*([^<]+)\s*<\/span>/gi,S=/<span class=['"][^'"]*ql-body-medium[^'"]*['"]>\s*(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/gi,M=[],b=[];let E;for(;(E=g.exec(e))!==null;)E[1]&&E[1].trim()&&M.push(E[1].trim());let y;for(;(y=S.exec(e))!==null;)y[1]&&y[1].trim()&&b.push(y[1].trim());M.forEach((B,F)=>{if(!d.has(B)){d.add(B);const{category:C,pointsContribution:U}=Vu(B);u.push({id:`regex-badge-${Date.now()}-${F}`,name:B,category:C,dateEarned:Sr(b[F]),pointsContribution:U,isVerified:!0,season:"Season 2026"})}})}return{name:o.slice(0,80),badges:u}}async function Fg(s){let e=s.trim();if(!e)throw new Error("Please enter a Google Cloud Skills Boost profile URL.");const t=e.match(/([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);t&&!e.includes("http")?e=`https://www.skills.google/public_profiles/${t[1]}`:!e.startsWith("http://")&&!e.startsWith("https://")&&(e=`https://${e}`),e.includes("cloudskillsboost.google")&&(e=e.replace("cloudskillsboost.google","skills.google")),e.includes("skills.google")&&!e.includes("www.skills.google")&&(e=e.replace("skills.google","www.skills.google"));try{const o=`/api/fetch-profile?url=${encodeURIComponent(e)}`,l=new AbortController,u=setTimeout(()=>l.abort(),8e3),d=await fetch(o,{signal:l.signal,headers:{Accept:"text/html,application/xhtml+xml,application/xml"}});if(clearTimeout(u),d.ok){const f=await d.text();if(f&&f.length>500){const p=vm(f);if(p.badges.length>0||p.name&&p.name!=="Suraj Singh")return p}}}catch(o){console.warn("Local proxy route failed, attempting fallback proxies:",o)}const r=[`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(e)}`,`https://api.allorigins.win/get?url=${encodeURIComponent(e)}`,`https://corsproxy.io/?${encodeURIComponent(e)}`];for(const o of r){const l=new AbortController,u=setTimeout(()=>l.abort(),7e3);try{const d=await fetch(o,{signal:l.signal,headers:{Accept:"text/html,application/xhtml+xml,application/xml"}});if(clearTimeout(u),d.ok){const f=await d.text();if(f&&f.length>300){const p=vm(f);if(p.badges.length>0)return p}}}catch{clearTimeout(u)}}if(e.includes("a88e0c09-8768-4e28-bc35-685f35bfdb5b")){const o=ei[0];return{name:o.name,badges:o.badges}}throw new Error("Could not retrieve badges from this profile URL. Please verify that your profile is set to Public in Google Skills Boost.")}const Vl="arcade_saved_profiles_v2",Ef="arcade_active_profile_id_v2",Ig="arcade_skill_ratio_v2";let Ug=ei,kg=ei[0].id,Og=2;function Dv(s,e){if(!s||typeof s!="object")return null;const t=typeof s.id=="string"&&s.id.trim()?s.id.slice(0,100):e,r=typeof s.name=="string"&&s.name.trim()?s.name.slice(0,200):"Google Cloud Badge",l=["game","trivia","skill","milestone","special"].includes(s.category)?s.category:"skill",u=Sr(s.dateEarned),d=typeof s.pointsContribution=="number"&&!isNaN(s.pointsContribution)&&s.pointsContribution>=0?Math.min(10,s.pointsContribution):l==="skill"?.5:1;return{id:t,name:r,category:l,dateEarned:u,pointsContribution:d,imageUrl:typeof s.imageUrl=="string"&&s.imageUrl.startsWith("http")?s.imageUrl.slice(0,500):void 0,description:typeof s.description=="string"?s.description.slice(0,300):void 0,season:typeof s.season=="string"?s.season.slice(0,50):"Season 2026",isVerified:!!s.isVerified}}function Bg(s,e){if(!s||typeof s!="object")return null;const t=typeof s.id=="string"&&s.id.trim()?s.id.slice(0,100):`prof-${e}`,r=typeof s.name=="string"&&s.name.trim()?s.name.slice(0,80):"My Cloud Account",o=typeof s.profileUrl=="string"?s.profileUrl.slice(0,500):"",l=Array.isArray(s.badges)?s.badges:[],u=[];return l.forEach((d,f)=>{const p=Dv(d,`badge-${t}-${f}`);p&&u.push(p)}),{id:t,name:r,avatarSeed:typeof s.avatarSeed=="string"?s.avatarSeed.slice(0,50):r.replace(/\s+/g,""),profileUrl:o,lastUpdated:Sr(s.lastUpdated),isCurrent:!!s.isCurrent,notes:typeof s.notes=="string"?s.notes.slice(0,300):void 0,customGoalPoints:typeof s.customGoalPoints=="number"&&s.customGoalPoints>0?s.customGoalPoints:void 0,seasonTarget:typeof s.seasonTarget=="string"?s.seasonTarget.slice(0,50):"Season 2026",badges:u}}function na(){try{localStorage.getItem("arcade_saved_profiles_v1")&&(localStorage.removeItem("arcade_saved_profiles_v1"),localStorage.removeItem("arcade_active_profile_id_v1"));const s=localStorage.getItem(Vl);if(!s)return localStorage.setItem(Vl,JSON.stringify(ei)),localStorage.setItem(Ef,ei[0].id),ei;const e=JSON.parse(s);if(Array.isArray(e)&&e.length>0){const t=e.map((r,o)=>Bg(r,o)).filter(r=>r!==null);if(t.length>0)return t[0].id==="profile-primary"&&t[0].badges.length===0&&ei[0].badges.length>0&&(t[0].badges=ei[0].badges,localStorage.setItem(Vl,JSON.stringify(t))),t}return ei}catch(s){return console.warn("LocalStorage read failed, using in-memory fallback:",s),Ug}}function no(s){Ug=s;try{localStorage.setItem(Vl,JSON.stringify(s))}catch(e){console.error("Failed to save profiles to localStorage (quota or disabled):",e)}}function Td(){var s;try{const e=localStorage.getItem(Ef);return e||((s=na()[0])==null?void 0:s.id)||ei[0].id}catch{return kg}}function Ko(s){kg=s;try{localStorage.setItem(Ef,s)}catch(e){console.error("Failed to set active profile ID in storage:",e)}}function Cd(s){const e=na(),t=e.findIndex(o=>o.id===s.id||o.profileUrl&&s.profileUrl&&o.profileUrl===s.profileUrl);let r;return t>=0?(r=[...e],r[t]={...r[t],...s,lastUpdated:new Date().toISOString().split("T")[0]}):r=[s,...e],no(r),Ko(s.id),r}function Lv(s){const t=na().filter(o=>o.id!==s),r=t.length>0?t:ei;return no(r),Td()===s&&Ko(r[0].id),r}function Hu(s,e){const r=na().map(o=>o.id===s?{...o,badges:e,lastUpdated:new Date().toISOString().split("T")[0]}:o);return no(r),r}function Fv(){try{const s=localStorage.getItem(Ig);if(s){const e=parseFloat(s);if(!isNaN(e)&&e>=1&&e<=5)return e}return 2}catch{return Og}}function _m(s){const e=Math.max(1,Math.min(5,s));Og=e;try{localStorage.setItem(Ig,e.toString())}catch(t){console.error("Failed to save skill ratio in storage:",t)}}function Iv(s){if(!Array.isArray(s)||s.length===0)return null;const e=s.map((t,r)=>Bg(t,r)).filter(t=>t!==null);return e.length>0?e:null}const Jn=[{id:"novice",name:"Explorer Tier",minPoints:0,maxPoints:9,rewardName:"Arcade Starter Pack",rewardDescription:"Get started on your cloud journey with official stickers and digital badges.",badgeLevel:"Bronze Token",swagItems:["Official Arcade Digital Certificate","Google Cloud Skills Boost Profile Badge","Community Discord Access","Seasonal Leaderboard Ranking"],color:"#BF9E79",textColor:"text-[#835E3B]",bgColor:"bg-[#F4ECE1]",borderColor:"border-[#D6C0A5]"},{id:"standard",name:"Standard Tier",minPoints:10,maxPoints:24,rewardName:"Arcade Collector Set",rewardDescription:"Physical collectibles celebrating your first milestone across games and skill labs.",badgeLevel:"Silver Token",swagItems:["Official Arcade 2026 Cotton T-Shirt","Holographic Vinyl Sticker Pack (8x)","Arcade Metal Enamel Pin Set","Eco-Bamboo Ballpoint Pen"],color:"#D97706",textColor:"text-[#B45309]",bgColor:"bg-[#FEF3C7]",borderColor:"border-[#FDE68A]"},{id:"advanced",name:"Advanced Tier",minPoints:25,maxPoints:44,rewardName:"Cloud Champion Gear",rewardDescription:"Premium lifestyle and everyday tech essentials for dedicated cloud champions.",badgeLevel:"Gold Token",swagItems:["Arcade Embroidered Heavyweight Hoodie","Insulated 750ml Matte Steel Water Bottle","Hardcover Debossed Dotted Journal","Cables & Tech Accessory Organizer Pouch"],color:"#EA580C",textColor:"text-[#C2410C]",bgColor:"bg-[#FFEDD5]",borderColor:"border-[#FED7AA]"},{id:"premium",name:"Premium Tier",minPoints:45,maxPoints:64,rewardName:"Arcade Elite Vanguard",rewardDescription:"High-end swag package designed for top cloud practitioners and multi-domain experts.",badgeLevel:"Emerald Medallion",swagItems:["Heavy-Duty Ergonomic Cloud Laptop Backpack (Water-resistant)","Dual Fast Qi-Wireless Charging Station Pad","Custom Embroidered Snapback Cap","Extended Anti-Slip RGB/Stitched Edge Desk Mat","$50 Google Cloud Certification Exam Discount Voucher"],color:"#059669",textColor:"text-[#047857]",bgColor:"bg-[#D1FAE5]",borderColor:"border-[#A7F3D0]"},{id:"legend",name:"Legend Tier",minPoints:65,maxPoints:999,rewardName:"Arcade Grandmaster Hall of Fame",rewardDescription:"The pinnacle of Google Cloud Arcade. Top 1% swag collection and grandmaster prestige.",badgeLevel:"Royal Prismatic Crown",swagItems:["Arcade Varsity Bomber Jacket (Custom embroidered & numbered)","Waterproof Portable Wireless Bluetooth Speaker","Custom Keycap Set & Mechanical Keyboard Wrist-Rest","Exclusive Physical Grandmaster Plaque with Engraved Name","100% Google Cloud Associate/Professional Exam Voucher ($200 value)"],color:"#9333EA",textColor:"text-[#7E22CE]",bgColor:"bg-[#F3E8FF]",borderColor:"border-[#E9D5FF]"}];function Cs(s){if(!s)return Date.now();const e=new Date(s).getTime();return isNaN(e)?Date.now():e}function zg(s=[],e=2){const t=Math.max(1,Math.min(5,e||2));let r=0,o=0,l=0,u=0,d=0,f=0,p=0,x=0,v=0;s.forEach(U=>{if(!U)return;const O=typeof U.pointsContribution=="number"&&!isNaN(U.pointsContribution)&&U.pointsContribution>=0?U.pointsContribution:1;switch(U.category){case"game":r++,o+=O;break;case"trivia":l++,u+=O;break;case"skill":d++;break;case"milestone":f++,p+=O;break;case"special":x++,v+=O;break;default:d++;break}});const g=Math.floor(d/t);let S=p;f===0&&(d>=24?S=6:d>=16?S=4:d>=8&&(S=2));const M=o+u+g+S+v,b=Math.max(0,Math.round(M*10)/10),E=s.length;let y=Jn[0],B=Jn[1];for(let U=Jn.length-1;U>=0;U--)if(b>=Jn[U].minPoints){y=Jn[U],B=U<Jn.length-1?Jn[U+1]:null;break}const F=B?Math.max(0,Math.round((B.minPoints-b)*10)/10):0;let C=100;if(B){const U=B.minPoints-y.minPoints,O=b-y.minPoints;C=Math.min(100,Math.max(0,Math.round(O/Math.max(1,U)*100)))}return{gamePoints:Math.round(o*10)/10,gameCount:r,triviaPoints:Math.round(u*10)/10,triviaCount:l,skillPoints:g,skillCount:d,skillRatio:t,milestonePoints:Math.round(S*10)/10,milestoneCount:f,specialPoints:Math.round(v*10)/10,specialCount:x,totalPoints:b,totalBadges:E,currentTier:y,nextTier:B,pointsToNextTier:F,progressToNextTierPercent:C}}function Vg(s=[],e){const t=new Date().toISOString().split("T")[0];if(!s||s.length===0)return{totalDaysSpanned:1,firstBadgeDate:t,latestBadgeDate:t,badgesPerWeek:0,badgesPerMonth:0,avgDaysBetweenBadges:0,currentActiveStreakWeeks:0,maxWeeklyCadence:0,weeklyBreakdown:[],monthlyBreakdown:[],dayOfWeekBreakdown:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(k=>({day:k,count:0,percentage:0})),estimatedDaysToNextTier:null,estimatedCompletionDate:null};const r=[...s].filter(k=>k&&k.dateEarned).sort((k,J)=>Cs(k.dateEarned)-Cs(J.dateEarned));if(r.length===0)return Vg([],e);const o=r[0].dateEarned||t,l=r[r.length-1].dateEarned||t,u=Cs(o),d=Cs(l),f=Math.round((d-u)/(1e3*60*60*24)),p=Math.max(1,f),x=Math.max(1,p/7),v=Math.max(1,p/30.4),g=Number((r.length/x).toFixed(2)),S=Number((r.length/v).toFixed(1)),M=Number((p/Math.max(1,r.length)).toFixed(1)),b=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E={Sun:0,Mon:0,Tue:0,Wed:0,Thu:0,Fri:0,Sat:0};r.forEach(k=>{const J=new Date(k.dateEarned),Z=isNaN(J.getTime())?0:J.getDay(),oe=b[Z];E[oe]=(E[oe]||0)+1});const B=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(k=>({day:k,count:E[k]||0,percentage:Math.round((E[k]||0)/Math.max(1,r.length)*100)})),F=new Map;r.forEach(k=>{const J=new Date(k.dateEarned);if(isNaN(J.getTime()))return;const Z=J.getDay(),oe=J.getDate()-Z+(Z===0?-6:1),ue=new Date(J);ue.setDate(oe);const ae=new Date(ue);ae.setDate(ue.getDate()+6);const pe=ue.toISOString().split("T")[0],j=ae.toISOString().split("T")[0];let de=F.get(pe);de||(de={startDate:pe,endDate:j,count:0,points:0,badges:[]},F.set(pe,de)),de.count++,de.points+=k.pointsContribution||(k.category==="skill"?.5:1),de.badges.push(k)});const C=Array.from(F.entries()).map(([k,J],Z)=>{const oe=new Date(k);return{weekLabel:`Week ${Z+1} (${oe.toLocaleDateString("en-US",{month:"short",day:"numeric"})})`,...J,points:Math.round(J.points*10)/10}}).sort((k,J)=>Cs(k.startDate)-Cs(J.startDate)),U=C.reduce((k,J)=>Math.max(k,J.count),0),O=new Map;r.forEach(k=>{const J=new Date(k.dateEarned);if(isNaN(J.getTime()))return;const Z=J.toLocaleDateString("en-US",{month:"short",year:"numeric"});let oe=O.get(Z);oe||(oe={count:0,points:0},O.set(Z,oe)),oe.count++,oe.points+=k.pointsContribution||(k.category==="skill"?.5:1)});const V=Array.from(O.entries()).map(([k,J])=>({monthLabel:k,count:J.count,points:Math.round(J.points*10)/10}));let H=0;for(let k=C.length-1;k>=0&&C[k].count>0;k--)H++;let P=null,R=null;if(e.nextTier&&e.pointsToNextTier>0){const k=e.totalPoints/p;if(k>0&&isFinite(k)){const J=Math.ceil(e.pointsToNextTier/k);P=Math.max(1,Math.min(365,J));const Z=new Date;Z.setDate(Z.getDate()+P),R=Z.toISOString().split("T")[0]}}return{totalDaysSpanned:p,firstBadgeDate:o,latestBadgeDate:l,badgesPerWeek:g,badgesPerMonth:S,avgDaysBetweenBadges:M,currentActiveStreakWeeks:H,maxWeeklyCadence:U,weeklyBreakdown:C,monthlyBreakdown:V,dayOfWeekBreakdown:B,estimatedDaysToNextTier:P,estimatedCompletionDate:R}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=at.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},f)=>at.createElement("svg",{ref:f,...kv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Hg("lucide",o),...d},[...u.map(([p,x])=>at.createElement(p,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=(s,e)=>{const t=at.forwardRef(({className:r,...o},l)=>at.createElement(Ov,{ref:l,iconNode:e,className:Hg(`lucide-${Uv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ym=yt("Activity",Bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Sm=yt("Award",zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],Hv=yt("BookmarkCheck",Vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ad=yt("Calendar",Gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wv=yt("Check",jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qv=yt("ChevronDown",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Em=yt("ChevronRight",$v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Gg=yt("CircleAlert",Yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jg=yt("CircleCheck",Zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Mm=yt("Clock",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Qv=yt("Download",Jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],t_=yt("Filter",e_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Wg=yt("Flame",n_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],r_=yt("Gamepad2",i_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],o_=yt("Gift",s_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],l_=yt("Globe",a_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],u_=yt("House",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],f_=yt("Info",d_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],wm=yt("LoaderCircle",h_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],m_=yt("Lock",p_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],x_=yt("PackageCheck",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Xg=yt("Plus",v_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Mf=yt("RotateCcw",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],qg=yt("Search",y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],E_=yt("Settings2",S_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],w_=yt("SlidersVertical",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],wf=yt("Sparkles",b_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],C_=yt("Star",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],R_=yt("Target",A_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],$g=yt("Trash2",P_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],D_=yt("TrendingUp",N_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],F_=yt("TriangleAlert",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],U_=yt("Trophy",I_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],O_=yt("Upload",k_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],Yg=yt("UserCheck",B_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],V_=yt("UserPlus",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bf=yt("X",H_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Zg=yt("Zap",G_),j_=({currentProfile:s,onOpenProfileSwitcher:e,onOpenSettings:t,activeTab:r,setActiveTab:o,totalPoints:l})=>_.jsx("header",{className:"sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADBCE] shadow-sm",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-3 sm:px-6 lg:px-8",children:[_.jsxs("div",{className:"flex items-center justify-between h-16 sm:h-20 gap-2 sm:gap-4",children:[_.jsxs("div",{className:"flex items-center gap-2 sm:gap-3 shrink-0",children:[_.jsx("div",{className:"w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#F59E0B] via-[#EA580C] to-[#D97706] flex items-center justify-center shadow-arcade-amber",children:_.jsx(r_,{className:"w-5 h-5 sm:w-6 sm:h-6 text-white"})}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("span",{className:"font-pixel text-[9px] sm:text-[11px] text-[#B45309] tracking-wider uppercase",children:"Arcade Calc"}),_.jsx("span",{className:"text-[9px] sm:text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#FEF3C7] text-[#B45309] font-bold border border-[#FDE68A]",children:"2026"})]}),_.jsxs("h1",{className:"font-display font-bold text-base sm:text-lg lg:text-xl text-[#292524] tracking-tight leading-tight",children:["Google Cloud ",_.jsx("span",{className:"font-serif italic font-normal text-[#C2410C]",children:"Points Tracker"})]})]})]}),_.jsxs("nav",{className:"hidden md:flex items-center gap-1 bg-[#F4ECE1] p-1 rounded-2xl border border-[#EADBCE]",children:[_.jsx("button",{onClick:()=>o("calculator"),className:`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${r==="calculator"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Overview"}),_.jsx("button",{onClick:()=>o("frequency"),className:`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${r==="frequency"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Velocity"}),_.jsxs("button",{onClick:()=>o("badges"),className:`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${r==="badges"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:["Badges (",s.badges.length,")"]}),_.jsx("button",{onClick:()=>o("swag"),className:`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${r==="swag"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Swag Tiers"}),_.jsx("button",{onClick:()=>o("simulator"),className:`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-xl text-xs lg:text-sm font-semibold transition-all whitespace-nowrap ${r==="simulator"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Pace Simulator"})]}),_.jsxs("div",{className:"flex items-center gap-1.5 sm:gap-2.5 shrink-0",children:[_.jsxs("div",{className:"flex flex-col items-end px-2.5 py-1 rounded-xl bg-white border border-[#EADBCE] shadow-xs",children:[_.jsx("span",{className:"text-[9px] font-mono text-stone-500 uppercase leading-none",children:"Score"}),_.jsxs("span",{className:"font-pixel text-[11px] sm:text-xs text-[#B45309] font-bold leading-tight mt-0.5",children:[l," PTS"]})]}),_.jsxs("button",{onClick:e,className:"flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-white hover:bg-[#FAF5EE] rounded-2xl border border-[#EADBCE] shadow-sm transition active:scale-95 group",title:"Switch or create account/profile",children:[_.jsx("div",{className:"w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FEF3C7] text-[#B45309] flex items-center justify-center font-display font-bold text-xs border border-[#FDE68A]",children:s.name.charAt(0).toUpperCase()}),_.jsxs("div",{className:"text-left hidden xl:block max-w-[100px] truncate",children:[_.jsx("p",{className:"text-xs font-bold text-stone-800 leading-tight truncate",children:s.name}),_.jsxs("p",{className:"text-[10px] font-mono text-stone-500",children:[s.badges.length," badges"]})]}),_.jsx(qv,{className:"w-3.5 h-3.5 text-stone-500"})]}),_.jsx("button",{onClick:t,className:"p-2 sm:p-2.5 bg-white hover:bg-[#FAF5EE] rounded-2xl border border-[#EADBCE] text-stone-600 hover:text-stone-900 transition shadow-sm",title:"Arcade Calculation Rules",children:_.jsx(E_,{className:"w-4 h-4"})})]})]}),_.jsxs("div",{className:"flex md:hidden overflow-x-auto py-2 gap-1.5 no-scrollbar border-t border-[#EADBCE]/70",children:[_.jsx("button",{onClick:()=>o("calculator"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="calculator"?"bg-[#292524] text-white shadow-sm":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Overview & Points"}),_.jsx("button",{onClick:()=>o("frequency"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="frequency"?"bg-[#292524] text-white shadow-sm":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Velocity Analytics"}),_.jsxs("button",{onClick:()=>o("badges"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="badges"?"bg-[#292524] text-white shadow-sm":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:["Badges (",s.badges.length,")"]}),_.jsx("button",{onClick:()=>o("swag"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="swag"?"bg-[#292524] text-white shadow-sm":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Swag Tiers"}),_.jsx("button",{onClick:()=>o("simulator"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="simulator"?"bg-[#292524] text-white shadow-sm":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Pace Simulator"})]})]})});var Tf={};(function s(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),w=I.getContext("2d");w.fillRect(0,0,1,1);var W=I.transferToImageBitmap();w.createPattern(W,"no-repeat")}catch{return!1}return!0})();function f(){}function p(I){var w=t.exports.Promise,W=w!==void 0?w:e.Promise;return typeof W=="function"?new W(I):(I(f,f),null)}var x=(function(I,w){return{transform:function(W){if(I)return W;if(w.has(W))return w.get(W);var ye=new OffscreenCanvas(W.width,W.height),X=ye.getContext("2d");return X.drawImage(W,0,0),w.set(W,ye),ye},clear:function(){w.clear()}}})(d,new Map),v=(function(){var I=Math.floor(16.666666666666668),w,W,ye={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(re){var fe=Math.random();return ye[fe]=requestAnimationFrame(function ie(xe){X===xe||X+I-1<xe?(X=xe,delete ye[fe],re()):ye[fe]=requestAnimationFrame(ie)}),fe},W=function(re){ye[re]&&cancelAnimationFrame(ye[re])}):(w=function(re){return setTimeout(re,I)},W=function(re){return clearTimeout(re)}),{frame:w,cancel:W}})(),g=(function(){var I,w,W={};function ye(X){function re(fe,ie){X.postMessage({options:fe||{},callback:ie})}X.init=function(ie){var xe=ie.transferControlToOffscreen();X.postMessage({canvas:xe},[xe])},X.fire=function(ie,xe,Le){if(w)return re(ie,null),w;var Ae=Math.random().toString(36).slice(2);return w=p(function($e){function ve(ge){ge.data.callback===Ae&&(delete W[Ae],X.removeEventListener("message",ve),w=null,x.clear(),Le(),$e())}X.addEventListener("message",ve),re(ie,Ae),W[Ae]=ve.bind(null,{data:{callback:Ae}})}),w},X.reset=function(){X.postMessage({reset:!0});for(var ie in W)W[ie](),delete W[ie]}}return function(){if(I)return I;if(!r&&l){var X=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([X])))}catch(re){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",re),null}ye(I)}return I}})(),S={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(I,w){return w?w(I):I}function b(I){return I!=null}function E(I,w,W){return M(I&&b(I[w])?I[w]:S[w],W)}function y(I){return I<0?0:Math.floor(I)}function B(I,w){return Math.floor(Math.random()*(w-I))+I}function F(I){return parseInt(I,16)}function C(I){return I.map(U)}function U(I){var w=String(I).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:F(w.substring(0,2)),g:F(w.substring(2,4)),b:F(w.substring(4,6))}}function O(I){var w=E(I,"origin",Object);return w.x=E(w,"x",Number),w.y=E(w,"y",Number),w}function V(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function H(I){var w=I.getBoundingClientRect();I.width=w.width,I.height=w.height}function P(I){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=I,w}function R(I,w,W,ye,X,re,fe,ie,xe){I.save(),I.translate(w,W),I.rotate(re),I.scale(ye,X),I.arc(0,0,1,fe,ie,xe),I.restore()}function k(I){var w=I.angle*(Math.PI/180),W=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-w+(.5*W-Math.random()*W),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function J(I,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var W=w.tick++/w.totalTicks,ye=w.x+w.random*w.tiltCos,X=w.y+w.random*w.tiltSin,re=w.wobbleX+w.random*w.tiltCos,fe=w.wobbleY+w.random*w.tiltSin;if(I.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-W)+")",I.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))I.fill(pe(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(re-ye)*.1,Math.abs(fe-X)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var ie=Math.PI/10*w.wobble,xe=Math.abs(re-ye)*.1,Le=Math.abs(fe-X)*.1,Ae=w.shape.bitmap.width*w.scalar,$e=w.shape.bitmap.height*w.scalar,ve=new DOMMatrix([Math.cos(ie)*xe,Math.sin(ie)*xe,-Math.sin(ie)*Le,Math.cos(ie)*Le,w.x,w.y]);ve.multiplySelf(new DOMMatrix(w.shape.matrix));var ge=I.createPattern(x.transform(w.shape.bitmap),"no-repeat");ge.setTransform(ve),I.globalAlpha=1-W,I.fillStyle=ge,I.fillRect(w.x-Ae/2,w.y-$e/2,Ae,$e),I.globalAlpha=1}else if(w.shape==="circle")I.ellipse?I.ellipse(w.x,w.y,Math.abs(re-ye)*w.ovalScalar,Math.abs(fe-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):R(I,w.x,w.y,Math.abs(re-ye)*w.ovalScalar,Math.abs(fe-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var D=Math.PI/2*3,Ue=4*w.scalar,Ee=8*w.scalar,Fe=w.x,Ce=w.y,Qe=5,Ne=Math.PI/Qe;Qe--;)Fe=w.x+Math.cos(D)*Ee,Ce=w.y+Math.sin(D)*Ee,I.lineTo(Fe,Ce),D+=Ne,Fe=w.x+Math.cos(D)*Ue,Ce=w.y+Math.sin(D)*Ue,I.lineTo(Fe,Ce),D+=Ne;else I.moveTo(Math.floor(w.x),Math.floor(w.y)),I.lineTo(Math.floor(w.wobbleX),Math.floor(X)),I.lineTo(Math.floor(re),Math.floor(fe)),I.lineTo(Math.floor(ye),Math.floor(w.wobbleY));return I.closePath(),I.fill(),w.tick<w.totalTicks}function Z(I,w,W,ye,X){var re=w.slice(),fe=I.getContext("2d"),ie,xe,Le=p(function(Ae){function $e(){ie=xe=null,fe.clearRect(0,0,ye.width,ye.height),x.clear(),X(),Ae()}function ve(){r&&!(ye.width===o.width&&ye.height===o.height)&&(ye.width=I.width=o.width,ye.height=I.height=o.height),!ye.width&&!ye.height&&(W(I),ye.width=I.width,ye.height=I.height),fe.clearRect(0,0,ye.width,ye.height),re=re.filter(function(ge){return J(fe,ge)}),re.length?ie=v.frame(ve):$e()}ie=v.frame(ve),xe=$e});return{addFettis:function(Ae){return re=re.concat(Ae),Le},canvas:I,promise:Le,reset:function(){ie&&v.cancel(ie),xe&&xe()}}}function oe(I,w){var W=!I,ye=!!E(w||{},"resize"),X=!1,re=E(w,"disableForReducedMotion",Boolean),fe=l&&!!E(w||{},"useWorker"),ie=fe?g():null,xe=W?V:H,Le=I&&ie?!!I.__confetti_initialized:!1,Ae=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,$e;function ve(D,Ue,Ee){for(var Fe=E(D,"particleCount",y),Ce=E(D,"angle",Number),Qe=E(D,"spread",Number),Ne=E(D,"startVelocity",Number),L=E(D,"decay",Number),A=E(D,"gravity",Number),ee=E(D,"drift",Number),me=E(D,"colors",C),Me=E(D,"ticks",Number),_e=E(D,"shapes"),Ye=E(D,"scalar"),Ie=!!E(D,"flat"),He=O(D),ft=Fe,Te=[],Xe=I.width*He.x,rt=I.height*He.y;ft--;)Te.push(k({x:Xe,y:rt,angle:Ce,spread:Qe,startVelocity:Ne,color:me[ft%me.length],shape:_e[B(0,_e.length)],ticks:Me,decay:L,gravity:A,drift:ee,scalar:Ye,flat:Ie}));return $e?$e.addFettis(Te):($e=Z(I,Te,xe,Ue,Ee),$e.promise)}function ge(D){var Ue=re||E(D,"disableForReducedMotion",Boolean),Ee=E(D,"zIndex",Number);if(Ue&&Ae)return p(function(Ne){Ne()});W&&$e?I=$e.canvas:W&&!I&&(I=P(Ee),document.body.appendChild(I)),ye&&!Le&&xe(I);var Fe={width:I.width,height:I.height};ie&&!Le&&ie.init(I),Le=!0,ie&&(I.__confetti_initialized=!0);function Ce(){if(ie){var Ne={getBoundingClientRect:function(){if(!W)return I.getBoundingClientRect()}};xe(Ne),ie.postMessage({resize:{width:Ne.width,height:Ne.height}});return}Fe.width=Fe.height=null}function Qe(){$e=null,ye&&(X=!1,e.removeEventListener("resize",Ce)),W&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,Le=!1)}return ye&&!X&&(X=!0,e.addEventListener("resize",Ce,!1)),ie?ie.fire(D,Fe,Qe):ve(D,Fe,Qe)}return ge.reset=function(){ie&&ie.reset(),$e&&$e.reset()},ge}var ue;function ae(){return ue||(ue=oe(null,{useWorker:!0,resize:!0})),ue}function pe(I,w,W,ye,X,re,fe){var ie=new Path2D(I),xe=new Path2D;xe.addPath(ie,new DOMMatrix(w));var Le=new Path2D;return Le.addPath(xe,new DOMMatrix([Math.cos(fe)*X,Math.sin(fe)*X,-Math.sin(fe)*re,Math.cos(fe)*re,W,ye])),Le}function j(I){if(!u)throw new Error("path confetti are not supported in this browser");var w,W;typeof I=="string"?w=I:(w=I.path,W=I.matrix);var ye=new Path2D(w),X=document.createElement("canvas"),re=X.getContext("2d");if(!W){for(var fe=1e3,ie=fe,xe=fe,Le=0,Ae=0,$e,ve,ge=0;ge<fe;ge+=2)for(var D=0;D<fe;D+=2)re.isPointInPath(ye,ge,D,"nonzero")&&(ie=Math.min(ie,ge),xe=Math.min(xe,D),Le=Math.max(Le,ge),Ae=Math.max(Ae,D));$e=Le-ie,ve=Ae-xe;var Ue=10,Ee=Math.min(Ue/$e,Ue/ve);W=[Ee,0,0,Ee,-Math.round($e/2+ie)*Ee,-Math.round(ve/2+xe)*Ee]}return{type:"path",path:w,matrix:W}}function de(I){var w,W=1,ye="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?w=I:(w=I.text,W="scalar"in I?I.scalar:W,X="fontFamily"in I?I.fontFamily:X,ye="color"in I?I.color:ye);var re=10*W,fe=""+re+"px "+X,ie=new OffscreenCanvas(re,re),xe=ie.getContext("2d");xe.font=fe;var Le=xe.measureText(w),Ae=Math.ceil(Le.actualBoundingBoxRight+Le.actualBoundingBoxLeft),$e=Math.ceil(Le.actualBoundingBoxAscent+Le.actualBoundingBoxDescent),ve=2,ge=Le.actualBoundingBoxLeft+ve,D=Le.actualBoundingBoxAscent+ve;Ae+=ve+ve,$e+=ve+ve,ie=new OffscreenCanvas(Ae,$e),xe=ie.getContext("2d"),xe.font=fe,xe.fillStyle=ye,xe.fillText(w,ge,D);var Ue=1/W;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[Ue,0,0,Ue,-Ae*Ue/2,-$e*Ue/2]}}t.exports=function(){return ae().apply(this,arguments)},t.exports.reset=function(){ae().reset()},t.exports.create=oe,t.exports.shapeFromPath=j,t.exports.shapeFromText=de})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Tf,!1);const $s=Tf.exports;Tf.exports.create;const W_=({currentProfile:s,onProfileLoaded:e,onOpenAddBadge:t})=>{const[r,o]=at.useState(s.profileUrl||"https://www.skills.google/public_profiles/a88e0c09-8768-4e28-bc35-685f35bfdb5b"),[l,u]=at.useState(!1),[d,f]=at.useState(null),p=async x=>{x.preventDefault();const v=r.trim();if(v){u(!0),f({type:"info",text:"Connecting to Google Skills Boost & extracting badges..."});try{const g=await Fg(v);if(!g.badges||g.badges.length===0)throw new Error("No public badges were found on this profile URL. Make sure your profile is set to Public in Google Cloud Skills Boost.");const S=$l(g.name||"Suraj Singh",80),M=Lg(v),b={id:s.id||`profile-${Date.now()}`,name:S,avatarSeed:S.replace(/\s+/g,""),profileUrl:M,lastUpdated:new Date().toISOString().split("T")[0],isCurrent:!0,badges:g.badges,seasonTarget:"Season 2026"};Cd(b),e(b),$s({particleCount:80,spread:80,origin:{y:.6},colors:["#F59E0B","#10B981","#EA580C","#9333EA"]}),f({type:"success",text:`Found profile for "${b.name}"! Loaded ${g.badges.length} verified Google Cloud badges. Your points are calculated and saved!`})}catch(g){f({type:"error",text:(g==null?void 0:g.message)||"Could not fetch profile. Please check the URL and ensure your profile is set to Public."})}finally{u(!1)}}};return _.jsxs("div",{className:"bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8 transition-all",children:[_.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 pb-5 border-b border-[#EADBCE]",children:[_.jsxs("div",{className:"max-w-2xl",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[_.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A]",children:[_.jsx(Hv,{className:"w-3.5 h-3.5"}),"Direct URL Profile Synchronizer"]}),_.jsx("span",{className:"text-xs font-sans text-stone-500 hidden sm:inline",children:"Saved automatically • No need to enter again"})]}),_.jsx("h2",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Calculate Points from Your Profile URL"}),_.jsx("p",{className:"text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed",children:"Enter your Google Skills / Cloud Skills Boost public profile URL. Your badges, points, velocity, and swag milestones are calculated and saved instantly."})]}),_.jsxs("div",{className:"flex items-center gap-3 bg-[#FAF7F2] p-3 rounded-2xl border border-[#EADBCE] shrink-0",children:[_.jsx("div",{className:"w-10 h-10 rounded-xl bg-white text-[#B45309] font-display font-bold text-base flex items-center justify-center border border-[#EADBCE] shadow-xs",children:s.name.charAt(0).toUpperCase()}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx("span",{className:"text-xs font-bold text-stone-900 font-display",children:s.name}),_.jsxs("span",{className:"inline-flex items-center gap-1 text-[9px] font-mono font-bold text-[#059669] bg-[#ECFDF5] px-1.5 py-0.2 rounded-full border border-[#A7F3D0]",children:[_.jsx(Yg,{className:"w-2.5 h-2.5"})," Active"]})]}),_.jsxs("p",{className:"text-[11px] font-mono text-stone-500 mt-0.5",children:[s.badges.length," ",s.badges.length===1?"badge":"badges"," recorded"]})]})]})]}),_.jsxs("form",{onSubmit:p,className:"mt-5",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row gap-2.5 sm:gap-3",children:[_.jsxs("div",{className:"relative flex-1",children:[_.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400",children:_.jsx(l_,{className:"w-4 h-4 text-[#B45309]"})}),_.jsx("input",{type:"text",required:!0,value:r,onChange:x=>o(x.target.value),placeholder:"https://www.skills.google/public_profiles/...",className:"w-full pl-10 pr-4 py-3 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-stone-900 shadow-xs"})]}),_.jsx("button",{type:"submit",disabled:l||!r.trim(),className:"px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] text-white rounded-2xl text-xs sm:text-sm font-bold font-display shadow-arcade-amber hover:shadow-xs active:translate-y-0.5 transition flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed",children:l?_.jsxs(_.Fragment,{children:[_.jsx(wm,{className:"w-4 h-4 animate-spin"}),_.jsx("span",{children:"Finding Badges..."})]}):_.jsxs(_.Fragment,{children:[_.jsx(wf,{className:"w-4 h-4"}),_.jsx("span",{children:"Calculate Arcade Points"})]})})]}),_.jsxs("div",{className:"flex flex-wrap items-center justify-between text-xs text-stone-500 mt-3 pt-1",children:[_.jsxs("span",{className:"text-[11px] font-sans",children:["Supported: ",_.jsx("code",{className:"font-mono text-stone-700 bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#EADBCE]",children:"skills.google"})," or ",_.jsx("code",{className:"font-mono text-stone-700 bg-[#FAF7F2] px-1.5 py-0.5 rounded border border-[#EADBCE]",children:"cloudskillsboost.google"})]}),t&&_.jsx("button",{type:"button",onClick:t,className:"text-[#B45309] hover:underline font-semibold text-[11px] mt-1 sm:mt-0",children:"+ Add Badges Manually from Catalog"})]})]}),d&&_.jsxs("div",{className:`mt-4 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm font-sans ${d.type==="success"?"bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857]":d.type==="error"?"bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C]":"bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309]"}`,children:[d.type==="success"&&_.jsx(jg,{className:"w-5 h-5 flex-shrink-0 mt-0.5 text-[#059669]"}),d.type==="error"&&_.jsx(Gg,{className:"w-5 h-5 flex-shrink-0 mt-0.5 text-[#BE123C]"}),d.type==="info"&&_.jsx(wm,{className:"w-5 h-5 flex-shrink-0 animate-spin mt-0.5 text-[#B45309]"}),_.jsx("div",{className:"flex-1",children:_.jsx("p",{className:"leading-snug",children:d.text})}),_.jsx("button",{onClick:()=>f(null),className:"text-stone-400 hover:text-stone-600 font-bold ml-2 text-base",children:"×"})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="173",X_=0,bm=1,q_=2,Kg=1,$_=2,Vi=3,br=0,Un=1,Hi=2,Mr=0,Ws=1,Tm=2,Cm=3,Am=4,Y_=5,Zr=100,Z_=101,K_=102,J_=103,Q_=104,ey=200,ty=201,ny=202,iy=203,Rd=204,Pd=205,ry=206,sy=207,oy=208,ay=209,ly=210,cy=211,uy=212,dy=213,fy=214,Nd=0,Dd=1,Ld=2,Ys=3,Fd=4,Id=5,Ud=6,kd=7,Jg=0,hy=1,py=2,wr=0,my=1,gy=2,xy=3,vy=4,_y=5,yy=6,Sy=7,Qg=300,Zs=301,Ks=302,Od=303,Bd=304,Ql=306,zd=1e3,Jr=1001,Vd=1002,hi=1003,Ey=1004,ml=1005,Ei=1006,Gu=1007,Qr=1008,Xi=1009,ex=1010,tx=1011,Jo=1012,Af=1013,es=1014,Gi=1015,ia=1016,Rf=1017,Pf=1018,Js=1020,nx=35902,ix=1021,rx=1022,fi=1023,sx=1024,ox=1025,Xs=1026,Qs=1027,ax=1028,Nf=1029,lx=1030,Df=1031,Lf=1033,Hl=33776,Gl=33777,jl=33778,Wl=33779,Hd=35840,Gd=35841,jd=35842,Wd=35843,Xd=36196,qd=37492,$d=37496,Yd=37808,Zd=37809,Kd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,of=37818,af=37819,lf=37820,cf=37821,Xl=36492,uf=36494,df=36495,cx=36283,ff=36284,hf=36285,pf=36286,My=3200,wy=3201,ux=0,by=1,Er="",Qn="srgb",eo="srgb-linear",Yl="linear",Dt="srgb",As=7680,Rm=519,Ty=512,Cy=513,Ay=514,dx=515,Ry=516,Py=517,Ny=518,Dy=519,Pm=35044,Nm="300 es",ji=2e3,Zl=2001;class io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,mf=180/Math.PI;function ro(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function Ly(s,e){return(s%e+e)%e}function Wu(s,e,t){return(1-t)*s+t*e}function zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,r,o,l,u,d,f,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p)}set(e,t,r,o,l,u,d,f,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=f,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],x=r[4],v=r[7],g=r[2],S=r[5],M=r[8],b=o[0],E=o[3],y=o[6],B=o[1],F=o[4],C=o[7],U=o[2],O=o[5],V=o[8];return l[0]=u*b+d*B+f*U,l[3]=u*E+d*F+f*O,l[6]=u*y+d*C+f*V,l[1]=p*b+x*B+v*U,l[4]=p*E+x*F+v*O,l[7]=p*y+x*C+v*V,l[2]=g*b+S*B+M*U,l[5]=g*E+S*F+M*O,l[8]=g*y+S*C+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],x=e[8];return t*u*x-t*d*p-r*l*x+r*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],x=e[8],v=x*u-d*p,g=d*f-x*l,S=p*l-u*f,M=t*v+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=v*b,e[1]=(o*p-x*r)*b,e[2]=(d*r-o*u)*b,e[3]=g*b,e[4]=(x*t-o*f)*b,e[5]=(o*l-d*t)*b,e[6]=S*b,e[7]=(r*f-p*t)*b,e[8]=(u*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Xu.makeScale(e,t)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new gt;function fx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Kl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fy(){const s=Kl("canvas");return s.style.display="block",s}const Dm={};function Hs(s){s in Dm||(Dm[s]=!0,console.warn(s))}function Iy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Uy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ky(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Lm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Oy(){const s={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=Wi(o.r),o.g=Wi(o.g),o.b=Wi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Er?Yl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[eo]:{primaries:e,whitePoint:r,transfer:Yl,toXYZ:Lm,fromXYZ:Fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Lm,fromXYZ:Fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const Pt=Oy();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class By{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Kl("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Wi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Wi(t[r]/255)*255):t[r]=Wi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zy=0;class hx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=ro(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(qu(o[u].image)):l.push(qu(o[u]))}else l=qu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?By.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vy=0;class kn extends io{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=Jr,o=Jr,l=Ei,u=Qr,d=fi,f=Xi,p=kn.DEFAULT_ANISOTROPY,x=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=ro(),this.name="",this.source=new hx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Qg;kn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,o=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],x=f[4],v=f[8],g=f[1],S=f[5],M=f[9],b=f[2],E=f[6],y=f[10];if(Math.abs(x-g)<.01&&Math.abs(v-b)<.01&&Math.abs(M-E)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+b)<.1&&Math.abs(M+E)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,C=(S+1)/2,U=(y+1)/2,O=(x+g)/4,V=(v+b)/4,H=(M+E)/4;return F>C&&F>U?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=O/r,l=V/r):C>U?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=O/o,l=H/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=V/l,o=H/l),this.set(r,o,l,t),this}let B=Math.sqrt((E-M)*(E-M)+(v-b)*(v-b)+(g-x)*(g-x));return Math.abs(B)<.001&&(B=1),this.x=(E-M)/B,this.y=(v-b)/B,this.z=(g-x)/B,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hy extends io{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new kn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new hx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Hy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class px extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gy extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3];const g=l[u+0],S=l[u+1],M=l[u+2],b=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(d===1){e[t+0]=g,e[t+1]=S,e[t+2]=M,e[t+3]=b;return}if(v!==b||f!==g||p!==S||x!==M){let E=1-d;const y=f*g+p*S+x*M+v*b,B=y>=0?1:-1,F=1-y*y;if(F>Number.EPSILON){const U=Math.sqrt(F),O=Math.atan2(U,y*B);E=Math.sin(E*O)/U,d=Math.sin(d*O)/U}const C=d*B;if(f=f*E+g*C,p=p*E+S*C,x=x*E+M*C,v=v*E+b*C,E===1-d){const U=1/Math.sqrt(f*f+p*p+x*x+v*v);f*=U,p*=U,x*=U,v*=U}}e[t]=f,e[t+1]=p,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],p=r[o+2],x=r[o+3],v=l[u],g=l[u+1],S=l[u+2],M=l[u+3];return e[t]=d*M+x*v+f*S-p*g,e[t+1]=f*M+x*g+p*v-d*S,e[t+2]=p*M+x*S+d*g-f*v,e[t+3]=x*M-d*v-f*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),x=d(o/2),v=d(l/2),g=f(r/2),S=f(o/2),M=f(l/2);switch(u){case"XYZ":this._x=g*x*v+p*S*M,this._y=p*S*v-g*x*M,this._z=p*x*M+g*S*v,this._w=p*x*v-g*S*M;break;case"YXZ":this._x=g*x*v+p*S*M,this._y=p*S*v-g*x*M,this._z=p*x*M-g*S*v,this._w=p*x*v+g*S*M;break;case"ZXY":this._x=g*x*v-p*S*M,this._y=p*S*v+g*x*M,this._z=p*x*M+g*S*v,this._w=p*x*v-g*S*M;break;case"ZYX":this._x=g*x*v-p*S*M,this._y=p*S*v+g*x*M,this._z=p*x*M-g*S*v,this._w=p*x*v+g*S*M;break;case"YZX":this._x=g*x*v+p*S*M,this._y=p*S*v+g*x*M,this._z=p*x*M-g*S*v,this._w=p*x*v-g*S*M;break;case"XZY":this._x=g*x*v-p*S*M,this._y=p*S*v-g*x*M,this._z=p*x*M+g*S*v,this._w=p*x*v+g*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],x=t[6],v=t[10],g=r+d+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(x-f)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(x-f)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(f+x)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(f+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,x=t._w;return this._x=r*x+u*d+o*p-l*f,this._y=o*x+u*f+l*d-r*p,this._z=l*x+u*p+r*f-o*d,this._w=u*x-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),x=Math.atan2(p,d),v=Math.sin((1-t)*x)/p,g=Math.sin(t*x)/p;return this._w=u*v+this._w*g,this._x=r*v+this._x*g,this._y=o*v+this._y*g,this._z=l*v+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Im.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Im.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*r),x=2*(d*t-l*o),v=2*(l*r-u*t);return this.x=t+f*p+u*v-d*x,this.y=r+f*x+d*p-l*v,this.z=o+f*v+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new Y,Im=new ra;class sa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,li):li.fromBufferAttribute(l,u),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gl.copy(r.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),xl.subVectors(this.max,Vo),Ps.subVectors(e.a,Vo),Ns.subVectors(e.b,Vo),Ds.subVectors(e.c,Vo),mr.subVectors(Ns,Ps),gr.subVectors(Ds,Ns),Vr.subVectors(Ps,Ds);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Vr.z,Vr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Vr.z,0,-Vr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Vr.y,Vr.x,0];return!Yu(t,Ps,Ns,Ds,xl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,Ps,Ns,Ds,xl))?!1:(vl.crossVectors(mr,gr),t=[vl.x,vl.y,vl.z],Yu(t,Ps,Ns,Ds,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],li=new Y,gl=new sa,Ps=new Y,Ns=new Y,Ds=new Y,mr=new Y,gr=new Y,Vr=new Y,Vo=new Y,xl=new Y,vl=new Y,Hr=new Y;function Yu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Hr.fromArray(s,l);const d=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),f=e.dot(Hr),p=t.dot(Hr),x=r.dot(Hr);if(Math.max(-Math.max(f,p,x),Math.min(f,p,x))>d)return!1}return!0}const jy=new sa,Ho=new Y,Zu=new Y;class ec{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):jy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ho,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Zu)),this.expandByPoint(Ho.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new Y,Ku=new Y,_l=new Y,xr=new Y,Ju=new Y,yl=new Y,Qu=new Y;class mx{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ku.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Ku);const l=e.distanceTo(t)*.5,u=-this.direction.dot(_l),d=xr.dot(this.direction),f=-xr.dot(_l),p=xr.lengthSq(),x=Math.abs(1-u*u);let v,g,S,M;if(x>0)if(v=u*f-d,g=u*d-f,M=l*x,v>=0)if(g>=-M)if(g<=M){const b=1/x;v*=b,g*=b,S=v*(v+u*g+2*d)+g*(u*v+g+2*f)+p}else g=l,v=Math.max(0,-(u*g+d)),S=-v*v+g*(g+2*f)+p;else g=-l,v=Math.max(0,-(u*g+d)),S=-v*v+g*(g+2*f)+p;else g<=-M?(v=Math.max(0,-(-u*l+d)),g=v>0?-l:Math.min(Math.max(-l,-f),l),S=-v*v+g*(g+2*f)+p):g<=M?(v=0,g=Math.min(Math.max(-l,-f),l),S=g*(g+2*f)+p):(v=Math.max(0,-(u*l+d)),g=v>0?l:Math.min(Math.max(-l,-f),l),S=-v*v+g*(g+2*f)+p);else g=u>0?-l:l,v=Math.max(0,-(u*g+d)),S=-v*v+g*(g+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Ku).addScaledVector(_l,g),S}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),o=ki.dot(ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const p=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-g.z)*v,f=(e.max.z-g.z)*v):(d=(e.max.z-g.z)*v,f=(e.min.z-g.z)*v),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,o,l){Ju.subVectors(t,e),yl.subVectors(r,e),Qu.crossVectors(Ju,yl);let u=this.direction.dot(Qu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const f=d*this.direction.dot(yl.crossVectors(xr,yl));if(f<0)return null;const p=d*this.direction.dot(Ju.cross(xr));if(p<0||f+p>u)return null;const x=-d*xr.dot(Qu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,r,o,l,u,d,f,p,x,v,g,S,M,b,E){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p,x,v,g,S,M,b,E)}set(e,t,r,o,l,u,d,f,p,x,v,g,S,M,b,E){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=d,y[13]=f,y[2]=p,y[6]=x,y[10]=v,y[14]=g,y[3]=S,y[7]=M,y[11]=b,y[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const g=u*x,S=u*v,M=d*x,b=d*v;t[0]=f*x,t[4]=-f*v,t[8]=p,t[1]=S+M*p,t[5]=g-b*p,t[9]=-d*f,t[2]=b-g*p,t[6]=M+S*p,t[10]=u*f}else if(e.order==="YXZ"){const g=f*x,S=f*v,M=p*x,b=p*v;t[0]=g+b*d,t[4]=M*d-S,t[8]=u*p,t[1]=u*v,t[5]=u*x,t[9]=-d,t[2]=S*d-M,t[6]=b+g*d,t[10]=u*f}else if(e.order==="ZXY"){const g=f*x,S=f*v,M=p*x,b=p*v;t[0]=g-b*d,t[4]=-u*v,t[8]=M+S*d,t[1]=S+M*d,t[5]=u*x,t[9]=b-g*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const g=u*x,S=u*v,M=d*x,b=d*v;t[0]=f*x,t[4]=M*p-S,t[8]=g*p+b,t[1]=f*v,t[5]=b*p+g,t[9]=S*p-M,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,S=u*p,M=d*f,b=d*p;t[0]=f*x,t[4]=b-g*v,t[8]=M*v+S,t[1]=v,t[5]=u*x,t[9]=-d*x,t[2]=-p*x,t[6]=S*v+M,t[10]=g-b*v}else if(e.order==="XZY"){const g=u*f,S=u*p,M=d*f,b=d*p;t[0]=f*x,t[4]=-v,t[8]=p*x,t[1]=g*v+b,t[5]=u*x,t[9]=S*v-M,t[2]=M*v-S,t[6]=d*x,t[10]=b*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,Xy)}lookAt(e,t,r){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),vr.crossVectors(r,Hn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),vr.crossVectors(r,Hn)),vr.normalize(),Sl.crossVectors(Hn,vr),o[0]=vr.x,o[4]=Sl.x,o[8]=Hn.x,o[1]=vr.y,o[5]=Sl.y,o[9]=Hn.y,o[2]=vr.z,o[6]=Sl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],x=r[1],v=r[5],g=r[9],S=r[13],M=r[2],b=r[6],E=r[10],y=r[14],B=r[3],F=r[7],C=r[11],U=r[15],O=o[0],V=o[4],H=o[8],P=o[12],R=o[1],k=o[5],J=o[9],Z=o[13],oe=o[2],ue=o[6],ae=o[10],pe=o[14],j=o[3],de=o[7],I=o[11],w=o[15];return l[0]=u*O+d*R+f*oe+p*j,l[4]=u*V+d*k+f*ue+p*de,l[8]=u*H+d*J+f*ae+p*I,l[12]=u*P+d*Z+f*pe+p*w,l[1]=x*O+v*R+g*oe+S*j,l[5]=x*V+v*k+g*ue+S*de,l[9]=x*H+v*J+g*ae+S*I,l[13]=x*P+v*Z+g*pe+S*w,l[2]=M*O+b*R+E*oe+y*j,l[6]=M*V+b*k+E*ue+y*de,l[10]=M*H+b*J+E*ae+y*I,l[14]=M*P+b*Z+E*pe+y*w,l[3]=B*O+F*R+C*oe+U*j,l[7]=B*V+F*k+C*ue+U*de,l[11]=B*H+F*J+C*ae+U*I,l[15]=B*P+F*Z+C*pe+U*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],x=e[2],v=e[6],g=e[10],S=e[14],M=e[3],b=e[7],E=e[11],y=e[15];return M*(+l*f*v-o*p*v-l*d*g+r*p*g+o*d*S-r*f*S)+b*(+t*f*S-t*p*g+l*u*g-o*u*S+o*p*x-l*f*x)+E*(+t*p*v-t*d*S-l*u*v+r*u*S+l*d*x-r*p*x)+y*(-o*d*x-t*f*v+t*d*g+o*u*v-r*u*g+r*f*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],x=e[8],v=e[9],g=e[10],S=e[11],M=e[12],b=e[13],E=e[14],y=e[15],B=v*E*p-b*g*p+b*f*S-d*E*S-v*f*y+d*g*y,F=M*g*p-x*E*p-M*f*S+u*E*S+x*f*y-u*g*y,C=x*b*p-M*v*p+M*d*S-u*b*S-x*d*y+u*v*y,U=M*v*f-x*b*f-M*d*g+u*b*g+x*d*E-u*v*E,O=t*B+r*F+o*C+l*U;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/O;return e[0]=B*V,e[1]=(b*g*l-v*E*l-b*o*S+r*E*S+v*o*y-r*g*y)*V,e[2]=(d*E*l-b*f*l+b*o*p-r*E*p-d*o*y+r*f*y)*V,e[3]=(v*f*l-d*g*l-v*o*p+r*g*p+d*o*S-r*f*S)*V,e[4]=F*V,e[5]=(x*E*l-M*g*l+M*o*S-t*E*S-x*o*y+t*g*y)*V,e[6]=(M*f*l-u*E*l-M*o*p+t*E*p+u*o*y-t*f*y)*V,e[7]=(u*g*l-x*f*l+x*o*p-t*g*p-u*o*S+t*f*S)*V,e[8]=C*V,e[9]=(M*v*l-x*b*l-M*r*S+t*b*S+x*r*y-t*v*y)*V,e[10]=(u*b*l-M*d*l+M*r*p-t*b*p-u*r*y+t*d*y)*V,e[11]=(x*d*l-u*v*l-x*r*p+t*v*p+u*r*S-t*d*S)*V,e[12]=U*V,e[13]=(x*b*o-M*v*o+M*r*g-t*b*g-x*r*E+t*v*E)*V,e[14]=(M*d*o-u*b*o-M*r*f+t*b*f+u*r*E-t*d*E)*V,e[15]=(u*v*o-x*d*o+x*r*f-t*v*f-u*r*g+t*d*g)*V,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,x=l*d;return this.set(p*u+r,p*d-o*f,p*f+o*d,0,p*d+o*f,x*d+r,x*f-o*u,0,p*f-o*d,x*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,x=u+u,v=d+d,g=l*p,S=l*x,M=l*v,b=u*x,E=u*v,y=d*v,B=f*p,F=f*x,C=f*v,U=r.x,O=r.y,V=r.z;return o[0]=(1-(b+y))*U,o[1]=(S+C)*U,o[2]=(M-F)*U,o[3]=0,o[4]=(S-C)*O,o[5]=(1-(g+y))*O,o[6]=(E+B)*O,o[7]=0,o[8]=(M+F)*V,o[9]=(E-B)*V,o[10]=(1-(g+b))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),d=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const p=1/l,x=1/u,v=1/d;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=x,ci.elements[5]*=x,ci.elements[6]*=x,ci.elements[8]*=v,ci.elements[9]*=v,ci.elements[10]*=v,t.setFromRotationMatrix(ci),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=ji){const f=this.elements,p=2*l/(t-e),x=2*l/(r-o),v=(t+e)/(t-e),g=(r+o)/(r-o);let S,M;if(d===ji)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===Zl)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=x,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=ji){const f=this.elements,p=1/(t-e),x=1/(r-o),v=1/(u-l),g=(t+e)*p,S=(r+o)*x;let M,b;if(d===ji)M=(u+l)*v,b=-2*v;else if(d===Zl)M=l*v,b=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*x,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=b,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new Y,ci=new Bt,Wy=new Y(0,0,0),Xy=new Y(1,1,1),vr=new Y,Sl=new Y,Hn=new Y,Um=new Bt,km=new ra;class Mi{constructor(e=0,t=0,r=0,o=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],x=o[9],v=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class gx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qy=0;const Om=new Y,Fs=new ra,Oi=new Bt,El=new Y,Go=new Y,$y=new Y,Yy=new ra,Bm=new Y(1,0,0),zm=new Y(0,1,0),Vm=new Y(0,0,1),Hm={type:"added"},Zy={type:"removed"},Is={type:"childadded",child:null},ed={type:"childremoved",child:null};class fn extends io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new Y,t=new Mi,r=new ra,o=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new gt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Go,El,this.up):Oi.lookAt(El,Go,this.up),this.quaternion.setFromRotationMatrix(Oi),o&&(Oi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zy),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,$y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,x=f.length;p<x;p++){const v=f[p];l(e.shapes,v)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),x=u(e.images),v=u(e.shapes),g=u(e.skeletons),S=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const f=[];for(const p in d){const x=d[p];delete x.metadata,f.push(x)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fn.DEFAULT_UP=new Y(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new Y,Bi=new Y,td=new Y,zi=new Y,Us=new Y,ks=new Y,Gm=new Y,nd=new Y,id=new Y,rd=new Y,sd=new Lt,od=new Lt,ad=new Lt;class di{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ui.subVectors(e,t),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ui.subVectors(o,t),Bi.subVectors(r,t),td.subVectors(e,t);const u=ui.dot(ui),d=ui.dot(Bi),f=ui.dot(td),p=Bi.dot(Bi),x=Bi.dot(td),v=u*p-d*d;if(v===0)return l.set(0,0,0),null;const g=1/v,S=(p*f-d*x)*g,M=(u*x-d*f)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,zi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,zi.x),f.addScaledVector(u,zi.y),f.addScaledVector(d,zi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return sd.setScalar(0),od.setScalar(0),ad.setScalar(0),sd.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sd,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ad,l.z),u}static isFrontFacing(e,t,r,o){return ui.subVectors(r,t),Bi.subVectors(e,t),ui.cross(Bi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ui.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Us.subVectors(o,r),ks.subVectors(l,r),nd.subVectors(e,r);const f=Us.dot(nd),p=ks.dot(nd);if(f<=0&&p<=0)return t.copy(r);id.subVectors(e,o);const x=Us.dot(id),v=ks.dot(id);if(x>=0&&v<=x)return t.copy(o);const g=f*v-x*p;if(g<=0&&f>=0&&x<=0)return u=f/(f-x),t.copy(r).addScaledVector(Us,u);rd.subVectors(e,l);const S=Us.dot(rd),M=ks.dot(rd);if(M>=0&&S<=M)return t.copy(l);const b=S*p-f*M;if(b<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(ks,d);const E=x*M-S*v;if(E<=0&&v-x>=0&&S-M>=0)return Gm.subVectors(l,o),d=(v-x)/(v-x+(S-M)),t.copy(o).addScaledVector(Gm,d);const y=1/(E+b+g);return u=b*y,d=g*y,t.copy(r).addScaledVector(Us,u).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=Ly(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ld(u,l,e+1/3),this.g=ld(u,l,e),this.b=ld(u,l,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,t=Qn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qn){const r=xx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Pt.fromWorkingColorSpace(yn.copy(this),e),Math.round(St(yn.r*255,0,255))*65536+Math.round(St(yn.g*255,0,255))*256+Math.round(St(yn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(yn.copy(this),t);const r=yn.r,o=yn.g,l=yn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const x=(d+u)/2;if(d===u)f=0,p=0;else{const v=u-d;switch(p=x<=.5?v/(u+d):v/(2-u-d),u){case r:f=(o-l)/v+(o<l?6:0);break;case o:f=(l-r)/v+2;break;case l:f=(r-o)/v+4;break}f/=6}return e.h=f,e.s=p,e.l=x,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Qn){Pt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,o=yn.b;return e!==Qn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Ml);const r=Wu(_r.h,Ml.h,t),o=Wu(_r.s,Ml.s,t),l=Wu(_r.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new At;At.NAMES=xx;let Ky=0;class so extends io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=Ws,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==Zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class vx extends so{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Y,wl=new Ve;let Jy=0;class pi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Pm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=zo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Fn(t,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pm&&(e.usage=this.usage),e}}class _x extends pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class yx extends pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Tn extends pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Qy=0;const Kn=new Bt,cd=new fn,Os=new Y,Gn=new sa,jo=new sa,ln=new Y;class ti extends io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fx(e)?yx:_x)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kn.makeRotationFromQuaternion(e),this.applyMatrix4(Kn),this}rotateX(e){return Kn.makeRotationX(e),this.applyMatrix4(Kn),this}rotateY(e){return Kn.makeRotationY(e),this.applyMatrix4(Kn),this}rotateZ(e){return Kn.makeRotationZ(e),this.applyMatrix4(Kn),this}translate(e,t,r){return Kn.makeTranslation(e,t,r),this.applyMatrix4(Kn),this}scale(e,t,r){return Kn.makeScale(e,t,r),this.applyMatrix4(Kn),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Tn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Gn.min,jo.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,jo.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(jo.min),Gn.expandByPoint(jo.max))}Gn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)ln.fromBufferAttribute(d,p),f&&(Os.fromBufferAttribute(e,p),ln.add(Os)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let H=0;H<r.count;H++)d[H]=new Y,f[H]=new Y;const p=new Y,x=new Y,v=new Y,g=new Ve,S=new Ve,M=new Ve,b=new Y,E=new Y;function y(H,P,R){p.fromBufferAttribute(r,H),x.fromBufferAttribute(r,P),v.fromBufferAttribute(r,R),g.fromBufferAttribute(l,H),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),x.sub(p),v.sub(p),S.sub(g),M.sub(g);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(b.copy(x).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(k),E.copy(v).multiplyScalar(S.x).addScaledVector(x,-M.x).multiplyScalar(k),d[H].add(b),d[P].add(b),d[R].add(b),f[H].add(E),f[P].add(E),f[R].add(E))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let H=0,P=B.length;H<P;++H){const R=B[H],k=R.start,J=R.count;for(let Z=k,oe=k+J;Z<oe;Z+=3)y(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const F=new Y,C=new Y,U=new Y,O=new Y;function V(H){U.fromBufferAttribute(o,H),O.copy(U);const P=d[H];F.copy(P),F.sub(U.multiplyScalar(U.dot(P))).normalize(),C.crossVectors(O,P);const k=C.dot(f[H])<0?-1:1;u.setXYZW(H,F.x,F.y,F.z,k)}for(let H=0,P=B.length;H<P;++H){const R=B[H],k=R.start,J=R.count;for(let Z=k,oe=k+J;Z<oe;Z+=3)V(e.getX(Z+0)),V(e.getX(Z+1)),V(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new Y,l=new Y,u=new Y,d=new Y,f=new Y,p=new Y,x=new Y,v=new Y;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),b=e.getX(g+1),E=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,E),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),d.add(x),f.add(x),p.add(x),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,f){const p=d.array,x=d.itemSize,v=d.normalized,g=new p.constructor(f.length*x);let S=0,M=0;for(let b=0,E=f.length;b<E;b++){d.isInterleavedBufferAttribute?S=f[b]*d.data.stride+d.offset:S=f[b]*x;for(let y=0;y<x;y++)g[M++]=p[S++]}return new pi(g,x,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let x=0,v=p.length;x<v;x++){const g=p[x],S=e(g,r);f.push(S)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],x=[];for(let v=0,g=p.length;v<g;v++){const S=p[v];x.push(S.toJSON(e.data))}x.length>0&&(o[f]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],v=l[p];for(let g=0,S=v.length;g<S;g++)x.push(v[g].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const v=u[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jm=new Bt,Gr=new mx,bl=new ec,Wm=new Y,Tl=new Y,Cl=new Y,Al=new Y,ud=new Y,Rl=new Y,Xm=new Y,Pl=new Y;class In extends fn{constructor(e=new ti,t=new vx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Rl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const x=d[f],v=l[f];x!==0&&(ud.fromBufferAttribute(v,e),u?Rl.addScaledVector(ud,x):Rl.addScaledVector(ud.sub(t),x))}t.add(Rl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(bl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(bl,Wm)===null||Gr.origin.distanceToSquared(Wm)>(e.far-e.near)**2))&&(jm.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(jm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,g=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,b=g.length;M<b;M++){const E=g[M],y=u[E.materialIndex],B=Math.max(E.start,S.start),F=Math.min(d.count,Math.min(E.start+E.count,S.start+S.count));for(let C=B,U=F;C<U;C+=3){const O=d.getX(C),V=d.getX(C+1),H=d.getX(C+2);o=Nl(this,y,e,r,p,x,v,O,V,H),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=E.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let E=M,y=b;E<y;E+=3){const B=d.getX(E),F=d.getX(E+1),C=d.getX(E+2);o=Nl(this,u,e,r,p,x,v,B,F,C),o&&(o.faceIndex=Math.floor(E/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,b=g.length;M<b;M++){const E=g[M],y=u[E.materialIndex],B=Math.max(E.start,S.start),F=Math.min(f.count,Math.min(E.start+E.count,S.start+S.count));for(let C=B,U=F;C<U;C+=3){const O=C,V=C+1,H=C+2;o=Nl(this,y,e,r,p,x,v,O,V,H),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=E.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let E=M,y=b;E<y;E+=3){const B=E,F=E+1,C=E+2;o=Nl(this,u,e,r,p,x,v,B,F,C),o&&(o.faceIndex=Math.floor(E/3),t.push(o))}}}}function eS(s,e,t,r,o,l,u,d){let f;if(e.side===Un?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===br,d),f===null)return null;Pl.copy(d),Pl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Pl);return p<t.near||p>t.far?null:{distance:p,point:Pl.clone(),object:s}}function Nl(s,e,t,r,o,l,u,d,f,p){s.getVertexPosition(d,Tl),s.getVertexPosition(f,Cl),s.getVertexPosition(p,Al);const x=eS(s,e,t,r,Tl,Cl,Al,Xm);if(x){const v=new Y;di.getBarycoord(Xm,Tl,Cl,Al,v),o&&(x.uv=di.getInterpolatedAttribute(o,d,f,p,v,new Ve)),l&&(x.uv1=di.getInterpolatedAttribute(l,d,f,p,v,new Ve)),u&&(x.normal=di.getInterpolatedAttribute(u,d,f,p,v,new Y),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:d,b:f,c:p,normal:new Y,materialIndex:0};di.getNormal(Tl,Cl,Al,g.normal),x.face=g,x.barycoord=v}return x}class oa extends ti{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],x=[],v=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new Tn(p,3)),this.setAttribute("normal",new Tn(x,3)),this.setAttribute("uv",new Tn(v,2));function M(b,E,y,B,F,C,U,O,V,H,P){const R=C/V,k=U/H,J=C/2,Z=U/2,oe=O/2,ue=V+1,ae=H+1;let pe=0,j=0;const de=new Y;for(let I=0;I<ae;I++){const w=I*k-Z;for(let W=0;W<ue;W++){const ye=W*R-J;de[b]=ye*B,de[E]=w*F,de[y]=oe,p.push(de.x,de.y,de.z),de[b]=0,de[E]=0,de[y]=O>0?1:-1,x.push(de.x,de.y,de.z),v.push(W/V),v.push(1-I/H),pe+=1}}for(let I=0;I<H;I++)for(let w=0;w<V;w++){const W=g+w+ue*I,ye=g+w+ue*(I+1),X=g+(w+1)+ue*(I+1),re=g+(w+1)+ue*I;f.push(W,ye,re),f.push(ye,X,re),j+=6}d.addGroup(S,j,P),S+=j,g+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(s){const e={};for(let t=0;t<s.length;t++){const r=to(s[t]);for(const o in r)e[o]=r[o]}return e}function tS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const nS={clone:to,merge:bn};var iS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends so{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iS,this.fragmentShader=rS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=tS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ex extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new Y,qm=new Ve,$m=new Ve;class jn extends Ex{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mf*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,qm,$m),t.subVectors($m,qm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ju*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,zs=1;class sS extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new jn(Bs,zs,e,t);o.layers=this.layers,this.add(o);const l=new jn(Bs,zs,e,t);l.layers=this.layers,this.add(l);const u=new jn(Bs,zs,e,t);u.layers=this.layers,this.add(u);const d=new jn(Bs,zs,e,t);d.layers=this.layers,this.add(d);const f=new jn(Bs,zs,e,t);f.layers=this.layers,this.add(f);const p=new jn(Bs,zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Zl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,x]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Mx extends kn{constructor(e,t,r,o,l,u,d,f,p,x){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,o,l,u,d,f,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oS extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Mx(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new oa(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Mr});l.uniforms.tEquirect.value=t;const u=new In(o,l),d=t.minFilter;return t.minFilter===Qr&&(t.minFilter=Ei),new sS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Xo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aS={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const E=t.getJointPose(b,r),y=this._getHandJoint(p,b);E!==null&&(y.matrix.fromArray(E.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=E.radius),y.visible=E!==null}const x=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],g=x.position.distanceTo(v.position),S=.02,M=.005;p.inputState.pinching&&g>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(aS)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class lS extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fd=new Y,cS=new Y,uS=new gt;class qr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=fd.subVectors(r,t).cross(cS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(fd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||uS.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new ec,Dl=new Y;class Ff{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,u=new qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],x=o[5],v=o[6],g=o[7],S=o[8],M=o[9],b=o[10],E=o[11],y=o[12],B=o[13],F=o[14],C=o[15];if(r[0].setComponents(f-l,g-p,E-S,C-y).normalize(),r[1].setComponents(f+l,g+p,E+S,C+y).normalize(),r[2].setComponents(f+u,g+x,E+M,C+B).normalize(),r[3].setComponents(f-u,g-x,E-M,C-B).normalize(),r[4].setComponents(f-d,g-v,E-b,C-F).normalize(),t===ji)r[5].setComponents(f+d,g+v,E+b,C+F).normalize();else if(t===Zl)r[5].setComponents(d,v,b,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wx extends so{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ym=new Bt,gf=new mx,Ll=new ec,Fl=new Y;class dS extends fn{constructor(e=new ti,t=new wx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(o),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;Ym.copy(o).invert(),gf.copy(e.ray).applyMatrix4(Ym);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=r.index,v=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let M=g,b=S;M<b;M++){const E=p.getX(M);Fl.fromBufferAttribute(v,E),Zm(Fl,E,f,o,e,t,this)}}else{const g=Math.max(0,u.start),S=Math.min(v.count,u.start+u.count);for(let M=g,b=S;M<b;M++)Fl.fromBufferAttribute(v,M),Zm(Fl,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Zm(s,e,t,r,o,l,u){const d=gf.distanceSqToPoint(s);if(d<t){const f=new Y;gf.closestPointToPoint(s,f),f.applyMatrix4(r);const p=o.ray.origin.distanceTo(f);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class bx extends kn{constructor(e,t,r,o,l,u,d,f,p,x=Xs){if(x!==Xs&&x!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Xs&&(r=es),r===void 0&&x===Qs&&(r=Js),super(null,o,l,u,d,f,x,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:hi,this.minFilter=f!==void 0?f:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const x=r[o],g=r[o+1]-x,S=(u-x)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),f=t||(u.isVector2?new Ve:new Y);return f.copy(d).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Y,o=[],l=[],u=[],d=new Y,f=new Bt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new Y)}l[0]=new Y,u[0]=new Y;let p=Number.MAX_VALUE;const x=Math.abs(o[0].x),v=Math.abs(o[0].y),g=Math.abs(o[0].z);x<=p&&(p=x,r.set(1,0,0)),v<=p&&(p=v,r.set(0,1,0)),g<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),d.crossVectors(o[S-1],o[S]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(St(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(f.makeRotationAxis(d,M))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(St(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(o[M],S*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class If extends wi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new Ve){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=f-this.aX,S=p-this.aY;f=g*x-S*v+this.aX,p=g*v+S*x+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fS extends If{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Uf(){let s=0,e=0,t=0,r=0;function o(l,u,d,f){s=l,e=d,t=-3*l+3*u-2*d-f,r=2*l-2*u+d+f}return{initCatmullRom:function(l,u,d,f,p){o(u,d,p*(d-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,d,f,p,x,v){let g=(u-l)/p-(d-l)/(p+x)+(d-u)/x,S=(d-u)/x-(f-u)/(x+v)+(f-d)/v;g*=x,S*=x,o(u,d,g,S)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Il=new Y,hd=new Uf,pd=new Uf,md=new Uf;class hS extends wi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Y){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),f=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,x;this.closed||d>0?p=o[(d-1)%l]:(Il.subVectors(o[0],o[1]).add(o[0]),p=Il);const v=o[d%l],g=o[(d+1)%l];if(this.closed||d+2<l?x=o[(d+2)%l]:(Il.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(v),S),b=Math.pow(v.distanceToSquared(g),S),E=Math.pow(g.distanceToSquared(x),S);b<1e-4&&(b=1),M<1e-4&&(M=b),E<1e-4&&(E=b),hd.initNonuniformCatmullRom(p.x,v.x,g.x,x.x,M,b,E),pd.initNonuniformCatmullRom(p.y,v.y,g.y,x.y,M,b,E),md.initNonuniformCatmullRom(p.z,v.z,g.z,x.z,M,b,E)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(p.x,v.x,g.x,x.x,this.tension),pd.initCatmullRom(p.y,v.y,g.y,x.y,this.tension),md.initCatmullRom(p.z,v.z,g.z,x.z,this.tension));return r.set(hd.calc(f),pd.calc(f),md.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Y().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Km(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*d+l*s+t}function pS(s,e){const t=1-s;return t*t*e}function mS(s,e){return 2*(1-s)*s*e}function gS(s,e){return s*s*e}function $o(s,e,t,r){return pS(s,e)+mS(s,t)+gS(s,r)}function xS(s,e){const t=1-s;return t*t*t*e}function vS(s,e){const t=1-s;return 3*t*t*s*e}function _S(s,e){return 3*(1-s)*s*s*e}function yS(s,e){return s*s*s*e}function Yo(s,e,t,r,o){return xS(s,e)+vS(s,t)+_S(s,r)+yS(s,o)}class Tx extends wi{constructor(e=new Ve,t=new Ve,r=new Ve,o=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ve){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Yo(e,o.x,l.x,u.x,d.x),Yo(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class SS extends wi{constructor(e=new Y,t=new Y,r=new Y,o=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Y){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Yo(e,o.x,l.x,u.x,d.x),Yo(e,o.y,l.y,u.y,d.y),Yo(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cx extends wi{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ES extends wi{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ax extends wi{constructor(e=new Ve,t=new Ve,r=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ve){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set($o(e,o.x,l.x,u.x),$o(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class MS extends wi{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set($o(e,o.x,l.x,u.x),$o(e,o.y,l.y,u.y),$o(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rx extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,f=o[u===0?u:u-1],p=o[u],x=o[u>o.length-2?o.length-1:u+1],v=o[u>o.length-3?o.length-1:u+2];return r.set(Km(d,f.x,p.x,x.x,v.x),Km(d,f.y,p.y,x.y,v.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ve().fromArray(o))}return this}}var xf=Object.freeze({__proto__:null,ArcCurve:fS,CatmullRomCurve3:hS,CubicBezierCurve:Tx,CubicBezierCurve3:SS,EllipseCurve:If,LineCurve:Cx,LineCurve3:ES,QuadraticBezierCurve:Ax,QuadraticBezierCurve3:MS,SplineCurve:Rx});class wS extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xf[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,d=this.curves[l],f=d.getLength(),p=f===0?0:1-u/f;return d.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],d=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,f=u.getPoints(d);for(let p=0;p<f.length;p++){const x=f[p];r&&r.equals(x)||(t.push(x),r=x)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new xf[o.type]().fromJSON(o))}return this}}class Jm extends wS{constructor(e){super(),this.type="Path",this.currentPoint=new Ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Cx(this.currentPoint.clone(),new Ve(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Ax(this.currentPoint.clone(),new Ve(e,t),new Ve(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const d=new Tx(this.currentPoint.clone(),new Ve(e,t),new Ve(r,o),new Ve(l,u));return this.curves.push(d),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Rx(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const d=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+d,t+f,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,d,f){const p=this.currentPoint.x,x=this.currentPoint.y;return this.absellipse(e+p,t+x,r,o,l,u,d,f),this}absellipse(e,t,r,o,l,u,d,f){const p=new If(e,t,r,o,l,u,d,f);if(this.curves.length>0){const v=p.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(p);const x=p.getPoint(1);return this.currentPoint.copy(x),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class kf extends ti{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],g=[],S=[];let M=0;const b=[],E=r/2;let y=0;B(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(x),this.setAttribute("position",new Tn(v,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(S,2));function B(){const C=new Y,U=new Y;let O=0;const V=(t-e)/r;for(let H=0;H<=l;H++){const P=[],R=H/l,k=R*(t-e)+e;for(let J=0;J<=o;J++){const Z=J/o,oe=Z*f+d,ue=Math.sin(oe),ae=Math.cos(oe);U.x=k*ue,U.y=-R*r+E,U.z=k*ae,v.push(U.x,U.y,U.z),C.set(ue,V,ae).normalize(),g.push(C.x,C.y,C.z),S.push(Z,1-R),P.push(M++)}b.push(P)}for(let H=0;H<o;H++)for(let P=0;P<l;P++){const R=b[P][H],k=b[P+1][H],J=b[P+1][H+1],Z=b[P][H+1];(e>0||P!==0)&&(x.push(R,k,Z),O+=3),(t>0||P!==l-1)&&(x.push(k,J,Z),O+=3)}p.addGroup(y,O,0),y+=O}function F(C){const U=M,O=new Ve,V=new Y;let H=0;const P=C===!0?e:t,R=C===!0?1:-1;for(let J=1;J<=o;J++)v.push(0,E*R,0),g.push(0,R,0),S.push(.5,.5),M++;const k=M;for(let J=0;J<=o;J++){const oe=J/o*f+d,ue=Math.cos(oe),ae=Math.sin(oe);V.x=P*ae,V.y=E*R,V.z=P*ue,v.push(V.x,V.y,V.z),g.push(0,R,0),O.x=ue*.5+.5,O.y=ae*.5*R+.5,S.push(O.x,O.y),M++}for(let J=0;J<o;J++){const Z=U+J,oe=k+J;C===!0?x.push(oe,oe+1,Z):x.push(oe+1,oe,Z),H+=3}p.addGroup(y,H,C===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Px extends Jm{constructor(e){super(e),this.uuid=ro(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Jm().fromJSON(o))}return this}}const bS={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=Nx(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let d,f,p,x,v,g,S;if(r&&(l=PS(s,e,l,t)),s.length>80*t){d=p=s[0],f=x=s[1];for(let M=t;M<o;M+=t)v=s[M],g=s[M+1],v<d&&(d=v),g<f&&(f=g),v>p&&(p=v),g>x&&(x=g);S=Math.max(p-d,x-f),S=S!==0?32767/S:0}return Qo(l,u,t,d,f,S,0),u}};function Nx(s,e,t,r,o){let l,u;if(o===VS(s,e,t,r)>0)for(l=e;l<t;l+=r)u=Qm(l,s[l],s[l+1],u);else for(l=t-r;l>=e;l-=r)u=Qm(l,s[l],s[l+1],u);return u&&tc(u,u.next)&&(ta(u),u=u.next),u}function ns(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(tc(t,t.next)||jt(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Qo(s,e,t,r,o,l,u){if(!s)return;!u&&l&&IS(s,r,o,l);let d=s,f,p;for(;s.prev!==s.next;){if(f=s.prev,p=s.next,l?CS(s,r,o,l):TS(s)){e.push(f.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),ta(s),s=p.next,d=p.next;continue}if(s=p,s===d){u?u===1?(s=AS(ns(s),e,t),Qo(s,e,t,r,o,l,2)):u===2&&RS(s,e,t,r,o,l):Qo(ns(s),e,t,r,o,l,1);break}}}function TS(s){const e=s.prev,t=s,r=s.next;if(jt(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,d=e.y,f=t.y,p=r.y,x=o<l?o<u?o:u:l<u?l:u,v=d<f?d<p?d:p:f<p?f:p,g=o>l?o>u?o:u:l>u?l:u,S=d>f?d>p?d:p:f>p?f:p;let M=r.next;for(;M!==e;){if(M.x>=x&&M.x<=g&&M.y>=v&&M.y<=S&&Gs(o,d,l,f,u,p,M.x,M.y)&&jt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function CS(s,e,t,r){const o=s.prev,l=s,u=s.next;if(jt(o,l,u)>=0)return!1;const d=o.x,f=l.x,p=u.x,x=o.y,v=l.y,g=u.y,S=d<f?d<p?d:p:f<p?f:p,M=x<v?x<g?x:g:v<g?v:g,b=d>f?d>p?d:p:f>p?f:p,E=x>v?x>g?x:g:v>g?v:g,y=vf(S,M,e,t,r),B=vf(b,E,e,t,r);let F=s.prevZ,C=s.nextZ;for(;F&&F.z>=y&&C&&C.z<=B;){if(F.x>=S&&F.x<=b&&F.y>=M&&F.y<=E&&F!==o&&F!==u&&Gs(d,x,f,v,p,g,F.x,F.y)&&jt(F.prev,F,F.next)>=0||(F=F.prevZ,C.x>=S&&C.x<=b&&C.y>=M&&C.y<=E&&C!==o&&C!==u&&Gs(d,x,f,v,p,g,C.x,C.y)&&jt(C.prev,C,C.next)>=0))return!1;C=C.nextZ}for(;F&&F.z>=y;){if(F.x>=S&&F.x<=b&&F.y>=M&&F.y<=E&&F!==o&&F!==u&&Gs(d,x,f,v,p,g,F.x,F.y)&&jt(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;C&&C.z<=B;){if(C.x>=S&&C.x<=b&&C.y>=M&&C.y<=E&&C!==o&&C!==u&&Gs(d,x,f,v,p,g,C.x,C.y)&&jt(C.prev,C,C.next)>=0)return!1;C=C.nextZ}return!0}function AS(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!tc(o,l)&&Dx(o,r,r.next,l)&&ea(o,l)&&ea(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ta(r),ta(r.next),r=s=l),r=r.next}while(r!==s);return ns(r)}function RS(s,e,t,r,o,l){let u=s;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&OS(u,d)){let f=Lx(u,d);u=ns(u,u.next),f=ns(f,f.next),Qo(u,e,t,r,o,l,0),Qo(f,e,t,r,o,l,0);return}d=d.next}u=u.next}while(u!==s)}function PS(s,e,t,r){const o=[];let l,u,d,f,p;for(l=0,u=e.length;l<u;l++)d=e[l]*r,f=l<u-1?e[l+1]*r:s.length,p=Nx(s,d,f,r,!1),p===p.next&&(p.steiner=!0),o.push(kS(p));for(o.sort(NS),l=0;l<o.length;l++)t=DS(o[l],t);return t}function NS(s,e){return s.x-e.x}function DS(s,e){const t=LS(s,e);if(!t)return e;const r=Lx(t,s);return ns(r,r.next),ns(t,t.next)}function LS(s,e){let t=e,r=-1/0,o;const l=s.x,u=s.y;do{if(u<=t.y&&u>=t.next.y&&t.next.y!==t.y){const g=t.x+(u-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=l&&g>r&&(r=g,o=t.x<t.next.x?t:t.next,g===l))return o}t=t.next}while(t!==e);if(!o)return null;const d=o,f=o.x,p=o.y;let x=1/0,v;t=o;do l>=t.x&&t.x>=f&&l!==t.x&&Gs(u<p?l:r,u,f,p,u<p?r:l,u,t.x,t.y)&&(v=Math.abs(u-t.y)/(l-t.x),ea(t,s)&&(v<x||v===x&&(t.x>o.x||t.x===o.x&&FS(o,t)))&&(o=t,x=v)),t=t.next;while(t!==d);return o}function FS(s,e){return jt(s.prev,s,e.prev)<0&&jt(e.next,s,s.next)<0}function IS(s,e,t,r){let o=s;do o.z===0&&(o.z=vf(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,US(o)}function US(s){let e,t,r,o,l,u,d,f,p=1;do{for(t=s,s=null,l=null,u=0;t;){for(u++,r=t,d=0,e=0;e<p&&(d++,r=r.nextZ,!!r);e++);for(f=p;d>0||f>0&&r;)d!==0&&(f===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,d--):(o=r,r=r.nextZ,f--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(u>1);return s}function vf(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function kS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Gs(s,e,t,r,o,l,u,d){return(o-u)*(e-d)>=(s-u)*(l-d)&&(s-u)*(r-d)>=(t-u)*(e-d)&&(t-u)*(l-d)>=(o-u)*(r-d)}function OS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!BS(s,e)&&(ea(s,e)&&ea(e,s)&&zS(s,e)&&(jt(s.prev,s,e.prev)||jt(s,e.prev,e))||tc(s,e)&&jt(s.prev,s,s.next)>0&&jt(e.prev,e,e.next)>0)}function jt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function tc(s,e){return s.x===e.x&&s.y===e.y}function Dx(s,e,t,r){const o=kl(jt(s,e,t)),l=kl(jt(s,e,r)),u=kl(jt(t,r,s)),d=kl(jt(t,r,e));return!!(o!==l&&u!==d||o===0&&Ul(s,t,e)||l===0&&Ul(s,r,e)||u===0&&Ul(t,s,r)||d===0&&Ul(t,e,r))}function Ul(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function kl(s){return s>0?1:s<0?-1:0}function BS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Dx(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ea(s,e){return jt(s.prev,s,s.next)<0?jt(s,e,s.next)>=0&&jt(s,s.prev,e)>=0:jt(s,e,s.prev)<0||jt(s,s.next,e)<0}function zS(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Lx(s,e){const t=new _f(s.i,s.x,s.y),r=new _f(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Qm(s,e,t,r){const o=new _f(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ta(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _f(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function VS(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class Zo{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Zo.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];eg(e),tg(r,e);let u=e.length;t.forEach(eg);for(let f=0;f<t.length;f++)o.push(u),u+=t[f].length,tg(r,t[f]);const d=bS.triangulate(r,o);for(let f=0;f<d.length;f+=3)l.push(d.slice(f,f+3));return l}}function eg(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function tg(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Of extends ti{constructor(e=new Px([new Ve(.5,.5),new Ve(-.5,.5),new Ve(-.5,-.5),new Ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let d=0,f=e.length;d<f;d++){const p=e[d];u(p)}this.setAttribute("position",new Tn(o,3)),this.setAttribute("uv",new Tn(l,2)),this.computeVertexNormals();function u(d){const f=[],p=t.curveSegments!==void 0?t.curveSegments:12,x=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,S=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:S-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,E=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,B=t.UVGenerator!==void 0?t.UVGenerator:HS;let F,C=!1,U,O,V,H;y&&(F=y.getSpacedPoints(x),C=!0,g=!1,U=y.computeFrenetFrames(x,!1),O=new Y,V=new Y,H=new Y),g||(E=0,S=0,M=0,b=0);const P=d.extractPoints(p);let R=P.shape;const k=P.holes;if(!Zo.isClockWise(R)){R=R.reverse();for(let ve=0,ge=k.length;ve<ge;ve++){const D=k[ve];Zo.isClockWise(D)&&(k[ve]=D.reverse())}}const Z=Zo.triangulateShape(R,k),oe=R;for(let ve=0,ge=k.length;ve<ge;ve++){const D=k[ve];R=R.concat(D)}function ue(ve,ge,D){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(ge,D)}const ae=R.length,pe=Z.length;function j(ve,ge,D){let Ue,Ee,Fe;const Ce=ve.x-ge.x,Qe=ve.y-ge.y,Ne=D.x-ve.x,L=D.y-ve.y,A=Ce*Ce+Qe*Qe,ee=Ce*L-Qe*Ne;if(Math.abs(ee)>Number.EPSILON){const me=Math.sqrt(A),Me=Math.sqrt(Ne*Ne+L*L),_e=ge.x-Qe/me,Ye=ge.y+Ce/me,Ie=D.x-L/Me,He=D.y+Ne/Me,ft=((Ie-_e)*L-(He-Ye)*Ne)/(Ce*L-Qe*Ne);Ue=_e+Ce*ft-ve.x,Ee=Ye+Qe*ft-ve.y;const Te=Ue*Ue+Ee*Ee;if(Te<=2)return new Ve(Ue,Ee);Fe=Math.sqrt(Te/2)}else{let me=!1;Ce>Number.EPSILON?Ne>Number.EPSILON&&(me=!0):Ce<-Number.EPSILON?Ne<-Number.EPSILON&&(me=!0):Math.sign(Qe)===Math.sign(L)&&(me=!0),me?(Ue=-Qe,Ee=Ce,Fe=Math.sqrt(A)):(Ue=Ce,Ee=Qe,Fe=Math.sqrt(A/2))}return new Ve(Ue/Fe,Ee/Fe)}const de=[];for(let ve=0,ge=oe.length,D=ge-1,Ue=ve+1;ve<ge;ve++,D++,Ue++)D===ge&&(D=0),Ue===ge&&(Ue=0),de[ve]=j(oe[ve],oe[D],oe[Ue]);const I=[];let w,W=de.concat();for(let ve=0,ge=k.length;ve<ge;ve++){const D=k[ve];w=[];for(let Ue=0,Ee=D.length,Fe=Ee-1,Ce=Ue+1;Ue<Ee;Ue++,Fe++,Ce++)Fe===Ee&&(Fe=0),Ce===Ee&&(Ce=0),w[Ue]=j(D[Ue],D[Fe],D[Ce]);I.push(w),W=W.concat(w)}for(let ve=0;ve<E;ve++){const ge=ve/E,D=S*Math.cos(ge*Math.PI/2),Ue=M*Math.sin(ge*Math.PI/2)+b;for(let Ee=0,Fe=oe.length;Ee<Fe;Ee++){const Ce=ue(oe[Ee],de[Ee],Ue);ie(Ce.x,Ce.y,-D)}for(let Ee=0,Fe=k.length;Ee<Fe;Ee++){const Ce=k[Ee];w=I[Ee];for(let Qe=0,Ne=Ce.length;Qe<Ne;Qe++){const L=ue(Ce[Qe],w[Qe],Ue);ie(L.x,L.y,-D)}}}const ye=M+b;for(let ve=0;ve<ae;ve++){const ge=g?ue(R[ve],W[ve],ye):R[ve];C?(V.copy(U.normals[0]).multiplyScalar(ge.x),O.copy(U.binormals[0]).multiplyScalar(ge.y),H.copy(F[0]).add(V).add(O),ie(H.x,H.y,H.z)):ie(ge.x,ge.y,0)}for(let ve=1;ve<=x;ve++)for(let ge=0;ge<ae;ge++){const D=g?ue(R[ge],W[ge],ye):R[ge];C?(V.copy(U.normals[ve]).multiplyScalar(D.x),O.copy(U.binormals[ve]).multiplyScalar(D.y),H.copy(F[ve]).add(V).add(O),ie(H.x,H.y,H.z)):ie(D.x,D.y,v/x*ve)}for(let ve=E-1;ve>=0;ve--){const ge=ve/E,D=S*Math.cos(ge*Math.PI/2),Ue=M*Math.sin(ge*Math.PI/2)+b;for(let Ee=0,Fe=oe.length;Ee<Fe;Ee++){const Ce=ue(oe[Ee],de[Ee],Ue);ie(Ce.x,Ce.y,v+D)}for(let Ee=0,Fe=k.length;Ee<Fe;Ee++){const Ce=k[Ee];w=I[Ee];for(let Qe=0,Ne=Ce.length;Qe<Ne;Qe++){const L=ue(Ce[Qe],w[Qe],Ue);C?ie(L.x,L.y+F[x-1].y,F[x-1].x+D):ie(L.x,L.y,v+D)}}}X(),re();function X(){const ve=o.length/3;if(g){let ge=0,D=ae*ge;for(let Ue=0;Ue<pe;Ue++){const Ee=Z[Ue];xe(Ee[2]+D,Ee[1]+D,Ee[0]+D)}ge=x+E*2,D=ae*ge;for(let Ue=0;Ue<pe;Ue++){const Ee=Z[Ue];xe(Ee[0]+D,Ee[1]+D,Ee[2]+D)}}else{for(let ge=0;ge<pe;ge++){const D=Z[ge];xe(D[2],D[1],D[0])}for(let ge=0;ge<pe;ge++){const D=Z[ge];xe(D[0]+ae*x,D[1]+ae*x,D[2]+ae*x)}}r.addGroup(ve,o.length/3-ve,0)}function re(){const ve=o.length/3;let ge=0;fe(oe,ge),ge+=oe.length;for(let D=0,Ue=k.length;D<Ue;D++){const Ee=k[D];fe(Ee,ge),ge+=Ee.length}r.addGroup(ve,o.length/3-ve,1)}function fe(ve,ge){let D=ve.length;for(;--D>=0;){const Ue=D;let Ee=D-1;Ee<0&&(Ee=ve.length-1);for(let Fe=0,Ce=x+E*2;Fe<Ce;Fe++){const Qe=ae*Fe,Ne=ae*(Fe+1),L=ge+Ue+Qe,A=ge+Ee+Qe,ee=ge+Ee+Ne,me=ge+Ue+Ne;Le(L,A,ee,me)}}}function ie(ve,ge,D){f.push(ve),f.push(ge),f.push(D)}function xe(ve,ge,D){Ae(ve),Ae(ge),Ae(D);const Ue=o.length/3,Ee=B.generateTopUV(r,o,Ue-3,Ue-2,Ue-1);$e(Ee[0]),$e(Ee[1]),$e(Ee[2])}function Le(ve,ge,D,Ue){Ae(ve),Ae(ge),Ae(Ue),Ae(ge),Ae(D),Ae(Ue);const Ee=o.length/3,Fe=B.generateSideWallUV(r,o,Ee-6,Ee-3,Ee-2,Ee-1);$e(Fe[0]),$e(Fe[1]),$e(Fe[3]),$e(Fe[1]),$e(Fe[2]),$e(Fe[3])}function Ae(ve){o.push(f[ve*3+0]),o.push(f[ve*3+1]),o.push(f[ve*3+2])}function $e(ve){l.push(ve.x),l.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return GS(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,u=e.shapes.length;l<u;l++){const d=t[e.shapes[l]];r.push(d)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new xf[o.type]().fromJSON(o)),new Of(r,e.options)}}const HS={generateTopUV:function(s,e,t,r,o){const l=e[t*3],u=e[t*3+1],d=e[r*3],f=e[r*3+1],p=e[o*3],x=e[o*3+1];return[new Ve(l,u),new Ve(d,f),new Ve(p,x)]},generateSideWallUV:function(s,e,t,r,o,l){const u=e[t*3],d=e[t*3+1],f=e[t*3+2],p=e[r*3],x=e[r*3+1],v=e[r*3+2],g=e[o*3],S=e[o*3+1],M=e[o*3+2],b=e[l*3],E=e[l*3+1],y=e[l*3+2];return Math.abs(d-x)<Math.abs(u-p)?[new Ve(u,1-f),new Ve(p,1-v),new Ve(g,1-M),new Ve(b,1-y)]:[new Ve(d,1-f),new Ve(x,1-v),new Ve(S,1-M),new Ve(E,1-y)]}};function GS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class nc extends ti{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,x=f+1,v=e/d,g=t/f,S=[],M=[],b=[],E=[];for(let y=0;y<x;y++){const B=y*g-u;for(let F=0;F<p;F++){const C=F*v-l;M.push(C,-B,0),b.push(0,0,1),E.push(F/d),E.push(1-y/f)}}for(let y=0;y<f;y++)for(let B=0;B<d;B++){const F=B+p*y,C=B+p*(y+1),U=B+1+p*(y+1),O=B+1+p*y;S.push(F,C,O),S.push(C,U,O)}this.setIndex(S),this.setAttribute("position",new Tn(M,3)),this.setAttribute("normal",new Tn(b,3)),this.setAttribute("uv",new Tn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jl extends ti{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],f=[],p=[],x=new Y,v=new Y,g=new Y;for(let S=0;S<=r;S++)for(let M=0;M<=o;M++){const b=M/o*l,E=S/r*Math.PI*2;v.x=(e+t*Math.cos(E))*Math.cos(b),v.y=(e+t*Math.cos(E))*Math.sin(b),v.z=t*Math.sin(E),d.push(v.x,v.y,v.z),x.x=e*Math.cos(b),x.y=e*Math.sin(b),g.subVectors(v,x).normalize(),f.push(g.x,g.y,g.z),p.push(M/o),p.push(S/r)}for(let S=1;S<=r;S++)for(let M=1;M<=o;M++){const b=(o+1)*S+M-1,E=(o+1)*(S-1)+M-1,y=(o+1)*(S-1)+M,B=(o+1)*S+M;u.push(b,E,B),u.push(E,y,B)}this.setIndex(u),this.setAttribute("position",new Tn(d,3)),this.setAttribute("normal",new Tn(f,3)),this.setAttribute("uv",new Tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gd extends so{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ux,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jS extends so{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=My,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WS extends so{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bf extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xd=new Bt,ng=new Y,ig=new Y;class Fx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ff,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;ng.setFromMatrixPosition(e.matrixWorld),t.position.copy(ng),ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ig),t.updateMatrixWorld(),xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const rg=new Bt,Wo=new Y,vd=new Y;class XS extends Fx{constructor(){super(new jn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Wo),vd.copy(r.position),vd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(vd),r.updateMatrixWorld(),o.makeTranslation(-Wo.x,-Wo.y,-Wo.z),rg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rg)}}class qS extends Bf{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new XS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ix extends Ex{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=x*this.view.offsetY,f=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $S extends Fx{constructor(){super(new Ix(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sg extends Bf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new $S}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class YS extends Bf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZS extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function og(s,e,t,r){const o=KS(r);switch(t){case ix:return s*e;case sx:return s*e;case ox:return s*e*2;case ax:return s*e/o.components*o.byteLength;case Nf:return s*e/o.components*o.byteLength;case lx:return s*e*2/o.components*o.byteLength;case Df:return s*e*2/o.components*o.byteLength;case rx:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case Lf:return s*e*4/o.components*o.byteLength;case Hl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gd:case Wd:return Math.max(s,16)*Math.max(e,8)/4;case Hd:case jd:return Math.max(s,8)*Math.max(e,8)/2;case Xd:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Xl:case uf:case df:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cx:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KS(s){switch(s){case Xi:case ex:return{byteLength:1,components:1};case Jo:case tx:case ia:return{byteLength:2,components:1};case Rf:case Pf:return{byteLength:2,components:4};case es:case Af:case Gi:return{byteLength:4,components:1};case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ux(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function JS(s){const e=new WeakMap;function t(d,f){const p=d.array,x=d.usage,v=p.byteLength,g=s.createBuffer();s.bindBuffer(f,g),s.bufferData(f,p,x),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,f,p){const x=f.array,v=f.updateRanges;if(s.bindBuffer(p,d),v.length===0)s.bufferSubData(p,0,x);else{v.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<v.length;S++){const M=v[g],b=v[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,v[g]=b)}v.length=g+1;for(let S=0,M=v.length;S<M;S++){const b=v[S];s.bufferSubData(p,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e1=`#ifdef USE_ALPHAHASH
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
#endif`,t1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s1=`#ifdef USE_AOMAP
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
#endif`,o1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a1=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,l1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f1=`#ifdef USE_IRIDESCENCE
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
#endif`,h1=`#ifdef USE_BUMPMAP
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
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,E1=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,M1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w1=`vec3 transformedNormal = objectNormal;
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
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,T1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,A1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R1="gl_FragColor = linearToOutputTexel( gl_FragColor );",P1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,L1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I1=`#ifdef USE_ENVMAP
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
#endif`,U1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,k1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z1=`#ifdef USE_GRADIENTMAP
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
}`,V1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
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
#endif`,W1=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,X1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,K1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,J1=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lE=`#if defined( USE_POINTS_UV )
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
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
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
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ME=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,NE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,kE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
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
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QE=`uniform sampler2D t2D;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`#include <common>
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
}`,sM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,oM=`#define DISTANCE
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
}`,aM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
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
}`,dM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,gM=`#define MATCAP
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
}`,xM=`#define MATCAP
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
}`,vM=`#define NORMAL
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
}`,_M=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yM=`#define PHONG
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
}`,SM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,EM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,wM=`#define TOON
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
}`,bM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,TM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,RM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,PM=`uniform float rotation;
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
}`,NM=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:QS,alphahash_pars_fragment:e1,alphamap_fragment:t1,alphamap_pars_fragment:n1,alphatest_fragment:i1,alphatest_pars_fragment:r1,aomap_fragment:s1,aomap_pars_fragment:o1,batching_pars_vertex:a1,batching_vertex:l1,begin_vertex:c1,beginnormal_vertex:u1,bsdfs:d1,iridescence_fragment:f1,bumpmap_pars_fragment:h1,clipping_planes_fragment:p1,clipping_planes_pars_fragment:m1,clipping_planes_pars_vertex:g1,clipping_planes_vertex:x1,color_fragment:v1,color_pars_fragment:_1,color_pars_vertex:y1,color_vertex:S1,common:E1,cube_uv_reflection_fragment:M1,defaultnormal_vertex:w1,displacementmap_pars_vertex:b1,displacementmap_vertex:T1,emissivemap_fragment:C1,emissivemap_pars_fragment:A1,colorspace_fragment:R1,colorspace_pars_fragment:P1,envmap_fragment:N1,envmap_common_pars_fragment:D1,envmap_pars_fragment:L1,envmap_pars_vertex:F1,envmap_physical_pars_fragment:W1,envmap_vertex:I1,fog_vertex:U1,fog_pars_vertex:k1,fog_fragment:O1,fog_pars_fragment:B1,gradientmap_pars_fragment:z1,lightmap_pars_fragment:V1,lights_lambert_fragment:H1,lights_lambert_pars_fragment:G1,lights_pars_begin:j1,lights_toon_fragment:X1,lights_toon_pars_fragment:q1,lights_phong_fragment:$1,lights_phong_pars_fragment:Y1,lights_physical_fragment:Z1,lights_physical_pars_fragment:K1,lights_fragment_begin:J1,lights_fragment_maps:Q1,lights_fragment_end:eE,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:oE,map_particle_fragment:aE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:dE,morphcolor_vertex:fE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:xE,normal_pars_fragment:vE,normal_pars_vertex:_E,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:ME,clearcoat_pars_fragment:wE,iridescence_pars_fragment:bE,opaque_fragment:TE,packing:CE,premultiplied_alpha_fragment:AE,project_vertex:RE,dithering_fragment:PE,dithering_pars_fragment:NE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:LE,shadowmap_pars_fragment:FE,shadowmap_pars_vertex:IE,shadowmap_vertex:UE,shadowmask_pars_fragment:kE,skinbase_vertex:OE,skinning_pars_vertex:BE,skinning_vertex:zE,skinnormal_vertex:VE,specularmap_fragment:HE,specularmap_pars_fragment:GE,tonemapping_fragment:jE,tonemapping_pars_fragment:WE,transmission_fragment:XE,transmission_pars_fragment:qE,uv_pars_fragment:$E,uv_pars_vertex:YE,uv_vertex:ZE,worldpos_vertex:KE,background_vert:JE,background_frag:QE,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:rM,depth_frag:sM,distanceRGBA_vert:oM,distanceRGBA_frag:aM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:dM,meshbasic_vert:fM,meshbasic_frag:hM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:gM,meshmatcap_frag:xM,meshnormal_vert:vM,meshnormal_frag:_M,meshphong_vert:yM,meshphong_frag:SM,meshphysical_vert:EM,meshphysical_frag:MM,meshtoon_vert:wM,meshtoon_frag:bM,points_vert:TM,points_frag:CM,shadow_vert:AM,shadow_frag:RM,sprite_vert:PM,sprite_frag:NM},Be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Si={basic:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:bn([Be.points,Be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:bn([Be.common,Be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:bn([Be.sprite,Be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:bn([Be.common,Be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:bn([Be.lights,Be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Si.physical={uniforms:bn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Ol={r:0,b:0,g:0},Wr=new Mi,DM=new Bt;function LM(s,e,t,r,o,l,u){const d=new At(0);let f=l===!0?0:1,p,x,v=null,g=0,S=null;function M(F){let C=F.isScene===!0?F.background:null;return C&&C.isTexture&&(C=(F.backgroundBlurriness>0?t:e).get(C)),C}function b(F){let C=!1;const U=M(F);U===null?y(d,f):U&&U.isColor&&(y(U,1),C=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(F,C){const U=M(C);U&&(U.isCubeTexture||U.mapping===Ql)?(x===void 0&&(x=new In(new oa(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:to(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,V,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Wr.copy(C.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(DM.makeRotationFromEuler(Wr)),x.material.toneMapped=Pt.getTransfer(U.colorSpace)!==Dt,(v!==U||g!==U.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=U,g=U.version,S=s.toneMapping),x.layers.enableAll(),F.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(p===void 0&&(p=new In(new nc(2,2),new Tr({name:"BackgroundMaterial",uniforms:to(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=U,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(U.colorSpace)!==Dt,U.matrixAutoUpdate===!0&&U.updateMatrix(),p.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||g!==U.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,v=U,g=U.version,S=s.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function y(F,C){F.getRGB(Ol,Sx(s)),r.buffers.color.setClear(Ol.r,Ol.g,Ol.b,C,u)}function B(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(F,C=1){d.set(F),f=C,y(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(F){f=F,y(d,f)},render:b,addToRenderList:E,dispose:B}}function FM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(R,k,J,Z,oe){let ue=!1;const ae=v(Z,J,k);l!==ae&&(l=ae,p(l.object)),ue=S(R,Z,J,oe),ue&&M(R,Z,J,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,C(R,k,J,Z),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function f(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function v(R,k,J){const Z=J.wireframe===!0;let oe=r[R.id];oe===void 0&&(oe={},r[R.id]=oe);let ue=oe[k.id];ue===void 0&&(ue={},oe[k.id]=ue);let ae=ue[Z];return ae===void 0&&(ae=g(f()),ue[Z]=ae),ae}function g(R){const k=[],J=[],Z=[];for(let oe=0;oe<t;oe++)k[oe]=0,J[oe]=0,Z[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:Z,object:R,attributes:{},index:null}}function S(R,k,J,Z){const oe=l.attributes,ue=k.attributes;let ae=0;const pe=J.getAttributes();for(const j in pe)if(pe[j].location>=0){const I=oe[j];let w=ue[j];if(w===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(w=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(w=R.instanceColor)),I===void 0||I.attribute!==w||w&&I.data!==w.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Z}function M(R,k,J,Z){const oe={},ue=k.attributes;let ae=0;const pe=J.getAttributes();for(const j in pe)if(pe[j].location>=0){let I=ue[j];I===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(I=R.instanceColor));const w={};w.attribute=I,I&&I.data&&(w.data=I.data),oe[j]=w,ae++}l.attributes=oe,l.attributesNum=ae,l.index=Z}function b(){const R=l.newAttributes;for(let k=0,J=R.length;k<J;k++)R[k]=0}function E(R){y(R,0)}function y(R,k){const J=l.newAttributes,Z=l.enabledAttributes,oe=l.attributeDivisors;J[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),oe[R]!==k&&(s.vertexAttribDivisor(R,k),oe[R]=k)}function B(){const R=l.newAttributes,k=l.enabledAttributes;for(let J=0,Z=k.length;J<Z;J++)k[J]!==R[J]&&(s.disableVertexAttribArray(J),k[J]=0)}function F(R,k,J,Z,oe,ue,ae){ae===!0?s.vertexAttribIPointer(R,k,J,oe,ue):s.vertexAttribPointer(R,k,J,Z,oe,ue)}function C(R,k,J,Z){b();const oe=Z.attributes,ue=J.getAttributes(),ae=k.defaultAttributeValues;for(const pe in ue){const j=ue[pe];if(j.location>=0){let de=oe[pe];if(de===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const I=de.normalized,w=de.itemSize,W=e.get(de);if(W===void 0)continue;const ye=W.buffer,X=W.type,re=W.bytesPerElement,fe=X===s.INT||X===s.UNSIGNED_INT||de.gpuType===Af;if(de.isInterleavedBufferAttribute){const ie=de.data,xe=ie.stride,Le=de.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<j.locationSize;Ae++)y(j.location+Ae,ie.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)E(j.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ae=0;Ae<j.locationSize;Ae++)F(j.location+Ae,w/j.locationSize,X,I,xe*re,(Le+w/j.locationSize*Ae)*re,fe)}else{if(de.isInstancedBufferAttribute){for(let ie=0;ie<j.locationSize;ie++)y(j.location+ie,de.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ie=0;ie<j.locationSize;ie++)E(j.location+ie);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ie=0;ie<j.locationSize;ie++)F(j.location+ie,w/j.locationSize,X,I,w*re,w/j.locationSize*ie*re,fe)}}else if(ae!==void 0){const I=ae[pe];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(j.location,I);break;case 3:s.vertexAttrib3fv(j.location,I);break;case 4:s.vertexAttrib4fv(j.location,I);break;default:s.vertexAttrib1fv(j.location,I)}}}}B()}function U(){H();for(const R in r){const k=r[R];for(const J in k){const Z=k[J];for(const oe in Z)x(Z[oe].object),delete Z[oe];delete k[J]}delete r[R]}}function O(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const J in k){const Z=k[J];for(const oe in Z)x(Z[oe].object),delete Z[oe];delete k[J]}delete r[R.id]}function V(R){for(const k in r){const J=r[k];if(J[R.id]===void 0)continue;const Z=J[R.id];for(const oe in Z)x(Z[oe].object),delete Z[oe];delete J[R.id]}}function H(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:H,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfProgram:V,initAttributes:b,enableAttribute:E,disableUnusedAttributes:B}}function IM(s,e,t){let r;function o(p){r=p}function l(p,x){s.drawArrays(r,p,x),t.update(x,r,1)}function u(p,x,v){v!==0&&(s.drawArraysInstanced(r,p,x,v),t.update(x,r,v))}function d(p,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,v);let S=0;for(let M=0;M<v;M++)S+=x[M];t.update(S,r,1)}function f(p,x,v,g){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],x[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,x,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=x[b]*g[b];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function UM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(V){return!(V!==fi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const H=V===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Xi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Gi&&!H)}function f(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=f(p);x!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const v=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),B=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=M>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reverseDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:E,maxAttributes:y,maxVertexUniforms:B,maxVaryings:F,maxFragmentUniforms:C,vertexTextures:U,maxSamples:O}}function kM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new qr,d=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||r!==0||o;return o=g,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){t=x(v,g,0)},this.setState=function(v,g,S){const M=v.clippingPlanes,b=v.clipIntersection,E=v.clipShadows,y=s.get(v);if(!o||M===null||M.length===0||l&&!E)l?x(null):p();else{const B=l?0:r,F=B*4;let C=y.clippingState||null;f.value=C,C=x(M,g,F,S);for(let U=0;U!==F;++U)C[U]=t[U];y.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=B}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,g,S,M){const b=v!==null?v.length:0;let E=null;if(b!==0){if(E=f.value,M!==!0||E===null){const y=S+b*4,B=g.matrixWorldInverse;d.getNormalMatrix(B),(E===null||E.length<y)&&(E=new Float32Array(y));for(let F=0,C=S;F!==b;++F,C+=4)u.copy(v[F]).applyMatrix4(B,d),u.normal.toArray(E,C),E[C+3]=u.constant}f.value=E,f.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,E}}function OM(s){let e=new WeakMap;function t(u,d){return d===Od?u.mapping=Zs:d===Bd&&(u.mapping=Ks),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Od||d===Bd)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new oS(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const js=4,ag=[.125,.215,.35,.446,.526,.582],Kr=20,_d=new Ix,lg=new At;let yd=null,Sd=0,Ed=0,Md=!1;const $r=(1+Math.sqrt(5))/2,Vs=1/$r,cg=[new Y(-$r,Vs,0),new Y($r,Vs,0),new Y(-Vs,0,$r),new Y(Vs,0,$r),new Y(0,$r,-Vs),new Y(0,$r,Vs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class ug{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Ed),this._renderer.xr.enabled=Md,e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:ia,format:fi,colorSpace:eo,depthBuffer:!1},o=dg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(l)),this._blurMaterial=zM(l,e,t)}return o}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,_d)}_sceneToCubeUV(e,t,r,o){const d=new jn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,g=x.toneMapping;x.getClearColor(lg),x.toneMapping=wr,x.autoClear=!1;const S=new vx({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),M=new In(new oa,S);let b=!1;const E=e.background;E?E.isColor&&(S.color.copy(E),e.background=null,b=!0):(S.color.copy(lg),b=!0);for(let y=0;y<6;y++){const B=y%3;B===0?(d.up.set(0,f[y],0),d.lookAt(p[y],0,0)):B===1?(d.up.set(0,0,f[y]),d.lookAt(0,p[y],0)):(d.up.set(0,f[y],0),d.lookAt(0,0,p[y]));const F=this._cubeSize;Bl(o,B*F,y>2?F:0,F,F),x.setRenderTarget(o),b&&x.render(M,d),x.render(e,d)}M.geometry.dispose(),M.material.dispose(),x.toneMapping=g,x.autoClear=v,e.background=E}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zs||e.mapping===Ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new In(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Bl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,_d)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=cg[(o-l-1)%cg.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,v=new In(this._lodPlanes[o],p),g=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),b=l/M,E=isFinite(l)?1+Math.floor(x*b):Kr;E>Kr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Kr}`);const y=[];let B=0;for(let V=0;V<Kr;++V){const H=V/b,P=Math.exp(-H*H/2);y.push(P),V===0?B+=P:V<E&&(B+=2*P)}for(let V=0;V<y.length;V++)y[V]=y[V]/B;g.envMap.value=e.texture,g.samples.value=E,g.weights.value=y,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:F}=this;g.dTheta.value=M,g.mipInt.value=F-r;const C=this._sizeLods[o],U=3*C*(o>F-js?o-F+js:0),O=4*(this._cubeSize-C);Bl(t,U,O,3*C,2*C),f.setRenderTarget(t),f.render(v,_d)}}function BM(s){const e=[],t=[],r=[];let o=s;const l=s-js+1+ag.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>s-js?f=ag[u-s+js-1]:u===0&&(f=0),r.push(f);const p=1/(d-2),x=-p,v=1+p,g=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,M=6,b=3,E=2,y=1,B=new Float32Array(b*M*S),F=new Float32Array(E*M*S),C=new Float32Array(y*M*S);for(let O=0;O<S;O++){const V=O%3*2/3-1,H=O>2?0:-1,P=[V,H,0,V+2/3,H,0,V+2/3,H+1,0,V,H,0,V+2/3,H+1,0,V,H+1,0];B.set(P,b*M*O),F.set(g,E*M*O);const R=[O,O,O,O,O,O];C.set(R,y*M*O)}const U=new ti;U.setAttribute("position",new pi(B,b)),U.setAttribute("uv",new pi(F,E)),U.setAttribute("faceIndex",new pi(C,y)),e.push(U),o>js&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function dg(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=Ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function zM(s,e,t){const r=new Float32Array(Kr),o=new Y(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:zf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function fg(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function hg(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function zf(){return`

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
	`}function VM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===Od||f===Bd,x=f===Zs||f===Ks;if(p||x){let v=e.get(d);const g=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return t===null&&(t=new ug(s)),v=p?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return p&&S&&S.height>0||x&&S&&o(S)?(t===null&&(t=new ug(s)),v=p?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let f=0;const p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function HM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Hs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function GM(s,e,t,r){const o={},l=new WeakMap;function u(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(v,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function f(v){const g=v.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(v){const g=[],S=v.index,M=v.attributes.position;let b=0;if(S!==null){const B=S.array;b=S.version;for(let F=0,C=B.length;F<C;F+=3){const U=B[F+0],O=B[F+1],V=B[F+2];g.push(U,O,O,V,V,U)}}else if(M!==void 0){const B=M.array;b=M.version;for(let F=0,C=B.length/3-1;F<C;F+=3){const U=F+0,O=F+1,V=F+2;g.push(U,O,O,V,V,U)}}else return;const E=new(fx(g)?yx:_x)(g,1);E.version=b;const y=l.get(v);y&&e.remove(y),l.set(v,E)}function x(v){const g=l.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&p(v)}else p(v);return l.get(v)}return{get:d,update:f,getWireframeAttribute:x}}function jM(s,e,t){let r;function o(g){r=g}let l,u;function d(g){l=g.type,u=g.bytesPerElement}function f(g,S){s.drawElements(r,S,l,g*u),t.update(S,r,1)}function p(g,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,g*u,M),t.update(S,r,M))}function x(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,g,0,M);let E=0;for(let y=0;y<M;y++)E+=S[y];t.update(E,r,1)}function v(g,S,M,b){if(M===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let y=0;y<g.length;y++)p(g[y]/u,S[y],b[y]);else{E.multiDrawElementsInstancedWEBGL(r,S,0,l,g,0,b,0,M);let y=0;for(let B=0;B<M;B++)y+=S[B]*b[B];t.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function WM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function XM(s,e,t){const r=new WeakMap,o=new Lt;function l(u,d,f){const p=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let g=r.get(d);if(g===void 0||g.count!==v){let R=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;g!==void 0&&g.texture.dispose();const M=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let C=0;M===!0&&(C=1),b===!0&&(C=2),E===!0&&(C=3);let U=d.attributes.position.count*C,O=1;U>e.maxTextureSize&&(O=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const V=new Float32Array(U*O*4*v),H=new px(V,U,O,v);H.type=Gi,H.needsUpdate=!0;const P=C*4;for(let k=0;k<v;k++){const J=y[k],Z=B[k],oe=F[k],ue=U*O*4*k;for(let ae=0;ae<J.count;ae++){const pe=ae*P;M===!0&&(o.fromBufferAttribute(J,ae),V[ue+pe+0]=o.x,V[ue+pe+1]=o.y,V[ue+pe+2]=o.z,V[ue+pe+3]=0),b===!0&&(o.fromBufferAttribute(Z,ae),V[ue+pe+4]=o.x,V[ue+pe+5]=o.y,V[ue+pe+6]=o.z,V[ue+pe+7]=0),E===!0&&(o.fromBufferAttribute(oe,ae),V[ue+pe+8]=o.x,V[ue+pe+9]=o.y,V[ue+pe+10]=o.z,V[ue+pe+11]=oe.itemSize===4?o.w:1)}}g={count:v,texture:H,size:new Ve(U,O)},r.set(d,g),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let E=0;E<p.length;E++)M+=p[E];const b=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",b),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function qM(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,x=f.geometry,v=e.get(f,x);if(o.get(v)!==p&&(e.update(v),o.set(v,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const g=f.skeleton;o.get(g)!==p&&(g.update(),o.set(g,p))}return v}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const kx=new kn,pg=new bx(1,1),Ox=new px,Bx=new Gy,zx=new Mx,mg=[],gg=[],xg=new Float32Array(16),vg=new Float32Array(9),_g=new Float32Array(4);function oo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=mg[o];if(l===void 0&&(l=new Float32Array(o),mg[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ic(s,e){let t=gg[e];t===void 0&&(t=new Int32Array(e),gg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function $M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function YM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function JM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;_g.set(r),s.uniformMatrix2fv(this.addr,!1,_g),tn(t,r)}}function QM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;vg.set(r),s.uniformMatrix3fv(this.addr,!1,vg),tn(t,r)}}function ew(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;xg.set(r),s.uniformMatrix4fv(this.addr,!1,xg),tn(t,r)}}function tw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function sw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function cw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(pg.compareFunction=dx,l=pg):l=kx,t.setTexture2D(e||l,o)}function uw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Bx,o)}function dw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||zx,o)}function fw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ox,o)}function hw(s){switch(s){case 5126:return $M;case 35664:return YM;case 35665:return ZM;case 35666:return KM;case 35674:return JM;case 35675:return QM;case 35676:return ew;case 5124:case 35670:return tw;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return ow;case 36295:return aw;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return uw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return fw}}function pw(s,e){s.uniform1fv(this.addr,e)}function mw(s,e){const t=oo(e,this.size,2);s.uniform2fv(this.addr,t)}function gw(s,e){const t=oo(e,this.size,3);s.uniform3fv(this.addr,t)}function xw(s,e){const t=oo(e,this.size,4);s.uniform4fv(this.addr,t)}function vw(s,e){const t=oo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _w(s,e){const t=oo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yw(s,e){const t=oo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Sw(s,e){s.uniform1iv(this.addr,e)}function Ew(s,e){s.uniform2iv(this.addr,e)}function Mw(s,e){s.uniform3iv(this.addr,e)}function ww(s,e){s.uniform4iv(this.addr,e)}function bw(s,e){s.uniform1uiv(this.addr,e)}function Tw(s,e){s.uniform2uiv(this.addr,e)}function Cw(s,e){s.uniform3uiv(this.addr,e)}function Aw(s,e){s.uniform4uiv(this.addr,e)}function Rw(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||kx,l[u])}function Pw(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Bx,l[u])}function Nw(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||zx,l[u])}function Dw(s,e,t){const r=this.cache,o=e.length,l=ic(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Ox,l[u])}function Lw(s){switch(s){case 5126:return pw;case 35664:return mw;case 35665:return gw;case 35666:return xw;case 35674:return vw;case 35675:return _w;case 35676:return yw;case 5124:case 35670:return Sw;case 35667:case 35671:return Ew;case 35668:case 35672:return Mw;case 35669:case 35673:return ww;case 5125:return bw;case 36294:return Tw;case 36295:return Cw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Rw;case 35679:case 36299:case 36307:return Pw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Dw}}class Fw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=hw(t.type)}}class Iw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lw(t.type)}}class Uw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function yg(s,e){s.seq.push(e),s.map[e.id]=e}function kw(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){yg(t,p===void 0?new Fw(d,s,e):new Iw(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new Uw(d),yg(t,v)),t=v}}}class ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);kw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Sg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Ow=37297;let Bw=0;function zw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Eg=new gt;function Vw(s){Pt._getMatrix(Eg,Pt.workingColorSpace,s);const e=`mat3( ${Eg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Yl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+zw(s.getShaderSource(e),u)}else return o}function Hw(s,e){const t=Vw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gw(s,e){let t;switch(e){case my:t="Linear";break;case gy:t="Reinhard";break;case xy:t="Cineon";break;case vy:t="ACESFilmic";break;case yy:t="AgX";break;case Sy:t="Neutral";break;case _y:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zl=new Y;function jw(){Pt.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function Xw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function qo(s){return s!==""}function wg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $w=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace($w,Zw)}const Yw=new Map;function Zw(s,e){let t=xt[e];if(t===void 0){const r=Yw.get(e);if(r!==void 0)t=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(s){return s.replace(Kw,Jw)}function Jw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Cg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Qw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function eb(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Ks:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tb(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function nb(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jg:e="ENVMAP_BLENDING_MULTIPLY";break;case hy:e="ENVMAP_BLENDING_MIX";break;case py:e="ENVMAP_BLENDING_ADD";break}return e}function ib(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function rb(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=Qw(t),p=eb(t),x=tb(t),v=nb(t),g=ib(t),S=Ww(t),M=Xw(l),b=o.createProgram();let E,y,B=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qo).join(`
`),E.length>0&&(E+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(qo).join(`
`),y.length>0&&(y+=`
`)):(E=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),y=[Cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?xt.tonemapping_pars_fragment:"",t.toneMapping!==wr?Gw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Hw("linearToOutputTexel",t.outputColorSpace),jw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qo).join(`
`)),u=yf(u),u=wg(u,t),u=bg(u,t),d=yf(d),d=wg(d,t),d=bg(d,t),u=Tg(u),d=Tg(d),t.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,E=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,y=["#define varying in",t.glslVersion===Nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const F=B+E+u,C=B+y+d,U=Sg(o,o.VERTEX_SHADER,F),O=Sg(o,o.FRAGMENT_SHADER,C);o.attachShader(b,U),o.attachShader(b,O),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function V(k){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(b).trim(),Z=o.getShaderInfoLog(U).trim(),oe=o.getShaderInfoLog(O).trim();let ue=!0,ae=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,U,O);else{const pe=Mg(o,U,"vertex"),j=Mg(o,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+pe+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||oe==="")&&(ae=!1);ae&&(k.diagnostics={runnable:ue,programLog:J,vertexShader:{log:Z,prefix:E},fragmentShader:{log:oe,prefix:y}})}o.deleteShader(U),o.deleteShader(O),H=new ql(o,b),P=qw(o,b)}let H;this.getUniforms=function(){return H===void 0&&V(this),H};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(b,Ow)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=O,this}let sb=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ab(e),t.set(e,r)),r}}class ab{constructor(e){this.id=sb++,this.code=e,this.usedTimes=0}}function lb(s,e,t,r,o,l,u){const d=new gx,f=new ob,p=new Set,x=[],v=o.logarithmicDepthBuffer,g=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(P){return p.add(P),P===0?"uv":`uv${P}`}function E(P,R,k,J,Z){const oe=J.fog,ue=Z.geometry,ae=P.isMeshStandardMaterial?J.environment:null,pe=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),j=pe&&pe.mapping===Ql?pe.image.height:null,de=M[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const I=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,w=I!==void 0?I.length:0;let W=0;ue.morphAttributes.position!==void 0&&(W=1),ue.morphAttributes.normal!==void 0&&(W=2),ue.morphAttributes.color!==void 0&&(W=3);let ye,X,re,fe;if(de){const bt=Si[de];ye=bt.vertexShader,X=bt.fragmentShader}else ye=P.vertexShader,X=P.fragmentShader,f.update(P),re=f.getVertexShaderID(P),fe=f.getFragmentShaderID(P);const ie=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Le=Z.isInstancedMesh===!0,Ae=Z.isBatchedMesh===!0,$e=!!P.map,ve=!!P.matcap,ge=!!pe,D=!!P.aoMap,Ue=!!P.lightMap,Ee=!!P.bumpMap,Fe=!!P.normalMap,Ce=!!P.displacementMap,Qe=!!P.emissiveMap,Ne=!!P.metalnessMap,L=!!P.roughnessMap,A=P.anisotropy>0,ee=P.clearcoat>0,me=P.dispersion>0,Me=P.iridescence>0,_e=P.sheen>0,Ye=P.transmission>0,Ie=A&&!!P.anisotropyMap,He=ee&&!!P.clearcoatMap,ft=ee&&!!P.clearcoatNormalMap,Te=ee&&!!P.clearcoatRoughnessMap,Xe=Me&&!!P.iridescenceMap,rt=Me&&!!P.iridescenceThicknessMap,ct=_e&&!!P.sheenColorMap,Ze=_e&&!!P.sheenRoughnessMap,vt=!!P.specularMap,ht=!!P.specularColorMap,Nt=!!P.specularIntensityMap,$=Ye&&!!P.transmissionMap,ke=Ye&&!!P.thicknessMap,he=!!P.gradientMap,Se=!!P.alphaMap,Ge=P.alphaTest>0,ze=!!P.alphaHash,pt=!!P.extensions;let Ut=wr;P.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Kt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:ye,fragmentShader:X,defines:P.defines,customVertexShaderID:re,customFragmentShaderID:fe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ae,batchingColor:Ae&&Z._colorsTexture!==null,instancing:Le,instancingColor:Le&&Z.instanceColor!==null,instancingMorph:Le&&Z.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:eo,alphaToCoverage:!!P.alphaToCoverage,map:$e,matcap:ve,envMap:ge,envMapMode:ge&&pe.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:Ue,bumpMap:Ee,normalMap:Fe,displacementMap:g&&Ce,emissiveMap:Qe,normalMapObjectSpace:Fe&&P.normalMapType===by,normalMapTangentSpace:Fe&&P.normalMapType===ux,metalnessMap:Ne,roughnessMap:L,anisotropy:A,anisotropyMap:Ie,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:ft,clearcoatRoughnessMap:Te,dispersion:me,iridescence:Me,iridescenceMap:Xe,iridescenceThicknessMap:rt,sheen:_e,sheenColorMap:ct,sheenRoughnessMap:Ze,specularMap:vt,specularColorMap:ht,specularIntensityMap:Nt,transmission:Ye,transmissionMap:$,thicknessMap:ke,gradientMap:he,opaque:P.transparent===!1&&P.blending===Ws&&P.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ge,alphaHash:ze,combine:P.combine,mapUv:$e&&b(P.map.channel),aoMapUv:D&&b(P.aoMap.channel),lightMapUv:Ue&&b(P.lightMap.channel),bumpMapUv:Ee&&b(P.bumpMap.channel),normalMapUv:Fe&&b(P.normalMap.channel),displacementMapUv:Ce&&b(P.displacementMap.channel),emissiveMapUv:Qe&&b(P.emissiveMap.channel),metalnessMapUv:Ne&&b(P.metalnessMap.channel),roughnessMapUv:L&&b(P.roughnessMap.channel),anisotropyMapUv:Ie&&b(P.anisotropyMap.channel),clearcoatMapUv:He&&b(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&b(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&b(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&b(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&b(P.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&b(P.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&b(P.sheenRoughnessMap.channel),specularMapUv:vt&&b(P.specularMap.channel),specularColorMapUv:ht&&b(P.specularColorMap.channel),specularIntensityMapUv:Nt&&b(P.specularIntensityMap.channel),transmissionMapUv:$&&b(P.transmissionMap.channel),thicknessMapUv:ke&&b(P.thicknessMap.channel),alphaMapUv:Se&&b(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Fe||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ue.attributes.uv&&($e||Se),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:xe,skinning:Z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:$e&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:Qe&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===Un,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:pt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&P.extensions.multiDraw===!0||Ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function y(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)R.push(k),R.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(B(R,P),F(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function B(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function F(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=M[P.type];let k;if(R){const J=Si[R];k=nS.clone(J.uniforms)}else k=P.uniforms;return k}function U(P,R){let k;for(let J=0,Z=x.length;J<Z;J++){const oe=x[J];if(oe.cacheKey===R){k=oe,++k.usedTimes;break}}return k===void 0&&(k=new rb(s,R,P,l),x.push(k)),k}function O(P){if(--P.usedTimes===0){const R=x.indexOf(P);x[R]=x[x.length-1],x.pop(),P.destroy()}}function V(P){f.remove(P)}function H(){f.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:C,acquireProgram:U,releaseProgram:O,releaseShaderCache:V,programs:x,dispose:H}}function cb(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function ub(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v,g,S,M,b,E){let y=s[e];return y===void 0?(y={id:v.id,object:v,geometry:g,material:S,groupOrder:M,renderOrder:v.renderOrder,z:b,group:E},s[e]=y):(y.id=v.id,y.object=v,y.geometry=g,y.material=S,y.groupOrder=M,y.renderOrder=v.renderOrder,y.z=b,y.group=E),e++,y}function d(v,g,S,M,b,E){const y=u(v,g,S,M,b,E);S.transmission>0?r.push(y):S.transparent===!0?o.push(y):t.push(y)}function f(v,g,S,M,b,E){const y=u(v,g,S,M,b,E);S.transmission>0?r.unshift(y):S.transparent===!0?o.unshift(y):t.unshift(y)}function p(v,g){t.length>1&&t.sort(v||ub),r.length>1&&r.sort(g||Ag),o.length>1&&o.sort(g||Ag)}function x(){for(let v=e,g=s.length;v<g;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:f,finish:x,sort:p}}function db(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Rg,s.set(r,[u])):o>=l.length?(u=new Rg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function fb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new At};break;case"SpotLight":t={position:new Y,direction:new Y,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function hb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let pb=0;function mb(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gb(s){const e=new fb,t=hb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Y);const o=new Y,l=new Bt,u=new Bt;function d(p){let x=0,v=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,M=0,b=0,E=0,y=0,B=0,F=0,C=0,U=0,O=0,V=0;p.sort(mb);for(let P=0,R=p.length;P<R;P++){const k=p[P],J=k.color,Z=k.intensity,oe=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)x+=J.r*Z,v+=J.g*Z,g+=J.b*Z;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(k.sh.coefficients[ae],Z);V++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,j=t.get(k);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=k.shadow.matrix,B++}r.directional[S]=ae,S++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(J).multiplyScalar(Z),ae.distance=oe,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,r.spot[b]=ae;const pe=k.shadow;if(k.map&&(r.spotLightMap[U]=k.map,U++,pe.updateMatrices(k),k.castShadow&&O++),r.spotLightMatrix[b]=pe.matrix,k.castShadow){const j=t.get(k);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.spotShadow[b]=j,r.spotShadowMap[b]=ue,C++}b++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(J).multiplyScalar(Z),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),r.rectArea[E]=ae,E++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const pe=k.shadow,j=t.get(k);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,j.shadowCameraNear=pe.camera.near,j.shadowCameraFar=pe.camera.far,r.pointShadow[M]=j,r.pointShadowMap[M]=ue,r.pointShadowMatrix[M]=k.shadow.matrix,F++}r.point[M]=ae,M++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(Z),ae.groundColor.copy(k.groundColor).multiplyScalar(Z),r.hemi[y]=ae,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==S||H.pointLength!==M||H.spotLength!==b||H.rectAreaLength!==E||H.hemiLength!==y||H.numDirectionalShadows!==B||H.numPointShadows!==F||H.numSpotShadows!==C||H.numSpotMaps!==U||H.numLightProbes!==V)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=E,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=C+U-O,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=V,H.directionalLength=S,H.pointLength=M,H.spotLength=b,H.rectAreaLength=E,H.hemiLength=y,H.numDirectionalShadows=B,H.numPointShadows=F,H.numSpotShadows=C,H.numSpotMaps=U,H.numLightProbes=V,r.version=pb++)}function f(p,x){let v=0,g=0,S=0,M=0,b=0;const E=x.matrixWorldInverse;for(let y=0,B=p.length;y<B;y++){const F=p[y];if(F.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(E),v++}else if(F.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(E),C.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(E),S++}else if(F.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(E),u.identity(),l.copy(F.matrixWorld),l.premultiply(E),u.extractRotation(l),C.halfWidth.set(F.width*.5,0,0),C.halfHeight.set(0,F.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(F.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(F.matrixWorld),C.position.applyMatrix4(E),g++}else if(F.isHemisphereLight){const C=r.hemi[b];C.direction.setFromMatrixPosition(F.matrixWorld),C.direction.transformDirection(E),b++}}}return{setup:d,setupView:f,state:r}}function Pg(s){const e=new gb(s),t=[],r=[];function o(x){p.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function f(x){e.setupView(t,x)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function xb(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Pg(s),e.set(o,[d])):l>=u.length?(d=new Pg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yb(s,e,t){let r=new Ff;const o=new Ve,l=new Ve,u=new Lt,d=new jS({depthPacking:wy}),f=new WS,p={},x=t.maxTextureSize,v={[br]:Un,[Un]:br,[Hi]:Hi},g=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:vb,fragmentShader:_b}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new ti;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new In(M,g),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kg;let y=this.type;this.render=function(O,V,H){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Mr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=y!==Vi&&this.type===Vi,oe=y===Vi&&this.type!==Vi;for(let ue=0,ae=O.length;ue<ae;ue++){const pe=O[ue],j=pe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const de=j.getFrameExtents();if(o.multiply(de),l.copy(j.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/de.x),o.x=l.x*de.x,j.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/de.y),o.y=l.y*de.y,j.mapSize.y=l.y)),j.map===null||Z===!0||oe===!0){const w=this.type!==Vi?{minFilter:hi,magFilter:hi}:{};j.map!==null&&j.map.dispose(),j.map=new ts(o.x,o.y,w),j.map.texture.name=pe.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const I=j.getViewportCount();for(let w=0;w<I;w++){const W=j.getViewport(w);u.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),J.viewport(u),j.updateMatrices(pe,w),r=j.getFrustum(),C(V,H,j.camera,pe,this.type)}j.isPointLightShadow!==!0&&this.type===Vi&&B(j,H),j.needsUpdate=!1}y=this.type,E.needsUpdate=!1,s.setRenderTarget(P,R,k)};function B(O,V){const H=e.update(b);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new ts(o.x,o.y)),g.uniforms.shadow_pass.value=O.map.texture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(V,null,H,g,b,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(V,null,H,S,b,null)}function F(O,V,H,P){let R=null;const k=H.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(k!==void 0)R=k;else if(R=H.isPointLight===!0?f:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){const J=R.uuid,Z=V.uuid;let oe=p[J];oe===void 0&&(oe={},p[J]=oe);let ue=oe[Z];ue===void 0&&(ue=R.clone(),oe[Z]=ue,V.addEventListener("dispose",U)),R=ue}if(R.visible=V.visible,R.wireframe=V.wireframe,P===Vi?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:v[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=H}return R}function C(O,V,H,P,R){if(O.visible===!1)return;if(O.layers.test(V.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Vi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,O.matrixWorld);const Z=e.update(O),oe=O.material;if(Array.isArray(oe)){const ue=Z.groups;for(let ae=0,pe=ue.length;ae<pe;ae++){const j=ue[ae],de=oe[j.materialIndex];if(de&&de.visible){const I=F(O,de,P,R);O.onBeforeShadow(s,O,V,H,Z,I,j),s.renderBufferDirect(H,null,Z,I,O,j),O.onAfterShadow(s,O,V,H,Z,I,j)}}}else if(oe.visible){const ue=F(O,oe,P,R);O.onBeforeShadow(s,O,V,H,Z,ue,null),s.renderBufferDirect(H,null,Z,ue,O,null),O.onAfterShadow(s,O,V,H,Z,ue,null)}}const J=O.children;for(let Z=0,oe=J.length;Z<oe;Z++)C(J[Z],V,H,P,R)}function U(O){O.target.removeEventListener("dispose",U);for(const H in p){const P=p[H],R=O.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const Sb={[Nd]:Dd,[Ld]:Ud,[Fd]:kd,[Ys]:Id,[Dd]:Nd,[Ud]:Ld,[kd]:Fd,[Id]:Ys};function Eb(s,e){function t(){let $=!1;const ke=new Lt;let he=null;const Se=new Lt(0,0,0,0);return{setMask:function(Ge){he!==Ge&&!$&&(s.colorMask(Ge,Ge,Ge,Ge),he=Ge)},setLocked:function(Ge){$=Ge},setClear:function(Ge,ze,pt,Ut,Kt){Kt===!0&&(Ge*=Ut,ze*=Ut,pt*=Ut),ke.set(Ge,ze,pt,Ut),Se.equals(ke)===!1&&(s.clearColor(Ge,ze,pt,Ut),Se.copy(ke))},reset:function(){$=!1,he=null,Se.set(-1,0,0,0)}}}function r(){let $=!1,ke=!1,he=null,Se=null,Ge=null;return{setReversed:function(ze){if(ke!==ze){const pt=e.get("EXT_clip_control");ke?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ge;Ge=null,this.setClear(Ut)}ke=ze},getReversed:function(){return ke},setTest:function(ze){ze?ie(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(ze){he!==ze&&!$&&(s.depthMask(ze),he=ze)},setFunc:function(ze){if(ke&&(ze=Sb[ze]),Se!==ze){switch(ze){case Nd:s.depthFunc(s.NEVER);break;case Dd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case Fd:s.depthFunc(s.EQUAL);break;case Id:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=ze}},setLocked:function(ze){$=ze},setClear:function(ze){Ge!==ze&&(ke&&(ze=1-ze),s.clearDepth(ze),Ge=ze)},reset:function(){$=!1,he=null,Se=null,Ge=null,ke=!1}}}function o(){let $=!1,ke=null,he=null,Se=null,Ge=null,ze=null,pt=null,Ut=null,Kt=null;return{setTest:function(bt){$||(bt?ie(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(bt){ke!==bt&&!$&&(s.stencilMask(bt),ke=bt)},setFunc:function(bt,Cn,Sn){(he!==bt||Se!==Cn||Ge!==Sn)&&(s.stencilFunc(bt,Cn,Sn),he=bt,Se=Cn,Ge=Sn)},setOp:function(bt,Cn,Sn){(ze!==bt||pt!==Cn||Ut!==Sn)&&(s.stencilOp(bt,Cn,Sn),ze=bt,pt=Cn,Ut=Sn)},setLocked:function(bt){$=bt},setClear:function(bt){Kt!==bt&&(s.clearStencil(bt),Kt=bt)},reset:function(){$=!1,ke=null,he=null,Se=null,Ge=null,ze=null,pt=null,Ut=null,Kt=null}}}const l=new t,u=new r,d=new o,f=new WeakMap,p=new WeakMap;let x={},v={},g=new WeakMap,S=[],M=null,b=!1,E=null,y=null,B=null,F=null,C=null,U=null,O=null,V=new At(0,0,0),H=0,P=!1,R=null,k=null,J=null,Z=null,oe=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,pe=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(j)[1]),ae=pe>=1):j.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ae=pe>=2);let de=null,I={};const w=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),ye=new Lt().fromArray(w),X=new Lt().fromArray(W);function re($,ke,he,Se){const Ge=new Uint8Array(4),ze=s.createTexture();s.bindTexture($,ze),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<he;pt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(ke,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Ge):s.texImage2D(ke+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ge);return ze}const fe={};fe[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ie(s.DEPTH_TEST),u.setFunc(Ys),Ee(!1),Fe(bm),ie(s.CULL_FACE),D(Mr);function ie($){x[$]!==!0&&(s.enable($),x[$]=!0)}function xe($){x[$]!==!1&&(s.disable($),x[$]=!1)}function Le($,ke){return v[$]!==ke?(s.bindFramebuffer($,ke),v[$]=ke,$===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=ke),$===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=ke),!0):!1}function Ae($,ke){let he=S,Se=!1;if($){he=g.get(ke),he===void 0&&(he=[],g.set(ke,he));const Ge=$.textures;if(he.length!==Ge.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,pt=Ge.length;ze<pt;ze++)he[ze]=s.COLOR_ATTACHMENT0+ze;he.length=Ge.length,Se=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Se=!0);Se&&s.drawBuffers(he)}function $e($){return M!==$?(s.useProgram($),M=$,!0):!1}const ve={[Zr]:s.FUNC_ADD,[Z_]:s.FUNC_SUBTRACT,[K_]:s.FUNC_REVERSE_SUBTRACT};ve[J_]=s.MIN,ve[Q_]=s.MAX;const ge={[ey]:s.ZERO,[ty]:s.ONE,[ny]:s.SRC_COLOR,[Rd]:s.SRC_ALPHA,[ly]:s.SRC_ALPHA_SATURATE,[oy]:s.DST_COLOR,[ry]:s.DST_ALPHA,[iy]:s.ONE_MINUS_SRC_COLOR,[Pd]:s.ONE_MINUS_SRC_ALPHA,[ay]:s.ONE_MINUS_DST_COLOR,[sy]:s.ONE_MINUS_DST_ALPHA,[cy]:s.CONSTANT_COLOR,[uy]:s.ONE_MINUS_CONSTANT_COLOR,[dy]:s.CONSTANT_ALPHA,[fy]:s.ONE_MINUS_CONSTANT_ALPHA};function D($,ke,he,Se,Ge,ze,pt,Ut,Kt,bt){if($===Mr){b===!0&&(xe(s.BLEND),b=!1);return}if(b===!1&&(ie(s.BLEND),b=!0),$!==Y_){if($!==E||bt!==P){if((y!==Zr||C!==Zr)&&(s.blendEquation(s.FUNC_ADD),y=Zr,C=Zr),bt)switch($){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tm:s.blendFunc(s.ONE,s.ONE);break;case Cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Tm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Cm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}B=null,F=null,U=null,O=null,V.set(0,0,0),H=0,E=$,P=bt}return}Ge=Ge||ke,ze=ze||he,pt=pt||Se,(ke!==y||Ge!==C)&&(s.blendEquationSeparate(ve[ke],ve[Ge]),y=ke,C=Ge),(he!==B||Se!==F||ze!==U||pt!==O)&&(s.blendFuncSeparate(ge[he],ge[Se],ge[ze],ge[pt]),B=he,F=Se,U=ze,O=pt),(Ut.equals(V)===!1||Kt!==H)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Kt),V.copy(Ut),H=Kt),E=$,P=!1}function Ue($,ke){$.side===Hi?xe(s.CULL_FACE):ie(s.CULL_FACE);let he=$.side===Un;ke&&(he=!he),Ee(he),$.blending===Ws&&$.transparent===!1?D(Mr):D($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const Se=$.stencilWrite;d.setTest(Se),Se&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Qe($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee($){R!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),R=$)}function Fe($){$!==X_?(ie(s.CULL_FACE),$!==k&&($===bm?s.cullFace(s.BACK):$===q_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),k=$}function Ce($){$!==J&&(ae&&s.lineWidth($),J=$)}function Qe($,ke,he){$?(ie(s.POLYGON_OFFSET_FILL),(Z!==ke||oe!==he)&&(s.polygonOffset(ke,he),Z=ke,oe=he)):xe(s.POLYGON_OFFSET_FILL)}function Ne($){$?ie(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function L($){$===void 0&&($=s.TEXTURE0+ue-1),de!==$&&(s.activeTexture($),de=$)}function A($,ke,he){he===void 0&&(de===null?he=s.TEXTURE0+ue-1:he=de);let Se=I[he];Se===void 0&&(Se={type:void 0,texture:void 0},I[he]=Se),(Se.type!==$||Se.texture!==ke)&&(de!==he&&(s.activeTexture(he),de=he),s.bindTexture($,ke||fe[$]),Se.type=$,Se.texture=ke)}function ee(){const $=I[de];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{s.compressedTexImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ye(){try{s.texSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function He(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Te(){try{s.texStorage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xe(){try{s.texImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ct($){ye.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),ye.copy($))}function Ze($){X.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),X.copy($))}function vt($,ke){let he=p.get(ke);he===void 0&&(he=new WeakMap,p.set(ke,he));let Se=he.get($);Se===void 0&&(Se=s.getUniformBlockIndex(ke,$.name),he.set($,Se))}function ht($,ke){const Se=p.get(ke).get($);f.get(ke)!==Se&&(s.uniformBlockBinding(ke,Se,$.__bindingPointIndex),f.set(ke,Se))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},de=null,I={},v={},g=new WeakMap,S=[],M=null,b=!1,E=null,y=null,B=null,F=null,C=null,U=null,O=null,V=new At(0,0,0),H=0,P=!1,R=null,k=null,J=null,Z=null,oe=null,ye.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ie,disable:xe,bindFramebuffer:Le,drawBuffers:Ae,useProgram:$e,setBlending:D,setMaterial:Ue,setFlipSided:Ee,setCullFace:Fe,setLineWidth:Ce,setPolygonOffset:Qe,setScissorTest:Ne,activeTexture:L,bindTexture:A,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:Me,texImage2D:Xe,texImage3D:rt,updateUBOMapping:vt,uniformBlockBinding:ht,texStorage2D:ft,texStorage3D:Te,texSubImage2D:_e,texSubImage3D:Ye,compressedTexSubImage2D:Ie,compressedTexSubImage3D:He,scissor:ct,viewport:Ze,reset:Nt}}function Mb(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,x=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,A){return S?new OffscreenCanvas(L,A):Kl("canvas")}function b(L,A,ee){let me=1;const Me=Ne(L);if((Me.width>ee||Me.height>ee)&&(me=ee/Math.max(Me.width,Me.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _e=Math.floor(me*Me.width),Ye=Math.floor(me*Me.height);v===void 0&&(v=M(_e,Ye));const Ie=A?M(_e,Ye):v;return Ie.width=_e,Ie.height=Ye,Ie.getContext("2d").drawImage(L,0,0,_e,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+_e+"x"+Ye+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function E(L){return L.generateMipmaps}function y(L){s.generateMipmap(L)}function B(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function F(L,A,ee,me,Me=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=A;if(A===s.RED&&(ee===s.FLOAT&&(_e=s.R32F),ee===s.HALF_FLOAT&&(_e=s.R16F),ee===s.UNSIGNED_BYTE&&(_e=s.R8)),A===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.R8UI),ee===s.UNSIGNED_SHORT&&(_e=s.R16UI),ee===s.UNSIGNED_INT&&(_e=s.R32UI),ee===s.BYTE&&(_e=s.R8I),ee===s.SHORT&&(_e=s.R16I),ee===s.INT&&(_e=s.R32I)),A===s.RG&&(ee===s.FLOAT&&(_e=s.RG32F),ee===s.HALF_FLOAT&&(_e=s.RG16F),ee===s.UNSIGNED_BYTE&&(_e=s.RG8)),A===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.RG8UI),ee===s.UNSIGNED_SHORT&&(_e=s.RG16UI),ee===s.UNSIGNED_INT&&(_e=s.RG32UI),ee===s.BYTE&&(_e=s.RG8I),ee===s.SHORT&&(_e=s.RG16I),ee===s.INT&&(_e=s.RG32I)),A===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),ee===s.UNSIGNED_INT&&(_e=s.RGB32UI),ee===s.BYTE&&(_e=s.RGB8I),ee===s.SHORT&&(_e=s.RGB16I),ee===s.INT&&(_e=s.RGB32I)),A===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),ee===s.UNSIGNED_INT&&(_e=s.RGBA32UI),ee===s.BYTE&&(_e=s.RGBA8I),ee===s.SHORT&&(_e=s.RGBA16I),ee===s.INT&&(_e=s.RGBA32I)),A===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),A===s.RGBA){const Ye=Me?Yl:Pt.getTransfer(me);ee===s.FLOAT&&(_e=s.RGBA32F),ee===s.HALF_FLOAT&&(_e=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(_e=Ye===Dt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function C(L,A){let ee;return L?A===null||A===es||A===Js?ee=s.DEPTH24_STENCIL8:A===Gi?ee=s.DEPTH32F_STENCIL8:A===Jo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===es||A===Js?ee=s.DEPTH_COMPONENT24:A===Gi?ee=s.DEPTH_COMPONENT32F:A===Jo&&(ee=s.DEPTH_COMPONENT16),ee}function U(L,A){return E(L)===!0||L.isFramebufferTexture&&L.minFilter!==hi&&L.minFilter!==Ei?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function O(L){const A=L.target;A.removeEventListener("dispose",O),H(A),A.isVideoTexture&&x.delete(A)}function V(L){const A=L.target;A.removeEventListener("dispose",V),R(A)}function H(L){const A=r.get(L);if(A.__webglInit===void 0)return;const ee=L.source,me=g.get(ee);if(me){const Me=me[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&P(L),Object.keys(me).length===0&&g.delete(ee)}r.remove(L)}function P(L){const A=r.get(L);s.deleteTexture(A.__webglTexture);const ee=L.source,me=g.get(ee);delete me[A.__cacheKey],u.memory.textures--}function R(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let Me=0;Me<A.__webglFramebuffer[me].length;Me++)s.deleteFramebuffer(A.__webglFramebuffer[me][Me]);else s.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)s.deleteFramebuffer(A.__webglFramebuffer[me]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ee=L.textures;for(let me=0,Me=ee.length;me<Me;me++){const _e=r.get(ee[me]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),u.memory.textures--),r.remove(ee[me])}r.remove(L)}let k=0;function J(){k=0}function Z(){const L=k;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function oe(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function ue(L,A){const ee=r.get(L);if(L.isVideoTexture&&Ce(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(ee,L,A);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+A)}function ae(L,A){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){X(ee,L,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+A)}function pe(L,A){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){X(ee,L,A);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+A)}function j(L,A){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){re(ee,L,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+A)}const de={[zd]:s.REPEAT,[Jr]:s.CLAMP_TO_EDGE,[Vd]:s.MIRRORED_REPEAT},I={[hi]:s.NEAREST,[Ey]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Gu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},w={[Ty]:s.NEVER,[Dy]:s.ALWAYS,[Cy]:s.LESS,[dx]:s.LEQUAL,[Ay]:s.EQUAL,[Ny]:s.GEQUAL,[Ry]:s.GREATER,[Py]:s.NOTEQUAL};function W(L,A){if(A.type===Gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ei||A.magFilter===Gu||A.magFilter===ml||A.magFilter===Qr||A.minFilter===Ei||A.minFilter===Gu||A.minFilter===ml||A.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,de[A.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,de[A.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,de[A.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,I[A.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,I[A.minFilter]),A.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,w[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===hi||A.minFilter!==ml&&A.minFilter!==Qr||A.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ye(L,A){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",O));const me=A.source;let Me=g.get(me);Me===void 0&&(Me={},g.set(me,Me));const _e=oe(A);if(_e!==L.__cacheKey){Me[_e]===void 0&&(Me[_e]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),Me[_e].usedTimes++;const Ye=Me[L.__cacheKey];Ye!==void 0&&(Me[L.__cacheKey].usedTimes--,Ye.usedTimes===0&&P(A)),L.__cacheKey=_e,L.__webglTexture=Me[_e].texture}return ee}function X(L,A,ee){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);const Me=ye(L,A),_e=A.source;t.bindTexture(me,L.__webglTexture,s.TEXTURE0+ee);const Ye=r.get(_e);if(_e.version!==Ye.__version||Me===!0){t.activeTexture(s.TEXTURE0+ee);const Ie=Pt.getPrimaries(Pt.workingColorSpace),He=A.colorSpace===Er?null:Pt.getPrimaries(A.colorSpace),ft=A.colorSpace===Er||Ie===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Te=b(A.image,!1,o.maxTextureSize);Te=Qe(A,Te);const Xe=l.convert(A.format,A.colorSpace),rt=l.convert(A.type);let ct=F(A.internalFormat,Xe,rt,A.colorSpace,A.isVideoTexture);W(me,A);let Ze;const vt=A.mipmaps,ht=A.isVideoTexture!==!0,Nt=Ye.__version===void 0||Me===!0,$=_e.dataReady,ke=U(A,Te);if(A.isDepthTexture)ct=C(A.format===Qs,A.type),Nt&&(ht?t.texStorage2D(s.TEXTURE_2D,1,ct,Te.width,Te.height):t.texImage2D(s.TEXTURE_2D,0,ct,Te.width,Te.height,0,Xe,rt,null));else if(A.isDataTexture)if(vt.length>0){ht&&Nt&&t.texStorage2D(s.TEXTURE_2D,ke,ct,vt[0].width,vt[0].height);for(let he=0,Se=vt.length;he<Se;he++)Ze=vt[he],ht?$&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ze.width,Ze.height,Xe,rt,Ze.data):t.texImage2D(s.TEXTURE_2D,he,ct,Ze.width,Ze.height,0,Xe,rt,Ze.data);A.generateMipmaps=!1}else ht?(Nt&&t.texStorage2D(s.TEXTURE_2D,ke,ct,Te.width,Te.height),$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te.width,Te.height,Xe,rt,Te.data)):t.texImage2D(s.TEXTURE_2D,0,ct,Te.width,Te.height,0,Xe,rt,Te.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ht&&Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,ct,vt[0].width,vt[0].height,Te.depth);for(let he=0,Se=vt.length;he<Se;he++)if(Ze=vt[he],A.format!==fi)if(Xe!==null)if(ht){if($)if(A.layerUpdates.size>0){const Ge=og(Ze.width,Ze.height,A.format,A.type);for(const ze of A.layerUpdates){const pt=Ze.data.subarray(ze*Ge/Ze.data.BYTES_PER_ELEMENT,(ze+1)*Ge/Ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ze,Ze.width,Ze.height,1,Xe,pt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ze.width,Ze.height,Te.depth,Xe,Ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,ct,Ze.width,Ze.height,Te.depth,0,Ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?$&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ze.width,Ze.height,Te.depth,Xe,rt,Ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,ct,Ze.width,Ze.height,Te.depth,0,Xe,rt,Ze.data)}else{ht&&Nt&&t.texStorage2D(s.TEXTURE_2D,ke,ct,vt[0].width,vt[0].height);for(let he=0,Se=vt.length;he<Se;he++)Ze=vt[he],A.format!==fi?Xe!==null?ht?$&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ze.width,Ze.height,Xe,Ze.data):t.compressedTexImage2D(s.TEXTURE_2D,he,ct,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?$&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ze.width,Ze.height,Xe,rt,Ze.data):t.texImage2D(s.TEXTURE_2D,he,ct,Ze.width,Ze.height,0,Xe,rt,Ze.data)}else if(A.isDataArrayTexture)if(ht){if(Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,ct,Te.width,Te.height,Te.depth),$)if(A.layerUpdates.size>0){const he=og(Te.width,Te.height,A.format,A.type);for(const Se of A.layerUpdates){const Ge=Te.data.subarray(Se*he/Te.data.BYTES_PER_ELEMENT,(Se+1)*he/Te.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Te.width,Te.height,1,Xe,rt,Ge)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Xe,rt,Te.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,Te.width,Te.height,Te.depth,0,Xe,rt,Te.data);else if(A.isData3DTexture)ht?(Nt&&t.texStorage3D(s.TEXTURE_3D,ke,ct,Te.width,Te.height,Te.depth),$&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Xe,rt,Te.data)):t.texImage3D(s.TEXTURE_3D,0,ct,Te.width,Te.height,Te.depth,0,Xe,rt,Te.data);else if(A.isFramebufferTexture){if(Nt)if(ht)t.texStorage2D(s.TEXTURE_2D,ke,ct,Te.width,Te.height);else{let he=Te.width,Se=Te.height;for(let Ge=0;Ge<ke;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,ct,he,Se,0,Xe,rt,null),he>>=1,Se>>=1}}else if(vt.length>0){if(ht&&Nt){const he=Ne(vt[0]);t.texStorage2D(s.TEXTURE_2D,ke,ct,he.width,he.height)}for(let he=0,Se=vt.length;he<Se;he++)Ze=vt[he],ht?$&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Xe,rt,Ze):t.texImage2D(s.TEXTURE_2D,he,ct,Xe,rt,Ze);A.generateMipmaps=!1}else if(ht){if(Nt){const he=Ne(Te);t.texStorage2D(s.TEXTURE_2D,ke,ct,he.width,he.height)}$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,rt,Te)}else t.texImage2D(s.TEXTURE_2D,0,ct,Xe,rt,Te);E(A)&&y(me),Ye.__version=_e.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function re(L,A,ee){if(A.image.length!==6)return;const me=ye(L,A),Me=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const _e=r.get(Me);if(Me.version!==_e.__version||me===!0){t.activeTexture(s.TEXTURE0+ee);const Ye=Pt.getPrimaries(Pt.workingColorSpace),Ie=A.colorSpace===Er?null:Pt.getPrimaries(A.colorSpace),He=A.colorSpace===Er||Ye===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const ft=A.isCompressedTexture||A.image[0].isCompressedTexture,Te=A.image[0]&&A.image[0].isDataTexture,Xe=[];for(let Se=0;Se<6;Se++)!ft&&!Te?Xe[Se]=b(A.image[Se],!0,o.maxCubemapSize):Xe[Se]=Te?A.image[Se].image:A.image[Se],Xe[Se]=Qe(A,Xe[Se]);const rt=Xe[0],ct=l.convert(A.format,A.colorSpace),Ze=l.convert(A.type),vt=F(A.internalFormat,ct,Ze,A.colorSpace),ht=A.isVideoTexture!==!0,Nt=_e.__version===void 0||me===!0,$=Me.dataReady;let ke=U(A,rt);W(s.TEXTURE_CUBE_MAP,A);let he;if(ft){ht&&Nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,vt,rt.width,rt.height);for(let Se=0;Se<6;Se++){he=Xe[Se].mipmaps;for(let Ge=0;Ge<he.length;Ge++){const ze=he[Ge];A.format!==fi?ct!==null?ht?$&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,ze.width,ze.height,ct,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,vt,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,ze.width,ze.height,ct,Ze,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,vt,ze.width,ze.height,0,ct,Ze,ze.data)}}}else{if(he=A.mipmaps,ht&&Nt){he.length>0&&ke++;const Se=Ne(Xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,vt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Te){ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Xe[Se].width,Xe[Se].height,ct,Ze,Xe[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,vt,Xe[Se].width,Xe[Se].height,0,ct,Ze,Xe[Se].data);for(let Ge=0;Ge<he.length;Ge++){const pt=he[Ge].image[Se].image;ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,pt.width,pt.height,ct,Ze,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,vt,pt.width,pt.height,0,ct,Ze,pt.data)}}else{ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ct,Ze,Xe[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,vt,ct,Ze,Xe[Se]);for(let Ge=0;Ge<he.length;Ge++){const ze=he[Ge];ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,ct,Ze,ze.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,vt,ct,Ze,ze.image[Se])}}}E(A)&&y(s.TEXTURE_CUBE_MAP),_e.__version=Me.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function fe(L,A,ee,me,Me,_e){const Ye=l.convert(ee.format,ee.colorSpace),Ie=l.convert(ee.type),He=F(ee.internalFormat,Ye,Ie,ee.colorSpace),ft=r.get(A),Te=r.get(ee);if(Te.__renderTarget=A,!ft.__hasExternalTextures){const Xe=Math.max(1,A.width>>_e),rt=Math.max(1,A.height>>_e);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,_e,He,Xe,rt,A.depth,0,Ye,Ie,null):t.texImage2D(Me,_e,He,Xe,rt,0,Ye,Ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Fe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Me,Te.__webglTexture,0,Ee(A)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Me,Te.__webglTexture,_e),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(L,A,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),A.depthBuffer){const me=A.depthTexture,Me=me&&me.isDepthTexture?me.type:null,_e=C(A.stencilBuffer,Me),Ye=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=Ee(A);Fe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,_e,A.width,A.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,_e,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_e,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,L)}else{const me=A.textures;for(let Me=0;Me<me.length;Me++){const _e=me[Me],Ye=l.convert(_e.format,_e.colorSpace),Ie=l.convert(_e.type),He=F(_e.internalFormat,Ye,Ie,_e.colorSpace),ft=Ee(A);ee&&Fe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,He,A.width,A.height):Fe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,He,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,He,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(A.depthTexture);me.__renderTarget=A,(!me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ue(A.depthTexture,0);const Me=me.__webglTexture,_e=Ee(A);if(A.depthTexture.format===Xs)Fe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(A.depthTexture.format===Qs)Fe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Le(L){const A=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",Me)};me.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=me}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");xe(A.__webglFramebuffer,L)}else if(ee){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=s.createRenderbuffer(),ie(A.__webglDepthbuffer[me],L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ie(A.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(L,A,ee){const me=r.get(L);A!==void 0&&fe(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Le(L)}function $e(L){const A=L.texture,ee=r.get(L),me=r.get(A);L.addEventListener("dispose",V);const Me=L.textures,_e=L.isWebGLCubeRenderTarget===!0,Ye=Me.length>1;if(Ye||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,u.memory.textures++),_e){ee.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer[Ie]=[];for(let He=0;He<A.mipmaps.length;He++)ee.__webglFramebuffer[Ie][He]=s.createFramebuffer()}else ee.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)ee.__webglFramebuffer[Ie]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Ie=0,He=Me.length;Ie<He;Ie++){const ft=r.get(Me[Ie]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Fe(L)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Me.length;Ie++){const He=Me[Ie];ee.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const ft=l.convert(He.format,He.colorSpace),Te=l.convert(He.type),Xe=F(He.internalFormat,ft,Te,He.colorSpace,L.isXRRenderTarget===!0),rt=Ee(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Xe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),W(s.TEXTURE_CUBE_MAP,A);for(let Ie=0;Ie<6;Ie++)if(A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)fe(ee.__webglFramebuffer[Ie][He],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,He);else fe(ee.__webglFramebuffer[Ie],L,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);E(A)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ie=0,He=Me.length;Ie<He;Ie++){const ft=Me[Ie],Te=r.get(ft);t.bindTexture(s.TEXTURE_2D,Te.__webglTexture),W(s.TEXTURE_2D,ft),fe(ee.__webglFramebuffer,L,ft,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),E(ft)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,me.__webglTexture),W(Ie,A),A.mipmaps&&A.mipmaps.length>0)for(let He=0;He<A.mipmaps.length;He++)fe(ee.__webglFramebuffer[He],L,A,s.COLOR_ATTACHMENT0,Ie,He);else fe(ee.__webglFramebuffer,L,A,s.COLOR_ATTACHMENT0,Ie,0);E(A)&&y(Ie),t.unbindTexture()}L.depthBuffer&&Le(L)}function ve(L){const A=L.textures;for(let ee=0,me=A.length;ee<me;ee++){const Me=A[ee];if(E(Me)){const _e=B(L),Ye=r.get(Me).__webglTexture;t.bindTexture(_e,Ye),y(_e),t.unbindTexture()}}}const ge=[],D=[];function Ue(L){if(L.samples>0){if(Fe(L)===!1){const A=L.textures,ee=L.width,me=L.height;let Me=s.COLOR_BUFFER_BIT;const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(L),Ie=A.length>1;if(Ie)for(let He=0;He<A.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let He=0;He<A.length;He++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[He]);const ft=r.get(A[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,ee,me,0,0,ee,me,Me,s.NEAREST),f===!0&&(ge.length=0,D.length=0,ge.push(s.COLOR_ATTACHMENT0+He),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ge.push(_e),D.push(_e),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let He=0;He<A.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[He]);const ft=r.get(A[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const A=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ee(L){return Math.min(o.maxSamples,L.samples)}function Fe(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ce(L){const A=u.render.frame;x.get(L)!==A&&(x.set(L,A),L.update())}function Qe(L,A){const ee=L.colorSpace,me=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==eo&&ee!==Er&&(Pt.getTransfer(ee)===Dt?(me!==fi||Me!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),A}function Ne(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=ue,this.setTexture2DArray=ae,this.setTexture3D=pe,this.setTextureCube=j,this.rebindTextures=Ae,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Fe}function wb(s,e){function t(r,o=Er){let l;const u=Pt.getTransfer(o);if(r===Xi)return s.UNSIGNED_BYTE;if(r===Rf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===nx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ex)return s.BYTE;if(r===tx)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===Af)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ia)return s.HALF_FLOAT;if(r===ix)return s.ALPHA;if(r===rx)return s.RGB;if(r===fi)return s.RGBA;if(r===sx)return s.LUMINANCE;if(r===ox)return s.LUMINANCE_ALPHA;if(r===Xs)return s.DEPTH_COMPONENT;if(r===Qs)return s.DEPTH_STENCIL;if(r===ax)return s.RED;if(r===Nf)return s.RED_INTEGER;if(r===lx)return s.RG;if(r===Df)return s.RG_INTEGER;if(r===Lf)return s.RGBA_INTEGER;if(r===Hl||r===Gl||r===jl||r===Wl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Hl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Hl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Gd||r===jd||r===Wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Hd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd||r===qd||r===$d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Xd||r===qd)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yd||r===Zd||r===Kd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===af)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Xl||r===uf||r===df)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Xl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cx||r===ff||r===hf||r===pf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Xl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const bb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tb=`
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

}`;class Cb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new kn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:bb,fragmentShader:Tb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new In(new nc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ab extends io{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,x=null,v=null,g=null,S=null,M=null;const b=new Cb,E=t.getContextAttributes();let y=null,B=null;const F=[],C=[],U=new Ve;let O=null;const V=new jn;V.viewport=new Lt;const H=new jn;H.viewport=new Lt;const P=[V,H],R=new ZS;let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=F[X];return re===void 0&&(re=new dd,F[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=F[X];return re===void 0&&(re=new dd,F[X]=re),re.getGripSpace()},this.getHand=function(X){let re=F[X];return re===void 0&&(re=new dd,F[X]=re),re.getHandSpace()};function Z(X){const re=C.indexOf(X.inputSource);if(re===-1)return;const fe=F[re];fe!==void 0&&(fe.update(X.inputSource,X.frame,p||u),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function oe(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",ue);for(let X=0;X<F.length;X++){const re=C[X];re!==null&&(C[X]=null,F[X].disconnect(re))}k=null,J=null,b.reset(),e.setRenderTarget(y),S=null,g=null,v=null,o=null,B=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",ue),E.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ie=null,xe=null;E.depth&&(xe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=E.stencil?Qs:Xs,ie=E.stencil?Js:es);const Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};v=new XRWebGLBinding(o,t),g=v.createProjectionLayer(Le),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),B=new ts(g.textureWidth,g.textureHeight,{format:fi,type:Xi,depthTexture:new bx(g.textureWidth,g.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),B=new ts(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}B.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),ye.setContext(o),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ue(X){for(let re=0;re<X.removed.length;re++){const fe=X.removed[re],ie=C.indexOf(fe);ie>=0&&(C[ie]=null,F[ie].disconnect(fe))}for(let re=0;re<X.added.length;re++){const fe=X.added[re];let ie=C.indexOf(fe);if(ie===-1){for(let Le=0;Le<F.length;Le++)if(Le>=C.length){C.push(fe),ie=Le;break}else if(C[Le]===null){C[Le]=fe,ie=Le;break}if(ie===-1)break}const xe=F[ie];xe&&xe.connect(fe)}}const ae=new Y,pe=new Y;function j(X,re,fe){ae.setFromMatrixPosition(re.matrixWorld),pe.setFromMatrixPosition(fe.matrixWorld);const ie=ae.distanceTo(pe),xe=re.projectionMatrix.elements,Le=fe.projectionMatrix.elements,Ae=xe[14]/(xe[10]-1),$e=xe[14]/(xe[10]+1),ve=(xe[9]+1)/xe[5],ge=(xe[9]-1)/xe[5],D=(xe[8]-1)/xe[0],Ue=(Le[8]+1)/Le[0],Ee=Ae*D,Fe=Ae*Ue,Ce=ie/(-D+Ue),Qe=Ce*-D;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qe),X.translateZ(Ce),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),xe[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ne=Ae+Ce,L=$e+Ce,A=Ee-Qe,ee=Fe+(ie-Qe),me=ve*$e/L*Ne,Me=ge*$e/L*Ne;X.projectionMatrix.makePerspective(A,ee,me,Me,Ne,L),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function de(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let re=X.near,fe=X.far;b.texture!==null&&(b.depthNear>0&&(re=b.depthNear),b.depthFar>0&&(fe=b.depthFar)),R.near=H.near=V.near=re,R.far=H.far=V.far=fe,(k!==R.near||J!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,J=R.far),V.layers.mask=X.layers.mask|2,H.layers.mask=X.layers.mask|4,R.layers.mask=V.layers.mask|H.layers.mask;const ie=X.parent,xe=R.cameras;de(R,ie);for(let Le=0;Le<xe.length;Le++)de(xe[Le],ie);xe.length===2?j(R,V,H):R.projectionMatrix.copy(V.projectionMatrix),I(X,R,ie)};function I(X,re,fe){fe===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=mf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(g===null&&S===null))return f},this.setFoveation=function(X){f=X,g!==null&&(g.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let w=null;function W(X,re){if(x=re.getViewerPose(p||u),M=re,x!==null){const fe=x.views;S!==null&&(e.setRenderTargetFramebuffer(B,S.framebuffer),e.setRenderTarget(B));let ie=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let Ae=0;Ae<fe.length;Ae++){const $e=fe[Ae];let ve=null;if(S!==null)ve=S.getViewport($e);else{const D=v.getViewSubImage(g,$e);ve=D.viewport,Ae===0&&(e.setRenderTargetTextures(B,D.colorTexture,g.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(B))}let ge=P[Ae];ge===void 0&&(ge=new jn,ge.layers.enable(Ae),ge.viewport=new Lt,P[Ae]=ge),ge.matrix.fromArray($e.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray($e.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ve.x,ve.y,ve.width,ve.height),Ae===0&&(R.matrix.copy(ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push(ge)}const xe=o.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&v){const Ae=v.getDepthInformation(fe[0]);Ae&&Ae.isValid&&Ae.texture&&b.init(e,Ae,o.renderState)}}for(let fe=0;fe<F.length;fe++){const ie=C[fe],xe=F[fe];ie!==null&&xe!==void 0&&xe.update(ie,re,p||u)}w&&w(X,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),M=null}const ye=new Ux;ye.setAnimationLoop(W),this.setAnimationLoop=function(X){w=X},this.dispose=function(){}}}const Xr=new Mi,Rb=new Bt;function Pb(s,e){function t(E,y){E.matrixAutoUpdate===!0&&E.updateMatrix(),y.value.copy(E.matrix)}function r(E,y){y.color.getRGB(E.fogColor.value,Sx(s)),y.isFog?(E.fogNear.value=y.near,E.fogFar.value=y.far):y.isFogExp2&&(E.fogDensity.value=y.density)}function o(E,y,B,F,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(E,y):y.isMeshToonMaterial?(l(E,y),v(E,y)):y.isMeshPhongMaterial?(l(E,y),x(E,y)):y.isMeshStandardMaterial?(l(E,y),g(E,y),y.isMeshPhysicalMaterial&&S(E,y,C)):y.isMeshMatcapMaterial?(l(E,y),M(E,y)):y.isMeshDepthMaterial?l(E,y):y.isMeshDistanceMaterial?(l(E,y),b(E,y)):y.isMeshNormalMaterial?l(E,y):y.isLineBasicMaterial?(u(E,y),y.isLineDashedMaterial&&d(E,y)):y.isPointsMaterial?f(E,y,B,F):y.isSpriteMaterial?p(E,y):y.isShadowMaterial?(E.color.value.copy(y.color),E.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(E,y){E.opacity.value=y.opacity,y.color&&E.diffuse.value.copy(y.color),y.emissive&&E.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(E.map.value=y.map,t(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,t(y.alphaMap,E.alphaMapTransform)),y.bumpMap&&(E.bumpMap.value=y.bumpMap,t(y.bumpMap,E.bumpMapTransform),E.bumpScale.value=y.bumpScale,y.side===Un&&(E.bumpScale.value*=-1)),y.normalMap&&(E.normalMap.value=y.normalMap,t(y.normalMap,E.normalMapTransform),E.normalScale.value.copy(y.normalScale),y.side===Un&&E.normalScale.value.negate()),y.displacementMap&&(E.displacementMap.value=y.displacementMap,t(y.displacementMap,E.displacementMapTransform),E.displacementScale.value=y.displacementScale,E.displacementBias.value=y.displacementBias),y.emissiveMap&&(E.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,E.emissiveMapTransform)),y.specularMap&&(E.specularMap.value=y.specularMap,t(y.specularMap,E.specularMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest);const B=e.get(y),F=B.envMap,C=B.envMapRotation;F&&(E.envMap.value=F,Xr.copy(C),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),E.envMapRotation.value.setFromMatrix4(Rb.makeRotationFromEuler(Xr)),E.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=y.reflectivity,E.ior.value=y.ior,E.refractionRatio.value=y.refractionRatio),y.lightMap&&(E.lightMap.value=y.lightMap,E.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,E.lightMapTransform)),y.aoMap&&(E.aoMap.value=y.aoMap,E.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,E.aoMapTransform))}function u(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,y.map&&(E.map.value=y.map,t(y.map,E.mapTransform))}function d(E,y){E.dashSize.value=y.dashSize,E.totalSize.value=y.dashSize+y.gapSize,E.scale.value=y.scale}function f(E,y,B,F){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.size.value=y.size*B,E.scale.value=F*.5,y.map&&(E.map.value=y.map,t(y.map,E.uvTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,t(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function p(E,y){E.diffuse.value.copy(y.color),E.opacity.value=y.opacity,E.rotation.value=y.rotation,y.map&&(E.map.value=y.map,t(y.map,E.mapTransform)),y.alphaMap&&(E.alphaMap.value=y.alphaMap,t(y.alphaMap,E.alphaMapTransform)),y.alphaTest>0&&(E.alphaTest.value=y.alphaTest)}function x(E,y){E.specular.value.copy(y.specular),E.shininess.value=Math.max(y.shininess,1e-4)}function v(E,y){y.gradientMap&&(E.gradientMap.value=y.gradientMap)}function g(E,y){E.metalness.value=y.metalness,y.metalnessMap&&(E.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,E.metalnessMapTransform)),E.roughness.value=y.roughness,y.roughnessMap&&(E.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,E.roughnessMapTransform)),y.envMap&&(E.envMapIntensity.value=y.envMapIntensity)}function S(E,y,B){E.ior.value=y.ior,y.sheen>0&&(E.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),E.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(E.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,E.sheenColorMapTransform)),y.sheenRoughnessMap&&(E.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,E.sheenRoughnessMapTransform))),y.clearcoat>0&&(E.clearcoat.value=y.clearcoat,E.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(E.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,E.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(E.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Un&&E.clearcoatNormalScale.value.negate())),y.dispersion>0&&(E.dispersion.value=y.dispersion),y.iridescence>0&&(E.iridescence.value=y.iridescence,E.iridescenceIOR.value=y.iridescenceIOR,E.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(E.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,E.iridescenceMapTransform)),y.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),y.transmission>0&&(E.transmission.value=y.transmission,E.transmissionSamplerMap.value=B.texture,E.transmissionSamplerSize.value.set(B.width,B.height),y.transmissionMap&&(E.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,E.transmissionMapTransform)),E.thickness.value=y.thickness,y.thicknessMap&&(E.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=y.attenuationDistance,E.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(E.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(E.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=y.specularIntensity,E.specularColor.value.copy(y.specularColor),y.specularColorMap&&(E.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,E.specularColorMapTransform)),y.specularIntensityMap&&(E.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,E.specularIntensityMapTransform))}function M(E,y){y.matcap&&(E.matcap.value=y.matcap)}function b(E,y){const B=e.get(y).light;E.referencePosition.value.setFromMatrixPosition(B.matrixWorld),E.nearDistance.value=B.shadow.camera.near,E.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Nb(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(B,F){const C=F.program;r.uniformBlockBinding(B,C)}function p(B,F){let C=o[B.id];C===void 0&&(M(B),C=x(B),o[B.id]=C,B.addEventListener("dispose",E));const U=F.program;r.updateUBOMapping(B,U);const O=e.render.frame;l[B.id]!==O&&(g(B),l[B.id]=O)}function x(B){const F=v();B.__bindingPointIndex=F;const C=s.createBuffer(),U=B.__size,O=B.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,U,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,C),C}function v(){for(let B=0;B<d;B++)if(u.indexOf(B)===-1)return u.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(B){const F=o[B.id],C=B.uniforms,U=B.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let O=0,V=C.length;O<V;O++){const H=Array.isArray(C[O])?C[O]:[C[O]];for(let P=0,R=H.length;P<R;P++){const k=H[P];if(S(k,O,P,U)===!0){const J=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let oe=0;for(let ue=0;ue<Z.length;ue++){const ae=Z[ue],pe=b(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,J+oe,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,oe),oe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(B,F,C,U){const O=B.value,V=F+"_"+C;if(U[V]===void 0)return typeof O=="number"||typeof O=="boolean"?U[V]=O:U[V]=O.clone(),!0;{const H=U[V];if(typeof O=="number"||typeof O=="boolean"){if(H!==O)return U[V]=O,!0}else if(H.equals(O)===!1)return H.copy(O),!0}return!1}function M(B){const F=B.uniforms;let C=0;const U=16;for(let V=0,H=F.length;V<H;V++){const P=Array.isArray(F[V])?F[V]:[F[V]];for(let R=0,k=P.length;R<k;R++){const J=P[R],Z=Array.isArray(J.value)?J.value:[J.value];for(let oe=0,ue=Z.length;oe<ue;oe++){const ae=Z[oe],pe=b(ae),j=C%U,de=j%pe.boundary,I=j+de;C+=de,I!==0&&U-I<pe.storage&&(C+=U-I),J.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=pe.storage}}}const O=C%U;return O>0&&(C+=U-O),B.__size=C,B.__cache={},this}function b(B){const F={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(F.boundary=4,F.storage=4):B.isVector2?(F.boundary=8,F.storage=8):B.isVector3||B.isColor?(F.boundary=16,F.storage=12):B.isVector4?(F.boundary=16,F.storage=16):B.isMatrix3?(F.boundary=48,F.storage=48):B.isMatrix4?(F.boundary=64,F.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),F}function E(B){const F=B.target;F.removeEventListener("dispose",E);const C=u.indexOf(F.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function y(){for(const B in o)s.deleteBuffer(o[B]);u=[],o={},l={}}return{bind:f,update:p,dispose:y}}class Db{constructor(e={}){const{canvas:t=Fy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),b=new Int32Array(4);let E=null,y=null;const B=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=wr,this.toneMappingExposure=1;const C=this;let U=!1,O=0,V=0,H=null,P=-1,R=null;const k=new Lt,J=new Lt;let Z=null;const oe=new At(0);let ue=0,ae=t.width,pe=t.height,j=1,de=null,I=null;const w=new Lt(0,0,ae,pe),W=new Lt(0,0,ae,pe);let ye=!1;const X=new Ff;let re=!1,fe=!1;this.transmissionResolutionScale=1;const ie=new Bt,xe=new Bt,Le=new Y,Ae=new Lt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function ge(){return H===null?j:1}let D=r;function Ue(N,K){return t.getContext(N,K)}try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cf}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",ze,!1),D===null){const K="webgl2";if(D=Ue(K,N),D===null)throw Ue(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ee,Fe,Ce,Qe,Ne,L,A,ee,me,Me,_e,Ye,Ie,He,ft,Te,Xe,rt,ct,Ze,vt,ht,Nt,$;function ke(){Ee=new HM(D),Ee.init(),ht=new wb(D,Ee),Fe=new UM(D,Ee,e,ht),Ce=new Eb(D,Ee),Fe.reverseDepthBuffer&&g&&Ce.buffers.depth.setReversed(!0),Qe=new WM(D),Ne=new cb,L=new Mb(D,Ee,Ce,Ne,Fe,ht,Qe),A=new OM(C),ee=new VM(C),me=new JS(D),Nt=new FM(D,me),Me=new GM(D,me,Qe,Nt),_e=new qM(D,Me,me,Qe),ct=new XM(D,Fe,L),Te=new kM(Ne),Ye=new lb(C,A,ee,Ee,Fe,Nt,Te),Ie=new Pb(C,Ne),He=new db,ft=new xb(Ee),rt=new LM(C,A,ee,Ce,_e,S,f),Xe=new yb(C,_e,Fe),$=new Nb(D,Qe,Fe,Ce),Ze=new IM(D,Ee,Qe),vt=new jM(D,Ee,Qe),Qe.programs=Ye.programs,C.capabilities=Fe,C.extensions=Ee,C.properties=Ne,C.renderLists=He,C.shadowMap=Xe,C.state=Ce,C.info=Qe}ke();const he=new Ab(C,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const N=Ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(ae,pe,!1))},this.getSize=function(N){return N.set(ae,pe)},this.setSize=function(N,K,le=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=N,pe=K,t.width=Math.floor(N*j),t.height=Math.floor(K*j),le===!0&&(t.style.width=N+"px",t.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(ae*j,pe*j).floor()},this.setDrawingBufferSize=function(N,K,le){ae=N,pe=K,j=le,t.width=Math.floor(N*le),t.height=Math.floor(K*le),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(w)},this.setViewport=function(N,K,le,ne){N.isVector4?w.set(N.x,N.y,N.z,N.w):w.set(N,K,le,ne),Ce.viewport(k.copy(w).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(W)},this.setScissor=function(N,K,le,ne){N.isVector4?W.set(N.x,N.y,N.z,N.w):W.set(N,K,le,ne),Ce.scissor(J.copy(W).multiplyScalar(j).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(N){Ce.setScissorTest(ye=N)},this.setOpaqueSort=function(N){de=N},this.setTransparentSort=function(N){I=N},this.getClearColor=function(N){return N.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(N=!0,K=!0,le=!0){let ne=0;if(N){let Q=!1;if(H!==null){const Pe=H.texture.format;Q=Pe===Lf||Pe===Df||Pe===Nf}if(Q){const Pe=H.texture.type,Oe=Pe===Xi||Pe===es||Pe===Jo||Pe===Js||Pe===Rf||Pe===Pf,je=rt.getClearColor(),Ke=rt.getClearAlpha(),ut=je.r,lt=je.g,et=je.b;Oe?(M[0]=ut,M[1]=lt,M[2]=et,M[3]=Ke,D.clearBufferuiv(D.COLOR,0,M)):(b[0]=ut,b[1]=lt,b[2]=et,b[3]=Ke,D.clearBufferiv(D.COLOR,0,b))}else ne|=D.COLOR_BUFFER_BIT}K&&(ne|=D.DEPTH_BUFFER_BIT),le&&(ne|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),rt.dispose(),He.dispose(),ft.dispose(),Ne.dispose(),A.dispose(),ee.dispose(),_e.dispose(),Nt.dispose(),$.dispose(),Ye.dispose(),he.dispose(),he.removeEventListener("sessionstart",is),he.removeEventListener("sessionend",qi),bi.stop()};function Se(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const N=Qe.autoReset,K=Xe.enabled,le=Xe.autoUpdate,ne=Xe.needsUpdate,Q=Xe.type;ke(),Qe.autoReset=N,Xe.enabled=K,Xe.autoUpdate=le,Xe.needsUpdate=ne,Xe.type=Q}function ze(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function pt(N){const K=N.target;K.removeEventListener("dispose",pt),Ut(K)}function Ut(N){Kt(N),Ne.remove(N)}function Kt(N){const K=Ne.get(N).programs;K!==void 0&&(K.forEach(function(le){Ye.releaseProgram(le)}),N.isShaderMaterial&&Ye.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,le,ne,Q,Pe){K===null&&(K=$e);const Oe=Q.isMesh&&Q.matrixWorld.determinant()<0,je=ca(N,K,le,ne,Q);Ce.setMaterial(ne,Oe);let Ke=le.index,ut=1;if(ne.wireframe===!0){if(Ke=Me.getWireframeAttribute(le),Ke===void 0)return;ut=2}const lt=le.drawRange,et=le.attributes.position;let Mt=lt.start*ut,mt=(lt.start+lt.count)*ut;Pe!==null&&(Mt=Math.max(Mt,Pe.start*ut),mt=Math.min(mt,(Pe.start+Pe.count)*ut)),Ke!==null?(Mt=Math.max(Mt,0),mt=Math.min(mt,Ke.count)):et!=null&&(Mt=Math.max(Mt,0),mt=Math.min(mt,et.count));const Wt=mt-Mt;if(Wt<0||Wt===1/0)return;Nt.setup(Q,ne,je,le,Ke);let zt,wt=Ze;if(Ke!==null&&(zt=me.get(Ke),wt=vt,wt.setIndex(zt)),Q.isMesh)ne.wireframe===!0?(Ce.setLineWidth(ne.wireframeLinewidth*ge()),wt.setMode(D.LINES)):wt.setMode(D.TRIANGLES);else if(Q.isLine){let it=ne.linewidth;it===void 0&&(it=1),Ce.setLineWidth(it*ge()),Q.isLineSegments?wt.setMode(D.LINES):Q.isLineLoop?wt.setMode(D.LINE_LOOP):wt.setMode(D.LINE_STRIP)}else Q.isPoints?wt.setMode(D.POINTS):Q.isSprite&&wt.setMode(D.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)wt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const it=Q._multiDrawStarts,Xt=Q._multiDrawCounts,Et=Q._multiDrawCount,hn=Ke?me.get(Ke).bytesPerElement:1,Yi=Ne.get(ne).currentProgram.getUniforms();for(let En=0;En<Et;En++)Yi.setValue(D,"_gl_DrawID",En),wt.render(it[En]/hn,Xt[En])}else if(Q.isInstancedMesh)wt.renderInstances(Mt,Wt,Q.count);else if(le.isInstancedBufferGeometry){const it=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Xt=Math.min(le.instanceCount,it);wt.renderInstances(Mt,Wt,Xt)}else wt.render(Mt,Wt)};function bt(N,K,le){N.transparent===!0&&N.side===Hi&&N.forceSinglePass===!1?(N.side=Un,N.needsUpdate=!0,rs(N,K,le),N.side=br,N.needsUpdate=!0,rs(N,K,le),N.side=Hi):rs(N,K,le)}this.compile=function(N,K,le=null){le===null&&(le=N),y=ft.get(le),y.init(K),F.push(y),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),N!==le&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();const ne=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){const je=Pe[Oe];bt(je,le,Q),ne.add(je)}else bt(Pe,le,Q),ne.add(Pe)}),F.pop(),y=null,ne},this.compileAsync=function(N,K,le=null){const ne=this.compile(N,K,le);return new Promise(Q=>{function Pe(){if(ne.forEach(function(Oe){Ne.get(Oe).currentProgram.isReady()&&ne.delete(Oe)}),ne.size===0){Q(N);return}setTimeout(Pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Cn=null;function Sn(N){Cn&&Cn(N)}function is(){bi.stop()}function qi(){bi.start()}const bi=new Ux;bi.setAnimationLoop(Sn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(N){Cn=N,he.setAnimationLoop(N),N===null?bi.stop():bi.start()},he.addEventListener("sessionstart",is),he.addEventListener("sessionend",qi),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(K),K=he.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,K,H),y=ft.get(N,F.length),y.init(K),F.push(y),xe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,re=Te.init(this.clippingPlanes,fe),E=He.get(N,B.length),E.init(),B.push(E),he.enabled===!0&&he.isPresenting===!0){const Pe=C.xr.getDepthSensingMesh();Pe!==null&&Ti(Pe,K,-1/0,C.sortObjects)}Ti(N,K,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(de,I),ve=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ve&&rt.addToRenderList(E,N),this.info.render.frame++,re===!0&&Te.beginShadows();const le=y.state.shadowsArray;Xe.render(le,N,K),re===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=E.opaque,Q=E.transmissive;if(y.setupLights(),K.isArrayCamera){const Pe=K.cameras;if(Q.length>0)for(let Oe=0,je=Pe.length;Oe<je;Oe++){const Ke=Pe[Oe];Ar(ne,Q,N,Ke)}ve&&rt.render(N);for(let Oe=0,je=Pe.length;Oe<je;Oe++){const Ke=Pe[Oe];Cr(E,N,Ke,Ke.viewport)}}else Q.length>0&&Ar(ne,Q,N,K),ve&&rt.render(N),Cr(E,N,K);H!==null&&V===0&&(L.updateMultisampleRenderTarget(H),L.updateRenderTargetMipmap(H)),N.isScene===!0&&N.onAfterRender(C,N,K),Nt.resetDefaultState(),P=-1,R=null,F.pop(),F.length>0?(y=F[F.length-1],re===!0&&Te.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,B.pop(),B.length>0?E=B[B.length-1]:E=null};function Ti(N,K,le,ne){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)y.pushLight(N),N.castShadow&&y.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||X.intersectsSprite(N)){ne&&Ae.setFromMatrixPosition(N.matrixWorld).applyMatrix4(xe);const Oe=_e.update(N),je=N.material;je.visible&&E.push(N,Oe,je,le,Ae.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||X.intersectsObject(N))){const Oe=_e.update(N),je=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ae.copy(N.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ae.copy(Oe.boundingSphere.center)),Ae.applyMatrix4(N.matrixWorld).applyMatrix4(xe)),Array.isArray(je)){const Ke=Oe.groups;for(let ut=0,lt=Ke.length;ut<lt;ut++){const et=Ke[ut],Mt=je[et.materialIndex];Mt&&Mt.visible&&E.push(N,Oe,Mt,le,Ae.z,et)}}else je.visible&&E.push(N,Oe,je,le,Ae.z,null)}}const Pe=N.children;for(let Oe=0,je=Pe.length;Oe<je;Oe++)Ti(Pe[Oe],K,le,ne)}function Cr(N,K,le,ne){const Q=N.opaque,Pe=N.transmissive,Oe=N.transparent;y.setupLightsView(le),re===!0&&Te.setGlobalState(C.clippingPlanes,le),ne&&Ce.viewport(k.copy(ne)),Q.length>0&&$i(Q,K,le),Pe.length>0&&$i(Pe,K,le),Oe.length>0&&$i(Oe,K,le),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ar(N,K,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ne.id]===void 0&&(y.state.transmissionRenderTarget[ne.id]=new ts(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?ia:Xi,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Pe=y.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||k;Pe.setSize(Oe.z*C.transmissionResolutionScale,Oe.w*C.transmissionResolutionScale);const je=C.getRenderTarget();C.setRenderTarget(Pe),C.getClearColor(oe),ue=C.getClearAlpha(),ue<1&&C.setClearColor(16777215,.5),C.clear(),ve&&rt.render(le);const Ke=C.toneMapping;C.toneMapping=wr;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),y.setupLightsView(ne),re===!0&&Te.setGlobalState(C.clippingPlanes,ne),$i(N,le,ne),L.updateMultisampleRenderTarget(Pe),L.updateRenderTargetMipmap(Pe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let et=0,Mt=K.length;et<Mt;et++){const mt=K[et],Wt=mt.object,zt=mt.geometry,wt=mt.material,it=mt.group;if(wt.side===Hi&&Wt.layers.test(ne.layers)){const Xt=wt.side;wt.side=Un,wt.needsUpdate=!0,aa(Wt,le,ne,zt,wt,it),wt.side=Xt,wt.needsUpdate=!0,lt=!0}}lt===!0&&(L.updateMultisampleRenderTarget(Pe),L.updateRenderTargetMipmap(Pe))}C.setRenderTarget(je),C.setClearColor(oe,ue),ut!==void 0&&(ne.viewport=ut),C.toneMapping=Ke}function $i(N,K,le){const ne=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Pe=N.length;Q<Pe;Q++){const Oe=N[Q],je=Oe.object,Ke=Oe.geometry,ut=ne===null?Oe.material:ne,lt=Oe.group;je.layers.test(le.layers)&&aa(je,K,le,Ke,ut,lt)}}function aa(N,K,le,ne,Q,Pe){N.onBeforeRender(C,K,le,ne,Q,Pe),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(C,K,le,ne,N,Pe),Q.transparent===!0&&Q.side===Hi&&Q.forceSinglePass===!1?(Q.side=Un,Q.needsUpdate=!0,C.renderBufferDirect(le,K,ne,Q,N,Pe),Q.side=br,Q.needsUpdate=!0,C.renderBufferDirect(le,K,ne,Q,N,Pe),Q.side=Hi):C.renderBufferDirect(le,K,ne,Q,N,Pe),N.onAfterRender(C,K,le,ne,Q,Pe)}function rs(N,K,le){K.isScene!==!0&&(K=$e);const ne=Ne.get(N),Q=y.state.lights,Pe=y.state.shadowsArray,Oe=Q.state.version,je=Ye.getParameters(N,Q.state,Pe,K,le),Ke=Ye.getProgramCacheKey(je);let ut=ne.programs;ne.environment=N.isMeshStandardMaterial?K.environment:null,ne.fog=K.fog,ne.envMap=(N.isMeshStandardMaterial?ee:A).get(N.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,ut===void 0&&(N.addEventListener("dispose",pt),ut=new Map,ne.programs=ut);let lt=ut.get(Ke);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Oe)return mi(N,je),lt}else je.uniforms=Ye.getUniforms(N),N.onBeforeCompile(je,C),lt=Ye.acquireProgram(je,Ke),ut.set(Ke,lt),ne.uniforms=je.uniforms;const et=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(et.clippingPlanes=Te.uniform),mi(N,je),ne.needsLights=rc(N),ne.lightsStateVersion=Oe,ne.needsLights&&(et.ambientLightColor.value=Q.state.ambient,et.lightProbe.value=Q.state.probe,et.directionalLights.value=Q.state.directional,et.directionalLightShadows.value=Q.state.directionalShadow,et.spotLights.value=Q.state.spot,et.spotLightShadows.value=Q.state.spotShadow,et.rectAreaLights.value=Q.state.rectArea,et.ltc_1.value=Q.state.rectAreaLTC1,et.ltc_2.value=Q.state.rectAreaLTC2,et.pointLights.value=Q.state.point,et.pointLightShadows.value=Q.state.pointShadow,et.hemisphereLights.value=Q.state.hemi,et.directionalShadowMap.value=Q.state.directionalShadowMap,et.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,et.spotShadowMap.value=Q.state.spotShadowMap,et.spotLightMatrix.value=Q.state.spotLightMatrix,et.spotLightMap.value=Q.state.spotLightMap,et.pointShadowMap.value=Q.state.pointShadowMap,et.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=lt,ne.uniformsList=null,lt}function la(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=ql.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function mi(N,K){const le=Ne.get(N);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function ca(N,K,le,ne,Q){K.isScene!==!0&&(K=$e),L.resetTextureUnits();const Pe=K.fog,Oe=ne.isMeshStandardMaterial?K.environment:null,je=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:eo,Ke=(ne.isMeshStandardMaterial?ee:A).get(ne.envMap||Oe),ut=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,lt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!le.morphAttributes.position,Mt=!!le.morphAttributes.normal,mt=!!le.morphAttributes.color;let Wt=wr;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,wt=zt!==void 0?zt.length:0,it=Ne.get(ne),Xt=y.state.lights;if(re===!0&&(fe===!0||N!==R)){const cn=N===R&&ne.id===P;Te.setState(ne,N,cn)}let Et=!1;ne.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Xt.state.version||it.outputColorSpace!==je||Q.isBatchedMesh&&it.batching===!1||!Q.isBatchedMesh&&it.batching===!0||Q.isBatchedMesh&&it.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&it.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&it.instancing===!1||!Q.isInstancedMesh&&it.instancing===!0||Q.isSkinnedMesh&&it.skinning===!1||!Q.isSkinnedMesh&&it.skinning===!0||Q.isInstancedMesh&&it.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&it.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&it.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&it.instancingMorph===!1&&Q.morphTexture!==null||it.envMap!==Ke||ne.fog===!0&&it.fog!==Pe||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Te.numPlanes||it.numIntersection!==Te.numIntersection)||it.vertexAlphas!==ut||it.vertexTangents!==lt||it.morphTargets!==et||it.morphNormals!==Mt||it.morphColors!==mt||it.toneMapping!==Wt||it.morphTargetsCount!==wt)&&(Et=!0):(Et=!0,it.__version=ne.version);let hn=it.currentProgram;Et===!0&&(hn=rs(ne,K,Q));let Yi=!1,En=!1,Ci=!1;const Ft=hn.getUniforms(),pn=it.uniforms;if(Ce.useProgram(hn.program)&&(Yi=!0,En=!0,Ci=!0),ne.id!==P&&(P=ne.id,En=!0),Yi||R!==N){Ce.buffers.depth.getReversed()?(ie.copy(N.projectionMatrix),Uy(ie),ky(ie),Ft.setValue(D,"projectionMatrix",ie)):Ft.setValue(D,"projectionMatrix",N.projectionMatrix),Ft.setValue(D,"viewMatrix",N.matrixWorldInverse);const rn=Ft.map.cameraPosition;rn!==void 0&&rn.setValue(D,Le.setFromMatrixPosition(N.matrixWorld)),Fe.logarithmicDepthBuffer&&Ft.setValue(D,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(D,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,En=!0,Ci=!0)}if(Q.isSkinnedMesh){Ft.setOptional(D,Q,"bindMatrix"),Ft.setOptional(D,Q,"bindMatrixInverse");const cn=Q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ft.setValue(D,"boneTexture",cn.boneTexture,L))}Q.isBatchedMesh&&(Ft.setOptional(D,Q,"batchingTexture"),Ft.setValue(D,"batchingTexture",Q._matricesTexture,L),Ft.setOptional(D,Q,"batchingIdTexture"),Ft.setValue(D,"batchingIdTexture",Q._indirectTexture,L),Ft.setOptional(D,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(D,"batchingColorTexture",Q._colorsTexture,L));const nn=le.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ct.update(Q,le,hn),(En||it.receiveShadow!==Q.receiveShadow)&&(it.receiveShadow=Q.receiveShadow,Ft.setValue(D,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(pn.envMap.value=Ke,pn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&K.environment!==null&&(pn.envMapIntensity.value=K.environmentIntensity),En&&(Ft.setValue(D,"toneMappingExposure",C.toneMappingExposure),it.needsLights&&ua(pn,Ci),Pe&&ne.fog===!0&&Ie.refreshFogUniforms(pn,Pe),Ie.refreshMaterialUniforms(pn,ne,j,pe,y.state.transmissionRenderTarget[N.id]),ql.upload(D,la(it),pn,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ql.upload(D,la(it),pn,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(D,"center",Q.center),Ft.setValue(D,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(D,"normalMatrix",Q.normalMatrix),Ft.setValue(D,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const cn=ne.uniformsGroups;for(let rn=0,Tt=cn.length;rn<Tt;rn++){const gi=cn[rn];$.update(gi,hn),$.bind(gi,hn)}}return hn}function ua(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function rc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,K,le){Ne.get(N.texture).__webglTexture=K,Ne.get(N.depthTexture).__webglTexture=le;const ne=Ne.get(N);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=le===void 0,ne.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,K){const le=Ne.get(N);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const da=D.createFramebuffer();this.setRenderTarget=function(N,K=0,le=0){H=N,O=K,V=le;let ne=!0,Q=null,Pe=!1,Oe=!1;if(N){const Ke=Ne.get(N);if(Ke.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(D.FRAMEBUFFER,null),ne=!1;else if(Ke.__webglFramebuffer===void 0)L.setupRenderTarget(N);else if(Ke.__hasExternalTextures)L.rebindTextures(N,Ne.get(N.texture).__webglTexture,Ne.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const et=N.depthTexture;if(Ke.__boundDepthTexture!==et){if(et!==null&&Ne.has(et)&&(N.width!==et.image.width||N.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(N)}}const ut=N.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Oe=!0);const lt=Ne.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?Q=lt[K][le]:Q=lt[K],Pe=!0):N.samples>0&&L.useMultisampledRTT(N)===!1?Q=Ne.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?Q=lt[le]:Q=lt,k.copy(N.viewport),J.copy(N.scissor),Z=N.scissorTest}else k.copy(w).multiplyScalar(j).floor(),J.copy(W).multiplyScalar(j).floor(),Z=ye;if(le!==0&&(Q=da),Ce.bindFramebuffer(D.FRAMEBUFFER,Q)&&ne&&Ce.drawBuffers(N,Q),Ce.viewport(k),Ce.scissor(J),Ce.setScissorTest(Z),Pe){const Ke=Ne.get(N.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ke.__webglTexture,le)}else if(Oe){const Ke=Ne.get(N.texture),ut=K;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,le,ut)}else if(N!==null&&le!==0){const Ke=Ne.get(N.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,le)}P=-1},this.readRenderTargetPixels=function(N,K,le,ne,Q,Pe,Oe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ne.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(je=je[Oe]),je){Ce.bindFramebuffer(D.FRAMEBUFFER,je);try{const Ke=N.texture,ut=Ke.format,lt=Ke.type;if(!Fe.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-ne&&le>=0&&le<=N.height-Q&&D.readPixels(K,le,ne,Q,ht.convert(ut),ht.convert(lt),Pe)}finally{const Ke=H!==null?Ne.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(N,K,le,ne,Q,Pe,Oe){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ne.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(je=je[Oe]),je){const Ke=N.texture,ut=Ke.format,lt=Ke.type;if(!Fe.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=N.width-ne&&le>=0&&le<=N.height-Q){Ce.bindFramebuffer(D.FRAMEBUFFER,je);const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,Pe.byteLength,D.STREAM_READ),D.readPixels(K,le,ne,Q,ht.convert(ut),ht.convert(lt),0);const Mt=H!==null?Ne.get(H).__webglFramebuffer:null;Ce.bindFramebuffer(D.FRAMEBUFFER,Mt);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Iy(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Pe),D.deleteBuffer(et),D.deleteSync(mt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,K=null,le=0){N.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,N=arguments[1]);const ne=Math.pow(2,-le),Q=Math.floor(N.image.width*ne),Pe=Math.floor(N.image.height*ne),Oe=K!==null?K.x:0,je=K!==null?K.y:0;L.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,le,0,0,Oe,je,Q,Pe),Ce.unbindTexture()};const fa=D.createFramebuffer(),ha=D.createFramebuffer();this.copyTextureToTexture=function(N,K,le=null,ne=null,Q=0,Pe=null){N.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,N=arguments[1],K=arguments[2],Pe=arguments[3]||0,le=null),Pe===null&&(Q!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Q,Q=0):Pe=0);let Oe,je,Ke,ut,lt,et,Mt,mt,Wt;const zt=N.isCompressedTexture?N.mipmaps[Pe]:N.image;if(le!==null)Oe=le.max.x-le.min.x,je=le.max.y-le.min.y,Ke=le.isBox3?le.max.z-le.min.z:1,ut=le.min.x,lt=le.min.y,et=le.isBox3?le.min.z:0;else{const nn=Math.pow(2,-Q);Oe=Math.floor(zt.width*nn),je=Math.floor(zt.height*nn),N.isDataArrayTexture?Ke=zt.depth:N.isData3DTexture?Ke=Math.floor(zt.depth*nn):Ke=1,ut=0,lt=0,et=0}ne!==null?(Mt=ne.x,mt=ne.y,Wt=ne.z):(Mt=0,mt=0,Wt=0);const wt=ht.convert(K.format),it=ht.convert(K.type);let Xt;K.isData3DTexture?(L.setTexture3D(K,0),Xt=D.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),Xt=D.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),Xt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yi=D.getParameter(D.UNPACK_SKIP_PIXELS),En=D.getParameter(D.UNPACK_SKIP_ROWS),Ci=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,et);const Ft=N.isDataArrayTexture||N.isData3DTexture,pn=K.isDataArrayTexture||K.isData3DTexture;if(N.isDepthTexture){const nn=Ne.get(N),cn=Ne.get(K),rn=Ne.get(nn.__renderTarget),Tt=Ne.get(cn.__renderTarget);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let gi=0;gi<Ke;gi++)Ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(N).__webglTexture,Q,et+gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(K).__webglTexture,Pe,Wt+gi)),D.blitFramebuffer(ut,lt,Oe,je,Mt,mt,Oe,je,D.DEPTH_BUFFER_BIT,D.NEAREST);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Q!==0||N.isRenderTargetTexture||Ne.has(N)){const nn=Ne.get(N),cn=Ne.get(K);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,fa),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,ha);for(let rn=0;rn<Ke;rn++)Ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,Q,et+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,Q),pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cn.__webglTexture,Pe,Wt+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cn.__webglTexture,Pe),Q!==0?D.blitFramebuffer(ut,lt,Oe,je,Mt,mt,Oe,je,D.COLOR_BUFFER_BIT,D.NEAREST):pn?D.copyTexSubImage3D(Xt,Pe,Mt,mt,Wt+rn,ut,lt,Oe,je):D.copyTexSubImage2D(Xt,Pe,Mt,mt,ut,lt,Oe,je);Ce.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pn?N.isDataTexture||N.isData3DTexture?D.texSubImage3D(Xt,Pe,Mt,mt,Wt,Oe,je,Ke,wt,it,zt.data):K.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,Pe,Mt,mt,Wt,Oe,je,Ke,wt,zt.data):D.texSubImage3D(Xt,Pe,Mt,mt,Wt,Oe,je,Ke,wt,it,zt):N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Pe,Mt,mt,Oe,je,wt,it,zt.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Pe,Mt,mt,zt.width,zt.height,wt,zt.data):D.texSubImage2D(D.TEXTURE_2D,Pe,Mt,mt,Oe,je,wt,it,zt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,En),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ci),Pe===0&&K.generateMipmaps&&D.generateMipmap(Xt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(N,K,le=null,ne=null,Q=0){return N.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ne=arguments[1]||null,N=arguments[2],K=arguments[3],Q=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,K,le,ne,Q)},this.initRenderTarget=function(N){Ne.get(N).__webglFramebuffer===void 0&&L.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?L.setTextureCube(N,0):N.isData3DTexture?L.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?L.setTexture2DArray(N,0):L.setTexture2D(N,0),Ce.unbindTexture()},this.resetState=function(){O=0,V=0,H=null,Ce.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function Lb(){try{const s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl")||s.getContext("experimental-webgl")))}catch{return!1}}const Fb=({tierColor:s="#F59E0B",tierName:e="Standard Tier",points:t=38})=>{const r=at.useRef(null),[o,l]=at.useState(!1),[u,d]=at.useState(!0),f=at.useRef(null);at.useEffect(()=>{if(!Lb()){d(!1);return}const v=r.current;if(!v)return;let g,S,M,b;const E=[],y=[];try{const B=v.clientWidth||300,F=v.clientHeight||300;g=new lS,S=new jn(45,B/F,.1,1e3),S.position.z=4.2,M=new Db({antialias:!0,alpha:!0,powerPreference:"default"}),M.setSize(B,F),M.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),M.shadowMap.enabled=!0,v.appendChild(M.domElement);const C=L=>{L.preventDefault(),cancelAnimationFrame(b)};M.domElement.addEventListener("webglcontextlost",C,!1);const U=new Xo;f.current=U,g.add(U);const O=new kf(1.4,1.4,.22,64);E.push(O);const V=new At(s),H=new gd({color:V,metalness:.85,roughness:.25,bumpScale:.05});y.push(H);const P=new gd({color:V.clone().offsetHSL(0,.1,-.05),metalness:.95,roughness:.2});y.push(P);const R=new In(O,H);R.rotation.x=Math.PI/2,U.add(R);const k=new Jl(1.42,.06,16,64);E.push(k);const J=new In(k,P);U.add(J);const Z=new Jl(1.15,.03,16,48);E.push(Z);const oe=new In(Z,P);U.add(oe);const ue=new Px,ae=5,pe=.55,j=.25;for(let L=0;L<ae*2;L++){const A=L%2===0?pe:j,ee=L*Math.PI/ae-Math.PI/2,me=Math.cos(ee)*A,Me=Math.sin(ee)*A;L===0?ue.moveTo(me,Me):ue.lineTo(me,Me)}ue.closePath();const de={depth:.08,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.02,bevelThickness:.02},I=new Of(ue,de);E.push(I);const w=new gd({color:16776171,metalness:.7,roughness:.3});y.push(w);const W=new In(I,w);W.position.z=.11,U.add(W);const ye=new In(I,w);ye.position.z=-.19,ye.rotation.y=Math.PI,U.add(ye);const X=35,re=new Float32Array(X*3);for(let L=0;L<X*3;L+=3)re[L]=(Math.random()-.5)*5,re[L+1]=(Math.random()-.5)*4,re[L+2]=(Math.random()-.5)*3;const fe=new ti;fe.setAttribute("position",new pi(re,3)),E.push(fe);const ie=new wx({size:.06,color:16639626,transparent:!0,opacity:.8});y.push(ie);const xe=new dS(fe,ie);g.add(xe);const Le=new YS(16776171,1.2);g.add(Le);const Ae=new sg(16777215,2.5);Ae.position.set(4,5,5),g.add(Ae);const $e=new sg(16096779,1.5);$e.position.set(-4,-3,-2),g.add($e);const ve=new qS(V,3,8);ve.position.set(0,0,3),g.add(ve);let ge=0,D=0,Ue=0,Ee=0;const Fe=L=>{if(!v)return;const A=v.getBoundingClientRect();A.width===0||A.height===0||(Ue=(L.clientX-A.left)/A.width*2-1,Ee=-((L.clientY-A.top)/A.height*2-1),D=Ue*.7,ge=Ee*.4)};v.addEventListener("mousemove",Fe);const Ce=.015,Qe=()=>{b=requestAnimationFrame(Qe),U.rotation.y+=Ce+D*.02,U.rotation.x+=(ge-U.rotation.x)*.05,U.rotation.z=Math.sin(Date.now()*.002)*.05,U.position.y=Math.sin(Date.now()*.003)*.12,xe.rotation.y+=.002,M.render(g,S)};Qe();const Ne=new ResizeObserver(L=>{for(const A of L){const ee=A.contentRect.width,me=A.contentRect.height;ee>0&&me>0&&S&&M&&(S.aspect=ee/me,S.updateProjectionMatrix(),M.setSize(ee,me))}});return Ne.observe(v),()=>{Ne.disconnect(),v.removeEventListener("mousemove",Fe),cancelAnimationFrame(b),E.forEach(L=>L.dispose()),y.forEach(L=>L.dispose()),M.dispose(),v.contains(M.domElement)&&v.removeChild(M.domElement)}}catch(B){console.warn("WebGL init error, falling back to 2.5D token:",B),d(!1)}},[s]);const p=()=>{if(!o)if(l(!0),$s({particleCount:50,spread:60,origin:{y:.6},colors:["#F59E0B","#EA580C","#10B981","#FBBF24"]}),f.current){const x=f.current.rotation.y,v=x+Math.PI*4,g=performance.now(),S=1e3,M=b=>{const E=b-g,y=Math.min(1,E/S),B=1-Math.pow(1-y,3);f.current&&(f.current.rotation.y=x+(v-x)*B),y<1?requestAnimationFrame(M):l(!1)};requestAnimationFrame(M)}else setTimeout(()=>l(!1),800)};return _.jsxs("div",{className:"relative flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] rounded-3xl border border-[#EADBCE] shadow-soft",children:[u?_.jsx("div",{ref:r,onClick:p,className:"w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 max-w-full cursor-pointer transition-transform active:scale-95 relative group flex items-center justify-center",title:"Click to spin the 3D Arcade Medallion!",children:_.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity",children:_.jsx("span",{className:"bg-stone-900/80 text-stone-50 text-xs px-3 py-1 rounded-full font-mono shadow-md backdrop-blur-sm -translate-y-24",children:"Click to Flip"})})}):_.jsx("div",{onClick:p,className:"w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex items-center justify-center cursor-pointer relative group",title:"Click to flip medallion",children:_.jsx("div",{className:`w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-[#B45309] shadow-arcade-amber flex items-center justify-center transition-all ${o?"animate-spin scale-105":"hover:scale-105"}`,style:{background:`radial-gradient(circle at 35% 35%, #FFFDF9, ${s})`},children:_.jsxs("div",{className:"w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-dashed border-[#FFFBEB] flex flex-col items-center justify-center shadow-inner",children:[_.jsx(C_,{className:"w-10 h-10 sm:w-12 sm:h-12 text-[#FFFBEB] fill-[#FFFBEB] drop-shadow-md animate-pulse"}),_.jsx("span",{className:"font-pixel text-[9px] sm:text-[10px] text-[#78350F] font-bold mt-1",children:"ARCADE"})]})})}),_.jsxs("div",{className:"flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-white border border-[#EADBCE] shadow-sm",children:[_.jsx(wf,{className:"w-4 h-4 text-arcade-amber animate-spin",style:{animationDuration:"6s"}}),_.jsxs("span",{className:"text-xs font-semibold text-stone-700 tracking-wide font-sans",children:[e," Medallion"]}),_.jsxs("span",{className:"text-xs font-mono font-bold text-arcade-amber px-2 py-0.5 rounded-full bg-[#FEF3C7]",children:[t," pts"]}),_.jsx("button",{onClick:p,disabled:o,className:"p-1 hover:bg-[#F4ECE1] rounded-full transition text-stone-500 hover:text-stone-800",title:"Flip Coin",children:_.jsx(Mf,{className:`w-3.5 h-3.5 ${o?"animate-spin":""}`})})]})]})},Ib=({breakdown:s,currentProfile:e,onOpenBadgesTab:t,onOpenSwagTab:r})=>{const{currentTier:o,nextTier:l,totalPoints:u,pointsToNextTier:d,progressToNextTierPercent:f}=s;return _.jsx("div",{className:"bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8",children:_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center",children:[_.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-between",children:[_.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-2 sm:mb-3",children:[_.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono border",style:{backgroundColor:o.bgColor,color:o.color,borderColor:o.borderColor},children:[_.jsx(U_,{className:"w-3.5 h-3.5"}),o.name," (",o.badgeLevel,")"]}),_.jsxs("span",{className:"text-xs font-mono text-stone-500",children:["Profile: ",_.jsx("span",{className:"font-semibold text-stone-800",children:e.name})]})]}),_.jsxs("div",{className:"my-1 sm:my-2",children:[_.jsxs("div",{className:"flex items-baseline gap-2 sm:gap-3 flex-wrap",children:[_.jsx("span",{className:"font-pixel text-3xl sm:text-5xl lg:text-6xl text-[#B45309] tracking-tight drop-shadow-sm",children:u}),_.jsx("span",{className:"font-pixel text-base sm:text-2xl text-stone-700",children:"POINTS"})]}),_.jsx("p",{className:"font-serif italic text-stone-600 text-xs sm:text-sm mt-1",children:"Google Cloud Arcade 2026 Verified Score"})]}),_.jsxs("div",{className:"my-4 sm:my-5 p-3.5 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold gap-1 mb-2",children:[_.jsxs("span",{className:"text-stone-700 flex items-center gap-1",children:[_.jsx(Wg,{className:"w-4 h-4 text-arcade-coral shrink-0"}),l?_.jsxs("span",{children:["Next Goal: ",_.jsx("strong",{className:"text-stone-900",children:l.name})," (",l.minPoints," pts)"]}):_.jsx("span",{className:"text-arcade-emerald font-bold",children:"Max Tier Achieved: Grandmaster Legend!"})]}),_.jsx("span",{className:"font-mono text-stone-500 text-[11px] sm:text-xs",children:l?`${d} pts remaining`:"Top 1% Swag Unlocked"})]}),_.jsx("div",{className:"w-full bg-[#EADBCE] rounded-full h-3 sm:h-3.5 overflow-hidden p-0.5",children:_.jsx("div",{className:"h-full rounded-full transition-all duration-700 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#10B981]",style:{width:`${f}%`}})}),_.jsxs("div",{className:"flex justify-between items-center mt-2 text-[10px] sm:text-[11px] font-mono text-stone-500",children:[_.jsxs("span",{children:[o.name," (",o.minPoints," pts)"]}),_.jsxs("span",{className:"font-bold text-[#B45309]",children:[f,"% reached"]}),l&&_.jsxs("span",{children:[l.name," (",l.minPoints," pts)"]})]})]}),_.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2.5 pt-1",children:[_.jsxs("div",{onClick:t,className:"p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group",children:[_.jsxs("div",{className:"flex items-center justify-between mb-1",children:[_.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Games"}),_.jsx("span",{className:"text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"1 pt"})]}),_.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[_.jsxs("span",{className:"font-pixel text-xs sm:text-sm text-[#B45309]",children:["+",s.gamePoints]}),_.jsxs("span",{className:"text-[10px] sm:text-xs font-mono text-stone-500",children:[s.gameCount," badges"]})]})]}),_.jsxs("div",{onClick:t,className:"p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group",children:[_.jsxs("div",{className:"flex items-center justify-between mb-1",children:[_.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Trivia"}),_.jsx("span",{className:"text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"1 pt"})]}),_.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[_.jsxs("span",{className:"font-pixel text-xs sm:text-sm text-[#B45309]",children:["+",s.triviaPoints]}),_.jsxs("span",{className:"text-[10px] sm:text-xs font-mono text-stone-500",children:[s.triviaCount," badges"]})]})]}),_.jsxs("div",{onClick:t,className:"p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group",children:[_.jsxs("div",{className:"flex items-center justify-between mb-1",children:[_.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Skill Badges"}),_.jsx("span",{className:"text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"1/2 ratio"})]}),_.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[_.jsxs("span",{className:"font-pixel text-xs sm:text-sm text-[#059669]",children:["+",s.skillPoints]}),_.jsxs("span",{className:"text-[10px] sm:text-xs font-mono text-stone-500",children:[s.skillCount," badges"]})]})]}),_.jsxs("div",{onClick:r,className:"p-2.5 sm:p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition flex flex-col justify-between group",children:[_.jsxs("div",{className:"flex items-center justify-between mb-1",children:[_.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Milestones"}),_.jsx("span",{className:"text-[9px] font-mono px-1 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"Bonus"})]}),_.jsxs("div",{className:"flex items-baseline justify-between mt-1",children:[_.jsxs("span",{className:"font-pixel text-xs sm:text-sm text-[#7E22CE]",children:["+",s.milestonePoints+s.specialPoints]}),_.jsxs("span",{className:"text-[10px] sm:text-xs font-mono text-stone-500",children:[s.milestoneCount+s.specialCount," bonus"]})]})]})]}),_.jsxs("div",{className:"flex flex-wrap items-center gap-2 sm:gap-3 mt-4 pt-3 border-t border-[#EADBCE]",children:[_.jsxs("button",{onClick:t,className:"text-xs font-semibold text-[#B45309] hover:underline flex items-center gap-1",children:["Inspect all ",s.totalBadges," badges ",_.jsx(Em,{className:"w-3.5 h-3.5"})]}),_.jsx("span",{className:"text-stone-300",children:"•"}),_.jsxs("button",{onClick:r,className:"text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1",children:["View unlocked rewards ",_.jsx(Em,{className:"w-3.5 h-3.5"})]})]})]}),_.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-0",children:_.jsx(Fb,{tierColor:o.color,tierName:o.name,points:u})})]})})},Ng=({frequency:s,breakdown:e,onOpenAddBadge:t})=>{const[r,o]=at.useState(s.weeklyBreakdown.length>0?s.weeklyBreakdown.length-1:null),l=r!==null?s.weeklyBreakdown[r]:null,u=s.weeklyBreakdown.length>0;return _.jsxs("div",{className:"bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[_.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1",children:[_.jsx(ym,{className:"w-3.5 h-3.5"}),"Badge Velocity"]}),u&&_.jsxs("span",{className:"text-xs font-mono text-stone-500",children:[s.totalDaysSpanned," days analyzed"]})]}),_.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Badge Frequency & Pace Analytics"}),_.jsx("p",{className:"text-stone-600 text-xs sm:text-sm mt-1",children:"Calculates how frequently you acquire Google Cloud badges and projects when you will reach subsequent swag tiers."})]}),u&&s.estimatedCompletionDate&&e.nextTier&&_.jsxs("div",{className:"bg-[#FAF7F2] p-3 rounded-2xl border border-[#EADBCE] flex items-center gap-3 shrink-0",children:[_.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold shrink-0",children:_.jsx(Mm,{className:"w-5 h-5"})}),_.jsxs("div",{children:[_.jsx("p",{className:"text-[10px] sm:text-[11px] font-mono text-stone-500 uppercase",children:"Projected Tier Reach"}),_.jsxs("p",{className:"text-xs font-bold font-sans text-stone-800",children:[e.nextTier.name,": ",_.jsx("span",{className:"text-[#059669] font-mono",children:s.estimatedCompletionDate})]}),_.jsxs("p",{className:"text-[10px] text-stone-500 font-sans",children:["in ~",s.estimatedDaysToNextTier," days at current velocity"]})]})]})]}),u?_.jsxs(_.Fragment,{children:[_.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8",children:[_.jsxs("div",{className:"p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between",children:[_.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans",children:[_.jsx("span",{children:"Weekly Cadence"}),_.jsx(D_,{className:"w-4 h-4 text-arcade-amber shrink-0"})]}),_.jsxs("div",{className:"flex items-baseline gap-1.5 flex-wrap",children:[_.jsx("span",{className:"font-pixel text-lg sm:text-2xl text-[#B45309]",children:s.badgesPerWeek}),_.jsx("span",{className:"text-[10px] sm:text-xs font-mono text-stone-600 font-semibold",children:"badges/wk"})]}),_.jsxs("p",{className:"text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans",children:["~",s.badgesPerMonth," badges/mo"]})]}),_.jsxs("div",{className:"p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between",children:[_.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans",children:[_.jsx("span",{children:"Average Interval"}),_.jsx(Mm,{className:"w-4 h-4 text-arcade-coral shrink-0"})]}),_.jsxs("div",{className:"flex items-baseline gap-1.5 flex-wrap",children:[_.jsx("span",{className:"font-pixel text-lg sm:text-2xl text-[#EA580C]",children:s.avgDaysBetweenBadges}),_.jsx("span",{className:"text-[10px] sm:text-xs font-mono text-stone-600 font-semibold",children:"days/badge"})]}),_.jsxs("p",{className:"text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans truncate",children:[s.firstBadgeDate," to ",s.latestBadgeDate]})]}),_.jsxs("div",{className:"p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between",children:[_.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans",children:[_.jsx("span",{children:"Weekly Streak"}),_.jsx(Wg,{className:"w-4 h-4 text-arcade-ruby shrink-0"})]}),_.jsxs("div",{className:"flex items-baseline gap-1.5 flex-wrap",children:[_.jsx("span",{className:"font-pixel text-lg sm:text-2xl text-[#E11D48]",children:s.currentActiveStreakWeeks}),_.jsx("span",{className:"text-[10px] sm:text-xs font-mono text-stone-600 font-semibold",children:"weeks active"})]}),_.jsx("p",{className:"text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans",children:"Consecutive weeks with badges"})]}),_.jsxs("div",{className:"p-3 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] flex flex-col justify-between",children:[_.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-[11px] sm:text-xs mb-1.5 font-sans",children:[_.jsx("span",{children:"Peak Week Velocity"}),_.jsx(Zg,{className:"w-4 h-4 text-arcade-emerald shrink-0"})]}),_.jsxs("div",{className:"flex items-baseline gap-1.5 flex-wrap",children:[_.jsx("span",{className:"font-pixel text-lg sm:text-2xl text-[#059669]",children:s.maxWeeklyCadence}),_.jsx("span",{className:"text-[10px] sm:text-xs font-mono text-stone-600 font-semibold",children:"badges in 1 wk"})]}),_.jsx("p",{className:"text-[10px] sm:text-[11px] text-stone-500 mt-1 font-sans",children:"Single week personal record"})]})]}),_.jsxs("div",{className:"mb-6 sm:mb-8",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3",children:[_.jsxs("h4",{className:"font-display font-bold text-sm sm:text-base text-stone-800 flex items-center gap-2",children:[_.jsx(Ad,{className:"w-4 h-4 text-arcade-amber shrink-0"}),"Weekly Completion Cadence Timeline"]}),_.jsx("span",{className:"text-[11px] font-mono text-stone-500",children:"Click any bar to inspect badges earned in that week"})]}),_.jsxs("div",{className:"p-3 sm:p-5 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[_.jsx("div",{className:"flex items-end gap-2 sm:gap-4 h-40 sm:h-48 pt-6 pb-2 px-1 sm:px-2 overflow-x-auto no-scrollbar",children:s.weeklyBreakdown.map((d,f)=>{const p=Math.max(1,s.maxWeeklyCadence),x=Math.max(15,Math.round(d.count/p*100)),v=r===f;return _.jsxs("button",{onClick:()=>o(f),className:"flex-1 min-w-[42px] sm:min-w-[50px] flex flex-col items-center group relative h-full justify-end focus:outline-none",children:[_.jsx("span",{className:"text-[10px] font-mono font-bold text-stone-700 mb-1 group-hover:text-[#B45309] transition-colors",children:d.count}),_.jsx("div",{className:`w-full rounded-t-xl transition-all duration-300 ${v?"bg-gradient-to-t from-[#B45309] to-[#F59E0B] shadow-arcade-amber scale-105":"bg-gradient-to-t from-[#D6C0A5] to-[#EADBC8] group-hover:from-[#BF9E79] group-hover:to-[#D6C0A5]"}`,style:{height:`${x}%`}}),_.jsxs("span",{className:`text-[9px] sm:text-[10px] font-mono mt-1.5 truncate w-full text-center ${v?"font-bold text-[#B45309]":"text-stone-500"}`,children:["Wk ",f+1]})]},d.startDate)})}),l&&_.jsxs("div",{className:"mt-4 pt-4 border-t border-[#EADBCE] animate-fadeIn",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2",children:[_.jsxs("span",{className:"text-xs font-bold text-stone-800 font-display",children:[l.weekLabel," (",l.startDate," to ",l.endDate,"):"]}),_.jsxs("span",{className:"text-xs font-mono text-[#B45309] font-bold",children:[l.count," badges • ~",l.points," points"]})]}),_.jsx("div",{className:"flex flex-wrap gap-1.5 sm:gap-2",children:l.badges.map(d=>_.jsxs("span",{className:"inline-flex items-center gap-1.5 px-2.5 py-1 bg-white rounded-xl text-xs border border-[#EADBCE] text-stone-700 shadow-xs",children:[_.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F59E0B] shrink-0"}),_.jsx("span",{className:"truncate max-w-[200px] sm:max-w-none",children:d.name}),_.jsxs("span",{className:"text-[10px] font-mono text-stone-400",children:["(",d.category,")"]})]},d.id))})]})]})]}),_.jsxs("div",{children:[_.jsxs("h4",{className:"font-display font-bold text-sm sm:text-base text-stone-800 mb-2.5 flex items-center gap-2",children:[_.jsx(Ad,{className:"w-4 h-4 text-arcade-coral shrink-0"}),"Day-of-Week Earning Pattern"]}),_.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-7 gap-2",children:s.dayOfWeekBreakdown.map(d=>_.jsxs("div",{className:"p-2 sm:p-3 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] text-center",children:[_.jsx("span",{className:"text-[10px] sm:text-[11px] font-mono font-bold text-stone-500 block mb-0.5",children:d.day}),_.jsx("span",{className:"font-pixel text-xs sm:text-sm text-[#292524] block",children:d.count}),_.jsxs("span",{className:"text-[9px] sm:text-[10px] font-mono text-[#B45309] block mt-0.5",children:[d.percentage,"%"]})]},d.day))})]})]}):_.jsxs("div",{className:"p-8 sm:p-12 text-center bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[_.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mx-auto mb-3 border border-[#FDE68A] shadow-xs",children:_.jsx(ym,{className:"w-6 h-6"})}),_.jsx("h4",{className:"font-display font-bold text-stone-800 text-base sm:text-lg",children:"Frequency Analytics Ready"}),_.jsx("p",{className:"text-stone-600 text-xs sm:text-sm mt-1 max-w-md mx-auto leading-relaxed",children:"Your badge completion cadence, weekly velocity timeline, active streaks, and forecasted swag milestone dates will automatically calculate as soon as your badges are synced to your account."}),t&&_.jsx("button",{onClick:t,className:"mt-4 px-4 py-2 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-bold rounded-xl transition shadow-xs",children:"+ Record Badges to Start Tracking"})]})]})},Ub=({badges:s,onAddBadgeClick:e,onDeleteBadge:t})=>{const[r,o]=at.useState("all"),[l,u]=at.useState(""),[d,f]=at.useState("newest"),p=at.useMemo(()=>{const g={all:s.length,game:0,trivia:0,skill:0,milestone:0,special:0};return s.forEach(S=>{S.category in g&&g[S.category]++}),g},[s]),x=at.useMemo(()=>s.filter(g=>{const S=r==="all"||g.category===r,M=l===""||g.name.toLowerCase().includes(l.toLowerCase());return S&&M}).sort((g,S)=>d==="newest"?new Date(S.dateEarned).getTime()-new Date(g.dateEarned).getTime():d==="oldest"?new Date(g.dateEarned).getTime()-new Date(S.dateEarned).getTime():g.name.localeCompare(S.name)),[s,r,l,d]),v=g=>{switch(g){case"game":return{label:"Arcade Game",bg:"bg-[#FEF3C7]",text:"text-[#B45309]",border:"border-[#FDE68A]"};case"trivia":return{label:"Trivia Badge",bg:"bg-[#FFEDD5]",text:"text-[#C2410C]",border:"border-[#FED7AA]"};case"skill":return{label:"Skill Badge",bg:"bg-[#ECFDF5]",text:"text-[#047857]",border:"border-[#A7F3D0]"};case"milestone":return{label:"Milestone Bonus",bg:"bg-[#F3E8FF]",text:"text-[#7E22CE]",border:"border-[#E9D5FF]"};case"special":return{label:"Special Sprint",bg:"bg-[#FFF1F2]",text:"text-[#BE123C]",border:"border-[#FECDD3]"}}};return _.jsxs("div",{className:"bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[_.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[_.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A]",children:"Earned Badges Repository"}),_.jsxs("span",{className:"text-xs font-mono text-stone-500",children:["Total: ",s.length," badges"]})]}),_.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Individual Badges & Contributions"}),_.jsx("p",{className:"text-stone-600 text-xs sm:text-sm mt-1",children:"Inspect every Google Cloud badge earned, verification status, completion timestamp, and point contribution."})]}),_.jsxs("button",{onClick:e,className:"px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white rounded-2xl text-xs sm:text-sm font-semibold font-display shadow-arcade-amber hover:shadow-sm active:translate-y-0.5 transition flex items-center justify-center gap-2 shrink-0",children:[_.jsx(Xg,{className:"w-4 h-4"}),_.jsx("span",{children:"Add Official Badge"})]})]}),_.jsx("div",{className:"flex overflow-x-auto no-scrollbar gap-1.5 sm:gap-2 mb-5 pb-1",children:[{key:"all",label:"All Badges",count:p.all},{key:"game",label:"Games (1 pt)",count:p.game},{key:"trivia",label:"Trivia (1 pt)",count:p.trivia},{key:"skill",label:"Skill Labs (1/2 pt)",count:p.skill},{key:"milestone",label:"Milestones (Bonus)",count:p.milestone},{key:"special",label:"Cert & Sprints",count:p.special}].map(g=>_.jsxs("button",{onClick:()=>o(g.key),className:`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans transition flex items-center gap-1.5 whitespace-nowrap shrink-0 ${r===g.key?"bg-[#292524] text-white shadow-sm":"bg-[#FAF7F2] text-stone-600 hover:bg-[#F4ECE1] border border-[#EADBCE]"}`,children:[_.jsx("span",{children:g.label}),_.jsx("span",{className:`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${r===g.key?"bg-stone-700 text-stone-200":"bg-white text-stone-500"}`,children:g.count})]},g.key))}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-2.5 sm:gap-3 mb-6",children:[_.jsxs("div",{className:"relative flex-1",children:[_.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400",children:_.jsx(qg,{className:"w-4 h-4"})}),_.jsx("input",{type:"text",value:l,onChange:g=>u(g.target.value),placeholder:"Filter by title (e.g. BigQuery, Terraform, Security, Vertex AI)...",className:"w-full pl-10 pr-4 py-2 sm:py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),_.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[_.jsxs("span",{className:"text-xs font-semibold text-stone-500 font-sans flex items-center gap-1",children:[_.jsx(t_,{className:"w-3.5 h-3.5"})," Sort:"]}),_.jsxs("select",{value:d,onChange:g=>f(g.target.value),className:"px-3 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs font-sans text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]",children:[_.jsx("option",{value:"newest",children:"Earned (Newest First)"}),_.jsx("option",{value:"oldest",children:"Earned (Oldest First)"}),_.jsx("option",{value:"name",children:"Badge Title (A-Z)"})]})]})]}),x.length>0?_.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4",children:x.map(g=>{const S=v(g.category);return _.jsxs("div",{className:"p-3.5 sm:p-4 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] transition flex flex-col justify-between group",children:[_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[_.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${S.bg} ${S.text} ${S.border}`,children:S.label}),_.jsxs("span",{className:"font-pixel text-[11px] text-[#B45309] font-bold",children:["+",g.pointsContribution," ",g.category==="skill"?"pt pool":"pt"]})]}),_.jsx("h4",{className:"font-sans font-bold text-xs sm:text-sm text-stone-800 leading-snug group-hover:text-[#B45309] transition-colors",children:g.name}),g.description&&_.jsx("p",{className:"text-[11px] sm:text-xs text-stone-500 mt-1 line-clamp-2",children:g.description})]}),_.jsxs("div",{className:"flex items-center justify-between pt-3 mt-3 border-t border-[#EADBCE]/80 text-[11px] font-mono text-stone-500",children:[_.jsxs("div",{className:"flex items-center gap-1.5",children:[_.jsx(Ad,{className:"w-3.5 h-3.5 text-stone-400"}),_.jsx("span",{children:g.dateEarned})]}),_.jsx("button",{onClick:()=>{window.confirm(`Remove "${g.name}" from your badges calculation?`)&&t(g.id)},className:"p-1.5 text-stone-400 hover:text-[#BE123C] hover:bg-white rounded-lg transition",title:"Remove badge from calculation",children:_.jsx($g,{className:"w-3.5 h-3.5"})})]})]},g.id)})}):s.length===0?_.jsxs("div",{className:"p-8 sm:p-12 text-center bg-[#FAF7F2] rounded-3xl border border-[#EADBCE]",children:[_.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mx-auto mb-3 border border-[#FDE68A] shadow-xs",children:_.jsx(Sm,{className:"w-6 h-6"})}),_.jsx("h4",{className:"font-display font-bold text-stone-800 text-base sm:text-lg",children:"Your Badges Repository is Empty"}),_.jsx("p",{className:"text-stone-600 text-xs sm:text-sm mt-1 max-w-md mx-auto leading-relaxed",children:"Record your completed Arcade Games, Trivia Weeks, and Skill Badges to calculate your verified score and unlock swag milestones."}),_.jsx("button",{onClick:e,className:"mt-4 px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-bold font-display rounded-xl shadow-arcade-amber hover:shadow-xs transition",children:"+ Record Your First Badge"})]}):_.jsxs("div",{className:"p-8 sm:p-12 text-center bg-[#FAF7F2] rounded-3xl border border-[#EADBCE]",children:[_.jsx(Sm,{className:"w-10 h-10 text-stone-400 mx-auto mb-2 opacity-50"}),_.jsx("p",{className:"font-display font-bold text-stone-700 text-sm sm:text-base",children:"No matching badges found"}),_.jsx("p",{className:"text-stone-500 text-xs mt-1",children:'Try clearing the search filter or select "All Badges".'})]})]})},kb=({breakdown:s})=>{const{totalPoints:e,currentTier:t}=s,r=()=>{$s({particleCount:50,spread:70,colors:["#F59E0B","#10B981","#9333EA"]})};return _.jsxs("div",{className:"bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[_.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[_.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1",children:[_.jsx(o_,{className:"w-3.5 h-3.5"}),"Official Prize Vault"]}),_.jsxs("span",{className:"text-xs font-mono text-stone-500",children:["Current Points: ",_.jsxs("strong",{className:"text-[#B45309]",children:[e," pts"]})]})]}),_.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Arcade Swag Tiers & Milestones"}),_.jsx("p",{className:"text-stone-600 text-xs sm:text-sm mt-1",children:"Official reward packages redeemable during the Google Cloud Arcade Prize Counter distribution window."})]})}),_.jsx("div",{className:"space-y-3 sm:space-y-4",children:Jn.map(o=>{const l=e>=o.minPoints,u=t.id===o.id,d=Math.max(0,o.minPoints-e);return _.jsx("div",{className:`p-4 sm:p-5 rounded-2xl sm:rounded-3xl border transition-all ${u?"bg-[#FFFDF9] border-[#B45309] ring-2 ring-[#F59E0B]/20 shadow-md":l?"bg-white border-[#EADBCE]":"bg-[#FAF7F2] border-[#EADBCE] opacity-80"}`,children:_.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[_.jsxs("div",{className:"flex-1",children:[_.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1.5",children:[_.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-mono font-bold border",style:{backgroundColor:o.bgColor,color:o.color,borderColor:o.borderColor},children:[o.name," (",o.badgeLevel,")"]}),_.jsxs("span",{className:"text-xs font-mono font-bold text-stone-600",children:[o.minPoints,"+ Points"]}),l?_.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0]",children:[_.jsx(jg,{className:"w-3.5 h-3.5"})," Unlocked"]}):_.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-mono text-stone-500 bg-white px-2 py-0.5 rounded-full border border-[#EADBCE]",children:[_.jsx(m_,{className:"w-3.5 h-3.5"})," Needs ",d," more pts"]}),u&&_.jsx("span",{className:"text-[11px] font-sans font-bold text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FDE68A]",children:"Current Standing"})]}),_.jsx("h4",{className:"font-display font-bold text-base sm:text-lg text-stone-900 mt-1",children:o.rewardName}),_.jsx("p",{className:"text-xs text-stone-600 mt-0.5",children:o.rewardDescription}),_.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5 sm:gap-2",children:o.swagItems.map((f,p)=>_.jsxs("span",{className:`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-sans ${l?"bg-[#FAF7F2] text-stone-800 border border-[#EADBCE]":"bg-white text-stone-500 border border-[#EADBCE]/60"}`,children:[_.jsx(x_,{className:`w-3.5 h-3.5 shrink-0 ${l?"text-[#059669]":"text-stone-400"}`}),_.jsx("span",{children:f})]},p))})]}),_.jsx("div",{className:"flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t lg:border-t-0 pt-3 lg:pt-0 border-[#EADBCE] shrink-0",children:l?_.jsxs("button",{onClick:r,className:"px-4 py-2 bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-bold text-xs rounded-xl border border-[#A7F3D0] transition flex items-center gap-1.5 shadow-sm",children:[_.jsx(wf,{className:"w-3.5 h-3.5"}),"Celebrate Prize"]}):_.jsxs("div",{className:"text-right",children:[_.jsxs("span",{className:"font-pixel text-xs text-[#EA580C] block",children:["-",d," PTS"]}),_.jsx("span",{className:"text-[10px] font-mono text-stone-500",children:"to unlock this tier"})]})})]})},o.id)})})]})},bd=({breakdown:s})=>{const[e,t]=at.useState(3),[r,o]=at.useState(s.nextTier?s.nextTier.id:"legend"),l=Jn.find(S=>S.id===r)||Jn[Jn.length-1],u=Math.max(0,l.minPoints-s.totalPoints),f=Math.ceil(u/.7),p=Math.ceil(f/Math.max(1,e)),x=p*7,v=new Date;v.setDate(v.getDate()+x);const g=v.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return _.jsxs("div",{className:"bg-white rounded-3xl p-4 sm:p-6 lg:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[_.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[_.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1",children:[_.jsx(w_,{className:"w-3.5 h-3.5"}),"What-If Projection Engine"]}),_.jsx("span",{className:"text-xs font-mono text-stone-500",children:"Interactive Goal Planning"})]}),_.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Target Pace & Velocity Simulator"}),_.jsx("p",{className:"text-stone-600 text-xs sm:text-sm mt-1",children:"Adjust your planned completion speed to see exactly when you will unlock your dream swag tier."})]})}),_.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center",children:[_.jsxs("div",{className:"lg:col-span-7 space-y-4 sm:space-y-6",children:[_.jsxs("div",{children:[_.jsxs("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-2 flex items-center gap-1.5",children:[_.jsx(R_,{className:"w-4 h-4 text-arcade-amber"}),"Select Target Swag Goal:"]}),_.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:Jn.filter(S=>S.id!=="novice").map(S=>_.jsxs("button",{onClick:()=>o(S.id),className:`p-2.5 sm:p-3 rounded-2xl border text-left transition flex flex-col justify-between ${r===S.id?"bg-[#FEF3C7] border-[#B45309] ring-2 ring-[#F59E0B]/30":"bg-[#FAF7F2] border-[#EADBCE] hover:bg-[#F4ECE1]"}`,children:[_.jsx("span",{className:"block text-xs font-bold text-stone-800 font-display",children:S.name}),_.jsxs("span",{className:"block text-[10px] sm:text-[11px] font-mono text-[#B45309] mt-1",children:[S.minPoints,"+ pts"]})]},S.id))})]}),_.jsxs("div",{className:"p-3.5 sm:p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[_.jsxs("div",{className:"flex items-center justify-between mb-2",children:[_.jsxs("span",{className:"text-xs font-bold text-stone-700 font-sans flex items-center gap-1",children:[_.jsx(Zg,{className:"w-4 h-4 text-arcade-coral"}),"Target Weekly Pace:"]}),_.jsxs("span",{className:"font-pixel text-xs sm:text-sm text-[#B45309]",children:[e," ",e===1?"badge":"badges"," / week"]})]}),_.jsx("input",{type:"range",min:"1",max:"10",step:"1",value:e,onChange:S=>t(parseInt(S.target.value,10)),className:"w-full h-2 bg-[#EADBCE] rounded-lg appearance-none cursor-pointer accent-[#B45309]"}),_.jsxs("div",{className:"flex justify-between text-[9px] sm:text-[10px] font-mono text-stone-500 mt-2",children:[_.jsx("span",{children:"1 badge (Casual)"}),_.jsx("span",{children:"3 badges (Steady)"}),_.jsx("span",{children:"5 badges (Fast)"}),_.jsx("span",{children:"10 badges (Speedrun)"})]})]})]}),_.jsxs("div",{className:"lg:col-span-5 p-5 sm:p-6 bg-gradient-to-br from-[#FEF3C7] via-[#FFFDF9] to-[#FAF5EE] rounded-3xl border border-[#FDE68A] shadow-soft",children:[_.jsxs("div",{className:"flex items-center justify-between mb-3",children:[_.jsx("span",{className:"text-xs font-mono font-bold text-[#B45309] uppercase tracking-wider",children:"Simulation Forecast"}),_.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-white text-stone-700 border border-[#EADBCE]",children:l.name})]}),_.jsxs("div",{className:"my-3",children:[_.jsx("p",{className:"text-xs text-stone-600 font-sans",children:"Estimated Arrival Date:"}),_.jsx("p",{className:"font-display font-bold text-xl sm:text-2xl text-stone-900 mt-0.5",children:g}),_.jsxs("p",{className:"text-xs font-mono text-stone-500 mt-1",children:["in ~",p," weeks (",x," days)"]})]}),_.jsxs("div",{className:"space-y-1.5 pt-3 border-t border-[#FDE68A] text-xs font-sans",children:[_.jsxs("div",{className:"flex justify-between",children:[_.jsx("span",{className:"text-stone-600",children:"Points Remaining:"}),_.jsxs("span",{className:"font-mono font-bold text-[#B45309]",children:[u," pts"]})]}),_.jsxs("div",{className:"flex justify-between",children:[_.jsx("span",{className:"text-stone-600",children:"Est. Badges Needed:"}),_.jsxs("span",{className:"font-mono font-bold text-stone-800",children:["~",f," badges"]})]}),_.jsxs("div",{className:"flex justify-between",children:[_.jsx("span",{className:"text-stone-600",children:"Weekly Pace:"}),_.jsxs("span",{className:"font-mono font-bold text-[#059669]",children:[e," badges/wk"]})]})]}),_.jsxs("div",{className:"mt-4 p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#EADBCE] text-[11px] text-stone-600 leading-snug",children:["💡 ",_.jsx("strong",{children:"Pro-Tip:"})," Complete the weekly Trivia Badges (1 pt every Monday) and bi-weekly Arcade Game levels to maximize your points per hour!"]})]})]})]})},Ob=({isOpen:s,onClose:e,profiles:t,currentProfile:r,onSelectProfile:o,onCreateProfile:l,onDeleteProfile:u})=>{const[d,f]=at.useState(!1),[p,x]=at.useState(""),[v,g]=at.useState(""),[S,M]=at.useState(""),[b,E]=at.useState(null),y=at.useRef(null);if(at.useEffect(()=>{if(!s)return;const U=O=>{O.key==="Escape"&&e()};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[s,e]),!s)return null;const B=U=>{U.preventDefault();const O=$l(p,60);if(!O)return;const V=v.trim()&&Lg(v)||"https://www.cloudskillsboost.google/public_profiles/user",H=$l(S,200),P={id:`profile-${Date.now()}`,name:O,avatarSeed:O.replace(/\s+/g,""),profileUrl:V,lastUpdated:new Date().toISOString().split("T")[0],isCurrent:!0,notes:H||"Custom cloud profile",badges:[],seasonTarget:"Season 2026"};l(P),$s({particleCount:50,spread:60,colors:["#F59E0B","#10B981"]}),f(!1),x(""),g(""),M(""),e()},F=()=>{try{const U="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),O=document.createElement("a");O.setAttribute("href",U),O.setAttribute("download",`google-arcade-profiles-${new Date().toISOString().split("T")[0]}.json`),document.body.appendChild(O),O.click(),O.remove()}catch(U){console.error("Export failed:",U)}},C=U=>{var H;const O=(H=U.target.files)==null?void 0:H[0];if(!O)return;const V=new FileReader;V.onload=P=>{var R;try{const k=(R=P.target)==null?void 0:R.result,J=JSON.parse(k),Z=Iv(J);if(!Z){E("Invalid profile backup file format. Must contain valid Arcade profiles.");return}no(Z),window.location.reload()}catch{E("Could not parse JSON file. Please check file integrity.")}},V.readAsText(O)};return _.jsx("div",{onClick:e,className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn",children:_.jsxs("div",{onClick:U=>U.stopPropagation(),className:"bg-white rounded-3xl max-w-xl w-full border border-[#EADBCE] shadow-2xl overflow-hidden",children:[_.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]",children:[_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"font-pixel text-[10px] text-[#B45309] font-bold uppercase",children:"Profile Vault"}),_.jsx("span",{className:"px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-mono font-bold border border-[#A7F3D0]",children:"Auto-Saved"})]}),_.jsx("h3",{className:"font-display font-bold text-xl text-stone-900 mt-0.5",children:"Account Management & Switcher"})]}),_.jsx("button",{onClick:e,className:"p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 rounded-xl transition",children:_.jsx(bf,{className:"w-5 h-5"})})]}),_.jsxs("div",{className:"p-6 max-h-[70vh] overflow-y-auto",children:[b&&_.jsxs("div",{className:"mb-4 p-3 bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] rounded-xl text-xs flex items-center justify-between",children:[_.jsxs("span",{className:"flex items-center gap-2",children:[_.jsx(Gg,{className:"w-4 h-4 flex-shrink-0"}),b]}),_.jsx("button",{onClick:()=>E(null),className:"font-bold",children:"×"})]}),d?_.jsxs("form",{onSubmit:B,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Account / Explorer Name:"}),_.jsx("input",{type:"text",required:!0,maxLength:60,value:p,onChange:U=>x(U.target.value),placeholder:"e.g. Maya Lin",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Google Cloud Skills Boost Profile URL (optional):"}),_.jsx("input",{type:"text",maxLength:300,value:v,onChange:U=>g(U.target.value),placeholder:"https://www.cloudskillsboost.google/public_profiles/...",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Personal Goal / Notes:"}),_.jsx("input",{type:"text",maxLength:200,value:S,onChange:U=>M(U.target.value),placeholder:"e.g. Aiming for Premium Tier Backpack by November!",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),_.jsxs("div",{className:"flex items-center justify-end gap-2 pt-3 border-t border-[#EADBCE]",children:[_.jsx("button",{type:"button",onClick:()=>f(!1),className:"px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl transition",children:"Cancel"}),_.jsx("button",{type:"submit",disabled:!p.trim(),className:"px-5 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-bold rounded-xl shadow-arcade-amber hover:shadow-sm transition disabled:opacity-50",children:"Create & Save Account"})]})]}):_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center justify-between mb-4",children:[_.jsx("p",{className:"text-xs text-stone-500 font-sans",children:"Saved accounts on this device. Your active account is preserved across reloads."}),_.jsxs("button",{onClick:()=>f(!0),className:"px-3 py-1.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-xl transition flex items-center gap-1.5 shadow-sm",children:[_.jsx(V_,{className:"w-3.5 h-3.5"}),"Create Account"]})]}),_.jsx("div",{className:"space-y-3",children:t.map(U=>{const O=zg(U.badges),V=U.id===r.id;return _.jsxs("div",{onClick:()=>{o(U.id),e()},className:`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between group ${V?"bg-[#FEF3C7] border-[#B45309] ring-2 ring-[#F59E0B]/30":"bg-[#FAF7F2] border-[#EADBCE] hover:bg-[#F4ECE1]"}`,children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"w-10 h-10 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center font-display font-bold text-base text-[#B45309] shadow-sm",children:U.name.charAt(0).toUpperCase()}),_.jsxs("div",{children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("span",{className:"font-display font-bold text-sm text-stone-900 group-hover:text-[#B45309] transition-colors",children:U.name}),V&&_.jsxs("span",{className:"inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.2 rounded-full border border-[#A7F3D0]",children:[_.jsx(Yg,{className:"w-3 h-3"})," Active"]})]}),_.jsxs("p",{className:"text-[11px] font-mono text-stone-500 mt-0.5",children:[U.badges.length," badges • ",O.currentTier.name]})]})]}),_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsx("div",{className:"text-right",children:_.jsxs("span",{className:"font-pixel text-xs text-[#B45309]",children:[O.totalPoints," PTS"]})}),t.length>1&&_.jsx("button",{onClick:H=>{H.stopPropagation(),window.confirm(`Delete profile for "${U.name}"?`)&&u(U.id)},className:"p-1.5 text-stone-400 hover:text-rose-600 hover:bg-white rounded-lg transition opacity-0 group-hover:opacity-100",title:"Delete profile",children:_.jsx($g,{className:"w-4 h-4"})})]})]},U.id)})}),_.jsxs("div",{className:"mt-6 pt-4 border-t border-[#EADBCE] flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500",children:[_.jsxs("div",{className:"flex items-center gap-3",children:[_.jsxs("button",{onClick:F,className:"flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition font-medium",children:[_.jsx(Qv,{className:"w-3.5 h-3.5"}),"Backup JSON"]}),_.jsxs("button",{onClick:()=>{var U;return(U=y.current)==null?void 0:U.click()},className:"flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition font-medium",children:[_.jsx(O_,{className:"w-3.5 h-3.5"}),"Import JSON"]}),_.jsx("input",{ref:y,type:"file",accept:".json",className:"hidden",onChange:C})]}),_.jsx("span",{className:"font-mono text-[10px]",children:"Auto-Synced in Browser"})]})]})]})]})})},Bb=[{name:"Level 1: Google Cloud Infrastructure & Containers",category:"game",pointsContribution:1,description:"Master Compute Engine, GKE clusters, and Cloud Run deployments in this challenge game.",season:"Season 2026",isVerified:!0},{name:"Level 2: Data Engineering & Analytics Mastery",category:"game",pointsContribution:1,description:"Build BigQuery pipelines, Dataflow streaming, and Cloud Dataproc spark clusters.",season:"Season 2026",isVerified:!0},{name:"Level 3: Generative AI & Vertex AI Studio",category:"game",pointsContribution:1,description:"Prompt engineering, multimodal model tuning, and Gemini API integration hands-on arcade.",season:"Season 2026",isVerified:!0},{name:"Level 4: Cloud Security, IAM & Governance",category:"game",pointsContribution:1,description:"Enforce VPC service controls, IAM fine-grained privileges, and Security Command Center.",season:"Season 2026",isVerified:!0},{name:"Diabolical Challenge: Multi-Cloud & Resiliency",category:"game",pointsContribution:1,description:"The infamous Arcade Diabolical mystery level with high difficulty timed scenarios.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 1",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia testing architecture knowledge and cloud fundamentals.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 2",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia on networking, Cloud DNS, and Cloud Armor firewalls.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 3",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia on Datastore, Cloud Spanner, and Firestore scalability.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 4",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia grand finale covering Cloud FinOps and cost optimization.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia September 2026: Week 1",category:"trivia",pointsContribution:1,description:"September launch trivia covering Kubernetes and modern microservices.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia September 2026: Week 2",category:"trivia",pointsContribution:1,description:"September trivia on serverless workflows and Eventarc event orchestration.",season:"Season 2026",isVerified:!0},{name:"Implement Cloud Security Fundamentals on Google Cloud",category:"skill",pointsContribution:.5,description:"Configure Cloud IAM policies, Cloud Storage ACLs, and service account keys.",season:"Season 2026",isVerified:!0},{name:"Build and Secure Networks in Google Cloud",category:"skill",pointsContribution:.5,description:"VPC peering, firewall rules, NAT gateways, and load balancer configurations.",season:"Season 2026",isVerified:!0},{name:"Perform Foundational Infrastructure Tasks in Google Cloud",category:"skill",pointsContribution:.5,description:"Deploy Cloud SQL instances, Cloud Storage buckets, and Cloud Monitoring dashboards.",season:"Season 2026",isVerified:!0},{name:"Build a Website on Google Cloud",category:"skill",pointsContribution:.5,description:"Host static and dynamic web applications with Cloud Run, Cloud CDN, and Cloud Build.",season:"Season 2026",isVerified:!0},{name:"Set Up and Configure a Cloud Environment in Google Cloud",category:"skill",pointsContribution:.5,description:"Billing accounts, resource hierarchies, folders, and enterprise organizations.",season:"Season 2026",isVerified:!0},{name:"Deploy and Manage Cloud Environments with Google Cloud",category:"skill",pointsContribution:.5,description:"Automate infrastructure as code using Terraform and Cloud Deployment Manager.",season:"Season 2026",isVerified:!0},{name:"Automating Infrastructure on Google Cloud with Terraform",category:"skill",pointsContribution:.5,description:"Terraform state management, modules, and multi-region deployment automation.",season:"Season 2026",isVerified:!0},{name:"Explore Machine Learning Models with Explainable AI",category:"skill",pointsContribution:.5,description:"What-If Tool, Shapley values, and model interpretability in Vertex AI.",season:"Season 2026",isVerified:!0},{name:"Prepare Data for ML APIs on Google Cloud",category:"skill",pointsContribution:.5,description:"Data cleansing, Feature Store pipelines, and Vision/NLP API integrations.",season:"Season 2026",isVerified:!0},{name:"Create and Manage Cloud Spanner Databases",category:"skill",pointsContribution:.5,description:"Globally distributed relational databases, split architecture, and read/write scaling.",season:"Season 2026",isVerified:!0},{name:"Insights from Data with BigQuery",category:"skill",pointsContribution:.5,description:"Partitioned tables, clustering, window functions, and BigQuery ML regression models.",season:"Season 2026",isVerified:!0},{name:"Build Google Cloud Infrastructure for AWS Professionals",category:"skill",pointsContribution:.5,description:"Cross-cloud architectural paradigms, IAM mapping, and dual-cloud networking.",season:"Season 2026",isVerified:!0},{name:"Engineer Data with Google Cloud Dataplex",category:"skill",pointsContribution:.5,description:"Data fabric governance, automatic schema discovery, and data quality check rules.",season:"Season 2026",isVerified:!0},{name:"Develop GenAI Apps with Gemini and Streamlit",category:"skill",pointsContribution:.5,description:"Streamlit frontends connected to Vertex AI Gemini 1.5 Pro and Flash with function calling.",season:"Season 2026",isVerified:!0},{name:"Arcade Milestone: Tier 1 Achiever (8 Skill Badges)",category:"milestone",pointsContribution:2,description:"Official Milestone bonus awarded for passing the first 8 verified skill badges.",season:"Season 2026",isVerified:!0},{name:"Arcade Milestone: Tier 2 Master (16 Skill Badges)",category:"milestone",pointsContribution:4,description:"Official Milestone bonus awarded for passing 16 verified skill badges.",season:"Season 2026",isVerified:!0},{name:"Arcade Milestone: Tier 3 Grand Champion (24 Skill Badges)",category:"milestone",pointsContribution:6,description:"Official Milestone bonus awarded for 24 verified skill badges.",season:"Season 2026",isVerified:!0},{name:"Arcade Certification Zone: Associate Cloud Engineer",category:"special",pointsContribution:2,description:"Verified certification study sprint and hands-on architecture pass.",season:"Season 2026",isVerified:!0},{name:"Arcade Special Sprint: Cloud Hero Hackathon 2026",category:"special",pointsContribution:2,description:"Live competitive speed-running cloud lab challenge bonus award.",season:"Season 2026",isVerified:!0}],zb=({isOpen:s,onClose:e,onAddBadge:t,existingBadgeNames:r})=>{const[o,l]=at.useState("catalog"),[u,d]=at.useState(""),[f,p]=at.useState(""),[x,v]=at.useState("skill"),[g,S]=at.useState(new Date().toISOString().split("T")[0]),[M,b]=at.useState(.5);if(at.useEffect(()=>{if(!s)return;const C=U=>{U.key==="Escape"&&e()};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[s,e]),!s)return null;const E=new Set(r.map(C=>C.toLowerCase().trim())),y=Bb.filter(C=>u===""||C.name.toLowerCase().includes(u.toLowerCase())),B=C=>{const U={id:`badge-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,name:C.name,category:C.category,dateEarned:new Date().toISOString().split("T")[0],pointsContribution:C.pointsContribution,description:C.description,season:C.season,isVerified:!0};t(U),$s({particleCount:30,spread:50,colors:["#F59E0B","#10B981"]})},F=C=>{C.preventDefault();const U=$l(f,120);if(!U)return;const O=Math.max(.5,Math.min(10,M||.5)),V=Sr(g),H={id:`custom-badge-${Date.now()}`,name:U,category:x,dateEarned:V,pointsContribution:O,isVerified:!0,season:"Season 2026"};t(H),$s({particleCount:40,spread:60,colors:["#EA580C","#F59E0B"]}),p(""),e()};return _.jsx("div",{onClick:e,className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn",children:_.jsxs("div",{onClick:C=>C.stopPropagation(),className:"bg-white rounded-3xl max-w-2xl w-full border border-[#EADBCE] shadow-2xl overflow-hidden",children:[_.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]",children:[_.jsxs("div",{children:[_.jsx("span",{className:"font-pixel text-[10px] text-[#B45309] font-bold uppercase",children:"Badge Catalog"}),_.jsx("h3",{className:"font-display font-bold text-xl text-stone-900 mt-0.5",children:"Add Badge to Calculation"})]}),_.jsx("button",{onClick:e,className:"p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 rounded-xl transition",children:_.jsx(bf,{className:"w-5 h-5"})})]}),_.jsxs("div",{className:"flex border-b border-[#EADBCE] bg-[#FAF7F2]/50 px-6 pt-2",children:[_.jsx("button",{onClick:()=>l("catalog"),className:`px-4 py-2.5 text-xs font-bold border-b-2 transition ${o==="catalog"?"border-[#B45309] text-[#B45309]":"border-transparent text-stone-500 hover:text-stone-800"}`,children:"Official Badge Catalog"}),_.jsx("button",{onClick:()=>l("custom"),className:`px-4 py-2.5 text-xs font-bold border-b-2 transition ${o==="custom"?"border-[#B45309] text-[#B45309]":"border-transparent text-stone-500 hover:text-stone-800"}`,children:"Create Custom Badge"})]}),_.jsx("div",{className:"p-6 max-h-[65vh] overflow-y-auto",children:o==="catalog"?_.jsxs("div",{children:[_.jsxs("div",{className:"relative mb-4",children:[_.jsx(qg,{className:"w-4 h-4 absolute left-3.5 top-3 text-stone-400"}),_.jsx("input",{type:"text",maxLength:100,value:u,onChange:C=>d(C.target.value),placeholder:"Search official games, trivia, skill badges...",className:"w-full pl-10 pr-4 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),_.jsx("div",{className:"space-y-2",children:y.map((C,U)=>{const O=E.has(C.name.toLowerCase().trim());return _.jsxs("div",{className:"p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] flex items-center justify-between transition",children:[_.jsxs("div",{className:"pr-4",children:[_.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[_.jsx("span",{className:"text-[10px] font-mono px-2 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:C.category.toUpperCase()}),_.jsxs("span",{className:"font-pixel text-[10px] text-[#B45309]",children:["+",C.pointsContribution," pt"]})]}),_.jsx("h5",{className:"font-sans font-bold text-xs sm:text-sm text-stone-800",children:C.name})]}),_.jsx("button",{onClick:()=>B(C),disabled:O,className:`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans transition flex items-center gap-1 shrink-0 ${O?"bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] cursor-default":"bg-[#B45309] hover:bg-[#92400E] text-white shadow-sm"}`,children:O?_.jsxs(_.Fragment,{children:[_.jsx(Wv,{className:"w-3.5 h-3.5"})," Added"]}):_.jsxs(_.Fragment,{children:[_.jsx(Xg,{className:"w-3.5 h-3.5"})," Add"]})})]},U)})})]}):_.jsxs("form",{onSubmit:F,className:"space-y-4",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Badge Title:"}),_.jsx("input",{type:"text",required:!0,maxLength:120,value:f,onChange:C=>p(C.target.value),placeholder:"e.g. Google Cloud Certified Professional Cloud Architect",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),_.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Category:"}),_.jsxs("select",{value:x,onChange:C=>{const U=C.target.value;v(U),b(U==="game"||U==="trivia"?1:U==="skill"?.5:2)},className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]",children:[_.jsx("option",{value:"skill",children:"Skill Badge (1/2 pool)"}),_.jsx("option",{value:"game",children:"Arcade Game (1 pt)"}),_.jsx("option",{value:"trivia",children:"Trivia Badge (1 pt)"}),_.jsx("option",{value:"milestone",children:"Milestone Bonus (2-6 pts)"}),_.jsx("option",{value:"special",children:"Special Sprint / Cert (2 pts)"})]})]}),_.jsxs("div",{children:[_.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Completion Date:"}),_.jsx("input",{type:"date",required:!0,value:g,onChange:C=>S(C.target.value),className:"w-full px-3.5 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]})]}),_.jsxs("div",{children:[_.jsxs("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:["Points Contribution (",M," pt):"]}),_.jsx("input",{type:"number",step:"0.5",min:"0.5",max:"10",value:M,onChange:C=>b(parseFloat(C.target.value)||.5),className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),_.jsxs("div",{className:"flex justify-end gap-2 pt-3 border-t border-[#EADBCE]",children:[_.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl",children:"Cancel"}),_.jsx("button",{type:"submit",disabled:!f.trim(),className:"px-5 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-bold rounded-xl shadow-arcade-amber hover:shadow-sm transition disabled:opacity-50",children:"Add Custom Badge"})]})]})})]})})},Vb=({isOpen:s,onClose:e,skillRatio:t,onSkillRatioChange:r,onResetToDefaults:o})=>(at.useEffect(()=>{if(!s)return;const l=u=>{u.key==="Escape"&&e()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[s,e]),s?_.jsx("div",{onClick:e,className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn",children:_.jsxs("div",{onClick:l=>l.stopPropagation(),className:"bg-white rounded-3xl max-w-md w-full border border-[#EADBCE] shadow-2xl overflow-hidden",children:[_.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]",children:[_.jsxs("div",{children:[_.jsx("span",{className:"font-pixel text-[10px] text-[#B45309] font-bold uppercase",children:"Calculation Engine"}),_.jsx("h3",{className:"font-display font-bold text-xl text-stone-900 mt-0.5",children:"Arcade Rules & Ratios"})]}),_.jsx("button",{onClick:e,className:"p-2 text-stone-400 hover:text-stone-800 rounded-xl transition",children:_.jsx(bf,{className:"w-5 h-5"})})]}),_.jsxs("div",{className:"p-6 space-y-5",children:[_.jsxs("div",{children:[_.jsxs("label",{className:"block text-xs font-bold text-stone-800 font-sans mb-1.5 flex items-center justify-between",children:[_.jsx("span",{children:"Skill Badge Points Ratio:"}),_.jsxs("span",{className:"font-mono text-[#B45309] font-bold",children:["1 pt per ",t," ",t===1?"badge":"badges"]})]}),_.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{ratio:1,label:"1 pt per badge"},{ratio:2,label:"1 pt per 2 badges (Default)"},{ratio:3,label:"1 pt per 3 badges"}].map(l=>_.jsx("button",{onClick:()=>r(l.ratio),className:`p-2.5 rounded-xl border text-xs font-semibold font-sans transition ${t===l.ratio?"bg-[#FEF3C7] border-[#B45309] text-[#B45309] ring-2 ring-[#F59E0B]/30":"bg-[#FAF7F2] border-[#EADBCE] text-stone-600 hover:bg-[#F4ECE1]"}`,children:l.label},l.ratio))}),_.jsxs("p",{className:"text-[11px] text-stone-500 mt-1.5 flex items-center gap-1 font-sans",children:[_.jsx(f_,{className:"w-3.5 h-3.5 text-stone-400"}),"Standard Google Cloud Arcade 2026 awards 1 point per 2 verified skill badges."]})]}),_.jsxs("div",{className:"pt-4 border-t border-[#EADBCE] flex items-center justify-between",children:[_.jsxs("button",{onClick:()=>{window.confirm("Reset all saved profiles and points data to original defaults?")&&(o(),e())},className:"text-xs text-rose-700 hover:text-rose-900 font-semibold flex items-center gap-1.5",children:[_.jsx(Mf,{className:"w-3.5 h-3.5"}),"Reset All to Defaults"]}),_.jsx("button",{onClick:e,className:"px-4 py-2 bg-[#292524] text-white text-xs font-bold rounded-xl",children:"Done"})]})]})]})}):null);function Hb(){const[s,e]=at.useState([]),[t,r]=at.useState(""),[o,l]=at.useState(2),[u,d]=at.useState("calculator"),[f,p]=at.useState(!1),[x,v]=at.useState(!1),[g,S]=at.useState(!1);at.useEffect(()=>{const P=na();e(P);const R=Td();r(R),l(Fv())},[]);const M=at.useMemo(()=>!s||s.length===0?Yr[0]:s.find(R=>R.id===t)||s[0],[s,t]);at.useEffect(()=>{M&&M.profileUrl&&M.badges.length===0&&Fg(M.profileUrl).then(P=>{if(P.badges.length>0){const R=Hu(M.id,P.badges);e(R)}}).catch(P=>{console.warn("Auto-fetch initial profile failed:",P)})},[M.id,M.profileUrl,M.badges.length]);const b=at.useMemo(()=>zg(M.badges,o),[M.badges,o]),E=at.useMemo(()=>Vg(M.badges,b),[M.badges,b]),y=P=>{r(P),Ko(P)},B=P=>{const R=Cd(P);e(R),r(P.id)},F=P=>{const R=Lv(P);e(R),r(Td())},C=P=>{const R=Cd(P);e(R),r(P.id)},U=P=>{const R=[P,...M.badges],k=Hu(M.id,R);e(k)},O=P=>{const R=M.badges.filter(J=>J.id!==P),k=Hu(M.id,R);e(k)},V=P=>{l(P),_m(P)},H=()=>{no(Yr),Ko(Yr[0].id),e(Yr),r(Yr[0].id),l(2),_m(2)};return _.jsxs("div",{className:"min-h-screen bg-[#FAF7F2] text-[#292524] arcade-grid-bg flex flex-col font-sans selection:bg-[#FDE68A] selection:text-[#78350F]",children:[_.jsx(j_,{currentProfile:M,profiles:s,onOpenProfileSwitcher:()=>p(!0),onOpenSettings:()=>S(!0),activeTab:u,setActiveTab:d,totalPoints:b.totalPoints}),_.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8",children:[_.jsx(W_,{currentProfile:M,onProfileLoaded:C,onOpenAddBadge:()=>v(!0)}),u==="calculator"&&_.jsxs("div",{className:"space-y-6 sm:space-y-8 animate-fadeIn",children:[_.jsx(Ib,{breakdown:b,currentProfile:M,onOpenBadgesTab:()=>d("badges"),onOpenSwagTab:()=>d("swag")}),_.jsx(Ng,{frequency:E,breakdown:b,onOpenAddBadge:()=>v(!0)}),_.jsx(bd,{breakdown:b})]}),u==="frequency"&&_.jsxs("div",{className:"space-y-6 sm:space-y-8 animate-fadeIn",children:[_.jsx(Ng,{frequency:E,breakdown:b,onOpenAddBadge:()=>v(!0)}),_.jsx(bd,{breakdown:b})]}),u==="badges"&&_.jsx("div",{className:"animate-fadeIn",children:_.jsx(Ub,{badges:M.badges,onAddBadgeClick:()=>v(!0),onDeleteBadge:O})}),u==="swag"&&_.jsx("div",{className:"animate-fadeIn",children:_.jsx(kb,{breakdown:b})}),u==="simulator"&&_.jsx("div",{className:"animate-fadeIn",children:_.jsx(bd,{breakdown:b})})]}),_.jsx("footer",{className:"bg-white border-t border-[#EADBCE] mt-12 py-8 text-stone-600 text-xs",children:_.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4",children:[_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#FEF3C7] text-[#B45309] flex items-center justify-center font-pixel text-[9px] font-bold border border-[#FDE68A]",children:"🕹️"}),_.jsx("span",{className:"font-display font-bold text-stone-800",children:"Google Cloud Arcade Calculator"}),_.jsx("span",{className:"text-stone-400",children:"•"}),_.jsx("span",{children:"Season 2026 Engine"})]}),_.jsxs("div",{className:"flex items-center gap-4 text-stone-500 font-sans",children:[_.jsx("span",{children:"Points Auto-Saved to Browser Storage"}),_.jsx("span",{children:"•"}),_.jsx("button",{onClick:()=>S(!0),className:"text-[#B45309] hover:underline font-semibold",children:"Calculation Rules"}),_.jsx("span",{children:"•"}),_.jsxs("button",{onClick:()=>p(!0),className:"text-[#059669] hover:underline font-semibold",children:["Saved Accounts (",s.length,")"]})]})]})}),_.jsx(Ob,{isOpen:f,onClose:()=>p(!1),profiles:s,currentProfile:M,onSelectProfile:y,onCreateProfile:B,onDeleteProfile:F}),_.jsx(zb,{isOpen:x,onClose:()=>v(!1),onAddBadge:U,existingBadgeNames:M.badges.map(P=>P.name)}),_.jsx(Vb,{isOpen:g,onClose:()=>S(!1),skillRatio:o,onSkillRatioChange:V,onResetToDefaults:H})]})}class Gb extends at.Component{constructor(){super(...arguments);Iu(this,"state",{hasError:!1,error:null,errorInfo:null});Iu(this,"handleReset",()=>{try{no(Yr),Ko(Yr[0].id),window.location.reload()}catch{window.location.reload()}})}static getDerivedStateFromError(t){return{hasError:!0,error:t,errorInfo:null}}componentDidCatch(t,r){console.error("Uncaught error caught by Arcade ErrorBoundary:",t,r),this.setState({errorInfo:r})}render(){return this.state.hasError?_.jsx("div",{className:"min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 text-stone-800 font-sans",children:_.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-lg w-full border border-[#EADBCE] shadow-2xl text-center",children:[_.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mx-auto mb-4 border border-[#FDE68A]",children:_.jsx(F_,{className:"w-8 h-8"})}),_.jsx("span",{className:"font-pixel text-xs text-[#B45309] font-bold uppercase tracking-wider block mb-1",children:"System Recovery Mode"}),_.jsx("h2",{className:"font-display font-bold text-2xl text-stone-900 mb-2",children:"Something went sideways"}),_.jsx("p",{className:"text-stone-600 text-sm mb-6 leading-relaxed",children:"An unexpected display glitch occurred. Your saved accounts are safe in browser memory."}),this.state.error&&_.jsx("div",{className:"p-3 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] text-left text-xs font-mono text-stone-600 mb-6 overflow-x-auto max-h-32",children:this.state.error.toString()}),_.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[_.jsxs("button",{onClick:()=>window.location.reload(),className:"px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white rounded-xl text-xs sm:text-sm font-bold shadow-arcade-amber hover:shadow-sm transition flex items-center justify-center gap-2",children:[_.jsx(u_,{className:"w-4 h-4"}),"Reload Application"]}),_.jsxs("button",{onClick:this.handleReset,className:"px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F4ECE1] text-stone-700 border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2",children:[_.jsx(Mf,{className:"w-4 h-4"}),"Reset to Safe Defaults"]})]})]})}):this.props.children}}Nv.createRoot(document.getElementById("root")).render(_.jsx(wv.StrictMode,{children:_.jsx(Gb,{children:_.jsx(Hb,{})})}));
