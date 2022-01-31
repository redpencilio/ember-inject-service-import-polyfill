import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | greeter', function (hooks) {
  setupRenderingTest(hooks);

  test('it displays data from the service that was injected with the new `service` import', async function (assert) {
    await render(hbs`<Greeter />`);

    assert.dom(this.element).hasText('Hello, world!');
  });
});
