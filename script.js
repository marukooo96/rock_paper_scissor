const computerOption = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

let playerSelection;
const options = document.querySelector('#options');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.onclick = () => {
    playerSelection = "rock";
    console.log(playerSelection);

    playRound();
}

paper.onclick = () => {
    playerSelection = "paper";
    console.log(playerSelection);

    playRound();
}

scissors.onclick = () => {
    playerSelection = "scissors";
    console.log("scissors");

    playRound();
}





// playGame();

// console.log(playerScore, computerScore);





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

function playRound() {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    // let playerChoice = getPlayerChoice();

    if (playerSelection === "rock" && computerChoice === "scissors") {
        let result = "You win! Rock beats scissors!";
        playerScore += 1;
        console.log(result);
        return result;
    } else if (playerSelection === "rock" && computerChoice === "paper") {
        let result = "You lose! Paper beats rock!";
        computerScore += 1;
        console.log(result);
        return result;
    } else if (playerSelection === "rock" && computerChoice === "rock" || playerSelection === "paper" && computerChoice === "paper" || playerSelection === "scissors" && computerChoice === "scissors") {
        let result = "Draw!";
        console.log(result);
        return result;
    } else if (playerSelection === "paper" && computerChoice === "scissors") {
        let result = "You lose! Scissors beats paper!";
        computerScore += 1;
        console.log(result);
        return result;
    } else if (playerSelection === "paper" && computerChoice === "rock") {
        let result = "You win! Paper beats rock!";
        playerScore += 1;
        console.log(result);
        return result;
    } else if (playerSelection === "scissors" && computerChoice === "paper") {
        let result = "You win! Scissors beat paper!";
        playerScore += 1;
        console.log(result);
        return result;
    } else if (playerSelection === "scissors" && computerChoice === "rock") {
        let result = "You lose! Rock beats scissors!";
        computerScore += 1;
        console.log(result);
        return result;
    }
}

function playGame() {
    for (i = 0; i < 1; i++) {
        let result = playRound();
        console.log(result);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win!")
    } else if (playerScore === computerScore) {
        console.log("Draw! Try playing again");
    } else {
        console.log("Oh no! You lose!");
    }
}