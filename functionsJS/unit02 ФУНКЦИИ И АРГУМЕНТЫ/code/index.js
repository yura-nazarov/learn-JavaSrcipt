//простой способ объявления
function f1(a, b, c) {

}

// sum3(1000, 3000);

function sum() {
   const x = 5;
   const y = 6;
   console.log(x + y);
}

sum();

let x = 55;
let y = 66;
function sum2() {
   console.log(x + y);
}

sum2();

x = 100;
y = 200;
sum2();

// аргументы
// формальные аргументы (параметры)
function sum3(x1 = 100, y1 = 100) {
   console.log(x1 + y1);
}

sum3(44, 11);
sum3(100, 200);
let z = 77;
sum3(z, 10);
sum3(z, z * 2);
sum3(2, 3, 4, 5, 6);
sum3(6);
sum3();

function showSum(elem, x, y) {
   document.querySelector(elem).textContent = x + y;
}

function showSum2(elem, x, y) {
   elem.textContent = x + y;
}

showSum('.out-1', 5, 60);
showSum2(document.querySelector('.out-2'), 5, 6);

const out1 = document.querySelector('.out-1');
showSum2(out1, 70, 6);

function showSum3(x, y, elem = '.out-1') {
   console.log(arguments);
   document.querySelector(elem).textContent = arguments[0] + y;
}
showSum3(0, 6, '.out-2',);

function showSomeAll() {
   console.log(arguments);
   // let sum = 0;
   // for (let i = 0; i < arguments.length; i++) {
   //    sum += arguments[i];
   // }
   let sum = Array.from(arguments).reduce((accum, item) => accum += item);
   console.log(sum);
}

showSomeAll(4, 5, 6);


function showSumAll2(...args) {
   console.log(args);
   let sum = args.reduce((accum, item) => accum += item);
   console.log(sum);
}

showSumAll2(5, 5, 10, 20, 30);

// функция как аргумент

function showAll(res) {
   document.querySelector('.out-1').innerHTML = `<b>${res}</b>`
}

// function showSumAll3(num, drawFunction) {
//    drawFunction(num);
// }

// showSumAll3(45, showAll);

// использовать неопределённое количество параметров
// ОБЯЗАТЕЛЬНЫЙ аргумент нужно поставить на первое место
// но две функции с одинаковым названием но разным порядком аргументов, могут не срабатывать
function showSumAll3(drawFunction, ...num) {
   drawFunction(num);
}

showSumAll3(showAll, 88, 55, 45, 100);