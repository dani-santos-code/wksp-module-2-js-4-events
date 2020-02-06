// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

const startGame = () => {
  const body = document.querySelector("body");
  const result = document.querySelector("#result");
  let hasWon = false;
  const handleClick = () => {
    hasWon = true;
    result.innerText = "You Win";
    body.removeEventListener("click", handleClick);
  };

  body.addEventListener("click", handleClick);

  const randomTime = Math.floor(Math.random() * 5000);
  document.querySelector("#timer").innerText = Math.round(randomTime / 100);

  setTimeout(() => {
    if (!hasWon) {
      result.innerText = "You Lose";
      body.removeEventListener("click", handleClick);
    }
  }, randomTime);
};

startGame();
