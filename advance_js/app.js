// import the created function


// default export function import process
import multiply from "./import_file.js";


// without default , export function import process
import {add,subtract} from "./import_file.js"


// import function that defined without export module.

const divOperation = require("./import_file.js")
// const mathOperations = require("./mathOperationsC.js");

console.log(add(2,2));
console.log(subtract(3,2));
console.log(multiply(3,2));

console.log(divOperation.division(4,2));



