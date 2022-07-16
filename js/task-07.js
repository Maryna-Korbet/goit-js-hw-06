const inputRef = document.querySelector("#font-size-control");

function onInputChange(event) {
    let spanRef = document.querySelector("#text");
    let value = event.currentTarget.value;
    spanRef.style.fontSize = value + "px";  
}

inputRef.addEventListener('input', onInputChange);



