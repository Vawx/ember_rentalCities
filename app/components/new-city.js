import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    save( ) {
      var params = {
        name: this.get('name'),
        attractions: this.get('attractions'),
      };
      this.set('addNewCity', false),
      this.sendAction('saveCity', params);
    }
  }
});
