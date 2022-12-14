// start button variables
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');
const gameDisplay = document.querySelector('.rm-hide');
const startButton = document.getElementById('start-game-btn');
// end button variables
const restartButton = document.getElementById('restart-btn');
const restartDisplay = document.querySelector('.play');
const windowEl = document.getElementById('window');
const inlineEl = windowEl.getElementsByClassName('inline')[0];

// start button
startButton.addEventListener('click', () => {
  gameContainer.classList.remove('hidden');
  mainContainer.style.display = 'none';
  gameDisplay.classList.remove('hidden');
  inlineEl.innerHTML = `root@rockPaperScissors: Game &lt;RUNNING&gt;`;
});
// end / restart button
restartButton.addEventListener('click', () => {
  restartDisplay.classList.add('hidden');
  mainContainer.style.display = 'flex';
  gameDisplay.classList.remove('hidden');
  inlineEl.innerHTML = `root@playGame: Press &lt;PLAY&gt; to start new game<span
    class="cursor1"
    >_</span
  >`;
});
