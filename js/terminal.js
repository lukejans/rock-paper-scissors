// start button / btn modals
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');
const gameDisplay = document.querySelector('.rm-hide');
const startButton = document.getElementById('start-game-btn');

// start button
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

// type effect

// html
// <span id="par"></span>
// <span class="cursor2">_</span>

// js
// const hideText = document.getElementById('par');
// let par = document.getElementById('par');
// let text;
// let start;
// let i = 0;
// let temp = '';

// function typeTxt() {
//   start = setInterval(write, 90);
// }

// function write() {
//   if (i < text.length) {
//     temp += text[i];
//     written();
//     par.textContent += ' ';
//     i++;
//   } else {
//     clearInterval(start);
//     written();
//   }
// }

// function written() {
//   let k = 0;
//   par.textContent = '';
//   do {
//     par.textContent += temp[k];
//     k++;
//   } while (k < i);
// }
