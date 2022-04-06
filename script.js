// 1) Variables are identifier or name space in computer memories Example: Dogs can be giving Name in order to diffenreciate them

// 2) Data types in javascript . We have 7 data types in javascript 
        // a) Strings: can be a character,letter which must be in single qoute or double qoute
        //  examples: let myName = "Angela" or let myCharacter = "A"

        // b) Numbers: Numbers in javascript can be any numbers, floats, integer
            //  exmples: let firstNumber = 8; or let secondNumber = 78.56;
        
        // c) Boolean: This Data type can be either on or off , which represent with true or false or yes or no;
            //  examples: let isGame = true;
        
        // d) Undefine


// 3) ADDITION OF TWO NUMBERS

let firstNumber = 20;
let secondNumber = 12;
let result = firstNumber + secondNumber;
console.log(result);


let x = 12;
let myName = "John Doe";


/* *************************ASSIGNMENT FOR DAY 4***************************/

// let myArray = [1, 3, 5];
// for(let i = myArray.length - 1; i >= 0; i--){
//     console.log(myArray[i]);
// }

// QUESTION 1

let first5Positive = [1, 2, 3, 4, 5];
// QUESTION 2

let myDetails = {
    firstName: "Nurudeen",
    lastName: "Oseni",
    age: 20,
    email: "oseninurudeenafolabi@yahoo.com",
}

// QUESTION 3

myDetails.hasDrivingLicense = true;
console.log(myDetails);

// QUESTION 4

delete myDetails.age;
console.log(myDetails);

// QUESTION 5

let otherDetails = {
    firstName: "Wale",
    lastName: "Cole",
    email: "walecole@yahoo.com",
}

console.log(myDetails.email === otherDetails.email);

// QUESTION 6

/*  Get the currentCostomer
    
    get the totalSpend

    make a decision

    if the total spent by the current costomer is more than 50 then
    tell the current costomer you are eligible for free shipping
    other wise charge the current costomer 10 pounds.


*/


// QUESTION 7

/* 
    check if is black friday 
    if is black friday then current customer will have discount of 20%
    in my case : (20 / 100 * 10)
    the new charges will be actual price minus the discount
    which is 10 - (20 / 100 * 10) = 8


*/

// QUESTION 8

let carDetails = {
    brand: "kia",
    model: 2018,
    licensePlate: "0001"
}

// QUESTION 9

let carsForRent = ["0001", "0002", "0003", "0004", "0005"];

// QUESTION 10

carsForRent.shift();
console.log(carsForRent);

carsForRent.pop()
console.log(carsForRent);

// QUESTION 11

console.log(carDetails.brand, carDetails.model, carDetails.licensePlate);

// QUESTION 12

let carsForSale = [];
carsForSale.push("kia", "Lexus", "Range");
console.log(carsForSale);

let totalCars = carsForRent.length + carsForSale.length;
console.log(totalCars);


// QUESTION 13

for(let i = 0; i < carsForSale.length; i++){
    console.log(carsForSale[i]);
}


























