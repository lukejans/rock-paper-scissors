var firstNames = [
  '1337',
  't0xic',
  'phantom',
  'ALPhA',
  'v1rus',
  'biTe',
  'krypt0',
  'cyb3r',
  'Bi0',
  'acid',
  'gh0st',
  'Lord',
  'r4dical',
];
var secondNames = [
  'PWNER',
  'H4X0R',
  'buRn',
  'MuX',
  'd3st0y3r',
  'phreak',
  'Plague',
  '0verride',
  'Chaos',
];

var hackerNameVisible = 0;
document.onkeypress = function (e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    if (!hackerNameVisible) {
      hackerNameVisible = 1;
      var hackerName = getHackerName();
      document
        .getElementById('window')
        .getElementsByClassName('cursor1')[0].innerHTML = '';
      document.getElementById('hackerName').innerHTML = hackerName;
      document.getElementById('hackerName').style.opacity = 1;
      document.getElementById('clear').style.opacity = 1;
    } else {
      hackerNameVisible = 0;
      document.getElementById('hackerName').style.opacity = 0;
      document.getElementById('clear').style.opacity = 0;
      document
        .getElementById('window')
        .getElementsByClassName('cursor1')[0].innerHTML = '_';
    }
  }
};

function getHackerName() {
  var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  var secondName = secondNames[Math.floor(Math.random() * secondNames.length)];
  return firstName + ' ' + secondName;
}
