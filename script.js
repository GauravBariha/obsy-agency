function loadingAnimation() {
var tl = gsap.timeline();

tl.from(".line h1", {
    y:150,
    opacity: 0,
    delay: 0.3,
    duration: 0.6
})

tl.from("#line1-part1",{
    opacity: 0,
    onStart:() => {
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0;

        setInterval(() => {
            if(grow<100){
                h5timer.innerHTML = grow++
            } else {
                h5timer.innerHTML = grow
            }
        }, 35)

    }
} )

tl.to(".line h2", {
    animationName: "anime",
    opacity: 1
})

tl.to("#loader", {
    y:150,
    opacity: 0,
    delay: 4,
    duration: 0.4 
})

tl.from("#page1", {
    y:1200,
    delay: 0.2,
    opacity: 0,
    duration: 0.4,
    ease:Power4
})

tl.to("#loader", {
    display: "none" 
})

tl.from("#nav", {
    opacity: 0
})


tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1", {
    y: 120,
    stagger: 0.2
})


}

loadingAnimation()


function cursorAnimation(){
document.addEventListener("mousemove", function(dets){
    gsap.to("#crsr", {
        left: dets.x,
        top: dets.y,
    });
});

Shery.makeMagnet("#nav2 h4");
}
cursorAnimation();