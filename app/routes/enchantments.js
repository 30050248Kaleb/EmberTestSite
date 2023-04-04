import Route from '@ember/routing/route';

export default class EnchantmentsRoute extends Route {
  async model() {
    const response = await fetch('/api/enchantments.json');
    const { data } = await response.json();
    return data;
  }
}
