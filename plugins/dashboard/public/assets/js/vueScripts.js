var main = new Vue({
  el: '#main',
  data:{"navigations":[],"test":{},"testers":{}},

  watch: {

  },
  methods:{terd:function(txt) {
    alert(txt);
  },
testMethod:function(txt) {
    console.log(txt);
  },
}
});var sidenav = new Vue({
  el: '#sidenav-main',
  data:{"navigations":[],"test":{},"testers":{}},

  watch: {

  },
  methods:{terd:function(txt) {
    alert(txt);
  },
testMethod:function(txt) {
    console.log(txt);
  },
}
});