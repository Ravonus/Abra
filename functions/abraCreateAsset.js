{

  function createSprite(obj) {

    sprites[spriteNameAsset] = game.add.sprite(parseInt(lastPosX), parseInt(lastPosY), spriteName);

    if (obj.setInteractive) {
      sprites[spriteNameAsset].setInteractive();
    }

    if (obj.setInteractive && obj.group) {
     // sprites[obj.group].setInteractive();
    game.input.setHitArea(sprites[obj.group].getChildren());
    }
    
  }

  var game = this.game.scene.keys[mainScene];

  var plugins = this.game.scene.keys.PreloadScene;

  var lastPosX, lastPosY, lastSclX, lastSclY, lastAnchX, lastAnchY, lastPivX, lastPivY, Ang;

  for (var key in Object.keys(spriteAttributes)) {
    var arrayLengths = new Array();
    spriteName = Object.keys(spriteAttributes)[key]
    spriteNameAsset = Object.keys(spriteAttributes)[key];

    var isLoop = false;

    if (spriteAttributes[spriteName].position) {
      if (spriteAttributes[spriteName].position.x) {
        if (!Array.isArray(spriteAttributes[spriteName].position.x)) {
          spriteAttributes[spriteName].position.x = [spriteAttributes[spriteName].position.x];

          arrayLengths.push(spriteAttributes[spriteName].position.x.length);

        } else {
          arrayLengths.push(spriteAttributes[spriteName].position.x.length);
        };
      };
      if (spriteAttributes[spriteName].position.y) {

        if (!Array.isArray(spriteAttributes[spriteName].position.y)) {
          spriteAttributes[spriteName].position.y = [spriteAttributes[spriteName].position.y];
          arrayLengths.push(spriteAttributes[spriteName].position.y.length);
        } else {
          arrayLengths.push(spriteAttributes[spriteName].position.y.length);

        };
      };
    } else {
      spriteAttributes[spriteName].position = new Object();
      spriteAttributes[spriteName].position.x = [0];
      arrayLengths.push(spriteAttributes[spriteName].position.x.length);
      spriteAttributes[spriteName].position.y = [0];
      arrayLengths.push(spriteAttributes[spriteName].position.y.length);

    };
    if (spriteAttributes[spriteName].anchor) {

      if (spriteAttributes[spriteName].anchor.x) {

        if (!Array.isArray(spriteAttributes[spriteName].anchor.x)) {

          spriteAttributes[spriteName].anchor.x = [spriteAttributes[spriteName].anchor.x];
          arrayLengths.push(spriteAttributes[spriteName].anchor.x.length);
        } else {

          arrayLengths.push(spriteAttributes[spriteName].anchor.x.length);
        };
      };

      if (spriteAttributes[spriteName].anchor.y) {
        if (!Array.isArray(spriteAttributes[spriteName].anchor.y)) {
          spriteAttributes[spriteName].anchor.y = [spriteAttributes[spriteName].anchor.y];
          arrayLengths.push(spriteAttributes[spriteName].anchor.y.length);
        } else {
          arrayLengths.push(spriteAttributes[spriteName].anchor.y.length);
        };
      };
    };
    if (spriteAttributes[spriteName].scale) {
      if (spriteAttributes[spriteName].scale.x) {
        if (!Array.isArray(spriteAttributes[spriteName].scale.x)) {
          spriteAttributes[spriteName].scale.x = [spriteAttributes[spriteName].scale.x];
          arrayLengths.push(spriteAttributes[spriteName].scale.x.length);
        } else {
          spriteAttributes[spriteName].scale.x = spriteAttributes[spriteName].scale.x;
          arrayLengths.push(spriteAttributes[spriteName].scale.x.length);
        };
      };


      if (spriteAttributes[spriteName].scale.y) {
        if (!Array.isArray(spriteAttributes[spriteName].scale.y)) {
          spriteAttributes[spriteName].scale.y = [spriteAttributes[spriteName].scale.y];
          arrayLengths.push(spriteAttributes[spriteName].scale.y.length);
        } else {
          spriteAttributes[spriteName].scale.y = spriteAttributes[spriteName].scale.y;
          arrayLengths.push(spriteAttributes[spriteName].scale.y.length);
        };
      };
    };
    if (spriteAttributes[spriteName].pivot) {
      if (spriteAttributes[spriteName].pivot.x) {
        if (!Array.isArray(spriteAttributes[spriteName].pivot.x)) {
          spriteAttributes[spriteName].pivot.x = [spriteAttributes[spriteName].pivot.x];
          arrayLengths.push(spriteAttributes[spriteName].pivot.x.length);
        } else {
          spriteAttributes[spriteName].pivot.x = spriteAttributes[spriteName].pivot.x;
          arrayLengths.push(spriteAttributes[spriteName].pivot.x.length);
        };
      };

      if (spriteAttributes[spriteName].pivot.y) {
        if (!Array.isArray(spriteAttributes[spriteName].pivot.y)) {
          spriteAttributes[spriteName].pivot.y = [spriteAttributes[spriteName].pivot.y];
          arrayLengths.push(spriteAttributes[spriteName].pivot.y.length);
        } else {
          spriteAttributes[spriteName].pivot.y = spriteAttributes[spriteName].pivot.y;
          arrayLengths.push(spriteAttributes[spriteName].pivot.y.length);
        };
      };
    };

    if (spriteAttributes[spriteName].angle) {
      if (spriteAttributes[spriteName].angle) {
        if (!Array.isArray(spriteAttributes[spriteName].angle)) {
          spriteAttributes[spriteName].angle = [spriteAttributes[spriteName].angle];
          arrayLengths.push(spriteAttributes[spriteName].angle.length);
        } else {
          spriteAttributes[spriteName].angle = spriteAttributes[spriteName].angle;
          arrayLengths.push(spriteAttributes[spriteName].angle.length);
        };
      };
    };


    if (arrayLengths.length > 0) {
      arrayLengths.sort(function (a, b) { return b - a });



    } else {
      arrayLengths.push('1');

    };

    spriteNameAsset = spriteName;

    for (key = 0; key < arrayLengths[0]; key++) {

      if (spriteAttributes[spriteName].position.x && spriteAttributes[spriteName].position.x[key]) {

        lastPosX = spriteAttributes[spriteName].position.x[key];
        if (spriteAttributes[spriteName].position.x.length > 1) {
          isLoop = true;
        };
      } else {


        if (lastPosX) {

        } else {

        };

      };

      if (spriteAttributes[spriteName].position.y && spriteAttributes[spriteName].position.y[key]) {

        lastPosY = spriteAttributes[spriteName].position.y[key];

        if (spriteAttributes[spriteName].position.y.length > 1) {
          isLoop = true;

        };
      } else {
        if (lastPosY) {

        } else {

        };
      };

      if (spriteAttributes[spriteName].anchor) {
        if (spriteAttributes[spriteName].anchor.x && spriteAttributes[spriteName].anchor.x[key]) {

          lastAnchX = spriteAttributes[spriteName].anchor.x[key];
          if (spriteAttributes[spriteName].anchor.x.length > 1) {
            isLoop = true;
          };
        } else {

          if (spriteAttributes[spriteName].anchor.y && spriteAttributes[spriteName].anchor.y[key]) {
            if (!lastAnchX) {
              lastAnchX = 0;

            };

          } else {

            delete spriteAttributes[spriteName].anchor.y;
          };
        };

        if (spriteAttributes[spriteName].anchor.y && spriteAttributes[spriteName].anchor.y[key]) {

          lastAnchY = spriteAttributes[spriteName].anchor.y[key];
          if (spriteAttributes[spriteName].anchor.y.length > 1) {
            isLoop = true;
          };
        } else {

          if (spriteAttributes[spriteName].anchor.x && spriteAttributes[spriteName].anchor.x[key]) {
            if (!lastAnchY) {
              lastAnchY = 0;
            };

          } else {

            delete spriteAttributes[spriteName].anchor.x;
          };
        };

      };

      if (spriteAttributes[spriteName].scale) {
        if (spriteAttributes[spriteName].scale.x && spriteAttributes[spriteName].scale.x[key]) {

          lastSclX = spriteAttributes[spriteName].scale.x[key];
          if (spriteAttributes[spriteName].scale.x.length > 1) {
            isLoop = true;
          };
        } else {
          if (spriteAttributes[spriteName].scale.y && spriteAttributes[spriteName].scale.y[key]) {
            if (!lastSclX) {
              lastSclX = 0;

            };

          } else {

            delete spriteAttributes[spriteName].scale.y;
          };
        };

        if (spriteAttributes[spriteName].scale.y && spriteAttributes[spriteName].scale.y[key]) {

          lastSclY = spriteAttributes[spriteName].scale.y[key];
          if (spriteAttributes[spriteName].scale.y.length > 1) {
            isLoop = true;
          };
        } else {

          if (spriteAttributes[spriteName].scale.x && spriteAttributes[spriteName].scale.x[key]) {
            if (!lastSclY) {
              lastSclY = 0;
            };

          } else {

            delete spriteAttributes[spriteName].scale.x;
          };
        };

      };

      if (spriteAttributes[spriteName].pivot) {
        if (spriteAttributes[spriteName].pivot.x && spriteAttributes[spriteName].pivot.x[key]) {

          lastPivX = spriteAttributes[spriteName].pivot.x[key];
          if (spriteAttributes[spriteName].pivot.x.length > 1) {
            isLoop = true;
          };
        } else {

          if (spriteAttributes[spriteName].pivot.y && spriteAttributes[spriteName].pivot.y[key]) {
            if (!lastPivX) {
              lastPivX = 0;

            };

          } else {

            delete spriteAttributes[spriteName].pivot.y;
          };

        };

        if (spriteAttributes[spriteName].pivot.y && spriteAttributes[spriteName].pivot.y[key]) {

          lastPivY = spriteAttributes[spriteName].pivot.y[key];

          if (spriteAttributes[spriteName].pivot.y.length > 1) {
            isLoop = true;

          };
        } else {

          if (spriteAttributes[spriteName].pivot.x && spriteAttributes[spriteName].pivot.x[key]) {
            if (!lastPivY) {
              lastPivY = 0;
            };

          } else {

            delete spriteAttributes[spriteName].pivot.x;
          };
        };

      };

      if (spriteAttributes[spriteName].angle && spriteAttributes[spriteName].angle[key]) {

        Ang = spriteAttributes[spriteName].angle[key];
        if (spriteAttributes[spriteName].angle.length > 1) {
          isLoop = true;
        };
      } else {
        spriteAttributes[spriteName].angle = {};

      };

      if (isLoop) {


        spriteNameAsset = key + "-" + spriteName;

      };

      if (spriteAttributes[spriteName]['3dcamera']) {

        groups[spriteName] = game.add.group();
        var FOV = spriteAttributes[spriteName]['3dcamera'].FOV;
        var setZ = spriteAttributes[spriteName]['3dcamera'].setZ;
        var setPixelScale = spriteAttributes[spriteName]['3dcamera'].setPixelScale;

        cameras[spriteName] = game.cameras3d.add(FOV).setZ(setZ).setPixelScale(setPixelScale);


        sprites[spriteName] = cameras[spriteName].createRect(spriteAttributes[spriteName].count, spriteAttributes[spriteName].distance, spriteName);

        if (spriteAttributes[spriteName]['3dcamera'].blend)
          for (var i = 0; i < sprites[spriteName].length; i++) {

         //   sprites[spriteName][i].gameObject.setBlendMode(Phaser.BlendModes.ADD);
            
            sprites[spriteName][i].gameObject.name = spriteName;

            game.input.setHitArea(sprites[spriteName][i].gameObject);
            sprites[spriteName][i].gameObject.sprite3d = sprites[spriteName][i];
            sprites[spriteName][i].name = {group:spriteName,index:i}
            
            if (spriteAttributes[spriteName]['3dcamera'].transform) {
              var rotateX = spriteAttributes[spriteName]['3dcamera'].transform.rotateX;
              var rotateY = spriteAttributes[spriteName]['3dcamera'].transform.rotateY;
              var rotateZ = spriteAttributes[spriteName]['3dcamera'].transform.rotateZ;
              transform[spriteName] = new Phaser.Math.Matrix4().rotateX(rotateX).rotateY(rotateY).rotateZ(rotateZ);
            }

          }

      } else {
        if (spriteAttributes[spriteName].group) {
          var group = spriteAttributes[spriteName].group;

          if (!sprites[group]) {

            sprites[group] = game.add.group();

          }


          createSprite(spriteAttributes[spriteName]);
        //  sprites[spriteNameAsset] = game.add.sprite(parseInt(lastPosX), parseInt(lastPosY), spriteName);

          //sprites[group].create(parseInt(lastPosX), parseInt(lastPosY), spriteName);

          sprites[group].add(sprites[spriteNameAsset]);

        } else {

          sprites[spriteNameAsset] = game.add.sprite(parseInt(lastPosX), parseInt(lastPosY), spriteName);

        }

      }

      if (lastSclX) {
        sprites[spriteNameAsset].scaleX = lastSclX;
      };

      if (lastSclY) {
        sprites[spriteNameAsset].scaleY = lastSclY;
      };

      if (lastPivX) {
        sprites[spriteNameAsset].pivotX = parseInt(lastPivX);
      };

      if (lastPivY) {
        sprites[spriteNameAsset].pivotY = parseInt(lastPivY);
      };

      if (Ang) {
        sprites[spriteNameAsset].angle = parseInt(Ang);
      };

      lastPosX = undefined;
      lastPosY = undefined;
      lastAnchX = undefined;
      lastAnchY = undefined;
      lastSclX = undefined;
      lastSclY = undefined;
      Ang = undefined;

    };

  };

}