import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  getUser(userID) {
    return this.get('store').query('user', {
      orderBy: 'userID',
      equalTo: userID}).then(users => {
        return users.get('firstObject').id;
      }).then(result => {
        return this.get('store').findRecord('user', result);
      }).then(user => {
        this.set('currentUser', user);
        return user;
      });
  },
});
