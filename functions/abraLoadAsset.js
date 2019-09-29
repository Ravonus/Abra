{
  console.log("I BE RUNNING ARG");
  var phaserConfig = document.getElementById('phaserConfig').getAttribute('value');
  document.getElementById('phaserConfig').remove();
  var listFiles = document.getElementById('listFiles').getAttribute('value');

  console.log(phaserConfig);
  
  this.phaserConfig = JSON.parse(phaserConfig);
  Phaser.phaserConfig = JSON.parse(phaserConfig);



  var scene = this.game.scene.keys.PreloadScene;
  var game = this;

  document.getElementById('listFiles').remove();
  var regEx = /^.*[\\\/]/;
  var regEx2 = /([^\/]*)\/*$/;

  game.assetList = JSON.parse(listFiles);

  var gameScene = this.game.scene.keys.GameScene;



 
  game.assetList.forEach(function (file) {
    
    if (Array.isArray(file)) {
     
      var filename = file[0].replace(regEx, '');
      var name = filename.substr(0, filename.lastIndexOf('.'));
      var lastFile;
      var newFileArray = [];
      var pathArray = file[0].split('/');
      if (dirAdd === true) {
   
        var lastDir = pathArray[pathArray.length - 2] + '-';
      } else {
     
        var lastDir = '';
      }
      file.forEach(function (newFile) {
        newFileArray.push(newFile);
        lastFile = newFile;
      });

      if (filename == name + '.mp3' || filename == name + '.ogg' || filename == name + '.wav') {
        scene.load.audio(lastDir + name, newFileArray);
      } else if (game.phaserConfig['bitmap'] && game.phaserConfig['bitmap'].join().includes(name) && !this.game.phaserConfig.spritesheet[name]) {
        scene.load.bitmapFont(lastDir + name, file[1], file[0]);
      } else if (game.phaserConfig['bitmap'] && game.phaserConfig['bitmap'].join().includes(name) && this.game.phaserConfig.spritesheet[name]) {
        scene.load.atlasXML(lastDir + name, file[1], file[0]);
      } else if (file[1].toLowerCase().includes('.json') && this.game.phaserConfig.spritesheet[name]) {
        scene.load.atlas(lastDir + name, file[0], file[1], Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
      } else if (file[1].toLowerCase().includes('.json')) {
        scene.load.tilemap(lastDir + name, file[1], null, Phaser.Tilemap.TILED_JSON);
        scene.load.image(lastDir + name + '-tiles', file[0]);
      } else if (file[1].toLowerCase().includes('.csv')) {
        scene.load.tilemap(lastDir + name, file[1], null, Phaser.Tilemap.CSV);
        scene.load.image(lastDir + name + '-tiles', file[0]);
      } else { }
    } else {
      var filename = file.replace(regEx, '');
      var name = filename.substr(0, filename.lastIndexOf('.'));
      var objName = file.match(regEx2)[2];
      var pathArray = file.split('/');
      if (dirAdd) {
     
        var lastDir = pathArray[pathArray.length - 2] + '-';

      } else {
    
        var lastDir = '';
      
      }
    
      if (game.phaserConfig.spritesheet &&game.phaserConfig.spritesheet[name]) {
        
      
        scene.load.spritesheet(lastDir + name, file, {"frameHeight": game.phaserConfig.spritesheet[name].height, "frameWidth": game.phaserConfig.spritesheet[name].width, "startFrame": 0, "endFrame": game.phaserConfig.spritesheet[name].frames});
      } else if (filename == name + '.mp3' || filename == name + '.ogg' || filename == name + '.wav') {
        scene.load.audio(lastDir + name, file);
      } else if (filename.toLowerCase().includes('.json')) {

        scene.load.json(name, file);

      } else if (filename.toLowerCase().includes('.mp4') || filename.toLowerCase().includes('.flv') || filename.toLowerCase().includes('.webm')) {
        scene.load.video(lastDir + name, file);
      } else if (filename == name + '.txt') {
        scene.load.text(lastDir + name, file);
      } else {

        scene.load.image(lastDir + name, file);

      }
      scene.assetList = undefined;
    }
  });


  

  
}