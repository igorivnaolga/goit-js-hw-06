function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const page = document.querySelector('body');

const handleClick = (event) => {
  return (page.style.backgroundColor = getRandomHexColor());
};
changeColorBtn.addEventListener('click', handleClick);
