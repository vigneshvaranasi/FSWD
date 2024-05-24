// Typewriter effect for Page 1
const words = ['This is', 'Type Writer', 'Text Animation','Scroll For More'];

gsap.from('#cursor', {
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.3,
    duration: 0.4,
});

let masterTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

words.forEach(word => {
    masterTl.to('#text', { duration: 1, text: word, ease: 'none', delay: 1 });
});

// Typewriter effect for Page 2

const word = ['Hello']

let masterTl2 = gsap.timeline({ repeat: -1, repeatDelay: 1 });

word.forEach(letter => {
    masterTl2.to('#text1', { duration: 1, text: letter, delay: 1,});
});