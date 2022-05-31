// sort
let f = [3, 22, 4, 1, 5];
f = [
    {name : 'U', age : 13},
    {name : 'K', age : 23},
    {name : 'L', age : 32},
    {name : 'R', age : 11},
    {name : 'X', age : 43},
];
f.sort((a,b) =>{
    return a.age-b.age;
});
console.log(f);