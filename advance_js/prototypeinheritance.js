const person ={
    name : 'Prashant',
    
    }

/// prototype can be added to the function not object 

// here person is object hence we can add the greet method directly to it.
person.greet = function () {
    return `Good Morning ${this.name}`
}

console.log(person.greet());


let person1 = person
console.log( person1.greet());

// adding the prototype 

function location (name){
    this.name = name

}

location.prototype.desc = function () {
    return `${this.name} is great place to live`
}

let location1 = new location('Delhi')

console.log(location1.desc());

