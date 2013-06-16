App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['green!','red', 'yellow', 'blue'];
  }
});
