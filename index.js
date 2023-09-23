// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).sdsmean=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function i(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function a(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function s(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):o.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(r){return"string"==typeof r}var p=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,y=/^(\d+)e/,b=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":p(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,w,"$1."),t=g.call(t,y,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f.call(r.specifier)?f.call(t):u.call(t)}function x(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function k(r,e,t){var i=e-r.length;return i<0?r:r=t?r+x(i):x(i)+r}var S=String.fromCharCode,j=isNaN,_=Array.isArray;function F(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function A(r){var e,t,i,n,o,c,p,u,f;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",p=1,u=0;u<r.length;u++)if(l(i=r[u]))c+=i;else{if(e=void 0!==i.precision,!(i=F(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,j(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,j(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!j(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=j(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=E(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=a(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=k(i.arg,i.width,i.padRight)),c+=i.arg||"",p+=1}return c}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,i,n;for(t=[],n=0,i=V.exec(r);i;)(e=r.slice(n,V.lastIndex-i[0].length)).length&&t.push(e),t.push($(i)),n=V.lastIndex,i=V.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function I(r){return"string"==typeof r}function C(r){var e,t,i;if(!I(r))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return A.apply(null,t)}var O,R=Object.prototype,N=R.toString,Z=R.__defineGetter__,P=R.__defineSetter__,L=R.__lookupGetter__,W=R.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===N.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(L.call(r,e)||W.call(r,e)?(i=r.__proto__,r.__proto__=R,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Z&&Z.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};var G=O;function B(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M=Object,U=/./;function X(r){return"boolean"==typeof r}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return q&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var Y,H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"";Y=z()?function(r){var e,t,i,n,a;if(null==r)return D.call(r);t=r[K],a=K,e=null!=(n=r)&&J.call(n,a);try{r[K]=void 0}catch(e){return D.call(r)}return i=D.call(r),e?r[K]=t:delete r[K],i}:function(r){return D.call(r)};var Q=Y,rr=Boolean,er=Boolean.prototype.toString;var tr=z();function ir(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function nr(r){return X(r)||ir(r)}function ar(r){return"number"==typeof r}function or(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function cr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+or(n):or(n)+r,i&&(r="-"+r)),r}B(nr,"isPrimitive",X),B(nr,"isObject",ir);var sr=String.prototype.toLowerCase,lr=String.prototype.toUpperCase;function pr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!ar(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=cr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=cr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===lr.call(r.specifier)?lr.call(t):sr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ur(r){return"string"==typeof r}var fr=Math.abs,gr=String.prototype.toLowerCase,dr=String.prototype.toUpperCase,hr=String.prototype.replace,wr=/e\+(\d)$/,yr=/e-(\d)$/,br=/^(\d+)$/,vr=/^(\d+)e/,mr=/\.0$/,Er=/\.0*e/,xr=/(\..*[^0])0*e/;function kr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!ar(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":fr(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=hr.call(t,xr,"$1e"),t=hr.call(t,Er,"e"),t=hr.call(t,mr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=hr.call(t,wr,"e+0$1"),t=hr.call(t,yr,"e-0$1"),r.alternate&&(t=hr.call(t,br,"$1."),t=hr.call(t,vr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===dr.call(r.specifier)?dr.call(t):gr.call(t)}function Sr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function jr(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Sr(i):Sr(i)+r}var _r=String.fromCharCode,Fr=isNaN,Ar=Array.isArray;function Vr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function $r(r){var e,t,i,n,a,o,c,s,l;if(!Ar(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(ur(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=Vr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Fr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Fr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=pr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Fr(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Fr(a)?String(i.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=kr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=cr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=jr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Tr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Cr(r){var e,t,i,n;for(t=[],n=0,i=Tr.exec(r);i;)(e=r.slice(n,Tr.lastIndex-i[0].length)).length&&t.push(e),t.push(Ir(i)),n=Tr.lastIndex,i=Tr.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function Or(r){return"string"==typeof r}function Rr(r){var e,t,i;if(!Or(r))throw new TypeError(Rr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Cr(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return $r.apply(null,t)}function Nr(){return new Function("return this;")()}var Zr="object"==typeof self?self:null,Pr="object"==typeof window?window:null,Lr="object"==typeof global?global:null,Wr="object"==typeof globalThis?globalThis:null;var Gr=function(r){if(arguments.length){if(!X(r))throw new TypeError(Rr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Nr()}if(Wr)return Wr;if(Zr)return Zr;if(Pr)return Pr;if(Lr)return Lr;throw new Error("unexpected error. Unable to resolve global object.")}(),Br=Gr.document&&Gr.document.childNodes,Mr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Xr,qr=/^\s*function\s*([^(]*)/i;B(Ur,"REGEXP",qr),Xr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var zr=Xr;function Dr(r){return"number"==typeof r}function Jr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Yr(r,e,t){var i=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+Jr(n):Jr(n)+r,i&&(r="-"+r)),r}var Hr=String.prototype.toLowerCase,Kr=String.prototype.toUpperCase;function Qr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Dr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Yr(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=Yr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Kr.call(r.specifier)?Kr.call(t):Hr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function re(r){return"string"==typeof r}var ee=Math.abs,te=String.prototype.toLowerCase,ie=String.prototype.toUpperCase,ne=String.prototype.replace,ae=/e\+(\d)$/,oe=/e-(\d)$/,ce=/^(\d+)$/,se=/^(\d+)e/,le=/\.0$/,pe=/\.0*e/,ue=/(\..*[^0])0*e/;function fe(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Dr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ee(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=ne.call(t,ue,"$1e"),t=ne.call(t,pe,"e"),t=ne.call(t,le,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ne.call(t,ae,"e+0$1"),t=ne.call(t,oe,"e-0$1"),r.alternate&&(t=ne.call(t,ce,"$1."),t=ne.call(t,se,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ie.call(r.specifier)?ie.call(t):te.call(t)}function ge(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function de(r,e,t){var i=e-r.length;return i<0?r:r=t?r+ge(i):ge(i)+r}var he=String.fromCharCode,we=isNaN,ye=Array.isArray;function be(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ve(r){var e,t,i,n,a,o,c,s,l;if(!ye(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,s=0;s<r.length;s++)if(re(i=r[s]))o+=i;else{if(e=void 0!==i.precision,!(i=be(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(n=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,we(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,we(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Qr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!we(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=we(a)?String(i.arg):he(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=fe(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Yr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=de(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var me=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ee(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xe(r){var e,t,i,n;for(t=[],n=0,i=me.exec(r);i;)(e=r.slice(n,me.lastIndex-i[0].length)).length&&t.push(e),t.push(Ee(i)),n=me.lastIndex,i=me.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function ke(r){return"string"==typeof r}function Se(r){var e,t,i;if(!ke(r))throw new TypeError(Se("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xe(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return ve.apply(null,t)}function je(r){return null!==r&&"object"==typeof r}var _e=function(r){if("function"!=typeof r)throw new TypeError(Se("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,i;if(!zr(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(je);function Fe(r){var e,t,i,n;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=qr.exec(i.toString()))return e[1]}return je(n=r)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":t}B(je,"isObjectLikeArray",_e);var Ae="function"==typeof U||"object"==typeof Mr||"function"==typeof Br?function(r){return Fe(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Fe(r).toLowerCase():e};var Ve,$e,Te=Object.getPrototypeOf;$e=Object.getPrototypeOf,Ve="function"===Ae($e)?Te:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Ie=Ve;function Ce(r){return null==r?null:(r=M(r),Ie(r))}function Oe(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Q(r))return!0;r=Ce(r)}return!1}var Re="function"==typeof Math.fround?Math.fround:null,Ne="function"==typeof Float32Array;var Ze=Number.POSITIVE_INFINITY,Pe="function"==typeof Float32Array?Float32Array:null;var Le,We="function"==typeof Float32Array?Float32Array:void 0;Le=function(){var r,e;if("function"!=typeof Pe)return!1;try{r=function(r){return Ne&&r instanceof Float32Array||"[object Float32Array]"===Q(r)}(e=new Pe([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Ze}catch(e){r=!1}return r}()?We:function(){throw new Error("not implemented")};var Ge=new Le(1);var Be="function"==typeof Re?Re:function(r){return Ge[0]=r,Ge[0]};function Me(r,e,t){var i,n,a;if(r<=0)return NaN;if(1===r||0===t)return e[0];for(n=t<0?(1-r)*t:0,i=0,a=0;a<r;a++)i+=e[n],n+=t;return Be(i/r)}B(Me,"ndarray",(function(r,e,t,i){var n,a,o;if(r<=0)return NaN;if(1===r||0===t)return e[i];for(a=i,n=0,o=0;o<r;o++)n+=e[a],a+=t;return Be(n/r)}));var Ue,Xe=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Oe(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),qe=Ue=Oe(Xe)?Me:Xe;const{ndarray:ze}=Ue;function De(r,e,t){return qe(r,e,t)}return B(De,"ndarray",(function(r,e,t,i){return ze(r,e,t,i)})),De}));
//# sourceMappingURL=index.js.map
