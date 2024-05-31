// Select the elements
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const color = document.querySelector('.color');
const body = document.querySelector('body');

// Add event listener to the elements
color.addEventListener('click', () => {
    // Change the color
    color.style.color = 'red';
});
h2.addEventListener('click', () => {
    // Change the background color
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
});
h3.addEventListener('click', () => {
    // Change the text
    h3.textContent = 'Hello World';
});

