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
    .getElementsByClassName('cursor1')[0].innerHTML = '';
  document
    .getElementById('window')
    .getElementsByClassName(
      'inline'
    )[0].innerHTML = `root@restartGame: Press &lt;RESTART&gt; to reset game session<span
    class="cursor1"
    >_</span
  >`;
});
