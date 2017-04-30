import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion(question) {
      var params = {
        title: this.get('question.title'),
        body: this.get('question.body'),
        edit: (new Date()).toJSON(),
        user: this.get('question.user')
      };
      this.sendAction('editQuestion', question, params);
    },
    delete(question) {
      if (confirm("Are you sure you want to delete this question?")) {
        console.log("yes");
      }
    }
  },
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$('.modal-trigger').leanModal();
    });
  },
  willDestroyElement: function() {
    this.$().off('modal');
  }
});
