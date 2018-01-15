var PreloadState = {
  preload: function () {

    //Get json object strings from HTML - Setup by Abra
    var listFiles = document.getElementById("listFiles").getAttribute('value');
    var phaserConfig = document.getElementById("phaserConfig").getAttribute('value');
    //setup abra config object
    this.game.phaserConfig = JSON.parse(phaserConfig);
    //setup regex for Abra Asset Load Function. 
    var regEx = /^.*[\\\/]/;
    let regEx2 = /([^\/]*)\/*$/;
    //this is a custom Abra function I created for the preload.
    //eval("(" + this.game.phaserConfig.assets.abraCommands.abraPreLoad + ")")(this);
    //built in Abra asset load function
    
    eval("(" + this.game.phaserConfig.assets.abraCommands.abraLoad + ")")(regEx, regEx2); 
   
    //Stop the follow keys from propagating up to the browser.
    //built in Abra asset load function and Abra object creator.
    eval("(" + JSON.parse(document.getElementById("phaserConfig").getAttribute('value')).assets.abraCommands.abraLoad + ")")(false); 

  },
  create: function () {
    this.state.start('HomeState');
  }
};
