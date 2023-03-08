const calculatorSmallButtons = document.querySelector('.calculator__small-buttons')
const calculatorLargeButtons = document.querySelector('.calculator__large-buttons')
const button = document.querySelector('button')


const variable = ['(TBD)'];
// const smallButtonArray = ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', 'C', '.', '0', '+'];
// const largeButtonArray = ['=', ...variable];

const buttonObjects = {
    smallButtonArray: ['7', '8', '9', '/', '4', '5', '6', 'x', '1', '2', '3', '-', 'C', '.', '0', '+'],
    largeButtonArray: ['=', ...variable]
}

function buttonSetup() {
    buttonObjects.smallButtonArray.forEach(button => {
        calculatorSmallButtons.innerHTML += `<button>${button}</button>`;
        // const createButton  = document.createElement("button");
        // createButton.innerText = button;
        // calculatorSmallButtons.appendChild(createButton);
    });
    buttonObjects.largeButtonArray.forEach(button => {
        calculatorLargeButtons.innerHTML += `<button>${button}</button>`;
        // const createButton  = document.createElement("button");
        // createButton.innerText = button;
        // calculatorLargeButtons.appendChild(createButton);
    });
}

function init() {
    buttonSetup();
}
// init();

window.addEventListener('load', init)

calculatorSmallButtons.addEventListener('click', (e) => {
    // console.log(e.target.tagName)
    if(e.target.tagName === 'BUTTON') {
        // console.log('pressed button');
    }
})
