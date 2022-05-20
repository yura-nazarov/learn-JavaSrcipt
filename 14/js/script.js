fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=7bc99e6308c99d50c0db49899fd417c6')
   .then(function (resp) { return resp.json() })
   .then(function (data) {
      console.log(data);
   })
   .catch(function () {
      //catch any errors
   })