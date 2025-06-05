const url = "https://api.github.com/users/sartaj-ashraf/repos?per_page=20";

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

