// // Exercise 1.2
// // ------------
// // DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// // Similar to the last exercise, write an app that gives the user
// // a random amount of time (up to 5 seconds) to click anywhere on the screen.
// //
// // But this time, let's let the user know how much time they have to actually 'click'.
// // If they click inside of the required time, you should tell them that they've won,
// // else let them know that they've lost.

// // In short,
// // Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// // - random amount of time to click
// // - tell the user how much time they have to click.

// // Challenge
// // Make the countdown live...

let hasWon = false;

const body = document.querySelector("body");
const result = document.querySelector("#result");
const randomTime = Math.floor(Math.random() * 5000);

document.querySelector("#time").innerText = randomTime;

const handleClick = () => {
  hasWon = true;
  result.innerText = "You Win";
  body.removeEventListener("click", handleClick);
};

setTimeout(() => {
  if (!hasWon) {
    result.innerText = "You Lose!";
    body.removeEventListener("click", handleClick);
  }
}, randomTime);

body.addEventListener("click", handleClick);
