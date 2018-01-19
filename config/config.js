const fs = require('fs');
let phaserPath, port, x, firstValue, superKey;
let newMath = 0;
let filelist = [];
let configArr = [];
let math = new Object();
dirPath = __dirname;
let configVariables = new Object();
let phaserConfig = new Object();
configVariables.variables = new Object();

// Look at the config file within main Abra directory. You can put values you don't want people to see here.
//Keep in mind if its a public value - Abra still has to push it to the DIV so phaser has access. Abra will not push anything within abraConfig to phaser. This is default abra configs.
let configString = fs.readFileSync(`${dirPath}/abraConfig.json`);
let configJSON = JSON.parse(configString);

if (configJSON.abraConfig) {

  //DO stuff with abra configs
  port = process.env.PORT || configJSON.abraConfig.phaserPort;
  phaserPath = 'assets/' || configJSON.abraConfig.phaserPath;

  //now delete object from configJSON. We don't want phaser to see theses.
  delete configJSON['abraConfig'];
}

//check and write functions

if(configJSON.abraFunctions) {
  //console.log(configJSON.abraFunctions)
  for (var key in Object.keys(configJSON.abraFunctions)) {
    functionName = Object.keys(configJSON.abraFunctions)[key];
    console.log(`${functionName} ${configJSON.abraFunctions[functionName]}`)

  }
}

//check for custom variables.
if (configJSON.variables) {

  //   configVariables.variables = {}
  for (i = 0; i < Object.keys(configJSON.variables).length; i++) {
    let key = Object.keys(configJSON.variables)[i];
    configVariables.variables[key] = configJSON.variables[key];

  }
  delete configJSON['variables'];
  configVariablesArr = Array.from(configVariables.variables);
  configArr = configArray(configVariables.variables);
}
if (configJSON.spritesheet) {
  if (!phaserConfig.spritesheet) {
    phaserConfig['spritesheet'] = new Object(configJSON.spritesheet);
    //now delete object from configJSON. We don't want it to write into other.
    delete configJSON['spritesheet'];

  } else {
    for (key in Object.keys(configJSON.spritesheet)) {
      objectName = Object.keys(configJSON.spritesheet)[key];
      phaserConfig.spritesheet[objectName] = new Object(configJSON.spritesheet[objectName]);
      //now delete object from configJSON. We don't want it to write into other.

    }
    delete configJSON['spritesheet'];
  }

}

let objName = 'abraMain'
if (!phaserConfig[objName]) {
  phaserConfig[objName] = new Object();
}
for (i = 0; i < Object.keys(configJSON).length; i++) {
  let first = Object.keys(configJSON)[i];
  let newObj = configJSON[first];
  if (!phaserConfig[objName][first]) {
    phaserConfig[objName][first] = new Object();
  }
  let second = Object.keys(newObj)[i]
  phaserConfig[objName][first] = newObj;
}


exports.PhaserConfig = phaserConfig;
exports.PhaserPath = phaserPath;
exports.Port = port;
exports.ConfigJSON = configJSON;
exports.Filelist = filelist;
exports.ConfigVariables = configVariables;
