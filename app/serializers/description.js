import DS from 'ember-data';

/**
 * Change the result of resource description
 * Coming from the local API.
 * 
 * @module serializers/description
 * @augments module:ember-data
 * @public
 */
export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { descriptions: payload };
        
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
    normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
        payload.descriptions.id = id;
        payload.descriptions.content = payload.descriptions[id];
        delete  payload.descriptions[id];
        
        return this._super(store, primaryModelClass, payload, id, requestType);
    },
});
