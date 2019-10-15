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
const dirPath = __dirname
const pluginLoader = require('./modules/pluginLoader');
const phaserUpdate = require('./modules/phaserUpdate');
const version = "0.1.5-beta"
let counter = 0;


function gameRoutes(path, page, fileList, config, project) {

  app.get(path, (req, res) => {

    res.render(page, { img: JSON.stringify(fileList), config: JSON.stringify(config), project });

  });

}

let callbackPhaserConfig = async (callback) => {

  if (config.PhaserConfig && Object.keys(config.PhaserConfig).length !== 0 && config.PhaserConfig.functions.abraFunctions) {

    var functionConfigs = JSON.parse(JSON.stringify(config.PhaserConfig.functions));

    delete config.PhaserConfig.functions;

    // if (!config.ConfigJSON.projects || Object.keys(config.ConfigJSON.projects).length === 0)
    //   await lister.ListFiles(`${dirPath}/public/${config.PhaserPath}`, config.Filelist);

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





    if (!config.ConfigJSON.projects || Object.keys(config.ConfigJSON.projects).length === 0) {


      Object.keys(functionConfigs).forEach(key => {
        var functions = functionConfigs[key];
        var configs = Object.assign(config.PhaserConfig, functions);
      });

      gameRoutes('/', 'index.hbs', config.Filelist, configs);

    }


    else {



      var keys = Object.keys(config.ConfigJSON.projects);

      keys.forEach(async (key, index) => {

        config.Filelist = [];

        var project = config.ConfigJSON.projects[key];

        var list = await lister.ListFiles(`${dirPath}/public/${config.PhaserPath}`, config.Filelist, project.name ? project.name : key);


        //gameRoutes(project.path ? project.path : `/${key}`, project.page ? project.page : 'index.hbs', list, Object.assign(config.PhaserConfig, functionConfigs.abraFunctions, functionConfigs[key]), key);

        //TODO: Might need to fix this right now just assigning assets and spritesheets into push, but there might be more objects.
        gameRoutes(project.path ? project.path : `/${key}`, project.page ? project.page : 'index.hbs', list, Object.assign({ assets: config.PhaserConfig.assets, spritesheet: config.PhaserConfig.spritesheet }, functionConfigs.abraFunctions, functionConfigs[key]), key);

      });

    }

    if (Object.keys(config.ConfigVariables.variables).length !== 0) {

      config.PhaserConfig = replacer.ReplaceAll(config.PhaserConfig, config.ConfigVariables.variables);
      config.PhaserConfig = JSON.parse(config.PhaserConfig);

    }

    app.get('/test', (req, res) => {

      res.send('ok', 200);

    });

    if (config.ConfigJSON.abraConfig && config.ConfigJSON.abraConfig.version && config.ConfigJSON.abraConfig.version === 'current')
      await phaserUpdate();
    else if (config.ConfigJSON.abraConfig && config.ConfigJSON.abraConfig.version)
      await phaserUpdate(config.ConfigJSON.abraConfig.version);

    pluginLoader();

    server.listen(config.Port, () => {
      console.log(`Abra  `.cyan.bold.underline + `${version}`.yellow.bold + `\n\nServer started on port`.cyan.bold.underline + `:  `.green.bold + `${config.Port}`.yellow.bold);
    });

    //load plugins here

    console.log(config.ConfigJSON.abraConfig)

  } else {
    setTimeout(async function () {
      await callbackPhaserConfig(callback);
    }, 0);
  }
}
callbackPhaserConfig();

//sockets
require('./socket.io').socket(io);

module.exports = { router, server, app }
