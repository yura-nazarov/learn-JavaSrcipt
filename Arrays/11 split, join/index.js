// split 
// let str = 'hello';
// console.log(str.split()); // ['hello']
// console.log(str.split('')); // ['h', 'e', 'l', 'l', 'o']
// console.log(str.split(' ')); // ['hello']
// console.log(str.split(',')); // ['hello']
// console.log(str.split('', 3)); // ['h', 'e', 'l'] выводит первые 3 символа
// let str1 = 'hello сейчас будет два пробела  текст';
// console.log(str1.split()); //
// console.log(str1.split('')); //['h', 'e', 'l', 'l', 'o', ' ', 'с', 'е'..... 'б', 'е', 'л', 'а', ' ', ' ', 'т', 'е', 'к', 'с', 'т']
// console.log(str1.split(' ')); // ['hello', 'сейчас', 'будет', 'два', 'пробела', '', 'текст']
// console.log(str1.split('  ')); // ['hello сейчас будет два пробела', 'текст']


// console.log(str);
// let a = str.split('');
// console.log(a);

// join
// let b = ['h', 'e', 'l', 'l', '0'];
// console.log(b.join()); // h,e,l,l,0
// console.log(b.join('')); // hell0
// console.log(b.join(' ')); //  h e l l 0
// console.log(b.join('  ')); // h  e  l  l  0
// console.log(b.join('*')); // h*e*l*l*0
// console.log(b.join('*'), 1, 'text', 2); // h*e*l*l*0 1 text 2


// let c = b.join(' ');

// console.log(c);
// console.log(b);

//spread

const a = [5, 6, 2, 4];
let b = ['h', 'e', 'l', 'l', '0'];
// merge
const c = [...a, ...b]; // [5, 6, 2, 4, 'h', 'e', 'l', 'l', '0']

// console.log([...a, ...b]); // [5, 6, 2, 4, 'h', 'e', 'l', 'l', '0']

const d = [...b]; // клон массива b [5, 6, 2, 4, 'h', 'e', 'l', 'l', '0']

// string --> array
const e = [...'hello']; // string --> array ['h', 'e', 'l', 'l', 'o']
// console.log(e);

// Set --> array
const f = [...new Set([1, 3, 4, 5, 4, 2, 2])] // Set --> array [1, 3, 4, 5, 2]
// console.log(f);

//преобразование arguments в массив
function test() {
   console.log(...arguments); // string: e 3 g 3 d 3
   console.log([...arguments]); // array: ['e', 3, 'g', 3, 'd', 3]
}
test('e', 3, 'g', 3, 'd', 3);

// NodeList - к нему нельзя применить методы массива
let p = document.querySelectorAll('p');
console.log([...p]); // array [p, p, p, p, p, p]

function myFunction(v, w, x, y, z) {
   console.log(...arguments); // -1 0 1 2 3
}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);