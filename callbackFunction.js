// Using arrow functions
const handleName = (name, cb) => {
  const greetUser = `Hi good Morning ${name}`;
  cb(greetUser);
};

// This is a callback function that takes a value and logs it to the console after making it upper case
const makeUpperCase = (value) => {
  console.log(value.toUpperCase());
};

// This is an example of using the handleName function with the makeUpperCase callback function
handleName("Sartaj", makeUpperCase);

// This is an example of using the handleName function with an anonymous callback function
handleName("Sartaj", (something) => console.log(something,"Ashraf"));

/*
This code is an example of using callback functions. 

The handleName function takes two arguments: a name and a callback function. The callback function is called with the result of the handleName function, which is a greeting message. The callback function can then do something with this message, such as logging it to the console.

The makeUpperCase function is an example of a callback function. It takes a value and logs it to the console after making it upper case.

The first example of using the handleName function shows how to use it with the makeUpperCase callback function. The second example shows how to use it with an anonymous callback function.

This code is a good example of how to use callback functions in JavaScript. It shows how to define a callback function, how to pass it to another function, and how to use it to do something with the result of the other function.*/
