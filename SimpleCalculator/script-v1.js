// Requirements:
// The app should have two inputs
// The app should have 4 buttons to perform math calculations (addition, subtraction, division, multiplication)
// Bonus points:
// Show a red border if the input contains anything else but a number

const displayResult = document.querySelector('#result');
const firstNum = document.querySelector('#first-number');
const secondNum = document.querySelector('#second-number');
const multiply = document.querySelector('#multiplication');
const subtract = document.querySelector('#subtraction');
const divide = document.querySelector('#division');
const sum = document.querySelector('#sumation');



///////////////////////////////inputs
// first input
firstNum.addEventListener('input', () => {
    if (firstNum.value.trim().length && isNaN(firstNum.value)) {
        firstNum.classList.add('invalid')
      } else {
        firstNum.classList.remove('invalid')
      }
})

// second input
secondNum.addEventListener('input', () => {
    if (secondNum.value.trim().length && isNaN(secondNum.value)) {
        secondNum.classList.add('invalid')
      } else {
        secondNum.classList.remove('invalid')
      }
})

///////////////////////////////calculations
// multiply button
multiply.addEventListener('click', () => {
    const result = parseInt(firstNum.value) * parseInt(secondNum.value);
    displayResult.innerText = result;
    return result;
})

// subtract button
subtract.addEventListener('click', () => {
    const result = parseInt(firstNum.value) - parseInt(secondNum.value);
    displayResult.innerText = result;
    return result;
})

// divide button
divide.addEventListener('click', () => {
    const result = parseInt(firstNum.value) / parseInt(secondNum.value);
    displayResult.innerText = result;
    return result;
})

// add button
sum.addEventListener('click', () => {
    const result = parseInt(firstNum.value) + parseInt(secondNum.value);
    displayResult.innerText = result;
    return result;
})




