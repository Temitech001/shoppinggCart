const minusButton = document.getElementById('minus-btn');
const h3 = document.getElementById('res-btn');
const plusButton = document.getElementById('plus-btn');

let number = 0;
h3.textContent = number;

minusButton.addEventListener('click', () => {
  h3.textContent = --number;
});
plusButton.addEventListener('click', () => {
  h3.textContent = ++number;
});
