Core.Obj=class{constructor(t,s){this.x=t,this.y=s,this.scx=1,this.scy=1,this.ang=0,this.ind=0,this.hspd=0,this.vspd=0,this.V=[0,0,0,0,0,0,0,0],this.B=[0,0,0,0],this.BV=[0,1,6,7],this.calc=!1,this.moved=!1,this._des=!1,this.colS=[],this.colO=[],this.outDone=0}set $x(t){t!==this.x&&(this.x=t,this.ctx.clr=!1,this.calc=!1,this.moved=!0)}set $y(t){t!==this.y&&(this.y=t,this.ctx.clr=!1,this.calc=!1,this.moved=!0)}set $scx(t){t!==this.scx&&(this.scx=t,this.w=t*this._w,1!==t&&(this.dSpr=this.ang?this.dSprEx:this.dSprSc),this.ctx.clr=!1,this.calc=!1,this.moved=!0)}set $scy(t){t!==this.scy&&(this.scy=t,this.h=t*this._h,1!==t&&(this.dSpr=this.ang?this.dSprEx:this.dSprSc),this.ctx.clr=!1,this.calc=!1,this.moved=!0)}set $ang(t){t!==this.ang&&(this.ang=t,this.dSpr=t?1===this.scx&&1===this.scy?this.dSprAng:this.dSprEx:1===this.scx&&1===this.scy?this.dSprN:this.dSprSc,this.ctx.clr=!1,this.calc=!1,this.moved=!0)}set $ago(t){this.angH=1&t?this.spr[0].w>>1:2&t?this.spr[0].w:0,this.angV=4&t?this.spr[0].h>>1:8&t?this.spr[0].h:0,this.ang&&(this.ctx.clr=!1,this.calc=!1,this.moved=!0)}get spd(){return(this.hspd**2+this.vspd**2)**.5}set spd(t){let s=this.spd;if(s){let h=t/s;this.hspd*=h,this.vspd*=h}else this.hspd=t,this.vspd=0}get dir(){let t=-Math.atan(this.vspd/this.hspd)/Math.DR;return this.hspd<0?t+180:t}set dir(t){let s=this.spd;s&&(t*=Math.DR,this.hspd=s*Math.cos(t),this.vspd=-s*Math.sin(t))}calcBox(){if(this.calc)return;this.calc=!0;let t=this.V,s=this.spr[0],h=this.x-s.boxL*this.scx,i=this.y-s.boxT*this.scy;if(0===this.ang)t[0]=h,t[1]=i,t[2]=t[0]+this.w,t[3]=t[1],t[4]=t[0],t[5]=t[1]+this.h,t[6]=t[2],t[7]=t[5];else{let e=this.ang*Math.DR,r=Math.cos(e),a=Math.sin(e),l=this.w*r,o=this.w*a,n=(this.angH-s.bL)*this.scx,p=(this.angV-s.bT)*this.scy;t[0]=h+n*(1-r)-p*a,t[1]=i+n*a+p*(1-r),t[2]=t[0]+l,t[3]=t[1]-o,t[4]=t[0]+this.h*a,t[5]=t[1]+this.h*r,t[6]=t[4]+l,t[7]=t[5]-o}let e=0,r=0,a=1,l=1;for(let s=0;s<8;s++)1&s?t[s]<t[a]?a=s:t[s]>t[l]&&(l=s):t[s]<t[e]?e=s:t[s]>t[r]&&(r=s);this.BV[0]=e,this.BV[1]=a,this.BV[2]=r,this.BV[3]=l,this.B[0]=t[e]+.5<<0,this.B[1]=t[a]+.5<<0,this.B[2]=t[r]+.5<<0,this.B[3]=t[l]+.5<<0}moveB(t,s){this.x+=t,this.y+=s;let h=this.V;for(let i=0;i<8;i++)h[i]+=1&i?s:t;this.B[0]=h[this.BV[0]]+.5<<0,this.B[1]=h[this.BV[1]]+.5<<0,this.B[2]=h[this.BV[2]]+.5<<0,this.B[3]=h[this.BV[3]]+.5<<0}#pxCol(t,s,h,i,e,r=0,a=0){let l=e.spr[0],o=e.ang*Math.DR,n=Math.cos(o),p=Math.sin(o),c=e.scx,d=e.scy,m=e.angH*c,x=e.angV*d,u=-e.x-r+c*l.x-m+.5,g=-e.y-a+d*l.y-x+.5,v=l.mask[e.ind<<0],b=e._w,y=e._h,f=l.bL,B=l.bT;for(let e=s;e<i;e++)for(let s=t;s<h;s++){let t=(n*(s+u)-p*(e+g)+m)/c-f<<0;if(t<0||t>=b)continue;let h=(p*(s+u)+n*(e+g)+x)/d-B<<0;if(!(h<0||h>=y)&&v[h*b+t])return!0}}_meet(t,s,h,i,e,r,a){if(this.px||a.px){let l=Math.max(h,a.B[0]),o=Math.max(i,a.B[1]),n=Math.min(e,a.B[2]),p=Math.min(r,a.B[3]);if(this.px||this.ang%90!=0){if(a.px||a.ang%90!=0){let h=this.spr[0],i=this.ang*Math.DR,e=Math.cos(i),r=Math.sin(i),c=this.scx,d=this.scy,m=this.angH*c,x=this.angV*d,u=-this.x-t+c*h.x-m+.5,g=-this.y-s+d*h.y-x+.5,v=h.mask[this.ind<<0],b=this._w,y=this._h,f=h.bL,B=h.bT,R=1-this.px,j=a.spr[0],S=a.ang*Math.DR,w=Math.cos(S),M=Math.sin(S),V=a.scx,k=a.scy,O=a.angH*V,C=a.angV*k,D=-a.x+V*j.x-O+.5,L=-a.y+k*j.y-C+.5,_=j.mask[a.ind<<0],A=a._w,I=a._h,T=j.bL,E=j.bT,P=1-a.px;for(let t=o;t<p;t++)for(let s=l;s<n;s++){let h=(e*(s+u)-r*(t+g)+m)/c-f<<0;if(h<0||h>=b)continue;let i=(r*(s+u)+e*(t+g)+x)/d-B<<0;if(i<0||i>=y)continue;let a=(w*(s+D)-M*(t+L)+O)/V-T<<0;if(a<0||a>=A)continue;let l=(M*(s+D)+w*(t+L)+C)/k-E<<0;if(!(l<0||l>=I)&&(R|v[i*b+h])&(P|_[l*A+a]))return!0}return!1}return this.#pxCol(l,o,n,p,this,t,s)}return this.#pxCol(l,o,n,p,a)}if(this.ang%90||a.ang%90){let h=[],i=a.V;for(let i=0;i<8;)h[i]=this.V[i]+t,h[++i]=this.V[i++]+s;for(let t=0;t<2;t++){for(let t=2;t<6;t+=2){let s=h[t]-h[0],e=h[t+1]-h[1],r=s*(i[0]-h[0])+e*(i[1]-h[1]),a=r;for(let t=2;t<8;t+=2){let l=s*(i[t]-h[0])+e*(i[t+1]-h[1]);l<r?r=l:l>a&&(a=l)}if(a<=0||r>=s*s+e*e)return!1}i=h,h=a.V}return!0}return!0}meet(t,s,h){return this.calcBox(),$R.Col[h].meet(this,t,s,this.V[this.BV[0]]+t+.5<<0,this.V[this.BV[1]]+s+.5<<0,this.V[this.BV[2]]+t+.5<<0,this.V[this.BV[3]]+s+.5<<0)}meetAll(t,s,h){this.calcBox();let i=this.V[this.BV[0]]+t+.5<<0,e=this.V[this.BV[1]]+s+.5<<0,r=this.V[this.BV[2]]+t+.5<<0,a=this.V[this.BV[3]]+s+.5<<0,l=$R.Col[h].findAll(i,e,r,a),o=[];for(let h=l.length;h--;)l[h]!==this&&this._meet(t,s,i,e,r,a,l[h])&&o.push(l[h]);return o}meetO(t,s,h,i,e,r,a){return!!(e>a.B[0]&&r>a.B[1]&&h<a.B[2]&&i<a.B[3]&&this._meet(t,s,h,i,e,r,a))}meetObj(t,s,h){let i=this.V[this.BV[0]]+t+.5<<0,e=this.V[this.BV[1]]+s+.5<<0,r=this.V[this.BV[2]]+t+.5<<0,a=this.V[this.BV[3]]+s+.5<<0;for(let l=h.length;l--;)if(this.meetO(t,s,i,e,r,a,h[l]))return!0;return!1}colDir(t,s,h,i,e=0){let r=0,a=0;t.for(t=>{if(t.cm&&(this.updCol(t.obj+5,t),t.cm>1&&this.updCol(t.cm,t)),e&&(t.outInd===this.cm||t.outInd===this.obj+5)&&!t.outDone)return;let s=this.hsp-t.hsp,h=this.vsp-t.vsp;s<0?r=Math.min(r,s):s>0&&(r=Math.max(r,s)),h<0?a=Math.min(a,h):h>0&&(a=Math.max(a,h))}),(r||a)&&(r>0?r+=1:r<0&&(r-=1),a>0?a+=1:a<0&&(a-=1),this.moveB(-r,-a),r&&this.meetObj(r,0,t)&&(r=s(r)),a&&this.meetObj(0,a,t)&&(a=h(a)),(r||a)&&this.meetObj(r,a,t)&&([r,a]=i(r,a)),this.moveB(r,a))}updCol(t,s){let h=this;if(1===h.colS[t])return 1;if(2===h.colS[t]){let i=h.colO[t];if(h.moved||i.moved){s||(s=h.meet(0,0,t));let e=h.obj+5,r=h.cm;s?s!==i&&(h.colO[t]=s,r&&(i.colS[e]=3,i.colO[e]=null,s.colO[e]=h,s.colS[e]&&3!==s.colS[e]||(s.colS[e]=1),r>1&&(i.colS[r]=3,i.colO[r]=null,s.colO[r]=h,s.colS[r]&&3!==s.colS[r]||(s.colS[r]=1)))):(h.colS[t]=3,h.colO[t]=null,r&&(i.colS[e]=3,i.colO[e]=null,r>1&&(i.colS[r]=3,i.colO[r]=null)))}return 2}{s||(s=h.meet(0,0,t));let i=h.obj+5,e=h.cm;return s?(h.colS[t]=1,h.colO[t]=s,e&&(s.colO[i]=h,s.colS[i]&&3!==s.colS[i]||(s.colS[i]=1),e>1&&(s.colO[e]=h,s.colS[e]&&3!==s.colS[e]||(s.colS[e]=1))),1):0}}resetCol(){let t=this.colS;for(let s=t.length;s--;)1===t[s]?t[s]=2:3===t[s]&&(t[s]=0);this.outDone=0}dSprN(t,s,h){t.reset||t.resetC(),t.drawImage(s[h],this.x-s.x,this.y-s.y)}dSprSc(t,s,h){t.reset||t.resetC();let i=this.scx,e=this.scy;(Math.abs(i)<1||Math.abs(e)<1)&&(t.imageSmoothingEnabled=!0),t.drawImage(s[h],this.x-s.x*i,this.y-s.y*e,s.w*i,s.h*e),t.imageSmoothingEnabled&&(t.imageSmoothingEnabled=!1)}dSprAng(t,s,h){let i=this.ang*Math.DR,e=Math.cos(i),r=Math.sin(i),a=this.angH,l=this.angV;t.setTransform(e,-r,r,e,this.x-s.x+a-t.vX,this.y-s.y+l-t.vY),t.drawImage(s[h],-a,-l),t.reset=!1}dSprEx(t,s,h){let i=this.ang*Math.DR,e=Math.cos(i),r=Math.sin(i),a=this.scx,l=this.scy,o=this.angH,n=this.angV;(Math.abs(a)<1||Math.abs(l)<1)&&(t.imageSmoothingEnabled=!0),t.setTransform(e*a,-r*a,r*l,e*l,this.x+(o-s.x)*a-t.vX,this.y+(n-s.y)*l-t.vY),t.drawImage(s[h],-o,-n),t.imageSmoothingEnabled&&(t.imageSmoothingEnabled=!1),t.reset=!1}},Core.ObjRun=class extends Core.Obj{constructor(t,s,h,i,e){super(s,h),this.xp=s,this.yp=h,this.obj=t,this.dep=i,this.ly=$R.L[i],this.ctx=this.ly.sta,this.oid=this.ly.push(this),this.spr=e,this._w=this.spr[0].boxW,this._h=this.spr[0].boxH,this.al=1,this.hd=0,this.draw=this.dNormal,this.dSpr=this.dSprN,this.hsp=0,this.vsp=0,this.DEF=[],this.MOV=[],this.TML=[],this.TRG=[[],[],[]],this.VAR=[0,0,0,0],this.colP=[null,null],this.colId=[0,0],this.step0=this.timer=this.step1=this.move=this.step2=this.collision=this.resetStatus=this.#skip}init(t=!1){let s=!1,h=!1,i=!1;if(this.tile)switch(this.spr[0].length){case 1:this.tile=!1;break;case 2:this.tile=[(this.tb>7)<<0],this.draw=this.dTile;break;case 4:this.tile=[this.tc?0:(3==(3&this.tb))+((12==(12&this.tb))<<1)],this.draw=this.dTile;break;case 20:this.tile=[this.tb];for(let t=0;t<4;t++)this.tc&1<<t&&this.tile.push(16+t);this.draw=this.dTile}else this.spr[0].length>1&&(t=!0);switch(this.mov&&this.mov.for(s=>{Lib.dmov[s[0]](this,s)&&(h=t=!0)}),this.tml&&(this.tml.for(i=>{let e=i[1];this.TML.push(e),e.run=i[0],e.time=0,e.node=0,e.for(i=>{Lib.dynAct.includes(i[0])&&(t=!0),Lib.colAct.includes(i[0])?h=!0:1.05===i[0]&&(s=!0),.02===i[0]&&(i.ct=0,0===i[2]&&(i[2]=Infinity)),i.f=i[0]===i[0]<<0?Lib.dmov[i[0]]:Lib.act[i[0]<<0][Math.round(100*i[0]%100-1)]})}),this.timer=this.#timer),this.trg?.for(e=>{let r=[e[1],[1],e[2],e[3]],a=0;switch(this.TRG[e[0]].push(r),e[0]){case 0:this.step0=this.#step0;case 1:this.step1=this.#step1;case 2:this.step2=this.#step2}e[2].for(t=>{2.01===t[0]&&(i=!0),t.f=Lib.trg[(t[0]<<0)-1][Math.round(100*t[0]%100-1)],t[1]?r[1][++a]=1:r[1][a]++}),e[3].for(i=>{Lib.dynAct.includes(i[0])&&(t=!0),Lib.colAct.includes(i[0])?h=!0:1.05===i[0]&&(s=!0),i.f=i[0]===i[0]<<0?Lib.dmov[i[0]]:Lib.act[i[0]<<0][Math.round(100*i[0]%100-1)]}),0==--r[1][r[1].length-1]&&r[1].splice(r[1].length-1)}),this.w=this.scx*this._w,this.obj){case 11:this.draw=this.dLaser,this._h=this.lso?this.len:0,this.h=this.scy*this._h,this.$ago=1;break;case 22:this.draw=this.dRope,this.h=this.scy*this.len,this.$ago=1;break;default:void 0===this.angH&&(this.$ago=5),this.h=this.scy*this._h}switch(this.calcBox(),(1===this.scx&&1===this.scy)<<1|!this.ang){case 0:this.dSpr=this.dSprEx;break;case 1:this.dSpr=this.dSprSc;break;case 2:this.dSpr=this.dSprAng}if(this.def){let t=Lib.def[this.def];this.DEF.push(t[1].bind(this)),2===t[0]?h=!0:1===t[0]&&(s=!0)}this.px=this.spr[0].px,this.spr[0].ims&&(this.DEF.push(Lib.def[0][1].bind(this)),s=!0),this.colMov=h,this.cm&&($R.Col[this.obj+5].add(this),this.cm>1&&$R.Col[this.cm].add(this),this.resetStatus=this.resetCol),i&&(this.resetStatus=this.resetCol),h?this.move=this.#movC:s&&(this.move=this.#mov),t&&(this.ctx=this.ly.dyn),this.moved=!1,this.al&&(this.ctx.clr=!1)}activate(t,s,h,i){this.B[0]<h&&this.B[1]<i&&this.B[2]>t&&this.B[3]>s&&this.ly.add(this)}destroy(){this._des=!0,this.ctx.clr=!1,this.cm&&(this.clearCol(0),this.clearCol(1))}clearCol(t){let s=this.colP[t];if(s){let h=this.colId[t];for(s.splice(h,1);h<s.length;h++)s[h].colId[t]=h;let i=s?this.cm:this.obj+5;this.colO.for(t=>{t&&(t.colS[i]=3,t.colO[i]=null)})}}get sp(){return(this.hsp**2+this.vsp**2)**.5}get di(){let t=-Math.atan(this.vsp/this.hsp)/Math.DR;return this.hsp<0?t+180:t}out(){let t=0===this.outObj.length||this.moved;if(!t)for(let s=this.outObj.length;s--;)if(this.outObj[s].moved){t=!0;break}if(t&&(this.outObj=this.meetAll(0,0,this.outInd),this.outObj.length)){this.test=1;for(let t=this.outObj.length;t--;){let s=this.outObj[t];if(s.outInd!==this.cm&&s.outInd!==this.obj+5||s.outDone){this.test=0;break}}if(this.test)for(let t=this.outObj.length;t--;){let s=this.outObj[t];s.outInd!==this.cm&&s.outInd!==this.obj+5||s.outDone||s.test||s.collision()}this.colDir(this.outObj,t=>{for(let s=Math.sign(t),h=Math.abs(t),i=0;i<h&&!this.meetObj(s,0,this.outObj);i++)this.moveB(s,0);return this.hspd=0},t=>{for(let s=Math.sign(t),h=Math.abs(t),i=0;i<h&&!this.meetObj(0,s,this.outObj);i++)this.moveB(0,s);return this.vspd=0},(t,s)=>[this.hspd=0,s],1);let t=this.x-this.xp,s=this.y-this.yp;(t||s)&&(this.moved=!0,this.ctx.clr=!1),this.hsp+=t,this.vsp+=s,this.xp=this.x,this.yp=this.y,this.outDone=1+this.test,this.outObj=this.meetAll(0,0,this.outInd),this.test=1;for(let t=this.outObj.length;t--;){let s=this.outObj[t];s.outInd!==this.cm&&s.outInd!==this.obj+5||(s.outDone=!1,s.test||s.collision())}this.test=0}}bounce(){let t=0===this.outObj.length||this.moved;if(!t)for(let s=this.outObj.length;s--;)if(this.outObj[s].moved){t=!0;break}t&&(this.outObj=this.meetAll(0,0,this.outInd),this.outObj.length&&(this.colDir(this.outObj,t=>(this.hspd=-t,0),t=>(this.vspd=-t,0),(t,s)=>(t&&(this.hspd=-t),s&&(this.vspd=-s),[0,0])),this.hsp+=this.x-this.xp,this.vsp+=this.y-this.yp,this.xp=this.x,this.yp=this.y))}#skip(){}#trigger(t){let s=this.TRG[t];for(let t=0;t<s.length;t++){let h=s[t],i=0;for(let e=0;e<h[1].length;e++){let r=h[1][e],a=1;for(let t=0;t<r;t++){let s=h[2][i+t];if(!s.f(this,s)){a=0;break}}if(a){h[3].for(t=>t.f(this,t)),--h[0]||s.splice(t--,1);break}i+=r}}}#timer(){this.TML.for(t=>{if(t.run){for(;t.run&&0===t.time;){let s=t[t.node++];if(!s){t.run=0,t.time=0,t.node=0;break}s.f(this,s,t)}t.run&&t.time>0&&t.time--}})}#mov(){for(let t=this.MOV.length;t--;)this.MOV[t]&&this.MOV[t](this)&&(this.MOV[t]=null);this.DEF.for(t=>t())}#movC(){this.moved=!1,this.#mov(),this.hsp=this.x-this.xp,this.vsp=this.y-this.yp,this.xp=this.x,this.yp=this.y}#step0(){this.#trigger(0)}#step1(){this.#trigger(1)}#step2(){this.#trigger(2)}dNormal(){this.hd||0===this.al||(this.al<1&&(this.ctx.globalAlpha=this.al),this.spr.for(t=>this.dSpr(this.ctx,t,this.ind<<0)),this.al<1&&(this.ctx.globalAlpha=1))}dGUI(){if(this.hd||0===this.al)return;this.al<1&&(this.ctx.globalAlpha=this.al);let t=this.ctx.vX,s=this.ctx.vY;this.ctx.vX=0,this.ctx.vY=0,this.spr.for(t=>this.dSpr(this.ctx,t,this.ind<<0)),this.ctx.vX=t,this.ctx.vY=s,this.al<1&&(this.ctx.globalAlpha=1)}dTile(){if(!this.hd&&0!==this.al){this.al<1&&(this.ctx.globalAlpha=this.al),this.tile.for(t=>this.dSpr(this.ctx,this.spr[0],t));for(let t=1;t<this.spr.length;t++)this.dSpr(this.ctx,this.spr[t],this.ind<<0);this.al<1&&(this.ctx.globalAlpha=1)}}dRope(){if(this.hd||0===this.al)return;this.al<1&&(this.ctx.globalAlpha=this.al),this.ctx.reset||this.ctx.resetC();let t=this.spr[0];if(this.ctx.translate(this.x,this.y),this.ang&&this.ctx.rotate(-this.ang*Math.DR),this.ctx.scale(this.scx,this.scy),this.len<t.h)this.ctx.drawImage(t[1],0,t.h-this.len,t.w,this.len,-t.x,0,t.w,this.len);else{let s=this.len-t.h;for(this.ctx.drawImage(t[1],-t.x,s);s>0;s-=32)s>=32?this.ctx.drawImage(t[0],0,0,t.w,32,-t.x,s-32,t.w,32):this.ctx.drawImage(t[0],0,32-s,t.w,s,-t.x,0,t.w,s)}this.ctx.reset=!1,this.al<1&&(this.ctx.globalAlpha=1)}dLaser(){if(this.hd&&!this.lso||0===this.al)return;this.al<1&&(this.ctx.globalAlpha=this.al),this.ctx.reset||this.ctx.resetC();let t=this.spr[0];this.ctx.translate(this.x,this.y),this.ang&&this.ctx.rotate(-this.ang*Math.DR),this.ctx.scale(this.scx,this.scy),this.lso&&this.ctx.drawImage(t[1],-t.x,0,t.w,this.h/this.scy),this.hd||this.ctx.drawImage(t[0],-t.x,0),this.ctx.reset=!1,this.al<1&&(this.ctx.globalAlpha=1)}},Core.ObjPly=class extends Core.Obj{#sc;constructor(t,s){super(t,s),$R.plyX=t,$R.plyY=s,this.#sc=1,this.pSpr=this.spr=Res.spr.pli,this.ims=.2,this.px=0,this.ctx=$R.L[7].dyn,this.ox=17,this.oy=23,this.moveSpd=3,this.maxVspd=9,this.jump1=-8.5,this.jump2=-7,this.grav=.4,this.fric=.5,this.ahspd=0,this.phspd=0,this.pvspd=0,this.onPlat=!1,this.onLadder=!1,this.onRope=null,this.meetRope=null,this.shoot=0,this.frozen=!1,$R.initPly(this),this.djump=this.jump,this.resetStatus=this.resetCol,this.clacLTRB(),this.calcBox()}calcBox(){this.V[0]=this.V[4]=this.B[0]=this.x+this._L,this.V[1]=this.V[3]=this.B[1]=this.y+this._T,this.V[2]=this.V[6]=this.B[2]=this.x+this._R,this.V[5]=this.V[7]=this.B[3]=this.y+this._B}clacLTRB(){switch(this.gravDir){case 270:this._T=-12*this.scy,this._B=9*this.scy,this._L=-5*this.#sc,this._R=6*this.#sc;break;case 90:this._T=-9*this.scy,this._B=12*this.scy,this._L=-5*this.#sc,this._R=6*this.#sc;break;case 0:this._T=-6*this.#sc,this._B=5*this.#sc,this._L=-12*this.scy,this._R=9*this.scy;break;case 180:this._T=-5*this.#sc,this._B=6*this.#sc,this._L=-9*this.scy,this._R=12*this.scy}}setGrav(t){if(t!==this.gravDir){if(this.vspd=0,this.ahspd=0,t%180==this.gravDir%180)switch(t){case 270:this.y+=4;break;case 90:this.y-=4;break;case 0:this.x+=4;break;case 180:this.x-=4}this.gravDir=t,this.ang=(t+90)%360,this.clacLTRB(),this.calcBox()}}meet(t,s,h){let i,e;switch(this.gravDir){case 270:i=t,e=s;break;case 90:i=t,e=-s;break;case 0:i=s,e=-t;break;case 180:i=-s,e=t}return $R.Col[h].meet(this,i,e,this.B[0]+i+.5<<0,this.B[1]+e+.5<<0,this.B[2]+i+.5<<0,this.B[3]+e+.5<<0)}meetObj(t,s,h){let i,e;switch(this.gravDir){case 270:i=t,e=s;break;case 90:i=t,e=-s;break;case 0:i=s,e=-t;break;case 180:i=-s,e=t}let r=this.B[0]+i+.5<<0,a=this.B[1]+e+.5<<0,l=this.B[2]+i+.5<<0,o=this.B[3]+e+.5<<0;for(let t=h.length;t--;)if(this.meetO(i,e,r,a,l,o,h[t]))return!0;return!1}meet0(t){return $R.Col[t].meet(this,0,0,this.B[0]+.5<<0,this.B[1]+.5<<0,this.B[2]+.5<<0,this.B[3]+.5<<0)}meet0All(t){let s=this.B[0]+.5<<0,h=this.B[1]+.5<<0,i=this.B[2]+.5<<0,e=this.B[3]+.5<<0,r=$R.Col[t].findAll(s,h,i,e),a=[];for(let t=r.length;t--;)this._meet(0,0,s,h,i,e,r[t])&&a.push(r[t]);return a}com(){if(0===this.shoot&&($C.keyPrs("z")||this.conShoot&&$C.keyChk("z"))&&(Au.play("st"),this.shoot=5,new Core.ObjBlt(this.x,this.y,this.scx,this.gravDir)),this.shoot&&this.shoot--,this.hspd){let t=this.meet(this.hspd,0,24);t&&0===t.vspd&&(t.hspd=this.p2o(2*Math.sign(this.hspd),0)[0])}}step(){if(this.frozen)return;this.calcBox();let t=$C.keyChk("R")||-$C.keyChk("L");if(this.meet0(26)){let s=$C.keyChk("D")||-$C.keyChk("U");if(s&&(this.onLadder=!0),this.onLadder){if(this.spr=Res.spr.plb,this.ims=.2,this.djump=this.jump,t&&(this.scx=this.#sc*t),this.hspd=this.moveSpd*t,this.vspd=this.moveSpd*s,this.grav=0,!$C.keyPrs("J"))return this.com();this.onLadder=!1,this.grav=.4,this.vspd=0}}else this.onLadder&&(this.onLadder=!1,this.grav=.4,this.vspd=0);let s=this.meet0(27);if(s){if(!this.onRope&&this.meetRope!==s){let t=((this.x-s.x)**2+(this.y-s.y)**2)**.5<<0;t>=0&&t<=s.h&&(this.onRope=s,this.meetRope=s,this.onRopeLen=t)}if(this.onRope){this.spr=Res.spr.plb,this.ims=.2,this.djump=this.jump,t&&(this.scx=this.#sc*t),this.grav=0,this.vspd=0;let s=$C.keyChk("D")||-$C.keyChk("U"),h=this.onRope.ang*Math.DR,i=Math.sin(h),e=Math.cos(h);if(this.onRopeLen+=this.moveSpd*s,this.platMove(this.onRope.x+this.onRopeLen*i-this.x,this.onRope.y+this.onRopeLen*e-this.y),!($C.keyPrs("J")||this.onRopeLen<0||this.onRopeLen>this.onRope.h))return this.com();this.onRope=null,this.grav=.4,this.phspd=0,this.pvspd=0}}else this.meetRope=null,this.onRope&&(this.onRope=null,this.grav=.4,this.phspd=0,this.pvspd=0);let h=this.meet(0,1,2),i=0;if(!h){let t=this.meet(-1,0,19)||this.meet(1,0,19);if(t){let s=(t.ang-this.gravDir+270)%360;i=0===s?-1:180===s?1:0,i&&90===this.gravDir&&(i=-i)}}t?i&&t!==i||(this.scx=this.#sc*t,this.hspd=this.moveSpd*t,this.spr=Res.spr.plr,this.ims=.5):(this.hspd=0,this.spr=Res.spr.pli,this.ims=.2),this.adMove&&h&&($C.keyPrs("a")&&(this.hspd-=1),$C.keyPrs("d")&&(this.hspd+=1)),this.onPlat?this.meet(0,4,3)||(this.onPlat=!1):h||(this.spr=this.vspd<0?Res.spr.plj:Res.spr.plf,this.ims=.2);let e=this.meet0(5);e&&(this.vspd>2&&(this.vspd=2),49===e.obj&&(this.djump=this.jump)),this.vspd>this.maxVspd&&(this.vspd=this.maxVspd),this.com(),this.jump&&$C.keyPrs("J")&&(h||this.onPlat||this.meet(0,1,3)||e&&16===e.obj?(this.vspd=this.jump1,this.djump=this.jump,this.spr=Res.spr.plj,this.ims=.2,Au.play("jp")):(this.djump>1||e&&17!==e.obj||-1===this.djump)&&(this.vspd=this.jump2,this.djump>1&&this.djump--,this.spr=Res.spr.plj,this.ims=.2,Au.play("jp",2))),this.vspd<0&&$C.keyRls("J")&&(this.vspd*=.45),i&&(this.vspd=2,this.spr=Res.spr.plt,this.ims=.5,this.scx=this.#sc*i,($C.keyPrs("R")&&1===i||$C.keyPrs("L")&&-1===i)&&(this.ims=.2,$C.keyChk("J")?(this.spr=Res.spr.plj,this.vspd=-9,this.hspd=15*i,Au.play("wj")):(this.spr=Res.spr.plf,this.hspd=3*i)))}p2o(t,s){switch(this.gravDir){case 270:return[t,s];case 90:return[t,-s];case 0:return[s,-t];case 180:return[-s,t]}}platMove(t,s){switch(this.gravDir){case 270:this.phspd=t,this.pvspd=s;break;case 90:this.phspd=t,this.pvspd=-s;break;case 0:this.phspd=-s,this.pvspd=t;break;case 180:this.phspd=s,this.pvspd=-t}}applyMove(t,s){switch(this.gravDir){case 270:this.ahspd=t,this.vspd=s;break;case 90:this.ahspd=t,this.vspd=-s;break;case 0:this.ahspd=-s,this.vspd=t;break;case 180:this.ahspd=s,this.vspd=-t}}moveBy(t,s){switch(this.gravDir){case 270:this.x+=t,this.y+=s;break;case 90:this.x+=t,this.y-=s;break;case 0:this.y-=t,this.x+=s;break;case 180:this.y+=t,this.x-=s}}moveByB(t,s){this.moveBy(t,s),this.calcBox()}move(){if(this.frozen)return;let t=this.ind<<0;this.ind+=this.ims,this.ind>=this.spr.length&&(this.ind=0);let s=this.ind<<0!==t,h=this.B[0]+.5<<0,i=this.B[1]+.5<<0,e=this.B[2]+.5<<0,r=this.B[3]+.5<<0,a=this.meet(0,2,3);a&&(a.hsp||a.vsp)&&this.platMove(a.hsp,a.vsp),this.ahspd>0?(this.ahspd-=this.fric,this.ahspd<0&&(this.ahspd=0)):this.ahspd<0&&(this.ahspd+=this.fric,this.ahspd>0&&(this.ahspd=0)),this.hspd+=this.ahspd,this.vspd+=this.grav,this.moveBy(this.hspd+this.phspd,this.vspd+this.pvspd),this.calcBox();let l=this.meet0All(2);if(l.length){1!==this.colS[2]&&2!==this.colS[2]&&(this.colS[2]=1,this.colO[2]=l[0]),l.for(t=>{1!==t.colS[0]&&2!==t.colS[0]&&(t.colS[0]=1,t.colO[0]=this)});let t=0,s=0,[h,i]=this.p2o(this.hspd+this.phspd,this.vspd+this.pvspd);switch(l.for(e=>{let r=h-e.hsp,a=i-e.vsp;r<0?t=Math.min(t,r):r>0&&(t=Math.max(t,r)),a<0?s=Math.min(s,a):a>0&&(s=Math.max(s,a))}),this.gravDir){case 270:break;case 90:s=-s;break;case 0:[t,s]=[-s,t];break;case 180:[t,s]=[s,-t]}if(t>0?t+=1:t<0&&(t-=1),s>0?s+=1:s<0&&(s-=1),this.moveByB(-t,-s),t&&this.meetObj(t,0,l)){for(let s=Math.sign(t),h=Math.abs(t),i=0;i<h&&!this.meetObj(s,0,l);i++)this.moveByB(s,0);this.ahspd=this.hspd=t=0}if(s&&this.meetObj(0,s,l)){for(let t=Math.sign(s),h=Math.abs(s),i=0;i<h&&!this.meetObj(0,t,l);i++)this.moveByB(0,t);s>0&&(this.djump=this.jump),this.vspd=s=0}(t||s)&&this.meetObj(t,s,l)&&(this.ahspd=this.hspd=t=0),this.moveByB(t,s)}this.phspd=0,this.pvspd=0,a=this.meet0All(3);for(let t=a.length;t--;){let s=a[t];if(s.ang%180==(this.gravDir+90)%180)switch(this.gravDir){case 270:{let t=s.B[1];if(this.y-this.vspd/2<=t){let h=s.vspd>0?s.vspd:0;this.moveByB(0,t-9-this.y),this.vspd=h,this.onPlat=!0,this.djump=this.jump}break}case 90:{let t=s.B[3];if(this.y+this.vspd/2>=t){let h=s.vspd<0?-s.vspd:0;this.moveByB(0,this.y-t-9),this.vspd=h,this.onPlat=!0,this.djump=this.jump}break}case 0:{let t=s.B[0];if(this.x-this.vspd/2<=t){let h=s.hspd>0?s.hspd:0;this.moveByB(0,t-9-this.x),this.vspd=h,this.onPlat=!0,this.djump=this.jump}break}case 180:{let t=s.B[2];if(this.x+this.vspd/2>=t){let h=s.hspd<0?-s.hspd:0;this.moveByB(0,this.x-t-9),this.vspd=h,this.onPlat=!0,this.djump=this.jump}break}}}if(this.x<0||this.y<0||this.x>=$R._r.w||this.y>=$R._r.h)return this.kill(!0);if(this.moved=h!==this.B[0]+.5<<0||i!==this.B[1]+.5<<0||e!==this.B[2]+.5<<0||r!==this.B[3]+.5<<0,this.meet0(2))return this.kill(!0);if(this.meet0(4)&&this.kill())return;if($R.plyX=this.x,$R.plyY=this.y,$C.keyPrs("s")){let t=this.meet0(7);t&&0===t.ind&&(t.ind=1.78125,t.ctx.clr=!1,$R.save())}let o=this.meet0(6);o&&(0===o.wr&&1===o.ws?(o.wx||o.wy?(this.x=o.wx,this.y=o.wy):($R._r.x||$R._r.y)&&(this.x=$R._r.x,this.y=$R._r.y),this.calcBox(),this.moved=!0):$R.warp(o.wr,o.ws,o.wx,o.wy)),this.spr!==this.pSpr&&(s=!0,this.pSpr=this.spr),(this.moved||s)&&(this.ctx.clr=!1)}kill(t=!1){this.colO.for(t=>{t&&(t.colS[0]=3,t.colO[0]=null)}),Au.play("dth");let s=new Core.ObjRun(0,400,304,11,$R._r.sprGO);Object.assign(s,$R._r.bobj.gov),s.cm=0,s.init(!0),s.draw=s.dGUI,s.ly.add(s),$R.addDth(),$R.player=null,this.ctx.clr=!1}draw(){let t=this.ctx;switch(this.gravDir){case 270:t.setTransform(this.scx,0,0,this.scy,this.x-t.vX,this.y-t.vY);break;case 90:t.setTransform(this.scx,0,0,-this.scy,this.x-t.vX,this.y-t.vY);break;case 0:t.setTransform(0,-this.scx,this.scy,0,this.x-t.vX,this.y-t.vY);break;case 180:t.setTransform(0,this.scx,-this.scy,0,this.x-t.vX,this.y-t.vY)}t.drawImage(this.spr[this.ind<<0],-this.ox,-this.oy),t.reset=!1}},Core.ObjBlt=class extends Core.Obj{constructor(t,s,h,i){super(t+.5<<0,s+.5<<0),this.des=40,this.spr=Res.spr.blt,this.ctx=$R.L[7].dyn,this.scx=h<0?-h:h,this.scy=this.scx,this.w=this.scx*this.spr.w+.5<<0,this.h=this.scy*this.spr.h+.5<<0;let e=this.w>>1,r=this.h>>1;switch(this.B=[t-e,s-r,t-e+this.w,s-r+this.h],$R.Col[1].obj.push(this),this.moved=!0,i){case 270:case 90:this.hspd=16*h<<0;break;case 0:this.vspd=16*-h<<0;break;case 180:this.vspd=16*h<<0}}meet(t){return $R.Col[t].meet(this,0,0,this.B[0],this.B[1],this.B[2],this.B[3])}step(){(this.meet(2)||this.meet(55)||this.meet(42))&&(this.des=0)}move(){this.B[0]+=this.hspd,this.B[1]+=this.vspd,this.B[2]+=this.hspd,this.B[3]+=this.vspd,this.V[0]=this.V[4]=this.B[0],this.V[1]=this.V[3]=this.B[1],this.V[2]=this.V[6]=this.B[2],this.V[5]=this.V[7]=this.B[3],this.ind=1-this.ind,this.des--,this.ctx.clr=!1}draw(){this.ctx.reset||this.ctx.resetC(),this.ctx.drawImage(this.spr[this.ind],this.B[0],this.B[1],this.w,this.h)}},Core.ObjPtc=class{constructor(t,s,h,i=7){this.x=t,this.y=s,this.spr=h,this.ind=0,this.w=h.w,this.h=h.h,this.angH=this.w>>1,this.angV=this.h>>1,this.ctx=$R.L[i].dyn,this._des=!1,$R.L[i].eff(this),this.al=1,this.scx=1,this.scy=1,this.ang=0,this.aspd=.1,this.xspd=0,this.yspd=0,this.hspd=0,this.vspd=0,this.grav=0,this.rot=0,this.dSpr=this.dSprN}init(){let t=1!==this.scx||1!==this.scy||this.xspd||this.yspd;this.ang||this.rot?this.dSpr=t?this.dSprEx:this.dSprAng:t&&(this.dSpr=this.dSprSc)}dSprN(t,s,h){t.reset||t.resetC(),t.drawImage(s[h],this.x-this.angH,this.y-this.angV)}dSprSc(t,s,h){let i=this.scx,e=this.scy;t.reset||t.resetC(),(Math.abs(i)<1||Math.abs(e)<1)&&(t.imageSmoothingEnabled=!0),t.drawImage(s[h],this.x-this.angH*i,this.y-this.angV*e,this.w*i,this.h*e),t.imageSmoothingEnabled&&(t.imageSmoothingEnabled=!1)}dSprAng(t,s,h){let i=this.ang*Math.DR,e=Math.cos(i),r=Math.sin(i);t.setTransform(e,-r,r,e,this.x-t.vX,this.y-t.vY),t.drawImage(s[h],-this.angH,-this.angV),t.reset=!1}dSprEx(t,s,h){let i=this.ang*Math.DR,e=Math.cos(i),r=Math.sin(i),a=this.scx,l=this.scy;(Math.abs(a)<1||Math.abs(l)<1)&&(t.imageSmoothingEnabled=!0),t.setTransform(e*a,-r*a,r*l,e*l,this.x-t.vX,this.y-t.vY),t.drawImage(s[h],-this.angH,-this.angV),t.imageSmoothingEnabled&&(t.imageSmoothingEnabled=!1),t.reset=!1}move(){this.vspd+=this.grav,this.x+=this.hspd,this.y+=this.vspd,this.al-=this.aspd,this.scx+=this.xspd,this.scy+=this.yspd,this.ang+=this.rot,(this.al<=0||this.scx<=0||this.scy<=0)&&(this._des=!0)}draw(){this.al<1&&(this.ctx.globalAlpha=this.al),this.dSpr(this.ctx,this.spr,this.ind),this.al<1&&(this.ctx.globalAlpha=1)}},Core.ObjSha=class extends Core.ObjPtc{constructor(t,s,h,i=7){super(t,s,h[0],i),this.spr=h,this.draw=Core.Obj.prototype.dNormal}static from(t){if(0===t.al||11!==t.obj&&t.hd||11===t.obj&&t.hd&&!t.lso)return;let s=new Core.ObjSha(0,0,t.spr);if(s.ind=t.ind<<0,s.scx=t.scx,s.scy=t.scy,s.ang=t.ang,s.draw=t.draw,t.ang){let h=t.scx,i=t.scy,e=t.x+(t.angH-t.spr[0].x)*h,r=t.y+(t.angV-t.spr[0].y)*i,a=t.ang*Math.DR,l=Math.cos(a),o=Math.sin(a);s.x=e+l*h*(s.angH-t.angH)+o*h*(s.angV-t.angV),s.y=r-o*i*(s.angH-t.angH)+l*i*(s.angV-t.angV)}else s.x=t.x+(s.angH-t.spr[0].x)*t.scx,s.y=t.y+(s.angV-t.spr[0].y)*t.scy;return t.tile?s.tile=t.tile:11===t.obj?(s.lso=t.lso,s.h=t.h):22===t.obj&&(s.len=t.len),s}};