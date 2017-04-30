import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion(question, params) {
      this.sendAction('editQuestion', question, params);
    }
  }
});
