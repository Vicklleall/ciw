const $E={edit:!0,inEdit:null,nowTab:0,_R:null,RoomID:0,_G:null,_r:null,_O:null,$O:null,showInvis:App.gC("edit","showInvis"),tab:$t("div",$("tab")),async fixH(t,i){let s=t.pd;if(t.pd=!0,await docReady,!s){t.pd=!1;let i=t.className;t.className="cat",t.style.height="auto",t.style.height=t.clientHeight+"px",t.className=i}i?.(t)},setGame(t){$E.clrSf($E.sfB),$E.clrSf($E.sfE),$E.sfO.clear(),$E.sfG.resetTransform(),$E.sfG.clearRect(0,0,864,672),$E._r=null,$E.RoomID=t.RID??0,$c("room").for(t=>t.remove()),$E._G&&$E._G.id&&(t.id=$E._G.id),$E._G=t,$E.preset.set(),$E._R=[],t.R.for(t=>{let i=new $E.Room(2,t);$E.addRoom(i)}),t.R=$E._R;let i=$c("cat"),s=i[0].ch,e=i[1].ch,d=$c("room");s[1].set(t.N||""),e[1].set(t.S||1),$("vars").innerHTML="";for(let i in t.VAR)$E.addVar(i);$E.fixH($c("cat")[1]),$E.tab[0].click(),d.length?d[0].firstChild.click():($("crtr")._s(),$E.fixH($("room"))),Res.loc=t._s,saveCache=null,this.modified=!1},openGame(){CIW.find("proj").then(t=>{let i="";t.for((t,s)=>i+=`<div class='proj' id='${s}'><div class='dots'>${t.N}</div><span>0{6j} ${t._c??"0{6k}"}</span><span>0{6l} ${t._u??t._c??"0{6k}"}</span><div class='del'>${UI.ico("trash")}</div></div>`);let s=new UI.M(422).h("0{6m}").a(`${i}<div class='proj'>${UI.ico("add")}0{6n}</div>`),e=$c("proj");$E._G&&s.cb(),e.for(i=>{i.id&&(i.lastChild.onclick=s=>{s.stopPropagation(),UI.confirm("0{6o}").then(s=>{s.i||CIW.del("proj",t[i.id].id).then(t=>i.remove())})}),i.onclick=()=>$E.confirm(()=>{$E._G=null,$E.setGame(i.id?t[i.id]:{_a:[U$.id],_c:Date.cD(new Date),_s:[],_o:[],_h:[],R:[],VAR:{}}),s.close(),$E._O=null,$E.$P()})})})},confirm(t){this.modified?UI.confirm("0{6p}").then(i=>{i.i||t()}):t()},open(t,i){"_"===t[0]&&Ipc.read(t.slice(1),1,t=>{t?$E.confirm(()=>$E.import.ciwp(t,1)):i&&$E.openGame()})},exportGame(t=1,i=0){if(t&&!this._G.N)return void UI.$a("0{6q}");this._r&&this._r.enc(1);const s=this._G;let e={N:s.N,R:[],VAR:s.VAR,S:s.S,_s:s._s,_o:s._o};t&&(e.C=s.C,e._a=s._a,i||(e._c=s._c,e._u=Date.cD(new Date),e.RID=this.RoomID,e._h=s._h));for(let t=s.R.length;t--;)e.R[t]=s.R[t].save(i);return e},set modified(t){this.savedGame=t?"":JSON.stringify(this.exportGame(0))},get modified(){return!!this._G&&this.savedGame!==JSON.stringify(this.exportGame(0))},addVar(t,i){let s=$("vars").ap(El("div","rl")),e=UI.I("0{6r}: ",{l:8,value:t??""},96),d=UI.I("0{6s}:",{type:"number",value:$E._G.VAR[t]??i??0,m:-999,M:999},48),r=El("div","ab del");i&&($E._G.VAR[t]=i),t&&(e.val=t),e.style.marginRight="16px",e.on(function(t){return(t=t.trim())?void 0!==$E._G.VAR[t]?(UI.$a("0{6t}"),void this.set("")):(this.set(t),delete $E._G.VAR[this.val],void($E._G.VAR[this.val=t]=this.nS().v)):(UI.$a("0{6u}"),void this.set(""))}),d.on(function(t){let i=this.pS().v;i&&($E._G.VAR[i]=t)}),r.innerHTML=UI.ico("trash"),css(r,{top:"5px",right:"8px"}),r.onclick=function(){delete $E._G.VAR[this.pS(2).v],s.remove(),$E.fixH($("vars").pN)},s.ap(e,d,r),$E.fixH($c("cat")[1])},async loadTh(t,i,s){Res.reset();for(let i=Res.sprList.length-t.spr.length;i--;)Res.push();this.tileCol.spr=null,this.clrSf(this.sfB),this.sfO.clear();let e=[Res.loadBg(t.bg)];for(let i=0;i<t.spr.length;i++){let s="";for(let e in t.col)t.col[e].split("|").includes(Res.sprList[i])&&(s=e);e.push(Res.loadSpr(Res.sprList[i],t.spr[i],s))}try{let s=(await Promise.all(e))[0];this.loadComp=i?()=>{for(let t in Res.spr)this.setTile(Res.spr[t]);i(s)}:()=>{for(let t in Res.spr)this.setTile(Res.spr[t]);this._r.col=t.col,this._r.spr=t.spr,this._r.setBg(s),this.setBg(s),this._r.drawBg(),this.sfO.redraw()}}catch{Res.fail(),s?s():(this._r.drawBg(),this.sfO.redraw())}},setTile(t){let i=$("tile");i.spr[t.name]&&this.drawThn(i.spr[t.name],t)},drawThn(t,i,s=1){let e,d=t.getContext("2d"),{w:r,h:o}=i;if("lsr"===i.name){o=32;let t=El("canvas",0,{width:r,height:o}),s=t.getContext("2d");s.drawImage(i[1],0,0,r,32),s.drawImage(i[0],0,0),e=t}else e=i[0];if(s&&d.clearRect(0,0,32,32),r<32&&o<=32||o<32&&r<=32)d.drawImage(e,i.x?16-(r>>1):0,"tp"===i.name||"grs"===i.name?32-o:i.y?16-(o>>1):0,r,o);else if(r>32){let t=Math.min(32/r,32/o);r*=t,o*=t,d.drawImage(e,16-(r>>1),"grs"===i.name?32-o:16-(o>>1),r,o)}else d.drawImage(e,0,0)},BObj(t,i,s,e){let d=UI.B2(i).on(t=>{$E.$P();let i=$E._r.bobj[t.buildIn.id];"gov"===t.buildIn.id?i.drawTxt():($E.sfE.$d(-32,-32,$E._r.w+64,$E._r.h+64),$E.C.dM(0,0,1)),$E.tab[3].click(),$E.$O=[i],$E.$P($E.$O,t.buildIn)});return d.id="bi-"+t,d.buildIn={id:t,name:i,spr:Res.spr[s],add:e??[]},d},setEdit(t,i,s,e){dac($("L"),""),t.otx=t.innerText,t.tx("0{6v}"),t.style.pointerEvents="auto",this.inEdit=t,this.editClick=i,this.editMove=s,e?.()},exitEdit(){ac($("L")),this.inEdit.tx(this.inEdit.otx),this.inEdit.style.pointerEvents="",this.inEdit=null,this.editClick=null,this.editMove=null,this.ctrl.dM(0,0,1)},Room:class{constructor(t,i){if(0===t||i&&0===i.type){let t=$c("room");for(let i=$E._R.length;i--;)$E._R[i].ind++,t[i].ind++;this.ind=0,$E._R.unshift(this)}else this.ind=$E._R.push(this)-1;this.objNum=0,this.ly=[];for(let t=12;t--;)this.ly[t]=$E.L(t,$E.sfO);if(this.editX=this.editY=0,this.undo=[],this.redo=[],this.bg={id:0,m:0},this.spr=[...Lib.thm],this.bgm={m:0},i?(Object.assign(this,i),this.type?this.decB(i.bobj):delete this.bobj,this.spr.length<Lib.thm.length&&this.spr.push(...Lib.thm.slice(this.spr.length))):(this.type=t,this.obj="|||||||||||",this.w=800,this.h=608,this.bgm={m:0},t&&this.decB()),!this.name)switch(this.type){case 0:this.name="rTitle";break;case 1:this.name="rEnd";break;default:this.name="Room"+ ++$E.RoomID}if(void 0===this.id){let t=[];for(let i=128;i--;)t.push(0);for(let i=$E._R.length;i--;)t[$E._R[i].id]=1;this.id=t.indexOf(0)}}getType(){return["0{6w}","0{6x}","0{6y}","0{6z}","0{70}"][this.type]}setNum(){$c("room")[this.ind].ch[3].tx(this.objNum+"0{71}")}setWH(t,i){2!==this.type&&4!==this.type||(t&&(this.w=t),i&&(this.h=i),$c("room")[this.ind].ch[2].tx(this.w+"×"+this.h),this.editX+800>this.w&&(this.editX=this.w-800),this.editY+608>this.h&&(this.editY=this.h-608),this.setBar())}setBar(){css($("hbar"),{width:8e4/this.w+"%",transform:`translateX(${this.editX/this.w*864}px)`}),css($("vbar"),{height:60800/this.h+"%",transform:`translateY(${this.editY/this.h*672}px)`}),$E.resetTransform($E.sfB),$E.resetTransform($E.sfE),$E.sfO.translate(this.editX-32,this.editY-32),$E.sfO.redraw(),$E.sfE.$d(this.editX-32,this.editY-32,864,672),this.drawBg(),$E.sfG.canvas.style.display||$E.grid.draw(),($E.$O||$E._O)&&$E.C.dM(0,0,1)}setFill(){3!==this.bg.m&&(this.bgFill=$E.sfB.createPattern(this.bg.c,"repeat"))}setBg(t){this.bg=t,this.setFill()}drawBg(){let t=$E.sfB;switch($E.clrSf(t),this.bg.m){case 0:t.fillStyle=this.bgFill,t.fillRect(0,0,this.w,this.h);break;case 2:t.drawImage(this.bg.c,0,0,this.w,this.h);break;case 3:t.fillStyle=this.bg.g,t.fillRect(this.editX,this.editY,800,608);break;default:t.fillStyle=this.bgFill,t.save(),t.translate(this.editX,this.editY),t.fillRect(0,0,800,608),t.restore()}}colBg(t,i,s,e){this.bg.g||(this.bg.g=",,,");let d=this.bg.g.split(",");""!==t&&(d[0]=t),""!==i&&(d[1]=i),""!==s&&(d[2]=s),""!==e&&(d[3]=e),this.bg.g=Res.color.gen(d),Res.color.draw(this.bg.c,this.bg.i,this.bg.g),this.setFill(),this.drawBg()}encN(t){return String.fromCharCode(t+_C.dec.bias)}encKey(t){let i=0;for(let s=t.length;s--;)i+=t.charCodeAt(s)-96<<5*s;return this.encN(i)}encNum(t){let i=t<0?-t:t,s=0;for(;s<2&&i<<0!==i;s++)i*=10;return i+=1e4*s,this.encN(t<0?3e4+i:i)}encStr(t){return _C.dec.iStr+t.replaceAll(_C.dec.rStr,"").replaceAll(_C.dec.iStr,_C.dec.rStr)+_C.dec.iStr}encArr(t){let i=_C.dec.iArr+this.encN(t.length);return t.for(t=>{switch(typeof t){case"object":i+=this.encArr(t);break;case"string":i+=this.encStr(t);break;default:i+=this.encNum(t)}}),i}encO(t){let i="";for(let s in t.add){if("dep"===s)continue;let e=t.add[s];if("til"===s&&(e=t.autoTile?t.tileInd:1e3+t.tileInd),null!=e)if("object"==typeof e)e.length&&!$M.eq(e,Lib.obj[t.cid].add[s])&&(i+=this.encKey(s)+this.encArr(e));else{if(void 0===Lib.obj[t.cid].add[s]&&("scx"===s&&1===e&&1===t.add.scy||"scy"===s&&1===e||"ang"===s&&0===e||"hd"===s&&0===e||"al"===s&&1===e||"a"===s&&0===e))continue;e!==Lib.obj[t.cid].add[s]&&(i+="string"==typeof e?this.encKey(s)+this.encStr(e):this.encKey(s)+this.encNum(e))}}return i&&(i=_C.dec.iPro+i+_C.dec.iPro),i}enc(t){let i=[],s=0,e=!1;const d=$E.C.cRc;this.flag="& !$#%",_C.dec.setFlag(this.flag);for(let r=0;r<this.ly.length;r++){let o=Lib.obj.map(t=>""),h=o.map(t=>0),a=[...h],l=0;this.ly[r].for(i=>{!t||i.add.gpi||d(i.R[0],i.LT[1],i.w,i.h,-32,-32,this.w+64,this.h+64)?(i.sid=h[i.cid]++,o[i.cid]+=this.encNum(i.x)+this.encNum(i.y)+this.encO(i),s++):$E.$O&&!e&&$E.$O.includes[i]&&(e=!0)}),i[r]="",o.forEach((t,s)=>{t&&(i[r]+=_C.dec.iObj+this.encN(s)+t),s&&(a[s]=h[l],h[s]+=h[l],l=s)}),this.ly[r].for(t=>{t.cid&&(t.sid+=a[t.cid])})}return t&&(e&&$E.$P(),s!==this.objNum&&(this.objNum=s,this.setNum())),this.obj=i.join(_C.dec.iLay)}renc(t,i){let s,e=[],d=t=>{t--&&(e[t]="",s.forEach((i,s)=>{i&&(e[t]+=_C.dec.iObj+this.encN(s)+i)})),s=Lib.obj.map(t=>"")};t??=({code:t})=>t,i??=t=>t,_C.dec.setFlag(this.flag),_C.dec.room(this.obj,d,e=>s[i(e.prop.cid)]+=t(e)),d(e.length+1),this.obj=e.join(_C.dec.iLay)}dec(){let t=$E._r;try{$E._r=this,this.objNum=0,_C.dec.setFlag(this.flag),_C.dec.room(this.obj,t=>this.ly[t].length=0,({x:t,y:i,prop:s})=>new $E.E(t,i,s)),$E._r=t,this.setNum(),t===this&&($E.sfO.redraw(),this.drawBg())}catch(i){console.error(i),UI.$a("0{72}"),$E._r=t,this.objNum=0,this.ly.for(t=>t.length=0),this.setNum(),t===this&&($E.sfO.redraw(),this.drawBg())}}encB(t=0){if(0===this.type)return"";let i={};for(let s in this.bobj)!t&&$M.eq(this.bobj[s].add,Lib.bobj[s])||(i[s]={add:this.bobj[s].add});return JSON.stringify(i)}decB(t){if(this.bobj={ply:{id:"ply",add:$M.cp(Lib.bobj.ply)},gov:{id:"gov",w:800,h:608,lib:61,svg:1,set txt1(t){this.add.txt1=t,this.drawTxt()},set txt2(t){this.add.txt2=t,this.drawTxt()},set scx(t=1){this.add.scx=t,this.drawTxt(1)},set scy(t=1){this.add.scy=t,this.drawTxt(1)},set ang(t){this.add.ang=t,this.drawTxt(1)},add:$M.cp(Lib.bobj.gov),drawTxt(t){if(t)return this.svg.onload();this.svg=new Image,this.svg.onload=()=>{$E.sfE.canvas.style.opacity=1,$E.sfE.save(),$E.sfE.resetTransform(),$E.sfE.clearRect(0,0,864,672),$E.sfE.translate(432,336),(this.add.hd||this.add.al<1)&&($E.sfE.globalAlpha=this.add.hd?.5:.5+this.add.al/2),this.add.scx&&$E.sfE.scale(this.add.scx,this.add.scy),this.add.ang&&$E.sfE.rotate(-this.add.ang*Math.DR),$E.sfE.drawImage(this.svg,-400,-304),$E.sfE.restore(),$E.sfE.$d(-32,-32,$E._r.w+64,$E._r.h+64)},this.svg.src=Res.svgGO(this.add)}}},t){"string"==typeof t&&(t=JSON.parse(t));for(let i in t)this.bobj[i]&&Object.assign(this.bobj[i].add,t[i].add)}}purge(){this.enc(1),this.ly.for(t=>t.length=0)}save(t=0){let i={...this,bg:{m:this.bg.m}};if(i.bg.m<3&&(i.bg.id=this.bg.id),this.bg.g&&"0,50,50,50"!==this.bg.g&&(i.bg.g=this.bg.g),this.type){let s=this.encB(t);"{}"===s?delete i.bobj:i.bobj=s}else delete i.bobj;delete i.ind,delete i.ly,delete i.undo,delete i.redo,delete i.bgFill,delete i.editX,delete i.editY;for(let t in i)null!==i[t]&&void 0!==i[t]||delete i[t];if(t){delete i.objNum;let t=[];i.spr.for((i,s)=>{let e=Res.sprList[s];["pst","gp","txt"].includes(e)||t.push(i===Lib.thm[s]?e:e+":"+i)}),i.spr=t}return i}},rU(t,i){let s=t.room,e=i.room?.ind??$E._R.length-1;for(let t=s.ind-1;t>=e;t--){let i=$E._R[t];$E._R[t+1]=i,i.ind++}$E._R[s.ind=e]=s,i.before(t)},rD(t,i){let s=t.room,e=i.room?.ind??0;for(let t=s.ind+1;t<=e;t++){let i=$E._R[t];$E._R[t-1]=i,i.ind--}$E._R[s.ind=e]=s,i.after(t)}};$E.addRoom=t=>{if((t.id<0||$E._R.length>127)&&($("crtr")._h(),t.id>127))return;let i=$("room"),s=El("div","room",{innerHTML:`<b><div></div><span>${t.name}</span></b><p>${t.getType()}</p><p>${t.w}×${t.h}</p><p>${t.objNum}0{71}</p>`,room:t});s.firstChild.onclick=()=>{$E._r&&$c("room now")[0].rC("now"),s.aC("now"),$E.setRoom(s.room,()=>{$E._r=null,s.rC("now")})},s.firstChild.firstChild.onmousedown=function(t){t.stopPropagation(),s.style.borderColor=this.style.background="#5c9",i.drag=s,i.dragY=t.y,i.dragI=s.room.ind,i.style.cursor="move",css($c("room"),{pointerEvents:"none"})};let e=El("div","p-btn",{innerHTML:UI.ico("copy")}),d=El("div","del",{innerHTML:UI.ico("trash")});return e.style.float="none",s.ap(e,d),t.type<2?dac(e):e.onclick=()=>{let t=s.room.save();delete t.id,$E.rU($E.addRoom(new $E.Room(t.type,t)),s.nS())},d.onclick=()=>{if($E._R.length<=1)return UI.$a("0{73}");UI.confirm("0{74}").then(t=>{if(t.i)return;let i=s.room.ind;$E._R.splice(i,1);let e=$E._r?i==$E._r.ind:0;$("crtr")._s();for(let t=Number(i);t<$E._R.length;t++)$E._R[t].ind--;e&&$c("room")[0===i|0].firstChild.click(),$E.RoomID--,s.remove()})},0===t.type?(s.firstChild.firstChild.style.pointerEvents="none",i.firstChild.after(s)):$("crtr").before(s),$E.fixH(i),s},$E.setBg=t=>{let i=$c("cat")[4].ch;switch(t.m){case 0:case 1:case 2:i[8].ch[2].set(1<<t.m);break;case 3:i[6].set(t.g)}i[4].set(3===t.m?1:t.m>3?2:4,1)},$E.setRoom=(t,i)=>{t!==$E._r&&($E.clrSf($E.sfE),$E.sfG.clearRect(0,0,896,704),$E.loadTh({spr:t.spr,col:t.col,bg:t.bg},i=>{$E._r&&$E._r.purge(),$E._r=t,$E._r.setBg(i),$E.setBg(i);let s=$c("cat"),e=s[3].ch,d=s[5].ch,r=s[19].ch;if(e[1].set(t.name),e[2].set(t.w),e[3].set(t.h),e[4].set(t.out||1),e[5].set(t.view||1),2===t.type||4===t.type)for(let t=2;t<6;t++)ac(e[t]);else for(let t=2;t<6;t++)dac(e[t]);if(d[2].set(t.bgm.m),d[2].f(t.bgm.m),0===t.type)for(let t=1;t<3;t++)dac(s[7].ch[t]);else for(let t=1;t<3;t++)ac(s[7].ch[t]);for(let i=0;i<12;i++)r[4*i+2].set(t.ly[i].vis),r[4*i+3].set(t.ly[i].lock);t.dec(),$E.$O&&$E.$P(),t.setBar(),$E.fixH(e[0].pN)},i))},$E.E=class{#t;#i;constructor(t,i,s){this.#t=t,this.#i=i,this.LT=[t,i],this.ind=s.ind,this.cid=s.cid,this.spr=s.spr.map(t=>Res.spr[t]),this.add=$M.cp(s.add),s.scx&&1!==s.scx&&(this.add.scx=this.add.scy=s.scx),s.ang&&(this.add.ang=s.ang),this.WH=!!s.add.w,this.calcRect(),s.add.txt&&(this.add.txt="",this.txt=s.add.txt),0===s.ind?$E._r.ly[7].forv(t=>{0===t.ind&&$E._r.ly[7].rm(t)}):[10,11,22].includes(s.ind)&&(this.lib=32),void 0!==this.dep&&($E._r.ly[this.dep].add(this),$E._r.objNum++),this.spr[0].tile&&(this.ti=[this.add.til/1e3<<0,this.add.til%1e3]),10===s.ind?(this.lib=49,this.dInfo=this.dG,s.add.gid||(this.add.gid=$M.id(Date.now())+$M.id(this.id))):s.add.gpi&&(this.dInfo=this.dO)}get x(){return this.#t}set x(t){this.LT[0]+=t-this.#t,this.#t=t}get y(){return this.#i}set y(t){this.LT[1]+=t-this.#i,this.#i=t}get dep(){return this.add.dep}set dep(t){t!==this.add.dep&&($E._r.ly[this.add.dep].rm(this),this.add.dep=t,$E._r.ly[t].add(this))}get autoTile(){return void 0!==this.tb&&this.add.til/1e3<<0==0}set autoTile(t){if(t)this.tb=0,this.tc=[0,0,0,0],this.add.til=0,$E.E.blkTile(this);else if(this.tile){let t=this.autoTile;this.add.til=1e3+this.tileInd,t&&$E.E.dbTile(this.#t,this.#i,this.w,this.h,this.dep)}else this.tb=0,this.tc=[0,0,0,0],this.add.til=1e3}get tile(){return void 0!==this.tb}get tileInd(){let t=0;for(let i=0;i<4;i++)3===this.tc[i]&&(t|=1<<i);return t=(t<<4)+this.tb,isNaN(t)?void 0:t}get ti(){let t=this.tileInd;if(void 0===t)throw"Error tile";return[this.autoTile?0:1,t.toString(2).padStart(8,"00000000")]}set ti(t){if(0===t[0])this.autoTile=!0;else{this.autoTile=!1;let i=t[1].length?Number("0b"+t[1]):t[1];isNaN(i)&&(i=0),this.tb=i%16;for(let t=0;t<4;t++)this.tc[t]=i&1<<t+4?3:0;this.add.til=1e3+i}}get scx(){return this.add.scx??1}set scx(t=1){this.add.scx=t,this.calcRect()}get scy(){return this.add.scy??1}set scy(t=1){this.add.scy=t,this.calcRect()}get ang(){return this.add.ang??0}set ang(t){this.add.ang=t,this.calcRect()}get a(){return this.add.a||0}set a(t){if(t!==this.add.a){let i={x:this.#t,y:this.#i,sprX:this.sprX,sprY:this.sprY,scx:this.scx,scy:this.scy,ang:this.ang};this.add.a=t,_C.moveOxy(i,this.sprX,this.sprY),this.#t=Math.round(i.x),this.#i=Math.round(i.y),this.calcRect()}}get txt(){return this.add.txt}set txt(t){if(42===this.ind)if(t.length){if(!this.add.txt.length){let t=this.add.w,i=this.add.h;this.spr=[[El("canvas",0,{width:t,height:i})]],this.spr[0].x=this.spr[0].y=0,this.spr[0].w=t,this.spr[0].h=i,this.ctx=this.spr[0][0].getContext("2d"),this.svg=new Image,this.svg.onload=()=>setTimeout(t=>{Res.fontList.load||(Res.fontList.load=!0),$E.edit&&t&&(t.spr[0].w=t.spr[0][0].width=t.add.w,t.spr[0].h=t.spr[0][0].height=t.add.h,t.ctx.drawImage(t.svg,0,0),$E.sfO.$d(t.LT[0],t.LT[1],t.w,t.h),$E.sfO.update())},Res.fontList.load?0:20,this)}}else t="ABC";this.add.txt=t,this.ctx&&this.drawTxt()}drawTxt(){this.svg.src=Res.svgTxt(this.add)}get sprX(){let t=this.add.a;return t?(--t,this.WH?1&t?this.add.w>>1:2&t?this.add.w:0:1&t?this.spr[0].w>>1:2&t?this.spr[0].w:0):this.spr[0].x}get sprY(){let t=this.add.a;return t?(--t,this.WH?1&t?this.add.h>>1:2&t?this.add.h:0:4&t?this.spr[0].h>>1:8&t?this.spr[0].h:0):this.spr[0].y}static dSpr(t,i,s,e,d,r,o,h,a){if(a){a*=Math.DR;let i=Math.cos(a),d=Math.sin(a);t.setTransform(i*o,-d*o,d*h,i*h,s+32-$E._r.editX,e+32-$E._r.editY)}else{if(1===o&&1===h)return t.drawImage(i,s-d,e-r);if(!o||!h)return;t.setTransform(o,0,0,h,s+32-$E._r.editX,e+32-$E._r.editY)}(Math.abs(o)<1||Math.abs(h)<1)&&$E.eSmth(t),t.drawImage(i,-d,-r),$E.dSmth(t),$E.resetTransform(t)}dSpr(t,i,s){$E.E.dSpr(t,i[s],this.#t,this.#i,this.sprX,this.sprY,this.scx,this.scy,this.add.ang)}draw(t){if($E.showInvis)this.add.hd?t.globalAlpha=.5:this.add.al<1&&(t.globalAlpha=.5+.5*this.add.al);else{if(this.add.hd||0===this.add.al)return;this.add.al<1&&(t.globalAlpha=this.add.al)}if(11===this.ind){let i=Res.spr.lsr;t.save(),t.translate(this.#t,this.#i),this.add.ang&&t.rotate(-this.add.ang*Math.DR),void 0!==this.add.scx&&t.scale(this.add.scx,this.add.scy??1),t.drawImage(i[1],-i.x,0,i.w,this.add.len),t.drawImage(i[0],-i.x,0),t.restore()}else if(22===this.ind){let i=this.spr[0];t.save(),t.translate(this.#t,this.#i),this.add.ang&&t.rotate(-this.add.ang*Math.DR),void 0!==this.add.scx&&t.scale(this.add.scx,this.add.scy??1);let s=this.add.len;if(s<i.h)t.drawImage(i[1],0,i.h-s,i.w,s,-i.x,0,i.w,s);else{t.drawImage(i[1],-i.x,s-i.h);for(let e=s-i.h;e>0;e-=32)e>=32?t.drawImage(i[0],0,0,i.w,32,-i.x,e-32,i.w,32):t.drawImage(i[0],0,32-e,i.w,e,-i.x,0,i.w,e)}t.restore()}else if(this.tile&&this.spr[0].length>1)switch(this.spr[0].length){case 2:this.dSpr(t,this.spr[0],(this.tb>7)<<0);break;case 4:this.dSpr(t,this.spr[0],this.tc.includes(3)?0:(3==(3&this.tb))+((12==(12&this.tb))<<1));break;case 20:this.dSpr(t,this.spr[0],this.tb);for(let i=0;i<4;i++)3===this.tc[i]&&this.dSpr(t,this.spr[0],16+i)}else this.dSpr(t,this.spr[0],0);t.globalAlpha<1&&(t.globalAlpha=1)}get R(){return this.WH||this.sprW===this.spr[0].w&&this.sprH===this.spr[0].h||this.calcRect(),this.LT}calcRect(){let t=this.spr[0],i=(this.WH?this.add.w:t.w)*this.scx,s=(this.WH?this.add.h:t.h)*this.scy,e=[];this.sprW=t.w,this.sprH=t.h,11===this.ind?s=Math.max(this.add.len,Res.spr.lsr.h)*this.scy:22===this.ind&&(s=this.add.len*this.scy),_C.calcBox(this,i,s,this.sprX,this.sprY,[],e,[]),this.LT[0]=e[0],this.LT[1]=e[1],this.w=e[2]-e[0],this.h=e[3]-e[1]}gO(){if(this.add.gpi)for(let t of $E._r.ly)for(let i of t)if(10===i.ind&&this.add.gpi.startsWith(i.add.gid))return i}gG(){let t=[],i=Infinity;switch(this.add.gpm[0]){case 1:i=this.add.gpm[1],_C.D.circle(i,this.add.gpm[2]).for(i=>t.push({x:Math.round(this.#t+i.x),y:Math.round(this.#i+i.y)}));break;case 2:i=this.add.gpm[1];let s=this.add.gpm[3];_C.D.polygon(i,s,this.add.gpm[2]).for(i=>t.push({x:Math.round(this.#t+i.x),y:Math.round(this.#i+i.y)})),i*=s}let s=this.add.gid;return $E._r.ly.for(e=>e.for(e=>{if(e.add.gpi?.startsWith(s))if(0===this.add.gpm[0])e.add.gpi=s+(t.push({x:e.x,y:e.y,o:e})-1);else{let d=0|e.add.gpi.slice(s.length);if(d>=i)return delete e.add.gpi;t[d].o=e}})),t}group(t){let i=this.add.gid,s=this.gG();if(this.add.gpm[0]){let e=-1,d=Infinity;s.for((i,s)=>{if(i.o)return;let r=(i.x-t.x)**2+(i.y-t.y)**2;r<d&&(d=r,e=s)}),e>=0&&(t.add.gpi=i+e,this.aG(t,s[e]),$E.sfO.update())}else t.add.gpi=i+s.length;10!==t.ind&&t.add.gpi&&(t.dInfo=t.dO)}aG(t,i){if(!t)return;10===t.ind&&t.mG(i.x-t.x,i.y-t.y);let[s,e]=t.LT,{w:d,h:r}=t;t.x=i.x,t.y=i.y,t.autoTile&&$E.E.rTile(s,e,d,r,t),$E.sfO.$d(s,e,d,r),$E.sfO.$d(t.R[0],t.LT[1],t.w,t.h)}dG(t=1){let i=this.#t,s=this.#i,e=$E.sfE;this.add.gpi&&1===t&&this.dO(),this.gG().for(d=>{e.globalAlpha!==t&&(e.globalAlpha=t),$E.C.dLine(i,s,d.x,d.y),d.o&&($E.C.dSelect(d.o.R[0],d.o.LT[1],d.o.w,d.o.h,"#f5d"),10===d.o.ind&&d.o.dG(t/2))}),1!==t&&(e.globalAlpha=1)}dO(t=.75){let i=this.#t,s=this.#i,e=$E.sfE,d=this.gO();d?(e.globalAlpha=t,$E.C.dLine(i,s,d.x,d.y,"#5df"),$E.C.dSelect(d.R[0],d.LT[1],d.w,d.h,"#5df"),d.add.gpi&&d.dO(t/2)):10!==this.ind&&(delete this.add.gpi,this.dInfo=null),e.globalAlpha=1}pG(){this.add.gpm[0]?(this.gG().for(t=>this.aG(t.o,t)),$E.sfO.update(),$E.C.dM(0,0,1)):$E.C.dM(0,0,1)}mG(t,i){t.length&&("x"===t?(t=i-this.#t,i=0):(t=0,i-=this.#i)),(t||i)&&this.gG().for(s=>{s.x+=t,s.y+=i,this.aG(s.o,s)})}cG(t){if(this===t)return 1;if(10===this.ind){let i=this.gG();for(let s of i)if(s.o?.cG(t))return 1}return 0}static blkTile(t){if(!t.autoTile)return;let i=t.x,s=t.y,e=t.w,d=t.h,r=$E._r.ly[t.dep];for(let o=0;o<r.length;o++){let h=r[o];if(h.autoTile&&h.w===e&&h.h===d){let r=h.x,o=h.y,a=(r===i?1:r===i-e?2:r===i+e?3:0)|(o===s?4:o===s-d?8:o===s+d?12:0);if(5===a)continue;switch(a){case 6:h.tb|=1,t.tb|=2,h.tc[1]|=1,h.tc[3]|=1,t.tc[0]|=1,t.tc[2]|=1;break;case 7:h.tb|=2,t.tb|=1,h.tc[0]|=1,h.tc[2]|=1,t.tc[1]|=1,t.tc[3]|=1;break;case 9:h.tb|=4,t.tb|=8,h.tc[2]|=2,h.tc[3]|=2,t.tc[0]|=2,t.tc[1]|=2;break;case 13:h.tb|=8,t.tb|=4,h.tc[0]|=2,h.tc[1]|=2,t.tc[2]|=2,t.tc[3]|=2;break;case 10:h.tc[3]|=4,t.tc[0]|=4;break;case 11:h.tc[2]|=4,t.tc[1]|=4;break;case 14:h.tc[1]|=4,t.tc[2]|=4;break;case 15:h.tc[0]|=4,t.tc[3]|=4}3&a&&12&a&&$E.sfO.$d(r,o,e,d)}}}static dbTile(t,i,s,e,d){let r=$E._r.ly[d];for(let d=0;d<r.length;d++){let o=r[d];if(o.autoTile&&o.w===s&&o.h===e){let d=o.x,r=o.y,h=(d===t?1:d===t-s?2:d===t+s?3:0)|(r===i?4:r===i-e?8:r===i+e?12:0);if(5===h){this.blkTile(o);break}switch(h){case 6:o.tb^=1,o.tc[1]^=1,o.tc[3]^=1;break;case 7:o.tb^=2,o.tc[0]^=1,o.tc[2]^=1;break;case 9:o.tb^=4,o.tc[2]^=2,o.tc[3]^=2;break;case 13:o.tb^=8,o.tc[0]^=2,o.tc[1]^=2;break;case 10:o.tc[3]^=4;break;case 11:o.tc[2]^=4;break;case 14:o.tc[1]^=4;break;case 15:o.tc[0]^=4}3&h&&12&h&&$E.sfO.$d(d,r,s,e)}}}static rTile(t,i,s,e,d){d.autoTile&&(this.dbTile(t,i,s,e,d.dep),d.tb=0,d.tc=[0,0,0,0],this.blkTile(d))}},$E.dSmth=t=>{t.imageSmoothingEnabled&&(t.imageSmoothingEnabled=!1)},$E.eSmth=t=>{t.imageSmoothingEnabled||(t.imageSmoothingEnabled=!0)},$E.Surface=class{constructor(t,i){this.ctx=t,$E.dSmth(t),this.cv=t.canvas,this.dep=i,this.w=this.cv.width,this.h=this.cv.height,this.L=0,this.T=0,this.R=this.w,this.B=this.h,this.tX=0,this.tY=0}$d(t,i,s,e){t<this.L&&(this.L=t),i<this.T&&(this.T=i),t+s>this.R&&(this.R=t+s),i+e>this.B&&(this.B=i+e)}translate(t,i){this.tX=t,this.tY=i,this.ctx.setTransform(1,0,0,1,-t,-i)}clear(){this.ctx.clearRect(this.tX,this.tY,this.w,this.h)}updateRect(t,i,s,e){let d=$E._r.ly;this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t,i,s,e),this.ctx.clip();let r=$E.C.cRc;for(let o=0;o<d.length;o++)if(d[o].vis)for(let h=0;h<d[o].length;h++){let a=d[o][h];r(t,i,s,e,a.R[0],a.LT[1],a.w,a.h)&&a.draw(this.ctx)}this.ctx.restore(),this.L=Infinity,this.T=Infinity,this.R=-Infinity,this.B=-Infinity}redrawRect(t,i,s,e){this.ctx.clearRect(t,i,s,e),this.updateRect(t,i,s,e)}redraw(){this.redrawRect(this.tX,this.tY,this.w,this.h)}update(){let t=this.R-this.L,i=this.B-this.T;t<=0||i<=0||(this.ctx.clearRect(this.L,this.T,t,i),this.updateRect(this.L,this.T,t,i))}},$E.L=(t,i)=>{let s=[];return s.dep=t,s.sf=i,s.lock=!1,s.vis=!0,s.add=function(t){t.id=this.push(t)-1,this.vis&&this.sf.$d(t.R[0],t.LT[1],t.w,t.h)},s.rm=function(t){this.vis&&this.sf.$d(t.R[0],t.LT[1],t.w,t.h);let i=t.id;for(this.splice(i,1);i<this.length;i++)this[i].id--;$E._r.objNum--,t.autoTile&&$E.E.dbTile(t.x,t.y,t.w,t.h,t.dep)},s},$E.resetTransform=t=>{let i=$E._r;t.setTransform(1,0,0,1,i?32-i.editX:32,i?32-i.editY:32)},$E.clrSf=t=>{let i=$E._r;t.clearRect(i?i.editX-32:-32,i?i.editY-32:-32,864,672)},$E.sfB=$("cv-bg").transferControlToOffscreen().getContext("2d"),$E.sfE=$("cv-edit").getContext("2d"),$E.sfG=$("cv-grid").getContext("2d"),$E.sfO=new $E.Surface($("cv-obj").transferControlToOffscreen().getContext("2d"),0),$E.grid={show:!1,fill:El("canvas"),bg32:El("canvas",0,{width:32,height:32}),init(){let t=this.bg32.getContext("2d");t.fillStyle="#60606090",t.fillRect(0,0,16,16),t.fillRect(16,16,16,16),t.fillStyle="#91919190",t.fillRect(0,16,16,16),t.fillRect(16,0,16,16),this.pat32=$E.sfG.createPattern(this.bg32,"repeat"),$E.sfG.strokeStyle="#ec0",this.al=App.gC("edit","gridOpacity"),this.set(32)},set(t){if(this.value=t,t<4)return;this.fill.width=this.fill.height=t;let i=this.fill.getContext("2d");i.clearRect(0,0,t,t),i.strokeStyle="#888",i.strokeRect(-1,-1,t+.5,t+.5),this.pat=$E.sfG.createPattern(this.fill,"repeat")},draw(){const t=$E.sfG;if(t.resetTransform(),t.clearRect(0,0,864,672),!$E._r)return;let i=-$E._r.editX,s=-$E._r.editY,e=i+$E._r.w+32,d=s+$E._r.h+32;if(t.fillStyle=this.pat32,t.globalAlpha=1,i>-32&&t.fillRect(i,0,32,672),e<864&&t.fillRect(e,0,32,672),i+=32,i<0&&(i=0),e-=i,s>-32&&t.fillRect(i,s,e,32),d<672&&t.fillRect(i,d,e,32),this.show){t.setTransform(1,0,0,1,-$E._r.editX%32,-$E._r.editY%32),t.globalAlpha=this.al,this.value>=4&&(t.fillStyle=this.pat,t.fillRect(0,0,896,704));let i=32.5-($E._r.editX/32<<5),s=32.5-($E._r.editY/32<<5);for(;i<0;)i+=800;for(;s<0;)s+=608;t.beginPath(),t.moveTo(i,0),t.lineTo(i,704),t.moveTo(i+800,0),t.lineTo(i+800,704),t.moveTo(0,s),t.lineTo(896,s),t.moveTo(0,s+608),t.lineTo(896,s+608),t.stroke()}}},docReady.then(()=>{App.gC("run","smooth")||($("screen").style.imageRendering="pixelated"),$E.grid.init(),$E.sfE.canvas.style.opacity=.6,$E.dSmth($E.sfE),$E.dSmth($E.sfB),$E.dSmth($E.sfG),$E.sfE.L=Infinity,$E.sfE.T=Infinity,$E.sfE.R=-Infinity,$E.sfE.B=-Infinity,$E.sfE.$d=$E.sfO.$d,$E.sfE.clear=function(){let t=this.R-this.L,i=this.B-this.T;t>0&&i>0&&(this.clearRect(this.L,this.T,t,i),this.L=Infinity,this.T=Infinity,this.R=-Infinity,this.B=-Infinity)}}),$E.capture=(t=1,i=0)=>{let s=800*t,e=608*t,d=El("canvas",0,{width:s,height:e}),r=d.getContext("2d");r.drawImage($E.sfB.canvas,32,32,800,608,0,0,s,e),r.drawImage($E.sfO.cv,32,32,800,608,0,0,s,e);let o=d.toDataURL(),h=d.toDataURL("image/webp",1);return i&&(i<<=10,o.length>i&&h.length>i&&(h=d.toDataURL("image/webp",.9))),h.length<o.length?h:o};