const $C={key:{J:16,L:37,U:38,R:39,D:40,a:65,d:68,p:80,r:82,s:83,w:87,x:88,z:90,f2:113,ml:"l",mr:"r"},LR:1,kD:[],kU:[],kO:[],kC(e){this.kU[e]&&this.kO[e]&&(this.kO[e]=!1),this.kD[e]=!1,this.kU[e]=!1},kP(e){this.kO[e]&&(this.kO[e]=!1,this.kU[e]=!0),this.kD[e]=!1},kR(e){this.kO[e]=!1,this.kU[e]=!1,this.kD[e]=!1},kCA(){for(let e in this.key)this.kC(this.key[e])},kPA(){for(let e in this.key)this.kP(this.key[e])},kRA(){for(let e in this.key)this.kR(this.key[e])},C(e){return this.kO[this.key[e]]||this.kD[this.key[e]]},P(e){return this.kD[this.key[e]]},R(e){return this.kU[this.key[e]]}};doc.onkeydown=e=>{if(9===e.keyCode)return e.preventDefault();let t=doc.activeElement.tagName;if(e.repeat||"TEXTAREA"===t||"INPUT"===t)return;const n=e.keyCode;16===n&&e.location!==$C.LR&&($C.LR=e.location,$C.kD[16]=!0),$C.kO[n]||($C.kD[n]=!0,$C.kO[n]=!0)},doc.onkeyup=e=>{$C.kU[e.keyCode]=!0,$C.kO[e.keyCode]&&($C.kO[e.keyCode]=!1)},doc.oncontextmenu=e=>e.preventDefault(),doc.onwheel=e=>{if($R&&e.ctrlKey){const t=[5,10,20,40,100];let n=t.indexOf($R.spd);$R.spd=t[Math.mM(n-Math.sign(e.wheelDelta),0,t.length-1)]}},doc.onmousedown=e=>{if($R){let t,n=doc.activeElement.tagName;if("TEXTAREA"===n||"INPUT"===n)return;if(0===e.button?t="l":2===e.button&&(t="r"),t){let n=$("screen"),o=e.x-n.left,r=e.y-n.top;o>=0&&o<800&&r>=0&&r<608&&($C.kO[t]||($C.kD[t]=!0,$C.kO[t]=!0),e.ctrlKey&&$R.dragPly(o,r))}}},doc.onmouseup=e=>{let t;0===e.button?t="l":2===e.button&&(t="r"),t&&($C.kU[t]=!0,$C.kO[t]&&($C.kO[t]=!1))},Math.PI2=2*Math.PI,Math.DR=Math.PI/180,Math.rA=9301,Math.rB=49297,Math.rC=233280,Math.randomr=function(e,t){return this.random()*(t-e)+e},Math.srandom=function(e,t){return Core.$R.rS=(Core.$R.rS*this.rA+this.rB)%this.rC,void 0===t?Core.$R.rS/this.rC*e:Core.$R.rS/this.rC*(t-e)+e},Math.comp=(e,t,n)=>0===n?e===t:1===n?e>t:2===n?e<t:3===n?e>=t:4===n?e<=t:5===n?e!==t:void 0,Object.freeze(Math);