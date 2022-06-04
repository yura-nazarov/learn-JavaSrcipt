const a = [3, 4, 5, 6, 8, 0, 143, 45];
a[10] = 10;

let b = a.map((item, index) => {
   return item * 10;
   // return 1; // запишет 1 вместо всех элементов
});

// console.log(b); // размерность сохранилась, не смотря на пропуски эл-то 8 и 9

a1 = [22, 333, 444]
// изменим наш исходный массив a1 в ходе выполнения метода
let b1 = a1.map((item, index, array) => {
   if (index == 2) {
      array[index + 1] = 66; // добавит элемент в конец массива a1
   }
   return item;
});

console.log('b', b1); // [22, 333, 444]
console.log('a1', a1); // [22, 333, 444, 66]

// filter

let c = a.filter((item, index) => {
   if (item % 2 === 0) {
      return index;// true
   }
});

// console.log(c);

// убираем пробелы и в нижний регистр
const z = [
   { "name": '  Ivan ', 'order': 12, 'sum': '123,5' },
   { "name": 'Ivan2    ', 'order': 12, 'sum': '123.5' },
   { "name": '  avan ', 'order': 12, 'sum': '123, 5' },
   { "name": '  Sicae ', 'order': 12, 'sum': '123.2' },
];
console.log(z);
const zBack = z.map(item => {
   item.name = item.name.trim().toLocaleLowerCase();
   return item;
})

console.log(zBack);