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
let firstNumber = '';
let secondNumber = '';
let resultNumber = '';

let bottomNumber = '';

function init() {
    buttonSetup();
};

function reset() {
    bottomEntryDisplay.innerText = '';
    topEntryDisplay.innerText = '';
    firstNumber = '';
    secondNumber = '';
    resultNumber = '';
    bottomNumber = '';
};

function buttonSetup() {
    reset();
    buttonObjects.smallButtonArray.forEach(button => {
        const tagForSmallButton = `<button>${button}</button>`;
        calculatorSmallButtons.innerHTML += tagForSmallButton;
    });
    buttonObjects.largeButtonArray.forEach(button => {
        const tagForLargeButton = `<button>${button}</button>`;
        calculatorLargeButtons.innerHTML += tagForLargeButton;
    });
};

function bottomDisplay(buttonEntered) {
    bottomNumber += buttonEntered;
    bottomEntryDisplay.innerText += buttonEntered;
    console.log(bottomNumber)
};

function firstEntry(firstSign) {
    firstNumber = bottomEntryDisplay.innerText;
    transferEntryToTop(firstSign);
};

function secondEntry(secondSign) {
    firstNumber = resultNumber;
    transferEntryToTop(secondSign);
};

function transferEntryToTop(sign) {
    bottomNumber = '';
    bottomEntryDisplay.innerText = bottomNumber;
    topEntryDisplay.innerText = firstNumber += (' ' + sign);
};

function otherOperations(nonInteger) {
    const symbolInTopDisplay = firstNumber[firstNumber.length-1];
    switch(nonInteger) {
        case '.':
            if(!bottomNumber.includes('.')) {
                bottomNumber += '.';
                bottomEntryDisplay.innerText = bottomNumber;
                // console.log(bottomNumber)
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
};

function operations(operator, symbolInTopDisplay) {
    secondNumber = parseFloat(bottomNumber);
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
    const binary = parseInt(firstNumber).toString(2);
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