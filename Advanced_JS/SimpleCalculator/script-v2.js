// Requirements:
// The app should have two inputs
// The app should have 4 buttons to perform math calculations (addition, subtraction, division, multiplication)
// Bonus points:
// Show a red border if the input contains anything else but a number

const display = document.querySelector("#result");
const firstNum = document.querySelector("#first-number");
const secondNum = document.querySelector("#second-number");
const multiply = document.querySelector("#multiplication");
const subtract = document.querySelector("#subtraction");
const divide = document.querySelector("#division");
const sum = document.querySelector("#sumation");

function input() {
  this.value.length !== 0 && isNaN(this.value)
    ? this.classList.add("invalid")
    : this.classList.remove("invalid");
}

multiply.addEventListener(
  "click",
  () =>
    (display.innerText = parseInt(firstNum.value) * parseInt(secondNum.value))
);
subtract.addEventListener(
  "click",
  () =>
    (display.innerText = parseInt(firstNum.value) - parseInt(secondNum.value))
);
divide.addEventListener(
  "click",
  () =>
    (display.innerText = parseInt(firstNum.value) / parseInt(secondNum.value))
);
sum.addEventListener(
  "click",
  () =>
    (display.innerText = parseInt(firstNum.value) + parseInt(secondNum.value))
);
firstNum.addEventListener("input", input);
secondNum.addEventListener("input", input);
