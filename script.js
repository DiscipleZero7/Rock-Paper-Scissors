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

function getHumanChoice(buttonClicked) {
    return buttonClicked.target.id;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        switch(computerChoice) {
            case "rock":
                return "draw";
            
            case "paper":
                return "loser";

            case "scissors":
                return "winner";
        } 
    }

    if (humanChoice === "paper") {
        switch(computerChoice) {
            case "rock":
                return "winner";
            
            case "paper":
                return "draw";

            case "scissors":
                return "loser";
        } 
    }

    if (humanChoice === "scissors") {
        switch(computerChoice) {
            case "rock":
                return "loser";

            case "paper":
                return "winner";

            case "scissors":
                return "draw";
        } 
    } 
}

function gameOver(humanScore, computerScore) {
    if (humanScore >= 5) {
            results.textContent = "Score limit reached, you are the winner!";
            return true;
        } else if (computerScore >= 5) {
            results.textContent = "Score limit reached, you lost!";
            return true;
        } else {
            return false;
        }
}

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    const resultsDisplay = document.querySelector("#results");
    const buttons = document.querySelectorAll(".option");

    // Adds functionality to buttons and plays out a round
    buttons.forEach((button) => {
        button.addEventListener("click", clicked);
    })

    function clicked(buttonClicked) {
        
        const humanSelection = getHumanChoice(buttonClicked);
        const computerSelection = getComputerChoice();
        const roundResults = playRound(humanSelection, computerSelection);

        switch(roundResults) {
        case "draw":
            resultsDisplay.textContent = "It's a DRAW! Try again.";
            break;

        case "loser":
            computerScore++;
            document.querySelector("#computer-score").textContent = computerScore;
            resultsDisplay.textContent = "You LOST the round!";
            break;

         case "winner":
            humanScore++;
            document.querySelector("#player-score").textContent = humanScore;
            resultsDisplay.textContent = "You WON the round!";
            break;
        }

        // Check if game should end and stops the event listeners
        if (gameOver(humanScore, computerScore)) {
            buttons.forEach((button) => {
                button.removeEventListener("click", clicked);
            })
        }
    }
}

playGame();