$E.pro={clipBoard:[],noAddP:["dep","scx","scy","ang","ti"],addFold(i){let t=i.ch[1];t.style.cursor="pointer",t.onclick=()=>{i.hC("fold")?i.rC("fold"):i.aC("fold"),$E.fixH($c("cat")[18])}},actInd(i){return i===i<<0?this.acLib[1][i]:this.acLib[4+i<<0][Math.round(100*i%100-1)]},conInd(i){return this.acLib[11+i<<0][Math.round(100*i%100-1)]},chkPro(i,t){switch(t){case"mov":let d=i.add[t];for(let t=d.length;t--;){let n=this.acLib[1][d[t][0]];n.c&&n.c&i.lib&&d.splice(t,1)}break;case"tml":i.add[t].for(t=>{let d=t[1];for(let t=d.length;t--;){let n=this.actInd(d[t][0]);n.c&&n.c&i.lib&&d.splice(t,1)}});case"trg":let n=i.add[t];for(let t=n.length;t--;){let d=n[t];d[2].for(d=>{let o=this.conInd(d[0]);o.c&&o.c&i.lib&&n.splice(t,1)});let o=d[3];for(let t=o.length;t--;){let d=this.actInd(o[t][0]);d.c&&d.c&i.lib&&o.splice(t,1)}}}},applyPro(i,t,d){if($E.C.addUndo(),0===i){for(let i in t){if("mov"===i||"tml"===i||"trg"===i)continue;if("til"===i){d.for(d=>{d.tile&&(d.ti=[t[i]/1e3<<0,t[i]%1e3])});continue}let n=this.acLib[0].find(t=>t.p.includes(i));if(!n)return;d.for(d=>{if(0!==d.ind&&!(n.apl?.some(i=>void 0===d.add[i])||n.c&&n.c&d.lib))if(this.noAddP.includes(i))if(d.tile){let n=d.R[0],o=d.LT[1],{w:e,h:c}=d;d[i]=t[i],$E.Object.rTile(n,o,e,c,d)}else d[i]=t[i];else d.add[i]=t[i]})}$E.sfO.redraw()}else{let n=["mov","tml","trg"][i-1];d.for(i=>{0!==i.ind&&(i.add[n]=JSON.parse(JSON.stringify(t)),this.chkPro(i,n))})}},updTml(i,t,d){if(!i)return;const n=d?[4.04]:[4.01,4.02,4.03];i.for(i=>{i[i.length-1].for(i=>{n.includes(i[0])&&i[1]>t&&(i[1]--,i.set())})})},CV(i,t){let d=El("div","ab");css(d,{top:t+"px",right:"28px"});let n=El("div","p-btn",{innerHTML:UI.ico("copy")+"<div>复制</div>"}),o=El("div","p-btn",{innerHTML:UI.ico("paste")+"<div>粘贴</div>"});return n.onclick=()=>this.clipBoard[i]=JSON.stringify(d.pN.pro),o.onclick=()=>{if(this.clipBoard[i]){JSON.parse(this.clipBoard[i]).for((i,t)=>d.pN.pro[t]=i),$E.reloadPro()}},d.ap(n,o),d},apAc(i,t,d,n,o=!0,e){let c=El("div","p-ac"),p=d.pn??d.p,l=d.n.replace("\n","<br/>");c.p=d.p,c._id=d.type+d.ind+t.i+d.p?.join(),e?n.before(c):n.ap(c),"tml"===d.type?(c.aC("tml"),l+=t.i,t.set=()=>c.ch[1].tx("时间轴",t.i)):"trg"===d.type&&(l+=t.i+"<br/>",t.set=()=>c.ch[1].innerHTML=`条件触发${t.i}<br/>`),c.pro=t,c.innerHTML=`${UI.ico(d.ico)}<span>${l}</span>`;const a=$E.C,r=233;if(o&&(c.innerHTML+="<svg class='p-del'><use href='#-trash'></use></svg>",c.lastChild.onclick=()=>{if(a.addUndo(),Array.isArray(i)){let n=t.i;i.splice(n,1);for(let t=n;t<i.length;t++)i[t].i=t,"tml"===d.type||"trg"===d.type?i[t].set():(.02===i[t][0]&&i[t][1]>n&&(i[t][1]--,i[t].set()),i[t].check?.());"tml"===d.type?(this.updTml(i,n),this.updTml($E.$O[0].add.trg,n)):"trg"===d.type&&(this.updTml(i,n,1),this.updTml($E.$O[0].add.tml,n,1))}else if(i.R){let[n,o]=i.LT,{w:e,h:c}=i;d.p.for(d=>{i[d]=void 0,delete i[d],delete t[d]}),d.calc&&i.calcRect(),d.d&&(i.tile&&$E.Object.rTile(n,o,e,c,i),$E.sfO.dirty(n,o,e,c),$E.sfO.dirty(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update(),$E.C.dMouse(0,0,1))}else d.p.for(i=>{delete t[i]}),d.d&&i.drawTxt?.(1);c.remove(),$E.fixH($c("cat")[18])}),d.copy&&c.ap(this.CV(d.copy,2)),d.p&&d.p.for((n,o)=>{if(d.t[o].includes("|")){let e=d.t[o].split("|"),l=[],s=[];e.for((o,e)=>{let c=o.split("<"),p=c[1].split(","),h=El("div","ib");l.push(c[0]),s.push(h),t[n]?.[0]!==e&&h._h(),p.for((o,e)=>{let c=o.split(">"),p=c[1].split(":");switch(c=c[0],p[0]){case"i":let o=p[1].split("+"),l=o[0].split("~");o=o[1].split("-"),h.ap(UI.I(c,{type:"number",value:t[n]?.[e+1]??o[1]??0,m:Number(l[0]),M:Number(l[1]),s:Number(o[0])},36).on((i,d)=>{d!==r&&a.addUndo(),t[n][e+1]=i}));break;case"t":h.ap(UI.I(c,{value:t[n]?.[e+1]??"00000000"},80).on((o,c)=>{c!==r&&a.addUndo();let p=t[n];p[e+1]=o,t[n]=p,d.d&&($E.sfO.dirty(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())}))}})});let h=UI.O(...l).on((o,e)=>{e!==r&&a.addUndo(),o=Number(o),s.for((i,t)=>o==t?i._s():i._h());let c=[o];for(let i of s[o].ch)c.push(i.v);return t[n]=c,d.d&&($E.sfO.dirty(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update()),o}),f=c.ap(El("div","rl"));"ti"===n&&(f.style.display="inline-block"),f.ap(UI.span(p[o]),h),h.set(t[n]?.[0]??h.f(0,r)),s.for(i=>f.ap(i))}else if(Array.isArray(d.t[o])){let e=UI.O(...d.t[o]).on((o,e)=>{e!==r&&a.addUndo();let c=Number(o);t[n]=isNaN(c)?o:c,d.d&&(i.svg?i.drawTxt():($E.sfO.dirty(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())),5.01===d.ind&&o.length&&Au.play(o,2**((t[n+1]??0)/12))});e.set(t[n]??e.f(0,r)),c.ap(UI.span(p[o]),e),d.t[o]===this.acAO?(css(e,{minWidth:0,float:"right",marginRight:"8px"}),css($c("op",e.m),{minWidth:0})):"="===d.t[o][0]&&(css(e,{minWidth:0,width:"16px",margin:0}),css($c("op",e.m),{minWidth:0}))}else{let e=d.t[o].split(":");switch(e[0]){case"i":let l=e[1].split("+"),s=l[0].split("~"),h=p[o];l=l[1].split("-"),"\n"===h.slice(-1)&&(h=h.slice(0,-1));let f=c.ap(UI.I(h?h+":":"",{type:"number",value:t[n]??(Array.isArray(i)?l[1]??0:i[n]??l[1]??0),m:Number(s[0]),M:Number(s[1]),s:Number(l[0])},36)).on((o,e)=>{e!==r&&a.addUndo();let c=i.R?.[0],p=i.LT?.[1],{w:l,h:s}=i;this.noAddP.includes(n)||"x"===n||"y"===n?i[n]=Number(o):t[n]=Number(o),d.calc&&i.calcRect(),d.d&&i.w&&(i.tile&&$E.Object.rTile(c,p,l,s,i),$E.sfO.dirty(c,p,l,s),$E.C.dMouse(0,0,1),i.svg?i.drawTxt():($E.sfO.dirty(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())),t.check?.(),5.01===d.ind&&t[n-1].length&&Au.play(t[n-1],2**(t[n]/12))});if(f.id="edit-"+n+(d.ind??""),0===o)switch(d.ind){case.02:case 4.01:case 4.02:case 4.03:case 4.04:t.set=()=>f.set(t[1])}else.02===d.ind&&(t.check=()=>{if(0===t[2]){for(let d=t[1];d<=t.i;d++)if(.01===i[d][0])return;f.f(f.set(1)),UI.alert(`警告：循环节点${t[1]}-${t.i}之间没有时间间隔，将会造成死循环`)}});void 0===t[n]&&"x"!==n&&"y"!==n&&f.f(l[1]??0,r),"\n"===p[o].slice(-1)&&c.ap(El("br"));break;case"s":case"s1":c.ap(UI.S(p[o]+":",t[n]??"s1"===e[0]).on((o,e)=>{e!==r&&a.addUndo(),t[n]=o,d.d&&i.w&&($E.sfO.dirty(i.R[0],i.LT[1],i.w,i.h),$E.sfO.update())})).style.display="inline-block",void 0===t[n]&&c.lastChild.f("s1"===e[0]?1:0,r);break;case"c":c.ap(UI.Col(p[o]+":",t[n])).on(o=>{a.addUndo(),t[n]=o,d.d&&i.svg&&i.drawTxt()});break;case"txt":c.ap(El("br"));let b=c.ap(El`textarea`);b.value=i[n]??i.add[n],b.onchange=()=>{a.addUndo(),i[n]=b.value}}}}),"tml"===d.type){this.addFold(c),c.style.paddingBottom="28px",c.aC("count");let i=El("div","p-add",{innerHTML:UI.ico("add")+"添加节点"});i.obj=t[1],c.ap(i).onclick=function(){$E.pro.acChs.set(this,4,this.obj)}}else if("trg"===d.type){this.addFold(c);let i=c.ap(El("div","p-ac trg",{innerHTML:UI.ico("if")+"条件"})),d=c.ap(El("div","p-ac",{innerHTML:UI.ico("act")+"动作"})),n=i.ap(El("div","p-add",{innerHTML:UI.ico("add")+"添加条件"})),o=d.ap(El("div","p-add",{innerHTML:UI.ico("add")+"添加动作"}));css([i,d],{paddingBottom:"28px"}),d.style.borderBottom="none",n.obj=t[2],o.obj=t[3],n.onclick=function(){$E.pro.acChs.set(this,5,this.obj)},o.onclick=function(){$E.pro.acChs.set(this,6,this.obj)}}return c.pN.hC("tml")&&(c.ap(El("div","tml-add")).onclick=function(){$E.pro.acChs.set(this,4,i)}),$E.fixH($c("cat")[18]),c},initLib(){const i="i:-32~4032+1",t="i:1~6000+1-1",d="固定值<>i:0.1~999+0.1-4|随机值<>i:0.1~999+0.1-2,~>i:0.1~999+0.1-4",n="固定值<>i:-999~999+0.1|随机值<>i:-999~999+0.1,~>i:-999~999+0.1",o="固定值<>i:0~359+1|随机值<>i:-360~360+1,~>i:-360~360+1-360|相对自身夹角<>i:0~359+1-0|指向玩家<>|离开玩家<>",e=[1],c=[1,2],p=[1,2,3],l=[1,2,3,4],a=["且","或"],r=["=",">","<","≥","≤","≠"],s=["左:L","右:R","上:U","下:D","跳跃(Shift):J","射击(Z):z","W:w","A:a","S:s","D:d","X:x"],h=["玩家","子弹","固体","板子","致命","水",["物体",...Lib.obj.slice(1).map((i,t)=>i.n+":"+(t+6))]],f=[[["中文"],["英文"]],"i:12~128+1",["常规","粗体","斜体","粗斜体"],["靠左","居中","靠右"],"c","i:0~8+1","c","i:0~16+1","c"];Res.fontList.forEach((i,t)=>{i[1]>3?f[0][0].push(i[2]+":"+t):f[0][1].push(i[0]+":"+t)}),f[0][1].sort((i,t)=>i.localeCompare(t)),this.acAO=a,this.acLib=[[{n:"位置",ico:"position",p:["x","y"],t:[i,"i:-32~3072+1"],d:1,h:1},{n:"图层",ico:"layer",p:["dep"],pn:["深度"],t:["i:0~11+1-7"],d:1,del:0,c:16},{n:"碰撞属性",ico:"col",p:["cm"],pn:[""],t:[["无碰撞","一般物体","固体","板子","致命","水"]],del:0,c:1},{n:"大小",ico:"resize",p:["w","h"],pn:["宽","高"],t:["i:16~800+1-32","i:16~608+1-32"],apl:["w"],d:1,calc:1,del:0},{n:"缩放",ico:"resize",p:["scx","scy"],pn:["x","y"],t:["i:0.5~25+0.01-1","i:0.5~25+0.01-1"],d:1,c:2},{n:"角度",ico:"ang",p:["ang"],pn:["角度"],t:["i:0~359+1-0"],d:1,c:2},{n:"显示",ico:"see",p:["hd"],pn:[""],t:[["可见","不可见"]],d:1},{n:"透明度",ico:"see",p:["al"],pn:["alpha值"],t:["i:0~1+0.01-1"],d:1,c:2},{n:"文本",ico:"text",p:["txt"],t:["txt"],apl:["txt"],del:0},{n:"字体",ico:"label",p:["ftf","fts","ftt","fta","ftc","fst","fkc","fsd","fsc"],pn:["","大小\n","样式","对齐","颜色","描边","颜色","发光","颜色"],t:f,apl:["ftf"],d:1,del:0},{n:"传送",ico:"warp",p:["wr","ws","wx","wy"],pn:["房间"," 效果","位置(为0则使用出生点位置) x","y"],t:[["下一房间:128","当前房间:0",["指定房间",()=>$E._R.map(i=>i.name+":"+(i.id-$E._r.id))]],["淡入淡出","无效果","传送效果","旋转矩形","Kid形状"],"i:0~4000+1","i:0~3040+1"],apl:["ws"],del:0},{n:"长度",ico:"len",p:["len"],pn:[""],t:["i:32~800+1-32"],apl:["len"],d:1,del:0},{n:"激光状态",ico:"label",p:["lso"],pn:["开启激光"],t:["s"],apl:["lso"],del:0},{n:"激光属性",ico:"label",p:["lst"],pn:["穿透固体"],t:["s"],apl:["lst"],del:0},{n:"摩擦力",ico:"label",p:["frc"],pn:[""],t:["i:0.1~1+0.1-0.1"],apl:["frc"],del:0},{n:"数量",ico:"label",p:["num"],pn:[""],t:["i:2~72+1-4"],apl:["num"],d:1,del:0},{n:"贴图",ico:"label",p:["ti"],pn:[""],t:["自动贴图<>|手动贴图<贴图编码>t"],apl:["til"],d:1,del:0,h:1},{n:"传送速度",ico:"acc",p:["csp"],pn:[""],t:["i:1~32+1-3"],apl:["csp"],del:0},{n:"跳跃段数",ico:"ply",p:["jump","sJump"],pn:["(-1为无限跳)","存档保存"],t:["i:-1~10+1-2","s"],apl:["sJump"],del:0},{n:"重力方向",ico:"ply",p:["gravDir","sGravDir"],pn:["","存档保存"],t:[["向下:270","向上:90","向左:180","向右:0"],"s"],apl:["gravDir"],del:0},{n:"子弹连发",ico:"ply",p:["conShoot"],pn:[""],t:["s"],apl:["conShoot"],del:0},{n:"AD位移",ico:"ply",p:["adMove"],pn:[""],t:["s"],apl:["adMove"],del:0},{n:"生命值",ico:"ply",p:["life"],pn:[""],t:["i:1~10+1-1"],apl:["life"],del:0},{n:"文本",ico:"text",p:["txt1","ftf1","fts1","ftt1","fta1","ftc1","fst1","fkc1","fsd1","fsc1"],pn:["","字体","大小\n","样式","对齐","颜色","描边","颜色","发光","颜色"],t:["txt",...f],apl:["txt1"],d:1,del:0},{n:"提示文本",ico:"text",p:["txt2","ftf2","fts2","ftt2","fta2","ftc2","fst2","fkc2","fsd2","fsc2"],pn:["","字体","大小\n","样式","对齐","颜色","描边","颜色","发光","颜色"],t:["txt",...f],apl:["txt2"],d:1,del:0}],[{n:"移动到位置",ico:"move",ind:0,p:l,pn:["x","y","速度","速度模式"],t:["相对位置<>i:-800~800+1|绝对位置<>i:-32~4032+1","相对位置<>i:-800~800+1|绝对位置<>i:-32~3072+1",d,["匀速","减速"]],c:2},{n:"移动距离",ico:"move",ind:1,p:l,pn:["距离","方向","速度","速度模式"],t:["i:1~800+1-32",o,d,["匀速","减速"]],c:2},{n:"水平+竖直速度",ico:"move",ind:2,p:c,pn:["水平速度","竖直速度"],t:[n,n],c:2},{n:"速度+方向",ico:"move",ind:3,p:c,pn:["速度","方向"],t:[d,o],c:2},{n:"加速度",ico:"acc",ind:4,p:c,pn:["大小","方向"],t:["i:0.01~1+0.01-0.2","i:0~359+1-270"],c:2},{n:"角度控制",ico:"ang",ind:5,p:e,pn:["角度"],t:["与运动方向夹角<>i:0~359+1-0|与指向玩家方向夹角<>i:0~359+1-0"],c:2},{n:"旋转",ico:"rotate",ind:6,p:e,pn:["旋转速度"],t:["固定值<>i:-180~180+0.1-1|随机值<>i:-180~180+0.1,~>i:-180~180+0.1"],c:2},{n:"摆动",ico:"swing",ind:7,p,pn:["初始角","幅度","周期"],t:["i:0~359+1","i:1~180+1-30","i:4~1000+1-100"],c:2},{n:"水平简谐运动\n",ico:"sin",ind:8,p,pn:["振幅","周期","初相"],t:["i:1~800+1-32","i:4~1000+1-100","i:0~359+1-0"],c:2},{n:"竖直简谐运动\n",ico:"sin",ind:9,p,pn:["振幅","周期","初相"],t:["i:1~608+1-32","i:4~1000+1-100","i:0~359+1-0"],c:2},{n:"路径",ico:"path",ind:10,c:2},{n:"跟随玩家",ico:"aim",ind:11,p:e,pn:["速度"],t:["i:0.1~32+0.1-1"],c:10},{n:"同步玩家",ico:"aim",ind:12,p:l,pn:["同步x","偏移量","同步y","偏移量"],t:["s","i:-400~400+1-0","s","i:-400~400+1-0"],c:10},{n:"旋转中心",ico:"rotate",ind:13,p:e,pn:[""],t:[["左上","中上","右上","左中:4","中心:5","右中:6","左下:8","中下:9","右下:10"]],c:2},{n:"运动障碍",ico:"stop",ind:14,p:c,pn:["","效果"],t:[["固体","板子","致命","水",["物体",...Lib.obj.slice(1).map((i,t)=>i.n+":"+(t+4))]],["阻挡","反弹"]],c:3}],[{n:"时间轴",ico:"timer",type:"tml",copy:"tml",p:[0],pn:["直接运行"],t:["s1"]}],[{n:"条件触发",ico:"logic",type:"trg",copy:"trg",p:[0,1],pn:["执行顺序","执行次数(0=无限)"],t:[["时间轴前","移动前","移动后","手动执行"],"i:0~999+1-1"]}],[{n:"间隔",ico:"timer",ind:.01,p:e,pn:["时长"],t:["i:1~6000+1-50"]},{n:"循环",ico:"redo",ind:.02,p:c,pn:["节点","次数(0=无限)"],t:["i:0~999+1-0","i:0~999+1-0"]}],[{n:"碰撞属性",ico:"col",ind:1.01,p:e,pn:[""],t:[["无碰撞","一般物体","固体","板子","致命","水"]],c:1},{n:"缩放",ico:"resize",ind:1.02,p,pn:["x","y","过渡时长"],t:["固定值<>i:0.5~25+0.01-1|增加值<>i:-5~5+0.01","固定值<>i:0.5~25+0.01-1|增加值<>i:-5~5+0.01",t],c:2},{n:"角度",ico:"ang",ind:1.03,p:c,pn:["角度","过渡时长"],t:["固定值<>i:0~359+1|增加值<>i:-360~360+1",t],c:2},{n:"显示",ico:"see",ind:1.04,p:e,pn:[""],t:[["可见","不可见","相反"]]},{n:"透明度",ico:"see",ind:1.05,p:c,pn:["alpha值","过渡时长"],t:["固定值<>i:0~1+0.01-1|增加值<>i:-1~1+0.01",t],c:2},{n:"长度",ico:"len",ind:1.06,p:c,pn:["长度","过渡时长"],t:["固定值<>i:32~800+1-32|增加值<>i:-800~800+1",t],apl:["len"]},{n:"激光状态",ico:"label",ind:1.07,p:e,pn:[""],t:[["关闭","开启","相反"]],apl:["lso"]},{n:"激光属性",ico:"label",ind:1.08,p:e,pn:[""],t:[["不穿透固体","穿透固体","相反"]],apl:["lst"]},{n:"摩擦力",ico:"label",ind:1.09,p:e,pn:[""],t:["i:0.1~1+0.1-0.1"],apl:["frc"]}],[{n:"停止运动",ico:"stop",ind:2.01,c:2},{n:"改变速度",ico:"acc",ind:2.02,p:e,pn:["速度"],t:["固定值<>i:0.1~128+0.1-4|随机值<>i:0.1~128+0.1-2,~>i:0.1~128+0.1-4|增加值<>i:-128~128+0.1|倍乘值<>i:-5~5+0.01-1"],c:2},{n:"改变水平速度",ico:"acc",ind:2.03,p:e,pn:["水平速度"],t:["固定值<>i:-128~128+0.1|随机值<>i:-128~128+0.1,~>i:-128~128+0.1|增加值<>i:-128~128+0.1|倍乘值<>i:-5~5+0.01-1"],c:2},{n:"改变竖直速度",ico:"acc",ind:2.04,p:e,pn:["竖直速度"],t:["固定值<>i:-128~128+0.1|随机值<>i:-128~128+0.1,~>i:-128~128+0.1|增加值<>i:-128~128+0.1|倍乘值<>i:-5~5+0.01-1"],c:2},{n:"改变方向",ico:"ang",ind:2.05,p:e,pn:["方向"],t:["固定值<>i:0~359+1|随机值<>i:-360~360+1,~>i:-360~360+1-360|指向玩家<>|离开玩家<>|增加值<>i:-179~180+1"],c:2}],[{n:"销毁",ico:"trash",ind:3.01,p:e,pn:["效果"],t:[["无","掉落","淡出"]]},{n:"改变子图像",ico:"label",ind:3.02,p:e,pn:[""],t:[["0","1","切换"]],c:16},{n:"设置触发器",ico:"trg",ind:3.03,p:[2,1],pn:["","触发器"],t:[["开启","关闭","切换"],"i:0~999+1-0"]},{n:"改变变量值",ico:"label",ind:3.04,p:c,pn:["变量","值"],t:[[["全局变量",()=>Object.keys($E.GAME.VAR).map(i=>i+":0"+i)],["成员变量","a:a","b:b","c:c","d:d"]],"固定值<>i:-999~999+1|增加值<>i:-999~999+1"]},{n:"游戏控制",ico:"warp",ind:3.05,p:e,pn:[""],t:[["新游戏","继续游戏"]]},{n:"切换房间\n",ico:"warp",ind:3.06,p:c,pn:["房间"," 效果"],t:[["下一房间:128","当前房间:0",["指定房间",()=>$E._R.map(i=>i.name+":"+(i.id-$E._r.id))]],["淡入淡出","无效果"]]}],[{n:"开始(继续)时间轴",ico:"timer",ind:4.01,p:e,pn:["编号"],t:["i:0~999+1-0"]},{n:"暂停时间轴",ico:"timer",ind:4.02,p:e,pn:["编号"],t:["i:0~999+1-0"]},{n:"停止(重置)时间轴",ico:"timer",ind:4.03,p:e,pn:["编号"],t:["i:0~999+1-0"]},{n:"执行条件触发",ico:"logic",ind:4.04,p:e,pn:["编号"],t:["i:0~999+1-0"]}],[{n:"播放音效",ico:"snd",ind:5.01,p:c,pn:["","音高"],t:[[["玩家","射击:st","跳跃:jp","死亡:dth"],["机关","机关:bc","破坏:brk","Spike:spk","Cherry:chr"],["物体","弹簧:spr","金币:coin"],["Boss","打击:hit","弹幕:bst"],["音效","音效1:ej","音效2:gj","音效3:lj"]],"i:-36~36+1"]},{n:"创建残影",ico:"act",ind:5.02,p:[1,2,3,4,5,6,7],pn:["淡出时长","x缩放速度","y缩放速度","水平速度","竖直速度","重力","旋转速度"],t:["i:2~1000+1-10","i:-0.5~5+0.01","i:-0.5~5+0.01",n,n,"固定值<>i:0~1+0.01|随机值<>i:0~1+0.01,~>i:0~1+0.01","固定值<>i:-180~180+0.1-0|随机值<>i:-180~180+0.1,~>i:-180~180+0.1"],c:16}],[],[{n:"+1跳",ico:"ply",ind:7.01,p:e,pn:[""],t:[["刷新一次跳跃","增加一次跳跃"]],c:8},{n:"改变跳跃段数",ico:"ply",ind:7.02,p:e,pn:["(-1为无限跳)"],t:["i:-1~10+1-2"],c:8},{n:"改变玩家重力方向",ico:"ply",ind:7.03,p:e,pn:[""],t:[["向下:270","向上:90","向右:0","向左:180"]],c:8},{n:"设置玩家运动",ico:"ply",ind:7.04,p:c,pn:["速度","方向"],t:[d,o],c:8}],[{n:"触发器",ico:"trg",ind:1.01,p:[2,3,1],pn:["编号","",""],t:["i:0~999+1-0",["开启","关闭"],a]},{n:"位置",ico:"position",ind:1.02,p:[2,3,4,1],pn:["","","",""],t:[["x","y"],r,i,a]},{n:"显示",ico:"see",ind:1.03,p:[2,1],pn:["",""],t:[["可见","不可见"],a]},{n:"属性",ico:"label",ind:1.04,p:[2,3,4,1],pn:["","","",""],t:[["缩放x:scx","缩放y:scy","角度:ang","透明度:al","速度:sp","方向:di","水平速度:hsp","竖直速度:vsp","子图像:ind"],r,"i:-999.9~999.9+0.1",a],c:2},{n:"玩家位置\n",ico:"ply",ind:1.05,p:[2,3,4,1],pn:["","","",""],t:[["x","y"],r,i,a],c:8},{n:"玩家属性\n",ico:"ply",ind:1.06,p:[2,3,4,1],pn:["","","",""],t:[["水平速度:hspd","竖直速度:vspd","移动速度:moveSpd","重力大小:grav","重力方向:gravDir","跳跃段数:jump"],r,"i:-999.9~999.9+0.1",a],c:8},{n:"变量",ico:"label",ind:1.07,p:[2,3,4,1],pn:["","","",""],t:[[["全局变量",()=>Object.keys($E.GAME.VAR).map(i=>i+":0"+i)],["成员变量","a:a","b:b","c:c","d:d"]],r,"i:-999~999+1",a]},{n:"游戏信息\n",ico:"label",ind:1.08,p:[2,3,4,1],pn:["","","",""],t:[["时间(分钟):tMin","死亡:dth","存档状态:svS"],r,"i:0~9999+1",a]}],[{n:"碰撞",ico:"col",ind:2.01,p:[2,1],pn:["",""],t:[h,a],c:1},{n:"离开",ico:"col",ind:2.02,p:[2,1],pn:["",""],t:[h,a],c:1}],[{n:"按下键盘",ico:"keyboard",ind:3.01,p:[2,1],pn:["",""],t:[s,a],c:4},{n:"松开键盘",ico:"keyboard",ind:3.02,p:[2,1],pn:["",""],t:[s,a],c:4},{n:"按住键盘",ico:"keyboard",ind:3.03,p:[2,1],pn:["",""],t:[s,a],c:4}]];const b=El("div","mb");b.onmouseleave=function(){this._h()},b.push=function(i){return this.ap(El("div","op arr").tx(i)).ap(El("div","mb"))},b.chkLib=(i,t)=>{let d=i.ch[0].ch,n=0;for(let i=d.length;i--;){let o=d[i].lib;d[i]._s(),o.c&&o.c&t?d[i]._h():n=1}n?i._s():i._h()},b.set=(i,t,d)=>{if(!$E.$O)return;let n=i.offsetLeft+(i.offsetWidth>100?16:i.offsetWidth),o=i.offsetTop,e=b.ch,c=$E.$O[0];for(b.node=i.pN,b.m=i.hC("tml-add");!i.hC("cat");)n+=(i=i.pN).offsetLeft,o+=i.offsetTop;if(i.pN.ap(b)._s(),css(b,{top:`${o+4}px`,left:n-16+"px"}),css(b.ch,{display:"none",border:"none"}),4===t||6===t){for(let i=3;i<9;i++)b.chkLib(e[i],c.lib);0===$E._r.type||4===$E._r.type?e[6].ch[0].ch[4]._s():e[6].ch[0].ch[4]._h(),e=e[4].ch[0].ch;for(let i=e.length;i--;){let t=e[i].lib;(t.apl&&t.apl.some(i=>void 0===c.add[i])||t.r&&_r.type!==t.r-1)&&e[i]._h()}e=b.ch,b.obj=d,b.add=null}switch(t){case 0:e=e[2],e._s(),e=e.ch[0].ch;for(let i=e.length;i--;){let t=e[i].lib;e[i]._s(),t.apl&&t.apl.some(i=>void 0===c.add[i])&&e[i]._h();let d=c.add;d&&t.p.some(i=>void 0!==d[i]||void 0!==c.add[i])&&e[i]._h(),t.c&&t.c&c.lib&&e[i]._h()}b.obj=c,b.add=c.add;break;case 1:if(e=e[3],e._s(),c.add.mov){e=e.ch[0].ch;let i=c.add.mov;for(let t=e.length;t--;){let d=e[t].lib;i.find(i=>i[0]===d.ind)?e[t]._h():e[t]._s(),d.c&&d.c&c.lib&&e[t]._h()}}else c.add.mov=[],b.chkLib(e,c.lib);b.obj=c.add.mov,b.add=null;break;case 2:$E.C.addUndo(),c.add.tml||(c.add.tml=[]);let i=[1,[]];i.i=c.add.tml.push(i)-1,this.apAc(c.add.tml,i,this.acLib[2][0],b.node);break;case 3:$E.C.addUndo(),c.add.trg||(c.add.trg=[]);let t=[1,1,[],[]];t.i=c.add.trg.push(t)-1,this.apAc(c.add.trg,t,this.acLib[3][0],b.node);break;case 4:e[0]._s(),e[1]._s();break;case 5:for(let i=11;i<14;i++)b.chkLib(e[i],c.lib);b.obj=d,b.add=null}},this.acLib.set=(i,t)=>{let d=El("div","op");d.innerHTML=UI.ico(t.ico)+" "+t.n,d.lib=t,13===t.ind?i.ch[5].before(d):i.ap(d),d.onclick=function(){if($E.$O&&b.obj){if($E.C.addUndo(),b.m){let i=[this.lib.ind],t=b.node.pro.i;for(i.i=t,b.add=i,b.obj.splice(t,0,i),j=t+1;j<b.obj.length;j++){let i=b.obj[j];i.i=j,.02===i[0]&&i[1]>=t&&(i[1]++,i.set())}}else if(!b.add){let i=[];i.i=b.obj.push(i)-1,b.add=i,void 0!==this.lib.ind&&(i[0]=this.lib.ind)}$E.pro.apAc(b.obj,b.add,this.lib,b.node,1,b.m),b._h()}}},this.acLib[4].for(i=>this.acLib.set(b,i)),this.acLib.slice(0,2).for((i,t)=>{let d=b.push(0===t?"设置属性":"设置运动");this.acLib[t].for((i,t)=>{i.h||this.acLib.set(d,i)})}),["改变属性","改变运动","通用","控制","效果","创建","玩家","条件","碰撞","交互"].for((i,t)=>{let d=b.push(i);this.acLib[5+t].for(i=>this.acLib.set(d,i))}),$c("page")[3].ap(b),b._h(),css(b.ch,{minWidth:"32px",borderRadius:"4px"}),this.acChs=b},_lock:!1,get lock(){return this._lock},set lock(i){i!==this._lock&&(this._lock=i,i?$E._O&&($E._O.style.borderColor="",$E._O=null):($E.sfE.canvas.style.opacity=.6,$E.$O=null,$E.C.dMouse(0,0,1)))}},doc.fonts.ready.then(()=>$E.pro.initLib()),$E.$P=(i,t)=>{const d=$c("p-ev"),n=["属性","运动","时间轴","条件触发"],o=$E.pro;if(o.buildIn=t,d.for((i,t)=>{i.innerHTML=`<h4>${i18n(n[t])}</h4>`,i.style.paddingBottom="",i.firstChild.onclick=t=>{t.target===i.firstChild&&(i.hC("fold")?i.rC("fold"):i.aC("fold"),$E.fixH($c("cat")[18]))}}),$c("mb").for(i=>{i.pN.hC("op")||i.remove()}),i){let e=i[0];if(t)$("p-name").tx(t.name).ap(UI.B2("应用到所有房间").on(()=>$E.GAME.R.for(i=>{0!==i.type&&i!==$E._r&&(i.bobj[t.id].add=JSON.parse(JSON.stringify(e.add)))}))),$E.drawThn($("p-spr").ch[0],t.spr),$E.pro.lock=!0;else{let t=Lib.obj[e.ind].n;if($("p-name").tx(1===i.length?t:`${t} 等${i.length}个物体`),e.spr.for((i,t)=>$E.drawThn($("p-spr").ch[0],i,0===t)),0===e.ind)return}d.for((i,d)=>{i.i=d;let e=i.firstChild;const c=$E.$O;t&&t.add[d]&&(i.style.paddingBottom="28px"),i.style.paddingBottom="28px",e.ap(El("div","p-btn",{innerHTML:UI.ico("copy")+`<div>复制${n[d]}</div>`})).onclick=function(){let i=this.pN.pN.i;if(0===i){let i={...c[0].add};delete i.mov,delete i.tml,delete i.trg,o.clipBoard[0]=i}else{let t=JSON.stringify(c[0].add[["mov","tml","trg"][i-1]]);o.clipBoard[i]=t?JSON.parse(t):[]}},o.clipBoard[d]&&(e.ap(El("div","p-btn",{innerHTML:UI.ico("paste")+`<div>粘贴${n[d]}</div>`})).onclick=function(){let i=this.pN.pN.i;o.applyPro(i,o.clipBoard[i],c),$E.reloadPro()}),c.length>1&&(e.ap(El("div","p-btn",{innerHTML:`${UI.ico("brush")}<div>${i18n("全部应用")}</div>`})).onclick=function(){let i=this.pN.pN.i;if(0===i)o.applyPro(i,c[0].add,c.slice(1));else{let t=JSON.stringify(c[0].add[["mov","tml","trg"][i-1]]);o.applyPro(i,t?JSON.parse(t):[],c.slice(1))}}),t&&!t.add[d]||(i.ap(El("div","p-add",{innerHTML:UI.ico("add")+i18n("添加")})).onclick=function(){o.acChs.set(this,this.pN.i)})});const c=o.acLib;(!t||t&&void 0!==e.x)&&o.apAc(e,e.add,c[0][0],d[0],0),void 0!==e.add.til&&o.apAc(e,e,c[0][16],d[0],0);for(let i in e.add)switch(i){case"mov":e.add.mov.for((i,t)=>{i.i=t,o.apAc(e.add.mov,i,c[1][i[0]],d[1],!0)});break;case"tml":e.add.tml.for((i,t)=>{i.i=t;let n=o.apAc(e.add.tml,i,c[2][0],d[2],!0);n.aC("fold"),i[1].for((t,d)=>{t.i=d,o.apAc(i[1],t,o.actInd(t[0]),n,!0)})});break;case"trg":e.add.trg.for((i,t)=>{i.i=t;let n=$c("p-ac",o.apAc(e.add.trg,i,c[3][0],d[3],!0));i[2].for((t,d)=>{t.i=d,o.apAc(i[2],t,o.conInd(t[0]),n[0],!0)}),i[3].for((t,d)=>{t.i=d,o.apAc(i[3],t,o.actInd(t[0]),n[1],!0)})});break;default:let t=c[0].find(t=>t.p[0]==i);t&&o.apAc(e,e.add,t,d[0],t.del)}}else $E.$O=null,$E.pro.lock=!1,$("p-spr").ch[0].getContext("2d").clearRect(0,0,32,32),$("p-name").tx("未选择物体"),$("p-info").tx(""),$E.fixH($c("cat")[18])},$E.reloadPro=()=>{let i=$E.C.editPos();$E.$P($E.$O,$E.pro.buildIn),$E.C.rcPos(i)},$E.preset={_:{0:{_:[],pro:[],mov:[],trg:[],tml:[],cod:[],act:[]},1:{_:[],pro:[],mov:[],trg:[],tml:[],cod:[],act:[]}},import(){},export(){}};