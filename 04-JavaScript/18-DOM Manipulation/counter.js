let counter = document.querySelector('.counter');
let inc = document.querySelector('#increase');

inc.addEventListener('click', () => {   
    // Increment the counter value by converting it to a number
    let currentValue = Number(counter.textContent);
    // Update the counter text content with the incremented value
    counter.textContent = currentValue + 1;
});