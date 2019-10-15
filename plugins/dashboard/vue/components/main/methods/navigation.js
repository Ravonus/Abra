methods = {
  navClick: function(e) {
      sidenav.navClick(e);
  },
  projectChange: function(e) {

    if(typeof e === 'string')
    console.log(e);
    else {

      e.preventDefault();
      var text = e.target.text.trim();
      this.projectName = text;
    }

  }
}