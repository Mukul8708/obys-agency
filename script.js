var tl = gsap.timeline()
function loadinganimation(){
    // var tl = gsap.timeline()
tl.from(".line h1",{
    y: 150,
    stagger:0.25,
    duration:0.5,
    delay:0.5
})
tl.from("#line-part1",{
    opacity:0,
    onStart: function(){
        var h5 = document.querySelector("#line-part1 h5");
var grow = 0;
setInterval(function(){
    if(grow<100){
        h5.innerHTML = grow++
    }else{
        h5.innerHTML = grow
    }
},20)
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:1,
})
tl.to("#loader",{display:"none"})
tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    duration:0.5,
})


tl.from("#nav",{
    opacity:0
})
}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
        left:dets.x,
        top:dets.y
    })
})
Shery.makeMagnet("#nav-part1 h4")
tl.from(["#T1 h1, #T2 h1, #T3 h3, #T4 h1"],{
    y:130,
    stagger:0.2
})
}


loadinganimation();
cursorAnimation();