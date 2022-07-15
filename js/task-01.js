const categoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemEl.length}`);

categoryItemEl.forEach(element => {

    const nameElements = element.querySelector('h2');
    console.log(`Category: ${nameElements.textContent}`);

    const numberElements = element.querySelectorAll('li');
    console.log(`Elements: ${numberElements.length}`);
});
