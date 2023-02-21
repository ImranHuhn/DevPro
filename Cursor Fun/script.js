const inner = document.querySelector('.inner-circle');
const middle = document.querySelector('.middle-circle');
const outer = document.querySelector('.outer-circle');
const fox = document.querySelector('#fox');
const body = document.querySelector('body');
const reset = document.querySelector('button');

function xy(element, y, x){
    element.style.top = y;
    element.style.left = x;
}

function getRandomCoords(prop){
    // console.log('window property: ' + window[props]);
    // when you console.log(window), Objects will display first then an array of properties. under [[Prototype]], you will see the arrays of properties. this line uses porperties innerWidth and innerHeight
    console.log(window)
    return Math.floor(Math.random() * window[prop]);
}


function followMouse(e) {
    const y = e.pageY + 'px';
    const x = e.pageX + 'px';

    xy(inner, y, x);
    xy(middle, y, x);
    xy(outer, y, x);
}

function wildFox() {
    const width = getRandomCoords('innerWidth');
    const height = getRandomCoords('innerHeight');

    fox.style.top = height + 'px';
    fox.style.left  = width + 'px';
}

function hit() {
    console.log('hit');
    fox.style.color = 'red';
    fox.style.fontWeight = 'bolder';
    fox.style.fontSize = '24px';
    fox.style.backgroundColor = 'white';
    fox.innerHTML = `HIT`;
    clearInterval(interval);
    reset.style.display = 'block';
}

function resetBtn() {
    // location.reload()
    fox.style.color = 'white';
    fox.style.fontWeight = '';
    fox.style.fontSize = '';
    fox.style.backgroundColor = '';
    fox.innerHTML = `brown fox`;
    reset.style.display = 'none';
    setInterval(wildFox, 1300);
}

const interval = setInterval(wildFox, 1300);
console.log(interval)

window.addEventListener('mousemove', followMouse);
window.addEventListener('load', wildFox);
fox.addEventListener('click', hit)
reset.addEventListener('click', resetBtn)

// added button to reset after hit
// slowered interval time