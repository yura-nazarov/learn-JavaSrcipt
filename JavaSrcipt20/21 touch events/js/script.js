document.querySelector('.block-1').addEventListener("touchstart", myTouchStart);
document.querySelector('.block-1').addEventListener("touchend", myTouchEnd);
document.querySelector('.block-2').addEventListener("touchmove", myTouchMove);

function myTouchStart(event) {
   console.log('touch Start ');
   console.log(event);
   document.querySelector('.out-1').innerHTML += 'start ';
   document.querySelector('.out-2').innerHTML = event.touches.length;
}

function myTouchEnd(event) {
   console.log('touch End ');

   document.querySelector('.out-1').innerHTML += 'end ';
   document.querySelector('.out-3').innerHTML = event.touches.length;
}
function myTouchMove(event) {
   console.log('touch Move ');

   //что бы блок по которому водят не двигался
   event.preventDefault();

   console.log(event);
   document.querySelector('.out-1').innerHTML += 'move ';
   document.querySelector('.out-4').innerHTML = event.touches.length;

   return false;
}