function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWin() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) results.textContent += ' Congratulations! You win!';
        else results.textContent += ' You lose.';
        playerScore = 0;
        computerScore = 0;
    }
}

function playRound(playerSelection, computerSelection) {
    let str;
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            str = 'Round tied.';
        } else if (computerSelection === 'paper') {
            computerScore++;
            str = 'Round lost. Paper beats rock.';
        } else {
            playerScore++;
            str = 'Round won! Rock beats scissors.'
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            playerScore++;
            str = 'Round won! Paper beats rock.';
        } else if (computerSelection === 'paper') {
            str = 'Round tied.';
        } else {
            computerScore++;
            str = 'Round lost. Scissors beats paper.';
        }
    } else {
        if (computerSelection === 'rock') {
            computerScore++;
            str = 'Round lost. Rock beats scissors.';
        } else if (computerSelection === 'paper') {
            playerScore++;
            str = 'Round won! Scissors beats paper.';
        } else {
            str = 'Round tied.';
        }
    }
    results.textContent = str + ` You: ${playerScore}. Computer: ${computerScore}.`;
    checkWin();
}

let playerScore = 0;
let computerScore = 0;
let results = document.querySelector('.results');

let rockBtn = document.querySelector('.rockBtn');
let paperBtn = document.querySelector('.paperBtn');
let scissorsBtn = document.querySelector('.scissorsBtn');

rockBtn.addEventListener('click', () => playRound('rock', computerPlay()));
paperBtn.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerPlay()));