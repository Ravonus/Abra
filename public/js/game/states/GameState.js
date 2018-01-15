
var GameState = {

  create: function () {
    var test = game.add.sprite(200, 200, 'spinner2');
    octopus = game.add.sprite(100, 100, 'seacreatures_json');
    octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    octopus.animations.play('swim');


    eval("(" + game.phaserConfig.assets.customCommands.animeFunction + ")")(40, 200, 'sprites-samuraisheet', 'slide', 50, true);


 

    game.add.tween(octopus).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 10000, true);

  },

  update: function () {


  },
  render: function () {

  }
};
