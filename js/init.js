const LOC=(e,t)=>{t?location.href="/"+e:(UI.bg.style.opacity=UI.menu.style.opacity=0,css($("wrap"),{opacity:0,transform:("/login"===location.pathname?"translate(-50%, -50%) ":"")+"scale(1.2)",pointerEvents:""}),setTimeout(()=>location.href="/"+e,500))};let U$=null;if(navigator.userAgent.includes("Electron")&&navigator.userAgent.includes("CloudIWanna"))if($S.get("app")){DB.initialize("ciw-api","slnlzxkgzm9yihzpy2tsbgvhbgwuy29t"),DB.serverURL=SERVER_URL+"api",DB.O=(e,t)=>t?DB.Object.extend(e).createWithoutData(t):new DB.Object(e),DB.Q=e=>new DB.Query(e),DB.A=(e,t,a)=>{let o=new DB.ACL;return o.setPublicReadAccess(e),o.setPublicWriteAccess(t),a&&(o.setReadAccess(a,!0),o.setWriteAccess(a,!0)),o},DB.err=e=>{switch(e.code){case 209:"/login"!==location.pathname&&LOC("login",1);break;case 119:UI.$a("0{1u}")}},DB.off=(e,t)=>{$S.sget("offline")?t():e().catch(e=>{100===e.code?($S.sset("offline",1),t()):DB.err(e)})};try{U$=DB.User.current()}catch{}Object.freeze(DB);const e=location.pathname;if("/update"===e||App.cV("0.13.0")||"/"===e&&$S.get("update"))App.dlupd();else{"/"===e&&(css($("wrap"),{opacity:1,transition:"none"}),$("l").tx("0{0}"));const t=()=>{if("/"===e)if(U$)try{Ipc.open(1)}catch{LOC("home",1)}else LOC("login",1)};("/"===e||Date.now()-($S.sget("lastCheck")??0)>864e5||$S.sget("offline"))&&App.chkUpd(e=>{1===e?App.dlupd():t()},e=>{switch(e.code){case 100:$S.sset("offline",1),t();break;case 209:"/login"!==location.pathname&&LOC("login",1);break;default:console.error(e)}})}}else LOC("asar",1);else LOC("userAgent",1);