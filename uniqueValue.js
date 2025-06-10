// Unique Values Concept
// =====================

// Unique values is a concept in which you remove all duplicate values from an array. It is useful when you want to get all the unique values from an array.

// Syntax
// ------
// const uniqueValues = [...new Set(array.map(item => item.value))]

// Example
// -------
const menu = [
  { name: "Sartaj", category: "breakfast" },
  { name: "Aquib", category: "lunch" },
  { name: "Shahid", category: "dinner" },
  { name: "Raqeeb", category: "breakfast" },
];

const category = ["category", ...new Set(menu.map((item) => item.category))];
console.log(category);

