import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function () {
    this._super(...arguments);
    Ember.$('.collapsible').collapsible();
    Ember.$('#user-tabs').tabs({'swipeable': true});
  }
});
