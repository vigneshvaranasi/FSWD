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
// gsap.to("#page2 h2",{
//     transform:"translateX(-170%)",
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         // markers:true,
//         start:"top 25%",
//         end:"top -100%",
//         scrub:1,
//         pin:true,
//     }
// })

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // For large screens
  "(min-width: 1024px)": function() {
    gsap.to("#page2 h2", {
      transform: "translateX(-170%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 25%",
        end: "top -100%",
        scrub: 1,
        pin: true,
      }
    });
  },

  // For Medium screens
  "(min-width: 500px)": function() {
    gsap.to("#page2 h2", {
      transform: "translateX(-200%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 24%",
        end: "top -100%",
        scrub: 1,
        pin: true,
      }
    });
    },

  // For small screens
  "(max-width: 500px)": function() {
    gsap.to("#page2 h2", {
      transform: "translateX(-180%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 35%",
        end: "top -100%",
        scrub: 1,
        pin: true,
      }
    });
  }
});


