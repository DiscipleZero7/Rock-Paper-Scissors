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
   //
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

    const displayHumanScore = document.querySelector("#player-score");
    const displayComputerScore = document.querySelector("#computer-score");

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    const results = document.querySelector("#results");
    
    const choseRock = () => {
        const output = playRound("rock", getComputerChoice())
        console.log(output);

        switch(output) {
            case "draw":
                results.textContent = "It's a DRAW!";
                break;

            case "loser":
                computerScore++;
                displayComputerScore.textContent = computerScore;
                results.textContent = "You LOSE!";
                break;

            case "winner":
                humanScore++;
                displayHumanScore.textContent = humanScore;
                results.textContent = "You WIN!";
                break;
        }

        if (humanScore === 5) {
            results.textContent = "Score limit reached, you are the winner!";
            rockBtn.removeEventListener("click", choseRock);
        } else if (computerScore === 5) {
            results.textContent = "Score limit reached, you lost!";
            rockBtn.removeEventListener("click", choseRock);
        }
    }
 
    rockBtn.addEventListener("click", choseRock);

    paperBtn.addEventListener("click", () => {
        results.textContent = playRound("paper", getComputerChoice())
    });

    scissorsBtn.addEventListener("click", () => {
        results.textContent = playRound("scissors", getComputerChoice())
    });


}

playGame();