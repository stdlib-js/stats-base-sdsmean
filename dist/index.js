"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=a(function(g,n){
var p=require('@stdlib/stats-base-sdsmeanors/dist');function y(e,r,s){return p(e,r,s)}n.exports=y
});var v=a(function(h,u){
var x=require('@stdlib/stats-base-sdsmeanors/dist').ndarray;function f(e,r,s,c){return x(e,r,s,c)}u.exports=f
});var q=a(function(k,o){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=t(),l=v();j(d,"ndarray",l);o.exports=d
});var R=require("path").join,_=require('@stdlib/utils-try-require/dist'),E=require('@stdlib/assert-is-error/dist'),O=q(),i,m=_(R(__dirname,"./native.js"));E(m)?i=O:i=m;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
