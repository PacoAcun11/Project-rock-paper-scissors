
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if ((playerSelection == 'scissors' && computerSelection == 'paper')||
    (playerSelection == 'paper' && computerSelection == 'rock')||
    (playerSelection == 'rock' && computerSelection == 'scissors')) {
        return 'You win!';
    } else if ((playerSelection == 'scissors' && computerSelection == 'rock')||
    (playerSelection == 'rock' && computerSelection == 'paper')||
    (playerSelection == 'paper' && computerSelection == 'scissors')){
        return 'You lose';
    }
}

const choices = [
    'rock',
    'paper',
    'scissors'
];
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));