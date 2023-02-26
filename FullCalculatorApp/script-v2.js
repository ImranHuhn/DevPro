const previousEntries = document.querySelector('.previous-entries')
const currentEntries = document.querySelector('.current-entries')
const calculatorSmallButtons = document.querySelector('.calculator__small-buttons')
const calculatorLargeButtons = document.querySelector('.calculator__large-buttons')
const button = document.querySelector('button')


const variable = ['(TBD)'];
const buttonObjects = {
    smallButtonArray: ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', 'C', '.', '0', '+'],
    largeButtonArray: ['=', ...variable]
}

function init() {
    buttonSetup();
}

function buttonSetup() {
    buttonObjects.smallButtonArray.forEach(button => {
        calculatorSmallButtons.innerHTML += `<button>${button}</button>`;
    });
    buttonObjects.largeButtonArray.forEach(button => {
        calculatorLargeButtons.innerHTML += `<button>${button}</button>`;
    });
}

function currentDisplay(buttonEntered) {
    currentEntries.innerText += buttonEntered;
}

function buttonPress(e) {
    let number = e.target.innerText;
    const tag = e.target.tagName;
    const integer = parseInt(e.target.innerText);

    if(tag === 'BUTTON' && integer) {
        currentDisplay(e.target.innerText)
        // console.log('pressed button');
        // console.log(e.target.innerText);
        // console.log(number);
    }
}

window.addEventListener('load', init)

calculatorSmallButtons.addEventListener('click', e => buttonPress(e));
calculatorLargeButtons.addEventListener('click', e => buttonPress(e));
