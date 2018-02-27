var bootState = {};


bootState.create = function(){
  //initialize Game System
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.state.start('load',true,false);

};
