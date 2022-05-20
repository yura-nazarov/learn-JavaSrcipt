const a = {
   "a": 5,
   "b": 'hello',
   "z2": 'Hi',
   y43: 1999,
   "villa de": 3050,
};

console.log(a);
console.log(a.z2);

let k = "y43";
a.yyy = 555;
console.log('a ', a);

console.log(a[k]);

a.b = 'UUUU';
delete a.a;
console.log('after delete', a);

let out = '';
for (let key in a) {
   out += key + ': ' + a[key] + '<br>';
}
document.querySelector('.out').innerHTML = out;