//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в out-1 строку вида:
//     1 2 3 4 5 6 7 8 9 ... 49 50
// от 1 до 50 включительно. Разделитель - пробел. Задача решается с помощью цикла.

let i = 0;
let out = '';
function t1() {
   while (i < 50) {
      i++;
      out += i + ' ';
   }
   return out;
}

document.querySelector('.b-1').onclick = function () {
   document.querySelector('.out-1').innerHTML = t1();
};

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в out-2 строку вида:
//     2 4 6 ... 122
// от 2 до 122 c шагом 2. Разделитель - пробел. Задача решается с помощью цикла  while.

function t2() {
   while (i < 122) {
      i += 2;
      out += i + ' ';
   }
   return out;
}

document.querySelector('.b-2').onclick = function () {
   document.querySelector('.out-2').innerHTML = t2();
};


//  Task 3
// Кнопка b-3 запускает функцию t3. Функция должна выводить в out-3 строку вида:
//     25 24 23 22 . . 7
// от 25 до 7 c шагом 1. Разделитель - пробел. Задача решается с помощью цикла  while.

function t3(x, y) {
   while (x >= y) {
      out += x + ' ';
      x--;
   }
   return out;
}

document.querySelector('.b-3').onclick = function () {
   document.querySelector('.out-3').innerHTML = t3(25, 7);
};
//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в out-4 строку вида:
//     77_74_71_68_65_62_ ... _38_35_
// от 77 до 35 c шагом 3. Разделитель - знак подчеркивания. Задача решается с помощью цикла  while.


function t4(x, y) {
   while (x >= y) {
      out += x + '_';
      x--;
   }
   return out;
}

document.querySelector('.b-4').onclick = function () {
   document.querySelector('.out-4').innerHTML = t4(77, 35);
};


//  Task 5
// Кнопка b-5 запускает функцию t5. Функция должна выводить в out-5 строку вида:
//     1_*2_**3_*4_** ... 17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и звездочка (если число нечетное, и две звездочки если четное). Задача решается с помощью цикла  while.

function t5(x, y) {
   while (x <= y) {
      if (x % 2) {
         out += x + '_*';
      } else {
         out += x + '_**';
      }
      x++;
   }
   return out;
}

document.querySelector('.b-5').onclick = function () {
   document.querySelector('.out-5').innerHTML = t5(1, 17);
};


//  Task 6
// Кнопка b-6 запускает функцию t6. Функция должна выводить в out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в i-6.
let j = 0;
function t6(x, y) {
   while (i < x) {
      while (j < y) {
         j++;
         out += '*';
      }
      out += '<br>';
      i++;
      j = 0;
   }
   return out;
}

document.querySelector('.b-6').onclick = function () {
   let i6 = +document.querySelector('.i-6').value;
   document.querySelector('.out-6').innerHTML = t6(i6, 6);
};


//  Task 7
// Есть input i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки b-7 должна запускаться функция f7, которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель пробел. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4 3 2 1
// Задача решается с помощью цикла  while.

function t7(x, y) {
   while (x >= y) {
      out += x + ' ';
      x--;
   }
   return out;
}

document.querySelector('.b-7').onclick = function () {
   let i7 = +document.querySelector('.i-7').value;
   document.querySelector('.out-7').innerHTML = t7(i7, 0);
};


//  Task 8
// Есть input i-81 и i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки b-8  должна запускаться функция f8, которая выводит в out-8 числа от первого введенного до второго включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// Задача решается с помощью цикла  while.

function t8(x, y) {
   while (x <= y) {
      out += x + ' ';
      x++;
   }
   return out;
}

document.querySelector('.b-8').onclick = function () {
   let i81 = +document.querySelector('.i-81').value;
   let i82 = +document.querySelector('.i-82').value;

   document.querySelector('.out-8').innerHTML = t8(i81, i82);
};


//  Task 9
// Есть input i-91 и i-92 куда пользователь может ввести числа.
// По нажатию кнопки b-9 должна запускаться функция f9, которая выводит в out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель пробел. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4 5 6 7 8
// если ввел 8 и 6, то получим
// 6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, а потом запускаем цикл  while.

function t9(x, y) {
   i = x;
   j = y;
   if (x > y) {
      i = y;
      j = x;
   }
   while (i <= j) {
      out += i + ' ';
      i++;
   }

   return out;
}

document.querySelector('.b-9').onclick = function () {
   let i91 = +document.querySelector('.i-91').value;
   let i92 = +document.querySelector('.i-92').value;
   out = '';
   document.querySelector('.out-9').innerHTML = t9(i91, i92);
};

//  Task 10
// Кнопка b-10 запускает функцию t10. Функция должна выводить в out-10 четные годы от 1950 до 2000 включительно.
// Разделитель - пробел. Задача решается через цикл, а четность - через шаг (равный 2).

function t10(i, j) {
   while (i <= j) {
      out += i + ' ';
      i += 2;
   }
   return out;
}

document.querySelector('.b-10').onclick = function () {
   let i91 = +document.querySelector('.i-91').value;
   let i92 = +document.querySelector('.i-92').value;
   out = '';
   document.querySelector('.out-10').innerHTML = t10(1950, 2000);
};

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// вывести в out-11 содержимое каждого блока. Разделитель - пробел.
//     В результате должно получиться так:
//     one 3 4 two


function t11(x) {
   console.log(x);
   console.log(x[0].innerHTML);
   console.log(x.length);
   while (i < x.length) {
      out += x[i].innerHTML + '<br>';
      i++;
   }
   return out;
}

document.querySelector('.b-11').onclick = function () {
   let i11 = document.querySelectorAll('.div-11');
   out = '';
   i = 0;
   document.querySelector('.out-11').innerHTML = t11(i11);
};

//  Task 12
// Кнопка b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = ‘orange’


function t12(x) {
   while (i < x.length) {
      x[i].style.background = 'orange';
      i++;
   }
   return out;
}

document.querySelector('.b-12').onclick = function () {
   let i11 = document.querySelectorAll('.div-12');
   out = '';
   i = 0;
   document.querySelector('.out-12').innerHTML = t12(i11);
};

//  Task 13
// Кнопка b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...

function t13(x) {
   while (i < x.length) {
      x[i].value = i + 1;
      i++;
   }
}

document.querySelector('.b-13').onclick = function () {
   let i13 = document.querySelectorAll('.i-13');
   out = '';
   i = 0;
   t13(i13);
};

//  Task 14
// Кнопка b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.


function t14(x) {
   while (i < x.length) {
      if (x[i].checked) {
         return x[i].value;
      }
      i++;
   }
}

document.querySelector('.b-14').onclick = function () {
   let i14 = document.querySelectorAll('.i-14');
   out = '';
   i = 0;
   document.querySelector('.out-14').innerHTML = t14(i14);
};

//  Task 15
// Кнопка b-15 запускает функцию t15  Функция должна выводить следующую последовательность в out-15:
// 10 0 9 1 8 2 7 3 6 4 5 5 4 6 3 7 2 8 1 9 0 10
// Для вывода использовать цикл  while. Разделитель пробел.

function t15(x, y) {
   while (x >= 0) {
      out += x + ' ' + i + ' ';
      x--;
      i++;
   }
   return out;
}

document.querySelector('.b-15').onclick = function () {
   out = '';
   i = 0;
   document.querySelector('.out-15').innerHTML = t15(10, 10);
};
