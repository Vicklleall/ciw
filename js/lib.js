const Lib={init(){const t=(t,s,n=7,a=1,d,e=0)=>{let h={dep:n,cm:a};return d&&Object.assign(h,d),{n:t,def:e,spr:s.split(","),add:h}};this.obj=[t("0{53}","pst",7,0),t("0{54}","wp",8,1,{wr:128,ws:0,wx:0,wy:0},0),t("0{55}","sp",6,1,0,1),t("0{56}","blk",5,2,{til:15}),t("0{57}","blkm",5,2),t("0{58}","blk,ice",5,2,{frc:.1}),t("0{59}","bbl",5,2,{trg:[[1,1,[[2.01,0,1]],[[5.01,"brk",0],[3.01,1]]]]}),t("0{5a}","spk",4,4),t("0{5b}","chr",7,4),t("0{5c}","kbl",6,4),t("0{5d}","gp",7,0,{gpm:[0],csc:1,cag:1,cds:1}),t("0{5e}","lsr",7,4,{len:32,lso:1,lst:0},3),t("0{5f}","lava",9,4),t("0{5g}","pf",7,3),t("0{5h}","wj",6),t("0{5i}","wt2",9,5),t("0{5j}","wt1",9,5),t("0{5k}","wt4",9,5),t("0{5l}","twt",9,5,{dnt:250}),t("0{5m}","crt",7,2,{mov:[[4,.4,270],[14,0,0]]},4),t("0{5n}","cvl",7,1,{csp:3}),t("0{5o}","ld",6),t("0{5p}","rp",7,1,{len:64}),t("0{5q}","spr",7,1,{trg:[[1,1,[[2.01,0,0]],[[7.04,[0,10],[2,90]],[3.02,1],[5.01,"spr",0]]]]}),t("0{5r}","tp",7,1,{trg:[[1,0,[[2.01,0,0]],[[7.04,[0,10],[2,90]]]]]}),t("0{5s}","jr",7,1,{trg:[[1,1,[[2.01,0,0]],[[7.01,0],[5.01,"ej",0],[3.01,0]]]]}),t("0{5t}","tj",7,1,{trg:[[1,0,[[1.06,0,"jump",5,3],[2.01,0,0]],[[7.02,3],[5.01,"gj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]}),t("0{5u}","dj",7,1,{trg:[[1,0,[[1.06,0,"jump",5,2],[2.01,0,0]],[[7.02,2],[5.01,"lj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]}),t("0{5v}","sj",7,1,{trg:[[1,0,[[1.06,0,"jump",5,1],[2.01,0,0]],[[7.02,1],[5.01,"lj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]}),t("0{5w}","ij",7,1,{trg:[[1,0,[[1.06,0,"jump",5,-1],[2.01,0,0]],[[7.02,-1],[5.01,"gj",0],[5.02,25,.05,.05,[0,0],[0,0],[0,0],[0,0]]]]]}),t("0{5x}","lg",3,1),t("0{5y}","hg",3,1),t("0{5z}","fs",3,1),t("0{60}","ss",3,1),t("0{61}","gu",6,1,{trg:[[1,0,[[2.01,0,0]],[[7.03,90]]]]}),t("0{62}","gd",6,1,{trg:[[1,0,[[2.01,0,0]],[[7.03,270]]]]}),t("0{63}","trg",7,1,{hd:1,trg:[[0,1,[[2.01,0,0]],[[3.03,0,0]]]]}),t("0{64}","btn",7,1,{trg:[[0,1,[[2.01,0,1]],[[3.03,0,0],[3.02,1]]]]}),t("0{65}","sw",7,1,{trg:[[0,1,[[2.01,0,0]],[[3.03,0,0],[3.02,1]]]]}),t("0{66}","bd",6,1,{txt:""}),t("0{67}","arr",6,0),t("0{68}","xa",7,1,{trg:[[2,0,[[2.01,0,0]],[[3.02,1]]],[2,0,[[2.02,0,0]],[[3.02,0]]]]}),t("0{69}","txt",10,0,{w:128,h:64,txt:"文本区域 Text Area",ftf:0,fts:16,ftt:0,fta:0,ftc:"#000",fsd:0,fsc:"#000",fst:0,fkc:"#000"}),t("0{6a}","tile",2,0),t("0{6b}","tree",1,0),t("0{6c}","cld",0,0),t("0{6d}","moon",0,0),t("0{6e}","star",0,0),t("0{6f}","grs",3,0),t("0{6g}","wt3",9,5),t("0{6h}","sbl",6,1,{al:0,trg:[[1,0,[[2.01,0,1]],[[1.05,[0,1],1],[1.05,[0,0],20]]]]}),t("0{6i}","cvr",7,1,{csp:3})],this.obj.for((t,s)=>t.ind=s)},bobj:{ply:{jump:2,sJump:1,g_:270,sGravDir:1,conShoot:0,adMove:0,life:1},gov:{txt1:"Game Over",ftf1:9,fts1:80,ftt1:1,fta1:1,ftc1:"#ffffff",fsd1:8,fsc1:"#000000",fst1:3,fkc1:"#000000",txt2:"--------------------------------\nPress R to Try Again",ftf2:9,fts2:28,ftt2:1,fta2:1,ftc2:"#ffffff",fsd2:0,fsc2:"#000000",fst2:2,fkc2:"#000000",al:0,tml:[[1,[[.01,20],[1.05,[0,1],30]]]]}},spr:{ply:{n:16,w:32,h:32,b:[12,11,11,21]},blt:{n:2,x:-1,y:-1,s:1,W:16,H:16},sp:{n:2,w:32,h:32},wp:{w:32,h:32,d:1,p:1},spk:{w:32,h:32,d:1,p:1},chr:{n:2,w:21,h:24,x:10,y:12,s:15,p:1},lsr:{n:2,x:-1,W:32,H:32},jr:{x:-1,y:-1,p:1,W:32,H:32},spr:{n:2,w:32,h:32,p:1},tp:{W:64,H:32},bd:{w:32,h:32},arr:{w:32,h:32},xa:{n:2,x:1,W:32,h:32},blk:{t:1},tile:{t:1},blkm:{w:16,h:16},pf:{w:32,H:32},bbl:{w:32,h:32},kbl:{w:32,h:32},ice:{w:32,H:32},wt1:{w:32,h:32,b:[0,0,32,32]},wt2:{w:32,h:32,b:[0,0,32,32]},wt3:{w:32,h:32,b:[0,0,32,32]},wt4:{w:32,h:32,b:[0,0,32,32]},twt:{w:32,h:32,b:[0,0,32,32]},lava:{w:32,h:32,d:1},wj:{w:32,h:32},sbl:{w:32,h:32},crt:{w:32,h:32},cvl:{w:32,H:32,d:1},cvr:{w:32,H:32,d:1},ld:{x:-1,W:32,h:32},rp:{n:2,x:-1,W:32,h:32},trg:{w:32,h:32,b:[0,0,32,32]},btn:{n:2,w:32,h:32},dbt:{n:2,w:32,h:32},sw:{n:2,x:-1,y:-1,W:32,H:32},swr:{n:2,w:32,h:32},mb:{x:-1,y:-1,W:64,H:64},tj:{w:32,h:32},dj:{w:32,h:32},sj:{w:32,h:32},ij:{w:32,h:32},lg:{w:32,h:32,d:1},hg:{w:32,h:32,d:1},fs:{w:32,h:32,d:1},ss:{w:32,h:32,d:1},gu:{w:32,h:32},gd:{w:32,h:32},tree:{p:1,W:320,H:320},cld:{W:320,H:320},moon:{p:1,x:-1,y:-1,W:320,H:320},star:{p:1,x:-1,y:-1,W:320,H:320},grs:{p:1,W:320,H:320},gp:{x:12,y:12}},thm:["1oZIHhXVJA","ah1R8UkWDi","PCptJrW5uw","1FiDO42HsD","zefE5PJTIU","PvdQ2ZtRjb","bUPQwPD0Fp","Aa4jvzXfAZ","YMncsAlRE0","Js7E0Pa7Hq","KVXF8n8DQU","mEDHuOyHS7","kjkgob1BRn","NnEXoRM7le","zRMc04OAWF","ZMIc6pETa4","BGeaFgPFjC","YqQvAzwGdH","eo2WBlpNjk","Irh1AqrDCr","Aw0AppT05P","7CWHnSZhXt","Jdoh21nJfi","bsnnzHrV9C","cThHx00Alo","Hm0dIVcC9B","wrEq1BGHWF","evtyCHjp9F","SPEi8uXbu0","lZQzerPKbK","ZaDAFhKBKU","MAsszUHnXq","WwXIzIbaOA","dFOYH6DDdo","AjsYWzE7n6","8SQdxlMxsZ","ZpwzvN0oWx","frV3im8ymP","GKqF86I8cP","aZbP6yFEHx","HEky35xbOK","JBes8Fy5aM","hGFHvw4yqy","1effklJCue","D7SUi5U9If","7EDa7DtuAM","S7vWDjyKU9","dYkdsJrsdg","2QVCdDpnMW","N0HoroQ8R5","KzuAaXMDvU","DfmYD5W0ae","ITbQR784IN","07OhIEjv1s",0,0,0,0,0,0,0,0,0],dynAct:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1.02,1.03,1.04,1.05,1.06,1.07,1.08,2.02,2.03,2.04,2.05,3.01,3.02],colAct:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,1.01,1.02,1.03,1.06,1.07,1.08,2.02,2.03,2.04,2.05],dmov:[(t,[,s,n,a,d])=>{t.toX=s[0]?s[1]:t.x+s[1],t.toY=n[0]?n[1]:t.y+n[1];let e=0===a[0]?a[1]:Math.srandom(a[1],a[2]),h=t.toX-t.x,r=t.toY-t.y,o=(h*h+r*r)**.5;return 0===d?(t.hsp=t.toHspd=h/o*e,t.vsp=t.toVspd=r/o*e):(t.toSmth=o/e,t.hsp=h/o*e,t.vsp=r/o*e),t.MOV[0]=Lib.mov[9+d],t.MOV[1]=null,!0},(t,[,s,n,a,d])=>{let e,h,r=0===a[0]?a[1]:Math.srandom(a[1],a[2]);if(n[0]<3){let a=(0===n[0]?n[1]:1===n[0]?Math.srandom(n[1],n[2]):t.ang+n[1])*Math.DR;e=s*Math.cos(a),h=-s*Math.sin(a)}else{let a=$R.plyX-t.x,d=$R.plyY-t.y,r=(a*a+d*d)**.5;e=s*a/r,h=s*d/r,3===n[0]&&(e=-e,h=-h)}return 0===d?(t.hsp=t.toHspd=e/s*r,t.vsp=t.toVspd=h/s*r):(t.toSmth=s/r,t.hsp=e/s*r,t.vsp=h/s*r),t.toX=t.x+e,t.toY=t.y+h,t.MOV[0]=Lib.mov[9+d],t.MOV[1]=null,!0},(t,[,s,n])=>(t.hspd=0===s[0]?s[1]:Math.srandom(s[1],s[2]),t.vspd=0===n[0]?n[1]:Math.srandom(n[1],n[2]),t.MOV[0]=Lib.mov[0],!0),(t,[,s,n])=>{let a=0===s[0]?s[1]:Math.srandom(s[1],s[2]);if(n[0]<3){let s=(0===n[0]?n[1]:1===n[0]?Math.srandom(n[1],n[2]):t.ang+n[1])*Math.DR;t.hspd=a*Math.cos(s),t.vspd=-a*Math.sin(s)}else{let s=$R.plyX-t.x,d=$R.plyY-t.y,e=(s*s+d*d)**.5;t.hspd=a*s/e,t.vspd=a*d/e,4===n[0]&&(t.hspd=-t.hspd,t.vspd=-t.vspd)}return t.MOV[0]=Lib.mov[0],!0},(t,[,s,n])=>{let a=n*Math.DR;return t.hacc=s*Math.cos(a),t.vacc=-s*Math.sin(a),t.hacc<1e-10&&(t.hacc=0),t.vacc<1e-10&&(t.vacc=0),void 0===t.hspd&&(t.hspd=t.vspd=0),t.MOV[0]=Lib.mov[0],t.MOV[1]=Lib.mov[1],!0},(t,[,s])=>(t.angAdd=s[1],t.MOV[2]=Lib.mov[2+s[0]],s[0]),(t,[,s])=>(t.angSpd=0===s[0]?s[1]:Math.srandom(s[1],s[2]),t.MOV[2]=Lib.mov[4],!0),(t,[,s,n,a])=>(t.angSin=0,t.angSinO=s,t.angSinA=n,t.angSinSpd=Math.PI2/a,t.MOV[2]=Lib.mov[5],!0),(t,[,s,n,a])=>(t.hSin=a*Math.DR,t.hSinA=s,t.hSinSpd=Math.PI2/n,void 0===t.addX&&(t.addX=s*Math.sin(t.hSin)),t.MOV[3]=Lib.mov[6],!0),(t,[,s,n,a])=>(t.vSin=a*Math.DR,t.vSinA=s,t.vSinSpd=Math.PI2/n,void 0===t.addY&&(t.addY=s*Math.sin(t.vSin)),t.MOV[4]=Lib.mov[7],!0),t=>{},(t,[,s])=>(t.gSpd=s,t.MOV[0]=Lib.mov[0],t.MOV[5]=Lib.mov[8],!0),(t,[,s,n,a,d])=>(t.syncX=s?n:void 0,t.syncY=a?d:void 0,t.MOV[0]=Lib.mov[14],t.MOV[1]=t.MOV[3]=t.MOV[4]=t.MOV[5]=null,!0),(t,[,s])=>(this.len||(t.$ago=s),!1),(t,[,s,n])=>(t.outInd=s+2,t.outObj=[],t.collision=n?t.bounce:t.out,!0)],mov:[t=>{t.$x=t.x+t.hspd,t.$y=t.y+t.vspd},t=>{t.hspd+=t.hacc,t.vspd+=t.vacc},t=>{t.$ang=t.dir+t.angAdd},t=>{let s=$R.plyX-t.x,n=-Math.atan(($R.plyY-t.y)/s)/Math.DR;t.$ang=(s<0?n+180:n)+t.angAdd},t=>{let s=t.ang+t.angSpd;s>360?s-=360:s<0&&(s+=360),t.$ang=s},t=>{t.$ang=t.gag+t.angSinO+t.angSinA*Math.sin(t.angSin),t.angSin+=t.angSinSpd,t.angSin>Math.PI2&&(t.angSin-=Math.PI2)},t=>{t.x-=t.addX,t.addX=t.hSinA*Math.sin(t.hSin),t.hSin+=t.hSinSpd,t.$x=t.x+t.addX},t=>{t.y-=t.addY,t.addY=t.vSinA*Math.sin(t.vSin),t.vSin+=t.vSinSpd,t.$y=t.y+t.addY},t=>{let s=$R.plyX-t.x,n=$R.plyY-t.y,a=(s*s+n*n)**.5;t.hspd=s/a*t.gSpd,t.vspd=n/a*t.gSpd},t=>{t.$x=t.x+t.toHspd,t.$y=t.y+t.toVspd;let s=t.toHspd<0?t.toX-t.x>t.toHspd:t.toX-t.x<t.toHspd||!t.toHspd,n=t.toVspd<0?t.toY-t.y>t.toVspd:t.toY-t.y<t.toVspd||!t.toVspd;if(s&&n)return t.$x=t.toX+(t.addX??0),t.$y=t.toY+(t.addY??0),!0},t=>{if(t.$x=t.x+(t.toX-t.x)/t.toSmth,t.$y=t.y+(t.toY-t.y)/t.toSmth,Math.abs(t.x-t.toX)<1&&Math.abs(t.y-t.toY)<1)return t.$x=t.toX+(t.addX??0),t.$y=t.toY+(t.addY??0),!0},t=>{let s=t.scx/t.gscx+t.toScxSpd,n=t.scy/t.gscy+t.toScySpd,a=t.toScxSpd<0?t.toScx-s>t.toScxSpd:t.toScx-s<t.toScxSpd||!t.toScxSpd,d=t.toScySpd<0?t.toScy-n>t.toScySpd:t.toScy-n<t.toScySpd||!t.toScySpd;if(a&&d)return t.$scx=t.toScx*t.gscx,t.$scy=t.toScy*t.gscy,!0;t.$scx=s*t.gscx,t.$scy=n*t.gscy},t=>{if(t.$ang=t.ang+t.toAngSpd,t.toAngSpd<0?t.toAng-t.ang+t.gag>t.toAngSpd:t.toAng-t.ang+t.gag<t.toAngSpd)return t.$ang=t.toAng+t.gag,!0},t=>{if(t.al+=t.toAlSpd,t.ctx.clr=!1,t.toAlSpd<0?t.toAl-t.al>t.toAlSpd:t.toAl-t.al<t.toAlSpd)return t.al=t.toAl,!0},t=>{void 0!==t.syncX&&(t.$x=$R.plyX+t.syncX),void 0!==t.syncY&&(t.$y=$R.plyY+t.syncY)},t=>{if(t.len+=t.toLenSpd,t.ctx.clr=!1,t.calc=!1,t.moved=!0,t.toLenSpd<0?t.toLen-t.len>t.toLenSpd:t.toLen-t.len<t.toLenSpd)return t.len=t.toLen,t.h=t.scy*t.len,!0;t.h=t.scy*t.len}],act:[[(t,[,s],n)=>{n.time=s[0]?t.tmlB*s[1]:s[1]??50},(t,s,n)=>{s.ct<s[2]?(n.node=s[1],s.ct++):s.ct=0}],[(t,[,s])=>{s?(0===t.cm&&$R.Col[t.obj+5].add(t),t.cm!==s&&(t.cm>1&&t.clearCol(1),s>1&&$R.Col[s].add(t))):(t.clearCol(0),t.clearCol(1)),t.cm=s},(t,[,s,n,a])=>{t.scx/=t.gscx,t.scy/=t.gscy;let d=s[0]?t.scx+s[1]:s[1],e=n[0]?t.scy+n[1]:n[1];1===a?(t.$scx=d*t.gscx,t.$scy=e*t.gscy):(t.toScx=d,t.toScy=e,t.toScxSpd=(d-t.scx)/a,t.toScySpd=(e-t.scy)/a,t.MOV[6]=Lib.mov[11],t.scx*=t.gscx,t.scy*=t.gscy)},(t,[,s,n])=>{t.ang-=t.gag;let a=s[0]?t.ang+s[1]:s[1];a!==t.ang&&(1===n?t.$ang=a:(t.toAng=a,t.toAngSpd=(a-t.ang)/n,t.MOV[2]=Lib.mov[12])),t.ang+=t.gag},(t,[,s])=>{t.hd=2===s?1^t.hd:s,t.ctx.clr=!1},(t,[,s,n])=>{let a=s[0]?t.al+s[1]:s[1];a>1?a=1:a<0&&(a=0),a!==t.al&&(1===n?(t.al=a,t.ctx.clr=!1):(t.toAl=a,t.toAlSpd=(a-t.al)/n,t.MOV[7]=Lib.mov[13]))},(t,[,s,n])=>{let a=s[0]?t.len+s[1]:s[1];a>800?a=800:a<32&&(a=32),a!==t.len&&(1===n?(t.len=a,t.h=t.scy*a,t.ctx.clr=!1,t.calc=!1,t.moved=!0):(t.toLen=a,t.toLenSpd=(a-t.len)/n,t.MOV[8]=Lib.mov[15]))},(t,[,s])=>{let n=2===s?!t.lso:!!s;t.lso!==n&&(t.lso=n,t.h=n?t.scy*t.len:0,t.ctx.clr=!1,t.calc=!1,t.moved=!0)},(t,[,s])=>{let n=2===s?!t.lst:!!s;t.lst!==n&&(t.lst=n,t.h=t.lso?t.scy*t.len:0,t.ctx.clr=!1,t.calc=!1,t.moved=!0)}],[t=>{t.MOV.length=0,t.hspd=0,t.vspd=0},(t,[,s])=>{switch(s[0]){case 0:t.spd=s[1];break;case 1:t.spd=Math.srandom(s[1],s[2]);break;case 2:t.spd=(t.spd||0)+s[1];break;case 3:t.spd=(t.spd||0)*s[1]}t.hsp=t.hspd,t.vsp=t.vspd,t.MOV[0]=Lib.mov[0]},(t,[,s])=>{switch(s[0]){case 0:t.hspd=s[1];break;case 1:t.hspd=Math.srandom(s[1],s[2]);break;case 2:t.hspd=(t.hspd||0)+s[1];break;case 3:t.hspd=(t.hspd||0)*s[1]}t.hsp=t.hspd,t.vspd||(t.vspd=0),t.MOV[0]=Lib.mov[0]},(t,[,s])=>{switch(s[0]){case 0:t.vspd=s[1];break;case 1:t.vspd=Math.srandom(s[1],s[2]);break;case 2:t.vspd=(t.vspd||0)+s[1];break;case 3:t.vspd=(t.vspd||0)*s[1]}t.vsp=t.vspd,t.hspd||(t.hspd=0),t.MOV[0]=Lib.mov[0]},(t,[,s])=>{switch(s[0]){case 0:t.dir=s[1];break;case 1:t.dir=Math.srandom(s[1],s[2]);break;case 2:case 3:let n=t.spd;if(!n)break;let a=$R.plyX-t.x,d=$R.plyY-t.y,e=(a*a+d*d)**.5;t.hspd=a/e*n,t.vspd=d/e*n,3===s[0]&&(t.hspd=-t.hspd,t.vspd=-t.vspd);break;case 4:t.dir+=s[1]}}],[(t,[,s])=>{if(s&&10!==t.obj){let n=Core.S.from(t);n&&(1===s&&(n.aspd=.05,n.hspd=Math.randomr(-2,2),n.vspd=Math.randomr(-2,0),n.grav=.2),n.init())}t.destroy(),10===t.obj&&t.cds&&t.grpO.for(t=>Lib.act[3][0](t,[0,s]))},(t,[,s])=>{if(2===t.spr[0].length){let n=2===s?1^t.ind:s;n!==t.ind&&(t.ind=n,t.ctx.clr=!1)}},(t,[,s,n])=>{let a=$R.trg;switch(n){case 0:a[s]=1;break;case 1:a[s]=a[s]&&3!==a[s]?3:0;break;case 2:a[s]=a[s]&&3!==a[s]?3:1}},(t,[,s,n])=>{if("0"===s[0]){let t=s.slice(1);$R.VAR[t]=n[0]?$R.VAR[t]+n[1]:n[1]}else{let a=s.charCodeAt(0)-97;t.VAR[a]=n[0]?t.VAR[a]+n[1]:n[1]}},(t,[,s])=>{switch(s){case 1:$R.loadGame();break;case 0:$R.newGame()}},(t,[,s,n])=>$R.warp(s,n),(t,[,s])=>{switch(s){case 0:$R._r.bgm.m>1&&$R.bgm.play();break;case 1:$R.bgm.pause();break;case 2:$R.bgm.stop()}}],[(t,[,s])=>t.TML[s].run=1,(t,[,s])=>t.TML[s].run=0,(t,[,s])=>{let n=t.TML[s];n.run=0,n.time=0,n.node=0},(t,[,s])=>t.tmlB=s,(t,[,s])=>t.trigger(t.trgMap[s])],[(t,[,s,n])=>Au.play(s,2**(n/12)),(t,[,s,n,a,d,e,h,r])=>{let o=Core.S.from(t);o&&(o.aspd=1/s,o.xspd=n,o.yspd=a,o.hspd=d[0]?Math.randomr(d[1],d[2]):d[1],o.vspd=e[0]?Math.randomr(e[1],e[2]):e[1],o.grav=h[0]?Math.randomr(h[1],h[2]):h[1],o.rot=r[0]?Math.randomr(r[1],r[2]):r[1],o.init())}],[],[(t,[,s])=>{let n=$R.$;if(n){if(-1===n.jump)return;let t=n.djump+1;n.djump=s?t:Math.min(t,n.jump)}},(t,[,s])=>{let n=$R.$;if(n){let t=n.jump;-1===s?n.djump=n.jump=-1:(n.jump=s,-1===t?n.djump=s:(n.djump+=s-t,n.djump<1&&(n.djump=1)))}},(t,[,s])=>{let n=$R.$;n&&n.setGrav(s)},(t,[,s,n])=>{let a=$R.$;if(!a)return;let d,e,h=0===s[0]?s[1]:Math.srandom(s[1],s[2]);if(n[0]<3){let s=(0===n[0]?n[1]:1===n[0]?Math.srandom(n[1],n[2]):t.ang+n[1])*Math.DR;d=h*Math.cos(s),e=-h*Math.sin(s)}else{let s=$R.plyX-t.x,a=$R.plyY-t.y,r=(s*s+a*a)**.5;d=h*s/r,e=h*a/r,3===n[0]&&(d=-d,e=-e)}a.applyMove(d,e)}]],trg:[[(t,[,,s,n])=>n?3===$R.trg[s]:1===$R.trg[s],(t,[,,s,n,a])=>Math.comp(s?t.y:t.x,a,n),(t,[,,s])=>t.hd===s,(t,[,,s,n,a])=>Math.comp(t[s]??0,a,n),(t,[,,s,n,a])=>{let d=$R.$;return d&&Math.comp(s?d.y:d.x,a,n)},(t,[,,s,n,a])=>$R.$&&Math.comp($R.$[s],a,n),(t,[,,s,n,a])=>"0"===s[0]?Math.comp($R.VAR[s.slice(1)]??0,a,n):Math.comp(t.VAR[s.charCodeAt(0)-97],a,n),(t,[,,s,n,a])=>Math.comp($R[s]??0,a,n)],[(t,[,,s])=>1===t.updCol(s),(t,[,,s])=>3===t.updCol(s)],[(t,[,,s])=>$C.P(s),(t,[,,s])=>$C.R(s),(t,[,,s])=>$C.C(s),(t,[,,s])=>$C.P(s?"mr":"ml"),(t,[,,s])=>$C.R(s?"mr":"ml"),(t,[,,s])=>$C.C(s?"mr":"ml")]],def:[[1,function(){let t=this.spr[0],s=this.ind<<0;this.ind+=1/t.ims,this.ind>=t.length&&(this.ind-=t.length),s!==this.ind<<0&&(this.ctx.clr=!1)}],[1,function(){this.ind>=1?this.ind-=.0078125:0!==this.ind&&(this.ind=0,this.ctx.clr=!1)}],[0,()=>{}],[2,function(){if(this.lso&&!this.lst){let t=this.h;this._h=this.len,this.h=this.scy*this._h,this.calc=!1;let s=this.meetAll(0,0,2);if(s.length){let n=this.ang*Math.DR,a=Math.sin(n),d=Math.cos(n),e=this.h*a,h=this.h*d,r=this.x,o=this.y,p=1;for(let t=s.length;t--;){let n=s[t].V;for(let t=0;t<8;t+=6)for(let s=2;s<6;s+=2){let l=n[s]-n[t],c=n[s+1]-n[t+1],i=e*c-h*l,g=n[t]-r,m=n[t+1]-o;if(i){let t=(g*c-m*l)/i,s=(g*h-m*e)/i;t>=0&&t<1&&s>=0&&s<=1&&t<p&&(p=t)}else{let t=a*g+d*m,e=a*(n[s]-r)+d*(n[s+1]-o),h=(t<e?t:e)/this.h;h<p&&(p=h>0?h:0)}}}this.h=p*this.h+.5<<0,this._h=this.h/this.scy,this.calc=!1,this.h!==t&&(this.ctx.clr=!1,this.moved=!0)}}}],[2,function(){this.hspd=0;let t=this.meet(0,1,56);t?this.hspd=t.csp:(t=this.meet(0,1,25),t&&(this.hspd=-t.csp))}]]};Lib.init();