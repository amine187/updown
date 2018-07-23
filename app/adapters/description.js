import DS from 'ember-data';

/**
 * Allows to communicate with the local API
 * 
 * @module adapters/updown
 * @augments module:ember-data
 * @public
 */
export default DS.JSONAPIAdapter.extend({
    namespace: 'api/v1'
});