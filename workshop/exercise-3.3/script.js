const buttonGenerator = document.querySelector(".button-generator");
const buttonsContainer = document.querySelector(".new-buttons-container");
const buttonsWrapper = document.querySelector(".buttons-wrapper");

const toggleButtonColor = button => {
  if (button.className !== "toggled") {
    button.style.backgroundColor = "green";
    button.className = "toggled";
  } else {
    button.style.backgroundColor = "red";
    button.className = "";
  }
};

const handleClick = () => {
  buttonGenerator.style.backgroundColor = "green";
  buttonGenerator.style.color = "#f2f2f2";
  for (let i = 1; i <= 20; i++) {
    const buttonsWrapper = document.createElement("button");
    buttonsWrapper.innerText = i;
    buttonsWrapper.style.padding = "20px";
    buttonsWrapper.style.cursor = "pointer";
    buttonsWrapper.style.color = "white";
    buttonsWrapper.style.position = "absolute";
    buttonsWrapper.style.top = `${Math.floor(Math.random() * 1000)}px`;
    buttonsWrapper.style.left = `${Math.floor(Math.random() * 1000)}px`;
    buttonsWrapper.style.backgroundColor = "#949e94";
    buttonsContainer.appendChild(buttonsWrapper);
    buttonsWrapper.addEventListener("click", () => {
      toggleButtonColor(buttonsWrapper);
    });
  }
  buttonGenerator.removeEventListener("click", handleClick);
};

buttonGenerator.addEventListener("click", handleClick);
