const a = {
   "a": 5,
   "b": 'hello',
   "z2": 'Hi',
   "y43 3": 1999,
   "villa de": 3050,
};

console.log('a', a);
console.log('a.z2', a.z2);

let k = "y43 3";

//добавление нового элемента в массив
a.yyy = 555;
console.log('a', a);

console.log('let k = "y43",  a[k]', a[k]);

//добавление нового элемента в массив
a.b = 'UUUU';

// удаление элемента по ключю
delete a.a;
console.log('after delete a.a', a);

// удаление элемента по ключю
delete a['b'];
console.log('after delete a["b"]', a);

let out = '';
for (let key in a) {
   out += key + ': ' + a[key] + '<br>';
}
document.querySelector('.out').innerHTML = out;