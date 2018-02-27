var firstStage = {};

firstStage.preload = function(){
  game.load.atlasJSONHash("ground","assets/worldSheet.png","assets/worldSheet.json","platform.png");
  game.load.atlasJSONHash("sky","assets/worldSheet.png","assets/worldSheet.json","sky.png");
};

firstStage.create = function(){
  //creates sky
  firstStage.sky = game.add.sprite(0,0,"sky","sky.png");

  //creates player
  firstStage.player = game.add.sprite(0,0)

  //creates ground
  firstStage.platforms = game.add.physicsGroup();
  firstStage.platforms.create(0,game.height*0.9,"ground");
  //stretches to across the screen
  firstStage.platforms.scale.setTo(2,1);
  firstStage.platforms.setAll("body.immovable",true);
};

firstStage.update = function(){

};
