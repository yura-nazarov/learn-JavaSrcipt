// ************** push ***************
let a = [99, 88];
// console.log(a);
// a[0] = 66;
// console.log(a);
// a[a.length] = 55;
// console.log(a);
// a[a.length] = 56;
// console.log(a);
// a.push(44, 33, 22);
// console.log('a.length', a.length);
// console.log('a.push(111)', a.push(111));

// function hello(b) {
//    return a.push(b); // !!!!будет возвращена длина нового массива!!!!
// }
// console.log('hello()', hello());

// console.log(a);

// *************** pop **************
// a.pop();
// console.log(a);
// console.log(a.pop());
// console.log(a);
// const b = [3];
// console.log(b);
// console.log(b.pop());
// console.log(b);
// console.log(b.pop());
// console.log(b);
// console.log(b.pop());
// console.log(b);


let car = [];
document.querySelector('.add').onclick = () => {
   let id = +document.querySelector('#goods').value;
   if (!car.includes(id)) {
      car.push(id);
   }
   console.log(car);
}

document.querySelector('.pop').onclick = () => {
   let goods = car.pop();
   console.log('Товар id ' + goods + ' был удален');
   console.log(car);
}