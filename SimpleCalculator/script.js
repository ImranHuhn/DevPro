// Requirements:
// The app should have two inputs
// The app should have 4 buttons to perform math calculations (addition, subtraction, division, multiplication)
// Bonus points:
// Show a red border if the input contains anything else but a number

const display = document.querySelector("#result");
const firstInput = document.querySelector("#first-number");
const secondInput = document.querySelector("#second-number");
const multiply = document.querySelector("#multiplication");
const subtract = document.querySelector("#subtraction");
const divide = document.querySelector("#division");
const sum = document.querySelector("#sumation");

function validator() {
    if(this.value.length !== 0 && isNaN(this.value)){
        this.classList.add("invalid")
    } else {
        this.classList.remove("invalid");
    }
}

function operation(op) {
    const a = parseInt(firstInput.value);
    const b = parseInt(secondInput.value);
    switch(op) {
        case "multiply":
            display.innerText = a * b;
            break;

        case "subtract":
            display.innerText = a - b;
            break;
            
        case "divide":
            display.innerText = a / b;
            break;

        case "sum":
            display.innerText = a + b;
            break;
    }
}

firstInput.addEventListener("input", validator);
secondInput.addEventListener("input", validator);
multiply.addEventListener("click", () => {operation("multiply")});
subtract.addEventListener("click", () => {operation("subtract")});
divide.addEventListener("click", () => {operation("divide")});
sum.addEventListener("click", () => {operation("sum")});