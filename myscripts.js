function computerPlay(items) {
    var items = ['rock', 'paper', 'scissors'];
    /*var randomItem =  myArray[Math.floor(Math.random()*myArray.length)];
    return randomItem; */
    return items[Math.floor(Math.random()*items.length)];
    console.log(computerPlay(items));
}

function playRound(playerSelection, computerSelection) {
    /*let playerSelection = (prompt("Please select rock, paper or scissors "));
    if(playerSelection == "rock") && (computerSelection == "paper"){ 
        return "Computer won"
    }
    */
   if (playerSelection == computerSelection) {
    return "Tie, no one wins"
   }

   if (playerSelection == "rock" && computerSelection === "scissors") {
    return "You win! rock beats scissors!";
   }
   if (playerSelection == "paper" && computerSelection === "scissors") {
    return "You lose! paper loses to scissors";
   }
   if (playerSelection == "scissors" && computerSelection === "rock") {
    return "You lose! scissors loses to rock";
   }
   if (playerSelection == "paper" && computerSelection === "rock") {
    return "You win! paper beats rock";
   }
   if (playerSelection == "scissors" && computerSelection === "paper") {
    return "You win! scissors beats paper";
   }
   if (playerSelection == "rock" && computerSelection === "paper") {
    return "You lose! rock loses to paper";
   } 
    
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));