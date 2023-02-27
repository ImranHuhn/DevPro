const display = document.querySelector("#result");
const firstInput = document.querySelector("#first-number");
const secondInput = document.querySelector("#second-number");
const multiply = document.querySelector("#multiplication");
const subtract = document.querySelector("#subtraction");
const divide = document.querySelector("#division");
const sum = document.querySelector("#sumation");


function validator() {
  this.value.length !== 0 && isNaN(this.value)
    ? this.classList.add("invalid")
    : this.classList.remove("invalid");
}

function operation(op) {
    const a = parseInt(firstInput.value);
    const b = parseInt(secondInput.value);
    if (!isNaN(a) && !isNaN(b)) {
    switch (op) {
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
    } else {
        display.innerText = "ENTER NUMBERS";
    }
}

firstInput.addEventListener("input", validator);
secondInput.addEventListener("input", validator);
multiply.addEventListener("click", () => {operation("multiply")});
subtract.addEventListener("click", () => {operation("subtract")});
divide.addEventListener("click", () => {operation("divide")});
sum.addEventListener("click", () => {operation("sum")});


//////////////////////////////////////////////////////////
// game section

const special = document.querySelector("#special");
const start = document.querySelector("#start");
const exit = document.querySelector("#exit");
const submit = document.querySelector("#submit");
// const restart = document.querySelector("#restart");
const resultGame = document.querySelector("#result-game");
const sumGame = document.querySelector("#sum-game");
const subtractGame = document.querySelector("#subtract-game");
const multiplyGame = document.querySelector("#multiply-game");
const divisionGame = document.querySelector("#division-game");
const checkBox = document.querySelectorAll('.game');
const puppet = document.querySelector('.puppet');
const containerCalc = document.querySelector('.container-calc');
const containerGame = document.querySelector('.container-game');
const answerInput = document.querySelector('#answer-game');

let rightAns = 0;

function gameMode() {
    puppet.classList.add('add-puppet');
    containerCalc.classList.add('remove-calc');
    containerGame.classList.add('opacity-show');
}

function exitGameMode() {
    puppet.classList.remove('add-puppet');
    containerCalc.classList.remove('remove-calc');
    containerGame.classList.remove('opacity-show');
    reset();
}

// random operator
function randomParams() {
    let randomOp = "";
    const randomOne = Math.floor(Math.random() * document.querySelector('.number-range').value);
    const randomTwo = Math.floor(Math.random() * document.querySelector('.number-range').value);
    const checkArray = [];
    for(let i = 0; i < checkBox.length; i++){
        if(checkBox[i].checked === true) {
            checkArray.push(checkBox[i].value);
        }
    }
    randomOp = checkArray[Math.floor(Math.random() * checkArray.length)];
    calcGame(randomOne, randomOp, randomTwo);
}

function calcGame(a, op, b) {
    if (!isNaN(a) && !isNaN(b)) {
        switch (op) {
            case "multiply-game":
                rightAns = a * b;
                resultGame.innerText = a + ' x ' + b;
                break;
            case "subtract-game":
                rightAns = a - b;
                resultGame.innerText = a + ' - ' + b;
                break;
            case "divide-game":
                rightAns = a / b;
                resultGame.innerText = a + ' / ' + b;
                break;
            case "sum-game":
                rightAns = a + b;
                resultGame.innerText = a + ' + ' + b;
                break;
        }
    } else {
        resultGame.innerText = "ENTER NUMBERS";
    }
}

function matchAns(z) {
    if(parseInt(document.querySelector('#answer-game').value) === z){
        timerReset();
        randomParams();
    } else {
        resultGame.innerText = 'WRONG!';
        resultGame.style.color = 'red';
        showDownload();
    }
}

function reset() {
    resultGame.style.color = 'white';
}

answerInput.addEventListener("input", validator);
special.addEventListener("click", gameMode);
exit.addEventListener("click", exitGameMode);
start.addEventListener("click", () => {
    reset();
    randomParams();
    timerStart();
});
submit.addEventListener("click", () => {
    matchAns(rightAns);
})

/////////////////////////
// download bar

const downloadBar = document.querySelector('.download-bar');
const chevronIcon = document.querySelector('.download-bar__chevron-wrapper');
const fileName = document.querySelector('.download-bar__file-name');
const circleImage = document.querySelector('.download-bar__circle-image');
const arrowIcon = document.querySelector('.download-bar__arrow-wrapper');
const timerDisplay = document.querySelector('.download-seconds');

let startCount = 5;
let countDown = startCount;
let countTimer;
let countTimeout;

timerDisplay.innerText = countDown;

function timerStart() {
    countTimer = setInterval(() => {
        timerDisplay.innerText = --countDown;
    }, 1000)
    
    countTimeout = setTimeout(() => {
        clearInterval(countTimer);
        (countDown <= 0 ? showDownload() : removeDownload())
    }, 1000 * countDown); 
}

function timerStop() {
    clearInterval(countTimer);
    clearInterval(countTimeout);
}

function timerReset() {
    timerStop();
    countDown = startCount;
    timerDisplay.innerText = countDown;
    timerStart();
}

function showDownload() {
    downloadBar.classList.add('show-download-bar');
    chevronIcon.classList.add('show-download-file');
    fileName.classList.add('show-download-file');
    arrowIcon.classList.add('move-arrow-down');
    arrowIcon.classList.add('remove-arrow');
    arrowIcon.classList.add('visible');
    fileCircle();
} 

function removeDownload() {
    downloadBar.classList.remove('show-download-bar');
    chevronIcon.classList.remove('show-download-file');
    fileName.classList.remove('show-download-file');
    arrowIcon.classList.remove('move-arrow-down');
    arrowIcon.classList.remove('visible');
}

function fileCircle() {
    const circle = setInterval(() => {
        (!circleImage.classList.contains('display-none') 
        ? circleImage.classList.add('display-none')
        : circleImage.classList.remove('display-none'));
    }, 800) 

    setTimeout(() => {
        clearInterval(circle);
    }, 1000 * 4)

    if(!circleImage.classList.contains('display-none')){
        circleImage.classList.remove('display-none');
    }
}