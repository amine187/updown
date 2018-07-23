import DS from 'ember-data';

const { attr, belongsTo } = DS;

/**
 * Define description resource
 * 
 * Model to define description resource
 * from the local API
 * 
 * @module models/description
 * @augments module:ember-data/model
 * @public
 */
export default DS.Model.extend({
    content: attr('string'),

    /**
     * @type {module:models/check}
     */
    check: belongsTo('check'),
});
