// concat
const a1 = [21, 22, 23, 24];
const a2 = [31, 32, 33, 34];
const a3 = [];
a3[22] = 100;
const b = a1.concat(a2, a3);
console.log(b);
// concat -> string

// let c = 'hello';
// let d = 'hi';
// let f = c.concat(d);
// console.log(f);

// splice

let k = [33, 44, 55, 66, 77, 88];
k.splice(2, 2, 'hi', 'dd', 'tt', 'rr');
console.log(k);