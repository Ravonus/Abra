const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const Parser = require('expr-eval').Parser;
const app = express();
const replacer = require('./modules/replacer.js')
const config = require('./config/config')
const lister = require('./modules/lister')
const dirPath = __dirname

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

app.get('/', (req, res) => {
  res.render('index.hbs', { img: JSON.stringify(config.Filelist), config: JSON.stringify(config.PhaserConfig) });

});

app.listen(config.Port, () => {
  console.log(`Server started on port:${config.Port}.`);
});