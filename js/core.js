let $R=null,saveCache=null;const Core={circle(t,s,i=0){let e=[],h=Math.PI2/t;for(let r=0;r<t;r++){let t=i+r*h;e.push({x:Math.cos(t)*s,y:-Math.sin(t)*s})}return e},polygon(t,s,i,e=0){let h=[],r=Math.PI2/t,a=Math.cos(e)*i,l=-Math.sin(e)*i,o=Math.sin(r/2)*i*2/s;for(let i=0;i<t;i++){let t=Math.PI/2+e+(i+.5)*r,n=Math.cos(t)*o,d=Math.sin(t)*o;for(let t=0;t<s;t++)h.push({x:a,y:l}),a+=n,l-=d}return h}};Core.dec={rStr:"",setFlag(t){let s=(t??"").padEnd(6,"-|(~");this.bias=s.charCodeAt(0),this.iObj=s[1],this.iLay=s[2],this.iStr=s[3],this.iArr=s[4],this.iPro=s[5]},n(t){return t.charCodeAt(0)-this.bias},key(t){let s="",i=this.n(t);if(i<0)throw"decode key "+i;for(;i;)s+=String.fromCharCode(i%32+96),i>>=5;return s},num(t){let s=this.n(t),i=s/1e4<<0,e=i<3?1:-1;for(s%=1e4;i%3;)e*=10,i--;return s/e},str(t,s){let i="";for(;t[s]!==this.iStr;)if(i+=t.at(s++).replace(this.rStr,this.iStr),s>=t.length)throw"decode str at pos "+s;return[i,s+1]},arr(t,s){let i=[];for(let e=this.n(t[s++]);e--;){let e=this.val(t,s);if(i.push(e[0]),(s=e[1])>=t.length)throw"decode arr at pos "+s}return[i,s]},val(t,s){let i=t[s++];if(s>=t.length)throw"decode val at pos "+s;return i==this.iStr?this.str(t,s):i==this.iArr?this.arr(t,s):[this.num(i),s]},room(t,s,i){let e=0,h=0;for(;e<t.length;){let r=t.at(e++);if(r===this.iObj){let s=this.n(t.at(e++));for(;e<t.length&&t.at(e)!==this.iObj&&t.at(e)!==this.iLay;){let r=this.num(t.at(e++)),a=this.num(t.at(e++)),l={...Lib.obj[s]};if(t.at(e)===this.iPro){for(l.add=$M.cp(Lib.obj[s].add),e++;t.at(e)!==this.iPro;){let s=this.key(t.at(e++));if([l.add[s],e]=this.val(t,e),e>=t.length)throw"decode pro at pos "+e}e++}l.add.dep=h,i(s,r,a,l)}}else r===this.iLay&&s(++h)}}},Core.Layer=class{constructor(t){this.i=t,this.sta=$R.sf[2*t+1],this.dyn=$R.sf[2*t+2],this.clr=!1,this.o=[],this.a=[],this.del=[],this.e=[]}push(t){return this.o.push(t)}add(t){++t.ctx.n,this.a.push(t)}eff(t){++this.dyn.n,this.e.push(t)}clear(){this.dyn.n=this.sta.n=0,this.a.length=0,this.o.length=0,this.e.length=0}iter(t){for(let s=0;s<this.a.length;s++)this.a[s]._des?this.del.bIns(s):t(this.a[s])}gc(){if(this.del.length&&(this.del.forv(t=>{let s=this.a[t].oid;for(--this.a[t].ctx.n,this.a.splice(t,1),this.o.splice(s,1);s<this.o.length;s++)this.o[s].oid=s}),this.del.length=0),this.e.length)for(let t=this.e.length;t--;)this.e[t].move(),this.e[t]._des&&(--this.dyn.n,this.e.splice(t,1))}clrC(t){t.reset||t.resetC(),t.clearRect(t.vX,t.vY,t.canvas.width,t.canvas.height),t.clr=!0}draw(){let t=!1;if($R.upd){if(this.dyn.clr&&this.sta.clr&&0===this.e.length)return t;this.dyn.clr&&!this.e.length||(this.dyn.upd=!0,this.clrC(this.dyn),t=!0),this.sta.clr||(this.sta.upd=!0,this.clrC(this.sta),t=!0),this.a.for(t=>{t.ctx.upd&&t.draw()}),this.e.for(t=>t.draw())}else this.dyn.reset=!1,this.sta.reset=!1,this.clrC(this.sta),this.clrC(this.dyn),this.dyn.upd=!0,this.sta.upd=!0,this.a.for(t=>t.draw()),this.e.for(t=>t.draw()),t=!0;if(7===this.i&&this.dyn.upd){$R.$&&($R.$.draw(),t=!0);let s=$R.Col[1].obj;s.length&&(s.for(t=>t.draw()),t=!0)}return this.dyn.upd=!1,this.sta.upd=!1,t}},Core.$R=class{#t;#s;#i;#e;#h;#r;#a;#l;#o;#n;#d;#p;#f;static rdSeed=Date.now();constructor(t,s,i){this.G=Object.freeze(t),this.startR=0,this.endR=this.G.R.findIndex(t=>1===t.type);let e=$("screen");App.gC("run","smooth")?e.style.imageRendering="":e.style.imageRendering="pixelated",this.sfMargin=192,this.targetSf=e.ap(El("canvas","surf",{width:800,height:608})).transferControlToOffscreen().getContext("2d",{alpha:!1}),this.targetSf.imageSmoothingEnabled=!1,this.sf=[];for(let t=0;t<26;t++){let s;t>22?(25===t&&(this.GUI=e.ap(El("div")),this.GUI.id="GUI"),s=new OffscreenCanvas(800,608).getContext("2d"),s.vX=s.vY=0):s=new OffscreenCanvas(800+2*this.sfMargin,608+2*this.sfMargin).getContext("2d",{alpha:0!==t}),s.resetC=function(){this.setTransform(1,0,0,1,-this.vX,-this.vY),this.reset=!0},s.imageSmoothingEnabled=!1,this.sf.push(s)}this.#d=i,this.#n=Infinity,this.startMode=0,this.saveMode=Math.log2(t.S||1),this.#l=0,this.#a=s,this.sTime=$("g-time"),this.sTime.val=0,this.sTime.tx("00:00:00"),this.sDth=$("g-dth"),this.sDth.tx("0"),this.sRoom=$("g-room"),this.sRoom?(this.sPlyX=$("g-plyX"),this.sPlyY=$("g-plyY"),this.sPlyA=$("g-plyA"),this.sFps=$("g-fps"),this.sRps=$("g-rps"),this.sPer=$("g-per"),this.sPerD=$("g-perD"),this.fps=-1,this.rps=0,this.per=0,this.perD=0,this.fpsT=0,this.#o=this.mRun.bind(this),this.draw=this.mDraw.bind(this)):(this.#o=this.main.bind(this),this.draw=this.#g.bind(this))}init(t){$("loading").style.background="";let s=0,i={},e=[],h=[];this.bgmSrc={};let r=1;const a=s=>{r&&(r=0,s&&UI.$a("游戏资源加载失败，请检查网络连接"),t(s))},l=["pli","plr","plj","plf","plt","plb"];this.bgm=new Au.BufferBgm,this.G.R.for(t=>{let r=t.bg.m+(t.bg.id??0)+(t.bg.g??"");i[r]?t.bg=i[r]:(s++,i[r]=t.bg,Res.loadBg(t.bg,0,1).then(t=>{3!==t.m&&(t.fill=this.sf[0].createPattern(t.c,"repeat"))}).catch(a)),t.Spr={};for(let e=t.spr.length;e--;){let h=Res.sprList[e],r="";for(let s in t.col)t.col[s].split("|").includes(h)&&(r=s);let o=h+t.spr[e]+r;if(i[o])"ply"===h&&l.for(s=>t.Spr[s]=i[s+o]),t.Spr[h]=i[o];else{s++,t.Spr[h]=i[o]=[];let n=Res.loadSpr(h,t.spr[e],r,1,i[o]);"ply"===h&&(l.for(s=>t.Spr[s]=i[s+o]=[]),n.then(s=>l.for((i,e)=>{let h=e<2?4*e:2*e+4;t.Spr[i].push(...s.slice(h,e<2?h+4:h+2))}))),n.catch(a)}}t.txt=[],t._o=[[]],t.grp=[];try{Core.dec.setFlag(t.flag),Core.dec.room(t.obj,s=>t._o[s]=[],(i,e,h,r)=>{if(0===i)return t.x=e+17,void(t.y=h+23);let l={ind:i,x:e,y:h,dep:r.add.dep,spr:r.spr};if(delete r.add.dep,l.add={...r.add},r.add.tml&&(l.tml=JSON.stringify(r.add.tml),delete l.add.tml),r.add.trg&&(l.trg=JSON.stringify(r.add.trg),delete l.add.trg),l.spr[0].tile&&(l.add.tile=!0,l.add.til>=1e3&&(l.add.til-=1e3),l.add.tb=15&l.add.til,l.add.tc=l.add.til>>4&15),r.def&&(l.add.def=r.def),t._o[l.dep].push(l),10===i){let s={m:l.add.gpm[0],i:r.add.gid,o:[]};switch(l.add._gid=t.grp.push(s)-1,s.m){case 0:s.p=[];break;case 1:s.p=l.add._gp=Core.circle(l.add.gpm[1],l.add.gpm[2]);break;case 2:s.p=l.add._gp=Core.polygon(l.add.gpm[1],l.add.gpm[3],l.add.gpm[2],0)}}else if(42===i){s++;let i=r.add,e=new Image,h=[El("canvas",0,{width:i.w,height:i.h})];h.x=h.y=0,h.bL=h.w=i.w,h.bT=h.h=i.h,h.bR=h.bB=0,h.px=!0,t.txt.push(h),l.spr=[h],e.src=Res.svgTxt(i),e.decode().then(()=>{let t=h[0].getContext("2d");t.drawImage(e,0,0);let s=t.getImageData(0,0,h.w,h.h).data;for(let t=h.h;t--;)for(let i=h.w;i--;)s[4*(t*h.w+i)+3]>127&&(i<h.bL&&(h.bL=i),i>h.bR&&(h.bR=i),t<h.bT&&(h.bT=t),t>h.bB&&(h.bB=t));h.boxL=-h.bL,h.boxT=-h.bT,h.boxW=h.bR-h.bL+1,h.boxH=h.bB-h.bT+1,h.mask=[[]];for(let t=h.bT;t<=h.bB;t++)for(let i=h.bL;i<=h.bR;i++)h.mask[0].push(s[4*(t*h.w+i)+3]>127?1:0);Res.push("svg text")}).catch(a)}})}catch(t){console.error(t),UI.$a("房间内容解析错误"),s++,a()}if(t._o.for(s=>s.for(s=>{if(s.add.gpi){let i=t.grp.findIndex(t=>s.add.gpi.startsWith(t.i));if(-1===i)delete s.add.gpi;else{let e=t.grp[i];s.add._gi=i,s.add._gn=0|s.add.gpi.slice(e.i.length),0===e.m&&(e.p[s.add._gn]={x:s.x,y:s.y}),s.add.grpX=s.add.grpY=0}}$M.freeze(s.add)})),Object.freeze(t.grp),t.grp.for(t=>$M.freeze(t.p)),t.type){t.bobj=JSON.parse(t.bobj);for(let s in t.bobj)t.bobj[s]=t.bobj[s].add;if(t.bobj.gov){let i={...t.bobj.gov};delete i.tml,delete i.mov;let r=JSON.stringify(i),l=h.indexOf(r);if(-1===l){s++;let l=new Image,o=[El("canvas",0,{width:800,height:608})];o.boxL=o.x=400,o.boxT=o.y=304,o.boxW=o.w=800,o.boxH=o.h=608,o.bT=o.bL=0,t.sprGO=[o],e.push(t.sprGO),h.push(r),l.src=Res.svgGO(i),l.decode().then(()=>{o[0].getContext("2d").drawImage(l,0,0),Res.push("svg text")}).catch(a)}else t.sprGO=e[l]}}if(t.bgm.m>1){t.bgm={...t.bgm};let i=t.bgm.i;switch(t.bgm.m){case 2:this.bgmSrc[i]||(s++,this.bgmSrc[i]="0",crypto.subtle.digest("SHA-1",(new TextEncoder).encode(i)).then(t=>Res.loadBgm(Array.from(new Uint8Array(t)).map(t=>t.toString(16).padStart(2,"0")).join(""),i)).then(t=>this.bgmSrc[i]=t).catch(a));break;case 3:this.bgmSrc[i]||(s++,this.bgmSrc[i]="0",Res.loadBgm(i,`https://music.163.com/song/media/outer/url?id=${i}.mp3`).then(t=>this.bgmSrc[i]=t).catch(a))}t.bgm.a=0!==t.bgm.a,t.bgm.l=0!==t.bgm.l}t.vM=2===t.view}),this.#a&&(this.#r=saveCache),Res.reset(s)}exit(){Object.values(this.bgmSrc).for(t=>URL.revokeObjectURL(t)),this.bgm.destroy(),$c("surf",$("screen")).for(t=>t.remove()),this.GUI.remove(),cancelAnimationFrame(this.drawId),clearInterval(this.run),this.run=0,$R=null}start(t){this.#i=0,this.#e=Date.now(),this.#h=0,this.room=-1,this.fls=0,this.VAR={...this.G.VAR},this.L=[];for(let t=0;t<12;t++)this.L[t]=new Core.Layer(t);this.Col=[{meet:(t,s,i,e,h,r,a)=>{if(this.$){let s=this.$.B[0]+.5<<0,i=this.$.B[1]+.5<<0,l=this.$.B[2]+.5<<0,o=this.$.B[3]+.5<<0;if(r>s&&a>i&&e<l&&h<o&&this.$._meet(0,0,s,i,l,o,t))return this.$}}},{obj:[],meet(t,s,i,e,h,r,a){for(let s=0;s<this.obj.length;s++){let i=this.obj[s],l=i.B[0],o=i.B[1],n=i.B[2],d=i.B[3];if(r>l&&a>o&&e<n&&h<d&&i._meet(0,0,l,o,n,d,t))return i}}}],this.outStk=[],$C.keyResetAll(),-1===t?this.#r?this.load():this.roomTo(0):this.roomTo(t??this.startR),this.main(),(this.plyX||this.plyY)&&this.save(),this.spd=20,this.anm=0;let s=App.gC("run","fps");this.autoFps=s<0,this.fpsCount=0,this.anmInt=this.autoFps?100/6:1e3/s,this.dvX=this.dvY=0,this.draw()}end(){}save(t=!0,s,i){this._r&&0!==this._r.type&&4!==this._r.type&&(t||this.#r)&&(t&&(this.#r={r:this.room,x:s??this.plyX,y:i??this.plyY,v:{...this.VAR}}),Object.assign(this.#r,{time:this.#i,death:this.#h}),this.#a&&(saveCache=this.#r))}load(){let t=this.#r;t&&(this.VAR={...t.v},this.#i=t.time,this.#h=t.death,this.sDth.innerText=this.#h,this.roomTo(t.r,t.x,t.y))}pause(){this.run&&(clearInterval(this.run),this.run=0)}resume(){this.run=setInterval(this.#o,this.#n)}initPly(t){let s=this._r.bobj.ply;t.jump=s.sJump?this.#r?.j??s.jump:s.jump,t.g_=s.sGravDir?this.#r?.gd??s.g_:s.g_,t.conShoot=s.conShoot,t.adMove=s.adMove,t._grav=.4,t._moveSpd=3}dec(t){t.grp.for(t=>t.o.length=0);for(let s=0;s<this.L.length;s++)this.L[s].clear(),t._o[s].for(s=>{let i=new Core.ObjRun(s.ind,s.x,s.y,s.dep,s.spr);if(Object.assign(i,s.add),s.tml&&(i.tml=JSON.parse(s.tml)),s.trg&&(i.trg=JSON.parse(s.trg)),i.gpi&&(i.grp=t.grp[i._gi],i.grp.o.push(i)),10===s.ind){let e=t.grp[i._gid];e.c=i,i.grpO=e.o,0===e.m&&(i._gp=[],e.p.for((t,e)=>i._gp[e]={x:t.x-s.x,y:t.y-s.y}))}});if(2===t.out&&[[0,-32,t.w/32,1],[-32,-32,1,t.h/32+2],[t.w,-32,1,t.h/32+2]].for(t=>{let s=new Core.ObjRun(3,t[0],t[1],7,Lib.obj[3].spr);s.cm=2,s.scx=t[2],s.scy=t[3]}),0===t.type&&(t.x=t.y=0),this.#t||this.#s)this.$=new Core.ObjPly(this.#t,this.#s);else if(t.x||t.y){this.$=new Core.ObjPly(t.x,t.y);let s=this.$.g_;270!==s&&(this.$.g_=270,this.$.setGrav(s))}else this.$=null;this.updView(1),this.activate(1)}roomTo(t,s=0,i=0){console.time("Room"+t);let e=this.G.R[t];if(this.room!==t){1===e.bgm.m?this.bgm.stop():e.bgm.m>1&&(this.bgm.vol=e.bgm.v??100,this._r&&this._r.bgm.i===e.bgm.i?this._r.bgm.l!==e.bgm.l&&(this.bgm.loop=e.bgm.l,e.bgm.a&&e.bgm.l&&0===this.bgm.state&&this.bgm.play()):(this.bgm.url=this.bgmSrc[e.bgm.i],this.bgm.loop=e.bgm.l,e.bgm.a&&this.bgm.play())),this.room=t,this._r=e;for(let t in e.Spr)if(Res.spr[t]){let s=Res.spr[t],i=e.Spr[t];s.splice(0,s.length,...i),s.x=i.x,s.y=i.y,s.w=i.w,s.h=i.h,s.n=i.n,s.ims=i.ims,s.px=i.px,s.mask=i.mask,s.bL=i.bL,s.bT=i.bT,s.boxL=i.boxL,s.boxT=i.boxT,s.boxW=i.boxW,s.boxH=i.boxH}else Res.spr[t]=e.Spr[t];let s=this.sf[0];switch(e.bg.m){case 0:s.fillStyle=e.bg.fill;break;case 2:break;case 3:s.setTransform(1,0,0,1,0,0),s.fillStyle=e.bg.g,s.fillRect(0,0,800,608);break;default:s.setTransform(1,0,0,1,0,0),s.fillStyle=e.bg.fill,s.fillRect(0,0,800,608)}}this.plyX=0,this.plyY=0,this._vX=0,this._vY=0,this.sfX=0,this.sfY=0,this.trg=[],this.warpTimer=-1,this.Col.length=2,this.Col[1].obj.length=0;for(let t=0;t<Lib.obj.length+4;t++)this.Col.push(new Core.ColTree(e.w,e.h,t+2));this.#t=s,this.#s=i,this.dec(e),this.vC=!1,this.#r?(1===e.type&&(this.#r.clr=1),this.#l=1+(this.#r.clr??0)):this.#l=0,this.bgmTime=this.bgm.time,this.sRoom&&(this.sRoom.innerText=this._r.name),console.timeEnd("Room"+t)}warp(t,s=0,i=0,e=0){let h=128===t?this.room+1:this.G.R.findIndex(s=>s.id===this._r.id+t);if(this.G.R[h])if(this.$&&(this.$.frozen=!0),1===s)if(h===this.room){if(i||e)this.$=new Core.ObjPly(i,e);else if(this._r.x||this._r.y){this.$=new Core.ObjPly(this._r.x,this._r.y);let t=this.$.g_;270!==t&&(this.$.g_=270,this.$.setGrav(t))}}else this.roomTo(h,i,e);else if(this.warpTo=h,this.warpS=s,this.warpX=i,this.warpY=e,0===s)this.flash("#000",0,1,25),this.warpTimer=30}flash(t,s,i,e){this.sf[25].fillStyle=t,this.sf[25].clr=!1,this.flf=s,this.flt=i,this.fls=(i-s)/e}get vX(){return this._vX+.5<<0}set vX(t){let s=t+.5<<0!=this._vX+.5<<0;this._vX=t,s&&(this.vC=!0)}get vY(){return this._vY+.5<<0}set vY(t){let s=t+.5<<0!=this._vY+.5<<0;this._vY=t,s&&(this.vC=!0)}updView(t=0){let s=this._r;if(s.vM){let i=Math.mM(this.plyX-400,0,s.w-800),e=Math.mM(this.plyY-304,0,s.h-608);t?(this.sfX=(this._vX=i)+.5<<0,this.sfY=(this._vY=e)+.5<<0):(this._vX+=(i-this._vX)/10,this._vY+=(e-this._vY)/10,(Math.abs(this._vX-this.sfX)>this.sfMargin-32||Math.abs(this._vY-this.sfY)>this.sfMargin-32)&&(this.sfX=this._vX+.5<<0,this.sfY=this._vY+.5<<0,this.vC=!0))}else this.sfX=this.vX=800*(this.plyX/800<<0),this.sfY=this.vY=608*(this.plyY/608<<0)}activate(t=0){let s=this._r.vM?this.sfMargin:32,i=this.vX,e=this.vY;this.upd=!1;for(let t=0;t<23;t++)this.sf[t].vX=i-this.sfMargin,this.sf[t].vY=e-this.sfMargin;i-=s,e-=s;let h=i+800+2*s,r=e+608+2*s;t?this.L.for(t=>t.o.for(t=>{t.init(),t.activate(i,e,h,r)})):this.L.for(t=>{t.a.for(t=>--t.ctx.n),t.a.length=0,t.o.for(t=>t.activate(i,e,h,r))})}get time(){return this.#i}get dth(){return this.#h}addDth(){this.sDth.innerText=++this.#h}get svS(){return this.#l}get tSec(){return this.#i/1e3<<0}get tMin(){return this.tSec/60<<0}get saveX(){return this.#r?.x}get saveY(){return this.#r?.y}get spd(){return this.#n}set spd(t){this.#n!==t&&(this.#d||this.#f)&&(this.#n=t,this.run&&clearInterval(this.run),this.run=setInterval(this.#o,t))}get god(){return this.#p}set god(t){this.#d&&(this.#p=t)}dragPly(t,s){this.#d&&this.$&&!this.$.frozen&&(this.$=new Core.ObjPly(t+this._vX,s+this._vY))}newGame(){let t=()=>{this.G.R[this.room+1]&&(this.$&&(this.$.frozen=!0),this.flash("#000",0,1,40),this.warpTimer=50,this.startMode=1,this.#r=null)};this.#r?UI.confirm("确定要重新开始游戏？").then(s=>{s.i||t()}):t()}loadGame(){this.#r&&(this.$&&(this.$.frozen=!0),this.flash("#000",0,1,40),this.warpTimer=50,this.startMode=2)}main(){if((this.warpTimer>0||UI.bg.n)&&$C.keyPauseAll(),-1===this.warpTimer)this._r.type&&($C.keyPrs("f2")?(this.$&&(this.$.frozen=!0),this.flash("#000",0,1,40),this.warpTimer=50,this.warpTo=this.startR,this.warpS=this.warpX=this.warpY=0):1!==this._r.type&&$C.keyPrs("r")&&(4===this._r.type?this.roomTo(this.room):(this.save(!1),this.load())));else if(0===this.warpTimer)switch(this.save(!1),this.startMode){case 0:switch(this.roomTo(this.warpTo,this.warpX,this.warpY),this.warpS){case 0:case 3:this.flash("#000",1,0,25)}break;case 2:this.startMode=0,this.load(),this.flash("#000",1,0,25);break;case 1:this.startMode=0,this.roomTo(this.room+1),this.flash("#000",1,0,25),this._r.type&&(this.plyX||this.plyY)&&this.save()}else this.warpTimer--;let t=this.Col[1].obj;for(this.L.for(t=>t.iter(t=>t.step0())),this.L.for(t=>t.iter(t=>t.timer())),this.L.for(t=>t.iter(t=>t.step1())),t.for(t=>t.step()),this.$&&this.$.step(),this.L.for(t=>t.iter(t=>t.move())),this.L.for(t=>t.iter(t=>t.collision()));this.outStk.length;){for(let t=0;t<this.outStk.length;t++)if(3===this.outStk[t].test){let s=this.outStk[t];this.outStk.splice(t--,1),s.outSld()}let t=1;for(let s=0;s<this.outStk.length;s++)2===this.outStk[s].test&&(this.outStk[s].test=3,t=0);t&&(this.outStk.length=0)}this._r.grp.for(t=>{t.c.moved&&!t.c.gpi&&t.c.updGrp()}),this.$&&this.$.move();for(let s=t.length;s--;)t[s].move(),t[s].des<0&&t.splice(s,1);this.L.for(t=>t.iter(t=>t.step2())),this.L.for(t=>t.iter(t=>t.resetStatus())),this.$&&this.$.resetStatus(),this.L.for(t=>t.gc());let s=this.trg;for(let t=s.length;t--;)1===s[t]?s[t]=2:3===s[t]&&(s[t]=0);this.fls&&(Math.abs(this.flt-this.flf)>Math.abs(this.fls)?this.flf+=this.fls:(this.flf=this.flt,this.fls=0)),this._r.bgm.m>1&&this._r.bgm.s&&1===this.bgm.state?(Math.abs(this.bgmTime-this.bgm.time)>.2&&(this.bgm.time=this.bgmTime),this.bgmTime+=.02):this.bgmTime&&0===this.bgm.state&&(this.bgmTime=0),$C.keyClrAll(),this.updView(),this.vC&&(this.vC=!1,this.activate());let i=Date.now();2!==this._r.type||this.#r?.clr||(this.#i+=i-this.#e);let e=this.tSec;e!==this.sTime.val&&(this.sTime.val=e,this.sTime.innerText=Date.cT(e)),this.#e=i}mRun(){let t=performance.now();this.main(),this.fps++,this.per+=performance.now()-t;let s=Date.now()-this.fpsT;if(s>=1e3){if(this.fps){this.sFps.innerText=this.fps,this.sRps.innerText=this.rps;let t=this.per/5+.5<<0;this.sPer.style.color=t>50?"#d00":"",this.sPer.innerText=t+"%",t=this.perD/5+.5<<0,this.sPerD.style.color=t>50?"#d00":"",this.sPerD.innerText=t+"%",this.fps=0,this.rps=0,this.per=0,this.perD=0}this.fpsT+=s>1500?s:1e3}if(this.sPlyX.val!==this.plyX){this.sPlyX.val=this.plyX,this.sPlyX.innerText=this.plyX.toFixed(2);let t=this.plyX%3;this.sPlyA.val!==t&&(this.sPlyA.val=t,this.sPlyA.innerText=t.toFixed(2))}this.sPlyY.val!==this.plyY&&(this.sPlyY.val=this.plyY,this.sPlyY.innerText=this.plyY.toFixed(2))}#g(t){let s=t-this.anm;if(Math.round(s)>=this.anmInt<<0){let i=this.vX,e=this.vY,h=this.dvX!==i||this.dvY!==e,r=this.sf[25];if(r.clr||(r.clearRect(0,0,800,608),r.clr=!0,h=!0),this.flf>0&&(r.globalAlpha=this.flf,r.fillRect(0,0,800,608),r.clr=!1,this.flf>=1&&this.run))return this.targetSf.drawImage(r.canvas,0,0),void(this.drawId=window.requestAnimationFrame(this.draw));if(!this.upd){let t=this.sf[0],s=this._r.bg;switch(s.m){case 0:t.resetC(),t.fillRect(0,0,this._r.w,this._r.h);break;case 2:t.resetC(),t.drawImage(s.c,0,0,this._r.w,this._r.h)}}if(this.L.for(t=>{t.draw()&&(h=!0)}),h){let t=-this.sfMargin+this.sfX-i,s=-this.sfMargin+this.sfY-e;0===this._r.bg.m||2===this._r.bg.m?this.targetSf.drawImage(this.sf[0].canvas,t,s):this.targetSf.drawImage(this.sf[0].canvas,0,0),this.L.for((i,e)=>{11===e?(i.sta.n&&this.targetSf.drawImage(i.sta.canvas,0,0),i.dyn.n&&this.targetSf.drawImage(i.dyn.canvas,0,0)):(i.sta.n&&this.targetSf.drawImage(i.sta.canvas,t,s),i.dyn.n&&this.targetSf.drawImage(i.dyn.canvas,t,s))}),this.flf>0&&this.targetSf.drawImage(this.sf[25].canvas,0,0),this.rps++}this.upd=!0,this.dvX=i,this.dvY=e,s-this.anmInt<=1||s-this.anmInt>=this.anmInt?this.anm=t:this.anm+=this.anmInt}this.run&&(this.drawId=window.requestAnimationFrame(this.draw))}mDraw(t){let s=performance.now();this.#g(t),this.perD+=performance.now()-s}},Core.QTree=class{constructor(t,s,i,e,h){this.L=t,this.T=s,this.W=i,this.H=e,this.R=t+i,this.B=s+e,this.ch=[null,null,null,null],this.len=4,this.obj=[],this.ind=h}expand(){let t=this.W>>6<<5,s=this.H>>6<<5;t<32||s<32||(this.ch[0]=new Core.QTree(this.L,this.T,t,s,this.ind),this.ch[1]=new Core.QTree(this.L+t,this.T,this.W-t,s,this.ind),this.ch[2]=new Core.QTree(this.L,this.T+s,t,this.H-s,this.ind),this.ch[3]=new Core.QTree(this.L+t,this.T+s,this.W-t,this.H-s,this.ind),this.obj.splice(0).for(t=>{t.colP[this.ind]=null,this.add(t)}))}loc(t){let s=this.ch;if(s[0])for(let i=0;i<this.len;i++)if(t.B[0]>=s[i].L&&t.B[1]>=s[i].T&&t.B[2]<=s[i].R&&t.B[3]<=s[i].B)return s[i].loc(t);return this}add(t){let s=this.ch;if(!s[0]&&this.obj.length>16&&this.expand(),s[0])for(let i=0;i<this.len;i++)if(t.B[0]>=s[i].L&&t.B[1]>=s[i].T&&t.B[2]<=s[i].R&&t.B[3]<=s[i].B)return s[i].add(t);t.colP[this.ind]=this.obj,t.colId[this.ind]=this.obj.push(t)-1}meet(t,s,i,e,h,r,a){let l=this.ch;if(l[0])for(let o=0;o<this.len;o++)if(r>l[o].L&&a>l[o].T&&e<l[o].R&&h<l[o].B){let n=l[o].meet(t,s,i,e,h,r,a);if(n)return n}for(let l=this.obj.length;l--;){let o=this.obj[l];if(o!==t&&(o.calcBox(),r>o.B[0]&&a>o.B[1]&&e<o.B[2]&&h<o.B[3]&&o.h&&t._meet(s,i,e,h,r,a,o)))return o}}find(t,s,i,e,h){let r=this.ch;if(r[0])for(let a=0;a<this.len;a++)i>r[a].L&&e>r[a].T&&t<r[a].R&&s<r[a].B&&r[a].find(t,s,i,e,h);for(let r=this.obj.length;r--;){let a=this.obj[r];a.calcBox(),i>a.B[0]&&e>a.B[1]&&t<a.B[2]&&s<a.B[3]&&a.h&&h.push(a)}}},Core.ColTree=class extends Core.QTree{constructor(t,s,i){super(0,0,0,0,0),this.ch.length=0,this.ind=i>5?0:1;let e=t/800<<0,h=s/608<<0;for(let i=0;i<h;i++){let r=i===h-1?s-608*i:608;for(let s=0;s<e;s++)this.ch.push(new Core.QTree(800*s,608*i,s===e-1?t-800*s:800,r,this.ind))}this.len=this.ch.length,this.meet=this.find=this.skip}add(t){if(this.meet=this.__proto__.meet,this.find=this.__proto__.find,!t.colMov)for(let s=0,i=this.ch;s<this.len;s++)if(t.B[0]>=i[s].L&&t.B[1]>=i[s].T&&t.B[2]<=i[s].R&&t.B[3]<=i[s].B)return i[s].add(t);t.colP[this.ind]=this.obj,t.colId[this.ind]=this.obj.push(t)-1}upd(t){let s=this.loc(t),i=t.colP[this.ind],e=s.obj;if(e!==i){let h=t.colId[this.ind];for(i.splice(h,1);h<i.length;h++)i[h].colId[this.ind]=h;!s.ch[0]&&e.length>16?s.add(t):(t.colP[this.ind]=e,t.colId[this.ind]=e.push(t)-1)}}findAll(t,s,i,e){let h=[];return this.find(t,s,i,e,h),h}skip(){}};