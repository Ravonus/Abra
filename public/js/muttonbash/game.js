var config = {
  type: Phaser.AUTO,
  parent: 'Abra Auto Loader Alpha 0.1',
  width: 1080,
  height: 1920,
  autoResize: true,
  dom: {
    createContainer: true
  },
  fps: 60,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 2160,
    height: 1920,
    dom: {
      createContainer: true
    }
  },
  gameVersion: 0.1,
  gameURL: "https://technomancyit.com"
};

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


