var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function l(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){if(t){const l=i(t,n,e,o);return t[0](l)}}function i(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function s(t,n,e,o,l,r,c){const s=function(t,n,e,o){if(t[2]&&o){const l=t[2](o(e));if(void 0===n.dirty)return l;if("object"==typeof l){const t=[],e=Math.max(n.dirty.length,l.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|l[o];return t}return n.dirty|l}return n.dirty}(n,o,l,r);if(s){const l=i(n,e,o,c);t.p(l,s)}}function u(t){return null==t?"":t}let a,d=!1;function f(t,n,e,o){for(;t<n;){const l=t+(n-t>>1);e(l)<=o?t=l+1:n=l}return t}function m(t,n){d?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let l=0;for(let t=0;t<n.length;t++){const r=f(1,l+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;o[t]=e[r]+1;const c=r+1;e[c]=t,l=Math.max(c,l)}const r=[],c=[];let i=n.length-1;for(let t=e[l]+1;0!=t;t=o[t-1]){for(r.push(n[t-1]);i>=t;i--)c.push(n[i]);i--}for(;i>=0;i--)c.push(n[i]);r.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<c.length;n++){for(;e<r.length&&c[n].claim_order>=r[e].claim_order;)e++;const o=e<r.length?r[e]:null;t.insertBefore(c[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){d&&!e?m(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function x(){return v(" ")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n){t.value=null==n?"":n}function w(t){a=t}function j(){const t=function(){if(!a)throw new Error("Function called outside component initialization");return a}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const l=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,l)}))}}}const C=[],E=[],M=[],A=[],B=Promise.resolve();let O=!1;function N(t){M.push(t)}let S=!1;const I=new Set;function D(){if(!S){S=!0;do{for(let t=0;t<C.length;t+=1){const n=C[t];w(n),L(n.$$)}for(w(null),C.length=0;E.length;)E.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];I.has(n)||(I.add(n),n())}M.length=0}while(C.length);for(;A.length;)A.pop()();O=!1,S=!1,I.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const R=new Set;let T;function q(t,n){t&&t.i&&(R.delete(t),t.i(n))}function z(t,n,e,o){if(t&&t.o){if(R.has(t))return;R.add(t),T.c.push((()=>{R.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function F(t){t&&t.c()}function P(t,e,r,c){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,r),c||N((()=>{const e=s.map(n).filter(l);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(N)}function G(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(t,n){-1===t.$$.dirty[0]&&(C.push(t),O||(O=!0,B.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,l,r,c,i,s,u=[-1]){const f=a;w(n);const m=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:l.context||[]),callbacks:e(),dirty:u,skip_bound:!1};let p=!1;if(m.ctx=r?r(n,l.props||{},((t,e,...o)=>{const l=o.length?o[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=l)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](l),p&&H(n,t)),e})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!c&&c(m.ctx),l.target){if(l.hydrate){d=!0;const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(h)}else m.fragment&&m.fragment.c();l.intro&&q(n.$$.fragment),P(n,l.target,l.anchor,l.customElement),d=!1,D()}w(f)}class K{$destroy(){G(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=["原味汤粉","粥瓜婆","重庆小面","螺蛳粉","炒粉","番茄炒蛋","粿条","饺子","西安面食","葱油饼 & 酱香饼"].map((t=>({name:t}))),U=t=>({}),V=t=>({}),W=t=>({}),X=t=>({});function Y(n){let e,o,l;return{c(){e=g("button"),e.textContent="close"},m(t,r){p(t,e,r),o||(l=y(e,"click",n[2]),o=!0)},p:t,d(t){t&&h(e),o=!1,l()}}}function Z(t){let n,e,l,r,i,u,a,d,f,$,v,b,k;const w=t[6].header,j=c(w,t,t[5],X),C=t[6].default,E=c(C,t,t[5],null);let M=!t[0]&&Y(t);const A=t[6]["footer-extra"],B=c(A,t,t[5],V);return{c(){n=g("div"),e=x(),l=g("div"),r=g("div"),j&&j.c(),i=x(),u=g("div"),E&&E.c(),a=x(),d=g("button"),d.textContent="confirm",f=x(),M&&M.c(),$=x(),B&&B.c(),_(n,"class","modal-mask svelte-1sm2j25"),_(r,"class","modal-header svelte-1sm2j25"),_(u,"class","modal-body svelte-1sm2j25"),_(l,"class","modal svelte-1sm2j25")},m(o,c){p(o,n,c),p(o,e,c),p(o,l,c),m(l,r),j&&j.m(r,null),m(l,i),m(l,u),E&&E.m(u,null),m(l,a),m(l,d),m(l,f),M&&M.m(l,null),m(l,$),B&&B.m(l,null),t[7](l),v=!0,b||(k=[y(window,"keydown",t[4]),y(n,"click",t[2]),y(d,"click",t[3])],b=!0)},p(t,[n]){j&&j.p&&(!v||32&n)&&s(j,w,t,t[5],v?n:-1,W,X),E&&E.p&&(!v||32&n)&&s(E,C,t,t[5],v?n:-1,null,null),t[0]?M&&(M.d(1),M=null):M?M.p(t,n):(M=Y(t),M.c(),M.m(l,$)),B&&B.p&&(!v||32&n)&&s(B,A,t,t[5],v?n:-1,U,V)},i(t){v||(q(j,t),q(E,t),q(B,t),v=!0)},o(t){z(j,t),z(E,t),z(B,t),v=!1},d(r){r&&h(n),r&&h(e),r&&h(l),j&&j.d(r),E&&E.d(r),M&&M.d(),B&&B.d(r),t[7](null),b=!1,o(k)}}}function tt(t,n,e){let{$$slots:o={},$$scope:l}=n,{hideCloseBtn:r}=n;const c=j(),i=()=>c("close");let s;return t.$$set=t=>{"hideCloseBtn"in t&&e(0,r=t.hideCloseBtn),"$$scope"in t&&e(5,l=t.$$scope)},[r,s,i,()=>c("confirm"),t=>{"Escape"!==t.key||i()},l,o,function(t){E[t?"unshift":"push"]((()=>{s=t,e(1,s)}))}]}class nt extends K{constructor(t){super(),J(this,t,tt,Z,r,{hideCloseBtn:0})}}const et=t=>{if("object"!=typeof t)return t;const n=Array.isArray(t)?[]:{};for(const e in t)n[e]=et(t[e]);return n};function ot(t,n,e){const o=t.slice();return o[22]=n[e],o}function lt(t,n,e){const o=t.slice();return o[1]=n[e],o[26]=e,o}function rt(t){let n,e;return n=new nt({props:{hideCloseBtn:!0,$$slots:{"footer-extra":[ut],header:[st],default:[it]},$$scope:{ctx:t}}}),n.$on("close",t[16]),n.$on("confirm",t[17]),{c(){F(n.$$.fragment)},m(t,o){P(n,t,o),e=!0},p(t,e){const o={};134217745&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(q(n.$$.fragment,t),e=!0)},o(t){z(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ct(t){let n,e,o,l,r,c,i=t[1].name+"";function s(){return t[14](t[1])}return{c(){n=g("div"),e=v(i),o=x(),_(n,"class",l=u(`option-item ${!t[1].hide&&"active"}`)+" svelte-7smjwx")},m(t,l){p(t,n,l),m(n,e),m(n,o),r||(c=y(n,"click",s),r=!0)},p(o,r){t=o,1&r&&i!==(i=t[1].name+"")&&b(e,i),1&r&&l!==(l=u(`option-item ${!t[1].hide&&"active"}`)+" svelte-7smjwx")&&_(n,"class",l)},d(t){t&&h(n),r=!1,c()}}}function it(t){let n,e,l,r,c,i,s,u,a,d=t[0],f=[];for(let n=0;n<d.length;n+=1)f[n]=ct(lt(t,d,n));return{c(){n=g("div");for(let t=0;t<f.length;t+=1)f[t].c();e=x(),l=g("input"),r=x(),c=g("button"),i=v("+"),_(n,"class","option-list svelte-7smjwx"),_(l,"class","modal-option-input svelte-7smjwx"),_(c,"class","add-option-btn svelte-7smjwx"),c.disabled=s=!t[4].trim()},m(o,s){p(o,n,s);for(let t=0;t<f.length;t+=1)f[t].m(n,null);p(o,e,s),p(o,l,s),k(l,t[4]),p(o,r,s),p(o,c,s),m(c,i),u||(a=[y(l,"input",t[15]),y(c,"click",t[11])],u=!0)},p(t,e){if(1025&e){let o;for(d=t[0],o=0;o<d.length;o+=1){const l=lt(t,d,o);f[o]?f[o].p(l,e):(f[o]=ct(l),f[o].c(),f[o].m(n,null))}for(;o<f.length;o+=1)f[o].d(1);f.length=d.length}16&e&&l.value!==t[4]&&k(l,t[4]),16&e&&s!==(s=!t[4].trim())&&(c.disabled=s)},d(t){t&&h(n),$(f,t),t&&h(e),t&&h(l),t&&h(r),t&&h(c),u=!1,o(a)}}}function st(t){let n;return{c(){n=g("div"),n.textContent="Options Setting",_(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&h(n)}}}function ut(n){let e,o,l;return{c(){e=g("button"),e.textContent="Reset",_(e,"slot","footer-extra")},m(t,r){p(t,e,r),o||(l=y(e,"click",n[12]),o=!0)},p:t,d(t){t&&h(e),o=!1,l()}}}function at(n){let e,o,l;return{c(){e=g("button"),e.textContent="stop"},m(t,r){p(t,e,r),o||(l=y(e,"click",n[8]),o=!0)},p:t,d(t){t&&h(e),o=!1,l()}}}function dt(n){let e,o,l;return{c(){e=g("button"),e.textContent="start"},m(t,r){p(t,e,r),o||(l=y(e,"click",n[7]),o=!0)},p:t,d(t){t&&h(e),o=!1,l()}}}function ft(t){let n,e,o,l=Object.keys(t[1]),r=[];for(let n=0;n<l.length;n+=1)r[n]=mt(ot(t,l,n));return{c(){n=g("div"),e=g("h4"),e.textContent="Decision Making Result",o=x();for(let t=0;t<r.length;t+=1)r[t].c()},m(t,l){p(t,n,l),m(n,e),m(n,o);for(let t=0;t<r.length;t+=1)r[t].m(n,null)},p(t,e){if(2&e){let o;for(l=Object.keys(t[1]),o=0;o<l.length;o+=1){const c=ot(t,l,o);r[o]?r[o].p(c,e):(r[o]=mt(c),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=l.length}},d(t){t&&h(n),$(r,t)}}}function mt(t){let n,e,o,l,r=t[22]+"",c=t[1][t[22]]+"";return{c(){n=g("div"),e=v(r),o=v(": "),l=v(c)},m(t,r){p(t,n,r),m(n,e),m(n,o),m(n,l)},p(t,n){2&n&&r!==(r=t[22]+"")&&b(e,r),2&n&&c!==(c=t[1][t[22]]+"")&&b(l,c)},d(t){t&&h(n)}}}function pt(t){let n,e,l,r,c,i,s,u,a,d,f,$,w,j,C=t[6].length+"",E=t[3]&&rt(t);function M(t,n){return t[2]?at:dt}let A=M(t),B=A(t),O=t[1]&&!t[2]&&ft(t);return{c(){n=g("div"),E&&E.c(),e=x(),l=g("div"),r=v("Number of Options："),c=v(C),i=x(),s=g("span"),s.textContent="Options Setting",u=x(),a=g("input"),d=x(),B.c(),f=x(),O&&O.c(),_(s,"class","link svelte-7smjwx"),_(l,"class","options-info svelte-7smjwx"),a.disabled=!0,_(a,"placeholder","Make decision randomly"),_(a,"class","random-input svelte-7smjwx")},m(o,h){p(o,n,h),E&&E.m(n,null),m(n,e),m(n,l),m(l,r),m(l,c),m(l,i),m(l,s),m(n,u),m(n,a),k(a,t[5]),m(n,d),B.m(n,null),m(n,f),O&&O.m(n,null),$=!0,w||(j=[y(s,"click",t[18]),y(a,"input",t[19])],w=!0)},p(t,[l]){t[3]?E?(E.p(t,l),8&l&&q(E,1)):(E=rt(t),E.c(),q(E,1),E.m(n,e)):E&&(T={r:0,c:[],p:T},z(E,1,1,(()=>{E=null})),T.r||o(T.c),T=T.p),(!$||64&l)&&C!==(C=t[6].length+"")&&b(c,C),32&l&&a.value!==t[5]&&k(a,t[5]),A===(A=M(t))&&B?B.p(t,l):(B.d(1),B=A(t),B&&(B.c(),B.m(n,f))),t[1]&&!t[2]?O?O.p(t,l):(O=ft(t),O.c(),O.m(n,null)):O&&(O.d(1),O=null)},i(t){$||(q(E),$=!0)},o(t){z(E),$=!1},d(t){t&&h(n),E&&E.d(),B.d(),O&&O.d(),w=!1,o(j)}}}function ht(t,n,e){let o,l,{options:r}=n,c=!1,i=!1,s=null,u=null,a=et(r),d="";const f=t=>{e(3,i=t)},m=t=>{t.hide=!t.hide,e(0,a=[...a])};return t.$$set=t=>{"options"in t&&e(13,r=t.options)},t.$$.update=()=>{2&t.$$.dirty&&e(5,o=(null==s?void 0:s.name)||""),1&t.$$.dirty&&e(6,l=a.filter((t=>!t.hide))),1&t.$$.dirty&&console.log("options => ",a)},[a,s,c,i,d,o,l,()=>{e(2,c=!0),u=setInterval((()=>{const t=(n=0,o=l.length,Math.min(Math.floor(Math.random()*(o-n)+n),o));var n,o;e(1,s=l[t])}),50)},()=>{e(2,c=!1),u&&clearInterval(u)},f,m,()=>{const t=d.trim();t&&(e(0,a=[...a,{name:t}]),e(4,d=""))},()=>{e(0,a=et(r))},r,t=>m(t),function(){d=this.value,e(4,d)},()=>f(!1),()=>f(!1),()=>f(!0),function(){o=this.value,e(5,o),e(1,s)}]}class $t extends K{constructor(t){super(),J(this,t,ht,pt,r,{options:13})}}function gt(n){let e,o,l,r,c;return r=new $t({props:{options:Q}}),{c(){e=g("main"),o=g("h3"),o.textContent="Decision Making",l=x(),F(r.$$.fragment),_(e,"class","svelte-4pb6x3")},m(t,n){p(t,e,n),m(e,o),m(e,l),P(r,e,null),c=!0},p:t,i(t){c||(q(r.$$.fragment,t),c=!0)},o(t){z(r.$$.fragment,t),c=!1},d(t){t&&h(e),G(r)}}}return new class extends K{constructor(t){super(),J(this,t,null,gt,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
