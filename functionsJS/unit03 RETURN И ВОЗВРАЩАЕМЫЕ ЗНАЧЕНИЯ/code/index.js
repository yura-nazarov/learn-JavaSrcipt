// let sum = 0
// function f1(x, y) {
//    let m = 0;
//    sum = x + y;
//    console.log(x + y);
//    return sum;
// }
// f1(3, 6);
// f1(4, 6);
// console.log(sum);

// function f2(params) {
//    console.log(2);
//    return 5;
// }
// f2();
// console.log(f2() + 2);

// console.log(11 + 3 + 3 + f1(3, 5));
// console.log(f1(3, 5) + f1(3, 6));

// function randInt(min, max) {
//    let rand = min + Math.random() * (max + 1 - min);
//    return Math.floor(rand);
// }

// let r = randInt(222, 333);
// console.log(r);
// console.log(r + 100);
// console.log(randInt(222, 333) + 100);

// // выводить куда угодно
// console.log(f1(100, 200));
// document.querySelector('.out-1').innerHTML = f1(1, 4);
// document.querySelector('.out-1').style.background = `rgb(24,134,23)`;
// document.querySelector('.out-1').style.background = `rgb(${randInt(0, 255)},${randInt(0, 255)}, ${randInt(0, 255)}`;
// // alert(f1(3, 5));

// //использовать в выражениях
// console.log(100 * f1(3, 5));

// // Вывод данных введенных пользователем

// document.querySelector('.b-3').addEventListener('click', function () {
//    const s = document.querySelector('.i-3').value;
//    document.querySelector('.out-3').innerHTML = 'hello ' + clearText(s);
//    console.log('hello ' + clearText(s));
// });

// function clearText(data) {
//    return data.trim().toLowerCase();
// }

// //прерывание return
// function t4() {
//    console.log(1);
//    console.log(2);
//    return;
//    console.log(3);
// }

// t4();

// // Прерывание фукнции
// // эмулируем indexOf

// function indexOfEmul(arr, num) {
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === num) return i;
//    }
//    return -1;
// }

// let result = indexOfEmul([22, 33, 44, 55], 1);
// console.log(result);



// // Пользователь вводит количество лет
// document.querySelector('.b-4').addEventListener('click', function () {
//    let year = +document.querySelector('.i-4').value;
//    console.log(isNaN(year));
//    if (isNaN(year)) return;
//    if (year < 0 || year > 140) return;
//    document.querySelector('.out-4').innerHTML = 2021 - year;
// })


// example 5 Сумма
console.group('example 5');
const arr5 = [[2, 4, 5], [3, 5, 6]];
function t5() {
   let s = 0;
   for (let i = 0; i < arr5.length; i++) {
      s += sum1(arr5[i]);
   }
   return s;
}

function sum1(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }
   return sum;
}

// t5();
console.log('t5', t5());

console.groupEnd();

// ex 6 Return ;
console.group('example 6');

function t6() {
   let a = 88;
   //     // перенос - ошибка
   //     // return
   //     // a;
   //что бы перенос работал, нужно использовать скобки, одна рядом с return
   return (
      a);
}

console.log(t6());

console.groupEnd();

// ex 7 Return ;
console.group('example 7');
const arr7 = [[3, 4, 5], [6, 7, 9], [7, 7, 1], [2, 2]];

const evenArr7 = arr7.filter(function (elem) {
   return (sum1(elem) % 2 === 0);
})
console.log(evenArr7);

console.groupEnd();

// ex 8 return функции

function t8() {
   return sum1;
}

let s = t8;
console.log(s);
console.log(s([20, 30]));