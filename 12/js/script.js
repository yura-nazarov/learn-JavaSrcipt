let a = [4, 5, 6];
let b = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];

console.log(b);

let out = '';

for (let i = b.length - 1; i >= 0; i--) {
   for (let j = b[i].length - 1; j >= 0; j--) {
      console.log(b[i][j]);
      if (b[i][j] > 4) {
         out += b[i][j] + ' ';
      }
   }
   out += '<br>';
}

document.querySelector('.out').innerHTML = out;

let d = [1, 0, 0, 0, 0, 0];

let k = 0;
document.querySelector('.out2').innerHTML = d;
document.querySelector('button').onclick = () => {
   d[k] = 0;
   d[k + 1] = 1;
   k++;
   document.querySelector('.out2').innerHTML = d;

}