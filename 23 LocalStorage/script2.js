let count = 0;
document.querySelector('.b-2').onclick = () => {
   count++;
   localStorage.setItem('b1', count);
}