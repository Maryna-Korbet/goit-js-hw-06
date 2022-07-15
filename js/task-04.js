const span = document.querySelector("#value");
const addСounter = document.querySelector("[data-action='decrement']");
const removeCounter = document.querySelector("[data-action='increment']");

let counterValue = 0;

const increment = (event) => {
    counterValue = counterValue + 1;
    span.textContent = counterValue;
}

const decrement = (event) => {
    counterValue = counterValue - 1;
    span.textContent = counterValue;
}

addСounter.addEventListener('click', decrement);
removeCounter.addEventListener('click', increment);



