// variables
const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let computer = 0;

// game
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`scores --->  player: ${player} -- computer: ${computer}`);
    console.log('------------------------------------------------------');
  }
}

// round
function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();
  let winner = checkWinner(playerSelection, computerSelection);
  if (winner == 'you win this round! \\ (•◡•) /') {
    console.log(`${playerSelection} beats ${computerSelection}, ${winner}`);
  } else if (winner == 'you lost, computer wins this round! ¯\\_(ツ)_/¯') {
    console.log(`${computerSelection} beats ${playerSelection}, ${winner}`);
  } else {
    console.log(
      `${playerSelection} vs. ${computerSelection} results in a ${winner}`
    );
  }
}

// player choice
function getPlayerChoice() {
  let input = prompt('pick rock, paper or scissors! ');
  while (input == null) {
    input = prompt('pick rock, paper, scissors or die! ');
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
  console.log(`player picks: ${input}`);
  return input;
}
// validate input
function validateInput(choice) {
  return choices.includes(choice);
}

// computer choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * choices.length);
  console.log(`computer picks: ${choices[randomNum]}`);
  return choices[randomNum];
}

// rules
function checkWinner(p, c) {
  if (p === c) {
    return 'round draw...';
  } else if (
    (p === 'rock' && c === 'scissors') ||
    (p === 'paper' && c === 'rock') ||
    (p === 'scissors' && c === 'paper')
  ) {
    return playerWins();
  } else {
    return playerLoses();
  }
}
const playerWins = () => {
  player++;
  return 'you win this round! \\ (•◡•) /';
};
const playerLoses = () => {
  computer++;
  return 'you lost, computer wins this round! ¯\\_(ツ)_/¯';
};

// game
game();
