/*
1. Write a `for` loop that loops through the array ["green tea","black tea","chai","oolong tea"]`
and stops the loop when it finds `"Chai"`.
store all teas before `"chai"` in a new array named `Selected Teas`.
*/

let teaType=['green tea','black tea','chai','oolong tea']
let selectedTeas=[]

for (let i = 0; i < teaType.length; i++) {
    if (teaType[i]=='Chai' || teaType[i]=='chai') {
        break
        
    }
    selectedTeas.push(teaType[i])

}
// console.log(selectedTeas);




/*
2. Write a `for` loop that loops through the array ["Landon","New York","Paris","Berlin"] and skips `"Paris"` Store the other cities in a
new array named `VisitedCities`.
*/
let cities=["Landon","New York","Paris","Berlin"]
let VisitedCities=[]
for (let i=0; i<cities.length;i++){
    if (cities[i]==='Paris'){
    continue
    }
    VisitedCities.push(cities[i])
    }

// console.log(VisitedCities);




/*
3. Write a `for-of` loop to iterate through the array [1,2,3,4,5] and stop when the number `4` is found.
store the numbers before `4` in an array named `smallNumbers`.
*/

let num1=[1,2,3,4,5]
let smallNumbers=[]

for (const num of num1) {
    if (num===4) {
        break
        
    }
    smallNumbers.push(num)
    
}
// console.log(smallNumbers);


/* 
4. Write a `for-of` loop to iterate through the array ["Chai","green tea","hebral tea","black tea"]
and skip the `"herbal tea"`. Store the other teas in a new array named `preferredTeas`.
*/

let TeaType=["Chai","green tea","herbal tea","black tea"]
let preferredTeas=[]
for (const tea of TeaType) {
    if (tea==='herbal tea') {
        continue
        
    }
    preferredTeas.push(tea) 
}
// console.log(
//     preferredTeas
// );



/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/

let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

let newcityPopulations={}

for (const key in citiesPopulation) {
    if (key==='Berlin') {
        break
        
    }
    newcityPopulations[key]=citiesPopulation[key]  
}
// console.log(newcityPopulations);




/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};

*/
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
let largeCities={}
for (const key in worldCities) {
    if (worldCities[key]>3000000) {
        largeCities[key]=worldCities[key]
        
    }
   
    
}
// console.log(largeCities);



let myteaType = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

myteaType.forEach(function(tea) {
    if (tea === "chai") {
        return; // Stops further iterations but doesn't break the loop
    }
    availableTeas.push(tea);
});

// console.log(availableTeas); // ["earl grey", "green tea"]





/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/

let mycities=["Berlin", "Tokyo", "Sydney", "Paris"]
let traveledCities=[]

mycities.forEach(function(city) {
    if (city=='Sydney') {
        return
        
    }
    traveledCities.push(city)
    
});
// console.log(traveledCities);





/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/

let number=[2,5,7,9]
let doubledNumbers=[]
for (let i = 0; i < number.length; i++) {
    if (number[i]==7) {
        continue
        
    }
    doubledNumbers.push(number[i]*2)
    
}
// console.log(doubledNumbers);




/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let teaTypes=["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas=[]




for (const tea of teaTypes) {
    if (tea.length >10) {
        continue
        
    }
    shortTeas.push(tea)
}
console.log(shortTeas);


