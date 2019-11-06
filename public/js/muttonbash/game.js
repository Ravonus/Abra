var config = {
  type: Phaser.CANVAS,
  parent: 'Abra Auto Loader Alpha 0.1',
  autoResize: true,
  dom: {
    createContainer: true
  },
  fps: 60,
  physics: {
    default: 'arcade'
  },
  scale: {
    mode: Phaser.Scale.FIT,
    width: window.innerWidth * window.devicePixelRatio,
    height:  window.innerHeight * window.devicePixelRatio,
    dom: {
      createContainer: true
    }
  },
  gameVersion: 0.1,
  gameURL: "https://technomancyit.com"
};

var scaleRatio = window.devicePixelRatio / 3;
console.log("SCALE ", scaleRatio)
var cameras = {};
var sprites = {};
var transform = {};
var groups = {};
var characterName, menu, lobby, users, room, roomText, userList, userNames, joinGame, readyButton, startButton;


var game = new Phaser.Game(config);
//  scene: [ SetupScene, PreloadScene, MenuScene,  GameScene]


game.scene.add('GameScene', GameScene);
game.scene.add('MenuScene', MenuScene);
game.scene.add('PreloadScene', PreloadScene);
game.scene.add('SetupScene', SetupScene);
game.scene.start('SetupScene');