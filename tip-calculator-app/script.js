const bill = document.querySelector("#bill");

const percentage_btn = document.querySelectorAll(".percentage-btn");

const custom_input = document.querySelector("#custom");

const persons = document.querySelector("#people");

const person_tip = document.querySelector("#person-tip");

const total = document.querySelector("#total-tip");

const input_warning = document.querySelector(".people-container");
const warning_text = document.querySelector(".warning");
const reset_style = document.querySelector(".reset");
let percentage;
let bill_input;
let person_input;

percentage_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    percentage_btn.forEach((btn) => {
      btn.removeAttribute("id");
      custom_input.value = "";
    });
    btn.setAttribute("id", "btn-selected");
    percentage = parseInt(btn.textContent);

    bill_input = parseInt(bill.value);
    person_input = parseInt(persons.value);

    if (bill_input !== null && bill_input > 0) {
      if (person_input !== null && person_input > 0) {
        const person_tip_result =
          (bill_input * percentage) / 100 / person_input;
        const total_tip = bill_input / person_input + person_tip_result;

        person_tip.textContent = parseFloat(person_tip_result).toFixed(2);
        total.textContent = parseFloat(total_tip).toFixed(2);
        reset_style.setAttribute("id", "btn-reset");
        input_warning.classList.remove("border-warning");
        warning_text.classList.remove("visible");
      } else {
        warning_text.classList.add("visible");
        input_warning.classList.add("border-warning");
        console.log("cannot calculate at this time");
      }
    } else {
      reset_style.removeAttribute("id", "btn-reset");
    }
  });
});

persons.addEventListener("input", () => {
  person_input = parseInt(persons.value);
  bill_input = parseInt(bill.value);
  input_warning.classList.remove("border-warning");
  warning_text.classList.remove("visible");
  if (bill_input > 0) {
    if (person_input === "") {
    }
    if (percentage !== null && percentage > 0 && person_input) {
      const person_tip_result = (bill_input * percentage) / 100 / person_input;
      const total_tip = bill_input / person_input + person_tip_result;

      person_tip.textContent = parseFloat(person_tip_result).toFixed(2);
      total.textContent = parseFloat(total_tip).toFixed(2);
      reset_style.setAttribute("id", "btn-reset");
    } else {
      input_warning.classList.add("border-warning");
      warning_text.classList.add("visible");
      console.log("cannot calculate at this time");
    }
  } else {
    reset_style.removeAttribute("id", "btn-reset");
  }
});

custom_input.addEventListener("input", () => {
  percentage_btn.forEach((btn) => {
    btn.removeAttribute("id");
    percentage = custom_input.value;
    console.log(percentage);
  });
  bill_input = parseInt(bill.value);
  person_input = parseInt(persons.value);

  if (bill_input !== null && bill_input > 0) {
    if (person_input !== null && person_input > 0) {
      const person_tip_result = (bill_input * percentage) / 100 / person_input;
      const total_tip = bill_input / person_input + person_tip_result;

      person_tip.textContent = parseFloat(person_tip_result).toFixed(2);
      total.textContent = parseFloat(total_tip).toFixed(2);
      reset_style.setAttribute("id", "btn-reset");
      input_warning.classList.remove("border-warning");
      warning_text.classList.remove("visible");
    } else {
      warning_text.classList.add("visible");
      input_warning.classList.add("border-warning");
      console.log("cannot calculate at this time");
    }
  } else {
    reset_style.removeAttribute("id", "btn-reset");
  }
});

reset_style.addEventListener("click", () => {
  const check = reset_style.getAttribute("id");
  if (check === "btn-reset") {
    bill.value = "";
    percentage_btn.forEach((btn) => {
      btn.removeAttribute("id");
    });
    persons.value = "";
    person_tip_result = "0.00";
    person_tip.textContent = "0.00";
    total.textContent = "0.00";
    custom_input.value = "";
  } else {
    console.log("null");
  }
});
