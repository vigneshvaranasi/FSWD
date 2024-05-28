// const words = ['H.ello', 'H.e.llo', 'H.e.l.lo', 'H.e.l.l.o', 'H.e.l.lo', 'H.e.llo', 'H.ello', 'Hello'];

// const textElement = document.getElementById('text');
// let index = 0;

// function displayNextWord() {
//         if (index < words.length) {
//             textElement.innerHTML = words[index];
//             index++;
//             setTimeout(displayNextWord, 150);
//         }
// }

// displayNextWord();

const words = ['A.bberv - it', 'A.b.berv - it','A.b.b.erv - it','A.b.b.e.rv - it','A.b.b.e.r.v - it','A.b.b.e.r.v - i.t','A.b.b.e.r.v - it','A.b.b.e.rv - it','A.b.berv - it','A.bberv - it','Abberv - it'];
// const words = ['H.ello', 'H.e.llo', 'H.e.l.lo', 'H.e.l.l.o', 'H.e.l.lo', 'H.e.llo', 'H.ello', 'Hello'];

const textElement = document.getElementById('text');
const timeline = gsap.timeline({ repeat: 3, repeatDelay: 0 });

words.forEach((word, index) => {
    timeline.to(textElement, {
        duration: 0.01,
        onComplete: () => {
            textElement.innerHTML = word;
        }
    }).to(textElement, {
        duration: 0.15,
    });
});

timeline.play();