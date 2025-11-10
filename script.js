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

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    const results = document.querySelector("#results");
    
    rockBtn.addEventListener("click", () => {
        results.textContent = playRound("rock", getComputerChoice())
    });

    paperBtn.addEventListener("click", () => {
        results.textContent = playRound("paper", getComputerChoice())
    });

    scissorsBtn.addEventListener("click", () => {
        results.textContent = playRound("scissors", getComputerChoice())
    });


}

playGame();