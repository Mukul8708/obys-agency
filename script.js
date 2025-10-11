function loadinganimation(){
    var tl = gsap.timeline()
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
tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    duration:0.5,
})

tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from("#t1 h1,#t2 h1,#t3 h2,#t4 h1",{
    y:120,
    stagger:0.2
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
}
loadinganimation();
cursorAnimation();