var mainScene;
var updateCamControls;
var cursors;
var xAxis;
var yAxis;
var zAxis;
var isPosition = true;
var testTouch;
var inputs;
var game;

var socketBallsRotate;

var GameScene = {

  preload: function () {

    Function.apply(null, ['game', Phaser.phaserConfig.preloadGameScene])(this);

  },

  create: function () {

    this.add.sprite(100, 100, 'red_aura').setInteractive();

    updateCamControls = Function.apply(null, [Phaser.phaserConfig.boxUpdate]);

    Function.apply(null, ['spriteAttributes', 'mainScene', Phaser.phaserConfig.abraCreate])(Phaser.phaserConfig.assets['3dGrid'], this.scene.key);

    updateCamControls();

  },

  update: function () {

    socketBallsRotate();

  }

};