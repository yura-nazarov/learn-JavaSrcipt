// indexOf
const a = [3, 9, 8, 7, 5, 3, 5, 2];
const b = ['Hi', 'hello'];
// -1
console.table(a);
console.log(a.indexOf(5,5));

function indexOfEmul(ar, item, from = 0) {
    for (let i = from; i < ar.length; i++) {
        if (ar[i] === item) {
            return i;
        }
    }
    return -1;
}

console.log(indexOfEmul(a, 5,5));