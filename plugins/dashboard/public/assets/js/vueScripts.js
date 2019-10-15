var main = new Vue({
  el: '#main',
  data:{"navigations":[],"test":{},"testers":{}},

  watch: {

  },
  methods:{testMethod:function(txt) {
    console.log(txt);
  },
navClick:function(e) {
      sidenav.navClick(e);
  },
}
});var sidenav = new Vue({
  el: '#sidenav-main',
  data:{"navigations":[],"test":{},"testers":{}},

  watch: {

  },
  methods:{navClick:function(e) {

    console.log(e);
    
  },
}
});