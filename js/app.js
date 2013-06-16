App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('lightning_sessions',function(){
    this.resource('lightning_session',
      { path: ':lightning_session_id' }
    );
    this.route('new');
  });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['green!','red', 'yellow', 'blue'];
  }
});

App.Store = DS.Store.extend({
  adapter: 'DS.FixtureAdapter'
});

Ember.Handlebars.registerBoundHelper('from_now', function(date) {
  return moment(date).fromNow();
});


Ember.Handlebars.registerBoundHelper('date', function(date) {
  return moment(date).format('dddd, MMM Do YYYY');
});
