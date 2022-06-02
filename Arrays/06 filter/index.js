const a = [3, 1, 3, -5, -3, -4, 5, -2, 67, 2, 9, 6, 7, 0, NaN];

let b = a.filter((item, index, array) => {
   return index;
});
console.log('a', a); // [3, 1, 3, -5, -3, -4, 5, -2, 67, 2, 9, 6, 7, 0]
console.log('b', b); // [1, 3, -5, -3, -4, 5, -2, 67, 2, 9, 6, 7, 0] нет нулевого элемента

// ex 2
const clients = [
   { "iin": "g8f0s0sf", "user": "Ivanov", "debt": 4 },
   { "iin": "88fs0spd", "user": "Petrov", "debt": 0 },
   { "iin": "8s9sdssp", "user": "Sidorov", "debt": 0 },
   { "iin": "c98ss0sf", "user": "ItGid.info", "debt": 14 },
   { "iin": "52983435", "user": "OOO MMM", "debt": 71400 },
   { "iin": "cd8ss0sf", "user": "Spirtbank", "debt": 2654 },
];

// Шаг 1
// let debts = clients.filter(item => item.debt >= 10);

// Шаг 2
// добавляем сортировку
// let debts = clients.filter(item => (item.debt >= 10)).sort((a, b) => (b.debt - a.debt));

// Шаг 3
// отформатируем запись выше
let debts = clients
   .filter(item => (item.debt >= 10))
   .sort((a, b) => (b.debt - a.debt));
console.log(debts);