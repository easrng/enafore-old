"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[5980],{7655:(t,e,r)=>{r.d(e,{Z:()=>h});var a=r(4178),n=r(5984);const o=700;function s(){setTimeout((()=>{this.set({shown:!0})}),o)}function i(t){var e,r,o,i,h,l;if((0,a.S1)(this,t),this._state=(0,a.f0)({shown:!1},t.data),this._intro=!0,document.getElementById("svelte-10e8c6q-style")||((e=(0,a.az)("style")).id="svelte-10e8c6q-style",e.textContent=".loading-page.svelte-10e8c6q{position:absolute;top:0;left:0;right:0;height:150px;display:flex;align-items:center;justify-content:center;z-index:50;transition:opacity 0.25s linear}",(0,a.R3)(document.head,e)),this._fragment=(r=this,o=this._state,l=new n.Z({root:r.root,store:r.store}),{c(){i=(0,a.az)("div"),l._fragment.c(),this.h()},l(t){i=(0,a.d$)(t,"DIV",{class:!0},!1);var e=(0,a.pI)(i);l._fragment.l(e),e.forEach(a.r2),this.h()},h(){i.className=h="loading-page "+(o.shown?"":"hidden")+" svelte-10e8c6q"},m(t,e){(0,a.$T)(t,i,e),l._mount(i,null)},p(t,e){t.shown&&h!==(h="loading-page "+(e.shown?"":"hidden")+" svelte-10e8c6q")&&(i.className=h)},d(t){t&&(0,a.r2)(i),l.destroy()}}),this.root._oncreate.push((()=>{s.call(this),this.fire("update",{changed:(0,a.lZ)({},this._state),current:this._state})})),t.target){var f=(0,a.pI)(t.target);t.hydrate?this._fragment.l(f):this._fragment.c(),f.forEach(a.r2),this._mount(t.target,t.anchor),(0,a.yl)(this)}}(0,a.f0)(i.prototype,a.uS);const h=i},9518:(t,e,r)=>{r.d(e,{Z:()=>s});var a=r(4178),n=r(3393);function o(t){var e,r,o,s;if((0,a.S1)(this,t),this._state=(0,a.f0)({tabs:[{name:"",label:"All",href:"/notifications"},{name:"mentions",label:"Mentions",href:"/notifications/mentions"}]},t.data),this._intro=!0,this._fragment=(e=this,r=this._state,o={label:"Filters",currentTabName:r.filter,tabs:r.tabs,className:"notification-filters"},s=new n.Z({root:e.root,store:e.store,data:o}),{c(){s._fragment.c()},l(t){s._fragment.l(t)},m(t,e){s._mount(t,e)},p(t,e){var r={};t.filter&&(r.currentTabName=e.filter),t.tabs&&(r.tabs=e.tabs),s._set(r)},d(t){s.destroy(t)}}),t.target){var i=(0,a.pI)(t.target);t.hydrate?this._fragment.l(i):this._fragment.c(),i.forEach(a.r2),this._mount(t.target,t.anchor),(0,a.yl)(this)}}(0,a.f0)(o.prototype,a.uS);const s=o},677:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var a=r(4178),n=r(2192),o=r(1728),s=r(997),i=r(5524),h=r(5764),l=r(7438),f=r(9518);function m(t,e){var r,n,o,i,l,f=new s.Z({root:t.root,store:t.store,slots:{default:(0,a.xJ)()}}),m=new h.Z({root:t.root,store:t.store,slots:{default:(0,a.xJ)()}});return{c(){r=(0,a.az)("h1"),n=(0,a.rw)("Notification mentions"),o=(0,a.rw)("\n\n    "),i=(0,a.az)("p"),l=(0,a.rw)("Your notification mentions will appear here when logged in."),f._fragment.c(),m._fragment.c()},l(t){r=(0,a.d$)(t,"H1",{},!1);var e=(0,a.pI)(r);n=(0,a.M4)(e,"Notification mentions"),e.forEach(a.r2),o=(0,a.M4)(t,"\n\n    "),i=(0,a.d$)(t,"P",{},!1);var s=(0,a.pI)(i);l=(0,a.M4)(s,"Your notification mentions will appear here when logged in."),s.forEach(a.r2),f._fragment.l(t),m._fragment.l(t)},m(t,e){(0,a.R3)(f._slotted.default,r),(0,a.R3)(r,n),(0,a.R3)(f._slotted.default,o),(0,a.R3)(f._slotted.default,i),(0,a.R3)(i,l),f._mount(m._slotted.default,null),m._mount(t,e)},d(t){f.destroy(),m.destroy(t)}}}function c(t,e){var r,n=new f.Z({root:t.root,store:t.store,data:{filter:"mentions"}}),o=new l.Z({root:t.root,store:t.store,data:{timeline:"notifications/mentions"}});return{c(){n._fragment.c(),r=(0,a.rw)("\n  "),o._fragment.c()},l(t){n._fragment.l(t),r=(0,a.M4)(t,"\n  "),o._fragment.l(t)},m(t,e){n._mount(t,e),(0,a.$T)(t,r,e),o._mount(t,e)},d(t){n.destroy(t),t&&(0,a.r2)(r),o.destroy(t)}}}function d(t){if((0,a.S1)(this,t),this.store=i.h,this._state=(0,a.f0)(this.store._init(["isUserLoggedIn"]),t.data),this.store._add(this,["isUserLoggedIn"]),this._intro=!0,this._handlers.destroy=[a.iT],this._fragment=function(t,e){var r;function n(t){return t.$isUserLoggedIn?c:m}var o=n(e),s=o(t,e);return{c(){s.c(),r=(0,a.Yr)()},l(t){s.l(t),r=(0,a.Yr)()},m(t,e){s.m(t,e),(0,a.$T)(t,r,e)},p(e,a){o!==(o=n(a))&&(s.d(1),(s=o(t,a)).c(),s.m(r.parentNode,r))},d(t){s.d(t),t&&(0,a.r2)(r)}}}(this,this._state),t.target){var e=(0,a.pI)(t.target);t.hydrate?this._fragment.l(e):this._fragment.c(),e.forEach(a.r2),this._mount(t.target,t.anchor),(0,a.yl)(this)}}(0,a.f0)(d.prototype,a.uS);const g=d;function _(t){var e,r,s,i,h,l;if((0,a.S1)(this,t),this._state=(0,a.f0)({pageComponent:g},t.data),this._intro=!0,this._fragment=(e=this,r=this._state,i=new n.Z({root:e.root,store:e.store,data:{name:"Notifications"}}),h={pageComponent:r.pageComponent,params:r.params},l=new o.Z({root:e.root,store:e.store,data:h}),{c(){i._fragment.c(),s=(0,a.rw)("\n\n  "),l._fragment.c()},l(t){i._fragment.l(t),s=(0,a.M4)(t,"\n\n  "),l._fragment.l(t)},m(t,e){i._mount(t,e),(0,a.$T)(t,s,e),l._mount(t,e)},p(t,e){var r={};t.pageComponent&&(r.pageComponent=e.pageComponent),t.params&&(r.params=e.params),l._set(r)},d(t){i.destroy(t),t&&(0,a.r2)(s),l.destroy(t)}}),t.target){var f=(0,a.pI)(t.target);t.hydrate?this._fragment.l(f):this._fragment.c(),f.forEach(a.r2),this._mount(t.target,t.anchor),(0,a.yl)(this)}}(0,a.f0)(_.prototype,a.uS);const p=_}}]);
//# sourceMappingURL=5980.200f3da75d45a7b08b3a.notifications_mentions.js.map