gsap.from("#page1 .mainhead",{
    opacity:0,
    delay:1,
    duration:2,
    y:-30,
})
gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x: 400,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    }
})
gsap.from("#page2 h3",{
    opacity:0,
    duration:2,
    x: -400,
    scrollTrigger:{
        trigger:"#page2 h3",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    }
})
gsap.from("#page3 h2",{
    opacity:0,
    duration:2,
    x: 200,
    scrollTrigger:{
        trigger:"#page3 h2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        scrub:true,
    }
})
gsap.from("#page3 h3",{
    opacity:0,
    duration:2,
    x: -200,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        scrub:true,
    }
})
gsap.from("#page4 h2",{
    opacity:0,
    duration:2,
    x: -600,
    scrollTrigger:{
        trigger:"#page4 h2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
    }
})