const computerOption = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
document.getElementById("playerScore").innerHTML = playerScore;
let computerScore = 0;
document.getElementById("computerScore").innerHTML = computerScore;

const div = document.getElementById("winner");

let playerSelection;
const options = document.querySelector('#options');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', selectRock);

paper.addEventListener('click', selectPaper);

scissors.addEventListener('click', selectScissors);

const game = document.querySelector('#game');
const gameMessage = document.createElement('h1');
game.appendChild(gameMessage);






// playGame();

// console.log(playerScore, computerScore);


function selectRock() {
    playerSelection = 'Rock';
    playRound();
}


function selectPaper() {
    playerSelection = 'Paper';
    playRound();
}

function selectScissors() {
    playerSelection = 'Scissors';
}

function playAgain() {
    window.location.reload();
}


function getComputerSelection() {
    const computerSelection = computerOption[Math.floor(Math.random() * computerOption.length)];
    return computerSelection;
}

// function getPlayerChoice()  {
//     let playerChoice = prompt("What will you choose? Rock, paper or scissors?");
//     playerChoice = playerChoice.toLowerCase();  

//     if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
//         return playerChoice;
//     } else {
//         alert("You have to choose between rock, paper or scissors!");
//         return;
//     }
// }

function updateScore () {
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore == 5) {
        const message = document.createElement("h1");
        message.textContent = "Congratulations! You won the game!";
        div.appendChild(message);

        const button = document.createElement('button');
        button.textContent = 'Play again';
        button.addEventListener('click', playAgain);
        div.appendChild(button);

        rock.removeEventListener('click');
        paper.removeEventListener('click');
        scissors.removeEventListener('click');

        
        return;

    } else if (computerScore == 5) {
        const message = document.createElement("h1");
        message.textContent = "Oh no! You lost the game!";
        div.appendChild(message);

        const button = document.createElement('button');
        button.textContent = 'Play again';
        button.addEventListener('click', playAgain);
        div.appendChild(button);

        rock.removeEventListener('click', selectRock);
        paper.removeEventListener('click', selectPaper);
        scissors.removeEventListener('click', selectScissors);


        return;
    }
}

function playRound() {
    let computerSelection = getComputerSelection();
    

    gameMessage.textContent = 'You chose '+playerSelection+', Computer chose '+computerSelection+'';



    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        let result = "You win! Rock beats Scissors!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result, playerScore, computerScore;
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        let result = "You lose! Paper beats Rock!";
        computerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors") {
        let result = "Draw!";
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        let result = "You lose! Scissors beats Paper!";
        computerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        let result = "You win! Paper beats Rock!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        let result = "You win! Scissors beat Paper!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        let result = "You lose! Rock beats Scissors!";
        computerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
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