window.addEventListener('storage', function (e) {
   console.log('change');
   document.querySelector('.out').textContent = localStorage.getItem('b1');
});

const a1 = [3, 5, 6];
localStorage.setItem('data', a1);
// console.log(localStorage.getItem('data')); //получаем String 3,5,6. без скобок и пробелов, но с запятыми.

const a = [3, 5, 6];
localStorage.setItem('a', JSON.stringify(a));
// JSON.stringify(a) - это всё ещё строка, но со скобками и запятыми, ВЫГЛЯДИТ как массив
// console.log('JSON.stringify(a)', JSON.stringify(a));
// console.log('typeof JSON.stringify(a)', typeof JSON.stringify(a));
// console.log('JSON.stringify(a)[1]', JSON.stringify(a)[0]);

let b = localStorage.getItem('a');
// console.log('b', b);
// console.log('typeof b', typeof b);

//преобразует выглядящую строку как массив, в настоящий массив
b = JSON.parse(b);

// console.log(b);
// console.log(b[1]);

// console.log(typeof b);

const c = {
   'hello': 5,
   k: 2,
   4: 'hi'
};

localStorage.setItem('c', JSON.stringify(c));
let d = localStorage.getItem('c');
console.log(d);
d = JSON.parse(d);

console.log(d);

console.log(typeof d);


document.querySelector('.b-1').onclick = () => {
   localStorage.clear();
}