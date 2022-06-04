// контекст видимости = область видимости + переменная this
// this - это ссылка на объект, который вызывает код в данный момент

// прибавляет +1 счётчик на кнопу
let count = 0;

function f1() {
   console.log(count);
   console.log(this);
   this.textContent = count; // берём текущий this и его свойсву textContent (если оно есть) присваиваем значение
   count++;
}

// вызываем ф. f1()
// f1(); // получим Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// если вызываем ф. f1() через кнопку, то появляется контекст для this
// в данном случае - это кнопка
// document.querySelector('.b-1').addEventListener('click', f1);

// перепишем предыдущую функцию f1 через стрелочную функцию
// стрелочные функции не имеют this!!!!!!!!!!!!!!!!!!!!!
// она не присваевает кнопке значение счётчика, как должна делать обычная функция
// const f2 = () => {
//    console.log(count);
//    console.log(this);
//    this.textContent = count; // что бы сво-во было активным, нужно явно получить кнопку
//    count++;
//    console.log('конец срелочной f2 вызываемой через кнопку');
// }

// вызываем стрелочную ф. f2 через кнопку.
// document.querySelector('.b-2').addEventListener('click', f2);


//  ********************* call ************************
// контекст можно менять

// call - позволяет подменяеть запуск ф-ии с нужным контекстом (для this)

// f1(); //будет отображаться все окно Window, так как нет ни какой привязки к объекту

// что бы дать функции контекст, нужно в аргумент call положить этот контекст

// в данном случае вызываем ф. f1, c вложенным объектом - кнопка b-1
// f1.call(document.querySelector('.b-1')); // срабатывает так, словно нажимается кнопка!!
// f1.call(document.querySelector('.b-1'));
//b-2 - може так же эмулировать нажтие кнопки b-2, для выполнения ф. f1
// f1.call(document.querySelector('.b-2'));
// f1(); //будет отображаться все окно Window, так как нет ни какой привязки к объекту

// напишем ф. при нажатие кнопки b-1, будет эмулироваться нажатие кнопки b-2 для выполнение ф. f1
// document.querySelector('.b-1').addEventListener('click', () => {
//    f1.call(document.querySelector('.b-2'));
// });

//счетчик изменяется на 2, из-за клика по верхней функции f1
document.querySelector('.b-1').addEventListener('click', () => {
   // f1.call(document.querySelector('.b-1'));

   f1(); // если запускаем эту функцию, без контекста (даже внутри нажатия кнопки), тогда видим весь Window
   // можно поменять контекст, можно при нажатии кнопки b-1, подставить контекст
   // в ф-ию call для b-2
   f1.call(document.querySelector('.b-2'));

});

// перепишем f1 добавим аргумент
function f3(count) {
   console.log(count);
   console.log(this);
   this.textContent = count;
}

document.querySelector('.b-3').addEventListener('click', () => {
   count++;
   // в call можно добавлять аргументы (кнопка, каунт)
   f3.call(document.querySelector('.b-2'), count);
});

// ф.суммы -  напишем ф. попроще, без нажатия на кнопку
function sum1(a, b) {
   this.innerHTML = a + b;
   console.log(this.innerHTML);
}

// ********************* apply ************************

// apply, удобнее чем call тем что передаёт аргументы (f1.call(arg1, arg2, arg3))
// из массива предварительно разбив его на элементы
// f1.call(arg1, arg2, arg3...)  === f1.apply(arg1, [arg2, arg3...])

// нажимаем на b-2
document.querySelector('.b-2').addEventListener('click', () => {
   sum1(2, 4);// без привязки к контексту в функции sum1 свойству innerHTML не к чему привязаться. Поэтому вывода нет. В консоли увидим сумму.
   sum1.call(document.querySelector('.out-3'), 13, 4); // привязка не считается за агрумент
   // apply передаёт аргументы из массива предварительно разбивая его на элементы
   sum1.apply(document.querySelector('.out-4'), [13, 4]);
});


// ********************** bind *********************

// bind - присвоение назначенного контеста в переменую функцию, (для сокращения call и apply)

// переменной f4 присваеваем контекст вызова document.querySelector('.out-5')
const f4 = f1.bind(document.querySelector('.out-5'));

// вызываем ф. f4
// f4();
// f4();
// f4();

// вызываем ф. f4 по клику кноки b-5
// document.querySelector('.b-5').addEventListener('click', f4);

// в bind можно передавать аргументы по одному (не массивом!!!! как в apply)
// вызываем ф. sum1(a, b) 
const sum2 = sum1.bind(document.querySelector('.out-6'), 77, 88);
// в этом случае функцию sum2 вызываем без аргументов!!!!!
sum2();
console.log('конец sum2();');

//либо убирать агрументы из bind (кроме контекста)
// const sum2 = sum1.bind(document.querySelector('.out-6'));
//а аргументы передаём в вызываемой функции sum2
// sum2(4, 5);
// sum2(4, 15);


// Частичные функции, функцции с переопределенным аргументом (частичные вычисления)

function sum3(a, b, c) {
   console.log(arguments);  // [10, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
   this.innerHTML = a + b + c;
}
// в этом примере выше, аргумент 10, был взят из аргументов ф. sum3.bind(document.querySelector('.b-6'), 10)
// остальные агрументы переданные из вызова функции sum4(3, 4, 5);
// были сдвинуты на одну позицию

// если вносить аргументы в функцию bind, а так же в вызываемую функцию
// sum4, тогда сначала будут браться агрументы из bind, а затем уже из
// sum4 начиная с первого элемента
// в bind можно вписать неизменяемые аргументы, а остальные добавлять через
// вызов функции sum4
const sum4 = sum3.bind(document.querySelector('.b-6'), 10);

document.querySelector('.b-6').addEventListener('click', () => {
   sum4(3, 4, 5); // если в переменной bind есть аргументы, тогда нет смысле передавать все три аргумента, хотя и можно их передать
});


// перепишем предыдущую функцию через использование return
// если нам не нужно использовать свойсво this
function sum7(a, b, c) {
   console.log(arguments);
   return a + b + c;
}

// если контекстный аргумент не нужно передавать, его можно заменить на undefined
// и передадим два аргумента в ф. bind
const sum8 = sum7.bind(undefined, 100, 300);

document.querySelector('.b-7').addEventListener('click', () => {
   document.querySelector('.out-7').textContent = sum8(5);
});


//example 8
// ******************* Вытягивания методов ********************

const validate = {
   password: 'hima23432',
   email: 'pupkin@de',
   isValid: false,
   sayHi() {
      console.log(this);
      return (this.password.length > 6) ? true : false;
   }
}

console.log(validate.sayHi());
const obj = { password: 'hello222' };
// вкладываем объект obj в функцию проверки sayHi в ассоц. массиве validate
// и присваеваем это функции validatePassword 'вытягиваем метод sayHi'
const validatePassword = validate.sayHi.bind(obj);
console.log('obj', obj);
console.log('validatePassword', validatePassword());

// можем изменять поле пассвор и затем вновь вызывать ф-ю validatePassword 
// для проверки на валидность
obj.password = '123';
console.log(validatePassword());