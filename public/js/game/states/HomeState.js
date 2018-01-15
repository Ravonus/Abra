var HomeState = {
  init: function (message) {
    this.message = 'Classic Memory Match';
  },

  create: function () {
    // this.state.start('GameState');
    
    var spriteCreation = function (spriteAttributes, sprite) {

      if (!spriteAttributes.position) {
        spriteAttributes.position = {};
      }
      if (!spriteAttributes.position.x) {
        spriteAttributes.position.x = 0;
      }
      if (!spriteAttributes.position.y) {
        spriteAttributes.position.y = 0;
      }
      if (!spriteAttributes.anchor) {
        spriteAttributes.anchor = {};
     }
      if (!spriteAttributes.anchor.x) {

        spriteAttributes.anchor.x = 0;
      }
      if (!spriteAttributes.anchor.y) {
        spriteAttributes.anchor.y = 0;
      }
      if (!spriteAttributes.scale) {
        spriteAttributes.scale = {};
     }
      if (!spriteAttributes.scale.x) {

        spriteAttributes.scale.x = 1;

      }
      if (!spriteAttributes.scale.y) {
        spriteAttributes.scale.y = 1;
      }
      
      if (spriteAttributes.parent) {
        game[spriteAttributes.parent].addChild(game.make.sprite(spriteAttributes.position.x, spriteAttributes.position.y, sprite));
      } else {
        game[sprite] = game.add.sprite(spriteAttributes.position.x, spriteAttributes.position.y, sprite);
      }
      game[sprite].anchor.x = spriteAttributes.anchor.x;
      game[sprite].anchor.y = spriteAttributes.anchor.y;
      game[sprite].scale.x =spriteAttributes.scale.x;
      game[sprite].scale.y = spriteAttributes.scale.y;
    }

    

    var spriteAttributes = {
      
      scale: {
        x:0.4,
        y:0.4
      },
      position:{
        x:game.world.centerX,
        
        y:game.world.centerY
      }



    }
    console.log(game.world.centerX)
    var x = 100
    for (var i = 0; i < 4; i++) {
      console.log('test')
     if (i == 0) {
      spriteCreation(spriteAttributes, 'Menu-Title');
     }else{
       var spriteAttributes2 = {
      parent: 'Menu-Title',
      
      scale: {
        x:0.4,
        y:0.4
      },
      position:{
        x: x,
        
      }
      
    

    }
     spriteCreation(spriteAttributes2, 'Menu-Title');
    x = x + 100
    }
  
     
    //eval("(" + this.game.phaserConfig.assets.abraCommands.abraSprite.create + ")")(spriteAttributes, 'Menu-Title');
  }
}
}
