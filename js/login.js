$S.srm("lastFetch"),U$&&DB.User.logOut();{let e="",A=$c("tab"),t=$c("cat"),r=$c("btn"),a=$t("input",$("login")),s=$c("see"),n=$c("info");if(t[0].ap(UI.S("0{44}",App.gC("app","rmb")).on(e=>App.sC("app","rmb",e))).id="save",App.gC("app","rmb")&&$S.get("rmbUser"))try{let e=JSON.parse(atob($S.get("rmbUser")));for(let A=0;A<2;A++)a[A].value=decodeURIComponent(e[A])}catch{$S.rm("rmbUser")}A.for((e,r)=>{e.onclick=()=>{e.style.background&&(t[r]._s(),t[1-r]._h(),css(A,{background:"var(--dac)"},r,{background:""}),css($("login"),r?{height:"390px",transform:"translateY(-20px)"}:{height:"",transform:""}))}}),a.for((e,A)=>e.oninput=()=>n[A<2?0:1]._h());const i=A=>{e&&UI.check(A,"0{45}").then(A=>{if(25===A.v?.length){const t=e=>{let A=e.responseURL.slice(DB.serverURL.length);A.includes("?")?A.startsWith("/verify?")?UI.$a("0{46}"):l("0{2h}"):UI.$a("0{47}")};$M.xhr("GET",`${DB.serverURL}/apps/ciw-api/verify_email?token=${encodeURIComponent(A.v)}&username=${encodeURIComponent(e)}`).then(t,t)}else l("0{48}")})},l=e=>{(new UI.M).t(e).b("0{49}","0{6}").then(e=>{e.i||i("0{4a}")})};r[0].onclick=()=>{a[0].value.trim()&&a[1].value.trim()&&(r[0].aC("gray"),n[0]._h(),e=a[0].value,DB.User.logIn(e,a[1].value).then(async e=>{if($S.srm("offline"),App.gC("app","rmb")){let e=[];for(let A=0;A<2;A++)e[A]=encodeURIComponent(a[A].value);$S.set("rmbUser",btoa(JSON.stringify(e)))}else $S.rm("rmbUser");if(e.get("p")&&e.get("m"))LOC("home");else{e.set("p",DB.O("UserPvt")),e.set("m",DB.O("UserMsg"));try{await e.save(),LOC("home")}catch(e){n[0].tx("0{4b}")._s(),console.error(e),r[0].rC("gray")}}},A=>{let t;switch(A.code){case 101:t=A.message.startsWith("Invalid")?"0{4c}":A.message.startsWith("Your account is locked")?"0{4d}":"0{4e}";break;case 205:return UI.confirm("0{4f}").then(A=>{if(A.i)return r[0].rC("gray");const t=e=>DB.User.requestEmailVerification(e).then(()=>{i("0{25}0{4a}"),r[0].rC("gray")},e=>{let A="0{4g}";-1!==e.code&&125!==e.code&&205!==e.code||(A="0{2j}"),UI.$a(A),r[0].rC("gray")}),a=()=>UI.prompt("0{4h}").then(e=>{if(e.i)return r[0].rC("gray");$M.reg.email.test(e.v)?t(e.v):UI.$a("0{4i}").then(a)});$M.reg.email.test(e)?DB.Q(DB.User).equalTo("email",e).select("username").first().then(A=>{t(e),e=A.get("username")},e=>UI.$a("0{4g}")):a()});default:t="0{4e}"}n[0].tx(t)._s(),r[0].rC("gray")}))},a[2].onchange=function(){this.value=this.value.trim()},r[1].onclick=()=>{let t=a[2].value,s=a[3].value,l=a[4].value.trim();if(!t||!s||!l)return;if(t.length<2||t.length>20)return n[1].tx("0{4j}")._s();let o=t.match(/\d+/);if(o&&o[0]===t)return n[1].tx("0{4k}")._s();if(t.includes("@"))return n[1].tx("0{4l}")._s();if(["ciw","cloudiwanna","cloud i wanna"].includes(t.toLowerCase()))return n[1].tx("0{4m}")._s();for(let e=0;e<t.length;e++)if(t.codePointAt(e)>65535)return n[1].tx("0{4n}")._s();return s.length<6||s.length>16?n[1].tx("0{2d}")._s():$M.reg.email.test(l)?(n[1]._h(),void(new UI.M).h("0{4o}").t("0{4p}").t("-0{4q}").t("-0{4r}").t("-0{4s}").t("-0{4t}").t("-0{4u}").t("0{4v}").b("0{4w}","0{6}").then(o=>{if(o.i)return;r[1].tx("0{4x}").aC("gray");let g=new DB.User;g.setUsername(t),g.setPassword(s),g.setEmail(l),g.signUp().then(t=>{e=t.get("username"),i("0{4y}0{25}0{4a}"),r[1].tx("0{e}").rC("gray"),A[0].onclick(),a[0].value=e,a[1].value=s,n[0]._h(),DB.User.logOut()},e=>{let A;switch(e.code){case 119:A="0{4z}";break;case 202:A="0{4m}";break;case 203:A="0{50}";break;default:A="0{51}"}n[1].tx(A)._s(),r[1].tx("0{e}").rC("gray")})})):n[1].tx("0{4i}")._s()},$("fp").onclick=()=>{UI.prompt("0{4h}").then(e=>{if(!e.i)return $M.reg.email.test(e.v.trim())?void $U.resetPw(e.v.trim()):UI.$a("0{4i}").then(()=>$("fp").click())})},s.for(e=>{e.onclick=()=>{let A=e.lastChild.lastChild.href,t=e.pS();"#-see"===A.baseVal?(A.baseVal="#-unsee",t.type="password"):(A.baseVal="#-see",t.type="")}});let o=$("am").getContext("2d"),g=[],c=[],h=0,C=0,m=100/6;g.i=0;for(let e=8;e--;){let A,t=new Image;switch(t.onload=()=>createImageBitmap(t,0,0,t.width,t.height).then(A=>{g[e]=A,g.i++}),e){case 0:A="CAAAAAgAQMAAABJtOi3AAAABlBMVEX///8AAABVwtN+AAAAAnRSTlN4eM+rx8gAAABhSURBVAjXHY67DYAwEENfIEihCxuETcJmB6KgZARGYTOwnOJddB/bfHq8kHhg5IaJC2ZOWDhgZYeNCNXoKRFtEGoWShFyFYYmpC6o+Oeep97zhW+tYj0r28Nu9nUCZ3G0H0DWHU3Glh8bAAAAAElFTkSuQmCC";break;case 1:A="CAAAAAgAgMAAAAOFJJnAAAADFBMVEUAAADd3d3z8/MHAACKo35GAAAAAXRSTlMAQObYZgAAAGBJREFUGNNdxsENgCAMQFGSnnEb3IRyYQiWMiaVAyN0CVxHbTCh5R9+nvsClmtsbcVeV9zXAkBiC4/ULAJStehIpwFEpIM1vKBoBEHW6IKkAFEQecIPlIkwkCf6QHLP3wsuT0yPH30M1wAAAABJRU5ErkJggg==";break;case 2:A="BUAAAAYBAMAAADnp6t7AAAAFVBMVEUAAADzAAAIAADzW1tkAAAjIyMTExM2FZfiAAAAAXRSTlMAQObYZgAAAH1JREFUGNNtz0EOgkAMBdDJJLr/jgfAygWGngCjezUcgAXc/wrMpwUCoauX9qdpw1JSrYwnFpGXM7ZIjdj4gaRNPZKXNqlKfjM0sC2KG9vmfK9CpPWpGcWgdWeYcTAWI2EzDrb9Vh+e5u6La498eejPTIZrR/oz/xIj/eGZE5JYFlJv/HWlAAAAAElFTkSuQmCC";break;case 3:A="CAAAAAQAgMAAAAKbpXKAAAADFBMVEVfUTdJOyUqIAcAAACFK7TvAAAARElEQVQI12P4DwUMr1aBwWoYYzGM0czwMhQMnJEYK7NWrVqZBWS0JggwMiYCGY0gRgKCgUXXCwYwYGZ4AGMcgDLgzgAAyK871Y+X3ZkAAAAASUVORK5CYII=";break;case 4:A="CAAAAAgAQMAAABJtOi3AAAAA1BMVEU/mf8FzEGpAAAAAXRSTlOgljB7jgAAAAtJREFUCNdjGOQAAACgAAH4BzM6AAAAAElFTkSuQmCC";break;case 5:A="CAAAAAdBAMAAAA5sHO0AAAAJFBMVEUAAAD/91VAQED///9VVVX/+YD06Qv/AACFUFAqKipQMDD/gIBlkX6EAAAAAXRSTlMAQObYZgAAAKlJREFUGNN90DEOwjAMBdBcoYzdoOICdRfm/IUDcAEGrtCICxTB2C4eO4HCARi4HPaCXEfq95DkyZashJ1LaGiRNjQAOiBCC1BgVpgiRrkqEHVRCwQ7oiCHABG64+Q6dAQCgAAzH0YpZpJrW+xRbhr8O+xPJhuFyuT8h5yXkB8pW6i/Q+pnCx8Hr5vkbuDdS8fVwNNBOVJrx7wGVR5SXlndRGF7MRHwH/QD1uBlmfIjLBAAAAAASUVORK5CYII=";break;case 6:A="CAAAAAgCAYAAABzenr0AAAAwklEQVR4nO2WSwrAIAxEe11v6Rm8ULsKSMg/kSo4kJXoPD+d5nmuGLXWXqjIeIkxLsv4MnNPLQXovZOVBokal0FYjMcYbHEgZQCS+TII6+4piDMBJAhsBNKuwGVOgWAATtIJhECiAGUQ1DvQtA1AOQSAHAMgxbMLACDgEWZPILV7z1cwQ6QSkQohLwBAhI5dimDJmLuG9O4tZr8DSI1KCICq2VjrnMpSkGu5pCam7JfsDZN0+GgQnvkhc7xQepGrnfUBCTrp+ep8x9gAAAAASUVORK5CYII=";break;case 7:A="GQAAAAVCAYAAACwnEswAAABWklEQVR4nO3ZUQqDMAwGYJ9krxvsZRfYMQZ79Qa7wW6yNw+yg+xYjoqVGJPaNqZUiPAzEcxnGuvLmibhODXNsJWUembsALzuFzZSxIwdASlkRiKCiw2/fhVpI2ZEAhjxRd11/JuDmJGIcBOnkGTADBlCbT+ImqFrzJDH4HaDkSJmJBxfVIyCpIgZGQCG8BacECpm7GFA4Hzrx1BbECYWcbV9jmyorxVs4ssA7txPm4NhzU/bjrW4+tjw57UZJdZqboQKB+BQ30z88JQTWqgajVJrxUL4xlAjxPcxaODva6iJmg2NtZohiFE3xoYEkCGpX5OhtVYLyMUj/sbHdO36fK+yWThgwBzZ0FirxRGaKgZyEdfMAwUbSW9UhMH1IukDD1yjj6g/WLKnLbQ16kqel3qxqOGLzK7rBi4lB0L5uXVL9xPqQdLHCtDcJTXsxNprz4fapAsbJazc2n8QN+yJaht7OwAAAABJRU5ErkJggg=="}t.src=$M.p+A}const p=e=>{let A=e-C;if(Math.round(A)>=m<<0){if(8===g.i){if(o.clearRect(0,0,672,256),o.drawImage(g[7],25*(h<<0),0,25,21,320,203,25,21),h+=.2,h>=4){h-=4;let e=7*Math.random()<<0,A=(Math.random()-.5)/10;c.push({i:e,x:704,y:24+160*Math.random()<<0,a:6.2832*Math.random(),d:A<0?A-.02:A+.02,s:2+Math.random(),w:-g[e].width>>1,h:-g[e].height>>1})}for(let e=c.length;e--;){let A=c[e];if(A.x-=A.s,A.x<-24){c.splice(e,1);continue}A.a+=A.d;let t=Math.cos(A.a),r=Math.sin(A.a);o.setTransform(t,r,-r,t,A.x,A.y),o.drawImage(g[A.i],A.w,A.h)}o.resetTransform();for(let e=8*-h<<0;e<672;e+=32)o.drawImage(g[0],e,224)}A-m<=1||A-m>=m?C=e:C+=m}requestAnimationFrame(p)};p()}