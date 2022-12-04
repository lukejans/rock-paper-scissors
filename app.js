// variables

// game
function game() {
  playRound();
}

// round
function playRound(playerSelection, computerSelection) {}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

// player choice
function getPlayerChoice(playerAnswer) {
  while (playerAnswer == null) {
    playerAnswer = prompt('pick rock, paper or scissors? ');
  }
  return playerAnswer.toLowerCase();
}

console.log(playerSelection);

// computer choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}

const choices = ['rock', 'paper', 'scissors'];
console.log(computerSelection);

// const playerWins = () => {
//   player++;
//   playerScore.innerText = player;
//   console.log(`Won Round! ${playerSelection} beats ${computerSelection}`);
// };

// const playerLoses = () => {
//   computer++;
//   cpuScore.innerText = computer;
//   console.log(`Lost Round! ${computerSelection} beats ${playerSelection}`);
// };
