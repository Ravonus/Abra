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

    var panel1 = this.add.sprite(420, 50, 'playPanel').setOrigin(0).setScale(1);

    var players = this.add.group({ immovable: true });

    var y = 1252;
    for (var i = 0; i < Object.keys(users).length - 1; i++)
    {

        var b = players.create(1088, y, 'playerPanel');
        y = y - 378;
        this.physics.add.existing(b);

        b.body.setImmovable();
    }


  },

  update: function () {



  }

};