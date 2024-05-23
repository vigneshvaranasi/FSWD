gsap.to("#page2 img", {
    rotate: 900,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        scrub: 1,
        pin: true,
        startTrigger: "#page2",
        endTrigger: "#page3",
        end: "bottom 100%",
    }
})

