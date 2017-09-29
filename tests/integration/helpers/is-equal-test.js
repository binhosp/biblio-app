
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('is-equal', 'helper:is-equal', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', 'false');

  this.render(hbs`{{is-equal inputValue}}`);

  assert.equal(this.$().text().trim(), 'false');
});

