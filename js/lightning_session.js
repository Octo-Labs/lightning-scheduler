App.LightningSession = DS.Model.extend({
  name: DS.attr('string'),
  scheduled_at: DS.attr('date')
})

App.LightningSession.FIXTURES = [
  {
    id: 1,
    name: 'oks.js test session',
    scheduled_at: new Date()
  }
]
