game.input.on('gameobjectdown', function (pointer, gameObject) {

  if (inputs.shift.isUp && inputs.ctrl.isUp && gameObject.name === Phaser.phaserConfig.socketBalls.name) {

    socket.emits.deleteDot(gameObject.sprite3d);

  } else if(inputs.shift.isDown && inputs.ctrl.isUp  && gameObject.name === Phaser.phaserConfig.socketBalls.name) {

    console.log("RAN")
    socket.emits.grow({obj:gameObject.sprite3d, action:'grow'});

  } else if(inputs.ctrl.isDown && gameObject.name === Phaser.phaserConfig.socketBalls.name) {

    socket.emits.grow({obj:gameObject.sprite3d, action:'shrink'});

  };

});

socket.setSocket('deleteDot', function (gameObject) {

  var group = gameObject.name.group;
  var index = gameObject.name.index;
  sprites[group][index].size.x = 0;
  sprites[group][index].size.y = 0;
});

socket.setSocket('grow', function (data) {

  var group = data.obj.name.group;
  var index = data.obj.name.index;
  sprites[group][index].size.x = data.action === 'grow' ? sprites[group][index].size.x + 25 : sprites[group][index].size.x + -25;
  sprites[group][index].size.y = data.action === 'grow' ? sprites[group][index].size.y + 25 : sprites[group][index].size.y -25;
});

Phaser.phaserConfig.socketBalls = { name: "blue_ball" };

