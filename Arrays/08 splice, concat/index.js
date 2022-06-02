// concat
// const a1 = [21, 22, 23, 24];
// const a2 = [31, 32, 33, 34];
// const a3 = [];
// a3[22] = 100;
// console.log('a1', a1);
// console.log('a2', a2);
// console.log('a3', a3);
// console.log('====================');
// console.log('a1.concat(a1, a2)', a1.concat(a1, a2));
// console.log('a1.concat(a2, a3)', a1.concat(a2, a3));
// console.log('a1.concat(a1, a2, a3)', a1.concat(a1, a2, a3));
// const b = a1.concat(a2, a3);
// console.log('b = a1.concat(a2, a3)', b);

// concat -> string

// let c = 'hello';
let str = 'hi';
let arr = [21, 22, 23, 241];
console.log(arr.concat(str));// получим массив [21, 22, 23, 241, 'hi']
// let f = c.concat(d);
// console.log('c', c);
// console.log('d', d);
// console.log(' f = c.concat(d)', f);

// splice

let k = [33, 44, 55, 66, 77, 88];
console.log('k.splice(2)', k.splice(20, 2, 'hi', 'dd', 'tt', 'rr')); // []
console.log('k', k); // [33, 44, 55, 66, 77, 88, 'hi', 'dd', 'tt', 'rr']

let e = k.splice(2, 2, 'hi', 'dd', 'tt', 'rr');

console.log("k.splice(2, 2, 'hi', 'dd', 'tt', 'rr')", k);
console.log(e);

console.log("k.splice(2, 2, 'hi', 'dd', 'tt', 'rr')", k.splice(2, 2, 'hi', 'dd', 'tt', 'rr'));