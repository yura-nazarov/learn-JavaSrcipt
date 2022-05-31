// нажатие состоит из 2х частей
// нажали или отпустили

// при любом изменении инпута будет срабатывание
document.querySelector('.i-1').oninput = function (event) {
   // console.log('oninput', event);
}
// on change сработает когда потеряет фокус


// // при отпускании клавиши (после нажатия)
// // видити не все клавиши (стрелки)
// document.querySelector('.i-1').onkeypress = function (event) {
//    console.log('onkeypress', event);
//    console.log('charCode:', event.charCode);
//    console.log('code:', event.code);
//    console.log('key:', event.key);
//    console.log('keyCode:', event.keyCode);
// }

// // при нажатии (до отпускания клавиши)
// //для всех остальных событий нажатий клавиатуры (лево, право, низ, кап и т.д.)
// // используется

// document.querySelector('.i-1').onkeydown = function (event) {
//    console.log('onkeydown', event);
//    console.log('charCode:', event.charCode);
//    console.log('code:', event.code);
//    console.log('key:', event.key);
//    console.log('keyCode:', event.keyCode);
//    if (event.key == 'CapsLock') {
//       document.querySelector('.ch-1').checked = true;
//    } else {
//       document.querySelector('.ch-1').checked = false;

//    }
// }

// // событие в момент отпускания
// document.querySelector('.i-1').onkeyup = function (event) {
//    console.log('onkeyup', event);
//    console.log('charCode:', event.charCode);
//    console.log('code:', event.code);
//    console.log('key:', event.key);
//    console.log('keyCode:', event.keyCode);
//    if (event.key == 'CapsLock') {
//       document.querySelector('.ch-1').checked = true;
//    } else {
//       document.querySelector('.ch-1').checked = false;

//    }
// }

// ex 2
// второй инпут
document.querySelector('.i-2').onkeypress = function (event) {
   console.log('onkeypress');
   console.log(event);
   console.log('charCode:', event.charCode);
   console.log('code:', event.code);
   console.log('key:', event.key);
   console.log('keyCode:', event.keyCode);

   const a = {
      q: 'w',
      w: 'e'
   }
   document.querySelector('.i-2').value += a[event.key];
   return false;
}