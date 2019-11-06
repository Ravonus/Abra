const fs = require('fs'),
  path = require('path');

//custom variables

const abraConfig = require(path.join('../', '/config/', 'abraConfig.json')).abraConfig;

console.log(abraConfig)


const pluginPath = abraConfig.pluginPath ? path.join(abraConfig.pluginPath) : path.join('./', 'plugins')

let pluginLoader = async (directory, file) => {

  let grabPlugins = () => {

    let plugins = fs.readdirSync(pluginPath);

    console.log(plugins)

    plugins.forEach(file => {

      if (fs.lstatSync(`${pluginPath}${file}`).isDirectory()) pluginLoader(`${pluginPath}${file}/`, file)

    });

  }

  if (!directory) grabPlugins();

  if (directory) {
    let pluginFiles = await fs.readdirSync(path.join(directory));

    let module, moduleConfig;

    if (pluginFiles.includes('config.json'))
      moduleConfig = require(path.join(`../`, directory, '/config.json'));

      if(!global.plugins) global.plugins = {};

      if(moduleConfig && !moduleConfig.noRun && moduleConfig.enabled) {

      global.plugins[file] = moduleConfig.filename ? require(`../${directory}/${moduleConfig.filename}`) : require(`../${directory}app`);
     await  global.plugins[file]();
      }

      else if(moduleConfig && moduleConfig.enabled)

      global.plugins[file] = moduleConfig && moduleConfig.filename ? require(`../${directory}/${moduleConfig.filename}`) : require(`../${directory}app`);


  }

}

module.exports = pluginLoader;