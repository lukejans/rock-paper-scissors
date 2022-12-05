// variables
const choices = ['rock', 'paper', 'scissors'];

// game
function game() {
  playRound();
}

// round
function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  console.log(winner);
}

// player choice
function getPlayerChoice() {
  let input = prompt('pick rock, paper or scissors? ');
  while (input == null) {
    input = prompt('pick rock, paper or scissors? ');
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt('must choose rock, paper or scissors!');
    while (input == null) {
      input = prompt('must choose rock, paper or scissors!');
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}
// console.log(`player picks: ${playerSelection}`);

// validate input
function validateInput(choice) {
  return choices.includes(choice);
}

// computer choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}
// console.log(`computer picks: ${computerSelection}`);

// rules
function checkWinner(a, b) {
  if (a === b) {
    return 'tie';
  } else if (
    (a === 'rock' && b === ' scissors') ||
    (a === 'paper' && b === 'rock') ||
    (a === 'scissors' && b === 'paper')
  ) {
    return 'player';
  } else {
    return 'computer';
  }
}

// game
game();

// let player = 0;
// let computer = 0;
//
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
