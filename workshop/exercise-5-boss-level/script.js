const instructionsDialog = document.getElementById("instructions");
const gamePlay = document.getElementById("game");
const menuDiv = document.getElementById("menu");
const prize = document.getElementById("prize");
const signalDiv = document.getElementById("signal");
const signal = new Audio("./sounds/signal.mp3");
const p1Div = document.getElementById("p1-score");
const p2Div = document.getElementById("p2-score");
const results = document.querySelector("#results");
const h1 = document.querySelector("h1");

const MAX_SCORE = 3;
let p1Score = 0;
let p2Score = 0;

const showInstructions = () => {
  instructionsDialog.style.display = "flex";
};

const closeInstructions = () => {
  instructionsDialog.style.display = "none";
};

const checkWinner = () => {
  if (p1Score === MAX_SCORE) {
    results.style.display = "block";
    h1.innerText = "Pi Wins!";
  } else if (p2Score === MAX_SCORE) {
    results.style.display = "block";
  }
};
const handleKeyPress = () => {
  if (event.key === "q" || event.key === "Q") {
    p1Score += 1;
    if (p1Score <= MAX_SCORE) {
      const image = document.createElement("img");
      p1Div.appendChild(image);
      image.setAttribute("src", "./imgs/prize.gif");
      checkWinner();
    }
  }
  if (event.key === "p" || event.key === "P") {
    p2Score += 1;
    if (p2Score <= MAX_SCORE) {
      const image = document.createElement("img");
      p2Div.appendChild(image);
      image.setAttribute("src", "./imgs/prize.gif");
      checkWinner();
    }
  }
};

const moveCharacters = () => {
  document.addEventListener("keydown", handleKeyPress);
};

const start = () => {
  gamePlay.style.display = "block";
  prize.style.display = "inline-block";
  menuDiv.style.display = "none";
  menuDiv.style.position = "relative";
  moveCharacters();
  setTimeout(() => {
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
  gamePlay.style.display = "none";
  prize.style.display = "none";
  results.style.display = "none";
  p1Div.style.display = "none";
  p2Div.style.display = "none";
  document.querySelector("#signal-to-play").style.display = "none";
  menuDiv.style.display = "block";
};
