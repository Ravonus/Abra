let testfunction = function (spriteAttributes) {

  var lastPosX, lastPosY, lastSclX, lastSclY, lastAnchX, lastAnchY, lastPivX, lastPivY;

  for (var key in Object.keys(spriteAttributes)) {
    var arrayLengths = new Array();
    spriteName = Object.keys(spriteAttributes)[key];
    spriteNameAsset = Object.keys(spriteAttributes)[key];
    // i think there will be a issue if no positon or the other object is assigned. WE will work at that after we do this though. WE can just test it.
 var isLoop = false;
    if (spriteAttributes[spriteName].position) {
      if (spriteAttributes[spriteName].position.x) {
        if (!Array.isArray(spriteAttributes[spriteName].position.x)) {
          spriteAttributes[spriteName].position.x = [spriteAttributes[spriteName].position.x];

          arrayLengths.push(spriteAttributes[spriteName].position.x.length);

        } else {
          arrayLengths.push(spriteAttributes[spriteName].position.x.length);
          
    
        }
      }

      if (spriteAttributes[spriteName].position.y) {
        if (!Array.isArray(spriteAttributes[spriteName].position.y)) {
          spriteAttributes[spriteName].position.y = [spriteAttributes[spriteName].position.y];
          arrayLengths.push(spriteAttributes[spriteName].position.y.length);
        } else {
          arrayLengths.push(spriteAttributes[spriteName].position.y.length);
         console.log(spriteAttributes[spriteName].position.y.length)
          
        }
      }
    } else {
      spriteAttributes[spriteName].position = new Object();
      spriteAttributes[spriteName].position.x = [0];
      arrayLengths.push(spriteAttributes[spriteName].position.x.length);
      spriteAttributes[spriteName].position.y = [0];
      arrayLengths.push(spriteAttributes[spriteName].position.y.length);
      // with position we want an else because we need to set 0 - sprite creation requires a default postion. Since other attributes are add-ons we can just exclude the code if not set.
    }
    if (spriteAttributes[spriteName].anchor) {

      if (spriteAttributes[spriteName].anchor.x) {

        if (!Array.isArray(spriteAttributes[spriteName].anchor.x)) {

          spriteAttributes[spriteName].anchor.x = [spriteAttributes[spriteName].anchor.x];
          arrayLengths.push(spriteAttributes[spriteName].anchor.x.length);
        } else {

          arrayLengths.push(spriteAttributes[spriteName].anchor.x.length);
        }
      }

      if (spriteAttributes[spriteName].anchor.y) {
        if (!Array.isArray(spriteAttributes[spriteName].anchor.y)) {
          spriteAttributes[spriteName].anchor.y = [spriteAttributes[spriteName].anchor.y];
          arrayLengths.push(spriteAttributes[spriteName].anchor.y.length);
        } else {
          arrayLengths.push(spriteAttributes[spriteName].anchor.y.length);
        }
      }
    }
    if (spriteAttributes[spriteName].scale) {
      if (spriteAttributes[spriteName].scale.x) {
        if (!Array.isArray(spriteAttributes[spriteName].scale.x)) {
          spriteAttributes[spriteName].scale.x = [spriteAttributes[spriteName].scale.x];
          arrayLengths.push(spriteAttributes[spriteName].scale.x.length);
        } else {
          spriteAttributes[spriteName].scale.x = spriteAttributes[spriteName].scale.x;
          arrayLengths.push(spriteAttributes[spriteName].scale.x.length);
        }
      }


      if (spriteAttributes[spriteName].scale.y) {
        if (!Array.isArray(spriteAttributes[spriteName].scale.y)) {
          spriteAttributes[spriteName].scale.y = [spriteAttributes[spriteName].scale.y];
          arrayLengths.push(spriteAttributes[spriteName].scale.y.length);
        } else {
          spriteAttributes[spriteName].scale.y = spriteAttributes[spriteName].scale.y;
          arrayLengths.push(spriteAttributes[spriteName].scale.y.length);
        }
      }
    }
    if (spriteAttributes[spriteName].pivot) {
      if (spriteAttributes[spriteName].pivot.x) {
        if (!Array.isArray(spriteAttributes[spriteName].pivot.x)) {
          spriteAttributes[spriteName].pivot.x = [spriteAttributes[spriteName].pivot.x];
          arrayLengths.push(spriteAttributes[spriteName].pivot.x.length);
        } else {
          spriteAttributes[spriteName].pivot.x = spriteAttributes[spriteName].pivot.x;
          arrayLengths.push(spriteAttributes[spriteName].pivot.x.length);
        }
      }

      if (spriteAttributes[spriteName].pivot.y) {
        if (!Array.isArray(spriteAttributes[spriteName].pivot.y)) {
          spriteAttributes[spriteName].pivot.y = [spriteAttributes[spriteName].pivot.y];
          arrayLengths.push(spriteAttributes[spriteName].pivot.y.length);
        } else {
          spriteAttributes[spriteName].pivot.y = spriteAttributes[spriteName].pivot.y;
          arrayLengths.push(spriteAttributes[spriteName].pivot.y.length);
        }
      }
    }

    if (spriteAttributes[spriteName].angle) {
      if (spriteAttributes[spriteName].angle) {
        if (!Array.isArray(spriteAttributes[spriteName].angle)) {
          spriteAttributes[spriteName].angle = [spriteAttributes[spriteName].angle];
          arrayLengths.push(spriteAttributes[spriteName].angle.length);
        } else {
          spriteAttributes[spriteName].angle = spriteAttributes[spriteName].angle;
          arrayLengths.push(spriteAttributes[spriteName].angle.length);
        }
      }
    }


    //now lets test.

    //       game[spriteName] = game.add.sprite(spriteAttributes[spriteName].position.x, spriteAttributes[spriteName].position.y, spriteName);


    // game[sprite].position.x = spriteAttributes.position.x;
    // game[sprite].position.y = spriteAttributes.position.y;
    // game[sprite].anchor.x = spriteAttributes.anchor.x;
    // game[sprite].anchor.y = spriteAttributes.anchor.y;
    // game[sprite].scale.x = spriteAttributes.scale.x;
    // game[sprite].scale.y = spriteAttributes.scale.y;
    // game[sprite].pivot.x = spriteAttributes.pivot.x;
    // game[sprite].pivot.y = spriteAttributes.pivot.y;
    // // game[sprite].rotation.x = spriteAttributes.rotation.x;
    // // game[sprite].rotation.y = spriteAttributes.rotation.y;
    // game[sprite].angle = spriteAttributes.angle;

   

   
    if (arrayLengths.length > 0) {
      arrayLengths.sort(function (a, b) { return b - a });
      console.log('FUCK' + arrayLengths);


    } else {
      arrayLengths.push('1');
      
    }

      spriteNameAsset = spriteName;
    
    for (key = 0; key < arrayLengths[0]; key++) {
    
//       if (arrayLengths[key] > 1) {
//      spriteNameAsset = key + '-' + spriteName;

//       }
//  console.log(spriteNameAsset)
        //position
      if (spriteAttributes[spriteName].position.x && spriteAttributes[spriteName].position.x[key]) {
        
        lastPosX = spriteAttributes[spriteName].position.x[key];
        if (spriteAttributes[spriteName].position.x.length > 1){
          isLoop = true;
        }
      } else {
        
        if (lastPosX) {
         
        } else {
          
        };

      };
       
      if (spriteAttributes[spriteName].position.y && spriteAttributes[spriteName].position.y[key]) {
        
        lastPosY = spriteAttributes[spriteName].position.y[key];
       
        if (spriteAttributes[spriteName].position.y.length > 1){
          isLoop = true;
         
        }
      } else {
        if (lastPosY) {
          
        } else {
          
        };
      };
      // anchor
      if (spriteAttributes[spriteName].anchor) {
        if (spriteAttributes[spriteName].anchor.x && spriteAttributes[spriteName].anchor.x[key]) {
          
          lastAnchX = spriteAttributes[spriteName].anchor.x[key];
          if (spriteAttributes[spriteName].anchor.x.length > 1){
            isLoop = true;
          }
        } else {
          
          if (spriteAttributes[spriteName].anchor.y && spriteAttributes[spriteName].anchor.y[key]) {
            if (!lastAnchX) {
              lastAnchX = 0;

            }
           
          } else {
            
            delete spriteAttributes[spriteName].anchor.y
          }
        };
        
        if (spriteAttributes[spriteName].anchor.y && spriteAttributes[spriteName].anchor.y[key]) {
          
          lastAnchY = spriteAttributes[spriteName].anchor.y[key];
          if (spriteAttributes[spriteName].anchor.y.length > 1){
            isLoop = true;
          }
        } else {
          
          if (spriteAttributes[spriteName].anchor.x && spriteAttributes[spriteName].anchor.x[key]) {
            if (!lastAnchY) {
              lastAnchY = 0;
            }
            
          } else {
            
            delete spriteAttributes[spriteName].anchor.x
          }
        };

      };
        //scale
      if (spriteAttributes[spriteName].scale) {
        if (spriteAttributes[spriteName].scale.x && spriteAttributes[spriteName].scale.x[key]) {
          
          lastSclX = spriteAttributes[spriteName].scale.x[key];
          if (spriteAttributes[spriteName].scale.x.length > 1){
            isLoop = true;
          }
        } else {
          if (spriteAttributes[spriteName].scale.y && spriteAttributes[spriteName].scale.y[key]) {
            if (!lastSclX) {
              lastSclX = 0;

            }
            
          } else {
            
            delete spriteAttributes[spriteName].scale.y
          }
        };
        
        if (spriteAttributes[spriteName].scale.y && spriteAttributes[spriteName].scale.y[key]) {
         
          lastSclY = spriteAttributes[spriteName].scale.y[key];
          if (spriteAttributes[spriteName].scale.y.length > 1){
            isLoop = true;
          }
        } else {
          
          if (spriteAttributes[spriteName].scale.x && spriteAttributes[spriteName].scale.x[key]) {
            if (!lastSclY) {
              lastSclY = 0;
            }
           
          } else {
            
            delete spriteAttributes[spriteName].scale.x
          }
        };

      };
        //pivot
      if (spriteAttributes[spriteName].pivot) {
        if (spriteAttributes[spriteName].pivot.x && spriteAttributes[spriteName].pivot.x[key]) {
          
          lastPivX = spriteAttributes[spriteName].pivot.x[key];
          if (spriteAttributes[spriteName].pivot.x.length > 1){
            isLoop = true;
          }
        } else {
          
          if (spriteAttributes[spriteName].pivot.y && spriteAttributes[spriteName].pivot.y[key]) {
            if (!lastPivX) {
              lastPivX = 0;

            }
          
          } else {
            
            delete spriteAttributes[spriteName].pivot.y
          }

        };
        
        if (spriteAttributes[spriteName].pivot.y && spriteAttributes[spriteName].pivot.y[key]) {
          
          lastPivY = spriteAttributes[spriteName].pivot.y[key];
          
          if (spriteAttributes[spriteName].pivot.y.length > 1){
            isLoop = true;
            
          }
        } else {
          
          if (spriteAttributes[spriteName].pivot.x && spriteAttributes[spriteName].pivot.x[key]) {
            if (!lastPivY) {
              lastPivY = 0;
            }
            
          } else {
            
            delete spriteAttributes[spriteName].pivot.x
          }
        };

      };
        //angle
      
      if ( spriteAttributes[spriteName].angle && spriteAttributes[spriteName].angle[key]) {
        
        Ang = spriteAttributes[spriteName].angle[key];
        if (spriteAttributes[spriteName].angle.length > 1){
          isLoop = true;
        }
      } else {
        spriteAttributes[spriteName].angle = {};



      }
       console.log(isLoop)
 if (isLoop) 
  {
 
     console.log('ran')
        spriteNameAsset = key + '-' + spriteName;
  
         }
   console.log(spriteNameAsset)
        }
}


    };



  


    
    
    



spriteAttributes = {
  "sprite1": {
    "position": {
      
      "y": [43, 65]

    },
    "anchor": {
      "x": [12],
      "y": [55] 
    },
    "scale": {
      "x": [14],
      "y": [58]
    },
    "pivot": {
      "x": [26]
      
    }
  },
  "sprite2": {
    "position":{
      "x": 12
    },
   "pivot": {
     "y": [12]
   }
  }

}

testfunction(spriteAttributes);
