import Route from '@ember/routing/route';

export default class TeamsRoute extends Route {
  async model() {
    return this.store.findAll("team", { include: "artists" });
  }
}
