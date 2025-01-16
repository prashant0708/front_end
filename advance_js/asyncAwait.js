function fetchUserData() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve({name:'Prashant','pass':68975});
            
        }, 3000);
    });

}

async function getUserData() {
    try{
        console.log("Fetching the user data");
        let user = await fetchUserData()  // await always used with async and it pause the execution until the promises resolve or rejected.


        console.log("Fetching of the user data completed")
        console.log(user);
        
        

    }
    catch (error) {
        console.log("Error fetching the data",error);
        

    }
}

getUserData()