Ipc={f:{},fin(e,t){this.f[e](t,e),delete this.f[e]},dl(e,t,n,s){if("string"==typeof e)console.log("dl:"+JSON.stringify([e,t,n])),this.f[t]=s;else{let o=URL.createObjectURL(e);$M.openURL(o,0,n+t),this.f[t]=e=>{URL.revokeObjectURL(o),s(e)}}},zip(e,t,n){let s=-1;for(;++s<10;)if(!this.f[s]){this.f[s]=n;break}console.log(`${t?"zp":"uz"}:${s}${e}`)},close(e=1){return this.beforeClose?.(),e||this.closeMsg?UI.confirm(this.closeMsg||"确认要退出？",1).then(e=>{e.i||console.log("close")}):console.log("close"),0},cache(e){this.f.cache=e,console.log("cache")}};{let e=Array.prototype;e.for=function(e){for(let t=0,n=this.length;t<n;t++)e(this[t],t)},e.forv=function(e){for(let t=this.length;t--;)e(this[t])},e.bIns=function(e){let t=0,n=this.length;for(;t<n;){let s=t+n>>1;if(e===this[s])return;e>this[s]?t=s+1:n=s}this.splice(t,0,e)},e.at=function(e){return this[this.length+e]};let n=HTMLElement.prototype;n.ap=function(...e){return e.for(e=>this.append(e)),e[0]},n._c=function(...e){return e.for(e=>this.append(e)),this},n.tx=function(...e){let n="";for(t of e)n+=i18n(t);return this.innerText=n,this},n.hC=function(e){return this.classList.contains(e)},n.aC=function(e){this.classList.add(e)},n.rC=function(e){this.classList.remove(e)},n.pS=function(e=1){let t=this;for(;e--;)t=t.previousSibling;return t},n.nS=function(e=1){let t=this;for(;e--;)t=t.nextSibling;return t},n._h=function(){this.style.display="none"},n._s=function(){this.style.display=""},Object.defineProperties(n,{ch:{get(){return this.children}},pN:{get(){return this.parentNode}}})}const doc=document,$=e=>doc.getElementById(e),$c=(e,t=doc)=>[...t.getElementsByClassName(e)],$t=(e,t=doc)=>[...t.getElementsByTagName(e)],El=(e,t,n)=>{let s=doc.createElement(e);return t&&(s.className=t),n&&Object.assign(s,n),s},css=(e,t,n=-1,s)=>{if(void 0!==e.length)for(let o=e.length;o--;)Object.assign(e[o].style,o===n?s:t);else Object.assign(e.style,t)},ac=(e,t="")=>css(e,{color:t,pointerEvents:""}),dac=(e,t="#aaa")=>css(e,{color:t,pointerEvents:"none"});doc.fonts.ready.then(()=>{return css((e="wrap",doc.getElementById(e)),{opacity:1,pointerEvents:"auto"});var e});const $M={b2u6:e=>e>64&&e<91?e-65:e>96&&e<123?e-71:e>47&&e<58?e+4:43===e?62:47===e?63:0,b2u8(e,t){let n=e.replace(/[^A-Za-z0-9\+\/]/g,""),s=n.length,o=3*s+1>>>2,r=new Uint8Array(o);for(let e,t,i=0,l=0,a=0;a<s;a++)if(t=3&a,i|=this.b2u6(n.charCodeAt(a))<<18-6*t,3===t||s-a==1){for(e=0;e<3&&l<o;e++,l++)r[l]=i>>>(16>>>e&24)&255;i=0}return r},b2b(e){return new Blob([this.b2u8(e)])},u2b(e){return new Blob([this.b2u8(e.split(",")[1])],{type:e.split(";")[0].slice(5)})},read:(e,t="DataURL")=>new Promise((n,s)=>{let o=new FileReader;o["readAs"+t](e),o.onload=()=>n(o.result),o.onerror=s}),openURL(e,t,n){let s=doc.body.ap(El("a"));s.href=e,s._h(),t&&(s.target="_blank"),n&&(s.download=n),s.click(),s.remove()},xhr:(e,t,n,s=null,o=1e4)=>new Promise((r,i)=>{let l=new XMLHttpRequest;n&&(l.responseType=n),l.open(e,t),"POST"===e&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),l.timeout=o,l.onload=function(){this.status>399?i(this):r(this)},l.onerror=l.ontimeout=()=>i(l),l.send(s)})};Math.mM=function(e,t,n){return this.max(t,this.min(n,e))},Date.pad=e=>(e<10?"0":"")+e,Date.cD=e=>`${e.getFullYear()}-${Date.pad(e.getMonth()+1)}-${Date.pad(e.getDate())} ${Date.pad(e.getHours())}:${Date.pad(e.getMinutes())}`,Date.cT=e=>`${Date.pad(e/3600<<0)}:${Date.pad((e/60<<0)%60)}:${Date.pad(e%60)}`;const $S={get(e,t=!0){let n=(t?localStorage:sessionStorage).getItem(e);return"0"===n||"1"===n?n<<=0:"undefined"===n?n=void 0:"null"===n&&(n=null),n},set(e,t,n=!0){"boolean"==typeof t&&(t<<=0),(n?localStorage:sessionStorage).setItem(e,t)},rm(e,t=!0){(t?localStorage:sessionStorage).removeItem(e)},sget(e){return this.get(e,0)},sset(e,t){return this.set(e,t,0)},srm(e){return this.rm(e,0)}};