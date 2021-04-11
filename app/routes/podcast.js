import Route from '@ember/routing/route';

export default class PodcastRoute extends Route {
  async model() {
    return this.store.findAll("podcast-episode");
  }
}
