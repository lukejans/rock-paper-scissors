// variables
const choices = ['rock', 'paper', 'scissors'];

// game
function game() {
  playRound();
}

// round
function playRound(playerSelection, computerSelection) {}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

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
    if (input !== null) {
      input = input.toLowerCase();
    }
    check = validateInput(input);
  }
  console.log(`player picks: ${input}`);
}
// validate input
function validateInput(choice) {
  return choices.includes(choice);
}

// computer choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * choices.length);
  return choices[randomNum];
}
console.log(`computer picks: ${computerSelection}`);

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
