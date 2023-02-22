const text = document.querySelector('#text');
const highlightContainer = document.querySelector('.highlight__container');
const keyDisplay = document.querySelector('#hightlight__key');

const enterKey = (e) => {
    text.innerText += e.key;    
    keyDisplay.innerText = e.key;  
    
    highlightContainer.classList.add('transition');
    keyDisplay.classList.add('display');

    switch(e.code){
        case 'Space':
            text.innerHTML += '&nbsp';
            keyDisplay.innerHTML = 'Space';
            break;
        case 'Backspace':
            console.log(typeof text.innerText)
            console.log(text.innerText)
            text.innerText = text.innerText.slice(0, -10);
            break;
        case 'Enter':
            text.innerText = text.innerText.slice(0, -5);
            text.innerHTML += `<br>`
    } 
};

const exitKey = () => {
    highlightContainer.classList.remove('transition');
    keyDisplay.classList.remove('display');
}

document.addEventListener('keydown', enterKey);
document.addEventListener('keyup', exitKey);
