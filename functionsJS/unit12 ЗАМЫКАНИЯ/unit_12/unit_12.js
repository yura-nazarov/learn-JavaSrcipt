// Task 1
// Напишите анонимную функцию применяя замыкание. Внутри функции создайте переменную равную 75, и повесьте на кнопку .b-1 событие клик и функцию, которая увеличивает переменную на 1 и присваивает блоку .out-1 ширину равную переменной + 'px'. Анонимная функция замыкание должна запускаться при загрузке файла.
(function () {
   let w = 75; // тут ваша переменная
   document.querySelector('.b-1').addEventListener('click', () => {
      w++;
      document.querySelector('.out-1').style.width = w + 'px';
   });
   // or
   // document.querySelector('.b-1').onclick = function () {
   //    w++;
   //    document.querySelector('.out-1').style.width = w + 'px';
   // }
})();

// тут прописываете запуск

// Task 2
// Усложним предыдущую задачу. Создайте анонимную функцию замыкание, в которой создайте переменные w = 75 и h = 30. Создайте две функции, одна запускается при клике на кнопку .b-2-1 и увеличивает ширину блока .out-2, вторая запускается при клике на кнопку .b-2-2 и увеличивает высоту блока .out-2. Анонимная функция замыкание должна запускаться при загрузке файла.

(
   function () {
      let w = 75;
      let h = 30;
      const out = document.querySelector('.out-2').style;
      function increment(count) {
         return ++count;
      }
      document.querySelector('.b-2-1').addEventListener('click', () => {
         w = increment(w);
         out.width = w + 'px';
      })
      document.querySelector('.b-2-2').addEventListener('click', () => {
         h = increment(h);
         out.height = h + 'px';
      })
   }
)();


// Task 3.
// В скобках напишите код функции замыкания, которая создает переменную count = 0 и возвращает анонимную функцию, которая в свою очередь увеличивает count на 1 и возвращает его.
let count3 = (function () {
   let count = 0;
   return () => {
      return count++;
   }

})();
console.log(count3());
console.log(count3());
console.log(count3());
console.log('END of task 3');
//or
// function counter() {
//    let count = 0;
//    return () => {
//       return count++;
//    }

// };
// let count3 = counter();
// console.log(count3());
// console.log(count3());
// console.log(count3());


// Task 4
// Напишите функцию замыкание createCount. Внутри функции создайте count равный переданному в createCount аргументу ( по умолчанию равен 0) и сделайте return функции, которая увеличивает count на 1 и возвращает его. 
let count4 = (
   function createCount(count = 0) {
      return function () {
         return count++;
      }
   }
)();
// let count5 = createCount(); // не сработает

console.log('count4(444)', count4(444));
console.log('count4', count4());
// console.log(count5(10000));// не сработает


function createCount(count = 0) {
   return function () {
      return count++;
   }
}
let count6 = createCount();
let count7 = createCount(1000);
console.log('count6', count6());
console.log('count6', count6());
console.log('count7 = createCount(1000)', count7());
console.log('count7 = createCount(1000) ', count7());
console.log('END of task 4');


// Task 5
// Напишите функцию замыкание generatePassword, которая принимает аргумент - массив символов, и содержит в себе две функции. Первая функция randomInteger(min, max) возрвщает случайное целое число в диапазоне, а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать случайный символ из массива переданного функции generatePassword в качестве аргумента. 

function generatePassword(arr) {
   function randomInteger(min = 0, max = arr.length - 1) {
      return Math.floor(Math.random() * (max - min + 1) + min);
   }
   return function () {
      return arr[randomInteger()];
   }
}

let password = generatePassword(['b', 'y', 'Y', 'b', 'z']);
console.log('password()', password());
console.log('END of task 5');


// Task 6
// Напишите функцию замыкание generatePassword2, которая принимает два аргумента - массив символов (arr), и длину пароля(n). Функция  содержит в себе две функции. Первая функция randomInteger(min, max) , а вторую функцию возвращает (делает return). Данная функция, которую возвращают должна возвращать строку длинной n из символов массива arr. Символы выбираются случайным образом. 

function generatePassword2(arr, n) {
   let pass = '';
   let count = 1;
   function randomInteger(min = 0, max = arr.length - 1) {
      return Math.floor(Math.random() * (max - min + 1) + min);
   }
   return function passGener() {
      pass += arr[randomInteger()];
      count++;
      if (count <= n) passGener();
      return pass;
   }
}

let password2 = generatePassword2(['b', 'y', 'Y', 'b', 'z'], 4);
console.log(password2());
console.log('END of task 6');


// Task 7
// Напишите функцию замыкание createElement, которая принимает 2 аргумента, первый название тега (elem), второй текст в теге (text). Функция createElement должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст. Созданный тег должен быть возвращен. 

function generateElement(elem, text) {
   return () => {
      return document.createElement(elem).innerHTML = text + ' ';
   }
}

let divCreator = generateElement('div', 'hello');
let spanCreator = generateElement('span', 'hi');
document.querySelector('.out-7').textContent = '';
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(divCreator());
document.querySelector('.out-7').append(spanCreator());
document.querySelector('.out-7').append(spanCreator());
console.log('END of task 7');

// Task 8
//  Напишите функцию замыкание createElement2, которая принимает 1 аргумент -  название тега (elem). Функция createElement2 должна возвращать функцию, которая через createElement создает elem и через innerHTML добавляет в него текст переданный в данную функцию как аргумент text. Созданный тег должен быть возвращен. 

function generateElement2(elem) {
   return function (t) {
      return document.createElement(elem).innerHTML = t + ' ';
   }
}

let divCreator2 = generateElement2('div');
let spanCreator2 = generateElement2('span');
document.querySelector('.out-8').textContent = '';
document.querySelector('.out-8').append(divCreator2('ex1'));
document.querySelector('.out-8').append(divCreator2('ex2'));
document.querySelector('.out-8').append(spanCreator2('ex3'));
document.querySelector('.out-8').append(spanCreator2('ex4'));
console.log('END of task 8');

// Task 9
// Напишите функцию замыкание generateDay, внутри которой создан массив days с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает days[n-1] день недели. 

function generateDay() {
   const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
   ];

   return (n) => days[n - 1];
   // or
   // return function (n) { return days[n - 1]; };
   // or
   // return function (n) {
   //    return days[n - 1];
   // };
}

const day = generateDay();
console.log(day(2))
console.log(day(3))
console.log('END of task 9');


// Task 10
// Напишите функцию замыкание generateMonth, внутри которой создан массив month с именами дней недели и return анонимной функции, которая получает аргумент n и возвращает month[n-1] день недели. 

function generateMonth() {
   const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
   ];

   return function (n) {
      return month[n - 1];
   }
}

const month = generateMonth();
console.log(month(2));
console.log(month(3));
console.log('END of task 10');
