let Parser = require('expr-eval').Parser;

let mathObj;

let replaceAll = ((objectTest, mapObj) => {
  //let runNum = 0;

  let operation,end,newBegin;
  let str = JSON.stringify(objectTest);
  var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
  let begin;
  return str.replace(re, function (matched, keys) {
    
    regexp = /[\d]+[+*\-.\/_]+[\d]+/g;

    if (mapObj['\\' + matched].match(regexp)) {

      if(!mapObj[matched]){
        mapObj[matched] = new Object({begin:0});
       mapObj[matched].run = {}
       mapObj[matched].runnum = {}
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
       
           // let runNumber =  run[1];
           if(!mapObj[matched].run[eq]) {
            mapObj[matched].run[eq] = run[1];
            mapObj[matched].runnum[eq] = 0;
            
    
           }
           end = run[0].substr(1);
            if(operation){
             
           
          // begin = Parser.evaluate(`${begin} ${operation} ${end[0]}`)
      //        console.log(mapObj[matched].runnum);
            
           if(mapObj[matched].runnum[eq] >= mapObj[matched].run[eq]){

            console.log(`FUCK ${mapObj[matched].begin } ${operation} ${end}`)
           
            mapObj[matched].begin  = Parser.evaluate(`${mapObj[matched].begin } ${operation} ${end}`)
            mapObj[matched].runnum[eq] = 0;
            mapObj[matched].run[eq] = run[1];
            
  
           } else {
             
              mapObj[matched].runnum[eq] =  mapObj[matched].runnum[eq] + 1;
              console.log(mapObj[matched].runnum[eq]);
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

})

//objectTests = replaceAll(objectTest, varObj);


//console.log(JSON.parse(objectTests));



module.exports = {
  replaceAll: replaceAll
};

