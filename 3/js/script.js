let a = 6;
let b = 'hello';

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');

let div = document.querySelector('.out');

let e3 = 3, f3 = 234;

document.querySelector('button').onclick = function () {
   console.log('working');
   // console.log(inputIn.value);

   let b = +inputIn.value;
   console.log(b + 2);
   div.innerHTML = e3 * f3;
   inputIn.value = '';
}

let btn = document.querySelector('.btn');
let h33 = document.querySelector('.copy');
let input2 = document.querySelector('.input2');

btn.onclick = function () {
   h33.innerHTML = +input2.value * 10;
   input2.value = '';

}

let btn2 = document.querySelector('.btn2');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');

let copy2 = document.querySelector('.copy2');

btn2.onclick = function () {
   // copy2.innerHTML = `hello ${fname.value} ${lname.value}`;
   // copy2.innerHTML = +fname.value + +lname.value;
   copy2.innerHTML = parseInt(fname.value) + 100;
   fname.value = '';
}

lname.value = 'Hello';
lname.style.border = '2px solid red';