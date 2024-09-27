const range_value = document.querySelector(".range");
const body = document.querySelector("body");

range_value.addEventListener("mousemove", () => {
  range_data();
});
range_value.addEventListener("click", () => {
  range_data();
});

const range_data = () => {
  if (range_value.value === "2") {
    localStorage.setItem("value", range_value.value);
    body.classList.remove("theme-3");
    body.classList.add("theme-2");
  } else if (range_value.value === "3") {
    localStorage.setItem("value", range_value.value);
    body.classList.remove("theme-2");
    body.classList.add("theme-3");
  } else {
    localStorage.setItem("value", "1");
    body.classList.remove("theme-2");
    body.classList.remove("theme-3");
  }
};

range_value.value = window.onload = localStorage.getItem("value");
range_data();

// Main function starts here

const keys = document.querySelectorAll(".btn-container .key");
const screen = document.querySelector(".screen");

let input = "";

for (let key of keys) {
  const value = key.dataset.key;
  key.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      screen.value = "";
    } else if (value == "backspace") {
      input = input.slice(0, -1);
      screen.value = CleanInput(input);
    } else if (value == "=") {
      let result = eval(PrepareInput(input));
      screen.value = result;
    } else {
      if (ValidateInput(value)) {
        input += value;
        screen.value = CleanInput(input);
      }
    }
  });
}

function CleanInput(input) {
  let input_array = input.split("");
  let input_array_length = input_array.length;

  for (let i = 0; i < input_array_length; i++) {
    if (input_array[i] == "*") {
      input_array[i] = ` x`;
    } else if (input_array[i] == "/") {
      input_array[i] = ` ÷ `;
    } else if (input_array[i] == "+") {
      input_array[i] = ` + `;
    } else if (input_array[i] == "-") {
      input_array[i] = ` - `;
    }
  }

  return input_array.join("");
}

function ValidateInput(value) {
  let last_input = input.slice(-1);
  let operators = ["+", "-", "*", "/"];

  if (value == "." && last_input == ".") {
    return false;
  }

  if (operators.includes(value)) {
    if (operators.includes(last_input)) {
      return false;
    } else {
      return true;
    }
  }

  return true;
}

function PrepareInput(input) {
  let input_array = input.split("");

  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] == "%") {
      input_array[i] = "/100";
    }
  }

  return input_array.join("");
}
