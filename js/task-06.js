const elRef = document.querySelector("#validation-input");

elRef.addEventListener('blur', onBlurEl);
    
function onBlurEl() {
    console.log(elRef.value.length);
    if (elRef.getAttribute('data-length') > elRef.value.length) { 
        elRef.classList.remove('valid');
        elRef.classList.add('invalid');
    }
    else {
        elRef.classList.remove('invalid');
        elRef.classList.add('valid');
    }
};



