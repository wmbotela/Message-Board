import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD

  owner: DS.attr(),
  image: DS.attr(),
  answers: DS.hasMany('answer', { async: true })

=======
  question: DS.attr(),
  author: DS.attr(),
>>>>>>> gh-pages

});
