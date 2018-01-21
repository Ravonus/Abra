let testfunction = function (spriteAttributes) {

  var lastPosX, lastPosY;

  for (var key in Object.keys(spriteAttributes)) {
    var arrayLengths = new Array();
      spriteName = Object.keys(spriteAttributes)[key];
        
// i think there will be a issue if no positon or the other object is assigned. WE will work at that after we do this though. WE can just test it.
            

          if(spriteAttributes[spriteName].position) {
            if (spriteAttributes[spriteName].position.x) {
              if(!Array.isArray(spriteAttributes[spriteName].position.x)){
                spriteAttributes[spriteName].position.x = [spriteAttributes[spriteName].position.x];
                
                arrayLengths.push(spriteAttributes[spriteName].position.x.length);
    
              } else {
                  arrayLengths.push(spriteAttributes[spriteName].position.x.length);
              }
            }

            if (spriteAttributes[spriteName].position.y) {
              if(!Array.isArray(spriteAttributes[spriteName].position.y)){
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
            // with position we want an else because we need to set 0 - sprite creation requires a default postion. Since other attributes are add-ons we can just exclude the code if not set.
          }
        if(spriteAttributes[spriteName].anchor) {
         
            if (spriteAttributes[spriteName].anchor.x) {
             
              if(!Array.isArray(spriteAttributes[spriteName].anchor.x)){
               
                spriteAttributes[spriteName].anchor.x = [spriteAttributes[spriteName].anchor.x];
                arrayLengths.push(spriteAttributes[spriteName].anchor.x.length);
              } else {
               
                arrayLengths.push(spriteAttributes[spriteName].anchor.x.length);
              }
            }

            if (spriteAttributes[spriteName].anchor.y) {
              if(!Array.isArray(spriteAttributes[spriteName].anchor.y)){
                spriteAttributes[spriteName].anchor.y = [spriteAttributes[spriteName].anchor.y];
                arrayLengths.push(spriteAttributes[spriteName].anchor.y.length);
              } else {
                arrayLengths.push(spriteAttributes[spriteName].anchor.y.length);
              }
            }
        }
        if(spriteAttributes[spriteName].scale) {
            if (spriteAttributes[spriteName].scale.x) {
              if(!Array.isArray(spriteAttributes[spriteName].scale.x)){
                spriteAttributes[spriteName].scale.x = [spriteAttributes[spriteName].scale.x];
                arrayLengths.push(spriteAttributes[spriteName].scale.x.length);
              } else {
                spriteAttributes[spriteName].scale.x = spriteAttributes[spriteName].scale.x;
                arrayLengths.push(spriteAttributes[spriteName].scale.x.length);
              }
            }
          

            if (spriteAttributes[spriteName].scale.y) {
              if(!Array.isArray(spriteAttributes[spriteName].scale.y)){
                spriteAttributes[spriteName].scale.y = [spriteAttributes[spriteName].scale.y];
                arrayLengths.push(spriteAttributes[spriteName].scale.y.length);
              } else {
                spriteAttributes[spriteName].scale.y = spriteAttributes[spriteName].scale.y;
                arrayLengths.push(spriteAttributes[spriteName].scale.y.length);
              }
            }
          }
          if(spriteAttributes[spriteName].pivot) {
            if (spriteAttributes[spriteName].pivot.x) {
              if(!Array.isArray(spriteAttributes[spriteName].pivot.x)){
                spriteAttributes[spriteName].pivot.x = [spriteAttributes[spriteName].pivot.x];
                arrayLengths.push(spriteAttributes[spriteName].pivot.x.length);
              } else {
                spriteAttributes[spriteName].pivot.x = spriteAttributes[spriteName].pivot.x;
                arrayLengths.push(spriteAttributes[spriteName].pivot.x.length);
              }
            }

            if (spriteAttributes[spriteName].pivot.y) {
              if(!Array.isArray(spriteAttributes[spriteName].pivot.y)){
                spriteAttributes[spriteName].pivot.y = [spriteAttributes[spriteName].pivot.y];
                arrayLengths.push(spriteAttributes[spriteName].pivot.y.length);
              } else {
                spriteAttributes[spriteName].pivot.y = spriteAttributes[spriteName].pivot.y;
                arrayLengths.push(spriteAttributes[spriteName].pivot.y.length);
              }
            }
          }

          if(spriteAttributes[spriteName].angle) {
            if (spriteAttributes[spriteName].angle) {
              if(!Array.isArray(spriteAttributes[spriteName].angle)){
                spriteAttributes[spriteName].angle = [spriteAttributes[spriteName].angle];
                arrayLengths.push(spriteAttributes[spriteName].angle.length);
              } else {
                spriteAttributes[spriteName].angle = spriteAttributes[spriteName].angle;
                arrayLengths.push(spriteAttributes[spriteName].angle.length);
              }
            }
          }

           
//now lets test.
            
     //       game[spriteName] = game.add.sprite(spriteAttributes[spriteName].position.y, spriteAttributes[spriteName].position.y, spriteName);


          //   //sprite anchor
          //   if (!spriteAttributes[spriteName].anchor) {
          //     spriteAttributes[spriteName].anchor = {};
          //  }
          //   if (!spriteAttributes[spriteName].anchor.x) {
          //     spriteAttributes[spriteName].anchor.x = 0;
          //   }
          //   if (!spriteAttributes[spriteName].anchor.y) {
          //     spriteAttributes[spriteName].anchor.y = 0;
          //   }
          //   //sprite scale
          //   if (!spriteAttributes[spriteName].scale) {
          //     spriteAttributes[spriteName].scale = {};
          //  }
          //   if (!spriteAttributes[spriteName].scale.x) {
          //     spriteAttributes[spriteName].scale.x = 1;
     
          //   }
          //   if (!spriteAttributes[spriteName].scale.y) {
          //     spriteAttributes[spriteName].scale.y = 1;
          //   }
          //   //sprite pivoting
          //   if (!spriteAttributes[spriteName].pivot) {
          //     spriteAttributes[spriteName].pivot = {};
          //  }
          //   if (!spriteAttributes[spriteName].pivot.x) {
          //     spriteAttributes[spriteName].pivot.x = 0;
     
          //   }
          //   if (!spriteAttributes[spriteName].pivot.y) {
          //     spriteAttributes[spriteName].pivot.y = 0;
          //   }
          //   //sprite rotation
          //   if (!spriteAttributes[spriteName].rotation) {
          //     spriteAttributes[spriteName].rotation = {};
          //  }
          //   if (!spriteAttributes[spriteName].rotation.x) {
          //     spriteAttributes[spriteName].rotation.x = 0;
     
          //   }
          //   if (!spriteAttributes[spriteName].rotation.y) {
          //     spriteAttributes[spriteName].rotation.y = 0;
          //   }
          //   //sprite angle
          //   if (!spriteAttributes[spriteName].angle) {
          //     spriteAttributes[spriteName].angle = 0;
          //  }
           
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
           
     console.log(spriteAttributes);

    //  game[spriteName] = game.add.sprite(spriteAttributes[spriteName].position.y, spriteAttributes[spriteName].position.y, spriteName);
   //hhmmmmm i don't get why its not working ha We need to do a for loop not a foreach...
   // lol see even i can look over simple shit.. Just gotta figure it out with console log methods.

    if(arrayLengths.length > 0){
      arrayLengths.sort(function(a, b){return b-a});
      console.log('FUCK' + arrayLengths);
     
 
  } else {
    arrayLengths.push('1');
    //here you want to create some var that the loop can check for and if it sees it.. It knows not to name the sprites sprite-1,etc.. You also have to crate that system.
  } 


  // now its remebers the last position of X even though its not as big.. SDo if we add 2 it should work until last... lets test. You see how im testing this with nodemon and how easy it is.
  for (key = 0; key < arrayLengths[0]; key++) { 
     
    
    if(spriteAttributes[spriteName].position.x && spriteAttributes[spriteName].position.x[key]){
      console.log('POSITION X' + spriteAttributes[spriteName].position.x[key]);
      lastPosX = spriteAttributes[spriteName].position.x[key];
    } else {
      // if it doesn't exist they didn't set value. set it to 0.
      if(lastPosX){
      console.log (lastPosX);
      } else {
        console.log('POS X 0');
      };
    };
    // we don't need to do it here becuase we always add them to 0 since it needs to be set for the create sprite option. LOL i lied... its because we only set to 0 if both ware not set haha ><
    if(spriteAttributes[spriteName].position.y &&  spriteAttributes[spriteName].position.y[key]){
      console.log(spriteAttributes[spriteName].position.y[key])
      lastPosY = spriteAttributes[spriteName].position.y[key];
    } else {
      if(lastPosY){
      console.log (lastPosY);
      } else {
        console.log('POS Y 0')
      };
    };
// why undefined though...
    if(spriteAttributes[spriteName].anchor){
      if(spriteAttributes[spriteName].anchor.x && spriteAttributes[spriteName].anchor.x[key]){
        console.log('ANCHOR X' + spriteAttributes[spriteName].anchor.x[key])
        lastAnchX = spriteAttributes[spriteName].anchor.x[key];
      } else {
        // we want a default now - because that means y had been set.. now x default needs to be set regardless if user sent it or not.
        // im trying to think of a way to not run these ones if they are shorter... but we might just have to send the default value.
        // SO do you see what I am doing?? I AM TROUBLESHOOTING EVERY FUCKIGN STEP... I make sure it works before I move on... now I know i can create the rest of the checks based off anchor and they should work including deleting object if they both are less...
        if(spriteAttributes[spriteName].anchor.y && spriteAttributes[spriteName].anchor.y[key]){
          if(!lastAnchX){
        lastAnchX = 0;
  
          }
          console.log('Anchor X set because Y is ' + lastAnchX);
        }else {
          console.log('DELETED ANCHOR X');
          delete spriteAttributes[spriteName].anchor.y
        }
      };
      // not set to 0 now.. set to what the last one was... w/e our users want really. but i think thi sis better... So now you should be able to create the rest.
      // that should make logic check anchor.y first.. so if it doesn't exist.. lets see lol. w000t! now add that to all of them
      if(spriteAttributes[spriteName].anchor.y && spriteAttributes[spriteName].anchor.y[key]){
        console.log('ANCHOR Y' + spriteAttributes[spriteName].anchor.y[key])
        lastAnchY = spriteAttributes[spriteName].anchor.y[key];
      } else {
        // we want a default now - because that means y had been set.. now x default needs to be set regardless if user sent it or not.
        if(spriteAttributes[spriteName].anchor.x && spriteAttributes[spriteName].anchor.x[key]){
          if(!lastAnchY) {
        lastAnchY = 0;
          }
        console.log('test y' + lastAnchY);
        } else {
          console.log('DELETED ANCHOR Y');
          delete spriteAttributes[spriteName].anchor.x
        }
      };

    };
      
      
  };



  //console.log(test['position.x']);
 
     
 
 
 
    };
    
   
  }
// that is the error i was talking about its because the "Position object is not created... Testing these things are crucial. Lets fix it."
  spriteAttributes = {
    "sprite1": {
      "position": {
        "x": [55,1337]
      },
      "anchor": {
        "x": [12,98,14,100],
        "y": [55] // see it can't make another because y is shorter.. but anchor x still set so its keeping it set to the default. you can set Y to the last position i guess....
      }
    }
  }
// Good we know this shit is working pretty good.. NEXXXXXT
  testfunction(spriteAttributes);
