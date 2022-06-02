const a = [4, 3, 6, 6, 7, 34, 77];


// find
// ex 1
let b = a.find(item => { // b = 6, если он есть в массиве, иначе undefined
   if (item === 6) {
      return true;
   }
});
// console.log(b);

// ex 2
b = a.find(item => { // b = элемент удовлетворяющий условию, иначе - undefined
   if (item > 88 && item <= 332) {
      return true;
   }
});
// console.log(b);

// ex 3
const arrObj = [
   { name: 'ivan', age: 54 },
   { name: 'ivar', age: 46 },
   { name: 'den', age: 34 },
   { name: 'severn', age: 44 },
   { name: 'oleg', age: 14 },
];

b = arrObj.find(item => { // b = элемент удовлетворяющий условию, иначе - undefined
   if (item.age <= 18) {
      return true;
   }
});

// console.log(b);

// findIndex findIndex  findIndex

const c = [22, 33, 44, 55, 33, 66, 77];
const d = 'hello';


b = c.findIndex(item => { // b = индексу элемента удовлетворяющего условию, иначе "-1"
   if (item > 270) {
      return true;
   }
});

// b = d.findIndex(item => { // findIndex и find - не работают со строками
//    if (item === 'o') {
//       return true;
//    }
// });

// console.log(b);

// lastIndexOf lastIndexOf lastIndexOf
// последнее вхождение элемета в строку

// c = [22, 33, 44, 55, 33, 66, 77];
// d = 'hello';

let f = c.lastIndexOf(33); // возвратит 4, если не найден "-1"
f = d.lastIndexOf('o'); // возвратит 4, если не найден "-1"

console.log(f);

