const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value;
  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
}
