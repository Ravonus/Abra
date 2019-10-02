const config = require('./config/config');
const express = require('express');
const router = express.Router();
const colors = require('colors');
const hbs = require('hbs');
const fs = require('fs');
const Parser = require('expr-eval').Parser;
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);
const replacer = require('./modules/replacer.js');
const lister = require('./modules/lister');
const dirPath = __dirname;
const version = "0.1.5-beta"
let counter = 0;


function gameRoutes(path, page, fileList, config) {

  app.get(path, (req, res) => {

    res.render(page, { img: JSON.stringify(fileList), config: JSON.stringify(config) });

  });

}

let callbackPhaserConfig = (callback) => {

  if (config.PhaserConfig) {

    console.log(config.ConfigJSON.projects)

    if (!config.ConfigJSON.projects || Object.keys(config.ConfigJSON.projects).length === 0) 
    lister.ListFiles(`${dirPath}/public/${config.PhaserPath}`, config.Filelist);
   
    



    if (config.PhaserConfig['assets']) {
      delete config.PhaserConfig['assets'].spritesheet;
    }



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

    if (!config.ConfigJSON.projects || Object.keys(config.ConfigJSON.projects).length === 0) 
    gameRoutes('/', 'index.hbs', config.Filelist, config.PhaserConfig);
 
  
  else {


    var keys = Object.keys(config.ConfigJSON.projects);


    keys.forEach(async (key, index) => {
      

      config.Filelist = [];
 
      var project = config.ConfigJSON.projects[key];
      console.log(config.PhaserConfig.projects)
      var lista = await lister.ListFiles(`${dirPath}/public/${config.PhaserPath}`, config.Filelist, project.name ? project.name : key);

     

      gameRoutes(project.path ? project.path : `/${key}`, project.page ? project.page : 'index.hbs', lista, config.PhaserConfig);
      
      
    })

  }

  if (Object.keys(config.ConfigVariables.variables).length !== 0) {

    config.PhaserConfig = replacer.ReplaceAll(config.PhaserConfig, config.ConfigVariables.variables);

    // console.log(config.PhaserConfig)
    config.PhaserConfig = JSON.parse(config.PhaserConfig);

    //  console.log(config.PhaserConfig)
  }

    app.get('/test', (req, res) => {

      res.send('ok', 200);
      // console.log(io.sockets.to().sockets);
      console.log(io.sockets.emit('grow', 'test'))

    });


    server.listen(config.Port, () => {
      console.log(`Abra  `.cyan.bold.underline + `${version}`.yellow.bold + `\n\nServer started on port`.cyan.bold.underline + `:  `.green.bold + `${config.Port}`.yellow.bold);
    });

  } else {
    setTimeout(function () {
      callbackPhaserConfig(callback);
    }, 0);
  }
}
callbackPhaserConfig();

//sockets
require('./socket.io').socket(io);
