const button = document.querySelector(".button-generator");
const buttonsContainer = document.querySelector(".new-buttons-container");

const handleClick = () => {
  button.style.backgroundColor = "green";
  button.style.color = "#f2f2f2";
  for (let i = 0; i < 20; i++) {
    const anotherButton = document.createElement("button");
    anotherButton.innerText = "HELLO, THERE";
    anotherButton.style.padding = `10px`;
    anotherButton.style.margin = `10px`;
    anotherButton.style.cursor = `pointer`;
    anotherButton.style.backgroundColor = "#949e94";
    buttonsContainer.appendChild(anotherButton);
  }
  button.removeEventListener("click", handleClick);
};

button.addEventListener("click", handleClick);
