const minSeconds = 0;
let currentSeconds = 0;
const MAX_SECONDS = 60;

const formatUserInput = time => {
  if (time < 10) {
    document.querySelector(".clock__time").innerText = `00:0${currentSeconds}`;
  } else {
    document.querySelector(".clock__time").innerText = `00:${currentSeconds}`;
  }
};
const handleChange = () => {
  if (event.keyCode == 13) {
    currentSeconds = event.target.value;
    if (currentSeconds <= MAX_SECONDS) {
      formatUserInput(currentSeconds);
      amountOfSecondsInput.removeEventListener("keydown", handleChange);
    } else {
      alert("Enter number up to (and including) 60 and press ENTER");
    }
  }
};

const amountOfSecondsInput = document.querySelector(".time-selection__input");
amountOfSecondsInput.addEventListener("keydown", () => {
  handleChange();
});

let timer;

const handleStart = () => {
  if (currentSeconds >= 1) {
    timer = setInterval(() => {
      currentSeconds -= 1;
      if (currentSeconds === 0) {
        handleStop();
      }
      formatUserInput(currentSeconds);
    }, 1000);
  } else {
    alert("Please, enter a number from 1 to 60 and press ENTER");
  }
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

document.querySelector("#timer").innerText = `${new Date().toLocaleString(
  "en-US",
  {
    timeZone: "America/Toronto"
  }
)}`;
