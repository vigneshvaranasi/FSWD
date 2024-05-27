function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const randomString = generateRandomString(11);
console.log(randomString);

let masterTl = gsap.timeline();
gsap.registerPlugin(TextPlugin);

randomString.split('').forEach((char, index) => {
    masterTl.to('#text', { duration: 0.1, text: document.getElementById('text').innerHTML + char, ease: 'power2' });
});

masterTl.to('#text', { duration: 0.5, text: 'Abbrev - it', ease: 'power2' });