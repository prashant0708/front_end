/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea){
    return `Making green ${typeOfTea}`

}

let teaOrder=makeTea('Green tea')
// console.log(teaOrder);


/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like 
`"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType){
    function confirmOrder(){
        return "Order confirmed for chai"
    }
    return confirmOrder()
}

let typeOfTea=orderTea("Green Tea")
// console.log(typeOfTea);

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

const calculateTotal=(price,quantity) => price*quantity;

let totalCost=calculateTotal(50,100)
// console.log(totalCost);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/


function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}
function makesTea(x){
    return x
}



let order=processTeaOrder(makesTea)
// console.log(order);


/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/

function createTeaMaker(){
    return function(teaType){
        return `Making ${teaType} tea`
    }
}

let teaMaker=createTeaMaker()

let result=teaMaker('Orange')
// console.log(result);

// *******************************************practice
function stringToNumber(input) {
    if (typeof input=='number'){
        return Number(input)
}else {return "Not a number"}
}

function flipBoolean(input) {
    if(input==='true'){
        return 'false'
    }
    if(input==='flase'){
        return 'true'
    }
    if(input===0){
        return 'true'
    }else{return 'false'}
}

function whatAmI(input) {
    if (input ==='number')
    {
        return "I'm a number!"}else{return  "I'm a string!" }
}

function isItTruthy(input) {
    if(input===true){
        return  "It's truthy!"
    }else{return  "It's falsey!" }
}



