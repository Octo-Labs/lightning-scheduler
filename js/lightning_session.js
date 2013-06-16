App.LightningSession = DS.Model.extend({
  name: DS.attr('string'),
  scheduled_at: DS.attr('date')
})

App.LightningSessionsRoute = Ember.Route.extend({
  model: function() {
    return App.LightningSession.find();
  }
});


App.LightningSessionsNewRoute = Ember.Route.extend({
  model: function(){
    return App.LightningSession.createRecord({});
  }
});








App.LightningSession.FIXTURES = [
  {
    id: 1,
    name: 'oks.js test session',
    scheduled_at: new Date()
  },
  {
    id: 2,
    name: 'some other session',
    scheduled_at: new Date('2013/08/26')
  }
]
