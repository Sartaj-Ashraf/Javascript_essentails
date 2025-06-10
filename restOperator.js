// Rest Operator Concept
// ======================

// The rest operator is a syntax feature in JavaScript that allows us to represent an indefinite number of arguments as an array. It is used to unpack values from an array and assign them to variables.

// Syntax
// ------
// function myFunction(a, b, ...args) {
//     // Do something with a, b and args
// }

// Example
// -------
const fruits = ["apple", "banana", "orange"];

const [name, ...restOfFruits] = fruits;
console.log(name, restOfFruits);
const spacificFruit = restOfFruits.find((fruit) => fruit === "orange");

console.log(spacificFruit);

const person = {
  name: "Sartaj",
  age: 20,
  position: "developer",
};
const { name: personName, ...restOfPerson } = person;
console.log(personName, restOfPerson);

const getPersonAverageAge = (name, ...scores) => {
  const average =
    scores.reduce((total, score) => {
      return (total += score);
    }, 0) / scores.length;
  return average;
};

const dummyScores = {
  name: "Sartaj",
  scores: [20, 30, 40, 50],
};

console.log(getPersonAverageAge(dummyScores.name,...dummyScores.scores));

// The rest operator is useful when we want to define a function that takes an indefinite number of arguments. It is also useful when we want to create a function that takes an array of values and unpacks them into separate variables.

// This concept is useful when working with APIs or any other data source that returns an array of values.

// This concept is also useful when working with functions that return an array of values.
