import Model from 'ember-data/model';
import DS from 'ember-data';
import Ember from 'ember';

const { attr } = DS;

const { computed, get } = Ember;

export default Model.extend({
    alias: attr('string'),
    url: attr('string'),
    down: attr('boolean'),
    down_since: attr('string'),
    uptime: attr('number'),

    isHacked: computed('alias', {
        get() {
            return get(this, 'alias').indexOf('hacked') >= 0 ? true : false;
        }
    }),

    status: computed('down', 'down_since', {
        get() {
            let status = `Up ${get(this, 'down_since')}`;
            if (get(this, 'down')) {
                status = `Down `;
            }
            return status;
        }
    }),

});
