function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
let color = document.querySelector(".color");

button.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  color.textContent = `${newColor}`;
}
