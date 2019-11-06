characterName = game.add.container(0, 0);
var panel1_start = game.add.sprite(game.scale.width / 2 , 85 , 'bar 1 text').setScale(scaleRatio);
var closeButton = game.add.sprite(game.scale.width / 2 + 320, 85, 'closeButton').setInteractive().setScale(scaleRatio);
var panel1_bar1 = game.add.sprite(game.scale.width / 2, game.scale.height - 700, 'bar 2').setInteractive().setScale(scaleRatio);
var panel1_bar2 = game.add.sprite(game.scale.width / 2, game.scale.height - 500, 'bar 2').setInteractive().setScale(scaleRatio);
enterButton = game.add.sprite(game.scale.width / 2, 1150, 'enterButton').setInteractive().setScale(scaleRatio / 1.1);
var panel1_close = game.add.sprite(game.scale.width / 2, game.scale.height - 75, 'bar 1').setScale(scaleRatio).setFlipY(true);

enterButton.y = game.scale.height - (enterButton.displayHeight) + 220;

game.anims.create({ key: 'buttonOffClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnClose', frames: game.anims.generateFrameNumbers('closeButton', { start: 0, end: 0 }), frameRate: 60 });

game.anims.create({ key: 'buttonOffEnter', frames: game.anims.generateFrameNumbers('enterButton', { start: 1, end: 1 }), frameRate: 60 });

game.anims.create({ key: 'buttonOnEnter', frames: game.anims.generateFrameNumbers('enterButton', { start: 0, end: 0 }), frameRate: 60 });

closeButton.anims.play('buttonOffClose');

enterButton.anims.play('buttonOffEnter');

closeButton.on('pointerover', function () { this.play('buttonOnClose'); });

closeButton.on('pointerout', function () {this.play('buttonOffClose'); });

enterButton.on('pointerover', function () { this.play('buttonOnEnter'); });

enterButton.on('pointerout', function () { this.play('buttonOffEnter'); });

enterButton.on('pointerup', function () {

  var name = document.getElementById("nameField").value;
  var email = document.getElementById("emailField").value;

  room = Math.random().toString(12).substring(2, 5) + Math.random().toString(36).substring(2, 5);
  socket.emits.joinGame({room:room, name:name, email:email});

  roomText.setText(room);

  lobby.visible = true;
  characterName.visible = false;

});

characterName.visible = false;

closeButton.on('pointerup', function (pointer) { menu.visible = true;
  characterName.visible = false;
});

var nameInput = game.add.dom(game.scale.width / 2, game.scale.height - 700).createFromCache('name').setScale(scaleRatio);
var emailInput = game.add.dom(game.scale.width / 2, game.scale.height - 500).createFromCache('email').setScale(scaleRatio);


characterName.add([panel1_start, panel1_bar1, enterButton, panel1_bar2, emailInput, closeButton, nameInput, panel1_close]);

