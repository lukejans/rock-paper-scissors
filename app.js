// STEP 1
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];

  let randomNum = Math.floor(Math.random() * choices.length);

  return choices[randomNum];
}
console.log(getComputerChoice());

// STEP 2
function playerSelection(playerAnswer) {
  playerAnswer = prompt('pick rock, paper or scissors? ');
  if (playerAnswer !== null) {
    return playerAnswer.toLowerCase();
  } else {
    playerAnswer = prompt('pick rock, paper or scissors or die! ');
    if (playerAnswer !== null) {
      return playerAnswer.toLowerCase();
    } else {
      console.log('you life is on the line! you have 6 hours to play or die!');
    }
  }
}
console.log(playerSelection());
