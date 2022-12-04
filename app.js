function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];

  let randomNum = Math.floor(Math.random() * choices.length);

  return choices[randomNum];
}
console.log(getComputerChoice());

function playerSelection(playerAnswer) {
  playerAnswer = prompt('pick rock, paper or scissors? ');
  return playerAnswer.toLowerCase();
}
console.log(playerSelection());
