const instructionsDialog = document.getElementById("instructions");
const gamePlay = document.getElementById("game");
const menuDiv = document.getElementById("menu");
const container = document.getElementById("container");
const prize = document.getElementById("prize");
const signalDiv = document.getElementById("signal");
const signal = new Audio("./sounds/signal.mp3");
const p1Div = document.getElementById("p1-score");
const p2Div = document.getElementById("p2-score");
const results = document.querySelector("#results");
const h1 = document.querySelector("h1");
let hasStarted = false;

const MAX_SCORE = 3;
let p1Score = 0;
let p2Score = 0;

const showInstructions = () => {
  instructionsDialog.style.display = "flex";
  moveCharacters();
};

const closeInstructions = () => {
  instructionsDialog.style.display = "none";
};

const checkWinner = () => {
  if (p1Score === MAX_SCORE) {
    results.style.display = "block";
    h1.innerText = "Pi Wins!";
    document.removeEventListener("keydown", handleKeyPress);
  } else if (p2Score === MAX_SCORE) {
    results.style.display = "block";
    h1.innerText = "Sonic Wins!";
    document.removeEventListener("keydown", handleKeyPress);
  }
};

const handleKeyPress = () => {
  if (event.key === "q" || event.key === "Q") {
    if (hasStarted) {
      p1Score += 1;
      if (p1Score <= MAX_SCORE) {
        const image = document.createElement("img");
        p1Div.appendChild(image);
        image.setAttribute("src", "./imgs/prize.gif");
        checkWinner();
      }
    } else {
      endGameImmediately("Pi");
    }
  }
  if (event.key === "p" || event.key === "P") {
    if (hasStarted) {
      p2Score += 1;
      if (p2Score <= MAX_SCORE) {
        const image = document.createElement("img");
        p2Div.appendChild(image);
        image.setAttribute("src", "./imgs/prize.gif");
        checkWinner();
      }
    } else {
      endGameImmediately("Sonic");
    }
  }
};

const endGameImmediately = player => {
  results.style.display = "block";
  h1.innerText = `${player}, you Lose!`;
  document.removeEventListener("keydown", handleKeyPress);
};

const moveCharacters = () => {
  document.addEventListener("keydown", handleKeyPress);
};

const start = () => {
  container.removeEventListener("keydown", handleKeyPress);
  gamePlay.style.display = "block";
  prize.style.display = "inline-block";
  menuDiv.style.display = "none";
  menuDiv.style.position = "relative";
  moveCharacters();
  setTimeout(() => {
    hasStarted = !hasStarted;
    const image = document.createElement("img");
    image.style.width = "100px";
    image.style.height = "100px;";
    image.style.position = "absolute";
    image.style.top = "100px";
    image.style.right = "300px";
    image.style.margin = "20px";
    image.style.transform = "rotate(-35deg)";
    signal.play();
    signalDiv.appendChild(image);
    image.setAttribute("src", "./imgs/signal.png");
    image.setAttribute("id", "signal-to-play");
  }, Math.floor(Math.random() * 5000));
};

const restart = () => {
  hasStarted = false;
  container.removeEventListener("keydown", handleKeyPress);
  gamePlay.style.display = "none";
  prize.style.display = "none";
  results.style.display = "none";
  p1Div.style.display = "none";
  p2Div.style.display = "none";
  menuDiv.style.display = "block";
};
