const url = "https://api.github.com/users/sartaj-ashraf/repos?per_page=20";

// Concept: Reduce
// ===========

// Reduce is a method that takes an array and returns a single value after iterating through the elements of the array. It takes a callback function that has an accumulator and a current value as arguments. The accumulator is the value that is being built up as the callback function iterates through the array. The current value is the value of the current element being processed.

// The callback function typically takes two arguments: the accumulator and the current value. The callback function should return the value that the accumulator should have after processing the current value.

// The second argument to the reduce method is the initial value of the accumulator. If the initial value is not provided, the first element of the array will be used as the initial accumulator.

// Reduce is useful when you want to get a single value from an array.

// Example
// -------
const fetchDataFromRepos=async ()=>{
    const response =await fetch(url)
    const data = await response.json()
    const languages=data.reduce((total,repo)=>{
        const {language}=repo
        if(language){
            total[language]=(total[language]||0)+1
        }
        return total
    },{})
    console.log(languages)
}

fetchDataFromRepos()
