var main = new Vue({
  el: '#main',
  data:{"navigations":[],"test":{},"projectName":"","nav":{"page":"Dashboard"},"testers":{}},

  watch: {

  },
  methods:{testMethod:function(txt) {
  },
navClick:function(e) {
      sidenav.navClick(e);
  },
projectChange:function(e) {

    if(typeof e === 'string')
    console.log(e);
    else {

      e.preventDefault();
      var text = e.target.text.trim();
      this.projectName = text;
    }

  },
},

  created: function() {
    Vue.nextTick( function() {
      var projectName = $('#tabs-text').children().children()[0].id;
      main.projectName = projectName;
    });
  }
});var sidenav = new Vue({
  el: '#sidenav-main',
  data:{"navigations":[],"test":{},"nav":{"page":"Dashboard"},"testers":{}},

  watch: {

  },
  methods:{navClick:function(e) {



    if(typeof e === 'string')
    console.log(e);
    else {

      e.preventDefault();
      var text = e.target.text.trim();
      console.log(text);
      main.nav.page = text;
    }
  },
}
});