

socket.setSocket('joinGame', function (list) {

  console.log(list);

    console.log('joinGame');

    users = list;

    names = '';

    list.forEach(name => {

      names += name + '\n\r';
      
    });

   userList.setText(names);

});

