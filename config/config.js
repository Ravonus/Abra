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
  for (var key in Object.keys(configJSON.abraFunctions)) {

    let functionName = Object.keys(configJSON.abraFunctions)[key];


    let newData;

    fs.readFile(path.join(dirPath, '../functions/', configJSON.abraFunctions[functionName]), "utf8", function (err, data) {
      let configFile = fs.readFileSync(`${dirPath}/abraConfig.json`);
      let fileObj = JSON.parse(configFile);


      if(fileObj.projects) abraReplace.projects = fileObj.projects;

      if (fileObj.jsonGenerator) abraReplace.jsonGenerator = fileObj.jsonGenerator;
      


      if (fileObj.blacklist) {
        abraReplace.blacklist = fileObj.blacklist;
      } else {
        abraReplace.blacklist = [];
      }


      if (!fileObj.abraConfig) {
        abraReplace.abraConfig = {
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
        };

      } else {
        abraReplace.abraConfig = fileObj.abraConfig;
      }

      //put check logic here like we did above with the abraconfig.
      abraReplace.abraFunctions = fileObj.abraFunctions;
      // abraReplace.abraCreate = fileObj.abraCreate;

      data = data.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '');
      var lines = data.split('\n');
      

      for (var i = 0; i < lines.length; i++) {
   //     lines[i] = lines[i].trim();
        if(!lines[i].endsWith(';')){
        
          if(lines[i] !== ''.trim() && lines[i] !== "{" && !lines[i].endsWith('}') && !lines[i].endsWith(')'))
          lines[i] = lines[i] + ';';
        }
      }

      data = lines.join(' ');
      console.log(data);
      newData = data.replace(/\s+/g, " ");


      abraReplace[functionName] = newData;
      phaserConfig[functionName] = newData;


      new Promise(function (resolve, reject) {
        fs.writeFile(`${dirPath}/abraConfig2.json`, JSON.stringify(abraReplace, undefined, 2), (callback, err) => {

          if (err) reject(err)
          else resolve(counter++)

          if (counter === Object.keys(configJSON.abraFunctions).length - 1) {

            if (abraReplace) {

              configJSON = abraReplace;
            }
            let finalConfig = fs.readFileSync(`${dirPath}/abraConfig2.json`);

            fs.writeFile(`${dirPath}/abraConfig.json`, finalConfig, (callback, err) => {
              if (!err) {

                resolve();
                var filePath = `${dirPath}/abraConfig2.json`;
                fs.unlinkSync(filePath);

                exports.PhaserConfig = phaserConfig;
                exports.PhaserPath = phaserPath;
                exports.Port = port;
                exports.ConfigJSON = configJSON;
                exports.Filelist = filelist;
                exports.ConfigVariables = configVariables;
              }
            });
          }
        });
      });
    });
  }

} else {



  exports.PhaserConfig = phaserConfig;
  exports.PhaserPath = phaserPath;
  exports.Port = port;
  exports.ConfigJSON = configJSON;
  exports.Filelist = filelist;
  exports.ConfigVariables = configVariables;
}

