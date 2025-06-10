// Array Destructuring Concept
// =============================

// Array destructuring is a way to unpack values from an array, or any iterable, into separate variables.

// Syntax
// ------
// const [var1, var2, ..., varN] = array;

// Example
// -------
const fruits = ["apple", "banana", "orange"];
const friends = ["sartaj", "aquib", "shahid"];

const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);

const [friend1, friend2, friend3] = friends;
console.log(friend1, friend2, friend3);

// This concept is useful when working with APIs or any other data source that returns an array of values.