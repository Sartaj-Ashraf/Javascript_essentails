// Object Destructuring Concept
// =============================

// Object destructuring is a way to unpack values from an object into separate variables.

// Syntax
// ------
// const { var1, var2, ..., varN } = object;

const sartaj = {
  firstName: "Sartaj",
  age: 20,
  position: "developer",
  salary: 200,
  relatives: {
    brother: "aquib",
  },
};

// const firstName=sartaj.firstName
// const age=sartaj.age
// const position=sartaj.position
// const salary=sartaj.salary
// const brother=sartaj.relatives.brother

// console.log(firstName,age,position,salary,brother)

// Example
// -------
const {
  firstName,
  age,
  position,
  salary,
  relatives: { brother: brotherName },
} = sartaj;

console.log(firstName, age, position, salary, brotherName);

// This concept is useful when working with APIs or any other data source that returns an object of values.

// This concept is also useful when working with functions that return an object of values.
