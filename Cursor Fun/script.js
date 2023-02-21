const inner = document.querySelector('.inner-circle');
const middle = document.querySelector('.middle-circle');
const outer = document.querySelector('.outer-circle');

const followMouse = (e) => {
    let y = e.pageY + 'px';
    let x = e.pageX + 'px';

    inner.style.top = y;
    inner.style.left = x;

    middle.style.top =  y;
    middle.style.left =  x;

    outer.style.top = y;
    outer.style.left = x;
    
    // console.log('inner: ' + inner.style.left + ' ' + inner.style.top);
    // console.log('middle: ' + middle.style.left + ' ' + middle.style.top);
    // console.log('outer: ' + outer.style.left + ' ' + outer.style.top);
    // console.log('triggered');
}

window.addEventListener('mousemove', followMouse);