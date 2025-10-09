

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
    delay:1.5,
})
tl.from("#page1",{
    y:1600,
    opacity:0,
    delay:0.2,
    duration:0.5,
})

tl.to("#Loader",{
    display:"none"
})
