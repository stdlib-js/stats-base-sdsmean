"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=s(function(h,t){
var y=require('@stdlib/stats-base-sdsmeanors/dist').ndarray;function f(e,r,a,c){return y(e,r,a,c)}t.exports=f
});var v=s(function(k,u){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=i();function j(e,r,a){return x(e,r,a,p(e,a))}u.exports=j
});var q=s(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=v(),R=i();l(d,"ndarray",R);o.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=q(),n,m=E(_(__dirname,"./native.js"));O(m)?n=b:n=m;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
