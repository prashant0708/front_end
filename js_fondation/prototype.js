let computer ={cpu:12,ram:8,hardDisk:500}
let lenovo={screen:"HD"}
let hp={mouse:"wireless"}

// let's check the computer object prototype
// console.log(computer);

// console.log(`computer`,computer.ram,computer.cpu);

// console.log(computer.__proto__);// __proto__ called the prototype which is dander method

// How this dender is useful 
let dell ={
    'screen':'led',
    __proto__:computer // dell will have all the property of computer by its proto.
}

console.log(dell.__proto__);
// another method to access the prototype.

let car={wheel:4,Staring:'Power Staring',Engine:'Turbo'}
let tesla={Driver:'AI',feature:'Auto Pilot'}

Object.setPrototypeOf(tesla,car) // setting the prototype to tesla to car and tesla will have all the property of car.
// and vise versa

console.log(tesla); // { Driver: 'AI', feature: 'Auto Pilot' } own property
console.log(tesla.__proto__);// { wheel: 4, Staring: 'Power Staring', Engine: 'Turbo' } car property

console.log(Object.getPrototypeOf(tesla)) // this is the another way to get the property of the car.
