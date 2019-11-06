menu = game.add.container(0, 0);
console.log(game.scale.width / 2 )
//game.scale.setMode = 1;
var panel1_start = game.add.sprite(game.scale.width / 2 , 85 , 'bar 1 text').setScale(scaleRatio);
var newButton = game.add.sprite(game.scale.width / 2, game.scale.height - 750, 'newButton').setInteractive().setScale(scaleRatio / 1.1);
var joinButton = game.add.sprite(game.scale.width / 2, game.scale.height - 550, 'joinButton').setInteractive().setScale(scaleRatio / 1.1);
var settingsButton = game.add.sprite(game.scale.width / 2, game.scale.height - 250, 'settingsButton').setInteractive().setScale(scaleRatio / 1.1);
var panel1_close = game.add.sprite(game.scale.width / 2, game.scale.height - 75, 'bar 1').setScale(scaleRatio).setFlipY(true);

var heightCheck = (game.scale.height - 250) / 3;

newButton.y = game.scale.height - (heightCheck * 3);
joinButton.y = game.scale.height - (heightCheck * 2);
settingsButton.y = game.scale.height - heightCheck;

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