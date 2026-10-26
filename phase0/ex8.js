function getPatner(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Patner Found!");
        }, 2000);
    });  
}

async function findPatner(){
    console.log("Searching for a partner...");
    const result = await getPatner();
    console.log(result);
}
findPatner();