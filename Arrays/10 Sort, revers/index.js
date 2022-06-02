const names = ['Zlora', 'Liam', 'Jai', 'Ivan', 'ivan'];

console.log(names);
names.sort(); // изменяет, сортирует существующий массив
console.log(names);

// sort числа
let f = [03, 22, 04, 01, 05, -2, 0, -21, -20, -26, -20];
console.log('f', f);
f.sort(compFunc);
console.log(f);

function compFunc(a, b) {
   // 1. <0 ... a comes first
   // 2. =0 ... nothing will be changed
   // 3. >0 ... b comes first
   console.log('a:', a, ' b:', b);
   return a - b;
}

// f = [
//    { name: 'U', age: 13 },
//    { name: 'K', age: 23 },
//    { name: 'L', age: 32 },
//    { name: 'R', age: 11 },
//    { name: 'X', age: 43 },
// ];

// f.sort((a, b) => {
//    return a.age - b.age;
// });
// console.log(f);