//Read a single digit number and write the number in word

const prompt = require('prompt-sync')();
let number = prompt('Enter a single digit number:');
console.log("Entered number:"+number);

if(number ==1 ){
    console.log("Number in words : ONE");
}
else if(number == 2){
    console.log("Number in words : TWO");
}
else if(number == 3){
    console.log("Number in words : THREE");
}
else if(number == 4){
    console.log("Number in words : FOUR");
}
else if(number == 5){
    console.log("Number in words : FIVE");
}
else if(number == 6){
    console.log("Number in words : SIX");
}
else if(number == 7){
    console.log("Number in words : SEVEN");
}
else if(number == 8){
    console.log("Number in words : EIGHT");
}
else if(number == 9){
    console.log("Number in words : NINE");
}
else if(number == 0){
    console.log("Number in words : ZERO");
}
else 
{
    console.log("Not a single digit");
}