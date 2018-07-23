import DS from 'ember-data';
import ENV from 'updown/config/environment';

const { host, namespace, API_KEY } = ENV.APP;

/**
 * Main adapter allows to communicate 
 * with the updown API
 * 
 * @module adapters/updown
 * @augments module:ember-data
 * @public
 */
export default DS.RESTAdapter.extend({
    host: host,
    namespace: namespace,
    apiKey: API_KEY,
});
