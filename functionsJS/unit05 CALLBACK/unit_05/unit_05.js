// Task 1
// Допишите функцию callBack1 такую, что принимает элементы массива из map и возвращает их возведенные в 3 степень.

const ar1 = [4, 5, 6];

const callBack1 = (elem) => elem ** 3;
// or
// let callBack1 = (elem) => {
//    return elem ** 3;
// }

const res1 = ar1.map(callBack1);

console.log('res1', res1);

// Task 2
// Допишите анонимную стрелочную функцию внутри map такую, что принимает элементы массива из map и возвращает их возведенные в 3 степень.


const res2 = ar1.map(elem => {
   return elem ** 3;
}); // сюда в скобки дописываете стрелочную функцию

console.log('res2', res2);


// Task 3.
// Допишите функцию callBack3 такую, что принимает элементы массива из filter и возвращет true если это число.

const ar3 = [4, '5', 6];

const callBack3 = (elem) => (typeof elem === 'number');

const res3 = ar3.filter(callBack3);

console.log('res3', res3);

// Task 4
// Допишите анонимную стрелочную функцию внутри filter такую, что принимает элементы массива из filter и возвращает true если это число.
const res4 = ar3.filter(elem => {
   return (typeof elem === 'number');
}); // сюда в скобки дописываете стрелочную функцию

console.log('res4', res4);

// Task 5
// Напишите функцию callBack5 такую, что принимает элементы массива и пушит их в res5 приведенные к toLowerCase().

const ar5 = ['GaLaxY', 'InFILtratoR', 'DaTaPad', 'APeX hQ'];
let res5 = [];
const callBack5 = (elem) => {
   return res5.push(elem.toLowerCase());
}

ar5.forEach(callBack5);

console.log('res5', res5);


// Task 6
// Допишите анонимную стрелочную функцию внутри forEach такую, что принимает элементы массива из forEach и пушит их в res6 приведенные к toLowerCase().

let res6 = [];
ar5.forEach(elem => {
   return res6.push(elem.toLocaleLowerCase());
}); // сюда в скобки дописываете стрелочную функцию

console.log('res6', res6);


// Task 7
// Напишите функцию callBack7 такую, что принимает элементы массива ar7 и возвращет true если они больше 10.

const ar7 = [54, 75, 103, 20, 30, 60];
let res7;
let callBack7 = (elem) => {
   return (elem > 10) ? true : '';
}

res7 = ar7.every(callBack7);

console.log('res7', res7);

// Task 8
// Допишите анонимную стрелочную функцию внутри every такую, что принимает элементы массива ar7 из every и возвращет true если они больше 10.

let res8;
res8 = ar7.every(elem => {
   return (elem > 10);
});// сюда в скобки дописываете стрелочную функцию

console.log('res8', res8);

// Task 9
// Напишите функцию callBack9 такую, что принимает элементы массива ar9 и возвращет true если тип данных элемента boolean.

// const ar9 = [5, 7, false, 10, 20, 30, 60, true];
const ar9 = ['false', 2, 3];

const callBack9 = (elem) => typeof elem === 'boolean';

const res9 = ar9.some(callBack9);

console.log('res9', res9);


// Task 10
// Допишите анонимную стрелочную функцию внутри some такую, что принимает элементы массива ar9 из some и возвращет true если тип данных элемента boolean.

const res10 = ar9.some(elem => typeof elem === 'boolean');// сюда в скобки дописываете стрелочную функцию

console.log('res10', res10);

