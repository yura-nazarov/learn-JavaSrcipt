let a = [4, 5, 300, 1, 0, -12, 12];

//============ MAP MAP MAP MAP MAP MAP MAP MAP MAP MAP============
let b = a.map(function (item, index) {
   // console.log(index);
   return index;
})
// console.log(b);

//умножение на число
b = a.map(function (item, index) {
   return item * 10;
})
console.log(b);

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

let c = a.filter(function (item, index) {
   return true; //  выведет все элементы в новый массив
   // return false; // не выведет ни один элемент в новый массив
})

// только четные элементы
c = a.filter(function (item, index) {
   if (item % 2 == 0) {
      return true;
   }
})

// только эл-ы больше нуля
c = a.filter(function (item, index) {
   if (item > 0) {
      return item;
   }
})

// console.log(c);