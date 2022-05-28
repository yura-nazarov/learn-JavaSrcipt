// контекст = область видимости + переменная this
// this  - ссылка на объект, который вызывает код в данный момент

let count = 0;

function f1() {
   console.log(count);
   console.log(this);
   this.textContent = count;
   count++;
}
// если вызываем через кнопку, то появляется контекст для this - это кнопка
document.querySelector('.b-1').addEventListener('click', f1);

// перепишем предыдущую функцию f1 через стрелочную функцию
// arrow функция не имеют this!!!!!!!!!!!!!!!!!!!!!
// она не присваевает кнопке значение счётчика, как должна делать обычная функция
const f2 = () => {
   console.log(count);
   console.log(this);
   this.textContent = count;
   count++;
}

document.querySelector('.b-2').addEventListener('click', f2);

// контекст можно менять
// call - подменяет контекст для this
// f1(); //будет отображаться все окно Window, так как нет ни какой привязки к объекту
// что бы дать функции контекст, нужно в аргумент call положить этот контекст
// в данном случае, мы вложили объект кнопка b-1
// f1.call(document.querySelector('.b-1'));
// f1.call(document.querySelector('.b-1'));
//b-2
// f1.call(document.querySelector('.b-2'));
// f1();
// document.querySelector('.b-1').addEventListener('click', ()=>{
//     f1.call(document.querySelector('.b-2'));
// });

//счетчик изменяется на 2, из-за клика по верхней функции f1
document.querySelector('.b-1').addEventListener('click', () => {
   // f1.call(document.querySelector('.b-1'));

   // f1(); // если запускаем эту функцию, без контекста, тогда видим весь Window
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
   // в call можно добавлять аргументы
   f3.call(document.querySelector('.b-2'), count);
});

function sum1(a, b) {
   this.innerHTML = a + b;
   console.log(this.innerHTML);
}

document.querySelector('.b-2').addEventListener('click', () => {
   // sum1(2, 4);// без привязки к контексту в функции sum1 свойству innerHTML не к чему привязаться. Поэтому вывода нет. В консоли увидим сумму.
   sum1.call(document.querySelector('.out-3'), 13, 4); // привязка не считается за агрумент
   // apply передаёт аргументы из массива предварительно разбивая его на элементы
   sum1.apply(document.querySelector('.out-4'), [13, 4]);
});

// bind - назначаем контест и присваевам переменной, для сокращения предыдущих
// записей call и apply
const f4 = f1.bind(document.querySelector('.out-5'));

f4();
f4();
f4();

// или по клику кноки
document.querySelector('.b-5').addEventListener('click', f4);

//bind можно передавать аргументы по одному (не массивом!!!! как в apply) и вызывать функцию
// sum2 без аргументов
const sum2 = sum1.bind(document.querySelector('.out-6'));
sum2();
//либо убирать агрументы из bind (кроме контекста), а аргументы передавать
// в вызываемой функции sum2
sum2(4, 5);
sum2(4, 15);

// Частичные функции, переопределенным аргументом (частичные вычисления)

function sum3(a, b, c) {
   console.log(arguments);
   this.innerHTML = a + b + c;
}
// если вносить аргументы в функцию bind, а так же в вызываемую функцию
// sum4, тогда сначала будут браться агрументы из bind, а затем уже из
// sum4 начиная с первого элемента
// в bind можно вписать неизменяемые аргументы, а остальные добавлять через
// вызов функции sum4
const sum4 = sum3.bind(document.querySelector('.b-6'));

document.querySelector('.b-6').addEventListener('click', () => {
   sum4(3, 4, 5);
});

// перепишем предыдущую функцию через использование return
function sum7(a, b, c) {
   return a + b + c;
}

// если контекстный аргумент не нужно передавать, его можно заменить на undefined
const sum8 = sum7.bind(undefined, 100, 300);

document.querySelector('.b-7').addEventListener('click', () => {
   document.querySelector('.out-7').textContent = sum8(5);
});


//example 8
// Вытягивания методов

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
// и присваеваем это функции validatePassword 
const validatePassword = validate.sayHi.bind(obj);
console.log('obj', obj);
console.log('validatePassword', validatePassword());

// можем изменять поле пассвор и затем вновь вызывать ф-ю validatePassword 
// для проверки на валидность
obj.password = '123';
console.log(validatePassword());