const computerOption = ["rock", "paper", "scissors"];

const computerChoice = getComputerChoice();

console.log(computerChoice);

function getComputerChoice() {
    const computerChoice = computerOption[Math.floor(Math.random() * computerOption.length)];
    return computerChoice;
}