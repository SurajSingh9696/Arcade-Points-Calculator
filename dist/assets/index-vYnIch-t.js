var gv=Object.defineProperty;var xv=(s,e,t)=>e in s?gv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ku=(s,e,t)=>xv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Pg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ou={exports:{}},Oo={},Bu={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function vv(){if(am)return yt;am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function x(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function E(w,W,ye){this.props=w,this.context=W,this.refs=C,this.updater=ye||y}E.prototype.isReactComponent={},E.prototype.setState=function(w,W){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,W,"setState")},E.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function S(){}S.prototype=E.prototype;function O(w,W,ye){this.props=w,this.context=W,this.refs=C,this.updater=ye||y}var F=O.prototype=new S;F.constructor=O,M(F,E.prototype),F.isPureReactComponent=!0;var A=Array.isArray,I=Object.prototype.hasOwnProperty,B={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function H(w,W,ye){var X,re={},fe=null,ie=null;if(W!=null)for(X in W.ref!==void 0&&(ie=W.ref),W.key!==void 0&&(fe=""+W.key),W)I.call(W,X)&&!V.hasOwnProperty(X)&&(re[X]=W[X]);var xe=arguments.length-2;if(xe===1)re.children=ye;else if(1<xe){for(var Le=Array(xe),Ae=0;Ae<xe;Ae++)Le[Ae]=arguments[Ae+2];re.children=Le}if(w&&w.defaultProps)for(X in xe=w.defaultProps,xe)re[X]===void 0&&(re[X]=xe[X]);return{$$typeof:s,type:w,key:fe,ref:ie,props:re,_owner:B.current}}function P(w,W){return{$$typeof:s,type:w.type,key:W,ref:w.ref,props:w.props,_owner:w._owner}}function R(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function k(w){var W={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ye){return W[ye]})}var J=/\/+/g;function Z(w,W){return typeof w=="object"&&w!==null&&w.key!=null?k(""+w.key):W.toString(36)}function oe(w,W,ye,X,re){var fe=typeof w;(fe==="undefined"||fe==="boolean")&&(w=null);var ie=!1;if(w===null)ie=!0;else switch(fe){case"string":case"number":ie=!0;break;case"object":switch(w.$$typeof){case s:case e:ie=!0}}if(ie)return ie=w,re=re(ie),w=X===""?"."+Z(ie,0):X,A(re)?(ye="",w!=null&&(ye=w.replace(J,"$&/")+"/"),oe(re,W,ye,"",function(Ae){return Ae})):re!=null&&(R(re)&&(re=P(re,ye+(!re.key||ie&&ie.key===re.key?"":(""+re.key).replace(J,"$&/")+"/")+w)),W.push(re)),1;if(ie=0,X=X===""?".":X+":",A(w))for(var xe=0;xe<w.length;xe++){fe=w[xe];var Le=X+Z(fe,xe);ie+=oe(fe,W,ye,Le,re)}else if(Le=x(w),typeof Le=="function")for(w=Le.call(w),xe=0;!(fe=w.next()).done;)fe=fe.value,Le=X+Z(fe,xe++),ie+=oe(fe,W,ye,Le,re);else if(fe==="object")throw W=String(w),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.");return ie}function ue(w,W,ye){if(w==null)return w;var X=[],re=0;return oe(w,X,"","",function(fe){return W.call(ye,fe,re++)}),X}function ae(w){if(w._status===-1){var W=w._result;W=W(),W.then(function(ye){(w._status===0||w._status===-1)&&(w._status=1,w._result=ye)},function(ye){(w._status===0||w._status===-1)&&(w._status=2,w._result=ye)}),w._status===-1&&(w._status=0,w._result=W)}if(w._status===1)return w._result.default;throw w._result}var pe={current:null},j={transition:null},de={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:j,ReactCurrentOwner:B};function U(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:ue,forEach:function(w,W,ye){ue(w,function(){W.apply(this,arguments)},ye)},count:function(w){var W=0;return ue(w,function(){W++}),W},toArray:function(w){return ue(w,function(W){return W})||[]},only:function(w){if(!R(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},yt.Component=E,yt.Fragment=t,yt.Profiler=o,yt.PureComponent=O,yt.StrictMode=r,yt.Suspense=f,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,yt.act=U,yt.cloneElement=function(w,W,ye){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var X=M({},w.props),re=w.key,fe=w.ref,ie=w._owner;if(W!=null){if(W.ref!==void 0&&(fe=W.ref,ie=B.current),W.key!==void 0&&(re=""+W.key),w.type&&w.type.defaultProps)var xe=w.type.defaultProps;for(Le in W)I.call(W,Le)&&!V.hasOwnProperty(Le)&&(X[Le]=W[Le]===void 0&&xe!==void 0?xe[Le]:W[Le])}var Le=arguments.length-2;if(Le===1)X.children=ye;else if(1<Le){xe=Array(Le);for(var Ae=0;Ae<Le;Ae++)xe[Ae]=arguments[Ae+2];X.children=xe}return{$$typeof:s,type:w.type,key:re,ref:fe,props:X,_owner:ie}},yt.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},yt.createElement=H,yt.createFactory=function(w){var W=H.bind(null,w);return W.type=w,W},yt.createRef=function(){return{current:null}},yt.forwardRef=function(w){return{$$typeof:d,render:w}},yt.isValidElement=R,yt.lazy=function(w){return{$$typeof:m,_payload:{_status:-1,_result:w},_init:ae}},yt.memo=function(w,W){return{$$typeof:p,type:w,compare:W===void 0?null:W}},yt.startTransition=function(w){var W=j.transition;j.transition={};try{w()}finally{j.transition=W}},yt.unstable_act=U,yt.useCallback=function(w,W){return pe.current.useCallback(w,W)},yt.useContext=function(w){return pe.current.useContext(w)},yt.useDebugValue=function(){},yt.useDeferredValue=function(w){return pe.current.useDeferredValue(w)},yt.useEffect=function(w,W){return pe.current.useEffect(w,W)},yt.useId=function(){return pe.current.useId()},yt.useImperativeHandle=function(w,W,ye){return pe.current.useImperativeHandle(w,W,ye)},yt.useInsertionEffect=function(w,W){return pe.current.useInsertionEffect(w,W)},yt.useLayoutEffect=function(w,W){return pe.current.useLayoutEffect(w,W)},yt.useMemo=function(w,W){return pe.current.useMemo(w,W)},yt.useReducer=function(w,W,ye){return pe.current.useReducer(w,W,ye)},yt.useRef=function(w){return pe.current.useRef(w)},yt.useState=function(w){return pe.current.useState(w)},yt.useSyncExternalStore=function(w,W,ye){return pe.current.useSyncExternalStore(w,W,ye)},yt.useTransition=function(){return pe.current.useTransition()},yt.version="18.3.1",yt}var lm;function Sf(){return lm||(lm=1,Bu.exports=vv()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function _v(){if(cm)return Oo;cm=1;var s=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var m,_={},x=null,y=null;p!==void 0&&(x=""+p),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(y=f.ref);for(m in f)r.call(f,m)&&!l.hasOwnProperty(m)&&(_[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)_[m]===void 0&&(_[m]=f[m]);return{$$typeof:e,type:d,key:x,ref:y,props:_,_owner:o.current}}return Oo.Fragment=t,Oo.jsx=u,Oo.jsxs=u,Oo}var um;function yv(){return um||(um=1,Ou.exports=_v()),Ou.exports}var v=yv(),at=Sf();const Sv=Pg(at);var pl={},zu={exports:{}},Fn={},Vu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Ev(){return dm||(dm=1,(function(s){function e(j,de){var U=j.length;j.push(de);e:for(;0<U;){var w=U-1>>>1,W=j[w];if(0<o(W,de))j[w]=de,j[U]=W,U=w;else break e}}function t(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var de=j[0],U=j.pop();if(U!==de){j[0]=U;e:for(var w=0,W=j.length,ye=W>>>1;w<ye;){var X=2*(w+1)-1,re=j[X],fe=X+1,ie=j[fe];if(0>o(re,U))fe<W&&0>o(ie,re)?(j[w]=ie,j[fe]=U,w=fe):(j[w]=re,j[X]=U,w=X);else if(fe<W&&0>o(ie,U))j[w]=ie,j[fe]=U,w=fe;else break e}}return de}function o(j,de){var U=j.sortIndex-de.sortIndex;return U!==0?U:j.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],m=1,_=null,x=3,y=!1,M=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(j){for(var de=t(p);de!==null;){if(de.callback===null)r(p);else if(de.startTime<=j)r(p),de.sortIndex=de.expirationTime,e(f,de);else break;de=t(p)}}function A(j){if(C=!1,F(j),!M)if(t(f)!==null)M=!0,ae(I);else{var de=t(p);de!==null&&pe(A,de.startTime-j)}}function I(j,de){M=!1,C&&(C=!1,S(H),H=-1),y=!0;var U=x;try{for(F(de),_=t(f);_!==null&&(!(_.expirationTime>de)||j&&!k());){var w=_.callback;if(typeof w=="function"){_.callback=null,x=_.priorityLevel;var W=w(_.expirationTime<=de);de=s.unstable_now(),typeof W=="function"?_.callback=W:_===t(f)&&r(f),F(de)}else r(f);_=t(f)}if(_!==null)var ye=!0;else{var X=t(p);X!==null&&pe(A,X.startTime-de),ye=!1}return ye}finally{_=null,x=U,y=!1}}var B=!1,V=null,H=-1,P=5,R=-1;function k(){return!(s.unstable_now()-R<P)}function J(){if(V!==null){var j=s.unstable_now();R=j;var de=!0;try{de=V(!0,j)}finally{de?Z():(B=!1,V=null)}}else B=!1}var Z;if(typeof O=="function")Z=function(){O(J)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ue=oe.port2;oe.port1.onmessage=J,Z=function(){ue.postMessage(null)}}else Z=function(){E(J,0)};function ae(j){V=j,B||(B=!0,Z())}function pe(j,de){H=E(function(){j(s.unstable_now())},de)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ae(I))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(j){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var U=x;x=de;try{return j()}finally{x=U}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,de){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var U=x;x=j;try{return de()}finally{x=U}},s.unstable_scheduleCallback=function(j,de,U){var w=s.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?w+U:w):U=w,j){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=U+W,j={id:m++,callback:de,priorityLevel:j,startTime:U,expirationTime:W,sortIndex:-1},U>w?(j.sortIndex=U,e(p,j),t(f)===null&&j===t(p)&&(C?(S(H),H=-1):C=!0,pe(A,U-w))):(j.sortIndex=W,e(f,j),M||y||(M=!0,ae(I))),j},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(j){var de=x;return function(){var U=x;x=de;try{return j.apply(this,arguments)}finally{x=U}}}})(Hu)),Hu}var fm;function Mv(){return fm||(fm=1,Vu.exports=Ev()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function wv(){if(hm)return Fn;hm=1;var s=Sf(),e=Mv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function x(n){return f.call(_,n)?!0:f.call(m,n)?!1:p.test(n)?_[n]=!0:(m[n]=!0,!1)}function y(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||y(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,h,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){E[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];E[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){E[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){E[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){E[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){E[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){E[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){E[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){E[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function O(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,O);E[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,O);E[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,O);E[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){E[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),E.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){E[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var h=E.hasOwnProperty(i)?E[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,h,c)&&(a=null),c||h===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),B=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),k=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),j=Symbol.iterator;function de(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var U=Object.assign,w;function W(n){if(w===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+n}var ye=!1;function X(n,i){if(!n||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),g=c.stack.split(`
`),b=h.length-1,z=g.length-1;1<=b&&0<=z&&h[b]!==g[z];)z--;for(;1<=b&&0<=z;b--,z--)if(h[b]!==g[z]){if(b!==1||z!==1)do if(b--,z--,0>z||h[b]!==g[z]){var G=`
`+h[b].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=b&&0<=z);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?W(n):""}function re(n){switch(n.tag){case 5:return W(n.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return n=X(n.type,!1),n;case 11:return n=X(n.type.render,!1),n;case 1:return n=X(n.type,!0),n;default:return""}}function fe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case B:return"Portal";case P:return"Profiler";case H:return"StrictMode";case Z:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ue:return i=n.displayName||null,i!==null?i:fe(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return fe(n(i))}catch{}}return null}function ie(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Le(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ae(n){var i=Le(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function $e(n){n._valueTracker||(n._valueTracker=Ae(n))}function ve(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Le(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ge(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function D(n,i){var a=i.checked;return U({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ue(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=xe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ee(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function Fe(n,i){Ee(n,i);var a=xe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(n,i.type,a):i.hasOwnProperty("defaultValue")&&Qe(n,i.type,xe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Te(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Qe(n,i,a){(i!=="number"||ge(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ne=Array.isArray;function L(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+xe(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return U({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ee(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ne(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:xe(a)}}function me(n,i){var a=xe(i.value),c=xe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Me(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function _e(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?_e(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ft(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xe=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(n){Xe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ce[i]=Ce[n]})});function rt(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ce.hasOwnProperty(n)&&Ce[n]?(""+i).trim():i+"px"}function ct(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=rt(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ze=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _t(n,i){if(i){if(Ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ht(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function $(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ke=null,he=null,Se=null;function Ge(n){if(n=Mo(n)){if(typeof ke!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ra(i),ke(n.stateNode,n.type,i))}}function ze(n){he?Se?Se.push(n):Se=[n]:he=n}function pt(){if(he){var n=he,i=Se;if(Se=he=null,Ge(n),i)for(n=0;n<i.length;n++)Ge(i[n])}}function Ut(n,i){return n(i)}function Kt(){}var bt=!1;function An(n,i,a){if(bt)return n(i,a);bt=!0;try{return Ut(n,i,a)}finally{bt=!1,(he!==null||Se!==null)&&(Kt(),pt())}}function Sn(n,i){var a=n.stateNode;if(a===null)return null;var c=Ra(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var is=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){is=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{is=!1}function bi(n,i,a,c,h,g,b,z,G){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(be){this.onError(be)}}var Ci=!1,Tr=null,Ar=!1,$i=null,aa={onError:function(n){Ci=!0,Tr=n}};function rs(n,i,a,c,h,g,b,z,G){Ci=!1,Tr=null,bi.apply(aa,arguments)}function la(n,i,a,c,h,g,b,z,G){if(rs.apply(this,arguments),Ci){if(Ci){var ce=Tr;Ci=!1,Tr=null}else throw Error(t(198));Ar||(Ar=!0,$i=ce)}}function mi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ca(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ua(n){if(mi(n)!==n)throw Error(t(188))}function oc(n){var i=n.alternate;if(!i){if(i=mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return ua(h),n;if(g===c)return ua(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var b=!1,z=h.child;z;){if(z===a){b=!0,a=h,c=g;break}if(z===c){b=!0,c=h,a=g;break}z=z.sibling}if(!b){for(z=g.child;z;){if(z===a){b=!0,a=g,c=h;break}if(z===c){b=!0,c=g,a=h;break}z=z.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function da(n){return n=oc(n),n!==null?fa(n):null}function fa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fa(n);if(i!==null)return i;n=n.sibling}return null}var ha=e.unstable_scheduleCallback,N=e.unstable_cancelCallback,K=e.unstable_shouldYield,le=e.unstable_requestPaint,ne=e.unstable_now,Q=e.unstable_getCurrentPriorityLevel,Pe=e.unstable_ImmediatePriority,Oe=e.unstable_UserBlockingPriority,je=e.unstable_NormalPriority,Ke=e.unstable_LowPriority,ut=e.unstable_IdlePriority,lt=null,et=null;function Mt(n){if(et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(lt,n,void 0,(n.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:wt,Wt=Math.log,zt=Math.LN2;function wt(n){return n>>>=0,n===0?32:31-(Wt(n)/zt|0)|0}var it=64,Xt=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hn(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,b=a&268435455;if(b!==0){var z=b&~h;z!==0?c=Et(z):(g&=b,g!==0&&(c=Et(g)))}else b=a&~h,b!==0?c=Et(b):g!==0&&(c=Et(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-mt(i),h=1<<a,c|=n[a],i&=~h;return c}function Yi(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-mt(g),z=1<<b,G=h[b];G===-1?((z&a)===0||(z&c)!==0)&&(h[b]=Yi(z,i)):G<=i&&(n.expiredLanes|=z),g&=~z}}function Ti(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ft(){var n=it;return it<<=1,(it&4194240)===0&&(it=64),n}function pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function nn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-mt(i),n[i]=a}function cn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-mt(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function rn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-mt(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Ct=0;function gi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zf,ac,Vf,Hf,Gf,lc=!1,pa=[],Zi=null,Ki=null,Ji=null,oo=new Map,ao=new Map,Qi=[],O0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ki=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":oo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(i.pointerId)}}function lo(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Mo(i),i!==null&&ac(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function B0(n,i,a,c,h){switch(i){case"focusin":return Zi=lo(Zi,n,i,a,c,h),!0;case"dragenter":return Ki=lo(Ki,n,i,a,c,h),!0;case"mouseover":return Ji=lo(Ji,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return oo.set(g,lo(oo.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ao.set(g,lo(ao.get(g)||null,n,i,a,c,h)),!0}return!1}function Wf(n){var i=Rr(n.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=ca(a),i!==null){n.blockedOn=i,Gf(n.priority,function(){Vf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ma(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Nt=c,a.target.dispatchEvent(c),Nt=null}else return i=Mo(a),i!==null&&ac(i),n.blockedOn=a,!1;i.shift()}return!0}function Xf(n,i,a){ma(n)&&a.delete(i)}function z0(){lc=!1,Zi!==null&&ma(Zi)&&(Zi=null),Ki!==null&&ma(Ki)&&(Ki=null),Ji!==null&&ma(Ji)&&(Ji=null),oo.forEach(Xf),ao.forEach(Xf)}function co(n,i){n.blockedOn===i&&(n.blockedOn=null,lc||(lc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,z0)))}function uo(n){function i(h){return co(h,n)}if(0<pa.length){co(pa[0],n);for(var a=1;a<pa.length;a++){var c=pa[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Zi!==null&&co(Zi,n),Ki!==null&&co(Ki,n),Ji!==null&&co(Ji,n),oo.forEach(i),ao.forEach(i),a=0;a<Qi.length;a++)c=Qi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Wf(a),a.blockedOn===null&&Qi.shift()}var ss=A.ReactCurrentBatchConfig,ga=!0;function V0(n,i,a,c){var h=Ct,g=ss.transition;ss.transition=null;try{Ct=1,cc(n,i,a,c)}finally{Ct=h,ss.transition=g}}function H0(n,i,a,c){var h=Ct,g=ss.transition;ss.transition=null;try{Ct=4,cc(n,i,a,c)}finally{Ct=h,ss.transition=g}}function cc(n,i,a,c){if(ga){var h=uc(n,i,a,c);if(h===null)Tc(n,i,c,xa,a),jf(n,c);else if(B0(h,n,i,a,c))c.stopPropagation();else if(jf(n,c),i&4&&-1<O0.indexOf(n)){for(;h!==null;){var g=Mo(h);if(g!==null&&zf(g),g=uc(n,i,a,c),g===null&&Tc(n,i,c,xa,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Tc(n,i,c,null,a)}}var xa=null;function uc(n,i,a,c){if(xa=null,n=$(c),n=Rr(n),n!==null)if(i=mi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ca(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return xa=n,null}function qf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q()){case Pe:return 1;case Oe:return 4;case je:case Ke:return 16;case ut:return 536870912;default:return 16}default:return 16}}var er=null,dc=null,va=null;function $f(){if(va)return va;var n,i=dc,a=i.length,c,h="value"in er?er.value:er.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===h[g-c];c++);return va=h.slice(n,1<c?1-c:void 0)}function _a(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ya(){return!0}function Yf(){return!1}function Bn(n){function i(a,c,h,g,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(g):g[z]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ya:Yf,this.isPropagationStopped=Yf,this}return U(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ya)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ya)},persist:function(){},isPersistent:ya}),i}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fc=Bn(os),fo=U({},os,{view:0,detail:0}),G0=Bn(fo),hc,pc,ho,Sa=U({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ho&&(ho&&n.type==="mousemove"?(hc=n.screenX-ho.screenX,pc=n.screenY-ho.screenY):pc=hc=0,ho=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:pc}}),Zf=Bn(Sa),j0=U({},Sa,{dataTransfer:0}),W0=Bn(j0),X0=U({},fo,{relatedTarget:0}),mc=Bn(X0),q0=U({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),$0=Bn(q0),Y0=U({},os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Z0=Bn(Y0),K0=U({},os,{data:0}),Kf=Bn(K0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ex[n])?!!i[n]:!1}function gc(){return tx}var nx=U({},fo,{key:function(n){if(n.key){var i=J0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=_a(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Q0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gc,charCode:function(n){return n.type==="keypress"?_a(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?_a(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ix=Bn(nx),rx=U({},Sa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=Bn(rx),sx=U({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gc}),ox=Bn(sx),ax=U({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Bn(ax),cx=U({},Sa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Bn(cx),dx=[9,13,27,32],xc=d&&"CompositionEvent"in window,po=null;d&&"documentMode"in document&&(po=document.documentMode);var fx=d&&"TextEvent"in window&&!po,Qf=d&&(!xc||po&&8<po&&11>=po),eh=" ",th=!1;function nh(n,i){switch(n){case"keyup":return dx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ih(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function hx(n,i){switch(n){case"compositionend":return ih(i);case"keypress":return i.which!==32?null:(th=!0,eh);case"textInput":return n=i.data,n===eh&&th?null:n;default:return null}}function px(n,i){if(as)return n==="compositionend"||!xc&&nh(n,i)?(n=$f(),va=dc=er=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Qf&&i.locale!=="ko"?null:i.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!mx[n.type]:i==="textarea"}function sh(n,i,a,c){ze(c),i=Ca(i,"onChange"),0<i.length&&(a=new fc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var mo=null,go=null;function gx(n){Mh(n,0)}function Ea(n){var i=fs(n);if(ve(i))return n}function xx(n,i){if(n==="change")return i}var oh=!1;if(d){var vc;if(d){var _c="oninput"in document;if(!_c){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),_c=typeof ah.oninput=="function"}vc=_c}else vc=!1;oh=vc&&(!document.documentMode||9<document.documentMode)}function lh(){mo&&(mo.detachEvent("onpropertychange",ch),go=mo=null)}function ch(n){if(n.propertyName==="value"&&Ea(go)){var i=[];sh(i,go,n,$(n)),An(gx,i)}}function vx(n,i,a){n==="focusin"?(lh(),mo=i,go=a,mo.attachEvent("onpropertychange",ch)):n==="focusout"&&lh()}function _x(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ea(go)}function yx(n,i){if(n==="click")return Ea(i)}function Sx(n,i){if(n==="input"||n==="change")return Ea(i)}function Ex(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:Ex;function xo(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!ni(n[h],i[h]))return!1}return!0}function uh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dh(n,i){var a=uh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=uh(a)}}function fh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?fh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function hh(){for(var n=window,i=ge();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ge(n.document)}return i}function yc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Mx(n){var i=hh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&fh(a.ownerDocument.documentElement,a)){if(c!==null&&yc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=dh(a,g);var b=dh(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var wx=d&&"documentMode"in document&&11>=document.documentMode,ls=null,Sc=null,vo=null,Ec=!1;function ph(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||ls==null||ls!==ge(c)||(c=ls,"selectionStart"in c&&yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),vo&&xo(vo,c)||(vo=c,c=Ca(Sc,"onSelect"),0<c.length&&(i=new fc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ls)))}function Ma(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var cs={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},Mc={},mh={};d&&(mh=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function wa(n){if(Mc[n])return Mc[n];if(!cs[n])return n;var i=cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in mh)return Mc[n]=i[a];return n}var gh=wa("animationend"),xh=wa("animationiteration"),vh=wa("animationstart"),_h=wa("transitionend"),yh=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){yh.set(n,i),l(i,[n])}for(var wc=0;wc<Sh.length;wc++){var bc=Sh[wc],bx=bc.toLowerCase(),Cx=bc[0].toUpperCase()+bc.slice(1);tr(bx,"on"+Cx)}tr(gh,"onAnimationEnd"),tr(xh,"onAnimationIteration"),tr(vh,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(_h,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function Eh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,la(c,i,void 0,n),n.currentTarget=null}function Mh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var z=c[b],G=z.instance,ce=z.currentTarget;if(z=z.listener,G!==g&&h.isPropagationStopped())break e;Eh(h,z,ce),g=G}else for(b=0;b<c.length;b++){if(z=c[b],G=z.instance,ce=z.currentTarget,z=z.listener,G!==g&&h.isPropagationStopped())break e;Eh(h,z,ce),g=G}}}if(Ar)throw n=$i,Ar=!1,$i=null,n}function kt(n,i){var a=i[Lc];a===void 0&&(a=i[Lc]=new Set);var c=n+"__bubble";a.has(c)||(wh(i,n,2,!1),a.add(c))}function Cc(n,i,a){var c=0;i&&(c|=4),wh(a,n,c,i)}var ba="_reactListening"+Math.random().toString(36).slice(2);function yo(n){if(!n[ba]){n[ba]=!0,r.forEach(function(a){a!=="selectionchange"&&(Tx.has(a)||Cc(a,!1,n),Cc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ba]||(i[ba]=!0,Cc("selectionchange",!1,i))}}function wh(n,i,a,c){switch(qf(i)){case 1:var h=V0;break;case 4:h=H0;break;default:h=cc}a=h.bind(null,i,a,n),h=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Tc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var z=c.stateNode.containerInfo;if(z===h||z.nodeType===8&&z.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var G=b.tag;if((G===3||G===4)&&(G=b.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;b=b.return}for(;z!==null;){if(b=Rr(z),b===null)return;if(G=b.tag,G===5||G===6){c=g=b;continue e}z=z.parentNode}}c=c.return}An(function(){var ce=g,be=$(a),Re=[];e:{var we=yh.get(n);if(we!==void 0){var We=fc,Je=n;switch(n){case"keypress":if(_a(a)===0)break e;case"keydown":case"keyup":We=ix;break;case"focusin":Je="focus",We=mc;break;case"focusout":Je="blur",We=mc;break;case"beforeblur":case"afterblur":We=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=ox;break;case gh:case xh:case vh:We=$0;break;case _h:We=lx;break;case"scroll":We=G0;break;case"wheel":We=ux;break;case"copy":case"cut":case"paste":We=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Jf}var tt=(i&4)!==0,$t=!tt&&n==="scroll",te=tt?we!==null?we+"Capture":null:we;tt=[];for(var q=ce,se;q!==null;){se=q;var De=se.stateNode;if(se.tag===5&&De!==null&&(se=De,te!==null&&(De=Sn(q,te),De!=null&&tt.push(So(q,De,se)))),$t)break;q=q.return}0<tt.length&&(we=new We(we,Je,null,a,be),Re.push({event:we,listeners:tt}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",we&&a!==Nt&&(Je=a.relatedTarget||a.fromElement)&&(Rr(Je)||Je[Ai]))break e;if((We||we)&&(we=be.window===be?be:(we=be.ownerDocument)?we.defaultView||we.parentWindow:window,We?(Je=a.relatedTarget||a.toElement,We=ce,Je=Je?Rr(Je):null,Je!==null&&($t=mi(Je),Je!==$t||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(We=null,Je=ce),We!==Je)){if(tt=Zf,De="onMouseLeave",te="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(tt=Jf,De="onPointerLeave",te="onPointerEnter",q="pointer"),$t=We==null?we:fs(We),se=Je==null?we:fs(Je),we=new tt(De,q+"leave",We,a,be),we.target=$t,we.relatedTarget=se,De=null,Rr(be)===ce&&(tt=new tt(te,q+"enter",Je,a,be),tt.target=se,tt.relatedTarget=$t,De=tt),$t=De,We&&Je)t:{for(tt=We,te=Je,q=0,se=tt;se;se=us(se))q++;for(se=0,De=te;De;De=us(De))se++;for(;0<q-se;)tt=us(tt),q--;for(;0<se-q;)te=us(te),se--;for(;q--;){if(tt===te||te!==null&&tt===te.alternate)break t;tt=us(tt),te=us(te)}tt=null}else tt=null;We!==null&&bh(Re,we,We,tt,!1),Je!==null&&$t!==null&&bh(Re,$t,Je,tt,!0)}}e:{if(we=ce?fs(ce):window,We=we.nodeName&&we.nodeName.toLowerCase(),We==="select"||We==="input"&&we.type==="file")var nt=xx;else if(rh(we))if(oh)nt=Sx;else{nt=_x;var st=vx}else(We=we.nodeName)&&We.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(nt=yx);if(nt&&(nt=nt(n,ce))){sh(Re,nt,a,be);break e}st&&st(n,we,ce),n==="focusout"&&(st=we._wrapperState)&&st.controlled&&we.type==="number"&&Qe(we,"number",we.value)}switch(st=ce?fs(ce):window,n){case"focusin":(rh(st)||st.contentEditable==="true")&&(ls=st,Sc=ce,vo=null);break;case"focusout":vo=Sc=ls=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,ph(Re,a,be);break;case"selectionchange":if(wx)break;case"keydown":case"keyup":ph(Re,a,be)}var ot;if(xc)e:{switch(n){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else as?nh(n,a)&&(dt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(dt="onCompositionStart");dt&&(Qf&&a.locale!=="ko"&&(as||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&as&&(ot=$f()):(er=be,dc="value"in er?er.value:er.textContent,as=!0)),st=Ca(ce,dt),0<st.length&&(dt=new Kf(dt,n,null,a,be),Re.push({event:dt,listeners:st}),ot?dt.data=ot:(ot=ih(a),ot!==null&&(dt.data=ot)))),(ot=fx?hx(n,a):px(n,a))&&(ce=Ca(ce,"onBeforeInput"),0<ce.length&&(be=new Kf("onBeforeInput","beforeinput",null,a,be),Re.push({event:be,listeners:ce}),be.data=ot))}Mh(Re,i)})}function So(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ca(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Sn(n,a),g!=null&&c.unshift(So(n,g,h)),g=Sn(n,i),g!=null&&c.push(So(n,g,h))),n=n.return}return c}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bh(n,i,a,c,h){for(var g=i._reactName,b=[];a!==null&&a!==c;){var z=a,G=z.alternate,ce=z.stateNode;if(G!==null&&G===c)break;z.tag===5&&ce!==null&&(z=ce,h?(G=Sn(a,g),G!=null&&b.unshift(So(a,G,z))):h||(G=Sn(a,g),G!=null&&b.push(So(a,G,z)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var Ax=/\r\n?/g,Rx=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(Ax,`
`).replace(Rx,"")}function Ta(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Aa(){}var Ac=null,Rc=null;function Pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,Th=typeof Promise=="function"?Promise:void 0,Nx=typeof queueMicrotask=="function"?queueMicrotask:typeof Th<"u"?function(n){return Th.resolve(null).then(n).catch(Dx)}:Nc;function Dx(n){setTimeout(function(){throw n})}function Dc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),uo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);uo(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ah(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),xi="__reactFiber$"+ds,Eo="__reactProps$"+ds,Ai="__reactContainer$"+ds,Lc="__reactEvents$"+ds,Lx="__reactListeners$"+ds,Fx="__reactHandles$"+ds;function Rr(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ai]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ah(n);n!==null;){if(a=n[xi])return a;n=Ah(n)}return i}n=a,a=n.parentNode}return null}function Mo(n){return n=n[xi]||n[Ai],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ra(n){return n[Eo]||null}var Fc=[],hs=-1;function ir(n){return{current:n}}function Ot(n){0>hs||(n.current=Fc[hs],Fc[hs]=null,hs--)}function It(n,i){hs++,Fc[hs]=n.current,n.current=i}var rr={},mn=ir(rr),Rn=ir(!1),Pr=rr;function ps(n,i){var a=n.type.contextTypes;if(!a)return rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Pn(n){return n=n.childContextTypes,n!=null}function Pa(){Ot(Rn),Ot(mn)}function Rh(n,i,a){if(mn.current!==rr)throw Error(t(168));It(mn,i),It(Rn,a)}function Ph(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ie(n)||"Unknown",h));return U({},a,c)}function Na(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Pr=mn.current,It(mn,n),It(Rn,Rn.current),!0}function Nh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ph(n,i,Pr),c.__reactInternalMemoizedMergedChildContext=n,Ot(Rn),Ot(mn),It(mn,n)):Ot(Rn),It(Rn,a)}var Ri=null,Da=!1,Ic=!1;function Dh(n){Ri===null?Ri=[n]:Ri.push(n)}function Ix(n){Da=!0,Dh(n)}function sr(){if(!Ic&&Ri!==null){Ic=!0;var n=0,i=Ct;try{var a=Ri;for(Ct=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ri=null,Da=!1}catch(h){throw Ri!==null&&(Ri=Ri.slice(n+1)),ha(Pe,sr),h}finally{Ct=i,Ic=!1}}return null}var ms=[],gs=0,La=null,Fa=0,Xn=[],qn=0,Nr=null,Pi=1,Ni="";function Dr(n,i){ms[gs++]=Fa,ms[gs++]=La,La=n,Fa=i}function Lh(n,i,a){Xn[qn++]=Pi,Xn[qn++]=Ni,Xn[qn++]=Nr,Nr=n;var c=Pi;n=Ni;var h=32-mt(c)-1;c&=~(1<<h),a+=1;var g=32-mt(i)+h;if(30<g){var b=h-h%5;g=(c&(1<<b)-1).toString(32),c>>=b,h-=b,Pi=1<<32-mt(i)+h|a<<h|c,Ni=g+n}else Pi=1<<g|a<<h|c,Ni=n}function Uc(n){n.return!==null&&(Dr(n,1),Lh(n,1,0))}function kc(n){for(;n===La;)La=ms[--gs],ms[gs]=null,Fa=ms[--gs],ms[gs]=null;for(;n===Nr;)Nr=Xn[--qn],Xn[qn]=null,Ni=Xn[--qn],Xn[qn]=null,Pi=Xn[--qn],Xn[qn]=null}var zn=null,Vn=null,Vt=!1,ii=null;function Fh(n,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ih(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Vn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Nr!==null?{id:Pi,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Vn=null,!0):!1;default:return!1}}function Oc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Bc(n){if(Vt){var i=Vn;if(i){var a=i;if(!Ih(n,i)){if(Oc(n))throw Error(t(418));i=nr(a.nextSibling);var c=zn;i&&Ih(n,i)?Fh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,zn=n)}}else{if(Oc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,zn=n}}}function Uh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Ia(n){if(n!==zn)return!1;if(!Vt)return Uh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pc(n.type,n.memoizedProps)),i&&(i=Vn)){if(Oc(n))throw kh(),Error(t(418));for(;i;)Fh(n,i),i=nr(i.nextSibling)}if(Uh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=nr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=zn?nr(n.stateNode.nextSibling):null;return!0}function kh(){for(var n=Vn;n;)n=nr(n.nextSibling)}function xs(){Vn=zn=null,Vt=!1}function zc(n){ii===null?ii=[n]:ii.push(n)}var Ux=A.ReactCurrentBatchConfig;function wo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var z=h.refs;b===null?delete z[g]:z[g]=b},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ua(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Oh(n){var i=n._init;return i(n._payload)}function Bh(n){function i(te,q){if(n){var se=te.deletions;se===null?(te.deletions=[q],te.flags|=16):se.push(q)}}function a(te,q){if(!n)return null;for(;q!==null;)i(te,q),q=q.sibling;return null}function c(te,q){for(te=new Map;q!==null;)q.key!==null?te.set(q.key,q):te.set(q.index,q),q=q.sibling;return te}function h(te,q){return te=hr(te,q),te.index=0,te.sibling=null,te}function g(te,q,se){return te.index=se,n?(se=te.alternate,se!==null?(se=se.index,se<q?(te.flags|=2,q):se):(te.flags|=2,q)):(te.flags|=1048576,q)}function b(te){return n&&te.alternate===null&&(te.flags|=2),te}function z(te,q,se,De){return q===null||q.tag!==6?(q=Nu(se,te.mode,De),q.return=te,q):(q=h(q,se),q.return=te,q)}function G(te,q,se,De){var nt=se.type;return nt===V?be(te,q,se.props.children,De,se.key):q!==null&&(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ae&&Oh(nt)===q.type)?(De=h(q,se.props),De.ref=wo(te,q,se),De.return=te,De):(De=ol(se.type,se.key,se.props,null,te.mode,De),De.ref=wo(te,q,se),De.return=te,De)}function ce(te,q,se,De){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=Du(se,te.mode,De),q.return=te,q):(q=h(q,se.children||[]),q.return=te,q)}function be(te,q,se,De,nt){return q===null||q.tag!==7?(q=zr(se,te.mode,De,nt),q.return=te,q):(q=h(q,se),q.return=te,q)}function Re(te,q,se){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Nu(""+q,te.mode,se),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return se=ol(q.type,q.key,q.props,null,te.mode,se),se.ref=wo(te,null,q),se.return=te,se;case B:return q=Du(q,te.mode,se),q.return=te,q;case ae:var De=q._init;return Re(te,De(q._payload),se)}if(Ne(q)||de(q))return q=zr(q,te.mode,se,null),q.return=te,q;Ua(te,q)}return null}function we(te,q,se,De){var nt=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return nt!==null?null:z(te,q,""+se,De);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case I:return se.key===nt?G(te,q,se,De):null;case B:return se.key===nt?ce(te,q,se,De):null;case ae:return nt=se._init,we(te,q,nt(se._payload),De)}if(Ne(se)||de(se))return nt!==null?null:be(te,q,se,De,null);Ua(te,se)}return null}function We(te,q,se,De,nt){if(typeof De=="string"&&De!==""||typeof De=="number")return te=te.get(se)||null,z(q,te,""+De,nt);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case I:return te=te.get(De.key===null?se:De.key)||null,G(q,te,De,nt);case B:return te=te.get(De.key===null?se:De.key)||null,ce(q,te,De,nt);case ae:var st=De._init;return We(te,q,se,st(De._payload),nt)}if(Ne(De)||de(De))return te=te.get(se)||null,be(q,te,De,nt,null);Ua(q,De)}return null}function Je(te,q,se,De){for(var nt=null,st=null,ot=q,dt=q=0,an=null;ot!==null&&dt<se.length;dt++){ot.index>dt?(an=ot,ot=null):an=ot.sibling;var Rt=we(te,ot,se[dt],De);if(Rt===null){ot===null&&(ot=an);break}n&&ot&&Rt.alternate===null&&i(te,ot),q=g(Rt,q,dt),st===null?nt=Rt:st.sibling=Rt,st=Rt,ot=an}if(dt===se.length)return a(te,ot),Vt&&Dr(te,dt),nt;if(ot===null){for(;dt<se.length;dt++)ot=Re(te,se[dt],De),ot!==null&&(q=g(ot,q,dt),st===null?nt=ot:st.sibling=ot,st=ot);return Vt&&Dr(te,dt),nt}for(ot=c(te,ot);dt<se.length;dt++)an=We(ot,te,dt,se[dt],De),an!==null&&(n&&an.alternate!==null&&ot.delete(an.key===null?dt:an.key),q=g(an,q,dt),st===null?nt=an:st.sibling=an,st=an);return n&&ot.forEach(function(pr){return i(te,pr)}),Vt&&Dr(te,dt),nt}function tt(te,q,se,De){var nt=de(se);if(typeof nt!="function")throw Error(t(150));if(se=nt.call(se),se==null)throw Error(t(151));for(var st=nt=null,ot=q,dt=q=0,an=null,Rt=se.next();ot!==null&&!Rt.done;dt++,Rt=se.next()){ot.index>dt?(an=ot,ot=null):an=ot.sibling;var pr=we(te,ot,Rt.value,De);if(pr===null){ot===null&&(ot=an);break}n&&ot&&pr.alternate===null&&i(te,ot),q=g(pr,q,dt),st===null?nt=pr:st.sibling=pr,st=pr,ot=an}if(Rt.done)return a(te,ot),Vt&&Dr(te,dt),nt;if(ot===null){for(;!Rt.done;dt++,Rt=se.next())Rt=Re(te,Rt.value,De),Rt!==null&&(q=g(Rt,q,dt),st===null?nt=Rt:st.sibling=Rt,st=Rt);return Vt&&Dr(te,dt),nt}for(ot=c(te,ot);!Rt.done;dt++,Rt=se.next())Rt=We(ot,te,dt,Rt.value,De),Rt!==null&&(n&&Rt.alternate!==null&&ot.delete(Rt.key===null?dt:Rt.key),q=g(Rt,q,dt),st===null?nt=Rt:st.sibling=Rt,st=Rt);return n&&ot.forEach(function(mv){return i(te,mv)}),Vt&&Dr(te,dt),nt}function $t(te,q,se,De){if(typeof se=="object"&&se!==null&&se.type===V&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case I:e:{for(var nt=se.key,st=q;st!==null;){if(st.key===nt){if(nt=se.type,nt===V){if(st.tag===7){a(te,st.sibling),q=h(st,se.props.children),q.return=te,te=q;break e}}else if(st.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ae&&Oh(nt)===st.type){a(te,st.sibling),q=h(st,se.props),q.ref=wo(te,st,se),q.return=te,te=q;break e}a(te,st);break}else i(te,st);st=st.sibling}se.type===V?(q=zr(se.props.children,te.mode,De,se.key),q.return=te,te=q):(De=ol(se.type,se.key,se.props,null,te.mode,De),De.ref=wo(te,q,se),De.return=te,te=De)}return b(te);case B:e:{for(st=se.key;q!==null;){if(q.key===st)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){a(te,q.sibling),q=h(q,se.children||[]),q.return=te,te=q;break e}else{a(te,q);break}else i(te,q);q=q.sibling}q=Du(se,te.mode,De),q.return=te,te=q}return b(te);case ae:return st=se._init,$t(te,q,st(se._payload),De)}if(Ne(se))return Je(te,q,se,De);if(de(se))return tt(te,q,se,De);Ua(te,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,q!==null&&q.tag===6?(a(te,q.sibling),q=h(q,se),q.return=te,te=q):(a(te,q),q=Nu(se,te.mode,De),q.return=te,te=q),b(te)):a(te,q)}return $t}var vs=Bh(!0),zh=Bh(!1),ka=ir(null),Oa=null,_s=null,Vc=null;function Hc(){Vc=_s=Oa=null}function Gc(n){var i=ka.current;Ot(ka),n._currentValue=i}function jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ys(n,i){Oa=n,Vc=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nn=!0),n.firstContext=null)}function $n(n){var i=n._currentValue;if(Vc!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Oa===null)throw Error(t(308));_s=n,Oa.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Lr=null;function Wc(n){Lr===null?Lr=[n]:Lr.push(n)}function Vh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Wc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Di(n,c)}function Di(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var or=!1;function Xc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ar(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Di(n,a)}return h=c.interleaved,h===null?(i.next=i,Wc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Di(n,a)}function Ba(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rn(n,a)}}function Gh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function za(n,i,a,c){var h=n.updateQueue;or=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,z=h.shared.pending;if(z!==null){h.shared.pending=null;var G=z,ce=G.next;G.next=null,b===null?g=ce:b.next=ce,b=G;var be=n.alternate;be!==null&&(be=be.updateQueue,z=be.lastBaseUpdate,z!==b&&(z===null?be.firstBaseUpdate=ce:z.next=ce,be.lastBaseUpdate=G))}if(g!==null){var Re=h.baseState;b=0,be=ce=G=null,z=g;do{var we=z.lane,We=z.eventTime;if((c&we)===we){be!==null&&(be=be.next={eventTime:We,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Je=n,tt=z;switch(we=i,We=a,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){Re=Je.call(We,Re,we);break e}Re=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,we=typeof Je=="function"?Je.call(We,Re,we):Je,we==null)break e;Re=U({},Re,we);break e;case 2:or=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,we=h.effects,we===null?h.effects=[z]:we.push(z))}else We={eventTime:We,lane:we,tag:z.tag,payload:z.payload,callback:z.callback,next:null},be===null?(ce=be=We,G=Re):be=be.next=We,b|=we;if(z=z.next,z===null){if(z=h.shared.pending,z===null)break;we=z,z=we.next,we.next=null,h.lastBaseUpdate=we,h.shared.pending=null}}while(!0);if(be===null&&(G=Re),h.baseState=G,h.firstBaseUpdate=ce,h.lastBaseUpdate=be,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Ur|=b,n.lanes=b,n.memoizedState=Re}}function jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var bo={},vi=ir(bo),Co=ir(bo),To=ir(bo);function Fr(n){if(n===bo)throw Error(t(174));return n}function qc(n,i){switch(It(To,i),It(Co,n),It(vi,bo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ye(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ye(i,n)}Ot(vi),It(vi,i)}function Ss(){Ot(vi),Ot(Co),Ot(To)}function Wh(n){Fr(To.current);var i=Fr(vi.current),a=Ye(i,n.type);i!==a&&(It(Co,n),It(vi,a))}function $c(n){Co.current===n&&(Ot(vi),Ot(Co))}var Ht=ir(0);function Va(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yc=[];function Zc(){for(var n=0;n<Yc.length;n++)Yc[n]._workInProgressVersionPrimary=null;Yc.length=0}var Ha=A.ReactCurrentDispatcher,Kc=A.ReactCurrentBatchConfig,Ir=0,Gt=null,Jt=null,sn=null,Ga=!1,Ao=!1,Ro=0,kx=0;function gn(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ni(n[a],i[a]))return!1;return!0}function Qc(n,i,a,c,h,g){if(Ir=g,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ha.current=n===null||n.memoizedState===null?Vx:Hx,n=a(c,h),Ao){g=0;do{if(Ao=!1,Ro=0,25<=g)throw Error(t(301));g+=1,sn=Jt=null,i.updateQueue=null,Ha.current=Gx,n=a(c,h)}while(Ao)}if(Ha.current=Xa,i=Jt!==null&&Jt.next!==null,Ir=0,sn=Jt=Gt=null,Ga=!1,i)throw Error(t(300));return n}function eu(){var n=Ro!==0;return Ro=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function Yn(){if(Jt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function Po(n,i){return typeof i=="function"?i(n):i}function tu(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Jt,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var z=b=null,G=null,ce=g;do{var be=ce.lane;if((Ir&be)===be)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Re={lane:be,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(z=G=Re,b=c):G=G.next=Re,Gt.lanes|=be,Ur|=be}ce=ce.next}while(ce!==null&&ce!==g);G===null?b=c:G.next=z,ni(c,i.memoizedState)||(Nn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,Gt.lanes|=g,Ur|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nu(n){var i=Yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);ni(g,i.memoizedState)||(Nn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Xh(){}function qh(n,i){var a=Gt,c=Yn(),h=i(),g=!ni(c.memoizedState,h);if(g&&(c.memoizedState=h,Nn=!0),c=c.queue,iu(Zh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,No(9,Yh.bind(null,a,c,h,i),void 0,null),on===null)throw Error(t(349));(Ir&30)!==0||$h(a,i,h)}return h}function $h(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Yh(n,i,a,c){i.value=a,i.getSnapshot=c,Kh(i)&&Jh(n)}function Zh(n,i,a){return a(function(){Kh(i)&&Jh(n)})}function Kh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ni(n,a)}catch{return!0}}function Jh(n){var i=Di(n,1);i!==null&&ai(i,n,1,-1)}function Qh(n){var i=_i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=zx.bind(null,Gt,n),[i.memoizedState,n]}function No(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function ep(){return Yn().memoizedState}function ja(n,i,a,c){var h=_i();Gt.flags|=n,h.memoizedState=No(1|i,a,void 0,c===void 0?null:c)}function Wa(n,i,a,c){var h=Yn();c=c===void 0?null:c;var g=void 0;if(Jt!==null){var b=Jt.memoizedState;if(g=b.destroy,c!==null&&Jc(c,b.deps)){h.memoizedState=No(i,a,g,c);return}}Gt.flags|=n,h.memoizedState=No(1|i,a,g,c)}function tp(n,i){return ja(8390656,8,n,i)}function iu(n,i){return Wa(2048,8,n,i)}function np(n,i){return Wa(4,2,n,i)}function ip(n,i){return Wa(4,4,n,i)}function rp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function sp(n,i,a){return a=a!=null?a.concat([n]):null,Wa(4,4,rp.bind(null,i,n),a)}function ru(){}function op(n,i){var a=Yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ap(n,i){var a=Yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function lp(n,i,a){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=a):(ni(a,i)||(a=Ft(),Gt.lanes|=a,Ur|=a,n.baseState=!0),i)}function Ox(n,i){var a=Ct;Ct=a!==0&&4>a?a:4,n(!0);var c=Kc.transition;Kc.transition={};try{n(!1),i()}finally{Ct=a,Kc.transition=c}}function cp(){return Yn().memoizedState}function Bx(n,i,a){var c=dr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},up(n))dp(i,a);else if(a=Vh(n,i,a,c),a!==null){var h=wn();ai(a,n,c,h),fp(a,i,c)}}function zx(n,i,a){var c=dr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(up(n))dp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,z=g(b,a);if(h.hasEagerState=!0,h.eagerState=z,ni(z,b)){var G=i.interleaved;G===null?(h.next=h,Wc(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=Vh(n,i,h,c),a!==null&&(h=wn(),ai(a,n,c,h),fp(a,i,c))}}function up(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function dp(n,i){Ao=Ga=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function fp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rn(n,a)}}var Xa={readContext:$n,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},Vx={readContext:$n,useCallback:function(n,i){return _i().memoizedState=[n,i===void 0?null:i],n},useContext:$n,useEffect:tp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ja(4194308,4,rp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return ja(4,2,n,i)},useMemo:function(n,i){var a=_i();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=_i();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Bx.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=_i();return n={current:n},i.memoizedState=n},useState:Qh,useDebugValue:ru,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=Qh(!1),i=n[0];return n=Ox.bind(null,n[1]),_i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Gt,h=_i();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));(Ir&30)!==0||$h(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,tp(Zh.bind(null,c,g,n),[n]),c.flags|=2048,No(9,Yh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=_i(),i=on.identifierPrefix;if(Vt){var a=Ni,c=Pi;a=(c&~(1<<32-mt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ro++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=kx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Hx={readContext:$n,useCallback:op,useContext:$n,useEffect:iu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:ap,useReducer:tu,useRef:ep,useState:function(){return tu(Po)},useDebugValue:ru,useDeferredValue:function(n){var i=Yn();return lp(i,Jt.memoizedState,n)},useTransition:function(){var n=tu(Po)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:qh,useId:cp,unstable_isNewReconciler:!1},Gx={readContext:$n,useCallback:op,useContext:$n,useEffect:iu,useImperativeHandle:sp,useInsertionEffect:np,useLayoutEffect:ip,useMemo:ap,useReducer:nu,useRef:ep,useState:function(){return nu(Po)},useDebugValue:ru,useDeferredValue:function(n){var i=Yn();return Jt===null?i.memoizedState=n:lp(i,Jt.memoizedState,n)},useTransition:function(){var n=nu(Po)[0],i=Yn().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:qh,useId:cp,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=U({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:U({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var qa={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=wn(),h=dr(n),g=Li(c,h);g.payload=i,a!=null&&(g.callback=a),i=ar(n,g,h),i!==null&&(ai(i,n,h,c),Ba(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=wn(),h=dr(n),g=Li(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ar(n,g,h),i!==null&&(ai(i,n,h,c),Ba(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),c=dr(n),h=Li(a,c);h.tag=2,i!=null&&(h.callback=i),i=ar(n,h,c),i!==null&&(ai(i,n,c,a),Ba(i,n,c))}};function hp(n,i,a,c,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!xo(a,c)||!xo(h,g):!0}function pp(n,i,a){var c=!1,h=rr,g=i.contextType;return typeof g=="object"&&g!==null?g=$n(g):(h=Pn(i)?Pr:mn.current,c=i.contextTypes,g=(c=c!=null)?ps(n,h):rr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&qa.enqueueReplaceState(i,i.state,null)}function ou(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Xc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=$n(g):(g=Pn(i)?Pr:mn.current,h.context=ps(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(su(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&qa.enqueueReplaceState(h,h.state,null),za(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Es(n,i){try{var a="",c=i;do a+=re(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function lu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var jx=typeof WeakMap=="function"?WeakMap:Map;function gp(n,i,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,Mu=c),lu(n,i)},a}function xp(n,i,a){a=Li(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){lu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){lu(n,i),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function vp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new jx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=rv.bind(null,n,i,a),i.then(n,n))}function _p(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function yp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Li(-1,1),i.tag=2,ar(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Wx=A.ReactCurrentOwner,Nn=!1;function Mn(n,i,a,c){i.child=n===null?zh(i,null,a,c):vs(i,n.child,a,c)}function Sp(n,i,a,c,h){a=a.render;var g=i.ref;return ys(i,h),c=Qc(n,i,a,c,g,h),a=eu(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Fi(n,i,h)):(Vt&&a&&Uc(i),i.flags|=1,Mn(n,i,c,h),i.child)}function Ep(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Pu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Mp(n,i,g,c,h)):(n=ol(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:xo,a(b,c)&&n.ref===i.ref)return Fi(n,i,h)}return i.flags|=1,n=hr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Mp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(xo(g,c)&&n.ref===i.ref)if(Nn=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Nn=!0);else return i.lanes=n.lanes,Fi(n,i,h)}return cu(n,i,a,c,h)}function wp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(ws,Hn),Hn|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(ws,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,It(ws,Hn),Hn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,It(ws,Hn),Hn|=c;return Mn(n,i,h,a),i.child}function bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cu(n,i,a,c,h){var g=Pn(a)?Pr:mn.current;return g=ps(i,g),ys(i,h),a=Qc(n,i,a,c,g,h),c=eu(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Fi(n,i,h)):(Vt&&c&&Uc(i),i.flags|=1,Mn(n,i,a,h),i.child)}function Cp(n,i,a,c,h){if(Pn(a)){var g=!0;Na(i)}else g=!1;if(ys(i,h),i.stateNode===null)Ya(n,i),pp(i,a,c),ou(i,a,c,h),c=!0;else if(n===null){var b=i.stateNode,z=i.memoizedProps;b.props=z;var G=b.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=$n(ce):(ce=Pn(a)?Pr:mn.current,ce=ps(i,ce));var be=a.getDerivedStateFromProps,Re=typeof be=="function"||typeof b.getSnapshotBeforeUpdate=="function";Re||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==c||G!==ce)&&mp(i,b,c,ce),or=!1;var we=i.memoizedState;b.state=we,za(i,c,b,h),G=i.memoizedState,z!==c||we!==G||Rn.current||or?(typeof be=="function"&&(su(i,a,be,c),G=i.memoizedState),(z=or||hp(i,a,z,c,we,G,ce))?(Re||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),b.props=c,b.state=G,b.context=ce,c=z):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Hh(n,i),z=i.memoizedProps,ce=i.type===i.elementType?z:ri(i.type,z),b.props=ce,Re=i.pendingProps,we=b.context,G=a.contextType,typeof G=="object"&&G!==null?G=$n(G):(G=Pn(a)?Pr:mn.current,G=ps(i,G));var We=a.getDerivedStateFromProps;(be=typeof We=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(z!==Re||we!==G)&&mp(i,b,c,G),or=!1,we=i.memoizedState,b.state=we,za(i,c,b,h);var Je=i.memoizedState;z!==Re||we!==Je||Rn.current||or?(typeof We=="function"&&(su(i,a,We,c),Je=i.memoizedState),(ce=or||hp(i,a,ce,c,we,Je,G)||!1)?(be||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Je,G),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Je,G)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),b.props=c,b.state=Je,b.context=G,c=ce):(typeof b.componentDidUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return uu(n,i,a,c,g,h)}function uu(n,i,a,c,h,g){bp(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&Nh(i,a,!1),Fi(n,i,g);c=i.stateNode,Wx.current=i;var z=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=vs(i,n.child,null,g),i.child=vs(i,null,z,g)):Mn(n,i,z,g),i.memoizedState=c.state,h&&Nh(i,a,!0),i.child}function Tp(n){var i=n.stateNode;i.pendingContext?Rh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Rh(n,i.context,!1),qc(n,i.containerInfo)}function Ap(n,i,a,c,h){return xs(),zc(h),i.flags|=256,Mn(n,i,a,c),i.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rp(n,i,a){var c=i.pendingProps,h=Ht.current,g=!1,b=(i.flags&128)!==0,z;if((z=b)||(z=n!==null&&n.memoizedState===null?!1:(h&2)!==0),z?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),It(Ht,h&1),n===null)return Bc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,g?(c=i.mode,g=i.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=al(b,c,0,null),n=zr(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=fu(a),i.memoizedState=du,n):hu(i,b));if(h=n.memoizedState,h!==null&&(z=h.dehydrated,z!==null))return Xx(n,i,b,c,z,h,a);if(g){g=c.fallback,b=i.mode,h=n.child,z=h.sibling;var G={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=hr(h,G),c.subtreeFlags=h.subtreeFlags&14680064),z!==null?g=hr(z,g):(g=zr(g,b,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,b=n.child.memoizedState,b=b===null?fu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~a,i.memoizedState=du,c}return g=n.child,n=g.sibling,c=hr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $a(n,i,a,c){return c!==null&&zc(c),vs(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Xx(n,i,a,c,h,g,b){if(a)return i.flags&256?(i.flags&=-257,c=au(Error(t(422))),$a(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=al({mode:"visible",children:c.children},h,0,null),g=zr(g,h,b,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&vs(i,n.child,null,b),i.child.memoizedState=fu(b),i.memoizedState=du,g);if((i.mode&1)===0)return $a(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var z=c.dgst;return c=z,g=Error(t(419)),c=au(g,c,void 0),$a(n,i,b,c)}if(z=(b&n.childLanes)!==0,Nn||z){if(c=on,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Di(n,h),ai(c,n,h,-1))}return Ru(),c=au(Error(t(421))),$a(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=sv.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,Vn=nr(h.nextSibling),zn=i,Vt=!0,ii=null,n!==null&&(Xn[qn++]=Pi,Xn[qn++]=Ni,Xn[qn++]=Nr,Pi=n.id,Ni=n.overflow,Nr=i),i=hu(i,c.children),i.flags|=4096,i)}function Pp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),jc(n.return,i,a)}function pu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Np(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Mn(n,i,c.children,a),c=Ht.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pp(n,a,i);else if(n.tag===19)Pp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(It(Ht,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Va(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),pu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Va(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}pu(i,!0,a,null,g);break;case"together":pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ya(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ur|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=hr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=hr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function qx(n,i,a){switch(i.tag){case 3:Tp(i),xs();break;case 5:Wh(i);break;case 1:Pn(i.type)&&Na(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;It(ka,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Rp(n,i,a):(It(Ht,Ht.current&1),n=Fi(n,i,a),n!==null?n.sibling:null);It(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Np(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),It(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,wp(n,i,a)}return Fi(n,i,a)}var Dp,mu,Lp,Fp;Dp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},mu=function(){},Lp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Fr(vi.current);var g=null;switch(a){case"input":h=D(n,h),c=D(n,c),g=[];break;case"select":h=U({},h,{value:void 0}),c=U({},c,{value:void 0}),g=[];break;case"textarea":h=T(n,h),c=T(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Aa)}_t(a,c);var b;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var z=h[ce];for(b in z)z.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?g||(g=[]):(g=g||[]).push(ce,null));for(ce in c){var G=c[ce];if(z=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&G!==z&&(G!=null||z!=null))if(ce==="style")if(z){for(b in z)!z.hasOwnProperty(b)||G&&G.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in G)G.hasOwnProperty(b)&&z[b]!==G[b]&&(a||(a={}),a[b]=G[b])}else a||(g||(g=[]),g.push(ce,a)),a=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,z=z?z.__html:void 0,G!=null&&z!==G&&(g=g||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&kt("scroll",n),g||z===G||(g=[])):(g=g||[]).push(ce,G))}a&&(g=g||[]).push("style",a);var ce=g;(i.updateQueue=ce)&&(i.flags|=4)}},Fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Do(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function xn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function $x(n,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Pn(i.type)&&Pa(),xn(i),null;case 3:return c=i.stateNode,Ss(),Ot(Rn),Ot(mn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ia(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(Cu(ii),ii=null))),mu(n,i),xn(i),null;case 5:$c(i);var h=Fr(To.current);if(a=i.type,n!==null&&i.stateNode!=null)Lp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return xn(i),null}if(n=Fr(vi.current),Ia(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[xi]=i,c[Eo]=g,n=(i.mode&1)!==0,a){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(h=0;h<_o.length;h++)kt(_o[h],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":Ue(c,g),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},kt("invalid",c);break;case"textarea":ee(c,g),kt("invalid",c)}_t(a,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var z=g[b];b==="children"?typeof z=="string"?c.textContent!==z&&(g.suppressHydrationWarning!==!0&&Ta(c.textContent,z,n),h=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(g.suppressHydrationWarning!==!0&&Ta(c.textContent,z,n),h=["children",""+z]):o.hasOwnProperty(b)&&z!=null&&b==="onScroll"&&kt("scroll",c)}switch(a){case"input":$e(c),Te(c,g,!0);break;case"textarea":$e(c),Me(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Aa)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_e(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[xi]=i,n[Eo]=c,Dp(n,i,!1,!1),i.stateNode=n;e:{switch(b=ht(a,c),a){case"dialog":kt("cancel",n),kt("close",n),h=c;break;case"iframe":case"object":case"embed":kt("load",n),h=c;break;case"video":case"audio":for(h=0;h<_o.length;h++)kt(_o[h],n);h=c;break;case"source":kt("error",n),h=c;break;case"img":case"image":case"link":kt("error",n),kt("load",n),h=c;break;case"details":kt("toggle",n),h=c;break;case"input":Ue(n,c),h=D(n,c),kt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=U({},c,{value:void 0}),kt("invalid",n);break;case"textarea":ee(n,c),h=T(n,c),kt("invalid",n);break;default:h=c}_t(a,h),z=h;for(g in z)if(z.hasOwnProperty(g)){var G=z[g];g==="style"?ct(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&He(n,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&ft(n,G):typeof G=="number"&&ft(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?G!=null&&g==="onScroll"&&kt("scroll",n):G!=null&&F(n,g,G,b))}switch(a){case"input":$e(n),Te(n,c,!1);break;case"textarea":$e(n),Me(n);break;case"option":c.value!=null&&n.setAttribute("value",""+xe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?L(n,!!c.multiple,g,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Aa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(n&&i.stateNode!=null)Fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(To.current),Fr(vi.current),Ia(i)){if(c=i.stateNode,a=i.memoizedProps,c[xi]=i,(g=c.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Ta(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ta(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return xn(i),null;case 13:if(Ot(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kh(),xs(),i.flags|=98560,g=!1;else if(g=Ia(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[xi]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),g=!1}else ii!==null&&(Cu(ii),ii=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ht.current&1)!==0?Qt===0&&(Qt=3):Ru())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return Ss(),mu(n,i),n===null&&yo(i.stateNode.containerInfo),xn(i),null;case 10:return Gc(i.type._context),xn(i),null;case 17:return Pn(i.type)&&Pa(),xn(i),null;case 19:if(Ot(Ht),g=i.memoizedState,g===null)return xn(i),null;if(c=(i.flags&128)!==0,b=g.rendering,b===null)if(c)Do(g,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=Va(n),b!==null){for(i.flags|=128,Do(g,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Ht,Ht.current&1|2),i.child}n=n.sibling}g.tail!==null&&ne()>bs&&(i.flags|=128,c=!0,Do(g,!1),i.lanes=4194304)}else{if(!c)if(n=Va(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Do(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!Vt)return xn(i),null}else 2*ne()-g.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,c=!0,Do(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(a=g.last,a!==null?a.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=ne(),i.sibling=null,a=Ht.current,It(Ht,c?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return Au(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Yx(n,i){switch(kc(i),i.tag){case 1:return Pn(i.type)&&Pa(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),Ot(Rn),Ot(mn),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $c(i),null;case 13:if(Ot(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));xs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return Ss(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Au(),null;case 24:return null;default:return null}}var Za=!1,vn=!1,Zx=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Ms(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){qt(n,i,c)}else a.current=null}function gu(n,i,a){try{a()}catch(c){qt(n,i,c)}}var Ip=!1;function Kx(n,i){if(Ac=ga,n=hh(),yc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,z=-1,G=-1,ce=0,be=0,Re=n,we=null;t:for(;;){for(var We;Re!==a||h!==0&&Re.nodeType!==3||(z=b+h),Re!==g||c!==0&&Re.nodeType!==3||(G=b+c),Re.nodeType===3&&(b+=Re.nodeValue.length),(We=Re.firstChild)!==null;)we=Re,Re=We;for(;;){if(Re===n)break t;if(we===a&&++ce===h&&(z=b),we===g&&++be===c&&(G=b),(We=Re.nextSibling)!==null)break;Re=we,we=Re.parentNode}Re=We}a=z===-1||G===-1?null:{start:z,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:n,selectionRange:a},ga=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,$t=Je.memoizedState,te=i.stateNode,q=te.getSnapshotBeforeUpdate(i.elementType===i.type?tt:ri(i.type,tt),$t);te.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){qt(i,i.return,De)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return Je=Ip,Ip=!1,Je}function Lo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&gu(i,a,g)}h=h.next}while(h!==c)}}function Ka(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Up(n){var i=n.alternate;i!==null&&(n.alternate=null,Up(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[Eo],delete i[Lc],delete i[Lx],delete i[Fx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function kp(n){return n.tag===5||n.tag===3||n.tag===4}function Op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||kp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Aa));else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}var un=null,si=!1;function lr(n,i,a){for(a=a.child;a!==null;)Bp(n,i,a),a=a.sibling}function Bp(n,i,a){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(lt,a)}catch{}switch(a.tag){case 5:vn||Ms(a,i);case 6:var c=un,h=si;un=null,lr(n,i,a),un=c,si=h,un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?Dc(n.parentNode,a):n.nodeType===1&&Dc(n,a),uo(n)):Dc(un,a.stateNode));break;case 4:c=un,h=si,un=a.stateNode.containerInfo,si=!0,lr(n,i,a),un=c,si=h;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&gu(a,i,b),h=h.next}while(h!==c)}lr(n,i,a);break;case 1:if(!vn&&(Ms(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){qt(a,i,z)}lr(n,i,a);break;case 21:lr(n,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,lr(n,i,a),vn=c):lr(n,i,a);break;default:lr(n,i,a)}}function zp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Zx),i.forEach(function(c){var h=ov.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,b=i,z=b;e:for(;z!==null;){switch(z.tag){case 5:un=z.stateNode,si=!1;break e;case 3:un=z.stateNode.containerInfo,si=!0;break e;case 4:un=z.stateNode.containerInfo,si=!0;break e}z=z.return}if(un===null)throw Error(t(160));Bp(g,b,h),un=null,si=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ce){qt(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Vp(i,n),i=i.sibling}function Vp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),yi(n),c&4){try{Lo(3,n,n.return),Ka(3,n)}catch(tt){qt(n,n.return,tt)}try{Lo(5,n,n.return)}catch(tt){qt(n,n.return,tt)}}break;case 1:oi(i,n),yi(n),c&512&&a!==null&&Ms(a,a.return);break;case 5:if(oi(i,n),yi(n),c&512&&a!==null&&Ms(a,a.return),n.flags&32){var h=n.stateNode;try{ft(h,"")}catch(tt){qt(n,n.return,tt)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,b=a!==null?a.memoizedProps:g,z=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{z==="input"&&g.type==="radio"&&g.name!=null&&Ee(h,g),ht(z,b);var ce=ht(z,g);for(b=0;b<G.length;b+=2){var be=G[b],Re=G[b+1];be==="style"?ct(h,Re):be==="dangerouslySetInnerHTML"?He(h,Re):be==="children"?ft(h,Re):F(h,be,Re,ce)}switch(z){case"input":Fe(h,g);break;case"textarea":me(h,g);break;case"select":var we=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var We=g.value;We!=null?L(h,!!g.multiple,We,!1):we!==!!g.multiple&&(g.defaultValue!=null?L(h,!!g.multiple,g.defaultValue,!0):L(h,!!g.multiple,g.multiple?[]:"",!1))}h[Eo]=g}catch(tt){qt(n,n.return,tt)}}break;case 6:if(oi(i,n),yi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(tt){qt(n,n.return,tt)}}break;case 3:if(oi(i,n),yi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(tt){qt(n,n.return,tt)}break;case 4:oi(i,n),yi(n);break;case 13:oi(i,n),yi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Eu=ne())),c&4&&zp(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(ce=vn)||be,oi(i,n),vn=ce):oi(i,n),yi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!be&&(n.mode&1)!==0)for(qe=n,be=n.child;be!==null;){for(Re=qe=be;qe!==null;){switch(we=qe,We=we.child,we.tag){case 0:case 11:case 14:case 15:Lo(4,we,we.return);break;case 1:Ms(we,we.return);var Je=we.stateNode;if(typeof Je.componentWillUnmount=="function"){c=we,a=we.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(tt){qt(c,a,tt)}}break;case 5:Ms(we,we.return);break;case 22:if(we.memoizedState!==null){jp(Re);continue}}We!==null?(We.return=we,qe=We):jp(Re)}be=be.sibling}e:for(be=null,Re=n;;){if(Re.tag===5){if(be===null){be=Re;try{h=Re.stateNode,ce?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(z=Re.stateNode,G=Re.memoizedProps.style,b=G!=null&&G.hasOwnProperty("display")?G.display:null,z.style.display=rt("display",b))}catch(tt){qt(n,n.return,tt)}}}else if(Re.tag===6){if(be===null)try{Re.stateNode.nodeValue=ce?"":Re.memoizedProps}catch(tt){qt(n,n.return,tt)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;be===Re&&(be=null),Re=Re.return}be===Re&&(be=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:oi(i,n),yi(n),c&4&&zp(n);break;case 21:break;default:oi(i,n),yi(n)}}function yi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(kp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ft(h,""),c.flags&=-33);var g=Op(n);_u(n,g,h);break;case 3:case 4:var b=c.stateNode.containerInfo,z=Op(n);vu(n,z,b);break;default:throw Error(t(161))}}catch(G){qt(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Jx(n,i,a){qe=n,Hp(n)}function Hp(n,i,a){for(var c=(n.mode&1)!==0;qe!==null;){var h=qe,g=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||Za;if(!b){var z=h.alternate,G=z!==null&&z.memoizedState!==null||vn;z=Za;var ce=vn;if(Za=b,(vn=G)&&!ce)for(qe=h;qe!==null;)b=qe,G=b.child,b.tag===22&&b.memoizedState!==null?Wp(h):G!==null?(G.return=b,qe=G):Wp(h);for(;g!==null;)qe=g,Hp(g),g=g.sibling;qe=h,Za=z,vn=ce}Gp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,qe=g):Gp(n)}}function Gp(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||Ka(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&jh(i,g,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}jh(i,b,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var be=ce.memoizedState;if(be!==null){var Re=be.dehydrated;Re!==null&&uo(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&xu(i)}catch(we){qt(i,i.return,we)}}if(i===n){qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,qe=a;break}qe=i.return}}function jp(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Wp(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ka(4,i)}catch(G){qt(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){qt(i,h,G)}}var g=i.return;try{xu(i)}catch(G){qt(i,g,G)}break;case 5:var b=i.return;try{xu(i)}catch(G){qt(i,b,G)}}}catch(G){qt(i,i.return,G)}if(i===n){qe=null;break}var z=i.sibling;if(z!==null){z.return=i.return,qe=z;break}qe=i.return}}var Qx=Math.ceil,Ja=A.ReactCurrentDispatcher,yu=A.ReactCurrentOwner,Zn=A.ReactCurrentBatchConfig,Tt=0,on=null,Yt=null,dn=0,Hn=0,ws=ir(0),Qt=0,Fo=null,Ur=0,Qa=0,Su=0,Io=null,Dn=null,Eu=0,bs=1/0,Ii=null,el=!1,Mu=null,cr=null,tl=!1,ur=null,nl=0,Uo=0,wu=null,il=-1,rl=0;function wn(){return(Tt&6)!==0?ne():il!==-1?il:il=ne()}function dr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&dn!==0?dn&-dn:Ux.transition!==null?(rl===0&&(rl=Ft()),rl):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:qf(n.type)),n)}function ai(n,i,a,c){if(50<Uo)throw Uo=0,wu=null,Error(t(185));nn(n,a,c),((Tt&2)===0||n!==on)&&(n===on&&((Tt&2)===0&&(Qa|=a),Qt===4&&fr(n,dn)),Ln(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(bs=ne()+500,Da&&sr()))}function Ln(n,i){var a=n.callbackNode;En(n,i);var c=hn(n,n===on?dn:0);if(c===0)a!==null&&N(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&N(a),i===1)n.tag===0?Ix(qp.bind(null,n)):Dh(qp.bind(null,n)),Nx(function(){(Tt&6)===0&&sr()}),a=null;else{switch(gi(c)){case 1:a=Pe;break;case 4:a=Oe;break;case 16:a=je;break;case 536870912:a=ut;break;default:a=je}a=tm(a,Xp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Xp(n,i){if(il=-1,rl=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Cs()&&n.callbackNode!==a)return null;var c=hn(n,n===on?dn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=sl(n,c);else{i=c;var h=Tt;Tt|=2;var g=Yp();(on!==n||dn!==i)&&(Ii=null,bs=ne()+500,Or(n,i));do try{nv();break}catch(z){$p(n,z)}while(!0);Hc(),Ja.current=g,Tt=h,Yt!==null?i=0:(on=null,dn=0,i=Qt)}if(i!==0){if(i===2&&(h=Ti(n),h!==0&&(c=h,i=bu(n,h))),i===1)throw a=Fo,Or(n,0),fr(n,c),Ln(n,ne()),a;if(i===6)fr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!ev(h)&&(i=sl(n,c),i===2&&(g=Ti(n),g!==0&&(c=g,i=bu(n,g))),i===1))throw a=Fo,Or(n,0),fr(n,c),Ln(n,ne()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Dn,Ii);break;case 3:if(fr(n,c),(c&130023424)===c&&(i=Eu+500-ne(),10<i)){if(hn(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){wn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Nc(Br.bind(null,n,Dn,Ii),i);break}Br(n,Dn,Ii);break;case 4:if(fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-mt(c);g=1<<b,b=i[b],b>h&&(h=b),c&=~g}if(c=h,c=ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Qx(c/1960))-c,10<c){n.timeoutHandle=Nc(Br.bind(null,n,Dn,Ii),c);break}Br(n,Dn,Ii);break;case 5:Br(n,Dn,Ii);break;default:throw Error(t(329))}}}return Ln(n,ne()),n.callbackNode===a?Xp.bind(null,n):null}function bu(n,i){var a=Io;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=sl(n,i),n!==2&&(i=Dn,Dn=a,i!==null&&Cu(i)),n}function Cu(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function ev(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!ni(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~Su,i&=~Qa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-mt(i),c=1<<a;n[a]=-1,i&=~c}}function qp(n){if((Tt&6)!==0)throw Error(t(327));Cs();var i=hn(n,0);if((i&1)===0)return Ln(n,ne()),null;var a=sl(n,i);if(n.tag!==0&&a===2){var c=Ti(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=Fo,Or(n,0),fr(n,i),Ln(n,ne()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Dn,Ii),Ln(n,ne()),null}function Tu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(bs=ne()+500,Da&&sr())}}function kr(n){ur!==null&&ur.tag===0&&(Tt&6)===0&&Cs();var i=Tt;Tt|=1;var a=Zn.transition,c=Ct;try{if(Zn.transition=null,Ct=1,n)return n()}finally{Ct=c,Zn.transition=a,Tt=i,(Tt&6)===0&&sr()}}function Au(){Hn=ws.current,Ot(ws)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Px(a)),Yt!==null)for(a=Yt.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pa();break;case 3:Ss(),Ot(Rn),Ot(mn),Zc();break;case 5:$c(c);break;case 4:Ss();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:Gc(c.type._context);break;case 22:case 23:Au()}a=a.return}if(on=n,Yt=n=hr(n.current,null),dn=Hn=i,Qt=0,Fo=null,Su=Qa=Ur=0,Dn=Io=null,Lr!==null){for(i=0;i<Lr.length;i++)if(a=Lr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var b=g.next;g.next=h,c.next=b}a.pending=c}Lr=null}return n}function $p(n,i){do{var a=Yt;try{if(Hc(),Ha.current=Xa,Ga){for(var c=Gt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Ga=!1}if(Ir=0,sn=Jt=Gt=null,Ao=!1,Ro=0,yu.current=null,a===null||a.return===null){Qt=1,Fo=i,Yt=null;break}e:{var g=n,b=a.return,z=a,G=i;if(i=dn,z.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,be=z,Re=be.tag;if((be.mode&1)===0&&(Re===0||Re===11||Re===15)){var we=be.alternate;we?(be.updateQueue=we.updateQueue,be.memoizedState=we.memoizedState,be.lanes=we.lanes):(be.updateQueue=null,be.memoizedState=null)}var We=_p(b);if(We!==null){We.flags&=-257,yp(We,b,z,g,i),We.mode&1&&vp(g,ce,i),i=We,G=ce;var Je=i.updateQueue;if(Je===null){var tt=new Set;tt.add(G),i.updateQueue=tt}else Je.add(G);break e}else{if((i&1)===0){vp(g,ce,i),Ru();break e}G=Error(t(426))}}else if(Vt&&z.mode&1){var $t=_p(b);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),yp($t,b,z,g,i),zc(Es(G,z));break e}}g=G=Es(G,z),Qt!==4&&(Qt=2),Io===null?Io=[g]:Io.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var te=gp(g,G,i);Gh(g,te);break e;case 1:z=G;var q=g.type,se=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(cr===null||!cr.has(se)))){g.flags|=65536,i&=-i,g.lanes|=i;var De=xp(g,z,i);Gh(g,De);break e}}g=g.return}while(g!==null)}Kp(a)}catch(nt){i=nt,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Yp(){var n=Ja.current;return Ja.current=Xa,n===null?Xa:n}function Ru(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),on===null||(Ur&268435455)===0&&(Qa&268435455)===0||fr(on,dn)}function sl(n,i){var a=Tt;Tt|=2;var c=Yp();(on!==n||dn!==i)&&(Ii=null,Or(n,i));do try{tv();break}catch(h){$p(n,h)}while(!0);if(Hc(),Tt=a,Ja.current=c,Yt!==null)throw Error(t(261));return on=null,dn=0,Qt}function tv(){for(;Yt!==null;)Zp(Yt)}function nv(){for(;Yt!==null&&!K();)Zp(Yt)}function Zp(n){var i=em(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?Kp(n):Yt=i,yu.current=null}function Kp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=$x(a,i,Hn),a!==null){Yt=a;return}}else{if(a=Yx(a,i),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Br(n,i,a){var c=Ct,h=Zn.transition;try{Zn.transition=null,Ct=1,iv(n,i,a,c)}finally{Zn.transition=h,Ct=c}return null}function iv(n,i,a,c){do Cs();while(ur!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(cn(n,g),n===on&&(Yt=on=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tl||(tl=!0,tm(je,function(){return Cs(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Zn.transition,Zn.transition=null;var b=Ct;Ct=1;var z=Tt;Tt|=4,yu.current=null,Kx(n,a),Vp(a,n),Mx(Rc),ga=!!Ac,Rc=Ac=null,n.current=a,Jx(a),le(),Tt=z,Ct=b,Zn.transition=g}else n.current=a;if(tl&&(tl=!1,ur=n,nl=h),g=n.pendingLanes,g===0&&(cr=null),Mt(a.stateNode),Ln(n,ne()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(el)throw el=!1,n=Mu,Mu=null,n;return(nl&1)!==0&&n.tag!==0&&Cs(),g=n.pendingLanes,(g&1)!==0?n===wu?Uo++:(Uo=0,wu=n):Uo=0,sr(),null}function Cs(){if(ur!==null){var n=gi(nl),i=Zn.transition,a=Ct;try{if(Zn.transition=null,Ct=16>n?16:n,ur===null)var c=!1;else{if(n=ur,ur=null,nl=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,qe=n.current;qe!==null;){var g=qe,b=g.child;if((qe.flags&16)!==0){var z=g.deletions;if(z!==null){for(var G=0;G<z.length;G++){var ce=z[G];for(qe=ce;qe!==null;){var be=qe;switch(be.tag){case 0:case 11:case 15:Lo(8,be,g)}var Re=be.child;if(Re!==null)Re.return=be,qe=Re;else for(;qe!==null;){be=qe;var we=be.sibling,We=be.return;if(Up(be),be===ce){qe=null;break}if(we!==null){we.return=We,qe=we;break}qe=We}}}var Je=g.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var $t=tt.sibling;tt.sibling=null,tt=$t}while(tt!==null)}}qe=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,qe=b;else e:for(;qe!==null;){if(g=qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Lo(9,g,g.return)}var te=g.sibling;if(te!==null){te.return=g.return,qe=te;break e}qe=g.return}}var q=n.current;for(qe=q;qe!==null;){b=qe;var se=b.child;if((b.subtreeFlags&2064)!==0&&se!==null)se.return=b,qe=se;else e:for(b=q;qe!==null;){if(z=qe,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Ka(9,z)}}catch(nt){qt(z,z.return,nt)}if(z===b){qe=null;break e}var De=z.sibling;if(De!==null){De.return=z.return,qe=De;break e}qe=z.return}}if(Tt=h,sr(),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(lt,n)}catch{}c=!0}return c}finally{Ct=a,Zn.transition=i}}return!1}function Jp(n,i,a){i=Es(a,i),i=gp(n,i,1),n=ar(n,i,1),i=wn(),n!==null&&(nn(n,1,i),Ln(n,i))}function qt(n,i,a){if(n.tag===3)Jp(n,n,a);else for(;i!==null;){if(i.tag===3){Jp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cr===null||!cr.has(c))){n=Es(a,n),n=xp(i,n,1),i=ar(i,n,1),n=wn(),i!==null&&(nn(i,1,n),Ln(i,n));break}}i=i.return}}function rv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(dn&a)===a&&(Qt===4||Qt===3&&(dn&130023424)===dn&&500>ne()-Eu?Or(n,0):Su|=a),Ln(n,i)}function Qp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Xt,Xt<<=1,(Xt&130023424)===0&&(Xt=4194304)));var a=wn();n=Di(n,i),n!==null&&(nn(n,i,a),Ln(n,a))}function sv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Qp(n,a)}function ov(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Qp(n,a)}var em;em=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,qx(n,i,a);Nn=(n.flags&131072)!==0}else Nn=!1,Vt&&(i.flags&1048576)!==0&&Lh(i,Fa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ya(n,i),n=i.pendingProps;var h=ps(i,mn.current);ys(i,a),h=Qc(null,i,c,n,h,a);var g=eu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(g=!0,Na(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Xc(i),h.updater=qa,i.stateNode=h,h._reactInternals=i,ou(i,c,n,a),i=uu(null,i,c,!0,g,a)):(i.tag=0,Vt&&g&&Uc(i),Mn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ya(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=lv(c),n=ri(c,n),h){case 0:i=cu(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Sp(null,i,c,n,a);break e;case 14:i=Ep(null,i,c,ri(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),cu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),Cp(n,i,c,h,a);case 3:e:{if(Tp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Hh(n,i),za(i,c,null,a);var b=i.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Es(Error(t(423)),i),i=Ap(n,i,c,a,h);break e}else if(c!==h){h=Es(Error(t(424)),i),i=Ap(n,i,c,a,h);break e}else for(Vn=nr(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,ii=null,a=zh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xs(),c===h){i=Fi(n,i,a);break e}Mn(n,i,c,a)}i=i.child}return i;case 5:return Wh(i),n===null&&Bc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,b=h.children,Pc(c,h)?b=null:g!==null&&Pc(c,g)&&(i.flags|=32),bp(n,i),Mn(n,i,b,a),i.child;case 6:return n===null&&Bc(i),null;case 13:return Rp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=vs(i,null,c,a):Mn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),Sp(n,i,c,h,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,b=h.value,It(ka,c._currentValue),c._currentValue=b,g!==null)if(ni(g.value,b)){if(g.children===h.children&&!Rn.current){i=Fi(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var z=g.dependencies;if(z!==null){b=g.child;for(var G=z.firstContext;G!==null;){if(G.context===c){if(g.tag===1){G=Li(-1,a&-a),G.tag=2;var ce=g.updateQueue;if(ce!==null){ce=ce.shared;var be=ce.pending;be===null?G.next=G:(G.next=be.next,be.next=G),ce.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),jc(g.return,a,i),z.lanes|=a;break}G=G.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(t(341));b.lanes|=a,z=b.alternate,z!==null&&(z.lanes|=a),jc(b,a,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}Mn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ys(i,a),h=$n(h),c=c(h),i.flags|=1,Mn(n,i,c,a),i.child;case 14:return c=i.type,h=ri(c,i.pendingProps),h=ri(c.type,h),Ep(n,i,c,h,a);case 15:return Mp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:ri(c,h),Ya(n,i),i.tag=1,Pn(c)?(n=!0,Na(i)):n=!1,ys(i,a),pp(i,c,h),ou(i,c,h,a),uu(null,i,c,!0,n,a);case 19:return Np(n,i,a);case 22:return wp(n,i,a)}throw Error(t(156,i.tag))};function tm(n,i){return ha(n,i)}function av(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,i,a,c){return new av(n,i,a,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function lv(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===ue)return 14}return 2}function hr(n,i){var a=n.alternate;return a===null?(a=Kn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ol(n,i,a,c,h,g){var b=2;if(c=n,typeof n=="function")Pu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case V:return zr(a.children,h,g,i);case H:b=8,h|=8;break;case P:return n=Kn(12,a,i,h|2),n.elementType=P,n.lanes=g,n;case Z:return n=Kn(13,a,i,h),n.elementType=Z,n.lanes=g,n;case oe:return n=Kn(19,a,i,h),n.elementType=oe,n.lanes=g,n;case pe:return al(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case k:b=9;break e;case J:b=11;break e;case ue:b=14;break e;case ae:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Kn(b,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function zr(n,i,a,c){return n=Kn(7,n,c,i),n.lanes=a,n}function al(n,i,a,c){return n=Kn(22,n,c,i),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function Nu(n,i,a){return n=Kn(6,n,null,i),n.lanes=a,n}function Du(n,i,a){return i=Kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function cv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Lu(n,i,a,c,h,g,b,z,G){return n=new cv(n,i,a,z,G),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Kn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(g),n}function uv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function nm(n){if(!n)return rr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return Ph(n,a,i)}return i}function im(n,i,a,c,h,g,b,z,G){return n=Lu(a,c,!0,n,h,g,b,z,G),n.context=nm(null),a=n.current,c=wn(),h=dr(a),g=Li(c,h),g.callback=i??null,ar(a,g,h),n.current.lanes=h,nn(n,h,c),Ln(n,c),n}function ll(n,i,a,c){var h=i.current,g=wn(),b=dr(h);return a=nm(a),i.context===null?i.context=a:i.pendingContext=a,i=Li(g,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ar(h,i,b),n!==null&&(ai(n,h,b,g),Ba(n,h,b)),b}function cl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fu(n,i){rm(n,i),(n=n.alternate)&&rm(n,i)}function dv(){return null}var sm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Iu(n){this._internalRoot=n}ul.prototype.render=Iu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ll(n,i,null,null)},ul.prototype.unmount=Iu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;kr(function(){ll(null,n,null,null)}),i[Ai]=null}};function ul(n){this._internalRoot=n}ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=Hf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&Wf(n)}};function Uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function om(){}function fv(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ce=cl(b);g.call(ce)}}var b=im(i,c,n,0,null,!1,!1,"",om);return n._reactRootContainer=b,n[Ai]=b.current,yo(n.nodeType===8?n.parentNode:n),kr(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var z=c;c=function(){var ce=cl(G);z.call(ce)}}var G=Lu(n,0,!1,null,null,!1,!1,"",om);return n._reactRootContainer=G,n[Ai]=G.current,yo(n.nodeType===8?n.parentNode:n),kr(function(){ll(i,G,a,c)}),G}function fl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var z=h;h=function(){var G=cl(b);z.call(G)}}ll(i,b,n,h)}else b=fv(a,i,n,h,c);return cl(b)}zf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Et(i.pendingLanes);a!==0&&(rn(i,a|1),Ln(i,ne()),(Tt&6)===0&&(bs=ne()+500,sr()))}break;case 13:kr(function(){var c=Di(n,1);if(c!==null){var h=wn();ai(c,n,1,h)}}),Fu(n,1)}},ac=function(n){if(n.tag===13){var i=Di(n,134217728);if(i!==null){var a=wn();ai(i,n,134217728,a)}Fu(n,134217728)}},Vf=function(n){if(n.tag===13){var i=dr(n),a=Di(n,i);if(a!==null){var c=wn();ai(a,n,i,c)}Fu(n,i)}},Hf=function(){return Ct},Gf=function(n,i){var a=Ct;try{return Ct=n,i()}finally{Ct=a}},ke=function(n,i,a){switch(i){case"input":if(Fe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Ra(c);if(!h)throw Error(t(90));ve(c),Fe(c,h)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&L(n,!!a.multiple,i,!1)}},Ut=Tu,Kt=kr;var hv={usingClientEntryPoint:!1,Events:[Mo,fs,Ra,ze,pt,Tu]},ko={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pv={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=da(n),n===null?null:n.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{lt=hl.inject(pv),et=hl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uu(i))throw Error(t(200));return uv(n,i,null,a)},Fn.createRoot=function(n,i){if(!Uu(n))throw Error(t(299));var a=!1,c="",h=sm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Lu(n,1,!1,null,null,a,!1,c,h),n[Ai]=i.current,yo(n.nodeType===8?n.parentNode:n),new Iu(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=da(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return kr(n)},Fn.hydrate=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!Uu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",b=sm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=im(i,null,n,1,a??null,h,!1,g,b),n[Ai]=i.current,yo(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new ul(i)},Fn.render=function(n,i,a){if(!dl(i))throw Error(t(200));return fl(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!dl(n))throw Error(t(40));return n._reactRootContainer?(kr(function(){fl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ai]=null})}),!0):!1},Fn.unstable_batchedUpdates=Tu,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return fl(n,i,a,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var pm;function bv(){if(pm)return zu.exports;pm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=wv(),zu.exports}var mm;function Cv(){if(mm)return pl;mm=1;var s=bv();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var Tv=Cv();const Av=Pg(Tv),Cn=[{id:"prof-arjun",name:"Arjun Sharma",avatarSeed:"Arjun",profileUrl:"https://www.cloudskillsboost.google/public_profiles/8b42e719-79a0-40e8-bf01-19b88cf24361",lastUpdated:"2026-10-26",isCurrent:!0,notes:"Aiming for the 2026 Grandmaster Bomber Jacket & Plaque! Active 5-week streak.",customGoalPoints:75,seasonTarget:"Season 2026",badges:[{id:"b1",name:"Level 1: Google Cloud Infrastructure & Containers",category:"game",dateEarned:"2026-09-04",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b2",name:"Level 2: Data Engineering & Analytics Mastery",category:"game",dateEarned:"2026-09-12",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b3",name:"Level 3: Generative AI & Vertex AI Studio",category:"game",dateEarned:"2026-09-20",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b4",name:"Level 4: Cloud Security, IAM & Governance",category:"game",dateEarned:"2026-09-28",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b5",name:"Diabolical Challenge: Multi-Cloud & Resiliency",category:"game",dateEarned:"2026-10-06",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b6",name:"Arcade Trivia September 2026: Week 1",category:"trivia",dateEarned:"2026-09-07",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b7",name:"Arcade Trivia September 2026: Week 2",category:"trivia",dateEarned:"2026-09-14",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b8",name:"Arcade Trivia October 2026: Week 1",category:"trivia",dateEarned:"2026-10-05",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b9",name:"Arcade Trivia October 2026: Week 2",category:"trivia",dateEarned:"2026-10-12",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b10",name:"Arcade Trivia October 2026: Week 3",category:"trivia",dateEarned:"2026-10-19",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b11",name:"Arcade Trivia October 2026: Week 4",category:"trivia",dateEarned:"2026-10-26",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"b12",name:"Implement Cloud Security Fundamentals on Google Cloud",category:"skill",dateEarned:"2026-09-02",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b13",name:"Build and Secure Networks in Google Cloud",category:"skill",dateEarned:"2026-09-05",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b14",name:"Perform Foundational Infrastructure Tasks in Google Cloud",category:"skill",dateEarned:"2026-09-08",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b15",name:"Build a Website on Google Cloud",category:"skill",dateEarned:"2026-09-10",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b16",name:"Set Up and Configure a Cloud Environment in Google Cloud",category:"skill",dateEarned:"2026-09-15",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b17",name:"Deploy and Manage Cloud Environments with Google Cloud",category:"skill",dateEarned:"2026-09-18",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b18",name:"Automating Infrastructure on Google Cloud with Terraform",category:"skill",dateEarned:"2026-09-21",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b19",name:"Explore Machine Learning Models with Explainable AI",category:"skill",dateEarned:"2026-09-24",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b20",name:"Prepare Data for ML APIs on Google Cloud",category:"skill",dateEarned:"2026-09-27",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b21",name:"Create and Manage Cloud Spanner Databases",category:"skill",dateEarned:"2026-09-30",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b22",name:"Insights from Data with BigQuery",category:"skill",dateEarned:"2026-10-02",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b23",name:"Build Google Cloud Infrastructure for AWS Professionals",category:"skill",dateEarned:"2026-10-04",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b24",name:"Engineer Data with Google Cloud Dataplex",category:"skill",dateEarned:"2026-10-07",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b25",name:"Develop GenAI Apps with Gemini and Streamlit",category:"skill",dateEarned:"2026-10-10",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b26",name:"Manage Kubernetes in Google Cloud",category:"skill",dateEarned:"2026-10-13",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b27",name:"Monitor and Log with Google Cloud Operations Suite",category:"skill",dateEarned:"2026-10-15",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b28",name:"Store, Process, and Manage Data on Google Cloud",category:"skill",dateEarned:"2026-10-17",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b29",name:"Build a Multi-Modal AI Agent with Vertex AI",category:"skill",dateEarned:"2026-10-19",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b30",name:"Implement DevOps in Google Cloud with Cloud Build",category:"skill",dateEarned:"2026-10-21",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b31",name:"Optimize Costs on Google Cloud with Active Assist",category:"skill",dateEarned:"2026-10-22",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b32",name:"Deploy a Serverless Backend with Cloud Run & Pub/Sub",category:"skill",dateEarned:"2026-10-23",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b33",name:"Secure Software Supply Chain on Google Cloud",category:"skill",dateEarned:"2026-10-24",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b34",name:"Predict Housing Prices with Vertex AI AutoML",category:"skill",dateEarned:"2026-10-25",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b35",name:"Analyze Speech and Language with Google Cloud APIs",category:"skill",dateEarned:"2026-10-26",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"b36",name:"Arcade Milestone: Tier 1 Achiever (8 Skill Badges)",category:"milestone",dateEarned:"2026-09-24",pointsContribution:2,season:"Season 2026",isVerified:!0},{id:"b37",name:"Arcade Milestone: Tier 2 Master (16 Skill Badges)",category:"milestone",dateEarned:"2026-10-13",pointsContribution:4,season:"Season 2026",isVerified:!0},{id:"b38",name:"Arcade Milestone: Tier 3 Grand Champion (24 Skill Badges)",category:"milestone",dateEarned:"2026-10-26",pointsContribution:6,season:"Season 2026",isVerified:!0},{id:"b39",name:"Arcade Certification Zone: Associate Cloud Engineer",category:"special",dateEarned:"2026-10-11",pointsContribution:2,season:"Season 2026",isVerified:!0},{id:"b40",name:"Arcade Special Sprint: Cloud Hero Hackathon 2026",category:"special",dateEarned:"2026-10-18",pointsContribution:2,season:"Season 2026",isVerified:!0}]},{id:"prof-sophia",name:"Sophia Chen",avatarSeed:"Sophia",profileUrl:"https://www.cloudskillsboost.google/public_profiles/5a1b3c99-1234-4567-89ab-cdef01234567",lastUpdated:"2026-10-24",isCurrent:!1,notes:"Pursuing Advanced Tier swag! Focusing on Vertex AI & Data pipelines.",customGoalPoints:45,seasonTarget:"Season 2026",badges:[{id:"s1",name:"Level 1: Google Cloud Infrastructure & Containers",category:"game",dateEarned:"2026-09-10",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"s2",name:"Level 2: Data Engineering & Analytics Mastery",category:"game",dateEarned:"2026-09-24",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"s3",name:"Level 3: Generative AI & Vertex AI Studio",category:"game",dateEarned:"2026-10-08",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"s4",name:"Arcade Trivia October 2026: Week 1",category:"trivia",dateEarned:"2026-10-06",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"s5",name:"Arcade Trivia October 2026: Week 2",category:"trivia",dateEarned:"2026-10-13",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"s6",name:"Arcade Trivia October 2026: Week 3",category:"trivia",dateEarned:"2026-10-20",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"s7",name:"Implement Cloud Security Fundamentals on Google Cloud",category:"skill",dateEarned:"2026-09-14",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s8",name:"Build and Secure Networks in Google Cloud",category:"skill",dateEarned:"2026-09-18",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s9",name:"Perform Foundational Infrastructure Tasks in Google Cloud",category:"skill",dateEarned:"2026-09-22",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s10",name:"Build a Website on Google Cloud",category:"skill",dateEarned:"2026-09-27",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s11",name:"Set Up and Configure a Cloud Environment in Google Cloud",category:"skill",dateEarned:"2026-10-01",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s12",name:"Deploy and Manage Cloud Environments with Google Cloud",category:"skill",dateEarned:"2026-10-05",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s13",name:"Automating Infrastructure on Google Cloud with Terraform",category:"skill",dateEarned:"2026-10-10",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s14",name:"Explore Machine Learning Models with Explainable AI",category:"skill",dateEarned:"2026-10-15",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s15",name:"Prepare Data for ML APIs on Google Cloud",category:"skill",dateEarned:"2026-10-18",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s16",name:"Create and Manage Cloud Spanner Databases",category:"skill",dateEarned:"2026-10-22",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"s17",name:"Arcade Milestone: Tier 1 Achiever (8 Skill Badges)",category:"milestone",dateEarned:"2026-10-15",pointsContribution:2,season:"Season 2026",isVerified:!0},{id:"s18",name:"Arcade Special Sprint: Cloud Hero Hackathon 2026",category:"special",dateEarned:"2026-10-12",pointsContribution:2,season:"Season 2026",isVerified:!0}]},{id:"prof-leo",name:"Leo Vance",avatarSeed:"Leo",profileUrl:"https://www.cloudskillsboost.google/public_profiles/3d2e1f00-9876-5432-10fe-dcba98765432",lastUpdated:"2026-10-25",isCurrent:!1,notes:"Cloud beginner! Target: Standard Tier T-shirt & pin collection.",customGoalPoints:25,seasonTarget:"Season 2026",badges:[{id:"l1",name:"Level 1: Google Cloud Infrastructure & Containers",category:"game",dateEarned:"2026-10-04",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"l2",name:"Arcade Trivia October 2026: Week 1",category:"trivia",dateEarned:"2026-10-07",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"l3",name:"Arcade Trivia October 2026: Week 2",category:"trivia",dateEarned:"2026-10-14",pointsContribution:1,season:"Season 2026",isVerified:!0},{id:"l4",name:"Implement Cloud Security Fundamentals on Google Cloud",category:"skill",dateEarned:"2026-10-10",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"l5",name:"Build a Website on Google Cloud",category:"skill",dateEarned:"2026-10-18",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"l6",name:"Perform Foundational Infrastructure Tasks in Google Cloud",category:"skill",dateEarned:"2026-10-22",pointsContribution:.5,season:"Season 2026",isVerified:!0},{id:"l7",name:"Set Up and Configure a Cloud Environment in Google Cloud",category:"skill",dateEarned:"2026-10-25",pointsContribution:.5,season:"Season 2026",isVerified:!0}]}],Ng=[{name:"Level 1: Google Cloud Infrastructure & Containers",category:"game",pointsContribution:1,description:"Master Compute Engine, GKE clusters, and Cloud Run deployments in this challenge game.",season:"Season 2026",isVerified:!0},{name:"Level 2: Data Engineering & Analytics Mastery",category:"game",pointsContribution:1,description:"Build BigQuery pipelines, Dataflow streaming, and Cloud Dataproc spark clusters.",season:"Season 2026",isVerified:!0},{name:"Level 3: Generative AI & Vertex AI Studio",category:"game",pointsContribution:1,description:"Prompt engineering, multimodal model tuning, and Gemini API integration hands-on arcade.",season:"Season 2026",isVerified:!0},{name:"Level 4: Cloud Security, IAM & Governance",category:"game",pointsContribution:1,description:"Enforce VPC service controls, IAM fine-grained privileges, and Security Command Center.",season:"Season 2026",isVerified:!0},{name:"Diabolical Challenge: Multi-Cloud & Resiliency",category:"game",pointsContribution:1,description:"The infamous Arcade Diabolical mystery level with high difficulty timed scenarios.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 1",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia testing architecture knowledge and cloud fundamentals.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 2",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia on networking, Cloud DNS, and Cloud Armor firewalls.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 3",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia on Datastore, Cloud Spanner, and Firestore scalability.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia October 2026: Week 4",category:"trivia",pointsContribution:1,description:"Weekly Google Cloud trivia grand finale covering Cloud FinOps and cost optimization.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia September 2026: Week 1",category:"trivia",pointsContribution:1,description:"September launch trivia covering Kubernetes and modern microservices.",season:"Season 2026",isVerified:!0},{name:"Arcade Trivia September 2026: Week 2",category:"trivia",pointsContribution:1,description:"September trivia on serverless workflows and Eventarc event orchestration.",season:"Season 2026",isVerified:!0},{name:"Implement Cloud Security Fundamentals on Google Cloud",category:"skill",pointsContribution:.5,description:"Configure Cloud IAM policies, Cloud Storage ACLs, and service account keys.",season:"Season 2026",isVerified:!0},{name:"Build and Secure Networks in Google Cloud",category:"skill",pointsContribution:.5,description:"VPC peering, firewall rules, NAT gateways, and load balancer configurations.",season:"Season 2026",isVerified:!0},{name:"Perform Foundational Infrastructure Tasks in Google Cloud",category:"skill",pointsContribution:.5,description:"Deploy Cloud SQL instances, Cloud Storage buckets, and Cloud Monitoring dashboards.",season:"Season 2026",isVerified:!0},{name:"Build a Website on Google Cloud",category:"skill",pointsContribution:.5,description:"Host static and dynamic web applications with Cloud Run, Cloud CDN, and Cloud Build.",season:"Season 2026",isVerified:!0},{name:"Set Up and Configure a Cloud Environment in Google Cloud",category:"skill",pointsContribution:.5,description:"Billing accounts, resource hierarchies, folders, and enterprise organizations.",season:"Season 2026",isVerified:!0},{name:"Deploy and Manage Cloud Environments with Google Cloud",category:"skill",pointsContribution:.5,description:"Automate infrastructure as code using Terraform and Cloud Deployment Manager.",season:"Season 2026",isVerified:!0},{name:"Automating Infrastructure on Google Cloud with Terraform",category:"skill",pointsContribution:.5,description:"Terraform state management, modules, and multi-region deployment automation.",season:"Season 2026",isVerified:!0},{name:"Explore Machine Learning Models with Explainable AI",category:"skill",pointsContribution:.5,description:"What-If Tool, Shapley values, and model interpretability in Vertex AI.",season:"Season 2026",isVerified:!0},{name:"Prepare Data for ML APIs on Google Cloud",category:"skill",pointsContribution:.5,description:"Data cleansing, Feature Store pipelines, and Vision/NLP API integrations.",season:"Season 2026",isVerified:!0},{name:"Create and Manage Cloud Spanner Databases",category:"skill",pointsContribution:.5,description:"Globally distributed relational databases, split architecture, and read/write scaling.",season:"Season 2026",isVerified:!0},{name:"Insights from Data with BigQuery",category:"skill",pointsContribution:.5,description:"Partitioned tables, clustering, window functions, and BigQuery ML regression models.",season:"Season 2026",isVerified:!0},{name:"Build Google Cloud Infrastructure for AWS Professionals",category:"skill",pointsContribution:.5,description:"Cross-cloud architectural paradigms, IAM mapping, and dual-cloud networking.",season:"Season 2026",isVerified:!0},{name:"Engineer Data with Google Cloud Dataplex",category:"skill",pointsContribution:.5,description:"Data fabric governance, automatic schema discovery, and data quality check rules.",season:"Season 2026",isVerified:!0},{name:"Develop GenAI Apps with Gemini and Streamlit",category:"skill",pointsContribution:.5,description:"Streamlit frontends connected to Vertex AI Gemini 1.5 Pro and Flash with function calling.",season:"Season 2026",isVerified:!0},{name:"Arcade Milestone: Tier 1 Achiever (8 Skill Badges)",category:"milestone",pointsContribution:2,description:"Official Milestone bonus awarded for passing the first 8 verified skill badges.",season:"Season 2026",isVerified:!0},{name:"Arcade Milestone: Tier 2 Master (16 Skill Badges)",category:"milestone",pointsContribution:4,description:"Official Milestone bonus awarded for passing 16 verified skill badges.",season:"Season 2026",isVerified:!0},{name:"Arcade Milestone: Tier 3 Grand Champion (24 Skill Badges)",category:"milestone",pointsContribution:6,description:"Official Milestone bonus awarded for 24 verified skill badges.",season:"Season 2026",isVerified:!0},{name:"Arcade Certification Zone: Associate Cloud Engineer",category:"special",pointsContribution:2,description:"Verified certification study sprint and hands-on architecture pass.",season:"Season 2026",isVerified:!0},{name:"Arcade Special Sprint: Cloud Hero Hackathon 2026",category:"special",pointsContribution:2,description:"Live competitive speed-running cloud lab challenge bonus award.",season:"Season 2026",isVerified:!0}];function ql(s){try{let e=s.trim();!e.startsWith("http://")&&!e.startsWith("https://")&&(e=`https://${e}`);const t=new URL(e);return t.protocol!=="http:"&&t.protocol!=="https:"?null:t.toString()}catch{return null}}function Zo(s,e=200){return s?s.replace(/[<>'"&]/g,t=>{switch(t){case"<":return"&lt;";case">":return"&gt;";case"'":return"&#39;";case'"':return"&quot;";case"&":return"&amp;";default:return t}}).replace(/[\u0000-\u001F\u007F-\u009F]/g,"").trim().slice(0,e):""}function Rv(s){if(!s)return;const e=s.trim();if(e.startsWith("https://")||e.startsWith("http://"))return e.slice(0,500)}function Sr(s){const e=new Date().toISOString().split("T")[0];if(!s)return e;try{const t=new Date(s);if(isNaN(t.getTime()))return e;const r=t.getFullYear();return r<2020||r>2035?e:t.toISOString().split("T")[0]}catch{return e}}function gm(s){const e=s.toLowerCase();return e.includes("trivia")?{category:"trivia",pointsContribution:1}:e.includes("level ")||e.includes("diabolical")||e.includes("arcade game")||e.includes("arcade challenge")?{category:"game",pointsContribution:1}:e.includes("milestone")?e.includes("tier 3")||e.includes("24")?{category:"milestone",pointsContribution:6}:e.includes("tier 2")||e.includes("16")?{category:"milestone",pointsContribution:4}:{category:"milestone",pointsContribution:2}:e.includes("certification")||e.includes("hackathon")||e.includes("cloud hero")||e.includes("special")?{category:"special",pointsContribution:2}:{category:"skill",pointsContribution:.5}}function Dg(s){var u;if(!s||typeof s!="string")return{name:"Cloud Adventurer",badges:[]};const e=s.trim();if(e.startsWith("{")||e.startsWith("["))try{const d=JSON.parse(e);if(Array.isArray(d)&&d.length>0&&d[0].name)return{name:d[0].name||"Imported Account",badges:Array.isArray(d[0].badges)?d[0].badges:[]};if(d.badges&&Array.isArray(d.badges))return{name:d.name||"Imported Account",badges:d.badges}}catch{}if(e.includes("<")&&e.includes(">")){const d=e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,"").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,""),p=new DOMParser().parseFromString(d,"text/html");let m="Cloud Adventurer";const _=["h1.ql-headline-medium","h1.ql-title-large","h1",".profile-name",".ql-subhead-1"];for(const C of _){const E=p.querySelector(C),S=(u=E==null?void 0:E.textContent)==null?void 0:u.trim();if(S&&S.length>0&&S.length<100){m=S.replace(/^Profile of\s+/i,"");break}}const x=[],y=new Set,M=p.querySelectorAll(".profile-badge, .profile-badges-item, .public-profile-badge");if(M.length>0&&M.forEach((C,E)=>{var R;const S=C.querySelector(".ql-title-medium, .profile-badge__title, h3, .badge-title"),O=C.querySelector(".ql-body-medium, .profile-badge__date, .badge-date"),F=C.querySelector("img"),I=(((R=S==null?void 0:S.textContent)==null?void 0:R.trim())||`Cloud Badge #${E+1}`).slice(0,150);let B=Sr();if(O&&O.textContent){const k=O.textContent.match(/(?:Earned|Completed)?\s*([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);k&&k[1]&&(B=Sr(k[1]))}const{category:V,pointsContribution:H}=gm(I),P=`scraped-${Date.now()}-${E}`;y.has(I)||(y.add(I),x.push({id:P,name:I,category:V,dateEarned:B,imageUrl:Rv(F==null?void 0:F.src),pointsContribution:H,isVerified:!0,season:"Season 2026"}))}),x.length>0)return{name:m.slice(0,80),badges:x}}const t=e.split(/\r?\n/).map(d=>d.trim()).filter(Boolean),r=[],o=new Set;let l="Cloud Adventurer";for(let d=0;d<Math.min(20,t.length);d++){const f=t[d];if(!(f.toLowerCase().includes("google cloud skills boost")||f.toLowerCase().includes("public profile"))){if(f.match(/^Profile of\s+(.+)/i)){l=f.replace(/^Profile of\s+/i,"");break}if(d<5&&f.length>3&&f.length<40&&/^[A-Z][a-zA-Z\s.-]+$/.test(f)){l=f;break}}}for(let d=0;d<t.length;d++){const f=t[d],p=f.match(/(?:Earned|Completed)\s+([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);if(p){const m=p[1],_=Sr(m);let x="";for(let y=d-1;y>=Math.max(0,d-4);y--){const M=t[y];if(M&&!M.toLowerCase().includes("earned")&&!M.toLowerCase().includes("badge")&&!M.toLowerCase().includes("google cloud")&&M.length>5){x=M;break}}if(!x&&d>0&&(x=t[d-1]),x&&x.length>4&&!o.has(x)){o.add(x);const{category:y,pointsContribution:M}=gm(x);r.push({id:`text-badge-${Date.now()}-${r.length}`,name:x.slice(0,150),category:y,dateEarned:_,pointsContribution:M,isVerified:!0,season:"Season 2026"})}}else for(const m of Ng)if(f.toLowerCase()===m.name.toLowerCase()&&!o.has(m.name)){o.add(m.name);let _=Sr();if(d+1<t.length){const x=t[d+1].match(/(?:Earned|Completed)\s+([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4})/i);x&&(_=Sr(x[1]))}r.push({id:`catalog-match-${Date.now()}-${r.length}`,name:m.name,category:m.category,dateEarned:_,pointsContribution:m.pointsContribution,description:m.description,isVerified:!0,season:"Season 2026"});break}}return{name:l.slice(0,80),badges:r}}async function Pv(s){const e=ql(s);if(!e)throw new Error("Please enter a valid URL (e.g. https://www.cloudskillsboost.google/public_profiles/...)");const t=[`https://api.allorigins.win/raw?url=${encodeURIComponent(e)}`,`https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(e)}`];let r=0;for(const o of t){const l=new AbortController,u=setTimeout(()=>l.abort(),6e3);try{const d=await fetch(o,{signal:l.signal,headers:{Accept:"text/html,application/xhtml+xml,application/xml"}});if(clearTimeout(u),r=d.status,d.ok){const f=await d.text();if(f&&f.length>300){const p=Dg(f);if(p.badges.length>0||p.name&&p.name!=="Cloud Adventurer")return p}}}catch{clearTimeout(u)}}throw new Error("Google Cloud Skills Boost uses Cloudflare bot-protection (HTTP 403) that prevents direct automated scraping. Simply copy and paste your profile page text or HTML into the box below!")}const Cd="arcade_saved_profiles_v1",Ef="arcade_active_profile_id_v1",Lg="arcade_skill_ratio_v1";let Fg=Cn,Ig=Cn[0].id,Ug=2;function Nv(s,e){if(!s||typeof s!="object")return null;const t=typeof s.id=="string"&&s.id.trim()?s.id.slice(0,100):e,r=typeof s.name=="string"&&s.name.trim()?s.name.slice(0,200):"Google Cloud Badge",l=["game","trivia","skill","milestone","special"].includes(s.category)?s.category:"skill",u=Sr(s.dateEarned),d=typeof s.pointsContribution=="number"&&!isNaN(s.pointsContribution)&&s.pointsContribution>=0?Math.min(10,s.pointsContribution):l==="skill"?.5:1;return{id:t,name:r,category:l,dateEarned:u,pointsContribution:d,imageUrl:typeof s.imageUrl=="string"&&s.imageUrl.startsWith("http")?s.imageUrl.slice(0,500):void 0,description:typeof s.description=="string"?s.description.slice(0,300):void 0,season:typeof s.season=="string"?s.season.slice(0,50):"Season 2026",isVerified:!!s.isVerified}}function kg(s,e){if(!s||typeof s!="object")return null;const t=typeof s.id=="string"&&s.id.trim()?s.id.slice(0,100):`prof-${e}`,r=typeof s.name=="string"&&s.name.trim()?s.name.slice(0,80):"Cloud Champion",o=typeof s.profileUrl=="string"&&s.profileUrl.startsWith("http")?s.profileUrl.slice(0,500):"https://www.cloudskillsboost.google/public_profiles/user",l=Array.isArray(s.badges)?s.badges:[],u=[];return l.forEach((d,f)=>{const p=Nv(d,`badge-${t}-${f}`);p&&u.push(p)}),{id:t,name:r,avatarSeed:typeof s.avatarSeed=="string"?s.avatarSeed.slice(0,50):r.replace(/\s+/g,""),profileUrl:o,lastUpdated:Sr(s.lastUpdated),isCurrent:!!s.isCurrent,notes:typeof s.notes=="string"?s.notes.slice(0,300):void 0,customGoalPoints:typeof s.customGoalPoints=="number"&&s.customGoalPoints>0?s.customGoalPoints:void 0,seasonTarget:typeof s.seasonTarget=="string"?s.seasonTarget.slice(0,50):"Season 2026",badges:u}}function na(){try{const s=localStorage.getItem(Cd);if(!s)return localStorage.setItem(Cd,JSON.stringify(Cn)),localStorage.setItem(Ef,Cn[0].id),Cn;const e=JSON.parse(s);if(Array.isArray(e)&&e.length>0){const t=e.map((r,o)=>kg(r,o)).filter(r=>r!==null);if(t.length>0)return t}return Cn}catch(s){return console.warn("LocalStorage read failed, using in-memory fallback:",s),Fg}}function to(s){Fg=s;try{localStorage.setItem(Cd,JSON.stringify(s))}catch(e){console.error("Failed to save profiles to localStorage (quota or disabled):",e)}}function Td(){var s;try{const e=localStorage.getItem(Ef);return e||((s=na()[0])==null?void 0:s.id)||Cn[0].id}catch{return Ig}}function Ko(s){Ig=s;try{localStorage.setItem(Ef,s)}catch(e){console.error("Failed to set active profile ID in storage:",e)}}function $l(s){const e=na(),t=e.findIndex(o=>o.id===s.id||o.profileUrl&&o.profileUrl===s.profileUrl);let r;return t>=0?(r=[...e],r[t]={...r[t],...s,lastUpdated:new Date().toISOString().split("T")[0]}):r=[s,...e],to(r),Ko(s.id),r}function Dv(s){const t=na().filter(o=>o.id!==s),r=t.length>0?t:Cn;return to(r),Td()===s&&Ko(r[0].id),r}function xm(s,e){const r=na().map(o=>o.id===s?{...o,badges:e,lastUpdated:new Date().toISOString().split("T")[0]}:o);return to(r),r}function Lv(){try{const s=localStorage.getItem(Lg);if(s){const e=parseFloat(s);if(!isNaN(e)&&e>=1&&e<=5)return e}return 2}catch{return Ug}}function vm(s){const e=Math.max(1,Math.min(5,s));Ug=e;try{localStorage.setItem(Lg,e.toString())}catch(t){console.error("Failed to save skill ratio in storage:",t)}}function Fv(s){if(!Array.isArray(s)||s.length===0)return null;const e=s.map((t,r)=>kg(t,r)).filter(t=>t!==null);return e.length>0?e:null}const Qn=[{id:"novice",name:"Explorer Tier",minPoints:0,maxPoints:9,rewardName:"Arcade Starter Pack",rewardDescription:"Get started on your cloud journey with official stickers and digital badges.",badgeLevel:"Bronze Token",swagItems:["Official Arcade Digital Certificate","Google Cloud Skills Boost Profile Badge","Community Discord Access","Seasonal Leaderboard Ranking"],color:"#BF9E79",textColor:"text-[#835E3B]",bgColor:"bg-[#F4ECE1]",borderColor:"border-[#D6C0A5]"},{id:"standard",name:"Standard Tier",minPoints:10,maxPoints:24,rewardName:"Arcade Collector Set",rewardDescription:"Physical collectibles celebrating your first milestone across games and skill labs.",badgeLevel:"Silver Token",swagItems:["Official Arcade 2026 Cotton T-Shirt","Holographic Vinyl Sticker Pack (8x)","Arcade Metal Enamel Pin Set","Eco-Bamboo Ballpoint Pen"],color:"#D97706",textColor:"text-[#B45309]",bgColor:"bg-[#FEF3C7]",borderColor:"border-[#FDE68A]"},{id:"advanced",name:"Advanced Tier",minPoints:25,maxPoints:44,rewardName:"Cloud Champion Gear",rewardDescription:"Premium lifestyle and everyday tech essentials for dedicated cloud champions.",badgeLevel:"Gold Token",swagItems:["Arcade Embroidered Heavyweight Hoodie","Insulated 750ml Matte Steel Water Bottle","Hardcover Debossed Dotted Journal","Cables & Tech Accessory Organizer Pouch"],color:"#EA580C",textColor:"text-[#C2410C]",bgColor:"bg-[#FFEDD5]",borderColor:"border-[#FED7AA]"},{id:"premium",name:"Premium Tier",minPoints:45,maxPoints:64,rewardName:"Arcade Elite Vanguard",rewardDescription:"High-end swag package designed for top cloud practitioners and multi-domain experts.",badgeLevel:"Emerald Medallion",swagItems:["Heavy-Duty Ergonomic Cloud Laptop Backpack (Water-resistant)","Dual Fast Qi-Wireless Charging Station Pad","Custom Embroidered Snapback Cap","Extended Anti-Slip RGB/Stitched Edge Desk Mat","$50 Google Cloud Certification Exam Discount Voucher"],color:"#059669",textColor:"text-[#047857]",bgColor:"bg-[#D1FAE5]",borderColor:"border-[#A7F3D0]"},{id:"legend",name:"Legend Tier",minPoints:65,maxPoints:999,rewardName:"Arcade Grandmaster Hall of Fame",rewardDescription:"The pinnacle of Google Cloud Arcade. Top 1% swag collection and grandmaster prestige.",badgeLevel:"Royal Prismatic Crown",swagItems:["Arcade Varsity Bomber Jacket (Custom embroidered & numbered)","Waterproof Portable Wireless Bluetooth Speaker","Custom Keycap Set & Mechanical Keyboard Wrist-Rest","Exclusive Physical Grandmaster Plaque with Engraved Name","100% Google Cloud Associate/Professional Exam Voucher ($200 value)"],color:"#9333EA",textColor:"text-[#7E22CE]",bgColor:"bg-[#F3E8FF]",borderColor:"border-[#E9D5FF]"}];function Ts(s){if(!s)return Date.now();const e=new Date(s).getTime();return isNaN(e)?Date.now():e}function Og(s=[],e=2){const t=Math.max(1,Math.min(5,e||2));let r=0,o=0,l=0,u=0,d=0,f=0,p=0,m=0,_=0;s.forEach(I=>{if(!I)return;const B=typeof I.pointsContribution=="number"&&!isNaN(I.pointsContribution)&&I.pointsContribution>=0?I.pointsContribution:1;switch(I.category){case"game":r++,o+=B;break;case"trivia":l++,u+=B;break;case"skill":d++;break;case"milestone":f++,p+=B;break;case"special":m++,_+=B;break;default:d++;break}});const x=Math.floor(d/t);let y=p;f===0&&(d>=24?y=6:d>=16?y=4:d>=8&&(y=2));const M=o+u+x+y+_,C=Math.max(0,Math.round(M*10)/10),E=s.length;let S=Qn[0],O=Qn[1];for(let I=Qn.length-1;I>=0;I--)if(C>=Qn[I].minPoints){S=Qn[I],O=I<Qn.length-1?Qn[I+1]:null;break}const F=O?Math.max(0,Math.round((O.minPoints-C)*10)/10):0;let A=100;if(O){const I=O.minPoints-S.minPoints,B=C-S.minPoints;A=Math.min(100,Math.max(0,Math.round(B/Math.max(1,I)*100)))}return{gamePoints:Math.round(o*10)/10,gameCount:r,triviaPoints:Math.round(u*10)/10,triviaCount:l,skillPoints:x,skillCount:d,skillRatio:t,milestonePoints:Math.round(y*10)/10,milestoneCount:f,specialPoints:Math.round(_*10)/10,specialCount:m,totalPoints:C,totalBadges:E,currentTier:S,nextTier:O,pointsToNextTier:F,progressToNextTierPercent:A}}function Bg(s=[],e){const t=new Date().toISOString().split("T")[0];if(!s||s.length===0)return{totalDaysSpanned:1,firstBadgeDate:t,latestBadgeDate:t,badgesPerWeek:0,badgesPerMonth:0,avgDaysBetweenBadges:0,currentActiveStreakWeeks:0,maxWeeklyCadence:0,weeklyBreakdown:[],monthlyBreakdown:[],dayOfWeekBreakdown:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(k=>({day:k,count:0,percentage:0})),estimatedDaysToNextTier:null,estimatedCompletionDate:null};const r=[...s].filter(k=>k&&k.dateEarned).sort((k,J)=>Ts(k.dateEarned)-Ts(J.dateEarned));if(r.length===0)return Bg([],e);const o=r[0].dateEarned||t,l=r[r.length-1].dateEarned||t,u=Ts(o),d=Ts(l),f=Math.round((d-u)/(1e3*60*60*24)),p=Math.max(1,f),m=Math.max(1,p/7),_=Math.max(1,p/30.4),x=Number((r.length/m).toFixed(2)),y=Number((r.length/_).toFixed(1)),M=Number((p/Math.max(1,r.length)).toFixed(1)),C=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],E={Sun:0,Mon:0,Tue:0,Wed:0,Thu:0,Fri:0,Sat:0};r.forEach(k=>{const J=new Date(k.dateEarned),Z=isNaN(J.getTime())?0:J.getDay(),oe=C[Z];E[oe]=(E[oe]||0)+1});const O=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(k=>({day:k,count:E[k]||0,percentage:Math.round((E[k]||0)/Math.max(1,r.length)*100)})),F=new Map;r.forEach(k=>{const J=new Date(k.dateEarned);if(isNaN(J.getTime()))return;const Z=J.getDay(),oe=J.getDate()-Z+(Z===0?-6:1),ue=new Date(J);ue.setDate(oe);const ae=new Date(ue);ae.setDate(ue.getDate()+6);const pe=ue.toISOString().split("T")[0],j=ae.toISOString().split("T")[0];let de=F.get(pe);de||(de={startDate:pe,endDate:j,count:0,points:0,badges:[]},F.set(pe,de)),de.count++,de.points+=k.pointsContribution||(k.category==="skill"?.5:1),de.badges.push(k)});const A=Array.from(F.entries()).map(([k,J],Z)=>{const oe=new Date(k);return{weekLabel:`Week ${Z+1} (${oe.toLocaleDateString("en-US",{month:"short",day:"numeric"})})`,...J,points:Math.round(J.points*10)/10}}).sort((k,J)=>Ts(k.startDate)-Ts(J.startDate)),I=A.reduce((k,J)=>Math.max(k,J.count),0),B=new Map;r.forEach(k=>{const J=new Date(k.dateEarned);if(isNaN(J.getTime()))return;const Z=J.toLocaleDateString("en-US",{month:"short",year:"numeric"});let oe=B.get(Z);oe||(oe={count:0,points:0},B.set(Z,oe)),oe.count++,oe.points+=k.pointsContribution||(k.category==="skill"?.5:1)});const V=Array.from(B.entries()).map(([k,J])=>({monthLabel:k,count:J.count,points:Math.round(J.points*10)/10}));let H=0;for(let k=A.length-1;k>=0&&A[k].count>0;k--)H++;let P=null,R=null;if(e.nextTier&&e.pointsToNextTier>0){const k=e.totalPoints/p;if(k>0&&isFinite(k)){const J=Math.ceil(e.pointsToNextTier/k);P=Math.max(1,Math.min(365,J));const Z=new Date;Z.setDate(Z.getDate()+P),R=Z.toISOString().split("T")[0]}}return{totalDaysSpanned:p,firstBadgeDate:o,latestBadgeDate:l,badgesPerWeek:x,badgesPerMonth:y,avgDaysBetweenBadges:M,currentActiveStreakWeeks:H,maxWeeklyCadence:I,weeklyBreakdown:A,monthlyBreakdown:V,dayOfWeekBreakdown:O,estimatedDaysToNextTier:P,estimatedCompletionDate:R}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),zg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=at.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},f)=>at.createElement("svg",{ref:f,...Uv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:zg("lucide",o),...d},[...u.map(([p,m])=>at.createElement(p,m)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=(s,e)=>{const t=at.forwardRef(({className:r,...o},l)=>at.createElement(kv,{ref:l,iconNode:e,className:zg(`lucide-${Iv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Bv=xt("Activity",Ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Vv=xt("Award",zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],_m=xt("BookmarkCheck",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Ad=xt("Calendar",Gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Wv=xt("Check",jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],qv=xt("ChevronDown",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ym=xt("ChevronRight",$v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Vg=xt("CircleAlert",Yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Hg=xt("CircleCheck",Zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]],Jv=xt("ClipboardPaste",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Sm=xt("Clock",Qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],t_=xt("Download",e_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],i_=xt("ExternalLink",n_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],s_=xt("FileText",r_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],a_=xt("Filter",o_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],Gg=xt("Flame",l_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],u_=xt("Gamepad2",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],f_=xt("Gift",d_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],p_=xt("House",h_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],jg=xt("Info",m_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Em=xt("LoaderCircle",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],v_=xt("Lock",x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],y_=xt("PackageCheck",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Wg=xt("Plus",S_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Mf=xt("RotateCcw",E_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Yl=xt("Search",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],b_=xt("Settings2",w_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],T_=xt("SlidersVertical",C_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Zl=xt("Sparkles",A_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],P_=xt("Star",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],D_=xt("Target",N_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Xg=xt("Trash2",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],I_=xt("TrendingUp",F_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],k_=xt("TriangleAlert",U_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],B_=xt("Trophy",O_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],V_=xt("Upload",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]],G_=xt("UserCheck",H_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],W_=xt("UserPlus",j_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],q_=xt("Users",X_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wf=xt("X",$_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],qg=xt("Zap",Y_),Z_=({currentProfile:s,onOpenProfileSwitcher:e,onOpenSettings:t,activeTab:r,setActiveTab:o,totalPoints:l})=>v.jsx("header",{className:"sticky top-0 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADBCE] shadow-sm",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[v.jsxs("div",{className:"flex items-center justify-between h-20",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-11 h-11 rounded-2xl bg-gradient-to-br from-[#F59E0B] via-[#EA580C] to-[#D97706] flex items-center justify-center shadow-arcade-amber",children:v.jsx(u_,{className:"w-6 h-6 text-white"})}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"font-pixel text-[11px] sm:text-xs text-[#B45309] tracking-wider uppercase",children:"Arcade Calc"}),v.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#B45309] font-bold border border-[#FDE68A]",children:"2026 Season"})]}),v.jsxs("h1",{className:"font-display font-bold text-lg sm:text-xl text-[#292524] tracking-tight flex items-baseline gap-1",children:["Google Cloud ",v.jsx("span",{className:"font-serif italic font-normal text-[#C2410C]",children:"Points Tracker"})]})]})]}),v.jsxs("nav",{className:"hidden md:flex items-center gap-1 bg-[#F4ECE1] p-1.5 rounded-2xl border border-[#EADBCE]",children:[v.jsx("button",{onClick:()=>o("calculator"),className:`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${r==="calculator"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Overview & Points"}),v.jsx("button",{onClick:()=>o("frequency"),className:`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${r==="frequency"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Frequency & Velocity"}),v.jsxs("button",{onClick:()=>o("badges"),className:`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${r==="badges"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:["Badges (",s.badges.length,")"]}),v.jsx("button",{onClick:()=>o("swag"),className:`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${r==="swag"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Swag Tiers"}),v.jsx("button",{onClick:()=>o("simulator"),className:`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${r==="simulator"?"bg-white text-[#292524] shadow-sm font-display":"text-stone-600 hover:text-stone-900 hover:bg-white/50"}`,children:"Pace Simulator"})]}),v.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[v.jsxs("div",{className:"hidden sm:flex flex-col items-end mr-1",children:[v.jsx("span",{className:"text-[10px] font-mono text-stone-500 uppercase tracking-wider",children:"Score"}),v.jsxs("span",{className:"font-pixel text-xs text-[#B45309] font-bold",children:[l," PTS"]})]}),v.jsxs("button",{onClick:e,className:"flex items-center gap-2 px-3 py-2 bg-white hover:bg-[#FAF5EE] rounded-2xl border border-[#EADBCE] shadow-sm transition active:scale-95 group",title:"Click to switch or create account/profile",children:[v.jsx("div",{className:"w-7 h-7 rounded-full bg-[#FEF3C7] text-[#B45309] flex items-center justify-center font-display font-bold text-xs border border-[#FDE68A]",children:s.name.charAt(0).toUpperCase()}),v.jsxs("div",{className:"text-left hidden lg:block",children:[v.jsx("p",{className:"text-xs font-bold text-stone-800 leading-tight group-hover:text-[#B45309] transition-colors",children:s.name}),v.jsxs("p",{className:"text-[10px] font-mono text-stone-500",children:[s.badges.length," badges"]})]}),v.jsx(qv,{className:"w-3.5 h-3.5 text-stone-500 group-hover:text-stone-800 transition-transform"})]}),v.jsx("button",{onClick:t,className:"p-2.5 bg-white hover:bg-[#FAF5EE] rounded-2xl border border-[#EADBCE] text-stone-600 hover:text-stone-900 transition shadow-sm",title:"Arcade Calculation Rules & Settings",children:v.jsx(b_,{className:"w-4 h-4"})})]})]}),v.jsxs("div",{className:"flex md:hidden overflow-x-auto py-2 gap-1.5 no-scrollbar border-t border-[#EADBCE]/60",children:[v.jsx("button",{onClick:()=>o("calculator"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="calculator"?"bg-[#292524] text-white":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Overview"}),v.jsx("button",{onClick:()=>o("frequency"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="frequency"?"bg-[#292524] text-white":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Frequency & Velocity"}),v.jsxs("button",{onClick:()=>o("badges"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="badges"?"bg-[#292524] text-white":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:["Badges (",s.badges.length,")"]}),v.jsx("button",{onClick:()=>o("swag"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="swag"?"bg-[#292524] text-white":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Swag Tiers"}),v.jsx("button",{onClick:()=>o("simulator"),className:`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${r==="simulator"?"bg-[#292524] text-white":"bg-white text-stone-600 border border-[#EADBCE]"}`,children:"Pace Simulator"})]})]})});var bf={};(function s(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var U=new OffscreenCanvas(1,1),w=U.getContext("2d");w.fillRect(0,0,1,1);var W=U.transferToImageBitmap();w.createPattern(W,"no-repeat")}catch{return!1}return!0})();function f(){}function p(U){var w=t.exports.Promise,W=w!==void 0?w:e.Promise;return typeof W=="function"?new W(U):(U(f,f),null)}var m=(function(U,w){return{transform:function(W){if(U)return W;if(w.has(W))return w.get(W);var ye=new OffscreenCanvas(W.width,W.height),X=ye.getContext("2d");return X.drawImage(W,0,0),w.set(W,ye),ye},clear:function(){w.clear()}}})(d,new Map),_=(function(){var U=Math.floor(16.666666666666668),w,W,ye={},X=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(re){var fe=Math.random();return ye[fe]=requestAnimationFrame(function ie(xe){X===xe||X+U-1<xe?(X=xe,delete ye[fe],re()):ye[fe]=requestAnimationFrame(ie)}),fe},W=function(re){ye[re]&&cancelAnimationFrame(ye[re])}):(w=function(re){return setTimeout(re,U)},W=function(re){return clearTimeout(re)}),{frame:w,cancel:W}})(),x=(function(){var U,w,W={};function ye(X){function re(fe,ie){X.postMessage({options:fe||{},callback:ie})}X.init=function(ie){var xe=ie.transferControlToOffscreen();X.postMessage({canvas:xe},[xe])},X.fire=function(ie,xe,Le){if(w)return re(ie,null),w;var Ae=Math.random().toString(36).slice(2);return w=p(function($e){function ve(ge){ge.data.callback===Ae&&(delete W[Ae],X.removeEventListener("message",ve),w=null,m.clear(),Le(),$e())}X.addEventListener("message",ve),re(ie,Ae),W[Ae]=ve.bind(null,{data:{callback:Ae}})}),w},X.reset=function(){X.postMessage({reset:!0});for(var ie in W)W[ie](),delete W[ie]}}return function(){if(U)return U;if(!r&&l){var X=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{U=new Worker(URL.createObjectURL(new Blob([X])))}catch(re){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",re),null}ye(U)}return U}})(),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function M(U,w){return w?w(U):U}function C(U){return U!=null}function E(U,w,W){return M(U&&C(U[w])?U[w]:y[w],W)}function S(U){return U<0?0:Math.floor(U)}function O(U,w){return Math.floor(Math.random()*(w-U))+U}function F(U){return parseInt(U,16)}function A(U){return U.map(I)}function I(U){var w=String(U).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:F(w.substring(0,2)),g:F(w.substring(2,4)),b:F(w.substring(4,6))}}function B(U){var w=E(U,"origin",Object);return w.x=E(w,"x",Number),w.y=E(w,"y",Number),w}function V(U){U.width=document.documentElement.clientWidth,U.height=document.documentElement.clientHeight}function H(U){var w=U.getBoundingClientRect();U.width=w.width,U.height=w.height}function P(U){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=U,w}function R(U,w,W,ye,X,re,fe,ie,xe){U.save(),U.translate(w,W),U.rotate(re),U.scale(ye,X),U.arc(0,0,1,fe,ie,xe),U.restore()}function k(U){var w=U.angle*(Math.PI/180),W=U.spread*(Math.PI/180);return{x:U.x,y:U.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:U.startVelocity*.5+Math.random()*U.startVelocity,angle2D:-w+(.5*W-Math.random()*W),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:U.color,shape:U.shape,tick:0,totalTicks:U.ticks,decay:U.decay,drift:U.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:U.gravity*3,ovalScalar:.6,scalar:U.scalar,flat:U.flat}}function J(U,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var W=w.tick++/w.totalTicks,ye=w.x+w.random*w.tiltCos,X=w.y+w.random*w.tiltSin,re=w.wobbleX+w.random*w.tiltCos,fe=w.wobbleY+w.random*w.tiltSin;if(U.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-W)+")",U.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))U.fill(pe(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(re-ye)*.1,Math.abs(fe-X)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var ie=Math.PI/10*w.wobble,xe=Math.abs(re-ye)*.1,Le=Math.abs(fe-X)*.1,Ae=w.shape.bitmap.width*w.scalar,$e=w.shape.bitmap.height*w.scalar,ve=new DOMMatrix([Math.cos(ie)*xe,Math.sin(ie)*xe,-Math.sin(ie)*Le,Math.cos(ie)*Le,w.x,w.y]);ve.multiplySelf(new DOMMatrix(w.shape.matrix));var ge=U.createPattern(m.transform(w.shape.bitmap),"no-repeat");ge.setTransform(ve),U.globalAlpha=1-W,U.fillStyle=ge,U.fillRect(w.x-Ae/2,w.y-$e/2,Ae,$e),U.globalAlpha=1}else if(w.shape==="circle")U.ellipse?U.ellipse(w.x,w.y,Math.abs(re-ye)*w.ovalScalar,Math.abs(fe-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):R(U,w.x,w.y,Math.abs(re-ye)*w.ovalScalar,Math.abs(fe-X)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var D=Math.PI/2*3,Ue=4*w.scalar,Ee=8*w.scalar,Fe=w.x,Te=w.y,Qe=5,Ne=Math.PI/Qe;Qe--;)Fe=w.x+Math.cos(D)*Ee,Te=w.y+Math.sin(D)*Ee,U.lineTo(Fe,Te),D+=Ne,Fe=w.x+Math.cos(D)*Ue,Te=w.y+Math.sin(D)*Ue,U.lineTo(Fe,Te),D+=Ne;else U.moveTo(Math.floor(w.x),Math.floor(w.y)),U.lineTo(Math.floor(w.wobbleX),Math.floor(X)),U.lineTo(Math.floor(re),Math.floor(fe)),U.lineTo(Math.floor(ye),Math.floor(w.wobbleY));return U.closePath(),U.fill(),w.tick<w.totalTicks}function Z(U,w,W,ye,X){var re=w.slice(),fe=U.getContext("2d"),ie,xe,Le=p(function(Ae){function $e(){ie=xe=null,fe.clearRect(0,0,ye.width,ye.height),m.clear(),X(),Ae()}function ve(){r&&!(ye.width===o.width&&ye.height===o.height)&&(ye.width=U.width=o.width,ye.height=U.height=o.height),!ye.width&&!ye.height&&(W(U),ye.width=U.width,ye.height=U.height),fe.clearRect(0,0,ye.width,ye.height),re=re.filter(function(ge){return J(fe,ge)}),re.length?ie=_.frame(ve):$e()}ie=_.frame(ve),xe=$e});return{addFettis:function(Ae){return re=re.concat(Ae),Le},canvas:U,promise:Le,reset:function(){ie&&_.cancel(ie),xe&&xe()}}}function oe(U,w){var W=!U,ye=!!E(w||{},"resize"),X=!1,re=E(w,"disableForReducedMotion",Boolean),fe=l&&!!E(w||{},"useWorker"),ie=fe?x():null,xe=W?V:H,Le=U&&ie?!!U.__confetti_initialized:!1,Ae=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,$e;function ve(D,Ue,Ee){for(var Fe=E(D,"particleCount",S),Te=E(D,"angle",Number),Qe=E(D,"spread",Number),Ne=E(D,"startVelocity",Number),L=E(D,"decay",Number),T=E(D,"gravity",Number),ee=E(D,"drift",Number),me=E(D,"colors",A),Me=E(D,"ticks",Number),_e=E(D,"shapes"),Ye=E(D,"scalar"),Ie=!!E(D,"flat"),He=B(D),ft=Fe,Ce=[],Xe=U.width*He.x,rt=U.height*He.y;ft--;)Ce.push(k({x:Xe,y:rt,angle:Te,spread:Qe,startVelocity:Ne,color:me[ft%me.length],shape:_e[O(0,_e.length)],ticks:Me,decay:L,gravity:T,drift:ee,scalar:Ye,flat:Ie}));return $e?$e.addFettis(Ce):($e=Z(U,Ce,xe,Ue,Ee),$e.promise)}function ge(D){var Ue=re||E(D,"disableForReducedMotion",Boolean),Ee=E(D,"zIndex",Number);if(Ue&&Ae)return p(function(Ne){Ne()});W&&$e?U=$e.canvas:W&&!U&&(U=P(Ee),document.body.appendChild(U)),ye&&!Le&&xe(U);var Fe={width:U.width,height:U.height};ie&&!Le&&ie.init(U),Le=!0,ie&&(U.__confetti_initialized=!0);function Te(){if(ie){var Ne={getBoundingClientRect:function(){if(!W)return U.getBoundingClientRect()}};xe(Ne),ie.postMessage({resize:{width:Ne.width,height:Ne.height}});return}Fe.width=Fe.height=null}function Qe(){$e=null,ye&&(X=!1,e.removeEventListener("resize",Te)),W&&U&&(document.body.contains(U)&&document.body.removeChild(U),U=null,Le=!1)}return ye&&!X&&(X=!0,e.addEventListener("resize",Te,!1)),ie?ie.fire(D,Fe,Qe):ve(D,Fe,Qe)}return ge.reset=function(){ie&&ie.reset(),$e&&$e.reset()},ge}var ue;function ae(){return ue||(ue=oe(null,{useWorker:!0,resize:!0})),ue}function pe(U,w,W,ye,X,re,fe){var ie=new Path2D(U),xe=new Path2D;xe.addPath(ie,new DOMMatrix(w));var Le=new Path2D;return Le.addPath(xe,new DOMMatrix([Math.cos(fe)*X,Math.sin(fe)*X,-Math.sin(fe)*re,Math.cos(fe)*re,W,ye])),Le}function j(U){if(!u)throw new Error("path confetti are not supported in this browser");var w,W;typeof U=="string"?w=U:(w=U.path,W=U.matrix);var ye=new Path2D(w),X=document.createElement("canvas"),re=X.getContext("2d");if(!W){for(var fe=1e3,ie=fe,xe=fe,Le=0,Ae=0,$e,ve,ge=0;ge<fe;ge+=2)for(var D=0;D<fe;D+=2)re.isPointInPath(ye,ge,D,"nonzero")&&(ie=Math.min(ie,ge),xe=Math.min(xe,D),Le=Math.max(Le,ge),Ae=Math.max(Ae,D));$e=Le-ie,ve=Ae-xe;var Ue=10,Ee=Math.min(Ue/$e,Ue/ve);W=[Ee,0,0,Ee,-Math.round($e/2+ie)*Ee,-Math.round(ve/2+xe)*Ee]}return{type:"path",path:w,matrix:W}}function de(U){var w,W=1,ye="#000000",X='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof U=="string"?w=U:(w=U.text,W="scalar"in U?U.scalar:W,X="fontFamily"in U?U.fontFamily:X,ye="color"in U?U.color:ye);var re=10*W,fe=""+re+"px "+X,ie=new OffscreenCanvas(re,re),xe=ie.getContext("2d");xe.font=fe;var Le=xe.measureText(w),Ae=Math.ceil(Le.actualBoundingBoxRight+Le.actualBoundingBoxLeft),$e=Math.ceil(Le.actualBoundingBoxAscent+Le.actualBoundingBoxDescent),ve=2,ge=Le.actualBoundingBoxLeft+ve,D=Le.actualBoundingBoxAscent+ve;Ae+=ve+ve,$e+=ve+ve,ie=new OffscreenCanvas(Ae,$e),xe=ie.getContext("2d"),xe.font=fe,xe.fillStyle=ye,xe.fillText(w,ge,D);var Ue=1/W;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[Ue,0,0,Ue,-Ae*Ue/2,-$e*Ue/2]}}t.exports=function(){return ae().apply(this,arguments)},t.exports.reset=function(){ae().reset()},t.exports.create=oe,t.exports.shapeFromPath=j,t.exports.shapeFromText=de})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),bf,!1);const Qr=bf.exports;bf.exports.create;const K_=({currentProfile:s,onProfileLoaded:e,onSelectSample:t})=>{const[r,o]=at.useState("smart_paste"),[l,u]=at.useState(""),[d,f]=at.useState(""),[p,m]=at.useState(""),[_,x]=at.useState(!1),[y,M]=at.useState(null),C=()=>{if(!p.trim()){M({type:"error",text:"Please paste your Google Cloud Skills Boost page text or HTML into the box."});return}try{const O=Dg(p);if(O.badges.length===0){M({type:"error",text:"No badges could be detected in the pasted text. On your public profile page, select all text (Ctrl+A) and copy (Ctrl+C), then paste here."});return}const F=Zo(d.trim()||O.name||"Cloud Champion",80),A=ql(l)||s.profileUrl||"https://www.cloudskillsboost.google/public_profiles/user",I={id:`profile-${Date.now()}`,name:F,avatarSeed:F.replace(/\s+/g,""),profileUrl:A,lastUpdated:new Date().toISOString().split("T")[0],isCurrent:!0,badges:O.badges,seasonTarget:"Season 2026"};$l(I),e(I),Qr({particleCount:70,spread:80,colors:["#10B981","#F59E0B","#EA580C"]}),M({type:"success",text:`Success! Account created for "${I.name}". Imported ${O.badges.length} verified badges. Your account is permanently saved locally!`}),m(""),f("")}catch(O){M({type:"error",text:`Import failed: ${(O==null?void 0:O.message)||"Invalid format"}`})}},E=async O=>{if(O.preventDefault(),!!l.trim()){x(!0),M({type:"info",text:"Connecting to Google Cloud Skills Boost..."});try{const F=await Pv(l),A=Zo(d.trim()||F.name||"Cloud Champion",80),I=ql(l)||"https://www.cloudskillsboost.google/public_profiles/user",B={id:`profile-${Date.now()}`,name:A,avatarSeed:A.replace(/\s+/g,""),profileUrl:I,lastUpdated:new Date().toISOString().split("T")[0],isCurrent:!0,badges:F.badges,seasonTarget:"Season 2026"};$l(B),e(B),Qr({particleCount:60,spread:70,colors:["#F59E0B","#10B981","#EA580C"]}),M({type:"success",text:`Account created for "${B.name}"! Imported ${F.badges.length} badges. Saved locally!`}),u(""),f("")}catch{M({type:"error",text:'Google Cloud Skills Boost blocks automated scrapers with Cloudflare bot-protection (HTTP 403). Switched to "Instant Text / HTML Paste" below — simply copy your profile page text and paste it here!'}),o("smart_paste")}finally{x(!1)}}},S=async()=>{try{const O=await navigator.clipboard.readText();O&&(m(O),M({type:"info",text:'Pasted content from clipboard! Click "Calculate & Save Account" to proceed.'}))}catch{M({type:"info",text:"Please paste manually into the text box using Ctrl+V (or Cmd+V)."})}};return v.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-soft mb-8 transition-all",children:[v.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#EADBCE]",children:[v.jsxs("div",{className:"max-w-2xl",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[v.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A]",children:[v.jsx(_m,{className:"w-3.5 h-3.5"}),"Auto-Saving Profile Engine"]}),v.jsx("span",{className:"text-xs font-sans text-stone-500 hidden sm:inline",children:"Saved permanently in your browser • Zero re-entry"})]}),v.jsx("h2",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Connect Your Public Profile & Calculate Points"}),v.jsx("p",{className:"text-stone-600 text-sm mt-1 leading-relaxed",children:"Import your Google Cloud Skills Boost badges once. Your points, velocity, and swag milestones are saved to your account automatically."})]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-2 bg-[#FAF7F2] p-2.5 rounded-2xl border border-[#EADBCE]",children:[v.jsxs("span",{className:"text-xs font-semibold text-stone-500 flex items-center gap-1 px-1 font-sans",children:[v.jsx(q_,{className:"w-3.5 h-3.5"})," Instant Demo:"]}),v.jsx("button",{onClick:()=>t("prof-arjun"),className:`px-3 py-1.5 rounded-xl text-xs font-medium transition ${s.id==="prof-arjun"?"bg-[#B45309] text-white shadow-sm font-semibold":"bg-white text-stone-700 hover:bg-[#F4ECE1] border border-[#EADBCE]"}`,children:"Arjun (68 pts)"}),v.jsx("button",{onClick:()=>t("prof-sophia"),className:`px-3 py-1.5 rounded-xl text-xs font-medium transition ${s.id==="prof-sophia"?"bg-[#B45309] text-white shadow-sm font-semibold":"bg-white text-stone-700 hover:bg-[#F4ECE1] border border-[#EADBCE]"}`,children:"Sophia (38 pts)"}),v.jsx("button",{onClick:()=>t("prof-leo"),className:`px-3 py-1.5 rounded-xl text-xs font-medium transition ${s.id==="prof-leo"?"bg-[#B45309] text-white shadow-sm font-semibold":"bg-white text-stone-700 hover:bg-[#F4ECE1] border border-[#EADBCE]"}`,children:"Leo (14 pts)"})]})]}),v.jsxs("div",{className:"flex items-center gap-2 mt-6 mb-4",children:[v.jsxs("button",{onClick:()=>o("smart_paste"),className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-sans transition flex items-center gap-2 ${r==="smart_paste"?"bg-[#292524] text-white shadow-sm":"bg-[#FAF7F2] text-stone-600 hover:bg-[#F4ECE1] border border-[#EADBCE]"}`,children:[v.jsx(s_,{className:"w-4 h-4 text-arcade-amber"}),v.jsx("span",{children:"Instant Paste (Page Text or HTML)"}),v.jsx("span",{className:"px-1.5 py-0.2 rounded-full text-[10px] font-mono bg-[#10B981] text-white font-bold",children:"100% Reliable"})]}),v.jsxs("button",{onClick:()=>o("url_sync"),className:`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-sans transition flex items-center gap-2 ${r==="url_sync"?"bg-[#292524] text-white shadow-sm":"bg-[#FAF7F2] text-stone-600 hover:bg-[#F4ECE1] border border-[#EADBCE]"}`,children:[v.jsx(Yl,{className:"w-4 h-4 text-stone-400"}),v.jsx("span",{children:"Direct Profile URL Fetch"})]})]}),r==="smart_paste"&&v.jsxs("div",{className:"bg-[#FAF7F2] p-5 rounded-2xl border border-[#EADBCE] animate-fadeIn",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 p-3 bg-white rounded-xl border border-[#EADBCE] text-xs text-stone-700",children:[v.jsxs("div",{className:"flex items-start gap-2.5",children:[v.jsx(jg,{className:"w-4 h-4 text-[#B45309] shrink-0 mt-0.5"}),v.jsxs("div",{children:[v.jsx("p",{className:"font-semibold text-stone-900",children:"How to import in 5 seconds (bypasses Google's Cloudflare 403 block):"}),v.jsxs("p",{className:"text-stone-500 mt-0.5",children:["1. Open your Google Cloud Skills Boost public profile • 2. Select and copy all page text (",v.jsx("kbd",{className:"font-mono bg-stone-100 px-1 rounded border",children:"Ctrl+A"}),", ",v.jsx("kbd",{className:"font-mono bg-stone-100 px-1 rounded border",children:"Ctrl+C"}),") • 3. Paste here!"]})]})]}),l&&v.jsxs("a",{href:l.startsWith("http")?l:`https://${l}`,target:"_blank",rel:"noreferrer",className:"px-3 py-1.5 bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#B45309] rounded-lg font-semibold text-xs flex items-center gap-1.5 whitespace-nowrap shrink-0 border border-[#FDE68A]",children:[v.jsx("span",{children:"Open Profile Tab"}),v.jsx(i_,{className:"w-3.5 h-3.5"})]})]}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-3",children:[v.jsx("input",{type:"text",value:d,maxLength:80,onChange:O=>f(O.target.value),placeholder:"Account Name (e.g. My Main Profile)",className:"sm:w-64 px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"}),v.jsx("input",{type:"text",value:l,onChange:O=>u(O.target.value),placeholder:"Profile URL to link (optional)",className:"flex-1 px-3.5 py-2.5 bg-white border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsxs("div",{className:"relative",children:[v.jsx("textarea",{rows:4,value:p,onChange:O=>m(O.target.value),placeholder:"Paste your profile page text (Ctrl+A, Ctrl+C from your profile page) or HTML source code here...",className:"w-full p-3 font-mono text-xs bg-white border border-[#EADBCE] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59E0B] text-stone-800"}),v.jsxs("button",{type:"button",onClick:S,className:"absolute right-3 bottom-4 px-2.5 py-1 bg-[#FAF7F2] hover:bg-[#F4ECE1] text-stone-600 rounded-lg text-xs font-mono border border-[#EADBCE] flex items-center gap-1 transition shadow-sm",title:"Paste from clipboard",children:[v.jsx(Jv,{className:"w-3.5 h-3.5 text-[#B45309]"}),v.jsx("span",{children:"Paste Clipboard"})]})]}),v.jsxs("div",{className:"flex justify-between items-center mt-3 pt-2",children:[v.jsx("span",{className:"text-[11px] text-stone-500 font-sans",children:"Accepts: Rendered text, Page source HTML, or JSON export"}),v.jsxs("button",{onClick:C,disabled:!p.trim(),className:"px-6 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] text-white rounded-xl text-xs sm:text-sm font-bold font-display shadow-arcade-amber hover:shadow-sm active:translate-y-0.5 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",children:[v.jsx(Zl,{className:"w-4 h-4"}),v.jsx("span",{children:"Calculate & Save Account"})]})]})]}),r==="url_sync"&&v.jsxs("form",{onSubmit:E,className:"bg-[#FAF7F2] p-5 rounded-2xl border border-[#EADBCE] animate-fadeIn",children:[v.jsxs("p",{className:"text-xs text-stone-600 mb-3 font-sans",children:[v.jsx("strong",{children:"Note:"})," Google Cloud Skills Boost employs Cloudflare bot-protection (HTTP 403) which may block automated network scrapers. If blocked, switch to the ",v.jsx("em",{children:"Instant Paste"})," tab above."]}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[v.jsxs("div",{className:"relative flex-1",children:[v.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400",children:v.jsx(Yl,{className:"w-4 h-4"})}),v.jsx("input",{type:"text",value:l,onChange:O=>u(O.target.value),placeholder:"https://www.cloudskillsboost.google/public_profiles/...",className:"w-full pl-10 pr-4 py-3 bg-white border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsx("input",{type:"text",value:d,maxLength:60,onChange:O=>f(O.target.value),placeholder:"Account name (optional)",className:"w-full sm:w-48 px-4 py-3 bg-white border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"}),v.jsx("button",{type:"submit",disabled:_||!l.trim(),className:"px-6 py-3 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] hover:from-[#D97706] hover:to-[#C2410C] text-white rounded-xl text-sm font-bold font-display shadow-arcade-amber hover:shadow-sm active:translate-y-0.5 transition flex items-center justify-center gap-2 disabled:opacity-50",children:_?v.jsxs(v.Fragment,{children:[v.jsx(Em,{className:"w-4 h-4 animate-spin"}),v.jsx("span",{children:"Fetching..."})]}):v.jsxs(v.Fragment,{children:[v.jsx(Zl,{className:"w-4 h-4"}),v.jsx("span",{children:"Fetch & Save"})]})})]})]}),v.jsx("div",{className:"flex items-center justify-between mt-4 text-xs text-stone-500 font-sans",children:v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx(_m,{className:"w-4 h-4 text-[#059669]"}),v.jsxs("span",{children:["Active Account: ",v.jsx("strong",{className:"text-stone-800",children:s.name})]}),v.jsxs("span",{className:"text-stone-400",children:["(",s.badges.length," badges loaded)"]})]})}),y&&v.jsxs("div",{className:`mt-4 p-4 rounded-2xl flex items-start gap-3 text-xs sm:text-sm font-sans ${y.type==="success"?"bg-[#ECFDF5] border border-[#A7F3D0] text-[#047857]":y.type==="error"?"bg-[#FFFBEB] border border-[#FDE68A] text-[#B45309]":"bg-[#FAF5FF] border border-[#E9D5FF] text-[#7E22CE]"}`,children:[y.type==="success"&&v.jsx(Hg,{className:"w-5 h-5 flex-shrink-0 mt-0.5 text-[#059669]"}),y.type==="error"&&v.jsx(Vg,{className:"w-5 h-5 flex-shrink-0 mt-0.5 text-[#B45309]"}),y.type==="info"&&v.jsx(Em,{className:"w-5 h-5 flex-shrink-0 animate-spin mt-0.5 text-[#7E22CE]"}),v.jsx("div",{className:"flex-1",children:v.jsx("p",{className:"leading-snug",children:y.text})}),v.jsx("button",{onClick:()=>M(null),className:"text-stone-400 hover:text-stone-600 font-bold ml-2 text-base",children:"×"})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="173",J_=0,Mm=1,Q_=2,$g=1,ey=2,Vi=3,br=0,kn=1,Hi=2,Mr=0,Ws=1,wm=2,bm=3,Cm=4,ty=5,Yr=100,ny=101,iy=102,ry=103,sy=104,oy=200,ay=201,ly=202,cy=203,Rd=204,Pd=205,uy=206,dy=207,fy=208,hy=209,py=210,my=211,gy=212,xy=213,vy=214,Nd=0,Dd=1,Ld=2,$s=3,Fd=4,Id=5,Ud=6,kd=7,Yg=0,_y=1,yy=2,wr=0,Sy=1,Ey=2,My=3,wy=4,by=5,Cy=6,Ty=7,Zg=300,Ys=301,Zs=302,Od=303,Bd=304,tc=306,zd=1e3,Kr=1001,Vd=1002,hi=1003,Ay=1004,ml=1005,Ei=1006,Gu=1007,Jr=1008,Xi=1009,Kg=1010,Jg=1011,Jo=1012,Tf=1013,es=1014,Gi=1015,ia=1016,Af=1017,Rf=1018,Ks=1020,Qg=35902,e0=1021,t0=1022,fi=1023,n0=1024,i0=1025,Xs=1026,Js=1027,r0=1028,Pf=1029,s0=1030,Nf=1031,Df=1033,Vl=33776,Hl=33777,Gl=33778,jl=33779,Hd=35840,Gd=35841,jd=35842,Wd=35843,Xd=36196,qd=37492,$d=37496,Yd=37808,Zd=37809,Kd=37810,Jd=37811,Qd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,of=37818,af=37819,lf=37820,cf=37821,Wl=36492,uf=36494,df=36495,o0=36283,ff=36284,hf=36285,pf=36286,Ry=3200,Py=3201,a0=0,Ny=1,Er="",ei="srgb",Qs="srgb-linear",Kl="linear",Dt="srgb",As=7680,Tm=519,Dy=512,Ly=513,Fy=514,l0=515,Iy=516,Uy=517,ky=518,Oy=519,Am=35044,Rm="300 es",ji=2e3,Jl=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,mf=180/Math.PI;function io(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]).toLowerCase()}function St(s,e,t){return Math.max(e,Math.min(t,s))}function By(s,e){return(s%e+e)%e}function Wu(s,e,t){return(1-t)*s+t*e}function Bo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,r,o,l,u,d,f,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p)}set(e,t,r,o,l,u,d,f,p){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=l,m[5]=f,m[6]=r,m[7]=u,m[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],m=r[4],_=r[7],x=r[2],y=r[5],M=r[8],C=o[0],E=o[3],S=o[6],O=o[1],F=o[4],A=o[7],I=o[2],B=o[5],V=o[8];return l[0]=u*C+d*O+f*I,l[3]=u*E+d*F+f*B,l[6]=u*S+d*A+f*V,l[1]=p*C+m*O+_*I,l[4]=p*E+m*F+_*B,l[7]=p*S+m*A+_*V,l[2]=x*C+y*O+M*I,l[5]=x*E+y*F+M*B,l[8]=x*S+y*A+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8];return t*u*m-t*d*p-r*l*m+r*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],_=m*u-d*p,x=d*f-m*l,y=p*l-u*f,M=t*_+r*x+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=_*C,e[1]=(o*p-m*r)*C,e[2]=(d*r-o*u)*C,e[3]=x*C,e[4]=(m*t-o*f)*C,e[5]=(o*l-d*t)*C,e[6]=y*C,e[7]=(r*f-p*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Xu.makeScale(e,t)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new gt;function c0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function zy(){const s=Ql("canvas");return s.style.display="block",s}const Pm={};function Hs(s){s in Pm||(Pm[s]=!0,console.warn(s))}function Vy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Hy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Gy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jy(){const s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=Wi(o.r),o.g=Wi(o.g),o.b=Wi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Er?Kl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Qs]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:Nm,fromXYZ:Dm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Nm,fromXYZ:Dm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Pt=jy();function Wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class Wy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Ql("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ql("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Wi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Wi(t[r]/255)*255):t[r]=Wi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xy=0;class u0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(qu(o[u].image)):l.push(qu(o[u]))}else l=qu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;class On extends no{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=Kr,o=Kr,l=Ei,u=Jr,d=fi,f=Xi,p=On.DEFAULT_ANISOTROPY,m=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=io(),this.name="",this.source=new u0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zd:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case Vd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zd:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case Vd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Zg;On.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,t=0,r=0,o=1){Lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],m=f[4],_=f[8],x=f[1],y=f[5],M=f[9],C=f[2],E=f[6],S=f[10];if(Math.abs(m-x)<.01&&Math.abs(_-C)<.01&&Math.abs(M-E)<.01){if(Math.abs(m+x)<.1&&Math.abs(_+C)<.1&&Math.abs(M+E)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,A=(y+1)/2,I=(S+1)/2,B=(m+x)/4,V=(_+C)/4,H=(M+E)/4;return F>A&&F>I?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=B/r,l=V/r):A>I?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=B/o,l=H/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=V/l,o=H/l),this.set(r,o,l,t),this}let O=Math.sqrt((E-M)*(E-M)+(_-C)*(_-C)+(x-m)*(x-m));return Math.abs(O)<.001&&(O=1),this.x=(E-M)/O,this.y=(_-C)/O,this.z=(x-m)/O,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $y extends no{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new On(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new u0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends $y{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class d0 extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yy extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ra{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],p=r[o+1],m=r[o+2],_=r[o+3];const x=l[u+0],y=l[u+1],M=l[u+2],C=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_;return}if(d===1){e[t+0]=x,e[t+1]=y,e[t+2]=M,e[t+3]=C;return}if(_!==C||f!==x||p!==y||m!==M){let E=1-d;const S=f*x+p*y+m*M+_*C,O=S>=0?1:-1,F=1-S*S;if(F>Number.EPSILON){const I=Math.sqrt(F),B=Math.atan2(I,S*O);E=Math.sin(E*B)/I,d=Math.sin(d*B)/I}const A=d*O;if(f=f*E+x*A,p=p*E+y*A,m=m*E+M*A,_=_*E+C*A,E===1-d){const I=1/Math.sqrt(f*f+p*p+m*m+_*_);f*=I,p*=I,m*=I,_*=I}}e[t]=f,e[t+1]=p,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],p=r[o+2],m=r[o+3],_=l[u],x=l[u+1],y=l[u+2],M=l[u+3];return e[t]=d*M+m*_+f*y-p*x,e[t+1]=f*M+m*x+p*_-d*y,e[t+2]=p*M+m*y+d*x-f*_,e[t+3]=m*M-d*_-f*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),m=d(o/2),_=d(l/2),x=f(r/2),y=f(o/2),M=f(l/2);switch(u){case"XYZ":this._x=x*m*_+p*y*M,this._y=p*y*_-x*m*M,this._z=p*m*M+x*y*_,this._w=p*m*_-x*y*M;break;case"YXZ":this._x=x*m*_+p*y*M,this._y=p*y*_-x*m*M,this._z=p*m*M-x*y*_,this._w=p*m*_+x*y*M;break;case"ZXY":this._x=x*m*_-p*y*M,this._y=p*y*_+x*m*M,this._z=p*m*M+x*y*_,this._w=p*m*_-x*y*M;break;case"ZYX":this._x=x*m*_-p*y*M,this._y=p*y*_+x*m*M,this._z=p*m*M-x*y*_,this._w=p*m*_+x*y*M;break;case"YZX":this._x=x*m*_+p*y*M,this._y=p*y*_+x*m*M,this._z=p*m*M-x*y*_,this._w=p*m*_-x*y*M;break;case"XZY":this._x=x*m*_-p*y*M,this._y=p*y*_-x*m*M,this._z=p*m*M+x*y*_,this._w=p*m*_+x*y*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],m=t[6],_=t[10],x=r+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(m-f)*y,this._y=(l-p)*y,this._z=(u-o)*y}else if(r>d&&r>_){const y=2*Math.sqrt(1+r-d-_);this._w=(m-f)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(l+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-r-_);this._w=(l-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(f+m)/y}else{const y=2*Math.sqrt(1+_-r-d);this._w=(u-o)/y,this._x=(l+p)/y,this._y=(f+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,m=t._w;return this._x=r*m+u*d+o*p-l*f,this._y=o*m+u*f+l*d-r*p,this._z=l*m+u*p+r*f-o*d,this._w=u*m-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const y=1-t;return this._w=y*u+t*this._w,this._x=y*r+t*this._x,this._y=y*o+t*this._y,this._z=y*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),m=Math.atan2(p,d),_=Math.sin((1-t)*m)/p,x=Math.sin(t*m)/p;return this._w=u*_+this._w*x,this._x=r*_+this._x*x,this._y=o*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*r),m=2*(d*t-l*o),_=2*(l*r-u*t);return this.x=t+f*p+u*_-d*m,this.y=r+f*m+d*p-l*_,this.z=o+f*_+l*m-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new Y,Lm=new ra;class sa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,li):li.fromBufferAttribute(l,u),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gl.copy(r.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),xl.subVectors(this.max,zo),Ps.subVectors(e.a,zo),Ns.subVectors(e.b,zo),Ds.subVectors(e.c,zo),mr.subVectors(Ns,Ps),gr.subVectors(Ds,Ns),Vr.subVectors(Ps,Ds);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Vr.z,Vr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Vr.z,0,-Vr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Vr.y,Vr.x,0];return!Yu(t,Ps,Ns,Ds,xl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,Ps,Ns,Ds,xl))?!1:(vl.crossVectors(mr,gr),t=[vl.x,vl.y,vl.z],Yu(t,Ps,Ns,Ds,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],li=new Y,gl=new sa,Ps=new Y,Ns=new Y,Ds=new Y,mr=new Y,gr=new Y,Vr=new Y,zo=new Y,xl=new Y,vl=new Y,Hr=new Y;function Yu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Hr.fromArray(s,l);const d=o.x*Math.abs(Hr.x)+o.y*Math.abs(Hr.y)+o.z*Math.abs(Hr.z),f=e.dot(Hr),p=t.dot(Hr),m=r.dot(Hr);if(Math.max(-Math.max(f,p,m),Math.min(f,p,m))>d)return!1}return!0}const Zy=new sa,Vo=new Y,Zu=new Y;class nc{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Zy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Vo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(Zu)),this.expandByPoint(Vo.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new Y,Ku=new Y,_l=new Y,xr=new Y,Ju=new Y,yl=new Y,Qu=new Y;class f0{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ku.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(Ku);const l=e.distanceTo(t)*.5,u=-this.direction.dot(_l),d=xr.dot(this.direction),f=-xr.dot(_l),p=xr.lengthSq(),m=Math.abs(1-u*u);let _,x,y,M;if(m>0)if(_=u*f-d,x=u*d-f,M=l*m,_>=0)if(x>=-M)if(x<=M){const C=1/m;_*=C,x*=C,y=_*(_+u*x+2*d)+x*(u*_+x+2*f)+p}else x=l,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*f)+p;else x=-l,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*f)+p;else x<=-M?(_=Math.max(0,-(-u*l+d)),x=_>0?-l:Math.min(Math.max(-l,-f),l),y=-_*_+x*(x+2*f)+p):x<=M?(_=0,x=Math.min(Math.max(-l,-f),l),y=x*(x+2*f)+p):(_=Math.max(0,-(u*l+d)),x=_>0?l:Math.min(Math.max(-l,-f),l),y=-_*_+x*(x+2*f)+p);else x=u>0?-l:l,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ku).addScaledVector(_l,x),y}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),o=ki.dot(ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const p=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),m>=0?(l=(e.min.y-x.y)*m,u=(e.max.y-x.y)*m):(l=(e.max.y-x.y)*m,u=(e.min.y-x.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,f=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,f=(e.min.z-x.z)*_),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,o,l){Ju.subVectors(t,e),yl.subVectors(r,e),Qu.crossVectors(Ju,yl);let u=this.direction.dot(Qu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const f=d*this.direction.dot(yl.crossVectors(xr,yl));if(f<0)return null;const p=d*this.direction.dot(Ju.cross(xr));if(p<0||f+p>u)return null;const m=-d*xr.dot(Qu);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,r,o,l,u,d,f,p,m,_,x,y,M,C,E){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p,m,_,x,y,M,C,E)}set(e,t,r,o,l,u,d,f,p,m,_,x,y,M,C,E){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=l,S[5]=u,S[9]=d,S[13]=f,S[2]=p,S[6]=m,S[10]=_,S[14]=x,S[3]=y,S[7]=M,S[11]=C,S[15]=E,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=u*m,y=u*_,M=d*m,C=d*_;t[0]=f*m,t[4]=-f*_,t[8]=p,t[1]=y+M*p,t[5]=x-C*p,t[9]=-d*f,t[2]=C-x*p,t[6]=M+y*p,t[10]=u*f}else if(e.order==="YXZ"){const x=f*m,y=f*_,M=p*m,C=p*_;t[0]=x+C*d,t[4]=M*d-y,t[8]=u*p,t[1]=u*_,t[5]=u*m,t[9]=-d,t[2]=y*d-M,t[6]=C+x*d,t[10]=u*f}else if(e.order==="ZXY"){const x=f*m,y=f*_,M=p*m,C=p*_;t[0]=x-C*d,t[4]=-u*_,t[8]=M+y*d,t[1]=y+M*d,t[5]=u*m,t[9]=C-x*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const x=u*m,y=u*_,M=d*m,C=d*_;t[0]=f*m,t[4]=M*p-y,t[8]=x*p+C,t[1]=f*_,t[5]=C*p+x,t[9]=y*p-M,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const x=u*f,y=u*p,M=d*f,C=d*p;t[0]=f*m,t[4]=C-x*_,t[8]=M*_+y,t[1]=_,t[5]=u*m,t[9]=-d*m,t[2]=-p*m,t[6]=y*_+M,t[10]=x-C*_}else if(e.order==="XZY"){const x=u*f,y=u*p,M=d*f,C=d*p;t[0]=f*m,t[4]=-_,t[8]=p*m,t[1]=x*_+C,t[5]=u*m,t[9]=y*_-M,t[2]=M*_-y,t[6]=d*m,t[10]=C*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Jy)}lookAt(e,t,r){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),vr.crossVectors(r,Gn),vr.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),vr.crossVectors(r,Gn)),vr.normalize(),Sl.crossVectors(Gn,vr),o[0]=vr.x,o[4]=Sl.x,o[8]=Gn.x,o[1]=vr.y,o[5]=Sl.y,o[9]=Gn.y,o[2]=vr.z,o[6]=Sl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],m=r[1],_=r[5],x=r[9],y=r[13],M=r[2],C=r[6],E=r[10],S=r[14],O=r[3],F=r[7],A=r[11],I=r[15],B=o[0],V=o[4],H=o[8],P=o[12],R=o[1],k=o[5],J=o[9],Z=o[13],oe=o[2],ue=o[6],ae=o[10],pe=o[14],j=o[3],de=o[7],U=o[11],w=o[15];return l[0]=u*B+d*R+f*oe+p*j,l[4]=u*V+d*k+f*ue+p*de,l[8]=u*H+d*J+f*ae+p*U,l[12]=u*P+d*Z+f*pe+p*w,l[1]=m*B+_*R+x*oe+y*j,l[5]=m*V+_*k+x*ue+y*de,l[9]=m*H+_*J+x*ae+y*U,l[13]=m*P+_*Z+x*pe+y*w,l[2]=M*B+C*R+E*oe+S*j,l[6]=M*V+C*k+E*ue+S*de,l[10]=M*H+C*J+E*ae+S*U,l[14]=M*P+C*Z+E*pe+S*w,l[3]=O*B+F*R+A*oe+I*j,l[7]=O*V+F*k+A*ue+I*de,l[11]=O*H+F*J+A*ae+I*U,l[15]=O*P+F*Z+A*pe+I*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],m=e[2],_=e[6],x=e[10],y=e[14],M=e[3],C=e[7],E=e[11],S=e[15];return M*(+l*f*_-o*p*_-l*d*x+r*p*x+o*d*y-r*f*y)+C*(+t*f*y-t*p*x+l*u*x-o*u*y+o*p*m-l*f*m)+E*(+t*p*_-t*d*y-l*u*_+r*u*y+l*d*m-r*p*m)+S*(-o*d*m-t*f*_+t*d*x+o*u*_-r*u*x+r*f*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],m=e[8],_=e[9],x=e[10],y=e[11],M=e[12],C=e[13],E=e[14],S=e[15],O=_*E*p-C*x*p+C*f*y-d*E*y-_*f*S+d*x*S,F=M*x*p-m*E*p-M*f*y+u*E*y+m*f*S-u*x*S,A=m*C*p-M*_*p+M*d*y-u*C*y-m*d*S+u*_*S,I=M*_*f-m*C*f-M*d*x+u*C*x+m*d*E-u*_*E,B=t*O+r*F+o*A+l*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/B;return e[0]=O*V,e[1]=(C*x*l-_*E*l-C*o*y+r*E*y+_*o*S-r*x*S)*V,e[2]=(d*E*l-C*f*l+C*o*p-r*E*p-d*o*S+r*f*S)*V,e[3]=(_*f*l-d*x*l-_*o*p+r*x*p+d*o*y-r*f*y)*V,e[4]=F*V,e[5]=(m*E*l-M*x*l+M*o*y-t*E*y-m*o*S+t*x*S)*V,e[6]=(M*f*l-u*E*l-M*o*p+t*E*p+u*o*S-t*f*S)*V,e[7]=(u*x*l-m*f*l+m*o*p-t*x*p-u*o*y+t*f*y)*V,e[8]=A*V,e[9]=(M*_*l-m*C*l-M*r*y+t*C*y+m*r*S-t*_*S)*V,e[10]=(u*C*l-M*d*l+M*r*p-t*C*p-u*r*S+t*d*S)*V,e[11]=(m*d*l-u*_*l-m*r*p+t*_*p+u*r*y-t*d*y)*V,e[12]=I*V,e[13]=(m*C*o-M*_*o+M*r*x-t*C*x-m*r*E+t*_*E)*V,e[14]=(M*d*o-u*C*o-M*r*f+t*C*f+u*r*E-t*d*E)*V,e[15]=(u*_*o-m*d*o+m*r*f-t*_*f-u*r*x+t*d*x)*V,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,m=l*d;return this.set(p*u+r,p*d-o*f,p*f+o*d,0,p*d+o*f,m*d+r,m*f-o*u,0,p*f-o*d,m*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,m=u+u,_=d+d,x=l*p,y=l*m,M=l*_,C=u*m,E=u*_,S=d*_,O=f*p,F=f*m,A=f*_,I=r.x,B=r.y,V=r.z;return o[0]=(1-(C+S))*I,o[1]=(y+A)*I,o[2]=(M-F)*I,o[3]=0,o[4]=(y-A)*B,o[5]=(1-(x+S))*B,o[6]=(E+O)*B,o[7]=0,o[8]=(M+F)*V,o[9]=(E-O)*V,o[10]=(1-(x+C))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),d=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const p=1/l,m=1/u,_=1/d;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=m,ci.elements[5]*=m,ci.elements[6]*=m,ci.elements[8]*=_,ci.elements[9]*=_,ci.elements[10]*=_,t.setFromRotationMatrix(ci),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=ji){const f=this.elements,p=2*l/(t-e),m=2*l/(r-o),_=(t+e)/(t-e),x=(r+o)/(r-o);let y,M;if(d===ji)y=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===Jl)y=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=m,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=y,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=ji){const f=this.elements,p=1/(t-e),m=1/(r-o),_=1/(u-l),x=(t+e)*p,y=(r+o)*m;let M,C;if(d===ji)M=(u+l)*_,C=-2*_;else if(d===Jl)M=l*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-x,f[1]=0,f[5]=2*m,f[9]=0,f[13]=-y,f[2]=0,f[6]=0,f[10]=C,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new Y,ci=new Bt,Ky=new Y(0,0,0),Jy=new Y(1,1,1),vr=new Y,Sl=new Y,Gn=new Y,Fm=new Bt,Im=new ra;class Mi{constructor(e=0,t=0,r=0,o=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],m=o[9],_=o[2],x=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class h0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qy=0;const Um=new Y,Fs=new ra,Oi=new Bt,El=new Y,Ho=new Y,eS=new Y,tS=new ra,km=new Y(1,0,0),Om=new Y(0,1,0),Bm=new Y(0,0,1),zm={type:"added"},nS={type:"removed"},Is={type:"childadded",child:null},ed={type:"childremoved",child:null};class fn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new Y,t=new Mi,r=new ra,o=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Bt},normalMatrix:{value:new gt}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?El.copy(e):El.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ho,El,this.up):Oi.lookAt(El,Ho,this.up),this.quaternion.setFromRotationMatrix(Oi),o&&(Oi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Oi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nS),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,eS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,tS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,m=f.length;p<m;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),m=u(e.images),_=u(e.shapes),x=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const f=[];for(const p in d){const m=d[p];delete m.metadata,f.push(m)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fn.DEFAULT_UP=new Y(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new Y,Bi=new Y,td=new Y,zi=new Y,Us=new Y,ks=new Y,Vm=new Y,nd=new Y,id=new Y,rd=new Y,sd=new Lt,od=new Lt,ad=new Lt;class di{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ui.subVectors(e,t),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ui.subVectors(o,t),Bi.subVectors(r,t),td.subVectors(e,t);const u=ui.dot(ui),d=ui.dot(Bi),f=ui.dot(td),p=Bi.dot(Bi),m=Bi.dot(td),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const x=1/_,y=(p*f-d*m)*x,M=(u*m-d*f)*x;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,zi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,zi.x),f.addScaledVector(u,zi.y),f.addScaledVector(d,zi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return sd.setScalar(0),od.setScalar(0),ad.setScalar(0),sd.fromBufferAttribute(e,t),od.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sd,l.x),u.addScaledVector(od,l.y),u.addScaledVector(ad,l.z),u}static isFrontFacing(e,t,r,o){return ui.subVectors(r,t),Bi.subVectors(e,t),ui.cross(Bi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ui.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Us.subVectors(o,r),ks.subVectors(l,r),nd.subVectors(e,r);const f=Us.dot(nd),p=ks.dot(nd);if(f<=0&&p<=0)return t.copy(r);id.subVectors(e,o);const m=Us.dot(id),_=ks.dot(id);if(m>=0&&_<=m)return t.copy(o);const x=f*_-m*p;if(x<=0&&f>=0&&m<=0)return u=f/(f-m),t.copy(r).addScaledVector(Us,u);rd.subVectors(e,l);const y=Us.dot(rd),M=ks.dot(rd);if(M>=0&&y<=M)return t.copy(l);const C=y*p-f*M;if(C<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(ks,d);const E=m*M-y*_;if(E<=0&&_-m>=0&&y-M>=0)return Vm.subVectors(l,o),d=(_-m)/(_-m+(y-M)),t.copy(o).addScaledVector(Vm,d);const S=1/(E+C+x);return u=C*S,d=x*S,t.copy(r).addScaledVector(Us,u).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const p0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=By(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ld(u,l,e+1/3),this.g=ld(u,l,e),this.b=ld(u,l,e-1/3)}return Pt.toWorkingColorSpace(this,o),this}setStyle(e,t=ei){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=p0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Pt.fromWorkingColorSpace(yn.copy(this),e),Math.round(St(yn.r*255,0,255))*65536+Math.round(St(yn.g*255,0,255))*256+Math.round(St(yn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(yn.copy(this),t);const r=yn.r,o=yn.g,l=yn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const m=(d+u)/2;if(d===u)f=0,p=0;else{const _=u-d;switch(p=m<=.5?_/(u+d):_/(2-u-d),u){case r:f=(o-l)/_+(o<l?6:0);break;case o:f=(l-r)/_+2;break;case l:f=(r-o)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=m,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=ei){Pt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,r=yn.g,o=yn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+t,_r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(_r),e.getHSL(Ml);const r=Wu(_r.h,Ml.h,t),o=Wu(_r.s,Ml.s,t),l=Wu(_r.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new At;At.NAMES=p0;let iS=0;class ro extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Ws,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class m0 extends ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new Y,wl=new Ve;let rS=0;class pi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Am,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Bo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=In(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bo(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bo(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bo(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),r=In(r,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class g0 extends pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class x0 extends pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Tn extends pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let sS=0;const Jn=new Bt,cd=new fn,Os=new Y,jn=new sa,Go=new sa,ln=new Y;class ti extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c0(e)?x0:g0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,r){return Jn.makeTranslation(e,t,r),this.applyMatrix4(Jn),this}scale(e,t,r){return Jn.makeScale(e,t,r),this.applyMatrix4(Jn),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Tn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Go.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(jn.min,Go.min),jn.expandByPoint(ln),ln.addVectors(jn.max,Go.max),jn.expandByPoint(ln)):(jn.expandByPoint(Go.min),jn.expandByPoint(Go.max))}jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,m=d.count;p<m;p++)ln.fromBufferAttribute(d,p),f&&(Os.fromBufferAttribute(e,p),ln.add(Os)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let H=0;H<r.count;H++)d[H]=new Y,f[H]=new Y;const p=new Y,m=new Y,_=new Y,x=new Ve,y=new Ve,M=new Ve,C=new Y,E=new Y;function S(H,P,R){p.fromBufferAttribute(r,H),m.fromBufferAttribute(r,P),_.fromBufferAttribute(r,R),x.fromBufferAttribute(l,H),y.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),m.sub(p),_.sub(p),y.sub(x),M.sub(x);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(C.copy(m).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(k),E.copy(_).multiplyScalar(y.x).addScaledVector(m,-M.x).multiplyScalar(k),d[H].add(C),d[P].add(C),d[R].add(C),f[H].add(E),f[P].add(E),f[R].add(E))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let H=0,P=O.length;H<P;++H){const R=O[H],k=R.start,J=R.count;for(let Z=k,oe=k+J;Z<oe;Z+=3)S(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const F=new Y,A=new Y,I=new Y,B=new Y;function V(H){I.fromBufferAttribute(o,H),B.copy(I);const P=d[H];F.copy(P),F.sub(I.multiplyScalar(I.dot(P))).normalize(),A.crossVectors(B,P);const k=A.dot(f[H])<0?-1:1;u.setXYZW(H,F.x,F.y,F.z,k)}for(let H=0,P=O.length;H<P;++H){const R=O[H],k=R.start,J=R.count;for(let Z=k,oe=k+J;Z<oe;Z+=3)V(e.getX(Z+0)),V(e.getX(Z+1)),V(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const o=new Y,l=new Y,u=new Y,d=new Y,f=new Y,p=new Y,m=new Y,_=new Y;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),C=e.getX(x+1),E=e.getX(x+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,E),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,E),d.add(m),f.add(m),p.add(m),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(E,p.x,p.y,p.z)}else for(let x=0,y=t.count;x<y;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),m.subVectors(u,l),_.subVectors(o,l),m.cross(_),r.setXYZ(x+0,m.x,m.y,m.z),r.setXYZ(x+1,m.x,m.y,m.z),r.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,f){const p=d.array,m=d.itemSize,_=d.normalized,x=new p.constructor(f.length*m);let y=0,M=0;for(let C=0,E=f.length;C<E;C++){d.isInterleavedBufferAttribute?y=f[C]*d.data.stride+d.offset:y=f[C]*m;for(let S=0;S<m;S++)x[M++]=p[y++]}return new pi(x,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let m=0,_=p.length;m<_;m++){const x=p[m],y=e(x,r);f.push(y)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],m=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];m.push(y.toJSON(e.data))}m.length>0&&(o[f]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const m=o[p];this.setAttribute(p,m.clone(t))}const l=e.morphAttributes;for(const p in l){const m=[],_=l[p];for(let x=0,y=_.length;x<y;x++)m.push(_[x].clone(t));this.morphAttributes[p]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,m=u.length;p<m;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hm=new Bt,Gr=new f0,bl=new nc,Gm=new Y,Cl=new Y,Tl=new Y,Al=new Y,ud=new Y,Rl=new Y,jm=new Y,Pl=new Y;class Un extends fn{constructor(e=new ti,t=new m0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Rl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const m=d[f],_=l[f];m!==0&&(ud.fromBufferAttribute(_,e),u?Rl.addScaledVector(ud,m):Rl.addScaledVector(ud.sub(t),m))}t.add(Rl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(l),Gr.copy(e.ray).recast(e.near),!(bl.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(bl,Gm)===null||Gr.origin.distanceToSquared(Gm)>(e.far-e.near)**2))&&(Hm.copy(l).invert(),Gr.copy(e.ray).applyMatrix4(Hm),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Gr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,x=l.groups,y=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,C=x.length;M<C;M++){const E=x[M],S=u[E.materialIndex],O=Math.max(E.start,y.start),F=Math.min(d.count,Math.min(E.start+E.count,y.start+y.count));for(let A=O,I=F;A<I;A+=3){const B=d.getX(A),V=d.getX(A+1),H=d.getX(A+2);o=Nl(this,S,e,r,p,m,_,B,V,H),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=E.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let E=M,S=C;E<S;E+=3){const O=d.getX(E),F=d.getX(E+1),A=d.getX(E+2);o=Nl(this,u,e,r,p,m,_,O,F,A),o&&(o.faceIndex=Math.floor(E/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,C=x.length;M<C;M++){const E=x[M],S=u[E.materialIndex],O=Math.max(E.start,y.start),F=Math.min(f.count,Math.min(E.start+E.count,y.start+y.count));for(let A=O,I=F;A<I;A+=3){const B=A,V=A+1,H=A+2;o=Nl(this,S,e,r,p,m,_,B,V,H),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=E.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),C=Math.min(f.count,y.start+y.count);for(let E=M,S=C;E<S;E+=3){const O=E,F=E+1,A=E+2;o=Nl(this,u,e,r,p,m,_,O,F,A),o&&(o.faceIndex=Math.floor(E/3),t.push(o))}}}}function oS(s,e,t,r,o,l,u,d){let f;if(e.side===kn?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===br,d),f===null)return null;Pl.copy(d),Pl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Pl);return p<t.near||p>t.far?null:{distance:p,point:Pl.clone(),object:s}}function Nl(s,e,t,r,o,l,u,d,f,p){s.getVertexPosition(d,Cl),s.getVertexPosition(f,Tl),s.getVertexPosition(p,Al);const m=oS(s,e,t,r,Cl,Tl,Al,jm);if(m){const _=new Y;di.getBarycoord(jm,Cl,Tl,Al,_),o&&(m.uv=di.getInterpolatedAttribute(o,d,f,p,_,new Ve)),l&&(m.uv1=di.getInterpolatedAttribute(l,d,f,p,_,new Ve)),u&&(m.normal=di.getInterpolatedAttribute(u,d,f,p,_,new Y),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const x={a:d,b:f,c:p,normal:new Y,materialIndex:0};di.getNormal(Cl,Tl,Al,x.normal),m.face=x,m.barycoord=_}return m}class oa extends ti{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],m=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new Tn(p,3)),this.setAttribute("normal",new Tn(m,3)),this.setAttribute("uv",new Tn(_,2));function M(C,E,S,O,F,A,I,B,V,H,P){const R=A/V,k=I/H,J=A/2,Z=I/2,oe=B/2,ue=V+1,ae=H+1;let pe=0,j=0;const de=new Y;for(let U=0;U<ae;U++){const w=U*k-Z;for(let W=0;W<ue;W++){const ye=W*R-J;de[C]=ye*O,de[E]=w*F,de[S]=oe,p.push(de.x,de.y,de.z),de[C]=0,de[E]=0,de[S]=B>0?1:-1,m.push(de.x,de.y,de.z),_.push(W/V),_.push(1-U/H),pe+=1}}for(let U=0;U<H;U++)for(let w=0;w<V;w++){const W=x+w+ue*U,ye=x+w+ue*(U+1),X=x+(w+1)+ue*(U+1),re=x+(w+1)+ue*U;f.push(W,ye,re),f.push(ye,X,re),j+=6}d.addGroup(y,j,P),y+=j,x+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(s){const e={};for(let t=0;t<s.length;t++){const r=eo(s[t]);for(const o in r)e[o]=r[o]}return e}function aS(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function v0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const lS={clone:eo,merge:bn};var cS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cS,this.fragmentShader=uS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=aS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class _0 extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yr=new Y,Wm=new Ve,Xm=new Ve;class Wn extends _0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mf*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,Wm,Xm),t.subVectors(Xm,Wm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ju*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,zs=1;class dS extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn(Bs,zs,e,t);o.layers=this.layers,this.add(o);const l=new Wn(Bs,zs,e,t);l.layers=this.layers,this.add(l);const u=new Wn(Bs,zs,e,t);u.layers=this.layers,this.add(u);const d=new Wn(Bs,zs,e,t);d.layers=this.layers,this.add(d);const f=new Wn(Bs,zs,e,t);f.layers=this.layers,this.add(f);const p=new Wn(Bs,zs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Jl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,m]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(_,x,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class y0 extends On{constructor(e,t,r,o,l,u,d,f,p,m){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,r,o,l,u,d,f,p,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fS extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new y0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new oa(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Mr});l.uniforms.tEquirect.value=t;const u=new Un(o,l),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Ei),new dS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Wo extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hS={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const E=t.getJointPose(C,r),S=this._getHandJoint(p,C);E!==null&&(S.matrix.fromArray(E.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=E.radius),S.visible=E!==null}const m=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=m.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hS)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class pS extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fd=new Y,mS=new Y,gS=new gt;class qr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=fd.subVectors(r,t).cross(mS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(fd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||gS.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new nc,Dl=new Y;class Lf{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,u=new qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ji){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],m=o[5],_=o[6],x=o[7],y=o[8],M=o[9],C=o[10],E=o[11],S=o[12],O=o[13],F=o[14],A=o[15];if(r[0].setComponents(f-l,x-p,E-y,A-S).normalize(),r[1].setComponents(f+l,x+p,E+y,A+S).normalize(),r[2].setComponents(f+u,x+m,E+M,A+O).normalize(),r[3].setComponents(f-u,x-m,E-M,A-O).normalize(),r[4].setComponents(f-d,x-_,E-C,A-F).normalize(),t===ji)r[5].setComponents(f+d,x+_,E+C,A+F).normalize();else if(t===Jl)r[5].setComponents(d,_,C,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Dl.x=o.normal.x>0?e.max.x:e.min.x,Dl.y=o.normal.y>0?e.max.y:e.min.y,Dl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Dl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class S0 extends ro{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qm=new Bt,gf=new f0,Ll=new nc,Fl=new Y;class xS extends fn{constructor(e=new ti,t=new S0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(o),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;qm.copy(o).invert(),gf.copy(e.ray).applyMatrix4(qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=r.index,_=r.attributes.position;if(p!==null){const x=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let M=x,C=y;M<C;M++){const E=p.getX(M);Fl.fromBufferAttribute(_,E),$m(Fl,E,f,o,e,t,this)}}else{const x=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let M=x,C=y;M<C;M++)Fl.fromBufferAttribute(_,M),$m(Fl,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function $m(s,e,t,r,o,l,u){const d=gf.distanceSqToPoint(s);if(d<t){const f=new Y;gf.closestPointToPoint(s,f),f.applyMatrix4(r);const p=o.ray.origin.distanceTo(f);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class E0 extends On{constructor(e,t,r,o,l,u,d,f,p,m=Xs){if(m!==Xs&&m!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===Xs&&(r=es),r===void 0&&m===Js&&(r=Ks),super(null,o,l,u,d,f,m,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:hi,this.minFilter=f!==void 0?f:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const m=r[o],x=r[o+1]-m,y=(u-m)/x;return(o+y)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),f=t||(u.isVector2?new Ve:new Y);return f.copy(d).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new Y,o=[],l=[],u=[],d=new Y,f=new Bt;for(let y=0;y<=e;y++){const M=y/e;o[y]=this.getTangentAt(M,new Y)}l[0]=new Y,u[0]=new Y;let p=Number.MAX_VALUE;const m=Math.abs(o[0].x),_=Math.abs(o[0].y),x=Math.abs(o[0].z);m<=p&&(p=m,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),x<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),u[y]=u[y-1].clone(),d.crossVectors(o[y-1],o[y]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(St(o[y-1].dot(o[y]),-1,1));l[y].applyMatrix4(f.makeRotationAxis(d,M))}u[y].crossVectors(o[y],l[y])}if(t===!0){let y=Math.acos(St(l[0].dot(l[e]),-1,1));y/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(o[M],y*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ff extends wi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new Ve){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const m=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=f-this.aX,y=p-this.aY;f=x*m-y*_+this.aX,p=x*_+y*m+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vS extends Ff{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function If(){let s=0,e=0,t=0,r=0;function o(l,u,d,f){s=l,e=d,t=-3*l+3*u-2*d-f,r=2*l-2*u+d+f}return{initCatmullRom:function(l,u,d,f,p){o(u,d,p*(d-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,d,f,p,m,_){let x=(u-l)/p-(d-l)/(p+m)+(d-u)/m,y=(d-u)/m-(f-u)/(m+_)+(f-d)/_;x*=m,y*=m,o(u,d,x,y)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Il=new Y,hd=new If,pd=new If,md=new If;class _S extends wi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Y){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),f=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,m;this.closed||d>0?p=o[(d-1)%l]:(Il.subVectors(o[0],o[1]).add(o[0]),p=Il);const _=o[d%l],x=o[(d+1)%l];if(this.closed||d+2<l?m=o[(d+2)%l]:(Il.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(_),y),C=Math.pow(_.distanceToSquared(x),y),E=Math.pow(x.distanceToSquared(m),y);C<1e-4&&(C=1),M<1e-4&&(M=C),E<1e-4&&(E=C),hd.initNonuniformCatmullRom(p.x,_.x,x.x,m.x,M,C,E),pd.initNonuniformCatmullRom(p.y,_.y,x.y,m.y,M,C,E),md.initNonuniformCatmullRom(p.z,_.z,x.z,m.z,M,C,E)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(p.x,_.x,x.x,m.x,this.tension),pd.initCatmullRom(p.y,_.y,x.y,m.y,this.tension),md.initCatmullRom(p.z,_.z,x.z,m.z,this.tension));return r.set(hd.calc(f),pd.calc(f),md.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Y().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ym(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*d+l*s+t}function yS(s,e){const t=1-s;return t*t*e}function SS(s,e){return 2*(1-s)*s*e}function ES(s,e){return s*s*e}function qo(s,e,t,r){return yS(s,e)+SS(s,t)+ES(s,r)}function MS(s,e){const t=1-s;return t*t*t*e}function wS(s,e){const t=1-s;return 3*t*t*s*e}function bS(s,e){return 3*(1-s)*s*s*e}function CS(s,e){return s*s*s*e}function $o(s,e,t,r,o){return MS(s,e)+wS(s,t)+bS(s,r)+CS(s,o)}class M0 extends wi{constructor(e=new Ve,t=new Ve,r=new Ve,o=new Ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Ve){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set($o(e,o.x,l.x,u.x,d.x),$o(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class TS extends wi{constructor(e=new Y,t=new Y,r=new Y,o=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Y){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set($o(e,o.x,l.x,u.x,d.x),$o(e,o.y,l.y,u.y,d.y),$o(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w0 extends wi{constructor(e=new Ve,t=new Ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ve){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class AS extends wi{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b0 extends wi{constructor(e=new Ve,t=new Ve,r=new Ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Ve){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(qo(e,o.x,l.x,u.x),qo(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class RS extends wi{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(qo(e,o.x,l.x,u.x),qo(e,o.y,l.y,u.y),qo(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class C0 extends wi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ve){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,f=o[u===0?u:u-1],p=o[u],m=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(Ym(d,f.x,p.x,m.x,_.x),Ym(d,f.y,p.y,m.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Ve().fromArray(o))}return this}}var xf=Object.freeze({__proto__:null,ArcCurve:vS,CatmullRomCurve3:_S,CubicBezierCurve:M0,CubicBezierCurve3:TS,EllipseCurve:Ff,LineCurve:w0,LineCurve3:AS,QuadraticBezierCurve:b0,QuadraticBezierCurve3:RS,SplineCurve:C0});class PS extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xf[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,d=this.curves[l],f=d.getLength(),p=f===0?0:1-u/f;return d.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],d=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,f=u.getPoints(d);for(let p=0;p<f.length;p++){const m=f[p];r&&r.equals(m)||(t.push(m),r=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new xf[o.type]().fromJSON(o))}return this}}class Zm extends PS{constructor(e){super(),this.type="Path",this.currentPoint=new Ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new w0(this.currentPoint.clone(),new Ve(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new b0(this.currentPoint.clone(),new Ve(e,t),new Ve(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const d=new M0(this.currentPoint.clone(),new Ve(e,t),new Ve(r,o),new Ve(l,u));return this.curves.push(d),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new C0(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const d=this.currentPoint.x,f=this.currentPoint.y;return this.absarc(e+d,t+f,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,d,f){const p=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+p,t+m,r,o,l,u,d,f),this}absellipse(e,t,r,o,l,u,d,f){const p=new Ff(e,t,r,o,l,u,d,f);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const m=p.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Uf extends ti{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const m=[],_=[],x=[],y=[];let M=0;const C=[],E=r/2;let S=0;O(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(m),this.setAttribute("position",new Tn(_,3)),this.setAttribute("normal",new Tn(x,3)),this.setAttribute("uv",new Tn(y,2));function O(){const A=new Y,I=new Y;let B=0;const V=(t-e)/r;for(let H=0;H<=l;H++){const P=[],R=H/l,k=R*(t-e)+e;for(let J=0;J<=o;J++){const Z=J/o,oe=Z*f+d,ue=Math.sin(oe),ae=Math.cos(oe);I.x=k*ue,I.y=-R*r+E,I.z=k*ae,_.push(I.x,I.y,I.z),A.set(ue,V,ae).normalize(),x.push(A.x,A.y,A.z),y.push(Z,1-R),P.push(M++)}C.push(P)}for(let H=0;H<o;H++)for(let P=0;P<l;P++){const R=C[P][H],k=C[P+1][H],J=C[P+1][H+1],Z=C[P][H+1];(e>0||P!==0)&&(m.push(R,k,Z),B+=3),(t>0||P!==l-1)&&(m.push(k,J,Z),B+=3)}p.addGroup(S,B,0),S+=B}function F(A){const I=M,B=new Ve,V=new Y;let H=0;const P=A===!0?e:t,R=A===!0?1:-1;for(let J=1;J<=o;J++)_.push(0,E*R,0),x.push(0,R,0),y.push(.5,.5),M++;const k=M;for(let J=0;J<=o;J++){const oe=J/o*f+d,ue=Math.cos(oe),ae=Math.sin(oe);V.x=P*ae,V.y=E*R,V.z=P*ue,_.push(V.x,V.y,V.z),x.push(0,R,0),B.x=ue*.5+.5,B.y=ae*.5*R+.5,y.push(B.x,B.y),M++}for(let J=0;J<o;J++){const Z=I+J,oe=k+J;A===!0?m.push(oe,oe+1,Z):m.push(oe+1,oe,Z),H+=3}p.addGroup(S,H,A===!0?1:2),S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class T0 extends Zm{constructor(e){super(e),this.uuid=io(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Zm().fromJSON(o))}return this}}const NS={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=A0(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let d,f,p,m,_,x,y;if(r&&(l=US(s,e,l,t)),s.length>80*t){d=p=s[0],f=m=s[1];for(let M=t;M<o;M+=t)_=s[M],x=s[M+1],_<d&&(d=_),x<f&&(f=x),_>p&&(p=_),x>m&&(m=x);y=Math.max(p-d,m-f),y=y!==0?32767/y:0}return Qo(l,u,t,d,f,y,0),u}};function A0(s,e,t,r,o){let l,u;if(o===qS(s,e,t,r)>0)for(l=e;l<t;l+=r)u=Km(l,s[l],s[l+1],u);else for(l=t-r;l>=e;l-=r)u=Km(l,s[l],s[l+1],u);return u&&ic(u,u.next)&&(ta(u),u=u.next),u}function ns(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(ic(t,t.next)||jt(t.prev,t,t.next)===0)){if(ta(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function Qo(s,e,t,r,o,l,u){if(!s)return;!u&&l&&VS(s,r,o,l);let d=s,f,p;for(;s.prev!==s.next;){if(f=s.prev,p=s.next,l?LS(s,r,o,l):DS(s)){e.push(f.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),ta(s),s=p.next,d=p.next;continue}if(s=p,s===d){u?u===1?(s=FS(ns(s),e,t),Qo(s,e,t,r,o,l,2)):u===2&&IS(s,e,t,r,o,l):Qo(ns(s),e,t,r,o,l,1);break}}}function DS(s){const e=s.prev,t=s,r=s.next;if(jt(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,d=e.y,f=t.y,p=r.y,m=o<l?o<u?o:u:l<u?l:u,_=d<f?d<p?d:p:f<p?f:p,x=o>l?o>u?o:u:l>u?l:u,y=d>f?d>p?d:p:f>p?f:p;let M=r.next;for(;M!==e;){if(M.x>=m&&M.x<=x&&M.y>=_&&M.y<=y&&Gs(o,d,l,f,u,p,M.x,M.y)&&jt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function LS(s,e,t,r){const o=s.prev,l=s,u=s.next;if(jt(o,l,u)>=0)return!1;const d=o.x,f=l.x,p=u.x,m=o.y,_=l.y,x=u.y,y=d<f?d<p?d:p:f<p?f:p,M=m<_?m<x?m:x:_<x?_:x,C=d>f?d>p?d:p:f>p?f:p,E=m>_?m>x?m:x:_>x?_:x,S=vf(y,M,e,t,r),O=vf(C,E,e,t,r);let F=s.prevZ,A=s.nextZ;for(;F&&F.z>=S&&A&&A.z<=O;){if(F.x>=y&&F.x<=C&&F.y>=M&&F.y<=E&&F!==o&&F!==u&&Gs(d,m,f,_,p,x,F.x,F.y)&&jt(F.prev,F,F.next)>=0||(F=F.prevZ,A.x>=y&&A.x<=C&&A.y>=M&&A.y<=E&&A!==o&&A!==u&&Gs(d,m,f,_,p,x,A.x,A.y)&&jt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;F&&F.z>=S;){if(F.x>=y&&F.x<=C&&F.y>=M&&F.y<=E&&F!==o&&F!==u&&Gs(d,m,f,_,p,x,F.x,F.y)&&jt(F.prev,F,F.next)>=0)return!1;F=F.prevZ}for(;A&&A.z<=O;){if(A.x>=y&&A.x<=C&&A.y>=M&&A.y<=E&&A!==o&&A!==u&&Gs(d,m,f,_,p,x,A.x,A.y)&&jt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function FS(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!ic(o,l)&&R0(o,r,r.next,l)&&ea(o,l)&&ea(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ta(r),ta(r.next),r=s=l),r=r.next}while(r!==s);return ns(r)}function IS(s,e,t,r,o,l){let u=s;do{let d=u.next.next;for(;d!==u.prev;){if(u.i!==d.i&&jS(u,d)){let f=P0(u,d);u=ns(u,u.next),f=ns(f,f.next),Qo(u,e,t,r,o,l,0),Qo(f,e,t,r,o,l,0);return}d=d.next}u=u.next}while(u!==s)}function US(s,e,t,r){const o=[];let l,u,d,f,p;for(l=0,u=e.length;l<u;l++)d=e[l]*r,f=l<u-1?e[l+1]*r:s.length,p=A0(s,d,f,r,!1),p===p.next&&(p.steiner=!0),o.push(GS(p));for(o.sort(kS),l=0;l<o.length;l++)t=OS(o[l],t);return t}function kS(s,e){return s.x-e.x}function OS(s,e){const t=BS(s,e);if(!t)return e;const r=P0(t,s);return ns(r,r.next),ns(t,t.next)}function BS(s,e){let t=e,r=-1/0,o;const l=s.x,u=s.y;do{if(u<=t.y&&u>=t.next.y&&t.next.y!==t.y){const x=t.x+(u-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=l&&x>r&&(r=x,o=t.x<t.next.x?t:t.next,x===l))return o}t=t.next}while(t!==e);if(!o)return null;const d=o,f=o.x,p=o.y;let m=1/0,_;t=o;do l>=t.x&&t.x>=f&&l!==t.x&&Gs(u<p?l:r,u,f,p,u<p?r:l,u,t.x,t.y)&&(_=Math.abs(u-t.y)/(l-t.x),ea(t,s)&&(_<m||_===m&&(t.x>o.x||t.x===o.x&&zS(o,t)))&&(o=t,m=_)),t=t.next;while(t!==d);return o}function zS(s,e){return jt(s.prev,s,e.prev)<0&&jt(e.next,s,s.next)<0}function VS(s,e,t,r){let o=s;do o.z===0&&(o.z=vf(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,HS(o)}function HS(s){let e,t,r,o,l,u,d,f,p=1;do{for(t=s,s=null,l=null,u=0;t;){for(u++,r=t,d=0,e=0;e<p&&(d++,r=r.nextZ,!!r);e++);for(f=p;d>0||f>0&&r;)d!==0&&(f===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,d--):(o=r,r=r.nextZ,f--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(u>1);return s}function vf(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function GS(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Gs(s,e,t,r,o,l,u,d){return(o-u)*(e-d)>=(s-u)*(l-d)&&(s-u)*(r-d)>=(t-u)*(e-d)&&(t-u)*(l-d)>=(o-u)*(r-d)}function jS(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!WS(s,e)&&(ea(s,e)&&ea(e,s)&&XS(s,e)&&(jt(s.prev,s,e.prev)||jt(s,e.prev,e))||ic(s,e)&&jt(s.prev,s,s.next)>0&&jt(e.prev,e,e.next)>0)}function jt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ic(s,e){return s.x===e.x&&s.y===e.y}function R0(s,e,t,r){const o=kl(jt(s,e,t)),l=kl(jt(s,e,r)),u=kl(jt(t,r,s)),d=kl(jt(t,r,e));return!!(o!==l&&u!==d||o===0&&Ul(s,t,e)||l===0&&Ul(s,r,e)||u===0&&Ul(t,s,r)||d===0&&Ul(t,e,r))}function Ul(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function kl(s){return s>0?1:s<0?-1:0}function WS(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&R0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ea(s,e){return jt(s.prev,s,s.next)<0?jt(s,e,s.next)>=0&&jt(s,s.prev,e)>=0:jt(s,e,s.prev)<0||jt(s,s.next,e)<0}function XS(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function P0(s,e){const t=new _f(s.i,s.x,s.y),r=new _f(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Km(s,e,t,r){const o=new _f(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ta(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function _f(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function qS(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class Yo{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Yo.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];Jm(e),Qm(r,e);let u=e.length;t.forEach(Jm);for(let f=0;f<t.length;f++)o.push(u),u+=t[f].length,Qm(r,t[f]);const d=NS.triangulate(r,o);for(let f=0;f<d.length;f+=3)l.push(d.slice(f,f+3));return l}}function Jm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Qm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class kf extends ti{constructor(e=new T0([new Ve(.5,.5),new Ve(-.5,.5),new Ve(-.5,-.5),new Ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,o=[],l=[];for(let d=0,f=e.length;d<f;d++){const p=e[d];u(p)}this.setAttribute("position",new Tn(o,3)),this.setAttribute("uv",new Tn(l,2)),this.computeVertexNormals();function u(d){const f=[],p=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,_=t.depth!==void 0?t.depth:1;let x=t.bevelEnabled!==void 0?t.bevelEnabled:!0,y=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:y-.1,C=t.bevelOffset!==void 0?t.bevelOffset:0,E=t.bevelSegments!==void 0?t.bevelSegments:3;const S=t.extrudePath,O=t.UVGenerator!==void 0?t.UVGenerator:$S;let F,A=!1,I,B,V,H;S&&(F=S.getSpacedPoints(m),A=!0,x=!1,I=S.computeFrenetFrames(m,!1),B=new Y,V=new Y,H=new Y),x||(E=0,y=0,M=0,C=0);const P=d.extractPoints(p);let R=P.shape;const k=P.holes;if(!Yo.isClockWise(R)){R=R.reverse();for(let ve=0,ge=k.length;ve<ge;ve++){const D=k[ve];Yo.isClockWise(D)&&(k[ve]=D.reverse())}}const Z=Yo.triangulateShape(R,k),oe=R;for(let ve=0,ge=k.length;ve<ge;ve++){const D=k[ve];R=R.concat(D)}function ue(ve,ge,D){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(ge,D)}const ae=R.length,pe=Z.length;function j(ve,ge,D){let Ue,Ee,Fe;const Te=ve.x-ge.x,Qe=ve.y-ge.y,Ne=D.x-ve.x,L=D.y-ve.y,T=Te*Te+Qe*Qe,ee=Te*L-Qe*Ne;if(Math.abs(ee)>Number.EPSILON){const me=Math.sqrt(T),Me=Math.sqrt(Ne*Ne+L*L),_e=ge.x-Qe/me,Ye=ge.y+Te/me,Ie=D.x-L/Me,He=D.y+Ne/Me,ft=((Ie-_e)*L-(He-Ye)*Ne)/(Te*L-Qe*Ne);Ue=_e+Te*ft-ve.x,Ee=Ye+Qe*ft-ve.y;const Ce=Ue*Ue+Ee*Ee;if(Ce<=2)return new Ve(Ue,Ee);Fe=Math.sqrt(Ce/2)}else{let me=!1;Te>Number.EPSILON?Ne>Number.EPSILON&&(me=!0):Te<-Number.EPSILON?Ne<-Number.EPSILON&&(me=!0):Math.sign(Qe)===Math.sign(L)&&(me=!0),me?(Ue=-Qe,Ee=Te,Fe=Math.sqrt(T)):(Ue=Te,Ee=Qe,Fe=Math.sqrt(T/2))}return new Ve(Ue/Fe,Ee/Fe)}const de=[];for(let ve=0,ge=oe.length,D=ge-1,Ue=ve+1;ve<ge;ve++,D++,Ue++)D===ge&&(D=0),Ue===ge&&(Ue=0),de[ve]=j(oe[ve],oe[D],oe[Ue]);const U=[];let w,W=de.concat();for(let ve=0,ge=k.length;ve<ge;ve++){const D=k[ve];w=[];for(let Ue=0,Ee=D.length,Fe=Ee-1,Te=Ue+1;Ue<Ee;Ue++,Fe++,Te++)Fe===Ee&&(Fe=0),Te===Ee&&(Te=0),w[Ue]=j(D[Ue],D[Fe],D[Te]);U.push(w),W=W.concat(w)}for(let ve=0;ve<E;ve++){const ge=ve/E,D=y*Math.cos(ge*Math.PI/2),Ue=M*Math.sin(ge*Math.PI/2)+C;for(let Ee=0,Fe=oe.length;Ee<Fe;Ee++){const Te=ue(oe[Ee],de[Ee],Ue);ie(Te.x,Te.y,-D)}for(let Ee=0,Fe=k.length;Ee<Fe;Ee++){const Te=k[Ee];w=U[Ee];for(let Qe=0,Ne=Te.length;Qe<Ne;Qe++){const L=ue(Te[Qe],w[Qe],Ue);ie(L.x,L.y,-D)}}}const ye=M+C;for(let ve=0;ve<ae;ve++){const ge=x?ue(R[ve],W[ve],ye):R[ve];A?(V.copy(I.normals[0]).multiplyScalar(ge.x),B.copy(I.binormals[0]).multiplyScalar(ge.y),H.copy(F[0]).add(V).add(B),ie(H.x,H.y,H.z)):ie(ge.x,ge.y,0)}for(let ve=1;ve<=m;ve++)for(let ge=0;ge<ae;ge++){const D=x?ue(R[ge],W[ge],ye):R[ge];A?(V.copy(I.normals[ve]).multiplyScalar(D.x),B.copy(I.binormals[ve]).multiplyScalar(D.y),H.copy(F[ve]).add(V).add(B),ie(H.x,H.y,H.z)):ie(D.x,D.y,_/m*ve)}for(let ve=E-1;ve>=0;ve--){const ge=ve/E,D=y*Math.cos(ge*Math.PI/2),Ue=M*Math.sin(ge*Math.PI/2)+C;for(let Ee=0,Fe=oe.length;Ee<Fe;Ee++){const Te=ue(oe[Ee],de[Ee],Ue);ie(Te.x,Te.y,_+D)}for(let Ee=0,Fe=k.length;Ee<Fe;Ee++){const Te=k[Ee];w=U[Ee];for(let Qe=0,Ne=Te.length;Qe<Ne;Qe++){const L=ue(Te[Qe],w[Qe],Ue);A?ie(L.x,L.y+F[m-1].y,F[m-1].x+D):ie(L.x,L.y,_+D)}}}X(),re();function X(){const ve=o.length/3;if(x){let ge=0,D=ae*ge;for(let Ue=0;Ue<pe;Ue++){const Ee=Z[Ue];xe(Ee[2]+D,Ee[1]+D,Ee[0]+D)}ge=m+E*2,D=ae*ge;for(let Ue=0;Ue<pe;Ue++){const Ee=Z[Ue];xe(Ee[0]+D,Ee[1]+D,Ee[2]+D)}}else{for(let ge=0;ge<pe;ge++){const D=Z[ge];xe(D[2],D[1],D[0])}for(let ge=0;ge<pe;ge++){const D=Z[ge];xe(D[0]+ae*m,D[1]+ae*m,D[2]+ae*m)}}r.addGroup(ve,o.length/3-ve,0)}function re(){const ve=o.length/3;let ge=0;fe(oe,ge),ge+=oe.length;for(let D=0,Ue=k.length;D<Ue;D++){const Ee=k[D];fe(Ee,ge),ge+=Ee.length}r.addGroup(ve,o.length/3-ve,1)}function fe(ve,ge){let D=ve.length;for(;--D>=0;){const Ue=D;let Ee=D-1;Ee<0&&(Ee=ve.length-1);for(let Fe=0,Te=m+E*2;Fe<Te;Fe++){const Qe=ae*Fe,Ne=ae*(Fe+1),L=ge+Ue+Qe,T=ge+Ee+Qe,ee=ge+Ee+Ne,me=ge+Ue+Ne;Le(L,T,ee,me)}}}function ie(ve,ge,D){f.push(ve),f.push(ge),f.push(D)}function xe(ve,ge,D){Ae(ve),Ae(ge),Ae(D);const Ue=o.length/3,Ee=O.generateTopUV(r,o,Ue-3,Ue-2,Ue-1);$e(Ee[0]),$e(Ee[1]),$e(Ee[2])}function Le(ve,ge,D,Ue){Ae(ve),Ae(ge),Ae(Ue),Ae(ge),Ae(D),Ae(Ue);const Ee=o.length/3,Fe=O.generateSideWallUV(r,o,Ee-6,Ee-3,Ee-2,Ee-1);$e(Fe[0]),$e(Fe[1]),$e(Fe[3]),$e(Fe[1]),$e(Fe[2]),$e(Fe[3])}function Ae(ve){o.push(f[ve*3+0]),o.push(f[ve*3+1]),o.push(f[ve*3+2])}function $e(ve){l.push(ve.x),l.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return YS(t,r,e)}static fromJSON(e,t){const r=[];for(let l=0,u=e.shapes.length;l<u;l++){const d=t[e.shapes[l]];r.push(d)}const o=e.options.extrudePath;return o!==void 0&&(e.options.extrudePath=new xf[o.type]().fromJSON(o)),new kf(r,e.options)}}const $S={generateTopUV:function(s,e,t,r,o){const l=e[t*3],u=e[t*3+1],d=e[r*3],f=e[r*3+1],p=e[o*3],m=e[o*3+1];return[new Ve(l,u),new Ve(d,f),new Ve(p,m)]},generateSideWallUV:function(s,e,t,r,o,l){const u=e[t*3],d=e[t*3+1],f=e[t*3+2],p=e[r*3],m=e[r*3+1],_=e[r*3+2],x=e[o*3],y=e[o*3+1],M=e[o*3+2],C=e[l*3],E=e[l*3+1],S=e[l*3+2];return Math.abs(d-m)<Math.abs(u-p)?[new Ve(u,1-f),new Ve(p,1-_),new Ve(x,1-M),new Ve(C,1-S)]:[new Ve(d,1-f),new Ve(m,1-_),new Ve(y,1-M),new Ve(E,1-S)]}};function YS(s,e,t){if(t.shapes=[],Array.isArray(s))for(let r=0,o=s.length;r<o;r++){const l=s[r];t.shapes.push(l.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class rc extends ti{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,m=f+1,_=e/d,x=t/f,y=[],M=[],C=[],E=[];for(let S=0;S<m;S++){const O=S*x-u;for(let F=0;F<p;F++){const A=F*_-l;M.push(A,-O,0),C.push(0,0,1),E.push(F/d),E.push(1-S/f)}}for(let S=0;S<f;S++)for(let O=0;O<d;O++){const F=O+p*S,A=O+p*(S+1),I=O+1+p*(S+1),B=O+1+p*S;y.push(F,A,B),y.push(A,I,B)}this.setIndex(y),this.setAttribute("position",new Tn(M,3)),this.setAttribute("normal",new Tn(C,3)),this.setAttribute("uv",new Tn(E,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ec extends ti{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],f=[],p=[],m=new Y,_=new Y,x=new Y;for(let y=0;y<=r;y++)for(let M=0;M<=o;M++){const C=M/o*l,E=y/r*Math.PI*2;_.x=(e+t*Math.cos(E))*Math.cos(C),_.y=(e+t*Math.cos(E))*Math.sin(C),_.z=t*Math.sin(E),d.push(_.x,_.y,_.z),m.x=e*Math.cos(C),m.y=e*Math.sin(C),x.subVectors(_,m).normalize(),f.push(x.x,x.y,x.z),p.push(M/o),p.push(y/r)}for(let y=1;y<=r;y++)for(let M=1;M<=o;M++){const C=(o+1)*y+M-1,E=(o+1)*(y-1)+M-1,S=(o+1)*(y-1)+M,O=(o+1)*y+M;u.push(C,E,O),u.push(E,S,O)}this.setIndex(u),this.setAttribute("position",new Tn(d,3)),this.setAttribute("normal",new Tn(f,3)),this.setAttribute("uv",new Tn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gd extends ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=a0,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZS extends ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KS extends ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Of extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const xd=new Bt,eg=new Y,tg=new Y;class N0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lf,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(tg),t.updateMatrixWorld(),xd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ng=new Bt,jo=new Y,vd=new Y;class JS extends N0{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new Lt(2,1,1,1),new Lt(0,1,1,1),new Lt(3,1,1,1),new Lt(1,1,1,1),new Lt(3,0,1,1),new Lt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),jo.setFromMatrixPosition(e.matrixWorld),r.position.copy(jo),vd.copy(r.position),vd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(vd),r.updateMatrixWorld(),o.makeTranslation(-jo.x,-jo.y,-jo.z),ng.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ng)}}class QS extends Of{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new JS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class D0 extends _0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=m*this.view.offsetY,f=d-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class e1 extends N0{constructor(){super(new D0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ig extends Of{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new e1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class t1 extends Of{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class n1 extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function rg(s,e,t,r){const o=i1(r);switch(t){case e0:return s*e;case n0:return s*e;case i0:return s*e*2;case r0:return s*e/o.components*o.byteLength;case Pf:return s*e/o.components*o.byteLength;case s0:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case t0:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case Df:return s*e*4/o.components*o.byteLength;case Vl:case Hl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gd:case Wd:return Math.max(s,16)*Math.max(e,8)/4;case Hd:case jd:return Math.max(s,8)*Math.max(e,8)/2;case Xd:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Wl:case uf:case df:return Math.ceil(s/4)*Math.ceil(e/4)*16;case o0:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*8;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function i1(s){switch(s){case Xi:case Kg:return{byteLength:1,components:1};case Jo:case Jg:case ia:return{byteLength:2,components:1};case Af:case Rf:return{byteLength:2,components:4};case es:case Tf:case Gi:return{byteLength:4,components:1};case Qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function L0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function r1(s){const e=new WeakMap;function t(d,f){const p=d.array,m=d.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(f,x),s.bufferData(f,p,m),d.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,f,p){const m=f.array,_=f.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,m);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],C=_[y];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++x,_[x]=C)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const C=_[y];s.bufferSubData(p,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,o1=`#ifdef USE_ALPHAHASH
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
#endif`,a1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d1=`#ifdef USE_AOMAP
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
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
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
#endif`,p1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v1=`#ifdef USE_IRIDESCENCE
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
#endif`,_1=`#ifdef USE_BUMPMAP
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
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A1=`#define PI 3.141592653589793
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
} // validated`,R1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,P1=`vec3 transformedNormal = objectNormal;
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
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I1="gl_FragColor = linearToOutputTexel( gl_FragColor );",U1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k1=`#ifdef USE_ENVMAP
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
#endif`,O1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X1=`#ifdef USE_GRADIENTMAP
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
}`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Z1=`uniform bool receiveShadow;
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
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nE=`PhysicalMaterial material;
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
#endif`,iE=`struct PhysicalMaterial {
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
}`,rE=`
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
#endif`,sE=`#if defined( RE_IndirectDiffuse )
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
#endif`,oE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,aE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pE=`#if defined( USE_POINTS_UV )
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
#endif`,mE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_E=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`#ifdef USE_MORPHTARGETS
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
#endif`,SE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ME=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
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
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,RE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GE=`float getShadowMask() {
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
}`,jE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WE=`#ifdef USE_SKINNING
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
#endif`,XE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qE=`#ifdef USE_SKINNING
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
#endif`,$E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sM=`uniform sampler2D t2D;
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,fM=`#define DISTANCE
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
}`,hM=`#define DISTANCE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
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
}`,xM=`uniform vec3 diffuse;
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
}`,vM=`#include <common>
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
}`,_M=`uniform vec3 diffuse;
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
}`,yM=`#define LAMBERT
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
}`,SM=`#define LAMBERT
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
}`,EM=`#define MATCAP
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
}`,MM=`#define MATCAP
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
}`,wM=`#define NORMAL
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
}`,bM=`#define NORMAL
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
}`,CM=`#define PHONG
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
}`,TM=`#define PHONG
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
}`,AM=`#define STANDARD
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
}`,RM=`#define STANDARD
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
}`,PM=`#define TOON
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
}`,NM=`#define TOON
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
}`,DM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
}`,FM=`#include <common>
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
}`,IM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,kM=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:s1,alphahash_pars_fragment:o1,alphamap_fragment:a1,alphamap_pars_fragment:l1,alphatest_fragment:c1,alphatest_pars_fragment:u1,aomap_fragment:d1,aomap_pars_fragment:f1,batching_pars_vertex:h1,batching_vertex:p1,begin_vertex:m1,beginnormal_vertex:g1,bsdfs:x1,iridescence_fragment:v1,bumpmap_pars_fragment:_1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:E1,clipping_planes_vertex:M1,color_fragment:w1,color_pars_fragment:b1,color_pars_vertex:C1,color_vertex:T1,common:A1,cube_uv_reflection_fragment:R1,defaultnormal_vertex:P1,displacementmap_pars_vertex:N1,displacementmap_vertex:D1,emissivemap_fragment:L1,emissivemap_pars_fragment:F1,colorspace_fragment:I1,colorspace_pars_fragment:U1,envmap_fragment:k1,envmap_common_pars_fragment:O1,envmap_pars_fragment:B1,envmap_pars_vertex:z1,envmap_physical_pars_fragment:K1,envmap_vertex:V1,fog_vertex:H1,fog_pars_vertex:G1,fog_fragment:j1,fog_pars_fragment:W1,gradientmap_pars_fragment:X1,lightmap_pars_fragment:q1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:Y1,lights_pars_begin:Z1,lights_toon_fragment:J1,lights_toon_pars_fragment:Q1,lights_phong_fragment:eE,lights_phong_pars_fragment:tE,lights_physical_fragment:nE,lights_physical_pars_fragment:iE,lights_fragment_begin:rE,lights_fragment_maps:sE,lights_fragment_end:oE,logdepthbuf_fragment:aE,logdepthbuf_pars_fragment:lE,logdepthbuf_pars_vertex:cE,logdepthbuf_vertex:uE,map_fragment:dE,map_pars_fragment:fE,map_particle_fragment:hE,map_particle_pars_fragment:pE,metalnessmap_fragment:mE,metalnessmap_pars_fragment:gE,morphinstance_vertex:xE,morphcolor_vertex:vE,morphnormal_vertex:_E,morphtarget_pars_vertex:yE,morphtarget_vertex:SE,normal_fragment_begin:EE,normal_fragment_maps:ME,normal_pars_fragment:wE,normal_pars_vertex:bE,normal_vertex:CE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:RE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:NE,opaque_fragment:DE,packing:LE,premultiplied_alpha_fragment:FE,project_vertex:IE,dithering_fragment:UE,dithering_pars_fragment:kE,roughnessmap_fragment:OE,roughnessmap_pars_fragment:BE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:VE,shadowmap_vertex:HE,shadowmask_pars_fragment:GE,skinbase_vertex:jE,skinning_pars_vertex:WE,skinning_vertex:XE,skinnormal_vertex:qE,specularmap_fragment:$E,specularmap_pars_fragment:YE,tonemapping_fragment:ZE,tonemapping_pars_fragment:KE,transmission_fragment:JE,transmission_pars_fragment:QE,uv_pars_fragment:eM,uv_pars_vertex:tM,uv_vertex:nM,worldpos_vertex:iM,background_vert:rM,background_frag:sM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:lM,cube_frag:cM,depth_vert:uM,depth_frag:dM,distanceRGBA_vert:fM,distanceRGBA_frag:hM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:xM,meshbasic_vert:vM,meshbasic_frag:_M,meshlambert_vert:yM,meshlambert_frag:SM,meshmatcap_vert:EM,meshmatcap_frag:MM,meshnormal_vert:wM,meshnormal_frag:bM,meshphong_vert:CM,meshphong_frag:TM,meshphysical_vert:AM,meshphysical_frag:RM,meshtoon_vert:PM,meshtoon_frag:NM,points_vert:DM,points_frag:LM,shadow_vert:FM,shadow_frag:IM,sprite_vert:UM,sprite_frag:kM},Be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Si={basic:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:bn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:bn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:bn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:bn([Be.points,Be.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:bn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:bn([Be.common,Be.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:bn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:bn([Be.sprite,Be.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:bn([Be.common,Be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:bn([Be.lights,Be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Si.physical={uniforms:bn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Ol={r:0,b:0,g:0},Wr=new Mi,OM=new Bt;function BM(s,e,t,r,o,l,u){const d=new At(0);let f=l===!0?0:1,p,m,_=null,x=0,y=null;function M(F){let A=F.isScene===!0?F.background:null;return A&&A.isTexture&&(A=(F.backgroundBlurriness>0?t:e).get(A)),A}function C(F){let A=!1;const I=M(F);I===null?S(d,f):I&&I.isColor&&(S(I,1),A=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function E(F,A){const I=M(A);I&&(I.isCubeTexture||I.mapping===tc)?(m===void 0&&(m=new Un(new oa(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:eo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(B,V,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Wr.copy(A.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(OM.makeRotationFromEuler(Wr)),m.material.toneMapped=Pt.getTransfer(I.colorSpace)!==Dt,(_!==I||x!==I.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,_=I,x=I.version,y=s.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new Un(new rc(2,2),new Cr({name:"BackgroundMaterial",uniforms:eo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(I.colorSpace)!==Dt,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(_!==I||x!==I.version||y!==s.toneMapping)&&(p.material.needsUpdate=!0,_=I,x=I.version,y=s.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null))}function S(F,A){F.getRGB(Ol,v0(s)),r.buffers.color.setClear(Ol.r,Ol.g,Ol.b,A,u)}function O(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(F,A=1){d.set(F),f=A,S(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(F){f=F,S(d,f)},render:C,addToRenderList:E,dispose:O}}function zM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function d(R,k,J,Z,oe){let ue=!1;const ae=_(Z,J,k);l!==ae&&(l=ae,p(l.object)),ue=y(R,Z,J,oe),ue&&M(R,Z,J,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,A(R,k,J,Z),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function f(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function m(R){return s.deleteVertexArray(R)}function _(R,k,J){const Z=J.wireframe===!0;let oe=r[R.id];oe===void 0&&(oe={},r[R.id]=oe);let ue=oe[k.id];ue===void 0&&(ue={},oe[k.id]=ue);let ae=ue[Z];return ae===void 0&&(ae=x(f()),ue[Z]=ae),ae}function x(R){const k=[],J=[],Z=[];for(let oe=0;oe<t;oe++)k[oe]=0,J[oe]=0,Z[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:J,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,k,J,Z){const oe=l.attributes,ue=k.attributes;let ae=0;const pe=J.getAttributes();for(const j in pe)if(pe[j].location>=0){const U=oe[j];let w=ue[j];if(w===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(w=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(w=R.instanceColor)),U===void 0||U.attribute!==w||w&&U.data!==w.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Z}function M(R,k,J,Z){const oe={},ue=k.attributes;let ae=0;const pe=J.getAttributes();for(const j in pe)if(pe[j].location>=0){let U=ue[j];U===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(U=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(U=R.instanceColor));const w={};w.attribute=U,U&&U.data&&(w.data=U.data),oe[j]=w,ae++}l.attributes=oe,l.attributesNum=ae,l.index=Z}function C(){const R=l.newAttributes;for(let k=0,J=R.length;k<J;k++)R[k]=0}function E(R){S(R,0)}function S(R,k){const J=l.newAttributes,Z=l.enabledAttributes,oe=l.attributeDivisors;J[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),oe[R]!==k&&(s.vertexAttribDivisor(R,k),oe[R]=k)}function O(){const R=l.newAttributes,k=l.enabledAttributes;for(let J=0,Z=k.length;J<Z;J++)k[J]!==R[J]&&(s.disableVertexAttribArray(J),k[J]=0)}function F(R,k,J,Z,oe,ue,ae){ae===!0?s.vertexAttribIPointer(R,k,J,oe,ue):s.vertexAttribPointer(R,k,J,Z,oe,ue)}function A(R,k,J,Z){C();const oe=Z.attributes,ue=J.getAttributes(),ae=k.defaultAttributeValues;for(const pe in ue){const j=ue[pe];if(j.location>=0){let de=oe[pe];if(de===void 0&&(pe==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),pe==="instanceColor"&&R.instanceColor&&(de=R.instanceColor)),de!==void 0){const U=de.normalized,w=de.itemSize,W=e.get(de);if(W===void 0)continue;const ye=W.buffer,X=W.type,re=W.bytesPerElement,fe=X===s.INT||X===s.UNSIGNED_INT||de.gpuType===Tf;if(de.isInterleavedBufferAttribute){const ie=de.data,xe=ie.stride,Le=de.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<j.locationSize;Ae++)S(j.location+Ae,ie.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)E(j.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let Ae=0;Ae<j.locationSize;Ae++)F(j.location+Ae,w/j.locationSize,X,U,xe*re,(Le+w/j.locationSize*Ae)*re,fe)}else{if(de.isInstancedBufferAttribute){for(let ie=0;ie<j.locationSize;ie++)S(j.location+ie,de.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ie=0;ie<j.locationSize;ie++)E(j.location+ie);s.bindBuffer(s.ARRAY_BUFFER,ye);for(let ie=0;ie<j.locationSize;ie++)F(j.location+ie,w/j.locationSize,X,U,w*re,w/j.locationSize*ie*re,fe)}}else if(ae!==void 0){const U=ae[pe];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(j.location,U);break;case 3:s.vertexAttrib3fv(j.location,U);break;case 4:s.vertexAttrib4fv(j.location,U);break;default:s.vertexAttrib1fv(j.location,U)}}}}O()}function I(){H();for(const R in r){const k=r[R];for(const J in k){const Z=k[J];for(const oe in Z)m(Z[oe].object),delete Z[oe];delete k[J]}delete r[R]}}function B(R){if(r[R.id]===void 0)return;const k=r[R.id];for(const J in k){const Z=k[J];for(const oe in Z)m(Z[oe].object),delete Z[oe];delete k[J]}delete r[R.id]}function V(R){for(const k in r){const J=r[k];if(J[R.id]===void 0)continue;const Z=J[R.id];for(const oe in Z)m(Z[oe].object),delete Z[oe];delete J[R.id]}}function H(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:H,resetDefaultState:P,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:V,initAttributes:C,enableAttribute:E,disableUnusedAttributes:O}}function VM(s,e,t){let r;function o(p){r=p}function l(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function u(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),t.update(m,r,_))}function d(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let y=0;for(let M=0;M<_;M++)y+=m[M];t.update(y,r,1)}function f(p,m,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],m[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,m,0,x,0,_);let M=0;for(let C=0;C<_;C++)M+=m[C]*x[C];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function HM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(V){return!(V!==fi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(V){const H=V===ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Xi&&r.convert(V)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Gi&&!H)}function f(V){if(V==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const m=f(p);m!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",m,"instead."),p=m);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,B=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:E,maxAttributes:S,maxVertexUniforms:O,maxVaryings:F,maxFragmentUniforms:A,vertexTextures:I,maxSamples:B}}function GM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new qr,d=new gt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||r!==0||o;return o=x,r=_.length,y},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=m(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,C=_.clipIntersection,E=_.clipShadows,S=s.get(_);if(!o||M===null||M.length===0||l&&!E)l?m(null):p();else{const O=l?0:r,F=O*4;let A=S.clippingState||null;f.value=A,A=m(M,x,F,y);for(let I=0;I!==F;++I)A[I]=t[I];S.clippingState=A,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(_,x,y,M){const C=_!==null?_.length:0;let E=null;if(C!==0){if(E=f.value,M!==!0||E===null){const S=y+C*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(E===null||E.length<S)&&(E=new Float32Array(S));for(let F=0,A=y;F!==C;++F,A+=4)u.copy(_[F]).applyMatrix4(O,d),u.normal.toArray(E,A),E[A+3]=u.constant}f.value=E,f.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,E}}function jM(s){let e=new WeakMap;function t(u,d){return d===Od?u.mapping=Ys:d===Bd&&(u.mapping=Zs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Od||d===Bd)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new fS(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const js=4,sg=[.125,.215,.35,.446,.526,.582],Zr=20,_d=new D0,og=new At;let yd=null,Sd=0,Ed=0,Md=!1;const $r=(1+Math.sqrt(5))/2,Vs=1/$r,ag=[new Y(-$r,Vs,0),new Y($r,Vs,0),new Y(-Vs,0,$r),new Y(Vs,0,$r),new Y(0,$r,-Vs),new Y(0,$r,Vs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class lg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Sd,Ed),this._renderer.xr.enabled=Md,e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:ia,format:fi,colorSpace:Qs,depthBuffer:!1},o=cg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WM(l)),this._blurMaterial=XM(l,e,t)}return o}_compileMaterial(e){const t=new Un(this._lodPlanes[0],e);this._renderer.compile(t,_d)}_sceneToCubeUV(e,t,r,o){const d=new Wn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,x=m.toneMapping;m.getClearColor(og),m.toneMapping=wr,m.autoClear=!1;const y=new m0({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new Un(new oa,y);let C=!1;const E=e.background;E?E.isColor&&(y.color.copy(E),e.background=null,C=!0):(y.color.copy(og),C=!0);for(let S=0;S<6;S++){const O=S%3;O===0?(d.up.set(0,f[S],0),d.lookAt(p[S],0,0)):O===1?(d.up.set(0,0,f[S]),d.lookAt(0,p[S],0)):(d.up.set(0,f[S],0),d.lookAt(0,0,p[S]));const F=this._cubeSize;Bl(o,O*F,S>2?F:0,F,F),m.setRenderTarget(o),C&&m.render(M,d),m.render(e,d)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=x,m.autoClear=_,e.background=E}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ys||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Un(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Bl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,_d)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=ag[(o-l-1)%ag.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Un(this._lodPlanes[o],p),x=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*Zr-1),C=l/M,E=isFinite(l)?1+Math.floor(m*C):Zr;E>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${E} samples when the maximum is set to ${Zr}`);const S=[];let O=0;for(let V=0;V<Zr;++V){const H=V/C,P=Math.exp(-H*H/2);S.push(P),V===0?O+=P:V<E&&(O+=2*P)}for(let V=0;V<S.length;V++)S[V]=S[V]/O;x.envMap.value=e.texture,x.samples.value=E,x.weights.value=S,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:F}=this;x.dTheta.value=M,x.mipInt.value=F-r;const A=this._sizeLods[o],I=3*A*(o>F-js?o-F+js:0),B=4*(this._cubeSize-A);Bl(t,I,B,3*A,2*A),f.setRenderTarget(t),f.render(_,_d)}}function WM(s){const e=[],t=[],r=[];let o=s;const l=s-js+1+sg.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>s-js?f=sg[u-s+js-1]:u===0&&(f=0),r.push(f);const p=1/(d-2),m=-p,_=1+p,x=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,M=6,C=3,E=2,S=1,O=new Float32Array(C*M*y),F=new Float32Array(E*M*y),A=new Float32Array(S*M*y);for(let B=0;B<y;B++){const V=B%3*2/3-1,H=B>2?0:-1,P=[V,H,0,V+2/3,H,0,V+2/3,H+1,0,V,H,0,V+2/3,H+1,0,V,H+1,0];O.set(P,C*M*B),F.set(x,E*M*B);const R=[B,B,B,B,B,B];A.set(R,S*M*B)}const I=new ti;I.setAttribute("position",new pi(O,C)),I.setAttribute("uv",new pi(F,E)),I.setAttribute("faceIndex",new pi(A,S)),e.push(I),o>js&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function cg(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=tc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Bl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function XM(s,e,t){const r=new Float32Array(Zr),o=new Y(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function ug(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function dg(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Bf(){return`

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
	`}function qM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===Od||f===Bd,m=f===Ys||f===Zs;if(p||m){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return t===null&&(t=new lg(s)),_=p?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||m&&y&&o(y)?(t===null&&(t=new lg(s)),_=p?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let f=0;const p=6;for(let m=0;m<p;m++)d[m]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function $M(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Hs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function YM(s,e,t,r){const o={},l=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",u),delete o[x.id];const y=l.get(x);y&&(e.remove(y),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function f(_){const x=_.attributes;for(const y in x)e.update(x[y],s.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,M=_.attributes.position;let C=0;if(y!==null){const O=y.array;C=y.version;for(let F=0,A=O.length;F<A;F+=3){const I=O[F+0],B=O[F+1],V=O[F+2];x.push(I,B,B,V,V,I)}}else if(M!==void 0){const O=M.array;C=M.version;for(let F=0,A=O.length/3-1;F<A;F+=3){const I=F+0,B=F+1,V=F+2;x.push(I,B,B,V,V,I)}}else return;const E=new(c0(x)?x0:g0)(x,1);E.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,E)}function m(_){const x=l.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:m}}function ZM(s,e,t){let r;function o(x){r=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function f(x,y){s.drawElements(r,y,l,x*u),t.update(y,r,1)}function p(x,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,x*u,M),t.update(y,r,M))}function m(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,x,0,M);let E=0;for(let S=0;S<M;S++)E+=y[S];t.update(E,r,1)}function _(x,y,M,C){if(M===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let S=0;S<x.length;S++)p(x[S]/u,y[S],C[S]);else{E.multiDrawElementsInstancedWEBGL(r,y,0,l,x,0,C,0,M);let S=0;for(let O=0;O<M;O++)S+=y[O]*C[O];t.update(S,r,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function KM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function JM(s,e,t){const r=new WeakMap,o=new Lt;function l(u,d,f){const p=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let R=function(){H.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,E=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let A=0;M===!0&&(A=1),C===!0&&(A=2),E===!0&&(A=3);let I=d.attributes.position.count*A,B=1;I>e.maxTextureSize&&(B=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const V=new Float32Array(I*B*4*_),H=new d0(V,I,B,_);H.type=Gi,H.needsUpdate=!0;const P=A*4;for(let k=0;k<_;k++){const J=S[k],Z=O[k],oe=F[k],ue=I*B*4*k;for(let ae=0;ae<J.count;ae++){const pe=ae*P;M===!0&&(o.fromBufferAttribute(J,ae),V[ue+pe+0]=o.x,V[ue+pe+1]=o.y,V[ue+pe+2]=o.z,V[ue+pe+3]=0),C===!0&&(o.fromBufferAttribute(Z,ae),V[ue+pe+4]=o.x,V[ue+pe+5]=o.y,V[ue+pe+6]=o.z,V[ue+pe+7]=0),E===!0&&(o.fromBufferAttribute(oe,ae),V[ue+pe+8]=o.x,V[ue+pe+9]=o.y,V[ue+pe+10]=o.z,V[ue+pe+11]=oe.itemSize===4?o.w:1)}}x={count:_,texture:H,size:new Ve(I,B)},r.set(d,x),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let E=0;E<p.length;E++)M+=p[E];const C=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",C),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function QM(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,m=f.geometry,_=e.get(f,m);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const F0=new On,fg=new E0(1,1),I0=new d0,U0=new Yy,k0=new y0,hg=[],pg=[],mg=new Float32Array(16),gg=new Float32Array(9),xg=new Float32Array(4);function so(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=hg[o];if(l===void 0&&(l=new Float32Array(o),hg[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function sc(s,e){let t=pg[e];t===void 0&&(t=new Int32Array(e),pg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function ew(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function tw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function rw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;xg.set(r),s.uniformMatrix2fv(this.addr,!1,xg),tn(t,r)}}function sw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;gg.set(r),s.uniformMatrix3fv(this.addr,!1,gg),tn(t,r)}}function ow(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;mg.set(r),s.uniformMatrix4fv(this.addr,!1,mg),tn(t,r)}}function aw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function cw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function uw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function dw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function mw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(fg.compareFunction=l0,l=fg):l=F0,t.setTexture2D(e||l,o)}function gw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||U0,o)}function xw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||k0,o)}function vw(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||I0,o)}function _w(s){switch(s){case 5126:return ew;case 35664:return tw;case 35665:return nw;case 35666:return iw;case 35674:return rw;case 35675:return sw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return dw;case 36294:return fw;case 36295:return hw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return xw;case 36289:case 36303:case 36311:case 36292:return vw}}function yw(s,e){s.uniform1fv(this.addr,e)}function Sw(s,e){const t=so(e,this.size,2);s.uniform2fv(this.addr,t)}function Ew(s,e){const t=so(e,this.size,3);s.uniform3fv(this.addr,t)}function Mw(s,e){const t=so(e,this.size,4);s.uniform4fv(this.addr,t)}function ww(s,e){const t=so(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bw(s,e){const t=so(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Cw(s,e){const t=so(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Tw(s,e){s.uniform1iv(this.addr,e)}function Aw(s,e){s.uniform2iv(this.addr,e)}function Rw(s,e){s.uniform3iv(this.addr,e)}function Pw(s,e){s.uniform4iv(this.addr,e)}function Nw(s,e){s.uniform1uiv(this.addr,e)}function Dw(s,e){s.uniform2uiv(this.addr,e)}function Lw(s,e){s.uniform3uiv(this.addr,e)}function Fw(s,e){s.uniform4uiv(this.addr,e)}function Iw(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||F0,l[u])}function Uw(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||U0,l[u])}function kw(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||k0,l[u])}function Ow(s,e,t){const r=this.cache,o=e.length,l=sc(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||I0,l[u])}function Bw(s){switch(s){case 5126:return yw;case 35664:return Sw;case 35665:return Ew;case 35666:return Mw;case 35674:return ww;case 35675:return bw;case 35676:return Cw;case 5124:case 35670:return Tw;case 35667:case 35671:return Aw;case 35668:case 35672:return Rw;case 35669:case 35673:return Pw;case 5125:return Nw;case 36294:return Dw;case 36295:return Lw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return Iw;case 35679:case 36299:case 36307:return Uw;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return Ow}}class zw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_w(t.type)}}class Vw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bw(t.type)}}class Hw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function vg(s,e){s.seq.push(e),s.map[e.id]=e}function Gw(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){vg(t,p===void 0?new zw(d,s,e):new Vw(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new Hw(d),vg(t,_)),t=_}}}class Xl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);Gw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function _g(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const jw=37297;let Ww=0;function Xw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const yg=new gt;function qw(s){Pt._getMatrix(yg,Pt.workingColorSpace,s);const e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+Xw(s.getShaderSource(e),u)}else return o}function $w(s,e){const t=qw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yw(s,e){let t;switch(e){case Sy:t="Linear";break;case Ey:t="Reinhard";break;case My:t="Cineon";break;case wy:t="ACESFilmic";break;case Cy:t="AgX";break;case Ty:t="Neutral";break;case by:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zl=new Y;function Zw(){Pt.getLuminanceCoefficients(zl);const s=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function Jw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Qw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Xo(s){return s!==""}function Eg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const e2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace(e2,n2)}const t2=new Map;function n2(s,e){let t=vt[e];if(t===void 0){const r=t2.get(e);if(r!==void 0)t=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const i2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(s){return s.replace(i2,r2)}function r2(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function bg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function s2(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===$g?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ey?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function o2(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case Zs:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function a2(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function l2(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yg:e="ENVMAP_BLENDING_MULTIPLY";break;case _y:e="ENVMAP_BLENDING_MIX";break;case yy:e="ENVMAP_BLENDING_ADD";break}return e}function c2(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function u2(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=s2(t),p=o2(t),m=a2(t),_=l2(t),x=c2(t),y=Kw(t),M=Jw(l),C=o.createProgram();let E,S,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(E=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),E.length>0&&(E+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xo).join(`
`),S.length>0&&(S+=`
`)):(E=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),S=[bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?vt.tonemapping_pars_fragment:"",t.toneMapping!==wr?Yw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,$w("linearToOutputTexel",t.outputColorSpace),Zw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),u=yf(u),u=Eg(u,t),u=Mg(u,t),d=yf(d),d=Eg(d,t),d=Mg(d,t),u=wg(u),d=wg(d),t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,E=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+E,S=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const F=O+E+u,A=O+S+d,I=_g(o,o.VERTEX_SHADER,F),B=_g(o,o.FRAGMENT_SHADER,A);o.attachShader(C,I),o.attachShader(C,B),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function V(k){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(C).trim(),Z=o.getShaderInfoLog(I).trim(),oe=o.getShaderInfoLog(B).trim();let ue=!0,ae=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,I,B);else{const pe=Sg(o,I,"vertex"),j=Sg(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+pe+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Z===""||oe==="")&&(ae=!1);ae&&(k.diagnostics={runnable:ue,programLog:J,vertexShader:{log:Z,prefix:E},fragmentShader:{log:oe,prefix:S}})}o.deleteShader(I),o.deleteShader(B),H=new Xl(o,C),P=Qw(o,C)}let H;this.getUniforms=function(){return H===void 0&&V(this),H};let P;this.getAttributes=function(){return P===void 0&&V(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(C,jw)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ww++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=B,this}let d2=0;class f2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new h2(e),t.set(e,r)),r}}class h2{constructor(e){this.id=d2++,this.code=e,this.usedTimes=0}}function p2(s,e,t,r,o,l,u){const d=new h0,f=new f2,p=new Set,m=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(P){return p.add(P),P===0?"uv":`uv${P}`}function E(P,R,k,J,Z){const oe=J.fog,ue=Z.geometry,ae=P.isMeshStandardMaterial?J.environment:null,pe=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),j=pe&&pe.mapping===tc?pe.image.height:null,de=M[P.type];P.precision!==null&&(y=o.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const U=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,w=U!==void 0?U.length:0;let W=0;ue.morphAttributes.position!==void 0&&(W=1),ue.morphAttributes.normal!==void 0&&(W=2),ue.morphAttributes.color!==void 0&&(W=3);let ye,X,re,fe;if(de){const bt=Si[de];ye=bt.vertexShader,X=bt.fragmentShader}else ye=P.vertexShader,X=P.fragmentShader,f.update(P),re=f.getVertexShaderID(P),fe=f.getFragmentShaderID(P);const ie=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),Le=Z.isInstancedMesh===!0,Ae=Z.isBatchedMesh===!0,$e=!!P.map,ve=!!P.matcap,ge=!!pe,D=!!P.aoMap,Ue=!!P.lightMap,Ee=!!P.bumpMap,Fe=!!P.normalMap,Te=!!P.displacementMap,Qe=!!P.emissiveMap,Ne=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,ee=P.clearcoat>0,me=P.dispersion>0,Me=P.iridescence>0,_e=P.sheen>0,Ye=P.transmission>0,Ie=T&&!!P.anisotropyMap,He=ee&&!!P.clearcoatMap,ft=ee&&!!P.clearcoatNormalMap,Ce=ee&&!!P.clearcoatRoughnessMap,Xe=Me&&!!P.iridescenceMap,rt=Me&&!!P.iridescenceThicknessMap,ct=_e&&!!P.sheenColorMap,Ze=_e&&!!P.sheenRoughnessMap,_t=!!P.specularMap,ht=!!P.specularColorMap,Nt=!!P.specularIntensityMap,$=Ye&&!!P.transmissionMap,ke=Ye&&!!P.thicknessMap,he=!!P.gradientMap,Se=!!P.alphaMap,Ge=P.alphaTest>0,ze=!!P.alphaHash,pt=!!P.extensions;let Ut=wr;P.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Kt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:ye,fragmentShader:X,defines:P.defines,customVertexShaderID:re,customFragmentShaderID:fe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Ae,batchingColor:Ae&&Z._colorsTexture!==null,instancing:Le,instancingColor:Le&&Z.instanceColor!==null,instancingMorph:Le&&Z.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Qs,alphaToCoverage:!!P.alphaToCoverage,map:$e,matcap:ve,envMap:ge,envMapMode:ge&&pe.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:Ue,bumpMap:Ee,normalMap:Fe,displacementMap:x&&Te,emissiveMap:Qe,normalMapObjectSpace:Fe&&P.normalMapType===Ny,normalMapTangentSpace:Fe&&P.normalMapType===a0,metalnessMap:Ne,roughnessMap:L,anisotropy:T,anisotropyMap:Ie,clearcoat:ee,clearcoatMap:He,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ce,dispersion:me,iridescence:Me,iridescenceMap:Xe,iridescenceThicknessMap:rt,sheen:_e,sheenColorMap:ct,sheenRoughnessMap:Ze,specularMap:_t,specularColorMap:ht,specularIntensityMap:Nt,transmission:Ye,transmissionMap:$,thicknessMap:ke,gradientMap:he,opaque:P.transparent===!1&&P.blending===Ws&&P.alphaToCoverage===!1,alphaMap:Se,alphaTest:Ge,alphaHash:ze,combine:P.combine,mapUv:$e&&C(P.map.channel),aoMapUv:D&&C(P.aoMap.channel),lightMapUv:Ue&&C(P.lightMap.channel),bumpMapUv:Ee&&C(P.bumpMap.channel),normalMapUv:Fe&&C(P.normalMap.channel),displacementMapUv:Te&&C(P.displacementMap.channel),emissiveMapUv:Qe&&C(P.emissiveMap.channel),metalnessMapUv:Ne&&C(P.metalnessMap.channel),roughnessMapUv:L&&C(P.roughnessMap.channel),anisotropyMapUv:Ie&&C(P.anisotropyMap.channel),clearcoatMapUv:He&&C(P.clearcoatMap.channel),clearcoatNormalMapUv:ft&&C(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&C(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&C(P.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&C(P.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&C(P.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&C(P.sheenRoughnessMap.channel),specularMapUv:_t&&C(P.specularMap.channel),specularColorMapUv:ht&&C(P.specularColorMap.channel),specularIntensityMapUv:Nt&&C(P.specularIntensityMap.channel),transmissionMapUv:$&&C(P.transmissionMap.channel),thicknessMapUv:ke&&C(P.thicknessMap.channel),alphaMapUv:Se&&C(P.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Fe||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ue.attributes.uv&&($e||Se),fog:!!oe,useFog:P.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:xe,skinning:Z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:W,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:$e&&P.map.isVideoTexture===!0&&Pt.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:Qe&&P.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Hi,flipSided:P.side===kn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:pt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&P.extensions.multiDraw===!0||Ae)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function S(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const k in P.defines)R.push(k),R.push(P.defines[k]);return P.isRawShaderMaterial===!1&&(O(R,P),F(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function O(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function F(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function A(P){const R=M[P.type];let k;if(R){const J=Si[R];k=lS.clone(J.uniforms)}else k=P.uniforms;return k}function I(P,R){let k;for(let J=0,Z=m.length;J<Z;J++){const oe=m[J];if(oe.cacheKey===R){k=oe,++k.usedTimes;break}}return k===void 0&&(k=new u2(s,R,P,l),m.push(k)),k}function B(P){if(--P.usedTimes===0){const R=m.indexOf(P);m[R]=m[m.length-1],m.pop(),P.destroy()}}function V(P){f.remove(P)}function H(){f.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:A,acquireProgram:I,releaseProgram:B,releaseShaderCache:V,programs:m,dispose:H}}function m2(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function g2(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,x,y,M,C,E){let S=s[e];return S===void 0?(S={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:C,group:E},s[e]=S):(S.id=_.id,S.object=_,S.geometry=x,S.material=y,S.groupOrder=M,S.renderOrder=_.renderOrder,S.z=C,S.group=E),e++,S}function d(_,x,y,M,C,E){const S=u(_,x,y,M,C,E);y.transmission>0?r.push(S):y.transparent===!0?o.push(S):t.push(S)}function f(_,x,y,M,C,E){const S=u(_,x,y,M,C,E);y.transmission>0?r.unshift(S):y.transparent===!0?o.unshift(S):t.unshift(S)}function p(_,x){t.length>1&&t.sort(_||g2),r.length>1&&r.sort(x||Cg),o.length>1&&o.sort(x||Cg)}function m(){for(let _=e,x=s.length;_<x;_++){const y=s[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:f,finish:m,sort:p}}function x2(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Tg,s.set(r,[u])):o>=l.length?(u=new Tg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function v2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new At};break;case"SpotLight":t={position:new Y,direction:new Y,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function _2(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let y2=0;function S2(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function E2(s){const e=new v2,t=_2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Y);const o=new Y,l=new Bt,u=new Bt;function d(p){let m=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,M=0,C=0,E=0,S=0,O=0,F=0,A=0,I=0,B=0,V=0;p.sort(S2);for(let P=0,R=p.length;P<R;P++){const k=p[P],J=k.color,Z=k.intensity,oe=k.distance,ue=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=J.r*Z,_+=J.g*Z,x+=J.b*Z;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(k.sh.coefficients[ae],Z);V++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const pe=k.shadow,j=t.get(k);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.directionalShadow[y]=j,r.directionalShadowMap[y]=ue,r.directionalShadowMatrix[y]=k.shadow.matrix,O++}r.directional[y]=ae,y++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(J).multiplyScalar(Z),ae.distance=oe,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,r.spot[C]=ae;const pe=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,pe.updateMatrices(k),k.castShadow&&B++),r.spotLightMatrix[C]=pe.matrix,k.castShadow){const j=t.get(k);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,r.spotShadow[C]=j,r.spotShadowMap[C]=ue,A++}C++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(J).multiplyScalar(Z),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),r.rectArea[E]=ae,E++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const pe=k.shadow,j=t.get(k);j.shadowIntensity=pe.intensity,j.shadowBias=pe.bias,j.shadowNormalBias=pe.normalBias,j.shadowRadius=pe.radius,j.shadowMapSize=pe.mapSize,j.shadowCameraNear=pe.camera.near,j.shadowCameraFar=pe.camera.far,r.pointShadow[M]=j,r.pointShadowMap[M]=ue,r.pointShadowMatrix[M]=k.shadow.matrix,F++}r.point[M]=ae,M++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(Z),ae.groundColor.copy(k.groundColor).multiplyScalar(Z),r.hemi[S]=ae,S++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=_,r.ambient[2]=x;const H=r.hash;(H.directionalLength!==y||H.pointLength!==M||H.spotLength!==C||H.rectAreaLength!==E||H.hemiLength!==S||H.numDirectionalShadows!==O||H.numPointShadows!==F||H.numSpotShadows!==A||H.numSpotMaps!==I||H.numLightProbes!==V)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=E,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=A+I-B,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=V,H.directionalLength=y,H.pointLength=M,H.spotLength=C,H.rectAreaLength=E,H.hemiLength=S,H.numDirectionalShadows=O,H.numPointShadows=F,H.numSpotShadows=A,H.numSpotMaps=I,H.numLightProbes=V,r.version=y2++)}function f(p,m){let _=0,x=0,y=0,M=0,C=0;const E=m.matrixWorldInverse;for(let S=0,O=p.length;S<O;S++){const F=p[S];if(F.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(E),_++}else if(F.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(E),A.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(E),y++}else if(F.isRectAreaLight){const A=r.rectArea[M];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(E),u.identity(),l.copy(F.matrixWorld),l.premultiply(E),u.extractRotation(l),A.halfWidth.set(F.width*.5,0,0),A.halfHeight.set(0,F.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(F.isPointLight){const A=r.point[x];A.position.setFromMatrixPosition(F.matrixWorld),A.position.applyMatrix4(E),x++}else if(F.isHemisphereLight){const A=r.hemi[C];A.direction.setFromMatrixPosition(F.matrixWorld),A.direction.transformDirection(E),C++}}}return{setup:d,setupView:f,state:r}}function Ag(s){const e=new E2(s),t=[],r=[];function o(m){p.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function d(){e.setup(t)}function f(m){e.setupView(t,m)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function M2(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Ag(s),e.set(o,[d])):l>=u.length?(d=new Ag(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const w2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b2=`uniform sampler2D shadow_pass;
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
}`;function C2(s,e,t){let r=new Lf;const o=new Ve,l=new Ve,u=new Lt,d=new ZS({depthPacking:Py}),f=new KS,p={},m=t.maxTextureSize,_={[br]:kn,[kn]:br,[Hi]:Hi},x=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:w2,fragmentShader:b2}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new ti;M.setAttribute("position",new pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Un(M,x),E=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let S=this.type;this.render=function(B,V,H){if(E.enabled===!1||E.autoUpdate===!1&&E.needsUpdate===!1||B.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Mr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=S!==Vi&&this.type===Vi,oe=S===Vi&&this.type!==Vi;for(let ue=0,ae=B.length;ue<ae;ue++){const pe=B[ue],j=pe.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const de=j.getFrameExtents();if(o.multiply(de),l.copy(j.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/de.x),o.x=l.x*de.x,j.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/de.y),o.y=l.y*de.y,j.mapSize.y=l.y)),j.map===null||Z===!0||oe===!0){const w=this.type!==Vi?{minFilter:hi,magFilter:hi}:{};j.map!==null&&j.map.dispose(),j.map=new ts(o.x,o.y,w),j.map.texture.name=pe.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const U=j.getViewportCount();for(let w=0;w<U;w++){const W=j.getViewport(w);u.set(l.x*W.x,l.y*W.y,l.x*W.z,l.y*W.w),J.viewport(u),j.updateMatrices(pe,w),r=j.getFrustum(),A(V,H,j.camera,pe,this.type)}j.isPointLightShadow!==!0&&this.type===Vi&&O(j,H),j.needsUpdate=!1}S=this.type,E.needsUpdate=!1,s.setRenderTarget(P,R,k)};function O(B,V){const H=e.update(C);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ts(o.x,o.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,s.setRenderTarget(B.mapPass),s.clear(),s.renderBufferDirect(V,null,H,x,C,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,s.setRenderTarget(B.map),s.clear(),s.renderBufferDirect(V,null,H,y,C,null)}function F(B,V,H,P){let R=null;const k=H.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(k!==void 0)R=k;else if(R=H.isPointLight===!0?f:d,s.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0){const J=R.uuid,Z=V.uuid;let oe=p[J];oe===void 0&&(oe={},p[J]=oe);let ue=oe[Z];ue===void 0&&(ue=R.clone(),oe[Z]=ue,V.addEventListener("dispose",I)),R=ue}if(R.visible=V.visible,R.wireframe=V.wireframe,P===Vi?R.side=V.shadowSide!==null?V.shadowSide:V.side:R.side=V.shadowSide!==null?V.shadowSide:_[V.side],R.alphaMap=V.alphaMap,R.alphaTest=V.alphaTest,R.map=V.map,R.clipShadows=V.clipShadows,R.clippingPlanes=V.clippingPlanes,R.clipIntersection=V.clipIntersection,R.displacementMap=V.displacementMap,R.displacementScale=V.displacementScale,R.displacementBias=V.displacementBias,R.wireframeLinewidth=V.wireframeLinewidth,R.linewidth=V.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const J=s.properties.get(R);J.light=H}return R}function A(B,V,H,P,R){if(B.visible===!1)return;if(B.layers.test(V.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Vi)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,B.matrixWorld);const Z=e.update(B),oe=B.material;if(Array.isArray(oe)){const ue=Z.groups;for(let ae=0,pe=ue.length;ae<pe;ae++){const j=ue[ae],de=oe[j.materialIndex];if(de&&de.visible){const U=F(B,de,P,R);B.onBeforeShadow(s,B,V,H,Z,U,j),s.renderBufferDirect(H,null,Z,U,B,j),B.onAfterShadow(s,B,V,H,Z,U,j)}}}else if(oe.visible){const ue=F(B,oe,P,R);B.onBeforeShadow(s,B,V,H,Z,ue,null),s.renderBufferDirect(H,null,Z,ue,B,null),B.onAfterShadow(s,B,V,H,Z,ue,null)}}const J=B.children;for(let Z=0,oe=J.length;Z<oe;Z++)A(J[Z],V,H,P,R)}function I(B){B.target.removeEventListener("dispose",I);for(const H in p){const P=p[H],R=B.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const T2={[Nd]:Dd,[Ld]:Ud,[Fd]:kd,[$s]:Id,[Dd]:Nd,[Ud]:Ld,[kd]:Fd,[Id]:$s};function A2(s,e){function t(){let $=!1;const ke=new Lt;let he=null;const Se=new Lt(0,0,0,0);return{setMask:function(Ge){he!==Ge&&!$&&(s.colorMask(Ge,Ge,Ge,Ge),he=Ge)},setLocked:function(Ge){$=Ge},setClear:function(Ge,ze,pt,Ut,Kt){Kt===!0&&(Ge*=Ut,ze*=Ut,pt*=Ut),ke.set(Ge,ze,pt,Ut),Se.equals(ke)===!1&&(s.clearColor(Ge,ze,pt,Ut),Se.copy(ke))},reset:function(){$=!1,he=null,Se.set(-1,0,0,0)}}}function r(){let $=!1,ke=!1,he=null,Se=null,Ge=null;return{setReversed:function(ze){if(ke!==ze){const pt=e.get("EXT_clip_control");ke?pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.ZERO_TO_ONE_EXT):pt.clipControlEXT(pt.LOWER_LEFT_EXT,pt.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ge;Ge=null,this.setClear(Ut)}ke=ze},getReversed:function(){return ke},setTest:function(ze){ze?ie(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(ze){he!==ze&&!$&&(s.depthMask(ze),he=ze)},setFunc:function(ze){if(ke&&(ze=T2[ze]),Se!==ze){switch(ze){case Nd:s.depthFunc(s.NEVER);break;case Dd:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case $s:s.depthFunc(s.LEQUAL);break;case Fd:s.depthFunc(s.EQUAL);break;case Id:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Se=ze}},setLocked:function(ze){$=ze},setClear:function(ze){Ge!==ze&&(ke&&(ze=1-ze),s.clearDepth(ze),Ge=ze)},reset:function(){$=!1,he=null,Se=null,Ge=null,ke=!1}}}function o(){let $=!1,ke=null,he=null,Se=null,Ge=null,ze=null,pt=null,Ut=null,Kt=null;return{setTest:function(bt){$||(bt?ie(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(bt){ke!==bt&&!$&&(s.stencilMask(bt),ke=bt)},setFunc:function(bt,An,Sn){(he!==bt||Se!==An||Ge!==Sn)&&(s.stencilFunc(bt,An,Sn),he=bt,Se=An,Ge=Sn)},setOp:function(bt,An,Sn){(ze!==bt||pt!==An||Ut!==Sn)&&(s.stencilOp(bt,An,Sn),ze=bt,pt=An,Ut=Sn)},setLocked:function(bt){$=bt},setClear:function(bt){Kt!==bt&&(s.clearStencil(bt),Kt=bt)},reset:function(){$=!1,ke=null,he=null,Se=null,Ge=null,ze=null,pt=null,Ut=null,Kt=null}}}const l=new t,u=new r,d=new o,f=new WeakMap,p=new WeakMap;let m={},_={},x=new WeakMap,y=[],M=null,C=!1,E=null,S=null,O=null,F=null,A=null,I=null,B=null,V=new At(0,0,0),H=0,P=!1,R=null,k=null,J=null,Z=null,oe=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,pe=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(j)[1]),ae=pe>=1):j.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ae=pe>=2);let de=null,U={};const w=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),ye=new Lt().fromArray(w),X=new Lt().fromArray(W);function re($,ke,he,Se){const Ge=new Uint8Array(4),ze=s.createTexture();s.bindTexture($,ze),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<he;pt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(ke,0,s.RGBA,1,1,Se,0,s.RGBA,s.UNSIGNED_BYTE,Ge):s.texImage2D(ke+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ge);return ze}const fe={};fe[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),fe[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),fe[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ie(s.DEPTH_TEST),u.setFunc($s),Ee(!1),Fe(Mm),ie(s.CULL_FACE),D(Mr);function ie($){m[$]!==!0&&(s.enable($),m[$]=!0)}function xe($){m[$]!==!1&&(s.disable($),m[$]=!1)}function Le($,ke){return _[$]!==ke?(s.bindFramebuffer($,ke),_[$]=ke,$===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=ke),$===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=ke),!0):!1}function Ae($,ke){let he=y,Se=!1;if($){he=x.get(ke),he===void 0&&(he=[],x.set(ke,he));const Ge=$.textures;if(he.length!==Ge.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,pt=Ge.length;ze<pt;ze++)he[ze]=s.COLOR_ATTACHMENT0+ze;he.length=Ge.length,Se=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Se=!0);Se&&s.drawBuffers(he)}function $e($){return M!==$?(s.useProgram($),M=$,!0):!1}const ve={[Yr]:s.FUNC_ADD,[ny]:s.FUNC_SUBTRACT,[iy]:s.FUNC_REVERSE_SUBTRACT};ve[ry]=s.MIN,ve[sy]=s.MAX;const ge={[oy]:s.ZERO,[ay]:s.ONE,[ly]:s.SRC_COLOR,[Rd]:s.SRC_ALPHA,[py]:s.SRC_ALPHA_SATURATE,[fy]:s.DST_COLOR,[uy]:s.DST_ALPHA,[cy]:s.ONE_MINUS_SRC_COLOR,[Pd]:s.ONE_MINUS_SRC_ALPHA,[hy]:s.ONE_MINUS_DST_COLOR,[dy]:s.ONE_MINUS_DST_ALPHA,[my]:s.CONSTANT_COLOR,[gy]:s.ONE_MINUS_CONSTANT_COLOR,[xy]:s.CONSTANT_ALPHA,[vy]:s.ONE_MINUS_CONSTANT_ALPHA};function D($,ke,he,Se,Ge,ze,pt,Ut,Kt,bt){if($===Mr){C===!0&&(xe(s.BLEND),C=!1);return}if(C===!1&&(ie(s.BLEND),C=!0),$!==ty){if($!==E||bt!==P){if((S!==Yr||A!==Yr)&&(s.blendEquation(s.FUNC_ADD),S=Yr,A=Yr),bt)switch($){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.ONE,s.ONE);break;case bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Cm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}O=null,F=null,I=null,B=null,V.set(0,0,0),H=0,E=$,P=bt}return}Ge=Ge||ke,ze=ze||he,pt=pt||Se,(ke!==S||Ge!==A)&&(s.blendEquationSeparate(ve[ke],ve[Ge]),S=ke,A=Ge),(he!==O||Se!==F||ze!==I||pt!==B)&&(s.blendFuncSeparate(ge[he],ge[Se],ge[ze],ge[pt]),O=he,F=Se,I=ze,B=pt),(Ut.equals(V)===!1||Kt!==H)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Kt),V.copy(Ut),H=Kt),E=$,P=!1}function Ue($,ke){$.side===Hi?xe(s.CULL_FACE):ie(s.CULL_FACE);let he=$.side===kn;ke&&(he=!he),Ee(he),$.blending===Ws&&$.transparent===!1?D(Mr):D($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const Se=$.stencilWrite;d.setTest(Se),Se&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Qe($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee($){R!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),R=$)}function Fe($){$!==J_?(ie(s.CULL_FACE),$!==k&&($===Mm?s.cullFace(s.BACK):$===Q_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),k=$}function Te($){$!==J&&(ae&&s.lineWidth($),J=$)}function Qe($,ke,he){$?(ie(s.POLYGON_OFFSET_FILL),(Z!==ke||oe!==he)&&(s.polygonOffset(ke,he),Z=ke,oe=he)):xe(s.POLYGON_OFFSET_FILL)}function Ne($){$?ie(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function L($){$===void 0&&($=s.TEXTURE0+ue-1),de!==$&&(s.activeTexture($),de=$)}function T($,ke,he){he===void 0&&(de===null?he=s.TEXTURE0+ue-1:he=de);let Se=U[he];Se===void 0&&(Se={type:void 0,texture:void 0},U[he]=Se),(Se.type!==$||Se.texture!==ke)&&(de!==he&&(s.activeTexture(he),de=he),s.bindTexture($,ke||fe[$]),Se.type=$,Se.texture=ke)}function ee(){const $=U[de];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{s.compressedTexImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ye(){try{s.texSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ie(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function He(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ft(){try{s.texStorage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ce(){try{s.texStorage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Xe(){try{s.texImage2D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function rt(){try{s.texImage3D.apply(s,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ct($){ye.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),ye.copy($))}function Ze($){X.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),X.copy($))}function _t($,ke){let he=p.get(ke);he===void 0&&(he=new WeakMap,p.set(ke,he));let Se=he.get($);Se===void 0&&(Se=s.getUniformBlockIndex(ke,$.name),he.set($,Se))}function ht($,ke){const Se=p.get(ke).get($);f.get(ke)!==Se&&(s.uniformBlockBinding(ke,Se,$.__bindingPointIndex),f.set(ke,Se))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},de=null,U={},_={},x=new WeakMap,y=[],M=null,C=!1,E=null,S=null,O=null,F=null,A=null,I=null,B=null,V=new At(0,0,0),H=0,P=!1,R=null,k=null,J=null,Z=null,oe=null,ye.set(0,0,s.canvas.width,s.canvas.height),X.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ie,disable:xe,bindFramebuffer:Le,drawBuffers:Ae,useProgram:$e,setBlending:D,setMaterial:Ue,setFlipSided:Ee,setCullFace:Fe,setLineWidth:Te,setPolygonOffset:Qe,setScissorTest:Ne,activeTexture:L,bindTexture:T,unbindTexture:ee,compressedTexImage2D:me,compressedTexImage3D:Me,texImage2D:Xe,texImage3D:rt,updateUBOMapping:_t,uniformBlockBinding:ht,texStorage2D:ft,texStorage3D:Ce,texSubImage2D:_e,texSubImage3D:Ye,compressedTexSubImage2D:Ie,compressedTexSubImage3D:He,scissor:ct,viewport:Ze,reset:Nt}}function R2(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ve,m=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return y?new OffscreenCanvas(L,T):Ql("canvas")}function C(L,T,ee){let me=1;const Me=Ne(L);if((Me.width>ee||Me.height>ee)&&(me=ee/Math.max(Me.width,Me.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const _e=Math.floor(me*Me.width),Ye=Math.floor(me*Me.height);_===void 0&&(_=M(_e,Ye));const Ie=T?M(_e,Ye):_;return Ie.width=_e,Ie.height=Ye,Ie.getContext("2d").drawImage(L,0,0,_e,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+_e+"x"+Ye+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),L;return L}function E(L){return L.generateMipmaps}function S(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function F(L,T,ee,me,Me=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let _e=T;if(T===s.RED&&(ee===s.FLOAT&&(_e=s.R32F),ee===s.HALF_FLOAT&&(_e=s.R16F),ee===s.UNSIGNED_BYTE&&(_e=s.R8)),T===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.R8UI),ee===s.UNSIGNED_SHORT&&(_e=s.R16UI),ee===s.UNSIGNED_INT&&(_e=s.R32UI),ee===s.BYTE&&(_e=s.R8I),ee===s.SHORT&&(_e=s.R16I),ee===s.INT&&(_e=s.R32I)),T===s.RG&&(ee===s.FLOAT&&(_e=s.RG32F),ee===s.HALF_FLOAT&&(_e=s.RG16F),ee===s.UNSIGNED_BYTE&&(_e=s.RG8)),T===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.RG8UI),ee===s.UNSIGNED_SHORT&&(_e=s.RG16UI),ee===s.UNSIGNED_INT&&(_e=s.RG32UI),ee===s.BYTE&&(_e=s.RG8I),ee===s.SHORT&&(_e=s.RG16I),ee===s.INT&&(_e=s.RG32I)),T===s.RGB_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),ee===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),ee===s.UNSIGNED_INT&&(_e=s.RGB32UI),ee===s.BYTE&&(_e=s.RGB8I),ee===s.SHORT&&(_e=s.RGB16I),ee===s.INT&&(_e=s.RGB32I)),T===s.RGBA_INTEGER&&(ee===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),ee===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),ee===s.UNSIGNED_INT&&(_e=s.RGBA32UI),ee===s.BYTE&&(_e=s.RGBA8I),ee===s.SHORT&&(_e=s.RGBA16I),ee===s.INT&&(_e=s.RGBA32I)),T===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),T===s.RGBA){const Ye=Me?Kl:Pt.getTransfer(me);ee===s.FLOAT&&(_e=s.RGBA32F),ee===s.HALF_FLOAT&&(_e=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(_e=Ye===Dt?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function A(L,T){let ee;return L?T===null||T===es||T===Ks?ee=s.DEPTH24_STENCIL8:T===Gi?ee=s.DEPTH32F_STENCIL8:T===Jo&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===Ks?ee=s.DEPTH_COMPONENT24:T===Gi?ee=s.DEPTH_COMPONENT32F:T===Jo&&(ee=s.DEPTH_COMPONENT16),ee}function I(L,T){return E(L)===!0||L.isFramebufferTexture&&L.minFilter!==hi&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function B(L){const T=L.target;T.removeEventListener("dispose",B),H(T),T.isVideoTexture&&m.delete(T)}function V(L){const T=L.target;T.removeEventListener("dispose",V),R(T)}function H(L){const T=r.get(L);if(T.__webglInit===void 0)return;const ee=L.source,me=x.get(ee);if(me){const Me=me[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&P(L),Object.keys(me).length===0&&x.delete(ee)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const ee=L.source,me=x.get(ee);delete me[T.__cacheKey],u.memory.textures--}function R(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let Me=0;Me<T.__webglFramebuffer[me].length;Me++)s.deleteFramebuffer(T.__webglFramebuffer[me][Me]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const ee=L.textures;for(let me=0,Me=ee.length;me<Me;me++){const _e=r.get(ee[me]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),u.memory.textures--),r.remove(ee[me])}r.remove(L)}let k=0;function J(){k=0}function Z(){const L=k;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function oe(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function ue(L,T){const ee=r.get(L);if(L.isVideoTexture&&Te(L),L.isRenderTargetTexture===!1&&L.version>0&&ee.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(ee,L,T);return}}t.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+T)}function ae(L,T){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){X(ee,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+T)}function pe(L,T){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){X(ee,L,T);return}t.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+T)}function j(L,T){const ee=r.get(L);if(L.version>0&&ee.__version!==L.version){re(ee,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+T)}const de={[zd]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[Vd]:s.MIRRORED_REPEAT},U={[hi]:s.NEAREST,[Ay]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Gu]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},w={[Dy]:s.NEVER,[Oy]:s.ALWAYS,[Ly]:s.LESS,[l0]:s.LEQUAL,[Fy]:s.EQUAL,[ky]:s.GEQUAL,[Iy]:s.GREATER,[Uy]:s.NOTEQUAL};function W(L,T){if(T.type===Gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Gu||T.magFilter===ml||T.magFilter===Jr||T.minFilter===Ei||T.minFilter===Gu||T.minFilter===ml||T.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,de[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,de[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,de[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,U[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,w[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==ml&&T.minFilter!==Jr||T.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ye(L,T){let ee=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",B));const me=T.source;let Me=x.get(me);Me===void 0&&(Me={},x.set(me,Me));const _e=oe(T);if(_e!==L.__cacheKey){Me[_e]===void 0&&(Me[_e]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),Me[_e].usedTimes++;const Ye=Me[L.__cacheKey];Ye!==void 0&&(Me[L.__cacheKey].usedTimes--,Ye.usedTimes===0&&P(T)),L.__cacheKey=_e,L.__webglTexture=Me[_e].texture}return ee}function X(L,T,ee){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const Me=ye(L,T),_e=T.source;t.bindTexture(me,L.__webglTexture,s.TEXTURE0+ee);const Ye=r.get(_e);if(_e.version!==Ye.__version||Me===!0){t.activeTexture(s.TEXTURE0+ee);const Ie=Pt.getPrimaries(Pt.workingColorSpace),He=T.colorSpace===Er?null:Pt.getPrimaries(T.colorSpace),ft=T.colorSpace===Er||Ie===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Ce=C(T.image,!1,o.maxTextureSize);Ce=Qe(T,Ce);const Xe=l.convert(T.format,T.colorSpace),rt=l.convert(T.type);let ct=F(T.internalFormat,Xe,rt,T.colorSpace,T.isVideoTexture);W(me,T);let Ze;const _t=T.mipmaps,ht=T.isVideoTexture!==!0,Nt=Ye.__version===void 0||Me===!0,$=_e.dataReady,ke=I(T,Ce);if(T.isDepthTexture)ct=A(T.format===Js,T.type),Nt&&(ht?t.texStorage2D(s.TEXTURE_2D,1,ct,Ce.width,Ce.height):t.texImage2D(s.TEXTURE_2D,0,ct,Ce.width,Ce.height,0,Xe,rt,null));else if(T.isDataTexture)if(_t.length>0){ht&&Nt&&t.texStorage2D(s.TEXTURE_2D,ke,ct,_t[0].width,_t[0].height);for(let he=0,Se=_t.length;he<Se;he++)Ze=_t[he],ht?$&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ze.width,Ze.height,Xe,rt,Ze.data):t.texImage2D(s.TEXTURE_2D,he,ct,Ze.width,Ze.height,0,Xe,rt,Ze.data);T.generateMipmaps=!1}else ht?(Nt&&t.texStorage2D(s.TEXTURE_2D,ke,ct,Ce.width,Ce.height),$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Xe,rt,Ce.data)):t.texImage2D(s.TEXTURE_2D,0,ct,Ce.width,Ce.height,0,Xe,rt,Ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ht&&Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,ct,_t[0].width,_t[0].height,Ce.depth);for(let he=0,Se=_t.length;he<Se;he++)if(Ze=_t[he],T.format!==fi)if(Xe!==null)if(ht){if($)if(T.layerUpdates.size>0){const Ge=rg(Ze.width,Ze.height,T.format,T.type);for(const ze of T.layerUpdates){const pt=Ze.data.subarray(ze*Ge/Ze.data.BYTES_PER_ELEMENT,(ze+1)*Ge/Ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ze,Ze.width,Ze.height,1,Xe,pt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ze.width,Ze.height,Ce.depth,Xe,Ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,ct,Ze.width,Ze.height,Ce.depth,0,Ze.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?$&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ze.width,Ze.height,Ce.depth,Xe,rt,Ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,ct,Ze.width,Ze.height,Ce.depth,0,Xe,rt,Ze.data)}else{ht&&Nt&&t.texStorage2D(s.TEXTURE_2D,ke,ct,_t[0].width,_t[0].height);for(let he=0,Se=_t.length;he<Se;he++)Ze=_t[he],T.format!==fi?Xe!==null?ht?$&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ze.width,Ze.height,Xe,Ze.data):t.compressedTexImage2D(s.TEXTURE_2D,he,ct,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?$&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ze.width,Ze.height,Xe,rt,Ze.data):t.texImage2D(s.TEXTURE_2D,he,ct,Ze.width,Ze.height,0,Xe,rt,Ze.data)}else if(T.isDataArrayTexture)if(ht){if(Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ke,ct,Ce.width,Ce.height,Ce.depth),$)if(T.layerUpdates.size>0){const he=rg(Ce.width,Ce.height,T.format,T.type);for(const Se of T.layerUpdates){const Ge=Ce.data.subarray(Se*he/Ce.data.BYTES_PER_ELEMENT,(Se+1)*he/Ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Se,Ce.width,Ce.height,1,Xe,rt,Ge)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Xe,rt,Ce.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ct,Ce.width,Ce.height,Ce.depth,0,Xe,rt,Ce.data);else if(T.isData3DTexture)ht?(Nt&&t.texStorage3D(s.TEXTURE_3D,ke,ct,Ce.width,Ce.height,Ce.depth),$&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Xe,rt,Ce.data)):t.texImage3D(s.TEXTURE_3D,0,ct,Ce.width,Ce.height,Ce.depth,0,Xe,rt,Ce.data);else if(T.isFramebufferTexture){if(Nt)if(ht)t.texStorage2D(s.TEXTURE_2D,ke,ct,Ce.width,Ce.height);else{let he=Ce.width,Se=Ce.height;for(let Ge=0;Ge<ke;Ge++)t.texImage2D(s.TEXTURE_2D,Ge,ct,he,Se,0,Xe,rt,null),he>>=1,Se>>=1}}else if(_t.length>0){if(ht&&Nt){const he=Ne(_t[0]);t.texStorage2D(s.TEXTURE_2D,ke,ct,he.width,he.height)}for(let he=0,Se=_t.length;he<Se;he++)Ze=_t[he],ht?$&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Xe,rt,Ze):t.texImage2D(s.TEXTURE_2D,he,ct,Xe,rt,Ze);T.generateMipmaps=!1}else if(ht){if(Nt){const he=Ne(Ce);t.texStorage2D(s.TEXTURE_2D,ke,ct,he.width,he.height)}$&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Xe,rt,Ce)}else t.texImage2D(s.TEXTURE_2D,0,ct,Xe,rt,Ce);E(T)&&S(me),Ye.__version=_e.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function re(L,T,ee){if(T.image.length!==6)return;const me=ye(L,T),Me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ee);const _e=r.get(Me);if(Me.version!==_e.__version||me===!0){t.activeTexture(s.TEXTURE0+ee);const Ye=Pt.getPrimaries(Pt.workingColorSpace),Ie=T.colorSpace===Er?null:Pt.getPrimaries(T.colorSpace),He=T.colorSpace===Er||Ye===Ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const ft=T.isCompressedTexture||T.image[0].isCompressedTexture,Ce=T.image[0]&&T.image[0].isDataTexture,Xe=[];for(let Se=0;Se<6;Se++)!ft&&!Ce?Xe[Se]=C(T.image[Se],!0,o.maxCubemapSize):Xe[Se]=Ce?T.image[Se].image:T.image[Se],Xe[Se]=Qe(T,Xe[Se]);const rt=Xe[0],ct=l.convert(T.format,T.colorSpace),Ze=l.convert(T.type),_t=F(T.internalFormat,ct,Ze,T.colorSpace),ht=T.isVideoTexture!==!0,Nt=_e.__version===void 0||me===!0,$=Me.dataReady;let ke=I(T,rt);W(s.TEXTURE_CUBE_MAP,T);let he;if(ft){ht&&Nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,_t,rt.width,rt.height);for(let Se=0;Se<6;Se++){he=Xe[Se].mipmaps;for(let Ge=0;Ge<he.length;Ge++){const ze=he[Ge];T.format!==fi?ct!==null?ht?$&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,ze.width,ze.height,ct,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,_t,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,0,0,ze.width,ze.height,ct,Ze,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge,_t,ze.width,ze.height,0,ct,Ze,ze.data)}}}else{if(he=T.mipmaps,ht&&Nt){he.length>0&&ke++;const Se=Ne(Xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ke,_t,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ce){ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Xe[Se].width,Xe[Se].height,ct,Ze,Xe[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,_t,Xe[Se].width,Xe[Se].height,0,ct,Ze,Xe[Se].data);for(let Ge=0;Ge<he.length;Ge++){const pt=he[Ge].image[Se].image;ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,pt.width,pt.height,ct,Ze,pt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,_t,pt.width,pt.height,0,ct,Ze,pt.data)}}else{ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ct,Ze,Xe[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,_t,ct,Ze,Xe[Se]);for(let Ge=0;Ge<he.length;Ge++){const ze=he[Ge];ht?$&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,0,0,ct,Ze,ze.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ge+1,_t,ct,Ze,ze.image[Se])}}}E(T)&&S(s.TEXTURE_CUBE_MAP),_e.__version=Me.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function fe(L,T,ee,me,Me,_e){const Ye=l.convert(ee.format,ee.colorSpace),Ie=l.convert(ee.type),He=F(ee.internalFormat,Ye,Ie,ee.colorSpace),ft=r.get(T),Ce=r.get(ee);if(Ce.__renderTarget=T,!ft.__hasExternalTextures){const Xe=Math.max(1,T.width>>_e),rt=Math.max(1,T.height>>_e);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,_e,He,Xe,rt,T.depth,0,Ye,Ie,null):t.texImage2D(Me,_e,He,Xe,rt,0,Ye,Ie,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),Fe(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,Me,Ce.__webglTexture,0,Ee(T)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,Me,Ce.__webglTexture,_e),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(L,T,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const me=T.depthTexture,Me=me&&me.isDepthTexture?me.type:null,_e=A(T.stencilBuffer,Me),Ye=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=Ee(T);Fe(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,_e,T.width,T.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,_e,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,_e,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,L)}else{const me=T.textures;for(let Me=0;Me<me.length;Me++){const _e=me[Me],Ye=l.convert(_e.format,_e.colorSpace),Ie=l.convert(_e.type),He=F(_e.internalFormat,Ye,Ie,_e.colorSpace),ft=Ee(T);ee&&Fe(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,He,T.width,T.height):Fe(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,He,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,He,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ue(T.depthTexture,0);const Me=me.__webglTexture,_e=Ee(T);if(T.depthTexture.format===Xs)Fe(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(T.depthTexture.format===Js)Fe(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Le(L){const T=r.get(L),ee=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const Me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",Me)};me.addEventListener("dispose",Me),T.__depthDisposeCallback=Me}T.__boundDepthTexture=me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");xe(T.__webglFramebuffer,L)}else if(ee){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),ie(T.__webglDepthbuffer[me],L,!1);else{const Me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ie(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(L,T,ee){const me=r.get(L);T!==void 0&&fe(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&Le(L)}function $e(L){const T=L.texture,ee=r.get(L),me=r.get(T);L.addEventListener("dispose",V);const Me=L.textures,_e=L.isWebGLCubeRenderTarget===!0,Ye=Me.length>1;if(Ye||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,u.memory.textures++),_e){ee.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer[Ie]=[];for(let He=0;He<T.mipmaps.length;He++)ee.__webglFramebuffer[Ie][He]=s.createFramebuffer()}else ee.__webglFramebuffer[Ie]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)ee.__webglFramebuffer[Ie]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Ie=0,He=Me.length;Ie<He;Ie++){const ft=r.get(Me[Ie]);ft.__webglTexture===void 0&&(ft.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&Fe(L)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Me.length;Ie++){const He=Me[Ie];ee.__webglColorRenderbuffer[Ie]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie]);const ft=l.convert(He.format,He.colorSpace),Ce=l.convert(He.type),Xe=F(He.internalFormat,ft,Ce,He.colorSpace,L.isXRRenderTarget===!0),rt=Ee(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Xe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ie,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ie])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(ee.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),W(s.TEXTURE_CUBE_MAP,T);for(let Ie=0;Ie<6;Ie++)if(T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)fe(ee.__webglFramebuffer[Ie][He],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,He);else fe(ee.__webglFramebuffer[Ie],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);E(T)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ie=0,He=Me.length;Ie<He;Ie++){const ft=Me[Ie],Ce=r.get(ft);t.bindTexture(s.TEXTURE_2D,Ce.__webglTexture),W(s.TEXTURE_2D,ft),fe(ee.__webglFramebuffer,L,ft,s.COLOR_ATTACHMENT0+Ie,s.TEXTURE_2D,0),E(ft)&&S(s.TEXTURE_2D)}t.unbindTexture()}else{let Ie=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ie=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,me.__webglTexture),W(Ie,T),T.mipmaps&&T.mipmaps.length>0)for(let He=0;He<T.mipmaps.length;He++)fe(ee.__webglFramebuffer[He],L,T,s.COLOR_ATTACHMENT0,Ie,He);else fe(ee.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,Ie,0);E(T)&&S(Ie),t.unbindTexture()}L.depthBuffer&&Le(L)}function ve(L){const T=L.textures;for(let ee=0,me=T.length;ee<me;ee++){const Me=T[ee];if(E(Me)){const _e=O(L),Ye=r.get(Me).__webglTexture;t.bindTexture(_e,Ye),S(_e),t.unbindTexture()}}}const ge=[],D=[];function Ue(L){if(L.samples>0){if(Fe(L)===!1){const T=L.textures,ee=L.width,me=L.height;let Me=s.COLOR_BUFFER_BIT;const _e=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(L),Ie=T.length>1;if(Ie)for(let He=0;He<T.length;He++)t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let He=0;He<T.length;He++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Ie){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[He]);const ft=r.get(T[He]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ft,0)}s.blitFramebuffer(0,0,ee,me,0,0,ee,me,Me,s.NEAREST),f===!0&&(ge.length=0,D.length=0,ge.push(s.COLOR_ATTACHMENT0+He),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ge.push(_e),D.push(_e),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ie)for(let He=0;He<T.length;He++){t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[He]);const ft=r.get(T[He]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+He,s.TEXTURE_2D,ft,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Ee(L){return Math.min(o.maxSamples,L.samples)}function Fe(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Te(L){const T=u.render.frame;m.get(L)!==T&&(m.set(L,T),L.update())}function Qe(L,T){const ee=L.colorSpace,me=L.format,Me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ee!==Qs&&ee!==Er&&(Pt.getTransfer(ee)===Dt?(me!==fi||Me!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),T}function Ne(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=ue,this.setTexture2DArray=ae,this.setTexture3D=pe,this.setTextureCube=j,this.rebindTextures=Ae,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Fe}function P2(s,e){function t(r,o=Er){let l;const u=Pt.getTransfer(o);if(r===Xi)return s.UNSIGNED_BYTE;if(r===Af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Kg)return s.BYTE;if(r===Jg)return s.SHORT;if(r===Jo)return s.UNSIGNED_SHORT;if(r===Tf)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===ia)return s.HALF_FLOAT;if(r===e0)return s.ALPHA;if(r===t0)return s.RGB;if(r===fi)return s.RGBA;if(r===n0)return s.LUMINANCE;if(r===i0)return s.LUMINANCE_ALPHA;if(r===Xs)return s.DEPTH_COMPONENT;if(r===Js)return s.DEPTH_STENCIL;if(r===r0)return s.RED;if(r===Pf)return s.RED_INTEGER;if(r===s0)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Df)return s.RGBA_INTEGER;if(r===Vl||r===Hl||r===Gl||r===jl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Vl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Vl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hd||r===Gd||r===jd||r===Wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Hd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd||r===qd||r===$d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Xd||r===qd)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yd||r===Zd||r===Kd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===af)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wl||r===uf||r===df)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Wl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===o0||r===ff||r===hf||r===pf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Wl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===hf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const N2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D2=`
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

}`;class L2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new On,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Cr({vertexShader:N2,fragmentShader:D2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new rc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F2 extends no{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,m=null,_=null,x=null,y=null,M=null;const C=new L2,E=t.getContextAttributes();let S=null,O=null;const F=[],A=[],I=new Ve;let B=null;const V=new Wn;V.viewport=new Lt;const H=new Wn;H.viewport=new Lt;const P=[V,H],R=new n1;let k=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let re=F[X];return re===void 0&&(re=new dd,F[X]=re),re.getTargetRaySpace()},this.getControllerGrip=function(X){let re=F[X];return re===void 0&&(re=new dd,F[X]=re),re.getGripSpace()},this.getHand=function(X){let re=F[X];return re===void 0&&(re=new dd,F[X]=re),re.getHandSpace()};function Z(X){const re=A.indexOf(X.inputSource);if(re===-1)return;const fe=F[re];fe!==void 0&&(fe.update(X.inputSource,X.frame,p||u),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function oe(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",ue);for(let X=0;X<F.length;X++){const re=A[X];re!==null&&(A[X]=null,F[X].disconnect(re))}k=null,J=null,C.reset(),e.setRenderTarget(S),y=null,x=null,_=null,o=null,O=null,ye.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",ue),E.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,ie=null,xe=null;E.depth&&(xe=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=E.stencil?Js:Xs,ie=E.stencil?Ks:es);const Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:l};_=new XRWebGLBinding(o,t),x=_.createProjectionLayer(Le),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new ts(x.textureWidth,x.textureHeight,{format:fi,type:Xi,depthTexture:new E0(x.textureWidth,x.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const fe={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(o,t,fe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new ts(y.framebufferWidth,y.framebufferHeight,{format:fi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil})}O.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),ye.setContext(o),ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ue(X){for(let re=0;re<X.removed.length;re++){const fe=X.removed[re],ie=A.indexOf(fe);ie>=0&&(A[ie]=null,F[ie].disconnect(fe))}for(let re=0;re<X.added.length;re++){const fe=X.added[re];let ie=A.indexOf(fe);if(ie===-1){for(let Le=0;Le<F.length;Le++)if(Le>=A.length){A.push(fe),ie=Le;break}else if(A[Le]===null){A[Le]=fe,ie=Le;break}if(ie===-1)break}const xe=F[ie];xe&&xe.connect(fe)}}const ae=new Y,pe=new Y;function j(X,re,fe){ae.setFromMatrixPosition(re.matrixWorld),pe.setFromMatrixPosition(fe.matrixWorld);const ie=ae.distanceTo(pe),xe=re.projectionMatrix.elements,Le=fe.projectionMatrix.elements,Ae=xe[14]/(xe[10]-1),$e=xe[14]/(xe[10]+1),ve=(xe[9]+1)/xe[5],ge=(xe[9]-1)/xe[5],D=(xe[8]-1)/xe[0],Ue=(Le[8]+1)/Le[0],Ee=Ae*D,Fe=Ae*Ue,Te=ie/(-D+Ue),Qe=Te*-D;if(re.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Qe),X.translateZ(Te),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),xe[10]===-1)X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const Ne=Ae+Te,L=$e+Te,T=Ee-Qe,ee=Fe+(ie-Qe),me=ve*$e/L*Ne,Me=ge*$e/L*Ne;X.projectionMatrix.makePerspective(T,ee,me,Me,Ne,L),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function de(X,re){re===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(re.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let re=X.near,fe=X.far;C.texture!==null&&(C.depthNear>0&&(re=C.depthNear),C.depthFar>0&&(fe=C.depthFar)),R.near=H.near=V.near=re,R.far=H.far=V.far=fe,(k!==R.near||J!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),k=R.near,J=R.far),V.layers.mask=X.layers.mask|2,H.layers.mask=X.layers.mask|4,R.layers.mask=V.layers.mask|H.layers.mask;const ie=X.parent,xe=R.cameras;de(R,ie);for(let Le=0;Le<xe.length;Le++)de(xe[Le],ie);xe.length===2?j(R,V,H):R.projectionMatrix.copy(V.projectionMatrix),U(X,R,ie)};function U(X,re,fe){fe===null?X.matrix.copy(re.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(re.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(re.projectionMatrix),X.projectionMatrixInverse.copy(re.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=mf*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&y===null))return f},this.setFoveation=function(X){f=X,x!==null&&(x.fixedFoveation=X),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=X)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let w=null;function W(X,re){if(m=re.getViewerPose(p||u),M=re,m!==null){const fe=m.views;y!==null&&(e.setRenderTargetFramebuffer(O,y.framebuffer),e.setRenderTarget(O));let ie=!1;fe.length!==R.cameras.length&&(R.cameras.length=0,ie=!0);for(let Ae=0;Ae<fe.length;Ae++){const $e=fe[Ae];let ve=null;if(y!==null)ve=y.getViewport($e);else{const D=_.getViewSubImage(x,$e);ve=D.viewport,Ae===0&&(e.setRenderTargetTextures(O,D.colorTexture,x.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(O))}let ge=P[Ae];ge===void 0&&(ge=new Wn,ge.layers.enable(Ae),ge.viewport=new Lt,P[Ae]=ge),ge.matrix.fromArray($e.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray($e.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(ve.x,ve.y,ve.width,ve.height),Ae===0&&(R.matrix.copy(ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ie===!0&&R.cameras.push(ge)}const xe=o.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){const Ae=_.getDepthInformation(fe[0]);Ae&&Ae.isValid&&Ae.texture&&C.init(e,Ae,o.renderState)}}for(let fe=0;fe<F.length;fe++){const ie=A[fe],xe=F[fe];ie!==null&&xe!==void 0&&xe.update(ie,re,p||u)}w&&w(X,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),M=null}const ye=new L0;ye.setAnimationLoop(W),this.setAnimationLoop=function(X){w=X},this.dispose=function(){}}}const Xr=new Mi,I2=new Bt;function U2(s,e){function t(E,S){E.matrixAutoUpdate===!0&&E.updateMatrix(),S.value.copy(E.matrix)}function r(E,S){S.color.getRGB(E.fogColor.value,v0(s)),S.isFog?(E.fogNear.value=S.near,E.fogFar.value=S.far):S.isFogExp2&&(E.fogDensity.value=S.density)}function o(E,S,O,F,A){S.isMeshBasicMaterial||S.isMeshLambertMaterial?l(E,S):S.isMeshToonMaterial?(l(E,S),_(E,S)):S.isMeshPhongMaterial?(l(E,S),m(E,S)):S.isMeshStandardMaterial?(l(E,S),x(E,S),S.isMeshPhysicalMaterial&&y(E,S,A)):S.isMeshMatcapMaterial?(l(E,S),M(E,S)):S.isMeshDepthMaterial?l(E,S):S.isMeshDistanceMaterial?(l(E,S),C(E,S)):S.isMeshNormalMaterial?l(E,S):S.isLineBasicMaterial?(u(E,S),S.isLineDashedMaterial&&d(E,S)):S.isPointsMaterial?f(E,S,O,F):S.isSpriteMaterial?p(E,S):S.isShadowMaterial?(E.color.value.copy(S.color),E.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(E,S){E.opacity.value=S.opacity,S.color&&E.diffuse.value.copy(S.color),S.emissive&&E.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(E.map.value=S.map,t(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,t(S.alphaMap,E.alphaMapTransform)),S.bumpMap&&(E.bumpMap.value=S.bumpMap,t(S.bumpMap,E.bumpMapTransform),E.bumpScale.value=S.bumpScale,S.side===kn&&(E.bumpScale.value*=-1)),S.normalMap&&(E.normalMap.value=S.normalMap,t(S.normalMap,E.normalMapTransform),E.normalScale.value.copy(S.normalScale),S.side===kn&&E.normalScale.value.negate()),S.displacementMap&&(E.displacementMap.value=S.displacementMap,t(S.displacementMap,E.displacementMapTransform),E.displacementScale.value=S.displacementScale,E.displacementBias.value=S.displacementBias),S.emissiveMap&&(E.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,E.emissiveMapTransform)),S.specularMap&&(E.specularMap.value=S.specularMap,t(S.specularMap,E.specularMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest);const O=e.get(S),F=O.envMap,A=O.envMapRotation;F&&(E.envMap.value=F,Xr.copy(A),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),E.envMapRotation.value.setFromMatrix4(I2.makeRotationFromEuler(Xr)),E.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,E.reflectivity.value=S.reflectivity,E.ior.value=S.ior,E.refractionRatio.value=S.refractionRatio),S.lightMap&&(E.lightMap.value=S.lightMap,E.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,E.lightMapTransform)),S.aoMap&&(E.aoMap.value=S.aoMap,E.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,E.aoMapTransform))}function u(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,S.map&&(E.map.value=S.map,t(S.map,E.mapTransform))}function d(E,S){E.dashSize.value=S.dashSize,E.totalSize.value=S.dashSize+S.gapSize,E.scale.value=S.scale}function f(E,S,O,F){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.size.value=S.size*O,E.scale.value=F*.5,S.map&&(E.map.value=S.map,t(S.map,E.uvTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,t(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function p(E,S){E.diffuse.value.copy(S.color),E.opacity.value=S.opacity,E.rotation.value=S.rotation,S.map&&(E.map.value=S.map,t(S.map,E.mapTransform)),S.alphaMap&&(E.alphaMap.value=S.alphaMap,t(S.alphaMap,E.alphaMapTransform)),S.alphaTest>0&&(E.alphaTest.value=S.alphaTest)}function m(E,S){E.specular.value.copy(S.specular),E.shininess.value=Math.max(S.shininess,1e-4)}function _(E,S){S.gradientMap&&(E.gradientMap.value=S.gradientMap)}function x(E,S){E.metalness.value=S.metalness,S.metalnessMap&&(E.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,E.metalnessMapTransform)),E.roughness.value=S.roughness,S.roughnessMap&&(E.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,E.roughnessMapTransform)),S.envMap&&(E.envMapIntensity.value=S.envMapIntensity)}function y(E,S,O){E.ior.value=S.ior,S.sheen>0&&(E.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),E.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(E.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,E.sheenColorMapTransform)),S.sheenRoughnessMap&&(E.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,E.sheenRoughnessMapTransform))),S.clearcoat>0&&(E.clearcoat.value=S.clearcoat,E.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(E.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,E.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(E.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,E.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(E.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,E.clearcoatNormalMapTransform),E.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&E.clearcoatNormalScale.value.negate())),S.dispersion>0&&(E.dispersion.value=S.dispersion),S.iridescence>0&&(E.iridescence.value=S.iridescence,E.iridescenceIOR.value=S.iridescenceIOR,E.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],E.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(E.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,E.iridescenceMapTransform)),S.iridescenceThicknessMap&&(E.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,E.iridescenceThicknessMapTransform))),S.transmission>0&&(E.transmission.value=S.transmission,E.transmissionSamplerMap.value=O.texture,E.transmissionSamplerSize.value.set(O.width,O.height),S.transmissionMap&&(E.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,E.transmissionMapTransform)),E.thickness.value=S.thickness,S.thicknessMap&&(E.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,E.thicknessMapTransform)),E.attenuationDistance.value=S.attenuationDistance,E.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(E.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(E.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,E.anisotropyMapTransform))),E.specularIntensity.value=S.specularIntensity,E.specularColor.value.copy(S.specularColor),S.specularColorMap&&(E.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,E.specularColorMapTransform)),S.specularIntensityMap&&(E.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,E.specularIntensityMapTransform))}function M(E,S){S.matcap&&(E.matcap.value=S.matcap)}function C(E,S){const O=e.get(S).light;E.referencePosition.value.setFromMatrixPosition(O.matrixWorld),E.nearDistance.value=O.shadow.camera.near,E.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function k2(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(O,F){const A=F.program;r.uniformBlockBinding(O,A)}function p(O,F){let A=o[O.id];A===void 0&&(M(O),A=m(O),o[O.id]=A,O.addEventListener("dispose",E));const I=F.program;r.updateUBOMapping(O,I);const B=e.render.frame;l[O.id]!==B&&(x(O),l[O.id]=B)}function m(O){const F=_();O.__bindingPointIndex=F;const A=s.createBuffer(),I=O.__size,B=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,I,B),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,F,A),A}function _(){for(let O=0;O<d;O++)if(u.indexOf(O)===-1)return u.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const F=o[O.id],A=O.uniforms,I=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,F);for(let B=0,V=A.length;B<V;B++){const H=Array.isArray(A[B])?A[B]:[A[B]];for(let P=0,R=H.length;P<R;P++){const k=H[P];if(y(k,B,P,I)===!0){const J=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let oe=0;for(let ue=0;ue<Z.length;ue++){const ae=Z[ue],pe=C(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,J+oe,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,oe),oe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,F,A,I){const B=O.value,V=F+"_"+A;if(I[V]===void 0)return typeof B=="number"||typeof B=="boolean"?I[V]=B:I[V]=B.clone(),!0;{const H=I[V];if(typeof B=="number"||typeof B=="boolean"){if(H!==B)return I[V]=B,!0}else if(H.equals(B)===!1)return H.copy(B),!0}return!1}function M(O){const F=O.uniforms;let A=0;const I=16;for(let V=0,H=F.length;V<H;V++){const P=Array.isArray(F[V])?F[V]:[F[V]];for(let R=0,k=P.length;R<k;R++){const J=P[R],Z=Array.isArray(J.value)?J.value:[J.value];for(let oe=0,ue=Z.length;oe<ue;oe++){const ae=Z[oe],pe=C(ae),j=A%I,de=j%pe.boundary,U=j+de;A+=de,U!==0&&I-U<pe.storage&&(A+=I-U),J.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=A,A+=pe.storage}}}const B=A%I;return B>0&&(A+=I-B),O.__size=A,O.__cache={},this}function C(O){const F={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(F.boundary=4,F.storage=4):O.isVector2?(F.boundary=8,F.storage=8):O.isVector3||O.isColor?(F.boundary=16,F.storage=12):O.isVector4?(F.boundary=16,F.storage=16):O.isMatrix3?(F.boundary=48,F.storage=48):O.isMatrix4?(F.boundary=64,F.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),F}function E(O){const F=O.target;F.removeEventListener("dispose",E);const A=u.indexOf(F.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(o[F.id]),delete o[F.id],delete l[F.id]}function S(){for(const O in o)s.deleteBuffer(o[O]);u=[],o={},l={}}return{bind:f,update:p,dispose:S}}class O2{constructor(e={}){const{canvas:t=zy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=u;const M=new Uint32Array(4),C=new Int32Array(4);let E=null,S=null;const O=[],F=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=wr,this.toneMappingExposure=1;const A=this;let I=!1,B=0,V=0,H=null,P=-1,R=null;const k=new Lt,J=new Lt;let Z=null;const oe=new At(0);let ue=0,ae=t.width,pe=t.height,j=1,de=null,U=null;const w=new Lt(0,0,ae,pe),W=new Lt(0,0,ae,pe);let ye=!1;const X=new Lf;let re=!1,fe=!1;this.transmissionResolutionScale=1;const ie=new Bt,xe=new Bt,Le=new Y,Ae=new Lt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ve=!1;function ge(){return H===null?j:1}let D=r;function Ue(N,K){return t.getContext(N,K)}try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cf}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",ze,!1),D===null){const K="webgl2";if(D=Ue(K,N),D===null)throw Ue(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ee,Fe,Te,Qe,Ne,L,T,ee,me,Me,_e,Ye,Ie,He,ft,Ce,Xe,rt,ct,Ze,_t,ht,Nt,$;function ke(){Ee=new $M(D),Ee.init(),ht=new P2(D,Ee),Fe=new HM(D,Ee,e,ht),Te=new A2(D,Ee),Fe.reverseDepthBuffer&&x&&Te.buffers.depth.setReversed(!0),Qe=new KM(D),Ne=new m2,L=new R2(D,Ee,Te,Ne,Fe,ht,Qe),T=new jM(A),ee=new qM(A),me=new r1(D),Nt=new zM(D,me),Me=new YM(D,me,Qe,Nt),_e=new QM(D,Me,me,Qe),ct=new JM(D,Fe,L),Ce=new GM(Ne),Ye=new p2(A,T,ee,Ee,Fe,Nt,Ce),Ie=new U2(A,Ne),He=new x2,ft=new M2(Ee),rt=new BM(A,T,ee,Te,_e,y,f),Xe=new C2(A,_e,Fe),$=new k2(D,Qe,Fe,Te),Ze=new VM(D,Ee,Qe),_t=new ZM(D,Ee,Qe),Qe.programs=Ye.programs,A.capabilities=Fe,A.extensions=Ee,A.properties=Ne,A.renderLists=He,A.shadowMap=Xe,A.state=Te,A.info=Qe}ke();const he=new F2(A,D);this.xr=he,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const N=Ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(N){N!==void 0&&(j=N,this.setSize(ae,pe,!1))},this.getSize=function(N){return N.set(ae,pe)},this.setSize=function(N,K,le=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=N,pe=K,t.width=Math.floor(N*j),t.height=Math.floor(K*j),le===!0&&(t.style.width=N+"px",t.style.height=K+"px"),this.setViewport(0,0,N,K)},this.getDrawingBufferSize=function(N){return N.set(ae*j,pe*j).floor()},this.setDrawingBufferSize=function(N,K,le){ae=N,pe=K,j=le,t.width=Math.floor(N*le),t.height=Math.floor(K*le),this.setViewport(0,0,N,K)},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(w)},this.setViewport=function(N,K,le,ne){N.isVector4?w.set(N.x,N.y,N.z,N.w):w.set(N,K,le,ne),Te.viewport(k.copy(w).multiplyScalar(j).round())},this.getScissor=function(N){return N.copy(W)},this.setScissor=function(N,K,le,ne){N.isVector4?W.set(N.x,N.y,N.z,N.w):W.set(N,K,le,ne),Te.scissor(J.copy(W).multiplyScalar(j).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(N){Te.setScissorTest(ye=N)},this.setOpaqueSort=function(N){de=N},this.setTransparentSort=function(N){U=N},this.getClearColor=function(N){return N.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(N=!0,K=!0,le=!0){let ne=0;if(N){let Q=!1;if(H!==null){const Pe=H.texture.format;Q=Pe===Df||Pe===Nf||Pe===Pf}if(Q){const Pe=H.texture.type,Oe=Pe===Xi||Pe===es||Pe===Jo||Pe===Ks||Pe===Af||Pe===Rf,je=rt.getClearColor(),Ke=rt.getClearAlpha(),ut=je.r,lt=je.g,et=je.b;Oe?(M[0]=ut,M[1]=lt,M[2]=et,M[3]=Ke,D.clearBufferuiv(D.COLOR,0,M)):(C[0]=ut,C[1]=lt,C[2]=et,C[3]=Ke,D.clearBufferiv(D.COLOR,0,C))}else ne|=D.COLOR_BUFFER_BIT}K&&(ne|=D.DEPTH_BUFFER_BIT),le&&(ne|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),rt.dispose(),He.dispose(),ft.dispose(),Ne.dispose(),T.dispose(),ee.dispose(),_e.dispose(),Nt.dispose(),$.dispose(),Ye.dispose(),he.dispose(),he.removeEventListener("sessionstart",is),he.removeEventListener("sessionend",qi),bi.stop()};function Se(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const N=Qe.autoReset,K=Xe.enabled,le=Xe.autoUpdate,ne=Xe.needsUpdate,Q=Xe.type;ke(),Qe.autoReset=N,Xe.enabled=K,Xe.autoUpdate=le,Xe.needsUpdate=ne,Xe.type=Q}function ze(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function pt(N){const K=N.target;K.removeEventListener("dispose",pt),Ut(K)}function Ut(N){Kt(N),Ne.remove(N)}function Kt(N){const K=Ne.get(N).programs;K!==void 0&&(K.forEach(function(le){Ye.releaseProgram(le)}),N.isShaderMaterial&&Ye.releaseShaderCache(N))}this.renderBufferDirect=function(N,K,le,ne,Q,Pe){K===null&&(K=$e);const Oe=Q.isMesh&&Q.matrixWorld.determinant()<0,je=ca(N,K,le,ne,Q);Te.setMaterial(ne,Oe);let Ke=le.index,ut=1;if(ne.wireframe===!0){if(Ke=Me.getWireframeAttribute(le),Ke===void 0)return;ut=2}const lt=le.drawRange,et=le.attributes.position;let Mt=lt.start*ut,mt=(lt.start+lt.count)*ut;Pe!==null&&(Mt=Math.max(Mt,Pe.start*ut),mt=Math.min(mt,(Pe.start+Pe.count)*ut)),Ke!==null?(Mt=Math.max(Mt,0),mt=Math.min(mt,Ke.count)):et!=null&&(Mt=Math.max(Mt,0),mt=Math.min(mt,et.count));const Wt=mt-Mt;if(Wt<0||Wt===1/0)return;Nt.setup(Q,ne,je,le,Ke);let zt,wt=Ze;if(Ke!==null&&(zt=me.get(Ke),wt=_t,wt.setIndex(zt)),Q.isMesh)ne.wireframe===!0?(Te.setLineWidth(ne.wireframeLinewidth*ge()),wt.setMode(D.LINES)):wt.setMode(D.TRIANGLES);else if(Q.isLine){let it=ne.linewidth;it===void 0&&(it=1),Te.setLineWidth(it*ge()),Q.isLineSegments?wt.setMode(D.LINES):Q.isLineLoop?wt.setMode(D.LINE_LOOP):wt.setMode(D.LINE_STRIP)}else Q.isPoints?wt.setMode(D.POINTS):Q.isSprite&&wt.setMode(D.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)wt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))wt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const it=Q._multiDrawStarts,Xt=Q._multiDrawCounts,Et=Q._multiDrawCount,hn=Ke?me.get(Ke).bytesPerElement:1,Yi=Ne.get(ne).currentProgram.getUniforms();for(let En=0;En<Et;En++)Yi.setValue(D,"_gl_DrawID",En),wt.render(it[En]/hn,Xt[En])}else if(Q.isInstancedMesh)wt.renderInstances(Mt,Wt,Q.count);else if(le.isInstancedBufferGeometry){const it=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Xt=Math.min(le.instanceCount,it);wt.renderInstances(Mt,Wt,Xt)}else wt.render(Mt,Wt)};function bt(N,K,le){N.transparent===!0&&N.side===Hi&&N.forceSinglePass===!1?(N.side=kn,N.needsUpdate=!0,rs(N,K,le),N.side=br,N.needsUpdate=!0,rs(N,K,le),N.side=Hi):rs(N,K,le)}this.compile=function(N,K,le=null){le===null&&(le=N),S=ft.get(le),S.init(K),F.push(S),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),N!==le&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights();const ne=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Pe=Q.material;if(Pe)if(Array.isArray(Pe))for(let Oe=0;Oe<Pe.length;Oe++){const je=Pe[Oe];bt(je,le,Q),ne.add(je)}else bt(Pe,le,Q),ne.add(Pe)}),F.pop(),S=null,ne},this.compileAsync=function(N,K,le=null){const ne=this.compile(N,K,le);return new Promise(Q=>{function Pe(){if(ne.forEach(function(Oe){Ne.get(Oe).currentProgram.isReady()&&ne.delete(Oe)}),ne.size===0){Q(N);return}setTimeout(Pe,10)}Ee.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let An=null;function Sn(N){An&&An(N)}function is(){bi.stop()}function qi(){bi.start()}const bi=new L0;bi.setAnimationLoop(Sn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(N){An=N,he.setAnimationLoop(N),N===null?bi.stop():bi.start()},he.addEventListener("sessionstart",is),he.addEventListener("sessionend",qi),this.render=function(N,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(K),K=he.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,K,H),S=ft.get(N,F.length),S.init(K),F.push(S),xe.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X.setFromProjectionMatrix(xe),fe=this.localClippingEnabled,re=Ce.init(this.clippingPlanes,fe),E=He.get(N,O.length),E.init(),O.push(E),he.enabled===!0&&he.isPresenting===!0){const Pe=A.xr.getDepthSensingMesh();Pe!==null&&Ci(Pe,K,-1/0,A.sortObjects)}Ci(N,K,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(de,U),ve=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ve&&rt.addToRenderList(E,N),this.info.render.frame++,re===!0&&Ce.beginShadows();const le=S.state.shadowsArray;Xe.render(le,N,K),re===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=E.opaque,Q=E.transmissive;if(S.setupLights(),K.isArrayCamera){const Pe=K.cameras;if(Q.length>0)for(let Oe=0,je=Pe.length;Oe<je;Oe++){const Ke=Pe[Oe];Ar(ne,Q,N,Ke)}ve&&rt.render(N);for(let Oe=0,je=Pe.length;Oe<je;Oe++){const Ke=Pe[Oe];Tr(E,N,Ke,Ke.viewport)}}else Q.length>0&&Ar(ne,Q,N,K),ve&&rt.render(N),Tr(E,N,K);H!==null&&V===0&&(L.updateMultisampleRenderTarget(H),L.updateRenderTargetMipmap(H)),N.isScene===!0&&N.onAfterRender(A,N,K),Nt.resetDefaultState(),P=-1,R=null,F.pop(),F.length>0?(S=F[F.length-1],re===!0&&Ce.setGlobalState(A.clippingPlanes,S.state.camera)):S=null,O.pop(),O.length>0?E=O[O.length-1]:E=null};function Ci(N,K,le,ne){if(N.visible===!1)return;if(N.layers.test(K.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(K);else if(N.isLight)S.pushLight(N),N.castShadow&&S.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||X.intersectsSprite(N)){ne&&Ae.setFromMatrixPosition(N.matrixWorld).applyMatrix4(xe);const Oe=_e.update(N),je=N.material;je.visible&&E.push(N,Oe,je,le,Ae.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||X.intersectsObject(N))){const Oe=_e.update(N),je=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ae.copy(N.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ae.copy(Oe.boundingSphere.center)),Ae.applyMatrix4(N.matrixWorld).applyMatrix4(xe)),Array.isArray(je)){const Ke=Oe.groups;for(let ut=0,lt=Ke.length;ut<lt;ut++){const et=Ke[ut],Mt=je[et.materialIndex];Mt&&Mt.visible&&E.push(N,Oe,Mt,le,Ae.z,et)}}else je.visible&&E.push(N,Oe,je,le,Ae.z,null)}}const Pe=N.children;for(let Oe=0,je=Pe.length;Oe<je;Oe++)Ci(Pe[Oe],K,le,ne)}function Tr(N,K,le,ne){const Q=N.opaque,Pe=N.transmissive,Oe=N.transparent;S.setupLightsView(le),re===!0&&Ce.setGlobalState(A.clippingPlanes,le),ne&&Te.viewport(k.copy(ne)),Q.length>0&&$i(Q,K,le),Pe.length>0&&$i(Pe,K,le),Oe.length>0&&$i(Oe,K,le),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ar(N,K,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[ne.id]===void 0&&(S.state.transmissionRenderTarget[ne.id]=new ts(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?ia:Xi,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Pe=S.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||k;Pe.setSize(Oe.z*A.transmissionResolutionScale,Oe.w*A.transmissionResolutionScale);const je=A.getRenderTarget();A.setRenderTarget(Pe),A.getClearColor(oe),ue=A.getClearAlpha(),ue<1&&A.setClearColor(16777215,.5),A.clear(),ve&&rt.render(le);const Ke=A.toneMapping;A.toneMapping=wr;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),S.setupLightsView(ne),re===!0&&Ce.setGlobalState(A.clippingPlanes,ne),$i(N,le,ne),L.updateMultisampleRenderTarget(Pe),L.updateRenderTargetMipmap(Pe),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let et=0,Mt=K.length;et<Mt;et++){const mt=K[et],Wt=mt.object,zt=mt.geometry,wt=mt.material,it=mt.group;if(wt.side===Hi&&Wt.layers.test(ne.layers)){const Xt=wt.side;wt.side=kn,wt.needsUpdate=!0,aa(Wt,le,ne,zt,wt,it),wt.side=Xt,wt.needsUpdate=!0,lt=!0}}lt===!0&&(L.updateMultisampleRenderTarget(Pe),L.updateRenderTargetMipmap(Pe))}A.setRenderTarget(je),A.setClearColor(oe,ue),ut!==void 0&&(ne.viewport=ut),A.toneMapping=Ke}function $i(N,K,le){const ne=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Pe=N.length;Q<Pe;Q++){const Oe=N[Q],je=Oe.object,Ke=Oe.geometry,ut=ne===null?Oe.material:ne,lt=Oe.group;je.layers.test(le.layers)&&aa(je,K,le,Ke,ut,lt)}}function aa(N,K,le,ne,Q,Pe){N.onBeforeRender(A,K,le,ne,Q,Pe),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(A,K,le,ne,N,Pe),Q.transparent===!0&&Q.side===Hi&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,A.renderBufferDirect(le,K,ne,Q,N,Pe),Q.side=br,Q.needsUpdate=!0,A.renderBufferDirect(le,K,ne,Q,N,Pe),Q.side=Hi):A.renderBufferDirect(le,K,ne,Q,N,Pe),N.onAfterRender(A,K,le,ne,Q,Pe)}function rs(N,K,le){K.isScene!==!0&&(K=$e);const ne=Ne.get(N),Q=S.state.lights,Pe=S.state.shadowsArray,Oe=Q.state.version,je=Ye.getParameters(N,Q.state,Pe,K,le),Ke=Ye.getProgramCacheKey(je);let ut=ne.programs;ne.environment=N.isMeshStandardMaterial?K.environment:null,ne.fog=K.fog,ne.envMap=(N.isMeshStandardMaterial?ee:T).get(N.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&N.envMap===null?K.environmentRotation:N.envMapRotation,ut===void 0&&(N.addEventListener("dispose",pt),ut=new Map,ne.programs=ut);let lt=ut.get(Ke);if(lt!==void 0){if(ne.currentProgram===lt&&ne.lightsStateVersion===Oe)return mi(N,je),lt}else je.uniforms=Ye.getUniforms(N),N.onBeforeCompile(je,A),lt=Ye.acquireProgram(je,Ke),ut.set(Ke,lt),ne.uniforms=je.uniforms;const et=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(et.clippingPlanes=Ce.uniform),mi(N,je),ne.needsLights=oc(N),ne.lightsStateVersion=Oe,ne.needsLights&&(et.ambientLightColor.value=Q.state.ambient,et.lightProbe.value=Q.state.probe,et.directionalLights.value=Q.state.directional,et.directionalLightShadows.value=Q.state.directionalShadow,et.spotLights.value=Q.state.spot,et.spotLightShadows.value=Q.state.spotShadow,et.rectAreaLights.value=Q.state.rectArea,et.ltc_1.value=Q.state.rectAreaLTC1,et.ltc_2.value=Q.state.rectAreaLTC2,et.pointLights.value=Q.state.point,et.pointLightShadows.value=Q.state.pointShadow,et.hemisphereLights.value=Q.state.hemi,et.directionalShadowMap.value=Q.state.directionalShadowMap,et.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,et.spotShadowMap.value=Q.state.spotShadowMap,et.spotLightMatrix.value=Q.state.spotLightMatrix,et.spotLightMap.value=Q.state.spotLightMap,et.pointShadowMap.value=Q.state.pointShadowMap,et.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=lt,ne.uniformsList=null,lt}function la(N){if(N.uniformsList===null){const K=N.currentProgram.getUniforms();N.uniformsList=Xl.seqWithValue(K.seq,N.uniforms)}return N.uniformsList}function mi(N,K){const le=Ne.get(N);le.outputColorSpace=K.outputColorSpace,le.batching=K.batching,le.batchingColor=K.batchingColor,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.instancingMorph=K.instancingMorph,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function ca(N,K,le,ne,Q){K.isScene!==!0&&(K=$e),L.resetTextureUnits();const Pe=K.fog,Oe=ne.isMeshStandardMaterial?K.environment:null,je=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Qs,Ke=(ne.isMeshStandardMaterial?ee:T).get(ne.envMap||Oe),ut=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,lt=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),et=!!le.morphAttributes.position,Mt=!!le.morphAttributes.normal,mt=!!le.morphAttributes.color;let Wt=wr;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Wt=A.toneMapping);const zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,wt=zt!==void 0?zt.length:0,it=Ne.get(ne),Xt=S.state.lights;if(re===!0&&(fe===!0||N!==R)){const cn=N===R&&ne.id===P;Ce.setState(ne,N,cn)}let Et=!1;ne.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Xt.state.version||it.outputColorSpace!==je||Q.isBatchedMesh&&it.batching===!1||!Q.isBatchedMesh&&it.batching===!0||Q.isBatchedMesh&&it.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&it.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&it.instancing===!1||!Q.isInstancedMesh&&it.instancing===!0||Q.isSkinnedMesh&&it.skinning===!1||!Q.isSkinnedMesh&&it.skinning===!0||Q.isInstancedMesh&&it.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&it.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&it.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&it.instancingMorph===!1&&Q.morphTexture!==null||it.envMap!==Ke||ne.fog===!0&&it.fog!==Pe||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==Ce.numPlanes||it.numIntersection!==Ce.numIntersection)||it.vertexAlphas!==ut||it.vertexTangents!==lt||it.morphTargets!==et||it.morphNormals!==Mt||it.morphColors!==mt||it.toneMapping!==Wt||it.morphTargetsCount!==wt)&&(Et=!0):(Et=!0,it.__version=ne.version);let hn=it.currentProgram;Et===!0&&(hn=rs(ne,K,Q));let Yi=!1,En=!1,Ti=!1;const Ft=hn.getUniforms(),pn=it.uniforms;if(Te.useProgram(hn.program)&&(Yi=!0,En=!0,Ti=!0),ne.id!==P&&(P=ne.id,En=!0),Yi||R!==N){Te.buffers.depth.getReversed()?(ie.copy(N.projectionMatrix),Hy(ie),Gy(ie),Ft.setValue(D,"projectionMatrix",ie)):Ft.setValue(D,"projectionMatrix",N.projectionMatrix),Ft.setValue(D,"viewMatrix",N.matrixWorldInverse);const rn=Ft.map.cameraPosition;rn!==void 0&&rn.setValue(D,Le.setFromMatrixPosition(N.matrixWorld)),Fe.logarithmicDepthBuffer&&Ft.setValue(D,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(D,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,En=!0,Ti=!0)}if(Q.isSkinnedMesh){Ft.setOptional(D,Q,"bindMatrix"),Ft.setOptional(D,Q,"bindMatrixInverse");const cn=Q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ft.setValue(D,"boneTexture",cn.boneTexture,L))}Q.isBatchedMesh&&(Ft.setOptional(D,Q,"batchingTexture"),Ft.setValue(D,"batchingTexture",Q._matricesTexture,L),Ft.setOptional(D,Q,"batchingIdTexture"),Ft.setValue(D,"batchingIdTexture",Q._indirectTexture,L),Ft.setOptional(D,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(D,"batchingColorTexture",Q._colorsTexture,L));const nn=le.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ct.update(Q,le,hn),(En||it.receiveShadow!==Q.receiveShadow)&&(it.receiveShadow=Q.receiveShadow,Ft.setValue(D,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(pn.envMap.value=Ke,pn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&K.environment!==null&&(pn.envMapIntensity.value=K.environmentIntensity),En&&(Ft.setValue(D,"toneMappingExposure",A.toneMappingExposure),it.needsLights&&ua(pn,Ti),Pe&&ne.fog===!0&&Ie.refreshFogUniforms(pn,Pe),Ie.refreshMaterialUniforms(pn,ne,j,pe,S.state.transmissionRenderTarget[N.id]),Xl.upload(D,la(it),pn,L)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Xl.upload(D,la(it),pn,L),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(D,"center",Q.center),Ft.setValue(D,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(D,"normalMatrix",Q.normalMatrix),Ft.setValue(D,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const cn=ne.uniformsGroups;for(let rn=0,Ct=cn.length;rn<Ct;rn++){const gi=cn[rn];$.update(gi,hn),$.bind(gi,hn)}}return hn}function ua(N,K){N.ambientLightColor.needsUpdate=K,N.lightProbe.needsUpdate=K,N.directionalLights.needsUpdate=K,N.directionalLightShadows.needsUpdate=K,N.pointLights.needsUpdate=K,N.pointLightShadows.needsUpdate=K,N.spotLights.needsUpdate=K,N.spotLightShadows.needsUpdate=K,N.rectAreaLights.needsUpdate=K,N.hemisphereLights.needsUpdate=K}function oc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(N,K,le){Ne.get(N.texture).__webglTexture=K,Ne.get(N.depthTexture).__webglTexture=le;const ne=Ne.get(N);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=le===void 0,ne.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,K){const le=Ne.get(N);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0};const da=D.createFramebuffer();this.setRenderTarget=function(N,K=0,le=0){H=N,B=K,V=le;let ne=!0,Q=null,Pe=!1,Oe=!1;if(N){const Ke=Ne.get(N);if(Ke.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),ne=!1;else if(Ke.__webglFramebuffer===void 0)L.setupRenderTarget(N);else if(Ke.__hasExternalTextures)L.rebindTextures(N,Ne.get(N.texture).__webglTexture,Ne.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const et=N.depthTexture;if(Ke.__boundDepthTexture!==et){if(et!==null&&Ne.has(et)&&(N.width!==et.image.width||N.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(N)}}const ut=N.texture;(ut.isData3DTexture||ut.isDataArrayTexture||ut.isCompressedArrayTexture)&&(Oe=!0);const lt=Ne.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?Q=lt[K][le]:Q=lt[K],Pe=!0):N.samples>0&&L.useMultisampledRTT(N)===!1?Q=Ne.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?Q=lt[le]:Q=lt,k.copy(N.viewport),J.copy(N.scissor),Z=N.scissorTest}else k.copy(w).multiplyScalar(j).floor(),J.copy(W).multiplyScalar(j).floor(),Z=ye;if(le!==0&&(Q=da),Te.bindFramebuffer(D.FRAMEBUFFER,Q)&&ne&&Te.drawBuffers(N,Q),Te.viewport(k),Te.scissor(J),Te.setScissorTest(Z),Pe){const Ke=Ne.get(N.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ke.__webglTexture,le)}else if(Oe){const Ke=Ne.get(N.texture),ut=K;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,le,ut)}else if(N!==null&&le!==0){const Ke=Ne.get(N.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,le)}P=-1},this.readRenderTargetPixels=function(N,K,le,ne,Q,Pe,Oe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ne.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(je=je[Oe]),je){Te.bindFramebuffer(D.FRAMEBUFFER,je);try{const Ke=N.texture,ut=Ke.format,lt=Ke.type;if(!Fe.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=N.width-ne&&le>=0&&le<=N.height-Q&&D.readPixels(K,le,ne,Q,ht.convert(ut),ht.convert(lt),Pe)}finally{const Ke=H!==null?Ne.get(H).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(N,K,le,ne,Q,Pe,Oe){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ne.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Oe!==void 0&&(je=je[Oe]),je){const Ke=N.texture,ut=Ke.format,lt=Ke.type;if(!Fe.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=N.width-ne&&le>=0&&le<=N.height-Q){Te.bindFramebuffer(D.FRAMEBUFFER,je);const et=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.bufferData(D.PIXEL_PACK_BUFFER,Pe.byteLength,D.STREAM_READ),D.readPixels(K,le,ne,Q,ht.convert(ut),ht.convert(lt),0);const Mt=H!==null?Ne.get(H).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,Mt);const mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Vy(D,mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,et),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Pe),D.deleteBuffer(et),D.deleteSync(mt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,K=null,le=0){N.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,N=arguments[1]);const ne=Math.pow(2,-le),Q=Math.floor(N.image.width*ne),Pe=Math.floor(N.image.height*ne),Oe=K!==null?K.x:0,je=K!==null?K.y:0;L.setTexture2D(N,0),D.copyTexSubImage2D(D.TEXTURE_2D,le,0,0,Oe,je,Q,Pe),Te.unbindTexture()};const fa=D.createFramebuffer(),ha=D.createFramebuffer();this.copyTextureToTexture=function(N,K,le=null,ne=null,Q=0,Pe=null){N.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,N=arguments[1],K=arguments[2],Pe=arguments[3]||0,le=null),Pe===null&&(Q!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pe=Q,Q=0):Pe=0);let Oe,je,Ke,ut,lt,et,Mt,mt,Wt;const zt=N.isCompressedTexture?N.mipmaps[Pe]:N.image;if(le!==null)Oe=le.max.x-le.min.x,je=le.max.y-le.min.y,Ke=le.isBox3?le.max.z-le.min.z:1,ut=le.min.x,lt=le.min.y,et=le.isBox3?le.min.z:0;else{const nn=Math.pow(2,-Q);Oe=Math.floor(zt.width*nn),je=Math.floor(zt.height*nn),N.isDataArrayTexture?Ke=zt.depth:N.isData3DTexture?Ke=Math.floor(zt.depth*nn):Ke=1,ut=0,lt=0,et=0}ne!==null?(Mt=ne.x,mt=ne.y,Wt=ne.z):(Mt=0,mt=0,Wt=0);const wt=ht.convert(K.format),it=ht.convert(K.type);let Xt;K.isData3DTexture?(L.setTexture3D(K,0),Xt=D.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(L.setTexture2DArray(K,0),Xt=D.TEXTURE_2D_ARRAY):(L.setTexture2D(K,0),Xt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,K.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yi=D.getParameter(D.UNPACK_SKIP_PIXELS),En=D.getParameter(D.UNPACK_SKIP_ROWS),Ti=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,zt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,zt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,et);const Ft=N.isDataArrayTexture||N.isData3DTexture,pn=K.isDataArrayTexture||K.isData3DTexture;if(N.isDepthTexture){const nn=Ne.get(N),cn=Ne.get(K),rn=Ne.get(nn.__renderTarget),Ct=Ne.get(cn.__renderTarget);Te.bindFramebuffer(D.READ_FRAMEBUFFER,rn.__webglFramebuffer),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let gi=0;gi<Ke;gi++)Ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(N).__webglTexture,Q,et+gi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(K).__webglTexture,Pe,Wt+gi)),D.blitFramebuffer(ut,lt,Oe,je,Mt,mt,Oe,je,D.DEPTH_BUFFER_BIT,D.NEAREST);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Q!==0||N.isRenderTargetTexture||Ne.has(N)){const nn=Ne.get(N),cn=Ne.get(K);Te.bindFramebuffer(D.READ_FRAMEBUFFER,fa),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,ha);for(let rn=0;rn<Ke;rn++)Ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,nn.__webglTexture,Q,et+rn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,nn.__webglTexture,Q),pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cn.__webglTexture,Pe,Wt+rn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cn.__webglTexture,Pe),Q!==0?D.blitFramebuffer(ut,lt,Oe,je,Mt,mt,Oe,je,D.COLOR_BUFFER_BIT,D.NEAREST):pn?D.copyTexSubImage3D(Xt,Pe,Mt,mt,Wt+rn,ut,lt,Oe,je):D.copyTexSubImage2D(Xt,Pe,Mt,mt,ut,lt,Oe,je);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pn?N.isDataTexture||N.isData3DTexture?D.texSubImage3D(Xt,Pe,Mt,mt,Wt,Oe,je,Ke,wt,it,zt.data):K.isCompressedArrayTexture?D.compressedTexSubImage3D(Xt,Pe,Mt,mt,Wt,Oe,je,Ke,wt,zt.data):D.texSubImage3D(Xt,Pe,Mt,mt,Wt,Oe,je,Ke,wt,it,zt):N.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Pe,Mt,mt,Oe,je,wt,it,zt.data):N.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Pe,Mt,mt,zt.width,zt.height,wt,zt.data):D.texSubImage2D(D.TEXTURE_2D,Pe,Mt,mt,Oe,je,wt,it,zt);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,En),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ti),Pe===0&&K.generateMipmaps&&D.generateMipmap(Xt),Te.unbindTexture()},this.copyTextureToTexture3D=function(N,K,le=null,ne=null,Q=0){return N.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,ne=arguments[1]||null,N=arguments[2],K=arguments[3],Q=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,K,le,ne,Q)},this.initRenderTarget=function(N){Ne.get(N).__webglFramebuffer===void 0&&L.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?L.setTextureCube(N,0):N.isData3DTexture?L.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?L.setTexture2DArray(N,0):L.setTexture2D(N,0),Te.unbindTexture()},this.resetState=function(){B=0,V=0,H=null,Te.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}function B2(){try{const s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl")||s.getContext("experimental-webgl")))}catch{return!1}}const z2=({tierColor:s="#F59E0B",tierName:e="Standard Tier",points:t=38})=>{const r=at.useRef(null),[o,l]=at.useState(!1),[u,d]=at.useState(!0),f=at.useRef(null);at.useEffect(()=>{if(!B2()){d(!1);return}const _=r.current;if(!_)return;let x,y,M,C;const E=[],S=[];try{const O=_.clientWidth||300,F=_.clientHeight||300;x=new pS,y=new Wn(45,O/F,.1,1e3),y.position.z=4.2,M=new O2({antialias:!0,alpha:!0,powerPreference:"default"}),M.setSize(O,F),M.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),M.shadowMap.enabled=!0,_.appendChild(M.domElement);const A=L=>{L.preventDefault(),cancelAnimationFrame(C)};M.domElement.addEventListener("webglcontextlost",A,!1);const I=new Wo;f.current=I,x.add(I);const B=new Uf(1.4,1.4,.22,64);E.push(B);const V=new At(s),H=new gd({color:V,metalness:.85,roughness:.25,bumpScale:.05});S.push(H);const P=new gd({color:V.clone().offsetHSL(0,.1,-.05),metalness:.95,roughness:.2});S.push(P);const R=new Un(B,H);R.rotation.x=Math.PI/2,I.add(R);const k=new ec(1.42,.06,16,64);E.push(k);const J=new Un(k,P);I.add(J);const Z=new ec(1.15,.03,16,48);E.push(Z);const oe=new Un(Z,P);I.add(oe);const ue=new T0,ae=5,pe=.55,j=.25;for(let L=0;L<ae*2;L++){const T=L%2===0?pe:j,ee=L*Math.PI/ae-Math.PI/2,me=Math.cos(ee)*T,Me=Math.sin(ee)*T;L===0?ue.moveTo(me,Me):ue.lineTo(me,Me)}ue.closePath();const de={depth:.08,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.02,bevelThickness:.02},U=new kf(ue,de);E.push(U);const w=new gd({color:16776171,metalness:.7,roughness:.3});S.push(w);const W=new Un(U,w);W.position.z=.11,I.add(W);const ye=new Un(U,w);ye.position.z=-.19,ye.rotation.y=Math.PI,I.add(ye);const X=35,re=new Float32Array(X*3);for(let L=0;L<X*3;L+=3)re[L]=(Math.random()-.5)*5,re[L+1]=(Math.random()-.5)*4,re[L+2]=(Math.random()-.5)*3;const fe=new ti;fe.setAttribute("position",new pi(re,3)),E.push(fe);const ie=new S0({size:.06,color:16639626,transparent:!0,opacity:.8});S.push(ie);const xe=new xS(fe,ie);x.add(xe);const Le=new t1(16776171,1.2);x.add(Le);const Ae=new ig(16777215,2.5);Ae.position.set(4,5,5),x.add(Ae);const $e=new ig(16096779,1.5);$e.position.set(-4,-3,-2),x.add($e);const ve=new QS(V,3,8);ve.position.set(0,0,3),x.add(ve);let ge=0,D=0,Ue=0,Ee=0;const Fe=L=>{if(!_)return;const T=_.getBoundingClientRect();T.width===0||T.height===0||(Ue=(L.clientX-T.left)/T.width*2-1,Ee=-((L.clientY-T.top)/T.height*2-1),D=Ue*.7,ge=Ee*.4)};_.addEventListener("mousemove",Fe);const Te=.015,Qe=()=>{C=requestAnimationFrame(Qe),I.rotation.y+=Te+D*.02,I.rotation.x+=(ge-I.rotation.x)*.05,I.rotation.z=Math.sin(Date.now()*.002)*.05,I.position.y=Math.sin(Date.now()*.003)*.12,xe.rotation.y+=.002,M.render(x,y)};Qe();const Ne=new ResizeObserver(L=>{for(const T of L){const ee=T.contentRect.width,me=T.contentRect.height;ee>0&&me>0&&y&&M&&(y.aspect=ee/me,y.updateProjectionMatrix(),M.setSize(ee,me))}});return Ne.observe(_),()=>{Ne.disconnect(),_.removeEventListener("mousemove",Fe),cancelAnimationFrame(C),E.forEach(L=>L.dispose()),S.forEach(L=>L.dispose()),M.dispose(),_.contains(M.domElement)&&_.removeChild(M.domElement)}}catch(O){console.warn("WebGL init error, falling back to 2.5D token:",O),d(!1)}},[s]);const p=()=>{if(!o)if(l(!0),Qr({particleCount:50,spread:60,origin:{y:.6},colors:["#F59E0B","#EA580C","#10B981","#FBBF24"]}),f.current){const m=f.current.rotation.y,_=m+Math.PI*4,x=performance.now(),y=1e3,M=C=>{const E=C-x,S=Math.min(1,E/y),O=1-Math.pow(1-S,3);f.current&&(f.current.rotation.y=m+(_-m)*O),S<1?requestAnimationFrame(M):l(!1)};requestAnimationFrame(M)}else setTimeout(()=>l(!1),800)};return v.jsxs("div",{className:"relative flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EE] rounded-3xl border border-[#EADBCE] shadow-soft",children:[u?v.jsx("div",{ref:r,onClick:p,className:"w-64 h-64 sm:w-72 sm:h-72 cursor-pointer transition-transform active:scale-95 relative group",title:"Click to spin the 3D Arcade Medallion!",children:v.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity",children:v.jsx("span",{className:"bg-stone-900/80 text-stone-50 text-xs px-3 py-1 rounded-full font-mono shadow-md backdrop-blur-sm -translate-y-24",children:"Click to Flip"})})}):v.jsx("div",{onClick:p,className:"w-64 h-64 flex items-center justify-center cursor-pointer relative group",title:"Click to flip medallion",children:v.jsx("div",{className:`w-44 h-44 rounded-full border-4 border-[#B45309] shadow-arcade-amber flex items-center justify-center transition-all ${o?"animate-spin scale-105":"hover:scale-105"}`,style:{background:`radial-gradient(circle at 35% 35%, #FFFDF9, ${s})`},children:v.jsxs("div",{className:"w-36 h-36 rounded-full border-2 border-dashed border-[#FFFBEB] flex flex-col items-center justify-center shadow-inner",children:[v.jsx(P_,{className:"w-12 h-12 text-[#FFFBEB] fill-[#FFFBEB] drop-shadow-md animate-pulse"}),v.jsx("span",{className:"font-pixel text-[10px] text-[#78350F] font-bold mt-1",children:"ARCADE"})]})})}),v.jsxs("div",{className:"flex items-center gap-2 mt-2 px-4 py-1.5 rounded-full bg-white border border-[#EADBCE] shadow-sm",children:[v.jsx(Zl,{className:"w-4 h-4 text-arcade-amber animate-spin",style:{animationDuration:"6s"}}),v.jsxs("span",{className:"text-xs font-semibold text-stone-700 tracking-wide font-sans",children:[e," Medallion"]}),v.jsxs("span",{className:"text-xs font-mono font-bold text-arcade-amber px-2 py-0.5 rounded-full bg-[#FEF3C7]",children:[t," pts"]}),v.jsx("button",{onClick:p,disabled:o,className:"p-1 hover:bg-[#F4ECE1] rounded-full transition text-stone-500 hover:text-stone-800",title:"Flip Coin",children:v.jsx(Mf,{className:`w-3.5 h-3.5 ${o?"animate-spin":""}`})})]})]})},V2=({breakdown:s,currentProfile:e,onOpenBadgesTab:t,onOpenSwagTab:r})=>{const{currentTier:o,nextTier:l,totalPoints:u,pointsToNextTier:d,progressToNextTierPercent:f}=s;return v.jsx("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-soft mb-8",children:v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[v.jsxs("div",{className:"lg:col-span-7 flex flex-col justify-between",children:[v.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-3",children:[v.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono border",style:{backgroundColor:o.bgColor,color:o.color,borderColor:o.borderColor},children:[v.jsx(B_,{className:"w-3.5 h-3.5"}),o.name," (",o.badgeLevel,")"]}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:["Profile: ",v.jsx("span",{className:"font-semibold text-stone-800",children:e.name})]})]}),v.jsxs("div",{className:"my-2",children:[v.jsxs("div",{className:"flex items-baseline gap-3",children:[v.jsx("span",{className:"font-pixel text-4xl sm:text-5xl lg:text-6xl text-[#B45309] tracking-tight drop-shadow-sm",children:u}),v.jsx("span",{className:"font-pixel text-lg sm:text-2xl text-stone-700",children:"POINTS"})]}),v.jsx("p",{className:"font-serif italic text-stone-600 text-sm sm:text-base mt-1",children:"Google Cloud Arcade 2026 Verified Score"})]}),v.jsxs("div",{className:"my-5 p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[v.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold mb-2",children:[v.jsxs("span",{className:"text-stone-700 flex items-center gap-1",children:[v.jsx(Gg,{className:"w-4 h-4 text-arcade-coral"}),l?v.jsxs(v.Fragment,{children:["Next Goal: ",v.jsx("strong",{className:"text-stone-900",children:l.name})," (",l.minPoints," pts)"]}):v.jsx("span",{className:"text-arcade-emerald font-bold",children:"Max Tier Achieved: Grandmaster Legend!"})]}),v.jsx("span",{className:"font-mono text-stone-500",children:l?`${d} pts remaining`:"Top 1% Swag Unlocked"})]}),v.jsx("div",{className:"w-full bg-[#EADBCE] rounded-full h-3.5 overflow-hidden p-0.5",children:v.jsx("div",{className:"h-full rounded-full transition-all duration-700 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#10B981]",style:{width:`${f}%`}})}),v.jsxs("div",{className:"flex justify-between items-center mt-2 text-[11px] font-mono text-stone-500",children:[v.jsxs("span",{children:[o.name," (",o.minPoints," pts)"]}),v.jsxs("span",{className:"font-bold text-[#B45309]",children:[f,"% reached"]}),l&&v.jsxs("span",{children:[l.name," (",l.minPoints," pts)"]})]})]}),v.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1",children:[v.jsxs("div",{onClick:t,className:"p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition group",children:[v.jsxs("div",{className:"flex items-center justify-between mb-1",children:[v.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Games"}),v.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"1 pt ea"})]}),v.jsxs("div",{className:"flex items-baseline justify-between",children:[v.jsxs("span",{className:"font-pixel text-sm text-[#B45309]",children:["+",s.gamePoints]}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:[s.gameCount," badges"]})]})]}),v.jsxs("div",{onClick:t,className:"p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition group",children:[v.jsxs("div",{className:"flex items-center justify-between mb-1",children:[v.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Trivia"}),v.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"1 pt ea"})]}),v.jsxs("div",{className:"flex items-baseline justify-between",children:[v.jsxs("span",{className:"font-pixel text-sm text-[#B45309]",children:["+",s.triviaPoints]}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:[s.triviaCount," badges"]})]})]}),v.jsxs("div",{onClick:t,className:"p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition group",children:[v.jsxs("div",{className:"flex items-center justify-between mb-1",children:[v.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Skill Badges"}),v.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"1/2 ratio"})]}),v.jsxs("div",{className:"flex items-baseline justify-between",children:[v.jsxs("span",{className:"font-pixel text-sm text-[#059669]",children:["+",s.skillPoints]}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:[s.skillCount," badges"]})]})]}),v.jsxs("div",{onClick:r,className:"p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] cursor-pointer transition group",children:[v.jsxs("div",{className:"flex items-center justify-between mb-1",children:[v.jsx("span",{className:"text-[11px] font-bold text-stone-500 font-sans group-hover:text-stone-800",children:"Milestones"}),v.jsx("span",{className:"text-[10px] font-mono px-1.5 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:"Bonus"})]}),v.jsxs("div",{className:"flex items-baseline justify-between",children:[v.jsxs("span",{className:"font-pixel text-sm text-[#7E22CE]",children:["+",s.milestonePoints+s.specialPoints]}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:[s.milestoneCount+s.specialCount," bonus"]})]})]})]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-[#EADBCE]",children:[v.jsxs("button",{onClick:t,className:"text-xs font-semibold text-[#B45309] hover:underline flex items-center gap-1",children:["Inspect all ",s.totalBadges," badges ",v.jsx(ym,{className:"w-3.5 h-3.5"})]}),v.jsx("span",{className:"text-stone-300",children:"•"}),v.jsxs("button",{onClick:r,className:"text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1",children:["View unlocked swag rewards ",v.jsx(ym,{className:"w-3.5 h-3.5"})]})]})]}),v.jsx("div",{className:"lg:col-span-5 flex flex-col items-center justify-center",children:v.jsx(z2,{tierColor:o.color,tierName:o.name,points:u})})]})})},Rg=({frequency:s,breakdown:e,badges:t})=>{const[r,o]=at.useState(s.weeklyBreakdown.length>0?s.weeklyBreakdown.length-1:null),l=r!==null?s.weeklyBreakdown[r]:null;return v.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1",children:[v.jsx(Bv,{className:"w-3.5 h-3.5"}),"Badge Earning Velocity"]}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:[s.totalDaysSpanned," days tracked"]})]}),v.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Badge Frequency & Pace Analytics"}),v.jsx("p",{className:"text-stone-600 text-sm mt-1",children:"Calculates how frequently you acquire Google Cloud badges and projects when you will reach subsequent swag tiers."})]}),s.estimatedCompletionDate&&e.nextTier&&v.jsxs("div",{className:"bg-[#FAF7F2] p-3 rounded-2xl border border-[#EADBCE] flex items-center gap-3",children:[v.jsx("div",{className:"w-9 h-9 rounded-xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center font-bold",children:v.jsx(Sm,{className:"w-5 h-5"})}),v.jsxs("div",{children:[v.jsx("p",{className:"text-[11px] font-mono text-stone-500 uppercase",children:"Projected Tier Reach"}),v.jsxs("p",{className:"text-xs font-bold font-sans text-stone-800",children:[e.nextTier.name,": ",v.jsx("span",{className:"text-[#059669] font-mono",children:s.estimatedCompletionDate})]}),v.jsxs("p",{className:"text-[10px] text-stone-500 font-sans",children:["in ~",s.estimatedDaysToNextTier," days at current velocity"]})]})]})]}),v.jsxs("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8",children:[v.jsxs("div",{className:"p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[v.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-xs mb-1.5 font-sans",children:[v.jsx("span",{children:"Weekly Cadence"}),v.jsx(I_,{className:"w-4 h-4 text-arcade-amber"})]}),v.jsxs("div",{className:"flex items-baseline gap-1.5",children:[v.jsx("span",{className:"font-pixel text-xl sm:text-2xl text-[#B45309]",children:s.badgesPerWeek}),v.jsx("span",{className:"text-xs font-mono text-stone-600 font-semibold",children:"badges / wk"})]}),v.jsxs("p",{className:"text-[11px] text-stone-500 mt-1 font-sans",children:["~",s.badgesPerMonth," badges per month"]})]}),v.jsxs("div",{className:"p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[v.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-xs mb-1.5 font-sans",children:[v.jsx("span",{children:"Average Interval"}),v.jsx(Sm,{className:"w-4 h-4 text-arcade-coral"})]}),v.jsxs("div",{className:"flex items-baseline gap-1.5",children:[v.jsx("span",{className:"font-pixel text-xl sm:text-2xl text-[#EA580C]",children:s.avgDaysBetweenBadges}),v.jsx("span",{className:"text-xs font-mono text-stone-600 font-semibold",children:"days / badge"})]}),v.jsxs("p",{className:"text-[11px] text-stone-500 mt-1 font-sans",children:["From ",s.firstBadgeDate," to ",s.latestBadgeDate]})]}),v.jsxs("div",{className:"p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[v.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-xs mb-1.5 font-sans",children:[v.jsx("span",{children:"Weekly Streak"}),v.jsx(Gg,{className:"w-4 h-4 text-arcade-ruby"})]}),v.jsxs("div",{className:"flex items-baseline gap-1.5",children:[v.jsx("span",{className:"font-pixel text-xl sm:text-2xl text-[#E11D48]",children:s.currentActiveStreakWeeks}),v.jsx("span",{className:"text-xs font-mono text-stone-600 font-semibold",children:"weeks active"})]}),v.jsx("p",{className:"text-[11px] text-stone-500 mt-1 font-sans",children:"Consecutive weeks with >= 1 badge"})]}),v.jsxs("div",{className:"p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[v.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-xs mb-1.5 font-sans",children:[v.jsx("span",{children:"Peak Week Velocity"}),v.jsx(qg,{className:"w-4 h-4 text-arcade-emerald"})]}),v.jsxs("div",{className:"flex items-baseline gap-1.5",children:[v.jsx("span",{className:"font-pixel text-xl sm:text-2xl text-[#059669]",children:s.maxWeeklyCadence}),v.jsx("span",{className:"text-xs font-mono text-stone-600 font-semibold",children:"badges / wk"})]}),v.jsx("p",{className:"text-[11px] text-stone-500 mt-1 font-sans",children:"Personal all-time single week high"})]})]}),v.jsxs("div",{className:"mb-8",children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsxs("h4",{className:"font-display font-bold text-base text-stone-800 flex items-center gap-2",children:[v.jsx(Ad,{className:"w-4 h-4 text-arcade-amber"}),"Weekly Completion Timeline"]}),v.jsx("span",{className:"text-xs font-mono text-stone-500",children:"Click any bar to inspect badges earned that week"})]}),s.weeklyBreakdown.length>0?v.jsxs("div",{className:"p-5 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[v.jsx("div",{className:"flex items-end gap-2 sm:gap-4 h-48 pt-6 pb-2 px-2 overflow-x-auto no-scrollbar",children:s.weeklyBreakdown.map((u,d)=>{const f=Math.max(1,s.maxWeeklyCadence),p=Math.max(15,Math.round(u.count/f*100)),m=r===d;return v.jsxs("button",{onClick:()=>o(d),className:"flex-1 min-w-[50px] flex flex-col items-center group relative h-full justify-end focus:outline-none",children:[v.jsx("span",{className:"text-[10px] font-mono font-bold text-stone-700 mb-1 group-hover:text-[#B45309] transition-colors",children:u.count}),v.jsx("div",{className:`w-full rounded-t-xl transition-all duration-300 ${m?"bg-gradient-to-t from-[#B45309] to-[#F59E0B] shadow-arcade-amber scale-105":"bg-gradient-to-t from-[#D6C0A5] to-[#EADBC8] group-hover:from-[#BF9E79] group-hover:to-[#D6C0A5]"}`,style:{height:`${p}%`}}),v.jsxs("span",{className:`text-[10px] font-mono mt-2 truncate w-full text-center ${m?"font-bold text-[#B45309]":"text-stone-500"}`,children:["Wk ",d+1]})]},u.startDate)})}),l&&v.jsxs("div",{className:"mt-4 pt-4 border-t border-[#EADBCE] animate-fadeIn",children:[v.jsxs("div",{className:"flex items-center justify-between mb-2",children:[v.jsxs("span",{className:"text-xs font-bold text-stone-800 font-display",children:[l.weekLabel," (",l.startDate," to ",l.endDate,"):"]}),v.jsxs("span",{className:"text-xs font-mono text-[#B45309] font-bold",children:[l.count," badges • ~",l.points," points"]})]}),v.jsx("div",{className:"flex flex-wrap gap-2",children:l.badges.map(u=>v.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 bg-white rounded-xl text-xs border border-[#EADBCE] text-stone-700 shadow-sm",children:[v.jsx("span",{className:"w-2 h-2 rounded-full bg-[#F59E0B]"}),v.jsx("span",{className:"truncate max-w-[200px] sm:max-w-none",children:u.name}),v.jsxs("span",{className:"text-[10px] font-mono text-stone-400",children:["(",u.category,")"]})]},u.id))})]})]}):v.jsx("div",{className:"p-8 text-center bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] text-stone-500 text-sm",children:"No badges recorded yet. Connect a profile or add badges to see your weekly cadence!"})]}),v.jsxs("div",{children:[v.jsxs("h4",{className:"font-display font-bold text-base text-stone-800 mb-3 flex items-center gap-2",children:[v.jsx(Ad,{className:"w-4 h-4 text-arcade-coral"}),"Day-of-Week Earning Pattern"]}),v.jsx("div",{className:"grid grid-cols-7 gap-2",children:s.dayOfWeekBreakdown.map(u=>v.jsxs("div",{className:"p-3 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE] text-center",children:[v.jsx("span",{className:"text-[11px] font-mono font-bold text-stone-500 block mb-1",children:u.day}),v.jsx("span",{className:"font-pixel text-xs sm:text-sm text-[#292524] block",children:u.count}),v.jsxs("span",{className:"text-[10px] font-mono text-[#B45309] block mt-0.5",children:[u.percentage,"%"]})]},u.day))})]})]})},H2=({badges:s,onAddBadgeClick:e,onDeleteBadge:t})=>{const[r,o]=at.useState("all"),[l,u]=at.useState(""),[d,f]=at.useState("newest"),p=at.useMemo(()=>{const x={all:s.length,game:0,trivia:0,skill:0,milestone:0,special:0};return s.forEach(y=>{y.category in x&&x[y.category]++}),x},[s]),m=at.useMemo(()=>s.filter(x=>{const y=r==="all"||x.category===r,M=l===""||x.name.toLowerCase().includes(l.toLowerCase());return y&&M}).sort((x,y)=>d==="newest"?new Date(y.dateEarned).getTime()-new Date(x.dateEarned).getTime():d==="oldest"?new Date(x.dateEarned).getTime()-new Date(y.dateEarned).getTime():x.name.localeCompare(y.name)),[s,r,l,d]),_=x=>{switch(x){case"game":return{label:"Arcade Game",bg:"bg-[#FEF3C7]",text:"text-[#B45309]",border:"border-[#FDE68A]"};case"trivia":return{label:"Trivia Badge",bg:"bg-[#FFEDD5]",text:"text-[#C2410C]",border:"border-[#FED7AA]"};case"skill":return{label:"Skill Badge",bg:"bg-[#ECFDF5]",text:"text-[#047857]",border:"border-[#A7F3D0]"};case"milestone":return{label:"Milestone Bonus",bg:"bg-[#F3E8FF]",text:"text-[#7E22CE]",border:"border-[#E9D5FF]"};case"special":return{label:"Special Sprint",bg:"bg-[#FFF1F2]",text:"text-[#BE123C]",border:"border-[#FECDD3]"}}};return v.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsx("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A]",children:"Earned Badges Repository"}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:["Total: ",s.length," badges"]})]}),v.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Individual Badges & Contributions"}),v.jsx("p",{className:"text-stone-600 text-sm mt-1",children:"Inspect every Google Cloud badge earned, verification status, completion timestamp, and point contribution."})]}),v.jsxs("button",{onClick:e,className:"px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white rounded-2xl text-xs sm:text-sm font-semibold font-display shadow-arcade-amber hover:shadow-sm active:translate-y-0.5 transition flex items-center justify-center gap-2",children:[v.jsx(Wg,{className:"w-4 h-4"}),v.jsx("span",{children:"Add Official Badge"})]})]}),v.jsx("div",{className:"flex flex-wrap gap-2 mb-5",children:[{key:"all",label:"All Badges",count:p.all},{key:"game",label:"Games (1 pt)",count:p.game},{key:"trivia",label:"Trivia (1 pt)",count:p.trivia},{key:"skill",label:"Skill Labs (1/2 pt)",count:p.skill},{key:"milestone",label:"Milestones (Bonus)",count:p.milestone},{key:"special",label:"Cert & Sprints",count:p.special}].map(x=>v.jsxs("button",{onClick:()=>o(x.key),className:`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans transition flex items-center gap-1.5 ${r===x.key?"bg-[#292524] text-white shadow-sm":"bg-[#FAF7F2] text-stone-600 hover:bg-[#F4ECE1] border border-[#EADBCE]"}`,children:[v.jsx("span",{children:x.label}),v.jsx("span",{className:`px-1.5 py-0.2 rounded-full text-[10px] font-mono ${r===x.key?"bg-stone-700 text-stone-200":"bg-white text-stone-500"}`,children:x.count})]},x.key))}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 mb-6",children:[v.jsxs("div",{className:"relative flex-1",children:[v.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400",children:v.jsx(Yl,{className:"w-4 h-4"})}),v.jsx("input",{type:"text",value:l,onChange:x=>u(x.target.value),placeholder:"Filter by badge title (e.g. BigQuery, Terraform, Security, Vertex AI)...",className:"w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsxs("span",{className:"text-xs font-semibold text-stone-500 font-sans flex items-center gap-1",children:[v.jsx(a_,{className:"w-3.5 h-3.5"})," Sort:"]}),v.jsxs("select",{value:d,onChange:x=>f(x.target.value),className:"px-3 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-2xl text-xs font-sans text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]",children:[v.jsx("option",{value:"newest",children:"Earned (Newest First)"}),v.jsx("option",{value:"oldest",children:"Earned (Oldest First)"}),v.jsx("option",{value:"name",children:"Badge Title (A-Z)"})]})]})]}),m.length>0?v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5",children:m.map(x=>{const y=_(x.category);return v.jsxs("div",{className:"p-4 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] transition flex flex-col justify-between group",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between gap-2 mb-2",children:[v.jsx("span",{className:`px-2 py-0.5 rounded-lg text-[10px] font-mono font-bold border ${y.bg} ${y.text} ${y.border}`,children:y.label}),v.jsxs("span",{className:"font-pixel text-[11px] text-[#B45309] font-bold",children:["+",x.pointsContribution," ",x.category==="skill"?"pt pool":"pt"]})]}),v.jsx("h4",{className:"font-sans font-bold text-sm text-stone-800 leading-snug group-hover:text-[#B45309] transition-colors",children:x.name}),x.description&&v.jsx("p",{className:"text-xs text-stone-500 mt-1 line-clamp-2",children:x.description})]}),v.jsxs("div",{className:"flex items-center justify-between pt-3 mt-3 border-t border-[#EADBCE]/80 text-[11px] font-mono text-stone-500",children:[v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx(Ad,{className:"w-3.5 h-3.5 text-stone-400"}),v.jsx("span",{children:x.dateEarned})]}),v.jsx("button",{onClick:()=>{window.confirm(`Remove "${x.name}" from your badges calculation?`)&&t(x.id)},className:"p-1.5 text-stone-400 hover:text-[#BE123C] hover:bg-white rounded-lg transition",title:"Remove badge from calculation",children:v.jsx(Xg,{className:"w-3.5 h-3.5"})})]})]},x.id)})}):v.jsxs("div",{className:"p-12 text-center bg-[#FAF7F2] rounded-3xl border border-[#EADBCE]",children:[v.jsx(Vv,{className:"w-10 h-10 text-stone-400 mx-auto mb-2 opacity-50"}),v.jsx("p",{className:"font-display font-bold text-stone-700 text-base",children:"No matching badges found"}),v.jsx("p",{className:"text-stone-500 text-xs mt-1",children:"Try clearing the search filter or add badges to your profile."})]})]})},G2=({breakdown:s})=>{const{totalPoints:e,currentTier:t}=s,r=o=>{Qr({particleCount:50,spread:70,colors:["#F59E0B","#10B981","#9333EA"]})};return v.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[v.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1",children:[v.jsx(f_,{className:"w-3.5 h-3.5"}),"Official Prize Vault"]}),v.jsxs("span",{className:"text-xs font-mono text-stone-500",children:["Current Points: ",v.jsxs("strong",{className:"text-[#B45309]",children:[e," pts"]})]})]}),v.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Arcade Swag Tiers & Milestones"}),v.jsx("p",{className:"text-stone-600 text-sm mt-1",children:"Official reward packages redeemable during the Google Cloud Arcade Prize Counter distribution window."})]})}),v.jsx("div",{className:"space-y-4",children:Qn.map((o,l)=>{const u=e>=o.minPoints,d=t.id===o.id,f=Math.max(0,o.minPoints-e);return v.jsx("div",{className:`p-5 rounded-3xl border transition-all ${d?"bg-[#FFFDF9] border-[#B45309] ring-2 ring-[#F59E0B]/20 shadow-md":u?"bg-white border-[#EADBCE] opacity-90":"bg-[#FAF7F2] border-[#EADBCE] opacity-75"}`,children:v.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center justify-between gap-4",children:[v.jsxs("div",{className:"flex-1",children:[v.jsxs("div",{className:"flex flex-wrap items-center gap-2 mb-1.5",children:[v.jsxs("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold border",style:{backgroundColor:o.bgColor,color:o.color,borderColor:o.borderColor},children:[o.name," (",o.badgeLevel,")"]}),v.jsxs("span",{className:"text-xs font-mono font-bold text-stone-600",children:[o.minPoints,"+ Points"]}),u?v.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-sans font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0]",children:[v.jsx(Hg,{className:"w-3.5 h-3.5"})," Unlocked"]}):v.jsxs("span",{className:"inline-flex items-center gap-1 text-[11px] font-mono text-stone-500 bg-white px-2 py-0.5 rounded-full border border-[#EADBCE]",children:[v.jsx(v_,{className:"w-3.5 h-3.5"})," Needs ",f," more pts"]}),d&&v.jsx("span",{className:"text-[11px] font-sans font-bold text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FDE68A]",children:"Current Standing"})]}),v.jsx("h4",{className:"font-display font-bold text-lg text-stone-900 mt-1",children:o.rewardName}),v.jsx("p",{className:"text-xs text-stone-600 mt-0.5",children:o.rewardDescription}),v.jsx("div",{className:"mt-3 flex flex-wrap gap-2",children:o.swagItems.map((p,m)=>v.jsxs("span",{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-sans ${u?"bg-[#FAF7F2] text-stone-800 border border-[#EADBCE]":"bg-white text-stone-500 border border-[#EADBCE]/60"}`,children:[v.jsx(y_,{className:`w-3.5 h-3.5 ${u?"text-[#059669]":"text-stone-400"}`}),v.jsx("span",{children:p})]},m))})]}),v.jsx("div",{className:"flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-3 sm:pt-0 border-[#EADBCE]",children:u?v.jsxs("button",{onClick:()=>r(o.name),className:"px-4 py-2 bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-bold text-xs rounded-xl border border-[#A7F3D0] transition flex items-center gap-1.5 shadow-sm",children:[v.jsx(Zl,{className:"w-3.5 h-3.5"}),"Celebrate Prize"]}):v.jsxs("div",{className:"text-right",children:[v.jsxs("span",{className:"font-pixel text-xs text-[#EA580C] block",children:["-",f," PTS"]}),v.jsx("span",{className:"text-[10px] font-mono text-stone-500",children:"to unlock this tier"})]})})]})},o.id)})})]})},bd=({breakdown:s})=>{const[e,t]=at.useState(3),[r,o]=at.useState(s.nextTier?s.nextTier.id:"legend"),l=Qn.find(y=>y.id===r)||Qn[Qn.length-1],u=Math.max(0,l.minPoints-s.totalPoints),f=Math.ceil(u/.7),p=Math.ceil(f/Math.max(1,e)),m=p*7,_=new Date;_.setDate(_.getDate()+m);const x=_.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return v.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCE] shadow-soft mb-8",children:[v.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6",children:v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[v.jsxs("span",{className:"px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#B45309] font-mono text-xs font-semibold border border-[#FDE68A] flex items-center gap-1",children:[v.jsx(T_,{className:"w-3.5 h-3.5"}),"What-If Projection Engine"]}),v.jsx("span",{className:"text-xs font-mono text-stone-500",children:"Interactive Goal Planning"})]}),v.jsx("h3",{className:"font-display font-bold text-xl sm:text-2xl text-[#292524] tracking-tight",children:"Target Pace & Velocity Simulator"}),v.jsx("p",{className:"text-stone-600 text-sm mt-1",children:"Adjust your planned completion speed to see exactly when you will unlock your dream swag tier."})]})}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[v.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-2 flex items-center gap-1.5",children:[v.jsx(D_,{className:"w-4 h-4 text-arcade-amber"}),"Select Target Swag Goal:"]}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:Qn.filter(y=>y.id!=="novice").map(y=>v.jsxs("button",{onClick:()=>o(y.id),className:`p-3 rounded-2xl border text-left transition ${r===y.id?"bg-[#FEF3C7] border-[#B45309] ring-2 ring-[#F59E0B]/30":"bg-[#FAF7F2] border-[#EADBCE] hover:bg-[#F4ECE1]"}`,children:[v.jsx("span",{className:"block text-xs font-bold text-stone-800 font-display",children:y.name}),v.jsxs("span",{className:"block text-[11px] font-mono text-[#B45309]",children:[y.minPoints," points min"]})]},y.id))})]}),v.jsxs("div",{className:"p-4 bg-[#FAF7F2] rounded-2xl border border-[#EADBCE]",children:[v.jsxs("div",{className:"flex items-center justify-between mb-2",children:[v.jsxs("span",{className:"text-xs font-bold text-stone-700 font-sans flex items-center gap-1",children:[v.jsx(qg,{className:"w-4 h-4 text-arcade-coral"}),"Target Weekly Pace:"]}),v.jsxs("span",{className:"font-pixel text-sm text-[#B45309]",children:[e," ",e===1?"badge":"badges"," / week"]})]}),v.jsx("input",{type:"range",min:"1",max:"10",step:"1",value:e,onChange:y=>t(parseInt(y.target.value,10)),className:"w-full h-2 bg-[#EADBCE] rounded-lg appearance-none cursor-pointer accent-[#B45309]"}),v.jsxs("div",{className:"flex justify-between text-[10px] font-mono text-stone-500 mt-2",children:[v.jsx("span",{children:"1 badge (Casual)"}),v.jsx("span",{children:"3 badges (Steady)"}),v.jsx("span",{children:"5 badges (Fast)"}),v.jsx("span",{children:"10 badges (Speedrun)"})]})]})]}),v.jsxs("div",{className:"lg:col-span-5 p-6 bg-gradient-to-br from-[#FEF3C7] via-[#FFFDF9] to-[#FAF5EE] rounded-3xl border border-[#FDE68A] shadow-soft",children:[v.jsxs("div",{className:"flex items-center justify-between mb-3",children:[v.jsx("span",{className:"text-xs font-mono font-bold text-[#B45309] uppercase tracking-wider",children:"Simulation Projection"}),v.jsx("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-white text-stone-700 border border-[#EADBCE]",children:l.name})]}),v.jsxs("div",{className:"my-3",children:[v.jsx("p",{className:"text-xs text-stone-600 font-sans",children:"Estimated Arrival Date:"}),v.jsx("p",{className:"font-display font-bold text-2xl text-stone-900 mt-0.5",children:x}),v.jsxs("p",{className:"text-xs font-mono text-stone-500 mt-1",children:["in ~",p," weeks (",m," days)"]})]}),v.jsxs("div",{className:"space-y-2 pt-3 border-t border-[#FDE68A] text-xs font-sans",children:[v.jsxs("div",{className:"flex justify-between",children:[v.jsx("span",{className:"text-stone-600",children:"Points Remaining:"}),v.jsxs("span",{className:"font-mono font-bold text-[#B45309]",children:[u," pts"]})]}),v.jsxs("div",{className:"flex justify-between",children:[v.jsx("span",{className:"text-stone-600",children:"Est. Badges Needed:"}),v.jsxs("span",{className:"font-mono font-bold text-stone-800",children:["~",f," badges"]})]}),v.jsxs("div",{className:"flex justify-between",children:[v.jsx("span",{className:"text-stone-600",children:"Weekly Pace:"}),v.jsxs("span",{className:"font-mono font-bold text-[#059669]",children:[e," badges/wk"]})]})]}),v.jsxs("div",{className:"mt-4 p-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#EADBCE] text-[11px] text-stone-600 leading-snug",children:["💡 ",v.jsx("strong",{children:"Pro-Tip:"})," Complete the weekly Trivia Badges (1 pt every Monday) and bi-weekly Arcade Game levels to maximize your points per hour!"]})]})]})]})},j2=({isOpen:s,onClose:e,profiles:t,currentProfile:r,onSelectProfile:o,onCreateProfile:l,onDeleteProfile:u})=>{const[d,f]=at.useState(!1),[p,m]=at.useState(""),[_,x]=at.useState(""),[y,M]=at.useState(""),[C,E]=at.useState(null),S=at.useRef(null);if(at.useEffect(()=>{if(!s)return;const I=B=>{B.key==="Escape"&&e()};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[s,e]),!s)return null;const O=I=>{I.preventDefault();const B=Zo(p,60);if(!B)return;const V=_.trim()&&ql(_)||"https://www.cloudskillsboost.google/public_profiles/user",H=Zo(y,200),P={id:`profile-${Date.now()}`,name:B,avatarSeed:B.replace(/\s+/g,""),profileUrl:V,lastUpdated:new Date().toISOString().split("T")[0],isCurrent:!0,notes:H||"Custom cloud profile",badges:[],seasonTarget:"Season 2026"};l(P),Qr({particleCount:50,spread:60,colors:["#F59E0B","#10B981"]}),f(!1),m(""),x(""),M(""),e()},F=()=>{try{const I="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t,null,2)),B=document.createElement("a");B.setAttribute("href",I),B.setAttribute("download",`google-arcade-profiles-${new Date().toISOString().split("T")[0]}.json`),document.body.appendChild(B),B.click(),B.remove()}catch(I){console.error("Export failed:",I)}},A=I=>{var H;const B=(H=I.target.files)==null?void 0:H[0];if(!B)return;const V=new FileReader;V.onload=P=>{var R;try{const k=(R=P.target)==null?void 0:R.result,J=JSON.parse(k),Z=Fv(J);if(!Z){E("Invalid profile backup file format. Must contain valid Arcade profiles.");return}to(Z),window.location.reload()}catch{E("Could not parse JSON file. Please check file integrity.")}},V.readAsText(B)};return v.jsx("div",{onClick:e,className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn",children:v.jsxs("div",{onClick:I=>I.stopPropagation(),className:"bg-white rounded-3xl max-w-xl w-full border border-[#EADBCE] shadow-2xl overflow-hidden",children:[v.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"font-pixel text-[10px] text-[#B45309] font-bold uppercase",children:"Profile Vault"}),v.jsx("span",{className:"px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] text-[10px] font-mono font-bold border border-[#A7F3D0]",children:"Auto-Saved"})]}),v.jsx("h3",{className:"font-display font-bold text-xl text-stone-900 mt-0.5",children:"Account Management & Switcher"})]}),v.jsx("button",{onClick:e,className:"p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 rounded-xl transition",children:v.jsx(wf,{className:"w-5 h-5"})})]}),v.jsxs("div",{className:"p-6 max-h-[70vh] overflow-y-auto",children:[C&&v.jsxs("div",{className:"mb-4 p-3 bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] rounded-xl text-xs flex items-center justify-between",children:[v.jsxs("span",{className:"flex items-center gap-2",children:[v.jsx(Vg,{className:"w-4 h-4 flex-shrink-0"}),C]}),v.jsx("button",{onClick:()=>E(null),className:"font-bold",children:"×"})]}),d?v.jsxs("form",{onSubmit:O,className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Account / Explorer Name:"}),v.jsx("input",{type:"text",required:!0,maxLength:60,value:p,onChange:I=>m(I.target.value),placeholder:"e.g. Maya Lin",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Google Cloud Skills Boost Profile URL (optional):"}),v.jsx("input",{type:"text",maxLength:300,value:_,onChange:I=>x(I.target.value),placeholder:"https://www.cloudskillsboost.google/public_profiles/...",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Personal Goal / Notes:"}),v.jsx("input",{type:"text",maxLength:200,value:y,onChange:I=>M(I.target.value),placeholder:"e.g. Aiming for Premium Tier Backpack by November!",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsxs("div",{className:"flex items-center justify-end gap-2 pt-3 border-t border-[#EADBCE]",children:[v.jsx("button",{type:"button",onClick:()=>f(!1),className:"px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl transition",children:"Cancel"}),v.jsx("button",{type:"submit",disabled:!p.trim(),className:"px-5 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-bold rounded-xl shadow-arcade-amber hover:shadow-sm transition disabled:opacity-50",children:"Create & Save Account"})]})]}):v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center justify-between mb-4",children:[v.jsx("p",{className:"text-xs text-stone-500 font-sans",children:"Saved accounts on this device. Your active account is preserved across reloads."}),v.jsxs("button",{onClick:()=>f(!0),className:"px-3 py-1.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs font-semibold rounded-xl transition flex items-center gap-1.5 shadow-sm",children:[v.jsx(W_,{className:"w-3.5 h-3.5"}),"Create Account"]})]}),v.jsx("div",{className:"space-y-3",children:t.map(I=>{const B=Og(I.badges),V=I.id===r.id;return v.jsxs("div",{onClick:()=>{o(I.id),e()},className:`p-4 rounded-2xl border cursor-pointer transition flex items-center justify-between group ${V?"bg-[#FEF3C7] border-[#B45309] ring-2 ring-[#F59E0B]/30":"bg-[#FAF7F2] border-[#EADBCE] hover:bg-[#F4ECE1]"}`,children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"w-10 h-10 rounded-full bg-white border border-[#EADBCE] flex items-center justify-center font-display font-bold text-base text-[#B45309] shadow-sm",children:I.name.charAt(0).toUpperCase()}),v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"font-display font-bold text-sm text-stone-900 group-hover:text-[#B45309] transition-colors",children:I.name}),V&&v.jsxs("span",{className:"inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#059669] bg-[#ECFDF5] px-2 py-0.2 rounded-full border border-[#A7F3D0]",children:[v.jsx(G_,{className:"w-3 h-3"})," Active"]})]}),v.jsxs("p",{className:"text-[11px] font-mono text-stone-500 mt-0.5",children:[I.badges.length," badges • ",B.currentTier.name]})]})]}),v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsx("div",{className:"text-right",children:v.jsxs("span",{className:"font-pixel text-xs text-[#B45309]",children:[B.totalPoints," PTS"]})}),t.length>1&&v.jsx("button",{onClick:H=>{H.stopPropagation(),window.confirm(`Delete profile for "${I.name}"?`)&&u(I.id)},className:"p-1.5 text-stone-400 hover:text-rose-600 hover:bg-white rounded-lg transition opacity-0 group-hover:opacity-100",title:"Delete profile",children:v.jsx(Xg,{className:"w-4 h-4"})})]})]},I.id)})}),v.jsxs("div",{className:"mt-6 pt-4 border-t border-[#EADBCE] flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("button",{onClick:F,className:"flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition font-medium",children:[v.jsx(t_,{className:"w-3.5 h-3.5"}),"Backup JSON"]}),v.jsxs("button",{onClick:()=>{var I;return(I=S.current)==null?void 0:I.click()},className:"flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition font-medium",children:[v.jsx(V_,{className:"w-3.5 h-3.5"}),"Import JSON"]}),v.jsx("input",{ref:S,type:"file",accept:".json",className:"hidden",onChange:A})]}),v.jsx("span",{className:"font-mono text-[10px]",children:"Auto-Synced in Browser"})]})]})]})]})})},W2=({isOpen:s,onClose:e,onAddBadge:t,existingBadgeNames:r})=>{const[o,l]=at.useState("catalog"),[u,d]=at.useState(""),[f,p]=at.useState(""),[m,_]=at.useState("skill"),[x,y]=at.useState(new Date().toISOString().split("T")[0]),[M,C]=at.useState(.5);if(at.useEffect(()=>{if(!s)return;const A=I=>{I.key==="Escape"&&e()};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[s,e]),!s)return null;const E=new Set(r.map(A=>A.toLowerCase().trim())),S=Ng.filter(A=>u===""||A.name.toLowerCase().includes(u.toLowerCase())),O=A=>{const I={id:`badge-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,name:A.name,category:A.category,dateEarned:new Date().toISOString().split("T")[0],pointsContribution:A.pointsContribution,description:A.description,season:A.season,isVerified:!0};t(I),Qr({particleCount:30,spread:50,colors:["#F59E0B","#10B981"]})},F=A=>{A.preventDefault();const I=Zo(f,120);if(!I)return;const B=Math.max(.5,Math.min(10,M||.5)),V=Sr(x),H={id:`custom-badge-${Date.now()}`,name:I,category:m,dateEarned:V,pointsContribution:B,isVerified:!0,season:"Season 2026"};t(H),Qr({particleCount:40,spread:60,colors:["#EA580C","#F59E0B"]}),p(""),e()};return v.jsx("div",{onClick:e,className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn",children:v.jsxs("div",{onClick:A=>A.stopPropagation(),className:"bg-white rounded-3xl max-w-2xl w-full border border-[#EADBCE] shadow-2xl overflow-hidden",children:[v.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]",children:[v.jsxs("div",{children:[v.jsx("span",{className:"font-pixel text-[10px] text-[#B45309] font-bold uppercase",children:"Badge Catalog"}),v.jsx("h3",{className:"font-display font-bold text-xl text-stone-900 mt-0.5",children:"Add Badge to Calculation"})]}),v.jsx("button",{onClick:e,className:"p-2 text-stone-400 hover:text-stone-800 hover:bg-stone-200/50 rounded-xl transition",children:v.jsx(wf,{className:"w-5 h-5"})})]}),v.jsxs("div",{className:"flex border-b border-[#EADBCE] bg-[#FAF7F2]/50 px-6 pt-2",children:[v.jsx("button",{onClick:()=>l("catalog"),className:`px-4 py-2.5 text-xs font-bold border-b-2 transition ${o==="catalog"?"border-[#B45309] text-[#B45309]":"border-transparent text-stone-500 hover:text-stone-800"}`,children:"Official Badge Catalog"}),v.jsx("button",{onClick:()=>l("custom"),className:`px-4 py-2.5 text-xs font-bold border-b-2 transition ${o==="custom"?"border-[#B45309] text-[#B45309]":"border-transparent text-stone-500 hover:text-stone-800"}`,children:"Create Custom Badge"})]}),v.jsx("div",{className:"p-6 max-h-[65vh] overflow-y-auto",children:o==="catalog"?v.jsxs("div",{children:[v.jsxs("div",{className:"relative mb-4",children:[v.jsx(Yl,{className:"w-4 h-4 absolute left-3.5 top-3 text-stone-400"}),v.jsx("input",{type:"text",maxLength:100,value:u,onChange:A=>d(A.target.value),placeholder:"Search official games, trivia, skill badges...",className:"w-full pl-10 pr-4 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsx("div",{className:"space-y-2",children:S.map((A,I)=>{const B=E.has(A.name.toLowerCase().trim());return v.jsxs("div",{className:"p-3 bg-[#FAF7F2] hover:bg-[#F4ECE1] rounded-2xl border border-[#EADBCE] flex items-center justify-between transition",children:[v.jsxs("div",{className:"pr-4",children:[v.jsxs("div",{className:"flex items-center gap-2 mb-0.5",children:[v.jsx("span",{className:"text-[10px] font-mono px-2 py-0.2 rounded bg-white text-stone-600 border border-[#EADBCE]",children:A.category.toUpperCase()}),v.jsxs("span",{className:"font-pixel text-[10px] text-[#B45309]",children:["+",A.pointsContribution," pt"]})]}),v.jsx("h5",{className:"font-sans font-bold text-xs sm:text-sm text-stone-800",children:A.name})]}),v.jsx("button",{onClick:()=>O(A),disabled:B,className:`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans transition flex items-center gap-1 shrink-0 ${B?"bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] cursor-default":"bg-[#B45309] hover:bg-[#92400E] text-white shadow-sm"}`,children:B?v.jsxs(v.Fragment,{children:[v.jsx(Wv,{className:"w-3.5 h-3.5"})," Added"]}):v.jsxs(v.Fragment,{children:[v.jsx(Wg,{className:"w-3.5 h-3.5"})," Add"]})})]},I)})})]}):v.jsxs("form",{onSubmit:F,className:"space-y-4",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Badge Title:"}),v.jsx("input",{type:"text",required:!0,maxLength:120,value:f,onChange:A=>p(A.target.value),placeholder:"e.g. Google Cloud Certified Professional Cloud Architect",className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Category:"}),v.jsxs("select",{value:m,onChange:A=>{const I=A.target.value;_(I),C(I==="game"||I==="trivia"?1:I==="skill"?.5:2)},className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]",children:[v.jsx("option",{value:"skill",children:"Skill Badge (1/2 pool)"}),v.jsx("option",{value:"game",children:"Arcade Game (1 pt)"}),v.jsx("option",{value:"trivia",children:"Trivia Badge (1 pt)"}),v.jsx("option",{value:"milestone",children:"Milestone Bonus (2-6 pts)"}),v.jsx("option",{value:"special",children:"Special Sprint / Cert (2 pts)"})]})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:"Completion Date:"}),v.jsx("input",{type:"date",required:!0,value:x,onChange:A=>y(A.target.value),className:"w-full px-3.5 py-2 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-sans focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]})]}),v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-bold text-stone-700 font-sans mb-1",children:["Points Contribution (",M," pt):"]}),v.jsx("input",{type:"number",step:"0.5",min:"0.5",max:"10",value:M,onChange:A=>C(parseFloat(A.target.value)||.5),className:"w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EADBCE] rounded-xl text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"})]}),v.jsxs("div",{className:"flex justify-end gap-2 pt-3 border-t border-[#EADBCE]",children:[v.jsx("button",{type:"button",onClick:e,className:"px-4 py-2 text-xs font-semibold text-stone-600 hover:bg-stone-100 rounded-xl",children:"Cancel"}),v.jsx("button",{type:"submit",disabled:!f.trim(),className:"px-5 py-2 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white text-xs font-bold rounded-xl shadow-arcade-amber hover:shadow-sm transition disabled:opacity-50",children:"Add Custom Badge"})]})]})})]})})},X2=({isOpen:s,onClose:e,skillRatio:t,onSkillRatioChange:r,onResetToDefaults:o})=>(at.useEffect(()=>{if(!s)return;const l=u=>{u.key==="Escape"&&e()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[s,e]),s?v.jsx("div",{onClick:e,className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fadeIn",children:v.jsxs("div",{onClick:l=>l.stopPropagation(),className:"bg-white rounded-3xl max-w-md w-full border border-[#EADBCE] shadow-2xl overflow-hidden",children:[v.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-[#EADBCE] bg-[#FAF7F2]",children:[v.jsxs("div",{children:[v.jsx("span",{className:"font-pixel text-[10px] text-[#B45309] font-bold uppercase",children:"Calculation Engine"}),v.jsx("h3",{className:"font-display font-bold text-xl text-stone-900 mt-0.5",children:"Arcade Rules & Ratios"})]}),v.jsx("button",{onClick:e,className:"p-2 text-stone-400 hover:text-stone-800 rounded-xl transition",children:v.jsx(wf,{className:"w-5 h-5"})})]}),v.jsxs("div",{className:"p-6 space-y-5",children:[v.jsxs("div",{children:[v.jsxs("label",{className:"block text-xs font-bold text-stone-800 font-sans mb-1.5 flex items-center justify-between",children:[v.jsx("span",{children:"Skill Badge Points Ratio:"}),v.jsxs("span",{className:"font-mono text-[#B45309] font-bold",children:["1 pt per ",t," ",t===1?"badge":"badges"]})]}),v.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{ratio:1,label:"1 pt per badge"},{ratio:2,label:"1 pt per 2 badges (Default)"},{ratio:3,label:"1 pt per 3 badges"}].map(l=>v.jsx("button",{onClick:()=>r(l.ratio),className:`p-2.5 rounded-xl border text-xs font-semibold font-sans transition ${t===l.ratio?"bg-[#FEF3C7] border-[#B45309] text-[#B45309] ring-2 ring-[#F59E0B]/30":"bg-[#FAF7F2] border-[#EADBCE] text-stone-600 hover:bg-[#F4ECE1]"}`,children:l.label},l.ratio))}),v.jsxs("p",{className:"text-[11px] text-stone-500 mt-1.5 flex items-center gap-1 font-sans",children:[v.jsx(jg,{className:"w-3.5 h-3.5 text-stone-400"}),"Standard Google Cloud Arcade 2026 awards 1 point per 2 verified skill badges."]})]}),v.jsxs("div",{className:"pt-4 border-t border-[#EADBCE] flex items-center justify-between",children:[v.jsxs("button",{onClick:()=>{window.confirm("Reset all demo profiles and cached data to original defaults?")&&(o(),e())},className:"text-xs text-rose-700 hover:text-rose-900 font-semibold flex items-center gap-1.5",children:[v.jsx(Mf,{className:"w-3.5 h-3.5"}),"Reset All to Defaults"]}),v.jsx("button",{onClick:e,className:"px-4 py-2 bg-[#292524] text-white text-xs font-bold rounded-xl",children:"Done"})]})]})]})}):null);function q2(){const[s,e]=at.useState([]),[t,r]=at.useState(""),[o,l]=at.useState(2),[u,d]=at.useState("calculator"),[f,p]=at.useState(!1),[m,_]=at.useState(!1),[x,y]=at.useState(!1);at.useEffect(()=>{const P=na();e(P);const R=Td();r(R),l(Lv())},[]);const M=at.useMemo(()=>!s||s.length===0?Cn[0]:s.find(R=>R.id===t)||s[0],[s,t]),C=at.useMemo(()=>Og(M.badges,o),[M.badges,o]),E=at.useMemo(()=>Bg(M.badges,C),[M.badges,C]),S=P=>{r(P),Ko(P)},O=P=>{const R=$l(P);e(R),r(P.id)},F=P=>{const R=Dv(P);e(R),r(Td())},A=P=>{const R=$l(P);e(R),r(P.id)},I=P=>{const R=[P,...M.badges],k=xm(M.id,R);e(k)},B=P=>{const R=M.badges.filter(J=>J.id!==P),k=xm(M.id,R);e(k)},V=P=>{l(P),vm(P)},H=()=>{to(Cn),Ko(Cn[0].id),e(Cn),r(Cn[0].id),l(2),vm(2)};return v.jsxs("div",{className:"min-h-screen bg-[#FAF7F2] text-[#292524] arcade-grid-bg flex flex-col font-sans selection:bg-[#FDE68A] selection:text-[#78350F]",children:[v.jsx(Z_,{currentProfile:M,profiles:s,onOpenProfileSwitcher:()=>p(!0),onOpenSettings:()=>y(!0),activeTab:u,setActiveTab:d,totalPoints:C.totalPoints}),v.jsxs("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8",children:[v.jsx(K_,{currentProfile:M,onProfileLoaded:A,onSelectSample:S}),u==="calculator"&&v.jsxs("div",{className:"space-y-8 animate-fadeIn",children:[v.jsx(V2,{breakdown:C,currentProfile:M,onOpenBadgesTab:()=>d("badges"),onOpenSwagTab:()=>d("swag")}),v.jsx(Rg,{frequency:E,breakdown:C,badges:M.badges}),v.jsx(bd,{breakdown:C})]}),u==="frequency"&&v.jsxs("div",{className:"space-y-8 animate-fadeIn",children:[v.jsx(Rg,{frequency:E,breakdown:C,badges:M.badges}),v.jsx(bd,{breakdown:C})]}),u==="badges"&&v.jsx("div",{className:"animate-fadeIn",children:v.jsx(H2,{badges:M.badges,onAddBadgeClick:()=>_(!0),onDeleteBadge:B})}),u==="swag"&&v.jsx("div",{className:"animate-fadeIn",children:v.jsx(G2,{breakdown:C})}),u==="simulator"&&v.jsx("div",{className:"animate-fadeIn",children:v.jsx(bd,{breakdown:C})})]}),v.jsx("footer",{className:"bg-white border-t border-[#EADBCE] mt-12 py-8 text-stone-600 text-xs",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#FEF3C7] text-[#B45309] flex items-center justify-center font-pixel text-[9px] font-bold border border-[#FDE68A]",children:"🕹️"}),v.jsx("span",{className:"font-display font-bold text-stone-800",children:"Google Cloud Arcade Calculator"}),v.jsx("span",{className:"text-stone-400",children:"•"}),v.jsx("span",{children:"Season 2026 Engine"})]}),v.jsxs("div",{className:"flex items-center gap-4 text-stone-500 font-sans",children:[v.jsx("span",{children:"Points Auto-Saved to Browser Storage"}),v.jsx("span",{children:"•"}),v.jsx("button",{onClick:()=>y(!0),className:"text-[#B45309] hover:underline font-semibold",children:"Calculation Rules"}),v.jsx("span",{children:"•"}),v.jsxs("button",{onClick:()=>p(!0),className:"text-[#059669] hover:underline font-semibold",children:["Saved Accounts (",s.length,")"]})]})]})}),v.jsx(j2,{isOpen:f,onClose:()=>p(!1),profiles:s,currentProfile:M,onSelectProfile:S,onCreateProfile:O,onDeleteProfile:F}),v.jsx(W2,{isOpen:m,onClose:()=>_(!1),onAddBadge:I,existingBadgeNames:M.badges.map(P=>P.name)}),v.jsx(X2,{isOpen:x,onClose:()=>y(!1),skillRatio:o,onSkillRatioChange:V,onResetToDefaults:H})]})}class $2 extends at.Component{constructor(){super(...arguments);ku(this,"state",{hasError:!1,error:null,errorInfo:null});ku(this,"handleReset",()=>{try{to(Cn),Ko(Cn[0].id),window.location.reload()}catch{window.location.reload()}})}static getDerivedStateFromError(t){return{hasError:!0,error:t,errorInfo:null}}componentDidCatch(t,r){console.error("Uncaught error caught by Arcade ErrorBoundary:",t,r),this.setState({errorInfo:r})}render(){return this.state.hasError?v.jsx("div",{className:"min-h-screen bg-[#FAF7F2] flex items-center justify-center p-6 text-stone-800 font-sans",children:v.jsxs("div",{className:"bg-white rounded-3xl p-8 max-w-lg w-full border border-[#EADBCE] shadow-2xl text-center",children:[v.jsx("div",{className:"w-16 h-16 rounded-2xl bg-[#FEF3C7] text-[#B45309] flex items-center justify-center mx-auto mb-4 border border-[#FDE68A]",children:v.jsx(k_,{className:"w-8 h-8"})}),v.jsx("span",{className:"font-pixel text-xs text-[#B45309] font-bold uppercase tracking-wider block mb-1",children:"System Recovery Mode"}),v.jsx("h2",{className:"font-display font-bold text-2xl text-stone-900 mb-2",children:"Something went sideways"}),v.jsx("p",{className:"text-stone-600 text-sm mb-6 leading-relaxed",children:"An unexpected display glitch occurred. Your saved accounts are safe in browser memory."}),this.state.error&&v.jsx("div",{className:"p-3 bg-[#FAF7F2] rounded-xl border border-[#EADBCE] text-left text-xs font-mono text-stone-600 mb-6 overflow-x-auto max-h-32",children:this.state.error.toString()}),v.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 justify-center",children:[v.jsxs("button",{onClick:()=>window.location.reload(),className:"px-5 py-2.5 bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-white rounded-xl text-xs sm:text-sm font-bold shadow-arcade-amber hover:shadow-sm transition flex items-center justify-center gap-2",children:[v.jsx(p_,{className:"w-4 h-4"}),"Reload Application"]}),v.jsxs("button",{onClick:this.handleReset,className:"px-5 py-2.5 bg-[#FAF7F2] hover:bg-[#F4ECE1] text-stone-700 border border-[#EADBCE] rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center gap-2",children:[v.jsx(Mf,{className:"w-4 h-4"}),"Reset to Safe Defaults"]})]})]})}):this.props.children}}Av.createRoot(document.getElementById("root")).render(v.jsx(Sv.StrictMode,{children:v.jsx($2,{children:v.jsx(q2,{})})}));
