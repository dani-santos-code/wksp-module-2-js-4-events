// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------
let hasWon = false;

const body = document.querySelector("body");
const p = document.querySelector("#result");

const handleClick = () => {
  hasWon = true;
  result.innerText = "You Win!";
  body.removeEventListener("click", handleClick);
};

body.addEventListener("click", handleClick);

const timer = setTimeout(() => {
  if (!hasWon) {
    result.innerText = "You Lose!";
    body.removeEventListener("click", handleClick);
  }
}, 1000);
