// variables
const buttons = document.querySelectorAll('.btn');
const choices = ['rock', 'paper', 'scissors'];
let player = 0;
let computer = 0;
let playerChoice;
let compChoice;

// game buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.id;
    console.log(`player picks: ${playerChoice}`);
    compChoice = getComputerChoice();
    game();
  });
});

// game
function game() {
  playRound(playerChoice, compChoice);
  console.log(`score: ---> player: ${player} -- computer: ${computer}`);
  if (player == 5) {
    console.log('Congratulations! You won the game \n -----------------------');
    player = 0;
    computer = 0;
  } else if (computer == 5) {
    console.log('Oops! You lost this time \n -----------------------');
    player = 0;
    computer = 0;
  }
}

// round
function playRound(playerSelection, computerSelection) {
  let winner = checkWinner(playerSelection, computerSelection);
  if (winner == 'win') {
    console.log(
      `${playerSelection} beats ${computerSelection}, player wins this round! \\ (•◡•) /`
    );
  } else if (winner == 'lose') {
    console.log(
      `${computerSelection} beats ${playerSelection}, computer wins this round! ¯\\_(ツ)_/¯`
    );
  } else {
    console.log(
      `${playerSelection} vs. ${computerSelection} results in a round draw...`
    );
  }
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
