import Ember from 'ember'

const { Route, inject } = Ember

export default Route.extend({
  session: inject.service(),
  beforeModel () {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('auth.login')
    }
  }
})
