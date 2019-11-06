var MenuScene = {
  init: function (message) {
    this.message = message;

    //this.scale.startFullscreen();

  },

  create: function () {

    //Function.apply(null, ['spriteAttributes','mainScene',  Phaser.phaserConfig.abraCreate])(Phaser.phaserConfig.assets.menuSprites, this.scene.key);
    // this.scene.start('GameScene');

    Function.apply(null, ['game', Phaser.phaserConfig.menu])(this);
    Function.apply(null, ['game', Phaser.phaserConfig.characterName])(this);
    Function.apply(null, ['game', Phaser.phaserConfig.lobby])(this);
    Function.apply(null, ['game', Phaser.phaserConfig.joinGame])(this);
    Function.apply(null, ['game', Phaser.phaserConfig.socketCalls])(game);
    
  }


};
