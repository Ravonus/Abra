var main = new Vue({
  el: '#main',
  data: {

  },

  watch: {

  },
  methods: {

  },

  created: function() {
    Vue.nextTick( function() {
      var projectName = $('#tabs-text').children().children()[0].id;
      main.projectName = projectName;
    });
  }
});