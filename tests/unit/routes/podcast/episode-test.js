import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | podcast/episode', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:podcast/episode');
    assert.ok(route);
  });
});
