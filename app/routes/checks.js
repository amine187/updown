import Route from '@ember/routing/route';
import { set } from '@ember/object';

/**
 * Define check router
 * 
 * @module routes/checks
 * @augments module:ember/routing/route
 * @public
 */
export default Route.extend({
    /**
     * Return all checks.
     * 
     * @method
     * @returns {PromiseArray}
     */
    model() {
        return this.store.findAll('check');
    },

    /**
     * Set the model property.
     * 
     * @method
     * @returns {}
     */
    setupController(controller, model) {
        set(controller, 'checks', model)
    }
});
