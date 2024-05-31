// Function to fetch posts from an API
function getPost() {
    // Perform an asynchronous API request using the fetch function
    fetch('https://jsonplaceholder.typicode.com/posts')
        // The response needs to be converted to JSON format
        .then(res => res.json())
        // Once the JSON conversion is done, we can handle the posts data
        .then(posts => console.log(posts))
        // print the results in a tabular format
        .then(res => console.table(res))
        // Log the raw response to the console (this is not very useful without converting to JSON)
        .then(res => console.log(res))
        // Handle any errors that occur during the fetch operation
        .catch(error => console.log('Error fetching posts:', error));
}

// Call the function to fetch and log posts
getPost();
