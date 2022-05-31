let a = [4, 5, 300, 1, 0, -12, 12];

//============ MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP============
// не создаёт новый массив. т.е. размер остаётся прежний
// применение операции к каждому элементу
let b = a.map(function (item, index) {
   // console.log(item);
   return index;
})
// console.log(b);

//умножаем каждое значение на число и возвращаем значение
b = a.map(function (item, index) {
   return item * 10;
})
// console.log(b);

// замением слово function на стрелочную функцию
b = a.map((item, index) => {
   return item * 10;
})
// console.log(b);

// упрощаем дальше. Если всего одна операция, то можно убрать фигурные скобки
b = a.map((item, index) => item * 10);
// console.log(b);

// упрощаем ЕЩЁ дальше. Если в стрелочной фукнции всего один аргумент,
// то можно убрать скобки
b = a.map(item => item * 10);
// console.log(b);


//============ filter filter filter filter filter filter filter ============
// создаёт новый массив. размер может меняться
let c = a.filter(function (item, index) {
   return true; //  выведет все элементы в новый массив
   // return false; // не выведет ни один элемент в новый массив
})
console.log(c);

// только четные элементы будут попадать в массив с
c = a.filter(function (item, index) {
   if (item % 2 == 0) {
      return true;
   }
})
// console.log(c);

// только эл-ы больше нуля
c = a.filter(function (item, index) {
   if (item > 0) {
      return item;
   }
})

console.log(c);