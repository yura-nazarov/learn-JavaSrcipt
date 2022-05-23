let a = 5;
a = a * 2;
try {
   document.querySelector('.test-1').innerHTML = a;
}
catch (err) {
   console.log('error');
   console.log(err); //вывод ошибки в консоль
}

finally {
   console.log('это блок обязательно выполниться!');
}
console.log(a);

t1();

function t1() {
   console.log('hello');
}