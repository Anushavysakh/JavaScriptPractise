const prompt = require('prompt-sync')();
let number = prompt('Enter a numeber :');
console.log(number);
number = parseInt(number);

switch(number){
    case 1 :
        console.log(number + " in words ONE");
        break;

    case 2 :
        console.log(number + " in words TWO");
        break;

    case 3 :
        console.log(number + " in words THREE");
        break;
    
    case 4 :
        console.log(number + " in words FOUR");
        break;

    case 5 :
        console.log(number + " in words FIVE"); 
        break;
       
    case 6 :
        console.log(number + " in words SIX");
        break;

    case 7 :
        console.log(number + " in words SEVEN");
        break;

    case 8 :
        console.log(number + " in words EIGHT"); 
        break;
   
    case 9 :
        console.log(number + " in words NINE");
        break;

    default :
        console.log("Not a single digit!!!");    
        break;

    }