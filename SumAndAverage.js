//Program to read 5 Random 2 digit values, find their sum and average
let sum = 0;
console.log("5 Random 2 digit values are: ");
for(i = 1;i <= 5; i++){
    let number=Math.round(Math.random()*89+10);
    console.log(number);
   
    sum += number;
    
}
console.log("Sum="+sum);
console.log("Avereage = "+sum/5);