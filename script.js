const computerOption = ["rock", "paper", "scissors"];

const computerChoice = getComputerChoice();
console.log(computerChoice);

let playerChoice = getPlayerChoice();

let result = playRound(playerChoice, computerChoice);

alert(result);



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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "scissors") {
        let result = "You win! Rock beats scissors!";
        return result;
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        let result = "You lose! Paper beats rock!";
        return result;
    } else if (playerChoice === "rock" && computerChoice === "rock") {
        let result = "Draw!";
        return result;
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        let result = "You lose! Scissors beats paper!";
        return result;
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        let result = "You win! Paper beats rock!";
        return result;
    } else if (playerChoice === "paper" && computerChoice === "paper") {
        let result = "Draw!";
        return result;
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        let result = "You win! Scissors beat paper!";
        return result;
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        let result = "You lose! Rock beats scissors!";
        return result;
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
        let result = "Draw!";
        return result;
    }
}