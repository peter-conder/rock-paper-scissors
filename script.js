let playerScore = 0;
let computerScore = 0;



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

function getPlayerChoice() {
    let playerPrompt = prompt("What do you play?");
    if (playerPrompt === 'rock') {
        return "Rock";
    } else if (playerPrompt === 'paper') {
        return "Paper";
    } else if (playerPrompt === 'scissors') {
        return "Scissors";
    } else {return console.log('Invalid Choice! :c'); }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            console.log('you tied');
            console.log(playerScore, computerScore);
            return 'tie';
        } else if (computerChoice === 'Scissors') {
            console.log('you won');
            console.log(playerScore, computerScore);
            playerScore++;
            return 'win';
        } else if (computerChoice === 'Paper') {
            console.log('you lost');
            computerScore++;
            console.log(playerScore, computerScore);
            return 'loss';
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            console.log('you won');
            playerScore++;
            console.log(playerScore, computerScore);
            return 'win';
        } else if (computerChoice === 'Paper') {
            console.log('you tied');
            console.log(playerScore, computerScore);
            return 'tie';
        } else if (computerChoice === 'Scissors') {
            console.log('you lost');
            computerScore++;
            console.log(playerScore, computerScore);
            return 'loss';
        }

    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            console.log('you lost');
            computerScore++;
            console.log(playerScore, computerScore);
            return 'loss';
        } else if (computerChoice === 'Paper') {
            console.log('you won');
            playerScore++;
            console.log(playerScore, computerScore);
            return 'win';
        } else if (computerChoice === 'Scissors') {
            console.log('you tied');
            console.log(playerScore, computerScore);
            return 'tie';
        }
     }
    }

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);