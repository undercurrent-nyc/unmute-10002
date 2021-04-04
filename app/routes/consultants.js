import Route from '@ember/routing/route';

export default class ConsultantsRoute extends Route {
  async model() {
    return this.store.findAll("consultant", { include: "team" });
  }
}
