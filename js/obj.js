_C.O=class{constructor(t,s){this.x=t,this.y=s,this.scx=1,this.scy=1,this.ang=0,this.ind=0,this.h_=0,this.v_=0,this.V=[0,0,0,0,0,0,0,0],this.B=[0,0,0,0],this.BV=[0,1,6,7],this.calc=!1,this.moved=!1,this._des=!1,this.colS=[],this.colO=[],this.test=0}set $x(t){t!==this.x&&(this.x=t,this.$d(),this.calc=!1,this.moved=!0)}set $y(t){t!==this.y&&(this.y=t,this.$d(),this.calc=!1,this.moved=!0)}set $scx(t){t!==this.scx&&(this.scx=t,this.w=t*this._w,1!==t&&(this.dSpr=this.ang?_C.dSprEx:_C.dSprSc),this.$d(),this.calc=!1,this.moved=!0)}set $scy(t){t!==this.scy&&(this.scy=t,this.h=t*this._h,1!==t&&(this.dSpr=this.ang?_C.dSprEx:_C.dSprSc),this.$d(),this.calc=!1,this.moved=!0)}set $ang(t){t!==this.ang&&(this.ang=t,this.dSpr=t?1===this.scx&&1===this.scy?_C.dSprAng:_C.dSprEx:1===this.scx&&1===this.scy?_C.dSprN:_C.dSprSc,this.$d(),this.calc=!1,this.moved=!0)}initOxy(){if(this.a){let t=this.a-1,s=this.spr[0];this.sprX=1&t?s.w>>1:2&t?s.w:0,this.sprY=4&t?s.h>>1:8&t?s.h:0,this.boxL=this.sprX-s.bL,this.boxT=this.sprY-s.bT}}moveOxy(t){let s,h;t?(s=1&--t?this.spr[0].w>>1:2&t?this.spr[0].w:0,h=4&t?this.spr[0].h>>1:8&t?this.spr[0].h:0):(s=this.spr[0].x,h=this.spr[0].y),_C.moveOxy(this,s,h),this.boxL=this.sprX-this.spr[0].bL,this.boxT=this.sprY-this.spr[0].bT}get spd(){return(this.h_**2+this.v_**2)**.5}set spd(t){let s=this.spd;if(s){let h=t/s;this.h_*=h,this.v_*=h}else this.h_=t,this.v_=0}get dir(){let t=-Math.atan(this.v_/this.h_)/Math.DR;return this.h_<0?t+180:t}set dir(t){let s=this.spd;s&&(t*=Math.DR,this.h_=s*Math.cos(t),this.v_=-s*Math.sin(t))}calcBox(){this.calc||(this.calc=!0,_C.calcBox(this,this.w,this.h,this.boxL,this.boxT,this.V,this.B,this.BV))}moveB(t,s){this.x+=t,this.y+=s;let h=this.V;for(let i=0;i<8;i++)h[i]+=1&i?s:t;this.B[0]=Math.round(h[this.BV[0]]),this.B[1]=Math.round(h[this.BV[1]]),this.B[2]=Math.round(h[this.BV[2]]),this.B[3]=Math.round(h[this.BV[3]])}#t(t,s,h,i,e,r=0,o=0){let a=e.spr[0],p=e.ang*Math.DR,l=Math.cos(p),n=Math.sin(p),d=e.scx,c=e.scy,u=e.sprX,m=e.sprY,x=-e.x-r+.5,y=-e.y-o+.5,v=a.mask[e.ind<<0],b=e._w,g=e._h,f=a.bL,B=a.bT;for(let e=s;e<i;e++)for(let s=t;s<h;s++){let t=(l*(s+x)-n*(e+y))/d+u-f<<0;if(t<0||t>=b)continue;let h=(n*(s+x)+l*(e+y))/c+m-B<<0;if(!(h<0||h>=g)&&v[h*b+t])return!0}}_meet(t,s,h,i,e,r,o){if(this.px||o.px){let a=Math.max(h,o.B[0]),p=Math.max(i,o.B[1]),l=Math.min(e,o.B[2]),n=Math.min(r,o.B[3]);if(this.px||this.ang%90!=0){if(o.px||o.ang%90!=0){let h=this.spr[0],i=this.ang*Math.DR,e=Math.cos(i),r=Math.sin(i),d=this.scx,c=this.scy,u=this.sprX,m=this.sprY,x=-this.x-t+.5,y=-this.y-s+.5,v=h.mask[this.ind<<0],b=this._w,g=this._h,f=h.bL,B=h.bT,M=1-this.px,R=o.spr[0],w=o.ang*Math.DR,j=Math.cos(w),S=Math.sin(w),k=o.scx,C=o.scy,O=o.sprX,V=o.sprY,L=.5-o.x,_=.5-o.y,D=R.mask[o.ind<<0],A=o._w,T=o._h,P=R.bL,X=R.bT,I=1-o.px;for(let t=p;t<n;t++)for(let s=a;s<l;s++){let h=(e*(s+x)-r*(t+y))/d+u-f<<0;if(h<0||h>=b)continue;let i=(r*(s+x)+e*(t+y))/c+m-B<<0;if(i<0||i>=g)continue;let o=(j*(s+L)-S*(t+_))/k+O-P<<0;if(o<0||o>=A)continue;let a=(S*(s+L)+j*(t+_))/C+V-X<<0;if(!(a<0||a>=T)&&(M|v[i*b+h])&(I|D[a*A+o]))return!0}return!1}return this.#t(a,p,l,n,this,t,s)}return this.#t(a,p,l,n,o)}if(this.ang%90||o.ang%90){let h=[],i=o.V;for(let i=0;i<8;)h[i]=this.V[i]+t,h[++i]=this.V[i++]+s;for(let t=0;t<2;t++){for(let t=2;t<6;t+=2){let s=h[t]-h[0],e=h[t+1]-h[1],r=s*(i[0]-h[0])+e*(i[1]-h[1]),o=r;for(let t=2;t<8;t+=2){let a=s*(i[t]-h[0])+e*(i[t+1]-h[1]);a<r?r=a:a>o&&(o=a)}if(o<=0||r>=s*s+e*e)return!1}i=h,h=o.V}return!0}return!0}meet(t,s,h){return this.calcBox(),$R.Col[h].meet(this,t,s,Math.round(this.V[this.BV[0]]+t),Math.round(this.V[this.BV[1]]+s),Math.round(this.V[this.BV[2]]+t),Math.round(this.V[this.BV[3]]+s))}meetAll(t,s,h){this.calcBox();let i=Math.round(this.V[this.BV[0]]+t),e=Math.round(this.V[this.BV[1]]+s),r=Math.round(this.V[this.BV[2]]+t),o=Math.round(this.V[this.BV[3]]+s),a=$R.Col[h].findAll(i,e,r,o),p=[];for(let h=a.length;h--;)a[h]!==this&&this._meet(t,s,i,e,r,o,a[h])&&p.push(a[h]);return p}meetO(t,s,h,i,e,r,o){return!!(e>o.B[0]&&r>o.B[1]&&h<o.B[2]&&i<o.B[3]&&this._meet(t,s,h,i,e,r,o))}meetObj(t,s,h){let i=Math.round(this.V[this.BV[0]]+t),e=Math.round(this.V[this.BV[1]]+s),r=Math.round(this.V[this.BV[2]]+t),o=Math.round(this.V[this.BV[3]]+s);for(let a=h.length;a--;)if(this.meetO(t,s,i,e,r,o,h[a]))return!0;return!1}colDir(t,s,h,i,e=0){let r=0,o=0,a=[...t];for(let t=a.length;t--;){let s=a[t];if(s.cm&&(this.updCol(s.obj+5,s),s.cm>1&&this.updCol(s.cm,s)),e&&(s.outInd===this.cm||s.outInd===this.obj+5)&&4!==s.test){a.splice(t,1);continue}let h=this.hsp-s.hsp,i=this.vsp-s.vsp;h<0?r=Math.min(r,h):h>0&&(r=Math.max(r,h)),i<0?o=Math.min(o,i):i>0&&(o=Math.max(o,i))}(r||o)&&a.length&&(e&&(r>0?r+=1:r<0&&(r-=1),o>0?o+=1:o<0&&(o-=1)),this.moveB(-r,-o),r&&this.meetObj(r,0,a)&&(r=s(r,a)),o&&this.meetObj(0,o,a)&&(o=h(o,a)),(r||o)&&this.meetObj(r,o,a)&&([r,o]=i(r,o)),(r||o)&&this.moveB(r,o))}updCol(t,s){let h=this;if(2===h.colS[t]){let i=h.colO[t];if(h.moved||i.moved){s||(s=h.meet(0,0,t));let e=h.obj+5,r=h.cm;s?s!==i&&(h.colO[t]=s,r&&(i.colS[e]=3,i.colO[e]=null,s.colO[e]=h,s.colS[e]&&3!==s.colS[e]||(s.colS[e]=1),r>1&&(i.colS[r]=3,i.colO[r]=null,s.colO[r]=h,s.colS[r]&&3!==s.colS[r]||(s.colS[r]=1)))):(h.colS[t]=3,h.colO[t]=null,r&&(i.colS[e]=3,i.colO[e]=null,r>1&&(i.colS[r]=3,i.colO[r]=null)))}}else if(!h.colS[t]){s||(s=h.meet(0,0,t));let i=h.obj+5,e=h.cm;s&&(h.colS[t]=1,h.colO[t]=s,e&&(s.colO[i]=h,s.colS[i]&&3!==s.colS[i]||(s.colS[i]=1),e>1&&(s.colO[e]=h,s.colS[e]&&3!==s.colS[e]||(s.colS[e]=1))))}return h.colS[t]}resetCol(){let t=this.colS;for(let s=t.length;s--;)1===t[s]?t[s]=2:3===t[s]&&(t[s]=0);this.test=0}},_C.R=class extends _C.O{constructor(t,s,h,i,e){super(s,h),this.xp=s,this.yp=h,this.obj=t,this.dep=i,this.ly=$R.L[i],this.ctx=this.ly.sta,this.oid=this.ly.push(this),10===t?(this.calcBox=this.calcBoxG,this.activate=this.actvGrp,this.move=this.#s,this.draw=this.#h,this.$d=this.#h):(this.activate=this.actv,this.spr=e,this._w=e[0].boxW,this._h=e[0].boxH,this.move=this.#h,this.draw=this.dNormal,this.dSpr=_C.dSprN,this.sprX=e[0].x,this.sprY=e[0].y,this.boxL=this.sprX-e[0].bL,this.boxT=this.sprY-e[0].bT,this.colP=[null,null],this.colId=[0,0]),this.al=1,this.hd=0,this.hsp=0,this.vsp=0,this.DEF=[],this.MOV=[],this.TML=[],this.tmlB=50,this.TRG=[[],[],[],[]],this.trgMap=[],this.VAR=[0,0,0,0],this.step0=this.timer=this.step1=this.step2=this.collision=this.resetStatus=this.#h,this.gscy=this.gscx=1,this.gag=0}init(t=!1){let s=!1,h=!1,i=!1;if(this.mov&&this.mov.for(s=>{Lib.dmov[s[0]](this,s)&&(h=t=!0)}),this.tml&&(this.tml.for(i=>{let e=i[1];this.TML.push(e),e.run=i[0],e.time=0,e.node=0,e.for(i=>{Lib.dynAct.includes(i[0])&&(t=!0),Lib.colAct.includes(i[0])?h=!0:1.05===i[0]&&(s=!0),.02===i[0]&&(i.ct=0,0===i[2]&&(i[2]=Infinity)),i.f=i[0]===i[0]<<0?Lib.dmov[i[0]]:Lib.act[i[0]<<0][Math.round(100*i[0]%100-1)]})}),this.timer=this.#i),this.trg?.for(e=>{let r=[e[1]||Infinity,[1],e[2],e[3]],o=0;switch(this.TRG[e[0]].push(r),this.trgMap.push(r),r.ex=0,e[0]){case 0:this.step0=this.#e;break;case 1:this.step1=this.#r;break;case 2:this.step2=this.#o}e[2].for(t=>{2.01===t[0]&&(i=!0),t.f=Lib.trg[(t[0]<<0)-1][Math.round(100*t[0]%100-1)],t[1]?r[1][++o]=1:r[1][o]++}),e[3].for(i=>{Lib.dynAct.includes(i[0])&&(t=!0),Lib.colAct.includes(i[0])?h=!0:1.05===i[0]&&(s=!0),i.f=i[0]===i[0]<<0?Lib.dmov[i[0]]:Lib.act[i[0]<<0][Math.round(100*i[0]%100-1)]}),0==--r[1][r[1].length-1]&&r[1].splice(-1)}),this.def){let t=Lib.def[this.def];this.DEF.push(t[1].bind(this)),2===t[0]?h=!0:1===t[0]&&(s=!0)}if(10!==this.obj){if(this.tile)switch(this.spr[0].length){case 1:this.tile=!1;break;case 2:this.tile=[(this.tb>7)<<0],this.draw=this.dTile;break;case 4:this.tile=[this.tc?0:(3==(3&this.tb))+((12==(12&this.tb))<<1)],this.draw=this.dTile;break;case 20:this.tile=[this.tb];for(let t=0;t<4;t++)this.tc&1<<t&&this.tile.push(16+t);this.draw=this.dTile}else this.spr[0].length>1&&(t=!0);switch(this.w=this.scx*this._w,this.obj){case 11:this.draw=this.dLaser,this._h=this.lso?this.len:0;break;case 22:this.draw=this.dRope,this._h=this.len}switch(this.h=this.scy*this._h,this.initOxy(),this.calcBox(),(1===this.scx&&1===this.scy)<<1|!this.ang){case 0:this.dSpr=_C.dSprEx;break;case 1:this.dSpr=_C.dSprSc;break;case 2:this.dSpr=_C.dSprAng}this.px=this.spr[0].px,this.spr[0].ims&&(this.DEF.push(Lib.def[0][1].bind(this)),s=!0),this.colMov=h,this.cm&&($R.Col[this.obj+5].add(this),this.cm>1&&$R.Col[this.cm].add(this),this.resetStatus=this.resetCol),i&&(this.resetStatus=this.resetCol),h?this.move=this.#a:s&&(this.move=this.#s),t&&(this.ctx=this.ly.dyn),this.moved=!1}else this.gpi||this.updGrp(1)}calcBoxG(){this.calc||(this.calc=!0,this.B[0]=Math.round(this.x),this.B[1]=Math.round(this.y),this.B[2]=this.B[0],this.B[3]=this.B[1])}actv(t,s,h,i){(this.B[0]<h&&this.B[1]<i&&this.B[2]>t&&this.B[3]>s||11===this.dep)&&this.ly.add(this)}actvGrp(t,s,h,i){(this.B[0]<h&&this.B[1]<i&&this.B[2]>t&&this.B[3]>s||this.grpO.some(e=>e.B[0]<h&&e.B[1]<i&&e.B[2]>t&&e.B[3]>s||11===e.dep))&&(this.ly.add(this),this.grpO.for(e=>{e.B[0]<h&&e.B[1]<i&&e.B[2]>t&&e.B[3]>s||11===e.dep||e.ly.add(e)}))}$d(){this.ctx.upd=!0}destroy(){this._des=!0,this.$d(),this.cm&&(this.clearCol(0),this.clearCol(1)),10===this.obj&&this.grpO.for(t=>t.gpi="")}clearCol(t){let s=this.colP[t];if(s){let h=this.colId[t];for(s.splice(h,1);h<s.length;h++)s[h].colId[t]=h;let i=s?this.cm:this.obj+5;this.colO.for(t=>{t&&(t.colS[i]=3,t.colO[i]=null)})}}get sp(){return(this.hsp**2+this.vsp**2)**.5}get di(){let t=-Math.atan(this.vsp/this.hsp)/Math.DR;return this.hsp<0?t+180:t}outSld(){this.colDir(this.outObj,(t,s)=>{for(let h=Math.sign(t),i=Math.abs(t),e=0;e<i&&!this.meetObj(h,0,s);e++)this.moveB(h,0);return this.h_=0},(t,s)=>{for(let h=Math.sign(t),i=Math.abs(t),e=0;e<i&&!this.meetObj(0,h,s);e++)this.moveB(0,h);return this.v_=0},(t,s)=>(this.v_=0,[t,Math.sign(s)]),1);let t=this.x-this.xp,s=this.y-this.yp;this.hsp+=t,this.vsp+=s,this.xp=this.x,this.yp=this.y,this.test=4,(t||s)&&(this.moved=!0,this.$d(),this.outObj=this.meetAll(0,0,this.outInd));for(let t=this.outObj.length;t--;){let s=this.outObj[t];(s.outInd===this.cm||s.outInd===this.obj+5)&&s.test<3&&(s.test||$R.outStk.push(s),s.outObj.includes(this)||s.outObj.push(this),s.test=2)}}out(){if(this.gpi)return;let t=0===this.outObj.length||this.moved;if(!t)for(let s=this.outObj.length;s--;)if(this.outObj[s].moved){t=!0;break}if(t&&(this.outObj=this.meetAll(0,0,this.outInd),this.outObj.length)){this.test=1;for(let t=this.outObj.length;t--;){let s=this.outObj[t];if(s.outInd!==this.cm&&s.outInd!==this.obj+5)return this.test=3,void $R.outStk.unshift(this)}$R.outStk.push(this)}}bounce(){if(this.gpi)return;let t=0===this.outObj.length||this.moved;if(!t)for(let s=this.outObj.length;s--;)if(this.outObj[s].moved){t=!0;break}if(t&&(this.outObj=this.meetAll(0,0,this.outInd),this.outObj.length)){this.colDir(this.outObj,t=>(this.h_=-t,0),t=>(this.v_=-t,0),(t,s)=>(t&&(this.h_=-t),s&&(this.v_=-s),[0,0]));let t=this.x-this.xp,s=this.y-this.yp;(t||s)&&(this.moved=!0,this.$d()),this.hsp+=t,this.vsp+=s,this.xp=this.x,this.yp=this.y}}updGrp(t=0){for(let s=this.grpO.length;s--;){let h=this.grpO[s];if(h._des){this.grpO.splice(s,1);continue}let i=this._gp[h._gn];this.csc&&(h.scx/=h.gscx,h.gscx=this.scx,h.$scx=h.scx*h.gscx,h.scy/=h.gscy,h.gscy=this.scy,h.$scy=h.scy*h.gscy),this.cag&&(h.ang-=h.gag,h.gag=this.ang,h.$ang=h.ang+h.gag);let e=(i.x+h.grpX)*this.scx,r=(i.y+h.grpY)*this.scy;if(this.ang){let t=this.ang*Math.DR,s=Math.cos(t),h=Math.sin(t),i=-e*h+r*s;e=e*s+r*h,r=i}h.$x=this.x+e,h.$y=this.y+r,h.hsp=h.x-h.xp,h.vsp=h.y-h.yp,h.xp=h.x,h.yp=h.y,10===h.obj&&h.updGrp(t)}}#h(){}trigger(t){if(t[0]&&!t.ex){t.ex=1;let s=0;for(let h=0;h<t[1].length;++h){let i=t[1][h],e=1;for(let h=0;h<i;h++){let i=t[2][s+h];if(!i.f(this,i)){e=0;break}}if(e){--t[0],t[3].for(t=>t.f(this,t));break}s+=i}t.ex=0}}#i(){this.TML.for(t=>{if(t.run){for(;t.run&&0===t.time;){let s=t[t.node++];if(!s){t.run=0,t.time=0,t.node=0;break}s.f(this,s,t)}t.run&&t.time>0&&t.time--}})}#s(){for(let t=this.MOV.length;t--;)this.MOV[t]&&this.MOV[t](this)&&(this.MOV[t]=null);this.DEF.for(t=>t())}#a(){this.moved=!1,this.#s(),this.hsp=this.x-this.xp,this.vsp=this.y-this.yp,this.xp=this.x,this.yp=this.y}#e(){this.TRG[0].for(t=>this.trigger(t))}#r(){this.TRG[1].for(t=>this.trigger(t))}#o(){this.TRG[2].for(t=>this.trigger(t))}dNormal(){this.hd||0===this.al||(this.al<1&&(this.ctx.globalAlpha=this.al),this.spr.for(t=>this.dSpr(this.ctx,t,this.ind<<0)),this.al<1&&(this.ctx.globalAlpha=1),this.ctx.draw=!0)}dTile(){if(!this.hd&&0!==this.al){this.al<1&&(this.ctx.globalAlpha=this.al),this.tile.for(t=>this.dSpr(this.ctx,this.spr[0],t));for(let t=1;t<this.spr.length;t++)this.dSpr(this.ctx,this.spr[t],this.ind<<0);this.al<1&&(this.ctx.globalAlpha=1),this.ctx.draw=!0}}dRope(){if(this.hd||0===this.al)return;this.al<1&&(this.ctx.globalAlpha=this.al),this.ctx.reset&&this.ctx.resetC();let t=this.spr[0];if(this.ctx.translate(this.x,this.y),this.ang&&this.ctx.rotate(-this.ang*Math.DR),this.ctx.scale(this.scx,this.scy),this.len<t.h)this.ctx.drawImage(t[1],0,t.h-this.len,t.w,this.len,-this.sprX,0,t.w,this.len);else{let s=this.len-t.h;for(this.ctx.drawImage(t[1],-this.sprX,s);s>0;s-=32)s>=32?this.ctx.drawImage(t[0],0,0,t.w,32,-this.sprX,s-32,t.w,32):this.ctx.drawImage(t[0],0,32-s,t.w,s,-this.sprX,0,t.w,s)}this.ctx.reset=!0,this.al<1&&(this.ctx.globalAlpha=1),this.ctx.draw=!0}dLaser(){if(this.hd&&!this.lso||0===this.al)return;this.al<1&&(this.ctx.globalAlpha=this.al),this.ctx.reset&&this.ctx.resetC();let t=this.spr[0];this.ctx.translate(this.x,this.y),this.ang&&this.ctx.rotate(-this.ang*Math.DR),this.ctx.scale(this.scx,this.scy),this.lso&&this.ctx.drawImage(t[1],-this.sprX,0,t.w,this.h/this.scy),this.hd||this.ctx.drawImage(t[0],-this.sprX,0),this.ctx.reset=!0,this.al<1&&(this.ctx.globalAlpha=1),this.ctx.draw=!0}},_C.Y=class extends _C.O{#p;constructor(t,s){super(t,s),$R.plyX=t,$R.plyY=s,this.#p=1,this.pSpr=this.spr=$R._r.Spr.pli,this.ims=.2,this.px=0,this.ctx=$R.L[7].dyn,this.ctx.upd=!0,this.ox=17,this.oy=23,this.moveSpd=3,this.maxVspd=9,this.jump1=-8.5,this.jump2=-7,this.grav=.4,this.fric=.5,this.ahspd=0,this.phspd=0,this.pvspd=0,this.onPlat=!1,this.onLadder=!1,this.onRope=null,this.meetRope=null,this.shoot=0,this.frozen=!1,$R.initPly(this),this.djump=this.jump,this.resetStatus=this.resetCol,this.clacLTRB(),this.calcBox()}calcBox(){this.V[0]=this.V[4]=this.B[0]=this.x+this._L,this.V[1]=this.V[3]=this.B[1]=this.y+this._T,this.V[2]=this.V[6]=this.B[2]=this.x+this._R,this.V[5]=this.V[7]=this.B[3]=this.y+this._B}clacLTRB(){switch(this.g_){case 270:this._T=-12*this.scy,this._B=9*this.scy,this._L=-5*this.#p,this._R=6*this.#p;break;case 90:this._T=-9*this.scy,this._B=12*this.scy,this._L=-5*this.#p,this._R=6*this.#p;break;case 0:this._T=-6*this.#p,this._B=5*this.#p,this._L=-12*this.scy,this._R=9*this.scy;break;case 180:this._T=-5*this.#p,this._B=6*this.#p,this._L=-9*this.scy,this._R=12*this.scy}}setGrav(t){if(t!==this.g_){if(this.v_=0,this.ahspd=0,t%180==this.g_%180)switch(t){case 270:this.y+=4;break;case 90:this.y-=4;break;case 0:this.x+=4;break;case 180:this.x-=4}this.g_=t,this.ang=(t+90)%360,this.clacLTRB(),this.calcBox()}}meet(t,s,h){let i,e;switch(this.g_){case 270:i=t,e=s;break;case 90:i=t,e=-s;break;case 0:i=s,e=-t;break;case 180:i=-s,e=t}return $R.Col[h].meet(this,i,e,Math.round(this.B[0]+i),Math.round(this.B[1]+e),Math.round(this.B[2]+i),Math.round(this.B[3]+e))}meetObj(t,s,h){let i,e;switch(this.g_){case 270:i=t,e=s;break;case 90:i=t,e=-s;break;case 0:i=s,e=-t;break;case 180:i=-s,e=t}let r=Math.round(this.B[0]+i),o=Math.round(this.B[1]+e),a=Math.round(this.B[2]+i),p=Math.round(this.B[3]+e);for(let t=h.length;t--;)if(this.meetO(i,e,r,o,a,p,h[t]))return!0;return!1}meet0(t){return $R.Col[t].meet(this,0,0,Math.round(this.B[0]),Math.round(this.B[1]),Math.round(this.B[2]),Math.round(this.B[3]))}meet0All(t){let s=Math.round(this.B[0]),h=Math.round(this.B[1]),i=Math.round(this.B[2]),e=Math.round(this.B[3]),r=$R.Col[t].findAll(s,h,i,e),o=[];for(let t=r.length;t--;)this._meet(0,0,s,h,i,e,r[t])&&o.push(r[t]);return o}com(){if(0===this.shoot&&($C.P("z")||this.conShoot&&$C.C("z"))&&(Au.play("st"),this.shoot=5,new _C.B(this.x,this.y,this.scx,this.g_)),this.shoot&&this.shoot--,this.h_&&this.g_%180){let t=this.meet(this.h_,0,24);if(t&&0===t.v_){let s=Math.sign(this.h_);t.meet(s,0,2)||(t.h_=t.meet(2*s,0,2)?s:2*s)}}}step(){if(this.frozen)return;this.calcBox(),this.grav=this.meet0(36)?.7:this.meet0(35)?.2:this._grav,this.moveSpd=this.meet0(38)?1:this.meet0(37)?6:this._moveSpd;let t=$C.C("R")||-$C.C("L");if(this.meet0(26)){let s=$C.C("D")||-$C.C("U");if(s&&(this.onLadder=!0),this.onLadder){if(this.spr=$R._r.Spr.plb,this.ims=.2,this.djump=this.jump,t&&(this.scx=this.#p*t),this.h_=this.moveSpd*t,this.v_=this.moveSpd*s,this.grav=0,!$C.P("J"))return this.com();this.onLadder=!1,this.grav=.4,this.v_=0}}else this.onLadder&&(this.onLadder=!1,this.grav=.4,this.v_=0);let s=this.meet0(27);if(s){if(!this.onRope&&this.meetRope!==s){let t=((this.x-s.x)**2+(this.y-s.y)**2)**.5<<0;t>=0&&t<=s.h&&(this.onRope=s,this.meetRope=s,this.onRopeLen=t)}if(this.onRope){this.spr=$R._r.Spr.plb,this.ims=.2,this.djump=this.jump,t&&(this.scx=this.#p*t),this.grav=0,this.h_=0,this.v_=0;let s=$C.C("D")||-$C.C("U"),h=this.onRope.ang*Math.DR,i=Math.sin(h),e=Math.cos(h);if(this.onRopeLen+=this.moveSpd*s,this.platMove(this.onRope.x+this.onRopeLen*i-this.x,this.onRope.y+this.onRopeLen*e-this.y),!($C.P("J")||this.onRopeLen<0||this.onRopeLen>this.onRope.h))return this.com();this.onRope=null,this.grav=.4,this.phspd=0,this.pvspd=0}}else this.meetRope=null,this.onRope&&(this.onRope=null,this.grav=.4,this.phspd=0,this.pvspd=0);let h=this.meet(0,1,2),i=0;if(!h){let t=this.meet(-1,0,19)||this.meet(1,0,19);if(t){let s=(t.ang-this.g_+270)%360;i=0===s?-1:180===s?1:0,i&&90===this.g_&&(i=-i)}}t?i&&t!==i||(this.scx=this.#p*t,this.h_=this.moveSpd*t,this.spr=$R._r.Spr.plr,this.ims=.5):(this.h_=0,this.spr=$R._r.Spr.pli,this.ims=.2),this.adMove&&h&&($C.P("a")&&(this.h_-=1),$C.P("d")&&(this.h_+=1));let e=this.meet(0,1,56);e?this.h_+=e.csp:(e=this.meet(0,1,25),e&&(this.h_-=e.csp)),this.onPlat?this.meet(0,4,3)||(this.onPlat=!1):h||(this.spr=this.v_<0?$R._r.Spr.plj:$R._r.Spr.plf,this.ims=.2);let r=this.meet0(5);r&&(this.v_>2&&(this.v_=2),49===r.obj&&(this.djump=this.jump)),this.v_>this.maxVspd&&(this.v_=this.maxVspd),this.com(),this.jump&&$C.P("J")&&(h||this.onPlat||this.meet(0,1,3)||r&&16===r.obj?(this.v_=this.jump1,this.djump=this.jump,this.spr=$R._r.Spr.plj,this.ims=.2,Au.play("jp")):(this.djump>1||r&&17!==r.obj||-1===this.djump)&&(this.v_=this.jump2,this.djump>1&&this.djump--,this.spr=$R._r.Spr.plj,this.ims=.2,Au.play("jp",2))),this.v_<0&&$C.R("J")&&(this.v_*=.45),i&&(this.v_=2,this.spr=$R._r.Spr.plt,this.ims=.5,this.scx=this.#p*i,($C.P("R")&&1===i||$C.P("L")&&-1===i)&&(this.ims=.2,$C.C("J")?(this.spr=$R._r.Spr.plj,this.v_=-9,this.h_=15*i,Au.play("wj")):(this.spr=$R._r.Spr.plf,this.h_=3*i)))}p2o(t,s){switch(this.g_){case 270:return[t,s];case 90:return[t,-s];case 0:return[s,-t];case 180:return[-s,t]}}platMove(t,s){switch(this.g_){case 270:this.phspd=t,this.pvspd=s;break;case 90:this.phspd=t,this.pvspd=-s;break;case 0:this.phspd=-s,this.pvspd=t;break;case 180:this.phspd=s,this.pvspd=-t}}applyMove(t,s){switch(this.g_){case 270:this.ahspd=t,this.v_=s;break;case 90:this.ahspd=t,this.v_=-s;break;case 0:this.ahspd=-s,this.v_=t;break;case 180:this.ahspd=s,this.v_=-t}}moveBy(t,s){switch(this.g_){case 270:this.x+=t,this.y+=s;break;case 90:this.x+=t,this.y-=s;break;case 0:this.y-=t,this.x+=s;break;case 180:this.y+=t,this.x-=s}}moveByB(t,s){this.moveBy(t,s),this.calcBox()}move(){if(this.frozen)return;let t=this.ind<<0;this.ind+=this.ims,this.ind>=this.spr.length&&(this.ind=0);let s=this.ind<<0!==t,h=Math.round(this.B[0]),i=Math.round(this.B[1]),e=Math.round(this.B[2]),r=Math.round(this.B[3]),o=this.meet(0,2,3);o&&(o.hsp||o.vsp)&&this.platMove(o.hsp,o.vsp),this.ahspd>0?(this.ahspd-=this.fric,this.ahspd<0&&(this.ahspd=0)):this.ahspd<0&&(this.ahspd+=this.fric,this.ahspd>0&&(this.ahspd=0)),this.h_+=this.ahspd,this.v_+=this.grav,this.moveBy(this.h_+this.phspd,this.v_+this.pvspd),this.calcBox();let a=this.meet0All(2);if(a.length){1!==this.colS[2]&&2!==this.colS[2]&&(this.colS[2]=1,this.colO[2]=a[0]),a.for(t=>{1!==t.colS[0]&&2!==t.colS[0]&&(t.colS[0]=1,t.colO[0]=this)});let t=0,s=0,h=0,i=0,e=0,r=0,[o,p]=this.p2o(this.h_+this.phspd,this.v_+this.pvspd);switch(a.for(e=>{let r=o-e.hsp,a=p-e.vsp;r<0?h=Math.min(h,r):r>0&&(t=Math.max(t,r)),a<0?i=Math.min(i,a):a>0&&(s=Math.max(s,a))}),this.g_){case 270:break;case 90:p=-p,[s,i]=[-i,-s];break;case 0:[o,p,t,s,h,i]=[-p,o,-i,t,-s,h];break;case 180:[o,p,t,s,h,i]=[p,-o,s,-h,i,-t]}if(t&&t!==o&&(t+=1,e=1),s&&s!==p&&(s+=1),h&&(h!==o&&(h-=1,r=-1),t||(t=h,h=0,e=r,r=0)),i&&(i!==p&&(i-=1),s||(s=i,i=0)),!t&&!s||this.meetObj(-t,-s,a)?!t&&!i||this.meetObj(-t,-i,a)?!h&&!s||this.meetObj(-h,-s,a)?!h&&!i||this.meetObj(-h,-i,a)?!o&&!p||this.meetObj(-o,-p,a)?(t=0,s=0):(t=o,s=p,e=0,this.moveByB(-o,-p)):(t=h,e=r,s=i,this.moveByB(-t,-s)):(t=h,e=r,this.moveByB(-t,-s)):(s=i,this.moveByB(-t,-s)):this.moveByB(-t,-s),t&&this.meet(t,0,2)){for(let s=Math.sign(t),h=Math.abs(t),i=0;i<h&&!this.meet(s,0,2);i++)this.moveByB(s,0);this.ahspd=this.h_=t=0}if(s&&this.meet(0,s,2)){for(let t=Math.sign(s),h=Math.abs(s),i=0;i<h&&!this.meet(0,t,2);i++)this.moveByB(0,t);s>0?(this.djump=this.jump,this.v_=0):this.v_=p-s>0?p-s:0,s=0}(t||s)&&this.meet(t,s,2)&&(this.ahspd=this.h_=0,t=e),(t||s)&&this.moveByB(t,s)}this.phspd=0,this.pvspd=0,o=this.meet0All(3);for(let t=o.length;t--;){let s=o[t];if(s.ang%180==(this.g_+90)%180)switch(this.g_){case 270:{let t=s.B[1];if(this.y-this.v_/2<=t&&!this.meet(0,t-9-this.y,2)){let h=s.v_>0?s.v_:0;this.moveByB(0,t-9-this.y),this.v_=h,this.onPlat=!0,this.djump=this.jump}break}case 90:{let t=s.B[3];if(this.y+this.v_/2>=t&&!this.meet(0,this.y-t-9,2)){let h=s.v_<0?-s.v_:0;this.moveByB(0,this.y-t-9),this.v_=h,this.onPlat=!0,this.djump=this.jump}break}case 0:{let t=s.B[0];if(this.x-this.v_/2<=t&&!this.meet(0,t-9-this.x,2)){let h=s.h_>0?s.h_:0;this.moveByB(0,t-9-this.x),this.v_=h,this.onPlat=!0,this.djump=this.jump}break}case 180:{let t=s.B[2];if(this.x+this.v_/2>=t&&!this.meet(0,this.x-t-9,2)){let h=s.h_<0?-s.h_:0;this.moveByB(0,this.x-t-9),this.v_=h,this.onPlat=!0,this.djump=this.jump}break}}}let p=$R._r;switch(p.out){case 4:case 8:if(this.x<0?this.x+=p.w:this.x>=p.w&&(this.x-=p.w),8===p.out){if(this.y<0||this.y>=p.h)return this.kill(!0);break}case 16:if(this.y<0?this.y+=p.h:this.y>=p.h&&(this.y-=p.h),4===p.out)break;if(this.x<0||this.x>=p.w)return this.kill(!0);break;default:if(this.x<0||this.y<0||this.x>=p.w||this.y>=p.h)return this.kill(!0)}if(this.moved=h!==Math.round(this.B[0])||i!==Math.round(this.B[1])||e!==Math.round(this.B[2])||r!==Math.round(this.B[3]),this.meet0(2))return this.kill(!0);if(this.meet0(4)&&this.kill())return;switch($R.plyX=this.x,$R.plyY=this.y,$R.saveMode){case 0:if(!$C.P("s"))break;case 2:let t=this.meet0(7);!t||0!==t.ind||0!==$R.saveMode&&$R.saveX===this.x&&$R.saveY===this.y||(t.ind=1.78125,t.$d(),$R.save())}let l=this.meet0(6);l&&(0===l.wr&&1===l.ws?(l.wx||l.wy?(this.x=l.wx,this.y=l.wy):(p.x||p.y)&&(this.x=p.x,this.y=p.y),this.calcBox(),this.moved=!0):$R.warp(l.wr,l.ws,l.wx,l.wy)),this.spr!==this.pSpr&&(s=!0,this.pSpr=this.spr),(this.moved||s)&&(this.ctx.upd=!0)}kill(t=!1){if(!t&&$R.god)return;this.colO.for(t=>{t&&(t.colS[0]=3,t.colO[0]=null)}),Au.play("dth");let s=new _C.R(0,400,304,11,$R._r.sprGO);return Object.assign(s,$R._r.bobj.gov),s.cm=0,s.init(!0),s.ly.add(s),$R.addDth(),$R.$=null,this.ctx.upd=!0,!0}draw(){let t=this.ctx;switch(this.g_){case 270:t.setTransform(this.scx,0,0,this.scy,this.x-t.vX,this.y-t.vY);break;case 90:t.setTransform(this.scx,0,0,-this.scy,this.x-t.vX,this.y-t.vY);break;case 0:t.setTransform(0,-this.scx,this.scy,0,this.x-t.vX,this.y-t.vY);break;case 180:t.setTransform(0,this.scx,-this.scy,0,this.x-t.vX,this.y-t.vY)}$R.god&&(t.globalAlpha=.7),t.drawImage(this.spr[this.ind<<0],-this.ox,-this.oy),t.globalAlpha<1&&(t.globalAlpha=1),t.reset=!0,t.draw=!0}},_C.B=class extends _C.O{constructor(t,s,h,i){super(Math.round(t),Math.round(s)),this.des=40,this.spr=$R._r.Spr.blt,this.ctx=$R.L[7].dyn,this.scx=h<0?-h:h,this.scy=this.scx,this.w=Math.round(this.scx*this.spr.w),this.h=Math.round(this.scy*this.spr.h);let e=this.w>>1,r=this.h>>1;switch(this.B=[t-e,s-r,t-e+this.w,s-r+this.h],$R.Col[1].obj.push(this),this.moved=!0,i){case 270:case 90:this.h_=16*h<<0;break;case 0:this.v_=16*-h<<0;break;case 180:this.v_=16*h<<0}}meet(t){return $R.Col[t].meet(this,0,0,this.B[0],this.B[1],this.B[2],this.B[3])}destroy(){this.des=0,this.ctx.upd=!0}step(){(this.meet(2)||this.meet(55)||this.meet(42))&&this.destroy()}move(){if(this.des>0&&$R.$&&1===$R.saveMode){let t=this.meet(7);t&&0===t.ind&&(t.ind=1.78125,t.$d(),$R.save(),this.destroy())}this.B[0]+=this.h_,this.B[1]+=this.v_,this.B[2]+=this.h_,this.B[3]+=this.v_,this.V[0]=this.V[4]=this.B[0],this.V[1]=this.V[3]=this.B[1],this.V[2]=this.V[6]=this.B[2],this.V[5]=this.V[7]=this.B[3],--this.des,this.ind=1-this.ind,this.ctx.upd=!0}draw(){this.ctx.reset&&this.ctx.resetC(),this.ctx.drawImage(this.spr[this.ind],this.B[0],this.B[1],this.w,this.h),this.ctx.draw=!0}},_C.P=class{constructor(t,s,h,i=7){this.x=t,this.y=s,this.spr=h,this.ind=0,this.sprX=h.w>>1,this.sprY=h.h>>1,this.ctx=$R.L[i].dyn,this._des=!1,$R.L[i].eff(this),this.al=1,this.scx=1,this.scy=1,this.ang=0,this.aspd=.1,this.xspd=0,this.yspd=0,this.h_=0,this.v_=0,this.grav=0,this.rot=0,this.dSpr=_C.dSprN}init(){let t=1!==this.scx||1!==this.scy||this.xspd||this.yspd;this.ang||this.rot?this.dSpr=t?_C.dSprEx:_C.dSprAng:t&&(this.dSpr=_C.dSprSc)}move(){this.v_+=this.grav,this.x+=this.h_,this.y+=this.v_,this.al-=this.aspd,this.scx+=this.xspd,this.scy+=this.yspd,this.ang+=this.rot,(this.al<=0||this.scx<=0||this.scy<=0)&&(this._des=!0)}draw(){this.al<1&&(this.ctx.globalAlpha=this.al),this.dSpr(this.ctx,this.spr,this.ind),this.al<1&&(this.ctx.globalAlpha=1),this.ctx.draw=!0}},_C.S=class extends _C.P{constructor(t,s,h,i=7){super(t,s,h[0],i),this.spr=h,this.draw=_C.O.prototype.dNormal}static from(t){if(0===t.al||11!==t.obj&&t.hd||11===t.obj&&t.hd&&!t.lso)return;let s=new _C.S(t.x,t.y,t.spr,t.dep),h=s.sprX,i=s.sprY;return s.ind=t.ind<<0,s.scx=t.scx,s.scy=t.scy,s.ang=t.ang,s.draw=t.draw,s.sprX=t.sprX,s.sprY=t.sprY,_C.moveOxy(s,h,i),t.tile?s.tile=t.tile:11===t.obj?(s.lso=t.lso,s.h=t.h):22===t.obj&&(s.len=t.len),s}},_C.D=class{static circle(t,s,h=0){let i=[],e=Math.PI2/t;for(let r=0;r<t;r++){let t=h+r*e;i.push({x:Math.cos(t)*s,y:-Math.sin(t)*s})}return i}static polygon(t,s,h,i=0){let e=[],r=Math.PI2/t,o=Math.cos(i)*h,a=-Math.sin(i)*h,p=Math.sin(r/2)*h*2/s;for(let h=0;h<t;h++){let t=Math.PI/2+i+(h+.5)*r,l=Math.cos(t)*p,n=Math.sin(t)*p;for(let t=0;t<s;t++)e.push({x:o,y:a}),o+=l,a-=n}return e}};