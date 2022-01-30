var af=Object.defineProperty;var ua=Object.getOwnPropertySymbols;var lf=Object.prototype.hasOwnProperty,cf=Object.prototype.propertyIsEnumerable;var ha=(n,e,t)=>e in n?af(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,pn=(n,e)=>{for(var t in e||(e={}))lf.call(e,t)&&ha(n,t,e[t]);if(ua)for(var t of ua(e))cf.call(e,t)&&ha(n,t,e[t]);return n};function ee(){}const fa=n=>n;function We(n,e){for(const t in e)n[t]=e[t];return n}function da(n){return n()}function pa(){return Object.create(null)}function Ut(n){n.forEach(da)}function Js(n){return typeof n=="function"}function Q(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let bi;function ga(n,e){return bi||(bi=document.createElement("a")),bi.href=e,n===bi.href}function uf(n){return Object.keys(n).length===0}function hf(n,...e){if(n==null)return ee;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function P0(n,e,t){n.$$.on_destroy.push(hf(e,t))}function re(n,e,t,i){if(n){const s=ma(n,e,t,i);return n[0](s)}}function ma(n,e,t,i){return n[1]&&i?We(t.ctx.slice(),n[1](i(e))):t.ctx}function oe(n,e,t,i){if(n[2]&&i){const s=n[2](i(t));if(e.dirty===void 0)return s;if(typeof s=="object"){const r=[],o=Math.max(e.dirty.length,s.length);for(let a=0;a<o;a+=1)r[a]=e.dirty[a]|s[a];return r}return e.dirty|s}return e.dirty}function ae(n,e,t,i,s,r){if(s){const o=ma(e,t,i,r);n.p(o,s)}}function le(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let i=0;i<t;i++)e[i]=-1;return e}return-1}function ff(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function ya(n,e){const t={};e=new Set(e);for(const i in n)!e.has(i)&&i[0]!=="$"&&(t[i]=n[i]);return t}const _a=typeof window!="undefined";let wa=_a?()=>window.performance.now():()=>Date.now(),Ys=_a?n=>requestAnimationFrame(n):ee;const Vt=new Set;function va(n){Vt.forEach(e=>{e.c(n)||(Vt.delete(e),e.f())}),Vt.size!==0&&Ys(va)}function Ea(n){let e;return Vt.size===0&&Ys(va),{promise:new Promise(t=>{Vt.add(e={c:n,f:t})}),abort(){Vt.delete(e)}}}let Si=!1;function df(){Si=!0}function pf(){Si=!1}function gf(n,e,t,i){for(;n<e;){const s=n+(e-n>>1);t(s)<=i?n=s+1:e=s}return n}function mf(n){if(n.hydrate_init)return;n.hydrate_init=!0;let e=n.childNodes;if(n.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const u=e[c];u.claim_order!==void 0&&l.push(u)}e=l}const t=new Int32Array(e.length+1),i=new Int32Array(e.length);t[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,u=(s>0&&e[t[s]].claim_order<=c?s+1:gf(1,s,f=>e[t[f]].claim_order,c))-1;i[l]=t[u]+1;const h=u+1;t[h]=l,s=Math.max(h,s)}const r=[],o=[];let a=e.length-1;for(let l=t[s]+1;l!=0;l=i[l-1]){for(r.push(e[l-1]);a>=l;a--)o.push(e[a]);a--}for(;a>=0;a--)o.push(e[a]);r.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<r.length&&o[l].claim_order>=r[c].claim_order;)c++;const u=c<r.length?r[c]:null;n.insertBefore(o[l],u)}}function yf(n,e){n.appendChild(e)}function ka(n){if(!n)return document;const e=n.getRootNode?n.getRootNode():n.ownerDocument;return e&&e.host?e:n.ownerDocument}function _f(n){const e=B("style");return wf(ka(n),e),e}function wf(n,e){yf(n.head||n,e)}function Ai(n,e){if(Si){for(mf(n),(n.actual_end_child===void 0||n.actual_end_child!==null&&n.actual_end_child.parentElement!==n)&&(n.actual_end_child=n.firstChild);n.actual_end_child!==null&&n.actual_end_child.claim_order===void 0;)n.actual_end_child=n.actual_end_child.nextSibling;e!==n.actual_end_child?(e.claim_order!==void 0||e.parentNode!==n)&&n.insertBefore(e,n.actual_end_child):n.actual_end_child=e.nextSibling}else(e.parentNode!==n||e.nextSibling!==null)&&n.appendChild(e)}function vf(n,e,t){n.insertBefore(e,t||null)}function b(n,e,t){Si&&!t?Ai(n,e):(e.parentNode!==n||e.nextSibling!=t)&&n.insertBefore(e,t||null)}function y(n){n.parentNode.removeChild(n)}function Ft(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function B(n){return document.createElement(n)}function Ef(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function mt(n){return document.createTextNode(n)}function gn(){return mt(" ")}function R(){return mt("")}function x0(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function M0(n){return function(e){return e.preventDefault(),n.call(this,e)}}function z(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function J(n){return Array.from(n.childNodes)}function Ia(n){n.claim_info===void 0&&(n.claim_info={last_index:0,total_claimed:0})}function Ta(n,e,t,i,s=!1){Ia(n);const r=(()=>{for(let o=n.claim_info.last_index;o<n.length;o++){const a=n[o];if(e(a)){const l=t(a);return l===void 0?n.splice(o,1):n[o]=l,s||(n.claim_info.last_index=o),a}}for(let o=n.claim_info.last_index-1;o>=0;o--){const a=n[o];if(e(a)){const l=t(a);return l===void 0?n.splice(o,1):n[o]=l,s?l===void 0&&n.claim_info.last_index--:n.claim_info.last_index=o,a}}return i()})();return r.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1,r}function ba(n,e,t,i){return Ta(n,s=>s.nodeName===e,s=>{const r=[];for(let o=0;o<s.attributes.length;o++){const a=s.attributes[o];t[a.name]||r.push(a.name)}r.forEach(o=>s.removeAttribute(o))},()=>i(e))}function K(n,e,t){return ba(n,e,t,B)}function U0(n,e,t){return ba(n,e,t,Ef)}function mn(n,e){return Ta(n,t=>t.nodeType===3,t=>{const i=""+e;if(t.data.startsWith(i)){if(t.data.length!==i.length)return t.splitText(i.length)}else t.data=i},()=>mt(e),!0)}function yn(n){return mn(n," ")}function Sa(n,e,t){for(let i=t;i<n.length;i+=1){const s=n[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return n.length}function kf(n){const e=Sa(n,"HTML_TAG_START",0),t=Sa(n,"HTML_TAG_END",e);if(e===t)return new Xs;Ia(n);const i=n.splice(e,t+1);y(i[0]),y(i[i.length-1]);const s=i.slice(1,i.length-1);for(const r of s)r.claim_order=n.claim_info.total_claimed,n.claim_info.total_claimed+=1;return new Xs(s)}function Ci(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function V0(n,e){n.value=e==null?"":e}function F0(n,e,t){n.classList[t?"add":"remove"](e)}function Aa(n,e,t=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,!1,e),i}function q0(n,e=document.body){return Array.from(e.querySelectorAll(n))}class If{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,i=null){this.e||(this.e=B(t.nodeName),this.t=t,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)vf(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(y)}}class Xs extends If{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}}const Zs=new Set;let Ri=0;function Tf(n){let e=5381,t=n.length;for(;t--;)e=(e<<5)-e^n.charCodeAt(t);return e>>>0}function Ca(n,e,t,i,s,r,o,a=0){const l=16.666/i;let c=`{
`;for(let k=0;k<=1;k+=l){const C=e+(t-e)*r(k);c+=k*100+`%{${o(C,1-C)}}
`}const u=c+`100% {${o(t,1-t)}}
}`,h=`__svelte_${Tf(u)}_${a}`,f=ka(n);Zs.add(f);const d=f.__svelte_stylesheet||(f.__svelte_stylesheet=_f(n).sheet),p=f.__svelte_rules||(f.__svelte_rules={});p[h]||(p[h]=!0,d.insertRule(`@keyframes ${h} ${u}`,d.cssRules.length));const I=n.style.animation||"";return n.style.animation=`${I?`${I}, `:""}${h} ${i}ms linear ${s}ms 1 both`,Ri+=1,h}function er(n,e){const t=(n.style.animation||"").split(", "),i=t.filter(e?r=>r.indexOf(e)<0:r=>r.indexOf("__svelte")===-1),s=t.length-i.length;s&&(n.style.animation=i.join(", "),Ri-=s,Ri||bf())}function bf(){Ys(()=>{Ri||(Zs.forEach(n=>{const e=n.__svelte_stylesheet;let t=e.cssRules.length;for(;t--;)e.deleteRule(t);n.__svelte_rules={}}),Zs.clear())})}let _n;function wn(n){_n=n}function vn(){if(!_n)throw new Error("Function called outside component initialization");return _n}function Ra(n){vn().$$.on_mount.push(n)}function Sf(n){vn().$$.after_update.push(n)}function Na(){const n=vn();return(e,t)=>{const i=n.$$.callbacks[e];if(i){const s=Aa(e,t);i.slice().forEach(r=>{r.call(n,s)})}}}function Af(n,e){vn().$$.context.set(n,e)}function Cf(n){return vn().$$.context.get(n)}const En=[],Da=[],Ni=[],tr=[],Rf=Promise.resolve();let nr=!1;function Nf(){nr||(nr=!0,Rf.then($a))}function kn(n){Ni.push(n)}function B0(n){tr.push(n)}const ir=new Set;let Di=0;function $a(){const n=_n;do{for(;Di<En.length;){const e=En[Di];Di++,wn(e),Df(e.$$)}for(wn(null),En.length=0,Di=0;Da.length;)Da.pop()();for(let e=0;e<Ni.length;e+=1){const t=Ni[e];ir.has(t)||(ir.add(t),t())}Ni.length=0}while(En.length);for(;tr.length;)tr.pop()();nr=!1,ir.clear(),wn(n)}function Df(n){if(n.fragment!==null){n.update(),Ut(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(kn)}}let In;function Oa(){return In||(In=Promise.resolve(),In.then(()=>{In=null})),In}function $i(n,e,t){n.dispatchEvent(Aa(`${e?"intro":"outro"}${t}`))}const Oi=new Set;let tt;function Y(){tt={r:0,c:[],p:tt}}function X(){tt.r||Ut(tt.c),tt=tt.p}function m(n,e){n&&n.i&&(Oi.delete(n),n.i(e))}function _(n,e,t,i){if(n&&n.o){if(Oi.has(n))return;Oi.add(n),tt.c.push(()=>{Oi.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}}const La={duration:0};function z0(n,e,t){let i=e(n,t),s=!1,r,o,a=0;function l(){r&&er(n,r)}function c(){const{delay:h=0,duration:f=300,easing:d=fa,tick:p=ee,css:I}=i||La;I&&(r=Ca(n,0,1,f,h,d,I,a++)),p(0,1);const k=wa()+h,C=k+f;o&&o.abort(),s=!0,kn(()=>$i(n,!0,"start")),o=Ea(P=>{if(s){if(P>=C)return p(1,0),$i(n,!0,"end"),l(),s=!1;if(P>=k){const ce=d((P-k)/f);p(ce,1-ce)}}return s})}let u=!1;return{start(){u||(u=!0,er(n),Js(i)?(i=i(),Oa().then(c)):c())},invalidate(){u=!1},end(){s&&(l(),s=!1)}}}function j0(n,e,t){let i=e(n,t),s=!0,r;const o=tt;o.r+=1;function a(){const{delay:l=0,duration:c=300,easing:u=fa,tick:h=ee,css:f}=i||La;f&&(r=Ca(n,1,0,c,l,u,f));const d=wa()+l,p=d+c;kn(()=>$i(n,!1,"start")),Ea(I=>{if(s){if(I>=p)return h(0,1),$i(n,!1,"end"),--o.r||Ut(o.c),!1;if(I>=d){const k=u((I-d)/c);h(1-k,k)}}return s})}return Js(i)?Oa().then(()=>{i=i(),a()}):a(),{end(l){l&&i.tick&&i.tick(1,0),s&&(r&&er(n,r),s=!1)}}}function H0(n,e){_(n,1,1,()=>{e.delete(n.key)})}function K0(n,e,t,i,s,r,o,a,l,c,u,h){let f=n.length,d=r.length,p=f;const I={};for(;p--;)I[n[p].key]=p;const k=[],C=new Map,P=new Map;for(p=d;p--;){const M=h(s,r,p),ue=t(M);let me=o.get(ue);me?i&&me.p(M,e):(me=c(ue,M),me.c()),C.set(ue,k[p]=me),ue in I&&P.set(ue,Math.abs(p-I[ue]))}const ce=new Set,pe=new Set;function ve(M){m(M,1),M.m(a,u),o.set(M.key,M),u=M.first,d--}for(;f&&d;){const M=k[d-1],ue=n[f-1],me=M.key,ze=ue.key;M===ue?(u=M.first,f--,d--):C.has(ze)?!o.has(me)||ce.has(me)?ve(M):pe.has(ze)?f--:P.get(me)>P.get(ze)?(pe.add(me),ve(M)):(ce.add(ze),f--):(l(ue,o),f--)}for(;f--;){const M=n[f];C.has(M.key)||l(M,o)}for(;d;)ve(k[d-1]);return k}function qt(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Bt(n){return typeof n=="object"&&n!==null?n:{}}function W0(n,e,t){const i=n.$$.props[e];i!==void 0&&(n.$$.bound[i]=t,t(n.$$.ctx[i]))}function F(n){n&&n.c()}function ge(n,e){n&&n.l(e)}function U(n,e,t,i){const{fragment:s,on_mount:r,on_destroy:o,after_update:a}=n.$$;s&&s.m(e,t),i||kn(()=>{const l=r.map(da).filter(Js);o?o.push(...l):Ut(l),n.$$.on_mount=[]}),a.forEach(kn)}function V(n,e){const t=n.$$;t.fragment!==null&&(Ut(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function $f(n,e){n.$$.dirty[0]===-1&&(En.push(n),Nf(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function te(n,e,t,i,s,r,o,a=[-1]){const l=_n;wn(n);const c=n.$$={fragment:null,ctx:null,props:r,update:ee,not_equal:s,bound:pa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:pa(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,f,...d)=>{const p=d.length?d[0]:f;return c.ctx&&s(c.ctx[h],c.ctx[h]=p)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](p),u&&$f(n,h)),f}):[],c.update(),u=!0,Ut(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){df();const h=J(e.target);c.fragment&&c.fragment.l(h),h.forEach(y)}else c.fragment&&c.fragment.c();e.intro&&m(n.$$.fragment),U(n,e.target,e.anchor,e.customElement),pf(),$a()}wn(l)}class ne{$destroy(){V(this,1),this.$destroy=ee}$on(e,t){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!uf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const zt=[];function G0(n,e=ee){let t;const i=new Set;function s(a){if(Q(n,a)&&(n=a,t)){const l=!zt.length;for(const c of i)c[1](),zt.push(c,n);if(l){for(let c=0;c<zt.length;c+=2)zt[c][0](zt[c+1]);zt.length=0}}}function r(a){s(a(n))}function o(a,l=ee){const c=[a,l];return i.add(c),i.size===1&&(t=e(s)||ee),a(n),()=>{i.delete(c),i.size===0&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}const Of="(prefers-color-scheme: dark)";function Lf(n,e,t){let{theme:i="dark"}=e,{key:s="theme"}=e;const r={dark:"dark",light:"light"},o=Na(),a=c=>c in r,l=c=>t(0,i=c.matches?r.dark:r.light);return Ra(()=>{const c=matchMedia(Of),u=localStorage.getItem(s);return a(u)?t(0,i=u):t(0,i=c.matches?r.dark:r.light),c.addEventListener("change",l),()=>{c.removeEventListener("change",l)}}),Sf(()=>{a(i)&&(o("change",i),localStorage.setItem(s,i))}),n.$$set=c=>{"theme"in c&&t(0,i=c.theme),"key"in c&&t(1,s=c.key)},[i,s]}class Q0 extends ne{constructor(e){super();te(this,e,Lf,null,Q,{theme:0,key:1})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)==55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)==56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},xf=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),i.push(t[u],t[h],t[f],t[d])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(i.push(f),c!==64){const d=a<<4&240|c>>2;if(i.push(d),h!==64){const p=c<<6&192|h;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Uf=function(n){try{return Mf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function xa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ma(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ff(){return ye().indexOf("Electron/")>=0}function Ua(){const n=ye();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qf(){return ye().indexOf("MSAppHost/")>=0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="FirebaseError";class jt extends Error{constructor(e,t,i){super(t);this.code=e,this.customData=i,this.name=Bf,Object.setPrototypeOf(this,jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?zf(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new jt(s,a,i)}}function zf(n,e){return n.replace(jf,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const jf=/\{\$([^}]+)}/g;function Hf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Li(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Va(r)&&Va(o)){if(!Li(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Va(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Sn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function An(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Kf(n,e){const t=new Wf(n,e);return t.subscribe.bind(t)}class Wf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Gf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=sr),s.error===void 0&&(s.error=sr),s.complete===void 0&&(s.complete=sr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n){return n&&n._delegate?n._delegate:n}class Ht{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Vf;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yf(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(!!i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Jf(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jf(n){return n===yt?void 0:n}function Yf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Zf={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},ed=q.INFO,td={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},nd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=td[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rr{constructor(e){this.name=e,this._logLevel=ed,this._logHandler=nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function sd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const or="@firebase/app",Fa="0.7.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new rr("@firebase/app"),rd="@firebase/app-compat",od="@firebase/analytics-compat",ad="@firebase/analytics",ld="@firebase/app-check-compat",cd="@firebase/app-check",ud="@firebase/auth",hd="@firebase/auth-compat",fd="@firebase/database",dd="@firebase/database-compat",pd="@firebase/functions",gd="@firebase/functions-compat",md="@firebase/installations",yd="@firebase/installations-compat",_d="@firebase/messaging",wd="@firebase/messaging-compat",vd="@firebase/performance",Ed="@firebase/performance-compat",kd="@firebase/remote-config",Id="@firebase/remote-config-compat",Td="@firebase/storage",bd="@firebase/storage-compat",Sd="@firebase/firestore",Ad="@firebase/firestore-compat",Cd="firebase",Rd="9.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="[DEFAULT]",Nd={[or]:"fire-core",[rd]:"fire-core-compat",[ad]:"fire-analytics",[od]:"fire-analytics-compat",[cd]:"fire-app-check",[ld]:"fire-app-check-compat",[ud]:"fire-auth",[hd]:"fire-auth-compat",[fd]:"fire-rtdb",[dd]:"fire-rtdb-compat",[pd]:"fire-fn",[gd]:"fire-fn-compat",[md]:"fire-iid",[yd]:"fire-iid-compat",[_d]:"fire-fcm",[wd]:"fire-fcm-compat",[vd]:"fire-perf",[Ed]:"fire-perf-compat",[kd]:"fire-rc",[Id]:"fire-rc-compat",[Td]:"fire-gcs",[bd]:"fire-gcs-compat",[Sd]:"fire-fst",[Ad]:"fire-fst-compat","fire-js":"fire-js",[Cd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map,lr=new Map;function Dd(n,e){try{n.container.addComponent(e)}catch(t){ar.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cn(n){const e=n.name;if(lr.has(e))return ar.debug(`There were multiple attempts to register component ${e}.`),!1;lr.set(e,n);for(const t of Pi.values())Dd(t,n);return!0}function cr(n,e){return n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},xi=new Tn("app","Firebase",$d);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ht("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=Rd;function J0(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:qa,automaticDataCollectionEnabled:!1},e),i=t.name;if(typeof i!="string"||!i)throw xi.create("bad-app-name",{appName:String(i)});const s=Pi.get(i);if(s){if(Li(n,s.options)&&Li(t,s.config))return s;throw xi.create("duplicate-app",{appName:i})}const r=new Xf(i);for(const a of lr.values())r.addComponent(a);const o=new Od(n,t,r);return Pi.set(i,o),o}function Ba(n=qa){const e=Pi.get(n);if(!e)throw xi.create("no-app",{appName:n});return e}function nt(n,e,t){var i;let s=(i=Nd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ar.warn(a.join(" "));return}Cn(new Ht(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(n){Cn(new Ht("platform-logger",e=>new id(e),"PRIVATE")),nt(or,Fa,n),nt(or,Fa,"esm2017"),nt("fire-js","")}Ld("");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ur(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function za(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pd=za,ja=new Tn("auth","Firebase",za());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=new rr("@firebase/auth");function Mi(n,...e){Ha.logLevel<=q.ERROR&&Ha.error(`Auth (${Rn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(n,...e){throw hr(n,...e)}function je(n,...e){return hr(n,...e)}function Ka(n,e,t){const i=Object.assign(Object.assign({},Pd()),{[e]:t});return new Tn("auth","Firebase",i).create(e,{appName:n.name})}function xd(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Be(n,"argument-error"),Ka(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ja.create(n,...e)}function D(n,e,...t){if(!n)throw hr(e,...t)}function Ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Mi(e),new Error(e)}function Qe(n,e){n||Ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map;function Je(n){Qe(n instanceof Function,"Expected a class definition");let e=Wa.get(n);return e?(Qe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wa.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n,e){const t=cr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Li(r,e!=null?e:{}))return s;Be(s,"already-initialized")}return t.initialize({options:e})}function Ud(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Je);(e==null?void 0:e.errorMap)&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Vd(){return Ga()==="http:"||Ga()==="https:"}function Ga(){var n;return typeof self!="undefined"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Vd()||xa()||"connection"in navigator)?navigator.onLine:!0}function qd(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qe(t>e,"Short delay should be less than long delay!"),this.isMobile=Pa()||Ma()}get(){return Fd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(n,e){Qe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Nn(3e4,6e4);function Dn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function $n(n,e,t,i,s={}){return Ja(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=bn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Qa.fetch()(Ya(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ja(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bd),e);try{const s=new jd(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw pr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw pr(n,"email-already-in-use",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ka(n,u,c);Be(n,u)}}catch(s){if(s instanceof jt)throw s;Be(n,"network-request-failed")}}async function On(n,e,t,i,s={}){const r=await $n(n,e,t,i,s);return"mfaPendingCredential"in r&&Be(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Ya(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?dr(n.config,s):`${n.config.apiScheme}://${s}`}class jd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(je(this.auth,"timeout")),zd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=je(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hd(n,e){return $n(n,"POST","/v1/accounts:delete",e)}async function Kd(n,e){return $n(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wd(n,e=!1){const t=Ee(n),i=await t.getIdToken(e),s=mr(i);D(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Ln(gr(s.auth_time)),issuedAtTime:Ln(gr(s.iat)),expirationTime:Ln(gr(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function gr(n){return Number(n)*1e3}function mr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uf(t);return s?JSON.parse(s):(Mi("Failed to decode base64 JWT payload"),null)}catch(s){return Mi("Caught error parsing JWT payload as JSON",s),null}}function Gd(n){const e=mr(n);return D(e,"internal-error"),D(typeof e.exp!="undefined","internal-error"),D(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof jt&&Qd(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Qd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Pn(n,Kd(t,{idToken:i}));D(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=((e=r.providerUserInfo)===null||e===void 0?void 0:e.length)?Zd(r.providerUserInfo):[],a=Xd(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a==null?void 0:a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Xa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Yd(n){const e=Ee(n);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xd(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Zd(n){return n.map(e=>{var{providerId:t}=e,i=ur(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ep(n,e){const t=await Ja(n,{},async()=>{const i=bn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Ya(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qa.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken!="undefined","internal-error"),D(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Gd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return D(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await ep(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new xn;return i&&(D(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(D(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xn,this.toJSON())}_performRefresh(){return Ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(n,e){D(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class _t{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=ur(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Jd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Xa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return D(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Wd(this,e)}reload(){return Yd(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new _t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ui(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pn(this,Hd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,d=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,C=(c=t.createdAt)!==null&&c!==void 0?c:void 0,P=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:ce,emailVerified:pe,isAnonymous:ve,providerData:M,stsTokenManager:ue}=t;D(ce&&ue,e,"internal-error");const me=xn.fromJSON(this.name,ue);D(typeof ce=="string",e,"internal-error"),it(h,e.name),it(f,e.name),D(typeof pe=="boolean",e,"internal-error"),D(typeof ve=="boolean",e,"internal-error"),it(d,e.name),it(p,e.name),it(I,e.name),it(k,e.name),it(C,e.name),it(P,e.name);const ze=new _t({uid:ce,auth:e,email:f,emailVerified:pe,displayName:h,isAnonymous:ve,photoURL:p,phoneNumber:d,tenantId:I,stsTokenManager:me,createdAt:C,lastLoginAt:P});return M&&Array.isArray(M)&&(ze.providerData=M.map(of=>Object.assign({},of))),k&&(ze._redirectEventId=k),ze}static async _fromIdTokenResponse(e,t,i=!1){const s=new xn;s.updateFromServerResponse(t);const r=new _t({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ui(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Za.type="NONE";const el=Za;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(n,e,t){return`firebase:${n}:${e}:${t}`}class Kt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Vi(this.userKey,s.apiKey,r),this.fullPersistenceKey=Vi("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Kt(Je(el),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Je(el);const o=Vi(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=_t._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Kt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Kt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ol(e))return"Blackberry";if(al(e))return"Webos";if(yr(e))return"Safari";if((e.includes("chrome/")||il(e))&&!e.includes("edge/"))return"Chrome";if(rl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function nl(n=ye()){return/firefox\//i.test(n)}function yr(n=ye()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function il(n=ye()){return/crios\//i.test(n)}function sl(n=ye()){return/iemobile/i.test(n)}function rl(n=ye()){return/android/i.test(n)}function ol(n=ye()){return/blackberry/i.test(n)}function al(n=ye()){return/webos/i.test(n)}function Fi(n=ye()){return/iphone|ipad|ipod/i.test(n)}function tp(n=ye()){var e;return Fi(n)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function np(){return Ua()&&document.documentMode===10}function ll(n=ye()){return Fi(n)||rl(n)||al(n)||ol(n)||/windows phone/i.test(n)||sl(n)}function ip(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e=[]){let t;switch(n){case"Browser":t=tl(ye());break;case"Worker":t=`${tl(ye())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rn}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ul(this),this.idTokenSubscription=new ul(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ja,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Je(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),!this._deleted)){if((i=this._popupRedirectResolver)===null||i===void 0?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let i=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,r=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===r)&&(o==null?void 0:o.user)&&(i=o.user)}return i?i._redirectEventId?(D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ee(e):null;return t&&D(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Je(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Je(e)||this._popupRedirectResolver;D(t,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Je(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return D(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Mn(n){return Ee(n)}class ul{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kf(t=>this.observer=t)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ge("not implemented")}_getIdTokenResponse(e){return Ge("not implemented")}_linkToIdToken(e,t){return Ge("not implemented")}_getReauthenticationResolver(e){return Ge("not implemented")}}async function rp(n,e){return $n(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function op(n,e){return On(n,"POST","/v1/accounts:signInWithPassword",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(n,e){return On(n,"POST","/v1/accounts:signInWithEmailLink",Dn(n,e))}async function lp(n,e){return On(n,"POST","/v1/accounts:signInWithEmailLink",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends _r{constructor(e,t,i,s=null){super("password",i);this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Un(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Un(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return op(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ap(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return rp(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lp(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wt(n,e){return On(n,"POST","/v1/accounts:signInWithIdp",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp="http://localhost";class wt extends _r{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const t=new wt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=ur(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new wt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Wt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Wt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wt(e,t)}buildRequest(){const e={requestUri:cp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hp(n){const e=Sn(An(n)).link,t=e?Sn(An(e)).deep_link_id:null,i=Sn(An(n)).deep_link_id;return(i?Sn(An(i)).link:null)||i||t||e||n}class wr{constructor(e){var t,i,s,r,o,a;const l=Sn(An(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,h=up((s=l.mode)!==null&&s!==void 0?s:null);D(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=hp(e);try{return new wr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.providerId=Gt.PROVIDER_ID}static credential(e,t){return Un._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=wr.parseLink(t);return D(i,"argument-error"),Un._fromEmailAndCode(e,i.code,i.tenantId)}}Gt.PROVIDER_ID="password";Gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends vr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st extends Vn{constructor(){super("facebook.com")}static credential(e){return wt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return st.credential(e.oauthAccessToken)}catch{return null}}}st.FACEBOOK_SIGN_IN_METHOD="facebook.com";st.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Vn{constructor(){super("google.com");this.addScope("profile")}static credential(e,t){return wt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return rt.credential(t,i)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Vn{constructor(){super("github.com")}static credential(e){return wt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ot.credential(e.oauthAccessToken)}catch{return null}}}ot.GITHUB_SIGN_IN_METHOD="github.com";ot.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Vn{constructor(){super("twitter.com")}static credential(e,t){return wt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return at.credential(t,i)}catch{return null}}}at.TWITTER_SIGN_IN_METHOD="twitter.com";at.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fp(n,e){return On(n,"POST","/v1/accounts:signUp",Dn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await _t._fromIdTokenResponse(e,i,s),o=hl(i);return new vt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=hl(i);return new vt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function hl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends jt{constructor(e,t,i,s){var r;super(t.code,t.message);this.operationType=i,this.user=s,Object.setPrototypeOf(this,qi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new qi(e,t,i,s)}}function fl(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?qi._fromErrorAndOperation(n,r,e,i):r})}async function dp(n,e,t=!1){const i=await Pn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Pn(n,fl(i,s,e,n),t);D(r.idToken,i,"internal-error");const o=mr(r.idToken);D(o,i,"internal-error");const{sub:a}=o;return D(n.uid===a,i,"user-mismatch"),vt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Be(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dl(n,e,t=!1){const i="signIn",s=await fl(n,i,e),r=await vt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function gp(n,e){return dl(Mn(n),e)}async function Y0(n,e,t){const i=Mn(n),s=await fp(i,{returnSecureToken:!0,email:e,password:t}),r=await vt._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function X0(n,e,t){return gp(Ee(n),Gt.credential(e,t))}function Z0(n,e,t,i){return Ee(n).onAuthStateChanged(e,t,i)}function eE(n){return Ee(n).signOut()}const Bi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Bi,"1"),this.storage.removeItem(Bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(){const n=ye();return yr(n)||Fi(n)}const yp=1e3,_p=10;class gl extends pl{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mp()&&ip(),this.fallbackToPolling=ll(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);np()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_p):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},yp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gl.type="LOCAL";const wp=gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends pl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ml.type="SESSION";const yl=ml;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new zi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o==null?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await vp(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Er("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return window}function kp(n){He().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return typeof He().WorkerGlobalScope!="undefined"&&typeof He().importScripts=="function"}async function Ip(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tp(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function bp(){return _l()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="firebaseLocalStorageDb",Sp=1,ji="firebaseLocalStorage",vl="fbase_key";class Fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hi(n,e){return n.transaction([ji],e?"readwrite":"readonly").objectStore(ji)}function Ap(){const n=indexedDB.deleteDatabase(wl);return new Fn(n).toPromise()}function kr(){const n=indexedDB.open(wl,Sp);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ji,{keyPath:vl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ji)?e(i):(i.close(),await Ap(),e(await kr()))})})}async function El(n,e,t){const i=Hi(n,!0).put({[vl]:e,value:t});return new Fn(i).toPromise()}async function Cp(n,e){const t=Hi(n,!1).get(e),i=await new Fn(t).toPromise();return i===void 0?null:i.value}function kl(n,e){const t=Hi(n,!0).delete(e);return new Fn(t).toPromise()}const Rp=800,Np=3;class Il{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Np)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zi._getInstance(bp()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ip(),!this.activeServiceWorker)return;this.sender=new Ep(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((t=i[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kr();return await El(e,Bi,"1"),await kl(e,Bi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>El(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Cp(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Hi(s,!1).getAll();return new Fn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Il.type="LOCAL";const Dp=Il;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Op(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=je("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",$p().appendChild(i)})}function Lp(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Nn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n,e){return e?Je(e):(D(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends _r{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return Wt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pp(n){return dl(n.auth,new Ir(n),n.bypassAuthState)}function xp(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),pp(t,new Ir(n),n.bypassAuthState)}async function Mp(n){const{auth:e,user:t}=n;return D(t,e,"internal-error"),dp(t,new Ir(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pp;case"linkViaPopup":case"linkViaRedirect":return Mp;case"reauthViaPopup":case"reauthViaRedirect":return xp;default:Be(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Nn(2e3,1e4);async function tE(n,e,t){const i=Mn(n);xd(n,e,vr);const s=Tl(i,t);return new Et(i,"signInViaPopup",e,s).executeNotNull()}class Et extends bl{constructor(e,t,i,s,r){super(e,t,s,r);this.provider=i,this.authWindow=null,this.pollId=null,Et.currentPopupAction&&Et.currentPopupAction.cancel(),Et.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Er();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Et.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0?void 0:i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Up.get())};e()}}Et.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp="pendingRedirect",Tr=new Map;class Fp extends bl{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i);this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const i=await qp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qp(n,e){const t=zp(e),i=Bp(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Bp(n){return Je(n._redirectPersistence)}function zp(n){return Vi(Vp,n.config.apiKey,n.name)}async function jp(n,e,t=!1){const i=Mn(n),s=Tl(i,e),o=await new Fp(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=10*60*1e3;class Kp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Wp(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Al(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(je(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Hp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sl(e))}saveEventToCache(e){this.cachedEventUids.add(Sl(e)),this.lastProcessedEventTime=Date.now()}}function Sl(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Al({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Wp(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Al(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gp(n,e={}){return $n(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jp=/^https?/;async function Yp(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Gp(n);for(const t of e)try{if(Xp(t))return}catch{}Be(n,"unauthorized-domain")}function Xp(n){const e=fr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Jp.test(t))return!1;if(Qp.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new Nn(3e4,6e4);function Cl(){const n=He().___jsl;if(n==null?void 0:n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function eg(n){return new Promise((e,t)=>{var i,s,r;function o(){Cl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cl(),t(je(n,"network-request-failed"))},timeout:Zp.get()})}if((s=(i=He().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0?void 0:s.Iframe)e(gapi.iframes.getContext());else if((r=He().gapi)===null||r===void 0?void 0:r.load)o();else{const a=Lp("iframefcb");return He()[a]=()=>{gapi.load?o():t(je(n,"network-request-failed"))},Op(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ki=null,e})}let Ki=null;function tg(n){return Ki=Ki||eg(n),Ki}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=new Nn(5e3,15e3),ig="__/auth/iframe",sg="emulator/auth/iframe",rg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ag(n){const e=n.config;D(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dr(e,sg):`https://${n.config.authDomain}/${ig}`,i={apiKey:e.apiKey,appName:n.name,v:Rn},s=og.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${bn(i).slice(1)}`}async function lg(n){const e=await tg(n),t=He().gapi;return D(t,n,"internal-error"),e.open({where:document.body,url:ag(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rg,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=je(n,"network-request-failed"),a=He().setTimeout(()=>{r(o)},ng.get());function l(){He().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ug=500,hg=600,fg="_blank",dg="http://localhost";class Rl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pg(n,e,t,i=ug,s=hg){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},cg),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ye().toLowerCase();t&&(a=il(c)?fg:t),nl(c)&&(e=e||dg,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[d,p])=>`${f}${d}=${p},`,"");if(tp(c)&&a!=="_self")return gg(e||"",a),new Rl(null);const h=window.open(e||"",a,u);D(h,n,"popup-blocked");try{h.focus()}catch{}return new Rl(h)}function gg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="__/auth/handler",yg="emulator/auth/handler";function Nl(n,e,t,i,s,r){D(n.config.authDomain,n,"auth-domain-config-required"),D(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Rn,eventId:s};if(e instanceof vr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Hf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof Vn){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${_g(n)}?${bn(a).slice(1)}`}function _g({config:n}){return n.emulator?dr(n,yg):`https://${n.authDomain}/${mg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="webStorageSupport";class wg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yl,this._completeRedirectFn=jp}async _openPopup(e,t,i,s){var r;Qe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=Nl(e,t,i,fr(),s);return pg(e,o,Er())}async _openRedirect(e,t,i,s){return await this._originValidation(e),kp(Nl(e,t,i,fr(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Qe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await lg(e),i=new Kp(e);return t.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(br,{type:br},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[br];o!==void 0&&t(!!o),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ll()||yr()||Fi()}}const vg=wg;var Dl="@firebase/auth",$l="0.19.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{var s;e(((s=i)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ig(n){Cn(new Ht("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),{apiKey:s,authDomain:r}=i.options;return(o=>{D(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),D(!(r==null?void 0:r.includes(":")),"argument-error",{appName:o.name});const a={apiKey:s,authDomain:r,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cl(n)},l=new sp(o,a);return Ud(l,t),l})(i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Cn(new Ht("auth-internal",e=>{const t=Mn(e.getProvider("auth").getImmediate());return(i=>new Eg(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(Dl,$l,kg(n)),nt(Dl,$l,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(n=Ba()){const e=cr(n,"auth");return e.isInitialized()?e.getImmediate():Md(n,{popupRedirectResolver:vg,persistence:[Dp,wp,yl]})}Ig("Browser");var Tg="firebase",bg="9.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(Tg,bg,"app");var Sg=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},v,Sr=Sr||{},$=Sg||self;function Wi(){}function Ar(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function qn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Ag(n){return Object.prototype.hasOwnProperty.call(n,Cr)&&n[Cr]||(n[Cr]=++Cg)}var Cr="closure_uid_"+(1e9*Math.random()>>>0),Cg=0;function Rg(n,e,t){return n.call.apply(n.bind,arguments)}function Ng(n,e,t){if(!n)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function ke(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ke=Rg:ke=Ng,ke.apply(null,arguments)}function Gi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var i=t.slice();return i.push.apply(i,arguments),n.apply(this,i)}}function Ie(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function lt(){this.s=this.s,this.o=this.o}var Dg=0,$g={};lt.prototype.s=!1;lt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Dg!=0)){var n=Ag(this);delete $g[n]}};lt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ol=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Ll=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const i=n.length,s=typeof n=="string"?n.split(""):n;for(let r=0;r<i;r++)r in s&&e.call(t,s[r],r,n)};function Og(n){e:{var e=Tm;const t=n.length,i=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in i&&e.call(void 0,i[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Pl(n){return Array.prototype.concat.apply([],arguments)}function Rr(n){const e=n.length;if(0<e){const t=Array(e);for(let i=0;i<e;i++)t[i]=n[i];return t}return[]}function Qi(n){return/^[\s\xa0]*$/.test(n)}var xl=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function $e(n,e){return n.indexOf(e)!=-1}function Nr(n,e){return n<e?-1:n>e?1:0}var Oe;e:{var Ml=$.navigator;if(Ml){var Ul=Ml.userAgent;if(Ul){Oe=Ul;break e}}Oe=""}function Dr(n,e,t){for(const i in n)e.call(t,n[i],i,n)}function Vl(n){const e={};for(const t in n)e[t]=n[t];return e}var Fl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ql(n,e){let t,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(t in i)n[t]=i[t];for(let r=0;r<Fl.length;r++)t=Fl[r],Object.prototype.hasOwnProperty.call(i,t)&&(n[t]=i[t])}}function $r(n){return $r[" "](n),n}$r[" "]=Wi;function Lg(n){var e=Mg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Pg=$e(Oe,"Opera"),Qt=$e(Oe,"Trident")||$e(Oe,"MSIE"),Bl=$e(Oe,"Edge"),Or=Bl||Qt,zl=$e(Oe,"Gecko")&&!($e(Oe.toLowerCase(),"webkit")&&!$e(Oe,"Edge"))&&!($e(Oe,"Trident")||$e(Oe,"MSIE"))&&!$e(Oe,"Edge"),xg=$e(Oe.toLowerCase(),"webkit")&&!$e(Oe,"Edge");function jl(){var n=$.document;return n?n.documentMode:void 0}var Ji;e:{var Lr="",Pr=function(){var n=Oe;if(zl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Bl)return/Edge\/([\d\.]+)/.exec(n);if(Qt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(xg)return/WebKit\/(\S+)/.exec(n);if(Pg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Pr&&(Lr=Pr?Pr[1]:""),Qt){var xr=jl();if(xr!=null&&xr>parseFloat(Lr)){Ji=String(xr);break e}}Ji=Lr}var Mg={};function Ug(){return Lg(function(){let n=0;const e=xl(String(Ji)).split("."),t=xl("9").split("."),i=Math.max(e.length,t.length);for(let o=0;n==0&&o<i;o++){var s=e[o]||"",r=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s[0].length==0&&r[0].length==0)break;n=Nr(s[1].length==0?0:parseInt(s[1],10),r[1].length==0?0:parseInt(r[1],10))||Nr(s[2].length==0,r[2].length==0)||Nr(s[2],r[2]),s=s[3],r=r[3]}while(n==0)}return 0<=n})}var Mr;if($.document&&Qt){var Hl=jl();Mr=Hl||parseInt(Ji,10)||void 0}else Mr=void 0;var Vg=Mr,Fg=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{$.addEventListener("test",Wi,e),$.removeEventListener("test",Wi,e)}catch{}return n}();function Ae(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ae.prototype.h=function(){this.defaultPrevented=!0};function Bn(n,e){if(Ae.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,i=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(zl){e:{try{$r(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:qg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Bn.Z.h.call(this)}}Ie(Bn,Ae);var qg={2:"touch",3:"pen",4:"mouse"};Bn.prototype.h=function(){Bn.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var zn="closure_listenable_"+(1e6*Math.random()|0),Bg=0;function zg(n,e,t,i,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!i,this.ia=s,this.key=++Bg,this.ca=this.fa=!1}function Yi(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function Xi(n){this.src=n,this.g={},this.h=0}Xi.prototype.add=function(n,e,t,i,s){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var o=Vr(n,e,i,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new zg(e,this.src,r,!!i,s),e.fa=t,n.push(e)),e};function Ur(n,e){var t=e.type;if(t in n.g){var i=n.g[t],s=Ol(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Yi(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Vr(n,e,t,i){for(var s=0;s<n.length;++s){var r=n[s];if(!r.ca&&r.listener==e&&r.capture==!!t&&r.ia==i)return s}return-1}var Fr="closure_lm_"+(1e6*Math.random()|0),qr={};function Kl(n,e,t,i,s){if(i&&i.once)return Gl(n,e,t,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Kl(n,e[r],t,i,s);return null}return t=Hr(t),n&&n[zn]?n.N(e,t,qn(i)?!!i.capture:!!i,s):Wl(n,e,t,!1,i,s)}function Wl(n,e,t,i,s,r){if(!e)throw Error("Invalid event type");var o=qn(s)?!!s.capture:!!s,a=zr(n);if(a||(n[Fr]=a=new Xi(n)),t=a.add(e,t,i,o,r),t.proxy)return t;if(i=jg(),t.proxy=i,i.src=n,i.listener=t,n.addEventListener)Fg||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),i,s);else if(n.attachEvent)n.attachEvent(Jl(e.toString()),i);else if(n.addListener&&n.removeListener)n.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return t}function jg(){function n(t){return e.call(n.src,n.listener,t)}var e=Hg;return n}function Gl(n,e,t,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Gl(n,e[r],t,i,s);return null}return t=Hr(t),n&&n[zn]?n.O(e,t,qn(i)?!!i.capture:!!i,s):Wl(n,e,t,!0,i,s)}function Ql(n,e,t,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Ql(n,e[r],t,i,s);else i=qn(i)?!!i.capture:!!i,t=Hr(t),n&&n[zn]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Vr(r,t,i,s),-1<t&&(Yi(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=zr(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Vr(e,t,i,s)),(t=-1<n?e[n]:null)&&Br(t))}function Br(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[zn])Ur(e.i,n);else{var t=n.type,i=n.proxy;e.removeEventListener?e.removeEventListener(t,i,n.capture):e.detachEvent?e.detachEvent(Jl(t),i):e.addListener&&e.removeListener&&e.removeListener(i),(t=zr(e))?(Ur(t,n),t.h==0&&(t.src=null,e[Fr]=null)):Yi(n)}}}function Jl(n){return n in qr?qr[n]:qr[n]="on"+n}function Hg(n,e){if(n.ca)n=!0;else{e=new Bn(e,this);var t=n.listener,i=n.ia||n.src;n.fa&&Br(n),n=t.call(i,e)}return n}function zr(n){return n=n[Fr],n instanceof Xi?n:null}var jr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(n){return typeof n=="function"?n:(n[jr]||(n[jr]=function(e){return n.handleEvent(e)}),n[jr])}function _e(){lt.call(this),this.i=new Xi(this),this.P=this,this.I=null}Ie(_e,lt);_e.prototype[zn]=!0;_e.prototype.removeEventListener=function(n,e,t,i){Ql(this,n,e,t,i)};function Te(n,e){var t,i=n.I;if(i)for(t=[];i;i=i.I)t.push(i);if(n=n.P,i=e.type||e,typeof e=="string")e=new Ae(e,n);else if(e instanceof Ae)e.target=e.target||n;else{var s=e;e=new Ae(i,n),ql(e,s)}if(s=!0,t)for(var r=t.length-1;0<=r;r--){var o=e.g=t[r];s=Zi(o,i,!0,e)&&s}if(o=e.g=n,s=Zi(o,i,!0,e)&&s,s=Zi(o,i,!1,e)&&s,t)for(r=0;r<t.length;r++)o=e.g=t[r],s=Zi(o,i,!1,e)&&s}_e.prototype.M=function(){if(_e.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],i=0;i<t.length;i++)Yi(t[i]);delete n.g[e],n.h--}}this.I=null};_e.prototype.N=function(n,e,t,i){return this.i.add(String(n),e,!1,t,i)};_e.prototype.O=function(n,e,t,i){return this.i.add(String(n),e,!0,t,i)};function Zi(n,e,t,i){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==t){var a=o.listener,l=o.ia||o.src;o.fa&&Ur(n.i,o),s=a.call(l,i)!==!1&&s}}return s&&!i.defaultPrevented}var Kr=$.JSON.stringify;function Kg(){var n=Xl;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Wg{constructor(){this.h=this.g=null}add(e,t){const i=Yl.get();i.set(e,t),this.h?this.h.next=i:this.g=i,this.h=i}}var Yl=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Gg,n=>n.reset());class Gg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Qg(n){$.setTimeout(()=>{throw n},0)}function Wr(n,e){Gr||Jg(),Qr||(Gr(),Qr=!0),Xl.add(n,e)}var Gr;function Jg(){var n=$.Promise.resolve(void 0);Gr=function(){n.then(Yg)}}var Qr=!1,Xl=new Wg;function Yg(){for(var n;n=Kg();){try{n.h.call(n.g)}catch(t){Qg(t)}var e=Yl;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Qr=!1}function es(n,e){_e.call(this),this.h=n||1,this.g=e||$,this.j=ke(this.kb,this),this.l=Date.now()}Ie(es,_e);v=es.prototype;v.da=!1;v.S=null;v.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Te(this,"tick"),this.da&&(Jr(this),this.start()))}};v.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Jr(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}v.M=function(){es.Z.M.call(this),Jr(this),delete this.g};function Yr(n,e,t){if(typeof n=="function")t&&(n=ke(n,t));else if(n&&typeof n.handleEvent=="function")n=ke(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(n,e||0)}function Zl(n){n.g=Yr(()=>{n.g=null,n.i&&(n.i=!1,Zl(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Xg extends lt{constructor(e,t){super();this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Zl(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jn(n){lt.call(this),this.h=n,this.g={}}Ie(jn,lt);var ec=[];function tc(n,e,t,i){Array.isArray(t)||(t&&(ec[0]=t.toString()),t=ec);for(var s=0;s<t.length;s++){var r=Kl(e,t[s],i||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function nc(n){Dr(n.g,function(e,t){this.g.hasOwnProperty(t)&&Br(e)},n),n.g={}}jn.prototype.M=function(){jn.Z.M.call(this),nc(this)};jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ts(){this.g=!0}ts.prototype.Aa=function(){this.g=!1};function Zg(n,e,t,i,s,r){n.info(function(){if(n.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function em(n,e,t,i,s,r,o){n.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+t+`
`+r+" "+o})}function Jt(n,e,t,i){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+nm(n,t)+(i?" "+i:"")})}function tm(n,e){n.info(function(){return"TIMEOUT: "+e})}ts.prototype.info=function(){};function nm(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var i=t[n];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Kr(t)}catch{return e}}var kt={},ic=null;function ns(){return ic=ic||new _e}kt.Ma="serverreachability";function sc(n){Ae.call(this,kt.Ma,n)}Ie(sc,Ae);function Hn(n){const e=ns();Te(e,new sc(e,n))}kt.STAT_EVENT="statevent";function rc(n,e){Ae.call(this,kt.STAT_EVENT,n),this.stat=e}Ie(rc,Ae);function Le(n){const e=ns();Te(e,new rc(e,n))}kt.Na="timingevent";function oc(n,e){Ae.call(this,kt.Na,n),this.size=e}Ie(oc,Ae);function Kn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){n()},e)}var is={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ac={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Xr(){}Xr.prototype.h=null;function lc(n){return n.h||(n.h=n.i())}function cc(){}var Wn={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Zr(){Ae.call(this,"d")}Ie(Zr,Ae);function eo(){Ae.call(this,"c")}Ie(eo,Ae);var to;function ss(){}Ie(ss,Xr);ss.prototype.g=function(){return new XMLHttpRequest};ss.prototype.i=function(){return{}};to=new ss;function Gn(n,e,t,i){this.l=n,this.j=e,this.m=t,this.X=i||1,this.V=new jn(this),this.P=im,n=Or?125:void 0,this.W=new es(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new uc}function uc(){this.i=null,this.g="",this.h=!1}var im=45e3,no={},rs={};v=Gn.prototype;v.setTimeout=function(n){this.P=n};function io(n,e,t){n.K=1,n.v=us(Ye(e)),n.s=t,n.U=!0,hc(n,null)}function hc(n,e){n.F=Date.now(),Qn(n),n.A=Ye(n.v);var t=n.A,i=n.X;Array.isArray(i)||(i=[String(i)]),vc(t.h,"t",i),n.C=0,t=n.l.H,n.h=new uc,n.g=zc(n.l,t?e:null,!n.s),0<n.O&&(n.L=new Xg(ke(n.Ia,n,n.g),n.O)),tc(n.V,n.g,"readystatechange",n.gb),e=n.H?Vl(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),Hn(1),Zg(n.j,n.u,n.A,n.m,n.X,n.s)}v.gb=function(n){n=n.target;const e=this.L;e&&Xe(n)==3?e.l():this.Ia(n)};v.Ia=function(n){try{if(n==this.g)e:{const u=Xe(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>u)&&(u!=3||Or||this.g&&(this.h.h||this.g.ga()||$c(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Hn(3):Hn(2)),os(this);var t=this.g.ba();this.N=t;t:if(fc(this)){var i=$c(this.g);n="";var s=i.length,r=Xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){It(this),Jn(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,em(this.j,this.u,this.A,this.m,this.X,u,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Qi(a)){var c=a;break t}}c=null}if(t=c)Jt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,so(this,t);else{this.i=!1,this.o=3,Le(12),It(this),Jn(this);break e}}this.U?(dc(this,u,o),Or&&this.i&&u==3&&(tc(this.V,this.W,"tick",this.fb),this.W.start())):(Jt(this.j,this.m,o,null),so(this,o)),u==4&&It(this),this.i&&!this.I&&(u==4?Vc(this.l,this):(this.i=!1,Qn(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Le(12)):(this.o=0,Le(13)),It(this),Jn(this)}}}catch{}finally{}};function fc(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function dc(n,e,t){let i=!0,s;for(;!n.I&&n.C<t.length;)if(s=sm(n,t),s==rs){e==4&&(n.o=4,Le(14),i=!1),Jt(n.j,n.m,null,"[Incomplete Response]");break}else if(s==no){n.o=4,Le(15),Jt(n.j,n.m,t,"[Invalid Chunk]"),i=!1;break}else Jt(n.j,n.m,s,null),so(n,s);fc(n)&&s!=rs&&s!=no&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Le(16),i=!1),n.i=n.i&&i,i?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),mo(e),e.L=!0,Le(11))):(Jt(n.j,n.m,t,"[Invalid Chunked Response]"),It(n),Jn(n))}v.fb=function(){if(this.g){var n=Xe(this.g),e=this.g.ga();this.C<e.length&&(os(this),dc(this,n,e),this.i&&n!=4&&Qn(this))}};function sm(n,e){var t=n.C,i=e.indexOf(`
`,t);return i==-1?rs:(t=Number(e.substring(t,i)),isNaN(t)?no:(i+=1,i+t>e.length?rs:(e=e.substr(i,t),n.C=i+t,e)))}v.cancel=function(){this.I=!0,It(this)};function Qn(n){n.Y=Date.now()+n.P,pc(n,n.P)}function pc(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Kn(ke(n.eb,n),e)}function os(n){n.B&&($.clearTimeout(n.B),n.B=null)}v.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(tm(this.j,this.A),this.K!=2&&(Hn(3),Le(17)),It(this),this.o=2,Jn(this)):pc(this,this.Y-n)};function Jn(n){n.l.G==0||n.I||Vc(n.l,n)}function It(n){os(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Jr(n.W),nc(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function so(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||ao(t.i,n))){if(t.I=n.N,!n.J&&ao(t.i,n)&&t.G==3){try{var i=t.Ca.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0)e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)ms(t),ps(t);else break e;go(t),Le(18)}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=Kn(ke(t.ab,t),6e3));if(1>=Ic(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else St(t,11)}else if((n.J||t.g==n)&&ms(t),!Qi(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(t.U=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.J=c[1],t.la=c[2];const u=c[3];u!=null&&(t.ma=u,t.h.info("VER="+t.ma));const h=c[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(i=1.5*f,t.K=i,t.h.info("backChannelRequestTimeoutMs_="+i)),i=t;const d=n.g;if(d){const p=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var r=i.i;!r.g&&($e(p,"spdy")||$e(p,"quic")||$e(p,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(lo(r,r.h),r.h=null))}if(i.D){const I=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(i.sa=I,ie(i.F,i.D,I))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),i=t;var o=n;if(i.oa=Bc(i,i.H?i.la:null,i.W),o.J){Tc(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(os(a),Qn(a)),i.g=o}else Mc(i);0<t.l.length&&gs(t)}else c[0]!="stop"&&c[0]!="close"||St(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?St(t,7):fo(t):c[0]!="noop"&&t.j&&t.j.wa(c),t.A=0)}}Hn(4)}catch{}}function rm(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(Ar(n)){for(var e=[],t=n.length,i=0;i<t;i++)e.push(n[i]);return e}e=[],t=0;for(i in n)e[t++]=n[i];return e}function ro(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Ar(n)||typeof n=="string")Ll(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(Ar(n)||typeof n=="string"){t=[];for(var i=n.length,s=0;s<i;s++)t.push(s)}else for(s in t=[],i=0,n)t[i++]=s;i=rm(n),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],t&&t[r],n)}}function Yt(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var i=0;i<t;i+=2)this.set(arguments[i],arguments[i+1])}else if(n)if(n instanceof Yt)for(t=n.T(),i=0;i<t.length;i++)this.set(t[i],n.get(t[i]));else for(i in n)this.set(i,n[i])}v=Yt.prototype;v.R=function(){oo(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};v.T=function(){return oo(this),this.g.concat()};function oo(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var i=n.g[e];Tt(n.h,i)&&(n.g[t++]=i),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)i=n.g[e],Tt(s,i)||(n.g[t++]=i,s[i]=1),e++;n.g.length=t}}v.get=function(n,e){return Tt(this.h,n)?this.h[n]:e};v.set=function(n,e){Tt(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};v.forEach=function(n,e){for(var t=this.T(),i=0;i<t.length;i++){var s=t[i],r=this.get(s);n.call(e,r,s,this)}};function Tt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var gc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function om(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var i=n[t].indexOf("="),s=null;if(0<=i){var r=n[t].substring(0,i);s=n[t].substring(i+1)}else r=n[t];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function bt(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof bt){this.g=e!==void 0?e:n.g,as(this,n.j),this.s=n.s,ls(this,n.i),cs(this,n.m),this.l=n.l,e=n.h;var t=new Zn;t.i=e.i,e.g&&(t.g=new Yt(e.g),t.h=e.h),mc(this,t),this.o=n.o}else n&&(t=String(n).match(gc))?(this.g=!!e,as(this,t[1]||"",!0),this.s=Yn(t[2]||""),ls(this,t[3]||"",!0),cs(this,t[4]),this.l=Yn(t[5]||"",!0),mc(this,t[6]||"",!0),this.o=Yn(t[7]||"")):(this.g=!!e,this.h=new Zn(null,this.g))}bt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Xn(e,yc,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Xn(e,yc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Xn(t,t.charAt(0)=="/"?hm:um,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Xn(t,dm)),n.join("")};function Ye(n){return new bt(n)}function as(n,e,t){n.j=t?Yn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ls(n,e,t){n.i=t?Yn(e,!0):e}function cs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function mc(n,e,t){e instanceof Zn?(n.h=e,pm(n.h,n.g)):(t||(e=Xn(e,fm)),n.h=new Zn(e,n.g))}function ie(n,e,t){n.h.set(e,t)}function us(n){return ie(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function am(n){return n instanceof bt?Ye(n):new bt(n,void 0)}function lm(n,e,t,i){var s=new bt(null,void 0);return n&&as(s,n),e&&ls(s,e),t&&cs(s,t),i&&(s.l=i),s}function Yn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Xn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,cm),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function cm(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var yc=/[#\/\?@]/g,um=/[#\?:]/g,hm=/[#\?]/g,fm=/[#\?@]/g,dm=/#/g;function Zn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function ct(n){n.g||(n.g=new Yt,n.h=0,n.i&&om(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}v=Zn.prototype;v.add=function(n,e){ct(this),this.i=null,n=Xt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function _c(n,e){ct(n),e=Xt(n,e),Tt(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,Tt(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&oo(n)))}function wc(n,e){return ct(n),e=Xt(n,e),Tt(n.g.h,e)}v.forEach=function(n,e){ct(this),this.g.forEach(function(t,i){Ll(t,function(s){n.call(e,s,i,this)},this)},this)};v.T=function(){ct(this);for(var n=this.g.R(),e=this.g.T(),t=[],i=0;i<e.length;i++)for(var s=n[i],r=0;r<s.length;r++)t.push(e[i]);return t};v.R=function(n){ct(this);var e=[];if(typeof n=="string")wc(this,n)&&(e=Pl(e,this.g.get(Xt(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Pl(e,n[t])}return e};v.set=function(n,e){return ct(this),this.i=null,n=Xt(this,n),wc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};v.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function vc(n,e,t){_c(n,e),0<t.length&&(n.i=null,n.g.set(Xt(n,e),Rr(t)),n.h+=t.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var i=e[t],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;i[r]!==""&&(o+="="+encodeURIComponent(String(i[r]))),n.push(o)}}return this.i=n.join("&")};function Xt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function pm(n,e){e&&!n.j&&(ct(n),n.i=null,n.g.forEach(function(t,i){var s=i.toLowerCase();i!=s&&(_c(this,i),vc(this,s,t))},n)),n.j=e}var gm=class{constructor(n,e){this.h=n,this.g=e}};function Ec(n){this.l=n||mm,$.PerformanceNavigationTiming?(n=$.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!($.g&&$.g.Ea&&$.g.Ea()&&$.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mm=10;function kc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ic(n){return n.h?1:n.g?n.g.size:0}function ao(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function lo(n,e){n.g?n.g.add(e):n.h=e}function Tc(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Ec.prototype.cancel=function(){if(this.i=bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function bc(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Rr(n.i)}function co(){}co.prototype.stringify=function(n){return $.JSON.stringify(n,void 0)};co.prototype.parse=function(n){return $.JSON.parse(n,void 0)};function ym(){this.g=new co}function _m(n,e,t){const i=t||"";try{ro(n,function(s,r){let o=s;qn(s)&&(o=Kr(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function wm(n,e){const t=new ts;if($.Image){const i=new Image;i.onload=Gi(hs,t,i,"TestLoadImage: loaded",!0,e),i.onerror=Gi(hs,t,i,"TestLoadImage: error",!1,e),i.onabort=Gi(hs,t,i,"TestLoadImage: abort",!1,e),i.ontimeout=Gi(hs,t,i,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=n}else e(!1)}function hs(n,e,t,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function ei(n){this.l=n.$b||null,this.j=n.ib||!1}Ie(ei,Xr);ei.prototype.g=function(){return new fs(this.l,this.j)};ei.prototype.i=function(n){return function(){return n}}({});function fs(n,e){_e.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=uo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ie(fs,_e);var uo=0;v=fs.prototype;v.open=function(n,e){if(this.readyState!=uo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,ni(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||$).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=uo};v.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,ni(this)),this.g&&(this.readyState=3,ni(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof $.ReadableStream!="undefined"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Sc(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function Sc(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}v.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ti(this):ni(this),this.readyState==3&&Sc(this)}};v.Ua=function(n){this.g&&(this.response=this.responseText=n,ti(this))};v.Ta=function(n){this.g&&(this.response=n,ti(this))};v.ha=function(){this.g&&ti(this)};function ti(n){n.readyState=4,n.l=null,n.j=null,n.A=null,ni(n)}v.setRequestHeader=function(n,e){this.v.append(n,e)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function ni(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(fs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var vm=$.JSON.parse;function he(n){_e.call(this),this.headers=new Yt,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ac,this.K=this.L=!1}Ie(he,_e);var Ac="",Em=/^https?$/i,km=["POST","PUT"];v=he.prototype;v.ea=function(n,e,t,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():to.g(),this.C=this.u?lc(this.u):lc(to),this.g.onreadystatechange=ke(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){Cc(this,r);return}n=t||"";const s=new Yt(this.headers);i&&ro(i,function(r,o){s.set(o,r)}),i=Og(s.T()),t=$.FormData&&n instanceof $.FormData,!(0<=Ol(km,e))||i||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Dc(this),0<this.B&&((this.K=Im(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ke(this.pa,this)):this.A=Yr(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){Cc(this,r)}};function Im(n){return Qt&&Ug()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function Tm(n){return n.toLowerCase()=="content-type"}v.pa=function(){typeof Sr!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Te(this,"timeout"),this.abort(8))};function Cc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Rc(n),ds(n)}function Rc(n){n.D||(n.D=!0,Te(n,"complete"),Te(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Te(this,"complete"),Te(this,"abort"),ds(this))};v.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ds(this,!0)),he.Z.M.call(this)};v.Fa=function(){this.s||(this.F||this.v||this.l?Nc(this):this.cb())};v.cb=function(){Nc(this)};function Nc(n){if(n.h&&typeof Sr!="undefined"&&(!n.C[1]||Xe(n)!=4||n.ba()!=2)){if(n.v&&Xe(n)==4)Yr(n.Fa,0,n);else if(Te(n,"readystatechange"),Xe(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var i;if(i=a===0){var s=String(n.H).match(gc)[1]||null;if(!s&&$.self&&$.self.location){var r=$.self.location.protocol;s=r.substr(0,r.length-1)}i=!Em.test(s?s.toLowerCase():"")}t=i}if(t)Te(n,"complete"),Te(n,"success");else{n.m=6;try{var o=2<Xe(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",Rc(n)}}finally{ds(n)}}}}function ds(n,e){if(n.g){Dc(n);const t=n.g,i=n.C[0]?Wi:null;n.g=null,n.C=null,e||Te(n,"ready");try{t.onreadystatechange=i}catch{}}}function Dc(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&($.clearTimeout(n.A),n.A=null)}function Xe(n){return n.g?n.g.readyState:0}v.ba=function(){try{return 2<Xe(this)?this.g.status:-1}catch{return-1}};v.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),vm(e)}};function $c(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case Ac:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}v.Da=function(){return this.m};v.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function bm(n){let e="";return Dr(n,function(t,i){e+=i,e+=":",e+=t,e+=`\r
`}),e}function ho(n,e,t){e:{for(i in t){var i=!1;break e}i=!0}i||(t=bm(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):ie(n,e,t))}function ii(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Oc(n){this.za=0,this.l=[],this.h=new ts,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ii("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ii("baseRetryDelayMs",5e3,n),this.$a=ii("retryDelaySeedMs",1e4,n),this.Ya=ii("forwardChannelMaxRetries",2,n),this.ra=ii("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new Ec(n&&n.concurrentRequestLimit),this.Ca=new ym,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}v=Oc.prototype;v.ma=8;v.G=1;function fo(n){if(Lc(n),n.G==3){var e=n.V++,t=Ye(n.F);ie(t,"SID",n.J),ie(t,"RID",e),ie(t,"TYPE","terminate"),si(n,t),e=new Gn(n,n.h,e,void 0),e.K=2,e.v=us(Ye(t)),t=!1,$.navigator&&$.navigator.sendBeacon&&(t=$.navigator.sendBeacon(e.v.toString(),"")),!t&&$.Image&&(new Image().src=e.v,t=!0),t||(e.g=zc(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Qn(e)}qc(n)}v.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function ps(n){n.g&&(mo(n),n.g.cancel(),n.g=null)}function Lc(n){ps(n),n.u&&($.clearTimeout(n.u),n.u=null),ms(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&$.clearTimeout(n.m),n.m=null)}function po(n,e){n.l.push(new gm(n.Za++,e)),n.G==3&&gs(n)}function gs(n){kc(n.i)||n.m||(n.m=!0,Wr(n.Ha,n),n.C=0)}function Sm(n,e){return Ic(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=Kn(ke(n.Ha,n,e),Fc(n,n.C)),n.C++,!0)}v.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new Gn(this,this.h,n,void 0);let r=this.s;if(this.P&&(r?(r=Vl(r),ql(r,this.P)):r=this.P),this.o===null&&(s.H=r),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var i=this.l[t];if("__data__"in i.g&&(i=i.g.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=xc(this,s,e),t=Ye(this.F),ie(t,"RID",n),ie(t,"CVER",22),this.D&&ie(t,"X-HTTP-Session-Id",this.D),si(this,t),this.o&&r&&ho(t,this.o,r),lo(this.i,s),this.Ra&&ie(t,"TYPE","init"),this.ja?(ie(t,"$req",e),ie(t,"SID","null"),s.$=!0,io(s,t,null)):io(s,t,e),this.G=2}}else this.G==3&&(n?Pc(this,n):this.l.length==0||kc(this.i)||Pc(this))};function Pc(n,e){var t;e?t=e.m:t=n.V++;const i=Ye(n.F);ie(i,"SID",n.J),ie(i,"RID",t),ie(i,"AID",n.U),si(n,i),n.o&&n.s&&ho(i,n.o,n.s),t=new Gn(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=xc(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),lo(n.i,t),io(t,i,e)}function si(n,e){n.j&&ro({},function(t,i){ie(e,i,t)})}function xc(n,e,t){t=Math.min(n.l.length,t);var i=n.j?ke(n.j.Oa,n.j,n):null;e:{var s=n.l;let r=-1;for(;;){const o=["count="+t];r==-1?0<t?(r=s[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<t;l++){let c=s[l].h;const u=s[l].g;if(c-=r,0>c)r=Math.max(0,s[l].h-100),a=!1;else try{_m(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,i}function Mc(n){n.g||n.u||(n.Y=1,Wr(n.Ga,n),n.A=0)}function go(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=Kn(ke(n.Ga,n),Fc(n,n.A)),n.A++,!0)}v.Ga=function(){if(this.u=null,Uc(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=Kn(ke(this.bb,this),n)}};v.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Le(10),ps(this),Uc(this))};function mo(n){n.B!=null&&($.clearTimeout(n.B),n.B=null)}function Uc(n){n.g=new Gn(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=Ye(n.oa);ie(e,"RID","rpc"),ie(e,"SID",n.J),ie(e,"CI",n.N?"0":"1"),ie(e,"AID",n.U),si(n,e),ie(e,"TYPE","xmlhttp"),n.o&&n.s&&ho(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=us(Ye(e)),t.s=null,t.U=!0,hc(t,n)}v.ab=function(){this.v!=null&&(this.v=null,ps(this),go(this),Le(19))};function ms(n){n.v!=null&&($.clearTimeout(n.v),n.v=null)}function Vc(n,e){var t=null;if(n.g==e){ms(n),mo(n),n.g=null;var i=2}else if(ao(n.i,e))t=e.D,Tc(n.i,e),i=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(i==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;i=ns(),Te(i,new oc(i,t,e,s)),gs(n)}else Mc(n);else if(s=e.o,s==3||s==0&&0<n.I||!(i==1&&Sm(n,e)||i==2&&go(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:St(n,5);break;case 4:St(n,10);break;case 3:St(n,6);break;default:St(n,2)}}}function Fc(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function St(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var i=ke(n.jb,n);t||(t=new bt("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||as(t,"https"),us(t)),wm(t.toString(),i)}else Le(2);n.G=0,n.j&&n.j.va(e),qc(n),Lc(n)}v.jb=function(n){n?(this.h.info("Successfully pinged google.com"),Le(2)):(this.h.info("Failed to ping google.com"),Le(1))};function qc(n){n.G=0,n.I=-1,n.j&&((bc(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,Rr(n.l),n.l.length=0),n.j.ua())}function Bc(n,e,t){let i=am(t);if(i.i!="")e&&ls(i,e+"."+i.i),cs(i,i.m);else{const s=$.location;i=lm(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&Dr(n.aa,function(s,r){ie(i,r,s)}),e=n.D,t=n.sa,e&&t&&ie(i,e,t),ie(i,"VER",n.ma),si(n,i),i}function zc(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new he(new ei({ib:!0})):new he(n.qa),e.L=n.H,e}function jc(){}v=jc.prototype;v.xa=function(){};v.wa=function(){};v.va=function(){};v.ua=function(){};v.Oa=function(){};function ys(){if(Qt&&!(10<=Number(Vg)))throw Error("Environmental error: no available transport.")}ys.prototype.g=function(n,e){return new Ve(n,e)};function Ve(n,e){_e.call(this),this.g=new Oc(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!Qi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Qi(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Zt(this)}Ie(Ve,_e);Ve.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),Wr(ke(n.hb,n,e))),Le(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=Bc(n,null,n.W),gs(n)};Ve.prototype.close=function(){fo(this.g)};Ve.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,po(this.g,e)}else this.v?(e={},e.__data__=Kr(n),po(this.g,e)):po(this.g,n)};Ve.prototype.M=function(){this.g.j=null,delete this.j,fo(this.g),delete this.g,Ve.Z.M.call(this)};function Hc(n){Zr.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Ie(Hc,Zr);function Kc(){eo.call(this),this.status=1}Ie(Kc,eo);function Zt(n){this.g=n}Ie(Zt,jc);Zt.prototype.xa=function(){Te(this.g,"a")};Zt.prototype.wa=function(n){Te(this.g,new Hc(n))};Zt.prototype.va=function(n){Te(this.g,new Kc(n))};Zt.prototype.ua=function(){Te(this.g,"b")};ys.prototype.createWebChannel=ys.prototype.g;Ve.prototype.send=Ve.prototype.u;Ve.prototype.open=Ve.prototype.m;Ve.prototype.close=Ve.prototype.close;is.NO_ERROR=0;is.TIMEOUT=8;is.HTTP_ERROR=6;ac.COMPLETE="complete";cc.EventType=Wn;Wn.OPEN="a";Wn.CLOSE="b";Wn.ERROR="c";Wn.MESSAGE="d";_e.prototype.listen=_e.prototype.N;he.prototype.listenOnce=he.prototype.O;he.prototype.getLastError=he.prototype.La;he.prototype.getLastErrorCode=he.prototype.Da;he.prototype.getStatus=he.prototype.ba;he.prototype.getResponseJson=he.prototype.Qa;he.prototype.getResponseText=he.prototype.ga;he.prototype.send=he.prototype.ea;var Am=function(){return new ys},Cm=function(){return ns()},yo=is,Rm=ac,Nm=kt,Wc={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Dm=ei,_s=cc,$m=he;const Gc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en="9.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=new rr("@firebase/firestore");function Qc(){return At.logLevel}function S(n,...e){if(At.logLevel<=q.DEBUG){const t=e.map(_o);At.debug(`Firestore (${en}): ${n}`,...t)}}function ut(n,...e){if(At.logLevel<=q.ERROR){const t=e.map(_o);At.error(`Firestore (${en}): ${n}`,...t)}}function Jc(n,...e){if(At.logLevel<=q.WARN){const t=e.map(_o);At.warn(`Firestore (${en}): ${n}`,...t)}}function _o(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const e=`FIRESTORE (${en}) INTERNAL ASSERTION FAILED: `+n;throw ut(e),new Error(e)}function W(n,e){n||O()}function L(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Lm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xe.UNAUTHENTICATED))}shutdown(){}}class Pm{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new ht;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ht,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ht)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(W(typeof i.accessToken=="string"),new Om(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new xe(e)}}class xm{constructor(e,t,i){this.type="FirstParty",this.user=xe.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)}}class Mm{constructor(e,t,i){this.h=e,this.l=t,this.m=i}getToken(){return Promise.resolve(new xm(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Um{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vm{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=s=>{e.enqueueRetryable(()=>(r=>(r.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`),t(r.token)))(s))};const i=s=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),new Um(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.p(i),this.T=i=>t.writeSequenceNumber(i))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wo.I=-1;class Yc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=Fm(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%e.length))}return i}}function H(n,e){return n<e?-1:n>e?1:0}function tn(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new T(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new T(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new Fe(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?H(this.nanoseconds,e.nanoseconds):H(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Fe(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ct(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,i){t===void 0?t=0:t>e.length&&O(),i===void 0?i=e.length-t:i>e.length-t&&O(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ri.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ri?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=e.get(s),o=t.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends ri{construct(e,t,i){return new se(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new T(g.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const qm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends ri{construct(e,t,i){return new Me(e,t,i)}static isValidIdentifier(e){return qm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new T(g.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new T(g.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new T(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new T(g.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(t)}static emptyPath(){return new Me([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.fields=e,e.sort(Me.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tn(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ce(t)}static fromUint8Array(e){const t=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new Ce(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return H(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const Bm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(n){if(W(!!n),typeof n=="string"){let e=0;const t=Bm.exec(n);if(W(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function tu(n){const e=n.mapValue.fields.__previous_value__;return eu(e)?tu(e):e}function ai(n){const e=ft(n.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(n){return n==null}function ws(n){return n===0&&1/n==-1/0}function zm(n){return typeof n=="number"&&Number.isInteger(n)&&!ws(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.path=e}static fromPath(e){return new N(se.fromString(e))}static fromName(e){return new N(se.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new N(new se(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?eu(n)?4:10:O()}function Ke(n,e){const t=Rt(n);if(t!==Rt(e))return!1;switch(t){case 0:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ai(n).isEqual(ai(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=ft(i.timestampValue),o=ft(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return nn(i.bytesValue).isEqual(nn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return fe(i.geoPointValue.latitude)===fe(s.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return fe(i.integerValue)===fe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=fe(i.doubleValue),o=fe(s.doubleValue);return r===o?ws(r)===ws(o):isNaN(r)&&isNaN(o)}return!1}(n,e);case 9:return tn(n.arrayValue.values||[],e.arrayValue.values||[],Ke);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(Xc(r)!==Xc(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ke(r[a],o[a])))return!1;return!0}(n,e);default:return O()}}function li(n,e){return(n.values||[]).find(t=>Ke(t,e))!==void 0}function rn(n,e){const t=Rt(n),i=Rt(e);if(t!==i)return H(t,i);switch(t){case 0:return 0;case 1:return H(n.booleanValue,e.booleanValue);case 2:return function(s,r){const o=fe(s.integerValue||s.doubleValue),a=fe(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return nu(n.timestampValue,e.timestampValue);case 4:return nu(ai(n),ai(e));case 5:return H(n.stringValue,e.stringValue);case 6:return function(s,r){const o=nn(s),a=nn(r);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let l=0;l<o.length&&l<a.length;l++){const c=H(o[l],a[l]);if(c!==0)return c}return H(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,r){const o=H(fe(s.latitude),fe(r.latitude));return o!==0?o:H(fe(s.longitude),fe(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let l=0;l<o.length&&l<a.length;++l){const c=rn(o[l],a[l]);if(c)return c}return H(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,r){const o=s.fields||{},a=Object.keys(o),l=r.fields||{},c=Object.keys(l);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const h=H(a[u],c[u]);if(h!==0)return h;const f=rn(o[a[u]],l[c[u]]);if(f!==0)return f}return H(a.length,c.length)}(n.mapValue,e.mapValue);default:throw O()}}function nu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return H(n,e);const t=ft(n),i=ft(e),s=H(t.seconds,i.seconds);return s!==0?s:H(t.nanos,i.nanos)}function vo(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(i){const s=ft(i);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?nn(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,N.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=Eo(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${Eo(i.fields[a])}`;return r+"}"}(n.mapValue):O();var e,t}function iu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ko(n){return!!n&&"integerValue"in n}function Io(n){return!!n&&"arrayValue"in n}function su(n){return!!n&&"nullValue"in n}function ru(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function vs(n){return!!n&&"mapValue"in n}function ci(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ct(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=ci(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ci(n.arrayValue.values[t]);return e}return Object.assign({},n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!vs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ci(t)}setAll(e){let t=Me.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=a.popLast()}o?i[a.lastSegment()]=ci(o):s.push(a.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());vs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ke(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];vs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Ct(t,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new qe(ci(this.value))}}function ou(n){const e=[];return Ct(n.fields,(t,i)=>{const s=new Me([t]);if(vs(i)){const r=ou(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new oi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,i,s,r){this.key=e,this.documentType=t,this.version=i,this.data=s,this.documentState=r}static newInvalidDocument(e){return new Re(e,0,j.min(),qe.empty(),0)}static newFoundDocument(e,t,i){return new Re(e,1,t,i,0)}static newNoDocument(e,t){return new Re(e,2,t,qe.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,qe.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Re(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,t=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.R=null}}function au(n,e=null,t=[],i=[],s=null,r=null,o=null){return new jm(n,e,t,i,s,r,o)}function To(n){const e=L(n);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Km(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),sn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Es(e.startAt)),e.endAt&&(t+="|ub:",t+=Es(e.endAt)),e.R=t}return e.R}function Hm(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(i=t).field.canonicalString()} ${i.op} ${vo(i.value)}`;var i}).join(", ")}]`),sn(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: "+Es(n.startAt)),n.endAt&&(e+=", endAt: "+Es(n.endAt)),`Target(${e})`}function bo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!ey(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],i=e.filters[s],t.op!==i.op||!t.field.isEqual(i.field)||!Ke(t.value,i.value))return!1;var t,i;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uu(n.startAt,e.startAt)&&uu(n.endAt,e.endAt)}function So(n){return N.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class Pe extends class{}{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.P(e,t,i):new Wm(e,t,i):t==="array-contains"?new Jm(e,i):t==="in"?new Ym(e,i):t==="not-in"?new Xm(e,i):t==="array-contains-any"?new Zm(e,i):new Pe(e,t,i)}static P(e,t,i){return t==="in"?new Gm(e,i):new Qm(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.v(rn(t,this.value)):t!==null&&Rt(this.value)===Rt(t)&&this.v(rn(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Km(n){return n.field.canonicalString()+n.op.toString()+vo(n.value)}class Wm extends Pe{constructor(e,t,i){super(e,t,i),this.key=N.fromName(i.referenceValue)}matches(e){const t=N.comparator(e.key,this.key);return this.v(t)}}class Gm extends Pe{constructor(e,t){super(e,"in",t),this.keys=lu("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Qm extends Pe{constructor(e,t){super(e,"not-in",t),this.keys=lu("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function lu(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>N.fromName(i.referenceValue))}class Jm extends Pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Io(t)&&li(t.arrayValue,this.value)}}class Ym extends Pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&li(this.value.arrayValue,t)}}class Xm extends Pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!li(this.value.arrayValue,t)}}class Zm extends Pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Io(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>li(this.value.arrayValue,i))}}class Ao{constructor(e,t){this.position=e,this.before=t}}function Es(n){return`${n.before?"b":"a"}:${n.position.map(e=>vo(e)).join(",")}`}class ui{constructor(e,t="asc"){this.field=e,this.dir=t}}function ey(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function cu(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=N.comparator(N.fromName(o.referenceValue),t.key):i=rn(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return n.before?i<=0:i<0}function uu(n,e){if(n===null)return e===null;if(e===null||n.before!==e.before||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ke(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.D=null,this.startAt,this.endAt}}function ty(n,e,t,i,s,r,o,a){return new hi(n,e,t,i,s,r,o,a)}function Co(n){return new hi(n)}function ks(n){return!sn(n.limit)&&n.limitType==="F"}function Is(n){return!sn(n.limit)&&n.limitType==="L"}function hu(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function fu(n){for(const e of n.filters)if(e.V())return e.field;return null}function du(n){return n.collectionGroup!==null}function fi(n){const e=L(n);if(e.S===null){e.S=[];const t=fu(e),i=hu(e);if(t!==null&&i===null)t.isKeyField()||e.S.push(new ui(t)),e.S.push(new ui(Me.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.S.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new ui(Me.keyField(),r))}}}return e.S}function Nt(n){const e=L(n);if(!e.D)if(e.limitType==="F")e.D=au(e.path,e.collectionGroup,fi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of fi(e)){const o=r.dir==="desc"?"asc":"desc";t.push(new ui(r.field,o))}const i=e.endAt?new Ao(e.endAt.position,!e.endAt.before):null,s=e.startAt?new Ao(e.startAt.position,!e.startAt.before):null;e.D=au(e.path,e.collectionGroup,t,e.filters,e.limit,i,s)}return e.D}function ny(n,e,t){return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ts(n,e){return bo(Nt(n),Nt(e))&&n.limitType===e.limitType}function pu(n){return`${To(Nt(n))}|lt:${n.limitType}`}function Ro(n){return`Query(target=${Hm(Nt(n))}; limitType=${n.limitType})`}function bs(n,e){return e.isFoundDocument()&&function(t,i){const s=i.key.path;return t.collectionGroup!==null?i.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):N.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,i){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,i){for(const s of t.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(t,i){return!(t.startAt&&!cu(t.startAt,fi(t),i)||t.endAt&&cu(t.endAt,fi(t),i))}(n,e)}function gu(n){return(e,t)=>{let i=!1;for(const s of fi(n)){const r=iy(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function iy(n,e,t){const i=n.field.isKeyField()?N.comparator(e.key,t.key):function(s,r,o){const a=r.data.field(s),l=o.data.field(s);return a!==null&&l!==null?rn(a,l):O()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,e){if(n.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ws(e)?"-0":e}}function yu(n){return{integerValue:""+n}}function sy(n,e){return zm(e)?yu(e):mu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(){this._=void 0}}function ry(n,e,t){return n instanceof As?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&(r.fields.__previous_value__=s),{mapValue:r}}(t,e):n instanceof di?wu(n,e):n instanceof pi?vu(n,e):function(i,s){const r=_u(i,s),o=Eu(r)+Eu(i.N);return ko(r)&&ko(i.N)?yu(o):mu(i.k,o)}(n,e)}function oy(n,e,t){return n instanceof di?wu(n,e):n instanceof pi?vu(n,e):t}function _u(n,e){return n instanceof Cs?ko(t=e)||function(i){return!!i&&"doubleValue"in i}(t)?e:{integerValue:0}:null;var t}class As extends Ss{}class di extends Ss{constructor(e){super(),this.elements=e}}function wu(n,e){const t=ku(e);for(const i of n.elements)t.some(s=>Ke(s,i))||t.push(i);return{arrayValue:{values:t}}}class pi extends Ss{constructor(e){super(),this.elements=e}}function vu(n,e){let t=ku(e);for(const i of n.elements)t=t.filter(s=>!Ke(s,i));return{arrayValue:{values:t}}}class Cs extends Ss{constructor(e,t){super(),this.k=e,this.N=t}}function Eu(n){return fe(n.integerValue||n.doubleValue)}function ku(n){return Io(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ay(n,e){return n.field.isEqual(e.field)&&function(t,i){return t instanceof di&&i instanceof di||t instanceof pi&&i instanceof pi?tn(t.elements,i.elements,Ke):t instanceof Cs&&i instanceof Cs?Ke(t.N,i.N):t instanceof As&&i instanceof As}(n.transform,e.transform)}class ly{constructor(e,t){this.version=e,this.transformResults=t}}class dt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new dt}static exists(e){return new dt(void 0,e)}static updateTime(e){return new dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ns{}function cy(n,e,t){n instanceof Ds?function(i,s,r){const o=i.value.clone(),a=Su(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Dt?function(i,s,r){if(!Rs(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Su(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(bu(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function No(n,e,t){n instanceof Ds?function(i,s,r){if(!Rs(i.precondition,s))return;const o=i.value.clone(),a=Au(i.fieldTransforms,r,s);o.setAll(a),s.convertToFoundDocument(Tu(s),o).setHasLocalMutations()}(n,e,t):n instanceof Dt?function(i,s,r){if(!Rs(i.precondition,s))return;const o=Au(i.fieldTransforms,r,s),a=s.data;a.setAll(bu(i)),a.setAll(o),s.convertToFoundDocument(Tu(s),a).setHasLocalMutations()}(n,e,t):function(i,s){Rs(i.precondition,s)&&s.convertToNoDocument(j.min())}(n,e)}function uy(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),r=_u(i.transform,s||null);r!=null&&(t==null&&(t=qe.empty()),t.set(i.field,r))}return t||null}function Iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,i){return t===void 0&&i===void 0||!(!t||!i)&&tn(t,i,(s,r)=>ay(s,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function Tu(n){return n.isFoundDocument()?n.version:j.min()}class Ds extends Ns{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}}class Dt extends Ns{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}}function bu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Su(n,e,t){const i=new Map;W(n.length===t.length);for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,oy(o,a,t[s]))}return i}function Au(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,ry(r,o,e))}return i}class Cu extends Ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class hy extends Ns{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de,x;function dy(n){switch(n){default:return O();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Ru(n){if(n===void 0)return ut("GRPC error has no .code"),g.UNKNOWN;switch(n){case de.OK:return g.OK;case de.CANCELLED:return g.CANCELLED;case de.UNKNOWN:return g.UNKNOWN;case de.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case de.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case de.INTERNAL:return g.INTERNAL;case de.UNAVAILABLE:return g.UNAVAILABLE;case de.UNAUTHENTICATED:return g.UNAUTHENTICATED;case de.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case de.NOT_FOUND:return g.NOT_FOUND;case de.ALREADY_EXISTS:return g.ALREADY_EXISTS;case de.PERMISSION_DENIED:return g.PERMISSION_DENIED;case de.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case de.ABORTED:return g.ABORTED;case de.OUT_OF_RANGE:return g.OUT_OF_RANGE;case de.UNIMPLEMENTED:return g.UNIMPLEMENTED;case de.DATA_LOSS:return g.DATA_LOSS;default:return O()}}(x=de||(de={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.comparator=e,this.root=t||be.EMPTY}insert(e,t){return new Ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i!=null?i:be.RED,this.left=s!=null?s:be.EMPTY,this.right=r!=null?r:be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new be(e!=null?e:this.key,t!=null?t:this.value,i!=null?i:this.color,s!=null?s:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return be.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(n,e,t,i,s){return this}insert(n,e,t){return new be(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nu(this.data.getIterator())}getIteratorFrom(e){return new Nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=new Ne(N.comparator);function $t(){return py}const gy=new Ne(N.comparator);function Do(){return gy}const my=new Ne(N.comparator);function yy(){return my}const _y=new Se(N.comparator);function Z(...n){let e=_y;for(const t of n)e=e.add(t);return e}const wy=new Se(H);function Du(){return wy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t){const i=new Map;return i.set(e,gi.createSynthesizedTargetChangeForCurrentChange(e,t)),new Os(j.min(),i,Du(),$t(),Z())}}class gi{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t){return new gi(Ce.EMPTY_BYTE_STRING,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,i,s){this.$=e,this.removedTargetIds=t,this.key=i,this.F=s}}class $u{constructor(e,t){this.targetId=e,this.O=t}}class Ou{constructor(e,t,i=Ce.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Lu{constructor(){this.M=0,this.L=xu(),this.B=Ce.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.M!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Z(),t=Z(),i=Z();return this.L.forEach((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:O()}}),new gi(this.B,this.U,e,t,i)}H(){this.q=!1,this.L=xu()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class vy{constructor(e){this.et=e,this.nt=new Map,this.st=$t(),this.it=Pu(),this.rt=new Se(H)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,t=>{const i=this.ht(t);switch(e.state){case 0:this.lt(t)&&i.W(e.resumeToken);break;case 1:i.Z(),i.K||i.H(),i.W(e.resumeToken);break;case 2:i.Z(),i.K||this.removeTarget(t);break;case 3:this.lt(t)&&(i.tt(),i.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),i.W(e.resumeToken));break;default:O()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach((i,s)=>{this.lt(s)&&t(s)})}dt(e){const t=e.targetId,i=e.O.count,s=this.wt(t);if(s){const r=s.target;if(So(r))if(i===0){const o=new N(r.path);this.ct(t,o,Re.newNoDocument(o,j.min()))}else W(i===1);else this._t(t)!==i&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&So(a.target)){const l=new N(a.target.path);this.st.get(l)!==null||this.yt(o,l)||this.ct(o,l,Re.newNoDocument(l,e))}r.j&&(t.set(o,r.G()),r.H())}});let i=Z();this.it.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.wt(l);return!c||c.purpose===2||(a=!1,!1)}),a&&(i=i.add(r))});const s=new Os(e,t,this.rt,this.st,i);return this.st=$t(),this.it=Pu(),this.rt=new Se(H),s}at(e,t){if(!this.lt(e))return;const i=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,i),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,i){if(!this.lt(e))return;const s=this.ht(e);this.yt(e,t)?s.J(t,1):s.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),i&&(this.st=this.st.insert(t,i))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new Lu,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new Se(H),this.it=this.it.insert(e,t)),t}lt(e){const t=this.wt(e)!==null;return t||S("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Lu),this.et.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function Pu(){return new Ne(N.comparator)}function xu(){return new Ne(N.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ky=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class Iy{constructor(e,t){this.databaseId=e,this.C=t}}function Ps(n,e){return n.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mu(n,e){return n.C?e.toBase64():e.toUint8Array()}function Ty(n,e){return Ps(n,e.toTimestamp())}function Ze(n){return W(!!n),j.fromTimestamp(function(e){const t=ft(e);return new Fe(t.seconds,t.nanos)}(n))}function $o(n,e){return function(t){return new se(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Uu(n){const e=se.fromString(n);return W(ju(e)),e}function Oo(n,e){return $o(n.databaseId,e.path)}function Lo(n,e){const t=Uu(e);if(t.get(1)!==n.databaseId.projectId)throw new T(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new T(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new N(Vu(t))}function Po(n,e){return $o(n.databaseId,e)}function by(n){const e=Uu(n);return e.length===4?se.emptyPath():Vu(e)}function xo(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vu(n){return W(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fu(n,e,t){return{name:Oo(n,e),fields:t.value.mapValue.fields}}function Sy(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(l,c){return l.C?(W(c===void 0||typeof c=="string"),Ce.fromBase64String(c||"")):(W(c===void 0||c instanceof Uint8Array),Ce.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const c=l.code===void 0?g.UNKNOWN:Ru(l.code);return new T(c,l.message||"")}(o);t=new Ou(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Lo(n,i.document.name),r=Ze(i.document.updateTime),o=new qe({mapValue:{fields:i.document.fields}}),a=Re.newFoundDocument(s,r,o),l=i.targetIds||[],c=i.removedTargetIds||[];t=new Ls(l,c,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Lo(n,i.document),r=i.readTime?Ze(i.readTime):j.min(),o=Re.newNoDocument(s,r),a=i.removedTargetIds||[];t=new Ls([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Lo(n,i.document),r=i.removedTargetIds||[];t=new Ls([],r,s,null)}else{if(!("filter"in e))return O();{e.filter;const i=e.filter;i.targetId;const s=i.count||0,r=new fy(s),o=i.targetId;t=new $u(o,r)}}return t}function Ay(n,e){let t;if(e instanceof Ds)t={update:Fu(n,e.key,e.value)};else if(e instanceof Cu)t={delete:Oo(n,e.key)};else if(e instanceof Dt)t={update:Fu(n,e.key,e.data),updateMask:My(e.fieldMask)};else{if(!(e instanceof hy))return O();t={verify:Oo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof As)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof di)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Cs)return{fieldPath:r.field.canonicalString(),increment:o.N};throw O()}(0,i))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Ty(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:O()}(n,e.precondition)),t}function Cy(n,e){return n&&n.length>0?(W(e!==void 0),n.map(t=>function(i,s){let r=i.updateTime?Ze(i.updateTime):Ze(s);return r.isEqual(j.min())&&(r=Ze(s)),new ly(r,i.transformResults||[])}(t,e))):[]}function Ry(n,e){return{documents:[Po(n,e.path)]}}function Ny(n,e){const t={structuredQuery:{}},i=e.path;e.collectionGroup!==null?(t.parent=Po(n,i),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Po(n,i.popLast()),t.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(a){if(a.length===0)return;const l=a.map(c=>function(u){if(u.op==="=="){if(ru(u.value))return{unaryFilter:{field:on(u.field),op:"IS_NAN"}};if(su(u.value))return{unaryFilter:{field:on(u.field),op:"IS_NULL"}}}else if(u.op==="!="){if(ru(u.value))return{unaryFilter:{field:on(u.field),op:"IS_NOT_NAN"}};if(su(u.value))return{unaryFilter:{field:on(u.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:on(u.field),op:Ly(u.op),value:u.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(e.filters);s&&(t.structuredQuery.where=s);const r=function(a){if(a.length!==0)return a.map(l=>function(c){return{field:on(c.field),direction:Oy(c.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const o=function(a,l){return a.C||sn(l)?l:{value:l}}(n,e.limit);return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt=Bu(e.startAt)),e.endAt&&(t.structuredQuery.endAt=Bu(e.endAt)),t}function Dy(n){let e=by(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){W(i===1);const u=t.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=qu(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(u=>function(h){return new ui(an(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;t.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,sn(h)?null:h}(t.limit));let l=null;t.startAt&&(l=zu(t.startAt));let c=null;return t.endAt&&(c=zu(t.endAt)),ty(e,s,o,r,a,"F",l,c)}function $y(n,e){const t=function(i,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return O()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function qu(n){return n?n.unaryFilter!==void 0?[xy(n)]:n.fieldFilter!==void 0?[Py(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>qu(e)).reduce((e,t)=>e.concat(t)):O():[]}function Bu(n){return{before:n.before,values:n.position}}function zu(n){const e=!!n.before,t=n.values||[];return new Ao(t,e)}function Oy(n){return Ey[n]}function Ly(n){return ky[n]}function on(n){return{fieldPath:n.canonicalString()}}function an(n){return Me.fromServerFormat(n.fieldPath)}function Py(n){return Pe.create(an(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(n.fieldFilter.op),n.fieldFilter.value)}function xy(n){switch(n.unaryFilter.op){case"IS_NAN":const e=an(n.unaryFilter.field);return Pe.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=an(n.unaryFilter.field);return Pe.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=an(n.unaryFilter.field);return Pe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=an(n.unaryFilter.field);return Pe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return O()}}function My(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ju(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}const Uy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new w((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof w?t:w.resolve(t)}catch(t){return w.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):w.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):w.reject(t)}static resolve(e){return new w((t,i)=>{t(e)})}static reject(e){return new w((t,i)=>{i(e)})}static waitFor(e){return new w((t,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&t()},l=>i(l))}),o=!0,r===s&&t()})}static or(e){let t=w.resolve(!1);for(const i of e)t=t.next(s=>s?w.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,r)=>{i.push(t.call(this,s,r))}),this.waitFor(i)}}function mi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&cy(r,e,i[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&No(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&No(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const i=e.get(t.key),s=i;this.applyToLocalView(s),i.isValidDocument()||s.convertToNoDocument(j.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&tn(this.mutations,e.mutations,(t,i)=>Iu(t,i))&&tn(this.baseMutations,e.baseMutations,(t,i)=>Iu(t,i))}}class Mo{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){W(e.mutations.length===i.length);let s=yy();const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Mo(e,t,i,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,i,s,r=j.min(),o=j.min(),a=Ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ot(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ot(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.Gt=e}}function By(n){const e=Dy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ny(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.zt=new jy}addToCollectionParentIndex(e,t){return this.zt.add(t),w.resolve()}getCollectionParents(e,t){return w.resolve(this.zt.getEntries(t))}}class jy{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Se(se.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Se(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new ln(0)}static re(){return new ln(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Uy)throw n;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s!==void 0){for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t])}else this.inner[i]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),!0;return!1}forEach(e){Ct(this.inner,(t,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return Zc(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.changes=new _i(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:j.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Re.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?w.resolve(i.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t,i){this.Je=e,this.An=t,this.Jt=i}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next(i=>this.Pn(e,t,i))}Pn(e,t,i){return this.Je.getEntry(e,t).next(s=>{for(const r of i)r.applyToLocalView(s);return s})}bn(e,t){e.forEach((i,s)=>{for(const r of t)r.applyToLocalView(s)})}vn(e,t){return this.Je.getEntries(e,t).next(i=>this.Vn(e,i).next(()=>i))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next(i=>this.bn(t,i))}getDocumentsMatchingQuery(e,t,i){return function(s){return N.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Sn(e,t.path):du(t)?this.Dn(e,t,i):this.Cn(e,t,i)}Sn(e,t){return this.Rn(e,new N(t)).next(i=>{let s=Do();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}Dn(e,t,i){const s=t.collectionGroup;let r=Do();return this.Jt.getCollectionParents(e,s).next(o=>w.forEach(o,a=>{const l=function(c,u){return new hi(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(s));return this.Cn(e,l,i).next(c=>{c.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}Cn(e,t,i){let s,r;return this.Je.getDocumentsMatchingQuery(e,t,i).next(o=>(s=o,this.An.getAllMutationBatchesAffectingQuery(e,t))).next(o=>(r=o,this.Nn(e,r,s).next(a=>{s=a;for(const l of r)for(const c of l.mutations){const u=c.key;let h=s.get(u);h==null&&(h=Re.newInvalidDocument(u),s=s.insert(u,h)),No(c,h,l.localWriteTime),h.isFoundDocument()||(s=s.remove(u))}}))).next(()=>(s.forEach((o,a)=>{bs(t,a)||(s=s.remove(o))}),s))}Nn(e,t,i){let s=Z();for(const o of t)for(const a of o.mutations)a instanceof Dt&&i.get(a.key)===null&&(s=s.add(a.key));let r=i;return this.Je.getEntries(e,s).next(o=>(o.forEach((a,l)=>{l.isFoundDocument()&&(r=r.insert(a,l))}),r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.kn=i,this.xn=s}static $n(e,t){let i=Z(),s=Z();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Uo(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,i,s){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(t)||i.isEqual(j.min())?this.Mn(e,t):this.On.vn(e,s).next(r=>{const o=this.Ln(t,r);return(ks(t)||Is(t))&&this.Bn(t.limitType,o,s,i)?this.Mn(e,t):(Qc()<=q.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ro(t)),this.On.getDocumentsMatchingQuery(e,t,i).next(a=>(o.forEach(l=>{a=a.insert(l.key,l)}),a)))})}Ln(e,t){let i=new Se(gu(e));return t.forEach((s,r)=>{bs(e,r)&&(i=i.add(r))}),i}Bn(e,t,i,s){if(i.size!==t.size)return!0;const r=e==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Mn(e,t){return Qc()<=q.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Ro(t)),this.On.getDocumentsMatchingQuery(e,t,j.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t,i,s){this.persistence=e,this.Un=t,this.k=s,this.qn=new Ne(H),this.Kn=new _i(r=>To(r),bo),this.jn=j.min(),this.An=e.getMutationQueue(i),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new Hu(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.qn))}}function Gy(n,e,t,i){return new Wy(n,e,t,i)}async function Ku(n,e){const t=L(n);let i=t.An,s=t.Wn;const r=await t.persistence.runTransaction("Handle user change","readonly",o=>{let a;return t.An.getAllMutationBatches(o).next(l=>(a=l,i=t.persistence.getMutationQueue(e),s=new Hu(t.Qn,i,t.persistence.getIndexManager()),i.getAllMutationBatches(o))).next(l=>{const c=[],u=[];let h=Z();for(const f of a){c.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}for(const f of l){u.push(f.batchId);for(const d of f.mutations)h=h.add(d.key)}return s.vn(o,h).next(f=>({Gn:f,removedBatchIds:c,addedBatchIds:u}))})});return t.An=i,t.Wn=s,t.Un.Fn(t.Wn),r}function Qy(n,e){const t=L(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=t.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,l,c){const u=l.batch,h=u.keys();let f=w.resolve();return h.forEach(d=>{f=f.next(()=>c.getEntry(a,d)).next(p=>{const I=l.docVersions.get(d);W(I!==null),p.version.compareTo(I)<0&&(u.applyToRemoteDocument(p,l),p.isValidDocument()&&c.addEntry(p,l.commitVersion))})}),f.next(()=>o.An.removeMutationBatch(a,u))}(t,i,e,r).next(()=>r.apply(i)).next(()=>t.An.performConsistencyCheck(i)).next(()=>t.Wn.vn(i,s))})}function Wu(n){const e=L(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function Jy(n,e){const t=L(n),i=e.snapshotVersion;let s=t.qn;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=t.Qn.newChangeBuffer({trackRemovals:!0});s=t.qn;const a=[];e.targetChanges.forEach((c,u)=>{const h=s.get(u);if(!h)return;a.push(t.He.removeMatchingKeys(r,c.removedDocuments,u).next(()=>t.He.addMatchingKeys(r,c.addedDocuments,u)));const f=c.resumeToken;if(f.approximateByteSize()>0){const d=h.withResumeToken(f,i).withSequenceNumber(r.currentSequenceNumber);s=s.insert(u,d),function(p,I,k){return W(I.resumeToken.approximateByteSize()>0),p.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-p.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(h,d,c)&&a.push(t.He.updateTargetData(r,d))}});let l=$t();if(e.documentUpdates.forEach((c,u)=>{e.resolvedLimboDocuments.has(c)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(Yy(r,o,e.documentUpdates,i,void 0).next(c=>{l=c})),!i.isEqual(j.min())){const c=t.He.getLastRemoteSnapshotVersion(r).next(u=>t.He.setTargetsMetadata(r,r.currentSequenceNumber,i));a.push(c)}return w.waitFor(a).next(()=>o.apply(r)).next(()=>t.Wn.Vn(r,l)).next(()=>l)}).then(r=>(t.qn=s,r))}function Yy(n,e,t,i,s){let r=Z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=$t();return t.forEach((l,c)=>{const u=o.get(l),h=(s==null?void 0:s.get(l))||i;c.isNoDocument()&&c.version.isEqual(j.min())?(e.removeEntry(l,h),a=a.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c,h),a=a.insert(l,c)):S("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),a})}function Xy(n,e){const t=L(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.An.getNextMutationBatchAfterBatchId(i,e)))}function Zy(n,e){const t=L(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.He.getTargetData(i,e).next(r=>r?(s=r,w.resolve(s)):t.He.allocateTargetId(i).next(o=>(s=new Ot(e,o,0,i.currentSequenceNumber),t.He.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.qn.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.qn=t.qn.insert(i.targetId,i),t.Kn.set(e,i.targetId)),i})}async function Vo(n,e,t){const i=L(n),s=i.qn.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,o=>i.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!mi(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}i.qn=i.qn.remove(e),i.Kn.delete(s.target)}function Gu(n,e,t){const i=L(n);let s=j.min(),r=Z();return i.persistence.runTransaction("Execute query","readonly",o=>function(a,l,c){const u=L(a),h=u.Kn.get(c);return h!==void 0?w.resolve(u.qn.get(h)):u.He.getTargetData(l,c)}(i,o,Nt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.He.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>i.Un.getDocumentsMatchingQuery(o,e,t?s:j.min(),t?r:Z())).next(a=>({documents:a,zn:r})))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return w.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var i;return this.Xn.set(t.id,{id:(i=t).id,version:i.version,createTime:Ze(i.createTime)}),w.resolve()}getNamedQuery(e,t){return w.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(i){return{name:i.name,query:By(i.bundledQuery),readTime:Ze(i.readTime)}}(t)),w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.ts=new Se(we.es),this.ns=new Se(we.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const i=new we(e,t);this.ts=this.ts.add(i),this.ns=this.ns.add(i)}rs(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.os(new we(e,t))}cs(e,t){e.forEach(i=>this.removeReference(i,t))}us(e){const t=new N(new se([])),i=new we(t,e),s=new we(t,e+1),r=[];return this.ns.forEachInRange([i,s],o=>{this.os(o),r.push(o.key)}),r}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new N(new se([])),i=new we(t,e),s=new we(t,e+1);let r=Z();return this.ns.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const t=new we(e,0),i=this.ts.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class we{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return N.comparator(e.key,t.key)||H(e.fs,t.fs)}static ss(e,t){return H(e.fs,t.fs)||N.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new Se(we.es)}checkEmpty(e){return w.resolve(this.An.length===0)}addMutationBatch(e,t,i,s){const r=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Fy(r,t,i,s);this.An.push(o);for(const a of s)this.ws=this.ws.add(new we(a.key,r)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return w.resolve(o)}lookupMutationBatch(e,t){return w.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.gs(i),r=s<0?0:s;return w.resolve(this.An.length>r?this.An[r]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return w.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new we(t,0),s=new we(t,Number.POSITIVE_INFINITY),r=[];return this.ws.forEachInRange([i,s],o=>{const a=this._s(o.fs);r.push(a)}),w.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Se(H);return t.forEach(s=>{const r=new we(s,0),o=new we(s,Number.POSITIVE_INFINITY);this.ws.forEachInRange([r,o],a=>{i=i.add(a.fs)})}),w.resolve(this.ys(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;N.isDocumentKey(r)||(r=r.child(""));const o=new we(new N(r),0);let a=new Se(H);return this.ws.forEachWhile(l=>{const c=l.key.path;return!!i.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.fs)),!0)},o),w.resolve(this.ys(a))}ys(e){const t=[];return e.forEach(i=>{const s=this._s(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){W(this.ps(t.batchId,"removed")===0),this.An.shift();let i=this.ws;return w.forEach(t.mutations,s=>{const r=new we(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.ws=i})}ee(e){}containsKey(e,t){const i=new we(t,0),s=this.ws.firstAfterOrEqual(i);return w.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.An.length,w.resolve()}ps(e,t){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new Ne(N.comparator),this.size=0}addEntry(e,t,i){const s=t.key,r=this.docs.get(s),o=r?r.size:0,a=this.Ts(t);return this.docs=this.docs.insert(s,{document:t.clone(),size:a,readTime:i}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return w.resolve(i?i.document.clone():Re.newInvalidDocument(t))}getEntries(e,t){let i=$t();return t.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.clone():Re.newInvalidDocument(s))}),w.resolve(i)}getDocumentsMatchingQuery(e,t,i){let s=$t();const r=new N(t.path.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:l,readTime:c}}=o.getNext();if(!t.path.isPrefixOf(a.path))break;c.compareTo(i)<=0||bs(t,l)&&(s=s.insert(l.key,l.clone()))}return w.resolve(s)}Es(e,t){return w.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new i_(this)}getSize(e){return w.resolve(this.size)}}class i_ extends Hy{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.document.isValidDocument()?t.push(this.De.addEntry(e,s.document,this.getReadTime(i))):this.De.removeEntry(i)}),w.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.persistence=e,this.Is=new _i(t=>To(t),bo),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.As=0,this.Rs=new Fo,this.targetCount=0,this.Ps=ln.ie()}forEachTarget(e,t){return this.Is.forEach((i,s)=>t(s)),w.resolve()}getLastRemoteSnapshotVersion(e){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return w.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.As&&(this.As=t),w.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new ln(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,w.resolve()}updateTargetData(e,t){return this.ce(t),w.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,w.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=t&&i.get(a.targetId)===null&&(this.Is.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),w.waitFor(r).next(()=>s)}getTargetCount(e){return w.resolve(this.targetCount)}getTargetData(e,t){const i=this.Is.get(t)||null;return w.resolve(i)}addMatchingKeys(e,t,i){return this.Rs.rs(t,i),w.resolve()}removeMatchingKeys(e,t,i){this.Rs.cs(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),w.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),w.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Rs.ls(t);return w.resolve(i)}containsKey(e,t){return w.resolve(this.Rs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){this.bs={},this.Be=new wo(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new s_(this),this.Jt=new zy,this.Je=function(i,s){return new n_(i,s)}(this.Jt,i=>this.referenceDelegate.vs(i)),this.k=new qy(t),this.Ye=new e_(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new t_(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,i){S("MemoryPersistence","Starting transaction:",e);const s=new o_(this.Be.next());return this.referenceDelegate.Vs(),i(s).next(r=>this.referenceDelegate.Ss(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Ds(e,t){return w.or(Object.values(this.bs).map(i=>()=>i.containsKey(e,t)))}}class o_ extends Vy{constructor(e){super(),this.currentSequenceNumber=e}}class qo{constructor(e){this.persistence=e,this.Cs=new Fo,this.Ns=null}static ks(e){return new qo(e)}get xs(){if(this.Ns)return this.Ns;throw O()}addReference(e,t,i){return this.Cs.addReference(i,t),this.xs.delete(i.toString()),w.resolve()}removeReference(e,t,i){return this.Cs.removeReference(i,t),this.xs.add(i.toString()),w.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),w.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach(s=>this.xs.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(r=>this.xs.add(r.toString()))}).next(()=>i.removeTargetData(e,t))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.xs,i=>{const s=N.fromPath(i);return this.$s(e,s).next(r=>{r||t.removeEntry(s)})}).next(()=>(this.Ns=null,t.apply(e)))}updateLimboDocument(e,t){return this.$s(e,t).next(i=>{i?this.xs.delete(t.toString()):this.xs.add(t.toString())})}vs(e){return 0}$s(e,t){return w.or([()=>w.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}class Qu{constructor(){this.activeTargetIds=Du()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class a_{constructor(){this.pi=new Qu,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,i){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Qu,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,i,s,r){const o=this.Ui(e,t);S("RestConnection","Sending: ",o,i);const a={};return this.qi(a,s,r),this.Ki(e,o,a,i).then(l=>(S("RestConnection","Received: ",l),l),l=>{throw Jc("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",i),l})}ji(e,t,i,s,r){return this.Bi(e,t,i,s,r)}qi(e,t,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+en,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}Ui(e,t){const i=c_[e];return`${this.Mi}/v1/${t}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,i,s){return new Promise((r,o)=>{const a=new $m;a.listenOnce(Rm.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yo.NO_ERROR:const c=a.getResponseJson();S("Connection","XHR received:",JSON.stringify(c)),r(c);break;case yo.TIMEOUT:S("Connection",'RPC "'+e+'" timed out'),o(new T(g.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const u=a.getStatus();if(S("Connection",'RPC "'+e+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const f=function(d){const p=d.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(p)>=0?p:g.UNKNOWN}(h.status);o(new T(f,h.message))}else o(new T(g.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new T(g.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{S("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(s);a.send(t,"POST",l,i,15)})}Qi(e,t,i){const s=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Am(),o=Cm(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Dm({})),this.qi(a.initMessageHeaders,t,i),Pa()||Ma()||Ff()||Ua()||qf()||xa()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=s.join("");S("Connection","Creating WebChannel: "+l,a);const c=r.createWebChannel(l,a);let u=!1,h=!1;const f=new u_({Vi:p=>{h?S("Connection","Not sending because WebChannel is closed:",p):(u||(S("Connection","Opening WebChannel transport."),c.open(),u=!0),S("Connection","WebChannel sending:",p),c.send(p))},Si:()=>c.close()}),d=(p,I,k)=>{p.listen(I,C=>{try{k(C)}catch(P){setTimeout(()=>{throw P},0)}})};return d(c,_s.EventType.OPEN,()=>{h||S("Connection","WebChannel transport opened.")}),d(c,_s.EventType.CLOSE,()=>{h||(h=!0,S("Connection","WebChannel transport closed"),f.Fi())}),d(c,_s.EventType.ERROR,p=>{h||(h=!0,Jc("Connection","WebChannel transport errored:",p),f.Fi(new T(g.UNAVAILABLE,"The operation could not be completed")))}),d(c,_s.EventType.MESSAGE,p=>{var I;if(!h){const k=p.data[0];W(!!k);const C=k,P=C.error||((I=C[0])===null||I===void 0?void 0:I.error);if(P){S("Connection","WebChannel received error:",P);const ce=P.status;let pe=function(M){const ue=de[M];if(ue!==void 0)return Ru(ue)}(ce),ve=P.message;pe===void 0&&(pe=g.INTERNAL,ve="Unknown error status: "+ce+" with message "+P.message),h=!0,f.Fi(new T(pe,ve)),c.close()}else S("Connection","WebChannel received:",k),f.Oi(k)}}),d(o,Nm.STAT_EVENT,p=>{p.stat===Wc.PROXY?S("Connection","Detected buffering proxy"):p.stat===Wc.NOPROXY&&S("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}function Bo(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n){return new Iy(n,!0)}class Yu{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Oe=e,this.timerId=t,this.Wi=i,this.Gi=s,this.zi=r,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),i=Math.max(0,Date.now()-this.Yi),s=Math.max(0,t-i);s>0&&S("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,s,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,i,s,r,o,a,l){this.Oe=e,this.nr=i,this.sr=s,this.ir=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Yu(e,t)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.ar===null&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():t&&t.code===g.RESOURCE_EXHAUSTED?(ut(t.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.rr===t&&this.Ir(i,s)},i=>{e(()=>{const s=new T(g.UNKNOWN,"Fetching auth token failed: "+i.message);return this.Ar(s)})})}Ir(e,t){const i=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di(()=>{i(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(s=>{i(()=>this.Ar(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget(()=>this.rr===e?t():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class f_ extends Xu{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.k=r}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=Sy(this.k,e),i=function(s){if(!("targetChange"in s))return j.min();const r=s.targetChange;return r.targetIds&&r.targetIds.length?j.min():r.readTime?Ze(r.readTime):j.min()}(e);return this.listener.Pr(t,i)}br(e){const t={};t.database=xo(this.k),t.addTarget=function(s,r){let o;const a=r.target;return o=So(a)?{documents:Ry(s,a)}:{query:Ny(s,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Mu(s,r.resumeToken):r.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Ps(s,r.snapshotVersion.toTimestamp())),o}(this.k,e);const i=$y(this.k,e);i&&(t.labels=i),this.gr(t)}vr(e){const t={};t.database=xo(this.k),t.removeTarget=e,this.gr(t)}}class d_ extends Xu{constructor(e,t,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,o),this.k=r,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=Cy(e.writeResults,e.commitTime),i=Ze(e.commitTime);return this.listener.Cr(i,t)}return W(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=xo(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>Ay(this.k,i))};this.gr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_ extends class{}{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=i,this.k=s,this.$r=!1}Fr(){if(this.$r)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.Bi(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(g.UNKNOWN,s.toString())})}ji(e,t,i){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.ir.ji(e,t,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new T(g.UNKNOWN,s.toString())})}terminate(){this.$r=!0}}class g_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){this.Or===0&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(ut(t),this.Lr=!1):S("OnlineStateTracker",t)}jr(){this.Mr!==null&&(this.Mr.cancel(),this.Mr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=r,this.Hr.Ei(o=>{i.enqueueAndForget(async()=>{Lt(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=L(a);l.Gr.add(4),await wi(l),l.Jr.set("Unknown"),l.Gr.delete(4),await Ms(l)}(this))})}),this.Jr=new g_(i,s)}}async function Ms(n){if(Lt(n))for(const e of n.zr)await e(!0)}async function wi(n){for(const e of n.zr)await e(!1)}function Zu(n,e){const t=L(n);t.Wr.has(e.targetId)||(t.Wr.set(e.targetId,e),Ho(t)?jo(t):cn(t).lr()&&zo(t,e))}function eh(n,e){const t=L(n),i=cn(t);t.Wr.delete(e),i.lr()&&th(t,e),t.Wr.size===0&&(i.lr()?i._r():Lt(t)&&t.Jr.set("Unknown"))}function zo(n,e){n.Yr.X(e.targetId),cn(n).br(e)}function th(n,e){n.Yr.X(e),cn(n).vr(e)}function jo(n){n.Yr=new vy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Wr.get(e)||null}),cn(n).start(),n.Jr.Br()}function Ho(n){return Lt(n)&&!cn(n).hr()&&n.Wr.size>0}function Lt(n){return L(n).Gr.size===0}function nh(n){n.Yr=void 0}async function y_(n){n.Wr.forEach((e,t)=>{zo(n,e)})}async function __(n,e){nh(n),Ho(n)?(n.Jr.Kr(e),jo(n)):n.Jr.set("Unknown")}async function w_(n,e,t){if(n.Jr.set("Online"),e instanceof Ou&&e.state===2&&e.cause)try{await async function(i,s){const r=s.cause;for(const o of s.targetIds)i.Wr.has(o)&&(await i.remoteSyncer.rejectListen(o,r),i.Wr.delete(o),i.Yr.removeTarget(o))}(n,e)}catch(i){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Us(n,i)}else if(e instanceof Ls?n.Yr.ot(e):e instanceof $u?n.Yr.dt(e):n.Yr.ut(e),!t.isEqual(j.min()))try{const i=await Wu(n.localStore);t.compareTo(i)>=0&&await function(s,r){const o=s.Yr.gt(r);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const c=s.Wr.get(l);c&&s.Wr.set(l,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const l=s.Wr.get(a);if(!l)return;s.Wr.set(a,l.withResumeToken(Ce.EMPTY_BYTE_STRING,l.snapshotVersion)),th(s,a);const c=new Ot(l.target,a,1,l.sequenceNumber);zo(s,c)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(i){S("RemoteStore","Failed to raise snapshot:",i),await Us(n,i)}}async function Us(n,e,t){if(!mi(e))throw e;n.Gr.add(1),await wi(n),n.Jr.set("Offline"),t||(t=()=>Wu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await t(),n.Gr.delete(1),await Ms(n)})}function ih(n,e){return e().catch(t=>Us(n,t,e))}async function Vs(n){const e=L(n),t=pt(e);let i=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;v_(e);)try{const s=await Xy(e.localStore,i);if(s===null){e.Qr.length===0&&t._r();break}i=s.batchId,E_(e,s)}catch(s){await Us(e,s)}sh(e)&&rh(e)}function v_(n){return Lt(n)&&n.Qr.length<10}function E_(n,e){n.Qr.push(e);const t=pt(n);t.lr()&&t.Sr&&t.Dr(e.mutations)}function sh(n){return Lt(n)&&!pt(n).hr()&&n.Qr.length>0}function rh(n){pt(n).start()}async function k_(n){pt(n).kr()}async function I_(n){const e=pt(n);for(const t of n.Qr)e.Dr(t.mutations)}async function T_(n,e,t){const i=n.Qr.shift(),s=Mo.from(i,e,t);await ih(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vs(n)}async function b_(n,e){e&&pt(n).Sr&&await async function(t,i){if(s=i.code,dy(s)&&s!==g.ABORTED){const r=t.Qr.shift();pt(t).wr(),await ih(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Vs(t)}var s}(n,e),sh(n)&&rh(n)}async function S_(n,e){const t=L(n);e?(t.Gr.delete(2),await Ms(t)):e||(t.Gr.add(2),await wi(t),t.Jr.set("Unknown"))}function cn(n){return n.Xr||(n.Xr=function(e,t,i){const s=L(e);return s.Fr(),new f_(t,s.ir,s.authCredentials,s.appCheckCredentials,s.k,i)}(n.datastore,n.asyncQueue,{Di:y_.bind(null,n),Ni:__.bind(null,n),Pr:w_.bind(null,n)}),n.zr.push(async e=>{e?(n.Xr.wr(),Ho(n)?jo(n):n.Jr.set("Unknown")):(await n.Xr.stop(),nh(n))})),n.Xr}function pt(n){return n.Zr||(n.Zr=function(e,t,i){const s=L(e);return s.Fr(),new d_(t,s.ir,s.authCredentials,s.appCheckCredentials,s.k,i)}(n.datastore,n.asyncQueue,{Di:k_.bind(null,n),Ni:b_.bind(null,n),Nr:I_.bind(null,n),Cr:T_.bind(null,n)}),n.zr.push(async e=>{e?(n.Zr.wr(),await Vs(n)):(await n.Zr.stop(),n.Qr.length>0&&(S("RemoteStore",`Stopping write stream with ${n.Qr.length} pending writes`),n.Qr=[]))})),n.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,a=new Ko(e,t,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new T(g.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wo(n,e){if(ut("AsyncQueue",`${e}: ${n}`),mi(n))return new T(g.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e){this.comparator=e?(t,i)=>e(t,i)||N.comparator(t.key,i.key):(t,i)=>N.comparator(t.key,i.key),this.keyedMap=Do(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new un(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof un)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new un;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.eo=new Ne(N.comparator)}track(e){const t=e.doc.key,i=this.eo.get(t);i?e.type!==0&&i.type===3?this.eo=this.eo.insert(t,e):e.type===3&&i.type!==1?this.eo=this.eo.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.eo=this.eo.remove(t):e.type===1&&i.type===2?this.eo=this.eo.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):O():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal((t,i)=>{e.push(i)}),e}}class hn{constructor(e,t,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,t,i,s){const r=[];return t.forEach(o=>{r.push({type:0,doc:o})}),new hn(e,t,un.emptySet(t),r,i,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ts(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(){this.so=void 0,this.listeners=[]}}class C_{constructor(){this.queries=new _i(e=>pu(e),Ts),this.onlineState="Unknown",this.io=new Set}}async function ah(n,e){const t=L(n),i=e.query;let s=!1,r=t.queries.get(i);if(r||(s=!0,r=new A_),s)try{r.so=await t.onListen(i)}catch(o){const a=Wo(o,`Initialization of query '${Ro(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,r),r.listeners.push(e),e.ro(t.onlineState),r.so&&e.oo(r.so)&&Go(t)}async function lh(n,e){const t=L(n),i=e.query;let s=!1;const r=t.queries.get(i);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),s=r.listeners.length===0)}if(s)return t.queries.delete(i),t.onUnlisten(i)}function R_(n,e){const t=L(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const a of o.listeners)a.oo(s)&&(i=!0);o.so=s}}i&&Go(t)}function N_(n,e,t){const i=L(n),s=i.queries.get(e);if(s)for(const r of s.listeners)r.onError(t);i.queries.delete(e)}function Go(n){n.io.forEach(e=>{e.next()})}class ch{constructor(e,t,i){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=i||{}}oo(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new hn(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const i=t!=="Offline";return(!this.options.wo||!i)&&(!e.docs.isEmpty()||t==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}fo(e){e=hn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.key=e}}class hh{constructor(e){this.key=e}}class D_{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=Z(),this.mutatedKeys=Z(),this.Ao=gu(e),this.Ro=new un(this.Ao)}get Po(){return this.To}bo(e,t){const i=t?t.vo:new oh,s=t?t.Ro:this.Ro;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=ks(this.query)&&s.size===this.query.limit?s.last():null,c=Is(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const f=s.get(u),d=bs(this.query,h)?h:null,p=!!f&&this.mutatedKeys.has(f.key),I=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let k=!1;f&&d?f.data.isEqual(d.data)?p!==I&&(i.track({type:3,doc:d}),k=!0):this.Vo(f,d)||(i.track({type:2,doc:d}),k=!0,(l&&this.Ao(d,l)>0||c&&this.Ao(d,c)<0)&&(a=!0)):!f&&d?(i.track({type:0,doc:d}),k=!0):f&&!d&&(i.track({type:1,doc:f}),k=!0,(l||c)&&(a=!0)),k&&(d?(o=o.add(d),r=I?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),ks(this.query)||Is(this.query))for(;o.size>this.query.limit;){const u=ks(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),i.track({type:1,doc:u})}return{Ro:o,vo:i,Bn:a,mutatedKeys:r}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i){const s=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const r=e.vo.no();r.sort((c,u)=>function(h,f){const d=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return d(h)-d(f)}(c.type,u.type)||this.Ao(c.doc,u.doc)),this.So(i);const o=t?this.Do():[],a=this.Io.size===0&&this.current?1:0,l=a!==this.Eo;return this.Eo=a,r.length!==0||l?{snapshot:new hn(this.query,e.Ro,s,r,e.mutatedKeys,a===0,l,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new oh,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(t=>this.To=this.To.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Z(),this.Ro.forEach(i=>{this.No(i.key)&&(this.Io=this.Io.add(i.key))});const t=[];return e.forEach(i=>{this.Io.has(i)||t.push(new hh(i))}),this.Io.forEach(i=>{e.has(i)||t.push(new uh(i))}),t}ko(e){this.To=e.zn,this.Io=Z();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return hn.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class $_{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class O_{constructor(e){this.key=e,this.$o=!1}}class L_{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Fo={},this.Oo=new _i(a=>pu(a),Ts),this.Mo=new Map,this.Lo=new Set,this.Bo=new Ne(N.comparator),this.Uo=new Map,this.qo=new Fo,this.Ko={},this.jo=new Map,this.Qo=ln.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function P_(n,e){const t=H_(n);let i,s;const r=t.Oo.get(e);if(r)i=r.targetId,t.sharedClientState.addLocalQueryTarget(i),s=r.view.xo();else{const o=await Zy(t.localStore,Nt(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);i=o.targetId,s=await x_(t,e,i,a==="current"),t.isPrimaryClient&&Zu(t.remoteStore,o)}return s}async function x_(n,e,t,i){n.Go=(u,h,f)=>async function(d,p,I,k){let C=p.view.bo(I);C.Bn&&(C=await Gu(d.localStore,p.query,!1).then(({documents:pe})=>p.view.bo(pe,C)));const P=k&&k.targetChanges.get(p.targetId),ce=p.view.applyChanges(C,d.isPrimaryClient,P);return yh(d,p.targetId,ce.Co),ce.snapshot}(n,u,h,f);const s=await Gu(n.localStore,e,!0),r=new D_(e,s.zn),o=r.bo(s.documents),a=gi.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline"),l=r.applyChanges(o,n.isPrimaryClient,a);yh(n,t,l.Co);const c=new $_(e,t,r);return n.Oo.set(e,c),n.Mo.has(t)?n.Mo.get(t).push(e):n.Mo.set(t,[e]),l.snapshot}async function M_(n,e){const t=L(n),i=t.Oo.get(e),s=t.Mo.get(i.targetId);if(s.length>1)return t.Mo.set(i.targetId,s.filter(r=>!Ts(r,e))),void t.Oo.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(i.targetId),t.sharedClientState.isActiveQueryTarget(i.targetId)||await Vo(t.localStore,i.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(i.targetId),eh(t.remoteStore,i.targetId),Qo(t,i.targetId)}).catch(yi)):(Qo(t,i.targetId),await Vo(t.localStore,i.targetId,!0))}async function U_(n,e,t){const i=K_(n);try{const s=await function(r,o){const a=L(r),l=Fe.now(),c=o.reduce((h,f)=>h.add(f.key),Z());let u;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,c).next(f=>{u=f;const d=[];for(const p of o){const I=uy(p,u.get(p.key));I!=null&&d.push(new Dt(p.key,I,ou(I.value.mapValue),dt.exists(!0)))}return a.An.addMutationBatch(h,l,d,o)})).then(h=>(h.applyToLocalDocumentSet(u),{batchId:h.batchId,changes:u}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let l=r.Ko[r.currentUser.toKey()];l||(l=new Ne(H)),l=l.insert(o,a),r.Ko[r.currentUser.toKey()]=l}(i,s.batchId,t),await vi(i,s.changes),await Vs(i.remoteStore)}catch(s){const r=Wo(s,"Failed to persist write");t.reject(r)}}async function fh(n,e){const t=L(n);try{const i=await Jy(t.localStore,e);e.targetChanges.forEach((s,r)=>{const o=t.Uo.get(r);o&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.$o=!0:s.modifiedDocuments.size>0?W(o.$o):s.removedDocuments.size>0&&(W(o.$o),o.$o=!1))}),await vi(t,i,e)}catch(i){await yi(i)}}function dh(n,e,t){const i=L(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Oo.forEach((r,o)=>{const a=o.view.ro(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=L(r);a.onlineState=o;let l=!1;a.queries.forEach((c,u)=>{for(const h of u.listeners)h.ro(o)&&(l=!0)}),l&&Go(a)}(i.eventManager,e),s.length&&i.Fo.Pr(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function V_(n,e,t){const i=L(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Uo.get(e),r=s&&s.key;if(r){let o=new Ne(N.comparator);o=o.insert(r,Re.newNoDocument(r,j.min()));const a=Z().add(r),l=new Os(j.min(),new Map,new Se(H),o,a);await fh(i,l),i.Bo=i.Bo.remove(r),i.Uo.delete(e),Jo(i)}else await Vo(i.localStore,e,!1).then(()=>Qo(i,e,t)).catch(yi)}async function F_(n,e){const t=L(n),i=e.batch.batchId;try{const s=await Qy(t.localStore,e);gh(t,i,null),ph(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await vi(t,s)}catch(s){await yi(s)}}async function q_(n,e,t){const i=L(n);try{const s=await function(r,o){const a=L(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return a.An.lookupMutationBatch(l,o).next(u=>(W(u!==null),c=u.keys(),a.An.removeMutationBatch(l,u))).next(()=>a.An.performConsistencyCheck(l)).next(()=>a.Wn.vn(l,c))})}(i.localStore,e);gh(i,e,t),ph(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await vi(i,s)}catch(s){await yi(s)}}function ph(n,e){(n.jo.get(e)||[]).forEach(t=>{t.resolve()}),n.jo.delete(e)}function gh(n,e,t){const i=L(n);let s=i.Ko[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(t?r.reject(t):r.resolve(),s=s.remove(e)),i.Ko[i.currentUser.toKey()]=s}}function Qo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Mo.get(e))n.Oo.delete(i),t&&n.Fo.zo(i,t);n.Mo.delete(e),n.isPrimaryClient&&n.qo.us(e).forEach(i=>{n.qo.containsKey(i)||mh(n,i)})}function mh(n,e){n.Lo.delete(e.path.canonicalString());const t=n.Bo.get(e);t!==null&&(eh(n.remoteStore,t),n.Bo=n.Bo.remove(e),n.Uo.delete(t),Jo(n))}function yh(n,e,t){for(const i of t)i instanceof uh?(n.qo.addReference(i.key,e),B_(n,i)):i instanceof hh?(S("SyncEngine","Document no longer in limbo: "+i.key),n.qo.removeReference(i.key,e),n.qo.containsKey(i.key)||mh(n,i.key)):O()}function B_(n,e){const t=e.key,i=t.path.canonicalString();n.Bo.get(t)||n.Lo.has(i)||(S("SyncEngine","New document in limbo: "+t),n.Lo.add(i),Jo(n))}function Jo(n){for(;n.Lo.size>0&&n.Bo.size<n.maxConcurrentLimboResolutions;){const e=n.Lo.values().next().value;n.Lo.delete(e);const t=new N(se.fromString(e)),i=n.Qo.next();n.Uo.set(i,new O_(t)),n.Bo=n.Bo.insert(t,i),Zu(n.remoteStore,new Ot(Nt(Co(t.path)),i,2,wo.I))}}async function vi(n,e,t){const i=L(n),s=[],r=[],o=[];i.Oo.isEmpty()||(i.Oo.forEach((a,l)=>{o.push(i.Go(l,e,t).then(c=>{if(c){i.isPrimaryClient&&i.sharedClientState.updateQueryState(l.targetId,c.fromCache?"not-current":"current"),s.push(c);const u=Uo.$n(l.targetId,c);r.push(u)}}))}),await Promise.all(o),i.Fo.Pr(s),await async function(a,l){const c=L(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>w.forEach(l,h=>w.forEach(h.kn,f=>c.persistence.referenceDelegate.addReference(u,h.targetId,f)).next(()=>w.forEach(h.xn,f=>c.persistence.referenceDelegate.removeReference(u,h.targetId,f)))))}catch(u){if(!mi(u))throw u;S("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const f=c.qn.get(h),d=f.snapshotVersion,p=f.withLastLimboFreeSnapshotVersion(d);c.qn=c.qn.insert(h,p)}}}(i.localStore,r))}async function z_(n,e){const t=L(n);if(!t.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const i=await Ku(t.localStore,e);t.currentUser=e,function(s,r){s.jo.forEach(o=>{o.forEach(a=>{a.reject(new T(g.CANCELLED,r))})}),s.jo.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await vi(t,i.Gn)}}function j_(n,e){const t=L(n),i=t.Uo.get(e);if(i&&i.$o)return Z().add(i.key);{let s=Z();const r=t.Mo.get(e);if(!r)return s;for(const o of r){const a=t.Oo.get(o);s=s.unionWith(a.view.Po)}return s}}function H_(n){const e=L(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=fh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=j_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V_.bind(null,e),e.Fo.Pr=R_.bind(null,e.eventManager),e.Fo.zo=N_.bind(null,e.eventManager),e}function K_(n){const e=L(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=F_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=q_.bind(null,e),e}class W_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=xs(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return Gy(this.persistence,new Ky,e.initialUser,this.k)}Yo(e){return new r_(qo.ks,this.k)}Jo(e){return new a_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class G_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>dh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=z_.bind(null,this.syncEngine),await S_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new C_}createDatastore(e){const t=xs(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new h_(s));var s;return function(r,o,a,l){return new p_(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return t=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>dh(this.syncEngine,a,0),o=Ju.bt()?new Ju:new l_,new m_(t,i,s,r,o);var t,i,s,r,o}createSyncEngine(e,t){return function(i,s,r,o,a,l,c){const u=new L_(i,s,r,o,a,l);return c&&(u.Wo=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=L(e);S("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await wi(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,t,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=xe.UNAUTHENTICATED,this.clientId=Yc.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{S("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Wo(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function J_(n,e){n.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Ku(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Y_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await X_(n);S("FirestoreClient","Initializing OnlineComponentProvider");const i=await n.getConfiguration();await e.initialize(t,i),n.setCredentialChangeListener(s=>async function(r,o){const a=L(r);a.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const l=Lt(a);a.Gr.add(3),await wi(a),l&&a.Jr.set("Unknown"),await a.remoteSyncer.handleCredentialChange(o),a.Gr.delete(3),await Ms(a)}(e.remoteStore,s)),n.onlineComponents=e}async function X_(n){return n.offlineComponents||(S("FirestoreClient","Using default OfflineComponentProvider"),await J_(n,new W_)),n.offlineComponents}async function wh(n){return n.onlineComponents||(S("FirestoreClient","Using default OnlineComponentProvider"),await Y_(n,new G_)),n.onlineComponents}function Z_(n){return wh(n).then(e=>e.syncEngine)}async function Yo(n){const e=await wh(n),t=e.eventManager;return t.onListen=P_.bind(null,e.syncEngine),t.onUnlisten=M_.bind(null,e.syncEngine),t}function ew(n,e,t={}){const i=new ht;return n.asyncQueue.enqueueAndForget(async()=>function(s,r,o,a,l){const c=new _h({next:h=>{r.enqueueAndForget(()=>lh(s,u)),h.fromCache&&a.source==="server"?l.reject(new T(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new ch(o,c,{includeMetadataChanges:!0,wo:!0});return ah(s,u)}(await Yo(n),n.asyncQueue,e,t,i)),i.promise}class tw{constructor(e,t,i,s,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Ei{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(n,e,t){if(!t)throw new T(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nw(n,e,t,i){if(e===!0&&i===!0)throw new T(g.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function kh(n){if(!N.isDocumentKey(n))throw new T(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ih(n){if(N.isDocumentKey(n))throw new T(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Fs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":O()}function et(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new T(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Fs(n);throw new T(g.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new T(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new T(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,nw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,i){this._authCredentials=t,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Th({}),this._settingsFrozen=!1,e instanceof Ei?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new T(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ei(s.options.projectId)}(e))}get app(){if(!this._app)throw new T(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new T(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Th(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Lm;switch(t.type){case"gapi":const i=t.client;return W(!(typeof i!="object"||i===null||!i.auth||!i.auth.getAuthHeaderValueForFirstParty)),new Mm(i,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=vh.get(e);t&&(S("ComponentProvider","Removing Datastore"),vh.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ue(this.firestore,e,this._key)}}class fn{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new fn(this.firestore,e,this._query)}}class gt extends fn{constructor(e,t,i){super(e,t,Co(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ue(this.firestore,null,new N(e))}withConverter(e){return new gt(this.firestore,e,this._path)}}function iE(n,e,...t){if(n=Ee(n),Eh("collection","path",e),n instanceof Xo){const i=se.fromString(e,...t);return Ih(i),new gt(n,null,i)}{if(!(n instanceof Ue||n instanceof gt))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(se.fromString(e,...t));return Ih(i),new gt(n.firestore,null,i)}}function iw(n,e,...t){if(n=Ee(n),arguments.length===1&&(e=Yc.A()),Eh("doc","path",e),n instanceof Xo){const i=se.fromString(e,...t);return kh(i),new Ue(n,null,new N(i))}{if(!(n instanceof Ue||n instanceof gt))throw new T(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(se.fromString(e,...t));return kh(i),new Ue(n.firestore,n instanceof gt?n.converter:null,new N(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Yu(this,"async_queue_retry"),this.Ra=()=>{const t=Bo();t&&S("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const e=Bo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Bo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise(()=>{});const t=new ht;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ga.push(e),this.va()))}async va(){if(this.ga.length!==0){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(e){if(!mi(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(e){const t=this.ma.then(()=>(this.Ea=!0,e().catch(i=>{this.Ta=i,this.Ea=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw ut("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Ea=!1,i))));return this.ma=t,t}enqueueAfterDelay(e,t,i){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const s=Ko.createAndSchedule(this,e,t,i,r=>this.Va(r));return this.pa.push(s),s}Pa(){this.Ta&&O()}verifyOperationInProgress(){}async Sa(){let e;do e=this.ma,await e;while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then(()=>{this.pa.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.pa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Sa()})}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}function bh(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const i=e;for(const s of t)if(s in i&&typeof i[s]=="function")return!0;return!1}(n,["next","error","complete"])}class Pt extends Xo{constructor(e,t,i){super(e,t,i),this.type="firestore",this._queue=new sw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Sh(this),this._firestoreClient.terminate()}}function sE(n=Ba()){return cr(n,"firestore").getImmediate()}function Zo(n){return n._firestoreClient||Sh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Sh(n){var e;const t=n._freezeSettings(),i=function(s,r,o,a){return new tw(s,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Q_(n._authCredentials,n._appCheckCredentials,n._queue,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new T(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dn(Ce.fromBase64String(e))}catch(t){throw new T(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dn(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new T(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new T(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return H(this._lat,e._lat)||H(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw=/^__.*__$/;class ow{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ds(e,this.data,t,this.fieldTransforms)}}class Ah{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Dt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ch(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class na{constructor(e,t,i,s,r,o){this.settings=e,this.databaseId=t,this.k=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ka(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new na(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$a({path:i,Oa:!1});return s.Ma(e),s}La(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.$a({path:i,Oa:!1});return s.ka(),s}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return zs(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(e.length===0)throw this.Ua("Document fields must not be empty");if(Ch(this.xa)&&rw.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class aw{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=i||xs(e)}ja(e,t,i,s=!1){return new na({xa:e,methodName:t,Ka:i,path:Me.emptyPath(),Oa:!1,qa:s},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function ia(n){const e=n._freezeSettings(),t=xs(n._databaseId);return new aw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lw(n,e,t,i,s,r={}){const o=n.ja(r.merge||r.mergeFields?2:0,e,t,s);sa("Data must be an object, but it was:",o,i);const a=Rh(i,o);let l,c;if(r.merge)l=new oi(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=ra(e,h,t);if(!o.contains(f))throw new T(g.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Dh(u,f)||u.push(f)}l=new oi(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new ow(new qe(a),l,c)}class Bs extends ea{_toFieldTransform(e){if(e.xa!==2)throw e.xa===1?e.Ua(`${this._methodName}() can only appear at the top level of your update data`):e.Ua(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bs}}function cw(n,e,t,i){const s=n.ja(1,e,t);sa("Data must be an object, but it was:",s,i);const r=[],o=qe.empty();Ct(i,(l,c)=>{const u=oa(e,l,t);c=Ee(c);const h=s.La(u);if(c instanceof Bs)r.push(u);else{const f=ki(c,h);f!=null&&(r.push(u),o.set(u,f))}});const a=new oi(r);return new Ah(o,a,s.fieldTransforms)}function uw(n,e,t,i,s,r){const o=n.ja(1,e,t),a=[ra(e,i,t)],l=[s];if(r.length%2!=0)throw new T(g.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(ra(e,r[f])),l.push(r[f+1]);const c=[],u=qe.empty();for(let f=a.length-1;f>=0;--f)if(!Dh(c,a[f])){const d=a[f];let p=l[f];p=Ee(p);const I=o.La(d);if(p instanceof Bs)c.push(d);else{const k=ki(p,I);k!=null&&(c.push(d),u.set(d,k))}}const h=new oi(c);return new Ah(u,h,o.fieldTransforms)}function hw(n,e,t,i=!1){return ki(t,n.ja(i?4:3,e))}function ki(n,e){if(Nh(n=Ee(n)))return sa("Unsupported field value:",e,n),Rh(n,e);if(n instanceof ea)return function(t,i){if(!Ch(i.xa))throw i.Ua(`${t._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Ua(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Oa&&e.xa!==4)throw e.Ua("Nested arrays are not supported");return function(t,i){const s=[];let r=0;for(const o of t){let a=ki(o,i.Ba(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(n,e)}return function(t,i){if((t=Ee(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return sy(i.k,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Fe.fromDate(t);return{timestampValue:Ps(i.k,s)}}if(t instanceof Fe){const s=new Fe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ps(i.k,s)}}if(t instanceof ta)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof dn)return{bytesValue:Mu(i.k,t._byteString)};if(t instanceof Ue){const s=i.databaseId,r=t.firestore._databaseId;if(!r.isEqual(s))throw i.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:$o(t.firestore._databaseId||i.databaseId,t._key.path)}}throw i.Ua(`Unsupported field value: ${Fs(t)}`)}(n,e)}function Rh(n,e){const t={};return Zc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ct(n,(i,s)=>{const r=ki(s,e.Fa(i));r!=null&&(t[i]=r)}),{mapValue:{fields:t}}}function Nh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Fe||n instanceof ta||n instanceof dn||n instanceof Ue||n instanceof ea)}function sa(n,e,t){if(!Nh(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const i=Fs(t);throw i==="an object"?e.Ua(n+" a custom object"):e.Ua(n+" "+i)}}function ra(n,e,t){if((e=Ee(e))instanceof qs)return e._internalPath;if(typeof e=="string")return oa(n,e);throw zs("Field path arguments must be of type string or FieldPath.",n,!1,void 0,t)}const fw=new RegExp("[~\\*/\\[\\]]");function oa(n,e,t){if(e.search(fw)>=0)throw zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new qs(...e.split("."))._internalPath}catch{throw zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function zs(n,e,t,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new T(g.INVALID_ARGUMENT,a+n+l)}function Dh(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class dw extends $h{data(){return super.data()}}function aa(n,e){return typeof e=="string"?oa(n,e):e instanceof qs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Oh extends $h{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new js(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(aa("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class js extends Oh{data(e={}){return super.data(e)}}class Lh{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ii(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new js(this._firestore,this._userDataWriter,i.key,i,new Ii(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new T(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let r=0;return i._snapshot.docChanges.map(o=>({type:"added",doc:new js(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ii(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter),oldIndex:-1,newIndex:r++}))}{let r=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new js(i._firestore,i._userDataWriter,o.doc.key,o.doc,new Ii(i._snapshot.mutatedKeys.has(o.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return o.type!==0&&(l=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:pw(o.type),doc:a,oldIndex:l,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function pw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){if(Is(n)&&n.explicitOrderBy.length===0)throw new T(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gw{}function rE(n,...e){for(const t of e)n=t._apply(n);return n}class mw extends gw{constructor(e,t,i){super(),this.Ga=e,this.za=t,this.Ha=i,this.type="where"}_apply(e){const t=ia(e.firestore),i=function(s,r,o,a,l,c,u){let h;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new T(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on FieldPath.documentId().`);if(c==="in"||c==="not-in"){Mh(u,c);const d=[];for(const p of u)d.push(xh(a,s,p));h={arrayValue:{values:d}}}else h=xh(a,s,u)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Mh(u,c),h=hw(o,r,u,c==="in"||c==="not-in");const f=Pe.create(l,c,h);return function(d,p){if(p.V()){const k=fu(d);if(k!==null&&!k.isEqual(p.field))throw new T(g.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${k.toString()}' and '${p.field.toString()}'`);const C=hu(d);C!==null&&yw(d,p.field,C)}const I=function(k,C){for(const P of k.filters)if(C.indexOf(P.op)>=0)return P.op;return null}(d,function(k){switch(k){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(p.op));if(I!==null)throw I===p.op?new T(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${p.op.toString()}' filter.`):new T(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${p.op.toString()}' filters with '${I.toString()}' filters.`)}(s,f),f}(e._query,"where",t,e.firestore._databaseId,this.Ga,this.za,this.Ha);return new fn(e.firestore,e.converter,function(s,r){const o=s.filters.concat([r]);return new hi(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,i))}}function oE(n,e,t){const i=e,s=aa("where",n);return new mw(s,i,t)}function xh(n,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new T(g.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!du(e)&&t.indexOf("/")!==-1)throw new T(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(se.fromString(t));if(!N.isDocumentKey(i))throw new T(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return iu(n,new N(i))}if(t instanceof Ue)return iu(n,t._key);throw new T(g.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fs(t)}.`)}function Mh(n,e){if(!Array.isArray(n)||n.length===0)throw new T(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new T(g.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function yw(n,e,t){if(!t.isEqual(e))throw new T(g.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{convertValue(e,t="none"){switch(Rt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw O()}}convertObject(e,t){const i={};return Ct(e.fields,(s,r)=>{i[s]=this.convertValue(r,t)}),i}convertGeoPoint(e){return new ta(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=tu(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const t=ft(e);return new Fe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=se.fromString(e);W(ju(i));const s=new Ei(i.get(1),i.get(3)),r=new N(i.popFirst(5));return s.isEqual(t)||ut(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}class la extends _w{constructor(e){super(),this.firestore=e}convertBytes(e){return new dn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ue(this.firestore,null,t)}}function aE(n){n=et(n,fn);const e=et(n.firestore,Pt),t=Zo(e),i=new la(e);return Ph(n._query),ew(t,n._query).then(s=>new Lh(e,i,n,s))}function lE(n,e,t,...i){n=et(n,Ue);const s=et(n.firestore,Pt),r=ia(s);let o;return o=typeof(e=Ee(e))=="string"||e instanceof qs?uw(r,"updateDoc",n._key,e,t,i):cw(r,"updateDoc",n._key,e),ca(s,[o.toMutation(n._key,dt.exists(!0))])}function cE(n){return ca(et(n.firestore,Pt),[new Cu(n._key,dt.none())])}function uE(n,e){const t=et(n.firestore,Pt),i=iw(n),s=ww(n.converter,e);return ca(t,[lw(ia(n.firestore),"addDoc",i._key,s,n.converter!==null,{}).toMutation(i._key,dt.exists(!1))]).then(()=>i)}function hE(n,...e){var t,i,s;n=Ee(n);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||bh(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(bh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(i=h.error)===null||i===void 0?void 0:i.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(n instanceof Ue)c=et(n.firestore,Pt),u=Co(n._key.path),l={next:h=>{e[o]&&e[o](vw(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=et(n,fn);c=et(h.firestore,Pt),u=h._query;const f=new la(c);l={next:d=>{e[o]&&e[o](new Lh(c,f,h,d))},error:e[o+1],complete:e[o+2]},Ph(n._query)}return function(h,f,d,p){const I=new _h(p),k=new ch(f,I,d);return h.asyncQueue.enqueueAndForget(async()=>ah(await Yo(h),k)),()=>{I.na(),h.asyncQueue.enqueueAndForget(async()=>lh(await Yo(h),k))}}(Zo(c),u,a,l)}function ca(n,e){return function(t,i){const s=new ht;return t.asyncQueue.enqueueAndForget(async()=>U_(await Z_(t),i,s)),s.promise}(Zo(n),e)}function vw(n,e,t){const i=t.docs.get(e._key),s=new la(n);return new Oh(n,s,e._key,i,new Ii(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){en=t})(Rn),Cn(new Ht("firestore",(t,{options:i})=>{const s=t.getProvider("app").getImmediate(),r=new Pt(s,new Pm(t.getProvider("auth-internal")),new Vm(t.getProvider("app-check-internal")));return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r},"PUBLIC")),nt(Gc,"3.4.1",n),nt(Gc,"3.4.1","esm2017")})();function Ew(n){const e=n-1;return e*e*e+1}function fE(n,{delay:e=0,duration:t=400,easing:i=Ew,x:s=0,y:r=0,opacity:o=0}={}){const a=getComputedStyle(n),l=+a.opacity,c=a.transform==="none"?"":a.transform,u=l*(1-o);return{delay:e,duration:t,easing:i,css:(h,f)=>`
			transform: ${c} translate(${(1-h)*s}px, ${(1-h)*r}px);
			opacity: ${l-u*f}`}}function Uh(n,e,t){const i=n.slice();return i[18]=e[t],i}function Vh(n,e,t){const i=n.slice();return i[18]=e[t],i}function Fh(n,e,t){const i=n.slice();return i[10]=e[t],i}function qh(n,e,t){const i=n.slice();return i[13]=e[t],i[15]=t,i}function Bh(n,e,t){const i=n.slice();return i[16]=e[t],i[15]=t,i}function zh(n,e,t){const i=n.slice();return i[7]=e[t],i}function kw(n){let e,t,i,s;const r=[Sw,bw,Tw],o=[];function a(l,c){return l[0]==="table"?0:l[0]==="list"?1:2}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=R()},l(l){t.l(l),i=R()},m(l,c){o[e].m(l,c),b(l,i,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Y(),_(o[u],1,1,()=>{o[u]=null}),X(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),m(t,1),t.m(i.parentNode,i))},i(l){s||(m(t),s=!0)},o(l){_(t),s=!1},d(l){o[e].d(l),l&&y(i)}}}function Iw(n){let e,t,i=n[1],s=[];for(let o=0;o<i.length;o+=1)s[o]=Qh(zh(n,i,o));const r=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=R()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=R()},m(o,a){for(let l=0;l<s.length;l+=1)s[l].m(o,a);b(o,e,a),t=!0},p(o,a){if(a&34){i=o[1];let l;for(l=0;l<i.length;l+=1){const c=zh(o,i,l);s[l]?(s[l].p(c,a),m(s[l],1)):(s[l]=Qh(c),s[l].c(),m(s[l],1),s[l].m(e.parentNode,e))}for(Y(),l=i.length;l<s.length;l+=1)r(l);X()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)m(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);t=!1},d(o){Ft(s,o),o&&y(e)}}}function Tw(n){let e,t,i;const s=[n[6]];var r=n[5][n[0]];function o(a){let l={$$slots:{default:[Rw]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=We(l,s[c]);return{props:l}}return r&&(e=new r(o(n))),{c(){e&&F(e.$$.fragment),t=R()},l(a){e&&ge(e.$$.fragment,a),t=R()},m(a,l){e&&U(e,a,l),b(a,t,l),i=!0},p(a,l){const c=l&64?qt(s,[Bt(a[6])]):{};if(l&8388706&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[5][a[0]])){if(e){Y();const u=e;_(u.$$.fragment,1,0,()=>{V(u,1)}),X()}r?(e=new r(o(a)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&m(e.$$.fragment,a),i=!0)},o(a){e&&_(e.$$.fragment,a),i=!1},d(a){a&&y(t),e&&V(e,a)}}}function bw(n){let e,t,i,s;const r=[Dw,Nw],o=[];function a(l,c){return l[4]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=R()},l(l){t.l(l),i=R()},m(l,c){o[e].m(l,c),b(l,i,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Y(),_(o[u],1,1,()=>{o[u]=null}),X(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),m(t,1),t.m(i.parentNode,i))},i(l){s||(m(t),s=!0)},o(l){_(t),s=!1},d(l){o[e].d(l),l&&y(i)}}}function Sw(n){let e,t,i;var s=n[5].table;function r(o){return{props:{$$slots:{default:[Bw]},$$scope:{ctx:o}}}}return s&&(e=new s(r(n))),{c(){e&&F(e.$$.fragment),t=R()},l(o){e&&ge(e.$$.fragment,o),t=R()},m(o,a){e&&U(e,o,a),b(o,t,a),i=!0},p(o,a){const l={};if(a&8388716&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[5].table)){if(e){Y();const c=e;_(c.$$.fragment,1,0,()=>{V(c,1)}),X()}s?(e=new s(r(o)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else s&&e.$set(l)},i(o){i||(e&&m(e.$$.fragment,o),i=!0)},o(o){e&&_(e.$$.fragment,o),i=!1},d(o){o&&y(t),e&&V(e,o)}}}function Aw(n){let e=n[6].raw+"",t;return{c(){t=mt(e)},l(i){t=mn(i,e)},m(i,s){b(i,t,s)},p(i,s){s&64&&e!==(e=i[6].raw+"")&&Ci(t,e)},i:ee,o:ee,d(i){i&&y(t)}}}function Cw(n){let e,t;return e=new xt({props:{tokens:n[1],renderers:n[5]}}),{c(){F(e.$$.fragment)},l(i){ge(e.$$.fragment,i)},m(i,s){U(e,i,s),t=!0},p(i,s){const r={};s&2&&(r.tokens=i[1]),s&32&&(r.renderers=i[5]),e.$set(r)},i(i){t||(m(e.$$.fragment,i),t=!0)},o(i){_(e.$$.fragment,i),t=!1},d(i){V(e,i)}}}function Rw(n){let e,t,i,s;const r=[Cw,Aw],o=[];function a(l,c){return l[1]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=R()},l(l){t.l(l),i=R()},m(l,c){o[e].m(l,c),b(l,i,c),s=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Y(),_(o[u],1,1,()=>{o[u]=null}),X(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),m(t,1),t.m(i.parentNode,i))},i(l){s||(m(t),s=!0)},o(l){_(t),s=!1},d(l){o[e].d(l),l&&y(i)}}}function Nw(n){let e,t,i;const s=[{ordered:n[4]},n[6]];var r=n[5].list;function o(a){let l={$$slots:{default:[Ow]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=We(l,s[c]);return{props:l}}return r&&(e=new r(o(n))),{c(){e&&F(e.$$.fragment),t=R()},l(a){e&&ge(e.$$.fragment,a),t=R()},m(a,l){e&&U(e,a,l),b(a,t,l),i=!0},p(a,l){const c=l&80?qt(s,[l&16&&{ordered:a[4]},l&64&&Bt(a[6])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[5].list)){if(e){Y();const u=e;_(u.$$.fragment,1,0,()=>{V(u,1)}),X()}r?(e=new r(o(a)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&m(e.$$.fragment,a),i=!0)},o(a){e&&_(e.$$.fragment,a),i=!1},d(a){a&&y(t),e&&V(e,a)}}}function Dw(n){let e,t,i;const s=[{ordered:n[4]},n[6]];var r=n[5].list;function o(a){let l={$$slots:{default:[Pw]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=We(l,s[c]);return{props:l}}return r&&(e=new r(o(n))),{c(){e&&F(e.$$.fragment),t=R()},l(a){e&&ge(e.$$.fragment,a),t=R()},m(a,l){e&&U(e,a,l),b(a,t,l),i=!0},p(a,l){const c=l&80?qt(s,[l&16&&{ordered:a[4]},l&64&&Bt(a[6])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[5].list)){if(e){Y();const u=e;_(u.$$.fragment,1,0,()=>{V(u,1)}),X()}r?(e=new r(o(a)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&m(e.$$.fragment,a),i=!0)},o(a){e&&_(e.$$.fragment,a),i=!1},d(a){a&&y(t),e&&V(e,a)}}}function $w(n){let e,t,i;return e=new xt({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){F(e.$$.fragment),t=gn()},l(s){ge(e.$$.fragment,s),t=yn(s)},m(s,r){U(e,s,r),b(s,t,r),i=!0},p(s,r){const o={};r&64&&(o.tokens=s[18].tokens),r&32&&(o.renderers=s[5]),e.$set(o)},i(s){i||(m(e.$$.fragment,s),i=!0)},o(s){_(e.$$.fragment,s),i=!1},d(s){V(e,s),s&&y(t)}}}function jh(n){let e,t,i;const s=[n[18]];var r=n[5].unorderedlistitem||n[5].listitem;function o(a){let l={$$slots:{default:[$w]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=We(l,s[c]);return{props:l}}return r&&(e=new r(o(n))),{c(){e&&F(e.$$.fragment),t=R()},l(a){e&&ge(e.$$.fragment,a),t=R()},m(a,l){e&&U(e,a,l),b(a,t,l),i=!0},p(a,l){const c=l&64?qt(s,[Bt(a[18])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[5].unorderedlistitem||a[5].listitem)){if(e){Y();const u=e;_(u.$$.fragment,1,0,()=>{V(u,1)}),X()}r?(e=new r(o(a)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&m(e.$$.fragment,a),i=!0)},o(a){e&&_(e.$$.fragment,a),i=!1},d(a){a&&y(t),e&&V(e,a)}}}function Ow(n){let e,t,i=n[6].items,s=[];for(let o=0;o<i.length;o+=1)s[o]=jh(Uh(n,i,o));const r=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=R()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=R()},m(o,a){for(let l=0;l<s.length;l+=1)s[l].m(o,a);b(o,e,a),t=!0},p(o,a){if(a&96){i=o[6].items;let l;for(l=0;l<i.length;l+=1){const c=Uh(o,i,l);s[l]?(s[l].p(c,a),m(s[l],1)):(s[l]=jh(c),s[l].c(),m(s[l],1),s[l].m(e.parentNode,e))}for(Y(),l=i.length;l<s.length;l+=1)r(l);X()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)m(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);t=!1},d(o){Ft(s,o),o&&y(e)}}}function Lw(n){let e,t,i;return e=new xt({props:{tokens:n[18].tokens,renderers:n[5]}}),{c(){F(e.$$.fragment),t=gn()},l(s){ge(e.$$.fragment,s),t=yn(s)},m(s,r){U(e,s,r),b(s,t,r),i=!0},p(s,r){const o={};r&64&&(o.tokens=s[18].tokens),r&32&&(o.renderers=s[5]),e.$set(o)},i(s){i||(m(e.$$.fragment,s),i=!0)},o(s){_(e.$$.fragment,s),i=!1},d(s){V(e,s),s&&y(t)}}}function Hh(n){let e,t,i;const s=[n[18]];var r=n[5].orderedlistitem||n[5].listitem;function o(a){let l={$$slots:{default:[Lw]},$$scope:{ctx:a}};for(let c=0;c<s.length;c+=1)l=We(l,s[c]);return{props:l}}return r&&(e=new r(o(n))),{c(){e&&F(e.$$.fragment),t=R()},l(a){e&&ge(e.$$.fragment,a),t=R()},m(a,l){e&&U(e,a,l),b(a,t,l),i=!0},p(a,l){const c=l&64?qt(s,[Bt(a[18])]):{};if(l&8388704&&(c.$$scope={dirty:l,ctx:a}),r!==(r=a[5].orderedlistitem||a[5].listitem)){if(e){Y();const u=e;_(u.$$.fragment,1,0,()=>{V(u,1)}),X()}r?(e=new r(o(a)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else r&&e.$set(c)},i(a){i||(e&&m(e.$$.fragment,a),i=!0)},o(a){e&&_(e.$$.fragment,a),i=!1},d(a){a&&y(t),e&&V(e,a)}}}function Pw(n){let e,t,i=n[6].items,s=[];for(let o=0;o<i.length;o+=1)s[o]=Hh(Vh(n,i,o));const r=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=R()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=R()},m(o,a){for(let l=0;l<s.length;l+=1)s[l].m(o,a);b(o,e,a),t=!0},p(o,a){if(a&96){i=o[6].items;let l;for(l=0;l<i.length;l+=1){const c=Vh(o,i,l);s[l]?(s[l].p(c,a),m(s[l],1)):(s[l]=Hh(c),s[l].c(),m(s[l],1),s[l].m(e.parentNode,e))}for(Y(),l=i.length;l<s.length;l+=1)r(l);X()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)m(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);t=!1},d(o){Ft(s,o),o&&y(e)}}}function xw(n){let e,t,i;return e=new xt({props:{tokens:n[16].tokens,renderers:n[5]}}),{c(){F(e.$$.fragment),t=gn()},l(s){ge(e.$$.fragment,s),t=yn(s)},m(s,r){U(e,s,r),b(s,t,r),i=!0},p(s,r){const o={};r&4&&(o.tokens=s[16].tokens),r&32&&(o.renderers=s[5]),e.$set(o)},i(s){i||(m(e.$$.fragment,s),i=!0)},o(s){_(e.$$.fragment,s),i=!1},d(s){V(e,s),s&&y(t)}}}function Kh(n){let e,t,i;var s=n[5].tablecell;function r(o){return{props:{header:!0,align:o[6].align[o[15]]||"center",$$slots:{default:[xw]},$$scope:{ctx:o}}}}return s&&(e=new s(r(n))),{c(){e&&F(e.$$.fragment),t=R()},l(o){e&&ge(e.$$.fragment,o),t=R()},m(o,a){e&&U(e,o,a),b(o,t,a),i=!0},p(o,a){const l={};if(a&64&&(l.align=o[6].align[o[15]]||"center"),a&8388644&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[5].tablecell)){if(e){Y();const c=e;_(c.$$.fragment,1,0,()=>{V(c,1)}),X()}s?(e=new s(r(o)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else s&&e.$set(l)},i(o){i||(e&&m(e.$$.fragment,o),i=!0)},o(o){e&&_(e.$$.fragment,o),i=!1},d(o){o&&y(t),e&&V(e,o)}}}function Mw(n){let e,t,i=n[2],s=[];for(let o=0;o<i.length;o+=1)s[o]=Kh(Bh(n,i,o));const r=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=R()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=R()},m(o,a){for(let l=0;l<s.length;l+=1)s[l].m(o,a);b(o,e,a),t=!0},p(o,a){if(a&100){i=o[2];let l;for(l=0;l<i.length;l+=1){const c=Bh(o,i,l);s[l]?(s[l].p(c,a),m(s[l],1)):(s[l]=Kh(c),s[l].c(),m(s[l],1),s[l].m(e.parentNode,e))}for(Y(),l=i.length;l<s.length;l+=1)r(l);X()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)m(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);t=!1},d(o){Ft(s,o),o&&y(e)}}}function Uw(n){let e,t,i;var s=n[5].tablerow;function r(o){return{props:{$$slots:{default:[Mw]},$$scope:{ctx:o}}}}return s&&(e=new s(r(n))),{c(){e&&F(e.$$.fragment),t=R()},l(o){e&&ge(e.$$.fragment,o),t=R()},m(o,a){e&&U(e,o,a),b(o,t,a),i=!0},p(o,a){const l={};if(a&8388708&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[5].tablerow)){if(e){Y();const c=e;_(c.$$.fragment,1,0,()=>{V(c,1)}),X()}s?(e=new s(r(o)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else s&&e.$set(l)},i(o){i||(e&&m(e.$$.fragment,o),i=!0)},o(o){e&&_(e.$$.fragment,o),i=!1},d(o){o&&y(t),e&&V(e,o)}}}function Vw(n){let e,t;return e=new xt({props:{tokens:n[13].tokens,renderers:n[5]}}),{c(){F(e.$$.fragment)},l(i){ge(e.$$.fragment,i)},m(i,s){U(e,i,s),t=!0},p(i,s){const r={};s&8&&(r.tokens=i[13].tokens),s&32&&(r.renderers=i[5]),e.$set(r)},i(i){t||(m(e.$$.fragment,i),t=!0)},o(i){_(e.$$.fragment,i),t=!1},d(i){V(e,i)}}}function Wh(n){let e,t,i;var s=n[5].tablecell;function r(o){return{props:{header:!1,align:o[6].align[o[15]]||"center",$$slots:{default:[Vw]},$$scope:{ctx:o}}}}return s&&(e=new s(r(n))),{c(){e&&F(e.$$.fragment),t=R()},l(o){e&&ge(e.$$.fragment,o),t=R()},m(o,a){e&&U(e,o,a),b(o,t,a),i=!0},p(o,a){const l={};if(a&64&&(l.align=o[6].align[o[15]]||"center"),a&8388648&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[5].tablecell)){if(e){Y();const c=e;_(c.$$.fragment,1,0,()=>{V(c,1)}),X()}s?(e=new s(r(o)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else s&&e.$set(l)},i(o){i||(e&&m(e.$$.fragment,o),i=!0)},o(o){e&&_(e.$$.fragment,o),i=!1},d(o){o&&y(t),e&&V(e,o)}}}function Fw(n){let e,t,i=n[10],s=[];for(let o=0;o<i.length;o+=1)s[o]=Wh(qh(n,i,o));const r=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=gn()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=yn(o)},m(o,a){for(let l=0;l<s.length;l+=1)s[l].m(o,a);b(o,e,a),t=!0},p(o,a){if(a&104){i=o[10];let l;for(l=0;l<i.length;l+=1){const c=qh(o,i,l);s[l]?(s[l].p(c,a),m(s[l],1)):(s[l]=Wh(c),s[l].c(),m(s[l],1),s[l].m(e.parentNode,e))}for(Y(),l=i.length;l<s.length;l+=1)r(l);X()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)m(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);t=!1},d(o){Ft(s,o),o&&y(e)}}}function Gh(n){let e,t,i;var s=n[5].tablerow;function r(o){return{props:{$$slots:{default:[Fw]},$$scope:{ctx:o}}}}return s&&(e=new s(r(n))),{c(){e&&F(e.$$.fragment),t=R()},l(o){e&&ge(e.$$.fragment,o),t=R()},m(o,a){e&&U(e,o,a),b(o,t,a),i=!0},p(o,a){const l={};if(a&8388712&&(l.$$scope={dirty:a,ctx:o}),s!==(s=o[5].tablerow)){if(e){Y();const c=e;_(c.$$.fragment,1,0,()=>{V(c,1)}),X()}s?(e=new s(r(o)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else s&&e.$set(l)},i(o){i||(e&&m(e.$$.fragment,o),i=!0)},o(o){e&&_(e.$$.fragment,o),i=!1},d(o){o&&y(t),e&&V(e,o)}}}function qw(n){let e,t,i=n[3],s=[];for(let o=0;o<i.length;o+=1)s[o]=Gh(Fh(n,i,o));const r=o=>_(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=R()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=R()},m(o,a){for(let l=0;l<s.length;l+=1)s[l].m(o,a);b(o,e,a),t=!0},p(o,a){if(a&104){i=o[3];let l;for(l=0;l<i.length;l+=1){const c=Fh(o,i,l);s[l]?(s[l].p(c,a),m(s[l],1)):(s[l]=Gh(c),s[l].c(),m(s[l],1),s[l].m(e.parentNode,e))}for(Y(),l=i.length;l<s.length;l+=1)r(l);X()}},i(o){if(!t){for(let a=0;a<i.length;a+=1)m(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)_(s[a]);t=!1},d(o){Ft(s,o),o&&y(e)}}}function Bw(n){let e,t,i,s,r;var o=n[5].tablehead;function a(u){return{props:{$$slots:{default:[Uw]},$$scope:{ctx:u}}}}o&&(e=new o(a(n)));var l=n[5].tablebody;function c(u){return{props:{$$slots:{default:[qw]},$$scope:{ctx:u}}}}return l&&(i=new l(c(n))),{c(){e&&F(e.$$.fragment),t=gn(),i&&F(i.$$.fragment),s=R()},l(u){e&&ge(e.$$.fragment,u),t=yn(u),i&&ge(i.$$.fragment,u),s=R()},m(u,h){e&&U(e,u,h),b(u,t,h),i&&U(i,u,h),b(u,s,h),r=!0},p(u,h){const f={};if(h&8388708&&(f.$$scope={dirty:h,ctx:u}),o!==(o=u[5].tablehead)){if(e){Y();const p=e;_(p.$$.fragment,1,0,()=>{V(p,1)}),X()}o?(e=new o(a(u)),F(e.$$.fragment),m(e.$$.fragment,1),U(e,t.parentNode,t)):e=null}else o&&e.$set(f);const d={};if(h&8388712&&(d.$$scope={dirty:h,ctx:u}),l!==(l=u[5].tablebody)){if(i){Y();const p=i;_(p.$$.fragment,1,0,()=>{V(p,1)}),X()}l?(i=new l(c(u)),F(i.$$.fragment),m(i.$$.fragment,1),U(i,s.parentNode,s)):i=null}else l&&i.$set(d)},i(u){r||(e&&m(e.$$.fragment,u),i&&m(i.$$.fragment,u),r=!0)},o(u){e&&_(e.$$.fragment,u),i&&_(i.$$.fragment,u),r=!1},d(u){e&&V(e,u),u&&y(t),u&&y(s),i&&V(i,u)}}}function Qh(n){let e,t;const i=[n[7],{renderers:n[5]}];let s={};for(let r=0;r<i.length;r+=1)s=We(s,i[r]);return e=new xt({props:s}),{c(){F(e.$$.fragment)},l(r){ge(e.$$.fragment,r)},m(r,o){U(e,r,o),t=!0},p(r,o){const a=o&34?qt(i,[o&2&&Bt(r[7]),o&32&&{renderers:r[5]}]):{};e.$set(a)},i(r){t||(m(e.$$.fragment,r),t=!0)},o(r){_(e.$$.fragment,r),t=!1},d(r){V(e,r)}}}function zw(n){let e,t,i,s;const r=[Iw,kw],o=[];function a(l,c){return l[0]?l[5][l[0]]?1:-1:0}return~(e=a(n))&&(t=o[e]=r[e](n)),{c(){t&&t.c(),i=R()},l(l){t&&t.l(l),i=R()},m(l,c){~e&&o[e].m(l,c),b(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?~e&&o[e].p(l,c):(t&&(Y(),_(o[u],1,1,()=>{o[u]=null}),X()),~e?(t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),m(t,1),t.m(i.parentNode,i)):t=null)},i(l){s||(m(t),s=!0)},o(l){_(t),s=!1},d(l){~e&&o[e].d(l),l&&y(i)}}}function jw(n,e,t){const i=["type","tokens","header","rows","ordered","renderers"];let s=ya(e,i),{type:r=void 0}=e,{tokens:o=void 0}=e,{header:a=void 0}=e,{rows:l=void 0}=e,{ordered:c=!1}=e,{renderers:u}=e;return n.$$set=h=>{e=We(We({},e),ff(h)),t(6,s=ya(e,i)),"type"in h&&t(0,r=h.type),"tokens"in h&&t(1,o=h.tokens),"header"in h&&t(2,a=h.header),"rows"in h&&t(3,l=h.rows),"ordered"in h&&t(4,c=h.ordered),"renderers"in h&&t(5,u=h.renderers)},[r,o,a,l,c,u,s]}class xt extends ne{constructor(e){super();te(this,e,jw,zw,Q,{type:0,tokens:1,header:2,rows:3,ordered:4,renderers:5})}}function Hw(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let Hs=Hw();const Kw=/[&<>"']/,Ww=/[&<>"']/g,Gw=/[<>"']|&(?!#?\w+;)/,Qw=/[<>"']|&(?!#?\w+;)/g,Jw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jh=n=>Jw[n];function De(n,e){if(e){if(Kw.test(n))return n.replace(Ww,Jh)}else if(Gw.test(n))return n.replace(Qw,Jh);return n}const Yw=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Yh(n){return n.replace(Yw,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Xw=/(^|[^\[])\^/g;function G(n,e){n=n.source||n,e=e||"";const t={replace:(i,s)=>(s=s.source||s,s=s.replace(Xw,"$1"),n=n.replace(i,s),t),getRegex:()=>new RegExp(n,e)};return t}const Zw=/[^\w:]/g,ev=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Xh(n,e,t){if(n){let i;try{i=decodeURIComponent(Yh(t)).replace(Zw,"").toLowerCase()}catch{return null}if(i.indexOf("javascript:")===0||i.indexOf("vbscript:")===0||i.indexOf("data:")===0)return null}e&&!ev.test(t)&&(t=sv(e,t));try{t=encodeURI(t).replace(/%25/g,"%")}catch{return null}return t}const Ks={},tv=/^[^:]+:\/*[^/]*$/,nv=/^([^:]+:)[\s\S]*$/,iv=/^([^:]+:\/*[^/]*)[\s\S]*$/;function sv(n,e){Ks[" "+n]||(tv.test(n)?Ks[" "+n]=n+"/":Ks[" "+n]=Gs(n,"/",!0)),n=Ks[" "+n];const t=n.indexOf(":")===-1;return e.substring(0,2)==="//"?t?e:n.replace(nv,"$1")+e:e.charAt(0)==="/"?t?e:n.replace(iv,"$1")+e:n+e}const Ws={exec:function(){}};function Mt(n){let e=1,t,i;for(;e<arguments.length;e++){t=arguments[e];for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}function Zh(n,e){const t=n.replace(/\|/g,(r,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(/ \|/);let s=0;if(i[0].trim()||i.shift(),i[i.length-1].trim()||i.pop(),i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;s<i.length;s++)i[s]=i[s].trim().replace(/\\\|/g,"|");return i}function Gs(n,e,t){const i=n.length;if(i===0)return"";let s=0;for(;s<i;){const r=n.charAt(i-s-1);if(r===e&&!t)s++;else if(r!==e&&t)s++;else break}return n.substr(0,i-s)}function rv(n,e){if(n.indexOf(e[1])===-1)return-1;const t=n.length;let i=0,s=0;for(;s<t;s++)if(n[s]==="\\")s++;else if(n[s]===e[0])i++;else if(n[s]===e[1]&&(i--,i<0))return s;return-1}function ef(n,e){if(e<1)return"";let t="";for(;e>1;)e&1&&(t+=n),e>>=1,n+=n;return t+n}function tf(n,e,t,i){const s=e.href,r=e.title?De(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:t,href:s,title:r,text:o,tokens:i.inlineTokens(o,[])};return i.state.inLink=!1,a}else return{type:"image",raw:t,href:s,title:r,text:De(o)}}function ov(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const i=t[1];return e.split(`
`).map(s=>{const r=s.match(/^\s+/);if(r===null)return s;const[o]=r;return o.length>=i.length?s.slice(i.length):s}).join(`
`)}class av{constructor(e){this.options=e||Hs}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Gs(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],s=ov(i,t[3]||"");return{type:"code",raw:i,lang:t[2]?t[2].trim():t[2],text:s}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(/#$/.test(i)){const r=Gs(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}const s={type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:[]};return this.lexer.inline(s.text,s.tokens),s}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const i=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(i,[]),text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i,s,r,o,a,l,c,u,h,f,d,p,I=t[1].trim();const k=I.length>1,C={type:"list",raw:"",ordered:k,start:k?+I.slice(0,-1):"",loose:!1,items:[]};I=k?`\\d{1,9}\\${I.slice(-1)}`:`\\${I}`,this.options.pedantic&&(I=k?I:"[*+-]");const P=new RegExp(`^( {0,3}${I})((?: [^\\n]*)?(?:\\n|$))`);for(;e&&(p=!1,!(!(t=P.exec(e))||this.rules.block.hr.test(e)));){if(i=t[0],e=e.substring(i.length),u=t[2].split(`
`,1)[0],h=e.split(`
`,1)[0],this.options.pedantic?(o=2,d=u.trimLeft()):(o=t[2].search(/[^ ]/),o=o>4?1:o,d=u.slice(o),o+=t[1].length),l=!1,!u&&/^ *$/.test(h)&&(i+=h+`
`,e=e.substring(h.length+1),p=!0),!p){const pe=new RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])`);for(;e&&(f=e.split(`
`,1)[0],u=f,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!pe.test(u));){if(u.search(/[^ ]/)>=o||!u.trim())d+=`
`+u.slice(o);else if(!l)d+=`
`+u;else break;!l&&!u.trim()&&(l=!0),i+=f+`
`,e=e.substring(f.length+1)}}C.loose||(c?C.loose=!0:/\n *\n *$/.test(i)&&(c=!0)),this.options.gfm&&(s=/^\[[ xX]\] /.exec(d),s&&(r=s[0]!=="[ ] ",d=d.replace(/^\[[ xX]\] +/,""))),C.items.push({type:"list_item",raw:i,task:!!s,checked:r,loose:!1,text:d}),C.raw+=i}C.items[C.items.length-1].raw=i.trimRight(),C.items[C.items.length-1].text=d.trimRight(),C.raw=C.raw.trimRight();const ce=C.items.length;for(a=0;a<ce;a++){this.lexer.state.top=!1,C.items[a].tokens=this.lexer.blockTokens(C.items[a].text,[]);const pe=C.items[a].tokens.filter(M=>M.type==="space"),ve=pe.every(M=>{const ue=M.raw.split("");let me=0;for(const ze of ue)if(ze===`
`&&(me+=1),me>1)return!0;return!1});!C.loose&&pe.length&&ve&&(C.loose=!0,C.items[a].loose=!0)}return C}}html(e){const t=this.rules.block.html.exec(e);if(t){const i={type:"html",raw:t[0],pre:!this.options.sanitizer&&(t[1]==="pre"||t[1]==="script"||t[1]==="style"),text:t[0]};return this.options.sanitize&&(i.type="paragraph",i.text=this.options.sanitizer?this.options.sanitizer(t[0]):De(t[0]),i.tokens=[],this.lexer.inline(i.text,i.tokens)),i}}def(e){const t=this.rules.block.def.exec(e);if(t){t[3]&&(t[3]=t[3].substring(1,t[3].length-1));const i=t[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:i,raw:t[0],href:t[2],title:t[3]}}}table(e){const t=this.rules.block.table.exec(e);if(t){const i={type:"table",header:Zh(t[1]).map(s=>({text:s})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]?t[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(i.header.length===i.align.length){i.raw=t[0];let s=i.align.length,r,o,a,l;for(r=0;r<s;r++)/^ *-+: *$/.test(i.align[r])?i.align[r]="right":/^ *:-+: *$/.test(i.align[r])?i.align[r]="center":/^ *:-+ *$/.test(i.align[r])?i.align[r]="left":i.align[r]=null;for(s=i.rows.length,r=0;r<s;r++)i.rows[r]=Zh(i.rows[r],i.header.length).map(c=>({text:c}));for(s=i.header.length,o=0;o<s;o++)i.header[o].tokens=[],this.lexer.inlineTokens(i.header[o].text,i.header[o].tokens);for(s=i.rows.length,o=0;o<s;o++)for(l=i.rows[o],a=0;a<l.length;a++)l[a].tokens=[],this.lexer.inlineTokens(l[a].text,l[a].tokens);return i}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const i={type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i={type:"paragraph",raw:t[0],text:t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}text(e){const t=this.rules.block.text.exec(e);if(t){const i={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(i.text,i.tokens),i}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:De(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):De(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=Gs(i.slice(0,-1),"\\");if((i.length-o.length)%2==0)return}else{const o=rv(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],r="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);o&&(s=o[1],r=o[3])}else r=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(i)?s=s.slice(1):s=s.slice(1,-1)),tf(t,{href:s&&s.replace(this.rules.inline._escapes,"$1"),title:r&&r.replace(this.rules.inline._escapes,"$1")},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){let s=(i[2]||i[1]).replace(/\s+/g," ");if(s=t[s.toLowerCase()],!s||!s.href){const r=i[0].charAt(0);return{type:"text",raw:r,text:r}}return tf(i,s,i[0],this.lexer)}}emStrong(e,t,i=""){let s=this.rules.inline.emStrong.lDelim.exec(e);if(!s||s[3]&&i.match(/[\p{L}\p{N}]/u))return;const r=s[1]||s[2]||"";if(!r||r&&(i===""||this.rules.inline.punctuation.exec(i))){const o=s[0].length-1;let a,l,c=o,u=0;const h=s[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(h.lastIndex=0,t=t.slice(-1*e.length+o);(s=h.exec(t))!=null;){if(a=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!a)continue;if(l=a.length,s[3]||s[4]){c+=l;continue}else if((s[5]||s[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;if(l=Math.min(l,l+c+u),Math.min(o,l)%2){const d=e.slice(1,o+s.index+l);return{type:"em",raw:e.slice(0,o+s.index+l+1),text:d,tokens:this.lexer.inlineTokens(d,[])}}const f=e.slice(2,o+s.index+l-1);return{type:"strong",raw:e.slice(0,o+s.index+l+1),text:f,tokens:this.lexer.inlineTokens(f,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(/\n/g," ");const s=/[^ ]/.test(i),r=/^ /.test(i)&&/ $/.test(i);return s&&r&&(i=i.substring(1,i.length-1)),i=De(i,!0),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const i=this.rules.inline.autolink.exec(e);if(i){let s,r;return i[2]==="@"?(s=De(this.options.mangle?t(i[1]):i[1]),r="mailto:"+s):(s=De(i[1]),r=s),{type:"link",raw:i[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}url(e,t){let i;if(i=this.rules.inline.url.exec(e)){let s,r;if(i[2]==="@")s=De(this.options.mangle?t(i[0]):i[0]),r="mailto:"+s;else{let o;do o=i[0],i[0]=this.rules.inline._backpedal.exec(i[0])[0];while(o!==i[0]);s=De(i[0]),i[1]==="www."?r="http://"+s:r=s}return{type:"link",raw:i[0],text:s,href:r,tokens:[{type:"text",raw:s,text:s}]}}}inlineText(e,t){const i=this.rules.inline.text.exec(e);if(i){let s;return this.lexer.state.inRawBlock?s=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(i[0]):De(i[0]):i[0]:s=De(this.options.smartypants?t(i[0]):i[0]),{type:"text",raw:i[0],text:s}}}}const A={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ws,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};A._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;A._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;A.def=G(A.def).replace("label",A._label).replace("title",A._title).getRegex();A.bullet=/(?:[*+-]|\d{1,9}[.)])/;A.listItemStart=G(/^( *)(bull) */).replace("bull",A.bullet).getRegex();A.list=G(A.list).replace(/bull/g,A.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+A.def.source+")").getRegex();A._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";A._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;A.html=G(A.html,"i").replace("comment",A._comment).replace("tag",A._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();A.paragraph=G(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex();A.blockquote=G(A.blockquote).replace("paragraph",A.paragraph).getRegex();A.normal=Mt({},A);A.gfm=Mt({},A.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});A.gfm.table=G(A.gfm.table).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex();A.gfm.paragraph=G(A._paragraph).replace("hr",A.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",A.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",A._tag).getRegex();A.pedantic=Mt({},A.normal,{html:G(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",A._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ws,paragraph:G(A.normal._paragraph).replace("hr",A.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",A.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const E={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ws,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ws,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};E._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";E.punctuation=G(E.punctuation).replace(/punctuation/g,E._punctuation).getRegex();E.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;E.escapedEmSt=/\\\*|\\_/g;E._comment=G(A._comment).replace("(?:-->|$)","-->").getRegex();E.emStrong.lDelim=G(E.emStrong.lDelim).replace(/punct/g,E._punctuation).getRegex();E.emStrong.rDelimAst=G(E.emStrong.rDelimAst,"g").replace(/punct/g,E._punctuation).getRegex();E.emStrong.rDelimUnd=G(E.emStrong.rDelimUnd,"g").replace(/punct/g,E._punctuation).getRegex();E._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;E._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;E._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;E.autolink=G(E.autolink).replace("scheme",E._scheme).replace("email",E._email).getRegex();E._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;E.tag=G(E.tag).replace("comment",E._comment).replace("attribute",E._attribute).getRegex();E._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;E._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;E._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;E.link=G(E.link).replace("label",E._label).replace("href",E._href).replace("title",E._title).getRegex();E.reflink=G(E.reflink).replace("label",E._label).replace("ref",A._label).getRegex();E.nolink=G(E.nolink).replace("ref",A._label).getRegex();E.reflinkSearch=G(E.reflinkSearch,"g").replace("reflink",E.reflink).replace("nolink",E.nolink).getRegex();E.normal=Mt({},E);E.pedantic=Mt({},E.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:G(/^!?\[(label)\]\((.*?)\)/).replace("label",E._label).getRegex(),reflink:G(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",E._label).getRegex()});E.gfm=Mt({},E.normal,{escape:G(E.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});E.gfm.url=G(E.gfm.url,"i").replace("email",E.gfm._extended_email).getRegex();E.breaks=Mt({},E.gfm,{br:G(E.br).replace("{2,}","*").getRegex(),text:G(E.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function lv(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function nf(n){let e="",t,i;const s=n.length;for(t=0;t<s;t++)i=n.charCodeAt(t),Math.random()>.5&&(i="x"+i.toString(16)),e+="&#"+i+";";return e}class Ti{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Hs,this.options.tokenizer=this.options.tokenizer||new av,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:A.normal,inline:E.normal};this.options.pedantic?(t.block=A.pedantic,t.inline=E.pedantic):this.options.gfm&&(t.block=A.gfm,this.options.breaks?t.inline=E.breaks:t.inline=E.gfm),this.tokenizer.rules=t}static get rules(){return{block:A,inline:E}}static lex(e,t){return new Ti(t).lex(e)}static lexInline(e,t){return new Ti(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`).replace(/\t/g,"    "),this.blockTokens(e,this.tokens);let t;for(;t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){this.options.pedantic&&(e=e.replace(/^ +$/gm,""));let i,s,r,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+i.raw,s.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(function(u){c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(r=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(r))){s=t[t.length-1],o&&s.type==="paragraph"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i),o=r.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let i,s,r,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+ef("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+ef("a",a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.escapedEmSt.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),s=t[t.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),s=t[t.length-1],s&&i.type==="text"&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e,nf)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e,nf))){e=e.substring(i.raw.length),t.push(i);continue}if(r=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const h=e.slice(1);let f;this.options.extensions.startInline.forEach(function(d){f=d.call({lexer:this},h),typeof f=="number"&&f>=0&&(u=Math.min(u,f))}),u<1/0&&u>=0&&(r=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(r,lv)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=i.raw,s.text+=i.text):t.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class cv{constructor(e){this.options=e||Hs}code(e,t,i){const s=(t||"").match(/\S*/)[0];if(this.options.highlight){const r=this.options.highlight(e,s);r!=null&&r!==e&&(i=!0,e=r)}return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="'+this.options.langPrefix+De(s,!0)+'">'+(i?e:De(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:De(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
`+e+`</blockquote>
`}html(e){return e}heading(e,t,i,s){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+s.slug(i)+'">'+e+"</h"+t+`>
`:"<h"+t+">"+e+"</h"+t+`>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(e,t,i){const s=t?"ol":"ul",r=t&&i!==1?' start="'+i+'"':"";return"<"+s+r+`>
`+e+"</"+s+`>
`}listitem(e){return"<li>"+e+`</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return"<p>"+e+`</p>
`}table(e,t){return t&&(t="<tbody>"+t+"</tbody>"),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
`+e+`</tr>
`}tablecell(e,t){const i=t.header?"th":"td";return(t.align?"<"+i+' align="'+t.align+'">':"<"+i+">")+e+"</"+i+`>
`}strong(e){return"<strong>"+e+"</strong>"}em(e){return"<em>"+e+"</em>"}codespan(e){return"<code>"+e+"</code>"}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return"<del>"+e+"</del>"}link(e,t,i){if(e=Xh(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let s='<a href="'+De(e)+'"';return t&&(s+=' title="'+t+'"'),s+=">"+i+"</a>",s}image(e,t,i){if(e=Xh(this.options.sanitize,this.options.baseUrl,e),e===null)return i;let s='<img src="'+e+'" alt="'+i+'"';return t&&(s+=' title="'+t+'"'),s+=this.options.xhtml?"/>":">",s}text(e){return e}}class uv{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class sf{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let i=e,s=0;if(this.seen.hasOwnProperty(i)){s=this.seen[e];do s++,i=e+"-"+s;while(this.seen.hasOwnProperty(i))}return t||(this.seen[e]=s,this.seen[i]=0),i}slug(e,t={}){const i=this.serialize(e);return this.getNextSafeSlug(i,t.dryrun)}}class Qs{constructor(e){this.options=e||Hs,this.options.renderer=this.options.renderer||new cv,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new uv,this.slugger=new sf}static parse(e,t){return new Qs(t).parse(e)}static parseInline(e,t){return new Qs(t).parseInline(e)}parse(e,t=!0){let i="",s,r,o,a,l,c,u,h,f,d,p,I,k,C,P,ce,pe,ve,M;const ue=e.length;for(s=0;s<ue;s++){if(d=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[d.type]&&(M=this.options.extensions.renderers[d.type].call({parser:this},d),M!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(d.type))){i+=M||"";continue}switch(d.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{i+=this.renderer.heading(this.parseInline(d.tokens),d.depth,Yh(this.parseInline(d.tokens,this.textRenderer)),this.slugger);continue}case"code":{i+=this.renderer.code(d.text,d.lang,d.escaped);continue}case"table":{for(h="",u="",a=d.header.length,r=0;r<a;r++)u+=this.renderer.tablecell(this.parseInline(d.header[r].tokens),{header:!0,align:d.align[r]});for(h+=this.renderer.tablerow(u),f="",a=d.rows.length,r=0;r<a;r++){for(c=d.rows[r],u="",l=c.length,o=0;o<l;o++)u+=this.renderer.tablecell(this.parseInline(c[o].tokens),{header:!1,align:d.align[o]});f+=this.renderer.tablerow(u)}i+=this.renderer.table(h,f);continue}case"blockquote":{f=this.parse(d.tokens),i+=this.renderer.blockquote(f);continue}case"list":{for(p=d.ordered,I=d.start,k=d.loose,a=d.items.length,f="",r=0;r<a;r++)P=d.items[r],ce=P.checked,pe=P.task,C="",P.task&&(ve=this.renderer.checkbox(ce),k?P.tokens.length>0&&P.tokens[0].type==="paragraph"?(P.tokens[0].text=ve+" "+P.tokens[0].text,P.tokens[0].tokens&&P.tokens[0].tokens.length>0&&P.tokens[0].tokens[0].type==="text"&&(P.tokens[0].tokens[0].text=ve+" "+P.tokens[0].tokens[0].text)):P.tokens.unshift({type:"text",text:ve}):C+=ve),C+=this.parse(P.tokens,k),f+=this.renderer.listitem(C,pe,ce);i+=this.renderer.list(f,p,I);continue}case"html":{i+=this.renderer.html(d.text);continue}case"paragraph":{i+=this.renderer.paragraph(this.parseInline(d.tokens));continue}case"text":{for(f=d.tokens?this.parseInline(d.tokens):d.text;s+1<ue&&e[s+1].type==="text";)d=e[++s],f+=`
`+(d.tokens?this.parseInline(d.tokens):d.text);i+=t?this.renderer.paragraph(f):f;continue}default:{const me='Token with "'+d.type+'" type was not found.';if(this.options.silent){console.error(me);return}else throw new Error(me)}}}return i}parseInline(e,t){t=t||this.renderer;let i="",s,r,o;const a=e.length;for(s=0;s<a;s++){if(r=e[s],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[r.type]&&(o=this.options.extensions.renderers[r.type].call({parser:this},r),o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type))){i+=o||"";continue}switch(r.type){case"escape":{i+=t.text(r.text);break}case"html":{i+=t.html(r.text);break}case"link":{i+=t.link(r.href,r.title,this.parseInline(r.tokens,t));break}case"image":{i+=t.image(r.href,r.title,r.text);break}case"strong":{i+=t.strong(this.parseInline(r.tokens,t));break}case"em":{i+=t.em(this.parseInline(r.tokens,t));break}case"codespan":{i+=t.codespan(r.text);break}case"br":{i+=t.br();break}case"del":{i+=t.del(this.parseInline(r.tokens,t));break}case"text":{i+=t.text(r.text);break}default:{const l='Token with "'+r.type+'" type was not found.';if(this.options.silent){console.error(l);return}else throw new Error(l)}}}return i}}Qs.parse;Ti.lex;const rf={};function hv(n){let e;return{c(){e=mt(n[1])},l(t){e=mn(t,n[1])},m(t,i){b(t,e,i)},p(t,i){i&2&&Ci(e,t[1])},i:ee,o:ee,d(t){t&&y(e)}}}function fv(n){let e,t;const i=n[5].default,s=re(i,n,n[4],null);return{c(){e=B("h6"),s&&s.c(),this.h()},l(r){e=K(r,"H6",{id:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"id",n[2])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&16)&&ae(s,i,r,r[4],t?oe(i,r[4],o,null):le(r[4]),null),(!t||o&4)&&z(e,"id",r[2])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function dv(n){let e,t;const i=n[5].default,s=re(i,n,n[4],null);return{c(){e=B("h5"),s&&s.c(),this.h()},l(r){e=K(r,"H5",{id:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"id",n[2])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&16)&&ae(s,i,r,r[4],t?oe(i,r[4],o,null):le(r[4]),null),(!t||o&4)&&z(e,"id",r[2])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function pv(n){let e,t;const i=n[5].default,s=re(i,n,n[4],null);return{c(){e=B("h4"),s&&s.c(),this.h()},l(r){e=K(r,"H4",{id:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"id",n[2])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&16)&&ae(s,i,r,r[4],t?oe(i,r[4],o,null):le(r[4]),null),(!t||o&4)&&z(e,"id",r[2])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function gv(n){let e,t;const i=n[5].default,s=re(i,n,n[4],null);return{c(){e=B("h3"),s&&s.c(),this.h()},l(r){e=K(r,"H3",{id:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"id",n[2])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&16)&&ae(s,i,r,r[4],t?oe(i,r[4],o,null):le(r[4]),null),(!t||o&4)&&z(e,"id",r[2])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function mv(n){let e,t;const i=n[5].default,s=re(i,n,n[4],null);return{c(){e=B("h2"),s&&s.c(),this.h()},l(r){e=K(r,"H2",{id:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"id",n[2])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&16)&&ae(s,i,r,r[4],t?oe(i,r[4],o,null):le(r[4]),null),(!t||o&4)&&z(e,"id",r[2])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function yv(n){let e,t;const i=n[5].default,s=re(i,n,n[4],null);return{c(){e=B("h1"),s&&s.c(),this.h()},l(r){e=K(r,"H1",{id:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"id",n[2])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&16)&&ae(s,i,r,r[4],t?oe(i,r[4],o,null):le(r[4]),null),(!t||o&4)&&z(e,"id",r[2])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function _v(n){let e,t,i,s;const r=[yv,mv,gv,pv,dv,fv,hv],o=[];function a(l,c){return l[0]===1?0:l[0]===2?1:l[0]===3?2:l[0]===4?3:l[0]===5?4:l[0]===6?5:6}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=R()},l(l){t.l(l),i=R()},m(l,c){o[e].m(l,c),b(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(Y(),_(o[u],1,1,()=>{o[u]=null}),X(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),m(t,1),t.m(i.parentNode,i))},i(l){s||(m(t),s=!0)},o(l){_(t),s=!1},d(l){o[e].d(l),l&&y(i)}}}function wv(n,e,t){let i,{$$slots:s={},$$scope:r}=e,{depth:o}=e,{raw:a}=e,{text:l}=e;const{slug:c,getOptions:u}=Cf(rf),h=u();return n.$$set=f=>{"depth"in f&&t(0,o=f.depth),"raw"in f&&t(1,a=f.raw),"text"in f&&t(3,l=f.text),"$$scope"in f&&t(4,r=f.$$scope)},n.$$.update=()=>{n.$$.dirty&8&&t(2,i=h.headerIds?h.headerPrefix+c(l):void 0)},[o,a,i,l,r,s]}class vv extends ne{constructor(e){super();te(this,e,wv,_v,Q,{depth:0,raw:1,text:3})}}function Ev(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("p"),s&&s.c()},l(r){e=K(r,"P",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function kv(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class Iv extends ne{constructor(e){super();te(this,e,kv,Ev,Q,{})}}function Tv(n){let e;const t=n[3].default,i=re(t,n,n[2],null);return{c(){i&&i.c()},l(s){i&&i.l(s)},m(s,r){i&&i.m(s,r),e=!0},p(s,[r]){i&&i.p&&(!e||r&4)&&ae(i,t,s,s[2],e?oe(t,s[2],r,null):le(s[2]),null)},i(s){e||(m(i,s),e=!0)},o(s){_(i,s),e=!1},d(s){i&&i.d(s)}}}function bv(n,e,t){let{$$slots:i={},$$scope:s}=e,{text:r}=e,{raw:o}=e;return n.$$set=a=>{"text"in a&&t(0,r=a.text),"raw"in a&&t(1,o=a.raw),"$$scope"in a&&t(2,s=a.$$scope)},[r,o,s,i]}class Sv extends ne{constructor(e){super();te(this,e,bv,Tv,Q,{text:0,raw:1})}}function Av(n){let e,t;return{c(){e=B("img"),this.h()},l(i){e=K(i,"IMG",{src:!0,title:!0,alt:!0}),this.h()},h(){ga(e.src,t=n[0])||z(e,"src",t),z(e,"title",n[1]),z(e,"alt",n[2])},m(i,s){b(i,e,s)},p(i,[s]){s&1&&!ga(e.src,t=i[0])&&z(e,"src",t),s&2&&z(e,"title",i[1]),s&4&&z(e,"alt",i[2])},i:ee,o:ee,d(i){i&&y(e)}}}function Cv(n,e,t){let{href:i=""}=e,{title:s=void 0}=e,{text:r=""}=e;return n.$$set=o=>{"href"in o&&t(0,i=o.href),"title"in o&&t(1,s=o.title),"text"in o&&t(2,r=o.text)},[i,s,r]}class Rv extends ne{constructor(e){super();te(this,e,Cv,Av,Q,{href:0,title:1,text:2})}}function Nv(n){let e,t;const i=n[3].default,s=re(i,n,n[2],null);return{c(){e=B("a"),s&&s.c(),this.h()},l(r){e=K(r,"A",{href:!0,title:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"href",n[0]),z(e,"title",n[1])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&4)&&ae(s,i,r,r[2],t?oe(i,r[2],o,null):le(r[2]),null),(!t||o&1)&&z(e,"href",r[0]),(!t||o&2)&&z(e,"title",r[1])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function Dv(n,e,t){let{$$slots:i={},$$scope:s}=e,{href:r=""}=e,{title:o=void 0}=e;return n.$$set=a=>{"href"in a&&t(0,r=a.href),"title"in a&&t(1,o=a.title),"$$scope"in a&&t(2,s=a.$$scope)},[r,o,s,i]}class $v extends ne{constructor(e){super();te(this,e,Dv,Nv,Q,{href:0,title:1})}}function Ov(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("em"),s&&s.c()},l(r){e=K(r,"EM",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function Lv(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class Pv extends ne{constructor(e){super();te(this,e,Lv,Ov,Q,{})}}function xv(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("del"),s&&s.c()},l(r){e=K(r,"DEL",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function Mv(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class Uv extends ne{constructor(e){super();te(this,e,Mv,xv,Q,{})}}function Vv(n){let e,t=n[0].replace(/`/g,"")+"",i;return{c(){e=B("code"),i=mt(t)},l(s){e=K(s,"CODE",{});var r=J(e);i=mn(r,t),r.forEach(y)},m(s,r){b(s,e,r),Ai(e,i)},p(s,[r]){r&1&&t!==(t=s[0].replace(/`/g,"")+"")&&Ci(i,t)},i:ee,o:ee,d(s){s&&y(e)}}}function Fv(n,e,t){let{raw:i}=e;return n.$$set=s=>{"raw"in s&&t(0,i=s.raw)},[i]}class qv extends ne{constructor(e){super();te(this,e,Fv,Vv,Q,{raw:0})}}function Bv(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("strong"),s&&s.c()},l(r){e=K(r,"STRONG",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function zv(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class jv extends ne{constructor(e){super();te(this,e,zv,Bv,Q,{})}}function Hv(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("table"),s&&s.c()},l(r){e=K(r,"TABLE",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function Kv(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class Wv extends ne{constructor(e){super();te(this,e,Kv,Hv,Q,{})}}function Gv(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("thead"),s&&s.c()},l(r){e=K(r,"THEAD",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function Qv(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class Jv extends ne{constructor(e){super();te(this,e,Qv,Gv,Q,{})}}function Yv(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("tbody"),s&&s.c()},l(r){e=K(r,"TBODY",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function Xv(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class Zv extends ne{constructor(e){super();te(this,e,Xv,Yv,Q,{})}}function e0(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("tr"),s&&s.c()},l(r){e=K(r,"TR",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function t0(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class n0 extends ne{constructor(e){super();te(this,e,t0,e0,Q,{})}}function i0(n){let e,t;const i=n[3].default,s=re(i,n,n[2],null);return{c(){e=B("td"),s&&s.c(),this.h()},l(r){e=K(r,"TD",{align:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"align",n[1])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&4)&&ae(s,i,r,r[2],t?oe(i,r[2],o,null):le(r[2]),null),(!t||o&2)&&z(e,"align",r[1])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function s0(n){let e,t;const i=n[3].default,s=re(i,n,n[2],null);return{c(){e=B("th"),s&&s.c(),this.h()},l(r){e=K(r,"TH",{align:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"align",n[1])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&4)&&ae(s,i,r,r[2],t?oe(i,r[2],o,null):le(r[2]),null),(!t||o&2)&&z(e,"align",r[1])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function r0(n){let e,t,i,s;const r=[s0,i0],o=[];function a(l,c){return l[0]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=R()},l(l){t.l(l),i=R()},m(l,c){o[e].m(l,c),b(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(Y(),_(o[u],1,1,()=>{o[u]=null}),X(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),m(t,1),t.m(i.parentNode,i))},i(l){s||(m(t),s=!0)},o(l){_(t),s=!1},d(l){o[e].d(l),l&&y(i)}}}function o0(n,e,t){let{$$slots:i={},$$scope:s}=e,{header:r}=e,{align:o}=e;return n.$$set=a=>{"header"in a&&t(0,r=a.header),"align"in a&&t(1,o=a.align),"$$scope"in a&&t(2,s=a.$$scope)},[r,o,s,i]}class a0 extends ne{constructor(e){super();te(this,e,o0,r0,Q,{header:0,align:1})}}function l0(n){let e,t;const i=n[3].default,s=re(i,n,n[2],null);return{c(){e=B("ul"),s&&s.c()},l(r){e=K(r,"UL",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&4)&&ae(s,i,r,r[2],t?oe(i,r[2],o,null):le(r[2]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function c0(n){let e,t;const i=n[3].default,s=re(i,n,n[2],null);return{c(){e=B("ol"),s&&s.c(),this.h()},l(r){e=K(r,"OL",{start:!0});var o=J(e);s&&s.l(o),o.forEach(y),this.h()},h(){z(e,"start",n[1])},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,o){s&&s.p&&(!t||o&4)&&ae(s,i,r,r[2],t?oe(i,r[2],o,null):le(r[2]),null),(!t||o&2)&&z(e,"start",r[1])},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function u0(n){let e,t,i,s;const r=[c0,l0],o=[];function a(l,c){return l[0]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=R()},l(l){t.l(l),i=R()},m(l,c){o[e].m(l,c),b(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(Y(),_(o[u],1,1,()=>{o[u]=null}),X(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),m(t,1),t.m(i.parentNode,i))},i(l){s||(m(t),s=!0)},o(l){_(t),s=!1},d(l){o[e].d(l),l&&y(i)}}}function h0(n,e,t){let{$$slots:i={},$$scope:s}=e,{ordered:r}=e,{start:o}=e;return n.$$set=a=>{"ordered"in a&&t(0,r=a.ordered),"start"in a&&t(1,o=a.start),"$$scope"in a&&t(2,s=a.$$scope)},[r,o,s,i]}class f0 extends ne{constructor(e){super();te(this,e,h0,u0,Q,{ordered:0,start:1})}}function d0(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("li"),s&&s.c()},l(r){e=K(r,"LI",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function p0(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class g0 extends ne{constructor(e){super();te(this,e,p0,d0,Q,{})}}function m0(n){let e;return{c(){e=B("hr")},l(t){e=K(t,"HR",{})},m(t,i){b(t,e,i)},p:ee,i:ee,o:ee,d(t){t&&y(e)}}}class y0 extends ne{constructor(e){super();te(this,e,null,m0,Q,{})}}function _0(n){let e,t;return{c(){e=new Xs,t=R(),this.h()},l(i){e=kf(i),t=R(),this.h()},h(){e.a=t},m(i,s){e.m(n[0],i,s),b(i,t,s)},p(i,[s]){s&1&&e.p(i[0])},i:ee,o:ee,d(i){i&&y(t),i&&e.d()}}}function w0(n,e,t){let{text:i}=e;return n.$$set=s=>{"text"in s&&t(0,i=s.text)},[i]}class v0 extends ne{constructor(e){super();te(this,e,w0,_0,Q,{text:0})}}function E0(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("blockquote"),s&&s.c()},l(r){e=K(r,"BLOCKQUOTE",{});var o=J(e);s&&s.l(o),o.forEach(y)},m(r,o){b(r,e,o),s&&s.m(e,null),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function k0(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class I0 extends ne{constructor(e){super();te(this,e,k0,E0,Q,{})}}function T0(n){let e,t,i;return{c(){e=B("pre"),t=B("code"),i=mt(n[1]),this.h()},l(s){e=K(s,"PRE",{class:!0});var r=J(e);t=K(r,"CODE",{});var o=J(t);i=mn(o,n[1]),o.forEach(y),r.forEach(y),this.h()},h(){z(e,"class",n[0])},m(s,r){b(s,e,r),Ai(e,t),Ai(t,i)},p(s,[r]){r&2&&Ci(i,s[1]),r&1&&z(e,"class",s[0])},i:ee,o:ee,d(s){s&&y(e)}}}function b0(n,e,t){let{lang:i}=e,{text:s}=e;return n.$$set=r=>{"lang"in r&&t(0,i=r.lang),"text"in r&&t(1,s=r.text)},[i,s]}class S0 extends ne{constructor(e){super();te(this,e,b0,T0,Q,{lang:0,text:1})}}function A0(n){let e,t;const i=n[1].default,s=re(i,n,n[0],null);return{c(){e=B("br"),s&&s.c()},l(r){e=K(r,"BR",{}),s&&s.l(r)},m(r,o){b(r,e,o),s&&s.m(r,o),t=!0},p(r,[o]){s&&s.p&&(!t||o&1)&&ae(s,i,r,r[0],t?oe(i,r[0],o,null):le(r[0]),null)},i(r){t||(m(s,r),t=!0)},o(r){_(s,r),t=!1},d(r){r&&y(e),s&&s.d(r)}}}function C0(n,e,t){let{$$slots:i={},$$scope:s}=e;return n.$$set=r=>{"$$scope"in r&&t(0,s=r.$$scope)},[s,i]}class R0 extends ne{constructor(e){super();te(this,e,C0,A0,Q,{})}}const N0={heading:vv,paragraph:Iv,text:Sv,image:Rv,link:$v,em:Pv,strong:jv,codespan:qv,del:Uv,table:Wv,tablehead:Jv,tablebody:Zv,tablerow:n0,tablecell:a0,list:f0,orderedlistitem:null,unorderedlistitem:null,listitem:g0,hr:y0,html:v0,blockquote:I0,code:S0,br:R0},D0={baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,xhtml:!1};function $0(n){let e,t;return e=new xt({props:{tokens:n[0],renderers:n[1]}}),{c(){F(e.$$.fragment)},l(i){ge(e.$$.fragment,i)},m(i,s){U(e,i,s),t=!0},p(i,[s]){const r={};s&1&&(r.tokens=i[0]),s&2&&(r.renderers=i[1]),e.$set(r)},i(i){t||(m(e.$$.fragment,i),t=!0)},o(i){_(e.$$.fragment,i),t=!1},d(i){V(e,i)}}}function O0(n,e,t){let i,s,r,{source:o=""}=e,{renderers:a={}}=e,{options:l={}}=e,{isInline:c=!1}=e;const u=Na();let h,f,d;return Af(rf,{slug:p=>i?i.slug(p):"",getOptions:()=>s}),Ra(()=>{t(7,d=!0)}),n.$$set=p=>{"source"in p&&t(2,o=p.source),"renderers"in p&&t(3,a=p.renderers),"options"in p&&t(4,l=p.options),"isInline"in p&&t(5,c=p.isInline)},n.$$.update=()=>{n.$$.dirty&4&&(i=o?new sf:void 0),n.$$.dirty&16&&t(8,s=pn(pn({},D0),l)),n.$$.dirty&357&&(t(6,f=new Ti(s)),t(0,h=c?f.inlineTokens(o):f.lex(o)),u("parsed",{tokens:h})),n.$$.dirty&8&&t(1,r=pn(pn({},N0),a)),n.$$.dirty&129&&d&&u("parsed",{tokens:h})},[h,r,o,a,l,c,f,d,s]}class dE extends ne{constructor(e){super();te(this,e,O0,$0,Q,{source:2,renderers:3,options:4,isInline:5})}}export{rt as $,V as A,We as B,G0 as C,Q0 as D,Da as E,W0 as F,F0 as G,Ai as H,x0 as I,B0 as J,Ft as K,P0 as L,Ef as M,U0 as N,re as O,q0 as P,ae as Q,le as R,ne as S,oe as T,Cf as U,ee as V,V0 as W,Z0 as X,eE as Y,J0 as Z,nE as _,J as a,sE as a0,Ut as a1,iw as a2,cE as a3,lE as a4,iE as a5,hE as a6,K0 as a7,H0 as a8,M0 as a9,uE as aa,Y0 as ab,X0 as ac,kn as ad,z0 as ae,fE as af,j0 as ag,ga as ah,tE as ai,rE as aj,oE as ak,aE as al,dE as am,z as b,K as c,y as d,B as e,b as f,mn as g,Ci as h,te as i,gn as j,R as k,yn as l,Y as m,_ as n,X as o,m as p,Af as q,Sf as r,Q as s,mt as t,Ra as u,F as v,ge as w,U as x,qt as y,Bt as z};
