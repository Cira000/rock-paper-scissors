//Computer's choce

function getComputerChoice() {
    let computersChoices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * computersChoices.length);
    return computersChoices[randomChoice];
}

//Computer's choice


//Human's choice

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    return choice;
}

//Human's choice


//singe round

function playRound(getHumanChoice, getComputerChoice){
    if(getHumanChoice === getComputerChoice){
        return "It's a tie!";
    } else if(
        (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
        (getHumanChoice === "paper" && getComputerChoice === "rock") ||
        (getHumanChoice === "scissors" && getComputerChoice === "paper")
    ) { 
        return "Round Won!";
    } else{
        return "Round Lost!";
    }
}
//single round


//scores

let humanScore = 0;
let computerScore = 0;
let score = `-------User ${humanScore}   -------   Computer ${computerScore}------`;

//scores


//game

function playGame(){
    let human = getHumanChoice();
    let computer = getComputerChoice();
    
    console.log(`You chose : ${human}`);
    console.log(`Computer chose : ${computer}`);

    let result = playRound(human, computer);
    console.log(result);

    if(result === "Round Won!"){
        humanScore++;
    } else if(result === "Round Lost!"){
        computerScore++;
    }

    console.log(`Score => You: ${humanScore} | Computer: ${computerScore}`);
}
//game



//full game in rounds 

function fullGame() {
    playGame();
    for(let i = 1; i < 5; i++){
        playGame();
    }

    console.log("------ Final Score ------");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("It's a tie!");
    }
}  
fullGame();