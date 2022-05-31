let a = 'hello, hi, mahai';

// приведение строки к массиву c разделением по запятым
// console.log(a.split(',')); // остаются пробелы!!!!!!

// приведение строки к массиву c разделением по знакам
// console.log(a.split(''));
let str = a.split('');
// приведение строки к массиву c одним элементом - данной строкой
// console.log(a.split());

//*********   join    ************

//обратная функция join() - объединяет массив в строку
// console.log(str.join(''));

let b = [1, 2, 4];

// console.log(b.join('-'));

//не возвращает нового массива как map и filter
b.forEach(function (elem, index) {
   // console.log('elem', elem * 2);
   // console.log('index', index * 2);
});
console.log(b);