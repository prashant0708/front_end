// clousures are function that retain the scope of variables that has been created outside of it.

function outer() {
    let counter = 0;
    return function inner () {
        counter ++
        return counter
    }
}

let incremental = outer();

console.log(incremental());
console.log(incremental());
console.log(incremental());
console.log(incremental());
