characterName = game.add.container(0, 0);
var panel1_start = game.add.sprite(400, 225, 'bar 1 text').setOrigin(0).setScale(0.9)
var closeButton = game.add.sprite(1590, 265, 'closeButton').setInteractive().setOrigin(0);
var panel1_bar1 = game.add.sprite(680, 550, 'bar 2').setInteractive().setOrigin(0);
var panel1_bar2 = game.add.sprite(680, 850, 'bar 2').setInteractive().setOrigin(0);
var enterButton = game.add.sprite(750, 1150, 'enterButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var panel1_close = game.add.sprite(400, 1425, 'bar 1').setOrigin(0).setScale(0.9).setFlipY(true);




game.anims.create({ key: 'buttonOffClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffEnter', frames: game.anims.generateFrameNumbers('enterButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnEnter', frames: game.anims.generateFrameNumbers('enterButton', { start: 0, end: 0 }), frameRate: 60 });

closeButton.anims.play('buttonOffClose');

enterButton.anims.play('buttonOffEnter');


closeButton.on('pointerover', function () { closeButton.anims.play('buttonOnClose'); });

closeButton.on('pointerout', function () {

  closeButton.anims.play('buttonOffClose');

});

enterButton.on('pointerover', function () { enterButton.anims.play('buttonOnEnter'); });

enterButton.on('pointerout', function () {

  enterButton.anims.play('buttonOffEnter');

});


characterName.visible = false;

closeButton.on('pointerup', function (pointer) { menu.visible = true;
  characterName.visible = false;
});

var nameInput = game.add.dom(1134, 645).createFromCache('name');
var emailInput = game.add.dom(1134, 945).createFromCache('email');


nameInput.addListener('click');

nameInput.on('click', function (event) { console.log("CLICK");});

emailInput.addListener('click');

emailInput.on('click', function (event) { console.log("CLICK");});



characterName.add([panel1_start, panel1_bar1, enterButton, panel1_bar2, emailInput, closeButton, nameInput, panel1_close]);

