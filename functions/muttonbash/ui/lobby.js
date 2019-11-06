lobby = game.add.container(0, 0);

var panel1_start = game.add.sprite(game.scale.width / 2 , 85 , 'bar 1 text').setScale(scaleRatio);
var closeButton = game.add.sprite(game.scale.width / 2 + 320, 85, 'closeButton').setInteractive().setScale(scaleRatio);

readyButton = game.add.sprite(game.scale.width / 2, 1150, 'readyButton').setInteractive().setScale(scaleRatio / 1.1);
startButton = game.add.sprite(game.scale.width / 2, 1150, 'startButton').setInteractive().setScale(scaleRatio / 1.1);
var panel1_close = game.add.sprite(game.scale.width / 2, game.scale.height - 75, 'bar 1').setScale(scaleRatio).setFlipY(true);

startButton.y = game.scale.height - (readyButton.displayHeight ) + 220;
readyButton.y = game.scale.height - (readyButton.displayHeight ) + 220;

roomText = game.add.text(125, game.scale.height - 850, room, { font: "74px Arial Black", fill: "#fff" }).setScale(scaleRatio);

if(!userList) userList = [];
userList[0] = game.add.text(game.scale.width / 2, game.scale.height - 750, userNames, { font: "74px Arial Black", fill: "#fff" }).setScale(scaleRatio);
userList[1] = game.add.text(game.scale.width / 2, game.scale.height - 650, userNames, { font: "74px Arial Black", fill: "#fff" }).setScale(scaleRatio);
userList[2] = game.add.text(game.scale.width / 2, game.scale.height - 550, userNames, { font: "74px Arial Black", fill: "#fff" }).setScale(scaleRatio);
userList[3] = game.add.text(game.scale.width / 2, game.scale.height - 450, userNames, { font: "74px Arial Black", fill: "#fff" }).setScale(scaleRatio);

game.anims.create({ key: 'buttonOffClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffReady', frames: game.anims.generateFrameNumbers('readyButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnReady', frames: game.anims.generateFrameNumbers('readyButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffStart', frames: game.anims.generateFrameNumbers('startButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnStart', frames: game.anims.generateFrameNumbers('startButton', { start: 1, end: 1 }), frameRate: 60 });

readyButton.anims.play('buttonOffReady');

startButton.anims.play('buttonOffStart');

startButton.visible = false;

readyButton.on('pointerover', function () { this.play('buttonOnReady'); });

readyButton.on('pointerout', function () { this.play('buttonOffReady'); });

startButton.on('pointerover', function () { this.play('buttonOnStart'); });

startButton.on('pointerout', function () { this.play('buttonOffStart'); });

closeButton.on('pointerover', function () { this.play('buttonOnClose'); });

closeButton.on('pointerout', function () {this.play('buttonOffClose'); });

closeButton.anims.play('buttonOffClose');

closeButton.on('pointerup', function (pointer) { menu.visible = true;
  lobby.visible = false;
});


readyButton.on('pointerup', function () {

  socket.emits.readyUp({room:room, ready:true})

});


startButton.on('pointerup', function () {

  socket.emits.startGame({room:room});

});

lobby.add([panel1_start, closeButton, readyButton, panel1_close, roomText, userList[0], userList[1], userList[2], userList[3]]);

lobby.visible = false;