
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
   document.querySelector('.out-1').textContent = event.key;
   return event.key; // не обязателен
}
document.querySelector('.i-1').onkeypress = (event) => {
   t1(event);
}
// ваше событие здесь!!!

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
   document.querySelector('.out-2').textContent += '\'' + event.key + '\'' + '=' + event.charCode + ' ';
   return event.charCode;// не обязателен
}
document.querySelector('.i-2').onkeypress = (event) => {
   t2(event);
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */
let charCode;
function t3(event) {
   charCode = event.charCode;
   if (charCode < 48 || charCode > 57) {
      document.querySelector('.out-3').textContent = false;
   } else {
      document.querySelector('.out-3').textContent = true;
   }
   return event.charCode; // не обязателен
}
document.querySelector('.i-3').onkeypress = (event) => {
   console.log(event.charCode);
   t3(event);
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
   if (event.charCode < 97 && event.charCode > 64) {
      document.querySelector('.out-4').textContent += String.fromCharCode(event.charCode + 32) + ' ';
      console.log(event.charCode + 32);
   } else {
      document.querySelector('.out-4').textContent += event.key + ' ';
   }
}
document.querySelector('.i-4').onkeypress = (event) => {
   t4(event);
}
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
   if (event.charCode < 123 && event.charCode > 96) {
      document.querySelector('.out-5').textContent += String.fromCharCode(event.charCode - 32) + ' ';
      console.log(event.charCode - 32);
   } else {
      document.querySelector('.out-5').textContent += event.key + ' ';
   }
}
document.querySelector('.i-5').onkeypress = (event) => {
   t5(event);
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
   if (event.charCode > 57) {
      if (event.charCode < 97 && event.charCode > 64) {
         document.querySelector('.out-6').textContent += String.fromCharCode(event.charCode + 32) + ' ';
         console.log(event.charCode + 32);
      } else {
         document.querySelector('.out-6').textContent += event.key + ' ';
      }
   }
}
document.querySelector('.i-6').onkeypress = (event) => {
   t6(event);
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

function t7() {
   const a7 = [1, 3, 4, 5, 6, 7, 8, 4];
   const random = Math.floor(Math.random() * (a7.length - 1));
   console.log(random);
   document.querySelector('.out-7').textContent = a7[random];
}
document.querySelector('.i-7').onkeypress = (event) => {
   t7(event);
}
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
   if (event.key == 'i') {
      document.querySelector('.out-8').textContent += 1 + ' ';
   } else if (event.key == 'o') {
      document.querySelector('.out-8').textContent += 0 + ' ';
   } else if (event.key == 'l') {
      document.querySelector('.out-8').textContent += 7 + ' ';
   } else {
      document.querySelector('.out-8').textContent += event.key + ' ';
   }

}
document.querySelector('.i-8').onkeypress = (event) => {
   t8(event);
}
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let count = 0;
function t9(event) {
   if (event.key === 'ArrowDown') {
      count++;
   }
   document.querySelector('.out-9').textContent = count;
}
document.querySelector('.i-9').onkeydown = (event) => {
   t9(event);
}
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
let x = 75;
let y = 75;
function t10(event) {
   if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      x++;
      document.querySelector('.div-10 > img').style.height = x + 'px';
   }
   if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      y++;
      document.querySelector('.div-10 > img').style.width = y + 'px';
   }
}
document.querySelector('.i-10').onkeydown = (event) => {
   t10(event);
}
// ваше событие здесь!!!

// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {

}

// ваше событие здесь!!!

