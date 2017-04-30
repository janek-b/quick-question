import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr(),
  edit: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  answers: DS.hasMany('answer', {async: true})
});
