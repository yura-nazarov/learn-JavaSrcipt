const a = [1, 3, 4, 5, 6, 7, 8, 9];
const b = ['a', 'b', 'c', 'd', 'e', 'f'];

console.log(a.length);
console.log(a.push(10, 11, 55, 66));
console.log(a);

b.push('j', 'e');
console.log(b);

// b.pop();
console.log(b.pop());
console.log(b);
console.log(b.pop());
console.log(b);

delete a[3];
console.log(a);

a.splice(3, 4, b[3]);
console.log('a ', a);
a.shift();
console.log('a after shift ', a);
a.shift();
console.log('a after shift ', a);
a.unshift('asd');
a.unshift('asd2');
console.log(a);
a.shift();
console.log(a);


