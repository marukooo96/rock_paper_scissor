const computerOption = ["rock", "paper", "scissors"];

const computerChoice = getComputerChoice();

let playerChoice = getPlayerChoice();

console.log(playerChoice);


function getComputerChoice() {
    const computerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];
    return computerChoice;
}

function getPlayerChoice()  {
    let playerChoice = prompt("What will you choose? Rock, paper or scissors?");
    playerChoice = playerChoice.toLowerCase();  

    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } else {
        alert("You have to choose between rock, paper or scissors!");
        return;
    }
}
