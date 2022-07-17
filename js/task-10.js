function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesDiv: document.querySelector("#boxes"),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createEl(amount) {
    const basicSize = 20;
    for (let i = 0; i < amount; i += 1) {
    const size = basicSize + i * 10;
    let divEl = document.createElement("div");
    divEl.textContent = `${i + 1}`;
    divEl.style.width = `${size}px`;
    divEl.style.height = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    refs.boxesDiv.appendChild(divEl);
  }
};

function createBoxes(){
  createEl(refs.input.value);
}

function destroyBoxes() {
  refs.boxesDiv.innerHTML = "";
}

