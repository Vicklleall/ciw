const $E={edit:!0,piE:null,nowTab:0,_R:null,RoomID:0,_G:null,_r:null,_O:null,$O:null,showInvis:App.gC("edit","showInvis"),tab:$t("div",$("tab")),fixH(t,i){t.pd||(t.pd=!0,docReady.then(()=>$M.task(()=>{t.pd=!1;const e=t.className;t.className="cat",t.style.height="auto",t.style.height=t.clientHeight+"px",t.className=e,i?.(t)})))},setGame(t){$E.atC(),$E._G=null,$E.sfC.style.background="",$E.clrSf($E.sfB),$E.clrSf($E.sfE),$E.sfO.clear(),$E.sfG.resetTransform(),$E.sfG.clearRect(0,0,864,672),$E._r=null,$E.RoomID=t.RID??0,$c("room").for(t=>t.remove()),$E._G&&$E._G.id&&(t.id=$E._G.id),$E._G=t,$E.preset.set(),$E._R=[],t.R.for(t=>{let i=new $E.Room(2,t);$E.addRoom(i)}),t.R=$E._R;let i=$c("cat"),e=i[0].ch,s=i[1].ch,d=$c("room");e[1].set(t.N||""),s[1].set(t.S||1),$("vars").innerHTML="";for(let i in t.VAR)$E.addVar(i);$E.fixH($c("cat")[1]),$E.tab[0].click(),d.length?d[0].firstChild.click():($("crtr")._s(),$E.fixH($("room"))),Res.loc=t._s,saveCache=null,$E._O=null,$E.$O&&$E.$P(),$E.atS()},oGD:null,openGame(t){CIW.find("proj").then(i=>{i.sort((t,i)=>i._u-t._u);let e="";i.for((t,i)=>e+=`<div class='proj' id='${i}'><div class='dots'>${t.N}</div><span>0{6k} ${Date.cD(t._c)??"0{6l}"}</span><span>0{6m} ${Date.cD(t._u??t._c)??"0{6l}"}</span><div class='del'>${UI.ico("trash")}</div></div>`),$E.oGD=new UI.M(422).h("0{6n}").a(`${e}<div class='proj'>${UI.ico("add")}0{6o}</div>`),$E._G&&$E.oGD.cb(),$c("proj",$E.oGD.box).for(e=>{e.id&&(e.lastChild.onclick=t=>{t.stopPropagation(),UI.confirm("0{6p}").then(t=>{t.i||CIW.del("proj",i[e.id].id).then(t=>e.remove())})}),e.onclick=()=>$E.confirm(()=>{e.id?($E.setGame(i[e.id]),$M.task(()=>$E.modified=!1,2)):($E.setGame({_a:[U$.id],_c:Date.now(),_s:[],_o:[],_h:[],N:"Untitled",R:[],VAR:{},S:1}),$E.sG()),$E.oGC(),t?.()})})})},oGC(){this.oGD?.box&&this.oGD.close(),this.oGD=null},confirm(t){this.modified?UI.confirm("0{6q}").then(i=>{i.i||t()}):t()},open(t){"_"===t[0]&&Ipc.read(t.slice(1),1,t=>{$E.oGC(),$E._G?$E.import.ciwp(t):$E.openGame(()=>$E.import.ciwp(t))})},eG(t=0){console.time("Compile"),this._r&&this._r.enc(1);const i=this._G;let e={N:i.N,R:i.R.map(i=>i.save(t)),VAR:{...i.VAR},S:i.S,_s:i._s,_o:i._o};if(t){let t=new Set,s=[],d=[];e.R.for(i=>{for(let e of i.objSet)t.add(e);delete i.objSet,delete i.name});for(let i of t){let t=Lib.obj[i];d[i]=s.push({ind:t.ind,def:t.def,spr:[...t.spr],add:$M.cp(t.add)})-1}i.R.for((t,i)=>e.R[i].obj=t.renc(null,t=>d[t]??t)),e._o=s}return console.timeEnd("Compile"),e},aGM(t,i=0){t._a=this._G._a,i||(t._c=this._G._c,t._u=Date.now(),t.RID=this.RoomID,t._h=this._G._h)},set modified(t){this.savedGame=t?"":JSON.stringify(this.eG())},get modified(){return!!this._G&&this.savedGame!==JSON.stringify(this.eG())},sG(t=!1,i=!1){const e=this.eG(),s=i?"":JSON.stringify(e);this.aGM(e),this._G.id&&(e.id=this._G.id),i&&(e.id+="-backup",e.N+=" (自动保存)"),CIW.put("proj",e).then(e=>{i||(this._G.id=e.target.result,this.savedGame=s),t&&UI.$a("0{6r}")},i=>{console.error(i),t&&UI.$a("0{6s}")})},atT:0,atG(t=!0){this.atC(),App.gC("edit","autoSave")&&(this.sG(!1,!0),t&&this.atS())},atS(){const t=App.gC("edit","autoSave");t&&this._G?this.atT||(this.atT=setTimeout(()=>{$E.sG(!1,!0),$E.atT=0,$E.atS()},[3e5,6e4][t-1])):this.atC()},atC(){this.atT&&(clearTimeout(this.atT),this.atT=0)},addVar(t,i){let e=$("vars").ap(El("div","rl")),s=UI.I("0{6t}: ",{l:8,value:t??""},96),d=UI.I("0{6u}:",{type:"number",value:$E._G.VAR[t]??i??0,m:-999,M:999},48),r=El("div","ab del");void 0!==i&&($E._G.VAR[t]=i),t&&(s.val=t),s.style.marginRight="16px",s.on(function(t){return!(t=t.trim())||t.includes("#")?(UI.$a("0{6v}"),void this.set("")):void 0!==$E._G.VAR[t]?(UI.$a("0{6w}"),void this.set("")):(this.set(t),delete $E._G.VAR[this.val],void($E._G.VAR[this.val=t]=this.nS().v))}),d.on(function(t){let i=this.pS().v;i&&($E._G.VAR[i]=t)}),r.innerHTML=UI.ico("trash"),css(r,{top:"5px",right:"8px"}),r.onclick=function(){delete $E._G.VAR[this.pS(2).v],e.remove(),$E.fixH($("vars").pN)},e.ap(s,d,r),$E.fixH($c("cat")[1])},async loadTh(t,i,e){Res.reset(),t.spr.length>Res.sprList.length&&(t.spr.length=Res.sprList.length);for(let i=Res.sprList.length-t.spr.length;i--;)Res.push();this.tileCol.spr=null,this.sfC.style.background="",this.clrSf(this.sfB),this.sfO.clear();let s=[Res.loadBg(t.bg)];for(let i=0;i<t.spr.length;i++){let e="";for(let s in t.col)t.col[s].split("|").includes(Res.sprList[i])&&(e=s);s.push(Res.loadSpr(Res.sprList[i],t.spr[i],e))}try{let e=(await Promise.all(s))[0];this.loadComp=i?()=>{for(let t in Res.spr)this.setTile(Res.spr[t]);i(e)}:()=>{for(let t in Res.spr)this.setTile(Res.spr[t]);this._r.col=t.col,this._r.spr=t.spr,this._r.setBg(e),this.setBg(e),this._r.drawBg(),this.sfO.redraw()}}catch{Res.fail(),e?e():(this._r.drawBg(),this.sfO.redraw())}},setTile(t){let i=$("tile");i.spr[t.name]&&$M.task(()=>$E.drawThn(i.spr[t.name],t))},drawThn(t,i,e=1){let s,d=t.getContext("2d"),{w:r,h:o}=i;if("lsr"===i.name){o=32;let t=El("canvas",0,{width:r,height:o}),e=t.getContext("2d");e.drawImage(i[1],0,0,r,32),e.drawImage(i[0],0,0),s=t}else s=i[0];if(e&&d.clearRect(0,0,32,32),r<32&&o<=32||o<32&&r<=32)d.drawImage(s,i.x?16-(r>>1):0,"tp"===i.name||"grs"===i.name?32-o:i.y?16-(o>>1):0,r,o);else if(r>32){let t=Math.min(32/r,32/o);r*=t,o*=t,d.drawImage(s,16-(r>>1),"grs"===i.name?32-o:16-(o>>1),r,o)}else d.drawImage(s,0,0)},BObj(t,i,e,s){let d=UI.B2(i).on(t=>{$E.$P();let i=$E._r.bobj[t.buildIn.id];"gov"===t.buildIn.id?i.drawTxt():($E.sfE.$d(-32,-32,$E._r.w+64,$E._r.h+64),$E.C.dM(0,0,1)),$E.tab[3].click(),$E.$O=[i],$E.$P($E.$O,t.buildIn)});return d.id="bi-"+t,d.buildIn={id:t,name:i,spr:Res.spr[e],add:s??[]},d},peU(){$E.piE.ud&&($E.C._U(),$E.piE.ud=!1)},psE(t,i,e,s,d,r){dac($("L"),""),t.otx=t.innerText,t.tx("0{6x}"),t.style.pointerEvents="auto",$E.piE=t,$E.piE.ud=!0,$E.peC=i,$E.peM=e,$E.peA=r,d?.(),s?.()},peE(){ac($("L")),$E.peA?.(),$E.piE.tx($E.piE.otx),$E.piE.style.pointerEvents="",$E.piE=null,$E.peC=null,$E.peM=null,$E.peA=null,$E.C.dM(0,0,1)},mergeCO(t,i){if(!t?.length)return!1;$E._G._o??=[];let e=$c("cat",$("page")),s=!1,d=1e3;return t.for(t=>{let r=$E._G._o.find(i=>i._===t._);if(r&&t.n===r.n)t.id!==r.id&&(i[t.id]=r.id,s=!0);else{for(;Lib.obj[d];)++d;t.id!==d&&(i[t.id]=d,t.id=d,s=!0),d++;let r=0;for(;$E._G._o.find(i=>i.n===t.n+(r?`(${r})`:""));)++r;r&&(t.n+=`(${r})`),$E._G._o.push(t),Lib.cO(t),e[17].ap($E.preset._O(t))}}),$E.fixH(e[17]),s},Room:class{constructor(t,i){if(0===t||i&&0===i.type){let t=$c("room");for(let i=$E._R.length;i--;)$E._R[i].ind++,t[i].ind++;this.ind=0,$E._R.unshift(this)}else this.ind=$E._R.push(this)-1;this.objNum=0,this.ly=[];for(let t=12;t--;)this.ly[t]=$E.L(t,$E.sfO);if(this.editX=this.editY=0,this.undo=[],this.redo=[],this.bg={id:0,m:0},this.spr=[...Lib.thm],this.bgm={m:0},this.out=1,this.view=1,i){if(i.var){for(let t in i.var)void 0===$E._G.VAR[t]&&$E.addVar(t,i.var[t]);delete i.var}if(Object.assign(this,i),i.cobj){let t={};$E.mergeCO(i.cobj,t)&&(this.obj=this.renc(null,i=>t[i]??i)),delete this.cobj}this.type?this.decB(i.bobj):delete this.bobj,this.spr.length<Lib.thm.length&&this.spr.push(...Lib.thm.slice(this.spr.length))}else this.type=t,this.obj="|||||||||||",this.w=800,this.h=608,this.bgm={m:0},t&&this.decB();if(!this.name)switch(this.type){case 0:this.name="rTitle";break;case 1:this.name="rEnd";break;default:this.name="Room"+ ++$E.RoomID}if(void 0===this.id){let t=[];for(let i=128;i--;)t.push(0);for(let i=$E._R.length;i--;)t[$E._R[i].id]=1;this.id=t.indexOf(0)}}getType(){return["0{6y}","0{6z}","0{70}","0{71}","0{72}"][this.type]}setNum(){$c("room")[this.ind].ch[3].tx(this.objNum+"0{73}")}setWH(t,i){2!==this.type&&4!==this.type||(t&&(this.w=t),i&&(this.h=i),$c("room")[this.ind].ch[2].tx(this.w+"×"+this.h),this.editX+800>this.w&&(this.editX=this.w-800),this.editY+608>this.h&&(this.editY=this.h-608),this.setBar())}setBar(){css($("hbar"),{width:8e4/this.w+"%",transform:`translateX(${this.editX/this.w*864}px)`}),css($("vbar"),{height:60800/this.h+"%",transform:`translateY(${this.editY/this.h*672}px)`}),$E.resetTransform($E.sfB),$E.resetTransform($E.sfE),$E.sfO.translate(this.editX-32,this.editY-32),$E.sfO.redraw(),$E.sfE.$d(this.editX-32,this.editY-32,864,672),0!==this.bg.m&&2!==this.bg.m||this.drawBg(),$E.sfG.canvas.style.display||$E.grid.draw(),($E.$O||$E._O)&&$E.C.dM(0,0,1)}setFill(){this.bg.m<3&&(this.bgFill=$E.sfB.createPattern(this.bg.c,"repeat"))}setBg(t){this.bg=t,this.setFill()}drawBg(){const t=$E.sfB;if($E.clrSf(t),this.bg.m<3)switch($E.sfC.style.background="",this.bg.m){case 0:t.fillStyle=this.bgFill,t.fillRect(0,0,this.w,this.h);break;case 1:t.fillStyle=this.bgFill,t.save(),t.translate(this.editX,this.editY),t.fillRect(0,0,800,608),t.restore();break;case 2:t.drawImage(this.bg.c,0,0,this.w,this.h)}else $E.sfC.style.background=this.bg.c}colBg(t,i,e,s){this.bg.g||(this.bg.g=",,,");let d=this.bg.g.split(",");""!==t&&(d[0]=t),""!==i&&(d[1]=i),""!==e&&(d[2]=e),""!==s&&(d[3]=s),this.bg.g=Res.color.gen(d),Res.color.draw(this.bg.c,this.bg.i,this.bg.g),this.setFill(),this.drawBg()}encN(t){return String.fromCharCode(t+_C.dec.bias)}encKey(t){let i=0;for(let e=t.length;e--;)i+=t.charCodeAt(e)-96<<5*e;return this.encN(i)}encNum(t){let i=t<0?-t:t,e=0;for(;e<2&&i<<0!==i;e++)i*=10;return i+=1e4*e,this.encN(t<0?3e4+i:i)}encStr(t){return _C.dec.iStr+t.replaceAll(_C.dec.rStr,"").replaceAll(_C.dec.iStr,_C.dec.rStr)+_C.dec.iStr}encArr(t){let i=_C.dec.iArr+this.encN(t.length);return t.for(t=>{switch(typeof t){case"object":i+=this.encArr(t);break;case"string":i+=this.encStr(t);break;default:i+=this.encNum(t)}}),i}encO(t){let i="";for(let e in t.add){if("dep"===e)continue;let s=t.add[e];if("til"===e&&(s=t.autoTile?t.tileInd:1e3+t.tileInd),null!=s&&!Number.isNaN(s))if("object"==typeof s)s.length&&!$M.eq(s,Lib.obj[t.cid].add[e])&&(i+=this.encKey(e)+this.encArr(s));else{if(void 0===Lib.obj[t.cid].add[e]&&("scx"===e&&1===s&&1===t.add.scy||"scy"===e&&1===s||"ang"===e&&0===s||"hd"===e&&0===s||"al"===e&&1===s||"a"===e&&0===s))continue;s!==Lib.obj[t.cid].add[e]&&(i+="string"==typeof s?this.encKey(e)+this.encStr(s):this.encKey(e)+this.encNum(s))}}return i&&(i=_C.dec.iPro+i+_C.dec.iPro),i}enc(t){let i=[],e=0,s=!1;const d=$E.C.cRc;this.flag="& !$#%",_C.dec.setFlag(this.flag);for(let r=0;r<this.ly.length;r++){let o=Lib.obj.map(t=>""),h=o.map(t=>0),a=[...h],l=0;this.ly[r].for(i=>{!t||i.add.gpi||d(i.R[0],i.LT[1],i.w,i.h,-32,-32,this.w+64,this.h+64)?(i.sid=h[i.cid]++,o[i.cid]+=this.encNum(i.x)+this.encNum(i.y)+this.encO(i),e++):$E.$O&&!s&&$E.$O.includes[i]&&(s=!0)}),i[r]="",o.forEach((t,e)=>{t&&(i[r]+=_C.dec.iObj+this.encN(e)+t),e&&(a[e]=h[l],h[e]+=h[l],l=e)}),this.ly[r].for(t=>{t.cid&&(t.sid+=a[t.cid])})}return t&&(s&&$E.$P(),e!==this.objNum&&(this.objNum=e,this.setNum())),this.obj=i.join(_C.dec.iLay)}renc(t,i){let e,s=[],d=t=>{t--&&(s[t]="",e.forEach((i,e)=>{i&&(s[t]+=_C.dec.iObj+this.encN(e)+i)})),e=Lib.obj.map(t=>"")};return t??=({start:t,end:i})=>this.obj.slice(t,i),i??=t=>t,_C.dec.set(this.obj,this.flag),_C.dec.r(d,s=>e[i(s.prop.cid)]+=t(s),!1),d(s.length+1),s.join(_C.dec.iLay)}dec(t=!0){let i=$E._r;try{$E._r=this,this.objNum=0,_C.dec.set(this.obj,this.flag),_C.dec.r(t=>this.ly[t].length=0,({x:t,y:i,prop:e})=>{void 0!==e.ind&&new $E.E(t,i,e)}),$E._r=i,this.setNum(),i===this&&t&&($E.sfO.redraw(),this.drawBg())}catch(t){console.error(t),UI.$a("0{74}"),$E._r=i,this.objNum=0,this.ly.for(t=>t.length=0),this.setNum(),i===this&&($E.sfO.redraw(),this.drawBg())}}encB(t=0){if(0===this.type)return"";let i={};for(let e in this.bobj)!t&&$M.eq(this.bobj[e].add,Lib.bobj[e])||(i[e]={add:this.bobj[e].add});return JSON.stringify(i)}decB(t){if(this.bobj={ply:{id:"ply",add:$M.cp(Lib.bobj.ply)},gov:{id:"gov",w:800,h:608,lib:61,ctx:1,set txt1(t){this.add.txt1=t,this.drawTxt()},set txt2(t){this.add.txt2=t,this.drawTxt()},set scx(t=1){this.add.scx=t,this.draw()},set scy(t=1){this.add.scy=t,this.draw()},set ang(t){this.add.ang=t,this.draw()},add:$M.cp(Lib.bobj.gov),drawTxt(){1===this.ctx?this.ctx=El("canvas",0,{width:800,height:608}).getContext("2d"):this.ctx.clearRect(0,0,800,608);let t={w:this.w,h:this.h},i=["txt","ftf","fts","ftt","fta","ftc","fst","fkc","fsd","fsc"],e=this.add.txt1.split("\n").length*this.add.fts1*1.25,s=this.add.txt2.split("\n").length*this.add.fts2*1.25;i.for(i=>t[i]=this.add[i+1]),Res.loadTxt(t,this.ctx,304-(e+s)/2),i.for(i=>t[i]=this.add[i+2]),Res.loadTxt(t,this.ctx,304+(e-s)/2),this.draw()},draw(){$E.sfE.save(),$E.sfE.resetTransform(),$E.sfE.clearRect(0,0,864,672),0!==this.add.scx&&0!==this.add.scy&&($E.sfE.canvas.style.opacity=1,$E.sfE.translate(432,336),(this.add.hd||this.add.al<1)&&($E.sfE.globalAlpha=this.add.hd?.5:.5+this.add.al/2),this.add.scx&&$E.sfE.scale(this.add.scx,this.add.scy),this.add.ang&&$E.sfE.rotate(-this.add.ang*Math.DR),$E.sfE.drawImage(this.ctx.canvas,-400,-304)),$E.sfE.restore(),$E.sfE.$d(-32,-32,$E._r.w+64,$E._r.h+64)}}},t){"string"==typeof t&&(t=JSON.parse(t));for(let i in t)this.bobj[i]&&Object.assign(this.bobj[i].add,t[i].add)}}purge(){this.enc(1),this.ly.for(t=>t.length=0)}save(t=0){let i={...this,bg:{m:this.bg.m}};if(i.bg.m<3&&(i.bg.id=this.bg.id),this.bg.g&&"0,50,50,50"!==this.bg.g&&(i.bg.g=this.bg.g),this.type){let e=this.encB(t);"{}"===e?delete i.bobj:i.bobj=e}else delete i.bobj;delete i.ind,delete i.ly,delete i.undo,delete i.redo,delete i.bgFill,delete i.editX,delete i.editY;for(let t in i)null!==i[t]&&void 0!==i[t]||delete i[t];if(t){delete i.objNum;let e=new Set,s=new Set;i.type&&(e.add("ply"),e.add("blt"),1===t&&e.add("sp")),_C.dec.set(i.obj,i.flag),_C.dec.r(()=>{},({prop:t})=>{e.add(t.spr[0]),s.add(t.cid)},!1),["pst","gp","txt"].for(t=>e.delete(t)),i.spr=Array.from(e,t=>{const e=Res.sprList.indexOf(t),s=i.spr[e];return s===Lib.thm[e]?t:t+":"+s}),i.objSet=s}return i}},rU(t,i){let e=t.room,s=i.room?.ind??$E._R.length-1;for(let t=e.ind-1;t>=s;t--){let i=$E._R[t];$E._R[t+1]=i,i.ind++}$E._R[e.ind=s]=e,i.before(t)},rD(t,i){let e=t.room,s=i.room?.ind??0;for(let t=e.ind+1;t<=s;t++){let i=$E._R[t];$E._R[t-1]=i,i.ind--}$E._R[e.ind=s]=e,i.after(t)}};$E.addRoom=t=>{if((t.id<0||$E._R.length>127)&&($("crtr")._h(),t.id>127))return;let i=$("room"),e=El("div","room",{innerHTML:`<b><div></div><span>${t.name}</span></b><p>${t.getType()}</p><p>${t.w}×${t.h}</p><p>${t.objNum}0{73}</p>`,room:t});e.firstChild.onclick=()=>{$E._r&&$c("room now")[0].rC("now"),e.aC("now"),$E.setRoom(e.room,()=>{$E._r=null,e.rC("now")})},e.firstChild.firstChild.onmousedown=function(t){t.stopPropagation(),e.style.borderColor=this.style.background="#5c9",i.drag=e,i.dragY=t.y,i.dragI=e.room.ind,i.style.cursor="move",css($c("room"),{pointerEvents:"none"})};let s=El("div","p-btn",{innerHTML:UI.ico("copy")}),d=El("div","del",{innerHTML:UI.ico("trash")});return s.style.float="none",e.ap(s,d),t.type<2?dac(s):s.onclick=()=>{let t=e.room.save();delete t.id,$E.rU($E.addRoom(new $E.Room(t.type,t)),e.nS())},d.onclick=()=>{if($E._R.length<=1)return UI.$a("0{75}");UI.confirm("0{76}").then(t=>{if(t.i)return;let i=e.room.ind;$E._R.splice(i,1);let s=$E._r?i==$E._r.ind:0;$("crtr")._s();for(let t=Number(i);t<$E._R.length;t++)$E._R[t].ind--;s&&$c("room")[0===i|0].firstChild.click(),$E.RoomID--,e.remove()})},0===t.type?(e.firstChild.firstChild.style.pointerEvents="none",i.firstChild.after(e)):$("crtr").before(e),$E.fixH(i),e},$E.setBg=t=>{let i=$c("cat")[4].ch;switch(t.m){case 0:case 1:case 2:i[8].ch[2].set(1<<t.m);break;case 3:i[6].set("#"===t.g[0]?t.g:"#"+t.g)}i[4].set(3===t.m?1:t.m>3?2:4,1)},$E.setRoom=(t,i)=>{t!==$E._r&&($E.clrSf($E.sfE),$E.sfG.clearRect(0,0,896,704),$E.loadTh({spr:t.spr,col:t.col,bg:t.bg},i=>{$E._r&&$E._r.purge(),$E._r=t,$E._r.setBg(i),$E.setBg(i),0!==i.m&&2!==i.m&&t.drawBg();let e=$c("cat"),s=e[3].ch,d=e[5].ch,r=e[19].ch;if(s[1].set(t.name),s[2].set(t.w),s[3].set(t.h),s[4].set(t.out),s[5].set(t.view),2===t.type||4===t.type)for(let t=2;t<6;t++)ac(s[t]);else for(let t=2;t<6;t++)dac(s[t]);if(d[2].set(t.bgm.m),d[2].f(t.bgm.m),0===t.type)for(let t=1;t<3;t++)dac(e[7].ch[t]);else for(let t=1;t<3;t++)ac(e[7].ch[t]);for(let i=0;i<12;i++)r[4*i+2].set(t.ly[i].vis),r[4*i+3].set(t.ly[i]._lk);t.dec(!1),$E.$O&&$E.$P(),t.setBar(),$E.fixH(s[0].pN)},i))},$E.E=class{#t;#i;constructor(t,i,e){this.#t=t,this.#i=i,this.LT=[t,i],this.ind=e.ind,this.cid=e.cid,this.spr=e.spr.map(t=>Res.spr[t]),this.add=$M.cp(e.add),e.scx&&1!==e.scx&&(this.add.scx=this.add.scy=e.scx),e.ang&&(this.add.ang=e.ang),this.WH=!!e.add.w,this.calcRect(),e.add.txt&&(this.add.txt="",this.txt=e.add.txt),0===e.ind?$E._r.ly[7].forv(t=>{0===t.ind&&$E._r.ly[7].rm(t)}):[10,11,22].includes(e.ind)&&(this.lib=32),void 0!==this.dep&&($E._r.ly[this.dep].add(this),$E._r.objNum++),this.spr[0].tile&&(this.ti=[this.add.til/1e3<<0,this.add.til%1e3]),10===e.ind?(this.lib=49,this.dInfo=this.dG,e.add.gid||(this.add.gid=$M.id(Date.now())+$M.id(this.id))):e.add.gpi&&(this.dInfo=this.dO)}get x(){return this.#t}set x(t){this.LT[0]+=t-this.#t,this.#t=t}get y(){return this.#i}set y(t){this.LT[1]+=t-this.#i,this.#i=t}get dep(){return this.add.dep}set dep(t){t!==this.add.dep&&($E._r.ly[this.add.dep].rm(this),this.add.dep=t,$E._r.ly[t].add(this))}get autoTile(){return void 0!==this.tb&&this.add.til/1e3<<0==0}set autoTile(t){if(t)this.tb=0,this.tc=[0,0,0,0],this.add.til=0,$E.E.blkTile(this);else if(this.tile){let t=this.autoTile;this.add.til=1e3+this.tileInd,t&&$E.E.dbTile(this.#t,this.#i,this.w,this.h,this.dep)}else this.tb=0,this.tc=[0,0,0,0],this.add.til=1e3}get tile(){return void 0!==this.tb}get tileInd(){let t=0;for(let i=0;i<4;i++)3===this.tc[i]&&(t|=1<<i);return t=(t<<4)+this.tb,isNaN(t)?void 0:t}get ti(){let t=this.tileInd;if(void 0===t)throw"Error tile";return[this.autoTile?0:1,t.toString(2).padStart(8,"00000000")]}set ti(t){if(0===t[0])this.autoTile=!0;else{this.autoTile=!1;let i=t[1].length?Number("0b"+t[1]):t[1];isNaN(i)&&(i=0),this.tb=i%16;for(let t=0;t<4;t++)this.tc[t]=i&1<<t+4?3:0;this.add.til=1e3+i}}get scx(){return this.add.scx??1}set scx(t=1){this.add.scx=t,this.calcRect()}get scy(){return this.add.scy??1}set scy(t=1){this.add.scy=t,this.calcRect()}get ang(){return this.add.ang??0}set ang(t){this.add.ang=t,this.calcRect()}get a(){return this.add.a||0}set a(t){if(t!==this.add.a){let i={x:this.#t,y:this.#i,sprX:this.sprX,sprY:this.sprY,scx:this.scx,scy:this.scy,ang:this.ang};this.add.a=t,_C.moveOxy(i,this.sprX,this.sprY),this.#t=Math.round(i.x),this.#i=Math.round(i.y),this.calcRect()}}get txt(){return this.add.txt}set txt(t){if(42===this.ind)if(t.length){if(!this.add.txt.length){let t=this.add.w,i=this.add.h;this.spr=[[El("canvas",0,{width:t,height:i})]],this.spr[0].x=this.spr[0].y=0,this.spr[0].w=t,this.spr[0].h=i,this.ctx=this.spr[0][0].getContext("2d")}}else t="ABC";this.add.txt=t,this.drawTxt()}drawTxt(){if(!this.ctx)return;const t=this.add,i=this.ctx;this.spr[0].w=i.canvas.width=t.w,this.spr[0].h=i.canvas.height=t.h,Res.loadTxt(t,i,Math.max(t.fsd,t.fst))}get sprX(){let t=this.add.a;return t?(--t,this.WH?1&t?this.add.w>>1:2&t?this.add.w:0:1&t?this.spr[0].w>>1:2&t?this.spr[0].w:0):this.spr[0].x}get sprY(){let t=this.add.a;return t?(--t,this.WH?1&t?this.add.h>>1:2&t?this.add.h:0:4&t?this.spr[0].h>>1:8&t?this.spr[0].h:0):this.spr[0].y}static dSpr(t,i,e,s,d,r,o,h,a){if(a){a*=Math.DR;let i=Math.cos(a),d=Math.sin(a);t.setTransform(i*o,-d*o,d*h,i*h,e+32-$E._r.editX,s+32-$E._r.editY)}else{if(1===o&&1===h)return t.drawImage(i,e-d,s-r);if(!o||!h)return;t.setTransform(o,0,0,h,e+32-$E._r.editX,s+32-$E._r.editY)}(Math.abs(o)<1||Math.abs(h)<1)&&$E.eSmth(t),t.drawImage(i,-d,-r),$E.dSmth(t),$E.resetTransform(t)}dSpr(t,i,e){$E.E.dSpr(t,i[e],this.#t,this.#i,this.sprX,this.sprY,this.scx,this.scy,this.add.ang)}draw(t){if($E.showInvis)this.add.hd?t.globalAlpha=.5:this.add.al<1&&(t.globalAlpha=.5+.5*this.add.al);else{if(this.add.hd||0===this.add.al)return;this.add.al<1&&(t.globalAlpha=this.add.al)}if(0!==this.add.scx&&0!==this.add.scy){if(11===this.ind){let i=Res.spr.lsr;t.save(),t.translate(this.#t,this.#i),this.add.ang&&t.rotate(-this.add.ang*Math.DR),void 0!==this.add.scx&&t.scale(this.add.scx,this.add.scy??1),t.drawImage(i[1],-i.x,0,i.w,this.add.len),t.drawImage(i[0],-i.x,0),t.restore()}else if(22===this.ind){let i=this.spr[0];t.save(),t.translate(this.#t,this.#i),this.add.ang&&t.rotate(-this.add.ang*Math.DR),void 0!==this.add.scx&&t.scale(this.add.scx,this.add.scy??1);let e=this.add.len;if(e<i.h)t.drawImage(i[1],0,i.h-e,i.w,e,-i.x,0,i.w,e);else{t.drawImage(i[1],-i.x,e-i.h);for(let s=e-i.h;s>0;s-=32)s>=32?t.drawImage(i[0],0,0,i.w,32,-i.x,s-32,i.w,32):t.drawImage(i[0],0,32-s,i.w,s,-i.x,0,i.w,s)}t.restore()}else if(this.tile&&this.spr[0].length>1)switch(this.spr[0].length){case 2:this.dSpr(t,this.spr[0],(this.tb>7)<<0);break;case 4:this.dSpr(t,this.spr[0],this.tc.includes(3)?0:(3==(3&this.tb))+((12==(12&this.tb))<<1));break;case 20:this.dSpr(t,this.spr[0],this.tb);for(let i=0;i<4;i++)3===this.tc[i]&&this.dSpr(t,this.spr[0],16+i)}else this.dSpr(t,this.spr[0],0);t.globalAlpha<1&&(t.globalAlpha=1)}}get R(){return this.WH||this.sprW===this.spr[0].w&&this.sprH===this.spr[0].h||this.calcRect(),this.LT}calcRect(){let t=this.spr[0],i=(this.WH?this.add.w:t.w)*this.scx,e=(this.WH?this.add.h:t.h)*this.scy,s=[];this.sprW=t.w,this.sprH=t.h,11===this.ind?e=Math.max(this.add.len,Res.spr.lsr.h)*this.scy:22===this.ind&&(e=this.add.len*this.scy),_C.calcBox(this,i,e,this.sprX,this.sprY,[],s,[]),this.LT[0]=s[0],this.LT[1]=s[1],this.w=s[2]-s[0],this.h=s[3]-s[1]}gO(){if(this.add.gpi)for(let t of $E._r.ly)for(let i of t)if(10===i.ind&&this.add.gpi.startsWith(i.add.gid))return i}gG(){let t=[],i=Infinity;switch(this.add.gpm[0]){case 1:i=this.add.gpm[1],_C.D.circle((i,e)=>t.push({x:Math.round(this.#t+i),y:Math.round(this.#i+e)}),i,this.add.gpm[2]);break;case 2:i=this.add.gpm[1];let e=this.add.gpm[3];_C.D.polygon((i,e)=>t.push({x:Math.round(this.#t+i),y:Math.round(this.#i+e)}),i,e,this.add.gpm[2]),i*=e}let e=this.add.gid;return $E._r.ly.for(s=>s.for(s=>{if(s.add.gpi?.startsWith(e))if(0===this.add.gpm[0])s.add.gpi=e+(t.push({x:s.x,y:s.y,o:s})-1);else{let d=0|s.add.gpi.slice(e.length);if(d>=i)return delete s.add.gpi;t[d].o=s}})),t}group(t){let i=this.add.gid,e=this.gG();if(this.add.gpm[0]){let s=-1,d=Infinity;e.for((i,e)=>{if(i.o)return;let r=(i.x-t.x)**2+(i.y-t.y)**2;r<d&&(d=r,s=e)}),s>=0&&(t.add.gpi=i+s,this.aG(t,e[s]),$E.sfO.update())}else t.add.gpi=i+e.length;10!==t.ind&&t.add.gpi&&(t.dInfo=t.dO)}aG(t,i){if(!t)return;10===t.ind&&t.mG(i.x-t.x,i.y-t.y);let[e,s]=t.LT,{w:d,h:r}=t;t.x=i.x,t.y=i.y,t.autoTile&&$E.E.rTile(e,s,d,r,t),$E.sfO.$d(e,s,d,r),$E.sfO.$d(t.R[0],t.LT[1],t.w,t.h)}dG(t=1){let i=this.#t,e=this.#i,s=$E.sfE;this.add.gpi&&1===t&&this.dO(),this.gG().for(d=>{s.globalAlpha!==t&&(s.globalAlpha=t),$E.C.dLine(i,e,d.x,d.y),d.o&&($E.C.dSelect(d.o.R[0],d.o.LT[1],d.o.w,d.o.h,"#f5d"),10===d.o.ind&&d.o.dG(t/2))}),1!==t&&(s.globalAlpha=1)}dO(t=.75){let i=this.#t,e=this.#i,s=$E.sfE,d=this.gO();d?(s.globalAlpha=t,$E.C.dLine(i,e,d.x,d.y,"#5df"),$E.C.dSelect(d.R[0],d.LT[1],d.w,d.h,"#5df"),d.add.gpi&&d.dO(t/2)):10!==this.ind&&(delete this.add.gpi,this.dInfo=null),s.globalAlpha=1}pG(){this.add.gpm[0]?(this.gG().for(t=>this.aG(t.o,t)),$E.sfO.update(),$E.C.dM(0,0,1)):$E.C.dM(0,0,1)}mG(t,i){t.length&&("x"===t?(t=i-this.#t,i=0):(t=0,i-=this.#i)),(t||i)&&this.gG().for(e=>{e.x+=t,e.y+=i,this.aG(e.o,e)})}cG(t){if(this===t)return 1;if(10===this.ind){let i=this.gG();for(let e of i)if(e.o?.cG(t))return 1}return 0}static blkTile(t){if(!t.autoTile)return;let i=t.x,e=t.y,s=t.w,d=t.h,r=$E._r.ly[t.dep];for(let o=0;o<r.length;o++){let h=r[o];if(h.autoTile&&h.w===s&&h.h===d&&0===h.ang){let r=h.x,o=h.y,a=(r===i?1:r===i-s?2:r===i+s?3:0)|(o===e?4:o===e-d?8:o===e+d?12:0);if(5===a)continue;switch(a){case 6:h.tb|=1,t.tb|=2,h.tc[1]|=1,h.tc[3]|=1,t.tc[0]|=1,t.tc[2]|=1;break;case 7:h.tb|=2,t.tb|=1,h.tc[0]|=1,h.tc[2]|=1,t.tc[1]|=1,t.tc[3]|=1;break;case 9:h.tb|=4,t.tb|=8,h.tc[2]|=2,h.tc[3]|=2,t.tc[0]|=2,t.tc[1]|=2;break;case 13:h.tb|=8,t.tb|=4,h.tc[0]|=2,h.tc[1]|=2,t.tc[2]|=2,t.tc[3]|=2;break;case 10:h.tc[3]|=4,t.tc[0]|=4;break;case 11:h.tc[2]|=4,t.tc[1]|=4;break;case 14:h.tc[1]|=4,t.tc[2]|=4;break;case 15:h.tc[0]|=4,t.tc[3]|=4}3&a&&12&a&&$E.sfO.$d(r,o,s,d)}}}static dbTile(t,i,e,s,d){let r=$E._r.ly[d];for(let d=0;d<r.length;d++){let o=r[d];if(o.autoTile&&o.w===e&&o.h===s&&0===o.ang){let d=o.x,r=o.y,h=(d===t?1:d===t-e?2:d===t+e?3:0)|(r===i?4:r===i-s?8:r===i+s?12:0);if(5===h){this.blkTile(o);break}switch(h){case 6:o.tb^=1,o.tc[1]^=1,o.tc[3]^=1;break;case 7:o.tb^=2,o.tc[0]^=1,o.tc[2]^=1;break;case 9:o.tb^=4,o.tc[2]^=2,o.tc[3]^=2;break;case 13:o.tb^=8,o.tc[0]^=2,o.tc[1]^=2;break;case 10:o.tc[3]^=4;break;case 11:o.tc[2]^=4;break;case 14:o.tc[1]^=4;break;case 15:o.tc[0]^=4}3&h&&12&h&&$E.sfO.$d(d,r,e,s)}}}static rTile(t,i,e,s,d){d.autoTile&&(this.dbTile(t,i,e,s,d.dep),d.tb=0,d.tc=[0,0,0,0],this.blkTile(d))}},$E.dSmth=t=>{t.imageSmoothingEnabled&&(t.imageSmoothingEnabled=!1)},$E.eSmth=t=>{t.imageSmoothingEnabled||(t.imageSmoothingEnabled=!0)},$E.Surface=class{constructor(t,i){this.ctx=t,$E.dSmth(t),this.cv=t.canvas,this.dep=i,this.w=this.cv.width,this.h=this.cv.height,this.L=0,this.T=0,this.R=this.w,this.B=this.h,this.tX=0,this.tY=0}$d(t,i,e,s){t<this.L&&(this.L=t),i<this.T&&(this.T=i),t+e>this.R&&(this.R=t+e),i+s>this.B&&(this.B=i+s)}translate(t,i){this.tX=t,this.tY=i,this.ctx.setTransform(1,0,0,1,-t,-i)}clear(){this.ctx.clearRect(this.tX,this.tY,this.w,this.h)}updateRect(t,i,e,s){let d=$E._r.ly;this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(t,i,e,s),this.ctx.clip();let r=$E.C.cRc;for(let o=0;o<d.length;o++)if(d[o].vis)for(let h=0;h<d[o].length;h++){let a=d[o][h];r(t,i,e,s,a.R[0],a.LT[1],a.w,a.h)&&a.draw(this.ctx)}this.ctx.restore(),this.L=Infinity,this.T=Infinity,this.R=-Infinity,this.B=-Infinity}redrawRect(t,i,e,s){this.ctx.clearRect(t,i,e,s),this.updateRect(t,i,e,s)}redraw(){this.redrawRect(this.tX,this.tY,this.w,this.h)}update(){let t=this.R-this.L,i=this.B-this.T;t<=0||i<=0||(this.ctx.clearRect(this.L,this.T,t,i),this.updateRect(this.L,this.T,t,i))}},$E.L=(t,i)=>{let e=[];return e.dep=t,e.sf=i,e._lk=!1,e.vis=!0,e.add=function(t){t.id=this.push(t)-1,this.vis&&this.sf.$d(t.R[0],t.LT[1],t.w,t.h)},e.rm=function(t){this.vis&&this.sf.$d(t.R[0],t.LT[1],t.w,t.h);let i=t.id;for(this.splice(i,1);i<this.length;i++)this[i].id--;$E._r.objNum--,t.autoTile&&$E.E.dbTile(t.x,t.y,t.w,t.h,t.dep)},Object.defineProperty(e,"lock",{get(){return this._lk||!this.vis},set(t){this._lk=t}}),e},$E.resetTransform=t=>{let i=$E._r;t.setTransform(1,0,0,1,i?32-i.editX:32,i?32-i.editY:32)},$E.clrSf=t=>{let i=$E._r;t.clearRect(i?i.editX-32:-32,i?i.editY-32:-32,864,672)},$E.sfC=El("div","ab"),$E.sfC.style.inset="32px",$("cv-bg").before($E.sfC),$E.sfB=$("cv-bg").transferControlToOffscreen().getContext("2d"),$E.sfE=$("cv-edit").getContext("2d"),$E.sfG=$("cv-grid").getContext("2d"),$E.sfO=new $E.Surface($("cv-obj").transferControlToOffscreen().getContext("2d"),0),$E.grid={show:!1,fill:El("canvas"),bg32:El("canvas",0,{width:32,height:32}),init(){let t=this.bg32.getContext("2d");t.fillStyle="#60606090",t.fillRect(0,0,16,16),t.fillRect(16,16,16,16),t.fillStyle="#91919190",t.fillRect(0,16,16,16),t.fillRect(16,0,16,16),this.pat32=$E.sfG.createPattern(this.bg32,"repeat"),$E.sfG.strokeStyle="#ec0",this.al=App.gC("edit","gridOpacity"),this.set(32)},set(t){if(this.value=t,t<4)return;this.fill.width=this.fill.height=t;let i=this.fill.getContext("2d");i.clearRect(0,0,t,t),i.strokeStyle="#888",i.strokeRect(-1,-1,t+.5,t+.5),this.pat=$E.sfG.createPattern(this.fill,"repeat")},draw(){const t=$E.sfG;if(t.resetTransform(),t.clearRect(0,0,864,672),!$E._r)return;let i=-$E._r.editX,e=-$E._r.editY,s=i+$E._r.w+32,d=e+$E._r.h+32;if(t.fillStyle=this.pat32,t.globalAlpha=1,i>-32&&t.fillRect(i,0,32,672),s<864&&t.fillRect(s,0,32,672),i+=32,i<0&&(i=0),s-=i,e>-32&&t.fillRect(i,e,s,32),d<672&&t.fillRect(i,d,s,32),this.show){t.setTransform(1,0,0,1,-$E._r.editX%32,-$E._r.editY%32),t.globalAlpha=this.al,this.value>=4&&(t.fillStyle=this.pat,t.fillRect(0,0,896,704));let i=32.5-($E._r.editX/32<<5),e=32.5-($E._r.editY/32<<5);for(;i<0;)i+=800;for(;e<0;)e+=608;t.beginPath(),t.moveTo(i,0),t.lineTo(i,704),t.moveTo(i+800,0),t.lineTo(i+800,704),t.moveTo(0,e),t.lineTo(896,e),t.moveTo(0,e+608),t.lineTo(896,e+608),t.stroke()}}},docReady.then(()=>{$E.grid.init(),$E.sfE.canvas.style.opacity=.6,$E.dSmth($E.sfE),$E.dSmth($E.sfB),$E.dSmth($E.sfG),$E.sfE.L=Infinity,$E.sfE.T=Infinity,$E.sfE.R=-Infinity,$E.sfE.B=-Infinity,$E.sfE.$d=$E.sfO.$d,$E.sfE.clear=function(){let t=this.R-this.L,i=this.B-this.T;t>0&&i>0&&(this.clearRect(this.L,this.T,t,i),this.L=Infinity,this.T=Infinity,this.R=-Infinity,this.B=-Infinity)}}),$E.capture=async(t=1,i=0)=>{const e=800*t,s=608*t,d=El("canvas",0,{width:e,height:s}),r=d.getContext("2d");$E._r.bg.m<3?r.drawImage($E.sfB.canvas,32,32,800,608,0,0,e,s):3===$E._r.bg.m?(r.fillStyle=$E._r.bg.c,r.fillRect(0,0,e,s)):r.drawImage(await $M.html2img(`<div style='width:800px;height:608px;background:${$E._r.bg.c}'></div>`,800,608),0,0,e,s),r.drawImage($E.sfO.cv,32,32,800,608,0,0,e,s);let o=d.toDataURL(),h=d.toDataURL("image/webp",1);if(i&&(i<<=10,o.length>i&&h.length>i)){const t=d.toDataURL("image/webp",.9);t.length<h.length&&(h=t)}return Res.fC(d),h.length<o.length?h:o},$E.rlG=()=>UI.$a("此功能暂未开放"),$E.rlL=()=>UI.$a("此功能暂未开放"),$E.bdG=()=>UI.$a("此功能暂未开放");