// 'use strict';
// Function declaration - обычное объявление функции со словом function
// При первом запуске JS проходит по всем функциям и записывает их
// поэтому их можно вызвать если даже исполняемый код не дошел до выполнения функции
// function f1(params) {
//    console.log('f1');
// }
// f1(); // но когда функция находится после if тогда мы не можем вызвать функцию перед
// её выполнением

// if (true) {
//    function f1() {
//       console.log('function 1 if');
//    }
// }
// else {
//    function f1() {
//       console.log('function 1 else');
//    }
// }

// f1(); // в !!!строгом режиме!!!!, такой кодн не сработает с конструкцией if


// function expression
// function expression - это присвоение константе или переменной значения фукнкции
// const f3 = function
// let f3 = function

function f2() {
   // console.log(f2.name);
   console.log('function f2');
} //в конце функции не ставиться точка с запятой

f2();

// вызвать функцию f3 можно только ниже её
const f3 = function (a) {
   console.log('function f3 ');
};//из-за того что это операция присвоения, в конце ставиться точка с запятой

f3(); // это будет переменной, так как она будет являться каким-то значением
console.log('f2', f2); // выдаст содержание функции f2
console.log('f3', f3); // выдаст содержание функции f3

const f4 = f3;

console.log(f4 === f3); //true строгое и не строгое
console.log(f4); // выдаст содержание функции f3

// присвоеим f41 туже саму функцию, что и f3. Теперь их сравнение будет false
const f41 = function (a) {
   console.log('function f3 ');
};

console.log(f41 === f3); //false строгое и не строгое


const f5 = function example() {
   // console.log(f5.name);
   // console.log(example.name);
   console.log('function example');
}

f5();

//! ошибка Не возможно обратиться к функцииe xample() если она выражена
// через function expression
// к ней можно обратиться только по имени присвоенной этой функции переменной
// example();

// перепишем пример выше как function declaration
function example() {
   // console.log(f5.name);
   // console.log(example.name);
   console.log('function example');
}

// теперь обе функции работают
const f6 = example;
f6();
example();
console.log(f6 === example); //true


const f7 = function (a) {
   console.log('function example ' + a);
}

f7(4444); // получим function example 4444

// перепишем ф-ю выше через return
const f71 = function (a) {
   return 'function example ' + a;
}

console.log(f71(3333)); // получим function example 3333

// this
// перепишем ф-ю выше
const f8 = function example() {
   console.log('f8.name', f8.name); // example, не смотря на то что её можно вызвать только через f8
   console.log('example.name', example.name); // example, не смотря на то что её можно вызвать только через f8
   // console.log('this.name', this.name); // выдаст ошибку в 'use strict'
   console.log('function example 8 ');
}
// это сработает будет выведено f8.name в обоих случаях
const f9 = f8;
f8(); // это сработает будет выведено f8.name = example в обоих случаях
f9(); // это сработает будет выведено f8.name = example в обоих случаях

// что выведет у анонимной ф-ии? она выдаст имя функции f10
const f10 = function () {
   console.log('f10.name', f10.name);
   console.log('function example 10 ');
}

f10()
