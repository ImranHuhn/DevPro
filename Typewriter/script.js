const text = document.querySelector('#text');
const highlightBackground = document.querySelector('.highlight__background');
const highlightContainer = document.querySelector('.highlight__container');
const keyDisplay = document.querySelector('#hightlight__key');

const enterKey = (e) => {
    text.innerText += e.key;    
    keyDisplay.innerText = e.key;  

    highlightBackground.classList.add('display');
    highlightContainer.classList.add('display');

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
    highlightBackground.classList.remove('display');
    highlightContainer.classList.remove('display');
}

document.addEventListener('keydown', enterKey);
document.addEventListener('keyup', exitKey);

//event listener for keydown
    //show modal, key, background
//event listener for keyup
    //remove modal, background, key