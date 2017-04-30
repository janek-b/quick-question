import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion() {
      var params = {
        title: this.get('question.title'),
        body: this.get('question.body'),
        user: this.get('question.user')
      };
      console.log(params);
    }
  }
});
