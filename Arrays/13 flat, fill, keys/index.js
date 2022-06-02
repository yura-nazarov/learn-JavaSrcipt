
// flat изменяет массив

// let a1 = [1, 1, [1, 1]];
// let a2 = [1, 1, [1, 1], 1, [1, [2]]];
// let a3 = [1, 1, [1, 1], 1, [1, [2, [3]]]];
// console.log(a1.flat()); // [1, 1, 1, 1]
// console.log(a1.flat(1)); // [1, 1, 1, 1]
// console.log(a1.flat(2)); // [1, 1, 1, 1]
// console.log(a2.flat()); // [1, 1, 1, 1, 1, 1, Array(1)]
// console.log(a2.flat(2)); // [1, 1, 1, 1, 1, 1, 2]
// console.log(a3.flat()); // [1, 1, 1, 1, 1, 1, Array(2)]
// console.log(a3.flat(2)); // [1, 1, 1, 1, 1, 1, 2, Array(1)]
// console.log(a3.flat(3)); // [1, 1, 1, 1, 1, 1, 2, 3]

// let a = [2, 4]
// a[100] = 100;
// console.log(a.flat()); // [2, 4, 100] пропустил отсутствующие эл-ты

// fill - изменяет обрабатываемый массив 
// агр1 - чем заполнять
// агр2 - с какого индекса включительно
// агр3 - по какой иднекс не включительно
let c = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(c.fill(2, 2, 4)); // [1, 1, 2, 2, 1, 1, 1, 1]
c = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(c.fill(2, 0, 2)); // [2, 2, 1, 1, 1, 1, 1, 1]
c = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(c.fill(2, 1));    // [1, 2, 2, 2, 2, 2, 2, 2]
c = [];
console.log(c.fill(2, 0, 2)); // []
c = [1];
console.log(c.fill(2, 0, 2)); // [2]


// keys
let a0 = [0, 0, 0, 0];
let a1 = [1, 1, [1, 1]];
let b = { hi: 3, hello: 5 };
console.log(Object.keys(a0)); // ['0', '1', '2', '3']
console.log(Object.keys(a1)); // ['0', '1', '2']
console.log(Object.keys(b)); // ['hi', 'hello']