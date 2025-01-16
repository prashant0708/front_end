// how to import the function created by self
// modular coding

export function add(a,b) {
    return a+b;

}

export function subtract (a,b){
    return a-b
}

export default function multiply (a,b) {
    return a*b
}




// export not mentioned before the function and we want to export such function , we use module.export
function division(a,b){
    return a/b
}
// export the function that defined without  export.


module.exports = {
    division
  };