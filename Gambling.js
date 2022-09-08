let stake = 100;
let WIN = 200, LOSE = 0, count = 0, winCount =0,loseCount =0;;

while (stake < WIN && LOSE < stake) {
    let bet = Math.floor(Math.random() * 2);
    if (bet == 1) {
        stake++;
        winCount++;
    }
    else {
        stake--;
        loseCount++;
    }
    count++;
}
console.log("Number of WINs : " + winCount +  "\nNumber of LOSSES : " + loseCount + "\nTotal Bets made by gambler : " + count);
if (stake == 200) {
    console.log("Gambler Won the Match! \nBalance Amount With The Gambler = " + stake);
}
else {
    console.log("Gambler Lost the Match! \nBalance Amount With The Gambler = " + stake);
}