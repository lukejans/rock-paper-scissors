// game variables
const buttons = document.querySelectorAll('.btn');
const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let computer = 0;
// statistic / analytic variables
const playerDis = document.getElementById('d-pc');
const compDis = document.getElementById('d-cc');
const playerDisScore = document.getElementById('d-ps');
const compDisScore = document.getElementById('d-cs');
const roundDis = document.getElementById('d-r');
const winLossDis = document.getElementById('d-w-l');
const resultDis = document.getElementById('result-txt');
let round = 0;
let gamesPlayed = 0;
let pAllTime = 0;
let cAllTime = 0;
let wlRatio = 0;
let playerChoice;
let compChoice;
// typewriter variables
let phrase;
let i = 0;
let currentPhrase = [];

// game buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    playerDis.innerHTML = `p: ${playerChoice}`;
    compChoice = getComputerChoice();
    game();
  });
});
// game
function game() {
  playRound(playerChoice, compChoice);
  playerDisScore.innerHTML = `p: ${player}`;
  compDisScore.innerHTML = `c: ${computer}`;
  if (player == 5) {
    playerWinTxt();
    endOfGame();
  } else if (computer == 5) {
    compWinTxt();
    endOfGame();
  }
}
// helper functions
function endOfGame() {
  player = 0;
  computer = 0;
  round = 0;
  gamesPlayed++;
  wlRatio = Math.floor((pAllTime / gamesPlayed) * 100);
  winLossDis.innerHTML = `w/l r: ${wlRatio}%`;
  gameContainer.classList.add('hidden');
  restartDisplay.classList.remove('hidden');
  document
    .getElementById('window')
    .getElementsByClassName(
      'inline'
    )[0].innerHTML = `root@playGameAgain: Press &lt;PLAY AGAIN&gt;`;
}
function compWinTxt() {
  cAllTime++;
  resultDis.innerHTML = '';
  phrase = 'Oops! You lost this time!';
  typeWriter();
}
function playerWinTxt() {
  pAllTime++;
  resultDis.innerHTML = '';
  phrase = 'Congratulations! You won the game!';
  typeWriter();
}
// typewriter effect
function typeWriter() {
  resultDis.innerHTML = currentPhrase.join('');
  if (i < phrase.length) {
    currentPhrase.push(phrase[i]);
    i++;
    setTimeout(typeWriter, 50);
  } else {
    i = 0;
    currentPhrase = [];
  }
}
// round
function playRound(playerSelection, computerSelection) {
  let winner = checkWinner(playerSelection, computerSelection);
  round++;
  roundDis.innerHTML = `round: ${round}`;
  if (winner == 'win') {
    resultDis.innerHTML = `${playerSelection} beats ${computerSelection}, player wins this round! \\ (•◡•) /`;
  } else if (winner == 'lose') {
    resultDis.innerHTML = `${computerSelection} beats ${playerSelection}, computer wins this round! ¯\\_(ツ)_/¯`;
  } else {
    resultDis.innerHTML = `round ends in a draw...`;
  }
}
// get computer choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * choices.length);
  compDis.innerHTML = `c: ${choices[randomNum]}`;
  return choices[randomNum];
}
// rules
function checkWinner(p, c) {
  if (p === c) {
    return 'tie';
  } else if (
    (p === 'rock' && c === 'scissors') ||
    (p === 'paper' && c === 'rock') ||
    (p === 'scissors' && c === 'paper')
  ) {
    player++;
    return 'win';
  } else {
    computer++;
    return 'lose';
  }
}

// original method:
//      get player choice
//      validate input

// // get player choice
// function getPlayerChoice() {
//   let input = prompt('pick rock, paper or scissors! ');
//   while (input == null) {
//     input = prompt('pick rock, paper, scissors or die! ');
//   }
//   input = input.toLowerCase();
//   let check = validateInput(input);
//   while (check == false) {
//     input = prompt('must choose rock, paper or scissors!');

//     while (input == null) {
//       input = prompt('must choose rock, paper or scissors!');
//     }
//     input = input.toLowerCase();
//     check = validateInput(input);
//   }
//   console.log(' ');
//   console.log(`player picks: ${input}`);
//   return input;
// }
// // validate input
// function validateInput(choice) {
//   return choices.includes(choice);
// }
