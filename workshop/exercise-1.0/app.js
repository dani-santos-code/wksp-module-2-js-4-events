// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

const handleClick = () => {
  document.querySelector("body").style.backgroundColor = "rgb(51, 51, 204)";
  console.log("I was clicked!!!!!");
};
window.addEventListener("click", handleClick);
