// for 
// while

// ex 1
let div = document.querySelectorAll('.one');
console.log("document.querySelectorAll('.one')", div); // NodeList

for (let i = 0; i < div.length; i = i + 1) {
   console.log(div[i]);
   div[i].style.background = 'red';
   div[i].onclick = two; // при клике выполняется ф. two

}

function two() {
   console.log('works!');
   this.style.background = 'green';
}

// div.forEach(elem => {
//    elem.addEventListener('click', () => {
//       elem.classList.toggle('color1');
//       console.log('click');
//    })
// })

// можно получить ВСЕ дивы другими способами
let b = document.getElementsByClassName('one');
let c = document.getElementsByTagName('div');
console.log("document.getElementsByClassName('one')", b); // HTMLCollections
console.log("document.getElementsByClassName('div')", c); // HTMLCollections

for (let i = 0; i < b.length; i++) {
   b[i].style.border = '3px solid black';
}

// ex 2
document.querySelector('button').onclick = () => {
   let radioCheck = document.querySelectorAll('input[type="radio"]');
   console.log(`document.querySelectorAll('input[type="radio"]')`, radioCheck);

   for (let i = 0; i < radioCheck.length; i++) {
      // (radioCheck[i].checked) ? document.querySelector('.out-1').innerHTML = radioCheck[i].value : document.querySelector('.out-1').innerHTML = 'none';
      // or
      if (radioCheck[i].checked) {
         console.log(radioCheck[i].value);
         document.querySelector('.out-1').innerHTML = radioCheck[i].value;
      }
   }
}

let out2 = '';
for (let i = 0; i < 10; i++) {
   if (i == 6) continue; // если i = 6, тогда пропускаем это шаг и идём вновь в цикл i++
   out2 += i + ' ';
   // if (i == 6) break; // прерывает цикл если i = 6
}

document.querySelector('.out-2').innerHTML = out2;
