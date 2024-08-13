const computerOption = ["rock", "paper", "scissors"];
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

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log(playerSelection);

    playRound();
})

paper.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log(playerSelection);

    playRound();
})

scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    console.log(playerSelection);

    playRound();
})

const game = document.querySelector('#game');





// playGame();

// console.log(playerScore, computerScore);





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
        message.textContent = "Congratulations! You won!";

        div.appendChild(message);

        // rock.removeEventListener('click');
        // paper.removeEventListener('click');
        // scissors.removeEventListener('click');

        
        return;

    } else if (computerScore == 5) {
        const message = document.createElement("h1");
        message.textContent = "Oh no! You lost!";

        div.appendChild(message);

        // rock.removeEventListener('click');
        // paper.removeEventListener('click');
        // scissors.removeEventListener('click');


        return;
    }
}

function playRound() {
    let computerSelection = getComputerSelection();
    console.log(computerSelection);
    // let playerChoice = getPlayerChoice();

    if (playerSelection === "rock" && computerSelection === "scissors") {
        let result = "You win! Rock beats scissors!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result, playerScore, computerScore;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        let result = "You lose! Paper beats rock!";
        computerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
        let result = "Draw!";
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        let result = "You lose! Scissors beats paper!";
        computerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        let result = "You win! Paper beats rock!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        let result = "You win! Scissors beat paper!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        let result = "You lose! Rock beats scissors!";
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