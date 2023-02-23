// Requirements:
// The app should have two inputs
// The app should have 4 buttons to perform math calculations (addition, subtraction, division, multiplication)
// Bonus points:
// Show a red border if the input contains anything else but a number

const displayResult = document.querySelector('#result')
const firstNum = document.querySelector('#first-number');
const secondNum = document.querySelector('#second-number');
const multiply = document.querySelector('#multiplication');
const subtract = document.querySelector('#subtraction');
const divide = document.querySelector('#division');
const sum = document.querySelector('#sumation');



///////////////////////////////inputs
// first input
firstNum.addEventListener('blur', () => {
    if(isNaN(firstNum.value)){
        console.log('I said, IT IS NOT A NUMBER!!!')
    }
});
firstNum.addEventListener('focus', () => {
    if(isNaN(firstNum.value)){
        console.log('Bruh, this is not a number')
    }
});
firstNum.addEventListener('keyup', () => {
    parseInt(firstNum.value)
    console.log(parseInt(firstNum.value))
});

// second input
secondNum.addEventListener('blur', () => {
    if(isNaN(secondNum.value)){
        console.log('I said, IT IS NOT A NUMBER!!!')
    }
});
secondNum.addEventListener('focus', () => {
    if(isNaN(secondNum.value)){
        console.log('Bruh, this is not a number')
    }
});
secondNum.addEventListener('keyup', () => {
    parseInt(secondNum.value)
    console.log(parseInt(secondNum.value))
});

///////////////////////////////calculations
// multiply button
multiply.addEventListener('click', () => {
    const result = parseInt(firstNum.value) * parseInt(secondNum.value);
    displayResult.innerText = result
    console.log(result)
    return result;
})

// subtract button
subtract.addEventListener('click', () => {
    const result = parseInt(firstNum.value) - parseInt(secondNum.value);
    displayResult.innerText = result
    console.log(result)
    return result;
})

// divide button
divide.addEventListener('click', () => {
    const result = parseInt(firstNum.value) / parseInt(secondNum.value);
    displayResult.innerText = result
    console.log(result)
    return result;
})

// add button
sum.addEventListener('click', () => {
    const result = parseInt(firstNum.value) + parseInt(secondNum.value);
    displayResult.innerText = result
    console.log(result)
    return result;
})




