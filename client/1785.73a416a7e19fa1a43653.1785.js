"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[1785],{1728:(t,e,n)=>{n.d(e,{Z:()=>h});var a=n(4178),s=n(3609);let i=!0;function r(){i=!1,(0,s.M)((()=>requestAnimationFrame((()=>this.set({revealed:!0})))))}function o(t,e){var n,s=e.pageComponent;function i(e){var n={params:e.params};return{root:t.root,store:t.store,data:n}}if(s)var r=new s(i(e));return{c(){r&&r._fragment.c(),n=(0,a.Yr)()},l(t){r&&r._fragment.l(t),n=(0,a.Yr)()},m(t,e){r&&r._mount(t,e),(0,a.$T)(t,n,e)},p(t,e){var a={};t.params&&(a.params=e.params),s!==(s=e.pageComponent)?(r&&r.destroy(),s?((r=new s(i(e)))._fragment.c(),r._mount(n.parentNode,n)):r=null):s&&r._set(a)},d(t){t&&(0,a.r2)(n),r&&r.destroy(t)}}}function c(t){var e,n,s,c;if((0,a.S1)(this,t),this._state=(0,a.f0)({revealed:i},t.data),this._intro=!0,this._fragment=(e=this,n=this._state,c=n.revealed&&o(e,n),{c(){c&&c.c(),s=(0,a.Yr)()},l(t){c&&c.l(t),s=(0,a.Yr)()},m(t,e){c&&c.m(t,e),(0,a.$T)(t,s,e)},p(t,n){n.revealed?c?c.p(t,n):((c=o(e,n)).c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},d(t){c&&c.d(t),t&&(0,a.r2)(s)}}),this.root._oncreate.push((()=>{r.call(this),this.fire("update",{changed:(0,a.lZ)({},this._state),current:this._state})})),t.target){var h=(0,a.pI)(t.target);t.hydrate?this._fragment.l(h):this._fragment.c(),h.forEach(a.r2),this._mount(t.target,t.anchor),(0,a.yl)(this)}}(0,a.f0)(c.prototype,a.uS);const h=c},2192:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(4178),s=n(5524),i=n(6633);function r(t){var e,n;if((0,a.S1)(this,t),this.store=s.h,this._state=(0,a.f0)((0,a.f0)(this.store._init(["isUserLoggedIn","currentInstance","hasNotifications","numberOfNotifications"]),{settingsPage:!1}),t.data),this.store._add(this,["isUserLoggedIn","currentInstance","hasNotifications","numberOfNotifications"]),this._recompute({$isUserLoggedIn:1,settingsPage:1,$currentInstance:1,showInstanceName:1,$hasNotifications:1,$numberOfNotifications:1,name:1},this._state),this._intro=!0,this._handlers.destroy=[a.iT],this._fragment=(e=this._state,document.title=n=e.title,{c:a.ZT,l:a.ZT,m:a.ZT,p(t,e){t.title&&n!==(n=e.title)&&(document.title=n)},d:a.ZT}),t.target){var i=(0,a.pI)(t.target);t.hydrate?this._fragment.l(i):this._fragment.c(),i.forEach(a.r2),this._mount(t.target,t.anchor)}}(0,a.f0)(r.prototype,a.uS),r.prototype._recompute=function(t,e){(t.$isUserLoggedIn||t.settingsPage||t.$currentInstance)&&this._differs(e.showInstanceName,e.showInstanceName=function({$isUserLoggedIn:t,settingsPage:e,$currentInstance:n}){return!(!t||e||!n)}(e))&&(t.showInstanceName=!0),(t.showInstanceName||t.$currentInstance||t.$hasNotifications||t.$numberOfNotifications||t.name)&&this._differs(e.title,e.title=function({showInstanceName:t,$currentInstance:e,$hasNotifications:n,$numberOfNotifications:a,name:s}){return(0,i.A)([["hasNotifications","select",{true:["(",["count"],")"],other:[]}]," ",["name"]," · ",["showInstanceName","select",{true:[["instanceName"]],other:[["appName"]]}]],{showInstanceName:t,instanceName:e,hasNotifications:n,count:a,name:s,appName:location.hostname})}(e))&&(t.title=!0)};const o=r},3609:(t,e,n)=>{function a(t){requestAnimationFrame((()=>requestAnimationFrame(t)))}n.d(e,{M:()=>a})}}]);
//# sourceMappingURL=1785.73a416a7e19fa1a43653.1785.js.map