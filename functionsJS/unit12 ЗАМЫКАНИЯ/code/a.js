// срабатывает клик на кнопке b-1

// Шаг 1.
// функция клика анонимная
// p = 10;
// let q = document.querySelector('.b-1');
// q.onclick = () => {
//    console.log('work q 1');
//    p = p + 1;
//    console.log(p);
// }

// Шаг 2.
// обернём нашу фу-ию в новую функцию

function ppp1() {
   let p = 10;
   let q = document.querySelector('.b-1');
   q.onclick = () => {
      console.log('work q 1');
      p = p + 1;
      console.log(p);
   }
}

// вызовем ppp1
// ppp1();
// теперь обе кнопки работают не зависимо друг от друга.
//

// Шаг 3.
// Можно ещё упростить написание функции.
// предыщую конструкцию оборачиваем в круглые скобки и в конце выполняем её - ставим ещё две круглые скобки
// что бы запустить выполннение ф.
// имя ф. можно удалить
(
   function () {
      let p = 10;
      document.querySelector('.b-1').onclick = () => {
         console.log('work b-1');
         p = p + 1;
         console.log(p);
      }
   }
)(); // <--- скобки в конце