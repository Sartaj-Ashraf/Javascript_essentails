// Array.from() is a method that creates a new array from an array-like or iterable object.
// It takes two arguments, the first is the array-like or iterable object and the second is a map function that is called on each element of the array.
// The map function takes two arguments, the first is the value of the element and the second is the index of the element.

// In this example, we are going to create a new array from a string.
const course = "Sartaj Ashraf";

console.log(Array.from(course));

// We can also use Array.from() to create an array of a certain length.
// In this example, we are going to create an array of 120 elements.
const items = Array.from({ length: 120 }, (_, index) => {
  // The map function is called on each element of the array and it takes two arguments, the first is the value of the element and the second is the index of the element.
  // In this case, we are going to return the index of the element.
  return index;
});

// We can also use Array.from() to create an array of arrays.
// In this example, we are going to create an array of 14 arrays, each containing 10 elements.
const itemsPerPage = 10;
const pages = Math.ceil(items.length / itemsPerPage); //14

const newItems = Array.from({ length: pages }, (_, index) => {
  // The map function is called on each element of the array and it takes two arguments, the first is the value of the element and the second is the index of the element.
  // In this case, we are going to return a new array that is a slice of the original array.
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});

console.log(newItems);
