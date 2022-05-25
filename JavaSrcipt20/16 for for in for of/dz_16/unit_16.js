// Task 1
//При нажатии .b-1 выполняете функцию f1. Функция перебирает массив a1  c помощью цикла for (let i. Выведите на страницу в .out-1 формате значение+пробел.

let a1 = [5, 7, 9, 11, 13, 15];

function outD(params, out) {
   document.querySelector(params).innerHTML = out;
}
let out = '';

function f1() {
   // for (let i = 0; i < a1.length; i++) {
   //    out += a1[i] + ' ';
   // }
   // for (let key in a1) {
   //    out += a1[key] + ' ';
   // }
   // for (let item of a1) {
   //    out += item + ' ';
   // }
   a1.forEach(e => {
      out += e + ' ';
   })
   outD('.out-1', out);
}

document.querySelector('.b-1').addEventListener('click', f1);

// Task 2
//При нажатии .b-2 выполняете функцию f2. Функция перебирает массив a2  c помощью цикла for (let i. Выведите на страницу в .out-2 формате индекс+пробел+значение+пробел.

let a2 = [5, 7, 9, 11, 13, 15];

function f2() {
   // for (let i = 0; i < a2.length; i++) {
   //    out += `${i} ${a2[i]}, `;
   // }
   for (let key in a2) {
      out += `${key} ${a2[key]}, `;
   }

   outD('.out-2', out);
}

document.querySelector('.b-2').addEventListener('click', f2);

// Task 3
//При нажатии .b-3 выполняете функцию f3. Функция получает div.out-3 со страницы с помощью getElementsByClassName и в каждый записывает число 3, перезаписывая содержимое div.

function f3() {
   let gClass = document.getElementsByClassName('out-3');
   for (let item of gClass) {
      item.innerHTML = 3;
   }
}

document.querySelector('.b-3').addEventListener('click', f3);


// Task 4
//При нажатии .b-4 выполняете функцию f4. Функция получает div.out-4 со страницы с помощью querySelectorAll и в каждый дописывает число 4.

function f4() {
   let gClass = document.querySelectorAll('.out-4');
   for (let item of gClass) {
      item.innerHTML = 4;
   }
}

document.querySelector('.b-4').addEventListener('click', f4);

// Task 5
//При нажатии .b-5 выполняете функцию f5. Функция должна с помощью for of перебрать массив a5 и возвратить новый массив куда входят элементы из a5 большие 7.

let a5 = [3, 4, 5, 2, 1, 7, 8, 2, 4, 6, 8, 11, 23, 17];

function f5() {
   for (let elem of a5) {
      out += `${elem} `;
   }
   return out;
}

document.querySelector('.b-5').addEventListener('click', () => {
   document.querySelector('.out-5').innerHTML = f5();
});

// Task 6
//При нажатии .b-6 выполняете функцию f6. Функция должна превратить массив a6 в одномерный. Результат вывести в out-6 через пробел.

let a6 = [[1, 2], [3, 4], [5, 6]];

function f6() {
   // for (let i = 0; i < a6.length; i++) {
   //    for (let j = 0; j < a6[i].length; j++) {
   //       out += `${a6[i][j]} `;
   //    }
   // }
   // for (let elem of a6) {
   //    for (let elem1 of elem) {
   //       out += `${elem1} `;
   //    }
   // }
   a6.forEach(elem => {
      elem.forEach(elem1 => {
         out += `${elem1} `;
      })
   })
   document.querySelector('.out-6').innerHTML = out;

}

document.querySelector('.b-6').addEventListener('click', f6);

// Task 7
//При нажатии .b-7 выполняете функцию f7. Функция должна переиндексировать массив a7. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a7 объект, где ключи - значения id из вложенных массивов, а значения - имя (т.е { 23 : Ivan, 45 : Petr}. Функция должна возвращать результирующий массив.

let a7 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];
let a7acc = {};
function f7() {
   for (let elem of a7) {
      a7acc[elem.id] = elem.name;
   }
   return a7acc;
}

