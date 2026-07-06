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
    let result;
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            let result = 'tie';
        } else if (computerChoice === 'Paper') {
            let result = 'loss';
        } else if (computerChoice === 'Scissors') {
            let result = 'win';
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            let result = 'win';
        } else if (computerChoice === 'Paper') {
            let result = 'tie';
        } else if (computerChoice === 'Scissors') {
            let result = 'lose';
        }

    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            let result = 'lose';
        } else if (computerChoice === 'Paper') {
            let result = 'win';
        } else if (computerChoice === 'Scissors') {
            let result = 'tie';
        }
    }

    if (result === 'win') {
        return console.log("You win!");
    } else if (result === 'lose') {
        console.log(computerScore);
        return console.log("You lose!");
    } else if (result === 'tie') {
        return console.log("You both picked the same thing. Why");
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);
