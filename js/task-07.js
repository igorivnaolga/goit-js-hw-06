const fontControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

console.log(fontControl.value);
const handler = (event) => {
  const font = event.currentTarget.value;
  text.style.fontSize = `${font}px`;
};

fontControl.addEventListener('input', handler);
