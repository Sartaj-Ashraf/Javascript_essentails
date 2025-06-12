const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello World")
    },2000)
})

console.log(promise.then((data)=>console.log(data)).catch((error)=>console.log(error)))



