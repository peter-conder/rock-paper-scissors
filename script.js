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
