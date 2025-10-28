let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
        case 0:
            return "rock";
        
        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    const answer = prompt("Rock, Paper, or Scissors?");
    return answer.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        switch(computerChoice) {
            case "rock":
                console.log("It's a draw.")
                return;
            
            case "paper":
                console.log("You lose! Paper beats Rock");
                computerScore++;
                return;

            case "scissors":
                console.log("You win! Rock beats Scissors.");
                humanScore++;
                return
        } 
    }

    if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                console.log("You win! Paper beats Rock");
                humanScore++;
                return;
            
            case "paper":
                console.log("It's a draw.")
                return;

            case "scissors":
                console.log("You lose! Scissors beats Paper");
                computerScore++;
                return;
        } 
    }

    if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock":
                console.log("You lose! Rock beats Scissors");
                computerScore++;
                return;

            case "paper":
                console.log("You win! Scissors beats paper.");
                humanScore++;
                return

            case "scissors":
                console.log("It's a draw.");
                return
        } 
    } 
}

playRound(humanSelection, computerSelection);