function computerPlay() {
    var items = ['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random() * items.length)];
   // console.log(computerPlay(items));
}
let playerScore = 0;
let compScore = 0;

function playRound(playerSelection) {
    // added computerPlay to change computerSelection each round
    const computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return "Tie, no one wins";
    } else if ((playerSelection == "paper" && computerSelection === "scissors") ||
        (playerSelection == "scissors" && computerSelection === "rock") ||
        (playerSelection == "rock" && computerSelection === "paper")) {
        compScore = compScore + 1;
        // added text to show selections into results
        return "You lose, Your choice of " + playerSelection + " loses to " + computerSelection; 
    } else if ((playerSelection == "rock" && computerSelection === "scissors") || (playerSelection == "paper" && computerSelection === "rock") ||
        (playerSelection == "scissors" && computerSelection === "paper")) {
        playerScore = playerScore + 1;#
        // added text to show selections into results
        return "You win! Your choice of " + playerSelection + " beats " + computerSelection;
    }
    console.log(playerScore);
}

let  playerSelection = "rock";
//let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
   // loop for 5 rounds, each round prints player & computer scores and who wins
    for (let i = 0; i < 5; i++) {
        console.log (playRound(playerSelection));
        console.log("computers score :" + compScore);
        console.log("players score :" + playerScore);
        computerPlay();
    }
    
}