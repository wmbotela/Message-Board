import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
    actions: {
      answerFormShow() {
        this.set('addNewAnswer', true);
      },
      saveAnswer() {
       var params = {
         author: this.get('author'),
         rating: this.get('rating'),
         answer: this.get('answer'),
         question: this.get('question')
       };
       this.set('addNewAnswer', false);
       this.sendAction('saveAnswer', params);
     }
    }
  });

  // export default Ember.Component.extend({
  //   showNewAnswerForm: false,
  //
  //   actions: {
  //     showNewForm(){
  //       this.set('showNewAnswerForm', true);
  //     },
  //
  //     save1(){
  //       var params = {
  //         content: this.get('content'),
  //         author: this.get('author'),
  //         question: this.get('question')
  //       };
  //       this.set('showNewAnswerForm', false);
  //       this.sendAction('save1', params);
  //     }
  //   }
  // });
