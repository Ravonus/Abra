lobby = game.add.container(0, 0);
var panel1_start = game.add.sprite(400, 225, 'bar 1 text').setOrigin(0).setScale(0.9)
var closeButton = game.add.sprite(1590, 265, 'closeButton').setInteractive().setOrigin(0);

var readyButton = game.add.sprite(750, 1150, 'readyButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var panel1_close = game.add.sprite(400, 1425, 'bar 1').setOrigin(0).setScale(0.9).setFlipY(true);

roomText = game.add.text(50, 100, room, { font: "74px Arial Black", fill: "#fff" });

if(!userList) userList = [];
userList[0] = game.add.text(800, 550, userNames, { font: "74px Arial Black", fill: "#fff" });
userList[1] = game.add.text(800, 650, userNames, { font: "74px Arial Black", fill: "#fff" });
userList[2] = game.add.text(800, 750, userNames, { font: "74px Arial Black", fill: "#fff" });
userList[3] = game.add.text(800, 850, userNames, { font: "74px Arial Black", fill: "#fff" });

game.anims.create({ key: 'buttonOffClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffReady', frames: game.anims.generateFrameNumbers('readyButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnReady', frames: game.anims.generateFrameNumbers('readyButton', { start: 1, end: 1 }), frameRate: 60 });

readyButton.anims.play('buttonOffReady');

readyButton.on('pointerover', function () { this.play('buttonOnReady'); });

readyButton.on('pointerout', function () { this.play('buttonOffReady'); });


closeButton.on('pointerover', function () { this.play('buttonOnClose'); });

closeButton.on('pointerout', function () {this.play('buttonOffClose'); });

closeButton.anims.play('buttonOffClose');



closeButton.on('pointerup', function (pointer) { menu.visible = true;
  lobby.visible = false;
});


readyButton.on('pointerup', function () {


  socket.emits.readyUp({room:room, ready:true})


});

lobby.add([panel1_start, closeButton, readyButton, panel1_close, roomText, userList[0], userList[1], userList[2], userList[3]]);

lobby.visible = false;