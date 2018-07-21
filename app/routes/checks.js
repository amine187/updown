import Route from '@ember/routing/route';

const { set } = Ember;

export default Route.extend({
    model() {
        return this.store.findAll('check');
    },

    setupController(controller, model) {
        set(controller, 'checks', model)
    }
});
