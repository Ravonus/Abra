//var socket = io('http://64.37.22.151:1339/');
var socket = io('http://localhost:1339/');
var scene;


socket.emits = {};

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


// socket.on('grow', function (data) {


//   console.log(data);
//   // console.log(scene);

//   // scene['19-qbox'].scaleX = scene['19-qbox'].scaleX+0.1;
//   // scene['19-qbox'].scaleY = scene['19-qbox'].scaleY+0.1;

//   // scene['0-qbox'].scaleX = scene['19-qbox'].scaleX+0.1;
//   // scene['0-qbox'].scaleY = scene['19-qbox'].scaleY+0.1;

//   // scene['144-qbox'].scaleX = scene['19-qbox'].scaleX+0.1;
//   // scene['144-qbox'].scaleY = scene['19-qbox'].scaleY+0.1;

//   // scene['144-qbox']._rotation = scene['19-qbox']._rotation+0.1;


// });

socket.setSocket = function(name, func) {

  socket.emits[name] = function (args) { socket.emit(name, args) };

  console.log(socket.emits)

  socket.on(name, eval(func));

}