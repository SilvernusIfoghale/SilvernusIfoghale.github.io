const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = '';
}

function back() {
  let current_display = display.value.slice(0, -1);
  display.value = current_display;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

const icon = document.getElementById('lightmode');
icon.addEventListener('click', (event) => {
  document.body.classList.toggle('lightmode');
  if (document.body.classList.contains('lightmode')) {
    icon.src = 'icons8-moon-100.png';
  } else {
    icon.src = 'icons8-sun-100.png';
  }
});
