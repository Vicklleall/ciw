$E.pro={clipBoard:[],noAddP:["dep","scx","scy","ang","a","ti","txt"],addFold(i){let t=i.ch[1];t.style.cursor="pointer",t.onclick=()=>{i.hC("fold")?i.rC("fold"):i.aC("fold"),$E.fixH($c("cat")[18])}},actInd(i){return i===i<<0?this.acLib[1][i]:this.acLib[4+i|0][Math.round(100*i%100-1)]},conInd(i){return this.acLib[11+i|0][Math.round(100*i%100-1)]},chkPro(i,t){switch(t){case"mov":let d=i.add[t];for(let t=d.length;t--;){let e=this.acLib[1][d[t][0]];e.c&&e.c&i.lib&&d.splice(t,1)}break;case"tml":i.add[t].for(t=>{let d=t[1];for(let t=d.length;t--;){let e=this.actInd(d[t][0]);e.c&&e.c&i.lib&&d.splice(t,1)}});break;case"trg":let e=i.add[t];for(let t=e.length;t--;){let d=e[t];d[2].for(d=>{let o=this.conInd(d[0]);o.c&&o.c&i.lib&&e.splice(t,1)});let o=d[3];for(let t=o.length;t--;){let d=this.actInd(o[t][0]);d.c&&d.c&i.lib&&o.splice(t,1)}}}},applyPro(i,t,d){if($E.C._U(),i[0]);else{let e=["mov","tml","trg"][i-1];d.for(i=>{0!==i.ind&&(i.add[e]=$M.cp(t),this.chkPro(i,e))})}},updTml(i,t,d){if(!i)return;const e=d?[4.04]:[4.01,4.02,4.03];i.for(i=>{i.at(-1).for(i=>{e.includes(i[0])&&i[1]>t&&(i[1]--,i.set())})})},CV(i,t,d){let e=El("div","ab");css(e,{top:t+"px",right:"28px"});let o=El("div","p-btn tip L",{innerHTML:UI.ico("copy")+"<p>0{92}</p>"}),n=El("div","p-btn tip L",{innerHTML:UI.ico("paste")+"<p>0{93}</p>"});return o.onclick=()=>this.clipBoard[i]=JSON.stringify(e.pN.pro),n.onclick=()=>{if(this.clipBoard[i]){let t=JSON.parse(this.clipBoard[i]);d&&!d(t)||($E.C._U(),t.for((i,t)=>e.pN.pro[t]=i),$E.reloadPro())}},e.ap(o,n),e},apAc(i,t,d,e,o=!0,n){let c=El("div","p-ac"),r=d.pn??d.p?.map(i=>""),l=d.n.replace("\n","<br/>");switch(c.p=d.p,c._id=d.type+d.ind+t.i+d.p?.join(),n?e.before(c):e.ap(c),d.type){case"tml":c.aC("tml");case"trg":l+=t.i,t.set=()=>c.ch[1].tx(d.n+t.i)}c.pro=t,c.innerHTML=`${UI.ico(d.ico)}<span>${l}</span>`;const p=$E.C,s=233,a=()=>{d.txt&&i.drawTxt(),i.LT&&($E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())};if(o&&(c.innerHTML+="<svg class='p-del'><use href='#-trash'></use></svg>",c.lastChild.onclick=()=>{if(p._U(),Array.isArray(i)){let e=t.i;i.splice(e,1);for(let t=e;t<i.length;t++)i[t].i=t,"tml"===d.type||"trg"===d.type?i[t].set():(.02===i[t][0]&&i[t][1]>e&&(i[t][1]--,i[t].set()),i[t].check?.());"tml"===d.type?(this.updTml(i,e),this.updTml($E.$O[0].add.trg,e)):"trg"===d.type&&(this.updTml(i,e,1),this.updTml($E.$O[0].add.tml,e,1))}else if(i.R){let[e,o]=i.LT,{w:n,h:c}=i;d.p.for(d=>{i[d]=void 0,delete i[d],delete t[d]}),d.calc&&i.calcRect(),d.d&&(i.autoTile&&$E.E.rTile(e,o,n,c,i),$E.sfO.$d(e,o,n,c),$E.sfO.$d(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update(),$E.C.dM(0,0,1))}else d.p.for(i=>{delete t[i]}),d.d&&i.draw(1);c.remove(),$E.fixH($c("cat")[18])}),d.copy)switch(d.copy){case"tml":c.ap(this.CV("tml",2,i=>{let t=$E.$O[0],d=i[1];for(let i=d.length;i--;){let e=this.actInd(d[i][0]);if(e.c&&e.c&t.lib)return}return 1}));break;case"trg":c.ap(this.CV("trg",2,i=>{let t=$E.$O[0],d=i[2];for(let i of d){let d=this.conInd(i[0]);if(d.c&&d.c&t.lib)return}let e=i[3];for(let i=e.length;i--;){let d=this.actInd(e[i][0]);if(d.c&&d.c&t.lib)return}return 1}))}if("trg"===d.type&&c.ap(El("br")),d.p?.length&&(d._??=[],d.p.for((e,o)=>{if(d.t[o].n){let i=c.ap(UI.B2(d.t[o].n)).on(i=>{$E.piE?$E.peE():$E.psE(i,d.t[o].click,d.t[o].move,d.t[o].draw,d.t[o].before,d.t[o].after)});d.t[o].init?.(t,e,i)}else if(d.t[o].includes("|")){d._[o]||(d._[o]=[],d._[o].i=0);let n=d.t[o].split("|"),l=[],h=[];n.for((n,c)=>{d._[o][c]??=[];let r=n.split("<"),f=r[1].split(","),E=El("div","ib");l.push(r[0]),h.push(E),t[e]?.[0]!==c&&E._h(),""===f[0]&&(f.length=0);let b=f.length+1;f.for((n,r)=>{let l=n.split(">"),h=l[1].split(":");switch(l=l[0],h[0]){case"i":let n=h[1].split("*"),f=n[1]??1,m=n[0].split("+"),g=m[0].split("~");m=m[1].split("-"),d._[o][c][r]??=m[1]-0||0,E.ap(UI.I(l,{type:"number",value:t[e]?.length===b?t[e]?.[r+1]??d._[o][c][r]:d._[o][c][r],m:Number(g[0]),M:Number(g[1]),s:Number(m[0]),w:Number(f)},36).on((n,l)=>{l!==s&&p._U(),d._[o][c][r]=t[e][r+1]=n,10===i.ind&&i.pG()}));break;case"t":E.ap(UI.I(l,{value:t[e]?.[r+1]??"00000000"},80).on((i,o)=>{o!==s&&p._U();let n=t[e];n[r+1]=i,t[e]=n,d.d&&a()}));break;case"c":d._[o][c][r]??="#000",E.ap(UI.Col(l+":",t[e]?.length===b?t[e]?.[r+1]??d._[o][c][r]:d._[o][c][r])).on(i=>{p._U(),d._[o][c][r]=t[e][r+1]=i})}})});let f=UI.O(...l).on((n,c)=>{c!==s&&p._U(),n=Number(n),h.for((i,t)=>n==t?i._s():i._h());let r=[n];for(let i of h[n].ch)r.push(i.v);return t[e]=r,d._[o].i=n,d.d&&(10===i.ind?i.pG():a()),n}),E=c.ap(El("div","rl"));"ti"!==e&&.01!==d.ind||E.aC("ib"),E.ap(UI.span(r[o]),f),f.set(t[e]?.[0]??f.f(d._[o].i,s)),h.for(i=>E.ap(i))}else if(Array.isArray(d.t[o])){let n=UI.O(...d.t[o]).on((n,c)=>{c!==s&&p._U();let r=Number(n);if(d._[o]=n=isNaN(r)?n:r,this.noAddP.includes(e)){let t=i.R[0],d=i.LT[1],{w:o,h:c}=i;i[e]=n,i.autoTile&&$E.E.rTile(t,d,o,c,i),$E.sfO.$d(t,d,o,c),$E.C.dM(0,0,1),"a"===e&&($("edit-x")?.set($E.$O[0].x),$("edit-y")?.set($E.$O[0].y))}else t[e]=n;return d.d&&a(),5.01===d.ind&&n.length&&Au.play(n,2**((t[e+1]??0)/12)),n});d._[o]??=0,n.set(t[e]??n.f(d._[o],s)),c.ap(UI.span(r[o]),n),d.t[o]===this.acAO?(css(n,{minWidth:0,float:"right"}),css($c("op",n.m),{minWidth:0})):"="===d.t[o][0]?(css(n,{minWidth:"16px",margin:0}),css($c("op",n.m),{minWidth:0})):d.t[o]===this.acFont&&$c("op",n.m).for(i=>{!i.hC("arr")&&0|i.v&&(i.style.fontFamily="_"+Res.fontList[0|i.v][0])})}else{let n=d.t[o].split(":");switch(n[0]){case"i":let l=n[1].split("*"),h=l[1]??1,f=l[0].split("+"),E=f[0].split("~"),b=r[o];f=f[1].split("-"),d._[o]??=f[1]-0||0,"\n"===b.at(-1)&&(b=b.slice(0,-1));let m=c.ap(UI.I(b?b+":":"",{type:"number",value:t[e]??(Array.isArray(i)?d._[o]:i[e]??d._[o]),m:Number(E[0]),M:Number(E[1]),s:Number(f[0]),w:Number(h)},36)).on((n,c)=>{if("x"===e||"y"===e){if(i.gO()?.add.gpm[0])return;10===i.ind&&i.mG(e,n)}c!==s&&p._U();let r=i.R?.[0],l=i.LT?.[1],{w:h,h:f}=i;return d._[o]=n=Number(n),this.noAddP.includes(e)||"x"===e||"y"===e?i[e]=n:t[e]=n,d.calc&&i.calcRect(),d.d&&void 0!==i.w&&(i.autoTile&&$E.E.rTile(r,l,h,f,i),$E.sfO.$d(r,l,h,f),$E.C.dM(0,0,1),a()),t.check?.(),5.01===d.ind&&t[e-1].length&&Au.play(t[e-1],2**(t[e]/12)),n});if(m.id="edit-"+e+(d.ind??""),0===o)switch(d.ind){case.02:case 4.01:case 4.02:case 4.03:case 4.04:t.set=()=>m.set(t[1])}else.02===d.ind&&(t.check=()=>{if(0===t[2]){for(let d=t[1];d<=t.i;d++)if(.01===i[d][0])return;m.f(m.set(1)),UI.$a(`0{bl}${t[1]}-${t.i}0{bm}`)}});void 0===t[e]&&"x"!==e&&"y"!==e&&m.set(m.f(d._[o]??0,s)),"\n"===r[o].at(-1)&&c.ap(El("br"));break;case"s":case"s1":d._[o]??="s"===n[0]?0:1,c.ap(UI.S(r[o]+":",t[e]??d._[o]).on((i,n)=>{n!==s&&p._U(),d._[o]=t[e]=i,d.d&&a()})).style.display="inline-block",void 0===t[e]&&c.lastChild.f(d._[o],s);break;case"c":c.ap(UI.Col(r[o]+":",t[e]??d._[o])).on(i=>{p._U(),d._[o]=t[e]=i,d.d&&a()});break;case"txt":c.ap(El("br"));let g=c.ap(El("textarea"));g.value=i[e]??i.add[e],g.onchange=()=>{p._U(),i[e]=g.value,i.ctx&&a()}}}})),"tml"===d.type){this.addFold(c),c.style.paddingBottom="28px",c.aC("count");let i=El("div","p-add",{innerHTML:UI.ico("add")+"0{bn}"});i.obj=t[1],c.ap(i).onclick=function(){$E.pro.acChs.set(this,4,this.obj)}}else if("trg"===d.type){this.addFold(c);let i=c.ap(El("div","p-ac trg",{innerHTML:UI.ico("if")+"0{bo}"})),d=c.ap(El("div","p-ac",{innerHTML:UI.ico("act")+"0{bp}"})),e=i.ap(El("div","p-add",{innerHTML:UI.ico("add")+"0{bq}"})),o=d.ap(El("div","p-add",{innerHTML:UI.ico("add")+"0{br}"}));css([i,d],{paddingBottom:"28px"}),d.style.borderBottom="none",e.obj=t[2],o.obj=t[3],e.onclick=function(){$E.pro.acChs.set(this,5,this.obj)},o.onclick=function(){$E.pro.acChs.set(this,6,this.obj)}}return c.pN.hC("tml")&&(c.ap(El("div","tml-add")).onclick=function(){$E.pro.acChs.set(this,4,i)}),$E.fixH($c("cat")[18]),c},init(){this.initLib();const i=El("div","p-btn tip",{innerHTML:UI.ico("save")})._c(UI.p("0{bs}")),t=El("div","p-btn tip",{innerHTML:UI.ico("change")})._c(UI.p("0{bt}"));i.onclick=()=>UI.prompt("0{bu}",Lib.obj[$E.$O[0].cid].n).then(i=>{if(i.i||!i.v)return;let t=$E.$O[0],d=Lib.obj.find(t=>t?.n===i.v);if(d&&d.ind===t.ind)d.cid<1e3?UI.$a("不能与内置物体重名！"):UI.confirm(i.v+" 已存在，是否覆盖？",0,"0{7}","0{8}").then(i=>{if(i.i)return;const e=$E._r,o={code:e.enc(),edit:$E.C.editDo(),pos:$E.C.editPos()},n=$M.cp(t.add);delete n.gid,delete n.gpi,d=$E._G._o.find(i=>i.id===d.cid),d.add=Object.assign($M.cp(Lib._o[d.ind].add),n),Lib.cO(d),$E.C.aplDo(e,o,0)});else{let d=$M.cp(t.add),e=1e3;for(;Lib.obj[e];)++e;delete d.gid,delete d.gpi,$E.preset.new($E.preset.create(t.ind,e,d,i.v)),t.cid=e,$("p-name").tx(1===$E.$O.length?i.v:`${i.v} 等${$E.$O.length}个物体`),UI.$a("保存成功！可前往 物体->自定义 中查看")}}),t.onclick=()=>{let i=$E.$O[0];(new UI.M).h("替换物体").ac(UI.span(`${Lib.obj[i.cid].n} →`),UI.O(...Lib.obj.filter(t=>t.ind===i.ind&&t.cid!==i.cid).map(i=>i.n+":"+i.cid)),El("br"),UI.span("应用到"),UI.O("选中物体:1","当前房间:2","所有房间:3"),UI.S("覆盖属性",0,1).on(function(i){this.pS().nv=i})).b("替换","0{6}").then(function(t){if(!t.i){let t=i.cid,d=$c("sl",this.box),e=Number(d[0].v),o=Number(d[1].v),n=d[1].nv;if(e)switch($E.C._U(),o){case 1:for(let i=0;i<$E.$O.length;i++){let d=$E.$O[i];if(d.cid===t){let i;n?(i={...Lib.obj[e]},i.add=$M.cp(i.add)):(_C.dec.set($E._r.encO(d),$E._r.flag),i=_C.dec.o(e));let t=i.add;if(t.dep=d.add.dep,d.cid=i.cid,d.add=t,void 0!==t.til){d.ti=[t.til/1e3|0,t.til%1e3];let i=d.LT[0],e=d.LT[1],{w:o,h:n}=d;d.calcRect(),$E.E.rTile(i,e,o,n,d)}else{d.calcRect();let i=t.txt;void 0!==i&&(t.txt="",d.txt=i)}}}$E.sfO.redraw(),$E.reloadPro();break;case 2:case 3:$E._r.enc();const i=n?({prop:i,start:d,end:e})=>i.cid===t?_C.dec.code.slice(d,d+2):_C.dec.code.slice(d,e):null,d=i=>i===t?e:i;2===o?$E._r.obj=$E._r.renc(i,d):$E._R.for(t=>t.obj=t.renc(i,d)),$E._r.dec(),$E.$P()}}})},$("p-info").ap(t,i)},_lock:!1,get lock(){return this._lock},set lock(i){i!==this._lock&&(this._lock=i,i?$E._O&&($E._O.style.borderColor="",$E._O=null):($E.sfE.canvas.style.opacity=.6,$E.$O=null,$E.C.dM(0,0,1)))}},$E.$P=(i,t)=>{$E.piE&&$E.peE();const d=$c("p-ev"),e=["0{x}","0{bv}","0{bw}","0{bx}"],o=$E.pro;if(o.buildIn=t,d.for((i,t)=>{i.innerHTML=`<h4><span>${e[t]}</span></h4>`,i.style.paddingBottom="";let d=i.firstChild.firstChild;d.style.cursor="pointer",d.onclick=()=>{i.hC("fold")?i.rC("fold"):i.aC("fold"),$E.fixH($c("cat")[18])}}),$c("mb").for(i=>{i.pN.hC("op")||i.remove()}),i){let n=i[0];if(t)$("p-name").tx(t.name).ap(UI.B2("0{by}").on(()=>$E._G.R.for(i=>{0!==i.type&&i!==$E._r&&(i.bobj[t.id].add=$M.cp(n.add))}))),$E.drawThn($("p-spr").ch[0],t.spr),$E.pro.lock=!0,$("p-info")._h();else{const t=Lib.obj[n.cid].n;if($("p-name").tx(1===i.length?t:`${t} 等${i.length}个物体`),n.spr.for((i,t)=>$E.drawThn($("p-spr").ch[0],i,0===t)),0===n.ind)return $E.C.dM(0,0,1);$("p-info")._s()}d.for((i,d)=>{i.i=d;let n=i.firstChild;const c=$E.$O;d&&!t&&(n.ap(El("div","p-btn tip L",{innerHTML:UI.ico("copy")+`<p>0{92}${e[d]}</p>`})).onclick=function(){let i=this.pN.pN.i,t=JSON.stringify(c[0].add[["mov","tml","trg"][i-1]]);o.clipBoard[i]=t?JSON.parse(t):[]},o.clipBoard[d]&&(n.ap(El("div","p-btn tip L",{innerHTML:UI.ico("paste")+`<p>0{93}${e[d]}</p>`})).onclick=function(){let i=this.pN.pN.i;o.applyPro(i,o.clipBoard[i],c),$E.reloadPro()}),c.length>1&&(n.ap(El("div","p-btn tip L",{innerHTML:`${UI.ico("brush")}<p>0{bz}</p>`})).onclick=function(){let i=this.pN.pN.i,t=JSON.stringify(c[0].add[["mov","tml","trg"][i-1]]);o.applyPro(i,t?JSON.parse(t):[],c.slice(1))})),t&&!t.add[d]||(i.style.paddingBottom="28px",i.ap(El("div","p-add",{innerHTML:UI.ico("add")+"0{7b}"})).onclick=function(){o.acChs.set(this,this.pN.i)})});const c=o.acLib;(!t||t&&void 0!==n.x)&&o.apAc(n,n.add,c[0][0],d[0],0),void 0!==n.add.til&&o.apAc(n,n,c[0][17],d[0],0);for(let i in n.add)switch(i){case"mov":n.add.mov.for((i,t)=>{i.i=t,o.apAc(n.add.mov,i,c[1][i[0]],d[1],!0)});break;case"tml":n.add.tml.for((i,t)=>{i.i=t;let e=o.apAc(n.add.tml,i,c[2][0],d[2],!0);e.aC("fold"),i[1].for((t,d)=>{t.i=d,o.apAc(i[1],t,o.actInd(t[0]),e,!0)})});break;case"trg":n.add.trg.for((i,t)=>{i.i=t;let e=$c("p-ac",o.apAc(n.add.trg,i,c[3][0],d[3],!0));i[2].for((t,d)=>{t.i=d,o.apAc(i[2],t,o.conInd(t[0]),e[0],!0)}),i[3].for((t,d)=>{t.i=d,o.apAc(i[3],t,o.actInd(t[0]),e[1],!0)})});break;default:let t=c[0].find(t=>t.p[0]==i);!t||t.c&&t.c&n.lib||o.apAc(n,n.add,t,d[0],t.del)}$E.C.dM(0,0,1)}else $E.$O=null,$E.pro.lock=!1,$("p-spr").ch[0].getContext("2d").clearRect(0,0,32,32),$("p-name").tx("0{1j}"),$("p-info")._h(),$E.fixH($c("cat")[18]),$("screen").out?$E.C.dM(0,0,1):$E.C.dM(...$E.C.cXY())},$E.reloadPro=()=>{let i=$E.C.editPos();$E.$P($E.$O,$E.pro.buildIn),$E.C.rcPos(i)},$E.pro.initLib=function(){const i="i:-32~4032+1*16",t="i:1~6000+1-1",d="i:-25~25+0.01-1",e="0{c0}<>i:0.1~128+0.1-4|0{c1}<>i:0.1~128+0.1-2,~>i:0.1~128+0.1-4",o="0{c0}<>i:-128~128+0.1|0{c1}<>i:-128~128+0.1,~>i:-128~128+0.1",n="0{c0}<>i:0~359+1*15|0{c1}<>i:-360~360+1*15,~>i:-360~360+1-360*15|0{c2}<>i:0~359+1-0*90|0{c3}<|0{c4}<",c="固定值<>i:-128~128+0.1|随机值<>i:-128~128+0.1,~>i:-128~128+0.1|增加值<>i:-128~128+0.1|倍乘值<>i:-5~5+0.01-1",r=[1],l=[1,2],p=[1,2,3],s=[1,2,3,4],a=["0{c5}","0{c6}"],h=["=",">","<","≥","≤","≠"],f=["0{7n}:L","0{c7}:R","0{7o}:U","0{c8}:D","0{c9}(Shift):J","0{9k}(Z):z","W:w","A:a","S:s","D:d","X:x"],E=["0{ca}","0{cb}"],b=["0{ba}","0{cc}","0{cd}","0{5h}","0{18}","0{5j}",["0{w}",...Lib._o.slice(1).map((i,t)=>i.n+":"+(t+5+1))]],m=[[["0{ce}","思源黑体(默认):0","站酷快乐体:5","小赖字体:20"],["常规","AveriaSansLibre:1","Grenze:3","Jua:7","Orbitron:9","Play:16","Quicksand:17"],["标题体","Bangers:2","HanaleiFill:4","JotiOne:6","Limelight:11","MarcellusSC:13","Righteous:18","SairaStencilOne:19","Yukarimobile:21"],["艺术","Lobster:12","Pacifico:15"],["像素风","KarmaticArcade:8","Kongtext:10","OrigamiMommy:14"]],"i:12~128+1",["1{2t}","0{cf}","0{cg}","0{ch}"],["0{ci}","0{cj}","0{ck}"],"c","i:0~32+0.1","c","i:0~32+1","c"],g=["下一房间:128","当前房间:0",["指定房间",()=>$E._R.map(i=>i.name+":"+(i.id-$E._r.id))]],u="淡入淡出<颜色>c|无效果<|旋转矩形<颜色>c,旋转速度>i:-180~180+0.1-7",y=()=>{let i=$E.$O[0];$E.sfE.clear(),i.dInfo(),$E.C.dSelect(i.R[0],i.LT[1],i.w,i.h)},_=()=>{let i=$E.C,t=$E.$O[0],d=$E.C.colPosObj(i.mTX,i.mTY);if(!d||0===d.ind)return;let e=t.add.gid;0===i.mB?d.cG(t)||d.add.gpi?.startsWith(e)||($E.peU(),t.group(d),y()):2===i.mB&&d.add.gpi?.startsWith(e)&&($E.peU(),delete d.add.gpi,10!==d.ind&&(d.dInfo=null),y())},v=()=>{let i=$E.sfE,t=$E.C,d=$E.$O[0],e=$E.piE.pro,o=d.x,n=d.y;e.i??=e.length-2,i.clear(),i.strokeStyle=i.fillStyle="#f5d";for(let d=-2;d<e.length;d+=2)d>=0&&(t.dLine(o,n,o+e[d],n+e[d+1]),o+=e[d],n+=e[d+1]),e.i===d?i.fillRect(o-3,n-3,6,6):i.strokeRect(o-2.5,n-2.5,5,5),i.$d(o-3,n-3,6,6)};this.acAO=a,this.acFont=m[0],this.acLib=[[{n:"0{cl}",ico:"position",p:["x","y"],pn:["x","y"],t:[i,"i:-32~3072+1*16"],d:1,h:1,del:0},{n:"0{1k}",ico:"layer",p:["dep"],pn:["0{cm}"],t:["i:0~11+1-7"],d:1,del:0,c:16},{n:"0{cn}",ico:"col",p:["cm"],t:[["无碰撞","一般物体","固体","板子","致命","水"]],del:0,c:1},{n:"0{co}",ico:"rotate",p:["a"],t:[["图像原点","左上","中上","右上","左中:5","中心:6","右中:7","左下:9","中下:10","右下:11"]],d:1,del:0,c:34},{n:"0{cp}",ico:"resize",p:["w","h"],pn:["0{7p}","0{7q}"],t:["i:16~800+1-32*16","i:16~608+1-32*16"],apl:["w"],d:1,txt:1,calc:1,del:0},{n:"0{cq}",ico:"resize",p:["scx","scy"],pn:["x","y"],t:[d,d],d:1,c:2},{n:"0{ag}",ico:"ang",p:["ang"],t:["i:0~359+1-0*15"],d:1,c:2},{n:"显示",ico:"see",p:["hd"],t:[["可见","不可见"]],d:1},{n:"0{cr}",ico:"see",p:["al"],pn:["alpha"],t:["i:0~1+0.01-1*0.1"],d:1,c:2},{n:"0{6a}",ico:"text",p:["txt"],t:["txt"],apl:["txt"],txt:1,del:0},{n:"0{cs}",ico:"label",p:["ftf","fts","ftt","fta","ftc","fst","fkc","fsd","fsc"],pn:["","0{cp}\n","0{ct}","0{cu}","0{as}","0{cv}","0{as}","0{cw}","0{as}"],t:m,apl:["ftf"],d:1,txt:1,del:0},{n:"传送",ico:"warp",p:["wr","ws","wx","wy"],pn:["房间"," 效果","位置(为0则使用出生点位置) x","y"],t:[g,u,"i:0~4000+1","i:0~3040+1"],apl:["ws"],del:0},{n:"长度",ico:"len",p:["len"],t:["i:32~800+1-32*16"],apl:["len"],d:1,calc:1,del:0},{n:"激光状态",ico:"label",p:["lso"],pn:["开启激光"],t:["s"],apl:["lso"],del:0},{n:"激光属性",ico:"label",p:["lst"],pn:["穿透固体"],t:["s"],apl:["lst"],del:0},{n:"摩擦力",ico:"label",p:["fra","frd"],pn:["加速","减速"],t:["i:0.01~1+0.01-1","i:0~1+0.01"],apl:["fra"],del:0},{n:"数量",ico:"label",p:["num"],t:["i:2~72+1-4"],apl:["num"],d:1,del:0},{n:"贴图",ico:"label",p:["ti"],t:["自动贴图<|手动贴图<贴图编码>t"],apl:["til"],d:1,del:0,h:1},{n:"传送速度",ico:"acc",p:["csp"],t:["i:1~32+1-3"],apl:["csp"],del:0},{n:"组合物体",ico:"if",p:["gid","gpm"],t:[{n:"选择组合物体",click(){if(1===$E.C.mB)return $E.peE();_()},move(i,t){t.drag&&_()},draw:y},"自由组合<|圆形组合<数量>i:1~100+1-8,半径>i:0~512+1-96*16|多边形组合<边>i:3~8+1-4,半径>i:0~512+1-96*16,数量>i:1~16+1-3"],apl:["gpm"],d:1,del:0},{n:"组合控制\n",ico:"if",p:["csc","cag","cds"],pn:["控制缩放","控制角度","控制销毁"],t:["s","s","s","s"],apl:["csc"],del:0},{n:"跳跃段数",ico:"ply",p:["jump","sJump"],pn:["(-1为无限跳)","存档保存"],t:["i:-1~10+1-2","s"],apl:["sJump"],del:0},{n:"重力方向",ico:"ply",p:["g_","sGravDir"],pn:["","存档保存"],t:[["向下:270","向上:90","向左:180","向右:0"],"s"],apl:["g_"],del:0},{n:"子弹连发",ico:"ply",p:["conShoot"],t:["s"],apl:["conShoot"],del:0},{n:"AD位移",ico:"ply",p:["adMove"],t:["s"],apl:["adMove"],del:0},{n:"生命值",ico:"ply",p:["life"],t:["i:1~10+1-1"],apl:["life"],del:0},{n:"文本",ico:"text",p:["txt1","ftf1","fts1","ftt1","fta1","ftc1","fst1","fkc1","fsd1","fsc1"],pn:["","字体","大小\n","样式","对齐","颜色","描边","颜色","发光","颜色"],t:["txt",...m],apl:["txt1"],d:1,txt:1,del:0},{n:"提示文本",ico:"text",p:["txt2","ftf2","fts2","ftt2","fta2","ftc2","fst2","fkc2","fsd2","fsc2"],pn:["","字体","大小\n","样式","对齐","颜色","描边","颜色","发光","颜色"],t:["txt",...m],apl:["txt2"],d:1,txt:1,del:0}],[{n:"移动到位置",ico:"move",ind:0,p:s,pn:["x","y","速度","速度模式"],t:["相对位置<>i:-999~999+1*32|绝对位置<>i:-32~4032+1*32","相对位置<>i:-999~999+1*32|绝对位置<>i:-32~3072+1*32",e,["匀速","减速"]],c:2},{n:"移动距离",ico:"move",ind:1,p:s,pn:["距离","方向","速度","速度模式"],t:["i:1~999+1-32*32",n,e,["匀速","减速"]],c:2},{n:"水平+竖直速度",ico:"move",ind:2,p:l,pn:["水平速度","竖直速度"],t:[o,o],c:2},{n:"速度+方向",ico:"move",ind:3,p:l,pn:["速度","方向"],t:[e,n],c:2},{n:"重力",ico:"acc",ind:4,p:l,pn:["大小","方向"],t:["i:0~1+0.01-0.2","i:0~359+1-270*90"],c:2},{n:"角度控制",ico:"ang",ind:5,p:r,pn:["角度"],t:["与运动方向夹角<>i:0~359+1-0*90|与指向玩家方向夹角<>i:0~359+1-0*90"],c:2},{n:"旋转",ico:"rotate",ind:6,p:r,pn:["旋转速度"],t:["固定值<>i:-180~180+0.1-1|随机值<>i:-180~180+0.1,~>i:-180~180+0.1"],c:2},{n:"摆动",ico:"swing",ind:7,p,pn:["初始角","幅度","周期"],t:["i:0~359+1","i:1~180+1-30","i:4~1000+1-100"],c:2},{n:"水平简谐运动\n",ico:"sin",ind:8,p,pn:["振幅","周期","初相"],t:["i:1~800+1-32*16","i:4~1000+1-100","i:0~359+1-0*90"],c:2},{n:"竖直简谐运动\n",ico:"sin",ind:9,p,pn:["振幅","周期","初相"],t:["i:1~608+1-32*16","i:4~1000+1-100","i:0~359+1-0*90"],c:2},{n:"路径",ico:"path",ind:10,p,pn:["","速度","重复"],t:[{t:"pth",n:"编辑路径",draw:v,click(){let i=$E.C;if(1===i.mB)return $E.peE();let t=$E.$O[0],d=$E.piE.pro,e=t.x,o=t.y,n=[e,o],c=!0;for(let t=-2;t<d.length;t+=2)t>=0&&(e+=d[t],o+=d[t+1],n.push(e,o)),i.mTX>e-5&&i.mTX<e+5&&i.mTY>o-5&&i.mTY<o+5&&(d.i=t,c=!1);if(0===i.mB){if(c){let t=i.mX-n[d.i+2],e=i.mY-n[d.i+3];(t||e)&&($E.peU(),d.splice(d.i+2,0,t,e),d.i+=2,d.length>d.i+2&&(d[d.i+2]-=t,d[d.i+3]-=e))}}else 2===i.mB&&d.i>=0&&($E.peU(),d.length>d.i+2&&(d[d.i+2]+=d[d.i],d[d.i+3]+=d[d.i+1]),d.splice(d.i,2),d.i-=2);v()},move(i,t){let d=$E.C,e=$E.piE.pro;if(t.drag&&0===d.mB&&e.i>=0){let i=$E.$O[0],t=i.x,o=i.y;for(let i=0;i<=e.i;i+=2)t+=e[i],o+=e[i+1];let n=d.mX-t,c=d.mY-o;(n||c)&&($E.peU(),e[e.i]+=n,e[e.i+1]+=c,e.length>e.i+2&&(e[e.i+2]-=n,e[e.i+3]-=c)),v()}},init(i,t,d){(!i[t]||1&i[t].length)&&(i[t]=[]),d.pro=i[t]},after(){let i=$E.piE.pro;for(let t=0;t<i.length;t+=2)0===i[t]&&0===i[t+1]&&(i.splice(t,2),t-=2);i.i=i.length-2}},"i:0.1~128+0.1-1","s"],c:2},{n:"跟随玩家",ico:"aim",ind:11,p:r,pn:["速度"],t:["i:0.1~32+0.1-1"],c:10},{n:"同步玩家",ico:"aim",ind:12,p:s,pn:["同步x","偏移量","同步y","偏移量"],t:["s","i:-800~800+1-0*32","s","i:-800~800+1-0*32"],c:10},{n:"运动障碍",ico:"stop",ind:13,p:l,pn:["","效果"],t:[["固体","板子","致命","水",["物体",...Lib._o.slice(1).map((i,t)=>i.n+":"+(t+4))]],["阻挡","反弹"]],c:3},{n:"阻力",ico:"acc",ind:14,p:r,pn:["大小"],t:["i:0~1+0.01-0.2"],c:2}],[{n:"0{bw}",ico:"timer",type:"tml",copy:"tml",p:[0],pn:["直接运行"],t:["s1"]}],[{n:"0{bx}",ico:"logic",type:"trg",copy:"trg",p:[0,1],pn:["执行顺序","执行次数(0=无限)"],t:[["时间轴前","移动前","移动后","手动执行"],"i:0~999+1-1"]}],[{n:"间隔",ico:"timer",ind:.01,p:r,t:["帧数<>i:1~6000+1-50|节拍数<>i:1~999+1-1|随机值<>i:1~6000+1-50,~>i:1~6000+1-50"]},{n:"循环",ico:"redo",ind:.02,p:l,pn:["节点","次数(0=无限)"],t:["i:0~999+1-0","i:0~999+1-0"]}],[{n:"改变碰撞属性",ico:"col",ind:1.01,p:r,t:[["无碰撞","一般物体","固体","板子","致命","水"]],c:1},{n:"改变缩放",ico:"resize",ind:1.02,p,pn:["x","y","过渡时长"],t:[`固定值<>${d}|增加值<>i:-5~5+0.01`,`固定值<>${d}|增加值<>i:-5~5+0.01`,t],c:2},{n:"改变角度",ico:"ang",ind:1.03,p:l,pn:["角度","过渡时长"],t:["固定值<>i:0~359+1*15|增加值<>i:-360~360+1*15",t],c:2},{n:"改变显示",ico:"see",ind:1.04,p:r,t:[["可见","不可见","相反"]]},{n:"改变透明度",ico:"see",ind:1.05,p:l,pn:["alpha值","过渡时长"],t:["固定值<>i:0~1+0.01-1*0.1|增加值<>i:-1~1+0.01*0.1",t],c:2},{n:"改变中心点",ico:"rotate",ind:1.06,p:r,t:[["图像原点","左上","中上","右上","左中:5","中心:6","右中:7","左下:9","中下:10","右下:11"]],c:32},{n:"改变长度",ico:"len",ind:1.07,p:l,pn:["长度","过渡时长"],t:["固定值<>i:32~800+1-32*16|增加值<>i:-800~800+1*16",t],apl:["len"]},{n:"激光状态",ico:"label",ind:1.08,p:r,t:[["关闭","开启","相反"]],apl:["lso"]},{n:"激光属性",ico:"label",ind:1.09,p:r,t:[["不穿透固体","穿透固体","相反"]],apl:["lst"]},{n:"改变位置",ico:"position",ind:1.1,p:l,pn:["x","y"],t:["相对位置<>i:-999~999+1*32|绝对位置<>i:-32~4032+1*32","相对位置<>i:-999~999+1*32|绝对位置<>i:-32~3072+1*32"],c:2},{n:"摩擦力",ico:"label",ind:1.11,p:r,t:["i:0.1~1+0.1-0.1"],apl:["frc"]}],[{n:"停止运动",ico:"stop",ind:2.01,c:2},{n:"改变速度",ico:"acc",ind:2.02,p:r,t:[c],c:2},{n:"改变水平速度",ico:"acc",ind:2.03,p:r,t:[c],c:2},{n:"改变竖直速度",ico:"acc",ind:2.04,p:r,t:[c],c:2},{n:"改变方向",ico:"ang",ind:2.05,p:r,t:[n+"|增加值<>i:-179~180+1*15"],c:2},{n:"改变旋转速度",ico:"rotate",ind:2.06,p:r,t:["增加值<>i:-5~5+0.01-1|倍乘值<>i:-5~5+0.01-1"],c:2}],[{n:"销毁",ico:"trash",ind:3.01,p:r,pn:["效果"],t:[["无","掉落","淡出"]]},{n:"改变子图像",ico:"label",ind:3.02,p:r,t:[["0","1","切换"]],c:16},{n:"设置触发器",ico:"trg",ind:3.03,p:[2,1],pn:["","触发器"],t:[["开启","关闭","切换"],"i:0~999+1-0"]},{n:"改变全局变量",ico:"label",ind:3.04,p:l,t:[[["自定义",()=>Object.keys($E._G.VAR).map(i=>i+":"+i)]],"固定值<>i:-999~999+1|增加值<>i:-999~999+1"]},{n:"游戏控制",ico:"warp",ind:3.05,p:r,t:[["新游戏","继续游戏"]]},{n:"切换房间",ico:"warp",ind:3.06,p:l,pn:[""," 效果"],t:[g,u]},{n:"音乐控制",ico:"snd",ind:3.07,p:r,t:[["播放","暂停","重置"]]},{n:"改变成员变量",ico:"label",ind:3.08,p:l,t:[["a","b","c","d"],"固定值<>i:-999~999+1|增加值<>i:-999~999+1"]},{n:"设置计数器",ico:"trg",ind:3.09,p:l,pn:["编号",""],t:["i:0~999+1-0","增加值<>i:-999~999+1-1|固定值<>i:0~9999+1-0"]}],[{n:"开始(继续)时间轴",ico:"timer",ind:4.01,p:r,pn:["编号"],t:["i:0~999+1-0"]},{n:"暂停时间轴",ico:"timer",ind:4.02,p:r,pn:["编号"],t:["i:0~999+1-0"]},{n:"停止(重置)时间轴",ico:"timer",ind:4.03,p:r,pn:["编号"],t:["i:0~999+1-0"]},{n:"设置时间轴节拍",ico:"timer",ind:4.04,p:r,pn:["1拍时长"],t:["i:1~6000+1-50"]},{n:"执行条件触发",ico:"logic",ind:4.05,p:r,pn:["编号"],t:["i:0~999+1-0"]}],[{n:"播放音效",ico:"snd",ind:5.01,p:l,pn:["","音高"],t:[[["玩家","射击:st","跳跃:jp","死亡:dth"],["机关","机关:bc","破坏:brk","Spike:spk","Cherry:chr"],["物体","弹簧:spr","金币:coin"],["Boss","打击:hit","弹幕:bst"],["音效","音效1:ej","音效2:gj","音效3:lj"]],"i:-36~36+1"]},{n:"创建残影",ico:"act",ind:5.02,p:[1,2],pn:["淡出时长"],t:["i:2~1000+1-10",[]],c:16}],[],[{n:"+1跳",ico:"ply",ind:7.01,p:r,t:[["刷新一次跳跃","增加一次跳跃"]],c:8},{n:"改变跳跃段数",ico:"ply",ind:7.02,p:r,pn:["(-1为无限跳)"],t:["i:-1~10+1-2"],c:8},{n:"改变玩家重力方向",ico:"ply",ind:7.03,p:r,t:[["向下:270","向上:90","向右:0","向左:180"]],c:8},{n:"设置玩家运动",ico:"ply",ind:7.04,p:l,pn:["速度","方向"],t:[e,n],c:8}],[{n:"触发器",ico:"trg",ind:1.01,p,pn:["编号","",""],t:[a,"i:0~999+1-0",["开启","关闭"]]},{n:"位置",ico:"position",ind:1.02,p:s,t:[a,["x","y"],h,i]},{n:"显示",ico:"see",ind:1.03,p:l,t:[a,["可见","不可见"]]},{n:"缩放",ico:"resize",ind:1.04,p:s,t:[a,["x","y"],h,d]},{n:"玩家位置\n",ico:"ply",ind:1.05,p:s,t:[a,["x","y"],h,i],c:8},{n:"跳跃段数",ico:"ply",ind:1.06,p,t:[a,h,"i:-1~10+1-2"],c:8},{n:"全局变量",ico:"label",ind:1.07,p:s,t:[a,[["自定义",()=>Object.keys($E._G.VAR).map(i=>i+":"+i)]],h,"i:-999~999+1"]},{n:"存档状态",ico:"info",ind:1.08,p:l,t:[a,["无存档","有存档"]]},{n:"重力方向",ico:"ply",ind:1.09,p,t:[a,["=","≠:5"],["向下:270","向上:90","向右:0","向左:180"]],c:8},{n:"成员变量",ico:"label",ind:1.1,p:s,t:[a,["a","b","c","d"],h,"i:-999~999+1"]},{n:"速度",ico:"acc",ind:1.11,p:s,t:[a,["水平速度","竖直速度","合速度"],h,"i:-128~128+0.1"]},{n:"角度",ico:"ang",ind:1.12,p:s,t:[a,["绝对值","与运动方向夹角","与指向玩家方向夹角"],h,"i:0~359+1-0*15"]},{n:"透明度",ico:"see",ind:1.13,p,t:[a,h,"i:0~1+0.01-1*0.1"]},{n:"计数器",ico:"trg",ind:1.14,p:s,pn:["编号","","",""],t:[a,"i:0~999+1-0",h,"i:0~9999+1-0"]},{n:"方向",ico:"ang",ind:1.15,p:s,t:[a,["绝对值","与指向玩家方向夹角"],h,"i:0~359+1-0*15"]}],[{n:"碰撞",ico:"col",ind:2.01,p:l,t:[a,b],c:1},{n:"离开",ico:"col",ind:2.02,p:l,t:[a,b],c:1},{n:"碰撞中",ico:"col",ind:2.03,p:l,t:[a,b],c:1},{n:"未碰撞",ico:"col",ind:2.04,p:l,t:[a,b],c:1}],[{n:"按下键盘",ico:"keyboard",ind:3.01,p:l,t:[a,f],c:4},{n:"松开键盘",ico:"keyboard",ind:3.02,p:l,t:[a,f],c:4},{n:"按住键盘",ico:"keyboard",ind:3.03,p:l,t:[a,f],c:4},{n:"按下鼠标",ico:"click",ind:3.04,p:l,t:[a,E],c:4},{n:"松开鼠标",ico:"click",ind:3.05,p:l,t:[a,E],c:4},{n:"按住鼠标",ico:"click",ind:3.06,p:l,t:[a,E],c:4}]];const O=[],x=(i,t)=>{for(let d=1;d<i.length;d++)if(Array.isArray(i[d]))x(i[d],t);else{let e=t?this.conInd(i[d]):this.actInd(i[d]);i[d]=e.n+"#"+e.ico+":"+(t?"-":"+")+i[d]}return i};this.acLib[0].for(i=>{0!==i.del&&O.push(i.n+"#"+i.ico+":"+i.p[0])}),this.acLib[4].for(i=>O.push(i.n+"#"+i.ico+":+"+i.ind));const k=O.length;[["0{cx}",0,1,2,3,4,14,10],["0{cy}",5,6,7],["0{cz}",8,9,11,12,13],["0{d0}",1.11,1.02,1.03,1.04,1.05,3.02,1.06,1.01,1.07,1.08,1.09,1.1],["0{bv}",["0{cx}",0,1,2,3,4,14,10],["0{cy}",5,6,7],["0{cz}",8,9,11,12],["0{d1}",...this.acLib[6].map(i=>i.ind)]],["0{d2}/0{d3}",3.01],["0{d4}",3.03,3.09,3.04,3.08,3.05,3.06,3.07],["0{d5}",4.01,4.02,4.03,4.04,4.05],["0{19}",5.01],["0{ba}",...this.acLib[11].map(i=>i.ind)],["0{bo}",1.01,1.14,["属性",1.02,1.04,1.12,1.03,1.13,1.11,1.15],["0{ba}",1.05,1.06,1.09],["0{9g}",1.07,1.1],["0{y}",1.08]],["0{d6}",...this.acLib[13].map(i=>i.ind)],["0{d7}",["0{d8}",3.01,3.02,3.03],["0{d9}",3.04,3.05,3.06]]].for((i,t)=>O.push(x(i,t>=10)));const w=(i,t)=>{let d=0;if(i.lib)d=!(t?.(i.lib)||((i,t)=>(0|i.c)&t.lib)(i.lib,$E.$O[0])||((i,t)=>i.apl&&i.apl.some(i=>void 0===t.add[i]))(i.lib,$E.$O[0]));else if(i.hC("arr"))for(let e of i.lastChild.ch)w(e,t)&&(d=1);return d?i._s():i._h(),d},L=UI.mb({f(i,t,d){const e=d.lib;if($E.$O&&L.obj){if($E.C._U(),L.m){let i=[e.ind],t=L.node.pro.i;i.i=t,L.add=i,L.obj.splice(t,0,i);for(let i=t+1;i<L.obj.length;i++){let d=L.obj[i];d.i=i,.02===d[0]&&d[1]>=t&&(d[1]++,d.set())}}else if(!L.add){let i=[e.ind];if(i.i=L.obj.push(i)-1,L.add=i,void 0===e.ind)throw"No lib ind"}$E.pro.apAc(L.obj,L.add,e,L.node,1,L.m)}}},O,48);$c("op",L).for(i=>{i.v&&("+"===i.v[0]?i.lib=this.actInd(Number(i.v.slice(1))):"-"===i.v[0]?i.lib=this.conInd(Number(i.v.slice(1))):i.lib=this.acLib[0].find(t=>t.p[0]===i.v)),css(i,{border:"none",borderRadius:"4px"})}),L.set=(i,t,d)=>{L.node=i.pN,L.m=i.hC("tml-add"),L.add=null;const e=$E.$O[0],o=e.add;if(2===t||3===t){let i,d;$E.C._U(),2===t?(o.tml??=[],i=[1,[]],d=o.tml):(o.trg??=[],i=[1,1,[],[]],d=o.trg),i.i=d.push(i)-1,this.apAc(d,i,this.acLib[t][0],L.node)}else{let n=L.ch;switch(css(n,{display:"none"}),t){case 0:for(let i=0;i<k-2;i++)w(n[i],i=>o&&i.p.some(i=>void 0!==o[i]));L.obj=e,L.add=o;break;case 1:o.mov??=[];for(let i=k;i<k+3;i++)w(n[i],i=>o.mov.find(t=>t[0]===i.ind));L.obj=o.mov;break;case 4:n[k-1]._s(),n[k-2]._s();default:let i=k+3,c=k+10;for(5===t&&(i=c,c=n.length);i<c;)w(n[i++]);L.obj=d}UI.mbO(L,i)}},this.acChs=L},$E.preset={create(i,t,d,e){let o={n:e??Lib._o[i].n,ind:i,id:t,add:$M.cp(Lib._o[i].add)};return d&&Object.assign(o.add,d),0===o.add.mov?.length&&delete o.mov,0===o.add.tml?.length&&delete o.tml,0===o.add.trg?.length&&delete o.trg,this._o[i]&&(this._o[i].sc&&1===(o.add.scx??1)&&1===(o.add.scy??1)&&(o.sc=1),this._o[i].ang&&!o.add.ang&&(o.ang=1),this._o[i].a&&!o.add.a&&(o.a=1)),o},init(){const i={6:{trg:[[1,1,[[2.01,0,1]],[[5.01,"brk",0],[3.01,1]]]]},19:{mov:[[4,.4,270]]},23:{trg:[[1,1,[[2.01,0,0]],[[7.04,[0,10],[2,90]],[3.02,1],[5.01,"spr",0]]]]},24:{trg:[[1,0,[[2.01,0,0]],[[7.04,[0,10],[2,90]]]]]},25:{trg:[[1,1,[[2.01,0,0]],[[7.01,0],[5.01,"ej",0],[3.01,0]]]]},26:{trg:[[1,0,[[1.06,0,5,3],[2.01,0,0]],[[7.02,3],[5.01,"gj",0]]]]},27:{trg:[[1,0,[[1.06,0,5,2],[2.01,0,0]],[[7.02,2],[5.01,"lj",0]]]]},28:{trg:[[1,0,[[1.06,0,5,1],[2.01,0,0]],[[7.02,1],[5.01,"lj",0]]]]},29:{trg:[[1,0,[[1.06,0,5,-1],[2.01,0,0]],[[7.02,-1],[5.01,"gj",0]]]]},34:{trg:[[1,0,[[1.09,0,5,90],[2.01,0,0]],[[7.03,90]]]]},35:{trg:[[1,0,[[1.09,0,5,270],[2.01,0,0]],[[7.03,270]]]]},36:{hd:1,trg:[[0,1,[[2.01,0,0]],[[3.03,0,0]]]]},37:{trg:[[0,1,[[2.01,0,1]],[[3.03,0,0],[3.02,1]]]]},38:{trg:[[0,1,[[2.01,0,0]],[[3.03,0,0],[3.02,1]]]]},41:{trg:[[1,0,[[2.01,0,0]],[[3.02,1]]],[1,0,[[2.02,0,0]],[[3.02,0]]]]},50:{al:0,trg:[[2,0,[[2.01,0,1]],[[1.05,[0,1],1],[1.05,[0,0],20]]]]}},t=[1,2,3,5,6,50,7,8,9,13,14,21,36,40,43,44,45,46,47,48],d=[7,11,13,14,23,24,37,40],e=[25,21,38];Lib._o.for((o,n)=>{let c=this.create(n,n,i[n]);t.includes(n)&&(c.sc=1),d.includes(n)&&(c.ang=1),e.includes(n)&&(c.a=1),this._o[n]=c}),this._o.push(this.create(3,500,{cm:0,trg:[[1,1,[[2.01,0,0]],[[3.01,1],[5.01,"brk",0]]]]},"假砖块"),this.create(3,501,{hd:1,trg:[[2,1,[[2.01,0,0]],[[1.04,0],[5.01,"bc",0]]]]},"隐藏砖块"),this.create(10,502,{gpm:[1,8,96],csc:0,cag:0,mov:[[6,[0,1]]]},"圆圈"),this.create(1,503,{cm:0,trg:[[1,1,[[1.08,0,1,1,0],[2.01,0,0]],[[3.05,1]]],[1,1,[[1.08,0,0,0,0]],[[1.05,[0,.7],1]]]]},"Load Game"),this.create(1,504,{cm:0,trg:[[1,0,[[2.01,0,0]],[[3.05,0]]]]},"New Game")),this.spr={};for(let i in Res.spr)this.spr[i]=El("canvas",0,{width:32,height:32}),$E.drawThn(this.spr[i],Res.spr[i],0);this.nowOMenu=UI.mb({f:i=>{let t=this.nowOMenu.item;switch(i){case 3:UI.confirm("确认要删除该物体？").then(i=>{if(!i.i){let i=t.o.cid;$E._r.enc(),$E._R.for(t=>t.obj=t.renc(({prop:d,start:e,end:o})=>d.cid===i?"":t.obj.slice(e,o))),$E._r.dec(),delete Lib.obj[i];let d=$E._G,e=d._o.findIndex(t=>t.id===i);~e&&d._o.splice(e,1),e=d._h.indexOf(i),~e&&d._h.splice(e,1),$E.fixH(t.pN),t.remove(),$E._O===t&&($E._O=null),$E.$O&&$E.$P()}});break;case 1:t.hide=1,t.style.opacity=.6,t.pN.hd&&t._h(),$E.preset.updHide(t.o.cid,1);break;case 2:t.hide=0,t.style.opacity=1,t._s(),$E.preset.updHide(t.o.cid,0);break;default:$("hObj"+i)?.setKey(),t.setKey(i,1)}}},[["快捷键#keyboard","0:48","1:49","2:50","3:51","4:52","5:53","6:54","7:55","8:56","9:57"],"隐藏#unsee","取消隐藏#see","删除#trash"],16),this.nowOMenu.open=function(i){this.style.display?(i.hide?(this.ch[1]._h(),this.ch[2]._s()):(this.ch[1]._s(),this.ch[2]._h()),i.obj.id<1e3?this.ch[3]._h():this.ch[3]._s(),UI.mbO(this,this.item=i)):this.hide()},this.nowOMenu.style.fontSize="14px"},_o:[],_l:[[0,1,2,503,504],[3,43,500,501,4,5,6,50],[7,8,9,11,12],[10,502,13,14,15,16,49,17,18,19,25,20,51,21,22,23,24],[26,27,28,29,30,31,32,33,34,35],[36,37,38],[39,40,41,42],[],[]],_h:[43,500,501,503,504],updHide(i,t){$E._G._h??=[];let d=$E._G._h.indexOf(i),e=-1!==d;this._h.includes(i)^e^t&&(e?$E._G._h.splice(d,1):$E._G._h.push(i))},_O(i,t){let d=El("div","obj tip ib"),e=El("canvas",0,{width:32,height:32});d.ap(El("div"),El("p","a-cen").tx(i.n),e),d.obj=i,d.o={...Lib.obj[i.id],get add(){return Lib.obj[this.cid].add}},i.sc&&(d.o.scx=d.o.scy=1),i.ang&&(d.o.ang=0),d.a=i.a??0,d.spr=d.o.spr.map(i=>Res.spr[i]),d.setKey=(i,t)=>{i?(d.id="hObj"+i,d.firstChild.tx(i-48)._s(),t&&App.sC("edit","key"+i,d.o.id)):(d.id="",d.firstChild._h())};for(let t=48;t<58;t++)if(i.id===App.gC("edit","key"+t)){d.setKey(t);break}return d.onclick=()=>{$E._O&&($E._O.style.borderColor=""),d.style.borderColor="#fd0",$E._O=d,$E.pro.lock=!1},d.oncontextmenu=()=>this.nowOMenu.open(d),$M.task(()=>e.getContext("2d").drawImage(this.spr[d.o.spr[0]],0,0)),t&&(d.hide=1,d.style.opacity=.6,$M.task(()=>{d.pN.hd&&d._h()})),d},set(){let i=$E._G._o??[],t=[...this._l,[]],d=$E._G._h??[],e=$c("cat",$("page"));i.for(i=>t.at(-1).push(i.id)),Lib.obj.length=0,t.for((t,o)=>{let n=e[8+o];$c("obj",n).for(i=>i.remove()),t.for(t=>{let e=(t<1e3?this._o:i).find(i=>i.id===t);e&&(Lib.cO(e),n.ap(this._O(e,this._h.includes(t)^d.includes(t))))}),$E.fixH(n)})},new(i){$E._G._o??=[],i._=$M.rid(10),$E._G._o.push(i),Lib.cO(i);let t=$c("cat",$("page"));t[17].ap(this._O(i)),$E.fixH(t[17])},_:{0:{pro:[],mov:[],trg:[],tml:[],cod:[],act:[]},1:{o:[{n:"New Game",_:{...Lib._o[1].add,cm:0,trg:[[1,0,[[2.01,0,0]],[[3.05,0]]]]}},{n:"Load Game",_:{...Lib._o[1].add,cm:0,trg:[[1,1,[[1.08,0,1,1,0],[2.01,0,0]],[[3.05,1]]],[1,1,[[1.08,0,0,0,0]],[[1.05,[0,.7],1]]]]}}],pro:[],mov:[],trg:[],tml:[],cod:[],act:[]}},import(){},export(){}};