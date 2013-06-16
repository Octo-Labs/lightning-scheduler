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


App.LightningSessionsNewController = Ember.ObjectController.extend({
  cancel: function(lightning_session){
    this.get('model.transaction').rollback();
    this.transitionToRoute('lightning_sessions');
  },
  save: function(lightning_session){
    lightning_session.on('didCreate',this,function(){
      this.transitionToRoute('lightning_session',this.get('model'));
    })
    lightning_session.get('transaction').commit();
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
