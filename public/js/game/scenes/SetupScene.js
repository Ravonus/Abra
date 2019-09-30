var SetupScene = {
  init: function () {


    // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

    //  game.scale.pageAlignVertically = true;

   // this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
  },
  preload: function () {
  //  this.load.image("loading", "loading.png");

  var plugin = {key: "Camera3DPlugin",url: "../js/plugins/camera3d.min.js",sceneKey: "cameras3d"};

  this.load.scenePlugin(plugin);



  },
  create: function () {
    // game.stage.backgroundColor = '#fff';

    this.scene.start('PreloadScene');
  }
};
