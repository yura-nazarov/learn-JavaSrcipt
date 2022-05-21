let a = 'hello, hi, mahai';

// приведение строки к массиву
// console.log(a.split(','));

//обратная функция

let b = [1, 2, 4];

// console.log(b.join('-'));

//не возвращает нового массива как map и filter
b.forEach(function (elem, index) {
   console.log('elem', elem * 2);
   console.log('index', index * 2);
});
console.log(b);