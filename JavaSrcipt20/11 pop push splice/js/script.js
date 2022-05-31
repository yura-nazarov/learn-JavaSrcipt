const a = [1, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log('a.length', a.length);
console.log('a.push(10, 11, 55, 66)', a.push(10, 11, 55, 66)); // длина нового массива
console.log('a', a);
console.log('a.length', a.length);

b.push('j', 'e');
console.log('b', b);

// b.pop();
console.log('b.pop()', b.pop()); // возвращает удалённый элемент или undefined
console.log('b', b);
console.log('b.pop()', b.pop());
console.log('b', b);
console.log('*****************');
// удаляем элемент номер [3], он будет empty
delete a[3];
console.log('a', a);
console.log('b', b);

// a.splice(3, b[0], b[1], b[2], b[3]); // вставит все элем. начиная с третьего номера, отодвигая остальные эле-ты
console.log('a.splice(3, b[3]', a);
// a.splice(3, 4, b[0], b[1], b[2], b[3]); // заменит на новый элемент начиная с индекса 3, и пока будут элементы для вставки, будет заменять старые значения
console.log('a.splice(3, 4, b[3]', a);
// a.splice(3, 3, b[0], b[1], b[2], b[3]); // вставит новый элемент в начиная индекса 3 на 3 места вперёд: 3, 4, 5, отальные элементы расширяемого массива будут сдвинуты, пока не поместяться остальные вставляемые элементы
console.log('a.splice(3, 3, b[3]', a);
console.log('*****************');

a.shift(); // удаляет первый элемент, уменьшает длину массива, на удалённый элемент
console.log('a after shift ', a);
a.shift();
console.log('a after shift ', a);
console.log('*****************');

a.unshift('asd-1'); // вносит элемент под индексом 1
console.log('a after unshift ', a);
a.unshift('asd-2');
console.log('a after unshift ', a);
a.unshift('text-3');
console.log('a after unshift ', a);
a.shift();
console.log('a after unshift ', a);
console.log('a after unshift ', a);


