import{J as y,r as a,o as F,w as h,a as m,h as v}from"./index-CNnVAnoK.js";let r=[],i=[];function p(n){i=i.filter(o=>o!==n)}function b(n){p(n),i.push(n)}function I(n){p(n),i.length===0&&r.length!==0&&(r[r.length-1](),r=[])}function B(n){i.length===0?n():r.push(n)}function A(n){r=r.filter(o=>o!==n)}let f,s=0;const t=new Array(256);for(let n=0;n<256;n++)t[n]=(n+256).toString(16).substring(1);const w=(()=>{const n=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(n!==void 0){if(n.randomBytes!==void 0)return n.randomBytes;if(n.getRandomValues!==void 0)return o=>{const e=new Uint8Array(o);return n.getRandomValues(e),e}}return o=>{const e=[];for(let u=o;u>0;u--)e.push(Math.floor(Math.random()*256));return e}})(),c=4096;function d(){(f===void 0||s+16>c)&&(s=0,f=w(c));const n=Array.prototype.slice.call(f,s,s+=16);return n[6]=n[6]&15|64,n[8]=n[8]&63|128,t[n[0]]+t[n[1]]+t[n[2]]+t[n[3]]+"-"+t[n[4]]+t[n[5]]+"-"+t[n[6]]+t[n[7]]+"-"+t[n[8]]+t[n[9]]+"-"+t[n[10]]+t[n[11]]+t[n[12]]+t[n[13]]+t[n[14]]+t[n[15]]}function g(n){return n==null?null:n}function l(n,o){return n==null?o===!0?`f_${d()}`:null:n}function R({getValue:n,required:o=!0}={}){if(y.value===!0){const e=n!==void 0?a(g(n())):a(null);return o===!0&&e.value===null&&F(()=>{e.value=`f_${d()}`}),n!==void 0&&h(n,u=>{e.value=l(u,o)}),e}return n!==void 0?m(()=>l(n(),o)):a(`f_${d()}`)}const S={name:String};function _(n={}){return(o,e,u)=>{o[e](v("input",{class:"hidden"+(u||""),...n.value}))}}function M(n){return m(()=>n.name||n.for)}export{b as a,B as b,S as c,_ as d,A as e,M as f,I as r,R as u};