const minSeconds = 0;
let currentSeconds = 0;
const MAX_SECONDS = 60;

const handleChange = () => {
  if (event.keyCode == 13) {
    currentSeconds = event.target.value;
    if (currentSeconds <= MAX_SECONDS) {
      document.querySelector(".clock__time").innerText = `00:${currentSeconds}`;
      amountOfSecondsInput.removeEventListener("change", handleChange);
    } else {
      alert("Enter number up to (and including) 60");
    }
  }
};

const amountOfSecondsInput = document.querySelector(".time-selection__input");
amountOfSecondsInput.addEventListener("keydown", () => {
  handleChange();
});

let timer;

const handleStart = () => {
  timer = setInterval(() => {
    currentSeconds -= 1;
    if (currentSeconds === 0) {
      handleStop();
    }
    document.querySelector(".clock__time").innerText = `00:${currentSeconds}`;
  }, 1000);
};

const handleStop = () => {
  clearInterval(timer);
};

document.querySelector(".clock__time").innerText = `00:${minSeconds}0`;
document
  .querySelector(".user-controller_start")
  .addEventListener("click", handleStart);

document
  .querySelector(".user-controller_stop")
  .addEventListener("click", handleStop);

// clearInterval(startTimer);
