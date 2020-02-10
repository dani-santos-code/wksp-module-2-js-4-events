// if "arrow up"
const body = document.querySelector("body");
const balloon = document.getElementById("balloon");

let balloonSize = 18;

balloon.style.fontSize = `${balloonSize}px`;

const MIN_SIZE = 12;
const MAX_SIZE = 100;
const INCREMENT = 2;
const MAX_EXPLOSION_SIZE = 800;

function handleKeyDown(event) {
  if (event.key === "ArrowUp") {
    if (balloonSize < MAX_SIZE) {
      balloonSize += INCREMENT;
      balloon.style.fontSize = `${balloonSize}px`;
    } else {
      balloon.innerText = "💥";
      const explosion = setInterval(() => {
        balloonSize += 50;
        balloon.style.fontSize = `${balloonSize}px`;
        if (balloonSize > MAX_EXPLOSION_SIZE) {
          clearInterval(explosion);
          balloon.style.opacity = 0;
        }
      }, 20);
    }
  } else if (event.key === "ArrowDown") {
    if (balloonSize > MIN_SIZE) {
      balloonSize -= INCREMENT;
      balloon.style.fontSize = `${balloonSize}px`;
    }
  }
}

//   baloon will be bigger
//  if baloon is bigger than X amount
//      font - size starts at 12 px (emoji)
//      remove the event listener
//      remove the balloon and add in explosion emoji
// explisions grows incrementally :
//      if the explosion size is Y:
//      stop growing and fade out (think opacity)
// then stop growing
// if arrow down:

// add event to listener for keydown
document.addEventListener("keydown", handleKeyDown);
