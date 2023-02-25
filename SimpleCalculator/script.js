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


const special = document.querySelector("#special");
const start = document.querySelector("#start");
const sumGame = document.querySelector("#sum-game");
const subtractGame = document.querySelector("#subtract-game");
const multiplyGame = document.querySelector("#multiply-game");
const divisionGame = document.querySelector("#division-game");
const checkBox = document.querySelectorAll('.game');


special.addEventListener("click", () => {
    document.querySelector('img').classList.add('add-puppet');
    document.querySelector('.container-calc').classList.add('remove-calc');
    document.querySelector('.container-game').classList.add('opacity-show');
});


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
    // console.log(checkArray)
    // console.log(random)
    console.log(randomOp);

    console.log(randomOne, randomTwo);
}


// random number
// function randomNumbers() {
//     const randomOne = Math.floor(Math.random() * document.querySelector('.number-range').value);
//     const randomTwo = Math.floor(Math.random() * document.querySelector('.number-range').value);
//     console.log(randomOne, randomTwo);
//     return randomOne, randomTwo;
// }



start.addEventListener("click", () => {
    // console.log('btn clicked')
    
    // if(sumGame.checked){
    //     console.log(sumGame.value)
    // } else if(subtractGame.checked){
    //     console.log(subtractGame.value)
    // } else if(multiplyGame.checked){
    //     console.log(multiplyGame.value)
    // } else if(divisionGame.checked){
    //     console.log(divisionGame.value)
    // }
    randomParams();
    // randomNumbers();
    // console.log(document.querySelector('.number-range').value)
});

