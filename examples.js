// example of button manipulation

const body = document.querySelector("body");
const button = document.createElement("button");

body.appendChild(button);

button.setAttribute("style", "padding: 20px; width: 200px;");

const changeBackground = () => {
  button.setAttribute(
    "style",
    "padding: 20px; width: 200px; background-color: blue"
  );
};

button.addEventListener("click", changeBackground);
