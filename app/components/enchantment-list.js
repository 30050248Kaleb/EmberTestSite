import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class EnchantmentListComponent extends Component {
  @action
  showEnchantment(enchantment) {
    alert(`The enchantment's id is ${enchantment.name}.`);
  }
}
