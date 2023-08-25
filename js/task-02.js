const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngridients = document.querySelector('#ingredients');

const markup = ingredients.map((ingridient) => {
  const li = document.createElement('li');
  li.textContent = ingridient;
  li.classList = 'ingridient';
  console.log(li);
  return li;
});

listOfIngridients.append(...markup);
