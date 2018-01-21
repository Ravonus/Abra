var PreloadState = {
  preload: function () {
    //built in Abra asset load function and Abra object creator.
   
    eval("(" + JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).abraLoad + ")")(false);
    eval("(" + game.phaserConfig.abraTest + ")")('pooper');
  },
  create: function () {
    this.state.start('HomeState');
  }
};
