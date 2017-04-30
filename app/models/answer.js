import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr(),
  timestamp: DS.attr(),
  edit: DS.attr(),
  question: DS.belongsTo('question', {async: true}),
  user: DS.belongsTo('user', {async: true})
});
