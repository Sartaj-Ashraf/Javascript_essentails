// Reduce Concept
// ===============

// Reduce is a method that takes an array and returns a single value after iterating through the elements of the array. It takes a callback function that has an accumulator and a current value as arguments. The accumulator is the value that is being built up as the callback function iterates through the array. The current value is the value of the current element being processed.

// The callback function typically takes two arguments: the accumulator and the current value. The callback function should return the value that the accumulator should have after processing the current value.

// The second argument to the reduce method is the initial value of the accumulator. If the initial value is not provided, the first element of the array will be used as the initial accumulator.

// The reduce method will iterate through the array and call the callback function for each element in the array. The callback function should return the value that the accumulator should have after processing the current value.

// Example
// -------
const employee = [
    {name:"Sartaj",age:20,position:"developer", salary:200},
    {name:"Aquib",age:25,position:"designer", salary:300},
    {name:"Shahid",age:30,position:"the boss", salary:400}
]

const salary= employee.reduce((total,person)=>{
    return total + person.salary
},0)

console.log(salary)