// start button / btn modals
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');
const gameDisplay = document.querySelector('.rm-hide');
const startButton = document.getElementById('start-game-btn');

startButton.addEventListener('click', () => {
  gameContainer.classList.remove('hidden');
  mainContainer.style.display = 'none';
  gameDisplay.classList.remove('hidden');
  document
    .getElementById('window')
    .getElementsByClassName(
      'inline'
    )[0].innerHTML = `root@restartGame: Press &lt;RESTART&gt; to reset game session`;
});

// statistics / analytics
const playerDis = document.getElementById('d-pc');
const compDis = document.getElementById('d-cc');
const playerDisScore = document.getElementById('d-ps');
const compDisScore = document.getElementById('d-cs');
const roundDis = document.getElementById('d-r');
const winLossDis = document.getElementById('d-w-l');
const resultDis = document.getElementById('result-txt');
