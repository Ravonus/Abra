var exec = require('child_process').exec,
fs = require('fs'),
path = require('path');

let phaserUpdate = async function (version) {
  return new Promise((resolve, reject, ) => {

    verion = version ? version : '';

    var dir = path.join(__dirname, '../');

    console.log('RUNNING UPDATE');

    let child = exec(` npm i phaser ` + version,
      async function (error, stdout, stderr) {

        await fs.copyFileSync(path.join(dir, '/node_modules/phaser/dist/phaser.js'), path.join(dir, '/public/js/phaser.js'));
        let phaserArcade = await fs.readFileSync(path.join(dir, '/node_modules/phaser/dist/phaser-arcade-physics.js'), 'utf8');

        var phaserReplace = await phaserArcade.replace(/console.log.apply\(console, args\)/, "args[0] = args[0].replace(/\%c \%c \%c \%c \%c /, '%c %c %c %c %c Abra presents: '); args[0] += ' https://technomancy.it'; console.log.apply(console, args)");

        await fs.writeFileSync( path.join(dir, '/public/js/phaser-arcade-physics.min.js'), phaserReplace);

        resolve('done');
        if (error !== null) {
          reject(error);
          console.log('exec error: ' + error);
        }
      });

  })
};

module.exports = phaserUpdate;
