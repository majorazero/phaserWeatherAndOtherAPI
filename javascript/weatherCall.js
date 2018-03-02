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

const wInfo = (req, res) => {
    console.log(req.ipAddr)  //eans computer
    if (eansComputer){
       res.send(wInfo.json)
    }
}
localhost:7777
https://127.0.0.1:7777
www.andy.com/whoami  <- request

respsonse -> "{name: 'Andy!!!'}"


io.req("danAddr.com");


//phase socketio
io.emit("weatherInfoZ", {}, function(res){

});

//nodejs socketio
io.on("weatherInfo", function(data){
    io.emit(data)
})
