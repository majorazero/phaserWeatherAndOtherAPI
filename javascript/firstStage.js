var firstStage = {};

firstStage.preload = function(){
  game.load.atlasJSONHash("ground","assets/worldSheet.png","assets/worldSheet.json","platform.png");
  game.load.atlasJSONHash("sky","assets/worldSheet.png","assets/worldSheet.json","sky.png");
  game.load.atlasJSONHash("player","assets/worldSheet.png","assets/worldSheet.json","SillyDude_0000.png");
};

firstStage.create = function(){
  //creates sky
  firstStage.sky = game.add.sprite(0,0,"sky","sky.png");

  //creates player
  firstStage.player = game.add.sprite(0,0,"player","SillyDude_0000.png");
  game.physics.arcade.enable(firstStage.player);
  firstStage.player.body.gravity.y = 500;
  firstStage.player.body.collideWorldBounds = true;
  firstStage.player.walkSpeed = 400;
  firstStage.player.jumpSpeed = -300;
  firstStage.player.animations.add("lIdle",Phaser.Animation.generateFrameNames("SillyDude_000",0,2,".png"),7,true);
  firstStage.player.animations.add("rIdle",Phaser.Animation.generateFrameNames("SillyDude_000",7,9,".png"),7,true);
  firstStage.player.animations.add("rWalk",Phaser.Animation.generateFrameNames("SillyDude_00",10,13,".png"),10,true);
  firstStage.player.animations.add("lWalk",Phaser.Animation.generateFrameNames("SillyDude_000",3,6,".png"),10,true);
  //creates ground
  firstStage.platforms = game.add.physicsGroup();
  firstStage.platforms.create(0,game.height*0.9,"ground");
  //stretches to across the screen
  firstStage.platforms.create(400,game.height*0.9,"ground");
  firstStage.platforms.setAll("body.immovable",true);
};

firstStage.update = function(){
  firstStage.player.body.velocity.x = 0;


  var cursor = game.input.keyboard.createCursorKeys();
  game.physics.arcade.collide(firstStage.player,firstStage.platforms);
  firstStage.idle(cursor);
  firstStage.movement(cursor);

};

firstStage.idle = function(cursor){
  // if(cursor.right.onUp){
  //   firstStage.player.animations.play("rIdle");
  // }
  // else if (cursor.left.onUp){
  //   firstStage.player.animations.play("lIdle");
  // }
};

firstStage.movement = function(cursor){
  firstStage.player.animations.play("rIdle");
  if(cursor.left.isDown){
    firstStage.player.body.velocity.x = -firstStage.player.walkSpeed;
    firstStage.player.animations.play("lWalk");
  }
  else if (cursor.right.isDown){
    firstStage.player.body.velocity.x = firstStage.player.walkSpeed;
    firstStage.player.animations.play("rWalk");
  }

  if(cursor.up.isDown){
    firstStage.player.body.velocity.y = firstStage.player.jumpSpeed;
  }
};
