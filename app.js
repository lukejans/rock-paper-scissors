// variables
const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let computer = 0;

// game
function game() {
  for (player, computer; player <= 4, computer <= 4; ) {
    playRound();
    console.log(`scores: --->  player: ${player} -- computer: ${computer}`);
  }
  if (player == 5 || computer == 5) {
    console.log(winnerText());
    console.log('-------------------');
    player = 0;
    computer = 0;
  }
}
// win / loose text
const winnerText = () => {
  if (player > computer) {
    return 'Congratulations! You won the game';
  } else {
    return 'Oops! You lost this time';
  }
};

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

// get player choice
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
  console.log(' ');
  console.log(`player picks: ${input}`);
  return input;
}
// validate input
function validateInput(choice) {
  return choices.includes(choice);
}

// get computer choice
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
// win tracker
const playerWins = () => {
  player++;
  return 'you win this round! \\ (•◡•) /';
};
const playerLoses = () => {
  computer++;
  return 'you lost, computer wins this round! ¯\\_(ツ)_/¯';
};

// start button
document.getElementById('btn').addEventListener('click', game);
