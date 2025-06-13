// The for-in loop is a type of loop that is used to iterate over the properties of an object.
// It is used to loop over the properties of an object and execute a block of code for each property.
// The syntax for the for-in loop is as follows:
// for (const variable in object) {
//     // code to be executed;
// }

// The variable is the name given to the property of the object that is being looped over.
// The object is the object that is being looped over.

const persons = {
    name:"Sartaj",
    age:20,
    position:"developer",
    salary:200
}

for (const person in persons) {
    console.log(person)
    console.log(persons[person])
}

// In this example, we are looping over the properties of the persons object.
// The variable "person" will take on the value of each property name in the object.
// The console.log(person) statement will print out the name of the property.
// The console.log(persons[person]) statement will print out the value of the property.

// The output of this code will be:
// name
// Sartaj
// age
// 20
// position
// developer
// salary
// 200