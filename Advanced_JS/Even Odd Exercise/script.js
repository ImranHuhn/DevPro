const button = document.getElementById('button');
const even = document.getElementById('even');
const odd = document.getElementById('odd');

let buttonCounter = 0;

button.addEventListener('click', () => {
    const div = document.createElement('div');

    buttonCounter += 1;
    console.log(buttonCounter)
    div.classList.add('box');
    div.innerHTML = buttonCounter;

    if(buttonCounter % 2 == 0){
        even.appendChild(div)
    } else {
        odd.appendChild(div)
    }
});
// button.onclick = () => {
//     const div = document.createElement('div');

//     buttonCounter += 1;
//     console.log(buttonCounter)

//     if(buttonCounter % 2 == 0){
//         div.classList.add('box');
//         div.innerHTML = buttonCounter;
//         even.appendChild(div)
//         return;
//     } else if(buttonCounter % 3 == 0 || 1){
//         div.classList.add('box');
//         div.innerHTML = buttonCounter;
//         odd.appendChild(div)
//         return;
//     }
// };

// button.addEventListener('click', ()=>{
    // const div = document.createElement('div');

//     buttonCounter += 1;
//     button.innerHTML = buttonCounter;

//     if(buttonCounter % 2 == 0){
//         newDiv.className = 'box';
//         newDiv.innerHTML = buttonCounter;
//         even.appendChild(newDiv.cloneNode(true))
//         return;
//     } else if(buttonCounter % 3 == 0 || 1){
//         newDiv.className = 'box';
//         newDiv.innerHTML = buttonCounter;
//         odd.appendChild(newDiv.cloneNode(true))
//         return;
//     }
// })


