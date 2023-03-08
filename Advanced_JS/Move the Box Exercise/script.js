const button = document.querySelector('.button');
const box = document.querySelector('.box');

button.addEventListener('click', () => {
    
    document.querySelector('.box').classList.remove('white');

    if(!box.classList.contains('right')){
        document.querySelector('.box').classList.add('right')
    } else {
        document.querySelector('.box').classList.remove('right')
    }
})