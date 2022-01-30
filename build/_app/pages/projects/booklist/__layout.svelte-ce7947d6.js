import{S as I,i as N,s as B,e as p,t as k,j as $,c as g,a as b,g as E,d as h,l as j,b as m,f as L,H as f,I as C,V,h as M,X as P,Y as U,O as Q,v as R,P as X,w as Y,x as z,Q as F,R as G,T as J,p as D,n as H,A as K}from"../../../chunks/vendor-f0c1caf4.js";import{g as W}from"../../../chunks/navigation-c71191e7.js";import{a as w}from"../../../chunks/client-0607ff23.js";import"../../../chunks/singletons-a42a5e91.js";function q(u){let e,t,o,n,l,a,s,i,r,c,d;return{c(){e=p("div"),t=p("a"),o=k("Home"),n=$(),l=p("a"),a=k("Add new book"),s=$(),i=p("button"),r=k("Logout"),this.h()},l(_){e=g(_,"DIV",{class:!0});var v=b(e);t=g(v,"A",{href:!0,class:!0});var y=b(t);o=E(y,"Home"),y.forEach(h),n=j(v),l=g(v,"A",{href:!0,class:!0});var S=b(l);a=E(S,"Add new book"),S.forEach(h),s=j(v),i=g(v,"BUTTON",{});var A=b(i);r=E(A,"Logout"),A.forEach(h),v.forEach(h),this.h()},h(){m(t,"href","/projects/booklist"),m(t,"class","svelte-de782s"),m(l,"href","/projects/booklist/createbook"),m(l,"class","svelte-de782s"),m(e,"class","menu svelte-de782s")},m(_,v){L(_,e,v),f(e,t),f(t,o),f(e,n),f(e,l),f(l,a),f(e,s),f(e,i),f(i,r),c||(d=C(i,"click",u[1]),c=!0)},p:V,d(_){_&&h(e),c=!1,d()}}}function O(u){let e,t,o,n,l,a;return{c(){e=p("div"),t=p("a"),o=k("Login"),n=$(),l=p("a"),a=k("Signup"),this.h()},l(s){e=g(s,"DIV",{class:!0});var i=b(e);t=g(i,"A",{href:!0,class:!0});var r=b(t);o=E(r,"Login"),r.forEach(h),n=j(i),l=g(i,"A",{href:!0,class:!0});var c=b(l);a=E(c,"Signup"),c.forEach(h),i.forEach(h),this.h()},h(){m(t,"href","/projects/booklist/login"),m(t,"class","svelte-de782s"),m(l,"href","/projects/booklist/signup"),m(l,"class","svelte-de782s"),m(e,"class","menu svelte-de782s")},m(s,i){L(s,e,i),f(e,t),f(t,o),f(e,n),f(e,l),f(l,a)},d(s){s&&h(e)}}}function T(u){let e,t,o=u[0].email+"",n;return{c(){e=p("span"),t=k("logged in as "),n=k(o)},l(l){e=g(l,"SPAN",{});var a=b(e);t=E(a,"logged in as "),n=E(a,o),a.forEach(h)},m(l,a){L(l,e,a),f(e,t),f(e,n)},p(l,a){a&1&&o!==(o=l[0].email+"")&&M(n,o)},d(l){l&&h(e)}}}function Z(u){let e,t,o,n,l,a,s,i,r=u[0]&&q(u),c=!u[0]&&O(),d=u[0]&&T(u);return{c(){e=p("div"),t=p("nav"),o=p("h1"),n=k("My Book List"),l=$(),a=p("div"),r&&r.c(),s=$(),c&&c.c(),i=$(),d&&d.c(),this.h()},l(_){e=g(_,"DIV",{class:!0});var v=b(e);t=g(v,"NAV",{class:!0});var y=b(t);o=g(y,"H1",{class:!0});var S=b(o);n=E(S,"My Book List"),S.forEach(h),l=j(y),a=g(y,"DIV",{});var A=b(a);r&&r.l(A),s=j(A),c&&c.l(A),A.forEach(h),y.forEach(h),i=j(v),d&&d.l(v),v.forEach(h),this.h()},h(){m(o,"class","svelte-de782s"),m(t,"class","svelte-de782s"),m(e,"class","layout svelte-de782s")},m(_,v){L(_,e,v),f(e,t),f(t,o),f(o,n),f(t,l),f(t,a),r&&r.m(a,null),f(a,s),c&&c.m(a,null),f(e,i),d&&d.m(e,null)},p(_,[v]){_[0]?r?r.p(_,v):(r=q(_),r.c(),r.m(a,s)):r&&(r.d(1),r=null),_[0]?c&&(c.d(1),c=null):c||(c=O(),c.c(),c.m(a,null)),_[0]?d?d.p(_,v):(d=T(_),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},i:V,o:V,d(_){_&&h(e),r&&r.d(),c&&c.d(),d&&d.d()}}}function x(u,e,t){let o=w.currentUser;return P(w,l=>{console.log("current user:",l),t(0,o=l)}),[o,async()=>{await U(w),W("/projects/booklist/login")}]}class ee extends I{constructor(e){super();N(this,e,x,Z,B,{})}}function te(u){let e,t,o,n;t=new ee({});const l=u[1].default,a=Q(l,u,u[0],null);return{c(){e=$(),R(t.$$.fragment),o=$(),a&&a.c(),this.h()},l(s){X('[data-svelte="svelte-1a2qbrp"]',document.head).forEach(h),e=j(s),Y(t.$$.fragment,s),o=j(s),a&&a.l(s),this.h()},h(){document.title="Book List"},m(s,i){L(s,e,i),z(t,s,i),L(s,o,i),a&&a.m(s,i),n=!0},p(s,[i]){a&&a.p&&(!n||i&1)&&F(a,l,s,s[0],n?J(l,s[0],i,null):G(s[0]),null)},i(s){n||(D(t.$$.fragment,s),D(a,s),n=!0)},o(s){H(t.$$.fragment,s),H(a,s),n=!1},d(s){s&&h(e),K(t,s),s&&h(o),a&&a.d(s)}}}function se(u,e,t){let{$$slots:o={},$$scope:n}=e;return u.$$set=l=>{"$$scope"in l&&t(0,n=l.$$scope)},[n,o]}class ie extends I{constructor(e){super();N(this,e,se,te,B,{})}}export{ie as default};
