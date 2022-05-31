const a = [3, 4, 5, 6, 8, 0, 143, 45];


let b = a.map((item, index) => {
    //console.log(index);
    return 1;
});

// console.log(b);

// filter

let c = a.filter((item, index) => {
    if (item % 2 === 0) {
        return index;// true
    }
});

console.log(c);
