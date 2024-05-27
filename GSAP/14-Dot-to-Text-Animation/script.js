// Typewriter effect for Page 1
const words = ['Abbrev - it'];

gsap.from('#cursor', {
    opacity: 0,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true,
    delay: 0.3,
    duration: 0.4,
});


// The Animation Works only one time without repeating Infinite times
let masterTl = gsap.timeline();

words.forEach(word => {
    masterTl.to('#text', { duration: 1, text: word, ease: 'none', delay: 1 });
});