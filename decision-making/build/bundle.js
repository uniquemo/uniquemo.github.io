var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function l(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function r(t,n,e,o){if(t){const l=i(t,n,e,o);return t[0](l)}}function i(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function s(t,n,e,o,l,c,r){const s=function(t,n,e,o){if(t[2]&&o){const l=t[2](o(e));if(void 0===n.dirty)return l;if("object"==typeof l){const t=[],e=Math.max(n.dirty.length,l.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|l[o];return t}return n.dirty|l}return n.dirty}(n,o,l,c);if(s){const l=i(n,e,o,r);t.p(l,s)}}function u(t){return null==t?"":t}let a,d=!1;function f(t,n,e,o){for(;t<n;){const l=t+(n-t>>1);e(l)<=o?t=l+1:n=l}return t}function m(t,n){d?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let l=0;for(let t=0;t<n.length;t++){const c=f(1,l+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;o[t]=e[c]+1;const r=c+1;e[r]=t,l=Math.max(r,l)}const c=[],r=[];let i=n.length-1;for(let t=e[l]+1;0!=t;t=o[t-1]){for(c.push(n[t-1]);i>=t;i--)r.push(n[i]);i--}for(;i>=0;i--)r.push(n[i]);c.reverse(),r.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<r.length;n++){for(;e<c.length&&r[n].claim_order>=c[e].claim_order;)e++;const o=e<c.length?c[e]:null;t.insertBefore(r[n],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function p(t,n,e){d&&!e?m(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function x(){return v(" ")}function _(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function y(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n){t.value=null==n?"":n}function w(t){a=t}function C(){const t=function(){if(!a)throw new Error("Function called outside component initialization");return a}();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const l=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach((n=>{n.call(t,l)}))}}}const j=[],E=[],M=[],B=[],O=Promise.resolve();let N=!1;function A(t){M.push(t)}let S=!1;const I=new Set;function D(){if(!S){S=!0;do{for(let t=0;t<j.length;t+=1){const n=j[t];w(n),L(n.$$)}for(w(null),j.length=0;E.length;)E.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];I.has(n)||(I.add(n),n())}M.length=0}while(j.length);for(;B.length;)B.pop()();N=!1,S=!1,I.clear()}}function L(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const T=new Set;let q;function z(t,n){t&&t.i&&(T.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),q.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function P(t){t&&t.c()}function R(t,e,c,r){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,c),r||A((()=>{const e=s.map(n).filter(l);u?u.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(A)}function G(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function H(t,n){-1===t.$$.dirty[0]&&(j.push(t),N||(N=!0,O.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function J(n,l,c,r,i,s,u=[-1]){const f=a;w(n);const m=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:l.context||[]),callbacks:e(),dirty:u,skip_bound:!1};let p=!1;if(m.ctx=c?c(n,l.props||{},((t,e,...o)=>{const l=o.length?o[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=l)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](l),p&&H(n,t)),e})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!r&&r(m.ctx),l.target){if(l.hydrate){d=!0;const t=function(t){return Array.from(t.childNodes)}(l.target);m.fragment&&m.fragment.l(t),t.forEach(h)}else m.fragment&&m.fragment.c();l.intro&&z(n.$$.fragment),R(n,l.target,l.anchor,l.customElement),d=!1,D()}w(f)}class K{$destroy(){G(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=["原味汤粉","粥瓜婆","重庆小面","螺蛳粉","炒粉","番茄炒蛋","粿条","饺子","西安面食","葱油饼 & 酱香饼"].map((t=>({name:t}))),U=t=>({}),V=t=>({});function W(n){let e,o,l;return{c(){e=g("button"),e.textContent="close"},m(t,c){p(t,e,c),o||(l=_(e,"click",n[2]),o=!0)},p:t,d(t){t&&h(e),o=!1,l()}}}function X(t){let n,e,l,c,i,u,a,d,f,$,v,b;const k=t[6].header,w=r(k,t,t[5],V),C=t[6].default,j=r(C,t,t[5],null);let E=!t[0]&&W(t);return{c(){n=g("div"),e=x(),l=g("div"),c=g("div"),w&&w.c(),i=x(),u=g("div"),j&&j.c(),a=x(),d=g("button"),d.textContent="confirm",f=x(),E&&E.c(),y(n,"class","modal-mask svelte-1sm2j25"),y(c,"class","modal-header svelte-1sm2j25"),y(u,"class","modal-body svelte-1sm2j25"),y(l,"class","modal svelte-1sm2j25")},m(o,r){p(o,n,r),p(o,e,r),p(o,l,r),m(l,c),w&&w.m(c,null),m(l,i),m(l,u),j&&j.m(u,null),m(l,a),m(l,d),m(l,f),E&&E.m(l,null),t[7](l),$=!0,v||(b=[_(window,"keydown",t[4]),_(n,"click",t[2]),_(d,"click",t[3])],v=!0)},p(t,[n]){w&&w.p&&(!$||32&n)&&s(w,k,t,t[5],$?n:-1,U,V),j&&j.p&&(!$||32&n)&&s(j,C,t,t[5],$?n:-1,null,null),t[0]?E&&(E.d(1),E=null):E?E.p(t,n):(E=W(t),E.c(),E.m(l,null))},i(t){$||(z(w,t),z(j,t),$=!0)},o(t){F(w,t),F(j,t),$=!1},d(c){c&&h(n),c&&h(e),c&&h(l),w&&w.d(c),j&&j.d(c),E&&E.d(),t[7](null),v=!1,o(b)}}}function Y(t,n,e){let{$$slots:o={},$$scope:l}=n,{hideCloseBtn:c}=n;const r=C(),i=()=>r("close");let s;return t.$$set=t=>{"hideCloseBtn"in t&&e(0,c=t.hideCloseBtn),"$$scope"in t&&e(5,l=t.$$scope)},[c,s,i,()=>r("confirm"),t=>{"Escape"!==t.key||i()},l,o,function(t){E[t?"unshift":"push"]((()=>{s=t,e(1,s)}))}]}class Z extends K{constructor(t){super(),J(this,t,Y,X,c,{hideCloseBtn:0})}}function tt(t,n,e){const o=t.slice();return o[21]=n[e],o}function nt(t,n,e){const o=t.slice();return o[1]=n[e],o[25]=e,o}function et(t){let n,e;return n=new Z({props:{hideCloseBtn:!0,$$slots:{header:[ct],default:[lt]},$$scope:{ctx:t}}}),n.$on("close",t[15]),n.$on("confirm",t[16]),{c(){P(n.$$.fragment)},m(t,o){R(n,t,o),e=!0},p(t,e){const o={};67108881&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(z(n.$$.fragment,t),e=!0)},o(t){F(n.$$.fragment,t),e=!1},d(t){G(n,t)}}}function ot(t){let n,e,o,l,c,r,i=t[1].name+"";function s(){return t[13](t[1])}return{c(){n=g("div"),e=v(i),o=x(),y(n,"class",l=u(`option-item ${!t[1].hide&&"active"}`)+" svelte-7smjwx")},m(t,l){p(t,n,l),m(n,e),m(n,o),c||(r=_(n,"click",s),c=!0)},p(o,c){t=o,1&c&&i!==(i=t[1].name+"")&&b(e,i),1&c&&l!==(l=u(`option-item ${!t[1].hide&&"active"}`)+" svelte-7smjwx")&&y(n,"class",l)},d(t){t&&h(n),c=!1,r()}}}function lt(t){let n,e,l,c,r,i,s,u=t[0],a=[];for(let n=0;n<u.length;n+=1)a[n]=ot(nt(t,u,n));return{c(){n=g("div");for(let t=0;t<a.length;t+=1)a[t].c();e=x(),l=g("input"),c=x(),r=g("button"),r.textContent="+",y(n,"class","option-list svelte-7smjwx"),y(l,"class","modal-option-input svelte-7smjwx"),y(r,"class","add-option-btn svelte-7smjwx")},m(o,u){p(o,n,u);for(let t=0;t<a.length;t+=1)a[t].m(n,null);p(o,e,u),p(o,l,u),k(l,t[4]),p(o,c,u),p(o,r,u),i||(s=[_(l,"input",t[14]),_(r,"click",t[11])],i=!0)},p(t,e){if(1025&e){let o;for(u=t[0],o=0;o<u.length;o+=1){const l=nt(t,u,o);a[o]?a[o].p(l,e):(a[o]=ot(l),a[o].c(),a[o].m(n,null))}for(;o<a.length;o+=1)a[o].d(1);a.length=u.length}16&e&&l.value!==t[4]&&k(l,t[4])},d(t){t&&h(n),$(a,t),t&&h(e),t&&h(l),t&&h(c),t&&h(r),i=!1,o(s)}}}function ct(t){let n;return{c(){n=g("div"),n.textContent="Options Setting",y(n,"slot","header")},m(t,e){p(t,n,e)},d(t){t&&h(n)}}}function rt(n){let e,o,l;return{c(){e=g("button"),e.textContent="stop"},m(t,c){p(t,e,c),o||(l=_(e,"click",n[8]),o=!0)},p:t,d(t){t&&h(e),o=!1,l()}}}function it(n){let e,o,l;return{c(){e=g("button"),e.textContent="start"},m(t,c){p(t,e,c),o||(l=_(e,"click",n[7]),o=!0)},p:t,d(t){t&&h(e),o=!1,l()}}}function st(t){let n,e,o,l=Object.keys(t[1]),c=[];for(let n=0;n<l.length;n+=1)c[n]=ut(tt(t,l,n));return{c(){n=g("div"),e=g("h4"),e.textContent="Decision Making Result",o=x();for(let t=0;t<c.length;t+=1)c[t].c()},m(t,l){p(t,n,l),m(n,e),m(n,o);for(let t=0;t<c.length;t+=1)c[t].m(n,null)},p(t,e){if(2&e){let o;for(l=Object.keys(t[1]),o=0;o<l.length;o+=1){const r=tt(t,l,o);c[o]?c[o].p(r,e):(c[o]=ut(r),c[o].c(),c[o].m(n,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=l.length}},d(t){t&&h(n),$(c,t)}}}function ut(t){let n,e,o,l,c=t[21]+"",r=t[1][t[21]]+"";return{c(){n=g("div"),e=v(c),o=v(": "),l=v(r)},m(t,c){p(t,n,c),m(n,e),m(n,o),m(n,l)},p(t,n){2&n&&c!==(c=t[21]+"")&&b(e,c),2&n&&r!==(r=t[1][t[21]]+"")&&b(l,r)},d(t){t&&h(n)}}}function at(t){let n,e,l,c,r,i,s,u,a,d,f,$,w,C,j=t[6].length+"",E=t[3]&&et(t);function M(t,n){return t[2]?rt:it}let B=M(t),O=B(t),N=t[1]&&!t[2]&&st(t);return{c(){n=g("div"),E&&E.c(),e=x(),l=g("div"),c=v("Number of Options："),r=v(j),i=x(),s=g("span"),s.textContent="Options Setting",u=x(),a=g("input"),d=x(),O.c(),f=x(),N&&N.c(),y(s,"class","link svelte-7smjwx"),y(l,"class","options-info svelte-7smjwx"),a.disabled=!0,y(a,"placeholder","Make decision randomly"),y(a,"class","random-input svelte-7smjwx")},m(o,h){p(o,n,h),E&&E.m(n,null),m(n,e),m(n,l),m(l,c),m(l,r),m(l,i),m(l,s),m(n,u),m(n,a),k(a,t[5]),m(n,d),O.m(n,null),m(n,f),N&&N.m(n,null),$=!0,w||(C=[_(s,"click",t[17]),_(a,"input",t[18])],w=!0)},p(t,[l]){t[3]?E?(E.p(t,l),8&l&&z(E,1)):(E=et(t),E.c(),z(E,1),E.m(n,e)):E&&(q={r:0,c:[],p:q},F(E,1,1,(()=>{E=null})),q.r||o(q.c),q=q.p),(!$||64&l)&&j!==(j=t[6].length+"")&&b(r,j),32&l&&a.value!==t[5]&&k(a,t[5]),B===(B=M(t))&&O?O.p(t,l):(O.d(1),O=B(t),O&&(O.c(),O.m(n,f))),t[1]&&!t[2]?N?N.p(t,l):(N=st(t),N.c(),N.m(n,null)):N&&(N.d(1),N=null)},i(t){$||(z(E),$=!0)},o(t){F(E),$=!1},d(t){t&&h(n),E&&E.d(),O.d(),N&&N.d(),w=!1,o(C)}}}function dt(t,n,e){let o,l,{options:c}=n,r=!1,i=!1,s=null,u=null,a=[...c],d="";const f=t=>{e(3,i=t)},m=t=>{t.hide=!t.hide,e(0,a=[...a])};return t.$$set=t=>{"options"in t&&e(12,c=t.options)},t.$$.update=()=>{2&t.$$.dirty&&e(5,o=(null==s?void 0:s.name)||""),1&t.$$.dirty&&e(6,l=a.filter((t=>!t.hide)))},[a,s,r,i,d,o,l,()=>{e(2,r=!0),u=setInterval((()=>{const t=(n=0,o=l.length,Math.min(Math.floor(Math.random()*(o-n)+n),o));var n,o;e(1,s=l[t])}),50)},()=>{e(2,r=!1),u&&clearInterval(u)},f,m,()=>{e(0,a=[...a,{name:d}]),e(4,d="")},c,t=>m(t),function(){d=this.value,e(4,d)},()=>f(!1),()=>f(!1),()=>f(!0),function(){o=this.value,e(5,o),e(1,s)}]}class ft extends K{constructor(t){super(),J(this,t,dt,at,c,{options:12})}}function mt(n){let e,o,l,c,r;return c=new ft({props:{options:Q}}),{c(){e=g("main"),o=g("h3"),o.textContent="Decision Making",l=x(),P(c.$$.fragment),y(e,"class","svelte-4pb6x3")},m(t,n){p(t,e,n),m(e,o),m(e,l),R(c,e,null),r=!0},p:t,i(t){r||(z(c.$$.fragment,t),r=!0)},o(t){F(c.$$.fragment,t),r=!1},d(t){t&&h(e),G(c)}}}return new class extends K{constructor(t){super(),J(this,t,null,mt,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
