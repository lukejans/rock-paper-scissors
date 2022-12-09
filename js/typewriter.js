// typewriter effect
const textDisplay = document.getElementById('text');
const phrases = ['Congratulations!', 'Oops!'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDelete = false;

function loop() {
  textDisplay.innerHTML = currentPhrase.join('');

  if (i < phrases.length) {
    if (!isDelete && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDelete && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j == phrases[i].length) {
      isDelete = true;
    }

    if (isDelete && j === 0) {
      currentPhrase = [];
      isDelete = false;
      i++;
    }
  }
  setTimeout(loop, 500);
}

loop();
