(this.webpackChunk=this.webpackChunk||[]).push([[9240],{8085:function(t,e,n){var r,o,s,i;s=function(){var t=/^;\s*([^"=]+)=(?:"([^"]+)"|([^";,]+)(?:[;,]|$))/,e=/^<([^>]*)>/,n=/^\s*,\s*/;return{parse:function(r,o){for(var s,i,h,c=o&&o.extended||!1,l=[];r&&(r=r.trim(),i=e.exec(r));){for(var u={link:i[1]},a=(r=r.slice(i[0].length)).match(n);r&&(!a||a.index>0)&&(s=t.exec(r));)a=(r=r.slice(s[0].length)).match(n),"rel"===s[1]||"rev"===s[1]?(h=(s[2]||s[3]).split(/\s+/),u[s[1]]=h):u[s[1]]=s[2]||s[3];l.push(u),r=r.replace(n,"")}return c?l:l.reduce((function(t,e){return e.rel&&e.rel.forEach((function(n){t[n]=e.link})),t}),{})},stringify:function(t){var e=Object.keys(t).reduce((function(e,n){return e[t[n]]=e[t[n]]||[],e[t[n]].push(n),e}),{});return Object.keys(e).reduce((function(t,n){return t.concat("<"+n+'>; rel="'+e[n].join(" ")+'"')}),[]).join(", ")}}},i=this,t.exports?t.exports=s():"function"==typeof i.define&&i.define.amd?void 0===(o="function"==typeof(r=s)?r.call(e,n,e,t):r)||(t.exports=o):i.li=s()},4762:()=>{"use strict";const t="http://www.w3.org/2000/svg";class e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const e=document.createElement("style");e.textContent=":host{display:flex}";const n=document.createElement("style"),r=document.createElement("slot");r.name="extra";const o=document.createElementNS(t,"svg");this.shadowRoot.textContent="",this.shadowRoot.append(e,n,r,o);const s=()=>{const e=[];let r=0;for(const t of this.children)"extra"!==t.slot&&(t.slot=""+r++,e.push({width:parseInt(""+t.getAttribute("data-width")),height:parseInt(""+t.getAttribute("data-height"))}));let s,i,h,c=[],l=[];let u=512;const a=u/2;if(!u)throw new Error("Invalid container width");let d,f=[],p=[],m=0;for(r=0,s=e.length;r<s;r++)d=e[r].width/e[r].height,f.push(d),p.push(Math.round(100*d));let g=0;for(r=0,s=f.length;r<s;r++)g+=f[r]*a;let w=Math.round(g/u);if(w<1){let t,n=0;h=e.length;let o=0;for(r=0;r<h;r++)t=Math.round(a*f[r])-0*(h-1)/h,c.push({y:0,x:o+n,width:t,height:a}),n+=t,r!==s-1&&(l.push([[n,0],[n,a]]),n+=0);m=a,u=n}else{let t,e=(()=>{{let t,e,n,r,o,s,i,h,c,l,u,a,d,f,m,g=[],x=w;if(r=p.length,x<=0)return[];if(x>r)return p.map((t=>[t]));{let t,e;for(e=[],t=0;0<=r?t<r:t>r;0<=r?++t:--t){let t,n;for(n=[],i=t=0;0<=x?t<x:t>x;i=0<=x?++t:--t)n.push(0);e.push(n)}s=e}{let t,e,n;for(n=[],t=0,e=r-1;0<=e?t<e:t>e;0<=e?++t:--t){let t,e,r;for(r=[],i=t=0,e=x-1;0<=e?t<e:t>e;i=0<=e?++t:--t)r.push(0);n.push(r)}o=n}for(t=h=0;0<=r?h<r:h>r;t=0<=r?++h:--h)s[t][0]=p[t]+(t?s[t-1][0]:0);for(e=c=0;0<=x?c<x:c>x;e=0<=x?++c:--c)s[0][e]=p[0];for(t=l=1;1<=r?l<r:l>r;t=1<=r?++l:--l)for(e=u=1;1<=x?u<x:u>x;e=1<=x?++u:--u){for(n=[],i=a=0;0<=t?a<t:a>t;i=0<=t?++a:--a)n.push([Math.max(s[i][e-1],s[t][0]-s[i][0]),i]);let r=0,h=0;for(a=0,d=n.length;a<d;a++)(0===a||n[a][0]<r)&&(r=n[a][0],h=a);n=n[h],s[t][e]=n[0],o[t-1][e-1]=n[1]}for(r-=1,x-=2;x>=0;){let e,n,s,i;for(i=[],t=e=n=o[r-1][x]+1,s=r+1;n<=s?e<s:e>s;t=n<=s?++e:--e)i.push(p[t]);if(g.unshift(i),r=o[r-1][x],x-=1,0===r)break}for(m=[],t=a=0,f=r+1;0<=f?a<f:a>f;t=0<=f?++a:--a)m.push(p[t]);return g.unshift(m),g}})(),n=0,r=0;for(let o=0;o<e.length;o++){const s=e[o];let a=n,d=0;for(let t=0,e=s.length;t<e;t++)d+=f[a+t],n++;r=0,i=Math.round(u/d),h=s.length;for(let e=0;e<h;e++)t=Math.round((u-0*(h-1))/d*f[a+e]),c.push({y:m,x:r,width:t,height:i}),r+=t,e!==h-1&&(r+=0,l.push([[r,m],[r,m+i]]));m+=i,o!==e.length-1&&(m+=0,l.push([[0,m],[u,m]]))}}n.textContent=`:host{aspect-ratio:${u}/${m}}`,o.setAttribute("viewBox",`0 0 ${u} ${m}`),o.textContent="";const x=document.createElementNS(t,"path");x.setAttribute("d",l.map((t=>`M ${t[0].join(",")} L ${t[1].join(",")}`)).join(" ")),x.setAttribute("style","stroke:#000;stroke-width:4px;vector-effect:non-scaling-stroke");const b=document.createElementNS(t,"mask"),k=document.createElementNS(t,"rect");k.setAttribute("style","x:-1%;y:-1%;width:102%;height:102%;fill:#fff"),b.setAttribute("id","lines"),b.append(k,x);const y=document.createElementNS(t,"g");y.append(...c.map(((e,n)=>{const r=document.createElementNS(t,"foreignObject");r.setAttribute("x",""+e.x),r.setAttribute("y",""+e.y),r.setAttribute("width",""+e.width),r.setAttribute("height",""+e.height);const o=document.createElement("slot");return o.name=""+n,r.append(o),r}))),y.setAttribute("mask","url(#lines)"),o.append(b,y)};s(),new MutationObserver(s).observe(this,{childList:!0,attributes:!0})}}customElements.define("easrng-image-grid",e)}}]);
//# sourceMappingURL=9240.5ac02c74dee3a618cf12.9240.js.map