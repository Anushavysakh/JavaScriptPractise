let prompt = require('prompt-sync')();
let number = prompt("Enter a number:");
let fact = 1;
for( let i = 1; i <= number; i++){
    fact *= i;
}
console.log("Factorial for " + number +" is = " + fact );