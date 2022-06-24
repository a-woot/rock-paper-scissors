function computerPlay(items) {
    var items = ['rock', 'paper', 'scissors'];
    /*var randomItem =  myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem; */
    return items[Math.floor(Math.random()*items.length)];
    console.log(computerPlay(items));
}
let playerScore = 0;
let compScore = 0;
function playRound(playerSelection, computerSelection) {
    /*let playerSelection = (prompt("Please select rock, paper or scissors "));
    if(playerSelection == "rock") && (computerSelection == "paper"){ 
        return "Computer won"
    }
    */


   if (playerSelection == computerSelection) {
    return "Tie, no one wins"
   }
   else if ((playerSelection == "paper" && computerSelection === "scissors")|| 
   (playerSelection == "scissors" && computerSelection === "rock")
   || (playerSelection == "rock" && computerSelection === "paper")) {
    return "You lose"}
   

   else if ((playerSelection == "rock" && computerSelection === "scissors") || (playerSelection == "paper" && computerSelection === "rock")
   || (playerSelection == "scissors" && computerSelection === "paper"))  {
    return "You win!";
    playerScore = ++playerScore;
    return playerScore;
   }

   
 
    console.log(playerScore);
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {

    for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection)
    }

}