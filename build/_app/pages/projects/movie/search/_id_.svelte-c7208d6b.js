import{S as m,i as v,s as g,v as p,w as $,x as M,p as i,n as u,A as k,e as y,c as b,a as w,d as f,b as x,f as j,o as C,K as S,m as q}from"../../../../chunks/vendor-f0c1caf4.js";import{M as z}from"../../../../chunks/MovieCard-47ba3097.js";function d(l,a,o){const t=l.slice();return t[1]=a[o],t}function _(l){let a,o;return a=new z({props:{movie:l[1]}}),{c(){p(a.$$.fragment)},l(t){$(a.$$.fragment,t)},m(t,e){M(a,t,e),o=!0},p(t,e){const c={};e&1&&(c.movie=t[1]),a.$set(c)},i(t){o||(i(a.$$.fragment,t),o=!0)},o(t){u(a.$$.fragment,t),o=!1},d(t){k(a,t)}}}function B(l){let a,o,t=l[0],e=[];for(let s=0;s<t.length;s+=1)e[s]=_(d(l,t,s));const c=s=>u(e[s],1,1,()=>{e[s]=null});return{c(){a=y("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){a=b(s,"DIV",{class:!0});var r=w(a);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(f),this.h()},h(){x(a,"class","searched-movies svelte-1sdwzzt")},m(s,r){j(s,a,r);for(let n=0;n<e.length;n+=1)e[n].m(a,null);o=!0},p(s,[r]){if(r&1){t=s[0];let n;for(n=0;n<t.length;n+=1){const h=d(s,t,n);e[n]?(e[n].p(h,r),i(e[n],1)):(e[n]=_(h),e[n].c(),i(e[n],1),e[n].m(a,null))}for(q(),n=t.length;n<e.length;n+=1)c(n);C()}},i(s){if(!o){for(let r=0;r<t.length;r+=1)i(e[r]);o=!0}},o(s){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)u(e[r]);o=!1},d(s){s&&f(a),S(e,s)}}}const E=async({fetch:l,params:a})=>{const o=await l(`https://api.themoviedb.org/3/search/movie?api_key=a61d10b145e25c091828c4a699765034&language=en-US&query=${a.id}&page=1:&include_adult=false`);if(o.ok)return{props:{searchedMovies:(await o.json()).results}}};function D(l,a,o){let{searchedMovies:t}=a;return l.$$set=e=>{"searchedMovies"in e&&o(0,t=e.searchedMovies)},[t]}class I extends m{constructor(a){super();v(this,a,D,B,g,{searchedMovies:0})}}export{I as default,E as load};
