// loops

/* 
1. Write a `while` loop that calculates the sum of all the numbers from 1 to 5 and stores the result in a variable names `sum`.
*/

let sum=0;
let i=0;
while(i<=5) {
    sum += i;
    i++;
    
}
// console.log(sum)

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in the array names `countdown`.
*/

let countdown=[]
let j = 5;

while(j>=1) {
    countdown.push(j);
    j--;
}
console.log(countdown)

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `'Stop'` 
store each tea type in an array name `teaCollection`.
*/
// teaCollection=[]
// do { tea=prompt(`Enter the tea to atop the code type "Stop`)
//     if (tea!=='Stop') {
//         teaCollection.push(tea)
        
//     }
    
// } while (tea!=='Stop');
// console.log(teaCollection);




/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable names `total`.
*/
let total=0
let c=1

do {
    total+=c;
    c++;
    
} while(c<=3);

// console.log(total);


/* 
5. Write a `for` loop that multiplies each element in the array `[2,4,6]` by 2 and stores the result in a new array 

*/

let num1=[2,4,6]
let num2=[]
for (let l = 0; l < num1.length; l++) {
    num2.push(num1[l]*2)
    
}

// console.log(num2);




/*
6. Write a `for` loop that lists all the cities in the array `["Paris","New York","Tokyo","London"]` and stores
 each city in a array named `Citylist`.

 */
let cities=["Paris","New York","Tokyo","London"]

let cityList=[];

for (let k = 0; k < cities.length; k++) {
    const element = cities[k];
    cityList.push(element);
    
}
console.log(cityList)

