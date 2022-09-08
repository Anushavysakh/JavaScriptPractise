const prompt = require('prompt-sync')();
let weekNumber = prompt('Enter a single digit number:');
console.log("Entered number:"+weekNumber);

if(weekNumber == 1){
    console.log("Day Of The Week : SUNDAY");
}
else if(weekNumber == 2){
   console.log("Day Of The Week : MONDAY");
}
else if(weekNumber == 3){
    console.log("Day Of The Week : TUESDAY");
}
else if(weekNumber == 4){
    console.log("Day Of The Week : WEDNESDAY");
}
else if(weekNumber == 5){
    console.log("Day Of The Week : THURSDAY");
}
else if(weekNumber == 6){
    console.log("Day Of The Week : FRIDAY");
}
else if(weekNumber == 7){
    console.log("Day Of The Week : SATURDAY");
}
else 
    console.log("Invalid Week Number");

