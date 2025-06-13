const url = "https://jsonplaceholder.typicode.com/posts";

// This is an example of how to fetch data from an API using the fetch API.
// The fetch API is a modern way of making requests to an API. It returns a Promise that resolves with the response.
// The first .then() method is used to parse the response as JSON.
// The second .then() method is used to log the data to the console.
// The .catch() method is used to catch any errors that might occur during the request.

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// This is an example of how to fetch data from an API using async/await.
// Async/await is a syntax sugar on top of Promises. It allows us to write asynchronous code that looks like synchronous code.
// The try/catch block is used to catch any errors that might occur during the request.
const getData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();