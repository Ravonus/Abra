var PreloadState = {
  preload: function () {
    //built in Abra asset load function
    eval("(" + JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).assets.abraCommands.abraLoad + ")")(false); 
  },
  create: function () {
    this.state.start('HomeState');
  }
};
