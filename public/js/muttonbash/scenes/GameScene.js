var mainScene;
var updateCamControls;
var cursors;
var xAxis;
var yAxis;
var zAxis;
var isPosition = true;
var testTouch;
var inputs;
var game;

var socketBallsRotate;

var GameScene = {

  preload: function () {
   

  },

  create: function () {

    var panel1 = this.add.sprite(game.scale.width / 2, game.scale.height / 2, 'playPanel').setScale(scaleRatio);

    var players = this.add.group({ immovable: true });

    var y = game.scale.height / 2;
    var fr = true;
    for (var i = 0; i < Object.keys(users).length - 1; i++)
    {

        var b = players.create(game.scale.width / 2, y, 'playerPanel').setScale(scaleRatio);

        if(fr) {
          y = y + b.displayHeight;
          b.y = b.y + b.displayHeight
        }

        y = y - b.displayHeight
        this.physics.add.existing(b);
        fr = false;
        b.body.setImmovable();
    }

  },

  update: function () {

  }

};