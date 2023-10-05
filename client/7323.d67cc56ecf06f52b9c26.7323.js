"use strict";(this.webpackChunk=this.webpackChunk||[]).push([[7323],{1505:(t,e,n)=>{n.d(e,{I:()=>f,b:()=>g});var i=n(8183),o=n(5524),s=n(4285),a=n(1162),r=n(6637),c=n(9970),l=n(4034);function u(t,e,n){const i=function(t,e){const n=o.h.getForTimeline(t,e,"timelineItemSummaries")||[];return new Set(n.map((t=>t.id)))}(t,e);return n.filter((t=>!i.has(t.id)))}async function h(t,e,n){if(!(n=u(t,e,n)).length)return;await a.F.insertTimelineItems(t,e,n);const i=o.h.getForTimeline(t,e,"timelineItemSummariesToAdd")||[];JSON.parse(JSON.stringify(i)),JSON.parse(JSON.stringify(n.map(l.o))),JSON.parse(JSON.stringify((0,r.z)(i,n.map((e=>(0,l.o)(e,t))))));const c=(0,s.mN)((0,r.z)(i,n.map((e=>(0,l.o)(e,t)))),(t=>t.id));(0,s.Xy)(i,c)||(c.length,i.length,o.h.setForTimeline(t,e,{timelineItemSummariesToAdd:c}))}function m(t,e,n){const i=new Set(n.map((t=>t.id))),o=new Set(t.map((t=>t.id))),s=e.split("/")[1],a=t.findIndex((t=>t.id===s));return e=>t.findIndex((t=>t.id===e.in_reply_to_id))>=a&&!o.has(e.id)&&!i.has(e.id)}async function d(t,e){if(!e.length)return;const n=o.h.getThreads(t),i=Object.keys(n);for(const a of i){const i=n[a],c=o.h.getForTimeline(t,a,"timelineItemSummariesToAdd")||[],u=e.filter(m(i,a,c));if(!u.length)continue;const h=(0,s.mN)((0,r.z)(c,u.map((e=>(0,l.o)(e,t)))),(t=>t.id));(0,s.Xy)(c,h)||(h.length,c.length,o.h.setForTimeline(t,a,{timelineItemSummariesToAdd:h}))}}function p(t,e){(0,c.F)((()=>{!async function(t,e){(0,i.B)("processFreshUpdates");const n=o.h.getForTimeline(t,e,"freshUpdates");if(n&&n.length){const i=n.slice();o.h.setForTimeline(t,e,{freshUpdates:[]}),await Promise.all([h(t,e,i),d(t,i.filter((t=>t.in_reply_to_id)))])}(0,i.s)("processFreshUpdates")}(t,e)}))}function f(t,e,n){g(t,e,[n])}function g(t,e,n){Date.now();let i=o.h.getForTimeline(t,e,"freshUpdates")||[];i=(0,r.z)(i,n),i=(0,s.mN)(i,(t=>t.id)),o.h.setForTimeline(t,e,{freshUpdates:i}),p(t,e)}},7376:(t,e,n)=>{n.d(e,{Q0:()=>m,ic:()=>h,Mj:()=>u});var i=n(1370),o=n(1162),s=n(4886),a=n(385);var r=n(5524),c=n(4285);async function l(t,e){await e((()=>{const{loggedInInstances:e}=r.h.get(),n=e[t].access_token;return function(t,e){const n=`${(0,s.E)(t)}/api/v1/custom_emojis`;return(0,a.U2)(n,(0,s.I)(e),{timeout:a.EH})}(t,n)}),(()=>o.F.getCustomEmoji(t)),(e=>o.F.setCustomEmoji(t,e)),(e=>{const{customEmoji:n}=r.h.get();(0,c.Xy)(n[t],e)||(n[t]=e,r.h.set({customEmoji:n}))}))}async function u(t){await l(t,i.u)}async function h(t){await l(t,i.o)}function m(t,e){const n=e.unicode||`:${e.name}:`,{composeSelectionStart:i}=r.h.get(),o=i||0,s=r.h.getComposeData(t,"text")||"",a=`${s.substring(0,o)}${n} ${s.substring(o)}`;r.h.setComposeData(t,{text:a})}},9603:(t,e,n)=>{n.d(e,{h:()=>u,m:()=>l});var i=n(5524),o=n(5358),s=n(7031),a=n(9970),r=n(6633),c=n(1162);async function l(t,e){const{currentInstance:n,accessToken:l,maxStatusMediaAttachments:u}=i.h.get();i.h.set({uploadingMedia:!0});try{let s=i.h.getComposeData(t,"media")||[];if(s.length===u)throw new Error("Only "+u+" media max are allowed");const r=await(0,o.$)(n,l,e);if(s=i.h.getComposeData(t,"media")||[],s.length===u)throw new Error("Only "+u+" media max are allowed");await c.F.setCachedMediaFile(r.id,e),s.push({data:r,file:{name:e.name},description:""}),i.h.setComposeData(t,{media:s}),(0,a.F)((()=>i.h.save()))}catch(h){console.error(h),s.A.say((0,r.A)(["Failed to upload media: ",["error"]],{error:h.message||""}))}finally{i.h.set({uploadingMedia:!1})}}function u(t,e){const n=i.h.getComposeData(t,"media");if(n.splice(e,1),i.h.setComposeData(t,{media:n}),!n.length){const e=i.h.getComposeData(t,"contentWarningShown"),n=i.h.getComposeData(t,"contentWarning");i.h.setComposeData(t,{sensitive:e&&n})}(0,a.F)((()=>i.h.save()))}},5358:(t,e,n)=>{n.d(e,{$:()=>r,_:()=>c});var i=n(4886),o=n(385);async function s(t,e,n,s,a){const r=new FormData;r.append("file",s),a&&r.append("description",a);const c=`${(0,i.E)(e)}/api/${t}/media`;return(0,o.v_)(c,r,(0,i.I)(n),{timeout:o.HZ})}async function a(t,e,n,s,a,r){const c=`${(0,i.E)(e)}/api/${t}/media/${s}`;return(0,o.gz)(c,{description:a,focus:r&&r.join(",")},(0,i.I)(n),{timeout:o.$Q})}async function r(t,e,n,i){try{return await s("v2",t,e,n,i)}catch(o){if(o&&404===o.status)return s("v1",t,e,n,i);throw o}}async function c(t,e,n,i,o){try{return await a("v2",t,e,n,i,o)}catch(s){if(s&&404===s.status)return a("v1",t,e,n,i,o);throw s}}},6637:(t,e,n)=>{function i(t,e,n){let i=0,o=0;const s=[];for(;i<t.length||o<e.length;){if(i===t.length){s.push(e[o]),o++;continue}if(o===e.length){s.push(t[i]),i++;continue}const a=t[i],r=e[o],c=n(r,a);0===c?(s.push(a),o++,i++):c>0?(s.push(r),o++):(s.push(a),i++)}return s}function o(){let t=[];for(let e=0,n=arguments.length;e<n;e++){const n=arguments[e];Array.isArray(n)?t=t.concat(arguments[e]):t.push(arguments[e])}return t}n.d(e,{e:()=>i,z:()=>o})},2828:(t,e,n)=>{let i;n.d(e,{b:()=>s});const o=t=>{const e=t.status||t,n=e.reblog||e;i=i||new DOMParser;const o=[n.spoiler_text||"",n.content].concat(n.poll&&n.poll.options?n.poll.options.map((t=>t.title)):[]).join("\n\n").replace(/<br\s*\/?>/g,"\n").replace(/<\/p><p>/g,"\n\n");return i.parseFromString(o,"text/html").documentElement.textContent};function s(t,e){if(!e||!Object.keys(e).length)return;const n=o(t),i=Object.entries(e).filter((([t,e])=>e.test(n))).map((([t])=>t));return i.length?i:void 0}},1370:(t,e,n)=>{async function i(t,e,n,i){const o=t();let s;try{s=await e()}catch(a){console.error("ignored DB error",a)}finally{s&&i(s);const t=o.then((t=>{n(t),i(t)}));s||await t}}async function o(t,e,n,i){let o;try{o=await e()}catch(s){console.error("ignored DB error",s)}if(o)i(o);else{const e=await t();n(e),i(e)}}n.d(e,{o:()=>o,u:()=>i})},4034:(t,e,n)=>{n.d(e,{o:()=>a});var i=n(2828),o=n(5524);class s{constructor(t,e){this.id=t.id,this.accountId=t.account.id,this.replyId=t.in_reply_to_id||void 0,this.reblogId=t.reblog&&t.reblog.id||void 0,this.quoteId=t.quote_id||void 0,this.type=t.type||void 0;const{unexpiredInstanceFilterRegexes:n}=o.h.get(),s=n[e];this.filterContexts=(0,i.b)(t,s)}}function a(t,e){return new s(t,e)}}}]);
//# sourceMappingURL=7323.d67cc56ecf06f52b9c26.7323.js.map