// Spread Operator Concept
// ======================

// The spread operator is a syntax feature in JavaScript that allows us to take an array or an object and expand it into a new array or object. It is used to unpack values from an array or an object and assign them to variables.

// Syntax
// ------
// const [var1, var2, ..., varN] = array;
// const { var1, var2, ..., varN } = object;

// Example
// -------
const test_string = "some string";
const letter = [...test_string]; // ['s', 'o', 'm', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']

const boys = ["Sartaj", "Aquib", "Shahid"];
const girls = ["ABC", "bcd", "def"];

const bestFriend = "someone";

const friends = [...boys, ...girls, bestFriend]; // ["Sartaj", "Aquib", "Shahid", "ABC", "bcd", "def", "someone"]

console.log(friends[3]); // "ABC"
