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
console.log(person2.greet());
