var MenuScene = {
  init: function(message) {
    this.message = message;
  },

  create: function() {


    //Function.apply(null, ['spriteAttributes','mainScene',  Phaser.phaserConfig.abraCreate])(Phaser.phaserConfig.assets.menuSprites, this.scene.key);
   // this.scene.start('GameScene');
    var playButton = this.scene.scene.add.sprite(300, 200, 'play').setInteractive();

    // var walk = mummy.anims.add('walk');
    
  //   this.scene.scene.anims.create({
  //     key: 'playButton',
  //     frames: this.scene.scene.anims.generateFrameNumbers('play', { start: 0, end: 2 }),
  //     frameRate: 60,
  //     repeat: -1
  // });

  //playButton.anims.play('playButton', true);


  playButton.on('pointerdown', function (pointer) {
    game.scene.keys.MenuScene.scene.stop('MenuScene');
    scene.scene.start('GameScene');

});

   //mummy.texture.play('play', 60, true);
  //  sprite.animations.add('walk');

  //  sprite.animations.play('walk', 50, true);
  }


};
