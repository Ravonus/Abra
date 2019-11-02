menu = game.add.container(0, 0);
var panel1_start = game.add.sprite(400, 225, 'bar 1 text').setOrigin(0).setScale(0.9)
var newButton = game.add.sprite(750, 460, 'newButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var joinButton = game.add.sprite(750, 800, 'joinButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var settingsButton = game.add.sprite(750, 1150, 'settingsButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var panel1_close = game.add.sprite(400, 1425, 'bar 1').setOrigin(0).setScale(0.9).setFlipY(true);

menu.add([panel1_start, newButton, joinButton, settingsButton, panel1_close]);

game.anims.create({ key: 'buttonOff', frames: game.anims.generateFrameNumbers('greenButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffNew', frames: game.anims.generateFrameNumbers('newButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffJoin', frames: game.anims.generateFrameNumbers('joinButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffSettings', frames: game.anims.generateFrameNumbers('settingsButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOn', frames: game.anims.generateFrameNumbers('greenButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnNew', frames: game.anims.generateFrameNumbers('newButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnJoin', frames: game.anims.generateFrameNumbers('joinButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnSettings', frames: game.anims.generateFrameNumbers('settingsButton', { start: 0, end: 0 }), frameRate: 60 });

newButton.anims.play('buttonOffNew');
joinButton.anims.play('buttonOffJoin');
settingsButton.anims.play('buttonOffSettings');

newButton.on('pointerover', function () { newButton.anims.play('buttonOnNew'); });

joinButton.on('pointerover', function () {

  joinButton.anims.play('buttonOnJoin');

});

settingsButton.on('pointerover', function () {

  settingsButton.anims.play('buttonOnSettings');

});

newButton.on('pointerout', function () {

  newButton.anims.play('buttonOffNew');

});

joinButton.on('pointerout', function () {

  joinButton.anims.play('buttonOffJoin');

});

settingsButton.on('pointerout', function () {

  settingsButton.anims.play('buttonOffSettings');

});

newButton.on('pointerup', function (pointer) {

  menu.visible = false;
  characterName.visible = true;
});

joinButton.on('pointerup', function (pointer) {

  menu.visible = false;
  joinGame.visible = true;
});