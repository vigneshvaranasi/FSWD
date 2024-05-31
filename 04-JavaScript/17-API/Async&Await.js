// Function to fetch posts from an API using async/await and error handling
async function getPost() {
    try {
        // Perform an asynchronous API request using the fetch function and await its completion
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Convert the response to JSON format and await its completion
        let data = await res.json();
        
        // Log the fetched data to the console
        console.log('data: ', data);
    } 
    catch(error) {
        // If an error occurs during the try block, catch it and handle it here
        console.log('error: ', error);
    }
}

// Call the function to fetch and log posts
getPost();