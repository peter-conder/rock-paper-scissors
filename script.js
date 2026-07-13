    /**Many problems with this code rn
     * I need to have the score update *dynamically*
         * update playerscore
         * make the span element display the score in real time
         * textContent = score
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

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById("playerDisplay");
const computerScoreDisplay = document.getElementById("computerDisplay");


let gameResult = document.getElementById("resultDisplay");

function playRound(playerChoice, computerChoice) {


    //ROCK CHOICE
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') { return gameResult.textContent = "tie"; } 
        else if (computerChoice === 'Scissors') {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            gameResult.textContent = "Rock beats scissors!"; 
            if (playerScore === 5) {
            alert("you won!");
            } 
        }
         else if (computerChoice === 'Paper') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            gameResult.textContent = "Paper beats rock!";
            if (computerScore === 5) { 
            alert("you lost!");
             } 
        } 

        //PAPER CHOICE
        }  else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            gameResult.textContent = "Paper beats rock!";
            if (playerScore === 5) {
            alert("you won!"); 
            }
        } else if (computerChoice === 'Paper') {
            gameResult.textContent = "tie";
        } else if (computerChoice === 'Scissors') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
             gameResult.textContent = "Scissors beats paper!"
            if (computerScore === 5) {
            alert("you lost!");
            }
        }

        //SCISSORS CHOICE

    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            gameResult.textContent = "Rock beats scissors!"; 
            if (computerScore === 5) {
            alert("you lost!"); 

            }
        } else if (computerChoice === 'Paper') {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            gameResult.textContent = "Scissors beats paper!"; 
            if (playerScore === 5) {
            alert("you won!"); 
            }
        } else if (computerChoice === 'Scissors') {
            return gameResult.textContent = "tie";
        }
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

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => playRound('Rock', getComputerChoice()));
paperButton.addEventListener("click", () => playRound('Paper', getComputerChoice()));
scissorsButton.addEventListener("click",() => playRound('Scissors', getComputerChoice()));
