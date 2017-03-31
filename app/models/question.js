import DS from 'ember-data';

export default DS.Model.extend({

  owner: DS.attr(),
  image: DS.attr(),
  answers: DS.hasMany('answer', { async: true })


});
