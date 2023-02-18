const button = document.getElementById('button');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
const newDiv = document.createElement('div');

let buttonCounter = 0;

button.addEventListener('click', ()=>{

    buttonCounter += 1;
    button.innerHTML = buttonCounter;

    if(buttonCounter % 2 == 0){
        newDiv.className = 'box';
        newDiv.innerHTML = buttonCounter;
        even.appendChild(newDiv.cloneNode(true))
        return;
    } else if(buttonCounter % 3 == 0 || 1){
        newDiv.className = 'box';
        newDiv.innerHTML = buttonCounter;
        odd.appendChild(newDiv.cloneNode(true))
        return;
    }
})


