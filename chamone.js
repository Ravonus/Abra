const fs = require('fs');
dirPath = __dirname;
let newData;

fs.readFile(`${dirPath}/abraLoadAssetFunction.js`, "utf8", function(err, data) {
  
  newData = data.replace(/\s+/g, " ");

  let configString = fs.readFileSync(`${dirPath}/abraConfig.json`);

configObj = JSON.parse(configString);


console.log(newData);
configObj.abraLoad = newData

fs.writeFile(`${dirPath}/testfunction.json`, JSON.stringify(configObj, undefined, 2) , (err) => {
  if (err) {
    console.log('Unable to append to server.log.');
  }
});

});


