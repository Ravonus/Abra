const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
let Parser = require('expr-eval').Parser;
const app = express();
const dirPath = __dirname
let phaserPath, port, x, firstValue;
let newMath = 0;
let filelist = [];
let lastFile = [];
let configArr = [];
let math = new Object();
let configVariables = new Object();
let phaserConfig = new Object();
configVariables.variables = new Object();

// Look at the config file within main Abra directory. You can put values you don't want people to see here.
//Keep in mind if its a public value - Abra still has to push it to the DIV so phaser has access. Abra will not push anything within abraConfig to phaser. This is default abra configs.
let configString = fs.readFileSync(`${dirPath}/config.json`);
let configJSON = JSON.parse(configString);



if (configJSON.abraConfig) {
  //DO stuff with abra configs
  port = process.env.PORT || configJSON.abraConfig.phaserPort;
  phaserPath = 'assets/' || configJSON.abraConfig.phaserPath;

  //now delete object from configJSON. We don't want phaser to see theses.
  delete configJSON['abraConfig'];
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

//function to replace variable keys with actual value. (This also does math if you set the correct flag within your variable values)
const findAndReplace = (object, value, replacevalue, mathEquations) => {
  y = 0;
  
  for (var x in object) {
    newNum = 0
    if (object.hasOwnProperty(x)) {
      //  
      if (typeof object[x] == 'object') {
        
        findAndReplace(object[x], value, replacevalue, mathEquations);
      }

     
      if (object[x] == value) {
     
        if(mathEquations.length !== 0){
         
          
    
         
   //           console.log(mathEquations[newMath]);
           var operation = mathEquations[newMath].substring(0,1);
              var num = mathEquations[newMath].substr(1);
        //      console.log(newMath)
       //       console.log(num)
        //      console.log(firstValue)
        if(!math[value]){
       
       //   firstValue = Parser.evaluate(`${firstValue}${operation}${num}`);
          // console.log(replacevalue)
          // console.log(firstValue)
        
          
            replacevalue =  Parser.evaluate(`${mathEquations[0]}${mathEquations[1]}`);
            math[value] = new Object({lastValue:replacevalue});
       //     console.log(value)
           
            
          
        }else{
          console.log(math[value].lastValue)
          replacevalue =  Parser.evaluate(`${math[value].lastValue}${mathEquations[1]}`);
          math[value].lastValue = replacevalue;
        }

        //  if(num.match('_')){
        //    let numRuns = num.split('_');
        //  newNum = Parser.evaluate(`${firstValue}${operation}${numRuns[0]}`);

        //  }else{
           
        //    console.log(`${firstValue}${operation}${num}`)
        //   newNum = Parser.evaluate(`${firstValue}${operation}${num}`);

        
        //  }
     //    console.log(Parser.evaluate(`${firstValue}${operation}${num}`));

            

        }
        
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
      }
      phaserConfig = object;
    }
  }
}
// function to get all files inside of directory and each directory inside of this. Used for HBS to push to front end. Automatic asset add into phaser.
let firstPhaserPath, blacklisted;
let phaserNewPath;
let dirPhaserArr = [];

const listAllFiles = function (dir, filelist) {

  files = fs.readdirSync(dir);
  filelist = filelist || [];

  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = listAllFiles(dir + file + '/', filelist);
    }
    else {
      configJSON.blacklist.forEach( (blacklist) => {
          if(file === blacklist) {
            blacklisted = true;
          }
      }) 
          
      if(!blacklisted){
        console.log(file)
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

let configArray = ((obj) => {
  let array = [];

  for (i = 0; i < Object.keys(obj).length; i++) {
    var key = Object.keys(obj)[i];
    array.push(key, obj[key])

  }
  return array;

})

listAllFiles(`${dirPath}/public/${phaserPath}`, filelist)

delete phaserConfig['assets'].spritesheet;
// loop through each custom variable and replace configs.
// add math here?
configArr.forEach((variable) => {
  if (x == undefined) {
    x = 0;
  }
  if (x == 0) {
    key = variable;
    x++;
  } else {
    let matchArr = [];
    regexp = /[*+-\/\d_]+/gi
    if(typeof variable == 'string'){
    matchArr = variable.match(/[+*\-.\/\d_]+/gi);
   // console.log(variable);
  }
   
    findAndReplace(phaserConfig, '${' + key + '}', variable, matchArr);

    x = 0
  }

});

const filesObj = {
  files: {
    fileName: [],
    filePath: []
  }
};
console.log(phaserConfig.assets.spritesheet2)
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
  console.log(`Server started on port:${port}.`);
});