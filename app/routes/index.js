import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cities: this.store.findAll("city"),
      rentals: this.store.findAll("rental")
    });
  },

  actions: {
      destroyRental(rental) {
        rental.destroyRecord( );
        this.transitionTo('index');
      },
      destroyCity(city) {
        city.destroyRecord( );
        this.transitionTo('index');
      },
      saveRental(params) {
        var newRental = this.store.createRecord('rental', params);
        newRental.save( );
        this.transitionTo('index');
      },
      saveCity(params) {
        var newCity = this.store.createRecord('city', params);
        newCity.save( );
        this.transitionTo('index');
      },
  }
});
