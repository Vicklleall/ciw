let $R=null,saveCache=null;const Core={};Core.dec={bias:128,iObj:"-",iLay:"|",iStr:"",iArr:"(",iPro:"~",n(t){return t.charCodeAt(0)-this.bias},key(t){let s="",i=this.n(t);if(i<0)throw"decode key "+i;for(;i;)s+=String.fromCharCode(i%32+96),i>>=5;return s},num(t){let s=this.n(t),i=s/1e4<<0,e=i<3?1:-1;for(s%=1e4;i%3;)e*=10,i--;return s/e},str(t,s){let i="";for(;t[s]!==this.iStr;)if(i+=t.charAt(s++),s>=t.length)throw"decode str at pos "+s;return[i,s+1]},arr(t,s){let i=[];for(let e=this.n(t[s++]);e--;){let e=this.val(t,s);if(i.push(e[0]),(s=e[1])>=t.length)throw"decode arr at pos "+s}return[i,s]},val(t,s){let i=t[s++];if(s>=t.length)throw"decode val at pos "+s;return i==this.iStr?this.str(t,s):i==this.iArr?this.arr(t,s):[this.num(i),s]},room(t,s,i){let e=0,h=0;for(;e<t.length;){let r=t.charAt(e++);if(r===this.iObj){let s=this.n(t.charAt(e++));for(;e<t.length&&t.charAt(e)!==this.iObj&&t.charAt(e)!==this.iLay;){let r=this.num(t.charAt(e++)),l=this.num(t.charAt(e++)),a={...Lib.obj[s]};if(t.charAt(e)===this.iPro){for(a.add={...Lib.obj[s].add},e++;t.charAt(e)!==this.iPro;){let s=this.key(t.charAt(e++));if([a.add[s],e]=this.val(t,e),e>=t.length)throw"decode pro at pos "+e}e++}a.add.dep=h,i(s,r,l,a)}}else r===this.iLay&&s(++h)}}},Core.Layer=class{constructor(t){this.i=t,this.sta=$R.sf[2*t+1],this.dyn=$R.sf[2*t+2],this.clr=!1,this.o=[],this.a=[],this.del=[],this.e=[]}push(t){return this.o.push(t)}add(t){this.a.push(t)}eff(t){this.e.push(t)}clear(){this.a.length=0,this.o.length=0,this.e.length=0}iter(t){for(let s=0;s<this.a.length;s++)this.a[s]._des?this.del.bIns(s):t(this.a[s])}gc(){if(this.del.length&&(this.del.forv(t=>{let s=this.a[t].oid;for(this.a.splice(t,1),this.o.splice(s,1);s<this.o.length;s++)this.o[s].oid=s}),this.del.length=0),this.e.length)for(let t=this.e.length;t--;)this.e[t].move(),this.e[t]._des&&this.e.splice(t,1)}clrC(t){t.reset||t.resetC(),t.clearRect(t.vX,t.vY,800,608),t.clr=!0}draw(){let t=!1;if($R.upd){if(this.dyn.clr&&this.sta.clr&&0===this.e.length)return t;this.dyn.clr&&!this.e.length||(this.dyn.upd=!0,this.clrC(this.dyn),t=!0),this.sta.clr||(this.sta.upd=!0,this.clrC(this.sta),t=!0),this.a.for(t=>{t.ctx.upd&&t.draw()}),this.e.for(t=>t.draw())}else this.dyn.reset=!1,this.sta.reset=!1,this.clrC(this.sta),this.clrC(this.dyn),this.dyn.upd=!0,this.sta.upd=!0,this.a.for(t=>t.draw()),this.e.for(t=>t.draw()),t=!0;if(7===this.i&&this.dyn.upd){$R.player&&($R.player.draw(),t=!0);let s=$R.Col[1].obj;s.length&&(s.for(t=>t.draw()),t=!0)}return this.dyn.upd=!1,this.sta.upd=!1,t}},Core.$R=class{#x;#y;#time;#otime;#death;#saveData;#tempSave;#saveStatus;#mainRun;#int;static rdSeed=Date.now();constructor(t,s,i=0){this.G=Object.freeze(t),this.startR=0,this.endR=this.G.R.findIndex(t=>1===t.type);let e=$("screen");App.gC("run","smooth")?e.style.imageRendering="":e.style.imageRendering="pixelated",this.targetSf=e.ap(El("canvas","surf",{width:800,height:608})).transferControlToOffscreen().getContext("2d",{alpha:!1}),this.targetSf.imageSmoothingEnabled=!1,this.sf=[];for(let t=0;t<26;t++){25===t&&(this.GUI=e.ap(El("div")),this.GUI.id="GUI");let s=new OffscreenCanvas(800,608).getContext("2d",{alpha:0!==t});s.imageSmoothingEnabled=!1,s.resetC=function(){this.setTransform(1,0,0,1,-this.vX,-this.vY),this.reset=!0},this.sf.push(s)}this.#int=20,this.startMode=0,this.#saveStatus=0,this.#tempSave=s,this.bgmMode=i,this.sTime=$("g-time"),this.sTime.val=0,this.sTime.tx("00:00:00"),this.sDth=$("g-dth"),this.sDth.tx("0"),this.sRoom=$("g-room"),this.sRoom?(this.sPlyX=$("g-plyX"),this.sPlyY=$("g-plyY"),this.sPlyA=$("g-plyA"),this.sFps=$("g-fps"),this.sRps=$("g-rps"),this.sPer=$("g-per"),this.sPerD=$("g-perD"),this.fps=-1,this.rps=0,this.per=0,this.perD=0,this.fpsT=0,this.#mainRun=this.mRun.bind(this),this.draw=this.mDraw.bind(this)):(this.#mainRun=this.main.bind(this),this.draw=this.#draw.bind(this))}init(t){$("loading").style.background="";let s=0,i={},e=[],h=[];const r=s=>{UI.alert("游戏资源加载失败，请检查网络连接"),t(s)},l=["pli","plr","plj","plf","plt","plb"];this.bgm=new Au.Bgm,this.G.R.for(t=>{let a=t.bg.m+(t.bg.id??0)+(t.bg.g??"");i[a]?t.bg=i[a]:(s++,i[a]=t.bg,Res.loadBg(t.bg,0,1).then(t=>{3!==t.m&&(t.fill=this.sf[0].createPattern(t.c,"repeat"))}).catch(r)),t.Spr={};for(let e=t.spr.length;e--;){let h=Res.sprList[e],a="";for(let s in t.col)t.col[s].split("|").includes(h)&&(a=s);let o=h+t.spr[e]+a;if(i[o])"ply"===h&&l.for(s=>t.Spr[s]=i[s+o]),t.Spr[h]=i[o];else{s++,t.Spr[h]=i[o]=[];let n=Res.loadSpr(h,t.spr[e],a,1,i[o]);"ply"===h&&(l.for(s=>t.Spr[s]=i[s+o]=[]),n.then(s=>l.for((i,e)=>{let h=e<2?4*e:2*e+4;t.Spr[i].push(...s.slice(h,e<2?h+4:h+2))}))),n.catch(r)}}t.txt=[];try{Core.dec.room(t.obj,t=>t,(i,e,h,l)=>{if(42!==i)return;s++;let a=l.add,o=new Image,n=[El("canvas",0,{width:a.w,height:a.h})];n.x=n.y=0,n.bL=n.w=a.w,n.bT=n.h=a.h,n.bR=n.bB=0,n.px=!0,t.txt.push(n),o.onload=()=>{let t=n[0].getContext("2d");t.drawImage(o,0,0);let s=t.getImageData(0,0,n.w,n.h).data;for(let t=n.h;t--;)for(let i=n.w;i--;)s[4*(t*n.w+i)+3]>127&&(i<n.bL&&(n.bL=i),i>n.bR&&(n.bR=i),t<n.bT&&(n.bT=t),t>n.bB&&(n.bB=t));n.boxL=-n.bL,n.boxT=-n.bT,n.boxW=n.bR-n.bL+1,n.boxH=n.bB-n.bT+1,n.mask=[[]];for(let t=n.bT;t<=n.bB;t++)for(let i=n.bL;i<=n.bR;i++)n.mask[0].push(s[4*(t*n.w+i)+3]>127?1:0);Res.push("svg text")},o.onerror=r,o.src=Res.svgTxt(a)})}catch(t){console.error(t),UI.alert("房间内容解析错误"),s++,r()}if(t.type){t.bobj=JSON.parse(t.bobj);for(let s in t.bobj)t.bobj[s]=t.bobj[s].add;if(t.bobj.gov){let i={...t.bobj.gov};delete i.tml,delete i.mov;let l=JSON.stringify(i),a=h.indexOf(l);if(-1===a){s++;let a=new Image,o=[El("canvas",0,{width:800,height:608})];o.boxL=o.x=400,o.boxT=o.y=304,o.boxW=o.w=800,o.boxH=o.h=608,o.bT=o.bL=0,t.sprGO=[o],e.push(t.sprGO),h.push(l),a.onload=()=>{o[0].getContext("2d").drawImage(a,0,0),Res.push("svg text")},a.onerror=r,a.src=Res.svgGO(i)}else t.sprGO=e[a]}}if(t.bgm.m>1){let s;if(this.bgmMode);else switch(t.bgm.m){case 2:s=t.bgm.i;break;case 3:s=`https://music.163.com/song/media/outer/url?id=${t.bgm.i}.mp3`}t.bgm.a=0!==t.bgm.a,t.bgm.l=0!==t.bgm.l,t.bgm.src=s}t.vM=2===t.view}),this.#tempSave&&(this.#saveData=saveCache),Res.reset(s)}exit(){this.bgm.destroy(),$c("surf",$("screen")).for(t=>t.remove()),this.GUI.remove(),cancelAnimationFrame(this.drawId),clearInterval(this.run),this.run=0,$R=null}start(t){this.#time=0,this.#otime=Date.now(),this.#death=0,this.room=-1,this.fls=0,this.VAR={...this.G.VAR},this.L=[];for(let t=0;t<12;t++)this.L[t]=new Core.Layer(t);this.Col=[{meet:(t,s,i,e,h,r,l)=>{if(this.player){let s=this.player.B[0]+.5<<0,i=this.player.B[1]+.5<<0,a=this.player.B[2]+.5<<0,o=this.player.B[3]+.5<<0;if(r>s&&l>i&&e<a&&h<o&&this.player._meet(0,0,s,i,a,o,t))return this.player}}},{obj:[],meet(t,s,i,e,h,r,l){for(let s=0;s<this.obj.length;s++){let i=this.obj[s],a=i.B[0],o=i.B[1],n=i.B[2],p=i.B[3];if(r>a&&l>o&&e<n&&h<p&&i._meet(0,0,a,o,n,p,t))return 2!==t.cm&&50!==t.obj&&37!==t.obj||(i.des=-1),i}}}],$C.keyResetAll(),-1===t?this.#saveData?this.load():this.roomTo(0):this.roomTo(t??this.startR),this.main(),(this.plyX||this.plyY)&&this.save(),this.run&&clearInterval(this.run),this.run=setInterval(this.#mainRun,this.#int),this.anm=0;let s=App.gC("run","fps");this.autoFps=s<0,this.fpsCount=0,this.anmInt=this.autoFps?100/6:1e3/s,this.draw()}end(){}save(t=!0,s,i){this._r&&0!==this._r.type&&4!==this._r.type&&(t||this.#saveData)&&(t&&(this.#saveData={r:this.room,x:s??this.plyX,y:i??this.plyY,v:{...this.VAR}}),Object.assign(this.#saveData,{time:this.#time,death:this.#death}),this.#tempSave&&(saveCache=this.#saveData))}load(){let t=this.#saveData;t&&(this.VAR={...t.v},this.#time=t.time,this.#death=t.death,this.sDth.innerText=this.#death,this.roomTo(t.r,t.x,t.y))}pause(){this.run&&(clearInterval(this.run),this.run=0)}resume(){this.run=setInterval(this.#mainRun,this.#int)}initPly(t){let s=this._r.bobj.ply;t.jump=s.sJump?this.#saveData?.j??s.jump:s.jump,t.gravDir=s.sGravDir?this.#saveData?.gd??s.gravDir:s.gravDir,t.conShoot=s.conShoot,t.adMove=s.adMove}dec(t){let s=0;if(this.L[0].clear(),this.upd=!1,Core.dec.room(t.obj,t=>this.L[t].clear(),(i,e,h,r)=>{if(0===i)return t.x=e+17,void(t.y=h+23);let l=new Core.ObjRun(i,e,h,r.add.dep,42===i?[t.txt[s++]]:r.spr);delete r.add.dep,Object.assign(l,r.add),l.spr[0].tile&&(l.tile=!0,l.til>=1e3&&(l.til-=1e3),l.tb=15&l.til,l.tc=l.til>>4&15),r.def&&(l.def=r.def)}),0===t.type&&(t.x=t.y=0),this.#x||this.#y)this.player=new Core.ObjPly(this.#x,this.#y);else if(t.x||t.y){this.player=new Core.ObjPly(t.x,t.y);let s=this.player.gravDir;270!==s&&(this.player.gravDir=270,this.player.setGrav(s))}else this.player=null;this.updView();let i=this.vX,e=this.vY;this.sf.for(t=>{t.vX=i,t.vY=e}),i-=32,e-=32;let h=i+864,r=e+672;this.L.for(t=>t.o.for(t=>{t.init(),t.activate(i,e,h,r)}))}roomTo(t,s=0,i=0){console.time("Room"+t);let e=this.G.R[t];if(this.room!==t){1===e.bgm.m?this.bgm.stop():e.bgm.m>1&&(this.bgm.vol=e.bgm.v??100,this._r&&this._r.bgm.src===e.bgm.src?this._r.bgm.l!==e.bgm.l&&e.bgm.a&&e.bgm.l&&0===this.bgm.state&&this.bgm.play():(this.bgm.url=e.bgm.src,e.bgm.a&&this.bgm.play()),this.bgm.loop=e.bgm.l),this.room=t,this._r=e,this.bg=e.bg;for(let t in e.Spr)if(Res.spr[t]){let s=Res.spr[t],i=e.Spr[t];s.splice(0,s.length,...i),s.x=i.x,s.y=i.y,s.w=i.w,s.h=i.h,s.n=i.n,s.ims=i.ims,s.px=i.px,s.mask=i.mask,s.bL=i.bL,s.bT=i.bT,s.boxL=i.boxL,s.boxT=i.boxT,s.boxW=i.boxW,s.boxH=i.boxH}else Res.spr[t]=e.Spr[t]}this.plyX=0,this.plyY=0,this._vX=0,this._vY=0,this.trg=[],this.warpTimer=-1,this.Col.length=2,this.Col[1].obj.length=0;for(let t=0;t<Lib.obj.length+4;t++)this.Col.push(new Core.ColTree(e.w,e.h,t+2));this.#x=s,this.#y=i,this.dec(e),this.vC=!1,this.#saveData?(1===e.type&&(this.#saveData.clr=1),this.#saveStatus=1+this.#saveData.clr):this.#saveStatus=0,this.sRoom&&(this.sRoom.innerText=this._r.name),console.timeEnd("Room"+t)}warp(t,s=0,i=0,e=0){let h=128===t?this.room+1:this.G.R.findIndex(s=>s.id===this._r.id+t);if(this.G.R[h])if(this.player&&(this.player.frozen=!0),1===s)if(h===this.room){if(i||warpY)this.player=new Core.ObjPly(i,e);else if(this._r.x||this._r.y){this.player=new Core.ObjPly(this._r.x,this._r.y);let t=this.player.gravDir;270!==t&&(this.player.gravDir=270,this.player.setGrav(t))}}else this.roomTo(h,i,e);else switch(this.warpTo=h,this.warpS=s,this.warpX=i,this.warpY=e,s){case 0:this.flash("#000",0,1,25),this.warpTimer=30}}flash(t,s,i,e){this.sf[25].fillStyle=t,this.sf[25].clr=!1,this.flf=s,this.flt=i,this.fls=(i-s)/e}get vX(){return this._vX<<0}set vX(t){let s=t<<0!=this._vX<<0;this._vX=t,s&&(this.vC=!0)}get vY(){return this._vY<<0}set vY(t){let s=t<<0!=this._vY<<0;this._vY=t,s&&(this.vC=!0)}updView(){this.vX=800*(this.plyX/800<<0),this.vY=608*(this.plyY/608<<0)}get time(){return this.#time}get dth(){return this.#death}addDth(){this.sDth.innerText=++this.#death}get svS(){return this.#saveStatus}get tSec(){return this.#time/1e3<<0}get tMin(){return this.tSec/60<<0}newGame(){let t=()=>{this.G.R[this.room+1]&&(this.player&&(this.player.frozen=!0),this.flash("#000",0,1,40),this.warpTimer=50,this.startMode=1,this.#saveData=null)};this.#saveData?UI.confirm("确定要重新开始游戏？").then(s=>{s.i||t()}):t()}loadGame(){this.#saveData&&(this.player&&(this.player.frozen=!0),this.flash("#000",0,1,40),this.warpTimer=50,this.startMode=2)}main(){if((this.warpTimer>0||UI.bg.n)&&$C.keyPauseAll(),-1===this.warpTimer)this._r.type&&($C.keyPrs("f2")?(this.player&&(this.player.frozen=!0),this.flash("#000",0,1,40),this.warpTimer=50,this.warpTo=this.startR,this.warpS=this.warpX=this.warpY=0):1!==this._r.type&&$C.keyPrs("r")&&(4===this._r.type?this.roomTo(this.room):(this.save(!1),this.load())));else if(0===this.warpTimer)switch(this.save(!1),this.startMode){case 0:switch(this.roomTo(this.warpTo,this.warpX,this.warpY),this.warpS){case 0:case 3:this.flash("#000",1,0,25)}break;case 2:this.startMode=0,this.load(),this.flash("#000",1,0,25);break;case 1:this.startMode=0,this.roomTo(this.room+1),this.flash("#000",1,0,25),this._r.type&&(this.plyX||this.plyY)&&this.save()}else this.warpTimer--;let t=this.Col[1].obj;this.L.for(t=>t.iter(t=>t.step0())),this.L.for(t=>t.iter(t=>t.timer())),this.L.for(t=>t.iter(t=>t.step1())),t.for(t=>t.step()),this.player&&this.player.step(),this.L.for(t=>t.iter(t=>t.move())),this.L.for(t=>t.iter(t=>t.collision())),this.player&&this.player.move();for(let s=t.length;s--;)t[s].move(),t[s].des<0&&t.splice(s,1);this.L.for(t=>t.iter(t=>t.step2())),this.L.for(t=>t.iter(t=>t.resetStatus())),this.player&&this.player.resetStatus(),this.L.for(t=>t.gc());let s=this.trg;for(let t=s.length;t--;)1===s[t]?s[t]=2:3===s[t]&&(s[t]=0);if(this.fls&&(Math.abs(this.flt-this.flf)>Math.abs(this.fls)?this.flf+=this.fls:(this.flf=this.flt,this.fls=0)),$C.keyClrAll(),this.updView(),this.vC){this.upd=!1,this.vC=!1;let t=this.vX,s=this.vY;this.sf.for(i=>{i.vX=t,i.vY=s});let i=t+800,e=s+608;this.L.for(h=>{h.a.length=0,h.o.for(h=>h.activate(t,s,i,e))})}let i=Date.now();2!==this._r.type||this.#saveData?.clr||(this.#time+=i-this.#otime);let e=this.tSec;e!==this.sTime.val&&(this.sTime.val=e,this.sTime.innerText=Date.cT(e)),this.#otime=i}mRun(){let t=performance.now();this.main(),this.fps++,this.per+=performance.now()-t;let s=Date.now()-this.fpsT;if(s>=1e3){if(this.fps){this.fps<30?this.sFps.style.color="#d00":this.sFps.style.color="",this.sFps.innerText=this.fps,this.sRps.innerText=this.rps;let t=this.per/5+.5<<0;this.sPer.style.color=t>50?"#d00":"",this.sPer.innerText=t+"%",t=this.perD/5+.5<<0,this.sPerD.style.color=t>50?"#d00":"",this.sPerD.innerText=t+"%",this.fps=0,this.rps=0,this.per=0,this.perD=0}this.fpsT+=s>1500?s:1e3}if(this.sPlyX.val!==this.plyX){this.sPlyX.val=this.plyX,this.sPlyX.innerText=this.plyX.toFixed(2);let t=this.plyX%3;this.sPlyA.val!==t&&(this.sPlyA.val=t,this.sPlyA.innerText=t.toFixed(2))}this.sPlyY.val!==this.plyY&&(this.sPlyY.val=this.plyY,this.sPlyY.innerText=this.plyY.toFixed(2))}#draw(t){let s=t-this.anm;if(Math.round(s)>=this.anmInt<<0){let i=!1,e=this.sf[25];if(e.clr||(e.clearRect(0,0,800,608),e.clr=!0,i=!0),this.flf>0&&(e.globalAlpha=this.flf,e.fillRect(0,0,800,608),e.clr=!1,this.flf>=1&&this.run))return this.targetSf.drawImage(e.canvas,0,0),void(this.drawId=window.requestAnimationFrame(this.draw));if(!this.upd){let t=this.sf[0],s=this._r.bg;switch(s.m){case 0:t.fillStyle=s.fill,t.fillRect(0,0,this._r.w,this._r.h);break;case 2:t.drawImage(s.c,0,0,this._r.w,this._r.h);break;case 3:t.fillStyle=s.g,t.fillRect(0,0,800,608);break;default:t.fillStyle=s.fill,t.fillRect(0,0,800,608)}}this.L.for(t=>{t.draw()&&(i=!0)}),i&&(this.targetSf.drawImage(this.sf[0].canvas,0,0),this.L.for((t,s)=>{(t.a.length||7===s)&&(this.targetSf.drawImage(t.sta.canvas,0,0),this.targetSf.drawImage(t.dyn.canvas,0,0))}),this.flf>0&&this.targetSf.drawImage(this.sf[25].canvas,0,0),this.rps++),this.upd=!0,s-this.anmInt<=1||s-this.anmInt>=this.anmInt?this.anm=t:this.anm+=this.anmInt}this.run&&(this.drawId=window.requestAnimationFrame(this.draw))}mDraw(t){let s=performance.now();this.#draw(t),this.perD+=performance.now()-s}},Core.QTree=class{constructor(t,s,i,e,h){this.L=t,this.T=s,this.W=i,this.H=e,this.R=t+i,this.B=s+e,this.ch=[null,null,null,null],this.len=4,this.obj=[],this.ind=h}expand(){let t=this.W>>6<<5,s=this.H>>6<<5;t<32||s<32||(this.ch[0]=new Core.QTree(this.L,this.T,t,s,this.ind),this.ch[1]=new Core.QTree(this.L+t,this.T,this.W-t,s,this.ind),this.ch[2]=new Core.QTree(this.L,this.T+s,t,this.H-s,this.ind),this.ch[3]=new Core.QTree(this.L+t,this.T+s,this.W-t,this.H-s,this.ind),this.obj.splice(0).for(t=>{t.colP[this.ind]=null,this.add(t)}))}loc(t){let s=this.ch;if(s[0])for(let i=0;i<this.len;i++)if(t.B[0]>=s[i].L&&t.B[1]>=s[i].T&&t.B[2]<=s[i].R&&t.B[3]<=s[i].B)return s[i].loc(t);return this}add(t){let s=this.ch;if(!s[0]&&this.obj.length>16&&this.expand(),s[0])for(let i=0;i<this.len;i++)if(t.B[0]>=s[i].L&&t.B[1]>=s[i].T&&t.B[2]<=s[i].R&&t.B[3]<=s[i].B)return s[i].add(t);t.colP[this.ind]=this.obj,t.colId[this.ind]=this.obj.push(t)-1}meet(t,s,i,e,h,r,l){let a=this.ch;if(a[0])for(let o=0;o<this.len;o++)if(r>a[o].L&&l>a[o].T&&e<a[o].R&&h<a[o].B){let n=a[o].meet(t,s,i,e,h,r,l);if(n)return n}for(let a=this.obj.length;a--;){let o=this.obj[a];if(o!==t&&(o.calcBox(),r>o.B[0]&&l>o.B[1]&&e<o.B[2]&&h<o.B[3]&&o.h&&t._meet(s,i,e,h,r,l,o)))return o}}find(t,s,i,e,h){let r=this.ch;if(r[0])for(let l=0;l<this.len;l++)i>r[l].L&&e>r[l].T&&t<r[l].R&&s<r[l].B&&r[l].find(t,s,i,e,h);for(let r=this.obj.length;r--;){let l=this.obj[r];l.calcBox(),i>l.B[0]&&e>l.B[1]&&t<l.B[2]&&s<l.B[3]&&l.h&&h.push(l)}}},Core.ColTree=class extends Core.QTree{constructor(t,s,i){super(0,0,0,0,0),this.ch.length=0,this.ind=i>5?0:1;let e=t/800<<0,h=s/608<<0;for(let i=0;i<h;i++){let r=i===h-1?s-608*i:608;for(let s=0;s<e;s++)this.ch.push(new Core.QTree(800*s,608*i,s===e-1?t-800*s:800,r,this.ind))}this.len=this.ch.length,this.meet=this.find=this.skip}add(t){if(this.meet=this.__proto__.meet,this.find=this.__proto__.find,!t.colMov)for(let s=0,i=this.ch;s<this.len;s++)if(t.B[0]>=i[s].L&&t.B[1]>=i[s].T&&t.B[2]<=i[s].R&&t.B[3]<=i[s].B)return i[s].add(t);t.colP[this.ind]=this.obj,t.colId[this.ind]=this.obj.push(t)-1}upd(t){let s=this.loc(t),i=t.colP[this.ind],e=s.obj;if(e!==i){let h=t.colId[this.ind];for(i.splice(h,1);h<i.length;h++)i[h].colId[this.ind]=h;!s.ch[0]&&e.length>16?s.add(t):(t.colP[this.ind]=e,t.colId[this.ind]=e.push(t)-1)}}findAll(t,s,i,e){let h=[];return this.find(t,s,i,e,h),h}skip(){}};