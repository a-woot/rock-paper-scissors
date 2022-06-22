function computerPlay(items) {
    var items = ['rock', 'paper', 'scissors'];
    /*var randomItem =  myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem; */
    return items[Math.floor(Math.random()*items.length)];
    console.log(computerPlay(items));
}

function playRound(playerSelection, computerSelection) {


    
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))