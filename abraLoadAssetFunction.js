game.assetList = JSON.parse(listFiles);
game.assetList.forEach(function (file) {
  if (Array.isArray(file)) {
    var filename = file[0].replace(regEx, '');
    var name = filename.substr(0, filename.lastIndexOf('.'));
    var lastFile;
    var newFileArray = [];
    var pathArray = file[0].split('/');
    var lastDir = pathArray[pathArray.length - 2] + '-';
    file.forEach(function (newFile) {
      newFileArray.push(newFile);
      lastFile = newFile;
    });
    if (filename == name + '.mp3' || filename == name + '.ogg' || filename == name + '.wav') {
      game.load.audio(lastDir + name, newFileArray);

    } else if (game.phaserConfig['bitmap'].join().includes(name) && !this.game.phaserConfig.spritesheet[name]) {
      game.load.bitmapFont(lastDir  + name, file[1], file[0]);

    } else if (game.phaserConfig['bitmap'].join().includes(name) && this.game.phaserConfig.spritesheet[name]) {
      game.load.atlasXML(lastDir + name, file[1], file[0]);

    } else if (file[1].toLowerCase().includes('.json') && this.game.phaserConfig.spritesheet[name]) {
      game.load.atlas(lastDir  + name, file[0], file[1], Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

    } else if (file[1].toLowerCase().includes('.json')) {
      game.load.tilemap(lastDir  + name, file[1], null, Phaser.Tilemap.TILED_JSON);
      game.load.image(lastDir  + name+'-tiles', file[0]);

    } else if (file[1].toLowerCase().includes('.csv')) {
      game.load.tilemap(lastDir  + name, file[1], null, Phaser.Tilemap.CSV);
      game.load.image(lastDir  + name+'-tiles', file[0]);

      } else {

      }
    } else {
      var filename = file.replace(regEx, '');
      var name = filename.substr(0, filename.lastIndexOf('.'));
      var objName = file.match(regEx2)[2];
      var pathArray = file.split('/');
      var lastDir = pathArray[pathArray.length - 2] + '-';
      if (game.phaserConfig.spritesheet[name]) {
        game.load.spritesheet(lastDir  + name, file, this.game.phaserConfig.spritesheet[name].height, game.phaserConfig.spritesheet[name].width, game.phaserConfig.spritesheet[name].frames);
      } else if (filename == name + '.mp3' || filename == name + '.ogg' || filename == name + '.wav') {
        game.load.audio(lastDir  + name, file);

      } else if (filename.toLowerCase().includes('.json')) {
        game.load.json(name, file);
        
      } else if (filename.toLowerCase().includes('.mp4') || filename.toLowerCase().includes('.flv') || filename.toLowerCase().includes('.webm')) {
       game.load.video(lastDir  + name, file);
       
      } else if (filename == name + '.txt') {
        game.load.text(lastDir  + name, file);

      } else {
        game.load.image(lastDir  + name, file);
      }
    }
  });