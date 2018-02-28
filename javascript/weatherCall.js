let request = require("request");

//OpenWeatherMap API
let apiKey = "c033c7d88ddd656c159ed45f9a39923e";
let city = "London";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

function callWeather(){
  request(url, function(err,res,body){
    if(err){
      console.log('error:',err);
    }
    else{
      let weather = JSON.parse(body);
      let message = `${weather.name}'s Temperature:${weather.main.temp} Degrees`;
      console.log(message);
    }
  });
}
