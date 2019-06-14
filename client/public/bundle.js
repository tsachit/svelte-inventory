var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function l(){return m(" ")}function f(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function d(t,n,e){null==e?t.removeAttribute(n):t.setAttribute(n,e)}function p(t){return""===t?void 0:+t}function $(t,n){n=""+n,t.data!==n&&(t.data=n)}let h;function y(t){h=t}function v(){const t=h;return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}const g=[],b=Promise.resolve();let q=!1;const _=[],x=[],N=[];function C(t){x.push(t)}function k(){const t=new Set;do{for(;g.length;){const t=g.shift();y(t),w(t.$$)}for(;_.length;)_.shift()();for(;x.length;){const n=x.pop();t.has(n)||(n(),t.add(n))}}while(g.length);for(;N.length;)N.pop()();q=!1}function w(t){t.fragment&&(t.update(t.dirty),r(t.before_render),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_render.forEach(C))}let E;function I(){E={remaining:0,callbacks:[]}}function j(){E.remaining||r(E.callbacks)}function L(t){E.callbacks.push(t)}function P(t,e,i){const{fragment:a,on_mount:u,on_destroy:c,after_render:s}=t.$$;a.m(e,i),C(()=>{const e=u.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]}),s.forEach(C)}function A(t,n){t.$$.dirty||(g.push(t),q||(q=!0,b.then(k)),t.$$.dirty=e()),t.$$.dirty[n]=!0}function D(n,o,i,a,u,c){const s=h;y(n);const m=o.props||{},l=n.$$={fragment:null,ctx:null,props:c,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(s?s.$$.context:[]),callbacks:e(),dirty:null};let f=!1;var d;l.ctx=i?i(n,m,(t,e)=>{l.ctx&&u(l.ctx[t],l.ctx[t]=e)&&(l.bound[t]&&l.bound[t](e),f&&A(n,t))}):m,l.update(),f=!0,r(l.before_render),l.fragment=a(l.ctx),o.target&&(o.hydrate?l.fragment.l((d=o.target,Array.from(d.childNodes))):l.fragment.c(),o.intro&&n.$$.fragment.i&&n.$$.fragment.i(),P(n,o.target,o.anchor),k()),y(s)}class O{$destroy(){var n,e;e=!0,(n=this).$$&&(r(n.$$.on_destroy),n.$$.fragment.d(e),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={}),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function S(n){var e;return{c(){(e=s("div")).innerHTML="<h1>Temporary Inventory Listing</h1>",e.className="navbar bg-primary"},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&c(e)}}}class T extends O{constructor(t){super(),D(this,t,null,S,i,[])}}function B(t){var n;return{c(){n=m("+")},m(t,e){u(t,n,e)},d(t){t&&c(n)}}}function M(t){var n;return{c(){n=m("-")},m(t,e){u(t,n,e)},d(t){t&&c(n)}}}function Q(t){var n,e,o,i,a,m;return{c(){(n=s("button")).textContent="+1",e=l(),(o=s("button")).textContent="-1",i=l(),a=s("input"),n.className="btn",o.className="btn btn-dark",d(a,"type","number"),m=[f(n,"click",t.addPoint),f(o,"click",t.removePoint),f(a,"input",t.input_input_handler)]},m(r,c){u(r,n,c),u(r,e,c),u(r,o,c),u(r,i,c),u(r,a,c),a.value=t.quantity},p(t,n){t.quantity&&(a.value=n.quantity)},d(t){t&&(c(n),c(e),c(o),c(i),c(a)),r(m)}}}function H(n){var e,o,i,d,p,h,y,v,g,b,q,_,x;function N(t){return t.showControls?M:B}var C=N(n),k=C(n),w=n.showControls&&Q(n);return{c(){e=s("div"),o=s("h1"),i=m(n.name),d=l(),p=s("button"),k.c(),h=l(),(y=s("button")).textContent="x",v=l(),g=s("h3"),b=m("Quantity: "),q=m(n.quantity),_=l(),w&&w.c(),p.className="btn btn-sm",y.className="btn btn-danger btn-sm",o.className="svelte-1xoc5jp",g.className="svelte-1xoc5jp",e.className="card",x=[f(p,"click",n.toggleControls),f(y,"click",n.onDelete)]},m(t,n){u(t,e,n),a(e,o),a(o,i),a(o,d),a(o,p),k.m(p,null),a(o,h),a(o,y),a(e,v),a(e,g),a(g,b),a(g,q),a(e,_),w&&w.m(e,null)},p(t,n){t.name&&$(i,n.name),C!==(C=N(n))&&(k.d(1),(k=C(n))&&(k.c(),k.m(p,null))),t.quantity&&$(q,n.quantity),n.showControls?w?w.p(t,n):((w=Q(n)).c(),w.m(e,null)):w&&(w.d(1),w=null)},i:t,o:t,d(t){t&&c(e),k.d(),w&&w.d(),r(x)}}}function K(t,n,e){const r=v();let{name:o,quantity:i}=n,a=!1;return t.$set=(t=>{"name"in t&&e("name",o=t.name),"quantity"in t&&e("quantity",i=t.quantity)}),{name:o,quantity:i,showControls:a,addPoint:()=>{const t=i+=1;return e("quantity",i),t},removePoint:()=>{const t=i-=1;return e("quantity",i),t},toggleControls:()=>{const t=a=!a;return e("showControls",a),t},onDelete:()=>r("removeitem",o),input_input_handler:function(){i=p(this.value),e("quantity",i)}}}class z extends O{constructor(t){super(),D(this,t,K,H,i,["name","quantity"])}}function F(n){var e,o,i,m,p,$,h;return{c(){e=s("form"),o=s("input"),i=l(),m=s("input"),p=l(),$=s("input"),d(o,"type","text"),o.placeholder="Item Name",d(m,"type","number"),m.placeholder="Item Quantity",d($,"type","submit"),$.className="btn btn-primary",$.value="Add Item",e.className="grid-3",h=[f(o,"input",n.input0_input_handler),f(m,"input",n.input1_input_handler),f(e,"submit",n.onSubmit)]},m(t,r){u(t,e,r),a(e,o),o.value=n.item.name,a(e,i),a(e,m),m.value=n.item.quantity,a(e,p),a(e,$)},p(t,n){t.item&&o.value!==n.item.name&&(o.value=n.item.name),t.item&&(m.value=n.item.quantity)},i:t,o:t,d(t){t&&c(e),r(h)}}}function G(t,n,e){const r=v();let o={name:"",quantity:0};return{item:o,onSubmit:t=>{t.preventDefault(),r("additem",o),e("item",o={name:"",quantity:0})},input0_input_handler:function(){o.name=this.value,e("item",o)},input1_input_handler:function(){o.quantity=p(this.value),e("item",o)}}}class J extends O{constructor(t){super(),D(this,t,G,F,i,[])}}function R(t,n,e){const r=Object.create(t);return r.item=n[e],r}function U(t){for(var n,e,r=t.items,o=[],i=0;i<r.length;i+=1)o[i]=W(R(t,r,i));function a(t,n,e){o[t]&&(n&&L(()=>{o[t].d(n),o[t]=null}),o[t].o(e))}return{c(){for(var t=0;t<o.length;t+=1)o[t].c();n=m("")},m(t,r){for(var i=0;i<o.length;i+=1)o[i].m(t,r);u(t,n,r),e=!0},p(t,e){if(t.items||t.removeItem){r=e.items;for(var i=0;i<r.length;i+=1){const a=R(e,r,i);o[i]?(o[i].p(t,a),o[i].i(1)):(o[i]=W(a),o[i].c(),o[i].i(1),o[i].m(n.parentNode,n))}for(I();i<o.length;i+=1)a(i,1,1);j()}},i(t){if(!e){for(var n=0;n<r.length;n+=1)o[n].i();e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)a(t,0,0);e=!1},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t),t&&c(n)}}}function V(n){var e;return{c(){(e=s("p")).textContent="No Items"},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&c(e)}}}function W(t){var n,e=new z({props:{name:t.item.name,quantity:t.item.quantity}});return e.$on("removeitem",t.removeItem),{c(){e.$$.fragment.c()},m(t,r){P(e,t,r),n=!0},p(t,n){var r={};t.items&&(r.name=n.item.name),t.items&&(r.quantity=n.item.quantity),e.$set(r)},i(t){n||(e.$$.fragment.i(t),n=!0)},o(t){e.$$.fragment.o(t),n=!1},d(t){e.$destroy(t)}}}function X(t){var n,e,r,o,i,m,f=new T({}),d=new J({});d.$on("additem",t.addItem);var p=[V,U],$=[];function h(t){return 0===t.items.length?0:1}return o=h(t),i=$[o]=p[o](t),{c(){f.$$.fragment.c(),n=l(),e=s("div"),d.$$.fragment.c(),r=l(),i.c(),e.className="container"},m(t,i){P(f,t,i),u(t,n,i),u(t,e,i),P(d,e,null),a(e,r),$[o].m(e,null),m=!0},p(t,n){var r=o;(o=h(n))===r?$[o].p(t,n):(I(),L(()=>{$[r].d(1),$[r]=null}),i.o(1),j(),(i=$[o])||(i=$[o]=p[o](n)).c(),i.i(1),i.m(e,null))},i(t){m||(f.$$.fragment.i(t),d.$$.fragment.i(t),i&&i.i(),m=!0)},o(t){f.$$.fragment.o(t),d.$$.fragment.o(t),i&&i.o(),m=!1},d(t){f.$destroy(t),t&&(c(n),c(e)),d.$destroy(),$[o].d()}}}function Y(t,n,e){let r=[{name:"Laptops",quantity:18},{name:"Desktops",quantity:5},{name:"Keyboards",quantity:24}];return{items:r,addItem:t=>{const n=t.detail;e("items",r=[...r,n])},removeItem:t=>{e("items",r=r.filter(n=>n.name!==t.detail))}}}return new class extends O{constructor(t){super(),D(this,t,Y,X,i,[])}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
