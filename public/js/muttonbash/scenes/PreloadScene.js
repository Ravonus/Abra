var PreloadScene = {
  preload: function () {

    var progress = this.add.graphics();

    this.load.on('progress', function (value) {
        console.log(value)
        progress.clear();
        progress.fillStyle(0xffffff, 1);
        progress.fillRect(0, 270, 2160 * value, 60);

    });

    this.load.on('complete', function () {

        progress.destroy();

    });

  Function.apply(null, ['dirAdd', JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).abraLoad])(false);

  },
  create: function () {
    
    this.scene.start('MenuScene');
  }
};
