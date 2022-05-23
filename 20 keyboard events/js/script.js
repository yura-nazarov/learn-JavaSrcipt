// при любом изменении инпута будет срабатывание
document.querySelector('.i-1').oninput = function (event) {
   // console.log(event);
}

// при отпускании клавиши (после нажатия)
// видити не все клавиши (стрелки)
document.querySelector('.i-1').onkeypress = function (event) {
   console.log('onkeypress');
   console.log('charCode:', event.charCode);
   console.log('code:', event.code);
   console.log('key:', event.key);
   console.log('keyCode:', event.keyCode);
   console.log(event);
}

// при нажатии (до отпускания клавиши)
//для всех остальных событий нажатий клавиатуры
// используется 

document.querySelector('.i-1').onkeydown = function (event) {
   console.log('onkeydown');
   console.log('charCode:', event.charCode);
   console.log('code:', event.code);
   console.log('key:', event.key);
   console.log('keyCode:', event.keyCode);
   console.log(event);
   if (event.key == 'CapsLock') {
      document.querySelector('.ch-1').checked = true;
   } else {
      document.querySelector('.ch-1').checked = false;

   }
}


document.querySelector('.i-1').onkeyup = function (event) {
   console.log('onkeyup');
   console.log('charCode:', event.charCode);
   console.log('code:', event.code);
   console.log('key:', event.key);
   console.log('keyCode:', event.keyCode);
   console.log(event);
   if (event.key == 'CapsLock') {
      document.querySelector('.ch-1').checked = true;
   } else {
      document.querySelector('.ch-1').checked = false;

   }
}


document.querySelector('.i-2').onkeypress = function (event) {
   console.log('onkeypress');
   console.log('charCode:', event.charCode);
   console.log('code:', event.code);
   console.log('key:', event.key);
   console.log('keyCode:', event.keyCode);
   console.log(event);
   const a = {
      q: 'w',
      w: 'e'
   }
   document.querySelector('.i-2').value += a[event.key];
   return false;
}