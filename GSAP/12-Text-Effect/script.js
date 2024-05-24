let tl = gsap.timeline()

tl.from('#page1 h1',{
    duration: 1,
    opacity: 0,
    delay: 0.5
})
tl.to('#page1 h1 .letter-a',{
    duration: 1,
    y: 20,
    opacity: 0,
    delay: 0.1,
    text:"",
})
tl.to('#page1 h1 .letter-e',{
    duration: 1,
    y: 200,
    opacity: 0,
    delay: 0.5,
    text:"",
})
tl.to('#page1 h1 .dash',{
    duration: 1,
    text:" - ",
    y: 200,
    delay: 0.5
})
