var spriteAttributes = { sprite1: { position: { y:0 } }, 'Menu-Title': { position: { x: 50 } } };

var spriteCreation = function (spriteAttributes) {
  console.log(testObject[spriteName].position.y);
  for (var key in Object.keys(spriteAttributes)) {
      spriteName = Object.keys(spriteAttributes)[key];
           
    var positionArray.x = [];
    var positionArray.y = [];
    if (!spriteAttributes[spriteName].position.x) {
      positionArray.x = 0
    } else {
      positionArray.x = spriteAttributes[spriteName].position.x
    }
    if (!spriteAttributes[spriteName].position.y) {
      positionArray.y = 0
    } else {
      positionArray.y = spriteAttributes[spriteName].position.y
    }

            game[spriteName] = game.add.sprite(spriteAttributes[spriteName].position.y, spriteAttributes[spriteName].position.y, spriteName);


            //sprite anchor
    var anchorArray.x = [];
    var anchorArray.y = [];
    if (!spriteAttributes[spriteName].anchor.x) {
      anchorArray.x = 0
    } else {
      anchorArray.x = spriteAttributes[spriteName].anchor.x
    }
    if (!spriteAttributes[spriteName].anchor.y) {
      anchorArray.y = 0
    } else {
      anchorArray.y = spriteAttributes[spriteName].anchor.y
    }
            //sprite scale
    var scaleArray.x = [];
    var scaleArray.y = [];
    if (!spriteAttributes[spriteName].scale.x) {
      scaleArray.x = 0
    } else {
      scaleArray.x = spriteAttributes[spriteName].scale.x
    }
    if (!spriteAttributes[spriteName].scale.y) {
      scaleArray.y = 0
    } else {
      scaleArray.y = spriteAttributes[spriteName].scale.y
    }
            //sprite pivoting
    var pivotArray.x = [];
    var pivotArray.y = [];
    if (!spriteAttributes[spriteName].pivot.x) {
      pivotArray.x = 0
    } else {
      pivotArray.x = spriteAttributes[spriteName].pivot.x
    }
    if (!spriteAttributes[spriteName].pivot.y) {
      pivotArray.y = 0
    } else {
      pivotArray.y = spriteAttributes[spriteName].pivot.y
    }
  }
            //sprite rotation
  var rotationArray = [];
  
  if (!spriteAttributes[spriteName].rotation) {
    rotationArray += 0
  } else {
    rotationArray += spriteAttributes[spriteName].rotation
  }
  if (!spriteAttributes[spriteName].rotation) {
    rotationArray -= 0
  } else {
    rotationArray -= spriteAttributes[spriteName].pivot
  }
  
            }
            //sprite angle
var angleArray = [];

if (!spriteAttributes[spriteName].angle) {
  angleArray += 0
} else {
  angleArray += spriteAttributes[spriteName].angle
}
if (!spriteAttributes[spriteName].angle) {
  angleArray -= 0
} else {
  angleArray -= spriteAttributes[spriteName].angle
}
           
      game[sprite].position.x = spriteAttributes.position.x;
      game[sprite].position.y = spriteAttributes.position.y;
      game[sprite].anchor.x = spriteAttributes.anchor.x;
      game[sprite].anchor.y = spriteAttributes.anchor.y;
      game[sprite].scale.x = spriteAttributes.scale.x;
      game[sprite].scale.y = spriteAttributes.scale.y;
      game[sprite].pivot.x = spriteAttributes.pivot.x;
      game[sprite].pivot.y = spriteAttributes.pivot.y;
      game[sprite].rotation.x = spriteAttributes.rotation;
      game[sprite].angle = spriteAttributes.angle;
           
     
 
   
   
 
     
 
 
 
    };
    spriteCreation(spriteAttributes);
   
  }