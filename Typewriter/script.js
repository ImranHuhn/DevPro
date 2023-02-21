const text = document.getElementById('text')

document.addEventListener('keydown', (e) => {
    text.innerText += e.key;
    console.log(e.key)
});