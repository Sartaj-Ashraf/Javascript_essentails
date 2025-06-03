// Filter: Returns a new array, can manipulate the size of the new array, returns based on condition

// Find: Returns a single instance, returns first match, if no match undefined

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
