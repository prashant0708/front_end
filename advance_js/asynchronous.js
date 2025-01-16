// Java scripts is is a single threaded programming language.
// It means , it execute one code ata time and follow the top to bottom apparoch
// Asynchronous method is nothing but code running in parallel.
// example fetching data from the database and enabling the other part of
// of the code to run simultaneously.

let a1 = [];
function loops (){
    setTimeout(() => {
        for (let i = 0; i < 10; i++) {
            a1.push(i)};  
            console.log(a1)
    }, 3000); 
    
}
loops()

console.log("Print hello");
let arry = "This is the second code"

console.log(arry);


