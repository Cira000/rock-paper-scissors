//Here is script to get computer's choce

let computersChoices = ["rock", "paper", "scissors"];
function getRandomChoice() {
    const randomChoice = Math.floor(Math.random() * computersChoices.length);
    return computersChoices[randomChoice];
}
let choiceComputer = getRandomChoice();

//End of script for computer's choice

//Script for human's choice

let humanInput = prompt("Rock, Paper or Scissors?");
let humanChoice = humanInput.toLowerCase();

//End of script for human's choice
