import Route from '@ember/routing/route';

export default class ArtistsRoute extends Route {
  async model() {
    return this.store.findAll("artist", {include: "team"});
  }
}
