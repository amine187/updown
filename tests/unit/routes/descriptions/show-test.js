import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | descriptions/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:descriptions/show');
    assert.ok(route);
  });
});
