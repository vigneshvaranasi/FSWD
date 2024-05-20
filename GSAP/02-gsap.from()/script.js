gsap.from("h2", {
    // color: "red",
    opacity: 0,
    y:30,
    duration: 1,
    delay:1,
    // Diaplaying the stagger effect
    stagger:1,
    // Reversing the stagger effect
    // stagger:-1,
})
gsap.from("h4", {
    fontSize: "4rem",
    duration: 1,
})
gsap.from("#box1",{
    opacity: 0,
    duration:2,
    x: 300,
})
gsap.from("#box2",{
    duration:2,
    y:-210,
    borderRadius: "50%",
    delay: 2,
    scale: 0.5,
})