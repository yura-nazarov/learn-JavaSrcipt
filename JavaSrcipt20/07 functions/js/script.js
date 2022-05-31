let f11 = document.querySelector('.f-11'); //кнопка
let f1 = document.querySelector('.f-1'); //кнопка
let f12 = document.querySelector('.f-12'); //кнопка

// ex 1
function one() {
   console.log('work');
}

one();

f11.onclick = one; // без круглых скопбок. если с круглымы, то ф. отработает и возвратит результат

// ex 2
console.log('1 + one()', 1 + one);
console.log('one()', one()); //undefined

// ex 3
function two() {
   console.log('work 2222');
   return 54;
}

two();
// т.к. ф. two() возвращает значение, то саму ф. можно использовать в операциях
console.log('1 + two()', 1 + two()); // 54 + 1
console.log('*******************');

// ex 4
let a = 8;
let b = 9;

function multi() {
   console.log('a * b =', a * b);
   return a * b;
}

// multi();
let c1 = multi(); // c1 - присваеваем результат выполнения фу-ии, поэтому вызывать c1 нужно без скобок
let c2 = multi; // с2 - присваеваем САМУ функцию. Поэтому вызывать нужно будет c2()

console.log('let c1 = multi()', 10 * c1);
console.log('let c2 = multi', c2);

f12.onclick = multi;

console.log('*********************');

// ex 5
function multi2(x, y) {
   return x * y;
}

console.log('multi2(2, 2)', multi2(2, 2));
console.log('multi2(1, 5)', multi2(1, 5));
console.log('multi2(3, 12)', multi2(3, 12));

console.log('*********************');

// ex 6
f1.onclick = () => {
   console.log('helllo');
}

// ex 7
document.querySelector('.f-2').onclick = function () {
   console.log('*********************');
   console.log('+++++++++++++');
}
// перезатирает предыдущуа фу-ию
document.querySelector('.f-2').onclick = () => {
   console.log('--++++');
}

// function (a, b) {

// }

// (a, b) => {

// }

// a => {

// }

// function (a) {
//    return 56 * a;
// }

// (a) => 56 * a;