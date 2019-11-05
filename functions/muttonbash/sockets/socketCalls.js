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

      console.log(data)

      userList[index].setText(list[index]);

      var userObj = data.users;
      var userKeys = Object.keys(data.users);

      console.log(userObj[userKeys[index]])

      if(userObj[userKeys[index]] && userObj[userKeys[index]].ready) userList[index].setColor('#00ff00');


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