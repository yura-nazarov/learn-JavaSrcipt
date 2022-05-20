// fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=70e1ed322b02acbc57d443dd91065f3e')
fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=7bc99e6308c99d50c0db49899fd417c6')
   // fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7bc99e6308c99d50c0db49899fd417c6')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
      document.querySelector('.package-name').textContent = data.name;
      document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      document.querySelector('.disclaimer').textContent = data.weather[0].description;
      document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      // https://openweathermap.org/img/wn/02d@2x.png
   })
   .catch(function () {
      // catch any errors
   });