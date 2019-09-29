var config = {
  type: Phaser.CANVAS,
  parent: 'Abra Auto Loader Alpha 0.1',
  width: 1920,
  height: 1080,
  autoResize: true,
  fps: 60,
  gameVersion: 0.1,
  gameURL: "https://technomancyit.com"
};

var cameras = {};
var sprites = {};
var transform = {};
var groups = {};

var game = new Phaser.Game(config);
//  scene: [ SetupScene, PreloadScene, MenuScene,  GameScene]





game.scene.add('GameScene', GameScene);
game.scene.add('MenuScene', MenuScene);
game.scene.add('PreloadScene', PreloadScene);
game.scene.add('SetupScene', SetupScene);
game.scene.start('SetupScene');


