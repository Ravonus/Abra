var MenuScene = {
  init: function(message) {
    this.message = message;
  },

  create: function() {


    //Function.apply(null, ['spriteAttributes','mainScene',  Phaser.phaserConfig.abraCreate])(Phaser.phaserConfig.assets.menuSprites, this.scene.key);
   // this.scene.start('GameScene');
    var playButton = this.scene.scene.add.sprite(600, 200, 'greenButton').setInteractive();

    // var walk = mummy.anims.add('walk');
    
    this.scene.scene.anims.create({
      key: 'buttonOff',
      frames: this.scene.scene.anims.generateFrameNumbers('greenButton', { start: 0, end:0 }),
      frameRate: 60
  });

  this.scene.scene.anims.create({
    key: 'buttonOn',
    frames: this.scene.scene.anims.generateFrameNumbers('greenButton', { start: 1 , end: 1}),
    frameRate: 60
});

  playButton.on('pointerover', function () {

    playButton.anims.play('buttonOn');

});

playButton.on('pointerout', function () {

  playButton.anims.play('buttonOff');

});


 // playButton.anims.play('playButton', 1);


  playButton.on('pointerdown', function (pointer) {
    game.scene.keys.MenuScene.scene.stop('MenuScene');
    scene.scene.start('GameScene');

});

   //mummy.texture.play('play', 60, true);
  //  sprite.animations.add('walk');

  //  sprite.animations.play('walk', 50, true);
  }


};
