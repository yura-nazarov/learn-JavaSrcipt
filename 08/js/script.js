for (let i = 0; i < 6; i++) {
   console.log(i);
}
let j = 0;
while (j < 5) {
   console.log('j: ', j);
   j++;
}

let sum = 0;
let p = 0;
while (p <= 10) {
   sum += p;
   p++;
}

console.log(sum);

p = 0;
let out = document.querySelector('#out');
let outStr = '';
let flag = 3;

while (p < 5) {
   let p1 = 0;

   while (p1 < 4) {
      if (p1 < flag) {
         // outStr += '&nbsp';
         outStr += '1';

      } else {
         outStr += '*';
      }
      p1++;
   }

   flag--;
   console.log(flag)
   outStr += '<br>';
   p++;
}

out.innerHTML = outStr;