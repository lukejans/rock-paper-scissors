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
    // disable buttons
    buttons.forEach((btn) => {
      btn.setAttribute('disabled', 'true');
    });
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
  whoWon();
}
// decision
function whoWon() {
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
  displayResets();
}
function displayResets() {
  gameContainer.classList.add('hidden');
  restartDisplay.classList.remove('hidden');
  document
    .getElementById('window')
    .getElementsByClassName(
      'inline'
    )[0].innerHTML = `root@playGameAgain: Press &lt;PLAY AGAIN&gt;`;
}
function playerWinTxt() {
  pAllTime++;
  resultDis.innerHTML = '';
  phrase = 'Congratulations! You won the game!';
  typeWriter();
}
function compWinTxt() {
  cAllTime++;
  resultDis.innerHTML = '';
  phrase = 'Oops! You lost this time!';
  typeWriter();
}
// typewriter effect
function typeWriter() {
  resultDis.innerHTML = currentPhrase.join('');
  if (i < phrase.length) {
    currentPhrase.push(phrase[i]);
    i++;
    setTimeout(typeWriter, 25);
  } else {
    i = 0;
    currentPhrase = [];
    // enable buttons
    buttons.forEach((btn) => {
      btn.removeAttribute('disabled');
    });
  }
}
// win loss ratio
function winLossRatio() {
  wlRatio = Math.floor((pAllTime / gamesPlayed) * 100);
  winLossDis.innerHTML = `w/l r: ${wlRatio}%`;
}
// round
function playRound(playerSelection, computerSelection) {
  let winner = checkWinner(playerSelection, computerSelection);
  if (winner == 'win') {
    phrase = `${playerSelection} beats ${computerSelection}, player wins this round! \\ (?????????) /`;
    typeWriter();
  } else if (winner == 'lose') {
    phrase = `${computerSelection} beats ${playerSelection}, computer wins this round! ??\\_(???)_/??`;
    typeWriter();
  } else {
    phrase = `round ends in a draw...`;
    typeWriter();
  }
}
// get computer choice
function getComputerChoice() {
  const choice = choices[Math.floor(Math.random() * choices.length)];
  compDis.innerHTML = `c: ${choice}`;
  return choice;
}
// rules
function checkWinner(p, c) {
  round++;
  roundDis.innerHTML = `round: ${round}`;
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
