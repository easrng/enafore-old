"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[1216],{5051:(t,e,o)=>{o.r(e),o.d(e,{default:()=>I});var r=o(4178),n=o(2192),s=o(1728),a=o(8309),c=o(5524),i=o(2954),u=o(1932),l=o(385),h=o(4886);var f=o(4358),m=o(7031),p=o(6633);async function _(t,e,o){const{currentInstance:r,accessToken:n}=c.h.get();try{e?await async function(t,e,o){const r=`${(0,h.E)(t)}/api/v1/follow_requests/${o}/authorize`;return(0,l.v_)(r,null,(0,h.I)(e),{timeout:l.$Q})}(r,n,t):await async function(t,e,o){const r=`${(0,h.E)(t)}/api/v1/follow_requests/${o}/reject`;return(0,l.v_)(r,null,(0,h.I)(e),{timeout:l.$Q})}(r,n,t),o&&m.A.say(e?"Approved follow request":"Rejected follow request"),(0,f.j)("refreshAccountsList")}catch(s){console.error(s),m.A.say(e?(0,p.A)(["Unable to approve follow request: ",["error"]],{error:s.message||""}):(0,p.A)(["Unable to reject follow request: ",["error"]],{error:s.message||""}))}}var g=o(1162);function d({$currentInstance:t,$accessToken:e}){return async()=>{const o=await(0,i._v)(t,e);return function(t,e){g.F.setFollowRequestCount(t,e.length);const{followRequestCounts:o}=c.h.get();o[t]=e.length,c.h.set({followRequestCounts:o})}(t,o),o}}function w(t,e){var o={accountsFetcher:e.accountsFetcher,accountActions:e.accountActions},r=new a.Z({root:t.root,store:t.store,data:o});return{c(){r._fragment.c()},l(t){r._fragment.l(t)},m(t,e){r._mount(t,e)},p(t,e){var o={};t.accountsFetcher&&(o.accountsFetcher=e.accountsFetcher),t.accountActions&&(o.accountActions=e.accountActions),r._set(o)},d(t){r.destroy(t)}}}function v(t){var e,o,n,s,a,i;if((0,r.S1)(this,t),this.store=c.h,this._state=(0,r.f0)((0,r.f0)(this.store._init(["currentInstance","accessToken","isUserLoggedIn"]),{accountActions:[{icon:"#fa-check",label:"Approve",onclick:t=>_(t,!0,!0)},{icon:"#fa-times",label:"Reject",onclick:t=>_(t,!1,!0)}]}),t.data),this.store._add(this,["currentInstance","accessToken","isUserLoggedIn"]),this._recompute({$currentInstance:1,$accessToken:1},this._state),this._intro=!0,this._handlers.destroy=[r.iT],this._fragment=(e=this,o=this._state,a=new u.Z({root:e.root,store:e.store,data:{title:"Follow requests",icon:"#fa-user-plus"}}),i=o.$isUserLoggedIn&&w(e,o),{c(){a._fragment.c(),n=(0,r.rw)("\n"),i&&i.c(),s=(0,r.Yr)()},l(t){a._fragment.l(t),n=(0,r.M4)(t,"\n"),i&&i.l(t),s=(0,r.Yr)()},m(t,e){a._mount(t,e),(0,r.$T)(t,n,e),i&&i.m(t,e),(0,r.$T)(t,s,e)},p(t,o){o.$isUserLoggedIn?i?i.p(t,o):((i=w(e,o)).c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},d(t){a.destroy(t),t&&(0,r.r2)(n),i&&i.d(t),t&&(0,r.r2)(s)}}),t.target){var l=(0,r.pI)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(r.r2),this._mount(t.target,t.anchor),(0,r.yl)(this)}}(0,r.f0)(v.prototype,r.uS),v.prototype._recompute=function(t,e){(t.$currentInstance||t.$accessToken)&&this._differs(e.accountsFetcher,e.accountsFetcher=d(e))&&(t.accountsFetcher=!0)};const y=v;function $(t){var e,o,a,c,i,u;if((0,r.S1)(this,t),this._state=(0,r.f0)({pageComponent:y},t.data),this._intro=!0,this._fragment=(e=this,o=this._state,c=new n.Z({root:e.root,store:e.store,data:{name:"Follow requests"}}),i={pageComponent:o.pageComponent,params:o.params},u=new s.Z({root:e.root,store:e.store,data:i}),{c(){c._fragment.c(),a=(0,r.rw)("\n\n  "),u._fragment.c()},l(t){c._fragment.l(t),a=(0,r.M4)(t,"\n\n  "),u._fragment.l(t)},m(t,e){c._mount(t,e),(0,r.$T)(t,a,e),u._mount(t,e)},p(t,e){var o={};t.pageComponent&&(o.pageComponent=e.pageComponent),t.params&&(o.params=e.params),u._set(o)},d(t){c.destroy(t),t&&(0,r.r2)(a),u.destroy(t)}}),t.target){var l=(0,r.pI)(t.target);t.hydrate?this._fragment.l(l):this._fragment.c(),l.forEach(r.r2),this._mount(t.target,t.anchor),(0,r.yl)(this)}}(0,r.f0)($.prototype,r.uS);const I=$},2954:(t,e,o)=>{o.d(e,{_v:()=>s});var r=o(385),n=o(4886);async function s(t,e,o=80){let s=`${(0,n.E)(t)}/api/v1/follow_requests`;return s+="?"+(0,r.pe)({limit:o}),(0,r.U2)(s,(0,n.I)(e),{timeout:r.EH})}}}]);
//# sourceMappingURL=1216.5245c32c4285ce601546.requests.js.map