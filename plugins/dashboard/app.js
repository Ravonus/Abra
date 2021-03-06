'use strict';

const hbs = require('hbs'),
  express = require('express'),
  vueLoad = require('./vue/vueLoad'),
  { projects } = require('../../config/abraConfig'),
  path = require('path');

const { app } = require('../../app');

var projectNames = Object.keys(projects);

var elements = {
  projectNames
}

app.use('/dashboard', express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerPartials(__dirname + '/views/pages');

vueLoad();

module.exports = () => {

  app.get('/dashboard', (req, res) => {

    var index = path.join(__dirname, '/views/index.hbs');
    res.render(index, elements);

  });

};