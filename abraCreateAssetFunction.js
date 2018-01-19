// what I am doing is testing my logic. I had an idea... but it doesn't mean its going to fucking work. I need to make sure the system is creating an array like its suppose to.
//now no matter what the value becomes an array. So once we do the loop/create its much easier to create the logic. You can tell its an array because its in square brackets. 
// so now you would want to clone this for all the other attributes. I am not going to do it just so I can get to array logic - You will have to fix other attributes.
//lol now its not working in other direction..
// worked in both directions. We are good. Lets just test no arrays just in case. It created the single array length like it was suppose to and looped still with a single object.
// next you want to create a good naming for multiple sprites - also make it so when no array is detected it knows not to use a -# naming for sprie.. because someone doesn't want to usxe
// sprite-1 if there is no sprite-1.. You can make an var in that check that I do that creats the array if there is no arrayLengths. So just add in the game logic and your other attributes.
let spriteAttributes = {
  sprite1: {
    position: {
      x: 10,
      y: [25,55,555]
    }
  }
}

let game;

var spriteCreation = function (spriteAttributes) {


  

  for (var key in Object.keys(spriteAttributes)) {
    var arrayLengths = new Array();
      spriteName = Object.keys(spriteAttributes)[key];
        

            if (spriteAttributes[spriteName].position.x) {
              if(!Array.isArray(spriteAttributes[spriteName].position.x)){
                spriteAttributes[spriteName].position.x = [spriteAttributes[spriteName].position.x];
                
                arrayLengths.push(spriteAttributes[spriteName].position.x.length);
    
              } else {
                  spriteAttributes[spriteName].position.x = spriteAttributes[spriteName].position.x;
                  arrayLengths.push(spriteAttributes[spriteName].position.x.length);
              }
            }

            if (spriteAttributes[spriteName].position.y) {
              if(!Array.isArray(spriteAttributes[spriteName].position.y)){
                spriteAttributes[spriteName].position.y = [spriteAttributes[spriteName].position.y];
                arrayLengths.push(spriteAttributes[spriteName].position.y.length);
              } else {
                spriteAttributes[spriteName].position.y = spriteAttributes[spriteName].position.y;
                arrayLengths.push(spriteAttributes[spriteName].position.y.length);
              }
            }

            

           

            
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
           
     console.log(spriteAttributes)

    //  game[spriteName] = game.add.sprite(spriteAttributes[spriteName].position.y, spriteAttributes[spriteName].position.y, spriteName);
   //hhmmmmm i don't get why its not working ha We need to do a for loop not a foreach...
   // lol see even i can look over simple shit.. Just gotta figure it out with console log methods.

    if(arrayLengths.length > 0){
      arrayLengths.sort(function(a, b){return b-a});
      console.log('FUCK' + arrayLengths)
     
 
  } else {
    arrayLengths.push('1');
    //here you want to create some var that the loop can check for and if it sees it.. It knows not to name the sprites sprite-1,etc.. You also have to crate that system.
  } 


  // now its remebers the last position of X even though its not as big.. SDo if we add 2 it should work until last... lets test. You see how im testing this with nodemon and how easy it is.
  for (key = 0; key < arrayLengths[0]; key++) { 
     
    if(spriteAttributes[spriteName].position.x[key]){
      console.log(spriteAttributes[spriteName].position.x[key])
      lastPosX = spriteAttributes[spriteName].position.x[key];
    } else {
      console.log (lastPosX);
    }
    if(spriteAttributes[spriteName].position.y[key]){
      console.log(spriteAttributes[spriteName].position.y[key])
      lastPosY = spriteAttributes[spriteName].position.y[key];
    } else {
      console.log (lastPosY);
    }
      
      
  };



  //console.log(test['position.x']);
 
     
 
 
 
    };
    
   
  }

  spriteCreation(spriteAttributes);
