var bootState = {};

console.log("what?");

bootState.create = function(){
  console.log(1);
  //initialize Game System
  game.physics.startSystem(Phaser.Physics.ARCADE);
  console.log(2);
  game.state.start('load',true,false);

};

console.log("the hell?");
