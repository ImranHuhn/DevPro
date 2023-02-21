const text = document.getElementById('text')

document.addEventListener('keydown', (e) => {
    text.innerText += e.key;
    if(e.code == 'Space') {
        text.innerHTML += '&nbsp';
    }
    console.log(e.key)
    console.log(e.code)
});