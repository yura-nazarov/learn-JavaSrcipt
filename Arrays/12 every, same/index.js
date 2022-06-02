const a = [5, 2, 1, 1, 4, 5, 6, 7, 8];


const str = ['b', 'b', 'b ', 2]; // не работает со строкой
let b = str.every(item => {
   if (item = 'b ') {
      return true;
   }
});

b = a.every(item => {
   if (item > 1 && item < 20) {
      return true;
   }
})

// console.log(b);

const c = [
   { name: "ivan", age: 23 },
   { name: "inna", age: 114 },
   { name: "serg", age: 115 },
   { name: "antony", age: 33 },
];

b = c.some(item => {
   if (item.age > 43) { // true
      return true;
   }
})

console.log(b);

let e = [];
// // every

// let b = e.every(item => {
//     return true;
// });

// console.log(b);