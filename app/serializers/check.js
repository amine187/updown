import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'token',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { checks: payload };

        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
