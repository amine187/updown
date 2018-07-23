import { formatPercentage } from '../../../helpers/format-percentage';
import { module, test } from 'qunit';

module('Unit | Helper | format percentage', function () {
    test('formats 99.998 to 100.00%', function (assert) {
        assert.equal(formatPercentage([99.998]), '100.00%');
    });

    test('formats 90.756 to 90.76%', function (assert) {
        assert.equal(formatPercentage([90.756]), '90.76%');
    });
});

