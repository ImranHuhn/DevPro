const inner = document.querySelector('.inner-circle');
const middle = document.querySelector('.middle-circle');
const outer = document.querySelector('.outer-circle');
const fox = document.getElementById('fox');

const followMouse = (e) => {
    let y = e.pageY + 'px';
    let x = e.pageX + 'px';

    inner.style.top = y;
    inner.style.left = x;

    middle.style.top =  y;
    middle.style.left =  x;

    outer.style.top = y;
    outer.style.left = x;   
}

const wildFox = () => {
    let width = Math.floor(Math.random() * window.innerWidth);
    let height = Math.floor(Math.random() * window.innerHeight);

    fox.style.top = height + 'px';
    fox.style.left  = width + 'px';
}

const hit = () => {
    console.log('hit');
    fox.style.color = 'red';
    fox.style.fontWeight = 'bolder';
    fox.style.fontSize = '24px';
    fox.innerHTML = `HIT`;
    clearInterval(interval);
}

const interval = setInterval(() => {
    wildFox();
}, 1000)

window.addEventListener('mousemove', followMouse);
window.addEventListener('load',wildFox);
fox.addEventListener('click', hit)

