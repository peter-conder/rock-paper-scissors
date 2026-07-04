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