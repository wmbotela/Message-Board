import Ember from 'ember';

  var questions = [{
    owner:"William",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg"
  }];

export default Ember.Route.extend({
  model() {
    return questions;
  },

});
