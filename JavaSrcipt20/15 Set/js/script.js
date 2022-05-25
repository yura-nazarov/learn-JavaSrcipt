let a = new Set();
a.add(1);
a.add(2);
a.add('Hello');
a.add(1);
a.add('1');
// a.clear();
//a.delete('Hello'); //удаляет запись полностью
console.log(a);
console.log(a[0]); //no access
console.log(a.size);
console.log(a.has(4)); //проерка наличия элементов

for (let item of a) {
   console.log(item);
}

let arr = [123, 42, 42, 5, 123, 34, 42, 423, 42, 123, 34, '12342134', 42, 123, 'sdaf'];
let b = new Set(arr);
console.log(b);
console.log(b.size);

let bArr = Array.from(b);
console.log(bArr);