var BootState = {
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    this.scale.pageAlignVertically = true;

  },
  preload: function() {

  },
  create: function() {
    this.game.stage.backgroundColor = '#fff';

    this.state.start('PreloadState');
  }
};
