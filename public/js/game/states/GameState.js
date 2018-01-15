
var GameState = {

  create: function () {
    var test = game.add.sprite(200, 200, 'spinner2');
    octopus = game.add.sprite(100, 100, 'seacreatures_json');
    octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    octopus.animations.play('swim');

    game.add.tween(octopus).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 10000, true);
  },

  update: function () {


  },
  render: function () {

  }
};
