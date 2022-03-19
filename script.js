'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = 23;
*/

let score = 20;
let SecretNumber = Math.trunc(Math.random() * 21);
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // GAME LOGIC

  // When there is no guess
  if (!guess) {
    // !guess = true;
    displayMessage('😡 No number!');

    // When the guess is right
  } else if (guess === SecretNumber) {
    displayMessage('😎 Correct Number!');
    displayColor('green');
    document.querySelector('.number').textContent = SecretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? '🧐 Too High!' : '🙄 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😈 GAME OVER 😈');
      displayScore(0);
      displayColor('red');
    }
  }
});
// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.message').textContent = 'START GUESSING!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
