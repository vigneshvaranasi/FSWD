gsap.to("#box1",{
    x: 600,
    duration: 5,
    //delay in seconds start action after 1 seconds
    delay:1,
})
gsap.to("#box2",{
    x: 600,
    duration: 5,
    delay:1,
    rotate:360,
})
gsap.to("#box3",{
    x: 600,
    y: 200,
    duration: 5,
    delay:1,
})
gsap.to("#box4",{
    x: 600,
    duration: 5,
    delay:1,
    borderRadius: "50%",
})
gsap.to("#box5",{
    x: 600,
    duration: 5,
    delay:1,
    backgroundColor: "blue",
})
gsap.to("#box6",{
    x: 600,
    duration: 5,
    delay:1,
    // Decrease the size of the box
    scale: 0.5,
    // Increase the size of the box
    // scale: 2,
})
gsap.to("#box7",{
    x: 600,
    duration: 5,
    delay:1,
    opacity: 0.1,
})
gsap.to("#box8",{
    x: 600,
    duration: 5,
    delay:1,
    // repeat the action 2 times
    // repeat: 2,
    // repeat the action Infinite times
    repeat: -1,
})
gsap.to("#box9",{
    x: 600,
    duration: 1,
    delay:1,
    repeat: -1,
    yoyo: true,
})