let a = [-3, 4, -5, 7, -6, 2, 14]

let res = a.reduce((accum, item, index) => {
   // console.log('accum ', accum, ' item: ', item, 'index', index);
   // return accum = accum + item; // сумма всех элементов массива
   return accum = accum + ' ' + item; // выводит все элементы массива через пробел
})
// console.log('a', a)
// console.log('res', res)

// найти сумму эле-ов больше нуля. Если не задавать стартовый параметр
// ( в нашем случае 0), по умолчанию item будет элемент индекс 1
res = a.reduce((accum, item, index) => {
   if (item > 0) accum += item
   return accum;
}, 0)

// найти наибольше значение
res = a.reduce((accum, item, index) => {
   if (item > accum) accum = item
   return accum;
}, 0)
// console.log('a', a); //[-3, 4, -5, 7, -6, 2, 14]
// console.log('res', res); // 27

// переиндексация массива - создание объекта на основе массива.
// т.е. какой-нибудь упрощенный массив, только с нужными данными
// например только значения id или только города
let arr = [
   { "id": 55, "city": "arc" },
   { "id": 75, "city": "rca" },
   { "id": 175, "city": "bra" },
];

let b = arr.reduce((accum, item) => {
   // return item.id; // выведет только последние значение 175
   // return accum.push(item.id); // не сработает
   accum.push(item.id); // каждый эл-т пушим в массив
   return accum;
}, []) // <---------------- указываем массив!!!!

console.log(b);
console.log(Array.isArray(b));