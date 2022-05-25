let a = 1;

function rec() {
   console.log(a);
   a++;
   if (a > 100) { return a; }
   rec();
}

rec();

let offset = 0;
let testOffset = document.querySelector('.test2');

function move() {
   testOffset.style.left = offset + 'px';
   offset += 5;
   console.log(offset);
   if (offset > 200) return true;
   setTimeout(move, 500);
   // setInterval(() => {
   //    move();
   // }, 500);
}

document.querySelector('button').onclick = move;
