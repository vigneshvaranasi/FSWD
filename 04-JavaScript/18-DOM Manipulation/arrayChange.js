let arr = [1, 2, 3];

// Display the array elements
for(let i = 0; i < arr.length; i++) {
    // Create a element
    let p = document.createElement('p');
    // Add Content
    p.textContent = arr[i];
    // Append to the DOM
    document.body.appendChild(p);
}

// Click to add a New Element
function addElement() {
    // Create a element
    let p = document.createElement('p');
    // Add Content
    p.textContent = arr[arr.length - 1] + 1;
    // Append to the DOM
    document.body.appendChild(p);
    // Update the array
    arr.push(arr[arr.length - 1] + 1);
}

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    addElement();
});