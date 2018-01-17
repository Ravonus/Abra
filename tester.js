let Parser = require('expr-eval').Parser;

let mathObj;

let objectTest = {
  test1: {
    erg: "1",
    erg2: "${test}"
  },
  test2: {
    erg: "${test}",
    erg2: "2"
  },
  test3: {
    erg: "${test}",
    erg2: "2",
    "erg3": "123132 123213 ${test} ${math} ${test2}  ${test} toob ${math} chamone ${math}",
    "erg4": "123132 123213 ${test} ${math} ${test2}  ${test} toob ${math} chamone ${math}",
    "erg5": "${math2} ${math2} ${math2}",
    "math": "${math}"
  }
}

var hrrm = 'test';
var regexstring = '\\${' + hrrm + '}';
var varObj = {
  '\\${test}': "FUCK",
  '\\${test2}': "fuck2",
  '\\${math}': "",
  '\\${math2}': "1000"

};
function replaceAll(objectTest, mapObj) {
  let runNum = 0;
  let operation,end,newBegin;
  let str = JSON.stringify(objectTest);
  var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
  let begin;
  return str.replace(re, function (matched, keys) {
    
    regexp = /[\d]+[+*\-.\/_]+[\d]+/g;

    if (mapObj['\\' + matched].match(regexp)) {

      if(!mapObj[matched]){
        mapObj[matched] = new Object({begin:0});
      }
     
        
      
   //   if(!mathObj) {
 
    //  console.log(Object.keys(mapObj['\\' + matched]));
     // console.log(Object.keys(mapObj)[mapObj['\\' + matched]]);
      let splitEq = mapObj['\\' + matched].split(/(?=\+)|(?=-)|(?=\*)|(?=\/)/g);
    //    console.log(splitEq);
     
        splitEq.forEach( (eq, key) => {

          if(!mapObj[matched].begin){
          mapObj[matched].begin  = splitEq[0].match(/^\d+/)[0];
          }

          
          operation = eq.match(/[+*-\/]/);

          if(eq.match(/_/)){
            let run = eq.split('_');

            let runNumber =  run[1];
            end = run[0].substr(1);
    

            if(operation){
             
           
          // begin = Parser.evaluate(`${begin} ${operation} ${end[0]}`)

            
           if(runNum >= runNumber-1){
      
            mapObj[matched].begin  = Parser.evaluate(`${mapObj[matched].begin } ${operation} ${end}`)
            runNum = 0
  
           } else {
             
             runNum++;
           }

            }

          }else {
        
            end = eq.match(/\d+$/);
   
      
            if(operation){
              if (mapObj[matched].begin){

                mapObj[matched].begin  = Parser.evaluate(`${mapObj[matched].begin} ${operation} ${end}`)
              }
          
              
            
            }
          
          }

        })
        
        return mapObj[matched].begin;
  
        
        equations = mapObj['\\' + matched].match(regexp);
        let firstNumber = equations[0].match(/^[^\D]+/)[0];
     //   console.log(firstNumber)
        mathObj = new Object();
      //  console.log(equations);
       
   //   }

      return mapObj['\\' + matched];
      
    } else {
      
      return mapObj['\\' + matched];
    }
  });

}

objectTests = replaceAll(objectTest, varObj);


console.log(JSON.parse(objectTests));