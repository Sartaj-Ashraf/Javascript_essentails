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
// users values from the original array when making a new one