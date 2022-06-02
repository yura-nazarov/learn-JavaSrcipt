let a = [3, 4, 5];
// console.log('a', a);
// let b = a.shift(); // удаляет превый элемнт
// console.log('a.shift()', b); // возвращает удалённый элемент
// console.log('a', a);

// console.log('a', a);
// let c = a.unshift(22);
// console.log('a.unshift(22)', a);
// console.log('return a.unshift(22)', c);

// slice - не меняет массив, а создаёт новый
let d = [22, 33, 44, 55, 66, 77, 88, 99];
let d1 = '23456789'
let f = d.slice(3); // [66, 77, 88, 99]
console.log('d.slice(3)', d.slice(3)); //[66, 77, 88, 99]
console.log('d.slice(-1)', d.slice(-1)); //[99]
console.log('d.slice(1, -1)', d.slice(1, -1)); //[33, 44, 55, 66, 77, 88]
console.log('d.slice(-1, -1)', d.slice(-1, -1)); //[]
console.log('d', d); //[22, 33, 44, 55, 66, 77, 88, 99]
console.log('d.slice(3, 4)', d.slice(3, 4)); // [55]
console.log('d.slice(1, 4)', d.slice(1, 4)); // [33, 44, 55]
console.log('d.slice(0, 5)', d.slice(0, 4)); // [33, 44, 55]
console.log('d1', d1);
console.log('d.slice(3, 4)', d1.slice(3, 4)); // 5
console.log('d.slice(1, 4)', d1.slice(1, 4)); // 345
console.log('d.slice(-1)', d1.slice(-1)); // 9
console.log('d.slice(2,-1)', d1.slice(2, -1)); // 9


// let e = 'hello';

// console.log('e.slice(1, 4)',e.slice(1, 4));