// document.querySelector('button').onclick = () => {
//    console.log(document.querySelector('#one').value);
//    document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;
// }

// onchange - Значение будет меняться, когда фокус убирается с ползунка
document.querySelector('#r2').oninput = () => {
   console.log(document.querySelector('#r2').value);
   document.querySelector('.out-r').innerHTML = document.querySelector('#r2').value;
}

document.querySelector('.btn-1').onclick = () => {

   console.log(document.querySelector('#i2').value);

   let myCheckBox = document.querySelector('#i2');
   console.log(myCheckBox.checked);

   if (myCheckBox.checked) {
      console.log('checked');
   } else {
      console.log('unchecked');
   }
}

document.querySelector('.btn-2').onclick = (event) => {
   // для того, что бы форма при отправки не перезагружалась
   // нужно указать параментр событыи отправки формы event.preventDefault();
   event.preventDefault();
   let text = document.querySelector('#textarea');
   console.log(text.value);
   text.value = 'one';
}

document.querySelector('.btn-3').onclick = (event) => {
   event.preventDefault(); // останавливаем перезагрузку формы
   let form = document.querySelector('form'); // выводит всю форму в HTML формате
   console.log('form', form); // выводит всю форму в HTML формате
   console.log('form.elements', form.elements); // выводит всю форму в HTML формате
   console.log('Array.from(form)', Array.from(form)); // преобразовываем в массив
   console.log(form.elements.textarea); // получаем элемпент
   console.log(form.elements.textarea.value);
   console.log(form.elements.three); // получаем элемпент
   console.log(form.elements.three.value);
}