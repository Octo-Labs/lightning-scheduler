App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('lightning_sessions');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['green!','red', 'yellow', 'blue'];
  }
});

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});
