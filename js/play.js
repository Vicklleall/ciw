{let a=$("R"),e=El("div");e.id="page",a.ap(El("h2").tx("Cloud I Wanna")),[["game","0{v}"],["rank","0{cy}"],["review","0{cz}"],["timer","计时器"]].for((i,l)=>{let t=a.ap(El("div","cat ib")),c=El("div","page ib");t.innerHTML=UI.ico(i[0]),t.onclick=()=>{css($c("cat"),{background:""},l,{background:"#5afc"}),e.style.transform=`translateX(-${25*l}%)`},e.ap(c).ap(El("h3").tx(i[1]))}),a.ap(e)}