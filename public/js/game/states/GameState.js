
var GameState = {

  create: function () {


    //Only reason I don't have the dir-spinner2 for th eobject and for the menu. Is because its using my new code that lets you decide if you want that tag. I am currently not using it. 
    //PULL this merge when you get home.. it will have a lot of extra stuff from what I am working on but its cool..
  //  var spriteAttributes = { spinner2: { position: { y:0 } }, 'Menu': { position: { x: 50 } } };
  spriteAttributes = game.phaserConfig.assets.createMenu; // This is coming from abra config.. you can add any attribute/sprite and it will create all with one line. (once we convert this back over of course)
    var spriteCreation = function (spriteAttributes) {
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
                  spriteAttributes[spriteName].angle = {};
               }
                if (!spriteAttributes[spriteName].angle.x) {
                  spriteAttributes[spriteName].angle.x = 0;
         
                }
                if (!spriteAttributes[spriteName].angle.y) {
                  spriteAttributes[spriteName].angle.y = 0;
                }
               
          game[spriteName].position.x =  spriteAttributes[spriteName].position.x;
          game[spriteName].position.y =  spriteAttributes[spriteName].position.y;
          game[spriteName].anchor.x =  spriteAttributes[spriteName].anchor.x;
          game[spriteName].anchor.y =  spriteAttributes[spriteName].anchor.y;
          game[spriteName].scale.x =  spriteAttributes[spriteName].scale.x;
          game[spriteName].scale.y =  spriteAttributes[spriteName].scale.y;
          game[spriteName].pivot.x =  spriteAttributes[spriteName].pivot.x;
          game[spriteName].pivot.y =  spriteAttributes[spriteName].pivot.y;
          game[spriteName].rotation.x =  spriteAttributes[spriteName].rotation.x;
          game[spriteName].rotation.y =  spriteAttributes[spriteName].rotation.y;
          game[spriteName].angle.x =  spriteAttributes[spriteName].angle.x;
          game[spriteName].angle.y =  spriteAttributes[spriteName].angle.y;
               
         
     
       
       
     
         
     
     
     
        };
        
       
      }

      spriteCreation(spriteAttributes);




    // sprites = new Object();
    // var y = 0;
    // console.log(game.phaserConfig.assets.loopCreate);
    // if(game.phaserConfig.assets.loopCreate){
    //   game.phaserConfig.assets.loopCreate.spinner2.x.forEach( (x) => {
    //     name = game.phaserConfig.assets.loopCreate.spinner2.name;
     
    //     var yPos = game.phaserConfig.assets.loopCreate.spinner2.y[y];
    //     console.log(yPos);
     
        
    //     sprites[`${name}${y}`] = game.add.sprite(x, yPos, 'spinner2');
    //     console.log(sprites);
    //     y = y+1;
    //   })


    // }
    
    // octopus = game.add.sprite(100, 100, 'seacreatures_json');
    // octopus.animations.add('swim', Phaser.Animation.generateFrameNames('octopus', 0, 24, '', 4), 30, true);
    // octopus.animations.play('swim');



    eval("(" + game.phaserConfig.assets.customCommands.animeFunction + ")")(40, 200, 'sprites-samuraisheet', 'slide', 50, true);


 

    game.add.tween(octopus).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 10000, true);


    //game.add.tween(octopus).to({ y: 250 }, 4000, Phaser.Easing.Quadratic.InOut, true, 0, 10000, true);

  },

  update: function () {


  },
  render: function () {

  }
};
