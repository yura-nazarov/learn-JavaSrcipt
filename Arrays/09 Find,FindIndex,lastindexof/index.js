const a = [
    { name: 'ivan', age: 54 },
    { name: 'ivar', age: 46 },
    { name: 'den', age: 34 },
    { name: 'severn', age: 44 },
    { name: 'oleg', age: 14 },
];
const c = [22, 33, 44, 55, 33,66, 77];
const d = 'hello';
// find

let b = c.findIndex(item => {
    if (item > 480) {
        return true;
    }
});

let f = c.lastIndexOf(33);

console.log(f);