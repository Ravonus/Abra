socket.setSocket('joinGame', function (data) {



  console.log('joinGame');

  var list = data.names;

  console.log(data);

  if (!users) users = {}

  list.forEach(function (name) {

    if (!users[name]) users[name] = { name: name, ready: false }

  });

  names = '';

  userList.forEach((name, index) => {

      userList[index].setText('');

      userList[index].setText(list[index]);

      userList[list[index]] = index;

    

  });

});

socket.setSocket('readyUp', function (data) {

  console.log(data);

  users[data.player] = { name: data.player, ready: data.ready };

  var index = userList[data.player];

  if (data.ready) {

    userList[index].setColor('#00ff00');


  } else {

    userList[index].setColor('#fff');

  }

});