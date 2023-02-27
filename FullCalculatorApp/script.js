const topEntryDisplay = document.querySelector('.top-entries');
const bottomEntryDisplay = document.querySelector('.bottom-entries');
const calculatorSmallButtons = document.querySelector('.calculator__small-buttons');
const calculatorLargeButtons = document.querySelector('.calculator__large-buttons');
const button = document.querySelector('button');

const buttonObjects = {
    smallButtonArray: ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', 'C', '.', '0', '+'],
    largeButtonArray: ['=', 'To Binary'],
};

const symbolInTopDisplay = topEntryDisplay.innerText[topEntryDisplay.innerText.length-1];
let firstNumber = 0;
let secondNumber = 0;
let resultNumber = 0;

function init() {
    buttonSetup();
};

function reset() {
    bottomEntryDisplay.innerText = '';
    topEntryDisplay.innerText = '';
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

function bottomDisplay(buttonEntered) {
    bottomEntryDisplay.innerText += buttonEntered;
};

function firstEntry(firstSign) {
    firstNumber = bottomEntryDisplay.innerText;
    transferEntryToTop(firstSign);
}

function secondEntry(secondSign) {
    firstNumber = resultNumber;
    transferEntryToTop(secondSign);
}

function transferEntryToTop(sign) {
    bottomEntryDisplay.innerText = '';
    topEntryDisplay.innerText = firstNumber += (' ' + sign);
}

function otherOperations(nonInteger) {
    const symbolInTopDisplay = topEntryDisplay.innerText[topEntryDisplay.innerText.length-1];
    switch(nonInteger) {
        case '.':
            if(!bottomEntryDisplay.innerText.includes('.')) {
                bottomEntryDisplay.innerText += '.';
            }
            break;
        case '=':
            operations(symbolInTopDisplay);
            firstNumber = resultNumber;
            topEntryDisplay.innerText = resultNumber;
            break;
        case 'C':
            reset();
            break;
        case 'To Binary':
            toBinary();
            break;
        default:
            operations(nonInteger, symbolInTopDisplay)
    }
}

function operations(operator, symbolInTopDisplay) {
    secondNumber = parseFloat(bottomEntryDisplay.innerText);
    firstNumber = parseFloat(firstNumber);

    if(topEntryDisplay.innerText === '') {
        firstEntry(operator);
    } else if (isNaN(symbolInTopDisplay)) {
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
    const binary = parseInt(bottomEntryDisplay.innerText).toString(2);
    topEntryDisplay.innerText = binary;
};

function buttonPress(e) {
    const value = e.target.innerText;
    const tag = e.target.tagName === 'BUTTON';
    if(tag && !isNaN(value)) {
        bottomDisplay(value);
    } else if(tag && isNaN(value)) {
        otherOperations(value);
    }
};

window.addEventListener('load', init);
calculatorSmallButtons.addEventListener('click',buttonPress);
calculatorLargeButtons.addEventListener('click',buttonPress);