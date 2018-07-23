import Model from 'ember-data/model';
import DS from 'ember-data';
import { computed, get } from '@ember/object';

const { attr, belongsTo } = DS;

/**
 * Define the check resource
 * 
 * Model to define the check resource
 * from updown API.
 * 
 * @module models/check
 * @augments module:ember-data/model
 * @public
 */
export default Model.extend({
    alias: attr('string'),
    url: attr('string'),
    down: attr('boolean'),
    downSince: attr('date'),
    uptime: attr('number'),

    /**
     * @type {module:models/description}
     */
    description: belongsTo('description'),

    /**
     * Return true if the service was hacked
     * and false if no.
     * 
     * @method
     * @returns {Boolean}
     */
    isHacked: computed('alias', function () {
        return get(this, 'alias').indexOf('hacked') >= 0 ? true : false;
    }),

    /**
     * Return the status of the service,
     * Up or Down.
     * 
     * @method
     * @returns {String}
     */
    status: computed('down', function () {
        return get(this, 'down') ? 'Down' : 'Up';
    }),
});
