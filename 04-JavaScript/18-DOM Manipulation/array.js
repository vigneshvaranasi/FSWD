let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Display the array elements
for(let i = 0; i < arr.length; i++) {
    // Create a element
    let p = document.createElement('p');
    // Add Content
    p.textContent = arr[i];
    // Append to the DOM
    document.body.appendChild(p);
}
