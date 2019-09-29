var socket = io('http://64.37.22.151:1339/');
//var socket = io('http://localhost:1339/');
var scene;
socket.on('connected', function (data) {

 // console.log(this);
 //console.log(game.scene.keys.GameState)
  scene = game.scene.keys.GameScene;


//   function cb() {
//   if(!scene['19-qbox']) {
//     setTimeout(function () { cb(); }, 0);
    
//   } else {

//     scene['19-qbox'].scaleX = 5;
//     scene['19-qbox'].scaleY = 5;

//   }

// }

 // console.log(game.scene.keys.GameState);


});


socket.on('grow', function (data) {

  
  // console.log(scene);

  // scene['19-qbox'].scaleX = scene['19-qbox'].scaleX+0.1;
  // scene['19-qbox'].scaleY = scene['19-qbox'].scaleY+0.1;

  // scene['0-qbox'].scaleX = scene['19-qbox'].scaleX+0.1;
  // scene['0-qbox'].scaleY = scene['19-qbox'].scaleY+0.1;

  // scene['144-qbox'].scaleX = scene['19-qbox'].scaleX+0.1;
  // scene['144-qbox'].scaleY = scene['19-qbox'].scaleY+0.1;

  // scene['144-qbox']._rotation = scene['19-qbox']._rotation+0.1;
 
 
 });

 function socketDeleteDot(gameObject) {

  console.log('test');
  //console.log(gameObject);

 socket.emit('deleteDot',
 {
   gameObject
 });

}

socket.on('deleteDot', function (gameObject) {
  var graphics = scene.add.graphics();

  console.log(graphics);

  graphics.lineStyle(20, 0x2ECC44);

    var group = gameObject.name.group;
    var index = gameObject.name.index;
    var obj = sprites[group][index];
    console.log(obj.position.x)

  //   graphics.moveTo(obj.position.x, obj.position.y);
  //   graphics.lineTo(obj.position.x+100, obj.position.y+100);
  //  // graphics.createRect();
  
  //   graphics.closePath();
  //   graphics.strokePath();
           sprites[group][index].size.x = 0;
           sprites[group][index].size.y = 0;


});