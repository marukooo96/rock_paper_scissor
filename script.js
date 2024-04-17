const computerOption = ["rock", "paper", "scissors"];

const computerChoice = getComputerChoice();

let playerChoice = prompt("What will you choose? Rock, paper or scissors?");
playerChoice = playerChoice.toLocaleLowerCase();


function getComputerChoice() {
    const computerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];
    return computerChoice;
}

