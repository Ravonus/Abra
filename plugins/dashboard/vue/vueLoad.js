const fs = require('fs'),
path = require('path');

//custom modules

const asyncForEach = require('../../../modules/asyncForEach');

let vueLoad = async () => {

  let components = await fs.readdirSync(`${__dirname}/components`);

  let vueComponents = {};


  async function checkFiles(type, component, arr) {

    await asyncForEach(arr, async file => {

      var content = await eval(fs.readFileSync(`${__dirname}/components/${component}/${type}/${file}`, 'utf8'));

      console.log(content);
      console.log(type);
      console.log(component);

      vueComponents[component][type] = await Object.assign(vueComponents[component][type], content);
      

    });

    return vueComponents[component][type];

  }


  await asyncForEach(components, async (component) => {

    if (!vueComponents[component]) vueComponents[component] = { data: {}, methods: {} };

    let app = await fs.readFileSync(`${__dirname}/components/${component}/app.js`, 'utf8');

    var dataFiles = await fs.readdirSync(`${__dirname}/components/${component}/data`);

    var methodsFiles = await fs.readdirSync(`${__dirname}/components/${component}/methods`);


    vueComponents[component].data = await checkFiles('data', component, dataFiles);
    vueComponents[component].methods = await checkFiles('methods', component, methodsFiles);

    console.log("AD")

    console.log(vueComponents[component].methods.testMethod.toString());

    var methodNames = Object.keys(vueComponents[component].methods);

    var functions = '';

    await asyncForEach(methodNames, async name => {
        functions += `${name}:${vueComponents[component].methods[name]},` + '\n';
    });

    console.log(functions)

    app = await app.replace(/data:[ ]?{([^}]*)}/g, `data:{${JSON.stringify(vueComponents[component].data).replace('{','')}`);
    app = await app.replace(/methods:[ ]?{([^}]*)}/, `methods:{${functions}}`);

    vueComponents[component] = app;

  });


  var vueComponentsNames = Object.keys(vueComponents);

  var contents = '';

  await asyncForEach(vueComponentsNames, async name => {

    if(vueComponents[name])
    contents += vueComponents[name];

  });

  if(contents)
  await fs.writeFileSync(path.join(__dirname, '../', '/public/assets/js/vueScripts.js'), contents);


};

module.exports = vueLoad;