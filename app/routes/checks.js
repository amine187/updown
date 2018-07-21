import Route from '@ember/routing/route';
import { set } from '@ember/object';

export default Route.extend({
    model() {
        return this.store.findAll('check');
    },

    setupController(controller, model) {
        set(controller, 'checks', model)
    }
});
