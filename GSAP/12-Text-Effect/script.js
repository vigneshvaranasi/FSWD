let tl = gsap.timeline()
let t2 = gsap.timeline()

tl.from('#page1 h1',{
    duration: 1,
    opacity: 0,
    delay: 0.4,
    ease: "expo.out",
})
tl.to('#page1 h1 .letter-a',{
    duration: 1,
    y: 200,
    opacity: 0,
    delay: 0.2,
    position: "absolute",
    ease: "slow(0.7,0.7,false)",
    text: "",
})
tl.to('#page1 h1 .letter-e',{
    duration: 1,
    y: 200,
    opacity: 0,
    delay: 0.1,
    ease: "slow(0.7,0.7,false)",
    position: "absolute",
    text: "",
})
tl.to('#page1 h1 .dash',{
    duration: 0.5,
    text:" - ",
    y: 200,
    delay: 0.2,
})