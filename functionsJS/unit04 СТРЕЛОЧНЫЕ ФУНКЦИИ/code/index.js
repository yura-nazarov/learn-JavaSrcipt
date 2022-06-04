
function sum(a, b) {
   return a + b;
}

function multi(a, b) {
   return a * b;
}

// напишем обёртку для вызова ф.
document.querySelector('.b-1').addEventListener('click', function () {
   let res = sum(23, 23);
   console.log(res);
});

// перепишем анонимную ф. выше, на стрелочную
document.querySelector('.b-1').addEventListener('click', () => {
   let res = sum(23, 23);
   console.log('a + b', res);
});


//        запуск двух функций по нажатию одной кнопки

document.querySelector('.b-2').addEventListener('click', function () {
   let res = sum(23, 23);
   console.log(res);
   let res2 = multi(23, 23);
   console.log(res2);
});

// перепишем анонимную ф. выше, на стрелочную
document.querySelector('.b-2').addEventListener('click', () => {
   let res = sum(23, 23);
   console.log(res);
   let res2 = multi(23, 23);
   console.log(res2);
});


// 1.0 callback
const ar1 = [4, 5, 6, 7, 8];

function pow2(a) {
   return a ** 2;
}

// функция map перебирает каждый элемент и выполняет действие в скобках.
// аргументом такой ф. может быть и функция
// pow2 - это колбек ф.
const res2 = ar1.map(pow2);
console.log('res2', res2);

// 1.1 перепишем callback функцию вышу, через анонимную ф.
const res3 = ar1.map(function (a) {
   return a * a;
})
console.log('res3', res3);

// 1.2 ещё раз перепишем callback функцию через стрелочную функцию
const res4 = ar1.map((a) => {
   return a * a;
})
console.log('res4', res4);

// 1.3 ещё раз перепишем callback функцию
// сокращенный синтаксис
// если строка в одной действие на дной сторое - можно убрать {} и return
// если в ф. один аргумент, скобки вокруг него тоже убрать ()
const res5 = ar1.map(a => a * a)
console.log('res5', res5);


// filter
// коллбэк ф. - это анонимная ф.
const res6 = ar1.filter(function (element, index) {
   if (index % 2 === 0) { // фильтрует только четные эл-ты
      return true;
   }
})
console.log(res6);

//преобразовываем в стрелочную функцию
const res7 = ar1.filter((element, index) => {
   // if (index % 2 === 0) {
   //    return true;
   // }
   return (index % 2 === 0); //так как только одно выражение то фигурные скобки return можно опустить
})
console.log(res7);

// ещё короче!!!!
const res71 = ar1.filter((element, index) => (index % 2 === 0))
console.log(res71);



// ********** arrow & this ******************


document.querySelector('.b-3').addEventListener('click', function () {
   console.log(this); // вернёт <button class="b-3">Button 3</button>
});

// преобразуем в стрелочную
// стрелочная ф. не имеет собственной видимости, поэтому идёт выше и берёт this 
// из глобальной. в этом случае this = window
// this в срелочной ф. работает не так как в даже в анононимных ф-иях
document.querySelector('.b-3').addEventListener('click', () => {
   console.log(this); // вернёт Window {window: Window, self: Window, document: document, name: '', location: Location, …}
});


//arrow и аргументы

const f1 = (...arguments) => {
   console.log('work');
   console.log(arguments); // 
}

f1(10, 30);

const f12 = (...arg) => {
   console.log('...arg');
   console.log(arg); // 
}

f12(210, 230);

const f11 = () => {
   console.log('work f11');
   // console.log(arguments); // не сработает
}

f11(10, 30);