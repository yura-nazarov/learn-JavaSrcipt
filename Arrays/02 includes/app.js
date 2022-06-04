const transactions = ['571a319c8c', 'bd32bd6c05', '1c28a0c411', '9b425707b3', '979d1c10a1', '94641b2966'];
const test = [44, 55, 66, 77, 88, 2, 3, 4];

// возвращает 
// true
// false
const str = 'abcdefgh';

string = str;
if (string.includes(14)) {
   console.log('yes');
}
else {
   console.log('no');
}

// ex 2
const users = [
   { "name": "Ivanov", "age": 44 },
   { "name": "Petrov", "age": 14 },
   { "name": "Vagner", "age": '14' },
   { "name": "Alexeev", "age": 14 },
];

// для поиска в таком массиве, нужно перевести цифры в строку
console.log(typeof users[1].age.toString());
string = users[2].age.toString();
if (string.includes(14)) {
   console.log('yes');
}
else {
   console.log('no');
}

let newUsers = users.filter(item => {
   return item.name.includes('ov');
});

console.log(newUsers);