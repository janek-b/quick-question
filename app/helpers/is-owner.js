import Ember from 'ember';

export default Ember.Helper.extend({
  session: Ember.inject.service(),
  onNewUser: Ember.observer('session.isAuthenticated', function() {
    this.recompute();
  }),
  compute(params, hash) {
    var auth = this.get('session').get('isAuthenticated');
    if (auth) {
      var sessionUser = this.get('session').get('currentUser.uid');
      if (sessionUser === params[0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
})
