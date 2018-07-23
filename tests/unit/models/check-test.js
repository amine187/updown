import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | check', function (hooks) {
  setupTest(hooks);

  test('it calculate check information properly', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('check', {
      alias: 'SuitePad is hacked?',
      url: 'http://suitepad.de',
      down: true,
      downSince: '2018-05-08T13:35:15Z',
      uptime: 0,
    });
    assert.ok(model.get('isHacked'), 'SuitePad hacked');
    assert.equal(model.get('status'), 'Down', 'Service is down');
  });

  test('should own a description', function(assert) {
    const Check = this.owner.lookup('service:store').modelFor('check');

    const relationship = get(Check, 'relationshipsByName').get('description');

    assert.equal(relationship.key, 'description', 'has relationship with description');
    assert.equal(relationship.kind, 'belongsTo', 'kind of relationship is belongsTo');
  });
});
