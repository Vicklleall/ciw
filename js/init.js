const DB=Parse,LOC=e=>location.href="/"+e;let USER=null;if(navigator.userAgent.includes("Electron")&&navigator.userAgent.includes("CloudIWanna")){let e=sessionStorage,t=localStorage;t.getItem("HASH")?(DB.initialize("ciw-api","slnlzxkgzm9yihzpy2tsbgvhbgwuy29t"),DB.serverURL="http://212.129.134.97:1337/api",DB.O=(e,t)=>t?DB.Object.extend(e).createWithoutData(t):new DB.Object(e),DB.Q=e=>new DB.Query(e),DB.A=(e,t,n)=>{let r=new DB.ACL;return r.setPublicReadAccess(e),r.setPublicWriteAccess(t),n&&(r.setReadAccess(n,!0),r.setWriteAccess(n,!0)),r},DB.err=e=>{switch(e.code){case 209:LOC("login");break;case 119:UI.$a("0{1t}")}},DB.enableEncryptedUser(),DB.secret="Q2xvdWQgSSBXYW5uYQ",DB.off=(e,t)=>{$S.sget("offline")?setTimeout(t,1):e().catch(e=>{100===e.code?($S.sset("offline",1),t()):DB.err(e)})},USER=DB.User.current(),Object.freeze(DB),USER||"/login"===location.pathname?(Date.now()-(e.getItem("check")??0)>864e5||e.getItem("offline"))&&DB.Cloud.run("version",{v:t.getItem("HASH")}).then(n=>{t.getItem("version")==n?(e.setItem("check",Date.now()),e.removeItem("offline")):LOC("update.html")},e=>{9===e.code?LOC("update"):DB.err(e)}):LOC("login")):LOC("update")}