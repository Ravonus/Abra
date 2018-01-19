var PreloadState = {
  preload: function () {
    //built in Abra asset load function and Abra object creator.
    eval("(" + JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).abraMain.abraLoad + ")")(false); 
  },
  create: function () {
    this.state.start('HomeState');
  }
};
