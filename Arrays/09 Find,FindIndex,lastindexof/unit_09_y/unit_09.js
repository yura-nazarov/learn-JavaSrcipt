const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');
const out4 = document.querySelector('.out-4');
const out5 = document.querySelector('.out-5');
const out6 = document.querySelector('.out-6');
const out7 = document.querySelector('.out-7');
const out8 = document.querySelector('.out-8');
const out9 = document.querySelector('.out-9');
const out10 = document.querySelector('.out-10');
// TASK 01
// По нажатию b-1 выполняется функция f1. Функция с помощью find должна найти первый элемент массива a1, значение которого лежит от a1_from до a1_to (больше a1_from но меньше a1_to). Вывести найденный элемент в out-1. Если значение не найдено то выводить undefined.


let a1 = [13, 15, 22, 23, 26, 35, 72];
let a1_from = 23;
let a1_to = 27;
// ожидаю 26, но вы протестируйте и на других

const f1 = () => {
   out1.textContent = a1.find(elem => {
      if (elem > a1_from && elem < a1_to) return true;
   });
}


// TASK 02
// По нажатию b-2 выполняется функция f2. Функция с помощью find должна найти первый элемент массива a2, значение которого лежит от a2_from до a2_to (больше a2_from но меньше a2_to). Вывести элемент в out-2. Если значение не найдено то выводить false.

let a2 = [13, 15, 22, 23, 26, 35, 72];
let a2_from = 234;
let a2_to = 272;

const f2 = () => {
   let res = 'false';
   res = a2.find(elem => {
      if (elem > a2_from && elem < a2_to) {
         return true;
      }
   });

   if (res == undefined) res = false;
   out2.innerHTML = res;
}

// TASK 03
// По нажатию b-3 выполняется функция f3. Функция с помощью FILTER должна найти все элементы массива a3, значение которых лежит от a3_from до a3_to (больше a3_from но меньше a3_to). Добавить их в a3_res, предварительно очистить a3_res. В out-3 вывести нулевой элемент массива a3_res. Считаем что в a3_res будет всегда минимум одно значение. 

let a3 = [13, 15, 22, 23, 26, 35, 72];
let a3_from = 14;
let a3_to = 72;
let a3_res = [];

const f3 = () => {
   a3_res = a3.filter(elem => {
      if (elem > a3_from && elem < a3_to) {
         return true;
      }
   })[0];
   out3.innerHTML = a3_res;

}

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция с помощью FIND должна найти первый элемент строки str4, который лежит от a4_from, до a4_to(строго больше, строго меньше). Вывести результат в out-4. Если совпадений нет вывести undefined. Обратите внимание, find не работает со строками!


let str4 = 'a_baba_galamaga_tvoe_korito_est_nesti';
let a4_from = 'k';
let a4_to = 't';

const f4 = () => {
   const strToArray = str4.split('');
   const fromIndex = strToArray.findIndex(elem => elem === a4_from);
   let tempArray = strToArray.splice(fromIndex);
   console.log('tempArray', tempArray);
   const toIndex = tempArray.findIndex(elem => elem === a4_to);
   let finalArray = tempArray.splice(0, toIndex + 1);
   console.log('finalArray', finalArray);

   out4.innerHTML = finalArray.find((elem, index) => {
      if (elem > a4_from && elem < a4_to) return true;
   })

   // let charArr = str4.split('').map(elem => {
   //    return elem.charCodeAt();
   // })
   // console.log(str4.split(''));
   // console.log(charArr);
   console.log('k', 'k'.charCodeAt());
   console.log('t', 't'.charCodeAt());
   console.log('found l', 'l'.charCodeAt());
}

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция с помощью findIndex должна найти индекс элемента массива a5, значение которого лежит от a5_from до a5_to (больше a5_from но меньше a5_to). Вывести найденный индекс в out-5. Если значение не найдено то выводить -1.

let a5 = [13, 15, 22, 23, 26, 35, 72];
let a5_from = 23;
let a5_to = 67;

const f5 = () => {
   out5.innerHTML = a5.findIndex(elem => {
      if (elem > a5_from && elem < 67) return true;
   });
}

// TASK 06
//  По нажатию b-6 выполняется функция f6. Функция с помощью findIndex должна найти ПОСЛЕДНИЙ индекс элемента массива a6, значение которого лежит от a6_from до a6_to (больше a6_from но меньше a6_to). Вывести найденный индекс в out-6. Если значение не найдено то выводить false.


let a6 = [13, 15, 22, 23, 26, 35, 72];
let a6_from = 233;
let a6_to = 67;

const f6 = () => {
   let res = a6.findIndex(elem => {
      if (elem > a6_from && elem < a6_to) return true;
   });
   if (res === -1) res = false;
   out6.innerHTML = res;
}

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция с помощью lastIndexOf должна найти наибольший индекс символа a7_1 в строке str7, и вывести out-7. Если значение не найдено то выводить -1. Обратите внимание, что lastIndexOf зависит от регистра. 


let str7 = 'cccaBCcbBDabBddcCadcDbACacbbCdbBCADBDBdaAdcCd';
let a7_1 = 'C'; // 43

const f7 = () => {
   let res = str7.lastIndexOf(a7_1);

   out7.innerHTML = res;
}

// TASK 08
// По нажатию b-8 выполняется функция f8. Функция с помощью lastIndexOf должна найти наибольший индекс символа a8_1 в строке str8, и вывести out-8. Если значение не найдено то выводить -1. Реализуйте поиск независимо от регистра. 

let str8 = 'C#CdABd$d@$Ab!#@#bcAaB@c$D#@AD$A!b#!D!BB@CaAD@###@';
let a8_1 = 'a'; // 43 ожидаю и на a и на A

const f8 = () => {
   let res = str8.toLocaleLowerCase().lastIndexOf(a8_1);

   out8.innerHTML = res;
}

// TASK 09
// По нажатию b-9 выполняется функция f9. Функция с помощью lastIndexOf должна найти наибольший индекс символа a9_1 в массиве a9, и вывести out-9. Если значение не найдено то выводить -1. 

let a9 = ['2', '17', '45', 5, '14', 5, '45', '107'];
let a9_1 = 5; // ожидаю индекс 5

const f9 = () => {
   let res = a9.lastIndexOf(a9_1);

   out9.innerHTML = res;
}

// TASK 10
// По нажатию b-10 выполняется функция f10. Функция должна заполнить массив a10_res, на основе массива значений a10 и массива индексов a11. Т.е. мы берем числа из a11 и смотрим есть ли значения с такими индексами в a10. Если есть - добавляем значения в a10_res. Результат a10_res выводим в out-10 через пробел. Перед заполнением чистим a10_res. Если значения с таким индексом не существует пропускаем индекс.

let a10 = [-2, 3, -4, 5, -6, 7];
let a11 = [0, 4, 22];
let a10_res = []; // ожидаю [-2, -6];

const f10 = () => {
   // out10.innerHTML = a10.reduce((accum, item, index) => {
   //    if (a11[index] <= a10.length) accum.push(item);
   //    return accum;
   // }, []);

   //or
   for (let item of a11) {
      if (item < a10.length) a10_res.push(a10[item]);
   }
   out10.innerHTML = a10_res;
}



document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', f4);
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', f7);
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', f10);