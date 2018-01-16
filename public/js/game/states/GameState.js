
var GameState = {

  create: function () {
    sprites = new Object();
    var y = 0;
    console.log(game.phaserConfig.assets.loopCreate);
    if(game.phaserConfig.assets.loopCreate){
      game.phaserConfig.assets.loopCreate.spinner2.x.forEach( (x) => {
        name = game.phaserConfig.assets.loopCreate.spinner2.name;
     
        var yPos = game.phaserConfig.assets.loopCreate.spinner2.y[y];
        console.log(yPos);
     
        
        sprites[`${name}${y}`] = game.add.sprite(x, yPos, 'spinner2');
        console.log(sprites);
        y = y+1;
      })


    }
    
    octopus = game.add.sprite(100, 100, 'seacreatures_json');
    octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    octopus.animations.play('swim');

    //game.add.tween(octopus).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 10000, true);
  },

  update: function () {


  },
  render: function () {

  }
};
