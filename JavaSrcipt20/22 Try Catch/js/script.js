let a = 5;
a = a * 2;
try {
   // располагаем тут критическую операцию
   // даже после ошбки, программа продолжает работать
   document.querySelector('.test-1').innerHTML = a;
}
catch (err) { // если передаём параметр то его можно вывести в консоль
   console.log('error');
   console.log(err); //вывод ошибки в консоль
}
// не обзятельный блок. Этот блок гарантированно выполниться, даже при ошибке
finally {
   console.log('это блок обязательно выполниться!');
}
console.log(a);

t1();

function t1() {
   console.log('hello');
}