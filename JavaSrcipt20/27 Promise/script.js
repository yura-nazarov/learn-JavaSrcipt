

let a = new Promise((resolve, reject) => {
   fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207&action=1')
      .then(data => {
         resolve(data.text());
      })
});


let b = new Promise((resolve, reject) => {
   fetch('http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207&action=2&name=alex')
      .then(data => {
         resolve(data.text());
      })
});

a.then(data => {
   console.log('a', data);
})

b.then(data => {
   console.log('b', data);
})

Promise.all([a, b]).then(data => {
   console.log('promise all', data);
   console.log('promise all[0]', data[0]);
   console.log('promise all[1]', data[1]);
})

// Promise.all([a, b]).then(value => {
//    console.log(value);
//    console.log(value[0]);
//    console.log(value[1]);
// });

