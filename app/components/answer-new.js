import Ember from 'ember';

export default Ember.Component.extend({
  getUser: Ember.inject.service('get-user'),
  actions: {
    saveAnswer() {
      var userID = this.get('session').get('currentUser').uid;
      this.get('getUser').getUser(userID).then(user => {
        var params = {
          body: this.get('body'),
          timestamp: (new Date()).toJSON(),
          edit: "",
          question: this.get('question'),
          user: user
        };
        this.set('body', '');
        this.sendAction('saveAnswer', params);
      })
    }
  }
});
