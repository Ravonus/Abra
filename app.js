const config = require('./config/config');
const express = require('express');
const router = express.Router();
const hbs = require('hbs');
const fs = require('fs');
const Parser = require('expr-eval').Parser;
const app = express();
const replacer = require('./modules/replacer.js')
let callbackPhaserConfig = 'test';
const lister = require('./modules/lister')
const dirPath = __dirname
counter = 0


let objName = 'abraMain'
//  setTimeout(function(){

  callbackPhaserConfig = (callback) => {

  
  if(config.PhaserConfig) {

  



for (i = 0; i < Object.keys(config.ConfigJSON).length; i++) {
  let first = Object.keys(config.ConfigJSON)[i];
  let newObj = config.ConfigJSON[first];
  if (!config.PhaserConfig[objName][first]) {
    config.PhaserConfig[objName][first] = new Object();
  }
  let second = Object.keys(newObj)[i]
  config.PhaserConfig[objName][first] = newObj;
  if(counter == Object.keys(config.ConfigJSON).length-1){
    
    lister.ListFiles(`${dirPath}/public/${config.PhaserPath}`, config.Filelist);

    delete config.PhaserConfig['assets'].spritesheet;
    
    config.PhaserConfig = replacer.ReplaceAll(config.PhaserConfig, config.ConfigVariables.variables);
    config.PhaserConfig = JSON.parse(config.PhaserConfig);
    
    app.set('view engine', 'hbs');
    
    hbs.registerPartials(__dirname + '/views/partials');
    app.use(express.static(__dirname + '/public'));
    
    app.use((req, res, next) => {
      let now = new Date().toString();
      let log = `${now}: ${req.method} ${req.url} ${req.ip}`;
    
      fs.appendFile(__dirname + '/logs/server.log', log + '\n', (err) => {
        if (err) {
          console.log('Unable to append to server.log.');
        }
      });
      next();
    });
    
    
   // console.log(config.PhaserConfig);
    app.get('/', (req, res) => {
      
      res.render('index.hbs', { img: JSON.stringify(config.Filelist), config: JSON.stringify(config.PhaserConfig) });
    
    });
    
    
    app.listen(config.Port, () => {
      console.log(`Server started on port:${config.Port}.`);
    });


  }
  counter++;
}


 }else {
  setTimeout(function(){
   callbackPhaserConfig(callback);
  }, 0);
 }
}
callbackPhaserConfig();
//  }, 300);
 
// setTimeout(function(){

//console.log(config.PhaserConfig);

