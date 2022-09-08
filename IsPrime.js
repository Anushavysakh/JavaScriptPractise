const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a Number : "));
let isPrime = true;

if (number === 1 || number == 0 ) {
    console.log(number+ " is not a prime");
}

else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number + " is a Prime Number");
    }
    else {
        console.log(number + " is not a Prime Number");
    }
}
else {
   console.log("Invalid Number");
}