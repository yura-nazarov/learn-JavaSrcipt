//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

let out1 = document.querySelector('.out-1');
let out = '';
function t1() {
   for (let i = 0; i < 3; i++) {
      out += '***';
      for (let j = 0; j < 3; j++) {
         out += '_';
         break;
      }
   }
   out1.innerHTML = out;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>

function t2() {
   let out2 = document.querySelector('.out-2');

   for (let i = 1; i < 4; i++) {
      out += `${i}<br>`;
      for (let j = 0; j < 1; j++) {
         out += '*_*_*_<br>';
         // break;
      }
   }
   out2.innerHTML = out;

}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
   let out3 = document.querySelector('.out-3');

   for (let i = 0; i < 4; i++) {
      out += `<br>`;
      for (let j = 0; j < 1; j++) {
         out += '*_*_*_';
         // break;
      }
   }
   out3.innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
   let out4 = document.querySelector('.out-4');

   for (let i = 1; i < 4; i++) {
      out += `${i}_`;
      for (let j = 1; j < 6; j++) {
         out += `${j} `;
         // break;
      }
   }
   out4.innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
   let out5 = document.querySelector('.out-5');

   for (let i = 1; i < 4; i++) {
      out += `<br>`;
      for (let j = 0; j < 6; j++) {
         if (j % 2) {
            out += ` j=${j} 0`;
         } else {
            out += ` j=${j} 1`;

         }
      }
   }
   out5.innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {
   let out6 = document.querySelector('.out-6');

   for (let i = 1; i < 4; i++) {
      out += `<br>`;

      for (let j = 0; j < 6; j++) {
         console.log(`j=${j}, ${j} % 2 = ` + (j % 2));
         console.log(`j=${j}, ${j} % 3 = ` + (j % 3));
         if ((j % 3) == 2) {
            out += `x`;
         } else if (j % 2) {
            out += `0`;
         } else {
            out += `1`;
         }
      }
   }

   out6.innerHTML = out;
}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {
   let out7 = document.querySelector('.out-7');

   for (let i = 1; i < 5; i++) {
      out += `<br>`;

      for (let j = 0; j < i; j++) {
         out += '*';
      }
   }

   out7.innerHTML = out;
}

document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {
   let out8 = document.querySelector('.out-8');

   for (let i = 5; i > 0; i--) {
      out += `<br>`;

      for (let j = 0; j < i; j++) {
         out += '*';
      }
   }

   out8.innerHTML = out;
}

document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
   let out9 = document.querySelector('.out-9');

   for (let i = 2; i < 7; i++) {
      for (let j = 1; j < i; j++) {
         out += j + ' ';
      }
      out += `<br>`;
   }

   out9.innerHTML = out;
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
   let out10 = document.querySelector('.out-10');

   for (let i = 0; i < 5; i++) {
      for (let j = 1; j < 11; j++) {
         if (j == 10) {
            out += `${(i + 1) * j}`;
         } else {
            out += `${i}${j} `;
         }
      }
      out += `<br>`;
   }

   out10.innerHTML = out;
}

document.querySelector('.b-10').onclick = t10;