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
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    }
  },
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$('.modal').modal();
    });
  },
  willDestroyElement: function() {
    this.$().off('modal');
  }
});
