let arr = [3, 6, 9];
let assArr = {
   "b": 17,
   "e": 22
};
let set = new Set([9, 8, 7, 6, 5]);
let allP = document.getElementsByName('div2');
console.log('getElementsByTagName', allP);

let arr1 = document.querySelectorAll('.div1');
console.log('querySelectorAll', arr1);

// arr1 = 'asdf sadf 232423 234234 safsad fsadfas fsa df';
// arr1 = {
//    key1: 'elemen1',
//    key2: 'elemen2',
//    key3: 'elemen3',
// }
arr = arr1;

//1==================
console.log('#1 for (let i = 0; i < arr.length; i++)');
for (let i = 0; i < arr.length; i++) {
   console.log('i=', i, 'element=', arr[i]);
}

//2======================
console.log('#2 for (let key in arr) ');
for (let key in arr) {
   console.log('key=', key, 'element=', arr[key]);
}

//3======================
console.log('#3 for (let item of arr) ');
for (let item of arr) {
   console.log(item);
}
//4==========================
console.log('#4 arr1.forEach((e)');
arr.forEach((e) => {
   console.log(e);
})