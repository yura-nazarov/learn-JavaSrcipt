
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1(event) {
   document.querySelector('.div-1').textContent = 'touch';
   console.log(event);
}

document.querySelector('.div-1').addEventListener("touchstart", t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let count1 = 0;
function t2() {
   document.querySelector('.div-2').textContent = ++count1;
}

document.querySelector('.div-2').addEventListener("touchstart", t2);

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
   console.log(event.srcElement);
   document.querySelector('.out-3').textContent = '2';
   if (event.srcElement.className.includes('div-3_1')) {
      document.querySelector('.out-3').textContent = '1';
   }
}

document.querySelector('.div-3_1').addEventListener("touchstart", t3);
document.querySelector('.div-3_2').addEventListener("touchstart", t3);

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4(event) {
   // console.log(event);
   document.querySelector('.out-4').textContent = event.target.innerHTML;

}
document.querySelector('.div-4').addEventListener("touchstart", t4);

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */


function t5() {
   document.querySelector('.out-4').textContent = '';
}
document.querySelector('.b-5').onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
   document.querySelector('.out-6').textContent = 'touchend';
}
document.querySelector('.div-4').addEventListener("touchend", t6);

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
   document.querySelector('.div-7').style.background = 'red';
}
document.querySelector('.div-7').addEventListener("touchend", t7);

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8() {
   document.querySelector('.div-8').style.background = `rgb(${(Math.floor(Math.random() * 256))},${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}
document.querySelector('.div-8').addEventListener("touchend", t8);

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
   console.log(event);
   document.querySelector('.out-9').textContent = event.touches.length
}
document.querySelector('.div-9').addEventListener("touchstart", t9);

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let x = 75;
function t10() {
   document.querySelector('.div-10').style.width = x + 'px';
   x++;
}
document.querySelector('.div-10').addEventListener("touchmove", t10);

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
   document.querySelector('.out-11').innerHTML = 'x=' + event.changedTouches[0].radiusX + 'y=' + event.changedTouches[0].radiusY;
   console.log(event);
   console.log(event.changedTouches.radiusX);
}
document.querySelector('.div-11').addEventListener("touchstart", t11);

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const NEXT = document.querySelector('.next');
NEXT.onclick = nextFunction;

const PREV = document.querySelector('.prev');
PREV.onclick = prevFunction;

const RESET = document.querySelector('.reset');
RESET.onclick = resetFunction;

const IMAGES = document.querySelectorAll('.img-12-min');

const IMAGEMAX = document.querySelector('.div-12-max > img');

let currentActive = 0;
let currentImageSrc = '';

function nextFunction() {
   IMAGES[currentActive].classList.remove('active-img');
   currentActive++;
   if (currentActive > IMAGES.length - 1) {
      currentActive = 0
   }
   IMAGES[currentActive].classList.add('active-img');

   currentImageMax();
}

function prevFunction() {
   IMAGES[currentActive].classList.remove('active-img');
   currentActive--;
   if (currentActive < 0) {
      currentActive = 5
   }
   IMAGES[currentActive].classList.add('active-img');

   currentImageMax();
}

function resetFunction() {
   IMAGES[currentActive].classList.remove('active-img');
   currentActive = 0;
   IMAGES[currentActive].classList.add('active-img');

   currentImageMax();
}

function currentImageMax() {
   currentImageSrc = IMAGES[currentActive].getAttribute('src');
   IMAGEMAX.setAttribute('src', currentImageSrc);
}

//for touch activity
IMAGES.forEach((elem, index) => {
   elem.addEventListener("touchend", function () {
      IMAGES[currentActive].classList.remove('active-img');
      this.classList.add('active-img');
      currentActive = index;

      currentImageMax();
   });
})