const ngrok = require('ngrok'),
fs = require('fs');


const conf = require('./config.json');

let ngrokFunc = async () => {

  console.log(abraConfig)

  const url = await ngrok.connect({
    proto: 'http',
    addr: abraConfig.phaserPort, // port or network address, defaults to 80
    authtoken: conf.token, // your authtoken from ngrok.com
    region: 'us', // one of ngrok regions (us, eu, au, ap), defaults to us
    onStatusChange: status => {console.log(status, " <-- status")}, // 'closed' - connection is lost, 'connected' - reconnected
    onLogEvent: async data => {

      let checkData = data.match(/https:\/\/[^\n]*/);
      if(checkData && checkData[0]) {
        var contents;
        console.log(`${__dirname}/public/js/sockets.js`)
        if(await fs.existsSync(`./public/js/sockets.js`)) contents = await fs.readFileSync(`./public/js/sockets.js`, 'utf8');

        if(contents) {
        contents = contents.replace(/^((?!\/\/var).)* socket = io\(\'[^;]+/gm, `var socket = io('${checkData[0]}');`);
        fs.writeFileSync(`./public/js/sockets.js`, contents, 'utf8');
        }
        console.log(checkData[0]);

      }
      
     // console.log(data)
    
    
    }, // returns stdout messages from ngrok process
});

}

module.exports = ngrokFunc;