import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.$('ul.tabs').tabs();
      // this.$('ul.tabs').tabs({'swipeable': true});
    });
  },
  willDestroyElement: function() {
    this.$().off('tabs');
  },
  questionsAnswered: Ember.computed('user.answers.@each.question', function() {
    return this.get('user.answers').reduce(function(questions, answer) {
      var question = answer.get('question');
      if (questions[question.get('title')]) {
        questions[question.get('title')].answers.push(answer);
      } else {
        questions[question.get('title')] = {};
        questions[question.get('title')].question = question;
        questions[question.get('title')].answers = [answer];
      }
      return questions;
    }, {})
  })
});
