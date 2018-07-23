import DS from 'ember-data';

/**
 * Change the result of resource check
 * Coming from the updown API.
 * 
 * @module serializers/check
 * @augments module:ember-data
 * @public
 */
export default DS.RESTSerializer.extend({
    primaryKey: 'token',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { checks: payload };

        payload.checks.forEach(check => {
            check.downSince = check.down_since;
            check.description = check.token;
            delete check.down_since;
        });

        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
