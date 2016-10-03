import Ember from 'ember';

const { inject, Route } = Ember;

export default Route.extend({
  flashMessages: inject.service(),
  actions: {
    doRegister () {
      this.get('currentModel').save().then(() => {
        this.transitionTo('auth.login');
        this.get('flashMessages').success('Registered! Please login now');
      }).catch((resp) => {
        const { errors } = resp;
        this.get('flashMessages').danger(errors.mapBy('detail').join(', '));
      });
    }
  },
  model () {
    return this.store.createRecord('user');
  }
});
