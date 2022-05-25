// function myAlert(a, c, d) {
//    let b = `<p class="${c}">${a}</p>`;
//    document.querySelector(d).innerHTML = b;
// }

// myAlert('hi', 'red', '.test');
// myAlert('hi', 'orange', '.test2');

//создаём новый класс, затем создаем файл с именем Alert.js и туда перносим весь код
// подключаем js файл в HTML
/*
class Alert {
   constructor(a, c, d) {
      this.message = a;
      this.cssClass = c;
      this.out = d;
   }
   showAlert() {
      document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
   }
   newAlert() {
      alert(this.message);
   }
}
*/

//наследуем класс Alert и добавляем в класс Alert2 новый функционал
/*
class Alert2 extends Alert {
   constructor(a, c, d, icon) {
      super(a, c, d);
      this.icon = icon;  // new proper
   }
   showIconAlert() {
      document.querySelector(this.out).innerHTML = `<p class="${this.cssClass}"><i class="material-icons">${this.icon}</i>${this.message}</p>`;
   }

}
*/

let m = new Alert('Message', 'red', '.test');
console.log(m);
m.newAlert();
m.showAlert();


let m2 = new Alert2('Message2', 'orange', '.test2', 'account_balance');
console.log(m2);
m2.newAlert();
m2.showIconAlert();