var hackerNameVisible = 0;
document.onkeypress = function (e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    if (!hackerNameVisible) {
      hackerNameVisible = 1;
      var hackerName = getHackerName();

      document.getElementById('hackerName').innerHTML = hackerName;
      document.getElementById('hackerName').style.opacity = 1;
      document.getElementById('clear').style.opacity = 1;
    } else {
      hackerNameVisible = 0;
      document.getElementById('hackerName').style.opacity = 0;
      document.getElementById('clear').style.opacity = 0;
    }
  }
};
// cursor blink on/off
document
  .getElementById('window')
  .getElementsByClassName('cursor1')[0].innerHTML = '';
document
  .getElementById('window')
  .getElementsByClassName('cursor1')[0].innerHTML = '_';

// start button / btn modals
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');
const startButton = document.getElementById('start-game-btn');

startButton.addEventListener('click', () => {
  gameContainer.classList.remove('hidden');
  mainContainer.style.display = 'none';
});
