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
                return "draw";
            
            case "paper":
                console.log("You lose! Paper beats Rock");
                return "loser";

            case "scissors":
                console.log("You win! Rock beats Scissors.");
                return "winner";
        } 
    }

    if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                console.log("You win! Paper beats Rock");
                return "winner";
            
            case "paper":
                console.log("It's a draw.")
                return "draw";

            case "scissors":
                console.log("You lose! Scissors beats Paper");
                return "loser";
        } 
    }

    if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock":
                console.log("You lose! Rock beats Scissors");
                return "loser";

            case "paper":
                console.log("You win! Scissors beats paper.");
                return "winner";

            case "scissors":
                console.log("It's a draw.");
                return "draw";
        } 
    } 
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 3; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        switch(result) {
            case "winner":
                humanScore++;
                break;

            case "loser":
                computerScore++;
                break;

            case "draw":
                break;
        }
    }
}

playGame();