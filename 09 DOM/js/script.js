const one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '40px';

console.log(one.style);

one.classList.add('two', 'three');
one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
   this.classList.toggle('three');
   one.classList.toggle('two');
}

//attributes

console.log(one.getAttribute('data'));
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

one.setAttribute('data-nam', 6);

let gas = document.querySelectorAll('.gas');

for (let i = 0; i < gas.length; i++) {
   gas[i].onclick = function () {
      let gallons = +document.querySelector('.gallons').value;
      let amount = this.getAttribute('data');
      console.log(gallons * amount);
   }
}

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('one', 'two');
a.onclick = function () {
   alert('hello');
}
console.log(a);


document.querySelector('.test').appendChild(a);
