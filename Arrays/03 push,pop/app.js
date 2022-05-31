// const browser = [
//     ['IE', 2],
//     ['Edge', 1],
//     ['Firefox', 2],
//     ['Chrome', 1],
//     ['Safari', 1],
//     ['Opera', 1],
//     ['Opera Mini', 0],
//     ['Opera Mobile', 0],
//     ['Chrome for Android', 1],
//     ['Firefox for Android', 2],
//     ['UC Browser', 2],
// ]

// // push
// let a = [99, 88];
// console.log(a);
// a[0] = 66;
// console.log(a);
// a[a.length] = 55;
// console.log(a);
// a[a.length] = 56;
// console.log(a);
// a.push(44, 33, 22);
// console.log(a);
// console.log(a.push(111));

// function hello(b) {
//     return a.push(b);
// }
// console.log(a);
// // pop
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

let car = [];
document.querySelector('.add').onclick = () => {
    let id = +document.querySelector('#goods').value;
    if (!car.includes(id)) {
        car.push(id);
    }
    console.log(car);
}
document.querySelector('.pop').onclick = () => {
    let id = +document.querySelector('#goods').value;
    let goods = car.pop();
    console.log('Товар id ' + goods + ' был удален');
    console.log(car);
}