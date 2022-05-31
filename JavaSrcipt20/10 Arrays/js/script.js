// let a = 'Ivan';
// let b = '37';
// let z7 = 'Oven';
// let c = ['Ivan', 37, 'Oven'];
// let d = [];

// console.log(c[5]);
// console.log(c);
// console.log(c.length);

// let zodiak = ['kozerog', 1, 1, 19];
// console.log(zodiak);
// let man = ['Ivan', 'male', 176, 93, 'Ivanov'];
// console.log(man);
// console.log(man.length);
// console.log(man[4]);
// man[0] = 'Sergey';
// console.log(man);

let a = [1, 2, 3, 4];
console.log('a', a);

let t = a[0];
a[0] = a[a.length - 1];
console.log(a);
a[a.length - 1] = t; // не сработает
a[a.length - 1] = 't';
console.log(a);

console.log(a[888]); // undefined

let out = '';

for (let i = 0; i < a.length; i++) {
   document.querySelector('.out-1').innerHTML += a[i] + ' ';
}

for (let i = 0; i < a.length; i++) {
   if (a[i] % 2 == 0) {
      out += a[i] + '_ _';
   }
}

document.querySelector('.out-1').innerHTML += out;

let b = [3, 4, 22, 34, 43, 42, 13, 1, 7, -8, 0];

let max = b[0];

for (let i = 0; i < b.length; i++) {
   if (b[i] > max) {
      max = b[i];
   }
}

console.log(max);

let sum = 0;

for (let i = 0; i < b.length; i++) {
   sum += b[i];
}

console.log(sum);