"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[8547],{5246:(t,e,s)=>{s.r(e),s.d(e,{default:()=>_});var a=s(4178),i=s(3582),h=s(5482),o=s(4358),r=s(9065),c=s(6288),l=s(2771);var n={show:r.$,close:l.x,onPostedStatus(t){t===this.get().realm&&this.close()},onShow(){(0,o.j)("resizeComposeInput",this.get().realm)}};function d(){(0,o.on)("postedStatus",this,this.onPostedStatus),c.U.call(this)}function u(t){var e,s,o,r,c,l;if((0,a.S1)(this,t),this._state=(0,a.f0)({title:void 0,realm:"dialog"},t.data),this._intro=!0,this._fragment=(e=this,s=this._state,o={realm:s.realm,autoFocus:!0,dialogId:s.id},r=new h.default({root:e.root,store:e.store,data:o}),c={id:s.id,label:s.label,title:s.title,background:"var(--main-bg)"},(l=new i.Z({root:e.root,store:e.store,slots:{default:(0,a.xJ)()},data:c})).on("show",(function(t){e.onShow()})),{c(){r._fragment.c(),l._fragment.c()},l(t){r._fragment.l(t),l._fragment.l(t)},m(t,e){r._mount(l._slotted.default,null),l._mount(t,e)},p(t,e){var s={};t.realm&&(s.realm=e.realm),t.id&&(s.dialogId=e.id),r._set(s);var a={};t.id&&(a.id=e.id),t.label&&(a.label=e.label),t.title&&(a.title=e.title),l._set(a)},d(t){r.destroy(),l.destroy(t)}}),this.root._oncreate.push((()=>{d.call(this),this.fire("update",{changed:(0,a.lZ)({},this._state),current:this._state})})),t.target){var n=(0,a.pI)(t.target);t.hydrate?this._fragment.l(n):this._fragment.c(),n.forEach(a.r2),this._mount(t.target,t.anchor),(0,a.yl)(this)}}(0,a.f0)(u.prototype,a.uS),(0,a.f0)(u.prototype,n);const f=u;var m=s(3634);function _(){return(0,m.v)(f,{label:"Compose post"})}},4698:(t,e,s)=>{s.d(e,{c:()=>h});var a=s(9749);const{EventEmitter:i}=a;class h extends i{constructor(t={}){if(super(),!(t.maxSize&&t.maxSize>0))throw new TypeError("`maxSize` must be a number greater than 0");this.maxSize=t.maxSize,this.cache=new Map,this.oldCache=new Map,this._size=0}_set(t,e){if(this.cache.set(t,e),this._size++,this._size>=this.maxSize){if(this._size=0,this.listenerCount("evict"))for(const t of this.oldCache.keys())this.cache.has(t)||this.emit("evict",this.oldCache.get(t),t);this.oldCache=this.cache,this.cache=new Map}}get(t){if(this.cache.has(t))return this.cache.get(t);if(this.oldCache.has(t)){const e=this.oldCache.get(t);return this.oldCache.delete(t),this._set(t,e),e}}set(t,e){return this.cache.has(t)?this.cache.set(t,e):this._set(t,e),this}has(t){return this.cache.has(t)||this.oldCache.has(t)}delete(t){const e=this.cache.delete(t);return e&&this._size--,this.oldCache.delete(t)||e}clear(){this.cache.clear(),this.oldCache.clear(),this._size=0}getAllKeys(){const t=new Set;for(const e of this.cache.keys())t.add(e);for(const e of this.oldCache.keys())t.add(e);return t}}}}]);
//# sourceMappingURL=8547.e629c699525481e3e1f7.8547.js.map