// document.querySelector('button').onclick = () => {
//    console.log(document.querySelector('#one').value);
//    document.querySelector('button').style.backgroundColor = document.querySelector('#one').value;
// }

// document.querySelector('#one').oninput = () => {
//    console.log(document.querySelector('#one').value);
//    document.querySelector('#span2').innerHTML = document.querySelector('#one').value;
// }

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
   event.preventDefault();
   // let text = document.querySelector('#txtarea');
   // console.log(text.value);
   // text.value = 'one';

   let form = document.querySelector('form');
   console.log(form);
   console.log(form.elements.txtarea.value);
   console.log(form.elements.three.value);
}