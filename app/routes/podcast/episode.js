import Route from '@ember/routing/route';

export default class PodcastEpisodeRoute extends Route {
  model(params){
    return this.store.findRecord("podcast-episode", params.id);
  }
}
