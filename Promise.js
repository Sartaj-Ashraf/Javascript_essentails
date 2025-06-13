// Promise Concept
// ===============

// A Promise is a result object that is used to handle asynchronous operations. It can be in one of three states: pending, fulfilled, or rejected.

// When a Promise is created, it is in a pending state. When the asynchronous operation is complete, the Promise is either fulfilled with a value or rejected with a reason.

// To handle the Promise, we use the then() method to specify what should happen when the Promise is fulfilled, and the catch() method to specify what should happen when the Promise is rejected.

// In this example, we create a Promise that resolves with the string "Hello World" after 2 seconds. We then log the resolved value to the console using the then() method. If there was an error, we would log the error to the console using the catch() method.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 2000);
});

promise.then((data) => console.log(data)).catch((error) => console.log(error));
