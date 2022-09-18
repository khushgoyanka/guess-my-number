"use strict";

/* 
document.querySelector('.message').textContent =  'Correct Number !';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); 
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function () {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //   when no input
  if (!guess) {
    displayMessage("⛔️ No Number !");

    // wins
  } else if (guess === secretNumber) {
    displayMessage("⚡️ Correct Number !");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      console.log(
        (document.querySelector(".highscore").textContent = highscore)
      );
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High !" : "Too Low !");
      score--;
      displayScore();
    } else {
      displayMessage("OOPS you LOST the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  document.querySelector(".guess").value = "";

  displayScore();

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
