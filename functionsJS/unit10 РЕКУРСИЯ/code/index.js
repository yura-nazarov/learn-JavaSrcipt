let t = 0;
function f1() {
   t++;
   console.log(t);
   // добавив условие и поместив вызов функции в саму функцию, получаем рекурсию
   if (t === 100) return;
   f1();
}

// f1();

// иногда рекурсию можно сделать в виде
// цикла
function f2() {
   let out = '';
   for (let i = 1; i <= 30; i++) {
      out += i + ' ';
   }
   console.log(out);
}

// f2();

// иноггда цикл можно сделать через
// рекурсию
let i = 0;
let out = '';
function f3() {
   i++;
   out += i + ' ';
   if (i >= 30) return out;
   f3();
}
// f3();
// console.log(out);

// ex 2

// генерируем случайное число от 0 до 100
// нужно посчитать сколько раз нужно сгенерировать число что бы в сумме было больше 300
function randomInteger(min, max) {
   // случайное число от min до (max+1)
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}

let sum = 0; // эта переменная накапливает деньги
let count = 1;
function moneyRecursion() {
   let randomNum = randomInteger(0, 100);
   console.log('add new coin(random number 0-100): ' + randomNum);
   sum += randomNum;
   console.log('sum money: ' + sum);
   if (sum >= 300) return;
   count++
   moneyRecursion();
   console.log('count', count);
}

// moneyRecursion();

// перепишем эту же задачу в цикле
function moneyCycle() {
   let s2 = 0;
   // for (let i =0; true; i++) // безконечный цикл
   while (true) {
      let m = randomInteger(0, 100);
      console.log('add: ' + m);
      s2 += m;
      console.log('sum: ' + s2);
      console.log('count', count++);
      if (s2 >= 300) return;
   }
}

// moneyCycle();

// ex 3

const users = {
   "ivanov": {
      age: 25,
      parent: {
         "ivanov-a": {
            age: 45
         },
         "ivanov-b": {
            age: 43,
            parent: {
               "sergeev-a": {
                  age: 88,
                  parent: {
                     "lionenko": {
                        age: 33,
                        parent: {
                           "petrov": {
                              age: 33,
                              parent: {
                                 "petrov2": {
                                    age: 11,
                                    parent: {
                                       "PENNOT": {}
                                    }
                                 }
                              }
                           }
                        }
                     }
                  }
               }
            }
         }
      }
   },
   "kostenko": {
      age: 56,
      parent: {
         "ignatenko": {

         },
         "sniezko": {
            age: 45
         }
      }
   }
}

function userParentRecursion(obj) {
   if (obj.parent !== undefined) {
      for (let key in obj.parent) {
         console.log(key);
         userParentRecursion(obj.parent[key]);
      }
   }
}

// проверяем есть ли у kostenko поле perent - выводим их
// userParentRecursion(users['ivanov']);

// что бы перебрать все значения у объекта users нужно это сделать в цикле
// это нужно что бы проходить по всем объектам в записи, а не только по тем где есть поле perent
// for (let key in users) {
//    console.log('users[key]', users[key]);
//    userParentRecursion(users[key]);
// }


// ex 4
let position = 0;
// document.querySelector('.block').addEventListener('click', () => {
//    position++;
//    document.querySelector('.block').style.left = position + 'px';
// });

// перепишем это же в цикле
// ex 4.1
// получаеются скачки по 400 пикс. т.к. прибавлене идёт очен быстро, можно замедлить
document.querySelector('.block').addEventListener('click', () => {
   for (let i = 0; i < 400; i++) {
      position++;
      document.querySelector('.block').style.left = position + 'px';
   }
});

// что бы не было скачков можно написать ф-ию для рекурсивной анимации
//
// ex 4.2
function recursionAnimation() {
   position = position + 5;
   if (position > 400) return;
   document.querySelector('.block').style.left = position + 'px';
   animation(); // эта ф-ию запускает тайм аут функцию
}
// а тайм аут функция, запускает ф-ю анимации
function animation() {
   setTimeout(recursionAnimation, 10);
}

// animation();

// ex 5

// факториал числа 5 = 1 * 2 * 3 * 4 * 5
// сделаем рекурсию в фикле
function fact1(n) {
   let s = 1;
   for (let i = 1; i <= n; i++) {
      s = s * i;
   }
   console.log(s);
}
// fact1(5);

// ex 5.1
// перепишем это через рекурсию
let s = 1;
function fact2(n) {
   if (n === 0) return;
   s = s * n;
   fact2(n - 1);
}
// fact2(5);
// console.log(s);


// ex 6
// обход древовидного DOM

// // плаская коллекция (без разделения вложенности) всех вложенных элементов.
// // Просто, что бы посчитать кол-во элементов внутри тега с классом test
// const treeMulti = document.querySelectorAll('.test *');
// console.log('treeMulti', treeMulti); // NodeList(7) [p, div, div, span, p, b, div]

// // получим элементы первого уровня. Нужно будет перебирать вложенные объекты
// const treeMultiFirst = document.querySelectorAll('.test>*');
// console.log('treeMultiFirst', treeMultiFirst); // NodeList(5) [p, div, div, p, div]

// // получаем весь блок тега test со всеми вложениями
// const treeAll = document.querySelectorAll('.test');
// console.log('treeAll', treeAll); // NodeList [div.section.test]

// // если получаем элемент в единственном числе querySelector,
// // тогда получаем не NodeList, а удобный для перебора объект
// const treeAll1 = document.querySelector('.test');
// console.log('treeAll', treeAll1); // div.section.test

// получаем один, целый элемент со всеми узлами. Теперь переберём его с помощью рекурсии
const tree = document.querySelector('.test');
const out12 = document.querySelector('.out12');
// console.log('tree', tree);
out12.textContent = '';
function treeTravelsal(elem) {
   console.log('elem', elem);
   let elemChildren = elem.children;
   if (elem.children !== '') out12.textContent += elem.tagName + ' ';
   console.log('elemChildren', elemChildren);
   Array.from(elemChildren).forEach(item => treeTravelsal(item));
}

treeTravelsal(tree);
