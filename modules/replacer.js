const parser = require('expr-eval').Parser;
let mathObj;
const replaceAll = ((objectTest, mapObj) => {
  let firstRun = 0;
  let operation, end, newBegin;
  let str = JSON.stringify(objectTest);
  let newStr;
  let arrayCreate = str.match(/\"\[[^-]+]-\d+\"/g);

  if (arrayCreate) {
    arrayCreate.forEach((arr) => {

      loop = arr.match(/-\d+/);
      arg = arr.match(/[^"\[\]\d-]+/)

      loop = loop[0].substr(1);

      let argArr = new Array();
      for (i = 0; i < loop; i++) {
        argArr.push(arg[0]);
      }

      let regEx = /\"\[[^-]+]-\d+\"/;

      strr = str.replace(regEx, '[' + argArr + ']');
      str = strr;
    })

  }

  var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
  let begin;

  let escapedObj = new Object();

  for (var key in Object.keys(mapObj)) {
    match = Object.keys(mapObj)[key];
    escapedObj['\\' + match] = mapObj[match]
  }

  mapObj = escapedObj;

  return str.replace(re, function (matched, keys) {

    regexp = /[\d]+[+*\-.\/_]+[\d]+/g;

    if (typeof mapObj['\\' + matched] === "string" && mapObj['\\' + matched].match(regexp)) {

      if (!mapObj[matched]) {

        mapObj[matched] = new Object({ begin: 0 });
        mapObj[matched].run = {}
        mapObj[matched].runnum = {}
      }
      let splitEq = mapObj['\\' + matched].split(/(?=\+)|(?=-)|(?=\*)|(?=\/)/g);

      splitEq.forEach((eq, key) => {
        if (firstRun === 1) {
          if (!mapObj[matched].begin) {
            mapObj[matched].begin = splitEq[0].match(/^\d+/)[0];

          }
          operation = eq.match(/[+*-\/]/);
          if (eq.match(/_/)) {
            let run = eq.split('_');

            if (!mapObj[matched].run[eq]) {

              if (mapObj[matched].begin == 0 && !mapObj[matched].beginCheck) {

                mapObj[matched].beginCheck = true;

              }

              mapObj[matched].run[eq] = parseInt(run[1]);
              mapObj[matched].runnum[eq] = -1;

            } else {
              end = run[0].substr(1);
            }

            if (operation) {
              if (mapObj[matched].runnum[eq] >= mapObj[matched].run[eq] - 1) {
                if (mapObj[matched].begin == 0) {

                  mapObj[matched].begin = parser.evaluate(`${mapObj[matched].begin} ${operation[0]} ${end}`)
                } else {
                  mapObj[matched].begin = parser.evaluate(`${mapObj[matched].begin} ${operation} ${end}`)

                }

                mapObj[matched].runnum[eq] = 0;
                mapObj[matched].run[eq] = run[1];
              } else {
                mapObj[matched].runnum[eq] = mapObj[matched].runnum[eq] + 1;
              }
            }
          } else {
            end = eq.match(/\d+$/);
            if (operation) {
              if (mapObj[matched].begin) {

                mapObj[matched].begin = parser.evaluate(`${mapObj[matched].begin} ${operation} ${end}`)
                firstRun = 0;
              }
            }
          }
        } else {
          firstRun = 1;
        }
      });

      if (mapObj[matched].begin == 0) {

        return '[0]';
      }

      return mapObj[matched].begin;

    } else {

      return mapObj['\\' + matched];
    }
  });

});

module.exports = {
  ReplaceAll: replaceAll
};

