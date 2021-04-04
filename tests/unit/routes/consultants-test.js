import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | consultants', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:consultants');
    assert.ok(route);
  });
});