document.querySelector('.b-7').addEventListener('click', () => {
   console.log(f7());
});


// Task 8
//При нажатии .b-8 выполняете функцию f8. Функция должна переиндексировать массив a8. Что имеется ввиду. Сейчас у нас обычный массив, который содержит вложенные объекты. Вам необходимо сделать из a8 массив, который будет содержать только числовые id. Т.е. [23, 45]. Функция должна возвращать результирующий массив.

let a8 = [{ id: 23, name: 'Ivan' }, { id: 45, name: 'Petr' }];
let arr = [];
function f8() {
   for (let elem of a8) {
      arr.push(elem.id);
   }
   return arr;
}

document.querySelector('.b-8').addEventListener('click', () => {
   console.log(f8());
});

// Task 9
//При нажатии .b-9 выполняете функцию f9. Функция должна возвращать в out-9 самый большой индекс из вложенных в a9 массивов. В данном случае это 4. Т.е. самый большой вложенный массив это [0,0,0,0,0], а в нем самый большой индекс 4.

let a9 = [[4, 3, 2], [2, 5], [0, 0, 0, 0, 0]];

function f9() {
   let max = 0;

   for (let item of a9) {
      if (max < item.length) max = item.length;
   }
   return max - 1;
}

document.querySelector('.b-9').addEventListener('click', () => {
   document.querySelector('.out-9').innerHTML = f9();
});

// Task 10
//При нажатии .b-10 выполняете функцию f10. Функция должна преобразовывать массив a10 в ассоциативный массив вида {4: 4, 6: 6, 9: 9, hello : "hello"} и возвращать полученный массив.

let a10 = [4, 6, 9, 'Hello'];

function f10() {
   let assArr = {};
   for (let elem of a10) {
      assArr[elem] = elem;
   }
   return assArr;
}

document.querySelector('.b-10').addEventListener('click', () => {
   console.log(f10());
});

// Task 11
//При нажатии .b-11 выполняете функцию f11. Функция должна c помощью for in перебрать объект a11 и вывести в out-11 только те значения, которые больше 10. Вывод - через пробел.

let a11 = {
   one: 11,
   two: 7,
   three: 13,
   four: 0
}

function f11() {
   for (let key in a11) {
      if (a11[key] > 10) out += a11[key] + ' ';
   }
   document.querySelector('.out-11').innerHTML = out;

}

document.querySelector('.b-11').addEventListener('click', f11);

// Task 12
//При нажатии .b-12 выполняете функцию f12. Функция должна c помощью for of перебрать a12 и вывести в out-12 через пробел.

let a12 = [4, 5, 6, 7];

function f12() {
   for (let elem of a12) {
      out += elem + ' ';
   }
   document.querySelector('.out-12').innerHTML = out;

}

document.querySelector('.b-12').addEventListener('click', f12);


// Task 13
//При нажатии .b-13 выполняете функцию f13. Функция должна c помощью for of перебрать a13 и вывести по символу в out-13 через пробел.

let a13 = 'testone';

function f13() {
   for (let elem of a13) {
      out += elem + ' ';
   }
   document.querySelector('.out-13').innerHTML = out;
}

document.querySelector('.b-13').addEventListener('click', f13);



// Task 14
//При нажатии .b-14 выполняете функцию f14. Функция должна c помощью for of перебрать a14 и вывести по элементам в out-14 через пробел.

let a14 = new Set([4, 5, 6]);

function f14() {
   for (let elem of a14) {
      out += elem + ' ';
   }
   document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').addEventListener('click', f14);

// Task 15
//При нажатии .b-15 выполняете функцию f15. Функция должна получить NodeList элементов .out-15 c помощью document.querySelectorAll, затем c помощью for of перебрать полученную коллекцию элементов .out-15 записать внутрь них число 15 ( затерев содержимое).


function f15() {
   let out15 = document.querySelectorAll('.out-15');
   for (let elem of out15) {
      elem.innerHTML = 15;
   }
}

document.querySelector('.b-15').addEventListener('click', () => {
   f15();
});