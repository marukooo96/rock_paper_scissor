const computerOption = ["Frog", "Snake", "Slug"];
let playerScore = 0;
document.getElementById("playerScore").innerHTML = playerScore;
let computerScore = 0;
document.getElementById("computerScore").innerHTML = computerScore;

const div = document.getElementById("winner");

let playerSelection;
const options = document.querySelector('#options');

const frog = document.querySelector('#frog');
const snake = document.querySelector('#snake');
const slug = document.querySelector('#slug');

frog.addEventListener('click', selectFrog);

snake.addEventListener('click', selectSnake);

slug.addEventListener('click', selectSlug);

const game = document.querySelector('#game');
const gameMessage = document.createElement('h1');
game.appendChild(gameMessage);






// playGame();

// console.log(playerScore, computerScore);


function selectFrog() {
    playerSelection = 'Frog';
    playRound();
}


function selectSnake() {
    playerSelection = 'Snake';
    playRound();
}

function selectSlug() {
    playerSelection = 'Slug';
    playRound();
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

        frog.removeEventListener('click');
        snake.removeEventListener('click');
        slug.removeEventListener('click');

        
        return;

    } else if (computerScore == 5) {
        const message = document.createElement("h1");
        message.textContent = "Oh no! You lost the game!";
        div.appendChild(message);

        const button = document.createElement('button');
        button.textContent = 'Play again';
        button.addEventListener('click', playAgain);
        div.appendChild(button);

        frog.removeEventListener('click', selectFrog);
        snake.removeEventListener('click', selectSnake);
        slug.removeEventListener('click', selectSlug);


        return;
    }
}

function playRound() {
    let computerSelection = getComputerSelection();
    

    gameMessage.textContent = 'You chose '+playerSelection+', Computer chose '+computerSelection+'';



    if (playerSelection === "Frog" && computerSelection === "Slug") {
        let result = "You win! Rock beats Scissors!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result, playerScore, computerScore;
    } else if (playerSelection === "Frog" && computerSelection === "Snake") {
        let result = "You lose! Paper beats Rock!";
        computerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Frog" && computerSelection === "Frog" || playerSelection === "Snake" && computerSelection === "Snake" || playerSelection === "Slug" && computerSelection === "Slug") {
        let result = "Draw!";
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Snake" && computerSelection === "Slug") {
        let result = "You lose! Scissors beats Paper!";
        computerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Snake" && computerSelection === "Frog") {
        let result = "You win! Paper beats Rock!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Slug" && computerSelection === "Snake") {
        let result = "You win! Scissors beat Paper!";
        playerScore += 1;
        updateScore();
        console.log(result, playerScore, computerScore);
        return result;
    } else if (playerSelection === "Slug" && computerSelection === "Frog") {
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