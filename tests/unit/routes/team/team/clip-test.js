import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | team/team/clip', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:team/team/clip');
    assert.ok(route);
  });
});
