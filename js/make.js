dac($("box"),""),Res.loadUp=()=>setTimeout(()=>{let t=$("loading");t.style.background="#0000",t._h(),ac($("box")),$E.loadComp()},$("loading").style.background||!$E.edit?200:400),Res.sprList.len=Lib.thm.reduce((t,o)=>t+!!o,0),$E.loadComp=()=>CIW.onready(()=>$E.openGame()),Ipc.beforeClose=()=>Ipc.closeMsg=$E.modified?"当前项目未保存，确认要退出？":"";{let t=[Res.loadBg({id:0,m:0})];Res.sndList.for(o=>t.push(Res.loadSnd(o))),Res.sprList.for((o,i)=>t.push(Res.loadSpr(o,Lib.thm[i]))),Res.fontList.for(o=>t.push(Res.loadFont(o))),Res.loadMax=t.length,Promise.all(t).catch(t=>{console.error(t),Res.fail(),dac($("box"),"")}),$c("page").for(t=>t.onmousedown=t=>{t.stopPropagation(),1===t.button&&t.preventDefault()}),$E.tab.for((t,o)=>t.onclick=()=>{$E.nowTab!==o&&(!o||$E._r?($E.nowTab=o,css($E.tab,{borderColor:""},o,{borderColor:"#5af"}),$("page").style.transform=`translateX(-${25*o}%)`):UI.alert("请先选择房间！"))});let o=$("btn").ch,i=$("rbtn").ch;o[0].onclick=()=>{if(!$E.GAME.R.length)return UI.alert("当前游戏没有房间");let t=$("screen");css(t,{background:"none",pointerEvents:"none"}),$t("canvas",t).for(t=>t._h()),$("htrack")._h(),$("vtrack")._h(),$("btn")._h(),$("rbtn")._s(),dac($("L"),""),$("bgmPv").hC("p")&&$("bgmPv").click(),$E.edit=!1,$R=new Core.$R($E.exportGame(0),1),$R.init(()=>o[0].reset()),$E.loadComp=()=>{$R?.start([$E._r?.ind,0,-1][App.gC("edit","start")])}},o[0].reset=()=>{$E.edit=!0;let t=$("screen");css(t,{background:"",pointerEvents:""}),$t("canvas",t).for(t=>t._s()),$("htrack")._s(),$("vtrack")._s(),$("btn")._s(),$("rbtn")._h(),ac($("L")),css($("loading"),{background:"#0000",display:"none"}),ac($("box"))},o[1].onclick=$E.openGame,o[2].onclick=()=>{let t=$E.exportGame();t&&($E.GAME.id&&(t.id=$E.GAME.id),CIW.put("proj",t).then(t=>{$E.GAME.id=t.target.result,UI.alert("保存成功！"),$E.modified=!1},t=>{console.error(t),UI.alert("保存失败！")}))},o[3].onclick=()=>{$E._r&&UI.confirm("确定清空整个房间？").then(t=>{t.i||($E.C.addUndo(),$E._r.obj="|||||||||||",$E._r.dec(),$E.$O&&$E.$P())})},o[4].onclick=()=>(new UI.M).t("支持文件格式：").t("- Cloud I Wanna 游戏工程文件 (.ciwp)").t("- Cloud I Wanna 旧版地图文件 (.iw)").t("- Jtool 地图文件 (.jmap)").b("选择文件","取消").then(t=>{t.i||UI.file(".ciwp,.iw,.jmap",t=>{switch(t.slice(t.lastIndexOf(".")+1)){case"ciwp":return"DataURL";default:return"Text"}}).then(([t,o])=>{let i=$E.import[o.slice(o.lastIndexOf(".")+1)];i?i(t):UI.alert("不支持该文件格式")})}),o[5].onclick=()=>{let t=$E.exportGame(),o=UI.S("导出画风",1);t&&new UI.M(300).h("导出").ac(o,UI.span("导出房间 "),UI.S("全选",1,1).on(function(t){for(let o=this.nS();o;o=o.nS())o.set(t)}),...t.R.map(t=>UI.S("- "+t.name,1))).b("导出","取消").then(i=>{if(!i.i){o.v||(t._s=[]);for(let i=t.R.length;i--;){let e=t.R[i];o.nS(3+i).v?o.v||(delete e.spr,delete e.bg,delete e.col):t.R.splice(i,1)}Ipc.zip(JSON.stringify(t),1,o=>Ipc.dl($M.b2b(o),t.N+".ciwp",0,t=>t&&UI.alert("导出成功！")))}})},o[6].onclick=()=>UI.alert("此功能暂未开放"),css(o[7].ch,{color:"#888"},2,{}),o[7].onclick=function(t){let o=t.target,i=[...this.ch];if("SPAN"===o.tagName){let t=Number(o.innerText);if(!isNaN(t))return css(i.slice(2),{color:"#888"}),o.style.color="",$E.grid.set(t),$E.grid.draw()}$E.grid.show=!$E.grid.show,css(i.slice(0,2),{color:$E.grid.show?"":"#888"}),$E.grid.draw()},i[0].onclick=()=>{if($E._r)for(let t=Res.sprList.len;t--;){let o=Res.spr[Res.sprList[t]];o.splice(0,o.length,...$R.G.R[$E._r.ind].Spr[Res.sprList[t]])}$R.exit(),o[0].reset()},[[["time","timer","时间",70],["dth","skull","死亡",36]],[["room","warp","房间",64,"dots"]],[["plyX","ply","玩家 x",62],["plyY",0,"y",62],["plyA",0,"xa",32]],[["fps",0,"FPS",20],["per",0,"",34],["rps",0,"",20],["perD",0,"",40]]].for((t,o)=>{let e=0,r=i[o+1];t.for(t=>{let o=r.ap(El("span","ib",{innerHTML:t[1]?UI.ico(t[1])+t[2]:t[2]})),i=r.ap(El("span",t[4]?"ab "+t[4]:"ab")),d=o.offsetWidth+t[3];o.style.width=d+"px",e+=d,i.id="g-"+t[0],css(i,{left:e-t[3]+10+"px",width:t[3]+"px",whiteSpace:"nowrap"})})}),css(i,{pointerEvents:"none"},0),$("rbtn")._h();let e=$c("cat");e[0].ap(UI.I("游戏名",{l:32},330).on(t=>$E.GAME.N=t));let r=UI.p(UI.ico("add")+i18n("添加全局变量"));r.onclick=()=>$E.addVar(),css(r,{display:"inline-block",marginLeft:"7px",cursor:"pointer"});let d=El("p").tx("全局变量");d.ap(UI.help("变量"),UI.span("（存档时，全局变量会被储存）",0,15)),e[1].ap(UI.C("存档模式",0,"S键","射击","触碰").on(t=>$E.GAME.S=t),d,El("div",0,{id:"vars"}),r),e[2].firstChild.ap(UI.help("游戏房间")),e[2].onmousemove=function(t){if(t.stopPropagation(),this.drag){let o=this.dragI+(t.y-this.dragY+16>>5),i=this.drag.room.ind;if(o!==i&&(o<0&&(o=0),0===o&&0===$E._R[o].type&&(o=1),o>=$E._R.length&&(o=$E._R.length-1),o!==i)){let t=o-i;t<0?$E.roomUp(this.drag,this.drag.pS(-t)):$E.roomDown(this.drag,this.drag.nS(t))}}},e[2].onmouseleave=e[2].onmouseup=function(){this.drag&&(this.drag.style.borderColor=this.drag.firstChild.firstChild.style.background="",this.drag=null,this.style.cursor="",css($c("room"),{pointerEvents:""}))};let s=El("div");["空白","模板库","本地模板"].for(t=>s.ap(El("div","setcat").tx(t),El("div","setpage"))),s.style.height="426px",UI.bindCat(s),s.clr=()=>{s.now&&(s.now.id="",s.now=null,s.newR=null)},s.chk=(t,o)=>{$E._R.find(t=>t.type===o)?(dac(t),t===s.now&&s.clr()):ac(t)},s.set=(t,o,i)=>{let e=$("thmSrc");e&&(e.id=""),t.id="thmSrc",s.newR=o,s.now=t,s.tab=i},s.get=t=>{let o=t.save();return{type:o.type,w:o.w,h:o.h,obj:o.obj,bg:o.bg,spr:o.spr,col:o.col}};let l=$c("setpage",s);css(l,{bottom:"64px"}),["标题界面","通关界面","普通房间","耐久房间","选关界面"].for((t,o)=>{let i=l[0].ap(El("div","thm").tx(t));i.onclick=()=>s.set(i,o,0),3===o&&i._h()}),l[0].set=function(){for(let t=2;t--;)s.chk(this.ch[t],t)},l[0].ap(UI.p("标题界面：游戏最初的房间，一般用做标题"),UI.p("通关界面：到达此房间，游戏即通关"),UI.p("选关界面：不属于游戏流程的房间(不会存档)，一般用做选关")),s.pv=t=>{let o=El("div","thm"),i=o.ap(El("div","thm-pv"));css(i,{width:"200px",height:"152px",background:`url(${CDU(t.p)})`});let e=o.ap(El("p").tx(t.n));return t.createdAt||(e.ap(UI.span(UI.ico("trash"))).onclick=i=>{i.stopPropagation(),UI.confirm("确定要删除此模板？").then(i=>{i.i||CIW.del("tpl",t.id).then(()=>{o===s.now&&s.clr(),o.remove()})})},e.ap(UI.span(UI.ico("upload"))).onclick=o=>{o.stopPropagation(),UI.confirm("确定要将此模板上传到模板库？").then(o=>{if(!o.i){let o=DB.O("Template");for(let i in t)"id"!==i&&o.set(i,t[i]);o.save().then(o=>{CIW.put("tpl",{...t,id:o.id,createdAt:o.createdAt}),UI.alert("上传成功！")},t=>UI.alert("上传失败！"))}})},css(e.ch,{margin:"4px",pointerEvents:"auto",color:"var(--c)"})),o.r={type:t.t,w:t.w,h:t.h,obj:t.o,bg:t.b,spr:t.c??[]},t.k&&(o.r.col=t.k),o.onclick=()=>s.set(o,o.r,o.tab),o},l[1].set=function(){this.loaded?$c("thm",this).for(t=>{t.r.type<2&&s.chk(t,t.r.type)}):CIW.find("tpl").then(t=>{let o=new Date(0);t.for(t=>{if(!t.createdAt)return;let i=this.ap(s.pv(t));i.tab=1,i.r.type<2&&s.chk(i,i.r.type);let e=new Date(t.createdAt);e>o&&(o=e)}),this.loaded=!0,DB.Q("Template").greaterThan("createdAt",o).find().then(t=>t.for(t=>{let o=t.toJSON();o.id=o.objectId,delete o.objectId,delete o.ACL,delete o.updatedAt;let i=this.ap(s.pv(o));i.tab=1,i.r.type<2&&s.chk(i,i.r.type),CIW.put("tpl",o)}))})},l[2].ids=[],l[2].set=function(){$c("thm",this).for(t=>{t.r.type<2&&s.chk(t,t.r.type)}),CIW.find("tpl").then(t=>{t.for(t=>{if(t.createdAt)return;if(this.ids.includes(t.id))return;let o=this.ap(s.pv(t));o.tab=2,this.ids.push(t.id),o.r.type<2&&s.chk(o,o.r.type)})})},$("crtr").onclick=t=>{new UI.M(800,512).h("新建房间").cb().ap(s).b("确定","取消").then(t=>{s.now&&(s.now.id=""),t.i||void 0!==s.newR&&null!==s.newR&&(s.newR.w?$E.addRoom(new $E.Room(2,s.newR)).firstChild.click():$E.addRoom(new $E.Room(s.newR)).firstChild.click())}),s.now?(s.now.id="thmSrc",l[s.tab].set()):s.firstChild.onclick()},e[3].ap(UI.I("房间名",{l:8},80).on(t=>{$E._r.name=t,$c("room")[$E._r.ind].firstChild.lastChild.tx(t)}),UI.I("房间大小",{type:"number",m:800,M:4e3,s:32},40).on(t=>$E._r.setWH(t)),UI.I("×",{m:608,M:3040,s:32},40).on(t=>$E._r.setWH(0,t)),UI.C("出房间外",0,"死亡","砖块","穿屏","左右穿屏","上下穿屏").on(t=>$E._r.out=t),UI.C("视野模式",0,"单面","跟随").on(t=>$E._r.view=t),UI.B("保存为模板房间",1).on(()=>{$E._r.enc(1);let t=$E._r.save(),o={t:t.type,w:t.w,h:t.h,o:t.obj,b:t.bg,c:t.spr,p:MDU($E.capture(.25,8))};t.col&&(o.k=t.col),JSON.stringify(o.c)===JSON.stringify(Lib.thm)&&delete o.c,UI.prompt("请输入模板名称").then(t=>{t.i||(o.n=t.v,o.id=Date.now().toString(36),CIW.put("tpl",o).then(t=>UI.alert("保存成功！")))})}));let n=UI.C("背景",0,"纯色","渐变","图片"),c=El("div","rl"),a=El("div","rl"),E=El("div","grad"),p=E.ap(El("div"));css([c,a],{paddingLeft:"8px"}),p.crt=function(t,o,i){let e=this.ap(El("div","gradc"));css(e,{left:t,background:o}),e.s=i,e.onmousedown=function(t){let o=this.pN;t.button?o.ch.length>2&&(this.remove(),o.ref()):(this.d=t.x-this.offsetLeft,o.d=this)},e.ondblclick=function(t){css(UI.ipc,{left:`${t.x}px`,top:`${t.y}px`}),UI.ipc.onchange=()=>{this.style.background=UI.ipc.value,this.s=UI.ipc.value.slice(1)+this.s.slice(6),this.pN.ref()},UI.ipc.value="#"+this.s.slice(0,6),setTimeout(()=>UI.ipc.click(),1)}},p.ref=function(){let t=this.ch,o=[];for(let i=0;i<t.length;i++)o.push(t[i].s);this.pN.set(o.toString(),1,1)},p.onmousedown=function(t){if(t.target!==this||t.button)return;let o=this.getBoundingClientRect(),i=((t.x-o.left)/160).toFixed(2),e=this.pN;e.set(e.v+",ffffff "+i,1,1),this.crt(100*i+"%","#ffffff","ffffff "+i)},p.onmousemove=function(t){if(this.d){let o=Math.mM((t.x-this.d.d)/160,0,1).toFixed(2);this.ch;this.d.style.left=100*o+"%",this.d.s=this.d.s.slice(0,7)+o,this.ref()}},p.onmouseleave=p.onmouseup=function(){this.d=null},E.set=function(t,o,i){let e=t.split(","),r="",d=this.firstChild;if(!o)for(let t=d.ch.length;t--;)d.ch[t].remove();e.sort((t,o)=>t.slice(7)-o.slice(7)),this.v=t,e.for(t=>{let i=100*t.slice(7)+"%",e="#"+t.slice(0,6);r+=e+" "+i+",",o||d.crt(i,e,t)}),this.style.background="linear-gradient(90deg,"+r.slice(0,-1)+")",i&&Res.loadBg({m:3+this.pS().v,g:(1===this.pS().v?this.nS().v+":":"")+this.v}).then(t=>{$E._r.setBg(t),$E._r.drawBg()})},E.set("000000 0,ffffff 1"),c.ap(UI.C("模式",0,"线性","径向").on(t=>{let o=c.ch[2],i=$E._r.bg.g.split(":"),e=(1===t?o.v+":":"")+i[i.length-1];Res.loadBg({m:t+3,g:e}).then(t=>{$E._r.setBg(t),$E._r.drawBg()}),1===t?o._s():o._h()}),E,UI.I("角度",{type:"number",m:0,M:360,value:270}).on(t=>Res.loadBg({m:4,g:t+":"+$E._r.bg.g.split(":")[1]}).then(t=>{$E._r.setBg(t),$E._r.drawBg()}))),c.firstChild.style.display="inline-block",c.firstChild.set(1),a.ap(UI.span("图片"),UI.B2("从画风库中选择").on(()=>$E.ThmLib.showSpr("bg")),UI.C("模式",0,"平铺","固定","拉伸").on(t=>{$E._r.bg.m=t/2<<0,$E._r.drawBg()}),UI.R("色调",0,359,0).on(t=>$E._r.colBg(t,"","","")),UI.R("亮度",0,100,50).on(t=>$E._r.colBg("","",t,"")),UI.R("饱和度",0,100,50).on(t=>$E._r.colBg("",t,"","")),UI.R("对比度",-100,100,50).on(t=>$E._r.colBg("","","",t))),css(a.ch[2],{float:"right",marginRight:"10px"}),n.style.display="inline-block",n.on((t,o)=>{let i=n.nS(2);i._h(),c._h(),a._h();const r=$E._r.bg;switch(t){case 1:i._s(),1!==o&&i.f(i.c(i.lastChild.style.background)||"#fff");break;case 2:c._s();let t=c.ch;if(5===r.m?t[2]._h():t[2]._s(),1===o){if(4===r.m){let o=r.g.split(":");t[1].set(o[1]),t[2].set(o[0])}else t[1].set(r.g);t[0].set(r.m-3)}else t[1].set(t[1].v,0,1);break;case 4:a._s();let e=a.ch;if(1===o){let t=(r.g||"").split(",");e[1].v=r.id,e[2].set(1<<r.m),e[3].set(t[0]),e[5].set(t[1]),e[4].set(t[2]),e[6].set(t[3])}else{let t={id:e[1].v??0,m:e[2].v/2<<0,g:e[3].v+","+e[5].v+","+e[4].v+","+e[6].v};dac($("box"),""),Res.loadBg(t,1).then(t=>{$E._r.setBg(t),$E._r.drawBg(),ac($("box"))},Res.fail)}}$E.fixH(e[4])});let f=El("div","rl");$E.tileCol=f,f._h(),Object.defineProperty(f,"spr",{get(){return this._spr},set(t){t!==this._spr&&(this._spr=t,t?(this.loadCol(t),this._s()):(this._h(),css($c("spr"),{outline:""})),$E.fixH($c("cat")[4]))}}),f.setCol=function(...t){if(this.spr&&Res.spr[this.spr]){if($E._r.col){for(let o in $E._r.col){let i=$E._r.col[o].split("|");if(i.includes(this.spr)){if(o.split(",").for((o,i)=>{""===t[i]&&(t[i]=o)}),i.length>1){let t=[];i.for(o=>{o!==this.spr&&t.push(o)}),$E._r.col[o]=t.join("|")}else delete $E._r.col[o];break}}if(t=Res.color.gen(t)){let o=!0;for(let i in $E._r.col)if(i===t){$E._r.col[i]+="|"+this.spr,o=!1;break}o&&($E._r.col[t]=this.spr)}}else(t=Res.color.gen(t))&&($E._r.col={},$E._r.col[t]=this.spr);this.col=t,Res.colSpr(Res.spr[this.spr],t).then(()=>{$E.drawThn($("tile").spr[this.spr],Res.spr[this.spr]),$E.sfO.redraw()})}},f.loadCol=function(t){let o=[0,50,50,50],i=this.ch;if(this.col="",$E._r.col)for(let i in $E._r.col){if($E._r.col[i].split("|").includes(t)){i.split(",").for((t,i)=>{""!==t&&(o[i]=Number(t))}),this.col=i;break}}i[2].set(o[0]),i[3].set(o[2]),i[4].set(o[1]),i[5].set(o[3])};let h=El("div");h.id="tile",h.spr={},h.skip=["pst","dko","dkf","son","sof","sg","ist","ifg","txt"];let u=[...Res.sprList];u.splice(53,1),u.splice(30,0,"cvr"),u.for(t=>{h.skip.includes(t)||(h.spr[t]=h.ap(El("canvas","spr",{width:32,height:32})),h.spr[t].spr=t,h.spr[t].onclick=function(t){let o=t.ctrlKey?f.col:void 0;if(css($c("spr"),{outline:""}),css(this,{zIndex:1,outline:"1px solid #fd0"}),f.spr=this.spr,void 0!==o){o=(o||"0,50,50,50").split(","),f.setCol(...o);let t=f.ch;t[2].set(o[0]),t[3].set(o[2]),t[4].set(o[1]),t[5].set(o[3])}})}),f.ap(UI.span("设置贴图"),UI.B2("从画风库中选择").on(()=>$E.ThmLib.showSpr(f.spr)),UI.R("色调",0,359,0).on(t=>f.setCol(t,"","","")),UI.R("亮度",0,100,50).on(t=>f.setCol("","",t,"")),UI.R("饱和度",0,100,50).on(t=>f.setCol("",t,"","")),UI.R("对比度",-100,100,50).on(t=>f.setCol("","","",t)),UI.p("*按住ctrl点击其它贴图可使其应用当前调色")),e[4].ap(UI.span("预设画风"),UI.B2("从画风库中选择").on(()=>$E.ThmLib.show()),El("br"),n,UI.span(" "),UI.Col("颜色").on(t=>{$E._r.setBg({m:3,g:t}),$E._r.drawBg()}),c,a,UI.p("贴图"),h,f),Au.onready(()=>{$E.bgm=new Au.Bgm,$E.bgm.loop=!0});let b=El("div")._c(UI.Play(1).on(t=>t?$E.bgm.play():$E.bgm.pause()),UI.R("音量调整",0,100,100,1,"var(--cbtl)").on(t=>{$E.bgm.vol=t,$E._r.bgm.v=t}),UI.S("自动播放",1,1).on(t=>$E._r.bgm.a=t),UI.S("循环播放",1,1).on(t=>$E._r.bgm.l=t),UI.S("同步帧率",0,1).on(t=>$E._r.bgm.s=t));b.firstChild.id="bgmPv",e[5].ap(UI.span("音乐来源"),UI.O("未指定","无音乐","直链","网易云").on(t=>{let o=$E._r.bgm,i=$c("block",e[5]);if(o.m=t,css(i,{display:"none"},t,{display:""}),t<2)b._h();else{b._s(),$E.bgm.au.preload="none";let t=i[o.m].ch;t[0].set(o.i??""),t[0].f(o.i??"","none"),t=b.ch,t[0].hC("p")&&t[0].click(),t[1].set(o.v),t[1].f(o.v??100),t[2].set(o.a??1),t[3].set(o.l??1),t[4].set(o.s)}$E.fixH(e[5])}),El("div","block")._c(UI.span("*未指定音乐时，当前播放的音乐不会停止")),El("div","block")._c(UI.span("*设置为无音乐，会停止播放所有音乐")),El("div","block")._c(UI.I("音频文件直链",0,300).on((t,o="auto")=>{$E._r.bgm.i=t,$E.bgm.au.preload=o,$E.bgm.url=t,$E.bgm.au.onerror=()=>t&&UI.alert("音乐载入出错：音频文件获取失败")})),El("div","block")._c(UI.I("网易云音乐ID",0,112).on((t,o="auto")=>{$E._r.bgm.i=t,$E.bgm.au.preload=o,$E.bgm.url=t?`https://music.163.com/song/media/outer/url?id=${t}.mp3`:"",$E.bgm.au.onerror=()=>t&&UI.alert("音乐载入出错：音乐ID错误或音乐版权受限")}),UI.span("*音乐ID在音乐链接中，如：https://music.163.com/#/song?id=<b>22776365</b>")),b),css($c("block",e[5]),{display:"none"},0),b._h(),e[7].ap($E.BObj("ply","玩家","ply"),$E.BObj("gov","GameOver","txt",[1,1,1,1])),e[8].ap($E.Obj(0),$E.Obj(1,1),$E.Obj(2,1)),e[9].ap($E.Obj(3,1),$E.Obj(4),$E.Obj(5,1),$E.Obj(6,1),$E.Obj(50,1)),e[10].ap($E.Obj(7,1,1),$E.Obj(8,1),$E.Obj(9,1),$E.Obj(10),$E.Obj(11,0,1),$E.Obj(12)),e[11].ap($E.Obj(13,1,1),$E.Obj(14,1,1),$E.Obj(15),$E.Obj(16),$E.Obj(49),$E.Obj(17),$E.Obj(18),$E.Obj(19),$E.Obj(25,0,0,1),$E.Obj(20),$E.Obj(51),$E.Obj(21,1,0,1),$E.Obj(22),$E.Obj(23,0,1,2),$E.Obj(24,0,1,2)),e[12].ap($E.Obj(26),$E.Obj(27),$E.Obj(28),$E.Obj(29),$E.Obj(30),$E.Obj(31),$E.Obj(32),$E.Obj(33),$E.Obj(34),$E.Obj(35)),e[13].ap($E.Obj(36,1),$E.Obj(37,0,1),$E.Obj(38,0,0,1)),e[14].ap($E.Obj(39),$E.Obj(40,1,1),$E.Obj(41),$E.Obj(42),$E.Obj(43,1),$E.Obj(44,1,0,2),$E.Obj(45,1),$E.Obj(46,1),$E.Obj(47,1),$E.Obj(48,1,0,2)),e[18].firstChild.ap(UI.help("物体属性")),e[19].firstChild.ap(UI.help("图层"));for(let t=0;t<12;t++)e[19].ap(UI.span(`${UI.ico("layer")} ${i18n("图层")}${t}${11===t?"(GUI)":""} `),UI.S("显示",1,1).on((o,i)=>{$E.C.vLy(t,o),o&&"sw"!==i.nS().lastChild.className||$E.C.lkLy(t,!o)}),UI.S(" "+i18n("锁定"),0,1).on(o=>$E.C.lkLy(t,o)),El("br"));e.for((t,o)=>$E.fixH(t,t=>{$S.get("cat"+o)&&t.aC("fold"),t.firstChild.onclick=()=>{t.hC("fold")?(t.rC("fold"),$S.rm("cat"+o)):(t.aC("fold"),$S.set("cat"+o,1))}}));let w=$("htrack"),g=$("vtrack");$("hbar").onmousedown=function(t){this.pN.drag=t.x-this.style.transform.slice(11,-3)},$("vbar").onmousedown=function(t){this.pN.drag=t.y-this.style.transform.slice(11,-3)},w.onmousemove=function(t){this.drag&&($E._r.editX=Math.mM((t.x-this.drag)/this.clientWidth*$E._r.w<<0,0,$E._r.w-800),$E._r.setBar())},g.onmousemove=function(t){this.drag&&($E._r.editY=Math.mM((t.y-this.drag)/this.clientHeight*$E._r.h<<0,0,$E._r.h-608),$E._r.setBar())},w.onmouseleave=w.onmouseup=g.onmouseleave=g.onmouseup=function(){this.drag=0},Lib.obj.for(t=>{for(let o=t.spr.length;o--;)t.spr[o]=Res.spr[t.spr[o]]});let m=$("cbtn"),R=[];["keyboard","set"].for(t=>{let o=El("div","hover");o.innerHTML=UI.ico(t),R.push(o.ap(El("div","pointer"))),m.ap(o)});let O=UI.O("从当前房间开始","从头开始","从存档继续");O.set(App.gC("edit","start")),css([R[0].ap(El("div","box")),R[1].ap(El("div","box")._c(UI.span("全局音量"),UI.Bar(150,App.gC("run","vol")/100,1,0,"var(--cbtl)").in(t=>Au.setVol(100*t)).on(t=>{App.sC("run","vol",Math.round(100*t))}),UI.I("网格透明度",{m:.2,M:1,s:.1,value:App.gC("edit","gridOpacity")}).on(t=>{App.sC("edit","gridOpacity",t),$E.grid.al=t,$E.grid.draw()}),El("br"),UI.I("最大撤销次数",{m:10,M:500,value:App.gC("edit","undoDepth")}).on(t=>App.sC("edit","undoDepth",t)),UI.S("显示不可见物体",$E.showInvis).on(t=>{App.sC("edit","showInvis",t),$E.showInvis=t,$E.sfO.redraw()}),UI.S("智能摆刺",App.gC("edit","autoSpk")).on(t=>App.sC("edit","autoSpk",t)),UI.span("运行入口"),O.on(t=>App.sC("edit","start",t))))],{right:0,width:"240px",padding:"12px",fontSize:"16px"}),[["鼠标左键","摆放物体"],["鼠标右键","删除物体"],["Ctrl+鼠标左键","选中物体"],["Ctrl+鼠标右键","取消选中"],["Ctrl+鼠标左键拖动","区域选择"],["Shift+鼠标左键拖动","区域摆放"],["W,A,S,D","切换物体方向"],["鼠标滑轮","缩放物体"],["鼠标中键拖动","拖动视野"],["方向键","移动选中物体"],["退格,Delete","删除选中物体"],["Alt","忽略网格"],["Ctrl+S","保存"],["Ctrl+A","全选"],["Ctrl+C","复制"],["Ctrl+V","粘贴"],["Ctrl+X","剪切"],["Ctrl+Z","撤销"],["Ctrl+Shift+Z","重做"],["Tab","切换面板"],["G","开关网格"]].for(t=>{R[0].firstChild.ap(El("div","op").tx(t[0])._c(El("span","fr").tx(t[1]))).style.paddingRight="6px"})}$E.import={ciwp(t){return Ipc.zip(t.split(",")[1],0,t=>$M.read($M.b2b(t),"Text").then(t=>{try{let o=JSON.parse(t);(new UI.M).t("请选择打开方式：").b("替换当前游戏","与当前游戏合并").then(t=>{if(t.i){if($E._R.length+o.R.length>128)return UI.alert("房间数量过多，导入失败！");o._s&&o._s.for(t=>{$E.GAME._s?.find(o=>o.c===t.c&&o.h===t.h)||$E.GAME._s.push(t)});for(let t in o.VAR)void 0===$E.GAME.VAR[t]&&$E.addVar(t);let t=[];for(let o=128;o--;)t.push(0);$E._R.for(o=>t[o.id]=1),o.R.for(o=>{o.type<2&&$E._R.find(t=>t.type===o.type)||(o.id=t.indexOf(0),o.id<128&&o.id>=0&&(t[o.id]=1,$E.addRoom(new $E.Room(o.type,o))))}),UI.alert("合并游戏可能引起传送门房间引用错误，请注意检查修改")}else $E.setGame(o)})}catch{UI.alert("文件解析错误！")}}))}},$E.import.iw=t=>{UI.alert("旧版地图导入功能正在开发中")},$E.import.jmap=t=>{let o=t.split("\n");if(o[11]){$E.C.addUndo(),$E._r.obj="|||||||||||",$E._r.dec(),$E.$O&&$E.$P();const t=o[4].split(" "),i=[0,Lib.obj[3],Lib.obj[4],Lib.obj[7],{...Lib.obj[7],ang:270},{...Lib.obj[7],ang:90},{...Lib.obj[7],ang:180},{...Lib.obj[7],scx:.5,scy:.5},{...Lib.obj[7],ang:270,scx:.5,scy:.5},{...Lib.obj[7],ang:90,scx:.5,scy:.5},{...Lib.obj[7],ang:180,scx:.5,scy:.5},Lib.obj[8],Lib.obj[2],Lib.obj[13],Lib.obj[16],Lib.obj[15],{...Lib.obj[14],ang:180},Lib.obj[14],Lib.obj[9],Lib.obj[50],Lib.obj[0],Lib.obj[1],Lib.obj[25],Lib.obj[49]];for(let o=0;o<t.length;o++){let e=Number(t[o++]),r=Number(t[o++]);if(i[t[o]]){let d=new $E.Object(e,r,i[t[o]]);$E.sfO.dirty(d.R[0],d.LT[1],d.w,d.h)}}$E._r.setNum(),$E.sfO.update()}else UI.alert("文件解析错误！")},$E.C={mX:0,mY:0,mTX:0,mTY:0,mPX:0,mPY:0,mB:0,lkLy(t,o){$E._r.ly[t].lock=o},vLy(t,o){$E._r.ly[t].vis=o,$E.sfO.redraw()},pRc:(t,o,i,e,r,d)=>t>=i&&o>=e&&t<r&&o<d,cRc:(t,o,i,e,r,d,s,l)=>t+i>r&&t<r+s&&o+e>d&&o<d+l,atPosDep:(t,o,i)=>$E._r.ly[i].lock?null:$E._r.ly[i].find(i=>i.x===t&&i.y===o),colPosDep(t,o,i){if($E._r.ly[i].lock)return-1;for(let e=$E._r.ly[i].length;e--;){let r=$E._r.ly[i][e],d=r.R,s=d[0],l=d[1];if(s<=t&&s+r.w>t&&l<=o&&l+r.h>o)return e}return-1},colPosObj(t,o){for(let i=$E._r.ly.length;i--;){let e=this.colPosDep(t,o,i);if(-1!==e)return $E._r.ly[i][e]}return null},cXY(){const t=$E._O;let o=this.mX,i=this.mY;return t&&t.a&&(1===t.a?(o+=16,i+=t.o.spr[0].y?16:0):2===t.a&&(i+=Math.round(32-t.o.spr[0].h*(t.o.scy||1)))),[o,i]},dMouse(t,o,i,e,r,d,s,l){if($E.pro.lock)return;const n=$E._O,c=$E.sfE;let a=c.R-c.L,E=c.B-c.T;if(a>0&&E>0&&(c.clearRect(c.L,c.T,a,E),c.L=Infinity,c.T=Infinity,c.R=-Infinity,c.B=-Infinity),!i&&n&&($E.$O&&$E.$O.some(t=>{let o=t.R,i=o[0],e=o[1];return this.pRc(this.mTX,this.mTY,i,e,i+t.w,e+t.h)})&&(i=!0),!i)){void 0===e&&(e=t,r=o,d=32,s=32,l=32);let i=e+d,a=r+s;n.o.spr.for(t=>{for(let o=r;o<a;o+=l)for(let r=e;r<i;r+=l)if("blk"===t.name||"tile"===t.name)(n.o.scx<1||n.o.scy<1)&&$E.eSmth(c),c.drawImage(t[0],0,0,32,32,r,o,32*n.o.scx,32*n.o.scy),$E.dSmth(c),c.dirty(r,o,32*n.o.scx,32*n.o.scy);else{let i=n.o.scx||1,e=n.o.scy||1;if(n.o.ang){$E.Object.drawEx(c,t,0,r,o,i,e,n.o.ang);let d=(t.w>>1)*i,s=(t.h>>1)*e,l=r-t.x*i+d,a=o-t.y*e+s,E=Math.max(d,s);n.o.ang%90&&(E*=Math.SQRT2),c.dirty(l-E,a-E,2*E,2*E)}else 1!==i||1!==e?($E.Object.drawSc(c,t,0,r,o,i,e),c.dirty(r-t.x*i,o-t.y*e,t.w*i,t.h*e)):(c.drawImage(t[0],r-t.x,o-t.y),c.dirty(r-t.x,o-t.y,t.w,t.h))}})}$E.$O&&(c.strokeStyle="#000",$E.$O.for(t=>{let o=t.R[0],i=t.LT[1],e=t.w,r=t.h;c.strokeRect(o-.5,i-.5,e+1,r+1),c.strokeRect(o-2.5,i-2.5,e+5,r+5),c.dirty(o-3,i-3,e+6,r+6)}),c.strokeStyle="#fd5",$E.$O.for(t=>c.strokeRect(t.R[0]-1.5,t.LT[1]-1.5,t.w+3,t.h+3))),i&&void 0!==e&&(c.strokeStyle="#000",c.strokeRect(e-.5,r-.5,d+1,s+1),c.strokeRect(e-2.5,r-2.5,d+5,s+5),c.strokeStyle="#fd5",c.strokeRect(e-1.5,r-1.5,d+3,s+3),c.dirty(e-3,r-3,d+6,s+6))},delPos(t,o){let i=this.colPosObj(t,o),e=!1;if(i){let t=i.dep;if($E.$O)for(let t=$E.$O.length;t--;)if($E.$O[t]===i){$E.$O.splice(t,1),$E.$P($E.$O.length?$E.$O:0),e=!$E.$O,this.dMouse(0,0,1);break}$E._r.ly[t].rm(i),$E._r.setNum(),$E.sfO.update()}return e},moveEditO(t,o){$E.$O.for(i=>{let{w:e,h:r}=i;$E.sfO.dirty(i.R[0],i.LT[1],e,r),i.x+=t,i.y+=o,i.tile&&$E.Object.rTile(i.x-t,i.y-o,e,r,i),$E.sfO.dirty(i.LT[0],i.LT[1],e,r)}),$("edit-x")?.set($E.$O[0].x),$("edit-y")?.set($E.$O[0].y),$E.sfO.update(),this.dMouse(0,0,1)},editDo(){if($E.$O){if($E.pro.lock)return $E.$O[0].id;let t=$E._r.ly.map(()=>[]);return t.first=[$E.$O[0].dep,$E.$O[0].sid],$E.$O.slice(1).for(o=>t[o.dep].push(o.sid)),t}return null},editPos(){let t=$c("page")[3],o=$c("p-ev",t),i=$c("p-ac",t),e={top:t.scrollTop,ev:[],pac:[]};return o.for(t=>e.ev.push(t.hC("fold"))),i.for(t=>{t.hC("fold")&&e.pac.push(t._id)}),e},rcPos(t){let o=$c("page")[3],i=$c("p-ev",o),e=$c("p-ac",o);o.scrollTop=t.top,i.for((o,i)=>{t.ev[i]?o.aC("fold"):o.rC("fold")}),e.for(o=>{t.pac.includes(o._id)?o.aC("fold"):o.rC("fold")})},addUndo(){if(!$E._r)return;let t=$E._r,o=t.enc(),i=t.encB(),e=t.undo[t.undo.length-1];e&&o===e.code&&i===e.bobj||(t.redo.length=0,t.undo.push({code:o,bobj:i,edit:this.editDo(),pos:this.editPos()}),t.undo.length>App.gC("edit","undoDepth")&&t.undo.shift(),console.log("addUndo"))},aplDo(t,o){t.obj=o.code,t.dec(),t.decB(o.bobj),o.edit?("string"==typeof o.edit?$("bi-"+o.edit).click():($E.pro.lock=!1,$E.$O=[t.ly[o.edit.first[0]][o.edit.first[1]]],o.edit.for((o,i)=>o.for(o=>$E.$O.push(t.ly[i][o]))),$E.$P($E.$O)),this.rcPos(o.pos)):$E.$P(),$E.C.dMouse(0,0,1)},undo(){if(!$E._r)return;let t=$E._r,o=t.undo.pop(),i=t.enc(),e=t.encB();for(;o?.code===i&&o?.bobj===e;)o=t.undo.pop();o&&(t.redo.push({code:i,bobj:e,edit:this.editDo(),pos:this.editPos()}),this.aplDo(t,o))},redo(){if(!$E._r)return;let t=$E._r,o=t.redo.pop();o&&(t.undo.push({code:t.enc(),bobj:t.encB(),edit:this.editDo(),pos:this.editPos()}),this.aplDo(t,o))},clipBoard:[],copy(t){this.clipBoard.length=0;let o=Infinity,i=Infinity;t.for(t=>{t.x<o&&(o=t.x),t.y<i&&(i=t.y)}),t.for(t=>this.clipBoard.push({x:t.x-o,y:t.y-i,ind:t.ind,add:JSON.parse(JSON.stringify(t.add))}))},paste(t,o){this.clipBoard.length&&(this.addUndo(),$E.pro.lock=!1,$E.$O=[],this.clipBoard.for(i=>{let e={...Lib.obj[i.ind]};e.add={...Lib.obj[i.ind].add,...i.add},$E.$O.push(new $E.Object(t+i.x,o+i.y,e))}),$E._r.setNum(),$E.sfO.redraw(),$E.$P($E.$O),this.dMouse(0,0,1))}},doc.fonts.ready.then(()=>{const t=$("screen");t.get=()=>{let o=t.getBoundingClientRect();t.left=o.left,t.top=o.top},window.onresize=t.get,t.get(),t.onmousedown=o=>{if(!$E.edit)return;const i=$E.C;if(i.mB=o.button,i.mB&&o.preventDefault(),o.stopPropagation(),$E._r)if(t.dX=i.mX,t.dY=i.mY,t.drag=!0,0===i.mB){if(o.ctrlKey){let t=i.colPosObj(i.mTX,i.mTY);t&&$E.$O&&$E.$O.includes(t)||(t?$E.pro.lock?($E.pro.lock=!1,$E.$O=[t]):$E.$O?$E.$O.push(t):$E.$O=[t]:$E.$O=null,i.dMouse(0,0,1),$E.$O?($E.tab[3].click(),$E.$P($E.$O)):$E.$P())}else if($E.$O){let t=i.colPosObj(i.mTX,i.mTY);$E.$O.includes(t)?($E.$O.drag=t,i.addUndo()):($E.$P(),i.dMouse(0,0,1))}if($E._O&&!$E.$O&&!o.ctrlKey&&!o.shiftKey){let[o,e]=i.cXY(),r=$E._O.dep;if($E._r.ly[r].lock)UI.alert("物体所在图层已"+($E._r.ly[r].vis?"锁定":"隐藏")),t.drag=!1,t.out=!0;else if(!i.atPosDep(o,e,r)){i.addUndo();let t=new $E.Object(o,e,$E._O.o);$E._r.setNum(),$E.sfO.dirty(t.R[0],t.LT[1],t.w,t.h),$E.sfO.update()}}}else if(2===i.mB){if(o.ctrlKey){if($E.$O&&!$E.pro.lock){let t=i.colPosObj(i.mTX,i.mTY);if(t)for(let o=$E.$O.length;o--;)if($E.$O[o]===t){$E.$O.splice(o,1),$E.$P($E.$O.length?$E.$O:0),i.dMouse(0,0,1);break}}}else if(i.addUndo(),i.delPos(i.mTX,i.mTY)||$E.$O){$E.$O&&$E.$P();let[t,o]=i.cXY();i.dMouse(t,o)}}else 1===i.mB&&(t.style.cursor="grab")},t.outf=()=>{const o=$E.C;if(t.drag=!1,t.style.cursor="",$E.$O&&($E.$O.drag=null),!o.mB){if(t.slc){$E.$O&&!$E.pro.lock||($E.pro.lock=!1,$E.$O=[]);let[i,e,r,d]=t.slR();for(let t=$E._r.ly.length;t--;)if(!$E._r.ly[t].lock)for(let s=$E._r.ly[t].length;s--;){let l=$E._r.ly[t][s],[n,c]=l.R;o.cRc(n,c,l.w,l.h,i,e,r,d)&&!$E.$O.includes(l)&&$E.$O.push(l)}return $E.$P($E.$O.length?$E.$O:0),t.slc=!1,o.dMouse(0,0,1),!0}if(t.fill){let i=$E._O.dep,e=t.fR;if(!$E._r.ly[i].lock){let t=e[0]+e[2],r=e[1]+e[3],d=e[4];o.addUndo();for(let s=e[1];s<r;s+=d)for(let r=e[0];r<t;r+=d)if(!o.atPosDep(r,s,i)){let t=new $E.Object(r,s,$E._O.o);$E.sfO.dirty(t.R[0],t.LT[1],t.w,t.h)}$E._r.setNum()}return t.fill=!1,o.dMouse(0,0,1),$E.sfO.update(),!0}}},t.onmouseup=o=>{$E.edit&&(o.preventDefault(),t.outf())},window.addEventListener("mouseup",()=>t.drag=!1),t.slR=()=>{let o,i,e=$E.C.mX-t.dX,r=$E.C.mY-t.dY;return e>0?o=t.dX:(o=$E.C.mX,e=-e),r>0?i=t.dY:(i=$E.C.mY,r=-r),[o,i,e+$E.grid.value,r+$E.grid.value]},t.onmousemove=o=>{if(!$E.edit)return;if(o.stopPropagation(),t.out=!1,!$E._r)return;const i=$E.C,e=$E.$O,r=$E.grid.value;let d="";if(i.mTX=o.x-t.left-32+($E._r?$E._r.editX:0)<<0,i.mTY=o.y-t.top-32+($E._r?$E._r.editY:0)<<0,i.mPX=i.mX,i.mPY=i.mY,i.mX=o.altKey?i.mTX:Math.floor(i.mTX/r)*r,i.mY=o.altKey?i.mTY:Math.floor(i.mTY/r)*r,UI.showTips(i.mX+","+i.mY,o.x+8,o.y-32),t.drag)if(0===i.mB)if(o.ctrlKey)i.mPX===i.mX&&i.mPY===i.mY&&t.slc||(t.slc=!0,i.dMouse(0,0,1,...t.slR())),e&&(e.drag=null);else{if(e&&e.drag){let t=i.mX-e.drag.x,o=i.mY-e.drag.y;(t||o)&&i.moveEditO(t,o)}t.slc&&(t.slc=!1,i.dMouse(0,0,1))}else if(2===i.mB)o.ctrlKey||i.delPos(i.mTX,i.mTY);else if(1===i.mB){let t=Math.mM($E._r.editX-o.movementX,0,$E._r.w-800),i=Math.mM($E._r.editY-o.movementY,0,$E._r.h-608);t===$E._r.editX&&i===$E._r.editY||($E._r.editX=t,$E._r.editY=i,$E._r.setBar()),d="grab"}if($E._O&&!o.ctrlKey&&(i.mPX!==i.mX||i.mPY!==i.mY)){let[r,d]=i.cXY();if(t.drag&&0===i.mB&&1!==$E._O.o.ind&&!e)if(o.shiftKey)t.fR=t.slR(),t.fR[4]=($E._O.o.scx||1)*("小砖"===$E._O.name?16:32)<<0,t.fR[0]+=r-i.mX,t.fR[1]+=d-i.mY,i.dMouse(r,d,0,...t.fR),t.fill=!0;else{t.fill=!1,i.dMouse(r,d);let o=$E._O.dep;if(!i.atPosDep(r,d,o)&&!$E._r.ly[o].lock){let t=new $E.Object(r,d,$E._O.o);$E._r.setNum(),$E.sfO.dirty(t.R[0],t.LT[1],t.w,t.h),$E.sfO.update()}}else if(!e||!e.drag){if(7===$E._O.o.ind&&App.gC("edit","autoSpk")){const t=(t,o,i)=>{let e=-1===t?r:r+t,s=-1===o?d:d+o;for(let r=$E._r.ly.length;r--;)if($E._r.ly[r].find(r=>{if(7===r.ind&&(r.ang??0)===i)if(-1===t||-1===o){let i=r.R,d=i[0],l=i[1];if(-1===o&&d===e&&l===s-r.h)return!0;if(-1===t&&d===e-r.w&&l===s)return!0}else if(r.x===e&&r.y===s)return!0;return!1}))return!0},o=(t,o)=>{t+=r,o+=d;for(let i=$E._r.ly.length;i--;)for(let e=$E._r.ly[i].length;e--;){let r=$E._r.ly[i][e];if(3!==r.ind)continue;let d=r.R,s=d[0],l=d[1];if(s<=t&&s+r.w>t&&l<=o&&l+r.h>o)return!0}};let i=-1,e=32*$E._O.o.scx,s=e/2;t(0,e,180)?i=0:t(0,-1,0)?i=180:t(-1,0,90)?i=270:t(e,0,270)?i=90:o(s,e)?i=0:o(s,-1)?i=180:o(-1,s)?i=270:o(e,s)&&(i=90),-1!==i&&($E._O.lastChild.style.transform=`rotate(-${i}deg)`,$E._O.o.ang=i)}i.dMouse(r,d),t.fill=!1}}t.style.cursor=d},t.onwheel=t=>{if($E.edit&&$E._O){let o=.25*Math.sign(t.wheelDelta);if($E._O.o.scx+o>=.5&&$E._O.o.scx+o<=5){$E._O.o.scx+=o,$E._O.o.scy+=o;let[t,i]=$E.C.cXY();$E.C.dMouse(t,i),UI.showTips($E.C.mX+","+$E.C.mY+" ×"+$E._O.o.scx.toFixed(2))}}},t.onmouseout=()=>{$E.edit&&(UI.tip._h(),t.out=!0,t.outf()||$E.C.dMouse(0,0,1))},doc.addEventListener("keydown",o=>{let i=doc.activeElement.tagName;if(!$E.edit)return;if(o.ctrlKey&&90===o.keyCode&&o.preventDefault(),"TEXTAREA"===i||"INPUT"===i||!$E.edit)return;const e=!o.repeat,r=o.keyCode,d=$E.C;if(r>47&&r<58){let o=$("hObj"+r);d.hObj?(o?.setKey(),d.hObj.setKey(r,1)):(o?.click(),t.out||d.dMouse(...d.cXY()))}else switch(r){case 9:e&&$E._r&&(d.hObj=null,$E.tab[($E.nowTab+1)%4].click());break;case 17:e&&!t.out&&$E._O&&(t.fill=!1,d.dMouse(0,0,1));break;case 90:o.ctrlKey&&(o.shiftKey?d.redo():d.undo());break;case 87:case 65:case 83:case 68:if(e)if(o.ctrlKey)if(65===r){$E.pro.lock=!1,$E.$O=[];for(let t=$E._r.ly.length;t--;)if(!$E._r.ly[t].lock)for(let o=$E._r.ly[t].length;o--;)$E.$O.push($E._r.ly[t][o]);$E.$P($E.$O.length?$E.$O:0),d.dMouse(0,0,1)}else 83===r&&$("btn").ch[2].click();else if($E._O&&void 0!==$E._O.o.ang){let[o,i]=d.cXY(),e=87===r?0:65===r?90:83===r?180:270;switch($E._O.o.spr[0].name){case"btn":case"arr":e=(e+90)%360;break;case"wj":e=(e+270)%360}$E._O.lastChild.style.transform=`rotate(-${e}deg)`,$E._O.o.ang=e,t.out||d.dMouse(o,i)}break;case 67:e&&o.ctrlKey&&$E.$O&&!$E.pro.lock&&d.copy($E.$O);break;case 86:e&&o.ctrlKey&&!t.out&&$E._r&&d.paste(...d.cXY());break;case 71:e&&$("setg").click();break;case 37:case 38:case 39:case 40:o.preventDefault(),$E.$O&&(e&&d.addUndo(),d.moveEditO(37===r?-$E.grid.value:39===r?$E.grid.value:0,38===r?-$E.grid.value:40===r?$E.grid.value:0));break;case 88:if(!(e&&o.ctrlKey&&$E.$O)||$E.pro.lock)break;d.copy($E.$O);case 8:case 46:e&&$E.$O&&!$E.pro.lock&&(d.addUndo(),$E.$O.for(t=>$E._r.ly[t.dep].rm(t)),$E._r.setNum(),$E.sfO.update(),$E.$P(),d.dMouse(0,0,1))}}),doc.addEventListener("keyup",o=>{if($E.edit)switch(o.keyCode){case 17:if(!t.out&&$E._O){let[t,o]=Ctrl.cXY();$E.C.dMouse(t,o)}else t.slc&&(t.slc=!1,$E.C.dMouse(0,0,1))}})});