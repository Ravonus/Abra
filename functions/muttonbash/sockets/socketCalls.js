socket.setSocket('joinGame', function (data) {

  var list = data.names;

  if (!users) users = {}

  list.forEach(function (name) {

    if (!users[name]) users[name] = { name: name, ready: false }

  });

  names = '';

  userList.forEach((name, index) => {

    userList[index].setText('');

    userList[index].setText(list[index]);

    var userObj = data.users;
    var userKeys = Object.keys(data.users);

    if (userObj[userKeys[index]] && userObj[userKeys[index]].ready) userList[index].setColor('#00ff00');

    userList[list[index]] = index;

  });

});

socket.setSocket('hostCheck', function (data) {

  if(data.type === 'lobby') {
    if(data.host && Object.keys(users).length > 1) {

      var keys = Object.keys(users);
      var readyCheck = 0;
      keys.forEach( function(key) {
          if(users[key].ready) readyCheck++;
      });

      if(readyCheck === Object.keys(users).length) {
        startButton.visible = true;
        readyButton.visible = false;
      }
      
    } else {
      
    }
  }

});

socket.setSocket('readyUp', function (data) {



  users[data.player] = { name: data.player, ready: data.ready };



  var index = userList[data.player];



  if (data.ready) {


    userList[index].setColor('#00ff00');



  } else {


    userList[index].setColor('#fff');


  }

  socket.emits.hostCheck({ type: "lobby", room });

});



socket.setSocket('startGame', function (data) {

  if(data) {

    game.scene.keys.MenuScene.scene.stop('MenuScene');
    scene.scene.start('GameScene');

  }


});