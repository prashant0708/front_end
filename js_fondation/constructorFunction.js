// Constructor function is an another type of the function which is use to create similar type of object.

function Person(name,age){
    this.name=name
    age=age ///>>>>>>>>>>This keyword is used to access the instance of the object being created.if you don't use this it will not access the 
    /// argument of the instance
}

let person1=new Person('Jon',34)
// console.log(person1);// output >  Person { name: 'Jon' }

// Create the method inside the function constructor

function Person_detail(name,age){
    this.name=name
    this.age=age

    this.greet=function(){
        return `I am ${this.name} and I am ${this.age} year old`
    }
}

let person2= new Person_detail('Prashant','18')
// console.log(person2.greet());

//>>>>>>>>>> create a constructor function and its method using the prototype.

function person(first_name,last_name){
    this.first_name=first_name
    this.last_name=last_name
}

// defining a method on prototype >>>>>Prototype method is more beneficiary, It save the memory usage.

person.prototype.getfullname= function() {
    return `Complete name is ${this.first_name} ${this.last_name}`;
};

let student =  new person("David","Galduroz");

console.log(student.getfullname());

// >>>>>> create function constructor with error

function drink(type){
   
    if (!new.target) {
        throw new Error('drink must be called with new keyword');
        
        
    }
    this.type=type
}

drink.prototype.display=function(){
    return `your ${this.type} drink is ready`
}

// let tea=drink("tea")
let coffee= new drink("coffee")

// console.log(tea.display());
console.log(coffee.display());



