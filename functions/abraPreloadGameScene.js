{ inputs = game.input.keyboard.createCursorKeys();

    inputs.ctrl = game.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CTRL);

    inputs.W = game.input.keyboard.addKey('W');

    game.load.scenePlugin("Camera3DPlugin", "../js/plugins/camera3d.min.js", "Camera3DPlugin", "cameras3d");

    Function.apply(null, ['game', Phaser.phaserConfig.socketBalls])(game);

    socketBallsRotate = Function.apply(null, [Phaser.phaserConfig.socketBallsRotate]);
};