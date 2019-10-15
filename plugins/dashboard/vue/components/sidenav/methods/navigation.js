methods = {
  navClick: function(e) {



    if(typeof e === 'string')
    console.log(e);
    else {

      e.preventDefault();
      var text = e.target.text.trim();
      console.log(text);
      main.nav.page = text;
    }
  }
}