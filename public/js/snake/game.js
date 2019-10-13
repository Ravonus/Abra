var config = {
  type: Phaser.WEBGL,
  width: 640,
  height: 480,
  backgroundColor: '#bfcc00'
};

var cameras = {};
var sprites = {};
var transform = {};
var groups = {};

var snake;
var food;
var cursors;

var UP = 0;
var DOWN = 1;
var LEFT = 2;
var RIGHT = 3;


var game = new Phaser.Game(config);
//  scene: [ SetupScene, PreloadScene, MenuScene,  GameScene]





game.scene.add('GameScene', GameScene);
game.scene.add('MenuScene', MenuScene);
game.scene.add('PreloadScene', PreloadScene);
game.scene.add('SetupScene', SetupScene);
game.scene.start('SetupScene');


