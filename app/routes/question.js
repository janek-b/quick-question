import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var user = params.user;
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      user.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      }).then(function() {
        return user.save()
      });
      this.transitionTo('question');
    },
    editAnswer(answer, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
    },
    deleteAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    },
    editQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },
    deleteQuestion(question) {
      var answerDeletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answerDeletions).then(function() {
        return question.destroyRecord();
      }).then(() => this.transitionTo('index'));
    }
  }
});
