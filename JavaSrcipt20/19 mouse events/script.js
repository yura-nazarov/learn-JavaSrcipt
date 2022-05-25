document.querySelector('.one').onclick = function (event) {
   console.log(event);
   console.log('click');
}

document.querySelector('.two').onclick = function () {
   console.log('click2');
}

//double click
document.querySelector('.two').ondblclick = () => {
   console.log('double');
}

//on context menu
document.querySelector('.two').oncontextmenu = () => {
   console.log('oncontextmenu - right button');
   return false; // контекстное меню не появляется
}

//mouse move and increase width of div
// let w = 75;
// document.querySelector('.three').onmousemove = () => {
//    console.log('mouse move');
//    document.querySelector('.three').style.width = w + 'px';
//    w++;
// }

//on mouse enter
document.querySelector('.three').onmouseenter = () => {
   console.log('onmouseenter red');
   document.querySelector('.three').style.background = 'red';
}

//on mouse leave
document.querySelector('.three').onmouseleave = () => {
   console.log('onmouseleave green');
   document.querySelector('.three').style.background = 'green';
}

//on mouse down - нажатие левой клавиши мыши
document.querySelector('.three').onmousedown = () => {
   console.log('onmousedown orange');
   document.querySelector('.three').style.background = 'orange';
}

//on mouse up - при отпускании левой клавиши мыши
document.querySelector('.three').onmouseup = () => {
   document.querySelector('.three').style.background = 'blue';
   console.log(2);
}

let p = 90;
document.querySelector('button').onclick = function (e) {
   p++;
   document.querySelector('progress').value = p;
}