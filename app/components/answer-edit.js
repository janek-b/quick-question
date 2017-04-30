import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(answer) {
      var params = {
        body: this.get('answer.body'),
        edit: (new Date()).toJSON(),
        user: this.get('answer.user')
      };
      this.sendAction('editAnswer', answer, params);
    },
    deleteAnswer(answer) {
      this.sendAction('deleteAnswer', answer);
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
