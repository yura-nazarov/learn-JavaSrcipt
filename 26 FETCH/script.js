/* Обычный метод GET через XMLHttp запрос
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
   if (this.readyState == 4 && this.status == 200) {
      callbackFunction2(this.responseText);
   }
};
xhttp2.open("POST", "http://getpost.itgid.info/index2.php", true);
xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp2.send('auth=7859d9d42a8834141d529577207&action=1');


function callbackFunction2(data) {
   console.log(data);
}
*/

// !!!!!!!!!!! метод fetch GET !!!!!!!!!!!!!!!!!!!!!

//функция then выполниться после того как запрос будет обработан
fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207&action=1')
   .then(data => {
      console.log(data); // получаем Responce в виде большого ассоциативного массива
      // console.log(data.text()); // позволяет получить Promise простую текстовую информацию
      // !!!!!!!!!!!data.text() - нельзя выводить два раза data.text() !!!!!!!!!!!!!!!!
      // data.text().then(data2 => {
      //    console.log(data2);
      // })

      // можно проверить тут условия, прошла ли команда data.status

      return data.text(); // return позволяет передать указанные данные в следующий then
   })
   .then(data => {
      console.log(data);
   })

//предыдущую запись можно можно сократить из-за того, что там только один параметр в стрелочной функции
// fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207&action=1')
//    .then((response) => response.text())
//    .then((data) => {
//       console.log(data);
//    });


fetch("http://getpost.itgid.info/index2.php", {
   method: 'POST', // *GET, POST, PUT, DELETE, etc.
   headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
   },
   body: 'auth=7859d9d42a8834141d529577207&action=2&name=Alex', // тип данных в body должен соответвовать значению заголовка "Content-Type"
})
   .then(response => response.text())
   .then(response => {
      console.log(response);
   })