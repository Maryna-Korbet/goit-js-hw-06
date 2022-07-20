const elRef = document.querySelector("#validation-input");
const validEl = parseInt(elRef.getAttribute("data-length"));

elRef.addEventListener("blur", (event) => {

    if (validEl === event.currentTarget.value.length) { 
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    }
    else { 
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
});


