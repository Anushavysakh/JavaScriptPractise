prompt = require('prompt-sync')();

let maximumResult = 0;
let minimumResult; 

let a = prompt("Enter a value: ");
let b = prompt("Enter b value: ");
let c = prompt("Enter c value: ");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);


let operation1 = a + b * c;
let operation2 = c + a / b;
let operation3 = a % b + c;
let operation4 = a * b + c;

console.log("operation1 a+b*c = "+operation1)
console.log("operation2 c+a/b = "+operation2)
console.log("operation3 a%b+c = "+operation3)
console.log("operation2 a*b+c = "+operation4)

if (operation1 < operation2 && operation1 < operation3 && operation1 < operation4) {
    minimumResult = operation1;
}
else if (operation2 < operation1 && operation2 < operation3 && operation2 < operation4) {
    mminimumResult = operation2;
}
else if (operation3 < operation1 && operation3 < operation2 && operation3 < operation4) {
    minimumResult = operation3;
}
else {
    minimumResult = operation4;
}

if (operation1 > operation2 && operation1 > operation3 && operation1 > operation4) {
   maximumResult = operation1;
}
else if (operation2 > operation1 && operation2 > operation3 && operation2 > operation4) {
    maximumResult = operation2;
}
else if (operation3 > operation1 && operation3 > operation2 && operation3 > operation4) {
    maximumResult = operation3;
}
else {
    maximumResult = operation4;
}
console.log("Maximum = " + maximumResult);
console.log("Minimum = " + minimumResult);