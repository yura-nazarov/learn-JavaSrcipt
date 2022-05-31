let a = [3, 4, [4, 5]];
let b = { hi: 3, hello: 5 };
// a[100] = 100;
// let b = a.flat(1);//1
// console.log(a);
// console.log(b);
// fill
let c = [1];
let d = c.fill(2, 0, 100);
console.log(c);
console.log(d);

// keys
console.log(Object.keys(a));