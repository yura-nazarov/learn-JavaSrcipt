function t1() {
   let a = 0;
   return function one() {
      a = a + 1;
      return a;
   }
}

let b = t1();
let c = t1();
console.log(b);
console.log(b());
console.log(c());
console.log(b());
console.log(c());
console.log(b());
console.log(c());
console.log(one());