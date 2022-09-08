const prompt = require("prompt-sync")();
let number = prompt("Enter the range : ");
let n = Math.pow(2,number);
let result = 1;

for (let index = 1; index <= n; index++) {
    if(result <= n) {
        result *= 2;
        console.log("2 ^ " + index + " = " + result);
    } else {
        break;
    }
}