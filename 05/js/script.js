let div = document.querySelectorAll('.one');
console.log(div);

for (let i = 0; i < div.length; i = i + 1) {
   console.log(div[i]);
   div[i].style.background = 'red';
   div[i].onclick = two;
}

function two() {
   console.log('works!');
}

let b = document.getElementsByClassName('one');
let c = document.getElementsByTagName('div');
console.log(b);
console.log(c);

for (let i = 0; i < b.length; i++) {
   b[i].style.border = '3px solid black';
}

document.querySelector('button').onclick = () => {
   let radioCheck = document.querySelectorAll('input[type="radio"]');
   console.log(radioCheck);

   for (let i = 0; i < radioCheck.length; i++) {
      // (radioCheck[i].checked) ? document.querySelector('.out-1').innerHTML = radioCheck[i].value : document.querySelector('.out-1').innerHTML = 'none';
      if (radioCheck[i].checked) {
         console.log(radioCheck[i].value);
         // document.querySelector('.out-1').innerHTML = radioCheck[i].value;
      }
   }
}

let out1 = '';

for (let i = 0; i < 10; i++) {
   if (i == 6) continue;
   out1 += i + ' ';
   // if (i == 6) break;
}

document.querySelector('.out-1').innerHTML = out1;