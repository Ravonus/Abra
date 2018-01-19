// function to get all files inside of directory and each directory inside of this. Used for HBS to push to front end. Automatic asset add into phaser.
const fs = require('fs');
let firstPhaserPath, blacklisted;
let phaserNewPath;
let dirPhaserArr = [];

const listFiles = function (dir, filelist) {

  files = fs.readdirSync(dir);
  filelist = filelist || [];

  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = listFiles(dir + file + '/', filelist);
    }
    else {
      configJSON.blacklist.forEach((blacklist) => {
        if (file === blacklist) {
          blacklisted = true;
        }
      })

      if (!blacklisted) {
      //  console.log(file)
        let regexp = /\$?[hw]\d+[hw]\d+|@?[xy]\d+|[xy]\d+/gi;
        let match = file.match(regexp);
        if (match) {
          match.forEach((reg) => {
            if (reg.toLowerCase().match('h') && reg.toLowerCase().match('w')) {
              let find = reg.toLowerCase().match('h').input;
              //        console.log(find.match(/[h]\d+/g)[0]);
              //        console.log(find.match(/[w]\d+/g)[0]);

            }
            if (reg.toLowerCase().match('y')) {

              // console.log(reg.toLowerCase().match(/[y]\d+/g)[0]);
            }
            if (reg.toLowerCase().match('x')) {
              //  console.log(reg.toLowerCase().match(/[x]\d+/g)[0]);
            }
          });
        }

        if (file.toLowerCase() === 'config.json') {
          // console.log(newDir + file);
          let configString = fs.readFileSync(dir + file);
          let configJSON = JSON.parse(configString);

          if (configJSON.abraVariables) {

            delete configJSON['abraVariables'];

          }

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
          let objName = dir.match(/([^\/]*)\/*$/)[1];
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

          if (configJSON.spritesheet) {
            if (!phaserConfig.spritesheet) {
              phaserConfig['spritesheet'] = new Object(configJSON.spritesheet);
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
          return;
        }
        if (file.toLowerCase() === 'spritesheet.json') {
          let configString = fs.readFileSync(dir + file);
          let configJSON = JSON.parse(configString);

          if (!phaserConfig['spritesheet']) {
            phaserConfig['spritesheet'] = new Object(configJSON);
          } else {
            for (obj in Object.keys(configJSON)) {
              key = Object.keys(configJSON)[obj];
              phaserConfig['spritesheet'][key] = configJSON[key]
            }
          }
          return;
        }
        if (file.toLowerCase().includes('.xml')) {

          if (!phaserConfig['bitmap']) {
            phaserConfig['bitmap'] = new Array(file);
          } else {
            phaserConfig['bitmap'].push(file);
          }
        }
        if (file.toLowerCase().includes('.bak')) {

          return
        }

        dirTrim = dir.slice(0, -1)
        let dirArr = dirTrim.split(/\\|\//);
        let firstPhaserPath;
        let phaserNewPath;

        dirArr.forEach((directory) => {
          if (!firstPhaserPath) {
            if (phaserPath.includes(directory)) {
              firstPhaserPath = true;
              phaserNewPath = `${directory}/`
            }
          } else {
            phaserNewPath += `${directory}/`
          }

        })

        let compareFile = file.replace(/^.*[\\\/]/, '');
        let name = compareFile.substr(0, compareFile.lastIndexOf('.'));
        if (lastFile == name) {
          if (Array.isArray(filelist[filelist.length - 1])) {
            sameFile = phaserNewPath + file;
            filelist[filelist.length - 1].push(sameFile);
          } else {
            sameFile = [phaserNewPath + file];
            sameFile.push(filelist[filelist.length - 1])
            filelist.pop();
            filelist.push(sameFile);
          }
          let compareFile = file.replace(/^.*[\\\/]/, '');
          lastFile = compareFile.substr(0, compareFile.lastIndexOf('.'));
        } else {
          filelist.push(phaserNewPath + file);
          let compareFile = file.replace(/^.*[\\\/]/, '');
          lastFile = compareFile.substr(0, compareFile.lastIndexOf('.'));
        }

      }
    }

  });
  return filelist;
};

module.exports = {
  ListFiles: listFiles
};