import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    primaryKey: 'token',
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { checks: payload };

        payload.checks.forEach(check => {
            check.description = check.token;
        });

        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
