    /**Many problems with this code rn
     * I still need to display the result of the game to the div under the buttons.
         * span element is not updating when I click the buttons.
         * Right now all that needs to be happening is that the span has to update according to what the player and the computer played. Don't worry about score for now.
     * I need to have the score update
*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);


    if (0 <= randomNumber && randomNumber <= 33) {
        return "Rock"; 
    } else if (34 <= randomNumber && randomNumber <= 66) {
        return "Paper"; 
    } else {
        return "Scissors";
    }

};


//let computerSelection = getComputerChoice();

let playerScore = 0;
let computerScore = 0;
let resultDisplay;
document.getElementById("playerDisplay").textContent = playerScore;
document.getElementById("computerDisplay").textContent = computerScore;

let gameResult = document.getElementById("resultDisplay");

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') {
        return gameResult.textContent = "tie";
        } else if (computerChoice === 'Scissors') {
            playerScore++;
            return gameResult.textContent = "win";
        } else if (computerChoice === 'Paper') {
            computerScore++;
            return gameResult.textContent = "loss";
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            playerScore++;
            return gameResult.textContent = "win";
        } else if (computerChoice === 'Paper') {
            gameResult.textContent = "tie";
        } else if (computerChoice === 'Scissors') {
            computerScore++;
            return gameResult.textContent = "loss";
        }

    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            computerScore++;
            return gameResult.textContent = "loss";
        } else if (computerChoice === 'Paper') {
            playerScore++;
            return gameResult.textContent = "win";
        } else if (computerChoice === 'Scissors') {
            return gameResult.textContent = "tie";
        }
     }
     
//playRound(playerSelection, computerSelection);

/*computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
playRound(playerSelection, computerSelection);

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
playRound(playerSelection, computerSelection);

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
playRound(playerSelection, computerSelection);

computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();
playRound(playerSelection, computerSelection);
    }
*/
//playGame();
    }



let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => playRound('Rock', getComputerChoice()));


paperButton.addEventListener("click", () => playRound('Paper', getComputerChoice()));
scissorsButton.addEventListener("click",() => playRound('Scissors', getComputerChoice()));
