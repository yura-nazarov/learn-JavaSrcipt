// срабатывает клик на кнопке b-2


// Шаг 1.
function ppp2() {
   let p = 60;
   let q = document.querySelector('.b-2');
   q.onclick = () => {
      console.log('work q 2');
      p = p + 10;
      console.log(p);
   }
}
// вызовем ppp2
// ppp2();

// беря ф. в круглые скобки, а затем поставим две круглые скобки
// в конце, мы можем вызвать эту ф. можно убрать имя ф.
(
   function () {
      let p = 60;
      document.querySelector('.b-2').onclick = () => {
         console.log('work b-2');
         p = p + 10;
         console.log(p);
      }
   }
)(); // <--- скобки в конце