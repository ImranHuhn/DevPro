const previousEntryDisplay = document.querySelector('.previous-entries');
const currentEntryDisplay = document.querySelector('.current-entries');
const calculatorSmallButtons = document.querySelector('.calculator__small-buttons');
const calculatorLargeButtons = document.querySelector('.calculator__large-buttons');
const button = document.querySelector('button');

const buttonObjects = {
    smallButtonArray: ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', 'C', '.', '0', '+'],
    largeButtonArray: ['=', 'To Binary'],
};

let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;

function init() {
    buttonSetup();
};

function reset() {
    currentEntryDisplay.innerText = '';
    previousEntryDisplay.innerText = '';
    firstNumber = 0;
    secondNumber = 0;
    resultNumber = 0
};

function buttonSetup() {
    reset();
    buttonObjects.smallButtonArray.forEach(button => {
        calculatorSmallButtons.innerHTML += `<button>${button}</button>`;
    });
    buttonObjects.largeButtonArray.forEach(button => {
        calculatorLargeButtons.innerHTML += `<button>${button}</button>`;
    });
};

function currentDisplay(buttonEntered) {
    currentEntryDisplay.innerText += buttonEntered;
};

function firstEntry(sign) {
    firstNumber = currentEntryDisplay.innerText;
    currentEntryDisplay.innerText = '';
    previousEntryDisplay.innerText = firstNumber += (' ' + sign);
}

function secondEntry(sign) {
    currentEntryDisplay.innerText = '';
    firstNumber = resultNumber;
    previousEntryDisplay.innerText = firstNumber += (' ' + sign);
}

function operations(operator) {
    const symbol = previousEntryDisplay.innerText[previousEntryDisplay.innerText.length-1];
    secondNumber = parseFloat(currentEntryDisplay.innerText);
    firstNumber = parseFloat(firstNumber);
    switch(operator){
        case '/':
            if(previousEntryDisplay.innerText === '') {
                firstEntry(operator)
            } else if (isNaN(symbol)) {
                resultNumber = firstNumber / secondNumber;
                secondEntry(operator)
            } else {
                reset()
            }
            break;
        case 'x':
            if(previousEntryDisplay.innerText === '') {
                firstEntry(operator)
            } else if (isNaN(symbol)) {
                resultNumber = firstNumber * secondNumber;
                secondEntry(operator)
            } else {
                reset()
            }
            break;
        case '-':
            if(previousEntryDisplay.innerText === '') {
                firstEntry(operator)
            } else if (isNaN(symbol)) {
                resultNumber = firstNumber - secondNumber;
                secondEntry(operator)
            } else {
                reset()
            }
            break;
        case '+':
            if(previousEntryDisplay.innerText === '') {
                firstEntry(operator)
            } else if (isNaN(symbol)) {
                resultNumber = firstNumber + secondNumber;
                secondEntry(operator)
            } else {
                reset()
            }
            break;
        case '.':
            if(!currentEntryDisplay.innerText.includes('.')) {
                currentEntryDisplay.innerText += '.';
            }
            break;
        case '=':
            operations(symbol);
            firstNumber = resultNumber;
            previousEntryDisplay.innerText = resultNumber;
            console.log(firstNumber,secondNumber,resultNumber);
            break;
        case 'C':
            reset();
            break;
        case 'To Binary':
            toBinary();
            break;
    }
};

function toBinary() {
    const binary = parseInt(currentEntryDisplay.innerText).toString(2);
    previousEntryDisplay.innerText = binary
    console.log('binary')
}

function buttonPress(e) {
    const value = e.target.innerText;
    const tag = e.target.tagName;
    if(tag === 'BUTTON' && !isNaN(value)) {
        currentDisplay(value);
    } else if(tag === 'BUTTON' && isNaN(value)) {
        operations(value);
    }
};

window.addEventListener('load', init);
calculatorSmallButtons.addEventListener('click', e => buttonPress(e));
calculatorLargeButtons.addEventListener('click', e => buttonPress(e));