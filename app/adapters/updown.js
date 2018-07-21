import DS from 'ember-data';
import ENV from 'updown/config/environment';

const { host, namespace, API_KEY } = ENV.APP;

export default DS.RESTAdapter.extend({
    host: host,
    namespace: namespace,
    apiKey: API_KEY,
});
