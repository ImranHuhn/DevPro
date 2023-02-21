const text = document.getElementById('text')

document.addEventListener('keydown', (e) => {
    text.innerText += e.key;
    if(e.code == 'Space') {
        text.innerHTML += '&nbsp';
    } else if (e.code == 'Backspace') {
        console.log(typeof text.innerText)
        console.log(text.innerText)
        text.innerText = text.innerText.slice(0, -10); // -10 because when i press backspace the output is "Backspace" which is 9 characters. so 10 characters has to be removed to include deleting the character before "Backspace"
    } else if (e.code == 'Enter'){
        text.innerText = text.innerText.slice(0, -5);
        text.innerHTML += `<br>`
    }

    console.log(e.key)
    console.log(e.code)
});