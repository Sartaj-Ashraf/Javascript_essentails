// Map Concept
// ===========

// Map is a method that takes an array and returns a new array, with the same number of elements as the original array, after applying a transformation to each element of the original array. The transformation is done by a callback function that takes an element of the original array as an argument and returns a new element for the new array.

// Example
// -------
const people =[
    {name:"Sartaj",age:20,position:"developer"},
    {name:"Aquib",age:25,position:"designer"},
    {name:"Shahid",age:30,position:"the boss"}
]


const getAge = (person)=>{
    return person.age
}
const ages = people.map(getAge)


const newPeople =people.map((person)=>{
    return {
        firstName:person.name,
        oldAge:person.age + 20
    }
})  

console.log(newPeople)
// returns a new array
// Does not change the size of the original array 
// uses values from the original array when making a new one