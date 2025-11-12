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

    const results = document.querySelector("#results");
    const buttons = document.querySelectorAll(".option");

    function clicked(e) {
        console.log(e.target.id);
        const output = playRound(e.target.id, getComputerChoice());

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

        if (humanScore >= 5) {
            results.textContent = "Score limit reached, you are the winner!";
            buttons.forEach((button) => {
                button.removeEventListener("click", clicked);
            })
        } else if (computerScore >= 5) {
            results.textContent = "Score limit reached, you lost!";
            buttons.forEach((button) => {
                button.removeEventListener("click", clicked);
            })
        }
    }
    
    
    buttons.forEach((button) => {
        button.addEventListener("click", clicked);
    })
}

playGame();