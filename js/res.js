const Res={snd:{},spr:{},font:{},sndList:["jp","st","dth","wj","brk","ej","gj","lj","spk","chr","spr","hit","bc","coin","bst","dash"],sprList:"ply,blt,sp,wp,spk,chr,lsr,jr,spr,tp,bd,arr,xa,blk,tile,blkm,pf,bbl,kbl,ice,wt1,wt2,wt3,wt4,twt,lava,wj,sbl,crt,cvl,ld,rp,trg,btn,dbt,sw,swr,mb,tj,dj,sj,ij,lg,hg,fs,ss,gu,gd,tree,cld,moon,star,grs,cvr,pst,gp,txt".split(","),fontList:[["Default",4,"思源黑体(默认)"],["AveriaSansLibre",3],["Bangers",0],["Grenze",3],["HanaleiFill",0],["HappyZCool",4,"站酷快乐体"],["JotiOne",0],["Jua",0],["KarmaticArcade",0],["Orbitron",1],["Kongtext",0],["Limelight",0],["Lobster",0],["MarcellusSC",0],["OrigamiMommy",0],["Pacifico",0],["Play",1],["Quicksand",1],["Righteous",0],["SairaStencilOne",0],["Xiaolai",4,"小赖字体"],["Yukarimobile",0]],loadMax:Infinity,loadNow:0,push(){this.loadNow++,$("loadp").style.width=this.loadNow/this.loadMax*100+"%",this.loadNow===this.loadMax&&(this.loadUp?.(),this.loadMax=Infinity)},fail(){this.loadMax=Infinity,UI.$a("0{5w}"),$("loading")._h(),ac($("box"))},reset(t){this.loadMax=t??this.sprList.length+1,this.loadNow=0,$("loading")._s(),$("loadp").style.width=0,dac($("box"),"")},fC(t){t.width=t.height=0},encSpr(t){let e="";for(let i=0;i<t.length;i++){let s=t[i];s===Lib.thm[i]?e+="-":e+=s}return e},decSpr(t){return Array.isArray(t)?t:t.match(/-|[^-]{10}/g).map((t,e)=>"-"===t?Lib.thm[e]:t)},color:{gen(t){let e=[t[0]??"",t[1]??"",t[2]??"",t[3]??""];0==e[0]&&(e[0]=""),50==e[1]&&(e[1]=""),50==e[2]&&(e[2]=""),50==e[3]&&(e[3]="");let i=e.join(",");return",,,"===i&&(i=""),i},rgb2hsl(t,e,i){let s,a,r=Math.max(t,e,i),n=Math.min(t,e,i),o=(r+n)/510;if(r===n)s=a=0;else{let l=r-n;a=l/(o>.5?510-r-n:r+n),r===t?s=(e-i)/l+(e<i?6:0):r===e?s=(i-t)/l+2:r===i&&(s=(t-e)/l+4)}return[s,a,o]},hsl2rgb(t,e,i){let s,a,r;if(e=Math.mM(e,0,1),i=Math.mM(i,0,1),0===e)s=a=r=i;else{const n=(t,e,i)=>(i+=i<0?6:i>6?-6:0)<1?t+(e-t)*i:i<3?e:i<4?t+(e-t)*(4-i):t;let o=i<.5?i*(1+e):i+e-i*e,l=2*i-o;s=n(l,o,t+2),a=n(l,o,t),r=n(l,o,t-2)}return[Math.round(255*s),Math.round(255*a),Math.round(255*r)]},draw(t,e,i){let s=(i||",,,").split(","),a=t.width,r=t.height,n=t.getContext("2d"),o=s[0]/60,l=""===s[1]?0:s[1]/50-1,h=""===s[2]?0:s[2]/50-1,c=""===s[3]?1:s[3]/50;if(n.clearRect(0,0,a,r),n.drawImage(e,0,0),0===o&&0===l&&0===h&&1===c)return;c>1?c=2*c-1:c<-1&&(c=2*c+1);let d=n.getImageData(0,0,a,r),f=d.data;for(let t=a*r;t--;){let e=t<<2,[i,s,a]=this.rgb2hsl(f[e],f[e+1],f[e+2]),[r,n,d]=this.hsl2rgb(i+o,s+l,(a-.5)*c+.5+h);f[e]=r,f[e+1]=n,f[e+2]=d}n.putImageData(d,0,0)}},loadSnd(t){return new Promise((e,i)=>Au.onready(()=>{const s=s=>Au.ctx.decodeAudioData(s,i=>{let s={src:i};this.snd[t]=s,this.push("sound "+t),e(s)},i);CIW.onready(()=>CIW.get("snd",t).then(t=>t.b.arrayBuffer().then(s,i),e=>$M.xhr("GET",CDN_LATEST+"snd/"+t+".ogg","blob",null,2e4).then(e=>{e.response.arrayBuffer().then(i=>{CIW.put("snd",{id:t,b:e.response}),s(i)}).catch(i)}).catch(i)))}))},initSpr(t,e){e||(e={}),t.x=e.x??Lib.spr[e.c]?.x??0,t.y=e.y??Lib.spr[e.c]?.y??0,t.n=e.n??1,t.px=!!e.p,t.ims=e.s??0,t.tile="blk"===e.c||"tile"===e.c,e.b&&(t.bL=e.b[0],t.bT=e.b[1],t.boxW=e.b[2],t.boxH=e.b[3],t.boxL=t.x-t.bL,t.boxT=t.y-t.bT,t.b=e.b),"ply"===e.c&&(t.n=16)},sprBox(t,e,i,s,a=127){let r=[e,i,0,0];for(let n=0;n<s;n++){let s=t.canvas?t.getImageData(n*e,0,e,i).data:t;for(let t=0;t<i;t++)for(let i=0;i<e;i++)s[4*(t*e+i)+3]>a&&(i<r[0]&&(r[0]=i),i>r[2]&&(r[2]=i),t<r[1]&&(r[1]=t),t>r[3]&&(r[3]=t))}return r[2]+=1-r[0],r[3]+=1-r[1],r},async trimSpr(t,e){let[i,s,a,r]=this.sprBox(e,t.w,t.h,1,0);return t.tx=i,t.ty=s,t[0]=await createImageBitmap(t[0],i,s,a,r)},loadSpr(t,e,i,s,a,r){return new Promise((n,o)=>{let l,h=new Image;l=s?a??[]:this.spr[t]?this.spr[t]:this.spr[t]=[],l.name=t,l.f=[],l.on=t=>l.f.push(t),CIW.onready(async()=>{if(await docReady,"_"===e[0]){let i=Res.loc.find(t=>t.id.slice(0,10)===e);if(i)return this.initSpr(l,i),void(h.src=i.d);e=Lib.thm[Res.sprList.findIndex(e=>e===t)]}CIW.get("img",e+t).then(t=>{this.initSpr(l,t),h.src=t.d},i=>{(e.length??0)<10?(h.crossOrigin="anonymous",h.src=`${CDN_LATEST}img/thm/${e}/${t}.png`,this.initSpr(l,Lib.spr[t])):DB.O("Sprite",e).fetch().then(t=>{let e=t.toJSON();this.initSpr(l,e),h.src=$M.p+e.d},o),h.isNew=!0})}),h.onload=async()=>{let s=null,a=h.width,c=h.height,d=El("canvas",0,{width:a,height:c}),f=d.getContext("2d");f.drawImage(h,0,0),l.x<0&&(l.x=a/l.n>>1),l.y<0&&(l.y=l.y<-1?c:c>>1),h.isNew&&(s=CIW.put("img",{id:e+t,c:t,d:d.toDataURL(),x:l.x,y:l.y,n:l.n,p:l.px,s:l.ims,t:l.tile,b:l.b})),delete l.b,i&&this.color.draw(d,h,i),l.src=h,l.length&&(l.length=0);try{if(l.tile){160===a&&(a=128),l.w=32,l.h=32;for(let t=0;t<c;t+=32)for(let e=0;e<a;e+=32)l.push(await createImageBitmap(d,e,t,32,32));if(128===a)for(let t=0;t<c;t+=32)l.push(await createImageBitmap(d,128,t,32,32))}else{a/=l.n,l.w=a,l.h=c;for(let t=0;t<l.n;t++)l.push(await createImageBitmap(d,t*a,0,a,c))}if(l.boxW||(l.bL=l.bT=0,l.boxW=l.w,l.boxH=l.h,l.boxL=l.x,l.boxT=l.y),r){l.mask=[];for(let t=0;t<l.n;t++)if(l.mask[t]=[],l.px){let e=f.getImageData(t*a+l.bL,l.bT,l.boxW,l.boxH).data;for(let i=0,s=l.boxW*l.boxH;i<s;i++)l.mask[t][i]=e[4*i+3]>80?1:0}else for(let e=0,i=l.boxW*l.boxH;e<i;e++)l.mask[t][e]=1}l.tx=0,l.ty=0,s&&await s,l.ready=!0,this.push("sprite "+t),l.f.for(t=>t(l)),l.f.length=0,this.fC(d),n(l)}catch(t){this.fC(d),o(t)}},h.onerror=o})},async colSpr(t,e){let i=t.src,s=El("canvas",0,{width:i.width,height:i.height});if(this.color.draw(s,i,e),t.length=0,t.tile){let e=i.width,a=i.height;160===e&&(e=128);for(let i=0;i<a;i+=32)for(let a=0;a<e;a+=32)t.push(await createImageBitmap(s,a,i,32,32));if(128===e)for(let e=0;e<a;e+=32)t.push(await createImageBitmap(s,128,e,32,32))}else for(let e=0;e<i.width;e+=t.w)t.push(await createImageBitmap(s,e,0,t.w,t.h));this.fC(s)},loadBg(t,e,i){return new Promise(async(s,a)=>{await docReady;let r=i?t:{...t};if(3===t.m)r.c="#"===r.g[0]?r.g:"#"+r.g,this.push("background color"),s(r);else if(t.m>3){let e,i=t.g.split(",");if(4===t.m){let s=t.g.indexOf(":");i[0]=i[0].slice(s+1),e=`linear-gradient(${90-t.g.slice(0,s)}deg,`}else e="radial-gradient(circle,";i.sort((t,e)=>t.slice(7)-e.slice(7)),e+=i.map(t=>`#${t.slice(0,6)} ${100*Number(t.slice(7))}%`).join(",")+")",r.c=e,this.push("background gradient"),s(r)}else{let i=new Image;CIW.onready(()=>{if("_"===t.id[0]){let e=Res.loc.find(e=>e.id.slice(0,10)===t.id);if(e)return void(i.src=e.d);t.id=0}CIW.get("img",t.id+"bg").then(t=>i.src=t.d,e=>{$("loading")._s(),(t.id.length??0)<10?(i.crossOrigin="anonymous",i.src=`${CDN_LATEST}img/thm/${t.id}.png`):DB.O("Sprite",t.id).fetch().then(t=>i.src=$M.c(t.get("d")),a),i.isNew=!0})}),i.onload=()=>{r.c=El("canvas",0,{width:i.width,height:i.height}),r.i=i,r.c.getContext("2d").drawImage(i,0,0),i.isNew&&CIW.put("img",{id:t.id+"bg",c:"bg",d:r.c.toDataURL()}),t.g&&this.color.draw(r.c,i,t.g),e||this.push("background image"),s(r)},i.onerror=a}})},loadFont([t,e]){return new Promise(async(i,s)=>{if(await docReady,this.font[t])return this.push("font "+t),i(t);const a=t=>{"Default"!==t.id&&t.b.forEach(async(e,i)=>{let s=new FontFace("_"+t.id,`url(${URL.createObjectURL(e)})`,{weight:1&i?"bold":"normal",style:2&i?"italic":"normal"});await s.load(),doc.fonts.add(s)});let e=t.b.map(t=>$M.read(t));Promise.all(e).then(e=>{this.font[t.id]=e,this.push("font "+t.id),i(t.id)},s)};CIW.onready(()=>CIW.get("font",t).then(a,i=>{let r=[$M.xhr("GET",CDN_LATEST+"font/"+t+".woff2","blob",null,2e4)];1&e&&(r.push($M.xhr("GET",CDN_LATEST+"font/"+t+"-Bold.woff2","blob",null,2e4)),2&e&&(r.push($M.xhr("GET",CDN_LATEST+"font/"+t+"-Italic.woff2","blob",null,2e4)),r.push($M.xhr("GET",CDN_LATEST+"font/"+t+"-BoldItalic.woff2","blob",null,2e4)))),Promise.all(r).then(e=>{let i={id:t,b:e.map(t=>t.response)};a(i),CIW.put("font",i)}).catch(s)}))})},getCSSFont(t=0,e=0){let i=this.fontList[t],s=`@font-face{font-family:_${i[0]};src:url(${this.font[i[0]][e]})`;return 1&e&&(s+=";font-weight:bold"),2&e&&(s+=";font-style:italic"),s+"}"},onlyASCII(t){return!/[^\w\s'"\?\!\,\.\-]/.test(t)},rpEmoji(t){return t.replace($M.reg.emoji,t=>this.emoji[t]??this.emoji[t.replace("️","")]??t)},emoji:{},loadEmoji(t){return new Promise((e,i)=>docReady.then(()=>Local.onready(()=>Local.get("f","emoji"+t+".json").then(t=>requestIdleCallback((t=>{Object.assign(Res.emoji,JSON.parse(t)),this.push("emoji"),e()}).bind(this,t.t),{timeout:5e3}),i))))},svgTxt(t){let e=this.fontList[t.ftf][1]&t.ftt,i=0===t.ftf||this.onlyASCII(t.txt),s=Math.max(t.fsd,t.fst);return`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='${t.w}' height='${t.h}'><style>svg{width:1em;height:1em;vertical-align:-.15em;fill:currentColor}${this.getCSSFont(t.ftf,e)}${i?"":this.getCSSFont()}</style><foreignObject x='0' y='0' width='${t.w}' height='${t.h}'><div xmlns='http://www.w3.org/1999/xhtml' style='white-space:pre-wrap;font:${2&t.ftt?"italic ":""}${1&t.ftt?"bold ":""}${t.fts}px _${this.fontList[t.ftf][0]},_Default,_emoji;text-align:${0===t.fta?"left":1===t.fta?"center":"right"};color:%23${t.ftc.slice(1)};${t.fsd?"text-shadow:0 0 "+t.fsd+"px %23"+t.fsc.slice(1)+";":""}${t.fst?"-webkit-text-stroke:"+t.fst+"px %23"+t.fkc.slice(1)+";":""}margin:${s}px ${s+t.fts/4|0}px'>${this.rpEmoji($M.escTxt(t.txt,1))}</div></foreignObject></svg>`},svgGO(t){let e=this.fontList[t.ftf1][1]&t.ftt1,i=0===t.ftf||this.onlyASCII(t.txt1),s=this.fontList[t.ftf2][1]&t.ftt2,a=0===t.ftf||this.onlyASCII(t.txt2);return`data:image/svg+xml;utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='608'><style>${this.getCSSFont(t.ftf1,e)}${t.ftf2===t.ftf1&&e===s?"":this.getCSSFont(t.ftf2,s)}${i&&a?"":this.getCSSFont()}</style><foreignObject x='0' y='0' width='800' height='608'><div xmlns='http://www.w3.org/1999/xhtml' style='position:absolute;width:800px;top:50%;transform:translateY(-50%)'><div style='white-space:pre-wrap;font:${2&t.ftt1?"italic ":""}${1&t.ftt1?"bold ":""}${t.fts1}px _${this.fontList[t.ftf1][0]}, _Default;text-align:${0===t.fta1?"left":1===t.fta1?"center":"right"};color:%23${t.ftc1.slice(1)};${t.fsd1?"text-shadow:0 0 "+t.fsd1+"px %23"+t.fsc1.slice(1)+";":""}${t.fst1?"-webkit-text-stroke:"+t.fst1+"px %23"+t.fkc1.slice(1)+";":""}'>${$M.escTxt(t.txt1,1)}</div><div style='white-space:pre-wrap;font:${2&t.ftt2?"italic ":""}${1&t.ftt2?"bold ":""}${t.fts2}px _${this.fontList[t.ftf2][0]}, _Default;text-align:${0===t.fta2?"left":1===t.fta2?"center":"right"};color:%23${t.ftc2.slice(1)};${t.fsd2?"text-shadow:0 0 "+t.fsd2+"px %23"+t.fsc2.slice(1)+";":""}${t.fst2?"-webkit-text-stroke:"+t.fst2+"px %23"+t.fkc2.slice(1)+";":""}'>${$M.escTxt(t.txt2,1)}</div></div></foreignObject></svg>`},dlImg(t,e){return new Promise((i,s)=>{let a={},r=new Image;(t.length??0)<10?(r.crossOrigin="anonymous","bg"===e?r.src=`${CDN_LATEST}img/thm/${t}.png`:(r.src=`${CDN_LATEST}img/thm/${t}/${e}.png`,this.initSpr(a,Lib.spr[e]))):DB.O("Sprite",t).fetch().then(t=>{let i=t.toJSON();this.initSpr(a,i),r.src="bg"===e?$M.c(i.d):$M.p+i.d},s),r.onload=()=>{let n=El("canvas",0,{width:r.width,height:r.height});n.getContext("2d").drawImage(r,0,0),a.x<0&&(a.x=r.width/a.n>>1),a.y<0&&(a.y=a.y<-1?r.height:r.height>>1);let o={id:t+e,c:e,d:n.toDataURL(),x:a.x,y:a.y,n:a.n,p:a.px,s:a.ims,t:a.tile,b:a.b};for(let t in o)void 0===o[t]&&delete o[t];this.fC(n),CIW.put("img",o).then(()=>i(o),s)},r.onerror=s})},loadBgm(t,e){return new Promise((i,s)=>{const a=(e,s)=>{s&&CIW.put("bgm",{id:t,b:e}),this.push("bgm "+t),i(URL.createObjectURL(e))};CIW.onready(()=>CIW.get("bgm",t).then(t=>a(t.b),i=>$S.sget("offline")?(s(),this.push("bgm "+t+" failed")):Ipc.dl(e,t+".mp3",2,e=>{e?$M.xhr("GET","/tmp/"+t+".mp3","blob").then(t=>a(t.response,1)).catch(s):s()})))})}},Au={init(){this.ctx=new AudioContext,this.gain=this.ctx.createGain(),this.gain.connect(this.ctx.destination),this.setVol(App.gC("run","vol")),this.ready.for(t=>t()),delete this.ready,this.rd=!0},rd:!1,ready:[],onready(t){this.rd?t():this.ready.push(t)},setVol(t){this.gain.gain.value=2**(t/100)-1},play(t,e){let i=Res.snd[t];if(!i)return;let s=this.ctx.createBufferSource();s.buffer=i.src,e&&(s.playbackRate.value=e),s.connect(this.gain),s.start()},Bgm:class{constructor(t=0){this.au=new Audio,this.au.crossOrigin="anonymous",this.au.onended=()=>this.stop(),this.src=Au.ctx.createMediaElementSource(this.au),this.gain=Au.ctx.createGain(),this.gain.connect(Au.gain),t?(this.analyser=Au.ctx.createAnalyser(),this.analyser.fftSize=256,this.fftData=new Uint8Array(this.analyser.frequencyBinCount),this.src.connect(this.analyser),this.analyser.connect(this.gain)):this.src.connect(this.gain),this.state=0}set url(t){this.au.src=t}set vol(t){this.gain.gain.value=t/100}set loop(t){this.au.loop=t}set time(t){this.au.currentTime=t}get time(){return this.au.currentTime}get len(){return this.au.duration}play(){this.au.play().then(()=>this.state=1)}stop(){this.au.pause(),this.time=0,this.state=0}pause(){this.au.pause(),this.state=2}fft(){this.analyser.getByteFrequencyData(this.fftData)}destroy(){this.stop(),this.gain.disconnect()}}};docReady.then(()=>requestIdleCallback(()=>Au.init(),{timeout:2e3}));