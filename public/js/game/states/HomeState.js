var HomeState = {
  init: function(message) {
    this.message = message;
  },

  create: function() {
    this.state.start('GameState');
  }
};
