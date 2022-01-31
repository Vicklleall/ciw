const UI={bg:doc.body.ap(El("div","msg-bg",{n:0})),menu:doc.body.ap(El("div",0,{id:"menu"})),tip:doc.body.ap(El("div",0,{id:"mt"})),showMenu(){css(this.menu,{opacity:1,pointerEvents:"auto"}),ac(this.menu.ch,""),$("setting")._h(),this.bg.n&&$c("msg",this.bg).for(t=>{t.onMenu&&(dac(UI.menu.ch,""),this.menu.ap(t).style.animation="none")}),this.menu.on=!0},hideMenu(){css(this.menu,{opacity:0,pointerEvents:""}),css($("setting"),{opacity:0,transform:""}),this.bg.n&&$c("msg",this.menu).for(t=>{t.onMenu&&(this.bg.ap(t).style.animation="none")}),this.menu.on=!1},showTips(t,e,i){e&&(this.tip.style.transform=`translate(${e}px,${i}px)`),this.tip.tx(t).style.display="block"},bindCat(t){$c("setcat",t).for((e,i)=>{e.i=i,e.p=t,e.onclick=function(){css($c("setcat",this.p),{background:"",color:""},this.i,{background:"var(--bgl)",color:"var(--cs)"});let t=$c("setpage",this.p);css(t,{display:""},this.i,{display:"block"}),t[this.i].set(this.p._tab),this.p._tab=this}})},M:class{constructor(t,e,i,s="#0000"){css(UI.bg,{backgroundColor:s,opacity:1,pointerEvents:"auto"}),i=UI.menu.on&&i,dac(i?UI.menu.ch:UI.bg.ch,""),this.box=(i?UI.menu:UI.bg).ap(El("div","msg")),this.box.onMenu=i,t&&(this.box.style.width=t+"px"),e&&(this.box.style.height=e+"px"),UI.bg.n++,this.r={}}t(...t){return t.for(t=>this.box.ap(El("p").tx(t))),this}b(...t){let e=this.box.ap(El("div","a-cen"));return t.for((t,i)=>{e.ap(El("div","btn").tx(t)).onclick=()=>{this.r.i=i,this.r.s=t,this.ok()}}),this}h(t){return this.box.ap(El("h1","kid").tx(t)),this}a(t){return this.box.ap(El("div","msg-area",{innerHTML:t})),this}ac(...t){return this.box.ap(El("div","msg-area")._c(...t)),this}ip(t,e){let i=this.box.ap(El("input"));return i.oninput=()=>this.r.v=i.value,(i.value=t)&&i.oninput(),e&&(i.type=e),this}cb(){return this.box.ap(El("div","msg-cb")).onclick=()=>this.close(),this}ap(t){return this.box.ap(t),this}then(t){this.fin=t}ok(){this.fin&&this.fin(this.r),this.hold?$c("btn",this.box).for(t=>t.aC("gray")):this.close()}close(){if(css(this.box,{animation:"msg-close 0.4s forwards",animationPlayState:"running",pointerEvents:"none"}),--UI.bg.n||css(UI.bg,{opacity:0,pointerEvents:"none"}),setTimeout(this.des,400,this),this.box.pN===UI.menu){let t=this.box.pS();t.onMenu?ac(t):ac(UI.menu.ch)}else{let t=this.box.pS();t&&ac(t)}}des(t){t.box.remove()}},$a:(t,e)=>new UI.M(0,0,e).t(t).b("0{5}"),confirm:(t,e,i="1{5}",s="1{6}")=>new UI.M(0,0,e).t(t).b(i,s),prompt:(t,e="")=>(new UI.M).t(t).ip(e).b("0{5}","0{6}"),check:(t,e="0{5}")=>(new UI.M).t(t).ip("").b(e),ico:t=>`<svg><use href='#-${t}'></use></svg>`,p(t,e){let i=El("p");return i.innerHTML=t,e&&(i.style.margin=e),i},span(t,e,i){let s=El("span");return s.innerHTML=t," "===t.at(-1)&&(s.style.marginRight="16px"),e&&(s.style.color=e),i&&(s.style.fontSize=i+"px"),s},help(t,e){let i=El("span","help",{innerHTML:UI.ico("help")});return e&&(i.style.marginRight="16px"),i.h=t,i.onclick=function(t){t.stopPropagation(),App.help(this.h)},i},copy(t){let e=El("div","ib"),i=UI.span(UI.ico("copy")),s=UI.span("✓");return css(s,{padding:"2px",color:"var(--cs)"}),i.aC("username"),s._h(),e.ap(i,s).onclick=()=>navigator.clipboard.writeText(t).then(()=>{i._h(),s._s(),setTimeout((t,e)=>{t._s(),e._h()},1500,i,s)}),e},ipf:El("input",0,{type:"file",multiple:!1}),file:(t,e)=>new Promise((i,s)=>{UI.ipf.accept=t,UI.ipf.onchange=()=>$M.read(UI.ipf.files[0],"string"==typeof e?e:e(UI.ipf.files[0].name)).then(t=>i([t,UI.ipf.files[0].name])).catch(s),UI.ipf.value="",UI.ipf.click()}),on(t){return t.on=e=>(t.f=e,t),t},S(t,e=!1,i=!1){let s=El("div").tx(t),n=El("div",e?"sw on":"sw");return i&&(s.aC("ib"),s.style.marginRight="12px"),s.ap(n).onclick=t=>{s.v=!s.v,s.v?n.aC("on"):n.rC("on"),t&&s.f?.(0|s.v,s)},s.set=t=>{!t!=!s.v&&n.onclick()},s.v=e,this.on(s)},B(t,e){let i=El("div",e?"btn s":"btn").tx(t);return i.set=t=>t?i.rC("gray"):i.aC("gray"),i.onclick=()=>{i.hC("gray")||i.f(i)},this.on(i)},B2(t){let e=El("div","btn2");return e.innerHTML=t,e.onclick=()=>e.f(e),this.on(e)},C(...t){let e=El("div").tx(t[0]),i=e.ap(El("div","chs"));e.v=0,e.m=t[1],e.set=(s,n)=>{for(let n=2;n<t.length;n++)!(s&1<<n-2)!=!(e.v&1<<n-2)&&i.ch[n-2].onclick();n&&e.f(e.v,n)};for(let s=2;s<t.length;s++){let n=El("span").tx(t[s]);i.ap(n).onclick=t=>{if(!e.m&&e.v==1<<s-2)return;e.m?e.v^=1<<s-2:(e.v=1<<s-2,css(i.ch,{color:"",background:""}));let o=n.style.color;css(n,{color:o?"":"var(--cs)",background:o?"":"var(--bgl)"}),t&&e.f(e.v,t)}}return this.on(e)},mbS(t){let e=t.lastChild,i=t.pN;e._s(),e.B=i.B+e.offsetHeight,e.H=i.H,css(e,e.B>i.H?{top:"unset",bottom:0}:{top:"",bottom:""}),i.R?(css(e,{left:"unset",right:"100%"}),e.R=i.R):css(e,{left:"",right:""})},option(t,e,i){let s=El("div","mb");return s._h(),s.w=0,s.hide=function(){this._h(),this.hC("T")?this.remove():this.pN.hC("op")&&this.pN.pN.hide()},i.for((i,n)=>{let o=""===e?n:e+"."+(n+1),a=s.ap(El("div","op"));if(Array.isArray(i)){let[e,n]=i[0].split("#");n?a.innerHTML=UI.ico(n)+" "+e:a.tx(e),a.aC("arr"),"function"==typeof i[1]?(a.ap(El("div","mb")).hide=s.hide,a.f=i[1],a.j=o,a.p=t,a.onmouseover=function(e){if(e.target!==this)return;let i=this.ch[0],s=this.f();i.innerHTML="",s.for((e,s)=>{let n=e.split(":"),o=i.ap(El("div","op")).tx(n[0]);o.v=n[1]||this.j+"."+s,o.onclick=()=>{this.p.v=o.v,this.p.firstChild.tx(o.innerText),this.pN.hide(),this.p.f(t.v)}}),i._s()}):(s.w=Math.max(s.w,a.ap(UI.option(t,o,i.slice(1))).w),a.onmouseover=function(t){t.target===this&&UI.mbS(this)})}else{let[e,n]=i.split(":");e=e.split("#"),e[1]?a.innerHTML=UI.ico(e[1])+" "+e[0]:a.tx(e[0]),e=e[0],a.v=n||o,a.onclick=()=>{t.v=a.v,t.firstChild?.tx(a.innerText),s.hide(),t.f?.(t.v,a.innerText,a)}}}),s.w+=64,s},mbO(t,e){let i=e.pN,s=e.offsetLeft,n=e.offsetTop;for(;i!==doc.body&&!i.hC("page")&&!i.hC("pointer");){if(s+=i.offsetLeft,n+=i.offsetTop,i.hC("setpage")||i.hC("msg-area")){i=i.pN;break}i=i.pN}let o=i.scrollWidth-8,a=i.scrollHeight-8;i.ap(t)._s();let l=s+t.offsetWidth,r=n+t.offsetHeight;if(l>o){let i=e.offsetWidth-t.offsetWidth;s+=i,l+=i}t.R=l+t.w-64>o;let h=r>a?6-t.offsetHeight:e.offsetHeight;n+=h,r+=h,t.H=a,t.B=r,css(t,{top:n+"px",left:s+"px"})},mb(t,e,i){let s=UI.option(t,"",e);return s.aC("T"),i&&css($c("op",s),{minWidth:i+"px"}),s.onmouseleave=s.hide,s.open=()=>{s.style.display?UI.mbO(s,t):s.hide()},s},O(...t){let e=El("div","sl"),i=UI.mb(e,t);return e.ap(El("span")).tx("0{2l}"),e.v=0,e.m=i,e.set=(t=0)=>{let s=Number(t),n=(i,s)=>{for(let o=0;o<i.length;o++){if(i[o].v==t)return void e.firstChild.tx(i[o].innerText);if(i[o].ch[0])if(i[o].f){let n=i[o].f();for(let i=0;i<n.length;i++){let[o,a]=n[i].split(":");if((a||s+"."+i)==t)return void e.firstChild.tx(o)}}else n(i[o].ch[0].ch,""===s?o:s+"."+o)}};e.v=isNaN(s)?t:s,n(i.ch,"")},e.onclick=()=>i.open(),e.onmouseleave=t=>{i.style.display||t.toElement?.hC("op")||i.hide()},this.on(e)},I(t,e,i){let s=El("div","ip").tx(t),n=s.ap(El("input"));return i&&(n.style.width=i+"px"),s.set=t=>s.v="number"===n.type?Number(n.value=t):n.value=t,"~"!==t&&"×"!==t||(s.style.marginLeft="-5px",n.style.marginLeft="1px"),e&&(n.s=1,Object.assign(n,e),n.m||n.M?(n.type="number",n.step=.01,n.sf=n.s<.1?2:n.s<1?1:0,n.onmouseout=()=>UI.tip._h(),n.onchange=function(){let t=Number(this.value);isNaN(t)||(void 0!==this.m&&t<this.m&&(t=this.m),void 0!==this.M&&t>this.M&&(t=this.M),t=Math.round(t/this.s)*this.s,this.value=t.toFixed(this.sf))},n.onmouseover=function(){let{left:t,top:e}=this.getBoundingClientRect();UI.showTips(this.m.toFixed(this.sf)+"~"+this.M.toFixed(this.sf),0|t,e-24|0)}):n.l&&(n.oninput=function(){this.value.length>this.l&&(this.value=this.value.slice(0,this.l))}),n.w&&(n.ww=0),s.v="number"===n.type?Number(n.value):n.value),n.onwheel=function(t){if(t.preventDefault(),this.w&&document.activeElement===this){let e=Math.floor((Number(this.value)+1e-5)/this.w);t.deltaY<0?++e:Math.abs(this.value-e*this.w)<1e-5&&--e;let i=e*this.w;if(i<this.m||i>this.M)return;this.value=i,clearTimeout(this.wt);let s=new Event("change");this.ww>0&&(s.sk=233),this.dispatchEvent(s),this.wt=setTimeout(t=>t.ww=0,this.ww=1e3,this)}},n.addEventListener("change",t=>s.f(s.v="number"===n.type?Number(n.value):n.value,t.sk)),this.on(s)},Bar(t=200,e=0,i=1,s=0,n){let o=El("div",s?"rg v":"rg"),a=o.ap(El("div","rgb"));return css(o,{[s?"height":"width"]:t+8+"px"}),a.onmousedown=t=>{a.d=!0,a.x=s?t.y-a.offsetTop:t.x-a.offsetLeft},o.onmousemove=e=>{if(a.d){let n=s?t-e.y+a.x:e.x-a.x;o.set(Math.mM(n/t,0,1),i),o.fin(o.v)}},o.onmouseleave=o.onmouseup=()=>{a.d&&(a.d=!1,o.f?.(o.v))},o.set=(e,i=1)=>{o.v=e,i&&(s?(a.style.top=(1-e)*t+"px",n&&(o.style.backgroundImage=`linear-gradient(0deg,${n} ${e*t}px,#0000 0)`)):(a.style.left=e*t+"px",n&&(o.style.backgroundImage=`linear-gradient(90deg,${n} ${e*t}px,#0000 0)`)))},o.set(e),o.in=t=>(o.fin=t,o),this.on(o)},R(t,e,i,s,n,o){let a=El("div").tx(t);a.m=e,a.M=i,a.r=i-e,a.d=s,a.v=s;let l=a.ap(UI.Bar(200,(s-e)/a.r,0,0,o)).in(t=>a.set(Math.round(t*a.r+a.m))).on(()=>a.f(a.v)),r=a.ap(El("input")),h=a.ap(El("div","reset",{innerHTML:UI.ico("undo")}));return n&&a.aC("ib"),r.value=s,h.onclick=()=>{a.v!=s&&(a.set(s),a.f(s))},a.set=(t=a.d)=>{t=""===t?a.d:Number(t),r.value=a.v=t,l.set((t-a.m)/a.r)},r.onchange=()=>{let t=Number(r.value);isNaN(t)||(a.set(Math.round(Math.mM(t,a.m,a.M))),a.f(a.v))},this.on(a)},ipc:doc.body.ap(El("input",0,{id:"UIipc",type:"color"})),Col(t,e){let i=El("div","ip").tx(t),s=i.ap(El("div","col"));return s.style.background=e||"#fff",i.c=t=>{if("#"===t[0])return t;let e=t.match(/\d+/g);return((e[0]<<16)+(e[1]<<8)+(0|e[2])).toString(16).padStart(7,"#000000")},s.onclick=t=>{css(UI.ipc,{left:`${t.x}px`,top:`${t.y}px`}),UI.ipc.onchange=()=>{let t=UI.ipc.value;s.style.background=t,i.f(t)},UI.ipc.value=i.c(s.style.background),setTimeout(()=>UI.ipc.click(),1)},i.set=t=>s.style.background=t,this.on(i)},P:(t,e,i,s)=>new Promise((n,o)=>{UI.file("image/*","DataURL").then(a=>{let l=new Image;l.onload=()=>{if(l.width<t)return UI.$a("0{2m}"+t),o();if(l.height<e)return UI.$a("0{2n}"+e),o();let a=l.width,r=l.height;for(;a>960||r>640;)a>>=1,r>>=1;let h=El("canvas","ab",{width:a,height:r}),p=El("canvas","ab",{width:t,height:e}),c=new UI.M(a+t+16,Math.max(r,e+100)+48).h(i).ap(h).ap(p).b("确定","取消");c.then(t=>{if(!t.i){let t,e=p.toDataURL("image/png");t=e.length>=10240?p.toDataURL("image/webp"):p.toDataURL("image/webp",1),n(t.length<e.length?t:e)}}),css(h,{left:"16px",top:"64px"}),css(p,{right:"16px",top:"64px"}),s&&(p.style.borderRadius="100%"),css(c.box.lastChild,{position:"absolute",left:a+16+"px",right:0,top:e+72+"px"});let u=h.getContext("2d"),d=p.getContext("2d");u.imageSmoothingQuality=d.imageSmoothingQuality="high",u.fillStyle="#000",u.fillRect(0,0,a,r),u.drawImage(l,0,0,a,r);let f=Math.min(a,r/e*t),m=Math.min(r,a/t*e),g=a-f>>1,v=r-m>>1,b=a-g-f,x=r-v-m,I=El("div","ab"),U=I.ap(El("div","ab"));c.ap(I),css(I,{left:"16px",top:"64px",width:a+"px",height:r+"px",overflow:"hidden"}),css(U,{left:g+"px",top:v+"px",right:b+"px",bottom:x+"px",border:"2px solid #fc0",outline:"960px solid #0007"}),U.L=g,U.T=v,U.R=b,U.B=x,U.mouse=function(t,e){let{left:i,top:s,right:n,bottom:o}=this.getBoundingClientRect(),a=t<i+16|(t>n-16)<<1|(e<s+16)<<2|(e>o-16)<<3,l="move";switch(a){case 5:case 10:l="nwse-resize";break;case 9:case 6:l="nesw-resize"}return this.style.cursor=l,a+1},U.draw=()=>d.drawImage(h,U.L,U.T,a-U.R-U.L,r-U.B-U.T,0,0,t,e),U.draw(),U.onmousedown=t=>U.drag=U.mouse(t.x,t.y),I.onmouseup=I.onmouseleave=()=>{U.drag=0,I.style.cursor="",U.draw()},I.onmousemove=i=>{if(U.drag&&1===i.buttons){let s=i.movementX,n=i.movementY,o=U.drag-1;switch(o){case 5:case 10:case 9:case 6:n=Math.abs(s)/t*e*(9===o||6===o?-Math.sign(s):Math.sign(s)),4&o?n<-U.T&&(n=-U.T):8&o&&n>U.B&&(n=U.B),s=Math.abs(n)/e*t*Math.sign(s),1&o?(s<-U.L&&(s=-U.L),U.L+=s):2&o&&(s>U.R&&(s=U.R),U.R-=s),a-U.R-U.L<t&&(1&o?U.L=a-U.R-t:U.R=a-U.L-t),4&o?U.T=r-U.B-(a-U.R-U.L)/t*e:U.B=r-U.T-(a-U.R-U.L)/t*e;break;default:s>U.R&&(s=U.R),s<-U.L&&(s=-U.L),n>U.B&&(n=U.B),n<-U.T&&(n=-U.T),U.L+=s,U.R-=s,U.T+=n,U.B-=n}css(U,{left:U.L+"px",top:U.T+"px",right:U.R+"px",bottom:U.B+"px"}),I.style.cursor=U.style.cursor}},U.onmousemove=function(t){this.drag||this.mouse(t.x,t.y)}},l.src=a[0]})}),LB(t,e){let i=El("table","LB"),s=i.ap(El("thead")).ap(El("tr")),n=i.ap(El("tbody")),o=[];return s.ap(El("th").tx("#")),t.for(t=>{s.ap(El("th").tx(t.n)),t.c}),e.for(e=>{let i=El("tr");i.d=e,o.push(i),i.ap(El("td")),t.for(t=>{let s=i.ap(El("td")),n=t.v(e);"object"==typeof n?s.ap(n):s.tx(n)})}),i.sort=(e,i=!1)=>{o.sort((s,n)=>i?t[e].s(n.d,s.d):t[e].s(s.d,n.d)),o.for(t=>n.append(t))},i.sort(t.findIndex(t=>t.s)),i},Play(t=!1){let e=El("div","m-play");return t&&e.aC("btn2"),e.v=0,e.onclick=()=>{e.v=1-e.v,e.v?e.aC("p"):e.rC("p"),e.f(e.v)},this.on(e)}};doc.fonts.ready.then(()=>{const t=UI.menu;for(let e=4;e--;)t.ap(El("div","menu"));UI.menu.ap(El("div"));let e=t.ch;e[0].innerHTML=UI.ico("home")+"<p>0{9}</p>",e[1].innerHTML=UI.ico("set")+"<p>0{a}</p>",e[2].innerHTML=UI.ico("help")+"<p>0{b}</p>",e[3].innerHTML=UI.ico("exit")+"<p>0{c}</p>",e[0].onclick=()=>{Ipc.beforeClose?.(),Ipc.closeMsg?UI.confirm(Ipc.closeMsg,1).then(t=>{t.i||LOC("home")}):LOC("home")},e[1].onclick=()=>{e[4]._s(),setTimeout(()=>css($("setting"),{opacity:1,transform:"translate(-50%,-50%) scale(1.25)"}),0),$c("setcat",e[4])[0].click()},e[2].onclick=()=>App.help(),e[3].onclick=()=>Ipc.close(0),e[4].id="setting",e[4].innerHTML=`<h3>${UI.ico("set")} 0{a}</h3>`,e[4].ap(El("div","msg-cb")).onclick=()=>{css(e[4],{opacity:0,transform:""}),setTimeout(()=>$("setting")._h(),200)},["0{2o}","0{2p}","0{2q}","0{l}"].for(t=>{e[4].ap(El("div","setcat").tx(t),El("div","setpage"))});let i=$c("setpage",e[4]);i[0].ap(UI.span("0{2r}"),UI.O("中文:zh-cn","English:en-us").on(t=>{const e=t=>{t!==_lang&&($S.set("lang",t),UI.confirm("0{2s}",1).then(t=>{t.i||Ipc.send("relaunch")}))};if("zh-cn"===t)return e(t);Local.get("f",t+".json").then(i=>{try{JSON.parse(i.t),e(t)}catch{UI.$a("0{2t}",1)}})}),El("br"),UI.span(" "),UI.B("0{2u}",1).on(t=>{t.set(),App.chkUpd(e=>{1===e?LOC("update"):0===e&&UI.$a("0{2v}",1),t.set(1)},e=>{UI.$a("0{2w}",1),console.error(e),t.set(1)})})),i[1].ap(UI.S("0{2x} (F3) ").on(App.setDarkMode),UI.S("0{2y} (F4) ").on(App.setFscr),UI.span("0{2z} (F5)"),UI.O("1280x720:0.8889","1440x810:1","1920x1080:1.3334","2880x1620:2").on(t=>App.setWinSc(t)));const s=t=>(t/(1<<20)).toFixed(2);i[2].ap(UI.span("0{30}0 MB"),UI.help("0{31}",1),UI.p("","10px 0 7px 0"),UI.span("- 0{32}0 MB "),UI.B("0{33}",1).on(t=>{t.set(),UI.confirm("0{34}",1).then(e=>{e.i||Ipc.send("clear"),t.set(1)})})),[["0{35}","avatar",1],["0{36}","cover",1],["0{37}","bgm",1],["0{38}","img"],["0{39}","snd"],["0{3a}","font"]].for(t=>{let e=UI.span(" ");e.aC("storage"),e.set=()=>{let i=App.stor[t[1]]??0;e.tx(`- ${t[0]}：${s(i)} MB`),e.nS().set(i&&t[2])},i[2].ap(El("br"),e,UI.B("0{33}",1).on(e=>{e.set(),CIW.clear(t[1]).then(()=>e.pS().set()).catch(()=>UI.$a("0{3b}",1).then(()=>e.set(1)))}))}),i[3].ap(UI.C("0{3c} ",0,60,30).on(t=>App.sC("run","fps",2===t?30:60))),i[0].set=function(){let t=this.ch;t[1].set(_lang),t[3].tx("0{3d}"+$S.get("version"))},i[1].set=function(){let t=this.ch,e=$S.get("zoom")||1;t[0].set(doc.body.className),t[1].set($S.sget("fullscreen")),t[3].set(e)},i[2].set=function(){let t=this.ch;Ipc.cache(e=>{navigator.storage.estimate().then(i=>t[0].tx("0{30}"+s(e+i.usage)+" MB")),t[3].tx("- 0{32}"+s(e)+" MB")}),t[2].tx("- 0{3e}"+s(App.stor.app??0)+" MB"),$c("storage",this).for(t=>t.set())},i[3].set=function(){this.ch[0].set(30===App.gC("run","fps")?2:1)},UI.bindCat(e[4]),location.pathname.match(/login|home/)&&e[0]._h(),doc.addEventListener("keydown",t=>{if(!t.repeat)switch(t.keyCode){case 114:App.setDarkMode(!doc.body.className);break;case 115:App.setFscr();break;case 116:let t=[1.3334,2,.8889,1];App.setWinSc(t[(t.findIndex(t=>t==$S.get("zoom"))+1)%4]);break;case 27:let e=location.pathname;"/"!==e&&"/update"!==e&&(UI.menu.on?UI.hideMenu():UI.showMenu())}})});