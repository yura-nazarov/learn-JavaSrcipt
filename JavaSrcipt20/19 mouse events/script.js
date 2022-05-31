// при указании параметра в функции (в нашем случае event), он передаётся 
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

//on context menu - mouse right button
document.querySelector('.two').oncontextmenu = (event) => {
   console.log('oncontextmenu - right button');
   event.preventDefault(); // контекстное меню не появляется
   // return false; // контекстное меню не появляется

}

//mouse move and increase width of div
let w = 75;
document.querySelector('.three').onmousemove = () => {
   console.log('mouse move');
   document.querySelector('.three').style.width = w + 'px';
   w++;
}

//on mouse enter - когда мышь _входит_ на данный объект
document.querySelector('.three').onmouseenter = () => {
   console.log('onmouseenter red');
   document.querySelector('.three').style.background = 'red';
}

//on mouse leave - когда мышь покидает объкт
document.querySelector('.three').onmouseleave = () => {
   console.log('onmouseleave green');
   document.querySelector('.three').style.background = 'green';
}

//on mouse down - срабатывает нажатие и удержании левой клавиши мыши
document.querySelector('.three').onmousedown = () => {
   console.log('onmousedown orange');
   document.querySelector('.three').style.background = 'orange';
}

//on mouse up - при отпускании левой клавиши мыши
document.querySelector('.three').onmouseup = () => {
   document.querySelector('.three').style.background = 'blue';
   console.log(2);
}

let p = 10;
document.querySelector('button').onclick = function (e) {
   p++;
   document.querySelector('progress').value = p;
}