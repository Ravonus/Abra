//tool to auto generate json configs for your sprites.

const prompt = require('prompt');
const fs = require('fs');
const colors = require('colors');
const lister = require('./../modules/lister');
const sortObj = require('sort-object');
let configObj, spritesheet, askArray, askScale, templateFile, objectName, attributeArray;
let fileAddArray = {};
let lastAddArray = {};
let allTemplate = false;
let allAttributes = false;

//functions

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

if (fs.existsSync(`./config/abraConfig.json`)) {
  let configString = fs.readFileSync(`./config/abraConfig.json`);

  if (configString) {
    configObj = JSON.parse(configString);

    if (configObj.jsonConfig) {
      //json config within main config file. Instead of stand-alone.
      return;
    }
  }
}

function listDir(callback) {

  fs.readdir('./config/templates', (err, files) => {

    if (files) {
      if (fs.existsSync(`./config/jsonConfig.json`)) {
        configString = fs.readFileSync(`./config/jsonConfig.json`);

        return;

      } else {
        // config ask basic questions and build basic JSON.
        prompt.delimiter = colors.green(": ");

        let schema = {
          properties: {}
        };
        let newFileArray = [];
        let fileCount = 0;
        fileCallBack = (callback) => {
          files.forEach((file) => {
            newFileArray.push(file.replace(/\.[^\/.][^,\s]+/gi, ""));
            fileCount++;

          });
          if (fileCount >= files.length) {

          } else {
            fileCallBack()
          }
        }

        fileCallBack();

        let fileStr = newFileArray.join(' ');
        let regExPattern = new RegExp(newFileArray.join("|"), "gi");

        if (files.length > 0) {

          schema.properties['template'] = {
            pattern: regExPattern,
            description: 'Which Template would you like'.gray + '? '.green + `${toTitleCase(fileStr)}`.cyan.bold.underline

          }
        }
        if (schema.properties['template']) {
          schema.properties['assetPath'] = {

            pattern: /((?:[^\/]*\/)*)(.*)/,
            description: 'Asset Path for generated config.'.cyan,
            required: true,
            ask: function () {
              if (!prompt.history('template').value) return true;
            }
          }
          schema.properties['attributes'] = {
            pattern: /^(?:Yes|y|No|n)$/i,
            description: 'Fill out all attributes in each group'.gray + '? '.green + '('.magenta + ' Yes'.blue + ' or '.underline.gray + 'No'.yellow + ' )'.magenta,
            required: true,
            ask: function () {

              if (!prompt.history('template').value) {

                return true;
              }
            }
          }
        }

        schema.properties['arraySize'] = {
          pattern: /\d/i,
          description: 'Size of array'.gray + '? '.green,
          ask: function () {

            if (!prompt.history('template').value) return true;
          }
        }

        schema.properties['spritesheet'] = {
          pattern: /^(?:Yes|y|No|n)$/i,
          description: 'Generate default Spritesheet info?'.cyan + '('.magenta + ' Yes'.blue + ' or '.underline.gray + 'No'.yellow + ' )'.magenta,
          required: true,
          ask: () => {

            if (!prompt.history('template').value) return true;
          }
        }

        schema.properties['group'] = {
          description: 'Please enter group name of these objects.'.cyan,
          required: true,
          ask: () => {
            if (!prompt.history('template').value) return true;
          }
        }

        if (configObj.jsonGenerator) {
          // if (prompt.history('Attributes2').value == 'y' || prompt.history('Attributes2').value == 'yes') askAttribute;
          for (let key in Object.keys(configObj.jsonGenerator)) {
            attributeName = Object.keys(configObj.jsonGenerator)[key];
            schema.properties[attributeName] = {
              pattern: /^(?:Yes|y|No|n)$/i,
              description: toTitleCase(attributeName).gray + '? '.green + '('.magenta + ' Yes'.blue + ' or '.underline.gray + 'No'.yellow + ' )'.magenta,
              required: true,
              ask: function () {
                if (allTemplate) {
                  if (prompt.history('template').value == "") {
                    allTemplate = true;
                    return true;
                  }
                } else {
                  if (prompt.history('template').value == "") {
                    return true
                  }
                }

              }
            }

            if (configObj.jsonGenerator[attributeName]['attributes']) {

              for (let key2 in Object.keys(configObj.jsonGenerator[attributeName]['attributes'])) {

                attributeType = Object.keys(configObj.jsonGenerator[attributeName]['attributes'])[key2];
                schema.properties[attributeName + attributeType] = {
                  pattern: /\d/i,
                  description: 'Enter Number for' + toTitleCase(attributeName) + ' ' + attributeType.gray + '? '.green,
                  name: attributeName,
                  ask: function () {
                    if (
                      !allTemplate &&
                      prompt.history('attributes') &&
                      prompt.history('attributes').value.substring(0, 1).toLowerCase() == 'y' &&
                      prompt.history(this.name).value.substring(0, 1).toLowerCase() == 'y'
                    ) {
                      return true;
                    }
                  }
                }

                key2++;
              };

            } else {

            }

            key++;
          }
        }

        prompt.start();
        //   console.log('Warning Config not found.'.underline.red + ' Generating Config with prompts.'.green);
        prompt.get(schema, function (err, result) {

          if (result.template) {

            schema = {
              properties: {}
            };

            let templateFile = fs.readFileSync(`./config/templates/${result.template}.json`);
            let templateObj = JSON.parse(templateFile);

            if (templateObj.options) {
              if (templateObj.options.askArray) askArray = templateObj.options.askArray;
              if (templateObj.options.assetPath) {
                templateFiles = lister.ListFiles(templateObj.options.assetPath);

              } else {
                schema.properties['askPath'] = {
                  description: 'Enter Path of assets.'.cyan,
                  ask: () => {
                    if (askArray) return true;
                  }
                }
              }
            }


            // let files = lister.ListFiles(result.assetPath);


            schema.properties['askArray'] = {
              pattern: /\d/i,
              description: 'Enter Number of arrays'.cyan,
              ask: () => {
                if (askArray) return true;
              }
            }


            for (let key in Object.keys(configObj.jsonGenerator)) {

              attributeName = Object.keys(configObj.jsonGenerator)[key];
              if (templateObj.options) {
                if (templateObj.options['ask' + toTitleCase(attributeName)]) {
                  for (let key2 in Object.keys(configObj.jsonGenerator[attributeName].attributes)) {
                    attributeType = Object.keys(configObj.jsonGenerator[attributeName].attributes)[key2];
                    //  templateObj.options.askScale = false;


                    if (templateObj.options.askObject) {
                      //    let objectLoop = templateFiles;
                      templateFiles.forEach((templateFile) => {
                        // objectName = templateFile.replace(/\.[^\/.][^,\s]+/gi, "");

                        fileExtract = templateFile.match(/[^\\\/]+$/i);
                        objectName = fileExtract[0].match(/[^.]+/)[0];



                        schema.properties[`{${objectName}}{${attributeName}}{${attributeType}}`] = {
                          pattern: /\d/i,
                          description: `Enter Number for ${toTitleCase(objectName)} ${toTitleCase(attributeName)} `.magenta + attributeType.cyan
                        }
                      });





                      schema.properties = sortObj(schema.properties);


                    } else {
                      schema.properties[`{${attributeName}}{${attributeType}}`] = {

                        pattern: /\d/i,
                        description: `Enter Number for ${attributeName} `.magenta + attributeType.cyan
                      }

                    }


                  }
                }
              }

            }

            prompt.start();
            prompt.get(schema, function (err, result) {
              if (templateObj.options.askObject) {
                //    console.log(result);
                return;
              }
              for (let key in Object.keys(result)) {

                attributeName = Object.keys(result)[key];
                let myRegexp = /\{(.*?)\}/g;
                //  attributeArray = myRegexp.exec(attributeName);

                attributeArray = attributeName.match(myRegexp);

                let callbackArray = () => {
                  if (attributeArray) {
                 //   let x = 0;
                    templateFiles.forEach((templateFile) => {
                      fileExtract = templateFile.match(/[^\\\/]+$/i);
                      objectName = fileExtract[0].match(/[^.]+/)[0];
                      
                      if (!fileAddArray[objectName]) fileAddArray[objectName] = new Object();
                      let x = 0;
                      attributeArray.forEach((attribute) => {

                        if(x == 0) {
                          attributeBracks = attribute.slice(1, -1);
                        if (!fileAddArray[objectName][attribute]) fileAddArray[objectName][attribute] = {}
                        mainAttribute = attribute;
                        
                        x++;
                        } else {
                          mainAttributeBrack = mainAttribute.slice(1,-1);
                          fileAddArray[objectName][mainAttribute][attribute.slice(1,-1)] = result[mainAttribute+attribute];
                        }
                        // objectName = templateFile.replace(/\.[^\/.][^,\s]+/gi, "");


                   //     console.log(`${objectName} ${attribute}`);

                      });

                      //done with first foreach
                      if (lastAddArray) {
                   //     fileAddArray2 = Object.assign(fileAddArray, lastAddArray);
                      }

                    })

                  }
                }
                callbackArray();
                if (!attributeArray) callbackArray();
                // console.log(attributeArray);
              }

            });

            return;
          }

          if (result.attributes && result.attributes.toLowerCase() == 'y' || result.attributes.toLowerCase() == 'yes') {

            if (!result.arraySize) {
              result.arraySize = 0
            }

            let object = {};
            object.variables = {};
            if (result.spritesheet.toLowerCase() == 'y' || result.spritesheet.toLowerCase() == 'yes') {
              spritesheet = new Object();
              spritesheet.attributes = new Object();
            }
            let files = lister.ListFiles(result.assetPath);
            files.forEach((file) => {
              if (!file.includes(".json")) {
                fileExtract = file.match(/[^\\\/]+$/i);
                fileName = fileExtract[0].match(/[^.]+/);
                if (result.spritesheet && result.spritesheet.toLowerCase() == 'y' || result.spritesheet.toLowerCase() == 'yes') {
                  spritesheet.variables["{" + fileName[0] + "Height}"] = 128;
                  spritesheet.variables["{" + fileName[0] + "Width}"] = 64;
                  spritesheet[fileName[0]] = {
                    "height": "{" + fileName[0] + "Height}",
                    "width": "{" + fileName[0] + "Width}",
                  }

                  if (fs.existsSync(`${result.assetPath}/spritesheet.json`)) {
                    let oldConfig = fs.readFileSync(`${result.assetPath}/spritesheet.json`);
                    let oldConfigObj = JSON.parse(oldConfig);
                    let newObj = Object.assign(oldConfigObj, object);

                    fs.writeFile(`${result.assetPath}/spritesheet.json`, JSON.stringify(newObj, undefined, 2), (callback, err) => {

                    });

                  } else {

                    fs.writeFile(`${result.assetPath}/spritesheet.json`, JSON.stringify(newObj, undefined, 2), (callback, err) => {

                    });

                  }

                }

                if (!object[result.group]) {
                  object[result.group] = new Object();
                }

                object[result.group][fileName[0]] = {};
                if (result.position == 'y' || result.position == 'yes') {

                  object.variables["{posX}"] = result.positionx;
                  object.variables["{posY}"] = result.positiony;
                  object[result.group][fileName[0]]['position'] = new Object({ x: `[{posX}]-${result.arraySize}`, y: `[{posY}]-${result.arraySize}` });
                }
                if (result.anchor == 'y' || result.anchor == 'yes') {
                  object.variables["{ancX}"] = result.anchorx;
                  object.variables["{ancY}"] = result.anchory;
                  object[result.group][fileName[0]]['anchor'] = new Object({ x: `[{ancX}]-${result.arraySize}`, y: `[{ancY}]-${result.arraySize}` });

                }
                if (result.scale == 'y' || result.scale == 'yes') {
                  object.variables["{scaX}"] = result.scalex;
                  object.variables["{scaY}"] = result.scaley;
                  object[result.group][fileName[0]]['scale'] = new Object({ x: `[{scaX}]-${result.arraySize}`, y: `[{scaY}]-${result.arraySize}` });

                }
                if (result.angle == 'y' || result.angle == 'yes') {
                  object.variables["{ang}"] = result.angledegree;
                  object[result.group][fileName[0]]['angle'] = `[{ang}]-${result.arraySize}`;

                }
              }
            });

            fs.writeFile(`${result.assetPath}\config.json`, JSON.stringify(object, undefined, 2), (callback, err) => {

            });

          } else {

            let object = {};
            object.variables = {};
            if (result.spritesheet.toLowerCase() == 'y' || result.spritesheet.toLowerCase() == 'yes') {
              spritesheet = new Object();
              spritesheet.variables = new Object();
            }
            let files = lister.ListFiles(result.assetPath);
            files.forEach((file) => {
              if (!file.includes(".json")) {
                fileExtract = file.match(/[^\\\/]+$/i);
                fileName = fileExtract[0].match(/[^.]+/);
                if (result.spritesheet && result.spritesheet.toLowerCase() == 'y' || result.spritesheet.toLowerCase() == 'yes') {
                  spritesheet.variables["{" + fileName[0] + "Height}"] = 128;
                  spritesheet.variables["{" + fileName[0] + "Width}"] = 64;
                  spritesheet[fileName[0]] = {
                    "height": "{" + fileName[0] + "Height}",
                    "width": "{" + fileName[0] + "Width}",
                  }

                }

                if (!object[result.group]) {
                  object[result.group] = new Object();
                }

                object[result.group][fileName[0]] = {};
                if (result.position == 'y' || result.position == 'yes') {

                  object.variables["{posX}"] = 0;
                  object.variables["{posY}"] = 0;
                  object[result.group][fileName[0]]['position'] = new Object({ x: `[{posX}]-${result.arraySize}`, y: `[{posY}]-${result.arraySize}` });
                }
                if (result.anchor == 'y' || result.anchor == 'yes') {
                  object.variables["{ancX}"] = 0;
                  object.variables["{ancY}"] = 0;
                  object[result.group][fileName[0]]['anchor'] = new Object({ x: `[{ancX}]-${result.arraySize}`, y: `[{ancY}]-${result.arraySize}` });

                }
                if (result.scale == 'y' || result.scale == 'yes') {
                  object.variables["{scaX}"] = 0;
                  object.variables["{scaY}"] = 0;
                  object[result.group][fileName[0]]['scale'] = new Object({ x: `[{scaX}]-${result.arraySize}`, y: `[{scaY}]-${result.arraySize}` });

                }
                if (result.angle == 'y' || result.angle == 'yes') {
                  object.variables["{ang}"] = 0;
                  object[result.group][fileName[0]]['angle'] = `[{ang}]-${result.arraySize}`;

                }
              }
            });

            if (spritesheet) {
              if (fs.existsSync(`${result.assetPath}/spritesheet.json`)) {
                let spriteSheet = fs.readFileSync(`${result.assetPath}/spritesheet.JSON`);
                let oldSpriteSheet = JSON.parse(spriteSheet);
                newObj = Object.assign(oldSpriteSheet, spritesheet);
                fs.writeFile(`${result.assetPath}/spritesheet.json`, JSON.stringify(newObj, undefined, 2), (callback, err) => {

                });

              } else {

                fs.writeFile(`${result.assetPath}/spritesheet.json`, JSON.stringify(newObj, undefined, 2), (callback, err) => {

                });

              }

            }

            if (fs.existsSync(`${result.assetPath}/config.json`)) {
              let oldConfig = fs.readFileSync(`${result.assetPath}/config.json`);

              let oldConfigObj = JSON.parse(oldConfig);
              let newObj = Object.assign(oldConfigObj, object);

              fs.writeFile(`${result.assetPath}/config.json`, JSON.stringify(newObj, undefined, 2), (callback, err) => {

              });

            } else {

              fs.writeFile(`${result.assetPath}/config.json`, JSON.stringify(object, undefined, 2), (callback, err) => {

              });

            }

          }

        });
      }

    } else {
      listDir();
    }
  })
}

listDir();

