import DS from 'ember-data';

const { attr, belongsTo } = DS;

export default DS.Model.extend({
    check: belongsTo('check'),

    content: attr('string'),
});
