var mainScene;
var updateCamControls;
var cursors;
var xAxis;
var yAxis;
var zAxis;
var isPosition = true;
var testTouch;

var GameScene = {

  
  preload: function () {

    var plugin = {key: "Camera3DPlugin",url: "../js/plugins/camera3d.min.js",sceneKey: "cameras3d"};

 
    this.load.scenePlugin(plugin);
  

  },

  create: function () {


    // var sprite = this.add.sprite(400, 300, 'red_aura').setInteractive();




    Function.apply(null, ['game', Phaser.phaserConfig.boxCreate])(this)

    updateCamControls = Function.apply(null, [Phaser.phaserConfig.boxUpdate]);

    Function.apply(null, ['spriteAttributes', 'mainScene', Phaser.phaserConfig.abraCreate])(Phaser.phaserConfig.assets['3dGrid'], this.scene.key);
    //Function.apply(null, ['spriteAttributes', 'mainScene', Phaser.phaserConfig.abraCreate])(Phaser.phaserConfig.assets['grid10x10'], this.scene.key);



    this.input.on('gameobjectdown', function (pointer, gameObject) {


      if (gameObject.name === "blue_ball") {

        socketDeleteDot(gameObject.sprite3d);
        // gameObject.sprite3d.size.x = 0;
        // gameObject.sprite3d.size.y = 0;
        // gameObject.size.x = 0;
        // gameObject.size.y = 0;

      }



      //gameObject.destroy();

    });
    // groups['red_aura'].children.entries.on('pointerdown', function (pointer) {

    //   this.setTint(0xff0000);
    //   console.log('ran');

    // });

    // groups['red_aura'].children.entries[1].on('pointerout', function (pointer) {

    //   this.clearTint();

    // });

    // groups['red_aura'].children.entries[1].on('pointerup', function (pointer) {

    //   this.clearTint();

    // });

  },

  update: function () {


    cameras.blue_ball.transformChildren(transform.blue_ball);
    updateCamControls();
  },

  render: function () {

  }
};