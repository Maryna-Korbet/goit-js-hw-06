const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const createElementsLi = ingredients.map(ingredient => {
  const elementLi = document.createElement('li');
  elementLi.textContent = ingredient;
  elementLi.classList.add('item');

  return elementLi;
});

console.log(createElementsLi);

list.append(...createElementsLi);
console.log(list);



