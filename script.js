let humanScore = 0;
let computerScore = 0;


/* use random numbers to determine strings
    GENERATE random number as a *random*
    MULTIPLY by 100
        IF *random*:
            is zero to 33: set computerChoice as Rock
                means 0 <= randomNumber <= 33
            is 34 to 66: set computerChoice as Paper
            is 67 to 100: set computerChoice as Scissors   */

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);

    let computerChoice;

    if (0 <= randomNumber && randomNumber <= 33) {
        let computerChoice = "Rock";
        return console.log(computerChoice); 
    } else if (34 <= randomNumber && randomNumber <= 66) {
        let computerChoice = "Paper";
        return console.log(computerChoice); 
    } else {
        let computerChoice = "Scissors";
        return console.log(computerChoice);
    }

};
//So currently this function works perfectly. Right now it's printing the computer's choice to the console, whereas in the actual game I'm going to have to take that variable and input it into more functions.

getComputerChoice();


/* use a prompt to get a string. prompt input must be equal to string input.
    Ok so for this I need to have a prompt pop up, where the user can input 'Rock', 'Paper' or 'Scissors.' Then, if what they input is equal to the strings rock, paper or scissors, the playerChoice variable will change to match. I think the easiest way to do this is to set up a simple if-else if-else statement.
        PROMPT user
        IF prompt:
            is 'Rock': playerChoice = Rock
            is 'Scissors': playerCHoice = Scissors
            is 'Paper': playerChoice = Paper

*/

function getPlayerChoice() {
    let playerPrompt = prompt("What do you play?");
    let playerChoice;

    if (playerPrompt === 'rock') {
        let playerChoice = 'Rock';
        return console.log(playerChoice);
    } else if (playerPrompt === 'paper') {
        let playerChoice = 'Paper';
        return console.log(playerChoice);
    } else if (playerPrompt === 'scissors') {
        let playerChoice = 'Scissors';
        return console.log(playerChoice);
    } else {return console.log('Invalid Choice! :c'); }
}

getPlayerChoice();

/*
    Compare humanChoice and computerChoice and decide who wins the round

    How do I actually get this to work? let's say that everything is handled from the human's point of view. So:
        IF human plays 'Rock'
            IF bot plays Rock, result is tie
            ELSE IF bot plays Paper, result is loss
            ELSE IF bot plays Scissors, result is win
        ELSE IF human plays 'Paper'
            IF bot plays Rock, result is win
            ELSE IF bot plays Paper, result is tie
            ELSE IF bot plays Scissors, result is loss
        ELSE IF human plays 'Scissors'
            IF bot plays Rock, result is loss
            ELSE IF bot plays Paper, result is win
            ELSE IF bot plays Scissors, result is tie
        Print a string to the console
        Increment humanScore or computerScore values 
*/

function playRound(playerChoice, computerChoice) {
    //defines game logic using humanChoice and computerChoice
    let result;
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Rock') {
            let result = 'tie';
            return console.log("Tie!")
        } else if (computerChoice === 'Paper') {
            let result = 'loss';
            return console.log('You lose!');
        } else if (computerChoice === 'Scissors') {
            let result = 'win';
            return console.log('You win!');
        }
    } else if (playerChoice === 'Paper') {
        if (computerChoice === 'Rock') {
            let result = 'win';
            return console.log("You win!")
        } else if (computerChoice === 'Paper') {
            let result = 'tie';
            return console.log('Tie!');
        } else if (computerChoice === 'Scissors') {
            let result = 'lose';
            return console.log('You lose!');
        }

    } else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            let result = 'lose';
            return console.log("You lose!")
        } else if (computerChoice === 'Paper') {
            let result = 'win';
            return console.log('You win!');
        } else if (computerChoice === 'Scissors') {
            let result = 'tie';
            return console.log('Tie!');
        }

    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);