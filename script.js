function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'Tie.';
        } else if (computerSelection === 'paper') {
            return 'You lose! Paper beats rock.';
        } else {
            return 'You win! Rock beats scissors.';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats rock.';
        } else if (computerSelection === 'paper') {
            return 'Tie';
        } else {
            return 'You Lose! Scissors beat paper.';
        }
    } else {
        if (computerSelection === 'rock') {
            return 'You Lose! Rock beats scissors.';
        } else if (computerSelection === 'paper') {
            return 'You win! Scissors beat paper.';
        } else {
            return 'Tie.';
        }
    }
}

function game() {
    for (let round = 1; round <= 5; round++) {
        // Check if someone has won early
        if (playerScore === 3 || computerScore === 3) break;

        // Get player and computer selections
        let playerSelection;
        let computerSelection = computerPlay();
        do {
            if (playerSelection !== undefined && playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
                alert('Please enter a valid response.');
            }
            playerSelection = prompt('Choose rock, paper, or scissors!').toLowerCase();
        } while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');

        // Change score
        if (playerSelection === 'rock') {
            if (computerSelection === 'paper') {
                computerScore++;
            } else if (computerSelection === 'scissors') {
                playerScore++;
            }
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerScore++;
            } else if (computerSelection === 'scissors') {
                computerScore++;
            }
        } else {
            if (computerSelection === 'rock') {
                computerScore++;
            } else if (computerSelection === 'paper') {
                playerScore++;
            }
        }

        // Print results
        console.log(playRound(playerSelection, computerSelection));
        console.log(`You: ${playerScore}\nComputer: ${computerScore}`);
    }
}

let play = true;
let playerScore = 0;
let computerScore = 0;

while (play) {
    game();
    if (playerScore > computerScore) console.log('You Win!!!');
    else console.log('You lose!!!');
    if (confirm('Play again?')) {
        playerScore = 0;
        computerScore = 0;
    } else {
        play = false;
    }
}