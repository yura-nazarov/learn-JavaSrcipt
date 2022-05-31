let a = new Set();
console.log('a', a);
// добавляем элементы
a.add(1);
a.add(2);
a.add('Hello');
a.add(1); // не добавляет посторяющиеся элементы. Только уникальные.
a.add('1'); // 1 != '1' - поэтому будет добавлен элемент "1"
console.log("Set a, after added: 1, 2, 'Hello', '1'", a);

// a.clear(); // очищает Set
console.log('after clear', a);

a.delete('Hello'); //удаляет запись полностью
console.log('after delete "Hello"', a);

console.log('Невозможно получить элемент по индексу a[1]', a[1]); //no access

console.log('a.size', a.size);

console.log('a.has(4)', a.has(2, 1)); //проерка наличия элемента/элементов


//перебор Set 
for (let item of a) {
   console.log('for (let item of a)', item);
   console.log('typeof item', typeof item);
}

let arr = [123, 42, 42, 5, 123, 34, 42, 423, 42, 123, 34, '12342134', 42, 123, 'sdaf'];
console.log('arr', arr);
console.log('arr.length', arr.length);

//массив преобразуется в уникальную коллекцию элементов типа Set 
let b = new Set(arr);
console.log('Set(arr)', b);
console.log('typeof  Set(arr)', typeof b);
console.log('(typeof  Set(arr) === typeof arr)', typeof b === typeof arr);
console.log('Set(arr).size', b.size);

//преобразуем снова в массив, что бы удобно работать с ним дальше
let bArr = Array.from(b);
console.log('Array.from(b)', bArr);

