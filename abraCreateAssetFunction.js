var spriteAttributes = { sprite1: { position: { y:0 } }, 'Menu-Title': { position: { x: 50 } } };

var spriteCreation = function (spriteAttributes) {
  console.log(testObject[spriteName].position.y);
  for (var key in Object.keys(spriteAttributes)) {
      spriteName = Object.keys(spriteAttributes)[key];
           
            if (!spriteAttributes[spriteName].position) {
              spriteAttributes[spriteName].position = {};
            }
            if (!spriteAttributes[spriteName].position.x) {
              spriteAttributes[spriteName].position.x = 0;
            }
            if (!spriteAttributes[spriteName].position.y) {
              spriteAttributes[spriteName].position.y = 0;
            }
            
            game[spriteName] = game.add.sprite(spriteAttributes[spriteName].position.y, spriteAttributes[spriteName].position.y, spriteName);


            //sprite anchor
            if (!spriteAttributes[spriteName].anchor) {
              spriteAttributes[spriteName].anchor = {};
           }
            if (!spriteAttributes[spriteName].anchor.x) {
              spriteAttributes[spriteName].anchor.x = 0;
            }
            if (!spriteAttributes[spriteName].anchor.y) {
              spriteAttributes[spriteName].anchor.y = 0;
            }
            //sprite scale
            if (!spriteAttributes[spriteName].scale) {
              spriteAttributes[spriteName].scale = {};
           }
            if (!spriteAttributes[spriteName].scale.x) {
              spriteAttributes[spriteName].scale.x = 1;
     
            }
            if (!spriteAttributes[spriteName].scale.y) {
              spriteAttributes[spriteName].scale.y = 1;
            }
            //sprite pivoting
            if (!spriteAttributes[spriteName].pivot) {
              spriteAttributes[spriteName].pivot = {};
           }
            if (!spriteAttributes[spriteName].pivot.x) {
              spriteAttributes[spriteName].pivot.x = 0;
     
            }
            if (!spriteAttributes[spriteName].pivot.y) {
              spriteAttributes[spriteName].pivot.y = 0;
            }
            //sprite rotation
            if (!spriteAttributes[spriteName].rotation) {
              spriteAttributes[spriteName].rotation = {};
           }
            if (!spriteAttributes[spriteName].rotation.x) {
              spriteAttributes[spriteName].rotation.x = 0;
     
            }
            if (!spriteAttributes[spriteName].rotation.y) {
              spriteAttributes[spriteName].rotation.y = 0;
            }
            //sprite angle
            if (!spriteAttributes[spriteName].angle) {
              spriteAttributes[spriteName].angle = 0;
           }
           
      game[sprite].position.x = spriteAttributes.position.x;
      game[sprite].position.y = spriteAttributes.position.y;
      game[sprite].anchor.x = spriteAttributes.anchor.x;
      game[sprite].anchor.y = spriteAttributes.anchor.y;
      game[sprite].scale.x = spriteAttributes.scale.x;
      game[sprite].scale.y = spriteAttributes.scale.y;
      game[sprite].pivot.x = spriteAttributes.pivot.x;
      game[sprite].pivot.y = spriteAttributes.pivot.y;
      // game[sprite].rotation.x = spriteAttributes.rotation.x;
      // game[sprite].rotation.y = spriteAttributes.rotation.y;
      game[sprite].angle = spriteAttributes.angle;
           
     
 
   
   
 
     
 
 
 
    };
    spriteCreation(spriteAttributes);
   
  }