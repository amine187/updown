import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | description', function(hooks) {
  setupTest(hooks);

  test('should own a check', function(assert) {
    const Description = this.owner.lookup('service:store').modelFor('description');

    const relationship = get(Description, 'relationshipsByName').get('check');

    assert.equal(relationship.key, 'check', 'has relationship with check');
    assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
  });
});
