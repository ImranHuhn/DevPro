const previousEntryDisplay = document.querySelector('.previous-entries');
const currentEntryDisplay = document.querySelector('.current-entries');
const calculatorSmallButtons = document.querySelector('.calculator__small-buttons');
const calculatorLargeButtons = document.querySelector('.calculator__large-buttons');
const button = document.querySelector('button');

const buttonObjects = {
    smallButtonArray: ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', 'C', '.', '0', '+'],
    largeButtonArray: ['=', 'To Binary'],
};

const symbol = previousEntryDisplay.innerText[previousEntryDisplay.innerText.length-1];
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
    resultNumber = 0;
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

function firstEntry(firstSign) {
    firstNumber = currentEntryDisplay.innerText;
    transferEntryToTop(firstSign);
}

function secondEntry(secondSign) {
    firstNumber = resultNumber;
    transferEntryToTop(secondSign);
}

function transferEntryToTop(sign) {
    currentEntryDisplay.innerText = '';
    previousEntryDisplay.innerText = firstNumber += (' ' + sign);
}

function otherOperations(nonInteger) {
    switch(nonInteger) {
        case '.':
            if(!currentEntryDisplay.innerText.includes('.')) {
                currentEntryDisplay.innerText += '.';
            }
            break;
        case '=':
            operations(symbol);
            firstNumber = resultNumber;
            previousEntryDisplay.innerText = resultNumber;
            break;
        case 'C':
            reset();
            break;
        case 'To Binary':
            toBinary();
            break;
        default:
            operations(nonInteger)
    }
}

function operations(operator) {
    secondNumber = parseFloat(currentEntryDisplay.innerText);
    firstNumber = parseFloat(firstNumber);

    if(previousEntryDisplay.innerText === '') {
        firstEntry(operator);
    } else if (isNaN(symbol)) {
        switch(operator){
            case '/':
                    resultNumber = firstNumber / secondNumber;
                break;
            case 'x':
                    resultNumber = firstNumber * secondNumber;
                break;
            case '-':
                    resultNumber = firstNumber - secondNumber;
                break;
            case '+':
                    resultNumber = firstNumber + secondNumber;
                break;
        }
        secondEntry(operator);
    } else {
        reset();
    }
};

function toBinary() {
    const binary = parseInt(currentEntryDisplay.innerText).toString(2);
    previousEntryDisplay.innerText = binary;
};

function buttonPress(e) {
    const value = e.target.innerText;
    const tag = e.target.tagName === 'BUTTON';
    if(tag && !isNaN(value)) {
        currentDisplay(value);
    } else if(tag && isNaN(value)) {
        otherOperations(value);
    }
};

window.addEventListener('load', init);
calculatorSmallButtons.addEventListener('click',buttonPress);
calculatorLargeButtons.addEventListener('click',buttonPress);