import Ember from 'ember';

export default Ember.Component.extend({
  getUser: Ember.inject.service('get-user'),
  actions: {
    saveQuestion() {
      var userID = this.get('session').get('currentUser').uid;
      this.get('getUser').getUser(userID).then(user => {
        var params = {
          title: this.get('title'),
          body: this.get('body') ? this.get('body') : "",
          timestamp: (new Date()).toJSON(),
          edit: "",
          user: user
        };
        this.sendAction('saveQuestion', params);
      });
      this.$('#new-question-header').click();
    }
  },
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$('.collapsible').collapsible();
    });
  },
  willDestroyElement: function() {
    this.$().off('collapsible');
  }
});
