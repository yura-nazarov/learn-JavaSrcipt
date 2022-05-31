const a = [5, 2, 1, 1, 4, 5, 6, 7, 8];
const c = [
    { name: "ivan", age: 23 },
    { name: "inna", age: 114 },
    { name: "serg", age: 115 },
    { name: "antony", age: 33 },
];
let e = [];
// every

let b = e.every(item => {
    return true;
});

console.log(b);