

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
/*
function getPlayerChoice() {
    let playerPrompt = prompt("What do you play?");
    if (playerPrompt.toLowerCase() === 'rock'.toLowerCase) {
        return "Rock";
    } else if (playerPrompt.toLowerCase === 'paper'.toLowerCase) {
        return "Paper";
    } else if (playerPrompt.toLowerCase === 'scissors'.toLowerCase) {
        return "Scissors";
    } else {return console.log('Invalid Choice! :c'); }
} */


//let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();


//function playGame() {
let playerScore = 0;
let computerScore = 0;
function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            return console.log('you tied', playerScore, computerScore);
        } else if (computerChoice === 'Scissors') {
            playerScore++;
            return console.log('you won', playerScore, computerScore);
        } else if (computerChoice === 'Paper') {
            computerScore++;
            return console.log('you lost', playerScore, computerScore);
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            playerScore++;
            return console.log('you won', playerScore, computerScore);
        } else if (computerChoice === 'Paper') {
            return console.log('you tied', playerScore, computerScore);
        } else if (computerChoice === 'Scissors') {
            computerScore++;
            return console.log('you lost', playerScore, computerScore);
        }

    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            computerScore++;
            return console.log('you lost', playerScore, computerScore);
        } else if (computerChoice === 'Paper') {
            playerScore++;
            return console.log('you won', playerScore, computerScore);
        } else if (computerChoice === 'Scissors') {
            return console.log('you tied', playerScore, computerScore);
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

rockButton.addEventListener("click", () => playRound('Rock', computerSelection));


paperButton.addEventListener("click", () => playRound('Paper', computerSelection));
scissorsButton.addEventListener("click",() => playRound('Scissors', computerSelection));
