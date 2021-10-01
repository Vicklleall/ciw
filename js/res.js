const Res={snd:{},spr:{},font:{},sndList:["jp","st","dth","wj","brk","ej","gj","lj","spk","chr","spr","hit","bc","coin","bst","dash"],sprList:"ply,blt,sp,wp,spk,chr,lsr,jr,spr,tp,bd,arr,xa,blk,tile,blkm,pf,bbl,kbl,ice,wt1,wt2,wt3,wt4,twt,lava,wj,sbl,crt,cvl,ld,rp,trg,btn,dbt,sw,swr,mb,tj,dj,sj,ij,lg,hg,fs,ss,gu,gd,tree,cld,moon,star,grs,cvr,pst,dko,dkf,son,sof,gp,ist,ifg,txt".split(","),fontList:[["Default",4,"思源黑体(默认)"],["AveriaSansLibre",3],["Bangers",0],["Grenze",3],["HanaleiFill",0],["HappyZCool",4,"站酷快乐体"],["JotiOne",0],["Jua",0],["KarmaticArcade",0],["Orbitron",1],["Kongtext",0],["Limelight",0],["Lobster",0],["MarcellusSC",0],["OrigamiMommy",0],["Pacifico",0],["Play",1],["Quicksand",1],["Righteous",0],["SairaStencilOne",0],["Xiaolai",4,"小赖字体"],["Yukarimobile",0]],loadMax:Infinity,loadNow:0,push(){this.loadNow++,$("loadp").style.width=this.loadNow/this.loadMax*100+"%",this.loadNow===this.loadMax&&this.loadUp?.()},fail(){UI.$a("0{4z}"),$("loading")._h(),ac($("box"))},reset(t){this.loadMax=t??this.sprList.length+1,this.loadNow=0,$("loading")._s(),$("loadp").style.width=0,dac($("box"),"")},color:{gen(t){let e=[t[0]??"",t[1]??"",t[2]??"",t[3]??""];0==e[0]&&(e[0]=""),50==e[1]&&(e[1]=""),50==e[2]&&(e[2]=""),50==e[3]&&(e[3]="");let s=e.join(",");return",,,"===s&&(s=""),s},rgb2hsl(t,e,s){let i,a,r=Math.max(t,e,s),o=Math.min(t,e,s),n=(r+o)/510;if(r===o)i=a=0;else{let h=r-o;a=h/(n>.5?510-r-o:r+o),r===t?i=(e-s)/h+(e<s?6:0):r===e?i=(s-t)/h+2:r===s&&(i=(t-e)/h+4)}return[i,a,n]},hsl2rgb(t,e,s){let i,a,r;if(e=Math.mM(e,0,1),s=Math.mM(s,0,1),0===e)i=a=r=s;else{const o=(t,e,s)=>(s+=s<0?6:s>6?-6:0)<1?t+(e-t)*s:s<3?e:s<4?t+(e-t)*(4-s):t;let n=s<.5?s*(1+e):s+e-s*e,h=2*s-n;i=o(h,n,t+2),a=o(h,n,t),r=o(h,n,t-2)}return[Math.round(255*i),Math.round(255*a),Math.round(255*r)]},draw(t,e,s){let i=(s||",,,").split(","),a=t.width,r=t.height,o=t.getContext("2d"),n=i[0]/60,h=""===i[1]?0:i[1]/50-1,l=""===i[2]?0:i[2]/50-1,c=""===i[3]?1:i[3]/50;if(o.clearRect(0,0,a,r),o.drawImage(e,0,0),0===n&&0===h&&0===l&&1===c)return;c>1?c=2*c-1:c<-1&&(c=2*c+1);let f=o.getImageData(0,0,a,r),d=f.data;for(let t=a*r;t--;){let e=t<<2,[s,i,a]=this.rgb2hsl(d[e],d[e+1],d[e+2]),[r,o,f]=this.hsl2rgb(s+n,i+h,(a-.5)*c+.5+l);d[e]=r,d[e+1]=o,d[e+2]=f}o.putImageData(f,0,0)}},loadSnd(t){return new Promise((e,s)=>Au.onready(()=>{const i=i=>Au.ctx.decodeAudioData(i,s=>{let i={src:s};this.snd[t]=i,this.push("sound "+t),e(i)},s);CIW.onready(()=>CIW.get("snd",t).then(t=>t.b.arrayBuffer().then(i,s),e=>$M.xhr("GET",_$+"snd/"+t+".ogg","blob",null,2e4).then(e=>{e.response.arrayBuffer().then(s=>{CIW.put("snd",{id:t,b:e.response}),i(s)}).catch(s)}).catch(s)))}))},initSpr(t,e){e||(e={}),t.x=e.x??0,t.y=e.y??0,t.n=e.n??1,t.px=!!e.p,t.ims=e.s??0,t.tile="blk"===e.c||"tile"===e.c,e.b&&(t.bL=e.b[0],t.bT=e.b[1],t.boxW=e.b[2],t.boxH=e.b[3],t.boxL=t.x-t.bL,t.boxT=t.y-t.bT,t.b=e.b),"ply"===e.c&&(t.n=16)},loadSpr(t,e,s,i,a){return new Promise((r,o)=>{let n,h=new Image;n=i?a??[]:this.spr[t]?this.spr[t]:this.spr[t]=[],n.name=t,n.f=[],n.on=t=>n.f.push(t),CIW.onready(async()=>{if(await doc.fonts.ready,"_"===e[0]){let s=Res.loc.find(t=>t.id.slice(0,10)===e);if(s)return this.initSpr(n,s),void(h.src=s.d);e=Lib.thm[Res.sprList.findIndex(e=>e===t)]}CIW.get("img",e+t).then(t=>{this.initSpr(n,t),h.src=t.d},s=>{"number"==typeof e?(h.crossOrigin="anonymous",h.src=`${_$}img/thm/${e}/${t}.png`,this.initSpr(n,Lib.spr[t])):DB.O("Sprite",e).fetch().then(t=>{let e=t.toJSON();this.initSpr(n,e),h.src=$M.p+e.d},o),h.isNew=!0})}),h.onload=async()=>{let i=null,a=h.width,l=h.height,c=El("canvas",0,{width:a,height:l}),f=c.getContext("2d");f.drawImage(h,0,0),h.isNew&&(i=CIW.put("img",{id:e+t,c:t,d:c.toDataURL(),x:n.x,y:n.y,n:n.n,p:n.px,s:n.ims,t:n.tile,b:n.b})),delete n.b,s&&this.color.draw(c,h,s),n.src=h,n.length&&(n.length=0);try{if(n.tile){160===a&&(a=128),n.w=n.h=32;for(let t=0;t<l;t+=32)for(let e=0;e<a;e+=32)n.push(await createImageBitmap(c,e,t,32,32));if(128===a)for(let t=0;t<l;t+=32)n.push(await createImageBitmap(c,128,t,32,32))}else{a/=n.n,n.w=a,n.h=l;for(let t=0;t<n.n;t++)n.push(await createImageBitmap(c,t*a,0,a,l))}n.boxW||(n.bL=n.bT=0,n.boxW=n.w,n.boxH=n.h,n.boxL=n.x,n.boxT=n.y),n.mask=[];for(let t=0;t<n.n;t++)if(n.mask[t]=[],n.px){let e=f.getImageData(t*a+n.bL,n.bT,n.boxW,n.boxH).data;for(let s=0,i=n.boxW*n.boxH;s<i;s++)n.mask[t][s]=e[4*s+3]>80?1:0}else for(let e=0,s=n.boxW*n.boxH;e<s;e++)n.mask[t][e]=1;i&&await i,n.ready=!0,this.push("sprite "+t),n.f.for(t=>t(n)),n.f.length=0,r(n)}catch(t){o(t)}},h.onerror=o})},async colSpr(t,e){let s=t.src,i=El("canvas",0,{width:s.width,height:s.height});if(this.color.draw(i,s,e),t.length=0,t.tile){let e=s.width,a=s.height;160===e&&(e=128);for(let s=0;s<a;s+=32)for(let a=0;a<e;a+=32)t.push(await createImageBitmap(i,a,s,32,32));if(128===e)for(let e=0;e<a;e+=32)t.push(await createImageBitmap(i,128,e,32,32))}else for(let e=0;e<s.width;e+=t.w)t.push(await createImageBitmap(i,e,0,t.w,t.h))},loadBg(t,e,s){return new Promise(async(i,a)=>{await doc.fonts.ready;let r=s?t:{...t};if(3===t.m)this.push("background color"),i(r);else if(t.m>3){let e,s,a=El("canvas",0,{width:800,height:608}),o=a.getContext("2d"),n=t.g.split(",");if(4===t.m){let i=t.g.indexOf(":"),a=t.g.slice(0,i)*Math.PI/180;n[0]=n[0].slice(i+1),e=400*Math.cos(a),s=304*Math.sin(a)}let h=4===t.m?o.createLinearGradient(400-e,304+s,400+e,304-s):o.createRadialGradient(400,304,0,400,304,500);n.for(t=>h.addColorStop(Number(t.slice(7)),"#"+t.slice(0,6))),o.fillStyle=h,o.fillRect(0,0,800,608),this.push("background gradient"),r.c=a,i(r)}else{let s=new Image;CIW.onready(()=>{if("_"===t.id[0]){let e=Res.loc.find(e=>e.id.slice(0,10)===t.id);if(e)return void(s.src=e.d);t.id=0}CIW.get("img",t.id+"bg").then(t=>s.src=t.d,e=>{$("loading")._s(),"number"==typeof t.id?(s.crossOrigin="anonymous",s.src=`${_$}img/thm/${t.id}.png`):DB.O("Sprite",t.id).fetch().then(t=>s.src=$M.c(t.get("d")),a),s.isNew=!0})}),s.onload=()=>{r.c=El("canvas",0,{width:s.width,height:s.height}),r.i=s,r.c.getContext("2d").drawImage(s,0,0),s.isNew&&CIW.put("img",{id:t.id+"bg",c:"bg",d:r.c.toDataURL()}),t.g&&this.color.draw(r.c,s,t.g),e||this.push("background image"),i(r)},s.onerror=a}})},loadFont([t,e]){return new Promise(async(s,i)=>{if(await doc.fonts.ready,this.font[t])return this.push("font "+t),s(t);const a=t=>{"Default"!==t.id&&t.b.forEach(async(e,s)=>{let i=new FontFace("_"+t.id,`url(${URL.createObjectURL(e)})`,{weight:1&s?"bold":"normal",style:2&s?"italic":"normal"});await i.load(),doc.fonts.add(i)});let e=t.b.map(t=>$M.read(t));Promise.all(e).then(e=>{this.font[t.id]=e,this.push("font "+t.id),s(t.id)},i)};CIW.onready(()=>CIW.get("font",t).then(a,s=>{let r=[$M.xhr("GET",_$+"font/"+t+".woff2","blob",null,2e4)];1&e&&(r.push($M.xhr("GET",_$+"font/"+t+"-Bold.woff2","blob",null,2e4)),2&e&&(r.push($M.xhr("GET",_$+"font/"+t+"-Italic.woff2","blob",null,2e4)),r.push($M.xhr("GET",_$+"font/"+t+"-BoldItalic.woff2","blob",null,2e4)))),Promise.all(r).then(e=>{let s={id:t,b:e.map(t=>t.response)};a(s),CIW.put("font",s)}).catch(i)}))})},getCSSFont(t=0,e=0){let s=this.fontList[t],i=`@font-face{font-family:_${s[0]};src:url(${this.font[s[0]][e]})`;return 1&e&&(i+=";font-weight:bold"),2&e&&(i+=";font-style:italic"),i+"}"},onlyASCII:t=>!/[^\w\s'"\?\!\,\.\-]/.test(t),rpEmoji(t){return t.replace($M.reg.emoji,t=>this.emoji[t]??this.emoji[t.replace("️","")]??t)},emoji:{},loadEmoji(t){return new Promise((e,s)=>doc.fonts.ready.then(()=>Local.onready(()=>Local.get("f","emoji"+t+".json").then(t=>requestIdleCallback((t=>{Object.assign(Res.emoji,JSON.parse(t)),this.push("emoji"),e()}).bind(this,t.t),{timeout:5e3}),s))))},svgTxt(t){let e=this.fontList[t.ftf][1]&t.ftt,s=0===t.ftf||this.onlyASCII(t.txt);return`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='${t.w}' height='${t.h}'><style>svg{width:1em;height:1em;vertical-align:-.15em;fill:currentColor}${this.getCSSFont(t.ftf,e)}${s?"":this.getCSSFont()}</style><foreignObject x='0' y='0' width='${t.w}' height='${t.h}'><div xmlns='http://www.w3.org/1999/xhtml' style='white-space:pre-wrap;font:${2&t.ftt?"italic ":""}${1&t.ftt?"bold ":""}${t.fts}px _${this.fontList[t.ftf][0]},_Default,_emoji;text-align:${0===t.fta?"left":1===t.fta?"center":"right"};color:%23${t.ftc.slice(1)};${t.fsd?"text-shadow:0 0 "+t.fsd+"px %23"+t.fsc.slice(1)+";":""}${t.fst?"-webkit-text-stroke:"+t.fst+"px %23"+t.fkc.slice(1)+";":""}margin:8px 16px'>${this.rpEmoji($M.escTxt(t.txt,1))}</div></foreignObject></svg>`},svgGO(t){let e=this.fontList[t.ftf1][1]&t.ftt1,s=0===t.ftf||this.onlyASCII(t.txt1),i=this.fontList[t.ftf2][1]&t.ftt2,a=0===t.ftf||this.onlyASCII(t.txt2);return`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='608'><style>${this.getCSSFont(t.ftf1,e)}${t.ftf2===t.ftf1&&e===i?"":this.getCSSFont(t.ftf2,i)}${s&&a?"":this.getCSSFont()}</style><foreignObject x='0' y='0' width='800' height='608'><div xmlns='http://www.w3.org/1999/xhtml' style='position:absolute;width:800px;top:50%;transform:translateY(-50%)'><div style='white-space:pre-wrap;font:${2&t.ftt1?"italic ":""}${1&t.ftt1?"bold ":""}${t.fts1}px _${this.fontList[t.ftf1][0]}, _Default;text-align:${0===t.fta1?"left":1===t.fta1?"center":"right"};color:%23${t.ftc1.slice(1)};${t.fsd1?"text-shadow:0 0 "+t.fsd1+"px %23"+t.fsc1.slice(1)+";":""}${t.fst1?"-webkit-text-stroke:"+t.fst1+"px %23"+t.fkc1.slice(1)+";":""}'>${$M.escTxt(t.txt1,1)}</div><div style='white-space:pre-wrap;font:${2&t.ftt2?"italic ":""}${1&t.ftt2?"bold ":""}${t.fts2}px _${this.fontList[t.ftf2][0]}, _Default;text-align:${0===t.fta2?"left":1===t.fta2?"center":"right"};color:%23${t.ftc2.slice(1)};${t.fsd2?"text-shadow:0 0 "+t.fsd2+"px %23"+t.fsc2.slice(1)+";":""}${t.fst2?"-webkit-text-stroke:"+t.fst2+"px %23"+t.fkc2.slice(1)+";":""}'>${$M.escTxt(t.txt2,1)}</div></div></foreignObject></svg>`},dlImg(t,e){return new Promise((s,i)=>{let a={},r=new Image;"number"==typeof t?(r.crossOrigin="anonymous","bg"===e?r.src=`${_$}img/thm/${t}.png`:(r.src=`${_$}img/thm/${t}/${e}.png`,this.initSpr(a,Lib.spr[e]))):DB.O("Sprite",t).fetch().then(t=>{let s=t.toJSON();this.initSpr(a,s),r.src="bg"===e?$M.c(s.d):$M.p+s.d},i),r.onload=()=>{let o=El("canvas",0,{width:r.width,height:r.height});o.getContext("2d").drawImage(r,0,0);let n={id:t+e,c:e,d:o.toDataURL(),x:a.x,y:a.y,n:a.n,p:a.px,s:a.ims,t:a.tile,b:a.b};for(let t in n)void 0===n[t]&&delete n[t];CIW.put("img",n).then(()=>s(n),i)},r.onerror=i})},loadBgm(t,e){return new Promise((s,i)=>{const a=(e,a)=>e.arrayBuffer().then(t=>Au.ctx.decodeAudioData(t)).then(i=>{a&&CIW.put("bgm",{id:t,b:e}),this.push("bgm "+t),s(i)}).catch(i);CIW.onready(()=>CIW.get("bgm",t).then(t=>a(t.b),s=>Ipc.dl(e,t+".mp3",2,e=>{e?$M.xhr("GET","/tmp/"+t+".mp3","blob").then(t=>a(t.response,1)).catch(i):i()})))})}},Au={init(){this.ctx=new AudioContext,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.setVol(App.gC("run","vol")),this.ready.for(t=>t()),delete this.ready,this.rd=!0},rd:!1,ready:[],onready(t){this.rd?t():this.ready.push(t)},setVol(t){this.gain.gain.value=2**(t/100)-1},Bgm:class{constructor(){this.au=new Audio,this.au.crossOrigin="anonymous",this.au.loop=!0,this.src=Au.ctx.createMediaElementSource(this.au),this.gain=Au.ctx.createGain(),this.src.connect(this.gain),this.gain.connect(Au.gain)}set url(t){this.au.src=t}set vol(t){this.gain.gain.value=t/100}play(){this.au.play().then(()=>this._s=1)}pause(){this.au.pause(),this._s=2}},BufferBgm:class{constructor(){this.src=null,this.buffer=null,this.analyser=Au.ctx.createAnalyser(),this.analyser.fftSize=256,this.fftData=new Uint8Array(this.analyser.frequencyBinCount),this.gain=Au.ctx.createGain(),this.analyser.connect(this.gain),this.gain.connect(Au.gain),this.start=0,this.offset=0,this._l=!0,this._s=0}set url(t){this.buffer=t,this.stop()}get state(){return this._s}set vol(t){this.gain.gain.value=t/100}set loop(t){t!==this._l&&(this._l=t,this.src&&(this.stop(),this.updOffset(),this.play()))}set time(t){let e=this.src;e&&this.stop(),this.offset=t,e&&this.play()}get time(){return this.src?Au.ctx.currentTime-this.start:this.offset}updOffset(){this.offset=(Au.ctx.currentTime-this.start)%this.buffer.duration}play(){this.buffer&&!this.src&&(this.src=Au.ctx.createBufferSource(),this.src.buffer=this.buffer,this.src.loop=this._l,this.src.onended=()=>this.stop(),this.src.connect(this.analyser),this.src.start(0,this.offset),this.start=Au.ctx.currentTime-this.offset,this._s=1)}stop(){this.src&&(this.src.stop(),this.src.disconnect(),this.src.onended=null,this.src=null,this.offset=0,this._s=0)}pause(){this.stop(),this.updOffset(),this._s=2}fft(){this.analyser.getByteFrequencyData(this.fftData)}destroy(){this.stop(),this.gain.disconnect()}},play(t,e){let s=Res.snd[t];if(!s)return;let i=this.ctx.createBufferSource();i.buffer=s.src,e&&(i.playbackRate.value=e),i.connect(this.gain),i.start()}};doc.fonts.ready.then(()=>requestIdleCallback(()=>Au.init(),{timeout:2e3}));