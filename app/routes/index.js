import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('question');
    return this.store.findAll('answer');
  },

  action: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question',params);
      newQuestion.save();
      this.transitionTo('index');
    },


  }

});
