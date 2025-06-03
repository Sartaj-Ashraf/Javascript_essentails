const menu = [
  { name: "Sartaj", category: "breakfast" },
  { name: "Aquib", category: "lunch" },
  { name: "Shahid", category: "dinner" },
  { name: "Raqeeb", category: "breakfast" },
];

const category = ["category", ...new Set(menu.map((item) => item.category))];
console.log(category);


// map - get all instances of a value
// new Set - remove duplicates
// spread operator - expand values into an array
