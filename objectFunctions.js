// Object Functions Concept
// ==========================
// Object functions are methods that can be used to manipulate an object. They are used to get information about an object, or to change the properties of an object.
//
// The three object functions that we will be covering are:
// 1. Object.keys()
// 2. Object.values()
// 3. Object.entries()
//
// Object.keys() is a method that takes an object and returns an array of the object's own property names.
//
// Object.values() is a method that takes an object and returns an array of the object's own property values.
//
// Object.entries() is a method that takes an object and returns an array of the object's own enumerable property [key, value] pairs.
const person={
    name:"Sartaj",
    age:20,
    position:"developer",
    salary:200
}

console.log(Object.keys(person)) // ["name", "age", "position", "salary"]
console.log(Object.values(person)) // ["Sartaj", 20, "developer", 200]
console.log(Object.entries(person)) // [["name","Sartaj"],["age",20],["position","developer"],["salary",200]]
