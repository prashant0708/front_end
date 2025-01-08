Array.prototype.prashant=function (){
    return `Custom method ${this}`;
}

let myarray =[1,2,3]
console.log(myarray.prashant());

/// prashant is the method of the array prototype which is similar to standard method of array map(),filter(),push()
// this is why prashant method is accessable by the myarray 






class Vehicle {
    constructor(make,model){
        this.make=make
        this.model=model
    }
    getDetails(){
        return `Make:${this.make} Model:${this.model}`
    }
    move(){
        return 'The Vehicle is moving'
    }
    static isVehicle(obj){
        return 'This is the static method of vehicle'
    }

}


class Car extends Vehicle{
    constructor(make,model){
        super(make,model)
    }
    startEngine(){
        return 'Engine started'
    }
    move(){
        return 'The car is moving'
    }
}


