// Filter and Find Concept
// ======================

// Filter is a method that takes an array and returns a new array, with the same number of elements as the original array, after applying a transformation to each element of the original array. The transformation is done by a callback function that takes an element of the original array as an argument and returns a new element for the new array.

// Find is a method that takes an array and returns a single value after iterating through the elements of the array. It takes a callback function that has an accumulator and a current value as arguments. The accumulator is the value that is being built up as the callback function iterates through the array. The current value is the value of the current element being processed.

// The callback function typically takes two arguments: the accumulator and the current value. The callback function should return the value that the accumulator should have after processing the current value.

// The second argument to the filter method is the initial value of the accumulator. If the initial value is not provided, the first element of the array will be used as the initial accumulator.

// The filter method will iterate through the array and call the callback function for each element in the array. The callback function should return the value that the accumulator should have after processing the current value.

// The find method will iterate through the array and call the callback function for each element in the array. The callback function should return the value that the accumulator should have after processing the current value.

// Example
// -------
const people = [
    {
        name: "Sartaj",
        age: 20,
        position: "devops"
    },
    {
        name: "Aquib",
        age: 25,
        position: "designer"
    },
    {
        name: "Shahid",
        age: 30,
        position: "developer"
    }
]

// Filter examples
// Age less than 25
const youngPeople = people.filter((person) => person.age <= 25)
console.log(youngPeople)

// Position is developer
const developers = people.filter((person) => person.position === "developer")
console.log(developers)

const locations = [
    {
        locName: "Srinagar",
        pinCode: 123456,
        state: "Jammu and Kashmir"
    },
    {
        locName: "Delhi",
        pinCode: 110001,
        state: "Delhi"
    },
    {
        locName: "Delhi",
        pinCode: 110099,
        state: "UK"
    },
    {
        locName: "Mumbai",
        pinCode: 400001,
        state: "Maharashtra"
    }
]

// Find examples
// Find a person with name "Sartaj"
const person = people.find((person) => person.name === "Sartaj")
console.log(person)

// Find a location with name "Delhi"
const location = locations.find((location) => location.locName === "Delhi")
console.log(location)

// Find a person with age 25
const randomPerson = people.find((person) => person.age === 25)
console.log(randomPerson.name)

// Find all people with age 30
const randomPerson2 = people.filter((person) => person.age === 30)
console.log(randomPerson2[0].name)
