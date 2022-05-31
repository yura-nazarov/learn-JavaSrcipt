// события для touch
// прикоснуться touchstart
// убрать палец touchend
// протащить пальцы по экрану touchmove

// в changedTouches, есть параметр Touch, он показывает сколькими пальцами мы нажимаем - length
// radiusX -Y - это радиус действия
// target - элемент на котором произошло действие нажатия
// force - сила нажатия


document.querySelector('.block-1').addEventListener("touchstart", myTouchStart);
document.querySelector('.block-1').addEventListener("touchend", myTouchEnd);
document.querySelector('.block-2').addEventListener("touchmove", myTouchMove);

// document.querySelector('.out-2').innerHTML = 'кол-во прикосновений';
function myTouchStart(event) {
   console.log('touch Start ');
   console.log(event);
   document.querySelector('.out-1').innerHTML += 'start ';
   document.querySelector('.out-2').innerHTML += event.touches.length + ' ';
}

function myTouchEnd(event) {
   console.log('touch End ');
   console.log(event);
   document.querySelector('.out-1').innerHTML += 'end ';
   document.querySelector('.out-3').innerHTML += event.touches.length + ' ';
}
function myTouchMove(event) {
   console.log('touch Move ');
   console.log('before preventDefault', event);
   //что бы блок по которому водят - не двигался(что бы пальцы не держали экран)
   event.preventDefault();
   console.log('after preventDefault', event);
   document.querySelector('.out-5').innerHTML += 'move ';
   document.querySelector('.out-4').innerHTML += event.touches.length + ' ';

}