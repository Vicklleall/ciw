const Home={};Home.userInit=()=>{$U.getUsername(U$,$("username"));let[e,t,a]=$U.getLv(U$.get("e")),s="??"===a?100:t/a*100,i=U$.get("a");$("level").firstChild.tx("Lv."+e),$("exp").tx(`${t}/${a}`),$("levelbar").style.background=`linear-gradient(90deg,#9cf ${s}%,#0000 ${s}%)`,i&&CIW.fetch(i.id,"UserAvatar","avatar").then(e=>$("avatar").style.background=`url(${e.d})`);let r=El("div","rl"),l=[0,,,,,],n=El("div","userInfo"),o=r.ap(El("div","avatar hover"),n);o.id="cavatar",o.onclick=()=>UI.P(64,64,"0{3f}",1).then(e=>{let t=DB.O("UserAvatar"),a=U$.get("a")?.id;t.set("d",e),U$.set("a",t),U$.save().then(t=>{$("cavatar").style.background=$("avatar").style.background=`url(${e})`,CIW.put("avatar",{id:t.get("a").id,d:e}),a&&(CIW.del("avatar",a),DB.O("UserAvatar",a).destroy())},e=>{UI.$a("0{3g}"),console.error(e)})}),n.ap($U.getUsername(U$),$U.getUID(U$.id),UI.span("0{3h} "),UI.span("0{3i} "),UI.span("0{3j}")),["0{3k}","0{23}","0{3l}","0{3m}"].for(e=>r.ap(El("div","udata",{innerHTML:`<div class='ud-n'>${e}</div><div class='ud-r'>${UI.ico("rank")}<span> --</span></div><div class='ud-s'>--</div>`})));let c=U$.get("p").get("m");if(c?.length){let e=El("div","rl"),t=U$.get("w");r.ap(UI.p("0{3n}","12px 0 8px 8px"),e),c.for((a,s)=>{let[i,r]=a.split(","),l=e.ap(El("div","medal"));l.innerHTML=UI.ico("m-"+i),l.ap(El("br"),UI.span(r,"#89a")),t&&i===t.split(",")[0]&&r===t.split(",")[1]&&css(l,{background:"var(--bgl)",borderColor:"#5af"}),l.i=s,l.onclick=function(){this.style.background?(css(this,{background:"",borderColor:""}),U$.unset("w"),U$.save()):(css($c("medal"),{background:"",borderColor:""},this.i,{background:"var(--bgl)",borderColor:"#5af"}),U$.set("w",c[this.i]),U$.save()),$U.getUsername(U$,n.firstChild),$U.getUsername(U$,$("username"))}})}else css(r.ap(UI.p("0{3n}","12px 0 8px 8px")).ap(UI.span("0{3o}","#89a")),{marginLeft:"8px"});r.set=async()=>{let e=n.ch;$U.getUsername(U$,e[0]),!$("cavatar").style.background&&i&&CIW.fetch(i.id,"UserAvatar","avatar").then(e=>$("cavatar").style.background=`url(${e.d})`),e[2].tx("0{21}"+$U.getLv(U$.get("e"))[0]),e[3].tx("0{3i} "+U$.get("p").get("b")),e[4].tx("0{3j} "+U$.get("p").get("c")),void 0===l[2]&&(l[2]=await DB.Q(DB.User).greaterThan("e",U$.get("e")).count()+1,l[3]=await DB.Q(DB.User).greaterThan("c",U$.get("c")).count()+1);let t=$c("ud-s");t[0].tx(U$.get("e")),t[0].pS().lastChild.tx(" "+l[2]),t[1].tx(U$.get("c")),t[1].pS().lastChild.tx(" "+l[3]),t[2].tx(l[0]),void 0!==l[4]&&t[2].pS().lastChild.tx(" "+l[4]),void 0!==l[1]&&(t[3].lastChild.tx(l[1]),t[3].pS().lastChild.tx(" "+l[5]))},$("profile").onclick=()=>{new UI.M(330).h("0{3p}").cb().ap(r),r.set()};let d=$("userop").ch;d[0].onclick=()=>DB.User.logOut().then(()=>LOC("login"),()=>DB.User.logOut().then(()=>LOC("login"))),d[1].onclick=()=>UI.confirm("确定要修改密码？点击确定后系统会发送验证邮件到您的邮箱").then(e=>{e.i||$U.resetPw(U$.getEmail())})},Home.fetchMsg=e=>{let t=e.get("t"),a=e.get("r"),s=e.get("a"),i=$S.get("m"+U$.id)??0,r=[0,0,0],l=0,n=[];t.for(t=>{t.e&&t.e<Date.now()?(e.remove("t",t),l++):t.t>i&&(n.push({u:U$.id,c:0,...t}),r[0]++,Date.now()-t.t>1296e6&&(e.remove("t",t),l++),App.gC("app","msgPush")&&(new UI.M).t(t.m).ap(El("p","time").tx("0{3q} "+Date.cD(new Date(t.t)))).b("0{3r}"))}),a.for(t=>{t.t>i&&(n.push({u:U$.id,c:1,...t}),r[1]++),Date.now()-t.t>6048e5&&(e.remove("r",t),l++)}),s.for(t=>{t.t>i&&(n.push({u:U$.id,c:2,...t}),r[2]++),Date.now()-t.t>6048e5&&(e.remove("a",t),l++)}),l&&e.save(),(r[0]||r[1]||r[2])&&$("notice").aC("new"),$S.set("m"+U$.id,Date.now());let o=El("div","tabBox rl");o.style.height="400px",$("notice").onclick=function(){this.rC("new"),new UI.M(640).h("0{3s}").cb().ap(o),$c("setcat",o)[0].click()},["0{3q}","0{3t}","0{3u}","0{3v}"].for(e=>o.ap(El("div","setcat").tx(e),El("div","setpage"))),UI.bindCat(o);let c=$c("setcat",o).slice(0,3),d=$c("setpage",o);d[3].style.padding="6px",r.for((e,t)=>{e&&(c[t].num=c[t].ap(El("div","msgNum").tx(Math.min(e,99))))}),d.for(e=>e.set=e=>{e&&e.num&&(e.num.remove(),delete e.num)}),d[3].ap(UI.S("0{3w}",App.gC("app","msgPush")).on(e=>App.sC("app","msgPush",e)),UI.B("0{3x}",1).on(e=>{e.set(),UI.confirm("0{3y}").then(async t=>{if(t.i)return e.set(1);try{await CIW.clear("msg"),e.set(1),UI.$a("0{3z}")}catch{UI.$a("0{40}")}})})),CIW.onready(()=>CIW.putAll("msg",n).then(()=>CIW.find("msg","u="+U$.id)).then(e=>{e.sort((e,t)=>t.t-e.t),e.for(e=>{let t=El("div","rvbox");switch(e.c){case 0:t.tx(e.m);break;case 1:case 2:let a=El("a","link").tx(e.u);a.uid=e.U,a.onclick=function(){$U.showUser(this.uid)},t.ap(a,El("span").tx("在游戏"),El("a","link").tx(e.g),El("span").tx(`中${1==e.c?"回复":"@"}了你`))}t.ap(El("div","time").tx(Date.cD(new Date(e.t)))),d[e.c].ap(t)})}))},Home.L={P(){DB.Q(DB.User).descending("e").addAscending("createdAt").select(["username","e"]).limit(20).find().then(e=>{this.ply=UI.LB([{n:"用户名",v(e){let t=El("span","username").tx(e.getUsername());return t.u=e.id,t.onclick=function(){$U.showUser(this.u)},t}},{n:"等级",v:e=>`Lv.${$U.getLv(e.get("e"))[0]}`},{n:"经验",v:e=>e.get("e"),s:(e,t)=>t.get("e")-e.get("e")}],e);let t=$c("board")[1],a=$t("div",t);for(let t=0;t<5;++t){let s=e[t],i=El("span","username").tx(s.getUsername());i.u=s.id,i.onclick=function(){$U.showUser(this.u)},a[t].ap(El("span","fr").tx(`Lv.${$U.getLv(s.get("e"))[0]}`),i)}t.firstChild.ap(El("span","fr",{innerHTML:UI.ico("acc")})).onclick=()=>new UI.M(400).h("0{q}").cb().ap(this.ply)})},M(){}};{let e=$c("navi"),t=$c("page");e.for((a,s)=>{a.onclick=()=>{e.for((e,t)=>t===s?e.aC("now"):e.rC("now")),css(t,{opacity:0,pointerEvents:"none"},s,{opacity:1,pointerEvents:""}),1===s&&LOC("play")}}),e[0].click(),setTimeout(()=>css(t,{transition:"opacity .2s"}),500),$("copyright").innerHTML=`v${$S.get("version")}&emsp;build.${$S.get("build")}<br/>`,$("make").onclick=()=>LOC("make"),CIW.onready(()=>U$&&DB.off(async()=>{Home.L.P(),Date.now()-($S.sget("lastFetch")??0)<72e5?(Home.userInit(),Home.fetchMsg(await U$.get("m").fetch())):(await U$.fetchWithInclude(["m","p"]),Home.userInit(),Home.fetchMsg(U$.get("m")),$S.sset("lastFetch",Date.now()))},()=>{Home.userInit(),Home.fetchMsg(U$.get("m"))}));const a=()=>{let e=El("div","box g-i");return e.ap(El("div","cover",{innerHTML:UI.ico("ply")}),El("p","g-name"),El("div","g-maker dots"),El("div","g-date fr")),e};t[0].ap(El("div","flex")._c(El("div","flex sec"),El("div","flex sec")),El("div","flex")._c(El("div","flex sec"),El("div","flex sec")));let s=$c("sec",t[0]);s[0].ap(El("div","top",{innerHTML:UI.ico("app")+"活动"}),El("div","box",{id:"event"})),[["0{41}","playlist",4],["0{42}","rank",9],["0{43}","rotate",9]].for((e,t)=>{let i=El("div","flex cont"),r=s[t+1],l=e[2]/3|0;if(r.ap(El("div","top",{innerHTML:UI.ico(e[1])+e[0]}),i),l>1){i.style.width=`calc(${l}00% + ${8*l}px)`;let e=r.ap(El("div","slide ab hcen"));for(let t=0;t<l;t++){let a=e.ap(El("div",t?"ib":"ib on"));a.onmouseover=()=>{$c("on",e)[0]?.rC("on"),a.aC("on"),i.style.transform=`translateX(calc(-${t/l*100}% - ${4*t}px))`}}r.style.paddingBottom="28px"}for(let t=e[2];t--;)i.ap(a())})}