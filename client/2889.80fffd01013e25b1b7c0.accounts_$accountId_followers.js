"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[2889],{5642:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var o=r(4178),n=r(2192),a=r(1728),s=r(6180),c=r(8309),i=r(5524),u=r(1932);function h(t){var e,r,n,a,s,h;if((0,o.S1)(this,t),this.store=i.h,this._state=(0,o.f0)(this.store._init(["currentInstance","accessToken"]),t.data),this.store._add(this,["currentInstance","accessToken"]),this._recompute({params:1,$currentInstance:1,$accessToken:1,accountId:1},this._state),this._intro=!0,this._handlers.destroy=[o.iT],this._fragment=(e=this,r=this._state,a=new u.Z({root:e.root,store:e.store,data:{title:"Followers"}}),s={accountsFetcher:r.accountsFetcher},h=new c.Z({root:e.root,store:e.store,data:s}),{c(){a._fragment.c(),n=(0,o.rw)("\n"),h._fragment.c()},l(t){a._fragment.l(t),n=(0,o.M4)(t,"\n"),h._fragment.l(t)},m(t,e){a._mount(t,e),(0,o.$T)(t,n,e),h._mount(t,e)},p(t,e){var r={};t.accountsFetcher&&(r.accountsFetcher=e.accountsFetcher),h._set(r)},d(t){a.destroy(t),t&&(0,o.r2)(n),h.destroy(t)}}),t.target){var f=(0,o.pI)(t.target);t.hydrate?this._fragment.l(f):this._fragment.c(),f.forEach(o.r2),this._mount(t.target,t.anchor),(0,o.yl)(this)}}(0,o.f0)(h.prototype,o.uS),h.prototype._recompute=function(t,e){t.params&&this._differs(e.accountId,e.accountId=function({params:t}){return t.accountId}(e))&&(t.accountId=!0),(t.$currentInstance||t.$accessToken||t.accountId)&&this._differs(e.accountsFetcher,e.accountsFetcher=function({$currentInstance:t,$accessToken:e,accountId:r}){return()=>(0,s.E)(t,e,r)}(e))&&(t.accountsFetcher=!0)};const f=h;function m(t){var e,r,s,c,i,u,h;if((0,o.S1)(this,t),this._state=(0,o.f0)((0,o.f0)(this.store._init(["currentAccountProfile"]),{pageComponent:f}),t.data),this.store._add(this,["currentAccountProfile"]),this._recompute({$currentAccountProfile:1},this._state),this._intro=!0,this._handlers.destroy=[o.iT],this._fragment=(e=this,r=this._state,c={name:r.profileName+"Followers"},i=new n.Z({root:e.root,store:e.store,data:c}),u={pageComponent:r.pageComponent,params:r.params},h=new a.Z({root:e.root,store:e.store,data:u}),{c(){i._fragment.c(),s=(0,o.rw)("\n\n  "),h._fragment.c()},l(t){i._fragment.l(t),s=(0,o.M4)(t,"\n\n  "),h._fragment.l(t)},m(t,e){i._mount(t,e),(0,o.$T)(t,s,e),h._mount(t,e)},p(t,e){var r={};t.profileName&&(r.name=e.profileName+"Followers"),i._set(r);var o={};t.pageComponent&&(o.pageComponent=e.pageComponent),t.params&&(o.params=e.params),h._set(o)},d(t){i.destroy(t),t&&(0,o.r2)(s),h.destroy(t)}}),t.target){var m=(0,o.pI)(t.target);t.hydrate?this._fragment.l(m):this._fragment.c(),m.forEach(o.r2),this._mount(t.target,t.anchor),(0,o.yl)(this)}}(0,o.f0)(m.prototype,o.uS),m.prototype._recompute=function(t,e){t.$currentAccountProfile&&this._differs(e.profileName,e.profileName=function({$currentAccountProfile:t}){return t&&"@"+t.acct+" · "||""}(e))&&(t.profileName=!0)};const p=m},6180:(t,e,r)=>{r.d(e,{E:()=>s,o:()=>a});var o=r(385),n=r(4886);async function a(t,e,r,a=80){let s=`${(0,n.E)(t)}/api/v1/accounts/${r}/following`;return s+="?"+(0,o.pe)({limit:a}),(0,o.U2)(s,(0,n.I)(e),{timeout:o.EH})}async function s(t,e,r,a=80){let s=`${(0,n.E)(t)}/api/v1/accounts/${r}/followers`;return s+="?"+(0,o.pe)({limit:a}),(0,o.U2)(s,(0,n.I)(e),{timeout:o.EH})}}}]);
//# sourceMappingURL=2889.80fffd01013e25b1b7c0.accounts_$accountId_followers.js.map