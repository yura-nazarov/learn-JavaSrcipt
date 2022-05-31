const one = document.querySelector('.one');

// присваиваем свойсва объекту
one.style.width = '150px';
one.style.paddingBottom = '40px';

// выводим все стили объекта
console.log(one.style);

// добавляем класс и несколько классов
one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle'); // получаем кнопку

toggle.onclick = function () {
   this.classList.toggle('three'); // контекст кнопки
   one.classList.toggle('two'); // обращение к объекту one
}


//attributes

// выведем атрибут data эемента gas
console.log(one.getAttribute('data')); // hello
// получаем первую запись с классом link
console.log(document.querySelector('link').getAttribute('href'));

// получаем ВСЕ записи с классом link и выводим элемент номер 1
console.log(document.querySelectorAll('link')[1].getAttribute('href')); // hello

// установим свой новый атрибут
one.setAttribute('data-num', 16);

// ex
// получаем все кнопки с классом gas
let gas = document.querySelectorAll('.gas');

for (let i = 0; i < gas.length; i++) {
   gas[i].onclick = function () {
      let gallons = +document.querySelector('.gallons').value;
      let amount = this.getAttribute('data');
      console.log(gallons * amount);
   }
}

// ex
let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('one', 'two');
a.onclick = function () {
   alert('hello');
}
console.log(a);

// добавление элемента a
// document.querySelector('.test').appendChild(a);

// заменяет элемент на document.querySelector('.test') на элемент a
document.querySelector('.test').replaceWith(a);

// добавление элемента document.querySelector('.test') на новый элемент а
// document.querySelector('.test').parentNode.replaceChild(a, document.querySelector('.test'));