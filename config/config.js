const fs = require('fs');
const path = require("path");
let phaserPath, port, x, firstValue, superKey;
let newMath = 0;
let filelist = [];
let configArr = [];
let abraReplace = {};
let math = new Object();
dirPath = __dirname;
let configVariables = new Object();
let phaserConfig = new Object();
configVariables.variables = new Object();

// Look at the config file within main Abra directory. You can put values you don't want people to see here.
//Keep in mind if its a public value - Abra still has to push it to the DIV so phaser has access. Abra will not push anything within abraConfig to phaser. This is default abra configs.
let configString = fs.readFileSync(`${dirPath}/abraConfig.json`);
let configJSON = JSON.parse(configString);

if (!configJSON.abraConfig) {
  configJSON.abraConfig = new Object();
}

//DO stuff with abra configs
port = process.env.PORT || configJSON.abraConfig.phaserPort || 1337;
phaserPath = configJSON.abraConfig.phaserPath || 'assets/';
console.log(phaserPath);

//check and write functions

//check for custom variables.
if (configJSON.variables) {
  delete configJSON['abraConfig'];
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
  delete configJSON['abraConfig'];
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

if (configJSON.abraFunctions) {
  counter = 0
  //console.log(configJSON.abraFunctions)
  for (var key in Object.keys(configJSON.abraFunctions)) {
    let functionName = Object.keys(configJSON.abraFunctions)[key];
    

    let newData;

    fs.readFile(path.join(dirPath, '../functions/', configJSON.abraFunctions[functionName]), "utf8", function (err, data) {
      let configFile = fs.readFileSync(`${dirPath}/abraConfig.json`);
      let fileObj = JSON.parse(configFile);

      if (fileObj.blacklist) {
        abraReplace.blacklist = fileObj.blacklist;
      }

      if (!fileObj.abraConfig) {
        abraReplace.abraConfig = {
          "abraConfig": {
            "phaserSpriteTypes": [
              "png",
              "jpg",
              "jpeg"
            ],
            "phaserVideoTypes": [
              "mp4",
              "avi",
              "webm"
            ],
            "phaserAudioTypes": [
              "mp3",
              "ogg",
              "wav"
            ],
            "phaserPort": 1337,
            "phaserPath": "assets/"
          }
        };

      } else {
        abraReplace.abraConfig = fileObj.abraConfig;
      }

      //put check logic here like we did above with the abraconfig.
      abraReplace.abraFunctions = fileObj.abraFunctions;
      // abraReplace.abraCreate = fileObj.abraCreate;
      if(data){
      newData = data.replace(/\s+/g, " ");
      abraReplace[functionName] = newData;
      phaserConfig[functionName] = newData;
      }

      new Promise(function (resolve, reject) {
        fs.writeFile(`${dirPath}/abraConfig2.json`, JSON.stringify(abraReplace, undefined, 2), (callback, err) => {

          if (err) reject(err)
          else resolve(counter++)

          if (counter === Object.keys(configJSON.abraFunctions).length) {

            if (abraReplace) {

              configJSON = abraReplace;
              // let objName = 'abraMain'   // this can seperate configs into abraMain - Not sure if I want to organize it this way.
              // if (!phaserConfig[objName]) {
              //   phaserConfig[objName] = new Object();
              // }
              // for (i = 0; i < Object.keys(configJSON).length; i++) {
              //   let first = Object.keys(configJSON)[i];
              //   let newObj = configJSON[first];
              //   if (!phaserConfig[objName][first]) {
              //     phaserConfig[objName][first] = new Object();
              //   }
              //   let second = Object.keys(newObj)[i]
              //   phaserConfig[objName][first] = newObj;
              // }
            //  console.log( phaserConfig);
            }
            let finalConfig = fs.readFileSync(`${dirPath}/abraConfig2.json`);

            fs.writeFile(`${dirPath}/abraConfig.json`, finalConfig, (callback, err) => {
              var filePath = `${dirPath}/abraConfig2.json`; 
              fs.unlinkSync(filePath);
            
            exports.PhaserConfig = phaserConfig;
            exports.PhaserPath = phaserPath;
            exports.Port = port;
            exports.ConfigJSON = configJSON;
            exports.Filelist = filelist;
            exports.ConfigVariables = configVariables;
          });
          }
        });
      });
    });
  }
} else {

  // let objName = 'abraMain'
  // if (!config.PhaserConfig[objName]) {
  //   config.PhaserConfig[objName] = new Object();
  // }
  // for (i = 0; i < Object.keys(config.ConfigJSON).length; i++) {
  //   let first = Object.keys(config.ConfigJSON)[i];
  //   let newObj = config.ConfigJSON[first];
  //   if (!config.PhaserConfig[objName][first]) {
  //     config.PhaserConfig[objName][first] = new Object();
  //   }
  //   let second = Object.keys(newObj)[i]
  //   config.PhaserConfig[objName][first] = newObj;
  // }

  exports.PhaserConfig = phaserConfig;
  exports.PhaserPath = phaserPath;
  exports.Port = port;
  exports.ConfigJSON = configJSON;
  exports.Filelist = filelist;
  exports.ConfigVariables = configVariables;
}

