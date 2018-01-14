const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 1337;
const app = express();
const filelist = [];
const dirPath = __dirname
let configVariables = {};
configVariables.variables = {};
let phaserConfig = {};

let lastFile = [];
let configArr = [];
let x, y, z;
let phaserPath = 'assets/'

//function to replace variable keys with actual value.
const findAndReplace = (object, value, replacevalue) => {
  for (var x in object) {
    if (object.hasOwnProperty(x)) {
      //  
      if (typeof object[x] == 'object') {
        findAndReplace(object[x], value, replacevalue);
      }
      if (object[x] == value) {
        object[x] = replacevalue;
      } else {
        let str = object[x];
        // 
        for (var key in object[x]) {
          // skip loop if the property is from prototype
          if (!object[x].hasOwnProperty(key)) continue;
          var obj = object[x][key];
          for (var prop in obj) {
            // skip loop if the property is from prototype
            if (!obj.hasOwnProperty(prop)) continue;
            //checking full strings for variables. Instead of objects.
            if (object[x][key]) {
              if (typeof (object[x][key]) == "string") {
                var newValue = value.slice(1);
                var regexstring = '\\$' + newValue;
                if (regexstring === '\\${x}') {
                }
                var regexp = new RegExp(regexstring, "gi");
                var escaped = /\`a\`/g;
                var re = /a/g;
                var test = object[x][key].replace(regexp, replacevalue);
                object[x][key] = test;
              }
            }
          }
        }

        //  console.log(str)
      }
      phaserConfig = object;
    }
  }
}
// function to get all files inside of directory and each directory inside of this. Used for HBS to push to front end. Automatic asset add into phaser.
let firstPhaserPath;
let phaserNewPath;
let phaserPatht = 'assets/img/boob/'
let dirPhaserArr = [];

const listAllFiles = function (dir, filelist) {

  files = fs.readdirSync(dir);
  filelist = filelist || [];

  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = listAllFiles(dir + file + '/', filelist);
    }
    else {
      if (file.toLowerCase() === 'config.json') {
        // console.log(newDir + file);
        let configString = fs.readFileSync(dir + file);
        let configJSON = JSON.parse(configString);

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
          phaserConfig[objName] = {}
        }
        for (i = 0; i < Object.keys(configJSON).length; i++) {
          let first = Object.keys(configJSON)[i];
          let newObj = configJSON[first];
          if (!phaserConfig[objName][first]) {
            phaserConfig[objName][first] = {}
          }
          let second = Object.keys(newObj)[i]
          phaserConfig[objName][first] = newObj;
        }
        return;
      }
      if (file.toLowerCase() === 'spritesheet.json') {
        //  console.log(phaserConfig);
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
        //  console.log(phaserConfig.spritesheet['p1-running2'].width);
        return;
      }
      if (file.toLowerCase().includes('.xml')) {
       
        if (!phaserConfig['bitmap']) {
          phaserConfig['bitmap'] = new Array(file);
        }else {
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
  });
  return filelist;
};

let configArray = ((obj) => {
  let array = [];

  for (i = 0; i < Object.keys(obj).length; i++) {
    var key = Object.keys(obj)[i];
    array.push(key, obj[key])

  }
  return array;

})

listAllFiles(`${dirPath}/public/${phaserPath}`, filelist)

configArr.forEach((variable) => {
  if (x == undefined) {
    x = 0;
  }
  if (x == 0) {
    key = variable;
    x++;
  } else {

    findAndReplace(phaserConfig, '${' + key + '}', variable);

    x = 0
  }

});

const filesObj = {
  files: {
    fileName: [],
    filePath: []
  }
};

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  let now = new Date().toString();
  let log = `${now}: ${req.method} ${req.url} ${req.ip}`;

  fs.appendFile(__dirname + '/public/server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
  });
  next();
});

app.get('/', (req, res) => {
  res.render('index.hbs', { img: JSON.stringify(filelist), config: JSON.stringify(phaserConfig) });

});

app.listen(port, () => {
  console.log(`Server fucking started on port:${port}.`);
});