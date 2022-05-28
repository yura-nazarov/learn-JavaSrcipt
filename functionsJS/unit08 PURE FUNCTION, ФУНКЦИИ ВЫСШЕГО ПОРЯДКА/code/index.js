// Pure функции
// возвращают значения (результат) кот-е зависят только от входящих параметров
// такая функция будет более лёгкой для отлова ошибок
function squad(n) {
   return n ** 2;
}

console.log('squad', squad(4));
console.log('squad', squad(-4));

// добавим в чистую функцию изменение состояния DOM out-1
// она измениет состояние страницы.
function squad2(n) {
   document.querySelector('.out-1').textContent = n ** 2;
}
squad2(5);

// можно упростить используя ф-ю squad
function squad3(n) {
   document.querySelector('.out-1').textContent = squad(n);
}
squad3(6);

// ex 2
let count = 0;
// эта ф-я зависит от внешних переменных. Это уже потенциальные ошибки
// это не чистая функция
function myCount() {
   return count++;
}

console.log('myCount', myCount());
console.log('myCount', myCount());
console.log('myCount', myCount());

//ex 3
// тоже не явл-ся чистой. вызов окна. изменение состояния.
function showAlert() {
   alert('Hello');
}

// showAlert();

// ex 4
// сайд эффектов нет. внешних перем. нет.
// но резу-ты часто разные. Чистой фукцие можно назвать с оговорками
function randomInt(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

// вызовем функцию randomInt в цикле 20 раз
// for (let i = 0; i < 20; i++) {
//    console.log('randomInt ', randomInt(10, 20));
// }

//ex 5
// сайд эффектов нет. зависит только от внешних аргументов?
// если будут константы - тогда она будет чистой
function year51(d) {
   return (2021 - d);
}
console.log('year51', year51(2005));

// ex5.2
// из-за динамического изменения даты - она не будет чистой функцией
// нужно стараться писать чистые функции ( по возможности)
function year52(d) {
   let today = new Date();
   let year = today.getFullYear()
   return (year - d);
}

console.log('year52', year52(2005));


//ex 6
// не чистая. т.к. меняет состояние консоли
function show(d) {
   console.log(d);
}

show('show', 4444);


// функции высшего порядка
// это фун-я которая может принять функцию и возвратить функцию
//ex 7
function hello() {
   console.log('hello');
}
console.log(hello);

hello.hi = 123;
console.log('after hello.hi = 123', hello);
console.log('hello.hi', hello.hi);

//ex 8
function pOdd() {
   console.log('odd');
}

function pEven() {
   console.log('even');
}

function myNumber(n, odd, even) {
   if (n % 2 === 0) return even;
   else return odd;
}

let z = myNumber(7, pOdd, pEven);
// console.log('z', z); // в z - лежит функция, которую возвратила функция myNumber
z();

//ex 9
const w = [
   { name: "Ivan", "age": 25 },
   { name: "Serg", "age": 35 },
   { name: "Olga", "age": 27 },
];

let w1 = [];
// в массив w1 вносим тех кто старше 26 лет
for (let i = 0; i < w.length; i++) {
   if (w[i].age >= 26) w1.push(w[i]);
}
console.log('for w1', w1);

//ex 91
// перепишем предыдущую функцию
w1 = w.filter(mySort);

function mySort(item) {
   if (item.age >= 26) return true;
}
console.log('filter w1', w1);

//ex 92
// перепишем предыдущую функцию
w1 = w.filter(item => (item.age >= 26));
console.log(w1);