let scoreOne = document.getElementById("score-1");
let scoreTwo = document.getElementById("score-2");
let homeScore = 0;
let guestScore = 0
function scoreOnePlusOne(){
 scoreOne.innerText = homeScore += 1;
}
function scoreOnePlusTwo(){
    scoreOne.innerText = homeScore += 2;
}
function scoreOnePlusThree(){
    scoreOne.innerText = homeScore += 3;
}
function scoreTwoPlusOne(){
 scoreTwo.innerText = guestScore += 1;
}
function scoreTwoPlusTwo(){
    scoreTwo.innerText = guestScore += 2;
}
function scoreTwoPlusThree(){
    scoreTwo.innerText = guestScore += 3;
}
