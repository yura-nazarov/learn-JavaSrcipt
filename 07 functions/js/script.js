let f1 = document.querySelector('.f-1');
function one() {
   console.log('work');
}

one();

// f1.onclick = one();

console.log(1 + one());
console.log(one());

function two() {
   console.log('work 2222');
   return 54;
}

two();

console.log(1 + two());

let a = 8;
let b = 9;

function multi() {
   console.log(a * b);
   return a * b;
}

let c1 = multi();
let c2 = multi;

console.log(c1);
console.log(c2);

function multi2(x, y) {
   return x * y;
}

console.log(multi2(2, 2));

f1.onclick = () => {
   console.log('helllo');
}

document.querySelector('.f-2').onclick = function () {
   console.log('+++++++++++++');
}

document.querySelector('.f-2').onclick = () => {
   console.log('--++++');
}

function (a, b) {

}

(a, b) => {

}

a => {

}

function (a) {
   return 56 * a;
}

(a) => 'Hello' * a;