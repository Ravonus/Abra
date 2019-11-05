joinGame = game.add.container(0, 0);

var panel1_start = game.add.sprite(400, 225, 'bar 1 text').setOrigin(0).setScale(0.9)
var closeButton = game.add.sprite(1590, 265, 'closeButton').setInteractive().setOrigin(0);
var panel1_bar1 = game.add.sprite(680, 550, 'bar 2').setInteractive().setOrigin(0);
var panel1_bar2 = game.add.sprite(680, 850, 'bar 2').setInteractive().setOrigin(0);
enterButton = game.add.sprite(750, 1150, 'enterButton').setInteractive().setOrigin(0).setScale(0.8, 0.7);
var panel1_close = game.add.sprite(400, 1425, 'bar 1').setOrigin(0).setScale(0.9).setFlipY(true);

game.anims.create({ key: 'buttonOffClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffEnter', frames: game.anims.generateFrameNumbers('enterButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnEnter', frames: game.anims.generateFrameNumbers('enterButton', { start: 0, end: 0 }), frameRate: 60 });


closeButton.on('pointerover', function () { this.play('buttonOnClose'); });

closeButton.on('pointerout', function () {this.play('buttonOffClose'); });

enterButton.on('pointerover', function () { this.play('buttonOnEnter'); });

enterButton.on('pointerout', function () { this.play('buttonOffEnter'); });

closeButton.anims.play('buttonOffClose');

enterButton.anims.play('buttonOffEnter');

closeButton.on('pointerup', function (pointer) { menu.visible = true;
  joinGame.visible = false;
});

var roomInput = game.add.dom(1134, 645).createFromCache('room');
var nameInput = game.add.dom(1134, 945).createFromCache('nameRoom');


enterButton.on('pointerup', function () {

  var name = document.getElementById("name2Field").value;
  room = document.getElementById("roomField").value;

  console.log("NAME " + name);

  socket.emits.joinGame({room:room, name:name});

  roomText = game.add.text(50, 100, room, { font: "74px Arial Black", fill: "#fff" });

  lobby.visible = true;
  joinGame.visible = false;

});



joinGame.add([panel1_start, closeButton, panel1_bar1, panel1_bar2, enterButton, panel1_close, nameInput, roomInput]);

joinGame.visible = false;
