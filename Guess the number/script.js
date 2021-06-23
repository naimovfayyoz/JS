//identifies logical errors
"use strict";

//random
let secretNumber = Math.trunc(Math.random() * 20) + 1;

/*  for hackers)
document.querySelector(".number").textContent = secretNumber;
*/

//start values
let score = 20;
let highScore = 0;

//for changing color
function background(color) {
  document.querySelector("body").style.background = color;
}
function message(message) {
  document.querySelector(".message").textContent = message;
}
//setting title
function title(title) {
  document.querySelector(".title").textContent = title;
}
//setting the high score
function setHighScore(score) {
  highScore = score;
  //getting highScore
  return (document.querySelector(".label-highscore").textContent =
    "🥇 Highscore:" + score);
}

function Score(score) {
  document.querySelector(".label-score").textContent = "💯 Score:" + score;
  return score;
}

//logic for Check btn
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //validation for no input
  if (!guess) {
    message("No number!");
  }
  //validation for range of inputs
  else if (guess > 20 || guess <= 0) {
    message("Invalid number...");
    background("red");
    title("Please, choose between 1 and 20!");
  }
  //winning case
  else if (guess == secretNumber) {
    message("Congrats!!!");
    background("#60b347");
    console.log("h" + highScore);
    console.log("s" + score);
    if (score > highScore) setHighScore(score);

    title("You won!");
  }
  //help for players
  else if (guess > secretNumber) {
    message("Too high!");
    score--;
  } else if (guess < secretNumber) {
    message("Too low!");
    score--;
  }
  //game over
  if (score <= 0) {
    title("Game over!");
    background("red");
  }

  Score(score);
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  background("black");
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  Score(score);

  message("Start guessing...");

  document.querySelector(".number").textContent = secretNumber;

  title("Guess My Number!");
});
