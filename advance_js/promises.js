// Promise is an object that represent the completion or failure of asynchronous operation and its resulting values.
// This object provide the cleaner and more readable way of asynchronous code than traditional callback method

// Defining the Promise
function fetchData(){
    return new Promise((resolve,reject) => {
        let success=true;
        if (success) {
            resolve("Data fetched successfully");
            
        }
        else {
            reject("Data not fetched");
        };
    })

}

// calling the promises
fetchData()
.then((data) => {
    // console.log(data);
    return data
    
})
.then((value) => {     //second then return undefined if first then does not return anything this is called chaining. 
   console.log(value);
   return value.toLowerCase();
   
}
)
.catch((data) => {
    console.log(data);
    
}

)