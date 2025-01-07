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
