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
    const button = document.createElement("button");
    button.innerText = i;
    button.style.padding = "20px";
    button.style.cursor = "pointer";
    button.style.color = "white";
    button.style.position = "absolute";
    button.style.top = `${Math.random() * 80}vh`;
    button.style.left = `${Math.random() * 80}vw`;
    button.style.backgroundColor = "#949e94";
    buttonsContainer.appendChild(button);
    button.addEventListener("click", () => {
      toggleButtonColor(button);
    });
  }
  buttonGenerator.removeEventListener("click", handleClick);
};

buttonGenerator.addEventListener("click", handleClick);
