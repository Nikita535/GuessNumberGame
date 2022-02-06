'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let higherScore = 0;
const DEFAULT_BACKGROUND = 'black';
const DEFAULT_GUESS_MESSAGE = 'Начни угадывать!';
const DEFAULT_NUMBER_INPUT = '';
// document.querySelector('.question').textContent=secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Введите число!';
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'Правильно!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.question').style.fontSize = '50px';
    document.querySelector('.question').style.width = '500px';
    document.querySelector('.question').textContent = secretNumber;
    compareScore();
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      guessingNumber > secretNumber
        ? (document.querySelector('.guess-message').textContent =
            'Слишком большое!')
        : (document.querySelector('.guess-message').textContent =
            'Слишком маленькое!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent =
        'Тебе надо тренироваться!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

const compareScore = () => {
  if (score > higherScore) {
    higherScore = score;
    document.querySelector('.highscore').textContent = higherScore;
  }
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.number-input').value = DEFAULT_NUMBER_INPUT;
  document.querySelector('.guess-message').textContent = DEFAULT_GUESS_MESSAGE;
  document.querySelector('body').style.backgroundColor = DEFAULT_BACKGROUND;
  document.querySelector('.score').textContent = score;
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('.question').textContent = '???';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
