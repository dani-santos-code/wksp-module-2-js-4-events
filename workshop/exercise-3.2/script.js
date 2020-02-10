const buttonGenerator = document.querySelector(".button-generator");
const buttonsContainer = document.querySelector(".new-buttons-container");

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
  for (let i = 0; i < 20; i++) {
    const anotherButton = document.createElement("button");
    anotherButton.innerText = "HELLO, THERE";
    anotherButton.style.padding = "10px";
    anotherButton.style.margin = "10px";
    anotherButton.style.cursor = "pointer";
    anotherButton.style.color = "white";
    anotherButton.style.backgroundColor = "#949e94";
    buttonsContainer.appendChild(anotherButton);
    anotherButton.addEventListener("click", () => {
      toggleButtonColor(anotherButton);
    });
  }
  buttonGenerator.removeEventListener("click", handleClick);
};

buttonGenerator.addEventListener("click", handleClick);
