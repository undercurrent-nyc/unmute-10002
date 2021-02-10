import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | team/team', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:team/team');
    assert.ok(route);
  });
});
