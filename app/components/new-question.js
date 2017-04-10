import Ember from 'ember';

export default Ember.Component.extend({
    addNewQuestion: false,
    actions: {
      questionFormShow() {
        this.set('addNewQuestion', true);
      },

      saveQuestion() {
        var params = {
          question: this.get('question'),
          author: this.get('author'),
          
        };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion', params);

        }
      }
    });
