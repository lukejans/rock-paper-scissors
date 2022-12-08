// variables
const buttons = document.querySelectorAll('.btn');
const hideText = document.getElementById('par');
const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let computer = 0;
let round = 0;
let gamesPlayed = 0;
let pAllTime = 0;
let cAllTime = 0;
let wlRatio = 0;
let playerChoice;
let compChoice;

// game buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    console.log(' ');
    console.log(`player picks: ${playerChoice}`);
    playerDis.innerHTML = `p: ${playerChoice}`;
    compChoice = getComputerChoice();
    game();
  });
});

// game
function game() {
  playRound(playerChoice, compChoice);
  console.log(`score: ---> player: ${player} -- computer: ${computer}`);
  playerDisScore.innerHTML = `p: ${player}`;
  compDisScore.innerHTML = `c: ${computer}`;
  hideText.style.display = 'none';
  if (player == 5) {
    console.log('Congratulations! You won the game');
    text = 'Congratulations! You won the game';
    hideText.style.display = 'inline';
    resultDis.innerHTML = '';

    typeTxt();
    player = 0;
    computer = 0;
    round = 0;
    gamesPlayed++;
    pAllTime++;
    wlRatio = winLossRatio();
    console.log(`win / loss ratio: ${wlRatio}%`);
    winLossDis.innerHTML = `w/l r: ${wlRatio}%`;
  } else if (computer == 5) {
    console.log('Oops! You lost this time');
    text = 'Oops! You lost this time';
    hideText.style.display = 'inline';
    resultDis.innerHTML = '';
    typeTxt();
    player = 0;
    computer = 0;
    round = 0;
    gamesPlayed++;
    cAllTime++;
    wlRatio = winLossRatio();
    console.log(`win / loss ratio: ${wlRatio}%`);
    winLossDis.innerHTML = `w/l r: ${wlRatio}%`;
  }
}

// round
function playRound(playerSelection, computerSelection) {
  let winner = checkWinner(playerSelection, computerSelection);
  round++;
  console.log(`round: ${round}`);
  roundDis.innerHTML = `round number: ${round}`;
  if (winner == 'win') {
    console.log(
      `${playerSelection} beats ${computerSelection}, player wins this round! \\ (•◡•) /`
    );
    resultDis.innerHTML = `player wins this round! \\ (•◡•) / <span
    class="cursor1"
    >_</span
  >`;
  } else if (winner == 'lose') {
    console.log(
      `${computerSelection} beats ${playerSelection}, computer wins this round! ¯\\_(ツ)_/¯`
    );
    resultDis.innerHTML = `computer wins this round! ¯\\_(ツ)_/¯ <span
    class="cursor1"
    >_</span
  >`;
  } else {
    console.log(
      `${playerSelection} vs. ${computerSelection} results in a round draw...`
    );
    resultDis.innerHTML = `round ends in a draw... <span
    class="cursor1"
    >_</span
  >`;
  }
}

// get computer choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * choices.length);
  console.log(`computer picks: ${choices[randomNum]}`);
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

// win loss ratio
function winLossRatio() {
  return Math.floor((pAllTime / gamesPlayed) * 100);
}

// old get player choice method
// choice validation

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
