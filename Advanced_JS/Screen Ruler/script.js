const width = document.querySelector('.width');

window.addEventListener('load', () => {
    width.textContent = window.innerWidth;

    window.addEventListener('resize', () => {
        console.log('resizing');
        width.textContent = window.innerWidth;
    })
})

