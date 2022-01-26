"use strict";

let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");
let dice = document.querySelector(".dice");

let currentScore, activePlayer, scores;

function resetGame() {
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];

  document.querySelector(".btn--roll").classList.remove("hidden");
  document.querySelector(".btn--hold").classList.remove("hidden");

  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");

  player1.classList.add("player--active");
  player2.classList.remove("player--active");

  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;

  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
}

resetGame();

function rollDice() {
  const number = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `dice-${number}.png`;

  if (number === 1) {
    switchPlayer();
  } else {
    currentScore += number;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
}

function holdScore() {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");

    dice.classList.add("hidden");
    document.querySelector(".btn--roll").classList.add("hidden");
    document.querySelector(".btn--hold").classList.add("hidden");
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = !activePlayer ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}
