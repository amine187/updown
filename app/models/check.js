import Model from 'ember-data/model';
import DS from 'ember-data';
// import Ember from 'ember';
// import formatDate from '../helpers/format-date';
import { computed, get } from '@ember/object';

const { attr, belongsTo } = DS;

export default Model.extend({
    description: belongsTo('description'),

    alias: attr('string'),
    url: attr('string'),
    down: attr('boolean'),
    down_since: attr('date'),
    uptime: attr('number'),

    isHacked: computed('alias', {
        get() {
            return get(this, 'alias').indexOf('hacked') >= 0 ? true : false;
        }
    }),

    status: computed('down', 'down_since', {
        get() {
            /*     let status = `Up`;
                if (get(this, 'down')) {
                    status = `Down since ${get(this, 'down_since')}`;
                } */
            return get(this, 'down') ? 'Down' : 'Up';
        }
    }),

});
