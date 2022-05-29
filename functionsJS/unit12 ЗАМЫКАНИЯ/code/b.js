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

(function () {
   let p = 60;
   q = document.querySelector('.b-2');
   q.onclick = () => {
      console.log('work q 2');
      p = p + 10;
      console.log(p);
   }
})();