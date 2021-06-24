'use strict';

const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const newGame = document.querySelector('.btn--new');
let activePlayer = 0;
var correntScore = 0;
dice.classList.add('hidden');

var finalScore = [0, 0];
function changing() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  correntScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  if (activePlayer === 1) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    document
      .querySelector(`.player--${activePlayer - 1}`)
      .classList.remove('player--active');
  } else if (activePlayer === 0) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--active');
    document
      .querySelector(`.player--${activePlayer + 1}`)
      .classList.remove('player--active');
  }
}
roll.addEventListener('click', function () {
  //random between 1-6
  dice.classList.remove('hidden');
  var random = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${random}.png`;

  //changing player
  if (random !== 1) {
    correntScore += random;
    document.getElementById(`current--${activePlayer}`).textContent =
      correntScore;
  } else changing();
});

hold.addEventListener('click', function () {
  finalScore[activePlayer] += correntScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    finalScore[activePlayer];
  //identifies the winner
  if (finalScore[0] >= 100) {
    console.log(`  ${finalScore[0]}`);

    dice.classList.add('hidden');
    document.querySelector('.player--0').classList.add('player--winner');
  } else if (finalScore[1] >= 100) {
    console.log(`  ${finalScore[1]}`);

    dice.classList.add('hidden');
    document.querySelector('.player--1').classList.add('player--winner');
  }

  changing();
});
//reset
newGame.addEventListener('click', function () {
  let activePlayer = 0;
  var correntScore = 0;
  finalScore = [0, 0];
  dice.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`current--${activePlayer + 1}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    finalScore[activePlayer];
  document.getElementById(`score--${activePlayer + 1}`).textContent =
    finalScore[activePlayer + 1];

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  document
    .querySelector(`.player--${activePlayer + 1}`)
    .classList.remove('player--active');
});
