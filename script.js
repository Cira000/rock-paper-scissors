//Here is script to get computer's choce

let computersChoices = ["rock", "paper", "scissors"];
function getRandomChoice() {
    const randomChoice = Math.floor(Math.random() * computersChoices.length);
    return computersChoices[randomChoice];
}
const choiceComputer = getRandomChoice();

//End of script for computer's choice

//Script for human's choice
let choiceHuman = prompt("Rock, Paper or Scissors?");
console.log(choiceHuman);