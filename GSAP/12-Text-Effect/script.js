let tl = gsap.timeline()

tl.from('#page1 h1',{
    duration: 1,
    opacity: 0,
    delay: 0.5,
    ease: "expoScale(0.5,7,none)",
})

let tl2 = gsap.timeline({delay:1.5})
let tl3 = gsap.timeline({delay:1.5})
tl2.to('#page1 h1 .letter-a',{
    duration: 1,
    y: 200,
    opacity: 0,
    delay: 0.2,
    position: "absolute",
    ease: "slow(0.7,0.7,false)",
    text: "",
})
tl3.to('#page1 h1 .space1',{
    duration: 0.1,
    text:"&#10240;",
    delay: 0.1,
})
tl3.to('#page1 h1 .space1',{
    duration: 0.3,
    text:"",
    delay: 0.2,
})
tl.to('#page1 h1 .letter-e',{
    duration: 1,
    y: 200,
    opacity: 0,
    delay: 0.2,
    ease: "slow(0.7,0.7,false)",
    position: "absolute",
    text: "",
})
tl3.to('#page1 h1 .dash',{
    duration: 0.2,
    text:" - ",
    delay: 0.2,
})
