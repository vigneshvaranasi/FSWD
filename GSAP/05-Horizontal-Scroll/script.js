gsap.from("#page1 h1",{
    opacity:0,
    y:-20,
    duration:2,
    delay:1,
})
gsap.from("#page3 h1",{
    opacity:0,
    y:-20,
    duration:2,
    delay:1,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        // markers:true,
        start:"top 10%",
    }
})
gsap.to("#page2 h2",{
    transform:"translateX(-590%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:1,
        pin:true,
    }
})

