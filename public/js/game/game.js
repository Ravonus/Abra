var game = new Phaser.Game(1920, 1080, Phaser.AUTO, 'Abra Auto Loader Alpha 0.1');

game.state.add('GameState', GameState);
game.state.add('HomeState', HomeState);
game.state.add('PreloadState', PreloadState);
game.state.add('BootState', BootState);
game.state.start('BootState');
