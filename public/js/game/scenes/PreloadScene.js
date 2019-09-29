var PreloadScene = {
  preload: function () {

  Function.apply(null, ['dirAdd', JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).abraLoad])(false);

  },
  create: function () {
  
  
    this.scene.start('MenuScene');
  }
};
