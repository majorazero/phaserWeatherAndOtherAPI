var loadState = {};

loadState.preload = function(){
  console.log(3);
  var loadingLab = game.add.text(80,150, "I WORK!...",{font:'30px Courier', fill: '#fff'});
};

loadState.create = function(){
  game.stage.setBackgroundColor('#000');
};
