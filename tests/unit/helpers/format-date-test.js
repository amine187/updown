import { formatDate } from '../../../helpers/format-date';
import { module, test } from 'qunit';


module('Unit | Helper | format date', function () {
    test('formats 2018-05-08T13:35:15Z to 2018-5-08 14:35', function (assert) {
        assert.equal(formatDate(['2018-05-08T13:35:15Z']), '2018-5-8 14:35');
    });
});


