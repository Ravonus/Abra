var menu = this.add.container(0, 0);
var panel1_start = this.scene.scene.add.sprite(400, 225, 'bar 1 text').setOrigin(0).setScale(0.9)
var newButton = this.scene.scene.add.sprite(750, 460, 'newButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var joinButton = this.scene.scene.add.sprite(750, 800, 'joinButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var settingsButton = this.scene.scene.add.sprite(750, 1150, 'settingsButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var panel1_close = this.scene.scene.add.sprite(400, 1425, 'bar 1').setOrigin(0).setScale(0.9).setFlipY(true);


menu.add([ panel1_start, newButton, joinButton, settingsButton, panel1_close ]);


this.scene.scene.anims.create({
  key: 'buttonOff',
  frames: this.scene.scene.anims.generateFrameNumbers('greenButton', { start: 0, end: 0 }),
  frameRate: 60
});

this.scene.scene.anims.create({
  key: 'buttonOffNew',
  frames: this.scene.scene.anims.generateFrameNumbers('newButton', { start: 1, end: 1 }),
  frameRate: 60
});

this.scene.scene.anims.create({
  key: 'buttonOffJoin',
  frames: this.scene.scene.anims.generateFrameNumbers('joinButton', { start: 1, end: 1 }),
  frameRate: 60
});

this.scene.scene.anims.create({
  key: 'buttonOffSettings',
  frames: this.scene.scene.anims.generateFrameNumbers('settingsButton', { start: 1, end: 1 }),
  frameRate: 60
});

this.scene.scene.anims.create({
  key: 'buttonOn',
  frames: this.scene.scene.anims.generateFrameNumbers('greenButton', { start: 1, end: 1 }),
  frameRate: 60
});

this.scene.scene.anims.create({
  key: 'buttonOnNew',
  frames: this.scene.scene.anims.generateFrameNumbers('newButton', { start: 0, end: 0 }),
  frameRate: 60
});

this.scene.scene.anims.create({
  key: 'buttonOnJoin',
  frames: this.scene.scene.anims.generateFrameNumbers('joinButton', { start: 0, end: 0 }),
  frameRate: 60
});

this.scene.scene.anims.create({
  key: 'buttonOnSettings',
  frames: this.scene.scene.anims.generateFrameNumbers('settingsButton', { start: 0, end: 0 }),
  frameRate: 60
});

newButton.anims.play('buttonOffNew');
joinButton.anims.play('buttonOffJoin');
settingsButton.anims.play('buttonOffSettings');

// playButton.on('pointerover', function () {

//   playButton.anims.play('buttonOn');

// });

newButton.on('pointerover', function () {

  newButton.anims.play('buttonOnNew');

});

joinButton.on('pointerover', function () {

  joinButton.anims.play('buttonOnJoin');

});

settingsButton.on('pointerover', function () {

  settingsButton.anims.play('buttonOnSettings');

});

// playButton.on('pointerout', function () {

//   playButton.anims.play('buttonOff');

// });

newButton.on('pointerout', function () {

  newButton.anims.play('buttonOffNew');

});

joinButton.on('pointerout', function () {

  joinButton.anims.play('buttonOffJoin');

});

settingsButton.on('pointerout', function () {

  settingsButton.anims.play('buttonOffSettings');

});



// playButton.anims.play('playButton', 1);


  newButton.on('pointerup', function (pointer) {
//    game.scene.keys.MenuScene.scene.stop('MenuScene');
//    scene.scene.start('GameScene');

menu.visible = false;

});

//mummy.texture.play('play', 60, true);
//  sprite.animations.add('walk');

//  sprite.animations.play('walk', 50, true);