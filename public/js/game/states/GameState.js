
var GameState = {

  create: function () {

    let testfunction = function (spriteAttributes) {

      var lastPosX, lastPosY, lastSclX, lastSclY, lastAnchX, lastAnchY, lastPivX, lastPivY,Ang,Tnt;

      for (var key in Object.keys(spriteAttributes)) {
        var arrayLengths = new Array();
        spriteName = Object.keys(spriteAttributes)[key];
        spriteNameAsset = Object.keys(spriteAttributes)[key];

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
             

            }
          }
        } else {
          spriteAttributes[spriteName].position = new Object();
          spriteAttributes[spriteName].position.x = [0];
          arrayLengths.push(spriteAttributes[spriteName].position.x.length);
          spriteAttributes[spriteName].position.y = [0];
          arrayLengths.push(spriteAttributes[spriteName].position.y.length);
          
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

        if (spriteAttributes[spriteName].tint) {
          if (spriteAttributes[spriteName].tint) {
            if (!Array.isArray(spriteAttributes[spriteName].tint)) {
              spriteAttributes[spriteName].tint = [spriteAttributes[spriteName].tint];
              arrayLengths.push(spriteAttributes[spriteName].tint.length);
            } else {
              spriteAttributes[spriteName].tint = spriteAttributes[spriteName].tint;
              arrayLengths.push(spriteAttributes[spriteName].tint.length);
            }
          }
        }

if (arrayLengths.length > 0) {
          arrayLengths.sort(function (a, b) { return b - a });
          


        } else {
          arrayLengths.push('1');

        }

        spriteNameAsset = spriteName;

        for (key = 0; key < arrayLengths[0]; key++) {
            
          if (spriteAttributes[spriteName].position.x && spriteAttributes[spriteName].position.x[key]) {

            lastPosX = spriteAttributes[spriteName].position.x[key];
            if (spriteAttributes[spriteName].position.x.length > 1) {
              isLoop = true;
            }
          } else {


            if (lastPosX) {

            } else {

            };

          };
         
          if (spriteAttributes[spriteName].position.y && spriteAttributes[spriteName].position.y[key]) {
              
            lastPosY = spriteAttributes[spriteName].position.y[key];

            if (spriteAttributes[spriteName].position.y.length > 1) {
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
              if (spriteAttributes[spriteName].anchor.x.length > 1) {
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
              if (spriteAttributes[spriteName].anchor.y.length > 1) {
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
              if (spriteAttributes[spriteName].scale.x.length > 1) {
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
              if (spriteAttributes[spriteName].scale.y.length > 1) {
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
              if (spriteAttributes[spriteName].pivot.x.length > 1) {
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

              if (spriteAttributes[spriteName].pivot.y.length > 1) {
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

          if (spriteAttributes[spriteName].angle && spriteAttributes[spriteName].angle[key]) {

            Ang = spriteAttributes[spriteName].angle[key];
            if (spriteAttributes[spriteName].angle.length > 1) {
              isLoop = true;
            }
          } else {
            spriteAttributes[spriteName].angle = {};



          }
          console.log(Tnt)
          spriteAttributes[spriteName].tint = Math.random() * 0xffffff;
          if (spriteAttributes[spriteName].tint && spriteAttributes[spriteName].tint[key]) {

            Tnt = spriteAttributes[spriteName].tint[key];
            if (spriteAttributes[spriteName].tint.length > 1) {
              isLoop = true;
            }
          } else {
            spriteAttributes[spriteName].tint = {};
          }

          

          
      

          
          if (isLoop) {

            
            spriteNameAsset = key + '-' + spriteName;

          } 

          
          
         
           game[spriteNameAsset] = game.add.sprite(parseInt(lastPosX), parseInt(lastPosY), spriteName);


   if(lastAnchX){
  game[spriteNameAsset].anchor.x = parseInt(lastAnchX);
}
    if(lastAnchY){
      game[spriteNameAsset].anchor.y = parseInt(lastAnchY);
    }

    if(lastSclX){
      game[spriteNameAsset].scale.x = parseInt(lastSclX);
    }

    if(lastSclY){
       game[spriteNameAsset].scale.y = parseInt(lastSclY);
    }

    if(lastPivX){
        game[spriteNameAsset].pivot.x = parseInt(lastPivX);
    }

        if(lastPivY){
           game[spriteNameAsset].pivot.y = parseInt(lastPivY);
        }
         
        if(Ang){
            game[spriteNameAsset].angle = parseInt(Ang);
        }

        if(Tnt){
          game[spriteNameAsset].tint = parseInt(Tnt);
        }

       

        

       

       




         lastPosX = undefined;
         lastPosY = undefined;
        lastAnchX = undefined;
        lastAnchY = undefined;
        lastSclX = undefined;
        lastSclY = undefined;
        Ang = undefined;
        Tnt = undefined;




        }

      }



    }

    spriteAttributes = {
      "sprite1": {
        "position": {
          "x": [100, 300, 400],
          "y": [100,500]
          
    
        },
        "anchor": {
          "x": [0.5],
          "y": [0.5] 
        },
        "scale": {
          "x": [4, 5],
          "y": [2]
        },

        "tint": []


        
          
        
      },
      "sprite2": {
        "position":{
          "x": [900,900],
          "y":[200,0]
          
        },
        "pivot":{
          "x": [200],
          "y": [25]
        
        },
        "angle": 45 
          
        
       
       }
      
    
    }
    
    testfunction(game.phaserConfig.assets.createMenu);

    
        },


  update: function () {


  },
  render: function () {

  }
  };

